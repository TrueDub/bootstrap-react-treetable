var Hi = Object.defineProperty;
var Ui = (t, n, e) => n in t ? Hi(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var E = (t, n, e) => Ui(t, typeof n != "symbol" ? n + "" : n, e);
import jt, { useId as Gi, useMemo as Bt, useReducer as Bi, useEffect as Vi, useCallback as at } from "react";
function Xi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xt = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function Ji() {
  if (Zr) return it;
  Zr = 1;
  var t = jt, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, f) {
    var c, d = {}, p = null, h = null;
    f !== void 0 && (p = "" + f), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (c in u) r.call(u, c) && !i.hasOwnProperty(c) && (d[c] = u[c]);
    if (s && s.defaultProps) for (c in u = s.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: n, type: s, key: p, ref: h, props: d, _owner: a.current };
  }
  return it.Fragment = e, it.jsx = o, it.jsxs = o, it;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Qi() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = jt, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), w = Symbol.iterator, b = "@@iterator";
    function O(l) {
      if (l === null || typeof l != "object")
        return null;
      var v = w && l[w] || l[b];
      return typeof v == "function" ? v : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(l) {
      {
        for (var v = arguments.length, P = new Array(v > 1 ? v - 1 : 0), C = 1; C < v; C++)
          P[C - 1] = arguments[C];
        I("error", l, P);
      }
    }
    function I(l, v, P) {
      {
        var C = S.ReactDebugCurrentFrame, B = C.getStackAddendum();
        B !== "" && (v += "%s", P = P.concat([B]));
        var Q = P.map(function(q) {
          return String(q);
        });
        Q.unshift("Warning: " + v), Function.prototype.apply.call(console[l], console, Q);
      }
    }
    var T = !1, m = !1, J = !1, R = !1, ae = !1, ue;
    ue = Symbol.for("react.module.reference");
    function ce(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || ae || l === a || l === f || l === c || R || l === h || T || m || J || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === d || l.$$typeof === o || l.$$typeof === s || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === ue || l.getModuleId !== void 0));
    }
    function Me(l, v, P) {
      var C = l.displayName;
      if (C)
        return C;
      var B = v.displayName || v.name || "";
      return B !== "" ? P + "(" + B + ")" : P;
    }
    function Ae(l) {
      return l.displayName || "Context";
    }
    function de(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var v = l;
            return Ae(v) + ".Consumer";
          case o:
            var P = l;
            return Ae(P._context) + ".Provider";
          case u:
            return Me(l, l.render, "ForwardRef");
          case d:
            var C = l.displayName || null;
            return C !== null ? C : de(l.type) || "Memo";
          case p: {
            var B = l, Q = B._payload, q = B._init;
            try {
              return de(q(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var he = Object.assign, _e = 0, ve, Te, We, Ge, g, k, L;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function D() {
      {
        if (_e === 0) {
          ve = console.log, Te = console.info, We = console.warn, Ge = console.error, g = console.group, k = console.groupCollapsed, L = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        _e++;
      }
    }
    function z() {
      {
        if (_e--, _e === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: he({}, l, {
              value: ve
            }),
            info: he({}, l, {
              value: Te
            }),
            warn: he({}, l, {
              value: We
            }),
            error: he({}, l, {
              value: Ge
            }),
            group: he({}, l, {
              value: g
            }),
            groupCollapsed: he({}, l, {
              value: k
            }),
            groupEnd: he({}, l, {
              value: L
            })
          });
        }
        _e < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = S.ReactCurrentDispatcher, j;
    function $(l, v, P) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (B) {
            var C = B.stack.trim().match(/\n( *(at )?)/);
            j = C && C[1] || "";
          }
        return `
` + j + l;
      }
    }
    var U = !1, W;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      W = new fe();
    }
    function x(l, v) {
      if (!l || U)
        return "";
      {
        var P = W.get(l);
        if (P !== void 0)
          return P;
      }
      var C;
      U = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = M.current, M.current = null, D();
      try {
        if (v) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (pe) {
              C = pe;
            }
            Reflect.construct(l, [], q);
          } else {
            try {
              q.call();
            } catch (pe) {
              C = pe;
            }
            l.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            C = pe;
          }
          l();
        }
      } catch (pe) {
        if (pe && C && typeof pe.stack == "string") {
          for (var Y = pe.stack.split(`
`), me = C.stack.split(`
`), te = Y.length - 1, ie = me.length - 1; te >= 1 && ie >= 0 && Y[te] !== me[ie]; )
            ie--;
          for (; te >= 1 && ie >= 0; te--, ie--)
            if (Y[te] !== me[ie]) {
              if (te !== 1 || ie !== 1)
                do
                  if (te--, ie--, ie < 0 || Y[te] !== me[ie]) {
                    var we = `
` + Y[te].replace(" at new ", " at ");
                    return l.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", l.displayName)), typeof l == "function" && W.set(l, we), we;
                  }
                while (te >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        U = !1, M.current = Q, z(), Error.prepareStackTrace = B;
      }
      var Xe = l ? l.displayName || l.name : "", ze = Xe ? $(Xe) : "";
      return typeof l == "function" && W.set(l, ze), ze;
    }
    function be(l, v, P) {
      return x(l, !1);
    }
    function Be(l) {
      var v = l.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ye(l, v, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return x(l, Be(l));
      if (typeof l == "string")
        return $(l);
      switch (l) {
        case f:
          return $("Suspense");
        case c:
          return $("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return be(l.render);
          case d:
            return Ye(l.type, v, P);
          case p: {
            var C = l, B = C._payload, Q = C._init;
            try {
              return Ye(Q(B), v, P);
            } catch {
            }
          }
        }
      return "";
    }
    var nt = Object.prototype.hasOwnProperty, $r = {}, Wr = S.ReactDebugCurrentFrame;
    function wt(l) {
      if (l) {
        var v = l._owner, P = Ye(l.type, l._source, v ? v.type : null);
        Wr.setExtraStackFrame(P);
      } else
        Wr.setExtraStackFrame(null);
    }
    function Pi(l, v, P, C, B) {
      {
        var Q = Function.call.bind(nt);
        for (var q in l)
          if (Q(l, q)) {
            var Y = void 0;
            try {
              if (typeof l[q] != "function") {
                var me = Error((C || "React class") + ": " + P + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              Y = l[q](v, q, C, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              Y = te;
            }
            Y && !(Y instanceof Error) && (wt(B), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", P, q, typeof Y), wt(null)), Y instanceof Error && !(Y.message in $r) && ($r[Y.message] = !0, wt(B), A("Failed %s type: %s", P, Y.message), wt(null));
          }
      }
    }
    var Ei = Array.isArray;
    function zt(l) {
      return Ei(l);
    }
    function Ti(l) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, P = v && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function ki(l) {
      try {
        return Yr(l), !1;
      } catch {
        return !0;
      }
    }
    function Yr(l) {
      return "" + l;
    }
    function zr(l) {
      if (ki(l))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ti(l)), Yr(l);
    }
    var qr = S.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hr, Ur;
    function Si(l) {
      if (nt.call(l, "ref")) {
        var v = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Ai(l) {
      if (nt.call(l, "key")) {
        var v = Object.getOwnPropertyDescriptor(l, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function _i(l, v) {
      typeof l.ref == "string" && qr.current;
    }
    function Ii(l, v) {
      {
        var P = function() {
          Hr || (Hr = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Ri(l, v) {
      {
        var P = function() {
          Ur || (Ur = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Ci = function(l, v, P, C, B, Q, q) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: l,
        key: v,
        ref: P,
        props: q,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Fi(l, v, P, C, B) {
      {
        var Q, q = {}, Y = null, me = null;
        P !== void 0 && (zr(P), Y = "" + P), Ai(v) && (zr(v.key), Y = "" + v.key), Si(v) && (me = v.ref, _i(v, B));
        for (Q in v)
          nt.call(v, Q) && !Oi.hasOwnProperty(Q) && (q[Q] = v[Q]);
        if (l && l.defaultProps) {
          var te = l.defaultProps;
          for (Q in te)
            q[Q] === void 0 && (q[Q] = te[Q]);
        }
        if (Y || me) {
          var ie = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          Y && Ii(q, ie), me && Ri(q, ie);
        }
        return Ci(l, Y, me, B, C, qr.current, q);
      }
    }
    var qt = S.ReactCurrentOwner, Gr = S.ReactDebugCurrentFrame;
    function Ve(l) {
      if (l) {
        var v = l._owner, P = Ye(l.type, l._source, v ? v.type : null);
        Gr.setExtraStackFrame(P);
      } else
        Gr.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Ut(l) {
      return typeof l == "object" && l !== null && l.$$typeof === n;
    }
    function Br() {
      {
        if (qt.current) {
          var l = de(qt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Di(l) {
      return "";
    }
    var Vr = {};
    function Mi(l) {
      {
        var v = Br();
        if (!v) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (v = `

Check the top-level render call using <` + P + ">.");
        }
        return v;
      }
    }
    function Xr(l, v) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = Mi(v);
        if (Vr[P])
          return;
        Vr[P] = !0;
        var C = "";
        l && l._owner && l._owner !== qt.current && (C = " It was passed a child from " + de(l._owner.type) + "."), Ve(l), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, C), Ve(null);
      }
    }
    function Jr(l, v) {
      {
        if (typeof l != "object")
          return;
        if (zt(l))
          for (var P = 0; P < l.length; P++) {
            var C = l[P];
            Ut(C) && Xr(C, v);
          }
        else if (Ut(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var B = O(l);
          if (typeof B == "function" && B !== l.entries)
            for (var Q = B.call(l), q; !(q = Q.next()).done; )
              Ut(q.value) && Xr(q.value, v);
        }
      }
    }
    function ji(l) {
      {
        var v = l.type;
        if (v == null || typeof v == "string")
          return;
        var P;
        if (typeof v == "function")
          P = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === d))
          P = v.propTypes;
        else
          return;
        if (P) {
          var C = de(v);
          Pi(P, l.props, "prop", C, l);
        } else if (v.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var B = de(v);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ni(l) {
      {
        for (var v = Object.keys(l.props), P = 0; P < v.length; P++) {
          var C = v[P];
          if (C !== "children" && C !== "key") {
            Ve(l), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Ve(null);
            break;
          }
        }
        l.ref !== null && (Ve(l), A("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Qr = {};
    function Kr(l, v, P, C, B, Q) {
      {
        var q = ce(l);
        if (!q) {
          var Y = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = Di();
          me ? Y += me : Y += Br();
          var te;
          l === null ? te = "null" : zt(l) ? te = "array" : l !== void 0 && l.$$typeof === n ? (te = "<" + (de(l.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : te = typeof l, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, Y);
        }
        var ie = Fi(l, v, P, B, Q);
        if (ie == null)
          return ie;
        if (q) {
          var we = v.children;
          if (we !== void 0)
            if (C)
              if (zt(we)) {
                for (var Xe = 0; Xe < we.length; Xe++)
                  Jr(we[Xe], l);
                Object.freeze && Object.freeze(we);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jr(we, l);
        }
        if (nt.call(v, "key")) {
          var ze = de(l), pe = Object.keys(v).filter(function(qi) {
            return qi !== "key";
          }), Gt = pe.length > 0 ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qr[ze + Gt]) {
            var zi = pe.length > 0 ? "{" + pe.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, ze, zi, ze), Qr[ze + Gt] = !0;
          }
        }
        return l === r ? Ni(ie) : ji(ie), ie;
      }
    }
    function Li(l, v, P) {
      return Kr(l, v, P, !0);
    }
    function $i(l, v, P) {
      return Kr(l, v, P, !1);
    }
    var Wi = $i, Yi = Li;
    ot.Fragment = r, ot.jsx = Wi, ot.jsxs = Yi;
  })()), ot;
}
var tn;
function Ki() {
  return tn || (tn = 1, process.env.NODE_ENV === "production" ? xt.exports = Ji() : xt.exports = Qi()), xt.exports;
}
var H = Ki(), Pt = { exports: {} }, Et = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function Zi() {
  if (rn) return V;
  rn = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, w = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, A = t ? Symbol.for("react.scope") : 60119;
  function I(m) {
    if (typeof m == "object" && m !== null) {
      var J = m.$$typeof;
      switch (J) {
        case n:
          switch (m = m.type, m) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case c:
                case w:
                case h:
                case o:
                  return m;
                default:
                  return J;
              }
          }
        case e:
          return J;
      }
    }
  }
  function T(m) {
    return I(m) === f;
  }
  return V.AsyncMode = u, V.ConcurrentMode = f, V.ContextConsumer = s, V.ContextProvider = o, V.Element = n, V.ForwardRef = c, V.Fragment = r, V.Lazy = w, V.Memo = h, V.Portal = e, V.Profiler = i, V.StrictMode = a, V.Suspense = d, V.isAsyncMode = function(m) {
    return T(m) || I(m) === u;
  }, V.isConcurrentMode = T, V.isContextConsumer = function(m) {
    return I(m) === s;
  }, V.isContextProvider = function(m) {
    return I(m) === o;
  }, V.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === n;
  }, V.isForwardRef = function(m) {
    return I(m) === c;
  }, V.isFragment = function(m) {
    return I(m) === r;
  }, V.isLazy = function(m) {
    return I(m) === w;
  }, V.isMemo = function(m) {
    return I(m) === h;
  }, V.isPortal = function(m) {
    return I(m) === e;
  }, V.isProfiler = function(m) {
    return I(m) === i;
  }, V.isStrictMode = function(m) {
    return I(m) === a;
  }, V.isSuspense = function(m) {
    return I(m) === d;
  }, V.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === f || m === i || m === a || m === d || m === p || typeof m == "object" && m !== null && (m.$$typeof === w || m.$$typeof === h || m.$$typeof === o || m.$$typeof === s || m.$$typeof === c || m.$$typeof === O || m.$$typeof === S || m.$$typeof === A || m.$$typeof === b);
  }, V.typeOf = I, V;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function eo() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, w = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, A = t ? Symbol.for("react.scope") : 60119;
    function I(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === r || x === f || x === i || x === a || x === d || x === p || typeof x == "object" && x !== null && (x.$$typeof === w || x.$$typeof === h || x.$$typeof === o || x.$$typeof === s || x.$$typeof === c || x.$$typeof === O || x.$$typeof === S || x.$$typeof === A || x.$$typeof === b);
    }
    function T(x) {
      if (typeof x == "object" && x !== null) {
        var be = x.$$typeof;
        switch (be) {
          case n:
            var Be = x.type;
            switch (Be) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case d:
                return Be;
              default:
                var Ye = Be && Be.$$typeof;
                switch (Ye) {
                  case s:
                  case c:
                  case w:
                  case h:
                  case o:
                    return Ye;
                  default:
                    return be;
                }
            }
          case e:
            return be;
        }
      }
    }
    var m = u, J = f, R = s, ae = o, ue = n, ce = c, Me = r, Ae = w, de = h, he = e, _e = i, ve = a, Te = d, We = !1;
    function Ge(x) {
      return We || (We = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(x) || T(x) === u;
    }
    function g(x) {
      return T(x) === f;
    }
    function k(x) {
      return T(x) === s;
    }
    function L(x) {
      return T(x) === o;
    }
    function N(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function D(x) {
      return T(x) === c;
    }
    function z(x) {
      return T(x) === r;
    }
    function M(x) {
      return T(x) === w;
    }
    function j(x) {
      return T(x) === h;
    }
    function $(x) {
      return T(x) === e;
    }
    function U(x) {
      return T(x) === i;
    }
    function W(x) {
      return T(x) === a;
    }
    function fe(x) {
      return T(x) === d;
    }
    X.AsyncMode = m, X.ConcurrentMode = J, X.ContextConsumer = R, X.ContextProvider = ae, X.Element = ue, X.ForwardRef = ce, X.Fragment = Me, X.Lazy = Ae, X.Memo = de, X.Portal = he, X.Profiler = _e, X.StrictMode = ve, X.Suspense = Te, X.isAsyncMode = Ge, X.isConcurrentMode = g, X.isContextConsumer = k, X.isContextProvider = L, X.isElement = N, X.isForwardRef = D, X.isFragment = z, X.isLazy = M, X.isMemo = j, X.isPortal = $, X.isProfiler = U, X.isStrictMode = W, X.isSuspense = fe, X.isValidElementType = I, X.typeOf = T;
  })()), X;
}
var an;
function Zn() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Et.exports = Zi() : Et.exports = eo()), Et.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vt, on;
function to() {
  if (on) return Vt;
  on = 1;
  var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        f[c] = c;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vt = a() ? Object.assign : function(i, o) {
    for (var s, u = r(i), f, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var d in s)
        n.call(s, d) && (u[d] = s[d]);
      if (t) {
        f = t(s);
        for (var p = 0; p < f.length; p++)
          e.call(s, f[p]) && (u[f[p]] = s[f[p]]);
      }
    }
    return u;
  }, Vt;
}
var Xt, sn;
function Tr() {
  if (sn) return Xt;
  sn = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xt = t, Xt;
}
var Jt, ln;
function ea() {
  return ln || (ln = 1, Jt = Function.call.bind(Object.prototype.hasOwnProperty)), Jt;
}
var Qt, un;
function ro() {
  if (un) return Qt;
  un = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Tr(), e = {}, r = /* @__PURE__ */ ea();
    t = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (r(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var p = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = i[c](o, c, u, s, null, n);
          } catch (w) {
            d = w;
          }
          if (d && !(d instanceof Error) && t(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in e)) {
            e[d.message] = !0;
            var h = f ? f() : "";
            t(
              "Failed " + s + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, Qt = a, Qt;
}
var Kt, fn;
function no() {
  if (fn) return Kt;
  fn = 1;
  var t = Zn(), n = to(), e = /* @__PURE__ */ Tr(), r = /* @__PURE__ */ ea(), a = /* @__PURE__ */ ro(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Kt = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(g) {
      var k = g && (f && g[f] || g[c]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", h = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: A(),
      arrayOf: I,
      element: T(),
      elementType: m(),
      instanceOf: J,
      node: ce(),
      objectOf: ae,
      oneOf: R,
      oneOfType: ue,
      shape: Ae,
      exact: de
    };
    function w(g, k) {
      return g === k ? g !== 0 || 1 / g === 1 / k : g !== g && k !== k;
    }
    function b(g, k) {
      this.message = g, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function O(g) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, L = 0;
      function N(z, M, j, $, U, W, fe) {
        if ($ = $ || p, W = W || j, fe !== e) {
          if (u) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = $ + ":" + j;
            !k[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[be] = !0, L++);
          }
        }
        return M[j] == null ? z ? M[j] === null ? new b("The " + U + " `" + W + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new b("The " + U + " `" + W + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : g(M, j, $, U, W);
      }
      var D = N.bind(null, !1);
      return D.isRequired = N.bind(null, !0), D;
    }
    function S(g) {
      function k(L, N, D, z, M, j) {
        var $ = L[N], U = ve($);
        if (U !== g) {
          var W = Te($);
          return new b(
            "Invalid " + z + " `" + M + "` of type " + ("`" + W + "` supplied to `" + D + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return O(k);
    }
    function A() {
      return O(o);
    }
    function I(g) {
      function k(L, N, D, z, M) {
        if (typeof g != "function")
          return new b("Property `" + M + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var j = L[N];
        if (!Array.isArray(j)) {
          var $ = ve(j);
          return new b("Invalid " + z + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected an array."));
        }
        for (var U = 0; U < j.length; U++) {
          var W = g(j, U, D, z, M + "[" + U + "]", e);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return O(k);
    }
    function T() {
      function g(k, L, N, D, z) {
        var M = k[L];
        if (!s(M)) {
          var j = ve(M);
          return new b("Invalid " + D + " `" + z + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(g);
    }
    function m() {
      function g(k, L, N, D, z) {
        var M = k[L];
        if (!t.isValidElementType(M)) {
          var j = ve(M);
          return new b("Invalid " + D + " `" + z + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(g);
    }
    function J(g) {
      function k(L, N, D, z, M) {
        if (!(L[N] instanceof g)) {
          var j = g.name || p, $ = Ge(L[N]);
          return new b("Invalid " + z + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return O(k);
    }
    function R(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function k(L, N, D, z, M) {
        for (var j = L[N], $ = 0; $ < g.length; $++)
          if (w(j, g[$]))
            return null;
        var U = JSON.stringify(g, function(fe, x) {
          var be = Te(x);
          return be === "symbol" ? String(x) : x;
        });
        return new b("Invalid " + z + " `" + M + "` of value `" + String(j) + "` " + ("supplied to `" + D + "`, expected one of " + U + "."));
      }
      return O(k);
    }
    function ae(g) {
      function k(L, N, D, z, M) {
        if (typeof g != "function")
          return new b("Property `" + M + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var j = L[N], $ = ve(j);
        if ($ !== "object")
          return new b("Invalid " + z + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected an object."));
        for (var U in j)
          if (r(j, U)) {
            var W = g(j, U, D, z, M + "." + U, e);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return O(k);
    }
    function ue(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var k = 0; k < g.length; k++) {
        var L = g[k];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + We(L) + " at index " + k + "."
          ), o;
      }
      function N(D, z, M, j, $) {
        for (var U = [], W = 0; W < g.length; W++) {
          var fe = g[W], x = fe(D, z, M, j, $, e);
          if (x == null)
            return null;
          x.data && r(x.data, "expectedType") && U.push(x.data.expectedType);
        }
        var be = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + j + " `" + $ + "` supplied to " + ("`" + M + "`" + be + "."));
      }
      return O(N);
    }
    function ce() {
      function g(k, L, N, D, z) {
        return he(k[L]) ? null : new b("Invalid " + D + " `" + z + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return O(g);
    }
    function Me(g, k, L, N, D) {
      return new b(
        (g || "React class") + ": " + k + " type `" + L + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function Ae(g) {
      function k(L, N, D, z, M) {
        var j = L[N], $ = ve(j);
        if ($ !== "object")
          return new b("Invalid " + z + " `" + M + "` of type `" + $ + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var U in g) {
          var W = g[U];
          if (typeof W != "function")
            return Me(D, z, M, U, Te(W));
          var fe = W(j, U, D, z, M + "." + U, e);
          if (fe)
            return fe;
        }
        return null;
      }
      return O(k);
    }
    function de(g) {
      function k(L, N, D, z, M) {
        var j = L[N], $ = ve(j);
        if ($ !== "object")
          return new b("Invalid " + z + " `" + M + "` of type `" + $ + "` " + ("supplied to `" + D + "`, expected `object`."));
        var U = n({}, L[N], g);
        for (var W in U) {
          var fe = g[W];
          if (r(g, W) && typeof fe != "function")
            return Me(D, z, M, W, Te(fe));
          if (!fe)
            return new b(
              "Invalid " + z + " `" + M + "` key `" + W + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(L[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var x = fe(j, W, D, z, M + "." + W, e);
          if (x)
            return x;
        }
        return null;
      }
      return O(k);
    }
    function he(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(he);
          if (g === null || s(g))
            return !0;
          var k = d(g);
          if (k) {
            var L = k.call(g), N;
            if (k !== g.entries) {
              for (; !(N = L.next()).done; )
                if (!he(N.value))
                  return !1;
            } else
              for (; !(N = L.next()).done; ) {
                var D = N.value;
                if (D && !he(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _e(g, k) {
      return g === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function ve(g) {
      var k = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : _e(k, g) ? "symbol" : k;
    }
    function Te(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var k = ve(g);
      if (k === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function We(g) {
      var k = Te(g);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function Ge(g) {
      return !g.constructor || !g.constructor.name ? p : g.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Kt;
}
var Zt, cn;
function ao() {
  if (cn) return Zt;
  cn = 1;
  var t = /* @__PURE__ */ Tr();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, Zt = function() {
    function r(o, s, u, f, c, d) {
      if (d !== t) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: e,
      resetWarningCache: n
    };
    return i.PropTypes = i, i;
  }, Zt;
}
var dn;
function io() {
  if (dn) return Pt.exports;
  if (dn = 1, process.env.NODE_ENV !== "production") {
    var t = Zn(), n = !0;
    Pt.exports = /* @__PURE__ */ no()(t.isElement, n);
  } else
    Pt.exports = /* @__PURE__ */ ao()();
  return Pt.exports;
}
var oo = /* @__PURE__ */ io();
const xe = /* @__PURE__ */ Xi(oo);
/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */
function ur(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r;
}
function so(t) {
  if (Array.isArray(t)) return t;
}
function lo(t) {
  if (Array.isArray(t)) return ur(t);
}
function uo(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function fo(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ta(r.key), r);
  }
}
function co(t, n, e) {
  return n && fo(t.prototype, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function St(t, n) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!e) {
    if (Array.isArray(t) || (e = kr(t)) || n) {
      e && (t = e);
      var r = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return r >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[r++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      e = e.call(t);
    },
    n: function() {
      var u = e.next();
      return o = u.done, u;
    },
    e: function(u) {
      s = !0, i = u;
    },
    f: function() {
      try {
        o || e.return == null || e.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function F(t, n, e) {
  return (n = ta(n)) in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function mo(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ho(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var r, a, i, o, s = [], u = !0, f = !1;
    try {
      if (i = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        u = !1;
      } else for (; !(u = (r = i.call(e)).done) && (s.push(r.value), s.length !== n); u = !0) ;
    } catch (c) {
      f = !0, a = c;
    } finally {
      try {
        if (!u && e.return != null && (o = e.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw a;
      }
    }
    return s;
  }
}
function po() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mn(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function y(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? mn(Object(e), !0).forEach(function(r) {
      F(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : mn(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
function Nt(t, n) {
  return so(t) || ho(t, n) || kr(t, n) || po();
}
function Ee(t) {
  return lo(t) || mo(t) || kr(t) || vo();
}
function yo(t, n) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function ta(t) {
  var n = yo(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Rt(t) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rt(t);
}
function kr(t, n) {
  if (t) {
    if (typeof t == "string") return ur(t, n);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ur(t, n) : void 0;
  }
}
var hn = function() {
}, Or = {}, ra = {}, na = null, aa = {
  mark: hn,
  measure: hn
};
try {
  typeof window < "u" && (Or = window), typeof document < "u" && (ra = document), typeof MutationObserver < "u" && (na = MutationObserver), typeof performance < "u" && (aa = performance);
} catch {
}
var go = Or.navigator || {}, pn = go.userAgent, vn = pn === void 0 ? "" : pn, je = Or, K = ra, yn = na, Tt = aa;
je.document;
var De = !!K.documentElement && !!K.head && typeof K.addEventListener == "function" && typeof K.createElement == "function", ia = ~vn.indexOf("MSIE") || ~vn.indexOf("Trident/"), er, bo = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, wo = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, oa = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  graphite: {
    "fa-thin": "thin",
    fagt: "thin"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, xo = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sa = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], se = "classic", vt = "duotone", la = "sharp", ua = "sharp-duotone", fa = "chisel", ca = "etch", da = "graphite", ma = "jelly", ha = "jelly-duo", pa = "jelly-fill", va = "notdog", ya = "notdog-duo", ga = "slab", ba = "slab-press", wa = "thumbprint", xa = "utility", Pa = "utility-duo", Ea = "utility-fill", Ta = "whiteboard", Po = "Classic", Eo = "Duotone", To = "Sharp", ko = "Sharp Duotone", Oo = "Chisel", So = "Etch", Ao = "Graphite", _o = "Jelly", Io = "Jelly Duo", Ro = "Jelly Fill", Co = "Notdog", Fo = "Notdog Duo", Do = "Slab", Mo = "Slab Press", jo = "Thumbprint", No = "Utility", Lo = "Utility Duo", $o = "Utility Fill", Wo = "Whiteboard", ka = [se, vt, la, ua, fa, ca, da, ma, ha, pa, va, ya, ga, ba, wa, xa, Pa, Ea, Ta];
er = {}, F(F(F(F(F(F(F(F(F(F(er, se, Po), vt, Eo), la, To), ua, ko), fa, Oo), ca, So), da, Ao), ma, _o), ha, Io), pa, Ro), F(F(F(F(F(F(F(F(F(er, va, Co), ya, Fo), ga, Do), ba, Mo), wa, jo), xa, No), Pa, Lo), Ea, $o), Ta, Wo);
var Yo = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  graphite: {
    100: "fagt"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, zo = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Graphite": {
    100: "fagt",
    normal: "fagt"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, qo = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["graphite", {
  defaultShortPrefixId: "fagt",
  defaultStyleId: "thin",
  styleIds: ["thin"],
  futureStyleIds: [],
  defaultFontWeight: 100
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), Ho = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  graphite: {
    thin: "fagt"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, Oa = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], gn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Uo = ["kit"], Go = "kit", Bo = "kit-duotone", Vo = "Kit", Xo = "Kit Duotone";
F(F({}, Go, Vo), Bo, Xo);
var Jo = {
  kit: {
    "fa-kit": "fak"
  }
}, Qo = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ko = {
  kit: {
    fak: "fa-kit"
  }
}, bn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, tr, kt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Zo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], es = "classic", ts = "duotone", rs = "sharp", ns = "sharp-duotone", as = "chisel", is = "etch", os = "graphite", ss = "jelly", ls = "jelly-duo", us = "jelly-fill", fs = "notdog", cs = "notdog-duo", ds = "slab", ms = "slab-press", hs = "thumbprint", ps = "utility", vs = "utility-duo", ys = "utility-fill", gs = "whiteboard", bs = "Classic", ws = "Duotone", xs = "Sharp", Ps = "Sharp Duotone", Es = "Chisel", Ts = "Etch", ks = "Graphite", Os = "Jelly", Ss = "Jelly Duo", As = "Jelly Fill", _s = "Notdog", Is = "Notdog Duo", Rs = "Slab", Cs = "Slab Press", Fs = "Thumbprint", Ds = "Utility", Ms = "Utility Duo", js = "Utility Fill", Ns = "Whiteboard";
tr = {}, F(F(F(F(F(F(F(F(F(F(tr, es, bs), ts, ws), rs, xs), ns, Ps), as, Es), is, Ts), os, ks), ss, Os), ls, Ss), us, As), F(F(F(F(F(F(F(F(F(tr, fs, _s), cs, Is), ds, Rs), ms, Cs), hs, Fs), ps, Ds), vs, Ms), ys, js), gs, Ns);
var Ls = "kit", $s = "kit-duotone", Ws = "Kit", Ys = "Kit Duotone";
F(F({}, Ls, Ws), $s, Ys);
var zs = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  graphite: {
    "fa-thin": "fagt"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, qs = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  graphite: ["fagt"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, fr = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  graphite: {
    fagt: "fa-thin"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, Hs = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], Sa = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(Zo, Hs), Us = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], Aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Gs = Aa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Bs = ["aw", "fw", "pull-left", "pull-right"], Vs = [].concat(Ee(Object.keys(qs)), Us, Bs, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", kt.GROUP, kt.SWAP_OPACITY, kt.PRIMARY, kt.SECONDARY]).concat(Aa.map(function(t) {
  return "".concat(t, "x");
})).concat(Gs.map(function(t) {
  return "w-".concat(t);
})), Xs = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, Ce = "___FONT_AWESOME___", cr = 16, _a = "fa", Ia = "svg-inline--fa", He = "data-fa-i2svg", dr = "data-fa-pseudo-element", Js = "data-fa-pseudo-element-pending", Sr = "data-prefix", Ar = "data-icon", wn = "fontawesome-i2svg", Qs = "async", Ks = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ra = ["::before", "::after", ":before", ":after"], Ca = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function yt(t) {
  return new Proxy(t, {
    get: function(e, r) {
      return r in e ? e[r] : e[se];
    }
  });
}
var Fa = y({}, oa);
Fa[se] = y(y(y(y({}, {
  "fa-duotone": "duotone"
}), oa[se]), gn.kit), gn["kit-duotone"]);
var Zs = yt(Fa), mr = y({}, Ho);
mr[se] = y(y(y(y({}, {
  duotone: "fad"
}), mr[se]), bn.kit), bn["kit-duotone"]);
var xn = yt(mr), hr = y({}, fr);
hr[se] = y(y({}, hr[se]), Ko.kit);
var _r = yt(hr), pr = y({}, zs);
pr[se] = y(y({}, pr[se]), Jo.kit);
yt(pr);
var el = bo, Da = "fa-layers-text", tl = wo, rl = y({}, Yo);
yt(rl);
var nl = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], rr = xo, al = [].concat(Ee(Uo), Ee(Vs)), ct = je.FontAwesomeConfig || {};
function il(t) {
  var n = K.querySelector("script[" + t + "]");
  if (n)
    return n.getAttribute(t);
}
function ol(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (K && typeof K.querySelector == "function") {
  var sl = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  sl.forEach(function(t) {
    var n = Nt(t, 2), e = n[0], r = n[1], a = ol(il(e));
    a != null && (ct[r] = a);
  });
}
var Ma = {
  styleDefault: "solid",
  familyDefault: se,
  cssPrefix: _a,
  replacementClass: Ia,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ct.familyPrefix && (ct.cssPrefix = ct.familyPrefix);
var et = y(y({}, Ma), ct);
et.autoReplaceSvg || (et.observeMutations = !1);
var _ = {};
Object.keys(Ma).forEach(function(t) {
  Object.defineProperty(_, t, {
    enumerable: !0,
    set: function(e) {
      et[t] = e, dt.forEach(function(r) {
        return r(_);
      });
    },
    get: function() {
      return et[t];
    }
  });
});
Object.defineProperty(_, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    et.cssPrefix = n, dt.forEach(function(e) {
      return e(_);
    });
  },
  get: function() {
    return et.cssPrefix;
  }
});
je.FontAwesomeConfig = _;
var dt = [];
function ll(t) {
  return dt.push(t), function() {
    dt.splice(dt.indexOf(t), 1);
  };
}
var Je = cr, Se = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ul(t) {
  if (!(!t || !De)) {
    var n = K.createElement("style");
    n.setAttribute("type", "text/css"), n.innerHTML = t;
    for (var e = K.head.childNodes, r = null, a = e.length - 1; a > -1; a--) {
      var i = e[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return K.head.insertBefore(n, r), t;
  }
}
var fl = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Pn() {
  for (var t = 12, n = ""; t-- > 0; )
    n += fl[Math.random() * 62 | 0];
  return n;
}
function rt(t) {
  for (var n = [], e = (t || []).length >>> 0; e--; )
    n[e] = t[e];
  return n;
}
function Ir(t) {
  return t.classList ? rt(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(n) {
    return n;
  });
}
function ja(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function cl(t) {
  return Object.keys(t || {}).reduce(function(n, e) {
    return n + "".concat(e, '="').concat(ja(t[e]), '" ');
  }, "").trim();
}
function Lt(t) {
  return Object.keys(t || {}).reduce(function(n, e) {
    return n + "".concat(e, ": ").concat(t[e].trim(), ";");
  }, "");
}
function Rr(t) {
  return t.size !== Se.size || t.x !== Se.x || t.y !== Se.y || t.rotate !== Se.rotate || t.flipX || t.flipY;
}
function dl(t) {
  var n = t.transform, e = t.containerWidth, r = t.iconWidth, a = {
    transform: "translate(".concat(e / 2, " 256)")
  }, i = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), o = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), s = "rotate(".concat(n.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: f
  };
}
function ml(t) {
  var n = t.transform, e = t.width, r = e === void 0 ? cr : e, a = t.height, i = a === void 0 ? cr : a, o = "";
  return ia ? o += "translate(".concat(n.x / Je - r / 2, "em, ").concat(n.y / Je - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(n.x / Je, "em), calc(-50% + ").concat(n.y / Je, "em)) "), o += "scale(".concat(n.size / Je * (n.flipX ? -1 : 1), ", ").concat(n.size / Je * (n.flipY ? -1 : 1), ") "), o += "rotate(".concat(n.rotate, "deg) "), o;
}
var hl = `:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function Na() {
  var t = _a, n = Ia, e = _.cssPrefix, r = _.replacementClass, a = hl;
  if (e !== t || r !== n) {
    var i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(n), "g");
    a = a.replace(i, ".".concat(e, "-")).replace(o, "--".concat(e, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var En = !1;
function nr() {
  _.autoAddCss && !En && (ul(Na()), En = !0);
}
var pl = {
  mixout: function() {
    return {
      dom: {
        css: Na,
        insertCss: nr
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        nr();
      },
      beforeI2svg: function() {
        nr();
      }
    };
  }
}, Fe = je || {};
Fe[Ce] || (Fe[Ce] = {});
Fe[Ce].styles || (Fe[Ce].styles = {});
Fe[Ce].hooks || (Fe[Ce].hooks = {});
Fe[Ce].shims || (Fe[Ce].shims = []);
var Pe = Fe[Ce], La = [], $a = function() {
  K.removeEventListener("DOMContentLoaded", $a), Ct = 1, La.map(function(n) {
    return n();
  });
}, Ct = !1;
De && (Ct = (K.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(K.readyState), Ct || K.addEventListener("DOMContentLoaded", $a));
function vl(t) {
  De && (Ct ? setTimeout(t, 0) : La.push(t));
}
function gt(t) {
  var n = t.tag, e = t.attributes, r = e === void 0 ? {} : e, a = t.children, i = a === void 0 ? [] : a;
  return typeof t == "string" ? ja(t) : "<".concat(n, " ").concat(cl(r), ">").concat(i.map(gt).join(""), "</").concat(n, ">");
}
function Tn(t, n, e) {
  if (t && t[n] && t[n][e])
    return {
      prefix: n,
      iconName: e,
      icon: t[n][e]
    };
}
var ar = function(n, e, r, a) {
  var i = Object.keys(n), o = i.length, s = e, u, f, c;
  for (r === void 0 ? (u = 1, c = n[i[0]]) : (u = 0, c = r); u < o; u++)
    f = i[u], c = s(c, n[f], f, n);
  return c;
};
function Wa(t) {
  return Ee(t).length !== 1 ? null : t.codePointAt(0).toString(16);
}
function kn(t) {
  return Object.keys(t).reduce(function(n, e) {
    var r = t[e], a = !!r.icon;
    return a ? n[r.iconName] = r.icon : n[e] = r, n;
  }, {});
}
function vr(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = e.skipHooks, a = r === void 0 ? !1 : r, i = kn(n);
  typeof Pe.hooks.addPack == "function" && !a ? Pe.hooks.addPack(t, kn(n)) : Pe.styles[t] = y(y({}, Pe.styles[t] || {}), i), t === "fas" && vr("fa", n);
}
var ht = Pe.styles, yl = Pe.shims, Ya = Object.keys(_r), gl = Ya.reduce(function(t, n) {
  return t[n] = Object.keys(_r[n]), t;
}, {}), Cr = null, za = {}, qa = {}, Ha = {}, Ua = {}, Ga = {};
function bl(t) {
  return ~al.indexOf(t);
}
function wl(t, n) {
  var e = n.split("-"), r = e[0], a = e.slice(1).join("-");
  return r === t && a !== "" && !bl(a) ? a : null;
}
var Ba = function() {
  var n = function(i) {
    return ar(ht, function(o, s, u) {
      return o[u] = ar(s, i, {}), o;
    }, {});
  };
  za = n(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(u) {
        return typeof u == "number";
      });
      s.forEach(function(u) {
        a[u.toString(16)] = o;
      });
    }
    return a;
  }), qa = n(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(u) {
        return typeof u == "string";
      });
      s.forEach(function(u) {
        a[u] = o;
      });
    }
    return a;
  }), Ga = n(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(u) {
      a[u] = o;
    }), a;
  });
  var e = "far" in ht || _.autoFetchSvg, r = ar(yl, function(a, i) {
    var o = i[0], s = i[1], u = i[2];
    return s === "far" && !e && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: u
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: u
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Ha = r.names, Ua = r.unicodes, Cr = $t(_.styleDefault, {
    family: _.familyDefault
  });
};
ll(function(t) {
  Cr = $t(t.styleDefault, {
    family: _.familyDefault
  });
});
Ba();
function Fr(t, n) {
  return (za[t] || {})[n];
}
function xl(t, n) {
  return (qa[t] || {})[n];
}
function qe(t, n) {
  return (Ga[t] || {})[n];
}
function Va(t) {
  return Ha[t] || {
    prefix: null,
    iconName: null
  };
}
function Pl(t) {
  var n = Ua[t], e = Fr("fas", t);
  return n || (e ? {
    prefix: "fas",
    iconName: e
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ne() {
  return Cr;
}
var Xa = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function El(t) {
  var n = se, e = Ya.reduce(function(r, a) {
    return r[a] = "".concat(_.cssPrefix, "-").concat(a), r;
  }, {});
  return ka.forEach(function(r) {
    (t.includes(e[r]) || t.some(function(a) {
      return gl[r].includes(a);
    })) && (n = r);
  }), n;
}
function $t(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.family, r = e === void 0 ? se : e, a = Zs[r][t];
  if (r === vt && !t)
    return "fad";
  var i = xn[r][t] || xn[r][a], o = t in Pe.styles ? t : null, s = i || o || null;
  return s;
}
function Tl(t) {
  var n = [], e = null;
  return t.forEach(function(r) {
    var a = wl(_.cssPrefix, r);
    a ? e = a : r && n.push(r);
  }), {
    iconName: e,
    rest: n
  };
}
function On(t) {
  return t.sort().filter(function(n, e, r) {
    return r.indexOf(n) === e;
  });
}
var Sn = Sa.concat(Oa);
function Wt(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.skipLookups, r = e === void 0 ? !1 : e, a = null, i = On(t.filter(function(h) {
    return Sn.includes(h);
  })), o = On(t.filter(function(h) {
    return !Sn.includes(h);
  })), s = i.filter(function(h) {
    return a = h, !sa.includes(h);
  }), u = Nt(s, 1), f = u[0], c = f === void 0 ? null : f, d = El(i), p = y(y({}, Tl(o)), {}, {
    prefix: $t(c, {
      family: d
    })
  });
  return y(y(y({}, p), Al({
    values: t,
    family: d,
    styles: ht,
    config: _,
    canonical: p,
    givenPrefix: a
  })), kl(r, a, p));
}
function kl(t, n, e) {
  var r = e.prefix, a = e.iconName;
  if (t || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  var i = n === "fa" ? Va(a) : {}, o = qe(r, a);
  return a = i.iconName || o || a, r = i.prefix || r, r === "far" && !ht.far && ht.fas && !_.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
var Ol = ka.filter(function(t) {
  return t !== se || t !== vt;
}), Sl = Object.keys(fr).filter(function(t) {
  return t !== se;
}).map(function(t) {
  return Object.keys(fr[t]);
}).flat();
function Al(t) {
  var n = t.values, e = t.family, r = t.canonical, a = t.givenPrefix, i = a === void 0 ? "" : a, o = t.styles, s = o === void 0 ? {} : o, u = t.config, f = u === void 0 ? {} : u, c = e === vt, d = n.includes("fa-duotone") || n.includes("fad"), p = f.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (n.includes("fa-brands") || n.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ol.includes(e)) {
    var w = Object.keys(s).find(function(O) {
      return Sl.includes(O);
    });
    if (w || f.autoFetchSvg) {
      var b = qo.get(e).defaultShortPrefixId;
      r.prefix = b, r.iconName = qe(r.prefix, r.iconName) || r.iconName;
    }
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Ne() || "fas"), r;
}
var _l = /* @__PURE__ */ (function() {
  function t() {
    uo(this, t), this.definitions = {};
  }
  return co(t, [{
    key: "add",
    value: function() {
      for (var e = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        e.definitions[s] = y(y({}, e.definitions[s] || {}), o[s]), vr(s, o[s]);
        var u = _r[se][s];
        u && vr(u, o[s]), Ba();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(e, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, u = o.iconName, f = o.icon, c = f[2];
        e[s] || (e[s] = {}), c.length > 0 && c.forEach(function(d) {
          typeof d == "string" && (e[s][d] = f);
        }), e[s][u] = f;
      }), e;
    }
  }]);
})(), An = [], Ke = {}, Ze = {}, Il = Object.keys(Ze);
function Rl(t, n) {
  var e = n.mixoutsTo;
  return An = t, Ke = {}, Object.keys(Ze).forEach(function(r) {
    Il.indexOf(r) === -1 && delete Ze[r];
  }), An.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (e[o] = a[o]), Rt(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        e[o] || (e[o] = {}), e[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        Ke[o] || (Ke[o] = []), Ke[o].push(i[o]);
      });
    }
    r.provides && r.provides(Ze);
  }), e;
}
function yr(t, n) {
  for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++)
    r[a - 2] = arguments[a];
  var i = Ke[t] || [];
  return i.forEach(function(o) {
    n = o.apply(null, [n].concat(r));
  }), n;
}
function Ue(t) {
  for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    e[r - 1] = arguments[r];
  var a = Ke[t] || [];
  a.forEach(function(i) {
    i.apply(null, e);
  });
}
function Le() {
  var t = arguments[0], n = Array.prototype.slice.call(arguments, 1);
  return Ze[t] ? Ze[t].apply(null, n) : void 0;
}
function gr(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var n = t.iconName, e = t.prefix || Ne();
  if (n)
    return n = qe(e, n) || n, Tn(Ja.definitions, e, n) || Tn(Pe.styles, e, n);
}
var Ja = new _l(), Cl = function() {
  _.autoReplaceSvg = !1, _.observeMutations = !1, Ue("noAuto");
}, Fl = {
  i2svg: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return De ? (Ue("beforeI2svg", n), Le("pseudoElements2svg", n), Le("i2svg", n)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.autoReplaceSvgRoot;
    _.autoReplaceSvg === !1 && (_.autoReplaceSvg = !0), _.observeMutations = !0, vl(function() {
      Ml({
        autoReplaceSvgRoot: e
      }), Ue("watch", n);
    });
  }
}, Dl = {
  icon: function(n) {
    if (n === null)
      return null;
    if (Rt(n) === "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: qe(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      var e = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], r = $t(n[0]);
      return {
        prefix: r,
        iconName: qe(r, e) || e
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(_.cssPrefix, "-")) > -1 || n.match(el))) {
      var a = Wt(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Ne(),
        iconName: qe(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof n == "string") {
      var i = Ne();
      return {
        prefix: i,
        iconName: qe(i, n) || n
      };
    }
  }
}, ge = {
  noAuto: Cl,
  config: _,
  dom: Fl,
  parse: Dl,
  library: Ja,
  findIconDefinition: gr,
  toHtml: gt
}, Ml = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.autoReplaceSvgRoot, r = e === void 0 ? K : e;
  (Object.keys(Pe.styles).length > 0 || _.autoFetchSvg) && De && _.autoReplaceSvg && ge.dom.i2svg({
    node: r
  });
};
function Yt(t, n) {
  return Object.defineProperty(t, "abstract", {
    get: n
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(r) {
        return gt(r);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (De) {
        var r = K.createElement("div");
        return r.innerHTML = t.html, r.children;
      }
    }
  }), t;
}
function jl(t) {
  var n = t.children, e = t.main, r = t.mask, a = t.attributes, i = t.styles, o = t.transform;
  if (Rr(o) && e.found && !r.found) {
    var s = e.width, u = e.height, f = {
      x: s / u / 2,
      y: 0.5
    };
    a.style = Lt(y(y({}, i), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: n
  }];
}
function Nl(t) {
  var n = t.prefix, e = t.iconName, r = t.children, a = t.attributes, i = t.symbol, o = i === !0 ? "".concat(n, "-").concat(_.cssPrefix, "-").concat(e) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: y(y({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Ll(t) {
  var n = ["aria-label", "aria-labelledby", "title", "role"];
  return n.some(function(e) {
    return e in t;
  });
}
function Dr(t) {
  var n = t.icons, e = n.main, r = n.mask, a = t.prefix, i = t.iconName, o = t.transform, s = t.symbol, u = t.maskId, f = t.extra, c = t.watchable, d = c === void 0 ? !1 : c, p = r.found ? r : e, h = p.width, w = p.height, b = [_.replacementClass, i ? "".concat(_.cssPrefix, "-").concat(i) : ""].filter(function(m) {
    return f.classes.indexOf(m) === -1;
  }).filter(function(m) {
    return m !== "" || !!m;
  }).concat(f.classes).join(" "), O = {
    children: [],
    attributes: y(y({}, f.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: b,
      role: f.attributes.role || "img",
      viewBox: "0 0 ".concat(h, " ").concat(w)
    })
  };
  !Ll(f.attributes) && !f.attributes["aria-hidden"] && (O.attributes["aria-hidden"] = "true"), d && (O.attributes[He] = "");
  var S = y(y({}, O), {}, {
    prefix: a,
    iconName: i,
    main: e,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: y({}, f.styles)
  }), A = r.found && e.found ? Le("generateAbstractMask", S) || {
    children: [],
    attributes: {}
  } : Le("generateAbstractIcon", S) || {
    children: [],
    attributes: {}
  }, I = A.children, T = A.attributes;
  return S.children = I, S.attributes = T, s ? Nl(S) : jl(S);
}
function _n(t) {
  var n = t.content, e = t.width, r = t.height, a = t.transform, i = t.extra, o = t.watchable, s = o === void 0 ? !1 : o, u = y(y({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  s && (u[He] = "");
  var f = y({}, i.styles);
  Rr(a) && (f.transform = ml({
    transform: a,
    width: e,
    height: r
  }), f["-webkit-transform"] = f.transform);
  var c = Lt(f);
  c.length > 0 && (u.style = c);
  var d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [n]
  }), d;
}
function $l(t) {
  var n = t.content, e = t.extra, r = y(y({}, e.attributes), {}, {
    class: e.classes.join(" ")
  }), a = Lt(e.styles);
  a.length > 0 && (r.style = a);
  var i = [];
  return i.push({
    tag: "span",
    attributes: r,
    children: [n]
  }), i;
}
var ir = Pe.styles;
function br(t) {
  var n = t[0], e = t[1], r = t.slice(4), a = Nt(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(_.cssPrefix, "-").concat(rr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(_.cssPrefix, "-").concat(rr.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(_.cssPrefix, "-").concat(rr.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: n,
    height: e,
    icon: o
  };
}
var Wl = {
  found: !1,
  width: 512,
  height: 512
};
function Yl(t, n) {
  !Ca && !_.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(n, '" is missing.'));
}
function wr(t, n) {
  var e = n;
  return n === "fa" && _.styleDefault !== null && (n = Ne()), new Promise(function(r, a) {
    if (e === "fa") {
      var i = Va(t) || {};
      t = i.iconName || t, n = i.prefix || n;
    }
    if (t && n && ir[n] && ir[n][t]) {
      var o = ir[n][t];
      return r(br(o));
    }
    Yl(t, n), r(y(y({}, Wl), {}, {
      icon: _.showMissingIcons && t ? Le("missingIconAbstract") || {} : {}
    }));
  });
}
var In = function() {
}, xr = _.measurePerformance && Tt && Tt.mark && Tt.measure ? Tt : {
  mark: In,
  measure: In
}, ft = 'FA "7.2.0"', zl = function(n) {
  return xr.mark("".concat(ft, " ").concat(n, " begins")), function() {
    return Qa(n);
  };
}, Qa = function(n) {
  xr.mark("".concat(ft, " ").concat(n, " ends")), xr.measure("".concat(ft, " ").concat(n), "".concat(ft, " ").concat(n, " begins"), "".concat(ft, " ").concat(n, " ends"));
}, Mr = {
  begin: zl,
  end: Qa
}, At = function() {
};
function Rn(t) {
  var n = t.getAttribute ? t.getAttribute(He) : null;
  return typeof n == "string";
}
function ql(t) {
  var n = t.getAttribute ? t.getAttribute(Sr) : null, e = t.getAttribute ? t.getAttribute(Ar) : null;
  return n && e;
}
function Hl(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(_.replacementClass);
}
function Ul() {
  if (_.autoReplaceSvg === !0)
    return _t.replace;
  var t = _t[_.autoReplaceSvg];
  return t || _t.replace;
}
function Gl(t) {
  return K.createElementNS("http://www.w3.org/2000/svg", t);
}
function Bl(t) {
  return K.createElement(t);
}
function Ka(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.ceFn, r = e === void 0 ? t.tag === "svg" ? Gl : Bl : e;
  if (typeof t == "string")
    return K.createTextNode(t);
  var a = r(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    a.setAttribute(o, t.attributes[o]);
  });
  var i = t.children || [];
  return i.forEach(function(o) {
    a.appendChild(Ka(o, {
      ceFn: r
    }));
  }), a;
}
function Vl(t) {
  var n = " ".concat(t.outerHTML, " ");
  return n = "".concat(n, "Font Awesome fontawesome.com "), n;
}
var _t = {
  replace: function(n) {
    var e = n[0];
    if (e.parentNode)
      if (n[1].forEach(function(a) {
        e.parentNode.insertBefore(Ka(a), e);
      }), e.getAttribute(He) === null && _.keepOriginalSource) {
        var r = K.createComment(Vl(e));
        e.parentNode.replaceChild(r, e);
      } else
        e.remove();
  },
  nest: function(n) {
    var e = n[0], r = n[1];
    if (~Ir(e).indexOf(_.replacementClass))
      return _t.replace(n);
    var a = new RegExp("".concat(_.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, u) {
        return u === _.replacementClass || u.match(a) ? s.toSvg.push(u) : s.toNode.push(u), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return gt(s);
    }).join(`
`);
    e.setAttribute(He, ""), e.innerHTML = o;
  }
};
function Cn(t) {
  t();
}
function Za(t, n) {
  var e = typeof n == "function" ? n : At;
  if (t.length === 0)
    e();
  else {
    var r = Cn;
    _.mutateApproach === Qs && (r = je.requestAnimationFrame || Cn), r(function() {
      var a = Ul(), i = Mr.begin("mutate");
      t.map(a), i(), e();
    });
  }
}
var jr = !1;
function ei() {
  jr = !0;
}
function Pr() {
  jr = !1;
}
var Ft = null;
function Fn(t) {
  if (yn && _.observeMutations) {
    var n = t.treeCallback, e = n === void 0 ? At : n, r = t.nodeCallback, a = r === void 0 ? At : r, i = t.pseudoElementsCallback, o = i === void 0 ? At : i, s = t.observeMutationsRoot, u = s === void 0 ? K : s;
    Ft = new yn(function(f) {
      if (!jr) {
        var c = Ne();
        rt(f).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !Rn(d.addedNodes[0]) && (_.searchPseudoElements && o(d.target), e(d.target)), d.type === "attributes" && d.target.parentNode && _.searchPseudoElements && o([d.target], !0), d.type === "attributes" && Rn(d.target) && ~nl.indexOf(d.attributeName))
            if (d.attributeName === "class" && ql(d.target)) {
              var p = Wt(Ir(d.target)), h = p.prefix, w = p.iconName;
              d.target.setAttribute(Sr, h || c), w && d.target.setAttribute(Ar, w);
            } else Hl(d.target) && a(d.target);
        });
      }
    }), De && Ft.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Xl() {
  Ft && Ft.disconnect();
}
function Jl(t) {
  var n = t.getAttribute("style"), e = [];
  return n && (e = n.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), e;
}
function Ql(t) {
  var n = t.getAttribute("data-prefix"), e = t.getAttribute("data-icon"), r = t.innerText !== void 0 ? t.innerText.trim() : "", a = Wt(Ir(t));
  return a.prefix || (a.prefix = Ne()), n && e && (a.prefix = n, a.iconName = e), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = xl(a.prefix, t.innerText) || Fr(a.prefix, Wa(t.innerText))), !a.iconName && _.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = t.firstChild.data)), a;
}
function Kl(t) {
  var n = rt(t.attributes).reduce(function(e, r) {
    return e.name !== "class" && e.name !== "style" && (e[r.name] = r.value), e;
  }, {});
  return n;
}
function Zl() {
  return {
    iconName: null,
    prefix: null,
    transform: Se,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Dn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, e = Ql(t), r = e.iconName, a = e.prefix, i = e.rest, o = Kl(t), s = yr("parseNodeAttributes", {}, t), u = n.styleParser ? Jl(t) : [];
  return y({
    iconName: r,
    prefix: a,
    transform: Se,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: u,
      attributes: o
    }
  }, s);
}
var eu = Pe.styles;
function ti(t) {
  var n = _.autoReplaceSvg === "nest" ? Dn(t, {
    styleParser: !1
  }) : Dn(t);
  return ~n.extra.classes.indexOf(Da) ? Le("generateLayersText", t, n) : Le("generateSvgReplacementMutation", t, n);
}
function tu() {
  return [].concat(Ee(Oa), Ee(Sa));
}
function Mn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!De) return Promise.resolve();
  var e = K.documentElement.classList, r = function(d) {
    return e.add("".concat(wn, "-").concat(d));
  }, a = function(d) {
    return e.remove("".concat(wn, "-").concat(d));
  }, i = _.autoFetchSvg ? tu() : sa.concat(Object.keys(eu));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Da, ":not([").concat(He, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(He, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = rt(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var u = Mr.begin("onTree"), f = s.reduce(function(c, d) {
    try {
      var p = ti(d);
      p && c.push(p);
    } catch (h) {
      Ca || h.name === "MissingIcon" && console.error(h);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(f).then(function(p) {
      Za(p, function() {
        r("active"), r("complete"), a("pending"), typeof n == "function" && n(), u(), c();
      });
    }).catch(function(p) {
      u(), d(p);
    });
  });
}
function ru(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ti(t).then(function(e) {
    e && Za([e], n);
  });
}
function nu(t) {
  return function(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (n || {}).icon ? n : gr(n || {}), a = e.mask;
    return a && (a = (a || {}).icon ? a : gr(a || {})), t(r, y(y({}, e), {}, {
      mask: a
    }));
  };
}
var au = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.transform, a = r === void 0 ? Se : r, i = e.symbol, o = i === void 0 ? !1 : i, s = e.mask, u = s === void 0 ? null : s, f = e.maskId, c = f === void 0 ? null : f, d = e.classes, p = d === void 0 ? [] : d, h = e.attributes, w = h === void 0 ? {} : h, b = e.styles, O = b === void 0 ? {} : b;
  if (n) {
    var S = n.prefix, A = n.iconName, I = n.icon;
    return Yt(y({
      type: "icon"
    }, n), function() {
      return Ue("beforeDOMElementCreation", {
        iconDefinition: n,
        params: e
      }), Dr({
        icons: {
          main: br(I),
          mask: u ? br(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: S,
        iconName: A,
        transform: y(y({}, Se), a),
        symbol: o,
        maskId: c,
        extra: {
          attributes: w,
          styles: O,
          classes: p
        }
      });
    });
  }
}, iu = {
  mixout: function() {
    return {
      icon: nu(au)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.treeCallback = Mn, e.nodeCallback = ru, e;
      }
    };
  },
  provides: function(n) {
    n.i2svg = function(e) {
      var r = e.node, a = r === void 0 ? K : r, i = e.callback, o = i === void 0 ? function() {
      } : i;
      return Mn(a, o);
    }, n.generateSvgReplacementMutation = function(e, r) {
      var a = r.iconName, i = r.prefix, o = r.transform, s = r.symbol, u = r.mask, f = r.maskId, c = r.extra;
      return new Promise(function(d, p) {
        Promise.all([wr(a, i), u.iconName ? wr(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var w = Nt(h, 2), b = w[0], O = w[1];
          d([e, Dr({
            icons: {
              main: b,
              mask: O
            },
            prefix: i,
            iconName: a,
            transform: o,
            symbol: s,
            maskId: f,
            extra: c,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, n.generateAbstractIcon = function(e) {
      var r = e.children, a = e.attributes, i = e.main, o = e.transform, s = e.styles, u = Lt(s);
      u.length > 0 && (a.style = u);
      var f;
      return Rr(o) && (f = Le("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(f || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, ou = {
  mixout: function() {
    return {
      layer: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return Yt({
          type: "layer"
        }, function() {
          Ue("beforeDOMElementCreation", {
            assembler: e,
            params: r
          });
          var o = [];
          return e(function(s) {
            Array.isArray(s) ? s.map(function(u) {
              o = o.concat(u.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(_.cssPrefix, "-layers")].concat(Ee(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, su = {
  mixout: function() {
    return {
      counter: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        r.title;
        var a = r.classes, i = a === void 0 ? [] : a, o = r.attributes, s = o === void 0 ? {} : o, u = r.styles, f = u === void 0 ? {} : u;
        return Yt({
          type: "counter",
          content: e
        }, function() {
          return Ue("beforeDOMElementCreation", {
            content: e,
            params: r
          }), $l({
            content: e.toString(),
            extra: {
              attributes: s,
              styles: f,
              classes: ["".concat(_.cssPrefix, "-layers-counter")].concat(Ee(i))
            }
          });
        });
      }
    };
  }
}, lu = {
  mixout: function() {
    return {
      text: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? Se : a, o = r.classes, s = o === void 0 ? [] : o, u = r.attributes, f = u === void 0 ? {} : u, c = r.styles, d = c === void 0 ? {} : c;
        return Yt({
          type: "text",
          content: e
        }, function() {
          return Ue("beforeDOMElementCreation", {
            content: e,
            params: r
          }), _n({
            content: e,
            transform: y(y({}, Se), i),
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(_.cssPrefix, "-layers-text")].concat(Ee(s))
            }
          });
        });
      }
    };
  },
  provides: function(n) {
    n.generateLayersText = function(e, r) {
      var a = r.transform, i = r.extra, o = null, s = null;
      if (ia) {
        var u = parseInt(getComputedStyle(e).fontSize, 10), f = e.getBoundingClientRect();
        o = f.width / u, s = f.height / u;
      }
      return Promise.resolve([e, _n({
        content: e.innerHTML,
        width: o,
        height: s,
        transform: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, ri = new RegExp('"', "ug"), jn = [1105920, 1112319], Nn = y(y(y(y({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), zo), Xs), Qo), Er = Object.keys(Nn).reduce(function(t, n) {
  return t[n.toLowerCase()] = Nn[n], t;
}, {}), uu = Object.keys(Er).reduce(function(t, n) {
  var e = Er[n];
  return t[n] = e[900] || Ee(Object.entries(e))[0][1], t;
}, {});
function fu(t) {
  var n = t.replace(ri, "");
  return Wa(Ee(n)[0] || "");
}
function cu(t) {
  var n = t.getPropertyValue("font-feature-settings").includes("ss01"), e = t.getPropertyValue("content"), r = e.replace(ri, ""), a = r.codePointAt(0), i = a >= jn[0] && a <= jn[1], o = r.length === 2 ? r[0] === r[1] : !1;
  return i || o || n;
}
function du(t, n) {
  var e = t.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(n), a = isNaN(r) ? "normal" : r;
  return (Er[e] || {})[a] || uu[e];
}
function Ln(t, n) {
  var e = "".concat(Js).concat(n.replace(":", "-"));
  return new Promise(function(r, a) {
    if (t.getAttribute(e) !== null)
      return r();
    var i = rt(t.children), o = i.filter(function(J) {
      return J.getAttribute(dr) === n;
    })[0], s = je.getComputedStyle(t, n), u = s.getPropertyValue("font-family"), f = u.match(tl), c = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !f)
      return t.removeChild(o), r();
    if (f && d !== "none" && d !== "") {
      var p = s.getPropertyValue("content"), h = du(u, c), w = fu(p), b = f[0].startsWith("FontAwesome"), O = cu(s), S = Fr(h, w), A = S;
      if (b) {
        var I = Pl(w);
        I.iconName && I.prefix && (S = I.iconName, h = I.prefix);
      }
      if (S && !O && (!o || o.getAttribute(Sr) !== h || o.getAttribute(Ar) !== A)) {
        t.setAttribute(e, A), o && t.removeChild(o);
        var T = Zl(), m = T.extra;
        m.attributes[dr] = n, wr(S, h).then(function(J) {
          var R = Dr(y(y({}, T), {}, {
            icons: {
              main: J,
              mask: Xa()
            },
            prefix: h,
            iconName: A,
            extra: m,
            watchable: !0
          })), ae = K.createElementNS("http://www.w3.org/2000/svg", "svg");
          n === "::before" ? t.insertBefore(ae, t.firstChild) : t.appendChild(ae), ae.outerHTML = R.map(function(ue) {
            return gt(ue);
          }).join(`
`), t.removeAttribute(e), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function mu(t) {
  return Promise.all([Ln(t, "::before"), Ln(t, "::after")]);
}
function hu(t) {
  return t.parentNode !== document.head && !~Ks.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(dr) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
var pu = function(n) {
  return !!n && Ra.some(function(e) {
    return n.includes(e);
  });
}, vu = function(n) {
  if (!n) return [];
  var e = /* @__PURE__ */ new Set(), r = n.split(/,(?![^()]*\))/).map(function(u) {
    return u.trim();
  });
  r = r.flatMap(function(u) {
    return u.includes("(") ? u : u.split(",").map(function(f) {
      return f.trim();
    });
  });
  var a = St(r), i;
  try {
    for (a.s(); !(i = a.n()).done; ) {
      var o = i.value;
      if (pu(o)) {
        var s = Ra.reduce(function(u, f) {
          return u.replace(f, "");
        }, o);
        s !== "" && s !== "*" && e.add(s);
      }
    }
  } catch (u) {
    a.e(u);
  } finally {
    a.f();
  }
  return e;
};
function $n(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (De) {
    var e;
    if (n)
      e = t;
    else if (_.searchPseudoElementsFullScan)
      e = t.querySelectorAll("*");
    else {
      var r = /* @__PURE__ */ new Set(), a = St(document.styleSheets), i;
      try {
        for (a.s(); !(i = a.n()).done; ) {
          var o = i.value;
          try {
            var s = St(o.cssRules), u;
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var f = u.value, c = vu(f.selectorText), d = St(c), p;
                try {
                  for (d.s(); !(p = d.n()).done; ) {
                    var h = p.value;
                    r.add(h);
                  }
                } catch (b) {
                  d.e(b);
                } finally {
                  d.f();
                }
              }
            } catch (b) {
              s.e(b);
            } finally {
              s.f();
            }
          } catch (b) {
            _.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href, " (").concat(b.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (b) {
        a.e(b);
      } finally {
        a.f();
      }
      if (!r.size) return;
      var w = Array.from(r).join(", ");
      try {
        e = t.querySelectorAll(w);
      } catch {
      }
    }
    return new Promise(function(b, O) {
      var S = rt(e).filter(hu).map(mu), A = Mr.begin("searchPseudoElements");
      ei(), Promise.all(S).then(function() {
        A(), Pr(), b();
      }).catch(function() {
        A(), Pr(), O();
      });
    });
  }
}
var yu = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.pseudoElementsCallback = $n, e;
      }
    };
  },
  provides: function(n) {
    n.pseudoElements2svg = function(e) {
      var r = e.node, a = r === void 0 ? K : r;
      _.searchPseudoElements && $n(a);
    };
  }
}, Wn = !1, gu = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ei(), Wn = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Fn(yr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Xl();
      },
      watch: function(e) {
        var r = e.observeMutationsRoot;
        Wn ? Pr() : Fn(yr("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Yn = function(n) {
  var e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return n.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, e);
}, bu = {
  mixout: function() {
    return {
      parse: {
        transform: function(e) {
          return Yn(e);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(e, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (e.transform = Yn(a)), e;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractTransformGrouping = function(e) {
      var r = e.main, a = e.transform, i = e.containerWidth, o = e.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, u = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), f = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(u, " ").concat(f, " ").concat(c)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: d,
        path: p
      };
      return {
        tag: "g",
        attributes: y({}, h.outer),
        children: [{
          tag: "g",
          attributes: y({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: y(y({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, or = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function zn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || n) && (t.attributes.fill = "black"), t;
}
function wu(t) {
  return t.tag === "g" ? t.children : [t];
}
var xu = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? Wt(a.split(" ").map(function(o) {
          return o.trim();
        })) : Xa();
        return i.prefix || (i.prefix = Ne()), e.mask = i, e.maskId = r.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractMask = function(e) {
      var r = e.children, a = e.attributes, i = e.main, o = e.mask, s = e.maskId, u = e.transform, f = i.width, c = i.icon, d = o.width, p = o.icon, h = dl({
        transform: u,
        containerWidth: d,
        iconWidth: f
      }), w = {
        tag: "rect",
        attributes: y(y({}, or), {}, {
          fill: "white"
        })
      }, b = c.children ? {
        children: c.children.map(zn)
      } : {}, O = {
        tag: "g",
        attributes: y({}, h.inner),
        children: [zn(y({
          tag: c.tag,
          attributes: y(y({}, c.attributes), h.path)
        }, b))]
      }, S = {
        tag: "g",
        attributes: y({}, h.outer),
        children: [O]
      }, A = "mask-".concat(s || Pn()), I = "clip-".concat(s || Pn()), T = {
        tag: "mask",
        attributes: y(y({}, or), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [w, S]
      }, m = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: wu(p)
        }, T]
      };
      return r.push(m, {
        tag: "rect",
        attributes: y({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(A, ")")
        }, or)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, Pu = {
  provides: function(n) {
    var e = !1;
    je.matchMedia && (e = je.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: y(y({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = y(y({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: y(y({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return e || s.children.push({
        tag: "animate",
        attributes: y(y({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: y(y({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: y(y({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: e ? [] : [{
          tag: "animate",
          attributes: y(y({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), e || r.push({
        tag: "path",
        attributes: y(y({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: y(y({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Eu = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return e.symbol = i, e;
      }
    };
  }
}, Tu = [pl, iu, ou, su, lu, yu, gu, bu, xu, Pu, Eu];
Rl(Tu, {
  mixoutsTo: ge
});
ge.noAuto;
var pt = ge.config;
ge.library;
ge.dom;
var ni = ge.parse;
ge.findIconDefinition;
ge.toHtml;
var ku = ge.icon;
ge.layer;
ge.text;
ge.counter;
function Ou(t) {
  return t = t - 0, t === t;
}
function ai(t) {
  return Ou(t) ? t : (t = t.replace(/[_-]+(.)?/g, (n, e) => e ? e.toUpperCase() : ""), t.charAt(0).toLowerCase() + t.slice(1));
}
function Su(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Qe = /* @__PURE__ */ new Map(), Au = 1e3;
function _u(t) {
  if (Qe.has(t))
    return Qe.get(t);
  const n = {};
  let e = 0;
  const r = t.length;
  for (; e < r; ) {
    const a = t.indexOf(";", e), i = a === -1 ? r : a, o = t.slice(e, i).trim();
    if (o) {
      const s = o.indexOf(":");
      if (s > 0) {
        const u = o.slice(0, s).trim(), f = o.slice(s + 1).trim();
        if (u && f) {
          const c = ai(u);
          n[c.startsWith("webkit") ? Su(c) : c] = f;
        }
      }
    }
    e = i + 1;
  }
  if (Qe.size === Au) {
    const a = Qe.keys().next().value;
    a && Qe.delete(a);
  }
  return Qe.set(t, n), n;
}
function ii(t, n, e = {}) {
  if (typeof n == "string")
    return n;
  const r = (n.children || []).map((c) => ii(t, c)), a = n.attributes || {}, i = {};
  for (const [c, d] of Object.entries(a))
    switch (!0) {
      case c === "class": {
        i.className = d;
        break;
      }
      case c === "style": {
        i.style = _u(String(d));
        break;
      }
      case c.startsWith("aria-"):
      case c.startsWith("data-"): {
        i[c.toLowerCase()] = d;
        break;
      }
      default:
        i[ai(c)] = d;
    }
  const {
    style: o,
    role: s,
    "aria-label": u,
    ...f
  } = e;
  return o && (i.style = i.style ? { ...i.style, ...o } : o), s && (i.role = s), u && (i["aria-label"] = u, i["aria-hidden"] = "false"), t(n.tag, { ...i, ...f }, ...r);
}
var Iu = ii.bind(null, jt.createElement), qn = (t, n) => {
  const e = Gi();
  return t || (n ? e : void 0);
}, Ru = class {
  constructor(t = "react-fontawesome") {
    var e;
    this.enabled = !1;
    let n = !1;
    try {
      n = typeof process < "u" && ((e = process.env) == null ? void 0 : e.NODE_ENV) === "development";
    } catch {
    }
    this.scope = t, this.enabled = n;
  }
  /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */
  log(...t) {
    this.enabled && console.log(`[${this.scope}]`, ...t);
  }
  /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */
  warn(...t) {
    this.enabled && console.warn(`[${this.scope}]`, ...t);
  }
  /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */
  error(...t) {
    this.enabled && console.error(`[${this.scope}]`, ...t);
  }
}, Kn;
typeof process < "u" && ((Kn = process.env) != null && Kn.FA_VERSION);
var Cu = (
  // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
  // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
  // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
  "searchPseudoElementsFullScan" in pt ? "7.0.0" : "6.0.0"
), Fu = Number.parseInt(Cu) >= 7, mt = "fa", Ie = {
  beat: "fa-beat",
  fade: "fa-fade",
  beatFade: "fa-beat-fade",
  bounce: "fa-bounce",
  shake: "fa-shake",
  spin: "fa-spin",
  spinPulse: "fa-spin-pulse",
  spinReverse: "fa-spin-reverse",
  pulse: "fa-pulse"
}, Du = {
  left: "fa-pull-left",
  right: "fa-pull-right"
}, Mu = {
  90: "fa-rotate-90",
  180: "fa-rotate-180",
  270: "fa-rotate-270"
}, ju = {
  "2xs": "fa-2xs",
  xs: "fa-xs",
  sm: "fa-sm",
  lg: "fa-lg",
  xl: "fa-xl",
  "2xl": "fa-2xl",
  "1x": "fa-1x",
  "2x": "fa-2x",
  "3x": "fa-3x",
  "4x": "fa-4x",
  "5x": "fa-5x",
  "6x": "fa-6x",
  "7x": "fa-7x",
  "8x": "fa-8x",
  "9x": "fa-9x",
  "10x": "fa-10x"
}, Re = {
  border: "fa-border",
  /** @deprecated */
  fixedWidth: "fa-fw",
  flip: "fa-flip",
  flipHorizontal: "fa-flip-horizontal",
  flipVertical: "fa-flip-vertical",
  inverse: "fa-inverse",
  rotateBy: "fa-rotate-by",
  swapOpacity: "fa-swap-opacity",
  widthAuto: "fa-width-auto"
};
function Nu(t) {
  const n = pt.cssPrefix || pt.familyPrefix || mt;
  return n === mt ? t : t.replace(
    new RegExp(String.raw`(?<=^|\s)${mt}-`, "g"),
    `${n}-`
  );
}
function Lu(t) {
  const {
    beat: n,
    fade: e,
    beatFade: r,
    bounce: a,
    shake: i,
    spin: o,
    spinPulse: s,
    spinReverse: u,
    pulse: f,
    fixedWidth: c,
    inverse: d,
    border: p,
    flip: h,
    size: w,
    rotation: b,
    pull: O,
    swapOpacity: S,
    rotateBy: A,
    widthAuto: I,
    className: T
  } = t, m = [];
  return T && m.push(...T.split(" ")), n && m.push(Ie.beat), e && m.push(Ie.fade), r && m.push(Ie.beatFade), a && m.push(Ie.bounce), i && m.push(Ie.shake), o && m.push(Ie.spin), u && m.push(Ie.spinReverse), s && m.push(Ie.spinPulse), f && m.push(Ie.pulse), c && m.push(Re.fixedWidth), d && m.push(Re.inverse), p && m.push(Re.border), h === !0 && m.push(Re.flip), (h === "horizontal" || h === "both") && m.push(Re.flipHorizontal), (h === "vertical" || h === "both") && m.push(Re.flipVertical), w != null && m.push(ju[w]), b != null && b !== 0 && m.push(Mu[b]), O != null && m.push(Du[O]), S && m.push(Re.swapOpacity), Fu ? (A && m.push(Re.rotateBy), I && m.push(Re.widthAuto), (pt.cssPrefix || pt.familyPrefix || mt) === mt ? m : (
    // TODO: see if we can achieve custom prefix support without iterating
    // eslint-disable-next-line unicorn/no-array-callback-reference
    m.map(Nu)
  )) : m;
}
var $u = (t) => typeof t == "object" && "icon" in t && !!t.icon;
function Hn(t) {
  if (t)
    return $u(t) ? t : ni.icon(t);
}
function Wu(t) {
  return Object.keys(t);
}
var Un = new Ru("FontAwesomeIcon"), oi = {
  border: !1,
  className: "",
  mask: void 0,
  maskId: void 0,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: void 0,
  listItem: !1,
  pull: void 0,
  pulse: !1,
  rotation: void 0,
  rotateBy: !1,
  size: void 0,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: void 0,
  transform: void 0,
  swapOpacity: !1,
  widthAuto: !1
}, Yu = new Set(Object.keys(oi)), It = jt.forwardRef((t, n) => {
  const e = { ...oi, ...t }, {
    icon: r,
    mask: a,
    symbol: i,
    title: o,
    titleId: s,
    maskId: u,
    transform: f
  } = e, c = qn(u, !!a), d = qn(s, !!o), p = Hn(r);
  if (!p)
    return Un.error("Icon lookup is undefined", r), null;
  const h = Lu(e), w = typeof f == "string" ? ni.transform(f) : f, b = Hn(a), O = ku(p, {
    ...h.length > 0 && { classes: h },
    ...w && { transform: w },
    ...b && { mask: b },
    symbol: i,
    title: o,
    titleId: d,
    maskId: c
  });
  if (!O)
    return Un.error("Could not find icon", p), null;
  const { abstract: S } = O, A = { ref: n };
  for (const I of Wu(e))
    Yu.has(I) || (A[I] = e[I]);
  return Iu(S[0], A);
});
It.displayName = "FontAwesomeIcon";
/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */
var zu = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, qu = zu, Hu = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [384, 512, ["sort-asc"], "f0de", "M32 224c-12.9 0-24.6-7.8-29.6-19.8S.2 178.5 9.4 169.4l160-160c12.5-12.5 32.8-12.5 45.3 0l160 160c9.2 9.2 11.9 22.9 6.9 34.9S364.9 224 352 224L32 224z"]
}, Uu = {
  prefix: "fas",
  iconName: "angle-right",
  icon: [256, 512, [8250], "f105", "M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]
}, Gu = {
  prefix: "fas",
  iconName: "sort",
  icon: [384, 512, ["unsorted"], "f0dc", "M2.4 204.2c5 12 16.6 19.8 29.6 19.8l320 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-9.2 9.2-11.9 22.9-6.9 34.9zm0 103.5c-5 12-2.2 25.7 6.9 34.9l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288c-12.9 0-24.6 7.8-29.6 19.8z"]
}, Gn = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [384, 512, ["sort-desc"], "f0dd", "M32 288c-12.9 0-24.6 7.8-29.6 19.8S.2 333.5 9.4 342.6l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288z"]
};
const si = 6048e5, Bu = 6e4, Vu = 36e5, Xu = 1e3, Bn = Symbol.for("constructDateFrom");
function le(t, n) {
  return typeof t == "function" ? t(n) : t && typeof t == "object" && Bn in t ? t[Bn](n) : t instanceof Date ? new t.constructor(n) : new Date(n);
}
function oe(t, n) {
  return le(n || t, t);
}
function li(t, n, e) {
  const r = oe(t, e == null ? void 0 : e.in);
  return isNaN(n) ? le((e == null ? void 0 : e.in) || t, NaN) : (n && r.setDate(r.getDate() + n), r);
}
let Ju = {};
function bt() {
  return Ju;
}
function $e(t, n) {
  var s, u, f, c;
  const e = bt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? e.weekStartsOn ?? ((c = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = oe(t, n == null ? void 0 : n.in), i = a.getDay(), o = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function tt(t, n) {
  return $e(t, { ...n, weekStartsOn: 1 });
}
function Qu(t, n) {
  const e = oe(t, n == null ? void 0 : n.in), r = e.getFullYear(), a = le(e, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = tt(a), o = le(e, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const s = tt(o);
  return e.getTime() >= i.getTime() ? r + 1 : e.getTime() >= s.getTime() ? r : r - 1;
}
function ui(t) {
  const n = oe(t), e = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return e.setUTCFullYear(n.getFullYear()), +t - +e;
}
function Ku(t, n) {
  const e = Qu(t, n), r = le(t, 0);
  return r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), tt(r);
}
const Zu = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, ef = (t, n, e) => {
  let r;
  const a = Zu[t];
  return typeof a == "string" ? r = a : n === 1 ? r = a.one : r = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r;
};
function sr(t) {
  return (n = {}) => {
    const e = n.width ? String(n.width) : t.defaultWidth;
    return t.formats[e] || t.formats[t.defaultWidth];
  };
}
const tf = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rf = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, nf = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, af = {
  date: sr({
    formats: tf,
    defaultWidth: "full"
  }),
  time: sr({
    formats: rf,
    defaultWidth: "full"
  }),
  dateTime: sr({
    formats: nf,
    defaultWidth: "full"
  })
}, of = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, sf = (t, n, e, r) => of[t];
function st(t) {
  return (n, e) => {
    const r = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const o = t.defaultFormattingWidth || t.defaultWidth, s = e != null && e.width ? String(e.width) : o;
      a = t.formattingValues[s] || t.formattingValues[o];
    } else {
      const o = t.defaultWidth, s = e != null && e.width ? String(e.width) : t.defaultWidth;
      a = t.values[s] || t.values[o];
    }
    const i = t.argumentCallback ? t.argumentCallback(n) : n;
    return a[i];
  };
}
const lf = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, uf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ff = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, cf = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, df = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, mf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, hf = (t, n) => {
  const e = Number(t), r = e % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, pf = {
  ordinalNumber: hf,
  era: st({
    values: lf,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: uf,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: st({
    values: ff,
    defaultWidth: "wide"
  }),
  day: st({
    values: cf,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: df,
    defaultWidth: "wide",
    formattingValues: mf,
    defaultFormattingWidth: "wide"
  })
};
function lt(t) {
  return (n, e = {}) => {
    const r = e.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], i = n.match(a);
    if (!i)
      return null;
    const o = i[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? yf(s, (d) => d.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      vf(s, (d) => d.test(o))
    );
    let f;
    f = t.valueCallback ? t.valueCallback(u) : u, f = e.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      e.valueCallback(f)
    ) : f;
    const c = n.slice(o.length);
    return { value: f, rest: c };
  };
}
function vf(t, n) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && n(t[e]))
      return e;
}
function yf(t, n) {
  for (let e = 0; e < t.length; e++)
    if (n(t[e]))
      return e;
}
function gf(t) {
  return (n, e = {}) => {
    const r = n.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], i = n.match(t.parsePattern);
    if (!i) return null;
    let o = t.valueCallback ? t.valueCallback(i[0]) : i[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    const s = n.slice(a.length);
    return { value: o, rest: s };
  };
}
const bf = /^(\d+)(th|st|nd|rd)?/i, wf = /\d+/i, xf = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Pf = {
  any: [/^b/i, /^(a|c)/i]
}, Ef = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kf = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Of = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Sf = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Af = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, _f = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, If = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Rf = {
  ordinalNumber: gf({
    matchPattern: bf,
    parsePattern: wf,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: lt({
    matchPatterns: xf,
    defaultMatchWidth: "wide",
    parsePatterns: Pf,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: Ef,
    defaultMatchWidth: "wide",
    parsePatterns: Tf,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: lt({
    matchPatterns: kf,
    defaultMatchWidth: "wide",
    parsePatterns: Of,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: Sf,
    defaultMatchWidth: "wide",
    parsePatterns: Af,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: _f,
    defaultMatchWidth: "any",
    parsePatterns: If,
    defaultParseWidth: "any"
  })
}, Cf = {
  code: "en-US",
  formatDistance: ef,
  formatLong: af,
  formatRelative: sf,
  localize: pf,
  match: Rf,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ff(t, n) {
  const e = oe(t, n == null ? void 0 : n.in), r = +tt(e) - +Ku(e);
  return Math.round(r / si) + 1;
}
function fi(t, n) {
  var c, d, p, h;
  const e = oe(t, n == null ? void 0 : n.in), r = e.getFullYear(), a = bt(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((h = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, o = le((n == null ? void 0 : n.in) || t, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = $e(o, n), u = le((n == null ? void 0 : n.in) || t, 0);
  u.setFullYear(r, 0, i), u.setHours(0, 0, 0, 0);
  const f = $e(u, n);
  return +e >= +s ? r + 1 : +e >= +f ? r : r - 1;
}
function Df(t, n) {
  var s, u, f, c;
  const e = bt(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((c = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, a = fi(t, n), i = le((n == null ? void 0 : n.in) || t, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), $e(i, n);
}
function Mf(t, n) {
  const e = oe(t, n == null ? void 0 : n.in), r = +$e(e, n) - +Df(e, n);
  return Math.round(r / si) + 1;
}
const Vn = (t, n) => {
  switch (t) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, ci = (t, n) => {
  switch (t) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, jf = (t, n) => {
  const e = t.match(/(P+)(p+)?/) || [], r = e[1], a = e[2];
  if (!a)
    return Vn(t, n);
  let i;
  switch (r) {
    case "P":
      i = n.dateTime({ width: "short" });
      break;
    case "PP":
      i = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = n.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Vn(r, n)).replace("{{time}}", ci(a, n));
}, Xn = {
  p: ci,
  P: jf
}, Nf = /^D+$/, Lf = /^Y+$/, $f = ["D", "DD", "YY", "YYYY"];
function Wf(t) {
  return Nf.test(t);
}
function Yf(t) {
  return Lf.test(t);
}
function Jn(t, n, e) {
  const r = zf(t, n, e);
  if (console.warn(r), $f.includes(t)) throw new RangeError(r);
}
function zf(t, n, e) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function qf() {
  return Object.assign({}, bt());
}
function Hf(t, n) {
  const e = oe(t, n == null ? void 0 : n.in).getDay();
  return e === 0 ? 7 : e;
}
function Uf(t, n) {
  return +oe(t) > +oe(n);
}
function Gf(t, n) {
  return +oe(t) < +oe(n);
}
function Bf(t, n) {
  const e = Vf(n) ? new n(0) : le(n, 0);
  return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e.setHours(
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), e;
}
function Vf(t) {
  var n;
  return typeof t == "function" && ((n = t.prototype) == null ? void 0 : n.constructor) === t;
}
const Xf = 10;
class di {
  constructor() {
    E(this, "subPriority", 0);
  }
  validate(n, e) {
    return !0;
  }
}
class Jf extends di {
  constructor(n, e, r, a, i) {
    super(), this.value = n, this.validateValue = e, this.setValue = r, this.priority = a, i && (this.subPriority = i);
  }
  validate(n, e) {
    return this.validateValue(n, this.value, e);
  }
  set(n, e, r) {
    return this.setValue(n, e, this.value, r);
  }
}
class Qf extends di {
  constructor(e, r) {
    super();
    E(this, "priority", Xf);
    E(this, "subPriority", -1);
    this.context = e || ((a) => le(r, a));
  }
  set(e, r) {
    return r.timestampIsSet ? e : le(e, Bf(e, this.context));
  }
}
class G {
  run(n, e, r, a) {
    const i = this.parse(n, e, r, a);
    return i ? {
      setter: new Jf(
        i.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: i.rest
    } : null;
  }
  validate(n, e, r) {
    return !0;
  }
}
class Kf extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 140);
    E(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
      // A, B
      case "GGGGG":
        return a.era(e, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return a.era(e, { width: "wide" }) || a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
    }
  }
  set(e, r, a) {
    return r.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const re = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, ke = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ne(t, n) {
  return t && {
    value: n(t.value),
    rest: t.rest
  };
}
function Z(t, n) {
  const e = n.match(t);
  return e ? {
    value: parseInt(e[0], 10),
    rest: n.slice(e[0].length)
  } : null;
}
function Oe(t, n) {
  const e = n.match(t);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const r = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, i = e[3] ? parseInt(e[3], 10) : 0, o = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: r * (a * Vu + i * Bu + o * Xu),
    rest: n.slice(e[0].length)
  };
}
function mi(t) {
  return Z(re.anyDigitsSigned, t);
}
function ee(t, n) {
  switch (t) {
    case 1:
      return Z(re.singleDigit, n);
    case 2:
      return Z(re.twoDigits, n);
    case 3:
      return Z(re.threeDigits, n);
    case 4:
      return Z(re.fourDigits, n);
    default:
      return Z(new RegExp("^\\d{1," + t + "}"), n);
  }
}
function Dt(t, n) {
  switch (t) {
    case 1:
      return Z(re.singleDigitSigned, n);
    case 2:
      return Z(re.twoDigitsSigned, n);
    case 3:
      return Z(re.threeDigitsSigned, n);
    case 4:
      return Z(re.fourDigitsSigned, n);
    default:
      return Z(new RegExp("^-?\\d{1," + t + "}"), n);
  }
}
function Nr(t) {
  switch (t) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function hi(t, n) {
  const e = n > 0, r = e ? n : 1 - n;
  let a;
  if (r <= 50)
    a = t || 100;
  else {
    const i = r + 50, o = Math.trunc(i / 100) * 100, s = t >= i % 100;
    a = t + o - (s ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function pi(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
class Zf extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, r, a) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return ne(ee(4, e), i);
      case "yo":
        return ne(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          i
        );
      default:
        return ne(ee(r.length, e), i);
    }
  }
  validate(e, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(e, r, a) {
    const i = e.getFullYear();
    if (a.isTwoDigitYear) {
      const s = hi(
        a.year,
        i
      );
      return e.setFullYear(s, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const o = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ec extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return ne(ee(4, e), i);
      case "Yo":
        return ne(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          i
        );
      default:
        return ne(ee(r.length, e), i);
    }
  }
  validate(e, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(e, r, a, i) {
    const o = fi(e, i);
    if (a.isTwoDigitYear) {
      const u = hi(
        a.year,
        o
      );
      return e.setFullYear(
        u,
        0,
        i.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), $e(e, i);
    }
    const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(s, 0, i.firstWeekContainsDate), e.setHours(0, 0, 0, 0), $e(e, i);
  }
}
class tc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r) {
    return Dt(r === "R" ? 4 : r.length, e);
  }
  set(e, r, a) {
    const i = le(e, 0);
    return i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), tt(i);
  }
}
class rc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, r) {
    return Dt(r === "u" ? 4 : r.length, e);
  }
  set(e, r, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class nc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 120);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return ee(r.length, e);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 4;
  }
  set(e, r, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ac extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 120);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    switch (r) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return ee(r.length, e);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 4;
  }
  set(e, r, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ic extends G {
  constructor() {
    super(...arguments);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    E(this, "priority", 110);
  }
  parse(e, r, a) {
    const i = (o) => o - 1;
    switch (r) {
      // 1, 2, ..., 12
      case "M":
        return ne(
          Z(re.month, e),
          i
        );
      // 01, 02, ..., 12
      case "MM":
        return ne(ee(2, e), i);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return ne(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          i
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return a.month(e, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return a.month(e, { width: "wide", context: "formatting" }) || a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class oc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 110);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    const i = (o) => o - 1;
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return ne(
          Z(re.month, e),
          i
        );
      // 01, 02, ..., 12
      case "LL":
        return ne(ee(2, e), i);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return ne(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          i
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return a.month(e, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return a.month(e, { width: "wide", context: "standalone" }) || a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function sc(t, n, e) {
  const r = oe(t, e == null ? void 0 : e.in), a = Mf(r, e) - n;
  return r.setDate(r.getDate() - a * 7), oe(r, e == null ? void 0 : e.in);
}
class lc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 100);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    switch (r) {
      case "w":
        return Z(re.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 53;
  }
  set(e, r, a, i) {
    return $e(sc(e, a, i), i);
  }
}
function uc(t, n, e) {
  const r = oe(t, e == null ? void 0 : e.in), a = Ff(r, e) - n;
  return r.setDate(r.getDate() - a * 7), r;
}
class fc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 100);
    E(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    switch (r) {
      case "I":
        return Z(re.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 53;
  }
  set(e, r, a) {
    return tt(uc(e, a));
  }
}
const cc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], dc = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class mc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "subPriority", 1);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    switch (r) {
      case "d":
        return Z(re.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    const a = e.getFullYear(), i = pi(a), o = e.getMonth();
    return i ? r >= 1 && r <= dc[o] : r >= 1 && r <= cc[o];
  }
  set(e, r, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class hc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "subpriority", 1);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    switch (r) {
      case "D":
      case "DD":
        return Z(re.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    const a = e.getFullYear();
    return pi(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(e, r, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function Lr(t, n, e) {
  var d, p, h, w;
  const r = bt(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((p = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((w = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = oe(t, e == null ? void 0 : e.in), o = i.getDay(), u = (n % 7 + 7) % 7, f = 7 - a, c = n < 0 || n > 6 ? n - (o + f) % 7 : (u + f) % 7 - (o + f) % 7;
  return li(i, c, e);
}
class pc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 6;
  }
  set(e, r, a, i) {
    return e = Lr(e, a, i), e.setHours(0, 0, 0, 0), e;
  }
}
class vc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a, i) {
    const o = (s) => {
      const u = Math.floor((s - 1) / 7) * 7;
      return (s + i.weekStartsOn + 6) % 7 + u;
    };
    switch (r) {
      // 3
      case "e":
      case "ee":
        return ne(ee(r.length, e), o);
      // 3rd
      case "eo":
        return ne(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          o
        );
      // Tue
      case "eee":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 6;
  }
  set(e, r, a, i) {
    return e = Lr(e, a, i), e.setHours(0, 0, 0, 0), e;
  }
}
class yc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, r, a, i) {
    const o = (s) => {
      const u = Math.floor((s - 1) / 7) * 7;
      return (s + i.weekStartsOn + 6) % 7 + u;
    };
    switch (r) {
      // 3
      case "c":
      case "cc":
        return ne(ee(r.length, e), o);
      // 3rd
      case "co":
        return ne(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          o
        );
      // Tue
      case "ccc":
        return a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return a.day(e, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return a.day(e, { width: "wide", context: "standalone" }) || a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 6;
  }
  set(e, r, a, i) {
    return e = Lr(e, a, i), e.setHours(0, 0, 0, 0), e;
  }
}
function gc(t, n, e) {
  const r = oe(t, e == null ? void 0 : e.in), a = Hf(r, e), i = n - a;
  return li(r, i, e);
}
class bc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, a) {
    const i = (o) => o === 0 ? 7 : o;
    switch (r) {
      // 2
      case "i":
      case "ii":
        return ee(r.length, e);
      // 2nd
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      // Tue
      case "iii":
        return ne(
          a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // T
      case "iiiii":
        return ne(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tu
      case "iiiiii":
        return ne(
          a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tuesday
      case "iiii":
      default:
        return ne(
          a.day(e, {
            width: "wide",
            context: "formatting"
          }) || a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 7;
  }
  set(e, r, a) {
    return e = gc(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class wc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 80);
    E(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, r, a) {
    return e.setHours(Nr(a), 0, 0, 0), e;
  }
}
class xc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 80);
    E(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, r, a) {
    return e.setHours(Nr(a), 0, 0, 0), e;
  }
}
class Pc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 80);
    E(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, r, a) {
    return e.setHours(Nr(a), 0, 0, 0), e;
  }
}
class Ec extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "h":
        return Z(re.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 12;
  }
  set(e, r, a) {
    const i = e.getHours() >= 12;
    return i && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !i && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Tc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "H":
        return Z(re.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 23;
  }
  set(e, r, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class kc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "K":
        return Z(re.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Oc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "k":
        return Z(re.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 24;
  }
  set(e, r, a) {
    const i = a <= 24 ? a % 24 : a;
    return e.setHours(i, 0, 0, 0), e;
  }
}
class Sc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 60);
    E(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "m":
        return Z(re.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 59;
  }
  set(e, r, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class Ac extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 50);
    E(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "s":
        return Z(re.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return ee(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 59;
  }
  set(e, r, a) {
    return e.setSeconds(a, 0), e;
  }
}
class _c extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 30);
    E(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r) {
    const a = (i) => Math.trunc(i * Math.pow(10, -r.length + 3));
    return ne(ee(r.length, e), a);
  }
  set(e, r, a) {
    return e.setMilliseconds(a), e;
  }
}
class Ic extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 10);
    E(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, r) {
    switch (r) {
      case "X":
        return Oe(
          ke.basicOptionalMinutes,
          e
        );
      case "XX":
        return Oe(ke.basic, e);
      case "XXXX":
        return Oe(
          ke.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return Oe(
          ke.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return Oe(ke.extended, e);
    }
  }
  set(e, r, a) {
    return r.timestampIsSet ? e : le(
      e,
      e.getTime() - ui(e) - a
    );
  }
}
class Rc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 10);
    E(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, r) {
    switch (r) {
      case "x":
        return Oe(
          ke.basicOptionalMinutes,
          e
        );
      case "xx":
        return Oe(ke.basic, e);
      case "xxxx":
        return Oe(
          ke.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return Oe(
          ke.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return Oe(ke.extended, e);
    }
  }
  set(e, r, a) {
    return r.timestampIsSet ? e : le(
      e,
      e.getTime() - ui(e) - a
    );
  }
}
class Cc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 40);
    E(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return mi(e);
  }
  set(e, r, a) {
    return [le(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Fc extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 20);
    E(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return mi(e);
  }
  set(e, r, a) {
    return [le(e, a), { timestampIsSet: !0 }];
  }
}
const Dc = {
  G: new Kf(),
  y: new Zf(),
  Y: new ec(),
  R: new tc(),
  u: new rc(),
  Q: new nc(),
  q: new ac(),
  M: new ic(),
  L: new oc(),
  w: new lc(),
  I: new fc(),
  d: new mc(),
  D: new hc(),
  E: new pc(),
  e: new vc(),
  c: new yc(),
  i: new bc(),
  a: new wc(),
  b: new xc(),
  B: new Pc(),
  h: new Ec(),
  H: new Tc(),
  K: new kc(),
  k: new Oc(),
  m: new Sc(),
  s: new Ac(),
  S: new _c(),
  X: new Ic(),
  x: new Rc(),
  t: new Cc(),
  T: new Fc()
}, Mc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, jc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nc = /^'([^]*?)'?$/, Lc = /''/g, $c = /\S/, Wc = /[a-zA-Z]/;
function Qn(t, n, e, r) {
  var O, S, A, I;
  const a = () => le(e, NaN), i = qf(), o = i.locale ?? Cf, s = i.firstWeekContainsDate ?? ((S = (O = i.locale) == null ? void 0 : O.options) == null ? void 0 : S.firstWeekContainsDate) ?? 1, u = i.weekStartsOn ?? ((I = (A = i.locale) == null ? void 0 : A.options) == null ? void 0 : I.weekStartsOn) ?? 0;
  if (!n)
    return t ? a() : oe(e, r == null ? void 0 : r.in);
  const f = {
    firstWeekContainsDate: s,
    weekStartsOn: u,
    locale: o
  }, c = [new Qf(r == null ? void 0 : r.in, e)], d = n.match(jc).map((T) => {
    const m = T[0];
    if (m in Xn) {
      const J = Xn[m];
      return J(T, o.formatLong);
    }
    return T;
  }).join("").match(Mc), p = [];
  for (let T of d) {
    Yf(T) && Jn(T, n, t), Wf(T) && Jn(T, n, t);
    const m = T[0], J = Dc[m];
    if (J) {
      const { incompatibleTokens: R } = J;
      if (Array.isArray(R)) {
        const ue = p.find(
          (ce) => R.includes(ce.token) || ce.token === m
        );
        if (ue)
          throw new RangeError(
            `The format string mustn't contain \`${ue.fullToken}\` and \`${T}\` at the same time`
          );
      } else if (J.incompatibleTokens === "*" && p.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${T}\` and any other token at the same time`
        );
      p.push({ token: m, fullToken: T });
      const ae = J.run(
        t,
        T,
        o.match,
        f
      );
      if (!ae)
        return a();
      c.push(ae.setter), t = ae.rest;
    } else {
      if (m.match(Wc))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + m + "`"
        );
      if (T === "''" ? T = "'" : m === "'" && (T = Yc(T)), t.indexOf(T) === 0)
        t = t.slice(T.length);
      else
        return a();
    }
  }
  if (t.length > 0 && $c.test(t))
    return a();
  const h = c.map((T) => T.priority).sort((T, m) => m - T).filter((T, m, J) => J.indexOf(T) === m).map(
    (T) => c.filter((m) => m.priority === T).sort((m, J) => J.subPriority - m.subPriority)
  ).map((T) => T[0]);
  let w = oe(e, r == null ? void 0 : r.in);
  if (isNaN(+w)) return a();
  const b = {};
  for (const T of h) {
    if (!T.validate(w, f))
      return a();
    const m = T.set(w, b, f);
    Array.isArray(m) ? (w = m[0], Object.assign(b, m[1])) : w = m;
  }
  return w;
}
function Yc(t) {
  return t.match(Nc)[1].replace(Lc, "'");
}
const Mt = () => {
  const t = (s, u, f) => {
    let c = n(u, s);
    const d = e(f);
    let p = null, h = null, w = null;
    const b = !1;
    d.forEach((S, A) => {
      S.sortOrder !== "none" && (p = S.dataField, h = A, w = S.sortOrder);
    });
    let O = !1;
    for (const S of c)
      S.children && S.children.length > 0 && (O = !0);
    return p !== null && (c = r(
      c,
      h,
      p,
      w,
      d[h].sortUsingRenderer,
      d[h].renderer,
      d[h].sortType,
      d[h].sortDateFormat
    ), c = o(c)), {
      enhancedTableData: c,
      enhancedColumns: d,
      showResetSortingButton: b,
      childrenPresent: O
    };
  }, n = (s, u) => {
    let f = 1;
    return (function c(d, p = 0, h = 1) {
      if (d)
        return d.map((w) => {
          const b = f++;
          return Object.assign({}, w, {
            rowID: b,
            rowOrder: b,
            rowLevel: h,
            parentRowID: p,
            visible: h <= u,
            expanded: h < u,
            filtered: !1,
            children: c(w.children, b, h + 1)
          });
        });
    })(s);
  }, e = (s) => s.map((u) => {
    const f = u.hasOwnProperty("sortOrder") ? u.sortOrder : "none";
    return Object.assign({}, u, {
      sortable: u.hasOwnProperty("sortable") ? u.sortable : !0,
      sortType: u.hasOwnProperty("sortType") ? u.sortType : "string",
      sortOrder: f
    });
  }), r = (s, u, f, c, d, p, h, w) => (s.forEach((b) => {
    b.children && b.children.length > 0 && (b.children = r(b.children, u, f, c, d, p, h, w));
  }), c === "asc" ? s.sort((b, O) => a(b, O, f, d, p, h, w)) : s.sort((b, O) => a(O, b, f, d, p, h, w))), a = (s, u, f, c, d, p, h) => {
    let w = s.data[f], b = u.data[f];
    return c && (w = d(s, f), b = d(u, f)), p === "date" ? i(w, b, h) : w < b ? -1 : w > b ? 1 : 0;
  }, i = (s, u, f) => (s = Qn(s, f, /* @__PURE__ */ new Date()), u = Qn(u, f, /* @__PURE__ */ new Date()), Gf(s, u) ? -1 : Uf(s, u) ? 1 : 0), o = (s) => {
    let u = 0;
    return (function f(c) {
      if (c)
        return c.map((d) => Object.assign({}, d, {
          rowOrder: u++,
          children: f(d.children)
        }));
    })(s);
  };
  return { generateInitialState: t, sortBy: r, generateRowOrderedTree: o };
}, vi = "page-item", ut = 5, zc = "display: none", lr = (t, n, e) => Math.min(Math.max(t, n), e), qc = (t, n, e) => {
  const r = Math.max(1, Math.ceil(n / e)), a = lr(t, 1, r), i = 1, o = r, s = lr(a - 1, 1, r), u = lr(a + 1, 1, r);
  let f = a - Math.floor(ut / 2), c = f + ut - 1;
  f < 1 && (f = 1, c = Math.min(ut, r)), c > r && (c = r, f = Math.max(1, c - ut + 1));
  const d = Array.from({ length: ut }, (p, h) => {
    const w = f + h;
    return {
      value: w,
      classes: Hc(w, a, r)
    };
  });
  return {
    first: {
      value: i,
      classes: Ot(a, r, "first")
    },
    previous: {
      value: s,
      classes: Ot(a, r, "previous")
    },
    pages: d,
    next: {
      value: u,
      classes: Ot(a, r, "next")
    },
    last: {
      value: o,
      classes: Ot(a, r, "last")
    },
    totalPages: r
  };
}, Ot = (t, n, e) => {
  const r = [vi];
  return ((e === "first" || e === "previous") && t === 1 || (e === "next" || e === "last") && t === n) && r.push("disabled"), r.join(" ");
}, Hc = (t, n, e) => {
  const r = [vi];
  return (t < 1 || t > e) && r.push("disabled", zc), t === n && r.push("active"), r.join(" ");
};
function yi({
  currentPage: t,
  tableLength: n,
  rowsPerPage: e,
  rowMover: r,
  displayStartRow: a,
  displayEndRow: i,
  displayTotal: o,
  displayFiltered: s,
  displayOverallTotal: u
}) {
  const {
    first: f,
    previous: c,
    pages: d,
    next: p,
    last: h
  } = qc(t, n, e), w = (A) => () => r(A), b = (A, I) => A.split(" ").includes(I), O = b(f.classes, "disabled"), S = b(h.classes, "disabled");
  return /* @__PURE__ */ H.jsx("nav", { "aria-label": "Table pagination", children: /* @__PURE__ */ H.jsxs("ul", { className: "pagination justify-content-center", children: [
    /* @__PURE__ */ H.jsx("li", { className: f.classes, children: /* @__PURE__ */ H.jsx(
      "button",
      {
        type: "button",
        className: "page-link",
        onClick: w(f.value),
        disabled: O,
        children: "First"
      }
    ) }),
    /* @__PURE__ */ H.jsx("li", { className: c.classes, children: /* @__PURE__ */ H.jsx(
      "button",
      {
        type: "button",
        className: "page-link",
        onClick: w(c.value),
        disabled: O,
        children: "Previous"
      }
    ) }),
    d.map(({ value: A, classes: I }) => {
      const T = b(I, "active");
      return /* @__PURE__ */ H.jsx(
        "li",
        {
          className: I,
          "aria-current": T ? "page" : void 0,
          children: /* @__PURE__ */ H.jsx("button", { type: "button", className: "page-link", onClick: w(A), children: A })
        },
        A
      );
    }),
    /* @__PURE__ */ H.jsx("li", { className: p.classes, children: /* @__PURE__ */ H.jsx("button", { type: "button", className: "page-link", onClick: w(p.value), disabled: S, children: "Next" }) }),
    /* @__PURE__ */ H.jsx("li", { className: h.classes, children: /* @__PURE__ */ H.jsx("button", { type: "button", className: "page-link", onClick: w(h.value), disabled: S, children: "Last" }) }),
    /* @__PURE__ */ H.jsx("li", { className: "page-item disabled", children: /* @__PURE__ */ H.jsxs("span", { className: "page-link", children: [
      "Showing ",
      a,
      " to ",
      i,
      " of ",
      o,
      " records",
      " ",
      s && /* @__PURE__ */ H.jsxs("span", { children: [
        "(filtered from ",
        u,
        ")"
      ] })
    ] }) })
  ] }) });
}
yi.propTypes = {
  currentPage: xe.number.isRequired,
  tableLength: xe.number.isRequired,
  rowsPerPage: xe.number.isRequired,
  rowMover: xe.func.isRequired,
  displayStartRow: xe.number.isRequired,
  displayEndRow: xe.number.isRequired,
  displayTotal: xe.number.isRequired,
  displayFiltered: xe.bool,
  displayOverallTotal: xe.number
};
const ye = {
  INIT: "INIT",
  TOGGLE_ROW: "TOGGLE_ROW",
  TOGGLE_ALL: "TOGGLE_ALL",
  SORT: "SORT",
  FILTER: "FILTER",
  SET_PAGE: "SET_PAGE",
  RESET_SORT: "RESET_SORT"
};
function Uc(t, n) {
  switch (n.type) {
    case ye.INIT:
      return n.payload;
    case ye.TOGGLE_ROW:
      return {
        ...t,
        tree: bi(t.tree, n.rowID)
      };
    case ye.TOGGLE_ALL:
      return {
        ...t,
        expandedAll: !t.expandedAll,
        tree: wi(t.tree, !t.expandedAll)
      };
    case ye.SORT: {
      const e = n.columnIndex, r = t.columns[e], a = r.sortOrder === "asc" ? "desc" : "asc", i = Mt().sortBy(
        gi(t.tree),
        e,
        r.dataField,
        a,
        r.sortUsingRenderer,
        r.renderer,
        r.sortType,
        r.sortDateFormat
      ), o = Mt().generateRowOrderedTree(i), s = t.columns.map((u, f) => ({
        ...u,
        sortOrder: f === e ? a : "none"
      }));
      return {
        ...t,
        tree: o,
        columns: s,
        showResetSortingButton: !0
      };
    }
    case ye.FILTER:
      return {
        ...t,
        filterValue: n.value,
        currentPage: 1
      };
    case ye.SET_PAGE:
      return {
        ...t,
        currentPage: n.page
      };
    case ye.RESET_SORT:
      return n.payload;
    default:
      return t;
  }
}
function gi(t) {
  return t ? t.map((n) => ({
    ...n,
    children: gi(n.children)
  })) : [];
}
function bi(t, n) {
  return t.map((e) => e.rowID === n ? {
    ...e,
    expanded: !e.expanded
  } : {
    ...e,
    children: bi(
      e.children || [],
      n
    )
  });
}
function wi(t, n) {
  return t.map((e) => ({
    ...e,
    expanded: n,
    children: wi(
      e.children || [],
      n
    )
  }));
}
function xi(t, n, e, r = !0) {
  const a = [];
  for (const i of t) {
    if (!r) continue;
    const o = Gc(i, n, e);
    (!n || o) && a.push(i), i.expanded && a.push(
      ...xi(
        i.children || [],
        n,
        e,
        r
      )
    );
  }
  return a;
}
function Gc(t, n, e) {
  if (!n) return !0;
  const r = n.toLowerCase();
  return e.some((a) => {
    var o;
    if (!a.filterable) return !1;
    const i = (o = t.data) == null ? void 0 : o[a.dataField];
    return String(i).toLowerCase().includes(r);
  });
}
function Bc({ tableData: t, columns: n, control: e = {} }) {
  const {
    visibleRows: r = 10,
    allowSorting: a = !1,
    allowFiltering: i = !1,
    showPagination: o = !1,
    initialRowsPerPage: s = 10,
    showExpandCollapseButton: u = !1,
    filterInputPlaceholderText: f = "Filter..."
  } = e, c = Bt(() => {
    const R = Mt().generateInitialState(r, t, n);
    return {
      tree: R.enhancedTableData,
      columns: R.enhancedColumns,
      expandedAll: !1,
      filterValue: "",
      currentPage: 1,
      showResetSortingButton: R.showResetSortingButton
    };
  }, [t, n, r]), [d, p] = Bi(Uc, c);
  Vi(() => {
    const R = Mt().generateInitialState(r, t, n);
    p({
      type: ye.INIT,
      payload: {
        tree: R.enhancedTableData,
        columns: R.enhancedColumns,
        expandedAll: !1,
        filterValue: "",
        currentPage: 1,
        showResetSortingButton: R.showResetSortingButton
      }
    });
  }, [t, n, r]);
  const h = Bt(() => xi(d.tree, d.filterValue, d.columns), [d.tree, d.filterValue, d.columns]), w = Bt(() => {
    if (!o) return h;
    const R = (d.currentPage - 1) * s, ae = R + s;
    return h.slice(R, ae);
  }, [h, d.currentPage, s, o]), b = h.length;
  let O = 0, S = 0;
  if (o && b > 0) {
    const R = (d.currentPage - 1) * s;
    O = R + 1, S = Math.min(R + s, b);
  }
  const A = at(
    (R) => p({
      type: ye.TOGGLE_ROW,
      rowID: R
    }),
    []
  ), I = at(
    () => p({
      type: ye.TOGGLE_ALL
    }),
    []
  ), T = at(
    (R) => p({
      type: ye.SORT,
      columnIndex: R
    }),
    []
  ), m = at(
    (R) => p({
      type: ye.FILTER,
      value: R.target.value
    }),
    []
  ), J = at(
    (R) => p({
      type: ye.SET_PAGE,
      page: R
    }),
    []
  );
  return /* @__PURE__ */ H.jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ H.jsxs("div", { className: "d-flex justify-content-between mb-2", children: [
      u && /* @__PURE__ */ H.jsx(
        "button",
        {
          type: "button",
          className: "btn btn-outline-secondary",
          onClick: I,
          children: d.expandedAll ? "Collapse All" : "Expand All"
        }
      ),
      i && /* @__PURE__ */ H.jsxs("div", { className: "input-group w-auto", children: [
        /* @__PURE__ */ H.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ H.jsx(It, { icon: qu }) }),
        /* @__PURE__ */ H.jsx(
          "input",
          {
            className: "form-control",
            placeholder: f,
            value: d.filterValue,
            onChange: m
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ H.jsxs("table", { className: "table table-bordered", children: [
      /* @__PURE__ */ H.jsx("thead", { children: /* @__PURE__ */ H.jsx("tr", { children: d.columns.map((R, ae) => {
        const ue = R.sortOrder === "asc" ? Hu : R.sortOrder === "desc" ? Gn : Gu;
        return /* @__PURE__ */ H.jsxs(
          "th",
          {
            onClick: a && R.sortable ? () => T(ae) : void 0,
            style: {
              cursor: R.sortable ? "pointer" : "default"
            },
            children: [
              R.heading,
              a && /* @__PURE__ */ H.jsx(
                It,
                {
                  icon: ue,
                  className: "ms-1"
                }
              )
            ]
          },
          `${R.dataField}-${ae}`
        );
      }) }) }),
      /* @__PURE__ */ H.jsx("tbody", { children: w.map((R) => {
        var ue;
        const ae = ((ue = R.children) == null ? void 0 : ue.length) > 0;
        return /* @__PURE__ */ H.jsx("tr", { children: d.columns.map((ce, Me) => {
          var de;
          const Ae = ce.renderer ? ce.renderer(R, ce.dataField) : ((de = R.data) == null ? void 0 : de[ce.dataField]) ?? "";
          return Me === 0 ? /* @__PURE__ */ H.jsx("td", { children: /* @__PURE__ */ H.jsxs(
            "span",
            {
              style: {
                marginLeft: R.rowLevel * 16
              },
              children: [
                ae && /* @__PURE__ */ H.jsx(
                  It,
                  {
                    icon: R.expanded ? Gn : Uu,
                    onClick: () => A(R.rowID),
                    style: { cursor: "pointer", marginRight: 6 }
                  }
                ),
                Ae
              ]
            }
          ) }, ce.dataField) : /* @__PURE__ */ H.jsx("td", { children: Ae }, ce.dataField);
        }) }, R.rowID);
      }) })
    ] }),
    o && /* @__PURE__ */ H.jsx(
      yi,
      {
        currentPage: d.currentPage,
        tableLength: h.length,
        rowsPerPage: s,
        rowMover: J,
        displayStartRow: O,
        displayEndRow: S,
        displayTotal: b
      }
    )
  ] });
}
Bc.propTypes = {
  tableData: xe.array.isRequired,
  columns: xe.array.isRequired,
  control: xe.object
};
export {
  Bc as BootstrapTreeTable
};
