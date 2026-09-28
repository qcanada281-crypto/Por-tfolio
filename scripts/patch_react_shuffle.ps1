$filePath = "d:\xammpp\htdocs\Port-Folio\_next\static\chunks\c65c05f54eca7dce.js"
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Target start of function l() and end of function d()
$startMarker = "        function l() {"
$endMarker = "        e.s([`"default`", () => l])"

$startIndex = $content.IndexOf($startMarker)
$endIndex = $content.IndexOf($endMarker, $startIndex)

if ($startIndex -ge 0 -and $endIndex -gt $startIndex) {
    $newComponent = @'
        function l() {
            let [items, setItems] = (0, i.useState)(o);
            let [isAuto, setIsAuto] = (0, i.useState)(true);
            let isHoveredRef = (0, i.useRef)(false);
            let timerRef = (0, i.useRef)(null);

            function shuffleArray(arr) {
                let a = [...arr];
                for (let idx = a.length - 1; idx > 0; idx--) {
                    let j = Math.floor(Math.random() * (idx + 1));
                    [a[idx], a[j]] = [a[j], a[idx]];
                }
                return a;
            }

            (0, i.useEffect)(() => {
                function runShuffleTick() {
                    if (isAuto && !isHoveredRef.current) {
                        setItems(prev => shuffleArray(prev));
                    }
                    timerRef.current = setTimeout(runShuffleTick, 3500);
                }
                timerRef.current = setTimeout(runShuffleTick, 1800);
                return () => clearTimeout(timerRef.current);
            }, [isAuto]);

            return (0, t.jsx)("section", {
                id: "masonry-gallery",
                className: "relative w-full py-16 md:py-24 bg-[#07090E] border-t border-slate-800/40 bg-ambient-glow overflow-visible",
                children: (0, t.jsxs)("div", {
                    className: "relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8",
                    children: [
                        (0, t.jsxs)("div", {
                            className: "flex flex-col items-center text-center mb-8 md:mb-12",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#CFFF04]/30 bg-[#CFFF04]/10 text-[#CFFF04] text-xs font-mono font-bold tracking-widest uppercase mb-2 backdrop-blur-md",
                                    children: [
                                        (0, t.jsx)("span", { className: "w-2 h-2 rounded-full bg-[#CFFF04] animate-ping" }),
                                        (0, t.jsx)("span", { children: "// PROJETS & SOLUTIONS DIGITALES" })
                                    ]
                                }),
                                (0, t.jsxs)("h2", {
                                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white",
                                    children: [
                                        "RÉALISATIONS ",
                                        (0, t.jsx)("span", { className: "text-[#CFFF04] text-glow-neon font-brier normal-case", children: "Sélectionnées" })
                                    ]
                                }),
                                (0, t.jsx)("p", {
                                    className: "text-slate-400 text-xs sm:text-sm md:text-base max-w-xl font-medium mt-1",
                                    children: "Applications web complètes, plateformes SaaS, e-commerce et solutions sur mesure au Maroc."
                                })
                            ]
                        }),
                        (0, t.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2 text-xs font-mono text-slate-300",
                                    children: [
                                        (0, t.jsx)("span", { className: "w-2 h-2 rounded-full bg-[#CFFF04]" }),
                                        "12 Projets Déployés"
                                    ]
                                }),
                                (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2 sm:gap-3 ml-auto",
                                    children: [
                                        (0, t.jsxs)("button", {
                                            type: "button",
                                            onClick: () => setIsAuto(!isAuto),
                                            className: "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 hover:bg-[#CFFF04]/10 text-slate-300 hover:text-[#CFFF04] border border-white/10 hover:border-[#CFFF04]/40 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer",
                                            children: [
                                                (0, t.jsx)("span", {
                                                    className: "w-2 h-2 rounded-full " + (isAuto ? "bg-[#CFFF04] shadow-[0_0_8px_#CFFF04] animate-pulse" : "bg-slate-500")
                                                }),
                                                (0, t.jsx)("span", {
                                                    className: "text-[11px] " + (isAuto ? "text-[#CFFF04]" : "text-slate-400"),
                                                    children: (isAuto ? "Auto : ON" : "Auto : PAUSE")
                                                })
                                            ]
                                        }),
                                        (0, t.jsxs)("button", {
                                            type: "button",
                                            onClick: () => setItems(prev => shuffleArray(prev)),
                                            className: "inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#CFFF04]/10 hover:bg-[#CFFF04] text-[#CFFF04] hover:text-black border border-[#CFFF04]/40 hover:border-[#CFFF04] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(207,255,4,0.15)] hover:shadow-[0_0_25px_rgba(207,255,4,0.5)] active:scale-95 cursor-pointer",
                                            children: [
                                                (0, t.jsx)("svg", {
                                                    className: "w-3.5 h-3.5",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        (0, t.jsx)("polyline", { points: "16 3 21 3 21 8" }),
                                                        (0, t.jsx)("line", { x1: "4", y1: "20", x2: "21", y2: "3" }),
                                                        (0, t.jsx)("polyline", { points: "21 16 21 21 16 21" }),
                                                        (0, t.jsx)("line", { x1: "15", y1: "15", x2: "21", y2: "21" }),
                                                        (0, t.jsx)("line", { x1: "4", y1: "4", x2: "9", y2: "9" })
                                                    ]
                                                }),
                                                (0, t.jsx)("span", { children: "Mélanger" })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsx)("div", {
                            id: "projects-grid",
                            onMouseEnter: () => { isHoveredRef.current = true; },
                            onMouseLeave: () => { isHoveredRef.current = false; },
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full relative",
                            children: items.map((item) => (0, t.jsx)(r.motion.a, {
                                key: item.link,
                                layout: true,
                                transition: { duration: 1.2, type: "spring", bounce: 0.3 },
                                href: item.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "project-card group relative overflow-hidden rounded-2xl glass-card transition-all duration-500 w-full " + item.aspect + " block cursor-pointer select-none border border-white/10 hover:border-[#CFFF04]/50 shadow-lg hover:shadow-[0_0_25px_rgba(207,255,4,0.3)]",
                                children: [
                                    (0, t.jsx)(n.default, {
                                        src: item.src,
                                        alt: item.alt,
                                        fill: true,
                                        className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#07090E]/95 via-[#07090E]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5 z-10",
                                        children: [
                                            (0, t.jsx)("h3", {
                                                className: "text-lg md:text-xl font-bold text-white group-hover:text-[#CFFF04] transition-colors truncate",
                                                children: item.alt.split(" - ")[0]
                                            }),
                                            (0, t.jsx)("p", {
                                                className: "text-xs text-slate-300 line-clamp-1",
                                                children: (item.alt.split(" - ")[1] || "Plateforme web sur mesure")
                                            })
                                        ]
                                    })
                                ]
                            }, item.link))
                        })
                    ]
                })
            });
        }
        function d() { return null; }
'@

    $before = $content.Substring(0, $startIndex)
    $after = $content.Substring($endIndex)
    $updatedContent = $before + $newComponent + "`r`n        " + $after
    [System.IO.File]::WriteAllText($filePath, $updatedContent, [System.Text.Encoding]::UTF8)
    Write-Host "SUCCESS: React chunk patched successfully!"
} else {
    Write-Host "ERROR: Markers not found. Start: $startIndex, End: $endIndex"
}
