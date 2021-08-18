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
  function r() {
    return Object.create(null);
  }
  function s(t) {
    t.forEach(n);
  }
  function a(t) {
    return 'function' == typeof t;
  }
  function o(t, e) {
    return t != t ? e == e : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
  }
  let l, i;
  function c(t, e) {
    return l || (l = document.createElement('a')), (l.href = e), t === l.href;
  }
  function d(e, ...n) {
    if (null == e) return t;
    const r = e.subscribe(...n);
    return r.unsubscribe ? () => r.unsubscribe() : r;
  }
  function u(t, e, n) {
    t.$$.on_destroy.push(d(e, n));
  }
  function f(t, e, n, r) {
    if (t) {
      const s = g(t, e, n, r);
      return t[0](s);
    }
  }
  function g(t, n, r, s) {
    return t[1] && s ? e(r.ctx.slice(), t[1](s(n))) : r.ctx;
  }
  function $(t, e, n, r) {
    if (t[2] && r) {
      const s = t[2](r(n));
      if (void 0 === e.dirty) return s;
      if ('object' == typeof s) {
        const t = [],
          n = Math.max(e.dirty.length, s.length);
        for (let r = 0; r < n; r += 1) t[r] = e.dirty[r] | s[r];
        return t;
      }
      return e.dirty | s;
    }
    return e.dirty;
  }
  function p(t, e, n, r, s, a) {
    if (s) {
      const o = g(e, n, r, a);
      t.p(o, s);
    }
  }
  function m(t) {
    if (t.ctx.length > 32) {
      const e = [],
        n = t.ctx.length / 32;
      for (let t = 0; t < n; t++) e[t] = -1;
      return e;
    }
    return -1;
  }
  function h(t) {
    const e = {};
    for (const n in t) '$' !== n[0] && (e[n] = t[n]);
    return e;
  }
  function x(t, e) {
    t.appendChild(e);
  }
  function v(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function b(t) {
    t.parentNode.removeChild(t);
  }
  function w(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function y(t) {
    return document.createElement(t);
  }
  function k(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function C(t) {
    return document.createTextNode(t);
  }
  function T() {
    return C(' ');
  }
  function M() {
    return C('');
  }
  function L(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function z(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function F(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const r in e)
      null == e[r]
        ? t.removeAttribute(r)
        : 'style' === r
        ? (t.style.cssText = e[r])
        : '__value' === r
        ? (t.value = t[r] = e[r])
        : n[r] && n[r].set
        ? (t[r] = e[r])
        : z(t, r, e[r]);
  }
  function N(t, e) {
    for (const n in e) z(t, n, e[n]);
  }
  function B(t, e) {
    (e = '' + e), t.wholeText !== e && (t.data = e);
  }
  function H(t, e, n, r) {
    t.style.setProperty(e, n, r ? 'important' : '');
  }
  function S(t, e, n) {
    t.classList[n ? 'add' : 'remove'](e);
  }
  class _ {
    constructor() {
      this.e = this.n = null;
    }
    c(t) {
      this.h(t);
    }
    m(t, e, n = null) {
      this.e || ((this.e = y(e.nodeName)), (this.t = e), this.c(t)), this.i(n);
    }
    h(t) {
      (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
    }
    i(t) {
      for (let e = 0; e < this.n.length; e += 1) v(this.t, this.n[e], t);
    }
    p(t) {
      this.d(), this.h(t), this.i(this.a);
    }
    d() {
      this.n.forEach(b);
    }
  }
  function A(t) {
    i = t;
  }
  function j() {
    if (!i) throw new Error('Function called outside component initialization');
    return i;
  }
  function E(t) {
    j().$$.on_mount.push(t);
  }
  function P(t) {
    j().$$.after_update.push(t);
  }
  function O(t) {
    j().$$.on_destroy.push(t);
  }
  function I() {
    const t = j();
    return (e, n) => {
      const r = t.$$.callbacks[e];
      if (r) {
        const s = (function (t, e, n = !1) {
          const r = document.createEvent('CustomEvent');
          return r.initCustomEvent(t, n, !1, e), r;
        })(e, n);
        r.slice().forEach((e) => {
          e.call(t, s);
        });
      }
    };
  }
  function D(t, e) {
    j().$$.context.set(t, e);
  }
  function V(t) {
    return j().$$.context.get(t);
  }
  function R(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach((t) => t.call(this, e));
  }
  const q = [],
    G = [],
    W = [],
    U = [],
    Y = Promise.resolve();
  let Z = !1;
  function X() {
    Z || ((Z = !0), Y.then(et));
  }
  function J(t) {
    W.push(t);
  }
  function K(t) {
    U.push(t);
  }
  let Q = !1;
  const tt = new Set();
  function et() {
    if (!Q) {
      Q = !0;
      do {
        for (let t = 0; t < q.length; t += 1) {
          const e = q[t];
          A(e), nt(e.$$);
        }
        for (A(null), q.length = 0; G.length; ) G.pop()();
        for (let t = 0; t < W.length; t += 1) {
          const e = W[t];
          tt.has(e) || (tt.add(e), e());
        }
        W.length = 0;
      } while (q.length);
      for (; U.length; ) U.pop()();
      (Z = !1), (Q = !1), tt.clear();
    }
  }
  function nt(t) {
    if (null !== t.fragment) {
      t.update(), s(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(J);
    }
  }
  const rt = new Set();
  let st;
  function at() {
    st = { r: 0, c: [], p: st };
  }
  function ot() {
    st.r || s(st.c), (st = st.p);
  }
  function lt(t, e) {
    t && t.i && (rt.delete(t), t.i(e));
  }
  function it(t, e, n, r) {
    if (t && t.o) {
      if (rt.has(t)) return;
      rt.add(t),
        st.c.push(() => {
          rt.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e);
    }
  }
  function ct(t, e) {
    const n = {},
      r = {},
      s = { $$scope: 1 };
    let a = t.length;
    for (; a--; ) {
      const o = t[a],
        l = e[a];
      if (l) {
        for (const t in o) t in l || (r[t] = 1);
        for (const t in l) s[t] || ((n[t] = l[t]), (s[t] = 1));
        t[a] = l;
      } else for (const t in o) s[t] = 1;
    }
    for (const t in r) t in n || (n[t] = void 0);
    return n;
  }
  function dt(t) {
    return 'object' == typeof t && null !== t ? t : {};
  }
  function ut(t, e, n) {
    const r = t.$$.props[e];
    void 0 !== r && ((t.$$.bound[r] = n), n(t.$$.ctx[r]));
  }
  function ft(t) {
    t && t.c();
  }
  function gt(t, e, r, o) {
    const { fragment: l, on_mount: i, on_destroy: c, after_update: d } = t.$$;
    l && l.m(e, r),
      o ||
        J(() => {
          const e = i.map(n).filter(a);
          c ? c.push(...e) : s(e), (t.$$.on_mount = []);
        }),
      d.forEach(J);
  }
  function $t(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (s(n.on_destroy), n.fragment && n.fragment.d(e), (n.on_destroy = n.fragment = null), (n.ctx = []));
  }
  function pt(e, n, a, o, l, c, d, u = [-1]) {
    const f = i;
    A(e);
    const g = (e.$$ = {
      fragment: null,
      ctx: null,
      props: c,
      update: t,
      not_equal: l,
      bound: r(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(f ? f.$$.context : n.context || []),
      callbacks: r(),
      dirty: u,
      skip_bound: !1,
      root: n.target || f.$$.root,
    });
    d && d(g.root);
    let $ = !1;
    if (
      ((g.ctx = a
        ? a(e, n.props || {}, (t, n, ...r) => {
            const s = r.length ? r[0] : n;
            return (
              g.ctx &&
                l(g.ctx[t], (g.ctx[t] = s)) &&
                (!g.skip_bound && g.bound[t] && g.bound[t](s),
                $ &&
                  (function (t, e) {
                    -1 === t.$$.dirty[0] && (q.push(t), X(), t.$$.dirty.fill(0)),
                      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                  })(e, t)),
              n
            );
          })
        : []),
      g.update(),
      ($ = !0),
      s(g.before_update),
      (g.fragment = !!o && o(g.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        g.fragment && g.fragment.l(t), t.forEach(b);
      } else g.fragment && g.fragment.c();
      n.intro && lt(e.$$.fragment), gt(e, n.target, n.anchor, n.customElement), et();
    }
    A(f);
  }
  class mt {
    $destroy() {
      $t(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
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
  const ht = [];
  function xt(t, e) {
    return { subscribe: vt(t, e).subscribe };
  }
  function vt(e, n = t) {
    let r;
    const s = new Set();
    function a(t) {
      if (o(e, t) && ((e = t), r)) {
        const t = !ht.length;
        for (const t of s) t[1](), ht.push(t, e);
        if (t) {
          for (let t = 0; t < ht.length; t += 2) ht[t][0](ht[t + 1]);
          ht.length = 0;
        }
      }
    }
    return {
      set: a,
      update: function (t) {
        a(t(e));
      },
      subscribe: function (o, l = t) {
        const i = [o, l];
        return (
          s.add(i),
          1 === s.size && (r = n(a) || t),
          o(e),
          () => {
            s.delete(i), 0 === s.size && (r(), (r = null));
          }
        );
      },
    };
  }
  function bt(e, n, r) {
    const o = !Array.isArray(e),
      l = o ? [e] : e,
      i = n.length < 2;
    return xt(r, (e) => {
      let r = !1;
      const c = [];
      let u = 0,
        f = t;
      const g = () => {
          if (u) return;
          f();
          const r = n(o ? c[0] : c, e);
          i ? e(r) : (f = a(r) ? r : t);
        },
        $ = l.map((t, e) =>
          d(
            t,
            (t) => {
              (c[e] = t), (u &= ~(1 << e)), r && g();
            },
            () => {
              u |= 1 << e;
            }
          )
        );
      return (
        (r = !0),
        g(),
        function () {
          s($), f();
        }
      );
    });
  }
  function wt(t) {
    let n, r, s;
    const a = [t[2]];
    var o = t[0];
    function l(t) {
      let n = {};
      for (let t = 0; t < a.length; t += 1) n = e(n, a[t]);
      return { props: n };
    }
    return (
      o && ((n = new o(l())), n.$on('routeEvent', t[7])),
      {
        c() {
          n && ft(n.$$.fragment), (r = M());
        },
        m(t, e) {
          n && gt(n, t, e), v(t, r, e), (s = !0);
        },
        p(t, e) {
          const s = 4 & e ? ct(a, [dt(t[2])]) : {};
          if (o !== (o = t[0])) {
            if (n) {
              at();
              const t = n;
              it(t.$$.fragment, 1, 0, () => {
                $t(t, 1);
              }),
                ot();
            }
            o
              ? ((n = new o(l())),
                n.$on('routeEvent', t[7]),
                ft(n.$$.fragment),
                lt(n.$$.fragment, 1),
                gt(n, r.parentNode, r))
              : (n = null);
          } else o && n.$set(s);
        },
        i(t) {
          s || (n && lt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          n && it(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && b(r), n && $t(n, t);
        },
      }
    );
  }
  function yt(t) {
    let n, r, s;
    const a = [{ params: t[1] }, t[2]];
    var o = t[0];
    function l(t) {
      let n = {};
      for (let t = 0; t < a.length; t += 1) n = e(n, a[t]);
      return { props: n };
    }
    return (
      o && ((n = new o(l())), n.$on('routeEvent', t[6])),
      {
        c() {
          n && ft(n.$$.fragment), (r = M());
        },
        m(t, e) {
          n && gt(n, t, e), v(t, r, e), (s = !0);
        },
        p(t, e) {
          const s = 6 & e ? ct(a, [2 & e && { params: t[1] }, 4 & e && dt(t[2])]) : {};
          if (o !== (o = t[0])) {
            if (n) {
              at();
              const t = n;
              it(t.$$.fragment, 1, 0, () => {
                $t(t, 1);
              }),
                ot();
            }
            o
              ? ((n = new o(l())),
                n.$on('routeEvent', t[6]),
                ft(n.$$.fragment),
                lt(n.$$.fragment, 1),
                gt(n, r.parentNode, r))
              : (n = null);
          } else o && n.$set(s);
        },
        i(t) {
          s || (n && lt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          n && it(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && b(r), n && $t(n, t);
        },
      }
    );
  }
  function kt(t) {
    let e, n, r, s;
    const a = [yt, wt],
      o = [];
    function l(t, e) {
      return t[1] ? 0 : 1;
    }
    return (
      (e = l(t)),
      (n = o[e] = a[e](t)),
      {
        c() {
          n.c(), (r = M());
        },
        m(t, n) {
          o[e].m(t, n), v(t, r, n), (s = !0);
        },
        p(t, [s]) {
          let i = e;
          (e = l(t)),
            e === i
              ? o[e].p(t, s)
              : (at(),
                it(o[i], 1, 1, () => {
                  o[i] = null;
                }),
                ot(),
                (n = o[e]),
                n ? n.p(t, s) : ((n = o[e] = a[e](t)), n.c()),
                lt(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          s || (lt(n), (s = !0));
        },
        o(t) {
          it(n), (s = !1);
        },
        d(t) {
          o[e].d(t), t && b(r);
        },
      }
    );
  }
  function Ct() {
    const t = window.location.href.indexOf('#/');
    let e = t > -1 ? window.location.href.substr(t + 1) : '/';
    const n = e.indexOf('?');
    let r = '';
    return n > -1 && ((r = e.substr(n + 1)), (e = e.substr(0, n))), { location: e, querystring: r };
  }
  const Tt = xt(null, function (t) {
    t(Ct());
    const e = () => {
      t(Ct());
    };
    return (
      window.addEventListener('hashchange', e, !1),
      function () {
        window.removeEventListener('hashchange', e, !1);
      }
    );
  });
  bt(Tt, (t) => t.location), bt(Tt, (t) => t.querystring);
  const Mt = vt(void 0);
  function Lt(t, e) {
    if (((e = Ft(e)), !t || !t.tagName || 'a' != t.tagName.toLowerCase()))
      throw Error('Action "link" can only be used with <a> tags');
    return (
      zt(t, e),
      {
        update(e) {
          (e = Ft(e)), zt(t, e);
        },
      }
    );
  }
  function zt(t, e) {
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
                void 0,
                void 0
              ),
                (window.location.hash = t);
            })(t.currentTarget.getAttribute('href'));
      });
  }
  function Ft(t) {
    return t && 'string' == typeof t ? { href: t } : t || {};
  }
  function Nt(t, e, n) {
    let { routes: r = {} } = e,
      { prefix: s = '' } = e,
      { restoreScrollState: a = !1 } = e;
    class o {
      constructor(t, e) {
        if (!e || ('function' != typeof e && ('object' != typeof e || !0 !== e._sveltesparouter)))
          throw Error('Invalid component object');
        if (
          !t ||
          ('string' == typeof t && (t.length < 1 || ('/' != t.charAt(0) && '*' != t.charAt(0)))) ||
          ('object' == typeof t && !(t instanceof RegExp))
        )
          throw Error('Invalid value for "path" argument - strings must start with / or *');
        const { pattern: n, keys: r } = (function (t, e) {
          if (t instanceof RegExp) return { keys: !1, pattern: t };
          var n,
            r,
            s,
            a,
            o = [],
            l = '',
            i = t.split('/');
          for (i[0] || i.shift(); (s = i.shift()); )
            '*' === (n = s[0])
              ? (o.push('wild'), (l += '/(.*)'))
              : ':' === n
              ? ((r = s.indexOf('?', 1)),
                (a = s.indexOf('.', 1)),
                o.push(s.substring(1, ~r ? r : ~a ? a : s.length)),
                (l += ~r && !~a ? '(?:/([^/]+?))?' : '/([^/]+?)'),
                ~a && (l += (~r ? '?' : '') + '\\' + s.substring(a)))
              : (l += '/' + s);
          return { keys: o, pattern: new RegExp('^' + l + (e ? '(?=$|/)' : '/?$'), 'i') };
        })(t);
        (this.path = t),
          'object' == typeof e && !0 === e._sveltesparouter
            ? ((this.component = e.component),
              (this.conditions = e.conditions || []),
              (this.userData = e.userData),
              (this.props = e.props || {}))
            : ((this.component = () => Promise.resolve(e)), (this.conditions = []), (this.props = {})),
          (this._pattern = n),
          (this._keys = r);
      }
      match(t) {
        if (s)
          if ('string' == typeof s) {
            if (!t.startsWith(s)) return null;
            t = t.substr(s.length) || '/';
          } else if (s instanceof RegExp) {
            const e = t.match(s);
            if (!e || !e[0]) return null;
            t = t.substr(e[0].length) || '/';
          }
        const e = this._pattern.exec(t);
        if (null === e) return null;
        if (!1 === this._keys) return e;
        const n = {};
        let r = 0;
        for (; r < this._keys.length; ) {
          try {
            n[this._keys[r]] = decodeURIComponent(e[r + 1] || '') || null;
          } catch (t) {
            n[this._keys[r]] = null;
          }
          r++;
        }
        return n;
      }
      async checkConditions(t) {
        for (let e = 0; e < this.conditions.length; e++) if (!(await this.conditions[e](t))) return !1;
        return !0;
      }
    }
    const l = [];
    r instanceof Map
      ? r.forEach((t, e) => {
          l.push(new o(e, t));
        })
      : Object.keys(r).forEach((t) => {
          l.push(new o(t, r[t]));
        });
    let i = null,
      c = null,
      d = {};
    const u = I();
    async function f(t, e) {
      await (X(), Y), u(t, e);
    }
    let g = null,
      $ = null;
    a &&
      (($ = (t) => {
        g = t.state && t.state.__svelte_spa_router_scrollY ? t.state : null;
      }),
      window.addEventListener('popstate', $),
      P(() => {
        g ? window.scrollTo(g.__svelte_spa_router_scrollX, g.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }));
    let p = null,
      m = null;
    const h = Tt.subscribe(async (t) => {
      p = t;
      let e = 0;
      for (; e < l.length; ) {
        const r = l[e].match(t.location);
        if (!r) {
          e++;
          continue;
        }
        const s = {
          route: l[e].path,
          location: t.location,
          querystring: t.querystring,
          userData: l[e].userData,
          params: r && 'object' == typeof r && Object.keys(r).length ? r : null,
        };
        if (!(await l[e].checkConditions(s))) return n(0, (i = null)), (m = null), void f('conditionsFailed', s);
        f('routeLoading', Object.assign({}, s));
        const a = l[e].component;
        if (m != a) {
          a.loading
            ? (n(0, (i = a.loading)),
              (m = a),
              n(1, (c = a.loadingParams)),
              n(2, (d = {})),
              f('routeLoaded', Object.assign({}, s, { component: i, name: i.name, params: c })))
            : (n(0, (i = null)), (m = null));
          const e = await a();
          if (t != p) return;
          n(0, (i = (e && e.default) || e)), (m = a);
        }
        return (
          r && 'object' == typeof r && Object.keys(r).length ? n(1, (c = r)) : n(1, (c = null)),
          n(2, (d = l[e].props)),
          void f('routeLoaded', Object.assign({}, s, { component: i, name: i.name, params: c })).then(() => {
            Mt.set(c);
          })
        );
      }
      n(0, (i = null)), (m = null), Mt.set(void 0);
    });
    return (
      O(() => {
        h(), $ && window.removeEventListener('popstate', $);
      }),
      (t.$$set = (t) => {
        'routes' in t && n(3, (r = t.routes)),
          'prefix' in t && n(4, (s = t.prefix)),
          'restoreScrollState' in t && n(5, (a = t.restoreScrollState));
      }),
      (t.$$.update = () => {
        32 & t.$$.dirty && (history.scrollRestoration = a ? 'manual' : 'auto');
      }),
      [
        i,
        c,
        d,
        r,
        s,
        a,
        function (e) {
          R.call(this, t, e);
        },
        function (e) {
          R.call(this, t, e);
        },
      ]
    );
  }
  class Bt extends mt {
    constructor(t) {
      super(), pt(this, t, Nt, kt, o, { routes: 3, prefix: 4, restoreScrollState: 5 });
    }
  }
  function Ht(t, e, n) {
    const r = t.slice();
    return (r[5] = e[n]), (r[7] = n), r;
  }
  function St(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f = t[5].title + '',
      g = t[5].content + '';
    function $() {
      return t[4](t[7]);
    }
    return {
      c() {
        (e = y('div')),
          (n = y('div')),
          (r = y('span')),
          (s = C(f)),
          (a = T()),
          (o = y('i')),
          (l = T()),
          (i = y('div')),
          (c = T()),
          z(r, 'class', 'fontweight-bold fontsize-medium'),
          z(o, 'class', 'fas fa-chevron-down'),
          z(n, 'class', 'accordion-header flex flex-justify--between flex-align--center padding-m'),
          z(i, 'class', 'accordion-body padding-m padding-l--rl fontsize-small'),
          z(e, 'class', 'accordion-tab margin-m--b'),
          S(e, 'accordion-expanded', t[3] === t[7]);
      },
      m(t, f) {
        v(t, e, f),
          x(e, n),
          x(n, r),
          x(r, s),
          x(n, a),
          x(n, o),
          x(e, l),
          x(e, i),
          (i.innerHTML = g),
          x(e, c),
          d || ((u = L(n, 'click', $)), (d = !0));
      },
      p(n, r) {
        (t = n),
          4 & r && f !== (f = t[5].title + '') && B(s, f),
          4 & r && g !== (g = t[5].content + '') && (i.innerHTML = g),
          8 & r && S(e, 'accordion-expanded', t[3] === t[7]);
      },
      d(t) {
        t && b(e), (d = !1), u();
      },
    };
  }
  function _t(e) {
    let n,
      r = e[2],
      s = [];
    for (let t = 0; t < r.length; t += 1) s[t] = St(Ht(e, r, t));
    return {
      c() {
        n = y('div');
        for (let t = 0; t < s.length; t += 1) s[t].c();
        z(n, 'data-theme', e[1]), z(n, 'class', 'accordion card-mode padding-l ff-secondary width-1of1');
      },
      m(t, e) {
        v(t, n, e);
        for (let t = 0; t < s.length; t += 1) s[t].m(n, null);
      },
      p(t, [e]) {
        if (12 & e) {
          let a;
          for (r = t[2], a = 0; a < r.length; a += 1) {
            const o = Ht(t, r, a);
            s[a] ? s[a].p(o, e) : ((s[a] = St(o)), s[a].c(), s[a].m(n, null));
          }
          for (; a < s.length; a += 1) s[a].d(1);
          s.length = r.length;
        }
        2 & e && z(n, 'data-theme', t[1]);
      },
      i: t,
      o: t,
      d(t) {
        t && b(n), w(s, t);
      },
    };
  }
  function At(e, n, r) {
    let s,
      a = t;
    e.$$.on_destroy.push(() => a());
    const o = vt(void 0);
    a(), (a = d(o, (t) => r(3, (s = t))));
    let { dataTheme: l } = n,
      { tabs: i } = n;
    return (
      (e.$$set = (t) => {
        'dataTheme' in t && r(1, (l = t.dataTheme)), 'tabs' in t && r(2, (i = t.tabs));
      }),
      [
        o,
        l,
        i,
        s,
        (t) => {
          var e;
          (s = s !== t ? t : void 0), (e = s), o.set(e);
        },
      ]
    );
  }
  class jt extends mt {
    constructor(t) {
      super(), pt(this, t, At, _t, o, { activeTab: 0, dataTheme: 1, tabs: 2 });
    }
    get activeTab() {
      return this.$$.ctx[0];
    }
  }
  function Et(t) {
    const e = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      n = new Date(t),
      r = new Date(),
      s = new Date(n.getTime() + 60 * r.getTimezoneOffset()),
      a = Math.round((r.getTime() - s.getTime()) / 1e3);
    let o = '';
    if (Math.floor(a / 86400)) {
      const t = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 1);
      o =
        s.getTime() > t.getTime()
          ? 'I går'
          : `${s.getDate()}. ${e[s.getMonth()]}.${r.getFullYear() !== s.getFullYear() ? ` ${s.getFullYear()}` : ''}`;
    } else {
      const t = Math.floor((a % 86400) / 3600),
        e = Math.floor(((a % 86400) % 3600) / 60),
        n = a % 60;
      t ? (o = 1 === t ? `${t} time` : `${t} timer`) : e ? (o = `${e} min`) : n && (o = `${n} sek`);
    }
    return o;
  }
  const Pt = (t) => ({}),
    Ot = (t) => ({}),
    It = (t) => ({}),
    Dt = (t) => ({}),
    Vt = (t) => ({}),
    Rt = (t) => ({}),
    qt = (t) => ({}),
    Gt = (t) => ({}),
    Wt = (t) => ({}),
    Ut = (t) => ({}),
    Yt = (t) => ({}),
    Zt = (t) => ({}),
    Xt = (t) => ({}),
    Jt = (t) => ({ class: 'card-media' }),
    Kt = (t) => ({}),
    Qt = (t) => ({ class: 'card-header' });
  function te(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c = t[5].header && ne(t),
      d = t[5].media && re(t);
    const u = t[8].default,
      g = f(u, t, t[7], null);
    let h = t[5].content && se(t),
      w = t[5].footer && ae(t);
    return {
      c() {
        (e = y('div')),
          c && c.c(),
          (n = T()),
          d && d.c(),
          (r = T()),
          g && g.c(),
          (s = T()),
          h && h.c(),
          (a = T()),
          w && w.c(),
          z(e, 'class', t[4]),
          z(e, 'style', t[1]),
          z(e, 'data-theme', t[2]);
      },
      m(u, f) {
        v(u, e, f),
          c && c.m(e, null),
          x(e, n),
          d && d.m(e, null),
          x(e, r),
          g && g.m(e, null),
          x(e, s),
          h && h.m(e, null),
          x(e, a),
          w && w.m(e, null),
          (o = !0),
          l || ((i = L(e, 'click', t[10])), (l = !0));
      },
      p(t, s) {
        t[5].header
          ? c
            ? (c.p(t, s), 32 & s && lt(c, 1))
            : ((c = ne(t)), c.c(), lt(c, 1), c.m(e, n))
          : c &&
            (at(),
            it(c, 1, 1, () => {
              c = null;
            }),
            ot()),
          t[5].media
            ? d
              ? (d.p(t, s), 32 & s && lt(d, 1))
              : ((d = re(t)), d.c(), lt(d, 1), d.m(e, r))
            : d &&
              (at(),
              it(d, 1, 1, () => {
                d = null;
              }),
              ot()),
          g && g.p && (!o || 128 & s) && p(g, u, t, t[7], o ? $(u, t[7], s, null) : m(t[7]), null),
          t[5].content
            ? h
              ? (h.p(t, s), 32 & s && lt(h, 1))
              : ((h = se(t)), h.c(), lt(h, 1), h.m(e, a))
            : h &&
              (at(),
              it(h, 1, 1, () => {
                h = null;
              }),
              ot()),
          t[5].footer
            ? w
              ? (w.p(t, s), 32 & s && lt(w, 1))
              : ((w = ae(t)), w.c(), lt(w, 1), w.m(e, null))
            : w &&
              (at(),
              it(w, 1, 1, () => {
                w = null;
              }),
              ot()),
          (!o || 16 & s) && z(e, 'class', t[4]),
          (!o || 2 & s) && z(e, 'style', t[1]),
          (!o || 4 & s) && z(e, 'data-theme', t[2]);
      },
      i(t) {
        o || (lt(c), lt(d), lt(g, t), lt(h), lt(w), (o = !0));
      },
      o(t) {
        it(c), it(d), it(g, t), it(h), it(w), (o = !1);
      },
      d(t) {
        t && b(e), c && c.d(), d && d.d(), g && g.d(t), h && h.d(), w && w.d(), (l = !1), i();
      },
    };
  }
  function ee(t) {
    let n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d = t[5].header && oe(t),
      u = t[5].media && le(t);
    const g = t[8].default,
      h = f(g, t, t[7], null);
    let w = t[5].content && ie(t),
      k = t[5].footer && ce(t),
      C = [{ href: t[0] }, { class: t[4] }, { style: t[1] }, { 'data-theme': t[2] }, t[3]],
      M = {};
    for (let t = 0; t < C.length; t += 1) M = e(M, C[t]);
    return {
      c() {
        (n = y('a')),
          d && d.c(),
          (r = T()),
          u && u.c(),
          (s = T()),
          h && h.c(),
          (a = T()),
          w && w.c(),
          (o = T()),
          k && k.c(),
          F(n, M);
      },
      m(e, f) {
        v(e, n, f),
          d && d.m(n, null),
          x(n, r),
          u && u.m(n, null),
          x(n, s),
          h && h.m(n, null),
          x(n, a),
          w && w.m(n, null),
          x(n, o),
          k && k.m(n, null),
          (l = !0),
          i || ((c = L(n, 'click', t[9])), (i = !0));
      },
      p(t, e) {
        t[5].header
          ? d
            ? (d.p(t, e), 32 & e && lt(d, 1))
            : ((d = oe(t)), d.c(), lt(d, 1), d.m(n, r))
          : d &&
            (at(),
            it(d, 1, 1, () => {
              d = null;
            }),
            ot()),
          t[5].media
            ? u
              ? (u.p(t, e), 32 & e && lt(u, 1))
              : ((u = le(t)), u.c(), lt(u, 1), u.m(n, s))
            : u &&
              (at(),
              it(u, 1, 1, () => {
                u = null;
              }),
              ot()),
          h && h.p && (!l || 128 & e) && p(h, g, t, t[7], l ? $(g, t[7], e, null) : m(t[7]), null),
          t[5].content
            ? w
              ? (w.p(t, e), 32 & e && lt(w, 1))
              : ((w = ie(t)), w.c(), lt(w, 1), w.m(n, o))
            : w &&
              (at(),
              it(w, 1, 1, () => {
                w = null;
              }),
              ot()),
          t[5].footer
            ? k
              ? (k.p(t, e), 32 & e && lt(k, 1))
              : ((k = ce(t)), k.c(), lt(k, 1), k.m(n, null))
            : k &&
              (at(),
              it(k, 1, 1, () => {
                k = null;
              }),
              ot()),
          F(
            n,
            (M = ct(C, [
              (!l || 1 & e) && { href: t[0] },
              (!l || 16 & e) && { class: t[4] },
              (!l || 2 & e) && { style: t[1] },
              (!l || 4 & e) && { 'data-theme': t[2] },
              8 & e && t[3],
            ]))
          );
      },
      i(t) {
        l || (lt(d), lt(u), lt(h, t), lt(w), lt(k), (l = !0));
      },
      o(t) {
        it(d), it(u), it(h, t), it(w), it(k), (l = !1);
      },
      d(t) {
        t && b(n), d && d.d(), u && u.d(), h && h.d(t), w && w.d(), k && k.d(), (i = !1), c();
      },
    };
  }
  function ne(t) {
    let e, n;
    const r = t[8].header,
      s = f(r, t, t[7], Gt);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', 'card-header');
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 128 & e) && p(s, r, t, t[7], n ? $(r, t[7], e, qt) : m(t[7]), Gt);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function re(t) {
    let e, n;
    const r = t[8].media,
      s = f(r, t, t[7], Rt);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', 'card-media');
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 128 & e) && p(s, r, t, t[7], n ? $(r, t[7], e, Vt) : m(t[7]), Rt);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function se(t) {
    let e, n;
    const r = t[8].content,
      s = f(r, t, t[7], Dt);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', 'card-content');
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 128 & e) && p(s, r, t, t[7], n ? $(r, t[7], e, It) : m(t[7]), Dt);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function ae(t) {
    let e, n;
    const r = t[8].footer,
      s = f(r, t, t[7], Ot);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', 'card-footer');
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 128 & e) && p(s, r, t, t[7], n ? $(r, t[7], e, Pt) : m(t[7]), Ot);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function oe(t) {
    let e;
    const n = t[8].header,
      r = f(n, t, t[7], Qt);
    return {
      c() {
        r && r.c();
      },
      m(t, n) {
        r && r.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 128 & s) && p(r, n, t, t[7], e ? $(n, t[7], s, Kt) : m(t[7]), Qt);
      },
      i(t) {
        e || (lt(r, t), (e = !0));
      },
      o(t) {
        it(r, t), (e = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function le(t) {
    let e;
    const n = t[8].media,
      r = f(n, t, t[7], Jt);
    return {
      c() {
        r && r.c();
      },
      m(t, n) {
        r && r.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 128 & s) && p(r, n, t, t[7], e ? $(n, t[7], s, Xt) : m(t[7]), Jt);
      },
      i(t) {
        e || (lt(r, t), (e = !0));
      },
      o(t) {
        it(r, t), (e = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function ie(t) {
    let e, n;
    const r = t[8].content,
      s = f(r, t, t[7], Zt);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', 'card-content');
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 128 & e) && p(s, r, t, t[7], n ? $(r, t[7], e, Yt) : m(t[7]), Zt);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function ce(t) {
    let e, n;
    const r = t[8].footer,
      s = f(r, t, t[7], Ut);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', 'card-footer');
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 128 & e) && p(s, r, t, t[7], n ? $(r, t[7], e, Wt) : m(t[7]), Ut);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function de(t) {
    let e, n, r, s;
    const a = [ee, te],
      o = [];
    function l(t, e) {
      return t[0] ? 0 : 1;
    }
    return (
      (e = l(t)),
      (n = o[e] = a[e](t)),
      {
        c() {
          n.c(), (r = M());
        },
        m(t, n) {
          o[e].m(t, n), v(t, r, n), (s = !0);
        },
        p(t, [s]) {
          let i = e;
          (e = l(t)),
            e === i
              ? o[e].p(t, s)
              : (at(),
                it(o[i], 1, 1, () => {
                  o[i] = null;
                }),
                ot(),
                (n = o[e]),
                n ? n.p(t, s) : ((n = o[e] = a[e](t)), n.c()),
                lt(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          s || (lt(n), (s = !0));
        },
        o(t) {
          it(n), (s = !1);
        },
        d(t) {
          o[e].d(t), t && b(r);
        },
      }
    );
  }
  function ue(t, n, r) {
    let s,
      { $$slots: a = {}, $$scope: o } = n;
    const l = (function (t) {
      const e = {};
      for (const n in t) e[n] = !0;
      return e;
    })(a);
    let { className: i } = n,
      { url: c } = n,
      { style: d } = n,
      { theme: u } = n;
    const f = {};
    for (const t in n) 0 === t.indexOf('data-') && (f[t] = n[t]);
    return (
      (t.$$set = (t) => {
        r(11, (n = e(e({}, n), h(t)))),
          'className' in t && r(6, (i = t.className)),
          'url' in t && r(0, (c = t.url)),
          'style' in t && r(1, (d = t.style)),
          'theme' in t && r(2, (u = t.theme)),
          '$$scope' in t && r(7, (o = t.$$scope));
      }),
      (t.$$.update = () => {
        64 & t.$$.dirty && r(4, (s = `${i} card`));
      }),
      (n = h(n)),
      [
        c,
        d,
        u,
        f,
        s,
        l,
        i,
        o,
        a,
        function (e) {
          R.call(this, t, e);
        },
        function (e) {
          R.call(this, t, e);
        },
      ]
    );
  }
  class fe extends mt {
    constructor(t) {
      super(), pt(this, t, ue, de, o, { className: 6, url: 0, style: 1, theme: 2 });
    }
  }
  function ge(n) {
    let r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      w,
      y,
      C,
      T = [{ viewBox: '0 0 230 60' }, { fill: 'none' }, { xmlns: 'http://www.w3.org/2000/svg' }, n[0]],
      M = {};
    for (let t = 0; t < T.length; t += 1) M = e(M, T[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          (a = k('path')),
          (o = k('g')),
          (l = k('path')),
          (i = k('path')),
          (c = k('defs')),
          (d = k('linearGradient')),
          (u = k('stop')),
          (f = k('stop')),
          (g = k('filter')),
          ($ = k('feFlood')),
          (p = k('feColorMatrix')),
          (m = k('feOffset')),
          (h = k('feGaussianBlur')),
          (w = k('feColorMatrix')),
          (y = k('feBlend')),
          (C = k('feBlend')),
          z(
            s,
            'd',
            'M0 9.23C0 4.134 4.119 0 9.2 0h211.6c5.082 0 9.2 4.133 9.2 9.23v41.54c0 5.097-4.118 9.23-9.2 9.23H9.2C4.119 60 0 55.867 0 50.77z'
          ),
          z(s, 'fill', '#000'),
          z(
            a,
            'd',
            'M81.935 18.989h4.669v12.525c0 1.988.058 3.276.174 3.865.199.947.673 1.71 1.419 2.288.758.568 1.788.852 3.092.852 1.325 0 2.325-.268 2.998-.805.673-.547 1.078-1.215 1.214-2.003.137-.79.205-2.098.205-3.928V18.989h4.67v12.147c0 2.776-.126 4.738-.379 5.884-.252 1.146-.72 2.114-1.404 2.903-.673.788-1.577 1.42-2.713 1.893-1.136.462-2.619.694-4.449.694-2.208 0-3.886-.253-5.032-.757-1.136-.516-2.035-1.178-2.698-1.988-.662-.82-1.099-1.678-1.309-2.571-.305-1.326-.457-3.282-.457-5.869zM105.314 42.115V18.99h7.493c2.839 0 4.69.116 5.553.347 1.325.347 2.434 1.104 3.328 2.272.894 1.156 1.341 2.655 1.341 4.496 0 1.42-.258 2.613-.773 3.58-.515.968-1.173 1.73-1.972 2.288-.789.547-1.593.91-2.413 1.088-1.115.221-2.73.332-4.843.332h-3.045v8.723zm4.669-19.214v6.563h2.556c1.84 0 3.07-.121 3.691-.363.62-.242 1.104-.62 1.451-1.136.358-.515.537-1.115.537-1.798 0-.842-.247-1.536-.742-2.083-.494-.547-1.12-.888-1.877-1.025-.557-.105-1.677-.158-3.36-.158zM126.847 18.989h8.534c1.925 0 3.392.147 4.401.442a7.736 7.736 0 013.487 2.13c.967 1.02 1.703 2.27 2.208 3.754.505 1.472.758 3.292.758 5.458 0 1.904-.237 3.544-.71 4.922-.579 1.683-1.404 3.045-2.477 4.086-.81.788-1.904 1.404-3.281 1.845-1.031.326-2.409.49-4.133.49h-8.787zm4.669 3.912V38.22h3.487c1.304 0 2.245-.074 2.823-.221.758-.19 1.383-.51 1.878-.962.504-.453.915-1.194 1.23-2.225.316-1.04.473-2.455.473-4.243 0-1.788-.157-3.16-.473-4.117-.315-.958-.757-1.704-1.325-2.24-.568-.537-1.288-.9-2.161-1.089-.652-.147-1.93-.22-3.834-.22zM171.065 42.115h-5.08l-2.019-5.253h-9.244l-1.909 5.253h-4.954l9.008-23.126h4.938zm-8.598-9.15l-3.186-8.581-3.124 8.582zM176.365 42.115V22.901h-6.862V18.99h18.378V22.9h-6.846v19.214zM190.91 42.115V18.99h17.148V22.9H195.58v5.127h11.61v3.897h-11.61v6.294h12.919v3.896z'
          ),
          z(a, 'fill', '#fff'),
          z(
            l,
            'd',
            'M0 9.23A9.23 9.23 0 019.23 0h41.54A9.23 9.23 0 0160 9.23v41.54A9.23 9.23 0 0150.77 60H9.23A9.23 9.23 0 010 50.77z'
          ),
          z(l, 'fill', 'url(#paint0_linear)'),
          z(o, 'filter', 'url(#filter0_d)'),
          z(
            i,
            'd',
            'M26.166 33.441l-6.58-2.531c-1.15-.443-1.495-1.85-.672-2.741L33.74 12.125c1.249-1.352 3.542-.173 3.068 1.577L33.32 26.558l6.58 2.532c1.15.443 1.495 1.85.672 2.741L25.747 47.875c-1.249 1.352-3.542.173-3.068-1.577z'
          ),
          z(i, 'fill', '#fff'),
          z(u, 'stop-color', '#1058C2'),
          z(u, 'id', 'stop122'),
          z(f, 'offset', '1'),
          z(f, 'stop-color', '#00A3FF'),
          z(f, 'id', 'stop124'),
          z(d, 'id', 'paint0_linear'),
          z(d, 'x1', '75.455'),
          z(d, 'y1', '20'),
          z(d, 'x2', '74.436'),
          z(d, 'y2', '80.029'),
          z(d, 'gradientUnits', 'userSpaceOnUse'),
          z(d, 'gradientTransform', 'translate(-40 -20)'),
          z($, 'flood-opacity', '0'),
          z($, 'result', 'BackgroundImageFix'),
          z($, 'id', 'feFlood107'),
          z(p, 'in', 'SourceAlpha'),
          z(p, 'type', 'matrix'),
          z(p, 'values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'),
          z(p, 'result', 'hardAlpha'),
          z(p, 'id', 'feColorMatrix109'),
          z(m, 'dy', '20'),
          z(m, 'id', 'feOffset111'),
          z(h, 'stdDeviation', '20'),
          z(h, 'id', 'feGaussianBlur113'),
          z(w, 'type', 'matrix'),
          z(w, 'values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'),
          z(w, 'id', 'feColorMatrix115'),
          z(y, 'mode', 'normal'),
          z(y, 'in2', 'BackgroundImageFix'),
          z(y, 'result', 'effect1_dropShadow'),
          z(y, 'id', 'feBlend117'),
          z(C, 'mode', 'normal'),
          z(C, 'in', 'SourceGraphic'),
          z(C, 'in2', 'effect1_dropShadow'),
          z(C, 'result', 'shape'),
          z(C, 'id', 'feBlend119'),
          z(g, 'id', 'filter0_d'),
          z(g, 'x', '0'),
          z(g, 'y', '0'),
          z(g, 'width', '140'),
          z(g, 'height', '140'),
          z(g, 'filterUnits', 'userSpaceOnUse'),
          z(g, 'color-interpolation-filters', 'sRGB'),
          z(c, 'id', 'defs127'),
          N(r, M);
      },
      m(t, e) {
        v(t, r, e),
          x(r, s),
          x(r, a),
          x(r, o),
          x(o, l),
          x(r, i),
          x(r, c),
          x(c, d),
          x(d, u),
          x(d, f),
          x(c, g),
          x(g, $),
          x(g, p),
          x(g, m),
          x(g, h),
          x(g, w),
          x(g, y),
          x(g, C);
      },
      p(t, [e]) {
        N(
          r,
          (M = ct(T, [
            { viewBox: '0 0 230 60' },
            { fill: 'none' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function $e(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function pe(n) {
    let r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      w = [
        { version: '1.1' },
        { id: 'logo' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
        { x: '0px' },
        { y: '0px' },
        { viewBox: '0 0 100 88' },
        { 'enable-background': 'new 0 0 100 88' },
        { 'xml:space': 'preserve' },
        n[0],
      ],
      y = {};
    for (let t = 0; t < w.length; t += 1) y = e(y, w[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('g')),
          (a = k('path')),
          (o = k('polygon')),
          (l = k('polygon')),
          (i = k('path')),
          (c = k('path')),
          (d = k('path')),
          (u = k('path')),
          (f = k('path')),
          (g = k('rect')),
          ($ = k('path')),
          (p = k('path')),
          (m = k('path')),
          (h = k('path')),
          z(a, 'fill', '#B30000'),
          z(a, 'd', 'M0-0.9h100V78l-49.5,9.5L0,77.6V-0.9L0-0.9z'),
          z(o, 'fill', '#FFFFFF'),
          z(
            o,
            'points',
            '23,42.3 10.6,42.3 10.6,37.8 20.4,37.8 20.4,34.4 10.6,34.4 10.6,29.8 22.1,29.8 22.1,26.5\n\t\t6.1,26.5 6.1,46.1 23.1,46.1 \t\t'
          ),
          z(l, 'fill', '#FFFFFF'),
          z(
            l,
            'points',
            '39.7,46.1 33.7,37.3 38.7,31.9 33.9,31.9 28.7,37.5 28.7,26.5 24.8,26.5 24.8,46.1 28.7,46.1\n\t\t28.7,42.2 31,39.9 34.8,46.1 \t\t'
          ),
          z(i, 'fill', '#FFFFFF'),
          z(
            i,
            'd',
            'M46.3,43.9c-2.4,0-3.1-0.5-3.5-2h-3.7c0,3.1,2.5,4.9,6.7,4.9c4.7,0,7.5-1.8,7.5-4.8c0-2-1.6-3.7-3.6-4.1\n\t\tL44.1,37c-0.6-0.1-1.2-0.7-1.2-1.4c0-0.8,0.8-1.4,2.3-1.4c3,0,3.5,0.4,3.6,2h3.8v-0.5c0-2.4-2.8-4.5-6.5-4.5\n\t\tc-4.2,0-6.9,1.8-6.9,4.9c0,1.8,1.3,3.6,3,3.8l5.8,1c0.8,0.1,1.3,0.5,1.3,1.2C49.4,43.3,48.5,43.9,46.3,43.9z'
          ),
          z(c, 'fill', '#FFFFFF'),
          z(
            c,
            'd',
            'M56.5,42.6c0,2.6,1.7,4.2,4.7,4.2c1.1,0,2-0.2,3.6-1v-1.9c-0.7,0.1-1.7,0.1-2,0.1c-1.6,0-2.2-0.6-2.2-1.8\n\t\tv-7.6h3.8V32h-3.8v-5.4h-2.9l-0.1,1.2C57,31.6,56.9,32,55.8,32h-2.5v2.6h3.4L56.5,42.6z'
          ),
          z(d, 'fill', '#FFFFFF'),
          z(d, 'd', 'M70.8,39.9c0-3.1,1.7-4.8,4.7-4.8h1.7v-3.6H76c-2.3,0-4.1,1.1-5.3,3.2V32h-3.8v14.2h4V39.9z'),
          z(u, 'fill', '#FFFFFF'),
          z(
            u,
            'd',
            'M91,41.5v-3.1v-2.8c0-1.7-0.2-2.3-1-2.8c-1.3-1.1-3.4-1.6-5.8-1.6c-4.3,0-6.3,1.4-6.6,4.8h3.7\n\t\tc0.2-1.6,1-2,3-2c2.2,0,2.9,0.6,2.9,2.3c0,0.7-0.2,1-1.1,1.1l-4.1,0.5c-4.1,0.5-5.6,1.8-5.6,4.6c0,2.6,2,4.2,5.4,4.2\n\t\tc2.5,0,4.1-0.8,5.5-2.9c0.8,2.2,1.8,2.9,3.7,2.9c1,0,1.8-0.2,3.4-1.1v-1.8c-0.8,0.1-1.4,0.1-1.7,0.1C91.5,43.9,91,43.2,91,41.5z\n\t\t M83,43.9c-1.4,0-2.3-0.7-2.3-1.8c0-1.6,0.7-1.9,5.3-2.8l1.2-0.2C87.2,42.3,85.9,43.9,83,43.9z'
          ),
          z(f, 'fill', '#FFFFFF'),
          z(
            f,
            'd',
            'M20.1,58.8c2.8-0.6,4.2-2.2,4.2-4.4c0-2.6-2.4-4.7-5.5-4.7H6.1v19.5h12.5c3.7,0,6.4-2.2,6.4-5.3\n\t\tC25,61.2,23.4,59.7,20.1,58.8z M10.6,52.8h5.9c2.3,0,3.1,0.6,3.1,2.3c0,1.8-0.8,2.4-3.1,2.4h-5.9V52.8z M16.5,65.7h-6v-5.3h6\n\t\tc2.4,0,3.5,0.8,3.5,2.6C20,65.1,19.1,65.7,16.5,65.7z'
          ),
          z(g, 'x', '26.9'),
          z(g, 'y', '49.8'),
          z(g, 'fill', '#FFFFFF'),
          z(g, 'width', '4.1'),
          z(g, 'height', '19.5'),
          z($, 'fill', '#FFFFFF'),
          z(
            $,
            'd',
            'M47.4,64.9l-0.1-6.9c-0.1-2.3-2.5-3.6-6.6-3.6c-5.1,0-6.9,1.2-7.1,4.8h3.8c0.2-1.4,0.8-1.9,2.9-1.9\n\t\tc2.4,0,3.1,0.5,3.1,2.2c0,0.7-0.4,1-1.2,1.1c-0.2,0-1.9,0.1-4.1,0.5c-3.8,0.5-5.4,1.8-5.4,4.6c0,2.6,1.9,4.2,5.3,4.2\n\t\tc2.6,0,4.1-0.7,5.6-2.9c0.7,2,1.8,2.9,3.9,2.9c1,0,1.7-0.2,2.9-0.8v-2c-0.5,0.1-0.8,0.1-1.2,0.1C47.9,67.1,47.4,66.5,47.4,64.9z\n\t\t M39.4,67c-1.7,0-2.5-0.6-2.5-1.7c0-1.3,1-2,3.1-2.4c1.9-0.2,1.8-0.2,3.2-0.6C43.3,65.4,42,67,39.4,67z'
          ),
          z(p, 'fill', '#FFFFFF'),
          z(
            p,
            'd',
            'M61.7,57.3c-1.3-1.9-2.8-2.8-4.9-2.8c-3.8,0-6.7,3.2-6.7,7.6c0,4.8,2.5,7.8,6.6,7.8c2.3,0,3.4-0.6,5.2-2.8\n\t\tv2.3h3.9V49.8h-4V57.3z M57.6,67.1c-2.4,0-3.5-1.7-3.5-4.9c0-3,1.2-4.7,3.5-4.7c2.2,0,3.6,1.9,3.6,4.7\n\t\tC61.2,65.2,59.8,67.1,57.6,67.1z'
          ),
          z(m, 'fill', '#FFFFFF'),
          z(
            m,
            'd',
            'M75.5,54.6c-4.5,0-7.8,3.4-7.8,7.7c0,4.6,3.2,7.8,7.8,7.8c4.4,0,7.2-1.8,7.7-5.1h-3.8\n\t\tc-0.5,1.6-1.3,2-3.4,2c-2.8,0-4.1-1.3-4.1-4h11.3C83.2,58,80.2,54.6,75.5,54.6z M72,60.9c0.2-2.3,1.3-3.5,3.4-3.5\n\t\tc2.2,0,3.2,1.1,3.4,3.5H72z'
          ),
          z(h, 'fill', '#FFFFFF'),
          z(
            h,
            'd',
            'M90.3,65.7v-7.6h4v-2.9h-4v-5.3h-2.9L87.3,51c-0.7,4.2-0.6,4.2-1.7,4.2h-2.3v2.9h3l-0.1,6.9v0.5\n\t\tc0,3.2,1.4,4.7,4.6,4.7c1.6,0,2.4-0.1,3.7-0.8v-2.2c-0.8,0.1-1.7,0.1-2,0.1C90.9,67.2,90.3,66.8,90.3,65.7z'
          ),
          N(r, y);
      },
      m(t, e) {
        v(t, r, e),
          x(r, s),
          x(s, a),
          x(s, o),
          x(s, l),
          x(s, i),
          x(s, c),
          x(s, d),
          x(s, u),
          x(s, f),
          x(s, g),
          x(s, $),
          x(s, p),
          x(s, m),
          x(s, h);
      },
      p(t, [e]) {
        N(
          r,
          (y = ct(w, [
            { version: '1.1' },
            { id: 'logo' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 100 88' },
            { 'enable-background': 'new 0 0 100 88' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function me(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  var he = Object.freeze({
    __proto__: null,
    ebupdate: class extends mt {
      constructor(t) {
        super(), pt(this, t, $e, ge, o, {});
      }
    },
    ekstrabladet: class extends mt {
      constructor(t) {
        super(), pt(this, t, me, pe, o, {});
      }
    },
  });
  function xe(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-down' },
            { class: 'svg-inline--fa fa-angle-down fa-w-10' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 320 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function ve(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function be(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-left' },
            { class: 'svg-inline--fa fa-angle-left fa-w-6' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 192 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function we(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function ye(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-right' },
            { class: 'svg-inline--fa fa-angle-right fa-w-6' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 192 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function ke(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ce(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'angle-up' },
            { class: 'svg-inline--fa fa-angle-up fa-w-10' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 320 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Te(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Me(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M27,46.5h-4.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H27c0.8,0,1.5,0.7,1.5,1.5S27.8,46.5,27,46.5z M15,46.5H2\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h13c0.8,0,1.5,0.7,1.5,1.5S15.8,46.5,15,46.5z M49,35.4H2c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5h47c0.8,0,1.5,0.7,1.5,1.5S49.8,35.4,49,35.4z M49,24.3H33.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49\n\tc0.8,0,1.5,0.7,1.5,1.5S49.8,24.3,49,24.3z M22.7,24.3H3.3c-1.6,0-2.8-1.2-2.8-2.8V3c0-1.6,1.2-2.8,2.8-2.8h19.4\n\tc1.6,0,2.8,1.2,2.8,2.8v18.5C25.4,23.1,24.3,24.3,22.7,24.3z M3.5,21.3l18.9,0V3.3l-18.9,0L3.5,21.3z M49,13.2H33.5\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,13.2,49,13.2z M49,3.3H33.5c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,3.3,49,3.3z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 51 47' },
            { style: 'enable-background:new 0 0 51 47;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Le(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function ze(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'class', 'st0'),
          z(
            s,
            'd',
            'M8,15.6c-4.2,0-7.6-3.4-7.6-7.6S3.8,0.4,8,0.4s7.6,3.4,7.6,7.6v1.3c0,1.3-1.1,2.4-2.4,2.4c-1,0-1.8-0.6-2.2-1.4\n\tc-0.7,0.9-1.7,1.4-2.9,1.4C6,11.7,4.3,10,4.3,8C4.3,6,6,4.3,8,4.3c1.1,0,2,0.5,2.7,1.2V4.8h1v4.5c0,0.8,0.6,1.4,1.4,1.4\n\ts1.4-0.6,1.4-1.4V8c0-3.6-2.9-6.6-6.6-6.6C4.4,1.4,1.4,4.4,1.4,8c0,3.6,2.9,6.6,6.6,6.6V15.6z M8,5.3C6.5,5.3,5.3,6.5,5.3,8\n\tc0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7C10.7,6.5,9.5,5.3,8,5.3z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 16 16' },
            { style: 'enable-background:new 0 0 16 16;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Fe(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ne(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M410.8,3.5l-280,280l-99-99c-4.7-4.7-12.3-4.7-17,0L3.5,195.8c-4.7,4.7-4.7,12.3,0,17l118.8,118.8c4.7,4.7,12.3,4.7,17,0\n\tL439.1,31.8c4.7-4.7,4.7-12.3,0-17L427.8,3.5C423.1-1.2,415.5-1.2,410.8,3.5L410.8,3.5z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 442.6 335.1' },
            { style: 'enable-background:new 0 0 442.6 335.1;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Be(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function He(n) {
    let r,
      s,
      a = [
        { 'aria-hidden': 'true' },
        { focusable: 'false' },
        { 'data-prefix': 'far' },
        { 'data-icon': 'clock' },
        { role: 'img' },
        { xmlns: 'http://www.w3.org/2000/svg' },
        { viewBox: '0 0 512 512' },
        n[0],
      ],
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'clock' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Se(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function _e(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M528,0H48C21.5,0,0,21.5,0,48v352c0,26.5,21.5,48,48,48h480c26.5,0,48-21.5,48-48V48C576,21.5,554.5,0,528,0z M48,32h480\n\tc8.8,0,16,7.2,16,16v48H32V48C32,39.2,39.2,32,48,32z M528,416H48c-8.8,0-16-7.2-16-16V192h512v208C544,408.8,536.8,416,528,416z\n\t M192,332v8c0,6.6-5.4,12-12,12h-72c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h72C186.6,320,192,325.4,192,332z M384,332v8\n\tc0,6.6-5.4,12-12,12H236c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h136C378.6,320,384,325.4,384,332z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 576 448' },
            { style: 'enable-background:new 0 0 576 448;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Ae(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function je(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2\n\tH30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 72.8 72.8' },
            { style: 'enable-background:new 0 0 72.8 72.8;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Ee(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Pe(n) {
    let r,
      s,
      a,
      o,
      l = [
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
      i = {};
    for (let t = 0; t < l.length; t += 1) i = e(i, l[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('g')),
          (a = k('g')),
          (o = k('path')),
          z(o, 'd', 'M237.4,122.1h120.5v238.5h237.4V481H357.9v238.5H237.4V481H0V360.5h237.4V122.1z'),
          N(r, i);
      },
      m(t, e) {
        v(t, r, e), x(r, s), x(s, a), x(a, o);
      },
      p(t, [e]) {
        N(
          r,
          (i = ct(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 122.1 595.3 597.4' },
            { 'enable-background': 'new 0 122.1 595.3 597.4' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Oe(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ie(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M464,0H48C21.5,0,0,21.5,0,48v288c0,26.5,21.5,48,48,48h416c26.5,0,48-21.5,48-48V48C512,21.5,490.5,0,464,0z M48,32h416\n\tc8.8,0,16,7.2,16,16v41.4c-21.9,18.5-53.2,44-150.6,121.3c-16.9,13.4-50.2,45.7-73.4,45.3c-23.2,0.4-56.6-31.9-73.4-45.3\n\tC85.2,133.4,53.9,107.9,32,89.4V48C32,39.2,39.2,32,48,32z M464,352H48c-8.8,0-16-7.2-16-16V131c22.8,18.7,58.8,47.6,130.7,104.7\n\tc20.5,16.4,56.7,52.5,93.3,52.3c36.4,0.3,72.3-35.5,93.3-52.3c71.9-57.1,107.9-86,130.7-104.7v205C480,344.8,472.8,352,464,352z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 512 384' },
            { style: 'enable-background:new 0 0 512 384;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function De(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ve(n) {
    let r,
      s,
      a,
      o = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 34 16.4' }, n[0]],
      l = {};
    for (let t = 0; t < o.length; t += 1) l = e(l, o[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          (a = k('path')),
          z(
            s,
            'd',
            'M15.6.8c.8-.8 2-.8 2.8 0l6.7 6.7c1.9 1.9 4.4 2.9 7.1 2.9H34v6H0v-6h1.9c2.7 0 5.2-1.1 7.1-2.9L15.6.8z'
          ),
          z(s, 'fill', '#fff'),
          z(a, 'd', 'M9.7 12.9l6.6-6.6c.4-.4 1-.4 1.4 0l6.6 6.6c.6.6.2 1.7-.7 1.7H10.4c-.9 0-1.3-1-.7-1.7z'),
          N(r, l);
      },
      m(t, e) {
        v(t, r, e), x(r, s), x(r, a);
      },
      p(t, [e]) {
        N(r, (l = ct(o, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 34 16.4' }, 1 & e && t[0]])));
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Re(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function qe(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M43.7,54.5c-0.3,0-0.6,0-0.9-0.1l-32.7-6.6c-0.8-0.2-1.3-1-1.2-1.8c0.2-0.8,1-1.3,1.8-1.2l32.8,6.6c0.1,0,0.1,0,0.2,0\n\tc0.1,0,0.1,0,0.6-0.1l0.1,0c0,0,0-0.1,0.1-0.1c0-0.1,0-0.1,0-0.2l7.1-35c0-0.2,0-0.4-0.1-0.6c-0.1-0.1-0.2-0.2-0.4-0.3L46,14.3\n\tc-0.8-0.1-1.4-0.9-1.2-1.7c0.1-0.8,0.9-1.4,1.7-1.2l4.9,0.9c1,0.2,1.8,0.7,2.4,1.5c0.6,0.9,0.8,1.9,0.6,2.9l-7.1,34.9\n\tc-0.1,1-0.8,2-1.7,2.5c-0.1,0-0.1,0.1-0.2,0.1l-0.2,0.1C44.8,54.3,44.3,54.5,43.7,54.5z M39.6,43.3H4.2c-2.2,0-3.7-1.6-3.7-3.7V4.2\n\tc0-2.2,1.6-3.7,3.7-3.7h35.4c2.2,0,3.7,1.6,3.7,3.7v35.4C43.3,41.8,41.8,43.3,39.6,43.3z M3.5,36.7v2.9c0,0.5,0.2,0.7,0.7,0.7h35.4\n\tc0.5,0,0.7-0.2,0.7-0.7v-2.9H3.5z M37.7,33.7h2.6V4.2c0-0.5-0.2-0.7-0.7-0.7H4.2c-0.5,0-0.7,0.2-0.7,0.7v29.5h2.6\n\tc0.2-1.7,0.6-3.4,1.4-5.1c1.2-2.4,4.8-3.7,9.8-5.4c0.2-0.5,0.2-1.7,0-2.1c-2.1-2.4-3-5.2-2.8-8.1c0-2.2,0.6-4,1.9-5.5\n\tc1.4-1.6,3.3-2.5,5.6-2.5c2,0,3.9,0.9,5.5,2.4c0,0,0.1,0.1,0.1,0.1c1.3,1.6,1.9,3.5,1.7,5.6c0.2,3-0.8,5.9-2.7,7.9\n\tc-0.2,0.5-0.2,1.8,0,2.3c0.6,0.2,1.3,0.5,1.9,0.7c4,1.5,6.9,2.6,7.9,4.6C37.1,30.3,37.6,32,37.7,33.7z M9.1,33.7h25.6\n\tc-0.2-1.3-0.5-2.6-1.1-3.9c-0.4-0.9-3.4-2-6.2-3c-0.7-0.3-1.4-0.5-2.2-0.8c-0.5-0.2-1.2-0.7-1.5-1.8c-0.5-1.5-0.3-3.9,0.4-4.9\n\tc0.1-0.1,0.1-0.2,0.2-0.2c1.4-1.4,2.2-3.6,2-5.9c0-0.1,0-0.2,0-0.3c0.2-1.3-0.1-2.5-0.9-3.4c-0.6-0.6-1.8-1.5-3.3-1.5\n\tc-1.4,0-2.5,0.5-3.3,1.5c-0.8,1-1.2,2.2-1.2,3.7c0,0,0,0.1,0,0.1c-0.2,2.2,0.5,4.2,2.1,6c0.9,0.9,1.1,3.3,0.8,4.6\n\tc-0.4,1.6-1.3,2.1-1.8,2.3c-2.8,0.9-7.5,2.5-8.2,3.9C9.7,31.1,9.3,32.4,9.1,33.7z M17.3,21.1C17.3,21.2,17.3,21.2,17.3,21.1\n\tC17.3,21.2,17.3,21.2,17.3,21.1z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 55 55' },
            { style: 'enable-background:new 0 0 55 55;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Ge(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function We(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9\n\tc1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9\n\tC15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4\n\tc-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1\n\tc0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6\n\tc-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3\n\tl-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9\n\tc-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1\n\tC40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2\n\tc0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2\n\tc-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2\n\tC45,52.2,44.5,52.5,44,52.5z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 53 53' },
            { style: 'enable-background:new 0 0 53 53;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Ue(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ye(n) {
    let r,
      s,
      a = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 512 512' }, n[0]],
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(r, (o = ct(a, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 512 512' }, 1 & e && t[0]])));
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Ze(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Xe(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'history' },
            { class: 'svg-inline--fa fa-history fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Je(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ke(n) {
    let r,
      s,
      a = [{ viewBox: '0 0 10 16' }, { xmlns: 'http://www.w3.org/2000/svg' }, n[0]],
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M3.3386 9.49129L0.487524 8.39426C-0.0111216 8.20239 -0.160746 7.59269 0.196055 7.20656L6.62062 0.25398C7.16186 -0.331744 8.15565 0.179283 7.95001 0.937577L6.43918 6.50871L9.29025 7.60574C9.7889 7.79761 9.93852 8.40731 9.58172 8.79344L3.15716 15.746C2.61592 16.3317 1.62213 15.8207 1.82777 15.0624L3.3386 9.49129Z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(r, (o = ct(a, [{ viewBox: '0 0 10 16' }, { xmlns: 'http://www.w3.org/2000/svg' }, 1 & e && t[0]])));
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Qe(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function tn(n) {
    let r,
      s,
      a = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, n[0]],
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(r, (o = ct(a, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, 1 & e && t[0]])));
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function en(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function nn(n) {
    let r,
      s,
      a = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, n[0]],
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(r, (o = ct(a, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 448 512' }, 1 & e && t[0]])));
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function rn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function sn(n) {
    let r,
      s,
      a,
      o,
      l,
      i,
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
    for (let t = 0; t < c.length; t += 1) d = e(d, c[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('g')),
          (a = k('rect')),
          (o = k('polygon')),
          (l = k('path')),
          (i = k('polygon')),
          z(a, 'y', '70.7'),
          z(a, 'width', '63.3'),
          z(a, 'height', '10.9'),
          z(o, 'points', '0,81.5 21.2,61.8 21.2,47.8 0,67.5 \t'),
          z(
            l,
            'd',
            'M31.8,0C14.2,0,0,14.2,0,31.8c0,13.8,8.9,25.6,21.2,30v-14c-5.2-3.4-8.6-9.3-8.6-16c0-10.6,8.6-19.2,19.2-19.2\n\t\tS51,21.2,51,31.8c0,6.7-3.4,12.5-8.6,16v14c12.3-4.4,21.2-16.1,21.2-30C63.6,14.2,49.3,0,31.8,0z'
          ),
          z(i, 'points', '63.6,81.5 42.4,61.7 42.4,47.8 63.6,67.5 \t'),
          N(r, d);
      },
      m(t, e) {
        v(t, r, e), x(r, s), x(s, a), x(s, o), x(s, l), x(s, i);
      },
      p(t, [e]) {
        N(
          r,
          (d = ct(c, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 63.6 81.5' },
            { style: 'enable-background:new 0 0 63.6 81.5;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function an(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function on(n) {
    let r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g = [
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
      $ = {};
    for (let t = 0; t < g.length; t += 1) $ = e($, g[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('g')),
          (a = k('g')),
          (o = k('rect')),
          (l = k('g')),
          (i = k('g')),
          (c = k('rect')),
          (d = k('g')),
          (u = k('g')),
          (f = k('rect')),
          z(o, 'y', '4.3'),
          z(o, 'width', '30'),
          z(o, 'height', '4'),
          z(c, 'y', '12.3'),
          z(c, 'width', '30'),
          z(c, 'height', '4'),
          z(f, 'y', '20.3'),
          z(f, 'width', '30'),
          z(f, 'height', '4'),
          N(r, $);
      },
      m(t, e) {
        v(t, r, e), x(r, s), x(s, a), x(a, o), x(r, l), x(l, i), x(i, c), x(r, d), x(d, u), x(u, f);
      },
      p(t, [e]) {
        N(
          r,
          ($ = ct(g, [
            { version: '1.1' },
            { id: 'Lag_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 30 30' },
            { 'enable-background': 'new 0 0 30 30' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function ln(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function cn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zm-23.3 115H45.8V71.7H187v69.8zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 230.7H324.9V71.7h141.2v185.5zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM187 440.5H45.8v-160H187v160zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 90.4H324.9v-45.2h141.2v45.2z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'miteb-regular' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0' },
            { y: '0' },
            { viewBox: '0 0 512 512' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function dn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function un(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'miteb-solid' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0' },
            { y: '0' },
            { viewBox: '0 0 512 512' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function fn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function gn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M35.8,38.5H6.2c-3.5,0-6.2-2.7-6.2-6.2V2.7C0,1.2,1.2,0,2.7,0h26.1c1.6,0,2.7,1.2,2.7,2.7v29.6c0,2.4,1.8,4.2,4.2,4.2\n\ts4.2-1.8,4.2-4.2V6.2c0-0.6,0.4-1,1-1s1,0.4,1,1v26.1C42,35.8,39.3,38.5,35.8,38.5z M2.7,2C2.2,2,2,2.2,2,2.7v29.6\n\tc0,2.4,1.8,4.2,4.2,4.2h25c-1-1.1-1.6-2.6-1.6-4.2V2.7c0-0.5-0.2-0.7-0.7-0.7H2.7z M35.8,33.8c-0.6,0-1-0.4-1-1V6.2c0-0.6,0.4-1,1-1\n\ts1,0.4,1,1v26.5C36.8,33.3,36.3,33.8,35.8,33.8z M25.3,29.8H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1\n\tS25.9,29.8,25.3,29.8z M25.3,24.6H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1S25.9,24.6,25.3,24.6z M25.3,19.4h-4.9\n\tc-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,19.4,25.3,19.4z M15.8,19.4H7.1c-1.1,0-1.9-0.8-1.9-1.9V8.8\n\tC5.2,7.8,6,7,7.1,7h8.7c1.1,0,1.9,0.8,1.9,1.9v8.7C17.7,18.6,16.8,19.4,15.8,19.4z M7.2,17.4l8.4,0V9L7.2,9L7.2,17.4z M25.3,14.2\n\th-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,14.2,25.3,14.2z M25.3,9h-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9\n\tc0.6,0,1,0.4,1,1S25.9,9,25.3,9z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 42 39' },
            { style: 'enable-background:new 0 0 42 39;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function $n(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function pn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M12.9,14.2c-0.1,0-0.1,0-0.2,0v0c-6.3-0.6-11.3-5.7-12-12c0-0.5,0.1-0.9,0.4-1.3C1.5,0.6,2,0.4,2.5,0.4h2.3\n\tc0.8,0,1.5,0.5,1.7,1.2l0.7,2.2c0.2,0.6,0,1.3-0.4,1.8L6.4,6c0,0-0.1,0.1,0,0.2c0.7,1,1.3,1.6,2.4,2.4c0.1,0,0.1,0,0.2,0l0.4-0.4\n\tc0.5-0.5,1.2-0.6,1.8-0.4l2.2,0.7c0.7,0.2,1.2,0.9,1.2,1.7v2.3c0,0.5-0.2,1-0.6,1.3C13.7,14,13.3,14.2,12.9,14.2z M2.5,1.4\n\tc-0.2,0-0.4,0.1-0.6,0.2C1.8,1.8,1.7,1.9,1.8,2.1C2.3,8,7,12.6,12.8,13.2l0,0c0.2,0,0.4,0,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6v-2.3\n\tc0-0.3-0.2-0.6-0.5-0.7l-2.2-0.7c-0.3-0.1-0.6,0-0.8,0.2L9.6,9.2c-0.4,0.4-1,0.4-1.4,0.1C7,8.5,6.3,7.9,5.6,6.7\n\tc-0.3-0.4-0.2-1,0.1-1.4L6.1,5c0.2-0.2,0.3-0.5,0.2-0.8L5.5,1.9C5.4,1.6,5.1,1.4,4.8,1.4H2.5z M14,5.2c-0.3,0-0.5-0.2-0.5-0.5\n\tc0-1.9-1.5-3.4-3.4-3.4c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5c2.4,0,4.4,2,4.4,4.4C14.5,5,14.3,5.2,14,5.2z M11.5,5.2\n\tC11.2,5.2,11,5,11,4.8C11,4.3,10.6,4,10.2,4C9.9,4,9.7,3.7,9.7,3.5S9.9,3,10.2,3c1,0,1.8,0.8,1.8,1.8C12,5,11.8,5.2,11.5,5.2z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 15 15' },
            { style: 'enable-background:new 0 0 15 15;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function mn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function hn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'fal' },
            { 'data-icon': 'play-circle' },
            { class: 'svg-inline--fa fa-play-circle fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function xn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function vn(n) {
    let r,
      s,
      a,
      o,
      l = [
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
      i = {};
    for (let t = 0; t < l.length; t += 1) i = e(i, l[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          (a = k('path')),
          (o = k('path')),
          z(
            s,
            'd',
            'M0,9V0.4h3.7c0.9,0,1.6,0.1,2,0.2c0.4,0.2,0.8,0.4,1,0.8C6.9,1.9,7,2.3,7,2.8C7,3.5,6.8,4,6.5,4.4C6.1,4.8,5.5,5.1,4.8,5.2\n\tc0.4,0.2,0.7,0.5,0.9,0.7c0.2,0.3,0.6,0.7,1,1.4l1,1.7H5.6L4.4,7.1C3.9,6.5,3.6,6,3.5,5.9C3.3,5.7,3.1,5.6,3,5.5\n\tC2.8,5.4,2.5,5.4,2.1,5.4H1.7V9H0z M1.7,4H3c0.8,0,1.4,0,1.6-0.1s0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.6c0-0.3-0.1-0.5-0.2-0.7\n\tC4.9,2.1,4.6,1.9,4.4,1.9c-0.1,0-0.6,0-1.3,0H1.7V4z'
          ),
          z(
            a,
            'd',
            'M8.2,6.2L9.9,6c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.3,0.4c0.6,0,1-0.1,1.3-0.4c0.3-0.2,0.4-0.5,0.4-0.8\n\tc0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.7-0.2-1.4-0.4c-0.9-0.2-1.6-0.5-2-0.8c-0.5-0.5-0.8-1-0.8-1.7\n\tc0-0.4,0.1-0.8,0.4-1.2C9.2,1.1,9.5,0.8,10,0.6c0.5-0.2,1-0.3,1.7-0.3c1.1,0,1.9,0.2,2.4,0.7c0.5,0.5,0.8,1.1,0.9,1.9l-1.7,0.1\n\tC13.2,2.5,13,2.2,12.8,2c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc0.2,0.2,0.8,0.4,1.6,0.6c0.8,0.2,1.5,0.4,1.9,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4\n\tc-0.3,0.4-0.7,0.8-1.2,1c-0.5,0.2-1.1,0.3-1.9,0.3c-1.1,0-1.9-0.2-2.5-0.8C8.7,7.9,8.3,7.2,8.2,6.2z'
          ),
          z(
            o,
            'd',
            'M16.2,6.2L17.9,6c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.3,0.4c0.6,0,1-0.1,1.3-0.4c0.3-0.2,0.4-0.5,0.4-0.8\n\tc0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.7-0.2-1.4-0.4c-0.9-0.2-1.6-0.5-2-0.8c-0.5-0.5-0.8-1-0.8-1.7\n\tc0-0.4,0.1-0.8,0.4-1.2c0.2-0.4,0.6-0.7,1.1-0.9c0.5-0.2,1-0.3,1.7-0.3c1.1,0,1.9,0.2,2.4,0.7c0.5,0.5,0.8,1.1,0.9,1.9l-1.7,0.1\n\tC21.2,2.5,21,2.2,20.8,2c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc0.2,0.2,0.8,0.4,1.6,0.6c0.8,0.2,1.5,0.4,1.9,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4\n\tc-0.3,0.4-0.7,0.8-1.2,1c-0.5,0.2-1.1,0.3-1.9,0.3c-1.1,0-1.9-0.2-2.5-0.8C16.7,7.9,16.3,7.2,16.2,6.2z'
          ),
          N(r, i);
      },
      m(t, e) {
        v(t, r, e), x(r, s), x(r, a), x(r, o);
      },
      p(t, [e]) {
        N(
          r,
          (i = ct(l, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 24 10' },
            { style: 'enable-background:new 0 0 24 10;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function bn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function wn(n) {
    let r,
      s,
      a = [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 320 512' }, n[0]],
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(r, (o = ct(a, [{ xmlns: 'http://www.w3.org/2000/svg' }, { viewBox: '0 0 320 512' }, 1 & e && t[0]])));
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function yn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function kn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'star' },
            { class: 'svg-inline--fa fa-star fa-w-18' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 576 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Cn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Tn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a47.998 47.998 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM259.886 463.996L48 252.118V48h204.118L464 259.882 259.886 463.996zM192 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { id: 'tag-regular' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'tag' },
            { class: 'svg-inline--fa fa-tag fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Mn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Ln(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { id: 'tag-solid' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'fas' },
            { 'data-icon': 'tag' },
            { class: 'svg-inline--fa fa-tag fa-w-16' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 512 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function zn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Fn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-.36-.36L592 259.882 331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zm-128 0L293.823 497.941C284.451 507.314 272.166 512 259.882 512c-12.284 0-24.569-4.686-33.941-14.059L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118a47.998 47.998 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zM464 259.882L252.118 48H48v204.118l211.886 211.878L464 259.882zM144 96c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { id: 'tags-regular' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'tags' },
            { class: 'svg-inline--fa fa-tags fa-w-20' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 640 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Nn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Bn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { id: 'tags-solid' },
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'fas' },
            { 'data-icon': 'tags' },
            { class: 'svg-inline--fa fa-tags fa-w-20' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 640 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Hn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function Sn(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM48 256c0-79.583 64.404-144 144-144 79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144-79.582 0-144-64.404-144-144zm336 144h-65.02c86.704-76.515 86.683-211.504 0-288H384c79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'toggle-off' },
            { class: 'svg-inline--fa fa-toggle-off fa-w-18' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 576 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function _n(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function An(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(s, 'fill', 'currentColor'),
          z(
            s,
            'd',
            'M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 336c-79.6 0-144-64.4-144-144s64.4-144 144-144 144 64.4 144 144-64.4 144-144 144z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { 'aria-hidden': 'true' },
            { focusable: 'false' },
            { 'data-prefix': 'far' },
            { 'data-icon': 'toggle-on' },
            { class: 'svg-inline--fa fa-toggle-on fa-w-18' },
            { role: 'img' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { viewBox: '0 0 576 512' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function jn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  function En(n) {
    let r,
      s,
      a = [
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
      o = {};
    for (let t = 0; t < a.length; t += 1) o = e(o, a[t]);
    return {
      c() {
        (r = k('svg')),
          (s = k('path')),
          z(
            s,
            'd',
            'M45,47.5H6.1c-3.1,0-5.6-2.5-5.6-5.6V6.1C0.5,3,3,0.5,6.1,0.5H45c3.1,0,5.6,2.5,5.6,5.6v35.8\n\tC50.6,45,48.1,47.5,45,47.5z M6.1,3.5c-1.4,0-2.6,1.2-2.6,2.6v35.8c0,1.4,1.2,2.6,2.6,2.6H45c1.4,0,2.6-1.2,2.6-2.6V6.1\n\tc0-1.4-1.2-2.6-2.6-2.6H6.1z M30.7,43.4c-2.1,0-3.5-1.5-3.5-3.5v-0.5h-19c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h19v-0.5\n\tc0-2.1,1.5-3.5,3.5-3.5s3.5,1.5,3.5,3.5v0.5H43c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5h-8.7v0.5C34.2,41.9,32.8,43.4,30.7,43.4z\n\t M30.1,37.8v2c0,0.4,0.1,0.5,0.5,0.5s0.5-0.1,0.5-0.5v-4.1c0-0.4-0.1-0.5-0.5-0.5s-0.5,0.1-0.5,0.5V37.8z M20.2,30.3\n\tc-0.5,0-0.9-0.1-1.3-0.4c-0.8-0.5-1.3-1.3-1.3-2.3V13.7c0-1,0.6-1.9,1.4-2.4c0.9-0.5,1.9-0.4,2.6,0.1l12,6.9\n\tc0.8,0.4,1.4,1.3,1.4,2.3c0,1-0.6,1.9-1.4,2.4l-12,6.9c0,0-0.1,0-0.1,0C21.1,30.2,20.6,30.3,20.2,30.3z M20.8,28.7L20.8,28.7\n\tL20.8,28.7z M20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6z M20.7,14.3V27l11-6.3L20.7,14.3z M32.2,21\n\tC32.2,21,32.2,21,32.2,21L32.2,21z M32.2,20.4C32.2,20.4,32.2,20.4,32.2,20.4L32.2,20.4z M19.8,13.8C19.8,13.8,19.8,13.8,19.8,13.8\n\tC19.8,13.8,19.8,13.8,19.8,13.8z'
          ),
          N(r, o);
      },
      m(t, e) {
        v(t, r, e), x(r, s);
      },
      p(t, [e]) {
        N(
          r,
          (o = ct(a, [
            { version: '1.1' },
            { id: 'Layer_1' },
            { xmlns: 'http://www.w3.org/2000/svg' },
            { 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
            { x: '0px' },
            { y: '0px' },
            { viewBox: '0 0 51 48' },
            { style: 'enable-background:new 0 0 51 48;' },
            { 'xml:space': 'preserve' },
            1 & e && t[0],
          ]))
        );
      },
      i: t,
      o: t,
      d(t) {
        t && b(r);
      },
    };
  }
  function Pn(t, n, r) {
    return (
      (t.$$set = (t) => {
        r(0, (n = e(e({}, n), h(t))));
      }),
      [(n = h(n))]
    );
  }
  var On = Object.freeze({
    __proto__: null,
    angledown: class extends mt {
      constructor(t) {
        super(), pt(this, t, ve, xe, o, {});
      }
    },
    angleleft: class extends mt {
      constructor(t) {
        super(), pt(this, t, we, be, o, {});
      }
    },
    angleright: class extends mt {
      constructor(t) {
        super(), pt(this, t, ke, ye, o, {});
      }
    },
    angleup: class extends mt {
      constructor(t) {
        super(), pt(this, t, Te, Ce, o, {});
      }
    },
    article: class extends mt {
      constructor(t) {
        super(), pt(this, t, Le, Me, o, {});
      }
    },
    at: class extends mt {
      constructor(t) {
        super(), pt(this, t, Fe, ze, o, {});
      }
    },
    check: class extends mt {
      constructor(t) {
        super(), pt(this, t, Be, Ne, o, {});
      }
    },
    clock: class extends mt {
      constructor(t) {
        super(), pt(this, t, Se, He, o, {});
      }
    },
    creditcard: class extends mt {
      constructor(t) {
        super(), pt(this, t, Ae, _e, o, {});
      }
    },
    ebplus_icon: class extends mt {
      constructor(t) {
        super(), pt(this, t, Ee, je, o, {});
      }
    },
    ebplus_sort: class extends mt {
      constructor(t) {
        super(), pt(this, t, Oe, Pe, o, {});
      }
    },
    envelope: class extends mt {
      constructor(t) {
        super(), pt(this, t, De, Ie, o, {});
      }
    },
    figcaptionpin: class extends mt {
      constructor(t) {
        super(), pt(this, t, Re, Ve, o, {});
      }
    },
    gallery: class extends mt {
      constructor(t) {
        super(), pt(this, t, Ge, qe, o, {});
      }
    },
    headphones: class extends mt {
      constructor(t) {
        super(), pt(this, t, Ue, We, o, {});
      }
    },
    headset: class extends mt {
      constructor(t) {
        super(), pt(this, t, Ze, Ye, o, {});
      }
    },
    historyregular: class extends mt {
      constructor(t) {
        super(), pt(this, t, Je, Xe, o, {});
      }
    },
    lightning: class extends mt {
      constructor(t) {
        super(), pt(this, t, Qe, Ke, o, {});
      }
    },
    lockold: class extends mt {
      constructor(t) {
        super(), pt(this, t, en, tn, o, {});
      }
    },
    lock: class extends mt {
      constructor(t) {
        super(), pt(this, t, rn, nn, o, {});
      }
    },
    medielogin: class extends mt {
      constructor(t) {
        super(), pt(this, t, an, sn, o, {});
      }
    },
    menubars: class extends mt {
      constructor(t) {
        super(), pt(this, t, ln, on, o, {});
      }
    },
    mitebregular: class extends mt {
      constructor(t) {
        super(), pt(this, t, dn, cn, o, {});
      }
    },
    mitebsolid: class extends mt {
      constructor(t) {
        super(), pt(this, t, fn, un, o, {});
      }
    },
    newspaper: class extends mt {
      constructor(t) {
        super(), pt(this, t, $n, gn, o, {});
      }
    },
    phone: class extends mt {
      constructor(t) {
        super(), pt(this, t, mn, pn, o, {});
      }
    },
    play: class extends mt {
      constructor(t) {
        super(), pt(this, t, xn, hn, o, {});
      }
    },
    rss: class extends mt {
      constructor(t) {
        super(), pt(this, t, bn, vn, o, {});
      }
    },
    smartphone: class extends mt {
      constructor(t) {
        super(), pt(this, t, yn, wn, o, {});
      }
    },
    starregular: class extends mt {
      constructor(t) {
        super(), pt(this, t, Cn, kn, o, {});
      }
    },
    tagregular: class extends mt {
      constructor(t) {
        super(), pt(this, t, Mn, Tn, o, {});
      }
    },
    tagsolid: class extends mt {
      constructor(t) {
        super(), pt(this, t, zn, Ln, o, {});
      }
    },
    tagsregular: class extends mt {
      constructor(t) {
        super(), pt(this, t, Nn, Fn, o, {});
      }
    },
    tagssolid: class extends mt {
      constructor(t) {
        super(), pt(this, t, Hn, Bn, o, {});
      }
    },
    toggleoff: class extends mt {
      constructor(t) {
        super(), pt(this, t, _n, Sn, o, {});
      }
    },
    toggleon: class extends mt {
      constructor(t) {
        super(), pt(this, t, jn, An, o, {});
      }
    },
    video: class extends mt {
      constructor(t) {
        super(), pt(this, t, Pn, En, o, {});
      }
    },
  });
  function In(e) {
    let n;
    return {
      c() {
        (n = y('i')), z(n, 'class', e[1]), z(n, 'style', e[0]), z(n, 'aria-hidden', 'true');
      },
      m(t, e) {
        v(t, n, e);
      },
      p(t, e) {
        2 & e && z(n, 'class', t[1]), 1 & e && z(n, 'style', t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Dn(t) {
    let e, n, r;
    var s = Rn[t[2].replace('-', '')];
    function a(t) {
      return { props: { style: t[0], class: t[5], 'data-flipped': t[3] } };
    }
    return (
      s && ((e = new s(a(t))), e.$on('click', t[7])),
      {
        c() {
          e && ft(e.$$.fragment), (n = M());
        },
        m(t, s) {
          e && gt(e, t, s), v(t, n, s), (r = !0);
        },
        p(t, r) {
          const o = {};
          if ((1 & r && (o.style = t[0]), 8 & r && (o['data-flipped'] = t[3]), s !== (s = Rn[t[2].replace('-', '')]))) {
            if (e) {
              at();
              const t = e;
              it(t.$$.fragment, 1, 0, () => {
                $t(t, 1);
              }),
                ot();
            }
            s
              ? ((e = new s(a(t))),
                e.$on('click', t[7]),
                ft(e.$$.fragment),
                lt(e.$$.fragment, 1),
                gt(e, n.parentNode, n))
              : (e = null);
          } else s && e.$set(o);
        },
        i(t) {
          r || (e && lt(e.$$.fragment, t), (r = !0));
        },
        o(t) {
          e && it(e.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && b(n), e && $t(e, t);
        },
      }
    );
  }
  function Vn(t) {
    let e, n, r, s;
    const a = [Dn, In],
      o = [];
    function l(t, e) {
      return 'svg' === t[4] ? 0 : 1;
    }
    return (
      (e = l(t)),
      (n = o[e] = a[e](t)),
      {
        c() {
          n.c(), (r = M());
        },
        m(t, n) {
          o[e].m(t, n), v(t, r, n), (s = !0);
        },
        p(t, [s]) {
          let i = e;
          (e = l(t)),
            e === i
              ? o[e].p(t, s)
              : (at(),
                it(o[i], 1, 1, () => {
                  o[i] = null;
                }),
                ot(),
                (n = o[e]),
                n ? n.p(t, s) : ((n = o[e] = a[e](t)), n.c()),
                lt(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          s || (lt(n), (s = !0));
        },
        o(t) {
          it(n), (s = !1);
        },
        d(t) {
          o[e].d(t), t && b(r);
        },
      }
    );
  }
  const Rn = Object.assign(Object.assign({}, he), On);
  function qn(t, e, n) {
    let { className: r } = e,
      { name: s } = e,
      { flipped: a = !1 } = e,
      { type: o = 'svg' } = e,
      { width: l = 36 } = e,
      { style: i } = e;
    const c = 'svg' === o ? `width: ${l}px; height: ${l}px;` : '';
    let d = r ? `icon-svg ${r}` : 'icon-svg';
    return (
      (t.$$set = (t) => {
        'className' in t && n(1, (r = t.className)),
          'name' in t && n(2, (s = t.name)),
          'flipped' in t && n(3, (a = t.flipped)),
          'type' in t && n(4, (o = t.type)),
          'width' in t && n(6, (l = t.width)),
          'style' in t && n(0, (i = t.style));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty && n(0, (i = i ? `${c} ${i}` : c));
      }),
      [
        i,
        r,
        s,
        a,
        o,
        d,
        l,
        function (e) {
          R.call(this, t, e);
        },
      ]
    );
  }
  class Gn extends mt {
    constructor(t) {
      super(), pt(this, t, qn, Vn, o, { className: 1, name: 2, flipped: 3, type: 4, width: 6, style: 0 });
    }
  }
  const Wn = (t) => ({}),
    Un = (t) => ({}),
    Yn = (t) => ({}),
    Zn = (t) => ({}),
    Xn = (t) => ({}),
    Jn = (t) => ({}),
    Kn = (t) => ({}),
    Qn = (t) => ({});
  function tr(t) {
    let e, n, r, s, a, o;
    const l = [rr, nr],
      i = [];
    function c(t, e) {
      return t[2] ? 0 : 1;
    }
    return (
      (n = c(t)),
      (r = i[n] = l[n](t)),
      {
        c() {
          (e = y('button')), r.c(), z(e, 'class', t[1]);
        },
        m(r, l) {
          v(r, e, l), i[n].m(e, null), (s = !0), a || ((o = L(e, 'click', t[4])), (a = !0));
        },
        p(t, a) {
          let o = n;
          (n = c(t)),
            n === o
              ? i[n].p(t, a)
              : (at(),
                it(i[o], 1, 1, () => {
                  i[o] = null;
                }),
                ot(),
                (r = i[n]),
                r ? r.p(t, a) : ((r = i[n] = l[n](t)), r.c()),
                lt(r, 1),
                r.m(e, null)),
            (!s || 2 & a) && z(e, 'class', t[1]);
        },
        i(t) {
          s || (lt(r), (s = !0));
        },
        o(t) {
          it(r), (s = !1);
        },
        d(t) {
          t && b(e), i[n].d(), (a = !1), o();
        },
      }
    );
  }
  function er(t) {
    let e, n, r, a, o, l, i, c, d, u, g, h;
    const w = t[8].on,
      k = f(w, t, t[7], Qn);
    function C(e) {
      t[10](e);
    }
    let M = { className: 'margin-s--rl', width: '20', style: 'cursor: pointer;' };
    void 0 !== t[3] && (M.name = t[3]),
      (o = new Gn({ props: M })),
      G.push(() => ut(o, 'name', C)),
      o.$on('click', t[4]);
    const F = t[8].off,
      N = f(F, t, t[7], Jn);
    return {
      c() {
        (e = y('div')),
          (n = y('button')),
          k && k.c(),
          (a = T()),
          ft(o.$$.fragment),
          (i = T()),
          (c = y('button')),
          N && N.c(),
          z(n, 'data-status', t[2]),
          z(n, 'class', (r = 'toggle--switch ' + t[1])),
          z(c, 'data-status', t[2]),
          z(c, 'class', (d = 'toggle--switch ' + t[1])),
          z(e, 'class', 'flex flex-align--center');
      },
      m(r, s) {
        v(r, e, s),
          x(e, n),
          k && k.m(n, null),
          x(e, a),
          gt(o, e, null),
          x(e, i),
          x(e, c),
          N && N.m(c, null),
          (u = !0),
          g || ((h = [L(n, 'click', t[9]), L(c, 'click', t[11])]), (g = !0));
      },
      p(t, e) {
        k && k.p && (!u || 128 & e) && p(k, w, t, t[7], u ? $(w, t[7], e, Kn) : m(t[7]), Qn),
          (!u || 4 & e) && z(n, 'data-status', t[2]),
          (!u || (2 & e && r !== (r = 'toggle--switch ' + t[1]))) && z(n, 'class', r);
        const s = {};
        !l && 8 & e && ((l = !0), (s.name = t[3]), K(() => (l = !1))),
          o.$set(s),
          N && N.p && (!u || 128 & e) && p(N, F, t, t[7], u ? $(F, t[7], e, Xn) : m(t[7]), Jn),
          (!u || 4 & e) && z(c, 'data-status', t[2]),
          (!u || (2 & e && d !== (d = 'toggle--switch ' + t[1]))) && z(c, 'class', d);
      },
      i(t) {
        u || (lt(k, t), lt(o.$$.fragment, t), lt(N, t), (u = !0));
      },
      o(t) {
        it(k, t), it(o.$$.fragment, t), it(N, t), (u = !1);
      },
      d(t) {
        t && b(e), k && k.d(t), $t(o), N && N.d(t), (g = !1), s(h);
      },
    };
  }
  function nr(t) {
    let e;
    const n = t[8].off,
      r = f(n, t, t[7], Un);
    return {
      c() {
        r && r.c();
      },
      m(t, n) {
        r && r.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 128 & s) && p(r, n, t, t[7], e ? $(n, t[7], s, Wn) : m(t[7]), Un);
      },
      i(t) {
        e || (lt(r, t), (e = !0));
      },
      o(t) {
        it(r, t), (e = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function rr(t) {
    let e;
    const n = t[8].on,
      r = f(n, t, t[7], Zn);
    return {
      c() {
        r && r.c();
      },
      m(t, n) {
        r && r.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 128 & s) && p(r, n, t, t[7], e ? $(n, t[7], s, Yn) : m(t[7]), Zn);
      },
      i(t) {
        e || (lt(r, t), (e = !0));
      },
      o(t) {
        it(r, t), (e = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function sr(t) {
    let e, n, r, s;
    const a = [er, tr],
      o = [];
    function l(t, e) {
      return t[0] ? 0 : 1;
    }
    return (
      (e = l(t)),
      (n = o[e] = a[e](t)),
      {
        c() {
          n.c(), (r = M());
        },
        m(t, n) {
          o[e].m(t, n), v(t, r, n), (s = !0);
        },
        p(t, [s]) {
          let i = e;
          (e = l(t)),
            e === i
              ? o[e].p(t, s)
              : (at(),
                it(o[i], 1, 1, () => {
                  o[i] = null;
                }),
                ot(),
                (n = o[e]),
                n ? n.p(t, s) : ((n = o[e] = a[e](t)), n.c()),
                lt(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          s || (lt(n), (s = !0));
        },
        o(t) {
          it(n), (s = !1);
        },
        d(t) {
          o[e].d(t), t && b(r);
        },
      }
    );
  }
  function ar(t, e, n) {
    let { $$slots: r = {}, $$scope: s } = e,
      { className: a } = e,
      { defaultState: o = !0 } = e,
      { isSwitch: l = !1 } = e,
      i = 'toggle-button';
    a && (i = `${a} ${i}`);
    let c = o,
      d = c ? 'toggle-on' : 'toggle-off';
    const u = I();
    function f(t, e) {
      t.preventDefault(), n(2, (c = null != e ? e : !c)), n(3, (d = c ? 'toggle-on' : 'toggle-off')), u('toggle', c);
    }
    return (
      (t.$$set = (t) => {
        'className' in t && n(5, (a = t.className)),
          'defaultState' in t && n(6, (o = t.defaultState)),
          'isSwitch' in t && n(0, (l = t.isSwitch)),
          '$$scope' in t && n(7, (s = t.$$scope));
      }),
      [
        l,
        i,
        c,
        d,
        f,
        a,
        o,
        s,
        r,
        (t) => f(t, !0),
        function (t) {
          (d = t), n(3, d);
        },
        (t) => f(t, !1),
      ]
    );
  }
  class or extends mt {
    constructor(t) {
      super(), pt(this, t, ar, sr, o, { className: 5, defaultState: 6, isSwitch: 0 });
    }
  }
  const lr = (t) => ({}),
    ir = (t) => ({ slot: 'on' }),
    cr = (t) => ({}),
    dr = (t) => ({ slot: 'off' });
  function ur(t) {
    let e, n;
    return {
      c() {
        (e = y('div')),
          (n = y('div')),
          z(n, 'class', 'card-image bg--graa4'),
          z(n, 'style', t[12]),
          z(e, 'class', 'card-media');
      },
      m(t, r) {
        v(t, e, r), x(e, n);
      },
      p(t, e) {
        4096 & e && z(n, 'style', t[12]);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function fr(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      d = t[4] && gr();
    return {
      c() {
        (e = y('div')),
          d && d.c(),
          (n = T()),
          (r = y('img')),
          z(r, 'alt', t[0]),
          z(r, 'class', 'card-image'),
          c(r.src, (s = t[5].src)) || z(r, 'src', s),
          z(r, 'height', (a = t[5].height)),
          z(r, 'width', (o = t[5].width)),
          z(e, 'class', (l = 'card-media ' + t[5].className));
      },
      m(t, s) {
        v(t, e, s), d && d.m(e, null), x(e, n), x(e, r), (i = !0);
      },
      p(t, u) {
        t[4]
          ? d
            ? 16 & u && lt(d, 1)
            : ((d = gr()), d.c(), lt(d, 1), d.m(e, n))
          : d &&
            (at(),
            it(d, 1, 1, () => {
              d = null;
            }),
            ot()),
          (!i || 1 & u) && z(r, 'alt', t[0]),
          (!i || (32 & u && !c(r.src, (s = t[5].src)))) && z(r, 'src', s),
          (!i || (32 & u && a !== (a = t[5].height))) && z(r, 'height', a),
          (!i || (32 & u && o !== (o = t[5].width))) && z(r, 'width', o),
          (!i || (32 & u && l !== (l = 'card-media ' + t[5].className))) && z(e, 'class', l);
      },
      i(t) {
        i || (lt(d), (i = !0));
      },
      o(t) {
        it(d), (i = !1);
      },
      d(t) {
        t && b(e), d && d.d();
      },
    };
  }
  function gr(t) {
    let e, n;
    return (
      (e = new Gn({ props: { className: 'card-icon', name: 'ebupdate', width: '80', style: 'height: 25px;' } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function $r(t) {
    let e, n;
    return (
      (e = new Gn({ props: { name: 'ebplus_icon', width: '20' } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function pr(t) {
    let e, n;
    return (
      (e = new or({
        props: {
          className: 'card-save-toggle',
          defaultState: t[8],
          $$slots: { off: [hr], on: [mr] },
          $$scope: { ctx: t },
        },
      })),
      e.$on('toggle', t[17]),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          256 & n && (r.defaultState = t[8]), 67108870 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function mr(t) {
    let e;
    const n = t[24].default,
      r = f(n, t, t[26], ir),
      s =
        r ||
        (function (t) {
          let e, n;
          return (
            (e = new Gn({
              props: {
                type: 'fa',
                className: 'fas fa-star',
                style: 'color: var(--fgcolor--' + (t[1] ? 'breaking' : t[2]) + ');',
              },
            })),
            {
              c() {
                ft(e.$$.fragment);
              },
              m(t, r) {
                gt(e, t, r), (n = !0);
              },
              p(t, n) {
                const r = {};
                6 & n && (r.style = 'color: var(--fgcolor--' + (t[1] ? 'breaking' : t[2]) + ');'), e.$set(r);
              },
              i(t) {
                n || (lt(e.$$.fragment, t), (n = !0));
              },
              o(t) {
                it(e.$$.fragment, t), (n = !1);
              },
              d(t) {
                $t(e, t);
              },
            }
          );
        })(t);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        r
          ? r.p && (!e || 67108864 & a) && p(r, n, t, t[26], e ? $(n, t[26], a, lr) : m(t[26]), ir)
          : s && s.p && (!e || 6 & a) && s.p(t, e ? a : -1);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function hr(t) {
    let e;
    const n = t[24].default,
      r = f(n, t, t[26], dr),
      s =
        r ||
        (function (t) {
          let e, n;
          return (
            (e = new Gn({
              props: {
                type: 'fa',
                className: 'far fa-star',
                style: 'color: var(--fgcolor--' + (t[1] ? 'breaking' : t[2]) + ');',
              },
            })),
            {
              c() {
                ft(e.$$.fragment);
              },
              m(t, r) {
                gt(e, t, r), (n = !0);
              },
              p(t, n) {
                const r = {};
                6 & n && (r.style = 'color: var(--fgcolor--' + (t[1] ? 'breaking' : t[2]) + ');'), e.$set(r);
              },
              i(t) {
                n || (lt(e.$$.fragment, t), (n = !0));
              },
              o(t) {
                it(e.$$.fragment, t), (n = !1);
              },
              d(t) {
                $t(e, t);
              },
            }
          );
        })(t);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, a) {
        r
          ? r.p && (!e || 67108864 & a) && p(r, n, t, t[26], e ? $(n, t[26], a, cr) : m(t[26]), dr)
          : s && s.p && (!e || 6 & a) && s.p(t, e ? a : -1);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function xr(t) {
    let e,
      n,
      r,
      s = t[9] && vr(t),
      a = t[7] && br(t);
    return {
      c() {
        (e = y('div')),
          s && s.c(),
          (n = T()),
          a && a.c(),
          z(e, 'class', 'card-meta flex fontsize-xxsmall padding-s--b');
      },
      m(t, o) {
        v(t, e, o), s && s.m(e, null), x(e, n), a && a.m(e, null), (r = !0);
      },
      p(t, r) {
        t[9]
          ? s
            ? (s.p(t, r), 512 & r && lt(s, 1))
            : ((s = vr(t)), s.c(), lt(s, 1), s.m(e, n))
          : s &&
            (at(),
            it(s, 1, 1, () => {
              s = null;
            }),
            ot()),
          t[7]
            ? a
              ? (a.p(t, r), 128 & r && lt(a, 1))
              : ((a = br(t)), a.c(), lt(a, 1), a.m(e, null))
            : a &&
              (at(),
              it(a, 1, 1, () => {
                a = null;
              }),
              ot());
      },
      i(t) {
        r || (lt(s), lt(a), (r = !0));
      },
      o(t) {
        it(s), it(a), (r = !1);
      },
      d(t) {
        t && b(e), s && s.d(), a && a.d();
      },
    };
  }
  function vr(t) {
    let e, n, r, s, a, o, l;
    return (
      (r = new Gn({ props: { flipped: !0, name: 'tag-regular', width: '12' } })),
      {
        c() {
          (e = y('div')),
            (n = y('span')),
            ft(r.$$.fragment),
            (s = T()),
            (a = y('span')),
            (o = C(t[9])),
            z(a, 'class', 'padding-s--l'),
            z(n, 'class', 'flex flex-justify--center'),
            z(e, 'class', 'card-meta-item');
        },
        m(t, i) {
          v(t, e, i), x(e, n), gt(r, n, null), x(n, s), x(n, a), x(a, o), (l = !0);
        },
        p(t, e) {
          (!l || 512 & e) && B(o, t[9]);
        },
        i(t) {
          l || (lt(r.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(r.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && b(e), $t(r);
        },
      }
    );
  }
  function br(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l = Et(t[7]) + '';
    return (
      (n = new Gn({ props: { name: 'clock', width: '12' } })),
      {
        c() {
          (e = y('div')),
            ft(n.$$.fragment),
            (r = T()),
            (s = y('span')),
            (a = C(l)),
            z(s, 'class', 'padding-s--l'),
            z(e, 'class', 'card-meta-item');
        },
        m(t, l) {
          v(t, e, l), gt(n, e, null), x(e, r), x(e, s), x(s, a), (o = !0);
        },
        p(t, e) {
          (!o || 128 & e) && l !== (l = Et(t[7]) + '') && B(a, l);
        },
        i(t) {
          o || (lt(n.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(n.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && b(e), $t(n);
        },
      }
    );
  }
  function wr(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $ = t[3] && ur(t),
      p = t[5] && fr(t),
      m = t[6] && $r(),
      h = void 0 !== t[8] && pr(t),
      w = (t[9] || t[7]) && xr(t);
    return {
      c() {
        (e = y('div')),
          $ && $.c(),
          (n = T()),
          p && p.c(),
          (r = T()),
          (s = y('div')),
          (a = y('div')),
          m && m.c(),
          (o = T()),
          (l = y('div')),
          h && h.c(),
          (i = T()),
          w && w.c(),
          (c = T()),
          (d = y('h2')),
          (u = C(t[0])),
          z(a, 'class', 'card-icon flex flex-justify--end'),
          z(d, 'class', (f = 'card-title ' + (t[10] ? 'card-title--truncated' : ''))),
          z(d, 'style', t[16]),
          z(l, 'class', 'card-content'),
          z(s, 'class', 'card-content-wrapper'),
          z(e, 'class', t[13]);
      },
      m(t, f) {
        v(t, e, f),
          $ && $.m(e, null),
          x(e, n),
          p && p.m(e, null),
          x(e, r),
          x(e, s),
          x(s, a),
          m && m.m(a, null),
          x(s, o),
          x(s, l),
          h && h.m(l, null),
          x(l, i),
          w && w.m(l, null),
          x(l, c),
          x(l, d),
          x(d, u),
          (g = !0);
      },
      p(t, s) {
        t[3] ? ($ ? $.p(t, s) : (($ = ur(t)), $.c(), $.m(e, n))) : $ && ($.d(1), ($ = null)),
          t[5]
            ? p
              ? (p.p(t, s), 32 & s && lt(p, 1))
              : ((p = fr(t)), p.c(), lt(p, 1), p.m(e, r))
            : p &&
              (at(),
              it(p, 1, 1, () => {
                p = null;
              }),
              ot()),
          t[6]
            ? m
              ? 64 & s && lt(m, 1)
              : ((m = $r()), m.c(), lt(m, 1), m.m(a, null))
            : m &&
              (at(),
              it(m, 1, 1, () => {
                m = null;
              }),
              ot()),
          void 0 !== t[8]
            ? h
              ? (h.p(t, s), 256 & s && lt(h, 1))
              : ((h = pr(t)), h.c(), lt(h, 1), h.m(l, i))
            : h &&
              (at(),
              it(h, 1, 1, () => {
                h = null;
              }),
              ot()),
          t[9] || t[7]
            ? w
              ? (w.p(t, s), 640 & s && lt(w, 1))
              : ((w = xr(t)), w.c(), lt(w, 1), w.m(l, c))
            : w &&
              (at(),
              it(w, 1, 1, () => {
                w = null;
              }),
              ot()),
          (!g || 1 & s) && B(u, t[0]),
          (!g || (1024 & s && f !== (f = 'card-title ' + (t[10] ? 'card-title--truncated' : '')))) && z(d, 'class', f),
          (!g || 8192 & s) && z(e, 'class', t[13]);
      },
      i(t) {
        g || (lt(p), lt(m), lt(h), lt(w), (g = !0));
      },
      o(t) {
        it(p), it(m), it(h), it(w), (g = !1);
      },
      d(t) {
        t && b(e), $ && $.d(), p && p.d(), m && m.d(), h && h.d(), w && w.d();
      },
    };
  }
  function yr(t) {
    let e, n;
    return (
      (e = new fe({
        props: {
          url: t[11],
          className: t[14],
          style: t[15],
          'data-breaking': t[1],
          $$slots: { default: [wr] },
          $$scope: { ctx: t },
        },
      })),
      e.$on('click', t[25]),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, [n]) {
          const r = {};
          2048 & n && (r.url = t[11]),
            16384 & n && (r.className = t[14]),
            32768 & n && (r.style = t[15]),
            2 & n && (r['data-breaking'] = t[1]),
            67123199 & n && (r.$$scope = { dirty: n, ctx: t }),
            e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function kr(t, e, n) {
    let r,
      s,
      { $$slots: a = {}, $$scope: o } = e,
      { title: l } = e,
      { breaking: i = !1 } = e,
      { cardType: c } = e,
      { className: d } = e,
      { colorClass: u } = e,
      { id: f } = e,
      { loading: g = !1 } = e,
      { update: $ = !1 } = e,
      { maxLines: p } = e,
      { media: m } = e,
      { premium: h = !1 } = e,
      { published: x } = e,
      { saved: v } = e,
      { section: b } = e,
      { style: w = '' } = e,
      { truncateTitle: y = !1 } = e,
      { url: k } = e;
    const C = I();
    let T = 'card-mode card-mode--article',
      M = 'padding-top: 56.25%; width: 100%;';
    if (g)
      switch (((T = `${T} animation-fogwave`), (l = 'Loading'), c)) {
        case 'small-media':
        case 'small-media--reverse':
          M = 'width: 200px;height: 115px;';
      }
    let L = 'card-inner';
    switch (c) {
      case 'small-media':
        L = `${L} card--small-media`;
        break;
      case 'small-media--reverse':
        L = `${L} card--small-media card--small-media--reverse`;
    }
    const z = p ? `--max-lines: ${p};` : void 0;
    return (
      (t.$$set = (t) => {
        'title' in t && n(0, (l = t.title)),
          'breaking' in t && n(1, (i = t.breaking)),
          'cardType' in t && n(18, (c = t.cardType)),
          'className' in t && n(19, (d = t.className)),
          'colorClass' in t && n(2, (u = t.colorClass)),
          'id' in t && n(20, (f = t.id)),
          'loading' in t && n(3, (g = t.loading)),
          'update' in t && n(4, ($ = t.update)),
          'maxLines' in t && n(21, (p = t.maxLines)),
          'media' in t && n(5, (m = t.media)),
          'premium' in t && n(6, (h = t.premium)),
          'published' in t && n(7, (x = t.published)),
          'saved' in t && n(8, (v = t.saved)),
          'section' in t && n(9, (b = t.section)),
          'style' in t && n(22, (w = t.style)),
          'truncateTitle' in t && n(10, (y = t.truncateTitle)),
          'url' in t && n(11, (k = t.url)),
          '$$scope' in t && n(26, (o = t.$$scope));
      }),
      (t.$$.update = () => {
        4194308 & t.$$.dirty &&
          n(15, (r = `${w}; --color--list-hover: var(--color--${u}); --fgcolor--list-hover: var(--fgcolor--${u});`)),
          8912896 & t.$$.dirty && n(14, (s = d ? `${d} ${T}` : T));
      }),
      [
        l,
        i,
        u,
        g,
        $,
        m,
        h,
        x,
        v,
        b,
        y,
        k,
        M,
        L,
        s,
        r,
        z,
        function (t) {
          C('save', { id: f, save: t.detail });
        },
        c,
        d,
        f,
        p,
        w,
        T,
        a,
        function (e) {
          R.call(this, t, e);
        },
        o,
      ]
    );
  }
  class Cr extends mt {
    constructor(t) {
      super(),
        pt(this, t, kr, yr, o, {
          title: 0,
          breaking: 1,
          cardType: 18,
          className: 19,
          colorClass: 2,
          id: 20,
          loading: 3,
          update: 4,
          maxLines: 21,
          media: 5,
          premium: 6,
          published: 7,
          saved: 8,
          section: 9,
          style: 22,
          truncateTitle: 10,
          url: 11,
        });
    }
  }
  function Tr(t) {
    let e, n, r, s;
    const a = t[8].default,
      o = f(a, t, t[7], null);
    return {
      c() {
        (e = y('span')), o && o.c(), z(e, 'class', t[3]), z(e, 'style', t[1]), z(e, 'data-type', t[2]);
      },
      m(a, l) {
        v(a, e, l), o && o.m(e, null), (n = !0), r || ((s = L(e, 'click', t[10])), (r = !0));
      },
      p(t, r) {
        o && o.p && (!n || 128 & r) && p(o, a, t, t[7], n ? $(a, t[7], r, null) : m(t[7]), null),
          (!n || 8 & r) && z(e, 'class', t[3]),
          (!n || 2 & r) && z(e, 'style', t[1]),
          (!n || 4 & r) && z(e, 'data-type', t[2]);
      },
      i(t) {
        n || (lt(o, t), (n = !0));
      },
      o(t) {
        it(o, t), (n = !1);
      },
      d(t) {
        t && b(e), o && o.d(t), (r = !1), s();
      },
    };
  }
  function Mr(t) {
    let e, n, r, s;
    const a = t[8].default,
      o = f(a, t, t[7], null);
    return {
      c() {
        (e = y('a')), o && o.c(), z(e, 'href', t[0]), z(e, 'class', t[3]), z(e, 'style', t[1]), z(e, 'data-type', t[2]);
      },
      m(a, l) {
        v(a, e, l), o && o.m(e, null), (n = !0), r || ((s = L(e, 'click', t[9])), (r = !0));
      },
      p(t, r) {
        o && o.p && (!n || 128 & r) && p(o, a, t, t[7], n ? $(a, t[7], r, null) : m(t[7]), null),
          (!n || 1 & r) && z(e, 'href', t[0]),
          (!n || 8 & r) && z(e, 'class', t[3]),
          (!n || 2 & r) && z(e, 'style', t[1]),
          (!n || 4 & r) && z(e, 'data-type', t[2]);
      },
      i(t) {
        n || (lt(o, t), (n = !0));
      },
      o(t) {
        it(o, t), (n = !1);
      },
      d(t) {
        t && b(e), o && o.d(t), (r = !1), s();
      },
    };
  }
  function Lr(t) {
    let e, n, r, s;
    const a = [Mr, Tr],
      o = [];
    function l(t, e) {
      return t[0] ? 0 : 1;
    }
    return (
      (e = l(t)),
      (n = o[e] = a[e](t)),
      {
        c() {
          n.c(), (r = M());
        },
        m(t, n) {
          o[e].m(t, n), v(t, r, n), (s = !0);
        },
        p(t, [s]) {
          let i = e;
          (e = l(t)),
            e === i
              ? o[e].p(t, s)
              : (at(),
                it(o[i], 1, 1, () => {
                  o[i] = null;
                }),
                ot(),
                (n = o[e]),
                n ? n.p(t, s) : ((n = o[e] = a[e](t)), n.c()),
                lt(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          s || (lt(n), (s = !0));
        },
        o(t) {
          it(n), (s = !1);
        },
        d(t) {
          o[e].d(t), t && b(r);
        },
      }
    );
  }
  function zr(t, e, n) {
    let r,
      { $$slots: s = {}, $$scope: a } = e,
      { className: o = '' } = e,
      { extension: l } = e,
      { href: i } = e,
      { style: c } = e,
      { type: d } = e,
      u = 'badge';
    return (
      l &&
        ('string' == typeof l
          ? (u = `${u} badge--${l}`)
          : Array.isArray(l) && (u = `${u} badge--${l.join(' badge--')}`)),
      (t.$$set = (t) => {
        'className' in t && n(4, (o = t.className)),
          'extension' in t && n(5, (l = t.extension)),
          'href' in t && n(0, (i = t.href)),
          'style' in t && n(1, (c = t.style)),
          'type' in t && n(2, (d = t.type)),
          '$$scope' in t && n(7, (a = t.$$scope));
      }),
      (t.$$.update = () => {
        80 & t.$$.dirty && n(3, (r = `${u} ${o}`));
      }),
      [
        i,
        c,
        d,
        r,
        o,
        l,
        u,
        a,
        s,
        function (e) {
          R.call(this, t, e);
        },
        function (e) {
          R.call(this, t, e);
        },
      ]
    );
  }
  class Fr extends mt {
    constructor(t) {
      super(), pt(this, t, zr, Lr, o, { className: 4, extension: 5, href: 0, style: 1, type: 2 });
    }
  }
  const Nr = {
    bordeaux: { background: '#8a0c36', color: '#fff' },
    reddark: { background: '#900', color: '#fff' },
    red: { background: '#bd1118', color: '#fff' },
    pink: { background: '#b31e61', color: '#fff' },
    rose: { background: '#dc7095', color: '#fff' },
    orangedark: { background: '#e96c0d', color: '#fff' },
    orange: { background: '#e5ad02', color: '#fff' },
    yellow: { background: '#fae500', color: '#fff' },
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
  function Br(t) {
    let e, n;
    const r = t[10].default,
      s = f(r, t, t[9], null);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', t[1]), z(e, 'style', t[0]);
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, [a]) {
        s && s.p && (!n || 512 & a) && p(s, r, t, t[9], n ? $(r, t[9], a, null) : m(t[9]), null),
          (!n || 2 & a) && z(e, 'class', t[1]),
          (!n || 1 & a) && z(e, 'style', t[0]);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  const Hr = {};
  function Sr(t, e, n) {
    let r,
      s,
      { $$slots: a = {}, $$scope: o } = e;
    const l = vt(0),
      i = [],
      c = vt(null);
    l.subscribe((t) => {
      c.set(i[t]);
    }),
      D(Hr, {
        registerTab: (t) => {
          i.push(t),
            c.update((e) => e || t),
            O(() => {
              const e = i.indexOf(t);
              i.splice(e, 1), c.update((n) => (n === t ? i[e] || i[i.length - 1] : n));
            });
        },
        selectButton: (t) => {
          const e = i.indexOf(t);
          l.set(e);
        },
        selectedButton: c,
      });
    let { className: d } = e,
      { type: u } = e,
      { color: f } = e,
      { colorHover: g } = e,
      { solid: $ = !1 } = e,
      p = 'buttongroup';
    $ && (p = `${p} buttongroup--solid`), u && (p = `${p} buttongroup--${u}`);
    const { background: m, color: h } = Nr[f] ? Nr[f] : Nr.bruger;
    g = f && !g ? f : g;
    const { background: x, color: v } = Nr[g] ? Nr[g] : Nr.bruger;
    return (
      (t.$$set = (t) => {
        'className' in t && n(4, (d = t.className)),
          'type' in t && n(5, (u = t.type)),
          'color' in t && n(6, (f = t.color)),
          'colorHover' in t && n(2, (g = t.colorHover)),
          'solid' in t && n(7, ($ = t.solid)),
          '$$scope' in t && n(9, (o = t.$$scope));
      }),
      (t.$$.update = () => {
        272 & t.$$.dirty && n(1, (r = d ? `${d} ${p}` : p));
      }),
      n(
        0,
        (s = `--buttongroup-color: ${m}; --buttongroup-fgcolor: ${h}; --buttongroup-color--hover: ${x}; --buttongroup-fgcolor--hover: ${v};`)
      ),
      [s, r, g, l, d, u, f, $, p, o, a]
    );
  }
  class _r extends mt {
    constructor(t) {
      super(), pt(this, t, Sr, Br, o, { selectedId: 3, className: 4, type: 5, color: 6, colorHover: 2, solid: 7 });
    }
    get selectedId() {
      return this.$$.ctx[3];
    }
  }
  function Ar(t) {
    let e, n, r, s, a;
    const o = t[14].default,
      l = f(o, t, t[13], null);
    return {
      c() {
        (e = y('button')),
          l && l.c(),
          z(e, 'class', t[4]),
          (e.disabled = t[0]),
          z(e, 'data-selected', (n = t[5] === t[6]));
      },
      m(n, o) {
        v(n, e, o), l && l.m(e, null), t[18](e), (r = !0), s || ((a = L(e, 'click', t[16])), (s = !0));
      },
      p(t, s) {
        l && l.p && (!r || 8192 & s) && p(l, o, t, t[13], r ? $(o, t[13], s, null) : m(t[13]), null),
          (!r || 16 & s) && z(e, 'class', t[4]),
          (!r || 1 & s) && (e.disabled = t[0]),
          (!r || (32 & s && n !== (n = t[5] === t[6]))) && z(e, 'data-selected', n);
      },
      i(t) {
        r || (lt(l, t), (r = !0));
      },
      o(t) {
        it(l, t), (r = !1);
      },
      d(n) {
        n && b(e), l && l.d(n), t[18](null), (s = !1), a();
      },
    };
  }
  function jr(t) {
    let e, n, r, s, a;
    const o = t[14].default,
      l = f(o, t, t[13], null);
    return {
      c() {
        (e = y('a')),
          l && l.c(),
          z(e, 'href', t[1]),
          z(e, 'class', t[4]),
          z(e, 'disabled', t[0]),
          z(e, 'data-selected', (n = t[5] === t[6]));
      },
      m(n, o) {
        v(n, e, o), l && l.m(e, null), t[17](e), (r = !0), s || ((a = L(e, 'click', t[15])), (s = !0));
      },
      p(t, s) {
        l && l.p && (!r || 8192 & s) && p(l, o, t, t[13], r ? $(o, t[13], s, null) : m(t[13]), null),
          (!r || 2 & s) && z(e, 'href', t[1]),
          (!r || 16 & s) && z(e, 'class', t[4]),
          (!r || 1 & s) && z(e, 'disabled', t[0]),
          (!r || (32 & s && n !== (n = t[5] === t[6]))) && z(e, 'data-selected', n);
      },
      i(t) {
        r || (lt(l, t), (r = !0));
      },
      o(t) {
        it(l, t), (r = !1);
      },
      d(n) {
        n && b(e), l && l.d(n), t[17](null), (s = !1), a();
      },
    };
  }
  function Er(t) {
    let e, n, r, s;
    const a = [jr, Ar],
      o = [];
    function l(t, e) {
      return t[1] ? 0 : 1;
    }
    return (
      (e = l(t)),
      (n = o[e] = a[e](t)),
      {
        c() {
          n.c(), (r = M());
        },
        m(t, n) {
          o[e].m(t, n), v(t, r, n), (s = !0);
        },
        p(t, [s]) {
          let i = e;
          (e = l(t)),
            e === i
              ? o[e].p(t, s)
              : (at(),
                it(o[i], 1, 1, () => {
                  o[i] = null;
                }),
                ot(),
                (n = o[e]),
                n ? n.p(t, s) : ((n = o[e] = a[e](t)), n.c()),
                lt(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          s || (lt(n), (s = !0));
        },
        o(t) {
          it(n), (s = !1);
        },
        d(t) {
          o[e].d(t), t && b(r);
        },
      }
    );
  }
  function Pr(e, n, r) {
    let s,
      a,
      o = t;
    e.$$.on_destroy.push(() => o());
    let l,
      { $$slots: i = {}, $$scope: c } = n,
      { className: u } = n,
      { disabled: f = !1 } = n,
      { extension: g } = n,
      { href: $ } = n,
      { size: p } = n,
      { type: m } = n,
      h = 'button';
    if (g) {
      g.split(' ').forEach((t) => {
        r(12, (h = `${h} button--${t}`));
      });
    }
    p && (h = `${h} button--${p}`), m && (h = `${h} button--${m}`);
    let x,
      v,
      b,
      { initial: w = !1 } = n;
    const y = {},
      k = V(Hr);
    return (
      k &&
        ((x = k.registerTab),
        (v = k.selectButton),
        (b = k.selectedButton),
        o(),
        (o = d(b, (t) => r(5, (a = t)))),
        x(y),
        w && v(y)),
      E(() => {
        void 0 !== v && l.addEventListener('click', () => v(y));
      }),
      (e.$$set = (t) => {
        'className' in t && r(7, (u = t.className)),
          'disabled' in t && r(0, (f = t.disabled)),
          'extension' in t && r(8, (g = t.extension)),
          'href' in t && r(1, ($ = t.href)),
          'size' in t && r(9, (p = t.size)),
          'type' in t && r(10, (m = t.type)),
          'initial' in t && r(11, (w = t.initial)),
          '$$scope' in t && r(13, (c = t.$$scope));
      }),
      (e.$$.update = () => {
        4224 & e.$$.dirty && r(4, (s = u ? `${h} ${u}` : h));
      }),
      [
        f,
        $,
        l,
        b,
        s,
        a,
        y,
        u,
        g,
        p,
        m,
        w,
        h,
        c,
        i,
        function (t) {
          R.call(this, e, t);
        },
        function (t) {
          R.call(this, e, t);
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (l = t), r(2, l);
          });
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (l = t), r(2, l);
          });
        },
      ]
    );
  }
  class Or extends mt {
    constructor(t) {
      super(),
        pt(this, t, Pr, Er, o, { className: 7, disabled: 0, extension: 8, href: 1, size: 9, type: 10, initial: 11 });
    }
  }
  function Ir(t) {
    let e, n, r;
    return {
      c() {
        (e = y('i')),
          (n = T()),
          (r = y('i')),
          z(e, 'class', 'far fa-check-circle form-checkbox-toggle--on'),
          z(e, 'aria-hidden', 'true'),
          z(r, 'class', 'far fa-circle form-checkbox-toggle--off'),
          z(r, 'aria-hidden', 'true');
      },
      m(t, s) {
        v(t, e, s), v(t, n, s), v(t, r, s);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r);
      },
    };
  }
  function Dr(t) {
    let e, n, r;
    return {
      c() {
        (e = y('i')),
          (n = T()),
          (r = y('i')),
          z(e, 'class', 'far fa-check-square form-checkbox-toggle--on'),
          z(e, 'aria-hidden', 'true'),
          z(r, 'class', 'far fa-square form-checkbox-toggle--off'),
          z(r, 'aria-hidden', 'true');
      },
      m(t, s) {
        v(t, e, s), v(t, n, s), v(t, r, s);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r);
      },
    };
  }
  function Vr(e) {
    let n, r, s, a, o, l;
    function i(t, e) {
      return 'checkbox' === t[3] ? Dr : Ir;
    }
    let c = i(e),
      d = c(e);
    return {
      c() {
        (n = y('label')),
          (r = y('input')),
          (s = T()),
          (a = y('span')),
          (o = C(e[2])),
          (l = T()),
          d.c(),
          z(r, 'type', e[3]),
          z(r, 'class', e[5]),
          z(r, 'name', e[0]),
          z(r, 'group', e[1]),
          (r.value = e[4]),
          z(a, 'class', 'form-label');
      },
      m(t, e) {
        v(t, n, e), x(n, r), x(n, s), x(n, a), x(a, o), x(a, l), d.m(a, null);
      },
      p(t, [e]) {
        8 & e && z(r, 'type', t[3]),
          32 & e && z(r, 'class', t[5]),
          1 & e && z(r, 'name', t[0]),
          2 & e && z(r, 'group', t[1]),
          16 & e && r.value !== t[4] && (r.value = t[4]),
          4 & e && B(o, t[2]),
          c !== (c = i(t)) && (d.d(1), (d = c(t)), d && (d.c(), d.m(a, null)));
      },
      i: t,
      o: t,
      d(t) {
        t && b(n), d.d();
      },
    };
  }
  function Rr(t, e, n) {
    let { fieldName: r } = e,
      { group: s } = e,
      { label: a } = e,
      { inputtype: o = 'checkbox' } = e,
      { value: l } = e,
      { className: i } = e,
      c = 'form-checkbox form-checkbox--icon';
    return (
      i && (c = `${i} ${c}`),
      (t.$$set = (t) => {
        'fieldName' in t && n(0, (r = t.fieldName)),
          'group' in t && n(1, (s = t.group)),
          'label' in t && n(2, (a = t.label)),
          'inputtype' in t && n(3, (o = t.inputtype)),
          'value' in t && n(4, (l = t.value)),
          'className' in t && n(6, (i = t.className));
      }),
      [r, s, a, o, l, c, i]
    );
  }
  class qr extends mt {
    constructor(t) {
      super(), pt(this, t, Rr, Vr, o, { fieldName: 0, group: 1, label: 2, inputtype: 3, value: 4, className: 6 });
    }
  }
  function Gr(t) {
    let e, n, r, s, a;
    const o = t[5].default,
      l = f(o, t, t[4], null);
    return {
      c() {
        (e = y('label')),
          (n = C(t[0])),
          (r = T()),
          (s = y('select')),
          l && l.c(),
          z(e, 'class', 'form-label'),
          z(e, 'for', 'select'),
          z(s, 'classname', t[1]),
          z(s, 'id', 'select');
      },
      m(t, o) {
        v(t, e, o), x(e, n), v(t, r, o), v(t, s, o), l && l.m(s, null), (a = !0);
      },
      p(t, [e]) {
        (!a || 1 & e) && B(n, t[0]),
          l && l.p && (!a || 16 & e) && p(l, o, t, t[4], a ? $(o, t[4], e, null) : m(t[4]), null),
          (!a || 2 & e) && z(s, 'classname', t[1]);
      },
      i(t) {
        a || (lt(l, t), (a = !0));
      },
      o(t) {
        it(l, t), (a = !1);
      },
      d(t) {
        t && b(e), t && b(r), t && b(s), l && l.d(t);
      },
    };
  }
  function Wr(t, e, n) {
    let { $$slots: r = {}, $$scope: s } = e,
      { inputtype: a = 'text' } = e,
      { label: o } = e,
      { className: l } = e,
      i = `form-input form-input--${a}`;
    return (
      l && (i = `${l} ${i}`),
      (t.$$set = (t) => {
        'inputtype' in t && n(2, (a = t.inputtype)),
          'label' in t && n(0, (o = t.label)),
          'className' in t && n(3, (l = t.className)),
          '$$scope' in t && n(4, (s = t.$$scope));
      }),
      [o, i, a, l, s, r]
    );
  }
  class Ur extends mt {
    constructor(t) {
      super(), pt(this, t, Wr, Gr, o, { inputtype: 2, label: 0, className: 3 });
    }
  }
  function Yr(t) {
    let e, n, r;
    return {
      c() {
        (e = y('span')), (n = C(t[1])), (r = C(':')), z(e, 'class', 'hidden');
      },
      m(s, a) {
        v(s, e, a), x(e, n), x(e, r), t[8](e);
      },
      p(t, e) {
        2 & e && B(n, t[1]);
      },
      d(n) {
        n && b(e), t[8](null);
      },
    };
  }
  function Zr(e) {
    let n,
      r,
      s,
      a,
      o,
      l,
      i = e[1] && Yr(e);
    return {
      c() {
        (n = y('div')),
          i && i.c(),
          (r = T()),
          (s = y('input')),
          z(s, 'type', e[0]),
          z(s, 'placeholder', e[1]),
          z(s, 'class', e[5]),
          z(n, 'class', (a = `form-input-container flex border-radius padding-m--rl ${e[2]}`));
      },
      m(t, a) {
        v(t, n, a), i && i.m(n, null), x(n, r), x(n, s), e[9](s), o || ((l = L(s, 'focus', e[7])), (o = !0));
      },
      p(t, [e]) {
        t[1] ? (i ? i.p(t, e) : ((i = Yr(t)), i.c(), i.m(n, r))) : i && (i.d(1), (i = null)),
          1 & e && z(s, 'type', t[0]),
          2 & e && z(s, 'placeholder', t[1]),
          32 & e && z(s, 'class', t[5]),
          4 & e && a !== (a = `form-input-container flex border-radius padding-m--rl ${t[2]}`) && z(n, 'class', a);
      },
      i: t,
      o: t,
      d(t) {
        t && b(n), i && i.d(), e[9](null), (o = !1), l();
      },
    };
  }
  function Xr(t, e, n) {
    let r,
      s,
      { inputtype: a = 'text' } = e,
      { label: o } = e,
      { className: l } = e,
      { size: i = 'padding-m--tb' } = e,
      c = `form-input form-input--${a} width-1of1`;
    return (
      l && (c = `${l} ${c}`),
      E(() => {
        r.addEventListener('focus', () => {
          r.parentElement.setAttribute('data-focus', 'true');
          r.previousElementSibling.classList.remove('hidden');
        }),
          r.addEventListener('focusout', () => {
            r.parentElement.setAttribute('data-focus', 'false'), 0 === r.value.length && s.classList.add('hidden');
          });
      }),
      (t.$$set = (t) => {
        'inputtype' in t && n(0, (a = t.inputtype)),
          'label' in t && n(1, (o = t.label)),
          'className' in t && n(6, (l = t.className)),
          'size' in t && n(2, (i = t.size));
      }),
      [
        a,
        o,
        i,
        r,
        s,
        c,
        l,
        function (e) {
          R.call(this, t, e);
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (s = t), n(4, s);
          });
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (r = t), n(3, r);
          });
        },
      ]
    );
  }
  class Jr extends mt {
    constructor(t) {
      super(), pt(this, t, Xr, Zr, o, { inputtype: 0, label: 1, className: 6, size: 2 });
    }
  }
  function Kr(t) {
    let e, n, r;
    return {
      c() {
        (e = y('span')), (n = C(t[0])), (r = C(':')), z(e, 'class', 'hidden');
      },
      m(s, a) {
        v(s, e, a), x(e, n), x(e, r), t[8](e);
      },
      p(t, e) {
        1 & e && B(n, t[0]);
      },
      d(n) {
        n && b(e), t[8](null);
      },
    };
  }
  function Qr(e) {
    let n,
      r,
      s,
      a,
      o,
      l,
      i = e[0] && Kr(e);
    return {
      c() {
        (n = y('div')),
          i && i.c(),
          (r = T()),
          (s = y('textarea')),
          z(s, 'class', e[4]),
          z(s, 'placeholder', e[0]),
          z(n, 'class', (a = `form-input-container flex flex--column border-radius padding-m--rl ${e[1]}`));
      },
      m(t, a) {
        v(t, n, a), i && i.m(n, null), x(n, r), x(n, s), e[9](s), o || ((l = L(s, 'focus', e[7])), (o = !0));
      },
      p(t, [e]) {
        t[0] ? (i ? i.p(t, e) : ((i = Kr(t)), i.c(), i.m(n, r))) : i && (i.d(1), (i = null)),
          16 & e && z(s, 'class', t[4]),
          1 & e && z(s, 'placeholder', t[0]),
          2 & e &&
            a !== (a = `form-input-container flex flex--column border-radius padding-m--rl ${t[1]}`) &&
            z(n, 'class', a);
      },
      i: t,
      o: t,
      d(t) {
        t && b(n), i && i.d(), e[9](null), (o = !1), l();
      },
    };
  }
  function ts(t, e, n) {
    let r,
      s,
      { inputtype: a = 'textarea' } = e,
      { label: o } = e,
      { className: l } = e,
      { size: i = 'padding-m--tb' } = e,
      c = `form-input form-input--${a} width-1of1`;
    return (
      l && (c = `${l} ${c}`),
      E(() => {
        r.addEventListener('focus', () => {
          r.parentElement.setAttribute('data-focus', 'true');
          r.previousElementSibling.classList.remove('hidden');
        }),
          r.addEventListener('focusout', () => {
            r.parentElement.setAttribute('data-focus', 'false'), 0 === r.value.length && s.classList.add('hidden');
          });
      }),
      (t.$$set = (t) => {
        'inputtype' in t && n(5, (a = t.inputtype)),
          'label' in t && n(0, (o = t.label)),
          'className' in t && n(6, (l = t.className)),
          'size' in t && n(1, (i = t.size));
      }),
      [
        o,
        i,
        r,
        s,
        c,
        a,
        l,
        function (e) {
          R.call(this, t, e);
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (s = t), n(3, s);
          });
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (r = t), n(2, r);
          });
        },
      ]
    );
  }
  class es extends mt {
    constructor(t) {
      super(), pt(this, t, ts, Qr, o, { inputtype: 5, label: 0, className: 6, size: 1 });
    }
  }
  function ns(t) {
    let e;
    const n = t[8].default,
      r = f(n, t, t[9], null);
    return {
      c() {
        r && r.c();
      },
      m(t, n) {
        r && r.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 512 & s) && p(r, n, t, t[9], e ? $(n, t[9], s, null) : m(t[9]), null);
      },
      i(t) {
        e || (lt(r, t), (e = !0));
      },
      o(t) {
        it(r, t), (e = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function rs(t) {
    let e, n, r;
    var s = t[7];
    function a(t) {
      return {
        props: {
          class: t[1],
          size: t[0],
          label: t[5],
          inputtype: t[4],
          group: t[3],
          value: t[6],
          name: t[2],
          $$slots: { default: [ns] },
          $$scope: { ctx: t },
        },
      };
    }
    return (
      s && (n = new s(a(t))),
      {
        c() {
          (e = y('div')), n && ft(n.$$.fragment), z(e, 'class', 'form-element margin-l--b');
        },
        m(t, s) {
          v(t, e, s), n && gt(n, e, null), (r = !0);
        },
        p(t, [r]) {
          const o = {};
          if (
            (2 & r && (o.class = t[1]),
            1 & r && (o.size = t[0]),
            32 & r && (o.label = t[5]),
            16 & r && (o.inputtype = t[4]),
            8 & r && (o.group = t[3]),
            64 & r && (o.value = t[6]),
            4 & r && (o.name = t[2]),
            512 & r && (o.$$scope = { dirty: r, ctx: t }),
            s !== (s = t[7]))
          ) {
            if (n) {
              at();
              const t = n;
              it(t.$$.fragment, 1, 0, () => {
                $t(t, 1);
              }),
                ot();
            }
            s ? ((n = new s(a(t))), ft(n.$$.fragment), lt(n.$$.fragment, 1), gt(n, e, null)) : (n = null);
          } else s && n.$set(o);
        },
        i(t) {
          r || (n && lt(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          n && it(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && b(e), n && $t(n);
        },
      }
    );
  }
  function ss(t, e, n) {
    let { $$slots: r = {}, $$scope: s } = e,
      { className: a } = e,
      { fieldName: o } = e,
      { group: l } = e,
      { inputtype: i = 'text' } = e,
      { label: c } = e,
      { value: d } = e,
      { size: u = 'medium' } = e,
      f = Jr;
    switch (i) {
      case 'select':
        f = Ur;
        break;
      case 'checkbox':
      case 'radio':
        f = qr;
        break;
      case 'textarea':
        f = es;
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
        'className' in t && n(1, (a = t.className)),
          'fieldName' in t && n(2, (o = t.fieldName)),
          'group' in t && n(3, (l = t.group)),
          'inputtype' in t && n(4, (i = t.inputtype)),
          'label' in t && n(5, (c = t.label)),
          'value' in t && n(6, (d = t.value)),
          'size' in t && n(0, (u = t.size)),
          '$$scope' in t && n(9, (s = t.$$scope));
      }),
      [u, a, o, l, i, c, d, f, r, s]
    );
  }
  class as extends mt {
    constructor(t) {
      super(),
        pt(this, t, ss, rs, o, { className: 1, fieldName: 2, group: 3, inputtype: 4, label: 5, value: 6, size: 0 });
    }
  }
  function os(t) {
    let e;
    return {
      c() {
        (e = y('i')), z(e, 'class', 'fa fa-chevron-left');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function ls(t) {
    let e;
    return {
      c() {
        (e = y('i')), z(e, 'class', 'fa fa-chevron-right');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function is(t) {
    let e, n, r, s, a, o, l;
    (n = new Or({
      props: {
        className: 'horizontal-scroll-nav button-prev bg--white',
        extension: 'icon',
        $$slots: { default: [os] },
        $$scope: { ctx: t },
      },
    })),
      n.$on('click', t[3]),
      (s = new Or({
        props: {
          className: 'horizontal-scroll-nav button-next bg--white',
          extension: 'icon',
          $$slots: { default: [ls] },
          $$scope: { ctx: t },
        },
      })),
      s.$on('click', t[2]);
    const i = t[5].default,
      c = f(i, t, t[8], null);
    return {
      c() {
        (e = y('div')),
          ft(n.$$.fragment),
          (r = T()),
          ft(s.$$.fragment),
          (a = T()),
          (o = y('div')),
          c && c.c(),
          z(o, 'class', 'horizontal-scroll-items flex position-relative'),
          z(o, 'data-horizontallist', 'horizontallist'),
          z(e, 'class', 'horizontal-scroll-container position-relative');
      },
      m(i, d) {
        v(i, e, d),
          gt(n, e, null),
          x(e, r),
          gt(s, e, null),
          x(e, a),
          x(e, o),
          c && c.m(o, null),
          t[6](o),
          t[7](e),
          (l = !0);
      },
      p(t, [e]) {
        const r = {};
        256 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        const a = {};
        256 & e && (a.$$scope = { dirty: e, ctx: t }),
          s.$set(a),
          c && c.p && (!l || 256 & e) && p(c, i, t, t[8], l ? $(i, t[8], e, null) : m(t[8]), null);
      },
      i(t) {
        l || (lt(n.$$.fragment, t), lt(s.$$.fragment, t), lt(c, t), (l = !0));
      },
      o(t) {
        it(n.$$.fragment, t), it(s.$$.fragment, t), it(c, t), (l = !1);
      },
      d(r) {
        r && b(e), $t(n), $t(s), c && c.d(r), t[6](null), t[7](null);
      },
    };
  }
  function cs(t, e, n) {
    let r,
      s,
      a,
      o,
      l,
      { $$slots: i = {}, $$scope: c } = e,
      { className: d } = e,
      u = 0;
    function f(t, e = !1) {
      switch (t) {
        case 'neutral':
          n(0, (r.dataset.atstart = 'false'), r), n(0, (r.dataset.atend = 'false'), r), e && (u = 1);
          break;
        case 'end':
          n(0, (r.dataset.atstart = 'false'), r), n(0, (r.dataset.atend = 'true'), r), (u = o);
          break;
        case 'start':
          n(0, (r.dataset.atstart = 'true'), r), n(0, (r.dataset.atend = 'false'), r), (u = 0);
          break;
        case 'disabled':
          n(0, (r.dataset.atstart = 'true'), r), n(0, (r.dataset.atend = 'true'), r);
      }
    }
    function g() {
      f(0 === u ? 'start' : u === o ? 'end' : 'neutral');
    }
    function $(t) {
      const e = a[t];
      s.scrollTo({ behavior: 'smooth', left: e.offsetLeft, top: 0 }), g();
    }
    return (
      E(() => {
        s.addEventListener(
          'wheel',
          (function (t, e) {
            let n;
            return function () {
              const r = arguments,
                s = this;
              n || (t.apply(s, r), (n = !0), setTimeout(() => (n = !1), e));
            };
          })(() => {
            !(function () {
              const t = a[0].getBoundingClientRect().left < s.getBoundingClientRect().left,
                e = a[l - 1].getBoundingClientRect().right > s.getBoundingClientRect().right;
              f(t && e ? 'neutral' : t ? 'end' : e ? 'start' : 'disabled', !0);
            })();
          }, 150)
        );
      }),
      P(() => {
        if (l === s.children.length) return;
        (a = s.children), (l = a.length);
        const t = r.getBoundingClientRect();
        let e = Array.from(a).filter(
          (e) => e.getBoundingClientRect().left >= t.left && e.getBoundingClientRect().right <= t.right
        ).length;
        (o = l - e), o ? g() : f('disabled');
      }),
      (t.$$set = (t) => {
        'className' in t && n(4, (d = t.className)), '$$scope' in t && n(8, (c = t.$$scope));
      }),
      [
        r,
        s,
        function (t) {
          u !== o && ((u += 1), $(u));
        },
        function (t) {
          0 !== u && ((u -= 1), $(u));
        },
        d,
        i,
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (s = t), n(1, s);
          });
        },
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (r = t), n(0, r);
          });
        },
        c,
      ]
    );
  }
  class ds extends mt {
    constructor(t) {
      super(), pt(this, t, cs, is, o, { className: 4 });
    }
  }
  function us(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<i class="fas fa-circle bounce bounce1"></i> \n    <i class="fas fa-circle bounce bounce2"></i> \n    <i class="fas fa-circle bounce bounce3"></i>'),
          z(e, 'class', 'loader flex flex--center');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function fs(e) {
    let n,
      r = e[0] && us();
    return {
      c() {
        r && r.c(), (n = M());
      },
      m(t, e) {
        r && r.m(t, e), v(t, n, e);
      },
      p(t, [e]) {
        t[0] ? r || ((r = us()), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), (r = null));
      },
      i: t,
      o: t,
      d(t) {
        r && r.d(t), t && b(n);
      },
    };
  }
  function gs(t, e, n) {
    let { isLoading: r = !1 } = e;
    return (
      (t.$$set = (t) => {
        'isLoading' in t && n(0, (r = t.isLoading));
      }),
      [r]
    );
  }
  class $s extends mt {
    constructor(t) {
      super(), pt(this, t, gs, fs, o, { isLoading: 0 });
    }
  }
  function ps(t) {
    let e, n;
    const r = t[3].default,
      s = f(r, t, t[2], null);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', t[0]);
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, [a]) {
        s && s.p && (!n || 4 & a) && p(s, r, t, t[2], n ? $(r, t[2], a, null) : m(t[2]), null),
          (!n || 1 & a) && z(e, 'class', t[0]);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  const ms = {};
  function hs(t, e, n) {
    let { $$slots: r = {}, $$scope: s } = e;
    const a = vt(0),
      o = [],
      l = [],
      i = vt(null),
      c = vt(null);
    a.subscribe((t) => {
      i.set(o[t]), c.set(l[t]);
    }),
      D(ms, {
        registerTab: (t) => {
          o.push(t),
            i.update((e) => e || t),
            O(() => {
              const e = o.indexOf(t);
              o.splice(e, 1), i.update((n) => (n === t ? o[e] || o[o.length - 1] : n));
            });
        },
        registerPanel: (t) => {
          l.push(t),
            c.update((e) => e || t),
            O(() => {
              const e = l.indexOf(t);
              l.splice(e, 1), c.update((n) => (n === t ? l[e] || l[l.length - 1] : n));
            });
        },
        selectButton: (t) => {
          const e = o.indexOf(t);
          a.set(e);
        },
        selectedButton: i,
        selectedPanel: c,
      });
    let { className: d } = e;
    return (
      (t.$$set = (t) => {
        'className' in t && n(0, (d = t.className)), '$$scope' in t && n(2, (s = t.$$scope));
      }),
      [d, a, s, r]
    );
  }
  class xs extends mt {
    constructor(t) {
      super(), pt(this, t, hs, ps, o, { selectedId: 1, className: 0 });
    }
    get selectedId() {
      return this.$$.ctx[1];
    }
  }
  function vs(t) {
    let e, n, r, s, a;
    const o = t[7].default,
      l = f(o, t, t[6], null);
    return {
      c() {
        (e = y('button')), l && l.c(), z(e, 'class', t[0]), z(e, 'data-selected', (n = t[1] === t[2]));
      },
      m(n, o) {
        v(n, e, o), l && l.m(e, null), (r = !0), s || ((a = L(e, 'click', t[8])), (s = !0));
      },
      p(t, [s]) {
        l && l.p && (!r || 64 & s) && p(l, o, t, t[6], r ? $(o, t[6], s, null) : m(t[6]), null),
          (!r || 1 & s) && z(e, 'class', t[0]),
          (!r || (2 & s && n !== (n = t[1] === t[2]))) && z(e, 'data-selected', n);
      },
      i(t) {
        r || (lt(l, t), (r = !0));
      },
      o(t) {
        it(l, t), (r = !1);
      },
      d(t) {
        t && b(e), l && l.d(t), (s = !1), a();
      },
    };
  }
  function bs(t, e, n) {
    let r,
      s,
      { $$slots: a = {}, $$scope: o } = e;
    const l = {},
      { registerTab: i, selectButton: c, selectedButton: d } = V(ms);
    u(t, d, (t) => n(1, (s = t))), i(l);
    let { className: f } = e,
      g = 'button';
    return (
      (t.$$set = (t) => {
        'className' in t && n(5, (f = t.className)), '$$scope' in t && n(6, (o = t.$$scope));
      }),
      (t.$$.update = () => {
        32 & t.$$.dirty && n(0, (r = f ? `button ${f}` : g));
      }),
      [r, s, l, c, d, f, o, a, () => c(l)]
    );
  }
  class ws extends mt {
    constructor(t) {
      super(), pt(this, t, bs, vs, o, { className: 5 });
    }
  }
  function ys(t) {
    let e;
    const n = t[4].default,
      r = f(n, t, t[3], null);
    return {
      c() {
        r && r.c();
      },
      m(t, n) {
        r && r.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 8 & s) && p(r, n, t, t[3], e ? $(n, t[3], s, null) : m(t[3]), null);
      },
      i(t) {
        e || (lt(r, t), (e = !0));
      },
      o(t) {
        it(r, t), (e = !1);
      },
      d(t) {
        r && r.d(t);
      },
    };
  }
  function ks(t) {
    let e,
      n,
      r = t[0] === t[1] && ys(t);
    return {
      c() {
        r && r.c(), (e = M());
      },
      m(t, s) {
        r && r.m(t, s), v(t, e, s), (n = !0);
      },
      p(t, [n]) {
        t[0] === t[1]
          ? r
            ? (r.p(t, n), 1 & n && lt(r, 1))
            : ((r = ys(t)), r.c(), lt(r, 1), r.m(e.parentNode, e))
          : r &&
            (at(),
            it(r, 1, 1, () => {
              r = null;
            }),
            ot());
      },
      i(t) {
        n || (lt(r), (n = !0));
      },
      o(t) {
        it(r), (n = !1);
      },
      d(t) {
        r && r.d(t), t && b(e);
      },
    };
  }
  function Cs(t, e, n) {
    let r,
      { $$slots: s = {}, $$scope: a } = e;
    const o = {},
      { registerPanel: l, selectedPanel: i } = V(ms);
    return (
      u(t, i, (t) => n(0, (r = t))),
      l(o),
      (t.$$set = (t) => {
        '$$scope' in t && n(3, (a = t.$$scope));
      }),
      [r, o, i, a, s]
    );
  }
  class Ts extends mt {
    constructor(t) {
      super(), pt(this, t, Cs, ks, o, {});
    }
  }
  function Ms(t) {
    let e, n;
    const r = t[5].default,
      s = f(r, t, t[4], null);
    return {
      c() {
        (e = y('div')), s && s.c(), z(e, 'class', t[0]);
      },
      m(t, r) {
        v(t, e, r), s && s.m(e, null), (n = !0);
      },
      p(t, [a]) {
        s && s.p && (!n || 16 & a) && p(s, r, t, t[4], n ? $(r, t[4], a, null) : m(t[4]), null),
          (!n || 1 & a) && z(e, 'class', t[0]);
      },
      i(t) {
        n || (lt(s, t), (n = !0));
      },
      o(t) {
        it(s, t), (n = !1);
      },
      d(t) {
        t && b(e), s && s.d(t);
      },
    };
  }
  function Ls(t, e, n) {
    let r,
      { $$slots: s = {}, $$scope: a } = e,
      { type: o = 'tabs' } = e,
      { className: l } = e,
      i = '';
    switch (o) {
      case 'tabs':
        i = 'tabs';
        break;
      case 'pillnavigation':
        i = 'pillnavigation toggle toggle--buttons';
    }
    return (
      (t.$$set = (t) => {
        'type' in t && n(1, (o = t.type)),
          'className' in t && n(2, (l = t.className)),
          '$$scope' in t && n(4, (a = t.$$scope));
      }),
      (t.$$.update = () => {
        12 & t.$$.dirty && n(0, (r = l ? `${i} ${l}` : i));
      }),
      [r, o, l, i, a, s]
    );
  }
  class zs extends mt {
    constructor(t) {
      super(), pt(this, t, Ls, Ms, o, { type: 1, className: 2 });
    }
  }
  function Fs(t) {
    let e, n, r, s, a, o, l, i, c, d, u, g, h;
    const w = t[6].default,
      k = f(w, t, t[5], null);
    return {
      c() {
        (e = y('label')),
          (n = y('input')),
          (r = T()),
          (s = y('div')),
          (a = y('i')),
          (l = T()),
          (i = y('div')),
          (c = y('i')),
          (u = T()),
          (g = y('div')),
          k && k.c(),
          z(n, 'type', 'checkbox'),
          (n.hidden = !0),
          z(n, 'class', 'tooltip-input'),
          z(a, 'class', (o = 'tooltip-toggle fas fa-' + t[1])),
          z(s, 'class', 'tooltip-off'),
          z(c, 'class', (d = 'tooltip-toggle fas fa-' + t[0])),
          z(g, 'class', 'padding-s'),
          z(i, 'class', 'tooltip-on'),
          z(e, 'class', t[2]);
      },
      m(t, o) {
        v(t, e, o),
          x(e, n),
          x(e, r),
          x(e, s),
          x(s, a),
          x(e, l),
          x(e, i),
          x(i, c),
          x(i, u),
          x(i, g),
          k && k.m(g, null),
          (h = !0);
      },
      p(t, [n]) {
        (!h || (2 & n && o !== (o = 'tooltip-toggle fas fa-' + t[1]))) && z(a, 'class', o),
          (!h || (1 & n && d !== (d = 'tooltip-toggle fas fa-' + t[0]))) && z(c, 'class', d),
          k && k.p && (!h || 32 & n) && p(k, w, t, t[5], h ? $(w, t[5], n, null) : m(t[5]), null),
          (!h || 4 & n) && z(e, 'class', t[2]);
      },
      i(t) {
        h || (lt(k, t), (h = !0));
      },
      o(t) {
        it(k, t), (h = !1);
      },
      d(t) {
        t && b(e), k && k.d(t);
      },
    };
  }
  function Ns(t, e, n) {
    let { $$slots: r = {}, $$scope: s } = e,
      { iconOn: a = 'times' } = e,
      { iconOff: o = 'question' } = e,
      { position: l = 'left' } = e,
      { className: i } = e,
      c = `tooltip tooltip--${l}`;
    return (
      i && (c = `${c} ${i}`),
      (t.$$set = (t) => {
        'iconOn' in t && n(0, (a = t.iconOn)),
          'iconOff' in t && n(1, (o = t.iconOff)),
          'position' in t && n(3, (l = t.position)),
          'className' in t && n(4, (i = t.className)),
          '$$scope' in t && n(5, (s = t.$$scope));
      }),
      [a, o, c, l, i, s, r]
    );
  }
  class Bs extends mt {
    constructor(t) {
      super(), pt(this, t, Ns, Fs, o, { iconOn: 0, iconOff: 1, position: 3, className: 4 });
    }
  }
  function Hs(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<h2 class="color--graa1">Components</h2> \n            <i class="home-section-icon fas fa-cubes svelte-pq6zsy"></i>'),
          z(e, 'class', 'flex-item flex-item--center text-align--center');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ss(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<h2 class="color--graa1">Utilities</h2> \n            <i class="home-section-icon fab fa-connectdevelop svelte-pq6zsy"></i>'),
          z(e, 'class', 'flex-item flex-item--center text-align--center');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function _s(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<h2 class="color--graa1">Guidelines</h2> \n            <i class="home-section-icon fas fa-quran svelte-pq6zsy"></i>'),
          z(e, 'class', 'flex-item flex-item--center text-align--center');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function As(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, w;
    return (
      (u = new fe({ props: { className: 'padding-m', url: t[0], $$slots: { default: [Hs] }, $$scope: { ctx: t } } })),
      ($ = new fe({ props: { className: 'padding-m', url: t[1], $$slots: { default: [Ss] }, $$scope: { ctx: t } } })),
      (h = new fe({ props: { className: 'padding-m', url: t[2], $$slots: { default: [_s] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('div')),
            (n = y('div')),
            (r = y('div')),
            (r.innerHTML = '<img alt="" src="ekstrabladet.svg" style="height:70px;"/>'),
            (s = T()),
            (a = y('div')),
            (a.innerHTML = '<h1>Design system</h1>'),
            (o = T()),
            (l = y('div')),
            (l.textContent = 'yarn add @ekstra-bladet/designsystem'),
            (i = T()),
            (c = y('div')),
            (d = y('div')),
            ft(u.$$.fragment),
            (f = T()),
            (g = y('div')),
            ft($.$$.fragment),
            (p = T()),
            (m = y('div')),
            ft(h.$$.fragment),
            z(r, 'class', 'flex flex-justify--center'),
            z(a, 'class', 'flex flex-justify--center  margin-l--b'),
            z(l, 'class', 'text-align--center margin-m--tb padding-m bg--graa7'),
            z(d, 'class', 'home-section width-1of1 margin-m svelte-pq6zsy'),
            z(g, 'class', 'home-section width-1of1 margin-m svelte-pq6zsy'),
            z(m, 'class', 'home-section width-1of1 margin-m svelte-pq6zsy'),
            z(c, 'class', 'flex'),
            z(n, 'class', 'grid-width--medium'),
            z(e, 'class', 'flex flex-justify--around width-1of1');
        },
        m(t, b) {
          v(t, e, b),
            x(e, n),
            x(n, r),
            x(n, s),
            x(n, a),
            x(n, o),
            x(n, l),
            x(n, i),
            x(n, c),
            x(c, d),
            gt(u, d, null),
            x(c, f),
            x(c, g),
            gt($, g, null),
            x(c, p),
            x(c, m),
            gt(h, m, null),
            (w = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.url = t[0]), 8 & e && (n.$$scope = { dirty: e, ctx: t }), u.$set(n);
          const r = {};
          2 & e && (r.url = t[1]), 8 & e && (r.$$scope = { dirty: e, ctx: t }), $.$set(r);
          const s = {};
          4 & e && (s.url = t[2]), 8 & e && (s.$$scope = { dirty: e, ctx: t }), h.$set(s);
        },
        i(t) {
          w || (lt(u.$$.fragment, t), lt($.$$.fragment, t), lt(h.$$.fragment, t), (w = !0));
        },
        o(t) {
          it(u.$$.fragment, t), it($.$$.fragment, t), it(h.$$.fragment, t), (w = !1);
        },
        d(t) {
          t && b(e), $t(u), $t($), $t(h);
        },
      }
    );
  }
  function js(t, e, n) {
    let r = '#/',
      s = '#/',
      a = '#/';
    return (
      ag.forEach((t) => {
        '#/' === r && 'components' === t.group && n(0, (r = `#${t.link}`)),
          '#/' === s && 'utilities' === t.group && n(1, (s = `#${t.link}`)),
          '#/' === a && 'guidelines' === t.group && n(2, (a = `#${t.link}`));
      }),
      [r, s, a]
    );
  }
  window.Prism && console.warn('Prism has already been initiated. Please ensure that svelte-prism is imported first.'),
    (window.Prism = window.Prism || {}),
    (window.Prism.manual = !0);
  var Es =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    Ps = { exports: {} };
  !(function (t) {
    var e = (function (t) {
      var e = /\blang(?:uage)?-([\w-]+)\b/i,
        n = 0,
        r = {},
        s = {
          manual: t.Prism && t.Prism.manual,
          disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
          util: {
            encode: function t(e) {
              return e instanceof a
                ? new a(e.type, t(e.content), e.alias)
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
              var r, a;
              switch (((n = n || {}), s.util.type(e))) {
                case 'Object':
                  if (((a = s.util.objId(e)), n[a])) return n[a];
                  for (var o in ((r = {}), (n[a] = r), e)) e.hasOwnProperty(o) && (r[o] = t(e[o], n));
                  return r;
                case 'Array':
                  return (
                    (a = s.util.objId(e)),
                    n[a]
                      ? n[a]
                      : ((r = []),
                        (n[a] = r),
                        e.forEach(function (e, s) {
                          r[s] = t(e, n);
                        }),
                        r)
                  );
                default:
                  return e;
              }
            },
            getLanguage: function (t) {
              for (; t && !e.test(t.className); ) t = t.parentElement;
              return t ? (t.className.match(e) || [, 'none'])[1].toLowerCase() : 'none';
            },
            currentScript: function () {
              if ('undefined' == typeof document) return null;
              if ('currentScript' in document) return document.currentScript;
              try {
                throw new Error();
              } catch (r) {
                var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) || [])[1];
                if (t) {
                  var e = document.getElementsByTagName('script');
                  for (var n in e) if (e[n].src == t) return e[n];
                }
                return null;
              }
            },
            isActive: function (t, e, n) {
              for (var r = 'no-' + e; t; ) {
                var s = t.classList;
                if (s.contains(e)) return !0;
                if (s.contains(r)) return !1;
                t = t.parentElement;
              }
              return !!n;
            },
          },
          languages: {
            plain: r,
            plaintext: r,
            text: r,
            txt: r,
            extend: function (t, e) {
              var n = s.util.clone(s.languages[t]);
              for (var r in e) n[r] = e[r];
              return n;
            },
            insertBefore: function (t, e, n, r) {
              var a = (r = r || s.languages)[t],
                o = {};
              for (var l in a)
                if (a.hasOwnProperty(l)) {
                  if (l == e) for (var i in n) n.hasOwnProperty(i) && (o[i] = n[i]);
                  n.hasOwnProperty(l) || (o[l] = a[l]);
                }
              var c = r[t];
              return (
                (r[t] = o),
                s.languages.DFS(s.languages, function (e, n) {
                  n === c && e != t && (this[e] = o);
                }),
                o
              );
            },
            DFS: function t(e, n, r, a) {
              a = a || {};
              var o = s.util.objId;
              for (var l in e)
                if (e.hasOwnProperty(l)) {
                  n.call(e, l, e[l], r || l);
                  var i = e[l],
                    c = s.util.type(i);
                  'Object' !== c || a[o(i)]
                    ? 'Array' !== c || a[o(i)] || ((a[o(i)] = !0), t(i, n, l, a))
                    : ((a[o(i)] = !0), t(i, n, null, a));
                }
            },
          },
          plugins: {},
          highlightAll: function (t, e) {
            s.highlightAllUnder(document, t, e);
          },
          highlightAllUnder: function (t, e, n) {
            var r = {
              callback: n,
              container: t,
              selector:
                'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
            };
            s.hooks.run('before-highlightall', r),
              (r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))),
              s.hooks.run('before-all-elements-highlight', r);
            for (var a, o = 0; (a = r.elements[o++]); ) s.highlightElement(a, !0 === e, r.callback);
          },
          highlightElement: function (n, r, a) {
            var o = s.util.getLanguage(n),
              l = s.languages[o];
            n.className = n.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + o;
            var i = n.parentElement;
            i &&
              'pre' === i.nodeName.toLowerCase() &&
              (i.className = i.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + o);
            var c = { element: n, language: o, grammar: l, code: n.textContent };
            function d(t) {
              (c.highlightedCode = t),
                s.hooks.run('before-insert', c),
                (c.element.innerHTML = c.highlightedCode),
                s.hooks.run('after-highlight', c),
                s.hooks.run('complete', c),
                a && a.call(c.element);
            }
            if (
              (s.hooks.run('before-sanity-check', c),
              (i = c.element.parentElement) &&
                'pre' === i.nodeName.toLowerCase() &&
                !i.hasAttribute('tabindex') &&
                i.setAttribute('tabindex', '0'),
              !c.code)
            )
              return s.hooks.run('complete', c), void (a && a.call(c.element));
            if ((s.hooks.run('before-highlight', c), c.grammar))
              if (r && t.Worker) {
                var u = new Worker(s.filename);
                (u.onmessage = function (t) {
                  d(t.data);
                }),
                  u.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 }));
              } else d(s.highlight(c.code, c.grammar, c.language));
            else d(s.util.encode(c.code));
          },
          highlight: function (t, e, n) {
            var r = { code: t, grammar: e, language: n };
            return (
              s.hooks.run('before-tokenize', r),
              (r.tokens = s.tokenize(r.code, r.grammar)),
              s.hooks.run('after-tokenize', r),
              a.stringify(s.util.encode(r.tokens), r.language)
            );
          },
          tokenize: function (t, e) {
            var n = e.rest;
            if (n) {
              for (var r in n) e[r] = n[r];
              delete e.rest;
            }
            var s = new i();
            return (
              c(s, s.head, t),
              l(t, s, e, s.head, 0),
              (function (t) {
                var e = [],
                  n = t.head.next;
                for (; n !== t.tail; ) e.push(n.value), (n = n.next);
                return e;
              })(s)
            );
          },
          hooks: {
            all: {},
            add: function (t, e) {
              var n = s.hooks.all;
              (n[t] = n[t] || []), n[t].push(e);
            },
            run: function (t, e) {
              var n = s.hooks.all[t];
              if (n && n.length) for (var r, a = 0; (r = n[a++]); ) r(e);
            },
          },
          Token: a,
        };
      function a(t, e, n, r) {
        (this.type = t), (this.content = e), (this.alias = n), (this.length = 0 | (r || '').length);
      }
      function o(t, e, n, r) {
        t.lastIndex = e;
        var s = t.exec(n);
        if (s && r && s[1]) {
          var a = s[1].length;
          (s.index += a), (s[0] = s[0].slice(a));
        }
        return s;
      }
      function l(t, e, n, r, i, u) {
        for (var f in n)
          if (n.hasOwnProperty(f) && n[f]) {
            var g = n[f];
            g = Array.isArray(g) ? g : [g];
            for (var $ = 0; $ < g.length; ++$) {
              if (u && u.cause == f + ',' + $) return;
              var p = g[$],
                m = p.inside,
                h = !!p.lookbehind,
                x = !!p.greedy,
                v = p.alias;
              if (x && !p.pattern.global) {
                var b = p.pattern.toString().match(/[imsuy]*$/)[0];
                p.pattern = RegExp(p.pattern.source, b + 'g');
              }
              for (
                var w = p.pattern || p, y = r.next, k = i;
                y !== e.tail && !(u && k >= u.reach);
                k += y.value.length, y = y.next
              ) {
                var C = y.value;
                if (e.length > t.length) return;
                if (!(C instanceof a)) {
                  var T,
                    M = 1;
                  if (x) {
                    if (!(T = o(w, k, t, h))) break;
                    var L = T.index,
                      z = T.index + T[0].length,
                      F = k;
                    for (F += y.value.length; L >= F; ) F += (y = y.next).value.length;
                    if (((k = F -= y.value.length), y.value instanceof a)) continue;
                    for (var N = y; N !== e.tail && (F < z || 'string' == typeof N.value); N = N.next)
                      M++, (F += N.value.length);
                    M--, (C = t.slice(k, F)), (T.index -= k);
                  } else if (!(T = o(w, 0, C, h))) continue;
                  L = T.index;
                  var B = T[0],
                    H = C.slice(0, L),
                    S = C.slice(L + B.length),
                    _ = k + C.length;
                  u && _ > u.reach && (u.reach = _);
                  var A = y.prev;
                  if (
                    (H && ((A = c(e, A, H)), (k += H.length)),
                    d(e, A, M),
                    (y = c(e, A, new a(f, m ? s.tokenize(B, m) : B, v, B))),
                    S && c(e, y, S),
                    M > 1)
                  ) {
                    var j = { cause: f + ',' + $, reach: _ };
                    l(t, e, n, y.prev, k, j), u && j.reach > u.reach && (u.reach = j.reach);
                  }
                }
              }
            }
          }
      }
      function i() {
        var t = { value: null, prev: null, next: null },
          e = { value: null, prev: t, next: null };
        (t.next = e), (this.head = t), (this.tail = e), (this.length = 0);
      }
      function c(t, e, n) {
        var r = e.next,
          s = { value: n, prev: e, next: r };
        return (e.next = s), (r.prev = s), t.length++, s;
      }
      function d(t, e, n) {
        for (var r = e.next, s = 0; s < n && r !== t.tail; s++) r = r.next;
        (e.next = r), (r.prev = e), (t.length -= s);
      }
      if (
        ((t.Prism = s),
        (a.stringify = function t(e, n) {
          if ('string' == typeof e) return e;
          if (Array.isArray(e)) {
            var r = '';
            return (
              e.forEach(function (e) {
                r += t(e, n);
              }),
              r
            );
          }
          var a = {
              type: e.type,
              content: t(e.content, n),
              tag: 'span',
              classes: ['token', e.type],
              attributes: {},
              language: n,
            },
            o = e.alias;
          o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)),
            s.hooks.run('wrap', a);
          var l = '';
          for (var i in a.attributes) l += ' ' + i + '="' + (a.attributes[i] || '').replace(/"/g, '&quot;') + '"';
          return '<' + a.tag + ' class="' + a.classes.join(' ') + '"' + l + '>' + a.content + '</' + a.tag + '>';
        }),
        !t.document)
      )
        return t.addEventListener
          ? (s.disableWorkerMessageHandler ||
              t.addEventListener(
                'message',
                function (e) {
                  var n = JSON.parse(e.data),
                    r = n.language,
                    a = n.code,
                    o = n.immediateClose;
                  t.postMessage(s.highlight(a, s.languages[r], r)), o && t.close();
                },
                !1
              ),
            s)
          : s;
      var u = s.util.currentScript();
      function f() {
        s.manual || s.highlightAll();
      }
      if ((u && ((s.filename = u.src), u.hasAttribute('data-manual') && (s.manual = !0)), !s.manual)) {
        var g = document.readyState;
        'loading' === g || ('interactive' === g && u && u.defer)
          ? document.addEventListener('DOMContentLoaded', f)
          : window.requestAnimationFrame
          ? window.requestAnimationFrame(f)
          : window.setTimeout(f, 16);
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
     */ t.exports && (t.exports = e),
      void 0 !== Es && (Es.Prism = e),
      (e.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
            'special-attr': [],
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
      (e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity),
      (e.languages.markup.doctype.inside['internal-subset'].inside = e.languages.markup),
      e.hooks.add('wrap', function (t) {
        'entity' === t.type && (t.attributes.title = t.content.replace(/&amp;/, '&'));
      }),
      Object.defineProperty(e.languages.markup.tag, 'addInlined', {
        value: function (t, n) {
          var r = {};
          (r['language-' + n] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: e.languages[n],
          }),
            (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
          var s = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r } };
          s['language-' + n] = { pattern: /[\s\S]+/, inside: e.languages[n] };
          var a = {};
          (a[t] = {
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
            inside: s,
          }),
            e.languages.insertBefore('markup', 'cdata', a);
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
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
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
          pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /[.\\]/ },
        },
        keyword:
          /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
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
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
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
        number:
          /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
      })),
      (e.languages.javascript['class-name'][0].pattern =
        /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
      e.languages.insertBefore('javascript', 'keyword', {
        regex: {
          pattern:
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
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
          var t = {
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
            r = 'loading',
            s = 'loaded',
            a = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
            o = /\blang(?:uage)?-([\w-]+)\b/i;
          e.hooks.add('before-highlightall', function (t) {
            t.selector += ', ' + a;
          }),
            e.hooks.add('before-sanity-check', function (o) {
              var l = o.element;
              if (l.matches(a)) {
                (o.code = ''), l.setAttribute(n, r);
                var c = l.appendChild(document.createElement('CODE'));
                c.textContent = 'Loading…';
                var d = l.getAttribute('data-src'),
                  u = o.language;
                if ('none' === u) {
                  var f = (/\.(\w+)$/.exec(d) || [, 'none'])[1];
                  u = t[f] || f;
                }
                i(c, u), i(l, u);
                var g = e.plugins.autoloader;
                g && g.loadLanguages(u);
                var $ = new XMLHttpRequest();
                $.open('GET', d, !0),
                  ($.onreadystatechange = function () {
                    var t, r;
                    4 == $.readyState &&
                      ($.status < 400 && $.responseText
                        ? (l.setAttribute(n, s), (c.textContent = $.responseText), e.highlightElement(c))
                        : (l.setAttribute(n, 'failed'),
                          $.status >= 400
                            ? (c.textContent =
                                ((t = $.status), (r = $.statusText), '✖ Error ' + t + ' while fetching file: ' + r))
                            : (c.textContent = '✖ Error: File does not exist or is empty')));
                  }),
                  $.send(null);
              }
            }),
            (e.plugins.fileHighlight = {
              highlight: function (t) {
                for (var n, r = (t || document).querySelectorAll(a), s = 0; (n = r[s++]); ) e.highlightElement(n);
              },
            });
          var l = !1;
          e.fileHighlight = function () {
            l ||
              (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'),
              (l = !0)),
              e.plugins.fileHighlight.highlight.apply(this, arguments);
          };
        }
        function i(t, e) {
          var n = t.className;
          (n = n.replace(o, ' ') + ' language-' + e), (t.className = n.replace(/\s+/g, ' ').trim());
        }
      })();
  })(Ps);
  var Os = Ps.exports;
  const Is = '(if|else if|await|then|catch|each|html|debug)';
  function Ds(t) {
    let e, n;
    return {
      c() {
        (e = new _()), (n = M()), (e.a = n);
      },
      m(r, s) {
        e.m(t[2], r, s), v(r, n, s);
      },
      p(t, n) {
        4 & n && e.p(t[2]);
      },
      d(t) {
        t && b(n), t && e.d();
      },
    };
  }
  function Vs(t) {
    let e;
    return {
      c() {
        e = C(t[2]);
      },
      m(t, n) {
        v(t, e, n);
      },
      p(t, n) {
        4 & n && B(e, t[2]);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Rs(t) {
    let e, n, r, s, a, o, l;
    const i = t[6].default,
      c = f(i, t, t[5], null);
    function d(t, e) {
      return 'none' === t[0] ? Vs : Ds;
    }
    let u = d(t),
      g = u(t);
    return {
      c() {
        (e = y('code')),
          c && c.c(),
          (n = T()),
          (r = y('pre')),
          (s = y('code')),
          g.c(),
          H(e, 'display', 'none'),
          z(s, 'class', (a = 'language-' + t[0])),
          z(r, 'class', (o = 'language-' + t[0])),
          z(r, 'command-line', ''),
          z(r, 'data-output', '2-17');
      },
      m(a, o) {
        v(a, e, o), c && c.m(e, null), t[7](e), v(a, n, o), v(a, r, o), x(r, s), g.m(s, null), (l = !0);
      },
      p(t, [e]) {
        c && c.p && (!l || 32 & e) && p(c, i, t, t[5], l ? $(i, t[5], e, null) : m(t[5]), null),
          u === (u = d(t)) && g ? g.p(t, e) : (g.d(1), (g = u(t)), g && (g.c(), g.m(s, null))),
          (!l || (1 & e && a !== (a = 'language-' + t[0]))) && z(s, 'class', a),
          (!l || (1 & e && o !== (o = 'language-' + t[0]))) && z(r, 'class', o);
      },
      i(t) {
        l || (lt(c, t), (l = !0));
      },
      o(t) {
        it(c, t), (l = !1);
      },
      d(s) {
        s && b(e), c && c.d(s), t[7](null), s && b(n), s && b(r), g.d();
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
      pattern: new RegExp('{[#:/@]/s' + Is + '(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'),
      inside: {
        punctuation: /^{|}$/,
        keyword: [new RegExp('[#:/@]' + Is + '( )*'), /as/, /then/],
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
        const r = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
        r['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
        const s = {};
        (s[t] = {
          pattern: RegExp(
            /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, t),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: r,
        }),
          Prism.languages.insertBefore('svelte', 'cdata', s);
      },
    }),
    Prism.languages.svelte.tag.addInlined('style', 'css'),
    Prism.languages.svelte.tag.addInlined('script', 'javascript');
  const qs = Os;
  Os.highlightElement;
  const Gs = (t) => t;
  function Ws(t, n, r) {
    let s,
      a,
      { $$slots: o = {}, $$scope: l } = n,
      { language: i = 'javascript' } = n,
      { source: c = '' } = n,
      { transform: d = (t) => t } = n;
    return (
      (t.$$set = (t) => {
        r(9, (n = e(e({}, n), h(t)))),
          'language' in t && r(0, (i = t.language)),
          'source' in t && r(3, (c = t.source)),
          'transform' in t && r(4, (d = t.transform)),
          '$$scope' in t && r(5, (l = t.$$scope));
      }),
      (t.$$.update = () => {
        n &&
          (c || s) &&
          (function () {
            const t = qs.languages[i];
            let e = c || s.textContent;
            (e = Gs(e)), (e = d(e)), r(2, (a = 'none' === i ? e : qs.highlight(e, t, i)));
          })();
      }),
      (n = h(n)),
      [
        i,
        s,
        a,
        c,
        d,
        l,
        o,
        function (t) {
          G[t ? 'unshift' : 'push'](() => {
            (s = t), r(1, s);
          });
        },
      ]
    );
  }
  class Us extends mt {
    constructor(t) {
      super(), pt(this, t, Ws, Rs, o, { language: 0, source: 3, transform: 4 });
    }
  }
  var Ys = {},
    Zs = {};
  Object.defineProperty(Zs, '__esModule', { value: !0 }), (Zs.WORDS = void 0);
  Zs.WORDS = [
    'ad',
    'adipisicing',
    'aliqua',
    'aliquip',
    'amet',
    'anim',
    'aute',
    'cillum',
    'commodo',
    'consectetur',
    'consequat',
    'culpa',
    'cupidatat',
    'deserunt',
    'do',
    'dolor',
    'dolore',
    'duis',
    'ea',
    'eiusmod',
    'elit',
    'enim',
    'esse',
    'est',
    'et',
    'eu',
    'ex',
    'excepteur',
    'exercitation',
    'fugiat',
    'id',
    'in',
    'incididunt',
    'ipsum',
    'irure',
    'labore',
    'laboris',
    'laborum',
    'Lorem',
    'magna',
    'minim',
    'mollit',
    'nisi',
    'non',
    'nostrud',
    'nulla',
    'occaecat',
    'officia',
    'pariatur',
    'proident',
    'qui',
    'quis',
    'reprehenderit',
    'sint',
    'sit',
    'sunt',
    'tempor',
    'ullamco',
    'ut',
    'velit',
    'veniam',
    'voluptate',
  ];
  var Xs = {},
    Js = {};
  Object.defineProperty(Js, '__esModule', { value: !0 }), (Js.FORMATS = Js.FORMAT_PLAIN = Js.FORMAT_HTML = void 0);
  var Ks = 'html';
  Js.FORMAT_HTML = Ks;
  var Qs = 'plain';
  Js.FORMAT_PLAIN = Qs;
  var ta = [Ks, Qs];
  Js.FORMATS = ta;
  var ea = {};
  Object.defineProperty(ea, '__esModule', { value: !0 }), (ea.LINE_ENDINGS = void 0);
  ea.LINE_ENDINGS = { POSIX: '\n', WIN32: '\r\n' };
  var na = {},
    ra = {},
    sa = {};
  Object.defineProperty(sa, '__esModule', { value: !0 }), (sa.default = void 0);
  var aa = function (t) {
    var e = t.trim();
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  sa.default = aa;
  var oa = { exports: {} };
  !(function (t, e) {
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var n = function () {
      return !!t.exports;
    };
    e.default = n;
  })(oa, oa.exports);
  var la = {};
  Object.defineProperty(la, '__esModule', { value: !0 }), (la.default = void 0);
  var ia = function () {
    return 'undefined' != typeof navigator && 'ReactNative' === navigator.product;
  };
  la.default = ia;
  var ca = {},
    da = {};
  Object.defineProperty(da, '__esModule', { value: !0 }), (da.SUPPORTED_PLATFORMS = void 0);
  (da.SUPPORTED_PLATFORMS = { DARWIN: 'darwin', LINUX: 'linux', WIN32: 'win32' }),
    Object.defineProperty(ca, '__esModule', { value: !0 }),
    (ca.default = void 0);
  var ua = da,
    fa = function () {
      return 'undefined' != typeof process && process.platform === ua.SUPPORTED_PLATFORMS.WIN32;
    };
  ca.default = fa;
  var ga = {};
  Object.defineProperty(ga, '__esModule', { value: !0 }), (ga.default = void 0);
  var $a = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Array.apply(null, Array(t)).map(function (t, e) {
      return e;
    });
  };
  ga.default = $a;
  var pa = {};
  Object.defineProperty(pa, '__esModule', { value: !0 }), (pa.default = void 0);
  var ma = ra,
    ha = function (t, e) {
      return (0, ma.makeArrayOfLength)(t).map(function () {
        return e();
      });
    };
  (pa.default = ha),
    (function (t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'capitalize', {
          enumerable: !0,
          get: function () {
            return e.default;
          },
        }),
        Object.defineProperty(t, 'isNode', {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, 'isReactNative', {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, 'isWindows', {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, 'makeArrayOfLength', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'makeArrayOfStrings', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        });
      var e = l(sa),
        n = l(oa.exports),
        r = l(la),
        s = l(ca),
        a = l(ga),
        o = l(pa);
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
    })(ra),
    Object.defineProperty(na, '__esModule', { value: !0 }),
    (na.default = void 0);
  var xa = Zs,
    va = ra;
  function ba(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  }
  function wa(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function ya(t, e, n) {
    return (
      e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
    );
  }
  var ka = (function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.sentencesPerParagraph,
        r = void 0 === n ? { max: 7, min: 3 } : n,
        s = e.wordsPerSentence,
        a = void 0 === s ? { max: 15, min: 5 } : s,
        o = e.random;
      e.seed;
      var l = e.words,
        i = void 0 === l ? xa.WORDS : l;
      if (
        (ba(this, t),
        ya(this, 'sentencesPerParagraph', void 0),
        ya(this, 'wordsPerSentence', void 0),
        ya(this, 'random', void 0),
        ya(this, 'words', void 0),
        r.min > r.max)
      )
        throw new Error(
          'Minimum number of sentences per paragraph ('.concat(r.min, ') cannot exceed maximum (').concat(r.max, ').')
        );
      if (a.min > a.max)
        throw new Error(
          'Minimum number of words per sentence ('.concat(a.min, ') cannot exceed maximum (').concat(a.max, ').')
        );
      (this.sentencesPerParagraph = r), (this.words = i), (this.wordsPerSentence = a), (this.random = o || Math.random);
    }
    var e, n, r;
    return (
      (e = t),
      (n = [
        {
          key: 'generateRandomInteger',
          value: function (t, e) {
            return Math.floor(this.random() * (e - t + 1) + t);
          },
        },
        {
          key: 'generateRandomWords',
          value: function (t) {
            var e = this,
              n = this.wordsPerSentence,
              r = n.min,
              s = n.max,
              a = t || this.generateRandomInteger(r, s);
            return (0, va.makeArrayOfLength)(a)
              .reduce(function (t, n) {
                return ''.concat(e.pluckRandomWord(), ' ').concat(t);
              }, '')
              .trim();
          },
        },
        {
          key: 'generateRandomSentence',
          value: function (t) {
            return ''.concat((0, va.capitalize)(this.generateRandomWords(t)), '.');
          },
        },
        {
          key: 'generateRandomParagraph',
          value: function (t) {
            var e = this,
              n = this.sentencesPerParagraph,
              r = n.min,
              s = n.max,
              a = t || this.generateRandomInteger(r, s);
            return (0, va.makeArrayOfLength)(a)
              .reduce(function (t, n) {
                return ''.concat(e.generateRandomSentence(), ' ').concat(t);
              }, '')
              .trim();
          },
        },
        {
          key: 'pluckRandomWord',
          value: function () {
            var t = this.words.length - 1,
              e = this.generateRandomInteger(0, t);
            return this.words[e];
          },
        },
      ]) && wa(e.prototype, n),
      r && wa(e, r),
      t
    );
  })();
  (na.default = ka), Object.defineProperty(Xs, '__esModule', { value: !0 }), (Xs.default = void 0);
  var Ca,
    Ta = Js,
    Ma = ea,
    La = (Ca = na) && Ca.__esModule ? Ca : { default: Ca },
    za = ra;
  function Fa(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  }
  function Na(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function Ba(t, e, n) {
    return (
      e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
    );
  }
  var Ha = (function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ta.FORMAT_PLAIN,
        r = arguments.length > 2 ? arguments[2] : void 0;
      if (
        (Fa(this, t),
        Ba(this, 'generator', void 0),
        Ba(this, 'format', void 0),
        Ba(this, 'suffix', void 0),
        -1 === Ta.FORMATS.indexOf(n.toLowerCase()))
      )
        throw new Error(''.concat(n, ' is an invalid format. Please use ').concat(Ta.FORMATS.join(' or '), '.'));
      (this.format = n.toLowerCase()), (this.suffix = r), (this.generator = new La.default(e));
    }
    var e, n, r;
    return (
      (e = t),
      (n = [
        {
          key: 'getLineEnding',
          value: function () {
            return this.suffix
              ? this.suffix
              : !(0, za.isReactNative)() && (0, za.isNode)() && (0, za.isWindows)()
              ? Ma.LINE_ENDINGS.WIN32
              : Ma.LINE_ENDINGS.POSIX;
          },
        },
        {
          key: 'formatString',
          value: function (t) {
            return this.format === Ta.FORMAT_HTML ? '<p>'.concat(t, '</p>') : t;
          },
        },
        {
          key: 'formatStrings',
          value: function (t) {
            var e = this;
            return t.map(function (t) {
              return e.formatString(t);
            });
          },
        },
        {
          key: 'generateWords',
          value: function (t) {
            return this.formatString(this.generator.generateRandomWords(t));
          },
        },
        {
          key: 'generateSentences',
          value: function (t) {
            return this.formatString(this.generator.generateRandomParagraph(t));
          },
        },
        {
          key: 'generateParagraphs',
          value: function (t) {
            var e = this.generator.generateRandomParagraph.bind(this.generator);
            return this.formatStrings((0, za.makeArrayOfStrings)(t, e)).join(this.getLineEnding());
          },
        },
      ]) && Na(e.prototype, n),
      r && Na(e, r),
      t
    );
  })();
  function Sa(t = 3) {
    return new Ys.LoremIpsum(
      { sentencesPerParagraph: { max: 8, min: 4 }, wordsPerSentence: { max: 12, min: 4 } },
      'html'
    ).generateParagraphs(t);
  }
  function _a(t = 640, e = 360) {
    const n = new Ys.LoremIpsum({ wordsPerSentence: { max: 12, min: 4 } }),
      r = ['flash', 'forbrug', 'leder', 'nationen', 'nyheder', 'sex-samliv', 'sport', 'underholdning'];
    return {
      breaking: Math.random() < 0.1,
      premium: Math.random() < 0.3,
      src: '#',
      colorClass: r[Math.floor(Math.random() * r.length)],
      media: { src: `https://loremflickr.com/${t}/${e}/city,people,nature,animal?random=${Math.random()}` },
      published: Aa().toString(),
      saved: Math.random() < 0.5,
      section: n.generateWords(1),
      title: n.generateSentences(1),
      truncateTitle: !1,
      update: Math.random() < 0.5,
    };
  }
  function Aa() {
    const t = new Date(2019, 0, 1),
      e = new Date();
    return new Date(t.getTime() + Math.random() * (e.getTime() - t.getTime()));
  }
  (Xs.default = Ha),
    (function (t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'LoremIpsum', {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        (t.loremIpsum = void 0);
      var e = Zs,
        n = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(Xs);
      t.loremIpsum = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = t.count,
          s = void 0 === r ? 1 : r,
          a = t.format,
          o = void 0 === a ? 'plain' : a,
          l = t.paragraphLowerBound,
          i = void 0 === l ? 3 : l,
          c = t.paragraphUpperBound,
          d = void 0 === c ? 7 : c,
          u = t.random,
          f = t.sentenceLowerBound,
          g = void 0 === f ? 5 : f,
          $ = t.sentenceUpperBound,
          p = void 0 === $ ? 15 : $,
          m = t.units,
          h = void 0 === m ? 'sentences' : m,
          x = t.words,
          v = void 0 === x ? e.WORDS : x,
          b = t.suffix,
          w = void 0 === b ? '' : b,
          y = { random: u, sentencesPerParagraph: { max: d, min: i }, words: v, wordsPerSentence: { max: p, min: g } },
          k = new n.default(y, o, w);
        switch (h) {
          case 'paragraphs':
          case 'paragraph':
            return k.generateParagraphs(s);
          case 'sentences':
          case 'sentence':
            return k.generateSentences(s);
          case 'words':
          case 'word':
            return k.generateWords(s);
          default:
            return '';
        }
      };
    })(Ys);
  const ja = vt(localStorage.getItem('sourceType') || 'html');
  function Ea(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, w, k, M, L, F, N, B, H, S;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [Pa] }, $$scope: { ctx: t } } })),
      (w = new Fr({
        props: { type: 'secondary', extension: 'small', $$slots: { default: [Oa] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (s = y('thead')),
            (s.innerHTML =
              '<tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr>'),
            (a = T()),
            (o = y('tbody')),
            (l = y('tr')),
            (l.innerHTML =
              '<td>dataTheme</td> \n        <td>&#39;darkmode&#39; | &#39;lightmode&#39;</td> \n        <td></td> \n        <td>See <a href="/#/utilities/datatheme">Data Theme</a> for doc</td>'),
            (i = T()),
            (c = y('tr')),
            (d = y('td')),
            (d.textContent = 'tabs'),
            (u = T()),
            (f = y('td')),
            (f.textContent = 'ITabsConfig[]'),
            (g = T()),
            ($ = y('td')),
            (p = T()),
            (m = y('td')),
            (h = C('Array of tab data. See ')),
            ft(w.$$.fragment),
            (k = C(' props below for details')),
            (M = T()),
            (L = y('tr')),
            (L.innerHTML = '<th colspan="4">Tab</th>'),
            (F = T()),
            (N = y('tr')),
            (N.innerHTML = '<td>content</td> \n        <td>string / html</td> \n        <td></td> \n        <td></td>'),
            (B = T()),
            (H = y('tr')),
            (H.innerHTML = '<td>title</td> \n        <td>string</td> \n        <td></td> \n        <td></td>'),
            z(r, 'class', 'table');
        },
        m(t, b) {
          gt(e, t, b),
            v(t, n, b),
            v(t, r, b),
            x(r, s),
            x(r, a),
            x(r, o),
            x(o, l),
            x(o, i),
            x(o, c),
            x(c, d),
            x(c, u),
            x(c, f),
            x(c, g),
            x(c, $),
            x(c, p),
            x(c, m),
            x(m, h),
            gt(w, m, null),
            x(m, k),
            x(o, M),
            x(o, L),
            x(o, F),
            x(o, N),
            x(o, B),
            x(o, H),
            (S = !0);
        },
        i(t) {
          S || (lt(e.$$.fragment, t), lt(w.$$.fragment, t), (S = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(w.$$.fragment, t), (S = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r), $t(w);
        },
      }
    );
  }
  function Pa(e) {
    let n;
    return {
      c() {
        n = C("import { Accordion } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Oa(t) {
    let e;
    return {
      c() {
        e = C('Tab');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ia(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Va] }, $$scope: { ctx: t } } })),
      (r = new Us({ props: { language: 'js', $$slots: { default: [Ra] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment);
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), gt(r, t, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t);
        },
      }
    );
  }
  function Da(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [qa] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Va(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="accordion card-mode padding-l ff-secondary width-1of1">\n  <div class="accordion-tab margin-m--b">\n    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">\n      <span class="fontweight-bold fontsize-medium">Tab 1</span>\n      <i class="fas fa-chevron-down" />\n    </div>\n    <div class="accordion-body padding-m padding-l--rl fontsize-small">\n      Content 1\n    </div>\n  </div>\n  <div class="accordion-tab margin-m--b">\n    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">\n      <span class="fontweight-bold fontsize-medium">Tab 2</span>\n      <i class="fas fa-chevron-down" />\n    </div>\n    <div class="accordion-body padding-m padding-l--rl fontsize-small">\n      Content 2\n    </div>\n  </div>\n  <div class="accordion-tab margin-m--b">\n    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">\n      <span class="fontweight-bold fontsize-medium">Tab 3</span>\n      <i class="fas fa-chevron-down" />\n    </div>\n    <div class="accordion-body padding-m padding-l--rl fontsize-small">\n      Content 3\n    </div>\n  </div>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ra(e) {
    let n;
    return {
      c() {
        n = C(
          'const accordions = document.querySelectorAll(".accordion");\nfor (const accordion of accordions) {\n  const tabs = accordion.querySelectorAll(".accordion-tab");\n  for (const tab of tabs) {\n    const head = tab.querySelector(".accordion-header");\n    head.addEventListener(\'click\', () => {\n      for (const othertab of tabs) {\n        if (othertab !== tab) {\n          othertab.classList.remove(\'accordion-expanded\');\n        }\n      }\n      tab.classList.toggle(\'accordion-expanded\');\n    });\n  }\n}'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function qa(e) {
    let n;
    return {
      c() {
        n = C('<Accordion {tabs} />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ga(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d = 'svelte' === t[0] && Ea(t);
    s = new jt({ props: { tabs: t[1] } });
    const u = [Da, Ia],
      f = [];
    function g(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (o = g(t)),
      (l = f[o] = u[o](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Accordion'),
            (n = T()),
            d && d.c(),
            (r = T()),
            ft(s.$$.fragment),
            (a = T()),
            l.c(),
            (i = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, l) {
          v(t, e, l),
            v(t, n, l),
            d && d.m(t, l),
            v(t, r, l),
            gt(s, t, l),
            v(t, a, l),
            f[o].m(t, l),
            v(t, i, l),
            (c = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? d
              ? 1 & e && lt(d, 1)
              : ((d = Ea(t)), d.c(), lt(d, 1), d.m(r.parentNode, r))
            : d &&
              (at(),
              it(d, 1, 1, () => {
                d = null;
              }),
              ot());
          let n = o;
          (o = g(t)),
            o !== n &&
              (at(),
              it(f[n], 1, 1, () => {
                f[n] = null;
              }),
              ot(),
              (l = f[o]),
              l || ((l = f[o] = u[o](t)), l.c()),
              lt(l, 1),
              l.m(i.parentNode, i));
        },
        i(t) {
          c || (lt(d), lt(s.$$.fragment, t), lt(l), (c = !0));
        },
        o(t) {
          it(d), it(s.$$.fragment, t), it(l), (c = !1);
        },
        d(t) {
          t && b(e), t && b(n), d && d.d(t), t && b(r), $t(s, t), t && b(a), f[o].d(t), t && b(i);
        },
      }
    );
  }
  function Wa(t, e, n) {
    let r;
    u(t, ja, (t) => n(0, (r = t)));
    const s = [];
    for (let t = 0; t < 3; t++) s.push({ title: `Tab ${t + 1}`, content: '<h2>Test af h2</h2>' + Sa() });
    return [r, s];
  }
  ja.subscribe((t) => {
    localStorage.setItem('sourceType', t);
  });
  function Ua(e) {
    let n;
    return {
      c() {
        (n = y('p')), (n.textContent = 'ArticleCard er en ren Svelte component.');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ya(t) {
    let n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      w,
      k,
      M,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      G,
      W,
      U,
      Y,
      Z,
      X,
      J,
      K,
      Q,
      tt,
      et,
      nt,
      rt,
      st,
      at,
      ot,
      ut,
      pt,
      mt,
      ht,
      xt,
      vt,
      bt,
      wt,
      yt,
      kt,
      Ct,
      Tt,
      Mt,
      Lt,
      zt,
      Ft,
      Nt,
      Bt,
      Ht,
      St,
      _t,
      At,
      jt,
      Et,
      Pt,
      Ot,
      It,
      Dt,
      Vt,
      Rt,
      qt,
      Gt,
      Wt;
    (n = new Us({ props: { language: 'js', $$slots: { default: [Za] }, $$scope: { ctx: t } } })),
      (I = new Fr({
        props: { type: 'secondary', extension: 'small', $$slots: { default: [Xa] }, $$scope: { ctx: t } },
      })),
      (pt = new Fr({
        props: { type: 'primary', extension: 'small', $$slots: { default: [Ja] }, $$scope: { ctx: t } },
      }));
    const Ut = [_a()];
    let Yt = {};
    for (let t = 0; t < Ut.length; t += 1) Yt = e(Yt, Ut[t]);
    (Tt = new Cr({ props: Yt })),
      (Lt = new Us({ props: { language: 'html', $$slots: { default: [Ka] }, $$scope: { ctx: t } } }));
    const Zt = [{ className: 'margin-m--b' }, { type: 'small-media' }, _a(250, 120)];
    let Xt = {};
    for (let t = 0; t < Zt.length; t += 1) Xt = e(Xt, Zt[t]);
    Bt = new Cr({ props: Xt });
    const Jt = [{ type: 'small-media--reverse' }, _a(250, 120)];
    let Kt = {};
    for (let t = 0; t < Jt.length; t += 1) Kt = e(Kt, Jt[t]);
    return (
      (St = new Cr({ props: Kt })),
      (At = new Us({ props: { language: 'html', $$slots: { default: [Qa] }, $$scope: { ctx: t } } })),
      (Ot = new Cr({ props: { loading: !0 } })),
      (Dt = new Cr({ props: { loading: !0, type: 'small-media' } })),
      (Rt = new Cr({ props: { loading: !0, type: 'small-media--reverse' } })),
      (Gt = new Us({ props: { language: 'html', $$slots: { default: [to] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(n.$$.fragment),
            (r = T()),
            (s = y('table')),
            (a = y('thead')),
            (a.innerHTML =
              '<tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr>'),
            (o = T()),
            (l = y('tbody')),
            (i = y('tr')),
            (i.innerHTML = '<td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td>'),
            (c = T()),
            (d = y('tr')),
            (d.innerHTML =
              '<td>colorClass</td> \n        <td>string</td> \n        <td></td> \n        <td>EB color <em>(e.g. sport)</em></td>'),
            (u = T()),
            (f = y('tr')),
            (f.innerHTML =
              '<td>src</td> \n        <td>string</td> \n        <td></td> \n        <td>Converts the ArticleCard into a clickable link</td>'),
            (g = T()),
            ($ = y('tr')),
            ($.innerHTML =
              '<td>breaking</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Force breaking color</td>'),
            (p = T()),
            (m = y('tr')),
            (m.innerHTML =
              '<td>update</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Add update icon to media</td>'),
            (h = T()),
            (w = y('tr')),
            (w.innerHTML = '<td>premium</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td>'),
            (k = T()),
            (M = y('tr')),
            (M.innerHTML =
              '<td>loading</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Converts the ArticleCard into a loading placeholder</td>'),
            (L = T()),
            (F = y('tr')),
            (F.innerHTML =
              '<td>maxLines</td> \n        <td>number</td> \n        <td>4</td> \n        <td>Sets the value of <code>--max-lines</code> if truncate is enabled</td>'),
            (N = T()),
            (B = y('tr')),
            (H = y('td')),
            (H.textContent = 'media'),
            (S = T()),
            (_ = y('td')),
            (_.textContent = 'IMediaOptions'),
            (A = T()),
            (j = y('td')),
            (E = T()),
            (P = y('td')),
            (O = C('Adds a image, see ')),
            ft(I.$$.fragment),
            (D = C(' props below for details')),
            (V = T()),
            (R = y('tr')),
            (R.innerHTML =
              '<td>section</td> \n        <td>string</td> \n        <td></td> \n        <td>Displays the section meta with a tag icon</td>'),
            (q = T()),
            (G = y('tr')),
            (G.innerHTML = '<td>style</td> \n        <td>string</td> \n        <td></td> \n        <td></td>'),
            (W = T()),
            (U = y('tr')),
            (U.innerHTML =
              '<td>published</td> \n        <td>date string</td> \n        <td></td> \n        <td>Displays relative time meta with a icon</td>'),
            (Y = T()),
            (Z = y('tr')),
            (Z.innerHTML =
              '<td>truncateTitle</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td>'),
            (X = T()),
            (J = y('tr')),
            (J.innerHTML =
              '<td>cardType</td> \n        <td>&#39;mode&#39; | &#39;small-media&#39; | &#39;small-media--reverse&#39;</td> \n        <td></td> \n        <td>Display types. See examples below</td>'),
            (K = T()),
            (Q = y('tr')),
            (Q.innerHTML = '<th colspan="4">Media</th>'),
            (tt = T()),
            (et = y('tr')),
            (et.innerHTML = '<td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td>'),
            (nt = T()),
            (rt = y('tr')),
            (rt.innerHTML = '<td>height</td> \n        <td>string</td> \n        <td></td> \n        <td></td>'),
            (st = T()),
            (at = y('tr')),
            (ot = y('td')),
            (ut = C('src ')),
            ft(pt.$$.fragment),
            (mt = T()),
            (ht = y('td')),
            (ht.textContent = 'string'),
            (xt = T()),
            (vt = y('td')),
            (bt = T()),
            (wt = y('td')),
            (yt = T()),
            (kt = y('tr')),
            (kt.innerHTML = '<td>width</td> \n        <td>string</td> \n        <td></td> \n        <td></td>'),
            (Ct = T()),
            ft(Tt.$$.fragment),
            (Mt = T()),
            ft(Lt.$$.fragment),
            (zt = T()),
            (Ft = y('h3')),
            (Ft.textContent = 'Small-media'),
            (Nt = T()),
            ft(Bt.$$.fragment),
            (Ht = T()),
            ft(St.$$.fragment),
            (_t = T()),
            ft(At.$$.fragment),
            (jt = T()),
            (Et = y('h3')),
            (Et.textContent = 'Loading placeholder'),
            (Pt = T()),
            ft(Ot.$$.fragment),
            (It = T()),
            ft(Dt.$$.fragment),
            (Vt = T()),
            ft(Rt.$$.fragment),
            (qt = T()),
            ft(Gt.$$.fragment),
            z(s, 'class', 'table');
        },
        m(t, e) {
          gt(n, t, e),
            v(t, r, e),
            v(t, s, e),
            x(s, a),
            x(s, o),
            x(s, l),
            x(l, i),
            x(l, c),
            x(l, d),
            x(l, u),
            x(l, f),
            x(l, g),
            x(l, $),
            x(l, p),
            x(l, m),
            x(l, h),
            x(l, w),
            x(l, k),
            x(l, M),
            x(l, L),
            x(l, F),
            x(l, N),
            x(l, B),
            x(B, H),
            x(B, S),
            x(B, _),
            x(B, A),
            x(B, j),
            x(B, E),
            x(B, P),
            x(P, O),
            gt(I, P, null),
            x(P, D),
            x(l, V),
            x(l, R),
            x(l, q),
            x(l, G),
            x(l, W),
            x(l, U),
            x(l, Y),
            x(l, Z),
            x(l, X),
            x(l, J),
            x(l, K),
            x(l, Q),
            x(l, tt),
            x(l, et),
            x(l, nt),
            x(l, rt),
            x(l, st),
            x(l, at),
            x(at, ot),
            x(ot, ut),
            gt(pt, ot, null),
            x(at, mt),
            x(at, ht),
            x(at, xt),
            x(at, vt),
            x(at, bt),
            x(at, wt),
            x(l, yt),
            x(l, kt),
            v(t, Ct, e),
            gt(Tt, t, e),
            v(t, Mt, e),
            gt(Lt, t, e),
            v(t, zt, e),
            v(t, Ft, e),
            v(t, Nt, e),
            gt(Bt, t, e),
            v(t, Ht, e),
            gt(St, t, e),
            v(t, _t, e),
            gt(At, t, e),
            v(t, jt, e),
            v(t, Et, e),
            v(t, Pt, e),
            gt(Ot, t, e),
            v(t, It, e),
            gt(Dt, t, e),
            v(t, Vt, e),
            gt(Rt, t, e),
            v(t, qt, e),
            gt(Gt, t, e),
            (Wt = !0);
        },
        p(t, e) {
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
          const s = {};
          2 & e && (s.$$scope = { dirty: e, ctx: t }), I.$set(s);
          const a = {};
          2 & e && (a.$$scope = { dirty: e, ctx: t }), pt.$set(a);
          const o = 0 & e ? ct(Ut, [dt(_a())]) : {};
          Tt.$set(o);
          const l = {};
          2 & e && (l.$$scope = { dirty: e, ctx: t }), Lt.$set(l);
          const i = 0 & e ? ct(Zt, [Zt[0], Zt[1], dt(_a(250, 120))]) : {};
          Bt.$set(i);
          const c = 0 & e ? ct(Jt, [Jt[0], dt(_a(250, 120))]) : {};
          St.$set(c);
          const d = {};
          2 & e && (d.$$scope = { dirty: e, ctx: t }), At.$set(d);
          const u = {};
          2 & e && (u.$$scope = { dirty: e, ctx: t }), Gt.$set(u);
        },
        i(t) {
          Wt ||
            (lt(n.$$.fragment, t),
            lt(I.$$.fragment, t),
            lt(pt.$$.fragment, t),
            lt(Tt.$$.fragment, t),
            lt(Lt.$$.fragment, t),
            lt(Bt.$$.fragment, t),
            lt(St.$$.fragment, t),
            lt(At.$$.fragment, t),
            lt(Ot.$$.fragment, t),
            lt(Dt.$$.fragment, t),
            lt(Rt.$$.fragment, t),
            lt(Gt.$$.fragment, t),
            (Wt = !0));
        },
        o(t) {
          it(n.$$.fragment, t),
            it(I.$$.fragment, t),
            it(pt.$$.fragment, t),
            it(Tt.$$.fragment, t),
            it(Lt.$$.fragment, t),
            it(Bt.$$.fragment, t),
            it(St.$$.fragment, t),
            it(At.$$.fragment, t),
            it(Ot.$$.fragment, t),
            it(Dt.$$.fragment, t),
            it(Rt.$$.fragment, t),
            it(Gt.$$.fragment, t),
            (Wt = !1);
        },
        d(t) {
          $t(n, t),
            t && b(r),
            t && b(s),
            $t(I),
            $t(pt),
            t && b(Ct),
            $t(Tt, t),
            t && b(Mt),
            $t(Lt, t),
            t && b(zt),
            t && b(Ft),
            t && b(Nt),
            $t(Bt, t),
            t && b(Ht),
            $t(St, t),
            t && b(_t),
            $t(At, t),
            t && b(jt),
            t && b(Et),
            t && b(Pt),
            $t(Ot, t),
            t && b(It),
            $t(Dt, t),
            t && b(Vt),
            $t(Rt, t),
            t && b(qt),
            $t(Gt, t);
        },
      }
    );
  }
  function Za(e) {
    let n;
    return {
      c() {
        n = C("import { ArticleCard } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Xa(t) {
    let e;
    return {
      c() {
        e = C('Media');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ja(t) {
    let e;
    return {
      c() {
        e = C('required');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ka(e) {
    let n;
    return {
      c() {
        n = C('<ArticleCard {...article} />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Qa(e) {
    let n;
    return {
      c() {
        n = C(
          '<ArticleCard className="small-media" {...article} />\n<ArticleCard className="small-media--reverse" {...article} />'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function to(e) {
    let n;
    return {
      c() {
        n = C(
          '<ArticleCard loading={true} />\n<ArticleCard loading={true} type="small-media" />\n<ArticleCard loading={true} type="small-media--reverse" />'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function eo(t) {
    let e, n, r, s, a, o;
    const l = [Ya, Ua],
      i = [];
    function c(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (r = c(t)),
      (s = i[r] = l[r](t)),
      {
        c() {
          (e = y('h1')), (e.textContent = 'Article Card'), (n = T()), s.c(), (a = M()), z(e, 'class', 'color--eb');
        },
        m(t, s) {
          v(t, e, s), v(t, n, s), i[r].m(t, s), v(t, a, s), (o = !0);
        },
        p(t, [e]) {
          let n = r;
          (r = c(t)),
            r === n
              ? i[r].p(t, e)
              : (at(),
                it(i[n], 1, 1, () => {
                  i[n] = null;
                }),
                ot(),
                (s = i[r]),
                s ? s.p(t, e) : ((s = i[r] = l[r](t)), s.c()),
                lt(s, 1),
                s.m(a.parentNode, a));
        },
        i(t) {
          o || (lt(s), (o = !0));
        },
        o(t) {
          it(s), (o = !1);
        },
        d(t) {
          t && b(e), t && b(n), i[r].d(t), t && b(a);
        },
      }
    );
  }
  function no(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  function ro(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [so] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>extension</td> \n        <td>&#39;small&#39;</td> \n        <td></td> \n        <td>Make a smaller version of the badge</td></tr> \n      <tr><td>href</td> \n        <td>string</td> \n        <td></td> \n        <td>Coverts the Badge into a clickable link</td></tr> \n      <tr><td>style</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>type</td> \n        <td>&#39;danger&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39;</td> \n        <td></td> \n        <td></td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function so(e) {
    let n;
    return {
      c() {
        n = C("import { Badge } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ao(t) {
    let e;
    return {
      c() {
        e = C('Badge');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function oo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [io] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function lo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [co] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function io(e) {
    let n;
    return {
      c() {
        n = C('<span class="badge"></span>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function co(e) {
    let n;
    return {
      c() {
        n = C('<Badge></Badge>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function uo(t) {
    let e;
    return {
      c() {
        e = C('Primary');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function fo(t) {
    let e;
    return {
      c() {
        e = C('Secondary');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function go(t) {
    let e;
    return {
      c() {
        e = C('Success');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function $o(t) {
    let e;
    return {
      c() {
        e = C('Danger');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function po(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ho] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function mo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [xo] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ho(e) {
    let n;
    return {
      c() {
        n = C(
          '<span class="badge" data-type="primary"></span>\n<span class="badge" data-type="secondary"></span>\n<span class="badge" data-type="success"></span>\n<span class="badge" data-type="danger"></span>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function xo(e) {
    let n;
    return {
      c() {
        n = C(
          '<Badge type="primary"></Badge>\n<Badge type="secondary"></Badge>\n<Badge type="success"></Badge>\n<Badge type="danger"></Badge>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function vo(t) {
    let e;
    return {
      c() {
        e = C('bluedarkBGClass');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function bo(t) {
    let e;
    return {
      c() {
        e = C('greenBGClass');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function wo(t) {
    let e;
    return {
      c() {
        e = C('greendarkBGClass');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function yo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Co] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ko(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [To] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Co(e) {
    let n;
    return {
      c() {
        n = C(
          '<span class="badge bg--bluedark"></span>\n<span class="badge bg--green"></span>\n<span class="badge bg--greendark"></span>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function To(e) {
    let n;
    return {
      c() {
        n = C(
          'import { bluedarkBGClass, greenBGClass, greendarkBGClass } from \'@ekstra-bladet/eb-colors\';\n\n<Badge {bluedarkBGClass}">bluedarkBGClass</Badge>\n<Badge {greenBGClass}">greenBGClass</Badge>\n<Badge {greendarkBGClass}">greendarkBGClass</Badge>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Mo(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      w,
      k,
      C,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      G,
      W,
      U,
      Y = 'svelte' === t[0] && ro(t);
    c = new Fr({ props: { $$slots: { default: [ao] }, $$scope: { ctx: t } } });
    const Z = [lo, oo],
      X = [];
    function J(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (u = J(t)),
      (f = X[u] = Z[u](t)),
      (h = new Fr({
        props: { className: 'margin-s', type: 'primary', $$slots: { default: [uo] }, $$scope: { ctx: t } },
      })),
      (k = new Fr({
        props: { className: 'margin-s', type: 'secondary', $$slots: { default: [fo] }, $$scope: { ctx: t } },
      })),
      (L = new Fr({
        props: { className: 'margin-s', type: 'success', $$slots: { default: [go] }, $$scope: { ctx: t } },
      })),
      (N = new Fr({
        props: { className: 'margin-s', type: 'danger', $$slots: { default: [$o] }, $$scope: { ctx: t } },
      }));
    const K = [mo, po],
      Q = [];
    function tt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (H = tt(t)),
      (S = Q[H] = K[H](t)),
      (P = new Fr({ props: { className: 'margin-s bg--bluedark', $$slots: { default: [vo] }, $$scope: { ctx: t } } })),
      (I = new Fr({ props: { className: 'margin-s bg--green', $$slots: { default: [bo] }, $$scope: { ctx: t } } })),
      (V = new Fr({ props: { className: 'margin-s bg--greendark', $$slots: { default: [wo] }, $$scope: { ctx: t } } }));
    const et = [ko, yo],
      nt = [];
    function rt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (q = rt(t)),
      (G = nt[q] = et[q](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Badge'),
            (n = T()),
            (r = y('p')),
            (r.textContent =
              'Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.'),
            (s = T()),
            Y && Y.c(),
            (a = T()),
            (o = y('h3')),
            (o.textContent = 'Default'),
            (l = T()),
            (i = y('div')),
            ft(c.$$.fragment),
            (d = T()),
            f.c(),
            (g = T()),
            ($ = y('h3')),
            ($.textContent = 'Variations'),
            (p = T()),
            (m = y('div')),
            ft(h.$$.fragment),
            (w = T()),
            ft(k.$$.fragment),
            (C = T()),
            ft(L.$$.fragment),
            (F = T()),
            ft(N.$$.fragment),
            (B = T()),
            S.c(),
            (_ = T()),
            (A = y('h3')),
            (A.textContent = 'Farve muligheder fra eb-colors'),
            (j = T()),
            (E = y('div')),
            ft(P.$$.fragment),
            (O = T()),
            ft(I.$$.fragment),
            (D = T()),
            ft(V.$$.fragment),
            (R = T()),
            G.c(),
            (W = M()),
            z(e, 'class', 'color--eb'),
            z(i, 'class', 'flex'),
            z(m, 'class', 'flex'),
            z(E, 'class', 'flex');
        },
        m(t, f) {
          v(t, e, f),
            v(t, n, f),
            v(t, r, f),
            v(t, s, f),
            Y && Y.m(t, f),
            v(t, a, f),
            v(t, o, f),
            v(t, l, f),
            v(t, i, f),
            gt(c, i, null),
            v(t, d, f),
            X[u].m(t, f),
            v(t, g, f),
            v(t, $, f),
            v(t, p, f),
            v(t, m, f),
            gt(h, m, null),
            x(m, w),
            gt(k, m, null),
            x(m, C),
            gt(L, m, null),
            x(m, F),
            gt(N, m, null),
            v(t, B, f),
            Q[H].m(t, f),
            v(t, _, f),
            v(t, A, f),
            v(t, j, f),
            v(t, E, f),
            gt(P, E, null),
            x(E, O),
            gt(I, E, null),
            x(E, D),
            gt(V, E, null),
            v(t, R, f),
            nt[q].m(t, f),
            v(t, W, f),
            (U = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? Y
              ? 1 & e && lt(Y, 1)
              : ((Y = ro(t)), Y.c(), lt(Y, 1), Y.m(a.parentNode, a))
            : Y &&
              (at(),
              it(Y, 1, 1, () => {
                Y = null;
              }),
              ot());
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), c.$set(n);
          let r = u;
          (u = J(t)),
            u !== r &&
              (at(),
              it(X[r], 1, 1, () => {
                X[r] = null;
              }),
              ot(),
              (f = X[u]),
              f || ((f = X[u] = Z[u](t)), f.c()),
              lt(f, 1),
              f.m(g.parentNode, g));
          const s = {};
          2 & e && (s.$$scope = { dirty: e, ctx: t }), h.$set(s);
          const o = {};
          2 & e && (o.$$scope = { dirty: e, ctx: t }), k.$set(o);
          const l = {};
          2 & e && (l.$$scope = { dirty: e, ctx: t }), L.$set(l);
          const i = {};
          2 & e && (i.$$scope = { dirty: e, ctx: t }), N.$set(i);
          let d = H;
          (H = tt(t)),
            H !== d &&
              (at(),
              it(Q[d], 1, 1, () => {
                Q[d] = null;
              }),
              ot(),
              (S = Q[H]),
              S || ((S = Q[H] = K[H](t)), S.c()),
              lt(S, 1),
              S.m(_.parentNode, _));
          const $ = {};
          2 & e && ($.$$scope = { dirty: e, ctx: t }), P.$set($);
          const p = {};
          2 & e && (p.$$scope = { dirty: e, ctx: t }), I.$set(p);
          const m = {};
          2 & e && (m.$$scope = { dirty: e, ctx: t }), V.$set(m);
          let x = q;
          (q = rt(t)),
            q !== x &&
              (at(),
              it(nt[x], 1, 1, () => {
                nt[x] = null;
              }),
              ot(),
              (G = nt[q]),
              G || ((G = nt[q] = et[q](t)), G.c()),
              lt(G, 1),
              G.m(W.parentNode, W));
        },
        i(t) {
          U ||
            (lt(Y),
            lt(c.$$.fragment, t),
            lt(f),
            lt(h.$$.fragment, t),
            lt(k.$$.fragment, t),
            lt(L.$$.fragment, t),
            lt(N.$$.fragment, t),
            lt(S),
            lt(P.$$.fragment, t),
            lt(I.$$.fragment, t),
            lt(V.$$.fragment, t),
            lt(G),
            (U = !0));
        },
        o(t) {
          it(Y),
            it(c.$$.fragment, t),
            it(f),
            it(h.$$.fragment, t),
            it(k.$$.fragment, t),
            it(L.$$.fragment, t),
            it(N.$$.fragment, t),
            it(S),
            it(P.$$.fragment, t),
            it(I.$$.fragment, t),
            it(V.$$.fragment, t),
            it(G),
            (U = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            Y && Y.d(t),
            t && b(a),
            t && b(o),
            t && b(l),
            t && b(i),
            $t(c),
            t && b(d),
            X[u].d(t),
            t && b(g),
            t && b($),
            t && b(p),
            t && b(m),
            $t(h),
            $t(k),
            $t(L),
            $t(N),
            t && b(B),
            Q[H].d(t),
            t && b(_),
            t && b(A),
            t && b(j),
            t && b(E),
            $t(P),
            $t(I),
            $t(V),
            t && b(R),
            nt[q].d(t),
            t && b(W);
        },
      }
    );
  }
  function Lo(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  function zo(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [Fo] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>disabled</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td></tr> \n      <tr><td>extension</td> \n        <td>&#39;icon&#39; | &#39;link&#39; | &#39;solid&#39; | &#39;icon link&#39; | &#39;icon solid&#39;</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>href</td> \n        <td>string</td> \n        <td></td> \n        <td>Coverts the Button into a clickable link</td></tr> \n      <tr><td>size</td> \n        <td>&#39;big&#39; | &#39;small&#39;</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>type</td> \n        <td>&#39;accept&#39; | &#39;cancel&#39; | &#39;primary&#39; | &#39;secondary&#39;</td> \n        <td></td> \n        <td></td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function Fo(e) {
    let n;
    return {
      c() {
        n = C("import { Button } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function No(t) {
    let e;
    return {
      c() {
        e = C('Button');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Bo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [So] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ho(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [_o] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function So(e) {
    let n;
    return {
      c() {
        n = C('<button class="button"></button>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function _o(e) {
    let n;
    return {
      c() {
        n = C('<Button></Button>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ao(t) {
    let e;
    return {
      c() {
        e = C('Solid');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function jo(t) {
    let e;
    return {
      c() {
        e = C('Link');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Eo(t) {
    let e;
    return {
      c() {
        (e = y('span')), (e.textContent = '×'), H(e, 'font-size', '30px');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Po(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Io] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Oo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Do] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Io(e) {
    let n;
    return {
      c() {
        n = C(
          '<button class="button button--solid"></button>\n<button class="button button--link"></button>\n<button class="button button--icon">\n  <span style="font-size: 30px;">&times;</span>\n</button>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Do(e) {
    let n;
    return {
      c() {
        n = C(
          '<Button extension="solid"></Button>\n<Button extension="link"></Button>\n<Button extension="icon">\n  <span style="font-size: 30px">&times;</span>\n</Button>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Vo(t) {
    let e;
    return {
      c() {
        e = C('Big');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ro(t) {
    let e;
    return {
      c() {
        e = C('Small');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function qo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Wo] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Go(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Uo] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Wo(e) {
    let n;
    return {
      c() {
        n = C('<button class="button button--big"></button>\n<button class="button button--small"></button>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Uo(e) {
    let n;
    return {
      c() {
        n = C('<Button size="big"></Button>\n<Button size="small"></Button>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Yo(t) {
    let e;
    return {
      c() {
        e = C('Primary');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Zo(t) {
    let e;
    return {
      c() {
        e = C('Secondary');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Xo(t) {
    let e;
    return {
      c() {
        e = C('Accept');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Jo(t) {
    let e;
    return {
      c() {
        e = C('Cancel');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ko(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [tl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Qo(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [el] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function tl(e) {
    let n;
    return {
      c() {
        n = C(
          '<button class="button button--primary"></button>\n<button class="button button--secondary"></button>\n<button class="button button--accept"></button>\n<button class="button button--cancel"></button>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function el(e) {
    let n;
    return {
      c() {
        n = C(
          '<Button type="primary"></Button>\n<Button type="secondary"></Button>\n<Button type="accept"></Button>\n<Button type="cancel"></Button>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function nl(e) {
    let n, r, s, a;
    return (
      (s = new Gn({ props: { className: 'icon', name: 'angle-right', width: '20' } })),
      {
        c() {
          (n = y('span')), (n.textContent = 'Icon to the right'), (r = T()), ft(s.$$.fragment);
        },
        m(t, e) {
          v(t, n, e), v(t, r, e), gt(s, t, e), (a = !0);
        },
        p: t,
        i(t) {
          a || (lt(s.$$.fragment, t), (a = !0));
        },
        o(t) {
          it(s.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && b(n), t && b(r), $t(s, t);
        },
      }
    );
  }
  function rl(e) {
    let n, r, s, a;
    return (
      (n = new Gn({ props: { className: 'icon', name: 'angle-left', width: '20' } })),
      {
        c() {
          ft(n.$$.fragment), (r = T()), (s = y('span')), (s.textContent = 'Icon to the left');
        },
        m(t, e) {
          gt(n, t, e), v(t, r, e), v(t, s, e), (a = !0);
        },
        p: t,
        i(t) {
          a || (lt(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          it(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          $t(n, t), t && b(r), t && b(s);
        },
      }
    );
  }
  function sl(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ol] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function al(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ll] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ol(e) {
    let n;
    return {
      c() {
        n = C(
          '<button class="button">\n  <span></span>\n  <svg viewBox="0 0 50 50">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_right"></use>\n  </svg>\n</button>\n<button class="button">\n  <svg viewBox="0 0 50 50">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_left"></use>\n  </svg>\n  <span></span>\n</button>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ll(e) {
    let n;
    return {
      c() {
        n = C(
          '<Button>\n  <span></span>\n  <Icon className="icon" name="angle-right" width="20" />\n</Button>\n<Button>\n  <Icon className="icon" name="angle-left" width="20" />\n  <span></span>\n</Button>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function il(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      w,
      k,
      C,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      G,
      W,
      U,
      Y,
      Z,
      X,
      J,
      K,
      Q,
      tt,
      et,
      nt,
      rt,
      st,
      ct,
      dt,
      ut,
      pt = 'svelte' === t[0] && zo(t);
    o = new Or({ props: { $$slots: { default: [No] }, $$scope: { ctx: t } } });
    const mt = [Ho, Bo],
      ht = [];
    function xt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (i = xt(t)),
      (c = ht[i] = mt[i](t)),
      (g = new Or({
        props: { className: 'margin-m', extension: 'solid', $$slots: { default: [Ao] }, $$scope: { ctx: t } },
      })),
      (p = new Or({
        props: { className: 'margin-m', extension: 'link', $$slots: { default: [jo] }, $$scope: { ctx: t } },
      })),
      (h = new Or({
        props: { className: 'margin-m', extension: 'icon', $$slots: { default: [Eo] }, $$scope: { ctx: t } },
      }));
    const vt = [Oo, Po],
      bt = [];
    function wt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (w = wt(t)),
      (k = bt[w] = vt[w](t)),
      (H = new Or({ props: { className: 'margin-m', size: 'big', $$slots: { default: [Vo] }, $$scope: { ctx: t } } })),
      (_ = new Or({
        props: { className: 'margin-m', size: 'small', $$slots: { default: [Ro] }, $$scope: { ctx: t } },
      }));
    const yt = [Go, qo],
      kt = [];
    function Ct(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (j = Ct(t)),
      (E = kt[j] = yt[j](t)),
      (D = new Or({
        props: { className: 'margin-m', type: 'primary', $$slots: { default: [Yo] }, $$scope: { ctx: t } },
      })),
      (R = new Or({
        props: { className: 'margin-m', type: 'secondary', $$slots: { default: [Zo] }, $$scope: { ctx: t } },
      })),
      (G = new Or({
        props: { className: 'margin-m', type: 'accept', $$slots: { default: [Xo] }, $$scope: { ctx: t } },
      })),
      (U = new Or({
        props: { className: 'margin-m', type: 'cancel', $$slots: { default: [Jo] }, $$scope: { ctx: t } },
      }));
    const Tt = [Qo, Ko],
      Mt = [];
    function Lt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (Z = Lt(t)),
      (X = Mt[Z] = Tt[Z](t)),
      (tt = new Or({ props: { className: 'margin-m', $$slots: { default: [nl] }, $$scope: { ctx: t } } })),
      (nt = new Or({ props: { className: 'margin-m', $$slots: { default: [rl] }, $$scope: { ctx: t } } }));
    const zt = [al, sl],
      Ft = [];
    function Nt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (st = Nt(t)),
      (ct = Ft[st] = zt[st](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Buttons'),
            (n = T()),
            pt && pt.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Default'),
            (a = T()),
            ft(o.$$.fragment),
            (l = T()),
            c.c(),
            (d = T()),
            (u = y('h3')),
            (u.textContent = 'Extension attribute'),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            ft(p.$$.fragment),
            (m = T()),
            ft(h.$$.fragment),
            (x = T()),
            k.c(),
            (C = T()),
            (L = y('h3')),
            (L.textContent = 'Size attribute'),
            (F = T()),
            (N = y('p')),
            (N.innerHTML = '<b>big</b> and <b>small</b> can be combined with the other three extensions'),
            (B = T()),
            ft(H.$$.fragment),
            (S = T()),
            ft(_.$$.fragment),
            (A = T()),
            E.c(),
            (P = T()),
            (O = y('h3')),
            (O.textContent = 'Variations'),
            (I = T()),
            ft(D.$$.fragment),
            (V = T()),
            ft(R.$$.fragment),
            (q = T()),
            ft(G.$$.fragment),
            (W = T()),
            ft(U.$$.fragment),
            (Y = T()),
            X.c(),
            (J = T()),
            (K = y('h3')),
            (K.textContent = 'With Icon'),
            (Q = T()),
            ft(tt.$$.fragment),
            (et = T()),
            ft(nt.$$.fragment),
            (rt = T()),
            ct.c(),
            (dt = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, c) {
          v(t, e, c),
            v(t, n, c),
            pt && pt.m(t, c),
            v(t, r, c),
            v(t, s, c),
            v(t, a, c),
            gt(o, t, c),
            v(t, l, c),
            ht[i].m(t, c),
            v(t, d, c),
            v(t, u, c),
            v(t, f, c),
            gt(g, t, c),
            v(t, $, c),
            gt(p, t, c),
            v(t, m, c),
            gt(h, t, c),
            v(t, x, c),
            bt[w].m(t, c),
            v(t, C, c),
            v(t, L, c),
            v(t, F, c),
            v(t, N, c),
            v(t, B, c),
            gt(H, t, c),
            v(t, S, c),
            gt(_, t, c),
            v(t, A, c),
            kt[j].m(t, c),
            v(t, P, c),
            v(t, O, c),
            v(t, I, c),
            gt(D, t, c),
            v(t, V, c),
            gt(R, t, c),
            v(t, q, c),
            gt(G, t, c),
            v(t, W, c),
            gt(U, t, c),
            v(t, Y, c),
            Mt[Z].m(t, c),
            v(t, J, c),
            v(t, K, c),
            v(t, Q, c),
            gt(tt, t, c),
            v(t, et, c),
            gt(nt, t, c),
            v(t, rt, c),
            Ft[st].m(t, c),
            v(t, dt, c),
            (ut = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? pt
              ? 1 & e && lt(pt, 1)
              : ((pt = zo(t)), pt.c(), lt(pt, 1), pt.m(r.parentNode, r))
            : pt &&
              (at(),
              it(pt, 1, 1, () => {
                pt = null;
              }),
              ot());
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n);
          let s = i;
          (i = xt(t)),
            i !== s &&
              (at(),
              it(ht[s], 1, 1, () => {
                ht[s] = null;
              }),
              ot(),
              (c = ht[i]),
              c || ((c = ht[i] = mt[i](t)), c.c()),
              lt(c, 1),
              c.m(d.parentNode, d));
          const a = {};
          2 & e && (a.$$scope = { dirty: e, ctx: t }), g.$set(a);
          const l = {};
          2 & e && (l.$$scope = { dirty: e, ctx: t }), p.$set(l);
          const u = {};
          2 & e && (u.$$scope = { dirty: e, ctx: t }), h.$set(u);
          let f = w;
          (w = wt(t)),
            w !== f &&
              (at(),
              it(bt[f], 1, 1, () => {
                bt[f] = null;
              }),
              ot(),
              (k = bt[w]),
              k || ((k = bt[w] = vt[w](t)), k.c()),
              lt(k, 1),
              k.m(C.parentNode, C));
          const $ = {};
          2 & e && ($.$$scope = { dirty: e, ctx: t }), H.$set($);
          const m = {};
          2 & e && (m.$$scope = { dirty: e, ctx: t }), _.$set(m);
          let x = j;
          (j = Ct(t)),
            j !== x &&
              (at(),
              it(kt[x], 1, 1, () => {
                kt[x] = null;
              }),
              ot(),
              (E = kt[j]),
              E || ((E = kt[j] = yt[j](t)), E.c()),
              lt(E, 1),
              E.m(P.parentNode, P));
          const v = {};
          2 & e && (v.$$scope = { dirty: e, ctx: t }), D.$set(v);
          const b = {};
          2 & e && (b.$$scope = { dirty: e, ctx: t }), R.$set(b);
          const y = {};
          2 & e && (y.$$scope = { dirty: e, ctx: t }), G.$set(y);
          const T = {};
          2 & e && (T.$$scope = { dirty: e, ctx: t }), U.$set(T);
          let M = Z;
          (Z = Lt(t)),
            Z !== M &&
              (at(),
              it(Mt[M], 1, 1, () => {
                Mt[M] = null;
              }),
              ot(),
              (X = Mt[Z]),
              X || ((X = Mt[Z] = Tt[Z](t)), X.c()),
              lt(X, 1),
              X.m(J.parentNode, J));
          const L = {};
          2 & e && (L.$$scope = { dirty: e, ctx: t }), tt.$set(L);
          const z = {};
          2 & e && (z.$$scope = { dirty: e, ctx: t }), nt.$set(z);
          let F = st;
          (st = Nt(t)),
            st !== F &&
              (at(),
              it(Ft[F], 1, 1, () => {
                Ft[F] = null;
              }),
              ot(),
              (ct = Ft[st]),
              ct || ((ct = Ft[st] = zt[st](t)), ct.c()),
              lt(ct, 1),
              ct.m(dt.parentNode, dt));
        },
        i(t) {
          ut ||
            (lt(pt),
            lt(o.$$.fragment, t),
            lt(c),
            lt(g.$$.fragment, t),
            lt(p.$$.fragment, t),
            lt(h.$$.fragment, t),
            lt(k),
            lt(H.$$.fragment, t),
            lt(_.$$.fragment, t),
            lt(E),
            lt(D.$$.fragment, t),
            lt(R.$$.fragment, t),
            lt(G.$$.fragment, t),
            lt(U.$$.fragment, t),
            lt(X),
            lt(tt.$$.fragment, t),
            lt(nt.$$.fragment, t),
            lt(ct),
            (ut = !0));
        },
        o(t) {
          it(pt),
            it(o.$$.fragment, t),
            it(c),
            it(g.$$.fragment, t),
            it(p.$$.fragment, t),
            it(h.$$.fragment, t),
            it(k),
            it(H.$$.fragment, t),
            it(_.$$.fragment, t),
            it(E),
            it(D.$$.fragment, t),
            it(R.$$.fragment, t),
            it(G.$$.fragment, t),
            it(U.$$.fragment, t),
            it(X),
            it(tt.$$.fragment, t),
            it(nt.$$.fragment, t),
            it(ct),
            (ut = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            pt && pt.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            $t(o, t),
            t && b(l),
            ht[i].d(t),
            t && b(d),
            t && b(u),
            t && b(f),
            $t(g, t),
            t && b($),
            $t(p, t),
            t && b(m),
            $t(h, t),
            t && b(x),
            bt[w].d(t),
            t && b(C),
            t && b(L),
            t && b(F),
            t && b(N),
            t && b(B),
            $t(H, t),
            t && b(S),
            $t(_, t),
            t && b(A),
            kt[j].d(t),
            t && b(P),
            t && b(O),
            t && b(I),
            $t(D, t),
            t && b(V),
            $t(R, t),
            t && b(q),
            $t(G, t),
            t && b(W),
            $t(U, t),
            t && b(Y),
            Mt[Z].d(t),
            t && b(J),
            t && b(K),
            t && b(Q),
            $t(tt, t),
            t && b(et),
            $t(nt, t),
            t && b(rt),
            Ft[st].d(t),
            t && b(dt);
        },
      }
    );
  }
  function cl(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  function dl(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [ul] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>type</td> \n        <td>&#39;accept&#39; | &#39;cancel&#39; | &#39;primary&#39; | &#39;secondary&#39;</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>color</td> \n        <td>EB Background color variable</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>colorHover</td> \n        <td>EB Background color variable</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>solid</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td></td></tr> \n      <tr><td>selectedId</td> \n        <td>Writable - number</td> \n        <td>0 (first button)</td> \n        <td>Can be set onMount</td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function ul(e) {
    let n;
    return {
      c() {
        n = C("import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function fl(t) {
    let e;
    return {
      c() {
        e = C('Button 1');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function gl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function $l(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function pl(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [fl] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [gl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [$l] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function ml(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [xl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function hl(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [vl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function xl(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="buttongroup">\n  <button class="button"></button>\n  <button class="button"></button>\n  <button class="button"></button>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function vl(e) {
    let n;
    return {
      c() {
        n = C(
          '<ButtonGroup bind:selectedId>\n  <Button></Button>\n  <Button></Button>\n  <Button></Button>\n</ButtonGroup>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function bl(t) {
    let e;
    return {
      c() {
        e = C('Primary');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function wl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function yl(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function kl(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [bl] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [wl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [yl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function Cl(t) {
    let e;
    return {
      c() {
        e = C('Secondary');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Tl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ml(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ll(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [Cl] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [Tl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [Ml] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function zl(t) {
    let e;
    return {
      c() {
        e = C('Accept');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Fl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Nl(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Bl(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [zl] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [Fl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [Nl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function Hl(t) {
    let e;
    return {
      c() {
        e = C('Cancel');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Sl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function _l(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Al(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [Hl] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [Sl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [_l] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function jl(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Pl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function El(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ol] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Pl(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="buttongroup buttongroup--primary">...</div>\n<div class="buttongroup buttongroup--secondary">...</div>\n<div class="buttongroup buttongroup--accept">...</div>\n<div class="buttongroup buttongroup--cancel">...</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ol(e) {
    let n;
    return {
      c() {
        n = C(
          '<ButtonGroup type="primary">...</ButtonGroup>\n<ButtonGroup type="secondary">...</ButtonGroup>\n<ButtonGroup type="accept">...</ButtonGroup>\n<ButtonGroup type="cancel">...</ButtonGroup>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Il(t) {
    let e;
    return {
      c() {
        e = C('Button 1');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Dl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Vl(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Rl(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [Il] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [Dl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [Vl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function ql(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Wl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Gl(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ul] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Wl(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="buttongroup" style="\n  --buttongroup-color: #8a0c36;\n  --buttongroup-fgcolor: #fff;\n  --buttongroup-color--hover: #8a0c36;\n  --buttongroup-fgcolor--hover: #fff;\n">...</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ul(e) {
    let n;
    return {
      c() {
        n = C('<ButtonGroup color="Bordeaux">...</ButtonGroup>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Yl(t) {
    let e;
    return {
      c() {
        e = C('Button 1');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Zl(t) {
    let e;
    return {
      c() {
        e = C('Button 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Xl(t) {
    let e;
    return {
      c() {
        e = C('Button 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Jl(t) {
    let e, n, r, s, a, o;
    return (
      (e = new Or({ props: { $$slots: { default: [Yl] }, $$scope: { ctx: t } } })),
      (r = new Or({ props: { $$slots: { default: [Zl] }, $$scope: { ctx: t } } })),
      (a = new Or({ props: { $$slots: { default: [Xl] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          16 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          16 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function Kl(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ti] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ql(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ei] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ti(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="buttongroup buttongroup--solid" style="\n  --buttongroup-color: #000;\n  --buttongroup-fgcolor: #fff;\n  --buttongroup-color--hover: #bd1118;\n  --buttongroup-fgcolor--hover: #fff;\n">...</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ei(e) {
    let n;
    return {
      c() {
        n = C('<ButtonGroup solid={true} color="Black" colorHover="Red">...</ButtonGroup>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ni(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      w,
      k,
      L,
      F,
      N,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      W,
      U,
      Y,
      Z,
      X,
      J,
      Q,
      tt,
      et = 'svelte' === t[1] && dl(t);
    function nt(e) {
      t[3](e);
    }
    let rt = { className: 'margin-l--b', $$slots: { default: [pl] }, $$scope: { ctx: t } };
    void 0 !== t[0] && (rt.selectedId = t[0]), (d = new _r({ props: rt })), G.push(() => ut(d, 'selectedId', nt));
    const st = [hl, ml],
      ct = [];
    function dt(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    (g = dt(t)),
      ($ = ct[g] = st[g](t)),
      (w = new _r({
        props: { type: 'primary', className: 'margin-m--b', $$slots: { default: [kl] }, $$scope: { ctx: t } },
      })),
      (L = new _r({
        props: { type: 'secondary', className: 'margin-m--b', $$slots: { default: [Ll] }, $$scope: { ctx: t } },
      })),
      (N = new _r({
        props: { type: 'accept', className: 'margin-m--b', $$slots: { default: [Bl] }, $$scope: { ctx: t } },
      })),
      (S = new _r({
        props: { type: 'cancel', className: 'margin-l--b', $$slots: { default: [Al] }, $$scope: { ctx: t } },
      }));
    const pt = [El, jl],
      mt = [];
    function ht(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    (A = ht(t)),
      (j = mt[A] = pt[A](t)),
      (I = new _r({
        props: { color: 'Bordeaux', className: 'margin-l--b', $$slots: { default: [Rl] }, $$scope: { ctx: t } },
      }));
    const xt = [Gl, ql],
      vt = [];
    function bt(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    (V = bt(t)),
      (R = vt[V] = xt[V](t)),
      (Y = new _r({
        props: {
          solid: !0,
          color: 'Black',
          colorHover: 'Red',
          className: 'margin-l--b',
          $$slots: { default: [Jl] },
          $$scope: { ctx: t },
        },
      }));
    const wt = [Ql, Kl],
      yt = [];
    function kt(t, e) {
      return 'svelte' === t[1] ? 0 : 1;
    }
    return (
      (X = kt(t)),
      (J = yt[X] = wt[X](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Button groups'),
            (n = T()),
            et && et.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Default'),
            (a = T()),
            (o = y('p')),
            (l = C('Button-index selected: ')),
            (i = C(t[2])),
            (c = T()),
            ft(d.$$.fragment),
            (f = T()),
            $.c(),
            (p = T()),
            (m = y('h3')),
            (m.textContent = 'Variations'),
            (h = T()),
            ft(w.$$.fragment),
            (k = T()),
            ft(L.$$.fragment),
            (F = T()),
            ft(N.$$.fragment),
            (H = T()),
            ft(S.$$.fragment),
            (_ = T()),
            j.c(),
            (E = T()),
            (P = y('h3')),
            (P.textContent = 'Farve muligheder fra eb-colors'),
            (O = T()),
            ft(I.$$.fragment),
            (D = T()),
            R.c(),
            (q = T()),
            (W = y('h3')),
            (W.textContent = 'Solid button group'),
            (U = T()),
            ft(Y.$$.fragment),
            (Z = T()),
            J.c(),
            (Q = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, u) {
          v(t, e, u),
            v(t, n, u),
            et && et.m(t, u),
            v(t, r, u),
            v(t, s, u),
            v(t, a, u),
            v(t, o, u),
            x(o, l),
            x(o, i),
            v(t, c, u),
            gt(d, t, u),
            v(t, f, u),
            ct[g].m(t, u),
            v(t, p, u),
            v(t, m, u),
            v(t, h, u),
            gt(w, t, u),
            v(t, k, u),
            gt(L, t, u),
            v(t, F, u),
            gt(N, t, u),
            v(t, H, u),
            gt(S, t, u),
            v(t, _, u),
            mt[A].m(t, u),
            v(t, E, u),
            v(t, P, u),
            v(t, O, u),
            gt(I, t, u),
            v(t, D, u),
            vt[V].m(t, u),
            v(t, q, u),
            v(t, W, u),
            v(t, U, u),
            gt(Y, t, u),
            v(t, Z, u),
            yt[X].m(t, u),
            v(t, Q, u),
            (tt = !0);
        },
        p(t, [e]) {
          'svelte' === t[1]
            ? et
              ? 2 & e && lt(et, 1)
              : ((et = dl(t)), et.c(), lt(et, 1), et.m(r.parentNode, r))
            : et &&
              (at(),
              it(et, 1, 1, () => {
                et = null;
              }),
              ot()),
            (!tt || 4 & e) && B(i, t[2]);
          const n = {};
          16 & e && (n.$$scope = { dirty: e, ctx: t }),
            !u && 1 & e && ((u = !0), (n.selectedId = t[0]), K(() => (u = !1))),
            d.$set(n);
          let s = g;
          (g = dt(t)),
            g !== s &&
              (at(),
              it(ct[s], 1, 1, () => {
                ct[s] = null;
              }),
              ot(),
              ($ = ct[g]),
              $ || (($ = ct[g] = st[g](t)), $.c()),
              lt($, 1),
              $.m(p.parentNode, p));
          const a = {};
          16 & e && (a.$$scope = { dirty: e, ctx: t }), w.$set(a);
          const o = {};
          16 & e && (o.$$scope = { dirty: e, ctx: t }), L.$set(o);
          const l = {};
          16 & e && (l.$$scope = { dirty: e, ctx: t }), N.$set(l);
          const c = {};
          16 & e && (c.$$scope = { dirty: e, ctx: t }), S.$set(c);
          let f = A;
          (A = ht(t)),
            A !== f &&
              (at(),
              it(mt[f], 1, 1, () => {
                mt[f] = null;
              }),
              ot(),
              (j = mt[A]),
              j || ((j = mt[A] = pt[A](t)), j.c()),
              lt(j, 1),
              j.m(E.parentNode, E));
          const m = {};
          16 & e && (m.$$scope = { dirty: e, ctx: t }), I.$set(m);
          let h = V;
          (V = bt(t)),
            V !== h &&
              (at(),
              it(vt[h], 1, 1, () => {
                vt[h] = null;
              }),
              ot(),
              (R = vt[V]),
              R || ((R = vt[V] = xt[V](t)), R.c()),
              lt(R, 1),
              R.m(q.parentNode, q));
          const x = {};
          16 & e && (x.$$scope = { dirty: e, ctx: t }), Y.$set(x);
          let v = X;
          (X = kt(t)),
            X !== v &&
              (at(),
              it(yt[v], 1, 1, () => {
                yt[v] = null;
              }),
              ot(),
              (J = yt[X]),
              J || ((J = yt[X] = wt[X](t)), J.c()),
              lt(J, 1),
              J.m(Q.parentNode, Q));
        },
        i(t) {
          tt ||
            (lt(et),
            lt(d.$$.fragment, t),
            lt($),
            lt(w.$$.fragment, t),
            lt(L.$$.fragment, t),
            lt(N.$$.fragment, t),
            lt(S.$$.fragment, t),
            lt(j),
            lt(I.$$.fragment, t),
            lt(R),
            lt(Y.$$.fragment, t),
            lt(J),
            (tt = !0));
        },
        o(t) {
          it(et),
            it(d.$$.fragment, t),
            it($),
            it(w.$$.fragment, t),
            it(L.$$.fragment, t),
            it(N.$$.fragment, t),
            it(S.$$.fragment, t),
            it(j),
            it(I.$$.fragment, t),
            it(R),
            it(Y.$$.fragment, t),
            it(J),
            (tt = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            et && et.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            t && b(o),
            t && b(c),
            $t(d, t),
            t && b(f),
            ct[g].d(t),
            t && b(p),
            t && b(m),
            t && b(h),
            $t(w, t),
            t && b(k),
            $t(L, t),
            t && b(F),
            $t(N, t),
            t && b(H),
            $t(S, t),
            t && b(_),
            mt[A].d(t),
            t && b(E),
            t && b(P),
            t && b(O),
            $t(I, t),
            t && b(D),
            vt[V].d(t),
            t && b(q),
            t && b(W),
            t && b(U),
            $t(Y, t),
            t && b(Z),
            yt[X].d(t),
            t && b(Q);
        },
      }
    );
  }
  function ri(e, n, r) {
    let s,
      a,
      o,
      l = t;
    return (
      u(e, ja, (t) => r(1, (s = t))),
      e.$$.on_destroy.push(() => l()),
      [
        o,
        s,
        a,
        function (t) {
          (o = t), r(0, o), l(), (l = d(o, (t) => r(2, (a = t))));
        },
      ]
    );
  }
  function si(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [ai] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td>Card specific classes: card--small-media &amp; card--small-media--reverse</td></tr> \n      <tr><td>url</td> \n        <td>string</td> \n        <td></td> \n        <td>Converts the Card into a clickable link</td></tr> \n      <tr><td>style</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>theme</td> \n        <td>&#39;darkmode&#39; | &#39;lightmode&#39;</td> \n        <td></td> \n        <td>See <a href="/#/utilities/datatheme">Data Theme</a> for doc</td></tr> \n      <tr></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function ai(e) {
    let n;
    return {
      c() {
        n = C("import { Card } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function oi(t) {
    let e;
    return {
      c() {
        (e = y('div')), (e.textContent = 'Header'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function li(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML = '<img src="https://loremflickr.com/1280/400/cat" alt=""/>'),
          z(e, 'slot', 'media');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function ii(t) {
    let e;
    return {
      c() {
        (e = y('div')), (e.textContent = 'Content'), z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function ci(t) {
    let e;
    return {
      c() {
        (e = y('div')), (e.textContent = 'Footer'), z(e, 'slot', 'footer');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function di(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [fi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ui(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [gi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function fi(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="card">\n  <div class="card-header"></div>\n  <div class="card-media">\n    <img src="" alt="">\n  </div>\n  <div class="card-content"></div>\n  <div class="card-footer"></div>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function gi(e) {
    let n;
    return {
      c() {
        n = C(
          '<Card>\n  <div slot="header"></div>\n  <div slot="media">\n    <img src="" alt="" />\n  </div>\n  <div slot="content"></div>\n  <div slot="footer"></div>\n</Card>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function $i(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML = '<img src="https://loremflickr.com/250/120/dog" alt=""/>'),
          z(e, 'slot', 'media');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function pi(t) {
    let e;
    return {
      c() {
        (e = y('div')), (e.textContent = 'Content'), z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function mi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [xi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function hi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [vi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function xi(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="card card--small-media">\n  <div class="card-media">\n    <img src="" alt="" />\n  </div>\n  <div class="card-content"></div>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function vi(e) {
    let n;
    return {
      c() {
        n = C(
          '<Card className="card--small-media">\n  <div slot="media">\n    <img src="" alt="" />\n  </div>\n  <div slot="content"></div>\n</Card>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function bi(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      w = 'svelte' === t[0] && si(t);
    o = new fe({
      props: {
        className: 'margin-l--b',
        $$slots: { footer: [ci], content: [ii], media: [li], header: [oi] },
        $$scope: { ctx: t },
      },
    });
    const k = [ui, di],
      C = [];
    function L(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (i = L(t)),
      (c = C[i] = k[i](t)),
      (g = new fe({
        props: {
          className: 'card--small-media margin-l--b',
          $$slots: { content: [pi], media: [$i] },
          $$scope: { ctx: t },
        },
      }));
    const F = [hi, mi],
      N = [];
    function B(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (p = B(t)),
      (m = N[p] = F[p](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Card'),
            (n = T()),
            w && w.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Card slots'),
            (a = T()),
            ft(o.$$.fragment),
            (l = T()),
            c.c(),
            (d = T()),
            (u = y('h3')),
            (u.textContent = 'Small media card'),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            m.c(),
            (h = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, c) {
          v(t, e, c),
            v(t, n, c),
            w && w.m(t, c),
            v(t, r, c),
            v(t, s, c),
            v(t, a, c),
            gt(o, t, c),
            v(t, l, c),
            C[i].m(t, c),
            v(t, d, c),
            v(t, u, c),
            v(t, f, c),
            gt(g, t, c),
            v(t, $, c),
            N[p].m(t, c),
            v(t, h, c),
            (x = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? w
              ? 1 & e && lt(w, 1)
              : ((w = si(t)), w.c(), lt(w, 1), w.m(r.parentNode, r))
            : w &&
              (at(),
              it(w, 1, 1, () => {
                w = null;
              }),
              ot());
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n);
          let s = i;
          (i = L(t)),
            i !== s &&
              (at(),
              it(C[s], 1, 1, () => {
                C[s] = null;
              }),
              ot(),
              (c = C[i]),
              c || ((c = C[i] = k[i](t)), c.c()),
              lt(c, 1),
              c.m(d.parentNode, d));
          const a = {};
          2 & e && (a.$$scope = { dirty: e, ctx: t }), g.$set(a);
          let l = p;
          (p = B(t)),
            p !== l &&
              (at(),
              it(N[l], 1, 1, () => {
                N[l] = null;
              }),
              ot(),
              (m = N[p]),
              m || ((m = N[p] = F[p](t)), m.c()),
              lt(m, 1),
              m.m(h.parentNode, h));
        },
        i(t) {
          x || (lt(w), lt(o.$$.fragment, t), lt(c), lt(g.$$.fragment, t), lt(m), (x = !0));
        },
        o(t) {
          it(w), it(o.$$.fragment, t), it(c), it(g.$$.fragment, t), it(m), (x = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            w && w.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            $t(o, t),
            t && b(l),
            C[i].d(t),
            t && b(d),
            t && b(u),
            t && b(f),
            $t(g, t),
            t && b($),
            N[p].d(t),
            t && b(h);
        },
      }
    );
  }
  function wi(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  function yi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [ki] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ki(e) {
    let n;
    return {
      c() {
        n = C("import { FormElement } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ci(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Mi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ti(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Li] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Mi(e) {
    let n;
    return {
      c() {
        n = C('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Li(e) {
    let n;
    return {
      c() {
        n = C(
          '<FormElement inputtype="text" size="small" label="" />\n<FormElement inputtype="text" label="" />\n<FormElement inputtype="text" size="large" label="" />'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function zi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ni] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Fi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Bi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ni(e) {
    let n;
    return {
      c() {
        n = C('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Bi(e) {
    let n;
    return {
      c() {
        n = C('<FormElement inputtype="number" label="" />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Hi(t) {
    let e, n, r;
    return {
      c() {
        (e = y('option')),
          (e.textContent = 'Option 1'),
          (n = T()),
          (r = y('option')),
          (r.textContent = 'Option 2'),
          (e.__value = 'option1'),
          (e.value = e.__value),
          (r.__value = 'option2'),
          (r.value = r.__value);
      },
      m(t, s) {
        v(t, e, s), v(t, n, s), v(t, r, s);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r);
      },
    };
  }
  function Si(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ai] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function _i(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ji] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ai(e) {
    let n;
    return {
      c() {
        n = C('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ji(e) {
    let n;
    return {
      c() {
        n = C(
          '<FormElement inputtype="select" label="">\n  <option value="option1"></option>\n  <option value="option2"></option>\n</FormElement>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ei(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Oi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Pi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ii] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Oi(e) {
    let n;
    return {
      c() {
        n = C('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ii(e) {
    let n;
    return {
      c() {
        n = C(
          '<FormElement inputtype="checkbox" label="" />\n<FormElement inputtype="radio" label="" bind:group={group} value={1} />'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Di(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ri] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Vi(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [qi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ri(e) {
    let n;
    return {
      c() {
        n = C('FormElement er ikke blevet opdateret til HTML endnu');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function qi(e) {
    let n;
    return {
      c() {
        n = C('<FormElement inputtype="textarea" label="" />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Gi(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      w,
      k,
      C,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      G,
      W,
      U,
      Y,
      Z,
      X,
      J,
      K = 'svelte' === t[0] && yi(t);
    (o = new as({ props: { inputtype: 'text', size: 'small', label: 'input size small' } })),
      (i = new as({ props: { inputtype: 'text', label: 'input size medium (standard)' } })),
      (d = new as({ props: { inputtype: 'text', size: 'large', label: 'input size large' } }));
    const Q = [Ti, Ci],
      tt = [];
    function et(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (f = et(t)),
      (g = tt[f] = Q[f](t)),
      (h = new as({ props: { inputtype: 'number', label: 'Noget tal indhold her' } }));
    const nt = [Fi, zi],
      rt = [];
    function st(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (w = st(t)),
      (k = rt[w] = nt[w](t)),
      (N = new as({
        props: { inputtype: 'select', label: 'Select', $$slots: { default: [Hi] }, $$scope: { ctx: t } },
      }));
    const ct = [_i, Si],
      dt = [];
    function ut(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (H = ut(t)),
      (S = dt[H] = ct[H](t)),
      (E = new as({ props: { inputtype: 'checkbox', label: 'Checkox' } })),
      (O = new as({ props: { inputtype: 'radio', label: 'Radio', value: 1 } }));
    const pt = [Pi, Ei],
      mt = [];
    function ht(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (D = ht(t)), (V = mt[D] = pt[D](t)), (W = new as({ props: { inputtype: 'textarea', label: 'Textarea' } }));
    const xt = [Vi, Di],
      vt = [];
    function bt(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (Y = bt(t)),
      (Z = vt[Y] = xt[Y](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Form Element'),
            (n = T()),
            K && K.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Text input'),
            (a = T()),
            ft(o.$$.fragment),
            (l = T()),
            ft(i.$$.fragment),
            (c = T()),
            ft(d.$$.fragment),
            (u = T()),
            g.c(),
            ($ = T()),
            (p = y('h3')),
            (p.textContent = 'Number input'),
            (m = T()),
            ft(h.$$.fragment),
            (x = T()),
            k.c(),
            (C = T()),
            (L = y('h3')),
            (L.textContent = 'Select'),
            (F = T()),
            ft(N.$$.fragment),
            (B = T()),
            S.c(),
            (_ = T()),
            (A = y('h3')),
            (A.textContent = 'Checkbox and radio'),
            (j = T()),
            ft(E.$$.fragment),
            (P = T()),
            ft(O.$$.fragment),
            (I = T()),
            V.c(),
            (R = T()),
            (q = y('h3')),
            (q.textContent = 'Textarea'),
            (G = T()),
            ft(W.$$.fragment),
            (U = T()),
            Z.c(),
            (X = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, g) {
          v(t, e, g),
            v(t, n, g),
            K && K.m(t, g),
            v(t, r, g),
            v(t, s, g),
            v(t, a, g),
            gt(o, t, g),
            v(t, l, g),
            gt(i, t, g),
            v(t, c, g),
            gt(d, t, g),
            v(t, u, g),
            tt[f].m(t, g),
            v(t, $, g),
            v(t, p, g),
            v(t, m, g),
            gt(h, t, g),
            v(t, x, g),
            rt[w].m(t, g),
            v(t, C, g),
            v(t, L, g),
            v(t, F, g),
            gt(N, t, g),
            v(t, B, g),
            dt[H].m(t, g),
            v(t, _, g),
            v(t, A, g),
            v(t, j, g),
            gt(E, t, g),
            v(t, P, g),
            gt(O, t, g),
            v(t, I, g),
            mt[D].m(t, g),
            v(t, R, g),
            v(t, q, g),
            v(t, G, g),
            gt(W, t, g),
            v(t, U, g),
            vt[Y].m(t, g),
            v(t, X, g),
            (J = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? K
              ? 1 & e && lt(K, 1)
              : ((K = yi(t)), K.c(), lt(K, 1), K.m(r.parentNode, r))
            : K &&
              (at(),
              it(K, 1, 1, () => {
                K = null;
              }),
              ot());
          let n = f;
          (f = et(t)),
            f !== n &&
              (at(),
              it(tt[n], 1, 1, () => {
                tt[n] = null;
              }),
              ot(),
              (g = tt[f]),
              g || ((g = tt[f] = Q[f](t)), g.c()),
              lt(g, 1),
              g.m($.parentNode, $));
          let s = w;
          (w = st(t)),
            w !== s &&
              (at(),
              it(rt[s], 1, 1, () => {
                rt[s] = null;
              }),
              ot(),
              (k = rt[w]),
              k || ((k = rt[w] = nt[w](t)), k.c()),
              lt(k, 1),
              k.m(C.parentNode, C));
          const a = {};
          2 & e && (a.$$scope = { dirty: e, ctx: t }), N.$set(a);
          let o = H;
          (H = ut(t)),
            H !== o &&
              (at(),
              it(dt[o], 1, 1, () => {
                dt[o] = null;
              }),
              ot(),
              (S = dt[H]),
              S || ((S = dt[H] = ct[H](t)), S.c()),
              lt(S, 1),
              S.m(_.parentNode, _));
          let l = D;
          (D = ht(t)),
            D !== l &&
              (at(),
              it(mt[l], 1, 1, () => {
                mt[l] = null;
              }),
              ot(),
              (V = mt[D]),
              V || ((V = mt[D] = pt[D](t)), V.c()),
              lt(V, 1),
              V.m(R.parentNode, R));
          let i = Y;
          (Y = bt(t)),
            Y !== i &&
              (at(),
              it(vt[i], 1, 1, () => {
                vt[i] = null;
              }),
              ot(),
              (Z = vt[Y]),
              Z || ((Z = vt[Y] = xt[Y](t)), Z.c()),
              lt(Z, 1),
              Z.m(X.parentNode, X));
        },
        i(t) {
          J ||
            (lt(K),
            lt(o.$$.fragment, t),
            lt(i.$$.fragment, t),
            lt(d.$$.fragment, t),
            lt(g),
            lt(h.$$.fragment, t),
            lt(k),
            lt(N.$$.fragment, t),
            lt(S),
            lt(E.$$.fragment, t),
            lt(O.$$.fragment, t),
            lt(V),
            lt(W.$$.fragment, t),
            lt(Z),
            (J = !0));
        },
        o(t) {
          it(K),
            it(o.$$.fragment, t),
            it(i.$$.fragment, t),
            it(d.$$.fragment, t),
            it(g),
            it(h.$$.fragment, t),
            it(k),
            it(N.$$.fragment, t),
            it(S),
            it(E.$$.fragment, t),
            it(O.$$.fragment, t),
            it(V),
            it(W.$$.fragment, t),
            it(Z),
            (J = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            K && K.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            $t(o, t),
            t && b(l),
            $t(i, t),
            t && b(c),
            $t(d, t),
            t && b(u),
            tt[f].d(t),
            t && b($),
            t && b(p),
            t && b(m),
            $t(h, t),
            t && b(x),
            rt[w].d(t),
            t && b(C),
            t && b(L),
            t && b(F),
            $t(N, t),
            t && b(B),
            dt[H].d(t),
            t && b(_),
            t && b(A),
            t && b(j),
            $t(E, t),
            t && b(P),
            $t(O, t),
            t && b(I),
            mt[D].d(t),
            t && b(R),
            t && b(q),
            t && b(G),
            $t(W, t),
            t && b(U),
            vt[Y].d(t),
            t && b(X);
        },
      }
    );
  }
  function Wi(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  const Ui = [
      'angledown',
      'angleleft',
      'angleright',
      'angleup',
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
      'lightning',
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
    ],
    Yi = ['ebupdate', 'ekstrabladet'];
  function Zi(t, e, n) {
    const r = t.slice();
    return (r[1] = e[n]), r;
  }
  function Xi(t, e, n) {
    const r = t.slice();
    return (r[1] = e[n]), r;
  }
  function Ji(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, w, k, M, L, F, N, B, H, S, _;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [Ki] }, $$scope: { ctx: t } } })),
      (f = new Fr({ props: { type: 'primary', extension: 'small', $$slots: { default: [Qi] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (s = y('thead')),
            (s.innerHTML =
              '<tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr>'),
            (a = T()),
            (o = y('tbody')),
            (l = y('tr')),
            (l.innerHTML =
              '<td>className</td> \n        <td>string</td> \n        <td></td> \n        <td>Used to select icon if type is set to &#39;fa&#39;</td>'),
            (i = T()),
            (c = y('tr')),
            (d = y('td')),
            (u = C('name ')),
            ft(f.$$.fragment),
            (g = T()),
            ($ = y('td')),
            ($.textContent = 'IconTypes'),
            (p = T()),
            (m = y('td')),
            (h = T()),
            (w = y('td')),
            (w.textContent = 'Only names listed beneath are valid'),
            (k = T()),
            (M = y('tr')),
            (M.innerHTML =
              '<td>flipped</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Flip the icon horizontally</td>'),
            (L = T()),
            (F = y('tr')),
            (F.innerHTML =
              '<td>type</td> \n        <td>&#39;svg&#39; | &#39;fa&#39;</td> \n        <td>svg</td> \n        <td>Use EB svg icons or FontAwesome icons</td>'),
            (N = T()),
            (B = y('tr')),
            (B.innerHTML =
              '<td>width</td> \n        <td>number</td> \n        <td>36</td> \n        <td>The widthof the icon in pixels. Only on &#39;svg&#39; mode</td>'),
            (H = T()),
            (S = y('tr')),
            (S.innerHTML =
              '<td>style</td> \n        <td>string</td> \n        <td></td> \n        <td>Custom styling. Only on &#39;svg&#39; mode</td>'),
            z(r, 'class', 'table');
        },
        m(t, b) {
          gt(e, t, b),
            v(t, n, b),
            v(t, r, b),
            x(r, s),
            x(r, a),
            x(r, o),
            x(o, l),
            x(o, i),
            x(o, c),
            x(c, d),
            x(d, u),
            gt(f, d, null),
            x(c, g),
            x(c, $),
            x(c, p),
            x(c, m),
            x(c, h),
            x(c, w),
            x(o, k),
            x(o, M),
            x(o, L),
            x(o, F),
            x(o, N),
            x(o, B),
            x(o, H),
            x(o, S),
            (_ = !0);
        },
        i(t) {
          _ || (lt(e.$$.fragment, t), lt(f.$$.fragment, t), (_ = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(f.$$.fragment, t), (_ = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r), $t(f);
        },
      }
    );
  }
  function Ki(e) {
    let n;
    return {
      c() {
        n = C("import { Icon } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Qi(t) {
    let e;
    return {
      c() {
        e = C('required');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function tc(e) {
    let n,
      r,
      s,
      a,
      o,
      l,
      i = e[1] + '';
    return (
      (n = new Gn({ props: { name: e[1], className: 'margin-s', style: 'width: 36px; height: 36px;' } })),
      {
        c() {
          ft(n.$$.fragment), (r = T()), (s = y('small')), (a = C(i)), (o = T());
        },
        m(t, e) {
          gt(n, t, e), v(t, r, e), v(t, s, e), x(s, a), v(t, o, e), (l = !0);
        },
        p: t,
        i(t) {
          l || (lt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          $t(n, t), t && b(r), t && b(s), t && b(o);
        },
      }
    );
  }
  function ec(t) {
    let e, n;
    return (
      (e = new fe({
        props: {
          className: 'flex-align--center flex-justify--center margin-s padding-m',
          $$slots: { default: [tc] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          64 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function nc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [sc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function rc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ac] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function sc(e) {
    let n;
    return {
      c() {
        n = C(
          '<svg viewBox="0 0 50 50">\n  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>\n</svg>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ac(e) {
    let n;
    return {
      c() {
        n = C('<Icon name="icon_name" />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function oc(e) {
    let n,
      r,
      s,
      a,
      o,
      l,
      i = e[1] + '';
    return (
      (n = new Gn({ props: { name: e[1], className: 'margin-s', style: 'width: 36px; height: 36px;' } })),
      {
        c() {
          ft(n.$$.fragment), (r = T()), (s = y('small')), (a = C(i)), (o = T());
        },
        m(t, e) {
          gt(n, t, e), v(t, r, e), v(t, s, e), x(s, a), v(t, o, e), (l = !0);
        },
        p: t,
        i(t) {
          l || (lt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          $t(n, t), t && b(r), t && b(s), t && b(o);
        },
      }
    );
  }
  function lc(t) {
    let e, n;
    return (
      (e = new fe({
        props: {
          className: 'flex-align--center flex-justify--center margin-s padding-m',
          $$slots: { default: [oc] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          64 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ic(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [dc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function cc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [uc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function dc(e) {
    let n;
    return {
      c() {
        n = C(
          '<svg viewBox="0 0 50 50">\n  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>\n</svg>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function uc(e) {
    let n;
    return {
      c() {
        n = C('<Icon name="icon_name" />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function fc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [$c] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function gc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [pc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function $c(e) {
    let n;
    return {
      c() {
        n = C('<i class="fas fa-snowplow"></i>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function pc(e) {
    let n;
    return {
      c() {
        n = C('<Icon type="fa" className="fas fa-snowplow" />');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function mc(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      k,
      C,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E = 'svelte' === t[0] && Ji(t),
      P = Ui,
      O = [];
    for (let e = 0; e < P.length; e += 1) O[e] = ec(Xi(t, P, e));
    const I = (t) =>
        it(O[t], 1, 1, () => {
          O[t] = null;
        }),
      D = [rc, nc],
      V = [];
    function R(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (d = R(t)), (u = V[d] = D[d](t));
    let q = Yi,
      G = [];
    for (let e = 0; e < q.length; e += 1) G[e] = lc(Zi(t, q, e));
    const W = (t) =>
        it(G[t], 1, 1, () => {
          G[t] = null;
        }),
      U = [cc, ic],
      Y = [];
    function Z(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (k = Z(t)), (C = Y[k] = U[k](t)), (B = new Gn({ props: { type: 'fa', className: 'fas fa-snowplow' } }));
    const X = [gc, fc],
      J = [];
    function K(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (S = K(t)),
      (_ = J[S] = X[S](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Icon library'),
            (n = T()),
            E && E.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Icons'),
            (a = T()),
            (o = y('p')),
            (o.textContent =
              'Icons are simple and dynamic only made with fill. Fill has the value currentColor and makes it possible to add the desired color to the icon.'),
            (l = T()),
            (i = y('div'));
          for (let t = 0; t < O.length; t += 1) O[t].c();
          (c = T()),
            u.c(),
            (f = T()),
            (g = y('h3')),
            (g.textContent = 'Graphics'),
            ($ = T()),
            (p = y('p')),
            (p.textContent = 'Graphics are capable of containing more layers i.e static colors on stroke and fill.'),
            (m = T()),
            (h = y('div'));
          for (let t = 0; t < G.length; t += 1) G[t].c();
          (x = T()),
            C.c(),
            (L = T()),
            (F = y('h3')),
            (F.innerHTML = '<a href="https://fontawesome.com/" target="_blank">Font Awesome</a> icons'),
            (N = T()),
            ft(B.$$.fragment),
            (H = T()),
            _.c(),
            (A = M()),
            z(e, 'class', 'color--eb'),
            z(i, 'class', 'flex flex-wrap--wrap'),
            z(h, 'class', 'flex flex-wrap--wrap');
        },
        m(t, u) {
          v(t, e, u),
            v(t, n, u),
            E && E.m(t, u),
            v(t, r, u),
            v(t, s, u),
            v(t, a, u),
            v(t, o, u),
            v(t, l, u),
            v(t, i, u);
          for (let t = 0; t < O.length; t += 1) O[t].m(i, null);
          v(t, c, u), V[d].m(t, u), v(t, f, u), v(t, g, u), v(t, $, u), v(t, p, u), v(t, m, u), v(t, h, u);
          for (let t = 0; t < G.length; t += 1) G[t].m(h, null);
          v(t, x, u),
            Y[k].m(t, u),
            v(t, L, u),
            v(t, F, u),
            v(t, N, u),
            gt(B, t, u),
            v(t, H, u),
            J[S].m(t, u),
            v(t, A, u),
            (j = !0);
        },
        p(t, [e]) {
          if (
            ('svelte' === t[0]
              ? E
                ? 1 & e && lt(E, 1)
                : ((E = Ji(t)), E.c(), lt(E, 1), E.m(r.parentNode, r))
              : E &&
                (at(),
                it(E, 1, 1, () => {
                  E = null;
                }),
                ot()),
            0 & e)
          ) {
            let n;
            for (P = Ui, n = 0; n < P.length; n += 1) {
              const r = Xi(t, P, n);
              O[n] ? (O[n].p(r, e), lt(O[n], 1)) : ((O[n] = ec(r)), O[n].c(), lt(O[n], 1), O[n].m(i, null));
            }
            for (at(), n = P.length; n < O.length; n += 1) I(n);
            ot();
          }
          let n = d;
          if (
            ((d = R(t)),
            d !== n &&
              (at(),
              it(V[n], 1, 1, () => {
                V[n] = null;
              }),
              ot(),
              (u = V[d]),
              u || ((u = V[d] = D[d](t)), u.c()),
              lt(u, 1),
              u.m(f.parentNode, f)),
            0 & e)
          ) {
            let n;
            for (q = Yi, n = 0; n < q.length; n += 1) {
              const r = Zi(t, q, n);
              G[n] ? (G[n].p(r, e), lt(G[n], 1)) : ((G[n] = lc(r)), G[n].c(), lt(G[n], 1), G[n].m(h, null));
            }
            for (at(), n = q.length; n < G.length; n += 1) W(n);
            ot();
          }
          let s = k;
          (k = Z(t)),
            k !== s &&
              (at(),
              it(Y[s], 1, 1, () => {
                Y[s] = null;
              }),
              ot(),
              (C = Y[k]),
              C || ((C = Y[k] = U[k](t)), C.c()),
              lt(C, 1),
              C.m(L.parentNode, L));
          let a = S;
          (S = K(t)),
            S !== a &&
              (at(),
              it(J[a], 1, 1, () => {
                J[a] = null;
              }),
              ot(),
              (_ = J[S]),
              _ || ((_ = J[S] = X[S](t)), _.c()),
              lt(_, 1),
              _.m(A.parentNode, A));
        },
        i(t) {
          if (!j) {
            lt(E);
            for (let t = 0; t < P.length; t += 1) lt(O[t]);
            lt(u);
            for (let t = 0; t < q.length; t += 1) lt(G[t]);
            lt(C), lt(B.$$.fragment, t), lt(_), (j = !0);
          }
        },
        o(t) {
          it(E), (O = O.filter(Boolean));
          for (let t = 0; t < O.length; t += 1) it(O[t]);
          it(u), (G = G.filter(Boolean));
          for (let t = 0; t < G.length; t += 1) it(G[t]);
          it(C), it(B.$$.fragment, t), it(_), (j = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            E && E.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            t && b(o),
            t && b(l),
            t && b(i),
            w(O, t),
            t && b(c),
            V[d].d(t),
            t && b(f),
            t && b(g),
            t && b($),
            t && b(p),
            t && b(m),
            t && b(h),
            w(G, t),
            t && b(x),
            Y[k].d(t),
            t && b(L),
            t && b(F),
            t && b(N),
            $t(B, t),
            t && b(H),
            J[S].d(t),
            t && b(A);
        },
      }
    );
  }
  function hc(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  function xc(t, e, n) {
    const r = t.slice();
    return (r[3] = e[n]), r;
  }
  function vc(t) {
    let e, n, r, s;
    return (
      (r = new Us({ props: { language: 'html', $$slots: { default: [wc] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('p')),
            (e.textContent = 'HorizontalScroll kræver javascript som findes under list-v2 på eb'),
            (n = T()),
            ft(r.$$.fragment);
        },
        m(t, a) {
          v(t, e, a), v(t, n, a), gt(r, t, a), (s = !0);
        },
        i(t) {
          s || (lt(r.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(r.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && b(e), t && b(n), $t(r, t);
        },
      }
    );
  }
  function bc(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [yc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function wc(e) {
    let n;
    return {
      c() {
        n = C(
          'ekstrabladet/ekstrabladet-publication/src/main/webapp/WEB-INF/jsp/components/list-v2/horizontalscroll.ts'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function yc(e) {
    let n;
    return {
      c() {
        n = C("import { HorizontalScroll } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function kc(t) {
    let n, r;
    const s = [t[3], { className: 'margin-s' }, { style: 'width: 215px;' }];
    let a = {};
    for (let t = 0; t < s.length; t += 1) a = e(a, s[t]);
    return (
      (n = new Cr({ props: a })),
      {
        c() {
          ft(n.$$.fragment);
        },
        m(t, e) {
          gt(n, t, e), (r = !0);
        },
        p(t, e) {
          const r = 2 & e ? ct(s, [dt(t[3]), s[1], s[2]]) : {};
          n.$set(r);
        },
        i(t) {
          r || (lt(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          it(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          $t(n, t);
        },
      }
    );
  }
  function Cc(t) {
    let e,
      n,
      r = t[1],
      s = [];
    for (let e = 0; e < r.length; e += 1) s[e] = kc(xc(t, r, e));
    const a = (t) =>
      it(s[t], 1, 1, () => {
        s[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < s.length; t += 1) s[t].c();
        e = M();
      },
      m(t, r) {
        for (let e = 0; e < s.length; e += 1) s[e].m(t, r);
        v(t, e, r), (n = !0);
      },
      p(t, n) {
        if (2 & n) {
          let o;
          for (r = t[1], o = 0; o < r.length; o += 1) {
            const a = xc(t, r, o);
            s[o] ? (s[o].p(a, n), lt(s[o], 1)) : ((s[o] = kc(a)), s[o].c(), lt(s[o], 1), s[o].m(e.parentNode, e));
          }
          for (at(), o = r.length; o < s.length; o += 1) a(o);
          ot();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < r.length; t += 1) lt(s[t]);
          n = !0;
        }
      },
      o(t) {
        s = s.filter(Boolean);
        for (let t = 0; t < s.length; t += 1) it(s[t]);
        n = !1;
      },
      d(t) {
        w(s, t), t && b(e);
      },
    };
  }
  function Tc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Lc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Mc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [zc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Lc(e) {
    let n;
    return {
      c() {
        n = C(
          '<div id="example-id" class="horizontal-scroll-container position-relative">\n  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">\n    <i class="fa fa-chevron-left"></i>\n  </button>\n  <button data-horizontallist="button-next" class="horizontal-scroll-nav">\n    <i class="fa fa-chevron-right"></i>\n  </button>\n  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">\n    ...\n  </div>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function zc(e) {
    let n;
    return {
      c() {
        n = C('<HorizontalScroll>\n  ...\n</HorizontalScroll>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Fc(t) {
    let e, n, r, s, a, o, l, i, c, d, u;
    const f = [bc, vc],
      g = [];
    function $(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (r = $(t)), (s = g[r] = f[r](t)), (o = new ds({ props: { $$slots: { default: [Cc] }, $$scope: { ctx: t } } }));
    const p = [Mc, Tc],
      m = [];
    function h(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (i = h(t)),
      (c = m[i] = p[i](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Horizontal Scroll'),
            (n = T()),
            s.c(),
            (a = T()),
            ft(o.$$.fragment),
            (l = T()),
            c.c(),
            (d = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, s) {
          v(t, e, s), v(t, n, s), g[r].m(t, s), v(t, a, s), gt(o, t, s), v(t, l, s), m[i].m(t, s), v(t, d, s), (u = !0);
        },
        p(t, [e]) {
          let n = r;
          (r = $(t)),
            r !== n &&
              (at(),
              it(g[n], 1, 1, () => {
                g[n] = null;
              }),
              ot(),
              (s = g[r]),
              s || ((s = g[r] = f[r](t)), s.c()),
              lt(s, 1),
              s.m(a.parentNode, a));
          const l = {};
          66 & e && (l.$$scope = { dirty: e, ctx: t }), o.$set(l);
          let u = i;
          (i = h(t)),
            i !== u &&
              (at(),
              it(m[u], 1, 1, () => {
                m[u] = null;
              }),
              ot(),
              (c = m[i]),
              c || ((c = m[i] = p[i](t)), c.c()),
              lt(c, 1),
              c.m(d.parentNode, d));
        },
        i(t) {
          u || (lt(s), lt(o.$$.fragment, t), lt(c), (u = !0));
        },
        o(t) {
          it(s), it(o.$$.fragment, t), it(c), (u = !1);
        },
        d(t) {
          t && b(e), t && b(n), g[r].d(t), t && b(a), $t(o, t), t && b(l), m[i].d(t), t && b(d);
        },
      }
    );
  }
  function Nc(t, e, n) {
    let r, s;
    u(t, ja, (t) => n(0, (r = t)));
    let a = vt([]);
    return (
      u(t, a, (t) => n(1, (s = t))),
      a.update((t) => {
        for (let e = 0; e < 2; e++) t.push(_a(640, 360));
        return t;
      }),
      setInterval(() => {
        a.update((t) => (t.push(_a(640, 360)), t));
      }, 3e3),
      [r, s, a]
    );
  }
  function Bc(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [Hc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>isLoading</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Will only show if set to &#39;true&#39;</td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function Hc(e) {
    let n;
    return {
      c() {
        n = C("import { Spinner } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Sc(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Ac] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function _c(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [jc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ac(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="loader flex flex--center">\n  <i class="fas fa-circle bounce bounce1" />\n  <i class="fas fa-circle bounce bounce2" />\n  <i class="fas fa-circle bounce bounce3" />\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function jc(e) {
    let n;
    return {
      c() {
        n = C('<Spinner isLoading={true}/>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ec(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u = 'svelte' === t[0] && Bc(t);
    a = new $s({ props: { isLoading: !0 } });
    const f = [_c, Sc],
      g = [];
    function $(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (l = $(t)),
      (i = g[l] = f[l](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Spinner'),
            (n = T()),
            u && u.c(),
            (r = T()),
            (s = y('div')),
            ft(a.$$.fragment),
            (o = T()),
            i.c(),
            (c = M()),
            z(e, 'class', 'color--eb'),
            z(s, 'class', 'padding-l');
        },
        m(t, i) {
          v(t, e, i),
            v(t, n, i),
            u && u.m(t, i),
            v(t, r, i),
            v(t, s, i),
            gt(a, s, null),
            v(t, o, i),
            g[l].m(t, i),
            v(t, c, i),
            (d = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? u
              ? 1 & e && lt(u, 1)
              : ((u = Bc(t)), u.c(), lt(u, 1), u.m(r.parentNode, r))
            : u &&
              (at(),
              it(u, 1, 1, () => {
                u = null;
              }),
              ot());
          let n = l;
          (l = $(t)),
            l !== n &&
              (at(),
              it(g[n], 1, 1, () => {
                g[n] = null;
              }),
              ot(),
              (i = g[l]),
              i || ((i = g[l] = f[l](t)), i.c()),
              lt(i, 1),
              i.m(c.parentNode, c));
        },
        i(t) {
          d || (lt(u), lt(a.$$.fragment, t), lt(i), (d = !0));
        },
        o(t) {
          it(u), it(a.$$.fragment, t), it(i), (d = !1);
        },
        d(t) {
          t && b(e), t && b(n), u && u.d(t), t && b(r), t && b(s), $t(a), t && b(o), g[l].d(t), t && b(c);
        },
      }
    );
  }
  function Pc(t, e, n) {
    let r;
    return u(t, ja, (t) => n(0, (r = t))), [r];
  }
  function Oc(e) {
    let n;
    return {
      c() {
        (n = y('p')), (n.textContent = 'Tabs er en ren Svelte component.');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ic(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [Dc] }, $$scope: { ctx: t } } })),
      (a = new xs({ props: { $$slots: { default: [ed] }, $$scope: { ctx: t } } })),
      (l = new Us({ props: { language: 'html', $$slots: { default: [nd] }, $$scope: { ctx: t } } })),
      (u = new xs({ props: { $$slots: { default: [md] }, $$scope: { ctx: t } } })),
      (g = new Us({ props: { language: 'html', $$slots: { default: [hd] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('h2')),
            (r.textContent = 'Style: Tabs'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            (c = y('h2')),
            (c.textContent = 'Style: Pillnavigation'),
            (d = T()),
            ft(u.$$.fragment),
            (f = T()),
            ft(g.$$.fragment),
            z(r, 'class', 'margin-xl--t margin-m--b'),
            z(c, 'class', 'margin-xl--t margin-m--b');
        },
        m(t, p) {
          gt(e, t, p),
            v(t, n, p),
            v(t, r, p),
            v(t, s, p),
            gt(a, t, p),
            v(t, o, p),
            gt(l, t, p),
            v(t, i, p),
            v(t, c, p),
            v(t, d, p),
            gt(u, t, p),
            v(t, f, p),
            gt(g, t, p),
            ($ = !0);
        },
        p(t, n) {
          const r = {};
          128 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
          const s = {};
          135 & n && (s.$$scope = { dirty: n, ctx: t }), a.$set(s);
          const o = {};
          128 & n && (o.$$scope = { dirty: n, ctx: t }), l.$set(o);
          const i = {};
          135 & n && (i.$$scope = { dirty: n, ctx: t }), u.$set(i);
          const c = {};
          128 & n && (c.$$scope = { dirty: n, ctx: t }), g.$set(c);
        },
        i(t) {
          $ ||
            (lt(e.$$.fragment, t),
            lt(a.$$.fragment, t),
            lt(l.$$.fragment, t),
            lt(u.$$.fragment, t),
            lt(g.$$.fragment, t),
            ($ = !0));
        },
        o(t) {
          it(e.$$.fragment, t),
            it(a.$$.fragment, t),
            it(l.$$.fragment, t),
            it(u.$$.fragment, t),
            it(g.$$.fragment, t),
            ($ = !1);
        },
        d(t) {
          $t(e, t),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            $t(l, t),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t),
            t && b(f),
            $t(g, t);
        },
      }
    );
  }
  function Dc(e) {
    let n;
    return {
      c() {
        n = C("import { Tabs, Tab, TabContent, TabList } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Vc(t) {
    let e;
    return {
      c() {
        e = C('Tab 1');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Rc(t) {
    let e;
    return {
      c() {
        e = C('Tab 2 Long Text Bla Bla');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function qc(t) {
    let e;
    return {
      c() {
        e = C('Tab 3 Long Text Bla Bla');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Gc(t) {
    let e, n, r, s, a, o;
    return (
      (e = new ws({ props: { $$slots: { default: [Vc] }, $$scope: { ctx: t } } })),
      (r = new ws({ props: { $$slots: { default: [Rc] }, $$scope: { ctx: t } } })),
      (a = new ws({ props: { $$slots: { default: [qc] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          128 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          128 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          128 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function Wc(t) {
    let e, n;
    return {
      c() {
        (e = new _()), (n = M()), (e.a = n);
      },
      m(r, s) {
        e.m(t[0], r, s), v(r, n, s);
      },
      p(t, n) {
        1 & n && e.p(t[0]);
      },
      d(t) {
        t && b(n), t && e.d();
      },
    };
  }
  function Uc(t) {
    let e;
    return {
      c() {
        (e = y('h2')), (e.textContent = 'Content 1'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Yc(t) {
    let e, n;
    return (
      (e = new fe({
        props: { className: 'margin-m--t', $$slots: { header: [Uc], default: [Wc] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          129 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Zc(t) {
    let e, n;
    return {
      c() {
        (e = new _()), (n = M()), (e.a = n);
      },
      m(r, s) {
        e.m(t[1], r, s), v(r, n, s);
      },
      p(t, n) {
        2 & n && e.p(t[1]);
      },
      d(t) {
        t && b(n), t && e.d();
      },
    };
  }
  function Xc(t) {
    let e;
    return {
      c() {
        (e = y('h2')), (e.textContent = 'Content 2'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Jc(t) {
    let e, n;
    return (
      (e = new fe({
        props: { className: 'margin-m--t', $$slots: { header: [Xc], default: [Zc] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          130 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Kc(t) {
    let e, n;
    return {
      c() {
        (e = new _()), (n = M()), (e.a = n);
      },
      m(r, s) {
        e.m(t[2], r, s), v(r, n, s);
      },
      p(t, n) {
        4 & n && e.p(t[2]);
      },
      d(t) {
        t && b(n), t && e.d();
      },
    };
  }
  function Qc(t) {
    let e;
    return {
      c() {
        (e = y('h2')), (e.textContent = 'Content 3'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function td(t) {
    let e, n;
    return (
      (e = new fe({
        props: { className: 'margin-m--t', $$slots: { header: [Qc], default: [Kc] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          132 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ed(t) {
    let e, n, r, s, a, o, l, i;
    return (
      (e = new zs({ props: { $$slots: { default: [Gc] }, $$scope: { ctx: t } } })),
      (r = new Ts({ props: { $$slots: { default: [Yc] }, $$scope: { ctx: t } } })),
      (a = new Ts({ props: { $$slots: { default: [Jc] }, $$scope: { ctx: t } } })),
      (l = new Ts({ props: { $$slots: { default: [td] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment), (o = T()), ft(l.$$.fragment);
        },
        m(t, c) {
          gt(e, t, c), v(t, n, c), gt(r, t, c), v(t, s, c), gt(a, t, c), v(t, o, c), gt(l, t, c), (i = !0);
        },
        p(t, n) {
          const s = {};
          128 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          129 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const i = {};
          130 & n && (i.$$scope = { dirty: n, ctx: t }), a.$set(i);
          const c = {};
          132 & n && (c.$$scope = { dirty: n, ctx: t }), l.$set(c);
        },
        i(t) {
          i || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), lt(l.$$.fragment, t), (i = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), it(l.$$.fragment, t), (i = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t), t && b(o), $t(l, t);
        },
      }
    );
  }
  function nd(e) {
    let n;
    return {
      c() {
        n = C(
          '<Tabs>\n  <TabList>\n    <Tab>Tab 1</Tab>\n    <Tab>Tab 2</Tab>\n    <Tab>Tab 3</Tab>\n  </TabList>\n  <TabContent>\n    Content 1\n  </TabContent>\n  <TabContent>\n    Content 2\n  </TabContent>\n  <TabContent>\n    Content 3\n  </TabContent>\n</Tabs>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function rd(t) {
    let e;
    return {
      c() {
        e = C('Tab 1');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function sd(t) {
    let e;
    return {
      c() {
        e = C('Tab 2');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function ad(t) {
    let e;
    return {
      c() {
        e = C('Tab 3');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function od(t) {
    let e, n, r, s, a, o;
    return (
      (e = new ws({ props: { $$slots: { default: [rd] }, $$scope: { ctx: t } } })),
      (r = new ws({ props: { $$slots: { default: [sd] }, $$scope: { ctx: t } } })),
      (a = new ws({ props: { $$slots: { default: [ad] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment);
        },
        m(t, l) {
          gt(e, t, l), v(t, n, l), gt(r, t, l), v(t, s, l), gt(a, t, l), (o = !0);
        },
        p(t, n) {
          const s = {};
          128 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          128 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const l = {};
          128 & n && (l.$$scope = { dirty: n, ctx: t }), a.$set(l);
        },
        i(t) {
          o || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t);
        },
      }
    );
  }
  function ld(t) {
    let e;
    return {
      c() {
        (e = y('h2')), (e.textContent = 'Content 1'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function id(t) {
    let e, n, r;
    return {
      c() {
        (e = y('div')),
          z(e, 'slot', 'content'),
          z(e, 'contenteditable', 'true'),
          void 0 === t[0] && J(() => t[4].call(e));
      },
      m(s, a) {
        v(s, e, a), void 0 !== t[0] && (e.innerHTML = t[0]), n || ((r = L(e, 'input', t[4])), (n = !0));
      },
      p(t, n) {
        1 & n && t[0] !== e.innerHTML && (e.innerHTML = t[0]);
      },
      d(t) {
        t && b(e), (n = !1), r();
      },
    };
  }
  function cd(t) {
    let e, n;
    return (
      (e = new fe({
        props: { className: 'margin-m--t', $$slots: { content: [id], header: [ld] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          129 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function dd(t) {
    let e;
    return {
      c() {
        (e = y('h2')), (e.textContent = 'Content 2'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function ud(t) {
    let e, n, r;
    return {
      c() {
        (e = y('div')),
          z(e, 'slot', 'content'),
          z(e, 'contenteditable', 'true'),
          void 0 === t[1] && J(() => t[5].call(e));
      },
      m(s, a) {
        v(s, e, a), void 0 !== t[1] && (e.innerHTML = t[1]), n || ((r = L(e, 'input', t[5])), (n = !0));
      },
      p(t, n) {
        2 & n && t[1] !== e.innerHTML && (e.innerHTML = t[1]);
      },
      d(t) {
        t && b(e), (n = !1), r();
      },
    };
  }
  function fd(t) {
    let e, n;
    return (
      (e = new fe({
        props: { className: 'margin-m--t', $$slots: { content: [ud], header: [dd] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          130 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function gd(t) {
    let e;
    return {
      c() {
        (e = y('h2')), (e.textContent = 'Content 3'), z(e, 'slot', 'header');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function $d(t) {
    let e, n, r;
    return {
      c() {
        (e = y('div')),
          z(e, 'slot', 'content'),
          z(e, 'contenteditable', 'true'),
          void 0 === t[2] && J(() => t[6].call(e));
      },
      m(s, a) {
        v(s, e, a), void 0 !== t[2] && (e.innerHTML = t[2]), n || ((r = L(e, 'input', t[6])), (n = !0));
      },
      p(t, n) {
        4 & n && t[2] !== e.innerHTML && (e.innerHTML = t[2]);
      },
      d(t) {
        t && b(e), (n = !1), r();
      },
    };
  }
  function pd(t) {
    let e, n;
    return (
      (e = new fe({
        props: { className: 'margin-m--t', $$slots: { content: [$d], header: [gd] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          132 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function md(t) {
    let e, n, r, s, a, o, l, i;
    return (
      (e = new zs({ props: { type: 'pillnavigation', $$slots: { default: [od] }, $$scope: { ctx: t } } })),
      (r = new Ts({ props: { $$slots: { default: [cd] }, $$scope: { ctx: t } } })),
      (a = new Ts({ props: { $$slots: { default: [fd] }, $$scope: { ctx: t } } })),
      (l = new Ts({ props: { $$slots: { default: [pd] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment), (s = T()), ft(a.$$.fragment), (o = T()), ft(l.$$.fragment);
        },
        m(t, c) {
          gt(e, t, c), v(t, n, c), gt(r, t, c), v(t, s, c), gt(a, t, c), v(t, o, c), gt(l, t, c), (i = !0);
        },
        p(t, n) {
          const s = {};
          128 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const o = {};
          129 & n && (o.$$scope = { dirty: n, ctx: t }), r.$set(o);
          const i = {};
          130 & n && (i.$$scope = { dirty: n, ctx: t }), a.$set(i);
          const c = {};
          132 & n && (c.$$scope = { dirty: n, ctx: t }), l.$set(c);
        },
        i(t) {
          i || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(a.$$.fragment, t), lt(l.$$.fragment, t), (i = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(a.$$.fragment, t), it(l.$$.fragment, t), (i = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), $t(a, t), t && b(o), $t(l, t);
        },
      }
    );
  }
  function hd(e) {
    let n;
    return {
      c() {
        n = C(
          '<Tabs>\n  <TabList type="pillnavigation">\n    <Tab>Tab 1</Tab>\n    <Tab>Tab 2</Tab>\n    <Tab>Tab 3</Tab>\n  </TabList>\n  <TabContent>\n    Content 1\n  </TabContent>\n  <TabContent>\n    Content 2\n  </TabContent>\n  <TabContent>\n    Content 3\n  </TabContent>\n</Tabs>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function xd(t) {
    let e, n, r, s, a, o;
    const l = [Ic, Oc],
      i = [];
    function c(t, e) {
      return 'svelte' === t[3] ? 0 : 1;
    }
    return (
      (r = c(t)),
      (s = i[r] = l[r](t)),
      {
        c() {
          (e = y('h1')), (e.textContent = 'Tabs'), (n = T()), s.c(), (a = M()), z(e, 'class', 'color--eb');
        },
        m(t, s) {
          v(t, e, s), v(t, n, s), i[r].m(t, s), v(t, a, s), (o = !0);
        },
        p(t, [e]) {
          let n = r;
          (r = c(t)),
            r === n
              ? i[r].p(t, e)
              : (at(),
                it(i[n], 1, 1, () => {
                  i[n] = null;
                }),
                ot(),
                (s = i[r]),
                s ? s.p(t, e) : ((s = i[r] = l[r](t)), s.c()),
                lt(s, 1),
                s.m(a.parentNode, a));
        },
        i(t) {
          o || (lt(s), (o = !0));
        },
        o(t) {
          it(s), (o = !1);
        },
        d(t) {
          t && b(e), t && b(n), i[r].d(t), t && b(a);
        },
      }
    );
  }
  function vd(t, e, n) {
    let r;
    u(t, ja, (t) => n(3, (r = t)));
    let s = Sa(),
      a = Sa(),
      o = Sa();
    return [
      s,
      a,
      o,
      r,
      function () {
        (s = this.innerHTML), n(0, s);
      },
      function () {
        (a = this.innerHTML), n(1, a);
      },
      function () {
        (o = this.innerHTML), n(2, o);
      },
    ];
  }
  const bd = (t) => ({}),
    wd = (t) => ({ slot: 'on' }),
    yd = (t) => ({}),
    kd = (t) => ({ slot: 'off' }),
    Cd = (t) => ({}),
    Td = (t) => ({ slot: 'on' }),
    Md = (t) => ({}),
    Ld = (t) => ({ slot: 'off' }),
    zd = (t) => ({}),
    Fd = (t) => ({ slot: 'on' }),
    Nd = (t) => ({}),
    Bd = (t) => ({ slot: 'off' }),
    Hd = (t) => ({}),
    Sd = (t) => ({ slot: 'on' }),
    _d = (t) => ({}),
    Ad = (t) => ({ slot: 'off' });
  function jd(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [Ed] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>defaultState</td> \n        <td>boolean</td> \n        <td>true</td> \n        <td>Should the toggler be on or of on mount</td></tr> \n      <tr><td>isSwitch</td> \n        <td>boolean</td> \n        <td>false</td> \n        <td>Convents into a swicth, see example further down</td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function Ed(e) {
    let n;
    return {
      c() {
        n = C("import { Toggler } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Pd(t) {
    let e;
    const n = t[1].default,
      r = f(n, t, t[2], Sd),
      s =
        r ||
        (function (t) {
          let e;
          return {
            c() {
              e = C('on');
            },
            m(t, n) {
              v(t, e, n);
            },
            d(t) {
              t && b(e);
            },
          };
        })();
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 4 & s) && p(r, n, t, t[2], e ? $(n, t[2], s, Hd) : m(t[2]), Sd);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function Od(t) {
    let e;
    const n = t[1].default,
      r = f(n, t, t[2], Ad),
      s =
        r ||
        (function (t) {
          let e;
          return {
            c() {
              e = C('off');
            },
            m(t, n) {
              v(t, e, n);
            },
            d(t) {
              t && b(e);
            },
          };
        })();
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 4 & s) && p(r, n, t, t[2], e ? $(n, t[2], s, _d) : m(t[2]), Ad);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function Id(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Vd] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Dd(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Rd] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Vd(e) {
    let n;
    return {
      c() {
        n = C(
          '<label class="toggle">\n  <input type="checkbox" hidden class="toggle-input" />\n  <span class="toggle toggle-on">on</span>\n  <span class="toggle toggle-off">off</span>\n</label>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Rd(e) {
    let n;
    return {
      c() {
        n = C('<Toggler>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function qd(e) {
    let n;
    const r = e[1].default,
      s = f(r, e, e[2], Fd),
      a =
        s ||
        (function (e) {
          let n, r;
          return (
            (n = new Gn({ props: { name: 'angle-down', style: 'width: 24px; height: 24px;' } })),
            {
              c() {
                ft(n.$$.fragment);
              },
              m(t, e) {
                gt(n, t, e), (r = !0);
              },
              p: t,
              i(t) {
                r || (lt(n.$$.fragment, t), (r = !0));
              },
              o(t) {
                it(n.$$.fragment, t), (r = !1);
              },
              d(t) {
                $t(n, t);
              },
            }
          );
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, e) {
        a && a.m(t, e), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 4 & e) && p(s, r, t, t[2], n ? $(r, t[2], e, zd) : m(t[2]), Fd);
      },
      i(t) {
        n || (lt(a, t), (n = !0));
      },
      o(t) {
        it(a, t), (n = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function Gd(e) {
    let n;
    const r = e[1].default,
      s = f(r, e, e[2], Bd),
      a =
        s ||
        (function (e) {
          let n, r;
          return (
            (n = new Gn({ props: { name: 'angle-up', style: 'width: 24px; height: 24px;' } })),
            {
              c() {
                ft(n.$$.fragment);
              },
              m(t, e) {
                gt(n, t, e), (r = !0);
              },
              p: t,
              i(t) {
                r || (lt(n.$$.fragment, t), (r = !0));
              },
              o(t) {
                it(n.$$.fragment, t), (r = !1);
              },
              d(t) {
                $t(n, t);
              },
            }
          );
        })();
    return {
      c() {
        a && a.c();
      },
      m(t, e) {
        a && a.m(t, e), (n = !0);
      },
      p(t, e) {
        s && s.p && (!n || 4 & e) && p(s, r, t, t[2], n ? $(r, t[2], e, Nd) : m(t[2]), Bd);
      },
      i(t) {
        n || (lt(a, t), (n = !0));
      },
      o(t) {
        it(a, t), (n = !1);
      },
      d(t) {
        a && a.d(t);
      },
    };
  }
  function Wd(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Yd] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Ud(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [Zd] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Yd(e) {
    let n;
    return {
      c() {
        n = C(
          '<label class="toggle">\n  <input type="checkbox" hidden class="toggle-input" />\n  <i class="toggle toggle-on fas fa-angle-down"></i>\n  <i class="toggle toggle-off fas fa-angle-up"></i>\n</label>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Zd(e) {
    let n;
    return {
      c() {
        n = C(
          '<Toggler>\n  <slot slot="on">\n    <Icon name="angle-down" style="width: 24px; height: 24px;" />\n  </slot>\n  <slot slot="off">\n    <Icon name="angle-up" style="width: 24px; height: 24px;" />\n  </slot>\n</Toggler>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Xd(t) {
    let e;
    const n = t[1].default,
      r = f(n, t, t[2], Td),
      s =
        r ||
        (function (t) {
          let e;
          return {
            c() {
              e = C('on');
            },
            m(t, n) {
              v(t, e, n);
            },
            d(t) {
              t && b(e);
            },
          };
        })();
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 4 & s) && p(r, n, t, t[2], e ? $(n, t[2], s, Cd) : m(t[2]), Td);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function Jd(t) {
    let e;
    const n = t[1].default,
      r = f(n, t, t[2], Ld),
      s =
        r ||
        (function (t) {
          let e;
          return {
            c() {
              e = C('off');
            },
            m(t, n) {
              v(t, e, n);
            },
            d(t) {
              t && b(e);
            },
          };
        })();
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 4 & s) && p(r, n, t, t[2], e ? $(n, t[2], s, Md) : m(t[2]), Ld);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function Kd(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [tu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function Qd(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [eu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function tu(e) {
    let n;
    return {
      c() {
        n = C('Sadly, Svelte only');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function eu(e) {
    let n;
    return {
      c() {
        n = C('<Toggler isSwitch={true}>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function nu(t) {
    let e;
    const n = t[1].default,
      r = f(n, t, t[2], wd),
      s =
        r ||
        (function (t) {
          let e;
          return {
            c() {
              e = C('on');
            },
            m(t, n) {
              v(t, e, n);
            },
            d(t) {
              t && b(e);
            },
          };
        })();
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 4 & s) && p(r, n, t, t[2], e ? $(n, t[2], s, bd) : m(t[2]), wd);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function ru(t) {
    let e;
    const n = t[1].default,
      r = f(n, t, t[2], kd),
      s =
        r ||
        (function (t) {
          let e;
          return {
            c() {
              e = C('off');
            },
            m(t, n) {
              v(t, e, n);
            },
            d(t) {
              t && b(e);
            },
          };
        })();
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, s) {
        r && r.p && (!e || 4 & s) && p(r, n, t, t[2], e ? $(n, t[2], s, yd) : m(t[2]), kd);
      },
      i(t) {
        e || (lt(s, t), (e = !0));
      },
      o(t) {
        it(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function su(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [ou] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function au(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [lu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function ou(e) {
    let n;
    return {
      c() {
        n = C('Sadly, Svelte only');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function lu(e) {
    let n;
    return {
      c() {
        n = C('<Toggler defaultState={false}>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function iu(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      w,
      k,
      C,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O = 'svelte' === t[0] && jd(t);
    o = new or({ props: { $$slots: { off: [Od], on: [Pd] }, $$scope: { ctx: t } } });
    const I = [Dd, Id],
      D = [];
    function V(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (i = V(t)),
      (c = D[i] = I[i](t)),
      (g = new or({ props: { $$slots: { off: [Gd], on: [qd] }, $$scope: { ctx: t } } }));
    const R = [Ud, Wd],
      q = [];
    function G(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (p = G(t)),
      (m = q[p] = R[p](t)),
      (k = new or({ props: { isSwitch: !0, $$slots: { off: [Jd], on: [Xd] }, $$scope: { ctx: t } } }));
    const W = [Qd, Kd],
      U = [];
    function Y(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (L = Y(t)),
      (F = U[L] = W[L](t)),
      (S = new or({ props: { defaultState: !1, $$slots: { off: [ru], on: [nu] }, $$scope: { ctx: t } } }));
    const Z = [au, su],
      X = [];
    function J(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (A = J(t)),
      (j = X[A] = Z[A](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Toggler'),
            (n = T()),
            O && O.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Toggler with text'),
            (a = T()),
            ft(o.$$.fragment),
            (l = T()),
            c.c(),
            (d = T()),
            (u = y('h3')),
            (u.textContent = 'Toggler with icon'),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            m.c(),
            (h = T()),
            (x = y('h3')),
            (x.textContent = 'Toggle as switch'),
            (w = T()),
            ft(k.$$.fragment),
            (C = T()),
            F.c(),
            (N = T()),
            (B = y('h3')),
            (B.textContent = 'Set default state to off'),
            (H = T()),
            ft(S.$$.fragment),
            (_ = T()),
            j.c(),
            (E = M()),
            z(e, 'class', 'color--eb');
        },
        m(t, c) {
          v(t, e, c),
            v(t, n, c),
            O && O.m(t, c),
            v(t, r, c),
            v(t, s, c),
            v(t, a, c),
            gt(o, t, c),
            v(t, l, c),
            D[i].m(t, c),
            v(t, d, c),
            v(t, u, c),
            v(t, f, c),
            gt(g, t, c),
            v(t, $, c),
            q[p].m(t, c),
            v(t, h, c),
            v(t, x, c),
            v(t, w, c),
            gt(k, t, c),
            v(t, C, c),
            U[L].m(t, c),
            v(t, N, c),
            v(t, B, c),
            v(t, H, c),
            gt(S, t, c),
            v(t, _, c),
            X[A].m(t, c),
            v(t, E, c),
            (P = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? O
              ? 1 & e && lt(O, 1)
              : ((O = jd(t)), O.c(), lt(O, 1), O.m(r.parentNode, r))
            : O &&
              (at(),
              it(O, 1, 1, () => {
                O = null;
              }),
              ot());
          const n = {};
          4 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n);
          let s = i;
          (i = V(t)),
            i !== s &&
              (at(),
              it(D[s], 1, 1, () => {
                D[s] = null;
              }),
              ot(),
              (c = D[i]),
              c || ((c = D[i] = I[i](t)), c.c()),
              lt(c, 1),
              c.m(d.parentNode, d));
          const a = {};
          4 & e && (a.$$scope = { dirty: e, ctx: t }), g.$set(a);
          let l = p;
          (p = G(t)),
            p !== l &&
              (at(),
              it(q[l], 1, 1, () => {
                q[l] = null;
              }),
              ot(),
              (m = q[p]),
              m || ((m = q[p] = R[p](t)), m.c()),
              lt(m, 1),
              m.m(h.parentNode, h));
          const u = {};
          4 & e && (u.$$scope = { dirty: e, ctx: t }), k.$set(u);
          let f = L;
          (L = Y(t)),
            L !== f &&
              (at(),
              it(U[f], 1, 1, () => {
                U[f] = null;
              }),
              ot(),
              (F = U[L]),
              F || ((F = U[L] = W[L](t)), F.c()),
              lt(F, 1),
              F.m(N.parentNode, N));
          const $ = {};
          4 & e && ($.$$scope = { dirty: e, ctx: t }), S.$set($);
          let x = A;
          (A = J(t)),
            A !== x &&
              (at(),
              it(X[x], 1, 1, () => {
                X[x] = null;
              }),
              ot(),
              (j = X[A]),
              j || ((j = X[A] = Z[A](t)), j.c()),
              lt(j, 1),
              j.m(E.parentNode, E));
        },
        i(t) {
          P ||
            (lt(O),
            lt(o.$$.fragment, t),
            lt(c),
            lt(g.$$.fragment, t),
            lt(m),
            lt(k.$$.fragment, t),
            lt(F),
            lt(S.$$.fragment, t),
            lt(j),
            (P = !0));
        },
        o(t) {
          it(O),
            it(o.$$.fragment, t),
            it(c),
            it(g.$$.fragment, t),
            it(m),
            it(k.$$.fragment, t),
            it(F),
            it(S.$$.fragment, t),
            it(j),
            (P = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            O && O.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            $t(o, t),
            t && b(l),
            D[i].d(t),
            t && b(d),
            t && b(u),
            t && b(f),
            $t(g, t),
            t && b($),
            q[p].d(t),
            t && b(h),
            t && b(x),
            t && b(w),
            $t(k, t),
            t && b(C),
            U[L].d(t),
            t && b(N),
            t && b(B),
            t && b(H),
            $t(S, t),
            t && b(_),
            X[A].d(t),
            t && b(E);
        },
      }
    );
  }
  function cu(t, e, n) {
    let r;
    u(t, ja, (t) => n(0, (r = t)));
    let { $$slots: s = {}, $$scope: a } = e;
    return (
      (t.$$set = (t) => {
        '$$scope' in t && n(2, (a = t.$$scope));
      }),
      [r, s, a]
    );
  }
  function du(t) {
    let e, n, r, s;
    return (
      (e = new Us({ props: { language: 'js', $$slots: { default: [uu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            (r = y('table')),
            (r.innerHTML =
              '<thead><tr><th>Prop name</th> \n        <th>Type</th> \n        <th>Default value</th> \n        <th>Description</th></tr></thead> \n    <tbody><tr><td>className</td> \n        <td>string</td> \n        <td></td> \n        <td></td></tr> \n      <tr><td>iconOn</td> \n        <td>string</td> \n        <td>&#39;times&#39;</td> \n        <td>FontAwesome icon for when tooltip is open</td></tr> \n      <tr><td>iconOff</td> \n        <td>string</td> \n        <td>&#39;question&#39;</td> \n        <td>FontAwesome icon for when tooltip is closed</td></tr> \n      <tr><td>position</td> \n        <td>&#39;left&#39; | &#39;right&#39;</td> \n        <td>&#39;left&#39;</td> \n        <td></td></tr></tbody>'),
            z(r, 'class', 'table');
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), v(t, r, a), (s = !0);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), t && b(r);
        },
      }
    );
  }
  function uu(e) {
    let n;
    return {
      c() {
        n = C("import { Tooltip } from '@ekstra-bladet/designsystem';");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function fu(e) {
    let n, r;
    return {
      c() {
        (n = new _()), (r = M()), (n.a = r);
      },
      m(t, s) {
        n.m(e[1], t, s), v(t, r, s);
      },
      p: t,
      d(t) {
        t && b(r), t && n.d();
      },
    };
  }
  function gu(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [pu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function $u(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [mu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function pu(e) {
    let n;
    return {
      c() {
        n = C(
          '<label class="tooltip">\n  <input type="checkbox" hidden class="tooltip-input"/>\n  <div class="tooltip-off">\n    <i class="tooltip-toggle fas fa-question"/>\n  </div>\n  <div class="tooltip-on">\n    <i class="tooltip-toggle fas fa-times"/>\n    <div class="padding-s">\n      Content\n    </div>\n  </div>\n</label>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function mu(e) {
    let n;
    return {
      c() {
        n = C('<Tooltip></Tooltip>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function hu(e) {
    let n, r;
    return {
      c() {
        (n = new _()), (r = M()), (n.a = r);
      },
      m(t, s) {
        n.m(e[2], t, s), v(t, r, s);
      },
      p: t,
      d(t) {
        t && b(r), t && n.d();
      },
    };
  }
  function xu(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [bu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function vu(t) {
    let e, n;
    return (
      (e = new Us({ props: { language: 'html', $$slots: { default: [wu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment);
        },
        m(t, r) {
          gt(e, t, r), (n = !0);
        },
        i(t) {
          n || (lt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          it(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          $t(e, t);
        },
      }
    );
  }
  function bu(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex flex-justify--between">\n  <h3>Header</h3>\n  <label class="tooltip tooltip--right flex-item--center">\n    <input type="checkbox" hidden class="tooltip-input"/>\n    <div class="tooltip-off">\n      <i class="tooltip-toggle fas fa-question"/>\n    </div>\n    <div class="tooltip-on">\n      <i class="tooltip-toggle fas fa-times"/>\n      <div class="padding-s">\n        Content\n      </div>\n    </div>\n  </label>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function wu(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex flex-justify--between">\n  <h3>Header</h3>\n  <Tooltip position="right" className="flex-item--center"></Tooltip>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function yu(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      w,
      k,
      C,
      L,
      F,
      N = 'svelte' === t[0] && du(t);
    l = new Bs({ props: { $$slots: { default: [fu] }, $$scope: { ctx: t } } });
    const B = [$u, gu],
      H = [];
    function S(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    (c = S(t)),
      (d = H[c] = B[c](t)),
      (h = new Bs({
        props: { position: 'right', className: 'flex-item--center', $$slots: { default: [hu] }, $$scope: { ctx: t } },
      }));
    const _ = [vu, xu],
      A = [];
    function j(t, e) {
      return 'svelte' === t[0] ? 0 : 1;
    }
    return (
      (k = j(t)),
      (C = A[k] = _[k](t)),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Tooltip'),
            (n = T()),
            N && N.c(),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Default tooltip'),
            (a = T()),
            (o = y('div')),
            ft(l.$$.fragment),
            (i = T()),
            d.c(),
            (u = T()),
            (f = y('h3')),
            (f.textContent = 'Tooltip i højre side'),
            (g = T()),
            ($ = y('div')),
            (p = y('h3')),
            (p.textContent = 'Header'),
            (m = T()),
            ft(h.$$.fragment),
            (w = T()),
            C.c(),
            (L = M()),
            z(e, 'class', 'color--eb'),
            z(o, 'class', 'flex margin-l--tb'),
            z($, 'class', 'flex flex-justify--between grid-width--small margin-l--tb');
        },
        m(t, d) {
          v(t, e, d),
            v(t, n, d),
            N && N.m(t, d),
            v(t, r, d),
            v(t, s, d),
            v(t, a, d),
            v(t, o, d),
            gt(l, o, null),
            v(t, i, d),
            H[c].m(t, d),
            v(t, u, d),
            v(t, f, d),
            v(t, g, d),
            v(t, $, d),
            x($, p),
            x($, m),
            gt(h, $, null),
            v(t, w, d),
            A[k].m(t, d),
            v(t, L, d),
            (F = !0);
        },
        p(t, [e]) {
          'svelte' === t[0]
            ? N
              ? 1 & e && lt(N, 1)
              : ((N = du(t)), N.c(), lt(N, 1), N.m(r.parentNode, r))
            : N &&
              (at(),
              it(N, 1, 1, () => {
                N = null;
              }),
              ot());
          const n = {};
          8 & e && (n.$$scope = { dirty: e, ctx: t }), l.$set(n);
          let s = c;
          (c = S(t)),
            c !== s &&
              (at(),
              it(H[s], 1, 1, () => {
                H[s] = null;
              }),
              ot(),
              (d = H[c]),
              d || ((d = H[c] = B[c](t)), d.c()),
              lt(d, 1),
              d.m(u.parentNode, u));
          const a = {};
          8 & e && (a.$$scope = { dirty: e, ctx: t }), h.$set(a);
          let o = k;
          (k = j(t)),
            k !== o &&
              (at(),
              it(A[o], 1, 1, () => {
                A[o] = null;
              }),
              ot(),
              (C = A[k]),
              C || ((C = A[k] = _[k](t)), C.c()),
              lt(C, 1),
              C.m(L.parentNode, L));
        },
        i(t) {
          F || (lt(N), lt(l.$$.fragment, t), lt(d), lt(h.$$.fragment, t), lt(C), (F = !0));
        },
        o(t) {
          it(N), it(l.$$.fragment, t), it(d), it(h.$$.fragment, t), it(C), (F = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            N && N.d(t),
            t && b(r),
            t && b(s),
            t && b(a),
            t && b(o),
            $t(l),
            t && b(i),
            H[c].d(t),
            t && b(u),
            t && b(f),
            t && b(g),
            t && b($),
            $t(h),
            t && b(w),
            A[k].d(t),
            t && b(L);
        },
      }
    );
  }
  function ku(t, e, n) {
    let r;
    u(t, ja, (t) => n(0, (r = t)));
    let s = Sa(2),
      a = Sa(2);
    return [r, s, a];
  }
  function Cu(t) {
    let e;
    return {
      c() {
        (e = y('i')), z(e, 'class', 'fas fa-cubes');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Tu(t) {
    let e;
    return {
      c() {
        (e = y('i')), z(e, 'class', 'fas fa-code');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Mu(t) {
    let e, n, r, s;
    return (
      (e = new ws({ props: { $$slots: { default: [Cu] }, $$scope: { ctx: t } } })),
      (r = new ws({ props: { $$slots: { default: [Tu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment);
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), gt(r, t, a), (s = !0);
        },
        p(t, n) {
          const s = {};
          2 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const a = {};
          2 & n && (a.$$scope = { dirty: n, ctx: t }), r.$set(a);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t);
        },
      }
    );
  }
  function Lu(t) {
    let e;
    return {
      c() {
        e = C('Bandekriminialitet');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function zu(t) {
    let e;
    return {
      c() {
        e = C('Sport');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Fu(t) {
    let e;
    return {
      c() {
        e = C('Nicklas Bendtner');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Nu(t) {
    let e, n, r, s, a, o, l, i, c, d;
    return (
      (n = new Cr({
        props: {
          className: 'animation-fogwave',
          href: t[0].href,
          media: { src: 'https://via.placeholder.com/610x343&text=610x343' },
          section: t[0].section,
          timestamp: t[0].timestamp,
          title: t[0].title,
        },
      })),
      (a = new Fr({
        props: {
          href: '#',
          className: 'margin-s bg--bluedark animation-fogwave',
          $$slots: { default: [Lu] },
          $$scope: { ctx: t },
        },
      })),
      (l = new Fr({
        props: {
          href: '#',
          className: 'margin-s bg--green animation-fogwave',
          $$slots: { default: [zu] },
          $$scope: { ctx: t },
        },
      })),
      (c = new Fr({
        props: {
          href: '#',
          className: 'margin-s bg--greendark animation-fogwave',
          $$slots: { default: [Fu] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          (e = y('div')),
            ft(n.$$.fragment),
            (r = T()),
            (s = y('div')),
            ft(a.$$.fragment),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            ft(c.$$.fragment),
            z(e, 'class', 'flex grid-width--small'),
            z(s, 'class', 'flex grid-width--small');
        },
        m(t, u) {
          v(t, e, u),
            gt(n, e, null),
            v(t, r, u),
            v(t, s, u),
            gt(a, s, null),
            x(s, o),
            gt(l, s, null),
            x(s, i),
            gt(c, s, null),
            (d = !0);
        },
        p(t, e) {
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r);
          const s = {};
          2 & e && (s.$$scope = { dirty: e, ctx: t }), c.$set(s);
        },
        i(t) {
          d || (lt(n.$$.fragment, t), lt(a.$$.fragment, t), lt(l.$$.fragment, t), lt(c.$$.fragment, t), (d = !0));
        },
        o(t) {
          it(n.$$.fragment, t), it(a.$$.fragment, t), it(l.$$.fragment, t), it(c.$$.fragment, t), (d = !1);
        },
        d(t) {
          t && b(e), $t(n), t && b(r), t && b(s), $t(a), $t(l), $t(c);
        },
      }
    );
  }
  function Bu(e) {
    let n, r, s, a, o, l;
    return (
      (n = new Us({
        props: {
          language: 'html',
          source:
            '<ArticleCard\n          className="animation-fogwave"\n          href="{article.href}"\n          media="{{src:\'https://via.placeholder.com/610x343&text=610x343\'}}"\n          section="{article.section}"\n          timestamp="{article.timestamp}"\n          title="{article.title}"\n          />',
        },
      })),
      (s = new Us({
        props: {
          language: 'html',
          source: '<Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>',
        },
      })),
      (o = new Us({
        props: {
          language: 'html',
          source: '<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>',
        },
      })),
      {
        c() {
          ft(n.$$.fragment), (r = T()), ft(s.$$.fragment), (a = T()), ft(o.$$.fragment);
        },
        m(t, e) {
          gt(n, t, e), v(t, r, e), gt(s, t, e), v(t, a, e), gt(o, t, e), (l = !0);
        },
        p: t,
        i(t) {
          l || (lt(n.$$.fragment, t), lt(s.$$.fragment, t), lt(o.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(n.$$.fragment, t), it(s.$$.fragment, t), it(o.$$.fragment, t), (l = !1);
        },
        d(t) {
          $t(n, t), t && b(r), $t(s, t), t && b(a), $t(o, t);
        },
      }
    );
  }
  function Hu(t) {
    let e, n, r, s, a, o, l;
    return (
      (n = new zs({ props: { $$slots: { default: [Mu] }, $$scope: { ctx: t } } })),
      (s = new Ts({ props: { $$slots: { default: [Nu] }, $$scope: { ctx: t } } })),
      (o = new Ts({ props: { $$slots: { default: [Bu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('div')),
            ft(n.$$.fragment),
            (r = T()),
            ft(s.$$.fragment),
            (a = T()),
            ft(o.$$.fragment),
            z(e, 'class', 'flex flex-justify--end width-1of1');
        },
        m(t, i) {
          v(t, e, i), gt(n, e, null), v(t, r, i), gt(s, t, i), v(t, a, i), gt(o, t, i), (l = !0);
        },
        p(t, e) {
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
          const a = {};
          2 & e && (a.$$scope = { dirty: e, ctx: t }), s.$set(a);
          const l = {};
          2 & e && (l.$$scope = { dirty: e, ctx: t }), o.$set(l);
        },
        i(t) {
          l || (lt(n.$$.fragment, t), lt(s.$$.fragment, t), lt(o.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(n.$$.fragment, t), it(s.$$.fragment, t), it(o.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && b(e), $t(n), t && b(r), $t(s, t), t && b(a), $t(o, t);
        },
      }
    );
  }
  function Su(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, w, k, C, M, L, F, N, B, S;
    return (
      ($ = new xs({ props: { $$slots: { default: [Hu] }, $$scope: { ctx: t } } })),
      (B = new Us({ props: { language: 'html', source: '<component className="animation-fogwave"/></component>' } })),
      {
        c() {
          (e = y('div')),
            (n = y('h1')),
            (n.textContent = 'Animation'),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Anvendelse af animationer'),
            (a = T()),
            (o = y('p')),
            (o.innerHTML =
              'Animationer anvendes ved tilføjelse af class: <code>className=&quot;animation-navnPåAnimation&quot;</code>'),
            (l = T()),
            (i = y('p')),
            (i.textContent = 'Denne class kan anvendes på tværs af vores komponenter'),
            (c = T()),
            (d = y('p')),
            (d.innerHTML =
              '<b>OBS:</b> anvendes en animation direkte på et html-element skal det anvendes på følgende måde:\n    <code>class=&quot;animation-navnPåAnimation&quot;</code>'),
            (u = T()),
            (f = y('h3')),
            (f.textContent = 'Eksempler på animationer'),
            (g = T()),
            ft($.$$.fragment),
            (p = T()),
            (m = y('h3')),
            (m.textContent = 'Overblik over animationer'),
            (h = T()),
            (w = y('div')),
            (k = y('div')),
            (k.innerHTML =
              '<div class="width-1of3 padding-m fontweight-bold">Class</div> \n      <div class="width-1of3 padding-m fontweight-bold">Use case</div>'),
            (C = T()),
            (M = y('div')),
            (L = y('div')),
            (L.textContent = 'animation-fogwave'),
            (F = T()),
            (N = y('div')),
            ft(B.$$.fragment),
            z(n, 'class', 'color--eb'),
            z(k, 'class', 'flex flex-item--center bg--graa7'),
            H(k, 'border-bottom', '1px solid rgba(0, 0, 0, .1)'),
            z(L, 'class', 'flex-item--center width-1of3 padding-m'),
            z(N, 'class', 'flex-item--center width-2of3 padding-m'),
            z(M, 'class', 'flex bg--graa7'),
            H(M, 'border-bottom', '1px solid rgba(0, 0, 0, .1)'),
            z(w, 'class', 'grid-width--large'),
            z(e, 'class', 'grid-width--large');
        },
        m(t, b) {
          v(t, e, b),
            x(e, n),
            x(e, r),
            x(e, s),
            x(e, a),
            x(e, o),
            x(e, l),
            x(e, i),
            x(e, c),
            x(e, d),
            x(e, u),
            x(e, f),
            x(e, g),
            gt($, e, null),
            x(e, p),
            x(e, m),
            x(e, h),
            x(e, w),
            x(w, k),
            x(w, C),
            x(w, M),
            x(M, L),
            x(M, F),
            x(M, N),
            gt(B, N, null),
            (S = !0);
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), $.$set(n);
        },
        i(t) {
          S || (lt($.$$.fragment, t), lt(B.$$.fragment, t), (S = !0));
        },
        o(t) {
          it($.$$.fragment, t), it(B.$$.fragment, t), (S = !1);
        },
        d(t) {
          t && b(e), $t($), $t(B);
        },
      }
    );
  }
  function _u(t) {
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
  function Au(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="border border--black width-1of3 padding-xl margin-l bg--eb">border</div> \n    <div class="border--t border--black width-1of3 padding-xl margin-l bg--eb">border--t</div> \n    <div class="border--b border--black width-1of3 padding-xl margin-l bg--eb">border--b</div> \n    <div class="border--l border--black width-1of3 padding-xl margin-l bg--eb">border--l</div> \n    <div class="border--r border--black width-1of3 padding-xl margin-l bg--eb">border--r</div>'),
          z(e, 'class', 'flex flex-justify--between flex-wrap--wrap'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function ju(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="border"></div>\n<div class="border--t"></div>\n<div class="border--b"></div>\n<div class="border--l"></div>\n<div class="border--r"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Eu(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="border-radius padding-xl width-1of3 margin-l bg--eb">border-radius</div> \n    <div class="border-radius-s padding-xl width-1of3 margin-l bg--eb">border-radius-s</div> \n    <div class="border-radius--t padding-xl width-1of3 margin-l bg--eb">border-radius--t</div> \n    <div class="border-radius-s--t padding-xl width-1of3 margin-l bg--eb">border-radius-s--t</div> \n    <div class="border-radius--b padding-xl width-1of3 margin-l bg--eb">border-radius--b</div> \n    <div class="border-radius-s--b padding-xl width-1of3 margin-l bg--eb">border-radius-s--b</div>'),
          z(e, 'class', 'flex flex-justify--between flex-wrap--wrap'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Pu(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="border-radius"></div>\n<div class="border-radius-s"></div>\n<div class="border-radius--t"></div>\n<div class="border-radius-s--t"></div>\n<div class="border-radius--b"></div>\n<div class="border-radius-s--b"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ou(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="flex flex-align--center border border--black padding-xl width-1of3 margin-l">border--black</div> \n    <div class="flex flex-align--center border border--graa1 padding-xl width-1of3 margin-l">border--graa1</div> \n    <div class="flex flex-align--center border border--graa2 padding-xl width-1of3 margin-l">border--graa2</div> \n    <div class="flex flex-align--center border border--graa3 padding-xl width-1of3 margin-l">border--graa3</div> \n    <div class="flex flex-align--center border border--graa4 padding-xl width-1of3 margin-l">border--graa4</div> \n    <div class="flex flex-align--center border border--graa5 padding-xl width-1of3 margin-l">border--graa5</div> \n    <div class="flex flex-align--center border border--graa6 padding-xl width-1of3 margin-l">border--graa6</div> \n    <div class="flex flex-align--center border border--graa7 padding-xl width-1of3 margin-l">border--graa7</div> \n    <div class="flex flex-align--center border border--white padding-xl width-1of3 margin-l">border--white</div>'),
          z(e, 'class', 'flex flex-justify--between flex-wrap--wrap'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Iu(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="border border--black"></div>\n<div class="border border--graa1"></div>\n<div class="border border--graa2"></div>\n<div class="border border--graa3"></div>\n<div class="border border--graa4"></div>\n<div class="border border--graa5"></div>\n<div class="border border--graa6"></div>\n<div class="border border--graa7"></div>\n<div class="border border--white"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Du(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w, k, C, M;
    return (
      (a = new fe({ props: { className: 'bg--graa7', $$slots: { content: [Au] }, $$scope: { ctx: t } } })),
      (l = new Us({ props: { language: 'html', $$slots: { default: [ju] }, $$scope: { ctx: t } } })),
      (u = new fe({ props: { className: 'bg--graa7', $$slots: { content: [Eu] }, $$scope: { ctx: t } } })),
      (g = new Us({ props: { language: 'html', $$slots: { default: [Pu] }, $$scope: { ctx: t } } })),
      (w = new fe({ props: { $$slots: { content: [Ou] }, $$scope: { ctx: t } } })),
      (C = new Us({ props: { language: 'html', $$slots: { default: [Iu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Border'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Border'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            (c = y('h3')),
            (c.textContent = 'Border-radius'),
            (d = T()),
            ft(u.$$.fragment),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            (p = y('h3')),
            (p.textContent = 'Border colors'),
            (m = T()),
            (h = y('p')),
            (h.textContent = 'All border colors available'),
            (x = T()),
            ft(w.$$.fragment),
            (k = T()),
            ft(C.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, b) {
          v(t, e, b),
            v(t, n, b),
            v(t, r, b),
            v(t, s, b),
            gt(a, t, b),
            v(t, o, b),
            gt(l, t, b),
            v(t, i, b),
            v(t, c, b),
            v(t, d, b),
            gt(u, t, b),
            v(t, f, b),
            gt(g, t, b),
            v(t, $, b),
            v(t, p, b),
            v(t, m, b),
            v(t, h, b),
            v(t, x, b),
            gt(w, t, b),
            v(t, k, b),
            gt(C, t, b),
            (M = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), g.$set(o);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), w.$set(i);
          const c = {};
          1 & e && (c.$$scope = { dirty: e, ctx: t }), C.$set(c);
        },
        i(t) {
          M ||
            (lt(a.$$.fragment, t),
            lt(l.$$.fragment, t),
            lt(u.$$.fragment, t),
            lt(g.$$.fragment, t),
            lt(w.$$.fragment, t),
            lt(C.$$.fragment, t),
            (M = !0));
        },
        o(t) {
          it(a.$$.fragment, t),
            it(l.$$.fragment, t),
            it(u.$$.fragment, t),
            it(g.$$.fragment, t),
            it(w.$$.fragment, t),
            it(C.$$.fragment, t),
            (M = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            $t(l, t),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t),
            t && b(f),
            $t(g, t),
            t && b($),
            t && b(p),
            t && b(m),
            t && b(h),
            t && b(x),
            $t(w, t),
            t && b(k),
            $t(C, t);
        },
      }
    );
  }
  function Vu(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--black">color--black</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--black color--white">color--white</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--sport">color--sport</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--eb">color--eb</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--orangedark">color--orangedark</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--nyheder">color--nyheder</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--section">color--section\n      <em>(inherit the color of the section i.e sport)</em></div>'),
          z(e, 'class', 'flex flex-justify--between flex-wrap--wrap'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ru(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="color--black"></div>\n<div class="color--white"></div>\n<div class="color--blue"></div>\n<div class="color--sport"></div>\n<div class="color--orangedark"></div>\n<div class="color--nyheder"></div>\n<div class="color--section"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function qu(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="flex flex--column padding-xl width-1of3 margin-l bg--black">bg--black</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--black">bg--white</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--underholdning">bg--underholdning</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--eb">bg--eb</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--orangedark">bg--orangedark</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--nyheder">bg--nyheder</div> \n    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--section">bg--section\n      <em>(inherit the color of the section i.e sport)</em></div>'),
          z(e, 'class', 'flex flex-justify--between flex-wrap--wrap'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Gu(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="bg--black"></div>\n<div class="bg--white"></div>\n<div class="bg--underholdning"></div>\n<div class="bg--eb"></div>\n<div class="bg--orangedark"></div>\n<div class="bg--nyheder"></div>\n<div class="bg--section"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Wu(t) {
    let e, n, r, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w, k, C, M, F, N, B;
    return (
      (i = new fe({ props: { className: 'bg--graa7', $$slots: { content: [Vu] }, $$scope: { ctx: t } } })),
      (d = new Us({ props: { language: 'html', $$slots: { default: [Ru] }, $$scope: { ctx: t } } })),
      (m = new fe({ props: { className: 'bg--graa7', $$slots: { content: [qu] }, $$scope: { ctx: t } } })),
      (x = new Us({ props: { language: 'html', $$slots: { default: [Gu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Color'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Text color'),
            (a = T()),
            (o = y('p')),
            (o.textContent = 'View all colors available'),
            (l = T()),
            ft(i.$$.fragment),
            (c = T()),
            ft(d.$$.fragment),
            (u = T()),
            (f = y('h3')),
            (f.textContent = 'Background color'),
            (g = T()),
            ($ = y('p')),
            ($.textContent = 'View all colors available'),
            (p = T()),
            ft(m.$$.fragment),
            (h = T()),
            ft(x.$$.fragment),
            (w = T()),
            (k = y('h3')),
            (k.textContent = 'All colors available on ekstrabladet'),
            (C = T()),
            (M = y('object')),
            (M.innerHTML =
              'Error: Embedded data could not be displayed. Visit this link instead: <a href="https://ekstrabladetudvikling.github.io/eb-colors/">eb-colors</a>'),
            z(e, 'class', 'color--eb'),
            z(o, 'class', 'color--red'),
            H(o, 'cursor', 'pointer'),
            z($, 'class', 'color--red'),
            H($, 'cursor', 'pointer'),
            z(k, 'id', 'all-colors-section'),
            z(M, 'data', 'https://ekstrabladetudvikling.github.io/eb-colors/'),
            z(M, 'width', '100%'),
            z(M, 'height', '500'),
            z(M, 'title', 'eb-colors');
        },
        m(t, s) {
          v(t, e, s),
            v(t, n, s),
            v(t, r, s),
            v(t, a, s),
            v(t, o, s),
            v(t, l, s),
            gt(i, t, s),
            v(t, c, s),
            gt(d, t, s),
            v(t, u, s),
            v(t, f, s),
            v(t, g, s),
            v(t, $, s),
            v(t, p, s),
            gt(m, t, s),
            v(t, h, s),
            gt(x, t, s),
            v(t, w, s),
            v(t, k, s),
            v(t, C, s),
            v(t, M, s),
            (F = !0),
            N || ((B = [L(o, 'click', Uu), L($, 'click', Uu)]), (N = !0));
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), d.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), m.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), x.$set(a);
        },
        i(t) {
          F || (lt(i.$$.fragment, t), lt(d.$$.fragment, t), lt(m.$$.fragment, t), lt(x.$$.fragment, t), (F = !0));
        },
        o(t) {
          it(i.$$.fragment, t), it(d.$$.fragment, t), it(m.$$.fragment, t), it(x.$$.fragment, t), (F = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(a),
            t && b(o),
            t && b(l),
            $t(i, t),
            t && b(c),
            $t(d, t),
            t && b(u),
            t && b(f),
            t && b(g),
            t && b($),
            t && b(p),
            $t(m, t),
            t && b(h),
            $t(x, t),
            t && b(w),
            t && b(k),
            t && b(C),
            t && b(M),
            (N = !1),
            s(B);
        },
      }
    );
  }
  function Uu() {
    document.getElementById('all-colors-section').scrollIntoView();
  }
  function Yu(t) {
    let e;
    return {
      c() {
        (e = y('i')), z(e, 'class', 'fas fa-cubes');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Zu(t) {
    let e;
    return {
      c() {
        (e = y('i')), z(e, 'class', 'fas fa-code');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Xu(t) {
    let e, n, r, s;
    return (
      (e = new ws({ props: { $$slots: { default: [Yu] }, $$scope: { ctx: t } } })),
      (r = new ws({ props: { $$slots: { default: [Zu] }, $$scope: { ctx: t } } })),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment);
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), gt(r, t, a), (s = !0);
        },
        p(t, n) {
          const s = {};
          2 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const a = {};
          2 & n && (a.$$scope = { dirty: n, ctx: t }), r.$set(a);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t);
        },
      }
    );
  }
  function Ju(e) {
    let n, r, s, a, o, l, i, c;
    return (
      (n = new jt({ props: { dataTheme: 'lightmode', tabs: e[0] } })),
      (s = new jt({ props: { dataTheme: 'darkmode', tabs: e[0] } })),
      {
        c() {
          ft(n.$$.fragment),
            (r = T()),
            ft(s.$$.fragment),
            (a = T()),
            (o = y('div')),
            (o.innerHTML = '<p>I&#39;m now in lightmode</p>'),
            (l = T()),
            (i = y('div')),
            (i.innerHTML = '<p>I&#39;m now in darkmode</p>'),
            z(o, 'data-theme', 'lightmode'),
            z(i, 'data-theme', 'darkmode');
        },
        m(t, e) {
          gt(n, t, e), v(t, r, e), gt(s, t, e), v(t, a, e), v(t, o, e), v(t, l, e), v(t, i, e), (c = !0);
        },
        p: t,
        i(t) {
          c || (lt(n.$$.fragment, t), lt(s.$$.fragment, t), (c = !0));
        },
        o(t) {
          it(n.$$.fragment, t), it(s.$$.fragment, t), (c = !1);
        },
        d(t) {
          $t(n, t), t && b(r), $t(s, t), t && b(a), t && b(o), t && b(l), t && b(i);
        },
      }
    );
  }
  function Ku(e) {
    let n, r, s, a, o, l, i, c;
    return (
      (n = new Us({ props: { language: 'html', source: '<Accordion dataTheme="lightmode" {tabs} />' } })),
      (s = new Us({ props: { language: 'html', source: '<Accordion dataTheme="darkmode" {tabs} />' } })),
      (o = new Us({
        props: { language: 'html', source: '<div data-theme="lightmode"><p>I\'m now in lightmode</p></div>' },
      })),
      (i = new Us({
        props: { language: 'html', source: '<div data-theme="darkmode"><p>I\'m now in darkmode</p></div>' },
      })),
      {
        c() {
          ft(n.$$.fragment), (r = T()), ft(s.$$.fragment), (a = T()), ft(o.$$.fragment), (l = T()), ft(i.$$.fragment);
        },
        m(t, e) {
          gt(n, t, e), v(t, r, e), gt(s, t, e), v(t, a, e), gt(o, t, e), v(t, l, e), gt(i, t, e), (c = !0);
        },
        p: t,
        i(t) {
          c || (lt(n.$$.fragment, t), lt(s.$$.fragment, t), lt(o.$$.fragment, t), lt(i.$$.fragment, t), (c = !0));
        },
        o(t) {
          it(n.$$.fragment, t), it(s.$$.fragment, t), it(o.$$.fragment, t), it(i.$$.fragment, t), (c = !1);
        },
        d(t) {
          $t(n, t), t && b(r), $t(s, t), t && b(a), $t(o, t), t && b(l), $t(i, t);
        },
      }
    );
  }
  function Qu(t) {
    let e, n, r, s, a, o, l;
    return (
      (n = new zs({ props: { $$slots: { default: [Xu] }, $$scope: { ctx: t } } })),
      (s = new Ts({ props: { $$slots: { default: [Ju] }, $$scope: { ctx: t } } })),
      (o = new Ts({ props: { $$slots: { default: [Ku] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('div')),
            ft(n.$$.fragment),
            (r = T()),
            ft(s.$$.fragment),
            (a = T()),
            ft(o.$$.fragment),
            z(e, 'class', 'flex flex-justify--end width-1of1 margin-m--b');
        },
        m(t, i) {
          v(t, e, i), gt(n, e, null), v(t, r, i), gt(s, t, i), v(t, a, i), gt(o, t, i), (l = !0);
        },
        p(t, e) {
          const r = {};
          2 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
          const a = {};
          2 & e && (a.$$scope = { dirty: e, ctx: t }), s.$set(a);
          const l = {};
          2 & e && (l.$$scope = { dirty: e, ctx: t }), o.$set(l);
        },
        i(t) {
          l || (lt(n.$$.fragment, t), lt(s.$$.fragment, t), lt(o.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(n.$$.fragment, t), it(s.$$.fragment, t), it(o.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && b(e), $t(n), t && b(r), $t(s, t), t && b(a), $t(o, t);
        },
      }
    );
  }
  function tf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, w, k;
    return (
      ($ = new xs({ props: { $$slots: { default: [Qu] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('div')),
            (n = y('h1')),
            (n.textContent = 'Data Theme'),
            (r = T()),
            (s = y('h3')),
            (s.textContent = 'Anvendelse af data theme'),
            (a = T()),
            (o = y('p')),
            (o.innerHTML =
              'Farve tema anvendes ved tilføjelse af data-attribute ved navn dataTheme: <code>dataTheme=&quot;lightmode | darkmode&quot;</code>'),
            (l = T()),
            (i = y('p')),
            (i.innerHTML =
              '<code>dataTheme</code> kan anvendes på udvalgte komponenter, som kan ses nederst under <b>overblik</b>'),
            (c = T()),
            (d = y('p')),
            (d.innerHTML =
              '<b>OBS:</b> anvendes dataTheme direkte på et html-element skal det anvendes på følgende måde:\n    <code>data-theme=&quot;lightmode&quot;</code>'),
            (u = T()),
            (f = y('h3')),
            (f.textContent = 'Eksempler på data theme'),
            (g = T()),
            ft($.$$.fragment),
            (p = T()),
            (m = y('h3')),
            (m.textContent = 'Overblik over komponenter der kan anvende data theme'),
            (h = T()),
            (w = y('div')),
            (w.innerHTML =
              '<div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m fontweight-bold">Component</div> \n      <div class="width-1of3 padding-m fontweight-bold">Dokumentation</div> \n      <div class="width-1of3 padding-m fontweight-bold">dataTheme</div></div> \n    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m">Accordion</div> \n      <div class="width-1of3 padding-m"><a href="#/components/accordion">Accordion</a></div> \n      <div class="width-1of3 padding-m"><p class="margin-none"><i class="fas fa-circle color--white"></i> lightmode</p> \n        <p class="margin-none"><i class="fas fa-circle color--black"></i> darkmode</p></div></div> \n    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m">Card (Card-mode)</div> \n      <div class="width-1of3 padding-m"><a href="#/components/card">Card</a></div> \n      <div class="width-1of3 padding-m"><p class="margin-none"><i class="fas fa-circle color--white"></i> lightmode</p> \n        <p class="margin-none"><i class="fas fa-circle color--black"></i> darkmode</p></div></div>'),
            z(n, 'class', 'color--eb'),
            z(w, 'class', 'grid-width--large'),
            z(e, 'class', 'grid-width--large');
        },
        m(t, b) {
          v(t, e, b),
            x(e, n),
            x(e, r),
            x(e, s),
            x(e, a),
            x(e, o),
            x(e, l),
            x(e, i),
            x(e, c),
            x(e, d),
            x(e, u),
            x(e, f),
            x(e, g),
            gt($, e, null),
            x(e, p),
            x(e, m),
            x(e, h),
            x(e, w),
            (k = !0);
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.$$scope = { dirty: e, ctx: t }), $.$set(n);
        },
        i(t) {
          k || (lt($.$$.fragment, t), (k = !0));
        },
        o(t) {
          it($.$$.fragment, t), (k = !1);
        },
        d(t) {
          t && b(e), $t($);
        },
      }
    );
  }
  function ef(t) {
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
  function nf(e) {
    let n;
    return {
      c() {
        n = C('<div class="flex"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function rf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w;
    return {
      c() {
        (e = y('strong')),
          (e.textContent = 'flex flex-justify--start'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (s = T()),
          (a = y('strong')),
          (a.textContent = 'flex flex-justify--end'),
          (o = T()),
          (l = y('div')),
          (l.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (i = T()),
          (c = y('strong')),
          (c.textContent = 'flex flex-justify--center'),
          (d = T()),
          (u = y('div')),
          (u.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (f = T()),
          (g = y('strong')),
          (g.textContent = 'flex flex-justify--around'),
          ($ = T()),
          (p = y('div')),
          (p.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (m = T()),
          (h = y('strong')),
          (h.textContent = 'flex flex-justify--between'),
          (x = T()),
          (w = y('div')),
          (w.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          z(e, 'class', 'margin-m'),
          z(r, 'class', 'flex flex-justify--start bg--eb'),
          z(a, 'class', 'margin-m margin-l--t'),
          z(l, 'class', 'flex flex-justify--end bg--eb'),
          z(c, 'class', 'margin-m margin-l--t'),
          z(u, 'class', 'flex flex-justify--center bg--eb'),
          z(g, 'class', 'margin-m margin-l--t'),
          z(p, 'class', 'flex flex-justify--around bg--eb'),
          z(h, 'class', 'margin-m margin-l--t'),
          z(w, 'class', 'flex flex-justify--between bg--eb');
      },
      m(t, b) {
        v(t, e, b),
          v(t, n, b),
          v(t, r, b),
          v(t, s, b),
          v(t, a, b),
          v(t, o, b),
          v(t, l, b),
          v(t, i, b),
          v(t, c, b),
          v(t, d, b),
          v(t, u, b),
          v(t, f, b),
          v(t, g, b),
          v(t, $, b),
          v(t, p, b),
          v(t, m, b),
          v(t, h, b),
          v(t, x, b),
          v(t, w, b);
      },
      d(t) {
        t && b(e),
          t && b(n),
          t && b(r),
          t && b(s),
          t && b(a),
          t && b(o),
          t && b(l),
          t && b(i),
          t && b(c),
          t && b(d),
          t && b(u),
          t && b(f),
          t && b(g),
          t && b($),
          t && b(p),
          t && b(m),
          t && b(h),
          t && b(x),
          t && b(w);
      },
    };
  }
  function sf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex flex-justify--start"></div>\n<div class="flex flex-justify--end"></div>\n<div class="flex flex-justify--center"></div>\n<div class="flex flex-justify--around"></div>\n<div class="flex flex-justify--between"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function af(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p;
    return {
      c() {
        (e = y('strong')),
          (e.textContent = 'flex flex-align--start'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (s = T()),
          (a = y('strong')),
          (a.textContent = 'flex flex-align--end'),
          (o = T()),
          (l = y('div')),
          (l.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (i = T()),
          (c = y('strong')),
          (c.textContent = 'flex flex-align--center'),
          (d = T()),
          (u = y('div')),
          (u.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (f = T()),
          (g = y('strong')),
          (g.textContent = 'flex flex-align--stretch'),
          ($ = T()),
          (p = y('div')),
          (p.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          z(e, 'class', 'margin-m'),
          z(r, 'class', 'flex flex-align--start bg--eb'),
          H(r, 'height', '100px'),
          z(a, 'class', 'margin-m margin-l--t'),
          z(l, 'class', 'flex flex-align--end bg--eb'),
          H(l, 'height', '100px'),
          z(c, 'class', 'margin-m margin-l--t'),
          z(u, 'class', 'flex flex-align--center bg--eb'),
          H(u, 'height', '100px'),
          z(g, 'class', 'margin-m margin-l--t'),
          z(p, 'class', 'flex flex-align--stretch bg--eb'),
          H(p, 'height', '100px');
      },
      m(t, m) {
        v(t, e, m),
          v(t, n, m),
          v(t, r, m),
          v(t, s, m),
          v(t, a, m),
          v(t, o, m),
          v(t, l, m),
          v(t, i, m),
          v(t, c, m),
          v(t, d, m),
          v(t, u, m),
          v(t, f, m),
          v(t, g, m),
          v(t, $, m),
          v(t, p, m);
      },
      d(t) {
        t && b(e),
          t && b(n),
          t && b(r),
          t && b(s),
          t && b(a),
          t && b(o),
          t && b(l),
          t && b(i),
          t && b(c),
          t && b(d),
          t && b(u),
          t && b(f),
          t && b(g),
          t && b($),
          t && b(p);
      },
    };
  }
  function of(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex flex-align--start"></div>\n<div class="flex flex-align--end"></div>\n<div class="flex flex-align--center"></div>\n<div class="flex flex-align--stretch"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function lf(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          z(e, 'class', 'flex flex--center bg--eb'),
          H(e, 'height', '100px');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function cf(e) {
    let n;
    return {
      c() {
        n = C('<div class="flex flex--center"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function df(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p;
    return {
      c() {
        (e = y('strong')),
          (e.textContent = 'flex flex--column'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (s = T()),
          (a = y('strong')),
          (a.textContent = 'flex flex--column-reverse'),
          (o = T()),
          (l = y('div')),
          (l.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (i = T()),
          (c = y('strong')),
          (c.textContent = 'flex'),
          (d = T()),
          (u = y('div')),
          (u.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (f = T()),
          (g = y('strong')),
          (g.textContent = 'flex flex-row--reverse'),
          ($ = T()),
          (p = y('div')),
          (p.innerHTML =
            '<div class="bg--graa4 padding-l">Flex item 1</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          z(e, 'class', 'margin-m'),
          z(r, 'class', 'flex flex--column'),
          z(a, 'class', 'margin-m margin-l--t'),
          z(l, 'class', 'flex flex--column-reverse'),
          z(c, 'class', 'margin-m margin-l--t'),
          z(u, 'class', 'flex bg--eb'),
          z(g, 'class', 'margin-m margin-l--t'),
          z(p, 'class', 'flex flex-row--reverse bg--eb');
      },
      m(t, m) {
        v(t, e, m),
          v(t, n, m),
          v(t, r, m),
          v(t, s, m),
          v(t, a, m),
          v(t, o, m),
          v(t, l, m),
          v(t, i, m),
          v(t, c, m),
          v(t, d, m),
          v(t, u, m),
          v(t, f, m),
          v(t, g, m),
          v(t, $, m),
          v(t, p, m);
      },
      d(t) {
        t && b(e),
          t && b(n),
          t && b(r),
          t && b(s),
          t && b(a),
          t && b(o),
          t && b(l),
          t && b(i),
          t && b(c),
          t && b(d),
          t && b(u),
          t && b(f),
          t && b(g),
          t && b($),
          t && b(p);
      },
    };
  }
  function uf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex flex--column"></div>\n<div class="flex flex--column--reverse"></div>\n<div class="flex"></div>\n<div class="flex flex-row--reverse"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ff(t) {
    let e, n, r, s, a, o, l;
    return {
      c() {
        (e = y('strong')),
          (e.textContent = 'flex'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            '<div class="bg--graa4 width-1of3 padding-l">Flex item 1</div> \n    <div class="bg--graa3 width-1of3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 width-1of3 padding-l">Flex item 3</div> \n    <div class="bg--graa1 width-1of3 padding-l">Flex item 4</div>'),
          (s = T()),
          (a = y('strong')),
          (a.textContent = 'flex flex-wrap--wrap'),
          (o = T()),
          (l = y('div')),
          (l.innerHTML =
            '<div class="bg--graa4 width-1of3 padding-l">Flex item 1</div> \n    <div class="bg--graa3 width-1of3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 width-1of3 padding-l">Flex item 3</div> \n    <div class="bg--graa1 width-1of3 padding-l">Flex item 4</div>'),
          z(e, 'class', 'margin-m'),
          z(r, 'class', 'flex'),
          z(a, 'class', 'margin-m margin-l--t'),
          z(l, 'class', 'flex flex-wrap--wrap bg--eb');
      },
      m(t, i) {
        v(t, e, i), v(t, n, i), v(t, r, i), v(t, s, i), v(t, a, i), v(t, o, i), v(t, l, i);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r), t && b(s), t && b(a), t && b(o), t && b(l);
      },
    };
  }
  function gf(e) {
    let n;
    return {
      c() {
        n = C('<div class="flex"></div>\n<div class="flex flex-wrap--wrap"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function $f(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="flex-item--start bg--graa4 width-1of3 padding-l">flex-item--start</div> \n    <div class="flex-item--end bg--graa2 width-1of3 padding-l">flex-item--end</div> \n    <div class="flex-item--center bg--graa3 width-1of3 padding-l">flex-item--center</div> \n    <div class="flex-item--stretch bg--graa1 width-1of3 padding-l">flex-item--stretch</div>'),
          z(e, 'class', 'flex bg--eb'),
          H(e, 'height', '100px');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function pf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex">\n  <div class="flex-item--start"></div>\n  <div class="flex-item--end"></div>\n  <div class="flex-item--center"></div>\n  <div class="flex-item--stretch"></div>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function mf(t) {
    let e, n, r, s, a, o, l;
    return {
      c() {
        (e = y('strong')),
          (e.textContent = 'Grow'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            '<div class="flex-item--grow bg--graa4 padding-l">flex-item--grow</div> \n    <div class="bg--graa3 padding-l">Flex item 2</div> \n    <div class="bg--graa2 padding-l">Flex item 3</div>'),
          (s = T()),
          (a = y('strong')),
          (a.textContent = 'No shrink'),
          (o = T()),
          (l = y('div')),
          (l.innerHTML =
            '<div class="flex-item--noshrink width-2of3 bg--graa4 padding-l">flex-item--noshrink width-2of3</div> \n    <div class="bg--graa3 width-1of3 padding-l">width-1of3</div> \n    <div class="bg--graa2 width-1of3 padding-l">width-1of3</div>'),
          z(e, 'class', 'margin-m margin-l--t'),
          z(r, 'class', 'flex bg--eb'),
          z(a, 'class', 'margin-m margin-l--t'),
          z(l, 'class', 'flex bg--eb');
      },
      m(t, i) {
        v(t, e, i), v(t, n, i), v(t, r, i), v(t, s, i), v(t, a, i), v(t, o, i), v(t, l, i);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r), t && b(s), t && b(a), t && b(o), t && b(l);
      },
    };
  }
  function hf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="flex">\n  <div class="flex-item--grow"></div>\n  <div class="flex-item--noshrink"></div>\n</div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function xf(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      w,
      k,
      C,
      M,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      G,
      W,
      U,
      Y,
      Z,
      X,
      J,
      K,
      Q,
      tt,
      et,
      nt,
      rt,
      st,
      at,
      ot,
      ct,
      dt,
      ut,
      pt,
      mt,
      ht,
      xt,
      vt,
      bt;
    return (
      (a = new Us({ props: { language: 'html', $$slots: { default: [nf] }, $$scope: { ctx: t } } })),
      (u = new fe({ props: { className: 'bg--graa7', $$slots: { default: [rf] }, $$scope: { ctx: t } } })),
      (g = new Us({ props: { language: 'html', $$slots: { default: [sf] }, $$scope: { ctx: t } } })),
      (w = new fe({ props: { className: 'bg--graa7', $$slots: { default: [af] }, $$scope: { ctx: t } } })),
      (C = new Us({ props: { language: 'html', $$slots: { default: [of] }, $$scope: { ctx: t } } })),
      (H = new fe({ props: { className: 'bg--graa7', $$slots: { default: [lf] }, $$scope: { ctx: t } } })),
      (_ = new Us({ props: { language: 'html', $$slots: { default: [cf] }, $$scope: { ctx: t } } })),
      (I = new fe({ props: { className: 'bg--graa7', $$slots: { default: [df] }, $$scope: { ctx: t } } })),
      (V = new Us({ props: { language: 'html', $$slots: { default: [uf] }, $$scope: { ctx: t } } })),
      (Y = new fe({ props: { className: 'bg--graa7', $$slots: { default: [ff] }, $$scope: { ctx: t } } })),
      (X = new Us({ props: { language: 'html', $$slots: { default: [gf] }, $$scope: { ctx: t } } })),
      (nt = new fe({ props: { className: 'bg--graa7', $$slots: { default: [$f] }, $$scope: { ctx: t } } })),
      (st = new Us({ props: { language: 'html', $$slots: { default: [pf] }, $$scope: { ctx: t } } })),
      (ht = new fe({ props: { className: 'bg--graa7', $$slots: { default: [mf] }, $$scope: { ctx: t } } })),
      (vt = new Us({ props: { language: 'html', $$slots: { default: [hf] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Flex'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Flex container'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            (l = y('h3')),
            (l.textContent = 'Justify content'),
            (i = T()),
            (c = y('p')),
            (c.innerHTML = 'Justify content anvendes til <i>horizontal</i> placering af child elementer.'),
            (d = T()),
            ft(u.$$.fragment),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            (p = y('h3')),
            (p.textContent = 'Align items'),
            (m = T()),
            (h = y('p')),
            (h.innerHTML = 'Align items anvendes til <i>veritcal</i> placering af child elementer.'),
            (x = T()),
            ft(w.$$.fragment),
            (k = T()),
            ft(C.$$.fragment),
            (M = T()),
            (L = y('h3')),
            (L.textContent = 'Flex center'),
            (F = T()),
            (N = y('p')),
            (N.innerHTML = 'Flex center centrere alle child elementer både <i>horizontalt</i> og <i>vertical</i>.'),
            (B = T()),
            ft(H.$$.fragment),
            (S = T()),
            ft(_.$$.fragment),
            (A = T()),
            (j = y('h3')),
            (j.textContent = 'Directions'),
            (E = T()),
            (P = y('p')),
            (P.textContent = 'Directions bestemmer rækkefølgen for visning af child elementer.'),
            (O = T()),
            ft(I.$$.fragment),
            (D = T()),
            ft(V.$$.fragment),
            (R = T()),
            (q = y('h3')),
            (q.textContent = 'Wrap'),
            (G = T()),
            (W = y('p')),
            (W.textContent =
              'Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines\n  istedet for one-line.'),
            (U = T()),
            ft(Y.$$.fragment),
            (Z = T()),
            ft(X.$$.fragment),
            (J = T()),
            (K = y('h2')),
            (K.textContent = 'Flex items'),
            (Q = T()),
            (tt = y('h3')),
            (tt.textContent = 'Align self'),
            (et = T()),
            ft(nt.$$.fragment),
            (rt = T()),
            ft(st.$$.fragment),
            (at = T()),
            (ot = y('h3')),
            (ot.textContent = 'Grow and shrik'),
            (ct = T()),
            (dt = y('p')),
            (dt.innerHTML =
              '<code>flex-item--grow</code> sørger for at child element udfylder den tilbageværende plads i flex containeren.'),
            (ut = T()),
            (pt = y('p')),
            (pt.innerHTML =
              '<code>flex-item--noshrink</code> sørger for at et child element altid vil have den samme størrelse også på scalering.'),
            (mt = T()),
            ft(ht.$$.fragment),
            (xt = T()),
            ft(vt.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, b) {
          v(t, e, b),
            v(t, n, b),
            v(t, r, b),
            v(t, s, b),
            gt(a, t, b),
            v(t, o, b),
            v(t, l, b),
            v(t, i, b),
            v(t, c, b),
            v(t, d, b),
            gt(u, t, b),
            v(t, f, b),
            gt(g, t, b),
            v(t, $, b),
            v(t, p, b),
            v(t, m, b),
            v(t, h, b),
            v(t, x, b),
            gt(w, t, b),
            v(t, k, b),
            gt(C, t, b),
            v(t, M, b),
            v(t, L, b),
            v(t, F, b),
            v(t, N, b),
            v(t, B, b),
            gt(H, t, b),
            v(t, S, b),
            gt(_, t, b),
            v(t, A, b),
            v(t, j, b),
            v(t, E, b),
            v(t, P, b),
            v(t, O, b),
            gt(I, t, b),
            v(t, D, b),
            gt(V, t, b),
            v(t, R, b),
            v(t, q, b),
            v(t, G, b),
            v(t, W, b),
            v(t, U, b),
            gt(Y, t, b),
            v(t, Z, b),
            gt(X, t, b),
            v(t, J, b),
            v(t, K, b),
            v(t, Q, b),
            v(t, tt, b),
            v(t, et, b),
            gt(nt, t, b),
            v(t, rt, b),
            gt(st, t, b),
            v(t, at, b),
            v(t, ot, b),
            v(t, ct, b),
            v(t, dt, b),
            v(t, ut, b),
            v(t, pt, b),
            v(t, mt, b),
            gt(ht, t, b),
            v(t, xt, b),
            gt(vt, t, b),
            (bt = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), u.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), w.$set(o);
          const l = {};
          1 & e && (l.$$scope = { dirty: e, ctx: t }), C.$set(l);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), H.$set(i);
          const c = {};
          1 & e && (c.$$scope = { dirty: e, ctx: t }), _.$set(c);
          const d = {};
          1 & e && (d.$$scope = { dirty: e, ctx: t }), I.$set(d);
          const f = {};
          1 & e && (f.$$scope = { dirty: e, ctx: t }), V.$set(f);
          const $ = {};
          1 & e && ($.$$scope = { dirty: e, ctx: t }), Y.$set($);
          const p = {};
          1 & e && (p.$$scope = { dirty: e, ctx: t }), X.$set(p);
          const m = {};
          1 & e && (m.$$scope = { dirty: e, ctx: t }), nt.$set(m);
          const h = {};
          1 & e && (h.$$scope = { dirty: e, ctx: t }), st.$set(h);
          const x = {};
          1 & e && (x.$$scope = { dirty: e, ctx: t }), ht.$set(x);
          const v = {};
          1 & e && (v.$$scope = { dirty: e, ctx: t }), vt.$set(v);
        },
        i(t) {
          bt ||
            (lt(a.$$.fragment, t),
            lt(u.$$.fragment, t),
            lt(g.$$.fragment, t),
            lt(w.$$.fragment, t),
            lt(C.$$.fragment, t),
            lt(H.$$.fragment, t),
            lt(_.$$.fragment, t),
            lt(I.$$.fragment, t),
            lt(V.$$.fragment, t),
            lt(Y.$$.fragment, t),
            lt(X.$$.fragment, t),
            lt(nt.$$.fragment, t),
            lt(st.$$.fragment, t),
            lt(ht.$$.fragment, t),
            lt(vt.$$.fragment, t),
            (bt = !0));
        },
        o(t) {
          it(a.$$.fragment, t),
            it(u.$$.fragment, t),
            it(g.$$.fragment, t),
            it(w.$$.fragment, t),
            it(C.$$.fragment, t),
            it(H.$$.fragment, t),
            it(_.$$.fragment, t),
            it(I.$$.fragment, t),
            it(V.$$.fragment, t),
            it(Y.$$.fragment, t),
            it(X.$$.fragment, t),
            it(nt.$$.fragment, t),
            it(st.$$.fragment, t),
            it(ht.$$.fragment, t),
            it(vt.$$.fragment, t),
            (bt = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            t && b(l),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t),
            t && b(f),
            $t(g, t),
            t && b($),
            t && b(p),
            t && b(m),
            t && b(h),
            t && b(x),
            $t(w, t),
            t && b(k),
            $t(C, t),
            t && b(M),
            t && b(L),
            t && b(F),
            t && b(N),
            t && b(B),
            $t(H, t),
            t && b(S),
            $t(_, t),
            t && b(A),
            t && b(j),
            t && b(E),
            t && b(P),
            t && b(O),
            $t(I, t),
            t && b(D),
            $t(V, t),
            t && b(R),
            t && b(q),
            t && b(G),
            t && b(W),
            t && b(U),
            $t(Y, t),
            t && b(Z),
            $t(X, t),
            t && b(J),
            t && b(K),
            t && b(Q),
            t && b(tt),
            t && b(et),
            $t(nt, t),
            t && b(rt),
            $t(st, t),
            t && b(at),
            t && b(ot),
            t && b(ct),
            t && b(dt),
            t && b(ut),
            t && b(pt),
            t && b(mt),
            $t(ht, t),
            t && b(xt),
            $t(vt, t);
        },
      }
    );
  }
  function vf(t) {
    let e, n, r;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<strong>.ff-primary:</strong> \n    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p>'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            '<strong>.ff-secondary:</strong> \n    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p>'),
          z(e, 'class', 'ff-primary margin-l--tb'),
          z(r, 'class', 'ff-secondary');
      },
      m(t, s) {
        v(t, e, s), v(t, n, s), v(t, r, s);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r);
      },
    };
  }
  function bf(e) {
    let n;
    return {
      c() {
        n = C('<div class="ff-primary"></div>\n<div class="ff-secondary"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function wf(t) {
    let e, n, r, s, a;
    return {
      c() {
        (e = y('p')),
          (e.textContent = 'fontweight-normal'),
          (n = T()),
          (r = y('p')),
          (r.textContent = 'fontweight-bold'),
          (s = T()),
          (a = y('p')),
          (a.textContent = 'fontweight-bolder'),
          z(e, 'class', 'fontweight-normal'),
          z(r, 'class', 'fontweight-bold'),
          z(a, 'class', 'fontweight-bolder');
      },
      m(t, o) {
        v(t, e, o), v(t, n, o), v(t, r, o), v(t, s, o), v(t, a, o);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r), t && b(s), t && b(a);
      },
    };
  }
  function yf(e) {
    let n;
    return {
      c() {
        n = C('<p class="fontweight-normal"></p>\n<p class="fontweight-bold"></p>\n<p class="fontweight-bolder"></p>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function kf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            'fontsize-xxsmall = .625rem ~ 10px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (n = T()),
          (r = y('div')),
          (r.innerHTML =
            'fontsize-xsmall = .75rem ~ 12px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (s = T()),
          (a = y('div')),
          (a.innerHTML =
            'fontsize-small = .875rem ~ 14px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (o = T()),
          (l = y('div')),
          (l.innerHTML =
            'fontsize-medium = 1rem ~ 16px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (i = T()),
          (c = y('div')),
          (c.innerHTML =
            'fontsize-large = 1.125rem ~ 18px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (d = T()),
          (u = y('div')),
          (u.innerHTML =
            'fontsize-xlarge = 1.25rem ~ 20px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (f = T()),
          (g = y('div')),
          (g.innerHTML =
            'fontsize-xxlarge = 1.875rem ~ 30px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          ($ = T()),
          (p = y('div')),
          (p.innerHTML =
            'fontsize-xxxlarge = 2.25rem ~ 36px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          (m = T()),
          (h = y('div')),
          (h.innerHTML =
            'fontsize-xxxxlarge = 3.125rem ~ 50px;\n    <div class="fontsize-smaller">fontsize-smaller</div> \n    <div class="fontsize-larger">fontsize-larger</div>'),
          z(e, 'class', 'fontsize-xxsmall padding-m--b'),
          z(r, 'class', 'fontsize-xsmall padding-m--tb'),
          z(a, 'class', 'fontsize-small padding-m--tb'),
          z(l, 'class', 'fontsize-medium padding-m--tb'),
          z(c, 'class', 'fontsize-large padding-m--tb'),
          z(u, 'class', 'fontsize-xlarge padding-m--tb'),
          z(g, 'class', 'fontsize-xxlarge padding-m--tb'),
          z(p, 'class', 'fontsize-xxxlarge padding-m--tb'),
          z(h, 'class', 'fontsize-xxxxlarge padding-m--t');
      },
      m(t, x) {
        v(t, e, x),
          v(t, n, x),
          v(t, r, x),
          v(t, s, x),
          v(t, a, x),
          v(t, o, x),
          v(t, l, x),
          v(t, i, x),
          v(t, c, x),
          v(t, d, x),
          v(t, u, x),
          v(t, f, x),
          v(t, g, x),
          v(t, $, x),
          v(t, p, x),
          v(t, m, x),
          v(t, h, x);
      },
      d(t) {
        t && b(e),
          t && b(n),
          t && b(r),
          t && b(s),
          t && b(a),
          t && b(o),
          t && b(l),
          t && b(i),
          t && b(c),
          t && b(d),
          t && b(u),
          t && b(f),
          t && b(g),
          t && b($),
          t && b(p),
          t && b(m),
          t && b(h);
      },
    };
  }
  function Cf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="fontsize-xxsmall"></div>\n<div class="fontsize-xsmall"></div>\n<div class="fontsize-small"></div>\n<div class="fontsize-medium"></div>\n<div class="fontsize-large"></div>\n<div class="fontsize-xlarge"></div>\n<div class="fontsize-xxlarge"></div>\n<div class="fontsize-xxxlarge"></div>\n<div class="fontsize-xxxxlarge"></div>\n\n<div class="fontsize-smaller"></div>\n<div class="fontsize-larger"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Tf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w, k, C, M, L, F, N, B, H;
    return {
      c() {
        (e = y('h1')),
          (e.textContent = 'h1'),
          (n = T()),
          (r = y('h2')),
          (r.textContent = 'h2'),
          (s = T()),
          (a = y('h3')),
          (a.textContent = 'h3'),
          (o = T()),
          (l = y('h4')),
          (l.textContent = 'h4'),
          (i = T()),
          (c = y('h5')),
          (c.textContent = 'h5'),
          (d = T()),
          (u = y('h6')),
          (u.textContent = 'h6'),
          (f = T()),
          (g = y('p')),
          (g.textContent = 'fs-ads'),
          ($ = T()),
          (p = y('p')),
          (p.textContent = 'fs-bodytext'),
          (m = T()),
          (h = y('p')),
          (h.textContent = 'fs-caption'),
          (x = T()),
          (w = y('p')),
          (w.textContent = 'fs-quote'),
          (k = T()),
          (C = y('p')),
          (C.textContent = 'fs-showmore'),
          (M = T()),
          (L = y('p')),
          (L.textContent = 'fs-subtitle'),
          (F = T()),
          (N = y('p')),
          (N.textContent = 'fs-timestamp'),
          (B = T()),
          (H = y('p')),
          (H.textContent = 'fs-title'),
          z(g, 'class', 'fs-ads'),
          z(p, 'class', 'fs-bodytext'),
          z(h, 'class', 'fs-caption'),
          z(w, 'class', 'fs-quote'),
          z(C, 'class', 'fs-showmore'),
          z(L, 'class', 'fs-subtitle'),
          z(N, 'class', 'fs-timestamp'),
          z(H, 'class', 'fs-title');
      },
      m(t, b) {
        v(t, e, b),
          v(t, n, b),
          v(t, r, b),
          v(t, s, b),
          v(t, a, b),
          v(t, o, b),
          v(t, l, b),
          v(t, i, b),
          v(t, c, b),
          v(t, d, b),
          v(t, u, b),
          v(t, f, b),
          v(t, g, b),
          v(t, $, b),
          v(t, p, b),
          v(t, m, b),
          v(t, h, b),
          v(t, x, b),
          v(t, w, b),
          v(t, k, b),
          v(t, C, b),
          v(t, M, b),
          v(t, L, b),
          v(t, F, b),
          v(t, N, b),
          v(t, B, b),
          v(t, H, b);
      },
      d(t) {
        t && b(e),
          t && b(n),
          t && b(r),
          t && b(s),
          t && b(a),
          t && b(o),
          t && b(l),
          t && b(i),
          t && b(c),
          t && b(d),
          t && b(u),
          t && b(f),
          t && b(g),
          t && b($),
          t && b(p),
          t && b(m),
          t && b(h),
          t && b(x),
          t && b(w),
          t && b(k),
          t && b(C),
          t && b(M),
          t && b(L),
          t && b(F),
          t && b(N),
          t && b(B),
          t && b(H);
      },
    };
  }
  function Mf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w, k, C, M, L, F, N, B, H, S, _, A;
    return (
      (a = new fe({
        props: { className: 'bg--graa7 padding-l--rl', $$slots: { default: [vf] }, $$scope: { ctx: t } },
      })),
      (l = new Us({ props: { language: 'html', $$slots: { default: [bf] }, $$scope: { ctx: t } } })),
      (u = new fe({
        props: { className: 'bg--graa7 padding-l--rl', $$slots: { default: [wf] }, $$scope: { ctx: t } },
      })),
      (g = new Us({ props: { language: 'html', $$slots: { default: [yf] }, $$scope: { ctx: t } } })),
      (L = new fe({ props: { className: 'bg--graa7 padding-l', $$slots: { default: [kf] }, $$scope: { ctx: t } } })),
      (N = new Us({ props: { language: 'html', $$slots: { default: [Cf] }, $$scope: { ctx: t } } })),
      (_ = new fe({
        props: { className: 'bg--graa7 padding-l--rl padding-l--t', $$slots: { default: [Tf] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Fonts'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Font family'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            (c = y('h3')),
            (c.textContent = 'Font-weight'),
            (d = T()),
            ft(u.$$.fragment),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            (p = y('h3')),
            (p.textContent = 'Font-size'),
            (m = T()),
            (h = y('p')),
            (h.textContent = 'Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.'),
            (x = T()),
            (w = y('p')),
            (w.textContent =
              'Rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden'),
            (k = T()),
            (C = y('p')),
            (C.innerHTML =
              'Der er både en <u>larger</u> og en <u>smaller</u> mulighed, der begge er relative til parent fontsize'),
            (M = T()),
            ft(L.$$.fragment),
            (F = T()),
            ft(N.$$.fragment),
            (B = T()),
            (H = y('h3')),
            (H.textContent = 'Headers and font aliases'),
            (S = T()),
            ft(_.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, b) {
          v(t, e, b),
            v(t, n, b),
            v(t, r, b),
            v(t, s, b),
            gt(a, t, b),
            v(t, o, b),
            gt(l, t, b),
            v(t, i, b),
            v(t, c, b),
            v(t, d, b),
            gt(u, t, b),
            v(t, f, b),
            gt(g, t, b),
            v(t, $, b),
            v(t, p, b),
            v(t, m, b),
            v(t, h, b),
            v(t, x, b),
            v(t, w, b),
            v(t, k, b),
            v(t, C, b),
            v(t, M, b),
            gt(L, t, b),
            v(t, F, b),
            gt(N, t, b),
            v(t, B, b),
            v(t, H, b),
            v(t, S, b),
            gt(_, t, b),
            (A = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), g.$set(o);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), L.$set(i);
          const c = {};
          1 & e && (c.$$scope = { dirty: e, ctx: t }), N.$set(c);
          const d = {};
          1 & e && (d.$$scope = { dirty: e, ctx: t }), _.$set(d);
        },
        i(t) {
          A ||
            (lt(a.$$.fragment, t),
            lt(l.$$.fragment, t),
            lt(u.$$.fragment, t),
            lt(g.$$.fragment, t),
            lt(L.$$.fragment, t),
            lt(N.$$.fragment, t),
            lt(_.$$.fragment, t),
            (A = !0));
        },
        o(t) {
          it(a.$$.fragment, t),
            it(l.$$.fragment, t),
            it(u.$$.fragment, t),
            it(g.$$.fragment, t),
            it(L.$$.fragment, t),
            it(N.$$.fragment, t),
            it(_.$$.fragment, t),
            (A = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            $t(l, t),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t),
            t && b(f),
            $t(g, t),
            t && b($),
            t && b(p),
            t && b(m),
            t && b(h),
            t && b(x),
            t && b(w),
            t && b(k),
            t && b(C),
            t && b(M),
            $t(L, t),
            t && b(F),
            $t(N, t),
            t && b(B),
            t && b(H),
            t && b(S),
            $t(_, t);
        },
      }
    );
  }
  function Lf(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<p>grid-width--xlarge: 930px</p> \n    <p>Page content width - frontpage</p> \n    <div class="grid-width--large vertical-center bg--eb2" style="overflow: hidden"><p>grid-width--large: 910px</p> \n      <p>Page content width</p> \n      <div class="grid-width--medium vertical-center bg--eb" style="overflow: hidden"><p>grid-width--medium: 730px</p> \n        <p>Bodytext container width</p> \n        <div class="grid-width--small vertical-center bg--eb2" style="overflow: hidden"><p>grid-width--small: 610px</p> \n          <p>Widget width</p></div></div></div>'),
          z(e, 'class', 'grid-width--xlarge vertical-center bg--eb'),
          H(e, 'overflow', 'hidden');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function zf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="grid-width--xlarge"></div>\n<div class="grid-width--large"></div>\n<div class="grid-width--medium"></div>\n<div class="grid-width--small"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Ff(e) {
    let n;
    return {
      c() {
        n = C('--grid-small: 610px;\n--grid-medium: 730px;\n--grid-large: 910px;\n--grid-xlarge: 930px;');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Nf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f;
    return (
      (r = new fe({
        props: { className: 'bg--graa7 text-align--center', $$slots: { default: [Lf] }, $$scope: { ctx: t } },
      })),
      (l = new Us({ props: { language: 'html', $$slots: { default: [zf] }, $$scope: { ctx: t } } })),
      (u = new Us({ props: { language: 'css', $$slots: { default: [Ff] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Grid'),
            (n = T()),
            ft(r.$$.fragment),
            (s = T()),
            (a = y('h3')),
            (a.textContent = 'HTML class names'),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            (c = y('h3')),
            (c.textContent = 'CSS variable names'),
            (d = T()),
            ft(u.$$.fragment),
            z(e, 'class', 'color--eb margin-l--b');
        },
        m(t, g) {
          v(t, e, g),
            v(t, n, g),
            gt(r, t, g),
            v(t, s, g),
            v(t, a, g),
            v(t, o, g),
            gt(l, t, g),
            v(t, i, g),
            v(t, c, g),
            v(t, d, g),
            gt(u, t, g),
            (f = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), l.$set(s);
          const a = {};
          1 & e && (a.$$scope = { dirty: e, ctx: t }), u.$set(a);
        },
        i(t) {
          f || (lt(r.$$.fragment, t), lt(l.$$.fragment, t), lt(u.$$.fragment, t), (f = !0));
        },
        o(t) {
          it(r.$$.fragment, t), it(l.$$.fragment, t), it(u.$$.fragment, t), (f = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            $t(r, t),
            t && b(s),
            t && b(a),
            t && b(o),
            $t(l, t),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t);
        },
      }
    );
  }
  function Bf(e) {
    let n;
    return {
      c() {
        n = C('<div class="hidden"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Hf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="position-absolute"></div>\n<div class="position-fixed"></div>\n<div class="position-relative"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Sf(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="bg--eb padding-m float-left">float-left</div> \n    <div class="bg--eb padding-m float-right">float-right</div>');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function _f(e) {
    let n;
    return {
      c() {
        n = C('<div class="float-left"></div>\n<div class="float-right"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Af(e) {
    let n;
    return {
      c() {
        n = C('<div class="clear"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function jf(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.textContent = 'vertical-center'),
          z(e, 'class', 'vertical-center width-1of3 padding-l bg--eb');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ef(e) {
    let n;
    return {
      c() {
        n = C('<div class="vertical-center"></div>\n<div class="vertical-auto"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Pf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="margin-none padding-none"></div>\n<div class="margin-s padding-s"></div>\n<div class="margin-m padding-m"></div>\n<div class="margin-l padding-l"></div>\n<div class="margin-xl padding-xl"></div>\n<div class="margin-xxl padding-xxl"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Of(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="margin-l--t padding-l--t"></div>\n<div class="margin-l--r padding-l--r"></div>\n<div class="margin-l--b padding-l--b"></div>\n<div class="margin-l--l padding-l--l"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function If(e) {
    let n;
    return {
      c() {
        n = C('<div class="margin-l--tb padding-l--tb"></div>\n<div class="margin-l--rl padding-l--rl"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Df(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="border-radius box-shadow--small padding-xl margin-l bg--eb">box-shadow--small</div> \n    <div class="border-radius box-shadow padding-xl margin-l bg--eb">box-shadow</div> \n    <div class="border-radius box-shadow--large padding-xl margin-l bg--eb">box-shadow--large</div>'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Vf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="box-shadow--small"></div>\n<div class="box-shadow"></div>\n<div class="box-shadow--large"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Rf(t) {
    let e,
      n,
      r,
      s,
      a,
      o,
      l,
      i,
      c,
      d,
      u,
      f,
      g,
      $,
      p,
      m,
      h,
      x,
      w,
      k,
      C,
      M,
      L,
      F,
      N,
      B,
      H,
      S,
      _,
      A,
      j,
      E,
      P,
      O,
      I,
      D,
      V,
      R,
      q,
      G,
      W,
      U,
      Y,
      Z,
      X,
      J,
      K,
      Q;
    return (
      (a = new Us({ props: { language: 'html', $$slots: { default: [Bf] }, $$scope: { ctx: t } } })),
      (c = new Us({ props: { language: 'html', $$slots: { default: [Hf] }, $$scope: { ctx: t } } })),
      (g = new fe({ props: { className: 'bg--graa7', $$slots: { default: [Sf] }, $$scope: { ctx: t } } })),
      (p = new Us({ props: { language: 'html', $$slots: { default: [_f] }, $$scope: { ctx: t } } })),
      (w = new Us({ props: { language: 'html', $$slots: { default: [Af] }, $$scope: { ctx: t } } })),
      (N = new fe({ props: { className: 'bg--graa7', $$slots: { default: [jf] }, $$scope: { ctx: t } } })),
      (H = new Us({ props: { language: 'html', $$slots: { default: [Ef] }, $$scope: { ctx: t } } })),
      (P = new Us({ props: { language: 'html', $$slots: { default: [Pf] }, $$scope: { ctx: t } } })),
      (V = new Us({ props: { language: 'html', $$slots: { default: [Of] }, $$scope: { ctx: t } } })),
      (W = new Us({ props: { language: 'html', $$slots: { default: [If] }, $$scope: { ctx: t } } })),
      (X = new fe({ props: { className: 'bg--graa7', $$slots: { content: [Df] }, $$scope: { ctx: t } } })),
      (K = new Us({ props: { language: 'html', $$slots: { default: [Vf] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Helpers'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Skjult element'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            (l = y('h3')),
            (l.textContent = 'Position'),
            (i = T()),
            ft(c.$$.fragment),
            (d = T()),
            (u = y('h3')),
            (u.textContent = 'Floats'),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            ft(p.$$.fragment),
            (m = T()),
            (h = y('h3')),
            (h.textContent = 'Clear'),
            (x = T()),
            ft(w.$$.fragment),
            (k = T()),
            (C = y('h3')),
            (C.textContent = 'Centrér vertikalt'),
            (M = T()),
            (L = y('p')),
            (L.textContent = 'Kræver en fast bredde på elementet.'),
            (F = T()),
            ft(N.$$.fragment),
            (B = T()),
            ft(H.$$.fragment),
            (S = T()),
            (_ = y('h3')),
            (_.textContent = 'Margin & padding'),
            (A = T()),
            (j = y('p')),
            (j.innerHTML =
              'For både <strong>margin</strong> og <strong>padding</strong> klassen har vi fem størrelser\n  <em>(s, m, l, xl og xxl)</em>\n  og så\n  <em>none</em> som sættes på med bindesteg.'),
            (E = T()),
            ft(P.$$.fragment),
            (O = T()),
            (I = y('p')),
            (I.innerHTML =
              'Ønskes der derimod kun at have <strong>margin</strong> og <strong>padding</strong> i en retning tilføjes dette med double\n  bindestreg.'),
            (D = T()),
            ft(V.$$.fragment),
            (R = T()),
            (q = y('p')),
            (q.innerHTML = 'Vi har også to samle klasser for <em>top-bottom</em> og <em>right-left</em>.'),
            (G = T()),
            ft(W.$$.fragment),
            (U = T()),
            (Y = y('h3')),
            (Y.textContent = 'Box-shadow'),
            (Z = T()),
            ft(X.$$.fragment),
            (J = T()),
            ft(K.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, b) {
          v(t, e, b),
            v(t, n, b),
            v(t, r, b),
            v(t, s, b),
            gt(a, t, b),
            v(t, o, b),
            v(t, l, b),
            v(t, i, b),
            gt(c, t, b),
            v(t, d, b),
            v(t, u, b),
            v(t, f, b),
            gt(g, t, b),
            v(t, $, b),
            gt(p, t, b),
            v(t, m, b),
            v(t, h, b),
            v(t, x, b),
            gt(w, t, b),
            v(t, k, b),
            v(t, C, b),
            v(t, M, b),
            v(t, L, b),
            v(t, F, b),
            gt(N, t, b),
            v(t, B, b),
            gt(H, t, b),
            v(t, S, b),
            v(t, _, b),
            v(t, A, b),
            v(t, j, b),
            v(t, E, b),
            gt(P, t, b),
            v(t, O, b),
            v(t, I, b),
            v(t, D, b),
            gt(V, t, b),
            v(t, R, b),
            v(t, q, b),
            v(t, G, b),
            gt(W, t, b),
            v(t, U, b),
            v(t, Y, b),
            v(t, Z, b),
            gt(X, t, b),
            v(t, J, b),
            gt(K, t, b),
            (Q = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), c.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), g.$set(s);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), p.$set(o);
          const l = {};
          1 & e && (l.$$scope = { dirty: e, ctx: t }), w.$set(l);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), N.$set(i);
          const d = {};
          1 & e && (d.$$scope = { dirty: e, ctx: t }), H.$set(d);
          const u = {};
          1 & e && (u.$$scope = { dirty: e, ctx: t }), P.$set(u);
          const f = {};
          1 & e && (f.$$scope = { dirty: e, ctx: t }), V.$set(f);
          const $ = {};
          1 & e && ($.$$scope = { dirty: e, ctx: t }), W.$set($);
          const m = {};
          1 & e && (m.$$scope = { dirty: e, ctx: t }), X.$set(m);
          const h = {};
          1 & e && (h.$$scope = { dirty: e, ctx: t }), K.$set(h);
        },
        i(t) {
          Q ||
            (lt(a.$$.fragment, t),
            lt(c.$$.fragment, t),
            lt(g.$$.fragment, t),
            lt(p.$$.fragment, t),
            lt(w.$$.fragment, t),
            lt(N.$$.fragment, t),
            lt(H.$$.fragment, t),
            lt(P.$$.fragment, t),
            lt(V.$$.fragment, t),
            lt(W.$$.fragment, t),
            lt(X.$$.fragment, t),
            lt(K.$$.fragment, t),
            (Q = !0));
        },
        o(t) {
          it(a.$$.fragment, t),
            it(c.$$.fragment, t),
            it(g.$$.fragment, t),
            it(p.$$.fragment, t),
            it(w.$$.fragment, t),
            it(N.$$.fragment, t),
            it(H.$$.fragment, t),
            it(P.$$.fragment, t),
            it(V.$$.fragment, t),
            it(W.$$.fragment, t),
            it(X.$$.fragment, t),
            it(K.$$.fragment, t),
            (Q = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            t && b(l),
            t && b(i),
            $t(c, t),
            t && b(d),
            t && b(u),
            t && b(f),
            $t(g, t),
            t && b($),
            $t(p, t),
            t && b(m),
            t && b(h),
            t && b(x),
            $t(w, t),
            t && b(k),
            t && b(C),
            t && b(M),
            t && b(L),
            t && b(F),
            $t(N, t),
            t && b(B),
            $t(H, t),
            t && b(S),
            t && b(_),
            t && b(A),
            t && b(j),
            t && b(E),
            $t(P, t),
            t && b(O),
            t && b(I),
            t && b(D),
            $t(V, t),
            t && b(R),
            t && b(q),
            t && b(G),
            $t(W, t),
            t && b(U),
            t && b(Y),
            t && b(Z),
            $t(X, t),
            t && b(J),
            $t(K, t);
        },
      }
    );
  }
  function qf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w, k, C;
    return {
      c() {
        (e = y('div')),
          (e.textContent = 'width-100vw'),
          (n = T()),
          (r = y('div')),
          (r.textContent = 'width-auto'),
          (s = T()),
          (a = y('div')),
          (a.textContent = 'width-1of1'),
          (o = T()),
          (l = y('div')),
          (l.textContent = 'width-5of6'),
          (i = T()),
          (c = y('div')),
          (c.textContent = 'width-3of4'),
          (d = T()),
          (u = y('div')),
          (u.textContent = 'width-2of3'),
          (f = T()),
          (g = y('div')),
          (g.textContent = 'width-1of2'),
          ($ = T()),
          (p = y('div')),
          (p.textContent = 'width-1of3'),
          (m = T()),
          (h = y('div')),
          (h.textContent = 'width-1of4'),
          (x = T()),
          (w = y('div')),
          (w.textContent = 'width-1of5'),
          (k = T()),
          (C = y('div')),
          (C.textContent = 'width-1of6'),
          z(e, 'class', 'bg--eb padding-m width-100vw'),
          z(r, 'class', 'bg--eb padding-m width-auto'),
          z(a, 'class', 'bg--eb padding-m width-1of1'),
          z(l, 'class', 'bg--eb padding-m width-5of6'),
          z(c, 'class', 'bg--eb padding-m width-3of4'),
          z(u, 'class', 'bg--eb padding-m width-2of3'),
          z(g, 'class', 'bg--eb padding-m width-1of2'),
          z(p, 'class', 'bg--eb padding-m width-1of3'),
          z(h, 'class', 'bg--eb padding-m width-1of4'),
          z(w, 'class', 'bg--eb padding-m width-1of5'),
          z(C, 'class', 'bg--eb padding-m width-1of6');
      },
      m(t, b) {
        v(t, e, b),
          v(t, n, b),
          v(t, r, b),
          v(t, s, b),
          v(t, a, b),
          v(t, o, b),
          v(t, l, b),
          v(t, i, b),
          v(t, c, b),
          v(t, d, b),
          v(t, u, b),
          v(t, f, b),
          v(t, g, b),
          v(t, $, b),
          v(t, p, b),
          v(t, m, b),
          v(t, h, b),
          v(t, x, b),
          v(t, w, b),
          v(t, k, b),
          v(t, C, b);
      },
      d(t) {
        t && b(e),
          t && b(n),
          t && b(r),
          t && b(s),
          t && b(a),
          t && b(o),
          t && b(l),
          t && b(i),
          t && b(c),
          t && b(d),
          t && b(u),
          t && b(f),
          t && b(g),
          t && b($),
          t && b(p),
          t && b(m),
          t && b(h),
          t && b(x),
          t && b(w),
          t && b(k),
          t && b(C);
      },
    };
  }
  function Gf(e) {
    let n;
    return {
      c() {
        n = C(
          '<div class="width-100vw"></div>\n<div class="width-auto"></div>\n<div class="width-1of1"></div>\n<div class="width-5of6"></div>\n<div class="width-3of4"></div>\n<div class="width-2of3"></div>\n<div class="width-1of2"></div>\n<div class="width-1of3"></div>\n<div class="width-1of4"></div>\n<div class="width-1of5"></div>\n<div class="width-1of6"></div>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Wf(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="bg--eb padding-m width-1of4 height-100vh" style="display: inline-block">height-100vh*</div> \n    <div class="bg--eb padding-m width-1of4 height-auto" style="display: inline-block">height-auto</div> \n    <div class="bg--eb padding-m width-1of4 height-1of1" style="display: inline-block">height-1of1</div>'),
          z(e, 'class', 'text-align--center bg--graa7'),
          H(e, 'height', '200px'),
          H(e, 'overflow', 'hidden');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Uf(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<p class="fontsize-small">* Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html</p>'),
          z(e, 'slot', 'footer');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Yf(e) {
    let n;
    return {
      c() {
        n = C('<div class="height-100vh"></div>\n<div class="height-auto"></div>\n<div class="height-1of1"></div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Zf(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $;
    return (
      (a = new fe({ props: { className: 'bg--graa7', $$slots: { default: [qf] }, $$scope: { ctx: t } } })),
      (l = new Us({ props: { language: 'html', $$slots: { default: [Gf] }, $$scope: { ctx: t } } })),
      (u = new fe({ props: { $$slots: { footer: [Uf], default: [Wf] }, $$scope: { ctx: t } } })),
      (g = new Us({ props: { language: 'html', $$slots: { default: [Yf] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Sizing'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Bredder'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            (c = y('h3')),
            (c.textContent = 'Højder'),
            (d = T()),
            ft(u.$$.fragment),
            (f = T()),
            ft(g.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, p) {
          v(t, e, p),
            v(t, n, p),
            v(t, r, p),
            v(t, s, p),
            gt(a, t, p),
            v(t, o, p),
            gt(l, t, p),
            v(t, i, p),
            v(t, c, p),
            v(t, d, p),
            gt(u, t, p),
            v(t, f, p),
            gt(g, t, p),
            ($ = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), g.$set(o);
        },
        i(t) {
          $ || (lt(a.$$.fragment, t), lt(l.$$.fragment, t), lt(u.$$.fragment, t), lt(g.$$.fragment, t), ($ = !0));
        },
        o(t) {
          it(a.$$.fragment, t), it(l.$$.fragment, t), it(u.$$.fragment, t), it(g.$$.fragment, t), ($ = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            $t(l, t),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t),
            t && b(f),
            $t(g, t);
        },
      }
    );
  }
  function Xf(t) {
    let e, n, r, s, a;
    return {
      c() {
        (e = y('p')),
          (e.textContent = 'Centreret tekst'),
          (n = T()),
          (r = y('p')),
          (r.textContent = 'Venstrestillet tekst'),
          (s = T()),
          (a = y('p')),
          (a.textContent = 'Højrestillet tekst'),
          z(e, 'class', 'text-align--center'),
          z(r, 'class', 'text-align--left'),
          z(a, 'class', 'text-align--right');
      },
      m(t, o) {
        v(t, e, o), v(t, n, o), v(t, r, o), v(t, s, o), v(t, a, o);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r), t && b(s), t && b(a);
      },
    };
  }
  function Jf(e) {
    let n;
    return {
      c() {
        n = C(
          '<p class="text-align--center"></p>\n<p class="text-align--left"></p>\n<p class="text-align--right"></p>'
        );
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Kf(t) {
    let e, n, r;
    return {
      c() {
        (e = y('p')),
          (e.textContent = 'SMÅ BOGSTAVER'),
          (n = T()),
          (r = y('p')),
          (r.textContent = 'store bogstaver'),
          z(e, 'class', 'text-transform--lowercase'),
          z(r, 'class', 'text-transform--uppercase');
      },
      m(t, s) {
        v(t, e, s), v(t, n, s), v(t, r, s);
      },
      d(t) {
        t && b(e), t && b(n), t && b(r);
      },
    };
  }
  function Qf(e) {
    let n;
    return {
      c() {
        n = C('<p class="text-transform--lowercase"></p>\n<p class="text-transform--uppercase"></p>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function tg(t) {
    let e;
    return {
      c() {
        (e = y('div')),
          (e.innerHTML =
            '<div class="width-1of3 margin-m"><p>normal line-height</p> \n      <p>normal line-height</p> \n      <p>normal line-height</p></div> \n    <div class="width-1of3 margin-m lineheight-m"><p>lineheight-m</p> \n      <p>lineheight-m</p> \n      <p>lineheight-m</p></div>'),
          z(e, 'class', 'flex flex-justify--between'),
          z(e, 'slot', 'content');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function eg(e) {
    let n;
    return {
      c() {
        n = C('<div class="lineheight-m">\n  <p>line-height: 1.5em</p>\n</div>');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function ng(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f, g, $, p, m, h, x, w, k, C, M;
    return (
      (a = new fe({ props: { className: 'bg--graa7 padding-m', $$slots: { default: [Xf] }, $$scope: { ctx: t } } })),
      (l = new Us({ props: { language: 'html', $$slots: { default: [Jf] }, $$scope: { ctx: t } } })),
      (u = new fe({ props: { className: 'bg--graa7 padding-m', $$slots: { default: [Kf] }, $$scope: { ctx: t } } })),
      (g = new Us({ props: { language: 'html', $$slots: { default: [Qf] }, $$scope: { ctx: t } } })),
      (w = new fe({ props: { className: 'bg--graa7', $$slots: { content: [tg] }, $$scope: { ctx: t } } })),
      (C = new Us({ props: { language: 'html', $$slots: { default: [eg] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Text'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Text alignment'),
            (s = T()),
            ft(a.$$.fragment),
            (o = T()),
            ft(l.$$.fragment),
            (i = T()),
            (c = y('h3')),
            (c.textContent = 'Text transform'),
            (d = T()),
            ft(u.$$.fragment),
            (f = T()),
            ft(g.$$.fragment),
            ($ = T()),
            (p = y('h3')),
            (p.textContent = 'Line height'),
            (m = T()),
            (h = y('p')),
            (h.textContent = 'Default line-height will be based on the browser usually around 1.2'),
            (x = T()),
            ft(w.$$.fragment),
            (k = T()),
            ft(C.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, b) {
          v(t, e, b),
            v(t, n, b),
            v(t, r, b),
            v(t, s, b),
            gt(a, t, b),
            v(t, o, b),
            gt(l, t, b),
            v(t, i, b),
            v(t, c, b),
            v(t, d, b),
            gt(u, t, b),
            v(t, f, b),
            gt(g, t, b),
            v(t, $, b),
            v(t, p, b),
            v(t, m, b),
            v(t, h, b),
            v(t, x, b),
            gt(w, t, b),
            v(t, k, b),
            gt(C, t, b),
            (M = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
          const r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r);
          const s = {};
          1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
          const o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), g.$set(o);
          const i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), w.$set(i);
          const c = {};
          1 & e && (c.$$scope = { dirty: e, ctx: t }), C.$set(c);
        },
        i(t) {
          M ||
            (lt(a.$$.fragment, t),
            lt(l.$$.fragment, t),
            lt(u.$$.fragment, t),
            lt(g.$$.fragment, t),
            lt(w.$$.fragment, t),
            lt(C.$$.fragment, t),
            (M = !0));
        },
        o(t) {
          it(a.$$.fragment, t),
            it(l.$$.fragment, t),
            it(u.$$.fragment, t),
            it(g.$$.fragment, t),
            it(w.$$.fragment, t),
            it(C.$$.fragment, t),
            (M = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            $t(a, t),
            t && b(o),
            $t(l, t),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t),
            t && b(f),
            $t(g, t),
            t && b($),
            t && b(p),
            t && b(m),
            t && b(h),
            t && b(x),
            $t(w, t),
            t && b(k),
            $t(C, t);
        },
      }
    );
  }
  function rg(e) {
    let n;
    return {
      c() {
        n = C('npx degit EkstraBladetUdvikling/sveltetemplate my-svelte-project');
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function sg(t) {
    let e, n, r, s, a, o, l, i, c, d, u, f;
    return (
      (u = new Us({ props: { language: 'js', $$slots: { default: [rg] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('h1')),
            (e.textContent = 'Svelte'),
            (n = T()),
            (r = y('h3')),
            (r.textContent = 'Rules'),
            (s = T()),
            (a = y('ol')),
            (a.innerHTML =
              '<li class="svelte-9h10az">There must be a rigorous division of logic (script-part) and views (template, class selection, etc.)</li> \n  <li class="svelte-9h10az">Component-specific styling should preferably be solved using the designsystem instead of styling within the\n    Svelte-files.</li> \n  <li class="svelte-9h10az">Svelte functions should (if possible) be used instead of native functions (eg createEventListener).</li> \n  <li class="svelte-9h10az">Script tag content must be kept to an absolute minimum.</li> \n  <li class="svelte-9h10az">As a rule, the state must provide all data in the format required by the components. Ie. Filtering takes place in\n    state management and not in the respective components.</li> \n  <li class="svelte-9h10az">Design system: on:click should exist on all elements of the design system</li> \n  <li class="svelte-9h10az">The use of Svelte is agreed in the front-end group, so that it is only used where it makes sense.</li> \n  <li class="svelte-9h10az">Svelte-store is used and each part of the state is divided into several readable / writeable, instead of one object.</li> \n  <li class="svelte-9h10az">Writables may only be updated using actions (functions) and may not be exported directly.</li>'),
            (o = T()),
            (l = y('h3')),
            (l.textContent = 'Create Svelte App'),
            (i = T()),
            (c = y('p')),
            (c.textContent = 'The recommended way to start new apps with Svelte is by using our Svelte Template:'),
            (d = T()),
            ft(u.$$.fragment),
            z(e, 'class', 'color--eb');
        },
        m(t, g) {
          v(t, e, g),
            v(t, n, g),
            v(t, r, g),
            v(t, s, g),
            v(t, a, g),
            v(t, o, g),
            v(t, l, g),
            v(t, i, g),
            v(t, c, g),
            v(t, d, g),
            gt(u, t, g),
            (f = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), u.$set(n);
        },
        i(t) {
          f || (lt(u.$$.fragment, t), (f = !0));
        },
        o(t) {
          it(u.$$.fragment, t), (f = !1);
        },
        d(t) {
          t && b(e),
            t && b(n),
            t && b(r),
            t && b(s),
            t && b(a),
            t && b(o),
            t && b(l),
            t && b(i),
            t && b(c),
            t && b(d),
            $t(u, t);
        },
      }
    );
  }
  const ag = [
    {
      link: '/',
      title: 'Overblik',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, js, As, o, {});
        }
      },
    },
    {
      link: '/components/accordion',
      title: 'Accordion',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, Wa, Ga, o, {});
        }
      },
    },
    {
      link: '/components/articlecard',
      title: 'Article card',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, no, eo, o, {});
        }
      },
    },
    {
      link: '/components/badge',
      title: 'Badge',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, Lo, Mo, o, {});
        }
      },
    },
    {
      link: '/components/button',
      title: 'Button',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, cl, il, o, {});
        }
      },
    },
    {
      link: '/components/buttongroup',
      title: 'Button group',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, ri, ni, o, {});
        }
      },
    },
    {
      link: '/components/card',
      title: 'Card',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, wi, bi, o, {});
        }
      },
    },
    {
      link: '/components/form-elements',
      title: 'Form elements',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, Wi, Gi, o, {});
        }
      },
    },
    {
      link: '/components/icon',
      title: 'Icon',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, hc, mc, o, {});
        }
      },
    },
    {
      link: '/components/horizontalscroll',
      title: 'Horizontal scroll',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, Nc, Fc, o, {});
        }
      },
    },
    {
      link: '/components/tabs',
      title: 'Tabs',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, vd, xd, o, {});
        }
      },
    },
    {
      link: '/components/spinner',
      title: 'Spinner',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, Pc, Ec, o, {});
        }
      },
    },
    {
      link: '/components/toggler',
      title: 'Toggler',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, cu, iu, o, {});
        }
      },
    },
    {
      link: '/components/tooltip',
      title: 'Tooltip',
      group: 'components',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, ku, yu, o, {});
        }
      },
    },
    {
      link: '/utilities/animation',
      title: 'Animation',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, _u, Su, o, {});
        }
      },
    },
    {
      link: '/utilities/border',
      title: 'Border',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, Du, o, {});
        }
      },
    },
    {
      link: '/utilities/color',
      title: 'Color',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, Wu, o, {});
        }
      },
    },
    {
      link: '/utilities/datatheme',
      title: 'Data theme',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, ef, tf, o, {});
        }
      },
    },
    {
      link: '/utilities/flex',
      title: 'Flex',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, xf, o, {});
        }
      },
    },
    {
      link: '/utilities/fonts',
      title: 'Fonts',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, Mf, o, {});
        }
      },
    },
    {
      link: '/utilities/grid',
      title: 'Grid',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, Nf, o, {});
        }
      },
    },
    {
      link: '/utilities/helpers',
      title: 'Helpers',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, Rf, o, {});
        }
      },
    },
    {
      link: '/utilities/sizing',
      title: 'Sizing',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, Zf, o, {});
        }
      },
    },
    {
      link: '/utilities/text',
      title: 'Text',
      group: 'utilities',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, ng, o, {});
        }
      },
    },
    {
      link: '/guidelines/svelte',
      title: 'Svelte',
      group: 'guidelines',
      component: class extends mt {
        constructor(t) {
          super(), pt(this, t, null, sg, o, {});
        }
      },
    },
  ];
  function og(t, e, n) {
    const r = t.slice();
    return (r[4] = e[n]), r;
  }
  function lg(t, e, n) {
    const r = t.slice();
    return (r[7] = e[n]), r;
  }
  function ig(e) {
    let n,
      r,
      s,
      o,
      l,
      i,
      c,
      d = e[7].title + '';
    return {
      c() {
        (n = y('a')),
          (r = C(d)),
          (s = T()),
          z(n, 'class', 'sidebar-item width-1of1 padding-m--t padding-m--rl svelte-av0po4'),
          z(n, 'href', (o = e[7].link)),
          S(n, 'active-item', e[7].link === e[0]);
      },
      m(e, o) {
        var d;
        v(e, n, o),
          x(n, r),
          x(n, s),
          i || ((d = l = Lt.call(null, n)), (c = d && a(d.destroy) ? d.destroy : t), (i = !0));
      },
      p(t, e) {
        3 & e && S(n, 'active-item', t[7].link === t[0]);
      },
      d(t) {
        t && b(n), (i = !1), c();
      },
    };
  }
  function cg(e) {
    let n,
      r,
      s,
      a,
      o =
        e[4].length &&
        e[4][0].group &&
        (function (e) {
          let n,
            r = (s = e[4][0].group)[0].toUpperCase() + s.substr(1).toLowerCase() + '';
          var s;
          let a;
          return {
            c() {
              (n = y('div')), (a = C(r)), z(n, 'class', 'sidebar-submenu-title fontsize-small svelte-av0po4');
            },
            m(t, e) {
              v(t, n, e), x(n, a);
            },
            p: t,
            d(t) {
              t && b(n);
            },
          };
        })(e),
      l = e[4],
      i = [];
    for (let t = 0; t < l.length; t += 1) i[t] = ig(lg(e, l, t));
    return {
      c() {
        (n = y('div')), o && o.c(), (r = T()), (s = y('div'));
        for (let t = 0; t < i.length; t += 1) i[t].c();
        (a = T()),
          z(s, 'class', 'sidebar-submenu-items'),
          z(n, 'class', 'sidebar-menuitem-container padding-l svelte-av0po4');
      },
      m(t, e) {
        v(t, n, e), o && o.m(n, null), x(n, r), x(n, s);
        for (let t = 0; t < i.length; t += 1) i[t].m(s, null);
        x(n, a);
      },
      p(t, e) {
        if ((t[4].length && t[4][0].group && o.p(t, e), 3 & e)) {
          let n;
          for (l = t[4], n = 0; n < l.length; n += 1) {
            const r = lg(t, l, n);
            i[n] ? i[n].p(r, e) : ((i[n] = ig(r)), i[n].c(), i[n].m(s, null));
          }
          for (; n < i.length; n += 1) i[n].d(1);
          i.length = l.length;
        }
      },
      d(t) {
        t && b(n), o && o.d(), w(i, t);
      },
    };
  }
  function dg(e) {
    let n,
      r,
      s,
      a = e[1],
      o = [];
    for (let t = 0; t < a.length; t += 1) o[t] = cg(og(e, a, t));
    return {
      c() {
        (n = y('div')),
          (r = y('div')),
          (r.innerHTML =
            '<div><a href="#/" class="svelte-av0po4"><img alt="" src="ekstrabladet.svg" style="height:70px;"/></a></div> \n    <div class="flex-item flex-item--center"><p class="flex--grow width-1of1 color--graa1 fontweight-bold">Design system</p></div>'),
          (s = T());
        for (let t = 0; t < o.length; t += 1) o[t].c();
        z(r, 'class', 'flex flex-justify--around sidebar-logo-container padding-m--rl svelte-av0po4'),
          z(n, 'id', 'sidebar-menu'),
          z(n, 'class', 'sidebar-container height-100vh bg--white margin-l--r svelte-av0po4');
      },
      m(t, e) {
        v(t, n, e), x(n, r), x(n, s);
        for (let t = 0; t < o.length; t += 1) o[t].m(n, null);
      },
      p(t, [e]) {
        if (3 & e) {
          let r;
          for (a = t[1], r = 0; r < a.length; r += 1) {
            const s = og(t, a, r);
            o[r] ? o[r].p(s, e) : ((o[r] = cg(s)), o[r].c(), o[r].m(n, null));
          }
          for (; r < o.length; r += 1) o[r].d(1);
          o.length = a.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && b(n), w(o, t);
      },
    };
  }
  function ug(t, e, n) {
    let { menuItemList: r = [] } = e,
      s = window.location.hash.substr(1);
    const a = {};
    r.forEach((t) => (a[t.group || 0] || (a[t.group || 0] = [])).push(t));
    const o = Object.keys(a).map((t) => a[t]);
    return (
      E(() => {
        document.querySelectorAll('#sidebar-menu .sidebar-item').forEach((t) => {
          t.addEventListener('click', () => {
            n(0, (s = window.location.hash.substr(1)));
          });
        });
      }),
      window.addEventListener('hashchange', () => {
        n(0, (s = window.location.hash.substr(1)));
      }),
      (t.$$set = (t) => {
        'menuItemList' in t && n(2, (r = t.menuItemList));
      }),
      [s, o, r]
    );
  }
  class fg extends mt {
    constructor(t) {
      super(), pt(this, t, ug, dg, o, { menuItemList: 2 });
    }
  }
  function gg(t) {
    let e;
    return {
      c() {
        e = C('Svelte');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function $g(t) {
    let e;
    return {
      c() {
        e = C('HTML');
      },
      m(t, n) {
        v(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function pg(t) {
    let e, n, r, s;
    return (
      (e = new Or({
        props: { size: 'small', initial: 'svelte' === t[0], $$slots: { default: [gg] }, $$scope: { ctx: t } },
      })),
      e.$on('click', t[2]),
      (r = new Or({
        props: { size: 'small', initial: 'html' === t[0], $$slots: { default: [$g] }, $$scope: { ctx: t } },
      })),
      r.$on('click', t[3]),
      {
        c() {
          ft(e.$$.fragment), (n = T()), ft(r.$$.fragment);
        },
        m(t, a) {
          gt(e, t, a), v(t, n, a), gt(r, t, a), (s = !0);
        },
        p(t, n) {
          const s = {};
          1 & n && (s.initial = 'svelte' === t[0]), 16 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
          const a = {};
          1 & n && (a.initial = 'html' === t[0]), 16 & n && (a.$$scope = { dirty: n, ctx: t }), r.$set(a);
        },
        i(t) {
          s || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), (s = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), (s = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t);
        },
      }
    );
  }
  function mg(t) {
    let e, n, r, s, a, o;
    return (
      (a = new _r({ props: { type: 'secondary', $$slots: { default: [pg] }, $$scope: { ctx: t } } })),
      {
        c() {
          (e = y('div')),
            (n = y('nav')),
            (r = y('a')),
            (r.innerHTML = '<i class="fab fa-github margin-s--r"></i>Github'),
            (s = T()),
            ft(a.$$.fragment),
            z(r, 'href', 'https://github.com/EkstraBladetUdvikling/eb-designsystem'),
            z(r, 'target', '_blank'),
            z(r, 'class', 'flex svelte-1offyji'),
            z(n, 'class', 'navmenu flex flex-justify--between flex-align--center padding-xl--rl svelte-1offyji'),
            z(e, 'class', 'navmenu-container position-fixed margin-xl--b bg-red svelte-1offyji');
        },
        m(t, l) {
          v(t, e, l), x(e, n), x(n, r), x(n, s), gt(a, n, null), (o = !0);
        },
        p(t, [e]) {
          const n = {};
          17 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
        },
        i(t) {
          o || (lt(a.$$.fragment, t), (o = !0));
        },
        o(t) {
          it(a.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && b(e), $t(a);
        },
      }
    );
  }
  function hg(t, e, n) {
    let r;
    function s(t) {
      ja.set(t);
    }
    u(t, ja, (t) => n(0, (r = t)));
    return [r, s, () => s('svelte'), () => s('html')];
  }
  class xg extends mt {
    constructor(t) {
      super(), pt(this, t, hg, mg, o, {});
    }
  }
  function vg(t) {
    let e, n, r, s, a, o, l;
    return (
      (e = new xg({})),
      (r = new fg({ props: { menuItemList: t[1] } })),
      (o = new Bt({ props: { routes: t[0] } })),
      {
        c() {
          ft(e.$$.fragment),
            (n = T()),
            ft(r.$$.fragment),
            (s = T()),
            (a = y('div')),
            ft(o.$$.fragment),
            z(a, 'class', 'content-container padding-xl svelte-ftylog');
        },
        m(t, i) {
          gt(e, t, i), v(t, n, i), gt(r, t, i), v(t, s, i), v(t, a, i), gt(o, a, null), (l = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.routes = t[0]), o.$set(n);
        },
        i(t) {
          l || (lt(e.$$.fragment, t), lt(r.$$.fragment, t), lt(o.$$.fragment, t), (l = !0));
        },
        o(t) {
          it(e.$$.fragment, t), it(r.$$.fragment, t), it(o.$$.fragment, t), (l = !1);
        },
        d(t) {
          $t(e, t), t && b(n), $t(r, t), t && b(s), t && b(a), $t(o);
        },
      }
    );
  }
  function bg(t, e, n) {
    let r = {},
      s = [];
    return (
      ag.forEach((t) => {
        n(0, (r[t.link] = t.component), r), s.push(t);
      }),
      [r, s]
    );
  }
  return new (class extends mt {
    constructor(t) {
      super(), pt(this, t, bg, vg, o, {});
    }
  })({ target: document.body, props: { name: 'world' } });
})();
