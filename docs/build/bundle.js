var app = (function () {
  'use strict';
  function e() {}
  function t(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function n(e) {
    return e();
  }
  function s() {
    return Object.create(null);
  }
  function a(e) {
    e.forEach(n);
  }
  function l(e) {
    return 'function' == typeof e;
  }
  function r(e, t) {
    return e != e ? t == t : e !== t || (e && 'object' == typeof e) || 'function' == typeof e;
  }
  function i(t, ...n) {
    if (null == t) return e;
    const s = t.subscribe(...n);
    return s.unsubscribe ? () => s.unsubscribe() : s;
  }
  function o(e, t, n) {
    e.$$.on_destroy.push(i(t, n));
  }
  function c(e, t, n, s) {
    if (e) {
      const a = d(e, t, n, s);
      return e[0](a);
    }
  }
  function d(e, n, s, a) {
    return e[1] && a ? t(s.ctx.slice(), e[1](a(n))) : s.ctx;
  }
  function g(e, t, n, s, a, l, r) {
    const i = (function (e, t, n, s) {
      if (e[2] && s) {
        const a = e[2](s(n));
        if (void 0 === t.dirty) return a;
        if ('object' == typeof a) {
          const e = [],
            n = Math.max(t.dirty.length, a.length);
          for (let s = 0; s < n; s += 1) e[s] = t.dirty[s] | a[s];
          return e;
        }
        return t.dirty | a;
      }
      return t.dirty;
    })(t, s, a, l);
    if (i) {
      const a = d(t, n, s, r);
      e.p(a, i);
    }
  }
  function u(e) {
    const t = {};
    for (const n in e) '$' !== n[0] && (t[n] = e[n]);
    return t;
  }
  function f(t) {
    return t && l(t.destroy) ? t.destroy : e;
  }
  let m = !1;
  const p = new Set();
  function $(e, t) {
    m && p.delete(t), t.parentNode !== e && e.appendChild(t);
  }
  function h(e, t, n) {
    m && p.delete(t), (t.parentNode !== e || (n && t.nextSibling !== n)) && e.insertBefore(t, n || null);
  }
  function x(e) {
    m ? p.add(e) : e.parentNode && e.parentNode.removeChild(e);
  }
  function v(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function w(e) {
    return document.createElement(e);
  }
  function b(e) {
    return document.createElementNS('http://www.w3.org/2000/svg', e);
  }
  function y(e) {
    return document.createTextNode(e);
  }
  function k() {
    return y(' ');
  }
  function C() {
    return y('');
  }
  function z(e, t, n, s) {
    return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
  }
  function B(e, t, n) {
    null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function L(e, t) {
    const n = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const s in t)
      null == t[s]
        ? e.removeAttribute(s)
        : 'style' === s
        ? (e.style.cssText = t[s])
        : '__value' === s
        ? (e.value = e[s] = t[s])
        : n[s] && n[s].set
        ? (e[s] = t[s])
        : B(e, s, t[s]);
  }
  function N(e, t) {
    for (const n in t) B(e, n, t[n]);
  }
  function T(e) {
    return Array.from(e.childNodes);
  }
  function M(e, t, n, s) {
    for (; e.length > 0; ) {
      const s = e.shift();
      if (s.nodeName === t) {
        let e = 0;
        const t = [];
        for (; e < s.attributes.length; ) {
          const a = s.attributes[e++];
          n[a.name] || t.push(a.name);
        }
        for (let e = 0; e < t.length; e++) s.removeAttribute(t[e]);
        return s;
      }
      x(s);
    }
    return s ? b(t) : w(t);
  }
  function F(e, t) {
    (t = '' + t), e.wholeText !== t && (e.data = t);
  }
  function E(e, t, n, s) {
    e.style.setProperty(t, n, s ? 'important' : '');
  }
  class S {
    constructor(e = null) {
      (this.a = e), (this.e = this.n = null);
    }
    m(e, t, n = null) {
      this.e || ((this.e = w(t.nodeName)), (this.t = t), this.h(e)), this.i(n);
    }
    h(e) {
      (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) h(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(x);
    }
  }
  let H;
  function A(e) {
    H = e;
  }
  function _() {
    if (!H) throw new Error('Function called outside component initialization');
    return H;
  }
  function P(e) {
    _().$$.on_mount.push(e);
  }
  function j(e) {
    _().$$.after_update.push(e);
  }
  function V(e) {
    _().$$.on_destroy.push(e);
  }
  function O() {
    const e = _();
    return (t, n) => {
      const s = e.$$.callbacks[t];
      if (s) {
        const a = (function (e, t) {
          const n = document.createEvent('CustomEvent');
          return n.initCustomEvent(e, !1, !1, t), n;
        })(t, n);
        s.slice().forEach((t) => {
          t.call(e, a);
        });
      }
    };
  }
  function D(e, t) {
    _().$$.context.set(e, t);
  }
  function q(e) {
    return _().$$.context.get(e);
  }
  function I(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach((e) => e(t));
  }
  const R = [],
    G = [],
    U = [],
    Y = [],
    W = Promise.resolve();
  let Z = !1;
  function J() {
    Z || ((Z = !0), W.then(te));
  }
  function X(e) {
    U.push(e);
  }
  function K(e) {
    Y.push(e);
  }
  let Q = !1;
  const ee = new Set();
  function te() {
    if (!Q) {
      Q = !0;
      do {
        for (let e = 0; e < R.length; e += 1) {
          const t = R[e];
          A(t), ne(t.$$);
        }
        for (A(null), R.length = 0; G.length; ) G.pop()();
        for (let e = 0; e < U.length; e += 1) {
          const t = U[e];
          ee.has(t) || (ee.add(t), t());
        }
        U.length = 0;
      } while (R.length);
      for (; Y.length; ) Y.pop()();
      (Z = !1), (Q = !1), ee.clear();
    }
  }
  function ne(e) {
    if (null !== e.fragment) {
      e.update(), a(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(X);
    }
  }
  const se = new Set();
  let ae;
  function le() {
    ae = { r: 0, c: [], p: ae };
  }
  function re() {
    ae.r || a(ae.c), (ae = ae.p);
  }
  function ie(e, t) {
    e && e.i && (se.delete(e), e.i(t));
  }
  function oe(e, t, n, s) {
    if (e && e.o) {
      if (se.has(e)) return;
      se.add(e),
        ae.c.push(() => {
          se.delete(e), s && (n && e.d(1), s());
        }),
        e.o(t);
    }
  }
  function ce(e, t) {
    const n = {},
      s = {},
      a = { $$scope: 1 };
    let l = e.length;
    for (; l--; ) {
      const r = e[l],
        i = t[l];
      if (i) {
        for (const e in r) e in i || (s[e] = 1);
        for (const e in i) a[e] || ((n[e] = i[e]), (a[e] = 1));
        e[l] = i;
      } else for (const e in r) a[e] = 1;
    }
    for (const e in s) e in n || (n[e] = void 0);
    return n;
  }
  function de(e) {
    return 'object' == typeof e && null !== e ? e : {};
  }
  function ge(e, t, n) {
    const s = e.$$.props[t];
    void 0 !== s && ((e.$$.bound[s] = n), n(e.$$.ctx[s]));
  }
  function ue(e) {
    e && e.c();
  }
  function fe(e, t, s, r) {
    const { fragment: i, on_mount: o, on_destroy: c, after_update: d } = e.$$;
    i && i.m(t, s),
      r ||
        X(() => {
          const t = o.map(n).filter(l);
          c ? c.push(...t) : a(t), (e.$$.on_mount = []);
        }),
      d.forEach(X);
  }
  function me(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (a(n.on_destroy), n.fragment && n.fragment.d(t), (n.on_destroy = n.fragment = null), (n.ctx = []));
  }
  function pe(t, n, l, r, i, o, c = [-1]) {
    const d = H;
    A(t);
    const g = (t.$$ = {
      fragment: null,
      ctx: null,
      props: o,
      update: e,
      not_equal: i,
      bound: s(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(d ? d.$$.context : n.context || []),
      callbacks: s(),
      dirty: c,
      skip_bound: !1,
    });
    let u = !1;
    if (
      ((g.ctx = l
        ? l(t, n.props || {}, (e, n, ...s) => {
            const a = s.length ? s[0] : n;
            return (
              g.ctx &&
                i(g.ctx[e], (g.ctx[e] = a)) &&
                (!g.skip_bound && g.bound[e] && g.bound[e](a),
                u &&
                  (function (e, t) {
                    -1 === e.$$.dirty[0] && (R.push(e), J(), e.$$.dirty.fill(0)),
                      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                  })(t, e)),
              n
            );
          })
        : []),
      g.update(),
      (u = !0),
      a(g.before_update),
      (g.fragment = !!r && r(g.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        m = !0;
        const e = T(n.target);
        g.fragment && g.fragment.l(e), e.forEach(x);
      } else g.fragment && g.fragment.c();
      n.intro && ie(t.$$.fragment),
        fe(t, n.target, n.anchor, n.customElement),
        (function () {
          m = !1;
          for (const e of p) e.parentNode.removeChild(e);
          p.clear();
        })(),
        te();
    }
    A(d);
  }
  class $e {
    $destroy() {
      me(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  const he = [];
  function xe(e, t) {
    return { subscribe: ve(e, t).subscribe };
  }
  function ve(t, n = e) {
    let s;
    const a = [];
    function l(e) {
      if (r(t, e) && ((t = e), s)) {
        const e = !he.length;
        for (let e = 0; e < a.length; e += 1) {
          const n = a[e];
          n[1](), he.push(n, t);
        }
        if (e) {
          for (let e = 0; e < he.length; e += 2) he[e][0](he[e + 1]);
          he.length = 0;
        }
      }
    }
    return {
      set: l,
      update: function (e) {
        l(e(t));
      },
      subscribe: function (r, i = e) {
        const o = [r, i];
        return (
          a.push(o),
          1 === a.length && (s = n(l) || e),
          r(t),
          () => {
            const e = a.indexOf(o);
            -1 !== e && a.splice(e, 1), 0 === a.length && (s(), (s = null));
          }
        );
      },
    };
  }
  function we(t, n, s) {
    const r = !Array.isArray(t),
      o = r ? [t] : t,
      c = n.length < 2;
    return xe(s, (t) => {
      let s = !1;
      const d = [];
      let g = 0,
        u = e;
      const f = () => {
          if (g) return;
          u();
          const s = n(r ? d[0] : d, t);
          c ? t(s) : (u = l(s) ? s : e);
        },
        m = o.map((e, t) =>
          i(
            e,
            (e) => {
              (d[t] = e), (g &= ~(1 << t)), s && f();
            },
            () => {
              g |= 1 << t;
            }
          )
        );
      return (
        (s = !0),
        f(),
        function () {
          a(m), u();
        }
      );
    });
  }
  function be(e) {
    let n, s, a;
    const l = [e[2]];
    var r = e[0];
    function i(e) {
      let n = {};
      for (let e = 0; e < l.length; e += 1) n = t(n, l[e]);
      return { props: n };
    }
    return (
      r && ((n = new r(i())), n.$on('routeEvent', e[7])),
      {
        c() {
          n && ue(n.$$.fragment), (s = C());
        },
        m(e, t) {
          n && fe(n, e, t), h(e, s, t), (a = !0);
        },
        p(e, t) {
          const a = 4 & t ? ce(l, [de(e[2])]) : {};
          if (r !== (r = e[0])) {
            if (n) {
              le();
              const e = n;
              oe(e.$$.fragment, 1, 0, () => {
                me(e, 1);
              }),
                re();
            }
            r
              ? ((n = new r(i())),
                n.$on('routeEvent', e[7]),
                ue(n.$$.fragment),
                ie(n.$$.fragment, 1),
                fe(n, s.parentNode, s))
              : (n = null);
          } else r && n.$set(a);
        },
        i(e) {
          a || (n && ie(n.$$.fragment, e), (a = !0));
        },
        o(e) {
          n && oe(n.$$.fragment, e), (a = !1);
        },
        d(e) {
          e && x(s), n && me(n, e);
        },
      }
    );
  }
  function ye(e) {
    let n, s, a;
    const l = [{ params: e[1] }, e[2]];
    var r = e[0];
    function i(e) {
      let n = {};
      for (let e = 0; e < l.length; e += 1) n = t(n, l[e]);
      return { props: n };
    }
    return (
      r && ((n = new r(i())), n.$on('routeEvent', e[6])),
      {
        c() {
          n && ue(n.$$.fragment), (s = C());
        },
        m(e, t) {
          n && fe(n, e, t), h(e, s, t), (a = !0);
        },
        p(e, t) {
          const a = 6 & t ? ce(l, [2 & t && { params: e[1] }, 4 & t && de(e[2])]) : {};
          if (r !== (r = e[0])) {
            if (n) {
              le();
              const e = n;
              oe(e.$$.fragment, 1, 0, () => {
                me(e, 1);
              }),
                re();
            }
            r
              ? ((n = new r(i())),
                n.$on('routeEvent', e[6]),
                ue(n.$$.fragment),
                ie(n.$$.fragment, 1),
                fe(n, s.parentNode, s))
              : (n = null);
          } else r && n.$set(a);
        },
        i(e) {
          a || (n && ie(n.$$.fragment, e), (a = !0));
        },
        o(e) {
          n && oe(n.$$.fragment, e), (a = !1);
        },
        d(e) {
          e && x(s), n && me(n, e);
        },
      }
    );
  }
  function ke(e) {
    let t, n, s, a;
    const l = [ye, be],
      r = [];
    function i(e, t) {
      return e[1] ? 0 : 1;
    }
    return (
      (t = i(e)),
      (n = r[t] = l[t](e)),
      {
        c() {
          n.c(), (s = C());
        },
        m(e, n) {
          r[t].m(e, n), h(e, s, n), (a = !0);
        },
        p(e, [a]) {
          let o = t;
          (t = i(e)),
            t === o
              ? r[t].p(e, a)
              : (le(),
                oe(r[o], 1, 1, () => {
                  r[o] = null;
                }),
                re(),
                (n = r[t]),
                n ? n.p(e, a) : ((n = r[t] = l[t](e)), n.c()),
                ie(n, 1),
                n.m(s.parentNode, s));
        },
        i(e) {
          a || (ie(n), (a = !0));
        },
        o(e) {
          oe(n), (a = !1);
        },
        d(e) {
          r[t].d(e), e && x(s);
        },
      }
    );
  }
  function Ce() {
    const e = window.location.href.indexOf('#/');
    let t = e > -1 ? window.location.href.substr(e + 1) : '/';
    const n = t.indexOf('?');
    let s = '';
    return n > -1 && ((s = t.substr(n + 1)), (t = t.substr(0, n))), { location: t, querystring: s };
  }
  const ze = xe(null, function (e) {
    e(Ce());
    const t = () => {
      e(Ce());
    };
    return (
      window.addEventListener('hashchange', t, !1),
      function () {
        window.removeEventListener('hashchange', t, !1);
      }
    );
  });
  function Be(e, t) {
    if (!e || !e.tagName || 'a' != e.tagName.toLowerCase()) throw Error('Action "link" can only be used with <a> tags');
    return (
      Le(e, t || e.getAttribute('href')),
      {
        update(t) {
          Le(e, t);
        },
      }
    );
  }
  function Le(e, t) {
    if (!t || t.length < 1 || '/' != t.charAt(0)) throw Error('Invalid value for "href" attribute: ' + t);
    e.setAttribute('href', '#' + t), e.addEventListener('click', Ne);
  }
  function Ne(e) {
    e.preventDefault();
    const t = e.currentTarget.getAttribute('href');
    history.replaceState({ scrollX: window.scrollX, scrollY: window.scrollY }, void 0, void 0),
      (window.location.hash = t);
  }
  function Te(e, t, n) {
    let { routes: s = {} } = t,
      { prefix: a = '' } = t,
      { restoreScrollState: l = !1 } = t;
    class r {
      constructor(e, t) {
        if (!t || ('function' != typeof t && ('object' != typeof t || !0 !== t._sveltesparouter)))
          throw Error('Invalid component object');
        if (
          !e ||
          ('string' == typeof e && (e.length < 1 || ('/' != e.charAt(0) && '*' != e.charAt(0)))) ||
          ('object' == typeof e && !(e instanceof RegExp))
        )
          throw Error('Invalid value for "path" argument - strings must start with / or *');
        const { pattern: n, keys: s } = (function (e, t) {
          if (e instanceof RegExp) return { keys: !1, pattern: e };
          var n,
            s,
            a,
            l,
            r = [],
            i = '',
            o = e.split('/');
          for (o[0] || o.shift(); (a = o.shift()); )
            '*' === (n = a[0])
              ? (r.push('wild'), (i += '/(.*)'))
              : ':' === n
              ? ((s = a.indexOf('?', 1)),
                (l = a.indexOf('.', 1)),
                r.push(a.substring(1, ~s ? s : ~l ? l : a.length)),
                (i += ~s && !~l ? '(?:/([^/]+?))?' : '/([^/]+?)'),
                ~l && (i += (~s ? '?' : '') + '\\' + a.substring(l)))
              : (i += '/' + a);
          return { keys: r, pattern: new RegExp('^' + i + (t ? '(?=$|/)' : '/?$'), 'i') };
        })(e);
        (this.path = e),
          'object' == typeof t && !0 === t._sveltesparouter
            ? ((this.component = t.component),
              (this.conditions = t.conditions || []),
              (this.userData = t.userData),
              (this.props = t.props || {}))
            : ((this.component = () => Promise.resolve(t)), (this.conditions = []), (this.props = {})),
          (this._pattern = n),
          (this._keys = s);
      }
      match(e) {
        if (a)
          if ('string' == typeof a) {
            if (!e.startsWith(a)) return null;
            e = e.substr(a.length) || '/';
          } else if (a instanceof RegExp) {
            const t = e.match(a);
            if (!t || !t[0]) return null;
            e = e.substr(t[0].length) || '/';
          }
        const t = this._pattern.exec(e);
        if (null === t) return null;
        if (!1 === this._keys) return t;
        const n = {};
        let s = 0;
        for (; s < this._keys.length; ) {
          try {
            n[this._keys[s]] = decodeURIComponent(t[s + 1] || '') || null;
          } catch (e) {
            n[this._keys[s]] = null;
          }
          s++;
        }
        return n;
      }
      async checkConditions(e) {
        for (let t = 0; t < this.conditions.length; t++) if (!(await this.conditions[t](e))) return !1;
        return !0;
      }
    }
    const i = [];
    s instanceof Map
      ? s.forEach((e, t) => {
          i.push(new r(t, e));
        })
      : Object.keys(s).forEach((e) => {
          i.push(new r(e, s[e]));
        });
    let o = null,
      c = null,
      d = {};
    const g = O();
    async function u(e, t) {
      await (J(), W), g(e, t);
    }
    let f = null;
    l &&
      (window.addEventListener('popstate', (e) => {
        f = e.state && e.state.scrollY ? e.state : null;
      }),
      j(() => {
        f ? window.scrollTo(f.scrollX, f.scrollY) : window.scrollTo(0, 0);
      }));
    let m = null,
      p = null;
    return (
      ze.subscribe(async (e) => {
        m = e;
        let t = 0;
        for (; t < i.length; ) {
          const s = i[t].match(e.location);
          if (!s) {
            t++;
            continue;
          }
          const a = { route: i[t].path, location: e.location, querystring: e.querystring, userData: i[t].userData };
          if (!(await i[t].checkConditions(a))) return n(0, (o = null)), (p = null), void u('conditionsFailed', a);
          u('routeLoading', Object.assign({}, a));
          const l = i[t].component;
          if (p != l) {
            l.loading
              ? (n(0, (o = l.loading)),
                (p = l),
                n(1, (c = l.loadingParams)),
                n(2, (d = {})),
                u('routeLoaded', Object.assign({}, a, { component: o, name: o.name })))
              : (n(0, (o = null)), (p = null));
            const t = await l();
            if (e != m) return;
            n(0, (o = (t && t.default) || t)), (p = l);
          }
          return (
            s && 'object' == typeof s && Object.keys(s).length ? n(1, (c = s)) : n(1, (c = null)),
            n(2, (d = i[t].props)),
            void u('routeLoaded', Object.assign({}, a, { component: o, name: o.name }))
          );
        }
        n(0, (o = null)), (p = null);
      }),
      (e.$$set = (e) => {
        'routes' in e && n(3, (s = e.routes)),
          'prefix' in e && n(4, (a = e.prefix)),
          'restoreScrollState' in e && n(5, (l = e.restoreScrollState));
      }),
      (e.$$.update = () => {
        32 & e.$$.dirty && (history.scrollRestoration = l ? 'manual' : 'auto');
      }),
      [
        o,
        c,
        d,
        s,
        a,
        l,
        function (t) {
          I(e, t);
        },
        function (t) {
          I(e, t);
        },
      ]
    );
  }
  we(ze, (e) => e.location), we(ze, (e) => e.querystring);
  class Me extends $e {
    constructor(e) {
      super(), pe(this, e, Te, ke, r, { routes: 3, prefix: 4, restoreScrollState: 5 });
    }
  }
  function Fe(e, t, n) {
    const s = e.slice();
    return (s[4] = t[n]), s;
  }
  function Ee(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u = e[4].title + '',
      f = e[4].content + '';
    return {
      c() {
        (t = w('div')),
          (n = w('div')),
          (s = w('span')),
          (a = y(u)),
          (l = k()),
          (r = w('i')),
          (i = k()),
          (o = w('div')),
          (c = w('span')),
          (d = y(f)),
          (g = k()),
          B(s, 'class', 'fontweight-bold fontsize-medium'),
          B(r, 'class', 'fas fa-chevron-down'),
          B(n, 'class', 'accordion-header flex flex-justify--between flex-align--center padding-m'),
          B(o, 'class', 'accordion-body padding-m padding-l--rl fontsize-small'),
          B(t, 'class', 'accordion-tab margin-m--b');
      },
      m(e, u) {
        h(e, t, u), $(t, n), $(n, s), $(s, a), $(n, l), $(n, r), $(t, i), $(t, o), $(o, c), $(c, d), $(t, g);
      },
      p(e, t) {
        2 & t && u !== (u = e[4].title + '') && F(a, u), 2 & t && f !== (f = e[4].content + '') && F(d, f);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Se(t) {
    let n,
      s = t[1],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = Ee(Fe(t, s, e));
    return {
      c() {
        n = w('div');
        for (let e = 0; e < a.length; e += 1) a[e].c();
        B(n, 'data-theme', t[0]), B(n, 'class', 'accordion card-mode padding-l ff-secondary width-1of1');
      },
      m(e, s) {
        h(e, n, s);
        for (let e = 0; e < a.length; e += 1) a[e].m(n, null);
        t[3](n);
      },
      p(e, [t]) {
        if (2 & t) {
          let l;
          for (s = e[1], l = 0; l < s.length; l += 1) {
            const r = Fe(e, s, l);
            a[l] ? a[l].p(r, t) : ((a[l] = Ee(r)), a[l].c(), a[l].m(n, null));
          }
          for (; l < a.length; l += 1) a[l].d(1);
          a.length = s.length;
        }
        1 & t && B(n, 'data-theme', e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && x(n), v(a, e), t[3](null);
      },
    };
  }
  function He(e, t, n) {
    let s,
      { dataTheme: a } = t,
      { tabs: l } = t;
    return (
      P(() => {
        const e = s.querySelectorAll('.accordion-tab');
        for (const t of e) {
          t.querySelector('.accordion-header').addEventListener('click', () => {
            for (const n of e) n !== t && n.classList.remove('accordion-expanded');
            t.classList.toggle('accordion-expanded');
          });
        }
      }),
      (e.$$set = (e) => {
        'dataTheme' in e && n(0, (a = e.dataTheme)), 'tabs' in e && n(1, (l = e.tabs));
      }),
      [
        a,
        l,
        s,
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (s = e), n(2, s);
          });
        },
      ]
    );
  }
  class Ae extends $e {
    constructor(e) {
      super(), pe(this, e, He, Se, r, { dataTheme: 0, tabs: 1 });
    }
  }
  const _e = {
    Bordeaux: { backgroundColor: '#8a0c36', color: '#fff' },
    Reddark: { backgroundColor: '#900', color: '#fff' },
    Red: { backgroundColor: '#bd1118', color: '#fff' },
    Pink: { backgroundColor: '#b31e61', color: '#fff' },
    Rose: { backgroundColor: '#dc7095', color: '#fff' },
    Orangedark: { backgroundColor: '#e96c0d', color: '#fff' },
    Orange: { backgroundColor: '#e5ad02', color: '#fff' },
    Yellow: { backgroundColor: '#fae500', color: '#fff' },
    Yellowlight: { backgroundColor: '#ff0', color: '#000' },
    Sand: { backgroundColor: '#cec4a6', color: '#fff' },
    Greendark: { backgroundColor: '#2f7820', color: '#fff' },
    Green: { backgroundColor: '#029e5d', color: '#fff' },
    Greenlight: { backgroundColor: '#93b923', color: '#fff' },
    Lime: { backgroundColor: '#cbfe33', color: '#000' },
    Purpledark: { backgroundColor: '#51208c', color: '#fff' },
    Bluenavy: { backgroundColor: '#1a237e', color: '#fff' },
    Bluedark: { backgroundColor: '#1058c2', color: '#fff' },
    Blue: { backgroundColor: '#31769b', color: '#fff' },
    Bluelight: { backgroundColor: '#4fa8df', color: '#fff' },
    Cyan: { backgroundColor: '#00b6d2', color: '#fff' },
    Sea: { backgroundColor: '#84a8c4', color: '#fff' },
    Black: { backgroundColor: '#000', color: '#fff' },
    Graa1: { backgroundColor: '#3c3c3c', color: '#fff' },
    Graa2: { backgroundColor: '#484848', color: '#fff' },
    Graa3: { backgroundColor: '#999', color: '#fff' },
    Graa4: { backgroundColor: '#c8c8c8', color: '#000' },
    Graa5: { backgroundColor: '#ddd', color: '#000' },
    Graa6: { backgroundColor: '#e5e5e5', color: '#000' },
    Graa7: { backgroundColor: '#efefef', color: '#000' },
    White: { backgroundColor: '#fff', color: '#000' },
    PastelRed: { backgroundColor: '#db5040', color: '#fff' },
    PastelDarkred: { backgroundColor: '#954839', color: '#fff' },
    PastelLightred: { backgroundColor: '#d67e9b', color: '#fff' },
    PastelGreen: { backgroundColor: '#9fc29c', color: '#fff' },
    PastelDarkgreen: { backgroundColor: '#91a34f', color: '#fff' },
    PastelYellow: { backgroundColor: '#d4c564', color: '#fff' },
    Eb: { backgroundColor: '#bd1118', color: '#fff' },
    Eb2: { backgroundColor: '#900', color: '#fff' },
    Breaking: { backgroundColor: '#ff0', color: '#000' },
    Bruger: { backgroundColor: '#4fa8df', color: '#fff' },
    Live: { backgroundColor: '#000', color: '#fff' },
    Native: { backgroundColor: '#cec4a6', color: '#fff' },
    Native2: { backgroundColor: '#84a8c4', color: '#fff' },
    Facebook: { backgroundColor: '#31769b', color: '#fff' },
    Twitter: { backgroundColor: '#4fa8df', color: '#fff' },
    Ekstra: { backgroundColor: '#bd1118', color: '#fff' },
    Flash: { backgroundColor: '#e5ad02', color: '#fff' },
    Forbrug: { backgroundColor: '#00b6d2', color: '#fff' },
    Leder: { backgroundColor: '#1a237e', color: '#fff' },
    Livescore: { backgroundColor: '#029e5d', color: '#fff' },
    Livescore2: { backgroundColor: '#cbfe33', color: '#000' },
    Nyheder: { backgroundColor: '#1058c2', color: '#fff' },
    Nyheder2: { backgroundColor: '#000', color: '#fff' },
    SexSamliv: { backgroundColor: '#b31e61', color: '#fff' },
    SexSamliv2: { backgroundColor: '#dc7095', color: '#fff' },
    Skolefodbold: { backgroundColor: '#93b923', color: '#fff' },
    Sport: { backgroundColor: '#029e5d', color: '#fff' },
    Tv: { backgroundColor: '#bd1118', color: '#fff' },
    Underholdning: { backgroundColor: '#51208c', color: '#fff' },
  };
  function Pe(e) {
    const t = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      n = new Date(e),
      s = new Date(),
      a = new Date(n.getTime() + 60 * s.getTimezoneOffset()),
      l = Math.round((s.getTime() - a.getTime()) / 1e3);
    let r = '';
    if (Math.floor(l / 86400)) {
      const e = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 1);
      r =
        a.getTime() > e.getTime()
          ? 'I går'
          : `${a.getDate()}. ${t[a.getMonth()]}.${s.getFullYear() !== a.getFullYear() ? ` ${a.getFullYear()}` : ''}`;
    } else {
      const e = Math.floor((l % 86400) / 3600),
        t = Math.floor(((l % 86400) % 3600) / 60),
        n = l % 60;
      e ? (r = 1 === e ? `${e} time` : `${e} timer`) : t ? (r = `${t} min`) : n && (r = `${n} sek`);
    }
    return r;
  }
  const je = (e) => ({}),
    Ve = (e) => ({}),
    Oe = (e) => ({}),
    De = (e) => ({}),
    qe = (e) => ({}),
    Ie = (e) => ({}),
    Re = (e) => ({}),
    Ge = (e) => ({}),
    Ue = (e) => ({}),
    Ye = (e) => ({}),
    We = (e) => ({}),
    Ze = (e) => ({}),
    Je = (e) => ({}),
    Xe = (e) => ({ class: 'card-media' }),
    Ke = (e) => ({}),
    Qe = (e) => ({ class: 'card-header' });
  function et(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      d = e[6].header && nt(e),
      u = e[6].media && st(e);
    const f = e[13].default,
      m = c(f, e, e[12], null);
    let p = e[6].content && at(e),
      v = e[6].footer && lt(e);
    return {
      c() {
        (t = w('div')),
          d && d.c(),
          (n = k()),
          u && u.c(),
          (s = k()),
          m && m.c(),
          (a = k()),
          p && p.c(),
          (l = k()),
          v && v.c(),
          B(t, 'class', e[5]),
          B(t, 'style', e[1]),
          B(t, 'data-theme', e[2]);
      },
      m(c, g) {
        h(c, t, g),
          d && d.m(t, null),
          $(t, n),
          u && u.m(t, null),
          $(t, s),
          m && m.m(t, null),
          $(t, a),
          p && p.m(t, null),
          $(t, l),
          v && v.m(t, null),
          e[17](t),
          (r = !0),
          i || ((o = z(t, 'click', e[15])), (i = !0));
      },
      p(e, a) {
        e[6].header
          ? d
            ? (d.p(e, a), 64 & a && ie(d, 1))
            : ((d = nt(e)), d.c(), ie(d, 1), d.m(t, n))
          : d &&
            (le(),
            oe(d, 1, 1, () => {
              d = null;
            }),
            re()),
          e[6].media
            ? u
              ? (u.p(e, a), 64 & a && ie(u, 1))
              : ((u = st(e)), u.c(), ie(u, 1), u.m(t, s))
            : u &&
              (le(),
              oe(u, 1, 1, () => {
                u = null;
              }),
              re()),
          m && m.p && (!r || 4096 & a) && g(m, f, e, e[12], a, null, null),
          e[6].content
            ? p
              ? (p.p(e, a), 64 & a && ie(p, 1))
              : ((p = at(e)), p.c(), ie(p, 1), p.m(t, l))
            : p &&
              (le(),
              oe(p, 1, 1, () => {
                p = null;
              }),
              re()),
          e[6].footer
            ? v
              ? (v.p(e, a), 64 & a && ie(v, 1))
              : ((v = lt(e)), v.c(), ie(v, 1), v.m(t, null))
            : v &&
              (le(),
              oe(v, 1, 1, () => {
                v = null;
              }),
              re()),
          (!r || 32 & a) && B(t, 'class', e[5]),
          (!r || 2 & a) && B(t, 'style', e[1]),
          (!r || 4 & a) && B(t, 'data-theme', e[2]);
      },
      i(e) {
        r || (ie(d), ie(u), ie(m, e), ie(p), ie(v), (r = !0));
      },
      o(e) {
        oe(d), oe(u), oe(m, e), oe(p), oe(v), (r = !1);
      },
      d(n) {
        n && x(t), d && d.d(), u && u.d(), m && m.d(n), p && p.d(), v && v.d(), e[17](null), (i = !1), o();
      },
    };
  }
  function tt(e) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o,
      d,
      u = e[6].header && rt(e),
      f = e[6].media && it(e);
    const m = e[13].default,
      p = c(m, e, e[12], null);
    let v = e[6].content && ot(e),
      b = e[6].footer && ct(e),
      y = [{ href: e[0] }, { class: e[5] }, { style: e[1] }, { 'data-theme': e[2] }, e[3]],
      C = {};
    for (let e = 0; e < y.length; e += 1) C = t(C, y[e]);
    return {
      c() {
        (n = w('a')),
          u && u.c(),
          (s = k()),
          f && f.c(),
          (a = k()),
          p && p.c(),
          (l = k()),
          v && v.c(),
          (r = k()),
          b && b.c(),
          L(n, C);
      },
      m(t, c) {
        h(t, n, c),
          u && u.m(n, null),
          $(n, s),
          f && f.m(n, null),
          $(n, a),
          p && p.m(n, null),
          $(n, l),
          v && v.m(n, null),
          $(n, r),
          b && b.m(n, null),
          e[16](n),
          (i = !0),
          o || ((d = z(n, 'click', e[14])), (o = !0));
      },
      p(e, t) {
        e[6].header
          ? u
            ? (u.p(e, t), 64 & t && ie(u, 1))
            : ((u = rt(e)), u.c(), ie(u, 1), u.m(n, s))
          : u &&
            (le(),
            oe(u, 1, 1, () => {
              u = null;
            }),
            re()),
          e[6].media
            ? f
              ? (f.p(e, t), 64 & t && ie(f, 1))
              : ((f = it(e)), f.c(), ie(f, 1), f.m(n, a))
            : f &&
              (le(),
              oe(f, 1, 1, () => {
                f = null;
              }),
              re()),
          p && p.p && (!i || 4096 & t) && g(p, m, e, e[12], t, null, null),
          e[6].content
            ? v
              ? (v.p(e, t), 64 & t && ie(v, 1))
              : ((v = ot(e)), v.c(), ie(v, 1), v.m(n, r))
            : v &&
              (le(),
              oe(v, 1, 1, () => {
                v = null;
              }),
              re()),
          e[6].footer
            ? b
              ? (b.p(e, t), 64 & t && ie(b, 1))
              : ((b = ct(e)), b.c(), ie(b, 1), b.m(n, null))
            : b &&
              (le(),
              oe(b, 1, 1, () => {
                b = null;
              }),
              re()),
          L(
            n,
            (C = ce(y, [
              (!i || 1 & t) && { href: e[0] },
              (!i || 32 & t) && { class: e[5] },
              (!i || 2 & t) && { style: e[1] },
              (!i || 4 & t) && { 'data-theme': e[2] },
              8 & t && e[3],
            ]))
          );
      },
      i(e) {
        i || (ie(u), ie(f), ie(p, e), ie(v), ie(b), (i = !0));
      },
      o(e) {
        oe(u), oe(f), oe(p, e), oe(v), oe(b), (i = !1);
      },
      d(t) {
        t && x(n), u && u.d(), f && f.d(), p && p.d(t), v && v.d(), b && b.d(), e[16](null), (o = !1), d();
      },
    };
  }
  function nt(e) {
    let t, n;
    const s = e[13].header,
      a = c(s, e, e[12], Ge);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', 'card-header');
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 4096 & t) && g(a, s, e, e[12], t, Re, Ge);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function st(e) {
    let t, n;
    const s = e[13].media,
      a = c(s, e, e[12], Ie);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', 'card-media');
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 4096 & t) && g(a, s, e, e[12], t, qe, Ie);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function at(e) {
    let t, n;
    const s = e[13].content,
      a = c(s, e, e[12], De);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', 'card-content');
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 4096 & t) && g(a, s, e, e[12], t, Oe, De);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function lt(e) {
    let t, n;
    const s = e[13].footer,
      a = c(s, e, e[12], Ve);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', 'card-footer');
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 4096 & t) && g(a, s, e, e[12], t, je, Ve);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function rt(e) {
    let t;
    const n = e[13].header,
      s = c(n, e, e[12], Qe);
    return {
      c() {
        s && s.c();
      },
      m(e, n) {
        s && s.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 4096 & a) && g(s, n, e, e[12], a, Ke, Qe);
      },
      i(e) {
        t || (ie(s, e), (t = !0));
      },
      o(e) {
        oe(s, e), (t = !1);
      },
      d(e) {
        s && s.d(e);
      },
    };
  }
  function it(e) {
    let t;
    const n = e[13].media,
      s = c(n, e, e[12], Xe);
    return {
      c() {
        s && s.c();
      },
      m(e, n) {
        s && s.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 4096 & a) && g(s, n, e, e[12], a, Je, Xe);
      },
      i(e) {
        t || (ie(s, e), (t = !0));
      },
      o(e) {
        oe(s, e), (t = !1);
      },
      d(e) {
        s && s.d(e);
      },
    };
  }
  function ot(e) {
    let t, n;
    const s = e[13].content,
      a = c(s, e, e[12], Ze);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', 'card-content');
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 4096 & t) && g(a, s, e, e[12], t, We, Ze);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function ct(e) {
    let t, n;
    const s = e[13].footer,
      a = c(s, e, e[12], Ye);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', 'card-footer');
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 4096 & t) && g(a, s, e, e[12], t, Ue, Ye);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function dt(e) {
    let t, n, s, a;
    const l = [tt, et],
      r = [];
    function i(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = i(e)),
      (n = r[t] = l[t](e)),
      {
        c() {
          n.c(), (s = C());
        },
        m(e, n) {
          r[t].m(e, n), h(e, s, n), (a = !0);
        },
        p(e, [a]) {
          let o = t;
          (t = i(e)),
            t === o
              ? r[t].p(e, a)
              : (le(),
                oe(r[o], 1, 1, () => {
                  r[o] = null;
                }),
                re(),
                (n = r[t]),
                n ? n.p(e, a) : ((n = r[t] = l[t](e)), n.c()),
                ie(n, 1),
                n.m(s.parentNode, s));
        },
        i(e) {
          a || (ie(n), (a = !0));
        },
        o(e) {
          oe(n), (a = !1);
        },
        d(e) {
          r[t].d(e), e && x(s);
        },
      }
    );
  }
  function gt(e, n, s) {
    let a,
      { $$slots: l = {}, $$scope: r } = n;
    const i = (function (e) {
      const t = {};
      for (const n in e) t[n] = !0;
      return t;
    })(l);
    let { className: o } = n,
      { href: c } = n,
      { style: d } = n,
      { theme: g } = n;
    const f = {};
    for (const e in n) 0 === e.indexOf('data-') && (f[e] = n[e]);
    let m,
      { intersection: p = !1 } = n,
      { intersectionRoot: $ } = n,
      { intersectionThreshold: h = 0.5 } = n,
      { intersectionData: x = {} } = n,
      v = {
        root: $ ? document.querySelector($) : null,
        rootMargin: '0px',
        threshold: h,
        trackVisibility: !0,
        delay: 100,
      },
      w = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) {
          const e = new CustomEvent('articleCardInview', { detail: x });
          document.dispatchEvent(e), w.unobserve(m);
        }
      }, v);
    return (
      P(() => {
        if ('undefined' != typeof IntersectionObserver && p) return w.observe(m), () => w.unobserve(m);
      }),
      (e.$$set = (e) => {
        s(20, (n = t(t({}, n), u(e)))),
          'className' in e && s(7, (o = e.className)),
          'href' in e && s(0, (c = e.href)),
          'style' in e && s(1, (d = e.style)),
          'theme' in e && s(2, (g = e.theme)),
          'intersection' in e && s(8, (p = e.intersection)),
          'intersectionRoot' in e && s(9, ($ = e.intersectionRoot)),
          'intersectionThreshold' in e && s(10, (h = e.intersectionThreshold)),
          'intersectionData' in e && s(11, (x = e.intersectionData)),
          '$$scope' in e && s(12, (r = e.$$scope));
      }),
      (e.$$.update = () => {
        128 & e.$$.dirty && s(5, (a = `${o} card`));
      }),
      (n = u(n)),
      [
        c,
        d,
        g,
        f,
        m,
        a,
        i,
        o,
        p,
        $,
        h,
        x,
        r,
        l,
        function (t) {
          I(e, t);
        },
        function (t) {
          I(e, t);
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (m = e), s(4, m);
          });
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (m = e), s(4, m);
          });
        },
      ]
    );
  }
  class ut extends $e {
    constructor(e) {
      super(),
        pe(this, e, gt, dt, r, {
          className: 7,
          href: 0,
          style: 1,
          theme: 2,
          intersection: 8,
          intersectionRoot: 9,
          intersectionThreshold: 10,
          intersectionData: 11,
        });
    }
  }
  function ft(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'angle-down' },
        { class: 'svg-inline--fa fa-angle-down fa-w-10' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 320 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-down' },
            { class: 'svg-inline--fa fa-angle-down fa-w-10' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 320 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function mt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function pt(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'angle-left' },
        { class: 'svg-inline--fa fa-angle-left fa-w-6' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 192 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-left' },
            { class: 'svg-inline--fa fa-angle-left fa-w-6' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 192 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function $t(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function ht(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'angle-right' },
        { class: 'svg-inline--fa fa-angle-right fa-w-6' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 192 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-right' },
            { class: 'svg-inline--fa fa-angle-right fa-w-6' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 192 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function xt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function vt(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'angle-up' },
        { class: 'svg-inline--fa fa-angle-up fa-w-10' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 320 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-up' },
            { class: 'svg-inline--fa fa-angle-up fa-w-10' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 320 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function wt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function bt(n) {
    let s,
      a,
      l = [
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { viewBox: '0 0 30 5' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { xmlns: !0, 'aria-hidden': !0, focusable: !0, viewBox: !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'd', 'M27.5 5H2.3C1 5 0 3.8 0 2.5S1 0 2.3 0h25.2C28.8 0 30 1.2 30 2.5v.2C30 3.8 28.8 5 27.5 5z'), N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { viewBox: '0 0 30 5' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function yt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function kt(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 51 47' },
        { style: 'enable-background:new 0 0 51 47;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M27,46.5h-4.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H27c0.8,0,1.5,0.7,1.5,1.5S27.8,46.5,27,46.5z M15,46.5H2\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h13c0.8,0,1.5,0.7,1.5,1.5S15.8,46.5,15,46.5z M49,35.4H2c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5h47c0.8,0,1.5,0.7,1.5,1.5S49.8,35.4,49,35.4z M49,24.3H33.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49\n\tc0.8,0,1.5,0.7,1.5,1.5S49.8,24.3,49,24.3z M22.7,24.3H3.3c-1.6,0-2.8-1.2-2.8-2.8V3c0-1.6,1.2-2.8,2.8-2.8h19.4\n\tc1.6,0,2.8,1.2,2.8,2.8v18.5C25.4,23.1,24.3,24.3,22.7,24.3z M3.5,21.3l18.9,0V3.3l-18.9,0L3.5,21.3z M49,13.2H33.5\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,13.2,49,13.2z M49,3.3H33.5c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,3.3,49,3.3z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 51 47' },
            { style: 'enable-background:new 0 0 51 47;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Ct(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function zt(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 16 16' },
        { style: 'enable-background:new 0 0 16 16;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { class: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'class', 'st0'),
          B(
            a,
            'd',
            'M8,15.6c-4.2,0-7.6-3.4-7.6-7.6S3.8,0.4,8,0.4s7.6,3.4,7.6,7.6v1.3c0,1.3-1.1,2.4-2.4,2.4c-1,0-1.8-0.6-2.2-1.4\n\tc-0.7,0.9-1.7,1.4-2.9,1.4C6,11.7,4.3,10,4.3,8C4.3,6,6,4.3,8,4.3c1.1,0,2,0.5,2.7,1.2V4.8h1v4.5c0,0.8,0.6,1.4,1.4,1.4\n\ts1.4-0.6,1.4-1.4V8c0-3.6-2.9-6.6-6.6-6.6C4.4,1.4,1.4,4.4,1.4,8c0,3.6,2.9,6.6,6.6,6.6V15.6z M8,5.3C6.5,5.3,5.3,6.5,5.3,8\n\tc0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7C10.7,6.5,9.5,5.3,8,5.3z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 16 16' },
            { style: 'enable-background:new 0 0 16 16;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Bt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Lt(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 442.6 335.1' },
        { style: 'enable-background:new 0 0 442.6 335.1;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { version: !0, id: !0, xmlns: !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M410.8,3.5l-280,280l-99-99c-4.7-4.7-12.3-4.7-17,0L3.5,195.8c-4.7,4.7-4.7,12.3,0,17l118.8,118.8c4.7,4.7,12.3,4.7,17,0\n\tL439.1,31.8c4.7-4.7,4.7-12.3,0-17L427.8,3.5C423.1-1.2,415.5-1.2,410.8,3.5L410.8,3.5z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 442.6 335.1' },
            { style: 'enable-background:new 0 0 442.6 335.1;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Nt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Tt(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'clock' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 512 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { 'aria-hidden': !0, focusable: !0, 'data-prefix': !0, 'data-icon': !0, role: !0, xmlns: !0, viewBox: !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'clock' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Mt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Ft(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 576 448' },
        { style: 'enable-background:new 0 0 576 448;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { version: !0, id: !0, xmlns: !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M528,0H48C21.5,0,0,21.5,0,48v352c0,26.5,21.5,48,48,48h480c26.5,0,48-21.5,48-48V48C576,21.5,554.5,0,528,0z M48,32h480\n\tc8.8,0,16,7.2,16,16v48H32V48C32,39.2,39.2,32,48,32z M528,416H48c-8.8,0-16-7.2-16-16V192h512v208C544,408.8,536.8,416,528,416z\n\t M192,332v8c0,6.6-5.4,12-12,12h-72c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h72C186.6,320,192,325.4,192,332z M384,332v8\n\tc0,6.6-5.4,12-12,12H236c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h136C378.6,320,384,325.4,384,332z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 576 448' },
            { style: 'enable-background:new 0 0 576 448;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Et(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function St(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 72.8 72.8' },
        { style: 'enable-background:new 0 0 72.8 72.8;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2\n\tH30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 72.8 72.8' },
            { style: 'enable-background:new 0 0 72.8 72.8;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Ht(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function At(n) {
    let s,
      a,
      l,
      r,
      i = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 122.1 595.3 597.4' },
        { 'enable-background': 'new 0 122.1 595.3 597.4' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      o = {};
    for (let e = 0; e < i.length; e += 1) o = t(o, i[e]);
    return {
      c() {
        (s = b('svg')), (a = b('g')), (l = b('g')), (r = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            version: !0,
            id: !0,
            xmlns: !0,
            'xmlns:xlink': !0,
            x: !0,
            y: !0,
            viewBox: !0,
            'enable-background': !0,
            'xml:space': !0,
          },
          1
        );
        var t = T(s);
        a = M(t, 'g', {}, 1);
        var n = T(a);
        l = M(n, 'g', {}, 1);
        var i = T(l);
        (r = M(i, 'path', { d: !0 }, 1)), T(r).forEach(x), i.forEach(x), n.forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(r, 'd', 'M237.4,122.1h120.5v238.5h237.4V481H357.9v238.5H237.4V481H0V360.5h237.4V122.1z'), N(s, o);
      },
      m(e, t) {
        h(e, s, t), $(s, a), $(a, l), $(l, r);
      },
      p(e, [t]) {
        N(
          s,
          (o = ce(i, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 122.1 595.3 597.4' },
            { 'enable-background': 'new 0 122.1 595.3 597.4' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function _t(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Pt(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 512 384' },
        { style: 'enable-background:new 0 0 512 384;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { version: !0, id: !0, xmlns: !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M464,0H48C21.5,0,0,21.5,0,48v288c0,26.5,21.5,48,48,48h416c26.5,0,48-21.5,48-48V48C512,21.5,490.5,0,464,0z M48,32h416\n\tc8.8,0,16,7.2,16,16v41.4c-21.9,18.5-53.2,44-150.6,121.3c-16.9,13.4-50.2,45.7-73.4,45.3c-23.2,0.4-56.6-31.9-73.4-45.3\n\tC85.2,133.4,53.9,107.9,32,89.4V48C32,39.2,39.2,32,48,32z M464,352H48c-8.8,0-16-7.2-16-16V131c22.8,18.7,58.8,47.6,130.7,104.7\n\tc20.5,16.4,56.7,52.5,93.3,52.3c36.4,0.3,72.3-35.5,93.3-52.3c71.9-57.1,107.9-86,130.7-104.7v205C480,344.8,472.8,352,464,352z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 512 384' },
            { style: 'enable-background:new 0 0 512 384;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function jt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Vt(n) {
    let s,
      a,
      l,
      r = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 34 16.4' }, n[0]],
      i = {};
    for (let e = 0; e < r.length; e += 1) i = t(i, r[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), (l = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { xmlns: !0, viewBox: !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0, fill: !0 }, 1)),
          T(a).forEach(x),
          (l = M(t, 'path', { d: !0 }, 1)),
          T(l).forEach(x),
          t.forEach(x),
          this.h();
      },
      h() {
        B(
          a,
          'd',
          'M15.6.8c.8-.8 2-.8 2.8 0l6.7 6.7c1.9 1.9 4.4 2.9 7.1 2.9H34v6H0v-6h1.9c2.7 0 5.2-1.1 7.1-2.9L15.6.8z'
        ),
          B(a, 'fill', '#fff'),
          B(l, 'd', 'M9.7 12.9l6.6-6.6c.4-.4 1-.4 1.4 0l6.6 6.6c.6.6.2 1.7-.7 1.7H10.4c-.9 0-1.3-1-.7-1.7z'),
          N(s, i);
      },
      m(e, t) {
        h(e, s, t), $(s, a), $(s, l);
      },
      p(e, [t]) {
        N(s, (i = ce(r, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 34 16.4' }, 1 & t && e[0]])));
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Ot(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Dt(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 55 55' },
        { style: 'enable-background:new 0 0 55 55;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M43.7,54.5c-0.3,0-0.6,0-0.9-0.1l-32.7-6.6c-0.8-0.2-1.3-1-1.2-1.8c0.2-0.8,1-1.3,1.8-1.2l32.8,6.6c0.1,0,0.1,0,0.2,0\n\tc0.1,0,0.1,0,0.6-0.1l0.1,0c0,0,0-0.1,0.1-0.1c0-0.1,0-0.1,0-0.2l7.1-35c0-0.2,0-0.4-0.1-0.6c-0.1-0.1-0.2-0.2-0.4-0.3L46,14.3\n\tc-0.8-0.1-1.4-0.9-1.2-1.7c0.1-0.8,0.9-1.4,1.7-1.2l4.9,0.9c1,0.2,1.8,0.7,2.4,1.5c0.6,0.9,0.8,1.9,0.6,2.9l-7.1,34.9\n\tc-0.1,1-0.8,2-1.7,2.5c-0.1,0-0.1,0.1-0.2,0.1l-0.2,0.1C44.8,54.3,44.3,54.5,43.7,54.5z M39.6,43.3H4.2c-2.2,0-3.7-1.6-3.7-3.7V4.2\n\tc0-2.2,1.6-3.7,3.7-3.7h35.4c2.2,0,3.7,1.6,3.7,3.7v35.4C43.3,41.8,41.8,43.3,39.6,43.3z M3.5,36.7v2.9c0,0.5,0.2,0.7,0.7,0.7h35.4\n\tc0.5,0,0.7-0.2,0.7-0.7v-2.9H3.5z M37.7,33.7h2.6V4.2c0-0.5-0.2-0.7-0.7-0.7H4.2c-0.5,0-0.7,0.2-0.7,0.7v29.5h2.6\n\tc0.2-1.7,0.6-3.4,1.4-5.1c1.2-2.4,4.8-3.7,9.8-5.4c0.2-0.5,0.2-1.7,0-2.1c-2.1-2.4-3-5.2-2.8-8.1c0-2.2,0.6-4,1.9-5.5\n\tc1.4-1.6,3.3-2.5,5.6-2.5c2,0,3.9,0.9,5.5,2.4c0,0,0.1,0.1,0.1,0.1c1.3,1.6,1.9,3.5,1.7,5.6c0.2,3-0.8,5.9-2.7,7.9\n\tc-0.2,0.5-0.2,1.8,0,2.3c0.6,0.2,1.3,0.5,1.9,0.7c4,1.5,6.9,2.6,7.9,4.6C37.1,30.3,37.6,32,37.7,33.7z M9.1,33.7h25.6\n\tc-0.2-1.3-0.5-2.6-1.1-3.9c-0.4-0.9-3.4-2-6.2-3c-0.7-0.3-1.4-0.5-2.2-0.8c-0.5-0.2-1.2-0.7-1.5-1.8c-0.5-1.5-0.3-3.9,0.4-4.9\n\tc0.1-0.1,0.1-0.2,0.2-0.2c1.4-1.4,2.2-3.6,2-5.9c0-0.1,0-0.2,0-0.3c0.2-1.3-0.1-2.5-0.9-3.4c-0.6-0.6-1.8-1.5-3.3-1.5\n\tc-1.4,0-2.5,0.5-3.3,1.5c-0.8,1-1.2,2.2-1.2,3.7c0,0,0,0.1,0,0.1c-0.2,2.2,0.5,4.2,2.1,6c0.9,0.9,1.1,3.3,0.8,4.6\n\tc-0.4,1.6-1.3,2.1-1.8,2.3c-2.8,0.9-7.5,2.5-8.2,3.9C9.7,31.1,9.3,32.4,9.1,33.7z M17.3,21.1C17.3,21.2,17.3,21.2,17.3,21.1\n\tC17.3,21.2,17.3,21.2,17.3,21.1z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 55 55' },
            { style: 'enable-background:new 0 0 55 55;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function qt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function It(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 53 53' },
        { style: 'enable-background:new 0 0 53 53;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9\n\tc1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9\n\tC15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4\n\tc-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1\n\tc0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6\n\tc-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3\n\tl-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9\n\tc-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1\n\tC40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2\n\tc0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2\n\tc-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2\n\tC45,52.2,44.5,52.5,44,52.5z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 53 53' },
            { style: 'enable-background:new 0 0 53 53;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Rt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Gt(n) {
    let s,
      a,
      l = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 512 512' }, n[0]],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { xmlns: !0, viewBox: !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(s, (r = ce(l, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 512 512' }, 1 & t && e[0]])));
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Ut(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Yt(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'history' },
        { class: 'svg-inline--fa fa-history fa-w-16' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 512 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'history' },
            { class: 'svg-inline--fa fa-history fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Wt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Zt(n) {
    let s,
      a,
      l = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, n[0]],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { xmlns: !0, viewBox: !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(s, (r = ce(l, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, 1 & t && e[0]])));
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Jt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Xt(n) {
    let s,
      a,
      l = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, n[0]],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { xmlns: !0, viewBox: !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(s, (r = ce(l, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, 1 & t && e[0]])));
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Kt(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Qt(n) {
    let s,
      a,
      l,
      r,
      i,
      o,
      c = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 63.6 81.5' },
        { style: 'enable-background:new 0 0 63.6 81.5;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      d = {};
    for (let e = 0; e < c.length; e += 1) d = t(d, c[e]);
    return {
      c() {
        (s = b('svg')),
          (a = b('g')),
          (l = b('rect')),
          (r = b('polygon')),
          (i = b('path')),
          (o = b('polygon')),
          this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        a = M(t, 'g', {}, 1);
        var n = T(a);
        (l = M(n, 'rect', { y: !0, width: !0, height: !0 }, 1)),
          T(l).forEach(x),
          (r = M(n, 'polygon', { points: !0 }, 1)),
          T(r).forEach(x),
          (i = M(n, 'path', { d: !0 }, 1)),
          T(i).forEach(x),
          (o = M(n, 'polygon', { points: !0 }, 1)),
          T(o).forEach(x),
          n.forEach(x),
          t.forEach(x),
          this.h();
      },
      h() {
        B(l, 'y', '70.7'),
          B(l, 'width', '63.3'),
          B(l, 'height', '10.9'),
          B(r, 'points', '0,81.5 21.2,61.8 21.2,47.8 0,67.5 \t'),
          B(
            i,
            'd',
            'M31.8,0C14.2,0,0,14.2,0,31.8c0,13.8,8.9,25.6,21.2,30v-14c-5.2-3.4-8.6-9.3-8.6-16c0-10.6,8.6-19.2,19.2-19.2\n\t\tS51,21.2,51,31.8c0,6.7-3.4,12.5-8.6,16v14c12.3-4.4,21.2-16.1,21.2-30C63.6,14.2,49.3,0,31.8,0z'
          ),
          B(o, 'points', '63.6,81.5 42.4,61.7 42.4,47.8 63.6,67.5 \t'),
          N(s, d);
      },
      m(e, t) {
        h(e, s, t), $(s, a), $(a, l), $(a, r), $(a, i), $(a, o);
      },
      p(e, [t]) {
        N(
          s,
          (d = ce(c, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 63.6 81.5' },
            { style: 'enable-background:new 0 0 63.6 81.5;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function en(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function tn(n) {
    let s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f = [
        { version: '1.1' },
        { id: 'Lag_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 30 30' },
        { 'enable-background': 'new 0 0 30 30' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      m = {};
    for (let e = 0; e < f.length; e += 1) m = t(m, f[e]);
    return {
      c() {
        (s = b('svg')),
          (a = b('g')),
          (l = b('g')),
          (r = b('rect')),
          (i = b('g')),
          (o = b('g')),
          (c = b('rect')),
          (d = b('g')),
          (g = b('g')),
          (u = b('rect')),
          this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            version: !0,
            id: !0,
            xmlns: !0,
            'xmlns:xlink': !0,
            x: !0,
            y: !0,
            viewBox: !0,
            'enable-background': !0,
            'xml:space': !0,
          },
          1
        );
        var t = T(s);
        a = M(t, 'g', {}, 1);
        var n = T(a);
        l = M(n, 'g', {}, 1);
        var f = T(l);
        (r = M(f, 'rect', { y: !0, width: !0, height: !0 }, 1)),
          T(r).forEach(x),
          f.forEach(x),
          n.forEach(x),
          (i = M(t, 'g', {}, 1));
        var m = T(i);
        o = M(m, 'g', {}, 1);
        var p = T(o);
        (c = M(p, 'rect', { y: !0, width: !0, height: !0 }, 1)),
          T(c).forEach(x),
          p.forEach(x),
          m.forEach(x),
          (d = M(t, 'g', {}, 1));
        var $ = T(d);
        g = M($, 'g', {}, 1);
        var h = T(g);
        (u = M(h, 'rect', { y: !0, width: !0, height: !0 }, 1)),
          T(u).forEach(x),
          h.forEach(x),
          $.forEach(x),
          t.forEach(x),
          this.h();
      },
      h() {
        B(r, 'y', '4.3'),
          B(r, 'width', '30'),
          B(r, 'height', '4'),
          B(c, 'y', '12.3'),
          B(c, 'width', '30'),
          B(c, 'height', '4'),
          B(u, 'y', '20.3'),
          B(u, 'width', '30'),
          B(u, 'height', '4'),
          N(s, m);
      },
      m(e, t) {
        h(e, s, t), $(s, a), $(a, l), $(l, r), $(s, i), $(i, o), $(o, c), $(s, d), $(d, g), $(g, u);
      },
      p(e, [t]) {
        N(
          s,
          (m = ce(f, [
            { version: '1.1' },
            { id: 'Lag_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 30 30' },
            { 'enable-background': 'new 0 0 30 30' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function nn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function sn(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'miteb-regular' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0' },
        { y: '0' },
        { viewBox: '0 0 512 512' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zm-23.3 115H45.8V71.7H187v69.8zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 230.7H324.9V71.7h141.2v185.5zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM187 440.5H45.8v-160H187v160zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 90.4H324.9v-45.2h141.2v45.2z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'miteb-regular' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0' },
            { y: '0' },
            { viewBox: '0 0 512 512' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function an(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function ln(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'miteb-solid' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0' },
        { y: '0' },
        { viewBox: '0 0 512 512' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'miteb-solid' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0' },
            { y: '0' },
            { viewBox: '0 0 512 512' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function rn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function on(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 42 39' },
        { style: 'enable-background:new 0 0 42 39;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M35.8,38.5H6.2c-3.5,0-6.2-2.7-6.2-6.2V2.7C0,1.2,1.2,0,2.7,0h26.1c1.6,0,2.7,1.2,2.7,2.7v29.6c0,2.4,1.8,4.2,4.2,4.2\n\ts4.2-1.8,4.2-4.2V6.2c0-0.6,0.4-1,1-1s1,0.4,1,1v26.1C42,35.8,39.3,38.5,35.8,38.5z M2.7,2C2.2,2,2,2.2,2,2.7v29.6\n\tc0,2.4,1.8,4.2,4.2,4.2h25c-1-1.1-1.6-2.6-1.6-4.2V2.7c0-0.5-0.2-0.7-0.7-0.7H2.7z M35.8,33.8c-0.6,0-1-0.4-1-1V6.2c0-0.6,0.4-1,1-1\n\ts1,0.4,1,1v26.5C36.8,33.3,36.3,33.8,35.8,33.8z M25.3,29.8H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1\n\tS25.9,29.8,25.3,29.8z M25.3,24.6H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1S25.9,24.6,25.3,24.6z M25.3,19.4h-4.9\n\tc-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,19.4,25.3,19.4z M15.8,19.4H7.1c-1.1,0-1.9-0.8-1.9-1.9V8.8\n\tC5.2,7.8,6,7,7.1,7h8.7c1.1,0,1.9,0.8,1.9,1.9v8.7C17.7,18.6,16.8,19.4,15.8,19.4z M7.2,17.4l8.4,0V9L7.2,9L7.2,17.4z M25.3,14.2\n\th-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,14.2,25.3,14.2z M25.3,9h-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9\n\tc0.6,0,1,0.4,1,1S25.9,9,25.3,9z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 42 39' },
            { style: 'enable-background:new 0 0 42 39;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function cn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function dn(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 15 15' },
        { style: 'enable-background:new 0 0 15 15;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M12.9,14.2c-0.1,0-0.1,0-0.2,0v0c-6.3-0.6-11.3-5.7-12-12c0-0.5,0.1-0.9,0.4-1.3C1.5,0.6,2,0.4,2.5,0.4h2.3\n\tc0.8,0,1.5,0.5,1.7,1.2l0.7,2.2c0.2,0.6,0,1.3-0.4,1.8L6.4,6c0,0-0.1,0.1,0,0.2c0.7,1,1.3,1.6,2.4,2.4c0.1,0,0.1,0,0.2,0l0.4-0.4\n\tc0.5-0.5,1.2-0.6,1.8-0.4l2.2,0.7c0.7,0.2,1.2,0.9,1.2,1.7v2.3c0,0.5-0.2,1-0.6,1.3C13.7,14,13.3,14.2,12.9,14.2z M2.5,1.4\n\tc-0.2,0-0.4,0.1-0.6,0.2C1.8,1.8,1.7,1.9,1.8,2.1C2.3,8,7,12.6,12.8,13.2l0,0c0.2,0,0.4,0,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6v-2.3\n\tc0-0.3-0.2-0.6-0.5-0.7l-2.2-0.7c-0.3-0.1-0.6,0-0.8,0.2L9.6,9.2c-0.4,0.4-1,0.4-1.4,0.1C7,8.5,6.3,7.9,5.6,6.7\n\tc-0.3-0.4-0.2-1,0.1-1.4L6.1,5c0.2-0.2,0.3-0.5,0.2-0.8L5.5,1.9C5.4,1.6,5.1,1.4,4.8,1.4H2.5z M14,5.2c-0.3,0-0.5-0.2-0.5-0.5\n\tc0-1.9-1.5-3.4-3.4-3.4c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5c2.4,0,4.4,2,4.4,4.4C14.5,5,14.3,5.2,14,5.2z M11.5,5.2\n\tC11.2,5.2,11,5,11,4.8C11,4.3,10.6,4,10.2,4C9.9,4,9.7,3.7,9.7,3.5S9.9,3,10.2,3c1,0,1.8,0.8,1.8,1.8C12,5,11.8,5.2,11.5,5.2z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 15 15' },
            { style: 'enable-background:new 0 0 15 15;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function gn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function un(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'fal' },
        { 'data-icon': 'play-circle' },
        { class: 'svg-inline--fa fa-play-circle fa-w-16' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 512 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'fal' },
            { 'data-icon': 'play-circle' },
            { class: 'svg-inline--fa fa-play-circle fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function fn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function mn(n) {
    let s,
      a,
      l,
      r,
      i = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 24 10' },
        { style: 'enable-background:new 0 0 24 10;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      o = {};
    for (let e = 0; e < i.length; e += 1) o = t(o, i[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), (l = b('path')), (r = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)),
          T(a).forEach(x),
          (l = M(t, 'path', { d: !0 }, 1)),
          T(l).forEach(x),
          (r = M(t, 'path', { d: !0 }, 1)),
          T(r).forEach(x),
          t.forEach(x),
          this.h();
      },
      h() {
        B(
          a,
          'd',
          'M0,9V0.4h3.7c0.9,0,1.6,0.1,2,0.2c0.4,0.2,0.8,0.4,1,0.8C6.9,1.9,7,2.3,7,2.8C7,3.5,6.8,4,6.5,4.4C6.1,4.8,5.5,5.1,4.8,5.2\n\tc0.4,0.2,0.7,0.5,0.9,0.7c0.2,0.3,0.6,0.7,1,1.4l1,1.7H5.6L4.4,7.1C3.9,6.5,3.6,6,3.5,5.9C3.3,5.7,3.1,5.6,3,5.5\n\tC2.8,5.4,2.5,5.4,2.1,5.4H1.7V9H0z M1.7,4H3c0.8,0,1.4,0,1.6-0.1s0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.6c0-0.3-0.1-0.5-0.2-0.7\n\tC4.9,2.1,4.6,1.9,4.4,1.9c-0.1,0-0.6,0-1.3,0H1.7V4z'
        ),
          B(
            l,
            'd',
            'M8.2,6.2L9.9,6c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.3,0.4c0.6,0,1-0.1,1.3-0.4c0.3-0.2,0.4-0.5,0.4-0.8\n\tc0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.7-0.2-1.4-0.4c-0.9-0.2-1.6-0.5-2-0.8c-0.5-0.5-0.8-1-0.8-1.7\n\tc0-0.4,0.1-0.8,0.4-1.2C9.2,1.1,9.5,0.8,10,0.6c0.5-0.2,1-0.3,1.7-0.3c1.1,0,1.9,0.2,2.4,0.7c0.5,0.5,0.8,1.1,0.9,1.9l-1.7,0.1\n\tC13.2,2.5,13,2.2,12.8,2c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc0.2,0.2,0.8,0.4,1.6,0.6c0.8,0.2,1.5,0.4,1.9,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4\n\tc-0.3,0.4-0.7,0.8-1.2,1c-0.5,0.2-1.1,0.3-1.9,0.3c-1.1,0-1.9-0.2-2.5-0.8C8.7,7.9,8.3,7.2,8.2,6.2z'
          ),
          B(
            r,
            'd',
            'M16.2,6.2L17.9,6c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.3,0.4c0.6,0,1-0.1,1.3-0.4c0.3-0.2,0.4-0.5,0.4-0.8\n\tc0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.7-0.2-1.4-0.4c-0.9-0.2-1.6-0.5-2-0.8c-0.5-0.5-0.8-1-0.8-1.7\n\tc0-0.4,0.1-0.8,0.4-1.2c0.2-0.4,0.6-0.7,1.1-0.9c0.5-0.2,1-0.3,1.7-0.3c1.1,0,1.9,0.2,2.4,0.7c0.5,0.5,0.8,1.1,0.9,1.9l-1.7,0.1\n\tC21.2,2.5,21,2.2,20.8,2c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc0.2,0.2,0.8,0.4,1.6,0.6c0.8,0.2,1.5,0.4,1.9,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4\n\tc-0.3,0.4-0.7,0.8-1.2,1c-0.5,0.2-1.1,0.3-1.9,0.3c-1.1,0-1.9-0.2-2.5-0.8C16.7,7.9,16.3,7.2,16.2,6.2z'
          ),
          N(s, o);
      },
      m(e, t) {
        h(e, s, t), $(s, a), $(s, l), $(s, r);
      },
      p(e, [t]) {
        N(
          s,
          (o = ce(i, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 24 10' },
            { style: 'enable-background:new 0 0 24 10;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function pn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function $n(n) {
    let s,
      a,
      l = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 320 512' }, n[0]],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(e, 'svg', { xmlns: !0, viewBox: !0 }, 1);
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(s, (r = ce(l, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 320 512' }, 1 & t && e[0]])));
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function hn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function xn(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'star' },
        { class: 'svg-inline--fa fa-star fa-w-18' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 576 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'star' },
            { class: 'svg-inline--fa fa-star fa-w-18' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 576 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function vn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function wn(n) {
    let s,
      a,
      l = [
        { id: 'tag-regular' },
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'tag' },
        { class: 'svg-inline--fa fa-tag fa-w-16' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 512 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            id: !0,
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a47.998 47.998 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM259.886 463.996L48 252.118V48h204.118L464 259.882 259.886 463.996zM192 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { id: 'tag-regular' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'tag' },
            { class: 'svg-inline--fa fa-tag fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function bn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function yn(n) {
    let s,
      a,
      l = [
        { id: 'tag-solid' },
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'fas' },
        { 'data-icon': 'tag' },
        { class: 'svg-inline--fa fa-tag fa-w-16' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 512 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            id: !0,
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { id: 'tag-solid' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'fas' },
            { 'data-icon': 'tag' },
            { class: 'svg-inline--fa fa-tag fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function kn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Cn(n) {
    let s,
      a,
      l = [
        { id: 'tags-regular' },
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'tags' },
        { class: 'svg-inline--fa fa-tags fa-w-20' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 640 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            id: !0,
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-.36-.36L592 259.882 331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zm-128 0L293.823 497.941C284.451 507.314 272.166 512 259.882 512c-12.284 0-24.569-4.686-33.941-14.059L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118a47.998 47.998 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zM464 259.882L252.118 48H48v204.118l211.886 211.878L464 259.882zM144 96c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { id: 'tags-regular' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'tags' },
            { class: 'svg-inline--fa fa-tags fa-w-20' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 640 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function zn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Bn(n) {
    let s,
      a,
      l = [
        { id: 'tags-solid' },
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'fas' },
        { 'data-icon': 'tags' },
        { class: 'svg-inline--fa fa-tags fa-w-20' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 640 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            id: !0,
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { id: 'tags-solid' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'fas' },
            { 'data-icon': 'tags' },
            { class: 'svg-inline--fa fa-tags fa-w-20' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 640 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Ln(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Nn(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'toggle-off' },
        { class: 'svg-inline--fa fa-toggle-off fa-w-18' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 576 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM48 256c0-79.583 64.404-144 144-144 79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144-79.582 0-144-64.404-144-144zm336 144h-65.02c86.704-76.515 86.683-211.504 0-288H384c79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'toggle-off' },
            { class: 'svg-inline--fa fa-toggle-off fa-w-18' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 576 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Tn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function Mn(n) {
    let s,
      a,
      l = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'toggle-on' },
        { class: 'svg-inline--fa fa-toggle-on fa-w-18' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 576 512' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          {
            'aria-hidden': !0,
            focusable: !0,
            'data-prefix': !0,
            'data-icon': !0,
            class: !0,
            role: !0,
            xmlns: !0,
            viewBox: !0,
          },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { fill: !0, d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(a, 'fill', 'currentColor'),
          B(
            a,
            'd',
            'M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 336c-79.6 0-144-64.4-144-144s64.4-144 144-144 144 64.4 144 144-64.4 144-144 144z'
          ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'toggle-on' },
            { class: 'svg-inline--fa fa-toggle-on fa-w-18' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 576 512' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Fn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  function En(n) {
    let s,
      a,
      l = [
        { version: '1.1' },
        { id: 'Layer_1' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 51 48' },
        { style: 'enable-background:new 0 0 51 48;' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      r = {};
    for (let e = 0; e < l.length; e += 1) r = t(r, l[e]);
    return {
      c() {
        (s = b('svg')), (a = b('path')), this.h();
      },
      l(e) {
        s = M(
          e,
          'svg',
          { version: !0, id: !0, xmlns: !0, 'xmlns:xlink': !0, x: !0, y: !0, viewBox: !0, style: !0, 'xml:space': !0 },
          1
        );
        var t = T(s);
        (a = M(t, 'path', { d: !0 }, 1)), T(a).forEach(x), t.forEach(x), this.h();
      },
      h() {
        B(
          a,
          'd',
          'M45,47.5H6.1c-3.1,0-5.6-2.5-5.6-5.6V6.1C0.5,3,3,0.5,6.1,0.5H45c3.1,0,5.6,2.5,5.6,5.6v35.8\n\tC50.6,45,48.1,47.5,45,47.5z M6.1,3.5c-1.4,0-2.6,1.2-2.6,2.6v35.8c0,1.4,1.2,2.6,2.6,2.6H45c1.4,0,2.6-1.2,2.6-2.6V6.1\n\tc0-1.4-1.2-2.6-2.6-2.6H6.1z M30.7,43.4c-2.1,0-3.5-1.5-3.5-3.5v-0.5h-19c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h19v-0.5\n\tc0-2.1,1.5-3.5,3.5-3.5s3.5,1.5,3.5,3.5v0.5H43c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5h-8.7v0.5C34.2,41.9,32.8,43.4,30.7,43.4z\n\t M30.1,37.8v2c0,0.4,0.1,0.5,0.5,0.5s0.5-0.1,0.5-0.5v-4.1c0-0.4-0.1-0.5-0.5-0.5s-0.5,0.1-0.5,0.5V37.8z M20.2,30.3\n\tc-0.5,0-0.9-0.1-1.3-0.4c-0.8-0.5-1.3-1.3-1.3-2.3V13.7c0-1,0.6-1.9,1.4-2.4c0.9-0.5,1.9-0.4,2.6,0.1l12,6.9\n\tc0.8,0.4,1.4,1.3,1.4,2.3c0,1-0.6,1.9-1.4,2.4l-12,6.9c0,0-0.1,0-0.1,0C21.1,30.2,20.6,30.3,20.2,30.3z M20.8,28.7L20.8,28.7\n\tL20.8,28.7z M20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6z M20.7,14.3V27l11-6.3L20.7,14.3z M32.2,21\n\tC32.2,21,32.2,21,32.2,21L32.2,21z M32.2,20.4C32.2,20.4,32.2,20.4,32.2,20.4L32.2,20.4z M19.8,13.8C19.8,13.8,19.8,13.8,19.8,13.8\n\tC19.8,13.8,19.8,13.8,19.8,13.8z'
        ),
          N(s, r);
      },
      m(e, t) {
        h(e, s, t), $(s, a);
      },
      p(e, [t]) {
        N(
          s,
          (r = ce(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 51 48' },
            { style: 'enable-background:new 0 0 51 48;' },
            { 'xml:space': 'preserve' },
            1 & t && e[0],
          ]))
        );
      },
      i: e,
      o: e,
      d(e) {
        e && x(s);
      },
    };
  }
  function Sn(e, n, s) {
    return (
      (e.$$set = (e) => {
        s(0, (n = t(t({}, n), u(e))));
      }),
      [(n = u(n))]
    );
  }
  var Hn = Object.freeze({
    __proto__: null,
    angledown: class extends $e {
      constructor(e) {
        super(), pe(this, e, mt, ft, r, {});
      }
    },
    angleleft: class extends $e {
      constructor(e) {
        super(), pe(this, e, $t, pt, r, {});
      }
    },
    angleright: class extends $e {
      constructor(e) {
        super(), pe(this, e, xt, ht, r, {});
      }
    },
    angleup: class extends $e {
      constructor(e) {
        super(), pe(this, e, wt, vt, r, {});
      }
    },
    articleline: class extends $e {
      constructor(e) {
        super(), pe(this, e, yt, bt, r, {});
      }
    },
    article: class extends $e {
      constructor(e) {
        super(), pe(this, e, Ct, kt, r, {});
      }
    },
    at: class extends $e {
      constructor(e) {
        super(), pe(this, e, Bt, zt, r, {});
      }
    },
    check: class extends $e {
      constructor(e) {
        super(), pe(this, e, Nt, Lt, r, {});
      }
    },
    clock: class extends $e {
      constructor(e) {
        super(), pe(this, e, Mt, Tt, r, {});
      }
    },
    creditcard: class extends $e {
      constructor(e) {
        super(), pe(this, e, Et, Ft, r, {});
      }
    },
    ebplus_icon: class extends $e {
      constructor(e) {
        super(), pe(this, e, Ht, St, r, {});
      }
    },
    ebplus_sort: class extends $e {
      constructor(e) {
        super(), pe(this, e, _t, At, r, {});
      }
    },
    envelope: class extends $e {
      constructor(e) {
        super(), pe(this, e, jt, Pt, r, {});
      }
    },
    figcaptionpin: class extends $e {
      constructor(e) {
        super(), pe(this, e, Ot, Vt, r, {});
      }
    },
    gallery: class extends $e {
      constructor(e) {
        super(), pe(this, e, qt, Dt, r, {});
      }
    },
    headphones: class extends $e {
      constructor(e) {
        super(), pe(this, e, Rt, It, r, {});
      }
    },
    headset: class extends $e {
      constructor(e) {
        super(), pe(this, e, Ut, Gt, r, {});
      }
    },
    historyregular: class extends $e {
      constructor(e) {
        super(), pe(this, e, Wt, Yt, r, {});
      }
    },
    lockold: class extends $e {
      constructor(e) {
        super(), pe(this, e, Jt, Zt, r, {});
      }
    },
    lock: class extends $e {
      constructor(e) {
        super(), pe(this, e, Kt, Xt, r, {});
      }
    },
    medielogin: class extends $e {
      constructor(e) {
        super(), pe(this, e, en, Qt, r, {});
      }
    },
    menubars: class extends $e {
      constructor(e) {
        super(), pe(this, e, nn, tn, r, {});
      }
    },
    mitebregular: class extends $e {
      constructor(e) {
        super(), pe(this, e, an, sn, r, {});
      }
    },
    mitebsolid: class extends $e {
      constructor(e) {
        super(), pe(this, e, rn, ln, r, {});
      }
    },
    newspaper: class extends $e {
      constructor(e) {
        super(), pe(this, e, cn, on, r, {});
      }
    },
    phone: class extends $e {
      constructor(e) {
        super(), pe(this, e, gn, dn, r, {});
      }
    },
    play: class extends $e {
      constructor(e) {
        super(), pe(this, e, fn, un, r, {});
      }
    },
    rss: class extends $e {
      constructor(e) {
        super(), pe(this, e, pn, mn, r, {});
      }
    },
    smartphone: class extends $e {
      constructor(e) {
        super(), pe(this, e, hn, $n, r, {});
      }
    },
    starregular: class extends $e {
      constructor(e) {
        super(), pe(this, e, vn, xn, r, {});
      }
    },
    tagregular: class extends $e {
      constructor(e) {
        super(), pe(this, e, bn, wn, r, {});
      }
    },
    tagsolid: class extends $e {
      constructor(e) {
        super(), pe(this, e, kn, yn, r, {});
      }
    },
    tagsregular: class extends $e {
      constructor(e) {
        super(), pe(this, e, zn, Cn, r, {});
      }
    },
    tagssolid: class extends $e {
      constructor(e) {
        super(), pe(this, e, Ln, Bn, r, {});
      }
    },
    toggleoff: class extends $e {
      constructor(e) {
        super(), pe(this, e, Tn, Nn, r, {});
      }
    },
    toggleon: class extends $e {
      constructor(e) {
        super(), pe(this, e, Fn, Mn, r, {});
      }
    },
    video: class extends $e {
      constructor(e) {
        super(), pe(this, e, Sn, En, r, {});
      }
    },
  });
  function An(t) {
    let n;
    return {
      c() {
        (n = w('i')), B(n, 'class', t[1]), B(n, 'aria-hidden', 'true');
      },
      m(e, t) {
        h(e, n, t);
      },
      p(e, t) {
        2 & t && B(n, 'class', e[1]);
      },
      i: e,
      o: e,
      d(e) {
        e && x(n);
      },
    };
  }
  function _n(e) {
    let t, n, s;
    var a = Hn[e[2].replace('-', '')];
    function l(e) {
      return { props: { style: e[0], class: e[5], 'data-flipped': e[3] } };
    }
    return (
      a && ((t = new a(l(e))), t.$on('click', e[7])),
      {
        c() {
          t && ue(t.$$.fragment), (n = C());
        },
        m(e, a) {
          t && fe(t, e, a), h(e, n, a), (s = !0);
        },
        p(e, s) {
          const r = {};
          if ((1 & s && (r.style = e[0]), 8 & s && (r['data-flipped'] = e[3]), a !== (a = Hn[e[2].replace('-', '')]))) {
            if (t) {
              le();
              const e = t;
              oe(e.$$.fragment, 1, 0, () => {
                me(e, 1);
              }),
                re();
            }
            a
              ? ((t = new a(l(e))),
                t.$on('click', e[7]),
                ue(t.$$.fragment),
                ie(t.$$.fragment, 1),
                fe(t, n.parentNode, n))
              : (t = null);
          } else a && t.$set(r);
        },
        i(e) {
          s || (t && ie(t.$$.fragment, e), (s = !0));
        },
        o(e) {
          t && oe(t.$$.fragment, e), (s = !1);
        },
        d(e) {
          e && x(n), t && me(t, e);
        },
      }
    );
  }
  function Pn(e) {
    let t, n, s, a;
    const l = [_n, An],
      r = [];
    function i(e, t) {
      return 'svg' === e[4] ? 0 : 1;
    }
    return (
      (t = i(e)),
      (n = r[t] = l[t](e)),
      {
        c() {
          n.c(), (s = C());
        },
        m(e, n) {
          r[t].m(e, n), h(e, s, n), (a = !0);
        },
        p(e, [a]) {
          let o = t;
          (t = i(e)),
            t === o
              ? r[t].p(e, a)
              : (le(),
                oe(r[o], 1, 1, () => {
                  r[o] = null;
                }),
                re(),
                (n = r[t]),
                n ? n.p(e, a) : ((n = r[t] = l[t](e)), n.c()),
                ie(n, 1),
                n.m(s.parentNode, s));
        },
        i(e) {
          a || (ie(n), (a = !0));
        },
        o(e) {
          oe(n), (a = !1);
        },
        d(e) {
          r[t].d(e), e && x(s);
        },
      }
    );
  }
  function jn(e, t, n) {
    let { className: s } = t,
      { name: a } = t,
      { flipped: l = !1 } = t,
      { type: r = 'svg' } = t,
      { width: i = 36 } = t,
      { style: o } = t;
    const c = `width: ${i}px; height: ${i}px;`;
    let d = s ? `icon-svg ${s}` : 'icon-svg';
    return (
      (e.$$set = (e) => {
        'className' in e && n(1, (s = e.className)),
          'name' in e && n(2, (a = e.name)),
          'flipped' in e && n(3, (l = e.flipped)),
          'type' in e && n(4, (r = e.type)),
          'width' in e && n(6, (i = e.width)),
          'style' in e && n(0, (o = e.style));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(0, (o = o ? `${c} ${o}` : c));
      }),
      [
        o,
        s,
        a,
        l,
        r,
        d,
        i,
        function (t) {
          I(e, t);
        },
      ]
    );
  }
  class Vn extends $e {
    constructor(e) {
      super(), pe(this, e, jn, Pn, r, { className: 1, name: 2, flipped: 3, type: 4, width: 6, style: 0 });
    }
  }
  function On(e) {
    let t, n;
    return {
      c() {
        (t = w('div')),
          (n = w('div')),
          B(n, 'class', 'card-image bg--graa4'),
          B(n, 'style', e[13]),
          B(t, 'class', 'card-media');
      },
      m(e, s) {
        h(e, t, s), $(t, n);
      },
      p(e, t) {
        8192 & t && B(n, 'style', e[13]);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Dn(e) {
    let t, n, s, a, l;
    return {
      c() {
        (t = w('div')),
          (n = w('img')),
          B(n, 'alt', e[0]),
          B(n, 'class', 'card-image'),
          n.src !== (s = e[5].src) && B(n, 'src', s),
          B(n, 'height', (a = e[5].height)),
          B(n, 'width', (l = e[5].width)),
          B(t, 'class', 'card-media');
      },
      m(e, s) {
        h(e, t, s), $(t, n);
      },
      p(e, t) {
        1 & t && B(n, 'alt', e[0]),
          32 & t && n.src !== (s = e[5].src) && B(n, 'src', s),
          32 & t && a !== (a = e[5].height) && B(n, 'height', a),
          32 & t && l !== (l = e[5].width) && B(n, 'width', l);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function qn(e) {
    let t, n;
    return (
      (t = new Vn({ props: { name: 'ebplus_icon', width: '20' } })),
      {
        c() {
          ue(t.$$.fragment);
        },
        m(e, s) {
          fe(t, e, s), (n = !0);
        },
        i(e) {
          n || (ie(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          me(t, e);
        },
      }
    );
  }
  function In(e) {
    let t,
      n,
      s,
      a = e[6] && Rn(e),
      l = e[7] && Gn(e);
    return {
      c() {
        (t = w('div')),
          a && a.c(),
          (n = k()),
          l && l.c(),
          B(t, 'class', 'card-meta flex fontsize-xxsmall padding-s--b');
      },
      m(e, r) {
        h(e, t, r), a && a.m(t, null), $(t, n), l && l.m(t, null), (s = !0);
      },
      p(e, s) {
        e[6]
          ? a
            ? (a.p(e, s), 64 & s && ie(a, 1))
            : ((a = Rn(e)), a.c(), ie(a, 1), a.m(t, n))
          : a &&
            (le(),
            oe(a, 1, 1, () => {
              a = null;
            }),
            re()),
          e[7]
            ? l
              ? (l.p(e, s), 128 & s && ie(l, 1))
              : ((l = Gn(e)), l.c(), ie(l, 1), l.m(t, null))
            : l &&
              (le(),
              oe(l, 1, 1, () => {
                l = null;
              }),
              re());
      },
      i(e) {
        s || (ie(a), ie(l), (s = !0));
      },
      o(e) {
        oe(a), oe(l), (s = !1);
      },
      d(e) {
        e && x(t), a && a.d(), l && l.d();
      },
    };
  }
  function Rn(e) {
    let t, n, s, a, l, r, i;
    return (
      (s = new Vn({ props: { flipped: !0, name: 'tag-regular', width: '12' } })),
      {
        c() {
          (t = w('div')),
            (n = w('span')),
            ue(s.$$.fragment),
            (a = k()),
            (l = w('span')),
            (r = y(e[6])),
            B(l, 'class', 'padding-s--l'),
            B(n, 'class', 'flex flex-justify--center'),
            B(t, 'class', 'card-meta-item');
        },
        m(e, o) {
          h(e, t, o), $(t, n), fe(s, n, null), $(n, a), $(n, l), $(l, r), (i = !0);
        },
        p(e, t) {
          (!i || 64 & t) && F(r, e[6]);
        },
        i(e) {
          i || (ie(s.$$.fragment, e), (i = !0));
        },
        o(e) {
          oe(s.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && x(t), me(s);
        },
      }
    );
  }
  function Gn(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i = Pe(e[7]) + '';
    return (
      (n = new Vn({ props: { name: 'clock', width: '12' } })),
      {
        c() {
          (t = w('div')),
            ue(n.$$.fragment),
            (s = k()),
            (a = w('span')),
            (l = y(i)),
            B(a, 'class', 'padding-s--l'),
            B(t, 'class', 'card-meta-item');
        },
        m(e, i) {
          h(e, t, i), fe(n, t, null), $(t, s), $(t, a), $(a, l), (r = !0);
        },
        p(e, t) {
          (!r || 128 & t) && i !== (i = Pe(e[7]) + '') && F(l, i);
        },
        i(e) {
          r || (ie(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && x(t), me(n);
        },
      }
    );
  }
  function Un(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f = e[4] && On(e),
      m = e[5] && Dn(e),
      p = e[3] && qn(),
      v = (e[6] || e[7]) && In(e);
    return {
      c() {
        (t = w('div')),
          f && f.c(),
          (n = k()),
          m && m.c(),
          (s = k()),
          (a = w('div')),
          (l = w('div')),
          p && p.c(),
          (r = k()),
          (i = w('div')),
          v && v.c(),
          (o = k()),
          (c = w('h2')),
          (d = y(e[0])),
          B(l, 'class', 'card-icon flex flex-justify--end'),
          B(c, 'class', (g = 'card-title ' + (e[8] ? 'card-title--truncated' : ''))),
          B(c, 'style', e[17]),
          B(i, 'class', 'card-content'),
          B(a, 'class', 'card-content-wrapper'),
          B(t, 'class', e[14]);
      },
      m(e, g) {
        h(e, t, g),
          f && f.m(t, null),
          $(t, n),
          m && m.m(t, null),
          $(t, s),
          $(t, a),
          $(a, l),
          p && p.m(l, null),
          $(a, r),
          $(a, i),
          v && v.m(i, null),
          $(i, o),
          $(i, c),
          $(c, d),
          (u = !0);
      },
      p(e, a) {
        e[4] ? (f ? f.p(e, a) : ((f = On(e)), f.c(), f.m(t, n))) : f && (f.d(1), (f = null)),
          e[5] ? (m ? m.p(e, a) : ((m = Dn(e)), m.c(), m.m(t, s))) : m && (m.d(1), (m = null)),
          e[3]
            ? p
              ? 8 & a && ie(p, 1)
              : ((p = qn()), p.c(), ie(p, 1), p.m(l, null))
            : p &&
              (le(),
              oe(p, 1, 1, () => {
                p = null;
              }),
              re()),
          e[6] || e[7]
            ? v
              ? (v.p(e, a), 192 & a && ie(v, 1))
              : ((v = In(e)), v.c(), ie(v, 1), v.m(i, o))
            : v &&
              (le(),
              oe(v, 1, 1, () => {
                v = null;
              }),
              re()),
          (!u || 1 & a) && F(d, e[0]),
          (!u || (256 & a && g !== (g = 'card-title ' + (e[8] ? 'card-title--truncated' : '')))) && B(c, 'class', g),
          (!u || 16384 & a) && B(t, 'class', e[14]);
      },
      i(e) {
        u || (ie(p), ie(v), (u = !0));
      },
      o(e) {
        oe(p), oe(v), (u = !1);
      },
      d(e) {
        e && x(t), f && f.d(), m && m.d(), p && p.d(), v && v.d();
      },
    };
  }
  function Yn(e) {
    let t, n;
    return (
      (t = new ut({
        props: {
          href: e[1],
          className: e[16],
          style: e[15],
          'data-breaking': e[2],
          intersection: e[9],
          intersectionRoot: e[10],
          intersectionThreshold: e[11],
          intersectionData: e[12],
          $$slots: { default: [Un] },
          $$scope: { ctx: e },
        },
      })),
      t.$on('click', e[24]),
      {
        c() {
          ue(t.$$.fragment);
        },
        m(e, s) {
          fe(t, e, s), (n = !0);
        },
        p(e, [n]) {
          const s = {};
          2 & n && (s.href = e[1]),
            65536 & n && (s.className = e[16]),
            32768 & n && (s.style = e[15]),
            4 & n && (s['data-breaking'] = e[2]),
            512 & n && (s.intersection = e[9]),
            1024 & n && (s.intersectionRoot = e[10]),
            2048 & n && (s.intersectionThreshold = e[11]),
            4096 & n && (s.intersectionData = e[12]),
            33579513 & n && (s.$$scope = { dirty: n, ctx: e }),
            t.$set(s);
        },
        i(e) {
          n || (ie(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          me(t, e);
        },
      }
    );
  }
  function Wn(e, t, n) {
    let s,
      a,
      { title: l } = t,
      { className: r } = t,
      { colorClass: i } = t,
      { href: o } = t,
      { isBreaking: c = !1 } = t,
      { isPlus: d = !1 } = t,
      { loading: g = !1 } = t,
      { maxLines: u } = t,
      { media: f } = t,
      { section: m } = t,
      { style: p = '' } = t,
      { timestamp: $ } = t,
      { truncateTitle: h = !1 } = t,
      { type: x } = t,
      { intersection: v = !1 } = t,
      { intersectionRoot: w } = t,
      { intersectionThreshold: b = 0.5 } = t,
      { intersectionData: y = {} } = t,
      k = 'card-mode card-mode--article margin-s',
      C = 'padding-top: 56.25%; width: 100%;';
    if (g)
      switch (((k = `${k} animation-fogwave`), (l = 'Loading'), x)) {
        case 'small-media':
        case 'small-media--reverse':
          C = 'width: 200px;height: 115px;';
      }
    let z = 'card-inner';
    switch (x) {
      case 'mode':
        k = 'card-mode card-mode--article';
        break;
      case 'small-media':
        z = `${z} card--small-media`;
        break;
      case 'small-media--reverse':
        z = `${z} card--small-media card--small-media--reverse`;
    }
    const B = u ? `--max-lines: ${u};` : void 0;
    return (
      (e.$$set = (e) => {
        'title' in e && n(0, (l = e.title)),
          'className' in e && n(18, (r = e.className)),
          'colorClass' in e && n(19, (i = e.colorClass)),
          'href' in e && n(1, (o = e.href)),
          'isBreaking' in e && n(2, (c = e.isBreaking)),
          'isPlus' in e && n(3, (d = e.isPlus)),
          'loading' in e && n(4, (g = e.loading)),
          'maxLines' in e && n(20, (u = e.maxLines)),
          'media' in e && n(5, (f = e.media)),
          'section' in e && n(6, (m = e.section)),
          'style' in e && n(21, (p = e.style)),
          'timestamp' in e && n(7, ($ = e.timestamp)),
          'truncateTitle' in e && n(8, (h = e.truncateTitle)),
          'type' in e && n(22, (x = e.type)),
          'intersection' in e && n(9, (v = e.intersection)),
          'intersectionRoot' in e && n(10, (w = e.intersectionRoot)),
          'intersectionThreshold' in e && n(11, (b = e.intersectionThreshold)),
          'intersectionData' in e && n(12, (y = e.intersectionData));
      }),
      (e.$$.update = () => {
        2621440 & e.$$.dirty &&
          n(15, (s = `${p}; --color--list-hover: var(--color--${i}); --fgcolor--list-hover: var(--fgcolor--${i});`)),
          8650752 & e.$$.dirty && n(16, (a = r ? `${r} ${k}` : k));
      }),
      [
        l,
        o,
        c,
        d,
        g,
        f,
        m,
        $,
        h,
        v,
        w,
        b,
        y,
        C,
        z,
        s,
        a,
        B,
        r,
        i,
        u,
        p,
        x,
        k,
        function (t) {
          I(e, t);
        },
      ]
    );
  }
  class Zn extends $e {
    constructor(e) {
      super(),
        pe(this, e, Wn, Yn, r, {
          title: 0,
          className: 18,
          colorClass: 19,
          href: 1,
          isBreaking: 2,
          isPlus: 3,
          loading: 4,
          maxLines: 20,
          media: 5,
          section: 6,
          style: 21,
          timestamp: 7,
          truncateTitle: 8,
          type: 22,
          intersection: 9,
          intersectionRoot: 10,
          intersectionThreshold: 11,
          intersectionData: 12,
        });
    }
  }
  function Jn(e) {
    let t, n, s, a;
    const l = e[8].default,
      r = c(l, e, e[7], null);
    return {
      c() {
        (t = w('span')), r && r.c(), B(t, 'class', e[3]), B(t, 'style', e[1]), B(t, 'data-type', e[2]);
      },
      m(l, i) {
        h(l, t, i), r && r.m(t, null), (n = !0), s || ((a = z(t, 'click', e[10])), (s = !0));
      },
      p(e, s) {
        r && r.p && (!n || 128 & s) && g(r, l, e, e[7], s, null, null),
          (!n || 8 & s) && B(t, 'class', e[3]),
          (!n || 2 & s) && B(t, 'style', e[1]),
          (!n || 4 & s) && B(t, 'data-type', e[2]);
      },
      i(e) {
        n || (ie(r, e), (n = !0));
      },
      o(e) {
        oe(r, e), (n = !1);
      },
      d(e) {
        e && x(t), r && r.d(e), (s = !1), a();
      },
    };
  }
  function Xn(e) {
    let t, n, s, a;
    const l = e[8].default,
      r = c(l, e, e[7], null);
    return {
      c() {
        (t = w('a')), r && r.c(), B(t, 'href', e[0]), B(t, 'class', e[3]), B(t, 'style', e[1]), B(t, 'data-type', e[2]);
      },
      m(l, i) {
        h(l, t, i), r && r.m(t, null), (n = !0), s || ((a = z(t, 'click', e[9])), (s = !0));
      },
      p(e, s) {
        r && r.p && (!n || 128 & s) && g(r, l, e, e[7], s, null, null),
          (!n || 1 & s) && B(t, 'href', e[0]),
          (!n || 8 & s) && B(t, 'class', e[3]),
          (!n || 2 & s) && B(t, 'style', e[1]),
          (!n || 4 & s) && B(t, 'data-type', e[2]);
      },
      i(e) {
        n || (ie(r, e), (n = !0));
      },
      o(e) {
        oe(r, e), (n = !1);
      },
      d(e) {
        e && x(t), r && r.d(e), (s = !1), a();
      },
    };
  }
  function Kn(e) {
    let t, n, s, a;
    const l = [Xn, Jn],
      r = [];
    function i(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = i(e)),
      (n = r[t] = l[t](e)),
      {
        c() {
          n.c(), (s = C());
        },
        m(e, n) {
          r[t].m(e, n), h(e, s, n), (a = !0);
        },
        p(e, [a]) {
          let o = t;
          (t = i(e)),
            t === o
              ? r[t].p(e, a)
              : (le(),
                oe(r[o], 1, 1, () => {
                  r[o] = null;
                }),
                re(),
                (n = r[t]),
                n ? n.p(e, a) : ((n = r[t] = l[t](e)), n.c()),
                ie(n, 1),
                n.m(s.parentNode, s));
        },
        i(e) {
          a || (ie(n), (a = !0));
        },
        o(e) {
          oe(n), (a = !1);
        },
        d(e) {
          r[t].d(e), e && x(s);
        },
      }
    );
  }
  function Qn(e, t, n) {
    let s,
      { $$slots: a = {}, $$scope: l } = t,
      { className: r } = t,
      { extension: i } = t,
      { href: o } = t,
      { style: c } = t,
      { type: d } = t,
      g = 'badge';
    return (
      i &&
        ('string' == typeof i
          ? (g = `${g} button--${i}`)
          : Array.isArray(i) && (g = `${g} badge--${i.join(' badge--')}`)),
      (e.$$set = (e) => {
        'className' in e && n(4, (r = e.className)),
          'extension' in e && n(5, (i = e.extension)),
          'href' in e && n(0, (o = e.href)),
          'style' in e && n(1, (c = e.style)),
          'type' in e && n(2, (d = e.type)),
          '$$scope' in e && n(7, (l = e.$$scope));
      }),
      (e.$$.update = () => {
        80 & e.$$.dirty && n(3, (s = `${g} ${r}`));
      }),
      [
        o,
        c,
        d,
        s,
        r,
        i,
        g,
        l,
        a,
        function (t) {
          I(e, t);
        },
        function (t) {
          I(e, t);
        },
      ]
    );
  }
  class es extends $e {
    constructor(e) {
      super(), pe(this, e, Qn, Kn, r, { className: 4, extension: 5, href: 0, style: 1, type: 2 });
    }
  }
  function ts(e) {
    let t, n;
    const s = e[9].default,
      a = c(s, e, e[8], null);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', e[0]), B(t, 'style', e[1]);
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, [l]) {
        a && a.p && (!n || 256 & l) && g(a, s, e, e[8], l, null, null),
          (!n || 1 & l) && B(t, 'class', e[0]),
          (!n || 2 & l) && B(t, 'style', e[1]);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  const ns = {};
  function ss(e, t, n) {
    let s,
      a,
      { $$slots: l = {}, $$scope: r } = t;
    const i = [],
      o = [],
      c = ve(null),
      d = ve(null);
    D(ns, {
      registerTab: (e) => {
        i.push(e),
          c.update((t) => t || e),
          V(() => {
            const t = i.indexOf(e);
            i.splice(t, 1), c.update((n) => (n === e ? i[t] || i[i.length - 1] : n));
          });
      },
      registerPanel: (e) => {
        o.push(e),
          d.update((t) => t || e),
          V(() => {
            const t = o.indexOf(e);
            o.splice(t, 1), d.update((n) => (n === e ? o[t] || o[o.length - 1] : n));
          });
      },
      selectButton: (e) => {
        const t = i.indexOf(e);
        c.set(e), d.set(o[t]);
      },
      selectedButton: c,
      selectedPanel: d,
    });
    let { className: g } = t,
      { type: u } = t,
      { color: f } = t,
      { colorHover: m } = t,
      { solid: p = !1 } = t,
      $ = 'buttongroup';
    p && ($ = `${$} buttongroup--solid`), u && ($ = `${$} buttongroup--${u}`);
    const { backgroundColor: h, color: x } = _e[f] ? _e[f] : _e.Bruger;
    m = f && !m ? f : m;
    const { backgroundColor: v, color: w } = _e[m] ? _e[m] : _e.Bruger;
    return (
      (e.$$set = (e) => {
        'className' in e && n(3, (g = e.className)),
          'type' in e && n(4, (u = e.type)),
          'color' in e && n(5, (f = e.color)),
          'colorHover' in e && n(2, (m = e.colorHover)),
          'solid' in e && n(6, (p = e.solid)),
          '$$scope' in e && n(8, (r = e.$$scope));
      }),
      (e.$$.update = () => {
        136 & e.$$.dirty && n(0, (s = g ? `${g} ${$}` : $));
      }),
      n(
        1,
        (a = `--buttongroup-color: ${h}; --buttongroup-fgcolor: ${x}; --buttongroup-color--hover: ${v}; --buttongroup-fgcolor--hover: ${w};`)
      ),
      [s, a, m, g, u, f, p, $, r, l]
    );
  }
  class as extends $e {
    constructor(e) {
      super(), pe(this, e, ss, ts, r, { className: 3, type: 4, color: 5, colorHover: 2, solid: 6 });
    }
  }
  function ls(e) {
    let t, n, s, a, l;
    const r = e[14].default,
      i = c(r, e, e[13], null);
    return {
      c() {
        (t = w('button')),
          i && i.c(),
          B(t, 'class', e[4]),
          (t.disabled = e[0]),
          B(t, 'data-selected', (n = e[5] === e[6]));
      },
      m(n, r) {
        h(n, t, r), i && i.m(t, null), e[18](t), (s = !0), a || ((l = z(t, 'click', e[16])), (a = !0));
      },
      p(e, a) {
        i && i.p && (!s || 8192 & a) && g(i, r, e, e[13], a, null, null),
          (!s || 16 & a) && B(t, 'class', e[4]),
          (!s || 1 & a) && (t.disabled = e[0]),
          (!s || (32 & a && n !== (n = e[5] === e[6]))) && B(t, 'data-selected', n);
      },
      i(e) {
        s || (ie(i, e), (s = !0));
      },
      o(e) {
        oe(i, e), (s = !1);
      },
      d(n) {
        n && x(t), i && i.d(n), e[18](null), (a = !1), l();
      },
    };
  }
  function rs(e) {
    let t, n, s, a, l;
    const r = e[14].default,
      i = c(r, e, e[13], null);
    return {
      c() {
        (t = w('a')),
          i && i.c(),
          B(t, 'href', e[1]),
          B(t, 'class', e[4]),
          B(t, 'disabled', e[0]),
          B(t, 'data-selected', (n = e[5] === e[6]));
      },
      m(n, r) {
        h(n, t, r), i && i.m(t, null), e[17](t), (s = !0), a || ((l = z(t, 'click', e[15])), (a = !0));
      },
      p(e, a) {
        i && i.p && (!s || 8192 & a) && g(i, r, e, e[13], a, null, null),
          (!s || 2 & a) && B(t, 'href', e[1]),
          (!s || 16 & a) && B(t, 'class', e[4]),
          (!s || 1 & a) && B(t, 'disabled', e[0]),
          (!s || (32 & a && n !== (n = e[5] === e[6]))) && B(t, 'data-selected', n);
      },
      i(e) {
        s || (ie(i, e), (s = !0));
      },
      o(e) {
        oe(i, e), (s = !1);
      },
      d(n) {
        n && x(t), i && i.d(n), e[17](null), (a = !1), l();
      },
    };
  }
  function is(e) {
    let t, n, s, a;
    const l = [rs, ls],
      r = [];
    function i(e, t) {
      return e[1] ? 0 : 1;
    }
    return (
      (t = i(e)),
      (n = r[t] = l[t](e)),
      {
        c() {
          n.c(), (s = C());
        },
        m(e, n) {
          r[t].m(e, n), h(e, s, n), (a = !0);
        },
        p(e, [a]) {
          let o = t;
          (t = i(e)),
            t === o
              ? r[t].p(e, a)
              : (le(),
                oe(r[o], 1, 1, () => {
                  r[o] = null;
                }),
                re(),
                (n = r[t]),
                n ? n.p(e, a) : ((n = r[t] = l[t](e)), n.c()),
                ie(n, 1),
                n.m(s.parentNode, s));
        },
        i(e) {
          a || (ie(n), (a = !0));
        },
        o(e) {
          oe(n), (a = !1);
        },
        d(e) {
          r[t].d(e), e && x(s);
        },
      }
    );
  }
  function os(t, n, s) {
    let a,
      l,
      r = e;
    t.$$.on_destroy.push(() => r());
    let o,
      { $$slots: c = {}, $$scope: d } = n,
      { className: g } = n,
      { disabled: u = !1 } = n,
      { extension: f } = n,
      { href: m } = n,
      { size: p } = n,
      { type: $ } = n,
      h = 'button';
    if (f) {
      f.split(' ').forEach((e) => {
        s(12, (h = `${h} button--${e}`));
      });
    }
    p && (h = `${h} button--${p}`), $ && (h = `${h} button--${$}`);
    let x,
      v,
      w,
      { initial: b = !1 } = n;
    const y = {},
      k = q(ns);
    return (
      k &&
        ((x = k.registerTab),
        (v = k.selectButton),
        (w = k.selectedButton),
        r(),
        (r = i(w, (e) => s(5, (l = e)))),
        x(y),
        b && v(y)),
      P(() => {
        void 0 !== v && o.addEventListener('click', () => v(y));
      }),
      (t.$$set = (e) => {
        'className' in e && s(7, (g = e.className)),
          'disabled' in e && s(0, (u = e.disabled)),
          'extension' in e && s(8, (f = e.extension)),
          'href' in e && s(1, (m = e.href)),
          'size' in e && s(9, (p = e.size)),
          'type' in e && s(10, ($ = e.type)),
          'initial' in e && s(11, (b = e.initial)),
          '$$scope' in e && s(13, (d = e.$$scope));
      }),
      (t.$$.update = () => {
        4224 & t.$$.dirty && s(4, (a = g ? `${h} ${g}` : h));
      }),
      [
        u,
        m,
        o,
        w,
        a,
        l,
        y,
        g,
        f,
        p,
        $,
        b,
        h,
        d,
        c,
        function (e) {
          I(t, e);
        },
        function (e) {
          I(t, e);
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (o = e), s(2, o);
          });
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (o = e), s(2, o);
          });
        },
      ]
    );
  }
  class cs extends $e {
    constructor(e) {
      super(),
        pe(this, e, os, is, r, { className: 7, disabled: 0, extension: 8, href: 1, size: 9, type: 10, initial: 11 });
    }
  }
  function ds(e) {
    let t, n, s;
    return {
      c() {
        (t = w('i')),
          (n = k()),
          (s = w('i')),
          B(t, 'class', 'far fa-check-circle form-checkbox-toggle--on'),
          B(t, 'aria-hidden', 'true'),
          B(s, 'class', 'far fa-circle form-checkbox-toggle--off'),
          B(s, 'aria-hidden', 'true');
      },
      m(e, a) {
        h(e, t, a), h(e, n, a), h(e, s, a);
      },
      d(e) {
        e && x(t), e && x(n), e && x(s);
      },
    };
  }
  function gs(e) {
    let t, n, s;
    return {
      c() {
        (t = w('i')),
          (n = k()),
          (s = w('i')),
          B(t, 'class', 'far fa-check-square form-checkbox-toggle--on'),
          B(t, 'aria-hidden', 'true'),
          B(s, 'class', 'far fa-square form-checkbox-toggle--off'),
          B(s, 'aria-hidden', 'true');
      },
      m(e, a) {
        h(e, t, a), h(e, n, a), h(e, s, a);
      },
      d(e) {
        e && x(t), e && x(n), e && x(s);
      },
    };
  }
  function us(t) {
    let n, s, a, l, r, i;
    function o(e, t) {
      return 'checkbox' === e[3] ? gs : ds;
    }
    let c = o(t),
      d = c(t);
    return {
      c() {
        (n = w('label')),
          (s = w('input')),
          (a = k()),
          (l = w('span')),
          (r = y(t[2])),
          (i = k()),
          d.c(),
          B(s, 'type', t[3]),
          B(s, 'class', t[5]),
          B(s, 'name', t[0]),
          B(s, 'group', t[1]),
          (s.value = t[4]),
          B(l, 'class', 'form-label');
      },
      m(e, t) {
        h(e, n, t), $(n, s), $(n, a), $(n, l), $(l, r), $(l, i), d.m(l, null);
      },
      p(e, [t]) {
        8 & t && B(s, 'type', e[3]),
          32 & t && B(s, 'class', e[5]),
          1 & t && B(s, 'name', e[0]),
          2 & t && B(s, 'group', e[1]),
          16 & t && s.value !== e[4] && (s.value = e[4]),
          4 & t && F(r, e[2]),
          c !== (c = o(e)) && (d.d(1), (d = c(e)), d && (d.c(), d.m(l, null)));
      },
      i: e,
      o: e,
      d(e) {
        e && x(n), d.d();
      },
    };
  }
  function fs(e, t, n) {
    let { fieldName: s } = t,
      { group: a } = t,
      { label: l } = t,
      { inputtype: r = 'checkbox' } = t,
      { value: i } = t,
      { className: o } = t,
      c = 'form-checkbox form-checkbox--icon';
    return (
      o && (c = `${o} ${c}`),
      (e.$$set = (e) => {
        'fieldName' in e && n(0, (s = e.fieldName)),
          'group' in e && n(1, (a = e.group)),
          'label' in e && n(2, (l = e.label)),
          'inputtype' in e && n(3, (r = e.inputtype)),
          'value' in e && n(4, (i = e.value)),
          'className' in e && n(6, (o = e.className));
      }),
      [s, a, l, r, i, c, o]
    );
  }
  class ms extends $e {
    constructor(e) {
      super(), pe(this, e, fs, us, r, { fieldName: 0, group: 1, label: 2, inputtype: 3, value: 4, className: 6 });
    }
  }
  function ps(e) {
    let t, n, s, a, l;
    const r = e[5].default,
      i = c(r, e, e[4], null);
    return {
      c() {
        (t = w('label')),
          (n = y(e[0])),
          (s = k()),
          (a = w('select')),
          i && i.c(),
          B(t, 'class', 'form-label'),
          B(t, 'for', 'select'),
          B(a, 'classname', e[1]),
          B(a, 'id', 'select');
      },
      m(e, r) {
        h(e, t, r), $(t, n), h(e, s, r), h(e, a, r), i && i.m(a, null), (l = !0);
      },
      p(e, [t]) {
        (!l || 1 & t) && F(n, e[0]),
          i && i.p && (!l || 16 & t) && g(i, r, e, e[4], t, null, null),
          (!l || 2 & t) && B(a, 'classname', e[1]);
      },
      i(e) {
        l || (ie(i, e), (l = !0));
      },
      o(e) {
        oe(i, e), (l = !1);
      },
      d(e) {
        e && x(t), e && x(s), e && x(a), i && i.d(e);
      },
    };
  }
  function $s(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t,
      { inputtype: l = 'text' } = t,
      { label: r } = t,
      { className: i } = t,
      o = `form-input form-input--${l}`;
    return (
      i && (o = `${i} ${o}`),
      (e.$$set = (e) => {
        'inputtype' in e && n(2, (l = e.inputtype)),
          'label' in e && n(0, (r = e.label)),
          'className' in e && n(3, (i = e.className)),
          '$$scope' in e && n(4, (a = e.$$scope));
      }),
      [r, o, l, i, a, s]
    );
  }
  class hs extends $e {
    constructor(e) {
      super(), pe(this, e, $s, ps, r, { inputtype: 2, label: 0, className: 3 });
    }
  }
  function xs(e) {
    let t, n, s;
    return {
      c() {
        (t = w('span')), (n = y(e[1])), (s = y(':')), B(t, 'class', 'hidden');
      },
      m(a, l) {
        h(a, t, l), $(t, n), $(t, s), e[8](t);
      },
      p(e, t) {
        2 & t && F(n, e[1]);
      },
      d(n) {
        n && x(t), e[8](null);
      },
    };
  }
  function vs(t) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o = t[1] && xs(t);
    return {
      c() {
        (n = w('div')),
          o && o.c(),
          (s = k()),
          (a = w('input')),
          B(a, 'type', t[0]),
          B(a, 'placeholder', t[1]),
          B(a, 'class', t[5]),
          B(n, 'class', (l = `form-input-container flex border-radius padding-m--rl ${t[2]}`));
      },
      m(e, l) {
        h(e, n, l), o && o.m(n, null), $(n, s), $(n, a), t[9](a), r || ((i = z(a, 'focus', t[7])), (r = !0));
      },
      p(e, [t]) {
        e[1] ? (o ? o.p(e, t) : ((o = xs(e)), o.c(), o.m(n, s))) : o && (o.d(1), (o = null)),
          1 & t && B(a, 'type', e[0]),
          2 & t && B(a, 'placeholder', e[1]),
          32 & t && B(a, 'class', e[5]),
          4 & t && l !== (l = `form-input-container flex border-radius padding-m--rl ${e[2]}`) && B(n, 'class', l);
      },
      i: e,
      o: e,
      d(e) {
        e && x(n), o && o.d(), t[9](null), (r = !1), i();
      },
    };
  }
  function ws(e, t, n) {
    let s,
      a,
      { inputtype: l = 'text' } = t,
      { label: r } = t,
      { className: i } = t,
      { size: o = 'padding-m--tb' } = t,
      c = `form-input form-input--${l} width-1of1`;
    return (
      i && (c = `${i} ${c}`),
      P(() => {
        s.addEventListener('focus', () => {
          s.parentElement.setAttribute('data-focus', 'true');
          s.previousElementSibling.classList.remove('hidden');
        }),
          s.addEventListener('focusout', () => {
            s.parentElement.setAttribute('data-focus', 'false'), 0 === s.value.length && a.classList.add('hidden');
          });
      }),
      (e.$$set = (e) => {
        'inputtype' in e && n(0, (l = e.inputtype)),
          'label' in e && n(1, (r = e.label)),
          'className' in e && n(6, (i = e.className)),
          'size' in e && n(2, (o = e.size));
      }),
      [
        l,
        r,
        o,
        s,
        a,
        c,
        i,
        function (t) {
          I(e, t);
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (a = e), n(4, a);
          });
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (s = e), n(3, s);
          });
        },
      ]
    );
  }
  class bs extends $e {
    constructor(e) {
      super(), pe(this, e, ws, vs, r, { inputtype: 0, label: 1, className: 6, size: 2 });
    }
  }
  function ys(e) {
    let t, n, s;
    return {
      c() {
        (t = w('span')), (n = y(e[0])), (s = y(':')), B(t, 'class', 'hidden');
      },
      m(a, l) {
        h(a, t, l), $(t, n), $(t, s), e[8](t);
      },
      p(e, t) {
        1 & t && F(n, e[0]);
      },
      d(n) {
        n && x(t), e[8](null);
      },
    };
  }
  function ks(t) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o = t[0] && ys(t);
    return {
      c() {
        (n = w('div')),
          o && o.c(),
          (s = k()),
          (a = w('textarea')),
          B(a, 'class', t[4]),
          B(a, 'placeholder', t[0]),
          B(n, 'class', (l = `form-input-container flex flex-column border-radius padding-m--rl ${t[1]}`));
      },
      m(e, l) {
        h(e, n, l), o && o.m(n, null), $(n, s), $(n, a), t[9](a), r || ((i = z(a, 'focus', t[7])), (r = !0));
      },
      p(e, [t]) {
        e[0] ? (o ? o.p(e, t) : ((o = ys(e)), o.c(), o.m(n, s))) : o && (o.d(1), (o = null)),
          16 & t && B(a, 'class', e[4]),
          1 & t && B(a, 'placeholder', e[0]),
          2 & t &&
            l !== (l = `form-input-container flex flex-column border-radius padding-m--rl ${e[1]}`) &&
            B(n, 'class', l);
      },
      i: e,
      o: e,
      d(e) {
        e && x(n), o && o.d(), t[9](null), (r = !1), i();
      },
    };
  }
  function Cs(e, t, n) {
    let s,
      a,
      { inputtype: l = 'textarea' } = t,
      { label: r } = t,
      { className: i } = t,
      { size: o = 'padding-m--tb' } = t,
      c = `form-input form-input--${l} width-1of1`;
    return (
      i && (c = `${i} ${c}`),
      P(() => {
        s.addEventListener('focus', () => {
          s.parentElement.setAttribute('data-focus', 'true');
          s.previousElementSibling.classList.remove('hidden');
        }),
          s.addEventListener('focusout', () => {
            s.parentElement.setAttribute('data-focus', 'false'), 0 === s.value.length && a.classList.add('hidden');
          });
      }),
      (e.$$set = (e) => {
        'inputtype' in e && n(5, (l = e.inputtype)),
          'label' in e && n(0, (r = e.label)),
          'className' in e && n(6, (i = e.className)),
          'size' in e && n(1, (o = e.size));
      }),
      [
        r,
        o,
        s,
        a,
        c,
        l,
        i,
        function (t) {
          I(e, t);
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (a = e), n(3, a);
          });
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (s = e), n(2, s);
          });
        },
      ]
    );
  }
  class zs extends $e {
    constructor(e) {
      super(), pe(this, e, Cs, ks, r, { inputtype: 5, label: 0, className: 6, size: 1 });
    }
  }
  function Bs(e) {
    let t;
    const n = e[8].default,
      s = c(n, e, e[9], null);
    return {
      c() {
        s && s.c();
      },
      m(e, n) {
        s && s.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 512 & a) && g(s, n, e, e[9], a, null, null);
      },
      i(e) {
        t || (ie(s, e), (t = !0));
      },
      o(e) {
        oe(s, e), (t = !1);
      },
      d(e) {
        s && s.d(e);
      },
    };
  }
  function Ls(e) {
    let t, n, s;
    var a = e[7];
    function l(e) {
      return {
        props: {
          class: e[1],
          size: e[0],
          label: e[5],
          inputtype: e[4],
          group: e[3],
          value: e[6],
          name: e[2],
          $$slots: { default: [Bs] },
          $$scope: { ctx: e },
        },
      };
    }
    return (
      a && (n = new a(l(e))),
      {
        c() {
          (t = w('div')), n && ue(n.$$.fragment), B(t, 'class', 'form-element margin-l--b');
        },
        m(e, a) {
          h(e, t, a), n && fe(n, t, null), (s = !0);
        },
        p(e, [s]) {
          const r = {};
          if (
            (2 & s && (r.class = e[1]),
            1 & s && (r.size = e[0]),
            32 & s && (r.label = e[5]),
            16 & s && (r.inputtype = e[4]),
            8 & s && (r.group = e[3]),
            64 & s && (r.value = e[6]),
            4 & s && (r.name = e[2]),
            512 & s && (r.$$scope = { dirty: s, ctx: e }),
            a !== (a = e[7]))
          ) {
            if (n) {
              le();
              const e = n;
              oe(e.$$.fragment, 1, 0, () => {
                me(e, 1);
              }),
                re();
            }
            a ? ((n = new a(l(e))), ue(n.$$.fragment), ie(n.$$.fragment, 1), fe(n, t, null)) : (n = null);
          } else a && n.$set(r);
        },
        i(e) {
          s || (n && ie(n.$$.fragment, e), (s = !0));
        },
        o(e) {
          n && oe(n.$$.fragment, e), (s = !1);
        },
        d(e) {
          e && x(t), n && me(n);
        },
      }
    );
  }
  function Ns(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t,
      { className: l } = t,
      { fieldName: r } = t,
      { group: i } = t,
      { inputtype: o = 'text' } = t,
      { label: c } = t,
      { value: d } = t,
      { size: g = 'medium' } = t,
      u = bs;
    switch (o) {
      case 'select':
        u = hs;
        break;
      case 'checkbox':
      case 'radio':
        u = ms;
        break;
      case 'textarea':
        u = zs;
    }
    switch (g) {
      case 'small':
        g = 'padding-s--tb';
        break;
      case 'medium':
        g = 'padding-m--tb';
        break;
      case 'large':
        g = 'padding-l--tb';
    }
    return (
      (e.$$set = (e) => {
        'className' in e && n(1, (l = e.className)),
          'fieldName' in e && n(2, (r = e.fieldName)),
          'group' in e && n(3, (i = e.group)),
          'inputtype' in e && n(4, (o = e.inputtype)),
          'label' in e && n(5, (c = e.label)),
          'value' in e && n(6, (d = e.value)),
          'size' in e && n(0, (g = e.size)),
          '$$scope' in e && n(9, (a = e.$$scope));
      }),
      [g, l, r, i, o, c, d, u, s, a]
    );
  }
  class Ts extends $e {
    constructor(e) {
      super(),
        pe(this, e, Ns, Ls, r, { className: 1, fieldName: 2, group: 3, inputtype: 4, label: 5, value: 6, size: 0 });
    }
  }
  function Ms(e) {
    let t, n;
    return {
      c() {
        (t = w('h1')), (n = y(e[0])), B(t, 'class', 'horizontal-scroll-padding');
      },
      m(e, s) {
        h(e, t, s), $(t, n);
      },
      p(e, t) {
        1 & t && F(n, e[0]);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Fs(e) {
    let t;
    return {
      c() {
        (t = w('i')), B(t, 'class', 'fa fa-chevron-left');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Es(e) {
    let t;
    return {
      c() {
        (t = w('i')), B(t, 'class', 'fa fa-chevron-right');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ss(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      d = e[0] && Ms(e);
    (s = new cs({
      props: {
        className: 'horizontal-scroll-nav button-prev bg--white',
        extension: 'icon',
        $$slots: { default: [Fs] },
        $$scope: { ctx: e },
      },
    })),
      s.$on('click', e[4]),
      (l = new cs({
        props: {
          className: 'horizontal-scroll-nav button-next bg--white',
          extension: 'icon',
          $$slots: { default: [Es] },
          $$scope: { ctx: e },
        },
      })),
      l.$on('click', e[3]);
    const u = e[6].default,
      f = c(u, e, e[9], null);
    return {
      c() {
        d && d.c(),
          (t = k()),
          (n = w('div')),
          ue(s.$$.fragment),
          (a = k()),
          ue(l.$$.fragment),
          (r = k()),
          (i = w('div')),
          f && f.c(),
          B(i, 'class', 'horizontal-scroll-items flex position-relative'),
          B(i, 'data-horizontallist', 'horizontallist'),
          B(n, 'class', 'horizontal-scroll-container position-relative');
      },
      m(c, g) {
        d && d.m(c, g),
          h(c, t, g),
          h(c, n, g),
          fe(s, n, null),
          $(n, a),
          fe(l, n, null),
          $(n, r),
          $(n, i),
          f && f.m(i, null),
          e[7](i),
          e[8](n),
          (o = !0);
      },
      p(e, [n]) {
        e[0] ? (d ? d.p(e, n) : ((d = Ms(e)), d.c(), d.m(t.parentNode, t))) : d && (d.d(1), (d = null));
        const a = {};
        512 & n && (a.$$scope = { dirty: n, ctx: e }), s.$set(a);
        const r = {};
        512 & n && (r.$$scope = { dirty: n, ctx: e }),
          l.$set(r),
          f && f.p && (!o || 512 & n) && g(f, u, e, e[9], n, null, null);
      },
      i(e) {
        o || (ie(s.$$.fragment, e), ie(l.$$.fragment, e), ie(f, e), (o = !0));
      },
      o(e) {
        oe(s.$$.fragment, e), oe(l.$$.fragment, e), oe(f, e), (o = !1);
      },
      d(a) {
        d && d.d(a), a && x(t), a && x(n), me(s), me(l), f && f.d(a), e[7](null), e[8](null);
      },
    };
  }
  function Hs(e, t, n) {
    let s,
      a,
      l,
      r,
      i,
      { $$slots: o = {}, $$scope: c } = t,
      { className: d } = t,
      { title: g } = t,
      u = 0;
    function f(e, t = !1) {
      switch (e) {
        case 'neutral':
          n(1, (s.dataset.atstart = 'false'), s), n(1, (s.dataset.atend = 'false'), s), t && (u = 1);
          break;
        case 'end':
          n(1, (s.dataset.atstart = 'false'), s), n(1, (s.dataset.atend = 'true'), s), (u = r);
          break;
        case 'start':
          n(1, (s.dataset.atstart = 'true'), s), n(1, (s.dataset.atend = 'false'), s), (u = 0);
      }
    }
    function m() {
      f(0 === u ? 'start' : u === r ? 'end' : 'neutral');
    }
    function p(e) {
      const t = l[e];
      a.scrollTo({ behavior: 'smooth', left: t.offsetLeft, top: 0 }), m();
    }
    return (
      j(() => {
        if (l) return;
        (l = a.children), (i = l.length);
        const e = s.getBoundingClientRect().right;
        let t = Array.from(l).filter((t) => t.getBoundingClientRect().right <= e).length;
        (r = i - t),
          a.addEventListener(
            'wheel',
            (function (e, t) {
              let n;
              return function () {
                const s = arguments,
                  a = this;
                n || (e.apply(a, s), (n = !0), setTimeout(() => (n = !1), t));
              };
            })(() => {
              !(function () {
                const e = l[0].getBoundingClientRect().left,
                  t = a.getBoundingClientRect().left,
                  n = l[i - 1].getBoundingClientRect().right,
                  s = a.getBoundingClientRect().right;
                f(e - 5 === t ? 'start' : n - 10 <= s ? 'end' : 'neutral', !0);
              })();
            }, 150)
          ),
          m();
      }),
      (e.$$set = (e) => {
        'className' in e && n(5, (d = e.className)),
          'title' in e && n(0, (g = e.title)),
          '$$scope' in e && n(9, (c = e.$$scope));
      }),
      [
        g,
        s,
        a,
        function (e) {
          u !== r && ((u += 1), p(u));
        },
        function (e) {
          0 !== u && ((u -= 1), p(u));
        },
        d,
        o,
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (a = e), n(2, a);
          });
        },
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (s = e), n(1, s);
          });
        },
        c,
      ]
    );
  }
  class As extends $e {
    constructor(e) {
      super(), pe(this, e, Hs, Ss, r, { className: 5, title: 0 });
    }
  }
  function _s(e) {
    let t, n;
    const s = e[3].default,
      a = c(s, e, e[2], null);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', e[0]);
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, [l]) {
        a && a.p && (!n || 4 & l) && g(a, s, e, e[2], l, null, null), (!n || 1 & l) && B(t, 'class', e[0]);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  const Ps = {};
  function js(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t;
    const l = [],
      r = [],
      i = ve(null),
      o = ve(null);
    D(Ps, {
      registerTab: (e) => {
        l.push(e),
          i.update((t) => t || e),
          V(() => {
            const t = l.indexOf(e);
            l.splice(t, 1), i.update((n) => (n === e ? l[t] || l[l.length - 1] : n));
          });
      },
      registerPanel: (e) => {
        r.push(e),
          o.update((t) => t || e),
          V(() => {
            const t = r.indexOf(e);
            r.splice(t, 1), o.update((n) => (n === e ? r[t] || r[r.length - 1] : n));
          });
      },
      selectButton: (e) => {
        const t = l.indexOf(e);
        i.set(e), o.set(r[t]);
      },
      selectedButton: i,
      selectedPanel: o,
    });
    let { className: c } = t,
      d = 'pillcomponent';
    return (
      c && (d = `${c} ${d}`),
      (e.$$set = (e) => {
        'className' in e && n(1, (c = e.className)), '$$scope' in e && n(2, (a = e.$$scope));
      }),
      [d, c, a, s]
    );
  }
  class Vs extends $e {
    constructor(e) {
      super(), pe(this, e, js, _s, r, { className: 1 });
    }
  }
  function Os(e) {
    let t, n, s, a, l;
    const r = e[7].default,
      i = c(r, e, e[6], null);
    return {
      c() {
        (t = w('button')), i && i.c(), B(t, 'class', e[0]), B(t, 'data-selected', (n = e[1] === e[2]));
      },
      m(n, r) {
        h(n, t, r), i && i.m(t, null), (s = !0), a || ((l = z(t, 'click', e[8])), (a = !0));
      },
      p(e, [a]) {
        i && i.p && (!s || 64 & a) && g(i, r, e, e[6], a, null, null),
          (!s || 1 & a) && B(t, 'class', e[0]),
          (!s || (2 & a && n !== (n = e[1] === e[2]))) && B(t, 'data-selected', n);
      },
      i(e) {
        s || (ie(i, e), (s = !0));
      },
      o(e) {
        oe(i, e), (s = !1);
      },
      d(e) {
        e && x(t), i && i.d(e), (a = !1), l();
      },
    };
  }
  function Ds(e, t, n) {
    let s,
      { $$slots: a = {}, $$scope: l } = t;
    const r = {},
      { registerTab: i, selectButton: c, selectedButton: d } = q(Ps);
    o(e, d, (e) => n(1, (s = e))), i(r);
    let { className: g } = t,
      u = 'button';
    g && (u = `${g} ${u}`);
    return (
      (e.$$set = (e) => {
        'className' in e && n(5, (g = e.className)), '$$scope' in e && n(6, (l = e.$$scope));
      }),
      [u, s, r, c, d, g, l, a, () => c(r)]
    );
  }
  class qs extends $e {
    constructor(e) {
      super(), pe(this, e, Ds, Os, r, { className: 5 });
    }
  }
  function Is(e) {
    let t;
    const n = e[4].default,
      s = c(n, e, e[3], null);
    return {
      c() {
        s && s.c();
      },
      m(e, n) {
        s && s.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 8 & a) && g(s, n, e, e[3], a, null, null);
      },
      i(e) {
        t || (ie(s, e), (t = !0));
      },
      o(e) {
        oe(s, e), (t = !1);
      },
      d(e) {
        s && s.d(e);
      },
    };
  }
  function Rs(e) {
    let t,
      n,
      s = e[0] === e[1] && Is(e);
    return {
      c() {
        s && s.c(), (t = C());
      },
      m(e, a) {
        s && s.m(e, a), h(e, t, a), (n = !0);
      },
      p(e, [n]) {
        e[0] === e[1]
          ? s
            ? (s.p(e, n), 1 & n && ie(s, 1))
            : ((s = Is(e)), s.c(), ie(s, 1), s.m(t.parentNode, t))
          : s &&
            (le(),
            oe(s, 1, 1, () => {
              s = null;
            }),
            re());
      },
      i(e) {
        n || (ie(s), (n = !0));
      },
      o(e) {
        oe(s), (n = !1);
      },
      d(e) {
        s && s.d(e), e && x(t);
      },
    };
  }
  function Gs(e, t, n) {
    let s,
      { $$slots: a = {}, $$scope: l } = t;
    const r = {},
      { registerPanel: i, selectedPanel: c } = q(Ps);
    return (
      o(e, c, (e) => n(0, (s = e))),
      i(r),
      (e.$$set = (e) => {
        '$$scope' in e && n(3, (l = e.$$scope));
      }),
      [s, r, c, l, a]
    );
  }
  class Us extends $e {
    constructor(e) {
      super(), pe(this, e, Gs, Rs, r, {});
    }
  }
  function Ys(e) {
    let t, n;
    const s = e[3].default,
      a = c(s, e, e[2], null);
    return {
      c() {
        (t = w('div')), a && a.c(), B(t, 'class', e[0]);
      },
      m(e, s) {
        h(e, t, s), a && a.m(t, null), (n = !0);
      },
      p(e, [l]) {
        a && a.p && (!n || 4 & l) && g(a, s, e, e[2], l, null, null), (!n || 1 & l) && B(t, 'class', e[0]);
      },
      i(e) {
        n || (ie(a, e), (n = !0));
      },
      o(e) {
        oe(a, e), (n = !1);
      },
      d(e) {
        e && x(t), a && a.d(e);
      },
    };
  }
  function Ws(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t,
      { className: l } = t,
      r = 'pillnavigation toggle toggle--buttons';
    return (
      l && (r = `${l} ${r}`),
      (e.$$set = (e) => {
        'className' in e && n(1, (l = e.className)), '$$scope' in e && n(2, (a = e.$$scope));
      }),
      [r, l, a, s]
    );
  }
  class Zs extends $e {
    constructor(e) {
      super(), pe(this, e, Ws, Ys, r, { className: 1 });
    }
  }
  function Js(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<i class="fas fa-circle bounce bounce1"></i> \n    <i class="fas fa-circle bounce bounce2"></i> \n    <i class="fas fa-circle bounce bounce3"></i>'),
          B(t, 'class', 'loader flex flex--center');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Xs(t) {
    let n,
      s = t[0] && Js();
    return {
      c() {
        s && s.c(), (n = C());
      },
      m(e, t) {
        s && s.m(e, t), h(e, n, t);
      },
      p(e, [t]) {
        e[0] ? s || ((s = Js()), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), (s = null));
      },
      i: e,
      o: e,
      d(e) {
        s && s.d(e), e && x(n);
      },
    };
  }
  function Ks(e, t, n) {
    let { isLoading: s = !1 } = t;
    return (
      (e.$$set = (e) => {
        'isLoading' in e && n(0, (s = e.isLoading));
      }),
      [s]
    );
  }
  class Qs extends $e {
    constructor(e) {
      super(), pe(this, e, Ks, Xs, r, { isLoading: 0 });
    }
  }
  const ea = (e) => ({}),
    ta = (e) => ({}),
    na = (e) => ({}),
    sa = (e) => ({}),
    aa = (e) => ({}),
    la = (e) => ({}),
    ra = (e) => ({}),
    ia = (e) => ({});
  function oa(e) {
    let t, n, s, a, l, r;
    const i = [ga, da],
      o = [];
    function c(e, t) {
      return e[2] ? 0 : 1;
    }
    return (
      (n = c(e)),
      (s = o[n] = i[n](e)),
      {
        c() {
          (t = w('button')), s.c(), B(t, 'class', e[1]);
        },
        m(s, i) {
          h(s, t, i), o[n].m(t, null), (a = !0), l || ((r = z(t, 'click', e[13])), (l = !0));
        },
        p(e, l) {
          let r = n;
          (n = c(e)),
            n === r
              ? o[n].p(e, l)
              : (le(),
                oe(o[r], 1, 1, () => {
                  o[r] = null;
                }),
                re(),
                (s = o[n]),
                s ? s.p(e, l) : ((s = o[n] = i[n](e)), s.c()),
                ie(s, 1),
                s.m(t, null)),
            (!a || 2 & l) && B(t, 'class', e[1]);
        },
        i(e) {
          a || (ie(s), (a = !0));
        },
        o(e) {
          oe(s), (a = !1);
        },
        d(e) {
          e && x(t), o[n].d(), (l = !1), r();
        },
      }
    );
  }
  function ca(e) {
    let t, n, s, l, r, i, o, d, u, f, m, p;
    const v = e[8].on,
      b = c(v, e, e[7], ia);
    function y(t) {
      e[10](t);
    }
    let C = { className: 'margin-s--rl', width: '20', style: 'cursor: pointer;' };
    void 0 !== e[3] && (C.name = e[3]),
      (r = new Vn({ props: C })),
      G.push(() => ge(r, 'name', y)),
      r.$on('click', e[11]);
    const L = e[8].off,
      N = c(L, e, e[7], la);
    return {
      c() {
        (t = w('div')),
          (n = w('button')),
          b && b.c(),
          (l = k()),
          ue(r.$$.fragment),
          (o = k()),
          (d = w('button')),
          N && N.c(),
          B(n, 'data-status', e[2]),
          B(n, 'class', (s = 'toggle--switch ' + e[1])),
          B(d, 'data-status', e[2]),
          B(d, 'class', (u = 'toggle--switch ' + e[1])),
          B(t, 'class', 'flex flex-align--center');
      },
      m(s, a) {
        h(s, t, a),
          $(t, n),
          b && b.m(n, null),
          $(t, l),
          fe(r, t, null),
          $(t, o),
          $(t, d),
          N && N.m(d, null),
          (f = !0),
          m || ((p = [z(n, 'click', e[9]), z(d, 'click', e[12])]), (m = !0));
      },
      p(e, t) {
        b && b.p && (!f || 128 & t) && g(b, v, e, e[7], t, ra, ia),
          (!f || 4 & t) && B(n, 'data-status', e[2]),
          (!f || (2 & t && s !== (s = 'toggle--switch ' + e[1]))) && B(n, 'class', s);
        const a = {};
        !i && 8 & t && ((i = !0), (a.name = e[3]), K(() => (i = !1))),
          r.$set(a),
          N && N.p && (!f || 128 & t) && g(N, L, e, e[7], t, aa, la),
          (!f || 4 & t) && B(d, 'data-status', e[2]),
          (!f || (2 & t && u !== (u = 'toggle--switch ' + e[1]))) && B(d, 'class', u);
      },
      i(e) {
        f || (ie(b, e), ie(r.$$.fragment, e), ie(N, e), (f = !0));
      },
      o(e) {
        oe(b, e), oe(r.$$.fragment, e), oe(N, e), (f = !1);
      },
      d(e) {
        e && x(t), b && b.d(e), me(r), N && N.d(e), (m = !1), a(p);
      },
    };
  }
  function da(e) {
    let t;
    const n = e[8].off,
      s = c(n, e, e[7], ta);
    return {
      c() {
        s && s.c();
      },
      m(e, n) {
        s && s.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 128 & a) && g(s, n, e, e[7], a, ea, ta);
      },
      i(e) {
        t || (ie(s, e), (t = !0));
      },
      o(e) {
        oe(s, e), (t = !1);
      },
      d(e) {
        s && s.d(e);
      },
    };
  }
  function ga(e) {
    let t;
    const n = e[8].on,
      s = c(n, e, e[7], sa);
    return {
      c() {
        s && s.c();
      },
      m(e, n) {
        s && s.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 128 & a) && g(s, n, e, e[7], a, na, sa);
      },
      i(e) {
        t || (ie(s, e), (t = !0));
      },
      o(e) {
        oe(s, e), (t = !1);
      },
      d(e) {
        s && s.d(e);
      },
    };
  }
  function ua(e) {
    let t, n, s, a;
    const l = [ca, oa],
      r = [];
    function i(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = i(e)),
      (n = r[t] = l[t](e)),
      {
        c() {
          n.c(), (s = C());
        },
        m(e, n) {
          r[t].m(e, n), h(e, s, n), (a = !0);
        },
        p(e, [a]) {
          let o = t;
          (t = i(e)),
            t === o
              ? r[t].p(e, a)
              : (le(),
                oe(r[o], 1, 1, () => {
                  r[o] = null;
                }),
                re(),
                (n = r[t]),
                n ? n.p(e, a) : ((n = r[t] = l[t](e)), n.c()),
                ie(n, 1),
                n.m(s.parentNode, s));
        },
        i(e) {
          a || (ie(n), (a = !0));
        },
        o(e) {
          oe(n), (a = !1);
        },
        d(e) {
          r[t].d(e), e && x(s);
        },
      }
    );
  }
  function fa(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t,
      { className: l } = t,
      { defaultState: r = !0 } = t,
      { isSwitch: i = !1 } = t,
      o = 'toggle-button';
    l && (o = `${l} ${o}`);
    let c = r,
      d = c ? 'toggle-on' : 'toggle-off';
    const g = O();
    function u(e) {
      n(2, (c = null != e ? e : !c)), n(3, (d = c ? 'toggle-on' : 'toggle-off')), g('toggle', c);
    }
    return (
      (e.$$set = (e) => {
        'className' in e && n(5, (l = e.className)),
          'defaultState' in e && n(6, (r = e.defaultState)),
          'isSwitch' in e && n(0, (i = e.isSwitch)),
          '$$scope' in e && n(7, (a = e.$$scope));
      }),
      [
        i,
        o,
        c,
        d,
        u,
        l,
        r,
        a,
        s,
        () => u(!0),
        function (e) {
          (d = e), n(3, d);
        },
        () => u(),
        () => u(!1),
        () => u(),
      ]
    );
  }
  class ma extends $e {
    constructor(e) {
      super(), pe(this, e, fa, ua, r, { className: 5, defaultState: 6, isSwitch: 0 });
    }
  }
  function pa(e) {
    let t, n, s, a, l, r, i, o, d, u, f, m, p;
    const v = e[6].default,
      b = c(v, e, e[5], null);
    return {
      c() {
        (t = w('label')),
          (n = w('input')),
          (s = k()),
          (a = w('div')),
          (l = w('i')),
          (i = k()),
          (o = w('div')),
          (d = w('i')),
          (f = k()),
          (m = w('div')),
          b && b.c(),
          B(n, 'type', 'checkbox'),
          (n.hidden = !0),
          B(n, 'class', 'tooltip-input'),
          B(l, 'class', (r = 'tooltip-toggle fas fa-' + e[1])),
          B(a, 'class', 'tooltip-off'),
          B(d, 'class', (u = 'tooltip-toggle fas fa-' + e[0])),
          B(m, 'class', 'padding-s'),
          B(o, 'class', 'tooltip-on'),
          B(t, 'class', e[2]);
      },
      m(e, r) {
        h(e, t, r),
          $(t, n),
          $(t, s),
          $(t, a),
          $(a, l),
          $(t, i),
          $(t, o),
          $(o, d),
          $(o, f),
          $(o, m),
          b && b.m(m, null),
          (p = !0);
      },
      p(e, [n]) {
        (!p || (2 & n && r !== (r = 'tooltip-toggle fas fa-' + e[1]))) && B(l, 'class', r),
          (!p || (1 & n && u !== (u = 'tooltip-toggle fas fa-' + e[0]))) && B(d, 'class', u),
          b && b.p && (!p || 32 & n) && g(b, v, e, e[5], n, null, null),
          (!p || 4 & n) && B(t, 'class', e[2]);
      },
      i(e) {
        p || (ie(b, e), (p = !0));
      },
      o(e) {
        oe(b, e), (p = !1);
      },
      d(e) {
        e && x(t), b && b.d(e);
      },
    };
  }
  function $a(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t,
      { iconOn: l = 'times' } = t,
      { iconOff: r = 'question' } = t,
      { position: i = 'left' } = t,
      { className: o } = t,
      c = `tooltip tooltip--${i}`;
    return (
      o && (c = `${c} ${o}`),
      (e.$$set = (e) => {
        'iconOn' in e && n(0, (l = e.iconOn)),
          'iconOff' in e && n(1, (r = e.iconOff)),
          'position' in e && n(3, (i = e.position)),
          'className' in e && n(4, (o = e.className)),
          '$$scope' in e && n(5, (a = e.$$scope));
      }),
      [l, r, c, i, o, a, s]
    );
  }
  class ha extends $e {
    constructor(e) {
      super(), pe(this, e, $a, pa, r, { iconOn: 0, iconOff: 1, position: 3, className: 4 });
    }
  }
  function xa(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<h2 class="color--graa1">Components</h2> \n            <i class="home-section-icon fas fa-cubes svelte-112rkb7"></i>'),
          B(t, 'class', 'flex-item flex-item--center text-align--center');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function va(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<h2 class="color--graa1">Utilities</h2> \n            <i class="home-section-icon fab fa-connectdevelop svelte-112rkb7"></i>'),
          B(t, 'class', 'flex-item flex-item--center text-align--center');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function wa(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<h2 class="color--graa1">Colors</h2> \n            <i class="home-section-icon fas fa-palette svelte-112rkb7"></i>'),
          B(t, 'class', 'flex-item flex-item--center text-align--center');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ba(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m, p, v, b, y, C;
    return (
      (g = new ut({ props: { className: 'padding-m', href: e[0], $$slots: { default: [xa] }, $$scope: { ctx: e } } })),
      (m = new ut({ props: { className: 'padding-m', href: e[1], $$slots: { default: [va] }, $$scope: { ctx: e } } })),
      (y = new ut({ props: { className: 'padding-m', href: e[2], $$slots: { default: [wa] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = w('div')),
            (n = w('div')),
            (s = w('div')),
            (s.innerHTML = '<img alt="" src="ekstrabladet.svg" style="height:70px;"/>'),
            (a = k()),
            (l = w('div')),
            (l.innerHTML = '<h1>Design system</h1>'),
            (r = k()),
            (i = w('div')),
            (i.textContent = 'yarn add @ekstra-bladet/designsystem'),
            (o = k()),
            (c = w('div')),
            (d = w('div')),
            ue(g.$$.fragment),
            (u = k()),
            (f = w('div')),
            ue(m.$$.fragment),
            (p = k()),
            (v = w('div')),
            (b = w('div')),
            ue(y.$$.fragment),
            B(s, 'class', 'flex flex-justify--center'),
            B(l, 'class', 'flex flex-justify--center  margin-l--b'),
            B(i, 'class', 'text-align--center margin-m--tb padding-m bg--graa7'),
            B(d, 'class', 'home-section width-1of1 margin-m svelte-112rkb7'),
            B(f, 'class', 'home-section width-1of1 margin-m svelte-112rkb7'),
            B(c, 'class', 'flex'),
            B(b, 'class', 'home-section width-1of1 margin-m svelte-112rkb7'),
            B(v, 'class', 'flex'),
            B(n, 'class', 'grid-width--medium'),
            B(t, 'class', 'flex flex-justify--around width-1of1');
        },
        m(e, x) {
          h(e, t, x),
            $(t, n),
            $(n, s),
            $(n, a),
            $(n, l),
            $(n, r),
            $(n, i),
            $(n, o),
            $(n, c),
            $(c, d),
            fe(g, d, null),
            $(c, u),
            $(c, f),
            fe(m, f, null),
            $(n, p),
            $(n, v),
            $(v, b),
            fe(y, b, null),
            (C = !0);
        },
        p(e, [t]) {
          const n = {};
          1 & t && (n.href = e[0]), 8 & t && (n.$$scope = { dirty: t, ctx: e }), g.$set(n);
          const s = {};
          2 & t && (s.href = e[1]), 8 & t && (s.$$scope = { dirty: t, ctx: e }), m.$set(s);
          const a = {};
          4 & t && (a.href = e[2]), 8 & t && (a.$$scope = { dirty: t, ctx: e }), y.$set(a);
        },
        i(e) {
          C || (ie(g.$$.fragment, e), ie(m.$$.fragment, e), ie(y.$$.fragment, e), (C = !0));
        },
        o(e) {
          oe(g.$$.fragment, e), oe(m.$$.fragment, e), oe(y.$$.fragment, e), (C = !1);
        },
        d(e) {
          e && x(t), me(g), me(m), me(y);
        },
      }
    );
  }
  function ya(e, t, n) {
    let s = '#/',
      a = '#/',
      l = '#/';
    return (
      Qi.forEach((e) => {
        '#/' === s && 'component' === e.type && n(0, (s = `#${e.link}`)),
          '#/' === a && 'utility' === e.type && n(1, (a = `#${e.link}`)),
          '#/' === l && 'color' === e.type && n(2, (l = `#${e.link}`));
      }),
      [s, a, l]
    );
  }
  window.Prism && console.warn('Prism has already been initiated. Please ensure that svelte-prism is imported first.'),
    (window.Prism = window.Prism || {}),
    (window.Prism.manual = !0);
  var ka =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  var Ca,
    za =
      ((function (e) {
        var t = (function (e) {
          var t = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            s = {
              manual: e.Prism && e.Prism.manual,
              disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
              util: {
                encode: function e(t) {
                  return t instanceof a
                    ? new a(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id;
                },
                clone: function e(t, n) {
                  var a, l;
                  switch (((n = n || {}), s.util.type(t))) {
                    case 'Object':
                      if (((l = s.util.objId(t)), n[l])) return n[l];
                      for (var r in ((a = {}), (n[l] = a), t)) t.hasOwnProperty(r) && (a[r] = e(t[r], n));
                      return a;
                    case 'Array':
                      return (
                        (l = s.util.objId(t)),
                        n[l]
                          ? n[l]
                          : ((a = []),
                            (n[l] = a),
                            t.forEach(function (t, s) {
                              a[s] = e(t, n);
                            }),
                            a)
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (e) {
                  for (; e && !t.test(e.className); ) e = e.parentElement;
                  return e ? (e.className.match(t) || [, 'none'])[1].toLowerCase() : 'none';
                },
                currentScript: function () {
                  if ('undefined' == typeof document) return null;
                  if ('currentScript' in document) return document.currentScript;
                  try {
                    throw new Error();
                  } catch (s) {
                    var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(s.stack) || [])[1];
                    if (e) {
                      var t = document.getElementsByTagName('script');
                      for (var n in t) if (t[n].src == e) return t[n];
                    }
                    return null;
                  }
                },
                isActive: function (e, t, n) {
                  for (var s = 'no-' + t; e; ) {
                    var a = e.classList;
                    if (a.contains(t)) return !0;
                    if (a.contains(s)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                extend: function (e, t) {
                  var n = s.util.clone(s.languages[e]);
                  for (var a in t) n[a] = t[a];
                  return n;
                },
                insertBefore: function (e, t, n, a) {
                  var l = (a = a || s.languages)[e],
                    r = {};
                  for (var i in l)
                    if (l.hasOwnProperty(i)) {
                      if (i == t) for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
                      n.hasOwnProperty(i) || (r[i] = l[i]);
                    }
                  var c = a[e];
                  return (
                    (a[e] = r),
                    s.languages.DFS(s.languages, function (t, n) {
                      n === c && t != e && (this[t] = r);
                    }),
                    r
                  );
                },
                DFS: function e(t, n, a, l) {
                  l = l || {};
                  var r = s.util.objId;
                  for (var i in t)
                    if (t.hasOwnProperty(i)) {
                      n.call(t, i, t[i], a || i);
                      var o = t[i],
                        c = s.util.type(o);
                      'Object' !== c || l[r(o)]
                        ? 'Array' !== c || l[r(o)] || ((l[r(o)] = !0), e(o, n, i, l))
                        : ((l[r(o)] = !0), e(o, n, null, l));
                    }
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                s.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, n) {
                var a = {
                  callback: n,
                  container: e,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                s.hooks.run('before-highlightall', a),
                  (a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector))),
                  s.hooks.run('before-all-elements-highlight', a);
                for (var l, r = 0; (l = a.elements[r++]); ) s.highlightElement(l, !0 === t, a.callback);
              },
              highlightElement: function (n, a, l) {
                var r = s.util.getLanguage(n),
                  i = s.languages[r];
                n.className = n.className.replace(t, '').replace(/\s+/g, ' ') + ' language-' + r;
                var o = n.parentElement;
                o &&
                  'pre' === o.nodeName.toLowerCase() &&
                  (o.className = o.className.replace(t, '').replace(/\s+/g, ' ') + ' language-' + r);
                var c = { element: n, language: r, grammar: i, code: n.textContent };
                function d(e) {
                  (c.highlightedCode = e),
                    s.hooks.run('before-insert', c),
                    (c.element.innerHTML = c.highlightedCode),
                    s.hooks.run('after-highlight', c),
                    s.hooks.run('complete', c),
                    l && l.call(c.element);
                }
                if ((s.hooks.run('before-sanity-check', c), !c.code))
                  return s.hooks.run('complete', c), void (l && l.call(c.element));
                if ((s.hooks.run('before-highlight', c), c.grammar))
                  if (a && e.Worker) {
                    var g = new Worker(s.filename);
                    (g.onmessage = function (e) {
                      d(e.data);
                    }),
                      g.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 }));
                  } else d(s.highlight(c.code, c.grammar, c.language));
                else d(s.util.encode(c.code));
              },
              highlight: function (e, t, n) {
                var l = { code: e, grammar: t, language: n };
                return (
                  s.hooks.run('before-tokenize', l),
                  (l.tokens = s.tokenize(l.code, l.grammar)),
                  s.hooks.run('after-tokenize', l),
                  a.stringify(s.util.encode(l.tokens), l.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var s in n) t[s] = n[s];
                  delete t.rest;
                }
                var a = new i();
                return (
                  o(a, a.head, e),
                  r(e, a, t, a.head, 0),
                  (function (e) {
                    for (var t = [], n = e.head.next; n !== e.tail; ) t.push(n.value), (n = n.next);
                    return t;
                  })(a)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = s.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = s.hooks.all[e];
                  if (n && n.length) for (var a, l = 0; (a = n[l++]); ) a(t);
                },
              },
              Token: a,
            };
          function a(e, t, n, s) {
            (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (s || '').length);
          }
          function l(e, t, n, s) {
            e.lastIndex = t;
            var a = e.exec(n);
            if (a && s && a[1]) {
              var l = a[1].length;
              (a.index += l), (a[0] = a[0].slice(l));
            }
            return a;
          }
          function r(e, t, n, i, d, g) {
            for (var u in n)
              if (n.hasOwnProperty(u) && n[u]) {
                var f = n[u];
                f = Array.isArray(f) ? f : [f];
                for (var m = 0; m < f.length; ++m) {
                  if (g && g.cause == u + ',' + m) return;
                  var p = f[m],
                    $ = p.inside,
                    h = !!p.lookbehind,
                    x = !!p.greedy,
                    v = p.alias;
                  if (x && !p.pattern.global) {
                    var w = p.pattern.toString().match(/[imsuy]*$/)[0];
                    p.pattern = RegExp(p.pattern.source, w + 'g');
                  }
                  for (
                    var b = p.pattern || p, y = i.next, k = d;
                    y !== t.tail && !(g && k >= g.reach);
                    k += y.value.length, y = y.next
                  ) {
                    var C = y.value;
                    if (t.length > e.length) return;
                    if (!(C instanceof a)) {
                      var z,
                        B = 1;
                      if (x) {
                        if (!(z = l(b, k, e, h))) break;
                        var L = z.index,
                          N = z.index + z[0].length,
                          T = k;
                        for (T += y.value.length; L >= T; ) T += (y = y.next).value.length;
                        if (((k = T -= y.value.length), y.value instanceof a)) continue;
                        for (var M = y; M !== t.tail && (T < N || 'string' == typeof M.value); M = M.next)
                          B++, (T += M.value.length);
                        B--, (C = e.slice(k, T)), (z.index -= k);
                      } else if (!(z = l(b, 0, C, h))) continue;
                      L = z.index;
                      var F = z[0],
                        E = C.slice(0, L),
                        S = C.slice(L + F.length),
                        H = k + C.length;
                      g && H > g.reach && (g.reach = H);
                      var A = y.prev;
                      E && ((A = o(t, A, E)), (k += E.length)),
                        c(t, A, B),
                        (y = o(t, A, new a(u, $ ? s.tokenize(F, $) : F, v, F))),
                        S && o(t, y, S),
                        B > 1 && r(e, t, n, y.prev, k, { cause: u + ',' + m, reach: H });
                    }
                  }
                }
              }
          }
          function i() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function o(e, t, n) {
            var s = t.next,
              a = { value: n, prev: t, next: s };
            return (t.next = a), (s.prev = a), e.length++, a;
          }
          function c(e, t, n) {
            for (var s = t.next, a = 0; a < n && s !== e.tail; a++) s = s.next;
            (t.next = s), (s.prev = t), (e.length -= a);
          }
          if (
            ((e.Prism = s),
            (a.stringify = function e(t, n) {
              if ('string' == typeof t) return t;
              if (Array.isArray(t)) {
                var a = '';
                return (
                  t.forEach(function (t) {
                    a += e(t, n);
                  }),
                  a
                );
              }
              var l = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: 'span',
                  classes: ['token', t.type],
                  attributes: {},
                  language: n,
                },
                r = t.alias;
              r && (Array.isArray(r) ? Array.prototype.push.apply(l.classes, r) : l.classes.push(r)),
                s.hooks.run('wrap', l);
              var i = '';
              for (var o in l.attributes) i += ' ' + o + '="' + (l.attributes[o] || '').replace(/"/g, '&quot;') + '"';
              return '<' + l.tag + ' class="' + l.classes.join(' ') + '"' + i + '>' + l.content + '</' + l.tag + '>';
            }),
            !e.document)
          )
            return e.addEventListener
              ? (s.disableWorkerMessageHandler ||
                  e.addEventListener(
                    'message',
                    function (t) {
                      var n = JSON.parse(t.data),
                        a = n.language,
                        l = n.code,
                        r = n.immediateClose;
                      e.postMessage(s.highlight(l, s.languages[a], a)), r && e.close();
                    },
                    !1
                  ),
                s)
              : s;
          var d = s.util.currentScript();
          function g() {
            s.manual || s.highlightAll();
          }
          if ((d && ((s.filename = d.src), d.hasAttribute('data-manual') && (s.manual = !0)), !s.manual)) {
            var u = document.readyState;
            'loading' === u || ('interactive' === u && d && d.defer)
              ? document.addEventListener('DOMContentLoaded', g)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(g)
              : window.setTimeout(g, 16);
          }
          return s;
        })(
          'undefined' != typeof window
            ? window
            : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
            ? self
            : {}
        );
        /**
         * Prism: Lightweight, robust, elegant syntax highlighting
         *
         * @license MIT <https://opensource.org/licenses/MIT>
         * @author Lea Verou <https://lea.verou.me>
         * @namespace
         * @public
         */ e.exports && (e.exports = t),
          void 0 !== ka && (ka.Prism = t),
          (t.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: {
              pattern:
                /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
              greedy: !0,
              inside: {
                'internal-subset': { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
                string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                punctuation: /^<!|>$|[[\]]/,
                'doctype-tag': /^DOCTYPE/,
                name: /[^\s<>'"]+/,
              },
            },
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
              pattern:
                /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
              greedy: !0,
              inside: {
                tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
                'attr-value': {
                  pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                  inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] },
                },
                punctuation: /\/?>/,
                'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
              },
            },
            entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
          }),
          (t.languages.markup.tag.inside['attr-value'].inside.entity = t.languages.markup.entity),
          (t.languages.markup.doctype.inside['internal-subset'].inside = t.languages.markup),
          t.hooks.add('wrap', function (e) {
            'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
          }),
          Object.defineProperty(t.languages.markup.tag, 'addInlined', {
            value: function (e, n) {
              var s = {};
              (s['language-' + n] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: t.languages[n],
              }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var a = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
              a['language-' + n] = { pattern: /[\s\S]+/, inside: t.languages[n] };
              var l = {};
              (l[e] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return e;
                    }
                  ),
                  'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: a,
              }),
                t.languages.insertBefore('markup', 'cdata', l);
            },
          }),
          (t.languages.html = t.languages.markup),
          (t.languages.mathml = t.languages.markup),
          (t.languages.svg = t.languages.markup),
          (t.languages.xml = t.languages.extend('markup', {})),
          (t.languages.ssml = t.languages.xml),
          (t.languages.atom = t.languages.xml),
          (t.languages.rss = t.languages.xml),
          (function (e) {
            var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
            (e.languages.css = {
              comment: /\/\*[\s\S]*?\*\//,
              atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                  rule: /^@[\w-]+/,
                  'selector-function-argument': {
                    pattern:
                      /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: 'selector',
                  },
                  keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
                },
              },
              url: {
                pattern: RegExp('\\burl\\((?:' + t.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                greedy: !0,
                inside: {
                  function: /^url/i,
                  punctuation: /^\(|\)$/,
                  string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
                },
              },
              selector: RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + t.source + ')*(?=\\s*\\{)'),
              string: { pattern: t, greedy: !0 },
              property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              important: /!important\b/i,
              function: /[-a-z0-9]+(?=\()/i,
              punctuation: /[(){};:,]/,
            }),
              (e.languages.css.atrule.inside.rest = e.languages.css);
            var n = e.languages.markup;
            n &&
              (n.tag.addInlined('style', 'css'),
              e.languages.insertBefore(
                'inside',
                'attr-value',
                {
                  'style-attr': {
                    pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                    lookbehind: !0,
                    inside: {
                      'attr-value': {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {
                          style: {
                            pattern: /(["'])[\s\S]+(?=["']$)/,
                            lookbehind: !0,
                            alias: 'language-css',
                            inside: e.languages.css,
                          },
                          punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                        },
                      },
                      'attr-name': /^style/i,
                    },
                  },
                },
                n.tag
              ));
          })(t),
          (t.languages.clike = {
            comment: [
              { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
            ],
            string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
            'class-name': {
              pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword:
              /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/,
          }),
          (t.languages.javascript = t.languages.extend('clike', {
            'class-name': [
              t.languages.clike['class-name'],
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                lookbehind: !0,
              },
            ],
            keyword: [
              { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
              {
                pattern:
                  /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
              },
            ],
            function:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number:
              /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
            operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
          })),
          (t.languages.javascript['class-name'][0].pattern =
            /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
          t.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'regex-source': {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: 'language-regex',
                  inside: t.languages.regex,
                },
                'regex-flags': /[a-z]+$/,
                'regex-delimiter': /^\/|\/$/,
              },
            },
            'function-variable': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: 'function',
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: t.languages.javascript,
              },
              {
                pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                inside: t.languages.javascript,
              },
              {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: t.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: t.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          t.languages.insertBefore('javascript', 'string', {
            'template-string': {
              pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
              greedy: !0,
              inside: {
                'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                  lookbehind: !0,
                  inside: {
                    'interpolation-punctuation': { pattern: /^\${|}$/, alias: 'punctuation' },
                    rest: t.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
          }),
          t.languages.markup && t.languages.markup.tag.addInlined('script', 'javascript'),
          (t.languages.js = t.languages.javascript),
          (function () {
            if ('undefined' != typeof self && self.Prism && self.document) {
              Element.prototype.matches ||
                (Element.prototype.matches =
                  Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
              var e = window.Prism,
                t = {
                  js: 'javascript',
                  py: 'python',
                  rb: 'ruby',
                  ps1: 'powershell',
                  psm1: 'powershell',
                  sh: 'bash',
                  bat: 'batch',
                  h: 'c',
                  tex: 'latex',
                },
                n = 'data-src-status',
                s = 'loading',
                a = 'loaded',
                l = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                r = /\blang(?:uage)?-([\w-]+)\b/i;
              e.hooks.add('before-highlightall', function (e) {
                e.selector += ', ' + l;
              }),
                e.hooks.add('before-sanity-check', function (r) {
                  var i = r.element;
                  if (i.matches(l)) {
                    (r.code = ''), i.setAttribute(n, s);
                    var c = i.appendChild(document.createElement('CODE'));
                    c.textContent = 'Loading…';
                    var d = i.getAttribute('data-src'),
                      g = r.language;
                    if ('none' === g) {
                      var u = (/\.(\w+)$/.exec(d) || [, 'none'])[1];
                      g = t[u] || u;
                    }
                    o(c, g), o(i, g);
                    var f = e.plugins.autoloader;
                    f && f.loadLanguages(g);
                    var m = new XMLHttpRequest();
                    m.open('GET', d, !0),
                      (m.onreadystatechange = function () {
                        var t, s;
                        4 == m.readyState &&
                          (m.status < 400 && m.responseText
                            ? (i.setAttribute(n, a), (c.textContent = m.responseText), e.highlightElement(c))
                            : (i.setAttribute(n, 'failed'),
                              m.status >= 400
                                ? (c.textContent =
                                    ((t = m.status), (s = m.statusText), '✖ Error ' + t + ' while fetching file: ' + s))
                                : (c.textContent = '✖ Error: File does not exist or is empty')));
                      }),
                      m.send(null);
                  }
                }),
                (e.plugins.fileHighlight = {
                  highlight: function (t) {
                    for (var n, s = (t || document).querySelectorAll(l), a = 0; (n = s[a++]); ) e.highlightElement(n);
                  },
                });
              var i = !1;
              e.fileHighlight = function () {
                i ||
                  (console.warn(
                    'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
                  ),
                  (i = !0)),
                  e.plugins.fileHighlight.highlight.apply(this, arguments);
              };
            }
            function o(e, t) {
              var n = e.className;
              (n = n.replace(r, ' ') + ' language-' + t), (e.className = n.replace(/\s+/g, ' ').trim());
            }
          })();
      })((Ca = { exports: {} }), Ca.exports),
      Ca.exports);
  const Ba = '(if|else if|await|then|catch|each|html|debug)';
  function La(e) {
    let t, n;
    return {
      c() {
        (n = C()), (t = new S(n));
      },
      m(s, a) {
        t.m(e[2], s, a), h(s, n, a);
      },
      p(e, n) {
        4 & n && t.p(e[2]);
      },
      d(e) {
        e && x(n), e && t.d();
      },
    };
  }
  function Na(e) {
    let t;
    return {
      c() {
        t = y(e[2]);
      },
      m(e, n) {
        h(e, t, n);
      },
      p(e, n) {
        4 & n && F(t, e[2]);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ta(e) {
    let t, n, s, a, l, r, i;
    const o = e[6].default,
      d = c(o, e, e[5], null);
    function u(e, t) {
      return 'none' === e[0] ? Na : La;
    }
    let f = u(e),
      m = f(e);
    return {
      c() {
        (t = w('code')),
          d && d.c(),
          (n = k()),
          (s = w('pre')),
          (a = w('code')),
          m.c(),
          E(t, 'display', 'none'),
          B(a, 'class', (l = 'language-' + e[0])),
          B(s, 'class', (r = 'language-' + e[0])),
          B(s, 'command-line', ''),
          B(s, 'data-output', '2-17');
      },
      m(l, r) {
        h(l, t, r), d && d.m(t, null), e[7](t), h(l, n, r), h(l, s, r), $(s, a), m.m(a, null), (i = !0);
      },
      p(e, [t]) {
        d && d.p && (!i || 32 & t) && g(d, o, e, e[5], t, null, null),
          f === (f = u(e)) && m ? m.p(e, t) : (m.d(1), (m = f(e)), m && (m.c(), m.m(a, null))),
          (!i || (1 & t && l !== (l = 'language-' + e[0]))) && B(a, 'class', l),
          (!i || (1 & t && r !== (r = 'language-' + e[0]))) && B(s, 'class', r);
      },
      i(e) {
        i || (ie(d, e), (i = !0));
      },
      o(e) {
        oe(d, e), (i = !1);
      },
      d(a) {
        a && x(t), d && d.d(a), e[7](null), a && x(n), a && x(s), m.d();
      },
    };
  }
  (Prism.languages.svelte = Prism.languages.extend('markup', {
    each: {
      pattern: new RegExp('{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'),
      inside: {
        'language-javascript': [
          { pattern: /(as[\s\S]*)\([\s\S]*\)(?=\s*\})/, lookbehind: !0, inside: Prism.languages.javascript },
          { pattern: /(as[\s]*)[\s\S]*(?=\s*)/, lookbehind: !0, inside: Prism.languages.javascript },
          { pattern: /(#each[\s]*)[\s\S]*(?=as)/, lookbehind: !0, inside: Prism.languages.javascript },
        ],
        keyword: /[#/]each|as/,
        punctuation: /{|}/,
      },
    },
    block: {
      pattern: new RegExp('{[#:/@]/s' + Ba + '(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'),
      inside: {
        punctuation: /^{|}$/,
        keyword: [new RegExp('[#:/@]' + Ba + '( )*'), /as/, /then/],
        'language-javascript': { pattern: /[\s\S]*/, inside: Prism.languages.javascript },
      },
    },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: !0,
      inside: {
        tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
        'language-javascript': {
          pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
          inside: Prism.languages.javascript,
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }],
            'language-javascript': { pattern: /{[\s\S]+}/, inside: Prism.languages.javascript },
          },
        },
        punctuation: /\/?>/,
        'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
      },
    },
    'language-javascript': {
      pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
  })),
    (Prism.languages.svelte.tag.inside['attr-value'].inside.entity = Prism.languages.svelte.entity),
    Prism.hooks.add('wrap', (e) => {
      'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(Prism.languages.svelte.tag, 'addInlined', {
      value: function (e, t) {
        const n = {};
        (n['language-' + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: Prism.languages[t],
        }),
          (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
        const s = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
        s['language-' + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
        const a = {};
        (a[e] = {
          pattern: RegExp(
            /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: s,
        }),
          Prism.languages.insertBefore('svelte', 'cdata', a);
      },
    }),
    Prism.languages.svelte.tag.addInlined('style', 'css'),
    Prism.languages.svelte.tag.addInlined('script', 'javascript');
  const Ma = za;
  za.highlightElement;
  const Fa = (e) => e;
  function Ea(e, n, s) {
    let a,
      l,
      { $$slots: r = {}, $$scope: i } = n,
      { language: o = 'javascript' } = n,
      { source: c = '' } = n,
      { transform: d = (e) => e } = n;
    return (
      (e.$$set = (e) => {
        s(9, (n = t(t({}, n), u(e)))),
          'language' in e && s(0, (o = e.language)),
          'source' in e && s(3, (c = e.source)),
          'transform' in e && s(4, (d = e.transform)),
          '$$scope' in e && s(5, (i = e.$$scope));
      }),
      (e.$$.update = () => {
        n &&
          (c || a) &&
          (function () {
            const e = Ma.languages[o];
            let t = c || a.textContent;
            (t = Fa(t)), (t = d(t)), s(2, (l = 'none' === o ? t : Ma.highlight(t, e, o)));
          })();
      }),
      (n = u(n)),
      [
        o,
        a,
        l,
        c,
        d,
        i,
        r,
        function (e) {
          G[e ? 'unshift' : 'push'](() => {
            (a = e), s(1, a);
          });
        },
      ]
    );
  }
  class Sa extends $e {
    constructor(e) {
      super(), pe(this, e, Ea, Ta, r, { language: 0, source: 3, transform: 4 });
    }
  }
  function Ha(t) {
    let n, s, a, l, r, i, o, c, d, g, u, f, m, p, v, b, y, C, z, L, N, T, M;
    return (
      (l = new Sa({
        props: {
          language: 'js',
          source:
            "\n    import { Accordion } from '@ekstra-bladet/designsystem';\n\n    // Example tabs\n    let tabs = [\n      { title: 'Tab 1', content: 'content 1' },\n      { title: 'Tab 2', content: 'content 2' },\n    ];\n    ",
        },
      })),
      (c = new Ae({ props: { tabs: t[0] } })),
      (g = new Sa({ props: { language: 'html', source: '<Accordion {tabs} />' } })),
      (p = new Ae({ props: { dataTheme: 'lightmode', tabs: t[0] } })),
      (b = new Sa({ props: { language: 'html', source: '<Accordion dataTheme="lightmode" {tabs} />' } })),
      (L = new Ae({ props: { dataTheme: 'darkmode', tabs: t[0] } })),
      (T = new Sa({ props: { language: 'html', source: '<Accordion dataTheme="darkmode" {tabs} />' } })),
      {
        c() {
          (n = w('div')),
            (s = w('h1')),
            (s.textContent = 'Accordion'),
            (a = k()),
            ue(l.$$.fragment),
            (r = k()),
            (i = w('h2')),
            (i.textContent = 'Default accordion'),
            (o = k()),
            ue(c.$$.fragment),
            (d = k()),
            ue(g.$$.fragment),
            (u = k()),
            (f = w('h2')),
            (f.textContent = 'Accordion with lightmode'),
            (m = k()),
            ue(p.$$.fragment),
            (v = k()),
            ue(b.$$.fragment),
            (y = k()),
            (C = w('h2')),
            (C.textContent = 'Accordion with darkmode'),
            (z = k()),
            ue(L.$$.fragment),
            (N = k()),
            ue(T.$$.fragment),
            B(s, 'class', 'color--eb'),
            B(n, 'class', 'grid-width--small');
        },
        m(e, t) {
          h(e, n, t),
            $(n, s),
            $(n, a),
            fe(l, n, null),
            $(n, r),
            $(n, i),
            $(n, o),
            fe(c, n, null),
            $(n, d),
            fe(g, n, null),
            $(n, u),
            $(n, f),
            $(n, m),
            fe(p, n, null),
            $(n, v),
            fe(b, n, null),
            $(n, y),
            $(n, C),
            $(n, z),
            fe(L, n, null),
            $(n, N),
            fe(T, n, null),
            (M = !0);
        },
        p: e,
        i(e) {
          M ||
            (ie(l.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(g.$$.fragment, e),
            ie(p.$$.fragment, e),
            ie(b.$$.fragment, e),
            ie(L.$$.fragment, e),
            ie(T.$$.fragment, e),
            (M = !0));
        },
        o(e) {
          oe(l.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(g.$$.fragment, e),
            oe(p.$$.fragment, e),
            oe(b.$$.fragment, e),
            oe(L.$$.fragment, e),
            oe(T.$$.fragment, e),
            (M = !1);
        },
        d(e) {
          e && x(n), me(l), me(c), me(g), me(p), me(b), me(L), me(T);
        },
      }
    );
  }
  function Aa(e) {
    return [
      [
        {
          title: 'Tab 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus.',
        },
        {
          title: 'Tab 2',
          content:
            'Nam condimentum, dui sit amet convallis finibus, tellus mi molestie lorem, sed ornare mauris ex nec lectus. Pellentesque gravida molestie felis sit amet interdum.',
        },
        {
          title: 'Tab 3',
          content:
            'uspendisse at tincidunt eros, vel convallis nisi. Nam pulvinar viverra augue. Vivamus vitae ligula sit amet tellus interdum dictum. Donec accumsan facilisis urna, condimentum mollis diam gravida ac. Donec sed malesuada odio. ',
        },
      ],
    ];
  }
  function _a(e) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f,
      m,
      p,
      v,
      b,
      y,
      C,
      z,
      L,
      N,
      T,
      M,
      F,
      E,
      S,
      H,
      A,
      _,
      P,
      j,
      V,
      O,
      D,
      q,
      I,
      R,
      G,
      U,
      Y,
      W;
    (l = new Sa({
      props: { language: 'js', source: "\n    import { ArticleCard } from '@ekstra-bladet/designsystem';\n    " },
    })),
      (c = new Sa({
        props: {
          language: 'js',
          source:
            '\n    interface IMediaOptions {\n      className: string;\n      height: string;\n      src: string;\n      width: string;\n    }\n\n    export let className: string = undefined;\n    export let colorClass: string = undefined;\n    export let href: string = undefined;\n    export let loading: boolean = false;\n    export let isBreaking: boolean = false;\n    export let isPlus: boolean = false;\n    export let media: Partial<IMediaOptions> = undefined;\n    export let maxLines: number = undefined;\n    export let section: string = undefined;\n    export let style: string = undefined;\n    export let theme: TThemes = undefined;\n    export let timestamp: string = undefined;\n    export let title: string;\n    export let type: TCardType = undefined;\n  ',
        },
      }));
    const Z = [e[0], { intersection: !0 }];
    let J = {};
    for (let e = 0; e < Z.length; e += 1) J = t(J, Z[e]);
    g = new Zn({ props: J });
    const X = [e[1]];
    let K = {};
    for (let e = 0; e < X.length; e += 1) K = t(K, X[e]);
    f = new Zn({ props: K });
    const Q = [e[2]];
    let ee = {};
    for (let e = 0; e < Q.length; e += 1) ee = t(ee, Q[e]);
    (p = new Zn({ props: ee })),
      (b = new Sa({
        props: {
          language: 'js',
          source:
            "\n    let article = {\n      href: '#',\n      media: {\n        src: 'https://via.placeholder.com/610x343&text=610x343',\n      },\n      section: 'Sport',\n      colorClass: 'sport',\n      timestamp: 'Thu Mar 18 2021 20:46:32',\n      title: 'List element',\n    };\n    ",
        },
      })),
      (C = new Zn({
        props: {
          colorClass: e[0].colorClass,
          href: e[0].href,
          media: void 0,
          section: e[0].section,
          timestamp: e[0].timestamp,
          title: e[0].title,
        },
      })),
      (L = new Sa({
        props: {
          language: 'html',
          source:
            '\n    <ArticleCard href="{article.href}" media="{{src:\'https://via.placeholder.com/610x343&text=610x343\'}}" section="{article.section}" timestamp="{article.timestamp}" title="{article.title}" />\n    <ArticleCard {...article} />\n  ',
        },
      }));
    const te = [e[0], { title: 'Small media card list element' }, { type: 'small-media' }];
    let ne = {};
    for (let e = 0; e < te.length; e += 1) ne = t(ne, te[e]);
    (T = new Zn({ props: ne })),
      (F = new Sa({
        props: {
          language: 'html',
          source: '\n    <ArticleCard {...article} title="Small media card list element" type="small-media" />\n  ',
        },
      }));
    const se = [
      e[0],
      { maxLines: 2 },
      { media: { height: '115', src: 'https://via.placeholder.com/200x112&text=200x112', width: '200' } },
      { title: 'Small media reverse card list element' },
      { type: 'small-media--reverse' },
    ];
    let ae = {};
    for (let e = 0; e < se.length; e += 1) ae = t(ae, se[e]);
    (S = new Zn({ props: ae })),
      (A = new Sa({
        props: {
          language: 'html',
          source:
            '\n    <ArticleCard\n      {...article}\n      maxLines={2}\n      media="{{\n        height: \'115\',\n        src: \'https://via.placeholder.com/200x112&text=200x112\',\n        width: \'200\',\n      }}"\n      title="Small media reverse card list element"\n      type="small-media--reverse" />\n  ',
        },
      })),
      (V = new Zn({ props: { loading: !0 } })),
      (D = new Zn({ props: { loading: !0, type: 'small-media' } })),
      (I = new Zn({ props: { loading: !0, type: 'small-media--reverse' } })),
      (G = new Sa({
        props: {
          language: 'html',
          source:
            '\n      <ArticleCard loading={true} />\n      <ArticleCard loading={true} type="small-media" />\n      <ArticleCard loading={true} type="small-media--reverse" />\n    ',
        },
      }));
    const le = [{ isPlus: !0 }, e[0], { style: 'width: 215px;' }];
    let re = {};
    for (let e = 0; e < le.length; e += 1) re = t(re, le[e]);
    return (
      (Y = new Zn({ props: re })),
      {
        c() {
          (n = w('div')),
            (s = w('h1')),
            (s.textContent = 'ArticleCard'),
            (a = k()),
            ue(l.$$.fragment),
            (r = k()),
            (i = w('p')),
            (i.textContent = 'ArticleCard attributer'),
            (o = k()),
            ue(c.$$.fragment),
            (d = k()),
            ue(g.$$.fragment),
            (u = k()),
            ue(f.$$.fragment),
            (m = k()),
            ue(p.$$.fragment),
            (v = k()),
            ue(b.$$.fragment),
            (y = k()),
            ue(C.$$.fragment),
            (z = k()),
            ue(L.$$.fragment),
            (N = k()),
            ue(T.$$.fragment),
            (M = k()),
            ue(F.$$.fragment),
            (E = k()),
            ue(S.$$.fragment),
            (H = k()),
            ue(A.$$.fragment),
            (_ = k()),
            (P = w('h2')),
            (P.textContent = 'Loading placeholder'),
            (j = k()),
            ue(V.$$.fragment),
            (O = k()),
            ue(D.$$.fragment),
            (q = k()),
            ue(I.$$.fragment),
            (R = k()),
            ue(G.$$.fragment),
            (U = k()),
            ue(Y.$$.fragment),
            B(s, 'class', 'color--eb'),
            B(n, 'class', 'grid-width--small');
        },
        m(e, t) {
          h(e, n, t),
            $(n, s),
            $(n, a),
            fe(l, n, null),
            $(n, r),
            $(n, i),
            $(n, o),
            fe(c, n, null),
            $(n, d),
            fe(g, n, null),
            $(n, u),
            fe(f, n, null),
            $(n, m),
            fe(p, n, null),
            $(n, v),
            fe(b, n, null),
            $(n, y),
            fe(C, n, null),
            $(n, z),
            fe(L, n, null),
            $(n, N),
            fe(T, n, null),
            $(n, M),
            fe(F, n, null),
            $(n, E),
            fe(S, n, null),
            $(n, H),
            fe(A, n, null),
            $(n, _),
            $(n, P),
            $(n, j),
            fe(V, n, null),
            $(n, O),
            fe(D, n, null),
            $(n, q),
            fe(I, n, null),
            $(n, R),
            fe(G, n, null),
            $(n, U),
            fe(Y, n, null),
            (W = !0);
        },
        p(e, [t]) {
          const n = 1 & t ? ce(Z, [de(e[0]), Z[1]]) : {};
          g.$set(n);
          const s = 2 & t ? ce(X, [de(e[1])]) : {};
          f.$set(s);
          const a = 4 & t ? ce(Q, [de(e[2])]) : {};
          p.$set(a);
          const l = 1 & t ? ce(te, [de(e[0]), te[1], te[2]]) : {};
          T.$set(l);
          const r = 1 & t ? ce(se, [de(e[0]), se[1], se[2], se[3], se[4]]) : {};
          S.$set(r);
          const i = 1 & t ? ce(le, [le[0], de(e[0]), le[2]]) : {};
          Y.$set(i);
        },
        i(e) {
          W ||
            (ie(l.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(g.$$.fragment, e),
            ie(f.$$.fragment, e),
            ie(p.$$.fragment, e),
            ie(b.$$.fragment, e),
            ie(C.$$.fragment, e),
            ie(L.$$.fragment, e),
            ie(T.$$.fragment, e),
            ie(F.$$.fragment, e),
            ie(S.$$.fragment, e),
            ie(A.$$.fragment, e),
            ie(V.$$.fragment, e),
            ie(D.$$.fragment, e),
            ie(I.$$.fragment, e),
            ie(G.$$.fragment, e),
            ie(Y.$$.fragment, e),
            (W = !0));
        },
        o(e) {
          oe(l.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(g.$$.fragment, e),
            oe(f.$$.fragment, e),
            oe(p.$$.fragment, e),
            oe(b.$$.fragment, e),
            oe(C.$$.fragment, e),
            oe(L.$$.fragment, e),
            oe(T.$$.fragment, e),
            oe(F.$$.fragment, e),
            oe(S.$$.fragment, e),
            oe(A.$$.fragment, e),
            oe(V.$$.fragment, e),
            oe(D.$$.fragment, e),
            oe(I.$$.fragment, e),
            oe(G.$$.fragment, e),
            oe(Y.$$.fragment, e),
            (W = !1);
        },
        d(e) {
          e && x(n),
            me(l),
            me(c),
            me(g),
            me(f),
            me(p),
            me(b),
            me(C),
            me(L),
            me(T),
            me(F),
            me(S),
            me(A),
            me(V),
            me(D),
            me(I),
            me(G),
            me(Y);
        },
      }
    );
  }
  function Pa(e) {
    let t = {
      href: '#',
      isPlus: !0,
      media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
      section: 'Udenlandsk fodbold',
      colorClass: 'sport',
      timestamp: 'Thu Mar 31 2021 20:46:32',
      title: "Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer'",
    };
    return (
      document.addEventListener(
        'articleCardInview',
        function (e) {
          console.log('articleCardInview', e);
        },
        !1
      ),
      [
        {
          href: '#',
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Sport',
          colorClass: 'sport',
          timestamp: 'Thu Mar 18 2021 20:46:32',
          title: 'List element',
        },
        {
          href: '#',
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Underholdning',
          colorClass: 'underholdning',
          timestamp: 'Thu Mar 28 2021 20:46:32',
          title: 'List element',
        },
        t,
      ]
    );
  }
  function ja(e) {
    let t;
    return {
      c() {
        t = y('Standard badge');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Va(e) {
    let t;
    return {
      c() {
        t = y('Primary');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Oa(e) {
    let t;
    return {
      c() {
        t = y('Secondary');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Da(e) {
    let t;
    return {
      c() {
        t = y('Success');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function qa(e) {
    let t;
    return {
      c() {
        t = y('Danger');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ia(e) {
    let t;
    return {
      c() {
        t = y('Bandekriminialitet');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ra(e) {
    let t;
    return {
      c() {
        t = y('Sport');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ga(e) {
    let t;
    return {
      c() {
        t = y('Nicklas Bendtner');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ua(e) {
    let t;
    return {
      c() {
        (t = w('small')), (t.textContent = 'Small text uppercase');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ya(e) {
    let t;
    return {
      c() {
        t = y('Native');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Wa(e) {
    let t;
    return {
      c() {
        t = y('Greendark xsmall');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Za(e) {
    let t, n;
    return {
      c() {
        (t = y('Badge with icon ')), (n = w('i')), B(n, 'class', 'fa fal fa-trash');
      },
      m(e, s) {
        h(e, t, s), h(e, n, s);
      },
      d(e) {
        e && x(t), e && x(n);
      },
    };
  }
  function Ja(e) {
    let t;
    return {
      c() {
        t = y('Badge with onClick will have cursor pointer');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Xa(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f,
      m,
      p,
      v,
      b,
      y,
      C,
      z,
      L,
      N,
      T,
      M,
      F,
      E,
      S,
      H,
      A,
      _,
      P,
      j,
      V,
      O,
      D,
      q,
      I,
      R,
      G,
      U,
      Y,
      W,
      Z,
      J,
      X,
      K,
      Q,
      ee,
      te,
      ne,
      se,
      ae,
      le,
      re,
      ce;
    return (
      (l = new Sa({ props: { language: 'js', source: "import { Badge } from '@ekstra-bladet/designsystem';" } })),
      (o = new es({ props: { className: 'margin-s', $$slots: { default: [ja] }, $$scope: { ctx: e } } })),
      (d = new Sa({
        props: {
          language: Ka,
          source:
            '\n  <div class="margin-l--tb">\n    <Badge className="margin-s">Standard badge</Badge>\n  </div>\n  ',
        },
      })),
      (p = new es({
        props: { className: 'margin-s', type: 'primary', $$slots: { default: [Va] }, $$scope: { ctx: e } },
      })),
      (b = new es({
        props: { className: 'margin-s', type: 'secondary', $$slots: { default: [Oa] }, $$scope: { ctx: e } },
      })),
      (C = new es({
        props: { className: 'margin-s', type: 'success', $$slots: { default: [Da] }, $$scope: { ctx: e } },
      })),
      (L = new es({
        props: { className: 'margin-s', type: 'danger', $$slots: { default: [qa] }, $$scope: { ctx: e } },
      })),
      (T = new Sa({
        props: {
          language: Ka,
          source:
            '\n  <div class="margin-l--tb">\n    <Badge className="margin-s" type="primary">Primary</Badge>\n    <Badge className="margin-s" type="secondary">Secondary</Badge>\n    <Badge className="margin-s" type="success">Success</Badge>\n    <Badge className="margin-s" type="danger">Danger</Badge>\n  </div>\n  ',
        },
      })),
      (H = new es({
        props: { href: '#', className: 'margin-s bg--bluedark', $$slots: { default: [Ia] }, $$scope: { ctx: e } },
      })),
      (_ = new es({
        props: { href: '#', className: 'margin-s bg--green', $$slots: { default: [Ra] }, $$scope: { ctx: e } },
      })),
      (j = new es({
        props: { href: '#', className: 'margin-s bg--greendark', $$slots: { default: [Ga] }, $$scope: { ctx: e } },
      })),
      (O = new Sa({
        props: {
          language: Ka,
          source:
            '\n  <div class="margin-l--tb">\n    <Badge href="#" className="margin-s {BluedarkCSSClass}">Bandekriminialitet</Badge>\n    <Badge href="#" className="margin-s {GreenCSSClass}">Sport</Badge>\n    <Badge href="#" className="margin-s {GreendarkCSSClass}">Nicklas Bendtner</Badge>\n  </div>\n  ',
        },
      })),
      (G = new es({
        props: { className: 'text-transform--uppercase', $$slots: { default: [Ua] }, $$scope: { ctx: e } },
      })),
      (Y = new es({ props: { className: 'bg--native', $$slots: { default: [Ya] }, $$scope: { ctx: e } } })),
      (Z = new es({
        props: {
          className: 'badge--small fontsize-xsmall bg--greendark',
          $$slots: { default: [Wa] },
          $$scope: { ctx: e },
        },
      })),
      (X = new es({ props: { $$slots: { default: [Za] }, $$scope: { ctx: e } } })),
      (Q = new Sa({
        props: {
          language: Ka,
          source:
            '\n  <div class="margin-l--tb">\n    <Badge className="text-transform--uppercase"><small>Small text uppercase</small></Badge>\n    <Badge className="bg--native">Native</Badge>\n    <Badge className="badge--small {GreendarkCSSClass} fontsize-xsmall">Greendark xsmall</Badge>\n    <Badge>Badge with icon <i class="fa fal fa-trash" /></Badge>\n  </div>\n  ',
        },
      })),
      (ae = new es({ props: { onClick: e[0], $$slots: { default: [Ja] }, $$scope: { ctx: e } } })),
      (re = new Sa({
        props: {
          language: Ka,
          source:
            '\n  <div class="margin-l--tb">\n    <Badge onClick={() => alert(\'Hello World!\')}></Badge>\n  </div>\n  ',
        },
      })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Badge'),
            (n = k()),
            (s = w('p')),
            (s.textContent =
              'Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.'),
            (a = k()),
            ue(l.$$.fragment),
            (r = k()),
            (i = w('div')),
            ue(o.$$.fragment),
            (c = k()),
            ue(d.$$.fragment),
            (g = k()),
            (u = w('p')),
            (u.textContent = 'Prædefinerede farver:'),
            (f = k()),
            (m = w('div')),
            ue(p.$$.fragment),
            (v = k()),
            ue(b.$$.fragment),
            (y = k()),
            ue(C.$$.fragment),
            (z = k()),
            ue(L.$$.fragment),
            (N = k()),
            ue(T.$$.fragment),
            (M = k()),
            (F = w('p')),
            (F.textContent = 'Som links / aktive tags:'),
            (E = k()),
            (S = w('div')),
            ue(H.$$.fragment),
            (A = k()),
            ue(_.$$.fragment),
            (P = k()),
            ue(j.$$.fragment),
            (V = k()),
            ue(O.$$.fragment),
            (D = k()),
            (q = w('p')),
            (q.textContent = 'Andre farver og variationer:'),
            (I = k()),
            (R = w('div')),
            ue(G.$$.fragment),
            (U = k()),
            ue(Y.$$.fragment),
            (W = k()),
            ue(Z.$$.fragment),
            (J = k()),
            ue(X.$$.fragment),
            (K = k()),
            ue(Q.$$.fragment),
            (ee = k()),
            (te = w('p')),
            (te.textContent = 'on:click:'),
            (ne = k()),
            (se = w('div')),
            ue(ae.$$.fragment),
            (le = k()),
            ue(re.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(i, 'class', 'margin-l--tb'),
            B(m, 'class', 'margin-l--tb'),
            B(S, 'class', 'margin-l--tb'),
            B(R, 'class', 'margin-l--tb'),
            B(se, 'class', 'margin-l--tb');
        },
        m(e, x) {
          h(e, t, x),
            h(e, n, x),
            h(e, s, x),
            h(e, a, x),
            fe(l, e, x),
            h(e, r, x),
            h(e, i, x),
            fe(o, i, null),
            h(e, c, x),
            fe(d, e, x),
            h(e, g, x),
            h(e, u, x),
            h(e, f, x),
            h(e, m, x),
            fe(p, m, null),
            $(m, v),
            fe(b, m, null),
            $(m, y),
            fe(C, m, null),
            $(m, z),
            fe(L, m, null),
            h(e, N, x),
            fe(T, e, x),
            h(e, M, x),
            h(e, F, x),
            h(e, E, x),
            h(e, S, x),
            fe(H, S, null),
            $(S, A),
            fe(_, S, null),
            $(S, P),
            fe(j, S, null),
            h(e, V, x),
            fe(O, e, x),
            h(e, D, x),
            h(e, q, x),
            h(e, I, x),
            h(e, R, x),
            fe(G, R, null),
            $(R, U),
            fe(Y, R, null),
            $(R, W),
            fe(Z, R, null),
            $(R, J),
            fe(X, R, null),
            h(e, K, x),
            fe(Q, e, x),
            h(e, ee, x),
            h(e, te, x),
            h(e, ne, x),
            h(e, se, x),
            fe(ae, se, null),
            h(e, le, x),
            fe(re, e, x),
            (ce = !0);
        },
        p(e, [t]) {
          const n = {};
          2 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
          const s = {};
          2 & t && (s.$$scope = { dirty: t, ctx: e }), p.$set(s);
          const a = {};
          2 & t && (a.$$scope = { dirty: t, ctx: e }), b.$set(a);
          const l = {};
          2 & t && (l.$$scope = { dirty: t, ctx: e }), C.$set(l);
          const r = {};
          2 & t && (r.$$scope = { dirty: t, ctx: e }), L.$set(r);
          const i = {};
          2 & t && (i.$$scope = { dirty: t, ctx: e }), H.$set(i);
          const c = {};
          2 & t && (c.$$scope = { dirty: t, ctx: e }), _.$set(c);
          const d = {};
          2 & t && (d.$$scope = { dirty: t, ctx: e }), j.$set(d);
          const g = {};
          2 & t && (g.$$scope = { dirty: t, ctx: e }), G.$set(g);
          const u = {};
          2 & t && (u.$$scope = { dirty: t, ctx: e }), Y.$set(u);
          const f = {};
          2 & t && (f.$$scope = { dirty: t, ctx: e }), Z.$set(f);
          const m = {};
          2 & t && (m.$$scope = { dirty: t, ctx: e }), X.$set(m);
          const $ = {};
          2 & t && ($.$$scope = { dirty: t, ctx: e }), ae.$set($);
        },
        i(e) {
          ce ||
            (ie(l.$$.fragment, e),
            ie(o.$$.fragment, e),
            ie(d.$$.fragment, e),
            ie(p.$$.fragment, e),
            ie(b.$$.fragment, e),
            ie(C.$$.fragment, e),
            ie(L.$$.fragment, e),
            ie(T.$$.fragment, e),
            ie(H.$$.fragment, e),
            ie(_.$$.fragment, e),
            ie(j.$$.fragment, e),
            ie(O.$$.fragment, e),
            ie(G.$$.fragment, e),
            ie(Y.$$.fragment, e),
            ie(Z.$$.fragment, e),
            ie(X.$$.fragment, e),
            ie(Q.$$.fragment, e),
            ie(ae.$$.fragment, e),
            ie(re.$$.fragment, e),
            (ce = !0));
        },
        o(e) {
          oe(l.$$.fragment, e),
            oe(o.$$.fragment, e),
            oe(d.$$.fragment, e),
            oe(p.$$.fragment, e),
            oe(b.$$.fragment, e),
            oe(C.$$.fragment, e),
            oe(L.$$.fragment, e),
            oe(T.$$.fragment, e),
            oe(H.$$.fragment, e),
            oe(_.$$.fragment, e),
            oe(j.$$.fragment, e),
            oe(O.$$.fragment, e),
            oe(G.$$.fragment, e),
            oe(Y.$$.fragment, e),
            oe(Z.$$.fragment, e),
            oe(X.$$.fragment, e),
            oe(Q.$$.fragment, e),
            oe(ae.$$.fragment, e),
            oe(re.$$.fragment, e),
            (ce = !1);
        },
        d(e) {
          e && x(t),
            e && x(n),
            e && x(s),
            e && x(a),
            me(l, e),
            e && x(r),
            e && x(i),
            me(o),
            e && x(c),
            me(d, e),
            e && x(g),
            e && x(u),
            e && x(f),
            e && x(m),
            me(p),
            me(b),
            me(C),
            me(L),
            e && x(N),
            me(T, e),
            e && x(M),
            e && x(F),
            e && x(E),
            e && x(S),
            me(H),
            me(_),
            me(j),
            e && x(V),
            me(O, e),
            e && x(D),
            e && x(q),
            e && x(I),
            e && x(R),
            me(G),
            me(Y),
            me(Z),
            me(X),
            e && x(K),
            me(Q, e),
            e && x(ee),
            e && x(te),
            e && x(ne),
            e && x(se),
            me(ae),
            e && x(le),
            me(re, e);
        },
      }
    );
  }
  const Ka = 'html';
  function Qa(e) {
    return [() => alert('Hello World!')];
  }
  function el(e) {
    let t;
    return {
      c() {
        t = y('Base button');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function tl(e) {
    let t;
    return {
      c() {
        t = y('Base button as anchor element');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function nl(e) {
    let t;
    return {
      c() {
        t = y('Button solid');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function sl(e) {
    let t;
    return {
      c() {
        t = y('Button link');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function al(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '30px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ll(e) {
    let t;
    return {
      c() {
        t = y('Button big');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function rl(e) {
    let t;
    return {
      c() {
        t = y('Button small');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function il(e) {
    let t;
    return {
      c() {
        t = y('Button big solid');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ol(e) {
    let t;
    return {
      c() {
        t = y('Button big link');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function cl(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '30px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function dl(e) {
    let t;
    return {
      c() {
        t = y('Button small solid');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function gl(e) {
    let t;
    return {
      c() {
        t = y('Button small link');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ul(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '30px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function fl(e) {
    let t;
    return {
      c() {
        t = y('Button primary');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ml(e) {
    let t;
    return {
      c() {
        t = y('Button secondary');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function pl(e) {
    let t;
    return {
      c() {
        t = y('Button accept');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function $l(e) {
    let t;
    return {
      c() {
        t = y('Button cancel');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function hl(t) {
    let n, s, a, l;
    return (
      (a = new Vn({ props: { className: 'icon', name: 'medielogin', width: '20' } })),
      {
        c() {
          (n = w('span')), (n.textContent = 'button with icon right'), (s = k()), ue(a.$$.fragment);
        },
        m(e, t) {
          h(e, n, t), h(e, s, t), fe(a, e, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (ie(a.$$.fragment, e), (l = !0));
        },
        o(e) {
          oe(a.$$.fragment, e), (l = !1);
        },
        d(e) {
          e && x(n), e && x(s), me(a, e);
        },
      }
    );
  }
  function xl(t) {
    let n, s, a, l;
    return (
      (n = new Vn({ props: { className: 'icon', name: 'angle-left', width: '20' } })),
      {
        c() {
          ue(n.$$.fragment), (s = k()), (a = w('span')), (a.textContent = 'button with icon left');
        },
        m(e, t) {
          fe(n, e, t), h(e, s, t), h(e, a, t), (l = !0);
        },
        p: e,
        i(e) {
          l || (ie(n.$$.fragment, e), (l = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), (l = !1);
        },
        d(e) {
          me(n, e), e && x(s), e && x(a);
        },
      }
    );
  }
  function vl(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '30px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function wl(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '30px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function bl(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '30px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function yl(e) {
    let t;
    return {
      c() {
        (t = w('span')), (t.textContent = '×'), E(t, 'font-size', '40px');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function kl(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f,
      m,
      p,
      v,
      b,
      y,
      C,
      z,
      L,
      N,
      T,
      M,
      F,
      E,
      S,
      H,
      A,
      _,
      P,
      j,
      V,
      O,
      D,
      q,
      I,
      R,
      G,
      U,
      Y,
      W,
      Z,
      J,
      X,
      K,
      Q,
      ee,
      te,
      ne,
      se,
      ae,
      le,
      re,
      ce,
      de,
      ge,
      pe,
      $e,
      he,
      xe,
      ve,
      we,
      be,
      ye,
      ke,
      Ce,
      ze,
      Be,
      Le,
      Ne,
      Te,
      Me,
      Fe,
      Ee,
      Se,
      He,
      Ae,
      _e,
      Pe,
      je,
      Ve,
      Oe,
      De,
      qe;
    return (
      (s = new Sa({ props: { language: 'js', source: "import { Button } from '@ekstra-bladet/designsystem';" } })),
      (l = new cs({ props: { $$slots: { default: [el] }, $$scope: { ctx: e } } })),
      l.$on('click', e[0]),
      (i = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button on:click="{() => {\n    console.log(\'click the button\');\n  }}">Base button</Button>\n  ',
        },
      })),
      (c = new cs({ props: { href: '#', $$slots: { default: [tl] }, $$scope: { ctx: e } } })),
      c.$on('click', zl),
      (g = new Sa({
        props: { language: Cl, source: '\n  <Button href="#" on:click="{buttonClick}">Base button</Button>\n  ' },
      })),
      (z = new cs({
        props: { className: 'margin-m', extension: 'solid', $$slots: { default: [nl] }, $$scope: { ctx: e } },
      })),
      (N = new cs({
        props: { className: 'margin-m', extension: 'link', $$slots: { default: [sl] }, $$scope: { ctx: e } },
      })),
      (M = new cs({
        props: { className: 'margin-m', extension: 'icon', $$slots: { default: [al] }, $$scope: { ctx: e } },
      })),
      (E = new cs({ props: { className: 'margin-m', size: 'big', $$slots: { default: [ll] }, $$scope: { ctx: e } } })),
      (H = new cs({
        props: { className: 'margin-m', size: 'small', $$slots: { default: [rl] }, $$scope: { ctx: e } },
      })),
      (_ = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button className="margin-m" extension="solid">Button solid</Button>\n  <Button className="margin-m" extension="link">Button link</Button>\n  <Button className="margin-m" extension="icon">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" size="big">Button big</Button>\n  <Button className="margin-m" size="small">Button small</Button>\n  ',
        },
      })),
      (I = new cs({
        props: {
          className: 'margin-m',
          size: 'big',
          extension: 'solid',
          $$slots: { default: [il] },
          $$scope: { ctx: e },
        },
      })),
      (G = new cs({
        props: {
          className: 'margin-m',
          size: 'big',
          extension: 'link',
          $$slots: { default: [ol] },
          $$scope: { ctx: e },
        },
      })),
      (Y = new cs({
        props: {
          className: 'margin-m',
          size: 'big',
          extension: 'icon',
          $$slots: { default: [cl] },
          $$scope: { ctx: e },
        },
      })),
      (J = new cs({
        props: {
          className: 'margin-m',
          size: 'small',
          extension: 'solid',
          $$slots: { default: [dl] },
          $$scope: { ctx: e },
        },
      })),
      (K = new cs({
        props: {
          className: 'margin-m',
          size: 'small',
          extension: 'link',
          $$slots: { default: [gl] },
          $$scope: { ctx: e },
        },
      })),
      (ee = new cs({
        props: {
          className: 'margin-m',
          size: 'small',
          extension: 'icon',
          $$slots: { default: [ul] },
          $$scope: { ctx: e },
        },
      })),
      (ne = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button className="margin-m" size="big">Button big</Button>\n  <Button className="margin-m" size="big" extension="solid">Button big solid</Button>\n  <Button className="margin-m" size="big" extension="link">Button big link</Button>\n  <Button className="margin-m" size="small" extension="solid">Button small solid</Button>\n  <Button className="margin-m" size="small" extension="link">Button small link</Button>\n  <Button className="margin-m" size="small" extension="icon">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  ',
        },
      })),
      (ce = new cs({
        props: { className: 'margin-m', type: 'primary', $$slots: { default: [fl] }, $$scope: { ctx: e } },
      })),
      (ge = new cs({
        props: { className: 'margin-m', type: 'secondary', $$slots: { default: [ml] }, $$scope: { ctx: e } },
      })),
      ($e = new cs({
        props: { className: 'margin-m', type: 'accept', $$slots: { default: [pl] }, $$scope: { ctx: e } },
      })),
      (xe = new cs({
        props: { className: 'margin-m', type: 'cancel', $$slots: { default: [$l] }, $$scope: { ctx: e } },
      })),
      (we = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button className="margin-m" type="primary">Button primary</Button>\n  <Button className="margin-m" type="secondary">Button secondary</Button>\n  <Button className="margin-m" type="accept">Button accept</Button>\n  <Button className="margin-m" type="cancel">Button cancel</Button>\n  ',
        },
      })),
      (Ce = new cs({ props: { className: 'margin-m', $$slots: { default: [hl] }, $$scope: { ctx: e } } })),
      (Be = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button className="margin-m">\n    <span>button with icon right</span>\n    <Icon className="icon" name="medielogin" width="20"/>\n  </Button>\n  ',
        },
      })),
      (Ne = new cs({ props: { className: 'margin-m', $$slots: { default: [xl] }, $$scope: { ctx: e } } })),
      (Me = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button className="margin-m">\n    <Icon className="icon" name="angle-left" width="20"/>\n    <span>button with icon right</span>\n  </Button>\n  ',
        },
      })),
      (Se = new cs({
        props: { className: 'margin-m', extension: 'icon', $$slots: { default: [vl] }, $$scope: { ctx: e } },
      })),
      (Ae = new cs({
        props: {
          className: 'margin-m',
          size: 'small',
          extension: 'icon solid',
          $$slots: { default: [wl] },
          $$scope: { ctx: e },
        },
      })),
      (Pe = new cs({
        props: { className: 'margin-m', extension: 'icon solid', $$slots: { default: [bl] }, $$scope: { ctx: e } },
      })),
      (Ve = new cs({
        props: {
          className: 'margin-m',
          size: 'big',
          extension: 'icon solid',
          $$slots: { default: [yl] },
          $$scope: { ctx: e },
        },
      })),
      (De = new Sa({
        props: {
          language: Cl,
          source:
            '\n  <Button className="margin-m" extension="icon">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" size="small" extension="icon solid">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" extension="icon solid">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" size="big" extension="icon solid">\n    <span style="font-size: 40px">&times;</span>\n  </Button>\n  ',
        },
      })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Buttons'),
            (n = k()),
            ue(s.$$.fragment),
            (a = k()),
            ue(l.$$.fragment),
            (r = k()),
            ue(i.$$.fragment),
            (o = k()),
            ue(c.$$.fragment),
            (d = k()),
            ue(g.$$.fragment),
            (u = k()),
            (f = w('h3')),
            (f.textContent = 'extension attribute'),
            (m = k()),
            (p = w('p')),
            (p.textContent = 'options'),
            (v = k()),
            (b = w('ul')),
            (b.innerHTML = '<li>solid</li> \n  <li>link</li> \n  <li>icon</li> \n  <li>big</li> \n  <li>small</li>'),
            (y = k()),
            (C = w('div')),
            ue(z.$$.fragment),
            (L = k()),
            ue(N.$$.fragment),
            (T = k()),
            ue(M.$$.fragment),
            (F = k()),
            ue(E.$$.fragment),
            (S = k()),
            ue(H.$$.fragment),
            (A = k()),
            ue(_.$$.fragment),
            (P = k()),
            (j = w('h3')),
            (j.textContent = 'Size attribute'),
            (V = k()),
            (O = w('p')),
            (O.innerHTML = '<b>big</b> and <b>small</b> can be combined with the other three extensions'),
            (D = k()),
            (q = w('div')),
            ue(I.$$.fragment),
            (R = k()),
            ue(G.$$.fragment),
            (U = k()),
            ue(Y.$$.fragment),
            (W = k()),
            (Z = w('div')),
            ue(J.$$.fragment),
            (X = k()),
            ue(K.$$.fragment),
            (Q = k()),
            ue(ee.$$.fragment),
            (te = k()),
            ue(ne.$$.fragment),
            (se = k()),
            (ae = w('h3')),
            (ae.textContent = 'Styles'),
            (le = k()),
            (re = w('div')),
            ue(ce.$$.fragment),
            (de = k()),
            ue(ge.$$.fragment),
            (pe = k()),
            ue($e.$$.fragment),
            (he = k()),
            ue(xe.$$.fragment),
            (ve = k()),
            ue(we.$$.fragment),
            (be = k()),
            (ye = w('h3')),
            (ye.textContent = 'Buttons with Icon'),
            (ke = k()),
            ue(Ce.$$.fragment),
            (ze = k()),
            ue(Be.$$.fragment),
            (Le = k()),
            ue(Ne.$$.fragment),
            (Te = k()),
            ue(Me.$$.fragment),
            (Fe = k()),
            (Ee = w('div')),
            ue(Se.$$.fragment),
            (He = k()),
            ue(Ae.$$.fragment),
            (_e = k()),
            ue(Pe.$$.fragment),
            (je = k()),
            ue(Ve.$$.fragment),
            (Oe = k()),
            ue(De.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(C, 'class', 'flex'),
            B(q, 'class', 'flex'),
            B(Z, 'class', 'flex'),
            B(re, 'class', 'flex'),
            B(Ee, 'class', 'flex');
        },
        m(e, x) {
          h(e, t, x),
            h(e, n, x),
            fe(s, e, x),
            h(e, a, x),
            fe(l, e, x),
            h(e, r, x),
            fe(i, e, x),
            h(e, o, x),
            fe(c, e, x),
            h(e, d, x),
            fe(g, e, x),
            h(e, u, x),
            h(e, f, x),
            h(e, m, x),
            h(e, p, x),
            h(e, v, x),
            h(e, b, x),
            h(e, y, x),
            h(e, C, x),
            fe(z, C, null),
            $(C, L),
            fe(N, C, null),
            $(C, T),
            fe(M, C, null),
            $(C, F),
            fe(E, C, null),
            $(C, S),
            fe(H, C, null),
            h(e, A, x),
            fe(_, e, x),
            h(e, P, x),
            h(e, j, x),
            h(e, V, x),
            h(e, O, x),
            h(e, D, x),
            h(e, q, x),
            fe(I, q, null),
            $(q, R),
            fe(G, q, null),
            $(q, U),
            fe(Y, q, null),
            h(e, W, x),
            h(e, Z, x),
            fe(J, Z, null),
            $(Z, X),
            fe(K, Z, null),
            $(Z, Q),
            fe(ee, Z, null),
            h(e, te, x),
            fe(ne, e, x),
            h(e, se, x),
            h(e, ae, x),
            h(e, le, x),
            h(e, re, x),
            fe(ce, re, null),
            $(re, de),
            fe(ge, re, null),
            $(re, pe),
            fe($e, re, null),
            $(re, he),
            fe(xe, re, null),
            h(e, ve, x),
            fe(we, e, x),
            h(e, be, x),
            h(e, ye, x),
            h(e, ke, x),
            fe(Ce, e, x),
            h(e, ze, x),
            fe(Be, e, x),
            h(e, Le, x),
            fe(Ne, e, x),
            h(e, Te, x),
            fe(Me, e, x),
            h(e, Fe, x),
            h(e, Ee, x),
            fe(Se, Ee, null),
            $(Ee, He),
            fe(Ae, Ee, null),
            $(Ee, _e),
            fe(Pe, Ee, null),
            $(Ee, je),
            fe(Ve, Ee, null),
            h(e, Oe, x),
            fe(De, e, x),
            (qe = !0);
        },
        p(e, [t]) {
          const n = {};
          2 & t && (n.$$scope = { dirty: t, ctx: e }), l.$set(n);
          const s = {};
          2 & t && (s.$$scope = { dirty: t, ctx: e }), c.$set(s);
          const a = {};
          2 & t && (a.$$scope = { dirty: t, ctx: e }), z.$set(a);
          const r = {};
          2 & t && (r.$$scope = { dirty: t, ctx: e }), N.$set(r);
          const i = {};
          2 & t && (i.$$scope = { dirty: t, ctx: e }), M.$set(i);
          const o = {};
          2 & t && (o.$$scope = { dirty: t, ctx: e }), E.$set(o);
          const d = {};
          2 & t && (d.$$scope = { dirty: t, ctx: e }), H.$set(d);
          const g = {};
          2 & t && (g.$$scope = { dirty: t, ctx: e }), I.$set(g);
          const u = {};
          2 & t && (u.$$scope = { dirty: t, ctx: e }), G.$set(u);
          const f = {};
          2 & t && (f.$$scope = { dirty: t, ctx: e }), Y.$set(f);
          const m = {};
          2 & t && (m.$$scope = { dirty: t, ctx: e }), J.$set(m);
          const p = {};
          2 & t && (p.$$scope = { dirty: t, ctx: e }), K.$set(p);
          const $ = {};
          2 & t && ($.$$scope = { dirty: t, ctx: e }), ee.$set($);
          const h = {};
          2 & t && (h.$$scope = { dirty: t, ctx: e }), ce.$set(h);
          const x = {};
          2 & t && (x.$$scope = { dirty: t, ctx: e }), ge.$set(x);
          const v = {};
          2 & t && (v.$$scope = { dirty: t, ctx: e }), $e.$set(v);
          const w = {};
          2 & t && (w.$$scope = { dirty: t, ctx: e }), xe.$set(w);
          const b = {};
          2 & t && (b.$$scope = { dirty: t, ctx: e }), Ce.$set(b);
          const y = {};
          2 & t && (y.$$scope = { dirty: t, ctx: e }), Ne.$set(y);
          const k = {};
          2 & t && (k.$$scope = { dirty: t, ctx: e }), Se.$set(k);
          const C = {};
          2 & t && (C.$$scope = { dirty: t, ctx: e }), Ae.$set(C);
          const B = {};
          2 & t && (B.$$scope = { dirty: t, ctx: e }), Pe.$set(B);
          const L = {};
          2 & t && (L.$$scope = { dirty: t, ctx: e }), Ve.$set(L);
        },
        i(e) {
          qe ||
            (ie(s.$$.fragment, e),
            ie(l.$$.fragment, e),
            ie(i.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(g.$$.fragment, e),
            ie(z.$$.fragment, e),
            ie(N.$$.fragment, e),
            ie(M.$$.fragment, e),
            ie(E.$$.fragment, e),
            ie(H.$$.fragment, e),
            ie(_.$$.fragment, e),
            ie(I.$$.fragment, e),
            ie(G.$$.fragment, e),
            ie(Y.$$.fragment, e),
            ie(J.$$.fragment, e),
            ie(K.$$.fragment, e),
            ie(ee.$$.fragment, e),
            ie(ne.$$.fragment, e),
            ie(ce.$$.fragment, e),
            ie(ge.$$.fragment, e),
            ie($e.$$.fragment, e),
            ie(xe.$$.fragment, e),
            ie(we.$$.fragment, e),
            ie(Ce.$$.fragment, e),
            ie(Be.$$.fragment, e),
            ie(Ne.$$.fragment, e),
            ie(Me.$$.fragment, e),
            ie(Se.$$.fragment, e),
            ie(Ae.$$.fragment, e),
            ie(Pe.$$.fragment, e),
            ie(Ve.$$.fragment, e),
            ie(De.$$.fragment, e),
            (qe = !0));
        },
        o(e) {
          oe(s.$$.fragment, e),
            oe(l.$$.fragment, e),
            oe(i.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(g.$$.fragment, e),
            oe(z.$$.fragment, e),
            oe(N.$$.fragment, e),
            oe(M.$$.fragment, e),
            oe(E.$$.fragment, e),
            oe(H.$$.fragment, e),
            oe(_.$$.fragment, e),
            oe(I.$$.fragment, e),
            oe(G.$$.fragment, e),
            oe(Y.$$.fragment, e),
            oe(J.$$.fragment, e),
            oe(K.$$.fragment, e),
            oe(ee.$$.fragment, e),
            oe(ne.$$.fragment, e),
            oe(ce.$$.fragment, e),
            oe(ge.$$.fragment, e),
            oe($e.$$.fragment, e),
            oe(xe.$$.fragment, e),
            oe(we.$$.fragment, e),
            oe(Ce.$$.fragment, e),
            oe(Be.$$.fragment, e),
            oe(Ne.$$.fragment, e),
            oe(Me.$$.fragment, e),
            oe(Se.$$.fragment, e),
            oe(Ae.$$.fragment, e),
            oe(Pe.$$.fragment, e),
            oe(Ve.$$.fragment, e),
            oe(De.$$.fragment, e),
            (qe = !1);
        },
        d(e) {
          e && x(t),
            e && x(n),
            me(s, e),
            e && x(a),
            me(l, e),
            e && x(r),
            me(i, e),
            e && x(o),
            me(c, e),
            e && x(d),
            me(g, e),
            e && x(u),
            e && x(f),
            e && x(m),
            e && x(p),
            e && x(v),
            e && x(b),
            e && x(y),
            e && x(C),
            me(z),
            me(N),
            me(M),
            me(E),
            me(H),
            e && x(A),
            me(_, e),
            e && x(P),
            e && x(j),
            e && x(V),
            e && x(O),
            e && x(D),
            e && x(q),
            me(I),
            me(G),
            me(Y),
            e && x(W),
            e && x(Z),
            me(J),
            me(K),
            me(ee),
            e && x(te),
            me(ne, e),
            e && x(se),
            e && x(ae),
            e && x(le),
            e && x(re),
            me(ce),
            me(ge),
            me($e),
            me(xe),
            e && x(ve),
            me(we, e),
            e && x(be),
            e && x(ye),
            e && x(ke),
            me(Ce, e),
            e && x(ze),
            me(Be, e),
            e && x(Le),
            me(Ne, e),
            e && x(Te),
            me(Me, e),
            e && x(Fe),
            e && x(Ee),
            me(Se),
            me(Ae),
            me(Pe),
            me(Ve),
            e && x(Oe),
            me(De, e);
        },
      }
    );
  }
  const Cl = 'html';
  function zl() {
    console.log('funck!');
  }
  function Bl(e) {
    return [
      () => {
        console.log('click the button');
      },
    ];
  }
  function Ll(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Nl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Tl(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { $$slots: { default: [Ll] }, $$scope: { ctx: e } } })),
      t.$on('click', e[0]),
      (s = new cs({ props: { $$slots: { default: [Nl] }, $$scope: { ctx: e } } })),
      s.$on('click', e[1]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Ml(e) {
    let t;
    return {
      c() {
        t = y('Button 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Fl(e) {
    let t;
    return {
      c() {
        t = y('Button 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function El(e) {
    let t;
    return {
      c() {
        t = y('Button 3');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Sl(e) {
    let t, n, s, a, l, r;
    return (
      (t = new cs({ props: { $$slots: { default: [Ml] }, $$scope: { ctx: e } } })),
      t.$on('click', e[2]),
      (s = new cs({ props: { $$slots: { default: [Fl] }, $$scope: { ctx: e } } })),
      s.$on('click', e[3]),
      (l = new cs({ props: { $$slots: { default: [El] }, $$scope: { ctx: e } } })),
      l.$on('click', e[4]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment);
        },
        m(e, i) {
          fe(t, e, i), h(e, n, i), fe(s, e, i), h(e, a, i), fe(l, e, i), (r = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          268435456 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const i = {};
          268435456 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
        },
        i(e) {
          r || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), (r = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e);
        },
      }
    );
  }
  function Hl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Al(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function _l(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { $$slots: { default: [Hl] }, $$scope: { ctx: e } } })),
      t.$on('click', e[5]),
      (s = new cs({ props: { $$slots: { default: [Al] }, $$scope: { ctx: e } } })),
      s.$on('click', e[6]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Pl(e) {
    let t;
    return {
      c() {
        t = y('Button 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function jl(e) {
    let t;
    return {
      c() {
        t = y('Button 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Vl(e) {
    let t;
    return {
      c() {
        t = y('Button 3');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ol(e) {
    let t, n, s, a, l, r;
    return (
      (t = new cs({ props: { $$slots: { default: [Pl] }, $$scope: { ctx: e } } })),
      t.$on('click', e[7]),
      (s = new cs({ props: { $$slots: { default: [jl] }, $$scope: { ctx: e } } })),
      s.$on('click', e[8]),
      (l = new cs({ props: { $$slots: { default: [Vl] }, $$scope: { ctx: e } } })),
      l.$on('click', e[9]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment);
        },
        m(e, i) {
          fe(t, e, i), h(e, n, i), fe(s, e, i), h(e, a, i), fe(l, e, i), (r = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          268435456 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const i = {};
          268435456 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
        },
        i(e) {
          r || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), (r = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e);
        },
      }
    );
  }
  function Dl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ql(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Il(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { size: 'big', initial: !0, $$slots: { default: [Dl] }, $$scope: { ctx: e } } })),
      t.$on('click', e[10]),
      (s = new cs({ props: { size: 'big', extension: 'solid', $$slots: { default: [ql] }, $$scope: { ctx: e } } })),
      s.$on('click', e[11]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Rl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Gl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ul(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { size: 'big', $$slots: { default: [Rl] }, $$scope: { ctx: e } } })),
      t.$on('click', e[12]),
      (s = new cs({ props: { size: 'big', extension: 'solid', $$slots: { default: [Gl] }, $$scope: { ctx: e } } })),
      s.$on('click', e[13]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Yl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Wl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Zl(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { size: 'big', $$slots: { default: [Yl] }, $$scope: { ctx: e } } })),
      t.$on('click', e[14]),
      (s = new cs({
        props: { size: 'big', extension: 'solid', type: 'accept', $$slots: { default: [Wl] }, $$scope: { ctx: e } },
      })),
      s.$on('click', e[15]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Jl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Xl(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Kl(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { size: 'big', $$slots: { default: [Jl] }, $$scope: { ctx: e } } })),
      t.$on('click', e[16]),
      (s = new cs({ props: { size: 'big', extension: 'solid', $$slots: { default: [Xl] }, $$scope: { ctx: e } } })),
      s.$on('click', e[17]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Ql(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function er(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function tr(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { size: 'big', $$slots: { default: [Ql] }, $$scope: { ctx: e } } })),
      t.$on('click', e[18]),
      (s = new cs({ props: { size: 'big', extension: 'solid', $$slots: { default: [er] }, $$scope: { ctx: e } } })),
      s.$on('click', e[19]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function nr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function sr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ar(e) {
    let t, n, s, a;
    return (
      (t = new cs({ props: { size: 'big', $$slots: { default: [nr] }, $$scope: { ctx: e } } })),
      t.$on('click', e[20]),
      (s = new cs({
        props: { size: 'big', extension: 'solid', initial: !0, $$slots: { default: [sr] }, $$scope: { ctx: e } },
      })),
      s.$on('click', e[21]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          268435456 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function lr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function rr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ir(e) {
    let t;
    return {
      c() {
        t = y('Toggle 3');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function or(e) {
    let t, n, s, a, l, r;
    return (
      (t = new cs({ props: { $$slots: { default: [lr] }, $$scope: { ctx: e } } })),
      t.$on('click', e[22]),
      (s = new cs({ props: { $$slots: { default: [rr] }, $$scope: { ctx: e } } })),
      s.$on('click', e[23]),
      (l = new cs({ props: { $$slots: { default: [ir] }, $$scope: { ctx: e } } })),
      l.$on('click', e[24]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment);
        },
        m(e, i) {
          fe(t, e, i), h(e, n, i), fe(s, e, i), h(e, a, i), fe(l, e, i), (r = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          268435456 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const i = {};
          268435456 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
        },
        i(e) {
          r || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), (r = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e);
        },
      }
    );
  }
  function cr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function dr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function gr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 3');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function ur(e) {
    let t, n, s, a, l, r;
    return (
      (t = new cs({ props: { $$slots: { default: [cr] }, $$scope: { ctx: e } } })),
      t.$on('click', e[25]),
      (s = new cs({ props: { $$slots: { default: [dr] }, $$scope: { ctx: e } } })),
      s.$on('click', e[26]),
      (l = new cs({ props: { $$slots: { default: [gr] }, $$scope: { ctx: e } } })),
      l.$on('click', e[27]),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment);
        },
        m(e, i) {
          fe(t, e, i), h(e, n, i), fe(s, e, i), h(e, a, i), fe(l, e, i), (r = !0);
        },
        p(e, n) {
          const a = {};
          268435456 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          268435456 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const i = {};
          268435456 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
        },
        i(e) {
          r || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), (r = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e);
        },
      }
    );
  }
  function fr(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f,
      m,
      p,
      v,
      b,
      y,
      C,
      z,
      L,
      N,
      T,
      M,
      F,
      E,
      S,
      H,
      A,
      _,
      P,
      j,
      V,
      O,
      D,
      q,
      I,
      R,
      G,
      U,
      Y,
      W,
      Z,
      J,
      X,
      K,
      Q,
      ee,
      te,
      ne,
      se,
      ae,
      le,
      re,
      ce,
      de,
      ge,
      pe,
      $e,
      he,
      xe,
      ve,
      we,
      be;
    return (
      (s = new Sa({
        props: { language: 'js', source: "import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';\n" },
      })),
      (c = new as({ props: { $$slots: { default: [Tl] }, $$scope: { ctx: e } } })),
      (u = new as({ props: { $$slots: { default: [Sl] }, $$scope: { ctx: e } } })),
      (y = new as({ props: { $$slots: { default: [_l] }, $$scope: { ctx: e } } })),
      (L = new as({ props: { $$slots: { default: [Ol] }, $$scope: { ctx: e } } })),
      (M = new Sa({
        props: {
          language: 'svelte',
          source:
            '\n<ButtonGroup>\n  <Button\n    on:click="{() => {\n      console.log(\'Button 1\');\n    }}">Toggle 1</Button\n  >\n  <Button\n    on:click="{() => {\n      console.log(\'Button 2\');\n    }}">Toggle 2</Button\n  >\n  <Button\n    on:click="{() => {\n      console.log(\'Button 3\');\n    }}">Toggle 3</Button\n  >\n</ButtonGroup>\n',
        },
      })),
      (A = new as({ props: { $$slots: { default: [Il] }, $$scope: { ctx: e } } })),
      (P = new Sa({
        props: {
          language: 'svelte',
          source:
            '\n  <ButtonGroup>\n    <Button\n      size="big"\n      initial={true}\n      on:click={() => {\n        console.log(\'Click 1\');\n      }}>Toggle 1</Button\n    >\n    <Button\n      size="big"\n      extension="solid"\n      on:click={() => {\n        console.log(\'Click 2\');\n      }}>Toggle 2</Button\n    >\n  </ButtonGroup>\n  ',
        },
      })),
      (R = new as({ props: { type: 'accept', $$slots: { default: [Ul] }, $$scope: { ctx: e } } })),
      (Y = new as({ props: { type: 'cancel', $$slots: { default: [Zl] }, $$scope: { ctx: e } } })),
      (J = new as({ props: { type: 'primary', $$slots: { default: [Kl] }, $$scope: { ctx: e } } })),
      (Q = new as({ props: { type: 'secondary', $$slots: { default: [tr] }, $$scope: { ctx: e } } })),
      (ae = new as({ props: { color: 'Bordeaux', $$slots: { default: [ar] }, $$scope: { ctx: e } } })),
      (re = new Sa({
        props: {
          language: 'svelte',
          source:
            '\n<ButtonGroup color="Bordeaux">\n    <Button\n      size="big"\n      on:click={() => {\n        console.log(\'Click 1\');\n      }}>Toggle 1</Button\n    >\n    <Button\n      size="big"\n      extension="solid"\n      initial={true}\n      on:click={() => {\n        console.log(\'Click 2\');\n      }}>Toggle 2</Button\n    >\n  </ButtonGroup>\n  ',
        },
      })),
      (pe = new as({
        props: { solid: !0, color: 'Black', colorHover: 'Red', $$slots: { default: [or] }, $$scope: { ctx: e } },
      })),
      (he = new Sa({
        props: {
          language: 'svelte',
          source:
            "\n    <ButtonGroup solid={true} color=\"Black\" colorHover=\"Red\">\n      <Button\n        on:click={() => {\n          console.log('Click 1');\n        }}>Toggle 1</Button\n      >\n      <Button\n        on:click={() => {\n          console.log('Click 2');\n        }}>Toggle 2</Button\n      >\n      <Button\n        on:click={() => {\n          console.log('Click 3');\n        }}>Toggle 3</Button\n      >\n    </ButtonGroup>\n  ",
        },
      })),
      (we = new as({
        props: { solid: !0, color: 'Black', colorHover: 'Red', $$slots: { default: [ur] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Button groups'),
            (n = k()),
            ue(s.$$.fragment),
            (a = k()),
            (l = w('p')),
            (l.textContent = 'Default'),
            (r = k()),
            (i = w('div')),
            (o = w('div')),
            ue(c.$$.fragment),
            (d = k()),
            (g = w('div')),
            ue(u.$$.fragment),
            (f = k()),
            (m = w('p')),
            (m.textContent = 'Default'),
            (p = k()),
            (v = w('div')),
            (b = w('div')),
            ue(y.$$.fragment),
            (C = k()),
            (z = w('div')),
            ue(L.$$.fragment),
            (N = k()),
            (T = w('div')),
            ue(M.$$.fragment),
            (F = k()),
            (E = w('div')),
            (S = w('p')),
            (S.textContent = 'Default Big'),
            (H = k()),
            ue(A.$$.fragment),
            (_ = k()),
            ue(P.$$.fragment),
            (j = k()),
            (V = w('p')),
            (V.textContent = 'type muligheder'),
            (O = k()),
            (D = w('ul')),
            (D.innerHTML = '<li>accept</li> \n  <li>cancel</li> \n  <li>primary</li> \n  <li>secondary</li>'),
            (q = k()),
            (I = w('div')),
            ue(R.$$.fragment),
            (G = k()),
            (U = w('div')),
            ue(Y.$$.fragment),
            (W = k()),
            (Z = w('div')),
            ue(J.$$.fragment),
            (X = k()),
            (K = w('div')),
            ue(Q.$$.fragment),
            (ee = k()),
            (te = w('p')),
            (te.textContent = 'Farve muligheder fra eb-colors'),
            (ne = k()),
            (se = w('div')),
            ue(ae.$$.fragment),
            (le = k()),
            ue(re.$$.fragment),
            (ce = k()),
            (de = w('p')),
            (de.textContent = 'Solid button group'),
            (ge = k()),
            ue(pe.$$.fragment),
            ($e = k()),
            ue(he.$$.fragment),
            (xe = k()),
            (ve = w('div')),
            ue(we.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(o, 'class', 'flex-item margin-l--r'),
            B(g, 'class', 'flex-item margin-l--l'),
            B(i, 'class', 'margin-l flex'),
            B(b, 'class', 'flex-item margin-l--r'),
            B(z, 'class', 'flex-item margin-l--l'),
            B(v, 'class', 'margin-l flex'),
            B(T, 'class', 'margin-l'),
            B(E, 'class', 'margin-l'),
            B(I, 'class', 'margin-l'),
            B(U, 'class', 'margin-l'),
            B(Z, 'class', 'margin-l'),
            B(K, 'class', 'margin-l'),
            B(se, 'class', 'margin-l'),
            B(ve, 'class', 'bg--yellowlight padding-l');
        },
        m(e, x) {
          h(e, t, x),
            h(e, n, x),
            fe(s, e, x),
            h(e, a, x),
            h(e, l, x),
            h(e, r, x),
            h(e, i, x),
            $(i, o),
            fe(c, o, null),
            $(i, d),
            $(i, g),
            fe(u, g, null),
            h(e, f, x),
            h(e, m, x),
            h(e, p, x),
            h(e, v, x),
            $(v, b),
            fe(y, b, null),
            $(v, C),
            $(v, z),
            fe(L, z, null),
            h(e, N, x),
            h(e, T, x),
            fe(M, T, null),
            h(e, F, x),
            h(e, E, x),
            $(E, S),
            $(E, H),
            fe(A, E, null),
            h(e, _, x),
            fe(P, e, x),
            h(e, j, x),
            h(e, V, x),
            h(e, O, x),
            h(e, D, x),
            h(e, q, x),
            h(e, I, x),
            fe(R, I, null),
            h(e, G, x),
            h(e, U, x),
            fe(Y, U, null),
            h(e, W, x),
            h(e, Z, x),
            fe(J, Z, null),
            h(e, X, x),
            h(e, K, x),
            fe(Q, K, null),
            h(e, ee, x),
            h(e, te, x),
            h(e, ne, x),
            h(e, se, x),
            fe(ae, se, null),
            h(e, le, x),
            fe(re, e, x),
            h(e, ce, x),
            h(e, de, x),
            h(e, ge, x),
            fe(pe, e, x),
            h(e, $e, x),
            fe(he, e, x),
            h(e, xe, x),
            h(e, ve, x),
            fe(we, ve, null),
            (be = !0);
        },
        p(e, [t]) {
          const n = {};
          268435456 & t && (n.$$scope = { dirty: t, ctx: e }), c.$set(n);
          const s = {};
          268435456 & t && (s.$$scope = { dirty: t, ctx: e }), u.$set(s);
          const a = {};
          268435456 & t && (a.$$scope = { dirty: t, ctx: e }), y.$set(a);
          const l = {};
          268435456 & t && (l.$$scope = { dirty: t, ctx: e }), L.$set(l);
          const r = {};
          268435456 & t && (r.$$scope = { dirty: t, ctx: e }), A.$set(r);
          const i = {};
          268435456 & t && (i.$$scope = { dirty: t, ctx: e }), R.$set(i);
          const o = {};
          268435456 & t && (o.$$scope = { dirty: t, ctx: e }), Y.$set(o);
          const d = {};
          268435456 & t && (d.$$scope = { dirty: t, ctx: e }), J.$set(d);
          const g = {};
          268435456 & t && (g.$$scope = { dirty: t, ctx: e }), Q.$set(g);
          const f = {};
          268435456 & t && (f.$$scope = { dirty: t, ctx: e }), ae.$set(f);
          const m = {};
          268435456 & t && (m.$$scope = { dirty: t, ctx: e }), pe.$set(m);
          const p = {};
          268435456 & t && (p.$$scope = { dirty: t, ctx: e }), we.$set(p);
        },
        i(e) {
          be ||
            (ie(s.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(u.$$.fragment, e),
            ie(y.$$.fragment, e),
            ie(L.$$.fragment, e),
            ie(M.$$.fragment, e),
            ie(A.$$.fragment, e),
            ie(P.$$.fragment, e),
            ie(R.$$.fragment, e),
            ie(Y.$$.fragment, e),
            ie(J.$$.fragment, e),
            ie(Q.$$.fragment, e),
            ie(ae.$$.fragment, e),
            ie(re.$$.fragment, e),
            ie(pe.$$.fragment, e),
            ie(he.$$.fragment, e),
            ie(we.$$.fragment, e),
            (be = !0));
        },
        o(e) {
          oe(s.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(u.$$.fragment, e),
            oe(y.$$.fragment, e),
            oe(L.$$.fragment, e),
            oe(M.$$.fragment, e),
            oe(A.$$.fragment, e),
            oe(P.$$.fragment, e),
            oe(R.$$.fragment, e),
            oe(Y.$$.fragment, e),
            oe(J.$$.fragment, e),
            oe(Q.$$.fragment, e),
            oe(ae.$$.fragment, e),
            oe(re.$$.fragment, e),
            oe(pe.$$.fragment, e),
            oe(he.$$.fragment, e),
            oe(we.$$.fragment, e),
            (be = !1);
        },
        d(e) {
          e && x(t),
            e && x(n),
            me(s, e),
            e && x(a),
            e && x(l),
            e && x(r),
            e && x(i),
            me(c),
            me(u),
            e && x(f),
            e && x(m),
            e && x(p),
            e && x(v),
            me(y),
            me(L),
            e && x(N),
            e && x(T),
            me(M),
            e && x(F),
            e && x(E),
            me(A),
            e && x(_),
            me(P, e),
            e && x(j),
            e && x(V),
            e && x(O),
            e && x(D),
            e && x(q),
            e && x(I),
            me(R),
            e && x(G),
            e && x(U),
            me(Y),
            e && x(W),
            e && x(Z),
            me(J),
            e && x(X),
            e && x(K),
            me(Q),
            e && x(ee),
            e && x(te),
            e && x(ne),
            e && x(se),
            me(ae),
            e && x(le),
            me(re, e),
            e && x(ce),
            e && x(de),
            e && x(ge),
            me(pe, e),
            e && x($e),
            me(he, e),
            e && x(xe),
            e && x(ve),
            me(we);
        },
      }
    );
  }
  function mr(e) {
    return [
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Button 1');
      },
      () => {
        console.log('Button 2');
      },
      () => {
        console.log('Button 3');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Button 1');
      },
      () => {
        console.log('Button 2');
      },
      () => {
        console.log('Button 3');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 3');
      },
      () => {
        console.log('Click 1');
      },
      () => {
        console.log('Click 2');
      },
      () => {
        console.log('Click 3');
      },
    ];
  }
  function pr(e) {
    let t;
    return {
      c() {
        (t = w('div')), (t.textContent = 'Header'), B(t, 'slot', 'header');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function $r(e) {
    let t;
    return {
      c() {
        (t = w('div')), (t.textContent = 'Her er der indhold, der bare er godt'), B(t, 'slot', 'content');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function hr(e) {
    let t;
    return {
      c() {
        (t = w('div')), (t.textContent = 'Vi har også en footer'), B(t, 'slot', 'footer');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function xr(e) {
    let t;
    return {
      c() {
        (t = w('div')), (t.innerHTML = '<b>Avisen</b>'), B(t, 'class', 'text-align--center'), B(t, 'slot', 'header');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function vr(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<p class="margin-none margin-l--b">Cras sed viverra tortor. Sed dictum lacus nec velit ultricies viverra sed tincidunt mi. Nulla mi velit, dictum\n        sed tempor vitae, mattis a felis.</p> \n      <p class="card-meta color--graa2 text-align--center">Buy for only:</p> \n      <h3 class="card-title text-align--center">120<small>,-</small></h3>'),
          B(t, 'slot', 'content');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function wr(e) {
    let t;
    return {
      c() {
        t = y('Vælg');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function br(e) {
    let t, n, s;
    return (
      (n = new cs({ props: { $$slots: { default: [wr] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = w('div')), ue(n.$$.fragment), B(t, 'class', 'text-align--center'), B(t, 'slot', 'footer');
        },
        m(e, a) {
          h(e, t, a), fe(n, t, null), (s = !0);
        },
        p(e, t) {
          const s = {};
          1 & t && (s.$$scope = { dirty: t, ctx: e }), n.$set(s);
        },
        i(e) {
          s || (ie(n.$$.fragment, e), (s = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), (s = !1);
        },
        d(e) {
          e && x(t), me(n);
        },
      }
    );
  }
  function yr(e) {
    let t, n, s;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<img class="card-image" src="https://via.placeholder.com/150x84&amp;text=150x84" loading="lazy" alt="" title="" height="84" width="150"/>'),
          (n = k()),
          (s = w('div')),
          (s.innerHTML =
            '<p class="card-meta color--graa3"><small><span class="color--flash">Danske kongelige</span> - 5 timer siden</small></p> \n      <h2 class="card-title">Grundet corona: Tjener millioner</h2>'),
          B(t, 'class', 'card-media'),
          B(s, 'class', 'card-content');
      },
      m(e, a) {
        h(e, t, a), h(e, n, a), h(e, s, a);
      },
      d(e) {
        e && x(t), e && x(n), e && x(s);
      },
    };
  }
  function kr(e) {
    let t, n, s, a, l, r, i, o, c;
    return (
      (a = new ut({
        props: { className: 'margin-l', $$slots: { footer: [hr], content: [$r], header: [pr] }, $$scope: { ctx: e } },
      })),
      (r = new ut({
        props: { className: 'margin-l', $$slots: { footer: [br], content: [vr], header: [xr] }, $$scope: { ctx: e } },
      })),
      (o = new ut({
        props: { className: 'margin-l card--small-media', $$slots: { default: [yr] }, $$scope: { ctx: e } },
      })),
      {
        c() {
          (t = w('div')),
            (n = w('h1')),
            (n.textContent = 'Card'),
            (s = k()),
            ue(a.$$.fragment),
            (l = k()),
            ue(r.$$.fragment),
            (i = k()),
            ue(o.$$.fragment),
            B(n, 'class', 'color--eb'),
            B(t, 'class', 'grid-width--small');
        },
        m(e, d) {
          h(e, t, d), $(t, n), $(t, s), fe(a, t, null), $(t, l), fe(r, t, null), $(t, i), fe(o, t, null), (c = !0);
        },
        p(e, [t]) {
          const n = {};
          1 & t && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
          const s = {};
          1 & t && (s.$$scope = { dirty: t, ctx: e }), r.$set(s);
          const l = {};
          1 & t && (l.$$scope = { dirty: t, ctx: e }), o.$set(l);
        },
        i(e) {
          c || (ie(a.$$.fragment, e), ie(r.$$.fragment, e), ie(o.$$.fragment, e), (c = !0));
        },
        o(e) {
          oe(a.$$.fragment, e), oe(r.$$.fragment, e), oe(o.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && x(t), me(a), me(r), me(o);
        },
      }
    );
  }
  function Cr(e) {
    let t, n, s;
    return {
      c() {
        (t = w('option')),
          (t.textContent = 'Option 1'),
          (n = k()),
          (s = w('option')),
          (s.textContent = 'Option 2'),
          (t.__value = 'optioin1'),
          (t.value = t.__value),
          (s.__value = 'optioin2'),
          (s.value = s.__value);
      },
      m(e, a) {
        h(e, t, a), h(e, n, a), h(e, s, a);
      },
      d(e) {
        e && x(t), e && x(n), e && x(s);
      },
    };
  }
  function zr(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m, p, $, v, w, b, y;
    function C(t) {
      e[1](t);
    }
    (t = new Ts({ props: { inputtype: 'text', size: 'small', label: 'input size small' } })),
      (s = new Ts({ props: { inputtype: 'text', label: 'input size medium(standard)' } })),
      (l = new Ts({ props: { inputtype: 'text', size: 'large', label: 'input size large' } })),
      (i = new Ts({
        props: { inputtype: 'select', label: 'Noget indhold her', $$slots: { default: [Cr] }, $$scope: { ctx: e } },
      })),
      (c = new Ts({ props: { inputtype: 'checkbox', label: 'Check denne her' } }));
    let z = { inputtype: 'radio', label: 'Radio denne her', value: 1 };
    function B(t) {
      e[2](t);
    }
    void 0 !== e[0] && (z.group = e[0]), (g = new Ts({ props: z })), G.push(() => ge(g, 'group', C));
    let L = { inputtype: 'radio', label: 'Radio denne her også', value: 2 };
    return (
      void 0 !== e[0] && (L.group = e[0]),
      (m = new Ts({ props: L })),
      G.push(() => ge(m, 'group', B)),
      (v = new Ts({ props: { inputtype: 'number', label: 'Noget tal indhold her' } })),
      (b = new Ts({ props: { inputtype: 'textarea', label: 'Kommentar label' } })),
      {
        c() {
          ue(t.$$.fragment),
            (n = k()),
            ue(s.$$.fragment),
            (a = k()),
            ue(l.$$.fragment),
            (r = k()),
            ue(i.$$.fragment),
            (o = k()),
            ue(c.$$.fragment),
            (d = k()),
            ue(g.$$.fragment),
            (f = k()),
            ue(m.$$.fragment),
            ($ = k()),
            ue(v.$$.fragment),
            (w = k()),
            ue(b.$$.fragment);
        },
        m(e, u) {
          fe(t, e, u),
            h(e, n, u),
            fe(s, e, u),
            h(e, a, u),
            fe(l, e, u),
            h(e, r, u),
            fe(i, e, u),
            h(e, o, u),
            fe(c, e, u),
            h(e, d, u),
            fe(g, e, u),
            h(e, f, u),
            fe(m, e, u),
            h(e, $, u),
            fe(v, e, u),
            h(e, w, u),
            fe(b, e, u),
            (y = !0);
        },
        p(e, [t]) {
          const n = {};
          8 & t && (n.$$scope = { dirty: t, ctx: e }), i.$set(n);
          const s = {};
          !u && 1 & t && ((u = !0), (s.group = e[0]), K(() => (u = !1))), g.$set(s);
          const a = {};
          !p && 1 & t && ((p = !0), (a.group = e[0]), K(() => (p = !1))), m.$set(a);
        },
        i(e) {
          y ||
            (ie(t.$$.fragment, e),
            ie(s.$$.fragment, e),
            ie(l.$$.fragment, e),
            ie(i.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(g.$$.fragment, e),
            ie(m.$$.fragment, e),
            ie(v.$$.fragment, e),
            ie(b.$$.fragment, e),
            (y = !0));
        },
        o(e) {
          oe(t.$$.fragment, e),
            oe(s.$$.fragment, e),
            oe(l.$$.fragment, e),
            oe(i.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(g.$$.fragment, e),
            oe(m.$$.fragment, e),
            oe(v.$$.fragment, e),
            oe(b.$$.fragment, e),
            (y = !1);
        },
        d(e) {
          me(t, e),
            e && x(n),
            me(s, e),
            e && x(a),
            me(l, e),
            e && x(r),
            me(i, e),
            e && x(o),
            me(c, e),
            e && x(d),
            me(g, e),
            e && x(f),
            me(m, e),
            e && x($),
            me(v, e),
            e && x(w),
            me(b, e);
        },
      }
    );
  }
  function Br(e, t, n) {
    let s = 1;
    return [
      s,
      function (e) {
        (s = e), n(0, s);
      },
      function (e) {
        (s = e), n(0, s);
      },
    ];
  }
  const Lr = [
    'angledown',
    'angleleft',
    'angleright',
    'angleup',
    'articleline',
    'article',
    'at',
    'check',
    'clock',
    'creditcard',
    'ebplus_icon',
    'ebplus_sort',
    'envelope',
    'figcaptionpin',
    'gallery',
    'headphones',
    'headset',
    'historyregular',
    'lockold',
    'lock',
    'medielogin',
    'menubars',
    'mitebregular',
    'mitebsolid',
    'newspaper',
    'phone',
    'play',
    'rss',
    'smartphone',
    'starregular',
    'tagregular',
    'tagsolid',
    'tagsregular',
    'tagssolid',
    'toggleoff',
    'toggleon',
    'video',
  ];
  function Nr(e, t, n) {
    const s = e.slice();
    return (s[0] = t[n]), s;
  }
  function Tr(t) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o,
      c = t[0] + '';
    return (
      (s = new Vn({ props: { className: 'margin-s', style: 'width: 36px; height: 36px;', name: t[0] } })),
      {
        c() {
          (n = w('div')),
            ue(s.$$.fragment),
            (a = k()),
            (l = w('small')),
            (r = y(c)),
            (i = k()),
            B(n, 'class', 'flex flex-column flex-align--center flex-justify--center margin-m padding-m'),
            E(n, 'border', '1px solid #111'),
            E(n, 'border-radius', '5px');
        },
        m(e, t) {
          h(e, n, t), fe(s, n, null), $(n, a), $(n, l), $(l, r), $(n, i), (o = !0);
        },
        p: e,
        i(e) {
          o || (ie(s.$$.fragment, e), (o = !0));
        },
        o(e) {
          oe(s.$$.fragment, e), (o = !1);
        },
        d(e) {
          e && x(n), me(s);
        },
      }
    );
  }
  function Mr(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d = Lr,
      g = [];
    for (let t = 0; t < d.length; t += 1) g[t] = Tr(Nr(e, d, t));
    const u = (e) =>
      oe(g[e], 1, 1, () => {
        g[e] = null;
      });
    return (
      (o = new Sa({
        props: { language: 'html', source: '<Icon {name} className="margin-s" style="width: 36px; height: 36px;" />' },
      })),
      {
        c() {
          (t = w('div')),
            (n = w('h1')),
            (n.textContent = 'Icon library'),
            (s = k()),
            (a = w('p')),
            (a.textContent = 'Der findes følgende svg ikoner'),
            (l = k()),
            (r = w('div'));
          for (let e = 0; e < g.length; e += 1) g[e].c();
          (i = k()),
            ue(o.$$.fragment),
            B(n, 'class', 'color--eb'),
            B(r, 'class', 'flex flex-wrap--wrap'),
            B(t, 'class', 'grid-width--small');
        },
        m(e, d) {
          h(e, t, d), $(t, n), $(t, s), $(t, a), $(t, l), $(t, r);
          for (let e = 0; e < g.length; e += 1) g[e].m(r, null);
          $(t, i), fe(o, t, null), (c = !0);
        },
        p(e, [t]) {
          if (0 & t) {
            let n;
            for (d = Lr, n = 0; n < d.length; n += 1) {
              const s = Nr(e, d, n);
              g[n] ? (g[n].p(s, t), ie(g[n], 1)) : ((g[n] = Tr(s)), g[n].c(), ie(g[n], 1), g[n].m(r, null));
            }
            for (le(), n = d.length; n < g.length; n += 1) u(n);
            re();
          }
        },
        i(e) {
          if (!c) {
            for (let e = 0; e < d.length; e += 1) ie(g[e]);
            ie(o.$$.fragment, e), (c = !0);
          }
        },
        o(e) {
          g = g.filter(Boolean);
          for (let e = 0; e < g.length; e += 1) oe(g[e]);
          oe(o.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && x(t), v(g, e), me(o);
        },
      }
    );
  }
  function Fr(e, t, n) {
    const s = e.slice();
    return (s[1] = t[n]), s;
  }
  function Er(e) {
    let n, s;
    const a = [e[1], { style: 'width: 215px;' }];
    let l = {};
    for (let e = 0; e < a.length; e += 1) l = t(l, a[e]);
    return (
      (n = new Zn({ props: l })),
      {
        c() {
          ue(n.$$.fragment);
        },
        m(e, t) {
          fe(n, e, t), (s = !0);
        },
        p(e, t) {
          const s = 1 & t ? ce(a, [de(e[1]), a[1]]) : {};
          n.$set(s);
        },
        i(e) {
          s || (ie(n.$$.fragment, e), (s = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), (s = !1);
        },
        d(e) {
          me(n, e);
        },
      }
    );
  }
  function Sr(e) {
    let t,
      n,
      s = e[0],
      a = [];
    for (let t = 0; t < s.length; t += 1) a[t] = Er(Fr(e, s, t));
    const l = (e) =>
      oe(a[e], 1, 1, () => {
        a[e] = null;
      });
    return {
      c() {
        for (let e = 0; e < a.length; e += 1) a[e].c();
        t = C();
      },
      m(e, s) {
        for (let t = 0; t < a.length; t += 1) a[t].m(e, s);
        h(e, t, s), (n = !0);
      },
      p(e, n) {
        if (1 & n) {
          let r;
          for (s = e[0], r = 0; r < s.length; r += 1) {
            const l = Fr(e, s, r);
            a[r] ? (a[r].p(l, n), ie(a[r], 1)) : ((a[r] = Er(l)), a[r].c(), ie(a[r], 1), a[r].m(t.parentNode, t));
          }
          for (le(), r = s.length; r < a.length; r += 1) l(r);
          re();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < s.length; e += 1) ie(a[e]);
          n = !0;
        }
      },
      o(e) {
        a = a.filter(Boolean);
        for (let e = 0; e < a.length; e += 1) oe(a[e]);
        n = !1;
      },
      d(e) {
        v(a, e), e && x(t);
      },
    };
  }
  function Hr(e) {
    let t, n, s, a, l;
    return (
      (a = new As({ props: { title: 'Liste med artikler', $$slots: { default: [Sr] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Horizontal Scroll'),
            (n = k()),
            (s = w('div')),
            ue(a.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(s, 'class', 'grid-width--small');
        },
        m(e, r) {
          h(e, t, r), h(e, n, r), h(e, s, r), fe(a, s, null), (l = !0);
        },
        p(e, [t]) {
          const n = {};
          16 & t && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
        },
        i(e) {
          l || (ie(a.$$.fragment, e), (l = !0));
        },
        o(e) {
          oe(a.$$.fragment, e), (l = !1);
        },
        d(e) {
          e && x(t), e && x(n), e && x(s), me(a);
        },
      }
    );
  }
  function Ar(e) {
    return [
      [
        {
          href: '#',
          isPlus: !0,
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Udenlandsk fodbold',
          colorClass: 'sport',
          timestamp: 'Thu Mar 18 2021 20:46:32',
          title: "Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer'",
        },
        {
          href: '#',
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Landsholds foldbold',
          colorClass: 'sport',
          timestamp: 'Thu Mar 18 2021 17:46:32',
          title: "Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer' - to til tre gange ",
        },
        {
          href: '#',
          isPlus: !0,
          section: 'Nyheder',
          colorClass: 'nyheder',
          timestamp: 'Thu Mar 18 2021 18:46:32',
          title: "Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer' - to til tre gange",
        },
        {
          href: '#',
          isBreaking: !0,
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Sport',
          colorClass: 'sport',
          timestamp: 'Thu Mar 17 2021 21:46:32',
          title: 'List element 4',
        },
        {
          href: '#',
          isPlus: !0,
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Sport',
          colorClass: 'sport',
          timestamp: 'Thu Mar 18 2021 20:46:32',
          title: 'List element 1',
        },
        {
          href: '#',
          isPlus: !0,
          section: 'Nyheder',
          colorClass: 'nyheder',
          timestamp: 'Thu Mar 18 2021 18:46:32',
          title: 'Det skal jo altså ikke være for nemt',
        },
        {
          href: '#',
          isBreaking: !0,
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Sport',
          colorClass: 'sport',
          timestamp: 'Thu Mar 18 2021 17:46:32',
          title: 'List element 3',
        },
        {
          href: '#',
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: 'Sport',
          colorClass: 'sport',
          timestamp: 'Thu Mar 17 2021 21:46:32',
          title: 'List element 4',
        },
      ],
    ];
  }
  function _r(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Pr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function jr(e) {
    let t, n, s, a;
    return (
      (t = new qs({ props: { $$slots: { default: [_r] }, $$scope: { ctx: e } } })),
      (s = new qs({ props: { $$slots: { default: [Pr] }, $$scope: { ctx: e } } })),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          1 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Vr(e) {
    let t;
    return {
      c() {
        t = y('Content 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Or(e) {
    let t;
    return {
      c() {
        t = y('Content 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Dr(e) {
    let t, n, s, a, l, r;
    return (
      (t = new Zs({ props: { $$slots: { default: [jr] }, $$scope: { ctx: e } } })),
      (s = new Us({ props: { $$slots: { default: [Vr] }, $$scope: { ctx: e } } })),
      (l = new Us({ props: { $$slots: { default: [Or] }, $$scope: { ctx: e } } })),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment);
        },
        m(e, i) {
          fe(t, e, i), h(e, n, i), fe(s, e, i), h(e, a, i), fe(l, e, i), (r = !0);
        },
        p(e, n) {
          const a = {};
          1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          1 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const i = {};
          1 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
        },
        i(e) {
          r || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), (r = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e);
        },
      }
    );
  }
  function qr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 1');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ir(e) {
    let t;
    return {
      c() {
        t = y('Toggle 2');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Rr(e) {
    let t;
    return {
      c() {
        t = y('Toggle 3');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Gr(e) {
    let t, n, s, a, l, r;
    return (
      (t = new qs({ props: { $$slots: { default: [qr] }, $$scope: { ctx: e } } })),
      (s = new qs({ props: { $$slots: { default: [Ir] }, $$scope: { ctx: e } } })),
      (l = new qs({ props: { $$slots: { default: [Rr] }, $$scope: { ctx: e } } })),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment);
        },
        m(e, i) {
          fe(t, e, i), h(e, n, i), fe(s, e, i), h(e, a, i), fe(l, e, i), (r = !0);
        },
        p(e, n) {
          const a = {};
          1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          1 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const i = {};
          1 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
        },
        i(e) {
          r || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), (r = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), (r = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e);
        },
      }
    );
  }
  function Ur(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<h1>Content 1</h1> \n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sagittis metus in efficitur.\n          Phasellus molestie scelerisque commodo. Fusce accumsan efficitur urna eu tristique. Proin semper fermentum\n          ante sed molestie. Sed nec quam orci. Nunc diam neque, blandit a dictum id, posuere in lacus. Nulla rutrum\n          pretium nulla. Aenean sollicitudin, magna et eleifend mollis, tortor turpis varius nibh, non interdum lectus\n          orci ac libero. Curabitur nisi libero, pellentesque ut mi eget, efficitur efficitur sem.</p>');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Yr(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<h1>Content 2</h1> \n        <p>Aenean in ipsum varius, facilisis leo nec, aliquam mauris. Nunc sagittis nunc interdum consectetur posuere.\n          Vivamus tempus volutpat orci. Maecenas luctus posuere massa sollicitudin ultrices. Nam venenatis feugiat\n          imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent efficitur ex vel lacus\n          vehicula convallis. Vivamus a metus facilisis, consequat felis vitae, fringilla nisi. Aliquam maximus nibh eu\n          justo lobortis auctor. In facilisis iaculis sodales. Aliquam vehicula, massa nec eleifend maximus, elit ante\n          convallis eros, ac ultricies justo risus non turpis. Class aptent taciti sociosqu ad litora torquent per\n          conubia nostra, per inceptos himenaeos. Maecenas ornare ex vitae tellus aliquet, a iaculis turpis vehicula.\n          Vestibulum scelerisque metus lectus, id egestas eros dignissim ut. Aenean et nisi vel purus vehicula lacinia\n          ut sit amet ligula. Sed ultrices nisi orci, non pellentesque erat dignissim ac.</p>');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Wr(e) {
    let t;
    return {
      c() {
        (t = w('div')),
          (t.innerHTML =
            '<h1>Content 3</h1> \n        <p>Donec mattis arcu metus, et accumsan erat consectetur eget. Pellentesque porta sollicitudin lectus, a commodo\n          sem sollicitudin sit amet. Sed pharetra vel nulla id bibendum. In consectetur pulvinar purus non cursus. In\n          hac habitasse platea dictumst. Nullam placerat nunc sem, at auctor massa venenatis nec. Ut at dignissim dolor.\n          Pellentesque vestibulum porta lorem, a iaculis felis accumsan vel. Sed vel orci vehicula dolor congue eleifend\n          et non nibh. Duis a pharetra diam, a dapibus dui. Aenean maximus fringilla nunc, ut sollicitudin erat\n          vulputate tincidunt. Proin nisl ipsum, tristique et varius sit amet, elementum eget magna. Phasellus eu est\n          pretium erat blandit suscipit sed eu nisl.</p>');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Zr(e) {
    let t, n, s, a, l, r, i, o;
    return (
      (t = new Zs({ props: { $$slots: { default: [Gr] }, $$scope: { ctx: e } } })),
      (s = new Us({ props: { $$slots: { default: [Ur] }, $$scope: { ctx: e } } })),
      (l = new Us({ props: { $$slots: { default: [Yr] }, $$scope: { ctx: e } } })),
      (i = new Us({ props: { $$slots: { default: [Wr] }, $$scope: { ctx: e } } })),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment), (a = k()), ue(l.$$.fragment), (r = k()), ue(i.$$.fragment);
        },
        m(e, c) {
          fe(t, e, c), h(e, n, c), fe(s, e, c), h(e, a, c), fe(l, e, c), h(e, r, c), fe(i, e, c), (o = !0);
        },
        p(e, n) {
          const a = {};
          1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const r = {};
          1 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
          const o = {};
          1 & n && (o.$$scope = { dirty: n, ctx: e }), l.$set(o);
          const c = {};
          1 & n && (c.$$scope = { dirty: n, ctx: e }), i.$set(c);
        },
        i(e) {
          o || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(l.$$.fragment, e), ie(i.$$.fragment, e), (o = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(l.$$.fragment, e), oe(i.$$.fragment, e), (o = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), me(l, e), e && x(r), me(i, e);
        },
      }
    );
  }
  function Jr(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m;
    return (
      (s = new Sa({
        props: {
          language: 'js',
          source: "import { PillNavigation, Pill, PillContent, PillList } from '@ekstra-bladet/designsystem';",
        },
      })),
      (r = new Vs({ props: { $$slots: { default: [Dr] }, $$scope: { ctx: e } } })),
      (o = new Sa({
        props: {
          language: 'html',
          source:
            '\n<PillNavigation>\n  <PillList>\n    <Pill>Toggle 1</Pill>\n    <Pill>Toggle 2</Pill>\n  </PillList>\n  <PillContent>Content 1</PillContent>\n  <PillContent>Content 2</PillContent>\n</PillNavigation>\n',
        },
      })),
      (g = new Vs({ props: { $$slots: { default: [Zr] }, $$scope: { ctx: e } } })),
      (f = new Sa({
        props: {
          language: 'html',
          source:
            '\n<PillNavigation>\n    <PillList>\n      <Pill>Toggle 1</Pill>\n      <Pill>Toggle 2</Pill>\n      <Pill>Toggle 3</Pill>\n    </PillList>\n    <PillContent>\n      <div>\n        <h1>Content 1</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing...\n        </p>\n      </div>\n    </PillContent>\n    <PillContent>\n      <div>\n        <h1>Content 2</h1>\n        <p>\n          Aenean in ipsum varius, facilisis leo nec...\n        </p>\n      </div>\n    </PillContent>\n    <PillContent>\n      <div>\n        <h1>Content 3</h1>\n        <p>\n          Donec mattis arcu metus, et accumsan erat...\n        </p>\n      </div>\n    </PillContent>\n  </PillNavigation>\n',
        },
      })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Pill navigation / Toggle buttons'),
            (n = k()),
            ue(s.$$.fragment),
            (a = k()),
            (l = w('div')),
            ue(r.$$.fragment),
            (i = k()),
            ue(o.$$.fragment),
            (c = k()),
            (d = w('div')),
            ue(g.$$.fragment),
            (u = k()),
            ue(f.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(l, 'class', 'margin-xl'),
            B(d, 'class', 'margin-xl');
        },
        m(e, p) {
          h(e, t, p),
            h(e, n, p),
            fe(s, e, p),
            h(e, a, p),
            h(e, l, p),
            fe(r, l, null),
            h(e, i, p),
            fe(o, e, p),
            h(e, c, p),
            h(e, d, p),
            fe(g, d, null),
            h(e, u, p),
            fe(f, e, p),
            (m = !0);
        },
        p(e, [t]) {
          const n = {};
          1 & t && (n.$$scope = { dirty: t, ctx: e }), r.$set(n);
          const s = {};
          1 & t && (s.$$scope = { dirty: t, ctx: e }), g.$set(s);
        },
        i(e) {
          m ||
            (ie(s.$$.fragment, e),
            ie(r.$$.fragment, e),
            ie(o.$$.fragment, e),
            ie(g.$$.fragment, e),
            ie(f.$$.fragment, e),
            (m = !0));
        },
        o(e) {
          oe(s.$$.fragment, e),
            oe(r.$$.fragment, e),
            oe(o.$$.fragment, e),
            oe(g.$$.fragment, e),
            oe(f.$$.fragment, e),
            (m = !1);
        },
        d(e) {
          e && x(t),
            e && x(n),
            me(s, e),
            e && x(a),
            e && x(l),
            me(r),
            e && x(i),
            me(o, e),
            e && x(c),
            e && x(d),
            me(g),
            e && x(u),
            me(f, e);
        },
      }
    );
  }
  function Xr(t) {
    let n, s, a, l, r, i, o, c, d, g, u;
    return (
      (a = new Sa({ props: { language: 'js', source: "import { Spinner } from '@ekstra-bladet/designsystem'" } })),
      (i = new Qs({ props: { isLoading: Kr } })),
      (c = new Sa({ props: { language: 'html', source: '<Spinner isLoading={true}/>' } })),
      (g = new Sa({ props: { language: 'html', source: '<Spinner isLoading={false}/>' } })),
      {
        c() {
          (n = w('h1')),
            (n.textContent = 'Spinner'),
            (s = k()),
            ue(a.$$.fragment),
            (l = k()),
            (r = w('div')),
            ue(i.$$.fragment),
            (o = k()),
            ue(c.$$.fragment),
            (d = k()),
            ue(g.$$.fragment),
            B(n, 'class', 'color--eb'),
            B(r, 'class', 'padding-l bg--graa5');
        },
        m(e, t) {
          h(e, n, t),
            h(e, s, t),
            fe(a, e, t),
            h(e, l, t),
            h(e, r, t),
            fe(i, r, null),
            h(e, o, t),
            fe(c, e, t),
            h(e, d, t),
            fe(g, e, t),
            (u = !0);
        },
        p: e,
        i(e) {
          u || (ie(a.$$.fragment, e), ie(i.$$.fragment, e), ie(c.$$.fragment, e), ie(g.$$.fragment, e), (u = !0));
        },
        o(e) {
          oe(a.$$.fragment, e), oe(i.$$.fragment, e), oe(c.$$.fragment, e), oe(g.$$.fragment, e), (u = !1);
        },
        d(e) {
          e && x(n), e && x(s), me(a, e), e && x(l), e && x(r), me(i), e && x(o), me(c, e), e && x(d), me(g, e);
        },
      }
    );
  }
  let Kr = !0;
  const Qr = (e) => ({}),
    ei = (e) => ({ slot: 'on' }),
    ti = (e) => ({}),
    ni = (e) => ({ slot: 'off' }),
    si = (e) => ({}),
    ai = (e) => ({ slot: 'on' }),
    li = (e) => ({}),
    ri = (e) => ({ slot: 'off' }),
    ii = (e) => ({}),
    oi = (e) => ({ slot: 'on' }),
    ci = (e) => ({}),
    di = (e) => ({ slot: 'off' }),
    gi = (e) => ({}),
    ui = (e) => ({ slot: 'on' }),
    fi = (e) => ({}),
    mi = (e) => ({ slot: 'off' });
  function pi(e) {
    let t;
    const n = e[0].default,
      s = c(n, e, e[5], ui),
      a =
        s ||
        (function (e) {
          let t;
          return {
            c() {
              t = y('on');
            },
            m(e, n) {
              h(e, t, n);
            },
            d(e) {
              e && x(t);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(e, n) {
        a && a.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 32 & a) && g(s, n, e, e[5], a, gi, ui);
      },
      i(e) {
        t || (ie(a, e), (t = !0));
      },
      o(e) {
        oe(a, e), (t = !1);
      },
      d(e) {
        a && a.d(e);
      },
    };
  }
  function $i(e) {
    let t;
    const n = e[0].default,
      s = c(n, e, e[5], mi),
      a =
        s ||
        (function (e) {
          let t;
          return {
            c() {
              t = y('off');
            },
            m(e, n) {
              h(e, t, n);
            },
            d(e) {
              e && x(t);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(e, n) {
        a && a.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 32 & a) && g(s, n, e, e[5], a, fi, mi);
      },
      i(e) {
        t || (ie(a, e), (t = !0));
      },
      o(e) {
        oe(a, e), (t = !1);
      },
      d(e) {
        a && a.d(e);
      },
    };
  }
  function hi(t) {
    let n;
    const s = t[0].default,
      a = c(s, t, t[5], oi),
      l =
        a ||
        (function (t) {
          let n, s;
          return (
            (n = new Vn({ props: { name: 'angle-down', style: 'width: 24px; height: 24px;' } })),
            {
              c() {
                ue(n.$$.fragment);
              },
              m(e, t) {
                fe(n, e, t), (s = !0);
              },
              p: e,
              i(e) {
                s || (ie(n.$$.fragment, e), (s = !0));
              },
              o(e) {
                oe(n.$$.fragment, e), (s = !1);
              },
              d(e) {
                me(n, e);
              },
            }
          );
        })();
    return {
      c() {
        l && l.c();
      },
      m(e, t) {
        l && l.m(e, t), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 32 & t) && g(a, s, e, e[5], t, ii, oi);
      },
      i(e) {
        n || (ie(l, e), (n = !0));
      },
      o(e) {
        oe(l, e), (n = !1);
      },
      d(e) {
        l && l.d(e);
      },
    };
  }
  function xi(t) {
    let n;
    const s = t[0].default,
      a = c(s, t, t[5], di),
      l =
        a ||
        (function (t) {
          let n, s;
          return (
            (n = new Vn({ props: { name: 'angle-up', style: 'width: 24px; height: 24px;' } })),
            {
              c() {
                ue(n.$$.fragment);
              },
              m(e, t) {
                fe(n, e, t), (s = !0);
              },
              p: e,
              i(e) {
                s || (ie(n.$$.fragment, e), (s = !0));
              },
              o(e) {
                oe(n.$$.fragment, e), (s = !1);
              },
              d(e) {
                me(n, e);
              },
            }
          );
        })();
    return {
      c() {
        l && l.c();
      },
      m(e, t) {
        l && l.m(e, t), (n = !0);
      },
      p(e, t) {
        a && a.p && (!n || 32 & t) && g(a, s, e, e[5], t, ci, di);
      },
      i(e) {
        n || (ie(l, e), (n = !0));
      },
      o(e) {
        oe(l, e), (n = !1);
      },
      d(e) {
        l && l.d(e);
      },
    };
  }
  function vi(e) {
    let t;
    const n = e[0].default,
      s = c(n, e, e[5], ai),
      a =
        s ||
        (function (e) {
          let t;
          return {
            c() {
              t = y('on');
            },
            m(e, n) {
              h(e, t, n);
            },
            d(e) {
              e && x(t);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(e, n) {
        a && a.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 32 & a) && g(s, n, e, e[5], a, si, ai);
      },
      i(e) {
        t || (ie(a, e), (t = !0));
      },
      o(e) {
        oe(a, e), (t = !1);
      },
      d(e) {
        a && a.d(e);
      },
    };
  }
  function wi(e) {
    let t;
    const n = e[0].default,
      s = c(n, e, e[5], ri),
      a =
        s ||
        (function (e) {
          let t;
          return {
            c() {
              t = y('off');
            },
            m(e, n) {
              h(e, t, n);
            },
            d(e) {
              e && x(t);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(e, n) {
        a && a.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 32 & a) && g(s, n, e, e[5], a, li, ri);
      },
      i(e) {
        t || (ie(a, e), (t = !0));
      },
      o(e) {
        oe(a, e), (t = !1);
      },
      d(e) {
        a && a.d(e);
      },
    };
  }
  function bi(e) {
    let t;
    const n = e[0].default,
      s = c(n, e, e[5], ei),
      a =
        s ||
        (function (e) {
          let t;
          return {
            c() {
              t = y('on');
            },
            m(e, n) {
              h(e, t, n);
            },
            d(e) {
              e && x(t);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(e, n) {
        a && a.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 32 & a) && g(s, n, e, e[5], a, Qr, ei);
      },
      i(e) {
        t || (ie(a, e), (t = !0));
      },
      o(e) {
        oe(a, e), (t = !1);
      },
      d(e) {
        a && a.d(e);
      },
    };
  }
  function yi(e) {
    let t;
    const n = e[0].default,
      s = c(n, e, e[5], ni),
      a =
        s ||
        (function (e) {
          let t;
          return {
            c() {
              t = y('off');
            },
            m(e, n) {
              h(e, t, n);
            },
            d(e) {
              e && x(t);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(e, n) {
        a && a.m(e, n), (t = !0);
      },
      p(e, a) {
        s && s.p && (!t || 32 & a) && g(s, n, e, e[5], a, ti, ni);
      },
      i(e) {
        t || (ie(a, e), (t = !0));
      },
      o(e) {
        oe(a, e), (t = !1);
      },
      d(e) {
        a && a.d(e);
      },
    };
  }
  function ki(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m, p, $, v, b, y, C, z, L, N, T;
    return (
      (s = new Sa({ props: { language: 'js', source: "import { Toggler } from '@ekstra-bladet/designsystem';" } })),
      (i = new ma({ props: { $$slots: { off: [$i], on: [pi] }, $$scope: { ctx: e } } })),
      i.$on('toggle', e[1]),
      (c = new Sa({
        props: {
          language: 'html',
          source:
            '\n<Toggler on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}">\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>\n',
        },
      })),
      (f = new ma({ props: { $$slots: { off: [xi], on: [hi] }, $$scope: { ctx: e } } })),
      f.$on('toggle', e[2]),
      (p = new Sa({
        props: {
          language: 'html',
          source:
            '\n<Toggler on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}">\n  <slot slot="on">\n    <Icon name="angle_down_pro" style="width: 24px; height: 24px;" />\n  </slot>\n  <slot slot="off">\n    <Icon name="angle_up_pro" style="width: 24px; height: 24px;" />\n  </slot>\n</Toggler>\n',
        },
      })),
      (v = new ma({ props: { isSwitch: !0, $$slots: { off: [wi], on: [vi] }, $$scope: { ctx: e } } })),
      v.$on('toggle', e[3]),
      (y = new Sa({
        props: {
          language: 'html',
          source:
            '\n<Toggler\n  isSwitch="{true}"\n  on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}"\n>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>\n',
        },
      })),
      (z = new ma({
        props: { isSwitch: !0, defaultState: !1, $$slots: { off: [yi], on: [bi] }, $$scope: { ctx: e } },
      })),
      z.$on('toggle', e[4]),
      (N = new Sa({
        props: {
          language: 'html',
          source:
            '\n<Toggler\n  isSwitch="{true}"\n  defaultState="{false}"\n  on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}"\n>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>\n',
        },
      })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Toggler'),
            (n = k()),
            ue(s.$$.fragment),
            (a = k()),
            (l = w('h2')),
            (l.textContent = 'Toggler with text'),
            (r = k()),
            ue(i.$$.fragment),
            (o = k()),
            ue(c.$$.fragment),
            (d = k()),
            (g = w('h2')),
            (g.textContent = 'Toggler with icon'),
            (u = k()),
            ue(f.$$.fragment),
            (m = k()),
            ue(p.$$.fragment),
            ($ = k()),
            ue(v.$$.fragment),
            (b = k()),
            ue(y.$$.fragment),
            (C = k()),
            ue(z.$$.fragment),
            (L = k()),
            ue(N.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(l, 'class', 'margin-l--tb'),
            B(g, 'class', 'margin-l--tb');
        },
        m(e, x) {
          h(e, t, x),
            h(e, n, x),
            fe(s, e, x),
            h(e, a, x),
            h(e, l, x),
            h(e, r, x),
            fe(i, e, x),
            h(e, o, x),
            fe(c, e, x),
            h(e, d, x),
            h(e, g, x),
            h(e, u, x),
            fe(f, e, x),
            h(e, m, x),
            fe(p, e, x),
            h(e, $, x),
            fe(v, e, x),
            h(e, b, x),
            fe(y, e, x),
            h(e, C, x),
            fe(z, e, x),
            h(e, L, x),
            fe(N, e, x),
            (T = !0);
        },
        p(e, [t]) {
          const n = {};
          32 & t && (n.$$scope = { dirty: t, ctx: e }), i.$set(n);
          const s = {};
          32 & t && (s.$$scope = { dirty: t, ctx: e }), f.$set(s);
          const a = {};
          32 & t && (a.$$scope = { dirty: t, ctx: e }), v.$set(a);
          const l = {};
          32 & t && (l.$$scope = { dirty: t, ctx: e }), z.$set(l);
        },
        i(e) {
          T ||
            (ie(s.$$.fragment, e),
            ie(i.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(f.$$.fragment, e),
            ie(p.$$.fragment, e),
            ie(v.$$.fragment, e),
            ie(y.$$.fragment, e),
            ie(z.$$.fragment, e),
            ie(N.$$.fragment, e),
            (T = !0));
        },
        o(e) {
          oe(s.$$.fragment, e),
            oe(i.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(f.$$.fragment, e),
            oe(p.$$.fragment, e),
            oe(v.$$.fragment, e),
            oe(y.$$.fragment, e),
            oe(z.$$.fragment, e),
            oe(N.$$.fragment, e),
            (T = !1);
        },
        d(e) {
          e && x(t),
            e && x(n),
            me(s, e),
            e && x(a),
            e && x(l),
            e && x(r),
            me(i, e),
            e && x(o),
            me(c, e),
            e && x(d),
            e && x(g),
            e && x(u),
            me(f, e),
            e && x(m),
            me(p, e),
            e && x($),
            me(v, e),
            e && x(b),
            me(y, e),
            e && x(C),
            me(z, e),
            e && x(L),
            me(N, e);
        },
      }
    );
  }
  function Ci(e, t, n) {
    let { $$slots: s = {}, $$scope: a } = t;
    return (
      (e.$$set = (e) => {
        '$$scope' in e && n(5, (a = e.$$scope));
      }),
      [
        s,
        (e) => {
          console.log('hello its on?', e.detail);
        },
        (e) => {
          console.log('hello its on?', e.detail);
        },
        (e) => {
          console.log('hello its on?', e.detail);
        },
        (e) => {
          console.log('hello its on?', e.detail);
        },
        a,
      ]
    );
  }
  function zi(e) {
    let t, n, s, a, l;
    return {
      c() {
        (t = w('p')),
          (t.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
          (n = k()),
          (s = w('p')),
          (s.textContent = 'Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.'),
          (a = k()),
          (l = w('p')),
          (l.textContent = 'Aenean a blandit lacus, sed faucibus ante.');
      },
      m(e, r) {
        h(e, t, r), h(e, n, r), h(e, s, r), h(e, a, r), h(e, l, r);
      },
      d(e) {
        e && x(t), e && x(n), e && x(s), e && x(a), e && x(l);
      },
    };
  }
  function Bi(e) {
    let t, n, s, a, l;
    return {
      c() {
        (t = w('p')),
          (t.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
          (n = k()),
          (s = w('p')),
          (s.textContent = 'Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.'),
          (a = k()),
          (l = w('p')),
          (l.textContent = 'Aenean a blandit lacus, sed faucibus ante.');
      },
      m(e, r) {
        h(e, t, r), h(e, n, r), h(e, s, r), h(e, a, r), h(e, l, r);
      },
      d(e) {
        e && x(t), e && x(n), e && x(s), e && x(a), e && x(l);
      },
    };
  }
  function Li(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m, p, v, b, y, C, z, L;
    return (
      (a = new Sa({ props: { language: 'js', source: "import { Tooltip } from '@ekstra-bladet/designsystem';" } })),
      (c = new ha({ props: { $$slots: { default: [zi] }, $$scope: { ctx: e } } })),
      (g = new Sa({
        props: {
          language: 'html',
          source:
            '\n      <Tooltip>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>\n        <p>Aenean a blandit lacus, sed faucibus ante.</p>\n      </Tooltip>\n    ',
        },
      })),
      (y = new ha({
        props: {
          className: 'flex-item flex-item--center',
          position: 'right',
          $$slots: { default: [Bi] },
          $$scope: { ctx: e },
        },
      })),
      (z = new Sa({
        props: {
          language: 'html',
          source:
            '\n      <div class="flex flex-justify--between grid-width--small">\n        <h3 class="flex-item">Flot overskrift</h3>\n        <Tooltip className="flex-item flex-item--center" position="right">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>\n          <p>Aenean a blandit lacus, sed faucibus ante.</p>\n        </Tooltip>\n      </div>\n    ',
        },
      })),
      {
        c() {
          (t = w('h1')),
            (t.textContent = 'Tooltip'),
            (n = k()),
            (s = w('div')),
            ue(a.$$.fragment),
            (l = k()),
            (r = w('h2')),
            (r.textContent = 'Default tooltip'),
            (i = k()),
            (o = w('div')),
            ue(c.$$.fragment),
            (d = k()),
            ue(g.$$.fragment),
            (u = k()),
            (f = w('h2')),
            (f.textContent = 'Tooltip i højre side'),
            (m = k()),
            (p = w('div')),
            (v = w('h3')),
            (v.textContent = 'Flot overskrift'),
            (b = k()),
            ue(y.$$.fragment),
            (C = k()),
            ue(z.$$.fragment),
            B(t, 'class', 'color--eb'),
            B(o, 'class', 'flex margin-l--tb'),
            B(v, 'class', 'flex-item'),
            B(p, 'class', 'flex flex-justify--between grid-width--small margin-l--tb'),
            B(s, 'class', 'grid-width--small');
        },
        m(e, x) {
          h(e, t, x),
            h(e, n, x),
            h(e, s, x),
            fe(a, s, null),
            $(s, l),
            $(s, r),
            $(s, i),
            $(s, o),
            fe(c, o, null),
            $(s, d),
            fe(g, s, null),
            $(s, u),
            $(s, f),
            $(s, m),
            $(s, p),
            $(p, v),
            $(p, b),
            fe(y, p, null),
            $(s, C),
            fe(z, s, null),
            (L = !0);
        },
        p(e, [t]) {
          const n = {};
          1 & t && (n.$$scope = { dirty: t, ctx: e }), c.$set(n);
          const s = {};
          1 & t && (s.$$scope = { dirty: t, ctx: e }), y.$set(s);
        },
        i(e) {
          L ||
            (ie(a.$$.fragment, e),
            ie(c.$$.fragment, e),
            ie(g.$$.fragment, e),
            ie(y.$$.fragment, e),
            ie(z.$$.fragment, e),
            (L = !0));
        },
        o(e) {
          oe(a.$$.fragment, e),
            oe(c.$$.fragment, e),
            oe(g.$$.fragment, e),
            oe(y.$$.fragment, e),
            oe(z.$$.fragment, e),
            (L = !1);
        },
        d(e) {
          e && x(t), e && x(n), e && x(s), me(a), me(c), me(g), me(y), me(z);
        },
      }
    );
  }
  function Ni(e) {
    let t;
    return {
      c() {
        (t = w('i')), B(t, 'class', 'fas fa-cubes');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ti(e) {
    let t;
    return {
      c() {
        (t = w('i')), B(t, 'class', 'fas fa-code');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Mi(e) {
    let t, n, s, a;
    return (
      (t = new qs({ props: { $$slots: { default: [Ni] }, $$scope: { ctx: e } } })),
      (s = new qs({ props: { $$slots: { default: [Ti] }, $$scope: { ctx: e } } })),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          2 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          2 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function Fi(e) {
    let t;
    return {
      c() {
        t = y('Bandekriminialitet');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Ei(e) {
    let t;
    return {
      c() {
        t = y('Sport');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Si(e) {
    let t;
    return {
      c() {
        t = y('Nicklas Bendtner');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Hi(e) {
    let t, n, s, a, l, r, i, o, c, d;
    return (
      (n = new Zn({
        props: {
          className: 'animation-fogwave',
          href: e[0].href,
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: e[0].section,
          timestamp: e[0].timestamp,
          title: e[0].title,
        },
      })),
      (l = new es({
        props: {
          href: '#',
          className: 'margin-s bg--bluedark animation-fogwave',
          $$slots: { default: [Fi] },
          $$scope: { ctx: e },
        },
      })),
      (i = new es({
        props: {
          href: '#',
          className: 'margin-s bg--green animation-fogwave',
          $$slots: { default: [Ei] },
          $$scope: { ctx: e },
        },
      })),
      (c = new es({
        props: {
          href: '#',
          className: 'margin-s bg--greendark animation-fogwave',
          $$slots: { default: [Si] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          (t = w('div')),
            ue(n.$$.fragment),
            (s = k()),
            (a = w('div')),
            ue(l.$$.fragment),
            (r = k()),
            ue(i.$$.fragment),
            (o = k()),
            ue(c.$$.fragment),
            B(t, 'class', 'flex grid-width--small'),
            B(a, 'class', 'flex grid-width--small');
        },
        m(e, g) {
          h(e, t, g),
            fe(n, t, null),
            h(e, s, g),
            h(e, a, g),
            fe(l, a, null),
            $(a, r),
            fe(i, a, null),
            $(a, o),
            fe(c, a, null),
            (d = !0);
        },
        p(e, t) {
          const n = {};
          2 & t && (n.$$scope = { dirty: t, ctx: e }), l.$set(n);
          const s = {};
          2 & t && (s.$$scope = { dirty: t, ctx: e }), i.$set(s);
          const a = {};
          2 & t && (a.$$scope = { dirty: t, ctx: e }), c.$set(a);
        },
        i(e) {
          d || (ie(n.$$.fragment, e), ie(l.$$.fragment, e), ie(i.$$.fragment, e), ie(c.$$.fragment, e), (d = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), oe(l.$$.fragment, e), oe(i.$$.fragment, e), oe(c.$$.fragment, e), (d = !1);
        },
        d(e) {
          e && x(t), me(n), e && x(s), e && x(a), me(l), me(i), me(c);
        },
      }
    );
  }
  function Ai(t) {
    let n, s, a, l, r, i;
    return (
      (n = new Sa({
        props: {
          language: 'html',
          source:
            '<ArticleCard\n          className="animation-fogwave"\n          href="{article.href}"\n          media="{{src:\'https://via.placeholder.com/610x343&text=610x343\'}}"\n          section="{article.section}"\n          timestamp="{article.timestamp}"\n          title="{article.title}"\n          />',
        },
      })),
      (a = new Sa({
        props: {
          language: 'html',
          source: '<Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>',
        },
      })),
      (r = new Sa({
        props: {
          language: 'html',
          source: '<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>',
        },
      })),
      {
        c() {
          ue(n.$$.fragment), (s = k()), ue(a.$$.fragment), (l = k()), ue(r.$$.fragment);
        },
        m(e, t) {
          fe(n, e, t), h(e, s, t), fe(a, e, t), h(e, l, t), fe(r, e, t), (i = !0);
        },
        p: e,
        i(e) {
          i || (ie(n.$$.fragment, e), ie(a.$$.fragment, e), ie(r.$$.fragment, e), (i = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), oe(a.$$.fragment, e), oe(r.$$.fragment, e), (i = !1);
        },
        d(e) {
          me(n, e), e && x(s), me(a, e), e && x(l), me(r, e);
        },
      }
    );
  }
  function _i(e) {
    let t, n, s, a, l, r, i;
    return (
      (n = new Zs({ props: { $$slots: { default: [Mi] }, $$scope: { ctx: e } } })),
      (a = new Us({ props: { $$slots: { default: [Hi] }, $$scope: { ctx: e } } })),
      (r = new Us({ props: { $$slots: { default: [Ai] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = w('div')),
            ue(n.$$.fragment),
            (s = k()),
            ue(a.$$.fragment),
            (l = k()),
            ue(r.$$.fragment),
            B(t, 'class', 'flex flex-justify--end width-1of1');
        },
        m(e, o) {
          h(e, t, o), fe(n, t, null), h(e, s, o), fe(a, e, o), h(e, l, o), fe(r, e, o), (i = !0);
        },
        p(e, t) {
          const s = {};
          2 & t && (s.$$scope = { dirty: t, ctx: e }), n.$set(s);
          const l = {};
          2 & t && (l.$$scope = { dirty: t, ctx: e }), a.$set(l);
          const i = {};
          2 & t && (i.$$scope = { dirty: t, ctx: e }), r.$set(i);
        },
        i(e) {
          i || (ie(n.$$.fragment, e), ie(a.$$.fragment, e), ie(r.$$.fragment, e), (i = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), oe(a.$$.fragment, e), oe(r.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && x(t), me(n), e && x(s), me(a, e), e && x(l), me(r, e);
        },
      }
    );
  }
  function Pi(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m, p, v, b, y, C, z, L, N, T, M, F, S;
    return (
      (m = new Vs({ props: { $$slots: { default: [_i] }, $$scope: { ctx: e } } })),
      (F = new Sa({ props: { language: 'html', source: '<component className="animation-fogwave"/></component>' } })),
      {
        c() {
          (t = w('div')),
            (n = w('h1')),
            (n.textContent = 'Animation'),
            (s = k()),
            (a = w('h3')),
            (a.textContent = 'Anvendelse af animationer'),
            (l = k()),
            (r = w('p')),
            (r.innerHTML =
              'Animationer anvendes ved tilføjelse af class: <code>className=&quot;animation-navnPåAnimation&quot;</code>'),
            (i = k()),
            (o = w('p')),
            (o.textContent = 'Denne class kan anvendes på tværs af vores komponenter'),
            (c = k()),
            (d = w('p')),
            (d.innerHTML =
              '<b>OBS:</b> anvendes en animation direkte på et html-element skal det anvendes på følgende måde:\n    <code>class=&quot;animation-navnPåAnimation&quot;</code>'),
            (g = k()),
            (u = w('h3')),
            (u.textContent = 'Eksempler på animationer'),
            (f = k()),
            ue(m.$$.fragment),
            (p = k()),
            (v = w('h3')),
            (v.textContent = 'Overblik over animationer'),
            (b = k()),
            (y = w('div')),
            (C = w('div')),
            (C.innerHTML =
              '<div class="width-1of3 padding-m fontweight-bold">Class</div> \n      <div class="width-1of3 padding-m fontweight-bold">Use case</div>'),
            (z = k()),
            (L = w('div')),
            (N = w('div')),
            (N.textContent = 'animation-fogwave'),
            (T = k()),
            (M = w('div')),
            ue(F.$$.fragment),
            B(n, 'class', 'color--eb'),
            B(C, 'class', 'flex flex-item--center bg--graa7'),
            E(C, 'border-bottom', '1px solid rgba(0, 0, 0, .1)'),
            B(N, 'class', 'flex-item--center width-1of3 padding-m'),
            B(M, 'class', 'flex-item--center width-2of3 padding-m'),
            B(L, 'class', 'flex bg--graa7'),
            E(L, 'border-bottom', '1px solid rgba(0, 0, 0, .1)'),
            B(y, 'class', 'grid-width--large'),
            B(t, 'class', 'grid-width--large');
        },
        m(e, x) {
          h(e, t, x),
            $(t, n),
            $(t, s),
            $(t, a),
            $(t, l),
            $(t, r),
            $(t, i),
            $(t, o),
            $(t, c),
            $(t, d),
            $(t, g),
            $(t, u),
            $(t, f),
            fe(m, t, null),
            $(t, p),
            $(t, v),
            $(t, b),
            $(t, y),
            $(y, C),
            $(y, z),
            $(y, L),
            $(L, N),
            $(L, T),
            $(L, M),
            fe(F, M, null),
            (S = !0);
        },
        p(e, [t]) {
          const n = {};
          2 & t && (n.$$scope = { dirty: t, ctx: e }), m.$set(n);
        },
        i(e) {
          S || (ie(m.$$.fragment, e), ie(F.$$.fragment, e), (S = !0));
        },
        o(e) {
          oe(m.$$.fragment, e), oe(F.$$.fragment, e), (S = !1);
        },
        d(e) {
          e && x(t), me(m), me(F);
        },
      }
    );
  }
  function ji(e) {
    return [
      {
        href: '#',
        media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
        section: 'Sport',
        timestamp: '2 timer siden',
        title: 'List element',
      },
    ];
  }
  function Vi(e) {
    let t;
    return {
      c() {
        (t = w('i')), B(t, 'class', 'fas fa-cubes');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Oi(e) {
    let t;
    return {
      c() {
        (t = w('i')), B(t, 'class', 'fas fa-code');
      },
      m(e, n) {
        h(e, t, n);
      },
      d(e) {
        e && x(t);
      },
    };
  }
  function Di(e) {
    let t, n, s, a;
    return (
      (t = new qs({ props: { $$slots: { default: [Vi] }, $$scope: { ctx: e } } })),
      (s = new qs({ props: { $$slots: { default: [Oi] }, $$scope: { ctx: e } } })),
      {
        c() {
          ue(t.$$.fragment), (n = k()), ue(s.$$.fragment);
        },
        m(e, l) {
          fe(t, e, l), h(e, n, l), fe(s, e, l), (a = !0);
        },
        p(e, n) {
          const a = {};
          2 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
          const l = {};
          2 & n && (l.$$scope = { dirty: n, ctx: e }), s.$set(l);
        },
        i(e) {
          a || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), (a = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), (a = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e);
        },
      }
    );
  }
  function qi(t) {
    let n, s, a, l, r, i, o, c;
    return (
      (n = new Ae({ props: { dataTheme: 'lightmode', tabs: t[0] } })),
      (a = new Ae({ props: { dataTheme: 'darkmode', tabs: t[0] } })),
      {
        c() {
          ue(n.$$.fragment),
            (s = k()),
            ue(a.$$.fragment),
            (l = k()),
            (r = w('div')),
            (r.innerHTML = '<p>I&#39;m now in lightmode</p>'),
            (i = k()),
            (o = w('div')),
            (o.innerHTML = '<p>I&#39;m now in darkmode</p>'),
            B(r, 'data-theme', 'lightmode'),
            B(o, 'data-theme', 'darkmode');
        },
        m(e, t) {
          fe(n, e, t), h(e, s, t), fe(a, e, t), h(e, l, t), h(e, r, t), h(e, i, t), h(e, o, t), (c = !0);
        },
        p: e,
        i(e) {
          c || (ie(n.$$.fragment, e), ie(a.$$.fragment, e), (c = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), oe(a.$$.fragment, e), (c = !1);
        },
        d(e) {
          me(n, e), e && x(s), me(a, e), e && x(l), e && x(r), e && x(i), e && x(o);
        },
      }
    );
  }
  function Ii(t) {
    let n, s, a, l, r, i, o, c;
    return (
      (n = new Sa({ props: { language: 'html', source: '<Accordion dataTheme="lightmode" {tabs} />' } })),
      (a = new Sa({ props: { language: 'html', source: '<Accordion dataTheme="darkmode" {tabs} />' } })),
      (r = new Sa({
        props: { language: 'html', source: '<div data-theme="lightmode"><p>I\'m now in lightmode</p></div>' },
      })),
      (o = new Sa({
        props: { language: 'html', source: '<div data-theme="darkmode"><p>I\'m now in darkmode</p></div>' },
      })),
      {
        c() {
          ue(n.$$.fragment), (s = k()), ue(a.$$.fragment), (l = k()), ue(r.$$.fragment), (i = k()), ue(o.$$.fragment);
        },
        m(e, t) {
          fe(n, e, t), h(e, s, t), fe(a, e, t), h(e, l, t), fe(r, e, t), h(e, i, t), fe(o, e, t), (c = !0);
        },
        p: e,
        i(e) {
          c || (ie(n.$$.fragment, e), ie(a.$$.fragment, e), ie(r.$$.fragment, e), ie(o.$$.fragment, e), (c = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), oe(a.$$.fragment, e), oe(r.$$.fragment, e), oe(o.$$.fragment, e), (c = !1);
        },
        d(e) {
          me(n, e), e && x(s), me(a, e), e && x(l), me(r, e), e && x(i), me(o, e);
        },
      }
    );
  }
  function Ri(e) {
    let t, n, s, a, l, r, i;
    return (
      (n = new Zs({ props: { $$slots: { default: [Di] }, $$scope: { ctx: e } } })),
      (a = new Us({ props: { $$slots: { default: [qi] }, $$scope: { ctx: e } } })),
      (r = new Us({ props: { $$slots: { default: [Ii] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = w('div')),
            ue(n.$$.fragment),
            (s = k()),
            ue(a.$$.fragment),
            (l = k()),
            ue(r.$$.fragment),
            B(t, 'class', 'flex flex-justify--end width-1of1 margin-m--b');
        },
        m(e, o) {
          h(e, t, o), fe(n, t, null), h(e, s, o), fe(a, e, o), h(e, l, o), fe(r, e, o), (i = !0);
        },
        p(e, t) {
          const s = {};
          2 & t && (s.$$scope = { dirty: t, ctx: e }), n.$set(s);
          const l = {};
          2 & t && (l.$$scope = { dirty: t, ctx: e }), a.$set(l);
          const i = {};
          2 & t && (i.$$scope = { dirty: t, ctx: e }), r.$set(i);
        },
        i(e) {
          i || (ie(n.$$.fragment, e), ie(a.$$.fragment, e), ie(r.$$.fragment, e), (i = !0));
        },
        o(e) {
          oe(n.$$.fragment, e), oe(a.$$.fragment, e), oe(r.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && x(t), me(n), e && x(s), me(a, e), e && x(l), me(r, e);
        },
      }
    );
  }
  function Gi(e) {
    let t, n, s, a, l, r, i, o, c, d, g, u, f, m, p, v, b, y, C;
    return (
      (m = new Vs({ props: { $$slots: { default: [Ri] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = w('div')),
            (n = w('h1')),
            (n.textContent = 'Data Theme'),
            (s = k()),
            (a = w('h3')),
            (a.textContent = 'Anvendelse af data theme'),
            (l = k()),
            (r = w('p')),
            (r.innerHTML =
              'Farve tema anvendes ved tilføjelse af data-attribute ved navn dataTheme: <code>dataTheme=&quot;lightmode | darkmode&quot;</code>'),
            (i = k()),
            (o = w('p')),
            (o.innerHTML =
              '<code>dataTheme</code> kan anvendes på udvalgte komponenter, som kan ses nederst under <b>overblik</b>'),
            (c = k()),
            (d = w('p')),
            (d.innerHTML =
              '<b>OBS:</b> anvendes dataTheme direkte på et html-element skal det anvendes på følgende måde:\n    <code>data-theme=&quot;lightmode&quot;</code>'),
            (g = k()),
            (u = w('h3')),
            (u.textContent = 'Eksempler på data theme'),
            (f = k()),
            ue(m.$$.fragment),
            (p = k()),
            (v = w('h3')),
            (v.textContent = 'Overblik over komponenter der kan anvende data theme'),
            (b = k()),
            (y = w('div')),
            (y.innerHTML =
              '<div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m fontweight-bold">Component</div> \n      <div class="width-1of3 padding-m fontweight-bold">Dokumentation</div> \n      <div class="width-1of3 padding-m fontweight-bold">dataTheme</div></div> \n    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m">Accordion</div> \n      <div class="width-1of3 padding-m"><a href="#/components/accordion">Accordion</a></div> \n      <div class="width-1of3 padding-m"><p class="margin-none"><i class="fas fa-circle color--white"></i> lightmode</p> \n        <p class="margin-none"><i class="fas fa-circle color--black"></i> darkmode</p></div></div> \n    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m">Card (Card-mode)</div> \n      <div class="width-1of3 padding-m"><a href="#/components/card">Card</a></div> \n      <div class="width-1of3 padding-m"><p class="margin-none"><i class="fas fa-circle color--white"></i> lightmode</p> \n        <p class="margin-none"><i class="fas fa-circle color--black"></i> darkmode</p></div></div>'),
            B(n, 'class', 'color--eb'),
            B(y, 'class', 'grid-width--large'),
            B(t, 'class', 'grid-width--large');
        },
        m(e, x) {
          h(e, t, x),
            $(t, n),
            $(t, s),
            $(t, a),
            $(t, l),
            $(t, r),
            $(t, i),
            $(t, o),
            $(t, c),
            $(t, d),
            $(t, g),
            $(t, u),
            $(t, f),
            fe(m, t, null),
            $(t, p),
            $(t, v),
            $(t, b),
            $(t, y),
            (C = !0);
        },
        p(e, [t]) {
          const n = {};
          2 & t && (n.$$scope = { dirty: t, ctx: e }), m.$set(n);
        },
        i(e) {
          C || (ie(m.$$.fragment, e), (C = !0));
        },
        o(e) {
          oe(m.$$.fragment, e), (C = !1);
        },
        d(e) {
          e && x(t), me(m);
        },
      }
    );
  }
  function Ui(e) {
    return [
      [
        {
          title: 'Tab 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus.',
        },
      ],
    ];
  }
  function Yi(t) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f,
      m,
      p,
      v,
      b,
      y,
      C,
      z,
      L,
      N,
      T,
      M,
      F,
      S,
      H,
      A,
      _,
      P,
      j,
      V,
      O,
      D,
      q,
      I,
      R,
      G,
      U,
      Y,
      W,
      Z,
      J,
      X,
      K,
      Q,
      ee,
      te,
      ne,
      se,
      ae,
      le,
      re,
      ce,
      de,
      ge,
      pe,
      $e,
      he,
      xe,
      ve,
      we,
      be,
      ye,
      ke,
      Ce,
      ze,
      Be,
      Le,
      Ne,
      Te,
      Me,
      Fe,
      Ee,
      Se,
      He,
      Ae,
      _e,
      Pe,
      je,
      Ve,
      Oe,
      De,
      qe,
      Ie,
      Re,
      Ge,
      Ue,
      Ye,
      We,
      Ze,
      Je,
      Xe,
      Ke,
      Qe,
      et,
      tt,
      nt,
      st,
      at,
      lt,
      rt,
      it,
      ot,
      ct,
      dt,
      gt,
      ut,
      ft,
      mt,
      pt,
      $t,
      ht,
      xt,
      vt,
      wt,
      bt,
      yt,
      kt,
      Ct,
      zt,
      Bt,
      Lt,
      Nt;
    return (
      (g = new Sa({ props: { language: 'html', source: '<div class="flex"></div>' } })),
      (p = new Sa({ props: { language: 'html', source: '<component className="flex"></component>' } })),
      (L = new Sa({ props: { language: 'html', source: '<div class="flex">I\'m a flexbox container!</div>' } })),
      (_ = new Sa({ props: { language: 'html', source: '<div class="flex flex--center">...</div>' } })),
      (R = new Sa({ props: { language: 'html', source: '<div class="flex flex-justify--start">...</div>' } })),
      (W = new Sa({ props: { language: 'html', source: '<div class="flex flex-justify--center">...</div>' } })),
      (K = new Sa({ props: { language: 'html', source: '<div class="flex flex-justify--end">...</div>' } })),
      (ne = new Sa({ props: { language: 'html', source: '<div class="flex flex-justify--around">...</div>' } })),
      (re = new Sa({ props: { language: 'html', source: '<div class="flex flex-justify--between">...</div>' } })),
      (be = new Sa({ props: { language: 'html', source: '<div class="flex flex-align--start">...</div>' } })),
      (ze = new Sa({ props: { language: 'html', source: '<div class="flex flex-align--center">...</div>' } })),
      (Te = new Sa({ props: { language: 'html', source: '<div class="flex flex-align--end">...</div>' } })),
      (Se = new Sa({ props: { language: 'html', source: '<div class="flex flex-align--strech">...</div>' } })),
      (De = new Sa({ props: { language: 'html', source: '<div class="flex flex-column">...</div>' } })),
      (Ge = new Sa({ props: { language: 'html', source: '<div class="flex flex-column--reverse">...</div>' } })),
      (Ze = new Sa({ props: { language: 'html', source: '<div class="flex flex-row--reverse">...</div>' } })),
      (lt = new Sa({ props: { language: 'html', source: '<div class="flex">...</div>' } })),
      (ct = new Sa({ props: { language: 'html', source: '<div class="flex flex-wrap--wrap">...</div>' } })),
      (vt = new Sa({
        props: {
          language: 'html',
          source: '<div class="flex"><div class="flex-item flex-item--noshrink">Flex item no-shrink</div></div>',
        },
      })),
      (zt = new Sa({
        props: {
          language: 'html',
          source: '<div class="flex"><div class="flex-item flex-item--grow">Flex item grow</div></div>',
        },
      })),
      {
        c() {
          (n = w('div')),
            (s = w('h1')),
            (s.textContent = 'Flex'),
            (a = k()),
            (l = w('h3')),
            (l.textContent = 'Anvendelse af Flex'),
            (r = k()),
            (i = w('p')),
            (i.textContent =
              'Flex består af forskellige CSS klasser, som både kan anvendes på komponenter og elementer ved tilføjelse af class.'),
            (o = k()),
            (c = w('p')),
            (c.textContent = 'HTML element'),
            (d = k()),
            ue(g.$$.fragment),
            (u = k()),
            (f = w('p')),
            (f.textContent = 'Svelte component'),
            (m = k()),
            ue(p.$$.fragment),
            (v = k()),
            (b = w('h3')),
            (b.textContent = 'Flex container'),
            (y = k()),
            (C = w('p')),
            (C.innerHTML =
              'Flex tilføjer <code>display: flex</code> til container element og transformere alle child elementer til flex-items.'),
            (z = k()),
            ue(L.$$.fragment),
            (N = k()),
            (T = w('div')),
            (T.textContent = "I'm a flexbox container!"),
            (M = k()),
            (F = w('h3')),
            (F.textContent = 'Flex center'),
            (S = k()),
            (H = w('p')),
            (H.textContent = 'Flex center centrere alle child elementer både horizontalt og vertical.'),
            (A = k()),
            ue(_.$$.fragment),
            (P = k()),
            (j = w('div')),
            (j.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (V = k()),
            (O = w('h3')),
            (O.textContent = 'Flex justify content'),
            (D = k()),
            (q = w('p')),
            (q.innerHTML =
              'Justify content anvendes til <i>horizontal</i> placering af child elementer i flex containers.'),
            (I = k()),
            ue(R.$$.fragment),
            (G = k()),
            (U = w('div')),
            (U.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (Y = k()),
            ue(W.$$.fragment),
            (Z = k()),
            (J = w('div')),
            (J.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (X = k()),
            ue(K.$$.fragment),
            (Q = k()),
            (ee = w('div')),
            (ee.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (te = k()),
            ue(ne.$$.fragment),
            (se = k()),
            (ae = w('div')),
            (ae.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (le = k()),
            ue(re.$$.fragment),
            (ce = k()),
            (de = w('div')),
            (de.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (ge = k()),
            (pe = w('h3')),
            (pe.textContent = 'Flex align items'),
            ($e = k()),
            (he = w('p')),
            (he.innerHTML = 'Align items anvendes til <i>veritcal</i> placering af child elementer i flex containers.'),
            (xe = k()),
            (ve = w('p')),
            (ve.innerHTML =
              'Individuelle child elementer(flex-item) kan også vertical placeres med <code>flex-item--start | center | end | strech</code>'),
            (we = k()),
            ue(be.$$.fragment),
            (ye = k()),
            (ke = w('div')),
            (ke.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (Ce = k()),
            ue(ze.$$.fragment),
            (Be = k()),
            (Le = w('div')),
            (Le.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (Ne = k()),
            ue(Te.$$.fragment),
            (Me = k()),
            (Fe = w('div')),
            (Fe.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (Ee = k()),
            ue(Se.$$.fragment),
            (He = k()),
            (Ae = w('div')),
            (Ae.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>'),
            (_e = k()),
            (Pe = w('h3')),
            (Pe.textContent = 'Flex directions'),
            (je = k()),
            (Ve = w('p')),
            (Ve.textContent =
              'Flex directions bestemmer rækkefølgen for visning af child elementer i flex containeren.'),
            (Oe = k()),
            ue(De.$$.fragment),
            (qe = k()),
            (Ie = w('div')),
            (Ie.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>'),
            (Re = k()),
            ue(Ge.$$.fragment),
            (Ue = k()),
            (Ye = w('div')),
            (Ye.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>'),
            (We = k()),
            ue(Ze.$$.fragment),
            (Je = k()),
            (Xe = w('div')),
            (Xe.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>'),
            (Ke = k()),
            (Qe = w('h3')),
            (Qe.textContent = 'Flex wrap'),
            (et = k()),
            (tt = w('p')),
            (tt.textContent =
              'Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines\n    istedet for one-line.'),
            (nt = k()),
            (st = w('p')),
            (st.innerHTML =
              'Ex. browser-default er <code>flex-wrap: nowrap;</code> som forcer alle child elementer til at stå på samme line ved at squeeze\n    dem sammen.'),
            (at = k()),
            ue(lt.$$.fragment),
            (rt = k()),
            (it = w('div')),
            (it.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 3</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 4</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 5</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 6</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 7</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 8</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 9</div>'),
            (ot = k()),
            ue(ct.$$.fragment),
            (dt = k()),
            (gt = w('div')),
            (gt.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 4</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 5</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 6</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 7</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 8</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 9</div>'),
            (ut = k()),
            (ft = w('h3')),
            (ft.textContent = 'Flex size'),
            (mt = k()),
            (pt = w('p')),
            (pt.textContent = 'Flex size bestemmer hvordan størrelsen på child elementer skal opføre sig.'),
            ($t = k()),
            (ht = w('p')),
            (ht.innerHTML =
              '<code>flex-item--noshrink</code> sørger for at et child element altid vil have den samme størrelse også på scalering.'),
            (xt = k()),
            ue(vt.$$.fragment),
            (wt = k()),
            (bt = w('div')),
            (bt.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item normal</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item normal</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>'),
            (yt = k()),
            (kt = w('p')),
            (kt.innerHTML =
              '<code>flex-item--grow</code> sørger for at child element udfylder den tilbageværende plads i flex containeren.'),
            (Ct = k()),
            ue(zt.$$.fragment),
            (Bt = k()),
            (Lt = w('div')),
            (Lt.innerHTML =
              '<div class="flex-item bg--graa5 padding-l">Flex item normal</div> \n    <div class="flex-item flex-item--grow bg--graa5 padding-l">Flex item grow</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item normal</div>'),
            B(s, 'class', 'color--eb'),
            B(T, 'class', 'flex bg--graa7 padding-l'),
            B(j, 'class', 'flex flex--center bg--graa7'),
            E(j, 'height', '100px'),
            B(U, 'class', 'flex flex-justify--start bg--graa7'),
            B(J, 'class', 'flex flex-justify--center bg--graa7'),
            B(ee, 'class', 'flex flex-justify--end bg--graa7'),
            B(ae, 'class', 'flex flex-justify--around bg--graa7'),
            B(de, 'class', 'flex flex-justify--between bg--graa7'),
            B(ke, 'class', 'flex flex-align--start bg--graa7'),
            E(ke, 'height', '100px'),
            B(Le, 'class', 'flex flex-align--center bg--graa7'),
            E(Le, 'height', '100px'),
            B(Fe, 'class', 'flex flex-align--end bg--graa7'),
            E(Fe, 'height', '100px'),
            B(Ae, 'class', 'flex flex-align--strech bg--graa7'),
            E(Ae, 'height', '100px'),
            B(Ie, 'class', 'flex flex-column bg--graa7'),
            B(Ye, 'class', 'flex flex-column--reverse bg--graa7'),
            B(Xe, 'class', 'flex flex-row--reverse bg--graa7'),
            B(it, 'class', 'flex bg--graa7'),
            B(gt, 'class', 'flex flex-wrap--wrap bg--graa7'),
            B(bt, 'class', 'flex bg--graa7'),
            B(Lt, 'class', 'flex bg--graa7'),
            B(n, 'class', 'grid-width--large');
        },
        m(e, t) {
          h(e, n, t),
            $(n, s),
            $(n, a),
            $(n, l),
            $(n, r),
            $(n, i),
            $(n, o),
            $(n, c),
            $(n, d),
            fe(g, n, null),
            $(n, u),
            $(n, f),
            $(n, m),
            fe(p, n, null),
            $(n, v),
            $(n, b),
            $(n, y),
            $(n, C),
            $(n, z),
            fe(L, n, null),
            $(n, N),
            $(n, T),
            $(n, M),
            $(n, F),
            $(n, S),
            $(n, H),
            $(n, A),
            fe(_, n, null),
            $(n, P),
            $(n, j),
            $(n, V),
            $(n, O),
            $(n, D),
            $(n, q),
            $(n, I),
            fe(R, n, null),
            $(n, G),
            $(n, U),
            $(n, Y),
            fe(W, n, null),
            $(n, Z),
            $(n, J),
            $(n, X),
            fe(K, n, null),
            $(n, Q),
            $(n, ee),
            $(n, te),
            fe(ne, n, null),
            $(n, se),
            $(n, ae),
            $(n, le),
            fe(re, n, null),
            $(n, ce),
            $(n, de),
            $(n, ge),
            $(n, pe),
            $(n, $e),
            $(n, he),
            $(n, xe),
            $(n, ve),
            $(n, we),
            fe(be, n, null),
            $(n, ye),
            $(n, ke),
            $(n, Ce),
            fe(ze, n, null),
            $(n, Be),
            $(n, Le),
            $(n, Ne),
            fe(Te, n, null),
            $(n, Me),
            $(n, Fe),
            $(n, Ee),
            fe(Se, n, null),
            $(n, He),
            $(n, Ae),
            $(n, _e),
            $(n, Pe),
            $(n, je),
            $(n, Ve),
            $(n, Oe),
            fe(De, n, null),
            $(n, qe),
            $(n, Ie),
            $(n, Re),
            fe(Ge, n, null),
            $(n, Ue),
            $(n, Ye),
            $(n, We),
            fe(Ze, n, null),
            $(n, Je),
            $(n, Xe),
            $(n, Ke),
            $(n, Qe),
            $(n, et),
            $(n, tt),
            $(n, nt),
            $(n, st),
            $(n, at),
            fe(lt, n, null),
            $(n, rt),
            $(n, it),
            $(n, ot),
            fe(ct, n, null),
            $(n, dt),
            $(n, gt),
            $(n, ut),
            $(n, ft),
            $(n, mt),
            $(n, pt),
            $(n, $t),
            $(n, ht),
            $(n, xt),
            fe(vt, n, null),
            $(n, wt),
            $(n, bt),
            $(n, yt),
            $(n, kt),
            $(n, Ct),
            fe(zt, n, null),
            $(n, Bt),
            $(n, Lt),
            (Nt = !0);
        },
        p: e,
        i(e) {
          Nt ||
            (ie(g.$$.fragment, e),
            ie(p.$$.fragment, e),
            ie(L.$$.fragment, e),
            ie(_.$$.fragment, e),
            ie(R.$$.fragment, e),
            ie(W.$$.fragment, e),
            ie(K.$$.fragment, e),
            ie(ne.$$.fragment, e),
            ie(re.$$.fragment, e),
            ie(be.$$.fragment, e),
            ie(ze.$$.fragment, e),
            ie(Te.$$.fragment, e),
            ie(Se.$$.fragment, e),
            ie(De.$$.fragment, e),
            ie(Ge.$$.fragment, e),
            ie(Ze.$$.fragment, e),
            ie(lt.$$.fragment, e),
            ie(ct.$$.fragment, e),
            ie(vt.$$.fragment, e),
            ie(zt.$$.fragment, e),
            (Nt = !0));
        },
        o(e) {
          oe(g.$$.fragment, e),
            oe(p.$$.fragment, e),
            oe(L.$$.fragment, e),
            oe(_.$$.fragment, e),
            oe(R.$$.fragment, e),
            oe(W.$$.fragment, e),
            oe(K.$$.fragment, e),
            oe(ne.$$.fragment, e),
            oe(re.$$.fragment, e),
            oe(be.$$.fragment, e),
            oe(ze.$$.fragment, e),
            oe(Te.$$.fragment, e),
            oe(Se.$$.fragment, e),
            oe(De.$$.fragment, e),
            oe(Ge.$$.fragment, e),
            oe(Ze.$$.fragment, e),
            oe(lt.$$.fragment, e),
            oe(ct.$$.fragment, e),
            oe(vt.$$.fragment, e),
            oe(zt.$$.fragment, e),
            (Nt = !1);
        },
        d(e) {
          e && x(n),
            me(g),
            me(p),
            me(L),
            me(_),
            me(R),
            me(W),
            me(K),
            me(ne),
            me(re),
            me(be),
            me(ze),
            me(Te),
            me(Se),
            me(De),
            me(Ge),
            me(Ze),
            me(lt),
            me(ct),
            me(vt),
            me(zt);
        },
      }
    );
  }
  function Wi(t) {
    let n, s, a, l, r, i, o, c, d, g, u, f, m, p, $, v, b, y, C, z, L, N, T, M, F, E, S, H, A, _;
    return (
      (d = new Sa({
        props: { language: 'html', source: '\n  <div class="ff-primary">\n    Her er ff-primary\n  </div>\n' },
      })),
      ($ = new Sa({
        props: { language: 'html', source: '\n<div class="ff-secondary">\n  Her er ff-secondary\n</div>\n' },
      })),
      (T = new Sa({
        props: {
          language: 'html',
          source:
            '\n<div class="fontsize-xxsmall">\n  fontsize-xxsmall = .625rem ~ 10px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n</div>\n<div class="fontsize-xsmall">\n  fontsize-xsmall = .75rem ~ 12px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n</div>\n<div class="fontsize-small">\n  fontsize-small = .875rem ~ 14px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n</div>\n<div class="fontsize-medium">\n  fontsize-medium = 1rem ~ 16px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n</div>\n<div class="fontsize-large">\n  fontsize-large = 1.125rem ~18px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n  </div>\n<div class="fontsize-xlarge">\n  fontsize-xlarge = 1.25rem ~20px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n  </div>\n<div class="fontsize-xxlarge">\n  fontsize-xxlarge = 1.875rem ~30px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n  </div>\n<div class="fontsize-xxxlarge">\n  fontsize-xxxlarge = 2.25rem ~36px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n  </div>\n<div class="fontsize-xxxxlarge">\n  fontsize-xxxxlarge = 3.125rem ~50px;\n  <div class="fontsize-smaller">fontsize-smaller</div>\n  <div class="fontsize-larger">fontsize-larger</div>\n  </div>\n',
        },
      })),
      (A = new Sa({
        props: {
          language: 'html',
          source:
            '\n<p class="fontweight-normal">fontweight-normal</p>\n<p class="fontweight-bold">fontweight-bold</p>\n<p class="fontweight-bolder">fontweight-bolder</p>\n',
        },
      })),
      {
        c() {
          (n = w('h1')),
            (n.textContent = 'Fonts'),
            (s = k()),
            (a = w('h2')),
            (a.textContent = 'Font family'),
            (l = k()),
            (r = w('p')),
            (r.textContent = 'Primary'),
            (i = k()),
            (o = w('div')),
            (o.innerHTML =
              'Her er .ff-primary\n  <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p>'),
            (c = k()),
            ue(d.$$.fragment),
            (g = k()),
            (u = w('p')),
            (u.textContent = 'Secondary'),
            (f = k()),
            (m = w('div')),
            (m.innerHTML =
              'Her er .ff-secondary\n  <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p>'),
            (p = k()),
            ue($.$$.fragment),
            (v = k()),
            (b = w('p')),
            (b.textContent = 'Font-size'),
            (y = k()),
            (C = w('p')),
            (C.innerHTML =
              'Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.\n  <br/>\n  rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden\n  <br/>\n  Der er både en _larger_ og en _smaller_ mulighed, der begge er relative til parent fontsize'),
            (z = k()),
            (L = w('div')),
            (L.innerHTML =
              '<div class="fontsize-xxsmall padding-m--tb">fontsize-xxsmall = .625rem ~ 10px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xsmall padding-m--tb">fontsize-xsmall = .75rem ~ 12px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-small padding-m--tb">fontsize-small = .875rem ~ 14px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-medium padding-m--tb">fontsize-medium = 1rem ~ 16px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-large padding-m--tb">fontsize-large = 1.125rem ~ 18px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xlarge padding-m--tb">fontsize-xlarge = 1.25rem ~ 20px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xxlarge padding-m--tb">fontsize-xxlarge = 1.875rem ~ 30px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xxxlarge padding-m--tb">fontsize-xxxlarge = 2.25rem ~ 36px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xxxxlarge padding-m--tb">fontsize-xxxxlarge = 3.125rem ~ 50px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div>'),
            (N = k()),
            ue(T.$$.fragment),
            (M = k()),
            (F = w('p')),
            (F.textContent = 'Font-weight'),
            (E = k()),
            (S = w('div')),
            (S.innerHTML =
              '<p class="fontweight-normal">fontweight-normal</p> \n  <p class="fontweight-bold">fontweight-bold</p> \n  <p class="fontweight-bolder">fontweight-bolder</p>'),
            (H = k()),
            ue(A.$$.fragment),
            B(o, 'class', 'ff-primary'),
            B(m, 'class', 'ff-secondary');
        },
        m(e, t) {
          h(e, n, t),
            h(e, s, t),
            h(e, a, t),
            h(e, l, t),
            h(e, r, t),
            h(e, i, t),
            h(e, o, t),
            h(e, c, t),
            fe(d, e, t),
            h(e, g, t),
            h(e, u, t),
            h(e, f, t),
            h(e, m, t),
            h(e, p, t),
            fe($, e, t),
            h(e, v, t),
            h(e, b, t),
            h(e, y, t),
            h(e, C, t),
            h(e, z, t),
            h(e, L, t),
            h(e, N, t),
            fe(T, e, t),
            h(e, M, t),
            h(e, F, t),
            h(e, E, t),
            h(e, S, t),
            h(e, H, t),
            fe(A, e, t),
            (_ = !0);
        },
        p: e,
        i(e) {
          _ || (ie(d.$$.fragment, e), ie($.$$.fragment, e), ie(T.$$.fragment, e), ie(A.$$.fragment, e), (_ = !0));
        },
        o(e) {
          oe(d.$$.fragment, e), oe($.$$.fragment, e), oe(T.$$.fragment, e), oe(A.$$.fragment, e), (_ = !1);
        },
        d(e) {
          e && x(n),
            e && x(s),
            e && x(a),
            e && x(l),
            e && x(r),
            e && x(i),
            e && x(o),
            e && x(c),
            me(d, e),
            e && x(g),
            e && x(u),
            e && x(f),
            e && x(m),
            e && x(p),
            me($, e),
            e && x(v),
            e && x(b),
            e && x(y),
            e && x(C),
            e && x(z),
            e && x(L),
            e && x(N),
            me(T, e),
            e && x(M),
            e && x(F),
            e && x(E),
            e && x(S),
            e && x(H),
            me(A, e);
        },
      }
    );
  }
  function Zi(t) {
    let n, s, a, l, r, i, o, c;
    return (
      (r = new Sa({
        props: {
          language: 'html',
          source:
            '\n<div class="grid-width--small">Small grid</div>\n<div class="grid-width--medium">Medium grid</div>\n<div class="grid-width--large">Large grid</div>\n<div class="grid-width--xlarge">Xlarge grid</div>\n',
        },
      })),
      (o = new Sa({
        props: {
          language: 'css',
          source: '\n--grid-small: 610px;\n--grid-medium: 730px;\n--grid-large: 910px;\n--grid-xlarge: 930px;\n',
        },
      })),
      {
        c() {
          (n = w('h1')),
            (n.textContent = 'Grid'),
            (s = k()),
            (a = w('div')),
            (a.innerHTML =
              '<p>grid-width--xlarge: 930px</p> \n  <p>Page content width - frontpage</p> \n  <div class="grid-width--large vertical-center bg--graa3" style="overflow: hidden"><p>grid-width--large: 910px</p> \n    <p>Page content width</p> \n    <div class="grid-width--medium vertical-center bg--graa4" style="overflow: hidden"><p>grid-width--medium: 730px</p> \n      <p>Bodytext container width</p> \n      <div class="grid-width--small vertical-center bg--graa5" style="overflow: hidden"><p>grid-width--small: 610px</p> \n        <p>Widget width</p></div></div></div>'),
            (l = y('\n\n### Brugseksempler\n\n')),
            ue(r.$$.fragment),
            (i = y('\n\n### CSS variable names\n\n')),
            ue(o.$$.fragment),
            B(a, 'class', 'grid-width--xlarge text-align--center bg--graa1'),
            E(a, 'overflow', 'hidden');
        },
        m(e, t) {
          h(e, n, t), h(e, s, t), h(e, a, t), h(e, l, t), fe(r, e, t), h(e, i, t), fe(o, e, t), (c = !0);
        },
        p: e,
        i(e) {
          c || (ie(r.$$.fragment, e), ie(o.$$.fragment, e), (c = !0));
        },
        o(e) {
          oe(r.$$.fragment, e), oe(o.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && x(n), e && x(s), e && x(a), e && x(l), me(r, e), e && x(i), me(o, e);
        },
      }
    );
  }
  function Ji(t) {
    let n, s, a, l, r, i, o, c, d, g, u, f, m, p, $, v, b, C, z, L, N, T, M, F, E, S;
    return (
      (a = new Sa({ props: { language: 'html', source: '\n<div class="hidden"></div>\n' } })),
      (r = new Sa({
        props: {
          language: 'html',
          source:
            '\n<div class="position-absolute"></div>\n<div class="position-fixed"></div>\n<div class="position-relative"></div>\n',
        },
      })),
      (o = new Sa({
        props: { language: 'html', source: '\n<div class="float-left"></div>\n<div class="float-right"></div>\n' },
      })),
      (d = new Sa({ props: { language: 'html', source: '\n<div class="clear"></div>\n' } })),
      (m = new Sa({
        props: {
          language: 'html',
          source:
            '\n<div class="text-align--center bg--graa1">\n  <div class="width-1of3 text-align--left bg--graa3">Jeg er ikke centreret</div>\n  <div class="width-1of3 vertical-center text-align--left bg--graa3">Jeg er centreret</div>\n</div>\n',
        },
      })),
      ($ = new Sa({
        props: {
          language: 'html',
          source:
            '\n<div class="margin-none padding-none"></div>\n<div class="margin-s padding-s"></div>\n<div class="margin-m padding-m"></div>\n<div class="margin-l padding-l"></div>\n<div class="margin-xl padding-xl"></div>\n<div class="margin-none padding-xxl"></div>\n',
        },
      })),
      (b = new Sa({
        props: {
          language: 'html',
          source:
            '\n<div class="margin-l--t padding-l--t"></div>\n<div class="margin-l--r padding-l--r"></div>\n<div class="margin-l--b padding-l--b"></div>\n<div class="margin-l--l padding-l--l"></div>\n',
        },
      })),
      (z = new Sa({
        props: {
          language: 'html',
          source: '\n<div class="margin-l--tb padding-l--tb"></div>\n<div class="margin-l--rl padding-l--rl"></div>\n',
        },
      })),
      (N = new Sa({
        props: {
          language: 'html',
          source: '\n<div class="border-radius-s"></div>\n<div class="border-radius"></div>\n',
        },
      })),
      (M = new Sa({
        props: {
          language: 'html',
          source: '\n<div class="border-radius-s--t"></div>\n<div class="border-radius--t"></div>\n',
        },
      })),
      (E = new Sa({
        props: {
          language: 'html',
          source: '\n<div class="border-radius-s--b"></div>\n<div class="border-radius--b"></div>\n',
        },
      })),
      {
        c() {
          (n = w('h1')),
            (n.textContent = 'Helpers'),
            (s = y('\n\n## Hidden Skjul element.\n\n')),
            ue(a.$$.fragment),
            (l = y('\n\n## Position Findes som absolute, fixed og relative\n\n')),
            ue(r.$$.fragment),
            (i = y('\n\n## Floats Findes som left og right\n\n')),
            ue(o.$$.fragment),
            (c = y('\n\n## Clear\n\n')),
            ue(d.$$.fragment),
            (g = y(
              '\n\n## Centrér vertikalt Centrér element vertikal i sin container. Kræver at containeren har text-align--center\n\n'
            )),
            (u = w('div')),
            (u.innerHTML =
              '<div class="width-1of3 text-align--left bg--graa3">Jeg er ikke centreret</div> \n  <div class="width-1of3 vertical-center text-align--left bg--graa3">Jeg er centreret</div>'),
            (f = k()),
            ue(m.$$.fragment),
            (p = y(
              '\n\n## Margin + padding - boxmodel illustration For både **margin** og **padding** klassen har vi fem størrelser *(s, m, l,\nxl og xxl)* og så *none* som sættes på med bindesteg.\n\n'
            )),
            ue($.$$.fragment),
            (v = y(
              '\n\nOverstående vil give henholdsvis **margin** og **padding** hele vejen rundt. Ønskes der derimod kun at have **margin**\nog **padding** i en retning tilføjes dette med double bindestreg.\n\n'
            )),
            ue(b.$$.fragment),
            (C = y('\n\nVi har også to samle klasser for *top-bottom* og *right-left*.\n\n')),
            ue(z.$$.fragment),
            (L = y('\n\n## Border-radius Alle border-radius\n\n')),
            ue(N.$$.fragment),
            (T = y('\n\nTop border-radius\n\n')),
            ue(M.$$.fragment),
            (F = y('\n\nBottom border-radius\n\n')),
            ue(E.$$.fragment),
            B(u, 'class', 'text-align--center bg--graa1');
        },
        m(e, t) {
          h(e, n, t),
            h(e, s, t),
            fe(a, e, t),
            h(e, l, t),
            fe(r, e, t),
            h(e, i, t),
            fe(o, e, t),
            h(e, c, t),
            fe(d, e, t),
            h(e, g, t),
            h(e, u, t),
            h(e, f, t),
            fe(m, e, t),
            h(e, p, t),
            fe($, e, t),
            h(e, v, t),
            fe(b, e, t),
            h(e, C, t),
            fe(z, e, t),
            h(e, L, t),
            fe(N, e, t),
            h(e, T, t),
            fe(M, e, t),
            h(e, F, t),
            fe(E, e, t),
            (S = !0);
        },
        p: e,
        i(e) {
          S ||
            (ie(a.$$.fragment, e),
            ie(r.$$.fragment, e),
            ie(o.$$.fragment, e),
            ie(d.$$.fragment, e),
            ie(m.$$.fragment, e),
            ie($.$$.fragment, e),
            ie(b.$$.fragment, e),
            ie(z.$$.fragment, e),
            ie(N.$$.fragment, e),
            ie(M.$$.fragment, e),
            ie(E.$$.fragment, e),
            (S = !0));
        },
        o(e) {
          oe(a.$$.fragment, e),
            oe(r.$$.fragment, e),
            oe(o.$$.fragment, e),
            oe(d.$$.fragment, e),
            oe(m.$$.fragment, e),
            oe($.$$.fragment, e),
            oe(b.$$.fragment, e),
            oe(z.$$.fragment, e),
            oe(N.$$.fragment, e),
            oe(M.$$.fragment, e),
            oe(E.$$.fragment, e),
            (S = !1);
        },
        d(e) {
          e && x(n),
            e && x(s),
            me(a, e),
            e && x(l),
            me(r, e),
            e && x(i),
            me(o, e),
            e && x(c),
            me(d, e),
            e && x(g),
            e && x(u),
            e && x(f),
            me(m, e),
            e && x(p),
            me($, e),
            e && x(v),
            me(b, e),
            e && x(C),
            me(z, e),
            e && x(L),
            me(N, e),
            e && x(T),
            me(M, e),
            e && x(F),
            me(E, e);
        },
      }
    );
  }
  function Xi(t) {
    let n, s, a, l, r, i, o, c, d, g, u, f, m, p, v, b, C, z;
    return (
      (f = new Sa({
        props: {
          language: 'html',
          source:
            '\n  <div class="bg--graa5 padding-l">\n    <div class="bg--white margin-l--b padding-l width-1of1" />\n    <div class="bg--white margin-l--tb padding-l width-1of2" />\n    <div class="bg--white margin-l--tb padding-l width-1of3" />\n    <div class="bg--white margin-l--tb padding-l width-1of4" />\n    <div class="bg--white margin-l--tb padding-l width-1of5" />\n    <div class="bg--white margin-l--tb padding-l width-1of6" />\n    <div class="bg--white margin-l--tb padding-l width-2of3" />\n    <div class="bg--white margin-l--tb padding-l width-3of4" />\n    <div class="bg--white margin-l--t padding-l width-5of6" />\n  </div>\n',
        },
      })),
      {
        c() {
          (n = w('div')),
            (s = w('h1')),
            (s.textContent = 'Sizing'),
            (a = k()),
            (l = w('h3')),
            (l.textContent = 'Bredder'),
            (r = k()),
            (i = w('ul')),
            (i.innerHTML =
              '<li>width-auto</li> \n    <li>width-100vw</li> \n    <li>width-1of1</li> \n    <li>width-1of2</li> \n    <li>width-1of3</li> \n    <li>width-1of4</li> \n    <li>width-1of5</li> \n    <li>width-1of6</li> \n    <li>width-2of3</li> \n    <li>width-3of4</li> \n    <li>width-5of6</li>'),
            (o = k()),
            (c = w('p')),
            (c.textContent = 'Bredde i brøkdele'),
            (d = k()),
            (g = w('div')),
            (g.innerHTML =
              '<div class="bg--white margin-l--b padding-l width-1of1"></div> \n    <div class="bg--white margin-l--tb padding-l width-1of2"></div> \n    <div class="bg--white margin-l--tb padding-l width-1of3"></div> \n    <div class="bg--white margin-l--tb padding-l width-1of4"></div> \n    <div class="bg--white margin-l--tb padding-l width-1of5"></div> \n    <div class="bg--white margin-l--tb padding-l width-1of6"></div> \n    <div class="bg--white margin-l--tb padding-l width-2of3"></div> \n    <div class="bg--white margin-l--tb padding-l width-3of4"></div> \n    <div class="bg--white margin-l--t padding-l width-5of6"></div>'),
            (u = k()),
            ue(f.$$.fragment),
            (m = k()),
            (p = w('h3')),
            (p.textContent = 'Højder'),
            (v = k()),
            (b = w('ul')),
            (b.innerHTML = '<li>height-auto</li> \n    <li>height-1of1</li> \n    <li>height-100vh *</li>'),
            (C = y(
              '\n\n  * Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html'
            )),
            B(s, 'class', 'color--eb'),
            B(g, 'class', 'bg--graa5 padding-l'),
            B(n, 'class', 'grid-width--large');
        },
        m(e, t) {
          h(e, n, t),
            $(n, s),
            $(n, a),
            $(n, l),
            $(n, r),
            $(n, i),
            $(n, o),
            $(n, c),
            $(n, d),
            $(n, g),
            $(n, u),
            fe(f, n, null),
            $(n, m),
            $(n, p),
            $(n, v),
            $(n, b),
            $(n, C),
            (z = !0);
        },
        p: e,
        i(e) {
          z || (ie(f.$$.fragment, e), (z = !0));
        },
        o(e) {
          oe(f.$$.fragment, e), (z = !1);
        },
        d(e) {
          e && x(n), me(f);
        },
      }
    );
  }
  function Ki(t) {
    let n, s, a, l, r, i, o, c;
    return (
      (r = new Sa({
        props: {
          language: 'html',
          source:
            '\n<p class="text-align--center">Centreret tekst</p>\n<p class="text-align--left">Venstrestillet tekst</p>\n<p class="text-align--right">Højrestillet tekst</p>\n',
        },
      })),
      (o = new Sa({
        props: {
          language: 'html',
          source:
            '\n<p class="text-transform--lowercase">små bogstaver</p>\n<p class="text-transform--uppercase">STORE BOGSTAVER</p>\n',
        },
      })),
      {
        c() {
          (n = w('h1')),
            (n.textContent = 'Text'),
            (s = y('\n\n## Text alignment Findes som center, left og right\n\n')),
            (a = w('div')),
            (a.innerHTML =
              '<p class="text-align--center">Centreret tekst</p> \n  <p class="text-align--left">Venstrestillet tekst</p> \n  <p class="text-align--right">Højrestillet tekst</p>'),
            (l = k()),
            ue(r.$$.fragment),
            (i = y('\n\n## Text transform Findes som lowercase og uppercase\n\n')),
            ue(o.$$.fragment),
            B(a, 'class', 'margin-l--tb');
        },
        m(e, t) {
          h(e, n, t), h(e, s, t), h(e, a, t), h(e, l, t), fe(r, e, t), h(e, i, t), fe(o, e, t), (c = !0);
        },
        p: e,
        i(e) {
          c || (ie(r.$$.fragment, e), ie(o.$$.fragment, e), (c = !0));
        },
        o(e) {
          oe(r.$$.fragment, e), oe(o.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && x(n), e && x(s), e && x(a), e && x(l), me(r, e), e && x(i), me(o, e);
        },
      }
    );
  }
  const Qi = [
    {
      link: '/',
      title: 'Overblik',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, ya, ba, r, {});
        }
      },
    },
    {
      link: '/components/accordion',
      title: 'Accordion',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Aa, Ha, r, {});
        }
      },
    },
    {
      link: '/components/articlecard',
      title: 'Article card',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Pa, _a, r, {});
        }
      },
    },
    {
      link: '/components/badge',
      title: 'Badge',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Qa, Xa, r, {});
        }
      },
    },
    {
      link: '/components/button',
      title: 'Button',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Bl, kl, r, {});
        }
      },
    },
    {
      link: '/components/buttongroup',
      title: 'Button group',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, mr, fr, r, {});
        }
      },
    },
    {
      link: '/components/card',
      title: 'Card',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, kr, r, {});
        }
      },
    },
    {
      link: '/components/form-elements',
      title: 'Form elements',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Br, zr, r, {});
        }
      },
    },
    {
      link: '/components/icon',
      title: 'Icon',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Mr, r, {});
        }
      },
    },
    {
      link: '/components/horizontalscroll',
      title: 'Horizontal scroll',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Ar, Hr, r, {});
        }
      },
    },
    {
      link: '/components/pillnavigation',
      title: 'Pill navigation',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Jr, r, {});
        }
      },
    },
    {
      link: '/components/spinner',
      title: 'Spinner',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Xr, r, {});
        }
      },
    },
    {
      link: '/components/toggler',
      title: 'Toggler',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Ci, ki, r, {});
        }
      },
    },
    {
      link: '/components/tooltip',
      title: 'Tooltip',
      type: 'component',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Li, r, {});
        }
      },
    },
    {
      link: '/utilities/animation',
      title: 'Animation',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, ji, Pi, r, {});
        }
      },
    },
    {
      link: '/utilities/datatheme',
      title: 'Data theme',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, Ui, Gi, r, {});
        }
      },
    },
    {
      link: '/utilities/flex',
      title: 'Flex',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Yi, r, {});
        }
      },
    },
    {
      link: '/utilities/fonts',
      title: 'Fonts',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Wi, r, {});
        }
      },
    },
    {
      link: '/utilities/grid',
      title: 'Grid',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Zi, r, {});
        }
      },
    },
    {
      link: '/utilities/helpers',
      title: 'Helpers',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Ji, r, {});
        }
      },
    },
    {
      link: '/utilities/sizing',
      title: 'Sizing',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Xi, r, {});
        }
      },
    },
    {
      link: '/utilities/text',
      title: 'Text',
      type: 'utility',
      component: class extends $e {
        constructor(e) {
          super(), pe(this, e, null, Ki, r, {});
        }
      },
    },
  ];
  function eo(e, t, n) {
    const s = e.slice();
    return (s[5] = t[n]), s;
  }
  function to(e, t, n) {
    const s = e.slice();
    return (s[5] = t[n]), s;
  }
  function no(e, t, n) {
    const s = e.slice();
    return (s[5] = t[n]), s;
  }
  function so(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i = e[5].title + '';
    return {
      c() {
        (t = w('div')),
          (n = w('a')),
          (s = y(i)),
          B(
            n,
            'class',
            (a =
              'sidebar-item ' +
              (e[5].link === e[0] ? 'active-item' : '') +
              ' width-1of1 padding-m--t fontsize-large svelte-av0po4')
          ),
          B(n, 'href', e[5].link),
          B(t, 'class', 'sidebar-menuitem-container padding-l svelte-av0po4');
      },
      m(e, a) {
        h(e, t, a), $(t, n), $(n, s), l || ((r = f(Be.call(null, n))), (l = !0));
      },
      p(e, t) {
        1 & t &&
          a !==
            (a =
              'sidebar-item ' +
              (e[5].link === e[0] ? 'active-item' : '') +
              ' width-1of1 padding-m--t fontsize-large svelte-av0po4') &&
          B(n, 'class', a);
      },
      d(e) {
        e && x(t), (l = !1), r();
      },
    };
  }
  function ao(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i = e[5].title + '';
    return {
      c() {
        (t = w('a')),
          (n = y(i)),
          (s = k()),
          B(
            t,
            'class',
            (a =
              'sidebar-item ' +
              (e[5].link === e[0] ? 'active-item' : '') +
              ' width-1of1 padding-m--t padding-m--rl svelte-av0po4')
          ),
          B(t, 'href', e[5].link);
      },
      m(e, a) {
        h(e, t, a), $(t, n), $(t, s), l || ((r = f(Be.call(null, t))), (l = !0));
      },
      p(e, n) {
        1 & n &&
          a !==
            (a =
              'sidebar-item ' +
              (e[5].link === e[0] ? 'active-item' : '') +
              ' width-1of1 padding-m--t padding-m--rl svelte-av0po4') &&
          B(t, 'class', a);
      },
      d(e) {
        e && x(t), (l = !1), r();
      },
    };
  }
  function lo(e) {
    let t,
      n,
      s,
      a,
      l,
      r,
      i = e[5].title + '';
    return {
      c() {
        (t = w('a')),
          (n = y(i)),
          (s = k()),
          B(
            t,
            'class',
            (a =
              'sidebar-item ' +
              (e[5].link === e[0] ? 'active-item' : '') +
              ' width-1of1 padding-m--t padding-m--rl svelte-av0po4')
          ),
          B(t, 'href', e[5].link);
      },
      m(e, a) {
        h(e, t, a), $(t, n), $(t, s), l || ((r = f(Be.call(null, t))), (l = !0));
      },
      p(e, n) {
        1 & n &&
          a !==
            (a =
              'sidebar-item ' +
              (e[5].link === e[0] ? 'active-item' : '') +
              ' width-1of1 padding-m--t padding-m--rl svelte-av0po4') &&
          B(t, 'class', a);
      },
      d(e) {
        e && x(t), (l = !1), r();
      },
    };
  }
  function ro(t) {
    let n,
      s,
      a,
      l,
      r,
      i,
      o,
      c,
      d,
      g,
      u,
      f,
      m,
      p = t[1],
      b = [];
    for (let e = 0; e < p.length; e += 1) b[e] = so(no(t, p, e));
    let y = t[2],
      C = [];
    for (let e = 0; e < y.length; e += 1) C[e] = ao(to(t, y, e));
    let z = t[3],
      L = [];
    for (let e = 0; e < z.length; e += 1) L[e] = lo(eo(t, z, e));
    return {
      c() {
        (n = w('div')),
          (s = w('div')),
          (s.innerHTML =
            '<div><a href="#/" class="svelte-av0po4"><img alt="" src="ekstrabladet.svg" style="height:70px;"/></a></div> \n    <div class="flex-item flex-item--center"><p class="flex--grow width-1of1 color--graa1 fontweight-bold">Design system</p></div>'),
          (a = k());
        for (let e = 0; e < b.length; e += 1) b[e].c();
        (l = k()), (r = w('div')), (i = w('div')), (i.textContent = 'Components'), (o = k()), (c = w('div'));
        for (let e = 0; e < C.length; e += 1) C[e].c();
        (d = k()), (g = w('div')), (u = w('div')), (u.textContent = 'Utilities'), (f = k()), (m = w('div'));
        for (let e = 0; e < L.length; e += 1) L[e].c();
        B(s, 'class', 'flex flex-justify--around sidebar-logo-container padding-m--rl svelte-av0po4'),
          B(i, 'class', 'sidebar-submenu-title fontsize-small svelte-av0po4'),
          B(c, 'class', 'sidebar-submenu-items'),
          B(r, 'class', 'sidebar-menuitem-container padding-l svelte-av0po4'),
          B(u, 'class', 'sidebar-submenu-title fontsize-small svelte-av0po4'),
          B(m, 'class', 'sidebar-submenu-items'),
          B(g, 'class', 'sidebar-menuitem-container padding-l svelte-av0po4'),
          B(n, 'id', 'sidebar-menu'),
          B(n, 'class', 'sidebar-container height-100vh bg--white margin-l--r svelte-av0po4');
      },
      m(e, t) {
        h(e, n, t), $(n, s), $(n, a);
        for (let e = 0; e < b.length; e += 1) b[e].m(n, null);
        $(n, l), $(n, r), $(r, i), $(r, o), $(r, c);
        for (let e = 0; e < C.length; e += 1) C[e].m(c, null);
        $(n, d), $(n, g), $(g, u), $(g, f), $(g, m);
        for (let e = 0; e < L.length; e += 1) L[e].m(m, null);
      },
      p(e, [t]) {
        if (3 & t) {
          let s;
          for (p = e[1], s = 0; s < p.length; s += 1) {
            const a = no(e, p, s);
            b[s] ? b[s].p(a, t) : ((b[s] = so(a)), b[s].c(), b[s].m(n, l));
          }
          for (; s < b.length; s += 1) b[s].d(1);
          b.length = p.length;
        }
        if (5 & t) {
          let n;
          for (y = e[2], n = 0; n < y.length; n += 1) {
            const s = to(e, y, n);
            C[n] ? C[n].p(s, t) : ((C[n] = ao(s)), C[n].c(), C[n].m(c, null));
          }
          for (; n < C.length; n += 1) C[n].d(1);
          C.length = y.length;
        }
        if (9 & t) {
          let n;
          for (z = e[3], n = 0; n < z.length; n += 1) {
            const s = eo(e, z, n);
            L[n] ? L[n].p(s, t) : ((L[n] = lo(s)), L[n].c(), L[n].m(m, null));
          }
          for (; n < L.length; n += 1) L[n].d(1);
          L.length = z.length;
        }
      },
      i: e,
      o: e,
      d(e) {
        e && x(n), v(b, e), v(C, e), v(L, e);
      },
    };
  }
  function io(e, t, n) {
    let { menuItemList: s = [] } = t,
      a = window.location.hash.substr(1),
      l = [],
      r = [],
      i = [];
    return (
      s.forEach((e) => {
        'component' === e.type && r.push(e), 'utility' === e.type && i.push(e), e.type || l.push(e);
      }),
      P(() => {
        document.querySelectorAll('#sidebar-menu .sidebar-item').forEach((e) => {
          e.addEventListener('click', () => {
            n(0, (a = window.location.hash.substr(1)));
          });
        });
      }),
      window.addEventListener('hashchange', () => {
        n(0, (a = window.location.hash.substr(1)));
      }),
      (e.$$set = (e) => {
        'menuItemList' in e && n(4, (s = e.menuItemList));
      }),
      [a, l, r, i, s]
    );
  }
  class oo extends $e {
    constructor(e) {
      super(), pe(this, e, io, ro, r, { menuItemList: 4 });
    }
  }
  function co(t) {
    let n;
    return {
      c() {
        (n = w('div')),
          (n.innerHTML =
            '<nav class="navmenu flex flex-align--center padding-xl--rl svelte-gb8srt"><a href="https://github.com/EkstraBladetUdvikling/eb-designsystem" target="_blank" class="flex svelte-gb8srt"><i class="fab fa-github margin-s--r"></i>Github</a></nav>'),
          B(n, 'class', 'navmenu-container position-fixed width-1of1 margin-xl--b bg-red svelte-gb8srt');
      },
      m(e, t) {
        h(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && x(n);
      },
    };
  }
  class go extends $e {
    constructor(e) {
      super(), pe(this, e, null, co, r, {});
    }
  }
  function uo(e) {
    let t, n, s, a, l, r, i;
    return (
      (t = new go({})),
      (s = new oo({ props: { menuItemList: e[1] } })),
      (r = new Me({ props: { routes: e[0] } })),
      {
        c() {
          ue(t.$$.fragment),
            (n = k()),
            ue(s.$$.fragment),
            (a = k()),
            (l = w('div')),
            ue(r.$$.fragment),
            B(l, 'class', 'content-container padding-xl svelte-1tjuw1s');
        },
        m(e, o) {
          fe(t, e, o), h(e, n, o), fe(s, e, o), h(e, a, o), h(e, l, o), fe(r, l, null), (i = !0);
        },
        p(e, [t]) {
          const n = {};
          1 & t && (n.routes = e[0]), r.$set(n);
        },
        i(e) {
          i || (ie(t.$$.fragment, e), ie(s.$$.fragment, e), ie(r.$$.fragment, e), (i = !0));
        },
        o(e) {
          oe(t.$$.fragment, e), oe(s.$$.fragment, e), oe(r.$$.fragment, e), (i = !1);
        },
        d(e) {
          me(t, e), e && x(n), me(s, e), e && x(a), e && x(l), me(r);
        },
      }
    );
  }
  function fo(e, t, n) {
    let s = {},
      a = [];
    return (
      Qi.forEach((e) => {
        n(0, (s[e.link] = e.component), s), a.push(e);
      }),
      [s, a]
    );
  }
  return new (class extends $e {
    constructor(e) {
      super(), pe(this, e, fo, uo, r, {});
    }
  })({ target: document.body, props: { name: 'world' } });
})();
