var qi = Object.defineProperty;
var Hi = (t, n, e) => n in t ? qi(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var T = (t, n, e) => Hi(t, typeof n != "symbol" ? n + "" : n, e);
import Mt, { useId as Ui, useMemo as Gt, useReducer as Gi, useCallback as at } from "react";
function Bi(t) {
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
function Vi() {
  if (Zr) return it;
  Zr = 1;
  var t = Mt, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
function Xi() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Mt, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), x = Symbol.iterator, w = "@@iterator";
    function O(l) {
      if (l === null || typeof l != "object")
        return null;
      var y = x && l[x] || l[w];
      return typeof y == "function" ? y : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(l) {
      {
        for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), R = 1; R < y; R++)
          E[R - 1] = arguments[R];
        I("error", l, E);
      }
    }
    function I(l, y, E) {
      {
        var R = S.ReactDebugCurrentFrame, B = R.getStackAddendum();
        B !== "" && (y += "%s", E = E.concat([B]));
        var J = E.map(function(z) {
          return String(z);
        });
        J.unshift("Warning: " + y), Function.prototype.apply.call(console[l], console, J);
      }
    }
    var v = !1, m = !1, G = !1, ie = !1, ue = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Fe(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || ue || l === a || l === f || l === c || ie || l === h || v || m || G || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === d || l.$$typeof === o || l.$$typeof === s || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === ce || l.getModuleId !== void 0));
    }
    function He(l, y, E) {
      var R = l.displayName;
      if (R)
        return R;
      var B = y.displayName || y.name || "";
      return B !== "" ? E + "(" + B + ")" : E;
    }
    function Ue(l) {
      return l.displayName || "Context";
    }
    function ve(l) {
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
            var y = l;
            return Ue(y) + ".Consumer";
          case o:
            var E = l;
            return Ue(E._context) + ".Provider";
          case u:
            return He(l, l.render, "ForwardRef");
          case d:
            var R = l.displayName || null;
            return R !== null ? R : ve(l.type) || "Memo";
          case p: {
            var B = l, J = B._payload, z = B._init;
            try {
              return ve(z(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, Se = 0, he, Ee, Le, Ge, b, k, N;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function F() {
      {
        if (Se === 0) {
          he = console.log, Ee = console.info, Le = console.warn, Ge = console.error, b = console.group, k = console.groupCollapsed, N = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: j,
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
        Se++;
      }
    }
    function Y() {
      {
        if (Se--, Se === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, l, {
              value: he
            }),
            info: de({}, l, {
              value: Ee
            }),
            warn: de({}, l, {
              value: Le
            }),
            error: de({}, l, {
              value: Ge
            }),
            group: de({}, l, {
              value: b
            }),
            groupCollapsed: de({}, l, {
              value: k
            }),
            groupEnd: de({}, l, {
              value: N
            })
          });
        }
        Se < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = S.ReactCurrentDispatcher, M;
    function L(l, y, E) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (B) {
            var R = B.stack.trim().match(/\n( *(at )?)/);
            M = R && R[1] || "";
          }
        return `
` + M + l;
      }
    }
    var H = !1, $;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new le();
    }
    function P(l, y) {
      if (!l || H)
        return "";
      {
        var E = $.get(l);
        if (E !== void 0)
          return E;
      }
      var R;
      H = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = D.current, D.current = null, F();
      try {
        if (y) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (me) {
              R = me;
            }
            Reflect.construct(l, [], z);
          } else {
            try {
              z.call();
            } catch (me) {
              R = me;
            }
            l.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            R = me;
          }
          l();
        }
      } catch (me) {
        if (me && R && typeof me.stack == "string") {
          for (var W = me.stack.split(`
`), fe = R.stack.split(`
`), ee = W.length - 1, ne = fe.length - 1; ee >= 1 && ne >= 0 && W[ee] !== fe[ne]; )
            ne--;
          for (; ee >= 1 && ne >= 0; ee--, ne--)
            if (W[ee] !== fe[ne]) {
              if (ee !== 1 || ne !== 1)
                do
                  if (ee--, ne--, ne < 0 || W[ee] !== fe[ne]) {
                    var ge = `
` + W[ee].replace(" at new ", " at ");
                    return l.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", l.displayName)), typeof l == "function" && $.set(l, ge), ge;
                  }
                while (ee >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        H = !1, D.current = J, Y(), Error.prepareStackTrace = B;
      }
      var Xe = l ? l.displayName || l.name : "", We = Xe ? L(Xe) : "";
      return typeof l == "function" && $.set(l, We), We;
    }
    function ye(l, y, E) {
      return P(l, !1);
    }
    function Be(l) {
      var y = l.prototype;
      return !!(y && y.isReactComponent);
    }
    function $e(l, y, E) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return P(l, Be(l));
      if (typeof l == "string")
        return L(l);
      switch (l) {
        case f:
          return L("Suspense");
        case c:
          return L("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return ye(l.render);
          case d:
            return $e(l.type, y, E);
          case p: {
            var R = l, B = R._payload, J = R._init;
            try {
              return $e(J(B), y, E);
            } catch {
            }
          }
        }
      return "";
    }
    var nt = Object.prototype.hasOwnProperty, $r = {}, Wr = S.ReactDebugCurrentFrame;
    function wt(l) {
      if (l) {
        var y = l._owner, E = $e(l.type, l._source, y ? y.type : null);
        Wr.setExtraStackFrame(E);
      } else
        Wr.setExtraStackFrame(null);
    }
    function xi(l, y, E, R, B) {
      {
        var J = Function.call.bind(nt);
        for (var z in l)
          if (J(l, z)) {
            var W = void 0;
            try {
              if (typeof l[z] != "function") {
                var fe = Error((R || "React class") + ": " + E + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw fe.name = "Invariant Violation", fe;
              }
              W = l[z](y, z, R, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              W = ee;
            }
            W && !(W instanceof Error) && (wt(B), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", E, z, typeof W), wt(null)), W instanceof Error && !(W.message in $r) && ($r[W.message] = !0, wt(B), A("Failed %s type: %s", E, W.message), wt(null));
          }
      }
    }
    var Pi = Array.isArray;
    function Yt(l) {
      return Pi(l);
    }
    function Ei(l) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, E = y && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return E;
      }
    }
    function Ti(l) {
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
      if (Ti(l))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ei(l)), Yr(l);
    }
    var qr = S.ReactCurrentOwner, ki = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hr, Ur;
    function Oi(l) {
      if (nt.call(l, "ref")) {
        var y = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Si(l) {
      if (nt.call(l, "key")) {
        var y = Object.getOwnPropertyDescriptor(l, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Ai(l, y) {
      typeof l.ref == "string" && qr.current;
    }
    function _i(l, y) {
      {
        var E = function() {
          Hr || (Hr = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        E.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Ii(l, y) {
      {
        var E = function() {
          Ur || (Ur = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        E.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Ri = function(l, y, E, R, B, J, z) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: l,
        key: y,
        ref: E,
        props: z,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Ci(l, y, E, R, B) {
      {
        var J, z = {}, W = null, fe = null;
        E !== void 0 && (zr(E), W = "" + E), Si(y) && (zr(y.key), W = "" + y.key), Oi(y) && (fe = y.ref, Ai(y, B));
        for (J in y)
          nt.call(y, J) && !ki.hasOwnProperty(J) && (z[J] = y[J]);
        if (l && l.defaultProps) {
          var ee = l.defaultProps;
          for (J in ee)
            z[J] === void 0 && (z[J] = ee[J]);
        }
        if (W || fe) {
          var ne = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          W && _i(z, ne), fe && Ii(z, ne);
        }
        return Ri(l, W, fe, B, R, qr.current, z);
      }
    }
    var zt = S.ReactCurrentOwner, Gr = S.ReactDebugCurrentFrame;
    function Ve(l) {
      if (l) {
        var y = l._owner, E = $e(l.type, l._source, y ? y.type : null);
        Gr.setExtraStackFrame(E);
      } else
        Gr.setExtraStackFrame(null);
    }
    var qt;
    qt = !1;
    function Ht(l) {
      return typeof l == "object" && l !== null && l.$$typeof === n;
    }
    function Br() {
      {
        if (zt.current) {
          var l = ve(zt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Fi(l) {
      return "";
    }
    var Vr = {};
    function Di(l) {
      {
        var y = Br();
        if (!y) {
          var E = typeof l == "string" ? l : l.displayName || l.name;
          E && (y = `

Check the top-level render call using <` + E + ">.");
        }
        return y;
      }
    }
    function Xr(l, y) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var E = Di(y);
        if (Vr[E])
          return;
        Vr[E] = !0;
        var R = "";
        l && l._owner && l._owner !== zt.current && (R = " It was passed a child from " + ve(l._owner.type) + "."), Ve(l), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, R), Ve(null);
      }
    }
    function Jr(l, y) {
      {
        if (typeof l != "object")
          return;
        if (Yt(l))
          for (var E = 0; E < l.length; E++) {
            var R = l[E];
            Ht(R) && Xr(R, y);
          }
        else if (Ht(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var B = O(l);
          if (typeof B == "function" && B !== l.entries)
            for (var J = B.call(l), z; !(z = J.next()).done; )
              Ht(z.value) && Xr(z.value, y);
        }
      }
    }
    function Mi(l) {
      {
        var y = l.type;
        if (y == null || typeof y == "string")
          return;
        var E;
        if (typeof y == "function")
          E = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === d))
          E = y.propTypes;
        else
          return;
        if (E) {
          var R = ve(y);
          xi(E, l.props, "prop", R, l);
        } else if (y.PropTypes !== void 0 && !qt) {
          qt = !0;
          var B = ve(y);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ji(l) {
      {
        for (var y = Object.keys(l.props), E = 0; E < y.length; E++) {
          var R = y[E];
          if (R !== "children" && R !== "key") {
            Ve(l), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Ve(null);
            break;
          }
        }
        l.ref !== null && (Ve(l), A("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Qr = {};
    function Kr(l, y, E, R, B, J) {
      {
        var z = Fe(l);
        if (!z) {
          var W = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var fe = Fi();
          fe ? W += fe : W += Br();
          var ee;
          l === null ? ee = "null" : Yt(l) ? ee = "array" : l !== void 0 && l.$$typeof === n ? (ee = "<" + (ve(l.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof l, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, W);
        }
        var ne = Ci(l, y, E, B, J);
        if (ne == null)
          return ne;
        if (z) {
          var ge = y.children;
          if (ge !== void 0)
            if (R)
              if (Yt(ge)) {
                for (var Xe = 0; Xe < ge.length; Xe++)
                  Jr(ge[Xe], l);
                Object.freeze && Object.freeze(ge);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jr(ge, l);
        }
        if (nt.call(y, "key")) {
          var We = ve(l), me = Object.keys(y).filter(function(zi) {
            return zi !== "key";
          }), Ut = me.length > 0 ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qr[We + Ut]) {
            var Yi = me.length > 0 ? "{" + me.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ut, We, Yi, We), Qr[We + Ut] = !0;
          }
        }
        return l === r ? ji(ne) : Mi(ne), ne;
      }
    }
    function Ni(l, y, E) {
      return Kr(l, y, E, !0);
    }
    function Li(l, y, E) {
      return Kr(l, y, E, !1);
    }
    var $i = Li, Wi = Ni;
    ot.Fragment = r, ot.jsx = $i, ot.jsxs = Wi;
  })()), ot;
}
var tn;
function Ji() {
  return tn || (tn = 1, process.env.NODE_ENV === "production" ? xt.exports = Vi() : xt.exports = Xi()), xt.exports;
}
var q = Ji(), Pt = { exports: {} }, Et = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function Qi() {
  if (rn) return V;
  rn = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, x = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, A = t ? Symbol.for("react.scope") : 60119;
  function I(m) {
    if (typeof m == "object" && m !== null) {
      var G = m.$$typeof;
      switch (G) {
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
                case x:
                case h:
                case o:
                  return m;
                default:
                  return G;
              }
          }
        case e:
          return G;
      }
    }
  }
  function v(m) {
    return I(m) === f;
  }
  return V.AsyncMode = u, V.ConcurrentMode = f, V.ContextConsumer = s, V.ContextProvider = o, V.Element = n, V.ForwardRef = c, V.Fragment = r, V.Lazy = x, V.Memo = h, V.Portal = e, V.Profiler = i, V.StrictMode = a, V.Suspense = d, V.isAsyncMode = function(m) {
    return v(m) || I(m) === u;
  }, V.isConcurrentMode = v, V.isContextConsumer = function(m) {
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
    return I(m) === x;
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
    return typeof m == "string" || typeof m == "function" || m === r || m === f || m === i || m === a || m === d || m === p || typeof m == "object" && m !== null && (m.$$typeof === x || m.$$typeof === h || m.$$typeof === o || m.$$typeof === s || m.$$typeof === c || m.$$typeof === O || m.$$typeof === S || m.$$typeof === A || m.$$typeof === w);
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
function Ki() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, x = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, A = t ? Symbol.for("react.scope") : 60119;
    function I(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === r || P === f || P === i || P === a || P === d || P === p || typeof P == "object" && P !== null && (P.$$typeof === x || P.$$typeof === h || P.$$typeof === o || P.$$typeof === s || P.$$typeof === c || P.$$typeof === O || P.$$typeof === S || P.$$typeof === A || P.$$typeof === w);
    }
    function v(P) {
      if (typeof P == "object" && P !== null) {
        var ye = P.$$typeof;
        switch (ye) {
          case n:
            var Be = P.type;
            switch (Be) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case d:
                return Be;
              default:
                var $e = Be && Be.$$typeof;
                switch ($e) {
                  case s:
                  case c:
                  case x:
                  case h:
                  case o:
                    return $e;
                  default:
                    return ye;
                }
            }
          case e:
            return ye;
        }
      }
    }
    var m = u, G = f, ie = s, ue = o, ce = n, Fe = c, He = r, Ue = x, ve = h, de = e, Se = i, he = a, Ee = d, Le = !1;
    function Ge(P) {
      return Le || (Le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(P) || v(P) === u;
    }
    function b(P) {
      return v(P) === f;
    }
    function k(P) {
      return v(P) === s;
    }
    function N(P) {
      return v(P) === o;
    }
    function j(P) {
      return typeof P == "object" && P !== null && P.$$typeof === n;
    }
    function F(P) {
      return v(P) === c;
    }
    function Y(P) {
      return v(P) === r;
    }
    function D(P) {
      return v(P) === x;
    }
    function M(P) {
      return v(P) === h;
    }
    function L(P) {
      return v(P) === e;
    }
    function H(P) {
      return v(P) === i;
    }
    function $(P) {
      return v(P) === a;
    }
    function le(P) {
      return v(P) === d;
    }
    X.AsyncMode = m, X.ConcurrentMode = G, X.ContextConsumer = ie, X.ContextProvider = ue, X.Element = ce, X.ForwardRef = Fe, X.Fragment = He, X.Lazy = Ue, X.Memo = ve, X.Portal = de, X.Profiler = Se, X.StrictMode = he, X.Suspense = Ee, X.isAsyncMode = Ge, X.isConcurrentMode = b, X.isContextConsumer = k, X.isContextProvider = N, X.isElement = j, X.isForwardRef = F, X.isFragment = Y, X.isLazy = D, X.isMemo = M, X.isPortal = L, X.isProfiler = H, X.isStrictMode = $, X.isSuspense = le, X.isValidElementType = I, X.typeOf = v;
  })()), X;
}
var an;
function Zn() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Et.exports = Qi() : Et.exports = Ki()), Et.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bt, on;
function Zi() {
  if (on) return Bt;
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
  return Bt = a() ? Object.assign : function(i, o) {
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
  }, Bt;
}
var Vt, sn;
function Tr() {
  if (sn) return Vt;
  sn = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vt = t, Vt;
}
var Xt, ln;
function ea() {
  return ln || (ln = 1, Xt = Function.call.bind(Object.prototype.hasOwnProperty)), Xt;
}
var Jt, un;
function eo() {
  if (un) return Jt;
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
          } catch (x) {
            d = x;
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
  }, Jt = a, Jt;
}
var Qt, fn;
function to() {
  if (fn) return Qt;
  fn = 1;
  var t = Zn(), n = Zi(), e = /* @__PURE__ */ Tr(), r = /* @__PURE__ */ ea(), a = /* @__PURE__ */ eo(), i = function() {
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
  return Qt = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(b) {
      var k = b && (f && b[f] || b[c]);
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
      element: v(),
      elementType: m(),
      instanceOf: G,
      node: Fe(),
      objectOf: ue,
      oneOf: ie,
      oneOfType: ce,
      shape: Ue,
      exact: ve
    };
    function x(b, k) {
      return b === k ? b !== 0 || 1 / b === 1 / k : b !== b && k !== k;
    }
    function w(b, k) {
      this.message = b, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function O(b) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, N = 0;
      function j(Y, D, M, L, H, $, le) {
        if (L = L || p, $ = $ || M, le !== e) {
          if (u) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = L + ":" + M;
            !k[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[ye] = !0, N++);
          }
        }
        return D[M] == null ? Y ? D[M] === null ? new w("The " + H + " `" + $ + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new w("The " + H + " `" + $ + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : b(D, M, L, H, $);
      }
      var F = j.bind(null, !1);
      return F.isRequired = j.bind(null, !0), F;
    }
    function S(b) {
      function k(N, j, F, Y, D, M) {
        var L = N[j], H = he(L);
        if (H !== b) {
          var $ = Ee(L);
          return new w(
            "Invalid " + Y + " `" + D + "` of type " + ("`" + $ + "` supplied to `" + F + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return O(k);
    }
    function A() {
      return O(o);
    }
    function I(b) {
      function k(N, j, F, Y, D) {
        if (typeof b != "function")
          return new w("Property `" + D + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var M = N[j];
        if (!Array.isArray(M)) {
          var L = he(M);
          return new w("Invalid " + Y + " `" + D + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected an array."));
        }
        for (var H = 0; H < M.length; H++) {
          var $ = b(M, H, F, Y, D + "[" + H + "]", e);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return O(k);
    }
    function v() {
      function b(k, N, j, F, Y) {
        var D = k[N];
        if (!s(D)) {
          var M = he(D);
          return new w("Invalid " + F + " `" + Y + "` of type " + ("`" + M + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(b);
    }
    function m() {
      function b(k, N, j, F, Y) {
        var D = k[N];
        if (!t.isValidElementType(D)) {
          var M = he(D);
          return new w("Invalid " + F + " `" + Y + "` of type " + ("`" + M + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(b);
    }
    function G(b) {
      function k(N, j, F, Y, D) {
        if (!(N[j] instanceof b)) {
          var M = b.name || p, L = Ge(N[j]);
          return new w("Invalid " + Y + " `" + D + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return O(k);
    }
    function ie(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function k(N, j, F, Y, D) {
        for (var M = N[j], L = 0; L < b.length; L++)
          if (x(M, b[L]))
            return null;
        var H = JSON.stringify(b, function(le, P) {
          var ye = Ee(P);
          return ye === "symbol" ? String(P) : P;
        });
        return new w("Invalid " + Y + " `" + D + "` of value `" + String(M) + "` " + ("supplied to `" + F + "`, expected one of " + H + "."));
      }
      return O(k);
    }
    function ue(b) {
      function k(N, j, F, Y, D) {
        if (typeof b != "function")
          return new w("Property `" + D + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var M = N[j], L = he(M);
        if (L !== "object")
          return new w("Invalid " + Y + " `" + D + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected an object."));
        for (var H in M)
          if (r(M, H)) {
            var $ = b(M, H, F, Y, D + "." + H, e);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return O(k);
    }
    function ce(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var k = 0; k < b.length; k++) {
        var N = b[k];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Le(N) + " at index " + k + "."
          ), o;
      }
      function j(F, Y, D, M, L) {
        for (var H = [], $ = 0; $ < b.length; $++) {
          var le = b[$], P = le(F, Y, D, M, L, e);
          if (P == null)
            return null;
          P.data && r(P.data, "expectedType") && H.push(P.data.expectedType);
        }
        var ye = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new w("Invalid " + M + " `" + L + "` supplied to " + ("`" + D + "`" + ye + "."));
      }
      return O(j);
    }
    function Fe() {
      function b(k, N, j, F, Y) {
        return de(k[N]) ? null : new w("Invalid " + F + " `" + Y + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return O(b);
    }
    function He(b, k, N, j, F) {
      return new w(
        (b || "React class") + ": " + k + " type `" + N + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function Ue(b) {
      function k(N, j, F, Y, D) {
        var M = N[j], L = he(M);
        if (L !== "object")
          return new w("Invalid " + Y + " `" + D + "` of type `" + L + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var H in b) {
          var $ = b[H];
          if (typeof $ != "function")
            return He(F, Y, D, H, Ee($));
          var le = $(M, H, F, Y, D + "." + H, e);
          if (le)
            return le;
        }
        return null;
      }
      return O(k);
    }
    function ve(b) {
      function k(N, j, F, Y, D) {
        var M = N[j], L = he(M);
        if (L !== "object")
          return new w("Invalid " + Y + " `" + D + "` of type `" + L + "` " + ("supplied to `" + F + "`, expected `object`."));
        var H = n({}, N[j], b);
        for (var $ in H) {
          var le = b[$];
          if (r(b, $) && typeof le != "function")
            return He(F, Y, D, $, Ee(le));
          if (!le)
            return new w(
              "Invalid " + Y + " `" + D + "` key `" + $ + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(N[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var P = le(M, $, F, Y, D + "." + $, e);
          if (P)
            return P;
        }
        return null;
      }
      return O(k);
    }
    function de(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(de);
          if (b === null || s(b))
            return !0;
          var k = d(b);
          if (k) {
            var N = k.call(b), j;
            if (k !== b.entries) {
              for (; !(j = N.next()).done; )
                if (!de(j.value))
                  return !1;
            } else
              for (; !(j = N.next()).done; ) {
                var F = j.value;
                if (F && !de(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Se(b, k) {
      return b === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function he(b) {
      var k = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : Se(k, b) ? "symbol" : k;
    }
    function Ee(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var k = he(b);
      if (k === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function Le(b) {
      var k = Ee(b);
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
    function Ge(b) {
      return !b.constructor || !b.constructor.name ? p : b.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Qt;
}
var Kt, cn;
function ro() {
  if (cn) return Kt;
  cn = 1;
  var t = /* @__PURE__ */ Tr();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, Kt = function() {
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
  }, Kt;
}
var dn;
function no() {
  if (dn) return Pt.exports;
  if (dn = 1, process.env.NODE_ENV !== "production") {
    var t = Zn(), n = !0;
    Pt.exports = /* @__PURE__ */ to()(t.isElement, n);
  } else
    Pt.exports = /* @__PURE__ */ ro()();
  return Pt.exports;
}
var ao = /* @__PURE__ */ no();
const be = /* @__PURE__ */ Bi(ao);
/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */
function lr(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r;
}
function io(t) {
  if (Array.isArray(t)) return t;
}
function oo(t) {
  if (Array.isArray(t)) return lr(t);
}
function so(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function lo(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ta(r.key), r);
  }
}
function uo(t, n, e) {
  return n && lo(t.prototype, n), Object.defineProperty(t, "prototype", {
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
function C(t, n, e) {
  return (n = ta(n)) in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function fo(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function co(t, n) {
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
function mo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ho() {
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
function g(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? mn(Object(e), !0).forEach(function(r) {
      C(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : mn(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
function jt(t, n) {
  return io(t) || co(t, n) || kr(t, n) || mo();
}
function Pe(t) {
  return oo(t) || fo(t) || kr(t) || ho();
}
function po(t, n) {
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
  var n = po(t, "string");
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
    if (typeof t == "string") return lr(t, n);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? lr(t, n) : void 0;
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
var vo = Or.navigator || {}, pn = vo.userAgent, vn = pn === void 0 ? "" : pn, De = Or, Q = ra, yn = na, Tt = aa;
De.document;
var Ce = !!Q.documentElement && !!Q.head && typeof Q.addEventListener == "function" && typeof Q.createElement == "function", ia = ~vn.indexOf("MSIE") || ~vn.indexOf("Trident/"), Zt, yo = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, go = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, oa = {
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
}, bo = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sa = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], oe = "classic", vt = "duotone", la = "sharp", ua = "sharp-duotone", fa = "chisel", ca = "etch", da = "graphite", ma = "jelly", ha = "jelly-duo", pa = "jelly-fill", va = "notdog", ya = "notdog-duo", ga = "slab", ba = "slab-press", wa = "thumbprint", xa = "utility", Pa = "utility-duo", Ea = "utility-fill", Ta = "whiteboard", wo = "Classic", xo = "Duotone", Po = "Sharp", Eo = "Sharp Duotone", To = "Chisel", ko = "Etch", Oo = "Graphite", So = "Jelly", Ao = "Jelly Duo", _o = "Jelly Fill", Io = "Notdog", Ro = "Notdog Duo", Co = "Slab", Fo = "Slab Press", Do = "Thumbprint", Mo = "Utility", jo = "Utility Duo", No = "Utility Fill", Lo = "Whiteboard", ka = [oe, vt, la, ua, fa, ca, da, ma, ha, pa, va, ya, ga, ba, wa, xa, Pa, Ea, Ta];
Zt = {}, C(C(C(C(C(C(C(C(C(C(Zt, oe, wo), vt, xo), la, Po), ua, Eo), fa, To), ca, ko), da, Oo), ma, So), ha, Ao), pa, _o), C(C(C(C(C(C(C(C(C(Zt, va, Io), ya, Ro), ga, Co), ba, Fo), wa, Do), xa, Mo), Pa, jo), Ea, No), Ta, Lo);
var $o = {
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
}, Wo = {
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
}, Yo = /* @__PURE__ */ new Map([["classic", {
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
}]]), zo = {
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
}, qo = ["kit"], Ho = "kit", Uo = "kit-duotone", Go = "Kit", Bo = "Kit Duotone";
C(C({}, Ho, Go), Uo, Bo);
var Vo = {
  kit: {
    "fa-kit": "fak"
  }
}, Xo = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Jo = {
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
}, er, kt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Qo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], Ko = "classic", Zo = "duotone", es = "sharp", ts = "sharp-duotone", rs = "chisel", ns = "etch", as = "graphite", is = "jelly", os = "jelly-duo", ss = "jelly-fill", ls = "notdog", us = "notdog-duo", fs = "slab", cs = "slab-press", ds = "thumbprint", ms = "utility", hs = "utility-duo", ps = "utility-fill", vs = "whiteboard", ys = "Classic", gs = "Duotone", bs = "Sharp", ws = "Sharp Duotone", xs = "Chisel", Ps = "Etch", Es = "Graphite", Ts = "Jelly", ks = "Jelly Duo", Os = "Jelly Fill", Ss = "Notdog", As = "Notdog Duo", _s = "Slab", Is = "Slab Press", Rs = "Thumbprint", Cs = "Utility", Fs = "Utility Duo", Ds = "Utility Fill", Ms = "Whiteboard";
er = {}, C(C(C(C(C(C(C(C(C(C(er, Ko, ys), Zo, gs), es, bs), ts, ws), rs, xs), ns, Ps), as, Es), is, Ts), os, ks), ss, Os), C(C(C(C(C(C(C(C(C(er, ls, Ss), us, As), fs, _s), cs, Is), ds, Rs), ms, Cs), hs, Fs), ps, Ds), vs, Ms);
var js = "kit", Ns = "kit-duotone", Ls = "Kit", $s = "Kit Duotone";
C(C({}, js, Ls), Ns, $s);
var Ws = {
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
}, Ys = {
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
}, ur = {
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
}, zs = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], Sa = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(Qo, zs), qs = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], Aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Hs = Aa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Us = ["aw", "fw", "pull-left", "pull-right"], Gs = [].concat(Pe(Object.keys(Ys)), qs, Us, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", kt.GROUP, kt.SWAP_OPACITY, kt.PRIMARY, kt.SECONDARY]).concat(Aa.map(function(t) {
  return "".concat(t, "x");
})).concat(Hs.map(function(t) {
  return "w-".concat(t);
})), Bs = {
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
}, Ie = "___FONT_AWESOME___", fr = 16, _a = "fa", Ia = "svg-inline--fa", ze = "data-fa-i2svg", cr = "data-fa-pseudo-element", Vs = "data-fa-pseudo-element-pending", Sr = "data-prefix", Ar = "data-icon", wn = "fontawesome-i2svg", Xs = "async", Js = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ra = ["::before", "::after", ":before", ":after"], Ca = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function yt(t) {
  return new Proxy(t, {
    get: function(e, r) {
      return r in e ? e[r] : e[oe];
    }
  });
}
var Fa = g({}, oa);
Fa[oe] = g(g(g(g({}, {
  "fa-duotone": "duotone"
}), oa[oe]), gn.kit), gn["kit-duotone"]);
var Qs = yt(Fa), dr = g({}, zo);
dr[oe] = g(g(g(g({}, {
  duotone: "fad"
}), dr[oe]), bn.kit), bn["kit-duotone"]);
var xn = yt(dr), mr = g({}, ur);
mr[oe] = g(g({}, mr[oe]), Jo.kit);
var _r = yt(mr), hr = g({}, Ws);
hr[oe] = g(g({}, hr[oe]), Vo.kit);
yt(hr);
var Ks = yo, Da = "fa-layers-text", Zs = go, el = g({}, $o);
yt(el);
var tl = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], tr = bo, rl = [].concat(Pe(qo), Pe(Gs)), ct = De.FontAwesomeConfig || {};
function nl(t) {
  var n = Q.querySelector("script[" + t + "]");
  if (n)
    return n.getAttribute(t);
}
function al(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (Q && typeof Q.querySelector == "function") {
  var il = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  il.forEach(function(t) {
    var n = jt(t, 2), e = n[0], r = n[1], a = al(nl(e));
    a != null && (ct[r] = a);
  });
}
var Ma = {
  styleDefault: "solid",
  familyDefault: oe,
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
var et = g(g({}, Ma), ct);
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
De.FontAwesomeConfig = _;
var dt = [];
function ol(t) {
  return dt.push(t), function() {
    dt.splice(dt.indexOf(t), 1);
  };
}
var Je = fr, Oe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function sl(t) {
  if (!(!t || !Ce)) {
    var n = Q.createElement("style");
    n.setAttribute("type", "text/css"), n.innerHTML = t;
    for (var e = Q.head.childNodes, r = null, a = e.length - 1; a > -1; a--) {
      var i = e[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return Q.head.insertBefore(n, r), t;
  }
}
var ll = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Pn() {
  for (var t = 12, n = ""; t-- > 0; )
    n += ll[Math.random() * 62 | 0];
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
function ul(t) {
  return Object.keys(t || {}).reduce(function(n, e) {
    return n + "".concat(e, '="').concat(ja(t[e]), '" ');
  }, "").trim();
}
function Nt(t) {
  return Object.keys(t || {}).reduce(function(n, e) {
    return n + "".concat(e, ": ").concat(t[e].trim(), ";");
  }, "");
}
function Rr(t) {
  return t.size !== Oe.size || t.x !== Oe.x || t.y !== Oe.y || t.rotate !== Oe.rotate || t.flipX || t.flipY;
}
function fl(t) {
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
function cl(t) {
  var n = t.transform, e = t.width, r = e === void 0 ? fr : e, a = t.height, i = a === void 0 ? fr : a, o = "";
  return ia ? o += "translate(".concat(n.x / Je - r / 2, "em, ").concat(n.y / Je - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(n.x / Je, "em), calc(-50% + ").concat(n.y / Je, "em)) "), o += "scale(".concat(n.size / Je * (n.flipX ? -1 : 1), ", ").concat(n.size / Je * (n.flipY ? -1 : 1), ") "), o += "rotate(".concat(n.rotate, "deg) "), o;
}
var dl = `:root, :host {
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
  var t = _a, n = Ia, e = _.cssPrefix, r = _.replacementClass, a = dl;
  if (e !== t || r !== n) {
    var i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(n), "g");
    a = a.replace(i, ".".concat(e, "-")).replace(o, "--".concat(e, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var En = !1;
function rr() {
  _.autoAddCss && !En && (sl(Na()), En = !0);
}
var ml = {
  mixout: function() {
    return {
      dom: {
        css: Na,
        insertCss: rr
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        rr();
      },
      beforeI2svg: function() {
        rr();
      }
    };
  }
}, Re = De || {};
Re[Ie] || (Re[Ie] = {});
Re[Ie].styles || (Re[Ie].styles = {});
Re[Ie].hooks || (Re[Ie].hooks = {});
Re[Ie].shims || (Re[Ie].shims = []);
var xe = Re[Ie], La = [], $a = function() {
  Q.removeEventListener("DOMContentLoaded", $a), Ct = 1, La.map(function(n) {
    return n();
  });
}, Ct = !1;
Ce && (Ct = (Q.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Q.readyState), Ct || Q.addEventListener("DOMContentLoaded", $a));
function hl(t) {
  Ce && (Ct ? setTimeout(t, 0) : La.push(t));
}
function gt(t) {
  var n = t.tag, e = t.attributes, r = e === void 0 ? {} : e, a = t.children, i = a === void 0 ? [] : a;
  return typeof t == "string" ? ja(t) : "<".concat(n, " ").concat(ul(r), ">").concat(i.map(gt).join(""), "</").concat(n, ">");
}
function Tn(t, n, e) {
  if (t && t[n] && t[n][e])
    return {
      prefix: n,
      iconName: e,
      icon: t[n][e]
    };
}
var nr = function(n, e, r, a) {
  var i = Object.keys(n), o = i.length, s = e, u, f, c;
  for (r === void 0 ? (u = 1, c = n[i[0]]) : (u = 0, c = r); u < o; u++)
    f = i[u], c = s(c, n[f], f, n);
  return c;
};
function Wa(t) {
  return Pe(t).length !== 1 ? null : t.codePointAt(0).toString(16);
}
function kn(t) {
  return Object.keys(t).reduce(function(n, e) {
    var r = t[e], a = !!r.icon;
    return a ? n[r.iconName] = r.icon : n[e] = r, n;
  }, {});
}
function pr(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = e.skipHooks, a = r === void 0 ? !1 : r, i = kn(n);
  typeof xe.hooks.addPack == "function" && !a ? xe.hooks.addPack(t, kn(n)) : xe.styles[t] = g(g({}, xe.styles[t] || {}), i), t === "fas" && pr("fa", n);
}
var ht = xe.styles, pl = xe.shims, Ya = Object.keys(_r), vl = Ya.reduce(function(t, n) {
  return t[n] = Object.keys(_r[n]), t;
}, {}), Cr = null, za = {}, qa = {}, Ha = {}, Ua = {}, Ga = {};
function yl(t) {
  return ~rl.indexOf(t);
}
function gl(t, n) {
  var e = n.split("-"), r = e[0], a = e.slice(1).join("-");
  return r === t && a !== "" && !yl(a) ? a : null;
}
var Ba = function() {
  var n = function(i) {
    return nr(ht, function(o, s, u) {
      return o[u] = nr(s, i, {}), o;
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
  var e = "far" in ht || _.autoFetchSvg, r = nr(pl, function(a, i) {
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
  Ha = r.names, Ua = r.unicodes, Cr = Lt(_.styleDefault, {
    family: _.familyDefault
  });
};
ol(function(t) {
  Cr = Lt(t.styleDefault, {
    family: _.familyDefault
  });
});
Ba();
function Fr(t, n) {
  return (za[t] || {})[n];
}
function bl(t, n) {
  return (qa[t] || {})[n];
}
function Ye(t, n) {
  return (Ga[t] || {})[n];
}
function Va(t) {
  return Ha[t] || {
    prefix: null,
    iconName: null
  };
}
function wl(t) {
  var n = Ua[t], e = Fr("fas", t);
  return n || (e ? {
    prefix: "fas",
    iconName: e
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Me() {
  return Cr;
}
var Xa = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function xl(t) {
  var n = oe, e = Ya.reduce(function(r, a) {
    return r[a] = "".concat(_.cssPrefix, "-").concat(a), r;
  }, {});
  return ka.forEach(function(r) {
    (t.includes(e[r]) || t.some(function(a) {
      return vl[r].includes(a);
    })) && (n = r);
  }), n;
}
function Lt(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.family, r = e === void 0 ? oe : e, a = Qs[r][t];
  if (r === vt && !t)
    return "fad";
  var i = xn[r][t] || xn[r][a], o = t in xe.styles ? t : null, s = i || o || null;
  return s;
}
function Pl(t) {
  var n = [], e = null;
  return t.forEach(function(r) {
    var a = gl(_.cssPrefix, r);
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
function $t(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.skipLookups, r = e === void 0 ? !1 : e, a = null, i = On(t.filter(function(h) {
    return Sn.includes(h);
  })), o = On(t.filter(function(h) {
    return !Sn.includes(h);
  })), s = i.filter(function(h) {
    return a = h, !sa.includes(h);
  }), u = jt(s, 1), f = u[0], c = f === void 0 ? null : f, d = xl(i), p = g(g({}, Pl(o)), {}, {
    prefix: Lt(c, {
      family: d
    })
  });
  return g(g(g({}, p), Ol({
    values: t,
    family: d,
    styles: ht,
    config: _,
    canonical: p,
    givenPrefix: a
  })), El(r, a, p));
}
function El(t, n, e) {
  var r = e.prefix, a = e.iconName;
  if (t || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  var i = n === "fa" ? Va(a) : {}, o = Ye(r, a);
  return a = i.iconName || o || a, r = i.prefix || r, r === "far" && !ht.far && ht.fas && !_.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
var Tl = ka.filter(function(t) {
  return t !== oe || t !== vt;
}), kl = Object.keys(ur).filter(function(t) {
  return t !== oe;
}).map(function(t) {
  return Object.keys(ur[t]);
}).flat();
function Ol(t) {
  var n = t.values, e = t.family, r = t.canonical, a = t.givenPrefix, i = a === void 0 ? "" : a, o = t.styles, s = o === void 0 ? {} : o, u = t.config, f = u === void 0 ? {} : u, c = e === vt, d = n.includes("fa-duotone") || n.includes("fad"), p = f.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (n.includes("fa-brands") || n.includes("fab")) && (r.prefix = "fab"), !r.prefix && Tl.includes(e)) {
    var x = Object.keys(s).find(function(O) {
      return kl.includes(O);
    });
    if (x || f.autoFetchSvg) {
      var w = Yo.get(e).defaultShortPrefixId;
      r.prefix = w, r.iconName = Ye(r.prefix, r.iconName) || r.iconName;
    }
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Me() || "fas"), r;
}
var Sl = /* @__PURE__ */ (function() {
  function t() {
    so(this, t), this.definitions = {};
  }
  return uo(t, [{
    key: "add",
    value: function() {
      for (var e = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        e.definitions[s] = g(g({}, e.definitions[s] || {}), o[s]), pr(s, o[s]);
        var u = _r[oe][s];
        u && pr(u, o[s]), Ba();
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
})(), An = [], Ke = {}, Ze = {}, Al = Object.keys(Ze);
function _l(t, n) {
  var e = n.mixoutsTo;
  return An = t, Ke = {}, Object.keys(Ze).forEach(function(r) {
    Al.indexOf(r) === -1 && delete Ze[r];
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
function vr(t, n) {
  for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++)
    r[a - 2] = arguments[a];
  var i = Ke[t] || [];
  return i.forEach(function(o) {
    n = o.apply(null, [n].concat(r));
  }), n;
}
function qe(t) {
  for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    e[r - 1] = arguments[r];
  var a = Ke[t] || [];
  a.forEach(function(i) {
    i.apply(null, e);
  });
}
function je() {
  var t = arguments[0], n = Array.prototype.slice.call(arguments, 1);
  return Ze[t] ? Ze[t].apply(null, n) : void 0;
}
function yr(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var n = t.iconName, e = t.prefix || Me();
  if (n)
    return n = Ye(e, n) || n, Tn(Ja.definitions, e, n) || Tn(xe.styles, e, n);
}
var Ja = new Sl(), Il = function() {
  _.autoReplaceSvg = !1, _.observeMutations = !1, qe("noAuto");
}, Rl = {
  i2svg: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ce ? (qe("beforeI2svg", n), je("pseudoElements2svg", n), je("i2svg", n)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.autoReplaceSvgRoot;
    _.autoReplaceSvg === !1 && (_.autoReplaceSvg = !0), _.observeMutations = !0, hl(function() {
      Fl({
        autoReplaceSvgRoot: e
      }), qe("watch", n);
    });
  }
}, Cl = {
  icon: function(n) {
    if (n === null)
      return null;
    if (Rt(n) === "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: Ye(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      var e = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], r = Lt(n[0]);
      return {
        prefix: r,
        iconName: Ye(r, e) || e
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(_.cssPrefix, "-")) > -1 || n.match(Ks))) {
      var a = $t(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Me(),
        iconName: Ye(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof n == "string") {
      var i = Me();
      return {
        prefix: i,
        iconName: Ye(i, n) || n
      };
    }
  }
}, pe = {
  noAuto: Il,
  config: _,
  dom: Rl,
  parse: Cl,
  library: Ja,
  findIconDefinition: yr,
  toHtml: gt
}, Fl = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.autoReplaceSvgRoot, r = e === void 0 ? Q : e;
  (Object.keys(xe.styles).length > 0 || _.autoFetchSvg) && Ce && _.autoReplaceSvg && pe.dom.i2svg({
    node: r
  });
};
function Wt(t, n) {
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
      if (Ce) {
        var r = Q.createElement("div");
        return r.innerHTML = t.html, r.children;
      }
    }
  }), t;
}
function Dl(t) {
  var n = t.children, e = t.main, r = t.mask, a = t.attributes, i = t.styles, o = t.transform;
  if (Rr(o) && e.found && !r.found) {
    var s = e.width, u = e.height, f = {
      x: s / u / 2,
      y: 0.5
    };
    a.style = Nt(g(g({}, i), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: n
  }];
}
function Ml(t) {
  var n = t.prefix, e = t.iconName, r = t.children, a = t.attributes, i = t.symbol, o = i === !0 ? "".concat(n, "-").concat(_.cssPrefix, "-").concat(e) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: g(g({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function jl(t) {
  var n = ["aria-label", "aria-labelledby", "title", "role"];
  return n.some(function(e) {
    return e in t;
  });
}
function Dr(t) {
  var n = t.icons, e = n.main, r = n.mask, a = t.prefix, i = t.iconName, o = t.transform, s = t.symbol, u = t.maskId, f = t.extra, c = t.watchable, d = c === void 0 ? !1 : c, p = r.found ? r : e, h = p.width, x = p.height, w = [_.replacementClass, i ? "".concat(_.cssPrefix, "-").concat(i) : ""].filter(function(m) {
    return f.classes.indexOf(m) === -1;
  }).filter(function(m) {
    return m !== "" || !!m;
  }).concat(f.classes).join(" "), O = {
    children: [],
    attributes: g(g({}, f.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: w,
      role: f.attributes.role || "img",
      viewBox: "0 0 ".concat(h, " ").concat(x)
    })
  };
  !jl(f.attributes) && !f.attributes["aria-hidden"] && (O.attributes["aria-hidden"] = "true"), d && (O.attributes[ze] = "");
  var S = g(g({}, O), {}, {
    prefix: a,
    iconName: i,
    main: e,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: g({}, f.styles)
  }), A = r.found && e.found ? je("generateAbstractMask", S) || {
    children: [],
    attributes: {}
  } : je("generateAbstractIcon", S) || {
    children: [],
    attributes: {}
  }, I = A.children, v = A.attributes;
  return S.children = I, S.attributes = v, s ? Ml(S) : Dl(S);
}
function _n(t) {
  var n = t.content, e = t.width, r = t.height, a = t.transform, i = t.extra, o = t.watchable, s = o === void 0 ? !1 : o, u = g(g({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  s && (u[ze] = "");
  var f = g({}, i.styles);
  Rr(a) && (f.transform = cl({
    transform: a,
    width: e,
    height: r
  }), f["-webkit-transform"] = f.transform);
  var c = Nt(f);
  c.length > 0 && (u.style = c);
  var d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [n]
  }), d;
}
function Nl(t) {
  var n = t.content, e = t.extra, r = g(g({}, e.attributes), {}, {
    class: e.classes.join(" ")
  }), a = Nt(e.styles);
  a.length > 0 && (r.style = a);
  var i = [];
  return i.push({
    tag: "span",
    attributes: r,
    children: [n]
  }), i;
}
var ar = xe.styles;
function gr(t) {
  var n = t[0], e = t[1], r = t.slice(4), a = jt(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(_.cssPrefix, "-").concat(tr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(_.cssPrefix, "-").concat(tr.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(_.cssPrefix, "-").concat(tr.PRIMARY),
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
var Ll = {
  found: !1,
  width: 512,
  height: 512
};
function $l(t, n) {
  !Ca && !_.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(n, '" is missing.'));
}
function br(t, n) {
  var e = n;
  return n === "fa" && _.styleDefault !== null && (n = Me()), new Promise(function(r, a) {
    if (e === "fa") {
      var i = Va(t) || {};
      t = i.iconName || t, n = i.prefix || n;
    }
    if (t && n && ar[n] && ar[n][t]) {
      var o = ar[n][t];
      return r(gr(o));
    }
    $l(t, n), r(g(g({}, Ll), {}, {
      icon: _.showMissingIcons && t ? je("missingIconAbstract") || {} : {}
    }));
  });
}
var In = function() {
}, wr = _.measurePerformance && Tt && Tt.mark && Tt.measure ? Tt : {
  mark: In,
  measure: In
}, ft = 'FA "7.2.0"', Wl = function(n) {
  return wr.mark("".concat(ft, " ").concat(n, " begins")), function() {
    return Qa(n);
  };
}, Qa = function(n) {
  wr.mark("".concat(ft, " ").concat(n, " ends")), wr.measure("".concat(ft, " ").concat(n), "".concat(ft, " ").concat(n, " begins"), "".concat(ft, " ").concat(n, " ends"));
}, Mr = {
  begin: Wl,
  end: Qa
}, At = function() {
};
function Rn(t) {
  var n = t.getAttribute ? t.getAttribute(ze) : null;
  return typeof n == "string";
}
function Yl(t) {
  var n = t.getAttribute ? t.getAttribute(Sr) : null, e = t.getAttribute ? t.getAttribute(Ar) : null;
  return n && e;
}
function zl(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(_.replacementClass);
}
function ql() {
  if (_.autoReplaceSvg === !0)
    return _t.replace;
  var t = _t[_.autoReplaceSvg];
  return t || _t.replace;
}
function Hl(t) {
  return Q.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ul(t) {
  return Q.createElement(t);
}
function Ka(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.ceFn, r = e === void 0 ? t.tag === "svg" ? Hl : Ul : e;
  if (typeof t == "string")
    return Q.createTextNode(t);
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
function Gl(t) {
  var n = " ".concat(t.outerHTML, " ");
  return n = "".concat(n, "Font Awesome fontawesome.com "), n;
}
var _t = {
  replace: function(n) {
    var e = n[0];
    if (e.parentNode)
      if (n[1].forEach(function(a) {
        e.parentNode.insertBefore(Ka(a), e);
      }), e.getAttribute(ze) === null && _.keepOriginalSource) {
        var r = Q.createComment(Gl(e));
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
    e.setAttribute(ze, ""), e.innerHTML = o;
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
    _.mutateApproach === Xs && (r = De.requestAnimationFrame || Cn), r(function() {
      var a = ql(), i = Mr.begin("mutate");
      t.map(a), i(), e();
    });
  }
}
var jr = !1;
function ei() {
  jr = !0;
}
function xr() {
  jr = !1;
}
var Ft = null;
function Fn(t) {
  if (yn && _.observeMutations) {
    var n = t.treeCallback, e = n === void 0 ? At : n, r = t.nodeCallback, a = r === void 0 ? At : r, i = t.pseudoElementsCallback, o = i === void 0 ? At : i, s = t.observeMutationsRoot, u = s === void 0 ? Q : s;
    Ft = new yn(function(f) {
      if (!jr) {
        var c = Me();
        rt(f).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !Rn(d.addedNodes[0]) && (_.searchPseudoElements && o(d.target), e(d.target)), d.type === "attributes" && d.target.parentNode && _.searchPseudoElements && o([d.target], !0), d.type === "attributes" && Rn(d.target) && ~tl.indexOf(d.attributeName))
            if (d.attributeName === "class" && Yl(d.target)) {
              var p = $t(Ir(d.target)), h = p.prefix, x = p.iconName;
              d.target.setAttribute(Sr, h || c), x && d.target.setAttribute(Ar, x);
            } else zl(d.target) && a(d.target);
        });
      }
    }), Ce && Ft.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Bl() {
  Ft && Ft.disconnect();
}
function Vl(t) {
  var n = t.getAttribute("style"), e = [];
  return n && (e = n.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), e;
}
function Xl(t) {
  var n = t.getAttribute("data-prefix"), e = t.getAttribute("data-icon"), r = t.innerText !== void 0 ? t.innerText.trim() : "", a = $t(Ir(t));
  return a.prefix || (a.prefix = Me()), n && e && (a.prefix = n, a.iconName = e), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = bl(a.prefix, t.innerText) || Fr(a.prefix, Wa(t.innerText))), !a.iconName && _.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = t.firstChild.data)), a;
}
function Jl(t) {
  var n = rt(t.attributes).reduce(function(e, r) {
    return e.name !== "class" && e.name !== "style" && (e[r.name] = r.value), e;
  }, {});
  return n;
}
function Ql() {
  return {
    iconName: null,
    prefix: null,
    transform: Oe,
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
  }, e = Xl(t), r = e.iconName, a = e.prefix, i = e.rest, o = Jl(t), s = vr("parseNodeAttributes", {}, t), u = n.styleParser ? Vl(t) : [];
  return g({
    iconName: r,
    prefix: a,
    transform: Oe,
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
var Kl = xe.styles;
function ti(t) {
  var n = _.autoReplaceSvg === "nest" ? Dn(t, {
    styleParser: !1
  }) : Dn(t);
  return ~n.extra.classes.indexOf(Da) ? je("generateLayersText", t, n) : je("generateSvgReplacementMutation", t, n);
}
function Zl() {
  return [].concat(Pe(Oa), Pe(Sa));
}
function Mn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ce) return Promise.resolve();
  var e = Q.documentElement.classList, r = function(d) {
    return e.add("".concat(wn, "-").concat(d));
  }, a = function(d) {
    return e.remove("".concat(wn, "-").concat(d));
  }, i = _.autoFetchSvg ? Zl() : sa.concat(Object.keys(Kl));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Da, ":not([").concat(ze, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(ze, "])");
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
function eu(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ti(t).then(function(e) {
    e && Za([e], n);
  });
}
function tu(t) {
  return function(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (n || {}).icon ? n : yr(n || {}), a = e.mask;
    return a && (a = (a || {}).icon ? a : yr(a || {})), t(r, g(g({}, e), {}, {
      mask: a
    }));
  };
}
var ru = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.transform, a = r === void 0 ? Oe : r, i = e.symbol, o = i === void 0 ? !1 : i, s = e.mask, u = s === void 0 ? null : s, f = e.maskId, c = f === void 0 ? null : f, d = e.classes, p = d === void 0 ? [] : d, h = e.attributes, x = h === void 0 ? {} : h, w = e.styles, O = w === void 0 ? {} : w;
  if (n) {
    var S = n.prefix, A = n.iconName, I = n.icon;
    return Wt(g({
      type: "icon"
    }, n), function() {
      return qe("beforeDOMElementCreation", {
        iconDefinition: n,
        params: e
      }), Dr({
        icons: {
          main: gr(I),
          mask: u ? gr(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: S,
        iconName: A,
        transform: g(g({}, Oe), a),
        symbol: o,
        maskId: c,
        extra: {
          attributes: x,
          styles: O,
          classes: p
        }
      });
    });
  }
}, nu = {
  mixout: function() {
    return {
      icon: tu(ru)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.treeCallback = Mn, e.nodeCallback = eu, e;
      }
    };
  },
  provides: function(n) {
    n.i2svg = function(e) {
      var r = e.node, a = r === void 0 ? Q : r, i = e.callback, o = i === void 0 ? function() {
      } : i;
      return Mn(a, o);
    }, n.generateSvgReplacementMutation = function(e, r) {
      var a = r.iconName, i = r.prefix, o = r.transform, s = r.symbol, u = r.mask, f = r.maskId, c = r.extra;
      return new Promise(function(d, p) {
        Promise.all([br(a, i), u.iconName ? br(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var x = jt(h, 2), w = x[0], O = x[1];
          d([e, Dr({
            icons: {
              main: w,
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
      var r = e.children, a = e.attributes, i = e.main, o = e.transform, s = e.styles, u = Nt(s);
      u.length > 0 && (a.style = u);
      var f;
      return Rr(o) && (f = je("generateAbstractTransformGrouping", {
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
}, au = {
  mixout: function() {
    return {
      layer: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return Wt({
          type: "layer"
        }, function() {
          qe("beforeDOMElementCreation", {
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
              class: ["".concat(_.cssPrefix, "-layers")].concat(Pe(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, iu = {
  mixout: function() {
    return {
      counter: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        r.title;
        var a = r.classes, i = a === void 0 ? [] : a, o = r.attributes, s = o === void 0 ? {} : o, u = r.styles, f = u === void 0 ? {} : u;
        return Wt({
          type: "counter",
          content: e
        }, function() {
          return qe("beforeDOMElementCreation", {
            content: e,
            params: r
          }), Nl({
            content: e.toString(),
            extra: {
              attributes: s,
              styles: f,
              classes: ["".concat(_.cssPrefix, "-layers-counter")].concat(Pe(i))
            }
          });
        });
      }
    };
  }
}, ou = {
  mixout: function() {
    return {
      text: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? Oe : a, o = r.classes, s = o === void 0 ? [] : o, u = r.attributes, f = u === void 0 ? {} : u, c = r.styles, d = c === void 0 ? {} : c;
        return Wt({
          type: "text",
          content: e
        }, function() {
          return qe("beforeDOMElementCreation", {
            content: e,
            params: r
          }), _n({
            content: e,
            transform: g(g({}, Oe), i),
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(_.cssPrefix, "-layers-text")].concat(Pe(s))
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
}, ri = new RegExp('"', "ug"), jn = [1105920, 1112319], Nn = g(g(g(g({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Wo), Bs), Xo), Pr = Object.keys(Nn).reduce(function(t, n) {
  return t[n.toLowerCase()] = Nn[n], t;
}, {}), su = Object.keys(Pr).reduce(function(t, n) {
  var e = Pr[n];
  return t[n] = e[900] || Pe(Object.entries(e))[0][1], t;
}, {});
function lu(t) {
  var n = t.replace(ri, "");
  return Wa(Pe(n)[0] || "");
}
function uu(t) {
  var n = t.getPropertyValue("font-feature-settings").includes("ss01"), e = t.getPropertyValue("content"), r = e.replace(ri, ""), a = r.codePointAt(0), i = a >= jn[0] && a <= jn[1], o = r.length === 2 ? r[0] === r[1] : !1;
  return i || o || n;
}
function fu(t, n) {
  var e = t.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(n), a = isNaN(r) ? "normal" : r;
  return (Pr[e] || {})[a] || su[e];
}
function Ln(t, n) {
  var e = "".concat(Vs).concat(n.replace(":", "-"));
  return new Promise(function(r, a) {
    if (t.getAttribute(e) !== null)
      return r();
    var i = rt(t.children), o = i.filter(function(G) {
      return G.getAttribute(cr) === n;
    })[0], s = De.getComputedStyle(t, n), u = s.getPropertyValue("font-family"), f = u.match(Zs), c = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !f)
      return t.removeChild(o), r();
    if (f && d !== "none" && d !== "") {
      var p = s.getPropertyValue("content"), h = fu(u, c), x = lu(p), w = f[0].startsWith("FontAwesome"), O = uu(s), S = Fr(h, x), A = S;
      if (w) {
        var I = wl(x);
        I.iconName && I.prefix && (S = I.iconName, h = I.prefix);
      }
      if (S && !O && (!o || o.getAttribute(Sr) !== h || o.getAttribute(Ar) !== A)) {
        t.setAttribute(e, A), o && t.removeChild(o);
        var v = Ql(), m = v.extra;
        m.attributes[cr] = n, br(S, h).then(function(G) {
          var ie = Dr(g(g({}, v), {}, {
            icons: {
              main: G,
              mask: Xa()
            },
            prefix: h,
            iconName: A,
            extra: m,
            watchable: !0
          })), ue = Q.createElementNS("http://www.w3.org/2000/svg", "svg");
          n === "::before" ? t.insertBefore(ue, t.firstChild) : t.appendChild(ue), ue.outerHTML = ie.map(function(ce) {
            return gt(ce);
          }).join(`
`), t.removeAttribute(e), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function cu(t) {
  return Promise.all([Ln(t, "::before"), Ln(t, "::after")]);
}
function du(t) {
  return t.parentNode !== document.head && !~Js.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(cr) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
var mu = function(n) {
  return !!n && Ra.some(function(e) {
    return n.includes(e);
  });
}, hu = function(n) {
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
      if (mu(o)) {
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
  if (Ce) {
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
                var f = u.value, c = hu(f.selectorText), d = St(c), p;
                try {
                  for (d.s(); !(p = d.n()).done; ) {
                    var h = p.value;
                    r.add(h);
                  }
                } catch (w) {
                  d.e(w);
                } finally {
                  d.f();
                }
              }
            } catch (w) {
              s.e(w);
            } finally {
              s.f();
            }
          } catch (w) {
            _.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href, " (").concat(w.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (w) {
        a.e(w);
      } finally {
        a.f();
      }
      if (!r.size) return;
      var x = Array.from(r).join(", ");
      try {
        e = t.querySelectorAll(x);
      } catch {
      }
    }
    return new Promise(function(w, O) {
      var S = rt(e).filter(du).map(cu), A = Mr.begin("searchPseudoElements");
      ei(), Promise.all(S).then(function() {
        A(), xr(), w();
      }).catch(function() {
        A(), xr(), O();
      });
    });
  }
}
var pu = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.pseudoElementsCallback = $n, e;
      }
    };
  },
  provides: function(n) {
    n.pseudoElements2svg = function(e) {
      var r = e.node, a = r === void 0 ? Q : r;
      _.searchPseudoElements && $n(a);
    };
  }
}, Wn = !1, vu = {
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
        Fn(vr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Bl();
      },
      watch: function(e) {
        var r = e.observeMutationsRoot;
        Wn ? xr() : Fn(vr("mutationObserverCallbacks", {
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
}, yu = {
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
        attributes: g({}, h.outer),
        children: [{
          tag: "g",
          attributes: g({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: g(g({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, ir = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function zn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || n) && (t.attributes.fill = "black"), t;
}
function gu(t) {
  return t.tag === "g" ? t.children : [t];
}
var bu = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? $t(a.split(" ").map(function(o) {
          return o.trim();
        })) : Xa();
        return i.prefix || (i.prefix = Me()), e.mask = i, e.maskId = r.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractMask = function(e) {
      var r = e.children, a = e.attributes, i = e.main, o = e.mask, s = e.maskId, u = e.transform, f = i.width, c = i.icon, d = o.width, p = o.icon, h = fl({
        transform: u,
        containerWidth: d,
        iconWidth: f
      }), x = {
        tag: "rect",
        attributes: g(g({}, ir), {}, {
          fill: "white"
        })
      }, w = c.children ? {
        children: c.children.map(zn)
      } : {}, O = {
        tag: "g",
        attributes: g({}, h.inner),
        children: [zn(g({
          tag: c.tag,
          attributes: g(g({}, c.attributes), h.path)
        }, w))]
      }, S = {
        tag: "g",
        attributes: g({}, h.outer),
        children: [O]
      }, A = "mask-".concat(s || Pn()), I = "clip-".concat(s || Pn()), v = {
        tag: "mask",
        attributes: g(g({}, ir), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, S]
      }, m = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: gu(p)
        }, v]
      };
      return r.push(m, {
        tag: "rect",
        attributes: g({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(A, ")")
        }, ir)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, wu = {
  provides: function(n) {
    var e = !1;
    De.matchMedia && (e = De.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = g(g({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: g(g({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return e || s.children.push({
        tag: "animate",
        attributes: g(g({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: g(g({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: e ? [] : [{
          tag: "animate",
          attributes: g(g({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), e || r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: g(g({}, o), {}, {
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
}, xu = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return e.symbol = i, e;
      }
    };
  }
}, Pu = [ml, nu, au, iu, ou, pu, vu, yu, bu, wu, xu];
_l(Pu, {
  mixoutsTo: pe
});
pe.noAuto;
var pt = pe.config;
pe.library;
pe.dom;
var ni = pe.parse;
pe.findIconDefinition;
pe.toHtml;
var Eu = pe.icon;
pe.layer;
pe.text;
pe.counter;
function Tu(t) {
  return t = t - 0, t === t;
}
function ai(t) {
  return Tu(t) ? t : (t = t.replace(/[_-]+(.)?/g, (n, e) => e ? e.toUpperCase() : ""), t.charAt(0).toLowerCase() + t.slice(1));
}
function ku(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Qe = /* @__PURE__ */ new Map(), Ou = 1e3;
function Su(t) {
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
          n[c.startsWith("webkit") ? ku(c) : c] = f;
        }
      }
    }
    e = i + 1;
  }
  if (Qe.size === Ou) {
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
        i.style = Su(String(d));
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
var Au = ii.bind(null, Mt.createElement), qn = (t, n) => {
  const e = Ui();
  return t || (n ? e : void 0);
}, _u = class {
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
var Iu = (
  // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
  // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
  // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
  "searchPseudoElementsFullScan" in pt ? "7.0.0" : "6.0.0"
), Ru = Number.parseInt(Iu) >= 7, mt = "fa", Ae = {
  beat: "fa-beat",
  fade: "fa-fade",
  beatFade: "fa-beat-fade",
  bounce: "fa-bounce",
  shake: "fa-shake",
  spin: "fa-spin",
  spinPulse: "fa-spin-pulse",
  spinReverse: "fa-spin-reverse",
  pulse: "fa-pulse"
}, Cu = {
  left: "fa-pull-left",
  right: "fa-pull-right"
}, Fu = {
  90: "fa-rotate-90",
  180: "fa-rotate-180",
  270: "fa-rotate-270"
}, Du = {
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
}, _e = {
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
function Mu(t) {
  const n = pt.cssPrefix || pt.familyPrefix || mt;
  return n === mt ? t : t.replace(
    new RegExp(String.raw`(?<=^|\s)${mt}-`, "g"),
    `${n}-`
  );
}
function ju(t) {
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
    size: x,
    rotation: w,
    pull: O,
    swapOpacity: S,
    rotateBy: A,
    widthAuto: I,
    className: v
  } = t, m = [];
  return v && m.push(...v.split(" ")), n && m.push(Ae.beat), e && m.push(Ae.fade), r && m.push(Ae.beatFade), a && m.push(Ae.bounce), i && m.push(Ae.shake), o && m.push(Ae.spin), u && m.push(Ae.spinReverse), s && m.push(Ae.spinPulse), f && m.push(Ae.pulse), c && m.push(_e.fixedWidth), d && m.push(_e.inverse), p && m.push(_e.border), h === !0 && m.push(_e.flip), (h === "horizontal" || h === "both") && m.push(_e.flipHorizontal), (h === "vertical" || h === "both") && m.push(_e.flipVertical), x != null && m.push(Du[x]), w != null && w !== 0 && m.push(Fu[w]), O != null && m.push(Cu[O]), S && m.push(_e.swapOpacity), Ru ? (A && m.push(_e.rotateBy), I && m.push(_e.widthAuto), (pt.cssPrefix || pt.familyPrefix || mt) === mt ? m : (
    // TODO: see if we can achieve custom prefix support without iterating
    // eslint-disable-next-line unicorn/no-array-callback-reference
    m.map(Mu)
  )) : m;
}
var Nu = (t) => typeof t == "object" && "icon" in t && !!t.icon;
function Hn(t) {
  if (t)
    return Nu(t) ? t : ni.icon(t);
}
function Lu(t) {
  return Object.keys(t);
}
var Un = new _u("FontAwesomeIcon"), oi = {
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
}, $u = new Set(Object.keys(oi)), It = Mt.forwardRef((t, n) => {
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
  const h = ju(e), x = typeof f == "string" ? ni.transform(f) : f, w = Hn(a), O = Eu(p, {
    ...h.length > 0 && { classes: h },
    ...x && { transform: x },
    ...w && { mask: w },
    symbol: i,
    title: o,
    titleId: d,
    maskId: c
  });
  if (!O)
    return Un.error("Could not find icon", p), null;
  const { abstract: S } = O, A = { ref: n };
  for (const I of Lu(e))
    $u.has(I) || (A[I] = e[I]);
  return Au(S[0], A);
});
It.displayName = "FontAwesomeIcon";
/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */
var Wu = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Yu = Wu, zu = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [384, 512, ["sort-asc"], "f0de", "M32 224c-12.9 0-24.6-7.8-29.6-19.8S.2 178.5 9.4 169.4l160-160c12.5-12.5 32.8-12.5 45.3 0l160 160c9.2 9.2 11.9 22.9 6.9 34.9S364.9 224 352 224L32 224z"]
}, qu = {
  prefix: "fas",
  iconName: "angle-right",
  icon: [256, 512, [8250], "f105", "M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]
}, Hu = {
  prefix: "fas",
  iconName: "sort",
  icon: [384, 512, ["unsorted"], "f0dc", "M2.4 204.2c5 12 16.6 19.8 29.6 19.8l320 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-9.2 9.2-11.9 22.9-6.9 34.9zm0 103.5c-5 12-2.2 25.7 6.9 34.9l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288c-12.9 0-24.6 7.8-29.6 19.8z"]
}, Gn = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [384, 512, ["sort-desc"], "f0dd", "M32 288c-12.9 0-24.6 7.8-29.6 19.8S.2 333.5 9.4 342.6l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288z"]
};
const si = 6048e5, Uu = 6e4, Gu = 36e5, Bu = 1e3, Bn = Symbol.for("constructDateFrom");
function se(t, n) {
  return typeof t == "function" ? t(n) : t && typeof t == "object" && Bn in t ? t[Bn](n) : t instanceof Date ? new t.constructor(n) : new Date(n);
}
function ae(t, n) {
  return se(n || t, t);
}
function li(t, n, e) {
  const r = ae(t, e == null ? void 0 : e.in);
  return isNaN(n) ? se((e == null ? void 0 : e.in) || t, NaN) : (n && r.setDate(r.getDate() + n), r);
}
let Vu = {};
function bt() {
  return Vu;
}
function Ne(t, n) {
  var s, u, f, c;
  const e = bt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? e.weekStartsOn ?? ((c = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = ae(t, n == null ? void 0 : n.in), i = a.getDay(), o = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function tt(t, n) {
  return Ne(t, { ...n, weekStartsOn: 1 });
}
function Xu(t, n) {
  const e = ae(t, n == null ? void 0 : n.in), r = e.getFullYear(), a = se(e, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = tt(a), o = se(e, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const s = tt(o);
  return e.getTime() >= i.getTime() ? r + 1 : e.getTime() >= s.getTime() ? r : r - 1;
}
function ui(t) {
  const n = ae(t), e = new Date(
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
function Ju(t, n) {
  const e = Xu(t, n), r = se(t, 0);
  return r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), tt(r);
}
const Qu = {
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
}, Ku = (t, n, e) => {
  let r;
  const a = Qu[t];
  return typeof a == "string" ? r = a : n === 1 ? r = a.one : r = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r;
};
function or(t) {
  return (n = {}) => {
    const e = n.width ? String(n.width) : t.defaultWidth;
    return t.formats[e] || t.formats[t.defaultWidth];
  };
}
const Zu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ef = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tf = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, rf = {
  date: or({
    formats: Zu,
    defaultWidth: "full"
  }),
  time: or({
    formats: ef,
    defaultWidth: "full"
  }),
  dateTime: or({
    formats: tf,
    defaultWidth: "full"
  })
}, nf = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, af = (t, n, e, r) => nf[t];
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
const of = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, lf = {
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
}, uf = {
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
}, ff = {
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
}, cf = {
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
}, df = (t, n) => {
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
}, mf = {
  ordinalNumber: df,
  era: st({
    values: of,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: sf,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: st({
    values: lf,
    defaultWidth: "wide"
  }),
  day: st({
    values: uf,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: ff,
    defaultWidth: "wide",
    formattingValues: cf,
    defaultFormattingWidth: "wide"
  })
};
function lt(t) {
  return (n, e = {}) => {
    const r = e.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], i = n.match(a);
    if (!i)
      return null;
    const o = i[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? pf(s, (d) => d.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      hf(s, (d) => d.test(o))
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
function hf(t, n) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && n(t[e]))
      return e;
}
function pf(t, n) {
  for (let e = 0; e < t.length; e++)
    if (n(t[e]))
      return e;
}
function vf(t) {
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
const yf = /^(\d+)(th|st|nd|rd)?/i, gf = /\d+/i, bf = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wf = {
  any: [/^b/i, /^(a|c)/i]
}, xf = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ef = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tf = {
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
}, kf = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Of = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Sf = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Af = {
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
}, _f = {
  ordinalNumber: vf({
    matchPattern: yf,
    parsePattern: gf,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: lt({
    matchPatterns: bf,
    defaultMatchWidth: "wide",
    parsePatterns: wf,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: xf,
    defaultMatchWidth: "wide",
    parsePatterns: Pf,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: lt({
    matchPatterns: Ef,
    defaultMatchWidth: "wide",
    parsePatterns: Tf,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: kf,
    defaultMatchWidth: "wide",
    parsePatterns: Of,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: Sf,
    defaultMatchWidth: "any",
    parsePatterns: Af,
    defaultParseWidth: "any"
  })
}, If = {
  code: "en-US",
  formatDistance: Ku,
  formatLong: rf,
  formatRelative: af,
  localize: mf,
  match: _f,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Rf(t, n) {
  const e = ae(t, n == null ? void 0 : n.in), r = +tt(e) - +Ju(e);
  return Math.round(r / si) + 1;
}
function fi(t, n) {
  var c, d, p, h;
  const e = ae(t, n == null ? void 0 : n.in), r = e.getFullYear(), a = bt(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((h = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, o = se((n == null ? void 0 : n.in) || t, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = Ne(o, n), u = se((n == null ? void 0 : n.in) || t, 0);
  u.setFullYear(r, 0, i), u.setHours(0, 0, 0, 0);
  const f = Ne(u, n);
  return +e >= +s ? r + 1 : +e >= +f ? r : r - 1;
}
function Cf(t, n) {
  var s, u, f, c;
  const e = bt(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((c = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, a = fi(t, n), i = se((n == null ? void 0 : n.in) || t, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), Ne(i, n);
}
function Ff(t, n) {
  const e = ae(t, n == null ? void 0 : n.in), r = +Ne(e, n) - +Cf(e, n);
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
}, Df = (t, n) => {
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
  P: Df
}, Mf = /^D+$/, jf = /^Y+$/, Nf = ["D", "DD", "YY", "YYYY"];
function Lf(t) {
  return Mf.test(t);
}
function $f(t) {
  return jf.test(t);
}
function Jn(t, n, e) {
  const r = Wf(t, n, e);
  if (console.warn(r), Nf.includes(t)) throw new RangeError(r);
}
function Wf(t, n, e) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Yf() {
  return Object.assign({}, bt());
}
function zf(t, n) {
  const e = ae(t, n == null ? void 0 : n.in).getDay();
  return e === 0 ? 7 : e;
}
function qf(t, n) {
  return +ae(t) > +ae(n);
}
function Hf(t, n) {
  return +ae(t) < +ae(n);
}
function Uf(t, n) {
  const e = Gf(n) ? new n(0) : se(n, 0);
  return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e.setHours(
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), e;
}
function Gf(t) {
  var n;
  return typeof t == "function" && ((n = t.prototype) == null ? void 0 : n.constructor) === t;
}
const Bf = 10;
class di {
  constructor() {
    T(this, "subPriority", 0);
  }
  validate(n, e) {
    return !0;
  }
}
class Vf extends di {
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
class Xf extends di {
  constructor(e, r) {
    super();
    T(this, "priority", Bf);
    T(this, "subPriority", -1);
    this.context = e || ((a) => se(r, a));
  }
  set(e, r) {
    return r.timestampIsSet ? e : se(e, Uf(e, this.context));
  }
}
class U {
  run(n, e, r, a) {
    const i = this.parse(n, e, r, a);
    return i ? {
      setter: new Vf(
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
class Jf extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 140);
    T(this, "incompatibleTokens", ["R", "u", "t", "T"]);
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
const te = {
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
}, Te = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function re(t, n) {
  return t && {
    value: n(t.value),
    rest: t.rest
  };
}
function K(t, n) {
  const e = n.match(t);
  return e ? {
    value: parseInt(e[0], 10),
    rest: n.slice(e[0].length)
  } : null;
}
function ke(t, n) {
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
    value: r * (a * Gu + i * Uu + o * Bu),
    rest: n.slice(e[0].length)
  };
}
function mi(t) {
  return K(te.anyDigitsSigned, t);
}
function Z(t, n) {
  switch (t) {
    case 1:
      return K(te.singleDigit, n);
    case 2:
      return K(te.twoDigits, n);
    case 3:
      return K(te.threeDigits, n);
    case 4:
      return K(te.fourDigits, n);
    default:
      return K(new RegExp("^\\d{1," + t + "}"), n);
  }
}
function Dt(t, n) {
  switch (t) {
    case 1:
      return K(te.singleDigitSigned, n);
    case 2:
      return K(te.twoDigitsSigned, n);
    case 3:
      return K(te.threeDigitsSigned, n);
    case 4:
      return K(te.fourDigitsSigned, n);
    default:
      return K(new RegExp("^-?\\d{1," + t + "}"), n);
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
class Qf extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 130);
    T(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, r, a) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return re(Z(4, e), i);
      case "yo":
        return re(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          i
        );
      default:
        return re(Z(r.length, e), i);
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
class Kf extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 130);
    T(this, "incompatibleTokens", [
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
        return re(Z(4, e), i);
      case "Yo":
        return re(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          i
        );
      default:
        return re(Z(r.length, e), i);
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
      ), e.setHours(0, 0, 0, 0), Ne(e, i);
    }
    const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(s, 0, i.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ne(e, i);
  }
}
class Zf extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 130);
    T(this, "incompatibleTokens", [
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
    const i = se(e, 0);
    return i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), tt(i);
  }
}
class ec extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 130);
    T(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, r) {
    return Dt(r === "u" ? 4 : r.length, e);
  }
  set(e, r, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class tc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 120);
    T(this, "incompatibleTokens", [
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
        return Z(r.length, e);
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
class rc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 120);
    T(this, "incompatibleTokens", [
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
        return Z(r.length, e);
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
class nc extends U {
  constructor() {
    super(...arguments);
    T(this, "incompatibleTokens", [
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
    T(this, "priority", 110);
  }
  parse(e, r, a) {
    const i = (o) => o - 1;
    switch (r) {
      // 1, 2, ..., 12
      case "M":
        return re(
          K(te.month, e),
          i
        );
      // 01, 02, ..., 12
      case "MM":
        return re(Z(2, e), i);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return re(
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
class ac extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 110);
    T(this, "incompatibleTokens", [
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
        return re(
          K(te.month, e),
          i
        );
      // 01, 02, ..., 12
      case "LL":
        return re(Z(2, e), i);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return re(
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
function ic(t, n, e) {
  const r = ae(t, e == null ? void 0 : e.in), a = Ff(r, e) - n;
  return r.setDate(r.getDate() - a * 7), ae(r, e == null ? void 0 : e.in);
}
class oc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 100);
    T(this, "incompatibleTokens", [
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
        return K(te.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 53;
  }
  set(e, r, a, i) {
    return Ne(ic(e, a, i), i);
  }
}
function sc(t, n, e) {
  const r = ae(t, e == null ? void 0 : e.in), a = Rf(r, e) - n;
  return r.setDate(r.getDate() - a * 7), r;
}
class lc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 100);
    T(this, "incompatibleTokens", [
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
        return K(te.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 53;
  }
  set(e, r, a) {
    return tt(sc(e, a));
  }
}
const uc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fc = [
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
class cc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 90);
    T(this, "subPriority", 1);
    T(this, "incompatibleTokens", [
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
        return K(te.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    const a = e.getFullYear(), i = pi(a), o = e.getMonth();
    return i ? r >= 1 && r <= fc[o] : r >= 1 && r <= uc[o];
  }
  set(e, r, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class dc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 90);
    T(this, "subpriority", 1);
    T(this, "incompatibleTokens", [
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
        return K(te.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return Z(r.length, e);
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
  var d, p, h, x;
  const r = bt(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((p = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((x = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : x.weekStartsOn) ?? 0, i = ae(t, e == null ? void 0 : e.in), o = i.getDay(), u = (n % 7 + 7) % 7, f = 7 - a, c = n < 0 || n > 6 ? n - (o + f) % 7 : (u + f) % 7 - (o + f) % 7;
  return li(i, c, e);
}
class mc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 90);
    T(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
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
class hc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 90);
    T(this, "incompatibleTokens", [
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
        return re(Z(r.length, e), o);
      // 3rd
      case "eo":
        return re(
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
class pc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 90);
    T(this, "incompatibleTokens", [
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
        return re(Z(r.length, e), o);
      // 3rd
      case "co":
        return re(
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
function vc(t, n, e) {
  const r = ae(t, e == null ? void 0 : e.in), a = zf(r, e), i = n - a;
  return li(r, i, e);
}
class yc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 90);
    T(this, "incompatibleTokens", [
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
        return Z(r.length, e);
      // 2nd
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      // Tue
      case "iii":
        return re(
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
        return re(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tu
      case "iiiiii":
        return re(
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
        return re(
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
    return e = vc(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class gc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 80);
    T(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
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
class bc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 80);
    T(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
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
class wc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 80);
    T(this, "incompatibleTokens", ["a", "b", "t", "T"]);
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
class xc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 70);
    T(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "h":
        return K(te.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return Z(r.length, e);
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
class Pc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 70);
    T(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "H":
        return K(te.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 23;
  }
  set(e, r, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class Ec extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 70);
    T(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "K":
        return K(te.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Tc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 70);
    T(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "k":
        return K(te.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return Z(r.length, e);
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
class kc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 60);
    T(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "m":
        return K(te.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 59;
  }
  set(e, r, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class Oc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 50);
    T(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r, a) {
    switch (r) {
      case "s":
        return K(te.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return Z(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 59;
  }
  set(e, r, a) {
    return e.setSeconds(a, 0), e;
  }
}
class Sc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 30);
    T(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r) {
    const a = (i) => Math.trunc(i * Math.pow(10, -r.length + 3));
    return re(Z(r.length, e), a);
  }
  set(e, r, a) {
    return e.setMilliseconds(a), e;
  }
}
class Ac extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 10);
    T(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, r) {
    switch (r) {
      case "X":
        return ke(
          Te.basicOptionalMinutes,
          e
        );
      case "XX":
        return ke(Te.basic, e);
      case "XXXX":
        return ke(
          Te.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return ke(
          Te.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return ke(Te.extended, e);
    }
  }
  set(e, r, a) {
    return r.timestampIsSet ? e : se(
      e,
      e.getTime() - ui(e) - a
    );
  }
}
class _c extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 10);
    T(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, r) {
    switch (r) {
      case "x":
        return ke(
          Te.basicOptionalMinutes,
          e
        );
      case "xx":
        return ke(Te.basic, e);
      case "xxxx":
        return ke(
          Te.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return ke(
          Te.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return ke(Te.extended, e);
    }
  }
  set(e, r, a) {
    return r.timestampIsSet ? e : se(
      e,
      e.getTime() - ui(e) - a
    );
  }
}
class Ic extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 40);
    T(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return mi(e);
  }
  set(e, r, a) {
    return [se(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Rc extends U {
  constructor() {
    super(...arguments);
    T(this, "priority", 20);
    T(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return mi(e);
  }
  set(e, r, a) {
    return [se(e, a), { timestampIsSet: !0 }];
  }
}
const Cc = {
  G: new Jf(),
  y: new Qf(),
  Y: new Kf(),
  R: new Zf(),
  u: new ec(),
  Q: new tc(),
  q: new rc(),
  M: new nc(),
  L: new ac(),
  w: new oc(),
  I: new lc(),
  d: new cc(),
  D: new dc(),
  E: new mc(),
  e: new hc(),
  c: new pc(),
  i: new yc(),
  a: new gc(),
  b: new bc(),
  B: new wc(),
  h: new xc(),
  H: new Pc(),
  K: new Ec(),
  k: new Tc(),
  m: new kc(),
  s: new Oc(),
  S: new Sc(),
  X: new Ac(),
  x: new _c(),
  t: new Ic(),
  T: new Rc()
}, Fc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Dc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Mc = /^'([^]*?)'?$/, jc = /''/g, Nc = /\S/, Lc = /[a-zA-Z]/;
function Qn(t, n, e, r) {
  var O, S, A, I;
  const a = () => se(e, NaN), i = Yf(), o = i.locale ?? If, s = i.firstWeekContainsDate ?? ((S = (O = i.locale) == null ? void 0 : O.options) == null ? void 0 : S.firstWeekContainsDate) ?? 1, u = i.weekStartsOn ?? ((I = (A = i.locale) == null ? void 0 : A.options) == null ? void 0 : I.weekStartsOn) ?? 0;
  if (!n)
    return t ? a() : ae(e, r == null ? void 0 : r.in);
  const f = {
    firstWeekContainsDate: s,
    weekStartsOn: u,
    locale: o
  }, c = [new Xf(r == null ? void 0 : r.in, e)], d = n.match(Dc).map((v) => {
    const m = v[0];
    if (m in Xn) {
      const G = Xn[m];
      return G(v, o.formatLong);
    }
    return v;
  }).join("").match(Fc), p = [];
  for (let v of d) {
    $f(v) && Jn(v, n, t), Lf(v) && Jn(v, n, t);
    const m = v[0], G = Cc[m];
    if (G) {
      const { incompatibleTokens: ie } = G;
      if (Array.isArray(ie)) {
        const ce = p.find(
          (Fe) => ie.includes(Fe.token) || Fe.token === m
        );
        if (ce)
          throw new RangeError(
            `The format string mustn't contain \`${ce.fullToken}\` and \`${v}\` at the same time`
          );
      } else if (G.incompatibleTokens === "*" && p.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${v}\` and any other token at the same time`
        );
      p.push({ token: m, fullToken: v });
      const ue = G.run(
        t,
        v,
        o.match,
        f
      );
      if (!ue)
        return a();
      c.push(ue.setter), t = ue.rest;
    } else {
      if (m.match(Lc))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + m + "`"
        );
      if (v === "''" ? v = "'" : m === "'" && (v = $c(v)), t.indexOf(v) === 0)
        t = t.slice(v.length);
      else
        return a();
    }
  }
  if (t.length > 0 && Nc.test(t))
    return a();
  const h = c.map((v) => v.priority).sort((v, m) => m - v).filter((v, m, G) => G.indexOf(v) === m).map(
    (v) => c.filter((m) => m.priority === v).sort((m, G) => G.subPriority - m.subPriority)
  ).map((v) => v[0]);
  let x = ae(e, r == null ? void 0 : r.in);
  if (isNaN(+x)) return a();
  const w = {};
  for (const v of h) {
    if (!v.validate(x, f))
      return a();
    const m = v.set(x, w, f);
    Array.isArray(m) ? (x = m[0], Object.assign(w, m[1])) : x = m;
  }
  return x;
}
function $c(t) {
  return t.match(Mc)[1].replace(jc, "'");
}
const Er = () => {
  const t = (s, u, f) => {
    let c = n(u, s);
    const d = e(f);
    let p = null, h = null, x = null;
    const w = !1;
    d.forEach((S, A) => {
      S.sortOrder !== "none" && (p = S.dataField, h = A, x = S.sortOrder);
    });
    let O = !1;
    for (const S of c)
      S.children && S.children.length > 0 && (O = !0);
    return p !== null && (c = r(
      c,
      h,
      p,
      x,
      d[h].sortUsingRenderer,
      d[h].renderer,
      d[h].sortType,
      d[h].sortDateFormat
    ), c = o(c)), {
      enhancedTableData: c,
      enhancedColumns: d,
      showResetSortingButton: w,
      childrenPresent: O
    };
  }, n = (s, u) => {
    let f = 1;
    return (function c(d, p = 0, h = 1) {
      if (d)
        return d.map((x) => {
          const w = f++;
          return Object.assign({}, x, {
            rowID: w,
            rowOrder: w,
            rowLevel: h,
            parentRowID: p,
            visible: h <= u,
            expanded: h < u,
            filtered: !1,
            children: c(x.children, w, h + 1)
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
  }), r = (s, u, f, c, d, p, h, x) => (s.forEach((w) => {
    w.children && w.children.length > 0 && (w.children = r(w.children, u, f, c, d, p, h, x));
  }), c === "asc" ? s.sort((w, O) => a(w, O, f, d, p, h, x)) : s.sort((w, O) => a(O, w, f, d, p, h, x))), a = (s, u, f, c, d, p, h) => {
    let x = s.data[f], w = u.data[f];
    return c && (x = d(s, f), w = d(u, f)), p === "date" ? i(x, w, h) : x < w ? -1 : x > w ? 1 : 0;
  }, i = (s, u, f) => (s = Qn(s, f, /* @__PURE__ */ new Date()), u = Qn(u, f, /* @__PURE__ */ new Date()), Hf(s, u) ? -1 : qf(s, u) ? 1 : 0), o = (s) => {
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
}, vi = "page-item", ut = 5, sr = (t, n, e) => Math.min(Math.max(t, n), e), Wc = (t, n, e) => {
  const r = Math.max(1, Math.ceil(n / e)), a = sr(t, 1, r), i = 1, o = r, s = sr(a - 1, 1, r), u = sr(a + 1, 1, r);
  let f = a - Math.floor(ut / 2), c = f + ut - 1;
  f < 1 && (f = 1, c = Math.min(ut, r)), c > r && (c = r, f = Math.max(1, c - ut + 1));
  const d = Array.from({ length: ut }, (p, h) => {
    const x = f + h;
    return {
      value: x,
      classes: Yc(x, a, r)
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
}, Yc = (t, n, e) => {
  const r = [vi];
  return (t < 1 || t > e) && r.push("disabled", "hidden"), t === n && r.push("active"), r.join(" ");
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
  } = Wc(t, n, e), x = (A) => () => r(A), w = (A, I) => A.split(" ").includes(I), O = w(f.classes, "disabled"), S = w(h.classes, "disabled");
  return /* @__PURE__ */ q.jsx("nav", { "aria-label": "Table pagination", children: /* @__PURE__ */ q.jsxs("ul", { className: "pagination", children: [
    /* @__PURE__ */ q.jsx("li", { className: f.classes, children: /* @__PURE__ */ q.jsx(
      "button",
      {
        type: "button",
        className: "page-link",
        onClick: x(f.value),
        disabled: O,
        children: "First"
      }
    ) }),
    /* @__PURE__ */ q.jsx("li", { className: c.classes, children: /* @__PURE__ */ q.jsx(
      "button",
      {
        type: "button",
        className: "page-link",
        onClick: x(c.value),
        disabled: O,
        children: "Previous"
      }
    ) }),
    d.map(({ value: A, classes: I }) => {
      const v = w(I, "active");
      return /* @__PURE__ */ q.jsx(
        "li",
        {
          className: I,
          "aria-current": v ? "page" : void 0,
          children: /* @__PURE__ */ q.jsx("button", { type: "button", className: "page-link", onClick: x(A), children: A })
        },
        A
      );
    }),
    /* @__PURE__ */ q.jsx("li", { className: p.classes, children: /* @__PURE__ */ q.jsx("button", { type: "button", className: "page-link", onClick: x(p.value), disabled: S, children: "Next" }) }),
    /* @__PURE__ */ q.jsx("li", { className: h.classes, children: /* @__PURE__ */ q.jsx("button", { type: "button", className: "page-link", onClick: x(h.value), disabled: S, children: "Last" }) }),
    /* @__PURE__ */ q.jsx("li", { className: "page-item disabled", children: /* @__PURE__ */ q.jsxs("span", { className: "page-link", children: [
      "Showing ",
      a,
      " to ",
      i,
      " of ",
      o,
      " records",
      " ",
      s && /* @__PURE__ */ q.jsxs("span", { children: [
        "(filtered from ",
        u,
        ")"
      ] })
    ] }) })
  ] }) });
}
yi.propTypes = {
  currentPage: be.number.isRequired,
  tableLength: be.number.isRequired,
  rowsPerPage: be.number.isRequired,
  rowMover: be.func.isRequired,
  displayStartRow: be.number.isRequired,
  displayEndRow: be.number.isRequired,
  displayTotal: be.number.isRequired,
  displayFiltered: be.bool,
  displayOverallTotal: be.number
};
const we = {
  INIT: "INIT",
  TOGGLE_ROW: "TOGGLE_ROW",
  TOGGLE_ALL: "TOGGLE_ALL",
  SORT: "SORT",
  FILTER: "FILTER",
  SET_PAGE: "SET_PAGE",
  RESET_SORT: "RESET_SORT"
};
function zc(t, n) {
  switch (n.type) {
    case we.INIT:
      return n.payload;
    case we.TOGGLE_ROW:
      return {
        ...t,
        tree: gi(t.tree, n.rowID)
      };
    case we.TOGGLE_ALL:
      return {
        ...t,
        expandedAll: !t.expandedAll,
        tree: bi(t.tree, !t.expandedAll)
      };
    case we.SORT: {
      const e = n.columnIndex, r = t.columns[e], a = r.sortOrder === "asc" ? "desc" : "asc", i = Er().sortBy(
        t.tree,
        e,
        r.dataField,
        a,
        r.sortUsingRenderer,
        r.renderer,
        r.sortType,
        r.sortDateFormat
      ), o = Er().generateRowOrderedTree(i), s = t.columns.map((u, f) => ({
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
    case we.FILTER:
      return {
        ...t,
        filterValue: n.value,
        currentPage: 1
      };
    case we.SET_PAGE:
      return {
        ...t,
        currentPage: n.page
      };
    case we.RESET_SORT:
      return n.payload;
    default:
      return t;
  }
}
function gi(t, n) {
  return t.map((e) => e.rowID === n ? {
    ...e,
    expanded: !e.expanded
  } : {
    ...e,
    children: gi(
      e.children || [],
      n
    )
  });
}
function bi(t, n) {
  return t.map((e) => ({
    ...e,
    expanded: n,
    children: bi(
      e.children || [],
      n
    )
  }));
}
function wi(t, n, e, r = !0) {
  const a = [];
  for (const i of t) {
    if (!r) continue;
    const o = qc(i, n, e);
    (!n || o) && a.push(i), i.expanded && a.push(
      ...wi(
        i.children || [],
        n,
        e,
        r
      )
    );
  }
  return a;
}
function qc(t, n, e) {
  if (!n) return !0;
  const r = n.toLowerCase();
  return e.some((a) => {
    var o;
    if (!a.filterable) return !1;
    const i = (o = t.data) == null ? void 0 : o[a.dataField];
    return String(i).toLowerCase().includes(r);
  });
}
function Hc({ tableData: t, columns: n, control: e = {} }) {
  const {
    visibleRows: r = 10,
    allowSorting: a = !1,
    allowFiltering: i = !1,
    showPagination: o = !1,
    initialRowsPerPage: s = 10,
    showExpandCollapseButton: u = !1,
    filterInputPlaceholderText: f = "Filter..."
  } = e, c = Gt(() => {
    const v = Er().generateInitialState(r, t, n);
    return {
      tree: v.enhancedTableData,
      columns: v.enhancedColumns,
      expandedAll: !1,
      filterValue: "",
      currentPage: 1,
      showResetSortingButton: v.showResetSortingButton
    };
  }, [t, n, r]), [d, p] = Gi(zc, c), h = Gt(() => wi(d.tree, d.filterValue, d.columns), [d.tree, d.filterValue, d.columns]), x = Gt(() => {
    if (!o) return h;
    const v = (d.currentPage - 1) * s, m = v + s;
    return h.slice(v, m);
  }, [h, d.currentPage, s, o]), w = at(
    (v) => p({
      type: we.TOGGLE_ROW,
      rowID: v
    }),
    []
  ), O = at(
    () => p({
      type: we.TOGGLE_ALL
    }),
    []
  ), S = at(
    (v) => p({
      type: we.SORT,
      columnIndex: v
    }),
    []
  ), A = at(
    (v) => p({
      type: we.FILTER,
      value: v.target.value
    }),
    []
  ), I = at(
    (v) => p({
      type: we.SET_PAGE,
      page: v
    }),
    []
  );
  return /* @__PURE__ */ q.jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "d-flex justify-content-between mb-2", children: [
      u && /* @__PURE__ */ q.jsx(
        "button",
        {
          type: "button",
          className: "btn btn-outline-secondary",
          onClick: O,
          children: d.expandedAll ? "Collapse All" : "Expand All"
        }
      ),
      i && /* @__PURE__ */ q.jsxs("div", { className: "input-group w-auto", children: [
        /* @__PURE__ */ q.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ q.jsx(It, { icon: Yu }) }),
        /* @__PURE__ */ q.jsx(
          "input",
          {
            className: "form-control",
            placeholder: f,
            value: d.filterValue,
            onChange: A
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ q.jsxs("table", { className: "table table-bordered", children: [
      /* @__PURE__ */ q.jsx("thead", { children: /* @__PURE__ */ q.jsx("tr", { children: d.columns.map((v, m) => {
        const G = v.sortOrder === "asc" ? zu : v.sortOrder === "desc" ? Gn : Hu;
        return /* @__PURE__ */ q.jsxs(
          "th",
          {
            onClick: a && v.sortable ? () => S(m) : void 0,
            style: {
              cursor: v.sortable ? "pointer" : "default"
            },
            children: [
              v.heading,
              a && /* @__PURE__ */ q.jsx(
                It,
                {
                  icon: G,
                  className: "ms-1"
                }
              )
            ]
          },
          v.dataField
        );
      }) }) }),
      /* @__PURE__ */ q.jsx("tbody", { children: x.map((v) => {
        var G;
        const m = ((G = v.children) == null ? void 0 : G.length) > 0;
        return /* @__PURE__ */ q.jsx("tr", { children: d.columns.map((ie, ue) => {
          const ce = ie.renderer ? ie.renderer(v, ie.dataField) : v.data[ie.dataField];
          return ue === 0 ? /* @__PURE__ */ q.jsx("td", { children: /* @__PURE__ */ q.jsxs(
            "span",
            {
              style: {
                marginLeft: v.rowLevel * 16
              },
              children: [
                m && /* @__PURE__ */ q.jsx(
                  It,
                  {
                    icon: v.expanded ? Gn : qu,
                    onClick: () => w(v.rowID),
                    style: { cursor: "pointer", marginRight: 6 }
                  }
                ),
                ce
              ]
            }
          ) }, ie.dataField) : /* @__PURE__ */ q.jsx("td", { children: ce }, ie.dataField);
        }) }, v.rowID);
      }) })
    ] }),
    o && /* @__PURE__ */ q.jsx(
      yi,
      {
        currentPage: d.currentPage,
        tableLength: h.length,
        rowsPerPage: s,
        rowMover: I,
        displayEndRow: 0,
        displayStartRow: 0,
        displayTotal: 0
      }
    )
  ] });
}
Hc.propTypes = {
  tableData: be.array.isRequired,
  columns: be.array.isRequired,
  control: be.object
};
export {
  Hc as BootstrapTreeTable
};
