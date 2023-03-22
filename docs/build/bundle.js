var app = (function () {
  'use strict';
  function t() {}
  function e(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function n(t) {
    return t();
  }
  function s() {
    return Object.create(null);
  }
  function a(t) {
    t.forEach(n);
  }
  function r(t) {
    return 'function' == typeof t;
  }
  function l(t, e) {
    return t != t ? e == e : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
  }
  let i, o;
  function c(t, e) {
    return i || (i = document.createElement('a')), (i.href = e), t === i.href;
  }
  function d(e, ...n) {
    if (null == e) return t;
    const s = e.subscribe(...n);
    return s.unsubscribe ? () => s.unsubscribe() : s;
  }
  function u(t, e, n) {
    t.$$.on_destroy.push(d(e, n));
  }
  function f(t, e, n, s) {
    if (t) {
      const a = g(t, e, n, s);
      return t[0](a);
    }
  }
  function g(t, n, s, a) {
    return t[1] && a ? e(s.ctx.slice(), t[1](a(n))) : s.ctx;
  }
  function p(t, e, n, s) {
    if (t[2] && s) {
      const a = t[2](s(n));
      if (void 0 === e.dirty) return a;
      if ('object' == typeof a) {
        const t = [],
          n = Math.max(e.dirty.length, a.length);
        for (let s = 0; s < n; s += 1) t[s] = e.dirty[s] | a[s];
        return t;
      }
      return e.dirty | a;
    }
    return e.dirty;
  }
  function m(t, e, n, s, a, r) {
    if (a) {
      const l = g(e, n, s, r);
      t.p(l, a);
    }
  }
  function h(t) {
    if (t.ctx.length > 32) {
      const e = [],
        n = t.ctx.length / 32;
      for (let t = 0; t < n; t++) e[t] = -1;
      return e;
    }
    return -1;
  }
  function $(t) {
    const e = {};
    for (const n in t) '$' !== n[0] && (e[n] = t[n]);
    return e;
  }
  function v(t, e, n) {
    return t.set(n), e;
  }
  function b(e) {
    return e && r(e.destroy) ? e.destroy : t;
  }
  function x(t, e) {
    t.appendChild(e);
  }
  function w(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function y(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function k(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function z(t) {
    return document.createElement(t);
  }
  function C(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function M(t) {
    return document.createTextNode(t);
  }
  function T() {
    return M(' ');
  }
  function L() {
    return M('');
  }
  function H(t, e, n, s) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
  }
  function S(t) {
    return function (e) {
      return e.stopPropagation(), t.call(this, e);
    };
  }
  function B(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function N(t, e, n) {
    t.setAttributeNS('http://www.w3.org/1999/xlink', e, n);
  }
  function A(t) {
    return '' === t ? null : +t;
  }
  function E(t, e) {
    (e = '' + e), t.wholeText !== e && (t.data = e);
  }
  function j(t, e) {
    t.value = null == e ? '' : e;
  }
  function F(t, e, n, s) {
    null === n ? t.style.removeProperty(e) : t.style.setProperty(e, n, s ? 'important' : '');
  }
  function O(t, e) {
    for (let n = 0; n < t.options.length; n += 1) {
      const s = t.options[n];
      if (s.__value === e) return void (s.selected = !0);
    }
    t.selectedIndex = -1;
  }
  function V(t) {
    const e =
      t.querySelector(':checked') ||
      (function (t) {
        for (const e of t.options) if (!e.disabled) return e;
      })(t);
    return e && e.__value;
  }
  function I(t, e, n) {
    t.classList[n ? 'add' : 'remove'](e);
  }
  class D {
    constructor(t = !1) {
      (this.is_svg = !1), (this.is_svg = t), (this.e = this.n = null);
    }
    c(t) {
      this.h(t);
    }
    m(t, e, n = null) {
      this.e ||
        (this.is_svg ? (this.e = C(e.nodeName)) : (this.e = z(11 === e.nodeType ? 'TEMPLATE' : e.nodeName)),
        (this.t = 'TEMPLATE' !== e.tagName ? e : e.content),
        this.c(t)),
        this.i(n);
    }
    h(t) {
      (this.e.innerHTML = t),
        (this.n = Array.from('TEMPLATE' === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes));
    }
    i(t) {
      for (let e = 0; e < this.n.length; e += 1) w(this.t, this.n[e], t);
    }
    p(t) {
      this.d(), this.h(t), this.i(this.a);
    }
    d() {
      this.n.forEach(y);
    }
  }
  function _(t, e) {
    return new t(e);
  }
  function P(t) {
    o = t;
  }
  function q() {
    if (!o) throw new Error('Function called outside component initialization');
    return o;
  }
  function R(t) {
    q().$$.on_mount.push(t);
  }
  function W(t) {
    q().$$.after_update.push(t);
  }
  function G(t) {
    q().$$.on_destroy.push(t);
  }
  function U() {
    const t = q();
    return (e, n, { cancelable: s = !1 } = {}) => {
      const a = t.$$.callbacks[e];
      if (a) {
        const r = (function (t, e, { bubbles: n = !1, cancelable: s = !1 } = {}) {
          const a = document.createEvent('CustomEvent');
          return a.initCustomEvent(t, n, s, e), a;
        })(e, n, { cancelable: s });
        return (
          a.slice().forEach((e) => {
            e.call(t, r);
          }),
          !r.defaultPrevented
        );
      }
      return !0;
    };
  }
  function Z(t, e) {
    return q().$$.context.set(t, e), e;
  }
  function Y(t) {
    return q().$$.context.get(t);
  }
  function X(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach((t) => t.call(this, e));
  }
  const Q = [],
    K = [];
  let J = [];
  const tt = [],
    et = Promise.resolve();
  let nt = !1;
  function st() {
    nt || ((nt = !0), et.then(ot));
  }
  function at(t) {
    J.push(t);
  }
  function rt(t) {
    tt.push(t);
  }
  const lt = new Set();
  let it = 0;
  function ot() {
    if (0 !== it) return;
    const t = o;
    do {
      try {
        for (; it < Q.length; ) {
          const t = Q[it];
          it++, P(t), ct(t.$$);
        }
      } catch (t) {
        throw ((Q.length = 0), (it = 0), t);
      }
      for (P(null), Q.length = 0, it = 0; K.length; ) K.pop()();
      for (let t = 0; t < J.length; t += 1) {
        const e = J[t];
        lt.has(e) || (lt.add(e), e());
      }
      J.length = 0;
    } while (Q.length);
    for (; tt.length; ) tt.pop()();
    (nt = !1), lt.clear(), P(t);
  }
  function ct(t) {
    if (null !== t.fragment) {
      t.update(), a(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(at);
    }
  }
  const dt = new Set();
  let ut;
  function ft() {
    ut = { r: 0, c: [], p: ut };
  }
  function gt() {
    ut.r || a(ut.c), (ut = ut.p);
  }
  function pt(t, e) {
    t && t.i && (dt.delete(t), t.i(e));
  }
  function mt(t, e, n, s) {
    if (t && t.o) {
      if (dt.has(t)) return;
      dt.add(t),
        ut.c.push(() => {
          dt.delete(t), s && (n && t.d(1), s());
        }),
        t.o(e);
    } else s && s();
  }
  function ht(t, e) {
    const n = {},
      s = {},
      a = { $$scope: 1 };
    let r = t.length;
    for (; r--; ) {
      const l = t[r],
        i = e[r];
      if (i) {
        for (const t in l) t in i || (s[t] = 1);
        for (const t in i) a[t] || ((n[t] = i[t]), (a[t] = 1));
        t[r] = i;
      } else for (const t in l) a[t] = 1;
    }
    for (const t in s) t in n || (n[t] = void 0);
    return n;
  }
  function $t(t) {
    return 'object' == typeof t && null !== t ? t : {};
  }
  function vt(t, e, n) {
    const s = t.$$.props[e];
    void 0 !== s && ((t.$$.bound[s] = n), n(t.$$.ctx[s]));
  }
  function bt(t) {
    t && t.c();
  }
  function xt(t, e, s, l) {
    const { fragment: i, after_update: o } = t.$$;
    i && i.m(e, s),
      l ||
        at(() => {
          const e = t.$$.on_mount.map(n).filter(r);
          t.$$.on_destroy ? t.$$.on_destroy.push(...e) : a(e), (t.$$.on_mount = []);
        }),
      o.forEach(at);
  }
  function wt(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (!(function (t) {
        const e = [],
          n = [];
        J.forEach((s) => (-1 === t.indexOf(s) ? e.push(s) : n.push(s))), n.forEach((t) => t()), (J = e);
      })(n.after_update),
      a(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function yt(e, n, r, l, i, c, d, u = [-1]) {
    const f = o;
    P(e);
    const g = (e.$$ = {
      fragment: null,
      ctx: [],
      props: c,
      update: t,
      not_equal: i,
      bound: s(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(n.context || (f ? f.$$.context : [])),
      callbacks: s(),
      dirty: u,
      skip_bound: !1,
      root: n.target || f.$$.root,
    });
    d && d(g.root);
    let p = !1;
    if (
      ((g.ctx = r
        ? r(e, n.props || {}, (t, n, ...s) => {
            const a = s.length ? s[0] : n;
            return (
              g.ctx &&
                i(g.ctx[t], (g.ctx[t] = a)) &&
                (!g.skip_bound && g.bound[t] && g.bound[t](a),
                p &&
                  (function (t, e) {
                    -1 === t.$$.dirty[0] && (Q.push(t), st(), t.$$.dirty.fill(0)),
                      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                  })(e, t)),
              n
            );
          })
        : []),
      g.update(),
      (p = !0),
      a(g.before_update),
      (g.fragment = !!l && l(g.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        g.fragment && g.fragment.l(t), t.forEach(y);
      } else g.fragment && g.fragment.c();
      n.intro && pt(e.$$.fragment), xt(e, n.target, n.anchor, n.customElement), ot();
    }
    P(f);
  }
  class kt {
    $destroy() {
      wt(this, 1), (this.$destroy = t);
    }
    $on(e, n) {
      if (!r(n)) return t;
      const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        s.push(n),
        () => {
          const t = s.indexOf(n);
          -1 !== t && s.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const zt = [];
  function Ct(t, e) {
    return { subscribe: Mt(t, e).subscribe };
  }
  function Mt(e, n = t) {
    let s;
    const a = new Set();
    function r(t) {
      if (l(e, t) && ((e = t), s)) {
        const t = !zt.length;
        for (const t of a) t[1](), zt.push(t, e);
        if (t) {
          for (let t = 0; t < zt.length; t += 2) zt[t][0](zt[t + 1]);
          zt.length = 0;
        }
      }
    }
    return {
      set: r,
      update: function (t) {
        r(t(e));
      },
      subscribe: function (l, i = t) {
        const o = [l, i];
        return (
          a.add(o),
          1 === a.size && (s = n(r) || t),
          l(e),
          () => {
            a.delete(o), 0 === a.size && s && (s(), (s = null));
          }
        );
      },
    };
  }
  function Tt(e, n, s) {
    const l = !Array.isArray(e),
      i = l ? [e] : e,
      o = n.length < 2;
    return Ct(s, (e) => {
      let s = !1;
      const c = [];
      let u = 0,
        f = t;
      const g = () => {
          if (u) return;
          f();
          const s = n(l ? c[0] : c, e);
          o ? e(s) : (f = r(s) ? s : t);
        },
        p = i.map((t, e) =>
          d(
            t,
            (t) => {
              (c[e] = t), (u &= ~(1 << e)), s && g();
            },
            () => {
              u |= 1 << e;
            }
          )
        );
      return (
        (s = !0),
        g(),
        function () {
          a(p), f();
        }
      );
    });
  }
  function Lt(t) {
    let n, s, a;
    const r = [t[2]];
    var l = t[0];
    function i(t) {
      let n = {};
      for (let t = 0; t < r.length; t += 1) n = e(n, r[t]);
      return { props: n };
    }
    return (
      l && ((n = _(l, i())), n.$on('routeEvent', t[7])),
      {
        c() {
          n && bt(n.$$.fragment), (s = L());
        },
        m(t, e) {
          n && xt(n, t, e), w(t, s, e), (a = !0);
        },
        p(t, e) {
          const a = 4 & e ? ht(r, [$t(t[2])]) : {};
          if (1 & e && l !== (l = t[0])) {
            if (n) {
              ft();
              const t = n;
              mt(t.$$.fragment, 1, 0, () => {
                wt(t, 1);
              }),
                gt();
            }
            l
              ? ((n = _(l, i())),
                n.$on('routeEvent', t[7]),
                bt(n.$$.fragment),
                pt(n.$$.fragment, 1),
                xt(n, s.parentNode, s))
              : (n = null);
          } else l && n.$set(a);
        },
        i(t) {
          a || (n && pt(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          n && mt(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(s), n && wt(n, t);
        },
      }
    );
  }
  function Ht(t) {
    let n, s, a;
    const r = [{ params: t[1] }, t[2]];
    var l = t[0];
    function i(t) {
      let n = {};
      for (let t = 0; t < r.length; t += 1) n = e(n, r[t]);
      return { props: n };
    }
    return (
      l && ((n = _(l, i())), n.$on('routeEvent', t[6])),
      {
        c() {
          n && bt(n.$$.fragment), (s = L());
        },
        m(t, e) {
          n && xt(n, t, e), w(t, s, e), (a = !0);
        },
        p(t, e) {
          const a = 6 & e ? ht(r, [2 & e && { params: t[1] }, 4 & e && $t(t[2])]) : {};
          if (1 & e && l !== (l = t[0])) {
            if (n) {
              ft();
              const t = n;
              mt(t.$$.fragment, 1, 0, () => {
                wt(t, 1);
              }),
                gt();
            }
            l
              ? ((n = _(l, i())),
                n.$on('routeEvent', t[6]),
                bt(n.$$.fragment),
                pt(n.$$.fragment, 1),
                xt(n, s.parentNode, s))
              : (n = null);
          } else l && n.$set(a);
        },
        i(t) {
          a || (n && pt(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          n && mt(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(s), n && wt(n, t);
        },
      }
    );
  }
  function St(t) {
    let e, n, s, a;
    const r = [Ht, Lt],
      l = [];
    function i(t, e) {
      return t[1] ? 0 : 1;
    }
    return (
      (e = i(t)),
      (n = l[e] = r[e](t)),
      {
        c() {
          n.c(), (s = L());
        },
        m(t, n) {
          l[e].m(t, n), w(t, s, n), (a = !0);
        },
        p(t, [a]) {
          let o = e;
          (e = i(t)),
            e === o
              ? l[e].p(t, a)
              : (ft(),
                mt(l[o], 1, 1, () => {
                  l[o] = null;
                }),
                gt(),
                (n = l[e]),
                n ? n.p(t, a) : ((n = l[e] = r[e](t)), n.c()),
                pt(n, 1),
                n.m(s.parentNode, s));
        },
        i(t) {
          a || (pt(n), (a = !0));
        },
        o(t) {
          mt(n), (a = !1);
        },
        d(t) {
          l[e].d(t), t && y(s);
        },
      }
    );
  }
  function Bt() {
    const t = window.location.href.indexOf('#/');
    let e = t > -1 ? window.location.href.substr(t + 1) : '/';
    const n = e.indexOf('?');
    let s = '';
    return n > -1 && ((s = e.substr(n + 1)), (e = e.substr(0, n))), { location: e, querystring: s };
  }
  const Nt = Ct(null, function (t) {
      t(Bt());
      const e = () => {
        t(Bt());
      };
      return (
        window.addEventListener('hashchange', e, !1),
        function () {
          window.removeEventListener('hashchange', e, !1);
        }
      );
    }),
    At = Tt(Nt, (t) => t.location);
  Tt(Nt, (t) => t.querystring);
  const Et = Mt(void 0);
  function jt(t, e) {
    if (((e = Ot(e)), !t || !t.tagName || 'a' != t.tagName.toLowerCase()))
      throw Error('Action "link" can only be used with <a> tags');
    return (
      Ft(t, e),
      {
        update(e) {
          (e = Ot(e)), Ft(t, e);
        },
      }
    );
  }
  function Ft(t, e) {
    let n = e.href || t.getAttribute('href');
    if (n && '/' == n.charAt(0)) n = '#' + n;
    else if (!n || n.length < 2 || '#/' != n.slice(0, 2)) throw Error('Invalid value for "href" attribute: ' + n);
    t.setAttribute('href', n),
      t.addEventListener('click', (t) => {
        t.preventDefault(),
          e.disabled ||
            (function (t) {
              history.replaceState(
                {
                  ...history.state,
                  __svelte_spa_router_scrollX: window.scrollX,
                  __svelte_spa_router_scrollY: window.scrollY,
                },
                void 0
              ),
                (window.location.hash = t);
            })(t.currentTarget.getAttribute('href'));
      });
  }
  function Ot(t) {
    return t && 'string' == typeof t ? { href: t } : t || {};
  }
  function Vt(t, e, n) {
    let { routes: s = {} } = e,
      { prefix: a = '' } = e,
      { restoreScrollState: r = !1 } = e;
    class l {
      constructor(t, e) {
        if (!e || ('function' != typeof e && ('object' != typeof e || !0 !== e._sveltesparouter)))
          throw Error('Invalid component object');
        if (
          !t ||
          ('string' == typeof t && (t.length < 1 || ('/' != t.charAt(0) && '*' != t.charAt(0)))) ||
          ('object' == typeof t && !(t instanceof RegExp))
        )
          throw Error('Invalid value for "path" argument - strings must start with / or *');
        const { pattern: n, keys: s } = (function (t, e) {
          if (t instanceof RegExp) return { keys: !1, pattern: t };
          var n,
            s,
            a,
            r,
            l = [],
            i = '',
            o = t.split('/');
          for (o[0] || o.shift(); (a = o.shift()); )
            '*' === (n = a[0])
              ? (l.push('wild'), (i += '/(.*)'))
              : ':' === n
              ? ((s = a.indexOf('?', 1)),
                (r = a.indexOf('.', 1)),
                l.push(a.substring(1, ~s ? s : ~r ? r : a.length)),
                (i += ~s && !~r ? '(?:/([^/]+?))?' : '/([^/]+?)'),
                ~r && (i += (~s ? '?' : '') + '\\' + a.substring(r)))
              : (i += '/' + a);
          return { keys: l, pattern: new RegExp('^' + i + (e ? '(?=$|/)' : '/?$'), 'i') };
        })(t);
        (this.path = t),
          'object' == typeof e && !0 === e._sveltesparouter
            ? ((this.component = e.component),
              (this.conditions = e.conditions || []),
              (this.userData = e.userData),
              (this.props = e.props || {}))
            : ((this.component = () => Promise.resolve(e)), (this.conditions = []), (this.props = {})),
          (this._pattern = n),
          (this._keys = s);
      }
      match(t) {
        if (a)
          if ('string' == typeof a) {
            if (!t.startsWith(a)) return null;
            t = t.substr(a.length) || '/';
          } else if (a instanceof RegExp) {
            const e = t.match(a);
            if (!e || !e[0]) return null;
            t = t.substr(e[0].length) || '/';
          }
        const e = this._pattern.exec(t);
        if (null === e) return null;
        if (!1 === this._keys) return e;
        const n = {};
        let s = 0;
        for (; s < this._keys.length; ) {
          try {
            n[this._keys[s]] = decodeURIComponent(e[s + 1] || '') || null;
          } catch (t) {
            n[this._keys[s]] = null;
          }
          s++;
        }
        return n;
      }
      async checkConditions(t) {
        for (let e = 0; e < this.conditions.length; e++) if (!(await this.conditions[e](t))) return !1;
        return !0;
      }
    }
    const i = [];
    s instanceof Map
      ? s.forEach((t, e) => {
          i.push(new l(e, t));
        })
      : Object.keys(s).forEach((t) => {
          i.push(new l(t, s[t]));
        });
    let o = null,
      c = null,
      d = {};
    const u = U();
    async function f(t, e) {
      await (st(), et), u(t, e);
    }
    let g = null,
      p = null;
    r &&
      ((p = (t) => {
        g = t.state && (t.state.__svelte_spa_router_scrollY || t.state.__svelte_spa_router_scrollX) ? t.state : null;
      }),
      window.addEventListener('popstate', p),
      W(() => {
        var t;
        (t = g) ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }));
    let m = null,
      h = null;
    const $ = Nt.subscribe(async (t) => {
      m = t;
      let e = 0;
      for (; e < i.length; ) {
        const s = i[e].match(t.location);
        if (!s) {
          e++;
          continue;
        }
        const a = {
          route: i[e].path,
          location: t.location,
          querystring: t.querystring,
          userData: i[e].userData,
          params: s && 'object' == typeof s && Object.keys(s).length ? s : null,
        };
        if (!(await i[e].checkConditions(a))) return n(0, (o = null)), (h = null), void f('conditionsFailed', a);
        f('routeLoading', Object.assign({}, a));
        const r = i[e].component;
        if (h != r) {
          r.loading
            ? (n(0, (o = r.loading)),
              (h = r),
              n(1, (c = r.loadingParams)),
              n(2, (d = {})),
              f('routeLoaded', Object.assign({}, a, { component: o, name: o.name, params: c })))
            : (n(0, (o = null)), (h = null));
          const e = await r();
          if (t != m) return;
          n(0, (o = (e && e.default) || e)), (h = r);
        }
        return (
          s && 'object' == typeof s && Object.keys(s).length ? n(1, (c = s)) : n(1, (c = null)),
          n(2, (d = i[e].props)),
          void f('routeLoaded', Object.assign({}, a, { component: o, name: o.name, params: c })).then(() => {
            Et.set(c);
          })
        );
      }
      n(0, (o = null)), (h = null), Et.set(void 0);
    });
    return (
      G(() => {
        $(), p && window.removeEventListener('popstate', p);
      }),
      (t.$$set = (t) => {
        'routes' in t && n(3, (s = t.routes)),
          'prefix' in t && n(4, (a = t.prefix)),
          'restoreScrollState' in t && n(5, (r = t.restoreScrollState));
      }),
      (t.$$.update = () => {
        32 & t.$$.dirty && (history.scrollRestoration = r ? 'manual' : 'auto');
      }),
      [
        o,
        c,
        d,
        s,
        a,
        r,
        function (e) {
          X.call(this, t, e);
        },
        function (e) {
          X.call(this, t, e);
        },
      ]
    );
  }
  class It extends kt {
    constructor(t) {
      super(), yt(this, t, Vt, St, l, { routes: 3, prefix: 4, restoreScrollState: 5 });
    }
  }
  'undefined' != typeof window &&
    (window.Prism &&
      console.warn('Prism has already been initiated. Please ensure that svelte-prism is imported first.'),
    (window.Prism = window.Prism || {}),
    (window.Prism.manual = !0));
  var Dt =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    _t = {};
  !(function (t) {
    var e = (function (t) {
      var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
        n = 0,
        s = {},
        a = {
          manual: t.Prism && t.Prism.manual,
          disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
          util: {
            encode: function t(e) {
              return e instanceof r
                ? new r(e.type, t(e.content), e.alias)
                : Array.isArray(e)
                ? e.map(t)
                : e
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/\u00a0/g, ' ');
            },
            type: function (t) {
              return Object.prototype.toString.call(t).slice(8, -1);
            },
            objId: function (t) {
              return t.__id || Object.defineProperty(t, '__id', { value: ++n }), t.__id;
            },
            clone: function t(e, n) {
              var s, r;
              switch (((n = n || {}), a.util.type(e))) {
                case 'Object':
                  if (((r = a.util.objId(e)), n[r])) return n[r];
                  for (var l in ((s = {}), (n[r] = s), e)) e.hasOwnProperty(l) && (s[l] = t(e[l], n));
                  return s;
                case 'Array':
                  return (
                    (r = a.util.objId(e)),
                    n[r]
                      ? n[r]
                      : ((s = []),
                        (n[r] = s),
                        e.forEach(function (e, a) {
                          s[a] = t(e, n);
                        }),
                        s)
                  );
                default:
                  return e;
              }
            },
            getLanguage: function (t) {
              for (; t; ) {
                var n = e.exec(t.className);
                if (n) return n[1].toLowerCase();
                t = t.parentElement;
              }
              return 'none';
            },
            setLanguage: function (t, n) {
              (t.className = t.className.replace(RegExp(e, 'gi'), '')), t.classList.add('language-' + n);
            },
            currentScript: function () {
              if ('undefined' == typeof document) return null;
              if ('currentScript' in document) return document.currentScript;
              try {
                throw new Error();
              } catch (s) {
                var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) || [])[1];
                if (t) {
                  var e = document.getElementsByTagName('script');
                  for (var n in e) if (e[n].src == t) return e[n];
                }
                return null;
              }
            },
            isActive: function (t, e, n) {
              for (var s = 'no-' + e; t; ) {
                var a = t.classList;
                if (a.contains(e)) return !0;
                if (a.contains(s)) return !1;
                t = t.parentElement;
              }
              return !!n;
            },
          },
          languages: {
            plain: s,
            plaintext: s,
            text: s,
            txt: s,
            extend: function (t, e) {
              var n = a.util.clone(a.languages[t]);
              for (var s in e) n[s] = e[s];
              return n;
            },
            insertBefore: function (t, e, n, s) {
              var r = (s = s || a.languages)[t],
                l = {};
              for (var i in r)
                if (r.hasOwnProperty(i)) {
                  if (i == e) for (var o in n) n.hasOwnProperty(o) && (l[o] = n[o]);
                  n.hasOwnProperty(i) || (l[i] = r[i]);
                }
              var c = s[t];
              return (
                (s[t] = l),
                a.languages.DFS(a.languages, function (e, n) {
                  n === c && e != t && (this[e] = l);
                }),
                l
              );
            },
            DFS: function t(e, n, s, r) {
              r = r || {};
              var l = a.util.objId;
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  n.call(e, i, e[i], s || i);
                  var o = e[i],
                    c = a.util.type(o);
                  'Object' !== c || r[l(o)]
                    ? 'Array' !== c || r[l(o)] || ((r[l(o)] = !0), t(o, n, i, r))
                    : ((r[l(o)] = !0), t(o, n, null, r));
                }
            },
          },
          plugins: {},
          highlightAll: function (t, e) {
            a.highlightAllUnder(document, t, e);
          },
          highlightAllUnder: function (t, e, n) {
            var s = {
              callback: n,
              container: t,
              selector:
                'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
            };
            a.hooks.run('before-highlightall', s),
              (s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector))),
              a.hooks.run('before-all-elements-highlight', s);
            for (var r, l = 0; (r = s.elements[l++]); ) a.highlightElement(r, !0 === e, s.callback);
          },
          highlightElement: function (e, n, s) {
            var r = a.util.getLanguage(e),
              l = a.languages[r];
            a.util.setLanguage(e, r);
            var i = e.parentElement;
            i && 'pre' === i.nodeName.toLowerCase() && a.util.setLanguage(i, r);
            var o = { element: e, language: r, grammar: l, code: e.textContent };
            function c(t) {
              (o.highlightedCode = t),
                a.hooks.run('before-insert', o),
                (o.element.innerHTML = o.highlightedCode),
                a.hooks.run('after-highlight', o),
                a.hooks.run('complete', o),
                s && s.call(o.element);
            }
            if (
              (a.hooks.run('before-sanity-check', o),
              (i = o.element.parentElement) &&
                'pre' === i.nodeName.toLowerCase() &&
                !i.hasAttribute('tabindex') &&
                i.setAttribute('tabindex', '0'),
              !o.code)
            )
              return a.hooks.run('complete', o), void (s && s.call(o.element));
            if ((a.hooks.run('before-highlight', o), o.grammar))
              if (n && t.Worker) {
                var d = new Worker(a.filename);
                (d.onmessage = function (t) {
                  c(t.data);
                }),
                  d.postMessage(JSON.stringify({ language: o.language, code: o.code, immediateClose: !0 }));
              } else c(a.highlight(o.code, o.grammar, o.language));
            else c(a.util.encode(o.code));
          },
          highlight: function (t, e, n) {
            var s = { code: t, grammar: e, language: n };
            if ((a.hooks.run('before-tokenize', s), !s.grammar))
              throw new Error('The language "' + s.language + '" has no grammar.');
            return (
              (s.tokens = a.tokenize(s.code, s.grammar)),
              a.hooks.run('after-tokenize', s),
              r.stringify(a.util.encode(s.tokens), s.language)
            );
          },
          tokenize: function (t, e) {
            var n = e.rest;
            if (n) {
              for (var s in n) e[s] = n[s];
              delete e.rest;
            }
            var a = new o();
            return (
              c(a, a.head, t),
              i(t, a, e, a.head, 0),
              (function (t) {
                var e = [],
                  n = t.head.next;
                for (; n !== t.tail; ) e.push(n.value), (n = n.next);
                return e;
              })(a)
            );
          },
          hooks: {
            all: {},
            add: function (t, e) {
              var n = a.hooks.all;
              (n[t] = n[t] || []), n[t].push(e);
            },
            run: function (t, e) {
              var n = a.hooks.all[t];
              if (n && n.length) for (var s, r = 0; (s = n[r++]); ) s(e);
            },
          },
          Token: r,
        };
      function r(t, e, n, s) {
        (this.type = t), (this.content = e), (this.alias = n), (this.length = 0 | (s || '').length);
      }
      function l(t, e, n, s) {
        t.lastIndex = e;
        var a = t.exec(n);
        if (a && s && a[1]) {
          var r = a[1].length;
          (a.index += r), (a[0] = a[0].slice(r));
        }
        return a;
      }
      function i(t, e, n, s, o, u) {
        for (var f in n)
          if (n.hasOwnProperty(f) && n[f]) {
            var g = n[f];
            g = Array.isArray(g) ? g : [g];
            for (var p = 0; p < g.length; ++p) {
              if (u && u.cause == f + ',' + p) return;
              var m = g[p],
                h = m.inside,
                $ = !!m.lookbehind,
                v = !!m.greedy,
                b = m.alias;
              if (v && !m.pattern.global) {
                var x = m.pattern.toString().match(/[imsuy]*$/)[0];
                m.pattern = RegExp(m.pattern.source, x + 'g');
              }
              for (
                var w = m.pattern || m, y = s.next, k = o;
                y !== e.tail && !(u && k >= u.reach);
                k += y.value.length, y = y.next
              ) {
                var z = y.value;
                if (e.length > t.length) return;
                if (!(z instanceof r)) {
                  var C,
                    M = 1;
                  if (v) {
                    if (!(C = l(w, k, t, $)) || C.index >= t.length) break;
                    var T = C.index,
                      L = C.index + C[0].length,
                      H = k;
                    for (H += y.value.length; T >= H; ) H += (y = y.next).value.length;
                    if (((k = H -= y.value.length), y.value instanceof r)) continue;
                    for (var S = y; S !== e.tail && (H < L || 'string' == typeof S.value); S = S.next)
                      M++, (H += S.value.length);
                    M--, (z = t.slice(k, H)), (C.index -= k);
                  } else if (!(C = l(w, 0, z, $))) continue;
                  T = C.index;
                  var B = C[0],
                    N = z.slice(0, T),
                    A = z.slice(T + B.length),
                    E = k + z.length;
                  u && E > u.reach && (u.reach = E);
                  var j = y.prev;
                  if (
                    (N && ((j = c(e, j, N)), (k += N.length)),
                    d(e, j, M),
                    (y = c(e, j, new r(f, h ? a.tokenize(B, h) : B, b, B))),
                    A && c(e, y, A),
                    M > 1)
                  ) {
                    var F = { cause: f + ',' + p, reach: E };
                    i(t, e, n, y.prev, k, F), u && F.reach > u.reach && (u.reach = F.reach);
                  }
                }
              }
            }
          }
      }
      function o() {
        var t = { value: null, prev: null, next: null },
          e = { value: null, prev: t, next: null };
        (t.next = e), (this.head = t), (this.tail = e), (this.length = 0);
      }
      function c(t, e, n) {
        var s = e.next,
          a = { value: n, prev: e, next: s };
        return (e.next = a), (s.prev = a), t.length++, a;
      }
      function d(t, e, n) {
        for (var s = e.next, a = 0; a < n && s !== t.tail; a++) s = s.next;
        (e.next = s), (s.prev = e), (t.length -= a);
      }
      if (
        ((t.Prism = a),
        (r.stringify = function t(e, n) {
          if ('string' == typeof e) return e;
          if (Array.isArray(e)) {
            var s = '';
            return (
              e.forEach(function (e) {
                s += t(e, n);
              }),
              s
            );
          }
          var r = {
              type: e.type,
              content: t(e.content, n),
              tag: 'span',
              classes: ['token', e.type],
              attributes: {},
              language: n,
            },
            l = e.alias;
          l && (Array.isArray(l) ? Array.prototype.push.apply(r.classes, l) : r.classes.push(l)),
            a.hooks.run('wrap', r);
          var i = '';
          for (var o in r.attributes) i += ' ' + o + '="' + (r.attributes[o] || '').replace(/"/g, '&quot;') + '"';
          return '<' + r.tag + ' class="' + r.classes.join(' ') + '"' + i + '>' + r.content + '</' + r.tag + '>';
        }),
        !t.document)
      )
        return t.addEventListener
          ? (a.disableWorkerMessageHandler ||
              t.addEventListener(
                'message',
                function (e) {
                  var n = JSON.parse(e.data),
                    s = n.language,
                    r = n.code,
                    l = n.immediateClose;
                  t.postMessage(a.highlight(r, a.languages[s], s)), l && t.close();
                },
                !1
              ),
            a)
          : a;
      var u = a.util.currentScript();
      function f() {
        a.manual || a.highlightAll();
      }
      if ((u && ((a.filename = u.src), u.hasAttribute('data-manual') && (a.manual = !0)), !a.manual)) {
        var g = document.readyState;
        'loading' === g || ('interactive' === g && u && u.defer)
          ? document.addEventListener('DOMContentLoaded', f)
          : window.requestAnimationFrame
          ? window.requestAnimationFrame(f)
          : window.setTimeout(f, 16);
      }
      return a;
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
     */ t.exports && (t.exports = e),
      void 0 !== Dt && (Dt.Prism = e),
      (e.languages.markup = {
        comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
        prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
            'special-attr': [],
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [
                  { pattern: /^=/, alias: 'attr-equals' },
                  { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                ],
              },
            },
            punctuation: /\/?>/,
            'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
          },
        },
        entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
      }),
      (e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity),
      (e.languages.markup.doctype.inside['internal-subset'].inside = e.languages.markup),
      e.hooks.add('wrap', function (t) {
        'entity' === t.type && (t.attributes.title = t.content.replace(/&amp;/, '&'));
      }),
      Object.defineProperty(e.languages.markup.tag, 'addInlined', {
        value: function (t, n) {
          var s = {};
          (s['language-' + n] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: e.languages[n],
          }),
            (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
          var a = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
          a['language-' + n] = { pattern: /[\s\S]+/, inside: e.languages[n] };
          var r = {};
          (r[t] = {
            pattern: RegExp(
              /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                /__/g,
                function () {
                  return t;
                }
              ),
              'i'
            ),
            lookbehind: !0,
            greedy: !0,
            inside: a,
          }),
            e.languages.insertBefore('markup', 'cdata', r);
        },
      }),
      Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
        value: function (t, n) {
          e.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(
              /(^|["'\s])/.source + '(?:' + t + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              'i'
            ),
            lookbehind: !0,
            inside: {
              'attr-name': /^[^\s=]+/,
              'attr-value': {
                pattern: /=[\s\S]+/,
                inside: {
                  value: {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: !0,
                    alias: [n, 'language-' + n],
                    inside: e.languages[n],
                  },
                  punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                },
              },
            },
          });
        },
      }),
      (e.languages.html = e.languages.markup),
      (e.languages.mathml = e.languages.markup),
      (e.languages.svg = e.languages.markup),
      (e.languages.xml = e.languages.extend('markup', {})),
      (e.languages.ssml = e.languages.xml),
      (e.languages.atom = e.languages.xml),
      (e.languages.rss = e.languages.xml),
      (function (t) {
        var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        (t.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: RegExp(
              '@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + e.source + ')*?' + /(?:;|(?=\s*\{))/.source
            ),
            inside: {
              rule: /^@[\w-]+/,
              'selector-function-argument': {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: 'selector',
              },
              keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
            },
          },
          url: {
            pattern: RegExp('\\burl\\((?:' + e.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
            },
          },
          selector: {
            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + e.source + ')*(?=\\s*\\{)'),
            lookbehind: !0,
          },
          string: { pattern: e, greedy: !0 },
          property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
          punctuation: /[(){};:,]/,
        }),
          (t.languages.css.atrule.inside.rest = t.languages.css);
        var n = t.languages.markup;
        n && (n.tag.addInlined('style', 'css'), n.tag.addAttribute('style', 'css'));
      })(e),
      (e.languages.clike = {
        comment: [
          { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        'class-name': {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /[.\\]/ },
        },
        keyword:
          /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/,
      }),
      (e.languages.javascript = e.languages.extend('clike', {
        'class-name': [
          e.languages.clike['class-name'],
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0,
          },
        ],
        keyword: [
          { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
          {
            pattern:
              /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
          },
        ],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
          pattern: RegExp(
            /(^|[^\w$])/.source +
              '(?:' +
              /NaN|Infinity/.source +
              '|' +
              /0[bB][01]+(?:_[01]+)*n?/.source +
              '|' +
              /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
              '|' +
              /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
              '|' +
              /\d+(?:_\d+)*n/.source +
              '|' +
              /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
              ')' +
              /(?![\w$])/.source
          ),
          lookbehind: !0,
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
      })),
      (e.languages.javascript['class-name'][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
      e.languages.insertBefore('javascript', 'keyword', {
        regex: {
          pattern: RegExp(
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
              /\//.source +
              '(?:' +
              /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
              '|' +
              /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                .source +
              ')' +
              /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            'regex-source': {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: !0,
              alias: 'language-regex',
              inside: e.languages.regex,
            },
            'regex-delimiter': /^\/|\/$/,
            'regex-flags': /^[a-z]+$/,
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
            inside: e.languages.javascript,
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: e.languages.javascript,
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: e.languages.javascript,
          },
          {
            pattern:
              /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: e.languages.javascript,
          },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
      }),
      e.languages.insertBefore('javascript', 'string', {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
        'template-string': {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: !0,
          inside: {
            'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: !0,
              inside: {
                'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                rest: e.languages.javascript,
              },
            },
            string: /[\s\S]+/,
          },
        },
        'string-property': {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: !0,
          greedy: !0,
          alias: 'property',
        },
      }),
      e.languages.insertBefore('javascript', 'operator', {
        'literal-property': {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: !0,
          alias: 'property',
        },
      }),
      e.languages.markup &&
        (e.languages.markup.tag.addInlined('script', 'javascript'),
        e.languages.markup.tag.addAttribute(
          /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
            .source,
          'javascript'
        )),
      (e.languages.js = e.languages.javascript),
      (function () {
        if (void 0 !== e && 'undefined' != typeof document) {
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
          var t = function (t, e) {
              return '✖ Error ' + t + ' while fetching file: ' + e;
            },
            n = '✖ Error: File does not exist or is empty',
            s = {
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
            a = 'data-src-status',
            r = 'loading',
            l = 'loaded',
            i = 'pre[data-src]:not([' + a + '="' + l + '"]):not([' + a + '="' + r + '"])';
          e.hooks.add('before-highlightall', function (t) {
            t.selector += ', ' + i;
          }),
            e.hooks.add('before-sanity-check', function (o) {
              var c = o.element;
              if (c.matches(i)) {
                (o.code = ''), c.setAttribute(a, r);
                var d = c.appendChild(document.createElement('CODE'));
                d.textContent = 'Loading…';
                var u = c.getAttribute('data-src'),
                  f = o.language;
                if ('none' === f) {
                  var g = (/\.(\w+)$/.exec(u) || [, 'none'])[1];
                  f = s[g] || g;
                }
                e.util.setLanguage(d, f), e.util.setLanguage(c, f);
                var p = e.plugins.autoloader;
                p && p.loadLanguages(f),
                  (function (e, s, a) {
                    var r = new XMLHttpRequest();
                    r.open('GET', e, !0),
                      (r.onreadystatechange = function () {
                        4 == r.readyState &&
                          (r.status < 400 && r.responseText
                            ? s(r.responseText)
                            : r.status >= 400
                            ? a(t(r.status, r.statusText))
                            : a(n));
                      }),
                      r.send(null);
                  })(
                    u,
                    function (t) {
                      c.setAttribute(a, l);
                      var n = (function (t) {
                        var e = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t || '');
                        if (e) {
                          var n = Number(e[1]),
                            s = e[2],
                            a = e[3];
                          return s ? (a ? [n, Number(a)] : [n, void 0]) : [n, n];
                        }
                      })(c.getAttribute('data-range'));
                      if (n) {
                        var s = t.split(/\r\n?|\n/g),
                          r = n[0],
                          i = null == n[1] ? s.length : n[1];
                        r < 0 && (r += s.length),
                          (r = Math.max(0, Math.min(r - 1, s.length))),
                          i < 0 && (i += s.length),
                          (i = Math.max(0, Math.min(i, s.length))),
                          (t = s.slice(r, i).join('\n')),
                          c.hasAttribute('data-start') || c.setAttribute('data-start', String(r + 1));
                      }
                      (d.textContent = t), e.highlightElement(d);
                    },
                    function (t) {
                      c.setAttribute(a, 'failed'), (d.textContent = t);
                    }
                  );
              }
            }),
            (e.plugins.fileHighlight = {
              highlight: function (t) {
                for (var n, s = (t || document).querySelectorAll(i), a = 0; (n = s[a++]); ) e.highlightElement(n);
              },
            });
          var o = !1;
          e.fileHighlight = function () {
            o ||
              (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'),
              (o = !0)),
              e.plugins.fileHighlight.highlight.apply(this, arguments);
          };
        }
      })();
  })({
    get exports() {
      return _t;
    },
    set exports(t) {
      _t = t;
    },
  });
  var Pt = _t;
  const qt = '(if|else if|await|then|catch|each|html|debug)';
  function Rt(t) {
    let e, n;
    return {
      c() {
        (e = new D(!1)), (n = L()), (e.a = n);
      },
      m(s, a) {
        e.m(t[2], s, a), w(s, n, a);
      },
      p(t, n) {
        4 & n && e.p(t[2]);
      },
      d(t) {
        t && y(n), t && e.d();
      },
    };
  }
  function Wt(t) {
    let e;
    return {
      c() {
        e = M(t[2]);
      },
      m(t, n) {
        w(t, e, n);
      },
      p(t, n) {
        4 & n && E(e, t[2]);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function Gt(t) {
    let e, n, s, a, r, l, i;
    const o = t[6].default,
      c = f(o, t, t[5], null);
    function d(t, e) {
      return 'none' === t[0] ? Wt : Rt;
    }
    let u = d(t),
      g = u(t);
    return {
      c() {
        (e = z('code')),
          c && c.c(),
          (n = T()),
          (s = z('pre')),
          (a = z('code')),
          g.c(),
          F(e, 'display', 'none'),
          B(a, 'class', (r = 'language-' + t[0])),
          B(s, 'class', (l = 'language-' + t[0])),
          B(s, 'command-line', ''),
          B(s, 'data-output', '2-17');
      },
      m(r, l) {
        w(r, e, l), c && c.m(e, null), t[7](e), w(r, n, l), w(r, s, l), x(s, a), g.m(a, null), (i = !0);
      },
      p(t, [e]) {
        c && c.p && (!i || 32 & e) && m(c, o, t, t[5], i ? p(o, t[5], e, null) : h(t[5]), null),
          u === (u = d(t)) && g ? g.p(t, e) : (g.d(1), (g = u(t)), g && (g.c(), g.m(a, null))),
          (!i || (1 & e && r !== (r = 'language-' + t[0]))) && B(a, 'class', r),
          (!i || (1 & e && l !== (l = 'language-' + t[0]))) && B(s, 'class', l);
      },
      i(t) {
        i || (pt(c, t), (i = !0));
      },
      o(t) {
        mt(c, t), (i = !1);
      },
      d(a) {
        a && y(e), c && c.d(a), t[7](null), a && y(n), a && y(s), g.d();
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
      pattern: new RegExp('{[#:/@]/s' + qt + '(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'),
      inside: {
        punctuation: /^{|}$/,
        keyword: [new RegExp('[#:/@]' + qt + '( )*'), /as/, /then/],
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
    Prism.hooks.add('wrap', (t) => {
      'entity' === t.type && (t.attributes.title = t.content.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(Prism.languages.svelte.tag, 'addInlined', {
      value: function (t, e) {
        const n = {};
        (n['language-' + e] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: Prism.languages[e],
        }),
          (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
        const s = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
        s['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
        const a = {};
        (a[t] = {
          pattern: RegExp(
            /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, t),
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
  const Ut = Pt;
  Pt.highlightElement;
  const Zt = { transform: (t) => t };
  function Yt(t, n, s) {
    let a,
      r,
      { $$slots: l = {}, $$scope: i } = n,
      { language: o = 'javascript' } = n,
      { source: c = '' } = n,
      { transform: d = (t) => t } = n;
    return (
      (t.$$set = (t) => {
        s(9, (n = e(e({}, n), $(t)))),
          'language' in t && s(0, (o = t.language)),
          'source' in t && s(3, (c = t.source)),
          'transform' in t && s(4, (d = t.transform)),
          '$$scope' in t && s(5, (i = t.$$scope));
      }),
      (t.$$.update = () => {
        n &&
          (c || a) &&
          (function () {
            const t = Ut.languages[o];
            let e = c || a.textContent;
            (e = Zt.transform(e)), (e = d(e)), s(2, (r = 'none' === o ? e : Ut.highlight(e, t, o)));
          })();
      }),
      (n = $(n)),
      [
        o,
        a,
        r,
        c,
        d,
        i,
        l,
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (a = t), s(1, a);
          });
        },
      ]
    );
  }
  let Xt = class extends kt {
    constructor(t) {
      super(), yt(this, t, Yt, Gt, l, { language: 0, source: 3, transform: 4 });
    }
  };
  function Qt(t) {
    let e, n, s;
    return {
      c() {
        (e = C('svg')),
          (n = C('use')),
          N(n, 'xlink:href', (s = '#' + t[0])),
          B(e, 'style', t[1]),
          B(e, 'class', t[2]),
          B(e, 'viewBox', '0 0 14 14');
      },
      m(t, s) {
        w(t, e, s), x(e, n);
      },
      p(t, a) {
        1 & a && s !== (s = '#' + t[0]) && N(n, 'xlink:href', s), 2 & a && B(e, 'style', t[1]);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function Kt(e) {
    let n,
      s = e[0] && Qt(e);
    return {
      c() {
        s && s.c(), (n = L());
      },
      m(t, e) {
        s && s.m(t, e), w(t, n, e);
      },
      p(t, [e]) {
        t[0] ? (s ? s.p(t, e) : ((s = Qt(t)), s.c(), s.m(n.parentNode, n))) : s && (s.d(1), (s = null));
      },
      i: t,
      o: t,
      d(t) {
        s && s.d(t), t && y(n);
      },
    };
  }
  function Jt(t, e, n) {
    let s,
      a,
      { className: r } = e,
      { name: l } = e,
      { width: i } = e,
      { style: o } = e;
    const c = r ? `icon-svg ${r}` : 'icon-svg';
    return (
      (t.$$set = (t) => {
        'className' in t && n(3, (r = t.className)),
          'name' in t && n(0, (l = t.name)),
          'width' in t && n(4, (i = t.width)),
          'style' in t && n(5, (o = t.style));
      }),
      (t.$$.update = () => {
        16 & t.$$.dirty && n(6, (s = i ? `--icon-size: ${i}px;` : '')),
          96 & t.$$.dirty && n(1, (a = o ? `${s} ${o}` : s));
      }),
      [l, a, c, r, i, o, s]
    );
  }
  class te extends kt {
    constructor(t) {
      super(), yt(this, t, Jt, Kt, l, { className: 3, name: 0, width: 4, style: 5 });
    }
  }
  function ee(t, e, n) {
    const s = t.slice();
    return (s[7] = e[n]), (s[9] = n), s;
  }
  function ne(t) {
    let e,
      n,
      s,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m = t[7].title + '',
      h = t[7].content + '';
    function $(...e) {
      return t[5](t[9], ...e);
    }
    function v(...e) {
      return t[6](t[9], ...e);
    }
    return (
      (i = new te({ props: { name: 'angle-down', width: '14' } })),
      {
        c() {
          (e = z('div')),
            (n = z('div')),
            (s = z('span')),
            (r = M(m)),
            (l = T()),
            bt(i.$$.fragment),
            (c = T()),
            (d = z('div')),
            (u = T()),
            B(s, 'class', 'fontweight-bold fontsize-medium'),
            B(n, 'class', 'accordion-header flex flex-justify--between flex-align--center padding-m'),
            B(n, 'role', 'button'),
            B(n, 'tabindex', 0),
            B(n, 'aria-label', (o = t[7].title)),
            B(d, 'class', 'accordion-body padding-m padding-l--rl'),
            B(e, 'class', 'accordion-tab margin-m--b'),
            I(e, 'accordion-expanded', t[3] === t[9]);
        },
        m(t, a) {
          w(t, e, a),
            x(e, n),
            x(n, s),
            x(s, r),
            x(n, l),
            xt(i, n, null),
            x(e, c),
            x(e, d),
            (d.innerHTML = h),
            x(e, u),
            (f = !0),
            g || ((p = [H(n, 'click', $), H(n, 'keydown', v)]), (g = !0));
        },
        p(s, a) {
          (t = s),
            (!f || 4 & a) && m !== (m = t[7].title + '') && E(r, m),
            (!f || (4 & a && o !== (o = t[7].title))) && B(n, 'aria-label', o),
            (!f || 4 & a) && h !== (h = t[7].content + '') && (d.innerHTML = h),
            (!f || 8 & a) && I(e, 'accordion-expanded', t[3] === t[9]);
        },
        i(t) {
          f || (pt(i.$$.fragment, t), (f = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), (f = !1);
        },
        d(t) {
          t && y(e), wt(i), (g = !1), a(p);
        },
      }
    );
  }
  function se(t) {
    let e,
      n,
      s = t[2],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = ne(ee(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        e = z('div');
        for (let t = 0; t < a.length; t += 1) a[t].c();
        B(e, 'data-theme', t[1]), B(e, 'class', 'accordion card-mode padding-l ff-secondary width-1of1');
      },
      m(t, s) {
        w(t, e, s);
        for (let t = 0; t < a.length; t += 1) a[t] && a[t].m(e, null);
        n = !0;
      },
      p(t, [l]) {
        if (28 & l) {
          let n;
          for (s = t[2], n = 0; n < s.length; n += 1) {
            const r = ee(t, s, n);
            a[n] ? (a[n].p(r, l), pt(a[n], 1)) : ((a[n] = ne(r)), a[n].c(), pt(a[n], 1), a[n].m(e, null));
          }
          for (ft(), n = s.length; n < a.length; n += 1) r(n);
          gt();
        }
        (!n || 2 & l) && B(e, 'data-theme', t[1]);
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        t && y(e), k(a, t);
      },
    };
  }
  function ae(e, n, s) {
    let a,
      r = t;
    function l(t, e) {
      t.stopPropagation(), v(i, (a = a !== e ? e : void 0), a);
    }
    e.$$.on_destroy.push(() => r());
    const i = Mt(void 0);
    r(), (r = d(i, (t) => s(3, (a = t))));
    let { dataTheme: o } = n,
      { tabs: c } = n;
    return (
      (e.$$set = (t) => {
        'dataTheme' in t && s(1, (o = t.dataTheme)), 'tabs' in t && s(2, (c = t.tabs));
      }),
      [i, o, c, a, l, (t, e) => l(e, t), (t, e) => l(e, t)]
    );
  }
  class re extends kt {
    constructor(t) {
      super(), yt(this, t, ae, se, l, { activeTab: 0, dataTheme: 1, tabs: 2 });
    }
    get activeTab() {
      return this.$$.ctx[0];
    }
  }
  var le = (ie = void 0),
    ie = {
      bordeaux: { background: '#8a0c36', color: '#fff' },
      reddark: { background: '#900', color: '#fff' },
      red: { background: '#bd1118', color: '#fff' },
      pink: { background: '#b31e61', color: '#fff' },
      rose: { background: '#dc7095', color: '#fff' },
      orangedark: { background: '#e96c0d', color: '#fff' },
      orange: { background: '#e5ad02', color: '#fff' },
      yellow: { background: '#fae500', color: '#000' },
      yellowlight: { background: '#ff0', color: '#000' },
      sand: { background: '#cec4a6', color: '#fff' },
      greendark: { background: '#2f7820', color: '#fff' },
      green: { background: '#029e5d', color: '#fff' },
      greenlight: { background: '#93b923', color: '#fff' },
      lime: { background: '#cbfe33', color: '#000' },
      purpledark: { background: '#51208c', color: '#fff' },
      bluenavy: { background: '#1a237e', color: '#fff' },
      bluedark: { background: '#1058c2', color: '#fff' },
      blue: { background: '#31769b', color: '#fff' },
      bluelight: { background: '#4fa8df', color: '#fff' },
      cyan: { background: '#00b6d2', color: '#fff' },
      sea: { background: '#84a8c4', color: '#fff' },
      black: { background: '#000', color: '#fff' },
      graa0: { background: '#1b1b1b', color: '#efefef' },
      graa1: { background: '#3c3c3c', color: '#fff' },
      graa2: { background: '#484848', color: '#fff' },
      graa3: { background: '#999', color: '#fff' },
      graa4: { background: '#c8c8c8', color: '#000' },
      graa5: { background: '#ddd', color: '#000' },
      graa6: { background: '#e5e5e5', color: '#000' },
      graa7: { background: '#efefef', color: '#000' },
      white: { background: '#fff', color: '#000' },
      pastelred: { background: '#db5040', color: '#fff' },
      pasteldarkred: { background: '#954839', color: '#fff' },
      pastellightred: { background: '#d67e9b', color: '#fff' },
      pastelgreen: { background: '#9fc29c', color: '#fff' },
      pasteldarkgreen: { background: '#91a34f', color: '#fff' },
      pastelyellow: { background: '#d4c564', color: '#fff' },
      eb: { background: '#bd1118', color: '#fff' },
      eb2: { background: '#900', color: '#fff' },
      breaking: { background: '#ff0', color: '#000' },
      bruger: { background: '#4fa8df', color: '#fff' },
      live: { background: '#000', color: '#fff' },
      native: { background: '#cec4a6', color: '#fff' },
      native2: { background: '#84a8c4', color: '#fff' },
      facebook: { background: '#31769b', color: '#fff' },
      twitter: { background: '#4fa8df', color: '#fff' },
      flash: { background: '#e5ad02', color: '#fff' },
      forbrug: { background: '#00b6d2', color: '#fff' },
      leder: { background: '#1a237e', color: '#fff' },
      livescore: { background: '#029e5d', color: '#fff' },
      livescore2: { background: '#cbfe33', color: '#000' },
      nyheder: { background: '#1058c2', color: '#fff' },
      nyheder2: { background: '#000', color: '#fff' },
      sexsamliv: { background: '#b31e61', color: '#fff' },
      sexsamliv2: { background: '#dc7095', color: '#fff' },
      skolefodbold: { background: '#93b923', color: '#fff' },
      sport: { background: '#029e5d', color: '#fff' },
      tv: { background: '#bd1118', color: '#fff' },
      underholdning: { background: '#51208c', color: '#fff' },
    };
  function oe(t, e = !1) {
    const n = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      s = new Date(t),
      a = new Date(),
      r = new Date(s.getTime() + 60 * a.getTimezoneOffset()),
      l = Math.round((a.getTime() - r.getTime()) / 1e3);
    let i = '';
    if (Math.floor(l / 86400)) {
      const t = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 1);
      i =
        r.getTime() > t.getTime()
          ? 'I går'
          : `${r.getDate()}. ${n[r.getMonth()]}.${a.getFullYear() !== r.getFullYear() ? ` ${r.getFullYear()}` : ''}`;
    } else if (e) i = 'I dag';
    else {
      const t = Math.floor((l % 86400) / 3600),
        e = Math.floor(((l % 86400) % 3600) / 60),
        n = l % 60;
      t ? (i = 1 === t ? `${t} time` : `${t} timer`) : e ? (i = `${e} min`) : n && (i = `${n} sek`);
    }
    return i;
  }
  le = {
    eb: 'eb',
    eb2: 'eb2',
    breaking: 'breaking',
    bruger: 'bruger',
    live: 'live',
    native: 'native',
    native2: 'native2',
    facebook: 'facebook',
    twitter: 'twitter',
    flash: 'flash',
    forbrug: 'forbrug',
    leder: 'leder',
    livescore: 'livescore',
    livescore2: 'livescore2',
    nyheder: 'nyheder',
    nyheder2: 'nyheder2',
    sexsamliv: 'sex-samliv',
    sexsamliv2: 'sex-samliv2',
    skolefodbold: 'skolefodbold',
    sport: 'sport',
    tv: 'tv',
    underholdning: 'underholdning',
  };
  const ce = (t) => ({}),
    de = (t) => ({}),
    ue = (t) => ({}),
    fe = (t) => ({}),
    ge = (t) => ({}),
    pe = (t) => ({}),
    me = (t) => ({}),
    he = (t) => ({});
  function $e(t) {
    let e, n, s, a, r, l, i;
    const o = [xe, be],
      c = [];
    function d(t, e) {
      return t[0] ? 0 : 1;
    }
    (n = d(t)), (s = c[n] = o[n](t));
    const u = t[8].default,
      g = f(u, t, t[7], null);
    return {
      c() {
        (e = z('button')),
          s.c(),
          (a = T()),
          g && g.c(),
          B(e, 'class', t[3]),
          (e.disabled = t[2]),
          I(e, 'toggle-disabled', t[2]);
      },
      m(s, o) {
        w(s, e, o),
          c[n].m(e, null),
          x(e, a),
          g && g.m(e, null),
          (r = !0),
          l || ((i = H(e, 'click', S(t[5]))), (l = !0));
      },
      p(t, l) {
        let i = n;
        (n = d(t)),
          n === i
            ? c[n].p(t, l)
            : (ft(),
              mt(c[i], 1, 1, () => {
                c[i] = null;
              }),
              gt(),
              (s = c[n]),
              s ? s.p(t, l) : ((s = c[n] = o[n](t)), s.c()),
              pt(s, 1),
              s.m(e, a)),
          g && g.p && (!r || 128 & l) && m(g, u, t, t[7], r ? p(u, t[7], l, null) : h(t[7]), null),
          (!r || 8 & l) && B(e, 'class', t[3]),
          (!r || 4 & l) && (e.disabled = t[2]),
          (!r || 12 & l) && I(e, 'toggle-disabled', t[2]);
      },
      i(t) {
        r || (pt(s), pt(g, t), (r = !0));
      },
      o(t) {
        mt(s), mt(g, t), (r = !1);
      },
      d(t) {
        t && y(e), c[n].d(), g && g.d(t), (l = !1), i();
      },
    };
  }
  function ve(t) {
    let e, n, s, r, l, i, o, c, d, u, g, $;
    const v = t[8].on,
      b = f(v, t, t[7], he);
    function k(e) {
      t[10](e);
    }
    let C = { className: 'margin-s--rl', width: '30', style: 'cursor: pointer;' };
    void 0 !== t[4] && (C.name = t[4]),
      (l = new te({ props: C })),
      K.push(() => vt(l, 'name', k)),
      l.$on('click', t[5]);
    const M = t[8].off,
      L = f(M, t, t[7], pe);
    return {
      c() {
        (e = z('div')),
          (n = z('button')),
          b && b.c(),
          (r = T()),
          bt(l.$$.fragment),
          (o = T()),
          (c = z('button')),
          L && L.c(),
          B(n, 'data-status', t[0]),
          B(n, 'class', (s = 'toggle--switch ' + t[3])),
          (n.disabled = t[2]),
          I(n, 'toggle-disabled', t[2]),
          B(c, 'data-status', t[0]),
          B(c, 'class', (d = 'toggle--switch ' + t[3])),
          (c.disabled = t[2]),
          I(c, 'toggle-disabled', t[2]),
          B(e, 'class', 'flex flex-align--center');
      },
      m(s, a) {
        w(s, e, a),
          x(e, n),
          b && b.m(n, null),
          x(e, r),
          xt(l, e, null),
          x(e, o),
          x(e, c),
          L && L.m(c, null),
          (u = !0),
          g || (($ = [H(n, 'click', S(t[9])), H(c, 'click', S(t[11]))]), (g = !0));
      },
      p(t, e) {
        b && b.p && (!u || 128 & e) && m(b, v, t, t[7], u ? p(v, t[7], e, me) : h(t[7]), he),
          (!u || 1 & e) && B(n, 'data-status', t[0]),
          (!u || (8 & e && s !== (s = 'toggle--switch ' + t[3]))) && B(n, 'class', s),
          (!u || 4 & e) && (n.disabled = t[2]),
          (!u || 12 & e) && I(n, 'toggle-disabled', t[2]);
        const a = {};
        !i && 16 & e && ((i = !0), (a.name = t[4]), rt(() => (i = !1))),
          l.$set(a),
          L && L.p && (!u || 128 & e) && m(L, M, t, t[7], u ? p(M, t[7], e, ge) : h(t[7]), pe),
          (!u || 1 & e) && B(c, 'data-status', t[0]),
          (!u || (8 & e && d !== (d = 'toggle--switch ' + t[3]))) && B(c, 'class', d),
          (!u || 4 & e) && (c.disabled = t[2]),
          (!u || 12 & e) && I(c, 'toggle-disabled', t[2]);
      },
      i(t) {
        u || (pt(b, t), pt(l.$$.fragment, t), pt(L, t), (u = !0));
      },
      o(t) {
        mt(b, t), mt(l.$$.fragment, t), mt(L, t), (u = !1);
      },
      d(t) {
        t && y(e), b && b.d(t), wt(l), L && L.d(t), (g = !1), a($);
      },
    };
  }
  function be(t) {
    let e;
    const n = t[8].off,
      s = f(n, t, t[7], de);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 128 & a) && m(s, n, t, t[7], e ? p(n, t[7], a, ce) : h(t[7]), de);
      },
      i(t) {
        e || (pt(s, t), (e = !0));
      },
      o(t) {
        mt(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function xe(t) {
    let e;
    const n = t[8].on,
      s = f(n, t, t[7], fe);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 128 & a) && m(s, n, t, t[7], e ? p(n, t[7], a, ue) : h(t[7]), fe);
      },
      i(t) {
        e || (pt(s, t), (e = !0));
      },
      o(t) {
        mt(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function we(t) {
    let e, n, s, a;
    const r = [ve, $e],
      l = [];
    function i(t, e) {
      return t[1] ? 0 : 1;
    }
    return (
      (e = i(t)),
      (n = l[e] = r[e](t)),
      {
        c() {
          n.c(), (s = L());
        },
        m(t, n) {
          l[e].m(t, n), w(t, s, n), (a = !0);
        },
        p(t, [a]) {
          let o = e;
          (e = i(t)),
            e === o
              ? l[e].p(t, a)
              : (ft(),
                mt(l[o], 1, 1, () => {
                  l[o] = null;
                }),
                gt(),
                (n = l[e]),
                n ? n.p(t, a) : ((n = l[e] = r[e](t)), n.c()),
                pt(n, 1),
                n.m(s.parentNode, s));
        },
        i(t) {
          a || (pt(n), (a = !0));
        },
        o(t) {
          mt(n), (a = !1);
        },
        d(t) {
          l[e].d(t), t && y(s);
        },
      }
    );
  }
  function ye(t, e, n) {
    let { $$slots: s = {}, $$scope: a } = e,
      { className: r } = e,
      { defaultState: l = !0 } = e,
      { isSwitch: i = !1 } = e,
      { disabled: o = !1 } = e,
      c = 'toggle-button';
    r && (c = `${r} ${c}`);
    let d = l ? 'toggle-on' : 'toggle-off';
    const u = U();
    function f(t, e) {
      t.preventDefault(), n(0, (l = null != e ? e : !l)), n(4, (d = l ? 'toggle-on' : 'toggle-off')), u('toggle', l);
    }
    return (
      (t.$$set = (t) => {
        'className' in t && n(6, (r = t.className)),
          'defaultState' in t && n(0, (l = t.defaultState)),
          'isSwitch' in t && n(1, (i = t.isSwitch)),
          'disabled' in t && n(2, (o = t.disabled)),
          '$$scope' in t && n(7, (a = t.$$scope));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty && n(0, l);
      }),
      [
        l,
        i,
        o,
        c,
        d,
        f,
        r,
        a,
        s,
        (t) => f(t, !0),
        function (t) {
          (d = t), n(4, d);
        },
        (t) => f(t, !1),
      ]
    );
  }
  class ke extends kt {
    constructor(t) {
      super(), yt(this, t, ye, we, l, { className: 6, defaultState: 0, isSwitch: 1, disabled: 2 });
    }
  }
  const ze = (t) => ({}),
    Ce = (t) => ({ slot: 'on' }),
    Me = (t) => ({}),
    Te = (t) => ({ slot: 'off' });
  function Le(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m = t[7] && He(t),
      h = t[0] && Se(t),
      $ = t[6] && Be(t),
      v = (t[10] || t[8]) && Ee(t),
      b = t[13] && !t[6] && De();
    return {
      c() {
        (e = z('a')),
          (n = z('div')),
          m && m.c(),
          (s = T()),
          h && h.c(),
          (a = T()),
          $ && $.c(),
          (r = T()),
          (l = z('div')),
          (i = z('div')),
          v && v.c(),
          (o = T()),
          b && b.c(),
          (c = T()),
          (d = z('h2')),
          (u = M(t[1])),
          B(d, 'class', 'card-title'),
          B(d, 'style', t[19]),
          I(d, 'padding-l--r', t[13] && !t[6]),
          I(d, 'card-title--truncate', t[11]),
          B(i, 'class', 'card-content'),
          B(l, 'class', 'card-content-wrapper'),
          B(n, 'class', t[15]),
          B(e, 'href', t[12]),
          B(e, 'class', t[17]),
          B(e, 'style', t[18]),
          B(e, 'data-breaking', t[2]);
      },
      m(y, k) {
        w(y, e, k),
          x(e, n),
          m && m.m(n, null),
          x(n, s),
          h && h.m(n, null),
          x(n, a),
          $ && $.m(n, null),
          x(n, r),
          x(n, l),
          x(l, i),
          v && v.m(i, null),
          x(i, o),
          b && b.m(i, null),
          x(i, c),
          x(i, d),
          x(d, u),
          (f = !0),
          g || ((p = H(e, 'click', t[29])), (g = !0));
      },
      p(t, l) {
        t[7]
          ? m
            ? (m.p(t, l), 128 & l[0] && pt(m, 1))
            : ((m = He(t)), m.c(), pt(m, 1), m.m(n, s))
          : m &&
            (ft(),
            mt(m, 1, 1, () => {
              m = null;
            }),
            gt()),
          t[0] ? (h ? h.p(t, l) : ((h = Se(t)), h.c(), h.m(n, a))) : h && (h.d(1), (h = null)),
          t[6]
            ? $
              ? ($.p(t, l), 64 & l[0] && pt($, 1))
              : (($ = Be(t)), $.c(), pt($, 1), $.m(n, r))
            : $ &&
              (ft(),
              mt($, 1, 1, () => {
                $ = null;
              }),
              gt()),
          t[10] || t[8]
            ? v
              ? (v.p(t, l), 1280 & l[0] && pt(v, 1))
              : ((v = Ee(t)), v.c(), pt(v, 1), v.m(i, o))
            : v &&
              (ft(),
              mt(v, 1, 1, () => {
                v = null;
              }),
              gt()),
          t[13] && !t[6]
            ? b
              ? 8256 & l[0] && pt(b, 1)
              : ((b = De()), b.c(), pt(b, 1), b.m(i, c))
            : b &&
              (ft(),
              mt(b, 1, 1, () => {
                b = null;
              }),
              gt()),
          (!f || 2 & l[0]) && E(u, t[1]),
          (!f || 8256 & l[0]) && I(d, 'padding-l--r', t[13] && !t[6]),
          (!f || 2048 & l[0]) && I(d, 'card-title--truncate', t[11]),
          (!f || 32768 & l[0]) && B(n, 'class', t[15]),
          (!f || 4096 & l[0]) && B(e, 'href', t[12]),
          (!f || 131072 & l[0]) && B(e, 'class', t[17]),
          (!f || 262144 & l[0]) && B(e, 'style', t[18]),
          (!f || 4 & l[0]) && B(e, 'data-breaking', t[2]);
      },
      i(t) {
        f || (pt(m), pt($), pt(v), pt(b), (f = !0));
      },
      o(t) {
        mt(m), mt($), mt(v), mt(b), (f = !1);
      },
      d(t) {
        t && y(e), m && m.d(), h && h.d(), $ && $.d(), v && v.d(), b && b.d(), (g = !1), p();
      },
    };
  }
  function He(t) {
    let e, n, s, a;
    return (
      (n = new te({ props: { className: 'color--white', name: 'ebplus-white' } })),
      {
        c() {
          (e = z('div')),
            bt(n.$$.fragment),
            B(e, 'class', (s = 'premium-dogear ' + (t[4] ? `premium-dogear--${t[4]}` : '')));
        },
        m(t, s) {
          w(t, e, s), xt(n, e, null), (a = !0);
        },
        p(t, n) {
          (!a || (16 & n[0] && s !== (s = 'premium-dogear ' + (t[4] ? `premium-dogear--${t[4]}` : '')))) &&
            B(e, 'class', s);
        },
        i(t) {
          a || (pt(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(e), wt(n);
        },
      }
    );
  }
  function Se(t) {
    let e, n;
    return {
      c() {
        (e = z('div')),
          (n = z('div')),
          B(n, 'class', 'card-image bg--graa4'),
          B(n, 'style', t[14]),
          B(e, 'class', 'card-media');
      },
      m(t, s) {
        w(t, e, s), x(e, n);
      },
      p(t, e) {
        16384 & e[0] && B(n, 'style', t[14]);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function Be(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      d = t[5] && Ne(t),
      u = t[13] && Ae();
    return {
      c() {
        (e = z('div')),
          d && d.c(),
          (n = T()),
          u && u.c(),
          (s = T()),
          (a = z('img')),
          B(a, 'alt', t[1]),
          B(a, 'class', 'card-image'),
          c(a.src, (r = t[6].src)) || B(a, 'src', r),
          B(a, 'height', (l = t[6].height)),
          B(a, 'width', (i = t[6].width)),
          F(a, 'width', t[6].width + 'px'),
          B(e, 'class', t[16]);
      },
      m(t, r) {
        w(t, e, r), d && d.m(e, null), x(e, n), u && u.m(e, null), x(e, s), x(e, a), (o = !0);
      },
      p(t, f) {
        t[5]
          ? d
            ? (d.p(t, f), 32 & f[0] && pt(d, 1))
            : ((d = Ne(t)), d.c(), pt(d, 1), d.m(e, n))
          : d &&
            (ft(),
            mt(d, 1, 1, () => {
              d = null;
            }),
            gt()),
          t[13]
            ? u
              ? 8192 & f[0] && pt(u, 1)
              : ((u = Ae()), u.c(), pt(u, 1), u.m(e, s))
            : u &&
              (ft(),
              mt(u, 1, 1, () => {
                u = null;
              }),
              gt()),
          (!o || 2 & f[0]) && B(a, 'alt', t[1]),
          (!o || (64 & f[0] && !c(a.src, (r = t[6].src)))) && B(a, 'src', r),
          (!o || (64 & f[0] && l !== (l = t[6].height))) && B(a, 'height', l),
          (!o || (64 & f[0] && i !== (i = t[6].width))) && B(a, 'width', i),
          (!o || 64 & f[0]) && F(a, 'width', t[6].width + 'px'),
          (!o || 65536 & f[0]) && B(e, 'class', t[16]);
      },
      i(t) {
        o || (pt(d), pt(u), (o = !0));
      },
      o(t) {
        mt(d), mt(u), (o = !1);
      },
      d(t) {
        t && y(e), d && d.d(), u && u.d();
      },
    };
  }
  function Ne(t) {
    let e, n, s, a;
    return (
      (n = new te({
        props: {
          name: 'lightning',
          className: 'bg--white color--' + t[3] + ' border-radius-s padding-s margin-s--r',
          style: 'margin-left: -1px;',
          width: '15',
        },
      })),
      {
        c() {
          (e = z('span')),
            bt(n.$$.fragment),
            (s = M('\n              UPDATE')),
            B(
              e,
              'class',
              'badge margin-s position-absolute padding-none padding-s--r card--shadow bg--black fontsize-small'
            ),
            F(e, 'bottom', '5px'),
            F(e, 'left', '5px');
        },
        m(t, r) {
          w(t, e, r), xt(n, e, null), x(e, s), (a = !0);
        },
        p(t, e) {
          const s = {};
          8 & e[0] && (s.className = 'bg--white color--' + t[3] + ' border-radius-s padding-s margin-s--r'), n.$set(s);
        },
        i(t) {
          a || (pt(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(e), wt(n);
        },
      }
    );
  }
  function Ae(t) {
    let e, n, s;
    return (
      (n = new te({ props: { className: 'color--white', name: 'video-graphic', width: '25' } })),
      {
        c() {
          (e = z('div')), bt(n.$$.fragment), B(e, 'class', 'video-icon');
        },
        m(t, a) {
          w(t, e, a), xt(n, e, null), (s = !0);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && y(e), wt(n);
        },
      }
    );
  }
  function Ee(t) {
    let e,
      n,
      s,
      a,
      r = t[10] && 'New Articles' !== t[10] && je(t),
      l = t[8] && Fe(t),
      i = void 0 !== t[9] && Oe(t);
    return {
      c() {
        (e = z('div')),
          r && r.c(),
          (n = T()),
          l && l.c(),
          (s = T()),
          i && i.c(),
          B(e, 'class', 'card-meta flex flex-wrap--wrap fontsize-xxsmall');
      },
      m(t, o) {
        w(t, e, o), r && r.m(e, null), x(e, n), l && l.m(e, null), x(e, s), i && i.m(e, null), (a = !0);
      },
      p(t, a) {
        t[10] && 'New Articles' !== t[10]
          ? r
            ? (r.p(t, a), 1024 & a[0] && pt(r, 1))
            : ((r = je(t)), r.c(), pt(r, 1), r.m(e, n))
          : r &&
            (ft(),
            mt(r, 1, 1, () => {
              r = null;
            }),
            gt()),
          t[8]
            ? l
              ? (l.p(t, a), 256 & a[0] && pt(l, 1))
              : ((l = Fe(t)), l.c(), pt(l, 1), l.m(e, s))
            : l &&
              (ft(),
              mt(l, 1, 1, () => {
                l = null;
              }),
              gt()),
          void 0 !== t[9]
            ? i
              ? (i.p(t, a), 512 & a[0] && pt(i, 1))
              : ((i = Oe(t)), i.c(), pt(i, 1), i.m(e, null))
            : i &&
              (ft(),
              mt(i, 1, 1, () => {
                i = null;
              }),
              gt());
      },
      i(t) {
        a || (pt(r), pt(l), pt(i), (a = !0));
      },
      o(t) {
        mt(r), mt(l), mt(i), (a = !1);
      },
      d(t) {
        t && y(e), r && r.d(), l && l.d(), i && i.d();
      },
    };
  }
  function je(t) {
    let e, n, s, a, r, l, i;
    return (
      (s = new te({ props: { name: 'tag', width: '12' } })),
      {
        c() {
          (e = z('div')),
            (n = z('span')),
            bt(s.$$.fragment),
            (a = T()),
            (r = z('span')),
            (l = M(t[10])),
            B(r, 'class', 'padding-s--l'),
            B(n, 'class', 'flex flex-justify--center'),
            B(e, 'class', 'card-meta-item');
        },
        m(t, o) {
          w(t, e, o), x(e, n), xt(s, n, null), x(n, a), x(n, r), x(r, l), (i = !0);
        },
        p(t, e) {
          (!i || 1024 & e[0]) && E(l, t[10]);
        },
        i(t) {
          i || (pt(s.$$.fragment, t), (i = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), (i = !1);
        },
        d(t) {
          t && y(e), wt(s);
        },
      }
    );
  }
  function Fe(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i = oe(t[8]) + '';
    return (
      (n = new te({ props: { name: 'clock', width: '12' } })),
      {
        c() {
          (e = z('div')),
            bt(n.$$.fragment),
            (s = T()),
            (a = z('span')),
            (r = M(i)),
            B(a, 'class', 'padding-s--l'),
            B(e, 'class', 'card-meta-item');
        },
        m(t, i) {
          w(t, e, i), xt(n, e, null), x(e, s), x(e, a), x(a, r), (l = !0);
        },
        p(t, e) {
          (!l || 256 & e[0]) && i !== (i = oe(t[8]) + '') && E(r, i);
        },
        i(t) {
          l || (pt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && y(e), wt(n);
        },
      }
    );
  }
  function Oe(t) {
    let e, n;
    return (
      (e = new ke({
        props: {
          className: 'card-meta-item padding-m--r padding-s--b',
          defaultState: t[9],
          $$slots: { off: [Ie], on: [Ve] },
          $$scope: { ctx: t },
        },
      })),
      e.$on('toggle', t[20]),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        p(t, n) {
          const s = {};
          512 & n[0] && (s.defaultState = t[9]), 1073741824 & n[0] && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ve(e) {
    let n;
    const s = e[28].default,
      a = f(s, e, e[30], Ce),
      r =
        a ||
        (function (e) {
          let n, s, a, r;
          return (
            (n = new te({ props: { name: 'bookmark-solid', style: 'color: var(--fgcolor--list);', width: 12 } })),
            {
              c() {
                bt(n.$$.fragment),
                  (s = T()),
                  (a = z('span')),
                  (a.textContent = 'Gemt'),
                  B(a, 'class', 'padding-s--l'),
                  F(a, 'color', 'var(--fgcolor--list)');
              },
              m(t, e) {
                xt(n, t, e), w(t, s, e), w(t, a, e), (r = !0);
              },
              p: t,
              i(t) {
                r || (pt(n.$$.fragment, t), (r = !0));
              },
              o(t) {
                mt(n.$$.fragment, t), (r = !1);
              },
              d(t) {
                wt(n, t), t && y(s), t && y(a);
              },
            }
          );
        })();
    return {
      c() {
        r && r.c();
      },
      m(t, e) {
        r && r.m(t, e), (n = !0);
      },
      p(t, e) {
        a && a.p && (!n || 1073741824 & e[0]) && m(a, s, t, t[30], n ? p(s, t[30], e, ze) : h(t[30]), Ce);
      },
      i(t) {
        n || (pt(r, t), (n = !0));
      },
      o(t) {
        mt(r, t), (n = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function Ie(e) {
    let n;
    const s = e[28].default,
      a = f(s, e, e[30], Te),
      r =
        a ||
        (function (e) {
          let n, s, a, r;
          return (
            (n = new te({ props: { name: 'bookmark', style: 'color: var(--fgcolor--list);', width: 12 } })),
            {
              c() {
                bt(n.$$.fragment),
                  (s = T()),
                  (a = z('span')),
                  (a.textContent = 'Gem'),
                  B(a, 'class', 'padding-s--l'),
                  F(a, 'color', 'var(--fgcolor--list)');
              },
              m(t, e) {
                xt(n, t, e), w(t, s, e), w(t, a, e), (r = !0);
              },
              p: t,
              i(t) {
                r || (pt(n.$$.fragment, t), (r = !0));
              },
              o(t) {
                mt(n.$$.fragment, t), (r = !1);
              },
              d(t) {
                wt(n, t), t && y(s), t && y(a);
              },
            }
          );
        })();
    return {
      c() {
        r && r.c();
      },
      m(t, e) {
        r && r.m(t, e), (n = !0);
      },
      p(t, e) {
        a && a.p && (!n || 1073741824 & e[0]) && m(a, s, t, t[30], n ? p(s, t[30], e, Me) : h(t[30]), Te);
      },
      i(t) {
        n || (pt(r, t), (n = !0));
      },
      o(t) {
        mt(r, t), (n = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function De(t) {
    let e, n, s;
    return (
      (n = new te({ props: { className: 'color--white', name: 'video-graphic', width: '20' } })),
      {
        c() {
          (e = z('div')), bt(n.$$.fragment), B(e, 'class', 'video-icon');
        },
        m(t, a) {
          w(t, e, a), xt(n, e, null), (s = !0);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && y(e), wt(n);
        },
      }
    );
  }
  function _e(t) {
    let e,
      n,
      s = (t[0] || (!t[0] && t[1])) && Le(t);
    return {
      c() {
        s && s.c(), (e = L());
      },
      m(t, a) {
        s && s.m(t, a), w(t, e, a), (n = !0);
      },
      p(t, n) {
        t[0] || (!t[0] && t[1])
          ? s
            ? (s.p(t, n), 3 & n[0] && pt(s, 1))
            : ((s = Le(t)), s.c(), pt(s, 1), s.m(e.parentNode, e))
          : s &&
            (ft(),
            mt(s, 1, 1, () => {
              s = null;
            }),
            gt());
      },
      i(t) {
        n || (pt(s), (n = !0));
      },
      o(t) {
        mt(s), (n = !1);
      },
      d(t) {
        s && s.d(t), t && y(e);
      },
    };
  }
  function Pe(t, e, n) {
    let s,
      a,
      r,
      { $$slots: l = {}, $$scope: i } = e,
      { loading: o = !1 } = e,
      { title: c = '' } = e,
      { breaking: d = !1 } = e,
      { cardType: u } = e,
      { className: f } = e,
      { colorName: g } = e,
      { premiumMarkerSize: p } = e,
      { id: m } = e,
      { update: h = !1 } = e,
      { maxLines: $ } = e,
      { media: v } = e,
      { premium: b = !1 } = e,
      { published: x } = e,
      { saved: w } = e,
      { section: y } = e,
      { style: k = '' } = e,
      { truncateTitle: z = !1 } = e,
      { url: C } = e,
      { videoIcon: M = !1 } = e,
      { width: T = '100%' } = e;
    const L = U();
    let H = 'card-mode card-mode--article',
      S = 'padding-top: 56.25%; width: 100%;';
    if (o)
      switch (((H = `${H} animation-fogwave`), u)) {
        case 'small-media':
        case 'small-media--reverse':
          S = 'width: 200px;height: 115px;';
      }
    let B = 'card-inner';
    switch (u) {
      case 'small-media':
        B = `${B} card--small-media`;
        break;
      case 'small-media--reverse':
        B = `${B} card--small-media card--small-media--reverse`;
    }
    const N = $ ? `--max-lines: ${$};` : void 0;
    return (
      (t.$$set = (t) => {
        'loading' in t && n(0, (o = t.loading)),
          'title' in t && n(1, (c = t.title)),
          'breaking' in t && n(2, (d = t.breaking)),
          'cardType' in t && n(21, (u = t.cardType)),
          'className' in t && n(22, (f = t.className)),
          'colorName' in t && n(3, (g = t.colorName)),
          'premiumMarkerSize' in t && n(4, (p = t.premiumMarkerSize)),
          'id' in t && n(23, (m = t.id)),
          'update' in t && n(5, (h = t.update)),
          'maxLines' in t && n(24, ($ = t.maxLines)),
          'media' in t && n(6, (v = t.media)),
          'premium' in t && n(7, (b = t.premium)),
          'published' in t && n(8, (x = t.published)),
          'saved' in t && n(9, (w = t.saved)),
          'section' in t && n(10, (y = t.section)),
          'style' in t && n(25, (k = t.style)),
          'truncateTitle' in t && n(11, (z = t.truncateTitle)),
          'url' in t && n(12, (C = t.url)),
          'videoIcon' in t && n(13, (M = t.videoIcon)),
          'width' in t && n(26, (T = t.width)),
          '$$scope' in t && n(30, (i = t.$$scope));
      }),
      (t.$$.update = () => {
        100663308 & t.$$.dirty[0] &&
          n(
            18,
            (s = `${k}; --color--list: var(--color--${d ? le.breaking : g}); --fgcolor--list: var(--fgcolor--${
              d ? le.breaking : g
            }); --card-width: ${T};`)
          ),
          138412032 & t.$$.dirty[0] && n(17, (a = f ? `${f} ${H}` : H)),
          64 & t.$$.dirty[0] && n(16, (r = v && v.className ? `${v.className} card-media` : 'card-media'));
      }),
      [
        o,
        c,
        d,
        g,
        p,
        h,
        v,
        b,
        x,
        w,
        y,
        z,
        C,
        M,
        S,
        B,
        r,
        a,
        s,
        N,
        function (t) {
          L('save', { id: m, save: t.detail });
        },
        u,
        f,
        m,
        $,
        k,
        T,
        H,
        l,
        function (e) {
          X.call(this, t, e);
        },
        i,
      ]
    );
  }
  class qe extends kt {
    constructor(t) {
      super(),
        yt(
          this,
          t,
          Pe,
          _e,
          l,
          {
            loading: 0,
            title: 1,
            breaking: 2,
            cardType: 21,
            className: 22,
            colorName: 3,
            premiumMarkerSize: 4,
            id: 23,
            update: 5,
            maxLines: 24,
            media: 6,
            premium: 7,
            published: 8,
            saved: 9,
            section: 10,
            style: 25,
            truncateTitle: 11,
            url: 12,
            videoIcon: 13,
            width: 26,
          },
          null,
          [-1, -1]
        );
    }
  }
  var Re, We, Ge;
  !(function (t) {
    (t[(t.left = 0)] = 'left'), (t[(t.right = 1)] = 'right');
  })(Re || (Re = {})),
    (function (t) {
      (t[(t.disabled = 0)] = 'disabled'), (t[(t.enabled = 1)] = 'enabled');
    })(We || (We = {})),
    (function (t) {
      (t[(t.disabled = 0)] = 'disabled'),
        (t[(t.end = 1)] = 'end'),
        (t[(t.neutral = 2)] = 'neutral'),
        (t[(t.start = 3)] = 'start'),
        (t[(t.unset = 4)] = 'unset');
    })(Ge || (Ge = {}));
  let Ue = class {
    constructor() {
      (this.currentState = Ge.unset),
        (this.listLength = 0),
        (this.currentBlock = 0),
        (this.blocks = [0]),
        (this.blocking = We.enabled);
    }
    init(t, e) {
      (this.scrollItemContainer = t),
        (this.scrollContainer = e),
        this.scrollItemContainer.addEventListener(
          'scroll',
          (function (t, e) {
            let n;
            return function (...s) {
              const a = this;
              n || (t.apply(a, s), (n = !0), setTimeout(() => (n = !1), e));
            };
          })(() => {
            (this.blocking = We.disabled), this.updateButtons();
          }, 50)
        ),
        (this.wrapLeft = t.getBoundingClientRect().left),
        (this.wrapRight = t.getBoundingClientRect().right),
        (this.wrapClientWidth = t.clientWidth),
        this.update();
    }
    scrollWithButton(t) {
      let e = this.findPosition(t);
      t === Re.right && this.wrapMaxLeft < e
        ? ((e = this.wrapMaxLeft), this.updateDataSet(Ge.end))
        : e <= 0
        ? ((e = 0), this.updateDataSet(Ge.start))
        : this.updateDataSet(Ge.neutral),
        this.scrollItemContainer.scrollTo({ behavior: 'smooth', left: e, top: 0 });
    }
    update() {
      if (this.listLength === this.scrollItemContainer.children.length) return;
      (this.children = this.scrollItemContainer.children), (this.listLength = this.children.length);
      const t = this.scrollContainer.getBoundingClientRect(),
        e = Array.from(this.children).filter(
          (e) => e.getBoundingClientRect().left >= t.left && e.getBoundingClientRect().right <= t.right
        ).length,
        n = this.listLength - e;
      (this.wrapMaxLeft = this.scrollItemContainer.scrollWidth - this.wrapClientWidth),
        n ? this.updateButtons() : this.updateDataSet(Ge.disabled);
    }
    updateDataSet(t) {
      if (this.currentState !== t) {
        switch (t) {
          case Ge.neutral:
            (this.scrollContainer.dataset.atstart = 'false'), (this.scrollContainer.dataset.atend = 'false');
            break;
          case Ge.end:
            (this.scrollContainer.dataset.atstart = 'false'), (this.scrollContainer.dataset.atend = 'true');
            break;
          case Ge.start:
            (this.scrollContainer.dataset.atstart = 'true'), (this.scrollContainer.dataset.atend = 'false');
            break;
          case Ge.disabled:
            (this.scrollContainer.dataset.atstart = 'true'), (this.scrollContainer.dataset.atend = 'true');
        }
        this.currentState = t;
      }
    }
    updateButtons() {
      const t = this.children[0].getBoundingClientRect().left,
        e = this.children[this.listLength - 1].getBoundingClientRect().right,
        n = t + 30 < this.wrapLeft,
        s = e - 30 > this.wrapRight;
      let a;
      (a = n && s ? Ge.neutral : n ? Ge.end : s ? Ge.start : Ge.disabled), this.updateDataSet(a);
    }
    findPrevChild() {
      return Array.from(this.children)
        .reverse()
        .find((t) => t.getBoundingClientRect().left < this.wrapLeft);
    }
    findNextChild() {
      return Array.from(this.children).find((t) => t.getBoundingClientRect().right > this.wrapRight);
    }
    findPosition(t) {
      try {
        let e;
        if (t === Re.left)
          if (this.blocking === We.enabled && this.blocks[this.currentBlock - 1])
            this.currentBlock--, (e = this.blocks[this.currentBlock]);
          else {
            (this.blocks = [0]), (this.currentBlock = 0);
            const t = this.findPrevChild();
            if (!t) return console.warn('No prev child found, assume at start'), 0;
            e =
              this.scrollItemContainer.scrollLeft -
              (this.wrapClientWidth - (t.clientWidth - (this.wrapLeft - t.getBoundingClientRect().left)));
          }
        else if (t === Re.right)
          if (this.blocking === We.enabled && this.blocks[this.currentBlock + 1])
            this.currentBlock++, (e = this.blocks[this.currentBlock]);
          else {
            const t = this.findNextChild();
            if (!t) return console.warn('No next child found, assume at end'), this.wrapMaxLeft;
            (e = t.offsetLeft), this.currentBlock++, this.blocks.push(e);
          }
        return e;
      } catch (t) {
        return console.error('findPosition', t), -1;
      }
    }
  };
  function Ze(t) {
    let e, n, s, r, l, i, o, c, d, u, g;
    (s = new te({ props: { name: 'angle-left', width: '14' } })),
      (i = new te({ props: { name: 'angle-right', width: '14' } }));
    const $ = t[6].default,
      v = f($, t, t[5], null);
    return {
      c() {
        (e = z('div')),
          (n = z('button')),
          bt(s.$$.fragment),
          (r = T()),
          (l = z('button')),
          bt(i.$$.fragment),
          (o = T()),
          (c = z('div')),
          v && v.c(),
          B(n, 'class', 'button button--icon horizontal-scroll-nav button-prev bg--white'),
          B(l, 'class', 'button button--icon horizontal-scroll-nav button-next bg--white'),
          B(c, 'class', 'horizontal-scroll-items horizontal-scroll-items--gap flex position-relative'),
          B(c, 'data-horizontallist', 'horizontallist'),
          B(e, 'class', t[2]);
      },
      m(a, f) {
        w(a, e, f),
          x(e, n),
          xt(s, n, null),
          x(e, r),
          x(e, l),
          xt(i, l, null),
          x(e, o),
          x(e, c),
          v && v.m(c, null),
          t[9](c),
          t[10](e),
          (d = !0),
          u || ((g = [H(n, 'click', t[7]), H(l, 'click', t[8])]), (u = !0));
      },
      p(t, [n]) {
        v && v.p && (!d || 32 & n) && m(v, $, t, t[5], d ? p($, t[5], n, null) : h(t[5]), null),
          (!d || 4 & n) && B(e, 'class', t[2]);
      },
      i(t) {
        d || (pt(s.$$.fragment, t), pt(i.$$.fragment, t), pt(v, t), (d = !0));
      },
      o(t) {
        mt(s.$$.fragment, t), mt(i.$$.fragment, t), mt(v, t), (d = !1);
      },
      d(n) {
        n && y(e), wt(s), wt(i), v && v.d(n), t[9](null), t[10](null), (u = !1), a(g);
      },
    };
  }
  function Ye(t, e, n) {
    let s,
      { $$slots: a = {}, $$scope: r } = e,
      { className: l } = e;
    const i = 'horizontal-scroll-container position-relative';
    let o, c;
    const d = new Ue();
    R(() => {
      d.init(c, o);
    }),
      W(() => {
        d.update();
      });
    return (
      (t.$$set = (t) => {
        'className' in t && n(4, (l = t.className)), '$$scope' in t && n(5, (r = t.$$scope));
      }),
      (t.$$.update = () => {
        16 & t.$$.dirty && n(2, (s = l ? `${l} ${i}` : i));
      }),
      [
        o,
        c,
        s,
        d,
        l,
        r,
        a,
        () => d.scrollWithButton(Re.left),
        () => d.scrollWithButton(Re.right),
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (c = t), n(1, c);
          });
        },
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (o = t), n(0, o);
          });
        },
      ]
    );
  }
  class Xe extends kt {
    constructor(t) {
      super(), yt(this, t, Ye, Ze, l, { className: 4 });
    }
  }
  function Qe(t) {
    let e, n;
    const s = t[11].default,
      a = f(s, t, t[13], null);
    return {
      c() {
        (e = z('div')),
          a && a.c(),
          B(e, 'class', 'articlelist articlelist--columns'),
          B(e, 'data-items', t[1]),
          F(e, '--articlelist-columns', t[1]);
      },
      m(t, s) {
        w(t, e, s), a && a.m(e, null), (n = !0);
      },
      p(t, r) {
        a && a.p && (!n || 8192 & r) && m(a, s, t, t[13], n ? p(s, t[13], r, null) : h(t[13]), null),
          (!n || 2 & r) && B(e, 'data-items', t[1]),
          (!n || 2 & r) && F(e, '--articlelist-columns', t[1]);
      },
      i(t) {
        n || (pt(a, t), (n = !0));
      },
      o(t) {
        mt(a, t), (n = !1);
      },
      d(t) {
        t && y(e), a && a.d(t);
      },
    };
  }
  function Ke(t) {
    let e, n;
    return (
      (e = new Xe({ props: { $$slots: { default: [Je] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        p(t, n) {
          const s = {};
          8192 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Je(t) {
    let e;
    const n = t[11].default,
      s = f(n, t, t[13], null);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 8192 & a) && m(s, n, t, t[13], e ? p(n, t[13], a, null) : h(t[13]), null);
      },
      i(t) {
        e || (pt(s, t), (e = !0));
      },
      o(t) {
        mt(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function tn(t) {
    let e, n, s, a;
    const r = [Ke, Qe],
      l = [];
    function i(t, e) {
      return t[5] === t[2].horizontal ? 0 : 1;
    }
    return (
      (n = i(t)),
      (s = l[n] = r[n](t)),
      {
        c() {
          (e = z('div')), s.c(), B(e, 'class', t[0]), F(e, '--card-mode--title', 'var(--fs-' + t[4] + ')');
        },
        m(s, r) {
          w(s, e, r), l[n].m(e, null), t[12](e), (a = !0);
        },
        p(t, [o]) {
          let c = n;
          (n = i(t)),
            n === c
              ? l[n].p(t, o)
              : (ft(),
                mt(l[c], 1, 1, () => {
                  l[c] = null;
                }),
                gt(),
                (s = l[n]),
                s ? s.p(t, o) : ((s = l[n] = r[n](t)), s.c()),
                pt(s, 1),
                s.m(e, null)),
            (!a || 1 & o) && B(e, 'class', t[0]),
            (!a || 16 & o) && F(e, '--card-mode--title', 'var(--fs-' + t[4] + ')');
        },
        i(t) {
          a || (pt(s), (a = !0));
        },
        o(t) {
          mt(s), (a = !1);
        },
        d(s) {
          s && y(e), l[n].d(), t[12](null);
        },
      }
    );
  }
  function en(t, e, n) {
    let s,
      a,
      { $$slots: r = {}, $$scope: l } = e;
    var i, o;
    !(function (t) {
      (t.columns = 'columns'), (t.horizontal = 'horizontal'), (t.vertical = 'vertical');
    })(o || (o = {}));
    let { className: c = 'margin-l--tb' } = e,
      { fontsizes: d = ['xxlarge', 'xlarge', 'large'] } = e,
      { type: f = o.horizontal } = e;
    const g = Mt(f);
    u(t, g, (t) => n(5, (a = t)));
    const p = Mt(0);
    let m, h;
    u(t, p, (t) => n(1, (s = t)));
    const $ = () =>
      m.querySelector('[data-horizontallist="horizontallist"]')
        ? m.querySelector('[data-horizontallist="horizontallist"]').children[0].clientWidth
        : m.children[0].children[0].clientWidth;
    let v;
    return (
      W(() => {
        const t = m.querySelector('[data-horizontallist="horizontallist"]')
          ? m.querySelector('[data-horizontallist="horizontallist"]').children.length
          : m.children[0].children.length;
        p.set(t),
          (h = null != h ? h : $()),
          s <= Math.round(m.clientWidth / h) && f === o.horizontal ? g.set(o.columns) : g.set(o.horizontal);
      }),
      (t.$$set = (t) => {
        'className' in t && n(0, (c = t.className)),
          'fontsizes' in t && n(8, (d = t.fontsizes)),
          'type' in t && n(9, (f = t.type)),
          '$$scope' in t && n(13, (l = t.$$scope));
      }),
      (t.$$.update = () => {
        1282 & t.$$.dirty && n(4, (v = null !== n(10, (i = d[s - 1])) && void 0 !== i ? i : d[d.length - 1]));
      }),
      [
        c,
        s,
        o,
        m,
        v,
        a,
        g,
        p,
        d,
        f,
        i,
        r,
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (m = t), n(3, m);
          });
        },
        l,
      ]
    );
  }
  class nn extends kt {
    constructor(t) {
      super(), yt(this, t, en, tn, l, { className: 0, fontsizes: 8, type: 9 });
    }
  }
  function sn(t) {
    let e, n;
    const s = t[10].default,
      a = f(s, t, t[9], null);
    return {
      c() {
        (e = z('div')), a && a.c(), B(e, 'class', t[1]), B(e, 'style', t[0]);
      },
      m(t, s) {
        w(t, e, s), a && a.m(e, null), (n = !0);
      },
      p(t, [r]) {
        a && a.p && (!n || 512 & r) && m(a, s, t, t[9], n ? p(s, t[9], r, null) : h(t[9]), null),
          (!n || 2 & r) && B(e, 'class', t[1]),
          (!n || 1 & r) && B(e, 'style', t[0]);
      },
      i(t) {
        n || (pt(a, t), (n = !0));
      },
      o(t) {
        mt(a, t), (n = !1);
      },
      d(t) {
        t && y(e), a && a.d(t);
      },
    };
  }
  const an = {};
  function rn(t, e, n) {
    let s,
      a,
      { $$slots: r = {}, $$scope: l } = e;
    const i = Mt(0),
      o = Mt(null),
      c = [];
    i.subscribe((t) => {
      o.set(c[t]);
    }),
      Z(an, {
        createContextButton: () => ({ button: c.length }),
        registerButton: (t) => {
          c.push(t),
            o.update((e) => e || t),
            G(() => {
              const e = c.indexOf(t);
              c.splice(e, 1), o.update((n) => (n === t ? c[e] || c[c.length - 1] : n));
            });
        },
        selectButton: (t) => {
          const e = c.indexOf(t);
          i.set(e);
        },
        selectedButton: o,
      });
    let { className: d } = e,
      { type: u } = e,
      { color: f } = e,
      { colorHover: g } = e,
      { solid: p = !1 } = e,
      m = 'buttongroup';
    p && (m = `${m} buttongroup--solid`), u && (m = `${m} buttongroup--${u}`);
    const { background: h, color: $ } = ie[f] ? ie[f] : ie.bruger;
    g = f && !g ? f : g;
    const { background: v, color: b } = ie[g] ? ie[g] : ie.bruger;
    return (
      (t.$$set = (t) => {
        'className' in t && n(4, (d = t.className)),
          'type' in t && n(5, (u = t.type)),
          'color' in t && n(6, (f = t.color)),
          'colorHover' in t && n(2, (g = t.colorHover)),
          'solid' in t && n(7, (p = t.solid)),
          '$$scope' in t && n(9, (l = t.$$scope));
      }),
      (t.$$.update = () => {
        272 & t.$$.dirty && n(1, (s = d ? `${d} ${m}` : m));
      }),
      (a = `--buttongroup-color: ${h}; --buttongroup-fgcolor: ${$}; --buttongroup-color--hover: ${v}; --buttongroup-fgcolor--hover: ${b};`),
      [a, s, g, i, d, u, f, p, m, l, r]
    );
  }
  class ln extends kt {
    constructor(t) {
      super(), yt(this, t, rn, sn, l, { selectedId: 3, className: 4, type: 5, color: 6, colorHover: 2, solid: 7 });
    }
    get selectedId() {
      return this.$$.ctx[3];
    }
  }
  function on(t) {
    let e, n, s, a;
    return (
      (e = new te({ props: { className: 'form-checkbox-toggle--on margin-s--l', name: 'check-circle', width: '16' } })),
      (s = new te({ props: { className: 'form-checkbox-toggle--off margin-s--l', name: 'circle', width: '16' } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment);
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t);
        },
      }
    );
  }
  function cn(t) {
    let e, n, s, a;
    return (
      (e = new te({ props: { className: 'form-checkbox-toggle--on margin-s--l', name: 'check-square', width: '16' } })),
      (s = new te({ props: { className: 'form-checkbox-toggle--off margin-s--l', name: 'square', width: '16' } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment);
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t);
        },
      }
    );
  }
  function dn(t) {
    let e, n, s, a, r, l, i, o, c;
    const d = [cn, on],
      u = [];
    function f(t, e) {
      return 'checkbox' === t[3] ? 0 : 1;
    }
    return (
      (i = f(t)),
      (o = u[i] = d[i](t)),
      {
        c() {
          (e = z('label')),
            (n = z('input')),
            (s = T()),
            (a = z('span')),
            (r = M(t[2])),
            (l = T()),
            o.c(),
            B(n, 'type', t[3]),
            B(n, 'class', t[5]),
            B(n, 'name', t[0]),
            B(n, 'group', t[1]),
            (n.value = t[4]),
            B(a, 'class', 'flex form-label');
        },
        m(t, o) {
          w(t, e, o), x(e, n), x(e, s), x(e, a), x(a, r), x(a, l), u[i].m(a, null), (c = !0);
        },
        p(t, [e]) {
          (!c || 8 & e) && B(n, 'type', t[3]),
            (!c || 32 & e) && B(n, 'class', t[5]),
            (!c || 1 & e) && B(n, 'name', t[0]),
            (!c || 2 & e) && B(n, 'group', t[1]),
            (!c || (16 & e && n.value !== t[4])) && (n.value = t[4]),
            (!c || 4 & e) && E(r, t[2]);
          let s = i;
          (i = f(t)),
            i !== s &&
              (ft(),
              mt(u[s], 1, 1, () => {
                u[s] = null;
              }),
              gt(),
              (o = u[i]),
              o || ((o = u[i] = d[i](t)), o.c()),
              pt(o, 1),
              o.m(a, null));
        },
        i(t) {
          c || (pt(o), (c = !0));
        },
        o(t) {
          mt(o), (c = !1);
        },
        d(t) {
          t && y(e), u[i].d();
        },
      }
    );
  }
  function un(t, e, n) {
    let { fieldName: s } = e,
      { group: a } = e,
      { label: r } = e,
      { inputtype: l = 'checkbox' } = e,
      { value: i = '' } = e,
      { className: o } = e,
      c = 'form-checkbox form-checkbox--icon';
    return (
      o && (c = `${o} ${c}`),
      (t.$$set = (t) => {
        'fieldName' in t && n(0, (s = t.fieldName)),
          'group' in t && n(1, (a = t.group)),
          'label' in t && n(2, (r = t.label)),
          'inputtype' in t && n(3, (l = t.inputtype)),
          'value' in t && n(4, (i = t.value)),
          'className' in t && n(6, (o = t.className));
      }),
      [s, a, r, l, i, c, o]
    );
  }
  class fn extends kt {
    constructor(t) {
      super(), yt(this, t, un, dn, l, { fieldName: 0, group: 1, label: 2, inputtype: 3, value: 4, className: 6 });
    }
  }
  function gn(t) {
    let e, n, s, a, r, l, i;
    const o = t[6].default,
      c = f(o, t, t[5], null);
    return {
      c() {
        (e = z('label')),
          (n = M(t[1])),
          (s = T()),
          (a = z('select')),
          c && c.c(),
          B(e, 'class', 'form-label'),
          B(e, 'for', 'select'),
          B(a, 'class', t[2]),
          B(a, 'id', 'select'),
          void 0 === t[0] && at(() => t[7].call(a));
      },
      m(o, d) {
        w(o, e, d),
          x(e, n),
          w(o, s, d),
          w(o, a, d),
          c && c.m(a, null),
          O(a, t[0]),
          (r = !0),
          l || ((i = H(a, 'change', t[7])), (l = !0));
      },
      p(t, [e]) {
        (!r || 2 & e) && E(n, t[1]),
          c && c.p && (!r || 32 & e) && m(c, o, t, t[5], r ? p(o, t[5], e, null) : h(t[5]), null),
          (!r || 4 & e) && B(a, 'class', t[2]),
          1 & e && O(a, t[0]);
      },
      i(t) {
        r || (pt(c, t), (r = !0));
      },
      o(t) {
        mt(c, t), (r = !1);
      },
      d(t) {
        t && y(e), t && y(s), t && y(a), c && c.d(t), (l = !1), i();
      },
    };
  }
  function pn(t, e, n) {
    let { $$slots: s = {}, $$scope: a } = e,
      { inputtype: r = 'text' } = e,
      { label: l } = e,
      { className: i } = e,
      { selected: o } = e,
      c = `form-input form-input--${r}`;
    return (
      i && (c = `${i} ${c}`),
      (t.$$set = (t) => {
        'inputtype' in t && n(3, (r = t.inputtype)),
          'label' in t && n(1, (l = t.label)),
          'className' in t && n(4, (i = t.className)),
          'selected' in t && n(0, (o = t.selected)),
          '$$scope' in t && n(5, (a = t.$$scope));
      }),
      [
        o,
        l,
        c,
        r,
        i,
        a,
        s,
        function () {
          (o = V(this)), n(0, o);
        },
      ]
    );
  }
  class mn extends kt {
    constructor(t) {
      super(), yt(this, t, pn, gn, l, { inputtype: 3, label: 1, className: 4, selected: 0 });
    }
  }
  function hn(t) {
    let e, n, s;
    return {
      c() {
        (e = z('span')), (n = M(t[0])), (s = M(':')), B(e, 'class', 'hidden');
      },
      m(a, r) {
        w(a, e, r), x(e, n), x(e, s), t[8](e);
      },
      p(t, e) {
        1 & e && E(n, t[0]);
      },
      d(n) {
        n && y(e), t[8](null);
      },
    };
  }
  function $n(e) {
    let n,
      s,
      a,
      r,
      l,
      i,
      o = e[0] && hn(e);
    return {
      c() {
        (n = z('div')),
          o && o.c(),
          (s = T()),
          (a = z('textarea')),
          B(a, 'class', e[4]),
          B(a, 'placeholder', e[0]),
          B(n, 'class', (r = `form-input-container flex flex--column border-radius padding-m--rl ${e[1]}`));
      },
      m(t, r) {
        w(t, n, r), o && o.m(n, null), x(n, s), x(n, a), e[9](a), l || ((i = H(a, 'focus', e[7])), (l = !0));
      },
      p(t, [e]) {
        t[0] ? (o ? o.p(t, e) : ((o = hn(t)), o.c(), o.m(n, s))) : o && (o.d(1), (o = null)),
          16 & e && B(a, 'class', t[4]),
          1 & e && B(a, 'placeholder', t[0]),
          2 & e &&
            r !== (r = `form-input-container flex flex--column border-radius padding-m--rl ${t[1]}`) &&
            B(n, 'class', r);
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), o && o.d(), e[9](null), (l = !1), i();
      },
    };
  }
  function vn(t, e, n) {
    let s,
      a,
      { inputtype: r = 'textarea' } = e,
      { label: l } = e,
      { className: i } = e,
      { size: o = 'padding-m--tb' } = e,
      c = `form-input form-input--${r} width-1of1`;
    return (
      i && (c = `${i} ${c}`),
      R(() => {
        s.addEventListener('focus', () => {
          s.parentElement.setAttribute('data-focus', 'true');
          s.previousElementSibling.classList.remove('hidden');
        }),
          s.addEventListener('focusout', () => {
            s.parentElement.setAttribute('data-focus', 'false'), 0 === s.value.length && a.classList.add('hidden');
          });
      }),
      (t.$$set = (t) => {
        'inputtype' in t && n(5, (r = t.inputtype)),
          'label' in t && n(0, (l = t.label)),
          'className' in t && n(6, (i = t.className)),
          'size' in t && n(1, (o = t.size));
      }),
      [
        l,
        o,
        s,
        a,
        c,
        r,
        i,
        function (e) {
          X.call(this, t, e);
        },
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (a = t), n(3, a);
          });
        },
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (s = t), n(2, s);
          });
        },
      ]
    );
  }
  class bn extends kt {
    constructor(t) {
      super(), yt(this, t, vn, $n, l, { inputtype: 5, label: 0, className: 6, size: 1 });
    }
  }
  function xn(t) {
    let e, n, s;
    return {
      c() {
        (e = z('span')), (n = M(t[1])), (s = M(':')), B(e, 'class', 'hidden');
      },
      m(a, r) {
        w(a, e, r), x(e, n), x(e, s), t[8](e);
      },
      p(t, e) {
        2 & e && E(n, t[1]);
      },
      d(n) {
        n && y(e), t[8](null);
      },
    };
  }
  function wn(e) {
    let n,
      s,
      a,
      r,
      l,
      i,
      o = e[1] && xn(e);
    return {
      c() {
        (n = z('div')),
          o && o.c(),
          (s = T()),
          (a = z('input')),
          B(a, 'type', e[0]),
          B(a, 'placeholder', e[1]),
          B(a, 'class', e[5]),
          B(n, 'class', (r = `form-input-container flex border-radius padding-m--rl ${e[2]}`));
      },
      m(t, r) {
        w(t, n, r), o && o.m(n, null), x(n, s), x(n, a), e[9](a), l || ((i = H(a, 'focus', e[7])), (l = !0));
      },
      p(t, [e]) {
        t[1] ? (o ? o.p(t, e) : ((o = xn(t)), o.c(), o.m(n, s))) : o && (o.d(1), (o = null)),
          1 & e && B(a, 'type', t[0]),
          2 & e && B(a, 'placeholder', t[1]),
          32 & e && B(a, 'class', t[5]),
          4 & e && r !== (r = `form-input-container flex border-radius padding-m--rl ${t[2]}`) && B(n, 'class', r);
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), o && o.d(), e[9](null), (l = !1), i();
      },
    };
  }
  function yn(t, e, n) {
    let s,
      a,
      { inputtype: r = 'text' } = e,
      { label: l } = e,
      { className: i } = e,
      { size: o = 'padding-m--tb' } = e,
      c = `form-input form-input--${r} width-1of1`;
    return (
      i && (c = `${i} ${c}`),
      R(() => {
        s.addEventListener('focus', () => {
          s.parentElement.setAttribute('data-focus', 'true');
          s.previousElementSibling.classList.remove('hidden');
        }),
          s.addEventListener('focusout', () => {
            s.parentElement.setAttribute('data-focus', 'false'), 0 === s.value.length && a.classList.add('hidden');
          });
      }),
      (t.$$set = (t) => {
        'inputtype' in t && n(0, (r = t.inputtype)),
          'label' in t && n(1, (l = t.label)),
          'className' in t && n(6, (i = t.className)),
          'size' in t && n(2, (o = t.size));
      }),
      [
        r,
        l,
        o,
        s,
        a,
        c,
        i,
        function (e) {
          X.call(this, t, e);
        },
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (a = t), n(4, a);
          });
        },
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (s = t), n(3, s);
          });
        },
      ]
    );
  }
  class kn extends kt {
    constructor(t) {
      super(), yt(this, t, yn, wn, l, { inputtype: 0, label: 1, className: 6, size: 2 });
    }
  }
  function zn(t) {
    let e;
    const n = t[8].default,
      s = f(n, t, t[9], null);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 512 & a) && m(s, n, t, t[9], e ? p(n, t[9], a, null) : h(t[9]), null);
      },
      i(t) {
        e || (pt(s, t), (e = !0));
      },
      o(t) {
        mt(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function Cn(t) {
    let e, n, s;
    var a = t[7];
    function r(t) {
      return {
        props: {
          class: t[1],
          size: t[0],
          label: t[5],
          inputtype: t[4],
          group: t[3],
          value: t[6],
          name: t[2],
          $$slots: { default: [zn] },
          $$scope: { ctx: t },
        },
      };
    }
    return (
      a && (n = _(a, r(t))),
      {
        c() {
          (e = z('div')), n && bt(n.$$.fragment), B(e, 'class', 'form-element margin-l--b');
        },
        m(t, a) {
          w(t, e, a), n && xt(n, e, null), (s = !0);
        },
        p(t, [s]) {
          const l = {};
          if (
            (2 & s && (l.class = t[1]),
            1 & s && (l.size = t[0]),
            32 & s && (l.label = t[5]),
            16 & s && (l.inputtype = t[4]),
            8 & s && (l.group = t[3]),
            64 & s && (l.value = t[6]),
            4 & s && (l.name = t[2]),
            512 & s && (l.$$scope = { dirty: s, ctx: t }),
            128 & s && a !== (a = t[7]))
          ) {
            if (n) {
              ft();
              const t = n;
              mt(t.$$.fragment, 1, 0, () => {
                wt(t, 1);
              }),
                gt();
            }
            a ? ((n = _(a, r(t))), bt(n.$$.fragment), pt(n.$$.fragment, 1), xt(n, e, null)) : (n = null);
          } else a && n.$set(l);
        },
        i(t) {
          s || (n && pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          n && mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && y(e), n && wt(n);
        },
      }
    );
  }
  function Mn(t, e, n) {
    let { $$slots: s = {}, $$scope: a } = e,
      { className: r } = e,
      { fieldName: l } = e,
      { group: i } = e,
      { inputtype: o = 'text' } = e,
      { label: c } = e,
      { value: d = '' } = e,
      { size: u = 'medium' } = e,
      f = kn;
    switch (o) {
      case 'select':
        f = mn;
        break;
      case 'checkbox':
      case 'radio':
        f = fn;
        break;
      case 'textarea':
        f = bn;
    }
    switch (u) {
      case 'small':
        u = 'padding-s--tb';
        break;
      case 'medium':
        u = 'padding-m--tb';
        break;
      case 'large':
        u = 'padding-l--tb';
    }
    return (
      (t.$$set = (t) => {
        'className' in t && n(1, (r = t.className)),
          'fieldName' in t && n(2, (l = t.fieldName)),
          'group' in t && n(3, (i = t.group)),
          'inputtype' in t && n(4, (o = t.inputtype)),
          'label' in t && n(5, (c = t.label)),
          'value' in t && n(6, (d = t.value)),
          'size' in t && n(0, (u = t.size)),
          '$$scope' in t && n(9, (a = t.$$scope));
      }),
      [u, r, l, i, o, c, d, f, s, a]
    );
  }
  class Tn extends kt {
    constructor(t) {
      super(),
        yt(this, t, Mn, Cn, l, { className: 1, fieldName: 2, group: 3, inputtype: 4, label: 5, value: 6, size: 0 });
    }
  }
  function Ln(t) {
    let e, n, s, a, r, l, i;
    return (
      (n = new te({ props: { className: 'bounce bounce1', name: 'circle-solid' } })),
      (a = new te({ props: { className: 'bounce bounce2', name: 'circle-solid' } })),
      (l = new te({ props: { className: 'bounce bounce3', name: 'circle-solid' } })),
      {
        c() {
          (e = z('div')),
            bt(n.$$.fragment),
            (s = T()),
            bt(a.$$.fragment),
            (r = T()),
            bt(l.$$.fragment),
            B(e, 'class', 'loader flex flex--center'),
            B(e, 'style', t[1]);
        },
        m(t, o) {
          w(t, e, o), xt(n, e, null), x(e, s), xt(a, e, null), x(e, r), xt(l, e, null), (i = !0);
        },
        p(t, n) {
          (!i || 2 & n) && B(e, 'style', t[1]);
        },
        i(t) {
          i || (pt(n.$$.fragment, t), pt(a.$$.fragment, t), pt(l.$$.fragment, t), (i = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), mt(a.$$.fragment, t), mt(l.$$.fragment, t), (i = !1);
        },
        d(t) {
          t && y(e), wt(n), wt(a), wt(l);
        },
      }
    );
  }
  function Hn(t) {
    let e,
      n,
      s = t[0] && Ln(t);
    return {
      c() {
        s && s.c(), (e = L());
      },
      m(t, a) {
        s && s.m(t, a), w(t, e, a), (n = !0);
      },
      p(t, [n]) {
        t[0]
          ? s
            ? (s.p(t, n), 1 & n && pt(s, 1))
            : ((s = Ln(t)), s.c(), pt(s, 1), s.m(e.parentNode, e))
          : s &&
            (ft(),
            mt(s, 1, 1, () => {
              s = null;
            }),
            gt());
      },
      i(t) {
        n || (pt(s), (n = !0));
      },
      o(t) {
        mt(s), (n = !1);
      },
      d(t) {
        s && s.d(t), t && y(e);
      },
    };
  }
  function Sn(t, e, n) {
    let s,
      { delay: a = 150 } = e,
      { size: r = 18 } = e,
      l = !1;
    return (
      setTimeout(() => {
        n(0, (l = !0));
      }, a),
      (t.$$set = (t) => {
        'delay' in t && n(2, (a = t.delay)), 'size' in t && n(3, (r = t.size));
      }),
      (t.$$.update = () => {
        8 & t.$$.dirty && n(1, (s = `--icon-size: ${r}px;`));
      }),
      [l, s, a, r]
    );
  }
  class Bn extends kt {
    constructor(t) {
      super(), yt(this, t, Sn, Hn, l, { delay: 2, size: 3 });
    }
  }
  function Nn(t) {
    let e, n, s, a, r;
    const l = t[7].default,
      i = f(l, t, t[6], null);
    return {
      c() {
        (e = z('button')), i && i.c(), B(e, 'class', t[0]), B(e, 'data-selected', (n = t[1] === t[2]));
      },
      m(n, l) {
        w(n, e, l), i && i.m(e, null), (s = !0), a || ((r = H(e, 'click', S(t[8]))), (a = !0));
      },
      p(t, [a]) {
        i && i.p && (!s || 64 & a) && m(i, l, t, t[6], s ? p(l, t[6], a, null) : h(t[6]), null),
          (!s || 1 & a) && B(e, 'class', t[0]),
          (!s || (2 & a && n !== (n = t[1] === t[2]))) && B(e, 'data-selected', n);
      },
      i(t) {
        s || (pt(i, t), (s = !0));
      },
      o(t) {
        mt(i, t), (s = !1);
      },
      d(t) {
        t && y(e), i && i.d(t), (a = !1), r();
      },
    };
  }
  function An(t, e, n) {
    let s,
      a,
      { $$slots: r = {}, $$scope: l } = e;
    const i = {},
      { registerTab: o, selectButton: c, selectedButton: d } = Y('BUTTONS');
    u(t, d, (t) => n(1, (a = t))), o(i);
    let { className: f } = e;
    const g = 'button';
    return (
      (t.$$set = (t) => {
        'className' in t && n(5, (f = t.className)), '$$scope' in t && n(6, (l = t.$$scope));
      }),
      (t.$$.update = () => {
        32 & t.$$.dirty && n(0, (s = f ? `${g} ${f}` : g));
      }),
      [s, a, i, c, d, f, l, r, () => c(i)]
    );
  }
  class En extends kt {
    constructor(t) {
      super(), yt(this, t, An, Nn, l, { className: 5 });
    }
  }
  function jn(t) {
    let e;
    const n = t[4].default,
      s = f(n, t, t[3], null);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 8 & a) && m(s, n, t, t[3], e ? p(n, t[3], a, null) : h(t[3]), null);
      },
      i(t) {
        e || (pt(s, t), (e = !0));
      },
      o(t) {
        mt(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function Fn(t) {
    let e,
      n,
      s = t[0] === t[1] && jn(t);
    return {
      c() {
        s && s.c(), (e = L());
      },
      m(t, a) {
        s && s.m(t, a), w(t, e, a), (n = !0);
      },
      p(t, [n]) {
        t[0] === t[1]
          ? s
            ? (s.p(t, n), 1 & n && pt(s, 1))
            : ((s = jn(t)), s.c(), pt(s, 1), s.m(e.parentNode, e))
          : s &&
            (ft(),
            mt(s, 1, 1, () => {
              s = null;
            }),
            gt());
      },
      i(t) {
        n || (pt(s), (n = !0));
      },
      o(t) {
        mt(s), (n = !1);
      },
      d(t) {
        s && s.d(t), t && y(e);
      },
    };
  }
  function On(t, e, n) {
    let s,
      { $$slots: a = {}, $$scope: r } = e;
    const l = {},
      { registerPanel: i, selectedPanel: o } = Y('BUTTONS');
    return (
      u(t, o, (t) => n(0, (s = t))),
      i(l),
      (t.$$set = (t) => {
        '$$scope' in t && n(3, (r = t.$$scope));
      }),
      [s, l, o, r, a]
    );
  }
  class Vn extends kt {
    constructor(t) {
      super(), yt(this, t, On, Fn, l, {});
    }
  }
  function In(t) {
    let e, n;
    const s = t[5].default,
      a = f(s, t, t[4], null);
    return {
      c() {
        (e = z('div')), a && a.c(), B(e, 'class', t[0]);
      },
      m(t, s) {
        w(t, e, s), a && a.m(e, null), (n = !0);
      },
      p(t, [r]) {
        a && a.p && (!n || 16 & r) && m(a, s, t, t[4], n ? p(s, t[4], r, null) : h(t[4]), null),
          (!n || 1 & r) && B(e, 'class', t[0]);
      },
      i(t) {
        n || (pt(a, t), (n = !0));
      },
      o(t) {
        mt(a, t), (n = !1);
      },
      d(t) {
        t && y(e), a && a.d(t);
      },
    };
  }
  function Dn(t, e, n) {
    let s,
      { $$slots: a = {}, $$scope: r } = e,
      { type: l = 'tabs' } = e,
      { className: i } = e,
      o = '';
    switch (l) {
      case 'tabs':
        o = 'tabs';
        break;
      case 'pillnavigation':
        o = 'pillnavigation toggle toggle--buttons';
    }
    return (
      (t.$$set = (t) => {
        'type' in t && n(1, (l = t.type)),
          'className' in t && n(2, (i = t.className)),
          '$$scope' in t && n(4, (r = t.$$scope));
      }),
      (t.$$.update = () => {
        12 & t.$$.dirty && n(0, (s = i ? `${o} ${i}` : o));
      }),
      [s, l, i, o, r, a]
    );
  }
  class _n extends kt {
    constructor(t) {
      super(), yt(this, t, Dn, In, l, { type: 1, className: 2 });
    }
  }
  function Pn(t) {
    let e, n;
    const s = t[3].default,
      a = f(s, t, t[2], null);
    return {
      c() {
        (e = z('div')), a && a.c(), B(e, 'class', t[0]);
      },
      m(t, s) {
        w(t, e, s), a && a.m(e, null), (n = !0);
      },
      p(t, [r]) {
        a && a.p && (!n || 4 & r) && m(a, s, t, t[2], n ? p(s, t[2], r, null) : h(t[2]), null),
          (!n || 1 & r) && B(e, 'class', t[0]);
      },
      i(t) {
        n || (pt(a, t), (n = !0));
      },
      o(t) {
        mt(a, t), (n = !1);
      },
      d(t) {
        t && y(e), a && a.d(t);
      },
    };
  }
  function qn(t, e, n) {
    let { $$slots: s = {}, $$scope: a } = e;
    const r = Mt(0),
      l = [],
      i = [],
      o = Mt(null),
      c = Mt(null);
    r.subscribe((t) => {
      o.set(l[t]), c.set(i[t]);
    }),
      Z('BUTTONS', {
        registerPanel: (t) => {
          i.push(t),
            c.update((e) => e || t),
            G(() => {
              const e = i.indexOf(t);
              i.splice(e, 1), c.update((n) => (n === t ? i[e] || i[i.length - 1] : n));
            });
        },
        registerTab: (t) => {
          l.push(t),
            o.update((e) => e || t),
            G(() => {
              const e = l.indexOf(t);
              l.splice(e, 1), o.update((n) => (n === t ? l[e] || l[l.length - 1] : n));
            });
        },
        selectButton: (t) => {
          const e = l.indexOf(t);
          r.set(e);
        },
        selectedButton: o,
        selectedPanel: c,
      });
    let { className: d } = e;
    return (
      (t.$$set = (t) => {
        'className' in t && n(0, (d = t.className)), '$$scope' in t && n(2, (a = t.$$scope));
      }),
      [d, r, a, s]
    );
  }
  class Rn extends kt {
    constructor(t) {
      super(), yt(this, t, qn, Pn, l, { selectedId: 1, className: 0 });
    }
    get selectedId() {
      return this.$$.ctx[1];
    }
  }
  const Wn = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Fusce ullamcorper nibh quis dui consequat iaculis.',
      'Integer pretium dapibus orci quis sagittis.',
      'Maecenas non diam eu nibh lobortis vulputate.',
      'Fusce pharetra pretium convallis.',
      'Donec blandit purus sed orci ornare, a egestas justo sagittis.',
      'Maecenas in dui lacinia, consectetur lorem quis, semper lacus.',
      'Aenean ut iaculis neque. Etiam bibendum lacus ut commodo vehicula.',
      'Integer non venenatis ante. Pellentesque egestas venenatis nisl, quis blandit dui porttitor ut.',
      'Quisque dictum tortor sit amet ornare fringilla.',
      'Duis metus lectus, imperdiet consequat libero a, tristique pellentesque dolor.',
      'Fusce augue arcu, sagittis ut porttitor quis, tempor in velit.',
      'Integer pulvinar risus vitae tortor accumsan cursus. Integer in metus pulvinar, posuere urna a, scelerisque mi.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices placerat auctor.',
      'Mauris molestie hendrerit libero, vitae ultrices elit efficitur nec.',
      'Curabitur non lectus sit amet magna eleifend sagittis. Suspendisse ac efficitur elit.',
      'Sed consectetur laoreet mollis. Quisque pulvinar pretium nisi.',
      'Mauris interdum eleifend risus, quis dapibus augue congue non.',
      'Ut quis efficitur urna. Fusce sem sapien, porta ac ultricies eget, ultrices dapibus lacus.',
      'Fusce vehicula, dui quis faucibus lobortis, mi mauris vestibulum dui, quis tempus mi elit ut orci.',
      'Vestibulum porta nisi nisi.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare massa tellus, feugiat venenatis diam vehicula ornare.',
      'Nullam sit amet odio consectetur, egestas lorem eget, pellentesque odio.',
      'Quisque laoreet enim eros, eget commodo odio imperdiet non.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      'Mauris fringilla sollicitudin lobortis. Nam sit amet aliquet sem, eu scelerisque metus.',
      'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Pellentesque ut lectus vitae odio interdum congue.',
      'Pellentesque posuere bibendum interdum.',
      'Proin quis neque efficitur, sollicitudin risus consectetur, sagittis ante.',
      'Nunc nulla metus, luctus sit amet fermentum quis, lacinia sed quam.',
      'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Duis nec magna metus. Ut hendrerit convallis metus quis dictum.',
      'Phasellus bibendum, ex a posuere rhoncus, mi velit fermentum mauris, id porttitor odio augue id justo.',
      'Nulla malesuada justo massa, in luctus diam suscipit at.',
      'Praesent commodo arcu in nisi eleifend auctor non et dui.',
      'Duis at tellus ac purus tincidunt condimentum.',
      'Sed id finibus nulla, sed ullamcorper neque.',
      'Mauris accumsan magna nec nisi tempor, eu consectetur tortor volutpat.',
      'Sed eget elementum odio.',
      'Aliquam luctus lectus at nunc vehicula, in malesuada est fermentum.',
      'Aliquam eget turpis nec dui luctus pretium.',
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Integer eu aliquam dolor.',
      'Maecenas et tellus nisi.',
      'Integer gravida finibus ex vel pretium.',
      'Cras ac orci eget magna aliquet cursus.',
      'Cras placerat, est sit amet sodales fringilla, nunc urna ornare neque, eget pharetra nunc odio vitae nulla.',
      'Aliquam euismod sodales elit ut sollicitudin.',
    ],
    Gn = () => Wn[Math.floor(50 * Math.random())],
    Un = () => Wn[Math.floor(50 * Math.random())].split(' ')[0];
  function Zn(t = 3) {
    let e = '';
    for (let n = t; n--; ) e += `<p>${Gn()}</p>`;
    return e;
  }
  const Yn = Mt(localStorage.getItem('sourceType') || 'html');
  function Xn(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [Qn] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('table')),
            (s.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>tabs</td> \n        <td>ITabsConfig[]</td> \n        <td></td> \n        <td>Array of tab data. See <span class="badge badge--small" data-type="secondary">Tab</span> props below for details</td></tr> \n      <tr><th colspan="4">Tab</th></tr> \n      <tr><td>content</td> \n        <td>string / html</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>title</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr></tbody>'),
            B(s, 'class', 'table');
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), w(t, s, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), t && y(s);
        },
      }
    );
  }
  function Qn(e) {
    let n;
    return {
      c() {
        n = M("import { Accordion } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Kn(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ts] }, $$scope: { ctx: t } } })),
      (s = new Xt({ props: { language: 'js', $$slots: { default: [es] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment);
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t);
        },
      }
    );
  }
  function Jn(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ns] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ts(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="accordion card-mode padding-l ff-secondary width-1of1">\n  <div class="accordion-tab margin-m--b">\n    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">\n      <span class="fontweight-bold fontsize-medium">Tab 1</span>\n      <svg viewBox="0 0 50 50">\n        <use xlink:href="#angle-down"></use>\n      </svg>\n    </div>\n    <div class="accordion-body padding-m padding-l--rl fontsize-small">\n      Content 1\n    </div>\n  </div>\n  <div class="accordion-tab margin-m--b">\n    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">\n      <span class="fontweight-bold fontsize-medium">Tab 2</span>\n      <svg viewBox="0 0 50 50">\n        <use xlink:href="#angle-down"></use>\n      </svg>\n    </div>\n    <div class="accordion-body padding-m padding-l--rl fontsize-small">\n      Content 2\n    </div>\n  </div>\n  <div class="accordion-tab margin-m--b">\n    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">\n      <span class="fontweight-bold fontsize-medium">Tab 3</span>\n      <svg viewBox="0 0 50 50">\n        <use xlink:href="#angle-down"></use>\n      </svg>\n    </div>\n    <div class="accordion-body padding-m padding-l--rl fontsize-small">\n      Content 3\n    </div>\n  </div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function es(e) {
    let n;
    return {
      c() {
        n = M(
          'const accordions = document.querySelectorAll(".accordion");\nfor (const accordion of accordions) {\n  const tabs = accordion.querySelectorAll(".accordion-tab");\n  for (const tab of tabs) {\n    const head = tab.querySelector(".accordion-header");\n    head.addEventListener(\'click\', () => {\n      for (const othertab of tabs) {\n        if (othertab !== tab) {\n          othertab.classList.remove(\'accordion-expanded\');\n        }\n      }\n      tab.classList.toggle(\'accordion-expanded\');\n    });\n  }\n}'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ns(e) {
    let n;
    return {
      c() {
        n = M('<Accordion {tabs} />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ss(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d = 'svelte' === t[0] && Xn(t);
    a = new re({ props: { tabs: t[1] } });
    const u = [Jn, Kn],
      f = [];
    function g(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (l = g(t)),
      (i = f[l] = u[l](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Accordion'),
            (n = T()),
            d && d.c(),
            (s = T()),
            bt(a.$$.fragment),
            (r = T()),
            i.c(),
            (o = L()),
            B(e, 'class', 'color--eb');
        },
        m(t, i) {
          w(t, e, i),
            w(t, n, i),
            d && d.m(t, i),
            w(t, s, i),
            xt(a, t, i),
            w(t, r, i),
            f[l].m(t, i),
            w(t, o, i),
            (c = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? d
              ? 1 & e && pt(d, 1)
              : ((d = Xn(t)), d.c(), pt(d, 1), d.m(s.parentNode, s))
            : d &&
              (ft(),
              mt(d, 1, 1, () => {
                d = null;
              }),
              gt());
          let n = l;
          (l = g(t)),
            l !== n &&
              (ft(),
              mt(f[n], 1, 1, () => {
                f[n] = null;
              }),
              gt(),
              (i = f[l]),
              i || ((i = f[l] = u[l](t)), i.c()),
              pt(i, 1),
              i.m(o.parentNode, o));
        },
        i(t) {
          c || (pt(d), pt(a.$$.fragment, t), pt(i), (c = !0));
        },
        o(t) {
          mt(d), mt(a.$$.fragment, t), mt(i), (c = !1);
        },
        d(t) {
          t && y(e), t && y(n), d && d.d(t), t && y(s), wt(a, t), t && y(r), f[l].d(t), t && y(o);
        },
      }
    );
  }
  function as(t, e, n) {
    let s;
    u(t, Yn, (t) => n(0, (s = t)));
    const a = [];
    for (let t = 0; t < 3; t++) a.push({ content: `<h2>Test af h2</h2>${Zn()}`, title: `Tab ${t + 1}` });
    return [s, a];
  }
  Yn.subscribe((t) => {
    localStorage.setItem('sourceType', t);
  });
  function rs(t = 640, e = 360) {
    const n = [
      le.breaking,
      le.bruger,
      le.eb,
      le.flash,
      le.forbrug,
      le.livescore,
      le.native,
      le.nyheder,
      le.sexsamliv,
      le.sport,
      le.underholdning,
    ];
    return {
      breaking: Math.random() < 0.1,
      colorName: n[Math.floor(Math.random() * n.length)],
      media:
        Math.random() < 0.7
          ? { src: `https://loremflickr.com/${t}/${e}/city,people,nature,animal?random=${Math.random()}` }
          : null,
      premium: Math.random() < 0.3,
      published: ls().toString(),
      saved: Math.random() < 0.5,
      section: Un(),
      title: Gn(),
      truncateTitle: !1,
      update: Math.random() < 0.5,
      url: '',
      videoIcon: Math.random() < 0.3,
    };
  }
  function ls() {
    const t = new Date(2019, 0, 1),
      e = new Date();
    return new Date(t.getTime() + Math.random() * (e.getTime() - t.getTime()));
  }
  function is(e) {
    let n;
    return {
      c() {
        (n = z('p')), (n.textContent = 'ArticleCard er en ren Svelte component.');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function os(t) {
    let n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C, M, L, H, S, N;
    n = new Xt({ props: { language: 'js', $$slots: { default: [cs] }, $$scope: { ctx: t } } });
    const A = [rs()];
    let E = {};
    for (let t = 0; t < A.length; t += 1) E = e(E, A[t]);
    (l = new qe({ props: E })),
      (o = new Xt({ props: { language: 'html', $$slots: { default: [ds] }, $$scope: { ctx: t } } }));
    const j = [{ className: 'margin-m--b' }, { cardType: 'small-media' }, rs(250, 120)];
    let F = {};
    for (let t = 0; t < j.length; t += 1) F = e(F, j[t]);
    f = new qe({ props: F });
    const O = [{ cardType: 'small-media--reverse' }, rs(250, 120)];
    let V = {};
    for (let t = 0; t < O.length; t += 1) V = e(V, O[t]);
    return (
      (p = new qe({ props: V })),
      (h = new Xt({ props: { language: 'html', $$slots: { default: [us] }, $$scope: { ctx: t } } })),
      (x = new qe({ props: { loading: !0, colorName: 'graa7', className: 'margin-m--b' } })),
      (C = new qe({ props: { loading: !0, cardType: 'small-media', colorName: 'graa7', className: 'margin-m--b' } })),
      (L = new qe({
        props: { loading: !0, cardType: 'small-media--reverse', colorName: 'graa7', className: 'margin-m--b' },
      })),
      (S = new Xt({ props: { language: 'html', $$slots: { default: [fs] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(n.$$.fragment),
            (s = T()),
            (a = z('table')),
            (a.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>colorClass</td> \n        <td>string</td> \n        <td></td> \n        <td>EB color <em>(e.g. sport)</em></td></tr> \n      <tr><td>src</td> \n        <td>string</td> \n        <td></td> \n        <td>Converts the ArticleCard into a clickable link</td></tr> \n      <tr><td>breaking</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Force breaking color</td></tr> \n      <tr><td>update</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Add update icon to media</td></tr> \n      <tr><td>premium</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td></tr> \n      <tr><td>videoIcon</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Shows a videoPlay icon on the articleCard inside the image container</td></tr> \n      <tr><td>loading</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Converts the ArticleCard into a loading placeholder</td></tr> \n      <tr><td>maxLines</td> \n        <td>number</td> \n        <td>4</td> \n        <td>Sets the value of <code>--max-lines</code> if truncate is enabled</td></tr> \n      <tr><td>media</td> \n        <td>IMediaOptions</td> \n        <td></td> \n        <td>Adds a image, see <span class="badge badge--small" data-type="secondary">Media</span> props below for details</td></tr> \n      <tr><td>section</td> \n        <td>string</td> \n        <td></td> \n        <td>Displays the section meta with a tag icon</td></tr> \n      <tr><td>style</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>published</td> \n        <td>date string</td> \n        <td></td> \n        <td>Displays relative time meta with a icon</td></tr> \n      <tr><td>truncateTitle</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td></tr> \n      <tr><td>cardType</td> \n        <td>&#39;mode&#39; | &#39;small-media&#39; | &#39;small-media--reverse&#39;</td> \n        <td></td> \n        <td>Display types. See examples below</td></tr> \n      <tr><th colspan="4">Media</th></tr> \n      <tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>height</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>src <span class="badge badge--small" data-type="primary">required</span></td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>width</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr></tbody>'),
            (r = T()),
            bt(l.$$.fragment),
            (i = T()),
            bt(o.$$.fragment),
            (c = T()),
            (d = z('h3')),
            (d.textContent = 'Small-media'),
            (u = T()),
            bt(f.$$.fragment),
            (g = T()),
            bt(p.$$.fragment),
            (m = T()),
            bt(h.$$.fragment),
            ($ = T()),
            (v = z('h3')),
            (v.textContent = 'Loading placeholder'),
            (b = T()),
            bt(x.$$.fragment),
            (k = T()),
            bt(C.$$.fragment),
            (M = T()),
            bt(L.$$.fragment),
            (H = T()),
            bt(S.$$.fragment),
            B(a, 'class', 'table');
        },
        m(t, e) {
          xt(n, t, e),
            w(t, s, e),
            w(t, a, e),
            w(t, r, e),
            xt(l, t, e),
            w(t, i, e),
            xt(o, t, e),
            w(t, c, e),
            w(t, d, e),
            w(t, u, e),
            xt(f, t, e),
            w(t, g, e),
            xt(p, t, e),
            w(t, m, e),
            xt(h, t, e),
            w(t, $, e),
            w(t, v, e),
            w(t, b, e),
            xt(x, t, e),
            w(t, k, e),
            xt(C, t, e),
            w(t, M, e),
            xt(L, t, e),
            w(t, H, e),
            xt(S, t, e),
            (N = !0);
        },
        p(t, e) {
          const s = {};
          2 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
          const a = 0 & e ? ht(A, [$t(rs())]) : {};
          l.$set(a);
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), o.$set(r);
          const i = 0 & e ? ht(j, [j[0], j[1], $t(rs(250, 120))]) : {};
          f.$set(i);
          const c = 0 & e ? ht(O, [O[0], $t(rs(250, 120))]) : {};
          p.$set(c);
          const d = {};
          2 & e && (d.$$scope = { dirty: e, ctx: t }), h.$set(d);
          const u = {};
          2 & e && (u.$$scope = { dirty: e, ctx: t }), S.$set(u);
        },
        i(t) {
          N ||
            (pt(n.$$.fragment, t),
            pt(l.$$.fragment, t),
            pt(o.$$.fragment, t),
            pt(f.$$.fragment, t),
            pt(p.$$.fragment, t),
            pt(h.$$.fragment, t),
            pt(x.$$.fragment, t),
            pt(C.$$.fragment, t),
            pt(L.$$.fragment, t),
            pt(S.$$.fragment, t),
            (N = !0));
        },
        o(t) {
          mt(n.$$.fragment, t),
            mt(l.$$.fragment, t),
            mt(o.$$.fragment, t),
            mt(f.$$.fragment, t),
            mt(p.$$.fragment, t),
            mt(h.$$.fragment, t),
            mt(x.$$.fragment, t),
            mt(C.$$.fragment, t),
            mt(L.$$.fragment, t),
            mt(S.$$.fragment, t),
            (N = !1);
        },
        d(t) {
          wt(n, t),
            t && y(s),
            t && y(a),
            t && y(r),
            wt(l, t),
            t && y(i),
            wt(o, t),
            t && y(c),
            t && y(d),
            t && y(u),
            wt(f, t),
            t && y(g),
            wt(p, t),
            t && y(m),
            wt(h, t),
            t && y($),
            t && y(v),
            t && y(b),
            wt(x, t),
            t && y(k),
            wt(C, t),
            t && y(M),
            wt(L, t),
            t && y(H),
            wt(S, t);
        },
      }
    );
  }
  function cs(e) {
    let n;
    return {
      c() {
        n = M("import { ArticleCard } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ds(e) {
    let n;
    return {
      c() {
        n = M('<ArticleCard {...article} />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function us(e) {
    let n;
    return {
      c() {
        n = M(
          '<ArticleCard className="small-media" {...article} />\n<ArticleCard className="small-media--reverse" {...article} />'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function fs(e) {
    let n;
    return {
      c() {
        n = M(
          '<ArticleCard loading={true} colorName="graa7" />\n<ArticleCard loading={true} cardType="small-media" colorName="graa7" />\n<ArticleCard loading={true} cardType="small-media--reverse" colorName="graa7" />'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function gs(t) {
    let e, n, s, a, r, l;
    const i = [os, is],
      o = [];
    function c(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (s = c(t)),
      (a = o[s] = i[s](t)),
      {
        c() {
          (e = z('h1')), (e.textContent = 'Article Card'), (n = T()), a.c(), (r = L()), B(e, 'class', 'color--eb');
        },
        m(t, a) {
          w(t, e, a), w(t, n, a), o[s].m(t, a), w(t, r, a), (l = !0);
        },
        p(t, [e]) {
          let n = s;
          (s = c(t)),
            s === n
              ? o[s].p(t, e)
              : (ft(),
                mt(o[n], 1, 1, () => {
                  o[n] = null;
                }),
                gt(),
                (a = o[s]),
                a ? a.p(t, e) : ((a = o[s] = i[s](t)), a.c()),
                pt(a, 1),
                a.m(r.parentNode, r));
        },
        i(t) {
          l || (pt(a), (l = !0));
        },
        o(t) {
          mt(a), (l = !1);
        },
        d(t) {
          t && y(e), t && y(n), o[s].d(t), t && y(r);
        },
      }
    );
  }
  function ps(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function ms(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function hs(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function $s(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function vs(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function bs(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function xs(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function ws(t) {
    let n, s;
    const a = [t[9], { width: '240px' }, { truncateTitle: !0 }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 1 & e ? ht(a, [$t(t[9]), a[1], a[2]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function ys(t) {
    let e,
      n,
      s = t[0],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = ws(xs(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (1 & n) {
          let l;
          for (s = t[0], l = 0; l < s.length; l += 1) {
            const r = xs(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = ws(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function ks(t) {
    let n, s;
    const a = [t[9], { width: '240px' }, { truncateTitle: !0 }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 2 & e ? ht(a, [$t(t[9]), a[1], a[2]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function zs(t) {
    let e,
      n,
      s = t[1],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = ks(bs(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (2 & n) {
          let l;
          for (s = t[1], l = 0; l < s.length; l += 1) {
            const r = bs(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = ks(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function Cs(t) {
    let n, s;
    const a = [t[9], { width: '240px' }, { truncateTitle: !0 }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 4 & e ? ht(a, [$t(t[9]), a[1], a[2]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function Ms(t) {
    let e,
      n,
      s = t[2],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = Cs(vs(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (4 & n) {
          let l;
          for (s = t[2], l = 0; l < s.length; l += 1) {
            const r = vs(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = Cs(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function Ts(t) {
    let n, s;
    const a = [t[9], { width: '240px' }, { truncateTitle: !0 }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 8 & e ? ht(a, [$t(t[9]), a[1], a[2]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function Ls(t) {
    let e,
      n,
      s = t[3],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = Ts($s(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (8 & n) {
          let l;
          for (s = t[3], l = 0; l < s.length; l += 1) {
            const r = $s(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = Ts(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function Hs(t) {
    let n, s, a, r;
    const l = [t[9], { width: '240px' }, { truncateTitle: !1 }];
    let i = {};
    for (let t = 0; t < l.length; t += 1) i = e(i, l[t]);
    return (
      (s = new qe({ props: i })),
      {
        c() {
          (n = z('div')), bt(s.$$.fragment), (a = T());
        },
        m(t, e) {
          w(t, n, e), xt(s, n, null), x(n, a), (r = !0);
        },
        p(t, e) {
          const n = 16 & e ? ht(l, [$t(t[9]), l[1], l[2]]) : {};
          s.$set(n);
        },
        i(t) {
          r || (pt(s.$$.fragment, t), (r = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && y(n), wt(s);
        },
      }
    );
  }
  function Ss(t) {
    let e,
      n,
      s = t[4],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = Hs(hs(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (16 & n) {
          let l;
          for (s = t[4], l = 0; l < s.length; l += 1) {
            const r = hs(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = Hs(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function Bs(t) {
    let n, s;
    const a = [t[9], { width: '240px' }, { truncateTitle: !0 }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 32 & e ? ht(a, [$t(t[9]), a[1], a[2]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function Ns(t) {
    let e,
      n,
      s = t[5],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = Bs(ms(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (32 & n) {
          let l;
          for (s = t[5], l = 0; l < s.length; l += 1) {
            const r = ms(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = Bs(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function As(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      k,
      C,
      L,
      H,
      S,
      N,
      A,
      j,
      O,
      V,
      I,
      D,
      _,
      P,
      q = t[0].length + '';
    return (
      (d = new nn({ props: { $$slots: { default: [ys] }, $$scope: { ctx: t } } })),
      (h = new nn({ props: { $$slots: { default: [zs] }, $$scope: { ctx: t } } })),
      (k = new nn({ props: { $$slots: { default: [Ms] }, $$scope: { ctx: t } } })),
      (S = new nn({ props: { $$slots: { default: [Ls] }, $$scope: { ctx: t } } })),
      (O = new nn({ props: { $$slots: { default: [Ss] }, $$scope: { ctx: t } } })),
      (_ = new nn({ props: { $$slots: { default: [Ns] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('div')),
            (n = z('h1')),
            (n.textContent = 'Article list'),
            (s = T()),
            (a = z('p')),
            (a.textContent =
              'The idea of the article list component, is that it can act based on the amount of articles added to the view.'),
            (r = T()),
            (l = z('p')),
            (l.textContent = 'Currently it makes the most sense when using HorizontalScroll'),
            (i = M('\n  Updating articles in list - Items in list: ')),
            (o = M(q)),
            (c = T()),
            bt(d.$$.fragment),
            (u = T()),
            (f = z('h3')),
            (f.textContent = 'Different amounts of items in list'),
            (g = T()),
            (p = z('h4')),
            (p.textContent = '1'),
            (m = T()),
            bt(h.$$.fragment),
            ($ = T()),
            (v = z('h4')),
            (v.textContent = '2'),
            (b = T()),
            bt(k.$$.fragment),
            (C = T()),
            (L = z('h4')),
            (L.textContent = '3'),
            (H = T()),
            bt(S.$$.fragment),
            (N = T()),
            (A = z('h4')),
            (A.textContent = '4'),
            (j = T()),
            bt(O.$$.fragment),
            (V = T()),
            (I = z('h4')),
            (I.textContent = '5'),
            (D = T()),
            bt(_.$$.fragment),
            B(e, 'class', 'grid-width--xlarge'),
            F(e, 'overflow', 'hidden');
        },
        m(t, y) {
          w(t, e, y),
            x(e, n),
            x(e, s),
            x(e, a),
            x(e, r),
            x(e, l),
            x(e, i),
            x(e, o),
            x(e, c),
            xt(d, e, null),
            x(e, u),
            x(e, f),
            x(e, g),
            x(e, p),
            x(e, m),
            xt(h, e, null),
            x(e, $),
            x(e, v),
            x(e, b),
            xt(k, e, null),
            x(e, C),
            x(e, L),
            x(e, H),
            xt(S, e, null),
            x(e, N),
            x(e, A),
            x(e, j),
            xt(O, e, null),
            x(e, V),
            x(e, I),
            x(e, D),
            xt(_, e, null),
            (P = !0);
        },
        p(t, [e]) {
          (!P || 1 & e) && q !== (q = t[0].length + '') && E(o, q);
          const n = {};
          4194305 & e && (n.$$scope = { dirty: e, ctx: t }), d.$set(n);
          const s = {};
          4194304 & e && (s.$$scope = { dirty: e, ctx: t }), h.$set(s);
          const a = {};
          4194304 & e && (a.$$scope = { dirty: e, ctx: t }), k.$set(a);
          const r = {};
          4194304 & e && (r.$$scope = { dirty: e, ctx: t }), S.$set(r);
          const l = {};
          4194304 & e && (l.$$scope = { dirty: e, ctx: t }), O.$set(l);
          const i = {};
          4194304 & e && (i.$$scope = { dirty: e, ctx: t }), _.$set(i);
        },
        i(t) {
          P ||
            (pt(d.$$.fragment, t),
            pt(h.$$.fragment, t),
            pt(k.$$.fragment, t),
            pt(S.$$.fragment, t),
            pt(O.$$.fragment, t),
            pt(_.$$.fragment, t),
            (P = !0));
        },
        o(t) {
          mt(d.$$.fragment, t),
            mt(h.$$.fragment, t),
            mt(k.$$.fragment, t),
            mt(S.$$.fragment, t),
            mt(O.$$.fragment, t),
            mt(_.$$.fragment, t),
            (P = !1);
        },
        d(t) {
          t && y(e), wt(d), wt(h), wt(k), wt(S), wt(O), wt(_);
        },
      }
    );
  }
  const Es = 11;
  function js(t, e, n) {
    let s;
    const a = [rs(640, 360)],
      r = [rs(640, 360), rs(640, 360)],
      l = [rs(640, 360), rs(640, 360), rs(640, 360)],
      i = [rs(640, 360), rs(640, 360), rs(640, 360), rs(640, 360)],
      o = [rs(640, 360), rs(640, 360), rs(640, 360), rs(640, 360), rs(640, 360)],
      c = Mt([rs(640, 360)]);
    u(t, c, (t) => n(0, (s = t)));
    let d = s.length;
    const f = setInterval(() => {
      d < Es ? c.update((t) => (t.push(rs(640, 360)), t)) : clearInterval(f), d++;
    }, 3e3);
    return [s, a, r, l, i, o, c];
  }
  function Fs(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, k, C, L, H, S, N, A, E, j, F;
    return (
      (i = new Xt({ props: { language: 'html', $$slots: { default: [Vs] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [Is] }, $$scope: { ctx: t } } })),
      (b = new Xt({ props: { language: 'html', $$slots: { default: [Ds] }, $$scope: { ctx: t } } })),
      (N = new te({
        props: {
          name: 'lightning',
          className: 'bg--white color--flash border-radius-s padding-s margin-s--r',
          style: 'margin-left: -1px;',
          width: '15',
        },
      })),
      (j = new Xt({ props: { language: 'html', $$slots: { default: [_s] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('p')),
            (e.textContent = 'Badges are used as tags. The size can be set through font-size.'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Default'),
            (a = T()),
            (r = z('div')),
            (r.innerHTML = '<span class="badge">Badge</span>'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h3')),
            (c.textContent = 'Variations'),
            (d = T()),
            (u = z('div')),
            (u.innerHTML =
              '<span class="badge margin-s" data-type="primary">Primary</span> \n    <span class="badge margin-s" data-type="secondary">Secondary</span> \n    <span class="badge margin-s" data-type="success">Success</span> \n    <span class="badge margin-s" data-type="danger">Danger</span>'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'Color examples from eb-colors'),
            (h = T()),
            ($ = z('div')),
            ($.innerHTML =
              '<span class="badge bg--bluedark margin-s">bg-bluedark</span> \n    <span class="badge bg--green margin-s">bg-green</span> \n    <span class="badge bg--greendark margin-s">bg-greendark</span>'),
            (v = T()),
            bt(b.$$.fragment),
            (k = T()),
            (C = z('h3')),
            (C.textContent = 'Advanced examples'),
            (L = T()),
            (H = z('div')),
            (S = z('span')),
            bt(N.$$.fragment),
            (A = M('\n      UPDATE')),
            (E = T()),
            bt(j.$$.fragment),
            B(r, 'class', 'flex'),
            B(u, 'class', 'flex'),
            B($, 'class', 'flex'),
            B(S, 'class', 'badge margin-s padding-none padding-s--r card--shadow bg--black fontsize-small'),
            B(H, 'class', 'flex');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            w(t, r, y),
            w(t, l, y),
            xt(i, t, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            xt(b, t, y),
            w(t, k, y),
            w(t, C, y),
            w(t, L, y),
            w(t, H, y),
            x(H, S),
            xt(N, S, null),
            x(S, A),
            w(t, E, y),
            xt(j, t, y),
            (F = !0);
        },
        i(t) {
          F ||
            (pt(i.$$.fragment, t),
            pt(g.$$.fragment, t),
            pt(b.$$.fragment, t),
            pt(N.$$.fragment, t),
            pt(j.$$.fragment, t),
            (F = !0));
        },
        o(t) {
          mt(i.$$.fragment, t),
            mt(g.$$.fragment, t),
            mt(b.$$.fragment, t),
            mt(N.$$.fragment, t),
            mt(j.$$.fragment, t),
            (F = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            wt(b, t),
            t && y(k),
            t && y(C),
            t && y(L),
            t && y(H),
            wt(N),
            t && y(E),
            wt(j, t);
        },
      }
    );
  }
  function Os(e) {
    let n;
    return {
      c() {
        (n = z('p')), (n.textContent = 'Only valid as a HTML-standard element');
      },
      m(t, e) {
        w(t, n, e);
      },
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Vs(e) {
    let n;
    return {
      c() {
        n = M('<span class="badge"></span>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Is(e) {
    let n;
    return {
      c() {
        n = M(
          '<span class="badge" data-type="primary"></span>\n<span class="badge" data-type="secondary"></span>\n<span class="badge" data-type="success"></span>\n<span class="badge" data-type="danger"></span>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ds(e) {
    let n;
    return {
      c() {
        n = M(
          '<span class="badge bg--bluedark"></span>\n<span class="badge bg--green"></span>\n<span class="badge bg--greendark"></span>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function _s(e) {
    let n;
    return {
      c() {
        n = M(
          '<span class="badge margin-s padding-none padding-s--r card--shadow bg--black fontsize-small">\n  <svg viewBox="0 0 10 16"\n    className="icon-svg bg--white color--flash border-radius-s padding-s margin-s--r"\n    style="margin-left: -1px; width: 15px; height: 15px;"/>\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lightning"></use>\n  </svg>\n  UPDATE\n</span>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ps(t) {
    let e, n, s, a, r, l;
    const i = [Os, Fs],
      o = [];
    function c(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (s = c(t)),
      (a = o[s] = i[s](t)),
      {
        c() {
          (e = z('h1')), (e.textContent = 'Badge'), (n = T()), a.c(), (r = L()), B(e, 'class', 'color--eb');
        },
        m(t, a) {
          w(t, e, a), w(t, n, a), o[s].m(t, a), w(t, r, a), (l = !0);
        },
        p(t, [e]) {
          let n = s;
          (s = c(t)),
            s !== n &&
              (ft(),
              mt(o[n], 1, 1, () => {
                o[n] = null;
              }),
              gt(),
              (a = o[s]),
              a || ((a = o[s] = i[s](t)), a.c()),
              pt(a, 1),
              a.m(r.parentNode, r));
        },
        i(t) {
          l || (pt(a), (l = !0));
        },
        o(t) {
          mt(a), (l = !1);
        },
        d(t) {
          t && y(e), t && y(n), o[s].d(t), t && y(r);
        },
      }
    );
  }
  function qs(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function Rs(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      k,
      C,
      M,
      L,
      H,
      S,
      N,
      A,
      E,
      j,
      F,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K,
      J,
      tt,
      et,
      nt,
      st,
      at;
    return (
      (r = new Xt({ props: { language: 'html', $$slots: { default: [Gs] }, $$scope: { ctx: t } } })),
      (m = new Xt({ props: { language: 'html', $$slots: { default: [Us] }, $$scope: { ctx: t } } })),
      (S = new Xt({ props: { language: 'html', $$slots: { default: [Zs] }, $$scope: { ctx: t } } })),
      (q = new Xt({ props: { language: 'html', $$slots: { default: [Ys] }, $$scope: { ctx: t } } })),
      (X = new te({ props: { name: 'angle-right', width: '20' } })),
      (J = new te({ props: { name: 'angle-left', width: '20' } })),
      (st = new Xt({ props: { language: 'html', $$slots: { default: [Xs] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h3')),
            (e.textContent = 'Default'),
            (n = T()),
            (s = z('button')),
            (s.textContent = 'Button'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            (i = z('h3')),
            (i.textContent = 'Extension attribute'),
            (o = T()),
            (c = z('button')),
            (c.textContent = 'Solid'),
            (d = T()),
            (u = z('button')),
            (u.textContent = 'Link'),
            (f = T()),
            (g = z('button')),
            (g.innerHTML = '<span style="font-size: 30px">×</span>'),
            (p = T()),
            bt(m.$$.fragment),
            (h = T()),
            ($ = z('h3')),
            ($.textContent = 'Size attribute'),
            (v = T()),
            (b = z('p')),
            (b.innerHTML = '<b>big</b> and <b>small</b> can be combined with the other three extensions'),
            (k = T()),
            (C = z('button')),
            (C.textContent = 'Big'),
            (M = T()),
            (L = z('button')),
            (L.textContent = 'Small'),
            (H = T()),
            bt(S.$$.fragment),
            (N = T()),
            (A = z('h3')),
            (A.textContent = 'Variations'),
            (E = T()),
            (j = z('button')),
            (j.textContent = 'Primary'),
            (F = T()),
            (O = z('button')),
            (O.textContent = 'Secondary'),
            (V = T()),
            (I = z('button')),
            (I.textContent = 'Accept'),
            (D = T()),
            (_ = z('button')),
            (_.textContent = 'Cancel'),
            (P = T()),
            bt(q.$$.fragment),
            (R = T()),
            (W = z('h3')),
            (W.textContent = 'With Icon'),
            (G = T()),
            (U = z('button')),
            (Z = z('span')),
            (Z.textContent = 'Icon to the right'),
            (Y = T()),
            bt(X.$$.fragment),
            (Q = T()),
            (K = z('button')),
            bt(J.$$.fragment),
            (tt = T()),
            (et = z('span')),
            (et.textContent = 'Icon to the left'),
            (nt = T()),
            bt(st.$$.fragment),
            B(s, 'class', 'button'),
            B(c, 'class', 'margin-m button button--solid'),
            B(u, 'class', 'margin-m button button--link'),
            B(g, 'class', 'margin-m button button--icon'),
            B(C, 'class', 'margin-m button button--big'),
            B(L, 'class', 'margin-m button button--small'),
            B(j, 'class', 'margin-m button button--primary'),
            B(O, 'class', 'margin-m button button--secondary'),
            B(I, 'class', 'margin-m button button--accept'),
            B(_, 'class', 'margin-m button button--cancel'),
            B(U, 'class', 'margin-m button'),
            B(K, 'class', 'margin-m button');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            xt(r, t, y),
            w(t, l, y),
            w(t, i, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            w(t, g, y),
            w(t, p, y),
            xt(m, t, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            w(t, b, y),
            w(t, k, y),
            w(t, C, y),
            w(t, M, y),
            w(t, L, y),
            w(t, H, y),
            xt(S, t, y),
            w(t, N, y),
            w(t, A, y),
            w(t, E, y),
            w(t, j, y),
            w(t, F, y),
            w(t, O, y),
            w(t, V, y),
            w(t, I, y),
            w(t, D, y),
            w(t, _, y),
            w(t, P, y),
            xt(q, t, y),
            w(t, R, y),
            w(t, W, y),
            w(t, G, y),
            w(t, U, y),
            x(U, Z),
            x(U, Y),
            xt(X, U, null),
            w(t, Q, y),
            w(t, K, y),
            xt(J, K, null),
            x(K, tt),
            x(K, et),
            w(t, nt, y),
            xt(st, t, y),
            (at = !0);
        },
        i(t) {
          at ||
            (pt(r.$$.fragment, t),
            pt(m.$$.fragment, t),
            pt(S.$$.fragment, t),
            pt(q.$$.fragment, t),
            pt(X.$$.fragment, t),
            pt(J.$$.fragment, t),
            pt(st.$$.fragment, t),
            (at = !0));
        },
        o(t) {
          mt(r.$$.fragment, t),
            mt(m.$$.fragment, t),
            mt(S.$$.fragment, t),
            mt(q.$$.fragment, t),
            mt(X.$$.fragment, t),
            mt(J.$$.fragment, t),
            mt(st.$$.fragment, t),
            (at = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            t && y(g),
            t && y(p),
            wt(m, t),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(b),
            t && y(k),
            t && y(C),
            t && y(M),
            t && y(L),
            t && y(H),
            wt(S, t),
            t && y(N),
            t && y(A),
            t && y(E),
            t && y(j),
            t && y(F),
            t && y(O),
            t && y(V),
            t && y(I),
            t && y(D),
            t && y(_),
            t && y(P),
            wt(q, t),
            t && y(R),
            t && y(W),
            t && y(G),
            t && y(U),
            wt(X),
            t && y(Q),
            t && y(K),
            wt(J),
            t && y(nt),
            wt(st, t);
        },
      }
    );
  }
  function Ws(e) {
    let n;
    return {
      c() {
        (n = z('p')), (n.textContent = 'Only valid as a HTML-standard element');
      },
      m(t, e) {
        w(t, n, e);
      },
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Gs(e) {
    let n;
    return {
      c() {
        n = M('<button class="button"></button>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Us(e) {
    let n;
    return {
      c() {
        n = M(
          '<button class="button button--solid"></button>\n<button class="button button--link"></button>\n<button class="button button--icon">\n  <span style="font-size: 30px;">&times;</span>\n</button>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Zs(e) {
    let n;
    return {
      c() {
        n = M('<button class="button button--big"></button>\n<button class="button button--small"></button>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ys(e) {
    let n;
    return {
      c() {
        n = M(
          '<button class="button button--primary"></button>\n<button class="button button--secondary"></button>\n<button class="button button--accept"></button>\n<button class="button button--cancel"></button>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Xs(e) {
    let n;
    return {
      c() {
        n = M(
          '<button class="button">\n  <span></span>\n  <svg viewBox="0 0 50 50">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_right"></use>\n  </svg>\n</button>\n<button class="button">\n  <svg viewBox="0 0 50 50">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_left"></use>\n  </svg>\n  <span></span>\n</button>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Qs(t) {
    let e, n, s, a, r, l;
    const i = [Ws, Rs],
      o = [];
    function c(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (s = c(t)),
      (a = o[s] = i[s](t)),
      {
        c() {
          (e = z('h1')), (e.textContent = 'Buttons'), (n = T()), a.c(), (r = L()), B(e, 'class', 'color--eb');
        },
        m(t, a) {
          w(t, e, a), w(t, n, a), o[s].m(t, a), w(t, r, a), (l = !0);
        },
        p(t, [e]) {
          let n = s;
          (s = c(t)),
            s !== n &&
              (ft(),
              mt(o[n], 1, 1, () => {
                o[n] = null;
              }),
              gt(),
              (a = o[s]),
              a || ((a = o[s] = i[s](t)), a.c()),
              pt(a, 1),
              a.m(r.parentNode, r));
        },
        i(t) {
          l || (pt(a), (l = !0));
        },
        o(t) {
          mt(a), (l = !1);
        },
        d(t) {
          t && y(e), t && y(n), o[s].d(t), t && y(r);
        },
      }
    );
  }
  function Ks(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function Js(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [ta] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('table')),
            (s.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>type</td> \n        <td>&#39;accept&#39; | &#39;cancel&#39; | &#39;primary&#39; | &#39;secondary&#39;</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>color</td> \n        <td>EB Background color variable</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>colorHover</td> \n        <td>EB Background color variable</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>solid</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td></tr> \n      <tr><td>selectedId</td> \n        <td>Writable - number</td> \n        <td>0 (first button)</td> \n        <td>Can be set onMount</td></tr></tbody>'),
            B(s, 'class', 'table');
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), w(t, s, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), t && y(s);
        },
      }
    );
  }
  function ta(e) {
    let n;
    return {
      c() {
        n = M("import { ButtonGroup } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ea(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Button 1'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function na(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [aa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function sa(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ra] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function aa(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="buttongroup">\n  <button class="button"></button>\n  <button class="button"></button>\n  <button class="button"></button>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ra(e) {
    let n;
    return {
      c() {
        n = M(
          '<ButtonGroup bind:selectedId>\n  <button class="button"></button>\n  <button class="button"></button>\n  <button class="button"></button>\n</ButtonGroup>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function la(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Primary'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function ia(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Secondary'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function oa(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Accept'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function ca(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Cancel'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function da(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [fa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ua(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ga] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function fa(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="buttongroup buttongroup--primary">...</div>\n<div class="buttongroup buttongroup--secondary">...</div>\n<div class="buttongroup buttongroup--accept">...</div>\n<div class="buttongroup buttongroup--cancel">...</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ga(e) {
    let n;
    return {
      c() {
        n = M(
          '<ButtonGroup type="primary">...</ButtonGroup>\n<ButtonGroup type="secondary">...</ButtonGroup>\n<ButtonGroup type="accept">...</ButtonGroup>\n<ButtonGroup type="cancel">...</ButtonGroup>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function pa(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Button 1'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function ma(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [$a] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ha(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [va] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function $a(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="buttongroup" style="\n  --buttongroup-color: #8a0c36;\n  --buttongroup-fgcolor: #fff;\n  --buttongroup-color--hover: #8a0c36;\n  --buttongroup-fgcolor--hover: #fff;\n">...</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function va(e) {
    let n;
    return {
      c() {
        n = M('<ButtonGroup color="Bordeaux">...</ButtonGroup>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ba(e) {
    let n, s, a, r, l;
    return {
      c() {
        (n = z('button')),
          (n.textContent = 'Button 1'),
          (s = T()),
          (a = z('button')),
          (a.textContent = 'Button 2'),
          (r = T()),
          (l = z('button')),
          (l.textContent = 'Button 3'),
          B(n, 'class', 'button'),
          B(a, 'class', 'button'),
          B(l, 'class', 'button');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l);
      },
    };
  }
  function xa(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ya] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function wa(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ka] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ya(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="buttongroup buttongroup--solid" style="\n  --buttongroup-color: #000;\n  --buttongroup-fgcolor: #fff;\n  --buttongroup-color--hover: #bd1118;\n  --buttongroup-fgcolor--hover: #fff;\n">...</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ka(e) {
    let n;
    return {
      c() {
        n = M('<ButtonGroup solid={true} color="Black" colorHover="Red">...</ButtonGroup>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function za(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      k,
      C,
      H,
      S,
      N,
      A,
      j,
      F,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      J,
      tt = 'svelte' === t[1] && Js(t);
    function et(e) {
      t[3](e);
    }
    let nt = { className: 'margin-l--b', $$slots: { default: [ea] }, $$scope: { ctx: t } };
    void 0 !== t[0] && (nt.selectedId = t[0]), (d = new ln({ props: nt })), K.push(() => vt(d, 'selectedId', et));
    const st = [sa, na],
      at = [];
    function lt(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    (g = lt(t)),
      (p = at[g] = st[g](t)),
      (v = new ln({
        props: { type: 'primary', className: 'margin-m--b', $$slots: { default: [la] }, $$scope: { ctx: t } },
      })),
      (k = new ln({
        props: { type: 'secondary', className: 'margin-m--b', $$slots: { default: [ia] }, $$scope: { ctx: t } },
      })),
      (H = new ln({
        props: { type: 'accept', className: 'margin-m--b', $$slots: { default: [oa] }, $$scope: { ctx: t } },
      })),
      (N = new ln({
        props: { type: 'cancel', className: 'margin-l--b', $$slots: { default: [ca] }, $$scope: { ctx: t } },
      }));
    const it = [ua, da],
      ot = [];
    function ct(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    (j = ct(t)),
      (F = ot[j] = it[j](t)),
      (D = new ln({
        props: { color: 'Bordeaux', className: 'margin-l--b', $$slots: { default: [pa] }, $$scope: { ctx: t } },
      }));
    const dt = [ha, ma],
      ut = [];
    function ht(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    (P = ht(t)),
      (q = ut[P] = dt[P](t)),
      (U = new ln({
        props: {
          solid: !0,
          color: 'Black',
          colorHover: 'Red',
          className: 'margin-l--b',
          $$slots: { default: [ba] },
          $$scope: { ctx: t },
        },
      }));
    const $t = [wa, xa],
      yt = [];
    function kt(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    return (
      (Y = kt(t)),
      (X = yt[Y] = $t[Y](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Button groups'),
            (n = T()),
            tt && tt.c(),
            (s = T()),
            (a = z('h3')),
            (a.textContent = 'Default'),
            (r = T()),
            (l = z('p')),
            (i = M('Button-index selected: ')),
            (o = M(t[2])),
            (c = T()),
            bt(d.$$.fragment),
            (f = T()),
            p.c(),
            (m = T()),
            (h = z('h3')),
            (h.textContent = 'Variations'),
            ($ = T()),
            bt(v.$$.fragment),
            (b = T()),
            bt(k.$$.fragment),
            (C = T()),
            bt(H.$$.fragment),
            (S = T()),
            bt(N.$$.fragment),
            (A = T()),
            F.c(),
            (O = T()),
            (V = z('h3')),
            (V.textContent = 'Farve muligheder fra eb-colors'),
            (I = T()),
            bt(D.$$.fragment),
            (_ = T()),
            q.c(),
            (R = T()),
            (W = z('h3')),
            (W.textContent = 'Solid button group'),
            (G = T()),
            bt(U.$$.fragment),
            (Z = T()),
            X.c(),
            (Q = L()),
            B(e, 'class', 'color--eb');
        },
        m(t, u) {
          w(t, e, u),
            w(t, n, u),
            tt && tt.m(t, u),
            w(t, s, u),
            w(t, a, u),
            w(t, r, u),
            w(t, l, u),
            x(l, i),
            x(l, o),
            w(t, c, u),
            xt(d, t, u),
            w(t, f, u),
            at[g].m(t, u),
            w(t, m, u),
            w(t, h, u),
            w(t, $, u),
            xt(v, t, u),
            w(t, b, u),
            xt(k, t, u),
            w(t, C, u),
            xt(H, t, u),
            w(t, S, u),
            xt(N, t, u),
            w(t, A, u),
            ot[j].m(t, u),
            w(t, O, u),
            w(t, V, u),
            w(t, I, u),
            xt(D, t, u),
            w(t, _, u),
            ut[P].m(t, u),
            w(t, R, u),
            w(t, W, u),
            w(t, G, u),
            xt(U, t, u),
            w(t, Z, u),
            yt[Y].m(t, u),
            w(t, Q, u),
            (J = !0);
        },
        p(t, [e]) {
          'svelte' === t[1]
            ? tt
              ? 2 & e && pt(tt, 1)
              : ((tt = Js(t)), tt.c(), pt(tt, 1), tt.m(s.parentNode, s))
            : tt &&
              (ft(),
              mt(tt, 1, 1, () => {
                tt = null;
              }),
              gt()),
            (!J || 4 & e) && E(o, t[2]);
          const n = {};
          16 & e && (n.$$scope = { dirty: e, ctx: t }),
            !u && 1 & e && ((u = !0), (n.selectedId = t[0]), rt(() => (u = !1))),
            d.$set(n);
          let a = g;
          (g = lt(t)),
            g !== a &&
              (ft(),
              mt(at[a], 1, 1, () => {
                at[a] = null;
              }),
              gt(),
              (p = at[g]),
              p || ((p = at[g] = st[g](t)), p.c()),
              pt(p, 1),
              p.m(m.parentNode, m));
          const r = {};
          16 & e && (r.$$scope = { dirty: e, ctx: t }), v.$set(r);
          const l = {};
          16 & e && (l.$$scope = { dirty: e, ctx: t }), k.$set(l);
          const i = {};
          16 & e && (i.$$scope = { dirty: e, ctx: t }), H.$set(i);
          const c = {};
          16 & e && (c.$$scope = { dirty: e, ctx: t }), N.$set(c);
          let f = j;
          (j = ct(t)),
            j !== f &&
              (ft(),
              mt(ot[f], 1, 1, () => {
                ot[f] = null;
              }),
              gt(),
              (F = ot[j]),
              F || ((F = ot[j] = it[j](t)), F.c()),
              pt(F, 1),
              F.m(O.parentNode, O));
          const h = {};
          16 & e && (h.$$scope = { dirty: e, ctx: t }), D.$set(h);
          let $ = P;
          (P = ht(t)),
            P !== $ &&
              (ft(),
              mt(ut[$], 1, 1, () => {
                ut[$] = null;
              }),
              gt(),
              (q = ut[P]),
              q || ((q = ut[P] = dt[P](t)), q.c()),
              pt(q, 1),
              q.m(R.parentNode, R));
          const b = {};
          16 & e && (b.$$scope = { dirty: e, ctx: t }), U.$set(b);
          let x = Y;
          (Y = kt(t)),
            Y !== x &&
              (ft(),
              mt(yt[x], 1, 1, () => {
                yt[x] = null;
              }),
              gt(),
              (X = yt[Y]),
              X || ((X = yt[Y] = $t[Y](t)), X.c()),
              pt(X, 1),
              X.m(Q.parentNode, Q));
        },
        i(t) {
          J ||
            (pt(tt),
            pt(d.$$.fragment, t),
            pt(p),
            pt(v.$$.fragment, t),
            pt(k.$$.fragment, t),
            pt(H.$$.fragment, t),
            pt(N.$$.fragment, t),
            pt(F),
            pt(D.$$.fragment, t),
            pt(q),
            pt(U.$$.fragment, t),
            pt(X),
            (J = !0));
        },
        o(t) {
          mt(tt),
            mt(d.$$.fragment, t),
            mt(p),
            mt(v.$$.fragment, t),
            mt(k.$$.fragment, t),
            mt(H.$$.fragment, t),
            mt(N.$$.fragment, t),
            mt(F),
            mt(D.$$.fragment, t),
            mt(q),
            mt(U.$$.fragment, t),
            mt(X),
            (J = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            tt && tt.d(t),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            t && y(c),
            wt(d, t),
            t && y(f),
            at[g].d(t),
            t && y(m),
            t && y(h),
            t && y($),
            wt(v, t),
            t && y(b),
            wt(k, t),
            t && y(C),
            wt(H, t),
            t && y(S),
            wt(N, t),
            t && y(A),
            ot[j].d(t),
            t && y(O),
            t && y(V),
            t && y(I),
            wt(D, t),
            t && y(_),
            ut[P].d(t),
            t && y(R),
            t && y(W),
            t && y(G),
            wt(U, t),
            t && y(Z),
            yt[Y].d(t),
            t && y(Q);
        },
      }
    );
  }
  function Ca(e, n, s) {
    let a,
      r,
      l,
      i = t,
      o = () => (i(), (i = d(l, (t) => s(2, (r = t)))), l);
    return (
      u(e, Yn, (t) => s(1, (a = t))),
      e.$$.on_destroy.push(() => i()),
      [
        l,
        a,
        r,
        function (t) {
          (l = t), o(s(0, l));
        },
      ]
    );
  }
  function Ma(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h;
    return (
      (r = new Xt({ props: { language: 'html', $$slots: { default: [La] }, $$scope: { ctx: t } } })),
      (u = new Xt({ props: { language: 'html', $$slots: { default: [Ha] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h3')),
            (e.textContent = 'Card slots'),
            (n = T()),
            (s = z('div')),
            (s.innerHTML =
              '<div class="card-header">Header</div> \n    <div class="card-media"><img src="https://loremflickr.com/1280/400/cat" alt=""/></div> \n    <div class="card-content">Content</div> \n    <div class="card-footer">Footer</div>'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            (i = z('h3')),
            (i.textContent = 'Small media card'),
            (o = T()),
            (c = z('div')),
            (c.innerHTML =
              '<div class="card-media"><img src="https://loremflickr.com/250/120/dog" alt=""/></div> \n    <div class="card-content">Content</div>'),
            (d = T()),
            bt(u.$$.fragment),
            (f = T()),
            (g = z('h3')),
            (g.textContent = 'Force landscape image'),
            (p = T()),
            (m = z('p')),
            (m.innerHTML = 'To force the image in a card to landscape view, use class <em>card-media--landscape</em>'),
            B(s, 'class', 'card margin-l--b'),
            B(c, 'class', 'card card--small-media margin-l--b');
        },
        m(t, $) {
          w(t, e, $),
            w(t, n, $),
            w(t, s, $),
            w(t, a, $),
            xt(r, t, $),
            w(t, l, $),
            w(t, i, $),
            w(t, o, $),
            w(t, c, $),
            w(t, d, $),
            xt(u, t, $),
            w(t, f, $),
            w(t, g, $),
            w(t, p, $),
            w(t, m, $),
            (h = !0);
        },
        i(t) {
          h || (pt(r.$$.fragment, t), pt(u.$$.fragment, t), (h = !0));
        },
        o(t) {
          mt(r.$$.fragment, t), mt(u.$$.fragment, t), (h = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            wt(u, t),
            t && y(f),
            t && y(g),
            t && y(p),
            t && y(m);
        },
      }
    );
  }
  function Ta(e) {
    let n;
    return {
      c() {
        (n = z('p')), (n.textContent = 'Only valid as a HTML-standard element');
      },
      m(t, e) {
        w(t, n, e);
      },
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function La(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="card">\n  <div class="card-header"></div>\n  <div class="card-media">\n    <img src="" alt="">\n  </div>\n   <div class="card-content"></div>\n  <div class="card-footer"></div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ha(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="card card--small-media">\n  <div class="card-media">\n    <img src="" alt="" />\n  </div>\n  <div class="card-content"></div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Sa(t) {
    let e, n, s, a, r, l;
    const i = [Ta, Ma],
      o = [];
    function c(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (s = c(t)),
      (a = o[s] = i[s](t)),
      {
        c() {
          (e = z('h1')), (e.textContent = 'Card'), (n = T()), a.c(), (r = L()), B(e, 'class', 'color--eb');
        },
        m(t, a) {
          w(t, e, a), w(t, n, a), o[s].m(t, a), w(t, r, a), (l = !0);
        },
        p(t, [e]) {
          let n = s;
          (s = c(t)),
            s !== n &&
              (ft(),
              mt(o[n], 1, 1, () => {
                o[n] = null;
              }),
              gt(),
              (a = o[s]),
              a || ((a = o[s] = i[s](t)), a.c()),
              pt(a, 1),
              a.m(r.parentNode, r));
        },
        i(t) {
          l || (pt(a), (l = !0));
        },
        o(t) {
          mt(a), (l = !1);
        },
        d(t) {
          t && y(e), t && y(n), o[s].d(t), t && y(r);
        },
      }
    );
  }
  function Ba(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function Na(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [Aa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Aa(e) {
    let n;
    return {
      c() {
        n = M("import { FormElement } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ea(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Fa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ja(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Oa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Fa(e) {
    let n;
    return {
      c() {
        n = M('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Oa(e) {
    let n;
    return {
      c() {
        n = M(
          '<FormElement inputtype="text" size="small" label="" />\n<FormElement inputtype="text" label="" />\n<FormElement inputtype="text" size="large" label="" />'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Va(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Da] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ia(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [_a] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Da(e) {
    let n;
    return {
      c() {
        n = M('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function _a(e) {
    let n;
    return {
      c() {
        n = M('<FormElement inputtype="number" label="" />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Pa(e) {
    let n, s, a;
    return {
      c() {
        (n = z('option')),
          (n.textContent = 'Option 1'),
          (s = T()),
          (a = z('option')),
          (a.textContent = 'Option 2'),
          (n.__value = 'option1'),
          (n.value = n.__value),
          (a.__value = 'option2'),
          (a.value = a.__value);
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e);
      },
      p: t,
      d(t) {
        t && y(n), t && y(s), t && y(a);
      },
    };
  }
  function qa(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Wa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ra(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Ga] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Wa(e) {
    let n;
    return {
      c() {
        n = M('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ga(e) {
    let n;
    return {
      c() {
        n = M(
          '<FormElement inputtype="select" label="">\n  <option value="option1"></option>\n  <option value="option2"></option>\n</FormElement>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ua(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Ya] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Za(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Xa] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ya(e) {
    let n;
    return {
      c() {
        n = M('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Xa(e) {
    let n;
    return {
      c() {
        n = M(
          '<FormElement inputtype="checkbox" label="" />\n<FormElement inputtype="radio" label="" bind:group={group} value={1} />'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Qa(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Ja] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ka(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [tr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ja(e) {
    let n;
    return {
      c() {
        n = M('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function tr(e) {
    let n;
    return {
      c() {
        n = M('<FormElement inputtype="textarea" label="" />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function er(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      x,
      k,
      C,
      M,
      H,
      S,
      N,
      A,
      E,
      j,
      F,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K = 'svelte' === t[0] && Na(t);
    (l = new Tn({ props: { inputtype: 'text', size: 'small', label: 'input size small' } })),
      (o = new Tn({ props: { inputtype: 'text', label: 'input size medium (standard)' } })),
      (d = new Tn({ props: { inputtype: 'text', size: 'large', label: 'input size large' } }));
    const J = [ja, Ea],
      tt = [];
    function et(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (f = et(t)),
      (g = tt[f] = J[f](t)),
      ($ = new Tn({ props: { inputtype: 'number', label: 'Noget tal indhold her' } }));
    const nt = [Ia, Va],
      st = [];
    function at(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (b = at(t)),
      (x = st[b] = nt[b](t)),
      (H = new Tn({
        props: { inputtype: 'select', label: 'Select', $$slots: { default: [Pa] }, $$scope: { ctx: t } },
      }));
    const rt = [Ra, qa],
      lt = [];
    function it(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (N = it(t)),
      (A = lt[N] = rt[N](t)),
      (O = new Tn({ props: { inputtype: 'checkbox', label: 'Checkbox' } })),
      (I = new Tn({ props: { inputtype: 'radio', label: 'Radio', value: 1 } }));
    const ot = [Za, Ua],
      ct = [];
    function dt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (_ = dt(t)), (P = ct[_] = ot[_](t)), (G = new Tn({ props: { inputtype: 'textarea', label: 'Textarea' } }));
    const ut = [Ka, Qa],
      ht = [];
    function $t(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (Z = $t(t)),
      (Y = ht[Z] = ut[Z](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Form Element'),
            (n = T()),
            K && K.c(),
            (s = T()),
            (a = z('h3')),
            (a.textContent = 'Text input'),
            (r = T()),
            bt(l.$$.fragment),
            (i = T()),
            bt(o.$$.fragment),
            (c = T()),
            bt(d.$$.fragment),
            (u = T()),
            g.c(),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'Number input'),
            (h = T()),
            bt($.$$.fragment),
            (v = T()),
            x.c(),
            (k = T()),
            (C = z('h3')),
            (C.textContent = 'Select'),
            (M = T()),
            bt(H.$$.fragment),
            (S = T()),
            A.c(),
            (E = T()),
            (j = z('h3')),
            (j.textContent = 'Checkbox and radio'),
            (F = T()),
            bt(O.$$.fragment),
            (V = T()),
            bt(I.$$.fragment),
            (D = T()),
            P.c(),
            (q = T()),
            (R = z('h3')),
            (R.textContent = 'Textarea'),
            (W = T()),
            bt(G.$$.fragment),
            (U = T()),
            Y.c(),
            (X = L()),
            B(e, 'class', 'color--eb');
        },
        m(t, g) {
          w(t, e, g),
            w(t, n, g),
            K && K.m(t, g),
            w(t, s, g),
            w(t, a, g),
            w(t, r, g),
            xt(l, t, g),
            w(t, i, g),
            xt(o, t, g),
            w(t, c, g),
            xt(d, t, g),
            w(t, u, g),
            tt[f].m(t, g),
            w(t, p, g),
            w(t, m, g),
            w(t, h, g),
            xt($, t, g),
            w(t, v, g),
            st[b].m(t, g),
            w(t, k, g),
            w(t, C, g),
            w(t, M, g),
            xt(H, t, g),
            w(t, S, g),
            lt[N].m(t, g),
            w(t, E, g),
            w(t, j, g),
            w(t, F, g),
            xt(O, t, g),
            w(t, V, g),
            xt(I, t, g),
            w(t, D, g),
            ct[_].m(t, g),
            w(t, q, g),
            w(t, R, g),
            w(t, W, g),
            xt(G, t, g),
            w(t, U, g),
            ht[Z].m(t, g),
            w(t, X, g),
            (Q = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? K
              ? 1 & e && pt(K, 1)
              : ((K = Na(t)), K.c(), pt(K, 1), K.m(s.parentNode, s))
            : K &&
              (ft(),
              mt(K, 1, 1, () => {
                K = null;
              }),
              gt());
          let n = f;
          (f = et(t)),
            f !== n &&
              (ft(),
              mt(tt[n], 1, 1, () => {
                tt[n] = null;
              }),
              gt(),
              (g = tt[f]),
              g || ((g = tt[f] = J[f](t)), g.c()),
              pt(g, 1),
              g.m(p.parentNode, p));
          let a = b;
          (b = at(t)),
            b !== a &&
              (ft(),
              mt(st[a], 1, 1, () => {
                st[a] = null;
              }),
              gt(),
              (x = st[b]),
              x || ((x = st[b] = nt[b](t)), x.c()),
              pt(x, 1),
              x.m(k.parentNode, k));
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), H.$set(r);
          let l = N;
          (N = it(t)),
            N !== l &&
              (ft(),
              mt(lt[l], 1, 1, () => {
                lt[l] = null;
              }),
              gt(),
              (A = lt[N]),
              A || ((A = lt[N] = rt[N](t)), A.c()),
              pt(A, 1),
              A.m(E.parentNode, E));
          let i = _;
          (_ = dt(t)),
            _ !== i &&
              (ft(),
              mt(ct[i], 1, 1, () => {
                ct[i] = null;
              }),
              gt(),
              (P = ct[_]),
              P || ((P = ct[_] = ot[_](t)), P.c()),
              pt(P, 1),
              P.m(q.parentNode, q));
          let o = Z;
          (Z = $t(t)),
            Z !== o &&
              (ft(),
              mt(ht[o], 1, 1, () => {
                ht[o] = null;
              }),
              gt(),
              (Y = ht[Z]),
              Y || ((Y = ht[Z] = ut[Z](t)), Y.c()),
              pt(Y, 1),
              Y.m(X.parentNode, X));
        },
        i(t) {
          Q ||
            (pt(K),
            pt(l.$$.fragment, t),
            pt(o.$$.fragment, t),
            pt(d.$$.fragment, t),
            pt(g),
            pt($.$$.fragment, t),
            pt(x),
            pt(H.$$.fragment, t),
            pt(A),
            pt(O.$$.fragment, t),
            pt(I.$$.fragment, t),
            pt(P),
            pt(G.$$.fragment, t),
            pt(Y),
            (Q = !0));
        },
        o(t) {
          mt(K),
            mt(l.$$.fragment, t),
            mt(o.$$.fragment, t),
            mt(d.$$.fragment, t),
            mt(g),
            mt($.$$.fragment, t),
            mt(x),
            mt(H.$$.fragment, t),
            mt(A),
            mt(O.$$.fragment, t),
            mt(I.$$.fragment, t),
            mt(P),
            mt(G.$$.fragment, t),
            mt(Y),
            (Q = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            K && K.d(t),
            t && y(s),
            t && y(a),
            t && y(r),
            wt(l, t),
            t && y(i),
            wt(o, t),
            t && y(c),
            wt(d, t),
            t && y(u),
            tt[f].d(t),
            t && y(p),
            t && y(m),
            t && y(h),
            wt($, t),
            t && y(v),
            st[b].d(t),
            t && y(k),
            t && y(C),
            t && y(M),
            wt(H, t),
            t && y(S),
            lt[N].d(t),
            t && y(E),
            t && y(j),
            t && y(F),
            wt(O, t),
            t && y(V),
            wt(I, t),
            t && y(D),
            ct[_].d(t),
            t && y(q),
            t && y(R),
            t && y(W),
            wt(G, t),
            t && y(U),
            ht[Z].d(t),
            t && y(X);
        },
      }
    );
  }
  function nr(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function sr(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function ar(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function rr(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function lr(t, e, n) {
    const s = t.slice();
    return (s[9] = e[n]), s;
  }
  function ir(t) {
    let e, n, s, a;
    return (
      (s = new Xt({ props: { language: 'html', $$slots: { default: [cr] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('p')),
            (e.textContent = 'HorizontalScroll kræver javascript som findes under list-v2 på eb'),
            (n = T()),
            bt(s.$$.fragment);
        },
        m(t, r) {
          w(t, e, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        i(t) {
          a || (pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(e), t && y(n), wt(s, t);
        },
      }
    );
  }
  function or(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [dr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('table')),
            (s.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr></tbody>'),
            B(s, 'class', 'table');
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), w(t, s, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), t && y(s);
        },
      }
    );
  }
  function cr(e) {
    let n;
    return {
      c() {
        n = M(
          'ekstrabladet/ekstrabladet-publication/src/main/webapp/WEB-INF/jsp/components/list-v2/horizontalscroll.ts'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function dr(e) {
    let n;
    return {
      c() {
        n = M("import { HorizontalScroll } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ur(t) {
    let n, s;
    const a = [t[9], { width: '350px' }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 64 & e ? ht(a, [$t(t[9]), a[1]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function fr(t) {
    let e,
      n,
      s = t[6],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = ur(lr(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (64 & n) {
          let l;
          for (s = t[6], l = 0; l < s.length; l += 1) {
            const r = lr(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = ur(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function gr(t) {
    let n, s;
    const a = [t[9], { width: '215px' }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 32 & e ? ht(a, [$t(t[9]), a[1]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function pr(t) {
    let e,
      n,
      s = t[5],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = gr(rr(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (32 & n) {
          let l;
          for (s = t[5], l = 0; l < s.length; l += 1) {
            const r = rr(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = gr(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function mr(t) {
    let n, s;
    const a = [t[9], { width: '215px' }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 16 & e ? ht(a, [$t(t[9]), a[1]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function hr(t) {
    let e,
      n,
      s = t[4],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = mr(ar(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (16 & n) {
          let l;
          for (s = t[4], l = 0; l < s.length; l += 1) {
            const r = ar(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = mr(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function $r(t) {
    let n, s;
    const a = [t[3], { width: '215px' }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 8 & e ? ht(a, [$t(t[3]), a[1]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function vr(t) {
    let n, s;
    const a = [t[9], { width: '215px' }];
    let r = {};
    for (let t = 0; t < a.length; t += 1) r = e(r, a[t]);
    return (
      (n = new qe({ props: r })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p(t, e) {
          const s = 2 & e ? ht(a, [$t(t[9]), a[1]]) : {};
          n.$set(s);
        },
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function br(t) {
    let e,
      n,
      s = t[1],
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = vr(sr(t, s, e));
    const r = (t) =>
      mt(a[t], 1, 1, () => {
        a[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < a.length; t += 1) a[t].c();
        e = L();
      },
      m(t, s) {
        for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, s);
        w(t, e, s), (n = !0);
      },
      p(t, n) {
        if (2 & n) {
          let l;
          for (s = t[1], l = 0; l < s.length; l += 1) {
            const r = sr(t, s, l);
            a[l] ? (a[l].p(r, n), pt(a[l], 1)) : ((a[l] = vr(r)), a[l].c(), pt(a[l], 1), a[l].m(e.parentNode, e));
          }
          for (ft(), l = s.length; l < a.length; l += 1) r(l);
          gt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < s.length; t += 1) pt(a[t]);
          n = !0;
        }
      },
      o(t) {
        a = a.filter(Boolean);
        for (let t = 0; t < a.length; t += 1) mt(a[t]);
        n = !1;
      },
      d(t) {
        k(a, t), t && y(e);
      },
    };
  }
  function xr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [yr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function wr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [kr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function yr(e) {
    let n;
    return {
      c() {
        n = M(
          '<div id="example-id" class="horizontal-scroll-container position-relative">\n  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">\n    <svg viewBox="0 0 50 50">\n      <use xlink:href="#angle-left"></use>\n    </svg>\n  </button>\n  <button data-horizontallist="button-next" class="horizontal-scroll-nav">\n    <svg viewBox="0 0 50 50">\n      <use xlink:href="#angle-left"></use>\n    </svg>\n  </button>\n  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">\n    ...\n  </div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function kr(e) {
    let n;
    return {
      c() {
        n = M('<HorizontalScroll>\n  ...\n</HorizontalScroll>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function zr(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b;
    const x = [or, ir],
      k = [];
    function C(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (s = C(t)),
      (a = k[s] = x[s](t)),
      (l = new Xe({ props: { className: 'margin-m--b', $$slots: { default: [fr] }, $$scope: { ctx: t } } })),
      (o = new Xe({ props: { className: 'margin-m--b', $$slots: { default: [pr] }, $$scope: { ctx: t } } })),
      (d = new Xe({ props: { className: 'margin-m--b', $$slots: { default: [hr] }, $$scope: { ctx: t } } })),
      (f = new Xe({ props: { className: 'margin-m--b', $$slots: { default: [$r] }, $$scope: { ctx: t } } })),
      (p = new Xe({ props: { className: 'margin-m--b', $$slots: { default: [br] }, $$scope: { ctx: t } } }));
    const M = [wr, xr],
      H = [];
    function S(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (h = S(t)),
      ($ = H[h] = M[h](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Horizontal Scroll'),
            (n = T()),
            a.c(),
            (r = T()),
            bt(l.$$.fragment),
            (i = T()),
            bt(o.$$.fragment),
            (c = T()),
            bt(d.$$.fragment),
            (u = T()),
            bt(f.$$.fragment),
            (g = T()),
            bt(p.$$.fragment),
            (m = T()),
            $.c(),
            (v = L()),
            B(e, 'class', 'color--eb');
        },
        m(t, a) {
          w(t, e, a),
            w(t, n, a),
            k[s].m(t, a),
            w(t, r, a),
            xt(l, t, a),
            w(t, i, a),
            xt(o, t, a),
            w(t, c, a),
            xt(d, t, a),
            w(t, u, a),
            xt(f, t, a),
            w(t, g, a),
            xt(p, t, a),
            w(t, m, a),
            H[h].m(t, a),
            w(t, v, a),
            (b = !0);
        },
        p(t, [e]) {
          let n = s;
          (s = C(t)),
            s !== n &&
              (ft(),
              mt(k[n], 1, 1, () => {
                k[n] = null;
              }),
              gt(),
              (a = k[s]),
              a || ((a = k[s] = x[s](t)), a.c()),
              pt(a, 1),
              a.m(r.parentNode, r));
          const i = {};
          262144 & e && (i.$$scope = { dirty: e, ctx: t }), l.$set(i);
          const c = {};
          262144 & e && (c.$$scope = { dirty: e, ctx: t }), o.$set(c);
          const u = {};
          262144 & e && (u.$$scope = { dirty: e, ctx: t }), d.$set(u);
          const g = {};
          262144 & e && (g.$$scope = { dirty: e, ctx: t }), f.$set(g);
          const m = {};
          262146 & e && (m.$$scope = { dirty: e, ctx: t }), p.$set(m);
          let b = h;
          (h = S(t)),
            h !== b &&
              (ft(),
              mt(H[b], 1, 1, () => {
                H[b] = null;
              }),
              gt(),
              ($ = H[h]),
              $ || (($ = H[h] = M[h](t)), $.c()),
              pt($, 1),
              $.m(v.parentNode, v));
        },
        i(t) {
          b ||
            (pt(a),
            pt(l.$$.fragment, t),
            pt(o.$$.fragment, t),
            pt(d.$$.fragment, t),
            pt(f.$$.fragment, t),
            pt(p.$$.fragment, t),
            pt($),
            (b = !0));
        },
        o(t) {
          mt(a),
            mt(l.$$.fragment, t),
            mt(o.$$.fragment, t),
            mt(d.$$.fragment, t),
            mt(f.$$.fragment, t),
            mt(p.$$.fragment, t),
            mt($),
            (b = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            k[s].d(t),
            t && y(r),
            wt(l, t),
            t && y(i),
            wt(o, t),
            t && y(c),
            wt(d, t),
            t && y(u),
            wt(f, t),
            t && y(g),
            wt(p, t),
            t && y(m),
            H[h].d(t),
            t && y(v);
        },
      }
    );
  }
  const Cr = 20;
  function Mr(t, e, n) {
    let s, a;
    u(t, Yn, (t) => n(0, (s = t)));
    const r = Mt([rs(640, 360), rs(640, 360)]);
    u(t, r, (t) => n(1, (a = t)));
    let l = 2;
    const i = setInterval(() => {
        l < Cr ? r.update((t) => (t.push(rs(640, 360)), t)) : clearInterval(i), l++;
      }, 3e3),
      o = rs(640, 360),
      c = [rs(640, 360), rs(640, 360)],
      d = [rs(640, 360), rs(640, 360), rs(640, 360)],
      f = [
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
        rs(640, 360),
      ];
    return [s, a, r, o, c, d, f];
  }
  function Tr(e) {
    let n;
    return {
      c() {
        (n = z('div')),
          (n.innerHTML =
            '<div class="flex flex--column margin-l--b"><i class="margin-m--b">Icons on the article card</i> \n    <table class="dredition-table-icons svelte-kntg2d"><tr><th width="150" class="svelte-kntg2d">Icon</th> \n        <th width="300" class="svelte-kntg2d">Name in DrEdition</th> \n        <th width="300" class="svelte-kntg2d">Filename</th></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/radar.svg"/></td> \n        <td class="svelte-kntg2d">radar</td> \n        <td class="svelte-kntg2d">radar.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/ligenu.svg"/></td> \n        <td class="svelte-kntg2d">Lige nu</td> \n        <td class="svelte-kntg2d">ligenu.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/breaking-swipe.svg"/></td> \n        <td class="svelte-kntg2d">Breaking</td> \n        <td class="svelte-kntg2d">breaking-swipe.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/afsloering-swipe.svg"/></td> \n        <td class="svelte-kntg2d">Afsløring</td> \n        <td class="svelte-kntg2d">afsloering-swipe.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/live.svg"/></td> \n        <td class="svelte-kntg2d">Live</td> \n        <td class="svelte-kntg2d">live.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/live-static.svg"/></td> \n        <td class="svelte-kntg2d">Livestatic <i>(ikke aktiv i Aptoma)</i></td> \n        <td class="svelte-kntg2d">live-static.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/liveblog.svg"/></td> \n        <td class="svelte-kntg2d">Liveblog <i>(ikke aktiv i Aptoma)</i></td> \n        <td class="svelte-kntg2d">liveblog.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/live-video.svg"/></td> \n        <td class="svelte-kntg2d">live video <i>(ikke aktiv i Aptoma)</i></td> \n        <td class="svelte-kntg2d">live-video.svg</td></tr> \n      <tr><td style="display: flex; background: grey; padding: 5px;" class="svelte-kntg2d"><span class="video-time ff-primary svelte-kntg2d">1:40</span> \n          <img alt="" src="./svg/dredition/video.svg"/></td> \n        <td class="svelte-kntg2d">Video <i>(the time is CSS created by Aptoma themselves)</i></td> \n        <td class="svelte-kntg2d">video.svg</td></tr> \n      <tr><td class="svelte-kntg2d"><div class="premium-dogear" style="height: 61px; position: relative;"><img alt="" src="./svg/dredition/eb-plus-white-onred-anim.svg" height="18"/></div></td> \n        <td class="svelte-kntg2d">Dogear plus <i>(dogear made with css)</i></td> \n        <td class="svelte-kntg2d">eb-plus-white-onred-anim.svg</td></tr> \n      <tr><td style="background-color: black" class="svelte-kntg2d"><img alt="" src="./svg/dredition/eb-plus-white-onblack-anim.svg" height="50"/></td> \n        <td class="svelte-kntg2d">Hvidt plus med sort skygge <i>(Kan bruges på alle baggrunde, der ikke er røde)</i></td> \n        <td class="svelte-kntg2d">eb-plus-white-onblack-anim.svg</td></tr> \n      <tr><td style="background-color: darkred" class="svelte-kntg2d"><img alt="" src="./svg/dredition/eb-plus-white-onred-anim.svg" height="50"/></td> \n        <td class="svelte-kntg2d">Hvidt plus med rød skygge <i>(Kan bruges på rød baggrund)</i></td> \n        <td class="svelte-kntg2d">eb-plus-white-onred-anim.svg</td></tr> \n      <tr><td style="background-color: white" class="svelte-kntg2d"><img alt="" src="./svg/dredition/eb-plus-black-anim.svg" height="50"/></td> \n        <td class="svelte-kntg2d">Sort plus med hvid skygge <i>(Kan bruges på hvid baggrund)</i></td> \n        <td class="svelte-kntg2d">eb-plus-black-anim.svg</td></tr></table> \n\n    <i class="margin-m--b margin-l--t">Deprecated icons <b>may be deleted after 3 months</b></i> \n\n    <table class="dredition-table-icons svelte-kntg2d"><tr><th width="300" class="svelte-kntg2d">Name in DrEdition</th> \n        <th width="300" class="svelte-kntg2d">Filename</th> \n        <th width="300" class="svelte-kntg2d">Icon</th> \n        <th width="300" class="svelte-kntg2d">Deprecated date</th> \n        <th width="300" class="svelte-kntg2d">Delete date</th></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/ama-static.svg"/></td> \n        <td class="svelte-kntg2d">ama</td> \n        <td class="svelte-kntg2d">ama-static.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/audio.svg"/></td> \n        <td class="svelte-kntg2d">Audio</td> \n        <td class="svelte-kntg2d">audio.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/updating-static.svg"/></td> \n        <td class="svelte-kntg2d">Updating static</td> \n        <td class="svelte-kntg2d">updating-static.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/live-video-opaque.svg"/></td> \n        <td class="svelte-kntg2d">live video opaque</td> \n        <td class="svelte-kntg2d">live-video-opaque.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/liveblog-opaque.svg"/></td> \n        <td class="svelte-kntg2d">Liveblog opaque</td> \n        <td class="svelte-kntg2d">liveblog-opaque.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/ama-live.svg"/></td> \n        <td class="svelte-kntg2d">AMA live</td> \n        <td class="svelte-kntg2d">ama-live.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/ama-live-opaque.svg"/></td> \n        <td class="svelte-kntg2d">AMA live opaque</td> \n        <td class="svelte-kntg2d">ama-live-opaque.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/breaking.svg"/></td> \n        <td class="svelte-kntg2d">Breaking</td> \n        <td class="svelte-kntg2d">breaking.svg</td> \n        <td class="svelte-kntg2d">28.02.2023</td> \n        <td class="svelte-kntg2d">28.05.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/soccerball.svg"/></td> \n        <td class="svelte-kntg2d">Soccerball</td> \n        <td class="svelte-kntg2d">soccerball.svg</td> \n        <td class="svelte-kntg2d">01.03.2023</td> \n        <td class="svelte-kntg2d">01.06.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/eb-plus.svg"/></td> \n        <td class="svelte-kntg2d">Plus</td> \n        <td class="svelte-kntg2d">eb-plus.svg</td> \n        <td class="svelte-kntg2d">01.03.2023</td> \n        <td class="svelte-kntg2d">01.06.2023</td></tr> \n      <tr><td class="svelte-kntg2d"><img alt="" src="./svg/dredition/updating.svg"/></td> \n        <td class="svelte-kntg2d">updating (Er nu som et element i Aptoma - nyt design)</td> \n        <td class="svelte-kntg2d">updating.svg</td> \n        <td class="svelte-kntg2d">09.03.2023</td> \n        <td class="svelte-kntg2d">09.06.2023</td></tr></table></div>'),
          B(n, 'class', 'grid-width--medium');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  class Lr extends kt {
    constructor(t) {
      super(), yt(this, t, null, Tr, l, {});
    }
  }
  const Hr = [
      'ebplus-black',
      'ebplus-white-blackshadow',
      'ebplus-white',
      'ekstrabladet',
      'figcaption-pin',
      'video-graphic',
    ],
    Sr = [
      'angle-down',
      'angle-left',
      'angle-right',
      'angle-up',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'article',
      'at',
      'bell',
      'bookmark-solid',
      'bookmark',
      'calendar',
      'camera-solid',
      'camera',
      'chart-bar',
      'check-circle-solid',
      'check-circle',
      'check-solid',
      'check-square-solid',
      'check-square',
      'check',
      'circle-notch',
      'circle-solid',
      'circle',
      'clock',
      'cog-solid',
      'cog',
      'comment-solid',
      'comment',
      'comments-solid',
      'creditcard-solid',
      'creditcard',
      'desktop',
      'dot-circle',
      'ebplus-circle-solid',
      'ebplus',
      'edit',
      'envelope',
      'exclamation-circle-solid',
      'exclamation-circle',
      'exclamation-triangle-solid',
      'exclamation-triangle',
      'expand',
      'external-link',
      'facebook',
      'filter-solid',
      'futbol',
      'gallery',
      'headphones',
      'headset',
      'heart-half-solid',
      'heart-solid',
      'heart',
      'history',
      'info-circle-solid',
      'info-circle',
      'instagram',
      'lightning',
      'linkedin',
      'list-ol',
      'lock',
      'mappin-solid',
      'medielogin',
      'menubars-solid',
      'menubars',
      'miteb-solid',
      'miteb',
      'newspaper',
      'pause-circle',
      'pause-solid',
      'phone',
      'pin-solid',
      'play-circle',
      'play-solid',
      'question-circle',
      'rss-symbol',
      'rss',
      'search',
      'smartphone',
      'square',
      'star-half-solid',
      'star-solid',
      'star',
      'sync',
      'tablet',
      'tag-solid',
      'tag',
      'tags-solid',
      'tags',
      'times-circle-solid',
      'times-circle',
      'times',
      'toggle-off',
      'toggle-on',
      'trash-solid',
      'trash',
      'twitter',
      'user-circle-solid',
      'user-circle',
      'user-solid',
      'users',
      'video',
      'volume-muted-solid',
      'volume-up-solid',
      'youtube',
    ];
  function Br(t, e, n) {
    const s = t.slice();
    return (s[7] = e[n]), (s[9] = n), s;
  }
  function Nr(t, e, n) {
    const s = t.slice();
    return (s[7] = e[n]), (s[9] = n), s;
  }
  function Ar(t, e, n) {
    const s = t.slice();
    return (s[11] = e[n]), s;
  }
  function Er(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [jr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('table')),
            (s.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td>Custom class names</td></tr> \n      <tr><td>name <span class="badge badge--small" data-type="primary">required</span></td> \n        <td>IconTypes</td> \n        <td></td> \n        <td>Only names listed beneath are valid</td></tr> \n      <tr><td>type</td> \n        <td>&#39;svg&#39;</td> \n        <td>svg</td> \n        <td>Use EB svg icons</td></tr> \n      <tr><td>width</td> \n        <td>number</td> \n        <td>36</td> \n        <td>The width of the icon in pixels</td></tr> \n      <tr><td>style</td> \n        <td>string</td> \n        <td></td> \n        <td>Custom styling</td></tr></tbody>'),
            B(s, 'class', 'table');
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), w(t, s, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), t && y(s);
        },
      }
    );
  }
  function jr(e) {
    let n;
    return {
      c() {
        n = M("import { Icon } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Fr(e) {
    let n,
      s,
      a = e[11] + '';
    return {
      c() {
        (n = z('option')), (s = M(a)), (n.__value = e[11]), (n.value = n.__value);
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Or(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o = Sr[t[9]] + '';
    return (
      (n = new te({ props: { name: t[7], className: 'margin-s', width: t[1] } })),
      {
        c() {
          (e = z('div')),
            bt(n.$$.fragment),
            (s = T()),
            (a = z('small')),
            (r = M(o)),
            (l = T()),
            B(e, 'class', 'card flex-align--center flex-justify--center margin-s padding-m bg--graa6');
        },
        m(t, o) {
          w(t, e, o), xt(n, e, null), x(e, s), x(e, a), x(a, r), x(e, l), (i = !0);
        },
        p(t, e) {
          const s = {};
          2 & e && (s.width = t[1]), n.$set(s);
        },
        i(t) {
          i || (pt(n.$$.fragment, t), (i = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (i = !1);
        },
        d(t) {
          t && y(e), wt(n);
        },
      }
    );
  }
  function Vr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Dr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ir(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [_r] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Dr(e) {
    let n;
    return {
      c() {
        n = M(
          '<svg class="icon-svg" viewBox="0 0 50 50">\n  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-name"></use>\n</svg>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function _r(e) {
    let n;
    return {
      c() {
        n = M('<Icon name="iconname" />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Pr(e) {
    let n,
      s,
      a,
      r,
      l,
      i,
      o,
      c = Hr[e[9]] + '';
    return (
      (s = new te({ props: { name: e[7], className: 'margin-s', width: 86 } })),
      {
        c() {
          (n = z('div')),
            bt(s.$$.fragment),
            (a = T()),
            (r = z('small')),
            (l = M(c)),
            (i = T()),
            B(n, 'class', 'card flex-align--center flex-justify--center margin-s padding-m bg--graa6');
        },
        m(t, e) {
          w(t, n, e), xt(s, n, null), x(n, a), x(n, r), x(r, l), x(n, i), (o = !0);
        },
        p: t,
        i(t) {
          o || (pt(s.$$.fragment, t), (o = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && y(n), wt(s);
        },
      }
    );
  }
  function qr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Wr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Rr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Gr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Wr(e) {
    let n;
    return {
      c() {
        n = M(
          '<svg class="icon-svg" viewBox="0 0 50 50">\n  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-name"></use>\n</svg>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Gr(e) {
    let n;
    return {
      c() {
        n = M('<Icon name="iconname" />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ur(t) {
    let e,
      n,
      s,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      C,
      L,
      S,
      N,
      E,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K,
      J,
      tt,
      et,
      nt,
      st,
      rt,
      lt,
      it,
      ot,
      ct,
      dt,
      ut,
      ht,
      $t,
      vt,
      yt,
      kt,
      zt,
      Ct,
      Mt,
      Tt,
      Lt,
      Ht = 'svelte' === t[2] && Er(t),
      St = Object.keys(le),
      Bt = [];
    for (let e = 0; e < St.length; e += 1) Bt[e] = Fr(Ar(t, St, e));
    (C = new te({ props: { name: 'angle-left', width: 18 } })),
      (_ = new te({ props: { name: 'angle-right', width: 18 } }));
    let Nt = Sr,
      At = [];
    for (let e = 0; e < Nt.length; e += 1) At[e] = Or(Nr(t, Nt, e));
    const Et = (t) =>
        mt(At[t], 1, 1, () => {
          At[t] = null;
        }),
      jt = [Ir, Vr],
      Ft = [];
    function Ot(t, e) {
      return 'svelte' === t[2] ? 0 : 1;
    }
    (W = Ot(t)), (G = Ft[W] = jt[W](t));
    let Vt = Hr,
      It = [];
    for (let e = 0; e < Vt.length; e += 1) It[e] = Pr(Br(t, Vt, e));
    const Dt = (t) =>
        mt(It[t], 1, 1, () => {
          It[t] = null;
        }),
      _t = [Rr, qr],
      Pt = [];
    function qt(t, e) {
      return 'svelte' === t[2] ? 0 : 1;
    }
    return (
      (tt = qt(t)),
      (et = Pt[tt] = _t[tt](t)),
      (dt = new te({ props: { name: 'figcaption-pin', className: 'margin-s', width: 36 } })),
      (Ct = new Lr({})),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Icon library'),
            (n = T()),
            Ht && Ht.c(),
            (s = T()),
            (r = z('h3')),
            (r.textContent = 'Icons'),
            (l = T()),
            (i = z('p')),
            (i.innerHTML =
              'Icons are simple and dynamic only made with fill. When using the class <em>icon-svg</em>, fill is set to the css\n  variable <em>--icon-fill</em> which defaults to <em>currentColor</em>. This means that the icon will inherit the color\n  from the nearest parent where color is defined.'),
            (o = T()),
            (c = z('p')),
            (c.textContent =
              'But by changing the css variable, the color can be handled separately from any set color.'),
            (d = T()),
            (u = z('p')),
            (u.innerHTML =
              'Most icons are derived from <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">FontAwesome</a> using\n  only the\n  <b>light</b>\n  or <b>solid</b> library!'),
            (f = T()),
            (g = z('div')),
            (p = z('div')),
            (m = M('Change icon color ')),
            (h = z('select')),
            ($ = z('option')),
            ($.textContent = 'black');
          for (let t = 0; t < Bt.length; t += 1) Bt[t].c();
          (v = T()),
            (b = z('button')),
            bt(C.$$.fragment),
            (L = T()),
            (S = z('p')),
            (N = M('Size: ')),
            (E = z('input')),
            (V = M('px')),
            (I = T()),
            (D = z('button')),
            bt(_.$$.fragment),
            (P = T()),
            (q = z('div'));
          for (let t = 0; t < At.length; t += 1) At[t].c();
          (R = T()),
            G.c(),
            (U = T()),
            (Z = z('h3')),
            (Z.textContent = 'Graphics'),
            (Y = T()),
            (X = z('p')),
            (X.textContent = 'Graphics are capable of containing more layers i.e static colors on stroke and fill.'),
            (Q = T()),
            (K = z('div'));
          for (let t = 0; t < It.length; t += 1) It[t].c();
          (J = T()),
            et.c(),
            (nt = T()),
            (st = z('h3')),
            (st.textContent = '* Figcaption pin background'),
            (rt = T()),
            (lt = z('p')),
            (lt.innerHTML =
              'The &quot;background&quot; of figcaption-pin can be changed through the css variable <em>--ebds-figcaption-bg</em>'),
            (it = T()),
            (ot = z('div')),
            (ct = z('div')),
            bt(dt.$$.fragment),
            (ut = T()),
            (ht = z('small')),
            (ht.textContent = 'figcaption-pin'),
            ($t = T()),
            (vt = z('h3')),
            (vt.textContent = 'Frontpage icons (DrEdition)'),
            (yt = T()),
            (kt = z('p')),
            (kt.textContent = 'Icons used in DrEdition Aptoma i.e ekstrabladet.dk frontpage cards'),
            (zt = T()),
            bt(Ct.$$.fragment),
            B(e, 'class', 'color--eb'),
            ($.__value = 'black'),
            ($.value = $.__value),
            void 0 === t[0] && at(() => t[5].call(h)),
            B(p, 'class', 'margin-m--r'),
            B(b, 'class', 'button button--cancel margin-m--r'),
            B(E, 'type', 'number'),
            F(E, 'width', '45px'),
            B(D, 'class', 'button button--cancel margin-m--l'),
            B(g, 'class', 'flex flex-row flex-justify--center flex-align--center'),
            B(q, 'class', 'flex flex-wrap--wrap'),
            F(q, '--icon-fill', 'var(--color--' + t[0] + ')'),
            B(K, 'class', 'flex flex-wrap--wrap'),
            B(ct, 'class', 'card flex-align--center flex-justify--center margin-s padding-m bg--graa6'),
            B(ot, 'class', 'flex flex-wrap--wrap');
        },
        m(a, y) {
          w(a, e, y),
            w(a, n, y),
            Ht && Ht.m(a, y),
            w(a, s, y),
            w(a, r, y),
            w(a, l, y),
            w(a, i, y),
            w(a, o, y),
            w(a, c, y),
            w(a, d, y),
            w(a, u, y),
            w(a, f, y),
            w(a, g, y),
            x(g, p),
            x(p, m),
            x(p, h),
            x(h, $);
          for (let t = 0; t < Bt.length; t += 1) Bt[t] && Bt[t].m(h, null);
          O(h, t[0]),
            x(g, v),
            x(g, b),
            xt(C, b, null),
            x(g, L),
            x(g, S),
            x(S, N),
            x(S, E),
            j(E, t[1]),
            x(S, V),
            x(g, I),
            x(g, D),
            xt(_, D, null),
            w(a, P, y),
            w(a, q, y);
          for (let t = 0; t < At.length; t += 1) At[t] && At[t].m(q, null);
          w(a, R, y), Ft[W].m(a, y), w(a, U, y), w(a, Z, y), w(a, Y, y), w(a, X, y), w(a, Q, y), w(a, K, y);
          for (let t = 0; t < It.length; t += 1) It[t] && It[t].m(K, null);
          w(a, J, y),
            Pt[tt].m(a, y),
            w(a, nt, y),
            w(a, st, y),
            w(a, rt, y),
            w(a, lt, y),
            w(a, it, y),
            w(a, ot, y),
            x(ot, ct),
            xt(dt, ct, null),
            x(ct, ut),
            x(ct, ht),
            w(a, $t, y),
            w(a, vt, y),
            w(a, yt, y),
            w(a, kt, y),
            w(a, zt, y),
            xt(Ct, a, y),
            (Mt = !0),
            Tt ||
              ((Lt = [H(h, 'change', t[5]), H(b, 'click', t[3]), H(E, 'input', t[6]), H(D, 'click', t[4])]), (Tt = !0));
        },
        p(t, [e]) {
          if (
            ('svelte' === t[2]
              ? Ht
                ? 4 & e && pt(Ht, 1)
                : ((Ht = Er(t)), Ht.c(), pt(Ht, 1), Ht.m(s.parentNode, s))
              : Ht &&
                (ft(),
                mt(Ht, 1, 1, () => {
                  Ht = null;
                }),
                gt()),
            0 & e)
          ) {
            let n;
            for (St = Object.keys(le), n = 0; n < St.length; n += 1) {
              const s = Ar(t, St, n);
              Bt[n] ? Bt[n].p(s, e) : ((Bt[n] = Fr(s)), Bt[n].c(), Bt[n].m(h, null));
            }
            for (; n < Bt.length; n += 1) Bt[n].d(1);
            Bt.length = St.length;
          }
          if ((1 & e && O(h, t[0]), 2 & e && A(E.value) !== t[1] && j(E, t[1]), 2 & e)) {
            let n;
            for (Nt = Sr, n = 0; n < Nt.length; n += 1) {
              const s = Nr(t, Nt, n);
              At[n] ? (At[n].p(s, e), pt(At[n], 1)) : ((At[n] = Or(s)), At[n].c(), pt(At[n], 1), At[n].m(q, null));
            }
            for (ft(), n = Nt.length; n < At.length; n += 1) Et(n);
            gt();
          }
          (!Mt || 1 & e) && F(q, '--icon-fill', 'var(--color--' + t[0] + ')');
          let n = W;
          if (
            ((W = Ot(t)),
            W !== n &&
              (ft(),
              mt(Ft[n], 1, 1, () => {
                Ft[n] = null;
              }),
              gt(),
              (G = Ft[W]),
              G || ((G = Ft[W] = jt[W](t)), G.c()),
              pt(G, 1),
              G.m(U.parentNode, U)),
            0 & e)
          ) {
            let n;
            for (Vt = Hr, n = 0; n < Vt.length; n += 1) {
              const s = Br(t, Vt, n);
              It[n] ? (It[n].p(s, e), pt(It[n], 1)) : ((It[n] = Pr(s)), It[n].c(), pt(It[n], 1), It[n].m(K, null));
            }
            for (ft(), n = Vt.length; n < It.length; n += 1) Dt(n);
            gt();
          }
          let a = tt;
          (tt = qt(t)),
            tt !== a &&
              (ft(),
              mt(Pt[a], 1, 1, () => {
                Pt[a] = null;
              }),
              gt(),
              (et = Pt[tt]),
              et || ((et = Pt[tt] = _t[tt](t)), et.c()),
              pt(et, 1),
              et.m(nt.parentNode, nt));
        },
        i(t) {
          if (!Mt) {
            pt(Ht), pt(C.$$.fragment, t), pt(_.$$.fragment, t);
            for (let t = 0; t < Nt.length; t += 1) pt(At[t]);
            pt(G);
            for (let t = 0; t < Vt.length; t += 1) pt(It[t]);
            pt(et), pt(dt.$$.fragment, t), pt(Ct.$$.fragment, t), (Mt = !0);
          }
        },
        o(t) {
          mt(Ht), mt(C.$$.fragment, t), mt(_.$$.fragment, t), (At = At.filter(Boolean));
          for (let t = 0; t < At.length; t += 1) mt(At[t]);
          mt(G), (It = It.filter(Boolean));
          for (let t = 0; t < It.length; t += 1) mt(It[t]);
          mt(et), mt(dt.$$.fragment, t), mt(Ct.$$.fragment, t), (Mt = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            Ht && Ht.d(t),
            t && y(s),
            t && y(r),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            t && y(g),
            k(Bt, t),
            wt(C),
            wt(_),
            t && y(P),
            t && y(q),
            k(At, t),
            t && y(R),
            Ft[W].d(t),
            t && y(U),
            t && y(Z),
            t && y(Y),
            t && y(X),
            t && y(Q),
            t && y(K),
            k(It, t),
            t && y(J),
            Pt[tt].d(t),
            t && y(nt),
            t && y(st),
            t && y(rt),
            t && y(lt),
            t && y(it),
            t && y(ot),
            wt(dt),
            t && y($t),
            t && y(vt),
            t && y(yt),
            t && y(kt),
            t && y(zt),
            wt(Ct, t),
            (Tt = !1),
            a(Lt);
        },
      }
    );
  }
  function Zr(t, e, n) {
    let s;
    u(t, Yn, (t) => n(2, (s = t)));
    let a = 'black',
      r = 14;
    return [
      a,
      r,
      s,
      () => n(1, --r),
      () => n(1, ++r),
      function () {
        (a = V(this)), n(0, a);
      },
      function () {
        (r = A(this.value)), n(1, r);
      },
    ];
  }
  function Yr(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [Xr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('table')),
            (s.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>delay</td> \n        <td>number</td> \n        <td>150</td> \n        <td></td></tr> \n      <tr><td>size</td> \n        <td>number</td> \n        <td>18</td> \n        <td>pixel value which translates to <em>--icon-size: [size]px</em></td></tr></tbody>'),
            B(s, 'class', 'table');
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), w(t, s, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), t && y(s);
        },
      }
    );
  }
  function Xr(e) {
    let n;
    return {
      c() {
        n = M("import { Spinner } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Qr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Jr] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Kr(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [tl] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Jr(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="loader flex flex--center">\n    <svg viewBox="0 0 18 18" class="bounce bounce1">\n      <use xlink:href="#circle-solid"></use>\n    </svg>\n    <svg viewBox="0 0 18 18" class="bounce bounce2">\n      <use xlink:href="#circle-solid"></use>\n    </svg>\n    <svg viewBox="0 0 18 18" class="bounce bounce3">\n      <use xlink:href="#circle-solid"></use>\n    </svg>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function tl(e) {
    let n;
    return {
      c() {
        n = M('<Spinner />');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function el(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u = 'svelte' === t[0] && Yr(t);
    r = new Bn({});
    const f = [Kr, Qr],
      g = [];
    function p(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (i = p(t)),
      (o = g[i] = f[i](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Spinner'),
            (n = T()),
            u && u.c(),
            (s = T()),
            (a = z('div')),
            bt(r.$$.fragment),
            (l = T()),
            o.c(),
            (c = L()),
            B(e, 'class', 'color--eb'),
            B(a, 'class', 'padding-l');
        },
        m(t, o) {
          w(t, e, o),
            w(t, n, o),
            u && u.m(t, o),
            w(t, s, o),
            w(t, a, o),
            xt(r, a, null),
            w(t, l, o),
            g[i].m(t, o),
            w(t, c, o),
            (d = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? u
              ? 1 & e && pt(u, 1)
              : ((u = Yr(t)), u.c(), pt(u, 1), u.m(s.parentNode, s))
            : u &&
              (ft(),
              mt(u, 1, 1, () => {
                u = null;
              }),
              gt());
          let n = i;
          (i = p(t)),
            i !== n &&
              (ft(),
              mt(g[n], 1, 1, () => {
                g[n] = null;
              }),
              gt(),
              (o = g[i]),
              o || ((o = g[i] = f[i](t)), o.c()),
              pt(o, 1),
              o.m(c.parentNode, c));
        },
        i(t) {
          d || (pt(u), pt(r.$$.fragment, t), pt(o), (d = !0));
        },
        o(t) {
          mt(u), mt(r.$$.fragment, t), mt(o), (d = !1);
        },
        d(t) {
          t && y(e), t && y(n), u && u.d(t), t && y(s), t && y(a), wt(r), t && y(l), g[i].d(t), t && y(c);
        },
      }
    );
  }
  function nl(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function sl(e) {
    let n;
    return {
      c() {
        (n = z('p')), (n.textContent = 'Tabs er en ren Svelte component.');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function al(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [rl] }, $$scope: { ctx: t } } })),
      (r = new Rn({ props: { $$slots: { default: [gl] }, $$scope: { ctx: t } } })),
      (i = new Xt({ props: { language: 'html', $$slots: { default: [pl] }, $$scope: { ctx: t } } })),
      (u = new Rn({ props: { $$slots: { default: [yl] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [kl] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('h2')),
            (s.textContent = 'Style: Tabs'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h2')),
            (c.textContent = 'Style: Pillnavigation'),
            (d = T()),
            bt(u.$$.fragment),
            (f = T()),
            bt(g.$$.fragment),
            B(s, 'class', 'margin-xl--t margin-m--b'),
            B(c, 'class', 'margin-xl--t margin-m--b');
        },
        m(t, m) {
          xt(e, t, m),
            w(t, n, m),
            w(t, s, m),
            w(t, a, m),
            xt(r, t, m),
            w(t, l, m),
            xt(i, t, m),
            w(t, o, m),
            w(t, c, m),
            w(t, d, m),
            xt(u, t, m),
            w(t, f, m),
            xt(g, t, m),
            (p = !0);
        },
        p(t, n) {
          const s = {};
          128 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const a = {};
          135 & n && (a.$$scope = { dirty: n, ctx: t }), r.$set(a);
          const l = {};
          128 & n && (l.$$scope = { dirty: n, ctx: t }), i.$set(l);
          const o = {};
          135 & n && (o.$$scope = { dirty: n, ctx: t }), u.$set(o);
          const c = {};
          128 & n && (c.$$scope = { dirty: n, ctx: t }), g.$set(c);
        },
        i(t) {
          p ||
            (pt(e.$$.fragment, t),
            pt(r.$$.fragment, t),
            pt(i.$$.fragment, t),
            pt(u.$$.fragment, t),
            pt(g.$$.fragment, t),
            (p = !0));
        },
        o(t) {
          mt(e.$$.fragment, t),
            mt(r.$$.fragment, t),
            mt(i.$$.fragment, t),
            mt(u.$$.fragment, t),
            mt(g.$$.fragment, t),
            (p = !1);
        },
        d(t) {
          wt(e, t),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            wt(u, t),
            t && y(f),
            wt(g, t);
        },
      }
    );
  }
  function rl(e) {
    let n;
    return {
      c() {
        n = M("import { Tabs, Tab, TabContent, TabList } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ll(t) {
    let e;
    return {
      c() {
        e = M('Tab 1');
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function il(t) {
    let e;
    return {
      c() {
        e = M('Tab 2 Long Text Bla Bla');
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function ol(t) {
    let e;
    return {
      c() {
        e = M('Tab 3 Long Text Bla Bla');
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function cl(t) {
    let e, n, s, a, r, l;
    return (
      (e = new En({ props: { $$slots: { default: [ll] }, $$scope: { ctx: t } } })),
      (s = new En({ props: { $$slots: { default: [il] }, $$scope: { ctx: t } } })),
      (r = new En({ props: { $$slots: { default: [ol] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment), (a = T()), bt(r.$$.fragment);
        },
        m(t, i) {
          xt(e, t, i), w(t, n, i), xt(s, t, i), w(t, a, i), xt(r, t, i), (l = !0);
        },
        p(t, n) {
          const a = {};
          128 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
          const l = {};
          128 & n && (l.$$scope = { dirty: n, ctx: t }), s.$set(l);
          const i = {};
          128 & n && (i.$$scope = { dirty: n, ctx: t }), r.$set(i);
        },
        i(t) {
          l || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), pt(r.$$.fragment, t), (l = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), mt(r.$$.fragment, t), (l = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t), t && y(a), wt(r, t);
        },
      }
    );
  }
  function dl(t) {
    let e, n, s, a;
    return {
      c() {
        (e = z('div')),
          (n = z('h2')),
          (n.textContent = 'Content 1'),
          (s = T()),
          (a = new D(!1)),
          B(n, 'class', 'card-header'),
          (a.a = null),
          B(e, 'class', 'card margin-m--t');
      },
      m(r, l) {
        w(r, e, l), x(e, n), x(e, s), a.m(t[0], e);
      },
      p(t, e) {
        1 & e && a.p(t[0]);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function ul(t) {
    let e, n, s, a;
    return {
      c() {
        (e = z('div')),
          (n = z('h2')),
          (n.textContent = 'Content 2'),
          (s = T()),
          (a = new D(!1)),
          B(n, 'class', 'card-header'),
          (a.a = null),
          B(e, 'class', 'card margin-m--t');
      },
      m(r, l) {
        w(r, e, l), x(e, n), x(e, s), a.m(t[1], e);
      },
      p(t, e) {
        2 & e && a.p(t[1]);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function fl(t) {
    let e, n, s, a;
    return {
      c() {
        (e = z('div')),
          (n = z('h2')),
          (n.textContent = 'Content 3'),
          (s = T()),
          (a = new D(!1)),
          B(n, 'class', 'card-header'),
          (a.a = null),
          B(e, 'class', 'card margin-m--t');
      },
      m(r, l) {
        w(r, e, l), x(e, n), x(e, s), a.m(t[2], e);
      },
      p(t, e) {
        4 & e && a.p(t[2]);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function gl(t) {
    let e, n, s, a, r, l, i, o;
    return (
      (e = new _n({ props: { $$slots: { default: [cl] }, $$scope: { ctx: t } } })),
      (s = new Vn({ props: { $$slots: { default: [dl] }, $$scope: { ctx: t } } })),
      (r = new Vn({ props: { $$slots: { default: [ul] }, $$scope: { ctx: t } } })),
      (i = new Vn({ props: { $$slots: { default: [fl] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment), (a = T()), bt(r.$$.fragment), (l = T()), bt(i.$$.fragment);
        },
        m(t, c) {
          xt(e, t, c), w(t, n, c), xt(s, t, c), w(t, a, c), xt(r, t, c), w(t, l, c), xt(i, t, c), (o = !0);
        },
        p(t, n) {
          const a = {};
          128 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
          const l = {};
          129 & n && (l.$$scope = { dirty: n, ctx: t }), s.$set(l);
          const o = {};
          130 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const c = {};
          132 & n && (c.$$scope = { dirty: n, ctx: t }), i.$set(c);
        },
        i(t) {
          o || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), pt(r.$$.fragment, t), pt(i.$$.fragment, t), (o = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), mt(r.$$.fragment, t), mt(i.$$.fragment, t), (o = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t), t && y(a), wt(r, t), t && y(l), wt(i, t);
        },
      }
    );
  }
  function pl(e) {
    let n;
    return {
      c() {
        n = M(
          '<Tabs>\n  <TabList>\n    <Tab>Tab 1</Tab>\n    <Tab>Tab 2</Tab>\n    <Tab>Tab 3</Tab>\n  </TabList>\n  <TabContent>\n    Content 1\n  </TabContent>\n  <TabContent>\n    Content 2\n  </TabContent>\n  <TabContent>\n    Content 3\n  </TabContent>\n</Tabs>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ml(t) {
    let e;
    return {
      c() {
        e = M('Tab 1');
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function hl(t) {
    let e;
    return {
      c() {
        e = M('Tab 2');
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function $l(t) {
    let e;
    return {
      c() {
        e = M('Tab 3');
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && y(e);
      },
    };
  }
  function vl(t) {
    let e, n, s, a, r, l;
    return (
      (e = new En({ props: { $$slots: { default: [ml] }, $$scope: { ctx: t } } })),
      (s = new En({ props: { $$slots: { default: [hl] }, $$scope: { ctx: t } } })),
      (r = new En({ props: { $$slots: { default: [$l] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment), (a = T()), bt(r.$$.fragment);
        },
        m(t, i) {
          xt(e, t, i), w(t, n, i), xt(s, t, i), w(t, a, i), xt(r, t, i), (l = !0);
        },
        p(t, n) {
          const a = {};
          128 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
          const l = {};
          128 & n && (l.$$scope = { dirty: n, ctx: t }), s.$set(l);
          const i = {};
          128 & n && (i.$$scope = { dirty: n, ctx: t }), r.$set(i);
        },
        i(t) {
          l || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), pt(r.$$.fragment, t), (l = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), mt(r.$$.fragment, t), (l = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t), t && y(a), wt(r, t);
        },
      }
    );
  }
  function bl(t) {
    let e, n, s, a, r, l;
    return {
      c() {
        (e = z('div')),
          (n = z('h2')),
          (n.textContent = 'Content 1'),
          (s = T()),
          (a = z('div')),
          B(n, 'class', 'card-header'),
          B(a, 'class', 'card-content'),
          B(a, 'contenteditable', 'true'),
          void 0 === t[0] && at(() => t[4].call(a)),
          B(e, 'class', 'card margin-m--t');
      },
      m(i, o) {
        w(i, e, o),
          x(e, n),
          x(e, s),
          x(e, a),
          void 0 !== t[0] && (a.innerHTML = t[0]),
          r || ((l = H(a, 'input', t[4])), (r = !0));
      },
      p(t, e) {
        1 & e && t[0] !== a.innerHTML && (a.innerHTML = t[0]);
      },
      d(t) {
        t && y(e), (r = !1), l();
      },
    };
  }
  function xl(t) {
    let e, n, s, a, r, l;
    return {
      c() {
        (e = z('div')),
          (n = z('h2')),
          (n.textContent = 'Content 2'),
          (s = T()),
          (a = z('div')),
          B(n, 'class', 'card-header'),
          B(a, 'class', 'card-content'),
          B(a, 'contenteditable', 'true'),
          void 0 === t[1] && at(() => t[5].call(a)),
          B(e, 'class', 'card margin-m--t');
      },
      m(i, o) {
        w(i, e, o),
          x(e, n),
          x(e, s),
          x(e, a),
          void 0 !== t[1] && (a.innerHTML = t[1]),
          r || ((l = H(a, 'input', t[5])), (r = !0));
      },
      p(t, e) {
        2 & e && t[1] !== a.innerHTML && (a.innerHTML = t[1]);
      },
      d(t) {
        t && y(e), (r = !1), l();
      },
    };
  }
  function wl(t) {
    let e, n, s, a, r, l;
    return {
      c() {
        (e = z('div')),
          (n = z('h2')),
          (n.textContent = 'Content 3'),
          (s = T()),
          (a = z('div')),
          B(n, 'class', 'card-header'),
          B(a, 'class', 'card-content'),
          B(a, 'contenteditable', 'true'),
          void 0 === t[2] && at(() => t[6].call(a)),
          B(e, 'class', 'card margin-m--t');
      },
      m(i, o) {
        w(i, e, o),
          x(e, n),
          x(e, s),
          x(e, a),
          void 0 !== t[2] && (a.innerHTML = t[2]),
          r || ((l = H(a, 'input', t[6])), (r = !0));
      },
      p(t, e) {
        4 & e && t[2] !== a.innerHTML && (a.innerHTML = t[2]);
      },
      d(t) {
        t && y(e), (r = !1), l();
      },
    };
  }
  function yl(t) {
    let e, n, s, a, r, l, i, o;
    return (
      (e = new _n({ props: { type: 'pillnavigation', $$slots: { default: [vl] }, $$scope: { ctx: t } } })),
      (s = new Vn({ props: { $$slots: { default: [bl] }, $$scope: { ctx: t } } })),
      (r = new Vn({ props: { $$slots: { default: [xl] }, $$scope: { ctx: t } } })),
      (i = new Vn({ props: { $$slots: { default: [wl] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment), (a = T()), bt(r.$$.fragment), (l = T()), bt(i.$$.fragment);
        },
        m(t, c) {
          xt(e, t, c), w(t, n, c), xt(s, t, c), w(t, a, c), xt(r, t, c), w(t, l, c), xt(i, t, c), (o = !0);
        },
        p(t, n) {
          const a = {};
          128 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
          const l = {};
          129 & n && (l.$$scope = { dirty: n, ctx: t }), s.$set(l);
          const o = {};
          130 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const c = {};
          132 & n && (c.$$scope = { dirty: n, ctx: t }), i.$set(c);
        },
        i(t) {
          o || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), pt(r.$$.fragment, t), pt(i.$$.fragment, t), (o = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), mt(r.$$.fragment, t), mt(i.$$.fragment, t), (o = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t), t && y(a), wt(r, t), t && y(l), wt(i, t);
        },
      }
    );
  }
  function kl(e) {
    let n;
    return {
      c() {
        n = M(
          '<Tabs>\n  <TabList type="pillnavigation">\n    <Tab>Tab 1</Tab>\n    <Tab>Tab 2</Tab>\n    <Tab>Tab 3</Tab>\n  </TabList>\n  <TabContent>\n    Content 1\n  </TabContent>\n  <TabContent>\n    Content 2\n  </TabContent>\n  <TabContent>\n    Content 3\n  </TabContent>\n</Tabs>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function zl(t) {
    let e, n, s, a, r, l;
    const i = [al, sl],
      o = [];
    function c(t, e) {
      return 'svelte' === t[3] ? 0 : 1;
    }
    return (
      (s = c(t)),
      (a = o[s] = i[s](t)),
      {
        c() {
          (e = z('h1')), (e.textContent = 'Tabs'), (n = T()), a.c(), (r = L()), B(e, 'class', 'color--eb');
        },
        m(t, a) {
          w(t, e, a), w(t, n, a), o[s].m(t, a), w(t, r, a), (l = !0);
        },
        p(t, [e]) {
          let n = s;
          (s = c(t)),
            s === n
              ? o[s].p(t, e)
              : (ft(),
                mt(o[n], 1, 1, () => {
                  o[n] = null;
                }),
                gt(),
                (a = o[s]),
                a ? a.p(t, e) : ((a = o[s] = i[s](t)), a.c()),
                pt(a, 1),
                a.m(r.parentNode, r));
        },
        i(t) {
          l || (pt(a), (l = !0));
        },
        o(t) {
          mt(a), (l = !1);
        },
        d(t) {
          t && y(e), t && y(n), o[s].d(t), t && y(r);
        },
      }
    );
  }
  function Cl(t, e, n) {
    let s;
    u(t, Yn, (t) => n(3, (s = t)));
    let a = Zn(),
      r = Zn(),
      l = Zn();
    return [
      a,
      r,
      l,
      s,
      function () {
        (a = this.innerHTML), n(0, a);
      },
      function () {
        (r = this.innerHTML), n(1, r);
      },
      function () {
        (l = this.innerHTML), n(2, l);
      },
    ];
  }
  const Ml = (t) => ({}),
    Tl = (t) => ({ slot: 'on' }),
    Ll = (t) => ({}),
    Hl = (t) => ({ slot: 'off' }),
    Sl = (t) => ({}),
    Bl = (t) => ({ slot: 'on' }),
    Nl = (t) => ({}),
    Al = (t) => ({ slot: 'off' }),
    El = (t) => ({}),
    jl = (t) => ({ slot: 'on' }),
    Fl = (t) => ({}),
    Ol = (t) => ({ slot: 'off' }),
    Vl = (t) => ({}),
    Il = (t) => ({ slot: 'on' }),
    Dl = (t) => ({}),
    _l = (t) => ({ slot: 'off' });
  function Pl(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [ql] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment),
            (n = T()),
            (s = z('table')),
            (s.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>defaultState</td> \n        <td>boolean</td> \n        <td>true</td> \n        <td>Should the toggler be on or of on mount</td></tr> \n      <tr><td>isSwitch</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Convents into a swicth, see example further down</td></tr> \n      <tr><td>disabled</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Disable the toggle</td></tr></tbody>'),
            B(s, 'class', 'table');
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), w(t, s, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), t && y(s);
        },
      }
    );
  }
  function ql(e) {
    let n;
    return {
      c() {
        n = M("import { Toggler } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Rl(t) {
    let e;
    const n = t[1].default,
      s = f(n, t, t[2], Il),
      a =
        s ||
        (function (t) {
          let e;
          return {
            c() {
              e = M('on');
            },
            m(t, n) {
              w(t, e, n);
            },
            d(t) {
              t && y(e);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, n) {
        a && a.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 4 & a) && m(s, n, t, t[2], e ? p(n, t[2], a, Vl) : h(t[2]), Il);
      },
      i(t) {
        e || (pt(a, t), (e = !0));
      },
      o(t) {
        mt(a, t), (e = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function Wl(t) {
    let e;
    const n = t[1].default,
      s = f(n, t, t[2], _l),
      a =
        s ||
        (function (t) {
          let e;
          return {
            c() {
              e = M('off');
            },
            m(t, n) {
              w(t, e, n);
            },
            d(t) {
              t && y(e);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, n) {
        a && a.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 4 & a) && m(s, n, t, t[2], e ? p(n, t[2], a, Dl) : h(t[2]), _l);
      },
      i(t) {
        e || (pt(a, t), (e = !0));
      },
      o(t) {
        mt(a, t), (e = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function Gl(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Zl] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Ul(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [Yl] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Zl(e) {
    let n;
    return {
      c() {
        n = M(
          '<label class="toggle">\n  <input type="checkbox" hidden class="toggle-input" />\n  <span class="toggle toggle-on">on</span>\n  <span class="toggle toggle-off">off</span>\n</label>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Yl(e) {
    let n;
    return {
      c() {
        n = M('<Toggler>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Xl(e) {
    let n;
    const s = e[1].default,
      a = f(s, e, e[2], jl),
      r =
        a ||
        (function (e) {
          let n, s;
          return (
            (n = new te({ props: { name: 'angle-down', style: 'width: 24px; height: 24px;' } })),
            {
              c() {
                bt(n.$$.fragment);
              },
              m(t, e) {
                xt(n, t, e), (s = !0);
              },
              p: t,
              i(t) {
                s || (pt(n.$$.fragment, t), (s = !0));
              },
              o(t) {
                mt(n.$$.fragment, t), (s = !1);
              },
              d(t) {
                wt(n, t);
              },
            }
          );
        })();
    return {
      c() {
        r && r.c();
      },
      m(t, e) {
        r && r.m(t, e), (n = !0);
      },
      p(t, e) {
        a && a.p && (!n || 4 & e) && m(a, s, t, t[2], n ? p(s, t[2], e, El) : h(t[2]), jl);
      },
      i(t) {
        n || (pt(r, t), (n = !0));
      },
      o(t) {
        mt(r, t), (n = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function Ql(e) {
    let n;
    const s = e[1].default,
      a = f(s, e, e[2], Ol),
      r =
        a ||
        (function (e) {
          let n, s;
          return (
            (n = new te({ props: { name: 'angle-up', style: 'width: 24px; height: 24px;' } })),
            {
              c() {
                bt(n.$$.fragment);
              },
              m(t, e) {
                xt(n, t, e), (s = !0);
              },
              p: t,
              i(t) {
                s || (pt(n.$$.fragment, t), (s = !0));
              },
              o(t) {
                mt(n.$$.fragment, t), (s = !1);
              },
              d(t) {
                wt(n, t);
              },
            }
          );
        })();
    return {
      c() {
        r && r.c();
      },
      m(t, e) {
        r && r.m(t, e), (n = !0);
      },
      p(t, e) {
        a && a.p && (!n || 4 & e) && m(a, s, t, t[2], n ? p(s, t[2], e, Fl) : h(t[2]), Ol);
      },
      i(t) {
        n || (pt(r, t), (n = !0));
      },
      o(t) {
        mt(r, t), (n = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function Kl(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ti] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function Jl(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ei] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ti(e) {
    let n;
    return {
      c() {
        n = M(
          '<label class="toggle">\n  <input type="checkbox" hidden class="toggle-input" />\n  <svg viewBox="0 0 18 18" class="toggle toggle-on">\n    <use xlink:href="#angle-down"></use>\n  </svg>\n  <svg viewBox="0 0 18 18" class="toggle toggle-off">\n    <use xlink:href="#angle-up"></use>\n  </svg>\n</label>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ei(e) {
    let n;
    return {
      c() {
        n = M(
          '<Toggler>\n  <slot slot="on">\n    <Icon name="angle-down" style="width: 24px; height: 24px;" />\n  </slot>\n  <slot slot="off">\n    <Icon name="angle-up" style="width: 24px; height: 24px;" />\n  </slot>\n</Toggler>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ni(t) {
    let e;
    const n = t[1].default,
      s = f(n, t, t[2], Bl),
      a =
        s ||
        (function (t) {
          let e;
          return {
            c() {
              e = M('on');
            },
            m(t, n) {
              w(t, e, n);
            },
            d(t) {
              t && y(e);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, n) {
        a && a.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 4 & a) && m(s, n, t, t[2], e ? p(n, t[2], a, Sl) : h(t[2]), Bl);
      },
      i(t) {
        e || (pt(a, t), (e = !0));
      },
      o(t) {
        mt(a, t), (e = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function si(t) {
    let e;
    const n = t[1].default,
      s = f(n, t, t[2], Al),
      a =
        s ||
        (function (t) {
          let e;
          return {
            c() {
              e = M('off');
            },
            m(t, n) {
              w(t, e, n);
            },
            d(t) {
              t && y(e);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, n) {
        a && a.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 4 & a) && m(s, n, t, t[2], e ? p(n, t[2], a, Nl) : h(t[2]), Al);
      },
      i(t) {
        e || (pt(a, t), (e = !0));
      },
      o(t) {
        mt(a, t), (e = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function ai(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [li] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ri(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [ii] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function li(e) {
    let n;
    return {
      c() {
        n = M('Sadly, Svelte only');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ii(e) {
    let n;
    return {
      c() {
        n = M('<Toggler isSwitch={true}>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function oi(t) {
    let e;
    const n = t[1].default,
      s = f(n, t, t[2], Tl),
      a =
        s ||
        (function (t) {
          let e;
          return {
            c() {
              e = M('on');
            },
            m(t, n) {
              w(t, e, n);
            },
            d(t) {
              t && y(e);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, n) {
        a && a.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 4 & a) && m(s, n, t, t[2], e ? p(n, t[2], a, Ml) : h(t[2]), Tl);
      },
      i(t) {
        e || (pt(a, t), (e = !0));
      },
      o(t) {
        mt(a, t), (e = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function ci(t) {
    let e;
    const n = t[1].default,
      s = f(n, t, t[2], Hl),
      a =
        s ||
        (function (t) {
          let e;
          return {
            c() {
              e = M('off');
            },
            m(t, n) {
              w(t, e, n);
            },
            d(t) {
              t && y(e);
            },
          };
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, n) {
        a && a.m(t, n), (e = !0);
      },
      p(t, a) {
        s && s.p && (!e || 4 & a) && m(s, n, t, t[2], e ? p(n, t[2], a, Ll) : h(t[2]), Hl);
      },
      i(t) {
        e || (pt(a, t), (e = !0));
      },
      o(t) {
        mt(a, t), (e = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function di(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [fi] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function ui(t) {
    let e, n;
    return (
      (e = new Xt({ props: { language: 'html', $$slots: { default: [gi] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment);
        },
        m(t, s) {
          xt(e, t, s), (n = !0);
        },
        i(t) {
          n || (pt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          wt(e, t);
        },
      }
    );
  }
  function fi(e) {
    let n;
    return {
      c() {
        n = M('Sadly, Svelte only');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function gi(e) {
    let n;
    return {
      c() {
        n = M('<Toggler defaultState={false}>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function pi(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      x,
      k,
      C,
      M,
      H,
      S,
      N,
      A,
      E,
      j,
      F,
      O,
      V,
      I = 'svelte' === t[0] && Pl(t);
    l = new ke({ props: { $$slots: { off: [Wl], on: [Rl] }, $$scope: { ctx: t } } });
    const D = [Ul, Gl],
      _ = [];
    function P(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (o = P(t)),
      (c = _[o] = D[o](t)),
      (g = new ke({ props: { $$slots: { off: [Ql], on: [Xl] }, $$scope: { ctx: t } } }));
    const q = [Jl, Kl],
      R = [];
    function W(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (m = W(t)),
      (h = R[m] = q[m](t)),
      (x = new ke({ props: { isSwitch: !0, $$slots: { off: [si], on: [ni] }, $$scope: { ctx: t } } }));
    const G = [ri, ai],
      U = [];
    function Z(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (C = Z(t)),
      (M = U[C] = G[C](t)),
      (A = new ke({ props: { defaultState: !1, $$slots: { off: [ci], on: [oi] }, $$scope: { ctx: t } } }));
    const Y = [ui, di],
      X = [];
    function Q(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (j = Q(t)),
      (F = X[j] = Y[j](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Toggler'),
            (n = T()),
            I && I.c(),
            (s = T()),
            (a = z('h3')),
            (a.textContent = 'Toggler with text'),
            (r = T()),
            bt(l.$$.fragment),
            (i = T()),
            c.c(),
            (d = T()),
            (u = z('h3')),
            (u.textContent = 'Toggler with icon'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            h.c(),
            ($ = T()),
            (v = z('h3')),
            (v.textContent = 'Toggle as switch'),
            (b = T()),
            bt(x.$$.fragment),
            (k = T()),
            M.c(),
            (H = T()),
            (S = z('h3')),
            (S.textContent = 'Set default state to off'),
            (N = T()),
            bt(A.$$.fragment),
            (E = T()),
            F.c(),
            (O = L()),
            B(e, 'class', 'color--eb');
        },
        m(t, c) {
          w(t, e, c),
            w(t, n, c),
            I && I.m(t, c),
            w(t, s, c),
            w(t, a, c),
            w(t, r, c),
            xt(l, t, c),
            w(t, i, c),
            _[o].m(t, c),
            w(t, d, c),
            w(t, u, c),
            w(t, f, c),
            xt(g, t, c),
            w(t, p, c),
            R[m].m(t, c),
            w(t, $, c),
            w(t, v, c),
            w(t, b, c),
            xt(x, t, c),
            w(t, k, c),
            U[C].m(t, c),
            w(t, H, c),
            w(t, S, c),
            w(t, N, c),
            xt(A, t, c),
            w(t, E, c),
            X[j].m(t, c),
            w(t, O, c),
            (V = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? I
              ? 1 & e && pt(I, 1)
              : ((I = Pl(t)), I.c(), pt(I, 1), I.m(s.parentNode, s))
            : I &&
              (ft(),
              mt(I, 1, 1, () => {
                I = null;
              }),
              gt());
          const n = {};
          4 & e && (n.$$scope = { dirty: e, ctx: t }), l.$set(n);
          let a = o;
          (o = P(t)),
            o !== a &&
              (ft(),
              mt(_[a], 1, 1, () => {
                _[a] = null;
              }),
              gt(),
              (c = _[o]),
              c || ((c = _[o] = D[o](t)), c.c()),
              pt(c, 1),
              c.m(d.parentNode, d));
          const r = {};
          4 & e && (r.$$scope = { dirty: e, ctx: t }), g.$set(r);
          let i = m;
          (m = W(t)),
            m !== i &&
              (ft(),
              mt(R[i], 1, 1, () => {
                R[i] = null;
              }),
              gt(),
              (h = R[m]),
              h || ((h = R[m] = q[m](t)), h.c()),
              pt(h, 1),
              h.m($.parentNode, $));
          const u = {};
          4 & e && (u.$$scope = { dirty: e, ctx: t }), x.$set(u);
          let f = C;
          (C = Z(t)),
            C !== f &&
              (ft(),
              mt(U[f], 1, 1, () => {
                U[f] = null;
              }),
              gt(),
              (M = U[C]),
              M || ((M = U[C] = G[C](t)), M.c()),
              pt(M, 1),
              M.m(H.parentNode, H));
          const p = {};
          4 & e && (p.$$scope = { dirty: e, ctx: t }), A.$set(p);
          let v = j;
          (j = Q(t)),
            j !== v &&
              (ft(),
              mt(X[v], 1, 1, () => {
                X[v] = null;
              }),
              gt(),
              (F = X[j]),
              F || ((F = X[j] = Y[j](t)), F.c()),
              pt(F, 1),
              F.m(O.parentNode, O));
        },
        i(t) {
          V ||
            (pt(I),
            pt(l.$$.fragment, t),
            pt(c),
            pt(g.$$.fragment, t),
            pt(h),
            pt(x.$$.fragment, t),
            pt(M),
            pt(A.$$.fragment, t),
            pt(F),
            (V = !0));
        },
        o(t) {
          mt(I),
            mt(l.$$.fragment, t),
            mt(c),
            mt(g.$$.fragment, t),
            mt(h),
            mt(x.$$.fragment, t),
            mt(M),
            mt(A.$$.fragment, t),
            mt(F),
            (V = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            I && I.d(t),
            t && y(s),
            t && y(a),
            t && y(r),
            wt(l, t),
            t && y(i),
            _[o].d(t),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            R[m].d(t),
            t && y($),
            t && y(v),
            t && y(b),
            wt(x, t),
            t && y(k),
            U[C].d(t),
            t && y(H),
            t && y(S),
            t && y(N),
            wt(A, t),
            t && y(E),
            X[j].d(t),
            t && y(O);
        },
      }
    );
  }
  function mi(t, e, n) {
    let s;
    u(t, Yn, (t) => n(0, (s = t)));
    let { $$slots: a = {}, $$scope: r } = e;
    return (
      (t.$$set = (t) => {
        '$$scope' in t && n(2, (r = t.$$scope));
      }),
      [s, a, r]
    );
  }
  const hi = {
    href: '/components',
    routes: [
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, as, ss, l, {});
          }
        },
        href: '/components/accordion',
        title: 'Accordion',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, ps, gs, l, {});
          }
        },
        href: '/components/articlecard',
        title: 'Article card',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, js, As, l, {});
          }
        },
        href: '/components/articlelist',
        title: 'Article list',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, qs, Ps, l, {});
          }
        },
        href: '/components/badge',
        title: 'Badge',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Ks, Qs, l, {});
          }
        },
        href: '/components/button',
        title: 'Button',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Ca, za, l, {});
          }
        },
        href: '/components/buttongroup',
        title: 'Button group',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Ba, Sa, l, {});
          }
        },
        href: '/components/card',
        title: 'Card',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, nr, er, l, {});
          }
        },
        href: '/components/form-elements',
        title: 'Form elements',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Zr, Ur, l, {});
          }
        },
        href: '/components/icon',
        title: 'Icon',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Mr, zr, l, {});
          }
        },
        href: '/components/horizontalscroll',
        title: 'Horizontal scroll',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Cl, zl, l, {});
          }
        },
        href: '/components/tabs',
        title: 'Tabs',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, nl, el, l, {});
          }
        },
        href: '/components/spinner',
        title: 'Spinner',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, mi, pi, l, {});
          }
        },
        href: '/components/toggler',
        title: 'Toggler',
      },
    ],
    title: 'Components',
  };
  function $i(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fal'),
          B(n, 'data-icon', 'code'),
          B(n, 'class', 'svg-inline--fa fa-code fa-w-18'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 576 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function vi(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class bi extends kt {
    constructor(t) {
      super(), yt(this, t, vi, $i, l, { height: 1, width: 2 });
    }
  }
  function xi(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M488.6 256.7L388 219V107.9c0-15-9.3-28.4-23.4-33.7l-96-36c-8.1-3.1-17.1-3.1-25.3 0l-96 36c-14.1 5.3-23.4 18.7-23.4 33.7V219L23.4 256.7C9.3 262 0 275.4 0 290.4v101.3c0 13.6 7.7 26.1 19.9 32.2l96 48c10.1 5.1 22.1 5.1 32.2 0L256 418l107.9 54c10.1 5.1 22.1 5.1 32.2 0l96-48c12.2-6.1 19.9-18.6 19.9-32.2V290.4c0-15-9.3-28.4-23.4-33.7zM16.5 403.8V295.1l107.2 46.5v115.8zm231 0l-107.2 53.6V341.6l107.2-46.5zm0-126.7l-115.5 50-115.5-50v-.2L131 234l107.6 39.6 8.9 3.3zm.3-19.7L195 239.6l-54.5-20.4V112.5L247.8 159zM140.5 94.5v-.1L256 51l115.5 43.3v.2l-115.5 50zM264.2 159l107.2-46.5v106.7L317 239.6l-52.8 17.8zm107.6 298.4l-107.2-53.6V295.1l107.2 46.5zm123.7-53.6l-107.2 53.6V341.6l107.2-46.5zm0-126.7l-115.5 50L264.5 277v-.2l8.9-3.3L381 234l114.5 42.9z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fal'),
          B(n, 'data-icon', 'cubes'),
          B(n, 'class', 'svg-inline--fa fa-cubes fa-w-16'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 512 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function wi(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class yi extends kt {
    constructor(t) {
      super(), yt(this, t, wi, xi, l, { height: 1, width: 2 });
    }
  }
  function ki(e) {
    let n, s;
    return (
      (n = new yi({ props: { width: 16 } })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p: t,
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function zi(e) {
    let n, s;
    return (
      (n = new bi({ props: { width: 16 } })),
      {
        c() {
          bt(n.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), (s = !0);
        },
        p: t,
        i(t) {
          s || (pt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          wt(n, t);
        },
      }
    );
  }
  function Ci(t) {
    let e, n, s, a;
    return (
      (e = new En({ props: { $$slots: { default: [ki] }, $$scope: { ctx: t } } })),
      (s = new En({ props: { $$slots: { default: [zi] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment);
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        p(t, n) {
          const a = {};
          2 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
          const r = {};
          2 & n && (r.$$scope = { dirty: n, ctx: t }), s.$set(r);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t);
        },
      }
    );
  }
  function Mi(e) {
    let n, s, a, r, l;
    return (
      (s = new qe({
        props: {
          className: 'animation-fogwave',
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          published: e[0].timestamp,
          section: e[0].section,
          title: e[0].title,
          url: e[0].href,
        },
      })),
      {
        c() {
          (n = z('div')),
            bt(s.$$.fragment),
            (a = T()),
            (r = z('div')),
            (r.innerHTML =
              '<a href="#/utilities/animation" class="badge margin-s bg--bluedark animation-fogwave">Bandekriminialitet</a> \n        <a href="#/utilities/animation" class="badge margin-s bg--green animation-fogwave">Sport</a> \n        <a href="#/utilities/animation" class="badge margin-s bg--greendark animation-fogwave">Nicklas Bendtner</a>'),
            B(n, 'class', 'flex grid-width--small'),
            B(r, 'class', 'flex grid-width--small');
        },
        m(t, e) {
          w(t, n, e), xt(s, n, null), w(t, a, e), w(t, r, e), (l = !0);
        },
        p: t,
        i(t) {
          l || (pt(s.$$.fragment, t), (l = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && y(n), wt(s), t && y(a), t && y(r);
        },
      }
    );
  }
  function Ti(e) {
    let n, s, a, r;
    return (
      (n = new Xt({
        props: {
          language: 'html',
          source:
            '<ArticleCard\n          className="animation-fogwave"\n          href="{article.href}"\n          media="{{src:\'https://via.placeholder.com/610x343&text=610x343\'}}"\n          section="{article.section}"\n          timestamp="{article.timestamp}"\n          title="{article.title}"\n          />',
        },
      })),
      (a = new Xt({
        props: {
          language: 'html',
          source: '<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>',
        },
      })),
      {
        c() {
          bt(n.$$.fragment), (s = T()), bt(a.$$.fragment);
        },
        m(t, e) {
          xt(n, t, e), w(t, s, e), xt(a, t, e), (r = !0);
        },
        p: t,
        i(t) {
          r || (pt(n.$$.fragment, t), pt(a.$$.fragment, t), (r = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), mt(a.$$.fragment, t), (r = !1);
        },
        d(t) {
          wt(n, t), t && y(s), wt(a, t);
        },
      }
    );
  }
  function Li(t) {
    let e, n, s, a, r, l, i;
    return (
      (n = new _n({ props: { $$slots: { default: [Ci] }, $$scope: { ctx: t } } })),
      (a = new Vn({ props: { $$slots: { default: [Mi] }, $$scope: { ctx: t } } })),
      (l = new Vn({ props: { $$slots: { default: [Ti] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('div')),
            bt(n.$$.fragment),
            (s = T()),
            bt(a.$$.fragment),
            (r = T()),
            bt(l.$$.fragment),
            B(e, 'class', 'flex flex-justify--end width-1of1');
        },
        m(t, o) {
          w(t, e, o), xt(n, e, null), w(t, s, o), xt(a, t, o), w(t, r, o), xt(l, t, o), (i = !0);
        },
        p(t, e) {
          const s = {};
          2 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), a.$set(r);
          const i = {};
          2 & e && (i.$$scope = { dirty: e, ctx: t }), l.$set(i);
        },
        i(t) {
          i || (pt(n.$$.fragment, t), pt(a.$$.fragment, t), pt(l.$$.fragment, t), (i = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), mt(a.$$.fragment, t), mt(l.$$.fragment, t), (i = !1);
        },
        d(t) {
          t && y(e), wt(n), t && y(s), wt(a, t), t && y(r), wt(l, t);
        },
      }
    );
  }
  function Hi(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, k, C, M, L, H, S, N;
    return (
      (p = new Rn({ props: { $$slots: { default: [Li] }, $$scope: { ctx: t } } })),
      (S = new Xt({ props: { language: 'html', source: '<component className="animation-fogwave"/></component>' } })),
      {
        c() {
          (e = z('div')),
            (n = z('h1')),
            (n.textContent = 'Animation'),
            (s = T()),
            (a = z('h3')),
            (a.textContent = 'Anvendelse af animationer'),
            (r = T()),
            (l = z('p')),
            (l.innerHTML =
              'Animationer anvendes ved tilføjelse af class: <code>className=&quot;animation-navnPåAnimation&quot;</code>'),
            (i = T()),
            (o = z('p')),
            (o.textContent = 'Denne class kan anvendes på tværs af vores komponenter'),
            (c = T()),
            (d = z('p')),
            (d.innerHTML =
              '<b>OBS:</b> anvendes en animation direkte på et html-element skal det anvendes på følgende måde:\n    <code>class=&quot;animation-navnPåAnimation&quot;</code>'),
            (u = T()),
            (f = z('h3')),
            (f.textContent = 'Eksempler på animationer'),
            (g = T()),
            bt(p.$$.fragment),
            (m = T()),
            (h = z('h3')),
            (h.textContent = 'Overblik over animationer'),
            ($ = T()),
            (v = z('div')),
            (b = z('div')),
            (b.innerHTML =
              '<div class="width-1of3 padding-m fontweight-bold">Class</div> \n      <div class="width-1of3 padding-m fontweight-bold">Use case</div>'),
            (k = T()),
            (C = z('div')),
            (M = z('div')),
            (M.textContent = 'animation-fogwave'),
            (L = T()),
            (H = z('div')),
            bt(S.$$.fragment),
            B(n, 'class', 'color--eb'),
            B(b, 'class', 'flex flex-item--center bg--graa7'),
            F(b, 'border-bottom', '1px solid rgba(0, 0, 0, .1)'),
            B(M, 'class', 'flex-item--center width-1of3 padding-m'),
            B(H, 'class', 'flex-item--center width-2of3 padding-m'),
            B(C, 'class', 'flex bg--graa7'),
            F(C, 'border-bottom', '1px solid rgba(0, 0, 0, .1)'),
            B(v, 'class', 'grid-width--large'),
            B(e, 'class', 'grid-width--large');
        },
        m(t, y) {
          w(t, e, y),
            x(e, n),
            x(e, s),
            x(e, a),
            x(e, r),
            x(e, l),
            x(e, i),
            x(e, o),
            x(e, c),
            x(e, d),
            x(e, u),
            x(e, f),
            x(e, g),
            xt(p, e, null),
            x(e, m),
            x(e, h),
            x(e, $),
            x(e, v),
            x(v, b),
            x(v, k),
            x(v, C),
            x(C, M),
            x(C, L),
            x(C, H),
            xt(S, H, null),
            (N = !0);
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), p.$set(n);
        },
        i(t) {
          N || (pt(p.$$.fragment, t), pt(S.$$.fragment, t), (N = !0));
        },
        o(t) {
          mt(p.$$.fragment, t), mt(S.$$.fragment, t), (N = !1);
        },
        d(t) {
          t && y(e), wt(p), wt(S);
        },
      }
    );
  }
  function Si(t) {
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
  function Bi(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="border"></div>\n<div class="border--t"></div>\n<div class="border--b"></div>\n<div class="border--l"></div>\n<div class="border--r"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ni(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="border-radius"></div>\n<div class="border-radius-s"></div>\n<div class="border-radius--t"></div>\n<div class="border-radius-s--t"></div>\n<div class="border-radius--b"></div>\n<div class="border-radius-s--b"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ai(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="border border--black"></div>\n<div class="border border--graa1"></div>\n<div class="border border--graa2"></div>\n<div class="border border--graa3"></div>\n<div class="border border--graa4"></div>\n<div class="border border--graa5"></div>\n<div class="border border--graa6"></div>\n<div class="border border--graa7"></div>\n<div class="border border--white"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ei(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C;
    return (
      (i = new Xt({ props: { language: 'html', $$slots: { default: [Bi] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [Ni] }, $$scope: { ctx: t } } })),
      (k = new Xt({ props: { language: 'html', $$slots: { default: [Ai] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Border'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Border'),
            (a = T()),
            (r = z('div')),
            (r.innerHTML =
              '<div class="card-content flex flex-justify--between flex-wrap--wrap"><div class="border border--black width-1of3 padding-xl margin-l bg--eb">border</div> \n    <div class="border--t border--black width-1of3 padding-xl margin-l bg--eb">border--t</div> \n    <div class="border--b border--black width-1of3 padding-xl margin-l bg--eb">border--b</div> \n    <div class="border--l border--black width-1of3 padding-xl margin-l bg--eb">border--l</div> \n    <div class="border--r border--black width-1of3 padding-xl margin-l bg--eb">border--r</div></div>'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h3')),
            (c.textContent = 'Border-radius'),
            (d = T()),
            (u = z('div')),
            (u.innerHTML =
              '<div class="card-content flex flex-justify--between flex-wrap--wrap"><div class="border-radius padding-xl width-1of3 margin-l bg--eb">border-radius</div> \n    <div class="border-radius-s padding-xl width-1of3 margin-l bg--eb">border-radius-s</div> \n    <div class="border-radius--t padding-xl width-1of3 margin-l bg--eb">border-radius--t</div> \n    <div class="border-radius-s--t padding-xl width-1of3 margin-l bg--eb">border-radius-s--t</div> \n    <div class="border-radius--b padding-xl width-1of3 margin-l bg--eb">border-radius--b</div> \n    <div class="border-radius-s--b padding-xl width-1of3 margin-l bg--eb">border-radius-s--b</div></div>'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'Border colors'),
            (h = T()),
            ($ = z('p')),
            ($.textContent = 'All border colors available'),
            (v = T()),
            (b = z('div')),
            (b.innerHTML =
              '<div class="card-content flex flex-justify--between flex-wrap--wrap"><div class="flex flex-align--center border border--black padding-xl width-1of3 margin-l">border--black</div> \n    <div class="flex flex-align--center border border--graa1 padding-xl width-1of3 margin-l">border--graa1</div> \n    <div class="flex flex-align--center border border--graa2 padding-xl width-1of3 margin-l">border--graa2</div> \n    <div class="flex flex-align--center border border--graa3 padding-xl width-1of3 margin-l">border--graa3</div> \n    <div class="flex flex-align--center border border--graa4 padding-xl width-1of3 margin-l">border--graa4</div> \n    <div class="flex flex-align--center border border--graa5 padding-xl width-1of3 margin-l">border--graa5</div> \n    <div class="flex flex-align--center border border--graa6 padding-xl width-1of3 margin-l">border--graa6</div> \n    <div class="flex flex-align--center border border--graa7 padding-xl width-1of3 margin-l">border--graa7</div> \n    <div class="flex flex-align--center border border--white padding-xl width-1of3 margin-l">border--white</div></div>'),
            (x = T()),
            bt(k.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(r, 'class', 'card bg--graa7'),
            B(u, 'class', 'card bg--graa7'),
            B(b, 'class', 'card bg--graa7');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            w(t, r, y),
            w(t, l, y),
            xt(i, t, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            w(t, b, y),
            w(t, x, y),
            xt(k, t, y),
            (C = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), k.$set(a);
        },
        i(t) {
          C || (pt(i.$$.fragment, t), pt(g.$$.fragment, t), pt(k.$$.fragment, t), (C = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), mt(g.$$.fragment, t), mt(k.$$.fragment, t), (C = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(b),
            t && y(x),
            wt(k, t);
        },
      }
    );
  }
  function ji(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="color--black"></div>\n<div class="color--white"></div>\n<div class="color--blue"></div>\n<div class="color--sport"></div>\n<div class="color--orangedark"></div>\n<div class="color--nyheder"></div>\n<div class="color--section"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Fi(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="bg--black"></div>\n<div class="bg--white"></div>\n<div class="bg--underholdning"></div>\n<div class="bg--eb"></div>\n<div class="bg--orangedark"></div>\n<div class="bg--nyheder"></div>\n<div class="bg--section"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Oi(t) {
    let e, n, s, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C, M, L, S;
    return (
      (d = new Xt({ props: { language: 'html', $$slots: { default: [ji] }, $$scope: { ctx: t } } })),
      (v = new Xt({ props: { language: 'html', $$slots: { default: [Fi] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Color'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Text color'),
            (r = T()),
            (l = z('button')),
            (l.textContent = 'View all colors available'),
            (i = T()),
            (o = z('div')),
            (o.innerHTML =
              '<div class="card-content flex flex-justify--between flex-wrap--wrap"><div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--black">color--black</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--black color--white">color--white</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--sport">color--sport</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--eb">color--eb</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--orangedark">color--orangedark</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--nyheder">color--nyheder</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--section">color--section\n      <em>(inherit the color of the section i.e sport)</em></div></div>'),
            (c = T()),
            bt(d.$$.fragment),
            (u = T()),
            (f = z('h3')),
            (f.textContent = 'Background color'),
            (g = T()),
            (p = z('button')),
            (p.textContent = 'View all colors available'),
            (m = T()),
            (h = z('div')),
            (h.innerHTML =
              '<div class="card-content flex flex-justify--between flex-wrap--wrap"><div class="flex flex--column padding-xl width-1of3 margin-l bg--black">bg--black</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--black">bg--white</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--underholdning">bg--underholdning</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--eb">bg--eb</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--orangedark">bg--orangedark</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--nyheder">bg--nyheder</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--section">bg--section\n      <em>(inherit the color of the section i.e sport)</em></div></div>'),
            ($ = T()),
            bt(v.$$.fragment),
            (b = T()),
            (x = z('h3')),
            (x.textContent = 'All colors available on ekstrabladet'),
            (k = T()),
            (C = z('object')),
            (C.innerHTML =
              'Error: Embedded data could not be displayed. Visit this link instead: <a href="https://ekstrabladetudvikling.github.io/eb-colors/">eb-colors</a>'),
            B(e, 'class', 'color--eb'),
            B(l, 'class', 'button button--cancel margin-m--b'),
            F(l, 'cursor', 'pointer'),
            B(o, 'class', 'card bg--graa7'),
            B(p, 'class', 'button button--cancel margin-m--b'),
            F(p, 'cursor', 'pointer'),
            B(h, 'class', 'card bg--graa7'),
            B(x, 'id', 'all-colors-section'),
            B(C, 'data', 'https://ekstrabladetudvikling.github.io/eb-colors/'),
            B(C, 'width', '100%'),
            B(C, 'height', '500'),
            B(C, 'title', 'eb-colors');
        },
        m(t, a) {
          w(t, e, a),
            w(t, n, a),
            w(t, s, a),
            w(t, r, a),
            w(t, l, a),
            w(t, i, a),
            w(t, o, a),
            w(t, c, a),
            xt(d, t, a),
            w(t, u, a),
            w(t, f, a),
            w(t, g, a),
            w(t, p, a),
            w(t, m, a),
            w(t, h, a),
            w(t, $, a),
            xt(v, t, a),
            w(t, b, a),
            w(t, x, a),
            w(t, k, a),
            w(t, C, a),
            (M = !0),
            L || ((S = [H(l, 'click', Vi), H(p, 'click', Vi)]), (L = !0));
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), d.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), v.$set(s);
        },
        i(t) {
          M || (pt(d.$$.fragment, t), pt(v.$$.fragment, t), (M = !0));
        },
        o(t) {
          mt(d.$$.fragment, t), mt(v.$$.fragment, t), (M = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(r),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            wt(d, t),
            t && y(u),
            t && y(f),
            t && y(g),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            wt(v, t),
            t && y(b),
            t && y(x),
            t && y(k),
            t && y(C),
            (L = !1),
            a(S);
        },
      }
    );
  }
  function Vi() {
    document.getElementById('all-colors-section').scrollIntoView();
  }
  function Ii(e) {
    let n;
    return {
      c() {
        n = M('<div class="flex"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Di(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="flex flex-justify--start"></div>\n<div class="flex flex-justify--end"></div>\n<div class="flex flex-justify--center"></div>\n<div class="flex flex-justify--around"></div>\n<div class="flex flex-justify--between"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function _i(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="flex flex-align--start"></div>\n<div class="flex flex-align--end"></div>\n<div class="flex flex-align--center"></div>\n<div class="flex flex-align--stretch"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Pi(e) {
    let n;
    return {
      c() {
        n = M('<div class="flex flex--center"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function qi(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="flex flex--column"></div>\n<div class="flex flex--column--reverse"></div>\n<div class="flex"></div>\n<div class="flex flex-row--reverse"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ri(e) {
    let n;
    return {
      c() {
        n = M('<div class="flex"></div>\n<div class="flex flex-wrap--wrap"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Wi(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="flex">\n  <div class="flex-item--start"></div>\n  <div class="flex-item--end"></div>\n  <div class="flex-item--center"></div>\n  <div class="flex-item--stretch"></div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Gi(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="flex">\n  <div class="flex-item--grow"></div>\n  <div class="flex-item--noshrink"></div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ui(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      x,
      k,
      C,
      M,
      L,
      H,
      S,
      N,
      A,
      E,
      j,
      F,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K,
      J,
      tt,
      et,
      nt,
      st,
      at,
      rt,
      lt,
      it,
      ot,
      ct,
      dt,
      ut,
      ft,
      gt,
      ht,
      $t;
    return (
      (r = new Xt({ props: { language: 'html', $$slots: { default: [Ii] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [Di] }, $$scope: { ctx: t } } })),
      (k = new Xt({ props: { language: 'html', $$slots: { default: [_i] }, $$scope: { ctx: t } } })),
      (E = new Xt({ props: { language: 'html', $$slots: { default: [Pi] }, $$scope: { ctx: t } } })),
      (P = new Xt({ props: { language: 'html', $$slots: { default: [qi] }, $$scope: { ctx: t } } })),
      (X = new Xt({ props: { language: 'html', $$slots: { default: [Ri] }, $$scope: { ctx: t } } })),
      (at = new Xt({ props: { language: 'html', $$slots: { default: [Wi] }, $$scope: { ctx: t } } })),
      (ht = new Xt({ props: { language: 'html', $$slots: { default: [Gi] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Flex'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Flex container'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            (i = z('h3')),
            (i.textContent = 'Justify content'),
            (o = T()),
            (c = z('p')),
            (c.innerHTML = 'Justify content anvendes til <i>horizontal</i> placering af child elementer.'),
            (d = T()),
            (u = z('div')),
            (u.innerHTML =
              '<strong class="margin-m">flex flex-justify--start</strong> \n  <div class="flex flex-justify--start bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-justify--end</strong> \n  <div class="flex flex-justify--end bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-justify--center</strong> \n  <div class="flex flex-justify--center bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-justify--around</strong> \n  <div class="flex flex-justify--around bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-justify--between</strong> \n  <div class="flex flex-justify--between bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div>'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'Align items'),
            (h = T()),
            ($ = z('p')),
            ($.innerHTML = 'Align items anvendes til <i>veritcal</i> placering af child elementer.'),
            (v = T()),
            (b = z('div')),
            (b.innerHTML =
              '<strong class="margin-m">flex flex-align--start</strong> \n  <div class="flex flex-align--start bg--eb" style="height: 100px"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-align--end</strong> \n  <div class="flex flex-align--end bg--eb" style="height: 100px"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-align--center</strong> \n  <div class="flex flex-align--center bg--eb" style="height: 100px"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-align--stretch</strong> \n  <div class="flex flex-align--stretch bg--eb" style="height: 100px"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div>'),
            (x = T()),
            bt(k.$$.fragment),
            (C = T()),
            (M = z('h3')),
            (M.textContent = 'Flex center'),
            (L = T()),
            (H = z('p')),
            (H.innerHTML = 'Flex center centrere alle child elementer både <i>horizontalt</i> og <i>vertical</i>.'),
            (S = T()),
            (N = z('div')),
            (N.innerHTML =
              '<div class="flex flex--center bg--eb" style="height: 100px"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div>'),
            (A = T()),
            bt(E.$$.fragment),
            (j = T()),
            (F = z('h3')),
            (F.textContent = 'Directions'),
            (O = T()),
            (V = z('p')),
            (V.textContent = 'Directions bestemmer rækkefølgen for visning af child elementer.'),
            (I = T()),
            (D = z('div')),
            (D.innerHTML =
              '<strong class="margin-m">flex flex--column</strong> \n  <div class="flex flex--column"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex--column-reverse</strong> \n  <div class="flex flex--column-reverse"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex</strong> \n  <div class="flex bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">flex flex-row--reverse</strong> \n  <div class="flex flex-row--reverse bg--eb"><div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div>'),
            (_ = T()),
            bt(P.$$.fragment),
            (q = T()),
            (R = z('h3')),
            (R.textContent = 'Wrap'),
            (W = T()),
            (G = z('p')),
            (G.textContent =
              'Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines\n  istedet for one-line.'),
            (U = T()),
            (Z = z('div')),
            (Z.innerHTML =
              '<strong class="margin-m">flex</strong> \n  <div class="flex"><div class="bg--graa4 width-1of3 padding-l">Flex item 1</div> \n    <div class="bg--graa3 width-1of3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 width-1of3 padding-l">Flex item 3</div> \n    <div class="bg--graa1 width-1of3 padding-l">Flex item 4</div></div> \n  <strong class="margin-m margin-l--t">flex flex-wrap--wrap</strong> \n  <div class="flex flex-wrap--wrap bg--eb"><div class="bg--graa4 width-1of3 padding-l">Flex item 1</div> \n    <div class="bg--graa3 width-1of3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 width-1of3 padding-l">Flex item 3</div> \n    <div class="bg--graa1 width-1of3 padding-l">Flex item 4</div></div>'),
            (Y = T()),
            bt(X.$$.fragment),
            (Q = T()),
            (K = z('h2')),
            (K.textContent = 'Flex items'),
            (J = T()),
            (tt = z('h3')),
            (tt.textContent = 'Align self'),
            (et = T()),
            (nt = z('div')),
            (nt.innerHTML =
              '<div class="flex bg--eb" style="height: 100px"><div class="flex-item--start bg--graa4 width-1of3 padding-l">flex-item--start</div> \n    <div class="flex-item--end bg--graa2 width-1of3 padding-l">flex-item--end</div> \n    <div class="flex-item--center bg--graa3 width-1of3 padding-l">flex-item--center</div> \n    <div class="flex-item--stretch bg--graa1 width-1of3 padding-l">flex-item--stretch</div></div>'),
            (st = T()),
            bt(at.$$.fragment),
            (rt = T()),
            (lt = z('h3')),
            (lt.textContent = 'Grow and shrik'),
            (it = T()),
            (ot = z('p')),
            (ot.innerHTML =
              '<code>flex-item--grow</code> sørger for at child element udfylder den tilbageværende plads i flex containeren.'),
            (ct = T()),
            (dt = z('p')),
            (dt.innerHTML =
              '<code>flex-item--noshrink</code> sørger for at et child element altid vil have den samme størrelse også på scalering.'),
            (ut = T()),
            (ft = z('div')),
            (ft.innerHTML =
              '<strong class="margin-m margin-l--t">Grow</strong> \n  <div class="flex bg--eb"><div class="flex-item--grow bg--graa4 padding-l">flex-item--grow</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div></div> \n  <strong class="margin-m margin-l--t">No shrink</strong> \n  <div class="flex bg--eb"><div class="flex-item--noshrink width-2of3 bg--graa4 padding-l">flex-item--noshrink width-2of3</div> \n    <div class="bg--graa3 width-1of3 padding-l">width-1of3</div> \n    <div class="bg--graa2 width-1of3 padding-l">width-1of3</div></div>'),
            (gt = T()),
            bt(ht.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(u, 'class', 'card bg--graa7'),
            B(b, 'class', 'card bg--graa7'),
            B(N, 'class', 'card bg--graa7'),
            B(D, 'class', 'card bg--graa7'),
            B(Z, 'class', 'card bg--graa7'),
            B(nt, 'class', 'card bg--graa7'),
            B(ft, 'class', 'card bg--graa7');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            xt(r, t, y),
            w(t, l, y),
            w(t, i, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            w(t, b, y),
            w(t, x, y),
            xt(k, t, y),
            w(t, C, y),
            w(t, M, y),
            w(t, L, y),
            w(t, H, y),
            w(t, S, y),
            w(t, N, y),
            w(t, A, y),
            xt(E, t, y),
            w(t, j, y),
            w(t, F, y),
            w(t, O, y),
            w(t, V, y),
            w(t, I, y),
            w(t, D, y),
            w(t, _, y),
            xt(P, t, y),
            w(t, q, y),
            w(t, R, y),
            w(t, W, y),
            w(t, G, y),
            w(t, U, y),
            w(t, Z, y),
            w(t, Y, y),
            xt(X, t, y),
            w(t, Q, y),
            w(t, K, y),
            w(t, J, y),
            w(t, tt, y),
            w(t, et, y),
            w(t, nt, y),
            w(t, st, y),
            xt(at, t, y),
            w(t, rt, y),
            w(t, lt, y),
            w(t, it, y),
            w(t, ot, y),
            w(t, ct, y),
            w(t, dt, y),
            w(t, ut, y),
            w(t, ft, y),
            w(t, gt, y),
            xt(ht, t, y),
            ($t = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), k.$set(a);
          const l = {};
          1 & e && (l.$$scope = { dirty: e, ctx: t }), E.$set(l);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), P.$set(i);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), X.$set(o);
          const c = {};
          1 & e && (c.$$scope = { dirty: e, ctx: t }), at.$set(c);
          const d = {};
          1 & e && (d.$$scope = { dirty: e, ctx: t }), ht.$set(d);
        },
        i(t) {
          $t ||
            (pt(r.$$.fragment, t),
            pt(g.$$.fragment, t),
            pt(k.$$.fragment, t),
            pt(E.$$.fragment, t),
            pt(P.$$.fragment, t),
            pt(X.$$.fragment, t),
            pt(at.$$.fragment, t),
            pt(ht.$$.fragment, t),
            ($t = !0));
        },
        o(t) {
          mt(r.$$.fragment, t),
            mt(g.$$.fragment, t),
            mt(k.$$.fragment, t),
            mt(E.$$.fragment, t),
            mt(P.$$.fragment, t),
            mt(X.$$.fragment, t),
            mt(at.$$.fragment, t),
            mt(ht.$$.fragment, t),
            ($t = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(b),
            t && y(x),
            wt(k, t),
            t && y(C),
            t && y(M),
            t && y(L),
            t && y(H),
            t && y(S),
            t && y(N),
            t && y(A),
            wt(E, t),
            t && y(j),
            t && y(F),
            t && y(O),
            t && y(V),
            t && y(I),
            t && y(D),
            t && y(_),
            wt(P, t),
            t && y(q),
            t && y(R),
            t && y(W),
            t && y(G),
            t && y(U),
            t && y(Z),
            t && y(Y),
            wt(X, t),
            t && y(Q),
            t && y(K),
            t && y(J),
            t && y(tt),
            t && y(et),
            t && y(nt),
            t && y(st),
            wt(at, t),
            t && y(rt),
            t && y(lt),
            t && y(it),
            t && y(ot),
            t && y(ct),
            t && y(dt),
            t && y(ut),
            t && y(ft),
            t && y(gt),
            wt(ht, t);
        },
      }
    );
  }
  function Zi(e) {
    let n;
    return {
      c() {
        n = M('<div class="ff-primary"></div>\n<div class="ff-secondary"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Yi(e) {
    let n;
    return {
      c() {
        n = M('<p class="fontweight-normal"></p>\n<p class="fontweight-bold"></p>\n<p class="fontweight-bolder"></p>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Xi(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="fontsize-xxsmall"></div>\n<div class="fontsize-xsmall"></div>\n<div class="fontsize-small"></div>\n<div class="fontsize-medium"></div>\n<div class="fontsize-large"></div>\n<div class="fontsize-xlarge"></div>\n<div class="fontsize-xxlarge"></div>\n<div class="fontsize-xxxlarge"></div>\n<div class="fontsize-xxxxlarge"></div>\n\n<div class="fontsize-smaller"></div>\n<div class="fontsize-larger"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Qi(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C, M, L, H, S, N, A, E, j;
    return (
      (i = new Xt({ props: { language: 'html', $$slots: { default: [Zi] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [Yi] }, $$scope: { ctx: t } } })),
      (H = new Xt({ props: { language: 'html', $$slots: { default: [Xi] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Fonts'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Font family'),
            (a = T()),
            (r = z('div')),
            (r.innerHTML =
              '<div class="ff-primary margin-l--tb"><strong>.ff-primary:</strong> \n    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p></div> \n  <div class="ff-secondary"><strong>.ff-secondary:</strong> \n    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p></div>'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h3')),
            (c.textContent = 'Font-weight'),
            (d = T()),
            (u = z('div')),
            (u.innerHTML =
              '<p class="fontweight-normal">fontweight-normal</p> \n  <p class="fontweight-bold">fontweight-bold</p> \n  <p class="fontweight-bolder">fontweight-bolder</p>'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'Font-size'),
            (h = T()),
            ($ = z('p')),
            ($.textContent = 'Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.'),
            (v = T()),
            (b = z('p')),
            (b.textContent =
              'Rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden'),
            (x = T()),
            (k = z('p')),
            (k.innerHTML =
              'Der er både en <u>larger</u> og en <u>smaller</u> mulighed, der begge er relative til parent fontsize'),
            (C = T()),
            (M = z('div')),
            (M.innerHTML =
              '<div class="fontsize-xxsmall padding-m--b">fontsize-xxsmall = .625rem ~ 10px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xsmall padding-m--tb">fontsize-xsmall = .75rem ~ 12px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-small padding-m--tb">fontsize-small = .875rem ~ 14px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-medium padding-m--tb">fontsize-medium = 1rem ~ 16px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-large padding-m--tb">fontsize-large = 1.125rem ~ 18px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xlarge padding-m--tb">fontsize-xlarge = 1.25rem ~ 20px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xxlarge padding-m--tb">fontsize-xxlarge = 1.875rem ~ 30px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xxxlarge padding-m--tb">fontsize-xxxlarge = 2.25rem ~ 36px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div> \n  <div class="fontsize-xxxxlarge padding-m--t">fontsize-xxxxlarge = 3.125rem ~ 50px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div></div>'),
            (L = T()),
            bt(H.$$.fragment),
            (S = T()),
            (N = z('h3')),
            (N.textContent = 'Headers and font aliases'),
            (A = T()),
            (E = z('div')),
            (E.innerHTML =
              '<h1>h1</h1> \n  <h2>h2</h2> \n  <h3>h3</h3> \n  <h4>h4</h4> \n  <h5>h5</h5> \n  <h6>h6</h6> \n\n  <p class="fs-ads">fs-ads</p> \n  <p class="fs-bodytext">fs-bodytext</p> \n  <p class="fs-caption">fs-caption</p> \n  <p class="fs-quote">fs-quote</p> \n  <p class="fs-showmore">fs-showmore</p> \n  <p class="fs-subtitle">fs-subtitle</p> \n  <p class="fs-timestamp">fs-timestamp</p> \n  <p class="fs-title">fs-title</p>'),
            B(e, 'class', 'color--eb'),
            B(r, 'class', 'card bg--graa7 padding-l--rl'),
            B(u, 'class', 'card bg--graa7 padding-l--rl'),
            B(M, 'class', 'card bg--graa7 padding-l'),
            B(E, 'class', 'card bg--graa7 padding-l--rl padding-l--t');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            w(t, r, y),
            w(t, l, y),
            xt(i, t, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            w(t, b, y),
            w(t, x, y),
            w(t, k, y),
            w(t, C, y),
            w(t, M, y),
            w(t, L, y),
            xt(H, t, y),
            w(t, S, y),
            w(t, N, y),
            w(t, A, y),
            w(t, E, y),
            (j = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), H.$set(a);
        },
        i(t) {
          j || (pt(i.$$.fragment, t), pt(g.$$.fragment, t), pt(H.$$.fragment, t), (j = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), mt(g.$$.fragment, t), mt(H.$$.fragment, t), (j = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(b),
            t && y(x),
            t && y(k),
            t && y(C),
            t && y(M),
            t && y(L),
            wt(H, t),
            t && y(S),
            t && y(N),
            t && y(A),
            t && y(E);
        },
      }
    );
  }
  function Ki(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="grid-width--xlarge"></div>\n<div class="grid-width--large"></div>\n<div class="grid-width--medium"></div>\n<div class="grid-width--small"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ji(e) {
    let n;
    return {
      c() {
        n = M('--grid-small: 610px;\n--grid-medium: 730px;\n--grid-large: 910px;\n--grid-xlarge: 930px;');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function to(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f;
    return (
      (i = new Xt({ props: { language: 'html', $$slots: { default: [Ki] }, $$scope: { ctx: t } } })),
      (u = new Xt({ props: { language: 'css', $$slots: { default: [Ji] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Grid'),
            (n = T()),
            (s = z('div')),
            (s.innerHTML =
              '<div class="grid-width--xlarge vertical-center bg--eb" style="overflow: hidden"><p>grid-width--xlarge: 930px</p> \n    <p>Page content width - frontpage</p> \n    <div class="grid-width--large vertical-center bg--eb2" style="overflow: hidden"><p>grid-width--large: 910px</p> \n      <p>Page content width</p> \n      <div class="grid-width--medium vertical-center bg--eb" style="overflow: hidden"><p>grid-width--medium: 730px</p> \n        <p>Bodytext container width</p> \n        <div class="grid-width--small vertical-center bg--eb2" style="overflow: hidden"><p>grid-width--small: 610px</p> \n          <p>Widget width</p></div></div></div></div>'),
            (a = T()),
            (r = z('h3')),
            (r.textContent = 'HTML class names'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h3')),
            (c.textContent = 'CSS variable names'),
            (d = T()),
            bt(u.$$.fragment),
            B(e, 'class', 'color--eb margin-l--b'),
            B(s, 'class', 'card bg--graa7 text-align--center');
        },
        m(t, g) {
          w(t, e, g),
            w(t, n, g),
            w(t, s, g),
            w(t, a, g),
            w(t, r, g),
            w(t, l, g),
            xt(i, t, g),
            w(t, o, g),
            w(t, c, g),
            w(t, d, g),
            xt(u, t, g),
            (f = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
        },
        i(t) {
          f || (pt(i.$$.fragment, t), pt(u.$$.fragment, t), (f = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), mt(u.$$.fragment, t), (f = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            wt(u, t);
        },
      }
    );
  }
  function eo(e) {
    let n;
    return {
      c() {
        n = M('<div class="hidden"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function no(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="position-absolute"></div>\n<div class="position-fixed"></div>\n<div class="position-relative"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function so(e) {
    let n;
    return {
      c() {
        n = M('<div class="float-left"></div>\n<div class="float-right"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ao(e) {
    let n;
    return {
      c() {
        n = M('<div class="clear"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ro(e) {
    let n;
    return {
      c() {
        n = M('<div class="vertical-center"></div>\n<div class="vertical-auto"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function lo(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="margin-none padding-none"></div>\n<div class="margin-s padding-s"></div>\n<div class="margin-m padding-m"></div>\n<div class="margin-l padding-l"></div>\n<div class="margin-xl padding-xl"></div>\n<div class="margin-xxl padding-xxl"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function io(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="margin-l--t padding-l--t"></div>\n<div class="margin-l--r padding-l--r"></div>\n<div class="margin-l--b padding-l--b"></div>\n<div class="margin-l--l padding-l--l"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function oo(e) {
    let n;
    return {
      c() {
        n = M('<div class="margin-l--tb padding-l--tb"></div>\n<div class="margin-l--rl padding-l--rl"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function co(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="box-shadow--small"></div>\n<div class="box-shadow"></div>\n<div class="box-shadow--large"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function uo(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      x,
      k,
      C,
      M,
      L,
      H,
      S,
      N,
      A,
      E,
      j,
      F,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K,
      J;
    return (
      (r = new Xt({ props: { language: 'html', $$slots: { default: [eo] }, $$scope: { ctx: t } } })),
      (c = new Xt({ props: { language: 'html', $$slots: { default: [no] }, $$scope: { ctx: t } } })),
      (m = new Xt({ props: { language: 'html', $$slots: { default: [so] }, $$scope: { ctx: t } } })),
      (b = new Xt({ props: { language: 'html', $$slots: { default: [ao] }, $$scope: { ctx: t } } })),
      (N = new Xt({ props: { language: 'html', $$slots: { default: [ro] }, $$scope: { ctx: t } } })),
      (V = new Xt({ props: { language: 'html', $$slots: { default: [lo] }, $$scope: { ctx: t } } })),
      (P = new Xt({ props: { language: 'html', $$slots: { default: [io] }, $$scope: { ctx: t } } })),
      (G = new Xt({ props: { language: 'html', $$slots: { default: [oo] }, $$scope: { ctx: t } } })),
      (K = new Xt({ props: { language: 'html', $$slots: { default: [co] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Helpers'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Skjult element'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            (i = z('h3')),
            (i.textContent = 'Position'),
            (o = T()),
            bt(c.$$.fragment),
            (d = T()),
            (u = z('h3')),
            (u.textContent = 'Floats'),
            (f = T()),
            (g = z('div')),
            (g.innerHTML =
              '<div><div class="bg--eb padding-m float-left">float-left</div> \n    <div class="bg--eb padding-m float-right">float-right</div></div>'),
            (p = T()),
            bt(m.$$.fragment),
            (h = T()),
            ($ = z('h3')),
            ($.textContent = 'Clear'),
            (v = T()),
            bt(b.$$.fragment),
            (x = T()),
            (k = z('h3')),
            (k.textContent = 'Centrér vertikalt'),
            (C = T()),
            (M = z('p')),
            (M.textContent = 'Kræver en fast bredde på elementet.'),
            (L = T()),
            (H = z('div')),
            (H.innerHTML = '<div class="vertical-center width-1of3 padding-l bg--eb">vertical-center</div>'),
            (S = T()),
            bt(N.$$.fragment),
            (A = T()),
            (E = z('h3')),
            (E.textContent = 'Margin & padding'),
            (j = T()),
            (F = z('p')),
            (F.innerHTML =
              'For både <strong>margin</strong> og <strong>padding</strong> klassen har vi fem størrelser\n  <em>(s, m, l, xl og xxl)</em>\n  og så\n  <em>none</em> som sættes på med bindesteg.'),
            (O = T()),
            bt(V.$$.fragment),
            (I = T()),
            (D = z('p')),
            (D.innerHTML =
              'Ønskes der derimod kun at have <strong>margin</strong> og <strong>padding</strong> i en retning tilføjes dette med double\n  bindestreg.'),
            (_ = T()),
            bt(P.$$.fragment),
            (q = T()),
            (R = z('p')),
            (R.innerHTML = 'Vi har også to samle klasser for <em>top-bottom</em> og <em>right-left</em>.'),
            (W = T()),
            bt(G.$$.fragment),
            (U = T()),
            (Z = z('h3')),
            (Z.textContent = 'Box-shadow'),
            (Y = T()),
            (X = z('div')),
            (X.innerHTML =
              '<div class="card-content"><div class="border-radius box-shadow--small padding-xl margin-l bg--eb">box-shadow--small</div> \n    <div class="border-radius box-shadow padding-xl margin-l bg--eb">box-shadow</div> \n    <div class="border-radius box-shadow--large padding-xl margin-l bg--eb">box-shadow--large</div></div>'),
            (Q = T()),
            bt(K.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(g, 'class', 'card bg--graa7'),
            B(H, 'class', 'card bg--graa7'),
            B(X, 'class', 'card bg--graa7');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            xt(r, t, y),
            w(t, l, y),
            w(t, i, y),
            w(t, o, y),
            xt(c, t, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            w(t, g, y),
            w(t, p, y),
            xt(m, t, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            xt(b, t, y),
            w(t, x, y),
            w(t, k, y),
            w(t, C, y),
            w(t, M, y),
            w(t, L, y),
            w(t, H, y),
            w(t, S, y),
            xt(N, t, y),
            w(t, A, y),
            w(t, E, y),
            w(t, j, y),
            w(t, F, y),
            w(t, O, y),
            xt(V, t, y),
            w(t, I, y),
            w(t, D, y),
            w(t, _, y),
            xt(P, t, y),
            w(t, q, y),
            w(t, R, y),
            w(t, W, y),
            xt(G, t, y),
            w(t, U, y),
            w(t, Z, y),
            w(t, Y, y),
            w(t, X, y),
            w(t, Q, y),
            xt(K, t, y),
            (J = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), c.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), m.$set(a);
          const l = {};
          1 & e && (l.$$scope = { dirty: e, ctx: t }), b.$set(l);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), N.$set(i);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), V.$set(o);
          const d = {};
          1 & e && (d.$$scope = { dirty: e, ctx: t }), P.$set(d);
          const u = {};
          1 & e && (u.$$scope = { dirty: e, ctx: t }), G.$set(u);
          const f = {};
          1 & e && (f.$$scope = { dirty: e, ctx: t }), K.$set(f);
        },
        i(t) {
          J ||
            (pt(r.$$.fragment, t),
            pt(c.$$.fragment, t),
            pt(m.$$.fragment, t),
            pt(b.$$.fragment, t),
            pt(N.$$.fragment, t),
            pt(V.$$.fragment, t),
            pt(P.$$.fragment, t),
            pt(G.$$.fragment, t),
            pt(K.$$.fragment, t),
            (J = !0));
        },
        o(t) {
          mt(r.$$.fragment, t),
            mt(c.$$.fragment, t),
            mt(m.$$.fragment, t),
            mt(b.$$.fragment, t),
            mt(N.$$.fragment, t),
            mt(V.$$.fragment, t),
            mt(P.$$.fragment, t),
            mt(G.$$.fragment, t),
            mt(K.$$.fragment, t),
            (J = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            t && y(i),
            t && y(o),
            wt(c, t),
            t && y(d),
            t && y(u),
            t && y(f),
            t && y(g),
            t && y(p),
            wt(m, t),
            t && y(h),
            t && y($),
            t && y(v),
            wt(b, t),
            t && y(x),
            t && y(k),
            t && y(C),
            t && y(M),
            t && y(L),
            t && y(H),
            t && y(S),
            wt(N, t),
            t && y(A),
            t && y(E),
            t && y(j),
            t && y(F),
            t && y(O),
            wt(V, t),
            t && y(I),
            t && y(D),
            t && y(_),
            wt(P, t),
            t && y(q),
            t && y(R),
            t && y(W),
            wt(G, t),
            t && y(U),
            t && y(Z),
            t && y(Y),
            t && y(X),
            t && y(Q),
            wt(K, t);
        },
      }
    );
  }
  function fo(e) {
    let n;
    return {
      c() {
        n = M('<div class="separator"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function go(t) {
    let e, n, s, a, r, l, i, o, c, d;
    return (
      (c = new Xt({ props: { language: 'html', $$slots: { default: [fo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Separator'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Separator'),
            (a = T()),
            (r = z('div')),
            (r.innerHTML =
              '<p>Separator is <i>class</i> that can be used to seperate content i.e in a box/container.</p>'),
            (l = T()),
            (i = z('div')),
            (i.innerHTML =
              '<div class="width-1of3 padding-m box-shadow border-radius"><p>Header</p> \n    <div class="separator"></div> \n    <p>Content</p> \n    <div class="separator"></div> \n    <p>Footer</p></div>'),
            (o = T()),
            bt(c.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(i, 'class', 'flex');
        },
        m(t, u) {
          w(t, e, u),
            w(t, n, u),
            w(t, s, u),
            w(t, a, u),
            w(t, r, u),
            w(t, l, u),
            w(t, i, u),
            w(t, o, u),
            xt(c, t, u),
            (d = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), c.$set(n);
        },
        i(t) {
          d || (pt(c.$$.fragment, t), (d = !0));
        },
        o(t) {
          mt(c.$$.fragment, t), (d = !1);
        },
        d(t) {
          t && y(e), t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), t && y(i), t && y(o), wt(c, t);
        },
      }
    );
  }
  function po(e) {
    let n;
    return {
      c() {
        n = M(
          '<div class="width-100vw"></div>\n<div class="width-auto"></div>\n<div class="width-1of1"></div>\n<div class="width-5of6"></div>\n<div class="width-3of4"></div>\n<div class="width-2of3"></div>\n<div class="width-1of2"></div>\n<div class="width-1of3"></div>\n<div class="width-1of4"></div>\n<div class="width-1of5"></div>\n<div class="width-1of6"></div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function mo(e) {
    let n;
    return {
      c() {
        n = M('<div class="height-100vh"></div>\n<div class="height-auto"></div>\n<div class="height-1of1"></div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ho(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p;
    return (
      (i = new Xt({ props: { language: 'html', $$slots: { default: [po] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [mo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Sizing'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Bredder'),
            (a = T()),
            (r = z('div')),
            (r.innerHTML =
              '<div class="bg--eb padding-m width-100vw">width-100vw</div> \n  <div class="bg--eb padding-m width-auto">width-auto</div> \n  <div class="bg--eb padding-m width-1of1">width-1of1</div> \n  <div class="bg--eb padding-m width-5of6">width-5of6</div> \n  <div class="bg--eb padding-m width-3of4">width-3of4</div> \n  <div class="bg--eb padding-m width-2of3">width-2of3</div> \n  <div class="bg--eb padding-m width-1of2">width-1of2</div> \n  <div class="bg--eb padding-m width-1of3">width-1of3</div> \n  <div class="bg--eb padding-m width-1of4">width-1of4</div> \n  <div class="bg--eb padding-m width-1of5">width-1of5</div> \n  <div class="bg--eb padding-m width-1of6">width-1of6</div>'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h3')),
            (c.textContent = 'Højder'),
            (d = T()),
            (u = z('div')),
            (u.innerHTML =
              '<div class="text-align--center bg--graa7" style="height: 200px; overflow: hidden"><div class="bg--eb padding-m width-1of4 height-100vh" style="display: inline-block">height-100vh*</div> \n    <div class="bg--eb padding-m width-1of4 height-auto" style="display: inline-block">height-auto</div> \n    <div class="bg--eb padding-m width-1of4 height-1of1" style="display: inline-block">height-1of1</div></div> \n  <div class="card-footer"><p class="fontsize-small">* Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html</p></div>'),
            (f = T()),
            bt(g.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(r, 'class', 'card bg--graa7'),
            B(u, 'class', 'card');
        },
        m(t, m) {
          w(t, e, m),
            w(t, n, m),
            w(t, s, m),
            w(t, a, m),
            w(t, r, m),
            w(t, l, m),
            xt(i, t, m),
            w(t, o, m),
            w(t, c, m),
            w(t, d, m),
            w(t, u, m),
            w(t, f, m),
            xt(g, t, m),
            (p = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
        },
        i(t) {
          p || (pt(i.$$.fragment, t), pt(g.$$.fragment, t), (p = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), mt(g.$$.fragment, t), (p = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t);
        },
      }
    );
  }
  function $o(e) {
    let n;
    return {
      c() {
        n = M(
          '<p class="text-align--center"></p>\n<p class="text-align--left"></p>\n<p class="text-align--right"></p>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function vo(e) {
    let n;
    return {
      c() {
        n = M('<p class="text-transform--lowercase"></p>\n<p class="text-transform--uppercase"></p>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function bo(e) {
    let n;
    return {
      c() {
        n = M('<div class="lineheight-m">\n  <p>line-height: 1.5em</p>\n</div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function xo(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C;
    return (
      (i = new Xt({ props: { language: 'html', $$slots: { default: [$o] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [vo] }, $$scope: { ctx: t } } })),
      (k = new Xt({ props: { language: 'html', $$slots: { default: [bo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Text'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Text alignment'),
            (a = T()),
            (r = z('div')),
            (r.innerHTML =
              '<p class="text-align--center">Centreret tekst</p> \n  <p class="text-align--left">Venstrestillet tekst</p> \n  <p class="text-align--right">Højrestillet tekst</p>'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h3')),
            (c.textContent = 'Text transform'),
            (d = T()),
            (u = z('div')),
            (u.innerHTML =
              '<p class="text-transform--lowercase">SMÅ BOGSTAVER</p> \n  <p class="text-transform--uppercase">store bogstaver</p>'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'Line height'),
            (h = T()),
            ($ = z('p')),
            ($.textContent = 'Default line-height will be based on the browser usually around 1.2'),
            (v = T()),
            (b = z('div')),
            (b.innerHTML =
              '<div class="card-content flex flex-justify--between"><div class="width-1of3 margin-m"><p>normal line-height</p> \n      <p>normal line-height</p> \n      <p>normal line-height</p></div> \n    <div class="width-1of3 margin-m lineheight-m"><p>lineheight-m</p> \n      <p>lineheight-m</p> \n      <p>lineheight-m</p></div></div>'),
            (x = T()),
            bt(k.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(r, 'class', 'card bg--graa7 padding-m'),
            B(u, 'class', 'card bg--graa7 padding-m'),
            B(b, 'class', 'card bg--graa7');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            w(t, r, y),
            w(t, l, y),
            xt(i, t, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            w(t, b, y),
            w(t, x, y),
            xt(k, t, y),
            (C = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), k.$set(a);
        },
        i(t) {
          C || (pt(i.$$.fragment, t), pt(g.$$.fragment, t), pt(k.$$.fragment, t), (C = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), mt(g.$$.fragment, t), mt(k.$$.fragment, t), (C = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(b),
            t && y(x),
            wt(k, t);
        },
      }
    );
  }
  const wo = {
    href: '/utilities',
    routes: [
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Si, Hi, l, {});
          }
        },
        href: '/utilities/animation',
        title: 'Animation',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Ei, l, {});
          }
        },
        href: '/utilities/border',
        title: 'Border',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Oi, l, {});
          }
        },
        href: '/utilities/color',
        title: 'Color',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Ui, l, {});
          }
        },
        href: '/utilities/flex',
        title: 'Flex',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Qi, l, {});
          }
        },
        href: '/utilities/fonts',
        title: 'Fonts',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, to, l, {});
          }
        },
        href: '/utilities/grid',
        title: 'Grid',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, uo, l, {});
          }
        },
        href: '/utilities/helpers',
        title: 'Helpers',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, go, l, {});
          }
        },
        href: '/utilities/separator',
        title: 'Separator',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, ho, l, {});
          }
        },
        href: '/utilities/sizing',
        title: 'Sizing',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, xo, l, {});
          }
        },
        href: '/utilities/text',
        title: 'Text',
      },
    ],
    title: 'Utilities',
  };
  function yo(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --color--accept: var(--color--green);\n  --fgcolor--accept: var(--fgcolor--green);\n  --color--cancel: var(--color--red);\n  --fgcolor--cancel: var(--fgcolor--red);\n  --color--default: var(--color--bluedark);\n  --fgcolor--default: var(--fgcolor--bluedark);\n  --color--primary: var(--color--bruger);\n  --fgcolor--primary: var(--fgcolor--bruger);\n  --color--secondary: var(--color--graa3);\n  --fgcolor--secondary: var(--fgcolor--graa3);\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function ko(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f;
    return (
      (c = new Xt({ props: { language: 'css', $$slots: { default: [yo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Colors'),
            (n = T()),
            (s = z('div')),
            (a = z('p')),
            (a.textContent = 'Named colors for ease of use'),
            (r = T()),
            (l = z('p')),
            (i = z('a')),
            (i.textContent = 'See list of colors'),
            (o = T()),
            bt(c.$$.fragment),
            B(i, 'href', '#a11y');
        },
        m(g, p) {
          w(g, e, p),
            w(g, n, p),
            w(g, s, p),
            x(s, a),
            x(s, r),
            x(s, l),
            x(l, i),
            w(g, o, p),
            xt(c, g, p),
            (d = !0),
            u || ((f = b(jt.call(null, i, { disabled: !1, href: t[0].href }))), (u = !0));
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), c.$set(n);
        },
        i(t) {
          d || (pt(c.$$.fragment, t), (d = !0));
        },
        o(t) {
          mt(c.$$.fragment, t), (d = !1);
        },
        d(t) {
          t && y(e), t && y(n), t && y(s), t && y(o), wt(c, t), (u = !1), f();
        },
      }
    );
  }
  function zo(t) {
    return [wo.routes.find((t) => 'Color' === t.title)];
  }
  function Co(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --distance-large: 20px;\n  --distance-medium: 10px;\n  --distance-small: 5px;\n  --distance-standard: 10px;\n  --distance-xlarge: 30px;\n  --distance-xxlarge: 50px;\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Mo(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --distance-large: 15px;\n  --distance-medium: 10px;\n  --distance-small: 5px;\n  --distance-standard: 10px;\n  --distance-xlarge: 20px;\n  --distance-xxlarge: 30px;\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function To(t) {
    let e, n, s, a, r, l, i, o;
    return (
      (s = new Xt({ props: { language: 'css', $$slots: { default: [Co] }, $$scope: { ctx: t } } })),
      (i = new Xt({ props: { language: 'css', $$slots: { default: [Mo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Distance'),
            (n = T()),
            bt(s.$$.fragment),
            (a = T()),
            (r = z('h2')),
            (r.textContent = 'Smartphone values'),
            (l = T()),
            bt(i.$$.fragment);
        },
        m(t, c) {
          w(t, e, c), w(t, n, c), xt(s, t, c), w(t, a, c), w(t, r, c), w(t, l, c), xt(i, t, c), (o = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), s.$set(n);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), i.$set(a);
        },
        i(t) {
          o || (pt(s.$$.fragment, t), pt(i.$$.fragment, t), (o = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), mt(i.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && y(e), t && y(n), wt(s, t), t && y(a), t && y(r), t && y(l), wt(i, t);
        },
      }
    );
  }
  function Lo(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --fontfamily--primary: "Work Sans", var(--fontfamily--secondary);\n  --fontfamily--secondary: Arial, Helvetica, sans-serif;\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ho(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --fs-rem-large: 1.125rem; /* 18px */\n  --fs-rem-medium: 1rem; /* 16px */\n  --fs-rem-small: .875rem; /* 14px */\n  --fs-rem-xlarge: 1.25rem; /* 20px */\n  --fs-rem-xsmall: .75rem; /* 12px */\n  --fs-rem-xxlarge: 1.875rem; /* 30px */\n  --fs-rem-xxsmall: .625rem; /* 10px */\n  --fs-rem-xxxlarge: 2.25rem; /* 36px */\n  --fs-rem-xxxsmall: .4375rem; /* 7px */\n  --fs-rem-xxxxlarge: 3.125rem; /* 50px */\n  --fs-large: var(--fs-rem-large);\n  --fs-medium: var(--fs-rem-medium);\n  --fs-small: var(--fs-rem-small);\n  --fs-xlarge: var(--fs-rem-xlarge);\n  --fs-xsmall: var(--fs-rem-xsmall);\n  --fs-xxlarge: var(--fs-rem-xxlarge);\n  --fs-xxsmall: var(--fs-rem-xxsmall);\n  --fs-xxxlarge: var(--fs-rem-xxxxlarge);\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function So(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --fs-ads: var(--fs-xxsmall);\n  --fs-bodytext: var(--fs-large);\n  --fs-caption: var(--fs-small);\n  --fs-quote: var(--fs-xxlarge);\n  --fs-showmore: var(--fs-medium);\n  --fs-subtitle: var(--fs-xlarge);\n  --fs-timestamp: var(--fs-xsmall);\n  --fs-title: var(--fs-xxxlarge);\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Bo(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --fs-large: var(--fs-rem-medium);\n  --fs-medium: var(--fs-rem-medium);\n  --fs-small: var(--fs-rem-xsmall);\n  --fs-xlarge: var(--fs-rem-xlarge);\n  --fs-xsmall: var(--fs-rem-xxsmall);\n  --fs-xxlarge: var(--fs-rem-xxlarge);\n  --fs-xxsmall: var(--fs-rem-xxxsmall);\n  --fs-xxxlarge: var(--fs-rem-xxxlarge);\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function No(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --fs-ads: var(--fs-xxsmall);\n  --fs-bodytext: var(--fs-large);\n  --fs-caption: var(--fs-small);\n  --fs-quote: var(--fs-xxlarge);\n  --fs-showmore: var(--fs-medium);\n  --fs-subtitle: var(--fs-xlarge);\n  --fs-timestamp: var(--fs-xsmall);\n  --fs-title: var(--fs-xxxlarge);\n'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ao(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C;
    return (
      (r = new Xt({ props: { language: 'css', $$slots: { default: [Lo] }, $$scope: { ctx: t } } })),
      (c = new Xt({ props: { language: 'css', $$slots: { default: [Ho] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'css', $$slots: { default: [So] }, $$scope: { ctx: t } } })),
      ($ = new Xt({ props: { language: 'css', $$slots: { default: [Bo] }, $$scope: { ctx: t } } })),
      (k = new Xt({ props: { language: 'css', $$slots: { default: [No] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Fonts'),
            (n = T()),
            (s = z('h2')),
            (s.textContent = 'Font families'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            (i = z('h2')),
            (i.textContent = 'Fontsizes'),
            (o = T()),
            bt(c.$$.fragment),
            (d = T()),
            (u = z('h2')),
            (u.textContent = 'Aliased Fontsizes'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h2')),
            (m.textContent = 'SMARTPHONE Fontsizes'),
            (h = T()),
            bt($.$$.fragment),
            (v = T()),
            (b = z('h2')),
            (b.textContent = 'SMARTPHONE Aliased Fontsizes'),
            (x = T()),
            bt(k.$$.fragment);
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            xt(r, t, y),
            w(t, l, y),
            w(t, i, y),
            w(t, o, y),
            xt(c, t, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            xt($, t, y),
            w(t, v, y),
            w(t, b, y),
            w(t, x, y),
            xt(k, t, y),
            (C = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), c.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), g.$set(a);
          const l = {};
          1 & e && (l.$$scope = { dirty: e, ctx: t }), $.$set(l);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), k.$set(i);
        },
        i(t) {
          C ||
            (pt(r.$$.fragment, t),
            pt(c.$$.fragment, t),
            pt(g.$$.fragment, t),
            pt($.$$.fragment, t),
            pt(k.$$.fragment, t),
            (C = !0));
        },
        o(t) {
          mt(r.$$.fragment, t),
            mt(c.$$.fragment, t),
            mt(g.$$.fragment, t),
            mt($.$$.fragment, t),
            mt(k.$$.fragment, t),
            (C = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            t && y(i),
            t && y(o),
            wt(c, t),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            wt($, t),
            t && y(v),
            t && y(b),
            t && y(x),
            wt(k, t);
        },
      }
    );
  }
  function Eo(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --box-shadow: 0 5px 18px rgba(var(--rgb-color--black), .1);\n  --box-shadow--dark: 0 5px 18px rgba(var(--rgb-color--black), .6);\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function jo(e) {
    let n;
    return {
      c() {
        n = M(
          '\n  --border-radius--small: 5px;\n  --border-radius: 10px;\n  --border-radius--medium: var(--border-radius);\n  '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Fo(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f;
    return (
      (i = new Xt({ props: { language: 'css', $$slots: { default: [Eo] }, $$scope: { ctx: t } } })),
      (u = new Xt({ props: { language: 'css', $$slots: { default: [jo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Miscellaneous'),
            (n = T()),
            (s = z('div')),
            (s.innerHTML = '<p>Variables that didn&#39;t fit another category</p>'),
            (a = T()),
            (r = z('h2')),
            (r.textContent = 'Box shadow'),
            (l = T()),
            bt(i.$$.fragment),
            (o = T()),
            (c = z('h2')),
            (c.textContent = 'Border radius'),
            (d = T()),
            bt(u.$$.fragment);
        },
        m(t, g) {
          w(t, e, g),
            w(t, n, g),
            w(t, s, g),
            w(t, a, g),
            w(t, r, g),
            w(t, l, g),
            xt(i, t, g),
            w(t, o, g),
            w(t, c, g),
            w(t, d, g),
            xt(u, t, g),
            (f = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
        },
        i(t) {
          f || (pt(i.$$.fragment, t), pt(u.$$.fragment, t), (f = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), mt(u.$$.fragment, t), (f = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            wt(i, t),
            t && y(o),
            t && y(c),
            t && y(d),
            wt(u, t);
        },
      }
    );
  }
  const Oo = '/cssvariables',
    Vo = {
      href: Oo,
      routes: [
        {
          component: class extends kt {
            constructor(t) {
              super(), yt(this, t, zo, ko, l, {});
            }
          },
          href: `${Oo}/colors`,
          title: 'Colors',
        },
        {
          component: class extends kt {
            constructor(t) {
              super(), yt(this, t, null, To, l, {});
            }
          },
          href: `${Oo}/distance`,
          title: 'Distance',
        },
        {
          component: class extends kt {
            constructor(t) {
              super(), yt(this, t, null, Ao, l, {});
            }
          },
          href: `${Oo}/fonts`,
          title: 'Fonts',
        },
        {
          component: class extends kt {
            constructor(t) {
              super(), yt(this, t, null, Fo, l, {});
            }
          },
          href: `${Oo}/misc`,
          title: 'Misc',
        },
      ],
      title: 'CSS variables',
    };
  function Io(t) {
    let e, n, s, a;
    return (
      (e = new Xt({ props: { language: 'js', $$slots: { default: [_o] }, $$scope: { ctx: t } } })),
      (s = new Xt({ props: { language: 'html', $$slots: { default: [Po] }, $$scope: { ctx: t } } })),
      {
        c() {
          bt(e.$$.fragment), (n = T()), bt(s.$$.fragment);
        },
        m(t, r) {
          xt(e, t, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        i(t) {
          a || (pt(e.$$.fragment, t), pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(e.$$.fragment, t), mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          wt(e, t), t && y(n), wt(s, t);
        },
      }
    );
  }
  function Do(t) {
    let e, n, s, a;
    return (
      (s = new Xt({ props: { language: 'js', $$slots: { default: [qo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('p')),
            (e.innerHTML = 'See full implementation in <b>HorizontalScroll.svelte</b>'),
            (n = T()),
            bt(s.$$.fragment);
        },
        m(t, r) {
          w(t, e, r), w(t, n, r), xt(s, t, r), (a = !0);
        },
        i(t) {
          a || (pt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          mt(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(e), t && y(n), wt(s, t);
        },
      }
    );
  }
  function _o(e) {
    let n;
    return {
      c() {
        n = M(
          "import {\n  HorizontalScrollHandler,\n  SCROLLDIRECTION,\n} from '@ekstra-bladet/designsystem';\n\nconst scrollItemContainer = document.getElementById('scrollItemContainer');\nconst scrollContainer = document.getElementById('scrollContainer');\n\nconst horizontalScrollHandler = new HorizontalScrollHandler();\nhorizontalScrollHandler.init(scrollItemContainer, scrollContainer);\n\nprevScrollBtn.addEventListener('click', () => {\n  horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.left);\n});\n\nnextScrollBtn.addEventListener('click', () => {\n  horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.right);\n});\n"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Po(e) {
    let n;
    return {
      c() {
        n = M(
          '<div\n  id="scrollContainer"\n  class="horizontal-scroll-container"\n  data-atend="false"\n  data-atstart="true"\n>\n  <div id="scrollItemContainer" data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">\n    ...\n  </div>\n</div>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function qo(e) {
    let n;
    return {
      c() {
        n = M(
          "import { HorizontalScrollHandler, SCROLLDIRECTION } from '../../functions/horizontalscroll';\n\nlet scrollContainer: HTMLDivElement;\nlet scrollItemContainer: HTMLDivElement;\n\nconst horizontalScrollHandler = new HorizontalScrollHandler();\n\nonMount(() => {\n  horizontalScrollHandler.init(scrollItemContainer, scrollContainer);\n});\n\nafterUpdate(() => {\n  horizontalScrollHandler.update();\n});"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ro(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C, M, H, S, B;
    const N = [Do, Io],
      A = [];
    function E(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (M = E(t)),
      (H = A[M] = N[M](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'HorizontalScroll'),
            (n = T()),
            (s = z('p')),
            (s.textContent =
              'The file exports an enum called SCROLLDIRECTION and a class called HorizontalScrollHandler.'),
            (a = T()),
            (r = z('h2')),
            (r.textContent = 'SCROLLDIRECTION - enum'),
            (l = T()),
            (i = z('p')),
            (i.innerHTML =
              'The idea of the enum is to ensure correct arguments is passed to <b>scrollWithButton</b> function.'),
            (o = T()),
            (c = z('p')),
            (c.textContent = 'Properties:'),
            (d = T()),
            (u = z('ul')),
            (u.innerHTML = '<li>left</li> \n  <li>right</li>'),
            (f = T()),
            (g = z('h2')),
            (g.textContent = 'HorizontalScrollHandler - Class'),
            (p = T()),
            (m = z('p')),
            (m.textContent = 'Instantiation takes no arguments.'),
            (h = T()),
            ($ = z('p')),
            ($.textContent = 'The class has three public functions'),
            (v = T()),
            (b = z('code')),
            (b.innerHTML =
              '<div class="padding-xl--l padding-m--tb"><div><h3 class="margin-none">init</h3> \n      <p>Sets up function to handle scrolling</p> \n      <p><b>@param scrollItemContainer</b> HTMLDivElement <em>required</em> - the closest parent to the elements in the scroll\n        list</p> \n      <p><b>@param scrollContainer</b> HTMLDivElement <em>required</em> - the parent, which has the width of the element</p></div> \n    <div><h3 class="margin-none">scrollWithButton</h3> \n      <p>Moves the list to make the next element, which is not fully visible, the new &quot;first&quot; element of the list</p> \n      <p><b>@param scrollContainer</b> HTMLDivElement <em>required</em> - the parent, which has the width of the element</p></div> \n    <div><h3 class="margin-none">update</h3> \n      <p>Should be called when new elements are added to list, to ensure all elements will be visible through click\n        functionality</p></div></div>'),
            (x = T()),
            (k = z('p')),
            (k.innerHTML =
              'The reason for the use of an init function and not utilizing the contructor is to ensure an instance exists when\n  referencing <em>scrollWithButton</em> in svelte context'),
            (C = T()),
            H.c(),
            (S = L());
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            w(t, r, y),
            w(t, l, y),
            w(t, i, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            w(t, g, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            w(t, b, y),
            w(t, x, y),
            w(t, k, y),
            w(t, C, y),
            A[M].m(t, y),
            w(t, S, y),
            (B = !0);
        },
        p(t, [e]) {
          let n = M;
          (M = E(t)),
            M !== n &&
              (ft(),
              mt(A[n], 1, 1, () => {
                A[n] = null;
              }),
              gt(),
              (H = A[M]),
              H || ((H = A[M] = N[M](t)), H.c()),
              pt(H, 1),
              H.m(S.parentNode, S));
        },
        i(t) {
          B || (pt(H), (B = !0));
        },
        o(t) {
          mt(H), (B = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            t && y(g),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(b),
            t && y(x),
            t && y(k),
            t && y(C),
            A[M].d(t),
            t && y(S);
        },
      }
    );
  }
  function Wo(t, e, n) {
    let s;
    return u(t, Yn, (t) => n(0, (s = t))), [s];
  }
  function Go(e) {
    let n;
    return {
      c() {
        n = M(
          "import { splitNfitTitle } from '@ekstra-bladet/designsystem/svelte/functions/splitNfitTitle';\n\nconst titleEl = splitNfitTitle('This is my title that I want split and fitted');\ndocument.appendChild(titleEl);\n"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Uo(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $;
    return (
      (p = new Xt({ props: { language: 'js', $$slots: { default: [Go] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'SplitNfitTitle'),
            (n = T()),
            (s = z('p')),
            (a = M('Uses\n  ')),
            (r = z('a')),
            (r.textContent = `${t[0].title}`),
            (l = M(' to split the title, and\n  then uses\n  ')),
            (i = z('a')),
            (i.textContent = 'fitty'),
            (o = M(' to adjust font-size to make the\n  lines fit the width of the parent element.')),
            (c = T()),
            (d = z('p')),
            (d.textContent = 'Returns a document fragment'),
            (u = T()),
            (f = z('code')),
            (f.innerHTML =
              '<div class="padding-xl--l padding-m--tb"><div><b>@param title</b> string <em>required</em></div> \n    <div><b>@param options</b> object\n      <div class="padding-l--l"><div><b>@prop maxLines?</b> number = 10</div> \n        <div><b>@prop minLines?</b> number = 1</div> \n        <div><b>@prop maxSize?</b> number</div> \n        <div><b>@prop minSize?</b> number</div> \n        <div><b>@prop multiLine?</b> boolean</div> \n        <div><b>@prop observeMutations?</b> MutationObserverInit</div> \n        <div><b>@prop safe?</b> boolean = false - when false the browser waits for document.fonts.ready, should be false if\n          using custom fonts</div></div></div></div>'),
            (g = T()),
            bt(p.$$.fragment),
            B(r, 'href', '#a11y'),
            B(i, 'href', 'https://www.npmjs.com/package/fitty'),
            B(i, 'target', '_blank'),
            B(i, 'rel', 'noreferrer');
        },
        m(v, y) {
          w(v, e, y),
            w(v, n, y),
            w(v, s, y),
            x(s, a),
            x(s, r),
            x(s, l),
            x(s, i),
            x(s, o),
            w(v, c, y),
            w(v, d, y),
            w(v, u, y),
            w(v, f, y),
            w(v, g, y),
            xt(p, v, y),
            (m = !0),
            h || (($ = b(jt.call(null, r, { disabled: !1, href: t[0].href }))), (h = !0));
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), p.$set(n);
        },
        i(t) {
          m || (pt(p.$$.fragment, t), (m = !0));
        },
        o(t) {
          mt(p.$$.fragment, t), (m = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            t && y(g),
            wt(p, t),
            (h = !1),
            $();
        },
      }
    );
  }
  function Zo(t) {
    return [ku.routes.find((t) => 'SplitTitle' === t.title)];
  }
  function Yo(e) {
    let n;
    return {
      c() {
        n = M(
          "import { splitTitle } from '@ekstra-bladet/designsystem/svelte/functions/splitTitle';\n\nconst lines = splitTitle('Split this into lines', 2, 3);\n"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Xo(t) {
    let e, n, s, a, r, l, i, o, c, d;
    return (
      (c = new Xt({ props: { language: 'js', $$slots: { default: [Yo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'SplitTitle'),
            (n = T()),
            (s = z('p')),
            (s.textContent = 'Splits the title into lines based on given min and max number of lines.'),
            (a = T()),
            (r = z('p')),
            (r.textContent = 'The created lines is returned as an array of strings.'),
            (l = T()),
            (i = z('code')),
            (i.innerHTML =
              '<div><div><b>@param input</b> string <em>required</em></div> \n    <div><b>@param minLines</b> number = 1</div> \n    <div><b>@param maxLines</b> number = 4</div></div>'),
            (o = T()),
            bt(c.$$.fragment);
        },
        m(t, u) {
          w(t, e, u),
            w(t, n, u),
            w(t, s, u),
            w(t, a, u),
            w(t, r, u),
            w(t, l, u),
            w(t, i, u),
            w(t, o, u),
            xt(c, t, u),
            (d = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), c.$set(n);
        },
        i(t) {
          d || (pt(c.$$.fragment, t), (d = !0));
        },
        o(t) {
          mt(c.$$.fragment, t), (d = !1);
        },
        d(t) {
          t && y(e), t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), t && y(i), t && y(o), wt(c, t);
        },
      }
    );
  }
  function Qo(e) {
    let n;
    return {
      c() {
        n = M(
          "import { throttle } from '@ekstra-bladet/designsystem';\n\nwindow.addEventListener(\n  'scroll',\n  throttle((data) => {\n    callback(data);\n  }, 150)\n);\n"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Ko(t) {
    let e, n, s, a, r, l, i, o, c, d;
    return (
      (c = new Xt({ props: { language: 'js', $$slots: { default: [Qo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Throttle'),
            (n = T()),
            (s = z('p')),
            (s.textContent =
              'Throttle the execution of a given callback. Usefull with scroll events as they fire rapidly and there is no good way\n  to tell if the user stopped scrolling.'),
            (a = T()),
            (r = z('p')),
            (r.textContent =
              'Takes a callback function and a number, the amount of milliseconds to throttle, as arguments'),
            (l = T()),
            (i = z('code')),
            (i.innerHTML =
              '<div><b>@param callback</b>  <em>required</em> callback function</div> \n  <div><b>@param wait</b>  <em>required</em> number of milliseconds to wait</div>'),
            (o = T()),
            bt(c.$$.fragment);
        },
        m(t, u) {
          w(t, e, u),
            w(t, n, u),
            w(t, s, u),
            w(t, a, u),
            w(t, r, u),
            w(t, l, u),
            w(t, i, u),
            w(t, o, u),
            xt(c, t, u),
            (d = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), c.$set(n);
        },
        i(t) {
          d || (pt(c.$$.fragment, t), (d = !0));
        },
        o(t) {
          mt(c.$$.fragment, t), (d = !1);
        },
        d(t) {
          t && y(e), t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), t && y(i), t && y(o), wt(c, t);
        },
      }
    );
  }
  function Jo(e) {
    let n;
    return {
      c() {
        n = M("import { timePassedSince } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function tc(t) {
    let e, n, s, a, r, l, i, o;
    return (
      (i = new Xt({ props: { language: 'js', $$slots: { default: [Jo] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'timePassedSince'),
            (n = T()),
            (s = z('p')),
            (s.textContent =
              'Takes a datetimestring and transforms it to a string with the time passed since the given time'),
            (a = T()),
            (r = z('code')),
            (r.innerHTML =
              '<div class="padding-xl--l padding-m--tb"><p><b>@param datetime</b> valid datetimestring <em>required</em></p> \n    <p><b>@param todayAsText</b> boolean <em>optional</em></p></div>'),
            (l = T()),
            bt(i.$$.fragment);
        },
        m(t, c) {
          w(t, e, c), w(t, n, c), w(t, s, c), w(t, a, c), w(t, r, c), w(t, l, c), xt(i, t, c), (o = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
        },
        i(t) {
          o || (pt(i.$$.fragment, t), (o = !0));
        },
        o(t) {
          mt(i.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && y(e), t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), wt(i, t);
        },
      }
    );
  }
  var ec = 'top',
    nc = 'bottom',
    sc = 'right',
    ac = 'left',
    rc = 'auto',
    lc = [ec, nc, sc, ac],
    ic = 'start',
    oc = 'end',
    cc = 'clippingParents',
    dc = 'viewport',
    uc = 'popper',
    fc = 'reference',
    gc = lc.reduce(function (t, e) {
      return t.concat([e + '-' + ic, e + '-' + oc]);
    }, []),
    pc = [].concat(lc, [rc]).reduce(function (t, e) {
      return t.concat([e, e + '-' + ic, e + '-' + oc]);
    }, []),
    mc = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];
  function hc(t) {
    return t ? (t.nodeName || '').toLowerCase() : null;
  }
  function $c(t) {
    if (null == t) return window;
    if ('[object Window]' !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function vc(t) {
    return t instanceof $c(t).Element || t instanceof Element;
  }
  function bc(t) {
    return t instanceof $c(t).HTMLElement || t instanceof HTMLElement;
  }
  function xc(t) {
    return 'undefined' != typeof ShadowRoot && (t instanceof $c(t).ShadowRoot || t instanceof ShadowRoot);
  }
  var wc = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var n = e.styles[t] || {},
          s = e.attributes[t] || {},
          a = e.elements[t];
        bc(a) &&
          hc(a) &&
          (Object.assign(a.style, n),
          Object.keys(s).forEach(function (t) {
            var e = s[t];
            !1 === e ? a.removeAttribute(t) : a.setAttribute(t, !0 === e ? '' : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        n = {
          popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' },
          arrow: { position: 'absolute' },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, n.popper),
        (e.styles = n),
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var s = e.elements[t],
              a = e.attributes[t] || {},
              r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
                return (t[e] = ''), t;
              }, {});
            bc(s) &&
              hc(s) &&
              (Object.assign(s.style, r),
              Object.keys(a).forEach(function (t) {
                s.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ['computeStyles'],
  };
  function yc(t) {
    return t.split('-')[0];
  }
  var kc = Math.max,
    zc = Math.min,
    Cc = Math.round;
  function Mc() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + '/' + t.version;
          })
          .join(' ')
      : navigator.userAgent;
  }
  function Tc() {
    return !/^((?!chrome|android).)*safari/i.test(Mc());
  }
  function Lc(t, e, n) {
    void 0 === e && (e = !1), void 0 === n && (n = !1);
    var s = t.getBoundingClientRect(),
      a = 1,
      r = 1;
    e &&
      bc(t) &&
      ((a = (t.offsetWidth > 0 && Cc(s.width) / t.offsetWidth) || 1),
      (r = (t.offsetHeight > 0 && Cc(s.height) / t.offsetHeight) || 1));
    var l = (vc(t) ? $c(t) : window).visualViewport,
      i = !Tc() && n,
      o = (s.left + (i && l ? l.offsetLeft : 0)) / a,
      c = (s.top + (i && l ? l.offsetTop : 0)) / r,
      d = s.width / a,
      u = s.height / r;
    return { width: d, height: u, top: c, right: o + d, bottom: c + u, left: o, x: o, y: c };
  }
  function Hc(t) {
    var e = Lc(t),
      n = t.offsetWidth,
      s = t.offsetHeight;
    return (
      Math.abs(e.width - n) <= 1 && (n = e.width),
      Math.abs(e.height - s) <= 1 && (s = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: n, height: s }
    );
  }
  function Sc(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && xc(n)) {
      var s = e;
      do {
        if (s && t.isSameNode(s)) return !0;
        s = s.parentNode || s.host;
      } while (s);
    }
    return !1;
  }
  function Bc(t) {
    return $c(t).getComputedStyle(t);
  }
  function Nc(t) {
    return ['table', 'td', 'th'].indexOf(hc(t)) >= 0;
  }
  function Ac(t) {
    return ((vc(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function Ec(t) {
    return 'html' === hc(t) ? t : t.assignedSlot || t.parentNode || (xc(t) ? t.host : null) || Ac(t);
  }
  function jc(t) {
    return bc(t) && 'fixed' !== Bc(t).position ? t.offsetParent : null;
  }
  function Fc(t) {
    for (var e = $c(t), n = jc(t); n && Nc(n) && 'static' === Bc(n).position; ) n = jc(n);
    return n && ('html' === hc(n) || ('body' === hc(n) && 'static' === Bc(n).position))
      ? e
      : n ||
          (function (t) {
            var e = /firefox/i.test(Mc());
            if (/Trident/i.test(Mc()) && bc(t) && 'fixed' === Bc(t).position) return null;
            var n = Ec(t);
            for (xc(n) && (n = n.host); bc(n) && ['html', 'body'].indexOf(hc(n)) < 0; ) {
              var s = Bc(n);
              if (
                'none' !== s.transform ||
                'none' !== s.perspective ||
                'paint' === s.contain ||
                -1 !== ['transform', 'perspective'].indexOf(s.willChange) ||
                (e && 'filter' === s.willChange) ||
                (e && s.filter && 'none' !== s.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Oc(t) {
    return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
  }
  function Vc(t, e, n) {
    return kc(t, zc(e, n));
  }
  function Ic(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function Dc(t, e) {
    return e.reduce(function (e, n) {
      return (e[n] = t), e;
    }, {});
  }
  var _c = function (t, e) {
    return Ic(
      'number' != typeof (t = 'function' == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t)
        ? t
        : Dc(t, lc)
    );
  };
  var Pc = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e,
        n = t.state,
        s = t.name,
        a = t.options,
        r = n.elements.arrow,
        l = n.modifiersData.popperOffsets,
        i = yc(n.placement),
        o = Oc(i),
        c = [ac, sc].indexOf(i) >= 0 ? 'height' : 'width';
      if (r && l) {
        var d = _c(a.padding, n),
          u = Hc(r),
          f = 'y' === o ? ec : ac,
          g = 'y' === o ? nc : sc,
          p = n.rects.reference[c] + n.rects.reference[o] - l[o] - n.rects.popper[c],
          m = l[o] - n.rects.reference[o],
          h = Fc(r),
          $ = h ? ('y' === o ? h.clientHeight || 0 : h.clientWidth || 0) : 0,
          v = p / 2 - m / 2,
          b = d[f],
          x = $ - u[c] - d[g],
          w = $ / 2 - u[c] / 2 + v,
          y = Vc(b, w, x),
          k = o;
        n.modifiersData[s] = (((e = {})[k] = y), (e.centerOffset = y - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        n = t.options.element,
        s = void 0 === n ? '[data-popper-arrow]' : n;
      null != s &&
        ('string' != typeof s || (s = e.elements.popper.querySelector(s))) &&
        Sc(e.elements.popper, s) &&
        (e.elements.arrow = s);
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  };
  function qc(t) {
    return t.split('-')[1];
  }
  var Rc = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function Wc(t) {
    var e,
      n = t.popper,
      s = t.popperRect,
      a = t.placement,
      r = t.variation,
      l = t.offsets,
      i = t.position,
      o = t.gpuAcceleration,
      c = t.adaptive,
      d = t.roundOffsets,
      u = t.isFixed,
      f = l.x,
      g = void 0 === f ? 0 : f,
      p = l.y,
      m = void 0 === p ? 0 : p,
      h = 'function' == typeof d ? d({ x: g, y: m }) : { x: g, y: m };
    (g = h.x), (m = h.y);
    var $ = l.hasOwnProperty('x'),
      v = l.hasOwnProperty('y'),
      b = ac,
      x = ec,
      w = window;
    if (c) {
      var y = Fc(n),
        k = 'clientHeight',
        z = 'clientWidth';
      if (
        (y === $c(n) &&
          'static' !== Bc((y = Ac(n))).position &&
          'absolute' === i &&
          ((k = 'scrollHeight'), (z = 'scrollWidth')),
        a === ec || ((a === ac || a === sc) && r === oc))
      )
        (x = nc),
          (m -= (u && y === w && w.visualViewport ? w.visualViewport.height : y[k]) - s.height),
          (m *= o ? 1 : -1);
      if (a === ac || ((a === ec || a === nc) && r === oc))
        (b = sc),
          (g -= (u && y === w && w.visualViewport ? w.visualViewport.width : y[z]) - s.width),
          (g *= o ? 1 : -1);
    }
    var C,
      M = Object.assign({ position: i }, c && Rc),
      T =
        !0 === d
          ? (function (t) {
              var e = t.x,
                n = t.y,
                s = window.devicePixelRatio || 1;
              return { x: Cc(e * s) / s || 0, y: Cc(n * s) / s || 0 };
            })({ x: g, y: m })
          : { x: g, y: m };
    return (
      (g = T.x),
      (m = T.y),
      o
        ? Object.assign(
            {},
            M,
            (((C = {})[x] = v ? '0' : ''),
            (C[b] = $ ? '0' : ''),
            (C.transform =
              (w.devicePixelRatio || 1) <= 1
                ? 'translate(' + g + 'px, ' + m + 'px)'
                : 'translate3d(' + g + 'px, ' + m + 'px, 0)'),
            C)
          )
        : Object.assign({}, M, (((e = {})[x] = v ? m + 'px' : ''), (e[b] = $ ? g + 'px' : ''), (e.transform = ''), e))
    );
  }
  var Gc = { passive: !0 };
  var Uc = {
      name: 'eventListeners',
      enabled: !0,
      phase: 'write',
      fn: function () {},
      effect: function (t) {
        var e = t.state,
          n = t.instance,
          s = t.options,
          a = s.scroll,
          r = void 0 === a || a,
          l = s.resize,
          i = void 0 === l || l,
          o = $c(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          r &&
            c.forEach(function (t) {
              t.addEventListener('scroll', n.update, Gc);
            }),
          i && o.addEventListener('resize', n.update, Gc),
          function () {
            r &&
              c.forEach(function (t) {
                t.removeEventListener('scroll', n.update, Gc);
              }),
              i && o.removeEventListener('resize', n.update, Gc);
          }
        );
      },
      data: {},
    },
    Zc = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  function Yc(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Zc[t];
    });
  }
  var Xc = { start: 'end', end: 'start' };
  function Qc(t) {
    return t.replace(/start|end/g, function (t) {
      return Xc[t];
    });
  }
  function Kc(t) {
    var e = $c(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Jc(t) {
    return Lc(Ac(t)).left + Kc(t).scrollLeft;
  }
  function td(t) {
    var e = Bc(t),
      n = e.overflow,
      s = e.overflowX,
      a = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + s);
  }
  function ed(t) {
    return ['html', 'body', '#document'].indexOf(hc(t)) >= 0 ? t.ownerDocument.body : bc(t) && td(t) ? t : ed(Ec(t));
  }
  function nd(t, e) {
    var n;
    void 0 === e && (e = []);
    var s = ed(t),
      a = s === (null == (n = t.ownerDocument) ? void 0 : n.body),
      r = $c(s),
      l = a ? [r].concat(r.visualViewport || [], td(s) ? s : []) : s,
      i = e.concat(l);
    return a ? i : i.concat(nd(Ec(l)));
  }
  function sd(t) {
    return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
  }
  function ad(t, e, n) {
    return e === dc
      ? sd(
          (function (t, e) {
            var n = $c(t),
              s = Ac(t),
              a = n.visualViewport,
              r = s.clientWidth,
              l = s.clientHeight,
              i = 0,
              o = 0;
            if (a) {
              (r = a.width), (l = a.height);
              var c = Tc();
              (c || (!c && 'fixed' === e)) && ((i = a.offsetLeft), (o = a.offsetTop));
            }
            return { width: r, height: l, x: i + Jc(t), y: o };
          })(t, n)
        )
      : vc(e)
      ? (function (t, e) {
          var n = Lc(t, !1, 'fixed' === e);
          return (
            (n.top = n.top + t.clientTop),
            (n.left = n.left + t.clientLeft),
            (n.bottom = n.top + t.clientHeight),
            (n.right = n.left + t.clientWidth),
            (n.width = t.clientWidth),
            (n.height = t.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n
          );
        })(e, n)
      : sd(
          (function (t) {
            var e,
              n = Ac(t),
              s = Kc(t),
              a = null == (e = t.ownerDocument) ? void 0 : e.body,
              r = kc(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
              l = kc(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
              i = -s.scrollLeft + Jc(t),
              o = -s.scrollTop;
            return (
              'rtl' === Bc(a || n).direction && (i += kc(n.clientWidth, a ? a.clientWidth : 0) - r),
              { width: r, height: l, x: i, y: o }
            );
          })(Ac(t))
        );
  }
  function rd(t, e, n, s) {
    var a =
        'clippingParents' === e
          ? (function (t) {
              var e = nd(Ec(t)),
                n = ['absolute', 'fixed'].indexOf(Bc(t).position) >= 0 && bc(t) ? Fc(t) : t;
              return vc(n)
                ? e.filter(function (t) {
                    return vc(t) && Sc(t, n) && 'body' !== hc(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      r = [].concat(a, [n]),
      l = r[0],
      i = r.reduce(function (e, n) {
        var a = ad(t, n, s);
        return (
          (e.top = kc(a.top, e.top)),
          (e.right = zc(a.right, e.right)),
          (e.bottom = zc(a.bottom, e.bottom)),
          (e.left = kc(a.left, e.left)),
          e
        );
      }, ad(t, l, s));
    return (i.width = i.right - i.left), (i.height = i.bottom - i.top), (i.x = i.left), (i.y = i.top), i;
  }
  function ld(t) {
    var e,
      n = t.reference,
      s = t.element,
      a = t.placement,
      r = a ? yc(a) : null,
      l = a ? qc(a) : null,
      i = n.x + n.width / 2 - s.width / 2,
      o = n.y + n.height / 2 - s.height / 2;
    switch (r) {
      case ec:
        e = { x: i, y: n.y - s.height };
        break;
      case nc:
        e = { x: i, y: n.y + n.height };
        break;
      case sc:
        e = { x: n.x + n.width, y: o };
        break;
      case ac:
        e = { x: n.x - s.width, y: o };
        break;
      default:
        e = { x: n.x, y: n.y };
    }
    var c = r ? Oc(r) : null;
    if (null != c) {
      var d = 'y' === c ? 'height' : 'width';
      switch (l) {
        case ic:
          e[c] = e[c] - (n[d] / 2 - s[d] / 2);
          break;
        case oc:
          e[c] = e[c] + (n[d] / 2 - s[d] / 2);
      }
    }
    return e;
  }
  function id(t, e) {
    void 0 === e && (e = {});
    var n = e,
      s = n.placement,
      a = void 0 === s ? t.placement : s,
      r = n.strategy,
      l = void 0 === r ? t.strategy : r,
      i = n.boundary,
      o = void 0 === i ? cc : i,
      c = n.rootBoundary,
      d = void 0 === c ? dc : c,
      u = n.elementContext,
      f = void 0 === u ? uc : u,
      g = n.altBoundary,
      p = void 0 !== g && g,
      m = n.padding,
      h = void 0 === m ? 0 : m,
      $ = Ic('number' != typeof h ? h : Dc(h, lc)),
      v = f === uc ? fc : uc,
      b = t.rects.popper,
      x = t.elements[p ? v : f],
      w = rd(vc(x) ? x : x.contextElement || Ac(t.elements.popper), o, d, l),
      y = Lc(t.elements.reference),
      k = ld({ reference: y, element: b, strategy: 'absolute', placement: a }),
      z = sd(Object.assign({}, b, k)),
      C = f === uc ? z : y,
      M = {
        top: w.top - C.top + $.top,
        bottom: C.bottom - w.bottom + $.bottom,
        left: w.left - C.left + $.left,
        right: C.right - w.right + $.right,
      },
      T = t.modifiersData.offset;
    if (f === uc && T) {
      var L = T[a];
      Object.keys(M).forEach(function (t) {
        var e = [sc, nc].indexOf(t) >= 0 ? 1 : -1,
          n = [ec, nc].indexOf(t) >= 0 ? 'y' : 'x';
        M[t] += L[n] * e;
      });
    }
    return M;
  }
  function od(t, e) {
    void 0 === e && (e = {});
    var n = e,
      s = n.placement,
      a = n.boundary,
      r = n.rootBoundary,
      l = n.padding,
      i = n.flipVariations,
      o = n.allowedAutoPlacements,
      c = void 0 === o ? pc : o,
      d = qc(s),
      u = d
        ? i
          ? gc
          : gc.filter(function (t) {
              return qc(t) === d;
            })
        : lc,
      f = u.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === f.length && (f = u);
    var g = f.reduce(function (e, n) {
      return (e[n] = id(t, { placement: n, boundary: a, rootBoundary: r, padding: l })[yc(n)]), e;
    }, {});
    return Object.keys(g).sort(function (t, e) {
      return g[t] - g[e];
    });
  }
  var cd = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e = t.state,
        n = t.options,
        s = t.name;
      if (!e.modifiersData[s]._skip) {
        for (
          var a = n.mainAxis,
            r = void 0 === a || a,
            l = n.altAxis,
            i = void 0 === l || l,
            o = n.fallbackPlacements,
            c = n.padding,
            d = n.boundary,
            u = n.rootBoundary,
            f = n.altBoundary,
            g = n.flipVariations,
            p = void 0 === g || g,
            m = n.allowedAutoPlacements,
            h = e.options.placement,
            $ = yc(h),
            v =
              o ||
              ($ === h || !p
                ? [Yc(h)]
                : (function (t) {
                    if (yc(t) === rc) return [];
                    var e = Yc(t);
                    return [Qc(t), e, Qc(e)];
                  })(h)),
            b = [h].concat(v).reduce(function (t, n) {
              return t.concat(
                yc(n) === rc
                  ? od(e, {
                      placement: n,
                      boundary: d,
                      rootBoundary: u,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : n
              );
            }, []),
            x = e.rects.reference,
            w = e.rects.popper,
            y = new Map(),
            k = !0,
            z = b[0],
            C = 0;
          C < b.length;
          C++
        ) {
          var M = b[C],
            T = yc(M),
            L = qc(M) === ic,
            H = [ec, nc].indexOf(T) >= 0,
            S = H ? 'width' : 'height',
            B = id(e, { placement: M, boundary: d, rootBoundary: u, altBoundary: f, padding: c }),
            N = H ? (L ? sc : ac) : L ? nc : ec;
          x[S] > w[S] && (N = Yc(N));
          var A = Yc(N),
            E = [];
          if (
            (r && E.push(B[T] <= 0),
            i && E.push(B[N] <= 0, B[A] <= 0),
            E.every(function (t) {
              return t;
            }))
          ) {
            (z = M), (k = !1);
            break;
          }
          y.set(M, E);
        }
        if (k)
          for (
            var j = function (t) {
                var e = b.find(function (e) {
                  var n = y.get(e);
                  if (n)
                    return n.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (z = e), 'break';
              },
              F = p ? 3 : 1;
            F > 0;
            F--
          ) {
            if ('break' === j(F)) break;
          }
        e.placement !== z && ((e.modifiersData[s]._skip = !0), (e.placement = z), (e.reset = !0));
      }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 },
  };
  function dd(t, e, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: t.top - e.height - n.y,
        right: t.right - e.width + n.x,
        bottom: t.bottom - e.height + n.y,
        left: t.left - e.width - n.x,
      }
    );
  }
  function ud(t) {
    return [ec, sc, nc, ac].some(function (e) {
      return t[e] >= 0;
    });
  }
  var fd = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: function (t) {
      var e = t.state,
        n = t.options,
        s = t.name,
        a = n.offset,
        r = void 0 === a ? [0, 0] : a,
        l = pc.reduce(function (t, n) {
          return (
            (t[n] = (function (t, e, n) {
              var s = yc(t),
                a = [ac, ec].indexOf(s) >= 0 ? -1 : 1,
                r = 'function' == typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                l = r[0],
                i = r[1];
              return (l = l || 0), (i = (i || 0) * a), [ac, sc].indexOf(s) >= 0 ? { x: i, y: l } : { x: l, y: i };
            })(n, e.rects, r)),
            t
          );
        }, {}),
        i = l[e.placement],
        o = i.x,
        c = i.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += o), (e.modifiersData.popperOffsets.y += c)),
        (e.modifiersData[s] = l);
    },
  };
  var gd = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e = t.state,
        n = t.options,
        s = t.name,
        a = n.mainAxis,
        r = void 0 === a || a,
        l = n.altAxis,
        i = void 0 !== l && l,
        o = n.boundary,
        c = n.rootBoundary,
        d = n.altBoundary,
        u = n.padding,
        f = n.tether,
        g = void 0 === f || f,
        p = n.tetherOffset,
        m = void 0 === p ? 0 : p,
        h = id(e, { boundary: o, rootBoundary: c, padding: u, altBoundary: d }),
        $ = yc(e.placement),
        v = qc(e.placement),
        b = !v,
        x = Oc($),
        w = 'x' === x ? 'y' : 'x',
        y = e.modifiersData.popperOffsets,
        k = e.rects.reference,
        z = e.rects.popper,
        C = 'function' == typeof m ? m(Object.assign({}, e.rects, { placement: e.placement })) : m,
        M = 'number' == typeof C ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
        T = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        L = { x: 0, y: 0 };
      if (y) {
        if (r) {
          var H,
            S = 'y' === x ? ec : ac,
            B = 'y' === x ? nc : sc,
            N = 'y' === x ? 'height' : 'width',
            A = y[x],
            E = A + h[S],
            j = A - h[B],
            F = g ? -z[N] / 2 : 0,
            O = v === ic ? k[N] : z[N],
            V = v === ic ? -z[N] : -k[N],
            I = e.elements.arrow,
            D = g && I ? Hc(I) : { width: 0, height: 0 },
            _ = e.modifiersData['arrow#persistent']
              ? e.modifiersData['arrow#persistent'].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            P = _[S],
            q = _[B],
            R = Vc(0, k[N], D[N]),
            W = b ? k[N] / 2 - F - R - P - M.mainAxis : O - R - P - M.mainAxis,
            G = b ? -k[N] / 2 + F + R + q + M.mainAxis : V + R + q + M.mainAxis,
            U = e.elements.arrow && Fc(e.elements.arrow),
            Z = U ? ('y' === x ? U.clientTop || 0 : U.clientLeft || 0) : 0,
            Y = null != (H = null == T ? void 0 : T[x]) ? H : 0,
            X = A + G - Y,
            Q = Vc(g ? zc(E, A + W - Y - Z) : E, A, g ? kc(j, X) : j);
          (y[x] = Q), (L[x] = Q - A);
        }
        if (i) {
          var K,
            J = 'x' === x ? ec : ac,
            tt = 'x' === x ? nc : sc,
            et = y[w],
            nt = 'y' === w ? 'height' : 'width',
            st = et + h[J],
            at = et - h[tt],
            rt = -1 !== [ec, ac].indexOf($),
            lt = null != (K = null == T ? void 0 : T[w]) ? K : 0,
            it = rt ? st : et - k[nt] - z[nt] - lt + M.altAxis,
            ot = rt ? et + k[nt] + z[nt] - lt - M.altAxis : at,
            ct =
              g && rt
                ? (function (t, e, n) {
                    var s = Vc(t, e, n);
                    return s > n ? n : s;
                  })(it, et, ot)
                : Vc(g ? it : st, et, g ? ot : at);
          (y[w] = ct), (L[w] = ct - et);
        }
        e.modifiersData[s] = L;
      }
    },
    requiresIfExists: ['offset'],
  };
  function pd(t, e, n) {
    void 0 === n && (n = !1);
    var s,
      a = bc(e),
      r =
        bc(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            n = Cc(e.width) / t.offsetWidth || 1,
            s = Cc(e.height) / t.offsetHeight || 1;
          return 1 !== n || 1 !== s;
        })(e),
      l = Ac(e),
      i = Lc(t, r, n),
      o = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (a || (!a && !n)) &&
        (('body' !== hc(e) || td(l)) &&
          (o =
            (s = e) !== $c(s) && bc(s)
              ? (function (t) {
                  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
                })(s)
              : Kc(s)),
        bc(e) ? (((c = Lc(e, !0)).x += e.clientLeft), (c.y += e.clientTop)) : l && (c.x = Jc(l))),
      { x: i.left + o.scrollLeft - c.x, y: i.top + o.scrollTop - c.y, width: i.width, height: i.height }
    );
  }
  function md(t) {
    var e = new Map(),
      n = new Set(),
      s = [];
    function a(t) {
      n.add(t.name),
        [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
          if (!n.has(t)) {
            var s = e.get(t);
            s && a(s);
          }
        }),
        s.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        n.has(t.name) || a(t);
      }),
      s
    );
  }
  var hd = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function $d() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return !e.some(function (t) {
      return !(t && 'function' == typeof t.getBoundingClientRect);
    });
  }
  function vd(t) {
    void 0 === t && (t = {});
    var e = t,
      n = e.defaultModifiers,
      s = void 0 === n ? [] : n,
      a = e.defaultOptions,
      r = void 0 === a ? hd : a;
    return function (t, e, n) {
      void 0 === n && (n = r);
      var a,
        l,
        i = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, hd, r),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        o = [],
        c = !1,
        d = {
          state: i,
          setOptions: function (n) {
            var a = 'function' == typeof n ? n(i.options) : n;
            u(),
              (i.options = Object.assign({}, r, i.options, a)),
              (i.scrollParents = {
                reference: vc(t) ? nd(t) : t.contextElement ? nd(t.contextElement) : [],
                popper: nd(e),
              });
            var l,
              c,
              f = (function (t) {
                var e = md(t);
                return mc.reduce(function (t, n) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === n;
                    })
                  );
                }, []);
              })(
                ((l = [].concat(s, i.options.modifiers)),
                (c = l.reduce(function (t, e) {
                  var n = t[e.name];
                  return (
                    (t[e.name] = n
                      ? Object.assign({}, n, e, {
                          options: Object.assign({}, n.options, e.options),
                          data: Object.assign({}, n.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (i.orderedModifiers = f.filter(function (t) {
                return t.enabled;
              })),
              i.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  n = t.options,
                  s = void 0 === n ? {} : n,
                  a = t.effect;
                if ('function' == typeof a) {
                  var r = a({ state: i, name: e, instance: d, options: s }),
                    l = function () {};
                  o.push(r || l);
                }
              }),
              d.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = i.elements,
                e = t.reference,
                n = t.popper;
              if ($d(e, n)) {
                (i.rects = { reference: pd(e, Fc(n), 'fixed' === i.options.strategy), popper: Hc(n) }),
                  (i.reset = !1),
                  (i.placement = i.options.placement),
                  i.orderedModifiers.forEach(function (t) {
                    return (i.modifiersData[t.name] = Object.assign({}, t.data));
                  });
                for (var s = 0; s < i.orderedModifiers.length; s++)
                  if (!0 !== i.reset) {
                    var a = i.orderedModifiers[s],
                      r = a.fn,
                      l = a.options,
                      o = void 0 === l ? {} : l,
                      u = a.name;
                    'function' == typeof r && (i = r({ state: i, options: o, name: u, instance: d }) || i);
                  } else (i.reset = !1), (s = -1);
              }
            }
          },
          update:
            ((a = function () {
              return new Promise(function (t) {
                d.forceUpdate(), t(i);
              });
            }),
            function () {
              return (
                l ||
                  (l = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (l = void 0), t(a());
                    });
                  })),
                l
              );
            }),
          destroy: function () {
            u(), (c = !0);
          },
        };
      if (!$d(t, e)) return d;
      function u() {
        o.forEach(function (t) {
          return t();
        }),
          (o = []);
      }
      return (
        d.setOptions(n).then(function (t) {
          !c && n.onFirstUpdate && n.onFirstUpdate(t);
        }),
        d
      );
    };
  }
  var bd = vd({
      defaultModifiers: [
        Uc,
        {
          name: 'popperOffsets',
          enabled: !0,
          phase: 'read',
          fn: function (t) {
            var e = t.state,
              n = t.name;
            e.modifiersData[n] = ld({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: 'absolute',
              placement: e.placement,
            });
          },
          data: {},
        },
        {
          name: 'computeStyles',
          enabled: !0,
          phase: 'beforeWrite',
          fn: function (t) {
            var e = t.state,
              n = t.options,
              s = n.gpuAcceleration,
              a = void 0 === s || s,
              r = n.adaptive,
              l = void 0 === r || r,
              i = n.roundOffsets,
              o = void 0 === i || i,
              c = {
                placement: yc(e.placement),
                variation: qc(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: a,
                isFixed: 'fixed' === e.options.strategy,
              };
            null != e.modifiersData.popperOffsets &&
              (e.styles.popper = Object.assign(
                {},
                e.styles.popper,
                Wc(
                  Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: l,
                    roundOffsets: o,
                  })
                )
              )),
              null != e.modifiersData.arrow &&
                (e.styles.arrow = Object.assign(
                  {},
                  e.styles.arrow,
                  Wc(
                    Object.assign({}, c, {
                      offsets: e.modifiersData.arrow,
                      position: 'absolute',
                      adaptive: !1,
                      roundOffsets: o,
                    })
                  )
                )),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, { 'data-popper-placement': e.placement }));
          },
          data: {},
        },
        wc,
        fd,
        cd,
        gd,
        Pc,
        {
          name: 'hide',
          enabled: !0,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: function (t) {
            var e = t.state,
              n = t.name,
              s = e.rects.reference,
              a = e.rects.popper,
              r = e.modifiersData.preventOverflow,
              l = id(e, { elementContext: 'reference' }),
              i = id(e, { altBoundary: !0 }),
              o = dd(l, s),
              c = dd(i, a, r),
              d = ud(o),
              u = ud(c);
            (e.modifiersData[n] = {
              referenceClippingOffsets: o,
              popperEscapeOffsets: c,
              isReferenceHidden: d,
              hasPopperEscaped: u,
            }),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                'data-popper-reference-hidden': d,
                'data-popper-escaped': u,
              }));
          },
        },
      ],
    }),
    xd = 'tippy-content',
    wd = 'tippy-backdrop',
    yd = 'tippy-arrow',
    kd = 'tippy-svg-arrow',
    zd = { passive: !0, capture: !0 },
    Cd = function () {
      return document.body;
    };
  function Md(t, e, n) {
    if (Array.isArray(t)) {
      var s = t[e];
      return null == s ? (Array.isArray(n) ? n[e] : n) : s;
    }
    return t;
  }
  function Td(t, e) {
    var n = {}.toString.call(t);
    return 0 === n.indexOf('[object') && n.indexOf(e + ']') > -1;
  }
  function Ld(t, e) {
    return 'function' == typeof t ? t.apply(void 0, e) : t;
  }
  function Hd(t, e) {
    return 0 === e
      ? t
      : function (s) {
          clearTimeout(n),
            (n = setTimeout(function () {
              t(s);
            }, e));
        };
    var n;
  }
  function Sd(t) {
    return [].concat(t);
  }
  function Bd(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function Nd(t) {
    return [].slice.call(t);
  }
  function Ad(t) {
    return Object.keys(t).reduce(function (e, n) {
      return void 0 !== t[n] && (e[n] = t[n]), e;
    }, {});
  }
  function Ed(t) {
    return ['Element', 'Fragment'].some(function (e) {
      return Td(t, e);
    });
  }
  function jd(t) {
    return Ed(t)
      ? [t]
      : (function (t) {
          return Td(t, 'NodeList');
        })(t)
      ? Nd(t)
      : Array.isArray(t)
      ? t
      : Nd(document.querySelectorAll(t));
  }
  function Fd(t, e) {
    t.forEach(function (t) {
      t && (t.style.transitionDuration = e + 'ms');
    });
  }
  function Od(t, e) {
    t.forEach(function (t) {
      t && t.setAttribute('data-state', e);
    });
  }
  function Vd(t, e, n) {
    var s = e + 'EventListener';
    ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
      t[s](e, n);
    });
  }
  function Id(t, e) {
    for (var n = e; n; ) {
      var s;
      if (t.contains(n)) return !0;
      n = null == n.getRootNode || null == (s = n.getRootNode()) ? void 0 : s.host;
    }
    return !1;
  }
  var Dd = { isTouch: !1 },
    _d = 0;
  function Pd() {
    Dd.isTouch || ((Dd.isTouch = !0), window.performance && document.addEventListener('mousemove', qd));
  }
  function qd() {
    var t = performance.now();
    t - _d < 20 && ((Dd.isTouch = !1), document.removeEventListener('mousemove', qd)), (_d = t);
  }
  function Rd() {
    var t,
      e = document.activeElement;
    if ((t = e) && t._tippy && t._tippy.reference === t) {
      var n = e._tippy;
      e.blur && !n.state.isVisible && e.blur();
    }
  }
  var Wd = !!('undefined' != typeof window && 'undefined' != typeof document) && !!window.msCrypto,
    Gd = Object.assign(
      {
        appendTo: Cd,
        aria: { content: 'auto', expanded: 'auto' },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: '',
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: 'top',
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: 'mouseenter focus',
        triggerTarget: null,
      },
      { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
      {
        allowHTML: !1,
        animation: 'fade',
        arrow: !0,
        content: '',
        inertia: !1,
        maxWidth: 350,
        role: 'tooltip',
        theme: '',
        zIndex: 9999,
      }
    ),
    Ud = Object.keys(Gd);
  function Zd(t) {
    var e = (t.plugins || []).reduce(function (e, n) {
      var s,
        a = n.name,
        r = n.defaultValue;
      a && (e[a] = void 0 !== t[a] ? t[a] : null != (s = Gd[a]) ? s : r);
      return e;
    }, {});
    return Object.assign({}, t, e);
  }
  function Yd(t, e) {
    var n = Object.assign(
      {},
      e,
      { content: Ld(e.content, [t]) },
      e.ignoreAttributes
        ? {}
        : (function (t, e) {
            return (e ? Object.keys(Zd(Object.assign({}, Gd, { plugins: e }))) : Ud).reduce(function (e, n) {
              var s = (t.getAttribute('data-tippy-' + n) || '').trim();
              if (!s) return e;
              if ('content' === n) e[n] = s;
              else
                try {
                  e[n] = JSON.parse(s);
                } catch (t) {
                  e[n] = s;
                }
              return e;
            }, {});
          })(t, e.plugins)
    );
    return (
      (n.aria = Object.assign({}, Gd.aria, n.aria)),
      (n.aria = {
        expanded: 'auto' === n.aria.expanded ? e.interactive : n.aria.expanded,
        content: 'auto' === n.aria.content ? (e.interactive ? null : 'describedby') : n.aria.content,
      }),
      n
    );
  }
  function Xd(t) {
    var e = t.firstElementChild,
      n = Nd(e.children);
    return {
      box: e,
      content: n.find(function (t) {
        return t.classList.contains(xd);
      }),
      arrow: n.find(function (t) {
        return t.classList.contains(yd) || t.classList.contains(kd);
      }),
      backdrop: n.find(function (t) {
        return t.classList.contains(wd);
      }),
    };
  }
  var Qd = 1,
    Kd = [],
    Jd = [];
  function tu(t, e) {
    var n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d = Yd(t, Object.assign({}, Gd, Zd(Ad(e)))),
      u = !1,
      f = !1,
      g = !1,
      p = !1,
      m = [],
      h = Hd(U, d.interactiveDebounce),
      $ = Qd++,
      v = (c = d.plugins).filter(function (t, e) {
        return c.indexOf(t) === e;
      }),
      b = {
        id: $,
        reference: t,
        popper: document.createElement('div'),
        popperInstance: null,
        props: d,
        state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
        plugins: v,
        clearDelayTimeouts: function () {
          clearTimeout(n), clearTimeout(s), cancelAnimationFrame(a);
        },
        setProps: function (e) {
          if (b.state.isDestroyed) return;
          A('onBeforeUpdate', [b, e]), W();
          var n = b.props,
            s = Yd(t, Object.assign({}, n, Ad(e), { ignoreAttributes: !0 }));
          (b.props = s),
            R(),
            n.interactiveDebounce !== s.interactiveDebounce && (F(), (h = Hd(U, s.interactiveDebounce)));
          n.triggerTarget && !s.triggerTarget
            ? Sd(n.triggerTarget).forEach(function (t) {
                t.removeAttribute('aria-expanded');
              })
            : s.triggerTarget && t.removeAttribute('aria-expanded');
          j(), N(), y && y(n, s);
          b.popperInstance &&
            (Q(),
            J().forEach(function (t) {
              requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
            }));
          A('onAfterUpdate', [b, e]);
        },
        setContent: function (t) {
          b.setProps({ content: t });
        },
        show: function () {
          var t = b.state.isVisible,
            e = b.state.isDestroyed,
            n = !b.state.isEnabled,
            s = Dd.isTouch && !b.props.touch,
            a = Md(b.props.duration, 0, Gd.duration);
          if (t || e || n || s) return;
          if (L().hasAttribute('disabled')) return;
          if ((A('onShow', [b], !1), !1 === b.props.onShow(b))) return;
          (b.state.isVisible = !0), T() && (w.style.visibility = 'visible');
          N(), D(), b.state.isMounted || (w.style.transition = 'none');
          if (T()) {
            var r = S();
            Fd([r.box, r.content], 0);
          }
          (i = function () {
            var t;
            if (b.state.isVisible && !p) {
              if (((p = !0), w.offsetHeight, (w.style.transition = b.props.moveTransition), T() && b.props.animation)) {
                var e = S(),
                  n = e.box,
                  s = e.content;
                Fd([n, s], a), Od([n, s], 'visible');
              }
              E(),
                j(),
                Bd(Jd, b),
                null == (t = b.popperInstance) || t.forceUpdate(),
                A('onMount', [b]),
                b.props.animation &&
                  T() &&
                  (function (t, e) {
                    P(t, e);
                  })(a, function () {
                    (b.state.isShown = !0), A('onShown', [b]);
                  });
            }
          }),
            (function () {
              var t,
                e = b.props.appendTo,
                n = L();
              t = (b.props.interactive && e === Cd) || 'parent' === e ? n.parentNode : Ld(e, [n]);
              t.contains(w) || t.appendChild(w);
              (b.state.isMounted = !0), Q();
            })();
        },
        hide: function () {
          var t = !b.state.isVisible,
            e = b.state.isDestroyed,
            n = !b.state.isEnabled,
            s = Md(b.props.duration, 1, Gd.duration);
          if (t || e || n) return;
          if ((A('onHide', [b], !1), !1 === b.props.onHide(b))) return;
          (b.state.isVisible = !1), (b.state.isShown = !1), (p = !1), (u = !1), T() && (w.style.visibility = 'hidden');
          if ((F(), _(), N(!0), T())) {
            var a = S(),
              r = a.box,
              l = a.content;
            b.props.animation && (Fd([r, l], s), Od([r, l], 'hidden'));
          }
          E(),
            j(),
            b.props.animation
              ? T() &&
                (function (t, e) {
                  P(t, function () {
                    !b.state.isVisible && w.parentNode && w.parentNode.contains(w) && e();
                  });
                })(s, b.unmount)
              : b.unmount();
        },
        hideWithInteractivity: function (t) {
          H().addEventListener('mousemove', h), Bd(Kd, h), h(t);
        },
        enable: function () {
          b.state.isEnabled = !0;
        },
        disable: function () {
          b.hide(), (b.state.isEnabled = !1);
        },
        unmount: function () {
          b.state.isVisible && b.hide();
          if (!b.state.isMounted) return;
          K(),
            J().forEach(function (t) {
              t._tippy.unmount();
            }),
            w.parentNode && w.parentNode.removeChild(w);
          (Jd = Jd.filter(function (t) {
            return t !== b;
          })),
            (b.state.isMounted = !1),
            A('onHidden', [b]);
        },
        destroy: function () {
          if (b.state.isDestroyed) return;
          b.clearDelayTimeouts(), b.unmount(), W(), delete t._tippy, (b.state.isDestroyed = !0), A('onDestroy', [b]);
        },
      };
    if (!d.render) return b;
    var x = d.render(b),
      w = x.popper,
      y = x.onUpdate;
    w.setAttribute('data-tippy-root', ''), (w.id = 'tippy-' + b.id), (b.popper = w), (t._tippy = b), (w._tippy = b);
    var k = v.map(function (t) {
        return t.fn(b);
      }),
      z = t.hasAttribute('aria-expanded');
    return (
      R(),
      j(),
      N(),
      A('onCreate', [b]),
      d.showOnCreate && tt(),
      w.addEventListener('mouseenter', function () {
        b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
      }),
      w.addEventListener('mouseleave', function () {
        b.props.interactive && b.props.trigger.indexOf('mouseenter') >= 0 && H().addEventListener('mousemove', h);
      }),
      b
    );
    function C() {
      var t = b.props.touch;
      return Array.isArray(t) ? t : [t, 0];
    }
    function M() {
      return 'hold' === C()[0];
    }
    function T() {
      var t;
      return !(null == (t = b.props.render) || !t.$$tippy);
    }
    function L() {
      return o || t;
    }
    function H() {
      var t = L().parentNode;
      return t
        ? (function (t) {
            var e,
              n = Sd(t)[0];
            return null != n && null != (e = n.ownerDocument) && e.body ? n.ownerDocument : document;
          })(t)
        : document;
    }
    function S() {
      return Xd(w);
    }
    function B(t) {
      return (b.state.isMounted && !b.state.isVisible) || Dd.isTouch || (r && 'focus' === r.type)
        ? 0
        : Md(b.props.delay, t ? 0 : 1, Gd.delay);
    }
    function N(t) {
      void 0 === t && (t = !1),
        (w.style.pointerEvents = b.props.interactive && !t ? '' : 'none'),
        (w.style.zIndex = '' + b.props.zIndex);
    }
    function A(t, e, n) {
      var s;
      (void 0 === n && (n = !0),
      k.forEach(function (n) {
        n[t] && n[t].apply(n, e);
      }),
      n) && (s = b.props)[t].apply(s, e);
    }
    function E() {
      var e = b.props.aria;
      if (e.content) {
        var n = 'aria-' + e.content,
          s = w.id;
        Sd(b.props.triggerTarget || t).forEach(function (t) {
          var e = t.getAttribute(n);
          if (b.state.isVisible) t.setAttribute(n, e ? e + ' ' + s : s);
          else {
            var a = e && e.replace(s, '').trim();
            a ? t.setAttribute(n, a) : t.removeAttribute(n);
          }
        });
      }
    }
    function j() {
      !z &&
        b.props.aria.expanded &&
        Sd(b.props.triggerTarget || t).forEach(function (t) {
          b.props.interactive
            ? t.setAttribute('aria-expanded', b.state.isVisible && t === L() ? 'true' : 'false')
            : t.removeAttribute('aria-expanded');
        });
    }
    function F() {
      H().removeEventListener('mousemove', h),
        (Kd = Kd.filter(function (t) {
          return t !== h;
        }));
    }
    function O(e) {
      if (!Dd.isTouch || (!g && 'mousedown' !== e.type)) {
        var n = (e.composedPath && e.composedPath()[0]) || e.target;
        if (!b.props.interactive || !Id(w, n)) {
          if (
            Sd(b.props.triggerTarget || t).some(function (t) {
              return Id(t, n);
            })
          ) {
            if (Dd.isTouch) return;
            if (b.state.isVisible && b.props.trigger.indexOf('click') >= 0) return;
          } else A('onClickOutside', [b, e]);
          !0 === b.props.hideOnClick &&
            (b.clearDelayTimeouts(),
            b.hide(),
            (f = !0),
            setTimeout(function () {
              f = !1;
            }),
            b.state.isMounted || _());
        }
      }
    }
    function V() {
      g = !0;
    }
    function I() {
      g = !1;
    }
    function D() {
      var t = H();
      t.addEventListener('mousedown', O, !0),
        t.addEventListener('touchend', O, zd),
        t.addEventListener('touchstart', I, zd),
        t.addEventListener('touchmove', V, zd);
    }
    function _() {
      var t = H();
      t.removeEventListener('mousedown', O, !0),
        t.removeEventListener('touchend', O, zd),
        t.removeEventListener('touchstart', I, zd),
        t.removeEventListener('touchmove', V, zd);
    }
    function P(t, e) {
      var n = S().box;
      function s(t) {
        t.target === n && (Vd(n, 'remove', s), e());
      }
      if (0 === t) return e();
      Vd(n, 'remove', l), Vd(n, 'add', s), (l = s);
    }
    function q(e, n, s) {
      void 0 === s && (s = !1),
        Sd(b.props.triggerTarget || t).forEach(function (t) {
          t.addEventListener(e, n, s), m.push({ node: t, eventType: e, handler: n, options: s });
        });
    }
    function R() {
      var t;
      M() && (q('touchstart', G, { passive: !0 }), q('touchend', Z, { passive: !0 })),
        ((t = b.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(function (t) {
          if ('manual' !== t)
            switch ((q(t, G), t)) {
              case 'mouseenter':
                q('mouseleave', Z);
                break;
              case 'focus':
                q(Wd ? 'focusout' : 'blur', Y);
                break;
              case 'focusin':
                q('focusout', Y);
            }
        });
    }
    function W() {
      m.forEach(function (t) {
        var e = t.node,
          n = t.eventType,
          s = t.handler,
          a = t.options;
        e.removeEventListener(n, s, a);
      }),
        (m = []);
    }
    function G(t) {
      var e,
        n = !1;
      if (b.state.isEnabled && !X(t) && !f) {
        var s = 'focus' === (null == (e = r) ? void 0 : e.type);
        (r = t),
          (o = t.currentTarget),
          j(),
          !b.state.isVisible &&
            Td(t, 'MouseEvent') &&
            Kd.forEach(function (e) {
              return e(t);
            }),
          'click' === t.type &&
          (b.props.trigger.indexOf('mouseenter') < 0 || u) &&
          !1 !== b.props.hideOnClick &&
          b.state.isVisible
            ? (n = !0)
            : tt(t),
          'click' === t.type && (u = !n),
          n && !s && et(t);
      }
    }
    function U(t) {
      var e = t.target,
        n = L().contains(e) || w.contains(e);
      if ('mousemove' !== t.type || !n) {
        var s = J()
          .concat(w)
          .map(function (t) {
            var e,
              n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
            return n ? { popperRect: t.getBoundingClientRect(), popperState: n, props: d } : null;
          })
          .filter(Boolean);
        (function (t, e) {
          var n = e.clientX,
            s = e.clientY;
          return t.every(function (t) {
            var e = t.popperRect,
              a = t.popperState,
              r = t.props.interactiveBorder,
              l = a.placement.split('-')[0],
              i = a.modifiersData.offset;
            if (!i) return !0;
            var o = 'bottom' === l ? i.top.y : 0,
              c = 'top' === l ? i.bottom.y : 0,
              d = 'right' === l ? i.left.x : 0,
              u = 'left' === l ? i.right.x : 0,
              f = e.top - s + o > r,
              g = s - e.bottom - c > r,
              p = e.left - n + d > r,
              m = n - e.right - u > r;
            return f || g || p || m;
          });
        })(s, t) && (F(), et(t));
      }
    }
    function Z(t) {
      X(t) ||
        (b.props.trigger.indexOf('click') >= 0 && u) ||
        (b.props.interactive ? b.hideWithInteractivity(t) : et(t));
    }
    function Y(t) {
      (b.props.trigger.indexOf('focusin') < 0 && t.target !== L()) ||
        (b.props.interactive && t.relatedTarget && w.contains(t.relatedTarget)) ||
        et(t);
    }
    function X(t) {
      return !!Dd.isTouch && M() !== t.type.indexOf('touch') >= 0;
    }
    function Q() {
      K();
      var e = b.props,
        n = e.popperOptions,
        s = e.placement,
        a = e.offset,
        r = e.getReferenceClientRect,
        l = e.moveTransition,
        o = T() ? Xd(w).arrow : null,
        c = r ? { getBoundingClientRect: r, contextElement: r.contextElement || L() } : t,
        d = {
          name: '$$tippy',
          enabled: !0,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: function (t) {
            var e = t.state;
            if (T()) {
              var n = S().box;
              ['placement', 'reference-hidden', 'escaped'].forEach(function (t) {
                'placement' === t
                  ? n.setAttribute('data-placement', e.placement)
                  : e.attributes.popper['data-popper-' + t]
                  ? n.setAttribute('data-' + t, '')
                  : n.removeAttribute('data-' + t);
              }),
                (e.attributes.popper = {});
            }
          },
        },
        u = [
          { name: 'offset', options: { offset: a } },
          { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
          { name: 'flip', options: { padding: 5 } },
          { name: 'computeStyles', options: { adaptive: !l } },
          d,
        ];
      T() && o && u.push({ name: 'arrow', options: { element: o, padding: 3 } }),
        u.push.apply(u, (null == n ? void 0 : n.modifiers) || []),
        (b.popperInstance = bd(c, w, Object.assign({}, n, { placement: s, onFirstUpdate: i, modifiers: u })));
    }
    function K() {
      b.popperInstance && (b.popperInstance.destroy(), (b.popperInstance = null));
    }
    function J() {
      return Nd(w.querySelectorAll('[data-tippy-root]'));
    }
    function tt(t) {
      b.clearDelayTimeouts(), t && A('onTrigger', [b, t]), D();
      var e = B(!0),
        s = C(),
        a = s[0],
        r = s[1];
      Dd.isTouch && 'hold' === a && r && (e = r),
        e
          ? (n = setTimeout(function () {
              b.show();
            }, e))
          : b.show();
    }
    function et(t) {
      if ((b.clearDelayTimeouts(), A('onUntrigger', [b, t]), b.state.isVisible)) {
        if (
          !(
            b.props.trigger.indexOf('mouseenter') >= 0 &&
            b.props.trigger.indexOf('click') >= 0 &&
            ['mouseleave', 'mousemove'].indexOf(t.type) >= 0 &&
            u
          )
        ) {
          var e = B(!1);
          e
            ? (s = setTimeout(function () {
                b.state.isVisible && b.hide();
              }, e))
            : (a = requestAnimationFrame(function () {
                b.hide();
              }));
        }
      } else _();
    }
  }
  function eu(t, e) {
    void 0 === e && (e = {});
    var n = Gd.plugins.concat(e.plugins || []);
    document.addEventListener('touchstart', Pd, zd), window.addEventListener('blur', Rd);
    var s = Object.assign({}, e, { plugins: n }),
      a = jd(t).reduce(function (t, e) {
        var n = e && tu(e, s);
        return n && t.push(n), t;
      }, []);
    return Ed(t) ? a[0] : a;
  }
  (eu.defaultProps = Gd),
    (eu.setDefaultProps = function (t) {
      Object.keys(t).forEach(function (e) {
        Gd[e] = t[e];
      });
    }),
    (eu.currentInput = Dd),
    Object.assign({}, wc, {
      effect: function (t) {
        var e = t.state,
          n = {
            popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' },
            arrow: { position: 'absolute' },
            reference: {},
          };
        Object.assign(e.elements.popper.style, n.popper),
          (e.styles = n),
          e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
      },
    }),
    eu.setDefaultProps({ animation: !1 });
  const nu = Mt({});
  function su(e) {
    let n;
    return {
      c() {
        n = M(e[1]);
      },
      m(t, e) {
        w(t, n, e);
      },
      p(t, e) {
        2 & e && E(n, t[1]);
      },
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function au(e) {
    let n, s;
    return {
      c() {
        (n = new D(!1)), (s = L()), (n.a = s);
      },
      m(t, a) {
        n.m(e[1], t, a), w(t, s, a);
      },
      p(t, e) {
        2 & e && n.p(t[1]);
      },
      i: t,
      o: t,
      d(t) {
        t && y(s), t && n.d();
      },
    };
  }
  function ru(t) {
    let n, s, a;
    const r = [t[2]];
    var l = t[4];
    function i(t) {
      let n = {};
      for (let t = 0; t < r.length; t += 1) n = e(n, r[t]);
      return { props: n };
    }
    return (
      l && (n = _(l, i())),
      {
        c() {
          n && bt(n.$$.fragment), (s = L());
        },
        m(t, e) {
          n && xt(n, t, e), w(t, s, e), (a = !0);
        },
        p(t, e) {
          const a = 4 & e ? ht(r, [$t(t[2])]) : {};
          if (16 & e && l !== (l = t[4])) {
            if (n) {
              ft();
              const t = n;
              mt(t.$$.fragment, 1, 0, () => {
                wt(t, 1);
              }),
                gt();
            }
            l ? ((n = _(l, i())), bt(n.$$.fragment), pt(n.$$.fragment, 1), xt(n, s.parentNode, s)) : (n = null);
          } else l && n.$set(a);
        },
        i(t) {
          a || (n && pt(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          n && mt(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && y(s), n && wt(n, t);
        },
      }
    );
  }
  function lu(t) {
    let e, n, s, a;
    const r = [ru, au, su],
      l = [];
    function i(t, e) {
      return t[5] ? (t[0] ? 1 : 2) : 0;
    }
    return (
      (n = i(t)),
      (s = l[n] = r[n](t)),
      {
        c() {
          (e = z('div')), s.c(), I(e, 'tooltip-textonly', t[5]);
        },
        m(s, r) {
          w(s, e, r), l[n].m(e, null), t[8](e), (a = !0);
        },
        p(t, [o]) {
          let c = n;
          (n = i(t)),
            n === c
              ? l[n].p(t, o)
              : (ft(),
                mt(l[c], 1, 1, () => {
                  l[c] = null;
                }),
                gt(),
                (s = l[n]),
                s ? s.p(t, o) : ((s = l[n] = r[n](t)), s.c()),
                pt(s, 1),
                s.m(e, null)),
            (!a || 32 & o) && I(e, 'tooltip-textonly', t[5]);
        },
        i(t) {
          a || (pt(s), (a = !0));
        },
        o(t) {
          mt(s), (a = !1);
        },
        d(s) {
          s && y(e), l[n].d(), t[8](null);
        },
      }
    );
  }
  function iu(t, e, n) {
    let s, a, r;
    u(t, nu, (t) => n(10, (r = t)));
    let l,
      { allowHTML: i = !1 } = e,
      { anchorNode: o } = e,
      { content: c } = e,
      { props: d = {} } = e,
      { tippyOptions: f = {} } = e,
      g = null;
    return (
      R(() => {
        if (
          ((g = (function (t, e, n = {}) {
            return eu(
              t,
              Object.assign(
                {
                  render() {
                    const t = document.createElement('div'),
                      n = document.createElement('div');
                    return (
                      (t.className = 'tooltip-container'),
                      (n.className = 'tooltip-arrow'),
                      n.setAttribute('data-popper-arrow', ''),
                      t.appendChild(e),
                      t.appendChild(n),
                      { popper: t }
                    );
                  },
                  zIndex: 9999999,
                },
                n
              )
            );
          })(o, l, f)),
          o.hasAttribute('id'))
        ) {
          const t = o.getAttribute('id');
          v(nu, (r[t] = g), r);
        }
      }),
      W(() => {
        g.setProps(f);
      }),
      G(() => {
        if ((g.destroy(), o.hasAttribute('id'))) {
          const t = o.getAttribute('id');
          delete r[t];
        }
      }),
      (t.$$set = (t) => {
        'allowHTML' in t && n(0, (i = t.allowHTML)),
          'anchorNode' in t && n(6, (o = t.anchorNode)),
          'content' in t && n(1, (c = t.content)),
          'props' in t && n(2, (d = t.props)),
          'tippyOptions' in t && n(7, (f = t.tippyOptions));
      }),
      (t.$$.update = () => {
        2 & t.$$.dirty && n(5, (s = 'string' == typeof c || c instanceof String)), 2 & t.$$.dirty && n(4, (a = c));
      }),
      [
        i,
        c,
        d,
        l,
        a,
        s,
        o,
        f,
        function (t) {
          K[t ? 'unshift' : 'push'](() => {
            (l = t), n(3, l);
          });
        },
      ]
    );
  }
  let ou = class extends kt {
    constructor(t) {
      super(), yt(this, t, iu, lu, l, { allowHTML: 0, anchorNode: 6, content: 1, props: 2, tippyOptions: 7 });
    }
  };
  function cu(t, e) {
    const n = document.createElement('div'),
      s = new ou({ props: Object.assign({ anchorNode: t }, e), target: n });
    return {
      destroy() {
        s.$destroy();
      },
      update(t) {
        s.$set(t);
      },
    };
  }
  function du(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f, g, p, m, h, $, v, b, x, k, C, M, L;
    return (
      (r = new Xt({ props: { language: 'js', $$slots: { default: [fu] }, $$scope: { ctx: t } } })),
      (g = new Xt({ props: { language: 'html', $$slots: { default: [gu] }, $$scope: { ctx: t } } })),
      (b = new Xt({ props: { language: 'html', $$slots: { default: [pu] }, $$scope: { ctx: t } } })),
      (M = new Xt({ props: { language: 'html', $$slots: { default: [mu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h2')),
            (e.textContent = 'Tooltip as a function'),
            (n = T()),
            (s = z('code')),
            (s.innerHTML =
              '<div class="padding-xl--l padding-m--tb"><div>@param anchorNode HTMLElement - required</div> \n      <div>@param tooltipNode HTMLElement - required</div> \n      <div>@param tippyOptions TTippyCustomOptions - optional</div> \n      <div>@returns A tooltip instance</div></div>'),
            (a = T()),
            bt(r.$$.fragment),
            (l = T()),
            (i = z('p')),
            (i.textContent =
              'To make easier use of tooltips on ekstrabladet.dk it is globally avaible through the data-tooltip attributes'),
            (o = T()),
            (c = z('div')),
            (c.innerHTML =
              '<div><b>data-tooltip</b>  <em>required</em> String or id selector(#selector) for element to show in tooltip</div> \n    <div><b>data-tooltip-callback</b> global function to call as callback</div> \n    <div><b>data-tooltip-interactive</b> boolean deciding if the user can interact with the tooltip</div> \n    <div><b>data-tooltip-placement</b> auto | top | right | bottom | left - where should the tooltip pop from, defaults to auto</div> \n    <div><b>data-tooltip-trigger</b> which user action should trigger the popup, defaults to mouseenter</div>'),
            (d = T()),
            (u = z('h3')),
            (u.textContent = 'Simple tooltip'),
            (f = T()),
            bt(g.$$.fragment),
            (p = T()),
            (m = z('h3')),
            (m.textContent = 'HTML tooltip'),
            (h = T()),
            ($ = z('p')),
            ($.textContent = 'Content should be HTML Entity encoded if possible'),
            (v = T()),
            bt(b.$$.fragment),
            (x = T()),
            (k = z('h3')),
            (k.textContent = 'Custom tooltip'),
            (C = T()),
            bt(M.$$.fragment),
            B(e, 'class', 'color--eb');
        },
        m(t, y) {
          w(t, e, y),
            w(t, n, y),
            w(t, s, y),
            w(t, a, y),
            xt(r, t, y),
            w(t, l, y),
            w(t, i, y),
            w(t, o, y),
            w(t, c, y),
            w(t, d, y),
            w(t, u, y),
            w(t, f, y),
            xt(g, t, y),
            w(t, p, y),
            w(t, m, y),
            w(t, h, y),
            w(t, $, y),
            w(t, v, y),
            xt(b, t, y),
            w(t, x, y),
            w(t, k, y),
            w(t, C, y),
            xt(M, t, y),
            (L = !0);
        },
        p(t, e) {
          const n = {};
          8 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
          const s = {};
          8 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const a = {};
          8 & e && (a.$$scope = { dirty: e, ctx: t }), b.$set(a);
          const l = {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), M.$set(l);
        },
        i(t) {
          L || (pt(r.$$.fragment, t), pt(g.$$.fragment, t), pt(b.$$.fragment, t), pt(M.$$.fragment, t), (L = !0));
        },
        o(t) {
          mt(r.$$.fragment, t), mt(g.$$.fragment, t), mt(b.$$.fragment, t), mt(M.$$.fragment, t), (L = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            wt(r, t),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            wt(g, t),
            t && y(p),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            wt(b, t),
            t && y(x),
            t && y(k),
            t && y(C),
            wt(M, t);
        },
      }
    );
  }
  function uu(t) {
    let e, n, s, r, l, i, o, c, d, u, f, g, p, m, h, $, v, k, C, M, L, S, N, A, E, j, O, V, I, D, _, P, q, R, W, G, U;
    return (
      (l = new Xt({ props: { language: 'js', $$slots: { default: [hu] }, $$scope: { ctx: t } } })),
      (p = new Xt({ props: { language: 'html', $$slots: { default: [$u] }, $$scope: { ctx: t } } })),
      (M = new Xt({ props: { language: 'html', $$slots: { default: [vu] }, $$scope: { ctx: t } } })),
      (j = new te({ props: { className: 'tooltip-toggle', name: 'question-circle', width: '18' } })),
      (P = new Xt({ props: { language: 'js', $$slots: { default: [bu] }, $$scope: { ctx: t } } })),
      (R = new Xt({ props: { language: 'html', $$slots: { default: [xu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h2')),
            (e.textContent = 'Tooltip as an action (svelte)'),
            (n = T()),
            (s = z('p')),
            (s.innerHTML =
              'More about actions\n    <a href="https://svelte.dev/docs#template-syntax-element-directives-use-action" target="_blank" rel="noreferrer">svelte action</a>'),
            (r = T()),
            bt(l.$$.fragment),
            (i = T()),
            (o = z('table')),
            (o.innerHTML =
              '<thead><tr><th>Option</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>content</td> \n        <td>string / SvelteComponent</td> \n        <td></td> \n        <td>Input text, HTML or SvelteComponent</td></tr> \n      <tr><td>allowHTML</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Optional: Parse content as HTML <a href="https://svelte.dev/tutorial/html-tags" target="_blank" rel="noreferrer">(see Svelte-docs)</a></td></tr> \n      <tr><td>props</td> \n        <td>Object</td> \n        <td>empty</td> \n        <td>Optional: Object of props to pass if using SvelteComponent</td></tr> \n      <tr><td>tippyOptions</td> \n        <td>Object</td> \n        <td>empty</td> \n        <td>Optional: Tippy options <a href="https://atomiks.github.io/tippyjs/v6/all-props/" target="_blank" rel="noreferrer">(see reference)</a><br/>Props marked with\n          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIGZpbGw9IiNEQUU2RkYiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iIzc3NjFEMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik03LjgwMTkxIDcuMkgxMy42ODE5QzE0LjY2MTkgNy4yIDE1LjM3MTIgNy40MjQgMTUuODA5OSA3Ljg3MkMxNi4yNTc5IDguMzEwNjcgMTYuNDgxOSA5LjAyIDE2LjQ4MTkgMTBWMTEuMjZDMTYuNDgxOSAxMi4wMzQ3IDE2LjM1MTIgMTIuNjM2NyAxNi4wODk5IDEzLjA2NkMxNS44Mzc5IDEzLjQ5NTMgMTUuNDMxOSAxMy43OCAxNC44NzE5IDEzLjkyTDE2LjYyMTkgMTdIMTMuODkxOUwxMi4yODE5IDE0LjA2SDEwLjMyMTlWMTdINy44MDE5MVY3LjJaTTEzLjk2MTkgMTBDMTMuOTYxOSA5LjQ0IDEzLjY4MTkgOS4xNiAxMy4xMjE5IDkuMTZIMTAuMzIxOVYxMi4xSDEzLjEyMTlDMTMuNjgxOSAxMi4xIDEzLjk2MTkgMTEuODIgMTMuOTYxOSAxMS4yNlYxMFoiIGZpbGw9IiM3NzYxRDEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEyIiB5MT0iMCIgeDI9IjEyIiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VGREVGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" alt="(R)"/> not supported</td></tr></tbody>'),
            (c = T()),
            (d = z('h3')),
            (d.textContent = 'Simple tooltip'),
            (u = T()),
            (f = z('p')),
            (f.textContent = 'Hover me'),
            (g = T()),
            bt(p.$$.fragment),
            (m = T()),
            (h = z('h3')),
            (h.textContent = 'Advanced tooltip'),
            ($ = T()),
            (v = z('div')),
            (k = z('p')),
            (k.textContent = 'Click me'),
            (C = T()),
            bt(M.$$.fragment),
            (L = T()),
            (S = z('h3')),
            (S.textContent = 'Programmatic access'),
            (N = T()),
            (A = z('div')),
            (E = z('div')),
            bt(j.$$.fragment),
            (O = T()),
            (V = z('br')),
            (I = T()),
            (D = z('button')),
            (D.textContent = 'Show tooltip'),
            (_ = T()),
            bt(P.$$.fragment),
            (q = T()),
            bt(R.$$.fragment),
            B(e, 'class', 'color--eb'),
            B(o, 'class', 'table'),
            F(f, 'display', 'inline-block'),
            B(f, 'class', 'margin-none'),
            F(k, 'display', 'inline-block'),
            F(k, 'cursor', 'pointer'),
            B(k, 'class', 'margin-none'),
            B(E, 'id', 'test-anchor'),
            F(E, 'display', 'inline-block'),
            B(D, 'class', 'button'),
            B(A, 'class', 'flex flex-justify--between');
        },
        m(a, y) {
          w(a, e, y),
            w(a, n, y),
            w(a, s, y),
            w(a, r, y),
            xt(l, a, y),
            w(a, i, y),
            w(a, o, y),
            w(a, c, y),
            w(a, d, y),
            w(a, u, y),
            w(a, f, y),
            w(a, g, y),
            xt(p, a, y),
            w(a, m, y),
            w(a, h, y),
            w(a, $, y),
            w(a, v, y),
            x(v, k),
            w(a, C, y),
            xt(M, a, y),
            w(a, L, y),
            w(a, S, y),
            w(a, N, y),
            w(a, A, y),
            x(A, E),
            xt(j, E, null),
            x(A, O),
            x(A, V),
            x(A, I),
            x(A, D),
            w(a, _, y),
            xt(P, a, y),
            w(a, q, y),
            xt(R, a, y),
            (W = !0),
            G ||
              ((U = [
                b(cu.call(null, f, { content: 'Text, HTML or SvelteComponent' })),
                b(
                  cu.call(null, k, {
                    content: Bn,
                    props: { isLoading: !0 },
                    tippyOptions: { interactive: !0, placement: 'bottom', trigger: 'click' },
                  })
                ),
                b(cu.call(null, E, { content: 'String or SvelteTemplate' })),
                H(D, 'click', t[2]),
              ]),
              (G = !0));
        },
        p(t, e) {
          const n = {};
          8 & e && (n.$$scope = { dirty: e, ctx: t }), l.$set(n);
          const s = {};
          8 & e && (s.$$scope = { dirty: e, ctx: t }), p.$set(s);
          const a = {};
          8 & e && (a.$$scope = { dirty: e, ctx: t }), M.$set(a);
          const r = {};
          8 & e && (r.$$scope = { dirty: e, ctx: t }), P.$set(r);
          const i = {};
          8 & e && (i.$$scope = { dirty: e, ctx: t }), R.$set(i);
        },
        i(t) {
          W ||
            (pt(l.$$.fragment, t),
            pt(p.$$.fragment, t),
            pt(M.$$.fragment, t),
            pt(j.$$.fragment, t),
            pt(P.$$.fragment, t),
            pt(R.$$.fragment, t),
            (W = !0));
        },
        o(t) {
          mt(l.$$.fragment, t),
            mt(p.$$.fragment, t),
            mt(M.$$.fragment, t),
            mt(j.$$.fragment, t),
            mt(P.$$.fragment, t),
            mt(R.$$.fragment, t),
            (W = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(r),
            wt(l, t),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            t && y(u),
            t && y(f),
            t && y(g),
            wt(p, t),
            t && y(m),
            t && y(h),
            t && y($),
            t && y(v),
            t && y(C),
            wt(M, t),
            t && y(L),
            t && y(S),
            t && y(N),
            t && y(A),
            wt(j),
            t && y(_),
            wt(P, t),
            t && y(q),
            wt(R, t),
            (G = !1),
            a(U);
        },
      }
    );
  }
  function fu(e) {
    let n;
    return {
      c() {
        n = M("import { tooltipRender } from '@ekstra-bladet/designsystem/svelte/functions/tooltipAction';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function gu(e) {
    let n;
    return {
      c() {
        n = M('<div data-tooltip="Simple text tooltip">Hover</div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function pu(e) {
    let n;
    return {
      c() {
        n = M('<div data-tooltip="Simple text<br>tooltip" data-tooltip-allowhtml="true">Hover</div>');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function mu(e) {
    let n;
    return {
      c() {
        n = M(
          '<div\n  data-tooltip="#testid"\n  data-tooltip-interactive="true"\n  data-tooltip-placement="bottom"\n  data-tooltip-trigger="click">\n    Click\n</div>\n\n<div id="testid" class="hidden">\n  <p>Custom input</p>\n  <button>Test</button>\n</div>\n    '
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function hu(e) {
    let n;
    return {
      c() {
        n = M("import { tooltipAction } from '@ekstra-bladet/designsystem/svelte/functions/tooltipAction';");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function $u(e) {
    let n;
    return {
      c() {
        n = M("<p use:tooltipAction={{ content: 'Text, HTML or SvelteComponent' }}>Hover me</p>");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function vu(e) {
    let n;
    return {
      c() {
        n = M(
          "<p use:tooltip={{\n      content: Spinner,\n      props: { isLoading: true },\n      tippyOptions: { interactive: true, placement: 'bottom', trigger: 'click' },\n    }}>\n    Click me\n</p>"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function bu(e) {
    let n;
    return {
      c() {
        n = M(
          "import { tooltipAction, tooltipStore } from '@ekstra-bladet/designsystem/svelte/functions/tooltipAction';"
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function xu(e) {
    let n;
    return {
      c() {
        n = M(
          '<div id="uniqueid" use:tooltipAction={{ content: \'Test String\' }}>\n    <Icon className="tooltip-toggle" name="question-circle" width="18" />\n</div>\n\n<button class="button" on:click={(e) => {$tooltipStore[\'uniqueid\'].show();}}>Show tooltip</button>'
        );
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function wu(t) {
    let e, n, s, a, r, l, i, o;
    const c = [uu, du],
      d = [];
    function u(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (r = u(t)),
      (l = d[r] = c[r](t)),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Tooltip'),
            (n = T()),
            (s = z('p')),
            (s.innerHTML =
              'Tooltips is a wrapper used to create tooltips with third party library\n  <a href="https://atomiks.github.io/tippyjs/">tippy.js</a>'),
            (a = T()),
            l.c(),
            (i = L()),
            B(e, 'class', 'color--eb');
        },
        m(t, l) {
          w(t, e, l), w(t, n, l), w(t, s, l), w(t, a, l), d[r].m(t, l), w(t, i, l), (o = !0);
        },
        p(t, [e]) {
          let n = r;
          (r = u(t)),
            r === n
              ? d[r].p(t, e)
              : (ft(),
                mt(d[n], 1, 1, () => {
                  d[n] = null;
                }),
                gt(),
                (l = d[r]),
                l ? l.p(t, e) : ((l = d[r] = c[r](t)), l.c()),
                pt(l, 1),
                l.m(i.parentNode, i));
        },
        i(t) {
          o || (pt(l), (o = !0));
        },
        o(t) {
          mt(l), (o = !1);
        },
        d(t) {
          t && y(e), t && y(n), t && y(s), t && y(a), d[r].d(t), t && y(i);
        },
      }
    );
  }
  function yu(t, e, n) {
    let s, a;
    u(t, Yn, (t) => n(0, (s = t))), u(t, nu, (t) => n(1, (a = t)));
    return [
      s,
      a,
      () => {
        a['test-anchor'].show();
      },
    ];
  }
  const ku = {
    href: '/exportedfunctions',
    routes: [
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Wo, Ro, l, {});
          }
        },
        href: '/exportedfunctions/horizontalscrollhandler',
        title: 'HorizontalScrollHandler',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, Zo, Uo, l, {});
          }
        },
        href: '/exportedfunctions/splitnfittitle',
        title: 'SplitNfitTitle',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Xo, l, {});
          }
        },
        href: '/exportedfunctions/splittitle',
        title: 'SplitTitle',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Ko, l, {});
          }
        },
        href: '/exportedfunctions/throttle',
        title: 'Throttle',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, tc, l, {});
          }
        },
        href: '/exportedfunctions/timepassedsince',
        title: 'TimePassedSince',
      },
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, yu, wu, l, {});
          }
        },
        href: '/exportedfunctions/tooltip',
        title: 'Tooltip',
      },
    ],
    title: 'Functions',
  };
  function zu(e) {
    let n;
    return {
      c() {
        n = M('npx degit EkstraBladetUdvikling/sveltetemplate my-svelte-project');
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Cu(t) {
    let e, n, s, a, r, l, i, o, c, d, u, f;
    return (
      (u = new Xt({ props: { language: 'js', $$slots: { default: [zu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('h1')),
            (e.textContent = 'Svelte'),
            (n = T()),
            (s = z('h3')),
            (s.textContent = 'Rules'),
            (a = T()),
            (r = z('ol')),
            (r.innerHTML =
              '<li class="svelte-9h10az">There must be a rigorous division of logic (script-part) and views (template, class selection, etc.)</li> \n  <li class="svelte-9h10az">Component-specific styling should preferably be solved using the designsystem instead of styling within the\n    Svelte-files.</li> \n  <li class="svelte-9h10az">Svelte functions should (if possible) be used instead of native functions (eg createEventListener).</li> \n  <li class="svelte-9h10az">Script tag content must be kept to an absolute minimum.</li> \n  <li class="svelte-9h10az">As a rule, the state must provide all data in the format required by the components. Ie. Filtering takes place in\n    state management and not in the respective components.</li> \n  <li class="svelte-9h10az">Design system: on:click should exist on all elements of the design system</li> \n  <li class="svelte-9h10az">The use of Svelte is agreed in the front-end group, so that it is only used where it makes sense.</li> \n  <li class="svelte-9h10az">Svelte-store is used and each part of the state is divided into several readable / writeable, instead of one object.</li> \n  <li class="svelte-9h10az">Writables may only be updated using actions (functions) and may not be exported directly.</li>'),
            (l = T()),
            (i = z('h3')),
            (i.textContent = 'Create Svelte App'),
            (o = T()),
            (c = z('p')),
            (c.textContent = 'The recommended way to start new apps with Svelte is by using our Svelte Template:'),
            (d = T()),
            bt(u.$$.fragment),
            B(e, 'class', 'color--eb');
        },
        m(t, g) {
          w(t, e, g),
            w(t, n, g),
            w(t, s, g),
            w(t, a, g),
            w(t, r, g),
            w(t, l, g),
            w(t, i, g),
            w(t, o, g),
            w(t, c, g),
            w(t, d, g),
            xt(u, t, g),
            (f = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), u.$set(n);
        },
        i(t) {
          f || (pt(u.$$.fragment, t), (f = !0));
        },
        o(t) {
          mt(u.$$.fragment, t), (f = !1);
        },
        d(t) {
          t && y(e),
            t && y(n),
            t && y(s),
            t && y(a),
            t && y(r),
            t && y(l),
            t && y(i),
            t && y(o),
            t && y(c),
            t && y(d),
            wt(u, t);
        },
      }
    );
  }
  const Mu = {
    href: '/guidelines',
    routes: [
      {
        component: class extends kt {
          constructor(t) {
            super(), yt(this, t, null, Cu, l, {});
          }
        },
        href: '/guidelines/svelte',
        title: 'Svelte',
      },
    ],
    title: 'Guidelines',
  };
  function Tu(t, e, n) {
    const s = t.slice();
    return (s[0] = e[n]), s;
  }
  function Lu(t) {
    let e,
      n,
      s,
      a,
      r,
      l = t[0].title + '';
    return {
      c() {
        (e = z('li')), (n = z('a')), (s = M(l)), B(n, 'href', '#a11y');
      },
      m(l, i) {
        w(l, e, i), x(e, n), x(n, s), a || ((r = b(jt.call(null, n, { disabled: !1, href: t[0].href }))), (a = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && y(e), (a = !1), r();
      },
    };
  }
  function Hu(e) {
    let n,
      s,
      a,
      r,
      l,
      i = hi.routes,
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = Lu(Tu(e, i, t));
    return {
      c() {
        (n = z('h1')),
          (n.textContent = 'Components'),
          (s = T()),
          (a = z('div')),
          (a.innerHTML =
            '<p>Components mainly consists of svelte components but can be used as straight HTML components if it&#39;s a must</p>'),
          (r = T()),
          (l = z('ul'));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(a, 'class', 'grid-width--small');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
        for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(l, null);
      },
      p(t, [e]) {
        if (0 & e) {
          let n;
          for (i = hi.routes, n = 0; n < i.length; n += 1) {
            const s = Tu(t, i, n);
            o[n] ? o[n].p(s, e) : ((o[n] = Lu(s)), o[n].c(), o[n].m(l, null));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), k(o, t);
      },
    };
  }
  function Su(t, e, n) {
    const s = t.slice();
    return (s[0] = e[n]), s;
  }
  function Bu(t) {
    let e,
      n,
      s,
      a,
      r,
      l = t[0].title + '';
    return {
      c() {
        (e = z('li')), (n = z('a')), (s = M(l)), B(n, 'href', '#a11y');
      },
      m(l, i) {
        w(l, e, i), x(e, n), x(n, s), a || ((r = b(jt.call(null, n, { disabled: !1, href: t[0].href }))), (a = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && y(e), (a = !1), r();
      },
    };
  }
  function Nu(e) {
    let n,
      s,
      a,
      r,
      l,
      i = Vo.routes,
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = Bu(Su(e, i, t));
    return {
      c() {
        (n = z('h1')),
          (n.textContent = 'CSS Variables'),
          (s = T()),
          (a = z('div')),
          (a.innerHTML =
            '<p>Utility CSS variables to be used in styling</p> \n  <p>These are not meant to be overridden</p>'),
          (r = T()),
          (l = z('ul'));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(a, 'class', 'grid-width--small');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
        for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(l, null);
      },
      p(t, [e]) {
        if (0 & e) {
          let n;
          for (i = Vo.routes, n = 0; n < i.length; n += 1) {
            const s = Su(t, i, n);
            o[n] ? o[n].p(s, e) : ((o[n] = Bu(s)), o[n].c(), o[n].m(l, null));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), k(o, t);
      },
    };
  }
  function Au(t, e, n) {
    const s = t.slice();
    return (s[0] = e[n]), s;
  }
  function Eu(t) {
    let e,
      n,
      s,
      a,
      r,
      l = t[0].title + '';
    return {
      c() {
        (e = z('li')), (n = z('a')), (s = M(l)), B(n, 'href', '#a11y');
      },
      m(l, i) {
        w(l, e, i), x(e, n), x(n, s), a || ((r = b(jt.call(null, n, { disabled: !1, href: t[0].href }))), (a = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && y(e), (a = !1), r();
      },
    };
  }
  function ju(e) {
    let n,
      s,
      a,
      r,
      l,
      i = ku.routes,
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = Eu(Au(e, i, t));
    return {
      c() {
        (n = z('h1')),
          (n.textContent = 'Exported Functions'),
          (s = T()),
          (a = z('div')),
          (a.innerHTML =
            '<p>Functions exported from the design system to be used in svelte/typescript/javascript applications</p>'),
          (r = T()),
          (l = z('ul'));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(a, 'class', 'grid-width--small');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
        for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(l, null);
      },
      p(t, [e]) {
        if (0 & e) {
          let n;
          for (i = ku.routes, n = 0; n < i.length; n += 1) {
            const s = Au(t, i, n);
            o[n] ? o[n].p(s, e) : ((o[n] = Eu(s)), o[n].c(), o[n].m(l, null));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), k(o, t);
      },
    };
  }
  function Fu(t, e, n) {
    const s = t.slice();
    return (s[0] = e[n]), s;
  }
  function Ou(t) {
    let e,
      n,
      s,
      a,
      r,
      l = t[0].title + '';
    return {
      c() {
        (e = z('li')), (n = z('a')), (s = M(l)), B(n, 'href', '#a11y');
      },
      m(l, i) {
        w(l, e, i), x(e, n), x(n, s), a || ((r = b(jt.call(null, n, { disabled: !1, href: t[0].href }))), (a = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && y(e), (a = !1), r();
      },
    };
  }
  function Vu(e) {
    let n,
      s,
      a,
      r,
      l,
      i = Mu.routes,
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = Ou(Fu(e, i, t));
    return {
      c() {
        (n = z('h1')),
          (n.textContent = 'Guidelines'),
          (s = T()),
          (a = z('div')),
          (a.innerHTML =
            '<p>Guidelines on how to implements languages or frameworks when working with frontend code in the context of Ekstra\n    Bladet</p>'),
          (r = T()),
          (l = z('ul'));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(a, 'class', 'grid-width--small');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
        for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(l, null);
      },
      p(t, [e]) {
        if (0 & e) {
          let n;
          for (i = Mu.routes, n = 0; n < i.length; n += 1) {
            const s = Fu(t, i, n);
            o[n] ? o[n].p(s, e) : ((o[n] = Ou(s)), o[n].c(), o[n].m(l, null));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), k(o, t);
      },
    };
  }
  function Iu(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fab'),
          B(n, 'data-icon', 'css3-alt'),
          B(n, 'class', 'svg-inline--fa fa-css3-alt fa-w-12'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 384 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Du(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class _u extends kt {
    constructor(t) {
      super(), yt(this, t, Du, Iu, l, { height: 1, width: 2 });
    }
  }
  function Pu(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M356 160H188c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm12 52v-8c0-6.6-5.4-12-12-12H188c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12zm64.7 268h3.3c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h344c13.3 0 24 10.7 24 24v368c0 10-6.2 18.6-14.9 22.2-3.6 16.1-4.4 45.6-.4 65.8zM128 384h288V32H128v352zm-96 16c13.4-10 30-16 48-16h16V32H80c-26.5 0-48 21.5-48 48v320zm372.3 80c-3.1-20.4-2.9-45.2 0-64H80c-64 0-64 64 0 64h324.3z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fal'),
          B(n, 'data-icon', 'book'),
          B(n, 'class', 'svg-inline--fa fa-book fa-w-14'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 448 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function qu(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class Ru extends kt {
    constructor(t) {
      super(), yt(this, t, qu, Pu, l, { height: 1, width: 2 });
    }
  }
  function Wu(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fab'),
          B(n, 'data-icon', 'js-square'),
          B(n, 'class', 'svg-inline--fa fa-js-square fa-w-14'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 448 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Gu(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class Uu extends kt {
    constructor(t) {
      super(), yt(this, t, Gu, Wu, l, { height: 1, width: 2 });
    }
  }
  function Zu(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M550.5 241l-50.089-86.786c1.071-2.142 1.875-4.553 1.875-7.232 0-8.036-6.696-14.733-14.732-15.001l-55.447-95.893c.536-1.607 1.071-3.214 1.071-4.821 0-8.571-6.964-15.268-15.268-15.268-4.821 0-8.839 2.143-11.786 5.625H299.518C296.839 18.143 292.821 16 288 16s-8.839 2.143-11.518 5.625H170.411C167.464 18.143 163.447 16 158.625 16c-8.303 0-15.268 6.696-15.268 15.268 0 1.607.536 3.482 1.072 4.821l-55.983 97.233c-5.356 2.41-9.107 7.5-9.107 13.661 0 .535.268 1.071.268 1.607l-53.304 92.143c-7.232 1.339-12.59 7.5-12.59 15 0 7.232 5.089 13.393 12.054 15l55.179 95.358c-.536 1.607-.804 2.946-.804 4.821 0 7.232 5.089 13.393 12.054 14.732l51.697 89.732c-.536 1.607-1.071 3.482-1.071 5.357 0 8.571 6.964 15.268 15.268 15.268 4.821 0 8.839-2.143 11.518-5.357h106.875C279.161 493.857 283.447 496 288 496s8.839-2.143 11.518-5.357h107.143c2.678 2.946 6.696 4.821 10.982 4.821 8.571 0 15.268-6.964 15.268-15.268 0-1.607-.267-2.946-.803-4.285l51.697-90.268c6.964-1.339 12.054-7.5 12.054-14.732 0-1.607-.268-3.214-.804-4.821l54.911-95.358c6.964-1.339 12.322-7.5 12.322-15-.002-7.232-5.092-13.393-11.788-14.732zM153.535 450.732l-43.66-75.803h43.66v75.803zm0-83.839h-43.66c-.268-1.071-.804-2.142-1.339-3.214l44.999-47.41v50.624zm0-62.411l-50.357 53.304c-1.339-.536-2.679-1.34-4.018-1.607L43.447 259.75c.535-1.339.535-2.679.535-4.018s0-2.41-.268-3.482l51.965-90c2.679-.268 5.357-1.072 7.768-2.679l50.089 51.965v92.946zm0-102.322l-45.803-47.41c1.339-2.143 2.143-4.821 2.143-7.767 0-.268-.268-.804-.268-1.072l43.928-15.804v72.053zm0-80.625l-43.66 15.804 43.66-75.536v59.732zm326.519 39.108l.804 1.339L445.5 329.125l-63.75-67.232 98.036-101.518.268.268zM291.75 355.107l11.518 11.786H280.5l11.25-11.786zm-.268-11.25l-83.303-85.446 79.553-84.375 83.036 87.589-79.286 82.232zm5.357 5.893l79.286-82.232 67.5 71.25-5.892 28.125H313.714l-16.875-17.143zM410.411 44.393c1.071.536 2.142 1.072 3.482 1.34l57.857 100.714v.536c0 2.946.803 5.624 2.143 7.767L376.393 256l-83.035-87.589L410.411 44.393zm-9.107-2.143L287.732 162.518l-57.054-60.268 166.339-60h4.287zm-123.483 0c2.678 2.678 6.16 4.285 10.179 4.285s7.5-1.607 10.179-4.285h75L224.786 95.821 173.893 42.25h103.928zm-116.249 5.625l1.071-2.142a33.834 33.834 0 0 0 2.679-.804l51.161 53.84-54.911 19.821V47.875zm0 79.286l60.803-21.964 59.732 63.214-79.553 84.107-40.982-42.053v-83.304zm0 92.678L198 257.607l-36.428 38.304v-76.072zm0 87.858l42.053-44.464 82.768 85.982-17.143 17.678H161.572v-59.196zm6.964 162.053c-1.607-1.607-3.482-2.678-5.893-3.482l-1.071-1.607v-89.732h99.91l-91.607 94.821h-1.339zm129.911 0c-2.679-2.41-6.428-4.285-10.447-4.285s-7.767 1.875-10.447 4.285h-96.429l91.607-94.821h38.304l91.607 94.821H298.447zm120-11.786l-4.286 7.5c-1.339.268-2.41.803-3.482 1.339l-89.196-91.875h114.376l-17.412 83.036zm12.856-22.232l12.858-60.803h21.964l-34.822 60.803zm34.822-68.839h-20.357l4.553-21.16 17.143 18.214c-.535.803-1.071 1.874-1.339 2.946zm66.161-107.411l-55.447 96.697c-1.339.535-2.679 1.071-4.018 1.874l-20.625-21.964 34.554-163.928 45.803 79.286c-.267 1.339-.803 2.678-.803 4.285 0 1.339.268 2.411.536 3.75z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fab'),
          B(n, 'data-icon', 'connectdevelop'),
          B(n, 'class', 'svg-inline--fa fa-connectdevelop fa-w-18'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 576 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function Yu(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class Xu extends kt {
    constructor(t) {
      super(), yt(this, t, Yu, Zu, l, { height: 1, width: 2 });
    }
  }
  function Qu(e) {
    let n,
      s,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      k,
      C,
      M,
      L,
      H,
      S,
      N,
      A,
      E,
      j,
      F,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K,
      J,
      tt,
      et;
    return (
      ($ = new yi({ props: { width: 60, height: 60 } })),
      (S = new Xu({ props: { width: 60, height: 60 } })),
      (V = new Ru({ props: { width: 45, height: 60 } })),
      (W = new Uu({ props: { width: 60, height: 60 } })),
      (K = new _u({ props: { width: 45, height: 60 } })),
      {
        c() {
          (n = z('div')),
            (s = z('div')),
            (r = z('div')),
            (r.innerHTML = '<img alt="" src="ekstrabladet.svg" style="height:70px;"/>'),
            (l = T()),
            (i = z('div')),
            (i.innerHTML = '<h1>Design system</h1>'),
            (o = T()),
            (c = z('div')),
            (c.textContent = 'yarn add @ekstra-bladet/designsystem'),
            (d = T()),
            (u = z('div')),
            (f = z('a')),
            (g = z('div')),
            (p = z('div')),
            (m = z('h2')),
            (m.textContent = 'Components'),
            (h = T()),
            bt($.$$.fragment),
            (v = T()),
            (k = z('a')),
            (C = z('div')),
            (M = z('div')),
            (L = z('h2')),
            (L.textContent = 'Utilities'),
            (H = T()),
            bt(S.$$.fragment),
            (N = T()),
            (A = z('a')),
            (E = z('div')),
            (j = z('div')),
            (F = z('h2')),
            (F.textContent = 'Guidelines'),
            (O = T()),
            bt(V.$$.fragment),
            (I = T()),
            (D = z('a')),
            (_ = z('div')),
            (P = z('div')),
            (q = z('h2')),
            (q.textContent = 'JS Functions'),
            (R = T()),
            bt(W.$$.fragment),
            (G = T()),
            (U = z('a')),
            (Z = z('div')),
            (Y = z('div')),
            (X = z('h2')),
            (X.textContent = 'CSS Variables'),
            (Q = T()),
            bt(K.$$.fragment),
            B(r, 'class', 'flex flex-justify--center'),
            B(i, 'class', 'flex flex-justify--center margin-l--b'),
            B(c, 'class', 'text-align--center margin-m--tb padding-m bg--graa7'),
            B(m, 'class', 'color--graa1'),
            B(p, 'class', 'flex-item flex-item--center text-align--center'),
            B(g, 'class', 'card padding-m'),
            B(f, 'href', '#a11y'),
            B(f, 'class', 'home-section-item components svelte-1rqm2fs'),
            B(L, 'class', 'color--graa1'),
            B(M, 'class', 'flex-item flex-item--center text-align--center'),
            B(C, 'class', 'card padding-m'),
            B(k, 'href', '#a11y'),
            B(k, 'class', 'home-section-item utilities svelte-1rqm2fs'),
            B(F, 'class', 'color--graa1'),
            B(j, 'class', 'flex-item flex-item--center text-align--center'),
            B(E, 'class', 'card padding-m'),
            B(A, 'href', '#a11y'),
            B(A, 'class', 'home-section-item guidelines svelte-1rqm2fs'),
            B(q, 'class', 'color--graa1'),
            B(P, 'class', 'flex-item flex-item--center text-align--center'),
            B(_, 'class', 'card padding-m'),
            B(D, 'href', '#a11y'),
            B(D, 'class', 'home-section-item exportedfunctions svelte-1rqm2fs'),
            B(X, 'class', 'color--graa1'),
            B(Y, 'class', 'flex-item flex-item--center text-align--center'),
            B(Z, 'class', 'card padding-m'),
            B(U, 'href', '#a11y'),
            B(U, 'class', 'home-section-item cssvariables svelte-1rqm2fs'),
            B(u, 'class', 'grid home-section svelte-1rqm2fs'),
            B(s, 'class', 'grid-width--medium'),
            B(n, 'class', 'flex flex-justify--around width-1of1');
        },
        m(t, e) {
          w(t, n, e),
            x(n, s),
            x(s, r),
            x(s, l),
            x(s, i),
            x(s, o),
            x(s, c),
            x(s, d),
            x(s, u),
            x(u, f),
            x(f, g),
            x(g, p),
            x(p, m),
            x(p, h),
            xt($, p, null),
            x(u, v),
            x(u, k),
            x(k, C),
            x(C, M),
            x(M, L),
            x(M, H),
            xt(S, M, null),
            x(u, N),
            x(u, A),
            x(A, E),
            x(E, j),
            x(j, F),
            x(j, O),
            xt(V, j, null),
            x(u, I),
            x(u, D),
            x(D, _),
            x(_, P),
            x(P, q),
            x(P, R),
            xt(W, P, null),
            x(u, G),
            x(u, U),
            x(U, Z),
            x(Z, Y),
            x(Y, X),
            x(Y, Q),
            xt(K, Y, null),
            (J = !0),
            tt ||
              ((et = [
                b(jt.call(null, f, { disabled: !1, href: hi.href })),
                b(jt.call(null, k, { disabled: !1, href: wo.href })),
                b(jt.call(null, A, { disabled: !1, href: Mu.href })),
                b(jt.call(null, D, { disabled: !1, href: ku.href })),
                b(jt.call(null, U, { disabled: !1, href: Vo.href })),
              ]),
              (tt = !0));
        },
        p: t,
        i(t) {
          J ||
            (pt($.$$.fragment, t),
            pt(S.$$.fragment, t),
            pt(V.$$.fragment, t),
            pt(W.$$.fragment, t),
            pt(K.$$.fragment, t),
            (J = !0));
        },
        o(t) {
          mt($.$$.fragment, t),
            mt(S.$$.fragment, t),
            mt(V.$$.fragment, t),
            mt(W.$$.fragment, t),
            mt(K.$$.fragment, t),
            (J = !1);
        },
        d(t) {
          t && y(n), wt($), wt(S), wt(V), wt(W), wt(K), (tt = !1), a(et);
        },
      }
    );
  }
  function Ku(t, e, n) {
    const s = t.slice();
    return (s[0] = e[n]), s;
  }
  function Ju(t) {
    let e,
      n,
      s,
      a,
      r,
      l = t[0].title + '';
    return {
      c() {
        (e = z('li')), (n = z('a')), (s = M(l)), B(n, 'href', '#a11y');
      },
      m(l, i) {
        w(l, e, i), x(e, n), x(n, s), a || ((r = b(jt.call(null, n, { disabled: !1, href: t[0].href }))), (a = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && y(e), (a = !1), r();
      },
    };
  }
  function tf(e) {
    let n,
      s,
      a,
      r,
      l,
      i = wo.routes,
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = Ju(Ku(e, i, t));
    return {
      c() {
        (n = z('h1')),
          (n.textContent = 'Utilities'),
          (s = T()),
          (a = z('div')),
          (a.innerHTML = '<p>Utilities exposed from Ekstra Bladet designsystem</p>'),
          (r = T()),
          (l = z('ul'));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(a, 'class', 'grid-width--small');
      },
      m(t, e) {
        w(t, n, e), w(t, s, e), w(t, a, e), w(t, r, e), w(t, l, e);
        for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(l, null);
      },
      p(t, [e]) {
        if (0 & e) {
          let n;
          for (i = wo.routes, n = 0; n < i.length; n += 1) {
            const s = Ku(t, i, n);
            o[n] ? o[n].p(s, e) : ((o[n] = Ju(s)), o[n].c(), o[n].m(l, null));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), t && y(s), t && y(a), t && y(r), t && y(l), k(o, t);
      },
    };
  }
  const ef = {
    '/': class extends kt {
      constructor(t) {
        super(), yt(this, t, null, Qu, l, {});
      }
    },
    [Mu.href]: class extends kt {
      constructor(t) {
        super(), yt(this, t, null, Vu, l, {});
      }
    },
    [hi.href]: class extends kt {
      constructor(t) {
        super(), yt(this, t, null, Hu, l, {});
      }
    },
    [wo.href]: class extends kt {
      constructor(t) {
        super(), yt(this, t, null, tf, l, {});
      }
    },
    [ku.href]: class extends kt {
      constructor(t) {
        super(), yt(this, t, null, ju, l, {});
      }
    },
    [Vo.href]: class extends kt {
      constructor(t) {
        super(), yt(this, t, null, Nu, l, {});
      }
    },
  };
  [...Mu.routes, ...hi.routes, ...wo.routes, ...ku.routes, ...Vo.routes].forEach((t) => {
    ef[t.href] = t.component;
  });
  const nf = ef,
    sf = [Mu, hi, wo, ku, Vo];
  function af(e) {
    let n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      h,
      $,
      v,
      b,
      k,
      z,
      M,
      T,
      L,
      H,
      S,
      N,
      A,
      E,
      j,
      O,
      V,
      I,
      D,
      _,
      P,
      q,
      R,
      W,
      G,
      U,
      Z,
      Y,
      X,
      Q,
      K,
      J,
      tt,
      et,
      nt,
      st,
      at,
      rt,
      lt,
      it,
      ot,
      ct,
      dt,
      ut,
      ft,
      gt,
      pt,
      mt,
      ht,
      $t,
      vt,
      bt,
      xt,
      wt,
      yt,
      kt,
      zt,
      Ct,
      Mt,
      Tt,
      Lt,
      Ht,
      St,
      Bt,
      Nt,
      At,
      Et,
      jt,
      Ft,
      Ot,
      Vt,
      It,
      Dt,
      _t,
      Pt,
      qt,
      Rt,
      Wt,
      Gt,
      Ut,
      Zt,
      Yt,
      Xt,
      Qt,
      Kt,
      Jt,
      te,
      ee,
      ne,
      se,
      ae,
      re,
      le,
      ie,
      oe,
      ce,
      de,
      ue,
      fe,
      ge,
      pe,
      me,
      he,
      $e,
      ve,
      be,
      xe,
      we,
      ye,
      ke,
      ze,
      Ce,
      Me,
      Te,
      Le,
      He,
      Se,
      Be,
      Ne,
      Ae,
      Ee,
      je,
      Fe,
      Oe,
      Ve,
      Ie,
      De,
      _e,
      Pe,
      qe,
      Re,
      We,
      Ge,
      Ue,
      Ze,
      Ye,
      Xe,
      Qe,
      Ke,
      Je,
      tn,
      en,
      nn,
      sn,
      an,
      rn,
      ln,
      on,
      cn,
      dn,
      un,
      fn,
      gn,
      pn,
      mn,
      hn,
      $n,
      vn,
      bn,
      xn,
      wn,
      yn,
      kn,
      zn,
      Cn,
      Mn,
      Tn,
      Ln,
      Hn,
      Sn,
      Bn,
      Nn,
      An,
      En,
      jn,
      Fn,
      On,
      Vn,
      In,
      Dn,
      _n,
      Pn,
      qn,
      Rn,
      Wn,
      Gn,
      Un,
      Zn,
      Yn,
      Xn,
      Qn,
      Kn,
      Jn,
      ts,
      es,
      ns,
      ss,
      as,
      rs,
      ls,
      is,
      os,
      cs,
      ds,
      us,
      fs,
      gs,
      ps,
      ms,
      hs,
      $s,
      vs,
      bs,
      xs,
      ws,
      ys,
      ks,
      zs,
      Cs,
      Ms,
      Ts,
      Ls,
      Hs,
      Ss,
      Bs,
      Ns;
    return {
      c() {
        (n = C('svg')),
          (s = C('symbol')),
          (a = C('path')),
          (r = C('symbol')),
          (l = C('path')),
          (i = C('symbol')),
          (o = C('path')),
          (c = C('symbol')),
          (d = C('path')),
          (u = C('symbol')),
          (f = C('path')),
          (g = C('symbol')),
          (p = C('path')),
          (m = C('symbol')),
          (h = C('path')),
          ($ = C('symbol')),
          (v = C('path')),
          (b = C('symbol')),
          (k = C('path')),
          (z = C('symbol')),
          (M = C('path')),
          (T = C('symbol')),
          (L = C('path')),
          (H = C('symbol')),
          (S = C('path')),
          (N = C('symbol')),
          (A = C('path')),
          (E = C('symbol')),
          (j = C('path')),
          (O = C('symbol')),
          (V = C('path')),
          (I = C('symbol')),
          (D = C('path')),
          (_ = C('symbol')),
          (P = C('path')),
          (q = C('symbol')),
          (R = C('path')),
          (W = C('symbol')),
          (G = C('path')),
          (U = C('symbol')),
          (Z = C('path')),
          (Y = C('symbol')),
          (X = C('path')),
          (Q = C('symbol')),
          (K = C('path')),
          (J = C('symbol')),
          (tt = C('path')),
          (et = C('symbol')),
          (nt = C('path')),
          (st = C('symbol')),
          (at = C('path')),
          (rt = C('symbol')),
          (lt = C('path')),
          (it = C('symbol')),
          (ot = C('path')),
          (ct = C('symbol')),
          (dt = C('path')),
          (ut = C('symbol')),
          (ft = C('path')),
          (gt = C('symbol')),
          (pt = C('path')),
          (mt = C('symbol')),
          (ht = C('path')),
          ($t = C('symbol')),
          (vt = C('path')),
          (bt = C('symbol')),
          (xt = C('path')),
          (wt = C('symbol')),
          (yt = C('path')),
          (kt = C('symbol')),
          (zt = C('path')),
          (Ct = C('symbol')),
          (Mt = C('path')),
          (Tt = C('symbol')),
          (Lt = C('path')),
          (Ht = C('symbol')),
          (St = C('path')),
          (Bt = C('path')),
          (Nt = C('path')),
          (At = C('symbol')),
          (Et = C('path')),
          (jt = C('symbol')),
          (Ft = C('path')),
          (Ot = C('path')),
          (Vt = C('path')),
          (It = C('symbol')),
          (Dt = C('path')),
          (_t = C('path')),
          (Pt = C('path')),
          (qt = C('symbol')),
          (Rt = C('path')),
          (Wt = C('symbol')),
          (Gt = C('path')),
          (Ut = C('path')),
          (Zt = C('path')),
          (Yt = C('symbol')),
          (Xt = C('path')),
          (Qt = C('symbol')),
          (Kt = C('path')),
          (Jt = C('symbol')),
          (te = C('path')),
          (ee = C('symbol')),
          (ne = C('path')),
          (se = C('symbol')),
          (ae = C('path')),
          (re = C('symbol')),
          (le = C('path')),
          (ie = C('symbol')),
          (oe = C('path')),
          (ce = C('symbol')),
          (de = C('path')),
          (ue = C('symbol')),
          (fe = C('path')),
          (ge = C('path')),
          (pe = C('symbol')),
          (me = C('path')),
          (he = C('symbol')),
          ($e = C('path')),
          (ve = C('symbol')),
          (be = C('path')),
          (xe = C('symbol')),
          (we = C('path')),
          (ye = C('symbol')),
          (ke = C('path')),
          (ze = C('symbol')),
          (Ce = C('path')),
          (Me = C('symbol')),
          (Te = C('path')),
          (Le = C('symbol')),
          (He = C('path')),
          (Se = C('symbol')),
          (Be = C('path')),
          (Ne = C('symbol')),
          (Ae = C('path')),
          (Ee = C('symbol')),
          (je = C('path')),
          (Fe = C('symbol')),
          (Oe = C('path')),
          (Ve = C('symbol')),
          (Ie = C('path')),
          (De = C('symbol')),
          (_e = C('path')),
          (Pe = C('symbol')),
          (qe = C('path')),
          (Re = C('symbol')),
          (We = C('path')),
          (Ge = C('symbol')),
          (Ue = C('path')),
          (Ze = C('symbol')),
          (Ye = C('path')),
          (Xe = C('path')),
          (Qe = C('path')),
          (Ke = C('path')),
          (Je = C('symbol')),
          (tn = C('path')),
          (en = C('symbol')),
          (nn = C('path')),
          (sn = C('symbol')),
          (an = C('path')),
          (rn = C('symbol')),
          (ln = C('path')),
          (on = C('symbol')),
          (cn = C('path')),
          (dn = C('symbol')),
          (un = C('path')),
          (fn = C('symbol')),
          (gn = C('path')),
          (pn = C('symbol')),
          (mn = C('path')),
          (hn = C('symbol')),
          ($n = C('path')),
          (vn = C('symbol')),
          (bn = C('path')),
          (xn = C('symbol')),
          (wn = C('path')),
          (yn = C('symbol')),
          (kn = C('path')),
          (zn = C('symbol')),
          (Cn = C('path')),
          (Mn = C('symbol')),
          (Tn = C('path')),
          (Ln = C('symbol')),
          (Hn = C('path')),
          (Sn = C('symbol')),
          (Bn = C('path')),
          (Nn = C('symbol')),
          (An = C('path')),
          (En = C('symbol')),
          (jn = C('path')),
          (Fn = C('symbol')),
          (On = C('path')),
          (Vn = C('symbol')),
          (In = C('path')),
          (Dn = C('symbol')),
          (_n = C('path')),
          (Pn = C('symbol')),
          (qn = C('path')),
          (Rn = C('symbol')),
          (Wn = C('path')),
          (Gn = C('symbol')),
          (Un = C('path')),
          (Zn = C('symbol')),
          (Yn = C('path')),
          (Xn = C('symbol')),
          (Qn = C('path')),
          (Kn = C('symbol')),
          (Jn = C('path')),
          (ts = C('symbol')),
          (es = C('path')),
          (ns = C('symbol')),
          (ss = C('path')),
          (as = C('symbol')),
          (rs = C('path')),
          (ls = C('symbol')),
          (is = C('path')),
          (os = C('symbol')),
          (cs = C('path')),
          (ds = C('symbol')),
          (us = C('path')),
          (fs = C('symbol')),
          (gs = C('path')),
          (ps = C('symbol')),
          (ms = C('path')),
          (hs = C('symbol')),
          ($s = C('path')),
          (vs = C('symbol')),
          (bs = C('path')),
          (xs = C('symbol')),
          (ws = C('path')),
          (ys = C('symbol')),
          (ks = C('path')),
          (zs = C('symbol')),
          (Cs = C('rect')),
          (Ms = C('path')),
          (Ts = C('symbol')),
          (Ls = C('path')),
          (Hs = C('symbol')),
          (Ss = C('path')),
          (Bs = C('symbol')),
          (Ns = C('path')),
          B(
            a,
            'd',
            'm443.5 162.6-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z'
          ),
          B(s, 'class', 'aasvg-inline--fa aafa-chevron-down aafa-w-14'),
          B(s, 'viewBox', '0 0 448 512'),
          B(s, 'id', 'angle-down'),
          B(s, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            l,
            'd',
            'm238.475 475.535 7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z'
          ),
          B(r, 'class', 'absvg-inline--fa abfa-chevron-left abfa-w-8'),
          B(r, 'viewBox', '0 0 256 512'),
          B(r, 'id', 'angle-left'),
          B(r, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            o,
            'd',
            'm17.525 36.465-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z'
          ),
          B(i, 'class', 'acsvg-inline--fa acfa-chevron-right acfa-w-8'),
          B(i, 'viewBox', '0 0 256 512'),
          B(i, 'id', 'angle-right'),
          B(i, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            d,
            'd',
            'm4.465 366.475 7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L224 178.053l195.494 195.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.051c-4.686-4.686-12.284-4.686-16.971 0L4.465 349.505c-4.687 4.686-4.687 12.284 0 16.97z'
          ),
          B(c, 'class', 'adsvg-inline--fa adfa-chevron-up adfa-w-14'),
          B(c, 'viewBox', '0 0 448 512'),
          B(c, 'id', 'angle-up'),
          B(c, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            f,
            'd',
            'm443.5 248.5-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
          ),
          B(u, 'class', 'aesvg-inline--fa aefa-arrow-down aefa-w-14'),
          B(u, 'viewBox', '0 0 448 512'),
          B(u, 'id', 'arrow-down'),
          B(u, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            p,
            'd',
            'm231.536 475.535 7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z'
          ),
          B(g, 'class', 'afsvg-inline--fa affa-arrow-left affa-w-14'),
          B(g, 'viewBox', '0 0 448 512'),
          B(g, 'id', 'arrow-left'),
          B(g, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            h,
            'd',
            'm216.464 36.465-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z'
          ),
          B(m, 'class', 'agsvg-inline--fa agfa-arrow-right agfa-w-14'),
          B(m, 'viewBox', '0 0 448 512'),
          B(m, 'id', 'arrow-right'),
          B(m, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            v,
            'd',
            'm4.465 263.536 7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L207 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l178.494 178.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.05c-4.686-4.686-12.284-4.686-16.971 0L4.465 246.566c-4.687 4.686-4.687 12.284 0 16.97z'
          ),
          B($, 'class', 'ahsvg-inline--fa ahfa-arrow-up ahfa-w-14'),
          B($, 'viewBox', '0 0 448 512'),
          B($, 'id', 'arrow-up'),
          B($, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            k,
            'd',
            'M27 46.5h-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H27c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-12 0H2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm34-11.1H2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h47c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm0-11.1H33.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H49c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-26.3 0H3.3c-1.6 0-2.8-1.2-2.8-2.8V3C.5 1.4 1.7.2 3.3.2h19.4c1.6 0 2.8 1.2 2.8 2.8v18.5c-.1 1.6-1.2 2.8-2.8 2.8zm-19.2-3h18.9v-18H3.5v18zM49 13.2H33.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H49c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm0-9.9H33.5c-.8 0-1.5-.7-1.5-1.5S32.7.3 33.5.3H49c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'
          ),
          B(b, 'viewBox', '0 0 51 47'),
          F(b, 'enable-background', 'new 0 0 51 47'),
          B(b, 'xml:space', 'preserve'),
          B(b, 'id', 'article'),
          B(b, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(M, 'class', 'ajst0'),
          B(
            M,
            'd',
            'M8 15.6C3.8 15.6.4 12.2.4 8S3.8.4 8 .4s7.6 3.4 7.6 7.6v1.3c0 1.3-1.1 2.4-2.4 2.4-1 0-1.8-.6-2.2-1.4-.7.9-1.7 1.4-2.9 1.4C6 11.7 4.3 10 4.3 8S6 4.3 8 4.3c1.1 0 2 .5 2.7 1.2v-.7h1v4.5c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4V8c0-3.6-2.9-6.6-6.6-6.6-3.5 0-6.5 3-6.5 6.6 0 3.6 2.9 6.6 6.6 6.6v1zM8 5.3C6.5 5.3 5.3 6.5 5.3 8c0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7z'
          ),
          B(z, 'viewBox', '0 0 16 16'),
          F(z, 'enable-background', 'new 0 0 16 16'),
          B(z, 'xml:space', 'preserve'),
          B(z, 'id', 'at'),
          B(z, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            L,
            'd',
            'M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z'
          ),
          B(T, 'class', 'aksvg-inline--fa akfa-bell akfa-w-14'),
          B(T, 'viewBox', '0 0 448 512'),
          B(T, 'id', 'bell'),
          B(T, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            S,
            'd',
            'M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z'
          ),
          B(H, 'viewBox', '0 0 384 512'),
          B(H, 'id', 'bookmark'),
          B(H, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(A, 'd', 'M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z'),
          B(N, 'viewBox', '0 0 384 512'),
          B(N, 'id', 'bookmark-solid'),
          B(N, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            j,
            'd',
            'M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16z'
          ),
          B(E, 'class', 'ansvg-inline--fa anfa-calendar anfa-w-14'),
          B(E, 'viewBox', '0 0 448 512'),
          B(E, 'id', 'calendar'),
          B(E, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            V,
            'd',
            'M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z'
          ),
          B(O, 'class', 'apsvg-inline--fa apfa-camera apfa-w-16'),
          B(O, 'viewBox', '0 0 512 512'),
          B(O, 'id', 'camera'),
          B(O, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            D,
            'd',
            'M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z'
          ),
          B(I, 'class', 'aosvg-inline--fa aofa-camera aofa-w-16'),
          B(I, 'viewBox', '0 0 512 512'),
          B(I, 'id', 'camera-solid'),
          B(I, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            P,
            'd',
            'M424 352h16c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm-96 0h16c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm-192 0h16c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm96 0h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8zm272 64H32V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v360c0 8.84 7.16 16 16 16h488c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z'
          ),
          B(_, 'viewBox', '0 0 512 512'),
          B(_, 'id', 'chart-bar'),
          B(_, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            R,
            'd',
            'M413.505 91.951 133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z'
          ),
          B(q, 'class', 'awsvg-inline--fa awfa-check awfa-w-14'),
          B(q, 'viewBox', '0 0 448 512'),
          B(q, 'id', 'check'),
          B(q, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            G,
            'd',
            'M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z'
          ),
          B(W, 'class', 'assvg-inline--fa asfa-check-circle asfa-w-16'),
          B(W, 'viewBox', '0 0 512 512'),
          B(W, 'id', 'check-circle'),
          B(W, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Z,
            'd',
            'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'
          ),
          B(U, 'class', 'arsvg-inline--fa arfa-check-circle arfa-w-16'),
          B(U, 'viewBox', '0 0 512 512'),
          B(U, 'id', 'check-circle-solid'),
          B(U, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            X,
            'd',
            'm173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
          ),
          B(Y, 'viewBox', '0 0 512 512'),
          B(Y, 'id', 'check-solid'),
          B(Y, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            K,
            'd',
            'M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z'
          ),
          B(Q, 'class', 'avsvg-inline--fa avfa-check-square avfa-w-14'),
          B(Q, 'viewBox', '0 0 448 512'),
          B(Q, 'id', 'check-square'),
          B(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            tt,
            'd',
            'M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059 184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z'
          ),
          B(J, 'class', 'ausvg-inline--fa aufa-check-square aufa-w-14'),
          B(J, 'viewBox', '0 0 448 512'),
          B(J, 'id', 'check-square-solid'),
          B(J, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            nt,
            'd',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z'
          ),
          B(et, 'class', 'azsvg-inline--fa azfa-circle azfa-w-16'),
          B(et, 'viewBox', '0 0 512 512'),
          B(et, 'id', 'circle'),
          B(et, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            at,
            'd',
            'M288 24.103v8.169a11.995 11.995 0 0 0 9.698 11.768C396.638 63.425 472 150.461 472 256c0 118.663-96.055 216-216 216-118.663 0-216-96.055-216-216 0-104.534 74.546-192.509 174.297-211.978A11.993 11.993 0 0 0 224 32.253v-8.147c0-7.523-6.845-13.193-14.237-11.798C94.472 34.048 7.364 135.575 8.004 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.789 504 256c0-121.187-86.924-222.067-201.824-243.704C294.807 10.908 288 16.604 288 24.103z'
          ),
          B(st, 'class', 'axsvg-inline--fa axfa-circle-notch axfa-w-16'),
          B(st, 'viewBox', '0 0 512 512'),
          B(st, 'id', 'circle-notch'),
          B(st, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(lt, 'd', 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'),
          B(rt, 'class', 'aysvg-inline--fa ayfa-circle ayfa-w-16'),
          B(rt, 'viewBox', '0 0 512 512'),
          B(rt, 'id', 'circle-solid'),
          B(rt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ot,
            'd',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z'
          ),
          B(it, 'class', 'basvg-inline--fa bafa-clock bafa-w-16'),
          B(it, 'viewBox', '0 0 512 512'),
          B(it, 'id', 'clock'),
          B(it, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            dt,
            'd',
            'm482.696 299.276-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z'
          ),
          B(ct, 'class', 'bcsvg-inline--fa bcfa-cog bcfa-w-16'),
          B(ct, 'viewBox', '0 0 512 512'),
          B(ct, 'id', 'cog'),
          B(ct, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ft,
            'd',
            'm487.4 315.7-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'
          ),
          B(ut, 'class', 'bbsvg-inline--fa bbfa-cog bbfa-w-16'),
          B(ut, 'viewBox', '0 0 512 512'),
          B(ut, 'id', 'cog-solid'),
          B(ut, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            pt,
            'd',
            'M256 64c123.5 0 224 79 224 176S379.5 416 256 416c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176m0-32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32z'
          ),
          B(gt, 'class', 'besvg-inline--fa befa-comment befa-w-16'),
          B(gt, 'viewBox', '0 0 512 512'),
          B(gt, 'id', 'comment'),
          B(gt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ht,
            'd',
            'M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z'
          ),
          B(mt, 'class', 'bdsvg-inline--fa bdfa-comment bdfa-w-16'),
          B(mt, 'viewBox', '0 0 512 512'),
          B(mt, 'id', 'comment-solid'),
          B(mt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            vt,
            'd',
            'M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z'
          ),
          B($t, 'class', 'bfsvg-inline--fa bffa-comments bffa-w-18'),
          B($t, 'viewBox', '0 0 576 512'),
          B($t, 'id', 'comments-solid'),
          B($t, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            xt,
            'd',
            'M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 64h480c8.8 0 16 7.2 16 16v48H32V80c0-8.8 7.2-16 16-16zm480 384H48c-8.8 0-16-7.2-16-16V224h512v208c0 8.8-7.2 16-16 16zm-336-84v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z'
          ),
          B(bt, 'class', 'bhsvg-inline--fa bhfa-credit-card bhfa-w-18'),
          B(bt, 'viewBox', '0 0 576 512'),
          B(bt, 'id', 'creditcard'),
          B(bt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            yt,
            'd',
            'M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z'
          ),
          B(wt, 'class', 'bgsvg-inline--fa bgfa-credit-card bgfa-w-18'),
          B(wt, 'viewBox', '0 0 576 512'),
          B(wt, 'id', 'creditcard-solid'),
          B(wt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            zt,
            'd',
            'M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h192l-24 96h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-72l-24-96h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM249 480l16-64h46l16 64h-78zm295-144c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16v288z'
          ),
          B(kt, 'class', 'bisvg-inline--fa bifa-desktop bifa-w-18'),
          B(kt, 'viewBox', '0 0 576 512'),
          B(kt, 'id', 'desktop'),
          B(kt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Mt,
            'd',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm0-296c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z'
          ),
          B(Ct, 'viewBox', '0 0 512 512'),
          F(Ct, 'enable-background', 'new 0 0 512 512'),
          B(Ct, 'xml:space', 'preserve'),
          B(Ct, 'id', 'dot-circle'),
          B(Ct, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(Lt, 'd', 'M237.4 122.1h120.5v238.5h237.4V481H357.9v238.5H237.4V481H0V360.5h237.4V122.1z'),
          B(Tt, 'viewBox', '0 122.1 595.3 597.4'),
          B(Tt, 'xml:space', 'preserve'),
          B(Tt, 'id', 'ebplus'),
          B(Tt, 'xmlns', 'http://www.w3.org/2000/svg'),
          F(St, 'fill', '#000'),
          B(St, 'd', 'M135 0h95v365h-95z'),
          F(Bt, 'fill', '#ddd'),
          B(Bt, 'd', 'M135 230v33.493L230 230h-95z'),
          B(Nt, 'transform', 'rotate(90 182.5 182.5)'),
          F(Nt, 'fill', '#000'),
          B(Nt, 'd', 'M135 0h95v365h-95z'),
          B(Ht, 'viewBox', '0 0 365 365'),
          B(Ht, 'id', 'ebplus-black'),
          B(Ht, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Et,
            'd',
            'M36.4 0C16.3 0 0 16.3 0 36.4s16.3 36.4 36.4 36.4 36.4-16.3 36.4-36.4S56.5 0 36.4 0zm20.1 41.9H42.2v14.2H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2v10.6z'
          ),
          B(At, 'viewBox', '0 0 72.8 72.8'),
          F(At, 'enable-background', 'new 0 0 72.8 72.8'),
          B(At, 'xml:space', 'preserve'),
          B(At, 'id', 'ebplus-circle-solid'),
          B(At, 'xmlns', 'http://www.w3.org/2000/svg'),
          F(Ft, 'fill', '#fff'),
          B(Ft, 'd', 'M135 0h95v365h-95z'),
          F(Ot, 'fill', '#690000'),
          B(Ot, 'd', 'M135 230v33.493L230 230h-95z'),
          B(Vt, 'transform', 'rotate(90 182.5 182.5)'),
          F(Vt, 'fill', '#fff'),
          B(Vt, 'd', 'M135 0h95v365h-95z'),
          B(jt, 'viewBox', '0 0 365 365'),
          B(jt, 'id', 'ebplus-white'),
          B(jt, 'xmlns', 'http://www.w3.org/2000/svg'),
          F(Dt, 'fill', '#fff'),
          B(Dt, 'd', 'M135 0h95v365h-95z'),
          F(_t, 'fill', '#333'),
          B(_t, 'd', 'M135 230v33.493L230 230h-95z'),
          B(Pt, 'transform', 'rotate(90 182.5 182.5)'),
          F(Pt, 'fill', '#fff'),
          B(Pt, 'd', 'M135 0h95v365h-95z'),
          B(It, 'viewBox', '0 0 365 365'),
          B(It, 'id', 'ebplus-white-blackshadow'),
          B(It, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Rt,
            'd',
            'm417.8 315.5 20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z'
          ),
          B(qt, 'class', 'bmsvg-inline--fa bmfa-edit bmfa-w-18'),
          B(qt, 'viewBox', '0 0 576 512'),
          B(qt, 'id', 'edit'),
          B(qt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(Gt, 'fill', '#B30000'),
          B(Gt, 'd', 'M0-.9h100V78l-49.5 9.5L0 77.6V-.9z'),
          B(Ut, 'fill', '#FFF'),
          B(
            Ut,
            'd',
            'M23 42.3H10.6v-4.5h9.8v-3.4h-9.8v-4.6h11.5v-3.3h-16v19.6h17zM39.7 46.1l-6-8.8 5-5.4h-4.8l-5.2 5.6v-11h-3.9v19.6h3.9v-3.9l2.3-2.3 3.8 6.2z'
          ),
          B(Zt, 'fill', '#FFF'),
          B(
            Zt,
            'd',
            'M46.3 43.9c-2.4 0-3.1-.5-3.5-2h-3.7c0 3.1 2.5 4.9 6.7 4.9 4.7 0 7.5-1.8 7.5-4.8 0-2-1.6-3.7-3.6-4.1l-5.6-.9c-.6-.1-1.2-.7-1.2-1.4 0-.8.8-1.4 2.3-1.4 3 0 3.5.4 3.6 2h3.8v-.5c0-2.4-2.8-4.5-6.5-4.5-4.2 0-6.9 1.8-6.9 4.9 0 1.8 1.3 3.6 3 3.8l5.8 1c.8.1 1.3.5 1.3 1.2.1 1.2-.8 1.8-3 1.8zM56.5 42.6c0 2.6 1.7 4.2 4.7 4.2 1.1 0 2-.2 3.6-1v-1.9c-.7.1-1.7.1-2 .1-1.6 0-2.2-.6-2.2-1.8v-7.6h3.8V32h-3.8v-5.4h-2.9l-.1 1.2c-.6 3.8-.7 4.2-1.8 4.2h-2.5v2.6h3.4l-.2 8zM70.8 39.9c0-3.1 1.7-4.8 4.7-4.8h1.7v-3.6H76c-2.3 0-4.1 1.1-5.3 3.2V32h-3.8v14.2h4v-6.3zM91 41.5v-5.9c0-1.7-.2-2.3-1-2.8-1.3-1.1-3.4-1.6-5.8-1.6-4.3 0-6.3 1.4-6.6 4.8h3.7c.2-1.6 1-2 3-2 2.2 0 2.9.6 2.9 2.3 0 .7-.2 1-1.1 1.1l-4.1.5c-4.1.5-5.6 1.8-5.6 4.6 0 2.6 2 4.2 5.4 4.2 2.5 0 4.1-.8 5.5-2.9.8 2.2 1.8 2.9 3.7 2.9 1 0 1.8-.2 3.4-1.1v-1.8c-.8.1-1.4.1-1.7.1-1.2 0-1.7-.7-1.7-2.4zm-8 2.4c-1.4 0-2.3-.7-2.3-1.8 0-1.6.7-1.9 5.3-2.8l1.2-.2c0 3.2-1.3 4.8-4.2 4.8zM20.1 58.8c2.8-.6 4.2-2.2 4.2-4.4 0-2.6-2.4-4.7-5.5-4.7H6.1v19.5h12.5c3.7 0 6.4-2.2 6.4-5.3 0-2.7-1.6-4.2-4.9-5.1zm-9.5-6h5.9c2.3 0 3.1.6 3.1 2.3 0 1.8-.8 2.4-3.1 2.4h-5.9v-4.7zm5.9 12.9h-6v-5.3h6c2.4 0 3.5.8 3.5 2.6 0 2.1-.9 2.7-3.5 2.7zM26.9 49.8H31v19.5h-4.1zM47.4 64.9l-.1-6.9c-.1-2.3-2.5-3.6-6.6-3.6-5.1 0-6.9 1.2-7.1 4.8h3.8c.2-1.4.8-1.9 2.9-1.9 2.4 0 3.1.5 3.1 2.2 0 .7-.4 1-1.2 1.1-.2 0-1.9.1-4.1.5-3.8.5-5.4 1.8-5.4 4.6 0 2.6 1.9 4.2 5.3 4.2 2.6 0 4.1-.7 5.6-2.9.7 2 1.8 2.9 3.9 2.9 1 0 1.7-.2 2.9-.8v-2c-.5.1-.8.1-1.2.1-1.3-.1-1.8-.7-1.8-2.3zm-8 2.1c-1.7 0-2.5-.6-2.5-1.7 0-1.3 1-2 3.1-2.4 1.9-.2 1.8-.2 3.2-.6.1 3.1-1.2 4.7-3.8 4.7zM61.7 57.3c-1.3-1.9-2.8-2.8-4.9-2.8-3.8 0-6.7 3.2-6.7 7.6 0 4.8 2.5 7.8 6.6 7.8 2.3 0 3.4-.6 5.2-2.8v2.3h3.9V49.8h-4v7.5zm-4.1 9.8c-2.4 0-3.5-1.7-3.5-4.9 0-3 1.2-4.7 3.5-4.7 2.2 0 3.6 1.9 3.6 4.7 0 3-1.4 4.9-3.6 4.9zM75.5 54.6c-4.5 0-7.8 3.4-7.8 7.7 0 4.6 3.2 7.8 7.8 7.8 4.4 0 7.2-1.8 7.7-5.1h-3.8c-.5 1.6-1.3 2-3.4 2-2.8 0-4.1-1.3-4.1-4h11.3c0-5-3-8.4-7.7-8.4zM72 60.9c.2-2.3 1.3-3.5 3.4-3.5 2.2 0 3.2 1.1 3.4 3.5H72zM90.3 65.7v-7.6h4v-2.9h-4v-5.3h-2.9l-.1 1.1c-.7 4.2-.6 4.2-1.7 4.2h-2.3v2.9h3l-.1 6.9v.5c0 3.2 1.4 4.7 4.6 4.7 1.6 0 2.4-.1 3.7-.8v-2.2c-.8.1-1.7.1-2 .1-1.6-.1-2.2-.5-2.2-1.6z'
          ),
          B(Wt, 'viewBox', '0 0 100 88'),
          B(Wt, 'xml:space', 'preserve'),
          B(Wt, 'id', 'ekstrabladet'),
          B(Wt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Xt,
            'd',
            'M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z'
          ),
          B(Yt, 'class', 'bnsvg-inline--fa bnfa-envelope bnfa-w-16'),
          B(Yt, 'viewBox', '0 0 512 512'),
          B(Yt, 'id', 'envelope'),
          B(Yt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Kt,
            'd',
            'M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z'
          ),
          B(Qt, 'class', 'bpsvg-inline--fa bpfa-exclamation-circle bpfa-w-16'),
          B(Qt, 'viewBox', '0 0 512 512'),
          B(Qt, 'id', 'exclamation-circle'),
          B(Qt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            te,
            'd',
            'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346 7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'
          ),
          B(Jt, 'class', 'bosvg-inline--fa bofa-exclamation-circle bofa-w-16'),
          B(Jt, 'viewBox', '0 0 512 512'),
          B(Jt, 'id', 'exclamation-circle-solid'),
          B(Jt, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ne,
            'd',
            'M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z'
          ),
          B(ee, 'class', 'brsvg-inline--fa brfa-exclamation-triangle brfa-w-18'),
          B(ee, 'viewBox', '0 0 576 512'),
          B(ee, 'id', 'exclamation-triangle'),
          B(ee, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ae,
            'd',
            'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346 7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'
          ),
          B(se, 'class', 'bqsvg-inline--fa bqfa-exclamation-triangle bqfa-w-18'),
          B(se, 'viewBox', '0 0 576 512'),
          B(se, 'id', 'exclamation-triangle-solid'),
          B(se, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            le,
            'd',
            'M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM300 32h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V64H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 300v124c0 13.3-10.7 24-24 24H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 480H24c-13.3 0-24-10.7-24-24V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z'
          ),
          B(re, 'class', 'bssvg-inline--fa bsfa-expand bsfa-w-14'),
          B(re, 'viewBox', '0 0 448 512'),
          B(re, 'id', 'expand'),
          B(re, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            oe,
            'd',
            'M440 256h-16a8 8 0 0 0-8 8v200a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h200a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V264a8 8 0 0 0-8-8ZM480 0h-.06l-96.16.17c-28.45 0-42.66 34.54-22.58 54.62l35.28 35.28-265 265a12 12 0 0 0 0 17l8.49 8.49a12 12 0 0 0 17 0l265-265 35.28 35.27c20 20 54.57 6 54.62-22.57l.13-96.21A32 32 0 0 0 480 0Zm-.17 128.17-96-96L480 32Z'
          ),
          B(ie, 'class', 'btsvg-inline--fa btfa-external-link-alt btfa-w-16'),
          B(ie, 'viewBox', '0 0 512 512'),
          B(ie, 'id', 'external-link'),
          B(ie, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            de,
            'd',
            'm279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
          ),
          B(ce, 'class', 'busvg-inline--fa bufa-facebook-f bufa-w-10'),
          B(ce, 'viewBox', '0 0 320 512'),
          B(ce, 'id', 'facebook'),
          B(ce, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            fe,
            'd',
            'M15.6.8c.8-.8 2-.8 2.8 0l6.7 6.7c1.9 1.9 4.4 2.9 7.1 2.9H34v6H0v-6h1.9c2.7 0 5.2-1.1 7.1-2.9L15.6.8z'
          ),
          B(fe, 'fill', 'var(--ebds-figcaption-bg)'),
          B(ge, 'd', 'm9.7 12.9 6.6-6.6c.4-.4 1-.4 1.4 0l6.6 6.6c.6.6.2 1.7-.7 1.7H10.4c-.9 0-1.3-1-.7-1.7z'),
          B(ue, 'viewBox', '0 0 34 16.4'),
          B(ue, 'id', 'figcaption-pin'),
          B(ue, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            me,
            'd',
            'M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z'
          ),
          B(pe, 'class', 'bvsvg-inline--fa bvfa-filter bvfa-w-16'),
          B(pe, 'viewBox', '0 0 512 512'),
          B(pe, 'id', 'filter-solid'),
          B(pe, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            $e,
            'd',
            'M483.7 179.4C449.7 74.6 352.5 8 248.1 8 81.2 8-40 171.4 12.3 332.6 46.3 437.4 143.7 504 248 504c166.9 0 288-163.4 235.7-324.6zm-43 173.7-94.3 11.6-17.8-24.9 33.7-104.1 28.9-9 69.6 65c-3.6 21.1-10.3 41.8-20.1 61.4zM35.6 291.5l69.4-64.9 28.9 9 33.9 103.7-18.1 25.2-94.2-11.6c-13-26-17.2-45.2-19.9-61.4zm196.5-180.7v32.9L146.2 206l-31.5-9.8-18-93.9c15.3-15.1 32.8-27.8 52-37.8l83.4 46.3zm149.4 85.4L350 206l-85.9-62.3v-32.9l83.6-46.4c19.1 10 36.7 22.7 52 37.9l-18.2 93.9zm-215.4 35 82-59.5 82.1 59.6-31.1 96H197.5l-31.4-96.1zm297.7 19.5L412.7 203l13.3-68.3c34.5 50.8 37.3 97.2 37.8 116zM309.2 49.2l-61.1 33.9-61-33.8c71.5-21.2 122-.1 122.1-.1zM70.3 134.1 83.5 203l-51.1 47.5c.8-31.8 8.7-63.4 23.6-92.6 4.2-8.3 9.1-16.2 14.3-23.8zm7.5 254 68.7 8.4 29.2 62.7c-38.8-13.8-72.7-38.5-97.9-71.1zm137.9 81.3-40.1-86 17.4-24.2h110.2l17.3 24.2-40.1 86c-22.7 3.5-42.4 3.4-64.7 0zm104.8-10.2 29.2-62.7 69-8.5c-25 32.6-58.8 57.1-98.2 71.2z'
          ),
          B(he, 'viewBox', '0 0 496 512'),
          B(he, 'id', 'futbol'),
          B(he, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            be,
            'd',
            'M43.7 54.5c-.3 0-.6 0-.9-.1l-32.7-6.6c-.8-.2-1.3-1-1.2-1.8.2-.8 1-1.3 1.8-1.2l32.8 6.6h.2c.1 0 .1 0 .6-.1h.1s0-.1.1-.1V51l7.1-35c0-.2 0-.4-.1-.6-.1-.1-.2-.2-.4-.3l-5.1-.8c-.8-.1-1.4-.9-1.2-1.7.1-.8.9-1.4 1.7-1.2l4.9.9c1 .2 1.8.7 2.4 1.5.6.9.8 1.9.6 2.9l-7.1 34.9c-.1 1-.8 2-1.7 2.5-.1 0-.1.1-.2.1l-.2.1c-.4 0-.9.2-1.5.2zm-4.1-11.2H4.2C2 43.3.5 41.7.5 39.6V4.2C.5 2 2.1.5 4.2.5h35.4c2.2 0 3.7 1.6 3.7 3.7v35.4c0 2.2-1.5 3.7-3.7 3.7zM3.5 36.7v2.9c0 .5.2.7.7.7h35.4c.5 0 .7-.2.7-.7v-2.9H3.5zm34.2-3h2.6V4.2c0-.5-.2-.7-.7-.7H4.2c-.5 0-.7.2-.7.7v29.5h2.6c.2-1.7.6-3.4 1.4-5.1 1.2-2.4 4.8-3.7 9.8-5.4.2-.5.2-1.7 0-2.1-2.1-2.4-3-5.2-2.8-8.1 0-2.2.6-4 1.9-5.5C17.8 5.9 19.7 5 22 5c2 0 3.9.9 5.5 2.4l.1.1c1.3 1.6 1.9 3.5 1.7 5.6.2 3-.8 5.9-2.7 7.9-.2.5-.2 1.8 0 2.3.6.2 1.3.5 1.9.7 4 1.5 6.9 2.6 7.9 4.6.7 1.7 1.2 3.4 1.3 5.1zm-28.6 0h25.6c-.2-1.3-.5-2.6-1.1-3.9-.4-.9-3.4-2-6.2-3-.7-.3-1.4-.5-2.2-.8-.5-.2-1.2-.7-1.5-1.8-.5-1.5-.3-3.9.4-4.9.1-.1.1-.2.2-.2 1.4-1.4 2.2-3.6 2-5.9v-.3c.2-1.3-.1-2.5-.9-3.4-.6-.6-1.8-1.5-3.3-1.5-1.4 0-2.5.5-3.3 1.5-.8 1-1.2 2.2-1.2 3.7v.1c-.2 2.2.5 4.2 2.1 6 .9.9 1.1 3.3.8 4.6-.4 1.6-1.3 2.1-1.8 2.3-2.8.9-7.5 2.5-8.2 3.9-.8 1-1.2 2.3-1.4 3.6zm8.2-12.6c0 .1 0 .1 0 0 0 .1 0 .1 0 0z'
          ),
          B(ve, 'viewBox', '0 0 55 55'),
          F(ve, 'enable-background', 'new 0 0 55 55'),
          B(ve, 'xml:space', 'preserve'),
          B(ve, 'id', 'gallery'),
          B(ve, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            we,
            'd',
            'M14.9 52.7c-.5 0-1.1-.1-1.6-.3-.9-.4-1.6-1.2-2-2.3L6.7 38.3c-.4-1-.4-2.1.1-3 .4-.9 1.2-1.6 2.2-1.9l2-.9c1-.4 2.1-.4 3.1 0 .9.4 1.6 1.2 2 2.3l4.6 11.8c.4 1 .4 2.1-.1 3-.4.9-1.2 1.6-2.2 1.9l-2 .9c-.5.2-1 .3-1.5.3zm-2.4-17.6c-.1 0-.2 0-.3.1l-2 .9s-.1 0-.1.1c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .7l4.7 11.9c.1.3.2.5.4.6.2.1.4.1.7 0l2-.9s.1 0 .1-.1c.2-.1.4-.2.5-.4.1-.2.1-.4 0-.7l-4.7-11.9c-.1-.3-.2-.5-.4-.6-.2-.1-.3-.1-.4-.1zM38 52.6c-.5 0-.9-.1-1.3-.3l-2.2-1c-1.9-.8-2.9-3.1-2.2-5L37 34.6c.8-2 3.1-3 5-2.2l2.2 1c.9.3 1.6 1.1 2.1 2 .5 1 .5 2 .1 3l-4.7 11.9c-.4.9-1.1 1.7-2 2.1-.6.1-1.1.2-1.7.2zm2.7-17.5c-.3 0-.7.3-.9.6l-4.7 11.9c-.2.4.1.9.6 1.1l2.2 1c.3.1.9-.2 1-.6l4.7-11.9c.1-.2.1-.4 0-.6-.1-.2-.3-.4-.5-.5l-2.2-1h-.2zm-.4 14.5zm3.7 2.9c-.2 0-.5-.1-.7-.2-.7-.4-1-1.3-.6-2 .1-.1 6.8-12.6 6.8-23.8 0-12.7-10.3-23-23-23s-23 10.3-23 23c0 11.1 6.7 23.7 6.8 23.8.4.7.1 1.6-.6 2-.7.4-1.6.1-2-.6C7.4 51.2.5 38.4.5 26.5c0-14.3 11.7-26 26-26s26 11.7 26 26c0 11.9-6.9 24.7-7.2 25.2-.3.5-.8.8-1.3.8z'
          ),
          B(xe, 'viewBox', '0 0 53 53'),
          F(xe, 'enable-background', 'new 0 0 53 53'),
          B(xe, 'xml:space', 'preserve'),
          B(xe, 'id', 'headphones'),
          B(xe, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ke,
            'd',
            'M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'
          ),
          B(ye, 'viewBox', '0 0 512 512'),
          B(ye, 'id', 'headset'),
          B(ye, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ce,
            'd',
            'M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z'
          ),
          B(ze, 'class', 'ccsvg-inline--fa ccfa-heart ccfa-w-16'),
          B(ze, 'viewBox', '0 0 512 512'),
          B(ze, 'id', 'heart'),
          B(ze, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Te,
            'd',
            'm256 96.5-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c6.3 6.5 14.5 9.7 22.7 9.7V96.5z'
          ),
          B(Me, 'viewBox', '0 0 512 512'),
          F(Me, 'enable-background', 'new 0 0 512 512'),
          B(Me, 'xml:space', 'preserve'),
          B(Me, 'id', 'heart-half-solid'),
          B(Me, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            He,
            'd',
            'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
          ),
          B(Le, 'class', 'cbsvg-inline--fa cbfa-heart cbfa-w-16'),
          B(Le, 'viewBox', '0 0 512 512'),
          B(Le, 'id', 'heart-solid'),
          B(Le, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Be,
            'd',
            'M20 24h10c6.627 0 12 5.373 12 12v94.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H164c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V36c0-6.627 5.373-12 12-12zm321.647 315.235 4.706-6.47c3.898-5.36 2.713-12.865-2.647-16.763L272 263.853V116c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v164.147l84.884 61.734c5.36 3.899 12.865 2.714 16.763-2.646z'
          ),
          B(Se, 'class', 'cdsvg-inline--fa cdfa-history cdfa-w-16'),
          B(Se, 'viewBox', '0 0 512 512'),
          B(Se, 'id', 'history'),
          B(Se, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ae,
            'd',
            'M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z'
          ),
          B(Ne, 'class', 'cfsvg-inline--fa cffa-info-circle cffa-w-16'),
          B(Ne, 'viewBox', '0 0 512 512'),
          B(Ne, 'id', 'info-circle'),
          B(Ne, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            je,
            'd',
            'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'
          ),
          B(Ee, 'class', 'cesvg-inline--fa cefa-info-circle cefa-w-16'),
          B(Ee, 'viewBox', '0 0 512 512'),
          B(Ee, 'id', 'info-circle-solid'),
          B(Ee, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Oe,
            'd',
            'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
          ),
          B(Fe, 'class', 'cgsvg-inline--fa cgfa-instagram cgfa-w-14'),
          B(Fe, 'viewBox', '0 0 448 512'),
          B(Fe, 'id', 'instagram'),
          B(Fe, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ie,
            'd',
            'M3.339 9.491.488 8.394a.733.733 0 0 1-.292-1.187L6.621.254C7.16-.332 8.156.179 7.95.938l-1.51 5.57 2.85 1.098a.733.733 0 0 1 .292 1.187l-6.425 6.953c-.541.586-1.535.075-1.33-.684l1.512-5.57Z'
          ),
          B(Ve, 'viewBox', '0 0 10 16'),
          B(Ve, 'id', 'lightning'),
          B(Ve, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            _e,
            'd',
            'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
          ),
          B(De, 'class', 'cisvg-inline--fa cifa-linkedin-in cifa-w-14'),
          B(De, 'viewBox', '0 0 448 512'),
          B(De, 'id', 'linkedin'),
          B(De, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            qe,
            'd',
            'm61.77 401 17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.84a154.82 154.82 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.3 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.73 6.13-3.2 11.72 2.62 15.94 7.71 4.69 20.39 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM12.1 320H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.33c3.28-10.29 48.33-18.68 48.33-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.45 18.75-4.38 5.59-3 10.84 2.79 15.37l8.58 6.88c5.61 4.56 11 2.47 16.13-2.44a13.4 13.4 0 0 1 9.45-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.1 320zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm488-80H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8zm0 320H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-160H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z'
          ),
          B(Pe, 'viewBox', '0 0 512 512'),
          B(Pe, 'id', 'list-ol'),
          B(Pe, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            We,
            'd',
            'M400 224h-16v-62.5C384 73.1 312.9.3 224.5 0 136-.3 64 71.6 64 160v64H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM96 160c0-70.6 57.4-128 128-128s128 57.4 128 128v64H96v-64zm304 320H48c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z'
          ),
          B(Re, 'class', 'cksvg-inline--fa ckfa-lock ckfa-w-14'),
          B(Re, 'viewBox', '0 0 448 512'),
          B(Re, 'id', 'lock'),
          B(Re, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ue,
            'd',
            'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
          ),
          B(Ge, 'class', 'clsvg-inline--fa clfa-map-marker-alt clfa-w-12'),
          B(Ge, 'viewBox', '0 0 384 512'),
          B(Ge, 'id', 'mappin-solid'),
          B(Ge, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(Ye, 'd', 'M0 70.7h63.3v10.9H0z'),
          B(Xe, 'd', 'm0 81.5 21.2-19.7v-14L0 67.5z'),
          B(
            Qe,
            'd',
            'M31.8 0C14.2 0 0 14.2 0 31.8c0 13.8 8.9 25.6 21.2 30v-14c-5.2-3.4-8.6-9.3-8.6-16 0-10.6 8.6-19.2 19.2-19.2S51 21.2 51 31.8c0 6.7-3.4 12.5-8.6 16v14c12.3-4.4 21.2-16.1 21.2-30C63.6 14.2 49.3 0 31.8 0z'
          ),
          B(Ke, 'd', 'M63.6 81.5 42.4 61.7V47.8l21.2 19.7z'),
          B(Ze, 'viewBox', '0 0 63.6 81.5'),
          F(Ze, 'enable-background', 'new 0 0 63.6 81.5'),
          B(Ze, 'xml:space', 'preserve'),
          B(Ze, 'id', 'medielogin'),
          B(Ze, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            tn,
            'd',
            'M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z'
          ),
          B(Je, 'class', 'cosvg-inline--fa cofa-bars cofa-w-14'),
          B(Je, 'viewBox', '0 0 448 512'),
          B(Je, 'id', 'menubars'),
          B(Je, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(nn, 'd', 'M0 4.3h30v4H0zM0 12.3h30v4H0zM0 20.3h30v4H0z'),
          B(en, 'viewBox', '0 0 30 30'),
          B(en, 'xml:space', 'preserve'),
          B(en, 'id', 'menubars-solid'),
          B(en, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            an,
            'd',
            'M475 63.5v201.7H316V63.5h159m-279.1 0v86h-159v-86h159m0 208.8v176.2h-159V272.3h159M475 387.1v61.4H316v-61.4h159m14.4-360.6H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zm-279.1 0H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zm0 208.8H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zm279.1 114.8H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3z'
          ),
          B(sn, 'viewBox', '0 0 512 512'),
          F(sn, 'enable-background', 'new 0 0 512 512'),
          B(sn, 'xml:space', 'preserve'),
          B(sn, 'id', 'miteb'),
          B(sn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ln,
            'd',
            'M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zm279.1 0H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zm279.1 114.8H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3z'
          ),
          B(rn, 'viewBox', '0 0 512 512'),
          B(rn, 'xml:space', 'preserve'),
          B(rn, 'id', 'miteb-solid'),
          B(rn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            cn,
            'd',
            'M35.8 38.5H6.2c-3.5 0-6.2-2.7-6.2-6.2V2.7C0 1.2 1.2 0 2.7 0h26.1c1.6 0 2.7 1.2 2.7 2.7v29.6c0 2.4 1.8 4.2 4.2 4.2s4.2-1.8 4.2-4.2V6.2c0-.6.4-1 1-1s1 .4 1 1v26.1c.1 3.5-2.6 6.2-6.1 6.2zM2.7 2c-.5 0-.7.2-.7.7v29.6c0 2.4 1.8 4.2 4.2 4.2h25c-1-1.1-1.6-2.6-1.6-4.2V2.7c0-.5-.2-.7-.7-.7H2.7zm33.1 31.8c-.6 0-1-.4-1-1V6.2c0-.6.4-1 1-1s1 .4 1 1v26.5c0 .6-.5 1.1-1 1.1zm-10.5-4H6.2c-.6 0-1-.4-1-1s.4-1 1-1h19.1c.6 0 1 .4 1 1s-.4 1-1 1zm0-5.2H6.2c-.6 0-1-.4-1-1s.4-1 1-1h19.1c.6 0 1 .4 1 1s-.4 1-1 1zm0-5.2h-4.9c-.6 0-1-.4-1-1s.4-1 1-1h4.9c.6 0 1 .4 1 1s-.4 1-1 1zm-9.5 0H7.1c-1.1 0-1.9-.8-1.9-1.9V8.8C5.2 7.8 6 7 7.1 7h8.7c1.1 0 1.9.8 1.9 1.9v8.7c0 1-.9 1.8-1.9 1.8zm-8.6-2h8.4V9H7.2v8.4zm18.1-3.2h-4.9c-.6 0-1-.4-1-1s.4-1 1-1h4.9c.6 0 1 .4 1 1s-.4 1-1 1zm0-5.2h-4.9c-.6 0-1-.4-1-1s.4-1 1-1h4.9c.6 0 1 .4 1 1s-.4 1-1 1z'
          ),
          B(on, 'viewBox', '0 0 42 39'),
          F(on, 'enable-background', 'new 0 0 42 39'),
          B(on, 'xml:space', 'preserve'),
          B(on, 'id', 'newspaper'),
          B(on, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            un,
            'd',
            'M218 160h-20c-3.3 0-6 2.7-6 6v180c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V166c0-3.3-2.7-6-6-6zm96 0h-20c-3.3 0-6 2.7-6 6v180c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V166c0-3.3-2.7-6-6-6zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216z'
          ),
          B(dn, 'viewBox', '0 0 512 512'),
          B(dn, 'id', 'pause-circle'),
          B(dn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            gn,
            'd',
            'M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z'
          ),
          B(fn, 'viewBox', '0 0 448 512'),
          B(fn, 'id', 'pause-solid'),
          B(fn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            mn,
            'd',
            'M12.9 14.2h-.2c-6.3-.6-11.3-5.7-12-12 0-.5.1-.9.4-1.3.4-.3.9-.5 1.4-.5h2.3c.8 0 1.5.5 1.7 1.2l.7 2.2c.2.6 0 1.3-.4 1.8l-.4.4s-.1.1 0 .2c.7 1 1.3 1.6 2.4 2.4H9l.4-.4c.5-.5 1.2-.6 1.8-.4l2.2.7c.7.2 1.2.9 1.2 1.7v2.3c0 .5-.2 1-.6 1.3-.3.2-.7.4-1.1.4zM2.5 1.4c-.2 0-.4.1-.6.2-.1.2-.2.3-.1.5.5 5.9 5.2 10.5 11 11.1.2 0 .4 0 .5-.2.2-.1.2-.3.2-.6v-2.3c0-.3-.2-.6-.5-.7l-2.2-.7c-.3-.1-.6 0-.8.2l-.4.3c-.4.4-1 .4-1.4.1C7 8.5 6.3 7.9 5.6 6.7c-.3-.4-.2-1 .1-1.4l.4-.3c.2-.2.3-.5.2-.8l-.8-2.3c-.1-.3-.4-.5-.7-.5H2.5zM14 5.2c-.3 0-.5-.2-.5-.5 0-1.9-1.5-3.4-3.4-3.4-.3 0-.5-.2-.5-.5s.2-.5.5-.5c2.4 0 4.4 2 4.4 4.4 0 .3-.2.5-.5.5zm-2.5 0c-.3 0-.5-.2-.5-.4 0-.5-.4-.8-.8-.8-.3 0-.5-.3-.5-.5s.2-.5.5-.5c1 0 1.8.8 1.8 1.8 0 .2-.2.4-.5.4z'
          ),
          B(pn, 'viewBox', '0 0 15 15'),
          F(pn, 'enable-background', 'new 0 0 15 15'),
          B(pn, 'xml:space', 'preserve'),
          B(pn, 'id', 'phone'),
          B(pn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            $n,
            'd',
            'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z'
          ),
          B(hn, 'class', 'cvsvg-inline--fa cvfa-map-marker cvfa-w-12'),
          B(hn, 'viewBox', '0 0 384 512'),
          B(hn, 'id', 'pin-solid'),
          B(hn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            bn,
            'd',
            'M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z'
          ),
          B(vn, 'class', 'cwsvg-inline--fa cwfa-play-circle cwfa-w-16'),
          B(vn, 'viewBox', '0 0 512 512'),
          B(vn, 'id', 'play-circle'),
          B(vn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            wn,
            'd',
            'M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'
          ),
          B(xn, 'viewBox', '0 0 448 512'),
          B(xn, 'id', 'play-solid'),
          B(xn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            kn,
            'd',
            'M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z'
          ),
          B(yn, 'class', 'cysvg-inline--fa cyfa-question-circle cyfa-w-16'),
          B(yn, 'viewBox', '0 0 512 512'),
          B(yn, 'id', 'question-circle'),
          B(yn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Cn,
            'd',
            'M0 9V.4h3.7c.9 0 1.6.1 2 .2.4.2.8.4 1 .8.2.5.3.9.3 1.4 0 .7-.2 1.2-.5 1.6-.4.4-1 .7-1.7.8.4.2.7.5.9.7.2.3.6.7 1 1.4l1 1.7H5.6L4.4 7.1c-.5-.6-.8-1.1-.9-1.2-.2-.2-.4-.3-.5-.4-.2-.1-.5-.1-.9-.1h-.4V9H0zm1.7-5H3c.8 0 1.4 0 1.6-.1s.4-.2.5-.4c.1-.2.2-.4.2-.6 0-.3-.1-.5-.2-.7-.2-.1-.5-.3-.7-.3H1.7V4zM8.2 6.2 9.9 6c.1.6.3 1 .6 1.2.3.3.7.4 1.3.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2-.1-.4-.2-.5-.1-.1-.3-.3-.6-.4-.2-.1-.7-.2-1.4-.4-.9-.2-1.6-.5-2-.8-.5-.5-.8-1-.8-1.7 0-.4.1-.8.4-1.2.3-.3.6-.6 1.1-.8.5-.2 1-.3 1.7-.3 1.1 0 1.9.2 2.4.7.5.5.8 1.1.9 1.9l-1.7.1c-.1-.5-.3-.8-.5-1-.2-.2-.6-.3-1.1-.3-.5 0-.9.1-1.2.3-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.8.4 1.6.6.8.2 1.5.4 1.9.6.4.2.7.5.9.9.2.4.3.8.3 1.4 0 .5-.1 1-.4 1.4-.3.4-.7.8-1.2 1-.5.2-1.1.3-1.9.3-1.1 0-1.9-.2-2.5-.8-.5-.5-.9-1.2-1-2.2zM16.2 6.2l1.7-.2c.1.6.3 1 .6 1.2.3.3.7.4 1.3.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2-.1-.4-.2-.5-.1-.1-.3-.3-.6-.4-.2-.1-.7-.2-1.4-.4-.9-.2-1.6-.5-2-.8-.5-.5-.8-1-.8-1.7 0-.4.1-.8.4-1.2.2-.4.6-.7 1.1-.9.5-.2 1-.3 1.7-.3 1.1 0 1.9.2 2.4.7.5.5.8 1.1.9 1.9l-1.7.1c-.1-.4-.3-.7-.5-.9-.2-.2-.6-.3-1.1-.3-.5 0-.9.1-1.2.3-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.8.4 1.6.6.8.2 1.5.4 1.9.6.4.2.7.5.9.9.2.4.3.8.3 1.4 0 .5-.1 1-.4 1.4-.3.4-.7.8-1.2 1-.5.2-1.1.3-1.9.3-1.1 0-1.9-.2-2.5-.8-.5-.5-.9-1.2-1-2.2z'
          ),
          B(zn, 'viewBox', '0 0 24 10'),
          F(zn, 'enable-background', 'new 0 0 24 10'),
          B(zn, 'xml:space', 'preserve'),
          B(zn, 'id', 'rss'),
          B(zn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Tn,
            'd',
            'M80 352c26.467 0 48 21.533 48 48s-21.533 48-48 48-48-21.533-48-48 21.533-48 48-48m0-32c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.448-237.848-198.06-429.164-435.61-435.61C5.609 31.821 0 37.229 0 44.007v8.006c0 6.482 5.146 11.816 11.626 11.994 220.81 6.05 398.319 183.913 404.367 404.367.178 6.48 5.512 11.626 11.994 11.626h8.007c6.778 0 12.185-5.609 12.002-12.385zm-144.245-.05c-6.347-158.132-133.207-284.97-291.316-291.316C5.643 175.976 0 181.45 0 188.247v8.005c0 6.459 5.114 11.72 11.567 11.989 141.134 5.891 254.301 119.079 260.192 260.192.269 6.453 5.531 11.567 11.989 11.567h8.005c6.798 0 12.271-5.643 11.998-12.435z'
          ),
          B(Mn, 'class', 'czsvg-inline--fa czfa-rss czfa-w-14'),
          B(Mn, 'viewBox', '0 0 448 512'),
          B(Mn, 'id', 'rss-symbol'),
          B(Mn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Hn,
            'd',
            'm508.5 481.6-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z'
          ),
          B(Ln, 'class', 'dbsvg-inline--fa dbfa-search dbfa-w-16'),
          B(Ln, 'viewBox', '0 0 512 512'),
          B(Ln, 'id', 'search'),
          B(Ln, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Bn,
            'd',
            'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z'
          ),
          B(Sn, 'viewBox', '0 0 320 512'),
          B(Sn, 'id', 'smartphone'),
          B(Sn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            An,
            'd',
            'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z'
          ),
          B(Nn, 'class', 'ddsvg-inline--fa ddfa-square ddfa-w-14'),
          B(Nn, 'viewBox', '0 0 448 512'),
          B(Nn, 'id', 'square'),
          B(Nn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            jn,
            'd',
            'M528.1 171.5 382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z'
          ),
          B(En, 'class', 'dgsvg-inline--fa dgfa-star dgfa-w-18'),
          B(En, 'viewBox', '0 0 576 512'),
          B(En, 'id', 'star'),
          B(En, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            On,
            'd',
            'M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z'
          ),
          B(Fn, 'class', 'desvg-inline--fa defa-star-half defa-w-18'),
          B(Fn, 'viewBox', '0 0 576 512'),
          B(Fn, 'id', 'star-half-solid'),
          B(Fn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            In,
            'd',
            'M259.3 17.8 194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
          ),
          B(Vn, 'class', 'dfsvg-inline--fa dffa-star dffa-w-18'),
          B(Vn, 'viewBox', '0 0 576 512'),
          B(Vn, 'id', 'star-solid'),
          B(Vn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            _n,
            'd',
            'm457.373 9.387-50.095 50.102C365.411 27.211 312.953 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h10.015c6.352 0 11.647-4.949 11.977-11.293C48.159 131.913 141.389 42 256 42c47.554 0 91.487 15.512 127.02 41.75l-53.615 53.622c-20.1 20.1-5.855 54.628 22.627 54.628H480c17.673 0 32-14.327 32-32V32.015c0-28.475-34.564-42.691-54.627-22.628zM480 160H352L480 32v128zm11.699 96h-10.014c-6.353 0-11.647 4.949-11.977 11.293C463.84 380.203 370.504 470 256 470c-47.525 0-91.468-15.509-127.016-41.757l53.612-53.616c20.099-20.1 5.855-54.627-22.627-54.627H32c-17.673 0-32 14.327-32 32v127.978c0 28.614 34.615 42.641 54.627 22.627l50.092-50.096C146.587 484.788 199.046 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507zM32 480V352h128L32 480z'
          ),
          B(Dn, 'class', 'dhsvg-inline--fa dhfa-sync-alt dhfa-w-16'),
          B(Dn, 'viewBox', '0 0 512 512'),
          B(Dn, 'id', 'sync'),
          B(Dn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            qn,
            'd',
            'M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z'
          ),
          B(Pn, 'class', 'disvg-inline--fa difa-tablet-alt difa-w-14'),
          B(Pn, 'viewBox', '0 0 448 512'),
          B(Pn, 'id', 'tablet'),
          B(Pn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Wn,
            'd',
            'M497.941 225.941 286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zm-22.627 45.255L271.196 475.314c-6.243 6.243-16.375 6.253-22.627 0L36.686 263.431A15.895 15.895 0 0 1 32 252.117V48c0-8.822 7.178-16 16-16h204.118c4.274 0 8.292 1.664 11.314 4.686l211.882 211.882c6.238 6.239 6.238 16.39 0 22.628zM144 124c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
          ),
          B(Rn, 'class', 'dksvg-inline--fa dkfa-tag dkfa-w-16'),
          B(Rn, 'viewBox', '0 0 512 512'),
          B(Rn, 'id', 'tag'),
          B(Rn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Un,
            'd',
            'M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
          ),
          B(Gn, 'class', 'djsvg-inline--fa djfa-tag djfa-w-16'),
          B(Gn, 'viewBox', '0 0 512 512'),
          B(Gn, 'id', 'tag-solid'),
          B(Gn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Yn,
            'd',
            'M625.941 293.823 421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-1.775-1.775 22.627-22.627 1.775 1.775c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L391.431 36.686A15.895 15.895 0 0 0 380.117 32h-19.549l-32-32h51.549a48 48 0 0 1 33.941 14.059L625.94 225.941c18.746 18.745 18.746 49.137.001 67.882zM252.118 32H48c-8.822 0-16 7.178-16 16v204.118c0 4.274 1.664 8.292 4.686 11.314l211.882 211.882c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L263.431 36.686A15.895 15.895 0 0 0 252.118 32m0-32a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.746 18.746-49.138 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118zM144 124c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20-8.972-20-20-20m0-28c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z'
          ),
          B(Zn, 'class', 'dmsvg-inline--fa dmfa-tags dmfa-w-20'),
          B(Zn, 'viewBox', '0 0 640 512'),
          B(Zn, 'id', 'tags'),
          B(Zn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Qn,
            'd',
            'M497.941 225.941 286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z'
          ),
          B(Xn, 'class', 'dlsvg-inline--fa dlfa-tags dlfa-w-20'),
          B(Xn, 'viewBox', '0 0 640 512'),
          B(Xn, 'id', 'tags-solid'),
          B(Xn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Jn,
            'd',
            'M193.94 256 296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'
          ),
          B(Kn, 'class', 'dpsvg-inline--fa dpfa-times dpfa-w-10'),
          B(Kn, 'viewBox', '0 0 320 512'),
          B(Kn, 'id', 'times'),
          B(Kn, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            es,
            'd',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z'
          ),
          B(ts, 'class', 'dosvg-inline--fa dofa-times-circle dofa-w-16'),
          B(ts, 'viewBox', '0 0 512 512'),
          B(ts, 'id', 'times-circle'),
          B(ts, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ss,
            'd',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'
          ),
          B(ns, 'class', 'dnsvg-inline--fa dnfa-times-circle dnfa-w-16'),
          B(ns, 'viewBox', '0 0 512 512'),
          B(ns, 'id', 'times-circle-solid'),
          B(ns, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            rs,
            'd',
            'M384 96c42.738 0 82.917 16.643 113.137 46.863S544 213.262 544 256s-16.643 82.917-46.863 113.137S426.738 416 384 416H192c-42.738 0-82.917-16.643-113.137-46.863S32 298.738 32 256s16.643-82.917 46.863-113.137S149.262 96 192 96h192m0-32H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zm-192 96c52.935 0 96 43.065 96 96s-43.065 96-96 96-96-43.065-96-96 43.065-96 96-96m0-32c-70.692 0-128 57.307-128 128s57.308 128 128 128 128-57.307 128-128-57.308-128-128-128z'
          ),
          B(as, 'class', 'dqsvg-inline--fa dqfa-toggle-off dqfa-w-18'),
          B(as, 'viewBox', '0 0 576 512'),
          B(as, 'id', 'toggle-off'),
          B(as, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            is,
            'd',
            'M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z'
          ),
          B(ls, 'class', 'drsvg-inline--fa drfa-toggle-on drfa-w-18'),
          B(ls, 'viewBox', '0 0 576 512'),
          B(ls, 'id', 'toggle-on'),
          B(ls, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            cs,
            'd',
            'M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z'
          ),
          B(os, 'class', 'dtsvg-inline--fa dtfa-trash-alt dtfa-w-14'),
          B(os, 'viewBox', '0 0 448 512'),
          B(os, 'id', 'trash'),
          B(os, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            us,
            'd',
            'M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'
          ),
          B(ds, 'class', 'dssvg-inline--fa dsfa-trash-alt dsfa-w-14'),
          B(ds, 'viewBox', '0 0 448 512'),
          B(ds, 'id', 'trash-solid'),
          B(ds, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            gs,
            'd',
            'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
          ),
          B(fs, 'class', 'dusvg-inline--fa dufa-twitter dufa-w-16'),
          B(fs, 'viewBox', '0 0 512 512'),
          B(fs, 'id', 'twitter'),
          B(fs, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ms,
            'd',
            'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z'
          ),
          B(ps, 'class', 'dwsvg-inline--fa dwfa-user-circle dwfa-w-16'),
          B(ps, 'viewBox', '0 0 496 512'),
          B(ps, 'id', 'user-circle'),
          B(ps, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            $s,
            'd',
            'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'
          ),
          B(hs, 'class', 'dvsvg-inline--fa dvfa-user-circle dvfa-w-16'),
          B(hs, 'viewBox', '0 0 496 512'),
          B(hs, 'id', 'user-circle-solid'),
          B(hs, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            bs,
            'd',
            'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
          ),
          B(vs, 'class', 'dxsvg-inline--fa dxfa-user dxfa-w-14'),
          B(vs, 'viewBox', '0 0 448 512'),
          B(vs, 'id', 'user-solid'),
          B(vs, 'xmlns', 'http://www.w3.org/2000/svg');
        B(
          ws,
          'd',
          'M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm244 192h-40c-15.2 0-29.3 4.8-41.1 12.9 9.4 6.4 17.9 13.9 25.4 22.4 4.9-2.1 10.2-3.3 15.7-3.3h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm304.1 180c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM480 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zM157.1 268.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4z'
        ),
          B(xs, 'viewBox', '0 0 640 512'),
          B(xs, 'id', 'users'),
          B(xs, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            ks,
            'd',
            'M45 47.5H6.1C3 47.5.5 45 .5 41.9V6.1C.5 3 3 .5 6.1.5H45c3.1 0 5.6 2.5 5.6 5.6v35.8c0 3.1-2.5 5.6-5.6 5.6zM6.1 3.5c-1.4 0-2.6 1.2-2.6 2.6v35.8c0 1.4 1.2 2.6 2.6 2.6H45c1.4 0 2.6-1.2 2.6-2.6V6.1c0-1.4-1.2-2.6-2.6-2.6H6.1zm24.6 39.9c-2.1 0-3.5-1.5-3.5-3.5v-.5h-19c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h19v-.5c0-2.1 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v.5H43c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.7v.5c-.1 2-1.5 3.5-3.6 3.5zm-.6-5.6v2c0 .4.1.5.5.5s.5-.1.5-.5v-4.1c0-.4-.1-.5-.5-.5s-.5.1-.5.5v2.1zm-9.9-7.5c-.5 0-.9-.1-1.3-.4-.8-.5-1.3-1.3-1.3-2.3V13.7c0-1 .6-1.9 1.4-2.4.9-.5 1.9-.4 2.6.1l12 6.9c.8.4 1.4 1.3 1.4 2.3 0 1-.6 1.9-1.4 2.4l-12 6.9h-.1c-.4.3-.9.4-1.3.4zm.6-1.6zm.1-1.1zm-.2-13.3V27l11-6.3-11-6.4zM32.2 21zm0-.6zm-12.4-6.6z'
          ),
          B(ys, 'viewBox', '0 0 51 48'),
          F(ys, 'enable-background', 'new 0 0 51 48'),
          B(ys, 'xml:space', 'preserve'),
          B(ys, 'id', 'video'),
          B(ys, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(Cs, 'width', '26'),
          B(Cs, 'height', '26'),
          B(Cs, 'rx', '4'),
          B(Cs, 'fill', '#fff'),
          B(Ms, 'fill-rule', 'evenodd'),
          B(Ms, 'clip-rule', 'evenodd'),
          B(
            Ms,
            'd',
            'M8 8.587c0-1.223 1.349-1.985 2.423-1.369l7.778 4.463a1.572 1.572 0 0 1 0 2.738l-7.778 4.463C9.349 19.498 8 18.736 8 17.513V8.587Z'
          ),
          B(Ms, 'fill', '#000'),
          B(zs, 'class', 'eivideo-icon'),
          B(zs, 'fill', 'none'),
          F(zs, 'box-shadow', '0 6px 15px rgba(0,0,0,.12)'),
          F(zs, 'border-radius', '4px'),
          B(zs, 'viewBox', '0 0 26 26'),
          B(zs, 'id', 'video-graphic'),
          B(zs, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ls,
            'd',
            'm633.82 458.1-69-53.33C592.42 360.8 608 309.68 608 256c0-95.33-47.73-183.58-127.65-236.03-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 42.78-11.96 83.59-33.22 119.06l-38.12-29.46C503.49 318.68 512 288.06 512 256c0-63.09-32.06-122.09-85.77-156.16-11.19-7.09-26.03-3.8-33.12 7.41-7.09 11.2-3.78 26.03 7.41 33.13C440.27 165.59 464 209.44 464 256c0 21.21-5.03 41.57-14.2 59.88l-39.56-30.58c3.38-9.35 5.76-19.07 5.76-29.3 0-31.88-17.53-61.33-45.77-76.88-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61 11.76 6.46 19.12 18.18 20.4 31.06L288 190.82V88.02c0-21.46-25.96-31.98-40.97-16.97l-49.71 49.7L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM32 184v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V352.6L43.76 163.84C36.86 168.05 32 175.32 32 184z'
          ),
          B(Ts, 'class', 'easvg-inline--fa eafa-volume-slash eafa-w-20'),
          B(Ts, 'viewBox', '0 0 640 512'),
          B(Ts, 'id', 'volume-muted-solid'),
          B(Ts, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ss,
            'd',
            'M215.03 71.05 126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z'
          ),
          B(Hs, 'class', 'ebsvg-inline--fa ebfa-volume-up ebfa-w-18'),
          B(Hs, 'viewBox', '0 0 576 512'),
          B(Hs, 'id', 'volume-up-solid'),
          B(Hs, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(
            Ns,
            'd',
            'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
          ),
          B(Bs, 'class', 'ecsvg-inline--fa ecfa-youtube ecfa-w-18'),
          B(Bs, 'viewBox', '0 0 576 512'),
          B(Bs, 'id', 'youtube'),
          B(Bs, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
      },
      m(t, e) {
        w(t, n, e),
          x(n, s),
          x(s, a),
          x(n, r),
          x(r, l),
          x(n, i),
          x(i, o),
          x(n, c),
          x(c, d),
          x(n, u),
          x(u, f),
          x(n, g),
          x(g, p),
          x(n, m),
          x(m, h),
          x(n, $),
          x($, v),
          x(n, b),
          x(b, k),
          x(n, z),
          x(z, M),
          x(n, T),
          x(T, L),
          x(n, H),
          x(H, S),
          x(n, N),
          x(N, A),
          x(n, E),
          x(E, j),
          x(n, O),
          x(O, V),
          x(n, I),
          x(I, D),
          x(n, _),
          x(_, P),
          x(n, q),
          x(q, R),
          x(n, W),
          x(W, G),
          x(n, U),
          x(U, Z),
          x(n, Y),
          x(Y, X),
          x(n, Q),
          x(Q, K),
          x(n, J),
          x(J, tt),
          x(n, et),
          x(et, nt),
          x(n, st),
          x(st, at),
          x(n, rt),
          x(rt, lt),
          x(n, it),
          x(it, ot),
          x(n, ct),
          x(ct, dt),
          x(n, ut),
          x(ut, ft),
          x(n, gt),
          x(gt, pt),
          x(n, mt),
          x(mt, ht),
          x(n, $t),
          x($t, vt),
          x(n, bt),
          x(bt, xt),
          x(n, wt),
          x(wt, yt),
          x(n, kt),
          x(kt, zt),
          x(n, Ct),
          x(Ct, Mt),
          x(n, Tt),
          x(Tt, Lt),
          x(n, Ht),
          x(Ht, St),
          x(Ht, Bt),
          x(Ht, Nt),
          x(n, At),
          x(At, Et),
          x(n, jt),
          x(jt, Ft),
          x(jt, Ot),
          x(jt, Vt),
          x(n, It),
          x(It, Dt),
          x(It, _t),
          x(It, Pt),
          x(n, qt),
          x(qt, Rt),
          x(n, Wt),
          x(Wt, Gt),
          x(Wt, Ut),
          x(Wt, Zt),
          x(n, Yt),
          x(Yt, Xt),
          x(n, Qt),
          x(Qt, Kt),
          x(n, Jt),
          x(Jt, te),
          x(n, ee),
          x(ee, ne),
          x(n, se),
          x(se, ae),
          x(n, re),
          x(re, le),
          x(n, ie),
          x(ie, oe),
          x(n, ce),
          x(ce, de),
          x(n, ue),
          x(ue, fe),
          x(ue, ge),
          x(n, pe),
          x(pe, me),
          x(n, he),
          x(he, $e),
          x(n, ve),
          x(ve, be),
          x(n, xe),
          x(xe, we),
          x(n, ye),
          x(ye, ke),
          x(n, ze),
          x(ze, Ce),
          x(n, Me),
          x(Me, Te),
          x(n, Le),
          x(Le, He),
          x(n, Se),
          x(Se, Be),
          x(n, Ne),
          x(Ne, Ae),
          x(n, Ee),
          x(Ee, je),
          x(n, Fe),
          x(Fe, Oe),
          x(n, Ve),
          x(Ve, Ie),
          x(n, De),
          x(De, _e),
          x(n, Pe),
          x(Pe, qe),
          x(n, Re),
          x(Re, We),
          x(n, Ge),
          x(Ge, Ue),
          x(n, Ze),
          x(Ze, Ye),
          x(Ze, Xe),
          x(Ze, Qe),
          x(Ze, Ke),
          x(n, Je),
          x(Je, tn),
          x(n, en),
          x(en, nn),
          x(n, sn),
          x(sn, an),
          x(n, rn),
          x(rn, ln),
          x(n, on),
          x(on, cn),
          x(n, dn),
          x(dn, un),
          x(n, fn),
          x(fn, gn),
          x(n, pn),
          x(pn, mn),
          x(n, hn),
          x(hn, $n),
          x(n, vn),
          x(vn, bn),
          x(n, xn),
          x(xn, wn),
          x(n, yn),
          x(yn, kn),
          x(n, zn),
          x(zn, Cn),
          x(n, Mn),
          x(Mn, Tn),
          x(n, Ln),
          x(Ln, Hn),
          x(n, Sn),
          x(Sn, Bn),
          x(n, Nn),
          x(Nn, An),
          x(n, En),
          x(En, jn),
          x(n, Fn),
          x(Fn, On),
          x(n, Vn),
          x(Vn, In),
          x(n, Dn),
          x(Dn, _n),
          x(n, Pn),
          x(Pn, qn),
          x(n, Rn),
          x(Rn, Wn),
          x(n, Gn),
          x(Gn, Un),
          x(n, Zn),
          x(Zn, Yn),
          x(n, Xn),
          x(Xn, Qn),
          x(n, Kn),
          x(Kn, Jn),
          x(n, ts),
          x(ts, es),
          x(n, ns),
          x(ns, ss),
          x(n, as),
          x(as, rs),
          x(n, ls),
          x(ls, is),
          x(n, os),
          x(os, cs),
          x(n, ds),
          x(ds, us),
          x(n, fs),
          x(fs, gs),
          x(n, ps),
          x(ps, ms),
          x(n, hs),
          x(hs, $s),
          x(n, vs),
          x(vs, bs),
          x(n, xs),
          x(xs, ws),
          x(n, ys),
          x(ys, ks),
          x(n, zs),
          x(zs, Cs),
          x(zs, Ms),
          x(n, Ts),
          x(Ts, Ls),
          x(n, Hs),
          x(Hs, Ss),
          x(n, Bs),
          x(Bs, Ns);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  class rf extends kt {
    constructor(t) {
      super(), yt(this, t, null, af, l, {});
    }
  }
  function lf(e) {
    let n, s;
    return {
      c() {
        (n = C('svg')),
          (s = C('path')),
          B(s, 'fill', 'currentColor'),
          B(
            s,
            'd',
            'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
          ),
          B(n, 'style', e[0]),
          B(n, 'aria-hidden', 'true'),
          B(n, 'focusable', 'false'),
          B(n, 'data-prefix', 'fab'),
          B(n, 'data-icon', 'github'),
          B(n, 'class', 'svg-inline--fa fa-github fa-w-16'),
          B(n, 'role', 'img'),
          B(n, 'xmlns', 'http://www.w3.org/2000/svg'),
          B(n, 'viewBox', '0 0 496 512');
      },
      m(t, e) {
        w(t, n, e), x(n, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && y(n);
      },
    };
  }
  function of(t, e, n) {
    let { height: s = 'auto' } = e,
      { width: a = 'auto' } = e;
    const r = `\n    height: ${'number' == typeof s ? `${s}px` : s};\n    width: ${
      'number' == typeof a ? `${a}px` : a
    };`;
    return (
      (t.$$set = (t) => {
        'height' in t && n(1, (s = t.height)), 'width' in t && n(2, (a = t.width));
      }),
      [r, s, a]
    );
  }
  class cf extends kt {
    constructor(t) {
      super(), yt(this, t, of, lf, l, { height: 1, width: 2 });
    }
  }
  function df(t) {
    let e, n, s, r, l, i, o, c, d;
    return {
      c() {
        (e = z('button')),
          (n = M('Svelte')),
          (r = T()),
          (l = z('button')),
          (i = M('HTML')),
          B(e, 'class', 'button button--small'),
          B(e, 'data-selected', (s = 'svelte' === t[0])),
          B(l, 'class', 'button button--small'),
          B(l, 'data-selected', (o = 'html' === t[0]));
      },
      m(s, a) {
        w(s, e, a),
          x(e, n),
          w(s, r, a),
          w(s, l, a),
          x(l, i),
          c || ((d = [H(e, 'click', t[2]), H(l, 'click', t[3])]), (c = !0));
      },
      p(t, n) {
        1 & n && s !== (s = 'svelte' === t[0]) && B(e, 'data-selected', s),
          1 & n && o !== (o = 'html' === t[0]) && B(l, 'data-selected', o);
      },
      d(t) {
        t && y(e), t && y(r), t && y(l), (c = !1), a(d);
      },
    };
  }
  function uf(t) {
    let e, n, s, a, r, l, i, o, c;
    return (
      (a = new cf({ props: { width: 20 } })),
      (o = new ln({ props: { type: 'secondary', $$slots: { default: [df] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = z('div')),
            (n = z('nav')),
            (s = z('a')),
            bt(a.$$.fragment),
            (r = T()),
            (l = z('span')),
            (l.textContent = 'Github'),
            (i = T()),
            bt(o.$$.fragment),
            B(l, 'class', 'flex flex-align--end padding-s--l'),
            B(s, 'href', 'https://github.com/EkstraBladetUdvikling/eb-designsystem'),
            B(s, 'target', '_blank'),
            B(s, 'class', 'flex svelte-1bwbuf8'),
            B(s, 'rel', 'noreferrer'),
            B(n, 'class', 'navmenu flex flex-justify--between flex-align--center padding-xl--rl svelte-1bwbuf8'),
            B(e, 'class', 'navmenu-container position-fixed margin-xl--b bg-red svelte-1bwbuf8');
        },
        m(t, d) {
          w(t, e, d), x(e, n), x(n, s), xt(a, s, null), x(s, r), x(s, l), x(n, i), xt(o, n, null), (c = !0);
        },
        p(t, [e]) {
          const n = {};
          17 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n);
        },
        i(t) {
          c || (pt(a.$$.fragment, t), pt(o.$$.fragment, t), (c = !0));
        },
        o(t) {
          mt(a.$$.fragment, t), mt(o.$$.fragment, t), (c = !1);
        },
        d(t) {
          t && y(e), wt(a), wt(o);
        },
      }
    );
  }
  function ff(t, e, n) {
    let s;
    function a(t) {
      Yn.set(t);
    }
    u(t, Yn, (t) => n(0, (s = t)));
    return [s, a, () => a('svelte'), () => a('html')];
  }
  class gf extends kt {
    constructor(t) {
      super(), yt(this, t, ff, uf, l, {});
    }
  }
  function pf(t, e, n) {
    const s = t.slice();
    return (s[1] = e[n]), s;
  }
  function mf(t, e, n) {
    const s = t.slice();
    return (s[4] = e[n]), s;
  }
  function hf(t) {
    let e,
      n,
      s,
      a,
      r,
      l = t[4].title + '';
    return {
      c() {
        (e = z('a')),
          (n = M(l)),
          (s = T()),
          B(e, 'class', 'sidebar-item width-1of1 padding-m--t padding-m--rl svelte-2rfg6s'),
          B(e, 'href', '#a11y'),
          I(e, 'active-item', t[4].href === t[0]);
      },
      m(l, i) {
        w(l, e, i), x(e, n), x(e, s), a || ((r = b(jt.call(null, e, { disabled: !1, href: t[4].href }))), (a = !0));
      },
      p(n, s) {
        (t = n), 1 & s && I(e, 'active-item', t[4].href === t[0]);
      },
      d(t) {
        t && y(e), (a = !1), r();
      },
    };
  }
  function $f(t) {
    let e,
      n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d = t[1].title + '',
      u = t[1].routes,
      f = [];
    for (let e = 0; e < u.length; e += 1) f[e] = hf(mf(t, u, e));
    return {
      c() {
        (e = z('div')), (n = z('div')), (s = z('a')), (a = M(d)), (r = T()), (l = z('div'));
        for (let t = 0; t < f.length; t += 1) f[t].c();
        (i = T()),
          B(s, 'href', '#a11y'),
          B(s, 'class', 'svelte-2rfg6s'),
          I(s, 'active-item', t[1].href === t[0]),
          B(n, 'class', 'sidebar-submenu-title fontsize-small svelte-2rfg6s'),
          B(l, 'class', 'sidebar-submenu-items'),
          B(e, 'class', 'sidebar-menuitem-container padding-l svelte-2rfg6s');
      },
      m(d, u) {
        w(d, e, u), x(e, n), x(n, s), x(s, a), x(e, r), x(e, l);
        for (let t = 0; t < f.length; t += 1) f[t] && f[t].m(l, null);
        x(e, i), o || ((c = b(jt.call(null, s, { disabled: !1, href: t[1].href }))), (o = !0));
      },
      p(e, n) {
        if (((t = e), 1 & n && I(s, 'active-item', t[1].href === t[0]), 1 & n)) {
          let e;
          for (u = t[1].routes, e = 0; e < u.length; e += 1) {
            const s = mf(t, u, e);
            f[e] ? f[e].p(s, n) : ((f[e] = hf(s)), f[e].c(), f[e].m(l, null));
          }
          for (; e < f.length; e += 1) f[e].d(1);
          f.length = u.length;
        }
      },
      d(t) {
        t && y(e), k(f, t), (o = !1), c();
      },
    };
  }
  function vf(e) {
    let n,
      s,
      a,
      r,
      l,
      i,
      o,
      c,
      d,
      u = sf,
      f = [];
    for (let t = 0; t < u.length; t += 1) f[t] = $f(pf(e, u, t));
    return {
      c() {
        (n = z('div')),
          (s = z('div')),
          (s.innerHTML =
            '<div><a href="#/" class="svelte-2rfg6s"><img alt="" src="ekstrabladet.svg" style="height:70px;"/></a></div> \n    <div class="flex-item flex-item--center"><p class="flex--grow width-1of1 color--graa1 fontweight-bold">Design system</p></div>'),
          (a = T()),
          (r = z('div')),
          (l = z('div')),
          (i = z('a')),
          (i.textContent = 'Overview'),
          (o = T());
        for (let t = 0; t < f.length; t += 1) f[t].c();
        B(s, 'class', 'flex flex-justify--around sidebar-logo-container padding-m--rl svelte-2rfg6s'),
          B(i, 'class', 'sidebar-item width-1of1 padding-m--t padding-m--rl svelte-2rfg6s'),
          B(i, 'href', '#a11y'),
          I(i, 'active-item', '/' === e[0]),
          B(l, 'class', 'sidebar-submenu-items'),
          B(r, 'class', 'sidebar-menuitem-container padding-l svelte-2rfg6s'),
          B(n, 'id', 'sidebar-menu'),
          B(n, 'class', 'sidebar-container height-100vh bg--white margin-l--r svelte-2rfg6s');
      },
      m(t, e) {
        w(t, n, e), x(n, s), x(n, a), x(n, r), x(r, l), x(l, i), x(n, o);
        for (let t = 0; t < f.length; t += 1) f[t] && f[t].m(n, null);
        c || ((d = b(jt.call(null, i, { disabled: !1, href: '/' }))), (c = !0));
      },
      p(t, [e]) {
        if ((1 & e && I(i, 'active-item', '/' === t[0]), 1 & e)) {
          let s;
          for (u = sf, s = 0; s < u.length; s += 1) {
            const a = pf(t, u, s);
            f[s] ? f[s].p(a, e) : ((f[s] = $f(a)), f[s].c(), f[s].m(n, null));
          }
          for (; s < f.length; s += 1) f[s].d(1);
          f.length = u.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && y(n), k(f, t), (c = !1), d();
      },
    };
  }
  function bf(t, e, n) {
    let s;
    return u(t, At, (t) => n(0, (s = t))), [s];
  }
  class xf extends kt {
    constructor(t) {
      super(), yt(this, t, bf, vf, l, {});
    }
  }
  function wf(e) {
    let n, s, a, r, l, i, o, c, d;
    return (
      (n = new gf({})),
      (a = new xf({})),
      (i = new It({ props: { routes: nf } })),
      (c = new rf({})),
      {
        c() {
          bt(n.$$.fragment),
            (s = T()),
            bt(a.$$.fragment),
            (r = T()),
            (l = z('div')),
            bt(i.$$.fragment),
            (o = T()),
            bt(c.$$.fragment),
            B(l, 'class', 'content-container padding-xl svelte-ftylog');
        },
        m(t, e) {
          xt(n, t, e),
            w(t, s, e),
            xt(a, t, e),
            w(t, r, e),
            w(t, l, e),
            xt(i, l, null),
            w(t, o, e),
            xt(c, t, e),
            (d = !0);
        },
        p: t,
        i(t) {
          d || (pt(n.$$.fragment, t), pt(a.$$.fragment, t), pt(i.$$.fragment, t), pt(c.$$.fragment, t), (d = !0));
        },
        o(t) {
          mt(n.$$.fragment, t), mt(a.$$.fragment, t), mt(i.$$.fragment, t), mt(c.$$.fragment, t), (d = !1);
        },
        d(t) {
          wt(n, t), t && y(s), wt(a, t), t && y(r), t && y(l), wt(i), t && y(o), wt(c, t);
        },
      }
    );
  }
  return new (class extends kt {
    constructor(t) {
      super(), yt(this, t, null, wf, l, {});
    }
  })({ target: document.body });
})();
