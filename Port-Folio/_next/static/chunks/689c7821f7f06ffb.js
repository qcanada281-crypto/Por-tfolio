(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 53216, 15289, 70742, 18514, 74757, 43634, 70557, 91775, 46160, 13915, 30821, 21241, 58088, 31675, 80125, 93193, 33609, 60448, 84655, 66199, 23124, 87695, 19891, 22940, 35517, 63198, 71167, 2519, 95436, 90424, 68879, 41968, 25241, 41385, 94583, 48487, 75242, 47495, 19938, 28897, 46835, 55611, 97778, 2271, 76476, 30142, t => {
    "use strict";
    let e, i;
    t.i(39069);
    let s = t => t;
    function r(t) {
        let e;
        return () => (void 0 === e && (e = t()),
        e)
    }
    t.s(["noop", () => s], 15289),
    t.s(["invariant", () => s, "warning", () => s], 70742),
    t.s(["memo", () => r], 18514);
    let n = (t, e, i) => {
        let s = e - t;
        return 0 === s ? 1 : (i - t) / s
    }
    ;
    t.s(["progress", () => n], 74757);
    let o = t => 1e3 * t
      , a = t => t / 1e3;
    t.s(["millisecondsToSeconds", () => a, "secondsToMilliseconds", () => o], 43634),
    t.s([], 70557);
    let l = r( () => void 0 !== window.ScrollTimeline);
    t.s(["supportsScrollTimeline", () => l], 91775);
    class u {
        constructor(t) {
            this.stop = () => this.runAll("stop"),
            this.animations = t.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
        }
        getAll(t) {
            return this.animations[0][t]
        }
        setAll(t, e) {
            for (let i = 0; i < this.animations.length; i++)
                this.animations[i][t] = e
        }
        attachTimeline(t, e) {
            let i = this.animations.map(i => l() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
            return () => {
                i.forEach( (t, e) => {
                    t && t(),
                    this.animations[e].stop()
                }
                )
            }
        }
        get time() {
            return this.getAll("time")
        }
        set time(t) {
            this.setAll("time", t)
        }
        get speed() {
            return this.getAll("speed")
        }
        set speed(t) {
            this.setAll("speed", t)
        }
        get startTime() {
            return this.getAll("startTime")
        }
        get duration() {
            let t = 0;
            for (let e = 0; e < this.animations.length; e++)
                t = Math.max(t, this.animations[e].duration);
            return t
        }
        runAll(t) {
            this.animations.forEach(e => e[t]())
        }
        flatten() {
            this.runAll("flatten")
        }
        play() {
            this.runAll("play")
        }
        pause() {
            this.runAll("pause")
        }
        cancel() {
            this.runAll("cancel")
        }
        complete() {
            this.runAll("complete")
        }
    }
    class h extends u {
        then(t, e) {
            return Promise.all(this.animations).then(t).catch(e)
        }
    }
    function c(t, e) {
        return t ? t[e] || t.default || t : void 0
    }
    function d(t) {
        let e = 0
          , i = t.next(e);
        for (; !i.done && e < 2e4; )
            e += 50,
            i = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
    }
    function p(t) {
        return "function" == typeof t
    }
    function m(t, e) {
        t.timeline = e,
        t.onfinish = null
    }
    t.s(["GroupPlaybackControls", () => h], 46160),
    t.s(["getValueTransition", () => c], 13915),
    t.s(["calcGeneratorDuration", () => d, "maxGeneratorDuration", () => 2e4], 30821),
    t.s(["isGenerator", () => p], 21241),
    t.s(["attachTimeline", () => m], 58088);
    let f = t => Array.isArray(t) && "number" == typeof t[0];
    t.s(["isBezierDefinition", () => f], 31675);
    let g, v = (i = r( () => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch (t) {
            return !1
        }
        return !0
    }
    ),
    () => {
        var t;
        return null != (t = g) ? t : i()
    }
    );
    t.s(["supportsLinearEasing", () => v], 80125);
    let y = (t, e, i=10) => {
        let s = ""
          , r = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < r; e++)
            s += t(n(0, r - 1, e)) + ", ";
        return `linear(${s.substring(0, s.length - 2)})`
    }
    ;
    function x(t) {
        return !!("function" == typeof t && v() || !t || "string" == typeof t && (t in P || v()) || f(t) || Array.isArray(t) && t.every(x))
    }
    t.s(["generateLinearEasing", () => y], 93193);
    let T = ([t,e,i,s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`
      , P = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: T([0, .65, .55, 1]),
        circOut: T([.55, 0, 1, .45]),
        backIn: T([.31, .01, .66, -.59]),
        backOut: T([.33, 1.53, .69, .99])
    };
    t.s(["isWaapiSupportedEasing", () => x, "mapEasingToNativeEasing", () => function t(e, i) {
        if (e)
            return "function" == typeof e && v() ? y(e, i) : f(e) ? T(e) : Array.isArray(e) ? e.map(e => t(e, i) || P.easeOut) : P[e]
    }
    ], 33609);
    let b = {
        x: !1,
        y: !1
    };
    function w(t, e, i) {
        var s;
        if (t instanceof Element)
            return [t];
        if ("string" == typeof t) {
            let r = document;
            e && (r = e.current);
            let n = null != (s = null == i ? void 0 : i[t]) ? s : r.querySelectorAll(t);
            return n ? Array.from(n) : []
        }
        return Array.from(t)
    }
    function S(t, e) {
        let i = w(t)
          , s = new AbortController;
        return [i, {
            passive: !0,
            ...e,
            signal: s.signal
        }, () => s.abort()]
    }
    function A(t) {
        return e => {
            "touch" === e.pointerType || b.x || b.y || t(e)
        }
    }
    function M(t, e, i={}) {
        let[s,r,n] = S(t, i)
          , o = A(t => {
            let {target: i} = t
              , s = e(t);
            if ("function" != typeof s || !i)
                return;
            let n = A(t => {
                s(t),
                i.removeEventListener("pointerleave", n)
            }
            );
            i.addEventListener("pointerleave", n, r)
        }
        );
        return s.forEach(t => {
            t.addEventListener("pointerenter", o, r)
        }
        ),
        n
    }
    t.s(["resolveElements", () => w], 60448),
    t.s(["hover", () => M], 84655);
    let C = (t, e) => !!e && (t === e || C(t, e.parentElement))
      , V = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
    t.s(["isPrimaryPointer", () => V], 66199);
    let E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
      , k = new WeakSet;
    function D(t) {
        return e => {
            "Enter" === e.key && t(e)
        }
    }
    function R(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e,{
            isPrimary: !0,
            bubbles: !0
        }))
    }
    function L(t) {
        return V(t) && !(b.x || b.y)
    }
    function F(t, e, i={}) {
        let[s,r,n] = S(t, i)
          , o = t => {
            let s = t.currentTarget;
            if (!L(t) || k.has(s))
                return;
            k.add(s);
            let n = e(t)
              , o = (t, e) => {
                window.removeEventListener("pointerup", a),
                window.removeEventListener("pointercancel", l),
                L(t) && k.has(s) && (k.delete(s),
                "function" == typeof n && n(t, {
                    success: e
                }))
            }
              , a = t => {
                o(t, i.useGlobalTarget || C(s, t.target))
            }
              , l = t => {
                o(t, !1)
            }
            ;
            window.addEventListener("pointerup", a, r),
            window.addEventListener("pointercancel", l, r)
        }
        ;
        return s.forEach(t => {
            E.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0),
            (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r),
            t.addEventListener("focus", t => ( (t, e) => {
                let i = t.currentTarget;
                if (!i)
                    return;
                let s = D( () => {
                    if (k.has(i))
                        return;
                    R(i, "down");
                    let t = D( () => {
                        R(i, "up")
                    }
                    );
                    i.addEventListener("keyup", t, e),
                    i.addEventListener("blur", () => R(i, "cancel"), e)
                }
                );
                i.addEventListener("keydown", s, e),
                i.addEventListener("blur", () => i.removeEventListener("keydown", s), e)
            }
            )(t, r), r)
        }
        ),
        n
    }
    function j(t) {
        if ("x" === t || "y" === t)
            if (b[t])
                return null;
            else
                return b[t] = !0,
                () => {
                    b[t] = !1
                }
                ;
        return b.x || b.y ? null : (b.x = b.y = !0,
        () => {
            b.x = b.y = !1
        }
        )
    }
    t.s(["press", () => F], 23124),
    t.s(["setDragLock", () => j], 87695),
    t.s([], 53216);
    let B = {
        skipAnimations: !1,
        useManualTiming: !1
    };
    t.s(["MotionGlobalConfig", () => B], 19891);
    let O = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
    function I(t, e) {
        let i = !1
          , s = !0
          , r = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        }
          , n = () => i = !0
          , o = O.reduce( (t, e) => (t[e] = function(t) {
            let e = new Set
              , i = new Set
              , s = !1
              , r = !1
              , n = new WeakSet
              , o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            };
            function a(e) {
                n.has(e) && (l.schedule(e),
                t()),
                e(o)
            }
            let l = {
                schedule: (t, r=!1, o=!1) => {
                    let a = o && s ? e : i;
                    return r && n.add(t),
                    a.has(t) || a.add(t),
                    t
                }
                ,
                cancel: t => {
                    i.delete(t),
                    n.delete(t)
                }
                ,
                process: t => {
                    if (o = t,
                    s) {
                        r = !0;
                        return
                    }
                    s = !0,
                    [e,i] = [i, e],
                    e.forEach(a),
                    e.clear(),
                    s = !1,
                    r && (r = !1,
                    l.process(t))
                }
            };
            return l
        }(n),
        t), {})
          , {read: a, resolveKeyframes: l, update: u, preRender: h, render: c, postRender: d} = o
          , p = () => {
            let n = B.useManualTiming ? r.timestamp : performance.now();
            i = !1,
            r.delta = s ? 1e3 / 60 : Math.max(Math.min(n - r.timestamp, 40), 1),
            r.timestamp = n,
            r.isProcessing = !0,
            a.process(r),
            l.process(r),
            u.process(r),
            h.process(r),
            c.process(r),
            d.process(r),
            r.isProcessing = !1,
            i && e && (s = !1,
            t(p))
        }
        ;
        return {
            schedule: O.reduce( (e, n) => {
                let a = o[n];
                return e[n] = (e, n=!1, o=!1) => (!i && (i = !0,
                s = !0,
                r.isProcessing || t(p)),
                a.schedule(e, n, o)),
                e
            }
            , {}),
            cancel: t => {
                for (let e = 0; e < O.length; e++)
                    o[O[e]].cancel(t)
            }
            ,
            state: r,
            steps: o
        }
    }
    t.s(["createRenderBatcher", () => I], 22940);
    let {schedule: U, cancel: N, state: $, steps: W} = I("u" > typeof requestAnimationFrame ? requestAnimationFrame : s, !0);
    function z() {
        e = void 0
    }
    t.s(["cancelFrame", () => N, "frame", () => U, "frameData", () => $, "frameSteps", () => W], 35517);
    let H = {
        now: () => (void 0 === e && H.set($.isProcessing || B.useManualTiming ? $.timestamp : performance.now()),
        e),
        set: t => {
            e = t,
            queueMicrotask(z)
        }
    };
    function Y(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }
    function G(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
    }
    t.s(["time", () => H], 63198),
    t.s(["addUniqueItem", () => Y, "removeItem", () => G], 71167);
    class X {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return Y(this.subscriptions, t),
            () => G(this.subscriptions, t)
        }
        notify(t, e, i) {
            let s = this.subscriptions.length;
            if (s)
                if (1 === s)
                    this.subscriptions[0](t, e, i);
                else
                    for (let r = 0; r < s; r++) {
                        let s = this.subscriptions[r];
                        s && s(t, e, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    function q(t, e) {
        return e ? 1e3 / e * t : 0
    }
    t.s(["SubscriptionManager", () => X], 2519),
    t.s(["velocityPerSecond", () => q], 95436);
    let K = {
        current: void 0
    };
    class Z {
        constructor(t, e={}) {
            this.version = "11.18.2",
            this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = (t, e=!0) => {
                let i = H.now();
                this.updatedAt !== i && this.setPrevFrameValue(),
                this.prev = this.current,
                this.setCurrent(t),
                this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }
            ,
            this.hasAnimated = !1,
            this.setCurrent(t),
            this.owner = e.owner
        }
        setCurrent(t) {
            this.current = t,
            this.updatedAt = H.now(),
            null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(t=this.current) {
            this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, e) {
            this.events[t] || (this.events[t] = new X);
            let i = this.events[t].add(e);
            return "change" === t ? () => {
                i(),
                U.read( () => {
                    this.events.change.getSize() || this.stop()
                }
                )
            }
            : i
        }
        clearListeners() {
            for (let t in this.events)
                this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t,
            this.stopPassiveEffect = e
        }
        set(t, e=!0) {
            e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, i) {
            this.set(e),
            this.prev = void 0,
            this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt - i
        }
        jump(t, e=!0) {
            this.updateAndNotify(t),
            this.prev = t,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
            return K.current && K.current.push(this),
            this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let t = H.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                return 0;
            let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return q(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
            return this.stop(),
            new Promise(e => {
                this.hasAnimated = !0,
                this.animation = t(e),
                this.events.animationStart && this.events.animationStart.notify()
            }
            ).then( () => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation()
            }
            )
        }
        stop() {
            this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    function _(t, e) {
        return new Z(t,e)
    }
    t.s(["collectMotionValues", () => K, "motionValue", () => _], 90424);
    let J = (t, e, i) => i > e ? e : i < t ? t : i;
    t.s(["clamp", () => J], 68879);
    let Q = {
        test: t => "number" == typeof t,
        parse: parseFloat,
        transform: t => t
    }
      , tt = {
        ...Q,
        transform: t => J(0, 1, t)
    }
      , te = {
        ...Q,
        default: 1
    };
    t.s(["alpha", () => tt, "number", () => Q, "scale", () => te], 41968);
    let ti = t => Math.round(1e5 * t) / 1e5
      , ts = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    t.s(["floatRegex", () => ts], 25241);
    let tr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
      , tn = (t, e) => i => !!("string" == typeof i && tr.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
      , to = (t, e, i) => s => {
        if ("string" != typeof s)
            return s;
        let[r,n,o,a] = s.match(ts);
        return {
            [t]: parseFloat(r),
            [e]: parseFloat(n),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1
        }
    }
      , ta = {
        ...Q,
        transform: t => Math.round(J(0, 255, t))
    }
      , tl = {
        test: tn("rgb", "red"),
        parse: to("red", "green", "blue"),
        transform: ({red: t, green: e, blue: i, alpha: s=1}) => "rgba(" + ta.transform(t) + ", " + ta.transform(e) + ", " + ta.transform(i) + ", " + ti(tt.transform(s)) + ")"
    }
      , tu = {
        test: tn("#"),
        parse: function(t) {
            let e = ""
              , i = ""
              , s = ""
              , r = "";
            return t.length > 5 ? (e = t.substring(1, 3),
            i = t.substring(3, 5),
            s = t.substring(5, 7),
            r = t.substring(7, 9)) : (e = t.substring(1, 2),
            i = t.substring(2, 3),
            s = t.substring(3, 4),
            r = t.substring(4, 5),
            e += e,
            i += i,
            s += s,
            r += r),
            {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1
            }
        },
        transform: tl.transform
    }
      , th = t => ({
        test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
        parse: parseFloat,
        transform: e => `${e}${t}`
    })
      , tc = th("deg")
      , td = th("%")
      , tp = th("px")
      , tm = th("vh")
      , tf = th("vw")
      , tg = {
        ...td,
        parse: t => td.parse(t) / 100,
        transform: t => td.transform(100 * t)
    };
    t.s(["degrees", () => tc, "percent", () => td, "progressPercentage", () => tg, "px", () => tp, "vh", () => tm, "vw", () => tf], 41385);
    let tv = {
        test: tn("hsl", "hue"),
        parse: to("hue", "saturation", "lightness"),
        transform: ({hue: t, saturation: e, lightness: i, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + td.transform(ti(e)) + ", " + td.transform(ti(i)) + ", " + ti(tt.transform(s)) + ")"
    }
      , ty = {
        test: t => tl.test(t) || tu.test(t) || tv.test(t),
        parse: t => tl.test(t) ? tl.parse(t) : tv.test(t) ? tv.parse(t) : tu.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tl.transform(t) : tv.transform(t)
    };
    t.s(["color", () => ty], 94583);
    let tx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
      , tT = "number"
      , tP = "color"
      , tb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function tw(t) {
        let e = t.toString()
          , i = []
          , s = {
            color: [],
            number: [],
            var: []
        }
          , r = []
          , n = 0
          , o = e.replace(tb, t => (ty.test(t) ? (s.color.push(n),
        r.push(tP),
        i.push(ty.parse(t))) : t.startsWith("var(") ? (s.var.push(n),
        r.push("var"),
        i.push(t)) : (s.number.push(n),
        r.push(tT),
        i.push(parseFloat(t))),
        ++n,
        "${}")).split("${}");
        return {
            values: i,
            split: o,
            indexes: s,
            types: r
        }
    }
    function tS(t) {
        return tw(t).values
    }
    function tA(t) {
        let {split: e, types: i} = tw(t)
          , s = e.length;
        return t => {
            let r = "";
            for (let n = 0; n < s; n++)
                if (r += e[n],
                void 0 !== t[n]) {
                    let e = i[n];
                    e === tT ? r += ti(t[n]) : e === tP ? r += ty.transform(t[n]) : r += t[n]
                }
            return r
        }
    }
    let tM = t => "number" == typeof t ? 0 : t
      , tC = {
        test: function(t) {
            var e, i;
            return isNaN(t) && "string" == typeof t && ((null == (e = t.match(ts)) ? void 0 : e.length) || 0) + ((null == (i = t.match(tx)) ? void 0 : i.length) || 0) > 0
        },
        parse: tS,
        createTransformer: tA,
        getAnimatableNone: function(t) {
            let e = tS(t);
            return tA(t)(e.map(tM))
        }
    };
    t.s(["analyseComplexValue", () => tw, "complex", () => tC], 48487);
    let tV = t => e => "string" == typeof e && e.startsWith(t)
      , tE = tV("--")
      , tk = tV("var(--")
      , tD = t => !!tk(t) && tR.test(t.split("/*")[0].trim())
      , tR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    t.s(["isCSSVariableName", () => tE, "isCSSVariableToken", () => tD], 75242);
    let tL = (t, e, i) => t + (e - t) * i;
    function tF(t, e, i) {
        return (i < 0 && (i += 1),
        i > 1 && (i -= 1),
        i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    function tj(t, e) {
        return i => i > 0 ? e : t
    }
    t.s(["mixNumber", () => tL], 47495);
    let tB = (t, e, i) => {
        let s = t * t
          , r = i * (e * e - s) + s;
        return r < 0 ? 0 : Math.sqrt(r)
    }
      , tO = [tu, tl, tv];
    function tI(t) {
        let e = tO.find(e => e.test(t));
        if (s(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
        !e)
            return !1;
        let i = e.parse(t);
        return e === tv && (i = function({hue: t, saturation: e, lightness: i, alpha: s}) {
            t /= 360,
            i /= 100;
            let r = 0
              , n = 0
              , o = 0;
            if (e /= 100) {
                let s = i < .5 ? i * (1 + e) : i + e - i * e
                  , a = 2 * i - s;
                r = tF(a, s, t + 1 / 3),
                n = tF(a, s, t),
                o = tF(a, s, t - 1 / 3)
            } else
                r = n = o = i;
            return {
                red: Math.round(255 * r),
                green: Math.round(255 * n),
                blue: Math.round(255 * o),
                alpha: s
            }
        }(i)),
        i
    }
    let tU = (t, e) => {
        let i = tI(t)
          , s = tI(e);
        if (!i || !s)
            return tj(t, e);
        let r = {
            ...i
        };
        return t => (r.red = tB(i.red, s.red, t),
        r.green = tB(i.green, s.green, t),
        r.blue = tB(i.blue, s.blue, t),
        r.alpha = tL(i.alpha, s.alpha, t),
        tl.transform(r))
    }
      , tN = (t, e) => i => e(t(i))
      , t$ = (...t) => t.reduce(tN);
    t.s(["pipe", () => t$], 19938);
    let tW = new Set(["none", "hidden"]);
    function tz(t, e) {
        return i => tL(t, e, i)
    }
    function tH(t) {
        return "number" == typeof t ? tz : "string" == typeof t ? tD(t) ? tj : ty.test(t) ? tU : tX : Array.isArray(t) ? tY : "object" == typeof t ? ty.test(t) ? tU : tG : tj
    }
    function tY(t, e) {
        let i = [...t]
          , s = i.length
          , r = t.map( (t, i) => tH(t)(t, e[i]));
        return t => {
            for (let e = 0; e < s; e++)
                i[e] = r[e](t);
            return i
        }
    }
    function tG(t, e) {
        let i = {
            ...t,
            ...e
        }
          , s = {};
        for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (s[r] = tH(t[r])(t[r], e[r]));
        return t => {
            for (let e in s)
                i[e] = s[e](t);
            return i
        }
    }
    let tX = (t, e) => {
        let i = tC.createTransformer(e)
          , r = tw(t)
          , n = tw(e);
        if (!(r.indexes.var.length === n.indexes.var.length && r.indexes.color.length === n.indexes.color.length && r.indexes.number.length >= n.indexes.number.length))
            return s(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            tj(t, e);
        if (tW.has(t) && !n.values.length || tW.has(e) && !r.values.length)
            return tW.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t;
        return t$(tY(function(t, e) {
            var i;
            let s = []
              , r = {
                color: 0,
                var: 0,
                number: 0
            };
            for (let n = 0; n < e.values.length; n++) {
                let o = e.types[n]
                  , a = t.indexes[o][r[o]]
                  , l = null != (i = t.values[a]) ? i : 0;
                s[n] = l,
                r[o]++
            }
            return s
        }(r, n), n.values), i)
    }
    ;
    function tq(t, e, i) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof i ? tL(t, e, i) : tH(t)(t, e)
    }
    function tK(t, e, {clamp: i=!0, ease: r, mixer: o}={}) {
        let a = t.length;
        if (s(a === e.length, "Both input and output ranges must be the same length"),
        1 === a)
            return () => e[0];
        if (2 === a && e[0] === e[1])
            return () => e[1];
        let l = t[0] === t[1];
        t[0] > t[a - 1] && (t = [...t].reverse(),
        e = [...e].reverse());
        let u = function(t, e, i) {
            let r = []
              , n = i || tq
              , o = t.length - 1;
            for (let i = 0; i < o; i++) {
                let o = n(t[i], t[i + 1]);
                e && (o = t$(Array.isArray(e) ? e[i] || s : e, o)),
                r.push(o)
            }
            return r
        }(e, r, o)
          , h = u.length
          , c = i => {
            if (l && i < t[0])
                return e[0];
            let s = 0;
            if (h > 1)
                for (; s < t.length - 2 && !(i < t[s + 1]); s++)
                    ;
            let r = n(t[s], t[s + 1], i);
            return u[s](r)
        }
        ;
        return i ? e => c(J(t[0], t[a - 1], e)) : c
    }
    function tZ(t) {
        let e = [0];
        return !function(t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
                let r = n(0, e, s);
                t.push(tL(i, 1, r))
            }
        }(e, t.length - 1),
        e
    }
    t.s(["mix", () => tq], 28897),
    t.s(["interpolate", () => tK], 46835),
    t.s(["defaultOffset", () => tZ], 55611);
    var t_ = t.i(26382);
    let tJ = (0,
    t_.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
    t.s(["MotionConfigContext", () => tJ], 97778);
    let tQ = "u" > typeof window;
    t.s(["isBrowser", () => tQ], 2271);
    let t0 = tQ ? t_.useLayoutEffect : t_.useEffect;
    function t1(t) {
        let e = (0,
        t_.useRef)(null);
        return null === e.current && (e.current = t()),
        e.current
    }
    t.s(["useIsomorphicLayoutEffect", () => t0], 76476),
    t.s(["useConstant", () => t1], 30142)
}
, 70606, t => {
    "use strict";
    var e, i, s = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, r = (e = function(t) {
        return s.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && 91 > t.charCodeAt(2)
    }
    ,
    i = Object.create(null),
    function(t) {
        return void 0 === i[t] && (i[t] = e(t)),
        i[t]
    }
    );
    t.s(["default", () => r], 70606)
}
, 76141, 68237, 38637, 80271, 54472, 12632, t => {
    "use strict";
    function e(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
    }
    t.i(39069);
    let i = t => Array.isArray(t);
    function s(t, e) {
        if (!Array.isArray(e))
            return !1;
        let i = e.length;
        if (i !== t.length)
            return !1;
        for (let s = 0; s < i; s++)
            if (e[s] !== t[s])
                return !1;
        return !0
    }
    function r(t) {
        return "string" == typeof t || Array.isArray(t)
    }
    function n(t) {
        let e = [{}, {}];
        return null == t || t.values.forEach( (t, i) => {
            e[0][i] = t.get(),
            e[1][i] = t.getVelocity()
        }
        ),
        e
    }
    function o(t, e, i, s) {
        if ("function" == typeof e) {
            let[r,o] = n(s);
            e = e(void 0 !== i ? i : t.custom, r, o)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]),
        "function" == typeof e) {
            let[r,o] = n(s);
            e = e(void 0 !== i ? i : t.custom, r, o)
        }
        return e
    }
    function a(t, e, i) {
        let s = t.getProps();
        return o(s, e, void 0 !== i ? i : s.custom, t)
    }
    let l = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
      , u = ["initial", ...l];
    t.i(53216);
    var h, c, d, p = t.i(13915);
    let m = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
      , f = new Set(m)
      , g = new Set(["width", "height", "top", "left", "right", "bottom", ...m])
      , v = t => i(t) ? t[t.length - 1] || 0 : t;
    var y = t.i(90424);
    let x = t => !!(t && t.getVelocity);
    function T(t, e) {
        let i = t.getValue("willChange");
        if (x(i) && i.add)
            return i.add(e)
    }
    t.s(["isMotionValue", () => x], 68237);
    let P = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
      , b = "data-" + P("framerAppearId");
    var w = t.i(46160);
    t.i(70557);
    var S = t.i(43634)
      , A = t.i(35517)
      , M = t.i(19891)
      , C = t.i(80125)
      , V = t.i(58088)
      , E = t.i(21241)
      , k = t.i(33609)
      , D = t.i(15289);
    let R = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
    function L(t, e, i, s) {
        return t === e && i === s ? D.noop : r => 0 === r || 1 === r ? r : R(function(t, e, i, s, r) {
            let n, o, a = 0;
            do
                (n = R(o = e + (i - e) / 2, s, r) - t) > 0 ? i = o : e = o;
            while (Math.abs(n) > 1e-7 && ++a < 12)return o
        }(r, 0, 1, t, i), e, s)
    }
    let F = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
      , j = t => e => 1 - t(1 - e)
      , B = L(.33, 1.53, .69, .99)
      , O = j(B)
      , I = F(O)
      , U = t => (t *= 2) < 1 ? .5 * O(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      , N = t => 1 - Math.sin(Math.acos(t))
      , $ = j(N)
      , W = F(N);
    var z = t.i(48487)
      , H = t.i(25241);
    let Y = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function G(t) {
        let[e,i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e)
            return t;
        let[s] = i.match(H.floatRegex) || [];
        if (!s)
            return t;
        let r = i.replace(s, "")
          , n = +!!Y.has(e);
        return s !== i && (n *= 100),
        e + "(" + n + r + ")"
    }
    let X = /\b([a-z-]*)\(.*?\)/gu
      , q = {
        ...z.complex,
        getAnimatableNone: t => {
            let e = t.match(X);
            return e ? e.map(G).join(" ") : t
        }
    };
    var K = t.i(94583)
      , Z = t.i(41968)
      , _ = t.i(41385);
    let J = {
        borderWidth: _.px,
        borderTopWidth: _.px,
        borderRightWidth: _.px,
        borderBottomWidth: _.px,
        borderLeftWidth: _.px,
        borderRadius: _.px,
        radius: _.px,
        borderTopLeftRadius: _.px,
        borderTopRightRadius: _.px,
        borderBottomRightRadius: _.px,
        borderBottomLeftRadius: _.px,
        width: _.px,
        maxWidth: _.px,
        height: _.px,
        maxHeight: _.px,
        top: _.px,
        right: _.px,
        bottom: _.px,
        left: _.px,
        padding: _.px,
        paddingTop: _.px,
        paddingRight: _.px,
        paddingBottom: _.px,
        paddingLeft: _.px,
        margin: _.px,
        marginTop: _.px,
        marginRight: _.px,
        marginBottom: _.px,
        marginLeft: _.px,
        backgroundPositionX: _.px,
        backgroundPositionY: _.px
    }
      , Q = {
        rotate: _.degrees,
        rotateX: _.degrees,
        rotateY: _.degrees,
        rotateZ: _.degrees,
        scale: Z.scale,
        scaleX: Z.scale,
        scaleY: Z.scale,
        scaleZ: Z.scale,
        skew: _.degrees,
        skewX: _.degrees,
        skewY: _.degrees,
        distance: _.px,
        translateX: _.px,
        translateY: _.px,
        translateZ: _.px,
        x: _.px,
        y: _.px,
        z: _.px,
        perspective: _.px,
        transformPerspective: _.px,
        opacity: Z.alpha,
        originX: _.progressPercentage,
        originY: _.progressPercentage,
        originZ: _.px
    }
      , tt = {
        ...Z.number,
        transform: Math.round
    }
      , te = {
        ...J,
        ...Q,
        zIndex: tt,
        size: _.px,
        fillOpacity: Z.alpha,
        strokeOpacity: Z.alpha,
        numOctaves: tt
    }
      , ti = {
        ...te,
        color: K.color,
        backgroundColor: K.color,
        outlineColor: K.color,
        fill: K.color,
        stroke: K.color,
        borderColor: K.color,
        borderTopColor: K.color,
        borderRightColor: K.color,
        borderBottomColor: K.color,
        borderLeftColor: K.color,
        filter: q,
        WebkitFilter: q
    }
      , ts = t => ti[t];
    function tr(t, e) {
        let i = ts(t);
        return i !== q && (i = z.complex),
        i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
    }
    let tn = new Set(["auto", "none", "0"])
      , to = t => t === Z.number || t === _.px
      , ta = (t, e) => parseFloat(t.split(", ")[e])
      , tl = (t, e) => (i, {transform: s}) => {
        if ("none" === s || !s)
            return 0;
        let r = s.match(/^matrix3d\((.+)\)$/u);
        if (r)
            return ta(r[1], e);
        {
            let e = s.match(/^matrix\((.+)\)$/u);
            return e ? ta(e[1], t) : 0
        }
    }
      , tu = new Set(["x", "y", "z"])
      , th = m.filter(t => !tu.has(t))
      , tc = {
        width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, {top: e}) => parseFloat(e),
        left: (t, {left: e}) => parseFloat(e),
        bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
        right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
        x: tl(4, 13),
        y: tl(5, 14)
    };
    tc.translateX = tc.x,
    tc.translateY = tc.y;
    let td = new Set
      , tp = !1
      , tm = !1;
    function tf() {
        if (tm) {
            let t = Array.from(td).filter(t => t.needsMeasurement)
              , e = new Set(t.map(t => t.element))
              , i = new Map;
            e.forEach(t => {
                let e, s = (e = [],
                th.forEach(i => {
                    let s = t.getValue(i);
                    void 0 !== s && (e.push([i, s.get()]),
                    s.set(+!!i.startsWith("scale")))
                }
                ),
                e);
                s.length && (i.set(t, s),
                t.render())
            }
            ),
            t.forEach(t => t.measureInitialState()),
            e.forEach(t => {
                t.render();
                let e = i.get(t);
                e && e.forEach( ([e,i]) => {
                    var s;
                    null == (s = t.getValue(e)) || s.set(i)
                }
                )
            }
            ),
            t.forEach(t => t.measureEndState()),
            t.forEach(t => {
                void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
            }
            )
        }
        tm = !1,
        tp = !1,
        td.forEach(t => t.complete()),
        td.clear()
    }
    function tg() {
        td.forEach(t => {
            t.readKeyframes(),
            t.needsMeasurement && (tm = !0)
        }
        )
    }
    class tv {
        constructor(t, e, i, s, r, n=!1) {
            this.isComplete = !1,
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.isScheduled = !1,
            this.unresolvedKeyframes = [...t],
            this.onComplete = e,
            this.name = i,
            this.motionValue = s,
            this.element = r,
            this.isAsync = n
        }
        scheduleResolve() {
            this.isScheduled = !0,
            this.isAsync ? (td.add(this),
            tp || (tp = !0,
            A.frame.read(tg),
            A.frame.resolveKeyframes(tf))) : (this.readKeyframes(),
            this.complete())
        }
        readKeyframes() {
            let {unresolvedKeyframes: t, name: e, element: i, motionValue: s} = this;
            for (let r = 0; r < t.length; r++)
                if (null === t[r])
                    if (0 === r) {
                        let r = null == s ? void 0 : s.get()
                          , n = t[t.length - 1];
                        if (void 0 !== r)
                            t[0] = r;
                        else if (i && e) {
                            let s = i.readValue(e, n);
                            null != s && (t[0] = s)
                        }
                        void 0 === t[0] && (t[0] = n),
                        s && void 0 === r && s.set(t[0])
                    } else
                        t[r] = t[r - 1]
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
            this.isComplete = !0,
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            td.delete(this)
        }
        cancel() {
            this.isComplete || (this.isScheduled = !1,
            td.delete(this))
        }
        resume() {
            this.isComplete || this.scheduleResolve()
        }
    }
    var ty = t.i(70742)
      , tx = t.i(75242);
    let tT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
      , tP = t => e => e.test(t)
      , tb = [Z.number, _.px, _.percent, _.degrees, _.vw, _.vh, {
        test: t => "auto" === t,
        parse: t => t
    }]
      , tw = t => tb.find(tP(t));
    class tS extends tv {
        constructor(t, e, i, s, r) {
            super(t, e, i, s, r, !0)
        }
        readKeyframes() {
            let {unresolvedKeyframes: t, element: e, name: i} = this;
            if (!e || !e.current)
                return;
            super.readKeyframes();
            for (let i = 0; i < t.length; i++) {
                let s = t[i];
                if ("string" == typeof s && (s = s.trim(),
                (0,
                tx.isCSSVariableToken)(s))) {
                    let r = function t(e, i, s=1) {
                        (0,
                        ty.invariant)(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                        let[r,n] = function(t) {
                            let e = tT.exec(t);
                            if (!e)
                                return [, ];
                            let[,i,s,r] = e;
                            return [`--${null != i ? i : s}`, r]
                        }(e);
                        if (!r)
                            return;
                        let o = window.getComputedStyle(i).getPropertyValue(r);
                        if (o) {
                            let t = o.trim();
                            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t
                        }
                        return (0,
                        tx.isCSSVariableToken)(n) ? t(n, i, s + 1) : n
                    }(s, e.current);
                    void 0 !== r && (t[i] = r),
                    i === t.length - 1 && (this.finalKeyframe = s)
                }
            }
            if (this.resolveNoneKeyframes(),
            !g.has(i) || 2 !== t.length)
                return;
            let[s,r] = t
              , n = tw(s)
              , o = tw(r);
            if (n !== o)
                if (to(n) && to(o))
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        "string" == typeof i && (t[e] = parseFloat(i))
                    }
                else
                    this.needsMeasurement = !0
        }
        resolveNoneKeyframes() {
            let {unresolvedKeyframes: t, name: e} = this
              , i = [];
            for (let e = 0; e < t.length; e++)
                (function(t) {
                    if ("number" == typeof t)
                        return 0 === t;
                    if (null === t)
                        return !0;
                    return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t)
                }
                )(t[e]) && i.push(e);
            i.length && function(t, e, i) {
                let s, r = 0;
                for (; r < t.length && !s; ) {
                    let e = t[r];
                    "string" == typeof e && !tn.has(e) && (0,
                    z.analyseComplexValue)(e).values.length && (s = t[r]),
                    r++
                }
                if (s && i)
                    for (let r of e)
                        t[r] = tr(i, s)
            }(t, i, e)
        }
        measureInitialState() {
            let {element: t, unresolvedKeyframes: e, name: i} = this;
            if (!t || !t.current)
                return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = tc[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
            e[0] = this.measuredOrigin;
            let s = e[e.length - 1];
            void 0 !== s && t.getValue(i, s).jump(s, !1)
        }
        measureEndState() {
            var t;
            let {element: e, name: i, unresolvedKeyframes: s} = this;
            if (!e || !e.current)
                return;
            let r = e.getValue(i);
            r && r.jump(this.measuredOrigin, !1);
            let n = s.length - 1
              , o = s[n];
            s[n] = tc[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
            null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
            (null == (t = this.removedTransforms) ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                e.getValue(t).set(i)
            }
            ),
            this.resolveNoneKeyframes()
        }
    }
    var tA = t.i(63198);
    let tM = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (z.complex.test(t) || "0" === t) && !t.startsWith("url("))
      , tC = t => null !== t;
    function tV(t, {repeat: e, repeatType: i="loop"}, s) {
        let r = t.filter(tC)
          , n = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return n && void 0 !== s ? s : r[n]
    }
    class tE {
        constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: s=0, repeatDelay: r=0, repeatType: n="loop", ...o}) {
            this.isStopped = !1,
            this.hasAttemptedResolve = !1,
            this.createdAt = tA.time.now(),
            this.options = {
                autoplay: t,
                delay: e,
                type: i,
                repeat: s,
                repeatDelay: r,
                repeatType: n,
                ...o
            },
            this.updateFinishedPromise()
        }
        calcStartTime() {
            return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
        }
        get resolved() {
            return this._resolved || this.hasAttemptedResolve || (tg(),
            tf()),
            this._resolved
        }
        onKeyframesResolved(t, e) {
            this.resolvedAt = tA.time.now(),
            this.hasAttemptedResolve = !0;
            let {name: i, type: s, velocity: r, delay: n, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
            if (!l && !function(t, e, i, s) {
                let r = t[0];
                if (null === r)
                    return !1;
                if ("display" === e || "visibility" === e)
                    return !0;
                let n = t[t.length - 1]
                  , o = tM(r, e)
                  , a = tM(n, e);
                return (0,
                ty.warning)(o === a, `You are trying to animate ${e} from "${r}" to "${n}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${n} via the \`style\` property.`),
                !!o && !!a && (function(t) {
                    let e = t[0];
                    if (1 === t.length)
                        return !0;
                    for (let i = 0; i < t.length; i++)
                        if (t[i] !== e)
                            return !0
                }(t) || ("spring" === i || (0,
                E.isGenerator)(i)) && s)
            }(t, i, s, r))
                if (n)
                    this.options.duration = 0;
                else {
                    a && a(tV(t, this.options, e)),
                    o && o(),
                    this.resolveFinishedPromise();
                    return
                }
            let u = this.initPlayback(t, e);
            !1 !== u && (this._resolved = {
                keyframes: t,
                finalKeyframe: e,
                ...u
            },
            this.onPostResolved())
        }
        onPostResolved() {}
        then(t, e) {
            return this.currentFinishedPromise.then(t, e)
        }
        flatten() {
            this.options.type = "keyframes",
            this.options.ease = "linear"
        }
        updateFinishedPromise() {
            this.currentFinishedPromise = new Promise(t => {
                this.resolveFinishedPromise = t
            }
            )
        }
    }
    var tk = t.i(30821)
      , tD = t.i(68879)
      , tR = t.i(28897)
      , tL = t.i(19938)
      , tF = t.i(93193)
      , tj = t.i(95436);
    function tB(t, e, i) {
        let s = Math.max(e - 5, 0);
        return (0,
        tj.velocityPerSecond)(i - t(s), e - s)
    }
    let tO = .01
      , tI = 2
      , tU = .005
      , tN = .5;
    function t$(t, e) {
        return t * Math.sqrt(1 - e * e)
    }
    let tW = ["duration", "bounce"]
      , tz = ["stiffness", "damping", "mass"];
    function tH(t, e) {
        return e.some(e => void 0 !== t[e])
    }
    function tY(t=.3, e=.3) {
        let i, s = "object" != typeof t ? {
            visualDuration: t,
            keyframes: [0, 1],
            bounce: e
        } : t, {restSpeed: r, restDelta: n} = s, o = s.keyframes[0], a = s.keyframes[s.keyframes.length - 1], l = {
            done: !1,
            value: o
        }, {stiffness: u, damping: h, mass: c, duration: d, velocity: p, isResolvedFromDuration: m} = function(t) {
            let e = {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
                ...t
            };
            if (!tH(t, tz) && tH(t, tW))
                if (t.visualDuration) {
                    let i = 2 * Math.PI / (1.2 * t.visualDuration)
                      , s = i * i
                      , r = 2 * (0,
                    tD.clamp)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                    e = {
                        ...e,
                        mass: 1,
                        stiffness: s,
                        damping: r
                    }
                } else {
                    let i = function({duration: t=800, bounce: e=.3, velocity: i=0, mass: s=1}) {
                        let r, n;
                        (0,
                        ty.warning)(t <= (0,
                        S.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less");
                        let o = 1 - e;
                        o = (0,
                        tD.clamp)(.05, 1, o),
                        t = (0,
                        tD.clamp)(.01, 10, (0,
                        S.millisecondsToSeconds)(t)),
                        o < 1 ? (r = e => {
                            let s = e * o
                              , r = s * t;
                            return .001 - (s - i) / t$(e, o) * Math.exp(-r)
                        }
                        ,
                        n = e => {
                            let s = e * o * t
                              , n = Math.pow(o, 2) * Math.pow(e, 2) * t
                              , a = Math.exp(-s)
                              , l = t$(Math.pow(e, 2), o);
                            return (s * i + i - n) * a * (-r(e) + .001 > 0 ? -1 : 1) / l
                        }
                        ) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                        n = e => t * t * (i - e) * Math.exp(-e * t));
                        let a = function(t, e, i) {
                            let s = i;
                            for (let i = 1; i < 12; i++)
                                s -= t(s) / e(s);
                            return s
                        }(r, n, 5 / t);
                        if (t = (0,
                        S.secondsToMilliseconds)(t),
                        isNaN(a))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(a, 2) * s;
                            return {
                                stiffness: e,
                                damping: 2 * o * Math.sqrt(s * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...i,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
            return e
        }({
            ...s,
            velocity: -(0,
            S.millisecondsToSeconds)(s.velocity || 0)
        }), f = p || 0, g = h / (2 * Math.sqrt(u * c)), v = a - o, y = (0,
        S.millisecondsToSeconds)(Math.sqrt(u / c)), x = 5 > Math.abs(v);
        if (r || (r = x ? tO : tI),
        n || (n = x ? tU : tN),
        g < 1) {
            let t = t$(y, g);
            i = e => a - Math.exp(-g * y * e) * ((f + g * y * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
        } else if (1 === g)
            i = t => a - Math.exp(-y * t) * (v + (f + y * v) * t);
        else {
            let t = y * Math.sqrt(g * g - 1);
            i = e => {
                let i = Math.exp(-g * y * e)
                  , s = Math.min(t * e, 300);
                return a - i * ((f + g * y * v) * Math.sinh(s) + t * v * Math.cosh(s)) / t
            }
        }
        let T = {
            calculatedDuration: m && d || null,
            next: t => {
                let e = i(t);
                if (m)
                    l.done = t >= d;
                else {
                    let s = 0;
                    g < 1 && (s = 0 === t ? (0,
                    S.secondsToMilliseconds)(f) : tB(i, t, e));
                    let o = Math.abs(a - e) <= n;
                    l.done = Math.abs(s) <= r && o
                }
                return l.value = l.done ? a : e,
                l
            }
            ,
            toString: () => {
                let t = Math.min((0,
                tk.calcGeneratorDuration)(T), tk.maxGeneratorDuration)
                  , e = (0,
                tF.generateLinearEasing)(e => T.next(t * e).value, t, 30);
                return t + "ms " + e
            }
        };
        return T
    }
    function tG({keyframes: t, velocity: e=0, power: i=.8, timeConstant: s=325, bounceDamping: r=10, bounceStiffness: n=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
        let c, d, p = t[0], m = {
            done: !1,
            value: p
        }, f = i * e, g = p + f, v = void 0 === o ? g : o(g);
        v !== g && (f = v - p);
        let y = t => -f * Math.exp(-t / s)
          , x = t => v + y(t)
          , T = t => {
            let e = y(t)
              , i = x(t);
            m.done = Math.abs(e) <= u,
            m.value = m.done ? v : i
        }
          , P = t => {
            let e;
            if (e = m.value,
            void 0 !== a && e < a || void 0 !== l && e > l) {
                var i;
                c = t,
                d = tY({
                    keyframes: [m.value, (i = m.value,
                    void 0 === a ? l : void 0 === l || Math.abs(a - i) < Math.abs(l - i) ? a : l)],
                    velocity: tB(x, t, m.value),
                    damping: r,
                    stiffness: n,
                    restDelta: u,
                    restSpeed: h
                })
            }
        }
        ;
        return P(0),
        {
            calculatedDuration: null,
            next: t => {
                let e = !1;
                return (d || void 0 !== c || (e = !0,
                T(t),
                P(t)),
                void 0 !== c && t >= c) ? d.next(t - c) : (e || T(t),
                m)
            }
        }
    }
    let tX = L(.42, 0, 1, 1)
      , tq = L(0, 0, .58, 1)
      , tK = L(.42, 0, .58, 1);
    var tZ = t.i(31675);
    let t_ = {
        linear: D.noop,
        easeIn: tX,
        easeInOut: tK,
        easeOut: tq,
        circIn: N,
        circInOut: W,
        circOut: $,
        backIn: O,
        backInOut: I,
        backOut: B,
        anticipate: U
    }
      , tJ = t => {
        if ((0,
        tZ.isBezierDefinition)(t)) {
            (0,
            ty.invariant)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            let[e,i,s,r] = t;
            return L(e, i, s, r)
        }
        return "string" == typeof t ? ((0,
        ty.invariant)(void 0 !== t_[t], `Invalid easing type '${t}'`),
        t_[t]) : t
    }
    ;
    var tQ = t.i(46835)
      , t0 = t.i(55611);
    function t1({duration: t=300, keyframes: e, times: i, ease: s="easeInOut"}) {
        var r;
        let n = Array.isArray(s) && "number" != typeof s[0] ? s.map(tJ) : tJ(s)
          , o = {
            done: !1,
            value: e[0]
        }
          , a = (r = i && i.length === e.length ? i : (0,
        t0.defaultOffset)(e),
        r.map(e => e * t))
          , l = (0,
        tQ.interpolate)(a, e, {
            ease: Array.isArray(n) ? n : e.map( () => n || tK).splice(0, e.length - 1)
        });
        return {
            calculatedDuration: t,
            next: e => (o.value = l(e),
            o.done = e >= t,
            o)
        }
    }
    let t2 = t => {
        let e = ({timestamp: e}) => t(e);
        return {
            start: () => A.frame.update(e, !0),
            stop: () => (0,
            A.cancelFrame)(e),
            now: () => A.frameData.isProcessing ? A.frameData.timestamp : tA.time.now()
        }
    }
      , t5 = {
        decay: tG,
        inertia: tG,
        tween: t1,
        keyframes: t1,
        spring: tY
    }
      , t3 = t => t / 100;
    class t9 extends tE {
        constructor(t) {
            super(t),
            this.holdTime = null,
            this.cancelTime = null,
            this.currentTime = 0,
            this.playbackSpeed = 1,
            this.pendingPlayState = "running",
            this.startTime = null,
            this.state = "idle",
            this.stop = () => {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.teardown();
                let {onStop: t} = this.options;
                t && t()
            }
            ;
            const {name: e, motionValue: i, element: s, keyframes: r} = this.options
              , n = (null == s ? void 0 : s.KeyframeResolver) || tv
              , o = (t, e) => this.onKeyframesResolved(t, e);
            this.resolver = new n(r,o,e,i,s),
            this.resolver.scheduleResolve()
        }
        flatten() {
            super.flatten(),
            this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
        }
        initPlayback(t) {
            let e, i, {type: s="keyframes", repeat: r=0, repeatDelay: n=0, repeatType: o, velocity: a=0} = this.options, l = (0,
            E.isGenerator)(s) ? s : t5[s] || t1;
            l !== t1 && "number" != typeof t[0] && (e = (0,
            tL.pipe)(t3, (0,
            tR.mix)(t[0], t[1])),
            t = [0, 100]);
            let u = l({
                ...this.options,
                keyframes: t
            });
            "mirror" === o && (i = l({
                ...this.options,
                keyframes: [...t].reverse(),
                velocity: -a
            })),
            null === u.calculatedDuration && (u.calculatedDuration = (0,
            tk.calcGeneratorDuration)(u));
            let {calculatedDuration: h} = u
              , c = h + n;
            return {
                generator: u,
                mirroredGenerator: i,
                mapPercentToKeyframes: e,
                calculatedDuration: h,
                resolvedDuration: c,
                totalDuration: c * (r + 1) - n
            }
        }
        onPostResolved() {
            let {autoplay: t=!0} = this.options;
            this.play(),
            "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
        }
        tick(t, e=!1) {
            let {resolved: i} = this;
            if (!i) {
                let {keyframes: t} = this.options;
                return {
                    done: !0,
                    value: t[t.length - 1]
                }
            }
            let {finalKeyframe: s, generator: r, mirroredGenerator: n, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
            if (null === this.startTime)
                return r.next(0);
            let {delay: c, repeat: d, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
            let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1)
              , v = this.speed >= 0 ? g < 0 : g > u;
            this.currentTime = Math.max(g, 0),
            "finished" === this.state && null === this.holdTime && (this.currentTime = u);
            let y = this.currentTime
              , x = r;
            if (d) {
                let t = Math.min(this.currentTime, u) / h
                  , e = Math.floor(t)
                  , i = t % 1;
                !i && t >= 1 && (i = 1),
                1 === i && e--,
                (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                m && (i -= m / h)) : "mirror" === p && (x = n)),
                y = (0,
                tD.clamp)(0, 1, i) * h
            }
            let T = v ? {
                done: !1,
                value: a[0]
            } : x.next(y);
            o && (T.value = o(T.value));
            let {done: P} = T;
            v || null === l || (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
            let b = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
            return b && void 0 !== s && (T.value = tV(a, this.options, s)),
            f && f(T.value),
            b && this.finish(),
            T
        }
        get duration() {
            let {resolved: t} = this;
            return t ? (0,
            S.millisecondsToSeconds)(t.calculatedDuration) : 0
        }
        get time() {
            return (0,
            S.millisecondsToSeconds)(this.currentTime)
        }
        set time(t) {
            t = (0,
            S.secondsToMilliseconds)(t),
            this.currentTime = t,
            null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            let e = this.playbackSpeed !== t;
            this.playbackSpeed = t,
            e && (this.time = (0,
            S.millisecondsToSeconds)(this.currentTime))
        }
        play() {
            if (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved) {
                this.pendingPlayState = "running";
                return
            }
            if (this.isStopped)
                return;
            let {driver: t=t2, onPlay: e, startTime: i} = this.options;
            this.driver || (this.driver = t(t => this.tick(t))),
            e && e();
            let s = this.driver.now();
            null !== this.holdTime ? this.startTime = s - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = s) : this.startTime = null != i ? i : this.calcStartTime(),
            "finished" === this.state && this.updateFinishedPromise(),
            this.cancelTime = this.startTime,
            this.holdTime = null,
            this.state = "running",
            this.driver.start()
        }
        pause() {
            var t;
            if (!this._resolved) {
                this.pendingPlayState = "paused";
                return
            }
            this.state = "paused",
            this.holdTime = null != (t = this.currentTime) ? t : 0
        }
        complete() {
            "running" !== this.state && this.play(),
            this.pendingPlayState = this.state = "finished",
            this.holdTime = null
        }
        finish() {
            this.teardown(),
            this.state = "finished";
            let {onComplete: t} = this.options;
            t && t()
        }
        cancel() {
            null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise()
        }
        teardown() {
            this.state = "idle",
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            this.startTime = this.cancelTime = null,
            this.resolver.cancel()
        }
        stopDriver() {
            this.driver && (this.driver.stop(),
            this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0,
            this.tick(t, !0)
        }
    }
    function t4(t) {
        return new t9(t)
    }
    t.s(["MainThreadAnimation", () => t9, "animateValue", () => t4], 38637);
    let t7 = new Set(["opacity", "clipPath", "filter", "transform"])
      , t6 = (0,
    t.i(18514).memo)( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
      , t8 = {
        anticipate: U,
        backInOut: I,
        circInOut: W
    };
    class et extends tE {
        constructor(t) {
            super(t);
            const {name: e, motionValue: i, element: s, keyframes: r} = this.options;
            this.resolver = new tS(r, (t, e) => this.onKeyframesResolved(t, e),e,i,s),
            this.resolver.scheduleResolve()
        }
        initPlayback(t, e) {
            var i;
            let {duration: s=300, times: r, ease: n, type: o, motionValue: a, name: l, startTime: u} = this.options;
            if (!a.owner || !a.owner.current)
                return !1;
            if ("string" == typeof n && (0,
            C.supportsLinearEasing)() && n in t8 && (n = t8[n]),
            i = this.options,
            (0,
            E.isGenerator)(i.type) || "spring" === i.type || !(0,
            k.isWaapiSupportedEasing)(i.ease)) {
                let {onComplete: e, onUpdate: i, motionValue: a, element: l, ...u} = this.options
                  , h = function(t, e) {
                    let i = new t9({
                        ...e,
                        keyframes: t,
                        repeat: 0,
                        delay: 0,
                        isGenerator: !0
                    })
                      , s = {
                        done: !1,
                        value: t[0]
                    }
                      , r = []
                      , n = 0;
                    for (; !s.done && n < 2e4; )
                        r.push((s = i.sample(n)).value),
                        n += 10;
                    return {
                        times: void 0,
                        keyframes: r,
                        duration: n - 10,
                        ease: "linear"
                    }
                }(t, u);
                1 === (t = h.keyframes).length && (t[1] = t[0]),
                s = h.duration,
                r = h.times,
                n = h.ease,
                o = "keyframes"
            }
            let h = function(t, e, i, {delay: s=0, duration: r=300, repeat: n=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
                let u = {
                    [e]: i
                };
                l && (u.offset = l);
                let h = (0,
                k.mapEasingToNativeEasing)(a, r);
                return Array.isArray(h) && (u.easing = h),
                t.animate(u, {
                    delay: s,
                    duration: r,
                    easing: Array.isArray(h) ? "linear" : h,
                    fill: "both",
                    iterations: n + 1,
                    direction: "reverse" === o ? "alternate" : "normal"
                })
            }(a.owner.current, l, t, {
                ...this.options,
                duration: s,
                times: r,
                ease: n
            });
            return h.startTime = null != u ? u : this.calcStartTime(),
            this.pendingTimeline ? ((0,
            V.attachTimeline)(h, this.pendingTimeline),
            this.pendingTimeline = void 0) : h.onfinish = () => {
                let {onComplete: i} = this.options;
                a.set(tV(t, this.options, e)),
                i && i(),
                this.cancel(),
                this.resolveFinishedPromise()
            }
            ,
            {
                animation: h,
                duration: s,
                times: r,
                type: o,
                ease: n,
                keyframes: t
            }
        }
        get duration() {
            let {resolved: t} = this;
            if (!t)
                return 0;
            let {duration: e} = t;
            return (0,
            S.millisecondsToSeconds)(e)
        }
        get time() {
            let {resolved: t} = this;
            if (!t)
                return 0;
            let {animation: e} = t;
            return (0,
            S.millisecondsToSeconds)(e.currentTime || 0)
        }
        set time(t) {
            let {resolved: e} = this;
            if (!e)
                return;
            let {animation: i} = e;
            i.currentTime = (0,
            S.secondsToMilliseconds)(t)
        }
        get speed() {
            let {resolved: t} = this;
            if (!t)
                return 1;
            let {animation: e} = t;
            return e.playbackRate
        }
        set speed(t) {
            let {resolved: e} = this;
            if (!e)
                return;
            let {animation: i} = e;
            i.playbackRate = t
        }
        get state() {
            let {resolved: t} = this;
            if (!t)
                return "idle";
            let {animation: e} = t;
            return e.playState
        }
        get startTime() {
            let {resolved: t} = this;
            if (!t)
                return null;
            let {animation: e} = t;
            return e.startTime
        }
        attachTimeline(t) {
            if (this._resolved) {
                let {resolved: e} = this;
                if (!e)
                    return D.noop;
                let {animation: i} = e;
                (0,
                V.attachTimeline)(i, t)
            } else
                this.pendingTimeline = t;
            return D.noop
        }
        play() {
            if (this.isStopped)
                return;
            let {resolved: t} = this;
            if (!t)
                return;
            let {animation: e} = t;
            "finished" === e.playState && this.updateFinishedPromise(),
            e.play()
        }
        pause() {
            let {resolved: t} = this;
            if (!t)
                return;
            let {animation: e} = t;
            e.pause()
        }
        stop() {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            "idle" === this.state)
                return;
            this.resolveFinishedPromise(),
            this.updateFinishedPromise();
            let {resolved: t} = this;
            if (!t)
                return;
            let {animation: e, keyframes: i, duration: s, type: r, ease: n, times: o} = t;
            if ("idle" === e.playState || "finished" === e.playState)
                return;
            if (this.time) {
                let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                  , h = new t9({
                    ...u,
                    keyframes: i,
                    duration: s,
                    type: r,
                    ease: n,
                    times: o,
                    isGenerator: !0
                })
                  , c = (0,
                S.secondsToMilliseconds)(this.time);
                t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
            }
            let {onStop: a} = this.options;
            a && a(),
            this.cancel()
        }
        complete() {
            let {resolved: t} = this;
            t && t.animation.finish()
        }
        cancel() {
            let {resolved: t} = this;
            t && t.animation.cancel()
        }
        static supports(t) {
            let {motionValue: e, name: i, repeatDelay: s, repeatType: r, damping: n, type: o} = t;
            if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                return !1;
            let {onUpdate: a, transformTemplate: l} = e.owner.getProps();
            return t6() && i && t7.has(i) && !a && !l && !s && "mirror" !== r && 0 !== n && "inertia" !== o
        }
    }
    let ee = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }
      , ei = {
        type: "keyframes",
        duration: .8
    }
      , es = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
      , er = (t, e, i, s={}, r, n) => o => {
        let a = (0,
        p.getValueTransition)(s, t) || {}
          , l = a.delay || s.delay || 0
          , {elapsed: u=0} = s;
        u -= (0,
        S.secondsToMilliseconds)(l);
        let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: t => {
                e.set(t),
                a.onUpdate && a.onUpdate(t)
            }
            ,
            onComplete: () => {
                o(),
                a.onComplete && a.onComplete()
            }
            ,
            name: t,
            motionValue: e,
            element: n ? void 0 : r
        };
        !function({when: t, delay: e, delayChildren: i, staggerChildren: s, staggerDirection: r, repeat: n, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
            return !!Object.keys(h).length
        }(a) && (h = {
            ...h,
            ...( (t, {keyframes: e}) => e.length > 2 ? ei : f.has(t) ? t.startsWith("scale") ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            } : ee : es)(t, h)
        }),
        h.duration && (h.duration = (0,
        S.secondsToMilliseconds)(h.duration)),
        h.repeatDelay && (h.repeatDelay = (0,
        S.secondsToMilliseconds)(h.repeatDelay)),
        void 0 !== h.from && (h.keyframes[0] = h.from);
        let c = !1;
        if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0,
        0 === h.delay && (c = !0)),
        M.MotionGlobalConfig.skipAnimations && (c = !0,
        h.duration = 0,
        h.delay = 0),
        c && !n && void 0 !== e.get()) {
            let t = tV(h.keyframes, a);
            if (void 0 !== t)
                return A.frame.update( () => {
                    h.onUpdate(t),
                    h.onComplete()
                }
                ),
                new w.GroupPlaybackControls([])
        }
        return !n && et.supports(h) ? new et(h) : new t9(h)
    }
    ;
    function en(t, e, {delay: i=0, transitionOverride: s, type: r}={}) {
        var n;
        let {transition: o=t.getDefaultTransition(), transitionEnd: l, ...u} = e;
        s && (o = s);
        let h = []
          , c = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
            let s = t.getValue(e, null != (n = t.latestValues[e]) ? n : null)
              , r = u[e];
            if (void 0 === r || c && function({protectedKeys: t, needsAnimating: e}, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return e[i] = !1,
                s
            }(c, e))
                continue;
            let a = {
                delay: i,
                ...(0,
                p.getValueTransition)(o || {}, e)
            }
              , l = !1;
            if (window.MotionHandoffAnimation) {
                let i = t.props[b];
                if (i) {
                    let t = window.MotionHandoffAnimation(i, e, A.frame);
                    null !== t && (a.startTime = t,
                    l = !0)
                }
            }
            T(t, e),
            s.start(er(e, s, r, t.shouldReduceMotion && g.has(e) ? {
                type: !1
            } : a, t, l));
            let d = s.animation;
            d && h.push(d)
        }
        return l && Promise.all(h).then( () => {
            A.frame.update( () => {
                l && function(t, e) {
                    let {transitionEnd: i={}, transition: s={}, ...r} = a(t, e) || {};
                    for (let e in r = {
                        ...r,
                        ...i
                    }) {
                        let i = v(r[e]);
                        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0,
                        y.motionValue)(i))
                    }
                }(t, l)
            }
            )
        }
        ),
        h
    }
    function eo(t, e, i={}) {
        var s;
        let r = a(t, e, "exit" === i.type ? null == (s = t.presenceContext) ? void 0 : s.custom : void 0)
          , {transition: n=t.getDefaultTransition() || {}} = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let o = r ? () => Promise.all(en(t, r, i)) : () => Promise.resolve()
          , l = t.variantChildren && t.variantChildren.size ? (s=0) => {
            let {delayChildren: r=0, staggerChildren: o, staggerDirection: a} = n;
            return function(t, e, i=0, s=0, r=1, n) {
                let o = []
                  , a = (t.variantChildren.size - 1) * s
                  , l = 1 === r ? (t=0) => t * s : (t=0) => a - t * s;
                return Array.from(t.variantChildren).sort(ea).forEach( (t, s) => {
                    t.notify("AnimationStart", e),
                    o.push(eo(t, e, {
                        ...n,
                        delay: i + l(s)
                    }).then( () => t.notify("AnimationComplete", e)))
                }
                ),
                Promise.all(o)
            }(t, e, r + s, o, a, i)
        }
        : () => Promise.resolve()
          , {when: u} = n;
        if (!u)
            return Promise.all([o(), l(i.delay)]);
        {
            let[t,e] = "beforeChildren" === u ? [o, l] : [l, o];
            return t().then( () => e())
        }
    }
    function ea(t, e) {
        return t.sortNodePosition(e)
    }
    let el = u.length
      , eu = [...l].reverse()
      , eh = l.length;
    function ec(t=!1) {
        return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }
    function ed() {
        return {
            animate: ec(!0),
            whileInView: ec(),
            whileHover: ec(),
            whileTap: ec(),
            whileDrag: ec(),
            whileFocus: ec(),
            exit: ec()
        }
    }
    class ep {
        constructor(t) {
            this.isMounted = !1,
            this.node = t
        }
        update() {}
    }
    let em = 0;
    var ef = t.i(87695)
      , eg = t.i(66199);
    function ev(t, e, i, s={
        passive: !0
    }) {
        return t.addEventListener(e, i, s),
        () => t.removeEventListener(e, i)
    }
    function ey(t) {
        return {
            point: {
                x: t.pageX,
                y: t.pageY
            }
        }
    }
    function ex(t, e, i, s) {
        return ev(t, e, t => (0,
        eg.isPrimaryPointer)(t) && i(t, ey(t)), s)
    }
    let eT = (t, e) => Math.abs(t - e);
    class eP {
        constructor(t, e, {transformPagePoint: i, contextWindow: s, dragSnapToOrigin: r=!1}={}) {
            if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                var t, e;
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                let i = eS(this.lastMoveEventInfo, this.history)
                  , s = null !== this.startEvent
                  , r = (t = i.offset,
                e = {
                    x: 0,
                    y: 0
                },
                Math.sqrt(eT(t.x, e.x) ** 2 + eT(t.y, e.y) ** 2) >= 3);
                if (!s && !r)
                    return;
                let {point: n} = i
                  , {timestamp: o} = A.frameData;
                this.history.push({
                    ...n,
                    timestamp: o
                });
                let {onStart: a, onMove: l} = this.handlers;
                s || (a && a(this.lastMoveEvent, i),
                this.startEvent = this.lastMoveEvent),
                l && l(this.lastMoveEvent, i)
            }
            ,
            this.handlePointerMove = (t, e) => {
                this.lastMoveEvent = t,
                this.lastMoveEventInfo = eb(e, this.transformPagePoint),
                A.frame.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (t, e) => {
                this.end();
                let {onEnd: i, onSessionEnd: s, resumeAnimation: r} = this.handlers;
                if (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                let n = eS("pointercancel" === t.type ? this.lastMoveEventInfo : eb(e, this.transformPagePoint), this.history);
                this.startEvent && i && i(t, n),
                s && s(t, n)
            }
            ,
            !(0,
            eg.isPrimaryPointer)(t))
                return;
            this.dragSnapToOrigin = r,
            this.handlers = e,
            this.transformPagePoint = i,
            this.contextWindow = s || window;
            const n = eb(ey(t), this.transformPagePoint)
              , {point: o} = n
              , {timestamp: a} = A.frameData;
            this.history = [{
                ...o,
                timestamp: a
            }];
            const {onSessionStart: l} = e;
            l && l(t, eS(n, this.history)),
            this.removeListeners = (0,
            tL.pipe)(ex(this.contextWindow, "pointermove", this.handlePointerMove), ex(this.contextWindow, "pointerup", this.handlePointerUp), ex(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(),
            (0,
            A.cancelFrame)(this.updatePoint)
        }
    }
    function eb(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }
    function ew(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }
    function eS({point: t}, e) {
        return {
            point: t,
            delta: ew(t, eA(e)),
            offset: ew(t, e[0]),
            velocity: function(t, e) {
                if (t.length < 2)
                    return {
                        x: 0,
                        y: 0
                    };
                let i = t.length - 1
                  , s = null
                  , r = eA(t);
                for (; i >= 0 && (s = t[i],
                !(r.timestamp - s.timestamp > (0,
                S.secondsToMilliseconds)(.1))); )
                    i--;
                if (!s)
                    return {
                        x: 0,
                        y: 0
                    };
                let n = (0,
                S.millisecondsToSeconds)(r.timestamp - s.timestamp);
                if (0 === n)
                    return {
                        x: 0,
                        y: 0
                    };
                let o = {
                    x: (r.x - s.x) / n,
                    y: (r.y - s.y) / n
                };
                return o.x === 1 / 0 && (o.x = 0),
                o.y === 1 / 0 && (o.y = 0),
                o
            }(e, .1)
        }
    }
    function eA(t) {
        return t[t.length - 1]
    }
    function eM(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }
    var eC = t.i(74757)
      , eV = t.i(47495);
    function eE(t) {
        return t.max - t.min
    }
    function ek(t, e, i, s=.5) {
        t.origin = s,
        t.originPoint = (0,
        eV.mixNumber)(e.min, e.max, t.origin),
        t.scale = eE(i) / eE(e),
        t.translate = (0,
        eV.mixNumber)(i.min, i.max, t.origin) - t.originPoint,
        (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
        (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }
    function eD(t, e, i, s) {
        ek(t.x, e.x, i.x, s ? s.originX : void 0),
        ek(t.y, e.y, i.y, s ? s.originY : void 0)
    }
    function eR(t, e, i) {
        t.min = i.min + e.min,
        t.max = t.min + eE(e)
    }
    function eL(t, e, i) {
        t.min = e.min - i.min,
        t.max = t.min + eE(e)
    }
    function eF(t, e, i) {
        eL(t.x, e.x, i.x),
        eL(t.y, e.y, i.y)
    }
    function ej(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }
    function eB(t, e) {
        let i = e.min - t.min
          , s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i,s] = [s, i]),
        {
            min: i,
            max: s
        }
    }
    function eO(t, e, i) {
        return {
            min: eI(t, e),
            max: eI(t, i)
        }
    }
    function eI(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let eU = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    })
      , eN = () => ({
        x: eU(),
        y: eU()
    })
      , e$ = () => ({
        min: 0,
        max: 0
    })
      , eW = () => ({
        x: e$(),
        y: e$()
    });
    function ez(t) {
        return [t("x"), t("y")]
    }
    function eH({top: t, left: e, right: i, bottom: s}) {
        return {
            x: {
                min: e,
                max: i
            },
            y: {
                min: t,
                max: s
            }
        }
    }
    function eY(t) {
        return void 0 === t || 1 === t
    }
    function eG({scale: t, scaleX: e, scaleY: i}) {
        return !eY(t) || !eY(e) || !eY(i)
    }
    function eX(t) {
        return eG(t) || eq(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
    }
    function eq(t) {
        var e, i;
        return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
    }
    function eK(t, e, i, s, r) {
        return void 0 !== r && (t = s + r * (t - s)),
        s + i * (t - s) + e
    }
    function eZ(t, e=0, i=1, s, r) {
        t.min = eK(t.min, e, i, s, r),
        t.max = eK(t.max, e, i, s, r)
    }
    function e_(t, {x: e, y: i}) {
        eZ(t.x, e.translate, e.scale, e.originPoint),
        eZ(t.y, i.translate, i.scale, i.originPoint)
    }
    function eJ(t, e) {
        t.min = t.min + e,
        t.max = t.max + e
    }
    function eQ(t, e, i, s, r=.5) {
        let n = (0,
        eV.mixNumber)(t.min, t.max, r);
        eZ(t, e, i, n, s)
    }
    function e0(t, e) {
        eQ(t.x, e.x, e.scaleX, e.scale, e.originX),
        eQ(t.y, e.y, e.scaleY, e.scale, e.originY)
    }
    function e1(t, e) {
        return eH(function(t, e) {
            if (!e)
                return t;
            let i = e({
                x: t.left,
                y: t.top
            })
              , s = e({
                x: t.right,
                y: t.bottom
            });
            return {
                top: i.y,
                left: i.x,
                bottom: s.y,
                right: s.x
            }
        }(t.getBoundingClientRect(), e))
    }
    let e2 = ({current: t}) => t ? t.ownerDocument.defaultView : null
      , e5 = new WeakMap;
    class e3 {
        constructor(t) {
            this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = eW(),
            this.visualElement = t
        }
        start(t, {snapToCursor: e=!1}={}) {
            let {presenceContext: i} = this.visualElement;
            if (i && !1 === i.isPresent)
                return;
            let s = t => {
                let {dragSnapToOrigin: i} = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(ey(t).point)
            }
              , r = (t, e) => {
                let {drag: i, dragPropagation: s, onDragStart: r} = this.getProps();
                if (i && !s && (this.openDragLock && this.openDragLock(),
                this.openDragLock = (0,
                ef.setDragLock)(i),
                !this.openDragLock))
                    return;
                this.isDragging = !0,
                this.currentDirection = null,
                this.resolveConstraints(),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                this.visualElement.projection.target = void 0),
                ez(t => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (_.percent.test(e)) {
                        let {projection: i} = this.visualElement;
                        if (i && i.layout) {
                            let s = i.layout.layoutBox[t];
                            s && (e = eE(s) * (parseFloat(e) / 100))
                        }
                    }
                    this.originPoint[t] = e
                }
                ),
                r && A.frame.postRender( () => r(t, e)),
                T(this.visualElement, "transform");
                let {animationState: n} = this.visualElement;
                n && n.setActive("whileDrag", !0)
            }
              , n = (t, e) => {
                let {dragPropagation: i, dragDirectionLock: s, onDirectionLock: r, onDrag: n} = this.getProps();
                if (!i && !this.openDragLock)
                    return;
                let {offset: o} = e;
                if (s && null === this.currentDirection) {
                    this.currentDirection = function(t, e=10) {
                        let i = null;
                        return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                        i
                    }(o),
                    null !== this.currentDirection && r && r(this.currentDirection);
                    return
                }
                this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                n && n(t, e)
            }
              , o = (t, e) => this.stop(t, e)
              , a = () => ez(t => {
                var e;
                return "paused" === this.getAnimationState(t) && (null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.play())
            }
            )
              , {dragSnapToOrigin: l} = this.getProps();
            this.panSession = new eP(t,{
                onSessionStart: s,
                onStart: r,
                onMove: n,
                onSessionEnd: o,
                resumeAnimation: a
            },{
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: l,
                contextWindow: e2(this.visualElement)
            })
        }
        stop(t, e) {
            let i = this.isDragging;
            if (this.cancel(),
            !i)
                return;
            let {velocity: s} = e;
            this.startAnimation(s);
            let {onDragEnd: r} = this.getProps();
            r && A.frame.postRender( () => r(t, e))
        }
        cancel() {
            this.isDragging = !1;
            let {projection: t, animationState: e} = this.visualElement;
            t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
            let {dragPropagation: i} = this.getProps();
            !i && this.openDragLock && (this.openDragLock(),
            this.openDragLock = null),
            e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, i) {
            let {drag: s} = this.getProps();
            if (!i || !e9(t, s, this.currentDirection))
                return;
            let r = this.getAxisMotionValue(t)
              , n = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (n = function(t, {min: e, max: i}, s) {
                return void 0 !== e && t < e ? t = s ? (0,
                eV.mixNumber)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0,
                eV.mixNumber)(i, t, s.max) : Math.min(t, i)),
                t
            }(n, this.constraints[t], this.elastic[t])),
            r.set(n)
        }
        resolveConstraints() {
            var t;
            let {dragConstraints: e, dragElastic: i} = this.getProps()
              , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null == (t = this.visualElement.projection) ? void 0 : t.layout
              , r = this.constraints;
            e && eM(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = function(t, {top: e, left: i, bottom: s, right: r}) {
                return {
                    x: ej(t.x, i, r),
                    y: ej(t.y, e, s)
                }
            }(s.layoutBox, e) : this.constraints = !1,
            this.elastic = function(t=.35) {
                return !1 === t ? t = 0 : !0 === t && (t = .35),
                {
                    x: eO(t, "left", "right"),
                    y: eO(t, "top", "bottom")
                }
            }(i),
            r !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && ez(t => {
                var e, i;
                let r;
                !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = s.layoutBox[t],
                i = this.constraints[t],
                r = {},
                void 0 !== i.min && (r.min = i.min - e.min),
                void 0 !== i.max && (r.max = i.max - e.min),
                r))
            }
            )
        }
        resolveRefConstraints() {
            var t;
            let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
            if (!e || !eM(e))
                return !1;
            let s = e.current;
            (0,
            ty.invariant)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            let {projection: r} = this.visualElement;
            if (!r || !r.layout)
                return !1;
            let n = function(t, e, i) {
                let s = e1(t, i)
                  , {scroll: r} = e;
                return r && (eJ(s.x, r.offset.x),
                eJ(s.y, r.offset.y)),
                s
            }(s, r.root, this.visualElement.getTransformPagePoint())
              , o = (t = r.layout.layoutBox,
            {
                x: eB(t.x, n.x),
                y: eB(t.y, n.y)
            });
            if (i) {
                let t = i(function({x: t, y: e}) {
                    return {
                        top: e.min,
                        right: t.max,
                        bottom: e.max,
                        left: t.min
                    }
                }(o));
                this.hasMutatedConstraints = !!t,
                t && (o = eH(t))
            }
            return o
        }
        startAnimation(t) {
            let {drag: e, dragMomentum: i, dragElastic: s, dragTransition: r, dragSnapToOrigin: n, onDragTransitionEnd: o} = this.getProps()
              , a = this.constraints || {};
            return Promise.all(ez(o => {
                if (!e9(o, e, this.currentDirection))
                    return;
                let l = a && a[o] || {};
                n && (l = {
                    min: 0,
                    max: 0
                });
                let u = {
                    type: "inertia",
                    velocity: i ? t[o] : 0,
                    bounceStiffness: s ? 200 : 1e6,
                    bounceDamping: s ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...r,
                    ...l
                };
                return this.startAxisValueAnimation(o, u)
            }
            )).then(o)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return T(this.visualElement, t),
            i.start(er(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            ez(t => this.getAxisMotionValue(t).stop())
        }
        pauseAnimation() {
            ez(t => {
                var e;
                return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.pause()
            }
            )
        }
        getAnimationState(t) {
            var e;
            return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.state
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`
              , i = this.visualElement.getProps();
            return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
            ez(e => {
                let {drag: i} = this.getProps();
                if (!e9(e, i, this.currentDirection))
                    return;
                let {projection: s} = this.visualElement
                  , r = this.getAxisMotionValue(e);
                if (s && s.layout) {
                    let {min: i, max: n} = s.layout.layoutBox[e];
                    r.set(t[e] - (0,
                    eV.mixNumber)(i, n, .5))
                }
            }
            )
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current)
                return;
            let {drag: t, dragConstraints: e} = this.getProps()
              , {projection: i} = this.visualElement;
            if (!eM(e) || !i || !this.constraints)
                return;
            this.stopAnimation();
            let s = {
                x: 0,
                y: 0
            };
            ez(t => {
                let e = this.getAxisMotionValue(t);
                if (e && !1 !== this.constraints) {
                    var i, r;
                    let n, o, a, l = e.get();
                    s[t] = (i = {
                        min: l,
                        max: l
                    },
                    r = this.constraints[t],
                    n = .5,
                    o = eE(i),
                    (a = eE(r)) > o ? n = (0,
                    eC.progress)(r.min, r.max - o, i.min) : o > a && (n = (0,
                    eC.progress)(i.min, i.max - a, r.min)),
                    (0,
                    tD.clamp)(0, 1, n))
                }
            }
            );
            let {transformTemplate: r} = this.visualElement.getProps();
            this.visualElement.current.style.transform = r ? r({}, "") : "none",
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            ez(e => {
                if (!e9(e, t, null))
                    return;
                let i = this.getAxisMotionValue(e)
                  , {min: r, max: n} = this.constraints[e];
                i.set((0,
                eV.mixNumber)(r, n, s[e]))
            }
            )
        }
        addListeners() {
            if (!this.visualElement.current)
                return;
            e5.set(this.visualElement, this);
            let t = ex(this.visualElement.current, "pointerdown", t => {
                let {drag: e, dragListener: i=!0} = this.getProps();
                e && i && this.start(t)
            }
            )
              , e = () => {
                let {dragConstraints: t} = this.getProps();
                eM(t) && t.current && (this.constraints = this.resolveRefConstraints())
            }
              , {projection: i} = this.visualElement
              , s = i.addEventListener("measure", e);
            i && !i.layout && (i.root && i.root.updateScroll(),
            i.updateLayout()),
            A.frame.read(e);
            let r = ev(window, "resize", () => this.scalePositionWithinConstraints())
              , n = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                this.isDragging && e && (ez(e => {
                    let i = this.getAxisMotionValue(e);
                    i && (this.originPoint[e] += t[e].translate,
                    i.set(i.get() + t[e].translate))
                }
                ),
                this.visualElement.render())
            }
            );
            return () => {
                r(),
                t(),
                s(),
                n && n()
            }
        }
        getProps() {
            let t = this.visualElement.getProps()
              , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: s=!1, dragConstraints: r=!1, dragElastic: n=.35, dragMomentum: o=!0} = t;
            return {
                ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: s,
                dragConstraints: r,
                dragElastic: n,
                dragMomentum: o
            }
        }
    }
    function e9(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    let e4 = t => (e, i) => {
        t && A.frame.postRender( () => t(e, i))
    }
    ;
    var e7 = t.i(86404)
      , e6 = t.i(26382);
    let e8 = (0,
    e6.createContext)(null);
    function it(t=!0) {
        let e = (0,
        e6.useContext)(e8);
        if (null === e)
            return [!0, null];
        let {isPresent: i, onExitComplete: s, register: r} = e
          , n = (0,
        e6.useId)();
        (0,
        e6.useEffect)( () => {
            t && r(n)
        }
        , [t]);
        let o = (0,
        e6.useCallback)( () => t && s && s(n), [n, s, t]);
        return !i && s ? [!1, o] : [!0]
    }
    t.s(["PresenceContext", () => e8], 80271),
    t.s(["usePresence", () => it], 54472);
    let ie = (0,
    e6.createContext)({});
    t.s(["LayoutGroupContext", () => ie], 12632);
    let ii = (0,
    e6.createContext)({})
      , is = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
    function ir(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    let io = {
        correct: (t, e) => {
            if (!e.target)
                return t;
            if ("string" == typeof t)
                if (!_.px.test(t))
                    return t;
                else
                    t = parseFloat(t);
            let i = ir(t, e.target.x)
              , s = ir(t, e.target.y);
            return `${i}% ${s}%`
        }
    }
      , ia = {}
      , {schedule: il, cancel: iu} = (0,
    t.i(22940).createRenderBatcher)(queueMicrotask, !1);
    class ih extends e6.Component {
        componentDidMount() {
            let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: s} = this.props
              , {projection: r} = t;
            Object.assign(ia, id),
            r && (e.group && e.group.add(r),
            i && i.register && s && i.register(r),
            r.root.didUpdate(),
            r.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }
            ),
            r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove()
            })),
            is.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {layoutDependency: e, visualElement: i, drag: s, isPresent: r} = this.props
              , n = i.projection;
            return n && (n.isPresent = r,
            s || t.layoutDependency !== e || void 0 === e ? n.willUpdate() : this.safeToRemove(),
            t.isPresent !== r && (r ? n.promote() : n.relegate() || A.frame.postRender( () => {
                let t = n.getStack();
                t && t.members.length || this.safeToRemove()
            }
            ))),
            null
        }
        componentDidUpdate() {
            let {projection: t} = this.props.visualElement;
            t && (t.root.didUpdate(),
            il.postRender( () => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
        }
        componentWillUnmount() {
            let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
              , {projection: s} = t;
            s && (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s))
        }
        safeToRemove() {
            let {safeToRemove: t} = this.props;
            t && t()
        }
        render() {
            return null
        }
    }
    function ic(t) {
        let[e,i] = it()
          , s = (0,
        e6.useContext)(ie);
        return (0,
        e7.jsx)(ih, {
            ...t,
            layoutGroup: s,
            switchLayoutGroup: (0,
            e6.useContext)(ii),
            isPresent: e,
            safeToRemove: i
        })
    }
    let id = {
        borderRadius: {
            ...io,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: io,
        borderTopRightRadius: io,
        borderBottomLeftRadius: io,
        borderBottomRightRadius: io,
        boxShadow: {
            correct: (t, {treeScale: e, projectionDelta: i}) => {
                let s = z.complex.parse(t);
                if (s.length > 5)
                    return t;
                let r = z.complex.createTransformer(t)
                  , n = +("number" != typeof s[0])
                  , o = i.x.scale * e.x
                  , a = i.y.scale * e.y;
                s[0 + n] /= o,
                s[1 + n] /= a;
                let l = (0,
                eV.mixNumber)(o, a, .5);
                return "number" == typeof s[2 + n] && (s[2 + n] /= l),
                "number" == typeof s[3 + n] && (s[3 + n] /= l),
                r(s)
            }
        }
    };
    var ip = t.i(71167);
    let im = (t, e) => t.depth - e.depth;
    class ig {
        constructor() {
            this.children = [],
            this.isDirty = !1
        }
        add(t) {
            (0,
            ip.addUniqueItem)(this.children, t),
            this.isDirty = !0
        }
        remove(t) {
            (0,
            ip.removeItem)(this.children, t),
            this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(im),
            this.isDirty = !1,
            this.children.forEach(t)
        }
    }
    var iv = t.i(2519);
    function iy(t) {
        let e = x(t) ? t.get() : t;
        return e && "object" == typeof e && e.mix && e.toValue ? e.toValue() : e
    }
    let ix = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
      , iT = ix.length
      , iP = t => "string" == typeof t ? parseFloat(t) : t
      , ib = t => "number" == typeof t || _.px.test(t);
    function iw(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let iS = iM(0, .5, $)
      , iA = iM(.5, .95, D.noop);
    function iM(t, e, i) {
        return s => s < t ? 0 : s > e ? 1 : i((0,
        eC.progress)(t, e, s))
    }
    function iC(t, e) {
        t.min = e.min,
        t.max = e.max
    }
    function iV(t, e) {
        iC(t.x, e.x),
        iC(t.y, e.y)
    }
    function iE(t, e) {
        t.translate = e.translate,
        t.scale = e.scale,
        t.originPoint = e.originPoint,
        t.origin = e.origin
    }
    function ik(t, e, i, s, r) {
        return t -= e,
        t = s + 1 / i * (t - s),
        void 0 !== r && (t = s + 1 / r * (t - s)),
        t
    }
    function iD(t, e, [i,s,r], n, o) {
        !function(t, e=0, i=1, s=.5, r, n=t, o=t) {
            if (_.percent.test(e) && (e = parseFloat(e),
            e = (0,
            eV.mixNumber)(o.min, o.max, e / 100) - o.min),
            "number" != typeof e)
                return;
            let a = (0,
            eV.mixNumber)(n.min, n.max, s);
            t === n && (a -= e),
            t.min = ik(t.min, e, i, a, r),
            t.max = ik(t.max, e, i, a, r)
        }(t, e[i], e[s], e[r], e.scale, n, o)
    }
    let iR = ["x", "scaleX", "originX"]
      , iL = ["y", "scaleY", "originY"];
    function iF(t, e, i, s) {
        iD(t.x, e, iR, i ? i.x : void 0, s ? s.x : void 0),
        iD(t.y, e, iL, i ? i.y : void 0, s ? s.y : void 0)
    }
    function ij(t) {
        return 0 === t.translate && 1 === t.scale
    }
    function iB(t) {
        return ij(t.x) && ij(t.y)
    }
    function iO(t, e) {
        return t.min === e.min && t.max === e.max
    }
    function iI(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }
    function iU(t, e) {
        return iI(t.x, e.x) && iI(t.y, e.y)
    }
    function iN(t) {
        return eE(t.x) / eE(t.y)
    }
    function i$(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    class iW {
        constructor() {
            this.members = []
        }
        add(t) {
            (0,
            ip.addUniqueItem)(this.members, t),
            t.scheduleRender()
        }
        remove(t) {
            if ((0,
            ip.removeItem)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            let e, i = this.members.findIndex(e => t === e);
            if (0 === i)
                return !1;
            for (let t = i; t >= 0; t--) {
                let i = this.members[t];
                if (!1 !== i.isPresent) {
                    e = i;
                    break
                }
            }
            return !!e && (this.promote(e),
            !0)
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i,
            this.lead = t,
            t.show(),
            i)) {
                i.instance && i.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = i,
                e && (t.resumeFrom.preserveOpacity = !0),
                i.snapshot && (t.snapshot = i.snapshot,
                t.snapshot.latestValues = i.animationValues || i.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                let {crossfade: s} = t.options;
                !1 === s && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                let {options: e, resumingFrom: i} = t;
                e.onExitComplete && e.onExitComplete(),
                i && i.options.onExitComplete && i.options.onExitComplete()
            }
            )
        }
        scheduleRender() {
            this.members.forEach(t => {
                t.instance && t.scheduleRender(!1)
            }
            )
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    let iz = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    }
      , iH = "u" > typeof window && void 0 !== window.MotionDebug
      , iY = ["", "X", "Y", "Z"]
      , iG = {
        visibility: "hidden"
    }
      , iX = 0;
    function iq(t, e, i, s) {
        let {latestValues: r} = e;
        r[t] && (i[t] = r[t],
        e.setStaticValue(t, 0),
        s && (s[t] = 0))
    }
    function iK({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: s, resetTransform: r}) {
        return class {
            constructor(t={}, i=null == e ? void 0 : e()) {
                this.id = iX++,
                this.animationId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.hasCheckedOptimisedAppear = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.updateScheduled = !1,
                this.scheduleUpdate = () => this.update(),
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                    this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                    iH && (iz.totalNodes = iz.resolvedTargetDeltas = iz.recalculatedProjection = 0),
                    this.nodes.forEach(iJ),
                    this.nodes.forEach(i9),
                    this.nodes.forEach(i4),
                    this.nodes.forEach(iQ),
                    iH && window.MotionDebug.record(iz)
                }
                ,
                this.resolvedRelativeTargetAt = 0,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = t,
                this.root = i ? i.root || i : this,
                this.path = i ? [...i.path, i] : [],
                this.parent = i,
                this.depth = i ? i.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++)
                    this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new ig)
            }
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new iv.SubscriptionManager),
                this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t, ...e) {
                let i = this.eventHandlers.get(t);
                i && i.notify(...e)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            mount(e, i=this.root.hasTreeAnimated) {
                if (this.instance)
                    return;
                this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                this.instance = e;
                let {layoutId: s, layout: r, visualElement: n} = this.options;
                if (n && !n.current && n.mount(e),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                i && (r || s) && (this.isLayoutDirty = !0),
                t) {
                    let i, s = () => this.root.updateBlockedByResize = !1;
                    t(e, () => {
                        let t, e;
                        this.root.updateBlockedByResize = !0,
                        i && i(),
                        t = tA.time.now(),
                        e = ({timestamp: i}) => {
                            let r = i - t;
                            r >= 250 && ((0,
                            A.cancelFrame)(e),
                            s(r - 250))
                        }
                        ,
                        A.frame.read(e, !0),
                        i = () => (0,
                        A.cancelFrame)(e),
                        is.hasAnimatedSinceResize && (is.hasAnimatedSinceResize = !1,
                        this.nodes.forEach(i3))
                    }
                    )
                }
                s && this.root.registerSharedNode(s, this),
                !1 !== this.options.animate && n && (s || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: s}) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                        this.relativeTarget = void 0;
                        return
                    }
                    let r = this.options.transition || n.getDefaultTransition() || si
                      , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = n.getProps()
                      , l = !this.targetLayout || !iU(this.targetLayout, s) || i
                      , u = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                        this.resumingFrom.resumingFrom = void 0),
                        this.setAnimationOrigin(t, u);
                        let e = {
                            ...(0,
                            p.getValueTransition)(r, "layout"),
                            onPlay: o,
                            onComplete: a
                        };
                        (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                        e.type = !1),
                        this.startAnimation(e)
                    } else
                        e || i3(this),
                        this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = s
                }
                )
            }
            unmount() {
                this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                (0,
                A.cancelFrame)(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(i7),
                this.animationId++)
            }
            getTransformTemplate() {
                let {visualElement: t} = this.options;
                return t && t.getProps().transformTemplate
            }
            willUpdate(t=!0) {
                if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                    if (e.hasCheckedOptimisedAppear = !0,
                    e.root === e)
                        return;
                    let {visualElement: i} = e.options;
                    if (!i)
                        return;
                    let s = i.props[b];
                    if (window.MotionHasOptimisedAnimation(s, "transform")) {
                        let {layout: t, layoutId: i} = e.options;
                        window.MotionCancelOptimisedAnimation(s, "transform", A.frame, !(t || i))
                    }
                    let {parent: r} = e;
                    r && !r.hasCheckedOptimisedAppear && t(r)
                }(this),
                this.root.isUpdating || this.root.startUpdate(),
                this.isLayoutDirty)
                    return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0,
                    e.updateScroll("snapshot"),
                    e.options.layoutRoot && e.willUpdate(!1)
                }
                let {layoutId: e, layout: i} = this.options;
                if (void 0 === e && !i)
                    return;
                let s = this.getTransformTemplate();
                this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                    this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(i1);
                    return
                }
                this.isUpdating || this.nodes.forEach(i2),
                this.isUpdating = !1,
                this.nodes.forEach(i5),
                this.nodes.forEach(iZ),
                this.nodes.forEach(i_),
                this.clearAllSnapshots();
                let t = tA.time.now();
                A.frameData.delta = (0,
                tD.clamp)(0, 1e3 / 60, t - A.frameData.timestamp),
                A.frameData.timestamp = t,
                A.frameData.isProcessing = !0,
                A.frameSteps.update.process(A.frameData),
                A.frameSteps.preRender.process(A.frameData),
                A.frameSteps.render.process(A.frameData),
                A.frameData.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0,
                il.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(i0),
                this.sharedNodes.forEach(i6)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                A.frame.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                A.frame.postRender( () => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                }
                )
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure())
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                    return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1),
                this.layoutCorrected = eW(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
                let {visualElement: e} = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll(t="measure") {
                let e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                e) {
                    let e = s(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: e,
                        offset: i(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : e
                    }
                }
            }
            resetTransform() {
                if (!r)
                    return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                  , e = this.projectionDelta && !iB(this.projectionDelta)
                  , i = this.getTransformTemplate()
                  , s = i ? i(this.latestValues, "") : void 0
                  , n = s !== this.prevTransformTemplateValue;
                t && (e || eX(this.latestValues) || n) && (r(this.instance, s),
                this.shouldResetTransform = !1,
                this.scheduleRender())
            }
            measure(t=!0) {
                var e;
                let i = this.measurePageBox()
                  , s = this.removeElementScroll(i);
                return t && (s = this.removeTransform(s)),
                sn((e = s).x),
                sn(e.y),
                {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: s,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                var t;
                let {visualElement: e} = this.options;
                if (!e)
                    return eW();
                let i = e.measureViewportBox();
                if (!((null == (t = this.scroll) ? void 0 : t.wasRoot) || this.path.some(sa))) {
                    let {scroll: t} = this.root;
                    t && (eJ(i.x, t.offset.x),
                    eJ(i.y, t.offset.y))
                }
                return i
            }
            removeElementScroll(t) {
                var e;
                let i = eW();
                if (iV(i, t),
                null == (e = this.scroll) ? void 0 : e.wasRoot)
                    return i;
                for (let e = 0; e < this.path.length; e++) {
                    let s = this.path[e]
                      , {scroll: r, options: n} = s;
                    s !== this.root && r && n.layoutScroll && (r.wasRoot && iV(i, t),
                    eJ(i.x, r.offset.x),
                    eJ(i.y, r.offset.y))
                }
                return i
            }
            applyTransform(t, e=!1) {
                let i = eW();
                iV(i, t);
                for (let t = 0; t < this.path.length; t++) {
                    let s = this.path[t];
                    !e && s.options.layoutScroll && s.scroll && s !== s.root && e0(i, {
                        x: -s.scroll.offset.x,
                        y: -s.scroll.offset.y
                    }),
                    eX(s.latestValues) && e0(i, s.latestValues)
                }
                return eX(this.latestValues) && e0(i, this.latestValues),
                i
            }
            removeTransform(t) {
                let e = eW();
                iV(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    if (!i.instance || !eX(i.latestValues))
                        continue;
                    eG(i.latestValues) && i.updateSnapshot();
                    let s = eW();
                    iV(s, i.measurePageBox()),
                    iF(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                }
                return eX(this.latestValues) && iF(e, this.latestValues),
                e
            }
            setTargetDelta(t) {
                this.targetDelta = t,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
            }
            setOptions(t) {
                this.options = {
                    ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== A.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(t=!1) {
                var e, i, s, r;
                let n = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
                let o = !!this.resumingFrom || this !== n;
                if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null == (e = this.parent) ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                    return;
                let {layout: a, layoutId: l} = this.options;
                if (this.layout && (a || l)) {
                    if (this.resolvedRelativeTargetAt = A.frameData.timestamp,
                    !this.targetDelta && !this.relativeTarget) {
                        let t = this.getClosestProjectingParent();
                        t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = eW(),
                        this.relativeTargetOrigin = eW(),
                        eF(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                        iV(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    if (this.relativeTarget || this.targetDelta) {
                        if ((this.target || (this.target = eW(),
                        this.targetWithTransforms = eW()),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                        i = this.target,
                        s = this.relativeTarget,
                        r = this.relativeParent.target,
                        eR(i.x, s.x, r.x),
                        eR(i.y, s.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : iV(this.target, this.layout.layoutBox),
                        e_(this.target, this.targetDelta)) : iV(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget) {
                            this.attemptToResolveRelativeTarget = !1;
                            let t = this.getClosestProjectingParent();
                            t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = eW(),
                            this.relativeTargetOrigin = eW(),
                            eF(this.relativeTargetOrigin, this.target, t.target),
                            iV(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        iH && iz.resolvedTargetDeltas++
                    }
                }
            }
            getClosestProjectingParent() {
                if (!(!this.parent || eG(this.parent.latestValues) || eq(this.parent.latestValues)))
                    if (this.parent.isProjecting())
                        return this.parent;
                    else
                        return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            calcProjection() {
                var t;
                let e = this.getLead()
                  , i = !!this.resumingFrom || this !== e
                  , s = !0;
                if ((this.isProjectionDirty || (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) && (s = !1),
                i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1),
                this.resolvedRelativeTargetAt === A.frameData.timestamp && (s = !1),
                s)
                    return;
                let {layout: r, layoutId: n} = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(r || n))
                    return;
                iV(this.layoutCorrected, this.layout.layoutBox);
                let o = this.treeScale.x
                  , a = this.treeScale.y;
                !function(t, e, i, s=!1) {
                    let r, n, o = i.length;
                    if (o) {
                        e.x = e.y = 1;
                        for (let a = 0; a < o; a++) {
                            n = (r = i[a]).projectionDelta;
                            let {visualElement: o} = r.options;
                            (!o || !o.props.style || "contents" !== o.props.style.display) && (s && r.options.layoutScroll && r.scroll && r !== r.root && e0(t, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }),
                            n && (e.x *= n.x.scale,
                            e.y *= n.y.scale,
                            e_(t, n)),
                            s && eX(r.latestValues) && e0(t, r.latestValues))
                        }
                        e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                        e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                    }
                }(this.layoutCorrected, this.treeScale, this.path, i),
                e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                e.targetWithTransforms = eW());
                let {target: l} = e;
                if (!l) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(),
                    this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (iE(this.prevProjectionDelta.x, this.projectionDelta.x),
                iE(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                eD(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                this.treeScale.x === o && this.treeScale.y === a && i$(this.projectionDelta.x, this.prevProjectionDelta.x) && i$(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
                iH && iz.recalculatedProjection++
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(t=!0) {
                var e;
                if (null == (e = this.options.visualElement) || e.scheduleRender(),
                t) {
                    let t = this.getStack();
                    t && t.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = eN(),
                this.projectionDelta = eN(),
                this.projectionDeltaWithTransform = eN()
            }
            setAnimationOrigin(t, e=!1) {
                let i, s = this.snapshot, r = s ? s.latestValues : {}, n = {
                    ...this.latestValues
                }, o = eN();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !e;
                let a = eW()
                  , l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0)
                  , u = this.getStack()
                  , h = !u || u.members.length <= 1
                  , c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(se));
                this.animationProgress = 0,
                this.mixTargetDelta = e => {
                    let s = e / 1e3;
                    if (i8(o.x, t.x, s),
                    i8(o.y, t.y, s),
                    this.setTargetDelta(o),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var u, d, p, m, f, g;
                        eF(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        p = this.relativeTarget,
                        m = this.relativeTargetOrigin,
                        f = a,
                        g = s,
                        st(p.x, m.x, f.x, g),
                        st(p.y, m.y, f.y, g),
                        i && (u = this.relativeTarget,
                        d = i,
                        iO(u.x, d.x) && iO(u.y, d.y)) && (this.isProjectionDirty = !1),
                        i || (i = eW()),
                        iV(i, this.relativeTarget)
                    }
                    l && (this.animationValues = n,
                    function(t, e, i, s, r, n) {
                        r ? (t.opacity = (0,
                        eV.mixNumber)(0, void 0 !== i.opacity ? i.opacity : 1, iS(s)),
                        t.opacityExit = (0,
                        eV.mixNumber)(void 0 !== e.opacity ? e.opacity : 1, 0, iA(s))) : n && (t.opacity = (0,
                        eV.mixNumber)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                        for (let r = 0; r < iT; r++) {
                            let n = `border${ix[r]}Radius`
                              , o = iw(e, n)
                              , a = iw(i, n);
                            (void 0 !== o || void 0 !== a) && (o || (o = 0),
                            a || (a = 0),
                            0 === o || 0 === a || ib(o) === ib(a) ? (t[n] = Math.max((0,
                            eV.mixNumber)(iP(o), iP(a), s), 0),
                            (_.percent.test(a) || _.percent.test(o)) && (t[n] += "%")) : t[n] = a)
                        }
                        (e.rotate || i.rotate) && (t.rotate = (0,
                        eV.mixNumber)(e.rotate || 0, i.rotate || 0, s))
                    }(n, r, this.latestValues, s, c, h)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = s
                }
                ,
                this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && ((0,
                A.cancelFrame)(this.pendingAnimation),
                this.pendingAnimation = void 0),
                this.pendingAnimation = A.frame.update( () => {
                    var e;
                    let i;
                    is.hasAnimatedSinceResize = !0,
                    this.currentAnimation = (e = {
                        ...t,
                        onUpdate: e => {
                            this.mixTargetDelta(e),
                            t.onUpdate && t.onUpdate(e)
                        }
                        ,
                        onComplete: () => {
                            t.onComplete && t.onComplete(),
                            this.completeAnimation()
                        }
                    },
                    (i = x(0) ? 0 : (0,
                    y.motionValue)(0)).start(er("", i, 1e3, e)),
                    i.animation),
                    this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                    this.pendingAnimation = void 0
                }
                )
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
                let t = this.getStack();
                t && t.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                this.currentAnimation.stop()),
                this.completeAnimation()
            }
            applyTransformsToTarget() {
                let t = this.getLead()
                  , {targetWithTransforms: e, target: i, layout: s, latestValues: r} = t;
                if (e && i && s) {
                    if (this !== t && this.layout && s && so(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                        i = this.target || eW();
                        let e = eE(this.layout.layoutBox.x);
                        i.x.min = t.target.x.min,
                        i.x.max = i.x.min + e;
                        let s = eE(this.layout.layoutBox.y);
                        i.y.min = t.target.y.min,
                        i.y.max = i.y.min + s
                    }
                    iV(e, i),
                    e0(e, r),
                    eD(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new iW),
                this.sharedNodes.get(t).add(e);
                let i = e.options.initialPromotionConfig;
                e.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                })
            }
            isLead() {
                let t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                var t;
                let {layoutId: e} = this.options;
                return e && (null == (t = this.getStack()) ? void 0 : t.lead) || this
            }
            getPrevLead() {
                var t;
                let {layoutId: e} = this.options;
                return e ? null == (t = this.getStack()) ? void 0 : t.prevLead : void 0
            }
            getStack() {
                let {layoutId: t} = this.options;
                if (t)
                    return this.root.sharedNodes.get(t)
            }
            promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                let s = this.getStack();
                s && s.promote(this, i),
                t && (this.projectionDelta = void 0,
                this.needsReset = !0),
                e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                let t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetSkewAndRotation() {
                let {visualElement: t} = this.options;
                if (!t)
                    return;
                let e = !1
                  , {latestValues: i} = t;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                !e)
                    return;
                let s = {};
                i.z && iq("z", t, s, this.animationValues);
                for (let e = 0; e < iY.length; e++)
                    iq(`rotate${iY[e]}`, t, s, this.animationValues),
                    iq(`skew${iY[e]}`, t, s, this.animationValues);
                for (let e in t.render(),
                s)
                    t.setStaticValue(e, s[e]),
                    this.animationValues && (this.animationValues[e] = s[e]);
                t.scheduleRender()
            }
            getProjectionStyles(t) {
                var e, i;
                if (!this.instance || this.isSVG)
                    return;
                if (!this.isVisible)
                    return iG;
                let s = {
                    visibility: ""
                }
                  , r = this.getTransformTemplate();
                if (this.needsReset)
                    return this.needsReset = !1,
                    s.opacity = "",
                    s.pointerEvents = iy(null == t ? void 0 : t.pointerEvents) || "",
                    s.transform = r ? r(this.latestValues, "") : "none",
                    s;
                let n = this.getLead();
                if (!this.projectionDelta || !this.layout || !n.target) {
                    let e = {};
                    return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                    e.pointerEvents = iy(null == t ? void 0 : t.pointerEvents) || ""),
                    this.hasProjected && !eX(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                    this.hasProjected = !1),
                    e
                }
                let o = n.animationValues || n.latestValues;
                this.applyTransformsToTarget(),
                s.transform = function(t, e, i) {
                    let s = ""
                      , r = t.x.translate / e.x
                      , n = t.y.translate / e.y
                      , o = (null == i ? void 0 : i.z) || 0;
                    if ((r || n || o) && (s = `translate3d(${r}px, ${n}px, ${o}px) `),
                    (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                    i) {
                        let {transformPerspective: t, rotate: e, rotateX: r, rotateY: n, skewX: o, skewY: a} = i;
                        t && (s = `perspective(${t}px) ${s}`),
                        e && (s += `rotate(${e}deg) `),
                        r && (s += `rotateX(${r}deg) `),
                        n && (s += `rotateY(${n}deg) `),
                        o && (s += `skewX(${o}deg) `),
                        a && (s += `skewY(${a}deg) `)
                    }
                    let a = t.x.scale * e.x
                      , l = t.y.scale * e.y;
                    return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                    s || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, o),
                r && (s.transform = r(o, s.transform));
                let {x: a, y: l} = this.projectionDelta;
                for (let t in s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                n.animationValues ? s.opacity = n === this ? null != (i = null != (e = o.opacity) ? e : this.latestValues.opacity) ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : s.opacity = n === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                ia) {
                    if (void 0 === o[t])
                        continue;
                    let {correct: e, applyTo: i} = ia[t]
                      , r = "none" === s.transform ? o[t] : e(o[t], n);
                    if (i) {
                        let t = i.length;
                        for (let e = 0; e < t; e++)
                            s[i[e]] = r
                    } else
                        s[t] = r
                }
                return this.options.layoutId && (s.pointerEvents = n === this ? iy(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                s
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => {
                    var e;
                    return null == (e = t.currentAnimation) ? void 0 : e.stop()
                }
                ),
                this.root.nodes.forEach(i1),
                this.root.sharedNodes.clear()
            }
        }
    }
    function iZ(t) {
        t.updateLayout()
    }
    function i_(t) {
        var e;
        let i = (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
            let {layoutBox: e, measuredBox: s} = t.layout
              , {animationType: r} = t.options
              , n = i.source !== t.layout.source;
            "size" === r ? ez(t => {
                let s = n ? i.measuredBox[t] : i.layoutBox[t]
                  , r = eE(s);
                s.min = e[t].min,
                s.max = s.min + r
            }
            ) : so(r, i.layoutBox, e) && ez(s => {
                let r = n ? i.measuredBox[s] : i.layoutBox[s]
                  , o = eE(e[s]);
                r.max = r.min + o,
                t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                t.relativeTarget[s].max = t.relativeTarget[s].min + o)
            }
            );
            let o = eN();
            eD(o, e, i.layoutBox);
            let a = eN();
            n ? eD(a, t.applyTransform(s, !0), i.measuredBox) : eD(a, e, i.layoutBox);
            let l = !iB(o)
              , u = !1;
            if (!t.resumeFrom) {
                let s = t.getClosestProjectingParent();
                if (s && !s.resumeFrom) {
                    let {snapshot: r, layout: n} = s;
                    if (r && n) {
                        let o = eW();
                        eF(o, i.layoutBox, r.layoutBox);
                        let a = eW();
                        eF(a, e, n.layoutBox),
                        iU(o, a) || (u = !0),
                        s.options.layoutRoot && (t.relativeTarget = a,
                        t.relativeTargetOrigin = o,
                        t.relativeParent = s)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: e,
                snapshot: i,
                delta: a,
                layoutDelta: o,
                hasLayoutChanged: l,
                hasRelativeTargetChanged: u
            })
        } else if (t.isLead()) {
            let {onExitComplete: e} = t.options;
            e && e()
        }
        t.options.transition = void 0
    }
    function iJ(t) {
        iH && iz.totalNodes++,
        t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
        t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }
    function iQ(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }
    function i0(t) {
        t.clearSnapshot()
    }
    function i1(t) {
        t.clearMeasurements()
    }
    function i2(t) {
        t.isLayoutDirty = !1
    }
    function i5(t) {
        let {visualElement: e} = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
        t.resetTransform()
    }
    function i3(t) {
        t.finishAnimation(),
        t.targetDelta = t.relativeTarget = t.target = void 0,
        t.isProjectionDirty = !0
    }
    function i9(t) {
        t.resolveTargetDelta()
    }
    function i4(t) {
        t.calcProjection()
    }
    function i7(t) {
        t.resetSkewAndRotation()
    }
    function i6(t) {
        t.removeLeadSnapshot()
    }
    function i8(t, e, i) {
        t.translate = (0,
        eV.mixNumber)(e.translate, 0, i),
        t.scale = (0,
        eV.mixNumber)(e.scale, 1, i),
        t.origin = e.origin,
        t.originPoint = e.originPoint
    }
    function st(t, e, i, s) {
        t.min = (0,
        eV.mixNumber)(e.min, i.min, s),
        t.max = (0,
        eV.mixNumber)(e.max, i.max, s)
    }
    function se(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let si = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    }
      , ss = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
      , sr = ss("applewebkit/") && !ss("chrome/") ? Math.round : D.noop;
    function sn(t) {
        t.min = sr(t.min),
        t.max = sr(t.max)
    }
    function so(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(iN(e) - iN(i)))
    }
    function sa(t) {
        var e;
        return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot)
    }
    let sl = iK({
        attachResizeListener: (t, e) => ev(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    })
      , su = {
        current: void 0
    }
      , sh = iK({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!su.current) {
                let t = new sl({});
                t.mount(window),
                t.setOptions({
                    layoutScroll: !0
                }),
                su.current = t
            }
            return su.current
        }
        ,
        resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
        }
        ,
        checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
    });
    var sc = t.i(84655);
    function sd(t, e, i) {
        let {props: s} = t;
        t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let r = s["onHover" + i];
        r && A.frame.postRender( () => r(e, ey(e)))
    }
    var sp = t.i(23124);
    function sm(t, e, i) {
        let {props: s} = t;
        t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let r = s["onTap" + ("End" === i ? "" : i)];
        r && A.frame.postRender( () => r(e, ey(e)))
    }
    let sf = new WeakMap
      , sg = new WeakMap
      , sv = t => {
        let e = sf.get(t.target);
        e && e(t)
    }
      , sy = t => {
        t.forEach(sv)
    }
      , sx = {
        some: 0,
        all: 1
    }
      , sT = (0,
    e6.createContext)({
        strict: !1
    });
    var sP = t.i(97778);
    let sb = (0,
    e6.createContext)({});
    function sw(t) {
        return e(t.animate) || u.some(e => r(t[e]))
    }
    function sS(t) {
        return !!(sw(t) || t.variants)
    }
    function sA(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
    var sM = t.i(2271);
    let sC = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    }
      , sV = {};
    for (let t in sC)
        sV[t] = {
            isEnabled: e => sC[t].some(t => !!e[t])
        };
    let sE = Symbol.for("motionComponentSymbol");
    var sk = t.i(76476);
    let sD = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
    function sR(t) {
        if ("string" != typeof t || t.includes("-"))
            ;
        else if (sD.indexOf(t) > -1 || /[A-Z]/u.test(t))
            return !0;
        return !1
    }
    var sL = t.i(30142);
    let sF = t => (i, s) => {
        let r = (0,
        e6.useContext)(sb)
          , n = (0,
        e6.useContext)(e8)
          , a = () => (function({scrapeMotionValuesFromProps: t, createRenderState: i, onUpdate: s}, r, n, a) {
            let l = {
                latestValues: function(t, i, s, r) {
                    let n = {}
                      , a = r(t, {});
                    for (let t in a)
                        n[t] = iy(a[t]);
                    let {initial: l, animate: u} = t
                      , h = sw(t)
                      , c = sS(t);
                    i && c && !h && !1 !== t.inherit && (void 0 === l && (l = i.initial),
                    void 0 === u && (u = i.animate));
                    let d = !!s && !1 === s.initial
                      , p = (d = d || !1 === l) ? u : l;
                    if (p && "boolean" != typeof p && !e(p)) {
                        let e = Array.isArray(p) ? p : [p];
                        for (let i = 0; i < e.length; i++) {
                            let s = o(t, e[i]);
                            if (s) {
                                let {transitionEnd: t, transition: e, ...i} = s;
                                for (let t in i) {
                                    let e = i[t];
                                    if (Array.isArray(e)) {
                                        let t = d ? e.length - 1 : 0;
                                        e = e[t]
                                    }
                                    null !== e && (n[t] = e)
                                }
                                for (let e in t)
                                    n[e] = t[e]
                            }
                        }
                    }
                    return n
                }(r, n, a, t),
                renderState: i()
            };
            return s && (l.onMount = t => s({
                props: r,
                current: t,
                ...l
            }),
            l.onUpdate = t => s(t)),
            l
        }
        )(t, i, r, n);
        return s ? a() : (0,
        sL.useConstant)(a)
    }
      , sj = (t, e) => e && "number" == typeof t ? e.transform(t) : t
      , sB = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
      , sO = m.length;
    function sI(t, e, i) {
        let {style: s, vars: r, transformOrigin: n} = t
          , o = !1
          , a = !1;
        for (let t in e) {
            let i = e[t];
            if (f.has(t)) {
                o = !0;
                continue
            }
            if ((0,
            tx.isCSSVariableName)(t)) {
                r[t] = i;
                continue
            }
            {
                let e = sj(i, te[t]);
                t.startsWith("origin") ? (a = !0,
                n[t] = e) : s[t] = e
            }
        }
        if (!e.transform && (o || i ? s.transform = function(t, e, i) {
            let s = ""
              , r = !0;
            for (let n = 0; n < sO; n++) {
                let o = m[n]
                  , a = t[o];
                if (void 0 === a)
                    continue;
                let l = !0;
                if (!(l = "number" == typeof a ? a === +!!o.startsWith("scale") : 0 === parseFloat(a)) || i) {
                    let t = sj(a, te[o]);
                    if (!l) {
                        r = !1;
                        let e = sB[o] || o;
                        s += `${e}(${t}) `
                    }
                    i && (e[o] = t)
                }
            }
            return s = s.trim(),
            i ? s = i(e, r ? "" : s) : r && (s = "none"),
            s
        }(e, t.transform, i) : s.transform && (s.transform = "none")),
        a) {
            let {originX: t="50%", originY: e="50%", originZ: i=0} = n;
            s.transformOrigin = `${t} ${e} ${i}`
        }
    }
    let sU = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    }
      , sN = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
    function s$(t, e, i) {
        return "string" == typeof t ? t : _.px.transform(e + i * t)
    }
    function sW(t, {attrX: e, attrY: i, attrScale: s, originX: r, originY: n, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, c) {
        let d, p;
        if (sI(t, u, c),
        h) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return
        }
        t.attrs = t.style,
        t.style = {};
        let {attrs: m, style: f, dimensions: g} = t;
        m.transform && (g && (f.transform = m.transform),
        delete m.transform),
        g && (void 0 !== r || void 0 !== n || f.transform) && (d = s$(void 0 !== r ? r : .5, g.x, g.width),
        p = s$(void 0 !== n ? n : .5, g.y, g.height),
        f.transformOrigin = `${d} ${p}`),
        void 0 !== e && (m.x = e),
        void 0 !== i && (m.y = i),
        void 0 !== s && (m.scale = s),
        void 0 !== o && function(t, e, i=1, s=0, r=!0) {
            t.pathLength = 1;
            let n = r ? sU : sN;
            t[n.offset] = _.px.transform(-s);
            let o = _.px.transform(e)
              , a = _.px.transform(i);
            t[n.array] = `${o} ${a}`
        }(m, o, a, l, !1)
    }
    let sz = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    })
      , sH = () => ({
        ...sz(),
        attrs: {}
    })
      , sY = t => "string" == typeof t && "svg" === t.toLowerCase();
    function sG(t, {style: e, vars: i}, s, r) {
        for (let n in Object.assign(t.style, e, r && r.getProjectionStyles(s)),
        i)
            t.style.setProperty(n, i[n])
    }
    let sX = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    function sq(t, e, i, s) {
        for (let i in sG(t, e, void 0, s),
        e.attrs)
            t.setAttribute(sX.has(i) ? i : P(i), e.attrs[i])
    }
    function sK(t, {layout: e, layoutId: i}) {
        return f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!ia[t] || "opacity" === t)
    }
    function sZ(t, e, i) {
        var s;
        let {style: r} = t
          , n = {};
        for (let o in r)
            (x(r[o]) || e.style && x(e.style[o]) || sK(o, t) || (null == (s = null == i ? void 0 : i.getValue(o)) ? void 0 : s.liveStyle) !== void 0) && (n[o] = r[o]);
        return n
    }
    function s_(t, e, i) {
        let s = sZ(t, e, i);
        for (let i in t)
            (x(t[i]) || x(e[i])) && (s[-1 !== m.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
        return s
    }
    let sJ = ["x", "y", "width", "height", "cx", "cy", "r"]
      , sQ = {
        useVisualState: sF({
            scrapeMotionValuesFromProps: s_,
            createRenderState: sH,
            onUpdate: ({props: t, prevProps: e, current: i, renderState: s, latestValues: r}) => {
                if (!i)
                    return;
                let n = !!t.drag;
                if (!n) {
                    for (let t in r)
                        if (f.has(t)) {
                            n = !0;
                            break
                        }
                }
                if (!n)
                    return;
                let o = !e;
                if (e)
                    for (let i = 0; i < sJ.length; i++) {
                        let s = sJ[i];
                        t[s] !== e[s] && (o = !0)
                    }
                o && A.frame.read( () => {
                    try {
                        s.dimensions = "function" == typeof i.getBBox ? i.getBBox() : i.getBoundingClientRect()
                    } catch (t) {
                        s.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    A.frame.render( () => {
                        sW(s, r, sY(i.tagName), t.transformTemplate),
                        sq(i, s)
                    }
                    )
                }
                )
            }
        })
    }
      , s0 = {
        useVisualState: sF({
            scrapeMotionValuesFromProps: sZ,
            createRenderState: sz
        })
    };
    function s1(t, e, i) {
        for (let s in e)
            x(e[s]) || sK(s, i) || (t[s] = e[s])
    }
    let s2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
    function s5(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || s2.has(t)
    }
    let s3 = t => !s5(t);
    try {
        (h = t.r(70606).default) && (s3 = t => t.startsWith("on") ? !s5(t) : h(t))
    } catch (t) {}
    let s9 = {
        current: null
    }
      , s4 = {
        current: !1
    }
      , s7 = [...tb, K.color, z.complex]
      , s6 = new WeakMap
      , s8 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class rt {
        scrapeMotionValuesFromProps(t, e, i) {
            return {}
        }
        constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: r, visualState: n}, o={}) {
            this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.KeyframeResolver = tv,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                let t = tA.time.now();
                this.renderScheduledAt < t && (this.renderScheduledAt = t,
                A.frame.render(this.render, !1, !0))
            }
            ;
            const {latestValues: a, renderState: l, onUpdate: u} = n;
            this.onUpdate = u,
            this.latestValues = a,
            this.baseTarget = {
                ...a
            },
            this.initialValues = e.initial ? {
                ...a
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = e,
            this.presenceContext = i,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = s,
            this.options = o,
            this.blockInitialAnimation = !!r,
            this.isControllingVariants = sw(e),
            this.isVariantNode = sS(e),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
            const {willChange: h, ...c} = this.scrapeMotionValuesFromProps(e, {}, this);
            for (const t in c) {
                const e = c[t];
                void 0 !== a[t] && x(e) && e.set(a[t], !1)
            }
        }
        mount(t) {
            this.current = t,
            s6.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
            s4.current || function() {
                if (s4.current = !0,
                sM.isBrowser)
                    if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)")
                          , e = () => s9.current = t.matches;
                        t.addListener(e),
                        e()
                    } else
                        s9.current = !1
            }(),
            this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || s9.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
        }
        unmount() {
            for (let t in s6.delete(this.current),
            this.projection && this.projection.unmount(),
            (0,
            A.cancelFrame)(this.notifyUpdate),
            (0,
            A.cancelFrame)(this.render),
            this.valueSubscriptions.forEach(t => t()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this),
            this.events)
                this.events[t].clear();
            for (let t in this.features) {
                let e = this.features[t];
                e && (e.unmount(),
                e.isMounted = !1)
            }
            this.current = null
        }
        bindToMotionValue(t, e) {
            let i;
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            let s = f.has(t)
              , r = e.on("change", e => {
                this.latestValues[t] = e,
                this.props.onUpdate && A.frame.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0)
            }
            )
              , n = e.on("renderRequest", this.scheduleRender);
            window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
                r(),
                n(),
                i && i(),
                e.owner && e.stop()
            }
            )
        }
        sortNodePosition(t) {
            return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
            let t = "animation";
            for (t in sV) {
                let e = sV[t];
                if (!e)
                    continue;
                let {isEnabled: i, Feature: s} = e;
                if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)),
                this.features[t]) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : eW()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = e;
            for (let e = 0; e < s8.length; e++) {
                let i = s8[e];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
                let s = t["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = function(t, e, i) {
                for (let s in e) {
                    let r = e[s]
                      , n = i[s];
                    if (x(r))
                        t.addValue(s, r);
                    else if (x(n))
                        t.addValue(s, (0,
                        y.motionValue)(r, {
                            owner: t
                        }));
                    else if (n !== r)
                        if (t.hasValue(s)) {
                            let e = t.getValue(s);
                            !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                        } else {
                            let e = t.getStaticValue(s);
                            t.addValue(s, (0,
                            y.motionValue)(void 0 !== e ? e : r, {
                                owner: t
                            }))
                        }
                }
                for (let s in i)
                    void 0 === e[s] && t.removeValue(s);
                return e
            }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this)
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e)
                return e.variantChildren && e.variantChildren.add(t),
                () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
            let i = this.values.get(t);
            e !== i && (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            this.latestValues[t] = e.get())
        }
        removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t])
                return this.props.values[t];
            let i = this.values.get(t);
            return void 0 === i && void 0 !== e && (i = (0,
            y.motionValue)(null === e ? void 0 : e, {
                owner: this
            }),
            this.addValue(t, i)),
            i
        }
        readValue(t, e) {
            var i;
            let s = void 0 === this.latestValues[t] && this.current ? null != (i = this.getBaseTargetFromProps(this.props, t)) ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
            if (null != s) {
                let i, r;
                if ("string" == typeof s && (i = s,
                /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i) || (r = s,
                /^0[^.\s]+$/u.test(r))))
                    s = parseFloat(s);
                else {
                    let i;
                    i = s,
                    !s7.find(tP(i)) && z.complex.test(e) && (s = tr(t, e))
                }
                this.setBaseTarget(t, x(s) ? s.get() : s)
            }
            return x(s) ? s.get() : s
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            var e;
            let i, {initial: s} = this.props;
            if ("string" == typeof s || "object" == typeof s) {
                let r = o(this.props, s, null == (e = this.presenceContext) ? void 0 : e.custom);
                r && (i = r[t])
            }
            if (s && void 0 !== i)
                return i;
            let r = this.getBaseTargetFromProps(this.props, t);
            return void 0 === r || x(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new iv.SubscriptionManager),
            this.events[t].add(e)
        }
        notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e)
        }
    }
    class re extends rt {
        constructor() {
            super(...arguments),
            this.KeyframeResolver = tS
        }
        sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0
        }
        removeValueFromRenderState(t, {vars: e, style: i}) {
            delete e[t],
            delete i[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
            let {children: t} = this.props;
            x(t) && (this.childSubscription = t.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }
            ))
        }
    }
    class ri extends re {
        constructor() {
            super(...arguments),
            this.type = "html",
            this.renderInstance = sG
        }
        readValueFromInstance(t, e) {
            if (f.has(e)) {
                let t = ts(e);
                return t && t.default || 0
            }
            {
                let i = window.getComputedStyle(t)
                  , s = ((0,
                tx.isCSSVariableName)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                return "string" == typeof s ? s.trim() : s
            }
        }
        measureInstanceViewportBox(t, {transformPagePoint: e}) {
            return e1(t, e)
        }
        build(t, e, i) {
            sI(t, e, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return sZ(t, e, i)
        }
    }
    class rs extends re {
        constructor() {
            super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = eW
        }
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, e) {
            if (f.has(e)) {
                let t = ts(e);
                return t && t.default || 0
            }
            return e = sX.has(e) ? e : P(e),
            t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return s_(t, e, i)
        }
        build(t, e, i) {
            sW(t, e, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(t, e, i, s) {
            sq(t, e, i, s)
        }
        mount(t) {
            this.isSVGTag = sY(t.tagName),
            super.mount(t)
        }
    }
    let rr = function(t) {
        if ("u" < typeof Proxy)
            return t;
        let e = new Map;
        return new Proxy( (...e) => t(...e),{
            get: (i, s) => "create" === s ? t : (e.has(s) || e.set(s, t(s)),
            e.get(s))
        })
    }((c = {
        animation: {
            Feature: class extends ep {
                constructor(t) {
                    super(t),
                    t.animationState || (t.animationState = function(t) {
                        let n = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                            let s;
                            if (t.notify("AnimationStart", e),
                            Array.isArray(e))
                                s = Promise.all(e.map(e => eo(t, e, i)));
                            else if ("string" == typeof e)
                                s = eo(t, e, i);
                            else {
                                let r = "function" == typeof e ? a(t, e, i.custom) : e;
                                s = Promise.all(en(t, r, i))
                            }
                            return s.then( () => {
                                t.notify("AnimationComplete", e)
                            }
                            )
                        }
                        )(t, e, i)))
                          , o = ed()
                          , l = !0
                          , h = e => (i, s) => {
                            var r;
                            let n = a(t, s, "exit" === e ? null == (r = t.presenceContext) ? void 0 : r.custom : void 0);
                            if (n) {
                                let {transition: t, transitionEnd: e, ...s} = n;
                                i = {
                                    ...i,
                                    ...s,
                                    ...e
                                }
                            }
                            return i
                        }
                        ;
                        function c(a) {
                            let {props: c} = t
                              , d = function t(e) {
                                if (!e)
                                    return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                    i
                                }
                                let i = {};
                                for (let t = 0; t < el; t++) {
                                    let s = u[t]
                                      , n = e.props[s];
                                    (r(n) || !1 === n) && (i[s] = n)
                                }
                                return i
                            }(t.parent) || {}
                              , p = []
                              , m = new Set
                              , f = {}
                              , g = 1 / 0;
                            for (let n = 0; n < eh; n++) {
                                var v, y;
                                let u = eu[n]
                                  , x = o[u]
                                  , T = void 0 !== c[u] ? c[u] : d[u]
                                  , P = r(T)
                                  , b = u === a ? x.isActive : null;
                                !1 === b && (g = n);
                                let w = T === d[u] && T !== c[u] && P;
                                if (w && l && t.manuallyAnimateOnMount && (w = !1),
                                x.protectedKeys = {
                                    ...f
                                },
                                !x.isActive && null === b || !T && !x.prevProp || e(T) || "boolean" == typeof T)
                                    continue;
                                let S = (v = x.prevProp,
                                "string" == typeof (y = T) ? y !== v : !!Array.isArray(y) && !s(y, v))
                                  , A = S || u === a && x.isActive && !w && P || n > g && P
                                  , M = !1
                                  , C = Array.isArray(T) ? T : [T]
                                  , V = C.reduce(h(u), {});
                                !1 === b && (V = {});
                                let {prevResolvedValues: E={}} = x
                                  , k = {
                                    ...E,
                                    ...V
                                }
                                  , D = e => {
                                    A = !0,
                                    m.has(e) && (M = !0,
                                    m.delete(e)),
                                    x.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                }
                                ;
                                for (let t in k) {
                                    let e = V[t]
                                      , r = E[t];
                                    if (!f.hasOwnProperty(t))
                                        (i(e) && i(r) ? s(e, r) : e === r) ? void 0 !== e && m.has(t) ? D(t) : x.protectedKeys[t] = !0 : null != e ? D(t) : m.add(t)
                                }
                                x.prevProp = T,
                                x.prevResolvedValues = V,
                                x.isActive && (f = {
                                    ...f,
                                    ...V
                                }),
                                l && t.blockInitialAnimation && (A = !1);
                                let R = !(w && S) || M;
                                A && R && p.push(...C.map(t => ({
                                    animation: t,
                                    options: {
                                        type: u
                                    }
                                })))
                            }
                            if (m.size) {
                                let e = {};
                                m.forEach(i => {
                                    let s = t.getBaseTarget(i)
                                      , r = t.getValue(i);
                                    r && (r.liveStyle = !0),
                                    e[i] = null != s ? s : null
                                }
                                ),
                                p.push({
                                    animation: e
                                })
                            }
                            let x = !!p.length;
                            return l && (!1 === c.initial || c.initial === c.animate) && !t.manuallyAnimateOnMount && (x = !1),
                            l = !1,
                            x ? n(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: c,
                            setActive: function(e, i) {
                                var s;
                                if (o[e].isActive === i)
                                    return Promise.resolve();
                                null == (s = t.variantChildren) || s.forEach(t => {
                                    var s;
                                    return null == (s = t.animationState) ? void 0 : s.setActive(e, i)
                                }
                                ),
                                o[e].isActive = i;
                                let r = c(e);
                                for (let t in o)
                                    o[t].protectedKeys = {};
                                return r
                            },
                            setAnimateFunction: function(e) {
                                n = e(t)
                            },
                            getState: () => o,
                            reset: () => {
                                o = ed(),
                                l = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {animate: t} = this.node.getProps();
                    e(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {animate: t} = this.node.getProps()
                      , {animate: e} = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(),
                    null == (t = this.unmountControls) || t.call(this)
                }
            }
        },
        exit: {
            Feature: class extends ep {
                constructor() {
                    super(...arguments),
                    this.id = em++
                }
                update() {
                    if (!this.node.presenceContext)
                        return;
                    let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                      , {isPresent: i} = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i)
                        return;
                    let s = this.node.animationState.setActive("exit", !t);
                    e && !t && s.then( () => e(this.id))
                }
                mount() {
                    let {register: t} = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
        },
        inView: {
            Feature: class extends ep {
                constructor() {
                    super(...arguments),
                    this.hasEnteredView = !1,
                    this.isInView = !1
                }
                startObserver() {
                    var t;
                    let e;
                    this.unmount();
                    let {viewport: i={}} = this.node.getProps()
                      , {root: s, margin: r, amount: n="some", once: o} = i
                      , a = {
                        root: s ? s.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof n ? n : sx[n]
                    }
                      , l = t => {
                        let {isIntersecting: e} = t;
                        if (this.isInView === e || (this.isInView = e,
                        o && !e && this.hasEnteredView))
                            return;
                        e && (this.hasEnteredView = !0),
                        this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {onViewportEnter: i, onViewportLeave: s} = this.node.getProps()
                          , r = e ? i : s;
                        r && r(t)
                    }
                    ;
                    return t = this.node.current,
                    e = function({root: t, ...e}) {
                        let i = t || document;
                        sg.has(i) || sg.set(i, {});
                        let s = sg.get(i)
                          , r = JSON.stringify(e);
                        return s[r] || (s[r] = new IntersectionObserver(sy,{
                            root: t,
                            ...e
                        })),
                        s[r]
                    }(a),
                    sf.set(t, l),
                    e.observe(t),
                    () => {
                        sf.delete(t),
                        e.unobserve(t)
                    }
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("u" < typeof IntersectionObserver)
                        return;
                    let {props: t, prevProps: e} = this.node;
                    ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
        },
        tap: {
            Feature: class extends ep {
                mount() {
                    let {current: t} = this.node;
                    t && (this.unmount = (0,
                    sp.press)(t, t => (sm(this.node, t, "Start"),
                    (t, {success: e}) => sm(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
        },
        focus: {
            Feature: class extends ep {
                constructor() {
                    super(...arguments),
                    this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                    this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                    this.isActive = !1)
                }
                mount() {
                    this.unmount = (0,
                    tL.pipe)(ev(this.node.current, "focus", () => this.onFocus()), ev(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
        },
        hover: {
            Feature: class extends ep {
                mount() {
                    let {current: t} = this.node;
                    t && (this.unmount = (0,
                    sc.hover)(t, t => (sd(this.node, t, "Start"),
                    t => sd(this.node, t, "End"))))
                }
                unmount() {}
            }
        },
        pan: {
            Feature: class extends ep {
                constructor() {
                    super(...arguments),
                    this.removePointerDownListener = D.noop
                }
                onPointerDown(t) {
                    this.session = new eP(t,this.createPanHandlers(),{
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: e2(this.node)
                    })
                }
                createPanHandlers() {
                    let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: s} = this.node.getProps();
                    return {
                        onSessionStart: e4(t),
                        onStart: e4(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session,
                            s && A.frame.postRender( () => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = ex(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(),
                    this.session && this.session.end()
                }
            }
        },
        drag: {
            Feature: class extends ep {
                constructor(t) {
                    super(t),
                    this.removeGroupControls = D.noop,
                    this.removeListeners = D.noop,
                    this.controls = new e3(t)
                }
                mount() {
                    let {dragControls: t} = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)),
                    this.removeListeners = this.controls.addListeners() || D.noop
                }
                unmount() {
                    this.removeGroupControls(),
                    this.removeListeners()
                }
            }
            ,
            ProjectionNode: sh,
            MeasureLayout: ic
        },
        layout: {
            ProjectionNode: sh,
            MeasureLayout: ic
        }
    },
    d = (t, e) => sR(t) ? new rs(e) : new ri(e,{
        allowProjection: t !== e6.Fragment
    }),
    function(t, {forwardMotionProps: e}={
        forwardMotionProps: !1
    }) {
        return function({preloadedFeatures: t, createVisualElement: e, useRender: i, useVisualState: s, Component: n}) {
            var o, a;
            function l(t, o) {
                var a;
                let l, u = {
                    ...(0,
                    e6.useContext)(sP.MotionConfigContext),
                    ...t,
                    layoutId: function({layoutId: t}) {
                        let e = (0,
                        e6.useContext)(ie).id;
                        return e && void 0 !== t ? e + "-" + t : t
                    }(t)
                }, {isStatic: h} = u, c = function(t) {
                    let {initial: e, animate: i} = function(t, e) {
                        if (sw(t)) {
                            let {initial: e, animate: i} = t;
                            return {
                                initial: !1 === e || r(e) ? e : void 0,
                                animate: r(i) ? i : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0,
                    e6.useContext)(sb));
                    return (0,
                    e6.useMemo)( () => ({
                        initial: e,
                        animate: i
                    }), [sA(e), sA(i)])
                }(t), d = s(t, h);
                if (!h && sM.isBrowser) {
                    (0,
                    e6.useContext)(sT).strict;
                    let t = function(t) {
                        let {drag: e, layout: i} = sV;
                        if (!e && !i)
                            return {};
                        let s = {
                            ...e,
                            ...i
                        };
                        return {
                            MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? s.MeasureLayout : void 0,
                            ProjectionNode: s.ProjectionNode
                        }
                    }(u);
                    l = t.MeasureLayout,
                    c.visualElement = function(t, e, i, s, r) {
                        var n, o;
                        let {visualElement: a} = (0,
                        e6.useContext)(sb)
                          , l = (0,
                        e6.useContext)(sT)
                          , u = (0,
                        e6.useContext)(e8)
                          , h = (0,
                        e6.useContext)(sP.MotionConfigContext).reducedMotion
                          , c = (0,
                        e6.useRef)(null);
                        s = s || l.renderer,
                        !c.current && s && (c.current = s(t, {
                            visualState: e,
                            parent: a,
                            props: i,
                            presenceContext: u,
                            blockInitialAnimation: !!u && !1 === u.initial,
                            reducedMotionConfig: h
                        }));
                        let d = c.current
                          , p = (0,
                        e6.useContext)(ii);
                        d && !d.projection && r && ("html" === d.type || "svg" === d.type) && function(t, e, i, s) {
                            let {layoutId: r, layout: n, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                            t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                if (e)
                                    return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                            }(t.parent)),
                            t.projection.setOptions({
                                layoutId: r,
                                layout: n,
                                alwaysMeasureLayout: !!o || a && eM(a),
                                visualElement: t,
                                animationType: "string" == typeof n ? n : "both",
                                initialPromotionConfig: s,
                                layoutScroll: l,
                                layoutRoot: u
                            })
                        }(c.current, i, r, p);
                        let m = (0,
                        e6.useRef)(!1);
                        (0,
                        e6.useInsertionEffect)( () => {
                            d && m.current && d.update(i, u)
                        }
                        );
                        let f = i[b]
                          , g = (0,
                        e6.useRef)(!!f && !(null == (n = window.MotionHandoffIsComplete) ? void 0 : n.call(window, f)) && (null == (o = window.MotionHasOptimisedAnimation) ? void 0 : o.call(window, f)));
                        return (0,
                        sk.useIsomorphicLayoutEffect)( () => {
                            d && (m.current = !0,
                            window.MotionIsMounted = !0,
                            d.updateFeatures(),
                            il.render(d.render),
                            g.current && d.animationState && d.animationState.animateChanges())
                        }
                        ),
                        (0,
                        e6.useEffect)( () => {
                            d && (!g.current && d.animationState && d.animationState.animateChanges(),
                            g.current && (queueMicrotask( () => {
                                var t;
                                null == (t = window.MotionHandoffMarkAsComplete) || t.call(window, f)
                            }
                            ),
                            g.current = !1))
                        }
                        ),
                        d
                    }(n, d, u, e, t.ProjectionNode)
                }
                return (0,
                e7.jsxs)(sb.Provider, {
                    value: c,
                    children: [l && c.visualElement ? (0,
                    e7.jsx)(l, {
                        visualElement: c.visualElement,
                        ...u
                    }) : null, i(n, t, (a = c.visualElement,
                    (0,
                    e6.useCallback)(t => {
                        t && d.onMount && d.onMount(t),
                        a && (t ? a.mount(t) : a.unmount()),
                        o && ("function" == typeof o ? o(t) : eM(o) && (o.current = t))
                    }
                    , [a])), d, h, c.visualElement)]
                })
            }
            t && function(t) {
                for (let e in t)
                    sV[e] = {
                        ...sV[e],
                        ...t[e]
                    }
            }(t),
            l.displayName = `motion.${"string" == typeof n ? n : `create(${null != (a = null != (o = n.displayName) ? o : n.name) ? a : ""})`}`;
            let u = (0,
            e6.forwardRef)(l);
            return u[sE] = n,
            u
        }({
            ...sR(t) ? sQ : s0,
            preloadedFeatures: c,
            useRender: function(t=!1) {
                return (e, i, s, {latestValues: r}, n) => {
                    let o = (sR(e) ? function(t, e, i, s) {
                        let r = (0,
                        e6.useMemo)( () => {
                            let i = sH();
                            return sW(i, e, sY(s), t.transformTemplate),
                            {
                                ...i.attrs,
                                style: {
                                    ...i.style
                                }
                            }
                        }
                        , [e]);
                        if (t.style) {
                            let e = {};
                            s1(e, t.style, t),
                            r.style = {
                                ...e,
                                ...r.style
                            }
                        }
                        return r
                    }
                    : function(t, e) {
                        let i, s, r = {}, n = (i = t.style || {},
                        s1(s = {}, i, t),
                        Object.assign(s, function({transformTemplate: t}, e) {
                            return (0,
                            e6.useMemo)( () => {
                                let i = sz();
                                return sI(i, e, t),
                                Object.assign({}, i.vars, i.style)
                            }
                            , [e])
                        }(t, e)),
                        s);
                        return t.drag && !1 !== t.dragListener && (r.draggable = !1,
                        n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                        n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                        void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
                        r.style = n,
                        r
                    }
                    )(i, r, n, e)
                      , a = function(t, e, i) {
                        let s = {};
                        for (let r in t)
                            ("values" !== r || "object" != typeof t.values) && (s3(r) || !0 === i && s5(r) || !e && !s5(r) || t.draggable && r.startsWith("onDrag")) && (s[r] = t[r]);
                        return s
                    }(i, "string" == typeof e, t)
                      , l = e !== e6.Fragment ? {
                        ...a,
                        ...o,
                        ref: s
                    } : {}
                      , {children: u} = i
                      , h = (0,
                    e6.useMemo)( () => x(u) ? u.get() : u, [u]);
                    return (0,
                    e6.createElement)(e, {
                        ...l,
                        children: h
                    })
                }
            }(e),
            createVisualElement: d,
            Component: t
        })
    }
    ));
    t.s(["motion", () => rr], 76141)
}
, 79527, t => {
    "use strict";
    t.i(39069);
    var e = t.i(86404)
      , i = t.i(26382)
      , s = t.i(12632)
      , r = t.i(30142)
      , n = t.i(80271)
      , o = i
      , a = t.i(97778);
    class l extends o.Component {
        getSnapshotBeforeUpdate(t) {
            let e = this.props.childRef.current;
            if (e && t.isPresent && !this.props.isPresent) {
                let t = this.props.sizeRef.current;
                t.height = e.offsetHeight || 0,
                t.width = e.offsetWidth || 0,
                t.top = e.offsetTop,
                t.left = e.offsetLeft
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }
    function u({children: t, isPresent: i}) {
        let s = (0,
        o.useId)()
          , r = (0,
        o.useRef)(null)
          , n = (0,
        o.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        })
          , {nonce: u} = (0,
        o.useContext)(a.MotionConfigContext);
        return (0,
        o.useInsertionEffect)( () => {
            let {width: t, height: e, top: o, left: a} = n.current;
            if (i || !r.current || !t || !e)
                return;
            r.current.dataset.motionPopId = s;
            let l = document.createElement("style");
            return u && (l.nonce = u),
            document.head.appendChild(l),
            l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
            () => {
                document.head.removeChild(l)
            }
        }
        , [i]),
        (0,
        e.jsx)(l, {
            isPresent: i,
            childRef: r,
            sizeRef: n,
            children: o.cloneElement(t, {
                ref: r
            })
        })
    }
    let h = ({children: t, initial: s, isPresent: o, onExitComplete: a, custom: l, presenceAffectsLayout: h, mode: d}) => {
        let p = (0,
        r.useConstant)(c)
          , m = (0,
        i.useId)()
          , f = (0,
        i.useCallback)(t => {
            for (let e of (p.set(t, !0),
            p.values()))
                if (!e)
                    return;
            a && a()
        }
        , [p, a])
          , g = (0,
        i.useMemo)( () => ({
            id: m,
            initial: s,
            isPresent: o,
            custom: l,
            onExitComplete: f,
            register: t => (p.set(t, !1),
            () => p.delete(t))
        }), h ? [Math.random(), f] : [o, f]);
        return (0,
        i.useMemo)( () => {
            p.forEach( (t, e) => p.set(e, !1))
        }
        , [o]),
        i.useEffect( () => {
            o || p.size || !a || a()
        }
        , [o]),
        "popLayout" === d && (t = (0,
        e.jsx)(u, {
            isPresent: o,
            children: t
        })),
        (0,
        e.jsx)(n.PresenceContext.Provider, {
            value: g,
            children: t
        })
    }
    ;
    function c() {
        return new Map
    }
    var d = t.i(54472);
    let p = t => t.key || "";
    function m(t) {
        let e = [];
        return i.Children.forEach(t, t => {
            (0,
            i.isValidElement)(t) && e.push(t)
        }
        ),
        e
    }
    var f = t.i(76476);
    let g = ({children: t, custom: n, initial: o=!0, onExitComplete: a, presenceAffectsLayout: l=!0, mode: u="sync", propagate: c=!1}) => {
        let[g,v] = (0,
        d.usePresence)(c)
          , y = (0,
        i.useMemo)( () => m(t), [t])
          , x = c && !g ? [] : y.map(p)
          , T = (0,
        i.useRef)(!0)
          , P = (0,
        i.useRef)(y)
          , b = (0,
        r.useConstant)( () => new Map)
          , [w,S] = (0,
        i.useState)(y)
          , [A,M] = (0,
        i.useState)(y);
        (0,
        f.useIsomorphicLayoutEffect)( () => {
            T.current = !1,
            P.current = y;
            for (let t = 0; t < A.length; t++) {
                let e = p(A[t]);
                x.includes(e) ? b.delete(e) : !0 !== b.get(e) && b.set(e, !1)
            }
        }
        , [A, x.length, x.join("-")]);
        let C = [];
        if (y !== w) {
            let t = [...y];
            for (let e = 0; e < A.length; e++) {
                let i = A[e]
                  , s = p(i);
                x.includes(s) || (t.splice(e, 0, i),
                C.push(i))
            }
            "wait" === u && C.length && (t = C),
            M(m(t)),
            S(y);
            return
        }
        let {forceRender: V} = (0,
        i.useContext)(s.LayoutGroupContext);
        return (0,
        e.jsx)(e.Fragment, {
            children: A.map(t => {
                let i = p(t)
                  , s = (!c || !!g) && (y === A || x.includes(i));
                return (0,
                e.jsx)(h, {
                    isPresent: s,
                    initial: (!T.current || !!o) && void 0,
                    custom: s ? void 0 : n,
                    presenceAffectsLayout: l,
                    mode: u,
                    onExitComplete: s ? void 0 : () => {
                        if (!b.has(i))
                            return;
                        b.set(i, !0);
                        let t = !0;
                        b.forEach(e => {
                            e || (t = !1)
                        }
                        ),
                        t && (null == V || V(),
                        M(P.current),
                        c && (null == v || v()),
                        a && a())
                    }
                    ,
                    children: t
                }, i)
            }
            )
        })
    }
    ;
    t.s(["AnimatePresence", () => g], 79527)
}
]);