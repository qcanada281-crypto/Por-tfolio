/**
 * ===================================================================
 * ABDELILAH EL ABED — ADVANCED SPRING SHUFFLE ENGINE (21ST.DEV STYLE)
 * ===================================================================
 * Inspired by 21st.dev ShuffleGrid spring physics & layout morphing.
 * Implements:
 * - FLIP (First, Last, Invert, Play) smooth spatial reordering
 * - Framer-motion style spring easing: cubic-bezier(0.34, 1.45, 0.64, 1)
 * - Automatic continuous shuffle loop (every 3.8s)
 * - Smart UI/UX: Pause on hover (mouseenter), resume on leave (mouseleave)
 * - Viewport awareness via IntersectionObserver (conserves GPU/CPU)
 * - Tab visibility guard (pauses when browser tab is hidden)
 * - Category filter morphing
 * - Manual trigger & Auto-shuffle Play/Pause toggle
 */

(function (window, document) {
    'use strict';

    let isShuffling = false;
    let isAutoShuffleEnabled = true;
    let autoShuffleTimer = null;
    let isHovered = false;
    let isInViewport = true;
    const SHUFFLE_INTERVAL = 3800; // 3.8s interval between shuffles

    /**
     * Fisher-Yates array permutation algorithm (identical to 21st.dev)
     */
    function fisherYatesShuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex]
            ];
        }
        return array;
    }

    /**
     * Updates active state classes on category filter buttons
     * @param {string} activeFilter
     */
    function updateFilterButtonsUI(activeFilter) {
        const filterBtns = document.querySelectorAll('.project-filter-btn');
        filterBtns.forEach(btn => {
            const btnFilter = btn.getAttribute('data-filter') || 'all';
            if (btnFilter === activeFilter) {
                btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
                btn.classList.add('bg-[#CFFF04]', 'text-black', 'shadow-[0_0_15px_rgba(207,255,4,0.4)]');
            } else {
                btn.classList.remove('bg-[#CFFF04]', 'text-black', 'shadow-[0_0_15px_rgba(207,255,4,0.4)]');
                btn.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
            }
        });
    }

    /**
     * Updates the UI badge/toggle for Auto-Shuffle state
     */
    function updateAutoShuffleUI() {
        const indicator = document.getElementById('auto-shuffle-pulse');
        const textLabel = document.getElementById('auto-shuffle-text');
        const toggleBtn = document.getElementById('btn-toggle-auto-shuffle');

        if (!toggleBtn) return;

        if (isAutoShuffleEnabled) {
            if (indicator) {
                indicator.className = 'w-2 h-2 rounded-full bg-[#CFFF04] shadow-[0_0_8px_#CFFF04] animate-pulse';
            }
            if (textLabel) {
                textLabel.textContent = 'Auto : ON';
                textLabel.classList.remove('text-slate-400');
                textLabel.classList.add('text-[#CFFF04]');
            }
            toggleBtn.classList.remove('opacity-60');
            toggleBtn.setAttribute('title', 'Cliquer pour mettre en pause le mélange automatique');
        } else {
            if (indicator) {
                indicator.className = 'w-2 h-2 rounded-full bg-slate-500 shadow-none';
            }
            if (textLabel) {
                textLabel.textContent = 'Auto : PAUSE';
                textLabel.classList.remove('text-[#CFFF04]');
                textLabel.classList.add('text-slate-400');
            }
            toggleBtn.classList.add('opacity-60');
            toggleBtn.setAttribute('title', 'Cliquer pour activer le mélange automatique');
        }
    }

    /**
     * Executes the FLIP Shuffle Animation across all visible cards with spring physics
     * @param {boolean} isManual - True if user clicked manual shuffle button
     */
    function performCardShuffle(isManual = false) {
        if (isShuffling) return;

        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        // Animate shuffle button icon if manually triggered
        if (isManual) {
            const shuffleBtn = document.getElementById('btn-shuffle-projects');
            if (shuffleBtn) {
                const icon = shuffleBtn.querySelector('.shuffle-icon') || shuffleBtn.querySelector('svg');
                if (icon) {
                    const currentRot = parseInt(icon.dataset.rot || '0', 10) + 360;
                    icon.style.transition = 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    icon.style.transform = `rotate(${currentRot}deg)`;
                    icon.dataset.rot = currentRot.toString();
                }
            }
        }

        // Only shuffle visible cards (not filtered out)
        const cards = Array.from(grid.querySelectorAll('.project-card:not(.is-hidden)'));
        if (cards.length <= 1) return;

        isShuffling = true;

        // 1. FIRST: Record bounding boxes before reordering
        const firstPositions = new Map();
        cards.forEach(card => {
            firstPositions.set(card, card.getBoundingClientRect());
        });

        // 2. REORDER: Fisher-Yates array permutation ensuring order changes
        const shuffled = [...cards];
        let changed = false;
        let attempts = 0;
        while (!changed && attempts < 10) {
            attempts++;
            fisherYatesShuffle(shuffled);
            changed = shuffled.some((c, i) => c !== cards[i]);
        }

        // Append to DOM in new order
        shuffled.forEach(card => grid.appendChild(card));

        // 3. LAST: Record new bounding boxes after DOM reorder
        const lastPositions = new Map();
        cards.forEach(card => {
            lastPositions.set(card, card.getBoundingClientRect());
        });

        // 4. INVERT: Move cards back to their initial screen positions instantly
        cards.forEach(card => {
            const first = firstPositions.get(card);
            const last = lastPositions.get(card);
            if (!first || !last) return;

            const dx = first.left - last.left;
            const dy = first.top - last.top;

            card.style.transition = 'none';
            card.style.transform = `translate(${dx}px, ${dy}px) scale(0.97)`;
            card.style.zIndex = '30';
        });

        // Force browser layout reflow
        void grid.offsetHeight;

        // 5. PLAY: Spring animation to natural position (0, 0)
        let maxDelay = 0;
        cards.forEach((card, index) => {
            // Subtle stagger delay inspired by framer-motion layout
            const staggerDelay = (index % 4) * 30;
            const animationDuration = 850; // ms
            maxDelay = Math.max(maxDelay, staggerDelay + animationDuration);

            setTimeout(() => {
                // Spring physics easing: cubic-bezier(0.34, 1.45, 0.64, 1) provides elastic bounce
                card.style.transition = `transform ${animationDuration}ms cubic-bezier(0.34, 1.45, 0.64, 1), box-shadow 0.45s ease, border-color 0.45s ease`;
                card.style.transform = 'translate(0px, 0px) scale(1)';
                card.style.boxShadow = '0 0 25px rgba(207, 255, 4, 0.35)';
                card.style.borderColor = 'rgba(207, 255, 4, 0.6)';

                setTimeout(() => {
                    card.style.zIndex = '';
                    card.style.boxShadow = '';
                    card.style.borderColor = '';
                    card.style.transform = '';
                    card.style.transition = '';
                }, animationDuration);
            }, staggerDelay);
        });

        setTimeout(() => {
            isShuffling = false;
            // Schedule next automatic shuffle if enabled
            scheduleNextAutoShuffle();
        }, maxDelay);
    }

    /**
     * Filters cards by category and smoothly morphs the remaining cards using FLIP
     * @param {string} filter
     */
    function performFilterShuffle(filter) {
        if (isShuffling) return;
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        isShuffling = true;
        clearTimeout(autoShuffleTimer);
        updateFilterButtonsUI(filter);

        const allCards = Array.from(grid.querySelectorAll('.project-card'));

        // 1. FIRST: Record bounding box of currently visible cards
        const firstPositions = new Map();
        allCards.forEach(card => {
            if (!card.classList.contains('is-hidden') && card.style.display !== 'none') {
                firstPositions.set(card, card.getBoundingClientRect());
            }
        });

        // 2. TOGGLE VISIBILITY
        allCards.forEach(card => {
            const cardCat = card.getAttribute('data-category') || '';
            const shouldShow = filter === 'all' || cardCat.includes(filter);

            if (shouldShow) {
                card.classList.remove('is-hidden');
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
            } else {
                card.classList.add('is-hidden');
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.pointerEvents = 'none';
            }
        });

        // 3. LAST: Record new bounding boxes of visible cards
        const visibleCards = allCards.filter(card => !card.classList.contains('is-hidden'));
        const lastPositions = new Map();
        visibleCards.forEach(card => {
            lastPositions.set(card, card.getBoundingClientRect());
        });

        // 4. INVERT & PLAY
        visibleCards.forEach((card) => {
            const first = firstPositions.get(card);
            const last = lastPositions.get(card);

            if (first && last) {
                const dx = first.left - last.left;
                const dy = first.top - last.top;

                card.style.transition = 'none';
                card.style.transform = `translate(${dx}px, ${dy}px) scale(0.97)`;
                card.style.zIndex = '25';
            } else {
                card.style.transition = 'none';
                card.style.transform = 'scale(0.85)';
                card.style.opacity = '0';
            }
        });

        // Force browser layout reflow
        void grid.offsetHeight;

        visibleCards.forEach((card, index) => {
            const staggerDelay = (index % 4) * 30;
            setTimeout(() => {
                card.style.transition = 'transform 0.75s cubic-bezier(0.34, 1.45, 0.64, 1), opacity 0.4s ease, box-shadow 0.4s ease';
                card.style.transform = 'translate(0px, 0px) scale(1)';
                card.style.opacity = '1';

                setTimeout(() => {
                    card.style.zIndex = '';
                    card.style.transform = '';
                    card.style.transition = '';
                }, 750);
            }, staggerDelay);
        });

        setTimeout(() => {
            isShuffling = false;
            scheduleNextAutoShuffle();
        }, 850);
    }

    /**
     * Schedules the next automatic shuffle tick
     */
    function scheduleNextAutoShuffle() {
        clearTimeout(autoShuffleTimer);

        if (!isAutoShuffleEnabled || isHovered || !isInViewport || document.hidden) {
            return;
        }

        autoShuffleTimer = setTimeout(() => {
            if (isAutoShuffleEnabled && !isHovered && isInViewport && !document.hidden && !isShuffling) {
                performCardShuffle(false);
            }
        }, SHUFFLE_INTERVAL);
    }

    /**
     * Toggles Auto-Shuffle ON/OFF
     */
    function toggleAutoShuffle() {
        isAutoShuffleEnabled = !isAutoShuffleEnabled;
        updateAutoShuffleUI();

        if (isAutoShuffleEnabled) {
            scheduleNextAutoShuffle();
        } else {
            clearTimeout(autoShuffleTimer);
        }
    }

    /**
     * Sets up Hover, Viewport, and Tab Visibility Observers
     */
    function setupInteractiveListeners() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        // 1. Hover Detection: Pause when mouse is over projects grid, resume when leaving
        grid.addEventListener('mouseenter', () => {
            isHovered = true;
            clearTimeout(autoShuffleTimer);
        });

        grid.addEventListener('mouseleave', () => {
            isHovered = false;
            scheduleNextAutoShuffle();
        });

        // 2. Viewport Detection: Only auto-shuffle when projects section is in view
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isInViewport = entry.isIntersecting;
                    if (isInViewport) {
                        scheduleNextAutoShuffle();
                    } else {
                        clearTimeout(autoShuffleTimer);
                    }
                });
            }, {
                root: null,
                threshold: 0.15 // At least 15% of the projects grid visible
            });

            observer.observe(grid);
        } else {
            isInViewport = true;
            scheduleNextAutoShuffle();
        }

        // 3. Tab Visibility Detection: Pause when tab is hidden, resume when active
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearTimeout(autoShuffleTimer);
            } else {
                scheduleNextAutoShuffle();
            }
        });
    }

    /**
     * Initializes Card Shuffle Engine and ensures DOM events are registered
     */
    function initCardShuffle() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        // Ensure all card links open correctly
        const cardLinks = grid.querySelectorAll('a.project-card');
        cardLinks.forEach(card => {
            card.style.cursor = 'pointer';
        });

        updateAutoShuffleUI();
        setupInteractiveListeners();
        scheduleNextAutoShuffle();
    }

    // Global Event Delegation on Document
    document.addEventListener('click', function (e) {
        // 1. Shuffle Button Click
        const shuffleBtn = e.target.closest('#btn-shuffle-projects');
        if (shuffleBtn) {
            e.preventDefault();
            performCardShuffle(true);
            return;
        }

        // 2. Toggle Auto-Shuffle Click
        const toggleBtn = e.target.closest('#btn-toggle-auto-shuffle');
        if (toggleBtn) {
            e.preventDefault();
            toggleAutoShuffle();
            return;
        }

        // 3. Filter Button Click
        const filterBtn = e.target.closest('.project-filter-btn');
        if (filterBtn) {
            e.preventDefault();
            const filter = filterBtn.getAttribute('data-filter') || 'all';
            performFilterShuffle(filter);
            return;
        }

        // 4. Project Card Click Guard during active shuffle
        const card = e.target.closest('.project-card');
        if (card && isShuffling) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    // Expose Functions Globally on window
    window.performCardShuffle = function () { performCardShuffle(true); };
    window.performFilterShuffle = performFilterShuffle;
    window.updateFilterButtonsUI = updateFilterButtonsUI;
    window.toggleAutoShuffle = toggleAutoShuffle;
    window.initCardShuffle = initCardShuffle;

    // Run on ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCardShuffle);
    } else {
        initCardShuffle();
    }
    window.addEventListener('load', initCardShuffle);
})(window, document);
