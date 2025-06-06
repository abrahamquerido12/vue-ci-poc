function yd(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var ui = { exports: {} }, C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function jy() {
  if (ad) return C;
  ad = 1;
  var g = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), ll = Symbol.for("react.profiler"), cl = Symbol.for("react.consumer"), dl = Symbol.for("react.context"), tl = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), V = Symbol.iterator;
  function F(s) {
    return s === null || typeof s != "object" ? null : (s = V && s[V] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var I = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, El = {};
  function rl(s, z, p) {
    this.props = s, this.context = z, this.refs = El, this.updater = p || I;
  }
  rl.prototype.isReactComponent = {}, rl.prototype.setState = function(s, z) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, z, "setState");
  }, rl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Ml() {
  }
  Ml.prototype = rl.prototype;
  function Ol(s, z, p) {
    this.props = s, this.context = z, this.refs = El, this.updater = p || I;
  }
  var Al = Ol.prototype = new Ml();
  Al.constructor = Ol, w(Al, rl.prototype), Al.isPureReactComponent = !0;
  var vt = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, Jl = Object.prototype.hasOwnProperty;
  function wl(s, z, p, O, q, k) {
    return p = k.ref, {
      $$typeof: g,
      type: s,
      key: z,
      ref: p !== void 0 ? p : null,
      props: k
    };
  }
  function Wl(s, z) {
    return wl(
      s.type,
      z,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function bt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === g;
  }
  function qu(s) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(p) {
      return z[p];
    });
  }
  var _t = /\/+/g;
  function Yl(s, z) {
    return typeof s == "object" && s !== null && s.key != null ? qu("" + s.key) : z.toString(36);
  }
  function yu() {
  }
  function vu(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(yu, yu) : (s.status = "pending", s.then(
          function(z) {
            s.status === "pending" && (s.status = "fulfilled", s.value = z);
          },
          function(z) {
            s.status === "pending" && (s.status = "rejected", s.reason = z);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function jl(s, z, p, O, q) {
    var k = typeof s;
    (k === "undefined" || k === "boolean") && (s = null);
    var X = !1;
    if (s === null) X = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case g:
            case U:
              X = !0;
              break;
            case M:
              return X = s._init, jl(
                X(s._payload),
                z,
                p,
                O,
                q
              );
          }
      }
    if (X)
      return q = q(s), X = O === "" ? "." + Yl(s, 0) : O, vt(q) ? (p = "", X != null && (p = X.replace(_t, "$&/") + "/"), jl(q, z, p, "", function(Zt) {
        return Zt;
      })) : q != null && (bt(q) && (q = Wl(
        q,
        p + (q.key == null || s && s.key === q.key ? "" : ("" + q.key).replace(
          _t,
          "$&/"
        ) + "/") + X
      )), z.push(q)), 1;
    X = 0;
    var kl = O === "" ? "." : O + ":";
    if (vt(s))
      for (var yl = 0; yl < s.length; yl++)
        O = s[yl], k = kl + Yl(O, yl), X += jl(
          O,
          z,
          p,
          k,
          q
        );
    else if (yl = F(s), typeof yl == "function")
      for (s = yl.call(s), yl = 0; !(O = s.next()).done; )
        O = O.value, k = kl + Yl(O, yl++), X += jl(
          O,
          z,
          p,
          k,
          q
        );
    else if (k === "object") {
      if (typeof s.then == "function")
        return jl(
          vu(s),
          z,
          p,
          O,
          q
        );
      throw z = String(s), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function S(s, z, p) {
    if (s == null) return s;
    var O = [], q = 0;
    return jl(s, O, "", "", function(k) {
      return z.call(p, k, q++);
    }), O;
  }
  function _(s) {
    if (s._status === -1) {
      var z = s._result;
      z = z(), z.then(
        function(p) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = p);
        },
        function(p) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = p);
        }
      ), s._status === -1 && (s._status = 0, s._result = z);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function il() {
  }
  return C.Children = {
    map: S,
    forEach: function(s, z, p) {
      S(
        s,
        function() {
          z.apply(this, arguments);
        },
        p
      );
    },
    count: function(s) {
      var z = 0;
      return S(s, function() {
        z++;
      }), z;
    },
    toArray: function(s) {
      return S(s, function(z) {
        return z;
      }) || [];
    },
    only: function(s) {
      if (!bt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, C.Component = rl, C.Fragment = H, C.Profiler = ll, C.PureComponent = Ol, C.StrictMode = m, C.Suspense = D, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return W.H.useMemoCache(s);
    }
  }, C.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, C.cloneElement = function(s, z, p) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = w({}, s.props), q = s.key, k = void 0;
    if (z != null)
      for (X in z.ref !== void 0 && (k = void 0), z.key !== void 0 && (q = "" + z.key), z)
        !Jl.call(z, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && z.ref === void 0 || (O[X] = z[X]);
    var X = arguments.length - 2;
    if (X === 1) O.children = p;
    else if (1 < X) {
      for (var kl = Array(X), yl = 0; yl < X; yl++)
        kl[yl] = arguments[yl + 2];
      O.children = kl;
    }
    return wl(s.type, q, void 0, void 0, k, O);
  }, C.createContext = function(s) {
    return s = {
      $$typeof: dl,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: cl,
      _context: s
    }, s;
  }, C.createElement = function(s, z, p) {
    var O, q = {}, k = null;
    if (z != null)
      for (O in z.key !== void 0 && (k = "" + z.key), z)
        Jl.call(z, O) && O !== "key" && O !== "__self" && O !== "__source" && (q[O] = z[O]);
    var X = arguments.length - 2;
    if (X === 1) q.children = p;
    else if (1 < X) {
      for (var kl = Array(X), yl = 0; yl < X; yl++)
        kl[yl] = arguments[yl + 2];
      q.children = kl;
    }
    if (s && s.defaultProps)
      for (O in X = s.defaultProps, X)
        q[O] === void 0 && (q[O] = X[O]);
    return wl(s, k, void 0, void 0, null, q);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(s) {
    return { $$typeof: tl, render: s };
  }, C.isValidElement = bt, C.lazy = function(s) {
    return {
      $$typeof: M,
      _payload: { _status: -1, _result: s },
      _init: _
    };
  }, C.memo = function(s, z) {
    return {
      $$typeof: A,
      type: s,
      compare: z === void 0 ? null : z
    };
  }, C.startTransition = function(s) {
    var z = W.T, p = {};
    W.T = p;
    try {
      var O = s(), q = W.S;
      q !== null && q(p, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(il, B);
    } catch (k) {
      B(k);
    } finally {
      W.T = z;
    }
  }, C.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, C.use = function(s) {
    return W.H.use(s);
  }, C.useActionState = function(s, z, p) {
    return W.H.useActionState(s, z, p);
  }, C.useCallback = function(s, z) {
    return W.H.useCallback(s, z);
  }, C.useContext = function(s) {
    return W.H.useContext(s);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(s, z) {
    return W.H.useDeferredValue(s, z);
  }, C.useEffect = function(s, z, p) {
    var O = W.H;
    if (typeof p == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return O.useEffect(s, z);
  }, C.useId = function() {
    return W.H.useId();
  }, C.useImperativeHandle = function(s, z, p) {
    return W.H.useImperativeHandle(s, z, p);
  }, C.useInsertionEffect = function(s, z) {
    return W.H.useInsertionEffect(s, z);
  }, C.useLayoutEffect = function(s, z) {
    return W.H.useLayoutEffect(s, z);
  }, C.useMemo = function(s, z) {
    return W.H.useMemo(s, z);
  }, C.useOptimistic = function(s, z) {
    return W.H.useOptimistic(s, z);
  }, C.useReducer = function(s, z, p) {
    return W.H.useReducer(s, z, p);
  }, C.useRef = function(s) {
    return W.H.useRef(s);
  }, C.useState = function(s) {
    return W.H.useState(s);
  }, C.useSyncExternalStore = function(s, z, p) {
    return W.H.useSyncExternalStore(
      s,
      z,
      p
    );
  }, C.useTransition = function() {
    return W.H.useTransition();
  }, C.version = "19.1.0", C;
}
var ed;
function si() {
  return ed || (ed = 1, ui.exports = jy()), ui.exports;
}
var Xn = si();
const By = /* @__PURE__ */ yd(Xn);
var ai = { exports: {} }, ge = {}, ei = { exports: {} }, ni = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;
function Gy() {
  return nd || (nd = 1, function(g) {
    function U(S, _) {
      var B = S.length;
      S.push(_);
      l: for (; 0 < B; ) {
        var il = B - 1 >>> 1, s = S[il];
        if (0 < ll(s, _))
          S[il] = _, S[B] = s, B = il;
        else break l;
      }
    }
    function H(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var _ = S[0], B = S.pop();
      if (B !== _) {
        S[0] = B;
        l: for (var il = 0, s = S.length, z = s >>> 1; il < z; ) {
          var p = 2 * (il + 1) - 1, O = S[p], q = p + 1, k = S[q];
          if (0 > ll(O, B))
            q < s && 0 > ll(k, O) ? (S[il] = k, S[q] = B, il = q) : (S[il] = O, S[p] = B, il = p);
          else if (q < s && 0 > ll(k, B))
            S[il] = k, S[q] = B, il = q;
          else break l;
        }
      }
      return _;
    }
    function ll(S, _) {
      var B = S.sortIndex - _.sortIndex;
      return B !== 0 ? B : S.id - _.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var cl = performance;
      g.unstable_now = function() {
        return cl.now();
      };
    } else {
      var dl = Date, tl = dl.now();
      g.unstable_now = function() {
        return dl.now() - tl;
      };
    }
    var D = [], A = [], M = 1, V = null, F = 3, I = !1, w = !1, El = !1, rl = !1, Ml = typeof setTimeout == "function" ? setTimeout : null, Ol = typeof clearTimeout == "function" ? clearTimeout : null, Al = typeof setImmediate < "u" ? setImmediate : null;
    function vt(S) {
      for (var _ = H(A); _ !== null; ) {
        if (_.callback === null) m(A);
        else if (_.startTime <= S)
          m(A), _.sortIndex = _.expirationTime, U(D, _);
        else break;
        _ = H(A);
      }
    }
    function W(S) {
      if (El = !1, vt(S), !w)
        if (H(D) !== null)
          w = !0, Jl || (Jl = !0, Yl());
        else {
          var _ = H(A);
          _ !== null && jl(W, _.startTime - S);
        }
    }
    var Jl = !1, wl = -1, Wl = 5, bt = -1;
    function qu() {
      return rl ? !0 : !(g.unstable_now() - bt < Wl);
    }
    function _t() {
      if (rl = !1, Jl) {
        var S = g.unstable_now();
        bt = S;
        var _ = !0;
        try {
          l: {
            w = !1, El && (El = !1, Ol(wl), wl = -1), I = !0;
            var B = F;
            try {
              t: {
                for (vt(S), V = H(D); V !== null && !(V.expirationTime > S && qu()); ) {
                  var il = V.callback;
                  if (typeof il == "function") {
                    V.callback = null, F = V.priorityLevel;
                    var s = il(
                      V.expirationTime <= S
                    );
                    if (S = g.unstable_now(), typeof s == "function") {
                      V.callback = s, vt(S), _ = !0;
                      break t;
                    }
                    V === H(D) && m(D), vt(S);
                  } else m(D);
                  V = H(D);
                }
                if (V !== null) _ = !0;
                else {
                  var z = H(A);
                  z !== null && jl(
                    W,
                    z.startTime - S
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              V = null, F = B, I = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Yl() : Jl = !1;
        }
      }
    }
    var Yl;
    if (typeof Al == "function")
      Yl = function() {
        Al(_t);
      };
    else if (typeof MessageChannel < "u") {
      var yu = new MessageChannel(), vu = yu.port2;
      yu.port1.onmessage = _t, Yl = function() {
        vu.postMessage(null);
      };
    } else
      Yl = function() {
        Ml(_t, 0);
      };
    function jl(S, _) {
      wl = Ml(function() {
        S(g.unstable_now());
      }, _);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, g.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Wl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, g.unstable_next = function(S) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = F;
      }
      var B = F;
      F = _;
      try {
        return S();
      } finally {
        F = B;
      }
    }, g.unstable_requestPaint = function() {
      rl = !0;
    }, g.unstable_runWithPriority = function(S, _) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var B = F;
      F = S;
      try {
        return _();
      } finally {
        F = B;
      }
    }, g.unstable_scheduleCallback = function(S, _, B) {
      var il = g.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? il + B : il) : B = il, S) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = B + s, S = {
        id: M++,
        callback: _,
        priorityLevel: S,
        startTime: B,
        expirationTime: s,
        sortIndex: -1
      }, B > il ? (S.sortIndex = B, U(A, S), H(D) === null && S === H(A) && (El ? (Ol(wl), wl = -1) : El = !0, jl(W, B - il))) : (S.sortIndex = s, U(D, S), w || I || (w = !0, Jl || (Jl = !0, Yl()))), S;
    }, g.unstable_shouldYield = qu, g.unstable_wrapCallback = function(S) {
      var _ = F;
      return function() {
        var B = F;
        F = _;
        try {
          return S.apply(this, arguments);
        } finally {
          F = B;
        }
      };
    };
  }(ni)), ni;
}
var fd;
function Xy() {
  return fd || (fd = 1, ei.exports = Gy()), ei.exports;
}
var fi = { exports: {} }, Xl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function Cy() {
  if (cd) return Xl;
  cd = 1;
  var g = si();
  function U(D) {
    var A = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        A += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return "Minified React error #" + D + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function H() {
  }
  var m = {
    d: {
      f: H,
      r: function() {
        throw Error(U(522));
      },
      D: H,
      C: H,
      L: H,
      m: H,
      X: H,
      S: H,
      M: H
    },
    p: 0,
    findDOMNode: null
  }, ll = Symbol.for("react.portal");
  function cl(D, A, M) {
    var V = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ll,
      key: V == null ? null : "" + V,
      children: D,
      containerInfo: A,
      implementation: M
    };
  }
  var dl = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tl(D, A) {
    if (D === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Xl.createPortal = function(D, A) {
    var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(U(299));
    return cl(D, A, null, M);
  }, Xl.flushSync = function(D) {
    var A = dl.T, M = m.p;
    try {
      if (dl.T = null, m.p = 2, D) return D();
    } finally {
      dl.T = A, m.p = M, m.d.f();
    }
  }, Xl.preconnect = function(D, A) {
    typeof D == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, m.d.C(D, A));
  }, Xl.prefetchDNS = function(D) {
    typeof D == "string" && m.d.D(D);
  }, Xl.preinit = function(D, A) {
    if (typeof D == "string" && A && typeof A.as == "string") {
      var M = A.as, V = tl(M, A.crossOrigin), F = typeof A.integrity == "string" ? A.integrity : void 0, I = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      M === "style" ? m.d.S(
        D,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: V,
          integrity: F,
          fetchPriority: I
        }
      ) : M === "script" && m.d.X(D, {
        crossOrigin: V,
        integrity: F,
        fetchPriority: I,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Xl.preinitModule = function(D, A) {
    if (typeof D == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var M = tl(
            A.as,
            A.crossOrigin
          );
          m.d.M(D, {
            crossOrigin: M,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && m.d.M(D);
  }, Xl.preload = function(D, A) {
    if (typeof D == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var M = A.as, V = tl(M, A.crossOrigin);
      m.d.L(D, M, {
        crossOrigin: V,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Xl.preloadModule = function(D, A) {
    if (typeof D == "string")
      if (A) {
        var M = tl(A.as, A.crossOrigin);
        m.d.m(D, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: M,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else m.d.m(D);
  }, Xl.requestFormReset = function(D) {
    m.d.r(D);
  }, Xl.unstable_batchedUpdates = function(D, A) {
    return D(A);
  }, Xl.useFormState = function(D, A, M) {
    return dl.H.useFormState(D, A, M);
  }, Xl.useFormStatus = function() {
    return dl.H.useHostTransitionStatus();
  }, Xl.version = "19.1.0", Xl;
}
var id;
function Qy() {
  if (id) return fi.exports;
  id = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (U) {
        console.error(U);
      }
  }
  return g(), fi.exports = Cy(), fi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function Zy() {
  if (sd) return ge;
  sd = 1;
  var g = Xy(), U = si(), H = Qy();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ll(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function cl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function tl(l) {
    if (cl(l) !== l)
      throw Error(m(188));
  }
  function D(l) {
    var t = l.alternate;
    if (!t) {
      if (t = cl(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return tl(e), l;
          if (n === a) return tl(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (u.alternate !== a) throw Error(m(190));
    }
    if (u.tag !== 3) throw Error(m(188));
    return u.stateNode.current === u ? l : t;
  }
  function A(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = A(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var M = Object.assign, V = Symbol.for("react.element"), F = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), El = Symbol.for("react.strict_mode"), rl = Symbol.for("react.profiler"), Ml = Symbol.for("react.provider"), Ol = Symbol.for("react.consumer"), Al = Symbol.for("react.context"), vt = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Jl = Symbol.for("react.suspense_list"), wl = Symbol.for("react.memo"), Wl = Symbol.for("react.lazy"), bt = Symbol.for("react.activity"), qu = Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
  function Yl(l) {
    return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var yu = Symbol.for("react.client.reference");
  function vu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === yu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case w:
        return "Fragment";
      case rl:
        return "Profiler";
      case El:
        return "StrictMode";
      case W:
        return "Suspense";
      case Jl:
        return "SuspenseList";
      case bt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case I:
          return "Portal";
        case Al:
          return (l.displayName || "Context") + ".Provider";
        case Ol:
          return (l._context.displayName || "Context") + ".Consumer";
        case vt:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case wl:
          return t = l.displayName || null, t !== null ? t : vu(l.type) || "Memo";
        case Wl:
          t = l._payload, l = l._init;
          try {
            return vu(l(t));
          } catch {
          }
      }
    return null;
  }
  var jl = Array.isArray, S = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, il = [], s = -1;
  function z(l) {
    return { current: l };
  }
  function p(l) {
    0 > s || (l.current = il[s], il[s] = null, s--);
  }
  function O(l, t) {
    s++, il[s] = l.current, l.current = t;
  }
  var q = z(null), k = z(null), X = z(null), kl = z(null);
  function yl(l, t) {
    switch (O(X, t), O(k, l), O(q, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? No(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = No(t), l = xo(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    p(q), O(q, l);
  }
  function Zt() {
    p(q), p(k), p(X);
  }
  function Cn(l) {
    l.memoizedState !== null && O(kl, l);
    var t = q.current, u = xo(t, l.type);
    t !== u && (O(k, l), O(q, u));
  }
  function Se(l) {
    k.current === l && (p(q), p(k)), kl.current === l && (p(kl), re._currentValue = B);
  }
  var Qn = Object.prototype.hasOwnProperty, Zn = g.unstable_scheduleCallback, Vn = g.unstable_cancelCallback, vd = g.unstable_shouldYield, hd = g.unstable_requestPaint, St = g.unstable_now, md = g.unstable_getCurrentPriorityLevel, oi = g.unstable_ImmediatePriority, di = g.unstable_UserBlockingPriority, Ee = g.unstable_NormalPriority, gd = g.unstable_LowPriority, ri = g.unstable_IdlePriority, bd = g.log, Sd = g.unstable_setDisableYieldValue, Ea = null, $l = null;
  function Vt(l) {
    if (typeof bd == "function" && Sd(l), $l && typeof $l.setStrictMode == "function")
      try {
        $l.setStrictMode(Ea, l);
      } catch {
      }
  }
  var Fl = Math.clz32 ? Math.clz32 : Td, Ed = Math.log, Ad = Math.LN2;
  function Td(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ed(l) / Ad | 0) | 0;
  }
  var Ae = 256, Te = 4194304;
  function hu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ze(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = hu(a) : (f &= c, f !== 0 ? e = hu(f) : u || (u = c & ~l, u !== 0 && (e = hu(u))))) : (c = a & ~n, c !== 0 ? e = hu(c) : f !== 0 ? e = hu(f) : u || (u = a & ~l, u !== 0 && (e = hu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Aa(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function zd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yi() {
    var l = Ae;
    return Ae <<= 1, (Ae & 4194048) === 0 && (Ae = 256), l;
  }
  function vi() {
    var l = Te;
    return Te <<= 1, (Te & 62914560) === 0 && (Te = 4194304), l;
  }
  function Ln(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ta(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Od(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var b = 31 - Fl(u), T = 1 << b;
      c[b] = 0, i[b] = -1;
      var v = y[b];
      if (v !== null)
        for (y[b] = null, b = 0; b < v.length; b++) {
          var h = v[b];
          h !== null && (h.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && hi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function hi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Fl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function mi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Fl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Kn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Jn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function gi() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Fo(l.type));
  }
  function _d(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var Lt = Math.random().toString(36).slice(2), Bl = "__reactFiber$" + Lt, Ql = "__reactProps$" + Lt, Yu = "__reactContainer$" + Lt, wn = "__reactEvents$" + Lt, Dd = "__reactListeners$" + Lt, Md = "__reactHandles$" + Lt, bi = "__reactResources$" + Lt, za = "__reactMarker$" + Lt;
  function Wn(l) {
    delete l[Bl], delete l[Ql], delete l[wn], delete l[Dd], delete l[Md];
  }
  function ju(l) {
    var t = l[Bl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Yu] || u[Bl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = jo(l); l !== null; ) {
            if (u = l[Bl]) return u;
            l = jo(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Bu(l) {
    if (l = l[Bl] || l[Yu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Oa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Gu(l) {
    var t = l[bi];
    return t || (t = l[bi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function pl(l) {
    l[za] = !0;
  }
  var Si = /* @__PURE__ */ new Set(), Ei = {};
  function mu(l, t) {
    Xu(l, t), Xu(l + "Capture", t);
  }
  function Xu(l, t) {
    for (Ei[l] = t, l = 0; l < t.length; l++)
      Si.add(t[l]);
  }
  var pd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ai = {}, Ti = {};
  function Rd(l) {
    return Qn.call(Ti, l) ? !0 : Qn.call(Ai, l) ? !1 : pd.test(l) ? Ti[l] = !0 : (Ai[l] = !0, !1);
  }
  function Oe(l, t, u) {
    if (Rd(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function _e(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Dt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var kn, zi;
  function Cu(l) {
    if (kn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        kn = t && t[1] || "", zi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + kn + l + zi;
  }
  var $n = !1;
  function Fn(l, t) {
    if (!l || $n) return "";
    $n = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (h) {
                  var v = h;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (h) {
                  v = h;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                v = h;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (h) {
            if (h && v && typeof h.stack == "string")
              return [h.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), y = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === y.length)
          for (a = i.length - 1, e = y.length - 1; 1 <= a && 0 <= e && i[a] !== y[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== y[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== y[e]) {
                  var b = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      $n = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Cu(u) : "";
  }
  function Ud(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Cu(l.type);
      case 16:
        return Cu("Lazy");
      case 13:
        return Cu("Suspense");
      case 19:
        return Cu("SuspenseList");
      case 0:
      case 15:
        return Fn(l.type, !1);
      case 11:
        return Fn(l.type.render, !1);
      case 1:
        return Fn(l.type, !0);
      case 31:
        return Cu("Activity");
      default:
        return "";
    }
  }
  function Oi(l) {
    try {
      var t = "";
      do
        t += Ud(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function nt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function _i(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Nd(l) {
    var t = _i(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function De(l) {
    l._valueTracker || (l._valueTracker = Nd(l));
  }
  function Di(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = _i(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Me(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var xd = /[\n"\\]/g;
  function ft(l) {
    return l.replace(
      xd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + nt(t)) : l.value !== "" + nt(t) && (l.value = "" + nt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, nt(t)) : u != null ? Pn(l, f, nt(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + nt(c) : l.removeAttribute("name");
  }
  function Mi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + nt(u) : "", t = t != null ? "" + nt(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Pn(l, t, u) {
    t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + nt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pi(l, t, u) {
    if (t != null && (t = "" + nt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + nt(u) : "";
  }
  function Ri(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(m(92));
        if (jl(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = nt(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Zu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Hd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ui(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Hd.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Ni(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Ui(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ui(l, n, t[n]);
  }
  function lf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Yd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pe(l) {
    return Yd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var tf = null;
  function uf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Vu = null, Lu = null;
  function xi(l) {
    var t = Bu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Ql] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ft(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Ql] || null;
                if (!e) throw Error(m(90));
                In(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Di(a);
          }
          break l;
        case "textarea":
          pi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Qu(l, !!u.multiple, t, !1);
      }
    }
  }
  var af = !1;
  function Hi(l, t, u) {
    if (af) return l(t, u);
    af = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (af = !1, (Vu !== null || Lu !== null) && (vn(), Vu && (t = Vu, l = Lu, Lu = Vu = null, xi(t), l)))
        for (t = 0; t < l.length; t++) xi(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Ql] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        m(231, t, typeof u)
      );
    return u;
  }
  var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = !1;
  if (Mt)
    try {
      var Da = {};
      Object.defineProperty(Da, "passive", {
        get: function() {
          ef = !0;
        }
      }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
    } catch {
      ef = !1;
    }
  var Kt = null, nf = null, Re = null;
  function qi() {
    if (Re) return Re;
    var l, t = nf, u = t.length, a, e = "value" in Kt ? Kt.value : Kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Re = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ue(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Yi() {
    return !1;
  }
  function Zl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Yi, this.isPropagationStopped = Yi, this;
    }
    return M(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
    }), t;
  }
  var gu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, xe = Zl(gu), Ma = M({}, gu, { view: 0, detail: 0 }), jd = Zl(Ma), ff, cf, pa, He = M({}, Ma, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: of,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== pa && (pa && l.type === "mousemove" ? (ff = l.screenX - pa.screenX, cf = l.screenY - pa.screenY) : cf = ff = 0, pa = l), ff);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cf;
    }
  }), ji = Zl(He), Bd = M({}, He, { dataTransfer: 0 }), Gd = Zl(Bd), Xd = M({}, Ma, { relatedTarget: 0 }), sf = Zl(Xd), Cd = M({}, gu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qd = Zl(Cd), Zd = M({}, gu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Vd = Zl(Zd), Ld = M({}, gu, { data: 0 }), Bi = Zl(Ld), Kd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Wd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = wd[l]) ? !!t[l] : !1;
  }
  function of() {
    return Wd;
  }
  var kd = M({}, Ma, {
    key: function(l) {
      if (l.key) {
        var t = Kd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: of,
    charCode: function(l) {
      return l.type === "keypress" ? Ue(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), $d = Zl(kd), Fd = M({}, He, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Gi = Zl(Fd), Id = M({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: of
  }), Pd = Zl(Id), lr = M({}, gu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tr = Zl(lr), ur = M({}, He, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ar = Zl(ur), er = M({}, gu, {
    newState: 0,
    oldState: 0
  }), nr = Zl(er), fr = [9, 13, 27, 32], df = Mt && "CompositionEvent" in window, Ra = null;
  Mt && "documentMode" in document && (Ra = document.documentMode);
  var cr = Mt && "TextEvent" in window && !Ra, Xi = Mt && (!df || Ra && 8 < Ra && 11 >= Ra), Ci = " ", Qi = !1;
  function Zi(l, t) {
    switch (l) {
      case "keyup":
        return fr.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ku = !1;
  function ir(l, t) {
    switch (l) {
      case "compositionend":
        return Vi(t);
      case "keypress":
        return t.which !== 32 ? null : (Qi = !0, Ci);
      case "textInput":
        return l = t.data, l === Ci && Qi ? null : l;
      default:
        return null;
    }
  }
  function sr(l, t) {
    if (Ku)
      return l === "compositionend" || !df && Zi(l, t) ? (l = qi(), Re = nf = Kt = null, Ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Xi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var or = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Li(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!or[l.type] : t === "textarea";
  }
  function Ki(l, t, u, a) {
    Vu ? Lu ? Lu.push(a) : Lu = [a] : Vu = a, t = En(t, "onChange"), 0 < t.length && (u = new xe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Na = null;
  function dr(l) {
    Do(l, 0);
  }
  function qe(l) {
    var t = Oa(l);
    if (Di(t)) return l;
  }
  function Ji(l, t) {
    if (l === "change") return t;
  }
  var wi = !1;
  if (Mt) {
    var rf;
    if (Mt) {
      var yf = "oninput" in document;
      if (!yf) {
        var Wi = document.createElement("div");
        Wi.setAttribute("oninput", "return;"), yf = typeof Wi.oninput == "function";
      }
      rf = yf;
    } else rf = !1;
    wi = rf && (!document.documentMode || 9 < document.documentMode);
  }
  function ki() {
    Ua && (Ua.detachEvent("onpropertychange", $i), Na = Ua = null);
  }
  function $i(l) {
    if (l.propertyName === "value" && qe(Na)) {
      var t = [];
      Ki(
        t,
        Na,
        l,
        uf(l)
      ), Hi(dr, t);
    }
  }
  function rr(l, t, u) {
    l === "focusin" ? (ki(), Ua = t, Na = u, Ua.attachEvent("onpropertychange", $i)) : l === "focusout" && ki();
  }
  function yr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qe(Na);
  }
  function vr(l, t) {
    if (l === "click") return qe(t);
  }
  function hr(l, t) {
    if (l === "input" || l === "change")
      return qe(t);
  }
  function mr(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Il = typeof Object.is == "function" ? Object.is : mr;
  function xa(l, t) {
    if (Il(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Qn.call(t, e) || !Il(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Fi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ii(l, t) {
    var u = Fi(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Fi(u);
    }
  }
  function Pi(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pi(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ls(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function vf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var gr = Mt && "documentMode" in document && 11 >= document.documentMode, Ju = null, hf = null, Ha = null, mf = !1;
  function ts(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    mf || Ju == null || Ju !== Me(a) || (a = Ju, "selectionStart" in a && vf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ha && xa(Ha, a) || (Ha = a, a = En(hf, "onSelect"), 0 < a.length && (t = new xe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ju)));
  }
  function bu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var wu = {
    animationend: bu("Animation", "AnimationEnd"),
    animationiteration: bu("Animation", "AnimationIteration"),
    animationstart: bu("Animation", "AnimationStart"),
    transitionrun: bu("Transition", "TransitionRun"),
    transitionstart: bu("Transition", "TransitionStart"),
    transitioncancel: bu("Transition", "TransitionCancel"),
    transitionend: bu("Transition", "TransitionEnd")
  }, gf = {}, us = {};
  Mt && (us = document.createElement("div").style, "AnimationEvent" in window || (delete wu.animationend.animation, delete wu.animationiteration.animation, delete wu.animationstart.animation), "TransitionEvent" in window || delete wu.transitionend.transition);
  function Su(l) {
    if (gf[l]) return gf[l];
    if (!wu[l]) return l;
    var t = wu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in us)
        return gf[l] = t[u];
    return l;
  }
  var as = Su("animationend"), es = Su("animationiteration"), ns = Su("animationstart"), br = Su("transitionrun"), Sr = Su("transitionstart"), Er = Su("transitioncancel"), fs = Su("transitionend"), cs = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bf.push("scrollEnd");
  function ht(l, t) {
    cs.set(l, t), mu(t, [l]);
  }
  var is = /* @__PURE__ */ new WeakMap();
  function ct(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = is.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Oi(t)
      }, is.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Oi(t)
    };
  }
  var it = [], Wu = 0, Sf = 0;
  function Ye() {
    for (var l = Wu, t = Sf = Wu = 0; t < l; ) {
      var u = it[t];
      it[t++] = null;
      var a = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var n = it[t];
      if (it[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && ss(u, e, n);
    }
  }
  function je(l, t, u, a) {
    it[Wu++] = l, it[Wu++] = t, it[Wu++] = u, it[Wu++] = a, Sf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ef(l, t, u, a) {
    return je(l, t, u, a), Be(l);
  }
  function ku(l, t) {
    return je(l, null, null, t), Be(l);
  }
  function ss(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Fl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Be(l) {
    if (50 < ee)
      throw ee = 0, Dc = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $u = {};
  function Ar(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pl(l, t, u, a) {
    return new Ar(l, t, u, a);
  }
  function Af(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function pt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Pl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function os(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ge(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Af(l) && (f = 1);
    else if (typeof l == "string")
      f = zy(
        l,
        u,
        q.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case bt:
          return l = Pl(31, u, t, e), l.elementType = bt, l.lanes = n, l;
        case w:
          return Eu(u.children, e, n, t);
        case El:
          f = 8, e |= 24;
          break;
        case rl:
          return l = Pl(12, u, t, e | 2), l.elementType = rl, l.lanes = n, l;
        case W:
          return l = Pl(13, u, t, e), l.elementType = W, l.lanes = n, l;
        case Jl:
          return l = Pl(19, u, t, e), l.elementType = Jl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ml:
              case Al:
                f = 10;
                break l;
              case Ol:
                f = 9;
                break l;
              case vt:
                f = 11;
                break l;
              case wl:
                f = 14;
                break l;
              case Wl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Pl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Eu(l, t, u, a) {
    return l = Pl(7, l, a, t), l.lanes = u, l;
  }
  function Tf(l, t, u) {
    return l = Pl(6, l, null, t), l.lanes = u, l;
  }
  function zf(l, t, u) {
    return t = Pl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Fu = [], Iu = 0, Xe = null, Ce = 0, st = [], ot = 0, Au = null, Rt = 1, Ut = "";
  function Tu(l, t) {
    Fu[Iu++] = Ce, Fu[Iu++] = Xe, Xe = l, Ce = t;
  }
  function ds(l, t, u) {
    st[ot++] = Rt, st[ot++] = Ut, st[ot++] = Au, Au = l;
    var a = Rt;
    l = Ut;
    var e = 32 - Fl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Fl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Rt = 1 << 32 - Fl(t) + e | u << e | a, Ut = n + l;
    } else
      Rt = 1 << n | u << e | a, Ut = l;
  }
  function Of(l) {
    l.return !== null && (Tu(l, 1), ds(l, 1, 0));
  }
  function _f(l) {
    for (; l === Xe; )
      Xe = Fu[--Iu], Fu[Iu] = null, Ce = Fu[--Iu], Fu[Iu] = null;
    for (; l === Au; )
      Au = st[--ot], st[ot] = null, Ut = st[--ot], st[ot] = null, Rt = st[--ot], st[ot] = null;
  }
  var Cl = null, ml = null, P = !1, zu = null, Et = !1, Df = Error(m(519));
  function Ou(l) {
    var t = Error(m(418, ""));
    throw ja(ct(t, l)), Df;
  }
  function rs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Bl] = l, t[Ql] = a, u) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++)
          K(fe[u], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t), Mi(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), De(t);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Ri(t, a.value, a.defaultValue, a.children), De(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Uo(t.textContent, u) ? (a.popover != null && (K("beforetoggle", t), K("toggle", t)), a.onScroll != null && K("scroll", t), a.onScrollEnd != null && K("scrollend", t), a.onClick != null && (t.onclick = An), t = !0) : t = !1, t || Ou(l);
  }
  function ys(l) {
    for (Cl = l.return; Cl; )
      switch (Cl.tag) {
        case 5:
        case 13:
          Et = !1;
          return;
        case 27:
        case 3:
          Et = !0;
          return;
        default:
          Cl = Cl.return;
      }
  }
  function qa(l) {
    if (l !== Cl) return !1;
    if (!P) return ys(l), P = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Zc(l.type, l.memoizedProps)), u = !u), u && ml && Ou(l), ys(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                ml = gt(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        ml = null;
      }
    } else
      t === 27 ? (t = ml, cu(l.type) ? (l = Jc, Jc = null, ml = l) : ml = t) : ml = Cl ? gt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ya() {
    ml = Cl = null, P = !1;
  }
  function vs() {
    var l = zu;
    return l !== null && (Kl === null ? Kl = l : Kl.push.apply(
      Kl,
      l
    ), zu = null), l;
  }
  function ja(l) {
    zu === null ? zu = [l] : zu.push(l);
  }
  var Mf = z(null), _u = null, Nt = null;
  function Jt(l, t, u) {
    O(Mf, t._currentValue), t._currentValue = u;
  }
  function xt(l) {
    l._currentValue = Mf.current, p(Mf);
  }
  function pf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Rf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), pf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), pf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Ba(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(m(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Il(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === kl.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(re) : l = [re]);
      }
      e = e.return;
    }
    l !== null && Rf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Qe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Du(l) {
    _u = l, Nt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return hs(_u, l);
  }
  function Ze(l, t) {
    return _u === null && Du(l), hs(l, t);
  }
  function hs(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Nt === null) {
      if (l === null) throw Error(m(308));
      Nt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Nt = Nt.next = t;
    return u;
  }
  var Tr = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, zr = g.unstable_scheduleCallback, Or = g.unstable_NormalPriority, _l = {
    $$typeof: Al,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Uf() {
    return {
      controller: new Tr(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ga(l) {
    l.refCount--, l.refCount === 0 && zr(Or, function() {
      l.controller.abort();
    });
  }
  var Xa = null, Nf = 0, Pu = 0, la = null;
  function _r(l, t) {
    if (Xa === null) {
      var u = Xa = [];
      Nf = 0, Pu = Hc(), la = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Nf++, t.then(ms, ms), t;
  }
  function ms() {
    if (--Nf === 0 && Xa !== null) {
      la !== null && (la.status = "fulfilled");
      var l = Xa;
      Xa = null, Pu = 0, la = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Dr(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var gs = S.S;
  S.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && _r(l, t), gs !== null && gs(l, t);
  };
  var Mu = z(null);
  function xf() {
    var l = Mu.current;
    return l !== null ? l : ol.pooledCache;
  }
  function Ve(l, t) {
    t === null ? O(Mu, Mu.current) : O(Mu, t.pool);
  }
  function bs() {
    var l = xf();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var Ca = Error(m(460)), Ss = Error(m(474)), Le = Error(m(542)), Hf = { then: function() {
  } };
  function Es(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ke() {
  }
  function As(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ke, Ke), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, zs(l), l;
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (l = ol, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, zs(l), l;
        }
        throw Qa = t, Ca;
    }
  }
  var Qa = null;
  function Ts() {
    if (Qa === null) throw Error(m(459));
    var l = Qa;
    return Qa = null, l;
  }
  function zs(l) {
    if (l === Ca || l === Le)
      throw Error(m(483));
  }
  var wt = !1;
  function qf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function kt(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ul & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Be(l), ss(l, null, u), t;
    }
    return je(l, a, t, u), Be(l);
  }
  function Za(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, mi(l, u);
    }
  }
  function jf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Bf = !1;
  function Va() {
    if (Bf) {
      var l = la;
      if (l !== null) throw l;
    }
  }
  function La(l, t, u, a) {
    Bf = !1;
    var e = l.updateQueue;
    wt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, y = i.next;
      i.next = null, f === null ? n = y : f.next = y, f = i;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== f && (c === null ? b.firstBaseUpdate = y : c.next = y, b.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, b = y = i = null, c = n;
      do {
        var v = c.lane & -536870913, h = v !== c.lane;
        if (h ? (J & v) === v : (a & v) === v) {
          v !== 0 && v === Pu && (Bf = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var G = l, Y = c;
            v = t;
            var fl = u;
            switch (Y.tag) {
              case 1:
                if (G = Y.payload, typeof G == "function") {
                  T = G.call(fl, T, v);
                  break l;
                }
                T = G;
                break l;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = Y.payload, v = typeof G == "function" ? G.call(fl, T, v) : G, v == null) break l;
                T = M({}, T, v);
                break l;
              case 2:
                wt = !0;
            }
          }
          v = c.callback, v !== null && (l.flags |= 64, h && (l.flags |= 8192), h = e.callbacks, h === null ? e.callbacks = [v] : h.push(v));
        } else
          h = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, b === null ? (y = b = h, i = T) : b = b.next = h, f |= v;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          h = c, c = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        }
      } while (!0);
      b === null && (i = T), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = b, n === null && (e.shared.lanes = 0), au |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function Os(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function _s(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Os(u[l], t);
  }
  var ta = z(null), Je = z(0);
  function Ds(l, t) {
    l = Xt, O(Je, l), O(ta, t), Xt = l | t.baseLanes;
  }
  function Gf() {
    O(Je, Xt), O(ta, ta.current);
  }
  function Xf() {
    Xt = Je.current, p(ta), p(Je);
  }
  var $t = 0, Q = null, el = null, Tl = null, we = !1, ua = !1, pu = !1, We = 0, Ka = 0, aa = null, Mr = 0;
  function bl() {
    throw Error(m(321));
  }
  function Cf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Il(l[u], t[u])) return !1;
    return !0;
  }
  function Qf(l, t, u, a, e, n) {
    return $t = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? s0 : o0, pu = !1, n = u(a, e), pu = !1, ua && (n = ps(
      t,
      u,
      a,
      e
    )), Ms(l), n;
  }
  function Ms(l) {
    S.H = ln;
    var t = el !== null && el.next !== null;
    if ($t = 0, Tl = el = Q = null, we = !1, Ka = 0, aa = null, t) throw Error(m(300));
    l === null || Rl || (l = l.dependencies, l !== null && Qe(l) && (Rl = !0));
  }
  function ps(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if (ua && (aa = null), Ka = 0, ua = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Tl = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = qr, n = t(u, a);
    } while (ua);
    return n;
  }
  function pr() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ja(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Zf() {
    var l = We !== 0;
    return We = 0, l;
  }
  function Vf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Lf(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      we = !1;
    }
    $t = 0, Tl = el = Q = null, ua = !1, Ka = We = 0, aa = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tl === null ? Q.memoizedState = Tl = l : Tl = Tl.next = l, Tl;
  }
  function zl() {
    if (el === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = Tl === null ? Q.memoizedState : Tl.next;
    if (t !== null)
      Tl = t, el = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(m(467)) : Error(m(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, Tl === null ? Q.memoizedState = Tl = l : Tl = Tl.next = l;
    }
    return Tl;
  }
  function Kf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ja(l) {
    var t = Ka;
    return Ka += 1, aa === null && (aa = []), l = As(aa, l, t), t = Q, (Tl === null ? t.memoizedState : Tl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? s0 : o0), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ja(l);
      if (l.$$typeof === Al) return Gl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Jf(l) {
    var t = null, u = Q.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Kf(), Q.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = qu;
    return t.index++, u;
  }
  function Ht(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = zl();
    return wf(t, el, l);
  }
  function wf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, y = t, b = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (J & T) === T : ($t & T) === T) {
          var v = y.revertLane;
          if (v === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), T === Pu && (b = !0);
          else if (($t & v) === v) {
            y = y.next, v === Pu && (b = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, Q.lanes |= v, au |= v;
          T = y.action, pu && u(n, T), n = y.hasEagerState ? y.eagerState : u(n, T);
        } else
          v = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = v, f = n) : i = i.next = v, Q.lanes |= T, au |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !Il(n, l.memoizedState) && (Rl = !0, b && (u = la, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Wf(l) {
    var t = zl(), u = t.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Il(n, t.memoizedState) || (Rl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Rs(l, t, u) {
    var a = Q, e = zl(), n = P;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !Il(
      (el || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Rl = !0), e = e.queue;
    var c = xs.bind(null, a, e, l);
    if (wa(2048, 8, c, [l]), e.getSnapshot !== t || f || Tl !== null && Tl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ea(
        9,
        Fe(),
        Ns.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), ol === null) throw Error(m(349));
      n || ($t & 124) !== 0 || Us(a, t, u);
    }
    return u;
  }
  function Us(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Q.updateQueue, t === null ? (t = Kf(), Q.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Ns(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Hs(t) && qs(l);
  }
  function xs(l, t, u) {
    return u(function() {
      Hs(t) && qs(l);
    });
  }
  function Hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Il(l, u);
    } catch {
      return !0;
    }
  }
  function qs(l) {
    var t = ku(l, 2);
    t !== null && et(t, l, 2);
  }
  function kf(l) {
    var t = Vl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), pu) {
        Vt(!0);
        try {
          u();
        } finally {
          Vt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ht,
      lastRenderedState: l
    }, t;
  }
  function Ys(l, t, u, a) {
    return l.baseState = u, wf(
      l,
      el,
      typeof a == "function" ? a : Ht
    );
  }
  function Rr(l, t, u, a, e) {
    if (Pe(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      S.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, js(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function js(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var c = u(e, a), i = S.S;
        i !== null && i(f, c), Bs(l, t, c);
      } catch (y) {
        $f(l, t, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        n = u(e, a), Bs(l, t, n);
      } catch (y) {
        $f(l, t, y);
      }
  }
  function Bs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Gs(l, t, a);
      },
      function(a) {
        return $f(l, t, a);
      }
    ) : Gs(l, t, u);
  }
  function Gs(l, t, u) {
    t.status = "fulfilled", t.value = u, Xs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, js(l, u)));
  }
  function $f(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Xs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Xs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Cs(l, t) {
    return t;
  }
  function Qs(l, t) {
    if (P) {
      var u = ol.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (P) {
            if (ml) {
              t: {
                for (var e = ml, n = Et; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = gt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                ml = gt(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Vl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cs,
      lastRenderedState: t
    }, u.queue = a, u = f0.bind(
      null,
      Q,
      a
    ), a.dispatch = u, a = kf(!1), n = tc.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = Vl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Rr.bind(
      null,
      Q,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Zs(l) {
    var t = zl();
    return Vs(t, el, l);
  }
  function Vs(l, t, u) {
    if (t = wf(
      l,
      t,
      Cs
    )[0], l = $e(Ht)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ja(t);
      } catch (f) {
        throw f === Ca ? Le : f;
      }
    else a = t;
    t = zl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Q.flags |= 2048, ea(
      9,
      Fe(),
      Ur.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Ur(l, t) {
    l.action = t;
  }
  function Ls(l) {
    var t = zl(), u = el;
    if (u !== null)
      return Vs(t, u, l);
    zl(), t = t.memoizedState, u = zl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ea(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = Kf(), Q.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ks() {
    return zl().memoizedState;
  }
  function Ie(l, t, u, a) {
    var e = Vl();
    a = a === void 0 ? null : a, Q.flags |= l, e.memoizedState = ea(
      1 | t,
      Fe(),
      u,
      a
    );
  }
  function wa(l, t, u, a) {
    var e = zl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    el !== null && a !== null && Cf(a, el.memoizedState.deps) ? e.memoizedState = ea(t, n, u, a) : (Q.flags |= l, e.memoizedState = ea(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Js(l, t) {
    Ie(8390656, 8, l, t);
  }
  function ws(l, t) {
    wa(2048, 8, l, t);
  }
  function Ws(l, t) {
    return wa(4, 2, l, t);
  }
  function ks(l, t) {
    return wa(4, 4, l, t);
  }
  function $s(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Fs(l, t, u) {
    u = u != null ? u.concat([l]) : null, wa(4, 4, $s.bind(null, t, l), u);
  }
  function Ff() {
  }
  function Is(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Cf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Ps(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Cf(t, a[1]))
      return a[0];
    if (a = l(), pu) {
      Vt(!0);
      try {
        l();
      } finally {
        Vt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function If(l, t, u) {
    return u === void 0 || ($t & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = uo(), Q.lanes |= l, au |= l, u);
  }
  function l0(l, t, u, a) {
    return Il(u, t) ? u : ta.current !== null ? (l = If(l, u, a), Il(l, t) || (Rl = !0), l) : ($t & 42) === 0 ? (Rl = !0, l.memoizedState = u) : (l = uo(), Q.lanes |= l, au |= l, t);
  }
  function t0(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, tc(l, !1, t, u);
    try {
      var i = e(), y = S.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var b = Dr(
          i,
          a
        );
        Wa(
          l,
          t,
          b,
          at(l)
        );
      } else
        Wa(
          l,
          t,
          a,
          at(l)
        );
    } catch (T) {
      Wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        at()
      );
    } finally {
      _.p = n, S.T = f;
    }
  }
  function Nr() {
  }
  function Pf(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = u0(l).queue;
    t0(
      l,
      e,
      t,
      B,
      u === null ? Nr : function() {
        return a0(l), u(a);
      }
    );
  }
  function u0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: B
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function a0(l) {
    var t = u0(l).next.queue;
    Wa(l, t, {}, at());
  }
  function lc() {
    return Gl(re);
  }
  function e0() {
    return zl().memoizedState;
  }
  function n0() {
    return zl().memoizedState;
  }
  function xr(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = at();
          l = Wt(u);
          var a = kt(t, l, u);
          a !== null && (et(a, t, u), Za(a, t, u)), t = { cache: Uf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Hr(l, t, u) {
    var a = at();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l) ? c0(t, u) : (u = Ef(l, t, u, a), u !== null && (et(u, l, a), i0(u, t, a)));
  }
  function f0(l, t, u) {
    var a = at();
    Wa(l, t, u, a);
  }
  function Wa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pe(l)) c0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Il(c, f))
            return je(l, t, e, 0), ol === null && Ye(), !1;
        } catch {
        } finally {
        }
      if (u = Ef(l, t, e, a), u !== null)
        return et(u, l, a), i0(u, t, a), !0;
    }
    return !1;
  }
  function tc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Hc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l)) {
      if (t) throw Error(m(479));
    } else
      t = Ef(
        l,
        u,
        a,
        2
      ), t !== null && et(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function c0(l, t) {
    ua = we = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function i0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, mi(l, u);
    }
  }
  var ln = {
    readContext: Gl,
    use: ke,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl
  }, s0 = {
    readContext: Gl,
    use: ke,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: Js,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Ie(
        4194308,
        4,
        $s.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Ie(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Ie(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Vl();
      t = t === void 0 ? null : t;
      var a = l();
      if (pu) {
        Vt(!0);
        try {
          l();
        } finally {
          Vt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Vl();
      if (u !== void 0) {
        var e = u(t);
        if (pu) {
          Vt(!0);
          try {
            u(t);
          } finally {
            Vt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Hr.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, u = f0.bind(null, Q, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ff,
    useDeferredValue: function(l, t) {
      var u = Vl();
      return If(u, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = t0.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Q, e = Vl();
      if (P) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), ol === null)
          throw Error(m(349));
        (J & 124) !== 0 || Us(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Js(xs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ea(
        9,
        Fe(),
        Ns.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Vl(), t = ol.identifierPrefix;
      if (P) {
        var u = Ut, a = Rt;
        u = (a & ~(1 << 32 - Fl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = We++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Mr++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: lc,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function(l) {
      var t = Vl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = tc.bind(
        null,
        Q,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Jf,
    useCacheRefresh: function() {
      return Vl().memoizedState = xr.bind(
        null,
        Q
      );
    }
  }, o0 = {
    readContext: Gl,
    use: ke,
    useCallback: Is,
    useContext: Gl,
    useEffect: ws,
    useImperativeHandle: Fs,
    useInsertionEffect: Ws,
    useLayoutEffect: ks,
    useMemo: Ps,
    useReducer: $e,
    useRef: Ks,
    useState: function() {
      return $e(Ht);
    },
    useDebugValue: Ff,
    useDeferredValue: function(l, t) {
      var u = zl();
      return l0(
        u,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $e(Ht)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ja(l),
        t
      ];
    },
    useSyncExternalStore: Rs,
    useId: e0,
    useHostTransitionStatus: lc,
    useFormState: Zs,
    useActionState: Zs,
    useOptimistic: function(l, t) {
      var u = zl();
      return Ys(u, el, l, t);
    },
    useMemoCache: Jf,
    useCacheRefresh: n0
  }, qr = {
    readContext: Gl,
    use: ke,
    useCallback: Is,
    useContext: Gl,
    useEffect: ws,
    useImperativeHandle: Fs,
    useInsertionEffect: Ws,
    useLayoutEffect: ks,
    useMemo: Ps,
    useReducer: Wf,
    useRef: Ks,
    useState: function() {
      return Wf(Ht);
    },
    useDebugValue: Ff,
    useDeferredValue: function(l, t) {
      var u = zl();
      return el === null ? If(u, l, t) : l0(
        u,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wf(Ht)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ja(l),
        t
      ];
    },
    useSyncExternalStore: Rs,
    useId: e0,
    useHostTransitionStatus: lc,
    useFormState: Ls,
    useActionState: Ls,
    useOptimistic: function(l, t) {
      var u = zl();
      return el !== null ? Ys(u, el, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Jf,
    useCacheRefresh: n0
  }, na = null, ka = 0;
  function tn(l) {
    var t = ka;
    return ka += 1, na === null && (na = []), As(na, l, t);
  }
  function $a(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === V ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function d0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function r0(l) {
    function t(d, o) {
      if (l) {
        var r = d.deletions;
        r === null ? (d.deletions = [o], d.flags |= 16) : r.push(o);
      }
    }
    function u(d, o) {
      if (!l) return null;
      for (; o !== null; )
        t(d, o), o = o.sibling;
      return null;
    }
    function a(d) {
      for (var o = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), d = d.sibling;
      return o;
    }
    function e(d, o) {
      return d = pt(d, o), d.index = 0, d.sibling = null, d;
    }
    function n(d, o, r) {
      return d.index = r, l ? (r = d.alternate, r !== null ? (r = r.index, r < o ? (d.flags |= 67108866, o) : r) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, o, r, E) {
      return o === null || o.tag !== 6 ? (o = Tf(r, d.mode, E), o.return = d, o) : (o = e(o, r), o.return = d, o);
    }
    function i(d, o, r, E) {
      var R = r.type;
      return R === w ? b(
        d,
        o,
        r.props.children,
        E,
        r.key
      ) : o !== null && (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Wl && d0(R) === o.type) ? (o = e(o, r.props), $a(o, r), o.return = d, o) : (o = Ge(
        r.type,
        r.key,
        r.props,
        null,
        d.mode,
        E
      ), $a(o, r), o.return = d, o);
    }
    function y(d, o, r, E) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== r.containerInfo || o.stateNode.implementation !== r.implementation ? (o = zf(r, d.mode, E), o.return = d, o) : (o = e(o, r.children || []), o.return = d, o);
    }
    function b(d, o, r, E, R) {
      return o === null || o.tag !== 7 ? (o = Eu(
        r,
        d.mode,
        E,
        R
      ), o.return = d, o) : (o = e(o, r), o.return = d, o);
    }
    function T(d, o, r) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Tf(
          "" + o,
          d.mode,
          r
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case F:
            return r = Ge(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              r
            ), $a(r, o), r.return = d, r;
          case I:
            return o = zf(
              o,
              d.mode,
              r
            ), o.return = d, o;
          case Wl:
            var E = o._init;
            return o = E(o._payload), T(d, o, r);
        }
        if (jl(o) || Yl(o))
          return o = Eu(
            o,
            d.mode,
            r,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return T(d, tn(o), r);
        if (o.$$typeof === Al)
          return T(
            d,
            Ze(d, o),
            r
          );
        un(d, o);
      }
      return null;
    }
    function v(d, o, r, E) {
      var R = o !== null ? o.key : null;
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return R !== null ? null : c(d, o, "" + r, E);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case F:
            return r.key === R ? i(d, o, r, E) : null;
          case I:
            return r.key === R ? y(d, o, r, E) : null;
          case Wl:
            return R = r._init, r = R(r._payload), v(d, o, r, E);
        }
        if (jl(r) || Yl(r))
          return R !== null ? null : b(d, o, r, E, null);
        if (typeof r.then == "function")
          return v(
            d,
            o,
            tn(r),
            E
          );
        if (r.$$typeof === Al)
          return v(
            d,
            o,
            Ze(d, r),
            E
          );
        un(d, r);
      }
      return null;
    }
    function h(d, o, r, E, R) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return d = d.get(r) || null, c(o, d, "" + E, R);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case F:
            return d = d.get(
              E.key === null ? r : E.key
            ) || null, i(o, d, E, R);
          case I:
            return d = d.get(
              E.key === null ? r : E.key
            ) || null, y(o, d, E, R);
          case Wl:
            var Z = E._init;
            return E = Z(E._payload), h(
              d,
              o,
              r,
              E,
              R
            );
        }
        if (jl(E) || Yl(E))
          return d = d.get(r) || null, b(o, d, E, R, null);
        if (typeof E.then == "function")
          return h(
            d,
            o,
            r,
            tn(E),
            R
          );
        if (E.$$typeof === Al)
          return h(
            d,
            o,
            r,
            Ze(o, E),
            R
          );
        un(o, E);
      }
      return null;
    }
    function G(d, o, r, E) {
      for (var R = null, Z = null, N = o, j = o = 0, Nl = null; N !== null && j < r.length; j++) {
        N.index > j ? (Nl = N, N = null) : Nl = N.sibling;
        var $ = v(
          d,
          N,
          r[j],
          E
        );
        if ($ === null) {
          N === null && (N = Nl);
          break;
        }
        l && N && $.alternate === null && t(d, N), o = n($, o, j), Z === null ? R = $ : Z.sibling = $, Z = $, N = Nl;
      }
      if (j === r.length)
        return u(d, N), P && Tu(d, j), R;
      if (N === null) {
        for (; j < r.length; j++)
          N = T(d, r[j], E), N !== null && (o = n(
            N,
            o,
            j
          ), Z === null ? R = N : Z.sibling = N, Z = N);
        return P && Tu(d, j), R;
      }
      for (N = a(N); j < r.length; j++)
        Nl = h(
          N,
          d,
          j,
          r[j],
          E
        ), Nl !== null && (l && Nl.alternate !== null && N.delete(
          Nl.key === null ? j : Nl.key
        ), o = n(
          Nl,
          o,
          j
        ), Z === null ? R = Nl : Z.sibling = Nl, Z = Nl);
      return l && N.forEach(function(ru) {
        return t(d, ru);
      }), P && Tu(d, j), R;
    }
    function Y(d, o, r, E) {
      if (r == null) throw Error(m(151));
      for (var R = null, Z = null, N = o, j = o = 0, Nl = null, $ = r.next(); N !== null && !$.done; j++, $ = r.next()) {
        N.index > j ? (Nl = N, N = null) : Nl = N.sibling;
        var ru = v(d, N, $.value, E);
        if (ru === null) {
          N === null && (N = Nl);
          break;
        }
        l && N && ru.alternate === null && t(d, N), o = n(ru, o, j), Z === null ? R = ru : Z.sibling = ru, Z = ru, N = Nl;
      }
      if ($.done)
        return u(d, N), P && Tu(d, j), R;
      if (N === null) {
        for (; !$.done; j++, $ = r.next())
          $ = T(d, $.value, E), $ !== null && (o = n($, o, j), Z === null ? R = $ : Z.sibling = $, Z = $);
        return P && Tu(d, j), R;
      }
      for (N = a(N); !$.done; j++, $ = r.next())
        $ = h(N, d, j, $.value, E), $ !== null && (l && $.alternate !== null && N.delete($.key === null ? j : $.key), o = n($, o, j), Z === null ? R = $ : Z.sibling = $, Z = $);
      return l && N.forEach(function(Yy) {
        return t(d, Yy);
      }), P && Tu(d, j), R;
    }
    function fl(d, o, r, E) {
      if (typeof r == "object" && r !== null && r.type === w && r.key === null && (r = r.props.children), typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case F:
            l: {
              for (var R = r.key; o !== null; ) {
                if (o.key === R) {
                  if (R = r.type, R === w) {
                    if (o.tag === 7) {
                      u(
                        d,
                        o.sibling
                      ), E = e(
                        o,
                        r.props.children
                      ), E.return = d, d = E;
                      break l;
                    }
                  } else if (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Wl && d0(R) === o.type) {
                    u(
                      d,
                      o.sibling
                    ), E = e(o, r.props), $a(E, r), E.return = d, d = E;
                    break l;
                  }
                  u(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              r.type === w ? (E = Eu(
                r.props.children,
                d.mode,
                E,
                r.key
              ), E.return = d, d = E) : (E = Ge(
                r.type,
                r.key,
                r.props,
                null,
                d.mode,
                E
              ), $a(E, r), E.return = d, d = E);
            }
            return f(d);
          case I:
            l: {
              for (R = r.key; o !== null; ) {
                if (o.key === R)
                  if (o.tag === 4 && o.stateNode.containerInfo === r.containerInfo && o.stateNode.implementation === r.implementation) {
                    u(
                      d,
                      o.sibling
                    ), E = e(o, r.children || []), E.return = d, d = E;
                    break l;
                  } else {
                    u(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              E = zf(r, d.mode, E), E.return = d, d = E;
            }
            return f(d);
          case Wl:
            return R = r._init, r = R(r._payload), fl(
              d,
              o,
              r,
              E
            );
        }
        if (jl(r))
          return G(
            d,
            o,
            r,
            E
          );
        if (Yl(r)) {
          if (R = Yl(r), typeof R != "function") throw Error(m(150));
          return r = R.call(r), Y(
            d,
            o,
            r,
            E
          );
        }
        if (typeof r.then == "function")
          return fl(
            d,
            o,
            tn(r),
            E
          );
        if (r.$$typeof === Al)
          return fl(
            d,
            o,
            Ze(d, r),
            E
          );
        un(d, r);
      }
      return typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint" ? (r = "" + r, o !== null && o.tag === 6 ? (u(d, o.sibling), E = e(o, r), E.return = d, d = E) : (u(d, o), E = Tf(r, d.mode, E), E.return = d, d = E), f(d)) : u(d, o);
    }
    return function(d, o, r, E) {
      try {
        ka = 0;
        var R = fl(
          d,
          o,
          r,
          E
        );
        return na = null, R;
      } catch (N) {
        if (N === Ca || N === Le) throw N;
        var Z = Pl(29, N, null, d.mode);
        return Z.lanes = E, Z.return = d, Z;
      } finally {
      }
    };
  }
  var fa = r0(!0), y0 = r0(!1), dt = z(null), At = null;
  function Ft(l) {
    var t = l.alternate;
    O(Dl, Dl.current & 1), O(dt, l), At === null && (t === null || ta.current !== null || t.memoizedState !== null) && (At = l);
  }
  function v0(l) {
    if (l.tag === 22) {
      if (O(Dl, Dl.current), O(dt, l), At === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (At = l);
      }
    } else It();
  }
  function It() {
    O(Dl, Dl.current), O(dt, dt.current);
  }
  function qt(l) {
    p(dt), At === l && (At = null), p(Dl);
  }
  var Dl = z(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Kc(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function uc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : M({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ac = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = at(), e = Wt(a);
      e.payload = t, u != null && (e.callback = u), t = kt(l, e, a), t !== null && (et(t, l, a), Za(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = at(), e = Wt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = kt(l, e, a), t !== null && (et(t, l, a), Za(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = at(), a = Wt(u);
      a.tag = 2, t != null && (a.callback = t), t = kt(l, a, u), t !== null && (et(t, l, u), Za(t, l, u));
    }
  };
  function h0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !xa(u, a) || !xa(e, n) : !0;
  }
  function m0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && ac.enqueueReplaceState(t, t.state, null);
  }
  function Ru(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = M({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var en = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function g0(l) {
    en(l);
  }
  function b0(l) {
    console.error(l);
  }
  function S0(l) {
    en(l);
  }
  function nn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function E0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ec(l, t, u) {
    return u = Wt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nn(l, t);
    }, u;
  }
  function A0(l) {
    return l = Wt(l), l.tag = 3, l;
  }
  function T0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        E0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      E0(t, u, a), typeof e != "function" && (eu === null ? eu = /* @__PURE__ */ new Set([this]) : eu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Yr(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Ba(
        t,
        u,
        e,
        !0
      ), u = dt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return At === null ? pc() : u.alternate === null && gl === 0 && (gl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Hf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Uc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Hf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Uc(l, a, e)), !1;
        }
        throw Error(m(435, u.tag));
      }
      return Uc(l, a, e), pc(), !1;
    }
    if (P)
      return t = dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Df && (l = Error(m(422), { cause: a }), ja(ct(l, u)))) : (a !== Df && (t = Error(m(423), {
        cause: a
      }), ja(
        ct(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = ct(a, u), e = ec(
        l.stateNode,
        a,
        e
      ), jf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = ct(n, u), ae === null ? ae = [n] : ae.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    a = ct(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ec(u.stateNode, a, l), jf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (eu === null || !eu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = A0(e), T0(
              e,
              l,
              u,
              a
            ), jf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var z0 = Error(m(461)), Rl = !1;
  function xl(l, t, u, a) {
    t.child = l === null ? y0(t, null, u, a) : fa(
      t,
      l.child,
      u,
      a
    );
  }
  function O0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Du(t), a = Qf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Zf(), l !== null && !Rl ? (Vf(l, t, e), Yt(l, t, e)) : (P && c && Of(t), t.flags |= 1, xl(l, t, a, e), t.child);
  }
  function _0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Af(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, D0(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ge(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !rc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : xa, u(f, a) && l.ref === t.ref)
        return Yt(l, t, e);
    }
    return t.flags |= 1, l = pt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function D0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (xa(n, a) && l.ref === t.ref)
        if (Rl = !1, t.pendingProps = a = n, rc(l, e))
          (l.flags & 131072) !== 0 && (Rl = !0);
        else
          return t.lanes = l.lanes, Yt(l, t, e);
    }
    return nc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function M0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return p0(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ve(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ds(t, n) : Gf(), v0(t);
      else
        return t.lanes = t.childLanes = 536870912, p0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ve(t, n.cachePool), Ds(t, n), It(), t.memoizedState = null) : (l !== null && Ve(t, null), Gf(), It());
    return xl(l, t, e, u), t.child;
  }
  function p0(l, t, u, a) {
    var e = xf();
    return e = e === null ? null : { parent: _l._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ve(t, null), Gf(), v0(t), l !== null && Ba(l, t, a, !0), null;
  }
  function fn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(m(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function nc(l, t, u, a, e) {
    return Du(t), u = Qf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Zf(), l !== null && !Rl ? (Vf(l, t, e), Yt(l, t, e)) : (P && a && Of(t), t.flags |= 1, xl(l, t, u, e), t.child);
  }
  function R0(l, t, u, a, e, n) {
    return Du(t), t.updateQueue = null, u = ps(
      t,
      a,
      u,
      e
    ), Ms(l), a = Zf(), l !== null && !Rl ? (Vf(l, t, n), Yt(l, t, n)) : (P && a && Of(t), t.flags |= 1, xl(l, t, u, n), t.child);
  }
  function U0(l, t, u, a, e) {
    if (Du(t), t.stateNode === null) {
      var n = $u, f = u.contextType;
      typeof f == "object" && f !== null && (n = Gl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ac, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, qf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Gl(f) : $u, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (uc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && ac.enqueueReplaceState(n, n.state, null), La(t, a, n, e), Va(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ru(u, c);
      n.props = i;
      var y = n.context, b = u.contextType;
      f = $u, typeof b == "object" && b !== null && (f = Gl(b));
      var T = u.getDerivedStateFromProps;
      b = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && m0(
        t,
        n,
        a,
        f
      ), wt = !1;
      var v = t.memoizedState;
      n.state = v, La(t, a, n, e), Va(), y = t.memoizedState, c || v !== y || wt ? (typeof T == "function" && (uc(
        t,
        u,
        T,
        a
      ), y = t.memoizedState), (i = wt || h0(
        t,
        u,
        i,
        a,
        v,
        y,
        f
      )) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, b = Ru(u, f), n.props = b, T = t.pendingProps, v = n.context, y = u.contextType, i = $u, typeof y == "object" && y !== null && (i = Gl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || v !== i) && m0(
        t,
        n,
        a,
        i
      ), wt = !1, v = t.memoizedState, n.state = v, La(t, a, n, e), Va();
      var h = t.memoizedState;
      f !== T || v !== h || wt || l !== null && l.dependencies !== null && Qe(l.dependencies) ? (typeof c == "function" && (uc(
        t,
        u,
        c,
        a
      ), h = t.memoizedState), (b = wt || h0(
        t,
        u,
        b,
        a,
        v,
        h,
        i
      ) || l !== null && l.dependencies !== null && Qe(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, h, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        h,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = i, a = b) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, fn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = fa(
      t,
      l.child,
      null,
      e
    ), t.child = fa(
      t,
      null,
      u,
      e
    )) : xl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Yt(
      l,
      t,
      e
    ), l;
  }
  function N0(l, t, u, a) {
    return Ya(), t.flags |= 256, xl(l, t, u, a), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cc(l) {
    return { baseLanes: l, cachePool: bs() };
  }
  function ic(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= rt), l;
  }
  function x0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (P) {
        if (e ? Ft(t) : It(), P) {
          var c = ml, i;
          if (i = c) {
            l: {
              for (i = c, c = Et; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = gt(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Au !== null ? { id: Rt, overflow: Ut } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = Pl(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Cl = t, ml = null, i = !0) : i = !1;
          }
          i || Ou(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Kc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        qt(t);
      }
      return c = a.children, a = a.fallback, e ? (It(), e = t.mode, c = cn(
        { mode: "hidden", children: c },
        e
      ), a = Eu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = cc(u), e.childLanes = ic(
        l,
        f,
        u
      ), t.memoizedState = fc, a) : (Ft(t), sc(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Ft(t), t.flags &= -257, t = oc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (It(), t.child = l.child, t.flags |= 128, t = null) : (It(), e = a.fallback, c = t.mode, a = cn(
          { mode: "visible", children: a.children },
          c
        ), e = Eu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, fa(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = cc(u), a.childLanes = ic(
          l,
          f,
          u
        ), t.memoizedState = fc, t = e);
      else if (Ft(t), Kc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, a = Error(m(419)), a.stack = "", a.digest = f, ja({ value: a, source: null, stack: null }), t = oc(
          l,
          t,
          u
        );
      } else if (Rl || Ba(l, t, u, !1), f = (u & l.childLanes) !== 0, Rl || f) {
        if (f = ol, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Kn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), et(f, l, a), z0;
        c.data === "$?" || pc(), t = oc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, ml = gt(
          c.nextSibling
        ), Cl = t, P = !0, zu = null, Et = !1, l !== null && (st[ot++] = Rt, st[ot++] = Ut, st[ot++] = Au, Rt = l.id, Ut = l.overflow, Au = t), t = sc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (It(), e = a.fallback, c = t.mode, i = l.child, y = i.sibling, a = pt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = pt(y, e) : (e = Eu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = cc(u) : (i = c.cachePool, i !== null ? (y = _l._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = bs(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = ic(
      l,
      f,
      u
    ), t.memoizedState = fc, a) : (Ft(t), u = l.child, l = u.sibling, u = pt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function sc(l, t) {
    return t = cn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function cn(l, t) {
    return l = Pl(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function oc(l, t, u) {
    return fa(t, l.child, null, u), l = sc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function H0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), pf(l.return, t, u);
  }
  function dc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function q0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (xl(l, t, a.children, u), a = Dl.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && H0(l, u, t);
          else if (l.tag === 19)
            H0(l, u, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      a &= 1;
    }
    switch (O(Dl, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && an(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), dc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && an(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        dc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        dc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), au |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (Ba(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, u = pt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = pt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function rc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Qe(l)));
  }
  function jr(l, t, u) {
    switch (t.tag) {
      case 3:
        yl(t, t.stateNode.containerInfo), Jt(t, _l, l.memoizedState.cache), Ya();
        break;
      case 27:
      case 5:
        Cn(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ft(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? x0(l, t, u) : (Ft(t), l = Yt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Ft(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (Ba(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return q0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(Dl, Dl.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, M0(l, t, u);
      case 24:
        Jt(t, _l, l.memoizedState.cache);
    }
    return Yt(l, t, u);
  }
  function Y0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Rl = !0;
      else {
        if (!rc(l, u) && (t.flags & 128) === 0)
          return Rl = !1, jr(
            l,
            t,
            u
          );
        Rl = (l.flags & 131072) !== 0;
      }
    else
      Rl = !1, P && (t.flags & 1048576) !== 0 && ds(t, Ce, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            Af(a) ? (l = Ru(a, l), t.tag = 1, t = U0(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = nc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === vt) {
                t.tag = 11, t = O0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === wl) {
                t.tag = 14, t = _0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = vu(a) || a, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return nc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Ru(
          a,
          t.pendingProps
        ), U0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), La(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Jt(t, _l, a), a !== n.cache && Rf(
            t,
            [_l],
            u,
            !0
          ), Va(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = N0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = ct(
                Error(m(424)),
                t
              ), ja(e), t = N0(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ml = gt(l.firstChild), Cl = t, P = !0, zu = null, Et = !0, u = y0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ya(), a === e) {
              t = Yt(
                l,
                t,
                u
              );
              break l;
            }
            xl(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return fn(l, t), l === null ? (u = Co(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : P || (u = t.type, l = t.pendingProps, a = Tn(
          X.current
        ).createElement(u), a[Bl] = t, a[Ql] = l, ql(a, u, l), pl(a), t.stateNode = a) : t.memoizedState = Co(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Cn(t), l === null && P && (a = t.stateNode = Bo(
          t.type,
          t.pendingProps,
          X.current
        ), Cl = t, Et = !0, e = ml, cu(t.type) ? (Jc = e, ml = gt(
          a.firstChild
        )) : ml = e), xl(
          l,
          t,
          t.pendingProps.children,
          u
        ), fn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && P && ((e = a = ml) && (a = oy(
          a,
          t.type,
          t.pendingProps,
          Et
        ), a !== null ? (t.stateNode = a, Cl = t, ml = gt(
          a.firstChild
        ), Et = !1, e = !0) : e = !1), e || Ou(t)), Cn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Zc(e, n) ? a = null : f !== null && Zc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Qf(
          l,
          t,
          pr,
          null,
          null,
          u
        ), re._currentValue = e), fn(l, t), xl(l, t, a, u), t.child;
      case 6:
        return l === null && P && ((l = u = ml) && (u = dy(
          u,
          t.pendingProps,
          Et
        ), u !== null ? (t.stateNode = u, Cl = t, ml = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return x0(l, t, u);
      case 4:
        return yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = fa(
          t,
          null,
          a,
          u
        ) : xl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return O0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return xl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return xl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return xl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Jt(t, t.type, a.value), xl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Du(t), e = Gl(e), a = a(e), t.flags |= 1, xl(l, t, a, u), t.child;
      case 14:
        return _0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return D0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return q0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = pt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return M0(l, t, u);
      case 24:
        return Du(t), a = Gl(_l), l === null ? (e = xf(), e === null && (e = ol, n = Uf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, qf(t), Jt(t, _l, e)) : ((l.lanes & u) !== 0 && (Yf(l, t), La(t, null, null, u), Va()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Jt(t, _l, a)) : (a = n.cache, Jt(t, _l, a), a !== e.cache && Rf(
          t,
          [_l],
          u,
          !0
        ))), xl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function jt(l) {
    l.flags |= 4;
  }
  function j0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Ko(t)) {
      if (t = dt.current, t !== null && ((J & 4194048) === J ? At !== null : (J & 62914560) !== J && (J & 536870912) === 0 || t !== At))
        throw Qa = Hf, Ss;
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vi() : 536870912, l.lanes |= t, oa |= t);
  }
  function Fa(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function hl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Br(l, t, u) {
    var a = t.pendingProps;
    switch (_f(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return hl(t), null;
      case 1:
        return hl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(_l), Zt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? jt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vs())), hl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (jt(t), u !== null ? (hl(t), j0(t, u)) : (hl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (jt(t), hl(t), j0(t, u)) : (hl(t), t.flags &= -16777217) : (l.memoizedProps !== a && jt(t), hl(t), t.flags &= -16777217), null;
      case 27:
        Se(t), u = X.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && jt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return hl(t), null;
          }
          l = q.current, qa(t) ? rs(t) : (l = Bo(e, a, u), t.stateNode = l, jt(t));
        }
        return hl(t), null;
      case 5:
        if (Se(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && jt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return hl(t), null;
          }
          if (l = q.current, qa(t))
            rs(t);
          else {
            switch (e = Tn(
              X.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[Bl] = t, l[Ql] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (ql(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && jt(t);
          }
        }
        return hl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && jt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = X.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Cl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Bl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Uo(l.nodeValue, u)), l || Ou(t);
          } else
            l = Tn(l).createTextNode(
              a
            ), l[Bl] = t, t.stateNode = l;
        }
        return hl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Bl] = t;
            } else
              Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            hl(t), e = !1;
          } else
            e = vs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        if (qt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), hl(t), null;
      case 4:
        return Zt(), l === null && Bc(t.stateNode.containerInfo), hl(t), null;
      case 10:
        return xt(t.type), hl(t), null;
      case 19:
        if (p(Dl), e = t.memoizedState, e === null) return hl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) Fa(e, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, Fa(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    os(u, l), u = u.sibling;
                  return O(
                    Dl,
                    Dl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && St() > rn && (t.flags |= 128, a = !0, Fa(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), Fa(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !P)
                return hl(t), null;
            } else
              2 * St() - e.renderingStartTime > rn && u !== 536870912 && (t.flags |= 128, a = !0, Fa(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = St(), t.sibling = null, l = Dl.current, O(Dl, a ? l & 1 | 2 : l & 1), t) : (hl(t), null);
      case 22:
      case 23:
        return qt(t), Xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && p(Mu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(_l), hl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Gr(l, t) {
    switch (_f(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(_l), Zt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (qt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Ya();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return p(Dl), null;
      case 4:
        return Zt(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return qt(t), Xf(), l !== null && p(Mu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function B0(l, t) {
    switch (_f(t), t.tag) {
      case 3:
        xt(_l), Zt();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Zt();
        break;
      case 13:
        qt(t);
        break;
      case 19:
        p(Dl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        qt(t), Xf(), l !== null && p(Mu);
        break;
      case 24:
        xt(_l);
    }
  }
  function Ia(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      sl(t, t.return, c);
    }
  }
  function Pt(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, y = c;
              try {
                y();
              } catch (b) {
                sl(
                  e,
                  i,
                  b
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (b) {
      sl(t, t.return, b);
    }
  }
  function G0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        _s(t, u);
      } catch (a) {
        sl(l, l.return, a);
      }
    }
  }
  function X0(l, t, u) {
    u.props = Ru(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      sl(l, t, a);
    }
  }
  function Pa(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      sl(l, t, e);
    }
  }
  function Tt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          sl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          sl(l, t, e);
        }
      else u.current = null;
  }
  function C0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      sl(l, l.return, e);
    }
  }
  function yc(l, t, u) {
    try {
      var a = l.stateNode;
      ny(a, l.type, u, t), a[Ql] = t;
    } catch (e) {
      sl(l, l.return, e);
    }
  }
  function Q0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && cu(l.type) || l.tag === 4;
  }
  function vc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Q0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && cu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = An));
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (hc(l, t, u), l = l.sibling; l !== null; )
        hc(l, t, u), l = l.sibling;
  }
  function on(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (on(l, t, u), l = l.sibling; l !== null; )
        on(l, t, u), l = l.sibling;
  }
  function Z0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      ql(t, a, u), t[Bl] = l, t[Ql] = u;
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var Bt = !1, Sl = !1, mc = !1, V0 = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function Xr(l, t) {
    if (l = l.containerInfo, Cc = pn, l = ls(l), vf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, y = 0, b = 0, T = l, v = null;
            t: for (; ; ) {
              for (var h; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (h = T.firstChild) !== null; )
                v = T, T = h;
              for (; ; ) {
                if (T === l) break t;
                if (v === u && ++y === e && (c = f), v === n && ++b === a && (i = f), (h = T.nextSibling) !== null) break;
                T = v, v = T.parentNode;
              }
              T = h;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Qc = { focusedElem: l, selectionRange: u }, pn = !1, Ul = t; Ul !== null; )
      if (t = Ul, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (t = Ul, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var G = Ru(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    G,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Y) {
                  sl(
                    u,
                    u.return,
                    Y
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Lc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ul = l;
            break;
          }
          Ul = t.return;
        }
  }
  function L0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        lu(l, u), a & 4 && Ia(5, u);
        break;
      case 1:
        if (lu(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              sl(u, u.return, f);
            }
          else {
            var e = Ru(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              sl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && G0(u), a & 512 && Pa(u, u.return);
        break;
      case 3:
        if (lu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            _s(l, t);
          } catch (f) {
            sl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Z0(u);
      case 26:
      case 5:
        lu(l, u), t === null && a & 4 && C0(u), a & 512 && Pa(u, u.return);
        break;
      case 12:
        lu(l, u);
        break;
      case 13:
        lu(l, u), a & 4 && w0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Wr.bind(
          null,
          u
        ), ry(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Bt, !a) {
          t = t !== null && t.memoizedState !== null || Sl, e = Bt;
          var n = Sl;
          Bt = a, (Sl = t) && !n ? tu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : lu(l, u), Bt = e, Sl = n;
        }
        break;
      case 30:
        break;
      default:
        lu(l, u);
    }
  }
  function K0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, K0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Wn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var vl = null, Ll = !1;
  function Gt(l, t, u) {
    for (u = u.child; u !== null; )
      J0(l, t, u), u = u.sibling;
  }
  function J0(l, t, u) {
    if ($l && typeof $l.onCommitFiberUnmount == "function")
      try {
        $l.onCommitFiberUnmount(Ea, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Tt(u, t), Gt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Tt(u, t);
        var a = vl, e = Ll;
        cu(u.type) && (vl = u.stateNode, Ll = !1), Gt(
          l,
          t,
          u
        ), ie(u.stateNode), vl = a, Ll = e;
        break;
      case 5:
        Sl || Tt(u, t);
      case 6:
        if (a = vl, e = Ll, vl = null, Gt(
          l,
          t,
          u
        ), vl = a, Ll = e, vl !== null)
          if (Ll)
            try {
              (vl.nodeType === 9 ? vl.body : vl.nodeName === "HTML" ? vl.ownerDocument.body : vl).removeChild(u.stateNode);
            } catch (n) {
              sl(
                u,
                t,
                n
              );
            }
          else
            try {
              vl.removeChild(u.stateNode);
            } catch (n) {
              sl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        vl !== null && (Ll ? (l = vl, Yo(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), me(l)) : Yo(vl, u.stateNode));
        break;
      case 4:
        a = vl, e = Ll, vl = u.stateNode.containerInfo, Ll = !0, Gt(
          l,
          t,
          u
        ), vl = a, Ll = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sl || Pt(2, u, t), Sl || Pt(4, u, t), Gt(
          l,
          t,
          u
        );
        break;
      case 1:
        Sl || (Tt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && X0(
          u,
          t,
          a
        )), Gt(
          l,
          t,
          u
        );
        break;
      case 21:
        Gt(
          l,
          t,
          u
        );
        break;
      case 22:
        Sl = (a = Sl) || u.memoizedState !== null, Gt(
          l,
          t,
          u
        ), Sl = a;
        break;
      default:
        Gt(
          l,
          t,
          u
        );
    }
  }
  function w0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        me(l);
      } catch (u) {
        sl(t, t.return, u);
      }
  }
  function Cr(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new V0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new V0()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function gc(l, t) {
    var u = Cr(l);
    t.forEach(function(a) {
      var e = kr.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function lt(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (cu(c.type)) {
                vl = c.stateNode, Ll = !1;
                break l;
              }
              break;
            case 5:
              vl = c.stateNode, Ll = !1;
              break l;
            case 3:
            case 4:
              vl = c.stateNode.containerInfo, Ll = !0;
              break l;
          }
          c = c.return;
        }
        if (vl === null) throw Error(m(160));
        J0(n, f, e), vl = null, Ll = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        W0(t, l), t = t.sibling;
  }
  var mt = null;
  function W0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l), tt(l), a & 4 && (Pt(3, l, l.return), Ia(3, l), Pt(5, l, l.return));
        break;
      case 1:
        lt(t, l), tt(l), a & 512 && (Sl || u === null || Tt(u, u.return)), a & 64 && Bt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = mt;
        if (lt(t, l), tt(l), a & 512 && (Sl || u === null || Tt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[za] || n[Bl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), ql(n, a, u), n[Bl] = l, pl(n), a = n;
                      break l;
                    case "link":
                      var f = Vo(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), ql(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Vo(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), ql(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  n[Bl] = l, pl(n), a = n;
                }
                l.stateNode = a;
              } else
                Lo(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Zo(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Lo(
              e,
              l.type,
              l.stateNode
            ) : Zo(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && yc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        lt(t, l), tt(l), a & 512 && (Sl || u === null || Tt(u, u.return)), u !== null && a & 4 && yc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (lt(t, l), tt(l), a & 512 && (Sl || u === null || Tt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Zu(e, "");
          } catch (h) {
            sl(l, l.return, h);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, yc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (mc = !0);
        break;
      case 6:
        if (lt(t, l), tt(l), a & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (h) {
            sl(l, l.return, h);
          }
        }
        break;
      case 3:
        if (_n = null, e = mt, mt = zn(t.containerInfo), lt(t, l), mt = e, tt(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            me(t.containerInfo);
          } catch (h) {
            sl(l, l.return, h);
          }
        mc && (mc = !1, k0(l));
        break;
      case 4:
        a = mt, mt = zn(
          l.stateNode.containerInfo
        ), lt(t, l), tt(l), mt = a;
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 13:
        lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (zc = St()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, gc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Bt, b = Sl;
        if (Bt = y || e, Sl = b || i, lt(t, l), Sl = b, Bt = y, tt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Bt || Sl || Uu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, v = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (h) {
                  sl(i, i.return, h);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (h) {
                  sl(i, i.return, h);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, gc(l, u))));
        break;
      case 19:
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, gc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, l), tt(l);
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Q0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = vc(l);
            on(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Zu(f, ""), u.flags &= -33);
            var c = vc(l);
            on(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = vc(l);
            hc(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (b) {
        sl(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function k0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        k0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function lu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        L0(l, t.alternate, t), t = t.sibling;
  }
  function Uu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), Uu(t);
          break;
        case 1:
          Tt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && X0(
            t,
            t.return,
            u
          ), Uu(t);
          break;
        case 27:
          ie(t.stateNode);
        case 26:
        case 5:
          Tt(t, t.return), Uu(t);
          break;
        case 22:
          t.memoizedState === null && Uu(t);
          break;
        case 30:
          Uu(t);
          break;
        default:
          Uu(t);
      }
      l = l.sibling;
    }
  }
  function tu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          tu(
            e,
            n,
            u
          ), Ia(4, n);
          break;
        case 1:
          if (tu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              sl(a, a.return, y);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Os(i[e], c);
            } catch (y) {
              sl(a, a.return, y);
            }
          }
          u && f & 64 && G0(n), Pa(n, n.return);
          break;
        case 27:
          Z0(n);
        case 26:
        case 5:
          tu(
            e,
            n,
            u
          ), u && a === null && f & 4 && C0(n), Pa(n, n.return);
          break;
        case 12:
          tu(
            e,
            n,
            u
          );
          break;
        case 13:
          tu(
            e,
            n,
            u
          ), u && f & 4 && w0(e, n);
          break;
        case 22:
          n.memoizedState === null && tu(
            e,
            n,
            u
          ), Pa(n, n.return);
          break;
        case 30:
          break;
        default:
          tu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function bc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ga(u));
  }
  function Sc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l));
  }
  function zt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $0(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function $0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && Ia(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            sl(t, t.return, i);
          }
        } else
          zt(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : le(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ca(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && bc(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && Sc(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ca(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            n,
            f,
            c,
            i,
            e
          ), Ia(8, f);
          break;
        case 23:
          break;
        case 22:
          var b = f.stateNode;
          f.memoizedState !== null ? b._visibility & 2 ? ca(
            n,
            f,
            c,
            i,
            e
          ) : le(
            n,
            f
          ) : (b._visibility |= 2, ca(
            n,
            f,
            c,
            i,
            e
          )), e && y & 2048 && bc(
            f.alternate,
            f
          );
          break;
        case 24:
          ca(
            n,
            f,
            c,
            i,
            e
          ), e && y & 2048 && Sc(f.alternate, f);
          break;
        default:
          ca(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function le(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            le(u, a), e & 2048 && bc(
              a.alternate,
              a
            );
            break;
          case 24:
            le(u, a), e & 2048 && Sc(a.alternate, a);
            break;
          default:
            le(u, a);
        }
        t = t.sibling;
      }
  }
  var te = 8192;
  function ia(l) {
    if (l.subtreeFlags & te)
      for (l = l.child; l !== null; )
        F0(l), l = l.sibling;
  }
  function F0(l) {
    switch (l.tag) {
      case 26:
        ia(l), l.flags & te && l.memoizedState !== null && _y(
          mt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ia(l);
        break;
      case 3:
      case 4:
        var t = mt;
        mt = zn(l.stateNode.containerInfo), ia(l), mt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = te, te = 16777216, ia(l), te = t) : ia(l));
        break;
      default:
        ia(l);
    }
  }
  function I0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ue(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ul = a, lo(
            a,
            l
          );
        }
      I0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        P0(l), l = l.sibling;
  }
  function P0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ue(l), l.flags & 2048 && Pt(9, l, l.return);
        break;
      case 3:
        ue(l);
        break;
      case 12:
        ue(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, dn(l)) : ue(l);
        break;
      default:
        ue(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ul = a, lo(
            a,
            l
          );
        }
      I0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), dn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function lo(l, t) {
    for (; Ul !== null; ) {
      var u = Ul;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ga(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ul = a;
      else
        l: for (u = l; Ul !== null; ) {
          a = Ul;
          var e = a.sibling, n = a.return;
          if (K0(a), a === u) {
            Ul = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ul = e;
            break l;
          }
          Ul = n;
        }
    }
  }
  var Qr = {
    getCacheForType: function(l) {
      var t = Gl(_l), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Zr = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, ol = null, L = null, J = 0, al = 0, ut = null, uu = !1, sa = !1, Ec = !1, Xt = 0, gl = 0, au = 0, Nu = 0, Ac = 0, rt = 0, oa = 0, ae = null, Kl = null, Tc = !1, zc = 0, rn = 1 / 0, yn = null, eu = null, Hl = 0, nu = null, da = null, ra = 0, Oc = 0, _c = null, to = null, ee = 0, Dc = null;
  function at() {
    if ((ul & 2) !== 0 && J !== 0)
      return J & -J;
    if (S.T !== null) {
      var l = Pu;
      return l !== 0 ? l : Hc();
    }
    return gi();
  }
  function uo() {
    rt === 0 && (rt = (J & 536870912) === 0 || P ? yi() : 536870912);
    var l = dt.current;
    return l !== null && (l.flags |= 32), rt;
  }
  function et(l, t, u) {
    (l === ol && (al === 2 || al === 9) || l.cancelPendingCommit !== null) && (ya(l, 0), fu(
      l,
      J,
      rt,
      !1
    )), Ta(l, u), ((ul & 2) === 0 || l !== ol) && (l === ol && ((ul & 2) === 0 && (Nu |= u), gl === 4 && fu(
      l,
      J,
      rt,
      !1
    )), Ot(l));
  }
  function ao(l, t, u) {
    if ((ul & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Aa(l, t), e = a ? Kr(l, t) : Rc(l, t, !0), n = a;
    do {
      if (e === 0) {
        sa && !a && fu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Vr(u)) {
          e = Rc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ae;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ya(c, f).flags |= 256), f = Rc(
                c,
                f,
                !1
              ), f !== 2) {
                if (Ec && !i) {
                  c.errorRecoveryDisabledLanes |= n, Nu |= n, e = 4;
                  break l;
                }
                n = Kl, Kl = e, n !== null && (Kl === null ? Kl = n : Kl.push.apply(
                  Kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ya(l, 0), fu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              fu(
                a,
                t,
                rt,
                !uu
              );
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = zc + 300 - St(), 10 < e)) {
            if (fu(
              a,
              t,
              rt,
              !uu
            ), ze(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Ho(
              eo.bind(
                null,
                a,
                u,
                Kl,
                yn,
                Tc,
                t,
                rt,
                Nu,
                oa,
                uu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          eo(
            a,
            u,
            Kl,
            yn,
            Tc,
            t,
            rt,
            Nu,
            oa,
            uu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function eo(l, t, u, a, e, n, f, c, i, y, b, T, v, h) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: Oy }, F0(t), T = Dy(), T !== null)) {
      l.cancelPendingCommit = T(
        ro.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          b,
          1,
          v,
          h
        )
      ), fu(l, n, f, !y);
      return;
    }
    ro(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function Vr(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Il(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function fu(l, t, u, a) {
    t &= ~Ac, t &= ~Nu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Fl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && hi(l, u, t);
  }
  function vn() {
    return (ul & 6) === 0 ? (ne(0), !1) : !0;
  }
  function Mc() {
    if (L !== null) {
      if (al === 0)
        var l = L.return;
      else
        l = L, Nt = _u = null, Lf(l), na = null, ka = 0, l = L;
      for (; l !== null; )
        B0(l.alternate, l), l = l.return;
      L = null;
    }
  }
  function ya(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, cy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Mc(), ol = l, L = u = pt(l.current, null), J = t, al = 0, ut = null, uu = !1, sa = Aa(l, t), Ec = !1, oa = rt = Ac = Nu = au = gl = 0, Kl = ae = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Fl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Xt = t, Ye(), u;
  }
  function no(l, t) {
    Q = null, S.H = ln, t === Ca || t === Le ? (t = Ts(), al = 3) : t === Ss ? (t = Ts(), al = 4) : al = t === z0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, L === null && (gl = 1, nn(
      l,
      ct(t, l.current)
    ));
  }
  function fo() {
    var l = S.H;
    return S.H = ln, l === null ? ln : l;
  }
  function co() {
    var l = S.A;
    return S.A = Qr, l;
  }
  function pc() {
    gl = 4, uu || (J & 4194048) !== J && dt.current !== null || (sa = !0), (au & 134217727) === 0 && (Nu & 134217727) === 0 || ol === null || fu(
      ol,
      J,
      rt,
      !1
    );
  }
  function Rc(l, t, u) {
    var a = ul;
    ul |= 2;
    var e = fo(), n = co();
    (ol !== l || J !== t) && (yn = null, ya(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (al !== 0 && L !== null) {
          var c = L, i = ut;
          switch (al) {
            case 8:
              Mc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              dt.current === null && (t = !0);
              var y = al;
              if (al = 0, ut = null, va(l, c, i, y), u && sa) {
                f = 0;
                break l;
              }
              break;
            default:
              y = al, al = 0, ut = null, va(l, c, i, y);
          }
        }
        Lr(), f = gl;
        break;
      } catch (b) {
        no(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Nt = _u = null, ul = a, S.H = e, S.A = n, L === null && (ol = null, J = 0, Ye()), f;
  }
  function Lr() {
    for (; L !== null; ) io(L);
  }
  function Kr(l, t) {
    var u = ul;
    ul |= 2;
    var a = fo(), e = co();
    ol !== l || J !== t ? (yn = null, rn = St() + 500, ya(l, t)) : sa = Aa(
      l,
      t
    );
    l: do
      try {
        if (al !== 0 && L !== null) {
          t = L;
          var n = ut;
          t: switch (al) {
            case 1:
              al = 0, ut = null, va(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Es(n)) {
                al = 0, ut = null, so(t);
                break;
              }
              t = function() {
                al !== 2 && al !== 9 || ol !== l || (al = 7), Ot(l);
              }, n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              Es(n) ? (al = 0, ut = null, so(t)) : (al = 0, ut = null, va(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (L.tag) {
                case 26:
                  f = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (!f || Ko(f)) {
                    al = 0, ut = null;
                    var i = c.sibling;
                    if (i !== null) L = i;
                    else {
                      var y = c.return;
                      y !== null ? (L = y, hn(y)) : L = null;
                    }
                    break t;
                  }
              }
              al = 0, ut = null, va(l, t, n, 5);
              break;
            case 6:
              al = 0, ut = null, va(l, t, n, 6);
              break;
            case 8:
              Mc(), gl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Jr();
        break;
      } catch (b) {
        no(l, b);
      }
    while (!0);
    return Nt = _u = null, S.H = a, S.A = e, ul = u, L !== null ? 0 : (ol = null, J = 0, Ye(), gl);
  }
  function Jr() {
    for (; L !== null && !vd(); )
      io(L);
  }
  function io(l) {
    var t = Y0(l.alternate, l, Xt);
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : L = t;
  }
  function so(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = R0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          J
        );
        break;
      case 11:
        t = R0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          J
        );
        break;
      case 5:
        Lf(t);
      default:
        B0(u, t), t = L = os(t, Xt), t = Y0(u, t, Xt);
    }
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : L = t;
  }
  function va(l, t, u, a) {
    Nt = _u = null, Lf(t), na = null, ka = 0;
    var e = t.return;
    try {
      if (Yr(
        l,
        e,
        t,
        u,
        J
      )) {
        gl = 1, nn(
          l,
          ct(u, l.current)
        ), L = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw L = e, n;
      gl = 1, nn(
        l,
        ct(u, l.current)
      ), L = null;
      return;
    }
    t.flags & 32768 ? (P || a === 1 ? l = !0 : sa || (J & 536870912) !== 0 ? l = !1 : (uu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = dt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), oo(t, l)) : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        oo(
          t,
          uu
        );
        return;
      }
      l = t.return;
      var u = Br(
        t.alternate,
        t,
        Xt
      );
      if (u !== null) {
        L = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function oo(l, t) {
    do {
      var u = Gr(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, L = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        L = l;
        return;
      }
      L = l = u;
    } while (l !== null);
    gl = 6, L = null;
  }
  function ro(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      mn();
    while (Hl !== 0);
    if ((ul & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= Sf, Od(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === ol && (L = ol = null, J = 0), da = t, nu = l, ra = u, Oc = n, _c = e, to = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, $r(Ee, function() {
        return go(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, e = _.p, _.p = 2, f = ul, ul |= 4;
        try {
          Xr(l, t, u);
        } finally {
          ul = f, _.p = e, S.T = a;
        }
      }
      Hl = 1, yo(), vo(), ho();
    }
  }
  function yo() {
    if (Hl === 1) {
      Hl = 0;
      var l = nu, t = da, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null;
        var a = _.p;
        _.p = 2;
        var e = ul;
        ul |= 4;
        try {
          W0(t, l);
          var n = Qc, f = ls(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Pi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && vf(c)) {
              var y = i.start, b = i.end;
              if (b === void 0 && (b = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  b,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, v = T && T.defaultView || window;
                if (v.getSelection) {
                  var h = v.getSelection(), G = c.textContent.length, Y = Math.min(i.start, G), fl = i.end === void 0 ? Y : Math.min(i.end, G);
                  !h.extend && Y > fl && (f = fl, fl = Y, Y = f);
                  var d = Ii(
                    c,
                    Y
                  ), o = Ii(
                    c,
                    fl
                  );
                  if (d && o && (h.rangeCount !== 1 || h.anchorNode !== d.node || h.anchorOffset !== d.offset || h.focusNode !== o.node || h.focusOffset !== o.offset)) {
                    var r = T.createRange();
                    r.setStart(d.node, d.offset), h.removeAllRanges(), Y > fl ? (h.addRange(r), h.extend(o.node, o.offset)) : (r.setEnd(o.node, o.offset), h.addRange(r));
                  }
                }
              }
            }
            for (T = [], h = c; h = h.parentNode; )
              h.nodeType === 1 && T.push({
                element: h,
                left: h.scrollLeft,
                top: h.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var E = T[c];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          pn = !!Cc, Qc = Cc = null;
        } finally {
          ul = e, _.p = a, S.T = u;
        }
      }
      l.current = t, Hl = 2;
    }
  }
  function vo() {
    if (Hl === 2) {
      Hl = 0;
      var l = nu, t = da, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = S.T, S.T = null;
        var a = _.p;
        _.p = 2;
        var e = ul;
        ul |= 4;
        try {
          L0(l, t.alternate, t);
        } finally {
          ul = e, _.p = a, S.T = u;
        }
      }
      Hl = 3;
    }
  }
  function ho() {
    if (Hl === 4 || Hl === 3) {
      Hl = 0, hd();
      var l = nu, t = da, u = ra, a = to;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Hl = 5 : (Hl = 0, da = nu = null, mo(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (eu = null), Jn(u), t = t.stateNode, $l && typeof $l.onCommitFiberRoot == "function")
        try {
          $l.onCommitFiberRoot(
            Ea,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = S.T, e = _.p, _.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, _.p = e;
        }
      }
      (ra & 3) !== 0 && mn(), Ot(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Dc ? ee++ : (ee = 0, Dc = l) : ee = 0, ne(0);
    }
  }
  function mo(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function mn(l) {
    return yo(), vo(), ho(), go();
  }
  function go() {
    if (Hl !== 5) return !1;
    var l = nu, t = Oc;
    Oc = 0;
    var u = Jn(ra), a = S.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, S.T = null, u = _c, _c = null;
      var n = nu, f = ra;
      if (Hl = 0, da = nu = null, ra = 0, (ul & 6) !== 0) throw Error(m(331));
      var c = ul;
      if (ul |= 4, P0(n.current), $0(
        n,
        n.current,
        f,
        u
      ), ul = c, ne(0, !1), $l && typeof $l.onPostCommitFiberRoot == "function")
        try {
          $l.onPostCommitFiberRoot(Ea, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, S.T = a, mo(l, t);
    }
  }
  function bo(l, t, u) {
    t = ct(u, t), t = ec(l.stateNode, t, 2), l = kt(l, t, 2), l !== null && (Ta(l, 2), Ot(l));
  }
  function sl(l, t, u) {
    if (l.tag === 3)
      bo(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          bo(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (eu === null || !eu.has(a))) {
            l = ct(u, l), u = A0(2), a = kt(t, u, 2), a !== null && (T0(
              u,
              a,
              t,
              l
            ), Ta(a, 2), Ot(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Zr();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Ec = !0, e.add(u), l = wr.bind(null, l, t, u), t.then(l, l));
  }
  function wr(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ol === l && (J & u) === u && (gl === 4 || gl === 3 && (J & 62914560) === J && 300 > St() - zc ? (ul & 2) === 0 && ya(l, 0) : Ac |= u, oa === J && (oa = 0)), Ot(l);
  }
  function So(l, t) {
    t === 0 && (t = vi()), l = ku(l, t), l !== null && (Ta(l, t), Ot(l));
  }
  function Wr(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), So(l, u);
  }
  function kr(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(t), So(l, u);
  }
  function $r(l, t) {
    return Zn(l, t);
  }
  var gn = null, ha = null, Nc = !1, bn = !1, xc = !1, xu = 0;
  function Ot(l) {
    l !== ha && l.next === null && (ha === null ? gn = ha = l : ha = ha.next = l), bn = !0, Nc || (Nc = !0, Ir());
  }
  function ne(l, t) {
    if (!xc && bn) {
      xc = !0;
      do
        for (var u = !1, a = gn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Fl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, zo(a, n));
          } else
            n = J, n = ze(
              a,
              a === ol ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Aa(a, n) || (u = !0, zo(a, n));
          a = a.next;
        }
      while (u);
      xc = !1;
    }
  }
  function Fr() {
    Eo();
  }
  function Eo() {
    bn = Nc = !1;
    var l = 0;
    xu !== 0 && (fy() && (l = xu), xu = 0);
    for (var t = St(), u = null, a = gn; a !== null; ) {
      var e = a.next, n = Ao(a, t);
      n === 0 ? (a.next = null, u === null ? gn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (bn = !0)), a = e;
    }
    ne(l);
  }
  function Ao(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Fl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = zd(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = ol, u = J, u = ze(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (al === 2 || al === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Vn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Aa(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Vn(a), Jn(u)) {
        case 2:
        case 8:
          u = di;
          break;
        case 32:
          u = Ee;
          break;
        case 268435456:
          u = ri;
          break;
        default:
          u = Ee;
      }
      return a = To.bind(null, l), u = Zn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Vn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function To(l, t) {
    if (Hl !== 0 && Hl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (mn() && l.callbackNode !== u)
      return null;
    var a = J;
    return a = ze(
      l,
      l === ol ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (ao(l, a, t), Ao(l, St()), l.callbackNode != null && l.callbackNode === u ? To.bind(null, l) : null);
  }
  function zo(l, t) {
    if (mn()) return null;
    ao(l, t, !0);
  }
  function Ir() {
    iy(function() {
      (ul & 6) !== 0 ? Zn(
        oi,
        Fr
      ) : Eo();
    });
  }
  function Hc() {
    return xu === 0 && (xu = yi()), xu;
  }
  function Oo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : pe("" + l);
  }
  function _o(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Pr(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Oo(
        (e[Ql] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Ql] || null) ? Oo(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new xe(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (xu !== 0) {
                  var i = f ? _o(e, f) : new FormData(e);
                  Pf(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? _o(e, f) : new FormData(e), Pf(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var qc = 0; qc < bf.length; qc++) {
    var Yc = bf[qc], ly = Yc.toLowerCase(), ty = Yc[0].toUpperCase() + Yc.slice(1);
    ht(
      ly,
      "on" + ty
    );
  }
  ht(as, "onAnimationEnd"), ht(es, "onAnimationIteration"), ht(ns, "onAnimationStart"), ht("dblclick", "onDoubleClick"), ht("focusin", "onFocus"), ht("focusout", "onBlur"), ht(br, "onTransitionRun"), ht(Sr, "onTransitionStart"), ht(Er, "onTransitionCancel"), ht(fs, "onTransitionEnd"), Xu("onMouseEnter", ["mouseout", "mouseover"]), Xu("onMouseLeave", ["mouseout", "mouseover"]), Xu("onPointerEnter", ["pointerout", "pointerover"]), Xu("onPointerLeave", ["pointerout", "pointerover"]), mu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), uy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fe)
  );
  function Do(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, y = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (b) {
              en(b);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, y = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (b) {
              en(b);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function K(l, t) {
    var u = t[wn];
    u === void 0 && (u = t[wn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Mo(t, l, 2, !1), u.add(a));
  }
  function jc(l, t, u) {
    var a = 0;
    t && (a |= 4), Mo(
      u,
      l,
      a,
      t
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(l) {
    if (!l[Sn]) {
      l[Sn] = !0, Si.forEach(function(u) {
        u !== "selectionchange" && (uy.has(u) || jc(u, !1, l), jc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = !0, jc("selectionchange", !1, t));
    }
  }
  function Mo(l, t, u, a) {
    switch (Fo(t)) {
      case 2:
        var e = Ry;
        break;
      case 8:
        e = Uy;
        break;
      default:
        e = Fc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Gc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = ju(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Hi(function() {
      var y = n, b = uf(u), T = [];
      l: {
        var v = cs.get(l);
        if (v !== void 0) {
          var h = xe, G = l;
          switch (l) {
            case "keypress":
              if (Ue(u) === 0) break l;
            case "keydown":
            case "keyup":
              h = $d;
              break;
            case "focusin":
              G = "focus", h = sf;
              break;
            case "focusout":
              G = "blur", h = sf;
              break;
            case "beforeblur":
            case "afterblur":
              h = sf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Gd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = Pd;
              break;
            case as:
            case es:
            case ns:
              h = Qd;
              break;
            case fs:
              h = tr;
              break;
            case "scroll":
            case "scrollend":
              h = jd;
              break;
            case "wheel":
              h = ar;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Vd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Gi;
              break;
            case "toggle":
            case "beforetoggle":
              h = nr;
          }
          var Y = (t & 4) !== 0, fl = !Y && (l === "scroll" || l === "scrollend"), d = Y ? v !== null ? v + "Capture" : null : v;
          Y = [];
          for (var o = y, r; o !== null; ) {
            var E = o;
            if (r = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || r === null || d === null || (E = _a(o, d), E != null && Y.push(
              ce(o, E, r)
            )), fl) break;
            o = o.return;
          }
          0 < Y.length && (v = new h(
            v,
            G,
            null,
            u,
            b
          ), T.push({ event: v, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", h = l === "mouseout" || l === "pointerout", v && u !== tf && (G = u.relatedTarget || u.fromElement) && (ju(G) || G[Yu]))
            break l;
          if ((h || v) && (v = b.window === b ? b : (v = b.ownerDocument) ? v.defaultView || v.parentWindow : window, h ? (G = u.relatedTarget || u.toElement, h = y, G = G ? ju(G) : null, G !== null && (fl = cl(G), Y = G.tag, G !== fl || Y !== 5 && Y !== 27 && Y !== 6) && (G = null)) : (h = null, G = y), h !== G)) {
            if (Y = ji, E = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Gi, E = "onPointerLeave", d = "onPointerEnter", o = "pointer"), fl = h == null ? v : Oa(h), r = G == null ? v : Oa(G), v = new Y(
              E,
              o + "leave",
              h,
              u,
              b
            ), v.target = fl, v.relatedTarget = r, E = null, ju(b) === y && (Y = new Y(
              d,
              o + "enter",
              G,
              u,
              b
            ), Y.target = r, Y.relatedTarget = fl, E = Y), fl = E, h && G)
              t: {
                for (Y = h, d = G, o = 0, r = Y; r; r = ma(r))
                  o++;
                for (r = 0, E = d; E; E = ma(E))
                  r++;
                for (; 0 < o - r; )
                  Y = ma(Y), o--;
                for (; 0 < r - o; )
                  d = ma(d), r--;
                for (; o--; ) {
                  if (Y === d || d !== null && Y === d.alternate)
                    break t;
                  Y = ma(Y), d = ma(d);
                }
                Y = null;
              }
            else Y = null;
            h !== null && po(
              T,
              v,
              h,
              Y,
              !1
            ), G !== null && fl !== null && po(
              T,
              fl,
              G,
              Y,
              !0
            );
          }
        }
        l: {
          if (v = y ? Oa(y) : window, h = v.nodeName && v.nodeName.toLowerCase(), h === "select" || h === "input" && v.type === "file")
            var R = Ji;
          else if (Li(v))
            if (wi)
              R = hr;
            else {
              R = yr;
              var Z = rr;
            }
          else
            h = v.nodeName, !h || h.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && lf(y.elementType) && (R = Ji) : R = vr;
          if (R && (R = R(l, y))) {
            Ki(
              T,
              R,
              u,
              b
            );
            break l;
          }
          Z && Z(l, v, y), l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && Pn(v, "number", v.value);
        }
        switch (Z = y ? Oa(y) : window, l) {
          case "focusin":
            (Li(Z) || Z.contentEditable === "true") && (Ju = Z, hf = y, Ha = null);
            break;
          case "focusout":
            Ha = hf = Ju = null;
            break;
          case "mousedown":
            mf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mf = !1, ts(T, u, b);
            break;
          case "selectionchange":
            if (gr) break;
          case "keydown":
          case "keyup":
            ts(T, u, b);
        }
        var N;
        if (df)
          l: {
            switch (l) {
              case "compositionstart":
                var j = "onCompositionStart";
                break l;
              case "compositionend":
                j = "onCompositionEnd";
                break l;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break l;
            }
            j = void 0;
          }
        else
          Ku ? Zi(l, u) && (j = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (j = "onCompositionStart");
        j && (Xi && u.locale !== "ko" && (Ku || j !== "onCompositionStart" ? j === "onCompositionEnd" && Ku && (N = qi()) : (Kt = b, nf = "value" in Kt ? Kt.value : Kt.textContent, Ku = !0)), Z = En(y, j), 0 < Z.length && (j = new Bi(
          j,
          l,
          null,
          u,
          b
        ), T.push({ event: j, listeners: Z }), N ? j.data = N : (N = Vi(u), N !== null && (j.data = N)))), (N = cr ? ir(l, u) : sr(l, u)) && (j = En(y, "onBeforeInput"), 0 < j.length && (Z = new Bi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          b
        ), T.push({
          event: Z,
          listeners: j
        }), Z.data = N)), Pr(
          T,
          l,
          y,
          u,
          b
        );
      }
      Do(T, t);
    });
  }
  function ce(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function En(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = _a(l, u), e != null && a.unshift(
        ce(l, e, n)
      ), e = _a(l, t), e != null && a.push(
        ce(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ma(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function po(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, y = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (i = y, e ? (y = _a(u, n), y != null && f.unshift(
        ce(u, y, i)
      )) : e || (y = _a(u, n), y != null && f.push(
        ce(u, y, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var ay = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function Ro(l) {
    return (typeof l == "string" ? l : "" + l).replace(ay, `
`).replace(ey, "");
  }
  function Uo(l, t) {
    return t = Ro(t), Ro(l) === t;
  }
  function An() {
  }
  function nl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Zu(l, "" + a);
        break;
      case "className":
        _e(l, "class", a);
        break;
      case "tabIndex":
        _e(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _e(l, u, a);
        break;
      case "style":
        Ni(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          _e(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = pe("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && nl(l, t, "name", e.name, e, null), nl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), nl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), nl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (nl(l, t, "encType", e.encType, e, null), nl(l, t, "method", e.method, e, null), nl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = pe("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = An);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = pe("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), Oe(l, "popover", a);
        break;
      case "xlinkActuate":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Oe(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = qd.get(u) || u, Oe(l, u, a));
    }
  }
  function Xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Ni(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && Zu(l, "" + a);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = An);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ei.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Ql] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Oe(l, u, a);
          }
    }
  }
  function ql(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", l), K("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  nl(l, t, n, f, u, null);
              }
          }
        e && nl(l, t, "srcSet", u.srcSet, u, null), a && nl(l, t, "src", u.src, u, null);
        return;
      case "input":
        K("invalid", l);
        var c = n = f = e = null, i = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var b = u[a];
            if (b != null)
              switch (a) {
                case "name":
                  e = b;
                  break;
                case "type":
                  f = b;
                  break;
                case "checked":
                  i = b;
                  break;
                case "defaultChecked":
                  y = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(m(137, t));
                  break;
                default:
                  nl(l, t, a, b, u, null);
              }
          }
        Mi(
          l,
          n,
          c,
          i,
          y,
          f,
          e,
          !1
        ), De(l);
        return;
      case "select":
        K("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                nl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Qu(l, !!a, t, !1) : u != null && Qu(l, !!a, u, !0);
        return;
      case "textarea":
        K("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                nl(l, t, f, c, u, null);
            }
        Ri(l, a, e, n), De(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                nl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fe.length; a++)
          K(fe[a], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in u)
          if (u.hasOwnProperty(y) && (a = u[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                nl(l, t, y, a, u, null);
            }
        return;
      default:
        if (lf(t)) {
          for (b in u)
            u.hasOwnProperty(b) && (a = u[b], a !== void 0 && Xc(
              l,
              t,
              b,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && nl(l, t, c, a, u, null));
  }
  function ny(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, y = null, b = null;
        for (h in u) {
          var T = u[h];
          if (u.hasOwnProperty(h) && T != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(h) || nl(l, t, h, null, a, T);
            }
        }
        for (var v in a) {
          var h = a[v];
          if (T = u[v], a.hasOwnProperty(v) && (h != null || T != null))
            switch (v) {
              case "type":
                n = h;
                break;
              case "name":
                e = h;
                break;
              case "checked":
                y = h;
                break;
              case "defaultChecked":
                b = h;
                break;
              case "value":
                f = h;
                break;
              case "defaultValue":
                c = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                h !== T && nl(
                  l,
                  t,
                  v,
                  h,
                  a,
                  T
                );
            }
        }
        In(
          l,
          f,
          c,
          i,
          y,
          b,
          n,
          e
        );
        return;
      case "select":
        h = f = c = v = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = i;
              default:
                a.hasOwnProperty(n) || nl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && nl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = h, v != null ? Qu(l, !!u, v, !1) : !!a != !!u && (t != null ? Qu(l, !!u, t, !0) : Qu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        h = v = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                v = e;
                break;
              case "defaultValue":
                h = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && nl(l, t, f, e, a, n);
            }
        pi(l, v, h);
        return;
      case "option":
        for (var G in u)
          if (v = u[G], u.hasOwnProperty(G) && v != null && !a.hasOwnProperty(G))
            switch (G) {
              case "selected":
                l.selected = !1;
                break;
              default:
                nl(
                  l,
                  t,
                  G,
                  null,
                  a,
                  v
                );
            }
        for (i in a)
          if (v = a[i], h = u[i], a.hasOwnProperty(i) && v !== h && (v != null || h != null))
            switch (i) {
              case "selected":
                l.selected = v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                nl(
                  l,
                  t,
                  i,
                  v,
                  a,
                  h
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in u)
          v = u[Y], u.hasOwnProperty(Y) && v != null && !a.hasOwnProperty(Y) && nl(l, t, Y, null, a, v);
        for (y in a)
          if (v = a[y], h = u[y], a.hasOwnProperty(y) && v !== h && (v != null || h != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(m(137, t));
                break;
              default:
                nl(
                  l,
                  t,
                  y,
                  v,
                  a,
                  h
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var fl in u)
            v = u[fl], u.hasOwnProperty(fl) && v !== void 0 && !a.hasOwnProperty(fl) && Xc(
              l,
              t,
              fl,
              void 0,
              a,
              v
            );
          for (b in a)
            v = a[b], h = u[b], !a.hasOwnProperty(b) || v === h || v === void 0 && h === void 0 || Xc(
              l,
              t,
              b,
              v,
              a,
              h
            );
          return;
        }
    }
    for (var d in u)
      v = u[d], u.hasOwnProperty(d) && v != null && !a.hasOwnProperty(d) && nl(l, t, d, null, a, v);
    for (T in a)
      v = a[T], h = u[T], !a.hasOwnProperty(T) || v === h || v == null && h == null || nl(l, t, T, v, a, h);
  }
  var Cc = null, Qc = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function No(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Zc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Vc = null;
  function fy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vc ? !1 : (Vc = l, !0) : (Vc = null, !1);
  }
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0, cy = typeof clearTimeout == "function" ? clearTimeout : void 0, qo = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof qo < "u" ? function(l) {
    return qo.resolve(null).then(l).catch(sy);
  } : Ho;
  function sy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function cu(l) {
    return l === "head";
  }
  function Yo(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && ie(f.documentElement), u & 2 && ie(f.body), u & 4)
              for (u = f.head, ie(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[za] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), me(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    me(t);
  }
  function Lc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lc(u), Wn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function oy(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[za])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = gt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function dy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Kc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function ry(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function gt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Jc = null;
  function jo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Bo(l, t, u) {
    switch (t = Tn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function ie(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Wn(l);
  }
  var yt = /* @__PURE__ */ new Map(), Go = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ct = _.d;
  _.d = {
    f: yy,
    r: vy,
    D: hy,
    C: my,
    L: gy,
    m: by,
    X: Ey,
    S: Sy,
    M: Ay
  };
  function yy() {
    var l = Ct.f(), t = vn();
    return l || t;
  }
  function vy(l) {
    var t = Bu(l);
    t !== null && t.tag === 5 && t.type === "form" ? a0(t) : Ct.r(l);
  }
  var ga = typeof document > "u" ? null : document;
  function Xo(l, t, u) {
    var a = ga;
    if (a && typeof t == "string" && t) {
      var e = ft(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Go.has(e) || (Go.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), ql(t, "link", l), pl(t), a.head.appendChild(t)));
    }
  }
  function hy(l) {
    Ct.D(l), Xo("dns-prefetch", l, null);
  }
  function my(l, t) {
    Ct.C(l, t), Xo("preconnect", l, t);
  }
  function gy(l, t, u) {
    Ct.L(l, t, u);
    var a = ga;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + ft(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + ft(
        u.imageSizes
      ) + '"]')) : e += '[href="' + ft(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ba(l);
          break;
        case "script":
          n = Sa(l);
      }
      yt.has(n) || (l = M(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), yt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(se(n)) || t === "script" && a.querySelector(oe(n)) || (t = a.createElement("link"), ql(t, "link", l), pl(t), a.head.appendChild(t)));
    }
  }
  function by(l, t) {
    Ct.m(l, t);
    var u = ga;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ft(a) + '"][href="' + ft(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!yt.has(n) && (l = M({ rel: "modulepreload", href: l }, t), yt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(oe(n)))
              return;
        }
        a = u.createElement("link"), ql(a, "link", l), pl(a), u.head.appendChild(a);
      }
    }
  }
  function Sy(l, t, u) {
    Ct.S(l, t, u);
    var a = ga;
    if (a && l) {
      var e = Gu(a).hoistableStyles, n = ba(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          se(n)
        ))
          c.loading = 5;
        else {
          l = M(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = yt.get(n)) && wc(l, u);
          var i = f = a.createElement("link");
          pl(i), ql(i, "link", l), i._p = new Promise(function(y, b) {
            i.onload = y, i.onerror = b;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, On(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function Ey(l, t) {
    Ct.X(l, t);
    var u = ga;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(oe(e)), n || (l = M({ src: l, async: !0 }, t), (t = yt.get(e)) && Wc(l, t), n = u.createElement("script"), pl(n), ql(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ay(l, t) {
    Ct.M(l, t);
    var u = ga;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(oe(e)), n || (l = M({ src: l, async: !0, type: "module" }, t), (t = yt.get(e)) && Wc(l, t), n = u.createElement("script"), pl(n), ql(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Co(l, t, u, a) {
    var e = (e = X.current) ? zn(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = ba(u.href), u = Gu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ba(u.href);
          var n = Gu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            se(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), yt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, yt.set(l, u), n || Ty(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(m(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(u), u = Gu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function ba(l) {
    return 'href="' + ft(l) + '"';
  }
  function se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Qo(l) {
    return M({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ty(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ql(t, "link", u), pl(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + ft(l) + '"]';
  }
  function oe(l) {
    return "script[async]" + l;
  }
  function Zo(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ft(u.href) + '"]'
          );
          if (a)
            return t.instance = a, pl(a), a;
          var e = M({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), pl(a), ql(a, "style", e), On(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ba(u.href);
          var n = l.querySelector(
            se(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, pl(n), n;
          a = Qo(u), (e = yt.get(e)) && wc(a, e), n = (l.ownerDocument || l).createElement("link"), pl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), ql(n, "link", a), t.state.loading |= 4, On(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            oe(n)
          )) ? (t.instance = e, pl(e), e) : (a = u, (e = yt.get(n)) && (a = M({}, u), Wc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), pl(e), ql(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, On(a, u.precedence, l));
    return t.instance;
  }
  function On(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function wc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Wc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var _n = null;
  function Vo(l, t, u) {
    if (_n === null) {
      var a = /* @__PURE__ */ new Map(), e = _n = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = _n, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[za] || n[Bl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Lo(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function zy(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ko(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function Oy() {
  }
  function _y(l, t, u) {
    if (de === null) throw Error(m(475));
    var a = de;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ba(u.href), n = l.querySelector(
          se(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Dn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, pl(n);
          return;
        }
        n = l.ownerDocument || l, u = Qo(u), (e = yt.get(e)) && wc(u, e), n = n.createElement("link"), pl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), ql(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Dn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Dy() {
    if (de === null) throw Error(m(475));
    var l = de;
    return l.stylesheets && l.count === 0 && kc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && kc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Dn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) kc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Mn = null;
  function kc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Mn = /* @__PURE__ */ new Map(), t.forEach(My, l), Mn = null, Dn.call(l));
  }
  function My(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Mn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Mn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Dn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var re = {
    $$typeof: Al,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function py(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ln(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ln(0), this.hiddenUpdates = Ln(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jo(l, t, u, a, e, n, f, c, i, y, b, T) {
    return l = new py(
      l,
      t,
      u,
      f,
      c,
      i,
      y,
      T
    ), t = 1, n === !0 && (t |= 24), n = Pl(3, null, null, t), l.current = n, n.stateNode = l, t = Uf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, qf(n), l;
  }
  function wo(l) {
    return l ? (l = $u, l) : $u;
  }
  function Wo(l, t, u, a, e, n) {
    e = wo(e), a.context === null ? a.context = e : a.pendingContext = e, a = Wt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = kt(l, a, t), u !== null && (et(u, l, t), Za(u, l, t));
  }
  function ko(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function $c(l, t) {
    ko(l, t), (l = l.alternate) && ko(l, t);
  }
  function $o(l) {
    if (l.tag === 13) {
      var t = ku(l, 67108864);
      t !== null && et(t, l, 67108864), $c(l, 67108864);
    }
  }
  var pn = !0;
  function Ry(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = _.p;
    try {
      _.p = 2, Fc(l, t, u, a);
    } finally {
      _.p = n, S.T = e;
    }
  }
  function Uy(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = _.p;
    try {
      _.p = 8, Fc(l, t, u, a);
    } finally {
      _.p = n, S.T = e;
    }
  }
  function Fc(l, t, u, a) {
    if (pn) {
      var e = Ic(a);
      if (e === null)
        Gc(
          l,
          t,
          a,
          Rn,
          u
        ), Io(l, a);
      else if (xy(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Io(l, a), t & 4 && -1 < Ny.indexOf(l)) {
        for (; e !== null; ) {
          var n = Bu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = hu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Fl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ot(n), (ul & 6) === 0 && (rn = St() + 500, ne(0));
                  }
                }
                break;
              case 13:
                c = ku(n, 2), c !== null && et(c, n, 2), vn(), $c(n, 2);
            }
          if (n = Ic(a), n === null && Gc(
            l,
            t,
            a,
            Rn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Gc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function Ic(l) {
    return l = uf(l), Pc(l);
  }
  var Rn = null;
  function Pc(l) {
    if (Rn = null, l = ju(l), l !== null) {
      var t = cl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = dl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function Fo(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (md()) {
          case oi:
            return 2;
          case di:
            return 8;
          case Ee:
          case gd:
            return 32;
          case ri:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var li = !1, iu = null, su = null, ou = null, ye = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), du = [], Ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Io(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        iu = null;
        break;
      case "dragenter":
      case "dragleave":
        su = null;
        break;
      case "mouseover":
      case "mouseout":
        ou = null;
        break;
      case "pointerover":
      case "pointerout":
        ye.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function he(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Bu(t), t !== null && $o(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function xy(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return iu = he(
          iu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return su = he(
          su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return ou = he(
          ou,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ye.set(
          n,
          he(
            ye.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ve.set(
          n,
          he(
            ve.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Po(l) {
    var t = ju(l.target);
    if (t !== null) {
      var u = cl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = dl(u), t !== null) {
            l.blockedOn = t, _d(l.priority, function() {
              if (u.tag === 13) {
                var a = at();
                a = Kn(a);
                var e = ku(u, a);
                e !== null && et(e, u, a), $c(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Un(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Ic(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        tf = a, u.target.dispatchEvent(a), tf = null;
      } else
        return t = Bu(u), t !== null && $o(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function ld(l, t, u) {
    Un(l) && u.delete(t);
  }
  function Hy() {
    li = !1, iu !== null && Un(iu) && (iu = null), su !== null && Un(su) && (su = null), ou !== null && Un(ou) && (ou = null), ye.forEach(ld), ve.forEach(ld);
  }
  function Nn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, li || (li = !0, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      Hy
    )));
  }
  var xn = null;
  function td(l) {
    xn !== l && (xn = l, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      function() {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (Pc(a || u) === null)
              continue;
            break;
          }
          var n = Bu(u);
          n !== null && (l.splice(t, 3), t -= 3, Pf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function me(l) {
    function t(i) {
      return Nn(i, l);
    }
    iu !== null && Nn(iu, l), su !== null && Nn(su, l), ou !== null && Nn(ou, l), ye.forEach(t), ve.forEach(t);
    for (var u = 0; u < du.length; u++) {
      var a = du[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < du.length && (u = du[0], u.blockedOn === null); )
      Po(u), u.blockedOn === null && du.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Ql] || null;
        if (typeof n == "function")
          f || td(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ql] || null)
              c = f.formAction;
            else if (Pc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), td(u);
        }
      }
  }
  function ti(l) {
    this._internalRoot = l;
  }
  Hn.prototype.render = ti.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = at();
    Wo(u, a, l, t, null, null);
  }, Hn.prototype.unmount = ti.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Wo(l.current, 2, null, l, null, null), vn(), t[Yu] = null;
    }
  };
  function Hn(l) {
    this._internalRoot = l;
  }
  Hn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = gi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < du.length && t !== 0 && t < du[u].priority; u++) ;
      du.splice(u, 0, l), u === 0 && Po(l);
    }
  };
  var ud = U.version;
  if (ud !== "19.1.0")
    throw Error(
      m(
        527,
        ud,
        "19.1.0"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = D(t), l = l !== null ? A(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var qy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber)
      try {
        Ea = qn.inject(
          qy
        ), $l = qn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!ll(l)) throw Error(m(299));
    var u = !1, a = "", e = g0, n = b0, f = S0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Jo(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[Yu] = t.current, Bc(l), new ti(t);
  }, ge.hydrateRoot = function(l, t, u) {
    if (!ll(l)) throw Error(m(299));
    var a = !1, e = "", n = g0, f = b0, c = S0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Jo(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      f,
      c,
      i,
      y
    ), t.context = wo(null), u = t.current, a = at(), a = Kn(a), e = Wt(a), e.callback = null, kt(u, e, a), u = a, t.current.lanes = u, Ta(t, u), Ot(t), l[Yu] = t.current, Bc(l), new Hn(t);
  }, ge.version = "19.1.0", ge;
}
var od;
function Vy() {
  if (od) return ai.exports;
  od = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (U) {
        console.error(U);
      }
  }
  return g(), ai.exports = Zy(), ai.exports;
}
var Ly = Vy();
const Ky = /* @__PURE__ */ yd(Ly);
var Jy = Object.defineProperty, wy = (g, U, H) => U in g ? Jy(g, U, { enumerable: !0, configurable: !0, writable: !0, value: H }) : g[U] = H, Yn = (g, U, H) => wy(g, typeof U != "symbol" ? U + "" : U, H);
const Wy = {
  stringify: (g) => g ? "true" : "false",
  parse: (g) => /^[ty1-9]/i.test(g)
}, ky = {
  stringify: (g) => g.name,
  parse: (g, U, H) => {
    const m = (() => {
      if (typeof window < "u" && g in window)
        return window[g];
      if (typeof global < "u" && g in global)
        return global[g];
    })();
    return typeof m == "function" ? m.bind(H) : void 0;
  }
}, $y = {
  stringify: (g) => JSON.stringify(g),
  parse: (g) => JSON.parse(g)
}, Fy = {
  stringify: (g) => `${g}`,
  parse: (g) => parseFloat(g)
}, Iy = {
  stringify: (g) => g,
  parse: (g) => g
}, ci = {
  string: Iy,
  number: Fy,
  boolean: Wy,
  function: ky,
  json: $y
};
function Py(g) {
  return g.replace(
    /([a-z0-9])([A-Z])/g,
    (U, H, m) => `${H}-${m.toLowerCase()}`
  );
}
const jn = Symbol.for("r2wc.render"), Bn = Symbol.for("r2wc.connected"), Hu = Symbol.for("r2wc.context"), Qt = Symbol.for("r2wc.props");
function lv(g, U, H) {
  var m, ll, cl;
  U.props || (U.props = g.propTypes ? Object.keys(g.propTypes) : []), U.events || (U.events = []);
  const dl = Array.isArray(U.props) ? U.props.slice() : Object.keys(U.props), tl = Array.isArray(U.events) ? U.events.slice() : Object.keys(U.events), D = {}, A = {}, M = {}, V = {};
  for (const I of dl) {
    D[I] = Array.isArray(U.props) ? "string" : U.props[I];
    const w = Py(I);
    M[I] = w, V[w] = I;
  }
  for (const I of tl)
    A[I] = Array.isArray(U.events) ? {} : U.events[I];
  class F extends HTMLElement {
    constructor() {
      super(), Yn(this, cl, !0), Yn(this, ll), Yn(this, m, {}), Yn(this, "container"), U.shadow ? this.container = this.attachShadow({
        mode: U.shadow
      }) : this.container = this, this[Qt].container = this.container;
      for (const w of dl) {
        const El = M[w], rl = this.getAttribute(El), Ml = D[w], Ol = Ml ? ci[Ml] : null;
        Ol != null && Ol.parse && rl && (this[Qt][w] = Ol.parse(rl, El, this));
      }
      for (const w of tl)
        this[Qt][w] = (El) => {
          const rl = w.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(rl, { detail: El, ...A[w] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(V);
    }
    connectedCallback() {
      this[Bn] = !0, this[jn]();
    }
    disconnectedCallback() {
      this[Bn] = !1, this[Hu] && H.unmount(this[Hu]), delete this[Hu];
    }
    attributeChangedCallback(w, El, rl) {
      const Ml = V[w], Ol = D[Ml], Al = Ol ? ci[Ol] : null;
      Ml in D && Al != null && Al.parse && rl && (this[Qt][Ml] = Al.parse(rl, w, this), this[jn]());
    }
    [(cl = Bn, ll = Hu, m = Qt, jn)]() {
      this[Bn] && (this[Hu] ? H.update(this[Hu], this[Qt]) : this[Hu] = H.mount(
        this.container,
        g,
        this[Qt]
      ));
    }
  }
  for (const I of dl) {
    const w = M[I], El = D[I];
    Object.defineProperty(F.prototype, I, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Qt][I];
      },
      set(rl) {
        this[Qt][I] = rl;
        const Ml = El ? ci[El] : null;
        if (Ml != null && Ml.stringify) {
          const Ol = Ml.stringify(rl, w, this);
          this.getAttribute(w) !== Ol && this.setAttribute(w, Ol);
        } else
          this[jn]();
      }
    });
  }
  return F;
}
function tv(g, U, H, m = {}) {
  function ll(tl, D, A) {
    const M = U.createElement(D, A);
    if ("createRoot" in H) {
      const V = H.createRoot(tl);
      return V.render(M), {
        container: tl,
        root: V,
        ReactComponent: D
      };
    }
    if ("render" in H)
      return H.render(M, tl), {
        container: tl,
        ReactComponent: D
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function cl({ container: tl, root: D, ReactComponent: A }, M) {
    const V = U.createElement(A, M);
    if (D) {
      D.render(V);
      return;
    }
    if ("render" in H) {
      H.render(V, tl);
      return;
    }
  }
  function dl({ container: tl, root: D }) {
    if (D) {
      D.unmount();
      return;
    }
    if ("unmountComponentAtNode" in H) {
      H.unmountComponentAtNode(tl);
      return;
    }
  }
  return lv(g, m, { mount: ll, unmount: dl, update: cl });
}
var ii = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dd;
function uv() {
  if (dd) return be;
  dd = 1;
  var g = Symbol.for("react.transitional.element"), U = Symbol.for("react.fragment");
  function H(m, ll, cl) {
    var dl = null;
    if (cl !== void 0 && (dl = "" + cl), ll.key !== void 0 && (dl = "" + ll.key), "key" in ll) {
      cl = {};
      for (var tl in ll)
        tl !== "key" && (cl[tl] = ll[tl]);
    } else cl = ll;
    return ll = cl.ref, {
      $$typeof: g,
      type: m,
      key: dl,
      ref: ll !== void 0 ? ll : null,
      props: cl
    };
  }
  return be.Fragment = U, be.jsx = H, be.jsxs = H, be;
}
var rd;
function av() {
  return rd || (rd = 1, ii.exports = uv()), ii.exports;
}
var x = av();
function ev({ data: g, handleChange: U }) {
  return /* @__PURE__ */ x.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: "nombreEmpresa",
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: "Nombre de la Empresa"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "text",
          name: "nombreEmpresa",
          id: "nombreEmpresa",
          value: g.nombreEmpresa,
          onChange: U,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: "tipoEntidad",
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: "Tipo de Entidad"
        }
      ),
      /* @__PURE__ */ x.jsxs(
        "select",
        {
          name: "tipoEntidad",
          id: "tipoEntidad",
          value: g.tipoEntidad,
          onChange: U,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white",
          children: [
            /* @__PURE__ */ x.jsx("option", { children: "S.A. de C.V." }),
            /* @__PURE__ */ x.jsx("option", { children: "S. de R.L. de C.V." }),
            /* @__PURE__ */ x.jsx("option", { children: "S.A.P.I. de C.V." }),
            /* @__PURE__ */ x.jsx("option", { children: "Asociación Civil" }),
            /* @__PURE__ */ x.jsx("option", { children: "Otro" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: "fechaApertura",
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: "Fecha de Apertura del Libro"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "date",
          name: "fechaApertura",
          id: "fechaApertura",
          value: g.fechaApertura,
          onChange: U,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",
          required: !0
        }
      )
    ] })
  ] });
}
function nv({ data: g, handleChange: U }) {
  return /* @__PURE__ */ x.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: "nombreLibro",
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: "Nombre del Libro (Ej: Actas de Asamblea, Variaciones de Capital)"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "text",
          name: "nombreLibro",
          id: "nombreLibro",
          value: g.nombreLibro,
          onChange: U,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: "numeroDeActas",
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: "Número Inicial de Actas/Folios"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "number",
          name: "numeroDeActas",
          id: "numeroDeActas",
          value: g.numeroDeActas,
          onChange: U,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",
          min: "0"
        }
      )
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: "responsable",
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: "Persona Responsable del Libro"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "text",
          name: "responsable",
          id: "responsable",
          value: g.responsable,
          onChange: U,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        }
      )
    ] })
  ] });
}
function fv({ data: g }) {
  return /* @__PURE__ */ x.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ x.jsx("h3", { className: "text-lg font-semibold text-gray-800 border-b pb-2 mb-4", children: "Confirmar Datos" }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("strong", { className: "text-gray-600", children: "Nombre Empresa:" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-800 pl-2", children: g.nombreEmpresa || "-" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("strong", { className: "text-gray-600", children: "Tipo Entidad:" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-800 pl-2", children: g.tipoEntidad || "-" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("strong", { className: "text-gray-600", children: "Fecha Apertura:" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-800 pl-2", children: g.fechaApertura || "-" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("strong", { className: "text-gray-600", children: "Nombre del Libro:" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-800 pl-2", children: g.nombreLibro || "-" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("strong", { className: "text-gray-600", children: "No. Actas/Folios:" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-800 pl-2", children: g.numeroDeActas || "-" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("strong", { className: "text-gray-600", children: "Responsable:" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-800 pl-2", children: g.responsable || "-" })
    ] }),
    /* @__PURE__ */ x.jsx("p", { className: "mt-6 text-sm text-gray-500", children: "Por favor, revisa que toda la información sea correcta antes de registrar el libro." })
  ] });
}
const cv = {
  nombreEmpresa: "",
  tipoEntidad: "S.A. de C.V.",
  fechaApertura: "",
  nombreLibro: "",
  numeroDeActas: "",
  responsable: ""
}, Gn = 3;
function iv() {
  const [g, U] = Xn.useState(1), [H, m] = Xn.useState(cv), ll = Xn.useRef(null), cl = (A) => {
    const { name: M, value: V } = A.target;
    m((F) => ({
      ...F,
      [M]: V
    }));
  }, dl = () => {
    g < Gn && U(g + 1);
  }, tl = () => {
    g > 1 && U(g - 1);
  }, D = (A) => {
    A.preventDefault(), console.log("Formulario listo para enviar desde React:", H);
    const M = new CustomEvent("formSubmitted", {
      bubbles: !0,
      // El evento burbujea a través del DOM
      composed: !0,
      // El evento puede cruzar límites del Shadow DOM (aunque usamos Light DOM)
      detail: { formData: { ...H } }
      // Pasamos una copia de los datos
    });
    ll.current ? (ll.current.dispatchEvent(M), console.log(
      'React: Evento "formSubmitted" DESPACHADO desde el elemento form.',
      M.detail
    )) : console.error(
      "React: formRef.current es null. No se pudo despachar el evento."
    ), alert(
      "Formulario enviado a la aplicación Vue para procesamiento. (Simulación en React)"
    );
  };
  return /* @__PURE__ */ x.jsxs("div", { className: "max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl", children: [
    /* @__PURE__ */ x.jsx("div", { className: "mb-8", children: /* @__PURE__ */ x.jsxs("h2", { className: "text-xl font-semibold text-gray-700", children: [
      "Paso ",
      g,
      " de ",
      Gn
    ] }) }),
    /* @__PURE__ */ x.jsxs("form", { ref: ll, onSubmit: D, children: [
      g === 1 && /* @__PURE__ */ x.jsx(
        ev,
        {
          data: H,
          handleChange: cl
        }
      ),
      g === 2 && /* @__PURE__ */ x.jsx(
        nv,
        {
          data: H,
          handleChange: cl
        }
      ),
      g === 3 && /* @__PURE__ */ x.jsx(fv, { data: H }),
      /* @__PURE__ */ x.jsxs(
        "div",
        {
          className: `mt-10 flex ${g === 1 ? "justify-end" : "justify-between"}`,
          children: [
            g > 1 && /* @__PURE__ */ x.jsx(
              "button",
              {
                type: "button",
                onClick: tl,
                className: "px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400",
                children: "Anterior"
              }
            ),
            g < Gn && /* @__PURE__ */ x.jsx(
              "button",
              {
                type: "button",
                onClick: dl,
                className: "px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
                children: "Siguiente"
              }
            ),
            g === Gn && /* @__PURE__ */ x.jsx(
              "button",
              {
                type: "submit",
                className: "px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
                children: "Registrar Libro"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const sv = tv(iv, By, Ky, {
  shadow: void 0
});
customElements.define("libro-corporativo-form", sv);
