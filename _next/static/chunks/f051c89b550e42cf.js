(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 97715, e => {
    "use strict";
    var t = e.i(26382)
      , r = e.i(90424)
      , n = e.i(97778)
      , i = e.i(30142);
    function o(e) {
        let o = (0,
        i.useConstant)( () => (0,
        r.motionValue)(e))
          , {isStatic: l} = (0,
        t.useContext)(n.MotionConfigContext);
        if (l) {
            let[,r] = (0,
            t.useState)(e);
            (0,
            t.useEffect)( () => o.on("change", r), [])
        }
        return o
    }
    e.s(["useMotionValue", () => o])
}
, 26414, 63751, e => {
    "use strict";
    let t, r;
    var n = e.i(90424)
      , i = e.i(30142)
      , o = e.i(26382);
    e.i(70557);
    var l = e.i(70742);
    e.i(53216);
    var a = e.i(91775)
      , s = e.i(15289)
      , u = e.i(35517);
    function c(e, t) {
        let r, n = () => {
            let {currentTime: n} = t
              , i = (null === n ? 0 : n.value) / 100;
            r !== i && e(i),
            r = i
        }
        ;
        return u.frame.update(n, !0),
        () => (0,
        u.cancelFrame)(n)
    }
    var f = e.i(60448);
    let d = new WeakMap;
    function g({target: e, contentRect: t, borderBoxSize: r}) {
        var n;
        null == (n = d.get(e)) || n.forEach(n => {
            n({
                target: e,
                contentSize: t,
                get size() {
                    return function(e, t) {
                        if (t) {
                            let {inlineSize: e, blockSize: r} = t[0];
                            return {
                                width: e,
                                height: r
                            }
                        }
                        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        }
                    }(e, r)
                }
            })
        }
        )
    }
    function p(e) {
        e.forEach(g)
    }
    let m = new Set;
    var h = e.i(74757)
      , y = e.i(95436);
    let v = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    })
      , b = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };
    function w(e, t, r, n) {
        let i = r[t]
          , {length: o, position: l} = b[t]
          , a = i.current
          , s = r.time;
        i.current = e[`scroll${l}`],
        i.scrollLength = e[`scroll${o}`] - e[`client${o}`],
        i.offset.length = 0,
        i.offset[0] = 0,
        i.offset[1] = i.scrollLength,
        i.progress = (0,
        h.progress)(0, i.scrollLength, i.current);
        let u = n - s;
        i.velocity = u > 50 ? 0 : (0,
        y.velocityPerSecond)(i.current - a, u)
    }
    e.i(39069);
    var _ = e.i(68879)
      , x = e.i(46835)
      , E = e.i(55611);
    let O = {
        start: 0,
        center: .5,
        end: 1
    };
    function P(e, t, r=0) {
        let n = 0;
        if (e in O && (e = O[e]),
        "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e),
        r + n
    }
    let S = [0, 0]
      , j = [[0, 0], [1, 1]]
      , C = {
        x: 0,
        y: 0
    }
      , R = new WeakMap
      , M = new WeakMap
      , z = new WeakMap
      , L = e => e === document.documentElement ? window : e;
    function I(e, {container: n=document.documentElement, ...i}={}) {
        let o = z.get(n);
        o || (o = new Set,
        z.set(n, o));
        let l = function(e, t, r, n={}) {
            return {
                measure: () => (function(e, t=e, r) {
                    if (r.x.targetOffset = 0,
                    r.y.targetOffset = 0,
                    t !== e) {
                        let n = t;
                        for (; n && n !== e; )
                            r.x.targetOffset += n.offsetLeft,
                            r.y.targetOffset += n.offsetTop,
                            n = n.offsetParent
                    }
                    r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
                    r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
                    r.x.containerLength = e.clientWidth,
                    r.y.containerLength = e.clientHeight
                }
                )(e, n.target, r),
                update: t => {
                    w(e, "x", r, t),
                    w(e, "y", r, t),
                    r.time = t,
                    (n.offset || n.target) && function(e, t, r) {
                        let {offset: n=j} = r
                          , {target: i=e, axis: o="y"} = r
                          , l = "y" === o ? "height" : "width"
                          , a = i !== e ? function(e, t) {
                            let r = {
                                x: 0,
                                y: 0
                            }
                              , n = e;
                            for (; n && n !== t; )
                                if (n instanceof HTMLElement)
                                    r.x += n.offsetLeft,
                                    r.y += n.offsetTop,
                                    n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                    let e = n.getBoundingClientRect()
                                      , t = (n = n.parentElement).getBoundingClientRect();
                                    r.x += e.left - t.left,
                                    r.y += e.top - t.top
                                } else if (n instanceof SVGGraphicsElement) {
                                    let {x: e, y: t} = n.getBBox();
                                    r.x += e,
                                    r.y += t;
                                    let i = null
                                      , o = n.parentNode;
                                    for (; !i; )
                                        "svg" === o.tagName && (i = o),
                                        o = n.parentNode;
                                    n = i
                                } else
                                    break;
                            return r
                        }(i, e) : C
                          , s = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox"in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }
                          , u = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[o].offset.length = 0;
                        let c = !t[o].interpolate
                          , f = n.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, n) {
                                let i = Array.isArray(e) ? e : S
                                  , o = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, O[e] ? e : "0"]),
                                (o = P(i[0], r, n)) - P(i[1], t)
                            }(n[e], u[l], s[l], a[o]);
                            c || r === t[o].interpolatorOffsets[e] || (c = !0),
                            t[o].offset[e] = r
                        }
                        c && (t[o].interpolate = (0,
                        x.interpolate)(t[o].offset, (0,
                        E.defaultOffset)(n), {
                            clamp: !1
                        }),
                        t[o].interpolatorOffsets = [...t[o].offset]),
                        t[o].progress = (0,
                        _.clamp)(0, 1, t[o].interpolate(t[o].current))
                    }(e, r, n)
                }
                ,
                notify: () => t(r)
            }
        }(n, e, {
            time: 0,
            x: v(),
            y: v()
        }, i);
        if (o.add(l),
        !R.has(n)) {
            let e, i = () => {
                for (let e of o)
                    e.measure()
            }
            , l = () => {
                for (let e of o)
                    e.update(u.frameData.timestamp)
            }
            , a = () => {
                for (let e of o)
                    e.notify()
            }
            , s = () => {
                u.frame.read(i, !1, !0),
                u.frame.read(l, !1, !0),
                u.frame.update(a, !1, !0)
            }
            ;
            R.set(n, s);
            let c = L(n);
            window.addEventListener("resize", s, {
                passive: !0
            }),
            n !== document.documentElement && M.set(n, "function" == typeof n ? (m.add(n),
            r || (r = () => {
                let e = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
                  , t = {
                    target: window,
                    size: e,
                    contentSize: e
                };
                m.forEach(e => e(t))
            }
            ,
            window.addEventListener("resize", r)),
            () => {
                m.delete(n),
                !m.size && r && (r = void 0)
            }
            ) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(p)),
            (e = (0,
            f.resolveElements)(n)).forEach(e => {
                let r = d.get(e);
                r || (r = new Set,
                d.set(e, r)),
                r.add(s),
                null == t || t.observe(e)
            }
            ),
            () => {
                e.forEach(e => {
                    let r = d.get(e);
                    null == r || r.delete(s),
                    (null == r ? void 0 : r.size) || null == t || t.unobserve(e)
                }
                )
            }
            )),
            c.addEventListener("scroll", s, {
                passive: !0
            })
        }
        let a = R.get(n);
        return u.frame.read(a, !1, !0),
        () => {
            var e;
            (0,
            u.cancelFrame)(a);
            let t = z.get(n);
            if (!t || (t.delete(l),
            t.size))
                return;
            let r = R.get(n);
            R.delete(n),
            r && (L(n).removeEventListener("scroll", r),
            null == (e = M.get(n)) || e(),
            window.removeEventListener("resize", r))
        }
    }
    let $ = new Map;
    function k({source: e, container: t=document.documentElement, axis: r="y"}={}) {
        e && (t = e),
        $.has(t) || $.set(t, {});
        let n = $.get(t);
        return n[r] || (n[r] = (0,
        a.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: r
        }) : function({source: e, container: t, axis: r="y"}) {
            e && (t = e);
            let n = {
                value: 0
            }
              , i = I(e => {
                n.value = 100 * e[r].progress
            }
            , {
                container: t,
                axis: r
            });
            return {
                currentTime: n,
                cancel: i
            }
        }({
            source: t,
            axis: r
        })),
        n[r]
    }
    function T(e) {
        return e && (e.target || e.offset)
    }
    var W = e.i(76476);
    function A(e, t) {
        (0,
        l.warning)(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
    }
    let N = () => ({
        scrollX: (0,
        n.motionValue)(0),
        scrollY: (0,
        n.motionValue)(0),
        scrollXProgress: (0,
        n.motionValue)(0),
        scrollYProgress: (0,
        n.motionValue)(0)
    });
    function D({container: e, target: t, layoutEffect: r=!0, ...n}={}) {
        let l = (0,
        i.useConstant)(N);
        return (r ? W.useIsomorphicLayoutEffect : o.useEffect)( () => (A("target", t),
        A("container", e),
        function(e, {axis: t="y", ...r}={}) {
            var n, i;
            let o = {
                axis: t,
                ...r
            };
            return "function" == typeof e ? (n = e,
            i = o,
            2 === n.length || T(i) ? I(e => {
                n(e[i.axis].progress, e)
            }
            , i) : c(n, k(i))) : function(e, t) {
                if (e.flatten(),
                T(t))
                    return e.pause(),
                    I(r => {
                        e.time = e.duration * r[t.axis].progress
                    }
                    , t);
                {
                    let r = k(t);
                    return e.attachTimeline ? e.attachTimeline(r, e => (e.pause(),
                    c(t => {
                        e.time = e.duration * t
                    }
                    , r))) : s.noop
                }
            }(e, o)
        }( (e, {x: t, y: r}) => {
            l.scrollX.set(t.current),
            l.scrollXProgress.set(t.progress),
            l.scrollY.set(r.current),
            l.scrollYProgress.set(r.progress)
        }
        , {
            ...n,
            container: (null == e ? void 0 : e.current) || void 0,
            target: (null == t ? void 0 : t.current) || void 0
        })), [e, t, JSON.stringify(n.offset)]),
        l
    }
    e.s(["useScroll", () => D], 26414);
    var B = e.i(97715);
    function V(e, t) {
        let r = (0,
        B.useMotionValue)(t())
          , n = () => r.set(t());
        return n(),
        (0,
        W.useIsomorphicLayoutEffect)( () => {
            let t = () => u.frame.preRender(n, !1, !0)
              , r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()),
                (0,
                u.cancelFrame)(n)
            }
        }
        ),
        r
    }
    function F(e, t, r, i) {
        if ("function" == typeof e) {
            let t;
            return n.collectMotionValues.current = [],
            e(),
            t = V(n.collectMotionValues.current, e),
            n.collectMotionValues.current = void 0,
            t
        }
        let o = "function" == typeof t ? t : function(...e) {
            var t;
            let r, n = !Array.isArray(e[0]), i = n ? 0 : -1, o = e[0 + i], l = e[1 + i], a = e[2 + i], s = e[3 + i], u = (0,
            x.interpolate)(l, a, {
                mixer: (r = t = a[0]) && "object" == typeof r && r.mix ? t.mix : void 0,
                ...s
            });
            return n ? u(o) : u
        }(t, r, i);
        return Array.isArray(e) ? H(e, o) : H([e], ([e]) => o(e))
    }
    function H(e, t) {
        let r = (0,
        i.useConstant)( () => []);
        return V(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++)
                r[t] = e[t].get();
            return t(r)
        }
        )
    }
    e.s(["useTransform", () => F], 63751)
}
, 47357, e => {
    "use strict";
    var t = e.i(26382)
      , r = e.i(38637)
      , n = e.i(97778)
      , i = e.i(76476)
      , o = e.i(97715)
      , l = e.i(68237)
      , a = e.i(35517);
    function s(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    function u(e, c={}) {
        let {isStatic: f} = (0,
        t.useContext)(n.MotionConfigContext)
          , d = (0,
        t.useRef)(null)
          , g = (0,
        o.useMotionValue)((0,
        l.isMotionValue)(e) ? s(e.get()) : e)
          , p = (0,
        t.useRef)(g.get())
          , m = (0,
        t.useRef)( () => {}
        )
          , h = () => {
            let e = d.current;
            e && 0 === e.time && e.sample(a.frameData.delta),
            y(),
            d.current = (0,
            r.animateValue)({
                keyframes: [g.get(), p.current],
                velocity: g.getVelocity(),
                type: "spring",
                restDelta: .001,
                restSpeed: .01,
                ...c,
                onUpdate: m.current
            })
        }
          , y = () => {
            d.current && d.current.stop()
        }
        ;
        return (0,
        t.useInsertionEffect)( () => g.attach( (e, t) => f ? t(e) : (p.current = e,
        m.current = t,
        a.frame.update(h),
        g.get()), y), [JSON.stringify(c)]),
        (0,
        i.useIsomorphicLayoutEffect)( () => {
            if ((0,
            l.isMotionValue)(e))
                return e.on("change", e => g.set(s(e)))
        }
        , [g]),
        g
    }
    e.s(["useSpring", () => u])
}
, 51291, (e, t, r) => {
    "use strict";
    function n({widthInt: e, heightInt: t, blurWidth: r, blurHeight: n, blurDataURL: i, objectFit: o}) {
        let l = r ? 40 * r : e
          , a = n ? 40 * n : t
          , s = l && a ? `viewBox='0 0 ${l} ${a}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}
, 50039, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1
    }
}
, 19889, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    }),
    e.r(65705);
    let n = e.r(66527)
      , i = e.r(51291)
      , o = e.r(50039)
      , l = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function a(e) {
        return void 0 !== e.default
    }
    function s(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function u({src: e, sizes: t, unoptimized: r=!1, priority: u=!1, preload: c=!1, loading: f, className: d, quality: g, width: p, height: m, fill: h=!1, style: y, overrideSrc: v, onLoad: b, onLoadingComplete: w, placeholder: _="empty", blurDataURL: x, fetchPriority: E, decoding: O="async", layout: P, objectFit: S, objectPosition: j, lazyBoundary: C, lazyRoot: R, ...M}, z) {
        var L;
        let I, $, k, {imgConf: T, showAltText: W, blurComplete: A, defaultLoader: N} = z, D = T || o.imageConfigDefault;
        if ("allSizes"in D)
            I = D;
        else {
            let e = [...D.deviceSizes, ...D.imageSizes].sort( (e, t) => e - t)
              , t = D.deviceSizes.sort( (e, t) => e - t)
              , r = D.qualities?.sort( (e, t) => e - t);
            I = {
                ...D,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === N)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let B = M.loader || N;
        delete M.loader,
        delete M.srcSet;
        let V = "__next_img_default"in B;
        if (V) {
            if ("custom" === I.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = B;
            B = t => {
                let {config: r, ...n} = t;
                return e(n)
            }
        }
        if (P) {
            "fill" === P && (h = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[P];
            e && (y = {
                ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[P];
            r && !t && (t = r)
        }
        let F = ""
          , H = s(p)
          , U = s(m);
        if ((L = e) && "object" == typeof L && (a(L) || void 0 !== L.src)) {
            let t = a(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if ($ = t.blurWidth,
            k = t.blurHeight,
            x = x || t.blurDataURL,
            F = t.src,
            !h)
                if (H || U) {
                    if (H && !U) {
                        let e = H / t.width;
                        U = Math.round(t.height * e)
                    } else if (!H && U) {
                        let e = U / t.height;
                        H = Math.round(t.width * e)
                    }
                } else
                    H = t.width,
                    U = t.height
        }
        let q = !u && !c && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : F) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
        q = !1),
        I.unoptimized && (r = !0),
        V && !I.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let G = s(g)
          , X = Object.assign(h ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: S,
            objectPosition: j
        } : {}, W ? {} : {
            color: "transparent"
        }, y)
          , Y = A || "empty" === _ ? null : "blur" === _ ? `url("data:image/svg+xml;charset=utf-8,${(0,
        i.getImageBlurSvg)({
            widthInt: H,
            heightInt: U,
            blurWidth: $,
            blurHeight: k,
            blurDataURL: x || "",
            objectFit: X.objectFit
        })}")` : `url("${_}")`
          , J = l.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit
          , K = Y ? {
            backgroundSize: J,
            backgroundPosition: X.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: Y
        } : {}
          , Q = function({config: e, src: t, unoptimized: r, width: i, quality: o, sizes: l, loader: a}) {
            if (r) {
                let e = (0,
                n.getDeploymentId)();
                if (t.startsWith("/") && !t.startsWith("//") && e) {
                    let r = t.includes("?") ? "&" : "?";
                    t = `${t}${r}dpl=${e}`
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: s, kind: u} = function({deviceSizes: e, allSizes: t}, r, n) {
                if (n) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , i = [];
                    for (let e; e = r.exec(n); )
                        i.push(parseInt(e[2]));
                    if (i.length) {
                        let r = .01 * Math.min(...i);
                        return {
                            widths: t.filter(t => t >= e[0] * r),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof r ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, i, l)
              , c = s.length - 1;
            return {
                sizes: l || "w" !== u ? l : "100vw",
                srcSet: s.map( (r, n) => `${a({
                    config: e,
                    src: t,
                    quality: o,
                    width: r
                })} ${"w" === u ? r : n + 1}${u}`).join(", "),
                src: a({
                    config: e,
                    src: t,
                    quality: o,
                    width: s[c]
                })
            }
        }({
            config: I,
            src: e,
            unoptimized: r,
            width: H,
            quality: G,
            sizes: t,
            loader: B
        })
          , Z = q ? "lazy" : f;
        return {
            props: {
                ...M,
                loading: Z,
                fetchPriority: E,
                width: H,
                height: U,
                decoding: O,
                className: d,
                style: {
                    ...X,
                    ...K
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: v || Q.src
            },
            meta: {
                unoptimized: r,
                preload: c || u,
                placeholder: _,
                fill: h
            }
        }
    }
}
, 775, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(26382)
      , i = "u" < typeof window
      , o = i ? () => {}
    : n.useLayoutEffect
      , l = i ? () => {}
    : n.useEffect;
    function a(e) {
        let {headManager: t, reduceComponentsToState: r} = e;
        function a() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t?.mountedInstances?.add(e.children),
        a()),
        o( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        o( () => (t && (t._pendingUpdate = a),
        () => {
            t && (t._pendingUpdate = a)
        }
        )),
        l( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 26496, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return f
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = e.r(81258)
      , l = e.r(44066)
      , a = e.r(86404)
      , s = l._(e.r(26382))
      , u = o._(e.r(775))
      , c = e.r(39885);
    function f() {
        return [(0,
        a.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        a.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(65705);
    let g = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
        let t, r, n, i;
        return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set,
        r = new Set,
        n = new Set,
        i = {},
        e => {
            let o = !0
              , l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
            case "title":
            case "base":
                r.has(e.type) ? o = !1 : r.add(e.type);
                break;
            case "meta":
                for (let t = 0, r = g.length; t < r; t++) {
                    let r = g[t];
                    if (e.props.hasOwnProperty(r))
                        if ("charSet" === r)
                            n.has(r) ? o = !1 : n.add(r);
                        else {
                            let t = e.props[r]
                              , n = i[r] || new Set;
                            ("name" !== r || !l) && n.has(t) ? o = !1 : (n.add(t),
                            i[r] = n)
                        }
                }
            }
            return o
        }
        )).reverse().map( (e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        }
        )
    }
    let m = function({children: e}) {
        let t = (0,
        s.useContext)(c.HeadManagerContext);
        return (0,
        a.jsx)(u.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 74399, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(81258)._(e.r(26382))
      , i = e.r(50039)
      , o = n.default.createContext(i.imageConfigDefault)
}
, 46038, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(81258)._(e.r(26382)).default.createContext(null)
}
, 54829, (e, t, r) => {
    "use strict";
    function n(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}
, 85329, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(54829)
      , i = e.r(66527);
    function o({config: e, src: t, width: r, quality: o}) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let l = (0,
        n.findClosestQuality)(o, e)
          , a = (0,
        i.getDeploymentId)();
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/") && a ? `&dpl=${a}` : ""}`
    }
    o.__next_img_default = !0;
    let l = o
}
, 61759, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(26382);
    function i(e, t) {
        let r = (0,
        n.useRef)(null)
          , i = (0,
        n.useRef)(null);
        return (0,
        n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null,
                e());
                let t = i.current;
                t && (i.current = null,
                t())
            } else
                e && (r.current = o(e, n)),
                t && (i.current = o(t, n))
        }
        , [e, t])
    }
    function o(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 71017, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return w
        }
    });
    let n = e.r(81258)
      , i = e.r(44066)
      , o = e.r(86404)
      , l = i._(e.r(26382))
      , a = n._(e.r(92150))
      , s = n._(e.r(26496))
      , u = e.r(19889)
      , c = e.r(50039)
      , f = e.r(74399);
    e.r(65705);
    let d = e.r(46038)
      , g = n._(e.r(85329))
      , p = e.r(61759)
      , m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0
    };
    function h(e, t, r, n, i, o, l) {
        let a = e?.src;
        e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
        ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0),
                r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1
                      , i = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            n = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            i = !0,
                            t.stopPropagation()
                        }
                    })
                }
                n?.current && n.current(e)
            }
        }
        ))
    }
    function y(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0,
    l.forwardRef)( ({src: e, srcSet: t, sizes: r, height: n, width: i, decoding: a, className: s, style: u, fetchPriority: c, placeholder: f, loading: d, unoptimized: g, fill: m, onLoadRef: v, onLoadingCompleteRef: b, setBlurComplete: w, setShowAltText: _, sizesInput: x, onLoad: E, onError: O, ...P}, S) => {
        let j = (0,
        l.useCallback)(e => {
            e && (O && (e.src = e.src),
            e.complete && h(e, f, v, b, w, g, x))
        }
        , [e, f, v, b, w, O, g, x])
          , C = (0,
        p.useMergedRef)(S, j);
        return (0,
        o.jsx)("img", {
            ...P,
            ...y(c),
            loading: d,
            width: i,
            height: n,
            decoding: a,
            "data-nimg": m ? "fill" : "1",
            className: s,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: C,
            onLoad: e => {
                h(e.currentTarget, f, v, b, w, g, x)
            }
            ,
            onError: e => {
                _(!0),
                "empty" !== f && w(!0),
                O && O(e)
            }
        })
    }
    );
    function b({isAppRouter: e, imgAttributes: t}) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...y(t.fetchPriority)
        };
        return e && a.default.preload ? (a.default.preload(t.src, r),
        null) : (0,
        o.jsx)(s.default, {
            children: (0,
            o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let w = (0,
    l.forwardRef)( (e, t) => {
        let r = (0,
        l.useContext)(d.RouterContext)
          , n = (0,
        l.useContext)(f.ImageConfigContext)
          , i = (0,
        l.useMemo)( () => {
            let e = m || n || c.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , r = e.deviceSizes.sort( (e, t) => e - t)
              , i = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: r,
                qualities: i,
                localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns
            }
        }
        , [n])
          , {onLoad: a, onLoadingComplete: s} = e
          , p = (0,
        l.useRef)(a);
        (0,
        l.useEffect)( () => {
            p.current = a
        }
        , [a]);
        let h = (0,
        l.useRef)(s);
        (0,
        l.useEffect)( () => {
            h.current = s
        }
        , [s]);
        let[y,w] = (0,
        l.useState)(!1)
          , [_,x] = (0,
        l.useState)(!1)
          , {props: E, meta: O} = (0,
        u.getImgProps)(e, {
            defaultLoader: g.default,
            imgConf: i,
            blurComplete: y,
            showAltText: _
        });
        return (0,
        o.jsxs)(o.Fragment, {
            children: [(0,
            o.jsx)(v, {
                ...E,
                unoptimized: O.unoptimized,
                placeholder: O.placeholder,
                fill: O.fill,
                onLoadRef: p,
                onLoadingCompleteRef: h,
                setBlurComplete: w,
                setShowAltText: x,
                sizesInput: e.sizes,
                ref: t
            }), O.preload ? (0,
            o.jsx)(b, {
                isAppRouter: !r,
                imgAttributes: E
            }) : null]
        })
    }
    );
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 55547, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = e.r(81258)
      , l = e.r(19889)
      , a = e.r(71017)
      , s = o._(e.r(85329));
    function u(e) {
        let {props: t} = (0,
        l.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            }
        });
        for (let[e,r] of Object.entries(t))
            void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = a.Image
}
, 4610, (e, t, r) => {
    t.exports = e.r(55547)
}
, 99688, e => {
    "use strict";
    var t = e.i(26382);
    let r = (...e) => e.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let i = (0,
    t.forwardRef)( ({color: e="currentColor", size: i=24, strokeWidth: o=2, absoluteStrokeWidth: l, className: a="", children: s, iconNode: u, ...c}, f) => (0,
    t.createElement)("svg", {
        ref: f,
        ...n,
        width: i,
        height: i,
        stroke: e,
        strokeWidth: l ? 24 * Number(o) / Number(i) : o,
        className: r("lucide", a),
        ...c
    }, [...u.map( ([e,r]) => (0,
    t.createElement)(e, r)), ...Array.isArray(s) ? s : [s]]))
      , o = (e, n) => {
        let o = (0,
        t.forwardRef)( ({className: o, ...l}, a) => (0,
        t.createElement)(i, {
            ref: a,
            iconNode: n,
            className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, o),
            ...l
        }));
        return o.displayName = `${e}`,
        o
    }
    ;
    e.s(["default", () => o], 99688)
}
, 61567, e => {
    "use strict";
    let t = (0,
    e.i(99688).default)("ChevronRight", [["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]]);
    e.s(["ChevronRight", () => t], 61567)
}
]);