/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/vueQrCode.js":
/*!***********************************!*\
  !*** ./resources/js/vueQrCode.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (e, t) {
  "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" === ( false ? 0 : _typeof(module)) ? module.exports = t() : "function" === typeof define && __webpack_require__.amdO ? define([], t) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["VueQrcodeReader"] = t() : e["VueQrcodeReader"] = t();
})("undefined" !== typeof self ? self : undefined, function () {
  return function (e) {
    var t = {};

    function r(o) {
      if (t[o]) return t[o].exports;
      var n = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, r.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (r.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var n in e) {
        r.d(o, n, function (t) {
          return e[t];
        }.bind(null, n));
      }
      return o;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = "fb15");
  }({
    "00ee": function ee(e, t, r) {
      var o = r("b622"),
          n = o("toStringTag"),
          a = {};
      a[n] = "z", e.exports = "[object z]" === String(a);
    },
    "0366": function _(e, t, r) {
      var o = r("1c0b");

      e.exports = function (e, t, r) {
        if (o(e), void 0 === t) return e;

        switch (r) {
          case 0:
            return function () {
              return e.call(t);
            };

          case 1:
            return function (r) {
              return e.call(t, r);
            };

          case 2:
            return function (r, o) {
              return e.call(t, r, o);
            };

          case 3:
            return function (r, o, n) {
              return e.call(t, r, o, n);
            };
        }

        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    "0538": function _(e, t, r) {
      "use strict";

      var o = r("1c0b"),
          n = r("861d"),
          a = [].slice,
          c = {},
          i = function i(e, t, r) {
        if (!(t in c)) {
          for (var o = [], n = 0; n < t; n++) {
            o[n] = "a[" + n + "]";
          }

          c[t] = Function("C,a", "return new C(" + o.join(",") + ")");
        }

        return c[t](e, r);
      };

      e.exports = Function.bind || function (e) {
        var t = o(this),
            r = a.call(arguments, 1),
            c = function c() {
          var o = r.concat(a.call(arguments));
          return this instanceof c ? i(t, o.length, o) : t.apply(e, o);
        };

        return n(t.prototype) && (c.prototype = t.prototype), c;
      };
    },
    "057f": function f(e, t, r) {
      var o = r("fc6a"),
          n = r("241c").f,
          a = {}.toString,
          c = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          i = function i(e) {
        try {
          return n(e);
        } catch (t) {
          return c.slice();
        }
      };

      e.exports.f = function (e) {
        return c && "[object Window]" == a.call(e) ? i(e) : n(o(e));
      };
    },
    "06c5": function c5(e, t, r) {
      "use strict";

      r.d(t, "a", function () {
        return n;
      });
      r("a630"), r("fb6a"), r("b0c0"), r("d3b7"), r("25f0"), r("3ca3");
      var o = r("6b75");

      function n(e, t) {
        if (e) {
          if ("string" === typeof e) return Object(o["a"])(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Object(o["a"])(e, t) : void 0;
        }
      }
    },
    "06cf": function cf(e, t, r) {
      var o = r("83ab"),
          n = r("d1e7"),
          a = r("5c6c"),
          c = r("fc6a"),
          i = r("c04e"),
          s = r("5135"),
          u = r("0cfb"),
          l = Object.getOwnPropertyDescriptor;
      t.f = o ? l : function (e, t) {
        if (e = c(e), t = i(t, !0), u) try {
          return l(e, t);
        } catch (r) {}
        if (s(e, t)) return a(!n.f.call(e, t), e[t]);
      };
    },
    "0cfb": function cfb(e, t, r) {
      var o = r("83ab"),
          n = r("d039"),
          a = r("cc12");
      e.exports = !o && !n(function () {
        return 7 != Object.defineProperty(a("div"), "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    },
    "0d0e": function d0e(e, t, r) {
      "use strict";

      var o = function o() {
        var e = this,
            t = e.$createElement,
            r = e._self._c || t;
        return r("div", {
          staticClass: "qrcode-stream-wrapper"
        }, [r("video", {
          ref: "video",
          staticClass: "qrcode-stream-camera",
          "class": {
            "qrcode-stream-camera--hidden": !e.shouldScan
          },
          attrs: {
            autoplay: "",
            muted: "",
            playsinline: ""
          },
          domProps: {
            muted: !0
          }
        }), r("canvas", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.shouldScan,
            expression: "!shouldScan"
          }],
          ref: "pauseFrame",
          staticClass: "qrcode-stream-camera"
        }), r("canvas", {
          ref: "trackingLayer",
          staticClass: "qrcode-stream-overlay"
        }), r("div", {
          staticClass: "qrcode-stream-overlay"
        }, [e._t("default")], 2)]);
      },
          n = [];

      r("caad"), r("d81d"), r("d3b7"), r("e6cf"), r("a4d3"), r("4de4"), r("4160"), r("e439"), r("dbb4"), r("b64b"), r("159b");

      function a(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e;
      }

      function c(e, t) {
        var r = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), r.push.apply(r, o);
        }

        return r;
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach(function (t) {
            a(e, t, r[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }

        return e;
      }

      r("96cf");
      var s = r("1da1"),
          u = r("a180"),
          l = (r("e260"), r("2532"), r("3ca3"), r("ddb0"), r("2b3d"), r("3835")),
          d = r("d4ec");

      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      function h(e, t, r) {
        return t && f(e.prototype, t), r && f(e, r), e;
      }

      var p = r("1cc0"),
          v = r("c036"),
          m = (r("99af"), r("7db0"), r("fb6a"), r("45fc"), r("b0c0"), r("53ca")),
          k = (r("13d5"), r("4ec9"), r("cca6"), r("ac1f"), r("25f0"), r("8a79"), r("466d"), !0),
          B = !0;

      function w(e, t, r) {
        var o = e.match(t);
        return o && o.length >= r && parseInt(o[r], 10);
      }

      function b() {
        if ("object" === ("undefined" === typeof window ? "undefined" : Object(m["a"])(window))) {
          if (k) return;
          "undefined" !== typeof console && "function" === typeof console.log && console.log.apply(console, arguments);
        }
      }

      function y(e, t) {
        B && console.warn(e + " is deprecated, please use " + t + " instead.");
      }

      function g(e) {
        var t = {
          browser: null,
          version: null
        };
        if ("undefined" === typeof e || !e.navigator) return t.browser = "Not a browser.", t;
        var r = e.navigator;
        if (r.mozGetUserMedia) t.browser = "firefox", t.version = w(r.userAgent, /Firefox\/(\d+)\./, 1);else if (r.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) t.browser = "chrome", t.version = w(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = w(r.userAgent, /Edge\/(\d+).(\d+)$/, 2);else {
          if (!e.RTCPeerConnection || !r.userAgent.match(/AppleWebKit\/(\d+)\./)) return t.browser = "Not a supported browser.", t;
          t.browser = "safari", t.version = w(r.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
        }
        return t;
      }

      function C(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }

      function P(e) {
        return C(e) ? Object.keys(e).reduce(function (t, r) {
          var o = C(e[r]),
              n = o ? P(e[r]) : e[r],
              c = o && !Object.keys(n).length;
          return void 0 === n || c ? t : Object.assign(t, a({}, r, n));
        }, {}) : e;
      }

      var x = b;

      function S(e) {
        var t = e && e.navigator;

        if (t.mediaDevices) {
          var r = g(e),
              o = function o(e) {
            if ("object" !== Object(m["a"])(e) || e.mandatory || e.optional) return e;
            var t = {};
            return Object.keys(e).forEach(function (r) {
              if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                var o = "object" === Object(m["a"])(e[r]) ? e[r] : {
                  ideal: e[r]
                };
                void 0 !== o.exact && "number" === typeof o.exact && (o.min = o.max = o.exact);

                var n = function n(e, t) {
                  return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t;
                };

                if (void 0 !== o.ideal) {
                  t.optional = t.optional || [];
                  var a = {};
                  "number" === typeof o.ideal ? (a[n("min", r)] = o.ideal, t.optional.push(a), a = {}, a[n("max", r)] = o.ideal, t.optional.push(a)) : (a[n("", r)] = o.ideal, t.optional.push(a));
                }

                void 0 !== o.exact && "number" !== typeof o.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[n("", r)] = o.exact) : ["min", "max"].forEach(function (e) {
                  void 0 !== o[e] && (t.mandatory = t.mandatory || {}, t.mandatory[n(e, r)] = o[e]);
                });
              }
            }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t;
          },
              n = function n(e, _n) {
            if (r.version >= 61) return _n(e);

            if (e = JSON.parse(JSON.stringify(e)), e && "object" === Object(m["a"])(e.audio)) {
              var a = function a(e, t, r) {
                t in e && !(r in e) && (e[r] = e[t], delete e[t]);
              };

              e = JSON.parse(JSON.stringify(e)), a(e.audio, "autoGainControl", "googAutoGainControl"), a(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = o(e.audio);
            }

            if (e && "object" === Object(m["a"])(e.video)) {
              var c = e.video.facingMode;
              c = c && ("object" === Object(m["a"])(c) ? c : {
                ideal: c
              });
              var i,
                  s = r.version < 66;
              if (c && ("user" === c.exact || "environment" === c.exact || "user" === c.ideal || "environment" === c.ideal) && (!t.mediaDevices.getSupportedConstraints || !t.mediaDevices.getSupportedConstraints().facingMode || s)) if (delete e.video.facingMode, "environment" === c.exact || "environment" === c.ideal ? i = ["back", "rear"] : "user" !== c.exact && "user" !== c.ideal || (i = ["front"]), i) return t.mediaDevices.enumerateDevices().then(function (t) {
                t = t.filter(function (e) {
                  return "videoinput" === e.kind;
                });
                var r = t.find(function (e) {
                  return i.some(function (t) {
                    return e.label.toLowerCase().includes(t);
                  });
                });
                return !r && t.length && i.includes("back") && (r = t[t.length - 1]), r && (e.video.deviceId = c.exact ? {
                  exact: r.deviceId
                } : {
                  ideal: r.deviceId
                }), e.video = o(e.video), x("chrome: " + JSON.stringify(e)), _n(e);
              });
              e.video = o(e.video);
            }

            return x("chrome: " + JSON.stringify(e)), _n(e);
          },
              a = function a(e) {
            return r.version >= 64 ? e : {
              name: {
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError"
              }[e.name] || e.name,
              message: e.message,
              constraint: e.constraint || e.constraintName,
              toString: function toString() {
                return this.name + (this.message && ": ") + this.message;
              }
            };
          },
              c = function c(e, r, o) {
            n(e, function (e) {
              t.webkitGetUserMedia(e, r, function (e) {
                o && o(a(e));
              });
            });
          };

          if (t.getUserMedia = c.bind(t), t.mediaDevices.getUserMedia) {
            var i = t.mediaDevices.getUserMedia.bind(t.mediaDevices);

            t.mediaDevices.getUserMedia = function (e) {
              return n(e, function (e) {
                return i(e).then(function (t) {
                  if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function (e) {
                    e.stop();
                  }), new DOMException("", "NotFoundError");
                  return t;
                }, function (e) {
                  return Promise.reject(a(e));
                });
              });
            };
          }
        }
      }

      function O(e) {
        var t = e && e.navigator,
            r = function r(e) {
          return {
            name: {
              PermissionDeniedError: "NotAllowedError"
            }[e.name] || e.name,
            message: e.message,
            constraint: e.constraint,
            toString: function toString() {
              return this.name;
            }
          };
        },
            o = t.mediaDevices.getUserMedia.bind(t.mediaDevices);

        t.mediaDevices.getUserMedia = function (e) {
          return o(e)["catch"](function (e) {
            return Promise.reject(r(e));
          });
        };
      }

      function j(e) {
        var t = g(e),
            r = e && e.navigator,
            o = e && e.MediaStreamTrack;

        if (r.getUserMedia = function (e, t, o) {
          y("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, o);
        }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
          var n = function n(e, t, r) {
            t in e && !(r in e) && (e[r] = e[t], delete e[t]);
          },
              a = r.mediaDevices.getUserMedia.bind(r.mediaDevices);

          if (r.mediaDevices.getUserMedia = function (e) {
            return "object" === Object(m["a"])(e) && "object" === Object(m["a"])(e.audio) && (e = JSON.parse(JSON.stringify(e)), n(e.audio, "autoGainControl", "mozAutoGainControl"), n(e.audio, "noiseSuppression", "mozNoiseSuppression")), a(e);
          }, o && o.prototype.getSettings) {
            var c = o.prototype.getSettings;

            o.prototype.getSettings = function () {
              var e = c.apply(this, arguments);
              return n(e, "mozAutoGainControl", "autoGainControl"), n(e, "mozNoiseSuppression", "noiseSuppression"), e;
            };
          }

          if (o && o.prototype.applyConstraints) {
            var i = o.prototype.applyConstraints;

            o.prototype.applyConstraints = function (e) {
              return "audio" === this.kind && "object" === Object(m["a"])(e) && (e = JSON.parse(JSON.stringify(e)), n(e, "autoGainControl", "mozAutoGainControl"), n(e, "noiseSuppression", "mozNoiseSuppression")), i.apply(this, [e]);
            };
          }
        }
      }

      r("c975"), r("a434");

      function E(e) {
        var t = e && e.navigator;

        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
          var r = t.mediaDevices,
              o = r.getUserMedia.bind(r);

          t.mediaDevices.getUserMedia = function (e) {
            return o(M(e));
          };
        }

        !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, r, o) {
          t.mediaDevices.getUserMedia(e).then(r, o);
        }.bind(t));
      }

      function M(e) {
        return e && void 0 !== e.video ? Object.assign({}, e, {
          video: P(e.video)
        }) : e;
      }

      var L = function L(e) {
        var t = !1,
            r = void 0;
        return function () {
          return t || (r = e.apply(void 0, arguments), t = !0), r;
        };
      },
          R = L(function () {
        var e = g(window),
            t = e.browser;

        switch (t) {
          case "chrome":
            S(window);
            break;

          case "firefox":
            j(window);
            break;

          case "edge":
            O(window);
            break;

          case "safari":
            E(window);
            break;

          default:
            throw new p["c"]();
        }
      }),
          A = function () {
        function e(t, r) {
          Object(d["a"])(this, e), this.videoEl = t, this.stream = r;
        }

        return h(e, [{
          key: "stop",
          value: function value() {
            var e = this;
            this.videoEl.srcObject = null, this.stream.getTracks().forEach(function (t) {
              e.stream.removeTrack(t), t.stop();
            });
          }
        }, {
          key: "getCapabilities",
          value: function value() {
            var e,
                t,
                r = this.stream.getVideoTracks(),
                o = Object(l["a"])(r, 1),
                n = o[0];
            return null !== (e = null === n || void 0 === n || null === (t = n.getCapabilities) || void 0 === t ? void 0 : t.call(n)) && void 0 !== e ? e : {};
          }
        }]), e;
      }(),
          I = function () {
        var e = Object(s["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e(t) {
          var r, o, n, a;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  return r = ["OBS Virtual Camera", "OBS-Camera"], e.next = 3, navigator.mediaDevices.enumerateDevices();

                case 3:
                  if (o = e.sent.filter(function (e) {
                    var t = e.kind;
                    return "videoinput" === t;
                  }).filter(function (e) {
                    var t = e.label;
                    return !r.includes(t);
                  }).filter(function (e) {
                    var t = e.label;
                    return !t.includes("infrared");
                  }), !(o.length > 2)) {
                    e.next = 16;
                    break;
                  }

                  n = o[0], a = o[o.length - 1], e.t0 = t, e.next = "auto" === e.t0 ? 10 : "rear" === e.t0 ? 11 : "front" === e.t0 ? 12 : 13;
                  break;

                case 10:
                  return e.abrupt("return", {
                    deviceId: {
                      exact: a.deviceId
                    }
                  });

                case 11:
                  return e.abrupt("return", {
                    deviceId: {
                      exact: a.deviceId
                    }
                  });

                case 12:
                  return e.abrupt("return", {
                    deviceId: {
                      exact: n.deviceId
                    }
                  });

                case 13:
                  return e.abrupt("return", void 0);

                case 14:
                  e.next = 23;
                  break;

                case 16:
                  e.t1 = t, e.next = "auto" === e.t1 ? 19 : "rear" === e.t1 ? 20 : "front" === e.t1 ? 21 : 22;
                  break;

                case 19:
                  return e.abrupt("return", {
                    facingMode: {
                      ideal: "environment"
                    }
                  });

                case 20:
                  return e.abrupt("return", {
                    facingMode: {
                      exact: "environment"
                    }
                  });

                case 21:
                  return e.abrupt("return", {
                    facingMode: {
                      exact: "user"
                    }
                  });

                case 22:
                  return e.abrupt("return", void 0);

                case 23:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          T = function T(e, t) {
        return _.apply(this, arguments);
      };

      function _() {
        return _ = Object(s["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e(t, r) {
          var o, n, a, c, s, u, d, f, h, m;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  if (a = r.camera, c = r.torch, !0 === window.isSecureContext) {
                    e.next = 3;
                    break;
                  }

                  throw new p["b"]();

                case 3:
                  if (void 0 !== (null === (o = navigator) || void 0 === o || null === (n = o.mediaDevices) || void 0 === n ? void 0 : n.getUserMedia)) {
                    e.next = 5;
                    break;
                  }

                  throw new p["c"]();

                case 5:
                  return e.next = 7, R();

                case 7:
                  return e.t0 = i, e.t1 = {
                    width: {
                      min: 360,
                      ideal: 640,
                      max: 1920
                    },
                    height: {
                      min: 240,
                      ideal: 480,
                      max: 1080
                    }
                  }, e.next = 11, I(a);

                case 11:
                  return e.t2 = e.sent, e.t3 = (0, e.t0)(e.t1, e.t2), s = {
                    audio: !1,
                    video: e.t3
                  }, e.next = 16, navigator.mediaDevices.getUserMedia(s);

                case 16:
                  return u = e.sent, void 0 !== t.srcObject ? t.srcObject = u : void 0 !== t.mozSrcObject ? t.mozSrcObject = u : window.URL.createObjectURL ? t.src = window.URL.createObjectURL(u) : window.webkitURL ? t.src = window.webkitURL.createObjectURL(u) : t.src = u, e.next = 20, Object(v["a"])(t, "loadeddata");

                case 20:
                  return e.next = 22, Object(v["b"])(500);

                case 22:
                  return c && (d = u.getVideoTracks(), f = Object(l["a"])(d, 1), h = f[0], m = h.getCapabilities(), m.torch ? h.applyConstraints({
                    advanced: [{
                      torch: !0
                    }]
                  }) : console.warn("device does not support torch capability")), e.abrupt("return", new A(t, u));

                case 24:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })), _.apply(this, arguments);
      }

      var N = r("b3af"),
          U = {
        name: "qrcode-stream",
        mixins: [N["a"]],
        props: {
          camera: {
            type: String,
            "default": "auto",
            validator: function validator(e) {
              return ["auto", "rear", "front", "off"].includes(e);
            }
          },
          torch: {
            type: Boolean,
            "default": !1
          },
          track: {
            type: Function
          }
        },
        data: function data() {
          return {
            cameraInstance: null,
            destroyed: !1
          };
        },
        computed: {
          shouldStream: function shouldStream() {
            return !1 === this.destroyed && "off" !== this.camera;
          },
          shouldScan: function shouldScan() {
            return !0 === this.shouldStream && null !== this.cameraInstance;
          },
          scanInterval: function scanInterval() {
            return void 0 === this.track ? 500 : 40;
          }
        },
        watch: {
          shouldStream: function shouldStream(e) {
            if (!e) {
              var t = this.$refs.pauseFrame,
                  r = t.getContext("2d"),
                  o = this.$refs.video;
              t.width = o.videoWidth, t.height = o.videoHeight, r.drawImage(o, 0, 0, o.videoWidth, o.videoHeight);
            }
          },
          shouldScan: function shouldScan(e) {
            e && (this.clearCanvas(this.$refs.pauseFrame), this.clearCanvas(this.$refs.trackingLayer), this.startScanning());
          },
          torch: function torch() {
            this.init();
          },
          camera: function camera() {
            this.init();
          }
        },
        mounted: function mounted() {
          this.init();
        },
        beforeDestroy: function beforeDestroy() {
          this.beforeResetCamera(), this.destroyed = !0;
        },
        methods: {
          init: function init() {
            var e = this,
                t = Object(s["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function t() {
              var r;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (e.beforeResetCamera(), "off" !== e.camera) {
                        t.next = 6;
                        break;
                      }

                      return e.cameraInstance = null, t.abrupt("return", {
                        capabilities: {}
                      });

                    case 6:
                      return t.next = 8, T(e.$refs.video, {
                        camera: e.camera,
                        torch: e.torch
                      });

                    case 8:
                      return e.cameraInstance = t.sent, r = e.cameraInstance.getCapabilities(), e.destroyed && e.cameraInstance.stop(), t.abrupt("return", {
                        capabilities: r
                      });

                    case 12:
                    case "end":
                      return t.stop();
                  }
                }
              }, t);
            }))();
            this.$emit("init", t);
          },
          startScanning: function startScanning() {
            var e = this,
                t = function t(_t) {
              e.onDetect(Promise.resolve(_t));
            };

            Object(u["a"])(this.$refs.video, {
              detectHandler: t,
              locateHandler: this.onLocate,
              minDelay: this.scanInterval
            });
          },
          beforeResetCamera: function beforeResetCamera() {
            null !== this.cameraInstance && (this.cameraInstance.stop(), this.cameraInstance = null);
          },
          onLocate: function onLocate(e) {
            var t = this.$refs.trackingLayer,
                r = this.$refs.video;
            if (void 0 !== t) if (e.length > 0 && void 0 !== this.track && void 0 !== r) {
              var o = r.offsetWidth,
                  n = r.offsetHeight,
                  a = r.videoWidth,
                  c = r.videoHeight,
                  s = Math.max(o / a, n / c),
                  u = a * s,
                  l = c * s,
                  d = u / a,
                  f = l / c,
                  h = (o - u) / 2,
                  p = (n - l) / 2,
                  v = function v(e) {
                var t = e.x,
                    r = e.y;
                return {
                  x: Math.floor(t * d),
                  y: Math.floor(r * f)
                };
              },
                  m = function m(e) {
                var t = e.x,
                    r = e.y;
                return {
                  x: Math.floor(t + h),
                  y: Math.floor(r + p)
                };
              },
                  k = e.map(function (e) {
                var t = e.boundingBox,
                    r = e.cornerPoints,
                    o = m(v({
                  x: t.x,
                  y: t.y
                })),
                    n = o.x,
                    a = o.y,
                    c = v({
                  x: t.width,
                  y: t.height
                }),
                    s = c.x,
                    u = c.y;
                return i(i({}, e), {}, {
                  cornerPoints: r.map(function (e) {
                    return m(v(e));
                  }),
                  boundingBox: DOMRectReadOnly.fromRect({
                    x: n,
                    y: a,
                    width: s,
                    height: u
                  })
                });
              });

              t.width = r.offsetWidth, t.height = r.offsetHeight;
              var B = t.getContext("2d");
              this.track(k, B);
            } else this.clearCanvas(t);
          },
          repaintTrackingLayer: function repaintTrackingLayer(e, t, r) {
            var o = this,
                n = t.getContext("2d");
            window.requestAnimationFrame(function () {
              t.width = displayWidth, t.height = displayHeight, o.trackRepaintFunction(coordinatesAdjusted, n);
            });
          },
          clearCanvas: function clearCanvas(e) {
            var t = e.getContext("2d");
            t.clearRect(0, 0, e.width, e.height);
          }
        }
      },
          D = U,
          F = (r("15fd"), r("2877")),
          z = Object(F["a"])(D, o, n, !1, null, "35411cc1", null);
      t["a"] = z.exports;
    },
    "0d3b": function d3b(e, t, r) {
      var o = r("d039"),
          n = r("b622"),
          a = r("c430"),
          c = n("iterator");
      e.exports = !o(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
            t = e.searchParams,
            r = "";
        return e.pathname = "c%20d", t.forEach(function (e, o) {
          t["delete"]("b"), r += o + e;
        }), a && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[c] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host;
      });
    },
    "131a": function a(e, t, r) {
      var o = r("23e7"),
          n = r("d2bb");
      o({
        target: "Object",
        stat: !0
      }, {
        setPrototypeOf: n
      });
    },
    "13d5": function d5(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("d58f").left,
          a = r("a640"),
          c = r("ae40"),
          i = a("reduce"),
          s = c("reduce", {
        1: 0
      });
      o({
        target: "Array",
        proto: !0,
        forced: !i || !s
      }, {
        reduce: function reduce(e) {
          return n(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    "14c3": function c3(e, t, r) {
      var o = r("c6b6"),
          n = r("9263");

      e.exports = function (e, t) {
        var r = e.exec;

        if ("function" === typeof r) {
          var a = r.call(e, t);
          if ("object" !== _typeof(a)) throw TypeError("RegExp exec method returned something other than an Object or null");
          return a;
        }

        if ("RegExp" !== o(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return n.call(e, t);
      };
    },
    "159b": function b(e, t, r) {
      var o = r("da84"),
          n = r("fdbc"),
          a = r("17c2"),
          c = r("9112");

      for (var i in n) {
        var s = o[i],
            u = s && s.prototype;
        if (u && u.forEach !== a) try {
          c(u, "forEach", a);
        } catch (l) {
          u.forEach = a;
        }
      }
    },
    "15fd": function fd(e, t, r) {
      "use strict";

      var o = r("1d20"),
          n = r.n(o);
      n.a;
    },
    "17c2": function c2(e, t, r) {
      "use strict";

      var o = r("b727").forEach,
          n = r("a640"),
          a = r("ae40"),
          c = n("forEach"),
          i = a("forEach");
      e.exports = c && i ? [].forEach : function (e) {
        return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
      };
    },
    "19aa": function aa(e, t) {
      e.exports = function (e, t, r) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return e;
      };
    },
    "1be4": function be4(e, t, r) {
      var o = r("d066");
      e.exports = o("document", "documentElement");
    },
    "1c0b": function c0b(e, t) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    "1c7e": function c7e(e, t, r) {
      var o = r("b622"),
          n = o("iterator"),
          a = !1;

      try {
        var c = 0,
            i = {
          next: function next() {
            return {
              done: !!c++
            };
          },
          "return": function _return() {
            a = !0;
          }
        };
        i[n] = function () {
          return this;
        }, Array.from(i, function () {
          throw 2;
        });
      } catch (s) {}

      e.exports = function (e, t) {
        if (!t && !a) return !1;
        var r = !1;

        try {
          var o = {};
          o[n] = function () {
            return {
              next: function next() {
                return {
                  done: r = !0
                };
              }
            };
          }, e(o);
        } catch (s) {}

        return r;
      };
    },
    "1cc0": function cc0(e, t, r) {
      "use strict";

      r.d(t, "a", function () {
        return v;
      }), r.d(t, "c", function () {
        return m;
      }), r.d(t, "b", function () {
        return k;
      });
      r("b0c0");
      var o = r("d4ec");
      r("131a");

      function n(e, t) {
        return n = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, n(e, t);
      }

      function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && n(e, t);
      }

      r("4ae1"), r("3410");

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, c(e);
      }

      r("d3b7"), r("25f0");

      function i() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }

      var s = r("53ca");

      function u(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function l(e, t) {
        return !t || "object" !== Object(s["a"])(t) && "function" !== typeof t ? u(e) : t;
      }

      function d(e) {
        var t = i();
        return function () {
          var r,
              o = c(e);

          if (t) {
            var n = c(this).constructor;
            r = Reflect.construct(o, arguments, n);
          } else r = o.apply(this, arguments);

          return l(this, r);
        };
      }

      r("e260"), r("4ec9"), r("3ca3"), r("ddb0"), r("c975");

      function f(e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]");
      }

      function h(e, t, r) {
        return h = i() ? Reflect.construct : function (e, t, r) {
          var o = [null];
          o.push.apply(o, t);
          var a = Function.bind.apply(e, o),
              c = new a();
          return r && n(c, r.prototype), c;
        }, h.apply(null, arguments);
      }

      function p(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return p = function p(e) {
          if (null === e || !f(e)) return e;
          if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");

          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }

          function r() {
            return h(e, arguments, c(this).constructor);
          }

          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), n(r, e);
        }, p(e);
      }

      var v = function (e) {
        a(r, e);
        var t = d(r);

        function r() {
          var e;
          return Object(o["a"])(this, r), e = t.call(this, "can't process cross-origin image"), e.name = "DropImageFetchError", e;
        }

        return r;
      }(p(Error)),
          m = function (e) {
        a(r, e);
        var t = d(r);

        function r() {
          var e;
          return Object(o["a"])(this, r), e = t.call(this, "this browser has no Stream API support"), e.name = "StreamApiNotSupportedError", e;
        }

        return r;
      }(p(Error)),
          k = function (e) {
        a(r, e);
        var t = d(r);

        function r() {
          var e;
          return Object(o["a"])(this, r), e = t.call(this, "camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."), e.name = "InsecureContextError", e;
        }

        return r;
      }(p(Error));
    },
    "1cdc": function cdc(e, t, r) {
      var o = r("342f");
      e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o);
    },
    "1d20": function d20(e, t, r) {
      var o = r("7260");
      "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
      var n = r("499e")["default"];
      n("22ae7e38", o, !0, {
        sourceMap: !1,
        shadowMode: !1
      });
    },
    "1d80": function d80(e, t) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    "1da1": function da1(e, t, r) {
      "use strict";

      r.d(t, "a", function () {
        return n;
      });
      r("d3b7"), r("e6cf");

      function o(e, t, r, o, n, a, c) {
        try {
          var i = e[a](c),
              s = i.value;
        } catch (u) {
          return void r(u);
        }

        i.done ? t(s) : Promise.resolve(s).then(o, n);
      }

      function n(e) {
        return function () {
          var t = this,
              r = arguments;
          return new Promise(function (n, a) {
            var c = e.apply(t, r);

            function i(e) {
              o(c, n, a, i, s, "next", e);
            }

            function s(e) {
              o(c, n, a, i, s, "throw", e);
            }

            i(void 0);
          });
        };
      }
    },
    "1dde": function dde(e, t, r) {
      var o = r("d039"),
          n = r("b622"),
          a = r("2d00"),
          c = n("species");

      e.exports = function (e) {
        return a >= 51 || !o(function () {
          var t = [],
              r = t.constructor = {};
          return r[c] = function () {
            return {
              foo: 1
            };
          }, 1 !== t[e](Boolean).foo;
        });
      };
    },
    2266: function _(e, t, r) {
      var o = r("825a"),
          n = r("e95a"),
          a = r("50c4"),
          c = r("0366"),
          i = r("35a1"),
          s = r("9bdd"),
          u = function u(e, t) {
        this.stopped = e, this.result = t;
      },
          l = e.exports = function (e, t, r, l, d) {
        var f,
            h,
            p,
            v,
            m,
            k,
            B,
            w = c(t, r, l ? 2 : 1);
        if (d) f = e;else {
          if (h = i(e), "function" != typeof h) throw TypeError("Target is not iterable");

          if (n(h)) {
            for (p = 0, v = a(e.length); v > p; p++) {
              if (m = l ? w(o(B = e[p])[0], B[1]) : w(e[p]), m && m instanceof u) return m;
            }

            return new u(!1);
          }

          f = h.call(e);
        }
        k = f.next;

        while (!(B = k.call(f)).done) {
          if (m = s(f, w, B.value, l), "object" == _typeof(m) && m && m instanceof u) return m;
        }

        return new u(!1);
      };

      l.stop = function (e) {
        return new u(!0, e);
      };
    },
    "23cb": function cb(e, t, r) {
      var o = r("a691"),
          n = Math.max,
          a = Math.min;

      e.exports = function (e, t) {
        var r = o(e);
        return r < 0 ? n(r + t, 0) : a(r, t);
      };
    },
    "23e7": function e7(e, t, r) {
      var o = r("da84"),
          n = r("06cf").f,
          a = r("9112"),
          c = r("6eeb"),
          i = r("ce4e"),
          s = r("e893"),
          u = r("94ca");

      e.exports = function (e, t) {
        var r,
            l,
            d,
            f,
            h,
            p,
            v = e.target,
            m = e.global,
            k = e.stat;
        if (l = m ? o : k ? o[v] || i(v, {}) : (o[v] || {}).prototype, l) for (d in t) {
          if (h = t[d], e.noTargetGet ? (p = n(l, d), f = p && p.value) : f = l[d], r = u(m ? d : v + (k ? "." : "#") + d, e.forced), !r && void 0 !== f) {
            if (_typeof(h) === _typeof(f)) continue;
            s(h, f);
          }

          (e.sham || f && f.sham) && a(h, "sham", !0), c(l, d, h, e);
        }
      };
    },
    "241c": function c(e, t, r) {
      var o = r("ca84"),
          n = r("7839"),
          a = n.concat("length", "prototype");

      t.f = Object.getOwnPropertyNames || function (e) {
        return o(e, a);
      };
    },
    "24fb": function fb(e, t, r) {
      "use strict";

      function o(e, t) {
        var r = e[1] || "",
            o = e[3];
        if (!o) return r;

        if (t && "function" === typeof btoa) {
          var a = n(o),
              c = o.sources.map(function (e) {
            return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */");
          });
          return [r].concat(c).concat([a]).join("\n");
        }

        return [r].join("\n");
      }

      function n(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
            r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
        return "/*# ".concat(r, " */");
      }

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var r = o(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
          }).join("");
        }, t.i = function (e, r, o) {
          "string" === typeof e && (e = [[null, e, ""]]);
          var n = {};
          if (o) for (var a = 0; a < this.length; a++) {
            var c = this[a][0];
            null != c && (n[c] = !0);
          }

          for (var i = 0; i < e.length; i++) {
            var s = [].concat(e[i]);
            o && n[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r), t.push(s));
          }
        }, t;
      };
    },
    2532: function _(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("5a34"),
          a = r("1d80"),
          c = r("ab13");
      o({
        target: "String",
        proto: !0,
        forced: !c("includes")
      }, {
        includes: function includes(e) {
          return !!~String(a(this)).indexOf(n(e), arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    "25f0": function f0(e, t, r) {
      "use strict";

      var o = r("6eeb"),
          n = r("825a"),
          a = r("d039"),
          c = r("ad6d"),
          i = "toString",
          s = RegExp.prototype,
          u = s[i],
          l = a(function () {
        return "/a/b" != u.call({
          source: "a",
          flags: "b"
        });
      }),
          d = u.name != i;
      (l || d) && o(RegExp.prototype, i, function () {
        var e = n(this),
            t = String(e.source),
            r = e.flags,
            o = String(void 0 === r && e instanceof RegExp && !("flags" in s) ? c.call(e) : r);
        return "/" + t + "/" + o;
      }, {
        unsafe: !0
      });
    },
    2626: function _(e, t, r) {
      "use strict";

      var o = r("d066"),
          n = r("9bf2"),
          a = r("b622"),
          c = r("83ab"),
          i = a("species");

      e.exports = function (e) {
        var t = o(e),
            r = n.f;
        c && t && !t[i] && r(t, i, {
          configurable: !0,
          get: function get() {
            return this;
          }
        });
      };
    },
    2877: function _(e, t, r) {
      "use strict";

      function o(e, t, r, o, n, a, c, i) {
        var s,
            u = "function" === typeof e ? e.options : e;
        if (t && (u.render = t, u.staticRenderFns = r, u._compiled = !0), o && (u.functional = !0), a && (u._scopeId = "data-v-" + a), c ? (s = function s(e) {
          e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(c);
        }, u._ssrRegister = s) : n && (s = i ? function () {
          n.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
        } : n), s) if (u.functional) {
          u._injectStyles = s;
          var l = u.render;

          u.render = function (e, t) {
            return s.call(t), l(e, t);
          };
        } else {
          var d = u.beforeCreate;
          u.beforeCreate = d ? [].concat(d, s) : [s];
        }
        return {
          exports: e,
          options: u
        };
      }

      r.d(t, "a", function () {
        return o;
      });
    },
    2909: function _(e, t, r) {
      "use strict";

      r.d(t, "a", function () {
        return s;
      });
      var o = r("6b75");

      function n(e) {
        if (Array.isArray(e)) return Object(o["a"])(e);
      }

      r("a4d3"), r("e01a"), r("d28b"), r("a630"), r("e260"), r("d3b7"), r("3ca3"), r("ddb0");

      function a(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }

      var c = r("06c5");

      function i() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function s(e) {
        return n(e) || a(e) || Object(c["a"])(e) || i();
      }
    },
    "2b3d": function b3d(e, t, r) {
      "use strict";

      r("3ca3");

      var o,
          n = r("23e7"),
          a = r("83ab"),
          c = r("0d3b"),
          i = r("da84"),
          s = r("37e8"),
          u = r("6eeb"),
          l = r("19aa"),
          d = r("5135"),
          f = r("60da"),
          h = r("4df4"),
          p = r("6547").codeAt,
          v = r("5fb2"),
          m = r("d44e"),
          k = r("9861"),
          B = r("69f3"),
          w = i.URL,
          b = k.URLSearchParams,
          y = k.getState,
          g = B.set,
          C = B.getterFor("URL"),
          P = Math.floor,
          x = Math.pow,
          S = "Invalid authority",
          O = "Invalid scheme",
          j = "Invalid host",
          E = "Invalid port",
          M = /[A-Za-z]/,
          L = /[\d+-.A-Za-z]/,
          R = /\d/,
          A = /^(0x|0X)/,
          I = /^[0-7]+$/,
          T = /^\d+$/,
          _ = /^[\dA-Fa-f]+$/,
          N = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
          U = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
          D = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
          F = /[\u0009\u000A\u000D]/g,
          z = function z(e, t) {
        var r, o, n;

        if ("[" == t.charAt(0)) {
          if ("]" != t.charAt(t.length - 1)) return j;
          if (r = X(t.slice(1, -1)), !r) return j;
          e.host = r;
        } else if (Q(e)) {
          if (t = v(t), N.test(t)) return j;
          if (r = q(t), null === r) return j;
          e.host = r;
        } else {
          if (U.test(t)) return j;

          for (r = "", o = h(t), n = 0; n < o.length; n++) {
            r += K(o[n], W);
          }

          e.host = r;
        }
      },
          q = function q(e) {
        var t,
            r,
            o,
            n,
            a,
            c,
            i,
            s = e.split(".");
        if (s.length && "" == s[s.length - 1] && s.pop(), t = s.length, t > 4) return e;

        for (r = [], o = 0; o < t; o++) {
          if (n = s[o], "" == n) return e;
          if (a = 10, n.length > 1 && "0" == n.charAt(0) && (a = A.test(n) ? 16 : 8, n = n.slice(8 == a ? 1 : 2)), "" === n) c = 0;else {
            if (!(10 == a ? T : 8 == a ? I : _).test(n)) return e;
            c = parseInt(n, a);
          }
          r.push(c);
        }

        for (o = 0; o < t; o++) {
          if (c = r[o], o == t - 1) {
            if (c >= x(256, 5 - t)) return null;
          } else if (c > 255) return null;
        }

        for (i = r.pop(), o = 0; o < r.length; o++) {
          i += r[o] * x(256, 3 - o);
        }

        return i;
      },
          X = function X(e) {
        var t,
            r,
            o,
            n,
            a,
            c,
            i,
            s = [0, 0, 0, 0, 0, 0, 0, 0],
            u = 0,
            l = null,
            d = 0,
            f = function f() {
          return e.charAt(d);
        };

        if (":" == f()) {
          if (":" != e.charAt(1)) return;
          d += 2, u++, l = u;
        }

        while (f()) {
          if (8 == u) return;

          if (":" != f()) {
            t = r = 0;

            while (r < 4 && _.test(f())) {
              t = 16 * t + parseInt(f(), 16), d++, r++;
            }

            if ("." == f()) {
              if (0 == r) return;
              if (d -= r, u > 6) return;
              o = 0;

              while (f()) {
                if (n = null, o > 0) {
                  if (!("." == f() && o < 4)) return;
                  d++;
                }

                if (!R.test(f())) return;

                while (R.test(f())) {
                  if (a = parseInt(f(), 10), null === n) n = a;else {
                    if (0 == n) return;
                    n = 10 * n + a;
                  }
                  if (n > 255) return;
                  d++;
                }

                s[u] = 256 * s[u] + n, o++, 2 != o && 4 != o || u++;
              }

              if (4 != o) return;
              break;
            }

            if (":" == f()) {
              if (d++, !f()) return;
            } else if (f()) return;

            s[u++] = t;
          } else {
            if (null !== l) return;
            d++, u++, l = u;
          }
        }

        if (null !== l) {
          c = u - l, u = 7;

          while (0 != u && c > 0) {
            i = s[u], s[u--] = s[l + c - 1], s[l + --c] = i;
          }
        } else if (8 != u) return;

        return s;
      },
          G = function G(e) {
        for (var t = null, r = 1, o = null, n = 0, a = 0; a < 8; a++) {
          0 !== e[a] ? (n > r && (t = o, r = n), o = null, n = 0) : (null === o && (o = a), ++n);
        }

        return n > r && (t = o, r = n), t;
      },
          $ = function $(e) {
        var t, r, o, n;

        if ("number" == typeof e) {
          for (t = [], r = 0; r < 4; r++) {
            t.unshift(e % 256), e = P(e / 256);
          }

          return t.join(".");
        }

        if ("object" == _typeof(e)) {
          for (t = "", o = G(e), r = 0; r < 8; r++) {
            n && 0 === e[r] || (n && (n = !1), o === r ? (t += r ? ":" : "::", n = !0) : (t += e[r].toString(16), r < 7 && (t += ":")));
          }

          return "[" + t + "]";
        }

        return e;
      },
          W = {},
          H = f({}, W, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
      }),
          V = f({}, H, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
      }),
          J = f({}, V, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
      }),
          K = function K(e, t) {
        var r = p(e, 0);
        return r > 32 && r < 127 && !d(t, e) ? e : encodeURIComponent(e);
      },
          Z = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      },
          Q = function Q(e) {
        return d(Z, e.scheme);
      },
          Y = function Y(e) {
        return "" != e.username || "" != e.password;
      },
          ee = function ee(e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
      },
          te = function te(e, t) {
        var r;
        return 2 == e.length && M.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r);
      },
          re = function re(e) {
        var t;
        return e.length > 1 && te(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
      },
          oe = function oe(e) {
        var t = e.path,
            r = t.length;
        !r || "file" == e.scheme && 1 == r && te(t[0], !0) || t.pop();
      },
          ne = function ne(e) {
        return "." === e || "%2e" === e.toLowerCase();
      },
          ae = function ae(e) {
        return e = e.toLowerCase(), ".." === e || "%2e." === e || ".%2e" === e || "%2e%2e" === e;
      },
          ce = {},
          ie = {},
          se = {},
          ue = {},
          le = {},
          de = {},
          fe = {},
          he = {},
          pe = {},
          ve = {},
          me = {},
          ke = {},
          Be = {},
          we = {},
          be = {},
          ye = {},
          ge = {},
          Ce = {},
          Pe = {},
          xe = {},
          Se = {},
          Oe = function Oe(e, t, r, n) {
        var a,
            c,
            i,
            s,
            u = r || ce,
            l = 0,
            f = "",
            p = !1,
            v = !1,
            m = !1;
        r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(D, "")), t = t.replace(F, ""), a = h(t);

        while (l <= a.length) {
          switch (c = a[l], u) {
            case ce:
              if (!c || !M.test(c)) {
                if (r) return O;
                u = se;
                continue;
              }

              f += c.toLowerCase(), u = ie;
              break;

            case ie:
              if (c && (L.test(c) || "+" == c || "-" == c || "." == c)) f += c.toLowerCase();else {
                if (":" != c) {
                  if (r) return O;
                  f = "", u = se, l = 0;
                  continue;
                }

                if (r && (Q(e) != d(Z, f) || "file" == f && (Y(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                if (e.scheme = f, r) return void (Q(e) && Z[e.scheme] == e.port && (e.port = null));
                f = "", "file" == e.scheme ? u = we : Q(e) && n && n.scheme == e.scheme ? u = ue : Q(e) ? u = he : "/" == a[l + 1] ? (u = le, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), u = Pe);
              }
              break;

            case se:
              if (!n || n.cannotBeABaseURL && "#" != c) return O;

              if (n.cannotBeABaseURL && "#" == c) {
                e.scheme = n.scheme, e.path = n.path.slice(), e.query = n.query, e.fragment = "", e.cannotBeABaseURL = !0, u = Se;
                break;
              }

              u = "file" == n.scheme ? we : de;
              continue;

            case ue:
              if ("/" != c || "/" != a[l + 1]) {
                u = de;
                continue;
              }

              u = pe, l++;
              break;

            case le:
              if ("/" == c) {
                u = ve;
                break;
              }

              u = Ce;
              continue;

            case de:
              if (e.scheme = n.scheme, c == o) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query;else if ("/" == c || "\\" == c && Q(e)) u = fe;else if ("?" == c) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = "", u = xe;else {
                if ("#" != c) {
                  e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.path.pop(), u = Ce;
                  continue;
                }

                e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query, e.fragment = "", u = Se;
              }
              break;

            case fe:
              if (!Q(e) || "/" != c && "\\" != c) {
                if ("/" != c) {
                  e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, u = Ce;
                  continue;
                }

                u = ve;
              } else u = pe;

              break;

            case he:
              if (u = pe, "/" != c || "/" != f.charAt(l + 1)) continue;
              l++;
              break;

            case pe:
              if ("/" != c && "\\" != c) {
                u = ve;
                continue;
              }

              break;

            case ve:
              if ("@" == c) {
                p && (f = "%40" + f), p = !0, i = h(f);

                for (var k = 0; k < i.length; k++) {
                  var B = i[k];

                  if (":" != B || m) {
                    var w = K(B, J);
                    m ? e.password += w : e.username += w;
                  } else m = !0;
                }

                f = "";
              } else if (c == o || "/" == c || "?" == c || "#" == c || "\\" == c && Q(e)) {
                if (p && "" == f) return S;
                l -= h(f).length + 1, f = "", u = me;
              } else f += c;

              break;

            case me:
            case ke:
              if (r && "file" == e.scheme) {
                u = ye;
                continue;
              }

              if (":" != c || v) {
                if (c == o || "/" == c || "?" == c || "#" == c || "\\" == c && Q(e)) {
                  if (Q(e) && "" == f) return j;
                  if (r && "" == f && (Y(e) || null !== e.port)) return;
                  if (s = z(e, f), s) return s;
                  if (f = "", u = ge, r) return;
                  continue;
                }

                "[" == c ? v = !0 : "]" == c && (v = !1), f += c;
              } else {
                if ("" == f) return j;
                if (s = z(e, f), s) return s;
                if (f = "", u = Be, r == ke) return;
              }

              break;

            case Be:
              if (!R.test(c)) {
                if (c == o || "/" == c || "?" == c || "#" == c || "\\" == c && Q(e) || r) {
                  if ("" != f) {
                    var b = parseInt(f, 10);
                    if (b > 65535) return E;
                    e.port = Q(e) && b === Z[e.scheme] ? null : b, f = "";
                  }

                  if (r) return;
                  u = ge;
                  continue;
                }

                return E;
              }

              f += c;
              break;

            case we:
              if (e.scheme = "file", "/" == c || "\\" == c) u = be;else {
                if (!n || "file" != n.scheme) {
                  u = Ce;
                  continue;
                }

                if (c == o) e.host = n.host, e.path = n.path.slice(), e.query = n.query;else if ("?" == c) e.host = n.host, e.path = n.path.slice(), e.query = "", u = xe;else {
                  if ("#" != c) {
                    re(a.slice(l).join("")) || (e.host = n.host, e.path = n.path.slice(), oe(e)), u = Ce;
                    continue;
                  }

                  e.host = n.host, e.path = n.path.slice(), e.query = n.query, e.fragment = "", u = Se;
                }
              }
              break;

            case be:
              if ("/" == c || "\\" == c) {
                u = ye;
                break;
              }

              n && "file" == n.scheme && !re(a.slice(l).join("")) && (te(n.path[0], !0) ? e.path.push(n.path[0]) : e.host = n.host), u = Ce;
              continue;

            case ye:
              if (c == o || "/" == c || "\\" == c || "?" == c || "#" == c) {
                if (!r && te(f)) u = Ce;else if ("" == f) {
                  if (e.host = "", r) return;
                  u = ge;
                } else {
                  if (s = z(e, f), s) return s;
                  if ("localhost" == e.host && (e.host = ""), r) return;
                  f = "", u = ge;
                }
                continue;
              }

              f += c;
              break;

            case ge:
              if (Q(e)) {
                if (u = Ce, "/" != c && "\\" != c) continue;
              } else if (r || "?" != c) {
                if (r || "#" != c) {
                  if (c != o && (u = Ce, "/" != c)) continue;
                } else e.fragment = "", u = Se;
              } else e.query = "", u = xe;

              break;

            case Ce:
              if (c == o || "/" == c || "\\" == c && Q(e) || !r && ("?" == c || "#" == c)) {
                if (ae(f) ? (oe(e), "/" == c || "\\" == c && Q(e) || e.path.push("")) : ne(f) ? "/" == c || "\\" == c && Q(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && te(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (c == o || "?" == c || "#" == c)) while (e.path.length > 1 && "" === e.path[0]) {
                  e.path.shift();
                }
                "?" == c ? (e.query = "", u = xe) : "#" == c && (e.fragment = "", u = Se);
              } else f += K(c, V);

              break;

            case Pe:
              "?" == c ? (e.query = "", u = xe) : "#" == c ? (e.fragment = "", u = Se) : c != o && (e.path[0] += K(c, W));
              break;

            case xe:
              r || "#" != c ? c != o && ("'" == c && Q(e) ? e.query += "%27" : e.query += "#" == c ? "%23" : K(c, W)) : (e.fragment = "", u = Se);
              break;

            case Se:
              c != o && (e.fragment += K(c, H));
              break;
          }

          l++;
        }
      },
          je = function je(e) {
        var t,
            r,
            o = l(this, je, "URL"),
            n = arguments.length > 1 ? arguments[1] : void 0,
            c = String(e),
            i = g(o, {
          type: "URL"
        });
        if (void 0 !== n) if (n instanceof je) t = C(n);else if (r = Oe(t = {}, String(n)), r) throw TypeError(r);
        if (r = Oe(i, c, null, t), r) throw TypeError(r);
        var s = i.searchParams = new b(),
            u = y(s);
        u.updateSearchParams(i.query), u.updateURL = function () {
          i.query = String(s) || null;
        }, a || (o.href = Me.call(o), o.origin = Le.call(o), o.protocol = Re.call(o), o.username = Ae.call(o), o.password = Ie.call(o), o.host = Te.call(o), o.hostname = _e.call(o), o.port = Ne.call(o), o.pathname = Ue.call(o), o.search = De.call(o), o.searchParams = Fe.call(o), o.hash = ze.call(o));
      },
          Ee = je.prototype,
          Me = function Me() {
        var e = C(this),
            t = e.scheme,
            r = e.username,
            o = e.password,
            n = e.host,
            a = e.port,
            c = e.path,
            i = e.query,
            s = e.fragment,
            u = t + ":";
        return null !== n ? (u += "//", Y(e) && (u += r + (o ? ":" + o : "") + "@"), u += $(n), null !== a && (u += ":" + a)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? c[0] : c.length ? "/" + c.join("/") : "", null !== i && (u += "?" + i), null !== s && (u += "#" + s), u;
      },
          Le = function Le() {
        var e = C(this),
            t = e.scheme,
            r = e.port;
        if ("blob" == t) try {
          return new URL(t.path[0]).origin;
        } catch (o) {
          return "null";
        }
        return "file" != t && Q(e) ? t + "://" + $(e.host) + (null !== r ? ":" + r : "") : "null";
      },
          Re = function Re() {
        return C(this).scheme + ":";
      },
          Ae = function Ae() {
        return C(this).username;
      },
          Ie = function Ie() {
        return C(this).password;
      },
          Te = function Te() {
        var e = C(this),
            t = e.host,
            r = e.port;
        return null === t ? "" : null === r ? $(t) : $(t) + ":" + r;
      },
          _e = function _e() {
        var e = C(this).host;
        return null === e ? "" : $(e);
      },
          Ne = function Ne() {
        var e = C(this).port;
        return null === e ? "" : String(e);
      },
          Ue = function Ue() {
        var e = C(this),
            t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
      },
          De = function De() {
        var e = C(this).query;
        return e ? "?" + e : "";
      },
          Fe = function Fe() {
        return C(this).searchParams;
      },
          ze = function ze() {
        var e = C(this).fragment;
        return e ? "#" + e : "";
      },
          qe = function qe(e, t) {
        return {
          get: e,
          set: t,
          configurable: !0,
          enumerable: !0
        };
      };

      if (a && s(Ee, {
        href: qe(Me, function (e) {
          var t = C(this),
              r = String(e),
              o = Oe(t, r);
          if (o) throw TypeError(o);
          y(t.searchParams).updateSearchParams(t.query);
        }),
        origin: qe(Le),
        protocol: qe(Re, function (e) {
          var t = C(this);
          Oe(t, String(e) + ":", ce);
        }),
        username: qe(Ae, function (e) {
          var t = C(this),
              r = h(String(e));

          if (!ee(t)) {
            t.username = "";

            for (var o = 0; o < r.length; o++) {
              t.username += K(r[o], J);
            }
          }
        }),
        password: qe(Ie, function (e) {
          var t = C(this),
              r = h(String(e));

          if (!ee(t)) {
            t.password = "";

            for (var o = 0; o < r.length; o++) {
              t.password += K(r[o], J);
            }
          }
        }),
        host: qe(Te, function (e) {
          var t = C(this);
          t.cannotBeABaseURL || Oe(t, String(e), me);
        }),
        hostname: qe(_e, function (e) {
          var t = C(this);
          t.cannotBeABaseURL || Oe(t, String(e), ke);
        }),
        port: qe(Ne, function (e) {
          var t = C(this);
          ee(t) || (e = String(e), "" == e ? t.port = null : Oe(t, e, Be));
        }),
        pathname: qe(Ue, function (e) {
          var t = C(this);
          t.cannotBeABaseURL || (t.path = [], Oe(t, e + "", ge));
        }),
        search: qe(De, function (e) {
          var t = C(this);
          e = String(e), "" == e ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Oe(t, e, xe)), y(t.searchParams).updateSearchParams(t.query);
        }),
        searchParams: qe(Fe),
        hash: qe(ze, function (e) {
          var t = C(this);
          e = String(e), "" != e ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Oe(t, e, Se)) : t.fragment = null;
        })
      }), u(Ee, "toJSON", function () {
        return Me.call(this);
      }, {
        enumerable: !0
      }), u(Ee, "toString", function () {
        return Me.call(this);
      }, {
        enumerable: !0
      }), w) {
        var Xe = w.createObjectURL,
            Ge = w.revokeObjectURL;
        Xe && u(je, "createObjectURL", function (e) {
          return Xe.apply(w, arguments);
        }), Ge && u(je, "revokeObjectURL", function (e) {
          return Ge.apply(w, arguments);
        });
      }

      m(je, "URL"), n({
        global: !0,
        forced: !c,
        sham: !a
      }, {
        URL: je
      });
    },
    "2ca0": function ca0(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("06cf").f,
          a = r("50c4"),
          c = r("5a34"),
          i = r("1d80"),
          s = r("ab13"),
          u = r("c430"),
          l = "".startsWith,
          d = Math.min,
          f = s("startsWith"),
          h = !u && !f && !!function () {
        var e = n(String.prototype, "startsWith");
        return e && !e.writable;
      }();
      o({
        target: "String",
        proto: !0,
        forced: !h && !f
      }, {
        startsWith: function startsWith(e) {
          var t = String(i(this));
          c(e);
          var r = a(d(arguments.length > 1 ? arguments[1] : void 0, t.length)),
              o = String(e);
          return l ? l.call(t, o, r) : t.slice(r, r + o.length) === o;
        }
      });
    },
    "2cf4": function cf4(e, t, r) {
      var o,
          n,
          a,
          c = r("da84"),
          i = r("d039"),
          s = r("c6b6"),
          u = r("0366"),
          l = r("1be4"),
          d = r("cc12"),
          f = r("1cdc"),
          h = c.location,
          p = c.setImmediate,
          v = c.clearImmediate,
          m = c.process,
          k = c.MessageChannel,
          B = c.Dispatch,
          w = 0,
          b = {},
          y = "onreadystatechange",
          g = function g(e) {
        if (b.hasOwnProperty(e)) {
          var t = b[e];
          delete b[e], t();
        }
      },
          C = function C(e) {
        return function () {
          g(e);
        };
      },
          P = function P(e) {
        g(e.data);
      },
          x = function x(e) {
        c.postMessage(e + "", h.protocol + "//" + h.host);
      };

      p && v || (p = function p(e) {
        var t = [],
            r = 1;

        while (arguments.length > r) {
          t.push(arguments[r++]);
        }

        return b[++w] = function () {
          ("function" == typeof e ? e : Function(e)).apply(void 0, t);
        }, o(w), w;
      }, v = function v(e) {
        delete b[e];
      }, "process" == s(m) ? o = function o(e) {
        m.nextTick(C(e));
      } : B && B.now ? o = function o(e) {
        B.now(C(e));
      } : k && !f ? (n = new k(), a = n.port2, n.port1.onmessage = P, o = u(a.postMessage, a, 1)) : !c.addEventListener || "function" != typeof postMessage || c.importScripts || i(x) || "file:" === h.protocol ? o = y in d("script") ? function (e) {
        l.appendChild(d("script"))[y] = function () {
          l.removeChild(this), g(e);
        };
      } : function (e) {
        setTimeout(C(e), 0);
      } : (o = x, c.addEventListener("message", P, !1))), e.exports = {
        set: p,
        clear: v
      };
    },
    "2d00": function d00(e, t, r) {
      var o,
          n,
          a = r("da84"),
          c = r("342f"),
          i = a.process,
          s = i && i.versions,
          u = s && s.v8;
      u ? (o = u.split("."), n = o[0] + o[1]) : c && (o = c.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = c.match(/Chrome\/(\d+)/), o && (n = o[1]))), e.exports = n && +n;
    },
    3410: function _(e, t, r) {
      var o = r("23e7"),
          n = r("d039"),
          a = r("7b0b"),
          c = r("e163"),
          i = r("e177"),
          s = n(function () {
        c(1);
      });
      o({
        target: "Object",
        stat: !0,
        forced: s,
        sham: !i
      }, {
        getPrototypeOf: function getPrototypeOf(e) {
          return c(a(e));
        }
      });
    },
    "342f": function f(e, t, r) {
      var o = r("d066");
      e.exports = o("navigator", "userAgent") || "";
    },
    "35a1": function a1(e, t, r) {
      var o = r("f5df"),
          n = r("3f8c"),
          a = r("b622"),
          c = a("iterator");

      e.exports = function (e) {
        if (void 0 != e) return e[c] || e["@@iterator"] || n[o(e)];
      };
    },
    "37e8": function e8(e, t, r) {
      var o = r("83ab"),
          n = r("9bf2"),
          a = r("825a"),
          c = r("df75");
      e.exports = o ? Object.defineProperties : function (e, t) {
        a(e);
        var r,
            o = c(t),
            i = o.length,
            s = 0;

        while (i > s) {
          n.f(e, r = o[s++], t[r]);
        }

        return e;
      };
    },
    3835: function _(e, t, r) {
      "use strict";

      function o(e) {
        if (Array.isArray(e)) return e;
      }

      r.d(t, "a", function () {
        return i;
      });
      r("a4d3"), r("e01a"), r("d28b"), r("e260"), r("d3b7"), r("3ca3"), r("ddb0");

      function n(e, t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
              o = !0,
              n = !1,
              a = void 0;

          try {
            for (var c, i = e[Symbol.iterator](); !(o = (c = i.next()).done); o = !0) {
              if (r.push(c.value), t && r.length === t) break;
            }
          } catch (s) {
            n = !0, a = s;
          } finally {
            try {
              o || null == i["return"] || i["return"]();
            } finally {
              if (n) throw a;
            }
          }

          return r;
        }
      }

      var a = r("06c5");

      function c() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function i(e, t) {
        return o(e) || n(e, t) || Object(a["a"])(e, t) || c();
      }
    },
    "3bbe": function bbe(e, t, r) {
      var o = r("861d");

      e.exports = function (e) {
        if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
      };
    },
    "3ca3": function ca3(e, t, r) {
      "use strict";

      var o = r("6547").charAt,
          n = r("69f3"),
          a = r("7dd0"),
          c = "String Iterator",
          i = n.set,
          s = n.getterFor(c);
      a(String, "String", function (e) {
        i(this, {
          type: c,
          string: String(e),
          index: 0
        });
      }, function () {
        var e,
            t = s(this),
            r = t.string,
            n = t.index;
        return n >= r.length ? {
          value: void 0,
          done: !0
        } : (e = o(r, n), t.index += e.length, {
          value: e,
          done: !1
        });
      });
    },
    "3f8c": function f8c(e, t) {
      e.exports = {};
    },
    4160: function _(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("17c2");
      o({
        target: "Array",
        proto: !0,
        forced: [].forEach != n
      }, {
        forEach: n
      });
    },
    "428f": function f(e, t, r) {
      var o = r("da84");
      e.exports = o;
    },
    "44ad": function ad(e, t, r) {
      var o = r("d039"),
          n = r("c6b6"),
          a = "".split;
      e.exports = o(function () {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function (e) {
        return "String" == n(e) ? a.call(e, "") : Object(e);
      } : Object;
    },
    "44d2": function d2(e, t, r) {
      var o = r("b622"),
          n = r("7c73"),
          a = r("9bf2"),
          c = o("unscopables"),
          i = Array.prototype;
      void 0 == i[c] && a.f(i, c, {
        configurable: !0,
        value: n(null)
      }), e.exports = function (e) {
        i[c][e] = !0;
      };
    },
    "44de": function de(e, t, r) {
      var o = r("da84");

      e.exports = function (e, t) {
        var r = o.console;
        r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t));
      };
    },
    "44e7": function e7(e, t, r) {
      var o = r("861d"),
          n = r("c6b6"),
          a = r("b622"),
          c = a("match");

      e.exports = function (e) {
        var t;
        return o(e) && (void 0 !== (t = e[c]) ? !!t : "RegExp" == n(e));
      };
    },
    "45fc": function fc(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("b727").some,
          a = r("a640"),
          c = r("ae40"),
          i = a("some"),
          s = c("some");
      o({
        target: "Array",
        proto: !0,
        forced: !i || !s
      }, {
        some: function some(e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    "466d": function d(e, t, r) {
      "use strict";

      var o = r("d784"),
          n = r("825a"),
          a = r("50c4"),
          c = r("1d80"),
          i = r("8aa5"),
          s = r("14c3");
      o("match", 1, function (e, t, r) {
        return [function (t) {
          var r = c(this),
              o = void 0 == t ? void 0 : t[e];
          return void 0 !== o ? o.call(t, r) : new RegExp(t)[e](String(r));
        }, function (e) {
          var o = r(t, e, this);
          if (o.done) return o.value;
          var c = n(e),
              u = String(this);
          if (!c.global) return s(c, u);
          var l = c.unicode;
          c.lastIndex = 0;
          var d,
              f = [],
              h = 0;

          while (null !== (d = s(c, u))) {
            var p = String(d[0]);
            f[h] = p, "" === p && (c.lastIndex = i(u, a(c.lastIndex), l)), h++;
          }

          return 0 === h ? null : f;
        }];
      });
    },
    4840: function _(e, t, r) {
      var o = r("825a"),
          n = r("1c0b"),
          a = r("b622"),
          c = a("species");

      e.exports = function (e, t) {
        var r,
            a = o(e).constructor;
        return void 0 === a || void 0 == (r = o(a)[c]) ? t : n(r);
      };
    },
    4930: function _(e, t, r) {
      var o = r("d039");
      e.exports = !!Object.getOwnPropertySymbols && !o(function () {
        return !String(Symbol());
      });
    },
    "499e": function e(_e2, t, r) {
      "use strict";

      function o(e, t) {
        for (var r = [], o = {}, n = 0; n < t.length; n++) {
          var a = t[n],
              c = a[0],
              i = a[1],
              s = a[2],
              u = a[3],
              l = {
            id: e + ":" + n,
            css: i,
            media: s,
            sourceMap: u
          };
          o[c] ? o[c].parts.push(l) : r.push(o[c] = {
            id: c,
            parts: [l]
          });
        }

        return r;
      }

      r.r(t), r.d(t, "default", function () {
        return p;
      });
      var n = "undefined" !== typeof document;
      if ("undefined" !== typeof DEBUG && DEBUG && !n) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

      var a = {},
          c = n && (document.head || document.getElementsByTagName("head")[0]),
          i = null,
          s = 0,
          u = !1,
          l = function l() {},
          d = null,
          f = "data-vue-ssr-id",
          h = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function p(e, t, r, n) {
        u = r, d = n || {};
        var c = o(e, t);
        return v(c), function (t) {
          for (var r = [], n = 0; n < c.length; n++) {
            var i = c[n],
                s = a[i.id];
            s.refs--, r.push(s);
          }

          t ? (c = o(e, t), v(c)) : c = [];

          for (n = 0; n < r.length; n++) {
            s = r[n];

            if (0 === s.refs) {
              for (var u = 0; u < s.parts.length; u++) {
                s.parts[u]();
              }

              delete a[s.id];
            }
          }
        };
      }

      function v(e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t],
              o = a[r.id];

          if (o) {
            o.refs++;

            for (var n = 0; n < o.parts.length; n++) {
              o.parts[n](r.parts[n]);
            }

            for (; n < r.parts.length; n++) {
              o.parts.push(k(r.parts[n]));
            }

            o.parts.length > r.parts.length && (o.parts.length = r.parts.length);
          } else {
            var c = [];

            for (n = 0; n < r.parts.length; n++) {
              c.push(k(r.parts[n]));
            }

            a[r.id] = {
              id: r.id,
              refs: 1,
              parts: c
            };
          }
        }
      }

      function m() {
        var e = document.createElement("style");
        return e.type = "text/css", c.appendChild(e), e;
      }

      function k(e) {
        var t,
            r,
            o = document.querySelector("style[" + f + '~="' + e.id + '"]');

        if (o) {
          if (u) return l;
          o.parentNode.removeChild(o);
        }

        if (h) {
          var n = s++;
          o = i || (i = m()), t = w.bind(null, o, n, !1), r = w.bind(null, o, n, !0);
        } else o = m(), t = b.bind(null, o), r = function r() {
          o.parentNode.removeChild(o);
        };

        return t(e), function (o) {
          if (o) {
            if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
            t(e = o);
          } else r();
        };
      }

      var B = function () {
        var e = [];
        return function (t, r) {
          return e[t] = r, e.filter(Boolean).join("\n");
        };
      }();

      function w(e, t, r, o) {
        var n = r ? "" : o.css;
        if (e.styleSheet) e.styleSheet.cssText = B(t, n);else {
          var a = document.createTextNode(n),
              c = e.childNodes;
          c[t] && e.removeChild(c[t]), c.length ? e.insertBefore(a, c[t]) : e.appendChild(a);
        }
      }

      function b(e, t) {
        var r = t.css,
            o = t.media,
            n = t.sourceMap;
        if (o && e.setAttribute("media", o), d.ssrId && e.setAttribute(f, t.id), n && (r += "\n/*# sourceURL=" + n.sources[0] + " */", r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), e.styleSheet) e.styleSheet.cssText = r;else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(r));
        }
      }
    },
    "4ae1": function ae1(e, t, r) {
      var o = r("23e7"),
          n = r("d066"),
          a = r("1c0b"),
          c = r("825a"),
          i = r("861d"),
          s = r("7c73"),
          u = r("0538"),
          l = r("d039"),
          d = n("Reflect", "construct"),
          f = l(function () {
        function e() {}

        return !(d(function () {}, [], e) instanceof e);
      }),
          h = !l(function () {
        d(function () {});
      }),
          p = f || h;
      o({
        target: "Reflect",
        stat: !0,
        forced: p,
        sham: p
      }, {
        construct: function construct(e, t) {
          a(e), c(t);
          var r = arguments.length < 3 ? e : a(arguments[2]);
          if (h && !f) return d(e, t, r);

          if (e == r) {
            switch (t.length) {
              case 0:
                return new e();

              case 1:
                return new e(t[0]);

              case 2:
                return new e(t[0], t[1]);

              case 3:
                return new e(t[0], t[1], t[2]);

              case 4:
                return new e(t[0], t[1], t[2], t[3]);
            }

            var o = [null];
            return o.push.apply(o, t), new (u.apply(e, o))();
          }

          var n = r.prototype,
              l = s(i(n) ? n : Object.prototype),
              p = Function.apply.call(e, l, t);
          return i(p) ? p : l;
        }
      });
    },
    "4d64": function d64(e, t, r) {
      var o = r("fc6a"),
          n = r("50c4"),
          a = r("23cb"),
          c = function c(e) {
        return function (t, r, c) {
          var i,
              s = o(t),
              u = n(s.length),
              l = a(c, u);

          if (e && r != r) {
            while (u > l) {
              if (i = s[l++], i != i) return !0;
            }
          } else for (; u > l; l++) {
            if ((e || l in s) && s[l] === r) return e || l || 0;
          }

          return !e && -1;
        };
      };

      e.exports = {
        includes: c(!0),
        indexOf: c(!1)
      };
    },
    "4de4": function de4(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("b727").filter,
          a = r("1dde"),
          c = r("ae40"),
          i = a("filter"),
          s = c("filter");
      o({
        target: "Array",
        proto: !0,
        forced: !i || !s
      }, {
        filter: function filter(e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    "4df4": function df4(e, t, r) {
      "use strict";

      var o = r("0366"),
          n = r("7b0b"),
          a = r("9bdd"),
          c = r("e95a"),
          i = r("50c4"),
          s = r("8418"),
          u = r("35a1");

      e.exports = function (e) {
        var t,
            r,
            l,
            d,
            f,
            h,
            p = n(e),
            v = "function" == typeof this ? this : Array,
            m = arguments.length,
            k = m > 1 ? arguments[1] : void 0,
            B = void 0 !== k,
            w = u(p),
            b = 0;
        if (B && (k = o(k, m > 2 ? arguments[2] : void 0, 2)), void 0 == w || v == Array && c(w)) for (t = i(p.length), r = new v(t); t > b; b++) {
          h = B ? k(p[b], b) : p[b], s(r, b, h);
        } else for (d = w.call(p), f = d.next, r = new v(); !(l = f.call(d)).done; b++) {
          h = B ? a(d, k, [l.value, b], !0) : l.value, s(r, b, h);
        }
        return r.length = b, r;
      };
    },
    "4ec9": function ec9(e, t, r) {
      "use strict";

      var o = r("6d61"),
          n = r("6566");
      e.exports = o("Map", function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      }, n);
    },
    "50c4": function c4(e, t, r) {
      var o = r("a691"),
          n = Math.min;

      e.exports = function (e) {
        return e > 0 ? n(o(e), 9007199254740991) : 0;
      };
    },
    5135: function _(e, t) {
      var r = {}.hasOwnProperty;

      e.exports = function (e, t) {
        return r.call(e, t);
      };
    },
    "53ca": function ca(e, t, r) {
      "use strict";

      r.d(t, "a", function () {
        return o;
      });
      r("a4d3"), r("e01a"), r("d28b"), r("e260"), r("d3b7"), r("3ca3"), r("ddb0");

      function o(e) {
        return o = "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, o(e);
      }
    },
    5692: function _(e, t, r) {
      var o = r("c430"),
          n = r("c6cd");
      (e.exports = function (e, t) {
        return n[e] || (n[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: o ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      });
    },
    "56ef": function ef(e, t, r) {
      var o = r("d066"),
          n = r("241c"),
          a = r("7418"),
          c = r("825a");

      e.exports = o("Reflect", "ownKeys") || function (e) {
        var t = n.f(c(e)),
            r = a.f;
        return r ? t.concat(r(e)) : t;
      };
    },
    "5a34": function a34(e, t, r) {
      var o = r("44e7");

      e.exports = function (e) {
        if (o(e)) throw TypeError("The method doesn't accept regular expressions");
        return e;
      };
    },
    "5c0b": function c0b(e, t, r) {
      "use strict";

      var o = function o() {
        var e = this,
            t = e.$createElement,
            r = e._self._c || t;
        return r("input", {
          attrs: {
            type: "file",
            name: "image",
            accept: "image/*",
            capture: "environment",
            multiple: ""
          },
          on: {
            change: e.onChangeInput
          }
        });
      },
          n = [],
          a = (r("4160"), r("d81d"), r("159b"), r("2909")),
          c = r("a180"),
          i = r("b3af"),
          s = {
        name: "qrcode-capture",
        mixins: [i["a"]],
        methods: {
          onChangeInput: function onChangeInput(e) {
            var t = Object(a["a"])(e.target.files),
                r = t.map(c["b"]);
            r.forEach(this.onDetect);
          }
        }
      },
          u = s,
          l = r("2877"),
          d = Object(l["a"])(u, o, n, !1, null, null, null);

      t["a"] = d.exports;
    },
    "5c6c": function c6c(e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        };
      };
    },
    "5fb2": function fb2(e, t, r) {
      "use strict";

      var o = 2147483647,
          n = 36,
          a = 1,
          c = 26,
          i = 38,
          s = 700,
          u = 72,
          l = 128,
          d = "-",
          f = /[^\0-\u007E]/,
          h = /[.\u3002\uFF0E\uFF61]/g,
          p = "Overflow: input needs wider integers to process",
          v = n - a,
          m = Math.floor,
          k = String.fromCharCode,
          B = function B(e) {
        var t = [],
            r = 0,
            o = e.length;

        while (r < o) {
          var n = e.charCodeAt(r++);

          if (n >= 55296 && n <= 56319 && r < o) {
            var a = e.charCodeAt(r++);
            56320 == (64512 & a) ? t.push(((1023 & n) << 10) + (1023 & a) + 65536) : (t.push(n), r--);
          } else t.push(n);
        }

        return t;
      },
          w = function w(e) {
        return e + 22 + 75 * (e < 26);
      },
          b = function b(e, t, r) {
        var o = 0;

        for (e = r ? m(e / s) : e >> 1, e += m(e / t); e > v * c >> 1; o += n) {
          e = m(e / v);
        }

        return m(o + (v + 1) * e / (e + i));
      },
          y = function y(e) {
        var t = [];
        e = B(e);
        var r,
            i,
            s = e.length,
            f = l,
            h = 0,
            v = u;

        for (r = 0; r < e.length; r++) {
          i = e[r], i < 128 && t.push(k(i));
        }

        var y = t.length,
            g = y;
        y && t.push(d);

        while (g < s) {
          var C = o;

          for (r = 0; r < e.length; r++) {
            i = e[r], i >= f && i < C && (C = i);
          }

          var P = g + 1;
          if (C - f > m((o - h) / P)) throw RangeError(p);

          for (h += (C - f) * P, f = C, r = 0; r < e.length; r++) {
            if (i = e[r], i < f && ++h > o) throw RangeError(p);

            if (i == f) {
              for (var x = h, S = n;; S += n) {
                var O = S <= v ? a : S >= v + c ? c : S - v;
                if (x < O) break;
                var j = x - O,
                    E = n - O;
                t.push(k(w(O + j % E))), x = m(j / E);
              }

              t.push(k(w(x))), v = b(h, P, g == y), h = 0, ++g;
            }
          }

          ++h, ++f;
        }

        return t.join("");
      };

      e.exports = function (e) {
        var t,
            r,
            o = [],
            n = e.toLowerCase().replace(h, ".").split(".");

        for (t = 0; t < n.length; t++) {
          r = n[t], o.push(f.test(r) ? "xn--" + y(r) : r);
        }

        return o.join(".");
      };
    },
    "60da": function da(e, t, r) {
      "use strict";

      var o = r("83ab"),
          n = r("d039"),
          a = r("df75"),
          c = r("7418"),
          i = r("d1e7"),
          s = r("7b0b"),
          u = r("44ad"),
          l = Object.assign,
          d = Object.defineProperty;
      e.exports = !l || n(function () {
        if (o && 1 !== l({
          b: 1
        }, l(d({}, "a", {
          enumerable: !0,
          get: function get() {
            d(this, "b", {
              value: 3,
              enumerable: !1
            });
          }
        }), {
          b: 2
        })).b) return !0;
        var e = {},
            t = {},
            r = Symbol(),
            n = "abcdefghijklmnopqrst";
        return e[r] = 7, n.split("").forEach(function (e) {
          t[e] = e;
        }), 7 != l({}, e)[r] || a(l({}, t)).join("") != n;
      }) ? function (e, t) {
        var r = s(e),
            n = arguments.length,
            l = 1,
            d = c.f,
            f = i.f;

        while (n > l) {
          var h,
              p = u(arguments[l++]),
              v = d ? a(p).concat(d(p)) : a(p),
              m = v.length,
              k = 0;

          while (m > k) {
            h = v[k++], o && !f.call(p, h) || (r[h] = p[h]);
          }
        }

        return r;
      } : l;
    },
    6547: function _(e, t, r) {
      var o = r("a691"),
          n = r("1d80"),
          a = function a(e) {
        return function (t, r) {
          var a,
              c,
              i = String(n(t)),
              s = o(r),
              u = i.length;
          return s < 0 || s >= u ? e ? "" : void 0 : (a = i.charCodeAt(s), a < 55296 || a > 56319 || s + 1 === u || (c = i.charCodeAt(s + 1)) < 56320 || c > 57343 ? e ? i.charAt(s) : a : e ? i.slice(s, s + 2) : c - 56320 + (a - 55296 << 10) + 65536);
        };
      };

      e.exports = {
        codeAt: a(!1),
        charAt: a(!0)
      };
    },
    6566: function _(e, t, r) {
      "use strict";

      var o = r("9bf2").f,
          n = r("7c73"),
          a = r("e2cc"),
          c = r("0366"),
          i = r("19aa"),
          s = r("2266"),
          u = r("7dd0"),
          l = r("2626"),
          d = r("83ab"),
          f = r("f183").fastKey,
          h = r("69f3"),
          p = h.set,
          v = h.getterFor;
      e.exports = {
        getConstructor: function getConstructor(e, t, r, u) {
          var l = e(function (e, o) {
            i(e, l, t), p(e, {
              type: t,
              index: n(null),
              first: void 0,
              last: void 0,
              size: 0
            }), d || (e.size = 0), void 0 != o && s(o, e[u], e, r);
          }),
              h = v(t),
              m = function m(e, t, r) {
            var o,
                n,
                a = h(e),
                c = k(e, t);
            return c ? c.value = r : (a.last = c = {
              index: n = f(t, !0),
              key: t,
              value: r,
              previous: o = a.last,
              next: void 0,
              removed: !1
            }, a.first || (a.first = c), o && (o.next = c), d ? a.size++ : e.size++, "F" !== n && (a.index[n] = c)), e;
          },
              k = function k(e, t) {
            var r,
                o = h(e),
                n = f(t);
            if ("F" !== n) return o.index[n];

            for (r = o.first; r; r = r.next) {
              if (r.key == t) return r;
            }
          };

          return a(l.prototype, {
            clear: function clear() {
              var e = this,
                  t = h(e),
                  r = t.index,
                  o = t.first;

              while (o) {
                o.removed = !0, o.previous && (o.previous = o.previous.next = void 0), delete r[o.index], o = o.next;
              }

              t.first = t.last = void 0, d ? t.size = 0 : e.size = 0;
            },
            "delete": function _delete(e) {
              var t = this,
                  r = h(t),
                  o = k(t, e);

              if (o) {
                var n = o.next,
                    a = o.previous;
                delete r.index[o.index], o.removed = !0, a && (a.next = n), n && (n.previous = a), r.first == o && (r.first = n), r.last == o && (r.last = a), d ? r.size-- : t.size--;
              }

              return !!o;
            },
            forEach: function forEach(e) {
              var t,
                  r = h(this),
                  o = c(e, arguments.length > 1 ? arguments[1] : void 0, 3);

              while (t = t ? t.next : r.first) {
                o(t.value, t.key, this);

                while (t && t.removed) {
                  t = t.previous;
                }
              }
            },
            has: function has(e) {
              return !!k(this, e);
            }
          }), a(l.prototype, r ? {
            get: function get(e) {
              var t = k(this, e);
              return t && t.value;
            },
            set: function set(e, t) {
              return m(this, 0 === e ? 0 : e, t);
            }
          } : {
            add: function add(e) {
              return m(this, e = 0 === e ? 0 : e, e);
            }
          }), d && o(l.prototype, "size", {
            get: function get() {
              return h(this).size;
            }
          }), l;
        },
        setStrong: function setStrong(e, t, r) {
          var o = t + " Iterator",
              n = v(t),
              a = v(o);
          u(e, t, function (e, t) {
            p(this, {
              type: o,
              target: e,
              state: n(e),
              kind: t,
              last: void 0
            });
          }, function () {
            var e = a(this),
                t = e.kind,
                r = e.last;

            while (r && r.removed) {
              r = r.previous;
            }

            return e.target && (e.last = r = r ? r.next : e.state.first) ? "keys" == t ? {
              value: r.key,
              done: !1
            } : "values" == t ? {
              value: r.value,
              done: !1
            } : {
              value: [r.key, r.value],
              done: !1
            } : (e.target = void 0, {
              value: void 0,
              done: !0
            });
          }, r ? "entries" : "values", !r, !0), l(t);
        }
      };
    },
    "65f0": function f0(e, t, r) {
      var o = r("861d"),
          n = r("e8b5"),
          a = r("b622"),
          c = a("species");

      e.exports = function (e, t) {
        var r;
        return n(e) && (r = e.constructor, "function" != typeof r || r !== Array && !n(r.prototype) ? o(r) && (r = r[c], null === r && (r = void 0)) : r = void 0), new (void 0 === r ? Array : r)(0 === t ? 0 : t);
      };
    },
    "69f3": function f3(e, t, r) {
      var o,
          n,
          a,
          c = r("7f9a"),
          i = r("da84"),
          s = r("861d"),
          u = r("9112"),
          l = r("5135"),
          d = r("f772"),
          f = r("d012"),
          h = i.WeakMap,
          p = function p(e) {
        return a(e) ? n(e) : o(e, {});
      },
          v = function v(e) {
        return function (t) {
          var r;
          if (!s(t) || (r = n(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
          return r;
        };
      };

      if (c) {
        var m = new h(),
            k = m.get,
            B = m.has,
            w = m.set;
        o = function o(e, t) {
          return w.call(m, e, t), t;
        }, n = function n(e) {
          return k.call(m, e) || {};
        }, a = function a(e) {
          return B.call(m, e);
        };
      } else {
        var b = d("state");
        f[b] = !0, o = function o(e, t) {
          return u(e, b, t), t;
        }, n = function n(e) {
          return l(e, b) ? e[b] : {};
        }, a = function a(e) {
          return l(e, b);
        };
      }

      e.exports = {
        set: o,
        get: n,
        has: a,
        enforce: p,
        getterFor: v
      };
    },
    "6b75": function b75(e, t, r) {
      "use strict";

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var r = 0, o = new Array(t); r < t; r++) {
          o[r] = e[r];
        }

        return o;
      }

      r.d(t, "a", function () {
        return o;
      });
    },
    "6d61": function d61(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("da84"),
          a = r("94ca"),
          c = r("6eeb"),
          i = r("f183"),
          s = r("2266"),
          u = r("19aa"),
          l = r("861d"),
          d = r("d039"),
          f = r("1c7e"),
          h = r("d44e"),
          p = r("7156");

      e.exports = function (e, t, r) {
        var v = -1 !== e.indexOf("Map"),
            m = -1 !== e.indexOf("Weak"),
            k = v ? "set" : "add",
            B = n[e],
            w = B && B.prototype,
            b = B,
            y = {},
            g = function g(e) {
          var t = w[e];
          c(w, e, "add" == e ? function (e) {
            return t.call(this, 0 === e ? 0 : e), this;
          } : "delete" == e ? function (e) {
            return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
          } : "get" == e ? function (e) {
            return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
          } : "has" == e ? function (e) {
            return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
          } : function (e, r) {
            return t.call(this, 0 === e ? 0 : e, r), this;
          });
        };

        if (a(e, "function" != typeof B || !(m || w.forEach && !d(function () {
          new B().entries().next();
        })))) b = r.getConstructor(t, e, v, k), i.REQUIRED = !0;else if (a(e, !0)) {
          var C = new b(),
              P = C[k](m ? {} : -0, 1) != C,
              x = d(function () {
            C.has(1);
          }),
              S = f(function (e) {
            new B(e);
          }),
              O = !m && d(function () {
            var e = new B(),
                t = 5;

            while (t--) {
              e[k](t, t);
            }

            return !e.has(-0);
          });
          S || (b = t(function (t, r) {
            u(t, b, e);
            var o = p(new B(), t, b);
            return void 0 != r && s(r, o[k], o, v), o;
          }), b.prototype = w, w.constructor = b), (x || O) && (g("delete"), g("has"), v && g("get")), (O || P) && g(k), m && w.clear && delete w.clear;
        }
        return y[e] = b, o({
          global: !0,
          forced: b != B
        }, y), h(b, e), m || r.setStrong(b, e, v), b;
      };
    },
    "6eeb": function eeb(e, t, r) {
      var o = r("da84"),
          n = r("9112"),
          a = r("5135"),
          c = r("ce4e"),
          i = r("8925"),
          s = r("69f3"),
          u = s.get,
          l = s.enforce,
          d = String(String).split("String");
      (e.exports = function (e, t, r, i) {
        var s = !!i && !!i.unsafe,
            u = !!i && !!i.enumerable,
            f = !!i && !!i.noTargetGet;
        "function" == typeof r && ("string" != typeof t || a(r, "name") || n(r, "name", t), l(r).source = d.join("string" == typeof t ? t : "")), e !== o ? (s ? !f && e[t] && (u = !0) : delete e[t], u ? e[t] = r : n(e, t, r)) : u ? e[t] = r : c(t, r);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && u(this).source || i(this);
      });
    },
    7156: function _(e, t, r) {
      var o = r("861d"),
          n = r("d2bb");

      e.exports = function (e, t, r) {
        var a, c;
        return n && "function" == typeof (a = t.constructor) && a !== r && o(c = a.prototype) && c !== r.prototype && n(e, c), e;
      };
    },
    7260: function _(e, t, r) {
      var o = r("24fb");
      t = o(!1), t.push([e.i, ".qrcode-stream-wrapper[data-v-35411cc1]{width:100%;height:100%;position:relative;z-index:0}.qrcode-stream-overlay[data-v-35411cc1]{width:100%;height:100%;position:absolute;top:0;left:0}.qrcode-stream-camera[data-v-35411cc1]{width:100%;height:100%;display:block;-o-object-fit:cover;object-fit:cover}.qrcode-stream-camera--hidden[data-v-35411cc1]{visibility:hidden;position:absolute}", ""]), e.exports = t;
    },
    7418: function _(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    "746f": function f(e, t, r) {
      var o = r("428f"),
          n = r("5135"),
          a = r("e538"),
          c = r("9bf2").f;

      e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = {});
        n(t, e) || c(t, e, {
          value: a.f(e)
        });
      };
    },
    7839: function _(e, t) {
      e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    },
    "7b0b": function b0b(e, t, r) {
      var o = r("1d80");

      e.exports = function (e) {
        return Object(o(e));
      };
    },
    "7c73": function c73(e, t, r) {
      var o,
          n = r("825a"),
          a = r("37e8"),
          c = r("7839"),
          i = r("d012"),
          s = r("1be4"),
          u = r("cc12"),
          l = r("f772"),
          d = ">",
          f = "<",
          h = "prototype",
          p = "script",
          v = l("IE_PROTO"),
          m = function m() {},
          k = function k(e) {
        return f + p + d + e + f + "/" + p + d;
      },
          B = function B(e) {
        e.write(k("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      },
          w = function w() {
        var e,
            t = u("iframe"),
            r = "java" + p + ":";
        return t.style.display = "none", s.appendChild(t), t.src = String(r), e = t.contentWindow.document, e.open(), e.write(k("document.F=Object")), e.close(), e.F;
      },
          _b = function b() {
        try {
          o = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}

        _b = o ? B(o) : w();
        var e = c.length;

        while (e--) {
          delete _b[h][c[e]];
        }

        return _b();
      };

      i[v] = !0, e.exports = Object.create || function (e, t) {
        var r;
        return null !== e ? (m[h] = n(e), r = new m(), m[h] = null, r[v] = e) : r = _b(), void 0 === t ? r : a(r, t);
      };
    },
    "7db0": function db0(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("b727").find,
          a = r("44d2"),
          c = r("ae40"),
          i = "find",
          s = !0,
          u = c(i);
      i in [] && Array(1)[i](function () {
        s = !1;
      }), o({
        target: "Array",
        proto: !0,
        forced: s || !u
      }, {
        find: function find(e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }), a(i);
    },
    "7dd0": function dd0(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("9ed3"),
          a = r("e163"),
          c = r("d2bb"),
          i = r("d44e"),
          s = r("9112"),
          u = r("6eeb"),
          l = r("b622"),
          d = r("c430"),
          f = r("3f8c"),
          h = r("ae93"),
          p = h.IteratorPrototype,
          v = h.BUGGY_SAFARI_ITERATORS,
          m = l("iterator"),
          k = "keys",
          B = "values",
          w = "entries",
          b = function b() {
        return this;
      };

      e.exports = function (e, t, r, l, h, y, g) {
        n(r, t, l);

        var C,
            P,
            x,
            S = function S(e) {
          if (e === h && L) return L;
          if (!v && e in E) return E[e];

          switch (e) {
            case k:
              return function () {
                return new r(this, e);
              };

            case B:
              return function () {
                return new r(this, e);
              };

            case w:
              return function () {
                return new r(this, e);
              };
          }

          return function () {
            return new r(this);
          };
        },
            O = t + " Iterator",
            j = !1,
            E = e.prototype,
            M = E[m] || E["@@iterator"] || h && E[h],
            L = !v && M || S(h),
            R = "Array" == t && E.entries || M;

        if (R && (C = a(R.call(new e())), p !== Object.prototype && C.next && (d || a(C) === p || (c ? c(C, p) : "function" != typeof C[m] && s(C, m, b)), i(C, O, !0, !0), d && (f[O] = b))), h == B && M && M.name !== B && (j = !0, L = function L() {
          return M.call(this);
        }), d && !g || E[m] === L || s(E, m, L), f[t] = L, h) if (P = {
          values: S(B),
          keys: y ? L : S(k),
          entries: S(w)
        }, g) for (x in P) {
          (v || j || !(x in E)) && u(E, x, P[x]);
        } else o({
          target: t,
          proto: !0,
          forced: v || j
        }, P);
        return P;
      };
    },
    "7f9a": function f9a(e, t, r) {
      var o = r("da84"),
          n = r("8925"),
          a = o.WeakMap;
      e.exports = "function" === typeof a && /native code/.test(n(a));
    },
    "825a": function a(e, t, r) {
      var o = r("861d");

      e.exports = function (e) {
        if (!o(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    "83ab": function ab(e, t, r) {
      var o = r("d039");
      e.exports = !o(function () {
        return 7 != Object.defineProperty({}, 1, {
          get: function get() {
            return 7;
          }
        })[1];
      });
    },
    8418: function _(e, t, r) {
      "use strict";

      var o = r("c04e"),
          n = r("9bf2"),
          a = r("5c6c");

      e.exports = function (e, t, r) {
        var c = o(t);
        c in e ? n.f(e, c, a(0, r)) : e[c] = r;
      };
    },
    "861d": function d(e, t) {
      e.exports = function (e) {
        return "object" === _typeof(e) ? null !== e : "function" === typeof e;
      };
    },
    8875: function _(e, t, r) {
      var o, n, a;

      (function (r, c) {
        n = [], o = c, a = "function" === typeof o ? o.apply(t, n) : o, void 0 === a || (e.exports = a);
      })("undefined" !== typeof self && self, function () {
        function e() {
          var t = Object.getOwnPropertyDescriptor(document, "currentScript");
          if (!t && "currentScript" in document && document.currentScript) return document.currentScript;
          if (t && t.get !== e && document.currentScript) return document.currentScript;

          try {
            throw new Error();
          } catch (h) {
            var r,
                o,
                n,
                a = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                c = /@([^@]*):(\d+):(\d+)\s*$/gi,
                i = a.exec(h.stack) || c.exec(h.stack),
                s = i && i[1] || !1,
                u = i && i[2] || !1,
                l = document.location.href.replace(document.location.hash, ""),
                d = document.getElementsByTagName("script");
            s === l && (r = document.documentElement.outerHTML, o = new RegExp("(?:[^\\n]+?\\n){0," + (u - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), n = r.replace(o, "$1").trim());

            for (var f = 0; f < d.length; f++) {
              if ("interactive" === d[f].readyState) return d[f];
              if (d[f].src === s) return d[f];
              if (s === l && d[f].innerHTML && d[f].innerHTML.trim() === n) return d[f];
            }

            return null;
          }
        }

        return e;
      });
    },
    8925: function _(e, t, r) {
      var o = r("c6cd"),
          n = Function.toString;
      "function" != typeof o.inspectSource && (o.inspectSource = function (e) {
        return n.call(e);
      }), e.exports = o.inspectSource;
    },
    "8a79": function a79(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("06cf").f,
          a = r("50c4"),
          c = r("5a34"),
          i = r("1d80"),
          s = r("ab13"),
          u = r("c430"),
          l = "".endsWith,
          d = Math.min,
          f = s("endsWith"),
          h = !u && !f && !!function () {
        var e = n(String.prototype, "endsWith");
        return e && !e.writable;
      }();
      o({
        target: "String",
        proto: !0,
        forced: !h && !f
      }, {
        endsWith: function endsWith(e) {
          var t = String(i(this));
          c(e);
          var r = arguments.length > 1 ? arguments[1] : void 0,
              o = a(t.length),
              n = void 0 === r ? o : d(a(r), o),
              s = String(e);
          return l ? l.call(t, s, n) : t.slice(n - s.length, n) === s;
        }
      });
    },
    "8aa5": function aa5(e, t, r) {
      "use strict";

      var o = r("6547").charAt;

      e.exports = function (e, t, r) {
        return t + (r ? o(e, t).length : 1);
      };
    },
    "90e3": function e3(e, t) {
      var r = 0,
          o = Math.random();

      e.exports = function (e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++r + o).toString(36);
      };
    },
    9112: function _(e, t, r) {
      var o = r("83ab"),
          n = r("9bf2"),
          a = r("5c6c");
      e.exports = o ? function (e, t, r) {
        return n.f(e, t, a(1, r));
      } : function (e, t, r) {
        return e[t] = r, e;
      };
    },
    9263: function _(e, t, r) {
      "use strict";

      var o = r("ad6d"),
          n = r("9f7f"),
          a = RegExp.prototype.exec,
          c = String.prototype.replace,
          i = a,
          s = function () {
        var e = /a/,
            t = /b*/g;
        return a.call(e, "a"), a.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
      }(),
          u = n.UNSUPPORTED_Y || n.BROKEN_CARET,
          l = void 0 !== /()??/.exec("")[1],
          d = s || l || u;

      d && (i = function i(e) {
        var t,
            r,
            n,
            i,
            d = this,
            f = u && d.sticky,
            h = o.call(d),
            p = d.source,
            v = 0,
            m = e;
        return f && (h = h.replace("y", ""), -1 === h.indexOf("g") && (h += "g"), m = String(e).slice(d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== e[d.lastIndex - 1]) && (p = "(?: " + p + ")", m = " " + m, v++), r = new RegExp("^(?:" + p + ")", h)), l && (r = new RegExp("^" + p + "$(?!\\s)", h)), s && (t = d.lastIndex), n = a.call(f ? r : d, m), f ? n ? (n.input = n.input.slice(v), n[0] = n[0].slice(v), n.index = d.lastIndex, d.lastIndex += n[0].length) : d.lastIndex = 0 : s && n && (d.lastIndex = d.global ? n.index + n[0].length : t), l && n && n.length > 1 && c.call(n[0], r, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            void 0 === arguments[i] && (n[i] = void 0);
          }
        }), n;
      }), e.exports = i;
    },
    "94ca": function ca(e, t, r) {
      var o = r("d039"),
          n = /#|\.prototype\./,
          a = function a(e, t) {
        var r = i[c(e)];
        return r == u || r != s && ("function" == typeof t ? o(t) : !!t);
      },
          c = a.normalize = function (e) {
        return String(e).replace(n, ".").toLowerCase();
      },
          i = a.data = {},
          s = a.NATIVE = "N",
          u = a.POLYFILL = "P";

      e.exports = a;
    },
    "96cf": function cf(e, t, r) {
      var o = function (e) {
        "use strict";

        var t,
            r = Object.prototype,
            o = r.hasOwnProperty,
            n = "function" === typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            c = n.asyncIterator || "@@asyncIterator",
            i = n.toStringTag || "@@toStringTag";

        function s(e, t, r, o) {
          var n = t && t.prototype instanceof v ? t : v,
              a = Object.create(n.prototype),
              c = new j(o || []);
          return a._invoke = P(e, r, c), a;
        }

        function u(e, t, r) {
          try {
            return {
              type: "normal",
              arg: e.call(t, r)
            };
          } catch (o) {
            return {
              type: "throw",
              arg: o
            };
          }
        }

        e.wrap = s;
        var l = "suspendedStart",
            d = "suspendedYield",
            f = "executing",
            h = "completed",
            p = {};

        function v() {}

        function m() {}

        function k() {}

        var B = {};

        B[a] = function () {
          return this;
        };

        var w = Object.getPrototypeOf,
            b = w && w(w(E([])));
        b && b !== r && o.call(b, a) && (B = b);
        var y = k.prototype = v.prototype = Object.create(B);

        function g(e) {
          ["next", "throw", "return"].forEach(function (t) {
            e[t] = function (e) {
              return this._invoke(t, e);
            };
          });
        }

        function C(e, t) {
          function r(n, a, c, i) {
            var s = u(e[n], e, a);

            if ("throw" !== s.type) {
              var l = s.arg,
                  d = l.value;
              return d && "object" === _typeof(d) && o.call(d, "__await") ? t.resolve(d.__await).then(function (e) {
                r("next", e, c, i);
              }, function (e) {
                r("throw", e, c, i);
              }) : t.resolve(d).then(function (e) {
                l.value = e, c(l);
              }, function (e) {
                return r("throw", e, c, i);
              });
            }

            i(s.arg);
          }

          var n;

          function a(e, o) {
            function a() {
              return new t(function (t, n) {
                r(e, o, t, n);
              });
            }

            return n = n ? n.then(a, a) : a();
          }

          this._invoke = a;
        }

        function P(e, t, r) {
          var o = l;
          return function (n, a) {
            if (o === f) throw new Error("Generator is already running");

            if (o === h) {
              if ("throw" === n) throw a;
              return M();
            }

            r.method = n, r.arg = a;

            while (1) {
              var c = r.delegate;

              if (c) {
                var i = x(c, r);

                if (i) {
                  if (i === p) continue;
                  return i;
                }
              }

              if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                if (o === l) throw o = h, r.arg;
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = f;
              var s = u(e, t, r);

              if ("normal" === s.type) {
                if (o = r.done ? h : d, s.arg === p) continue;
                return {
                  value: s.arg,
                  done: r.done
                };
              }

              "throw" === s.type && (o = h, r.method = "throw", r.arg = s.arg);
            }
          };
        }

        function x(e, r) {
          var o = e.iterator[r.method];

          if (o === t) {
            if (r.delegate = null, "throw" === r.method) {
              if (e.iterator["return"] && (r.method = "return", r.arg = t, x(e, r), "throw" === r.method)) return p;
              r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return p;
          }

          var n = u(o, e.iterator, r.arg);
          if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, p;
          var a = n.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, p) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p);
        }

        function S(e) {
          var t = {
            tryLoc: e[0]
          };
          1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
        }

        function O(e) {
          var t = e.completion || {};
          t.type = "normal", delete t.arg, e.completion = t;
        }

        function j(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }], e.forEach(S, this), this.reset(!0);
        }

        function E(e) {
          if (e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" === typeof e.next) return e;

            if (!isNaN(e.length)) {
              var n = -1,
                  c = function r() {
                while (++n < e.length) {
                  if (o.call(e, n)) return r.value = e[n], r.done = !1, r;
                }

                return r.value = t, r.done = !0, r;
              };

              return c.next = c;
            }
          }

          return {
            next: M
          };
        }

        function M() {
          return {
            value: t,
            done: !0
          };
        }

        return m.prototype = y.constructor = k, k.constructor = m, k[i] = m.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
          var t = "function" === typeof e && e.constructor;
          return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
        }, e.mark = function (e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, i in e || (e[i] = "GeneratorFunction")), e.prototype = Object.create(y), e;
        }, e.awrap = function (e) {
          return {
            __await: e
          };
        }, g(C.prototype), C.prototype[c] = function () {
          return this;
        }, e.AsyncIterator = C, e.async = function (t, r, o, n, a) {
          void 0 === a && (a = Promise);
          var c = new C(s(t, r, o, n), a);
          return e.isGeneratorFunction(r) ? c : c.next().then(function (e) {
            return e.done ? e.value : c.next();
          });
        }, g(y), y[i] = "Generator", y[a] = function () {
          return this;
        }, y.toString = function () {
          return "[object Generator]";
        }, e.keys = function (e) {
          var t = [];

          for (var r in e) {
            t.push(r);
          }

          return t.reverse(), function r() {
            while (t.length) {
              var o = t.pop();
              if (o in e) return r.value = o, r.done = !1, r;
            }

            return r.done = !0, r;
          };
        }, e.values = E, j.prototype = {
          constructor: j,
          reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e) for (var r in this) {
              "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
            }
          },
          stop: function stop() {
            this.done = !0;
            var e = this.tryEntries[0],
                t = e.completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;

            function n(o, n) {
              return i.type = "throw", i.arg = e, r.next = o, n && (r.method = "next", r.arg = t), !!n;
            }

            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var c = this.tryEntries[a],
                  i = c.completion;
              if ("root" === c.tryLoc) return n("end");

              if (c.tryLoc <= this.prev) {
                var s = o.call(c, "catchLoc"),
                    u = o.call(c, "finallyLoc");

                if (s && u) {
                  if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                  if (this.prev < c.finallyLoc) return n(c.finallyLoc);
                } else if (s) {
                  if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < c.finallyLoc) return n(c.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];

              if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var a = n;
                break;
              }
            }

            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
            var c = a ? a.completion : {};
            return c.type = e, c.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(c);
          },
          complete: function complete(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p;
          },
          finish: function finish(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), p;
            }
          },
          "catch": function _catch(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];

              if (r.tryLoc === e) {
                var o = r.completion;

                if ("throw" === o.type) {
                  var n = o.arg;
                  O(r);
                }

                return n;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e, r, o) {
            return this.delegate = {
              iterator: E(e),
              resultName: r,
              nextLoc: o
            }, "next" === this.method && (this.arg = t), p;
          }
        }, e;
      }(e.exports);

      try {
        regeneratorRuntime = o;
      } catch (n) {
        Function("r", "regeneratorRuntime = r")(o);
      }
    },
    9861: function _(e, t, r) {
      "use strict";

      r("e260");

      var o = r("23e7"),
          n = r("d066"),
          a = r("0d3b"),
          c = r("6eeb"),
          i = r("e2cc"),
          s = r("d44e"),
          u = r("9ed3"),
          l = r("69f3"),
          d = r("19aa"),
          f = r("5135"),
          h = r("0366"),
          p = r("f5df"),
          v = r("825a"),
          m = r("861d"),
          k = r("7c73"),
          B = r("5c6c"),
          w = r("9a1f"),
          b = r("35a1"),
          y = r("b622"),
          g = n("fetch"),
          C = n("Headers"),
          P = y("iterator"),
          x = "URLSearchParams",
          S = x + "Iterator",
          O = l.set,
          j = l.getterFor(x),
          E = l.getterFor(S),
          M = /\+/g,
          L = Array(4),
          R = function R(e) {
        return L[e - 1] || (L[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
      },
          A = function A(e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      },
          I = function I(e) {
        var t = e.replace(M, " "),
            r = 4;

        try {
          return decodeURIComponent(t);
        } catch (o) {
          while (r) {
            t = t.replace(R(r--), A);
          }

          return t;
        }
      },
          T = /[!'()~]|%20/g,
          _ = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
      },
          N = function N(e) {
        return _[e];
      },
          U = function U(e) {
        return encodeURIComponent(e).replace(T, N);
      },
          D = function D(e, t) {
        if (t) {
          var r,
              o,
              n = t.split("&"),
              a = 0;

          while (a < n.length) {
            r = n[a++], r.length && (o = r.split("="), e.push({
              key: I(o.shift()),
              value: I(o.join("="))
            }));
          }
        }
      },
          F = function F(e) {
        this.entries.length = 0, D(this.entries, e);
      },
          z = function z(e, t) {
        if (e < t) throw TypeError("Not enough arguments");
      },
          q = u(function (e, t) {
        O(this, {
          type: S,
          iterator: w(j(e).entries),
          kind: t
        });
      }, "Iterator", function () {
        var e = E(this),
            t = e.kind,
            r = e.iterator.next(),
            o = r.value;
        return r.done || (r.value = "keys" === t ? o.key : "values" === t ? o.value : [o.key, o.value]), r;
      }),
          X = function X() {
        d(this, X, x);
        var e,
            t,
            r,
            o,
            n,
            a,
            c,
            i,
            s,
            u = arguments.length > 0 ? arguments[0] : void 0,
            l = this,
            h = [];
        if (O(l, {
          type: x,
          entries: h,
          updateURL: function updateURL() {},
          updateSearchParams: F
        }), void 0 !== u) if (m(u)) {
          if (e = b(u), "function" === typeof e) {
            t = e.call(u), r = t.next;

            while (!(o = r.call(t)).done) {
              if (n = w(v(o.value)), a = n.next, (c = a.call(n)).done || (i = a.call(n)).done || !a.call(n).done) throw TypeError("Expected sequence with length 2");
              h.push({
                key: c.value + "",
                value: i.value + ""
              });
            }
          } else for (s in u) {
            f(u, s) && h.push({
              key: s,
              value: u[s] + ""
            });
          }
        } else D(h, "string" === typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "");
      },
          G = X.prototype;

      i(G, {
        append: function append(e, t) {
          z(arguments.length, 2);
          var r = j(this);
          r.entries.push({
            key: e + "",
            value: t + ""
          }), r.updateURL();
        },
        "delete": function _delete(e) {
          z(arguments.length, 1);
          var t = j(this),
              r = t.entries,
              o = e + "",
              n = 0;

          while (n < r.length) {
            r[n].key === o ? r.splice(n, 1) : n++;
          }

          t.updateURL();
        },
        get: function get(e) {
          z(arguments.length, 1);

          for (var t = j(this).entries, r = e + "", o = 0; o < t.length; o++) {
            if (t[o].key === r) return t[o].value;
          }

          return null;
        },
        getAll: function getAll(e) {
          z(arguments.length, 1);

          for (var t = j(this).entries, r = e + "", o = [], n = 0; n < t.length; n++) {
            t[n].key === r && o.push(t[n].value);
          }

          return o;
        },
        has: function has(e) {
          z(arguments.length, 1);
          var t = j(this).entries,
              r = e + "",
              o = 0;

          while (o < t.length) {
            if (t[o++].key === r) return !0;
          }

          return !1;
        },
        set: function set(e, t) {
          z(arguments.length, 1);

          for (var r, o = j(this), n = o.entries, a = !1, c = e + "", i = t + "", s = 0; s < n.length; s++) {
            r = n[s], r.key === c && (a ? n.splice(s--, 1) : (a = !0, r.value = i));
          }

          a || n.push({
            key: c,
            value: i
          }), o.updateURL();
        },
        sort: function sort() {
          var e,
              t,
              r,
              o = j(this),
              n = o.entries,
              a = n.slice();

          for (n.length = 0, r = 0; r < a.length; r++) {
            for (e = a[r], t = 0; t < r; t++) {
              if (n[t].key > e.key) {
                n.splice(t, 0, e);
                break;
              }
            }

            t === r && n.push(e);
          }

          o.updateURL();
        },
        forEach: function forEach(e) {
          var t,
              r = j(this).entries,
              o = h(e, arguments.length > 1 ? arguments[1] : void 0, 3),
              n = 0;

          while (n < r.length) {
            t = r[n++], o(t.value, t.key, this);
          }
        },
        keys: function keys() {
          return new q(this, "keys");
        },
        values: function values() {
          return new q(this, "values");
        },
        entries: function entries() {
          return new q(this, "entries");
        }
      }, {
        enumerable: !0
      }), c(G, P, G.entries), c(G, "toString", function () {
        var e,
            t = j(this).entries,
            r = [],
            o = 0;

        while (o < t.length) {
          e = t[o++], r.push(U(e.key) + "=" + U(e.value));
        }

        return r.join("&");
      }, {
        enumerable: !0
      }), s(X, x), o({
        global: !0,
        forced: !a
      }, {
        URLSearchParams: X
      }), a || "function" != typeof g || "function" != typeof C || o({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function fetch(e) {
          var t,
              r,
              o,
              n = [e];
          return arguments.length > 1 && (t = arguments[1], m(t) && (r = t.body, p(r) === x && (o = t.headers ? new C(t.headers) : new C(), o.has("content-type") || o.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = k(t, {
            body: B(0, String(r)),
            headers: B(0, o)
          }))), n.push(t)), g.apply(this, n);
        }
      }), e.exports = {
        URLSearchParams: X,
        getState: j
      };
    },
    "99af": function af(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("d039"),
          a = r("e8b5"),
          c = r("861d"),
          i = r("7b0b"),
          s = r("50c4"),
          u = r("8418"),
          l = r("65f0"),
          d = r("1dde"),
          f = r("b622"),
          h = r("2d00"),
          p = f("isConcatSpreadable"),
          v = 9007199254740991,
          m = "Maximum allowed index exceeded",
          k = h >= 51 || !n(function () {
        var e = [];
        return e[p] = !1, e.concat()[0] !== e;
      }),
          B = d("concat"),
          w = function w(e) {
        if (!c(e)) return !1;
        var t = e[p];
        return void 0 !== t ? !!t : a(e);
      },
          b = !k || !B;

      o({
        target: "Array",
        proto: !0,
        forced: b
      }, {
        concat: function concat(e) {
          var t,
              r,
              o,
              n,
              a,
              c = i(this),
              d = l(c, 0),
              f = 0;

          for (t = -1, o = arguments.length; t < o; t++) {
            if (a = -1 === t ? c : arguments[t], w(a)) {
              if (n = s(a.length), f + n > v) throw TypeError(m);

              for (r = 0; r < n; r++, f++) {
                r in a && u(d, f, a[r]);
              }
            } else {
              if (f >= v) throw TypeError(m);
              u(d, f++, a);
            }
          }

          return d.length = f, d;
        }
      });
    },
    "9a1f": function a1f(e, t, r) {
      var o = r("825a"),
          n = r("35a1");

      e.exports = function (e) {
        var t = n(e);
        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
        return o(t.call(e));
      };
    },
    "9bdd": function bdd(e, t, r) {
      var o = r("825a");

      e.exports = function (e, t, r, n) {
        try {
          return n ? t(o(r)[0], r[1]) : t(r);
        } catch (c) {
          var a = e["return"];
          throw void 0 !== a && o(a.call(e)), c;
        }
      };
    },
    "9bf2": function bf2(e, t, r) {
      var o = r("83ab"),
          n = r("0cfb"),
          a = r("825a"),
          c = r("c04e"),
          i = Object.defineProperty;
      t.f = o ? i : function (e, t, r) {
        if (a(e), t = c(t, !0), a(r), n) try {
          return i(e, t, r);
        } catch (o) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
        return "value" in r && (e[t] = r.value), e;
      };
    },
    "9ed3": function ed3(e, t, r) {
      "use strict";

      var o = r("ae93").IteratorPrototype,
          n = r("7c73"),
          a = r("5c6c"),
          c = r("d44e"),
          i = r("3f8c"),
          s = function s() {
        return this;
      };

      e.exports = function (e, t, r) {
        var u = t + " Iterator";
        return e.prototype = n(o, {
          next: a(1, r)
        }), c(e, u, !1, !0), i[u] = s, e;
      };
    },
    "9f7f": function f7f(e, t, r) {
      "use strict";

      var o = r("d039");

      function n(e, t) {
        return RegExp(e, t);
      }

      t.UNSUPPORTED_Y = o(function () {
        var e = n("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd");
      }), t.BROKEN_CARET = o(function () {
        var e = n("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str");
      });
    },
    a180: function a180(e, t, r) {
      "use strict";

      r.d(t, "a", function () {
        return s;
      }), r.d(t, "b", function () {
        return l;
      }), r.d(t, "c", function () {
        return d;
      });
      r("caad"), r("2532"), r("2ca0"), r("96cf");

      var o = r("1da1"),
          n = r("3835"),
          a = r("1cc0"),
          c = r("c036"),
          i = function i(e) {
        if (e.length > 0) {
          var t = Object(n["a"])(e, 1),
              r = t[0],
              o = Object(n["a"])(r.cornerPoints, 4),
              a = o[0],
              c = o[1],
              i = o[2],
              s = o[3];
          return {
            content: r.rawValue,
            location: {
              topLeftCorner: a,
              topRightCorner: c,
              bottomRightCorner: i,
              bottomLeftCorner: s,
              topLeftFinderPattern: {},
              topRightFinderPattern: {},
              bottomLeftFinderPattern: {}
            },
            imageData: null
          };
        }

        return {
          content: null,
          location: null,
          imageData: null
        };
      },
          s = function s(e, t) {
        var r = new BarcodeDetector({
          formats: ["qr_code"]
        }),
            n = t.detectHandler,
            a = t.locateHandler,
            c = t.minDelay,
            s = function t(s) {
          return function () {
            var u = Object(o["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function o(u) {
              var l, d, f, h, p, v, m, k;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (o) {
                while (1) {
                  switch (o.prev = o.next) {
                    case 0:
                      if (!(e.readyState > 1)) {
                        o.next = 13;
                        break;
                      }

                      if (l = s.lastScanned, d = s.contentBefore, f = s.locationBefore, !(u - l >= c)) {
                        o.next = 12;
                        break;
                      }

                      return o.next = 5, r.detect(e);

                    case 5:
                      h = o.sent, p = i(h), v = p.content, m = p.location, k = p.imageData, null !== v && v !== d && n({
                        content: v,
                        location: m,
                        imageData: k
                      }), null === m && null === f || a(h), window.requestAnimationFrame(t({
                        lastScanned: u,
                        contentBefore: null !== v && void 0 !== v ? v : d,
                        locationBefore: m
                      })), o.next = 13;
                      break;

                    case 12:
                      window.requestAnimationFrame(t(s));

                    case 13:
                    case "end":
                      return o.stop();
                  }
                }
              }, o);
            }));
            return function (e) {
              return u.apply(this, arguments);
            };
          }();
        };

        s({
          contentBefore: null,
          locationBefore: null,
          lastScanned: performance.now()
        })();
      },
          u = function () {
        var e = Object(o["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e(t) {
          var r;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  if (!t.startsWith("http") || !1 !== t.includes(location.host)) {
                    e.next = 2;
                    break;
                  }

                  throw new a["a"]();

                case 2:
                  return r = document.createElement("img"), r.src = t, e.next = 6, Object(c["a"])(r, "load");

                case 6:
                  return e.abrupt("return", r);

                case 7:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          l = function () {
        var e = Object(o["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e(t) {
          var r, o;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  return r = new BarcodeDetector({
                    formats: ["qr_code"]
                  }), e.next = 3, r.detect(t);

                case 3:
                  return o = e.sent, e.abrupt("return", i(o));

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          d = function () {
        var e = Object(o["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e(t) {
          var r, o, n;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  return r = new BarcodeDetector({
                    formats: ["qr_code"]
                  }), e.next = 3, u(t);

                case 3:
                  return o = e.sent, e.next = 6, r.detect(o);

                case 6:
                  return n = e.sent, e.abrupt("return", i(n));

                case 8:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }();
    },
    a434: function a434(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("23cb"),
          a = r("a691"),
          c = r("50c4"),
          i = r("7b0b"),
          s = r("65f0"),
          u = r("8418"),
          l = r("1dde"),
          d = r("ae40"),
          f = l("splice"),
          h = d("splice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
      }),
          p = Math.max,
          v = Math.min,
          m = 9007199254740991,
          k = "Maximum allowed length exceeded";
      o({
        target: "Array",
        proto: !0,
        forced: !f || !h
      }, {
        splice: function splice(e, t) {
          var r,
              o,
              l,
              d,
              f,
              h,
              B = i(this),
              w = c(B.length),
              b = n(e, w),
              y = arguments.length;
          if (0 === y ? r = o = 0 : 1 === y ? (r = 0, o = w - b) : (r = y - 2, o = v(p(a(t), 0), w - b)), w + r - o > m) throw TypeError(k);

          for (l = s(B, o), d = 0; d < o; d++) {
            f = b + d, f in B && u(l, d, B[f]);
          }

          if (l.length = o, r < o) {
            for (d = b; d < w - o; d++) {
              f = d + o, h = d + r, f in B ? B[h] = B[f] : delete B[h];
            }

            for (d = w; d > w - o + r; d--) {
              delete B[d - 1];
            }
          } else if (r > o) for (d = w - o; d > b; d--) {
            f = d + o - 1, h = d + r - 1, f in B ? B[h] = B[f] : delete B[h];
          }

          for (d = 0; d < r; d++) {
            B[d + b] = arguments[d + 2];
          }

          return B.length = w - o + r, l;
        }
      });
    },
    a4d3: function a4d3(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("da84"),
          a = r("d066"),
          c = r("c430"),
          i = r("83ab"),
          s = r("4930"),
          u = r("fdbf"),
          l = r("d039"),
          d = r("5135"),
          f = r("e8b5"),
          h = r("861d"),
          p = r("825a"),
          v = r("7b0b"),
          m = r("fc6a"),
          k = r("c04e"),
          B = r("5c6c"),
          w = r("7c73"),
          b = r("df75"),
          y = r("241c"),
          g = r("057f"),
          C = r("7418"),
          P = r("06cf"),
          x = r("9bf2"),
          S = r("d1e7"),
          O = r("9112"),
          j = r("6eeb"),
          E = r("5692"),
          M = r("f772"),
          L = r("d012"),
          R = r("90e3"),
          A = r("b622"),
          I = r("e538"),
          T = r("746f"),
          _ = r("d44e"),
          N = r("69f3"),
          U = r("b727").forEach,
          D = M("hidden"),
          F = "Symbol",
          z = "prototype",
          q = A("toPrimitive"),
          X = N.set,
          G = N.getterFor(F),
          $ = Object[z],
          _W = n.Symbol,
          H = a("JSON", "stringify"),
          V = P.f,
          J = x.f,
          K = g.f,
          Z = S.f,
          Q = E("symbols"),
          Y = E("op-symbols"),
          ee = E("string-to-symbol-registry"),
          te = E("symbol-to-string-registry"),
          re = E("wks"),
          oe = n.QObject,
          ne = !oe || !oe[z] || !oe[z].findChild,
          ae = i && l(function () {
        return 7 != w(J({}, "a", {
          get: function get() {
            return J(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (e, t, r) {
        var o = V($, t);
        o && delete $[t], J(e, t, r), o && e !== $ && J($, t, o);
      } : J,
          ce = function ce(e, t) {
        var r = Q[e] = w(_W[z]);
        return X(r, {
          type: F,
          tag: e,
          description: t
        }), i || (r.description = t), r;
      },
          ie = u ? function (e) {
        return "symbol" == _typeof(e);
      } : function (e) {
        return Object(e) instanceof _W;
      },
          se = function se(e, t, r) {
        e === $ && se(Y, t, r), p(e);
        var o = k(t, !0);
        return p(r), d(Q, o) ? (r.enumerable ? (d(e, D) && e[D][o] && (e[D][o] = !1), r = w(r, {
          enumerable: B(0, !1)
        })) : (d(e, D) || J(e, D, B(1, {})), e[D][o] = !0), ae(e, o, r)) : J(e, o, r);
      },
          ue = function ue(e, t) {
        p(e);
        var r = m(t),
            o = b(r).concat(pe(r));
        return U(o, function (t) {
          i && !de.call(r, t) || se(e, t, r[t]);
        }), e;
      },
          le = function le(e, t) {
        return void 0 === t ? w(e) : ue(w(e), t);
      },
          de = function de(e) {
        var t = k(e, !0),
            r = Z.call(this, t);
        return !(this === $ && d(Q, t) && !d(Y, t)) && (!(r || !d(this, t) || !d(Q, t) || d(this, D) && this[D][t]) || r);
      },
          fe = function fe(e, t) {
        var r = m(e),
            o = k(t, !0);

        if (r !== $ || !d(Q, o) || d(Y, o)) {
          var n = V(r, o);
          return !n || !d(Q, o) || d(r, D) && r[D][o] || (n.enumerable = !0), n;
        }
      },
          he = function he(e) {
        var t = K(m(e)),
            r = [];
        return U(t, function (e) {
          d(Q, e) || d(L, e) || r.push(e);
        }), r;
      },
          pe = function pe(e) {
        var t = e === $,
            r = K(t ? Y : m(e)),
            o = [];
        return U(r, function (e) {
          !d(Q, e) || t && !d($, e) || o.push(Q[e]);
        }), o;
      };

      if (s || (_W = function W() {
        if (this instanceof _W) throw TypeError("Symbol is not a constructor");

        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = R(e),
            r = function r(e) {
          this === $ && r.call(Y, e), d(this, D) && d(this[D], t) && (this[D][t] = !1), ae(this, t, B(1, e));
        };

        return i && ne && ae($, t, {
          configurable: !0,
          set: r
        }), ce(t, e);
      }, j(_W[z], "toString", function () {
        return G(this).tag;
      }), j(_W, "withoutSetter", function (e) {
        return ce(R(e), e);
      }), S.f = de, x.f = se, P.f = fe, y.f = g.f = he, C.f = pe, I.f = function (e) {
        return ce(A(e), e);
      }, i && (J(_W[z], "description", {
        configurable: !0,
        get: function get() {
          return G(this).description;
        }
      }), c || j($, "propertyIsEnumerable", de, {
        unsafe: !0
      }))), o({
        global: !0,
        wrap: !0,
        forced: !s,
        sham: !s
      }, {
        Symbol: _W
      }), U(b(re), function (e) {
        T(e);
      }), o({
        target: F,
        stat: !0,
        forced: !s
      }, {
        "for": function _for(e) {
          var t = String(e);
          if (d(ee, t)) return ee[t];

          var r = _W(t);

          return ee[t] = r, te[r] = t, r;
        },
        keyFor: function keyFor(e) {
          if (!ie(e)) throw TypeError(e + " is not a symbol");
          if (d(te, e)) return te[e];
        },
        useSetter: function useSetter() {
          ne = !0;
        },
        useSimple: function useSimple() {
          ne = !1;
        }
      }), o({
        target: "Object",
        stat: !0,
        forced: !s,
        sham: !i
      }, {
        create: le,
        defineProperty: se,
        defineProperties: ue,
        getOwnPropertyDescriptor: fe
      }), o({
        target: "Object",
        stat: !0,
        forced: !s
      }, {
        getOwnPropertyNames: he,
        getOwnPropertySymbols: pe
      }), o({
        target: "Object",
        stat: !0,
        forced: l(function () {
          C.f(1);
        })
      }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(e) {
          return C.f(v(e));
        }
      }), H) {
        var ve = !s || l(function () {
          var e = _W();

          return "[null]" != H([e]) || "{}" != H({
            a: e
          }) || "{}" != H(Object(e));
        });
        o({
          target: "JSON",
          stat: !0,
          forced: ve
        }, {
          stringify: function stringify(e, t, r) {
            var o,
                n = [e],
                a = 1;

            while (arguments.length > a) {
              n.push(arguments[a++]);
            }

            if (o = t, (h(t) || void 0 !== e) && !ie(e)) return f(t) || (t = function t(e, _t2) {
              if ("function" == typeof o && (_t2 = o.call(this, e, _t2)), !ie(_t2)) return _t2;
            }), n[1] = t, H.apply(null, n);
          }
        });
      }

      _W[z][q] || O(_W[z], q, _W[z].valueOf), _(_W, F), L[D] = !0;
    },
    a630: function a630(e, t, r) {
      var o = r("23e7"),
          n = r("4df4"),
          a = r("1c7e"),
          c = !a(function (e) {
        Array.from(e);
      });
      o({
        target: "Array",
        stat: !0,
        forced: c
      }, {
        from: n
      });
    },
    a640: function a640(e, t, r) {
      "use strict";

      var o = r("d039");

      e.exports = function (e, t) {
        var r = [][e];
        return !!r && o(function () {
          r.call(null, t || function () {
            throw 1;
          }, 1);
        });
      };
    },
    a691: function a691(e, t) {
      var r = Math.ceil,
          o = Math.floor;

      e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : r)(e);
      };
    },
    ab13: function ab13(e, t, r) {
      var o = r("b622"),
          n = o("match");

      e.exports = function (e) {
        var t = /./;

        try {
          "/./"[e](t);
        } catch (r) {
          try {
            return t[n] = !1, "/./"[e](t);
          } catch (o) {}
        }

        return !1;
      };
    },
    ac1f: function ac1f(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("9263");
      o({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== n
      }, {
        exec: n
      });
    },
    ad6d: function ad6d(e, t, r) {
      "use strict";

      var o = r("825a");

      e.exports = function () {
        var e = o(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
      };
    },
    ae40: function ae40(e, t, r) {
      var o = r("83ab"),
          n = r("d039"),
          a = r("5135"),
          c = Object.defineProperty,
          i = {},
          s = function s(e) {
        throw e;
      };

      e.exports = function (e, t) {
        if (a(i, e)) return i[e];
        t || (t = {});
        var r = [][e],
            u = !!a(t, "ACCESSORS") && t.ACCESSORS,
            l = a(t, 0) ? t[0] : s,
            d = a(t, 1) ? t[1] : void 0;
        return i[e] = !!r && !n(function () {
          if (u && !o) return !0;
          var e = {
            length: -1
          };
          u ? c(e, 1, {
            enumerable: !0,
            get: s
          }) : e[1] = 1, r.call(e, l, d);
        });
      };
    },
    ae93: function ae93(e, t, r) {
      "use strict";

      var o,
          n,
          a,
          c = r("e163"),
          i = r("9112"),
          s = r("5135"),
          u = r("b622"),
          l = r("c430"),
          d = u("iterator"),
          f = !1,
          h = function h() {
        return this;
      };

      [].keys && (a = [].keys(), "next" in a ? (n = c(c(a)), n !== Object.prototype && (o = n)) : f = !0), void 0 == o && (o = {}), l || s(o, d) || i(o, d, h), e.exports = {
        IteratorPrototype: o,
        BUGGY_SAFARI_ITERATORS: f
      };
    },
    b041: function b041(e, t, r) {
      "use strict";

      var o = r("00ee"),
          n = r("f5df");
      e.exports = o ? {}.toString : function () {
        return "[object " + n(this) + "]";
      };
    },
    b0c0: function b0c0(e, t, r) {
      var o = r("83ab"),
          n = r("9bf2").f,
          a = Function.prototype,
          c = a.toString,
          i = /^\s*function ([^ (]*)/,
          s = "name";
      o && !(s in a) && n(a, s, {
        configurable: !0,
        get: function get() {
          try {
            return c.call(this).match(i)[1];
          } catch (e) {
            return "";
          }
        }
      });
    },
    b3af: function b3af(e, t, r) {
      "use strict";

      r("96cf");
      var o = r("1da1");

      function n(e, t, r) {
        var o = document.createElement("canvas"),
            n = o.getContext("2d");
        return o.width = t, o.height = r, n.drawImage(e, 0, 0, t, r), n.getImageData(0, 0, t, r);
      }

      var a = function a(e) {
        try {
          if (e instanceof HTMLImageElement) {
            try {
              e.decode();
            } catch (n) {
              throw new DOMException("HTMLImageElement is not decodable", "InvalidStateError");
            }

            return Promise.resolve(n(e, e.naturalWidth, e.naturalHeight));
          }

          if (e instanceof SVGImageElement) return Promise.resolve(n(e, 640, 480));

          if (e instanceof HTMLVideoElement) {
            if (0 === e.readyState || 1 === e.readyState) throw new DOMException("", "InvalidStateError");
            return Promise.resolve(n(e, e.videoWidth, e.videoHeight));
          }

          if (e instanceof HTMLCanvasElement) {
            var t = e.getContext("2d");
            return Promise.resolve(t.getImageData(0, 0, e.width, e.height));
          }

          if ("ImageBitmap" in window && e instanceof ImageBitmap) return Promise.resolve(n(e, e.width, e.height));

          if ("OffscreenCanvas" in window && e instanceof OffscreenCanvas) {
            var r = e.getContext("2d");
            return Promise.resolve(r.getImageData(0, 0, e.width, e.height));
          }

          return e instanceof Blob ? Promise.resolve(c(e)) : e instanceof ImageData ? Promise.resolve(e) : Promise.resolve();
        } catch (n) {
          return Promise.reject(n);
        }
      },
          c = function c(e) {
        try {
          var t = URL.createObjectURL(e),
              r = new Image();
          return r.src = t, Promise.resolve(new Promise(function (e, t) {
            r.onload = e, r.onerror = t;
          })).then(function () {
            return URL.revokeObjectURL(t), a(r);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      };

      function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }

      function s(e, t) {
        return (s = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }

      function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (n) {
          return !1;
        }
      }

      function l(e, t, r) {
        return (l = u() ? Reflect.construct : function (e, t, r) {
          var o = [null];
          o.push.apply(o, t);
          var n = new (Function.bind.apply(e, o))();
          return r && s(n, r.prototype), n;
        }).apply(null, arguments);
      }

      function d(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (d = function d(e) {
          if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }

          function r() {
            return l(e, arguments, i(this).constructor);
          }

          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), s(r, e);
        })(e);
      }

      var f,
          h,
          p = function (e) {
        var t, r;

        function o(t) {
          var r;
          return (r = e.call(this) || this).worker = void 0, r.timeout = void 0, r.stringUrl = void 0, r.stringUrl = t, r;
        }

        return r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, s(t, r), o.prototype.postMessage = function (e, t) {
          var r = this;
          void 0 === this.worker ? (this.worker = new Worker(this.stringUrl), this.worker.onmessage = function (e) {
            r.dispatchEvent(new MessageEvent("message", {
              data: e.data
            }));
          }) : self.clearTimeout(this.timeout), this.worker.postMessage(e, t), this.timeout = self.setTimeout(function () {
            r.worker.terminate(), r.worker = void 0;
          }, 2500);
        }, o;
      }(d(EventTarget)),
          v = URL.createObjectURL(new Blob(['\n!function(o){"function"==typeof define&&define.amd?define(o):o()}(function(){function o(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,r=o((function(o,e){var r;"undefined"!=typeof self&&self,r=function(){return function(o){var e={};function r(t){if(e[t])return e[t].exports;var c=e[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=o,r.c=e,r.d=function(o,e,t){r.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:t})},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="",r(r.s=3)}([function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height||!this.data[e*this.width+o])},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(2);e.addOrSubtractGF=function(o,e){return o^e};var c=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var c=1,s=0;s<this.size;s++)this.expTable[s]=c,(c*=2)>=this.size&&(c=(c^this.primitive)&this.size-1);for(s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new t.default(this,Uint8ClampedArray.from([0])),this.one=new t.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can\'t invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new t.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can\'t take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=c},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){var r;if(this.isZero())return e;if(e.isZero())return this;var c=this.coefficients,s=e.coefficients;c.length>s.length&&(c=(r=[s,c])[0],s=r[1]);for(var a=new Uint8ClampedArray(s.length),n=s.length-c.length,d=0;d<n;d++)a[d]=s[d];for(d=n;d<s.length;d++)a[d]=t.addOrSubtractGF(c[d-n],s[d]);return new o(this.field,a)},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,n=new Uint8ClampedArray(c+a-1),d=0;d<c;d++)for(var l=r[d],i=0;i<a;i++)n[d+i]=t.addOrSubtractGF(n[d+i],this.field.multiply(l,s[i]));return new o(this.field,n)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(4),c=r(5),s=r(11),a=r(12);function n(o){var e=a.locate(o);if(!e)return null;for(var r=0,t=e;r<t.length;r++){var n=t[r],d=s.extract(o,n),l=c.decode(d.matrix);if(l)return{binaryData:l.bytes,data:l.text,chunks:l.chunks,location:{topRightCorner:d.mappingFunction(n.dimension,0),topLeftCorner:d.mappingFunction(0,0),bottomRightCorner:d.mappingFunction(n.dimension,n.dimension),bottomLeftCorner:d.mappingFunction(0,n.dimension),topRightFinderPattern:n.topRight,topLeftFinderPattern:n.topLeft,bottomLeftFinderPattern:n.bottomLeft,bottomRightAlignmentPattern:n.alignmentPattern}}}return null}var d={inversionAttempts:"attemptBoth"};function l(o,e,r,c){void 0===c&&(c={});var s=d;Object.keys(s||{}).forEach(function(o){s[o]=c[o]||s[o]});var a="onlyInvert"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,l=t.binarize(o,e,r,"attemptBoth"===s.inversionAttempts||"invertFirst"===s.inversionAttempts),i=l.binarized,B=l.inverted,k=n(a?B:i);return k||"attemptBoth"!==s.inversionAttempts&&"invertFirst"!==s.inversionAttempts||(k=n(a?i:B)),k}l.default=l,e.default=l},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(0);function c(o,e,r){return o<e?e:o>r?r:o}var s=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=function(o,e,r,a){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var n=new s(e,r),d=0;d<e;d++)for(var l=0;l<r;l++)n.set(d,l,.2126*o[4*(l*e+d)+0]+.7152*o[4*(l*e+d)+1]+.0722*o[4*(l*e+d)+2]);for(var i=Math.ceil(e/8),B=Math.ceil(r/8),k=new s(i,B),u=0;u<B;u++)for(var f=0;f<i;f++){var m=0,C=Infinity,w=0;for(l=0;l<8;l++)for(d=0;d<8;d++){var P=n.get(8*f+d,8*u+l);m+=P,C=Math.min(C,P),w=Math.max(w,P)}var h=m/Math.pow(8,2);if(w-C<=24&&(h=C/2,u>0&&f>0)){var v=(k.get(f,u-1)+2*k.get(f-1,u)+k.get(f-1,u-1))/4;C<v&&(h=v)}k.set(f,u,h)}var y=t.BitMatrix.createEmpty(e,r),p=null;for(a&&(p=t.BitMatrix.createEmpty(e,r)),u=0;u<B;u++)for(f=0;f<i;f++){for(var b=c(f,2,i-3),g=c(u,2,B-3),x=(m=0,-2);x<=2;x++)for(var M=-2;M<=2;M++)m+=k.get(b+x,g+M);var L=m/25;for(x=0;x<8;x++)for(M=0;M<8;M++){var I=n.get(d=8*f+x,l=8*u+M);y.set(d,l,I<=L),a&&p.set(d,l,!(I<=L))}}return a?{binarized:y,inverted:p}:{binarized:y}}},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(0),c=r(6),s=r(9),a=r(10);function n(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function d(o,e){return e<<1|o}var l=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],i=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];function B(o){var e=function(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return a.VERSIONS[r-1];for(var t=0,c=5;c>=0;c--)for(var s=e-9;s>=e-11;s--)t=d(o.get(s,c),t);var l=0;for(s=5;s>=0;s--)for(c=e-9;c>=e-11;c--)l=d(o.get(s,c),l);for(var i,B=Infinity,k=0,u=a.VERSIONS;k<u.length;k++){var f=u[k];if(f.infoBits===t||f.infoBits===l)return f;var m=n(t,f.infoBits);m<B&&(i=f,B=m),(m=n(l,f.infoBits))<B&&(i=f,B=m)}return B<=3?i:void 0}(o);if(!e)return null;var r=function(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=d(o.get(r,8),e));for(var t=7;t>=0;t--)6!==t&&(e=d(o.get(8,t),e));var c=o.height,s=0;for(t=c-1;t>=c-7;t--)s=d(o.get(8,t),s);for(r=c-8;r<c;r++)s=d(o.get(r,8),s);for(var a=Infinity,i=null,B=0,k=l;B<k.length;B++){var u=k[B],f=u.bits,m=u.formatInfo;if(f===e||f===s)return m;var C=n(e,f);C<a&&(i=m,a=C),e!==s&&(C=n(s,f))<a&&(i=m,a=C)}return a<=3?i:null}(o);if(!r)return null;var B=function(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,n=0;n<a;n++)for(var d=0,l=c;d<l.length;d++)l[d].codewords.push(o.shift());if(t.ecBlocks.length>1){var i=t.ecBlocks[0].numBlocks,B=t.ecBlocks[1].numBlocks;for(n=0;n<B;n++)c[i+n].codewords.push(o.shift())}for(;o.length>0;)for(var k=0,u=c;k<u.length;k++)u[k].codewords.push(o.shift());return c}(function(o,e,r){for(var c=i[r.dataMask],s=o.height,a=function(o){var e=17+4*o.versionNumber,r=t.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var c=0,s=o.alignmentPatternCenters;c<s.length;c++)for(var a=s[c],n=0,d=o.alignmentPatternCenters;n<d.length;n++){var l=d[n];6===a&&6===l||6===a&&l===e-7||a===e-7&&6===l||r.setRegion(a-2,l-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}(e),n=[],l=0,B=0,k=!0,u=s-1;u>0;u-=2){6===u&&u--;for(var f=0;f<s;f++)for(var m=k?s-1-f:f,C=0;C<2;C++){var w=u-C;if(!a.get(w,m)){B++;var P=o.get(w,m);c({y:m,x:w})&&(P=!P),l=d(P,l),8===B&&(n.push(l),B=0,l=0)}}k=!k}return n}(o,e,r),e,r.errorCorrectionLevel);if(!B)return null;for(var k=B.reduce(function(o,e){return o+e.numDataCodewords},0),u=new Uint8ClampedArray(k),f=0,m=0,C=B;m<C.length;m++){var w=C[m],P=s.decode(w.codewords,w.codewords.length-w.numDataCodewords);if(!P)return null;for(var h=0;h<w.numDataCodewords;h++)u[f++]=P[h]}try{return c.decode(u,e.versionNumber)}catch(o){return null}}e.decode=function(o){if(null==o)return null;var e=B(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return B(o)}},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t,c,s=r(7),a=r(8);function n(o,e){for(var r=[],t="",c=o.readBits([10,12,14][e]);c>=3;){if((d=o.readBits(10))>=1e3)throw new Error("Invalid numeric value above 999");var s=Math.floor(d/100),a=Math.floor(d/10)%10,n=d%10;r.push(48+s,48+a,48+n),t+=s.toString()+a.toString()+n.toString(),c-=3}if(2===c){if((d=o.readBits(7))>=100)throw new Error("Invalid numeric value above 99");s=Math.floor(d/10),r.push(48+s,48+(a=d%10)),t+=s.toString()+a.toString()}else if(1===c){var d;if((d=o.readBits(4))>=10)throw new Error("Invalid numeric value above 9");r.push(48+d),t+=d.toString()}return{bytes:r,text:t}}!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(t=e.Mode||(e.Mode={})),function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(c||(c={}));var d=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function l(o,e){for(var r=[],t="",c=o.readBits([9,11,13][e]);c>=2;){var s=o.readBits(11),a=Math.floor(s/45),n=s%45;r.push(d[a].charCodeAt(0),d[n].charCodeAt(0)),t+=d[a]+d[n],c-=2}return 1===c&&(a=o.readBits(6),r.push(d[a].charCodeAt(0)),t+=d[a]),{bytes:r,text:t}}function i(o,e){for(var r=[],t="",c=o.readBits([8,16,16][e]),s=0;s<c;s++){var a=o.readBits(8);r.push(a)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function B(o,e){for(var r=[],t="",c=o.readBits([8,10,12][e]),s=0;s<c;s++){var n=o.readBits(13),d=Math.floor(n/192)<<8|n%192;r.push((d+=d<7936?33088:49472)>>8,255&d),t+=String.fromCharCode(a.shiftJISTable[d])}return{bytes:r,text:t}}e.decode=function(o,e){for(var r,a,d,k,u=new s.BitStream(o),f=e<=9?0:e<=26?1:2,m={text:"",bytes:[],chunks:[]};u.available()>=4;){var C=u.readBits(4);if(C===c.Terminator)return m;if(C===c.ECI)0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(7)}):0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(14)}):0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(21)}):m.chunks.push({type:t.ECI,assignmentNumber:-1});else if(C===c.Numeric){var w=n(u,f);m.text+=w.text,(r=m.bytes).push.apply(r,w.bytes),m.chunks.push({type:t.Numeric,text:w.text})}else if(C===c.Alphanumeric){var P=l(u,f);m.text+=P.text,(a=m.bytes).push.apply(a,P.bytes),m.chunks.push({type:t.Alphanumeric,text:P.text})}else if(C===c.Byte){var h=i(u,f);m.text+=h.text,(d=m.bytes).push.apply(d,h.bytes),m.chunks.push({type:t.Byte,bytes:h.bytes,text:h.text})}else if(C===c.Kanji){var v=B(u,f);m.text+=v.text,(k=m.bytes).push.apply(k,v.bytes),m.chunks.push({type:t.Kanji,bytes:v.bytes,text:v.text})}}if(0===u.available()||0===u.readBits(u.available()))return m}},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r;e=(this.bytes[this.byteOffset]&255>>8-t<<(c=r-t))>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;var c;o>0&&(e=e<<o|(this.bytes[this.byteOffset]&255>>(c=8-o)<<c)>>c,this.bitOffset+=o)}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=r(2);e.decode=function(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var s=new t.default(285,256,0),a=new c.default(s,r),n=new Uint8ClampedArray(e),d=!1,l=0;l<e;l++){var i=a.evaluateAt(s.exp(l+s.generatorBase));n[n.length-1-l]=i,0!==i&&(d=!0)}if(!d)return r;var B=new c.default(s,n),k=function(o,e,r,t){var c;e.degree()<r.degree()&&(e=(c=[r,e])[0],r=c[1]);for(var s=e,a=r,n=o.zero,d=o.one;a.degree()>=t/2;){var l=s,i=n;if(n=d,(s=a).isZero())return null;a=l;for(var B=o.zero,k=s.getCoefficient(s.degree()),u=o.inverse(k);a.degree()>=s.degree()&&!a.isZero();){var f=a.degree()-s.degree(),m=o.multiply(a.getCoefficient(a.degree()),u);B=B.addOrSubtract(o.buildMonomial(f,m)),a=a.addOrSubtract(s.multiplyByMonomial(f,m))}if(d=B.multiplyPoly(n).addOrSubtract(i),a.degree()>=s.degree())return null}var C=d.getCoefficient(0);if(0===C)return null;var w=o.inverse(C);return[d.multiply(w),a.multiply(w)]}(s,s.buildMonomial(e,1),B,e);if(null===k)return null;var u=function(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}(s,k[0]);if(null==u)return null;for(var f=function(o,e,r){for(var c=r.length,s=new Array(c),a=0;a<c;a++){for(var n=o.inverse(r[a]),d=1,l=0;l<c;l++)a!==l&&(d=o.multiply(d,t.addOrSubtractGF(1,o.multiply(r[l],n))));s[a]=o.multiply(e.evaluateAt(n),o.inverse(d)),0!==o.generatorBase&&(s[a]=o.multiply(s[a],n))}return s}(s,k[1],u),m=0;m<u.length;m++){var C=r.length-1-s.log(u[m]);if(C<0)return null;r[C]=t.addOrSubtractGF(r[C],f[m])}return r}},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(0);function c(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,n=t.x-r.x,d=e.y-r.y,l=t.y-r.y,i=a*l-n*d,B=(c*l-n*s)/i,k=(a*s-c*d)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}e.extract=function(o,e){for(var r,s,a={a11:(u=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5})).a22*u.a33-u.a23*u.a32,a12:u.a13*u.a32-u.a12*u.a33,a13:u.a12*u.a23-u.a13*u.a22,a21:u.a23*u.a31-u.a21*u.a33,a22:u.a11*u.a33-u.a13*u.a31,a23:u.a13*u.a21-u.a11*u.a23,a31:u.a21*u.a32-u.a22*u.a31,a32:u.a12*u.a31-u.a11*u.a32,a33:u.a11*u.a22-u.a12*u.a21},n={a11:(r=c(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft)).a11*(s=a).a11+r.a21*s.a12+r.a31*s.a13,a12:r.a12*s.a11+r.a22*s.a12+r.a32*s.a13,a13:r.a13*s.a11+r.a23*s.a12+r.a33*s.a13,a21:r.a11*s.a21+r.a21*s.a22+r.a31*s.a23,a22:r.a12*s.a21+r.a22*s.a22+r.a32*s.a23,a23:r.a13*s.a21+r.a23*s.a22+r.a33*s.a23,a31:r.a11*s.a31+r.a21*s.a32+r.a31*s.a33,a32:r.a12*s.a31+r.a22*s.a32+r.a32*s.a33,a33:r.a13*s.a31+r.a23*s.a32+r.a33*s.a33},d=t.BitMatrix.createEmpty(e.dimension,e.dimension),l=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},i=0;i<e.dimension;i++)for(var B=0;B<e.dimension;B++){var k=l(B+.5,i+.5);d.set(B,i,o.get(Math.floor(k.x),Math.floor(k.y)))}var u;return{matrix:d,mappingFunction:l}}},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};function c(o){return o.reduce(function(o,e){return o+e})}function s(o,e,r,c){var s,a,n,d,l=[{x:Math.floor(o.x),y:Math.floor(o.y)}],i=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);i?(s=Math.floor(o.y),a=Math.floor(o.x),n=Math.floor(e.y),d=Math.floor(e.x)):(s=Math.floor(o.x),a=Math.floor(o.y),n=Math.floor(e.x),d=Math.floor(e.y));for(var B=Math.abs(n-s),k=Math.abs(d-a),u=Math.floor(-B/2),f=s<n?1:-1,m=a<d?1:-1,C=!0,w=s,P=a;w!==n+f;w+=f){var h=i?P:w,v=i?w:P;if(r.get(h,v)!==C&&(C=!C,l.push({x:h,y:v}),l.length===c+1))break;if((u+=k)>0){if(P===d)break;P+=m,u-=B}}for(var y=[],p=0;p<c;p++)y.push(l[p]&&l[p+1]?t(l[p],l[p+1]):0);return y}function a(o,e,r,t){var c,a=e.y-o.y,n=e.x-o.x,d=s(o,e,r,Math.ceil(t/2)),l=s(o,{x:o.x-n,y:o.y-a},r,Math.ceil(t/2)),i=d.shift()+l.shift()-1;return(c=l.concat(i)).concat.apply(c,d)}function n(o,e){var r=c(o)/c(e),t=0;return e.forEach(function(e,c){t+=Math.pow(o[c]-e*r,2)}),{averageSize:r,error:t}}function d(o,e,r){try{var t=a(o,{x:-1,y:o.y},r,e.length),c=a(o,{x:o.x,y:-1},r,e.length),s=a(o,{x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},r,e.length),d=a(o,{x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},r,e.length),l=n(t,e),i=n(c,e),B=n(s,e),k=n(d,e),u=Math.sqrt(l.error*l.error+i.error*i.error+B.error*B.error+k.error*k.error),f=(l.averageSize+i.averageSize+B.averageSize+k.averageSize)/4;return u+(Math.pow(l.averageSize-f,2)+Math.pow(i.averageSize-f,2)+Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2))/f}catch(o){return Infinity}}function l(o,e){for(var r=Math.round(e.x);o.get(r,Math.round(e.y));)r--;for(var t=Math.round(e.x);o.get(t,Math.round(e.y));)t++;for(var c=(r+t)/2,s=Math.round(e.y);o.get(Math.round(c),s);)s--;for(var a=Math.round(e.y);o.get(Math.round(c),a);)a++;return{x:c,y:(s+a)/2}}function i(o,e,r,s,n){var l,i,B;try{l=function(o,e,r,s){var n=(c(a(o,r,s,5))/7+c(a(o,e,s,5))/7+c(a(r,o,s,5))/7+c(a(e,o,s,5))/7)/4;if(n<1)throw new Error("Invalid module size");var d=Math.round(t(o,e)/n),l=Math.round(t(o,r)/n),i=Math.floor((d+l)/2)+7;switch(i%4){case 0:i++;break;case 2:i--}return{dimension:i,moduleSize:n}}(s,r,n,o),i=l.dimension,B=l.moduleSize}catch(o){return null}var k=r.x-s.x+n.x,u=r.y-s.y+n.y,f=(t(s,n)+t(s,r))/2/B,m=1-3/f,C={x:s.x+m*(k-s.x),y:s.y+m*(u-s.y)},w=e.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,s=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(s)))return c([e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1]),{x:r,y:s,score:d({x:Math.floor(r),y:Math.floor(s)},[1,1,1],o)+t({x:r,y:s},C)}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});return{alignmentPattern:f>=15&&w.length?w[0]:C,dimension:i}}e.locate=function(o){for(var e=[],r=[],s=[],a=[],n=function(t){for(var n=0,d=!1,l=[0,0,0,0,0],i=function(e){var s=o.get(e,t);if(s===d)n++;else{l=[l[1],l[2],l[3],l[4],n],n=1,d=s;var i=c(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!s,k=c(l.slice(-3))/3,u=Math.abs(l[2]-k)<k&&Math.abs(l[3]-k)<k&&Math.abs(l[4]-k)<k&&s;if(B){var f=e-l[3]-l[4],m=f-l[2],C={startX:m,endX:f,y:t};(w=r.filter(function(o){return m>=o.bottom.startX&&m<=o.bottom.endX||f>=o.bottom.startX&&m<=o.bottom.endX||m<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<1.5&&l[2]/(o.bottom.endX-o.bottom.startX)>.5})).length>0?w[0].bottom=C:r.push({top:C,bottom:C})}if(u){var w,P=e-l[4],h=P-l[3];C={startX:h,y:t,endX:P},(w=a.filter(function(o){return h>=o.bottom.startX&&h<=o.bottom.endX||P>=o.bottom.startX&&h<=o.bottom.endX||h<=o.bottom.startX&&P>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<1.5&&l[2]/(o.bottom.endX-o.bottom.startX)>.5})).length>0?w[0].bottom=C:a.push({top:C,bottom:C})}}},B=-1;B<=o.width;B++)i(B);e.push.apply(e,r.filter(function(o){return o.bottom.y!==t&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===t}),s.push.apply(s,a.filter(function(o){return o.bottom.y!==t})),a=a.filter(function(o){return o.bottom.y===t})},B=0;B<=o.height;B++)n(B);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),s.push.apply(s,a);var k=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,t=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(t))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=c(s)/s.length;return{score:d({x:Math.round(r),y:Math.round(t)},[1,1,3,1,1],o),x:r,y:t,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>4)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===k.length)return null;var u=function(o,e,r){var c,s,a,n,d,l,i,B=t(o,e),k=t(e,r),u=t(o,r);return k>=B&&k>=u?(d=(c=[e,o,r])[0],l=c[1],i=c[2]):u>=k&&u>=B?(d=(s=[o,e,r])[0],l=s[1],i=s[2]):(d=(a=[o,r,e])[0],l=a[1],i=a[2]),(i.x-l.x)*(d.y-l.y)-(i.y-l.y)*(d.x-l.x)<0&&(d=(n=[i,d])[0],i=n[1]),{bottomLeft:d,topLeft:l,topRight:i}}(k[0].points[0],k[0].points[1],k[0].points[2]),f=u.topRight,m=u.topLeft,C=u.bottomLeft,w=i(o,s,f,m,C),P=[];w&&P.push({alignmentPattern:{x:w.alignmentPattern.x,y:w.alignmentPattern.y},bottomLeft:{x:C.x,y:C.y},dimension:w.dimension,topLeft:{x:m.x,y:m.y},topRight:{x:f.x,y:f.y}});var h=l(o,f),v=l(o,m),y=l(o,C),p=i(o,s,h,v,y);return p&&P.push({alignmentPattern:{x:p.alignmentPattern.x,y:p.alignmentPattern.y},bottomLeft:{x:y.x,y:y.y},topLeft:{x:v.x,y:v.y},topRight:{x:h.x,y:h.y},dimension:p.dimension}),0===P.length?null:P}}]).default},o.exports=r()}(e={exports:{}}),e.exports));self.addEventListener("message",function(o){var e=o.data,t=e.id,c=function(o){try{var e=r(o.data,o.width,o.height,{inversionAttempts:"dontInvert"});if(null===e||""===e.data)return[];var t=e.location,c=e.data,s=Object.freeze([t.topLeftCorner,t.topRightCorner,t.bottomRightCorner,t.bottomLeftCorner]),a=Math.min.apply(Math,s.map(function(o){return o.x})),n=Math.max.apply(Math,s.map(function(o){return o.x})),d=Math.min.apply(Math,s.map(function(o){return o.y})),l=Math.max.apply(Math,s.map(function(o){return o.y}));return[{boundingBox:DOMRectReadOnly.fromRect({x:a,y:d,width:n-a,height:l-d}),rawValue:c,format:"qr_code",cornerPoints:s}]}catch(o){return console.error(o),[]}}(e.imageData);self.postMessage({id:t,detectedBarcodes:c})})});\n'], {
        type: "text/javascript"
      })),
          m = ["qr_code"],
          k = function () {
        function e(e) {
          var t;
          this.worker = void 0, this.workerLoad = void 0, this.messageCount = void 0;
          var r = null != (t = null == e ? void 0 : e.formats) ? t : m;
          if (0 === r.length) throw new TypeError("");
          if (r.includes("unknown")) throw new TypeError("");
          this.worker = new p(v), this.workerLoad = 0, this.messageCount = 0;
        }

        return e.getSupportedFormats = function () {
          return Promise.resolve(m);
        }, e.prototype.detect = function (e) {
          try {
            var t = this;
            if (t.workerLoad > 5) return Promise.resolve([]);
            t.workerLoad++;
            var r = t.messageCount++;
            return Promise.resolve(a(e)).then(function (e) {
              return t.worker.postMessage({
                id: r,
                imageData: e
              }, [e.data.buffer]), Promise.resolve(new Promise(function (e) {
                t.worker.addEventListener("message", function (t) {
                  var o = t.data;
                  o.id === r && e(o.detectedBarcodes);
                });
              })).then(function (e) {
                return t.workerLoad--, e;
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }, e;
      }(),
          B = k,
          w = {
        beforeMount: function beforeMount() {
          window.BarcodeDetector = B;
        },
        methods: {
          onDetect: function onDetect(e) {
            var t = this;
            return Object(o["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function r() {
              var o, n;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (r) {
                while (1) {
                  switch (r.prev = r.next) {
                    case 0:
                      return t.$emit("detect", e), r.prev = 1, r.next = 4, e;

                    case 4:
                      o = r.sent, n = o.content, null !== n && t.$emit("decode", n), r.next = 11;
                      break;

                    case 9:
                      r.prev = 9, r.t0 = r["catch"](1);

                    case 11:
                    case "end":
                      return r.stop();
                  }
                }
              }, r, null, [[1, 9]]);
            }))();
          }
        }
      },
          b = w,
          y = r("2877"),
          g = Object(y["a"])(b, f, h, !1, null, null, null);

      t["a"] = g.exports;
    },
    b575: function b575(e, t, r) {
      var o,
          n,
          a,
          c,
          i,
          s,
          u,
          l,
          d = r("da84"),
          f = r("06cf").f,
          h = r("c6b6"),
          p = r("2cf4").set,
          v = r("1cdc"),
          m = d.MutationObserver || d.WebKitMutationObserver,
          k = d.process,
          B = d.Promise,
          w = "process" == h(k),
          b = f(d, "queueMicrotask"),
          y = b && b.value;
      y || (o = function o() {
        var e, t;
        w && (e = k.domain) && e.exit();

        while (n) {
          t = n.fn, n = n.next;

          try {
            t();
          } catch (r) {
            throw n ? c() : a = void 0, r;
          }
        }

        a = void 0, e && e.enter();
      }, w ? c = function c() {
        k.nextTick(o);
      } : m && !v ? (i = !0, s = document.createTextNode(""), new m(o).observe(s, {
        characterData: !0
      }), c = function c() {
        s.data = i = !i;
      }) : B && B.resolve ? (u = B.resolve(void 0), l = u.then, c = function c() {
        l.call(u, o);
      }) : c = function c() {
        p.call(d, o);
      }), e.exports = y || function (e) {
        var t = {
          fn: e,
          next: void 0
        };
        a && (a.next = t), n || (n = t, c()), a = t;
      };
    },
    b622: function b622(e, t, r) {
      var o = r("da84"),
          n = r("5692"),
          a = r("5135"),
          c = r("90e3"),
          i = r("4930"),
          s = r("fdbf"),
          u = n("wks"),
          l = o.Symbol,
          d = s ? l : l && l.withoutSetter || c;

      e.exports = function (e) {
        return a(u, e) || (i && a(l, e) ? u[e] = l[e] : u[e] = d("Symbol." + e)), u[e];
      };
    },
    b635: function b635(e, t, r) {
      "use strict";

      (function (e) {
        r.d(t, "e", function () {
          return c;
        });
        var o = r("0d0e");
        r.d(t, "c", function () {
          return o["a"];
        });
        var n = r("5c0b");
        r.d(t, "a", function () {
          return n["a"];
        });
        var a = r("fe6b");

        function c(e) {
          e.component("qrcode-stream", o["a"]), e.component("qrcode-capture", n["a"]), e.component("qrcode-drop-zone", a["a"]);
        }

        r.d(t, "b", function () {
          return a["a"];
        });
        var i = {
          install: c
        };
        t["d"] = i;
        var s = null;
        "undefined" !== typeof window ? s = window.Vue : "undefined" !== typeof e && (s = e.Vue), s && s.use(i);
      }).call(this, r("c8ba"));
    },
    b64b: function b64b(e, t, r) {
      var o = r("23e7"),
          n = r("7b0b"),
          a = r("df75"),
          c = r("d039"),
          i = c(function () {
        a(1);
      });
      o({
        target: "Object",
        stat: !0,
        forced: i
      }, {
        keys: function keys(e) {
          return a(n(e));
        }
      });
    },
    b727: function b727(e, t, r) {
      var o = r("0366"),
          n = r("44ad"),
          a = r("7b0b"),
          c = r("50c4"),
          i = r("65f0"),
          s = [].push,
          u = function u(e) {
        var t = 1 == e,
            r = 2 == e,
            u = 3 == e,
            l = 4 == e,
            d = 6 == e,
            f = 5 == e || d;
        return function (h, p, v, m) {
          for (var k, B, w = a(h), b = n(w), y = o(p, v, 3), g = c(b.length), C = 0, P = m || i, x = t ? P(h, g) : r ? P(h, 0) : void 0; g > C; C++) {
            if ((f || C in b) && (k = b[C], B = y(k, C, w), e)) if (t) x[C] = B;else if (B) switch (e) {
              case 3:
                return !0;

              case 5:
                return k;

              case 6:
                return C;

              case 2:
                s.call(x, k);
            } else if (l) return !1;
          }

          return d ? -1 : u || l ? l : x;
        };
      };

      e.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6)
      };
    },
    bb2f: function bb2f(e, t, r) {
      var o = r("d039");
      e.exports = !o(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    c036: function c036(e, t, r) {
      "use strict";

      function o(e, t, r) {
        var o, n;
        void 0 === r && (r = "error");
        var a = new Promise(function (e, t) {
          o = e, n = t;
        });
        return e.addEventListener(t, o), e.addEventListener(r, n), a["finally"](function () {
          e.removeEventListener(t, o), e.removeEventListener(r, n);
        }), a;
      }

      function n(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }

      r.d(t, "a", function () {
        return o;
      }), r.d(t, "b", function () {
        return n;
      });
    },
    c04e: function c04e(e, t, r) {
      var o = r("861d");

      e.exports = function (e, t) {
        if (!o(e)) return e;
        var r, n;
        if (t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;
        if ("function" == typeof (r = e.valueOf) && !o(n = r.call(e))) return n;
        if (!t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    c430: function c430(e, t) {
      e.exports = !1;
    },
    c6b6: function c6b6(e, t) {
      var r = {}.toString;

      e.exports = function (e) {
        return r.call(e).slice(8, -1);
      };
    },
    c6cd: function c6cd(e, t, r) {
      var o = r("da84"),
          n = r("ce4e"),
          a = "__core-js_shared__",
          c = o[a] || n(a, {});
      e.exports = c;
    },
    c8ba: function c8ba(e, t) {
      var r;

      r = function () {
        return this;
      }();

      try {
        r = r || new Function("return this")();
      } catch (o) {
        "object" === (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
      }

      e.exports = r;
    },
    c975: function c975(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("4d64").indexOf,
          a = r("a640"),
          c = r("ae40"),
          i = [].indexOf,
          s = !!i && 1 / [1].indexOf(1, -0) < 0,
          u = a("indexOf"),
          l = c("indexOf", {
        ACCESSORS: !0,
        1: 0
      });
      o({
        target: "Array",
        proto: !0,
        forced: s || !u || !l
      }, {
        indexOf: function indexOf(e) {
          return s ? i.apply(this, arguments) || 0 : n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    ca84: function ca84(e, t, r) {
      var o = r("5135"),
          n = r("fc6a"),
          a = r("4d64").indexOf,
          c = r("d012");

      e.exports = function (e, t) {
        var r,
            i = n(e),
            s = 0,
            u = [];

        for (r in i) {
          !o(c, r) && o(i, r) && u.push(r);
        }

        while (t.length > s) {
          o(i, r = t[s++]) && (~a(u, r) || u.push(r));
        }

        return u;
      };
    },
    caad: function caad(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("4d64").includes,
          a = r("44d2"),
          c = r("ae40"),
          i = c("indexOf", {
        ACCESSORS: !0,
        1: 0
      });
      o({
        target: "Array",
        proto: !0,
        forced: !i
      }, {
        includes: function includes(e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }), a("includes");
    },
    cc12: function cc12(e, t, r) {
      var o = r("da84"),
          n = r("861d"),
          a = o.document,
          c = n(a) && n(a.createElement);

      e.exports = function (e) {
        return c ? a.createElement(e) : {};
      };
    },
    cca6: function cca6(e, t, r) {
      var o = r("23e7"),
          n = r("60da");
      o({
        target: "Object",
        stat: !0,
        forced: Object.assign !== n
      }, {
        assign: n
      });
    },
    cdf9: function cdf9(e, t, r) {
      var o = r("825a"),
          n = r("861d"),
          a = r("f069");

      e.exports = function (e, t) {
        if (o(e), n(t) && t.constructor === e) return t;
        var r = a.f(e),
            c = r.resolve;
        return c(t), r.promise;
      };
    },
    ce4e: function ce4e(e, t, r) {
      var o = r("da84"),
          n = r("9112");

      e.exports = function (e, t) {
        try {
          n(o, e, t);
        } catch (r) {
          o[e] = t;
        }

        return t;
      };
    },
    d012: function d012(e, t) {
      e.exports = {};
    },
    d039: function d039(e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    },
    d066: function d066(e, t, r) {
      var o = r("428f"),
          n = r("da84"),
          a = function a(e) {
        return "function" == typeof e ? e : void 0;
      };

      e.exports = function (e, t) {
        return arguments.length < 2 ? a(o[e]) || a(n[e]) : o[e] && o[e][t] || n[e] && n[e][t];
      };
    },
    d1e7: function d1e7(e, t, r) {
      "use strict";

      var o = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          a = n && !o.call({
        1: 2
      }, 1);
      t.f = a ? function (e) {
        var t = n(this, e);
        return !!t && t.enumerable;
      } : o;
    },
    d28b: function d28b(e, t, r) {
      var o = r("746f");
      o("iterator");
    },
    d2bb: function d2bb(e, t, r) {
      var o = r("825a"),
          n = r("3bbe");
      e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e,
            t = !1,
            r = {};

        try {
          e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, e.call(r, []), t = r instanceof Array;
        } catch (a) {}

        return function (r, a) {
          return o(r), n(a), t ? e.call(r, a) : r.__proto__ = a, r;
        };
      }() : void 0);
    },
    d3b7: function d3b7(e, t, r) {
      var o = r("00ee"),
          n = r("6eeb"),
          a = r("b041");
      o || n(Object.prototype, "toString", a, {
        unsafe: !0
      });
    },
    d44e: function d44e(e, t, r) {
      var o = r("9bf2").f,
          n = r("5135"),
          a = r("b622"),
          c = a("toStringTag");

      e.exports = function (e, t, r) {
        e && !n(e = r ? e : e.prototype, c) && o(e, c, {
          configurable: !0,
          value: t
        });
      };
    },
    d4ec: function d4ec(e, t, r) {
      "use strict";

      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      r.d(t, "a", function () {
        return o;
      });
    },
    d58f: function d58f(e, t, r) {
      var o = r("1c0b"),
          n = r("7b0b"),
          a = r("44ad"),
          c = r("50c4"),
          i = function i(e) {
        return function (t, r, i, s) {
          o(r);
          var u = n(t),
              l = a(u),
              d = c(u.length),
              f = e ? d - 1 : 0,
              h = e ? -1 : 1;
          if (i < 2) while (1) {
            if (f in l) {
              s = l[f], f += h;
              break;
            }

            if (f += h, e ? f < 0 : d <= f) throw TypeError("Reduce of empty array with no initial value");
          }

          for (; e ? f >= 0 : d > f; f += h) {
            f in l && (s = r(s, l[f], f, u));
          }

          return s;
        };
      };

      e.exports = {
        left: i(!1),
        right: i(!0)
      };
    },
    d784: function d784(e, t, r) {
      "use strict";

      r("ac1f");

      var o = r("6eeb"),
          n = r("d039"),
          a = r("b622"),
          c = r("9263"),
          i = r("9112"),
          s = a("species"),
          u = !n(function () {
        var e = /./;
        return e.exec = function () {
          var e = [];
          return e.groups = {
            a: "7"
          }, e;
        }, "7" !== "".replace(e, "$<a>");
      }),
          l = function () {
        return "$0" === "a".replace(/./, "$0");
      }(),
          d = a("replace"),
          f = function () {
        return !!/./[d] && "" === /./[d]("a", "$0");
      }(),
          h = !n(function () {
        var e = /(?:)/,
            t = e.exec;

        e.exec = function () {
          return t.apply(this, arguments);
        };

        var r = "ab".split(e);
        return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
      });

      e.exports = function (e, t, r, d) {
        var p = a(e),
            v = !n(function () {
          var t = {};
          return t[p] = function () {
            return 7;
          }, 7 != ""[e](t);
        }),
            m = v && !n(function () {
          var t = !1,
              r = /a/;
          return "split" === e && (r = {}, r.constructor = {}, r.constructor[s] = function () {
            return r;
          }, r.flags = "", r[p] = /./[p]), r.exec = function () {
            return t = !0, null;
          }, r[p](""), !t;
        });

        if (!v || !m || "replace" === e && (!u || !l || f) || "split" === e && !h) {
          var k = /./[p],
              B = r(p, ""[e], function (e, t, r, o, n) {
            return t.exec === c ? v && !n ? {
              done: !0,
              value: k.call(t, r, o)
            } : {
              done: !0,
              value: e.call(r, t, o)
            } : {
              done: !1
            };
          }, {
            REPLACE_KEEPS_$0: l,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
          }),
              w = B[0],
              b = B[1];
          o(String.prototype, e, w), o(RegExp.prototype, p, 2 == t ? function (e, t) {
            return b.call(e, this, t);
          } : function (e) {
            return b.call(e, this);
          });
        }

        d && i(RegExp.prototype[p], "sham", !0);
      };
    },
    d81d: function d81d(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("b727").map,
          a = r("1dde"),
          c = r("ae40"),
          i = a("map"),
          s = c("map");
      o({
        target: "Array",
        proto: !0,
        forced: !i || !s
      }, {
        map: function map(e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    da84: function da84(e, t, r) {
      (function (t) {
        var r = function r(e) {
          return e && e.Math == Math && e;
        };

        e.exports = r("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || r("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || r("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || r("object" == _typeof(t) && t) || Function("return this")();
      }).call(this, r("c8ba"));
    },
    dbb4: function dbb4(e, t, r) {
      var o = r("23e7"),
          n = r("83ab"),
          a = r("56ef"),
          c = r("fc6a"),
          i = r("06cf"),
          s = r("8418");
      o({
        target: "Object",
        stat: !0,
        sham: !n
      }, {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
          var t,
              r,
              o = c(e),
              n = i.f,
              u = a(o),
              l = {},
              d = 0;

          while (u.length > d) {
            r = n(o, t = u[d++]), void 0 !== r && s(l, t, r);
          }

          return l;
        }
      });
    },
    ddb0: function ddb0(e, t, r) {
      var o = r("da84"),
          n = r("fdbc"),
          a = r("e260"),
          c = r("9112"),
          i = r("b622"),
          s = i("iterator"),
          u = i("toStringTag"),
          l = a.values;

      for (var d in n) {
        var f = o[d],
            h = f && f.prototype;

        if (h) {
          if (h[s] !== l) try {
            c(h, s, l);
          } catch (v) {
            h[s] = l;
          }
          if (h[u] || c(h, u, d), n[d]) for (var p in a) {
            if (h[p] !== a[p]) try {
              c(h, p, a[p]);
            } catch (v) {
              h[p] = a[p];
            }
          }
        }
      }
    },
    df75: function df75(e, t, r) {
      var o = r("ca84"),
          n = r("7839");

      e.exports = Object.keys || function (e) {
        return o(e, n);
      };
    },
    e01a: function e01a(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("83ab"),
          a = r("da84"),
          c = r("5135"),
          i = r("861d"),
          s = r("9bf2").f,
          u = r("e893"),
          l = a.Symbol;

      if (n && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
        var d = {},
            f = function f() {
          var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              t = this instanceof f ? new l(e) : void 0 === e ? l() : l(e);
          return "" === e && (d[t] = !0), t;
        };

        u(f, l);
        var h = f.prototype = l.prototype;
        h.constructor = f;
        var p = h.toString,
            v = "Symbol(test)" == String(l("test")),
            m = /^Symbol\((.*)\)[^)]+$/;
        s(h, "description", {
          configurable: !0,
          get: function get() {
            var e = i(this) ? this.valueOf() : this,
                t = p.call(e);
            if (c(d, e)) return "";
            var r = v ? t.slice(7, -1) : t.replace(m, "$1");
            return "" === r ? void 0 : r;
          }
        }), o({
          global: !0,
          forced: !0
        }, {
          Symbol: f
        });
      }
    },
    e163: function e163(e, t, r) {
      var o = r("5135"),
          n = r("7b0b"),
          a = r("f772"),
          c = r("e177"),
          i = a("IE_PROTO"),
          s = Object.prototype;
      e.exports = c ? Object.getPrototypeOf : function (e) {
        return e = n(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
      };
    },
    e177: function e177(e, t, r) {
      var o = r("d039");
      e.exports = !o(function () {
        function e() {}

        return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
      });
    },
    e260: function e260(e, t, r) {
      "use strict";

      var o = r("fc6a"),
          n = r("44d2"),
          a = r("3f8c"),
          c = r("69f3"),
          i = r("7dd0"),
          s = "Array Iterator",
          u = c.set,
          l = c.getterFor(s);
      e.exports = i(Array, "Array", function (e, t) {
        u(this, {
          type: s,
          target: o(e),
          index: 0,
          kind: t
        });
      }, function () {
        var e = l(this),
            t = e.target,
            r = e.kind,
            o = e.index++;
        return !t || o >= t.length ? (e.target = void 0, {
          value: void 0,
          done: !0
        }) : "keys" == r ? {
          value: o,
          done: !1
        } : "values" == r ? {
          value: t[o],
          done: !1
        } : {
          value: [o, t[o]],
          done: !1
        };
      }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries");
    },
    e2cc: function e2cc(e, t, r) {
      var o = r("6eeb");

      e.exports = function (e, t, r) {
        for (var n in t) {
          o(e, n, t[n], r);
        }

        return e;
      };
    },
    e439: function e439(e, t, r) {
      var o = r("23e7"),
          n = r("d039"),
          a = r("fc6a"),
          c = r("06cf").f,
          i = r("83ab"),
          s = n(function () {
        c(1);
      }),
          u = !i || s;
      o({
        target: "Object",
        stat: !0,
        forced: u,
        sham: !i
      }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
          return c(a(e), t);
        }
      });
    },
    e538: function e538(e, t, r) {
      var o = r("b622");
      t.f = o;
    },
    e667: function e667(e, t) {
      e.exports = function (e) {
        try {
          return {
            error: !1,
            value: e()
          };
        } catch (t) {
          return {
            error: !0,
            value: t
          };
        }
      };
    },
    e6cf: function e6cf(e, t, r) {
      "use strict";

      var o,
          n,
          a,
          c,
          i = r("23e7"),
          s = r("c430"),
          u = r("da84"),
          l = r("d066"),
          d = r("fea9"),
          f = r("6eeb"),
          h = r("e2cc"),
          p = r("d44e"),
          v = r("2626"),
          m = r("861d"),
          k = r("1c0b"),
          B = r("19aa"),
          w = r("c6b6"),
          b = r("8925"),
          y = r("2266"),
          g = r("1c7e"),
          C = r("4840"),
          P = r("2cf4").set,
          x = r("b575"),
          S = r("cdf9"),
          O = r("44de"),
          j = r("f069"),
          E = r("e667"),
          M = r("69f3"),
          L = r("94ca"),
          R = r("b622"),
          A = r("2d00"),
          I = R("species"),
          T = "Promise",
          _ = M.get,
          N = M.set,
          U = M.getterFor(T),
          _D = d,
          F = u.TypeError,
          z = u.document,
          q = u.process,
          X = l("fetch"),
          G = j.f,
          $ = G,
          W = "process" == w(q),
          H = !!(z && z.createEvent && u.dispatchEvent),
          V = "unhandledrejection",
          J = "rejectionhandled",
          K = 0,
          Z = 1,
          Q = 2,
          Y = 1,
          ee = 2,
          te = L(T, function () {
        var e = b(_D) !== String(_D);

        if (!e) {
          if (66 === A) return !0;
          if (!W && "function" != typeof PromiseRejectionEvent) return !0;
        }

        if (s && !_D.prototype["finally"]) return !0;
        if (A >= 51 && /native code/.test(_D)) return !1;

        var t = _D.resolve(1),
            r = function r(e) {
          e(function () {}, function () {});
        },
            o = t.constructor = {};

        return o[I] = r, !(t.then(function () {}) instanceof r);
      }),
          re = te || !g(function (e) {
        _D.all(e)["catch"](function () {});
      }),
          oe = function oe(e) {
        var t;
        return !(!m(e) || "function" != typeof (t = e.then)) && t;
      },
          ne = function ne(e, t, r) {
        if (!t.notified) {
          t.notified = !0;
          var o = t.reactions;
          x(function () {
            var n = t.value,
                a = t.state == Z,
                c = 0;

            while (o.length > c) {
              var i,
                  s,
                  u,
                  l = o[c++],
                  d = a ? l.ok : l.fail,
                  f = l.resolve,
                  h = l.reject,
                  p = l.domain;

              try {
                d ? (a || (t.rejection === ee && se(e, t), t.rejection = Y), !0 === d ? i = n : (p && p.enter(), i = d(n), p && (p.exit(), u = !0)), i === l.promise ? h(F("Promise-chain cycle")) : (s = oe(i)) ? s.call(i, f, h) : f(i)) : h(n);
              } catch (v) {
                p && !u && p.exit(), h(v);
              }
            }

            t.reactions = [], t.notified = !1, r && !t.rejection && ce(e, t);
          });
        }
      },
          ae = function ae(e, t, r) {
        var o, n;
        H ? (o = z.createEvent("Event"), o.promise = t, o.reason = r, o.initEvent(e, !1, !0), u.dispatchEvent(o)) : o = {
          promise: t,
          reason: r
        }, (n = u["on" + e]) ? n(o) : e === V && O("Unhandled promise rejection", r);
      },
          ce = function ce(e, t) {
        P.call(u, function () {
          var r,
              o = t.value,
              n = ie(t);
          if (n && (r = E(function () {
            W ? q.emit("unhandledRejection", o, e) : ae(V, e, o);
          }), t.rejection = W || ie(t) ? ee : Y, r.error)) throw r.value;
        });
      },
          ie = function ie(e) {
        return e.rejection !== Y && !e.parent;
      },
          se = function se(e, t) {
        P.call(u, function () {
          W ? q.emit("rejectionHandled", e) : ae(J, e, t.value);
        });
      },
          ue = function ue(e, t, r, o) {
        return function (n) {
          e(t, r, n, o);
        };
      },
          le = function le(e, t, r, o) {
        t.done || (t.done = !0, o && (t = o), t.value = r, t.state = Q, ne(e, t, !0));
      },
          de = function de(e, t, r, o) {
        if (!t.done) {
          t.done = !0, o && (t = o);

          try {
            if (e === r) throw F("Promise can't be resolved itself");
            var n = oe(r);
            n ? x(function () {
              var o = {
                done: !1
              };

              try {
                n.call(r, ue(de, e, o, t), ue(le, e, o, t));
              } catch (a) {
                le(e, o, a, t);
              }
            }) : (t.value = r, t.state = Z, ne(e, t, !1));
          } catch (a) {
            le(e, {
              done: !1
            }, a, t);
          }
        }
      };

      te && (_D = function D(e) {
        B(this, _D, T), k(e), o.call(this);

        var t = _(this);

        try {
          e(ue(de, this, t), ue(le, this, t));
        } catch (r) {
          le(this, t, r);
        }
      }, o = function o(e) {
        N(this, {
          type: T,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: K,
          value: void 0
        });
      }, o.prototype = h(_D.prototype, {
        then: function then(e, t) {
          var r = U(this),
              o = G(C(this, _D));
          return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t && t, o.domain = W ? q.domain : void 0, r.parent = !0, r.reactions.push(o), r.state != K && ne(this, r, !1), o.promise;
        },
        "catch": function _catch(e) {
          return this.then(void 0, e);
        }
      }), n = function n() {
        var e = new o(),
            t = _(e);

        this.promise = e, this.resolve = ue(de, e, t), this.reject = ue(le, e, t);
      }, j.f = G = function G(e) {
        return e === _D || e === a ? new n(e) : $(e);
      }, s || "function" != typeof d || (c = d.prototype.then, f(d.prototype, "then", function (e, t) {
        var r = this;
        return new _D(function (e, t) {
          c.call(r, e, t);
        }).then(e, t);
      }, {
        unsafe: !0
      }), "function" == typeof X && i({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function fetch(e) {
          return S(_D, X.apply(u, arguments));
        }
      }))), i({
        global: !0,
        wrap: !0,
        forced: te
      }, {
        Promise: _D
      }), p(_D, T, !1, !0), v(T), a = l(T), i({
        target: T,
        stat: !0,
        forced: te
      }, {
        reject: function reject(e) {
          var t = G(this);
          return t.reject.call(void 0, e), t.promise;
        }
      }), i({
        target: T,
        stat: !0,
        forced: s || te
      }, {
        resolve: function resolve(e) {
          return S(s && this === a ? _D : this, e);
        }
      }), i({
        target: T,
        stat: !0,
        forced: re
      }, {
        all: function all(e) {
          var t = this,
              r = G(t),
              o = r.resolve,
              n = r.reject,
              a = E(function () {
            var r = k(t.resolve),
                a = [],
                c = 0,
                i = 1;
            y(e, function (e) {
              var s = c++,
                  u = !1;
              a.push(void 0), i++, r.call(t, e).then(function (e) {
                u || (u = !0, a[s] = e, --i || o(a));
              }, n);
            }), --i || o(a);
          });
          return a.error && n(a.value), r.promise;
        },
        race: function race(e) {
          var t = this,
              r = G(t),
              o = r.reject,
              n = E(function () {
            var n = k(t.resolve);
            y(e, function (e) {
              n.call(t, e).then(r.resolve, o);
            });
          });
          return n.error && o(n.value), r.promise;
        }
      });
    },
    e893: function e893(e, t, r) {
      var o = r("5135"),
          n = r("56ef"),
          a = r("06cf"),
          c = r("9bf2");

      e.exports = function (e, t) {
        for (var r = n(t), i = c.f, s = a.f, u = 0; u < r.length; u++) {
          var l = r[u];
          o(e, l) || i(e, l, s(t, l));
        }
      };
    },
    e8b5: function e8b5(e, t, r) {
      var o = r("c6b6");

      e.exports = Array.isArray || function (e) {
        return "Array" == o(e);
      };
    },
    e95a: function e95a(e, t, r) {
      var o = r("b622"),
          n = r("3f8c"),
          a = o("iterator"),
          c = Array.prototype;

      e.exports = function (e) {
        return void 0 !== e && (n.Array === e || c[a] === e);
      };
    },
    f069: function f069(e, t, r) {
      "use strict";

      var o = r("1c0b"),
          n = function n(e) {
        var t, r;
        this.promise = new e(function (e, o) {
          if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
          t = e, r = o;
        }), this.resolve = o(t), this.reject = o(r);
      };

      e.exports.f = function (e) {
        return new n(e);
      };
    },
    f183: function f183(e, t, r) {
      var o = r("d012"),
          n = r("861d"),
          a = r("5135"),
          c = r("9bf2").f,
          i = r("90e3"),
          s = r("bb2f"),
          u = i("meta"),
          l = 0,
          d = Object.isExtensible || function () {
        return !0;
      },
          f = function f(e) {
        c(e, u, {
          value: {
            objectID: "O" + ++l,
            weakData: {}
          }
        });
      },
          h = function h(e, t) {
        if (!n(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;

        if (!a(e, u)) {
          if (!d(e)) return "F";
          if (!t) return "E";
          f(e);
        }

        return e[u].objectID;
      },
          p = function p(e, t) {
        if (!a(e, u)) {
          if (!d(e)) return !0;
          if (!t) return !1;
          f(e);
        }

        return e[u].weakData;
      },
          v = function v(e) {
        return s && m.REQUIRED && d(e) && !a(e, u) && f(e), e;
      },
          m = e.exports = {
        REQUIRED: !1,
        fastKey: h,
        getWeakData: p,
        onFreeze: v
      };

      o[u] = !0;
    },
    f5df: function f5df(e, t, r) {
      var o = r("00ee"),
          n = r("c6b6"),
          a = r("b622"),
          c = a("toStringTag"),
          i = "Arguments" == n(function () {
        return arguments;
      }()),
          s = function s(e, t) {
        try {
          return e[t];
        } catch (r) {}
      };

      e.exports = o ? n : function (e) {
        var t, r, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = s(t = Object(e), c)) ? r : i ? n(t) : "Object" == (o = n(t)) && "function" == typeof t.callee ? "Arguments" : o;
      };
    },
    f772: function f772(e, t, r) {
      var o = r("5692"),
          n = r("90e3"),
          a = o("keys");

      e.exports = function (e) {
        return a[e] || (a[e] = n(e));
      };
    },
    fb15: function fb15(e, t, r) {
      "use strict";

      if (r.r(t), r.d(t, "install", function () {
        return c["e"];
      }), r.d(t, "QrcodeStream", function () {
        return c["c"];
      }), r.d(t, "QrcodeCapture", function () {
        return c["a"];
      }), r.d(t, "QrcodeDropZone", function () {
        return c["b"];
      }), "undefined" !== typeof window) {
        var o = window.document.currentScript,
            n = r("8875");
        o = n(), "currentScript" in document || Object.defineProperty(document, "currentScript", {
          get: n
        });
        var a = o && o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        a && (r.p = a[1]);
      }

      var c = r("b635");
      t["default"] = c["d"];
    },
    fb6a: function fb6a(e, t, r) {
      "use strict";

      var o = r("23e7"),
          n = r("861d"),
          a = r("e8b5"),
          c = r("23cb"),
          i = r("50c4"),
          s = r("fc6a"),
          u = r("8418"),
          l = r("b622"),
          d = r("1dde"),
          f = r("ae40"),
          h = d("slice"),
          p = f("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
      }),
          v = l("species"),
          m = [].slice,
          k = Math.max;
      o({
        target: "Array",
        proto: !0,
        forced: !h || !p
      }, {
        slice: function slice(e, t) {
          var r,
              o,
              l,
              d = s(this),
              f = i(d.length),
              h = c(e, f),
              p = c(void 0 === t ? f : t, f);
          if (a(d) && (r = d.constructor, "function" != typeof r || r !== Array && !a(r.prototype) ? n(r) && (r = r[v], null === r && (r = void 0)) : r = void 0, r === Array || void 0 === r)) return m.call(d, h, p);

          for (o = new (void 0 === r ? Array : r)(k(p - h, 0)), l = 0; h < p; h++, l++) {
            h in d && u(o, l, d[h]);
          }

          return o.length = l, o;
        }
      });
    },
    fc6a: function fc6a(e, t, r) {
      var o = r("44ad"),
          n = r("1d80");

      e.exports = function (e) {
        return o(n(e));
      };
    },
    fdbc: function fdbc(e, t) {
      e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    },
    fdbf: function fdbf(e, t, r) {
      var o = r("4930");
      e.exports = o && !Symbol.sham && "symbol" == _typeof(Symbol.iterator);
    },
    fe6b: function fe6b(e, t, r) {
      "use strict";

      var o = function o() {
        var e = this,
            t = e.$createElement,
            r = e._self._c || t;
        return r("div", {
          on: {
            drop: function drop(t) {
              return t.preventDefault(), t.stopPropagation(), e.onDrop(t);
            },
            dragenter: function dragenter(t) {
              return t.preventDefault(), t.stopPropagation(), e.onDragOver(!0);
            },
            dragleave: function dragleave(t) {
              return t.preventDefault(), t.stopPropagation(), e.onDragOver(!1);
            },
            dragover: function dragover(e) {
              e.preventDefault(), e.stopPropagation();
            }
          }
        }, [e._t("default")], 2);
      },
          n = [],
          a = (r("4160"), r("159b"), r("2909")),
          c = r("a180"),
          i = r("b3af"),
          s = {
        name: "qrcode-drop-zone",
        mixins: [i["a"]],
        methods: {
          onDragOver: function onDragOver(e) {
            this.$emit("dragover", e);
          },
          onDrop: function onDrop(e) {
            var t = this,
                r = e.dataTransfer;
            this.onDragOver(!1);
            var o = Object(a["a"])(r.files),
                n = r.getData("text/uri-list");
            o.forEach(function (e) {
              t.onDetect(Object(c["b"])(e));
            }), "" !== n && this.onDetect(Object(c["c"])(n));
          }
        }
      },
          u = s,
          l = r("2877"),
          d = Object(l["a"])(u, o, n, !1, null, null, null);

      t["a"] = d.exports;
    },
    fea9: function fea9(e, t, r) {
      var o = r("da84");
      e.exports = o.Promise;
    }
  });
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/vueQrCode.js");
/******/ 	
/******/ })()
;