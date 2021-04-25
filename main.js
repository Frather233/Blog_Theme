! function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t,
            "__esModule", {
            value: !0
        }
        )
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)),
            8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o,
            "default", {
            enumerable: !0,
            value: t
        }),
            2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function (e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e,
            "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 13)
}([function (t, e, n) {
    "use strict";
    var o = n(1);
    Object.defineProperty(e,
        "__esModule", {
        value: !0
    }), e.isNight = function () {
        var t = (new Date).getHours();
        return t > 19 || t <= 5
    }, e.isElementInViewport = function (t) {
        var e = t.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
    }, e.isMd = function () {
        return $("#cnblogs_post_body").hasClass("cnblogs-markdown")
    }, e.isPostDetailsPage = function () {
        return !!$("#post_detail").length
    }, e.isHomePage = function () {
        return !!$(".day").length
    }, e.isTagListPage = function () {
        return !!$("#taglist_main").length
    }, e.isEntrylistPage = function () {
        return !!$(".entrylistPosttitle").length
    }, e.isAlbumPage = function () {
        return !!$(".gallery").length
    }, e.isCategoryPage = function () {
        return !!$(".entrylistItem").length
    }, e.randomProperty = function (t) {
        var e, n = 0;
        for (var o in t) Math.random() < 1 / ++n && (e = o);
        return e
    }, e.randomImgurl = function () {
        var t = Math.floor(950 * Math.random());
        return "https://api.mz-moe.cn/img/img" + t + ".jpg"
    }, e.randomColor = function (t) {
        var e = "";
        if ("rgba" === t) {
            var n = Math.floor(256 * Math.random()),
                o = Math.floor(256 * Math.random()),
                r = Math.floor(256 * Math.random());
            e = "rgba(" + n + "," + o + "," + r + ",0.6)"
        } else if ("16" === t) e = "#" + Math.floor(16777215 * Math.random()).toString(16);
        else {
            var i = t || [
                "#FE0302",
                "#FF7204",
                "#FFAA02",
                "#FFD302",
                "#FFFF00",
                "#A0EE00",
                "#00CD00",
                "#019899",
                "#4266BE",
                "#89D5FF",
                "#CC0273",
                "#CC0273"
            ],
                a = Math.floor(Math.random() * i.length);
            e = i[a]
        }
        return e
    }, e.randomNum = function (t, e) {
        return parseInt(Math.random() * (t - e + 1) + e,
            10), Math.floor(Math.random() * (t - e + 1) + e)
    }, e.pageName = function () {
        if ($("#post_detail").length) return "post";
        if ($(".day").length) return "index";
        if ($("#taglist_main").length) return "tag";
        if ($(".entrylistPosttitle").length) return "list";
        if ($("#myposts").length) return "tag"
    }, e.userAgent = function () {
        return $(window).width() > 768 ? "pc" : "phone"
    }, e.debounce = function (t, e, n) {
        var o;
        return function () {
            var r = this,
                i = arguments,
                a = function () {
                    o = null, n || t.apply(r, i)
                },
                s = n && !o;
            clearTimeout(o), o = setTimeout(a, e), s && t.apply(r, i)
        }
    }, e.throttle = function (t, e, n) {
        var o, r = new Date;
        return function () {
            var i = this,
                a = arguments,
                s = new Date;
            clearTimeout(o), s - r >= n ? (t.apply(i, a), r = s) : o = setTimeout(t, e)
        }
    }, e.getClientRect = function (t) {
        var {
            top: e,
            bottom: n,
            left: o,
            right: r,
            height: i,
            width: a
        } = t.getBoundingClientRect();
        return {
            top: e,
            bottom: n,
            left: o,
            right: r,
            height: i || n - e,
            width: a || r - o
        }
    }, e.hasPostTitle = function () {
        return 0 !== $("#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4").length
    }, e.poll = function (t, e) {
        if (t) return e(), !0;
        var n = 1,
            o = setInterval((() => t ? (e(), clearInterval(o), !0) : 30 === n ? (clearInterval(o), !1) : void n++),
                100)
    }, e.unpass = function (t) {
        if (t) {
            var e = document.body;
            e.style.position = "";
            var n = e.style.top;
            document.body.scrollTop = document.documentElement.scrollTop = -parseInt(n), e.style.top = ""
        } else {
            var o = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.style.cssText += "position:fixed;width:100%;top:-" + o + "px;"
        }
    }, e.randomArrayElements = function (t, e) {
        void 0 === e && (e = 1);
        var n, o, r = t.slice(0),
            i = t.length,
            a = i - e;
        for (; i-- > a;) o = Math.floor((i + 1) * Math.random()), n = r[o], r[o] = r[i], r[i] = n;
        return r.slice(a)
    }, e.getData = function (t, e, n) {
        $.ajax({
            url: t,
            type: e,
            dataType: "jsonp",
            success(t) {
                n(t)
            },
            error(t) {
                console.log("error", t)
            }
        })
    }, e.getDate = function () {
        var t = new Date,
            e = t.getFullYear(),
            n = ("0" + (t.getMonth() + 1)).slice(-2),
            o = ("0" + t.getDate()).slice(-2);
        return e + "-" + n + "-" + o
    }, e.prettyLog = function (t, e) {
        void 0 === e && (e = "#ffb3cc");
        console.log("%c  " + t,
            "color: " + e + "; font-weight: bold;")
    }, e.cacheScript = function (t, e) {
        void 0 === e && (e = function () { });
        $.ajax({
            type: "GET",
            dataType: "script",
            cache: !0,
            url: t,
            success() {
                e()
            }
        })
    }, e.sleep = function (t) {
        return i.apply(this, arguments)
    }, e.addCss = function (t) {
        $("head").append("<link>"), $("head").children(":last").attr({
            rel: "stylesheet",
            type: "text/css",
            href: t
        })
    }, e.getMonth = function () {
        var t = (new Date).getMonth();
        return [
            "Jan",
            "Feb",
            "March",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
        ][t]
    }, e.getQuarter = function () {
        var t = (new Date).getMonth();
        if (t < 3) return "spring";
        if (t < 6) return "summer";
        if (t < 9) return "autumn";
        if (t < 12) return "winter"
    }, e.mousewheel = function (t, e) {
        e || (e = t);
        var n = () => {
            $(document).unbind("mousewheel DOMMouseScroll")
        };
        $(document).on("mousewheel DOMMouseScroll", (function (e) {
            var o = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            Math.max(-1, Math.min(1, o));
            t(), n()
        }))
    }, e.mergeOptions = function (t, e, n) {
        void 0 === t && (t = {});
        void 0 === e && (e = {});
        void 0 === n && (n = {});
        var o = Object.assign({}, t, n);
        return Object.assign({}, o, e)
    }, e.insertStyle = function (t) {
        var e = document.createElement("style");
        e.innerHTML = t, document.getElementsByTagName("head")[
            0
        ].appendChild(e)
    }, e.HTMLDecode = function (t) {
        return $("<textarea/>").html(t).text()
    }, e.createMutationObserve = function (t, e) {
        var n = new MutationObserver((() => {
            e().then((() => {
                n.disconnect()
            }))
        }));
        n.observe(t, {
            attributes: !0,
            childList: !0,
            subtree: !0
        })
    };
    var r = o(n(8));

    function i() {
        return (i = (0, r.default)((function* (t) {
            return new Promise((e => setTimeout(e, t)))
        }))).apply(this, arguments)
    }
}, function (t, e) {
    t.exports = function (t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e,
        "__esModule", {
        value: !0
    }), e.notationJs = e.mediaZoomJs = e.animeJs = e.clipboard = e.jqueryui = e.linenumbersjs = e.materialize = e.aplayercss = e.aplayerjs = e.live2djs = e.emojijs = e.viz = e.themeRepository = e.randomAva = e.dummyimage = e.randomImage = e.live2d = void 0;
    e.live2d = {
        url: "https://cdn.jsdelivr.net/gh/github923665892/awesCnb-live2dModels",
        version: "1.7"
    };
    e.randomImage = "https://api.mz-moe.cn/img.php";
    e.dummyimage = "https://www.dummyimage.com/50";
    e.randomAva = "https://i.pravatar.cc/125?image=3";
    e.themeRepository = "https://guangzan.gitee.io/awescnb";
    e.viz = "https://guangzan.gitee.io/imagehost/awescnb/js/rough-viz.js";
    e.emojijs = "https://guangzan.gitee.io/imagehost/awescnb/js/emoji.min.js";
    e.live2djs = "https://guangzan.gitee.io/imagehost/awescnb/js/live2d.min.js";
    e.aplayerjs = "https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js";
    e.aplayercss = "https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css";
    e.materialize = "https://cdn.bootcdn.net/ajax/libs/materialize/0.98.0/js/materialize.min.js";
    e.linenumbersjs = "https://cdn.bootcdn.net/ajax/libs/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js";
    e.jqueryui = "https://cdn.bootcdn.net/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js";
    e.clipboard = "https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js";
    e.animeJs = "https://cdn.bootcdn.net/ajax/libs/animejs/3.2.0/anime.min.js";
    e.mediaZoomJs = "https://cdn.bootcdn.net/ajax/libs/medium-zoom/1.0.6/medium-zoom.min.js";
    e.notationJs = "https://unpkg.com/rough-notation@0.4.0/lib/rough-notation.iife.js"
}, , , function (t, e, n) {
    "use strict";

    function o(t, e, n, o, r, i, a) {
        try {
            var s = t[i](a),
                u = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(o, r)
    }

    function r(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise((function (r, i) {
                var a = t.apply(e, n);

                function s(t) {
                    o(a, r, i, s, u,
                        "next", t)
                }

                function u(t) {
                    o(a, r, i, s, u,
                        "throw", t)
                }
                s(void 0)
            }))
        }
    }
    n.r(e), n.d(e,
        "default", (function () {
            return r
        }))
}, , , , , function (t, e, n) {
    "use strict";
    var o = n(0),
        r = n(5);
    $.extend({
        awesCnb: function (t) {
            void 0 === t && (t = {}), window.opts = t,
                function (t) {
                    var e = r.themeRepository + "/" + t + ".js";
                    (0, o.cacheScript)(e)
                }(function (t) {
                    var e = t.theme && t.theme.name || "reacg";
                    return "gshang" === e && (e = "bilibili"), e
                }(t))
        }
    })
}]);