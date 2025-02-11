/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var t_ = Object.create;
  var un = Object.defineProperty;
  var r_ = Object.getOwnPropertyDescriptor;
  var n_ = Object.getOwnPropertyNames;
  var i_ = Object.getPrototypeOf,
    o_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    ke = (e, t) => {
      for (var r in t) un(e, r, { get: t[r], enumerable: !0 });
    },
    qs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of n_(t))
          !o_.call(e, i) &&
            i !== r &&
            un(e, i, {
              get: () => t[i],
              enumerable: !(n = r_(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? t_(i_(e)) : {}),
      qs(
        t || !e || !e.__esModule
          ? un(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => qs(un({}, "__esModule", { value: !0 }), e);
  var qi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, T) {
        var x = new b.Bare();
        return x.init(f, T);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (T) {
          return "-" + T.toLowerCase();
        });
      }
      function n(f) {
        var T = parseInt(f.slice(1), 16),
          x = (T >> 16) & 255,
          N = (T >> 8) & 255,
          A = 255 & T;
        return [x, N, A];
      }
      function i(f, T, x) {
        return (
          "#" + ((1 << 24) | (f << 16) | (T << 8) | x).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, T) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T);
      }
      function u(f, T, x) {
        d("Units do not match [" + f + "]: " + T + ", " + x);
      }
      function s(f, T, x) {
        if ((T !== void 0 && (x = T), f === void 0)) return x;
        var N = x;
        return (
          Fe.test(f) || !Be.test(f)
            ? (N = parseInt(f, 10))
            : Be.test(f) && (N = 1e3 * parseFloat(f)),
          0 > N && (N = 0),
          N === N ? N : x
        );
      }
      function d(f) {
        oe.debug && window && window.console.warn(f);
      }
      function y(f) {
        for (var T = -1, x = f ? f.length : 0, N = []; ++T < x; ) {
          var A = f[T];
          A && N.push(A);
        }
        return N;
      }
      var v = (function (f, T, x) {
          function N(ae) {
            return typeof ae == "object";
          }
          function A(ae) {
            return typeof ae == "function";
          }
          function D() {}
          function te(ae, ge) {
            function $() {
              var Re = new se();
              return A(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function se() {}
            ge === x && ((ge = ae), (ae = Object)), ($.Bare = se);
            var ue,
              _e = (D[f] = ae[f]),
              rt = (se[f] = $[f] = new D());
            return (
              (rt.constructor = $),
              ($.mixin = function (Re) {
                return (se[f] = $[f] = te($, Re)[f]), $;
              }),
              ($.open = function (Re) {
                if (
                  ((ue = {}),
                  A(Re) ? (ue = Re.call($, rt, _e, $, ae)) : N(Re) && (ue = Re),
                  N(ue))
                )
                  for (var Tr in ue) T.call(ue, Tr) && (rt[Tr] = ue[Tr]);
                return A(rt.init) || (rt.init = ae), $;
              }),
              $.open(ge)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return (
                T +
                x * (-2.75 * D * A + 11 * A * A + -15.5 * D + 8 * A + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return T + x * (-1 * D * A + 3 * A * A + -3 * D + 2 * A);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return (
                T +
                x * (0.3 * D * A + -1.6 * A * A + 2.2 * D + -1.8 * A + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return T + x * (2 * D * A + -5 * A * A + 2 * D + 2 * A);
            },
          ],
          linear: [
            "linear",
            function (f, T, x, N) {
              return (x * f) / N + T;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, T, x, N) {
              return x * (f /= N) * f + T;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, T, x, N) {
              return -x * (f /= N) * (f - 2) + T;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f + T
                : (-x / 2) * (--f * (f - 2) - 1) + T;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, T, x, N) {
              return x * (f /= N) * f * f + T;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, T, x, N) {
              return x * ((f = f / N - 1) * f * f + 1) + T;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f * f + T
                : (x / 2) * ((f -= 2) * f * f + 2) + T;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, T, x, N) {
              return x * (f /= N) * f * f * f + T;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, T, x, N) {
              return -x * ((f = f / N - 1) * f * f * f - 1) + T;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f * f * f + T
                : (-x / 2) * ((f -= 2) * f * f * f - 2) + T;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, T, x, N) {
              return x * (f /= N) * f * f * f * f + T;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, T, x, N) {
              return x * ((f = f / N - 1) * f * f * f * f + 1) + T;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f * f * f * f + T
                : (x / 2) * ((f -= 2) * f * f * f * f + 2) + T;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, T, x, N) {
              return -x * Math.cos((f / N) * (Math.PI / 2)) + x + T;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, T, x, N) {
              return x * Math.sin((f / N) * (Math.PI / 2)) + T;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, T, x, N) {
              return (-x / 2) * (Math.cos((Math.PI * f) / N) - 1) + T;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, T, x, N) {
              return f === 0 ? T : x * Math.pow(2, 10 * (f / N - 1)) + T;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, T, x, N) {
              return f === N
                ? T + x
                : x * (-Math.pow(2, (-10 * f) / N) + 1) + T;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, T, x, N) {
              return f === 0
                ? T
                : f === N
                ? T + x
                : (f /= N / 2) < 1
                ? (x / 2) * Math.pow(2, 10 * (f - 1)) + T
                : (x / 2) * (-Math.pow(2, -10 * --f) + 2) + T;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, T, x, N) {
              return -x * (Math.sqrt(1 - (f /= N) * f) - 1) + T;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, T, x, N) {
              return x * Math.sqrt(1 - (f = f / N - 1) * f) + T;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (-x / 2) * (Math.sqrt(1 - f * f) - 1) + T
                : (x / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + T;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, T, x, N, A) {
              return (
                A === void 0 && (A = 1.70158),
                x * (f /= N) * f * ((A + 1) * f - A) + T
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, T, x, N, A) {
              return (
                A === void 0 && (A = 1.70158),
                x * ((f = f / N - 1) * f * ((A + 1) * f + A) + 1) + T
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, T, x, N, A) {
              return (
                A === void 0 && (A = 1.70158),
                (f /= N / 2) < 1
                  ? (x / 2) * f * f * (((A *= 1.525) + 1) * f - A) + T
                  : (x / 2) *
                      ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) +
                    T
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        O = document,
        I = window,
        C = "bkwld-tram",
        w = /[\-\.0-9]/g,
        P = /[A-Z]/,
        R = "number",
        M = /^(rgb|#)/,
        k = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        z = /(deg|rad|turn)$/,
        K = "unitless",
        Q = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        H = " ",
        S = O.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        q = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (f) {
          if (f in S.style) return { dom: f, css: f };
          var T,
            x,
            N = "",
            A = f.split("-");
          for (T = 0; T < A.length; T++)
            N += A[T].charAt(0).toUpperCase() + A[T].slice(1);
          for (T = 0; T < m.length; T++)
            if (((x = m[T] + N), x in S.style))
              return { dom: x, css: q[T] + f };
        },
        B = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (B.transition) {
        var J = B.timing.dom;
        if (((S.style[J] = g["ease-in-back"][0]), !S.style[J]))
          for (var re in E) g[re][0] = E[re];
      }
      var V = (t.frame = (function () {
          var f =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return f && B.bind
            ? f.bind(I)
            : function (T) {
                I.setTimeout(T, 16);
              };
        })()),
        j = (t.now = (function () {
          var f = I.performance,
            T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return T && B.bind
            ? T.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = v(function (f) {
          function T(ne, ce) {
            var ye = y(("" + ne).split(H)),
              pe = ye[0];
            ce = ce || {};
            var Le = Y[pe];
            if (!Le) return d("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var je = Le[0],
                De = this.props[pe];
              return (
                De || (De = this.props[pe] = new je.Bare()),
                De.init(this.$el, ye, Le, ce),
                De
              );
            }
          }
          function x(ne, ce, ye) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: D,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    $.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    T.call(this, ne, ye && ye[1]);
                }
                return D.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Le = 0;
                rt.call(
                  this,
                  ne,
                  function (Te, e_) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(e_);
                  },
                  function (Te) {
                    "wait" in Te && (Le = s(Te.wait, 0));
                  }
                ),
                  _e.call(this),
                  Le > 0 &&
                    ((this.timer = new ie({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = D));
                var je = this,
                  De = !1,
                  sn = {};
                V(function () {
                  rt.call(je, ne, function (Te) {
                    Te.active && ((De = !0), (sn[Te.name] = Te.nextStyle));
                  }),
                    De && je.$el.css(sn);
                });
              }
            }
          }
          function N(ne) {
            (ne = s(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: D,
                  })),
                  (this.active = !0));
          }
          function A(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = D))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function D() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              x.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              rt.call(this, ce, Re),
              _e.call(this);
          }
          function ae(ne) {
            te.call(this, ne), rt.call(this, ne, Tr, Zb);
          }
          function ge(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function $() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, C),
              (this.$el = this.el = null);
          }
          function _e() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[B.transition.dom] = ye));
          }
          function rt(ne, ce, ye) {
            var pe,
              Le,
              je,
              De,
              sn = ce !== Re,
              Te = {};
            for (pe in ne)
              (je = ne[pe]),
                pe in de
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[pe] = je))
                  : (P.test(pe) && (pe = r(pe)),
                    pe in Y ? (Te[pe] = je) : (De || (De = {}), (De[pe] = je)));
            for (pe in Te) {
              if (((je = Te[pe]), (Le = this.props[pe]), !Le)) {
                if (!sn) continue;
                Le = T.call(this, pe);
              }
              ce.call(this, Le, je);
            }
            ye && De && ye.call(this, De);
          }
          function Re(ne) {
            ne.stop();
          }
          function Tr(ne, ce) {
            ne.set(ce);
          }
          function Zb(ne) {
            this.$el.css(ne);
          }
          function Xe(ne, ce) {
            f[ne] = function () {
              return this.children
                ? Jb.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function Jb(ne, ce) {
            var ye,
              pe = this.children.length;
            for (ye = 0; pe > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = X(this.el, "transition");
              ce && !Q.test(ce) && (this.upstream = ce);
            }
            B.backface &&
              oe.hideBackface &&
              h(this.el, B.backface.css, "hidden");
          }),
            Xe("add", T),
            Xe("start", x),
            Xe("wait", N),
            Xe("then", A),
            Xe("next", D),
            Xe("stop", te),
            Xe("set", ae),
            Xe("show", ge),
            Xe("hide", $),
            Xe("redraw", se),
            Xe("destroy", ue);
        }),
        b = v(p, function (f) {
          function T(x, N) {
            var A = e.data(x, C) || e.data(x, C, new p.Bare());
            return A.el || A.init(x), N ? A.start(N) : A;
          }
          f.init = function (x, N) {
            var A = e(x);
            if (!A.length) return this;
            if (A.length === 1) return T(A[0], N);
            var D = [];
            return (
              A.each(function (te, ae) {
                D.push(T(ae, N));
              }),
              (this.children = D),
              this
            );
          };
        }),
        _ = v(function (f) {
          function T() {
            var D = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(D), te;
          }
          function x(D, te, ae) {
            return te !== void 0 && (ae = te), D in g ? D : ae;
          }
          function N(D) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(D);
            return (te ? i(te[1], te[2], te[3]) : D).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var A = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (D, te, ae, ge) {
            (this.$el = D), (this.el = D[0]);
            var $ = te[0];
            ae[2] && ($ = ae[2]),
              Z[$] && ($ = Z[$]),
              (this.name = $),
              (this.type = ae[1]),
              (this.duration = s(te[1], this.duration, A.duration)),
              (this.ease = x(te[2], this.ease, A.ease)),
              (this.delay = s(te[3], this.delay, A.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ee.test(this.name)),
              (this.unit = ge.unit || this.unit || oe.defaultUnit),
              (this.angle = ge.angle || this.angle || oe.defaultAngle),
              oe.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    H +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? H + g[this.ease][0] : "") +
                    (this.delay ? H + this.delay + "ms" : "")));
          }),
            (f.set = function (D) {
              (D = this.convert(D, this.type)), this.update(D), this.redraw();
            }),
            (f.transition = function (D) {
              (this.active = !0),
                (D = this.convert(D, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  D == "auto" && (D = T.call(this))),
                (this.nextStyle = D);
            }),
            (f.fallback = function (D) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (D = this.convert(D, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  D == "auto" && (D = T.call(this))),
                (this.tween = new L({
                  from: te,
                  to: D,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return X(this.el, this.name);
            }),
            (f.update = function (D) {
              h(this.el, this.name, D);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                h(this.el, this.name, this.get()));
              var D = this.tween;
              D && D.context && D.destroy();
            }),
            (f.convert = function (D, te) {
              if (D == "auto" && this.auto) return D;
              var ae,
                ge = typeof D == "number",
                $ = typeof D == "string";
              switch (te) {
                case R:
                  if (ge) return D;
                  if ($ && D.replace(w, "") === "") return +D;
                  ae = "number(unitless)";
                  break;
                case M:
                  if ($) {
                    if (D === "" && this.original) return this.original;
                    if (te.test(D))
                      return D.charAt(0) == "#" && D.length == 7 ? D : N(D);
                  }
                  ae = "hex or rgb string";
                  break;
                case k:
                  if (ge) return D + this.unit;
                  if ($ && te.test(D)) return D;
                  ae = "number(px) or string(unit)";
                  break;
                case F:
                  if (ge) return D + this.unit;
                  if ($ && te.test(D)) return D;
                  ae = "number(px) or string(unit or %)";
                  break;
                case z:
                  if (ge) return D + this.angle;
                  if ($ && te.test(D)) return D;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ge || ($ && F.test(D))) return D;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, D), D;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = v(_, function (f, T) {
          f.init = function () {
            T.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        G = v(_, function (f, T) {
          (f.init = function () {
            T.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (x) {
              this.$el[this.name](x);
            });
        }),
        W = v(_, function (f, T) {
          function x(N, A) {
            var D, te, ae, ge, $;
            for (D in N)
              (ge = de[D]),
                (ae = ge[0]),
                (te = ge[1] || D),
                ($ = this.convert(N[D], ae)),
                A.call(this, te, $, ae);
          }
          (f.init = function () {
            T.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (N) {
              x.call(this, N, function (A, D) {
                this.current[A] = D;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (N) {
              var A = this.values(N);
              this.tween = new fe({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var D,
                te = {};
              for (D in this.current) te[D] = D in A ? A[D] : this.current[D];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (f.fallback = function (N) {
              var A = this.values(N);
              this.tween = new fe({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (N) {
              var A,
                D = "";
              for (A in N) D += A + "(" + N[A] + ") ";
              return D;
            }),
            (f.values = function (N) {
              var A,
                D = {};
              return (
                x.call(this, N, function (te, ae, ge) {
                  (D[te] = ae),
                    this.current[te] === void 0 &&
                      ((A = 0),
                      ~te.indexOf("scale") && (A = 1),
                      (this.current[te] = this.convert(A, ge)));
                }),
                D
              );
            });
        }),
        L = v(function (f) {
          function T($) {
            ae.push($) === 1 && V(x);
          }
          function x() {
            var $,
              se,
              ue,
              _e = ae.length;
            if (_e)
              for (V(x), se = j(), $ = _e; $--; )
                (ue = ae[$]), ue && ue.render(se);
          }
          function N($) {
            var se,
              ue = e.inArray($, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function A($) {
            return Math.round($ * ge) / ge;
          }
          function D($, se, ue) {
            return i(
              $[0] + ue * (se[0] - $[0]),
              $[1] + ue * (se[1] - $[1]),
              $[2] + ue * (se[2] - $[2])
            );
          }
          var te = { ease: g.ease[1], from: 0, to: 1 };
          (f.init = function ($) {
            (this.duration = $.duration || 0), (this.delay = $.delay || 0);
            var se = $.ease || te.ease;
            g[se] && (se = g[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = $.update || o),
              (this.complete = $.complete || o),
              (this.context = $.context || this),
              (this.name = $.name);
            var ue = $.from,
              _e = $.to;
            ue === void 0 && (ue = te.from),
              _e === void 0 && (_e = te.to),
              (this.unit = $.unit || ""),
              typeof ue == "number" && typeof _e == "number"
                ? ((this.begin = ue), (this.change = _e - ue))
                : this.format(_e, ue),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              $.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), T(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), N(this));
            }),
            (f.render = function ($) {
              var se,
                ue = $ - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? D(this.startRGB, this.endRGB, _e)
                    : A(this.begin + _e * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function ($, se) {
              if (((se += ""), ($ += ""), $.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n($)),
                  (this.endHex = $),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(w, ""),
                  _e = $.replace(w, "");
                ue !== _e && u("tween", se, $), (this.unit = ue);
              }
              (se = parseFloat(se)),
                ($ = parseFloat($)),
                (this.begin = this.value = se),
                (this.change = $ - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ge = 1e3;
        }),
        ie = v(L, function (f) {
          (f.init = function (T) {
            (this.duration = T.duration || 0),
              (this.complete = T.complete || o),
              (this.context = T.context),
              this.play();
          }),
            (f.render = function (T) {
              var x = T - this.start;
              x < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        fe = v(L, function (f, T) {
          (f.init = function (x) {
            (this.context = x.context),
              (this.update = x.update),
              (this.tweens = []),
              (this.current = x.current);
            var N, A;
            for (N in x.values)
              (A = x.values[N]),
                this.current[N] !== A &&
                  this.tweens.push(
                    new L({
                      name: N,
                      from: this.current[N],
                      to: A,
                      duration: x.duration,
                      delay: x.delay,
                      ease: x.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (x) {
              var N,
                A,
                D = this.tweens.length,
                te = !1;
              for (N = D; N--; )
                (A = this.tweens[N]),
                  A.context &&
                    (A.render(x), (this.current[A.name] = A.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((T.destroy.call(this), this.tweens)) {
                var x,
                  N = this.tweens.length;
                for (x = N; x--; ) this.tweens[x].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !B.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!B.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var T = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = T.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new L(f);
        }),
        (t.delay = function (f, T, x) {
          return new ie({ complete: T, duration: f, context: x });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var h = e.style,
        X = e.css,
        Z = { transform: B.transform && B.transform.css },
        Y = {
          color: [l, M],
          background: [l, M, "background-color"],
          "outline-color": [l, M],
          "border-color": [l, M],
          "border-top-color": [l, M],
          "border-right-color": [l, M],
          "border-bottom-color": [l, M],
          "border-left-color": [l, M],
          "border-width": [_, k],
          "border-top-width": [_, k],
          "border-right-width": [_, k],
          "border-bottom-width": [_, k],
          "border-left-width": [_, k],
          "border-spacing": [_, k],
          "letter-spacing": [_, k],
          margin: [_, k],
          "margin-top": [_, k],
          "margin-right": [_, k],
          "margin-bottom": [_, k],
          "margin-left": [_, k],
          padding: [_, k],
          "padding-top": [_, k],
          "padding-right": [_, k],
          "padding-bottom": [_, k],
          "padding-left": [_, k],
          "outline-width": [_, k],
          opacity: [_, R],
          top: [_, F],
          right: [_, F],
          bottom: [_, F],
          left: [_, F],
          "font-size": [_, F],
          "text-indent": [_, F],
          "word-spacing": [_, F],
          width: [_, F],
          "min-width": [_, F],
          "max-width": [_, F],
          height: [_, F],
          "min-height": [_, F],
          "max-height": [_, F],
          "line-height": [_, K],
          "scroll-top": [G, R, "scrollTop"],
          "scroll-left": [G, R, "scrollLeft"],
        },
        de = {};
      B.transform &&
        ((Y.transform = [W]),
        (de = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [z],
          rotateX: [z],
          rotateY: [z],
          scale: [R],
          scaleX: [R],
          scaleY: [R],
          skew: [z],
          skewX: [z],
          skewY: [z],
        })),
        B.transform &&
          B.backface &&
          ((de.z = [F, "translateZ"]),
          (de.rotateZ = [z]),
          (de.scaleZ = [R]),
          (de.perspective = [k]));
      var Fe = /ms/,
        Be = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Fs = c((YV, Ms) => {
    "use strict";
    var a_ = window.$,
      s_ = qi() && a_.tram;
    Ms.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        d = n.hasOwnProperty,
        y = r.forEach,
        v = r.map,
        g = r.reduce,
        E = r.reduceRight,
        O = r.filter,
        I = r.every,
        C = r.some,
        w = r.indexOf,
        P = r.lastIndexOf,
        R = Array.isArray,
        M = Object.keys,
        k = i.bind,
        F =
          (e.each =
          e.forEach =
            function (m, q, U) {
              if (m == null) return m;
              if (y && m.forEach === y) m.forEach(q, U);
              else if (m.length === +m.length) {
                for (var B = 0, J = m.length; B < J; B++)
                  if (q.call(U, m[B], B, m) === t) return;
              } else
                for (var re = e.keys(m), B = 0, J = re.length; B < J; B++)
                  if (q.call(U, m[re[B]], re[B], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, q, U) {
          var B = [];
          return m == null
            ? B
            : v && m.map === v
            ? m.map(q, U)
            : (F(m, function (J, re, V) {
                B.push(q.call(U, J, re, V));
              }),
              B);
        }),
        (e.find = e.detect =
          function (m, q, U) {
            var B;
            return (
              z(m, function (J, re, V) {
                if (q.call(U, J, re, V)) return (B = J), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (m, q, U) {
            var B = [];
            return m == null
              ? B
              : O && m.filter === O
              ? m.filter(q, U)
              : (F(m, function (J, re, V) {
                  q.call(U, J, re, V) && B.push(J);
                }),
                B);
          });
      var z =
        (e.some =
        e.any =
          function (m, q, U) {
            q || (q = e.identity);
            var B = !1;
            return m == null
              ? B
              : C && m.some === C
              ? m.some(q, U)
              : (F(m, function (J, re, V) {
                  if (B || (B = q.call(U, J, re, V))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (m, q) {
          return m == null
            ? !1
            : w && m.indexOf === w
            ? m.indexOf(q) != -1
            : z(m, function (U) {
                return U === q;
              });
        }),
        (e.delay = function (m, q) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, U);
          }, q);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var q, U, B;
          return function () {
            q ||
              ((q = !0),
              (U = arguments),
              (B = this),
              s_.frame(function () {
                (q = !1), m.apply(B, U);
              }));
          };
        }),
        (e.debounce = function (m, q, U) {
          var B,
            J,
            re,
            V,
            j,
            p = function () {
              var b = e.now() - V;
              b < q
                ? (B = setTimeout(p, q - b))
                : ((B = null), U || ((j = m.apply(re, J)), (re = J = null)));
            };
          return function () {
            (re = this), (J = arguments), (V = e.now());
            var b = U && !B;
            return (
              B || (B = setTimeout(p, q)),
              b && ((j = m.apply(re, J)), (re = J = null)),
              j
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var q = 1, U = arguments.length; q < U; q++) {
            var B = arguments[q];
            for (var J in B) m[J] === void 0 && (m[J] = B[J]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (M) return M(m);
          var q = [];
          for (var U in m) e.has(m, U) && q.push(U);
          return q;
        }),
        (e.has = function (m, q) {
          return d.call(m, q);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function (m) {
          return "\\" + Q[m];
        },
        S = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, q, U) {
          !q && U && (q = U), (q = e.defaults({}, q, e.templateSettings));
          var B = RegExp(
              [
                (q.escape || K).source,
                (q.interpolate || K).source,
                (q.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            re = "__p+='";
          m.replace(B, function (b, _, l, G, W) {
            return (
              (re += m.slice(J, W).replace(ee, H)),
              (J = W + b.length),
              _
                ? (re +=
                    `'+
    ((__t=(` +
                    _ +
                    `))==null?'':_.escape(__t))+
    '`)
                : l
                ? (re +=
                    `'+
    ((__t=(` +
                    l +
                    `))==null?'':__t)+
    '`)
                : G &&
                  (re +=
                    `';
    ` +
                    G +
                    `
    __p+='`),
              b
            );
          }),
            (re += `';
    `);
          var V = q.variable;
          if (V) {
            if (!S.test(V))
              throw new Error("variable is not a bare identifier: " + V);
          } else
            (re =
              `with(obj||{}){
    ` +
              re +
              `}
    `),
              (V = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            re +
            `return __p;
    `;
          var j;
          try {
            j = new Function(q.variable || "obj", "_", re);
          } catch (b) {
            throw ((b.source = re), b);
          }
          var p = function (b) {
            return j.call(this, b, e);
          };
          return (
            (p.source =
              "function(" +
              V +
              `){
    ` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Ne = c(($V, Bs) => {
    "use strict";
    var ve = {},
      Ht = {},
      Bt = [],
      Fi = window.Webflow || [],
      bt = window.jQuery,
      Ke = bt(window),
      u_ = bt(document),
      it = bt.isFunction,
      ze = (ve._ = Fs()),
      ks = (ve.tram = qi() && bt.tram),
      ln = !1,
      Di = !1;
    ks.config.hideBackface = !1;
    ks.config.keepInherited = !0;
    ve.define = function (e, t, r) {
      Ht[e] && Us(Ht[e]);
      var n = (Ht[e] = t(bt, ze, r) || {});
      return Gs(n), n;
    };
    ve.require = function (e) {
      return Ht[e];
    };
    function Gs(e) {
      ve.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
        it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && c_(e);
    }
    function c_(e) {
      if (ln) {
        e.ready();
        return;
      }
      ze.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function Us(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && l_(e);
    }
    function l_(e) {
      Bt = ze.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    ve.push = function (e) {
      if (ln) {
        it(e) && e();
        return;
      }
      Fi.push(e);
    };
    ve.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var cn = navigator.userAgent.toLowerCase(),
      Vs = (ve.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      f_ = (ve.env.chrome =
        /chrome/.test(cn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)),
      d_ = (ve.env.ios = /(ipod|iphone|ipad)/.test(cn));
    ve.env.safari = /safari/.test(cn) && !f_ && !d_;
    var Mi;
    Vs &&
      u_.on("touchstart mousedown", function (e) {
        Mi = e.target;
      });
    ve.validClick = Vs
      ? function (e) {
          return e === Mi || bt.contains(e, Mi);
        }
      : function () {
          return !0;
        };
    var Ws = "resize.webflow orientationchange.webflow load.webflow",
      p_ = "scroll.webflow " + Ws;
    ve.resize = ki(Ke, Ws);
    ve.scroll = ki(Ke, p_);
    ve.redraw = ki();
    function ki(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ve.location = function (e) {
      window.location = e;
    };
    ve.env() && (ve.location = function () {});
    ve.ready = function () {
      (ln = !0), Di ? v_() : ze.each(Bt, Ds), ze.each(Fi, Ds), ve.resize.up();
    };
    function Ds(e) {
      it(e) && e();
    }
    function v_() {
      (Di = !1), ze.each(Ht, Gs);
    }
    var Lt;
    ve.load = function (e) {
      Lt.then(e);
    };
    function Hs() {
      Lt && (Lt.reject(), Ke.off("load", Lt.resolve)),
        (Lt = new bt.Deferred()),
        Ke.on("load", Lt.resolve);
    }
    ve.destroy = function (e) {
      (e = e || {}),
        (Di = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (ln = e.domready),
        ze.each(Ht, Us),
        ve.resize.off(),
        ve.scroll.off(),
        ve.redraw.off(),
        (Bt = []),
        (Fi = []),
        Lt.state() === "pending" && Hs();
    };
    bt(ve.ready);
    Hs();
    Bs.exports = window.Webflow = ve;
  });
  var zs = c((QV, js) => {
    "use strict";
    var Xs = Ne();
    Xs.define(
      "brand",
      (js.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            O = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(O) && a.hostname !== O && (E = !0),
            E &&
              !u &&
              ((d = d || v()),
              g(),
              setTimeout(g, 500),
              e(r).off(s, y).on(s, y));
        };
        function y() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", E ? "display: none !important;" : "");
        }
        function v() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(O, I), E[0];
        }
        function g() {
          var E = i.children(o),
            O = E.length && E.get(0) === d,
            I = Xs.env("editor");
          if (O) {
            I && E.remove();
            return;
          }
          E.length && E.remove(), I || i.append(d);
        }
        return t;
      })
    );
  });
  var Ys = c((ZV, Ks) => {
    "use strict";
    var Gi = Ne();
    Gi.define(
      "edit",
      (Ks.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Gi.env("test") || Gi.env("frame")) && !r.fixture && !g_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          d = r.load || g,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : i.on(u, v).triggerHandler(u);
        function v() {
          s || (/\?edit/.test(a.hash) && d());
        }
        function g() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, v),
            P(function (M) {
              e.ajax({
                url: w("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(M),
              });
            });
        }
        function E(M) {
          return function (k) {
            if (!k) {
              console.error("Could not load editor data");
              return;
            }
            (k.thirdPartyCookiesSupported = M),
              O(C(k.scriptPath), function () {
                window.WebflowEditor(k);
              });
          };
        }
        function O(M, k) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            k,
            I
          );
        }
        function I(M, k, F) {
          throw (console.error("Could not load editor script: " + k), F);
        }
        function C(M) {
          return M.indexOf("//") >= 0
            ? M
            : w("https://editor-api.webflow.com" + M);
        }
        function w(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function P(M) {
          var k = window.document.createElement("iframe");
          (k.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (k.style.display = "none"),
            (k.sandbox = "allow-scripts allow-same-origin");
          var F = function (z) {
            z.data === "WF_third_party_cookies_unsupported"
              ? (R(k, F), M(!1))
              : z.data === "WF_third_party_cookies_supported" &&
                (R(k, F), M(!0));
          };
          (k.onerror = function () {
            R(k, F), M(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(k);
        }
        function R(M, k) {
          window.removeEventListener("message", k, !1), M.remove();
        }
        return n;
      })
    );
    function g_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Qs = c((JV, $s) => {
    "use strict";
    var h_ = Ne();
    h_.define(
      "focus-visible",
      ($s.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(R) {
            return !!(
              R &&
              R !== document &&
              R.nodeName !== "HTML" &&
              R.nodeName !== "BODY" &&
              "classList" in R &&
              "contains" in R.classList
            );
          }
          function s(R) {
            var M = R.type,
              k = R.tagName;
            return !!(
              (k === "INPUT" && a[M] && !R.readOnly) ||
              (k === "TEXTAREA" && !R.readOnly) ||
              R.isContentEditable
            );
          }
          function d(R) {
            R.getAttribute("data-wf-focus-visible") ||
              R.setAttribute("data-wf-focus-visible", "true");
          }
          function y(R) {
            R.getAttribute("data-wf-focus-visible") &&
              R.removeAttribute("data-wf-focus-visible");
          }
          function v(R) {
            R.metaKey ||
              R.altKey ||
              R.ctrlKey ||
              (u(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function E(R) {
            u(R.target) && (n || s(R.target)) && d(R.target);
          }
          function O(R) {
            u(R.target) &&
              R.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              y(R.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", P),
              document.addEventListener("mousedown", P),
              document.addEventListener("mouseup", P),
              document.addEventListener("pointermove", P),
              document.addEventListener("pointerdown", P),
              document.addEventListener("pointerup", P),
              document.addEventListener("touchmove", P),
              document.addEventListener("touchstart", P),
              document.addEventListener("touchend", P);
          }
          function w() {
            document.removeEventListener("mousemove", P),
              document.removeEventListener("mousedown", P),
              document.removeEventListener("mouseup", P),
              document.removeEventListener("pointermove", P),
              document.removeEventListener("pointerdown", P),
              document.removeEventListener("pointerup", P),
              document.removeEventListener("touchmove", P),
              document.removeEventListener("touchstart", P),
              document.removeEventListener("touchend", P);
          }
          function P(R) {
            (R.target.nodeName && R.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), w());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", I, !0),
            C(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", O, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var eu = c((eW, Js) => {
    "use strict";
    var Zs = Ne();
    Zs.define(
      "focus",
      (Js.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Zs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var nu = c((tW, ru) => {
    "use strict";
    var Ui = window.jQuery,
      ot = {},
      fn = [],
      tu = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ui(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ui(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
    ot.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), Ui.extend(ot.triggers, dn);
    };
    ot.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    ot.async();
    ru.exports = ot;
  });
  var Xt = c((rW, au) => {
    "use strict";
    var Vi = nu();
    function iu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var m_ = window.jQuery,
      pn = {},
      ou = ".w-ix",
      E_ = {
        reset: function (e, t) {
          Vi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Vi.triggers.intro(e, t), iu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Vi.triggers.outro(e, t), iu(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + ou, OUTRO: "w-ix-outro" + ou };
    m_.extend(pn.triggers, E_);
    au.exports = pn;
  });
  var su = c((nW, pt) => {
    function Wi(e) {
      return (
        (pt.exports = Wi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Wi(e)
      );
    }
    (pt.exports = Wi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var vn = c((iW, Ir) => {
    var y_ = su().default;
    function uu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (uu = function (i) {
        return i ? r : t;
      })(e);
    }
    function b_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (y_(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = uu(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Ir.exports = b_),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var cu = c((oW, wr) => {
    function __(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (wr.exports = __),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var Ee = c((aW, lu) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    lu.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var jt = c((sW, fu) => {
    fu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Nt = c((uW, du) => {
    var T_ = jt();
    du.exports = !T_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var hn = c((cW, pu) => {
    var Or = Function.prototype.call;
    pu.exports = Or.bind
      ? Or.bind(Or)
      : function () {
          return Or.apply(Or, arguments);
        };
  });
  var mu = c((hu) => {
    "use strict";
    var vu = {}.propertyIsEnumerable,
      gu = Object.getOwnPropertyDescriptor,
      I_ = gu && !vu.call({ 1: 2 }, 1);
    hu.f = I_
      ? function (t) {
          var r = gu(this, t);
          return !!r && r.enumerable;
        }
      : vu;
  });
  var Hi = c((fW, Eu) => {
    Eu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((dW, bu) => {
    var yu = Function.prototype,
      Bi = yu.bind,
      Xi = yu.call,
      w_ = Bi && Bi.bind(Xi);
    bu.exports = Bi
      ? function (e) {
          return e && w_(Xi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Xi.apply(e, arguments);
            }
          );
        };
  });
  var Iu = c((pW, Tu) => {
    var _u = Ye(),
      O_ = _u({}.toString),
      A_ = _u("".slice);
    Tu.exports = function (e) {
      return A_(O_(e), 8, -1);
    };
  });
  var Ou = c((vW, wu) => {
    var x_ = Ee(),
      S_ = Ye(),
      C_ = jt(),
      R_ = Iu(),
      ji = x_.Object,
      L_ = S_("".split);
    wu.exports = C_(function () {
      return !ji("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return R_(e) == "String" ? L_(e, "") : ji(e);
        }
      : ji;
  });
  var zi = c((gW, Au) => {
    var N_ = Ee(),
      P_ = N_.TypeError;
    Au.exports = function (e) {
      if (e == null) throw P_("Can't call method on " + e);
      return e;
    };
  });
  var Ar = c((hW, xu) => {
    var q_ = Ou(),
      M_ = zi();
    xu.exports = function (e) {
      return q_(M_(e));
    };
  });
  var at = c((mW, Su) => {
    Su.exports = function (e) {
      return typeof e == "function";
    };
  });
  var zt = c((EW, Cu) => {
    var F_ = at();
    Cu.exports = function (e) {
      return typeof e == "object" ? e !== null : F_(e);
    };
  });
  var xr = c((yW, Ru) => {
    var Ki = Ee(),
      D_ = at(),
      k_ = function (e) {
        return D_(e) ? e : void 0;
      };
    Ru.exports = function (e, t) {
      return arguments.length < 2 ? k_(Ki[e]) : Ki[e] && Ki[e][t];
    };
  });
  var Nu = c((bW, Lu) => {
    var G_ = Ye();
    Lu.exports = G_({}.isPrototypeOf);
  });
  var qu = c((_W, Pu) => {
    var U_ = xr();
    Pu.exports = U_("navigator", "userAgent") || "";
  });
  var Vu = c((TW, Uu) => {
    var Gu = Ee(),
      Yi = qu(),
      Mu = Gu.process,
      Fu = Gu.Deno,
      Du = (Mu && Mu.versions) || (Fu && Fu.version),
      ku = Du && Du.v8,
      $e,
      mn;
    ku &&
      (($e = ku.split(".")),
      (mn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !mn &&
      Yi &&
      (($e = Yi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Yi.match(/Chrome\/(\d+)/)), $e && (mn = +$e[1])));
    Uu.exports = mn;
  });
  var $i = c((IW, Hu) => {
    var Wu = Vu(),
      V_ = jt();
    Hu.exports =
      !!Object.getOwnPropertySymbols &&
      !V_(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Wu && Wu < 41)
        );
      });
  });
  var Qi = c((wW, Bu) => {
    var W_ = $i();
    Bu.exports = W_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Zi = c((OW, Xu) => {
    var H_ = Ee(),
      B_ = xr(),
      X_ = at(),
      j_ = Nu(),
      z_ = Qi(),
      K_ = H_.Object;
    Xu.exports = z_
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = B_("Symbol");
          return X_(t) && j_(t.prototype, K_(e));
        };
  });
  var zu = c((AW, ju) => {
    var Y_ = Ee(),
      $_ = Y_.String;
    ju.exports = function (e) {
      try {
        return $_(e);
      } catch {
        return "Object";
      }
    };
  });
  var Yu = c((xW, Ku) => {
    var Q_ = Ee(),
      Z_ = at(),
      J_ = zu(),
      eT = Q_.TypeError;
    Ku.exports = function (e) {
      if (Z_(e)) return e;
      throw eT(J_(e) + " is not a function");
    };
  });
  var Qu = c((SW, $u) => {
    var tT = Yu();
    $u.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : tT(r);
    };
  });
  var Ju = c((CW, Zu) => {
    var rT = Ee(),
      Ji = hn(),
      eo = at(),
      to = zt(),
      nT = rT.TypeError;
    Zu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && eo((r = e.toString)) && !to((n = Ji(r, e)))) ||
        (eo((r = e.valueOf)) && !to((n = Ji(r, e)))) ||
        (t !== "string" && eo((r = e.toString)) && !to((n = Ji(r, e))))
      )
        return n;
      throw nT("Can't convert object to primitive value");
    };
  });
  var tc = c((RW, ec) => {
    ec.exports = !1;
  });
  var En = c((LW, nc) => {
    var rc = Ee(),
      iT = Object.defineProperty;
    nc.exports = function (e, t) {
      try {
        iT(rc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        rc[e] = t;
      }
      return t;
    };
  });
  var yn = c((NW, oc) => {
    var oT = Ee(),
      aT = En(),
      ic = "__core-js_shared__",
      sT = oT[ic] || aT(ic, {});
    oc.exports = sT;
  });
  var ro = c((PW, sc) => {
    var uT = tc(),
      ac = yn();
    (sc.exports = function (e, t) {
      return ac[e] || (ac[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: uT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var cc = c((qW, uc) => {
    var cT = Ee(),
      lT = zi(),
      fT = cT.Object;
    uc.exports = function (e) {
      return fT(lT(e));
    };
  });
  var _t = c((MW, lc) => {
    var dT = Ye(),
      pT = cc(),
      vT = dT({}.hasOwnProperty);
    lc.exports =
      Object.hasOwn ||
      function (t, r) {
        return vT(pT(t), r);
      };
  });
  var no = c((FW, fc) => {
    var gT = Ye(),
      hT = 0,
      mT = Math.random(),
      ET = gT((1).toString);
    fc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + ET(++hT + mT, 36);
    };
  });
  var io = c((DW, hc) => {
    var yT = Ee(),
      bT = ro(),
      dc = _t(),
      _T = no(),
      pc = $i(),
      gc = Qi(),
      Kt = bT("wks"),
      Pt = yT.Symbol,
      vc = Pt && Pt.for,
      TT = gc ? Pt : (Pt && Pt.withoutSetter) || _T;
    hc.exports = function (e) {
      if (!dc(Kt, e) || !(pc || typeof Kt[e] == "string")) {
        var t = "Symbol." + e;
        pc && dc(Pt, e)
          ? (Kt[e] = Pt[e])
          : gc && vc
          ? (Kt[e] = vc(t))
          : (Kt[e] = TT(t));
      }
      return Kt[e];
    };
  });
  var bc = c((kW, yc) => {
    var IT = Ee(),
      wT = hn(),
      mc = zt(),
      Ec = Zi(),
      OT = Qu(),
      AT = Ju(),
      xT = io(),
      ST = IT.TypeError,
      CT = xT("toPrimitive");
    yc.exports = function (e, t) {
      if (!mc(e) || Ec(e)) return e;
      var r = OT(e, CT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = wT(r, e, t)), !mc(n) || Ec(n))
        )
          return n;
        throw ST("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), AT(e, t);
    };
  });
  var oo = c((GW, _c) => {
    var RT = bc(),
      LT = Zi();
    _c.exports = function (e) {
      var t = RT(e, "string");
      return LT(t) ? t : t + "";
    };
  });
  var so = c((UW, Ic) => {
    var NT = Ee(),
      Tc = zt(),
      ao = NT.document,
      PT = Tc(ao) && Tc(ao.createElement);
    Ic.exports = function (e) {
      return PT ? ao.createElement(e) : {};
    };
  });
  var uo = c((VW, wc) => {
    var qT = Nt(),
      MT = jt(),
      FT = so();
    wc.exports =
      !qT &&
      !MT(function () {
        return (
          Object.defineProperty(FT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var co = c((Ac) => {
    var DT = Nt(),
      kT = hn(),
      GT = mu(),
      UT = Hi(),
      VT = Ar(),
      WT = oo(),
      HT = _t(),
      BT = uo(),
      Oc = Object.getOwnPropertyDescriptor;
    Ac.f = DT
      ? Oc
      : function (t, r) {
          if (((t = VT(t)), (r = WT(r)), BT))
            try {
              return Oc(t, r);
            } catch {}
          if (HT(t, r)) return UT(!kT(GT.f, t, r), t[r]);
        };
  });
  var Sr = c((HW, Sc) => {
    var xc = Ee(),
      XT = zt(),
      jT = xc.String,
      zT = xc.TypeError;
    Sc.exports = function (e) {
      if (XT(e)) return e;
      throw zT(jT(e) + " is not an object");
    };
  });
  var Cr = c((Lc) => {
    var KT = Ee(),
      YT = Nt(),
      $T = uo(),
      Cc = Sr(),
      QT = oo(),
      ZT = KT.TypeError,
      Rc = Object.defineProperty;
    Lc.f = YT
      ? Rc
      : function (t, r, n) {
          if ((Cc(t), (r = QT(r)), Cc(n), $T))
            try {
              return Rc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw ZT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var bn = c((XW, Nc) => {
    var JT = Nt(),
      eI = Cr(),
      tI = Hi();
    Nc.exports = JT
      ? function (e, t, r) {
          return eI.f(e, t, tI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var fo = c((jW, Pc) => {
    var rI = Ye(),
      nI = at(),
      lo = yn(),
      iI = rI(Function.toString);
    nI(lo.inspectSource) ||
      (lo.inspectSource = function (e) {
        return iI(e);
      });
    Pc.exports = lo.inspectSource;
  });
  var Fc = c((zW, Mc) => {
    var oI = Ee(),
      aI = at(),
      sI = fo(),
      qc = oI.WeakMap;
    Mc.exports = aI(qc) && /native code/.test(sI(qc));
  });
  var po = c((KW, kc) => {
    var uI = ro(),
      cI = no(),
      Dc = uI("keys");
    kc.exports = function (e) {
      return Dc[e] || (Dc[e] = cI(e));
    };
  });
  var _n = c((YW, Gc) => {
    Gc.exports = {};
  });
  var Xc = c(($W, Bc) => {
    var lI = Fc(),
      Hc = Ee(),
      vo = Ye(),
      fI = zt(),
      dI = bn(),
      go = _t(),
      ho = yn(),
      pI = po(),
      vI = _n(),
      Uc = "Object already initialized",
      Eo = Hc.TypeError,
      gI = Hc.WeakMap,
      Tn,
      Rr,
      In,
      hI = function (e) {
        return In(e) ? Rr(e) : Tn(e, {});
      },
      mI = function (e) {
        return function (t) {
          var r;
          if (!fI(t) || (r = Rr(t)).type !== e)
            throw Eo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    lI || ho.state
      ? ((Tt = ho.state || (ho.state = new gI())),
        (Vc = vo(Tt.get)),
        (mo = vo(Tt.has)),
        (Wc = vo(Tt.set)),
        (Tn = function (e, t) {
          if (mo(Tt, e)) throw new Eo(Uc);
          return (t.facade = e), Wc(Tt, e, t), t;
        }),
        (Rr = function (e) {
          return Vc(Tt, e) || {};
        }),
        (In = function (e) {
          return mo(Tt, e);
        }))
      : ((qt = pI("state")),
        (vI[qt] = !0),
        (Tn = function (e, t) {
          if (go(e, qt)) throw new Eo(Uc);
          return (t.facade = e), dI(e, qt, t), t;
        }),
        (Rr = function (e) {
          return go(e, qt) ? e[qt] : {};
        }),
        (In = function (e) {
          return go(e, qt);
        }));
    var Tt, Vc, mo, Wc, qt;
    Bc.exports = { set: Tn, get: Rr, has: In, enforce: hI, getterFor: mI };
  });
  var Kc = c((QW, zc) => {
    var yo = Nt(),
      EI = _t(),
      jc = Function.prototype,
      yI = yo && Object.getOwnPropertyDescriptor,
      bo = EI(jc, "name"),
      bI = bo && function () {}.name === "something",
      _I = bo && (!yo || (yo && yI(jc, "name").configurable));
    zc.exports = { EXISTS: bo, PROPER: bI, CONFIGURABLE: _I };
  });
  var Jc = c((ZW, Zc) => {
    var TI = Ee(),
      Yc = at(),
      II = _t(),
      $c = bn(),
      wI = En(),
      OI = fo(),
      Qc = Xc(),
      AI = Kc().CONFIGURABLE,
      xI = Qc.get,
      SI = Qc.enforce,
      CI = String(String).split("String");
    (Zc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        s;
      if (
        (Yc(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!II(r, "name") || (AI && r.name !== u)) && $c(r, "name", u),
          (s = SI(r)),
          s.source || (s.source = CI.join(typeof u == "string" ? u : ""))),
        e === TI)
      ) {
        o ? (e[t] = r) : wI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : $c(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Yc(this) && xI(this).source) || OI(this);
    });
  });
  var _o = c((JW, el) => {
    var RI = Math.ceil,
      LI = Math.floor;
    el.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? LI : RI)(t);
    };
  });
  var rl = c((eH, tl) => {
    var NI = _o(),
      PI = Math.max,
      qI = Math.min;
    tl.exports = function (e, t) {
      var r = NI(e);
      return r < 0 ? PI(r + t, 0) : qI(r, t);
    };
  });
  var il = c((tH, nl) => {
    var MI = _o(),
      FI = Math.min;
    nl.exports = function (e) {
      return e > 0 ? FI(MI(e), 9007199254740991) : 0;
    };
  });
  var al = c((rH, ol) => {
    var DI = il();
    ol.exports = function (e) {
      return DI(e.length);
    };
  });
  var To = c((nH, ul) => {
    var kI = Ar(),
      GI = rl(),
      UI = al(),
      sl = function (e) {
        return function (t, r, n) {
          var i = kI(t),
            o = UI(i),
            a = GI(n, o),
            u;
          if (e && r != r) {
            for (; o > a; ) if (((u = i[a++]), u != u)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    ul.exports = { includes: sl(!0), indexOf: sl(!1) };
  });
  var wo = c((iH, ll) => {
    var VI = Ye(),
      Io = _t(),
      WI = Ar(),
      HI = To().indexOf,
      BI = _n(),
      cl = VI([].push);
    ll.exports = function (e, t) {
      var r = WI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Io(BI, o) && Io(r, o) && cl(i, o);
      for (; t.length > n; ) Io(r, (o = t[n++])) && (~HI(i, o) || cl(i, o));
      return i;
    };
  });
  var wn = c((oH, fl) => {
    fl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var pl = c((dl) => {
    var XI = wo(),
      jI = wn(),
      zI = jI.concat("length", "prototype");
    dl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return XI(t, zI);
      };
  });
  var gl = c((vl) => {
    vl.f = Object.getOwnPropertySymbols;
  });
  var ml = c((uH, hl) => {
    var KI = xr(),
      YI = Ye(),
      $I = pl(),
      QI = gl(),
      ZI = Sr(),
      JI = YI([].concat);
    hl.exports =
      KI("Reflect", "ownKeys") ||
      function (t) {
        var r = $I.f(ZI(t)),
          n = QI.f;
        return n ? JI(r, n(t)) : r;
      };
  });
  var yl = c((cH, El) => {
    var ew = _t(),
      tw = ml(),
      rw = co(),
      nw = Cr();
    El.exports = function (e, t) {
      for (var r = tw(t), n = nw.f, i = rw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ew(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var _l = c((lH, bl) => {
    var iw = jt(),
      ow = at(),
      aw = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = uw[sw(e)];
        return r == lw ? !0 : r == cw ? !1 : ow(t) ? iw(t) : !!t;
      },
      sw = (Lr.normalize = function (e) {
        return String(e).replace(aw, ".").toLowerCase();
      }),
      uw = (Lr.data = {}),
      cw = (Lr.NATIVE = "N"),
      lw = (Lr.POLYFILL = "P");
    bl.exports = Lr;
  });
  var Il = c((fH, Tl) => {
    var Oo = Ee(),
      fw = co().f,
      dw = bn(),
      pw = Jc(),
      vw = En(),
      gw = yl(),
      hw = _l();
    Tl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        u,
        s,
        d,
        y;
      if (
        (n
          ? (a = Oo)
          : i
          ? (a = Oo[r] || vw(r, {}))
          : (a = (Oo[r] || {}).prototype),
        a)
      )
        for (u in t) {
          if (
            ((d = t[u]),
            e.noTargetGet ? ((y = fw(a, u)), (s = y && y.value)) : (s = a[u]),
            (o = hw(n ? u : r + (i ? "." : "#") + u, e.forced)),
            !o && s !== void 0)
          ) {
            if (typeof d == typeof s) continue;
            gw(d, s);
          }
          (e.sham || (s && s.sham)) && dw(d, "sham", !0), pw(a, u, d, e);
        }
    };
  });
  var Ol = c((dH, wl) => {
    var mw = wo(),
      Ew = wn();
    wl.exports =
      Object.keys ||
      function (t) {
        return mw(t, Ew);
      };
  });
  var xl = c((pH, Al) => {
    var yw = Nt(),
      bw = Cr(),
      _w = Sr(),
      Tw = Ar(),
      Iw = Ol();
    Al.exports = yw
      ? Object.defineProperties
      : function (t, r) {
          _w(t);
          for (var n = Tw(r), i = Iw(r), o = i.length, a = 0, u; o > a; )
            bw.f(t, (u = i[a++]), n[u]);
          return t;
        };
  });
  var Cl = c((vH, Sl) => {
    var ww = xr();
    Sl.exports = ww("document", "documentElement");
  });
  var Dl = c((gH, Fl) => {
    var Ow = Sr(),
      Aw = xl(),
      Rl = wn(),
      xw = _n(),
      Sw = Cl(),
      Cw = so(),
      Rw = po(),
      Ll = ">",
      Nl = "<",
      xo = "prototype",
      So = "script",
      ql = Rw("IE_PROTO"),
      Ao = function () {},
      Ml = function (e) {
        return Nl + So + Ll + e + Nl + "/" + So + Ll;
      },
      Pl = function (e) {
        e.write(Ml("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Lw = function () {
        var e = Cw("iframe"),
          t = "java" + So + ":",
          r;
        return (
          (e.style.display = "none"),
          Sw.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Ml("document.F=Object")),
          r.close(),
          r.F
        );
      },
      On,
      An = function () {
        try {
          On = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && On
              ? Pl(On)
              : Lw()
            : Pl(On);
        for (var e = Rl.length; e--; ) delete An[xo][Rl[e]];
        return An();
      };
    xw[ql] = !0;
    Fl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Ao[xo] = Ow(t)), (n = new Ao()), (Ao[xo] = null), (n[ql] = t))
            : (n = An()),
          r === void 0 ? n : Aw(n, r)
        );
      };
  });
  var Gl = c((hH, kl) => {
    var Nw = io(),
      Pw = Dl(),
      qw = Cr(),
      Co = Nw("unscopables"),
      Ro = Array.prototype;
    Ro[Co] == null && qw.f(Ro, Co, { configurable: !0, value: Pw(null) });
    kl.exports = function (e) {
      Ro[Co][e] = !0;
    };
  });
  var Ul = c(() => {
    "use strict";
    var Mw = Il(),
      Fw = To().includes,
      Dw = Gl();
    Mw(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return Fw(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Dw("includes");
  });
  var Wl = c((yH, Vl) => {
    var kw = Ee(),
      Gw = Ye();
    Vl.exports = function (e, t) {
      return Gw(kw[e].prototype[t]);
    };
  });
  var Bl = c((bH, Hl) => {
    Ul();
    var Uw = Wl();
    Hl.exports = Uw("Array", "includes");
  });
  var jl = c((_H, Xl) => {
    var Vw = Bl();
    Xl.exports = Vw;
  });
  var Kl = c((TH, zl) => {
    var Ww = jl();
    zl.exports = Ww;
  });
  var Lo = c((IH, Yl) => {
    var Hw =
      typeof global == "object" && global && global.Object === Object && global;
    Yl.exports = Hw;
  });
  var Qe = c((wH, $l) => {
    var Bw = Lo(),
      Xw = typeof self == "object" && self && self.Object === Object && self,
      jw = Bw || Xw || Function("return this")();
    $l.exports = jw;
  });
  var Yt = c((OH, Ql) => {
    var zw = Qe(),
      Kw = zw.Symbol;
    Ql.exports = Kw;
  });
  var tf = c((AH, ef) => {
    var Zl = Yt(),
      Jl = Object.prototype,
      Yw = Jl.hasOwnProperty,
      $w = Jl.toString,
      Nr = Zl ? Zl.toStringTag : void 0;
    function Qw(e) {
      var t = Yw.call(e, Nr),
        r = e[Nr];
      try {
        e[Nr] = void 0;
        var n = !0;
      } catch {}
      var i = $w.call(e);
      return n && (t ? (e[Nr] = r) : delete e[Nr]), i;
    }
    ef.exports = Qw;
  });
  var nf = c((xH, rf) => {
    var Zw = Object.prototype,
      Jw = Zw.toString;
    function e0(e) {
      return Jw.call(e);
    }
    rf.exports = e0;
  });
  var It = c((SH, sf) => {
    var of = Yt(),
      t0 = tf(),
      r0 = nf(),
      n0 = "[object Null]",
      i0 = "[object Undefined]",
      af = of ? of.toStringTag : void 0;
    function o0(e) {
      return e == null
        ? e === void 0
          ? i0
          : n0
        : af && af in Object(e)
        ? t0(e)
        : r0(e);
    }
    sf.exports = o0;
  });
  var No = c((CH, uf) => {
    function a0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    uf.exports = a0;
  });
  var Po = c((RH, cf) => {
    var s0 = No(),
      u0 = s0(Object.getPrototypeOf, Object);
    cf.exports = u0;
  });
  var vt = c((LH, lf) => {
    function c0(e) {
      return e != null && typeof e == "object";
    }
    lf.exports = c0;
  });
  var qo = c((NH, df) => {
    var l0 = It(),
      f0 = Po(),
      d0 = vt(),
      p0 = "[object Object]",
      v0 = Function.prototype,
      g0 = Object.prototype,
      ff = v0.toString,
      h0 = g0.hasOwnProperty,
      m0 = ff.call(Object);
    function E0(e) {
      if (!d0(e) || l0(e) != p0) return !1;
      var t = f0(e);
      if (t === null) return !0;
      var r = h0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ff.call(r) == m0;
    }
    df.exports = E0;
  });
  var pf = c((Mo) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    Mo.default = y0;
    function y0(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var vf = c((Do, Fo) => {
    "use strict";
    Object.defineProperty(Do, "__esModule", { value: !0 });
    var b0 = pf(),
      _0 = T0(b0);
    function T0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var $t;
    typeof self < "u"
      ? ($t = self)
      : typeof window < "u"
      ? ($t = window)
      : typeof global < "u"
      ? ($t = global)
      : typeof Fo < "u"
      ? ($t = Fo)
      : ($t = Function("return this")());
    var I0 = (0, _0.default)($t);
    Do.default = I0;
  });
  var ko = c((Pr) => {
    "use strict";
    Pr.__esModule = !0;
    Pr.ActionTypes = void 0;
    Pr.default = Ef;
    var w0 = qo(),
      O0 = mf(w0),
      A0 = vf(),
      gf = mf(A0);
    function mf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var hf = (Pr.ActionTypes = { INIT: "@@redux/INIT" });
    function Ef(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(Ef)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function d() {
        u === a && (u = a.slice());
      }
      function y() {
        return o;
      }
      function v(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          d(),
          u.push(I),
          function () {
            if (C) {
              (C = !1), d();
              var P = u.indexOf(I);
              u.splice(P, 1);
            }
          }
        );
      }
      function g(I) {
        if (!(0, O0.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, I));
        } finally {
          s = !1;
        }
        for (var C = (a = u), w = 0; w < C.length; w++) C[w]();
        return I;
      }
      function E(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), g({ type: hf.INIT });
      }
      function O() {
        var I,
          C = v;
        return (
          (I = {
            subscribe: function (P) {
              if (typeof P != "object")
                throw new TypeError("Expected the observer to be an object.");
              function R() {
                P.next && P.next(y());
              }
              R();
              var M = C(R);
              return { unsubscribe: M };
            },
          }),
          (I[gf.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        g({ type: hf.INIT }),
        (n = { dispatch: g, subscribe: v, getState: y, replaceReducer: E }),
        (n[gf.default] = O),
        n
      );
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = x0;
    function x0(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var _f = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = N0;
    var yf = ko(),
      S0 = qo(),
      FH = bf(S0),
      C0 = Uo(),
      DH = bf(C0);
    function bf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function R0(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function L0(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: yf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                yf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function N0(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        L0(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (u) throw u;
        if (!1) var v;
        for (var g = !1, E = {}, O = 0; O < o.length; O++) {
          var I = o[O],
            C = r[I],
            w = d[I],
            P = C(w, y);
          if (typeof P > "u") {
            var R = R0(I, y);
            throw new Error(R);
          }
          (E[I] = P), (g = g || P !== w);
        }
        return g ? E : d;
      };
    }
  });
  var If = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = P0;
    function Tf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function P0(e, t) {
      if (typeof e == "function") return Tf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Tf(a, t));
      }
      return n;
    }
  });
  var Bo = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = q0;
    function q0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var wf = c((Xo) => {
    "use strict";
    Xo.__esModule = !0;
    var M0 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Xo.default = G0;
    var F0 = Bo(),
      D0 = k0(F0);
    function k0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function G0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            d = [],
            y = {
              getState: u.getState,
              dispatch: function (g) {
                return s(g);
              },
            };
          return (
            (d = t.map(function (v) {
              return v(y);
            })),
            (s = D0.default.apply(void 0, d)(u.dispatch)),
            M0({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var jo = c((He) => {
    "use strict";
    He.__esModule = !0;
    He.compose =
      He.applyMiddleware =
      He.bindActionCreators =
      He.combineReducers =
      He.createStore =
        void 0;
    var U0 = ko(),
      V0 = Qt(U0),
      W0 = _f(),
      H0 = Qt(W0),
      B0 = If(),
      X0 = Qt(B0),
      j0 = wf(),
      z0 = Qt(j0),
      K0 = Bo(),
      Y0 = Qt(K0),
      $0 = Uo(),
      WH = Qt($0);
    function Qt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    He.createStore = V0.default;
    He.combineReducers = H0.default;
    He.bindActionCreators = X0.default;
    He.applyMiddleware = z0.default;
    He.compose = Y0.default;
  });
  var Ze,
    zo,
    st,
    Q0,
    Z0,
    xn,
    J0,
    Ko = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (zo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Q0 = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Z0 = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (xn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (J0 = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ge,
    eO,
    Sn = me(() => {
      "use strict";
      (Ge = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (eO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var tO,
    Of = me(() => {
      "use strict";
      tO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    Yo,
    Af = me(() => {
      "use strict";
      Sn();
      ({
        TRANSFORM_MOVE: rO,
        TRANSFORM_SCALE: nO,
        TRANSFORM_ROTATE: iO,
        TRANSFORM_SKEW: oO,
        STYLE_SIZE: aO,
        STYLE_FILTER: sO,
        STYLE_FONT_VARIATION: uO,
      } = Ge),
        (Yo = {
          [rO]: !0,
          [nO]: !0,
          [iO]: !0,
          [oO]: !0,
          [aO]: !0,
          [sO]: !0,
          [uO]: !0,
        });
    });
  var Ie = {};
  ke(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => OO,
    IX2_ANIMATION_FRAME_CHANGED: () => yO,
    IX2_CLEAR_REQUESTED: () => hO,
    IX2_ELEMENT_STATE_CHANGED: () => wO,
    IX2_EVENT_LISTENER_ADDED: () => mO,
    IX2_EVENT_STATE_CHANGED: () => EO,
    IX2_INSTANCE_ADDED: () => _O,
    IX2_INSTANCE_REMOVED: () => IO,
    IX2_INSTANCE_STARTED: () => TO,
    IX2_MEDIA_QUERIES_DEFINED: () => xO,
    IX2_PARAMETER_CHANGED: () => bO,
    IX2_PLAYBACK_REQUESTED: () => vO,
    IX2_PREVIEW_REQUESTED: () => pO,
    IX2_RAW_DATA_IMPORTED: () => cO,
    IX2_SESSION_INITIALIZED: () => lO,
    IX2_SESSION_STARTED: () => fO,
    IX2_SESSION_STOPPED: () => dO,
    IX2_STOP_REQUESTED: () => gO,
    IX2_TEST_FRAME_RENDERED: () => SO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => AO,
  });
  var cO,
    lO,
    fO,
    dO,
    pO,
    vO,
    gO,
    hO,
    mO,
    EO,
    yO,
    bO,
    _O,
    TO,
    IO,
    wO,
    OO,
    AO,
    xO,
    SO,
    xf = me(() => {
      "use strict";
      (cO = "IX2_RAW_DATA_IMPORTED"),
        (lO = "IX2_SESSION_INITIALIZED"),
        (fO = "IX2_SESSION_STARTED"),
        (dO = "IX2_SESSION_STOPPED"),
        (pO = "IX2_PREVIEW_REQUESTED"),
        (vO = "IX2_PLAYBACK_REQUESTED"),
        (gO = "IX2_STOP_REQUESTED"),
        (hO = "IX2_CLEAR_REQUESTED"),
        (mO = "IX2_EVENT_LISTENER_ADDED"),
        (EO = "IX2_EVENT_STATE_CHANGED"),
        (yO = "IX2_ANIMATION_FRAME_CHANGED"),
        (bO = "IX2_PARAMETER_CHANGED"),
        (_O = "IX2_INSTANCE_ADDED"),
        (TO = "IX2_INSTANCE_STARTED"),
        (IO = "IX2_INSTANCE_REMOVED"),
        (wO = "IX2_ELEMENT_STATE_CHANGED"),
        (OO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (AO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (xO = "IX2_MEDIA_QUERIES_DEFINED"),
        (SO = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  ke(Ce, {
    ABSTRACT_NODE: () => AA,
    AUTO: () => gA,
    BACKGROUND: () => cA,
    BACKGROUND_COLOR: () => uA,
    BAR_DELIMITER: () => EA,
    BORDER_COLOR: () => lA,
    BOUNDARY_SELECTOR: () => PO,
    CHILDREN: () => yA,
    COLON_DELIMITER: () => mA,
    COLOR: () => fA,
    COMMA_DELIMITER: () => hA,
    CONFIG_UNIT: () => VO,
    CONFIG_VALUE: () => DO,
    CONFIG_X_UNIT: () => kO,
    CONFIG_X_VALUE: () => qO,
    CONFIG_Y_UNIT: () => GO,
    CONFIG_Y_VALUE: () => MO,
    CONFIG_Z_UNIT: () => UO,
    CONFIG_Z_VALUE: () => FO,
    DISPLAY: () => dA,
    FILTER: () => iA,
    FLEX: () => pA,
    FONT_VARIATION_SETTINGS: () => oA,
    HEIGHT: () => sA,
    HTML_ELEMENT: () => wA,
    IMMEDIATE_CHILDREN: () => bA,
    IX2_ID_DELIMITER: () => CO,
    OPACITY: () => nA,
    PARENT: () => TA,
    PLAIN_OBJECT: () => OA,
    PRESERVE_3D: () => IA,
    RENDER_GENERAL: () => SA,
    RENDER_PLUGIN: () => RA,
    RENDER_STYLE: () => CA,
    RENDER_TRANSFORM: () => xA,
    ROTATE_X: () => QO,
    ROTATE_Y: () => ZO,
    ROTATE_Z: () => JO,
    SCALE_3D: () => $O,
    SCALE_X: () => zO,
    SCALE_Y: () => KO,
    SCALE_Z: () => YO,
    SIBLINGS: () => _A,
    SKEW: () => eA,
    SKEW_X: () => tA,
    SKEW_Y: () => rA,
    TRANSFORM: () => WO,
    TRANSLATE_3D: () => jO,
    TRANSLATE_X: () => HO,
    TRANSLATE_Y: () => BO,
    TRANSLATE_Z: () => XO,
    WF_PAGE: () => RO,
    WIDTH: () => aA,
    WILL_CHANGE: () => vA,
    W_MOD_IX: () => NO,
    W_MOD_JS: () => LO,
  });
  var CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    MO,
    FO,
    DO,
    kO,
    GO,
    UO,
    VO,
    WO,
    HO,
    BO,
    XO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    EA,
    yA,
    bA,
    _A,
    TA,
    IA,
    wA,
    OA,
    AA,
    xA,
    SA,
    CA,
    RA,
    Sf = me(() => {
      "use strict";
      (CO = "|"),
        (RO = "data-wf-page"),
        (LO = "w-mod-js"),
        (NO = "w-mod-ix"),
        (PO = ".w-dyn-item"),
        (qO = "xValue"),
        (MO = "yValue"),
        (FO = "zValue"),
        (DO = "value"),
        (kO = "xUnit"),
        (GO = "yUnit"),
        (UO = "zUnit"),
        (VO = "unit"),
        (WO = "transform"),
        (HO = "translateX"),
        (BO = "translateY"),
        (XO = "translateZ"),
        (jO = "translate3d"),
        (zO = "scaleX"),
        (KO = "scaleY"),
        (YO = "scaleZ"),
        ($O = "scale3d"),
        (QO = "rotateX"),
        (ZO = "rotateY"),
        (JO = "rotateZ"),
        (eA = "skew"),
        (tA = "skewX"),
        (rA = "skewY"),
        (nA = "opacity"),
        (iA = "filter"),
        (oA = "font-variation-settings"),
        (aA = "width"),
        (sA = "height"),
        (uA = "backgroundColor"),
        (cA = "background"),
        (lA = "borderColor"),
        (fA = "color"),
        (dA = "display"),
        (pA = "flex"),
        (vA = "willChange"),
        (gA = "AUTO"),
        (hA = ","),
        (mA = ":"),
        (EA = "|"),
        (yA = "CHILDREN"),
        (bA = "IMMEDIATE_CHILDREN"),
        (_A = "SIBLINGS"),
        (TA = "PARENT"),
        (IA = "preserve-3d"),
        (wA = "HTML_ELEMENT"),
        (OA = "PLAIN_OBJECT"),
        (AA = "ABSTRACT_NODE"),
        (xA = "RENDER_TRANSFORM"),
        (SA = "RENDER_GENERAL"),
        (CA = "RENDER_STYLE"),
        (RA = "RENDER_PLUGIN");
    });
  var Cf = {};
  ke(Cf, {
    ActionAppliesTo: () => eO,
    ActionTypeConsts: () => Ge,
    EventAppliesTo: () => zo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => Q0,
    EventLimitAffectedElements: () => Z0,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => tO,
    QuickEffectDirectionConsts: () => J0,
    QuickEffectIds: () => xn,
    ReducedMotionTypes: () => Yo,
  });
  var Ue = me(() => {
    "use strict";
    Ko();
    Sn();
    Of();
    Af();
    xf();
    Sf();
    Sn();
    Ko();
  });
  var LA,
    Rf,
    Lf = me(() => {
      "use strict";
      Ue();
      ({ IX2_RAW_DATA_IMPORTED: LA } = Ie),
        (Rf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case LA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Zt = c((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var NA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    be.clone = Rn;
    be.addLast = qf;
    be.addFirst = Mf;
    be.removeLast = Ff;
    be.removeFirst = Df;
    be.insert = kf;
    be.removeAt = Gf;
    be.replaceAt = Uf;
    be.getIn = Ln;
    be.set = Nn;
    be.setIn = Pn;
    be.update = Wf;
    be.updateIn = Hf;
    be.merge = Bf;
    be.mergeDeep = Xf;
    be.mergeIn = jf;
    be.omit = zf;
    be.addDefaults = Kf;
    var Nf = "INVALID_ARGS";
    function Pf(e) {
      throw new Error(e);
    }
    function $o(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var PA = {}.hasOwnProperty;
    function Rn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ve(e, t, r) {
      var n = r;
      n == null && Pf(Nf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var d = a[s];
        if (d != null) {
          var y = $o(d);
          if (y.length)
            for (var v = 0; v <= y.length; v++) {
              var g = y[v];
              if (!(e && n[g] !== void 0)) {
                var E = d[g];
                t && Cn(n[g]) && Cn(E) && (E = Ve(e, t, n[g], E)),
                  !(E === void 0 || E === n[g]) &&
                    (i || ((i = !0), (n = Rn(n))), (n[g] = E));
              }
            }
        }
      }
      return n;
    }
    function Cn(e) {
      var t = typeof e > "u" ? "undefined" : NA(e);
      return e != null && (t === "object" || t === "function");
    }
    function qf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Mf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ff(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Df(e) {
      return e.length ? e.slice(1) : e;
    }
    function kf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Gf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Uf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Ln(e, t) {
      if ((!Array.isArray(t) && Pf(Nf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Nn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Rn(i);
      return (o[t] = r), o;
    }
    function Vf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Cn(e) && Cn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Vf(a, t, r, n + 1);
      }
      return Nn(e, o, i);
    }
    function Pn(e, t, r) {
      return t.length ? Vf(e, t, r, 0) : r;
    }
    function Wf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Nn(e, t, i);
    }
    function Hf(e, t, r) {
      var n = Ln(e, t),
        i = r(n);
      return Pn(e, t, i);
    }
    function Bf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : Ve(!1, !1, e, t, r, n, i, o);
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : Ve(!1, !0, e, t, r, n, i, o);
    }
    function jf(e, t, r, n, i, o, a) {
      var u = Ln(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          d = arguments.length,
          y = Array(d > 7 ? d - 7 : 0),
          v = 7;
        v < d;
        v++
      )
        y[v - 7] = arguments[v];
      return (
        y.length
          ? (s = Ve.call.apply(Ve, [null, !1, !1, u, r, n, i, o, a].concat(y)))
          : (s = Ve(!1, !1, u, r, n, i, o, a)),
        Pn(e, t, s)
      );
    }
    function zf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (PA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = $o(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function Kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : Ve(!0, !1, e, t, r, n, i, o);
    }
    var qA = {
      clone: Rn,
      addLast: qf,
      addFirst: Mf,
      removeLast: Ff,
      removeFirst: Df,
      insert: kf,
      removeAt: Gf,
      replaceAt: Uf,
      getIn: Ln,
      set: Nn,
      setIn: Pn,
      update: Wf,
      updateIn: Hf,
      merge: Bf,
      mergeDeep: Xf,
      mergeIn: jf,
      omit: zf,
      addDefaults: Kf,
    };
    be.default = qA;
  });
  var $f,
    MA,
    FA,
    DA,
    kA,
    GA,
    Yf,
    Qf,
    Zf = me(() => {
      "use strict";
      Ue();
      ($f = le(Zt())),
        ({
          IX2_PREVIEW_REQUESTED: MA,
          IX2_PLAYBACK_REQUESTED: FA,
          IX2_STOP_REQUESTED: DA,
          IX2_CLEAR_REQUESTED: kA,
        } = Ie),
        (GA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Yf = Object.create(null, {
          [MA]: { value: "preview" },
          [FA]: { value: "playback" },
          [DA]: { value: "stop" },
          [kA]: { value: "clear" },
        })),
        (Qf = (e = GA, t) => {
          if (t.type in Yf) {
            let r = [Yf[t.type]];
            return (0, $f.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    UA,
    VA,
    WA,
    HA,
    BA,
    XA,
    jA,
    zA,
    KA,
    YA,
    Jf,
    $A,
    ed,
    td = me(() => {
      "use strict";
      Ue();
      (Pe = le(Zt())),
        ({
          IX2_SESSION_INITIALIZED: UA,
          IX2_SESSION_STARTED: VA,
          IX2_TEST_FRAME_RENDERED: WA,
          IX2_SESSION_STOPPED: HA,
          IX2_EVENT_LISTENER_ADDED: BA,
          IX2_EVENT_STATE_CHANGED: XA,
          IX2_ANIMATION_FRAME_CHANGED: jA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: zA,
          IX2_VIEWPORT_WIDTH_CHANGED: KA,
          IX2_MEDIA_QUERIES_DEFINED: YA,
        } = Ie),
        (Jf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        ($A = 20),
        (ed = (e = Jf, t) => {
          switch (t.type) {
            case UA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case VA:
              return (0, Pe.set)(e, "active", !0);
            case WA: {
              let {
                payload: { step: r = $A },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case HA:
              return Jf;
            case jA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case BA: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case XA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case zA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case KA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: d } = n[a];
                if (r >= s && r <= d) {
                  o = u;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case YA:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var nd = c((uB, rd) => {
    function QA() {
      (this.__data__ = []), (this.size = 0);
    }
    rd.exports = QA;
  });
  var qn = c((cB, id) => {
    function ZA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    id.exports = ZA;
  });
  var qr = c((lB, od) => {
    var JA = qn();
    function ex(e, t) {
      for (var r = e.length; r--; ) if (JA(e[r][0], t)) return r;
      return -1;
    }
    od.exports = ex;
  });
  var sd = c((fB, ad) => {
    var tx = qr(),
      rx = Array.prototype,
      nx = rx.splice;
    function ix(e) {
      var t = this.__data__,
        r = tx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : nx.call(t, r, 1), --this.size, !0;
    }
    ad.exports = ix;
  });
  var cd = c((dB, ud) => {
    var ox = qr();
    function ax(e) {
      var t = this.__data__,
        r = ox(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ud.exports = ax;
  });
  var fd = c((pB, ld) => {
    var sx = qr();
    function ux(e) {
      return sx(this.__data__, e) > -1;
    }
    ld.exports = ux;
  });
  var pd = c((vB, dd) => {
    var cx = qr();
    function lx(e, t) {
      var r = this.__data__,
        n = cx(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    dd.exports = lx;
  });
  var Mr = c((gB, vd) => {
    var fx = nd(),
      dx = sd(),
      px = cd(),
      vx = fd(),
      gx = pd();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = fx;
    Jt.prototype.delete = dx;
    Jt.prototype.get = px;
    Jt.prototype.has = vx;
    Jt.prototype.set = gx;
    vd.exports = Jt;
  });
  var hd = c((hB, gd) => {
    var hx = Mr();
    function mx() {
      (this.__data__ = new hx()), (this.size = 0);
    }
    gd.exports = mx;
  });
  var Ed = c((mB, md) => {
    function Ex(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    md.exports = Ex;
  });
  var bd = c((EB, yd) => {
    function yx(e) {
      return this.__data__.get(e);
    }
    yd.exports = yx;
  });
  var Td = c((yB, _d) => {
    function bx(e) {
      return this.__data__.has(e);
    }
    _d.exports = bx;
  });
  var ut = c((bB, Id) => {
    function _x(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Id.exports = _x;
  });
  var Qo = c((_B, wd) => {
    var Tx = It(),
      Ix = ut(),
      wx = "[object AsyncFunction]",
      Ox = "[object Function]",
      Ax = "[object GeneratorFunction]",
      xx = "[object Proxy]";
    function Sx(e) {
      if (!Ix(e)) return !1;
      var t = Tx(e);
      return t == Ox || t == Ax || t == wx || t == xx;
    }
    wd.exports = Sx;
  });
  var Ad = c((TB, Od) => {
    var Cx = Qe(),
      Rx = Cx["__core-js_shared__"];
    Od.exports = Rx;
  });
  var Cd = c((IB, Sd) => {
    var Zo = Ad(),
      xd = (function () {
        var e = /[^.]+$/.exec((Zo && Zo.keys && Zo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Lx(e) {
      return !!xd && xd in e;
    }
    Sd.exports = Lx;
  });
  var Jo = c((wB, Rd) => {
    var Nx = Function.prototype,
      Px = Nx.toString;
    function qx(e) {
      if (e != null) {
        try {
          return Px.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Rd.exports = qx;
  });
  var Nd = c((OB, Ld) => {
    var Mx = Qo(),
      Fx = Cd(),
      Dx = ut(),
      kx = Jo(),
      Gx = /[\\^$.*+?()[\]{}|]/g,
      Ux = /^\[object .+?Constructor\]$/,
      Vx = Function.prototype,
      Wx = Object.prototype,
      Hx = Vx.toString,
      Bx = Wx.hasOwnProperty,
      Xx = RegExp(
        "^" +
          Hx.call(Bx)
            .replace(Gx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function jx(e) {
      if (!Dx(e) || Fx(e)) return !1;
      var t = Mx(e) ? Xx : Ux;
      return t.test(kx(e));
    }
    Ld.exports = jx;
  });
  var qd = c((AB, Pd) => {
    function zx(e, t) {
      return e?.[t];
    }
    Pd.exports = zx;
  });
  var wt = c((xB, Md) => {
    var Kx = Nd(),
      Yx = qd();
    function $x(e, t) {
      var r = Yx(e, t);
      return Kx(r) ? r : void 0;
    }
    Md.exports = $x;
  });
  var Mn = c((SB, Fd) => {
    var Qx = wt(),
      Zx = Qe(),
      Jx = Qx(Zx, "Map");
    Fd.exports = Jx;
  });
  var Fr = c((CB, Dd) => {
    var eS = wt(),
      tS = eS(Object, "create");
    Dd.exports = tS;
  });
  var Ud = c((RB, Gd) => {
    var kd = Fr();
    function rS() {
      (this.__data__ = kd ? kd(null) : {}), (this.size = 0);
    }
    Gd.exports = rS;
  });
  var Wd = c((LB, Vd) => {
    function nS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Vd.exports = nS;
  });
  var Bd = c((NB, Hd) => {
    var iS = Fr(),
      oS = "__lodash_hash_undefined__",
      aS = Object.prototype,
      sS = aS.hasOwnProperty;
    function uS(e) {
      var t = this.__data__;
      if (iS) {
        var r = t[e];
        return r === oS ? void 0 : r;
      }
      return sS.call(t, e) ? t[e] : void 0;
    }
    Hd.exports = uS;
  });
  var jd = c((PB, Xd) => {
    var cS = Fr(),
      lS = Object.prototype,
      fS = lS.hasOwnProperty;
    function dS(e) {
      var t = this.__data__;
      return cS ? t[e] !== void 0 : fS.call(t, e);
    }
    Xd.exports = dS;
  });
  var Kd = c((qB, zd) => {
    var pS = Fr(),
      vS = "__lodash_hash_undefined__";
    function gS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = pS && t === void 0 ? vS : t),
        this
      );
    }
    zd.exports = gS;
  });
  var $d = c((MB, Yd) => {
    var hS = Ud(),
      mS = Wd(),
      ES = Bd(),
      yS = jd(),
      bS = Kd();
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = hS;
    er.prototype.delete = mS;
    er.prototype.get = ES;
    er.prototype.has = yS;
    er.prototype.set = bS;
    Yd.exports = er;
  });
  var Jd = c((FB, Zd) => {
    var Qd = $d(),
      _S = Mr(),
      TS = Mn();
    function IS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Qd(),
          map: new (TS || _S)(),
          string: new Qd(),
        });
    }
    Zd.exports = IS;
  });
  var tp = c((DB, ep) => {
    function wS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    ep.exports = wS;
  });
  var Dr = c((kB, rp) => {
    var OS = tp();
    function AS(e, t) {
      var r = e.__data__;
      return OS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    rp.exports = AS;
  });
  var ip = c((GB, np) => {
    var xS = Dr();
    function SS(e) {
      var t = xS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    np.exports = SS;
  });
  var ap = c((UB, op) => {
    var CS = Dr();
    function RS(e) {
      return CS(this, e).get(e);
    }
    op.exports = RS;
  });
  var up = c((VB, sp) => {
    var LS = Dr();
    function NS(e) {
      return LS(this, e).has(e);
    }
    sp.exports = NS;
  });
  var lp = c((WB, cp) => {
    var PS = Dr();
    function qS(e, t) {
      var r = PS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    cp.exports = qS;
  });
  var Fn = c((HB, fp) => {
    var MS = Jd(),
      FS = ip(),
      DS = ap(),
      kS = up(),
      GS = lp();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = MS;
    tr.prototype.delete = FS;
    tr.prototype.get = DS;
    tr.prototype.has = kS;
    tr.prototype.set = GS;
    fp.exports = tr;
  });
  var pp = c((BB, dp) => {
    var US = Mr(),
      VS = Mn(),
      WS = Fn(),
      HS = 200;
    function BS(e, t) {
      var r = this.__data__;
      if (r instanceof US) {
        var n = r.__data__;
        if (!VS || n.length < HS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new WS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    dp.exports = BS;
  });
  var ea = c((XB, vp) => {
    var XS = Mr(),
      jS = hd(),
      zS = Ed(),
      KS = bd(),
      YS = Td(),
      $S = pp();
    function rr(e) {
      var t = (this.__data__ = new XS(e));
      this.size = t.size;
    }
    rr.prototype.clear = jS;
    rr.prototype.delete = zS;
    rr.prototype.get = KS;
    rr.prototype.has = YS;
    rr.prototype.set = $S;
    vp.exports = rr;
  });
  var hp = c((jB, gp) => {
    var QS = "__lodash_hash_undefined__";
    function ZS(e) {
      return this.__data__.set(e, QS), this;
    }
    gp.exports = ZS;
  });
  var Ep = c((zB, mp) => {
    function JS(e) {
      return this.__data__.has(e);
    }
    mp.exports = JS;
  });
  var bp = c((KB, yp) => {
    var eC = Fn(),
      tC = hp(),
      rC = Ep();
    function Dn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new eC(); ++t < r; ) this.add(e[t]);
    }
    Dn.prototype.add = Dn.prototype.push = tC;
    Dn.prototype.has = rC;
    yp.exports = Dn;
  });
  var Tp = c((YB, _p) => {
    function nC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    _p.exports = nC;
  });
  var wp = c(($B, Ip) => {
    function iC(e, t) {
      return e.has(t);
    }
    Ip.exports = iC;
  });
  var ta = c((QB, Op) => {
    var oC = bp(),
      aC = Tp(),
      sC = wp(),
      uC = 1,
      cC = 2;
    function lC(e, t, r, n, i, o) {
      var a = r & uC,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var d = o.get(e),
        y = o.get(t);
      if (d && y) return d == t && y == e;
      var v = -1,
        g = !0,
        E = r & cC ? new oC() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < u; ) {
        var O = e[v],
          I = t[v];
        if (n) var C = a ? n(I, O, v, t, e, o) : n(O, I, v, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          g = !1;
          break;
        }
        if (E) {
          if (
            !aC(t, function (w, P) {
              if (!sC(E, P) && (O === w || i(O, w, r, n, o))) return E.push(P);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(O === I || i(O, I, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    Op.exports = lC;
  });
  var xp = c((ZB, Ap) => {
    var fC = Qe(),
      dC = fC.Uint8Array;
    Ap.exports = dC;
  });
  var Cp = c((JB, Sp) => {
    function pC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Sp.exports = pC;
  });
  var Lp = c((e5, Rp) => {
    function vC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Rp.exports = vC;
  });
  var Fp = c((t5, Mp) => {
    var Np = Yt(),
      Pp = xp(),
      gC = qn(),
      hC = ta(),
      mC = Cp(),
      EC = Lp(),
      yC = 1,
      bC = 2,
      _C = "[object Boolean]",
      TC = "[object Date]",
      IC = "[object Error]",
      wC = "[object Map]",
      OC = "[object Number]",
      AC = "[object RegExp]",
      xC = "[object Set]",
      SC = "[object String]",
      CC = "[object Symbol]",
      RC = "[object ArrayBuffer]",
      LC = "[object DataView]",
      qp = Np ? Np.prototype : void 0,
      ra = qp ? qp.valueOf : void 0;
    function NC(e, t, r, n, i, o, a) {
      switch (r) {
        case LC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case RC:
          return !(e.byteLength != t.byteLength || !o(new Pp(e), new Pp(t)));
        case _C:
        case TC:
        case OC:
          return gC(+e, +t);
        case IC:
          return e.name == t.name && e.message == t.message;
        case AC:
        case SC:
          return e == t + "";
        case wC:
          var u = mC;
        case xC:
          var s = n & yC;
          if ((u || (u = EC), e.size != t.size && !s)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= bC), a.set(e, t);
          var y = hC(u(e), u(t), n, i, o, a);
          return a.delete(e), y;
        case CC:
          if (ra) return ra.call(e) == ra.call(t);
      }
      return !1;
    }
    Mp.exports = NC;
  });
  var kn = c((r5, Dp) => {
    function PC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Dp.exports = PC;
  });
  var we = c((n5, kp) => {
    var qC = Array.isArray;
    kp.exports = qC;
  });
  var na = c((i5, Gp) => {
    var MC = kn(),
      FC = we();
    function DC(e, t, r) {
      var n = t(e);
      return FC(e) ? n : MC(n, r(e));
    }
    Gp.exports = DC;
  });
  var Vp = c((o5, Up) => {
    function kC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Up.exports = kC;
  });
  var ia = c((a5, Wp) => {
    function GC() {
      return [];
    }
    Wp.exports = GC;
  });
  var oa = c((s5, Bp) => {
    var UC = Vp(),
      VC = ia(),
      WC = Object.prototype,
      HC = WC.propertyIsEnumerable,
      Hp = Object.getOwnPropertySymbols,
      BC = Hp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                UC(Hp(e), function (t) {
                  return HC.call(e, t);
                }));
          }
        : VC;
    Bp.exports = BC;
  });
  var jp = c((u5, Xp) => {
    function XC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Xp.exports = XC;
  });
  var Kp = c((c5, zp) => {
    var jC = It(),
      zC = vt(),
      KC = "[object Arguments]";
    function YC(e) {
      return zC(e) && jC(e) == KC;
    }
    zp.exports = YC;
  });
  var kr = c((l5, Qp) => {
    var Yp = Kp(),
      $C = vt(),
      $p = Object.prototype,
      QC = $p.hasOwnProperty,
      ZC = $p.propertyIsEnumerable,
      JC = Yp(
        (function () {
          return arguments;
        })()
      )
        ? Yp
        : function (e) {
            return $C(e) && QC.call(e, "callee") && !ZC.call(e, "callee");
          };
    Qp.exports = JC;
  });
  var Jp = c((f5, Zp) => {
    function eR() {
      return !1;
    }
    Zp.exports = eR;
  });
  var Gn = c((Gr, nr) => {
    var tR = Qe(),
      rR = Jp(),
      rv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      ev = rv && typeof nr == "object" && nr && !nr.nodeType && nr,
      nR = ev && ev.exports === rv,
      tv = nR ? tR.Buffer : void 0,
      iR = tv ? tv.isBuffer : void 0,
      oR = iR || rR;
    nr.exports = oR;
  });
  var Un = c((d5, nv) => {
    var aR = 9007199254740991,
      sR = /^(?:0|[1-9]\d*)$/;
    function uR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? aR),
        !!t &&
          (r == "number" || (r != "symbol" && sR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    nv.exports = uR;
  });
  var Vn = c((p5, iv) => {
    var cR = 9007199254740991;
    function lR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cR;
    }
    iv.exports = lR;
  });
  var av = c((v5, ov) => {
    var fR = It(),
      dR = Vn(),
      pR = vt(),
      vR = "[object Arguments]",
      gR = "[object Array]",
      hR = "[object Boolean]",
      mR = "[object Date]",
      ER = "[object Error]",
      yR = "[object Function]",
      bR = "[object Map]",
      _R = "[object Number]",
      TR = "[object Object]",
      IR = "[object RegExp]",
      wR = "[object Set]",
      OR = "[object String]",
      AR = "[object WeakMap]",
      xR = "[object ArrayBuffer]",
      SR = "[object DataView]",
      CR = "[object Float32Array]",
      RR = "[object Float64Array]",
      LR = "[object Int8Array]",
      NR = "[object Int16Array]",
      PR = "[object Int32Array]",
      qR = "[object Uint8Array]",
      MR = "[object Uint8ClampedArray]",
      FR = "[object Uint16Array]",
      DR = "[object Uint32Array]",
      he = {};
    he[CR] =
      he[RR] =
      he[LR] =
      he[NR] =
      he[PR] =
      he[qR] =
      he[MR] =
      he[FR] =
      he[DR] =
        !0;
    he[vR] =
      he[gR] =
      he[xR] =
      he[hR] =
      he[SR] =
      he[mR] =
      he[ER] =
      he[yR] =
      he[bR] =
      he[_R] =
      he[TR] =
      he[IR] =
      he[wR] =
      he[OR] =
      he[AR] =
        !1;
    function kR(e) {
      return pR(e) && dR(e.length) && !!he[fR(e)];
    }
    ov.exports = kR;
  });
  var uv = c((g5, sv) => {
    function GR(e) {
      return function (t) {
        return e(t);
      };
    }
    sv.exports = GR;
  });
  var lv = c((Ur, ir) => {
    var UR = Lo(),
      cv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      Vr = cv && typeof ir == "object" && ir && !ir.nodeType && ir,
      VR = Vr && Vr.exports === cv,
      aa = VR && UR.process,
      WR = (function () {
        try {
          var e = Vr && Vr.require && Vr.require("util").types;
          return e || (aa && aa.binding && aa.binding("util"));
        } catch {}
      })();
    ir.exports = WR;
  });
  var Wn = c((h5, pv) => {
    var HR = av(),
      BR = uv(),
      fv = lv(),
      dv = fv && fv.isTypedArray,
      XR = dv ? BR(dv) : HR;
    pv.exports = XR;
  });
  var sa = c((m5, vv) => {
    var jR = jp(),
      zR = kr(),
      KR = we(),
      YR = Gn(),
      $R = Un(),
      QR = Wn(),
      ZR = Object.prototype,
      JR = ZR.hasOwnProperty;
    function eL(e, t) {
      var r = KR(e),
        n = !r && zR(e),
        i = !r && !n && YR(e),
        o = !r && !n && !i && QR(e),
        a = r || n || i || o,
        u = a ? jR(e.length, String) : [],
        s = u.length;
      for (var d in e)
        (t || JR.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              $R(d, s))
          ) &&
          u.push(d);
      return u;
    }
    vv.exports = eL;
  });
  var Hn = c((E5, gv) => {
    var tL = Object.prototype;
    function rL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || tL;
      return e === r;
    }
    gv.exports = rL;
  });
  var mv = c((y5, hv) => {
    var nL = No(),
      iL = nL(Object.keys, Object);
    hv.exports = iL;
  });
  var Bn = c((b5, Ev) => {
    var oL = Hn(),
      aL = mv(),
      sL = Object.prototype,
      uL = sL.hasOwnProperty;
    function cL(e) {
      if (!oL(e)) return aL(e);
      var t = [];
      for (var r in Object(e)) uL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Ev.exports = cL;
  });
  var Mt = c((_5, yv) => {
    var lL = Qo(),
      fL = Vn();
    function dL(e) {
      return e != null && fL(e.length) && !lL(e);
    }
    yv.exports = dL;
  });
  var Wr = c((T5, bv) => {
    var pL = sa(),
      vL = Bn(),
      gL = Mt();
    function hL(e) {
      return gL(e) ? pL(e) : vL(e);
    }
    bv.exports = hL;
  });
  var Tv = c((I5, _v) => {
    var mL = na(),
      EL = oa(),
      yL = Wr();
    function bL(e) {
      return mL(e, yL, EL);
    }
    _v.exports = bL;
  });
  var Ov = c((w5, wv) => {
    var Iv = Tv(),
      _L = 1,
      TL = Object.prototype,
      IL = TL.hasOwnProperty;
    function wL(e, t, r, n, i, o) {
      var a = r & _L,
        u = Iv(e),
        s = u.length,
        d = Iv(t),
        y = d.length;
      if (s != y && !a) return !1;
      for (var v = s; v--; ) {
        var g = u[v];
        if (!(a ? g in t : IL.call(t, g))) return !1;
      }
      var E = o.get(e),
        O = o.get(t);
      if (E && O) return E == t && O == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var C = a; ++v < s; ) {
        g = u[v];
        var w = e[g],
          P = t[g];
        if (n) var R = a ? n(P, w, g, t, e, o) : n(w, P, g, e, t, o);
        if (!(R === void 0 ? w === P || i(w, P, r, n, o) : R)) {
          I = !1;
          break;
        }
        C || (C = g == "constructor");
      }
      if (I && !C) {
        var M = e.constructor,
          k = t.constructor;
        M != k &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof k == "function" &&
            k instanceof k
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    wv.exports = wL;
  });
  var xv = c((O5, Av) => {
    var OL = wt(),
      AL = Qe(),
      xL = OL(AL, "DataView");
    Av.exports = xL;
  });
  var Cv = c((A5, Sv) => {
    var SL = wt(),
      CL = Qe(),
      RL = SL(CL, "Promise");
    Sv.exports = RL;
  });
  var Lv = c((x5, Rv) => {
    var LL = wt(),
      NL = Qe(),
      PL = LL(NL, "Set");
    Rv.exports = PL;
  });
  var ua = c((S5, Nv) => {
    var qL = wt(),
      ML = Qe(),
      FL = qL(ML, "WeakMap");
    Nv.exports = FL;
  });
  var Xn = c((C5, Gv) => {
    var ca = xv(),
      la = Mn(),
      fa = Cv(),
      da = Lv(),
      pa = ua(),
      kv = It(),
      or = Jo(),
      Pv = "[object Map]",
      DL = "[object Object]",
      qv = "[object Promise]",
      Mv = "[object Set]",
      Fv = "[object WeakMap]",
      Dv = "[object DataView]",
      kL = or(ca),
      GL = or(la),
      UL = or(fa),
      VL = or(da),
      WL = or(pa),
      Ft = kv;
    ((ca && Ft(new ca(new ArrayBuffer(1))) != Dv) ||
      (la && Ft(new la()) != Pv) ||
      (fa && Ft(fa.resolve()) != qv) ||
      (da && Ft(new da()) != Mv) ||
      (pa && Ft(new pa()) != Fv)) &&
      (Ft = function (e) {
        var t = kv(e),
          r = t == DL ? e.constructor : void 0,
          n = r ? or(r) : "";
        if (n)
          switch (n) {
            case kL:
              return Dv;
            case GL:
              return Pv;
            case UL:
              return qv;
            case VL:
              return Mv;
            case WL:
              return Fv;
          }
        return t;
      });
    Gv.exports = Ft;
  });
  var zv = c((R5, jv) => {
    var va = ea(),
      HL = ta(),
      BL = Fp(),
      XL = Ov(),
      Uv = Xn(),
      Vv = we(),
      Wv = Gn(),
      jL = Wn(),
      zL = 1,
      Hv = "[object Arguments]",
      Bv = "[object Array]",
      jn = "[object Object]",
      KL = Object.prototype,
      Xv = KL.hasOwnProperty;
    function YL(e, t, r, n, i, o) {
      var a = Vv(e),
        u = Vv(t),
        s = a ? Bv : Uv(e),
        d = u ? Bv : Uv(t);
      (s = s == Hv ? jn : s), (d = d == Hv ? jn : d);
      var y = s == jn,
        v = d == jn,
        g = s == d;
      if (g && Wv(e)) {
        if (!Wv(t)) return !1;
        (a = !0), (y = !1);
      }
      if (g && !y)
        return (
          o || (o = new va()),
          a || jL(e) ? HL(e, t, r, n, i, o) : BL(e, t, s, r, n, i, o)
        );
      if (!(r & zL)) {
        var E = y && Xv.call(e, "__wrapped__"),
          O = v && Xv.call(t, "__wrapped__");
        if (E || O) {
          var I = E ? e.value() : e,
            C = O ? t.value() : t;
          return o || (o = new va()), i(I, C, r, n, o);
        }
      }
      return g ? (o || (o = new va()), XL(e, t, r, n, i, o)) : !1;
    }
    jv.exports = YL;
  });
  var ga = c((L5, $v) => {
    var $L = zv(),
      Kv = vt();
    function Yv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Kv(e) && !Kv(t))
        ? e !== e && t !== t
        : $L(e, t, r, n, Yv, i);
    }
    $v.exports = Yv;
  });
  var Zv = c((N5, Qv) => {
    var QL = ea(),
      ZL = ga(),
      JL = 1,
      eN = 2;
    function tN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var s = u[0],
          d = e[s],
          y = u[1];
        if (a && u[2]) {
          if (d === void 0 && !(s in e)) return !1;
        } else {
          var v = new QL();
          if (n) var g = n(d, y, s, e, t, v);
          if (!(g === void 0 ? ZL(y, d, JL | eN, n, v) : g)) return !1;
        }
      }
      return !0;
    }
    Qv.exports = tN;
  });
  var ha = c((P5, Jv) => {
    var rN = ut();
    function nN(e) {
      return e === e && !rN(e);
    }
    Jv.exports = nN;
  });
  var tg = c((q5, eg) => {
    var iN = ha(),
      oN = Wr();
    function aN(e) {
      for (var t = oN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, iN(i)];
      }
      return t;
    }
    eg.exports = aN;
  });
  var ma = c((M5, rg) => {
    function sN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    rg.exports = sN;
  });
  var ig = c((F5, ng) => {
    var uN = Zv(),
      cN = tg(),
      lN = ma();
    function fN(e) {
      var t = cN(e);
      return t.length == 1 && t[0][2]
        ? lN(t[0][0], t[0][1])
        : function (r) {
            return r === e || uN(r, e, t);
          };
    }
    ng.exports = fN;
  });
  var Hr = c((D5, og) => {
    var dN = It(),
      pN = vt(),
      vN = "[object Symbol]";
    function gN(e) {
      return typeof e == "symbol" || (pN(e) && dN(e) == vN);
    }
    og.exports = gN;
  });
  var zn = c((k5, ag) => {
    var hN = we(),
      mN = Hr(),
      EN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      yN = /^\w*$/;
    function bN(e, t) {
      if (hN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        mN(e)
        ? !0
        : yN.test(e) || !EN.test(e) || (t != null && e in Object(t));
    }
    ag.exports = bN;
  });
  var cg = c((G5, ug) => {
    var sg = Fn(),
      _N = "Expected a function";
    function Ea(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(_N);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Ea.Cache || sg)()), r;
    }
    Ea.Cache = sg;
    ug.exports = Ea;
  });
  var fg = c((U5, lg) => {
    var TN = cg(),
      IN = 500;
    function wN(e) {
      var t = TN(e, function (n) {
          return r.size === IN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    lg.exports = wN;
  });
  var pg = c((V5, dg) => {
    var ON = fg(),
      AN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xN = /\\(\\)?/g,
      SN = ON(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(AN, function (r, n, i, o) {
            t.push(i ? o.replace(xN, "$1") : n || r);
          }),
          t
        );
      });
    dg.exports = SN;
  });
  var ya = c((W5, vg) => {
    function CN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    vg.exports = CN;
  });
  var bg = c((H5, yg) => {
    var gg = Yt(),
      RN = ya(),
      LN = we(),
      NN = Hr(),
      PN = 1 / 0,
      hg = gg ? gg.prototype : void 0,
      mg = hg ? hg.toString : void 0;
    function Eg(e) {
      if (typeof e == "string") return e;
      if (LN(e)) return RN(e, Eg) + "";
      if (NN(e)) return mg ? mg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -PN ? "-0" : t;
    }
    yg.exports = Eg;
  });
  var Tg = c((B5, _g) => {
    var qN = bg();
    function MN(e) {
      return e == null ? "" : qN(e);
    }
    _g.exports = MN;
  });
  var Br = c((X5, Ig) => {
    var FN = we(),
      DN = zn(),
      kN = pg(),
      GN = Tg();
    function UN(e, t) {
      return FN(e) ? e : DN(e, t) ? [e] : kN(GN(e));
    }
    Ig.exports = UN;
  });
  var ar = c((j5, wg) => {
    var VN = Hr(),
      WN = 1 / 0;
    function HN(e) {
      if (typeof e == "string" || VN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -WN ? "-0" : t;
    }
    wg.exports = HN;
  });
  var Kn = c((z5, Og) => {
    var BN = Br(),
      XN = ar();
    function jN(e, t) {
      t = BN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[XN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Og.exports = jN;
  });
  var Yn = c((K5, Ag) => {
    var zN = Kn();
    function KN(e, t, r) {
      var n = e == null ? void 0 : zN(e, t);
      return n === void 0 ? r : n;
    }
    Ag.exports = KN;
  });
  var Sg = c((Y5, xg) => {
    function YN(e, t) {
      return e != null && t in Object(e);
    }
    xg.exports = YN;
  });
  var Rg = c(($5, Cg) => {
    var $N = Br(),
      QN = kr(),
      ZN = we(),
      JN = Un(),
      eP = Vn(),
      tP = ar();
    function rP(e, t, r) {
      t = $N(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = tP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && eP(i) && JN(a, i) && (ZN(e) || QN(e)));
    }
    Cg.exports = rP;
  });
  var Ng = c((Q5, Lg) => {
    var nP = Sg(),
      iP = Rg();
    function oP(e, t) {
      return e != null && iP(e, t, nP);
    }
    Lg.exports = oP;
  });
  var qg = c((Z5, Pg) => {
    var aP = ga(),
      sP = Yn(),
      uP = Ng(),
      cP = zn(),
      lP = ha(),
      fP = ma(),
      dP = ar(),
      pP = 1,
      vP = 2;
    function gP(e, t) {
      return cP(e) && lP(t)
        ? fP(dP(e), t)
        : function (r) {
            var n = sP(r, e);
            return n === void 0 && n === t ? uP(r, e) : aP(t, n, pP | vP);
          };
    }
    Pg.exports = gP;
  });
  var $n = c((J5, Mg) => {
    function hP(e) {
      return e;
    }
    Mg.exports = hP;
  });
  var ba = c((eX, Fg) => {
    function mP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Fg.exports = mP;
  });
  var kg = c((tX, Dg) => {
    var EP = Kn();
    function yP(e) {
      return function (t) {
        return EP(t, e);
      };
    }
    Dg.exports = yP;
  });
  var Ug = c((rX, Gg) => {
    var bP = ba(),
      _P = kg(),
      TP = zn(),
      IP = ar();
    function wP(e) {
      return TP(e) ? bP(IP(e)) : _P(e);
    }
    Gg.exports = wP;
  });
  var Ot = c((nX, Vg) => {
    var OP = ig(),
      AP = qg(),
      xP = $n(),
      SP = we(),
      CP = Ug();
    function RP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? xP
        : typeof e == "object"
        ? SP(e)
          ? AP(e[0], e[1])
          : OP(e)
        : CP(e);
    }
    Vg.exports = RP;
  });
  var _a = c((iX, Wg) => {
    var LP = Ot(),
      NP = Mt(),
      PP = Wr();
    function qP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!NP(t)) {
          var o = LP(r, 3);
          (t = PP(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Wg.exports = qP;
  });
  var Ta = c((oX, Hg) => {
    function MP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Hg.exports = MP;
  });
  var Xg = c((aX, Bg) => {
    var FP = /\s/;
    function DP(e) {
      for (var t = e.length; t-- && FP.test(e.charAt(t)); );
      return t;
    }
    Bg.exports = DP;
  });
  var zg = c((sX, jg) => {
    var kP = Xg(),
      GP = /^\s+/;
    function UP(e) {
      return e && e.slice(0, kP(e) + 1).replace(GP, "");
    }
    jg.exports = UP;
  });
  var Qn = c((uX, $g) => {
    var VP = zg(),
      Kg = ut(),
      WP = Hr(),
      Yg = 0 / 0,
      HP = /^[-+]0x[0-9a-f]+$/i,
      BP = /^0b[01]+$/i,
      XP = /^0o[0-7]+$/i,
      jP = parseInt;
    function zP(e) {
      if (typeof e == "number") return e;
      if (WP(e)) return Yg;
      if (Kg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Kg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = VP(e);
      var r = BP.test(e);
      return r || XP.test(e) ? jP(e.slice(2), r ? 2 : 8) : HP.test(e) ? Yg : +e;
    }
    $g.exports = zP;
  });
  var Jg = c((cX, Zg) => {
    var KP = Qn(),
      Qg = 1 / 0,
      YP = 17976931348623157e292;
    function $P(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = KP(e)), e === Qg || e === -Qg)) {
        var t = e < 0 ? -1 : 1;
        return t * YP;
      }
      return e === e ? e : 0;
    }
    Zg.exports = $P;
  });
  var Ia = c((lX, eh) => {
    var QP = Jg();
    function ZP(e) {
      var t = QP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    eh.exports = ZP;
  });
  var rh = c((fX, th) => {
    var JP = Ta(),
      eq = Ot(),
      tq = Ia(),
      rq = Math.max;
    function nq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : tq(r);
      return i < 0 && (i = rq(n + i, 0)), JP(e, eq(t, 3), i);
    }
    th.exports = nq;
  });
  var wa = c((dX, nh) => {
    var iq = _a(),
      oq = rh(),
      aq = iq(oq);
    nh.exports = aq;
  });
  var ah = {};
  ke(ah, {
    ELEMENT_MATCHES: () => sq,
    FLEX_PREFIXED: () => Oa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => Jn,
    withBrowser: () => Zn,
  });
  var oh,
    Je,
    Zn,
    sq,
    Oa,
    At,
    ih,
    Jn,
    ei = me(() => {
      "use strict";
      (oh = le(wa())),
        (Je = typeof window < "u"),
        (Zn = (e, t) => (Je ? e() : t)),
        (sq = Zn(() =>
          (0, oh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Oa = Zn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = Zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (ih = At.split("transform")[0]),
        (Jn = ih ? ih + "TransformStyle" : "transformStyle");
    });
  var Aa = c((pX, fh) => {
    var uq = 4,
      cq = 0.001,
      lq = 1e-7,
      fq = 10,
      Xr = 11,
      ti = 1 / (Xr - 1),
      dq = typeof Float32Array == "function";
    function sh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function uh(e, t) {
      return 3 * t - 6 * e;
    }
    function ch(e) {
      return 3 * e;
    }
    function ri(e, t, r) {
      return ((sh(t, r) * e + uh(t, r)) * e + ch(t)) * e;
    }
    function lh(e, t, r) {
      return 3 * sh(t, r) * e * e + 2 * uh(t, r) * e + ch(t);
    }
    function pq(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = ri(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > lq && ++u < fq);
      return a;
    }
    function vq(e, t, r, n) {
      for (var i = 0; i < uq; ++i) {
        var o = lh(t, r, n);
        if (o === 0) return t;
        var a = ri(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    fh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = dq ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== i)
        for (var a = 0; a < Xr; ++a) o[a] = ri(a * ti, t, n);
      function u(s) {
        for (var d = 0, y = 1, v = Xr - 1; y !== v && o[y] <= s; ++y) d += ti;
        --y;
        var g = (s - o[y]) / (o[y + 1] - o[y]),
          E = d + g * ti,
          O = lh(E, t, n);
        return O >= cq ? vq(s, E, t, n) : O === 0 ? E : pq(s, d, d + ti, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : ri(u(d), r, i);
      };
    };
  });
  var zr = {};
  ke(zr, {
    bounce: () => $q,
    bouncePast: () => Qq,
    ease: () => gq,
    easeIn: () => hq,
    easeInOut: () => Eq,
    easeOut: () => mq,
    inBack: () => Vq,
    inCirc: () => Dq,
    inCubic: () => Tq,
    inElastic: () => Bq,
    inExpo: () => qq,
    inOutBack: () => Hq,
    inOutCirc: () => Gq,
    inOutCubic: () => wq,
    inOutElastic: () => jq,
    inOutExpo: () => Fq,
    inOutQuad: () => _q,
    inOutQuart: () => xq,
    inOutQuint: () => Rq,
    inOutSine: () => Pq,
    inQuad: () => yq,
    inQuart: () => Oq,
    inQuint: () => Sq,
    inSine: () => Lq,
    outBack: () => Wq,
    outBounce: () => Uq,
    outCirc: () => kq,
    outCubic: () => Iq,
    outElastic: () => Xq,
    outExpo: () => Mq,
    outQuad: () => bq,
    outQuart: () => Aq,
    outQuint: () => Cq,
    outSine: () => Nq,
    swingFrom: () => Kq,
    swingFromTo: () => zq,
    swingTo: () => Yq,
  });
  function yq(e) {
    return Math.pow(e, 2);
  }
  function bq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function _q(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Tq(e) {
    return Math.pow(e, 3);
  }
  function Iq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function wq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Oq(e) {
    return Math.pow(e, 4);
  }
  function Aq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function xq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Sq(e) {
    return Math.pow(e, 5);
  }
  function Cq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Rq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Lq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Nq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Pq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function qq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Mq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Fq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Dq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function kq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Gq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Uq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Vq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Wq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Hq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Bq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Xq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function jq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function zq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Kq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Yq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $q(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Qq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var jr,
    gt,
    gq,
    hq,
    mq,
    Eq,
    xa = me(() => {
      "use strict";
      (jr = le(Aa())),
        (gt = 1.70158),
        (gq = (0, jr.default)(0.25, 0.1, 0.25, 1)),
        (hq = (0, jr.default)(0.42, 0, 1, 1)),
        (mq = (0, jr.default)(0, 0, 0.58, 1)),
        (Eq = (0, jr.default)(0.42, 0, 0.58, 1));
    });
  var ph = {};
  ke(ph, {
    applyEasing: () => Jq,
    createBezierEasing: () => Zq,
    optimizeFloat: () => Kr,
  });
  function Kr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Zq(e) {
    return (0, dh.default)(...e);
  }
  function Jq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Kr(r ? (t > 0 ? r(t) : t) : t > 0 && e && zr[e] ? zr[e](t) : t);
  }
  var dh,
    Sa = me(() => {
      "use strict";
      xa();
      dh = le(Aa());
    });
  var hh = {};
  ke(hh, {
    createElementState: () => gh,
    ixElements: () => pM,
    mergeActionState: () => Ca,
  });
  function gh(e, t, r, n, i) {
    let o =
      r === eM ? (0, sr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, sr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ca(e, t, r, n, i) {
    let o = gM(i);
    return (0, sr.mergeIn)(e, [t, dM, r], n, o);
  }
  function gM(e) {
    let { config: t } = e;
    return vM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var sr,
    gX,
    eM,
    hX,
    tM,
    rM,
    nM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    vh,
    dM,
    pM,
    vM,
    mh = me(() => {
      "use strict";
      sr = le(Zt());
      Ue();
      ({
        HTML_ELEMENT: gX,
        PLAIN_OBJECT: eM,
        ABSTRACT_NODE: hX,
        CONFIG_X_VALUE: tM,
        CONFIG_Y_VALUE: rM,
        CONFIG_Z_VALUE: nM,
        CONFIG_VALUE: iM,
        CONFIG_X_UNIT: oM,
        CONFIG_Y_UNIT: aM,
        CONFIG_Z_UNIT: sM,
        CONFIG_UNIT: uM,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: cM,
          IX2_INSTANCE_ADDED: lM,
          IX2_ELEMENT_STATE_CHANGED: fM,
        } = Ie),
        (vh = {}),
        (dM = "refState"),
        (pM = (e = vh, t = {}) => {
          switch (t.type) {
            case cM:
              return vh;
            case lM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, sr.getIn)(s, [r, n]) !== n && (s = gh(s, n, a, r, o)),
                Ca(s, r, u, i, o)
              );
            }
            case fM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ca(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      vM = [
        [tM, oM],
        [rM, aM],
        [nM, sM],
        [iM, uM],
      ];
    });
  var Eh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var hM = (e) => e.value;
    Oe.getPluginConfig = hM;
    var mM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = mM;
    var EM = (e) => e || { value: 0 };
    Oe.getPluginOrigin = EM;
    var yM = (e) => ({ value: e.value });
    Oe.getPluginDestination = yM;
    var bM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = bM;
    var _M = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = _M;
    var TM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = TM;
  });
  var bh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var IM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      wM = () => window.Webflow.require("spline"),
      OM = (e, t) => e.filter((r) => !t.includes(r)),
      AM = (e, t) => e.value[t];
    Ae.getPluginConfig = AM;
    var xM = () => null;
    Ae.getPluginDuration = xM;
    var yh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      SM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = OM(n, o);
          return a.length ? a.reduce((s, d) => ((s[d] = yh[d]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = yh[a]), o), {});
      };
    Ae.getPluginOrigin = SM;
    var CM = (e) => e.value;
    Ae.getPluginDestination = CM;
    var RM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? IM(n) : null;
    };
    Ae.createPluginInstance = RM;
    var LM = (e, t, r) => {
      let n = wM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (u) => {
          if (!u) throw new Error("Invalid spline app passed to renderSpline");
          let s = o && u.findObjectById(o);
          if (!s) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (s.position.x = d.positionX),
            d.positionY != null && (s.position.y = d.positionY),
            d.positionZ != null && (s.position.z = d.positionZ),
            d.rotationX != null && (s.rotation.x = d.rotationX),
            d.rotationY != null && (s.rotation.y = d.rotationY),
            d.rotationZ != null && (s.rotation.z = d.rotationZ),
            d.scaleX != null && (s.scale.x = d.scaleX),
            d.scaleY != null && (s.scale.y = d.scaleY),
            d.scaleZ != null && (s.scale.z = d.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = LM;
    var NM = () => null;
    Ae.clearPlugin = NM;
  });
  var La = c((Ra) => {
    "use strict";
    Object.defineProperty(Ra, "__esModule", { value: !0 });
    Ra.normalizeColor = PM;
    var _h = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function PM(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof _h[o] == "string" ? _h[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          d = parseFloat(s[0]),
          y = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let g = (1 - Math.abs(2 * v - 1)) * y,
          E = g * (1 - Math.abs(((d / 60) % 2) - 1)),
          O = v - g / 2,
          I,
          C,
          w;
        d >= 0 && d < 60
          ? ((I = g), (C = E), (w = 0))
          : d >= 60 && d < 120
          ? ((I = E), (C = g), (w = 0))
          : d >= 120 && d < 180
          ? ((I = 0), (C = g), (w = E))
          : d >= 180 && d < 240
          ? ((I = 0), (C = E), (w = g))
          : d >= 240 && d < 300
          ? ((I = E), (C = 0), (w = g))
          : ((I = g), (C = 0), (w = E)),
          (t = Math.round((I + O) * 255)),
          (r = Math.round((C + O) * 255)),
          (n = Math.round((w + O) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          d = parseFloat(s[0]),
          y = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * v - 1)) * y,
          E = g * (1 - Math.abs(((d / 60) % 2) - 1)),
          O = v - g / 2,
          I,
          C,
          w;
        d >= 0 && d < 60
          ? ((I = g), (C = E), (w = 0))
          : d >= 60 && d < 120
          ? ((I = E), (C = g), (w = 0))
          : d >= 120 && d < 180
          ? ((I = 0), (C = g), (w = E))
          : d >= 180 && d < 240
          ? ((I = 0), (C = E), (w = g))
          : d >= 240 && d < 300
          ? ((I = E), (C = 0), (w = g))
          : ((I = g), (C = 0), (w = E)),
          (t = Math.round((I + O) * 255)),
          (r = Math.round((C + O) * 255)),
          (n = Math.round((w + O) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var Th = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var qM = La(),
      MM = (e, t) => e.value[t];
    xe.getPluginConfig = MM;
    var FM = () => null;
    xe.getPluginDuration = FM;
    var DM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, qM.normalizeColor)(i);
    };
    xe.getPluginOrigin = DM;
    var kM = (e) => e.value;
    xe.getPluginDestination = kM;
    var GM = () => null;
    xe.createPluginInstance = GM;
    var UM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: u, green: s, blue: d, alpha: y } = o,
        v;
      a != null && (v = a + i),
        u != null &&
          d != null &&
          s != null &&
          y != null &&
          (v = `rgba(${u}, ${s}, ${d}, ${y})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    xe.renderPlugin = UM;
    var VM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    xe.clearPlugin = VM;
  });
  var Ih = c((ni) => {
    "use strict";
    var Pa = vn().default;
    Object.defineProperty(ni, "__esModule", { value: !0 });
    ni.pluginMethodMap = void 0;
    var Na = (Ue(), nt(Cf)),
      WM = Pa(Eh()),
      HM = Pa(bh()),
      BM = Pa(Th()),
      _X = (ni.pluginMethodMap = new Map([
        [Na.ActionTypeConsts.PLUGIN_LOTTIE, { ...WM }],
        [Na.ActionTypeConsts.PLUGIN_SPLINE, { ...HM }],
        [Na.ActionTypeConsts.PLUGIN_VARIABLE, { ...BM }],
      ]));
  });
  var wh = {};
  ke(wh, {
    clearPlugin: () => Ga,
    createPluginInstance: () => jM,
    getPluginConfig: () => Ma,
    getPluginDestination: () => Da,
    getPluginDuration: () => XM,
    getPluginOrigin: () => Fa,
    isPluginType: () => Dt,
    renderPlugin: () => ka,
  });
  function Dt(e) {
    return qa.pluginMethodMap.has(e);
  }
  var qa,
    kt,
    Ma,
    Fa,
    XM,
    Da,
    jM,
    ka,
    Ga,
    Ua = me(() => {
      "use strict";
      ei();
      qa = le(Ih());
      (kt = (e) => (t) => {
        if (!Je) return () => null;
        let r = qa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ma = kt("getPluginConfig")),
        (Fa = kt("getPluginOrigin")),
        (XM = kt("getPluginDuration")),
        (Da = kt("getPluginDestination")),
        (jM = kt("createPluginInstance")),
        (ka = kt("renderPlugin")),
        (Ga = kt("clearPlugin"));
    });
  var Ah = c((wX, Oh) => {
    function zM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Oh.exports = zM;
  });
  var Sh = c((OX, xh) => {
    function KM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    xh.exports = KM;
  });
  var Rh = c((AX, Ch) => {
    function YM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Ch.exports = YM;
  });
  var Nh = c((xX, Lh) => {
    var $M = Rh(),
      QM = $M();
    Lh.exports = QM;
  });
  var Va = c((SX, Ph) => {
    var ZM = Nh(),
      JM = Wr();
    function eF(e, t) {
      return e && ZM(e, t, JM);
    }
    Ph.exports = eF;
  });
  var Mh = c((CX, qh) => {
    var tF = Mt();
    function rF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!tF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    qh.exports = rF;
  });
  var Wa = c((RX, Fh) => {
    var nF = Va(),
      iF = Mh(),
      oF = iF(nF);
    Fh.exports = oF;
  });
  var kh = c((LX, Dh) => {
    function aF(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    Dh.exports = aF;
  });
  var Uh = c((NX, Gh) => {
    var sF = Sh(),
      uF = Wa(),
      cF = Ot(),
      lF = kh(),
      fF = we();
    function dF(e, t, r) {
      var n = fF(e) ? sF : lF,
        i = arguments.length < 3;
      return n(e, cF(t, 4), r, i, uF);
    }
    Gh.exports = dF;
  });
  var Wh = c((PX, Vh) => {
    var pF = Ta(),
      vF = Ot(),
      gF = Ia(),
      hF = Math.max,
      mF = Math.min;
    function EF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = gF(r)), (i = r < 0 ? hF(n + i, 0) : mF(i, n - 1))),
        pF(e, vF(t, 3), i, !0)
      );
    }
    Vh.exports = EF;
  });
  var Bh = c((qX, Hh) => {
    var yF = _a(),
      bF = Wh(),
      _F = yF(bF);
    Hh.exports = _F;
  });
  function Xh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function TF(e, t) {
    if (Xh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Xh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Ha,
    jh = me(() => {
      "use strict";
      Ha = TF;
    });
  var lm = {};
  ke(lm, {
    cleanupHTMLElement: () => y1,
    clearAllStyles: () => E1,
    clearObjectCache: () => GF,
    getActionListProgress: () => _1,
    getAffectedElements: () => Ka,
    getComputedStyle: () => zF,
    getDestinationValues: () => e1,
    getElementId: () => HF,
    getInstanceId: () => VF,
    getInstanceOrigin: () => $F,
    getItemConfigByKey: () => JF,
    getMaxDurationItemIndex: () => cm,
    getNamespacedParameterId: () => w1,
    getRenderType: () => am,
    getStyleProp: () => t1,
    mediaQueriesEqual: () => A1,
    observeStore: () => jF,
    reduceListToGroup: () => T1,
    reifyState: () => BF,
    renderHTMLElement: () => r1,
    shallowEqual: () => Ha,
    shouldAllowMediaQuery: () => O1,
    shouldNamespaceEventParameter: () => I1,
    stringifyTarget: () => x1,
  });
  function GF() {
    ii.clear();
  }
  function VF() {
    return "i" + UF++;
  }
  function HF(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + WF++;
  }
  function BF({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ui.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function jF({ store: e, select: t, onChange: r, comparator: n = XF }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let d = t(i());
      if (d == null) {
        a();
        return;
      }
      n(d, u) || ((u = d), r(u, e));
    }
    return a;
  }
  function Yh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function Ka({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (S, m) =>
          S.concat(
            Ka({
              config: { target: m },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: d,
        getSiblingElements: y,
        matchSelector: v,
        elementContains: g,
        isSiblingNode: E,
      } = i,
      { target: O } = e;
    if (!O) return [];
    let {
      id: I,
      objectId: C,
      selector: w,
      selectorGuids: P,
      appliesTo: R,
      useEventTarget: M,
    } = Yh(O);
    if (C) return [ii.has(C) ? ii.get(C) : ii.set(C, {}).get(C)];
    if (R === zo.PAGE) {
      let S = a(I);
      return S ? [S] : [];
    }
    let F = (t?.action?.config?.affectedElements ?? {})[I || w] || {},
      z = !!(F.id || F.selector),
      K,
      Q,
      ee,
      H = t && u(Yh(t.target));
    if (
      (z
        ? ((K = F.limitAffectedElements), (Q = H), (ee = u(F)))
        : (Q = ee = u({ id: I, selector: w, selectorGuids: P })),
      t && M)
    ) {
      let S = r && (ee || M === !0) ? [r] : s(H);
      if (ee) {
        if (M === FF) return s(ee).filter((m) => S.some((q) => g(m, q)));
        if (M === zh) return s(ee).filter((m) => S.some((q) => g(q, m)));
        if (M === Kh) return s(ee).filter((m) => S.some((q) => E(q, m)));
      }
      return S;
    }
    return Q == null || ee == null
      ? []
      : Je && n
      ? s(ee).filter((S) => n.contains(S))
      : K === zh
      ? s(Q, ee)
      : K === MF
      ? d(s(Q)).filter(v(ee))
      : K === Kh
      ? y(s(Q)).filter(v(ee))
      : s(ee);
  }
  function zF({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case dr:
      case pr:
      case vr:
      case gr:
      case li:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function $F(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Dt(a)) return Fa(a)(t[a], n);
    switch (n.actionTypeId) {
      case cr:
      case lr:
      case fr:
      case Zr:
        return t[n.actionTypeId] || Ya[n.actionTypeId];
      case Jr:
        return KF(t[n.actionTypeId], n.config.filters);
      case en:
        return YF(t[n.actionTypeId], n.config.fontVariations);
      case nm:
        return { value: (0, ht.default)(parseFloat(o(e, ai)), 1) };
      case dr: {
        let u = o(e, ct),
          s = o(e, lt),
          d,
          y;
        return (
          n.config.widthUnit === xt
            ? (d = $h.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (d = (0, ht.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === xt
            ? (y = $h.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (y = (0, ht.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: d, heightValue: y }
        );
      }
      case pr:
      case vr:
      case gr:
        return g1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case li:
        return { value: (0, ht.default)(o(e, si), r.display) };
      case kF:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function e1({ element: e, actionItem: t, elementApi: r }) {
    if (Dt(t.actionTypeId)) return Da(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case cr:
      case lr:
      case fr:
      case Zr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case dr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: d } = t.config;
        if (!Je) return { widthValue: s, heightValue: d };
        if (a === xt) {
          let y = n(e, ct);
          i(e, ct, ""), (s = o(e, "offsetWidth")), i(e, ct, y);
        }
        if (u === xt) {
          let y = n(e, lt);
          i(e, lt, ""), (d = o(e, "offsetHeight")), i(e, lt, y);
        }
        return { widthValue: s, heightValue: d };
      }
      case pr:
      case vr:
      case gr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            d = s(e, u),
            y = (0, Jh.normalizeColor)(d);
          return {
            rValue: y.red,
            gValue: y.green,
            bValue: y.blue,
            aValue: y.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Jr:
        return t.config.filters.reduce(QF, {});
      case en:
        return t.config.fontVariations.reduce(ZF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function am(e) {
    if (/^TRANSFORM_/.test(e)) return tm;
    if (/^STYLE_/.test(e)) return ja;
    if (/^GENERAL_/.test(e)) return Xa;
    if (/^PLUGIN_/.test(e)) return rm;
  }
  function t1(e, t) {
    return e === ja ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function r1(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case tm:
        return s1(e, t, r, i, a);
      case ja:
        return h1(e, t, r, i, o, a);
      case Xa:
        return m1(e, i, a);
      case rm: {
        let { actionTypeId: d } = i;
        if (Dt(d)) return ka(d)(s, t, i);
      }
    }
  }
  function s1(e, t, r, n, i) {
    let o = a1
        .map((u) => {
          let s = Ya[u],
            {
              xValue: d = s.xValue,
              yValue: y = s.yValue,
              zValue: v = s.zValue,
              xUnit: g = "",
              yUnit: E = "",
              zUnit: O = "",
            } = t[u] || {};
          switch (u) {
            case cr:
              return `${OF}(${d}${g}, ${y}${E}, ${v}${O})`;
            case lr:
              return `${AF}(${d}${g}, ${y}${E}, ${v}${O})`;
            case fr:
              return `${xF}(${d}${g}) ${SF}(${y}${E}) ${CF}(${v}${O})`;
            case Zr:
              return `${RF}(${d}${g}, ${y}${E})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Gt(e, At, i), a(e, At, o), l1(n, r) && a(e, Jn, LF);
  }
  function u1(e, t, r, n) {
    let i = (0, ui.default)(t, (a, u, s) => `${a} ${s}(${u}${o1(s, r)})`, ""),
      { setStyle: o } = n;
    Gt(e, Yr, n), o(e, Yr, i);
  }
  function c1(e, t, r, n) {
    let i = (0, ui.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Gt(e, $r, n), o(e, $r, i);
  }
  function l1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === cr && n !== void 0) ||
      (e === lr && n !== void 0) ||
      (e === fr && (t !== void 0 || r !== void 0))
    );
  }
  function v1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function g1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = za[t],
      o = n(e, i),
      a = d1.test(o) ? o : r[i],
      u = v1(p1, a).split(Qr);
    return {
      rValue: (0, ht.default)(parseInt(u[0], 10), 255),
      gValue: (0, ht.default)(parseInt(u[1], 10), 255),
      bValue: (0, ht.default)(parseInt(u[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(u[3]), 1),
    };
  }
  function h1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case dr: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: d, heightValue: y } = r;
        d !== void 0 && (u === xt && (u = "px"), Gt(e, ct, o), a(e, ct, d + u)),
          y !== void 0 &&
            (s === xt && (s = "px"), Gt(e, lt, o), a(e, lt, y + s));
        break;
      }
      case Jr: {
        u1(e, r, n.config, o);
        break;
      }
      case en: {
        c1(e, r, n.config, o);
        break;
      }
      case pr:
      case vr:
      case gr: {
        let u = za[n.actionTypeId],
          s = Math.round(r.rValue),
          d = Math.round(r.gValue),
          y = Math.round(r.bValue),
          v = r.aValue;
        Gt(e, u, o),
          a(e, u, v >= 1 ? `rgb(${s},${d},${y})` : `rgba(${s},${d},${y},${v})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        Gt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function m1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case li: {
        let { value: i } = t.config;
        i === NF && Je ? n(e, si, Oa) : n(e, si, i);
        return;
      }
    }
  }
  function Gt(e, t, r) {
    if (!Je) return;
    let n = om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ur);
    if (!a) {
      o(e, ur, n);
      return;
    }
    let u = a.split(Qr).map(im);
    u.indexOf(n) === -1 && o(e, ur, u.concat(n).join(Qr));
  }
  function sm(e, t, r) {
    if (!Je) return;
    let n = om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ur);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ur,
        a
          .split(Qr)
          .map(im)
          .filter((u) => u !== n)
          .join(Qr)
      );
  }
  function E1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        d = i[s];
      d && Qh({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Qh({ actionList: i[o], elementApi: t });
      });
  }
  function Qh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Zh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            Zh({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function Zh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      Dt(o)
        ? (u = (s) => Ga(o)(s, i))
        : (u = um({ effect: b1, actionTypeId: o, elementApi: r })),
        Ka({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function y1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === dr) {
      let { config: a } = t;
      a.widthUnit === xt && n(e, ct, ""), a.heightUnit === xt && n(e, lt, "");
    }
    i(e, ur) && um({ effect: sm, actionTypeId: o, elementApi: r })(e);
  }
  function b1(e, t, r) {
    let { setStyle: n } = r;
    sm(e, t, r), n(e, t, ""), t === At && n(e, Jn, "");
  }
  function cm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function _1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, d) => {
        if (n && d === 0) return;
        let { actionItems: y } = s,
          v = y[cm(y)],
          { config: g, actionTypeId: E } = v;
        i.id === v.id && (u = a + o);
        let O = am(E) === Xa ? 0 : g.duration;
        a += g.delay + O;
      }),
      a > 0 ? Kr(u / a) : 0
    );
  }
  function T1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, ci.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: d }) => d.some(a));
        }),
      (0, ci.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function I1(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function w1(e, t) {
    return e + DF + t;
  }
  function O1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function A1(e, t) {
    return Ha(e && e.sort(), t && t.sort());
  }
  function x1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ba + r + Ba + n;
  }
  var ht,
    ui,
    oi,
    ci,
    Jh,
    IF,
    wF,
    OF,
    AF,
    xF,
    SF,
    CF,
    RF,
    LF,
    NF,
    ai,
    Yr,
    $r,
    ct,
    lt,
    em,
    PF,
    qF,
    zh,
    MF,
    Kh,
    FF,
    si,
    ur,
    xt,
    Qr,
    DF,
    Ba,
    tm,
    Xa,
    ja,
    rm,
    cr,
    lr,
    fr,
    Zr,
    nm,
    Jr,
    en,
    dr,
    pr,
    vr,
    gr,
    li,
    kF,
    im,
    za,
    om,
    ii,
    UF,
    WF,
    XF,
    $h,
    KF,
    YF,
    QF,
    ZF,
    JF,
    Ya,
    n1,
    i1,
    o1,
    a1,
    f1,
    d1,
    p1,
    um,
    fm = me(() => {
      "use strict";
      (ht = le(Ah())), (ui = le(Uh())), (oi = le(Bh())), (ci = le(Zt()));
      Ue();
      jh();
      Sa();
      Jh = le(La());
      Ua();
      ei();
      ({
        BACKGROUND: IF,
        TRANSFORM: wF,
        TRANSLATE_3D: OF,
        SCALE_3D: AF,
        ROTATE_X: xF,
        ROTATE_Y: SF,
        ROTATE_Z: CF,
        SKEW: RF,
        PRESERVE_3D: LF,
        FLEX: NF,
        OPACITY: ai,
        FILTER: Yr,
        FONT_VARIATION_SETTINGS: $r,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: em,
        BORDER_COLOR: PF,
        COLOR: qF,
        CHILDREN: zh,
        IMMEDIATE_CHILDREN: MF,
        SIBLINGS: Kh,
        PARENT: FF,
        DISPLAY: si,
        WILL_CHANGE: ur,
        AUTO: xt,
        COMMA_DELIMITER: Qr,
        COLON_DELIMITER: DF,
        BAR_DELIMITER: Ba,
        RENDER_TRANSFORM: tm,
        RENDER_GENERAL: Xa,
        RENDER_STYLE: ja,
        RENDER_PLUGIN: rm,
      } = Ce),
        ({
          TRANSFORM_MOVE: cr,
          TRANSFORM_SCALE: lr,
          TRANSFORM_ROTATE: fr,
          TRANSFORM_SKEW: Zr,
          STYLE_OPACITY: nm,
          STYLE_FILTER: Jr,
          STYLE_FONT_VARIATION: en,
          STYLE_SIZE: dr,
          STYLE_BACKGROUND_COLOR: pr,
          STYLE_BORDER: vr,
          STYLE_TEXT_COLOR: gr,
          GENERAL_DISPLAY: li,
          OBJECT_VALUE: kF,
        } = Ge),
        (im = (e) => e.trim()),
        (za = Object.freeze({ [pr]: em, [vr]: PF, [gr]: qF })),
        (om = Object.freeze({
          [At]: wF,
          [em]: IF,
          [ai]: ai,
          [Yr]: Yr,
          [ct]: ct,
          [lt]: lt,
          [$r]: $r,
        })),
        (ii = new Map());
      UF = 1;
      WF = 1;
      XF = (e, t) => e === t;
      ($h = /px/),
        (KF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = n1[n.type]), r),
            e || {}
          )),
        (YF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = i1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (QF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (ZF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (JF = (e, t, r) => {
          if (Dt(e)) return Ma(e)(r, t);
          switch (e) {
            case Jr: {
              let n = (0, oi.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case en: {
              let n = (0, oi.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ya = {
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [lr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [fr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Zr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (n1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (i1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (o1 = (e, t) => {
          let r = (0, oi.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (a1 = Object.keys(Ya));
      (f1 = "\\(([^)]+)\\)"), (d1 = /^rgb/), (p1 = RegExp(`rgba?${f1}`));
      um =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case cr:
            case lr:
            case fr:
            case Zr:
              e(n, At, r);
              break;
            case Jr:
              e(n, Yr, r);
              break;
            case en:
              e(n, $r, r);
              break;
            case nm:
              e(n, ai, r);
              break;
            case dr:
              e(n, ct, r), e(n, lt, r);
              break;
            case pr:
            case vr:
            case gr:
              e(n, za[t], r);
              break;
            case li:
              e(n, si, r);
              break;
          }
        };
    });
  var Ut = c((qe) => {
    "use strict";
    var hr = vn().default;
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.IX2VanillaUtils =
      qe.IX2VanillaPlugins =
      qe.IX2ElementsReducer =
      qe.IX2Easings =
      qe.IX2EasingUtils =
      qe.IX2BrowserSupport =
        void 0;
    var S1 = hr((ei(), nt(ah)));
    qe.IX2BrowserSupport = S1;
    var C1 = hr((xa(), nt(zr)));
    qe.IX2Easings = C1;
    var R1 = hr((Sa(), nt(ph)));
    qe.IX2EasingUtils = R1;
    var L1 = hr((mh(), nt(hh)));
    qe.IX2ElementsReducer = L1;
    var N1 = hr((Ua(), nt(wh)));
    qe.IX2VanillaPlugins = N1;
    var P1 = hr((fm(), nt(lm)));
    qe.IX2VanillaUtils = P1;
  });
  var di,
    mt,
    q1,
    M1,
    F1,
    D1,
    k1,
    G1,
    fi,
    dm,
    U1,
    V1,
    $a,
    W1,
    H1,
    B1,
    X1,
    pm,
    vm = me(() => {
      "use strict";
      Ue();
      (di = le(Ut())),
        (mt = le(Zt())),
        ({
          IX2_RAW_DATA_IMPORTED: q1,
          IX2_SESSION_STOPPED: M1,
          IX2_INSTANCE_ADDED: F1,
          IX2_INSTANCE_STARTED: D1,
          IX2_INSTANCE_REMOVED: k1,
          IX2_ANIMATION_FRAME_CHANGED: G1,
        } = Ie),
        ({
          optimizeFloat: fi,
          applyEasing: dm,
          createBezierEasing: U1,
        } = di.IX2EasingUtils),
        ({ RENDER_GENERAL: V1 } = Ce),
        ({
          getItemConfigByKey: $a,
          getRenderType: W1,
          getStyleProp: H1,
        } = di.IX2VanillaUtils),
        (B1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: d,
              skipMotion: y,
              skipToValue: v,
            } = e,
            { parameters: g } = t.payload,
            E = Math.max(1 - a, 0.01),
            O = g[n];
          O == null && ((E = 1), (O = u));
          let I = Math.max(O, 0) || 0,
            C = fi(I - r),
            w = y ? v : fi(r + C * E),
            P = w * 100;
          if (w === r && e.current) return e;
          let R, M, k, F;
          for (let K = 0, { length: Q } = i; K < Q; K++) {
            let { keyframe: ee, actionItems: H } = i[K];
            if ((K === 0 && (R = H[0]), P >= ee)) {
              R = H[0];
              let S = i[K + 1],
                m = S && P !== ee;
              (M = m ? S.actionItems[0] : null),
                m && ((k = ee / 100), (F = (S.keyframe - ee) / 100));
            }
          }
          let z = {};
          if (R && !M)
            for (let K = 0, { length: Q } = o; K < Q; K++) {
              let ee = o[K];
              z[ee] = $a(s, ee, R.config);
            }
          else if (R && M && k !== void 0 && F !== void 0) {
            let K = (w - k) / F,
              Q = R.config.easing,
              ee = dm(Q, K, d);
            for (let H = 0, { length: S } = o; H < S; H++) {
              let m = o[H],
                q = $a(s, m, R.config),
                J = ($a(s, m, M.config) - q) * ee + q;
              z[m] = J;
            }
          }
          return (0, mt.merge)(e, { position: w, current: z });
        }),
        (X1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: d,
              destinationKeys: y,
              pluginDuration: v,
              instanceDelay: g,
              customEasingFn: E,
              skipMotion: O,
            } = e,
            I = s.config.easing,
            { duration: C, delay: w } = s.config;
          v != null && (C = v),
            (w = g ?? w),
            a === V1 ? (C = 0) : (o || O) && (C = w = 0);
          let { now: P } = t.payload;
          if (r && n) {
            let R = P - (i + w);
            if (u) {
              let K = P - i,
                Q = C + w,
                ee = fi(Math.min(Math.max(0, K / Q), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", Q * ee);
            }
            if (R < 0) return e;
            let M = fi(Math.min(Math.max(0, R / C), 1)),
              k = dm(I, M, E),
              F = {},
              z = null;
            return (
              y.length &&
                (z = y.reduce((K, Q) => {
                  let ee = d[Q],
                    H = parseFloat(n[Q]) || 0,
                    m = (parseFloat(ee) - H) * k + H;
                  return (K[Q] = m), K;
                }, {})),
              (F.current = z),
              (F.position = M),
              M === 1 && ((F.active = !1), (F.complete = !0)),
              (0, mt.merge)(e, F)
            );
          }
          return e;
        }),
        (pm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case q1:
              return t.payload.ixInstances || Object.freeze({});
            case M1:
              return Object.freeze({});
            case F1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: d,
                  isCarrier: y,
                  origin: v,
                  destination: g,
                  immediate: E,
                  verbose: O,
                  continuous: I,
                  parameterId: C,
                  actionGroups: w,
                  smoothing: P,
                  restingValue: R,
                  pluginInstance: M,
                  pluginDuration: k,
                  instanceDelay: F,
                  skipMotion: z,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: Q } = i,
                ee = W1(Q),
                H = H1(ee, Q),
                S = Object.keys(g).filter(
                  (q) => g[q] != null && typeof g[q] != "string"
                ),
                { easing: m } = i.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: g,
                destinationKeys: S,
                immediate: E,
                verbose: O,
                current: null,
                actionItem: i,
                actionTypeId: Q,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: d,
                renderType: ee,
                isCarrier: y,
                styleProp: H,
                continuous: I,
                parameterId: C,
                actionGroups: w,
                smoothing: P,
                restingValue: R,
                pluginInstance: M,
                pluginDuration: k,
                instanceDelay: F,
                skipMotion: z,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(m) && m.length === 4 ? U1(m) : void 0,
              });
            }
            case D1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case k1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case G1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? B1 : X1;
                r = (0, mt.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var j1,
    z1,
    K1,
    gm,
    hm = me(() => {
      "use strict";
      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: j1,
        IX2_SESSION_STOPPED: z1,
        IX2_PARAMETER_CHANGED: K1,
      } = Ie),
        (gm = (e = {}, t) => {
          switch (t.type) {
            case j1:
              return t.payload.ixParameters || {};
            case z1:
              return {};
            case K1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var ym = {};
  ke(ym, { default: () => $1 });
  var mm,
    Em,
    Y1,
    $1,
    bm = me(() => {
      "use strict";
      mm = le(jo());
      Lf();
      Zf();
      td();
      Em = le(Ut());
      vm();
      hm();
      ({ ixElements: Y1 } = Em.IX2ElementsReducer),
        ($1 = (0, mm.combineReducers)({
          ixData: Rf,
          ixRequest: Qf,
          ixSession: ed,
          ixElements: Y1,
          ixInstances: pm,
          ixParameters: gm,
        }));
    });
  var Tm = c((QX, _m) => {
    var Q1 = It(),
      Z1 = we(),
      J1 = vt(),
      eD = "[object String]";
    function tD(e) {
      return typeof e == "string" || (!Z1(e) && J1(e) && Q1(e) == eD);
    }
    _m.exports = tD;
  });
  var wm = c((ZX, Im) => {
    var rD = ba(),
      nD = rD("length");
    Im.exports = nD;
  });
  var Am = c((JX, Om) => {
    var iD = "\\ud800-\\udfff",
      oD = "\\u0300-\\u036f",
      aD = "\\ufe20-\\ufe2f",
      sD = "\\u20d0-\\u20ff",
      uD = oD + aD + sD,
      cD = "\\ufe0e\\ufe0f",
      lD = "\\u200d",
      fD = RegExp("[" + lD + iD + uD + cD + "]");
    function dD(e) {
      return fD.test(e);
    }
    Om.exports = dD;
  });
  var Mm = c((ej, qm) => {
    var Sm = "\\ud800-\\udfff",
      pD = "\\u0300-\\u036f",
      vD = "\\ufe20-\\ufe2f",
      gD = "\\u20d0-\\u20ff",
      hD = pD + vD + gD,
      mD = "\\ufe0e\\ufe0f",
      ED = "[" + Sm + "]",
      Qa = "[" + hD + "]",
      Za = "\\ud83c[\\udffb-\\udfff]",
      yD = "(?:" + Qa + "|" + Za + ")",
      Cm = "[^" + Sm + "]",
      Rm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Lm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      bD = "\\u200d",
      Nm = yD + "?",
      Pm = "[" + mD + "]?",
      _D = "(?:" + bD + "(?:" + [Cm, Rm, Lm].join("|") + ")" + Pm + Nm + ")*",
      TD = Pm + Nm + _D,
      ID = "(?:" + [Cm + Qa + "?", Qa, Rm, Lm, ED].join("|") + ")",
      xm = RegExp(Za + "(?=" + Za + ")|" + ID + TD, "g");
    function wD(e) {
      for (var t = (xm.lastIndex = 0); xm.test(e); ) ++t;
      return t;
    }
    qm.exports = wD;
  });
  var Dm = c((tj, Fm) => {
    var OD = wm(),
      AD = Am(),
      xD = Mm();
    function SD(e) {
      return AD(e) ? xD(e) : OD(e);
    }
    Fm.exports = SD;
  });
  var Gm = c((rj, km) => {
    var CD = Bn(),
      RD = Xn(),
      LD = Mt(),
      ND = Tm(),
      PD = Dm(),
      qD = "[object Map]",
      MD = "[object Set]";
    function FD(e) {
      if (e == null) return 0;
      if (LD(e)) return ND(e) ? PD(e) : e.length;
      var t = RD(e);
      return t == qD || t == MD ? e.size : CD(e).length;
    }
    km.exports = FD;
  });
  var Vm = c((nj, Um) => {
    var DD = "Expected a function";
    function kD(e) {
      if (typeof e != "function") throw new TypeError(DD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Um.exports = kD;
  });
  var Ja = c((ij, Wm) => {
    var GD = wt(),
      UD = (function () {
        try {
          var e = GD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Wm.exports = UD;
  });
  var es = c((oj, Bm) => {
    var Hm = Ja();
    function VD(e, t, r) {
      t == "__proto__" && Hm
        ? Hm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Bm.exports = VD;
  });
  var jm = c((aj, Xm) => {
    var WD = es(),
      HD = qn(),
      BD = Object.prototype,
      XD = BD.hasOwnProperty;
    function jD(e, t, r) {
      var n = e[t];
      (!(XD.call(e, t) && HD(n, r)) || (r === void 0 && !(t in e))) &&
        WD(e, t, r);
    }
    Xm.exports = jD;
  });
  var Ym = c((sj, Km) => {
    var zD = jm(),
      KD = Br(),
      YD = Un(),
      zm = ut(),
      $D = ar();
    function QD(e, t, r, n) {
      if (!zm(e)) return e;
      t = KD(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = $D(t[i]),
          d = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var y = u[s];
          (d = n ? n(y, s, u) : void 0),
            d === void 0 && (d = zm(y) ? y : YD(t[i + 1]) ? [] : {});
        }
        zD(u, s, d), (u = u[s]);
      }
      return e;
    }
    Km.exports = QD;
  });
  var Qm = c((uj, $m) => {
    var ZD = Kn(),
      JD = Ym(),
      e2 = Br();
    function t2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = ZD(e, a);
        r(u, a) && JD(o, e2(a, e), u);
      }
      return o;
    }
    $m.exports = t2;
  });
  var Jm = c((cj, Zm) => {
    var r2 = kn(),
      n2 = Po(),
      i2 = oa(),
      o2 = ia(),
      a2 = Object.getOwnPropertySymbols,
      s2 = a2
        ? function (e) {
            for (var t = []; e; ) r2(t, i2(e)), (e = n2(e));
            return t;
          }
        : o2;
    Zm.exports = s2;
  });
  var tE = c((lj, eE) => {
    function u2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    eE.exports = u2;
  });
  var nE = c((fj, rE) => {
    var c2 = ut(),
      l2 = Hn(),
      f2 = tE(),
      d2 = Object.prototype,
      p2 = d2.hasOwnProperty;
    function v2(e) {
      if (!c2(e)) return f2(e);
      var t = l2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !p2.call(e, n))) || r.push(n);
      return r;
    }
    rE.exports = v2;
  });
  var oE = c((dj, iE) => {
    var g2 = sa(),
      h2 = nE(),
      m2 = Mt();
    function E2(e) {
      return m2(e) ? g2(e, !0) : h2(e);
    }
    iE.exports = E2;
  });
  var sE = c((pj, aE) => {
    var y2 = na(),
      b2 = Jm(),
      _2 = oE();
    function T2(e) {
      return y2(e, _2, b2);
    }
    aE.exports = T2;
  });
  var cE = c((vj, uE) => {
    var I2 = ya(),
      w2 = Ot(),
      O2 = Qm(),
      A2 = sE();
    function x2(e, t) {
      if (e == null) return {};
      var r = I2(A2(e), function (n) {
        return [n];
      });
      return (
        (t = w2(t)),
        O2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    uE.exports = x2;
  });
  var fE = c((gj, lE) => {
    var S2 = Ot(),
      C2 = Vm(),
      R2 = cE();
    function L2(e, t) {
      return R2(e, C2(S2(t)));
    }
    lE.exports = L2;
  });
  var pE = c((hj, dE) => {
    var N2 = Bn(),
      P2 = Xn(),
      q2 = kr(),
      M2 = we(),
      F2 = Mt(),
      D2 = Gn(),
      k2 = Hn(),
      G2 = Wn(),
      U2 = "[object Map]",
      V2 = "[object Set]",
      W2 = Object.prototype,
      H2 = W2.hasOwnProperty;
    function B2(e) {
      if (e == null) return !0;
      if (
        F2(e) &&
        (M2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          D2(e) ||
          G2(e) ||
          q2(e))
      )
        return !e.length;
      var t = P2(e);
      if (t == U2 || t == V2) return !e.size;
      if (k2(e)) return !N2(e).length;
      for (var r in e) if (H2.call(e, r)) return !1;
      return !0;
    }
    dE.exports = B2;
  });
  var gE = c((mj, vE) => {
    var X2 = es(),
      j2 = Va(),
      z2 = Ot();
    function K2(e, t) {
      var r = {};
      return (
        (t = z2(t, 3)),
        j2(e, function (n, i, o) {
          X2(r, i, t(n, i, o));
        }),
        r
      );
    }
    vE.exports = K2;
  });
  var mE = c((Ej, hE) => {
    function Y2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    hE.exports = Y2;
  });
  var yE = c((yj, EE) => {
    var $2 = $n();
    function Q2(e) {
      return typeof e == "function" ? e : $2;
    }
    EE.exports = Q2;
  });
  var _E = c((bj, bE) => {
    var Z2 = mE(),
      J2 = Wa(),
      ek = yE(),
      tk = we();
    function rk(e, t) {
      var r = tk(e) ? Z2 : J2;
      return r(e, ek(t));
    }
    bE.exports = rk;
  });
  var IE = c((_j, TE) => {
    var nk = Qe(),
      ik = function () {
        return nk.Date.now();
      };
    TE.exports = ik;
  });
  var AE = c((Tj, OE) => {
    var ok = ut(),
      ts = IE(),
      wE = Qn(),
      ak = "Expected a function",
      sk = Math.max,
      uk = Math.min;
    function ck(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        d = 0,
        y = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(ak);
      (t = wE(t) || 0),
        ok(r) &&
          ((y = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? sk(wE(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function E(F) {
        var z = n,
          K = i;
        return (n = i = void 0), (d = F), (a = e.apply(K, z)), a;
      }
      function O(F) {
        return (d = F), (u = setTimeout(w, t)), y ? E(F) : a;
      }
      function I(F) {
        var z = F - s,
          K = F - d,
          Q = t - z;
        return v ? uk(Q, o - K) : Q;
      }
      function C(F) {
        var z = F - s,
          K = F - d;
        return s === void 0 || z >= t || z < 0 || (v && K >= o);
      }
      function w() {
        var F = ts();
        if (C(F)) return P(F);
        u = setTimeout(w, I(F));
      }
      function P(F) {
        return (u = void 0), g && n ? E(F) : ((n = i = void 0), a);
      }
      function R() {
        u !== void 0 && clearTimeout(u), (d = 0), (n = s = i = u = void 0);
      }
      function M() {
        return u === void 0 ? a : P(ts());
      }
      function k() {
        var F = ts(),
          z = C(F);
        if (((n = arguments), (i = this), (s = F), z)) {
          if (u === void 0) return O(s);
          if (v) return clearTimeout(u), (u = setTimeout(w, t)), E(s);
        }
        return u === void 0 && (u = setTimeout(w, t)), a;
      }
      return (k.cancel = R), (k.flush = M), k;
    }
    OE.exports = ck;
  });
  var SE = c((Ij, xE) => {
    var lk = AE(),
      fk = ut(),
      dk = "Expected a function";
    function pk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(dk);
      return (
        fk(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        lk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    xE.exports = pk;
  });
  var RE = {};
  ke(RE, {
    actionListPlaybackChanged: () => Er,
    animationFrameChanged: () => vi,
    clearRequested: () => kk,
    elementStateChanged: () => cs,
    eventListenerAdded: () => pi,
    eventStateChanged: () => as,
    instanceAdded: () => ss,
    instanceRemoved: () => us,
    instanceStarted: () => gi,
    mediaQueriesDefined: () => fs,
    parameterChanged: () => mr,
    playbackRequested: () => Fk,
    previewRequested: () => Mk,
    rawDataImported: () => rs,
    sessionInitialized: () => ns,
    sessionStarted: () => is,
    sessionStopped: () => os,
    stopRequested: () => Dk,
    testFrameRendered: () => Gk,
    viewportWidthChanged: () => ls,
  });
  var CE,
    vk,
    gk,
    hk,
    mk,
    Ek,
    yk,
    bk,
    _k,
    Tk,
    Ik,
    wk,
    Ok,
    Ak,
    xk,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Pk,
    qk,
    rs,
    ns,
    is,
    os,
    Mk,
    Fk,
    Dk,
    kk,
    pi,
    Gk,
    as,
    vi,
    mr,
    ss,
    gi,
    us,
    cs,
    Er,
    ls,
    fs,
    hi = me(() => {
      "use strict";
      Ue();
      (CE = le(Ut())),
        ({
          IX2_RAW_DATA_IMPORTED: vk,
          IX2_SESSION_INITIALIZED: gk,
          IX2_SESSION_STARTED: hk,
          IX2_SESSION_STOPPED: mk,
          IX2_PREVIEW_REQUESTED: Ek,
          IX2_PLAYBACK_REQUESTED: yk,
          IX2_STOP_REQUESTED: bk,
          IX2_CLEAR_REQUESTED: _k,
          IX2_EVENT_LISTENER_ADDED: Tk,
          IX2_TEST_FRAME_RENDERED: Ik,
          IX2_EVENT_STATE_CHANGED: wk,
          IX2_ANIMATION_FRAME_CHANGED: Ok,
          IX2_PARAMETER_CHANGED: Ak,
          IX2_INSTANCE_ADDED: xk,
          IX2_INSTANCE_STARTED: Sk,
          IX2_INSTANCE_REMOVED: Ck,
          IX2_ELEMENT_STATE_CHANGED: Rk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Lk,
          IX2_VIEWPORT_WIDTH_CHANGED: Nk,
          IX2_MEDIA_QUERIES_DEFINED: Pk,
        } = Ie),
        ({ reifyState: qk } = CE.IX2VanillaUtils),
        (rs = (e) => ({ type: vk, payload: { ...qk(e) } })),
        (ns = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: gk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (is = () => ({ type: hk })),
        (os = () => ({ type: mk })),
        (Mk = ({ rawData: e, defer: t }) => ({
          type: Ek,
          payload: { defer: t, rawData: e },
        })),
        (Fk = ({
          actionTypeId: e = Ge.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: yk,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (Dk = (e) => ({ type: bk, payload: { actionListId: e } })),
        (kk = () => ({ type: _k })),
        (pi = (e, t) => ({
          type: Tk,
          payload: { target: e, listenerParams: t },
        })),
        (Gk = (e = 1) => ({ type: Ik, payload: { step: e } })),
        (as = (e, t) => ({ type: wk, payload: { stateKey: e, newState: t } })),
        (vi = (e, t) => ({ type: Ok, payload: { now: e, parameters: t } })),
        (mr = (e, t) => ({ type: Ak, payload: { key: e, value: t } })),
        (ss = (e) => ({ type: xk, payload: { ...e } })),
        (gi = (e, t) => ({ type: Sk, payload: { instanceId: e, time: t } })),
        (us = (e) => ({ type: Ck, payload: { instanceId: e } })),
        (cs = (e, t, r, n) => ({
          type: Rk,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Er = ({ actionListId: e, isPlaying: t }) => ({
          type: Lk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ls = ({ width: e, mediaQueries: t }) => ({
          type: Nk,
          payload: { width: e, mediaQueries: t },
        })),
        (fs = () => ({ type: Pk }));
    });
  var Me = {};
  ke(Me, {
    elementContains: () => vs,
    getChildElements: () => Yk,
    getClosestElement: () => tn,
    getProperty: () => Bk,
    getQuerySelector: () => ps,
    getRefType: () => gs,
    getSiblingElements: () => $k,
    getStyle: () => Hk,
    getValidDocument: () => jk,
    isSiblingNode: () => Kk,
    matchSelector: () => Xk,
    queryDocument: () => zk,
    setStyle: () => Wk,
  });
  function Wk(e, t, r) {
    e.style[t] = r;
  }
  function Hk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Bk(e, t) {
    return e[t];
  }
  function Xk(e) {
    return (t) => t[ds](e);
  }
  function ps({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(LE) !== -1) {
        let n = e.split(LE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(PE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function jk(e) {
    return e == null || e === document.documentElement.getAttribute(PE)
      ? document
      : null;
  }
  function zk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function vs(e, t) {
    return e.contains(t);
  }
  function Kk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function Yk(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function $k(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function gs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Uk
        : Vk
      : null;
  }
  var NE,
    ds,
    LE,
    Uk,
    Vk,
    PE,
    tn,
    qE = me(() => {
      "use strict";
      NE = le(Ut());
      Ue();
      ({ ELEMENT_MATCHES: ds } = NE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: LE,
          HTML_ELEMENT: Uk,
          PLAIN_OBJECT: Vk,
          WF_PAGE: PE,
        } = Ce);
      tn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ds] && r[ds](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var hs = c((Aj, FE) => {
    var Qk = ut(),
      ME = Object.create,
      Zk = (function () {
        function e() {}
        return function (t) {
          if (!Qk(t)) return {};
          if (ME) return ME(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    FE.exports = Zk;
  });
  var mi = c((xj, DE) => {
    function Jk() {}
    DE.exports = Jk;
  });
  var yi = c((Sj, kE) => {
    var eG = hs(),
      tG = mi();
    function Ei(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ei.prototype = eG(tG.prototype);
    Ei.prototype.constructor = Ei;
    kE.exports = Ei;
  });
  var WE = c((Cj, VE) => {
    var GE = Yt(),
      rG = kr(),
      nG = we(),
      UE = GE ? GE.isConcatSpreadable : void 0;
    function iG(e) {
      return nG(e) || rG(e) || !!(UE && e && e[UE]);
    }
    VE.exports = iG;
  });
  var XE = c((Rj, BE) => {
    var oG = kn(),
      aG = WE();
    function HE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = aG), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? HE(u, t - 1, r, n, i)
            : oG(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    BE.exports = HE;
  });
  var zE = c((Lj, jE) => {
    var sG = XE();
    function uG(e) {
      var t = e == null ? 0 : e.length;
      return t ? sG(e, 1) : [];
    }
    jE.exports = uG;
  });
  var YE = c((Nj, KE) => {
    function cG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    KE.exports = cG;
  });
  var ZE = c((Pj, QE) => {
    var lG = YE(),
      $E = Math.max;
    function fG(e, t, r) {
      return (
        (t = $E(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = $E(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), lG(e, this, u);
        }
      );
    }
    QE.exports = fG;
  });
  var ey = c((qj, JE) => {
    function dG(e) {
      return function () {
        return e;
      };
    }
    JE.exports = dG;
  });
  var ny = c((Mj, ry) => {
    var pG = ey(),
      ty = Ja(),
      vG = $n(),
      gG = ty
        ? function (e, t) {
            return ty(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: pG(t),
              writable: !0,
            });
          }
        : vG;
    ry.exports = gG;
  });
  var oy = c((Fj, iy) => {
    var hG = 800,
      mG = 16,
      EG = Date.now;
    function yG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = EG(),
          i = mG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= hG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    iy.exports = yG;
  });
  var sy = c((Dj, ay) => {
    var bG = ny(),
      _G = oy(),
      TG = _G(bG);
    ay.exports = TG;
  });
  var cy = c((kj, uy) => {
    var IG = zE(),
      wG = ZE(),
      OG = sy();
    function AG(e) {
      return OG(wG(e, void 0, IG), e + "");
    }
    uy.exports = AG;
  });
  var dy = c((Gj, fy) => {
    var ly = ua(),
      xG = ly && new ly();
    fy.exports = xG;
  });
  var vy = c((Uj, py) => {
    function SG() {}
    py.exports = SG;
  });
  var ms = c((Vj, hy) => {
    var gy = dy(),
      CG = vy(),
      RG = gy
        ? function (e) {
            return gy.get(e);
          }
        : CG;
    hy.exports = RG;
  });
  var Ey = c((Wj, my) => {
    var LG = {};
    my.exports = LG;
  });
  var Es = c((Hj, by) => {
    var yy = Ey(),
      NG = Object.prototype,
      PG = NG.hasOwnProperty;
    function qG(e) {
      for (
        var t = e.name + "", r = yy[t], n = PG.call(yy, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    by.exports = qG;
  });
  var _i = c((Bj, _y) => {
    var MG = hs(),
      FG = mi(),
      DG = 4294967295;
    function bi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = DG),
        (this.__views__ = []);
    }
    bi.prototype = MG(FG.prototype);
    bi.prototype.constructor = bi;
    _y.exports = bi;
  });
  var Iy = c((Xj, Ty) => {
    function kG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Ty.exports = kG;
  });
  var Oy = c((jj, wy) => {
    var GG = _i(),
      UG = yi(),
      VG = Iy();
    function WG(e) {
      if (e instanceof GG) return e.clone();
      var t = new UG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = VG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    wy.exports = WG;
  });
  var Sy = c((zj, xy) => {
    var HG = _i(),
      Ay = yi(),
      BG = mi(),
      XG = we(),
      jG = vt(),
      zG = Oy(),
      KG = Object.prototype,
      YG = KG.hasOwnProperty;
    function Ti(e) {
      if (jG(e) && !XG(e) && !(e instanceof HG)) {
        if (e instanceof Ay) return e;
        if (YG.call(e, "__wrapped__")) return zG(e);
      }
      return new Ay(e);
    }
    Ti.prototype = BG.prototype;
    Ti.prototype.constructor = Ti;
    xy.exports = Ti;
  });
  var Ry = c((Kj, Cy) => {
    var $G = _i(),
      QG = ms(),
      ZG = Es(),
      JG = Sy();
    function eU(e) {
      var t = ZG(e),
        r = JG[t];
      if (typeof r != "function" || !(t in $G.prototype)) return !1;
      if (e === r) return !0;
      var n = QG(r);
      return !!n && e === n[0];
    }
    Cy.exports = eU;
  });
  var qy = c((Yj, Py) => {
    var Ly = yi(),
      tU = cy(),
      rU = ms(),
      ys = Es(),
      nU = we(),
      Ny = Ry(),
      iU = "Expected a function",
      oU = 8,
      aU = 32,
      sU = 128,
      uU = 256;
    function cU(e) {
      return tU(function (t) {
        var r = t.length,
          n = r,
          i = Ly.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(iU);
          if (i && !a && ys(o) == "wrapper") var a = new Ly([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = ys(o),
            s = u == "wrapper" ? rU(o) : void 0;
          s &&
          Ny(s[0]) &&
          s[1] == (sU | oU | aU | uU) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[ys(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && Ny(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            y = d[0];
          if (a && d.length == 1 && nU(y)) return a.plant(y).value();
          for (var v = 0, g = r ? t[v].apply(this, d) : y; ++v < r; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    Py.exports = cU;
  });
  var Fy = c(($j, My) => {
    var lU = qy(),
      fU = lU();
    My.exports = fU;
  });
  var ky = c((Qj, Dy) => {
    function dU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Dy.exports = dU;
  });
  var Uy = c((Zj, Gy) => {
    var pU = ky(),
      bs = Qn();
    function vU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = bs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = bs(t)), (t = t === t ? t : 0)),
        pU(bs(e), t, r)
      );
    }
    Gy.exports = vU;
  });
  var Yy,
    $y,
    Qy,
    Zy,
    gU,
    hU,
    mU,
    EU,
    yU,
    bU,
    _U,
    TU,
    IU,
    wU,
    OU,
    AU,
    xU,
    SU,
    CU,
    Jy,
    eb,
    RU,
    LU,
    NU,
    tb,
    PU,
    qU,
    rb,
    MU,
    _s,
    nb,
    Vy,
    Wy,
    ib,
    nn,
    FU,
    ft,
    ob,
    DU,
    We,
    et,
    on,
    ab,
    Ts,
    Hy,
    Is,
    kU,
    rn,
    GU,
    UU,
    VU,
    sb,
    By,
    WU,
    Xy,
    HU,
    BU,
    XU,
    jy,
    Ii,
    wi,
    zy,
    Ky,
    ub,
    cb = me(() => {
      "use strict";
      (Yy = le(Fy())), ($y = le(Yn())), (Qy = le(Uy()));
      Ue();
      ws();
      hi();
      (Zy = le(Ut())),
        ({
          MOUSE_CLICK: gU,
          MOUSE_SECOND_CLICK: hU,
          MOUSE_DOWN: mU,
          MOUSE_UP: EU,
          MOUSE_OVER: yU,
          MOUSE_OUT: bU,
          DROPDOWN_CLOSE: _U,
          DROPDOWN_OPEN: TU,
          SLIDER_ACTIVE: IU,
          SLIDER_INACTIVE: wU,
          TAB_ACTIVE: OU,
          TAB_INACTIVE: AU,
          NAVBAR_CLOSE: xU,
          NAVBAR_OPEN: SU,
          MOUSE_MOVE: CU,
          PAGE_SCROLL_DOWN: Jy,
          SCROLL_INTO_VIEW: eb,
          SCROLL_OUT_OF_VIEW: RU,
          PAGE_SCROLL_UP: LU,
          SCROLLING_IN_VIEW: NU,
          PAGE_FINISH: tb,
          ECOMMERCE_CART_CLOSE: PU,
          ECOMMERCE_CART_OPEN: qU,
          PAGE_START: rb,
          PAGE_SCROLL: MU,
        } = Ze),
        (_s = "COMPONENT_ACTIVE"),
        (nb = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Vy } = Ce),
        ({ getNamespacedParameterId: Wy } = Zy.IX2VanillaUtils),
        (ib = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (nn = ib(({ element: e, nativeEvent: t }) => e === t.target)),
        (FU = ib(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, Yy.default)([nn, FU])),
        (ob = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !kU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (DU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!ob(e, n);
        }),
        (We = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            d = ob(e, s);
          return (
            d &&
              yr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Vy + n.split(Vy)[1],
                actionListId: (0, $y.default)(d, "action.config.actionListId"),
              }),
            yr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            an({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (on = { handler: et(ft, We) }),
        (ab = { ...on, types: [_s, nb].join(" ") }),
        (Ts = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Hy = "mouseover mouseout"),
        (Is = { types: Ts }),
        (kU = { PAGE_START: rb, PAGE_FINISH: tb }),
        (rn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Qy.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (GU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (UU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (VU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = rn(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return GU(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: i - s,
          });
        }),
        (sb = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [_s, nb].indexOf(n) !== -1 ? n === _s : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (By = (e) => (t, r) => {
          let n = { elementHovered: UU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (WU = (e) => (t, r) => {
          let n = { ...r, elementVisible: VU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Xy =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = rn(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = a,
              y = d === "PX",
              v = i - o,
              g = Number((n / v).toFixed(2));
            if (r && r.percentTop === g) return r;
            let E = (y ? s : (o * (s || 0)) / 100) / v,
              O,
              I,
              C = 0;
            r &&
              ((O = g > r.percentTop),
              (I = r.scrollingDown !== O),
              (C = I ? g : r.anchorTop));
            let w = u === Jy ? g >= C + E : g <= C - E,
              P = {
                ...r,
                percentTop: g,
                inBounds: w,
                anchorTop: C,
                scrollingDown: O,
              };
            return (r && w && (I || P.inBounds !== r.inBounds) && e(t, P)) || P;
          }),
        (HU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (BU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (XU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (jy =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Ii = (e = !0) => ({
          ...ab,
          handler: et(
            e ? ft : nn,
            sb((t, r) => (r.isActive ? on.handler(t, r) : r))
          ),
        })),
        (wi = (e = !0) => ({
          ...ab,
          handler: et(
            e ? ft : nn,
            sb((t, r) => (r.isActive ? r : on.handler(t, r)))
          ),
        })),
        (zy = {
          ...Is,
          handler: WU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === eb) === r
              ? (We(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Ky = 0.05),
        (ub = {
          [IU]: Ii(),
          [wU]: wi(),
          [TU]: Ii(),
          [_U]: wi(),
          [SU]: Ii(!1),
          [xU]: wi(!1),
          [OU]: Ii(),
          [AU]: wi(),
          [qU]: { types: "ecommerce-cart-open", handler: et(ft, We) },
          [PU]: { types: "ecommerce-cart-close", handler: et(ft, We) },
          [gU]: {
            types: "click",
            handler: et(
              ft,
              jy((e, { clickCount: t }) => {
                DU(e) ? t === 1 && We(e) : We(e);
              })
            ),
          },
          [hU]: {
            types: "click",
            handler: et(
              ft,
              jy((e, { clickCount: t }) => {
                t === 2 && We(e);
              })
            ),
          },
          [mU]: { ...on, types: "mousedown" },
          [EU]: { ...on, types: "mouseup" },
          [yU]: {
            types: Hy,
            handler: et(
              ft,
              By((e, t) => {
                t.elementHovered && We(e);
              })
            ),
          },
          [bU]: {
            types: Hy,
            handler: et(
              ft,
              By((e, t) => {
                t.elementHovered || We(e);
              })
            ),
          },
          [CU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: y = 0,
                } = r,
                {
                  clientX: v = o.clientX,
                  clientY: g = o.clientY,
                  pageX: E = o.pageX,
                  pageY: O = o.pageY,
                } = n,
                I = u === "X_AXIS",
                C = n.type === "mouseout",
                w = y / 100,
                P = s,
                R = !1;
              switch (a) {
                case st.VIEWPORT: {
                  w = I
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: k,
                    scrollWidth: F,
                    scrollHeight: z,
                  } = rn();
                  w = I ? Math.min(M + E, F) / F : Math.min(k + O, z) / z;
                  break;
                }
                case st.ELEMENT:
                default: {
                  P = Wy(i, s);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let k = t.getBoundingClientRect(),
                    { left: F, top: z, width: K, height: Q } = k;
                  if (!M && !HU({ left: v, top: g }, k)) break;
                  (R = !0), (w = I ? (v - F) / K : (g - z) / Q);
                  break;
                }
              }
              return (
                C && (w > 1 - Ky || w < Ky) && (w = Math.round(w)),
                (a !== st.ELEMENT || R || R !== o.elementHovered) &&
                  ((w = d ? 1 - w : w), e.dispatch(mr(P, w))),
                {
                  elementHovered: R,
                  clientX: v,
                  clientY: g,
                  pageX: E,
                  pageY: O,
                }
              );
            },
          },
          [MU]: {
            types: Ts,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = rn(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(mr(r, u));
            },
          },
          [NU]: {
            types: Ts,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: d,
                } = rn(),
                {
                  basedOn: y,
                  selectedAxis: v,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: O,
                  addEndOffset: I,
                  addStartOffset: C,
                  addOffsetValue: w = 0,
                  endOffsetValue: P = 0,
                } = r,
                R = v === "X_AXIS";
              if (y === st.VIEWPORT) {
                let M = R ? o / u : a / s;
                return (
                  M !== i.scrollPercent && t.dispatch(mr(g, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = Wy(n, g),
                  k = e.getBoundingClientRect(),
                  F = (C ? w : 0) / 100,
                  z = (I ? P : 0) / 100;
                (F = E ? F : 1 - F), (z = O ? z : 1 - z);
                let K = k.top + Math.min(k.height * F, d),
                  ee = k.top + k.height * z - K,
                  H = Math.min(d + ee, s),
                  m = Math.min(Math.max(0, d - K), H) / H;
                return (
                  m !== i.scrollPercent && t.dispatch(mr(M, m)),
                  { scrollPercent: m }
                );
              }
            },
          },
          [eb]: zy,
          [RU]: zy,
          [Jy]: {
            ...Is,
            handler: Xy((e, t) => {
              t.scrollingDown && We(e);
            }),
          },
          [LU]: {
            ...Is,
            handler: Xy((e, t) => {
              t.scrollingDown || We(e);
            }),
          },
          [tb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(nn, BU(We)),
          },
          [rb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(nn, XU(We)),
          },
        });
    });
  var Ab = {};
  ke(Ab, {
    observeRequests: () => fV,
    startActionGroup: () => an,
    startEngine: () => Ri,
    stopActionGroup: () => yr,
    stopAllActionGroups: () => Ib,
    stopEngine: () => Li,
  });
  function fV(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: vV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: gV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: hV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: mV });
  }
  function dV(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Li(e),
          yb({ store: e, elementApi: Me }),
          Ri({ store: e, allowEvents: !0 }),
          bb();
      },
    });
  }
  function pV(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function vV({ rawData: e, defer: t }, r) {
    let n = () => {
      Ri({ store: r, rawData: e, allowEvents: !0 }), bb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function bb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function gV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: d = !0,
      } = e,
      { rawData: y } = e;
    if (n && i && y && u) {
      let v = y.actionLists[n];
      v && (y = eV({ actionList: v, actionItemId: i, rawData: y }));
    }
    if (
      (Ri({ store: t, rawData: y, allowEvents: a, testManual: s }),
      (n && r === Ge.GENERAL_START_ACTION) || Os(r))
    ) {
      yr({ store: t, actionListId: n }),
        Tb({ store: t, actionListId: n, eventId: o });
      let v = an({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: u,
        verbose: d,
      });
      d && v && t.dispatch(Er({ actionListId: n, isPlaying: !u }));
    }
  }
  function hV({ actionListId: e }, t) {
    e ? yr({ store: t, actionListId: e }) : Ib({ store: t }), Li(t);
  }
  function mV(e, t) {
    Li(t), yb({ store: t, elementApi: Me });
  }
  function Ri({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(rs(t)),
      i.active ||
        (e.dispatch(
          ns({
            hasBoundaryNodes: !!document.querySelector(Ai),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (IV(e), EV(), e.getState().ixSession.hasDefinedMediaQueries && dV(e)),
        e.dispatch(is()),
        yV(e, n));
  }
  function EV() {
    let { documentElement: e } = document;
    e.className.indexOf(lb) === -1 && (e.className += ` ${lb}`);
  }
  function yV(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(vi(n, o)), t ? pV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Li(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(bV), iV(), e.dispatch(os());
    }
  }
  function bV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function _V({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: d, ixSession: y } = e.getState(),
      { events: v } = d,
      g = v[n],
      { eventTypeId: E } = g,
      O = {},
      I = {},
      C = [],
      { continuousActionGroups: w } = a,
      { id: P } = a;
    tV(E, i) && (P = rV(t, P));
    let R = y.hasBoundaryNodes && r ? tn(r, Ai) : null;
    w.forEach((M) => {
      let { keyframe: k, actionItems: F } = M;
      F.forEach((z) => {
        let { actionTypeId: K } = z,
          { target: Q } = z.config;
        if (!Q) return;
        let ee = Q.boundaryMode ? R : null,
          H = oV(Q) + As + K;
        if (((I[H] = TV(I[H], k, z)), !O[H])) {
          O[H] = !0;
          let { config: S } = z;
          xi({
            config: S,
            event: g,
            eventTarget: r,
            elementRoot: ee,
            elementApi: Me,
          }).forEach((m) => {
            C.push({ element: m, key: H });
          });
        }
      });
    }),
      C.forEach(({ element: M, key: k }) => {
        let F = I[k],
          z = (0, Et.default)(F, "[0].actionItems[0]", {}),
          { actionTypeId: K } = z,
          Q = Ci(K) ? Ss(K)(M, z) : null,
          ee = xs({ element: M, actionItem: z, elementApi: Me }, Q);
        Cs({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: z,
          destination: ee,
          continuous: !0,
          parameterId: P,
          actionGroups: F,
          smoothing: u,
          restingValue: s,
          pluginInstance: Q,
        });
      });
  }
  function TV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function IV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    _b(e),
      (0, br.default)(r, (i, o) => {
        let a = ub[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        CV({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && OV(e);
  }
  function OV(e) {
    let t = () => {
      _b(e);
    };
    wV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(pi(window, [r, t]));
    }),
      t();
  }
  function _b(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ls({ width: n, mediaQueries: i }));
    }
  }
  function CV({ logic: e, store: t, events: r }) {
    RV(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = AV(r, SV);
    if (!(0, pb.default)(u)) return;
    (0, br.default)(u, (v, g) => {
      let E = r[g],
        { action: O, id: I, mediaQueries: C = o.mediaQueryKeys } = E,
        { actionListId: w } = O.config;
      aV(C, o.mediaQueryKeys) || t.dispatch(fs()),
        O.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((R) => {
            let { continuousParameterGroupId: M } = R,
              k = (0, Et.default)(a, `${w}.continuousParameterGroups`, []),
              F = (0, db.default)(k, ({ id: Q }) => Q === M),
              z = (R.smoothing || 0) / 100,
              K = (R.restingState || 0) / 100;
            F &&
              v.forEach((Q, ee) => {
                let H = I + As + ee;
                _V({
                  store: t,
                  eventStateKey: H,
                  eventTarget: Q,
                  eventId: I,
                  eventConfig: R,
                  actionListId: w,
                  parameterGroup: F,
                  smoothing: z,
                  restingValue: K,
                });
              });
          }),
        (O.actionTypeId === Ge.GENERAL_START_ACTION || Os(O.actionTypeId)) &&
          Tb({ store: t, actionListId: w, eventId: I });
    });
    let s = (v) => {
        let { ixSession: g } = t.getState();
        xV(u, (E, O, I) => {
          let C = r[O],
            w = g.eventState[I],
            { action: P, mediaQueries: R = o.mediaQueryKeys } = C;
          if (!Si(R, g.mediaQueryKey)) return;
          let M = (k = {}) => {
            let F = i(
              {
                store: t,
                element: E,
                event: C,
                eventConfig: k,
                nativeEvent: v,
                eventStateKey: I,
              },
              w
            );
            sV(F, w) || t.dispatch(as(I, F));
          };
          P.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(M)
            : M();
        });
      },
      d = (0, mb.default)(s, lV),
      y = ({ target: v = document, types: g, throttle: E }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((O) => {
            let I = E ? d : s;
            v.addEventListener(O, I), t.dispatch(pi(v, [O, I]));
          });
      };
    Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e);
  }
  function RV(e) {
    if (!cV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ps(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Tb({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let d = (0, Et.default)(s, "actionItemGroups[0].actionItems", []),
        y = (0, Et.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!Si(y, i.mediaQueryKey)) return;
      d.forEach((v) => {
        let { config: g, actionTypeId: E } = v,
          O =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : g,
          I = xi({ config: O, event: u, elementApi: Me }),
          C = Ci(E);
        I.forEach((w) => {
          let P = C ? Ss(E)(w, v) : null;
          Cs({
            destination: xs({ element: w, actionItem: v, elementApi: Me }, P),
            immediate: !0,
            store: e,
            element: w,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: P,
          });
        });
      });
    }
  }
  function Ib({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, br.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Rs(r, e), i && e.dispatch(Er({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function yr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? tn(r, Ai) : null;
    (0, br.default)(o, (s) => {
      let d = (0, Et.default)(s, "actionItem.config.target.boundaryMode"),
        y = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && y) {
        if (u && d && !vs(u, s.element)) return;
        Rs(s, e),
          s.verbose && e.dispatch(Er({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function an({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: d } = e.getState(),
      { events: y } = s,
      v = y[t] || {},
      { mediaQueries: g = s.mediaQueryKeys } = v,
      E = (0, Et.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: O, useFirstGroupAsInitialState: I } = E;
    if (!O || !O.length) return !1;
    o >= O.length && (0, Et.default)(v, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let w =
        (o === 0 || (o === 1 && I)) && Os(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      P = (0, Et.default)(O, [o, "actionItems"], []);
    if (!P.length || !Si(g, d.mediaQueryKey)) return !1;
    let R = d.hasBoundaryNodes && r ? tn(r, Ai) : null,
      M = QU(P),
      k = !1;
    return (
      P.forEach((F, z) => {
        let { config: K, actionTypeId: Q } = F,
          ee = Ci(Q),
          { target: H } = K;
        if (!H) return;
        let S = H.boundaryMode ? R : null;
        xi({
          config: K,
          event: v,
          eventTarget: r,
          elementRoot: S,
          elementApi: Me,
        }).forEach((q, U) => {
          let B = ee ? Ss(Q)(q, F) : null,
            J = ee ? uV(Q)(q, F) : null;
          k = !0;
          let re = M === z && U === 0,
            V = ZU({ element: q, actionItem: F }),
            j = xs({ element: q, actionItem: F, elementApi: Me }, B);
          Cs({
            store: e,
            element: q,
            actionItem: F,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: V,
            destination: j,
            immediate: a,
            verbose: u,
            pluginInstance: B,
            pluginDuration: J,
            instanceDelay: w,
          });
        });
      }),
      k
    );
  }
  function Cs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: d,
        eventId: y,
      } = n,
      v = !s,
      g = YU(),
      { ixElements: E, ixSession: O, ixData: I } = t.getState(),
      C = KU(E, i),
      { refState: w } = E[C] || {},
      P = gs(i),
      R = O.reducedMotion && Yo[o.actionTypeId],
      M;
    if (R && s)
      switch (I.events[y]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          M = d;
          break;
        default:
          M = 0.5;
          break;
      }
    let k = JU(i, w, r, o, Me, u);
    if (
      (t.dispatch(
        ss({
          instanceId: g,
          elementId: C,
          origin: k,
          refType: P,
          skipMotion: R,
          skipToValue: M,
          ...n,
        })
      ),
      wb(document.body, "ix2-animation-started", g),
      a)
    ) {
      LV(t, g);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: F }) => F[g], onChange: Ob }),
      v && t.dispatch(gi(g, O.tick));
  }
  function Rs(e, t) {
    wb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === Eb && nV(o, n, Me), t.dispatch(us(e.id));
  }
  function wb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function LV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(gi(t, 0)), e.dispatch(vi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Ob(n[t], e);
  }
  function Ob(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: d,
        groupIndex: y,
        eventId: v,
        eventTarget: g,
        eventStateKey: E,
        actionListId: O,
        isCarrier: I,
        styleProp: C,
        verbose: w,
        pluginInstance: P,
      } = e,
      { ixData: R, ixSession: M } = t.getState(),
      { events: k } = R,
      F = k[v] || {},
      { mediaQueries: z = R.mediaQueryKeys } = F;
    if (Si(z, M.mediaQueryKey) && (n || r || i)) {
      if (d || (s === zU && i)) {
        t.dispatch(cs(o, u, d, a));
        let { ixElements: K } = t.getState(),
          { ref: Q, refType: ee, refState: H } = K[o] || {},
          S = H && H[u];
        (ee === Eb || Ci(u)) && $U(Q, H, S, v, a, C, Me, s, P);
      }
      if (i) {
        if (I) {
          let K = an({
            store: t,
            eventId: v,
            eventTarget: g,
            eventStateKey: E,
            actionListId: O,
            groupIndex: y + 1,
            verbose: w,
          });
          w && !K && t.dispatch(Er({ actionListId: O, isPlaying: !1 }));
        }
        Rs(e, t);
      }
    }
  }
  var db,
    Et,
    pb,
    vb,
    gb,
    hb,
    br,
    mb,
    Oi,
    jU,
    Os,
    As,
    Ai,
    Eb,
    zU,
    lb,
    xi,
    KU,
    xs,
    Vt,
    YU,
    $U,
    yb,
    QU,
    ZU,
    JU,
    eV,
    tV,
    rV,
    Si,
    nV,
    iV,
    oV,
    aV,
    sV,
    Ci,
    Ss,
    uV,
    fb,
    cV,
    lV,
    wV,
    AV,
    xV,
    SV,
    ws = me(() => {
      "use strict";
      (db = le(wa())),
        (Et = le(Yn())),
        (pb = le(Gm())),
        (vb = le(fE())),
        (gb = le(pE())),
        (hb = le(gE())),
        (br = le(_E())),
        (mb = le(SE()));
      Ue();
      Oi = le(Ut());
      hi();
      qE();
      cb();
      (jU = Object.keys(xn)),
        (Os = (e) => jU.includes(e)),
        ({
          COLON_DELIMITER: As,
          BOUNDARY_SELECTOR: Ai,
          HTML_ELEMENT: Eb,
          RENDER_GENERAL: zU,
          W_MOD_IX: lb,
        } = Ce),
        ({
          getAffectedElements: xi,
          getElementId: KU,
          getDestinationValues: xs,
          observeStore: Vt,
          getInstanceId: YU,
          renderHTMLElement: $U,
          clearAllStyles: yb,
          getMaxDurationItemIndex: QU,
          getComputedStyle: ZU,
          getInstanceOrigin: JU,
          reduceListToGroup: eV,
          shouldNamespaceEventParameter: tV,
          getNamespacedParameterId: rV,
          shouldAllowMediaQuery: Si,
          cleanupHTMLElement: nV,
          clearObjectCache: iV,
          stringifyTarget: oV,
          mediaQueriesEqual: aV,
          shallowEqual: sV,
        } = Oi.IX2VanillaUtils),
        ({
          isPluginType: Ci,
          createPluginInstance: Ss,
          getPluginDuration: uV,
        } = Oi.IX2VanillaPlugins),
        (fb = navigator.userAgent),
        (cV = fb.match(/iPad/i) || fb.match(/iPhone/)),
        (lV = 12);
      wV = ["resize", "orientationchange"];
      (AV = (e, t) => (0, vb.default)((0, hb.default)(e, t), gb.default)),
        (xV = (e, t) => {
          (0, br.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + As + o;
              t(i, n, a);
            });
          });
        }),
        (SV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return xi({ config: t, elementApi: Me });
        });
    });
  var Sb = c((yt) => {
    "use strict";
    var NV = vn().default,
      PV = cu().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = xb;
    yt.init = kV;
    yt.setEnv = DV;
    yt.store = void 0;
    Kl();
    var qV = jo(),
      MV = PV((bm(), nt(ym))),
      Ls = (ws(), nt(Ab)),
      FV = NV((hi(), nt(RE)));
    yt.actions = FV;
    var Ns = (yt.store = (0, qV.createStore)(MV.default));
    function DV(e) {
      e() && (0, Ls.observeRequests)(Ns);
    }
    function kV(e) {
      xb(), (0, Ls.startEngine)({ store: Ns, rawData: e, allowEvents: !0 });
    }
    function xb() {
      (0, Ls.stopEngine)(Ns);
    }
  });
  var Nb = c((sz, Lb) => {
    "use strict";
    var Cb = Ne(),
      Rb = Sb();
    Rb.setEnv(Cb.env);
    Cb.define(
      "ix2",
      (Lb.exports = function () {
        return Rb;
      })
    );
  });
  var qb = c((uz, Pb) => {
    "use strict";
    var _r = Ne();
    _r.define(
      "links",
      (Pb.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = _r.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          d = /index\.(html|php)$/,
          y = /\/$/,
          v,
          g;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && _r.env("design")),
            (g = _r.env("slug") || a.pathname || ""),
            _r.scroll.off(I),
            (v = []);
          for (var w = document.links, P = 0; P < w.length; ++P) O(w[P]);
          v.length && (_r.scroll.on(I), I());
        }
        function O(w) {
          if (!w.getAttribute("hreflang")) {
            var P =
              (i && w.getAttribute("href-disabled")) || w.getAttribute("href");
            if (((u.href = P), !(P.indexOf(":") >= 0))) {
              var R = e(w);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var M = e(u.hash);
                M.length && v.push({ link: R, sec: M, active: !1 });
                return;
              }
              if (!(P === "#" || P === "")) {
                var k =
                  u.href === a.href || P === g || (d.test(P) && y.test(g));
                C(R, s, k);
              }
            }
          }
        }
        function I() {
          var w = n.scrollTop(),
            P = n.height();
          t.each(v, function (R) {
            if (!R.link.attr("hreflang")) {
              var M = R.link,
                k = R.sec,
                F = k.offset().top,
                z = k.outerHeight(),
                K = P * 0.5,
                Q = k.is(":visible") && F + z - K >= w && F + K <= w + P;
              R.active !== Q && ((R.active = Q), C(M, s, Q));
            }
          });
        }
        function C(w, P, R) {
          var M = w.hasClass(P);
          (R && M) || (!R && !M) || (R ? w.addClass(P) : w.removeClass(P));
        }
        return r;
      })
    );
  });
  var Fb = c((cz, Mb) => {
    "use strict";
    var Ni = Ne();
    Ni.define(
      "scroll",
      (Mb.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = O() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (S) {
              window.setTimeout(S, 15);
            },
          s = Ni.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(g));
        function O() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(S) {
          return I.test(S.hash) && S.host + S.pathname === r.host + r.pathname;
        }
        let w =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function P() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            w.matches
          );
        }
        function R(S, m) {
          var q;
          switch (m) {
            case "add":
              (q = S.attr("tabindex")),
                q
                  ? S.attr("data-wf-tabindex-swap", q)
                  : S.attr("tabindex", "-1");
              break;
            case "remove":
              (q = S.attr("data-wf-tabindex-swap")),
                q
                  ? (S.attr("tabindex", q),
                    S.removeAttr("data-wf-tabindex-swap"))
                  : S.removeAttr("tabindex");
              break;
          }
          S.toggleClass("wf-force-outline-none", m === "add");
        }
        function M(S) {
          var m = S.currentTarget;
          if (
            !(
              Ni.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var q = C(m) ? m.hash : "";
            if (q !== "") {
              var U = e(q);
              U.length &&
                (S && (S.preventDefault(), S.stopPropagation()),
                k(q, S),
                window.setTimeout(
                  function () {
                    F(U, function () {
                      R(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        R(U, "remove");
                    });
                  },
                  S ? 0 : 300
                ));
            }
          }
        }
        function k(S) {
          if (
            r.hash !== S &&
            n &&
            n.pushState &&
            !(Ni.env.chrome && r.protocol === "file:")
          ) {
            var m = n.state && n.state.hash;
            m !== S && n.pushState({ hash: S }, "", S);
          }
        }
        function F(S, m) {
          var q = i.scrollTop(),
            U = z(S);
          if (q !== U) {
            var B = K(S, q, U),
              J = Date.now(),
              re = function () {
                var V = Date.now() - J;
                window.scroll(0, Q(q, U, V, B)),
                  V <= B ? u(re) : typeof m == "function" && m();
              };
            u(re);
          }
        }
        function z(S) {
          var m = e(d),
            q = m.css("position") === "fixed" ? m.outerHeight() : 0,
            U = S.offset().top - q;
          if (S.data("scroll") === "mid") {
            var B = i.height() - q,
              J = S.outerHeight();
            J < B && (U -= Math.round((B - J) / 2));
          }
          return U;
        }
        function K(S, m, q) {
          if (P()) return 0;
          var U = 1;
          return (
            a.add(S).each(function (B, J) {
              var re = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (U = re);
            }),
            (472.143 * Math.log(Math.abs(m - q) + 125) - 2e3) * U
          );
        }
        function Q(S, m, q, U) {
          return q > U ? m : S + (m - S) * ee(q / U);
        }
        function ee(S) {
          return S < 0.5
            ? 4 * S * S * S
            : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1;
        }
        function H() {
          var { WF_CLICK_EMPTY: S, WF_CLICK_SCROLL: m } = t;
          o.on(m, v, M),
            o.on(S, y, function (q) {
              q.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: H };
      })
    );
  });
  var kb = c((lz, Db) => {
    "use strict";
    var GV = Ne();
    GV.define(
      "touch",
      (Db.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            y;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", O, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", O, !1);
          function v(C) {
            var w = C.touches;
            (w && w.length > 1) ||
              ((a = !0),
              w ? ((u = !0), (d = w[0].clientX)) : (d = C.clientX),
              (y = d));
          }
          function g(C) {
            if (a) {
              if (u && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var w = C.touches,
                P = w ? w[0].clientX : C.clientX,
                R = P - y;
              (y = P),
                Math.abs(R) > s &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: R > 0 ? "right" : "left" }), O());
            }
          }
          function E(C) {
            if (a && ((a = !1), u && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (u = !1);
              return;
            }
          }
          function O() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", O, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", O, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Vb = c((fz, Ub) => {
    "use strict";
    var Wt = Ne(),
      UV = Xt(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Gb = !0,
      VV = /^#[a-zA-Z0-9\-_]+$/;
    Wt.define(
      "dropdown",
      (Ub.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Wt.env(),
          o = !1,
          a,
          u = Wt.env.touch,
          s = ".w-dropdown",
          d = "w--open",
          y = UV.triggers,
          v = 900,
          g = "focusout" + s,
          E = "keydown" + s,
          O = "mouseenter" + s,
          I = "mousemove" + s,
          C = "mouseleave" + s,
          w = (u ? "click" : "mouseup") + s,
          P = "w-close" + s,
          R = "setting" + s,
          M = e(document),
          k;
        (n.ready = F),
          (n.design = function () {
            o && m(), (o = !1), F();
          }),
          (n.preview = function () {
            (o = !0), F();
          });
        function F() {
          (a = i && Wt.env("design")), (k = M.find(s)), k.each(z);
        }
        function z(l, G) {
          var W = e(G),
            L = e.data(G, s);
          L ||
            (L = e.data(G, s, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (L.toggle = L.el.children(".w-dropdown-toggle")),
            (L.list = L.el.children(".w-dropdown-list")),
            (L.links = L.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (L.complete = B(L)),
            (L.mouseLeave = re(L)),
            (L.mouseUpOutside = U(L)),
            (L.mouseMoveOutside = V(L)),
            K(L);
          var ie = L.toggle.attr("id"),
            fe = L.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + l),
            fe || (fe = "w-dropdown-list-" + l),
            L.toggle.attr("id", ie),
            L.toggle.attr("aria-controls", fe),
            L.toggle.attr("aria-haspopup", "menu"),
            L.toggle.attr("aria-expanded", "false"),
            L.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            L.toggle.prop("tagName") !== "BUTTON" &&
              (L.toggle.attr("role", "button"),
              L.toggle.attr("tabindex") || L.toggle.attr("tabindex", "0")),
            L.list.attr("id", fe),
            L.list.attr("aria-labelledby", ie),
            L.links.each(function (h, X) {
              X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                VV.test(X.hash) && X.addEventListener("click", S.bind(null, L));
            }),
            L.el.off(s),
            L.toggle.off(s),
            L.nav && L.nav.off(s);
          var oe = ee(L, Gb);
          a && L.el.on(R, Q(L)),
            a ||
              (i && ((L.hovering = !1), S(L)),
              L.config.hover && L.toggle.on(O, J(L)),
              L.el.on(P, oe),
              L.el.on(E, j(L)),
              L.el.on(g, _(L)),
              L.toggle.on(w, oe),
              L.toggle.on(E, b(L)),
              (L.nav = L.el.closest(".w-nav")),
              L.nav.on(P, oe));
        }
        function K(l) {
          var G = Number(l.el.css("z-index"));
          (l.manageZ = G === v || G === v + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !u,
              delay: l.el.attr("data-delay"),
            });
        }
        function Q(l) {
          return function (G, W) {
            (W = W || {}),
              K(l),
              W.open === !0 && H(l, !0),
              W.open === !1 && S(l, { immediate: !0 });
          };
        }
        function ee(l, G) {
          return r(function (W) {
            if (l.open || (W && W.type === "w-close"))
              return S(l, { forceClose: G });
            H(l);
          });
        }
        function H(l) {
          if (!l.open) {
            q(l),
              (l.open = !0),
              l.list.addClass(d),
              l.toggle.addClass(d),
              l.toggle.attr("aria-expanded", "true"),
              y.intro(0, l.el[0]),
              Wt.redraw.up(),
              l.manageZ && l.el.css("z-index", v + 1);
            var G = Wt.env("editor");
            a || M.on(w, l.mouseUpOutside),
              l.hovering && !G && l.el.on(C, l.mouseLeave),
              l.hovering && G && M.on(I, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function S(l, { immediate: G, forceClose: W } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !W)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var L = l.config;
            if (
              (y.outro(0, l.el[0]),
              M.off(w, l.mouseUpOutside),
              M.off(I, l.mouseMoveOutside),
              l.el.off(C, l.mouseLeave),
              window.clearTimeout(l.delayId),
              !L.delay || G)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, L.delay);
          }
        }
        function m() {
          M.find(s).each(function (l, G) {
            e(G).triggerHandler(P);
          });
        }
        function q(l) {
          var G = l.el[0];
          k.each(function (W, L) {
            var ie = e(L);
            ie.is(G) || ie.has(G).length || ie.triggerHandler(P);
          });
        }
        function U(l) {
          return (
            l.mouseUpOutside && M.off(w, l.mouseUpOutside),
            r(function (G) {
              if (l.open) {
                var W = e(G.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var L = e.inArray(l.el[0], W.parents(s)) === -1,
                    ie = Wt.env("editor");
                  if (L) {
                    if (ie) {
                      var fe =
                          W.parents().length === 1 &&
                          W.parents("svg").length === 1,
                        oe = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (fe || oe) return;
                    }
                    S(l);
                  }
                }
              }
            })
          );
        }
        function B(l) {
          return function () {
            l.list.removeClass(d),
              l.toggle.removeClass(d),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function J(l) {
          return function () {
            (l.hovering = !0), H(l);
          };
        }
        function re(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || S(l);
          };
        }
        function V(l) {
          return r(function (G) {
            if (l.open) {
              var W = e(G.target),
                L = e.inArray(l.el[0], W.parents(s)) === -1;
              if (L) {
                var ie = W.parents(".w-editor-bem-EditorHoverControls").length,
                  fe = W.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  h =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || fe || h) return;
                (l.hovering = !1), S(l);
              }
            }
          });
        }
        function j(l) {
          return function (G) {
            if (!(a || !l.open))
              switch (
                ((l.selectedIdx = l.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case tt.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), p(l), G.preventDefault())
                    : void 0;
                case tt.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      p(l),
                      G.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return S(l), l.toggle.focus(), G.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    p(l),
                    G.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    p(l),
                    G.preventDefault()
                  );
              }
          };
        }
        function p(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function b(l) {
          var G = ee(l, Gb);
          return function (W) {
            if (!a) {
              if (!l.open)
                switch (W.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return G(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function _(l) {
          return r(function (G) {
            var { relatedTarget: W, target: L } = G,
              ie = l.el[0],
              fe = ie.contains(W) || ie.contains(L);
            return fe || S(l), G.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var Wb = c((Ps) => {
    "use strict";
    Object.defineProperty(Ps, "__esModule", { value: !0 });
    Ps.default = WV;
    function WV(e, t, r, n, i, o, a, u, s, d, y, v, g) {
      return function (E) {
        e(E);
        var O = E.form,
          I = {
            name: O.attr("data-name") || O.attr("name") || "Untitled Form",
            pageId: O.attr("data-wf-page-id") || "",
            elementId: O.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              O.html()
            ),
            trackingCookies: n(),
          };
        let C = O.attr("data-wf-flow");
        C && (I.wfFlow = C), i(E);
        var w = o(O, I.fields);
        if (w) return a(w);
        if (((I.fileUploads = u(O)), s(E), !d)) {
          y(E);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (P) {
            P && P.code === 200 && (E.success = !0), y(E);
          })
          .fail(function () {
            y(E);
          });
      };
    }
  });
  var Bb = c((pz, Hb) => {
    "use strict";
    var Pi = Ne();
    Pi.define(
      "forms",
      (Hb.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          u = ".w-form",
          s,
          d = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          v = window.alert,
          g = Pi.env(),
          E,
          O,
          I,
          C = /list-manage[1-9]?.com/i,
          w = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              P(), !g && !E && M();
            };
        function P() {
          (s = e("html").attr("data-wf-site")),
            (O = "https://webflow.com/api/v1/form/" + s),
            a &&
              O.indexOf("https://webflow.com") >= 0 &&
              (O = O.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (I = `${O}/signFile`),
            (i = e(u + " form")),
            i.length && i.each(R);
        }
        function R(V, j) {
          var p = e(j),
            b = e.data(j, u);
          b || (b = e.data(j, u, { form: p })), k(b);
          var _ = p.closest("div.w-form");
          (b.done = _.find("> .w-form-done")),
            (b.fail = _.find("> .w-form-fail")),
            (b.fileUploads = _.find(".w-file-upload")),
            b.fileUploads.each(function (W) {
              B(W, b);
            });
          var l =
            b.form.attr("aria-label") || b.form.attr("data-name") || "Form";
          b.done.attr("aria-label") || b.form.attr("aria-label", l),
            b.done.attr("tabindex", "-1"),
            b.done.attr("role", "region"),
            b.done.attr("aria-label") ||
              b.done.attr("aria-label", l + " success"),
            b.fail.attr("tabindex", "-1"),
            b.fail.attr("role", "region"),
            b.fail.attr("aria-label") ||
              b.fail.attr("aria-label", l + " failure");
          var G = (b.action = p.attr("action"));
          if (
            ((b.handler = null),
            (b.redirect = p.attr("data-redirect")),
            C.test(G))
          ) {
            b.handler = m;
            return;
          }
          if (!G) {
            if (s) {
              b.handler = (() => {
                let W = Wb().default;
                return W(k, o, Pi, ee, U, z, v, K, F, s, q, e, O);
              })();
              return;
            }
            w();
          }
        }
        function M() {
          (E = !0),
            n.on("submit", u + " form", function (W) {
              var L = e.data(this, u);
              L.handler && ((L.evt = W), L.handler(L));
            });
          let V = ".w-checkbox-input",
            j = ".w-radio-input",
            p = "w--redirected-checked",
            b = "w--redirected-focus",
            _ = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            G = [
              ["checkbox", V],
              ["radio", j],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + V + ")",
            (W) => {
              e(W.target).siblings(V).toggleClass(p);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${V})`).map((ie, fe) =>
                e(fe).siblings(j).removeClass(p)
              );
              let L = e(W.target);
              L.hasClass("w-radio-input") || L.siblings(j).addClass(p);
            }),
            G.forEach(([W, L]) => {
              n.on(
                "focus",
                u + ` form input[type="${W}"]:not(` + L + ")",
                (ie) => {
                  e(ie.target).siblings(L).addClass(b),
                    e(ie.target).filter(l).siblings(L).addClass(_);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${W}"]:not(` + L + ")",
                  (ie) => {
                    e(ie.target).siblings(L).removeClass(`${b} ${_}`);
                  }
                );
            });
        }
        function k(V) {
          var j = (V.btn = V.form.find(':input[type="submit"]'));
          (V.wait = V.btn.attr("data-wait") || null),
            (V.success = !1),
            j.prop("disabled", !1),
            V.label && j.val(V.label);
        }
        function F(V) {
          var j = V.btn,
            p = V.wait;
          j.prop("disabled", !0), p && ((V.label = j.val()), j.val(p));
        }
        function z(V, j) {
          var p = null;
          return (
            (j = j || {}),
            V.find(':input:not([type="submit"]):not([type="file"])').each(
              function (b, _) {
                var l = e(_),
                  G = l.attr("type"),
                  W =
                    l.attr("data-name") || l.attr("name") || "Field " + (b + 1);
                W = encodeURIComponent(W);
                var L = l.val();
                if (G === "checkbox") L = l.is(":checked");
                else if (G === "radio") {
                  if (j[W] === null || typeof j[W] == "string") return;
                  L =
                    V.find(
                      'input[name="' + l.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof L == "string" && (L = e.trim(L)),
                  (j[W] = L),
                  (p = p || H(l, G, W, L));
              }
            ),
            p
          );
        }
        function K(V) {
          var j = {};
          return (
            V.find(':input[type="file"]').each(function (p, b) {
              var _ = e(b),
                l = _.attr("data-name") || _.attr("name") || "File " + (p + 1),
                G = _.attr("data-value");
              typeof G == "string" && (G = e.trim(G)), (j[l] = G);
            }),
            j
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function ee() {
          return document.cookie.split("; ").reduce(function (j, p) {
            let b = p.split("="),
              _ = b[0];
            if (_ in Q) {
              let l = Q[_],
                G = b.slice(1).join("=");
              j[l] = G;
            }
            return j;
          }, {});
        }
        function H(V, j, p, b) {
          var _ = null;
          return (
            j === "password"
              ? (_ = "Passwords cannot be submitted.")
              : V.attr("required")
              ? b
                ? d.test(V.attr("type")) &&
                  (y.test(b) ||
                    (_ = "Please enter a valid email address for: " + p))
                : (_ = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !b &&
                (_ = "Please confirm you\u2019re not a robot."),
            _
          );
        }
        function S(V) {
          U(V), q(V);
        }
        function m(V) {
          k(V);
          var j = V.form,
            p = {};
          if (/^https/.test(o.href) && !/^https/.test(V.action)) {
            j.attr("method", "post");
            return;
          }
          U(V);
          var b = z(j, p);
          if (b) return v(b);
          F(V);
          var _;
          t.each(p, function (L, ie) {
            d.test(ie) && (p.EMAIL = L),
              /^((full[ _-]?)?name)$/i.test(ie) && (_ = L),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = L),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = L);
          }),
            _ &&
              !p.FNAME &&
              ((_ = _.split(" ")),
              (p.FNAME = _[0]),
              (p.LNAME = p.LNAME || _[1]));
          var l = V.action.replace("/post?", "/post-json?") + "&c=?",
            G = l.indexOf("u=") + 2;
          G = l.substring(G, l.indexOf("&", G));
          var W = l.indexOf("id=") + 3;
          (W = l.substring(W, l.indexOf("&", W))),
            (p["b_" + G + "_" + W] = ""),
            e
              .ajax({ url: l, data: p, dataType: "jsonp" })
              .done(function (L) {
                (V.success = L.result === "success" || /already/.test(L.msg)),
                  V.success || console.info("MailChimp error: " + L.msg),
                  q(V);
              })
              .fail(function () {
                q(V);
              });
        }
        function q(V) {
          var j = V.form,
            p = V.redirect,
            b = V.success;
          if (b && p) {
            Pi.location(p);
            return;
          }
          V.done.toggle(b),
            V.fail.toggle(!b),
            b ? V.done.focus() : V.fail.focus(),
            j.toggle(!b),
            k(V);
        }
        function U(V) {
          V.evt && V.evt.preventDefault(), (V.evt = null);
        }
        function B(V, j) {
          if (!j.fileUploads || !j.fileUploads[V]) return;
          var p,
            b = e(j.fileUploads[V]),
            _ = b.find("> .w-file-upload-default"),
            l = b.find("> .w-file-upload-uploading"),
            G = b.find("> .w-file-upload-success"),
            W = b.find("> .w-file-upload-error"),
            L = _.find(".w-file-upload-input"),
            ie = _.find(".w-file-upload-label"),
            fe = ie.children(),
            oe = W.find(".w-file-upload-error-msg"),
            h = G.find(".w-file-upload-file"),
            X = G.find(".w-file-remove-link"),
            Z = h.find(".w-file-upload-file-name"),
            Y = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            Fe = oe.attr("data-w-generic-error");
          if (
            (g ||
              ie.on("click keydown", function (A) {
                (A.type === "keydown" && A.which !== 13 && A.which !== 32) ||
                  (A.preventDefault(), L.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            L.on("click", function (A) {
              A.preventDefault();
            }),
              ie.on("click", function (A) {
                A.preventDefault();
              }),
              fe.on("click", function (A) {
                A.preventDefault();
              });
          else {
            X.on("click keydown", function (A) {
              if (A.type === "keydown") {
                if (A.which !== 13 && A.which !== 32) return;
                A.preventDefault();
              }
              L.removeAttr("data-value"),
                L.val(""),
                Z.html(""),
                _.toggle(!0),
                G.toggle(!1),
                ie.focus();
            }),
              L.on("change", function (A) {
                (p = A.target && A.target.files && A.target.files[0]),
                  p &&
                    (_.toggle(!1),
                    W.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Z.text(p.name),
                    N() || F(j),
                    (j.fileUploads[V].uploading = !0),
                    J(p, T));
              });
            var Be = ie.outerHeight();
            L.height(Be), L.width(1);
          }
          function f(A) {
            var D = A.responseJSON && A.responseJSON.msg,
              te = Fe;
            typeof D == "string" && D.indexOf("InvalidFileTypeError") === 0
              ? (te = de)
              : typeof D == "string" &&
                D.indexOf("MaxFileSizeError") === 0 &&
                (te = Y),
              oe.text(te),
              L.removeAttr("data-value"),
              L.val(""),
              l.toggle(!1),
              _.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (j.fileUploads[V].uploading = !1),
              N() || k(j);
          }
          function T(A, D) {
            if (A) return f(A);
            var te = D.fileName,
              ae = D.postData,
              ge = D.fileId,
              $ = D.s3Url;
            L.attr("data-value", ge), re($, ae, p, te, x);
          }
          function x(A) {
            if (A) return f(A);
            l.toggle(!1),
              G.css("display", "inline-block"),
              G.focus(),
              (j.fileUploads[V].uploading = !1),
              N() || k(j);
          }
          function N() {
            var A = (j.fileUploads && j.fileUploads.toArray()) || [];
            return A.some(function (D) {
              return D.uploading;
            });
          }
        }
        function J(V, j) {
          var p = new URLSearchParams({ name: V.name, size: V.size });
          e.ajax({ type: "GET", url: `${I}?${p}`, crossDomain: !0 })
            .done(function (b) {
              j(null, b);
            })
            .fail(function (b) {
              j(b);
            });
        }
        function re(V, j, p, b, _) {
          var l = new FormData();
          for (var G in j) l.append(G, j[G]);
          l.append("file", p, b),
            e
              .ajax({
                type: "POST",
                url: V,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                _(null);
              })
              .fail(function (W) {
                _(W);
              });
        }
        return r;
      })
    );
  });
  var jb = c((vz, Xb) => {
    "use strict";
    var St = Ne(),
      HV = Xt(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (Xb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          d,
          y,
          v = St.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          O = "w--open",
          I = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          w = "w--nav-dropdown-list-open",
          P = "w--nav-link-open",
          R = HV.triggers,
          M = e();
        (r.ready = r.design = r.preview = k),
          (r.destroy = function () {
            (M = e()), F(), s && s.length && s.each(ee);
          });
        function k() {
          (d = v && St.env("design")),
            (y = St.env("editor")),
            (u = e(document.body)),
            (s = o.find(E)),
            s.length && (s.each(Q), F(), z());
        }
        function F() {
          St.resize.off(K);
        }
        function z() {
          St.resize.on(K);
        }
        function K() {
          s.each(_);
        }
        function Q(h, X) {
          var Z = e(X),
            Y = e.data(X, E);
          Y ||
            (Y = e.data(X, E, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = Z.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = Z.find(".w-nav-button")),
            (Y.container = Z.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + h),
            (Y.outside = p(Y));
          var de = Z.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(E),
            Y.button.off(E),
            Y.menu.off(E),
            m(Y),
            d
              ? (H(Y), Y.el.on("setting" + E, q(Y)))
              : (S(Y),
                Y.button.on("click" + E, V(Y)),
                Y.menu.on("click" + E, "a", j(Y)),
                Y.button.on("keydown" + E, U(Y)),
                Y.el.on("keydown" + E, B(Y))),
            _(h, X);
        }
        function ee(h, X) {
          var Z = e.data(X, E);
          Z && (H(Z), e.removeData(X, E));
        }
        function H(h) {
          h.overlay && (oe(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function S(h) {
          h.overlay ||
            ((h.overlay = e(g).appendTo(h.el)),
            h.overlay.attr("id", h.overlayContainerId),
            (h.parent = h.menu.parent()),
            oe(h, !0));
        }
        function m(h) {
          var X = {},
            Z = h.config || {},
            Y = (X.animation = h.el.attr("data-animation") || "default");
          (X.animOver = /^over/.test(Y)),
            (X.animDirect = /left$/.test(Y) ? -1 : 1),
            Z.animation !== Y && h.open && t.defer(re, h),
            (X.easing = h.el.attr("data-easing") || "ease"),
            (X.easing2 = h.el.attr("data-easing2") || "ease");
          var de = h.el.attr("data-duration");
          (X.duration = de != null ? Number(de) : 400),
            (X.docHeight = h.el.attr("data-doc-height")),
            (h.config = X);
        }
        function q(h) {
          return function (X, Z) {
            Z = Z || {};
            var Y = i.width();
            m(h),
              Z.open === !0 && ie(h, !0),
              Z.open === !1 && oe(h, !0),
              h.open &&
                t.defer(function () {
                  Y !== i.width() && re(h);
                });
          };
        }
        function U(h) {
          return function (X) {
            switch (X.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return V(h)(), X.preventDefault(), X.stopPropagation();
              case Se.ESCAPE:
                return oe(h), X.preventDefault(), X.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return h.open
                  ? (X.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function B(h) {
          return function (X) {
            if (h.open)
              switch (
                ((h.selectedIdx = h.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    X.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(h),
                    h.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (h.selectedIdx = Math.min(
                      h.links.length - 1,
                      h.selectedIdx + 1
                    )),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
              }
          };
        }
        function J(h) {
          if (h.links[h.selectedIdx]) {
            var X = h.links[h.selectedIdx];
            X.focus(), j(X);
          }
        }
        function re(h) {
          h.open && (oe(h, !0), ie(h, !0));
        }
        function V(h) {
          return a(function () {
            h.open ? oe(h) : ie(h);
          });
        }
        function j(h) {
          return function (X) {
            var Z = e(this),
              Y = Z.attr("href");
            if (!St.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && h.open && oe(h);
          };
        }
        function p(h) {
          return (
            h.outside && o.off("click" + E, h.outside),
            function (X) {
              var Z = e(X.target);
              (y && Z.closest(".w-editor-bem-EditorOverlay").length) || b(h, Z);
            }
          );
        }
        var b = a(function (h, X) {
          if (h.open) {
            var Z = X.closest(".w-nav-menu");
            h.menu.is(Z) || oe(h);
          }
        });
        function _(h, X) {
          var Z = e.data(X, E),
            Y = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !Y && !d && oe(Z, !0), Z.container.length)) {
            var de = G(Z);
            Z.links.each(de), Z.dropdowns.each(de);
          }
          Z.open && fe(Z);
        }
        var l = "max-width";
        function G(h) {
          var X = h.container.css(l);
          return (
            X === "none" && (X = ""),
            function (Z, Y) {
              (Y = e(Y)), Y.css(l, ""), Y.css(l) === "none" && Y.css(l, X);
            }
          );
        }
        function W(h, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function L(h, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function ie(h, X) {
          if (h.open) return;
          (h.open = !0),
            h.menu.each(W),
            h.links.addClass(P),
            h.dropdowns.addClass(I),
            h.dropdownToggle.addClass(C),
            h.dropdownList.addClass(w),
            h.button.addClass(O);
          var Z = h.config,
            Y = Z.animation;
          (Y === "none" || !n.support.transform || Z.duration <= 0) && (X = !0);
          var de = fe(h),
            Fe = h.menu.outerHeight(!0),
            Be = h.menu.outerWidth(!0),
            f = h.el.height(),
            T = h.el[0];
          if (
            (_(0, T),
            R.intro(0, T),
            St.redraw.up(),
            d || o.on("click" + E, h.outside),
            X)
          ) {
            A();
            return;
          }
          var x = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (h.overlay &&
              ((M = h.menu.prev()), h.overlay.show().append(h.menu)),
            Z.animOver)
          ) {
            n(h.menu)
              .add(x)
              .set({ x: Z.animDirect * Be, height: de })
              .start({ x: 0 })
              .then(A),
              h.overlay && h.overlay.width(Be);
            return;
          }
          var N = f + Fe;
          n(h.menu).add(x).set({ y: -N }).start({ y: 0 }).then(A);
          function A() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function fe(h) {
          var X = h.config,
            Z = X.docHeight ? o.height() : u.height();
          return (
            X.animOver
              ? h.menu.height(Z)
              : h.el.css("position") !== "fixed" && (Z -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(Z),
            Z
          );
        }
        function oe(h, X) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(O);
          var Z = h.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (X = !0),
            R.outro(0, h.el[0]),
            o.off("click" + E, h.outside),
            X)
          ) {
            n(h.menu).stop(), T();
            return;
          }
          var Y = "transform " + Z.duration + "ms " + Z.easing2,
            de = h.menu.outerHeight(!0),
            Fe = h.menu.outerWidth(!0),
            Be = h.el.height();
          if (Z.animOver) {
            n(h.menu)
              .add(Y)
              .start({ x: Fe * Z.animDirect })
              .then(T);
            return;
          }
          var f = Be + de;
          n(h.menu).add(Y).start({ y: -f }).then(T);
          function T() {
            h.menu.height(""),
              n(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(L),
              h.links.removeClass(P),
              h.dropdowns.removeClass(I),
              h.dropdownToggle.removeClass(C),
              h.dropdownList.removeClass(w),
              h.overlay &&
                h.overlay.children().length &&
                (M.length ? h.menu.insertAfter(M) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Yb = c((gz, Kb) => {
    "use strict";
    var Ct = Ne(),
      BV = Xt(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      zb =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ct.define(
      "slider",
      (Kb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = Ct.env(),
          s = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          g = BV.triggers,
          E,
          O = !1;
        (r.ready = function () {
          (a = Ct.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (O = !0), I(), (O = !1);
          }),
          (r.destroy = C);
        function I() {
          (o = i.find(s)), o.length && (o.each(R), !E && (C(), w()));
        }
        function C() {
          Ct.resize.off(P), Ct.redraw.off(r.redraw);
        }
        function w() {
          Ct.resize.on(P), Ct.redraw.on(r.redraw);
        }
        function P() {
          o.filter(":visible").each(B);
        }
        function R(p, b) {
          var _ = e(b),
            l = e.data(b, s);
          l ||
            (l = e.data(b, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: _,
              config: {},
            })),
            (l.mask = _.children(".w-slider-mask")),
            (l.left = _.children(".w-slider-arrow-left")),
            (l.right = _.children(".w-slider-arrow-right")),
            (l.nav = _.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(g.reset),
            O && (l.maskWidth = 0),
            _.attr("role") === void 0 && _.attr("role", "region"),
            _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
          var G = l.mask.attr("id");
          if (
            (G || ((G = "w-slider-mask-" + p), l.mask.attr("id", G)),
            !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(y).appendTo(l.mask)),
            l.left.attr("role", "button"),
            l.left.attr("tabindex", "0"),
            l.left.attr("aria-controls", G),
            l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
            l.right.attr("role", "button"),
            l.right.attr("tabindex", "0"),
            l.right.attr("aria-controls", G),
            l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (E = !0);
            return;
          }
          l.el.off(s),
            l.left.off(s),
            l.right.off(s),
            l.nav.off(s),
            M(l),
            a
              ? (l.el.on("setting" + s, m(l)), S(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + s, m(l)),
                l.left.on("click" + s, K(l)),
                l.right.on("click" + s, Q(l)),
                l.left.on("keydown" + s, z(l, K)),
                l.right.on("keydown" + s, z(l, Q)),
                l.nav.on("keydown" + s, "> div", m(l)),
                l.config.autoplay &&
                  !l.hasTimer &&
                  ((l.hasTimer = !0), (l.timerCount = 1), H(l)),
                l.el.on("mouseenter" + s, F(l, !0, "mouse")),
                l.el.on("focusin" + s, F(l, !0, "keyboard")),
                l.el.on("mouseleave" + s, F(l, !1, "mouse")),
                l.el.on("focusout" + s, F(l, !1, "keyboard"))),
            l.nav.on("click" + s, "> div", m(l)),
            u ||
              l.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var W = _.filter(":hidden");
          W.addClass(v);
          var L = _.parents(":hidden");
          L.addClass(v), O || B(p, b), W.removeClass(v), L.removeClass(v);
        }
        function M(p) {
          var b = {};
          (b.crossOver = 0),
            (b.animation = p.el.attr("data-animation") || "slide"),
            b.animation === "outin" &&
              ((b.animation = "cross"), (b.crossOver = 0.5)),
            (b.easing = p.el.attr("data-easing") || "ease");
          var _ = p.el.attr("data-duration");
          if (
            ((b.duration = _ != null ? parseInt(_, 10) : 500),
            k(p.el.attr("data-infinite")) && (b.infinite = !0),
            k(p.el.attr("data-disable-swipe")) && (b.disableSwipe = !0),
            k(p.el.attr("data-hide-arrows"))
              ? (b.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            k(p.el.attr("data-autoplay")))
          ) {
            (b.autoplay = !0),
              (b.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (b.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + s + " touchstart" + s;
            a ||
              p.el.off(l).one(l, function () {
                S(p);
              });
          }
          var G = p.right.width();
          (b.edge = G ? G + 40 : 100), (p.config = b);
        }
        function k(p) {
          return p === "1" || p === "true";
        }
        function F(p, b, _) {
          return function (l) {
            if (b) p.hasFocus[_] = b;
            else if (
              e.contains(p.el.get(0), l.relatedTarget) ||
              ((p.hasFocus[_] = b),
              (p.hasFocus.mouse && _ === "keyboard") ||
                (p.hasFocus.keyboard && _ === "mouse"))
            )
              return;
            b
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && S(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && H(p));
          };
        }
        function z(p, b) {
          return function (_) {
            switch (_.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return b(p)(), _.preventDefault(), _.stopPropagation();
            }
          };
        }
        function K(p) {
          return function () {
            U(p, { index: p.index - 1, vector: -1 });
          };
        }
        function Q(p) {
          return function () {
            U(p, { index: p.index + 1, vector: 1 });
          };
        }
        function ee(p, b) {
          var _ = null;
          b === p.slides.length && (I(), J(p)),
            t.each(p.anchors, function (l, G) {
              e(l.els).each(function (W, L) {
                e(L).index() === b && (_ = G);
              });
            }),
            _ != null && U(p, { index: _, immediate: !0 });
        }
        function H(p) {
          S(p);
          var b = p.config,
            _ = b.timerMax;
          (_ && p.timerCount++ > _) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (Q(p)(), H(p));
            }, b.delay));
        }
        function S(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function m(p) {
          return function (b, _) {
            _ = _ || {};
            var l = p.config;
            if (a && b.type === "setting") {
              if (_.select === "prev") return K(p)();
              if (_.select === "next") return Q(p)();
              if ((M(p), J(p), _.select == null)) return;
              ee(p, _.select);
              return;
            }
            if (b.type === "swipe")
              return l.disableSwipe || Ct.env("editor")
                ? void 0
                : _.direction === "left"
                ? Q(p)()
                : _.direction === "right"
                ? K(p)()
                : void 0;
            if (p.nav.has(b.target).length) {
              var G = e(b.target).index();
              if (
                (b.type === "click" && U(p, { index: G }), b.type === "keydown")
              )
                switch (b.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    U(p, { index: G }), b.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    q(p.nav, Math.max(G - 1, 0)), b.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    q(p.nav, Math.min(G + 1, p.pages)), b.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    q(p.nav, 0), b.preventDefault();
                    break;
                  }
                  case dt.END: {
                    q(p.nav, p.pages), b.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function q(p, b) {
          var _ = p.children().eq(b).focus();
          p.children().not(_);
        }
        function U(p, b) {
          b = b || {};
          var _ = p.config,
            l = p.anchors;
          p.previous = p.index;
          var G = b.index,
            W = {};
          G < 0
            ? ((G = l.length - 1),
              _.infinite &&
                ((W.x = -p.endX), (W.from = 0), (W.to = l[0].width)))
            : G >= l.length &&
              ((G = 0),
              _.infinite &&
                ((W.x = l[l.length - 1].width),
                (W.from = -l[l.length - 1].x),
                (W.to = W.from - W.x))),
            (p.index = G);
          var L = p.nav
            .children()
            .eq(G)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(L)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            _.hideArrows &&
              (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            fe = (p.offsetX = -l[p.index].x),
            oe = { x: fe, opacity: 1, visibility: "" },
            h = e(l[p.index].els),
            X = e(l[p.previous] && l[p.previous].els),
            Z = p.slides.not(h),
            Y = _.animation,
            de = _.easing,
            Fe = Math.round(_.duration),
            Be = b.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + Fe + "ms " + de,
            T = "transform " + Fe + "ms " + de;
          if (
            (h.find(zb).removeAttr("tabindex"),
            h.removeAttr("aria-hidden"),
            h.find("*").removeAttr("aria-hidden"),
            Z.find(zb).attr("tabindex", "-1"),
            Z.attr("aria-hidden", "true"),
            Z.find("*").attr("aria-hidden", "true"),
            a || (h.each(g.intro), Z.each(g.outro)),
            b.immediate && !O)
          ) {
            n(h).set(oe), A();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`),
            Y === "cross")
          ) {
            var x = Math.round(Fe - Fe * _.crossOver),
              N = Math.round(Fe - x);
            (f = "opacity " + x + "ms " + de),
              n(X).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(h)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(N)
                .then({ opacity: 1 })
                .then(A);
            return;
          }
          if (Y === "fade") {
            n(X).set({ visibility: "" }).stop(),
              n(h)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(A);
            return;
          }
          if (Y === "over") {
            (oe = { x: p.endX }),
              n(X).set({ visibility: "" }).stop(),
              n(h)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: fe + l[p.index].width * Be,
                })
                .add(T)
                .start({ x: fe })
                .then(A);
            return;
          }
          _.infinite && W.x
            ? (n(p.slides.not(X))
                .set({ visibility: "", x: W.x })
                .add(T)
                .start({ x: fe }),
              n(X).set({ visibility: "", x: W.from }).add(T).start({ x: W.to }),
              (p.shifted = X))
            : (_.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(T).start({ x: fe }));
          function A() {
            (h = e(l[p.index].els)),
              (Z = p.slides.not(h)),
              Y !== "slide" && (oe.visibility = "hidden"),
              n(Z).set(oe);
          }
        }
        function B(p, b) {
          var _ = e.data(b, s);
          if (_) {
            if (V(_)) return J(_);
            a && j(_) && J(_);
          }
        }
        function J(p) {
          var b = 1,
            _ = 0,
            l = 0,
            G = 0,
            W = p.maskWidth,
            L = W - p.config.edge;
          L < 0 && (L = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (fe, oe) {
              l - _ > L &&
                (b++,
                (_ += W),
                (p.anchors[b - 1] = { els: [], x: l, width: 0 })),
                (G = e(oe).outerWidth(!0)),
                (l += G),
                (p.anchors[b - 1].width += G),
                p.anchors[b - 1].els.push(oe);
              var h = fe + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", h), e(oe).attr("role", "group");
            }),
            (p.endX = l),
            a && (p.pages = null),
            p.nav.length && p.pages !== b && ((p.pages = b), re(p));
          var ie = p.index;
          ie >= b && (ie = b - 1), U(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var b = [],
            _,
            l = p.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var G = 0, W = p.pages; G < W; G++)
            (_ = e(d)),
              _.attr("aria-label", "Show slide " + (G + 1) + " of " + W)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && _.text(G + 1),
              l != null && _.css({ "margin-left": l, "margin-right": l }),
              b.push(_);
          p.nav.empty().append(b);
        }
        function V(p) {
          var b = p.mask.width();
          return p.maskWidth !== b ? ((p.maskWidth = b), !0) : !1;
        }
        function j(p) {
          var b = 0;
          return (
            p.slides.each(function (_, l) {
              b += e(l).outerWidth(!0);
            }),
            p.slidesWidth !== b ? ((p.slidesWidth = b), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var Qb = c((hz, $b) => {
    "use strict";
    var Rt = Ne(),
      XV = Xt();
    Rt.define(
      "tabs",
      ($b.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Rt.env,
          u = a.safari,
          s = a(),
          d = "data-w-tab",
          y = "data-w-pane",
          v = ".w-tabs",
          g = "w--current",
          E = "w--tab-active",
          O = XV.triggers,
          I = !1;
        (t.ready = t.design = t.preview = C),
          (t.redraw = function () {
            (I = !0), C(), (I = !1);
          }),
          (t.destroy = function () {
            (i = n.find(v)), i.length && (i.each(R), w());
          });
        function C() {
          (o = s && Rt.env("design")),
            (i = n.find(v)),
            i.length &&
              (i.each(M), Rt.env("preview") && !I && i.each(R), w(), P());
        }
        function w() {
          Rt.redraw.off(t.redraw);
        }
        function P() {
          Rt.redraw.on(t.redraw);
        }
        function R(H, S) {
          var m = e.data(S, v);
          m &&
            (m.links && m.links.each(O.reset),
            m.panes && m.panes.each(O.reset));
        }
        function M(H, S) {
          var m = v.substr(1) + "-" + H,
            q = e(S),
            U = e.data(S, v);
          if (
            (U || (U = e.data(S, v, { el: q, config: {} })),
            (U.current = null),
            (U.tabIdentifier = m + "-" + d),
            (U.paneIdentifier = m + "-" + y),
            (U.menu = q.children(".w-tab-menu")),
            (U.links = U.menu.children(".w-tab-link")),
            (U.content = q.children(".w-tab-content")),
            (U.panes = U.content.children(".w-tab-pane")),
            U.el.off(v),
            U.links.off(v),
            U.menu.attr("role", "tablist"),
            U.links.attr("tabindex", "-1"),
            k(U),
            !o)
          ) {
            U.links.on("click" + v, z(U)), U.links.on("keydown" + v, K(U));
            var B = U.links.filter("." + g),
              J = B.attr(d);
            J && Q(U, { tab: J, immediate: !0 });
          }
        }
        function k(H) {
          var S = {};
          S.easing = H.el.attr("data-easing") || "ease";
          var m = parseInt(H.el.attr("data-duration-in"), 10);
          m = S.intro = m === m ? m : 0;
          var q = parseInt(H.el.attr("data-duration-out"), 10);
          (q = S.outro = q === q ? q : 0),
            (S.immediate = !m && !q),
            (H.config = S);
        }
        function F(H) {
          var S = H.current;
          return Array.prototype.findIndex.call(
            H.links,
            (m) => m.getAttribute(d) === S,
            null
          );
        }
        function z(H) {
          return function (S) {
            S.preventDefault();
            var m = S.currentTarget.getAttribute(d);
            m && Q(H, { tab: m });
          };
        }
        function K(H) {
          return function (S) {
            var m = F(H),
              q = S.key,
              U = {
                ArrowLeft: m - 1,
                ArrowUp: m - 1,
                ArrowRight: m + 1,
                ArrowDown: m + 1,
                End: H.links.length - 1,
                Home: 0,
              };
            if (q in U) {
              S.preventDefault();
              var B = U[q];
              B === -1 && (B = H.links.length - 1),
                B === H.links.length && (B = 0);
              var J = H.links[B],
                re = J.getAttribute(d);
              re && Q(H, { tab: re });
            }
          };
        }
        function Q(H, S) {
          S = S || {};
          var m = H.config,
            q = m.easing,
            U = S.tab;
          if (U !== H.current) {
            H.current = U;
            var B;
            H.links.each(function (_, l) {
              var G = e(l);
              if (S.immediate || m.immediate) {
                var W = H.panes[_];
                l.id || (l.id = H.tabIdentifier + "-" + _),
                  W.id || (W.id = H.paneIdentifier + "-" + _),
                  (l.href = "#" + W.id),
                  l.setAttribute("role", "tab"),
                  l.setAttribute("aria-controls", W.id),
                  l.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", l.id);
              }
              l.getAttribute(d) === U
                ? ((B = l),
                  G.addClass(g)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(O.intro))
                : G.hasClass(g) &&
                  G.removeClass(g)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(O.outro);
            });
            var J = [],
              re = [];
            H.panes.each(function (_, l) {
              var G = e(l);
              l.getAttribute(d) === U ? J.push(l) : G.hasClass(E) && re.push(l);
            });
            var V = e(J),
              j = e(re);
            if (S.immediate || m.immediate) {
              V.addClass(E).each(O.intro),
                j.removeClass(E),
                I || Rt.redraw.up();
              return;
            } else {
              var p = window.scrollX,
                b = window.scrollY;
              B.focus(), window.scrollTo(p, b);
            }
            j.length && m.outro
              ? (j.each(O.outro),
                r(j)
                  .add("opacity " + m.outro + "ms " + q, { fallback: u })
                  .start({ opacity: 0 })
                  .then(() => ee(m, j, V)))
              : ee(m, j, V);
          }
        }
        function ee(H, S, m) {
          if (
            (S.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            m.addClass(E).each(O.intro),
            Rt.redraw.up(),
            !H.intro)
          )
            return r(m).set({ opacity: 1 });
          r(m)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + H.intro + "ms " + H.easing, { fallback: u })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  zs();
  Ys();
  Qs();
  eu();
  Xt();
  Nb();
  qb();
  Fb();
  kb();
  Vb();
  Bb();
  jb();
  Yb();
  Qb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-widget-link",
        originalId: "3193b039-ed39-83ed-ea3e-07b8242c9d90",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-widget-link",
          originalId: "3193b039-ed39-83ed-ea3e-07b8242c9d90",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713327295885,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-widget-link",
        originalId: "3193b039-ed39-83ed-ea3e-07b8242c9d90",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-widget-link",
          originalId: "3193b039-ed39-83ed-ea3e-07b8242c9d90",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713327295885,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd3373d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd3373d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155271198,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd3373d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd3373d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155271198,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33747",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33747",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155886057,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33747",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33747",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155886057,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33765",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33765",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155933612,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33765",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33765",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155933612,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd3375b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd3375b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155934149,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd3375b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd3375b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155934149,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33751",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33751",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155934889,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33751",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33751",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714155934889,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-image-wrap",
        originalId:
          "661eb7d0d33ad1e604f69743|ff22be79-fd3f-2e7e-c3a9-3fd55d5d7811",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-image-wrap",
          originalId:
            "661eb7d0d33ad1e604f69743|ff22be79-fd3f-2e7e-c3a9-3fd55d5d7811",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714199359128,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-image-wrap",
        originalId:
          "661eb7d0d33ad1e604f69743|ff22be79-fd3f-2e7e-c3a9-3fd55d5d7811",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-image-wrap",
          originalId:
            "661eb7d0d33ad1e604f69743|ff22be79-fd3f-2e7e-c3a9-3fd55d5d7811",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714199359128,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|b6ddeec6-44c2-d047-58b6-a58b9632e008",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|b6ddeec6-44c2-d047-58b6-a58b9632e008",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714635505243,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|b6ddeec6-44c2-d047-58b6-a58b9632e008",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|b6ddeec6-44c2-d047-58b6-a58b9632e008",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714635505243,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|7888f1a7-3a3d-2f9a-72fe-07fb268e3c2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|7888f1a7-3a3d-2f9a-72fe-07fb268e3c2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714648223861,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|7888f1a7-3a3d-2f9a-72fe-07fb268e3c2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|7888f1a7-3a3d-2f9a-72fe-07fb268e3c2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714648223861,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cadd2ebae8afb1d977959|4d715784-1ca4-edc2-fbe2-3e7203748a70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cadd2ebae8afb1d977959|4d715784-1ca4-edc2-fbe2-3e7203748a70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714989137908,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cadd2ebae8afb1d977959|4d715784-1ca4-edc2-fbe2-3e7203748a70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cadd2ebae8afb1d977959|4d715784-1ca4-edc2-fbe2-3e7203748a70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714989137908,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7b91daf9-65cb-2ce8-c934-2b32f82a4850",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7b91daf9-65cb-2ce8-c934-2b32f82a4850",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716622636614,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7b91daf9-65cb-2ce8-c934-2b32f82a4850",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7b91daf9-65cb-2ce8-c934-2b32f82a4850",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716622636615,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-social-link",
        originalId:
          "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d72",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-social-link",
          originalId:
            "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d72",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719298373892,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-social-link",
        originalId:
          "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d72",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-social-link",
          originalId:
            "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d72",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719298373893,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cba9aa85c97710101d676|2919d7fe-ef03-2542-7880-ee95f8190174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cba9aa85c97710101d676|2919d7fe-ef03-2542-7880-ee95f8190174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719313762592,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cba9aa85c97710101d676|2919d7fe-ef03-2542-7880-ee95f8190174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cba9aa85c97710101d676|2919d7fe-ef03-2542-7880-ee95f8190174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719313762592,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-list-item-wrap",
        originalId:
          "661eb7d0d33ad1e604f69743|b2e1033d-5f71-8db0-c59f-15bab076d9ba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-list-item-wrap",
          originalId:
            "661eb7d0d33ad1e604f69743|b2e1033d-5f71-8db0-c59f-15bab076d9ba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720071193615,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-list-item-wrap",
        originalId:
          "661eb7d0d33ad1e604f69743|b2e1033d-5f71-8db0-c59f-15bab076d9ba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-list-item-wrap",
          originalId:
            "661eb7d0d33ad1e604f69743|b2e1033d-5f71-8db0-c59f-15bab076d9ba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720071193616,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-card-wrap.about-team",
        originalId:
          "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d6b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-card-wrap.about-team",
          originalId:
            "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d6b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720073703718,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-card-wrap.about-team",
        originalId:
          "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d6b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-card-wrap.about-team",
          originalId:
            "661eb7d0d33ad1e604f69743|79bd7fd8-520c-72bd-d79a-14152b8f0d6b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720073703718,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|af673996-faf9-1365-1f47-93e8313cb1e8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|af673996-faf9-1365-1f47-93e8313cb1e8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033073200,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|af673996-faf9-1365-1f47-93e8313cb1e8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|af673996-faf9-1365-1f47-93e8313cb1e8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033073201,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|cbe8efaa-38e6-409a-1183-4f990082edc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|cbe8efaa-38e6-409a-1183-4f990082edc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033285345,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|cbe8efaa-38e6-409a-1183-4f990082edc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|cbe8efaa-38e6-409a-1183-4f990082edc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033285345,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|2490091e-4501-3d30-d03d-aa44eb3a76a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|2490091e-4501-3d30-d03d-aa44eb3a76a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033340118,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|2490091e-4501-3d30-d03d-aa44eb3a76a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|2490091e-4501-3d30-d03d-aa44eb3a76a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033340119,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|16fb7647-46dd-6bf2-28d8-40d03913b5b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|16fb7647-46dd-6bf2-28d8-40d03913b5b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033360768,
    },
    "e-104": {
      id: "e-104",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-103",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|16fb7647-46dd-6bf2-28d8-40d03913b5b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|16fb7647-46dd-6bf2-28d8-40d03913b5b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033360769,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|ec6f2cd9-115e-8e1f-f923-8d2b4ca7487e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|ec6f2cd9-115e-8e1f-f923-8d2b4ca7487e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033385426,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|ec6f2cd9-115e-8e1f-f923-8d2b4ca7487e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|ec6f2cd9-115e-8e1f-f923-8d2b4ca7487e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033385427,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|48a446b1-3e76-9a3f-d809-5cf16be6bb12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|48a446b1-3e76-9a3f-d809-5cf16be6bb12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033416960,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|48a446b1-3e76-9a3f-d809-5cf16be6bb12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|48a446b1-3e76-9a3f-d809-5cf16be6bb12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033416960,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|fbaaa384-3f32-fc3e-199c-0e06a4184bee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|fbaaa384-3f32-fc3e-199c-0e06a4184bee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033436358,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|fbaaa384-3f32-fc3e-199c-0e06a4184bee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|fbaaa384-3f32-fc3e-199c-0e06a4184bee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033436358,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3bf093be-8e2f-1c72-2d2b-43372bd2fc66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3bf093be-8e2f-1c72-2d2b-43372bd2fc66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033486292,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3bf093be-8e2f-1c72-2d2b-43372bd2fc66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3bf093be-8e2f-1c72-2d2b-43372bd2fc66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033486292,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c2a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c2a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033547847,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c2a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c2a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033547848,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|6bab986e-5d61-4998-a395-a3a858456f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|6bab986e-5d61-4998-a395-a3a858456f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033574998,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|6bab986e-5d61-4998-a395-a3a858456f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|6bab986e-5d61-4998-a395-a3a858456f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033574998,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|7c6a3fec-98f9-7df9-3cfd-a124edcf6c8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|7c6a3fec-98f9-7df9-3cfd-a124edcf6c8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033594856,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|7c6a3fec-98f9-7df9-3cfd-a124edcf6c8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|7c6a3fec-98f9-7df9-3cfd-a124edcf6c8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033594857,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|4c12e140-4e3b-3fd4-4538-c2a3f13c3c62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|4c12e140-4e3b-3fd4-4538-c2a3f13c3c62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033613862,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|4c12e140-4e3b-3fd4-4538-c2a3f13c3c62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|4c12e140-4e3b-3fd4-4538-c2a3f13c3c62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033613863,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|04840ae4-7fd5-64ab-cb84-951493050f14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|04840ae4-7fd5-64ab-cb84-951493050f14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033628209,
    },
    "e-122": {
      id: "e-122",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|04840ae4-7fd5-64ab-cb84-951493050f14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|04840ae4-7fd5-64ab-cb84-951493050f14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721033628209,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|6f2eb321-ff0f-e187-af49-1feda3dc90c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|6f2eb321-ff0f-e187-af49-1feda3dc90c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721035823421,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-123",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|6f2eb321-ff0f-e187-af49-1feda3dc90c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|6f2eb321-ff0f-e187-af49-1feda3dc90c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721035823422,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c50611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c50611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036784412,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c50611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c50611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036784413,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-128",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|9b4be89d-e84b-7b11-884f-bbfc50945ca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|9b4be89d-e84b-7b11-884f-bbfc50945ca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036806293,
    },
    "e-128": {
      id: "e-128",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-127",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|9b4be89d-e84b-7b11-884f-bbfc50945ca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|9b4be89d-e84b-7b11-884f-bbfc50945ca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036806294,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-130",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|fd64e176-8ce7-1938-98aa-848c819e04bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|fd64e176-8ce7-1938-98aa-848c819e04bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036852834,
    },
    "e-130": {
      id: "e-130",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-129",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|fd64e176-8ce7-1938-98aa-848c819e04bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|fd64e176-8ce7-1938-98aa-848c819e04bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036852837,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|505dc3fc-8d90-f3a4-7e40-b900ac8b6805",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|505dc3fc-8d90-f3a4-7e40-b900ac8b6805",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036884565,
    },
    "e-132": {
      id: "e-132",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-131",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|505dc3fc-8d90-f3a4-7e40-b900ac8b6805",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|505dc3fc-8d90-f3a4-7e40-b900ac8b6805",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721036884566,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "0c314794-299f-f362-76f5-af541b0bb628",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "0c314794-299f-f362-76f5-af541b0bb628",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721037116959,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "0c314794-299f-f362-76f5-af541b0bb628",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "0c314794-299f-f362-76f5-af541b0bb628",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721037116960,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721294198851,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721294485314,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721294523853,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721294534504,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721294542097,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721294561769,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3022df5e-026c-049c-e103-f271d7d1ed98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3022df5e-026c-049c-e103-f271d7d1ed98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721362263778,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-147",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3022df5e-026c-049c-e103-f271d7d1ed98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3022df5e-026c-049c-e103-f271d7d1ed98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721362263778,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|ca4e9b7a-5518-bca7-e0ce-ff37598efa4f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|ca4e9b7a-5518-bca7-e0ce-ff37598efa4f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721648990510,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3022df5e-026c-049c-e103-f271d7d1ed91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3022df5e-026c-049c-e103-f271d7d1ed91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721984480051,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".hero-counter",
        originalId:
          "661caa5ae3dacb8bb23f4d0c|ca4e9b7a-5518-bca7-e0ce-ff37598efabd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hero-counter",
          originalId:
            "661caa5ae3dacb8bb23f4d0c|ca4e9b7a-5518-bca7-e0ce-ff37598efabd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721984504535,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopRight", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|c91ad33b-993b-94ef-248d-3d3e3c55a5e5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|c91ad33b-993b-94ef-248d-3d3e3c55a5e5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "TOP_RIGHT",
        effectIn: true,
      },
      createdOn: 1721984518624,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|8e086243-983e-1145-2dfe-e297fd0d7b8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|8e086243-983e-1145-2dfe-e297fd0d7b8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721984632815,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|f9d7c679-3dcd-2e22-a68e-7ff417487a2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|f9d7c679-3dcd-2e22-a68e-7ff417487a2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721984661352,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|f9d7c679-3dcd-2e22-a68e-7ff417487a2c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|f9d7c679-3dcd-2e22-a68e-7ff417487a2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721984670864,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|c3e36edb-6801-c564-d66f-61622f6605bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|c3e36edb-6801-c564-d66f-61622f6605bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721984727935,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|c3e36edb-6801-c564-d66f-61622f6605bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|c3e36edb-6801-c564-d66f-61622f6605bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721984737926,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|dca7c44f-ec91-6cde-673f-aa5246482fee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|dca7c44f-ec91-6cde-673f-aa5246482fee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721984751342,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopLeft", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|dca7c44f-ec91-6cde-673f-aa5246482fec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|dca7c44f-ec91-6cde-673f-aa5246482fec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "TOP_LEFT",
        effectIn: true,
      },
      createdOn: 1721984757782,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|4f0cea47-3b0f-6c7a-f3ef-dc498ec7f4fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|4f0cea47-3b0f-6c7a-f3ef-dc498ec7f4fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721984997841,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|9c020188-7cd7-1e36-72f5-69b8e67f4b6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|9c020188-7cd7-1e36-72f5-69b8e67f4b6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721985010738,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-176" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f962d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f962d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721985059106,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f962d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f962d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721985069319,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f962ed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f962ed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721985091504,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f96317",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|78a40140-fed6-6e34-e61d-c0c6f2f96317",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1295,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721985102546,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7b91daf9-65cb-2ce8-c934-2b32f82a47fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7b91daf9-65cb-2ce8-c934-2b32f82a47fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721985164687,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "d8cd9e7d-1b28-e1d5-05d7-0218dc52b54c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "d8cd9e7d-1b28-e1d5-05d7-0218dc52b54c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985306744,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3f370244-bddb-785b-afab-e34a0e655553",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3f370244-bddb-785b-afab-e34a0e655553",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985324159,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-190" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|39777aea-aca9-6dad-d3e5-f1e061f0d5df",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|39777aea-aca9-6dad-d3e5-f1e061f0d5df",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985339952,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-192" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3f370244-bddb-785b-afab-e34a0e65557b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3f370244-bddb-785b-afab-e34a0e65557b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721985356175,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-194" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|3f370244-bddb-785b-afab-e34a0e65556f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|3f370244-bddb-785b-afab-e34a0e65556f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721985369607,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-196" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|75a36bb1-b82f-e7e8-c8ab-323544462663",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|75a36bb1-b82f-e7e8-c8ab-323544462663",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721985569440,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661caa5ae3dacb8bb23f4d0c|0ac33083-b2f7-7179-56b1-60afb6e1747a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661caa5ae3dacb8bb23f4d0c|0ac33083-b2f7-7179-56b1-60afb6e1747a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985904034,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d73",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d73",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985923479,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9dae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9dae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985938231,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9d8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9d8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985951919,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9dd1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9dd1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721985970087,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3193b039-ed39-83ed-ea3e-07b8242c9ded",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3193b039-ed39-83ed-ea3e-07b8242c9ded",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721985991682,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-210" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c29b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c29b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721986024623,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-212" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c2a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|6266cd12-bbbf-8f95-b9eb-31631f22c2a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721986044408,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|f93835e2-7fba-879f-8356-78b6eb0439ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|f93835e2-7fba-879f-8356-78b6eb0439ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986057672,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|dcbe3fd6-f751-ba05-778e-5fdd040ee758",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|dcbe3fd6-f751-ba05-778e-5fdd040ee758",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986102681,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|0e88b614-22d1-f62b-916c-84ee030c4bbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|0e88b614-22d1-f62b-916c-84ee030c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721986174250,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-220" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|3fb9f144-053b-19d4-2586-f9df647fbf3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|3fb9f144-053b-19d4-2586-f9df647fbf3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721986292307,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|1e7274c9-704c-7090-1c9c-030addab0518",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|1e7274c9-704c-7090-1c9c-030addab0518",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721986402104,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|976be94a-dcf8-b49e-67db-ff08015b2e6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|976be94a-dcf8-b49e-67db-ff08015b2e6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721986413759,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|51754467-b8b3-2b74-8047-59b3de75508a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|51754467-b8b3-2b74-8047-59b3de75508a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721986428288,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|416de2b8-5392-0151-68bc-7ca3f999dac1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|416de2b8-5392-0151-68bc-7ca3f999dac1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986444314,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-230" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|ccd05ea5-b274-f5f4-e380-acdc9b86c952",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|ccd05ea5-b274-f5f4-e380-acdc9b86c952",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986454563,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|358b97a4-59b6-10e4-55d7-f20ab84e3148",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|358b97a4-59b6-10e4-55d7-f20ab84e3148",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721986464512,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-234" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|3b814f7e-98d3-1ec4-173f-a13330845a95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|3b814f7e-98d3-1ec4-173f-a13330845a95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721986491600,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-236" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd33737",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd33737",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721986507744,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-238" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "61c8800a-5d2e-afec-780c-397b0cd3373c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "61c8800a-5d2e-afec-780c-397b0cd3373c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721986515483,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-240" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|c9d2e0bb-2a2f-9cf8-ea1d-8717bb03b927",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|c9d2e0bb-2a2f-9cf8-ea1d-8717bb03b927",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721986551523,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661eb7d0d33ad1e604f69743|96ddbc22-b69d-1953-425e-95fcca942c0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661eb7d0d33ad1e604f69743|96ddbc22-b69d-1953-425e-95fcca942c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986565919,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-244" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c5060a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c5060a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721986593520,
    },
    "e-245": {
      id: "e-245",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-246" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c50618",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|10457758-bf2a-dd1d-ed4b-6b3fa9c50618",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721986601944,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-248" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662c9d3db09babfb8889cce6|7888f1a7-3a3d-2f9a-72fe-07fb268e3c2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662c9d3db09babfb8889cce6|7888f1a7-3a3d-2f9a-72fe-07fb268e3c2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986614487,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-250" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|a7f97485-cfcb-d7f9-00fe-f7d9c772e95e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|a7f97485-cfcb-d7f9-00fe-f7d9c772e95e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986846576,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-252" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|6ae2d5b0-798b-4b1b-d38c-6d3cb150e5a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|6ae2d5b0-798b-4b1b-d38c-6d3cb150e5a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986856800,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-254" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd7a92e3e9cd2ad8b7486|6ae2d5b0-798b-4b1b-d38c-6d3cb150e5cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd7a92e3e9cd2ad8b7486|6ae2d5b0-798b-4b1b-d38c-6d3cb150e5cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986867312,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cadd2ebae8afb1d977959|1f3ac2ce-00e6-b0fa-bfc4-8d63075c7071",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cadd2ebae8afb1d977959|1f3ac2ce-00e6-b0fa-bfc4-8d63075c7071",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986912497,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cadd2ebae8afb1d977959|4d715784-1ca4-edc2-fbe2-3e7203748a70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cadd2ebae8afb1d977959|4d715784-1ca4-edc2-fbe2-3e7203748a70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986923249,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|7a3ca483-d6cf-608f-e2fb-bea9dcebfee5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|7a3ca483-d6cf-608f-e2fb-bea9dcebfee5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986939633,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-262" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|e724b288-0cc2-dfc8-ad58-f8b1568cf8e5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|e724b288-0cc2-dfc8-ad58-f8b1568cf8e5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986949344,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-264" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|10559c48-a6e4-6c73-0473-7ecbcfdf7c98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|10559c48-a6e4-6c73-0473-7ecbcfdf7c98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986966898,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-266" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|ead5584f-817c-ab09-518e-4ccb9bd36126",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|ead5584f-817c-ab09-518e-4ccb9bd36126",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 550,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721986976465,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|9b4be89d-e84b-7b11-884f-bbfc50945ca1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|9b4be89d-e84b-7b11-884f-bbfc50945ca1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721986987307,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-270" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|dc1f3e78-e0dc-5988-9180-cf870cbf7022",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|dc1f3e78-e0dc-5988-9180-cf870cbf7022",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721986998425,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-272" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|136f6750-83cf-936f-ccd2-3987df9bc07c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|136f6750-83cf-936f-ccd2-3987df9bc07c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987008697,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-274" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cbf577bb96441a4a17288|9e57f442-b892-75e0-2f2b-7a682e7addbf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cbf577bb96441a4a17288|9e57f442-b892-75e0-2f2b-7a682e7addbf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987017723,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-276" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cba9aa85c97710101d676|f075c094-490f-484e-2933-4115c992e97f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cba9aa85c97710101d676|f075c094-490f-484e-2933-4115c992e97f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987054512,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-278" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cba9aa85c97710101d676|2919d7fe-ef03-2542-7880-ee95f8190174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cba9aa85c97710101d676|2919d7fe-ef03-2542-7880-ee95f8190174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987068854,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-280" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cba9aa85c97710101d676|54304a89-817e-8575-235e-36e09b76bdbf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cba9aa85c97710101d676|54304a89-817e-8575-235e-36e09b76bdbf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987077231,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-282" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd8706408cf2a4b60ec52|c0a18700-9b76-6b85-e93b-4ea49e796bd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd8706408cf2a4b60ec52|c0a18700-9b76-6b85-e93b-4ea49e796bd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987093224,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-284" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd8706408cf2a4b60ec52|6e86a264-9051-779b-8367-94992915480e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd8706408cf2a4b60ec52|6e86a264-9051-779b-8367-94992915480e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987111379,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-286" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd8706408cf2a4b60ec52|d1ddec97-f97d-6920-41b7-6bfc91609919",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd8706408cf2a4b60ec52|d1ddec97-f97d-6920-41b7-6bfc91609919",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721987119913,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-288" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd8706408cf2a4b60ec52|5d87910c-62ba-8bde-2f27-6ec1157a171b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd8706408cf2a4b60ec52|5d87910c-62ba-8bde-2f27-6ec1157a171b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721987129664,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-290" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd8706408cf2a4b60ec52|53f0ab50-1685-4920-786f-5b867f021b77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd8706408cf2a4b60ec52|53f0ab50-1685-4920-786f-5b867f021b77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1721987155032,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-292" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662cd8706408cf2a4b60ec52|168ab24b-9554-ef99-5f94-1ee98a2ad137",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662cd8706408cf2a4b60ec52|168ab24b-9554-ef99-5f94-1ee98a2ad137",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1721987163777,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-294" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "661cf6b58d99b78ec3457a64|7099dd48-c034-4cf9-33b9-153339b7334d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "661cf6b58d99b78ec3457a64|7099dd48-c034-4cf9-33b9-153339b7334d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987180449,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-296" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".style-guide-grid",
        originalId:
          "661cf6b58d99b78ec3457a64|7099dd48-c034-4cf9-33b9-153339b73355",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".style-guide-grid",
          originalId:
            "661cf6b58d99b78ec3457a64|7099dd48-c034-4cf9-33b9-153339b73355",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987250769,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-298" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f6539d9bd1a14550f79a3|8db19e28-e7a6-2b63-d8dd-ef59a14d8fd8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f6539d9bd1a14550f79a3|8db19e28-e7a6-2b63-d8dd-ef59a14d8fd8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987271554,
    },
    "e-299": {
      id: "e-299",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-300" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".licenses-grid",
        originalId:
          "662f6539d9bd1a14550f79a3|07be9fe5-b7f8-8e19-b551-9bf787dcc5bd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".licenses-grid",
          originalId:
            "662f6539d9bd1a14550f79a3|07be9fe5-b7f8-8e19-b551-9bf787dcc5bd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987286835,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-302" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f6539d9bd1a14550f79a3|c39614d8-51a3-a727-6819-b858e28c398f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f6539d9bd1a14550f79a3|c39614d8-51a3-a727-6819-b858e28c398f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987296097,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-304" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f6cebb39c5441ae068cd5|f79f8493-a5ed-17e4-4ded-c379b0ee73a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f6cebb39c5441ae068cd5|f79f8493-a5ed-17e4-4ded-c379b0ee73a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987313113,
    },
    "e-305": {
      id: "e-305",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-306" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f6cebb39c5441ae068cd5|edf954e8-21e9-1f7d-cdf4-23348abf387c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f6cebb39c5441ae068cd5|edf954e8-21e9-1f7d-cdf4-23348abf387c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987321096,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-308" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331284406ac5b6bcccadbd|7095996c-5329-b72d-b134-70e0189108ab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331284406ac5b6bcccadbd|7095996c-5329-b72d-b134-70e0189108ab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987344857,
    },
    "e-309": {
      id: "e-309",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-310" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331284406ac5b6bcccadbd|3c8f0979-05fe-ee6f-384c-96ed06faae16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331284406ac5b6bcccadbd|3c8f0979-05fe-ee6f-384c-96ed06faae16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987355961,
    },
    "e-311": {
      id: "e-311",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-312" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331284406ac5b6bcccadbd|d5ace0df-b73b-2da6-a6b6-1a8a1575a7d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331284406ac5b6bcccadbd|d5ace0df-b73b-2da6-a6b6-1a8a1575a7d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987366361,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-314" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331284406ac5b6bcccadbd|8dbb5492-76ec-bc3d-f156-23d63152c7d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331284406ac5b6bcccadbd|8dbb5492-76ec-bc3d-f156-23d63152c7d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987376265,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-316" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331649ecd837ce9d7d3c83|0fee1807-8927-3978-f9b5-0eab52371628",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331649ecd837ce9d7d3c83|0fee1807-8927-3978-f9b5-0eab52371628",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987398705,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331649ecd837ce9d7d3c83|0fee1807-8927-3978-f9b5-0eab52371629",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331649ecd837ce9d7d3c83|0fee1807-8927-3978-f9b5-0eab52371629",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721987445851,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-320" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331649ecd837ce9d7d3c83|2e3c635a-0933-e3e2-0475-f4223c47e175",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331649ecd837ce9d7d3c83|2e3c635a-0933-e3e2-0475-f4223c47e175",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987529081,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-322" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66331649ecd837ce9d7d3c83|e1093570-15a4-97df-cc0e-558341304193",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66331649ecd837ce9d7d3c83|e1093570-15a4-97df-cc0e-558341304193",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987536078,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-324" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-589186136119",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-589186136119",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987555313,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-326" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-589186136124",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-589186136124",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987568145,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-328" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-589186136127",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-589186136127",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987579305,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-330" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-58918613615d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|dac57eee-8080-d03f-da2e-58918613615d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987588469,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-332" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|eff0f2e8-e4de-1918-2066-557ef47ca0ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|eff0f2e8-e4de-1918-2066-557ef47ca0ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987598233,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-334" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|d47e191d-5468-3066-d2b5-fd55af13e272",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|d47e191d-5468-3066-d2b5-fd55af13e272",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987612596,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-336" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|505dc3fc-8d90-f3a4-7e40-b900ac8b6801",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|505dc3fc-8d90-f3a4-7e40-b900ac8b6801",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987621113,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-338" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633225d7125979f5ae634f6|10a8778f-ec0e-3c20-4698-0a9c0019f97b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633225d7125979f5ae634f6|10a8778f-ec0e-3c20-4698-0a9c0019f97b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987635969,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-340" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663324e1e99e9618cd9338af|49634de6-b66d-4e55-0dae-f5a543294a68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663324e1e99e9618cd9338af|49634de6-b66d-4e55-0dae-f5a543294a68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987670530,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-342" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663324e1e99e9618cd9338af|6ebb7a77-b7d2-4765-8814-ea11c5beb277",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663324e1e99e9618cd9338af|6ebb7a77-b7d2-4765-8814-ea11c5beb277",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987679500,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-344" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6638ba842dc0b4afe5a5006c|85e91112-777e-84d8-d84c-3a3eac2c8463",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6638ba842dc0b4afe5a5006c|85e91112-777e-84d8-d84c-3a3eac2c8463",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987703073,
    },
    "e-345": {
      id: "e-345",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-346" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6638ba842dc0b4afe5a5006c|43bf3077-e4e5-ddad-12ba-e6c6eea62789",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6638ba842dc0b4afe5a5006c|43bf3077-e4e5-ddad-12ba-e6c6eea62789",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987718345,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|7754c889-c8ed-80ed-34d9-3b908f420dfa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|7754c889-c8ed-80ed-34d9-3b908f420dfa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987737033,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|7898b9bc-86bc-8847-001e-ea714801f42e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|7898b9bc-86bc-8847-001e-ea714801f42e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987751497,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-352" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|2e641b18-23cd-e53c-8e43-40b4ab05083e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|2e641b18-23cd-e53c-8e43-40b4ab05083e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987762513,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-354" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|5a06abf0-ce5b-9b26-8803-fe8c9a76ff32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|5a06abf0-ce5b-9b26-8803-fe8c9a76ff32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987792889,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6633392367ac8829ce774dd9|c40e2c0d-8e18-ed7b-a864-993eeb3d695c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6633392367ac8829ce774dd9|c40e2c0d-8e18-ed7b-a864-993eeb3d695c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987801889,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f6ebce8b2c2e5f542950d|a1b04190-190e-9c1f-63e9-b78032ec5fd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f6ebce8b2c2e5f542950d|a1b04190-190e-9c1f-63e9-b78032ec5fd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987827972,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-360" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f6ebce8b2c2e5f542950d|662f6ebce8b2c2e5f542951200000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f6ebce8b2c2e5f542950d|662f6ebce8b2c2e5f542951200000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987840312,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-362" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f711251a751be7568b408|7151da6e-ddee-bc25-5f1f-5536529183b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f711251a751be7568b408|7151da6e-ddee-bc25-5f1f-5536529183b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1721987857697,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-364" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "662f711251a751be7568b408|662f711251a751be7568b40b00000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "662f711251a751be7568b408|662f711251a751be7568b40b00000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1721987866392,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-366",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "1b6ddcfa-c836-0863-77ea-60c0b09cd0c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1b6ddcfa-c836-0863-77ea-60c0b09cd0c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1722404060232,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-368",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707555041460,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-370",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66ab18adcfc97e536f67de6d|888b48ef-6d80-be5a-4c13-6416210343b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1722510927019,
    },
    "e-370": {
      id: "e-370",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-369",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66ab18adcfc97e536f67de6d|888b48ef-6d80-be5a-4c13-6416210343b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1722510927019,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-372",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66ab18adcfc97e536f67de6d|c79e8fd4-3aca-328d-66e3-0e2991088983",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1722510928046,
    },
    "e-372": {
      id: "e-372",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-371",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66ab18adcfc97e536f67de6d|c79e8fd4-3aca-328d-66e3-0e2991088983",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1722510928046,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_BIG_EFFECT",
        config: { actionListId: "growBigIn", autoStopEventId: "e-374" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f0c",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: null,
        effectIn: true,
      },
      createdOn: 1722512289860,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-376" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f17",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512298188,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-378" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f49",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512310324,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-380" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f4e",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512352245,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-382" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f53",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 180,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512361293,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-384" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f58",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 210,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512369991,
    },
    "e-385": {
      id: "e-385",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-386" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f5f",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512379959,
    },
    "e-387": {
      id: "e-387",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-388" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f71",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512401715,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-390" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".splash-main-page-card",
        originalId:
          "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0f77",
        appliesTo: "CLASS",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512411000,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-392" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fa4",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512423203,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-394" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fa9",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512431481,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-396" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fc8",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512442434,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-398" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fce",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512454945,
    },
    "e-399": {
      id: "e-399",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInLeft", autoStopEventId: "e-400" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fd5",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1722512463856,
    },
    "e-401": {
      id: "e-401",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInRight", autoStopEventId: "e-402" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fdd",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1722512470753,
    },
    "e-403": {
      id: "e-403",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInLeft", autoStopEventId: "e-404" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fe2",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1722512478553,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInRight", autoStopEventId: "e-406" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0fe7",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1722512485857,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-408" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0ff1",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512495194,
    },
    "e-409": {
      id: "e-409",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInLeft", autoStopEventId: "e-410" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e0ff6",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1722512504362,
    },
    "e-411": {
      id: "e-411",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInRight", autoStopEventId: "e-412" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1006",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1722512512166,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInLeft", autoStopEventId: "e-414" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1012",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1722512525493,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInRight", autoStopEventId: "e-416" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1017",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1722512533198,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-418" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e101b",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512541916,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_BIG_EFFECT",
        config: { actionListId: "growBigIn", autoStopEventId: "e-420" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1020",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: null,
        effectIn: true,
      },
      createdOn: 1722512551527,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInLeft", autoStopEventId: "e-422" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e104d",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1722512561676,
    },
    "e-423": {
      id: "e-423",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-424" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1052",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512569455,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-426" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1056",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1722512579048,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInLeft", autoStopEventId: "e-428" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e105c",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1722512588749,
    },
    "e-429": {
      id: "e-429",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInRight", autoStopEventId: "e-430" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "66ab18adcfc97e536f67de6d|074a9f99-35f7-e624-49b9-3f45c48e1069",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1722512596389,
    },
  },
  actionLists: {
    "a-9": {
      id: "a-9",
      title: "Footer Link Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-icon",
                  selectorGuids: ["a4514165-0051-8d3d-391a-0f23c7fffb61"],
                },
                globalSwatchId: "",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-icon.vertical",
                  selectorGuids: [
                    "a4514165-0051-8d3d-391a-0f23c7fffb61",
                    "739f2d12-cc65-2abd-6c05-6bbe81dcb5af",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-widget-link",
                  selectorGuids: ["5588ed99-9f79-468e-6d4b-4e4c45ca263c"],
                },
                globalSwatchId: "--content-color",
                rValue: 82,
                bValue: 82,
                gValue: 82,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-icon",
                  selectorGuids: ["a4514165-0051-8d3d-391a-0f23c7fffb61"],
                },
                globalSwatchId: "",
                rValue: 28,
                bValue: 28,
                gValue: 28,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-icon.vertical",
                  selectorGuids: [
                    "a4514165-0051-8d3d-391a-0f23c7fffb61",
                    "739f2d12-cc65-2abd-6c05-6bbe81dcb5af",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-widget-link",
                  selectorGuids: ["5588ed99-9f79-468e-6d4b-4e4c45ca263c"],
                },
                globalSwatchId: "--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1713327308852,
    },
    "a-10": {
      id: "a-10",
      title: "Footer Link Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-icon",
                  selectorGuids: ["a4514165-0051-8d3d-391a-0f23c7fffb61"],
                },
                globalSwatchId: "",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-icon.vertical",
                  selectorGuids: [
                    "a4514165-0051-8d3d-391a-0f23c7fffb61",
                    "739f2d12-cc65-2abd-6c05-6bbe81dcb5af",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer-widget-link",
                  selectorGuids: ["5588ed99-9f79-468e-6d4b-4e4c45ca263c"],
                },
                globalSwatchId: "--content-color",
                rValue: 82,
                bValue: 82,
                gValue: 82,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713327308852,
    },
    "a-11": {
      id: "a-11",
      title: "FAQ Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-list",
                  selectorGuids: ["f5633c20-b2a7-0c0d-1f2b-974e0862ae71"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer-wrap",
                  selectorGuids: ["024ead90-cc37-d986-6d5a-21dbf0920905"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer-wrap",
                  selectorGuids: ["024ead90-cc37-d986-6d5a-21dbf0920905"],
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true,
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-icon-wrap",
                  selectorGuids: ["d692221c-1ae6-ab0a-3b99-3e3225b1b057"],
                },
                globalSwatchId: "",
                rValue: 234,
                bValue: 234,
                gValue: 234,
                aValue: 1,
              },
            },
            {
              id: "a-11-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-icon-wrap",
                  selectorGuids: ["d692221c-1ae6-ab0a-3b99-3e3225b1b057"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-list",
                  selectorGuids: ["f5633c20-b2a7-0c0d-1f2b-974e0862ae71"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-11-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-icon-wrap",
                  selectorGuids: ["d692221c-1ae6-ab0a-3b99-3e3225b1b057"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-11-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-icon-wrap",
                  selectorGuids: ["d692221c-1ae6-ab0a-3b99-3e3225b1b057"],
                },
                globalSwatchId: "",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer-wrap",
                  selectorGuids: ["024ead90-cc37-d986-6d5a-21dbf0920905"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer-wrap",
                  selectorGuids: ["024ead90-cc37-d986-6d5a-21dbf0920905"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1714155275524,
    },
    "a-12": {
      id: "a-12",
      title: "FAQ Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-list",
                  selectorGuids: ["f5633c20-b2a7-0c0d-1f2b-974e0862ae71"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer-wrap",
                  selectorGuids: ["024ead90-cc37-d986-6d5a-21dbf0920905"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer-wrap",
                  selectorGuids: ["024ead90-cc37-d986-6d5a-21dbf0920905"],
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true,
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-icon-wrap",
                  selectorGuids: ["d692221c-1ae6-ab0a-3b99-3e3225b1b057"],
                },
                globalSwatchId: "",
                rValue: 234,
                bValue: 234,
                gValue: 234,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-icon-wrap",
                  selectorGuids: ["d692221c-1ae6-ab0a-3b99-3e3225b1b057"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1714155275524,
    },
    "a-15": {
      id: "a-15",
      title: "Testimonial Image Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {},
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1714199362307,
    },
    "a-16": {
      id: "a-16",
      title: "Testimonial Image Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1714199362307,
    },
    "a-7": {
      id: "a-7",
      title: "Service Card Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-hover-line",
                  selectorGuids: ["ce5f63de-503c-ac6d-96f5-84d279f5f66a"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-card-arrow-wrap",
                  selectorGuids: ["a9a163a6-6877-b33d-91e3-5564f7ca6401"],
                },
                globalSwatchId: "",
                rValue: 234,
                bValue: 234,
                gValue: 234,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-hover-line",
                  selectorGuids: ["ce5f63de-503c-ac6d-96f5-84d279f5f66a"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-card-arrow-wrap",
                  selectorGuids: ["a9a163a6-6877-b33d-91e3-5564f7ca6401"],
                },
                globalSwatchId: "",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1713260554183,
    },
    "a-8": {
      id: "a-8",
      title: "Service Card Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-hover-line",
                  selectorGuids: ["ce5f63de-503c-ac6d-96f5-84d279f5f66a"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-card-arrow-wrap",
                  selectorGuids: ["a9a163a6-6877-b33d-91e3-5564f7ca6401"],
                },
                globalSwatchId: "",
                rValue: 234,
                bValue: 234,
                gValue: 234,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713260554183,
    },
    "a-20": {
      id: "a-20",
      title: "Team Card Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["a4dc1222-7aaa-33d9-f082-c5b3bb6ed157"],
                },
                xValue: 20,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["a4dc1222-7aaa-33d9-f082-c5b3bb6ed157"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-name-wrap",
                  selectorGuids: ["a81b2534-40ae-94de-781d-de3c8e4fa6b0"],
                },
                yValue: 30,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-name-wrap",
                  selectorGuids: ["a81b2534-40ae-94de-781d-de3c8e4fa6b0"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["a4dc1222-7aaa-33d9-f082-c5b3bb6ed157"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-name-wrap",
                  selectorGuids: ["a81b2534-40ae-94de-781d-de3c8e4fa6b0"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-name-wrap",
                  selectorGuids: ["a81b2534-40ae-94de-781d-de3c8e4fa6b0"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["a4dc1222-7aaa-33d9-f082-c5b3bb6ed157"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716628964647,
    },
    "a-21": {
      id: "a-21",
      title: "Team Card Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["a4dc1222-7aaa-33d9-f082-c5b3bb6ed157"],
                },
                xValue: 20,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["a4dc1222-7aaa-33d9-f082-c5b3bb6ed157"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-name-wrap",
                  selectorGuids: ["a81b2534-40ae-94de-781d-de3c8e4fa6b0"],
                },
                yValue: 30,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-name-wrap",
                  selectorGuids: ["a81b2534-40ae-94de-781d-de3c8e4fa6b0"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716628964647,
    },
    "a-18": {
      id: "a-18",
      title: "Testimonial Button Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-arrow-icon-wrap",
                  selectorGuids: ["75cbebbc-dc5a-cd28-9fde-59eed7de88a4"],
                },
                xValue: -5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-quote",
                  selectorGuids: ["f2452909-2327-eaea-43d0-cb9a7dceb722"],
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-arrow-icon-wrap",
                  selectorGuids: ["75cbebbc-dc5a-cd28-9fde-59eed7de88a4"],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-quote",
                  selectorGuids: ["f2452909-2327-eaea-43d0-cb9a7dceb722"],
                },
                globalSwatchId: "--secondary",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716622650605,
    },
    "a-19": {
      id: "a-19",
      title: "Testimonial Button Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-arrow-icon-wrap",
                  selectorGuids: ["75cbebbc-dc5a-cd28-9fde-59eed7de88a4"],
                },
                xValue: -5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-quote",
                  selectorGuids: ["f2452909-2327-eaea-43d0-cb9a7dceb722"],
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716622650605,
    },
    "a-24": {
      id: "a-24",
      title: "Team Social Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-initial",
                  selectorGuids: ["aed733be-d35d-e14a-1fe9-a4333d51186f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-hover",
                  selectorGuids: ["a2d6d852-5133-4a9b-a39d-6ed4fd6e4aa5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-initial",
                  selectorGuids: ["aed733be-d35d-e14a-1fe9-a4333d51186f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-hover",
                  selectorGuids: ["a2d6d852-5133-4a9b-a39d-6ed4fd6e4aa5"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1719298376795,
    },
    "a-25": {
      id: "a-25",
      title: "Team Social Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-initial",
                  selectorGuids: ["aed733be-d35d-e14a-1fe9-a4333d51186f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-hover",
                  selectorGuids: ["a2d6d852-5133-4a9b-a39d-6ed4fd6e4aa5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1719298376795,
    },
    "a-22": {
      id: "a-22",
      title: "Blog Post Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-arrow-wrap",
                  selectorGuids: ["aba13a1a-62c3-7a76-fefc-5ee00352558e"],
                },
                globalSwatchId: "",
                rValue: 234,
                bValue: 234,
                gValue: 234,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-arrow-wrap",
                  selectorGuids: ["aba13a1a-62c3-7a76-fefc-5ee00352558e"],
                },
                globalSwatchId: "--secondary",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1719251279964,
    },
    "a-23": {
      id: "a-23",
      title: "Blog Post Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-arrow-wrap",
                  selectorGuids: ["aba13a1a-62c3-7a76-fefc-5ee00352558e"],
                },
                globalSwatchId: "",
                rValue: 234,
                bValue: 234,
                gValue: 234,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1719251279964,
    },
    a: {
      id: "a",
      title: "Nav Button Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: 3,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: -45,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: -45,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["5698e217-667b-542a-c8ea-360c3e81776a"],
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["5698e217-667b-542a-c8ea-360c3e81776a"],
                },
                globalSwatchId: "--secondary",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1713157293032,
    },
    "a-2": {
      id: "a-2",
      title: "Nav Button Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: 3,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["5698e217-667b-542a-c8ea-360c3e81776a"],
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713157293032,
    },
    "a-26": {
      id: "a-26",
      title: "Nav Button Hover In (Pricing)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: 3,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: -45,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: -45,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-26-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["5698e217-667b-542a-c8ea-360c3e81776a"],
                },
                globalSwatchId: "--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["5698e217-667b-542a-c8ea-360c3e81776a"],
                },
                globalSwatchId: "--secondary",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1713157293032,
    },
    "a-27": {
      id: "a-27",
      title: "Nav Button Hover Out (Pricing)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-one",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "3146b377-c969-63a8-5cfc-cbe53cb03f80",
                  ],
                },
                xValue: 3,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon.icon-two",
                  selectorGuids: [
                    "5698e217-667b-542a-c8ea-360c3e81776a",
                    "dfb2ec8b-21e8-6437-7dbf-ffd8ddb236de",
                  ],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["5698e217-667b-542a-c8ea-360c3e81776a"],
                },
                globalSwatchId: "--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713157293032,
    },
    "a-28": {
      id: "a-28",
      title: "Map Pointer Animation One",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-28-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-28-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721294218727,
    },
    "a-29": {
      id: "a-29",
      title: "Map Pointer Animation Two",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-29-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721294218727,
    },
    "a-30": {
      id: "a-30",
      title: "Map Pointer Animation Three",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-30-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-30-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-30-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-30-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721294218727,
    },
    "a-31": {
      id: "a-31",
      title: "Map Pointer Animation Four",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: "a-31-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-31-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-31-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721294218727,
    },
    "a-32": {
      id: "a-32",
      title: "Map Pointer Animation Five",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-32-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: "a-32-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-32-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-32-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721294218727,
    },
    "a-33": {
      id: "a-33",
      title: "Map Pointer Animation Six",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-33-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1.4,
                yValue: 1.4,
                locked: true,
              },
            },
            {
              id: "a-33-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1.4,
                yValue: 1.4,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-33-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-white-pin-pointer-wrap",
                  selectorGuids: ["a0338af9-8131-9a64-95e4-d0f39d240048"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-33-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-yellow-pin-pointer-wrap",
                  selectorGuids: ["24ff7664-c633-fd81-b7bd-d7cec115c4ea"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721294218727,
    },
    "a-34": {
      id: "a-34",
      title: "Bus Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                xValue: -55,
                yValue: 50,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                xValue: -35,
                yValue: 35,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                xValue: 50,
                yValue: -45,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                xValue: 65,
                yValue: -60,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 5000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 5000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                xValue: -55,
                yValue: 50,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                xValue: -35,
                yValue: 35,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                xValue: 50,
                yValue: -45,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                xValue: 65,
                yValue: -60,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 5000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 5000,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-45",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                xValue: -35,
                yValue: 35,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.four",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "dae1ca70-c22d-2f08-d731-78785c988cb0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-43",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                xValue: -55,
                yValue: 50,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.three",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "c76500a1-9d4d-3fe5-5097-f2b9e9bddea1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-41",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.two",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "f5f52eba-2edb-ea86-6f48-88ffe956a79d",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hero-sub-image.one",
                  selectorGuids: [
                    "fecfa9b2-b608-3244-5e87-ac2b6cccc9c0",
                    "26c74f2d-e734-57a9-ca31-875e637a1cf9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721648993644,
    },
    "a-35": {
      id: "a-35",
      title: "Mission Image Overlay",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mission-image-overlay",
                  selectorGuids: ["0c6f32d9-cbd3-da81-f5e4-1de4bd8fcc8e"],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-35-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mission-image-overlay",
                  selectorGuids: ["0c6f32d9-cbd3-da81-f5e4-1de4bd8fcc8e"],
                },
                globalSwatchId: "--secondary",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mission-image-overlay",
                  selectorGuids: ["0c6f32d9-cbd3-da81-f5e4-1de4bd8fcc8e"],
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721986177168,
    },
    "a-36": {
      id: "a-36",
      title: "Team Single Image Overlay",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-single-overlay",
                  selectorGuids: ["646d0f50-9441-1c3d-a606-a40edfe69a3e"],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-single-overlay",
                  selectorGuids: ["646d0f50-9441-1c3d-a606-a40edfe69a3e"],
                },
                globalSwatchId: "--secondary",
                rValue: 69,
                bValue: 191,
                gValue: 122,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-single-overlay",
                  selectorGuids: ["646d0f50-9441-1c3d-a606-a40edfe69a3e"],
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721987450361,
    },
    "a-37": {
      id: "a-37",
      title: "Hireus Badge Close 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".hireus-badge",
                  selectorGuids: ["90061a62-62eb-3105-bd28-4ec5479b46ce"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".hireus-badge",
                  selectorGuids: ["90061a62-62eb-3105-bd28-4ec5479b46ce"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721648641222,
    },
    "a-38": {
      id: "a-38",
      title: "Left Right Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".splash-animation-image-area",
                  selectorGuids: ["e1dc2932-fefb-cdda-d828-80f5a8724530"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".splash-animation-image-area.bottom",
                  selectorGuids: [
                    "e1dc2932-fefb-cdda-d828-80f5a8724530",
                    "e1dc2932-fefb-cdda-d828-80f5a872453b",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".splash-animation-image-area",
                  selectorGuids: ["e1dc2932-fefb-cdda-d828-80f5a8724530"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".splash-animation-image-area.bottom",
                  selectorGuids: [
                    "e1dc2932-fefb-cdda-d828-80f5a8724530",
                    "e1dc2932-fefb-cdda-d828-80f5a872453b",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".splash-animation-image-area",
                  selectorGuids: ["e1dc2932-fefb-cdda-d828-80f5a8724530"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".splash-animation-image-area.bottom",
                  selectorGuids: [
                    "e1dc2932-fefb-cdda-d828-80f5a8724530",
                    "e1dc2932-fefb-cdda-d828-80f5a872453b",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1707555053882,
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInTopRight: {
      id: "slideInTopRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInTopLeft: {
      id: "slideInTopLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growBigIn: {
      id: "growBigIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
