/**
 * ABDELILAH EL ABED - Interactive Animated Signature Engine
 * High-performance Realistic Autograph Vector Engine for 'A.Elabed'
 */
(function () {
    const SIGNATURE_TEMPLATE = `
    <div class="interactive-signature-container relative group cursor-pointer p-6 sm:p-8 rounded-3xl bg-[#080C14]/80 border border-white/10 hover:border-[#CFFF04]/50 backdrop-blur-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(207,255,4,0.3)] max-w-lg w-full mx-auto text-center select-none" title="Click or hover to re-sign">
        <!-- Ambient Background Glow Inside Container -->
        <div class="absolute inset-0 bg-radial-gradient from-[#CFFF04]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"></div>

        <!-- Top Badge Header -->
        <div class="flex items-center justify-between gap-2 mb-3 border-b border-white/10 pb-3 relative z-10">
            <div class="flex items-center gap-2.5">
                <span class="relative flex h-2.5 w-2.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFFF04] opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CFFF04]"></span>
                </span>
                <span class="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-slate-200 uppercase sig-status-text transition-colors">
                    VERIFIED • ABDELILAH EL ABED
                </span>
            </div>
            <span class="text-[9px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 group-hover:text-[#CFFF04] group-hover:bg-[#CFFF04]/15 transition-all flex items-center gap-1">
                <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                RE-SIGN
            </span>
        </div>

        <!-- SVG Vector Signature Canvas -->
        <div class="relative w-full h-36 sm:h-44 flex items-center justify-center overflow-visible my-1 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 260" class="signature-svg w-full h-full filter drop-shadow-[0_0_20px_rgba(207,255,4,0.4)] transition-transform duration-500 group-hover:scale-105" fill="none">
                <defs>
                    <!-- Intense Multi-Stage Neon Glow -->
                    <filter id="sig-laser-bloom" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur3" />
                        <feMerge>
                            <feMergeNode in="blur3" />
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <!-- Neon Pen Gradient -->
                    <linearGradient id="sig-neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#CFFF04" />
                        <stop offset="35%" stop-color="#FFFFFF" />
                        <stop offset="70%" stop-color="#E5FFA3" />
                        <stop offset="100%" stop-color="#CFFF04" />
                    </linearGradient>

                    <!-- Spark Radial Glow -->
                    <radialGradient id="sig-spark-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#FFFFFF" />
                        <stop offset="35%" stop-color="#CFFF04" stop-opacity="0.9" />
                        <stop offset="100%" stop-color="#CFFF04" stop-opacity="0" />
                    </radialGradient>
                </defs>

                <!-- LAYER 1: AMBIENT NEON GLOW -->
                <g class="sig-layer-glow" stroke="#CFFF04" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.45" filter="url(#sig-laser-bloom)">
                    <path class="sig-path sig-p1" d="M 85 135 C 50 120, 40 160, 65 175 C 95 188, 145 130, 205 62 C 215 50, 218 60, 200 95 C 172 150, 150 195, 142 208" />
                    <path class="sig-path sig-p2" d="M 80 142 C 120 132, 170 128, 222 135" />
                    <path class="sig-path sig-p3" d="M 218 168 A 3.5 3.5 0 1 1 218 174 A 3.5 3.5 0 1 1 218 168" />
                    <path class="sig-path sig-p4" d="M 262 95 C 248 95, 240 108, 252 116 C 265 125, 288 118, 292 105 C 296 92, 270 80, 255 92 C 240 104, 236 128, 248 138 C 260 148, 282 144, 292 132 C 298 126, 282 160, 252 170 C 235 176, 222 162, 235 148 C 248 135, 282 145, 315 162" />
                    <path class="sig-path sig-p5" d="M 315 162 C 330 148, 348 95, 355 78 C 362 65, 368 70, 358 95 C 346 122, 335 158, 348 165 C 358 170, 372 152, 386 138" />
                    <path class="sig-path sig-p6" d="M 386 138 C 372 142, 362 152, 366 164 C 370 174, 388 174, 395 162 C 402 150, 400 138, 398 166 C 398 172, 410 160, 424 138" />
                    <path class="sig-path sig-p7" d="M 424 138 C 438 115, 452 82, 458 72 C 464 64, 468 70, 460 90 C 450 115, 440 162, 452 168 C 462 172, 474 158, 476 145 C 476 136, 464 142, 468 152 C 472 162, 485 165, 498 150" />
                    <path class="sig-path sig-p8" d="M 498 150 C 492 140, 500 132, 508 138 C 516 145, 510 162, 500 166 C 510 166, 524 152, 536 138" />
                    <path class="sig-path sig-p9" d="M 536 138 C 524 145, 515 156, 520 164 C 525 172, 540 170, 548 158 C 554 148, 552 100, 555 78 C 558 66, 564 70, 560 92 C 555 125, 550 162, 560 166 C 585 174, 620 140, 605 122 C 580 102, 510 125, 415 155 C 320 185, 215 204, 222 208 C 230 210, 360 192, 490 172 C 550 164, 588 180, 555 204 C 525 220, 450 216, 350 220" />
                </g>

                <!-- LAYER 2: CRISP HIGH-VOLTAGE VECTOR CORE -->
                <g class="sig-layer-core" stroke="url(#sig-neon-gradient)" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round">
                    <path class="sig-path sig-p1" d="M 85 135 C 50 120, 40 160, 65 175 C 95 188, 145 130, 205 62 C 215 50, 218 60, 200 95 C 172 150, 150 195, 142 208" />
                    <path class="sig-path sig-p2" d="M 80 142 C 120 132, 170 128, 222 135" />
                    <path class="sig-path sig-p3" d="M 218 168 A 3.5 3.5 0 1 1 218 174 A 3.5 3.5 0 1 1 218 168" />
                    <path class="sig-path sig-p4" d="M 262 95 C 248 95, 240 108, 252 116 C 265 125, 288 118, 292 105 C 296 92, 270 80, 255 92 C 240 104, 236 128, 248 138 C 260 148, 282 144, 292 132 C 298 126, 282 160, 252 170 C 235 176, 222 162, 235 148 C 248 135, 282 145, 315 162" />
                    <path class="sig-path sig-p5" d="M 315 162 C 330 148, 348 95, 355 78 C 362 65, 368 70, 358 95 C 346 122, 335 158, 348 165 C 358 170, 372 152, 386 138" />
                    <path class="sig-path sig-p6" d="M 386 138 C 372 142, 362 152, 366 164 C 370 174, 388 174, 395 162 C 402 150, 400 138, 398 166 C 398 172, 410 160, 424 138" />
                    <path class="sig-path sig-p7" d="M 424 138 C 438 115, 452 82, 458 72 C 464 64, 468 70, 460 90 C 450 115, 440 162, 452 168 C 462 172, 474 158, 476 145 C 476 136, 464 142, 468 152 C 472 162, 485 165, 498 150" />
                    <path class="sig-path sig-p8" d="M 498 150 C 492 140, 500 132, 508 138 C 516 145, 510 162, 500 166 C 510 166, 524 152, 536 138" />
                    <path class="sig-path sig-p9" d="M 536 138 C 524 145, 515 156, 520 164 C 525 172, 540 170, 548 158 C 554 148, 552 100, 555 78 C 558 66, 564 70, 560 92 C 555 125, 550 162, 560 166 C 585 174, 620 140, 605 122 C 580 102, 510 125, 415 155 C 320 185, 215 204, 222 208 C 230 210, 360 192, 490 172 C 550 164, 588 180, 555 204 C 525 220, 450 216, 350 220" />
                </g>

                <!-- REALTIME GLOWING LASER PEN-TIP TRACKER WITH SPARK PARTICLES -->
                <g id="sig-pen-group" opacity="0">
                    <circle id="sig-pen-halo" cx="85" cy="135" r="14" fill="url(#sig-spark-glow)" />
                    <circle id="sig-pen-core" cx="85" cy="135" r="4.5" fill="#FFFFFF" filter="url(#sig-laser-bloom)" />
                    <line id="sig-pen-h" x1="75" y1="135" x2="95" y2="135" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8" />
                    <line id="sig-pen-v" x1="85" y1="125" x2="85" y2="145" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8" />
                </g>
            </svg>
        </div>

        <!-- Subtitle Seal -->
        <div class="mt-2 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between px-2 relative z-10">
            <span class="tracking-widest uppercase text-slate-400 group-hover:text-slate-200 transition-colors flex items-center gap-1.5">
                <svg class="w-3 h-3 text-[#CFFF04]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                DIGITAL AUTOGRAPH
            </span>
            <span class="text-[10px] tracking-wider text-[#CFFF04] font-semibold">LEAD ARCHITECT</span>
        </div>
    </div>`;

    function setupContainer(container) {
        if (container.dataset.sigInitialized === 'true') return;
        container.dataset.sigInitialized = 'true';

        const svg = container.querySelector('svg.signature-svg');
        if (!svg) return;

        const glowPaths = Array.from(svg.querySelectorAll('.sig-layer-glow .sig-path'));
        const corePaths = Array.from(svg.querySelectorAll('.sig-layer-core .sig-path'));
        const penGroup = svg.querySelector('#sig-pen-group');
        const penHalo = svg.querySelector('#sig-pen-halo');
        const penCore = svg.querySelector('#sig-pen-core');
        const penH = svg.querySelector('#sig-pen-h');
        const penV = svg.querySelector('#sig-pen-v');
        const statusLabel = container.querySelector('.sig-status-text');

        // Measure vector stroke lengths
        const pathData = corePaths.map((path, idx) => {
            const len = path.getTotalLength();
            const glow = glowPaths[idx];

            [path, glow].forEach(p => {
                if (p) {
                    p.style.strokeDasharray = len;
                    p.style.strokeDashoffset = len;
                    p.style.transition = 'none';
                }
            });

            return { path, glow, length: len };
        });

        let isAnimating = false;
        let animId = null;
        let hasPlayedOnce = false;

        function animateSignature() {
            if (isAnimating) return;
            isAnimating = true;

            if (statusLabel) {
                statusLabel.textContent = 'SIGNING: A. ELABED...';
                statusLabel.classList.add('text-[#CFFF04]');
            }

            if (penGroup) {
                penGroup.setAttribute('opacity', '1');
            }

            // Reset strokes
            pathData.forEach(d => {
                d.path.style.strokeDashoffset = d.length;
                if (d.glow) d.glow.style.strokeDashoffset = d.length;
            });

            // Realistic calligraphic speed weights for each stroke (in ms)
            const timings = [
                { duration: 420 }, // 1. 'A' Grand loop & stem
                { duration: 260 }, // 2. 'A' Crossbar flourish
                { duration: 120 }, // 3. The Dot '.'
                { duration: 380 }, // 4. Script 'E'
                { duration: 280 }, // 5. 'l' loop
                { duration: 250 }, // 6. 'a' oval
                { duration: 300 }, // 7. 'b' loop & hook
                { duration: 220 }, // 8. 'e' oval
                { duration: 650 }  // 9. 'd' + Grand Underline Return Swoosh Wave
            ];

            let currentPathIdx = 0;
            let pathStartTime = performance.now();

            function step(now) {
                if (currentPathIdx >= pathData.length) {
                    // Complete Drawing
                    if (penGroup) {
                        penGroup.setAttribute('opacity', '0');
                    }
                    if (statusLabel) {
                        statusLabel.textContent = 'VERIFIED • ABDELILAH EL ABED';
                        statusLabel.classList.remove('text-[#CFFF04]');
                    }
                    isAnimating = false;
                    container.classList.add('signature-completed');
                    return;
                }

                const curTiming = timings[currentPathIdx] || { duration: 300 };
                const elapsed = now - pathStartTime;
                let progress = Math.min(elapsed / curTiming.duration, 1);

                // Natural human handwriting bezier easing
                const ease = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                const curData = pathData[currentPathIdx];
                const currentOffset = curData.length * (1 - ease);

                curData.path.style.strokeDashoffset = currentOffset;
                if (curData.glow) curData.glow.style.strokeDashoffset = currentOffset;

                // Move pen tip & flare along vector path
                if (penGroup && curData.path) {
                    try {
                        const point = curData.path.getPointAtLength(curData.length * ease);
                        if (penHalo) {
                            penHalo.setAttribute('cx', point.x);
                            penHalo.setAttribute('cy', point.y);
                        }
                        if (penCore) {
                            penCore.setAttribute('cx', point.x);
                            penCore.setAttribute('cy', point.y);
                        }
                        if (penH) {
                            penH.setAttribute('x1', point.x - 10);
                            penH.setAttribute('y1', point.y);
                            penH.setAttribute('x2', point.x + 10);
                            penH.setAttribute('y2', point.y);
                        }
                        if (penV) {
                            penV.setAttribute('x1', point.x);
                            penV.setAttribute('y1', point.y - 10);
                            penV.setAttribute('x2', point.x);
                            penV.setAttribute('y2', point.y + 10);
                        }
                    } catch (e) {}
                }

                if (progress >= 1) {
                    curData.path.style.strokeDashoffset = 0;
                    if (curData.glow) curData.glow.style.strokeDashoffset = 0;

                    currentPathIdx++;
                    pathStartTime = performance.now();
                }

                animId = requestAnimationFrame(step);
            }

            animId = requestAnimationFrame(step);
        }

        // Hover trigger (re-signs on hover)
        container.addEventListener('mouseenter', () => {
            if (animId) cancelAnimationFrame(animId);
            isAnimating = false;
            animateSignature();
        });

        // Click / Touch trigger
        container.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            isAnimating = false;
            animateSignature();
        });

        // Auto-play when scrolled into view
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasPlayedOnce) {
                        hasPlayedOnce = true;
                        setTimeout(animateSignature, 400);
                    }
                });
            }, { threshold: 0.25 });

            observer.observe(container);
        } else {
            setTimeout(animateSignature, 800);
        }
    }

    function mountAndInit() {
        // 1. Setup any static containers
        document.querySelectorAll('.interactive-signature-container').forEach(setupContainer);

        // 2. Mount into footer if not present
        const footerTarget = document.querySelector('footer div.py-12, footer div.py-16, footer');
        if (footerTarget && !document.querySelector('#signature-footer-mount .interactive-signature-container')) {
            let mount = document.getElementById('signature-footer-mount');
            if (!mount) {
                mount = document.createElement('div');
                mount.id = 'signature-footer-mount';
                mount.className = 'mt-12 mb-6 flex justify-center w-full px-4';
                
                const emailBtn = footerTarget.querySelector('a[href^="mailto:"]')?.parentElement;
                if (emailBtn && emailBtn.parentElement) {
                    emailBtn.parentElement.insertBefore(mount, emailBtn.nextSibling);
                } else {
                    footerTarget.appendChild(mount);
                }
            }
            if (!mount.hasChildNodes()) {
                mount.innerHTML = SIGNATURE_TEMPLATE;
                const container = mount.querySelector('.interactive-signature-container');
                if (container) setupContainer(container);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountAndInit);
    } else {
        mountAndInit();
    }

    window.addEventListener('load', () => setTimeout(mountAndInit, 400));
    const observer = new MutationObserver(() => {
        if (!document.querySelector('#signature-footer-mount .interactive-signature-container')) {
            mountAndInit();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
