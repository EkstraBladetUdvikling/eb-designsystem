var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function i(t,e,n){t.$$.on_destroy.push(l(e,n))}function c(t,e,n,s){if(t){const r=d(t,e,n,s);return t[0](r)}}function d(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t,e,n,s,r,a,o){const l=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,a);if(l){const r=d(e,n,s,o);t.p(r,l)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function $(e){return e&&a(e.destroy)?e.destroy:t}function p(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function y(){return w("")}function k(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:C(t,s,e[s])}function L(t,e){for(const n in e)C(t,n,e[n])}function M(t){return Array.from(t.childNodes)}function z(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(s,1)[0]}}return s?v(e):x(e)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function H(t,e,n){t.classList[n?"add":"remove"](e)}class E{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=x(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}let S;function F(t){S=t}function A(){if(!S)throw new Error("Function called outside component initialization");return S}function _(t){A().$$.on_mount.push(t)}function j(t){A().$$.after_update.push(t)}function P(t){A().$$.on_destroy.push(t)}function O(){const t=A();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach((e=>{e.call(t,r)}))}}}function D(t,e){A().$$.context.set(t,e)}function I(t){return A().$$.context.get(t)}function R(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const V=[],q=[],G=[],W=[],U=Promise.resolve();let Y=!1;function Z(){Y||(Y=!0,U.then(tt))}function X(t){G.push(t)}function J(t){W.push(t)}let K=!1;const Q=new Set;function tt(){if(!K){K=!0;do{for(let t=0;t<V.length;t+=1){const e=V[t];F(e),et(e.$$)}for(F(null),V.length=0;q.length;)q.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Q.has(e)||(Q.add(e),e())}G.length=0}while(V.length);for(;W.length;)W.pop()();Y=!1,K=!1,Q.clear()}}function et(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const nt=new Set;let st;function rt(){st={r:0,c:[],p:st}}function at(){st.r||r(st.c),st=st.p}function ot(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function lt(t,e,n,s){if(t&&t.o){if(nt.has(t))return;nt.add(t),st.c.push((()=>{nt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function it(t,e){const n={},s={},r={$$scope:1};let a=t.length;for(;a--;){const o=t[a],l=e[a];if(l){for(const t in o)t in l||(s[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[a]=l}else for(const t in o)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ct(t){return"object"==typeof t&&null!==t?t:{}}function dt(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ut(t){t&&t.c()}function ft(t,e,s,o){const{fragment:l,on_mount:i,on_destroy:c,after_update:d}=t.$$;l&&l.m(e,s),o||X((()=>{const e=i.map(n).filter(a);c?c.push(...e):r(e),t.$$.on_mount=[]})),d.forEach(X)}function $t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(e,n,a,o,l,i,c=[-1]){const d=S;F(e);const u=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:s(),dirty:c,skip_bound:!1};let f=!1;if(u.ctx=a?a(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return u.ctx&&l(u.ctx[t],u.ctx[t]=r)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](r),f&&function(t,e){-1===t.$$.dirty[0]&&(V.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],u.update(),f=!0,r(u.before_update),u.fragment=!!o&&o(u.ctx),n.target){if(n.hydrate){const t=M(n.target);u.fragment&&u.fragment.l(t),t.forEach(m)}else u.fragment&&u.fragment.c();n.intro&&ot(e.$$.fragment),ft(e,n.target,n.anchor,n.customElement),tt()}F(d)}class gt{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function ht(t,e){return{subscribe:xt(t,e).subscribe}}function xt(e,n=t){let s;const r=[];function a(t){if(o(e,t)&&(e=t,s)){const t=!mt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),mt.push(n,e)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,l=t){const i=[o,l];return r.push(i),1===r.length&&(s=n(a)||t),o(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function vt(e,n,s){const o=!Array.isArray(e),i=o?[e]:e,c=n.length<2;return ht(s,(e=>{let s=!1;const d=[];let u=0,f=t;const $=()=>{if(u)return;f();const s=n(o?d[0]:d,e);c?e(s):f=a(s)?s:t},p=i.map(((t,e)=>l(t,(t=>{d[e]=t,u&=~(1<<e),s&&$()}),(()=>{u|=1<<e}))));return s=!0,$(),function(){r(p),f()}}))}function wt(t){let n,s,r;const a=[t[2]];var o=t[0];function l(t){let n={};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return o&&(n=new o(l()),n.$on("routeEvent",t[7])),{c(){n&&ut(n.$$.fragment),s=y()},m(t,e){n&&ft(n,t,e),g(t,s,e),r=!0},p(t,e){const r=4&e?it(a,[ct(t[2])]):{};if(o!==(o=t[0])){if(n){rt();const t=n;lt(t.$$.fragment,1,0,(()=>{$t(t,1)})),at()}o?(n=new o(l()),n.$on("routeEvent",t[7]),ut(n.$$.fragment),ot(n.$$.fragment,1),ft(n,s.parentNode,s)):n=null}else o&&n.$set(r)},i(t){r||(n&&ot(n.$$.fragment,t),r=!0)},o(t){n&&lt(n.$$.fragment,t),r=!1},d(t){t&&m(s),n&&$t(n,t)}}}function bt(t){let n,s,r;const a=[{params:t[1]},t[2]];var o=t[0];function l(t){let n={};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return o&&(n=new o(l()),n.$on("routeEvent",t[6])),{c(){n&&ut(n.$$.fragment),s=y()},m(t,e){n&&ft(n,t,e),g(t,s,e),r=!0},p(t,e){const r=6&e?it(a,[2&e&&{params:t[1]},4&e&&ct(t[2])]):{};if(o!==(o=t[0])){if(n){rt();const t=n;lt(t.$$.fragment,1,0,(()=>{$t(t,1)})),at()}o?(n=new o(l()),n.$on("routeEvent",t[6]),ut(n.$$.fragment),ot(n.$$.fragment,1),ft(n,s.parentNode,s)):n=null}else o&&n.$set(r)},i(t){r||(n&&ot(n.$$.fragment,t),r=!0)},o(t){n&&lt(n.$$.fragment,t),r=!1},d(t){t&&m(s),n&&$t(n,t)}}}function yt(t){let e,n,s,r;const a=[bt,wt],o=[];function l(t,e){return t[1]?0:1}return e=l(t),n=o[e]=a[e](t),{c(){n.c(),s=y()},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?o[e].p(t,r):(rt(),lt(o[i],1,1,(()=>{o[i]=null})),at(),n=o[e],n?n.p(t,r):(n=o[e]=a[e](t),n.c()),ot(n,1),n.m(s.parentNode,s))},i(t){r||(ot(n),r=!0)},o(t){lt(n),r=!1},d(t){o[e].d(t),t&&m(s)}}}function kt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const Ct=ht(null,(function(t){t(kt());const e=()=>{t(kt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));function Tt(t,e){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return Lt(t,e||t.getAttribute("href")),{update(e){Lt(t,e)}}}function Lt(t,e){if(!e||e.length<1||"/"!=e.charAt(0))throw Error('Invalid value for "href" attribute: '+e);t.setAttribute("href","#"+e),t.addEventListener("click",Mt)}function Mt(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");history.replaceState({scrollX:window.scrollX,scrollY:window.scrollY},void 0,void 0),window.location.hash=e}function zt(t,e,n){let{routes:s={}}=e,{prefix:r=""}=e,{restoreScrollState:a=!1}=e;class o{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,r,a,o=[],l="",i=t.split("/");for(i[0]||i.shift();r=i.shift();)"*"===(n=r[0])?(o.push("wild"),l+="/(.*)"):":"===n?(s=r.indexOf("?",1),a=r.indexOf(".",1),o.push(r.substring(1,~s?s:~a?a:r.length)),l+=~s&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(l+=(~s?"?":"")+"\\"+r.substring(a))):l+="/"+r;return{keys:o,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(e[s+1]||"")||null}catch(t){n[this._keys[s]]=null}s++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const l=[];s instanceof Map?s.forEach(((t,e)=>{l.push(new o(e,t))})):Object.keys(s).forEach((t=>{l.push(new o(t,s[t]))}));let i=null,c=null,d={};const u=O();async function f(t,e){await(Z(),U),u(t,e)}let $=null;a&&(window.addEventListener("popstate",(t=>{$=t.state&&t.state.scrollY?t.state:null})),j((()=>{$?window.scrollTo($.scrollX,$.scrollY):window.scrollTo(0,0)})));let p=null,g=null;return Ct.subscribe((async t=>{p=t;let e=0;for(;e<l.length;){const s=l[e].match(t.location);if(!s){e++;continue}const r={route:l[e].path,location:t.location,querystring:t.querystring,userData:l[e].userData};if(!await l[e].checkConditions(r))return n(0,i=null),g=null,void f("conditionsFailed",r);f("routeLoading",Object.assign({},r));const a=l[e].component;if(g!=a){a.loading?(n(0,i=a.loading),g=a,n(1,c=a.loadingParams),n(2,d={}),f("routeLoaded",Object.assign({},r,{component:i,name:i.name}))):(n(0,i=null),g=null);const e=await a();if(t!=p)return;n(0,i=e&&e.default||e),g=a}return s&&"object"==typeof s&&Object.keys(s).length?n(1,c=s):n(1,c=null),n(2,d=l[e].props),void f("routeLoaded",Object.assign({},r,{component:i,name:i.name}))}n(0,i=null),g=null})),t.$$set=t=>{"routes"in t&&n(3,s=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,a=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=a?"manual":"auto")},[i,c,d,s,r,a,function(e){R(t,e)},function(e){R(t,e)}]}vt(Ct,(t=>t.location)),vt(Ct,(t=>t.querystring));class Nt extends gt{constructor(t){super(),pt(this,t,zt,yt,o,{routes:3,prefix:4,restoreScrollState:5})}}function Bt(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function Ht(t){let e,n,s,r,a,o,l,i,c,d,u,f=t[5].title+"",$=t[5].content+"";function h(){return t[4](t[7])}return{c(){e=x("div"),n=x("div"),s=x("span"),r=w(f),a=b(),o=x("i"),l=b(),i=x("div"),c=b(),C(s,"class","fontweight-bold fontsize-medium"),C(o,"class","fas fa-chevron-down"),C(n,"class","accordion-header flex flex-justify--between flex-align--center padding-m"),C(i,"class","accordion-body padding-m padding-l--rl fontsize-small"),C(e,"class","accordion-tab margin-m--b"),H(e,"accordion-expanded",t[3]===t[7])},m(t,f){g(t,e,f),p(e,n),p(n,s),p(s,r),p(n,a),p(n,o),p(e,l),p(e,i),i.innerHTML=$,p(e,c),d||(u=k(n,"click",h),d=!0)},p(n,s){t=n,4&s&&f!==(f=t[5].title+"")&&N(r,f),4&s&&$!==($=t[5].content+"")&&(i.innerHTML=$),8&s&&H(e,"accordion-expanded",t[3]===t[7])},d(t){t&&m(e),d=!1,u()}}}function Et(e){let n,s=e[2],r=[];for(let t=0;t<s.length;t+=1)r[t]=Ht(Bt(e,s,t));return{c(){n=x("div");for(let t=0;t<r.length;t+=1)r[t].c();C(n,"data-theme",e[1]),C(n,"class","accordion card-mode padding-l ff-secondary width-1of1")},m(t,e){g(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(12&e){let a;for(s=t[2],a=0;a<s.length;a+=1){const o=Bt(t,s,a);r[a]?r[a].p(o,e):(r[a]=Ht(o),r[a].c(),r[a].m(n,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=s.length}2&e&&C(n,"data-theme",t[1])},i:t,o:t,d(t){t&&m(n),h(r,t)}}}function St(e,n,s){let r,a=t;e.$$.on_destroy.push((()=>a()));const o=xt(void 0);a(),a=l(o,(t=>s(3,r=t)));let{dataTheme:i}=n,{tabs:c}=n;return e.$$set=t=>{"dataTheme"in t&&s(1,i=t.dataTheme),"tabs"in t&&s(2,c=t.tabs)},[o,i,c,r,t=>{!function(t,e,n=e){t.set(n)}(o,r=r!==t?t:void 0,r)}]}class Ft extends gt{constructor(t){super(),pt(this,t,St,Et,o,{activeTab:0,dataTheme:1,tabs:2})}get activeTab(){return this.$$.ctx[0]}}function At(t){const e=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],n=new Date(t),s=new Date,r=new Date(n.getTime()+60*s.getTimezoneOffset()),a=Math.round((s.getTime()-r.getTime())/1e3);let o="";if(Math.floor(a/86400)){const t=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);o=r.getTime()>t.getTime()?"I går":`${r.getDate()}. ${e[r.getMonth()]}.${s.getFullYear()!==r.getFullYear()?` ${r.getFullYear()}`:""}`}else{const t=Math.floor(a%86400/3600),e=Math.floor(a%86400%3600/60),n=a%60;t?o=1===t?`${t} time`:`${t} timer`:e?o=`${e} min`:n&&(o=`${n} sek`)}return o}const _t=t=>({}),jt=t=>({}),Pt=t=>({}),Ot=t=>({}),Dt=t=>({}),It=t=>({}),Rt=t=>({}),Vt=t=>({}),qt=t=>({}),Gt=t=>({}),Wt=t=>({}),Ut=t=>({}),Yt=t=>({}),Zt=t=>({class:"card-media"}),Xt=t=>({}),Jt=t=>({class:"card-header"});function Kt(t){let e,n,s,r,a,o,l,i,d=t[5].header&&te(t),f=t[5].media&&ee(t);const $=t[8].default,h=c($,t,t[7],null);let v=t[5].content&&ne(t),w=t[5].footer&&se(t);return{c(){e=x("div"),d&&d.c(),n=b(),f&&f.c(),s=b(),h&&h.c(),r=b(),v&&v.c(),a=b(),w&&w.c(),C(e,"class",t[4]),C(e,"style",t[1]),C(e,"data-theme",t[2])},m(c,u){g(c,e,u),d&&d.m(e,null),p(e,n),f&&f.m(e,null),p(e,s),h&&h.m(e,null),p(e,r),v&&v.m(e,null),p(e,a),w&&w.m(e,null),o=!0,l||(i=k(e,"click",t[10]),l=!0)},p(t,r){t[5].header?d?(d.p(t,r),32&r&&ot(d,1)):(d=te(t),d.c(),ot(d,1),d.m(e,n)):d&&(rt(),lt(d,1,1,(()=>{d=null})),at()),t[5].media?f?(f.p(t,r),32&r&&ot(f,1)):(f=ee(t),f.c(),ot(f,1),f.m(e,s)):f&&(rt(),lt(f,1,1,(()=>{f=null})),at()),h&&h.p&&(!o||128&r)&&u(h,$,t,t[7],r,null,null),t[5].content?v?(v.p(t,r),32&r&&ot(v,1)):(v=ne(t),v.c(),ot(v,1),v.m(e,a)):v&&(rt(),lt(v,1,1,(()=>{v=null})),at()),t[5].footer?w?(w.p(t,r),32&r&&ot(w,1)):(w=se(t),w.c(),ot(w,1),w.m(e,null)):w&&(rt(),lt(w,1,1,(()=>{w=null})),at()),(!o||16&r)&&C(e,"class",t[4]),(!o||2&r)&&C(e,"style",t[1]),(!o||4&r)&&C(e,"data-theme",t[2])},i(t){o||(ot(d),ot(f),ot(h,t),ot(v),ot(w),o=!0)},o(t){lt(d),lt(f),lt(h,t),lt(v),lt(w),o=!1},d(t){t&&m(e),d&&d.d(),f&&f.d(),h&&h.d(t),v&&v.d(),w&&w.d(),l=!1,i()}}}function Qt(t){let n,s,r,a,o,l,i,d,f=t[5].header&&re(t),$=t[5].media&&ae(t);const h=t[8].default,v=c(h,t,t[7],null);let w=t[5].content&&oe(t),y=t[5].footer&&le(t),C=[{href:t[0]},{class:t[4]},{style:t[1]},{"data-theme":t[2]},t[3]],L={};for(let t=0;t<C.length;t+=1)L=e(L,C[t]);return{c(){n=x("a"),f&&f.c(),s=b(),$&&$.c(),r=b(),v&&v.c(),a=b(),w&&w.c(),o=b(),y&&y.c(),T(n,L)},m(e,c){g(e,n,c),f&&f.m(n,null),p(n,s),$&&$.m(n,null),p(n,r),v&&v.m(n,null),p(n,a),w&&w.m(n,null),p(n,o),y&&y.m(n,null),l=!0,i||(d=k(n,"click",t[9]),i=!0)},p(t,e){t[5].header?f?(f.p(t,e),32&e&&ot(f,1)):(f=re(t),f.c(),ot(f,1),f.m(n,s)):f&&(rt(),lt(f,1,1,(()=>{f=null})),at()),t[5].media?$?($.p(t,e),32&e&&ot($,1)):($=ae(t),$.c(),ot($,1),$.m(n,r)):$&&(rt(),lt($,1,1,(()=>{$=null})),at()),v&&v.p&&(!l||128&e)&&u(v,h,t,t[7],e,null,null),t[5].content?w?(w.p(t,e),32&e&&ot(w,1)):(w=oe(t),w.c(),ot(w,1),w.m(n,o)):w&&(rt(),lt(w,1,1,(()=>{w=null})),at()),t[5].footer?y?(y.p(t,e),32&e&&ot(y,1)):(y=le(t),y.c(),ot(y,1),y.m(n,null)):y&&(rt(),lt(y,1,1,(()=>{y=null})),at()),T(n,L=it(C,[(!l||1&e)&&{href:t[0]},(!l||16&e)&&{class:t[4]},(!l||2&e)&&{style:t[1]},(!l||4&e)&&{"data-theme":t[2]},8&e&&t[3]]))},i(t){l||(ot(f),ot($),ot(v,t),ot(w),ot(y),l=!0)},o(t){lt(f),lt($),lt(v,t),lt(w),lt(y),l=!1},d(t){t&&m(n),f&&f.d(),$&&$.d(),v&&v.d(t),w&&w.d(),y&&y.d(),i=!1,d()}}}function te(t){let e,n;const s=t[8].header,r=c(s,t,t[7],Vt);return{c(){e=x("div"),r&&r.c(),C(e,"class","card-header")},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||128&e)&&u(r,s,t,t[7],e,Rt,Vt)},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function ee(t){let e,n;const s=t[8].media,r=c(s,t,t[7],It);return{c(){e=x("div"),r&&r.c(),C(e,"class","card-media")},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||128&e)&&u(r,s,t,t[7],e,Dt,It)},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function ne(t){let e,n;const s=t[8].content,r=c(s,t,t[7],Ot);return{c(){e=x("div"),r&&r.c(),C(e,"class","card-content")},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||128&e)&&u(r,s,t,t[7],e,Pt,Ot)},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function se(t){let e,n;const s=t[8].footer,r=c(s,t,t[7],jt);return{c(){e=x("div"),r&&r.c(),C(e,"class","card-footer")},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||128&e)&&u(r,s,t,t[7],e,_t,jt)},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function re(t){let e;const n=t[8].header,s=c(n,t,t[7],Jt);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,r){s&&s.p&&(!e||128&r)&&u(s,n,t,t[7],r,Xt,Jt)},i(t){e||(ot(s,t),e=!0)},o(t){lt(s,t),e=!1},d(t){s&&s.d(t)}}}function ae(t){let e;const n=t[8].media,s=c(n,t,t[7],Zt);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,r){s&&s.p&&(!e||128&r)&&u(s,n,t,t[7],r,Yt,Zt)},i(t){e||(ot(s,t),e=!0)},o(t){lt(s,t),e=!1},d(t){s&&s.d(t)}}}function oe(t){let e,n;const s=t[8].content,r=c(s,t,t[7],Ut);return{c(){e=x("div"),r&&r.c(),C(e,"class","card-content")},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||128&e)&&u(r,s,t,t[7],e,Wt,Ut)},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function le(t){let e,n;const s=t[8].footer,r=c(s,t,t[7],Gt);return{c(){e=x("div"),r&&r.c(),C(e,"class","card-footer")},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||128&e)&&u(r,s,t,t[7],e,qt,Gt)},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function ie(t){let e,n,s,r;const a=[Qt,Kt],o=[];function l(t,e){return t[0]?0:1}return e=l(t),n=o[e]=a[e](t),{c(){n.c(),s=y()},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?o[e].p(t,r):(rt(),lt(o[i],1,1,(()=>{o[i]=null})),at(),n=o[e],n?n.p(t,r):(n=o[e]=a[e](t),n.c()),ot(n,1),n.m(s.parentNode,s))},i(t){r||(ot(n),r=!0)},o(t){lt(n),r=!1},d(t){o[e].d(t),t&&m(s)}}}function ce(t,n,s){let r,{$$slots:a={},$$scope:o}=n;const l=function(t){const e={};for(const n in t)e[n]=!0;return e}(a);let{className:i}=n,{url:c}=n,{style:d}=n,{theme:u}=n;const $={};for(const t in n)0===t.indexOf("data-")&&($[t]=n[t]);return t.$$set=t=>{s(11,n=e(e({},n),f(t))),"className"in t&&s(6,i=t.className),"url"in t&&s(0,c=t.url),"style"in t&&s(1,d=t.style),"theme"in t&&s(2,u=t.theme),"$$scope"in t&&s(7,o=t.$$scope)},t.$$.update=()=>{64&t.$$.dirty&&s(4,r=`${i} card`)},n=f(n),[c,d,u,$,r,l,i,o,a,function(e){R(t,e)},function(e){R(t,e)}]}class de extends gt{constructor(t){super(),pt(this,t,ce,ie,o,{className:6,url:0,style:1,theme:2})}}function ue(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-down"},{class:"svg-inline--fa fa-angle-down fa-w-10"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 320 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-down"},{class:"svg-inline--fa fa-angle-down fa-w-10"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 320 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function fe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function $e(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-left"},{class:"svg-inline--fa fa-angle-left fa-w-6"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 192 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-left"},{class:"svg-inline--fa fa-angle-left fa-w-6"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 192 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function pe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function ge(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-right"},{class:"svg-inline--fa fa-angle-right fa-w-6"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 192 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-right"},{class:"svg-inline--fa fa-angle-right fa-w-6"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 192 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function me(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function he(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-up"},{class:"svg-inline--fa fa-angle-up fa-w-10"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 320 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"angle-up"},{class:"svg-inline--fa fa-angle-up fa-w-10"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 320 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function xe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function ve(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 51 47"},{style:"enable-background:new 0 0 51 47;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M27,46.5h-4.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H27c0.8,0,1.5,0.7,1.5,1.5S27.8,46.5,27,46.5z M15,46.5H2\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h13c0.8,0,1.5,0.7,1.5,1.5S15.8,46.5,15,46.5z M49,35.4H2c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5h47c0.8,0,1.5,0.7,1.5,1.5S49.8,35.4,49,35.4z M49,24.3H33.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49\n\tc0.8,0,1.5,0.7,1.5,1.5S49.8,24.3,49,24.3z M22.7,24.3H3.3c-1.6,0-2.8-1.2-2.8-2.8V3c0-1.6,1.2-2.8,2.8-2.8h19.4\n\tc1.6,0,2.8,1.2,2.8,2.8v18.5C25.4,23.1,24.3,24.3,22.7,24.3z M3.5,21.3l18.9,0V3.3l-18.9,0L3.5,21.3z M49,13.2H33.5\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,13.2,49,13.2z M49,3.3H33.5c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,3.3,49,3.3z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 51 47"},{style:"enable-background:new 0 0 51 47;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function we(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function be(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 16 16"},{style:"enable-background:new 0 0 16 16;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{class:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"class","st0"),C(r,"d","M8,15.6c-4.2,0-7.6-3.4-7.6-7.6S3.8,0.4,8,0.4s7.6,3.4,7.6,7.6v1.3c0,1.3-1.1,2.4-2.4,2.4c-1,0-1.8-0.6-2.2-1.4\n\tc-0.7,0.9-1.7,1.4-2.9,1.4C6,11.7,4.3,10,4.3,8C4.3,6,6,4.3,8,4.3c1.1,0,2,0.5,2.7,1.2V4.8h1v4.5c0,0.8,0.6,1.4,1.4,1.4\n\ts1.4-0.6,1.4-1.4V8c0-3.6-2.9-6.6-6.6-6.6C4.4,1.4,1.4,4.4,1.4,8c0,3.6,2.9,6.6,6.6,6.6V15.6z M8,5.3C6.5,5.3,5.3,6.5,5.3,8\n\tc0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7C10.7,6.5,9.5,5.3,8,5.3z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 16 16"},{style:"enable-background:new 0 0 16 16;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function ye(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function ke(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{x:"0px"},{y:"0px"},{viewBox:"0 0 442.6 335.1"},{style:"enable-background:new 0 0 442.6 335.1;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M410.8,3.5l-280,280l-99-99c-4.7-4.7-12.3-4.7-17,0L3.5,195.8c-4.7,4.7-4.7,12.3,0,17l118.8,118.8c4.7,4.7,12.3,4.7,17,0\n\tL439.1,31.8c4.7-4.7,4.7-12.3,0-17L427.8,3.5C423.1-1.2,415.5-1.2,410.8,3.5L410.8,3.5z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{x:"0px"},{y:"0px"},{viewBox:"0 0 442.6 335.1"},{style:"enable-background:new 0 0 442.6 335.1;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Ce(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Te(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"clock"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"clock"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Le(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Me(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{x:"0px"},{y:"0px"},{viewBox:"0 0 576 448"},{style:"enable-background:new 0 0 576 448;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M528,0H48C21.5,0,0,21.5,0,48v352c0,26.5,21.5,48,48,48h480c26.5,0,48-21.5,48-48V48C576,21.5,554.5,0,528,0z M48,32h480\n\tc8.8,0,16,7.2,16,16v48H32V48C32,39.2,39.2,32,48,32z M528,416H48c-8.8,0-16-7.2-16-16V192h512v208C544,408.8,536.8,416,528,416z\n\t M192,332v8c0,6.6-5.4,12-12,12h-72c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h72C186.6,320,192,325.4,192,332z M384,332v8\n\tc0,6.6-5.4,12-12,12H236c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h136C378.6,320,384,325.4,384,332z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{x:"0px"},{y:"0px"},{viewBox:"0 0 576 448"},{style:"enable-background:new 0 0 576 448;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function ze(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ne(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 72.8 72.8"},{style:"enable-background:new 0 0 72.8 72.8;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2\n\tH30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 72.8 72.8"},{style:"enable-background:new 0 0 72.8 72.8;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Be(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function He(n){let s,r,a,o,l=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 122.1 595.3 597.4"},{"enable-background":"new 0 122.1 595.3 597.4"},{"xml:space":"preserve"},n[0]],i={};for(let t=0;t<l.length;t+=1)i=e(i,l[t]);return{c(){s=v("svg"),r=v("g"),a=v("g"),o=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,"enable-background":!0,"xml:space":!0},1);var e=M(s);r=z(e,"g",{},1);var n=M(r);a=z(n,"g",{},1);var l=M(a);o=z(l,"path",{d:!0},1),M(o).forEach(m),l.forEach(m),n.forEach(m),e.forEach(m),this.h()},h(){C(o,"d","M237.4,122.1h120.5v238.5h237.4V481H357.9v238.5H237.4V481H0V360.5h237.4V122.1z"),L(s,i)},m(t,e){g(t,s,e),p(s,r),p(r,a),p(a,o)},p(t,[e]){L(s,i=it(l,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 122.1 595.3 597.4"},{"enable-background":"new 0 122.1 595.3 597.4"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Ee(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Se(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{x:"0px"},{y:"0px"},{viewBox:"0 0 512 384"},{style:"enable-background:new 0 0 512 384;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M464,0H48C21.5,0,0,21.5,0,48v288c0,26.5,21.5,48,48,48h416c26.5,0,48-21.5,48-48V48C512,21.5,490.5,0,464,0z M48,32h416\n\tc8.8,0,16,7.2,16,16v41.4c-21.9,18.5-53.2,44-150.6,121.3c-16.9,13.4-50.2,45.7-73.4,45.3c-23.2,0.4-56.6-31.9-73.4-45.3\n\tC85.2,133.4,53.9,107.9,32,89.4V48C32,39.2,39.2,32,48,32z M464,352H48c-8.8,0-16-7.2-16-16V131c22.8,18.7,58.8,47.6,130.7,104.7\n\tc20.5,16.4,56.7,52.5,93.3,52.3c36.4,0.3,72.3-35.5,93.3-52.3c71.9-57.1,107.9-86,130.7-104.7v205C480,344.8,472.8,352,464,352z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{x:"0px"},{y:"0px"},{viewBox:"0 0 512 384"},{style:"enable-background:new 0 0 512 384;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Fe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ae(n){let s,r,a,o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 34 16.4"},n[0]],l={};for(let t=0;t<o.length;t+=1)l=e(l,o[t]);return{c(){s=v("svg"),r=v("path"),a=v("path"),this.h()},l(t){s=z(t,"svg",{xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0,fill:!0},1),M(r).forEach(m),a=z(e,"path",{d:!0},1),M(a).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M15.6.8c.8-.8 2-.8 2.8 0l6.7 6.7c1.9 1.9 4.4 2.9 7.1 2.9H34v6H0v-6h1.9c2.7 0 5.2-1.1 7.1-2.9L15.6.8z"),C(r,"fill","#fff"),C(a,"d","M9.7 12.9l6.6-6.6c.4-.4 1-.4 1.4 0l6.6 6.6c.6.6.2 1.7-.7 1.7H10.4c-.9 0-1.3-1-.7-1.7z"),L(s,l)},m(t,e){g(t,s,e),p(s,r),p(s,a)},p(t,[e]){L(s,l=it(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 34 16.4"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function _e(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function je(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 55 55"},{style:"enable-background:new 0 0 55 55;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M43.7,54.5c-0.3,0-0.6,0-0.9-0.1l-32.7-6.6c-0.8-0.2-1.3-1-1.2-1.8c0.2-0.8,1-1.3,1.8-1.2l32.8,6.6c0.1,0,0.1,0,0.2,0\n\tc0.1,0,0.1,0,0.6-0.1l0.1,0c0,0,0-0.1,0.1-0.1c0-0.1,0-0.1,0-0.2l7.1-35c0-0.2,0-0.4-0.1-0.6c-0.1-0.1-0.2-0.2-0.4-0.3L46,14.3\n\tc-0.8-0.1-1.4-0.9-1.2-1.7c0.1-0.8,0.9-1.4,1.7-1.2l4.9,0.9c1,0.2,1.8,0.7,2.4,1.5c0.6,0.9,0.8,1.9,0.6,2.9l-7.1,34.9\n\tc-0.1,1-0.8,2-1.7,2.5c-0.1,0-0.1,0.1-0.2,0.1l-0.2,0.1C44.8,54.3,44.3,54.5,43.7,54.5z M39.6,43.3H4.2c-2.2,0-3.7-1.6-3.7-3.7V4.2\n\tc0-2.2,1.6-3.7,3.7-3.7h35.4c2.2,0,3.7,1.6,3.7,3.7v35.4C43.3,41.8,41.8,43.3,39.6,43.3z M3.5,36.7v2.9c0,0.5,0.2,0.7,0.7,0.7h35.4\n\tc0.5,0,0.7-0.2,0.7-0.7v-2.9H3.5z M37.7,33.7h2.6V4.2c0-0.5-0.2-0.7-0.7-0.7H4.2c-0.5,0-0.7,0.2-0.7,0.7v29.5h2.6\n\tc0.2-1.7,0.6-3.4,1.4-5.1c1.2-2.4,4.8-3.7,9.8-5.4c0.2-0.5,0.2-1.7,0-2.1c-2.1-2.4-3-5.2-2.8-8.1c0-2.2,0.6-4,1.9-5.5\n\tc1.4-1.6,3.3-2.5,5.6-2.5c2,0,3.9,0.9,5.5,2.4c0,0,0.1,0.1,0.1,0.1c1.3,1.6,1.9,3.5,1.7,5.6c0.2,3-0.8,5.9-2.7,7.9\n\tc-0.2,0.5-0.2,1.8,0,2.3c0.6,0.2,1.3,0.5,1.9,0.7c4,1.5,6.9,2.6,7.9,4.6C37.1,30.3,37.6,32,37.7,33.7z M9.1,33.7h25.6\n\tc-0.2-1.3-0.5-2.6-1.1-3.9c-0.4-0.9-3.4-2-6.2-3c-0.7-0.3-1.4-0.5-2.2-0.8c-0.5-0.2-1.2-0.7-1.5-1.8c-0.5-1.5-0.3-3.9,0.4-4.9\n\tc0.1-0.1,0.1-0.2,0.2-0.2c1.4-1.4,2.2-3.6,2-5.9c0-0.1,0-0.2,0-0.3c0.2-1.3-0.1-2.5-0.9-3.4c-0.6-0.6-1.8-1.5-3.3-1.5\n\tc-1.4,0-2.5,0.5-3.3,1.5c-0.8,1-1.2,2.2-1.2,3.7c0,0,0,0.1,0,0.1c-0.2,2.2,0.5,4.2,2.1,6c0.9,0.9,1.1,3.3,0.8,4.6\n\tc-0.4,1.6-1.3,2.1-1.8,2.3c-2.8,0.9-7.5,2.5-8.2,3.9C9.7,31.1,9.3,32.4,9.1,33.7z M17.3,21.1C17.3,21.2,17.3,21.2,17.3,21.1\n\tC17.3,21.2,17.3,21.2,17.3,21.1z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 55 55"},{style:"enable-background:new 0 0 55 55;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Pe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Oe(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 53 53"},{style:"enable-background:new 0 0 53 53;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9\n\tc1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9\n\tC15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4\n\tc-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1\n\tc0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6\n\tc-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3\n\tl-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9\n\tc-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1\n\tC40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2\n\tc0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2\n\tc-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2\n\tC45,52.2,44.5,52.5,44,52.5z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 53 53"},{style:"enable-background:new 0 0 53 53;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function De(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ie(n){let s,r,a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Re(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ve(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"history"},{class:"svg-inline--fa fa-history fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"history"},{class:"svg-inline--fa fa-history fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function qe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ge(n){let s,r,a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 448 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 448 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function We(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ue(n){let s,r,a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 448 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 448 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Ye(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ze(n){let s,r,a,o,l,i,c=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 63.6 81.5"},{style:"enable-background:new 0 0 63.6 81.5;"},{"xml:space":"preserve"},n[0]],d={};for(let t=0;t<c.length;t+=1)d=e(d,c[t]);return{c(){s=v("svg"),r=v("g"),a=v("rect"),o=v("polygon"),l=v("path"),i=v("polygon"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"g",{},1);var n=M(r);a=z(n,"rect",{y:!0,width:!0,height:!0},1),M(a).forEach(m),o=z(n,"polygon",{points:!0},1),M(o).forEach(m),l=z(n,"path",{d:!0},1),M(l).forEach(m),i=z(n,"polygon",{points:!0},1),M(i).forEach(m),n.forEach(m),e.forEach(m),this.h()},h(){C(a,"y","70.7"),C(a,"width","63.3"),C(a,"height","10.9"),C(o,"points","0,81.5 21.2,61.8 21.2,47.8 0,67.5 \t"),C(l,"d","M31.8,0C14.2,0,0,14.2,0,31.8c0,13.8,8.9,25.6,21.2,30v-14c-5.2-3.4-8.6-9.3-8.6-16c0-10.6,8.6-19.2,19.2-19.2\n\t\tS51,21.2,51,31.8c0,6.7-3.4,12.5-8.6,16v14c12.3-4.4,21.2-16.1,21.2-30C63.6,14.2,49.3,0,31.8,0z"),C(i,"points","63.6,81.5 42.4,61.7 42.4,47.8 63.6,67.5 \t"),L(s,d)},m(t,e){g(t,s,e),p(s,r),p(r,a),p(r,o),p(r,l),p(r,i)},p(t,[e]){L(s,d=it(c,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 63.6 81.5"},{style:"enable-background:new 0 0 63.6 81.5;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Xe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Je(n){let s,r,a,o,l,i,c,d,u,f,$=[{version:"1.1"},{id:"Lag_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 30 30"},{"enable-background":"new 0 0 30 30"},{"xml:space":"preserve"},n[0]],h={};for(let t=0;t<$.length;t+=1)h=e(h,$[t]);return{c(){s=v("svg"),r=v("g"),a=v("g"),o=v("rect"),l=v("g"),i=v("g"),c=v("rect"),d=v("g"),u=v("g"),f=v("rect"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,"enable-background":!0,"xml:space":!0},1);var e=M(s);r=z(e,"g",{},1);var n=M(r);a=z(n,"g",{},1);var $=M(a);o=z($,"rect",{y:!0,width:!0,height:!0},1),M(o).forEach(m),$.forEach(m),n.forEach(m),l=z(e,"g",{},1);var p=M(l);i=z(p,"g",{},1);var g=M(i);c=z(g,"rect",{y:!0,width:!0,height:!0},1),M(c).forEach(m),g.forEach(m),p.forEach(m),d=z(e,"g",{},1);var h=M(d);u=z(h,"g",{},1);var x=M(u);f=z(x,"rect",{y:!0,width:!0,height:!0},1),M(f).forEach(m),x.forEach(m),h.forEach(m),e.forEach(m),this.h()},h(){C(o,"y","4.3"),C(o,"width","30"),C(o,"height","4"),C(c,"y","12.3"),C(c,"width","30"),C(c,"height","4"),C(f,"y","20.3"),C(f,"width","30"),C(f,"height","4"),L(s,h)},m(t,e){g(t,s,e),p(s,r),p(r,a),p(a,o),p(s,l),p(l,i),p(i,c),p(s,d),p(d,u),p(u,f)},p(t,[e]){L(s,h=it($,[{version:"1.1"},{id:"Lag_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 30 30"},{"enable-background":"new 0 0 30 30"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Ke(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Qe(n){let s,r,a=[{version:"1.1"},{id:"miteb-regular"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0"},{y:"0"},{viewBox:"0 0 512 512"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zm-23.3 115H45.8V71.7H187v69.8zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 230.7H324.9V71.7h141.2v185.5zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM187 440.5H45.8v-160H187v160zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 90.4H324.9v-45.2h141.2v45.2z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"miteb-regular"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0"},{y:"0"},{viewBox:"0 0 512 512"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function tn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function en(n){let s,r,a=[{version:"1.1"},{id:"miteb-solid"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0"},{y:"0"},{viewBox:"0 0 512 512"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"miteb-solid"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0"},{y:"0"},{viewBox:"0 0 512 512"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function nn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function sn(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 42 39"},{style:"enable-background:new 0 0 42 39;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M35.8,38.5H6.2c-3.5,0-6.2-2.7-6.2-6.2V2.7C0,1.2,1.2,0,2.7,0h26.1c1.6,0,2.7,1.2,2.7,2.7v29.6c0,2.4,1.8,4.2,4.2,4.2\n\ts4.2-1.8,4.2-4.2V6.2c0-0.6,0.4-1,1-1s1,0.4,1,1v26.1C42,35.8,39.3,38.5,35.8,38.5z M2.7,2C2.2,2,2,2.2,2,2.7v29.6\n\tc0,2.4,1.8,4.2,4.2,4.2h25c-1-1.1-1.6-2.6-1.6-4.2V2.7c0-0.5-0.2-0.7-0.7-0.7H2.7z M35.8,33.8c-0.6,0-1-0.4-1-1V6.2c0-0.6,0.4-1,1-1\n\ts1,0.4,1,1v26.5C36.8,33.3,36.3,33.8,35.8,33.8z M25.3,29.8H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1\n\tS25.9,29.8,25.3,29.8z M25.3,24.6H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1S25.9,24.6,25.3,24.6z M25.3,19.4h-4.9\n\tc-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,19.4,25.3,19.4z M15.8,19.4H7.1c-1.1,0-1.9-0.8-1.9-1.9V8.8\n\tC5.2,7.8,6,7,7.1,7h8.7c1.1,0,1.9,0.8,1.9,1.9v8.7C17.7,18.6,16.8,19.4,15.8,19.4z M7.2,17.4l8.4,0V9L7.2,9L7.2,17.4z M25.3,14.2\n\th-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,14.2,25.3,14.2z M25.3,9h-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9\n\tc0.6,0,1,0.4,1,1S25.9,9,25.3,9z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 42 39"},{style:"enable-background:new 0 0 42 39;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function rn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function an(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 15 15"},{style:"enable-background:new 0 0 15 15;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M12.9,14.2c-0.1,0-0.1,0-0.2,0v0c-6.3-0.6-11.3-5.7-12-12c0-0.5,0.1-0.9,0.4-1.3C1.5,0.6,2,0.4,2.5,0.4h2.3\n\tc0.8,0,1.5,0.5,1.7,1.2l0.7,2.2c0.2,0.6,0,1.3-0.4,1.8L6.4,6c0,0-0.1,0.1,0,0.2c0.7,1,1.3,1.6,2.4,2.4c0.1,0,0.1,0,0.2,0l0.4-0.4\n\tc0.5-0.5,1.2-0.6,1.8-0.4l2.2,0.7c0.7,0.2,1.2,0.9,1.2,1.7v2.3c0,0.5-0.2,1-0.6,1.3C13.7,14,13.3,14.2,12.9,14.2z M2.5,1.4\n\tc-0.2,0-0.4,0.1-0.6,0.2C1.8,1.8,1.7,1.9,1.8,2.1C2.3,8,7,12.6,12.8,13.2l0,0c0.2,0,0.4,0,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6v-2.3\n\tc0-0.3-0.2-0.6-0.5-0.7l-2.2-0.7c-0.3-0.1-0.6,0-0.8,0.2L9.6,9.2c-0.4,0.4-1,0.4-1.4,0.1C7,8.5,6.3,7.9,5.6,6.7\n\tc-0.3-0.4-0.2-1,0.1-1.4L6.1,5c0.2-0.2,0.3-0.5,0.2-0.8L5.5,1.9C5.4,1.6,5.1,1.4,4.8,1.4H2.5z M14,5.2c-0.3,0-0.5-0.2-0.5-0.5\n\tc0-1.9-1.5-3.4-3.4-3.4c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5c2.4,0,4.4,2,4.4,4.4C14.5,5,14.3,5.2,14,5.2z M11.5,5.2\n\tC11.2,5.2,11,5,11,4.8C11,4.3,10.6,4,10.2,4C9.9,4,9.7,3.7,9.7,3.5S9.9,3,10.2,3c1,0,1.8,0.8,1.8,1.8C12,5,11.8,5.2,11.5,5.2z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 15 15"},{style:"enable-background:new 0 0 15 15;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function on(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function ln(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fal"},{"data-icon":"play-circle"},{class:"svg-inline--fa fa-play-circle fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fal"},{"data-icon":"play-circle"},{class:"svg-inline--fa fa-play-circle fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function cn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function dn(n){let s,r,a,o,l=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 24 10"},{style:"enable-background:new 0 0 24 10;"},{"xml:space":"preserve"},n[0]],i={};for(let t=0;t<l.length;t+=1)i=e(i,l[t]);return{c(){s=v("svg"),r=v("path"),a=v("path"),o=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),a=z(e,"path",{d:!0},1),M(a).forEach(m),o=z(e,"path",{d:!0},1),M(o).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M0,9V0.4h3.7c0.9,0,1.6,0.1,2,0.2c0.4,0.2,0.8,0.4,1,0.8C6.9,1.9,7,2.3,7,2.8C7,3.5,6.8,4,6.5,4.4C6.1,4.8,5.5,5.1,4.8,5.2\n\tc0.4,0.2,0.7,0.5,0.9,0.7c0.2,0.3,0.6,0.7,1,1.4l1,1.7H5.6L4.4,7.1C3.9,6.5,3.6,6,3.5,5.9C3.3,5.7,3.1,5.6,3,5.5\n\tC2.8,5.4,2.5,5.4,2.1,5.4H1.7V9H0z M1.7,4H3c0.8,0,1.4,0,1.6-0.1s0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.6c0-0.3-0.1-0.5-0.2-0.7\n\tC4.9,2.1,4.6,1.9,4.4,1.9c-0.1,0-0.6,0-1.3,0H1.7V4z"),C(a,"d","M8.2,6.2L9.9,6c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.3,0.4c0.6,0,1-0.1,1.3-0.4c0.3-0.2,0.4-0.5,0.4-0.8\n\tc0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.7-0.2-1.4-0.4c-0.9-0.2-1.6-0.5-2-0.8c-0.5-0.5-0.8-1-0.8-1.7\n\tc0-0.4,0.1-0.8,0.4-1.2C9.2,1.1,9.5,0.8,10,0.6c0.5-0.2,1-0.3,1.7-0.3c1.1,0,1.9,0.2,2.4,0.7c0.5,0.5,0.8,1.1,0.9,1.9l-1.7,0.1\n\tC13.2,2.5,13,2.2,12.8,2c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc0.2,0.2,0.8,0.4,1.6,0.6c0.8,0.2,1.5,0.4,1.9,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4\n\tc-0.3,0.4-0.7,0.8-1.2,1c-0.5,0.2-1.1,0.3-1.9,0.3c-1.1,0-1.9-0.2-2.5-0.8C8.7,7.9,8.3,7.2,8.2,6.2z"),C(o,"d","M16.2,6.2L17.9,6c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.3,0.4c0.6,0,1-0.1,1.3-0.4c0.3-0.2,0.4-0.5,0.4-0.8\n\tc0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.7-0.2-1.4-0.4c-0.9-0.2-1.6-0.5-2-0.8c-0.5-0.5-0.8-1-0.8-1.7\n\tc0-0.4,0.1-0.8,0.4-1.2c0.2-0.4,0.6-0.7,1.1-0.9c0.5-0.2,1-0.3,1.7-0.3c1.1,0,1.9,0.2,2.4,0.7c0.5,0.5,0.8,1.1,0.9,1.9l-1.7,0.1\n\tC21.2,2.5,21,2.2,20.8,2c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc0.2,0.2,0.8,0.4,1.6,0.6c0.8,0.2,1.5,0.4,1.9,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4\n\tc-0.3,0.4-0.7,0.8-1.2,1c-0.5,0.2-1.1,0.3-1.9,0.3c-1.1,0-1.9-0.2-2.5-0.8C16.7,7.9,16.3,7.2,16.2,6.2z"),L(s,i)},m(t,e){g(t,s,e),p(s,r),p(s,a),p(s,o)},p(t,[e]){L(s,i=it(l,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 24 10"},{style:"enable-background:new 0 0 24 10;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function un(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function fn(n){let s,r,a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 320 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 320 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function $n(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function pn(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"star"},{class:"svg-inline--fa fa-star fa-w-18"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 576 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"star"},{class:"svg-inline--fa fa-star fa-w-18"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 576 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function gn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function mn(n){let s,r,a=[{id:"tag-regular"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"tag"},{class:"svg-inline--fa fa-tag fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{id:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a47.998 47.998 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM259.886 463.996L48 252.118V48h204.118L464 259.882 259.886 463.996zM192 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{id:"tag-regular"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"tag"},{class:"svg-inline--fa fa-tag fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function hn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function xn(n){let s,r,a=[{id:"tag-solid"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"tag"},{class:"svg-inline--fa fa-tag fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{id:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{id:"tag-solid"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"tag"},{class:"svg-inline--fa fa-tag fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function vn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function wn(n){let s,r,a=[{id:"tags-regular"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"tags"},{class:"svg-inline--fa fa-tags fa-w-20"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 640 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{id:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-.36-.36L592 259.882 331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zm-128 0L293.823 497.941C284.451 507.314 272.166 512 259.882 512c-12.284 0-24.569-4.686-33.941-14.059L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118a47.998 47.998 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zM464 259.882L252.118 48H48v204.118l211.886 211.878L464 259.882zM144 96c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{id:"tags-regular"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"tags"},{class:"svg-inline--fa fa-tags fa-w-20"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 640 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function bn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function yn(n){let s,r,a=[{id:"tags-solid"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"tags"},{class:"svg-inline--fa fa-tags fa-w-20"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 640 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{id:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{id:"tags-solid"},{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"tags"},{class:"svg-inline--fa fa-tags fa-w-20"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 640 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function kn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Cn(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"toggle-off"},{class:"svg-inline--fa fa-toggle-off fa-w-18"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 576 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM48 256c0-79.583 64.404-144 144-144 79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144-79.582 0-144-64.404-144-144zm336 144h-65.02c86.704-76.515 86.683-211.504 0-288H384c79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"toggle-off"},{class:"svg-inline--fa fa-toggle-off fa-w-18"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 576 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Tn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function Ln(n){let s,r,a=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"toggle-on"},{class:"svg-inline--fa fa-toggle-on fa-w-18"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 576 512"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=M(s);r=z(e,"path",{fill:!0,d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"fill","currentColor"),C(r,"d","M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 336c-79.6 0-144-64.4-144-144s64.4-144 144-144 144 64.4 144 144-64.4 144-144 144z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"toggle-on"},{class:"svg-inline--fa fa-toggle-on fa-w-18"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 576 512"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Mn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}function zn(n){let s,r,a=[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 51 48"},{style:"enable-background:new 0 0 51 48;"},{"xml:space":"preserve"},n[0]],o={};for(let t=0;t<a.length;t+=1)o=e(o,a[t]);return{c(){s=v("svg"),r=v("path"),this.h()},l(t){s=z(t,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0},1);var e=M(s);r=z(e,"path",{d:!0},1),M(r).forEach(m),e.forEach(m),this.h()},h(){C(r,"d","M45,47.5H6.1c-3.1,0-5.6-2.5-5.6-5.6V6.1C0.5,3,3,0.5,6.1,0.5H45c3.1,0,5.6,2.5,5.6,5.6v35.8\n\tC50.6,45,48.1,47.5,45,47.5z M6.1,3.5c-1.4,0-2.6,1.2-2.6,2.6v35.8c0,1.4,1.2,2.6,2.6,2.6H45c1.4,0,2.6-1.2,2.6-2.6V6.1\n\tc0-1.4-1.2-2.6-2.6-2.6H6.1z M30.7,43.4c-2.1,0-3.5-1.5-3.5-3.5v-0.5h-19c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h19v-0.5\n\tc0-2.1,1.5-3.5,3.5-3.5s3.5,1.5,3.5,3.5v0.5H43c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5h-8.7v0.5C34.2,41.9,32.8,43.4,30.7,43.4z\n\t M30.1,37.8v2c0,0.4,0.1,0.5,0.5,0.5s0.5-0.1,0.5-0.5v-4.1c0-0.4-0.1-0.5-0.5-0.5s-0.5,0.1-0.5,0.5V37.8z M20.2,30.3\n\tc-0.5,0-0.9-0.1-1.3-0.4c-0.8-0.5-1.3-1.3-1.3-2.3V13.7c0-1,0.6-1.9,1.4-2.4c0.9-0.5,1.9-0.4,2.6,0.1l12,6.9\n\tc0.8,0.4,1.4,1.3,1.4,2.3c0,1-0.6,1.9-1.4,2.4l-12,6.9c0,0-0.1,0-0.1,0C21.1,30.2,20.6,30.3,20.2,30.3z M20.8,28.7L20.8,28.7\n\tL20.8,28.7z M20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6z M20.7,14.3V27l11-6.3L20.7,14.3z M32.2,21\n\tC32.2,21,32.2,21,32.2,21L32.2,21z M32.2,20.4C32.2,20.4,32.2,20.4,32.2,20.4L32.2,20.4z M19.8,13.8C19.8,13.8,19.8,13.8,19.8,13.8\n\tC19.8,13.8,19.8,13.8,19.8,13.8z"),L(s,o)},m(t,e){g(t,s,e),p(s,r)},p(t,[e]){L(s,o=it(a,[{version:"1.1"},{id:"Layer_1"},{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{x:"0px"},{y:"0px"},{viewBox:"0 0 51 48"},{style:"enable-background:new 0 0 51 48;"},{"xml:space":"preserve"},1&e&&t[0]]))},i:t,o:t,d(t){t&&m(s)}}}function Nn(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),f(t)))},[n=f(n)]}var Bn=Object.freeze({__proto__:null,angledown:class extends gt{constructor(t){super(),pt(this,t,fe,ue,o,{})}},angleleft:class extends gt{constructor(t){super(),pt(this,t,pe,$e,o,{})}},angleright:class extends gt{constructor(t){super(),pt(this,t,me,ge,o,{})}},angleup:class extends gt{constructor(t){super(),pt(this,t,xe,he,o,{})}},article:class extends gt{constructor(t){super(),pt(this,t,we,ve,o,{})}},at:class extends gt{constructor(t){super(),pt(this,t,ye,be,o,{})}},check:class extends gt{constructor(t){super(),pt(this,t,Ce,ke,o,{})}},clock:class extends gt{constructor(t){super(),pt(this,t,Le,Te,o,{})}},creditcard:class extends gt{constructor(t){super(),pt(this,t,ze,Me,o,{})}},ebplus_icon:class extends gt{constructor(t){super(),pt(this,t,Be,Ne,o,{})}},ebplus_sort:class extends gt{constructor(t){super(),pt(this,t,Ee,He,o,{})}},envelope:class extends gt{constructor(t){super(),pt(this,t,Fe,Se,o,{})}},figcaptionpin:class extends gt{constructor(t){super(),pt(this,t,_e,Ae,o,{})}},gallery:class extends gt{constructor(t){super(),pt(this,t,Pe,je,o,{})}},headphones:class extends gt{constructor(t){super(),pt(this,t,De,Oe,o,{})}},headset:class extends gt{constructor(t){super(),pt(this,t,Re,Ie,o,{})}},historyregular:class extends gt{constructor(t){super(),pt(this,t,qe,Ve,o,{})}},lockold:class extends gt{constructor(t){super(),pt(this,t,We,Ge,o,{})}},lock:class extends gt{constructor(t){super(),pt(this,t,Ye,Ue,o,{})}},medielogin:class extends gt{constructor(t){super(),pt(this,t,Xe,Ze,o,{})}},menubars:class extends gt{constructor(t){super(),pt(this,t,Ke,Je,o,{})}},mitebregular:class extends gt{constructor(t){super(),pt(this,t,tn,Qe,o,{})}},mitebsolid:class extends gt{constructor(t){super(),pt(this,t,nn,en,o,{})}},newspaper:class extends gt{constructor(t){super(),pt(this,t,rn,sn,o,{})}},phone:class extends gt{constructor(t){super(),pt(this,t,on,an,o,{})}},play:class extends gt{constructor(t){super(),pt(this,t,cn,ln,o,{})}},rss:class extends gt{constructor(t){super(),pt(this,t,un,dn,o,{})}},smartphone:class extends gt{constructor(t){super(),pt(this,t,$n,fn,o,{})}},starregular:class extends gt{constructor(t){super(),pt(this,t,gn,pn,o,{})}},tagregular:class extends gt{constructor(t){super(),pt(this,t,hn,mn,o,{})}},tagsolid:class extends gt{constructor(t){super(),pt(this,t,vn,xn,o,{})}},tagsregular:class extends gt{constructor(t){super(),pt(this,t,bn,wn,o,{})}},tagssolid:class extends gt{constructor(t){super(),pt(this,t,kn,yn,o,{})}},toggleoff:class extends gt{constructor(t){super(),pt(this,t,Tn,Cn,o,{})}},toggleon:class extends gt{constructor(t){super(),pt(this,t,Mn,Ln,o,{})}},video:class extends gt{constructor(t){super(),pt(this,t,Nn,zn,o,{})}}});function Hn(e){let n;return{c(){n=x("i"),C(n,"class",e[1]),C(n,"style",e[0]),C(n,"aria-hidden","true")},m(t,e){g(t,n,e)},p(t,e){2&e&&C(n,"class",t[1]),1&e&&C(n,"style",t[0])},i:t,o:t,d(t){t&&m(n)}}}function En(t){let e,n,s;var r=Bn[t[2].replace("-","")];function a(t){return{props:{style:t[0],class:t[5],"data-flipped":t[3]}}}return r&&(e=new r(a(t)),e.$on("click",t[7])),{c(){e&&ut(e.$$.fragment),n=y()},m(t,r){e&&ft(e,t,r),g(t,n,r),s=!0},p(t,s){const o={};if(1&s&&(o.style=t[0]),8&s&&(o["data-flipped"]=t[3]),r!==(r=Bn[t[2].replace("-","")])){if(e){rt();const t=e;lt(t.$$.fragment,1,0,(()=>{$t(t,1)})),at()}r?(e=new r(a(t)),e.$on("click",t[7]),ut(e.$$.fragment),ot(e.$$.fragment,1),ft(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&ot(e.$$.fragment,t),s=!0)},o(t){e&&lt(e.$$.fragment,t),s=!1},d(t){t&&m(n),e&&$t(e,t)}}}function Sn(t){let e,n,s,r;const a=[En,Hn],o=[];function l(t,e){return"svg"===t[4]?0:1}return e=l(t),n=o[e]=a[e](t),{c(){n.c(),s=y()},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?o[e].p(t,r):(rt(),lt(o[i],1,1,(()=>{o[i]=null})),at(),n=o[e],n?n.p(t,r):(n=o[e]=a[e](t),n.c()),ot(n,1),n.m(s.parentNode,s))},i(t){r||(ot(n),r=!0)},o(t){lt(n),r=!1},d(t){o[e].d(t),t&&m(s)}}}function Fn(t,e,n){let{className:s}=e,{name:r}=e,{flipped:a=!1}=e,{type:o="svg"}=e,{width:l=36}=e,{style:i}=e;const c="svg"===o?`width: ${l}px; height: ${l}px;`:"";let d=s?`icon-svg ${s}`:"icon-svg";return t.$$set=t=>{"className"in t&&n(1,s=t.className),"name"in t&&n(2,r=t.name),"flipped"in t&&n(3,a=t.flipped),"type"in t&&n(4,o=t.type),"width"in t&&n(6,l=t.width),"style"in t&&n(0,i=t.style)},t.$$.update=()=>{1&t.$$.dirty&&n(0,i=i?`${c} ${i}`:c)},[i,s,r,a,o,d,l,function(e){R(t,e)}]}class An extends gt{constructor(t){super(),pt(this,t,Fn,Sn,o,{className:1,name:2,flipped:3,type:4,width:6,style:0})}}const _n=t=>({}),jn=t=>({}),Pn=t=>({}),On=t=>({}),Dn=t=>({}),In=t=>({}),Rn=t=>({}),Vn=t=>({});function qn(t){let e,n,s,r,a,o;const l=[Un,Wn],i=[];function c(t,e){return t[2]?0:1}return n=c(t),s=i[n]=l[n](t),{c(){e=x("button"),s.c(),C(e,"class",t[1])},m(s,l){g(s,e,l),i[n].m(e,null),r=!0,a||(o=k(e,"click",t[4]),a=!0)},p(t,a){let o=n;n=c(t),n===o?i[n].p(t,a):(rt(),lt(i[o],1,1,(()=>{i[o]=null})),at(),s=i[n],s?s.p(t,a):(s=i[n]=l[n](t),s.c()),ot(s,1),s.m(e,null)),(!r||2&a)&&C(e,"class",t[1])},i(t){r||(ot(s),r=!0)},o(t){lt(s),r=!1},d(t){t&&m(e),i[n].d(),a=!1,o()}}}function Gn(t){let e,n,s,a,o,l,i,d,f,$,h,v;const w=t[8].on,y=c(w,t,t[7],Vn);function T(e){t[10](e)}let L={className:"margin-s--rl",width:"20",style:"cursor: pointer;"};void 0!==t[3]&&(L.name=t[3]),o=new An({props:L}),q.push((()=>dt(o,"name",T))),o.$on("click",t[4]);const M=t[8].off,z=c(M,t,t[7],In);return{c(){e=x("div"),n=x("button"),y&&y.c(),a=b(),ut(o.$$.fragment),i=b(),d=x("button"),z&&z.c(),C(n,"data-status",t[2]),C(n,"class",s="toggle--switch "+t[1]),C(d,"data-status",t[2]),C(d,"class",f="toggle--switch "+t[1]),C(e,"class","flex flex-align--center")},m(s,r){g(s,e,r),p(e,n),y&&y.m(n,null),p(e,a),ft(o,e,null),p(e,i),p(e,d),z&&z.m(d,null),$=!0,h||(v=[k(n,"click",t[9]),k(d,"click",t[11])],h=!0)},p(t,e){y&&y.p&&(!$||128&e)&&u(y,w,t,t[7],e,Rn,Vn),(!$||4&e)&&C(n,"data-status",t[2]),(!$||2&e&&s!==(s="toggle--switch "+t[1]))&&C(n,"class",s);const r={};!l&&8&e&&(l=!0,r.name=t[3],J((()=>l=!1))),o.$set(r),z&&z.p&&(!$||128&e)&&u(z,M,t,t[7],e,Dn,In),(!$||4&e)&&C(d,"data-status",t[2]),(!$||2&e&&f!==(f="toggle--switch "+t[1]))&&C(d,"class",f)},i(t){$||(ot(y,t),ot(o.$$.fragment,t),ot(z,t),$=!0)},o(t){lt(y,t),lt(o.$$.fragment,t),lt(z,t),$=!1},d(t){t&&m(e),y&&y.d(t),$t(o),z&&z.d(t),h=!1,r(v)}}}function Wn(t){let e;const n=t[8].off,s=c(n,t,t[7],jn);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,r){s&&s.p&&(!e||128&r)&&u(s,n,t,t[7],r,_n,jn)},i(t){e||(ot(s,t),e=!0)},o(t){lt(s,t),e=!1},d(t){s&&s.d(t)}}}function Un(t){let e;const n=t[8].on,s=c(n,t,t[7],On);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,r){s&&s.p&&(!e||128&r)&&u(s,n,t,t[7],r,Pn,On)},i(t){e||(ot(s,t),e=!0)},o(t){lt(s,t),e=!1},d(t){s&&s.d(t)}}}function Yn(t){let e,n,s,r;const a=[Gn,qn],o=[];function l(t,e){return t[0]?0:1}return e=l(t),n=o[e]=a[e](t),{c(){n.c(),s=y()},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?o[e].p(t,r):(rt(),lt(o[i],1,1,(()=>{o[i]=null})),at(),n=o[e],n?n.p(t,r):(n=o[e]=a[e](t),n.c()),ot(n,1),n.m(s.parentNode,s))},i(t){r||(ot(n),r=!0)},o(t){lt(n),r=!1},d(t){o[e].d(t),t&&m(s)}}}function Zn(t,e,n){let{$$slots:s={},$$scope:r}=e,{className:a}=e,{defaultState:o=!0}=e,{isSwitch:l=!1}=e,i="toggle-button";a&&(i=`${a} ${i}`);let c=o,d=c?"toggle-on":"toggle-off";const u=O();function f(t,e){t.preventDefault(),n(2,c=null!=e?e:!c),n(3,d=c?"toggle-on":"toggle-off"),u("toggle",c)}return t.$$set=t=>{"className"in t&&n(5,a=t.className),"defaultState"in t&&n(6,o=t.defaultState),"isSwitch"in t&&n(0,l=t.isSwitch),"$$scope"in t&&n(7,r=t.$$scope)},[l,i,c,d,f,a,o,r,s,t=>f(t,!0),function(t){d=t,n(3,d)},t=>f(t,!1)]}class Xn extends gt{constructor(t){super(),pt(this,t,Zn,Yn,o,{className:5,defaultState:6,isSwitch:0})}}const Jn=t=>({}),Kn=t=>({slot:"on"}),Qn=t=>({}),ts=t=>({slot:"off"});function es(t){let e,n;return{c(){e=x("div"),n=x("div"),C(n,"class","card-image bg--graa4"),C(n,"style",t[11]),C(e,"class","card-media")},m(t,s){g(t,e,s),p(e,n)},p(t,e){2048&e&&C(n,"style",t[11])},d(t){t&&m(e)}}}function ns(t){let e,n,s,r,a,o;return{c(){e=x("div"),n=x("img"),C(n,"alt",t[0]),C(n,"class","card-image"),n.src!==(s=t[4].src)&&C(n,"src",s),C(n,"height",r=t[4].height),C(n,"width",a=t[4].width),C(e,"class",o="card-media "+t[4].className)},m(t,s){g(t,e,s),p(e,n)},p(t,l){1&l&&C(n,"alt",t[0]),16&l&&n.src!==(s=t[4].src)&&C(n,"src",s),16&l&&r!==(r=t[4].height)&&C(n,"height",r),16&l&&a!==(a=t[4].width)&&C(n,"width",a),16&l&&o!==(o="card-media "+t[4].className)&&C(e,"class",o)},d(t){t&&m(e)}}}function ss(t){let e,n;return e=new An({props:{name:"ebplus_icon",width:"20"}}),{c(){ut(e.$$.fragment)},m(t,s){ft(e,t,s),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function rs(t){let e,n;return e=new Xn({props:{className:"card-save-toggle",defaultState:t[7],$$slots:{off:[os],on:[as]},$$scope:{ctx:t}}}),e.$on("toggle",t[16]),{c(){ut(e.$$.fragment)},m(t,s){ft(e,t,s),n=!0},p(t,n){const s={};128&n&&(s.defaultState=t[7]),33554438&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function as(t){let e;const n=t[23].default,s=c(n,t,t[25],Kn),r=s||function(t){let e,n;return e=new An({props:{type:"fa",className:"fas fa-star",style:"color: var(--fgcolor--"+(t[1]?"breaking":t[2])+");"}}),{c(){ut(e.$$.fragment)},m(t,s){ft(e,t,s),n=!0},p(t,n){const s={};6&n&&(s.style="color: var(--fgcolor--"+(t[1]?"breaking":t[2])+");"),e.$set(s)},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}(t);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,a){s?s.p&&(!e||33554432&a)&&u(s,n,t,t[25],a,Jn,Kn):r&&r.p&&6&a&&r.p(t,a)},i(t){e||(ot(r,t),e=!0)},o(t){lt(r,t),e=!1},d(t){r&&r.d(t)}}}function os(t){let e;const n=t[23].default,s=c(n,t,t[25],ts),r=s||function(t){let e,n;return e=new An({props:{type:"fa",className:"far fa-star",style:"color: var(--fgcolor--"+(t[1]?"breaking":t[2])+");"}}),{c(){ut(e.$$.fragment)},m(t,s){ft(e,t,s),n=!0},p(t,n){const s={};6&n&&(s.style="color: var(--fgcolor--"+(t[1]?"breaking":t[2])+");"),e.$set(s)},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}(t);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,a){s?s.p&&(!e||33554432&a)&&u(s,n,t,t[25],a,Qn,ts):r&&r.p&&6&a&&r.p(t,a)},i(t){e||(ot(r,t),e=!0)},o(t){lt(r,t),e=!1},d(t){r&&r.d(t)}}}function ls(t){let e,n,s,r=t[8]&&is(t),a=t[6]&&cs(t);return{c(){e=x("div"),r&&r.c(),n=b(),a&&a.c(),C(e,"class","card-meta flex fontsize-xxsmall padding-s--b")},m(t,o){g(t,e,o),r&&r.m(e,null),p(e,n),a&&a.m(e,null),s=!0},p(t,s){t[8]?r?(r.p(t,s),256&s&&ot(r,1)):(r=is(t),r.c(),ot(r,1),r.m(e,n)):r&&(rt(),lt(r,1,1,(()=>{r=null})),at()),t[6]?a?(a.p(t,s),64&s&&ot(a,1)):(a=cs(t),a.c(),ot(a,1),a.m(e,null)):a&&(rt(),lt(a,1,1,(()=>{a=null})),at())},i(t){s||(ot(r),ot(a),s=!0)},o(t){lt(r),lt(a),s=!1},d(t){t&&m(e),r&&r.d(),a&&a.d()}}}function is(t){let e,n,s,r,a,o,l;return s=new An({props:{flipped:!0,name:"tag-regular",width:"12"}}),{c(){e=x("div"),n=x("span"),ut(s.$$.fragment),r=b(),a=x("span"),o=w(t[8]),C(a,"class","padding-s--l"),C(n,"class","flex flex-justify--center"),C(e,"class","card-meta-item")},m(t,i){g(t,e,i),p(e,n),ft(s,n,null),p(n,r),p(n,a),p(a,o),l=!0},p(t,e){(!l||256&e)&&N(o,t[8])},i(t){l||(ot(s.$$.fragment,t),l=!0)},o(t){lt(s.$$.fragment,t),l=!1},d(t){t&&m(e),$t(s)}}}function cs(t){let e,n,s,r,a,o,l=At(t[6])+"";return n=new An({props:{name:"clock",width:"12"}}),{c(){e=x("div"),ut(n.$$.fragment),s=b(),r=x("span"),a=w(l),C(r,"class","padding-s--l"),C(e,"class","card-meta-item")},m(t,l){g(t,e,l),ft(n,e,null),p(e,s),p(e,r),p(r,a),o=!0},p(t,e){(!o||64&e)&&l!==(l=At(t[6])+"")&&N(a,l)},i(t){o||(ot(n.$$.fragment,t),o=!0)},o(t){lt(n.$$.fragment,t),o=!1},d(t){t&&m(e),$t(n)}}}function ds(t){let e,n,s,r,a,o,l,i,c,d,u,f,$,h=t[3]&&es(t),v=t[4]&&ns(t),y=t[5]&&ss(),k=void 0!==t[7]&&rs(t),T=(t[8]||t[6])&&ls(t);return{c(){e=x("div"),h&&h.c(),n=b(),v&&v.c(),s=b(),r=x("div"),a=x("div"),y&&y.c(),o=b(),l=x("div"),k&&k.c(),i=b(),T&&T.c(),c=b(),d=x("h2"),u=w(t[0]),C(a,"class","card-icon flex flex-justify--end"),C(d,"class",f="card-title "+(t[9]?"card-title--truncated":"")),C(d,"style",t[15]),C(l,"class","card-content"),C(r,"class","card-content-wrapper"),C(e,"class",t[12])},m(t,f){g(t,e,f),h&&h.m(e,null),p(e,n),v&&v.m(e,null),p(e,s),p(e,r),p(r,a),y&&y.m(a,null),p(r,o),p(r,l),k&&k.m(l,null),p(l,i),T&&T.m(l,null),p(l,c),p(l,d),p(d,u),$=!0},p(t,r){t[3]?h?h.p(t,r):(h=es(t),h.c(),h.m(e,n)):h&&(h.d(1),h=null),t[4]?v?v.p(t,r):(v=ns(t),v.c(),v.m(e,s)):v&&(v.d(1),v=null),t[5]?y?32&r&&ot(y,1):(y=ss(),y.c(),ot(y,1),y.m(a,null)):y&&(rt(),lt(y,1,1,(()=>{y=null})),at()),void 0!==t[7]?k?(k.p(t,r),128&r&&ot(k,1)):(k=rs(t),k.c(),ot(k,1),k.m(l,i)):k&&(rt(),lt(k,1,1,(()=>{k=null})),at()),t[8]||t[6]?T?(T.p(t,r),320&r&&ot(T,1)):(T=ls(t),T.c(),ot(T,1),T.m(l,c)):T&&(rt(),lt(T,1,1,(()=>{T=null})),at()),(!$||1&r)&&N(u,t[0]),(!$||512&r&&f!==(f="card-title "+(t[9]?"card-title--truncated":"")))&&C(d,"class",f),(!$||4096&r)&&C(e,"class",t[12])},i(t){$||(ot(y),ot(k),ot(T),$=!0)},o(t){lt(y),lt(k),lt(T),$=!1},d(t){t&&m(e),h&&h.d(),v&&v.d(),y&&y.d(),k&&k.d(),T&&T.d()}}}function us(t){let e,n;return e=new de({props:{url:t[10],className:t[14],style:t[13],"data-breaking":t[1],$$slots:{default:[ds]},$$scope:{ctx:t}}}),e.$on("click",t[24]),{c(){ut(e.$$.fragment)},m(t,s){ft(e,t,s),n=!0},p(t,[n]){const s={};1024&n&&(s.url=t[10]),16384&n&&(s.className=t[14]),8192&n&&(s.style=t[13]),2&n&&(s["data-breaking"]=t[1]),33561599&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function fs(t,e,n){let s,r,{$$slots:a={},$$scope:o}=e,{title:l}=e,{breaking:i=!1}=e,{cardType:c}=e,{className:d}=e,{colorClass:u}=e,{id:f}=e,{loading:$=!1}=e,{maxLines:p}=e,{media:g}=e,{premium:m=!1}=e,{published:h}=e,{saved:x}=e,{section:v}=e,{style:w=""}=e,{truncateTitle:b=!1}=e,{url:y}=e;const k=O();let C="card-mode card-mode--article",T="padding-top: 56.25%; width: 100%;";if($)switch(C=`${C} animation-fogwave`,l="Loading",c){case"small-media":case"small-media--reverse":T="width: 200px;height: 115px;"}let L="card-inner";switch(c){case"small-media":L=`${L} card--small-media`;break;case"small-media--reverse":L=`${L} card--small-media card--small-media--reverse`}const M=p?`--max-lines: ${p};`:void 0;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"breaking"in t&&n(1,i=t.breaking),"cardType"in t&&n(17,c=t.cardType),"className"in t&&n(18,d=t.className),"colorClass"in t&&n(2,u=t.colorClass),"id"in t&&n(19,f=t.id),"loading"in t&&n(3,$=t.loading),"maxLines"in t&&n(20,p=t.maxLines),"media"in t&&n(4,g=t.media),"premium"in t&&n(5,m=t.premium),"published"in t&&n(6,h=t.published),"saved"in t&&n(7,x=t.saved),"section"in t&&n(8,v=t.section),"style"in t&&n(21,w=t.style),"truncateTitle"in t&&n(9,b=t.truncateTitle),"url"in t&&n(10,y=t.url),"$$scope"in t&&n(25,o=t.$$scope)},t.$$.update=()=>{2097156&t.$$.dirty&&n(13,s=`${w}; --color--list-hover: var(--color--${u}); --fgcolor--list-hover: var(--fgcolor--${u});`),4456448&t.$$.dirty&&n(14,r=d?`${d} ${C}`:C)},[l,i,u,$,g,m,h,x,v,b,y,T,L,s,r,M,function(t){k("save",{id:f,save:t.detail})},c,d,f,p,w,C,a,function(e){R(t,e)},o]}class $s extends gt{constructor(t){super(),pt(this,t,fs,us,o,{title:0,breaking:1,cardType:17,className:18,colorClass:2,id:19,loading:3,maxLines:20,media:4,premium:5,published:6,saved:7,section:8,style:21,truncateTitle:9,url:10})}}function ps(t){let e,n,s,r;const a=t[8].default,o=c(a,t,t[7],null);return{c(){e=x("span"),o&&o.c(),C(e,"class",t[3]),C(e,"style",t[1]),C(e,"data-type",t[2])},m(a,l){g(a,e,l),o&&o.m(e,null),n=!0,s||(r=k(e,"click",t[10]),s=!0)},p(t,s){o&&o.p&&(!n||128&s)&&u(o,a,t,t[7],s,null,null),(!n||8&s)&&C(e,"class",t[3]),(!n||2&s)&&C(e,"style",t[1]),(!n||4&s)&&C(e,"data-type",t[2])},i(t){n||(ot(o,t),n=!0)},o(t){lt(o,t),n=!1},d(t){t&&m(e),o&&o.d(t),s=!1,r()}}}function gs(t){let e,n,s,r;const a=t[8].default,o=c(a,t,t[7],null);return{c(){e=x("a"),o&&o.c(),C(e,"href",t[0]),C(e,"class",t[3]),C(e,"style",t[1]),C(e,"data-type",t[2])},m(a,l){g(a,e,l),o&&o.m(e,null),n=!0,s||(r=k(e,"click",t[9]),s=!0)},p(t,s){o&&o.p&&(!n||128&s)&&u(o,a,t,t[7],s,null,null),(!n||1&s)&&C(e,"href",t[0]),(!n||8&s)&&C(e,"class",t[3]),(!n||2&s)&&C(e,"style",t[1]),(!n||4&s)&&C(e,"data-type",t[2])},i(t){n||(ot(o,t),n=!0)},o(t){lt(o,t),n=!1},d(t){t&&m(e),o&&o.d(t),s=!1,r()}}}function ms(t){let e,n,s,r;const a=[gs,ps],o=[];function l(t,e){return t[0]?0:1}return e=l(t),n=o[e]=a[e](t),{c(){n.c(),s=y()},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?o[e].p(t,r):(rt(),lt(o[i],1,1,(()=>{o[i]=null})),at(),n=o[e],n?n.p(t,r):(n=o[e]=a[e](t),n.c()),ot(n,1),n.m(s.parentNode,s))},i(t){r||(ot(n),r=!0)},o(t){lt(n),r=!1},d(t){o[e].d(t),t&&m(s)}}}function hs(t,e,n){let s,{$$slots:r={},$$scope:a}=e,{className:o}=e,{extension:l}=e,{href:i}=e,{style:c}=e,{type:d}=e,u="badge";return l&&("string"==typeof l?u=`${u} badge--${l}`:Array.isArray(l)&&(u=`${u} badge--${l.join(" badge--")}`)),t.$$set=t=>{"className"in t&&n(4,o=t.className),"extension"in t&&n(5,l=t.extension),"href"in t&&n(0,i=t.href),"style"in t&&n(1,c=t.style),"type"in t&&n(2,d=t.type),"$$scope"in t&&n(7,a=t.$$scope)},t.$$.update=()=>{80&t.$$.dirty&&n(3,s=`${u} ${o}`)},[i,c,d,s,o,l,u,a,r,function(e){R(t,e)},function(e){R(t,e)}]}class xs extends gt{constructor(t){super(),pt(this,t,hs,ms,o,{className:4,extension:5,href:0,style:1,type:2})}}const vs={Bordeaux:{backgroundColor:"#8a0c36",color:"#fff"},Reddark:{backgroundColor:"#900",color:"#fff"},Red:{backgroundColor:"#bd1118",color:"#fff"},Pink:{backgroundColor:"#b31e61",color:"#fff"},Rose:{backgroundColor:"#dc7095",color:"#fff"},Orangedark:{backgroundColor:"#e96c0d",color:"#fff"},Orange:{backgroundColor:"#e5ad02",color:"#fff"},Yellow:{backgroundColor:"#fae500",color:"#fff"},Yellowlight:{backgroundColor:"#ff0",color:"#000"},Sand:{backgroundColor:"#cec4a6",color:"#fff"},Greendark:{backgroundColor:"#2f7820",color:"#fff"},Green:{backgroundColor:"#029e5d",color:"#fff"},Greenlight:{backgroundColor:"#93b923",color:"#fff"},Lime:{backgroundColor:"#cbfe33",color:"#000"},Purpledark:{backgroundColor:"#51208c",color:"#fff"},Bluenavy:{backgroundColor:"#1a237e",color:"#fff"},Bluedark:{backgroundColor:"#1058c2",color:"#fff"},Blue:{backgroundColor:"#31769b",color:"#fff"},Bluelight:{backgroundColor:"#4fa8df",color:"#fff"},Cyan:{backgroundColor:"#00b6d2",color:"#fff"},Sea:{backgroundColor:"#84a8c4",color:"#fff"},Black:{backgroundColor:"#000",color:"#fff"},Graa1:{backgroundColor:"#3c3c3c",color:"#fff"},Graa2:{backgroundColor:"#484848",color:"#fff"},Graa3:{backgroundColor:"#999",color:"#fff"},Graa4:{backgroundColor:"#c8c8c8",color:"#000"},Graa5:{backgroundColor:"#ddd",color:"#000"},Graa6:{backgroundColor:"#e5e5e5",color:"#000"},Graa7:{backgroundColor:"#efefef",color:"#000"},White:{backgroundColor:"#fff",color:"#000"},PastelRed:{backgroundColor:"#db5040",color:"#fff"},PastelDarkred:{backgroundColor:"#954839",color:"#fff"},PastelLightred:{backgroundColor:"#d67e9b",color:"#fff"},PastelGreen:{backgroundColor:"#9fc29c",color:"#fff"},PastelDarkgreen:{backgroundColor:"#91a34f",color:"#fff"},PastelYellow:{backgroundColor:"#d4c564",color:"#fff"},Eb:{backgroundColor:"#bd1118",color:"#fff"},Eb2:{backgroundColor:"#900",color:"#fff"},Breaking:{backgroundColor:"#ff0",color:"#000"},Bruger:{backgroundColor:"#4fa8df",color:"#fff"},Live:{backgroundColor:"#000",color:"#fff"},Native:{backgroundColor:"#cec4a6",color:"#fff"},Native2:{backgroundColor:"#84a8c4",color:"#fff"},Facebook:{backgroundColor:"#31769b",color:"#fff"},Twitter:{backgroundColor:"#4fa8df",color:"#fff"},Ekstra:{backgroundColor:"#bd1118",color:"#fff"},Flash:{backgroundColor:"#e5ad02",color:"#fff"},Forbrug:{backgroundColor:"#00b6d2",color:"#fff"},Leder:{backgroundColor:"#1a237e",color:"#fff"},Livescore:{backgroundColor:"#029e5d",color:"#fff"},Livescore2:{backgroundColor:"#cbfe33",color:"#000"},Nyheder:{backgroundColor:"#1058c2",color:"#fff"},Nyheder2:{backgroundColor:"#000",color:"#fff"},SexSamliv:{backgroundColor:"#b31e61",color:"#fff"},SexSamliv2:{backgroundColor:"#dc7095",color:"#fff"},Skolefodbold:{backgroundColor:"#93b923",color:"#fff"},Sport:{backgroundColor:"#029e5d",color:"#fff"},Tv:{backgroundColor:"#bd1118",color:"#fff"},Underholdning:{backgroundColor:"#51208c",color:"#fff"}};function ws(t){let e,n;const s=t[10].default,r=c(s,t,t[9],null);return{c(){e=x("div"),r&&r.c(),C(e,"class",t[0]),C(e,"style",t[1])},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,[a]){r&&r.p&&(!n||512&a)&&u(r,s,t,t[9],a,null,null),(!n||1&a)&&C(e,"class",t[0]),(!n||2&a)&&C(e,"style",t[1])},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}const bs={};function ys(t,e,n){let s,r,{$$slots:a={},$$scope:o}=e;const l=xt(0),i=[],c=xt(null);l.subscribe((t=>{c.set(i[t])})),D(bs,{registerTab:t=>{i.push(t),c.update((e=>e||t)),P((()=>{const e=i.indexOf(t);i.splice(e,1),c.update((n=>n===t?i[e]||i[i.length-1]:n))}))},selectButton:t=>{const e=i.indexOf(t);l.set(e)},selectedButton:c});let{className:d}=e,{type:u}=e,{color:f}=e,{colorHover:$}=e,{solid:p=!1}=e,g="buttongroup";p&&(g=`${g} buttongroup--solid`),u&&(g=`${g} buttongroup--${u}`);const{backgroundColor:m,color:h}=vs[f]?vs[f]:vs.Bruger;$=f&&!$?f:$;const{backgroundColor:x,color:v}=vs[$]?vs[$]:vs.Bruger;return t.$$set=t=>{"className"in t&&n(4,d=t.className),"type"in t&&n(5,u=t.type),"color"in t&&n(6,f=t.color),"colorHover"in t&&n(2,$=t.colorHover),"solid"in t&&n(7,p=t.solid),"$$scope"in t&&n(9,o=t.$$scope)},t.$$.update=()=>{272&t.$$.dirty&&n(0,s=d?`${d} ${g}`:g)},n(1,r=`--buttongroup-color: ${m}; --buttongroup-fgcolor: ${h}; --buttongroup-color--hover: ${x}; --buttongroup-fgcolor--hover: ${v};`),[s,r,$,l,d,u,f,p,g,o,a]}class ks extends gt{constructor(t){super(),pt(this,t,ys,ws,o,{selectedId:3,className:4,type:5,color:6,colorHover:2,solid:7})}get selectedId(){return this.$$.ctx[3]}}function Cs(t){let e,n,s,r,a;const o=t[14].default,l=c(o,t,t[13],null);return{c(){e=x("button"),l&&l.c(),C(e,"class",t[4]),e.disabled=t[0],C(e,"data-selected",n=t[5]===t[6])},m(n,o){g(n,e,o),l&&l.m(e,null),t[18](e),s=!0,r||(a=k(e,"click",t[16]),r=!0)},p(t,r){l&&l.p&&(!s||8192&r)&&u(l,o,t,t[13],r,null,null),(!s||16&r)&&C(e,"class",t[4]),(!s||1&r)&&(e.disabled=t[0]),(!s||32&r&&n!==(n=t[5]===t[6]))&&C(e,"data-selected",n)},i(t){s||(ot(l,t),s=!0)},o(t){lt(l,t),s=!1},d(n){n&&m(e),l&&l.d(n),t[18](null),r=!1,a()}}}function Ts(t){let e,n,s,r,a;const o=t[14].default,l=c(o,t,t[13],null);return{c(){e=x("a"),l&&l.c(),C(e,"href",t[1]),C(e,"class",t[4]),C(e,"disabled",t[0]),C(e,"data-selected",n=t[5]===t[6])},m(n,o){g(n,e,o),l&&l.m(e,null),t[17](e),s=!0,r||(a=k(e,"click",t[15]),r=!0)},p(t,r){l&&l.p&&(!s||8192&r)&&u(l,o,t,t[13],r,null,null),(!s||2&r)&&C(e,"href",t[1]),(!s||16&r)&&C(e,"class",t[4]),(!s||1&r)&&C(e,"disabled",t[0]),(!s||32&r&&n!==(n=t[5]===t[6]))&&C(e,"data-selected",n)},i(t){s||(ot(l,t),s=!0)},o(t){lt(l,t),s=!1},d(n){n&&m(e),l&&l.d(n),t[17](null),r=!1,a()}}}function Ls(t){let e,n,s,r;const a=[Ts,Cs],o=[];function l(t,e){return t[1]?0:1}return e=l(t),n=o[e]=a[e](t),{c(){n.c(),s=y()},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?o[e].p(t,r):(rt(),lt(o[i],1,1,(()=>{o[i]=null})),at(),n=o[e],n?n.p(t,r):(n=o[e]=a[e](t),n.c()),ot(n,1),n.m(s.parentNode,s))},i(t){r||(ot(n),r=!0)},o(t){lt(n),r=!1},d(t){o[e].d(t),t&&m(s)}}}function Ms(e,n,s){let r,a,o=t;e.$$.on_destroy.push((()=>o()));let i,{$$slots:c={},$$scope:d}=n,{className:u}=n,{disabled:f=!1}=n,{extension:$}=n,{href:p}=n,{size:g}=n,{type:m}=n,h="button";if($){$.split(" ").forEach((t=>{s(12,h=`${h} button--${t}`)}))}g&&(h=`${h} button--${g}`),m&&(h=`${h} button--${m}`);let x,v,w,{initial:b=!1}=n;const y={},k=I(bs);return k&&(x=k.registerTab,v=k.selectButton,w=k.selectedButton,o(),o=l(w,(t=>s(5,a=t))),x(y),b&&v(y)),_((()=>{void 0!==v&&i.addEventListener("click",(()=>v(y)))})),e.$$set=t=>{"className"in t&&s(7,u=t.className),"disabled"in t&&s(0,f=t.disabled),"extension"in t&&s(8,$=t.extension),"href"in t&&s(1,p=t.href),"size"in t&&s(9,g=t.size),"type"in t&&s(10,m=t.type),"initial"in t&&s(11,b=t.initial),"$$scope"in t&&s(13,d=t.$$scope)},e.$$.update=()=>{4224&e.$$.dirty&&s(4,r=u?`${h} ${u}`:h)},[f,p,i,w,r,a,y,u,$,g,m,b,h,d,c,function(t){R(e,t)},function(t){R(e,t)},function(t){q[t?"unshift":"push"]((()=>{i=t,s(2,i)}))},function(t){q[t?"unshift":"push"]((()=>{i=t,s(2,i)}))}]}class zs extends gt{constructor(t){super(),pt(this,t,Ms,Ls,o,{className:7,disabled:0,extension:8,href:1,size:9,type:10,initial:11})}}function Ns(t){let e,n,s;return{c(){e=x("i"),n=b(),s=x("i"),C(e,"class","far fa-check-circle form-checkbox-toggle--on"),C(e,"aria-hidden","true"),C(s,"class","far fa-circle form-checkbox-toggle--off"),C(s,"aria-hidden","true")},m(t,r){g(t,e,r),g(t,n,r),g(t,s,r)},d(t){t&&m(e),t&&m(n),t&&m(s)}}}function Bs(t){let e,n,s;return{c(){e=x("i"),n=b(),s=x("i"),C(e,"class","far fa-check-square form-checkbox-toggle--on"),C(e,"aria-hidden","true"),C(s,"class","far fa-square form-checkbox-toggle--off"),C(s,"aria-hidden","true")},m(t,r){g(t,e,r),g(t,n,r),g(t,s,r)},d(t){t&&m(e),t&&m(n),t&&m(s)}}}function Hs(e){let n,s,r,a,o,l;function i(t,e){return"checkbox"===t[3]?Bs:Ns}let c=i(e),d=c(e);return{c(){n=x("label"),s=x("input"),r=b(),a=x("span"),o=w(e[2]),l=b(),d.c(),C(s,"type",e[3]),C(s,"class",e[5]),C(s,"name",e[0]),C(s,"group",e[1]),s.value=e[4],C(a,"class","form-label")},m(t,e){g(t,n,e),p(n,s),p(n,r),p(n,a),p(a,o),p(a,l),d.m(a,null)},p(t,[e]){8&e&&C(s,"type",t[3]),32&e&&C(s,"class",t[5]),1&e&&C(s,"name",t[0]),2&e&&C(s,"group",t[1]),16&e&&s.value!==t[4]&&(s.value=t[4]),4&e&&N(o,t[2]),c!==(c=i(t))&&(d.d(1),d=c(t),d&&(d.c(),d.m(a,null)))},i:t,o:t,d(t){t&&m(n),d.d()}}}function Es(t,e,n){let{fieldName:s}=e,{group:r}=e,{label:a}=e,{inputtype:o="checkbox"}=e,{value:l}=e,{className:i}=e,c="form-checkbox form-checkbox--icon";return i&&(c=`${i} ${c}`),t.$$set=t=>{"fieldName"in t&&n(0,s=t.fieldName),"group"in t&&n(1,r=t.group),"label"in t&&n(2,a=t.label),"inputtype"in t&&n(3,o=t.inputtype),"value"in t&&n(4,l=t.value),"className"in t&&n(6,i=t.className)},[s,r,a,o,l,c,i]}class Ss extends gt{constructor(t){super(),pt(this,t,Es,Hs,o,{fieldName:0,group:1,label:2,inputtype:3,value:4,className:6})}}function Fs(t){let e,n,s,r,a;const o=t[5].default,l=c(o,t,t[4],null);return{c(){e=x("label"),n=w(t[0]),s=b(),r=x("select"),l&&l.c(),C(e,"class","form-label"),C(e,"for","select"),C(r,"classname",t[1]),C(r,"id","select")},m(t,o){g(t,e,o),p(e,n),g(t,s,o),g(t,r,o),l&&l.m(r,null),a=!0},p(t,[e]){(!a||1&e)&&N(n,t[0]),l&&l.p&&(!a||16&e)&&u(l,o,t,t[4],e,null,null),(!a||2&e)&&C(r,"classname",t[1])},i(t){a||(ot(l,t),a=!0)},o(t){lt(l,t),a=!1},d(t){t&&m(e),t&&m(s),t&&m(r),l&&l.d(t)}}}function As(t,e,n){let{$$slots:s={},$$scope:r}=e,{inputtype:a="text"}=e,{label:o}=e,{className:l}=e,i=`form-input form-input--${a}`;return l&&(i=`${l} ${i}`),t.$$set=t=>{"inputtype"in t&&n(2,a=t.inputtype),"label"in t&&n(0,o=t.label),"className"in t&&n(3,l=t.className),"$$scope"in t&&n(4,r=t.$$scope)},[o,i,a,l,r,s]}class _s extends gt{constructor(t){super(),pt(this,t,As,Fs,o,{inputtype:2,label:0,className:3})}}function js(t){let e,n,s;return{c(){e=x("span"),n=w(t[1]),s=w(":"),C(e,"class","hidden")},m(r,a){g(r,e,a),p(e,n),p(e,s),t[8](e)},p(t,e){2&e&&N(n,t[1])},d(n){n&&m(e),t[8](null)}}}function Ps(e){let n,s,r,a,o,l,i=e[1]&&js(e);return{c(){n=x("div"),i&&i.c(),s=b(),r=x("input"),C(r,"type",e[0]),C(r,"placeholder",e[1]),C(r,"class",e[5]),C(n,"class",a=`form-input-container flex border-radius padding-m--rl ${e[2]}`)},m(t,a){g(t,n,a),i&&i.m(n,null),p(n,s),p(n,r),e[9](r),o||(l=k(r,"focus",e[7]),o=!0)},p(t,[e]){t[1]?i?i.p(t,e):(i=js(t),i.c(),i.m(n,s)):i&&(i.d(1),i=null),1&e&&C(r,"type",t[0]),2&e&&C(r,"placeholder",t[1]),32&e&&C(r,"class",t[5]),4&e&&a!==(a=`form-input-container flex border-radius padding-m--rl ${t[2]}`)&&C(n,"class",a)},i:t,o:t,d(t){t&&m(n),i&&i.d(),e[9](null),o=!1,l()}}}function Os(t,e,n){let s,r,{inputtype:a="text"}=e,{label:o}=e,{className:l}=e,{size:i="padding-m--tb"}=e,c=`form-input form-input--${a} width-1of1`;return l&&(c=`${l} ${c}`),_((()=>{s.addEventListener("focus",(()=>{s.parentElement.setAttribute("data-focus","true");s.previousElementSibling.classList.remove("hidden")})),s.addEventListener("focusout",(()=>{s.parentElement.setAttribute("data-focus","false"),0===s.value.length&&r.classList.add("hidden")}))})),t.$$set=t=>{"inputtype"in t&&n(0,a=t.inputtype),"label"in t&&n(1,o=t.label),"className"in t&&n(6,l=t.className),"size"in t&&n(2,i=t.size)},[a,o,i,s,r,c,l,function(e){R(t,e)},function(t){q[t?"unshift":"push"]((()=>{r=t,n(4,r)}))},function(t){q[t?"unshift":"push"]((()=>{s=t,n(3,s)}))}]}class Ds extends gt{constructor(t){super(),pt(this,t,Os,Ps,o,{inputtype:0,label:1,className:6,size:2})}}function Is(t){let e,n,s;return{c(){e=x("span"),n=w(t[0]),s=w(":"),C(e,"class","hidden")},m(r,a){g(r,e,a),p(e,n),p(e,s),t[8](e)},p(t,e){1&e&&N(n,t[0])},d(n){n&&m(e),t[8](null)}}}function Rs(e){let n,s,r,a,o,l,i=e[0]&&Is(e);return{c(){n=x("div"),i&&i.c(),s=b(),r=x("textarea"),C(r,"class",e[4]),C(r,"placeholder",e[0]),C(n,"class",a=`form-input-container flex flex-column border-radius padding-m--rl ${e[1]}`)},m(t,a){g(t,n,a),i&&i.m(n,null),p(n,s),p(n,r),e[9](r),o||(l=k(r,"focus",e[7]),o=!0)},p(t,[e]){t[0]?i?i.p(t,e):(i=Is(t),i.c(),i.m(n,s)):i&&(i.d(1),i=null),16&e&&C(r,"class",t[4]),1&e&&C(r,"placeholder",t[0]),2&e&&a!==(a=`form-input-container flex flex-column border-radius padding-m--rl ${t[1]}`)&&C(n,"class",a)},i:t,o:t,d(t){t&&m(n),i&&i.d(),e[9](null),o=!1,l()}}}function Vs(t,e,n){let s,r,{inputtype:a="textarea"}=e,{label:o}=e,{className:l}=e,{size:i="padding-m--tb"}=e,c=`form-input form-input--${a} width-1of1`;return l&&(c=`${l} ${c}`),_((()=>{s.addEventListener("focus",(()=>{s.parentElement.setAttribute("data-focus","true");s.previousElementSibling.classList.remove("hidden")})),s.addEventListener("focusout",(()=>{s.parentElement.setAttribute("data-focus","false"),0===s.value.length&&r.classList.add("hidden")}))})),t.$$set=t=>{"inputtype"in t&&n(5,a=t.inputtype),"label"in t&&n(0,o=t.label),"className"in t&&n(6,l=t.className),"size"in t&&n(1,i=t.size)},[o,i,s,r,c,a,l,function(e){R(t,e)},function(t){q[t?"unshift":"push"]((()=>{r=t,n(3,r)}))},function(t){q[t?"unshift":"push"]((()=>{s=t,n(2,s)}))}]}class qs extends gt{constructor(t){super(),pt(this,t,Vs,Rs,o,{inputtype:5,label:0,className:6,size:1})}}function Gs(t){let e;const n=t[8].default,s=c(n,t,t[9],null);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,r){s&&s.p&&(!e||512&r)&&u(s,n,t,t[9],r,null,null)},i(t){e||(ot(s,t),e=!0)},o(t){lt(s,t),e=!1},d(t){s&&s.d(t)}}}function Ws(t){let e,n,s;var r=t[7];function a(t){return{props:{class:t[1],size:t[0],label:t[5],inputtype:t[4],group:t[3],value:t[6],name:t[2],$$slots:{default:[Gs]},$$scope:{ctx:t}}}}return r&&(n=new r(a(t))),{c(){e=x("div"),n&&ut(n.$$.fragment),C(e,"class","form-element margin-l--b")},m(t,r){g(t,e,r),n&&ft(n,e,null),s=!0},p(t,[s]){const o={};if(2&s&&(o.class=t[1]),1&s&&(o.size=t[0]),32&s&&(o.label=t[5]),16&s&&(o.inputtype=t[4]),8&s&&(o.group=t[3]),64&s&&(o.value=t[6]),4&s&&(o.name=t[2]),512&s&&(o.$$scope={dirty:s,ctx:t}),r!==(r=t[7])){if(n){rt();const t=n;lt(t.$$.fragment,1,0,(()=>{$t(t,1)})),at()}r?(n=new r(a(t)),ut(n.$$.fragment),ot(n.$$.fragment,1),ft(n,e,null)):n=null}else r&&n.$set(o)},i(t){s||(n&&ot(n.$$.fragment,t),s=!0)},o(t){n&&lt(n.$$.fragment,t),s=!1},d(t){t&&m(e),n&&$t(n)}}}function Us(t,e,n){let{$$slots:s={},$$scope:r}=e,{className:a}=e,{fieldName:o}=e,{group:l}=e,{inputtype:i="text"}=e,{label:c}=e,{value:d}=e,{size:u="medium"}=e,f=Ds;switch(i){case"select":f=_s;break;case"checkbox":case"radio":f=Ss;break;case"textarea":f=qs}switch(u){case"small":u="padding-s--tb";break;case"medium":u="padding-m--tb";break;case"large":u="padding-l--tb"}return t.$$set=t=>{"className"in t&&n(1,a=t.className),"fieldName"in t&&n(2,o=t.fieldName),"group"in t&&n(3,l=t.group),"inputtype"in t&&n(4,i=t.inputtype),"label"in t&&n(5,c=t.label),"value"in t&&n(6,d=t.value),"size"in t&&n(0,u=t.size),"$$scope"in t&&n(9,r=t.$$scope)},[u,a,o,l,i,c,d,f,s,r]}class Ys extends gt{constructor(t){super(),pt(this,t,Us,Ws,o,{className:1,fieldName:2,group:3,inputtype:4,label:5,value:6,size:0})}}function Zs(t){let e;return{c(){e=x("i"),C(e,"class","fa fa-chevron-left")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Xs(t){let e;return{c(){e=x("i"),C(e,"class","fa fa-chevron-right")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Js(t){let e,n,s,r,a,o,l;n=new zs({props:{className:"horizontal-scroll-nav button-prev bg--white",extension:"icon",$$slots:{default:[Zs]},$$scope:{ctx:t}}}),n.$on("click",t[3]),r=new zs({props:{className:"horizontal-scroll-nav button-next bg--white",extension:"icon",$$slots:{default:[Xs]},$$scope:{ctx:t}}}),r.$on("click",t[2]);const i=t[5].default,d=c(i,t,t[8],null);return{c(){e=x("div"),ut(n.$$.fragment),s=b(),ut(r.$$.fragment),a=b(),o=x("div"),d&&d.c(),C(o,"class","horizontal-scroll-items flex position-relative"),C(o,"data-horizontallist","horizontallist"),C(e,"class","horizontal-scroll-container position-relative")},m(i,c){g(i,e,c),ft(n,e,null),p(e,s),ft(r,e,null),p(e,a),p(e,o),d&&d.m(o,null),t[6](o),t[7](e),l=!0},p(t,[e]){const s={};256&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};256&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a),d&&d.p&&(!l||256&e)&&u(d,i,t,t[8],e,null,null)},i(t){l||(ot(n.$$.fragment,t),ot(r.$$.fragment,t),ot(d,t),l=!0)},o(t){lt(n.$$.fragment,t),lt(r.$$.fragment,t),lt(d,t),l=!1},d(s){s&&m(e),$t(n),$t(r),d&&d.d(s),t[6](null),t[7](null)}}}function Ks(t,e,n){let s,r,a,o,l,{$$slots:i={},$$scope:c}=e,{className:d}=e,u=0;function f(t,e=!1){switch(t){case"neutral":n(0,s.dataset.atstart="false",s),n(0,s.dataset.atend="false",s),e&&(u=1);break;case"end":n(0,s.dataset.atstart="false",s),n(0,s.dataset.atend="true",s),u=o;break;case"start":n(0,s.dataset.atstart="true",s),n(0,s.dataset.atend="false",s),u=0;break;case"disabled":n(0,s.dataset.atstart="true",s),n(0,s.dataset.atend="true",s)}}function $(){f(0===u?"start":u===o?"end":"neutral")}function p(t){const e=a[t];r.scrollTo({behavior:"smooth",left:e.offsetLeft,top:0}),$()}return _((()=>{r.addEventListener("wheel",function(t,e){let n;return function(){const s=arguments,r=this;n||(t.apply(r,s),n=!0,setTimeout((()=>n=!1),e))}}((()=>{!function(){const t=a[0].getBoundingClientRect().left<r.getBoundingClientRect().left,e=a[l-1].getBoundingClientRect().right>r.getBoundingClientRect().right;f(t&&e?"neutral":t?"end":e?"start":"disabled",!0)}()}),150))})),j((()=>{if(l===r.children.length)return;a=r.children,l=a.length;const t=s.getBoundingClientRect();let e=Array.from(a).filter((e=>e.getBoundingClientRect().left>=t.left&&e.getBoundingClientRect().right<=t.right)).length;o=l-e,o?$():f("disabled")})),t.$$set=t=>{"className"in t&&n(4,d=t.className),"$$scope"in t&&n(8,c=t.$$scope)},[s,r,function(t){u!==o&&(u+=1,p(u))},function(t){0!==u&&(u-=1,p(u))},d,i,function(t){q[t?"unshift":"push"]((()=>{r=t,n(1,r)}))},function(t){q[t?"unshift":"push"]((()=>{s=t,n(0,s)}))},c]}class Qs extends gt{constructor(t){super(),pt(this,t,Ks,Js,o,{className:4})}}function tr(t){let e;return{c(){e=x("div"),e.innerHTML='<i class="fas fa-circle bounce bounce1"></i> \n    <i class="fas fa-circle bounce bounce2"></i> \n    <i class="fas fa-circle bounce bounce3"></i>',C(e,"class","loader flex flex--center")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function er(e){let n,s=e[0]&&tr();return{c(){s&&s.c(),n=y()},m(t,e){s&&s.m(t,e),g(t,n,e)},p(t,[e]){t[0]?s||(s=tr(),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:t,o:t,d(t){s&&s.d(t),t&&m(n)}}}function nr(t,e,n){let{isLoading:s=!1}=e;return t.$$set=t=>{"isLoading"in t&&n(0,s=t.isLoading)},[s]}class sr extends gt{constructor(t){super(),pt(this,t,nr,er,o,{isLoading:0})}}function rr(t){let e,n;const s=t[3].default,r=c(s,t,t[2],null);return{c(){e=x("div"),r&&r.c(),C(e,"class",t[0])},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,[a]){r&&r.p&&(!n||4&a)&&u(r,s,t,t[2],a,null,null),(!n||1&a)&&C(e,"class",t[0])},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}const ar={};function or(t,e,n){let{$$slots:s={},$$scope:r}=e;const a=xt(0),o=[],l=[],i=xt(null),c=xt(null);a.subscribe((t=>{i.set(o[t]),c.set(l[t])})),D(ar,{registerTab:t=>{o.push(t),i.update((e=>e||t)),P((()=>{const e=o.indexOf(t);o.splice(e,1),i.update((n=>n===t?o[e]||o[o.length-1]:n))}))},registerPanel:t=>{l.push(t),c.update((e=>e||t)),P((()=>{const e=l.indexOf(t);l.splice(e,1),c.update((n=>n===t?l[e]||l[l.length-1]:n))}))},selectButton:t=>{const e=o.indexOf(t);a.set(e)},selectedButton:i,selectedPanel:c});let{className:d}=e;return t.$$set=t=>{"className"in t&&n(0,d=t.className),"$$scope"in t&&n(2,r=t.$$scope)},[d,a,r,s]}class lr extends gt{constructor(t){super(),pt(this,t,or,rr,o,{selectedId:1,className:0})}get selectedId(){return this.$$.ctx[1]}}function ir(t){let e,n,s,r,a;const o=t[7].default,l=c(o,t,t[6],null);return{c(){e=x("button"),l&&l.c(),C(e,"class",t[0]),C(e,"data-selected",n=t[1]===t[2])},m(n,o){g(n,e,o),l&&l.m(e,null),s=!0,r||(a=k(e,"click",t[8]),r=!0)},p(t,[r]){l&&l.p&&(!s||64&r)&&u(l,o,t,t[6],r,null,null),(!s||1&r)&&C(e,"class",t[0]),(!s||2&r&&n!==(n=t[1]===t[2]))&&C(e,"data-selected",n)},i(t){s||(ot(l,t),s=!0)},o(t){lt(l,t),s=!1},d(t){t&&m(e),l&&l.d(t),r=!1,a()}}}function cr(t,e,n){let s,r,{$$slots:a={},$$scope:o}=e;const l={},{registerTab:c,selectButton:d,selectedButton:u}=I(ar);i(t,u,(t=>n(1,r=t))),c(l);let{className:f}=e,$="button";return t.$$set=t=>{"className"in t&&n(5,f=t.className),"$$scope"in t&&n(6,o=t.$$scope)},t.$$.update=()=>{32&t.$$.dirty&&n(0,s=f?`button ${f}`:$)},[s,r,l,d,u,f,o,a,()=>d(l)]}class dr extends gt{constructor(t){super(),pt(this,t,cr,ir,o,{className:5})}}function ur(t){let e;const n=t[4].default,s=c(n,t,t[3],null);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,r){s&&s.p&&(!e||8&r)&&u(s,n,t,t[3],r,null,null)},i(t){e||(ot(s,t),e=!0)},o(t){lt(s,t),e=!1},d(t){s&&s.d(t)}}}function fr(t){let e,n,s=t[0]===t[1]&&ur(t);return{c(){s&&s.c(),e=y()},m(t,r){s&&s.m(t,r),g(t,e,r),n=!0},p(t,[n]){t[0]===t[1]?s?(s.p(t,n),1&n&&ot(s,1)):(s=ur(t),s.c(),ot(s,1),s.m(e.parentNode,e)):s&&(rt(),lt(s,1,1,(()=>{s=null})),at())},i(t){n||(ot(s),n=!0)},o(t){lt(s),n=!1},d(t){s&&s.d(t),t&&m(e)}}}function $r(t,e,n){let s,{$$slots:r={},$$scope:a}=e;const o={},{registerPanel:l,selectedPanel:c}=I(ar);return i(t,c,(t=>n(0,s=t))),l(o),t.$$set=t=>{"$$scope"in t&&n(3,a=t.$$scope)},[s,o,c,a,r]}class pr extends gt{constructor(t){super(),pt(this,t,$r,fr,o,{})}}function gr(t){let e,n;const s=t[5].default,r=c(s,t,t[4],null);return{c(){e=x("div"),r&&r.c(),C(e,"class",t[0])},m(t,s){g(t,e,s),r&&r.m(e,null),n=!0},p(t,[a]){r&&r.p&&(!n||16&a)&&u(r,s,t,t[4],a,null,null),(!n||1&a)&&C(e,"class",t[0])},i(t){n||(ot(r,t),n=!0)},o(t){lt(r,t),n=!1},d(t){t&&m(e),r&&r.d(t)}}}function mr(t,e,n){let s,{$$slots:r={},$$scope:a}=e,{type:o="tabs"}=e,{className:l}=e,i="";switch(o){case"tabs":i="tabs";break;case"pillnavigation":i="pillnavigation toggle toggle--buttons"}return t.$$set=t=>{"type"in t&&n(1,o=t.type),"className"in t&&n(2,l=t.className),"$$scope"in t&&n(4,a=t.$$scope)},t.$$.update=()=>{12&t.$$.dirty&&n(0,s=l?`${i} ${l}`:i)},[s,o,l,i,a,r]}class hr extends gt{constructor(t){super(),pt(this,t,mr,gr,o,{type:1,className:2})}}function xr(t){let e,n,s,r,a,o,l,i,d,f,$,h,v;const w=t[6].default,y=c(w,t,t[5],null);return{c(){e=x("label"),n=x("input"),s=b(),r=x("div"),a=x("i"),l=b(),i=x("div"),d=x("i"),$=b(),h=x("div"),y&&y.c(),C(n,"type","checkbox"),n.hidden=!0,C(n,"class","tooltip-input"),C(a,"class",o="tooltip-toggle fas fa-"+t[1]),C(r,"class","tooltip-off"),C(d,"class",f="tooltip-toggle fas fa-"+t[0]),C(h,"class","padding-s"),C(i,"class","tooltip-on"),C(e,"class",t[2])},m(t,o){g(t,e,o),p(e,n),p(e,s),p(e,r),p(r,a),p(e,l),p(e,i),p(i,d),p(i,$),p(i,h),y&&y.m(h,null),v=!0},p(t,[n]){(!v||2&n&&o!==(o="tooltip-toggle fas fa-"+t[1]))&&C(a,"class",o),(!v||1&n&&f!==(f="tooltip-toggle fas fa-"+t[0]))&&C(d,"class",f),y&&y.p&&(!v||32&n)&&u(y,w,t,t[5],n,null,null),(!v||4&n)&&C(e,"class",t[2])},i(t){v||(ot(y,t),v=!0)},o(t){lt(y,t),v=!1},d(t){t&&m(e),y&&y.d(t)}}}function vr(t,e,n){let{$$slots:s={},$$scope:r}=e,{iconOn:a="times"}=e,{iconOff:o="question"}=e,{position:l="left"}=e,{className:i}=e,c=`tooltip tooltip--${l}`;return i&&(c=`${c} ${i}`),t.$$set=t=>{"iconOn"in t&&n(0,a=t.iconOn),"iconOff"in t&&n(1,o=t.iconOff),"position"in t&&n(3,l=t.position),"className"in t&&n(4,i=t.className),"$$scope"in t&&n(5,r=t.$$scope)},[a,o,c,l,i,r,s]}class wr extends gt{constructor(t){super(),pt(this,t,vr,xr,o,{iconOn:0,iconOff:1,position:3,className:4})}}function br(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="color--graa1">Components</h2> \n            <i class="home-section-icon fas fa-cubes svelte-pq6zsy"></i>',C(e,"class","flex-item flex-item--center text-align--center")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function yr(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="color--graa1">Utilities</h2> \n            <i class="home-section-icon fab fa-connectdevelop svelte-pq6zsy"></i>',C(e,"class","flex-item flex-item--center text-align--center")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function kr(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="color--graa1">Colors</h2> \n            <i class="home-section-icon fas fa-palette svelte-pq6zsy"></i>',C(e,"class","flex-item flex-item--center text-align--center")},m(t,n){g(t,e,n)},d(t){t&&m(e)}}}function Cr(t){let e,n,s,r,a,o,l,i,c,d,u,f,$,h,v,w,y,k,T;return u=new de({props:{className:"padding-m",url:t[0],$$slots:{default:[br]},$$scope:{ctx:t}}}),h=new de({props:{className:"padding-m",url:t[1],$$slots:{default:[yr]},$$scope:{ctx:t}}}),k=new de({props:{className:"padding-m",url:t[2],$$slots:{default:[kr]},$$scope:{ctx:t}}}),{c(){e=x("div"),n=x("div"),s=x("div"),s.innerHTML='<img alt="" src="ekstrabladet.svg" style="height:70px;"/>',r=b(),a=x("div"),a.innerHTML="<h1>Design system</h1>",o=b(),l=x("div"),l.textContent="yarn add @ekstra-bladet/designsystem",i=b(),c=x("div"),d=x("div"),ut(u.$$.fragment),f=b(),$=x("div"),ut(h.$$.fragment),v=b(),w=x("div"),y=x("div"),ut(k.$$.fragment),C(s,"class","flex flex-justify--center"),C(a,"class","flex flex-justify--center  margin-l--b"),C(l,"class","text-align--center margin-m--tb padding-m bg--graa7"),C(d,"class","home-section width-1of1 margin-m svelte-pq6zsy"),C($,"class","home-section width-1of1 margin-m svelte-pq6zsy"),C(c,"class","flex"),C(y,"class","home-section width-1of1 margin-m svelte-pq6zsy"),C(w,"class","flex"),C(n,"class","grid-width--medium"),C(e,"class","flex flex-justify--around width-1of1")},m(t,m){g(t,e,m),p(e,n),p(n,s),p(n,r),p(n,a),p(n,o),p(n,l),p(n,i),p(n,c),p(c,d),ft(u,d,null),p(c,f),p(c,$),ft(h,$,null),p(n,v),p(n,w),p(w,y),ft(k,y,null),T=!0},p(t,[e]){const n={};1&e&&(n.url=t[0]),8&e&&(n.$$scope={dirty:e,ctx:t}),u.$set(n);const s={};2&e&&(s.url=t[1]),8&e&&(s.$$scope={dirty:e,ctx:t}),h.$set(s);const r={};4&e&&(r.url=t[2]),8&e&&(r.$$scope={dirty:e,ctx:t}),k.$set(r)},i(t){T||(ot(u.$$.fragment,t),ot(h.$$.fragment,t),ot(k.$$.fragment,t),T=!0)},o(t){lt(u.$$.fragment,t),lt(h.$$.fragment,t),lt(k.$$.fragment,t),T=!1},d(t){t&&m(e),$t(u),$t(h),$t(k)}}}function Tr(t,e,n){let s="#/",r="#/",a="#/";return kf.forEach((t=>{"#/"===s&&"component"===t.type&&n(0,s=`#${t.link}`),"#/"===r&&"utility"===t.type&&n(1,r=`#${t.link}`),"#/"===a&&"color"===t.type&&n(2,a=`#${t.link}`)})),[s,r,a]}window.Prism&&console.warn("Prism has already been initiated. Please ensure that svelte-prism is imported first."),window.Prism=window.Prism||{},window.Prism.manual=!0;var Lr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Mr={exports:{}};!function(t){var e=function(t){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,s={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof r?new r(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++n}),t.__id},clone:function t(e,n){var r,a;switch(n=n||{},s.util.type(e)){case"Object":if(a=s.util.objId(e),n[a])return n[a];for(var o in r={},n[a]=r,e)e.hasOwnProperty(o)&&(r[o]=t(e[o],n));return r;case"Array":return a=s.util.objId(e),n[a]?n[a]:(r=[],n[a]=r,e.forEach((function(e,s){r[s]=t(e,n)})),r);default:return e}},getLanguage:function(t){for(;t&&!e.test(t.className);)t=t.parentElement;return t?(t.className.match(e)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(s){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(s.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var s="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(s))return!1;t=t.parentElement}return!!n}},languages:{extend:function(t,e){var n=s.util.clone(s.languages[t]);for(var r in e)n[r]=e[r];return n},insertBefore:function(t,e,n,r){var a=(r=r||s.languages)[t],o={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);n.hasOwnProperty(l)||(o[l]=a[l])}var c=r[t];return r[t]=o,s.languages.DFS(s.languages,(function(e,n){n===c&&e!=t&&(this[e]=o)})),o},DFS:function t(e,n,r,a){a=a||{};var o=s.util.objId;for(var l in e)if(e.hasOwnProperty(l)){n.call(e,l,e[l],r||l);var i=e[l],c=s.util.type(i);"Object"!==c||a[o(i)]?"Array"!==c||a[o(i)]||(a[o(i)]=!0,t(i,n,l,a)):(a[o(i)]=!0,t(i,n,null,a))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var r={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),s.hooks.run("before-all-elements-highlight",r);for(var a,o=0;a=r.elements[o++];)s.highlightElement(a,!0===e,r.callback)},highlightElement:function(n,r,a){var o=s.util.getLanguage(n),l=s.languages[o];n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;var i=n.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:l,code:n.textContent};function d(t){c.highlightedCode=t,s.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s.hooks.run("after-highlight",c),s.hooks.run("complete",c),a&&a.call(c.element)}if(s.hooks.run("before-sanity-check",c),!c.code)return s.hooks.run("complete",c),void(a&&a.call(c.element));if(s.hooks.run("before-highlight",c),c.grammar)if(r&&t.Worker){var u=new Worker(s.filename);u.onmessage=function(t){d(t.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(s.highlight(c.code,c.grammar,c.language));else d(s.util.encode(c.code))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};return s.hooks.run("before-tokenize",a),a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),r.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var s in n)e[s]=n[s];delete e.rest}var r=new l;return i(r,r.head,t),o(t,r,e,r.head,0),function(t){var e=[],n=t.head.next;for(;n!==t.tail;)e.push(n.value),n=n.next;return e}(r)},hooks:{all:{},add:function(t,e){var n=s.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=s.hooks.all[t];if(n&&n.length)for(var r,a=0;r=n[a++];)r(e)}},Token:r};function r(t,e,n,s){this.type=t,this.content=e,this.alias=n,this.length=0|(s||"").length}function a(t,e,n,s){t.lastIndex=e;var r=t.exec(n);if(r&&s&&r[1]){var a=r[1].length;r.index+=a,r[0]=r[0].slice(a)}return r}function o(t,e,n,l,d,u){for(var f in n)if(n.hasOwnProperty(f)&&n[f]){var $=n[f];$=Array.isArray($)?$:[$];for(var p=0;p<$.length;++p){if(u&&u.cause==f+","+p)return;var g=$[p],m=g.inside,h=!!g.lookbehind,x=!!g.greedy,v=g.alias;if(x&&!g.pattern.global){var w=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,w+"g")}for(var b=g.pattern||g,y=l.next,k=d;y!==e.tail&&!(u&&k>=u.reach);k+=y.value.length,y=y.next){var C=y.value;if(e.length>t.length)return;if(!(C instanceof r)){var T,L=1;if(x){if(!(T=a(b,k,t,h)))break;var M=T.index,z=T.index+T[0].length,N=k;for(N+=y.value.length;M>=N;)N+=(y=y.next).value.length;if(k=N-=y.value.length,y.value instanceof r)continue;for(var B=y;B!==e.tail&&(N<z||"string"==typeof B.value);B=B.next)L++,N+=B.value.length;L--,C=t.slice(k,N),T.index-=k}else if(!(T=a(b,0,C,h)))continue;M=T.index;var H=T[0],E=C.slice(0,M),S=C.slice(M+H.length),F=k+C.length;u&&F>u.reach&&(u.reach=F);var A=y.prev;E&&(A=i(e,A,E),k+=E.length),c(e,A,L),y=i(e,A,new r(f,m?s.tokenize(H,m):H,v,H)),S&&i(e,y,S),L>1&&o(t,e,n,y.prev,k,{cause:f+","+p,reach:F})}}}}}function l(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function i(t,e,n){var s=e.next,r={value:n,prev:e,next:s};return e.next=r,s.prev=r,t.length++,r}function c(t,e,n){for(var s=e.next,r=0;r<n&&s!==t.tail;r++)s=s.next;e.next=s,s.prev=e,t.length-=r}if(t.Prism=s,r.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach((function(e){r+=t(e,n)})),r}var a={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),s.hooks.run("wrap",a);var l="";for(var i in a.attributes)l+=" "+i+'="'+(a.attributes[i]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!t.document)return t.addEventListener?(s.disableWorkerMessageHandler||t.addEventListener("message",(function(e){var n=JSON.parse(e.data),r=n.language,a=n.code,o=n.immediateClose;t.postMessage(s.highlight(a,s.languages[r],r)),o&&t.close()}),!1),s):s;var d=s.util.currentScript();function u(){s.manual||s.highlightAll()}if(d&&(s.filename=d.src,d.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var f=document.readyState;"loading"===f||"interactive"===f&&d&&d.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var Prism = (function (_self){

    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;


    var _ = {
    	/**
    	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
    	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
    	 * additional languages or plugins yourself.
    	 *
    	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
    	 *
    	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
    	 * empty Prism object into the global scope before loading the Prism script like this:
    	 *
    	 * ```js
    	 * window.Prism = window.Prism || {};
    	 * Prism.manual = true;
    	 * // add a new <script> to load Prism's script
    	 * ```
    	 *
    	 * @default false
    	 * @type {boolean}
    	 * @memberof Prism
    	 * @public
    	 */
    	manual: _self.Prism && _self.Prism.manual,
    	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

    	/**
    	 * A namespace for utility methods.
    	 *
    	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
    	 * change or disappear at any time.
    	 *
    	 * @namespace
    	 * @memberof Prism
    	 */
    	util: {
    		encode: function encode(tokens) {
    			if (tokens instanceof Token) {
    				return new Token(tokens.type, encode(tokens.content), tokens.alias);
    			} else if (Array.isArray(tokens)) {
    				return tokens.map(encode);
    			} else {
    				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
    			}
    		},

    		/**
    		 * Returns the name of the type of the given value.
    		 *
    		 * @param {any} o
    		 * @returns {string}
    		 * @example
    		 * type(null)      === 'Null'
    		 * type(undefined) === 'Undefined'
    		 * type(123)       === 'Number'
    		 * type('foo')     === 'String'
    		 * type(true)      === 'Boolean'
    		 * type([1, 2])    === 'Array'
    		 * type({})        === 'Object'
    		 * type(String)    === 'Function'
    		 * type(/abc+/)    === 'RegExp'
    		 */
    		type: function (o) {
    			return Object.prototype.toString.call(o).slice(8, -1);
    		},

    		/**
    		 * Returns a unique number for the given object. Later calls will still return the same number.
    		 *
    		 * @param {Object} obj
    		 * @returns {number}
    		 */
    		objId: function (obj) {
    			if (!obj['__id']) {
    				Object.defineProperty(obj, '__id', { value: ++uniqueId });
    			}
    			return obj['__id'];
    		},

    		/**
    		 * Creates a deep clone of the given object.
    		 *
    		 * The main intended use of this function is to clone language definitions.
    		 *
    		 * @param {T} o
    		 * @param {Record<number, any>} [visited]
    		 * @returns {T}
    		 * @template T
    		 */
    		clone: function deepClone(o, visited) {
    			visited = visited || {};

    			var clone, id;
    			switch (_.util.type(o)) {
    				case 'Object':
    					id = _.util.objId(o);
    					if (visited[id]) {
    						return visited[id];
    					}
    					clone = /** @type {Record<string, any>} */ ({});
    					visited[id] = clone;

    					for (var key in o) {
    						if (o.hasOwnProperty(key)) {
    							clone[key] = deepClone(o[key], visited);
    						}
    					}

    					return /** @type {any} */ (clone);

    				case 'Array':
    					id = _.util.objId(o);
    					if (visited[id]) {
    						return visited[id];
    					}
    					clone = [];
    					visited[id] = clone;

    					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
    						clone[i] = deepClone(v, visited);
    					});

    					return /** @type {any} */ (clone);

    				default:
    					return o;
    			}
    		},

    		/**
    		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
    		 *
    		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
    		 *
    		 * @param {Element} element
    		 * @returns {string}
    		 */
    		getLanguage: function (element) {
    			while (element && !lang.test(element.className)) {
    				element = element.parentElement;
    			}
    			if (element) {
    				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
    			}
    			return 'none';
    		},

    		/**
    		 * Returns the script element that is currently executing.
    		 *
    		 * This does __not__ work for line script element.
    		 *
    		 * @returns {HTMLScriptElement | null}
    		 */
    		currentScript: function () {
    			if (typeof document === 'undefined') {
    				return null;
    			}
    			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
    				return /** @type {any} */ (document.currentScript);
    			}

    			// IE11 workaround
    			// we'll get the src of the current script by parsing IE11's error stack trace
    			// this will not work for inline scripts

    			try {
    				throw new Error();
    			} catch (err) {
    				// Get file src url from stack. Specifically works with the format of stack traces in IE.
    				// A stack will look like this:
    				//
    				// Error
    				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
    				//    at Global code (http://localhost/components/prism-core.js:606:1)

    				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
    				if (src) {
    					var scripts = document.getElementsByTagName('script');
    					for (var i in scripts) {
    						if (scripts[i].src == src) {
    							return scripts[i];
    						}
    					}
    				}
    				return null;
    			}
    		},

    		/**
    		 * Returns whether a given class is active for `element`.
    		 *
    		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
    		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
    		 * given class is just the given class with a `no-` prefix.
    		 *
    		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
    		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
    		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
    		 *
    		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
    		 * version of it, the class is considered active.
    		 *
    		 * @param {Element} element
    		 * @param {string} className
    		 * @param {boolean} [defaultActivation=false]
    		 * @returns {boolean}
    		 */
    		isActive: function (element, className, defaultActivation) {
    			var no = 'no-' + className;

    			while (element) {
    				var classList = element.classList;
    				if (classList.contains(className)) {
    					return true;
    				}
    				if (classList.contains(no)) {
    					return false;
    				}
    				element = element.parentElement;
    			}
    			return !!defaultActivation;
    		}
    	},

    	/**
    	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
    	 *
    	 * @namespace
    	 * @memberof Prism
    	 * @public
    	 */
    	languages: {
    		/**
    		 * Creates a deep copy of the language with the given id and appends the given tokens.
    		 *
    		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
    		 * will be overwritten at its original position.
    		 *
    		 * ## Best practices
    		 *
    		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
    		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
    		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
    		 *
    		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
    		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
    		 *
    		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
    		 * @param {Grammar} redef The new tokens to append.
    		 * @returns {Grammar} The new language created.
    		 * @public
    		 * @example
    		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
    		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
    		 *     // at its original position
    		 *     'comment': { ... },
    		 *     // CSS doesn't have a 'color' token, so this token will be appended
    		 *     'color': /\b(?:red|green|blue)\b/
    		 * });
    		 */
    		extend: function (id, redef) {
    			var lang = _.util.clone(_.languages[id]);

    			for (var key in redef) {
    				lang[key] = redef[key];
    			}

    			return lang;
    		},

    		/**
    		 * Inserts tokens _before_ another token in a language definition or any other grammar.
    		 *
    		 * ## Usage
    		 *
    		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
    		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
    		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
    		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
    		 * this:
    		 *
    		 * ```js
    		 * Prism.languages.markup.style = {
    		 *     // token
    		 * };
    		 * ```
    		 *
    		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
    		 * before existing tokens. For the CSS example above, you would use it like this:
    		 *
    		 * ```js
    		 * Prism.languages.insertBefore('markup', 'cdata', {
    		 *     'style': {
    		 *         // token
    		 *     }
    		 * });
    		 * ```
    		 *
    		 * ## Special cases
    		 *
    		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
    		 * will be ignored.
    		 *
    		 * This behavior can be used to insert tokens after `before`:
    		 *
    		 * ```js
    		 * Prism.languages.insertBefore('markup', 'comment', {
    		 *     'comment': Prism.languages.markup.comment,
    		 *     // tokens after 'comment'
    		 * });
    		 * ```
    		 *
    		 * ## Limitations
    		 *
    		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
    		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
    		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
    		 * deleting properties which is necessary to insert at arbitrary positions.
    		 *
    		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
    		 * Instead, it will create a new object and replace all references to the target object with the new one. This
    		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
    		 *
    		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
    		 * you hold the target object in a variable, then the value of the variable will not change.
    		 *
    		 * ```js
    		 * var oldMarkup = Prism.languages.markup;
    		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
    		 *
    		 * assert(oldMarkup !== Prism.languages.markup);
    		 * assert(newMarkup === Prism.languages.markup);
    		 * ```
    		 *
    		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
    		 * object to be modified.
    		 * @param {string} before The key to insert before.
    		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
    		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
    		 * object to be modified.
    		 *
    		 * Defaults to `Prism.languages`.
    		 * @returns {Grammar} The new grammar object.
    		 * @public
    		 */
    		insertBefore: function (inside, before, insert, root) {
    			root = root || /** @type {any} */ (_.languages);
    			var grammar = root[inside];
    			/** @type {Grammar} */
    			var ret = {};

    			for (var token in grammar) {
    				if (grammar.hasOwnProperty(token)) {

    					if (token == before) {
    						for (var newToken in insert) {
    							if (insert.hasOwnProperty(newToken)) {
    								ret[newToken] = insert[newToken];
    							}
    						}
    					}

    					// Do not insert token which also occur in insert. See #1525
    					if (!insert.hasOwnProperty(token)) {
    						ret[token] = grammar[token];
    					}
    				}
    			}

    			var old = root[inside];
    			root[inside] = ret;

    			// Update references in other language definitions
    			_.languages.DFS(_.languages, function(key, value) {
    				if (value === old && key != inside) {
    					this[key] = ret;
    				}
    			});

    			return ret;
    		},

    		// Traverse a language definition with Depth First Search
    		DFS: function DFS(o, callback, type, visited) {
    			visited = visited || {};

    			var objId = _.util.objId;

    			for (var i in o) {
    				if (o.hasOwnProperty(i)) {
    					callback.call(o, i, o[i], type || i);

    					var property = o[i],
    					    propertyType = _.util.type(property);

    					if (propertyType === 'Object' && !visited[objId(property)]) {
    						visited[objId(property)] = true;
    						DFS(property, callback, null, visited);
    					}
    					else if (propertyType === 'Array' && !visited[objId(property)]) {
    						visited[objId(property)] = true;
    						DFS(property, callback, i, visited);
    					}
    				}
    			}
    		}
    	},

    	plugins: {},

    	/**
    	 * This is the most high-level function in Prism’s API.
    	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
    	 * each one of them.
    	 *
    	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
    	 *
    	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
    	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
    	 * @memberof Prism
    	 * @public
    	 */
    	highlightAll: function(async, callback) {
    		_.highlightAllUnder(document, async, callback);
    	},

    	/**
    	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
    	 * {@link Prism.highlightElement} on each one of them.
    	 *
    	 * The following hooks will be run:
    	 * 1. `before-highlightall`
    	 * 2. `before-all-elements-highlight`
    	 * 3. All hooks of {@link Prism.highlightElement} for each element.
    	 *
    	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
    	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
    	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
    	 * @memberof Prism
    	 * @public
    	 */
    	highlightAllUnder: function(container, async, callback) {
    		var env = {
    			callback: callback,
    			container: container,
    			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
    		};

    		_.hooks.run('before-highlightall', env);

    		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

    		_.hooks.run('before-all-elements-highlight', env);

    		for (var i = 0, element; element = env.elements[i++];) {
    			_.highlightElement(element, async === true, env.callback);
    		}
    	},

    	/**
    	 * Highlights the code inside a single element.
    	 *
    	 * The following hooks will be run:
    	 * 1. `before-sanity-check`
    	 * 2. `before-highlight`
    	 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
    	 * 4. `before-insert`
    	 * 5. `after-highlight`
    	 * 6. `complete`
    	 *
    	 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
    	 * the element's language.
    	 *
    	 * @param {Element} element The element containing the code.
    	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
    	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
    	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
    	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
    	 *
    	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
    	 * asynchronous highlighting to work. You can build your own bundle on the
    	 * [Download page](https://prismjs.com/download.html).
    	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
    	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
    	 * @memberof Prism
    	 * @public
    	 */
    	highlightElement: function(element, async, callback) {
    		// Find language
    		var language = _.util.getLanguage(element);
    		var grammar = _.languages[language];

    		// Set language on the element, if not present
    		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

    		// Set language on the parent, for styling
    		var parent = element.parentElement;
    		if (parent && parent.nodeName.toLowerCase() === 'pre') {
    			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
    		}

    		var code = element.textContent;

    		var env = {
    			element: element,
    			language: language,
    			grammar: grammar,
    			code: code
    		};

    		function insertHighlightedCode(highlightedCode) {
    			env.highlightedCode = highlightedCode;

    			_.hooks.run('before-insert', env);

    			env.element.innerHTML = env.highlightedCode;

    			_.hooks.run('after-highlight', env);
    			_.hooks.run('complete', env);
    			callback && callback.call(env.element);
    		}

    		_.hooks.run('before-sanity-check', env);

    		if (!env.code) {
    			_.hooks.run('complete', env);
    			callback && callback.call(env.element);
    			return;
    		}

    		_.hooks.run('before-highlight', env);

    		if (!env.grammar) {
    			insertHighlightedCode(_.util.encode(env.code));
    			return;
    		}

    		if (async && _self.Worker) {
    			var worker = new Worker(_.filename);

    			worker.onmessage = function(evt) {
    				insertHighlightedCode(evt.data);
    			};

    			worker.postMessage(JSON.stringify({
    				language: env.language,
    				code: env.code,
    				immediateClose: true
    			}));
    		}
    		else {
    			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
    		}
    	},

    	/**
    	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
    	 * and the language definitions to use, and returns a string with the HTML produced.
    	 *
    	 * The following hooks will be run:
    	 * 1. `before-tokenize`
    	 * 2. `after-tokenize`
    	 * 3. `wrap`: On each {@link Token}.
    	 *
    	 * @param {string} text A string with the code to be highlighted.
    	 * @param {Grammar} grammar An object containing the tokens to use.
    	 *
    	 * Usually a language definition like `Prism.languages.markup`.
    	 * @param {string} language The name of the language definition passed to `grammar`.
    	 * @returns {string} The highlighted HTML.
    	 * @memberof Prism
    	 * @public
    	 * @example
    	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
    	 */
    	highlight: function (text, grammar, language) {
    		var env = {
    			code: text,
    			grammar: grammar,
    			language: language
    		};
    		_.hooks.run('before-tokenize', env);
    		env.tokens = _.tokenize(env.code, env.grammar);
    		_.hooks.run('after-tokenize', env);
    		return Token.stringify(_.util.encode(env.tokens), env.language);
    	},

    	/**
    	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
    	 * and the language definitions to use, and returns an array with the tokenized code.
    	 *
    	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
    	 *
    	 * This method could be useful in other contexts as well, as a very crude parser.
    	 *
    	 * @param {string} text A string with the code to be highlighted.
    	 * @param {Grammar} grammar An object containing the tokens to use.
    	 *
    	 * Usually a language definition like `Prism.languages.markup`.
    	 * @returns {TokenStream} An array of strings and tokens, a token stream.
    	 * @memberof Prism
    	 * @public
    	 * @example
    	 * let code = `var foo = 0;`;
    	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
    	 * tokens.forEach(token => {
    	 *     if (token instanceof Prism.Token && token.type === 'number') {
    	 *         console.log(`Found numeric literal: ${token.content}`);
    	 *     }
    	 * });
    	 */
    	tokenize: function(text, grammar) {
    		var rest = grammar.rest;
    		if (rest) {
    			for (var token in rest) {
    				grammar[token] = rest[token];
    			}

    			delete grammar.rest;
    		}

    		var tokenList = new LinkedList();
    		addAfter(tokenList, tokenList.head, text);

    		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

    		return toArray(tokenList);
    	},

    	/**
    	 * @namespace
    	 * @memberof Prism
    	 * @public
    	 */
    	hooks: {
    		all: {},

    		/**
    		 * Adds the given callback to the list of callbacks for the given hook.
    		 *
    		 * The callback will be invoked when the hook it is registered for is run.
    		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
    		 *
    		 * One callback function can be registered to multiple hooks and the same hook multiple times.
    		 *
    		 * @param {string} name The name of the hook.
    		 * @param {HookCallback} callback The callback function which is given environment variables.
    		 * @public
    		 */
    		add: function (name, callback) {
    			var hooks = _.hooks.all;

    			hooks[name] = hooks[name] || [];

    			hooks[name].push(callback);
    		},

    		/**
    		 * Runs a hook invoking all registered callbacks with the given environment variables.
    		 *
    		 * Callbacks will be invoked synchronously and in the order in which they were registered.
    		 *
    		 * @param {string} name The name of the hook.
    		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
    		 * @public
    		 */
    		run: function (name, env) {
    			var callbacks = _.hooks.all[name];

    			if (!callbacks || !callbacks.length) {
    				return;
    			}

    			for (var i=0, callback; callback = callbacks[i++];) {
    				callback(env);
    			}
    		}
    	},

    	Token: Token
    };
    _self.Prism = _;


    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */
    function Token(type, content, alias, matchedStr) {
    	/**
    	 * The type of the token.
    	 *
    	 * This is usually the key of a pattern in a {@link Grammar}.
    	 *
    	 * @type {string}
    	 * @see GrammarToken
    	 * @public
    	 */
    	this.type = type;
    	/**
    	 * The strings or tokens contained by this token.
    	 *
    	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
    	 *
    	 * @type {string | TokenStream}
    	 * @public
    	 */
    	this.content = content;
    	/**
    	 * The alias(es) of the token.
    	 *
    	 * @type {string|string[]}
    	 * @see GrammarToken
    	 * @public
    	 */
    	this.alias = alias;
    	// Copy of the full string this token was created from
    	this.length = (matchedStr || '').length | 0;
    }

    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */
    Token.stringify = function stringify(o, language) {
    	if (typeof o == 'string') {
    		return o;
    	}
    	if (Array.isArray(o)) {
    		var s = '';
    		o.forEach(function (e) {
    			s += stringify(e, language);
    		});
    		return s;
    	}

    	var env = {
    		type: o.type,
    		content: stringify(o.content, language),
    		tag: 'span',
    		classes: ['token', o.type],
    		attributes: {},
    		language: language
    	};

    	var aliases = o.alias;
    	if (aliases) {
    		if (Array.isArray(aliases)) {
    			Array.prototype.push.apply(env.classes, aliases);
    		} else {
    			env.classes.push(aliases);
    		}
    	}

    	_.hooks.run('wrap', env);

    	var attributes = '';
    	for (var name in env.attributes) {
    		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    	}

    	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };

    /**
     * @param {RegExp} pattern
     * @param {number} pos
     * @param {string} text
     * @param {boolean} lookbehind
     * @returns {RegExpExecArray | null}
     */
    function matchPattern(pattern, pos, text, lookbehind) {
    	pattern.lastIndex = pos;
    	var match = pattern.exec(text);
    	if (match && lookbehind && match[1]) {
    		// change the match to remove the text matched by the Prism lookbehind group
    		var lookbehindLength = match[1].length;
    		match.index += lookbehindLength;
    		match[0] = match[0].slice(lookbehindLength);
    	}
    	return match;
    }

    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    	for (var token in grammar) {
    		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
    			continue;
    		}

    		var patterns = grammar[token];
    		patterns = Array.isArray(patterns) ? patterns : [patterns];

    		for (var j = 0; j < patterns.length; ++j) {
    			if (rematch && rematch.cause == token + ',' + j) {
    				return;
    			}

    			var patternObj = patterns[j],
    				inside = patternObj.inside,
    				lookbehind = !!patternObj.lookbehind,
    				greedy = !!patternObj.greedy,
    				alias = patternObj.alias;

    			if (greedy && !patternObj.pattern.global) {
    				// Without the global flag, lastIndex won't work
    				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
    				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
    			}

    			/** @type {RegExp} */
    			var pattern = patternObj.pattern || patternObj;

    			for ( // iterate the token list and keep track of the current token/string position
    				var currentNode = startNode.next, pos = startPos;
    				currentNode !== tokenList.tail;
    				pos += currentNode.value.length, currentNode = currentNode.next
    			) {

    				if (rematch && pos >= rematch.reach) {
    					break;
    				}

    				var str = currentNode.value;

    				if (tokenList.length > text.length) {
    					// Something went terribly wrong, ABORT, ABORT!
    					return;
    				}

    				if (str instanceof Token) {
    					continue;
    				}

    				var removeCount = 1; // this is the to parameter of removeBetween
    				var match;

    				if (greedy) {
    					match = matchPattern(pattern, pos, text, lookbehind);
    					if (!match) {
    						break;
    					}

    					var from = match.index;
    					var to = match.index + match[0].length;
    					var p = pos;

    					// find the node that contains the match
    					p += currentNode.value.length;
    					while (from >= p) {
    						currentNode = currentNode.next;
    						p += currentNode.value.length;
    					}
    					// adjust pos (and p)
    					p -= currentNode.value.length;
    					pos = p;

    					// the current node is a Token, then the match starts inside another Token, which is invalid
    					if (currentNode.value instanceof Token) {
    						continue;
    					}

    					// find the last node which is affected by this match
    					for (
    						var k = currentNode;
    						k !== tokenList.tail && (p < to || typeof k.value === 'string');
    						k = k.next
    					) {
    						removeCount++;
    						p += k.value.length;
    					}
    					removeCount--;

    					// replace with the new match
    					str = text.slice(pos, p);
    					match.index -= pos;
    				} else {
    					match = matchPattern(pattern, 0, str, lookbehind);
    					if (!match) {
    						continue;
    					}
    				}

    				var from = match.index,
    					matchStr = match[0],
    					before = str.slice(0, from),
    					after = str.slice(from + matchStr.length);

    				var reach = pos + str.length;
    				if (rematch && reach > rematch.reach) {
    					rematch.reach = reach;
    				}

    				var removeFrom = currentNode.prev;

    				if (before) {
    					removeFrom = addAfter(tokenList, removeFrom, before);
    					pos += before.length;
    				}

    				removeRange(tokenList, removeFrom, removeCount);

    				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
    				currentNode = addAfter(tokenList, removeFrom, wrapped);

    				if (after) {
    					addAfter(tokenList, currentNode, after);
    				}

    				if (removeCount > 1) {
    					// at least one Token object was removed, so we have to do some rematching
    					// this can only happen if the current pattern is greedy
    					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
    						cause: token + ',' + j,
    						reach: reach
    					});
    				}
    			}
    		}
    	}
    }

    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */
    function LinkedList() {
    	/** @type {LinkedListNode<T>} */
    	var head = { value: null, prev: null, next: null };
    	/** @type {LinkedListNode<T>} */
    	var tail = { value: null, prev: head, next: null };
    	head.next = tail;

    	/** @type {LinkedListNode<T>} */
    	this.head = head;
    	/** @type {LinkedListNode<T>} */
    	this.tail = tail;
    	this.length = 0;
    }

    /**
     * Adds a new node with the given value to the list.
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */
    function addAfter(list, node, value) {
    	// assumes that node != list.tail && values.length >= 0
    	var next = node.next;

    	var newNode = { value: value, prev: node, next: next };
    	node.next = newNode;
    	next.prev = newNode;
    	list.length++;

    	return newNode;
    }
    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */
    function removeRange(list, node, count) {
    	var next = node.next;
    	for (var i = 0; i < count && next !== list.tail; i++) {
    		next = next.next;
    	}
    	node.next = next;
    	next.prev = node;
    	list.length -= i;
    }
    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */
    function toArray(list) {
    	var array = [];
    	var node = list.head.next;
    	while (node !== list.tail) {
    		array.push(node.value);
    		node = node.next;
    	}
    	return array;
    }


    if (!_self.document) {
    	if (!_self.addEventListener) {
    		// in Node.js
    		return _;
    	}

    	if (!_.disableWorkerMessageHandler) {
    		// In worker
    		_self.addEventListener('message', function (evt) {
    			var message = JSON.parse(evt.data),
    				lang = message.language,
    				code = message.code,
    				immediateClose = message.immediateClose;

    			_self.postMessage(_.highlight(code, _.languages[lang], lang));
    			if (immediateClose) {
    				_self.close();
    			}
    		}, false);
    	}

    	return _;
    }

    // Get current script and highlight
    var script = _.util.currentScript();

    if (script) {
    	_.filename = script.src;

    	if (script.hasAttribute('data-manual')) {
    		_.manual = true;
    	}
    }

    function highlightAutomaticallyCallback() {
    	if (!_.manual) {
    		_.highlightAll();
    	}
    }

    if (!_.manual) {
    	// If the document state is "loading", then we'll use DOMContentLoaded.
    	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    	// might take longer one animation frame to execute which can create a race condition where only some plugins have
    	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    	// See https://github.com/PrismJS/prism/issues/2102
    	var readyState = document.readyState;
    	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
    		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    	} else {
    		if (window.requestAnimationFrame) {
    			window.requestAnimationFrame(highlightAutomaticallyCallback);
    		} else {
    			window.setTimeout(highlightAutomaticallyCallback, 16);
    		}
    	}
    }

    return _;

    })(_self);

    if (module.exports) {
    	module.exports = Prism;
    }

    // hack for components to work correctly in node.js
    if (typeof commonjsGlobal !== 'undefined') {
    	commonjsGlobal.Prism = Prism;
    }

    // some additional documentation/types

    /**
     * The expansion of a simple `RegExp` literal to support additional properties.
     *
     * @typedef GrammarToken
     * @property {RegExp} pattern The regular expression of the token.
     * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
     * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
     * @property {boolean} [greedy=false] Whether the token is greedy.
     * @property {string|string[]} [alias] An optional alias or list of aliases.
     * @property {Grammar} [inside] The nested grammar of this token.
     *
     * The `inside` grammar will be used to tokenize the text value of each token of this kind.
     *
     * This can be used to make nested and even recursive language definitions.
     *
     * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
     * each another.
     * @global
     * @public
    */

    /**
     * @typedef Grammar
     * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
     * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
     * @global
     * @public
     */

    /**
     * A function which will invoked after an element was successfully highlighted.
     *
     * @callback HighlightCallback
     * @param {Element} element The element successfully highlighted.
     * @returns {void}
     * @global
     * @public
    */

    /**
     * @callback HookCallback
     * @param {Object<string, any>} env The environment variables of the hook.
     * @returns {void}
     * @global
     * @public
     */


    /* **********************************************
         Begin prism-markup.js
    ********************************************** */

    Prism.languages.markup = {
    	'comment': /<!--[\s\S]*?-->/,
    	'prolog': /<\?[\s\S]+?\?>/,
    	'doctype': {
    		// https://www.w3.org/TR/xml/#NT-doctypedecl
    		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    		greedy: true,
    		inside: {
    			'internal-subset': {
    				pattern: /(\[)[\s\S]+(?=\]>$)/,
    				lookbehind: true,
    				greedy: true,
    				inside: null // see below
    			},
    			'string': {
    				pattern: /"[^"]*"|'[^']*'/,
    				greedy: true
    			},
    			'punctuation': /^<!|>$|[[\]]/,
    			'doctype-tag': /^DOCTYPE/,
    			'name': /[^\s<>'"]+/
    		}
    	},
    	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    	'tag': {
    		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    		greedy: true,
    		inside: {
    			'tag': {
    				pattern: /^<\/?[^\s>\/]+/,
    				inside: {
    					'punctuation': /^<\/?/,
    					'namespace': /^[^\s>\/:]+:/
    				}
    			},
    			'attr-value': {
    				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
    				inside: {
    					'punctuation': [
    						{
    							pattern: /^=/,
    							alias: 'attr-equals'
    						},
    						/"|'/
    					]
    				}
    			},
    			'punctuation': /\/?>/,
    			'attr-name': {
    				pattern: /[^\s>\/]+/,
    				inside: {
    					'namespace': /^[^\s>\/:]+:/
    				}
    			}

    		}
    	},
    	'entity': [
    		{
    			pattern: /&[\da-z]{1,8};/i,
    			alias: 'named-entity'
    		},
    		/&#x?[\da-f]{1,8};/i
    	]
    };

    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    	Prism.languages.markup['entity'];
    Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

    // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function (env) {

    	if (env.type === 'entity') {
    		env.attributes['title'] = env.content.replace(/&amp;/, '&');
    	}
    });

    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    	/**
    	 * Adds an inlined language to markup.
    	 *
    	 * An example of an inlined language is CSS with `<style>` tags.
    	 *
    	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
    	 * case insensitive.
    	 * @param {string} lang The language key.
    	 * @example
    	 * addInlined('style', 'css');
    	 */
    	value: function addInlined(tagName, lang) {
    		var includedCdataInside = {};
    		includedCdataInside['language-' + lang] = {
    			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
    			lookbehind: true,
    			inside: Prism.languages[lang]
    		};
    		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

    		var inside = {
    			'included-cdata': {
    				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    				inside: includedCdataInside
    			}
    		};
    		inside['language-' + lang] = {
    			pattern: /[\s\S]+/,
    			inside: Prism.languages[lang]
    		};

    		var def = {};
    		def[tagName] = {
    			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
    			lookbehind: true,
    			greedy: true,
    			inside: inside
    		};

    		Prism.languages.insertBefore('markup', 'cdata', def);
    	}
    });

    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;

    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.ssml = Prism.languages.xml;
    Prism.languages.atom = Prism.languages.xml;
    Prism.languages.rss = Prism.languages.xml;


    /* **********************************************
         Begin prism-css.js
    ********************************************** */

    (function (Prism) {

    	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

    	Prism.languages.css = {
    		'comment': /\/\*[\s\S]*?\*\//,
    		'atrule': {
    			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
    			inside: {
    				'rule': /^@[\w-]+/,
    				'selector-function-argument': {
    					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
    					lookbehind: true,
    					alias: 'selector'
    				},
    				'keyword': {
    					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
    					lookbehind: true
    				}
    				// See rest below
    			}
    		},
    		'url': {
    			// https://drafts.csswg.org/css-values-3/#urls
    			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
    			greedy: true,
    			inside: {
    				'function': /^url/i,
    				'punctuation': /^\(|\)$/,
    				'string': {
    					pattern: RegExp('^' + string.source + '$'),
    					alias: 'url'
    				}
    			}
    		},
    		'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
    		'string': {
    			pattern: string,
    			greedy: true
    		},
    		'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    		'important': /!important\b/i,
    		'function': /[-a-z0-9]+(?=\()/i,
    		'punctuation': /[(){};:,]/
    	};

    	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

    	var markup = Prism.languages.markup;
    	if (markup) {
    		markup.tag.addInlined('style', 'css');

    		Prism.languages.insertBefore('inside', 'attr-value', {
    			'style-attr': {
    				pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
    				lookbehind: true,
    				inside: {
    					'attr-value': {
    						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
    						inside: {
    							'style': {
    								pattern: /(["'])[\s\S]+(?=["']$)/,
    								lookbehind: true,
    								alias: 'language-css',
    								inside: Prism.languages.css
    							},
    							'punctuation': [
    								{
    									pattern: /^=/,
    									alias: 'attr-equals'
    								},
    								/"|'/
    							]
    						}
    					},
    					'attr-name': /^style/i
    				}
    			}
    		}, markup.tag);
    	}

    }(Prism));


    /* **********************************************
         Begin prism-clike.js
    ********************************************** */

    Prism.languages.clike = {
    	'comment': [
    		{
    			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    			lookbehind: true,
    			greedy: true
    		},
    		{
    			pattern: /(^|[^\\:])\/\/.*/,
    			lookbehind: true,
    			greedy: true
    		}
    	],
    	'string': {
    		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    		greedy: true
    	},
    	'class-name': {
    		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    		lookbehind: true,
    		inside: {
    			'punctuation': /[.\\]/
    		}
    	},
    	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    	'boolean': /\b(?:true|false)\b/,
    	'function': /\w+(?=\()/,
    	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    	'punctuation': /[{}[\];(),.:]/
    };


    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */

    Prism.languages.javascript = Prism.languages.extend('clike', {
    	'class-name': [
    		Prism.languages.clike['class-name'],
    		{
    			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
    			lookbehind: true
    		}
    	],
    	'keyword': [
    		{
    			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    			lookbehind: true
    		},
    		{
    			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    			lookbehind: true
    		},
    	],
    	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });

    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

    Prism.languages.insertBefore('javascript', 'keyword', {
    	'regex': {
    		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    		lookbehind: true,
    		greedy: true,
    		inside: {
    			'regex-source': {
    				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
    				lookbehind: true,
    				alias: 'language-regex',
    				inside: Prism.languages.regex
    			},
    			'regex-flags': /[a-z]+$/,
    			'regex-delimiter': /^\/|\/$/
    		}
    	},
    	// This must be declared before keyword because we use "function" inside the look-forward
    	'function-variable': {
    		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    		alias: 'function'
    	},
    	'parameter': [
    		{
    			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    			lookbehind: true,
    			inside: Prism.languages.javascript
    		},
    		{
    			pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    			inside: Prism.languages.javascript
    		},
    		{
    			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    			lookbehind: true,
    			inside: Prism.languages.javascript
    		},
    		{
    			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    			lookbehind: true,
    			inside: Prism.languages.javascript
    		}
    	],
    	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });

    Prism.languages.insertBefore('javascript', 'string', {
    	'template-string': {
    		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    		greedy: true,
    		inside: {
    			'template-punctuation': {
    				pattern: /^`|`$/,
    				alias: 'string'
    			},
    			'interpolation': {
    				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
    				lookbehind: true,
    				inside: {
    					'interpolation-punctuation': {
    						pattern: /^\${|}$/,
    						alias: 'punctuation'
    					},
    					rest: Prism.languages.javascript
    				}
    			},
    			'string': /[\s\S]+/
    		}
    	}
    });

    if (Prism.languages.markup) {
    	Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;


    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */

    (function () {
    	if (typeof self === 'undefined' || !self.Prism || !self.document) {
    		return;
    	}

    	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    	if (!Element.prototype.matches) {
    		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    	}

    	var Prism = window.Prism;

    	var LOADING_MESSAGE = 'Loading…';
    	var FAILURE_MESSAGE = function (status, message) {
    		return '✖ Error ' + status + ' while fetching file: ' + message;
    	};
    	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

    	var EXTENSIONS = {
    		'js': 'javascript',
    		'py': 'python',
    		'rb': 'ruby',
    		'ps1': 'powershell',
    		'psm1': 'powershell',
    		'sh': 'bash',
    		'bat': 'batch',
    		'h': 'c',
    		'tex': 'latex'
    	};

    	var STATUS_ATTR = 'data-src-status';
    	var STATUS_LOADING = 'loading';
    	var STATUS_LOADED = 'loaded';
    	var STATUS_FAILED = 'failed';

    	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
    		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

    	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

    	/**
    	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
    	 *
    	 * @param {HTMLElement} element
    	 * @param {string} language
    	 * @returns {void}
    	 */
    	function setLanguageClass(element, language) {
    		var className = element.className;
    		className = className.replace(lang, ' ') + ' language-' + language;
    		element.className = className.replace(/\s+/g, ' ').trim();
    	}


    	Prism.hooks.add('before-highlightall', function (env) {
    		env.selector += ', ' + SELECTOR;
    	});

    	Prism.hooks.add('before-sanity-check', function (env) {
    		var pre = /** @type {HTMLPreElement} */ (env.element);
    		if (pre.matches(SELECTOR)) {
    			env.code = ''; // fast-path the whole thing and go to complete

    			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

    			// add code element with loading message
    			var code = pre.appendChild(document.createElement('CODE'));
    			code.textContent = LOADING_MESSAGE;

    			var src = pre.getAttribute('data-src');

    			var language = env.language;
    			if (language === 'none') {
    				// the language might be 'none' because there is no language set;
    				// in this case, we want to use the extension as the language
    				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
    				language = EXTENSIONS[extension] || extension;
    			}

    			// set language classes
    			setLanguageClass(code, language);
    			setLanguageClass(pre, language);

    			// preload the language
    			var autoloader = Prism.plugins.autoloader;
    			if (autoloader) {
    				autoloader.loadLanguages(language);
    			}

    			// load file
    			var xhr = new XMLHttpRequest();
    			xhr.open('GET', src, true);
    			xhr.onreadystatechange = function () {
    				if (xhr.readyState == 4) {
    					if (xhr.status < 400 && xhr.responseText) {
    						// mark as loaded
    						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

    						// highlight code
    						code.textContent = xhr.responseText;
    						Prism.highlightElement(code);

    					} else {
    						// mark as failed
    						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

    						if (xhr.status >= 400) {
    							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
    						} else {
    							code.textContent = FAILURE_EMPTY_MESSAGE;
    						}
    					}
    				}
    			};
    			xhr.send(null);
    		}
    	});

    	Prism.plugins.fileHighlight = {
    		/**
    		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
    		 *
    		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
    		 *
    		 * @param {ParentNode} [container=document]
    		 */
    		highlight: function highlight(container) {
    			var elements = (container || document).querySelectorAll(SELECTOR);

    			for (var i = 0, element; element = elements[i++];) {
    				Prism.highlightElement(element);
    			}
    		}
    	};

    	var logged = false;
    	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
    	Prism.fileHighlight = function () {
    		if (!logged) {
    			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
    			logged = true;
    		}
    		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    	};

    })();
    }(prism$2));

    var prism$1 = prism$2.exports;

    const blocks = '(if|else if|await|then|catch|each|html|debug)';

    Prism.languages.svelte = Prism.languages.extend('markup', {
    	each: {
    		pattern: new RegExp(
    			'{[#/]each' +
    				'(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'
    		),
    		inside: {
    			'language-javascript': [
    				{
    					pattern: /(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,
    					lookbehind: true,
    					inside: Prism.languages['javascript'],
    				},
    				{
    					pattern: /(as[\s]*)[\s\S]*(?=\s*)/,
    					lookbehind: true,
    					inside: Prism.languages['javascript'],
    				},
    				{
    					pattern: /(#each[\s]*)[\s\S]*(?=as)/,
    					lookbehind: true,
    					inside: Prism.languages['javascript'],
    				},
    			],
    			keyword: /[#/]each|as/,
    			punctuation: /{|}/,
    		},
    	},
    	block: {
    		pattern: new RegExp(
    			'{[#:/@]/s' +
    				blocks +
    				'(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'
    		),
    		inside: {
    			punctuation: /^{|}$/,
    			keyword: [new RegExp('[#:/@]' + blocks + '( )*'), /as/, /then/],
    			'language-javascript': {
    				pattern: /[\s\S]*/,
    				inside: Prism.languages['javascript'],
    			},
    		},
    	},
    	tag: {
    		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,
    		greedy: true,
    		inside: {
    			tag: {
    				pattern: /^<\/?[^\s>\/]+/i,
    				inside: {
    					punctuation: /^<\/?/,
    					namespace: /^[^\s>\/:]+:/,
    				},
    			},
    			'language-javascript': {
    				pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
    				inside: Prism.languages['javascript'],
    			},
    			'attr-value': {
    				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
    				inside: {
    					punctuation: [
    						/^=/,
    						{
    							pattern: /^(\s*)["']|["']$/,
    							lookbehind: true,
    						},
    					],
    					'language-javascript': {
    						pattern: /{[\s\S]+}/,
    						inside: Prism.languages['javascript'],
    					},
    				},
    			},
    			punctuation: /\/?>/,
    			'attr-name': {
    				pattern: /[^\s>\/]+/,
    				inside: {
    					namespace: /^[^\s>\/:]+:/,
    				},
    			},
    		},
    	},
    	'language-javascript': {
    		pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
    		lookbehind: true,
    		inside: Prism.languages['javascript'],
    	},
    });

    Prism.languages.svelte['tag'].inside['attr-value'].inside['entity'] =
    	Prism.languages.svelte['entity'];

    Prism.hooks.add('wrap', env => {
    	if (env.type === 'entity') {
    		env.attributes['title'] = env.content.replace(/&amp;/, '&');
    	}
    });

    Object.defineProperty(Prism.languages.svelte.tag, 'addInlined', {
    	value: function addInlined(tagName, lang) {
    		const includedCdataInside = {};
    		includedCdataInside['language-' + lang] = {
    			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
    			lookbehind: true,
    			inside: Prism.languages[lang],
    		};
    		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

    		const inside = {
    			'included-cdata': {
    				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    				inside: includedCdataInside,
    			},
    		};
    		inside['language-' + lang] = {
    			pattern: /[\s\S]+/,
    			inside: Prism.languages[lang],
    		};

    		const def = {};
    		def[tagName] = {
    			pattern: RegExp(
    				/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
    					/__/g,
    					tagName
    				),
    				'i'
    			),
    			lookbehind: true,
    			greedy: true,
    			inside,
    		};

    		Prism.languages.insertBefore('svelte', 'cdata', def);
    	},
    });

    Prism.languages.svelte.tag.addInlined('style', 'css');
    Prism.languages.svelte.tag.addInlined('script', 'javascript');

    /* node_modules/svelte-prism/src/Prism.svelte generated by Svelte v3.38.2 */
    const file$q = "node_modules/svelte-prism/src/Prism.svelte";

    // (37:4) {:else}
    function create_else_block$d(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*formattedCode*/ ctx[2], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*formattedCode*/ 4) html_tag.p(/*formattedCode*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$d.name,
    		type: "else",
    		source: "(37:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (35:4) {#if language === 'none'}
    function create_if_block$d(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*formattedCode*/ ctx[2]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*formattedCode*/ 4) set_data_dev(t, /*formattedCode*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$d.name,
    		type: "if",
    		source: "(35:4) {#if language === 'none'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$q(ctx) {
    	let code0;
    	let t;
    	let pre;
    	let code1;
    	let code1_class_value;
    	let pre_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

    	function select_block_type(ctx, dirty) {
    		if (/*language*/ ctx[0] === "none") return create_if_block$d;
    		return create_else_block$d;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			code0 = element("code");
    			if (default_slot) default_slot.c();
    			t = space();
    			pre = element("pre");
    			code1 = element("code");
    			if_block.c();
    			set_style(code0, "display", "none");
    			add_location(code0, file$q, 28, 0, 766);
    			attr_dev(code1, "class", code1_class_value = "language-" + /*language*/ ctx[0]);
    			add_location(code1, file$q, 33, 2, 902);
    			attr_dev(pre, "class", pre_class_value = "language-" + /*language*/ ctx[0]);
    			attr_dev(pre, "command-line", "");
    			attr_dev(pre, "data-output", "2-17");
    			add_location(pre, file$q, 32, 0, 834);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, code0, anchor);

    			if (default_slot) {
    				default_slot.m(code0, null);
    			}

    			/*code0_binding*/ ctx[7](code0);
    			insert_dev(target, t, anchor);
    			insert_dev(target, pre, anchor);
    			append_dev(pre, code1);
    			if_block.m(code1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
    				}
    			}

    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(code1, null);
    				}
    			}

    			if (!current || dirty & /*language*/ 1 && code1_class_value !== (code1_class_value = "language-" + /*language*/ ctx[0])) {
    				attr_dev(code1, "class", code1_class_value);
    			}

    			if (!current || dirty & /*language*/ 1 && pre_class_value !== (pre_class_value = "language-" + /*language*/ ctx[0])) {
    				attr_dev(pre, "class", pre_class_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(code0);
    			if (default_slot) default_slot.d(detaching);
    			/*code0_binding*/ ctx[7](null);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(pre);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const prism = prism$1;
    const highlight = prism$1.highlightElement;
    const globalConfig = { transform: x => x };

    function instance$q($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Prism", slots, ['default']);
    	let { language = "javascript" } = $$props;
    	let { source = "" } = $$props;
    	let { transform = x => x } = $$props;
    	let element, formattedCode;

    	function highlightCode() {
    		const grammar = prism.languages[language];
    		let body = source || element.textContent;
    		body = globalConfig.transform(body);
    		body = transform(body);

    		$$invalidate(2, formattedCode = language === "none"
    		? body
    		: prism.highlight(body, grammar, language));
    	}

    	function code0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		if ("language" in $$new_props) $$invalidate(0, language = $$new_props.language);
    		if ("source" in $$new_props) $$invalidate(3, source = $$new_props.source);
    		if ("transform" in $$new_props) $$invalidate(4, transform = $$new_props.transform);
    		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		_prism: prism$1,
    		prism,
    		highlight,
    		globalConfig,
    		tick,
    		language,
    		source,
    		transform,
    		element,
    		formattedCode,
    		highlightCode
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(9, $$props = assign(assign({}, $$props), $$new_props));
    		if ("language" in $$props) $$invalidate(0, language = $$new_props.language);
    		if ("source" in $$props) $$invalidate(3, source = $$new_props.source);
    		if ("transform" in $$props) $$invalidate(4, transform = $$new_props.transform);
    		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
    		if ("formattedCode" in $$props) $$invalidate(2, formattedCode = $$new_props.formattedCode);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		$$props && (source || element) && highlightCode();
    	};

    	$$props = exclude_internal_props($$props);

    	return [
    		language,
    		element,
    		formattedCode,
    		source,
    		transform,
    		$$scope,
    		slots,
    		code0_binding
    	];
    }

    class Prism$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$q, create_fragment$q, safe_not_equal, { language: 0, source: 3, transform: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prism",
    			options,
    			id: create_fragment$q.name
    		});
    	}

    	get language() {
    		throw new Error("<Prism>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set language(value) {
    		throw new Error("<Prism>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get source() {
    		throw new Error("<Prism>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set source(value) {
    		throw new Error("<Prism>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get transform() {
    		throw new Error("<Prism>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set transform(value) {
    		throw new Error("<Prism>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var dist = {};

    var words = {};

    Object.defineProperty(words, "__esModule", {
      value: true
    });
    words.WORDS = void 0;
    var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
    words.WORDS = WORDS;

    var LoremIpsum$1 = {};

    var formats = {};

    Object.defineProperty(formats, "__esModule", {
      value: true
    });
    formats.FORMATS = formats.FORMAT_PLAIN = formats.FORMAT_HTML = void 0;
    var FORMAT_HTML = "html";
    formats.FORMAT_HTML = FORMAT_HTML;
    var FORMAT_PLAIN = "plain";
    formats.FORMAT_PLAIN = FORMAT_PLAIN;
    var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
    formats.FORMATS = FORMATS;

    var lineEndings = {};

    Object.defineProperty(lineEndings, "__esModule", {
      value: true
    });
    lineEndings.LINE_ENDINGS = void 0;
    var LINE_ENDINGS = {
      POSIX: "\n",
      WIN32: "\r\n"
    };
    lineEndings.LINE_ENDINGS = LINE_ENDINGS;

    var generator = {};

    var util = {};

    var capitalize$1 = {};

    Object.defineProperty(capitalize$1, "__esModule", {
      value: true
    });
    capitalize$1.default = void 0;

    /**
     * @param str  A string that may or may not be capitalized.
     * @returns    A capitalized string.
     */
    var capitalize = function capitalize(str) {
      var trimmed = str.trim();
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    };

    var _default$6 = capitalize;
    capitalize$1.default = _default$6;

    var isNode = {exports: {}};

    (function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    /**
     * @returns  True if the runtime is NodeJS.
     */
    var isNode = function isNode() {
      return !!module.exports;
    };

    var _default = isNode;
    exports.default = _default;

    }(isNode, isNode.exports));

    var isReactNative$1 = {};

    Object.defineProperty(isReactNative$1, "__esModule", {
      value: true
    });
    isReactNative$1.default = void 0;

    /**
     * @returns  True if runtime is ReactNative.
     */
    var isReactNative = function isReactNative() {
      return typeof navigator !== "undefined" && navigator.product === "ReactNative";
    };

    var _default$5 = isReactNative;
    isReactNative$1.default = _default$5;

    var isWindows$1 = {};

    var platforms = {};

    Object.defineProperty(platforms, "__esModule", {
      value: true
    });
    platforms.SUPPORTED_PLATFORMS = void 0;
    var SUPPORTED_PLATFORMS = {
      DARWIN: "darwin",
      LINUX: "linux",
      WIN32: "win32"
    };
    platforms.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;

    Object.defineProperty(isWindows$1, "__esModule", {
      value: true
    });
    isWindows$1.default = void 0;

    var _platforms = platforms;

    /**
     * @returns True if process is windows.
     */
    var isWindows = function isWindows() {
      return typeof process !== "undefined" && process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
    };

    var _default$4 = isWindows;
    isWindows$1.default = _default$4;

    var makeArrayOfLength$1 = {};

    Object.defineProperty(makeArrayOfLength$1, "__esModule", {
      value: true
    });
    makeArrayOfLength$1.default = void 0;

    /**
     * @param length Length "x".
     * @returns      An array of indexes of length "x".
     */
    var makeArrayOfLength = function makeArrayOfLength() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return Array.apply(null, Array(length)).map(function (item, index) {
        return index;
      });
    };

    var _default$3 = makeArrayOfLength;
    makeArrayOfLength$1.default = _default$3;

    var makeArrayOfStrings$1 = {};

    Object.defineProperty(makeArrayOfStrings$1, "__esModule", {
      value: true
    });
    makeArrayOfStrings$1.default = void 0;

    var _ = util;

    /**
     * @param length  Length "x".
     * @returns       An array of strings of length "x".
     */
    var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
      var arr = (0, _.makeArrayOfLength)(length);
      return arr.map(function () {
        return makeString();
      });
    };

    var _default$2 = makeArrayOfStrings;
    makeArrayOfStrings$1.default = _default$2;

    (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "capitalize", {
      enumerable: true,
      get: function get() {
        return _capitalize.default;
      }
    });
    Object.defineProperty(exports, "isNode", {
      enumerable: true,
      get: function get() {
        return _isNode.default;
      }
    });
    Object.defineProperty(exports, "isReactNative", {
      enumerable: true,
      get: function get() {
        return _isReactNative.default;
      }
    });
    Object.defineProperty(exports, "isWindows", {
      enumerable: true,
      get: function get() {
        return _isWindows.default;
      }
    });
    Object.defineProperty(exports, "makeArrayOfLength", {
      enumerable: true,
      get: function get() {
        return _makeArrayOfLength.default;
      }
    });
    Object.defineProperty(exports, "makeArrayOfStrings", {
      enumerable: true,
      get: function get() {
        return _makeArrayOfStrings.default;
      }
    });

    var _capitalize = _interopRequireDefault(capitalize$1);

    var _isNode = _interopRequireDefault(isNode.exports);

    var _isReactNative = _interopRequireDefault(isReactNative$1);

    var _isWindows = _interopRequireDefault(isWindows$1);

    var _makeArrayOfLength = _interopRequireDefault(makeArrayOfLength$1);

    var _makeArrayOfStrings = _interopRequireDefault(makeArrayOfStrings$1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    }(util));

    Object.defineProperty(generator, "__esModule", {
      value: true
    });
    generator.default = void 0;

    var _words = words;

    var _util$1 = util;

    function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

    function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var Generator =
    /*#__PURE__*/
    function () {
      function Generator() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$sentencesPerPara = _ref.sentencesPerParagraph,
            sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
          max: 7,
          min: 3
        } : _ref$sentencesPerPara,
            _ref$wordsPerSentence = _ref.wordsPerSentence,
            wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
          max: 15,
          min: 5
        } : _ref$wordsPerSentence,
            random = _ref.random;
            _ref.seed;
            var _ref$words = _ref.words,
            words = _ref$words === void 0 ? _words.WORDS : _ref$words;

        _classCallCheck$1(this, Generator);

        _defineProperty$1(this, "sentencesPerParagraph", void 0);

        _defineProperty$1(this, "wordsPerSentence", void 0);

        _defineProperty$1(this, "random", void 0);

        _defineProperty$1(this, "words", void 0);

        if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
          throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
        }

        if (wordsPerSentence.min > wordsPerSentence.max) {
          throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
        }

        this.sentencesPerParagraph = sentencesPerParagraph;
        this.words = words;
        this.wordsPerSentence = wordsPerSentence;
        this.random = random || Math.random;
      }

      _createClass$1(Generator, [{
        key: "generateRandomInteger",
        value: function generateRandomInteger(min, max) {
          return Math.floor(this.random() * (max - min + 1) + min);
        }
      }, {
        key: "generateRandomWords",
        value: function generateRandomWords(num) {
          var _this = this;

          var _this$wordsPerSentenc = this.wordsPerSentence,
              min = _this$wordsPerSentenc.min,
              max = _this$wordsPerSentenc.max;
          var length = num || this.generateRandomInteger(min, max);
          return (0, _util$1.makeArrayOfLength)(length).reduce(function (accumulator, index) {
            return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
          }, "").trim();
        }
      }, {
        key: "generateRandomSentence",
        value: function generateRandomSentence(num) {
          return "".concat((0, _util$1.capitalize)(this.generateRandomWords(num)), ".");
        }
      }, {
        key: "generateRandomParagraph",
        value: function generateRandomParagraph(num) {
          var _this2 = this;

          var _this$sentencesPerPar = this.sentencesPerParagraph,
              min = _this$sentencesPerPar.min,
              max = _this$sentencesPerPar.max;
          var length = num || this.generateRandomInteger(min, max);
          return (0, _util$1.makeArrayOfLength)(length).reduce(function (accumulator, index) {
            return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
          }, "").trim();
        }
      }, {
        key: "pluckRandomWord",
        value: function pluckRandomWord() {
          var min = 0;
          var max = this.words.length - 1;
          var index = this.generateRandomInteger(min, max);
          return this.words[index];
        }
      }]);

      return Generator;
    }();

    var _default$1 = Generator;
    generator.default = _default$1;

    Object.defineProperty(LoremIpsum$1, "__esModule", {
      value: true
    });
    LoremIpsum$1.default = void 0;

    var _formats = formats;

    var _lineEndings = lineEndings;

    var _generator = _interopRequireDefault(generator);

    var _util = util;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var LoremIpsum =
    /*#__PURE__*/
    function () {
      function LoremIpsum() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
        var suffix = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, LoremIpsum);

        _defineProperty(this, "generator", void 0);

        _defineProperty(this, "format", void 0);

        _defineProperty(this, "suffix", void 0);

        if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
          throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
        }

        this.format = format.toLowerCase();
        this.suffix = suffix;
        this.generator = new _generator.default(options);
      }

      _createClass(LoremIpsum, [{
        key: "getLineEnding",
        value: function getLineEnding() {
          if (this.suffix) {
            return this.suffix;
          }

          if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
            return _lineEndings.LINE_ENDINGS.WIN32;
          }

          return _lineEndings.LINE_ENDINGS.POSIX;
        }
      }, {
        key: "formatString",
        value: function formatString(str) {
          if (this.format === _formats.FORMAT_HTML) {
            return "<p>".concat(str, "</p>");
          }

          return str;
        }
      }, {
        key: "formatStrings",
        value: function formatStrings(strings) {
          var _this = this;

          return strings.map(function (str) {
            return _this.formatString(str);
          });
        }
      }, {
        key: "generateWords",
        value: function generateWords(num) {
          return this.formatString(this.generator.generateRandomWords(num));
        }
      }, {
        key: "generateSentences",
        value: function generateSentences(num) {
          return this.formatString(this.generator.generateRandomParagraph(num));
        }
      }, {
        key: "generateParagraphs",
        value: function generateParagraphs(num) {
          var makeString = this.generator.generateRandomParagraph.bind(this.generator);
          return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
        }
      }]);

      return LoremIpsum;
    }();

    var _default = LoremIpsum;
    LoremIpsum$1.default = _default;

    (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "LoremIpsum", {
      enumerable: true,
      get: function get() {
        return _LoremIpsum.default;
      }
    });
    exports.loremIpsum = void 0;

    var _words = words;

    var _LoremIpsum = _interopRequireDefault(LoremIpsum$1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var loremIpsum = function loremIpsum() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$count = _ref.count,
          count = _ref$count === void 0 ? 1 : _ref$count,
          _ref$format = _ref.format,
          format = _ref$format === void 0 ? "plain" : _ref$format,
          _ref$paragraphLowerBo = _ref.paragraphLowerBound,
          paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
          _ref$paragraphUpperBo = _ref.paragraphUpperBound,
          paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
          random = _ref.random,
          _ref$sentenceLowerBou = _ref.sentenceLowerBound,
          sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
          _ref$sentenceUpperBou = _ref.sentenceUpperBound,
          sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
          _ref$units = _ref.units,
          units = _ref$units === void 0 ? "sentences" : _ref$units,
          _ref$words = _ref.words,
          words = _ref$words === void 0 ? _words.WORDS : _ref$words,
          _ref$suffix = _ref.suffix,
          suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

      var options = {
        random: random,
        sentencesPerParagraph: {
          max: paragraphUpperBound,
          min: paragraphLowerBound
        },
        words: words,
        wordsPerSentence: {
          max: sentenceUpperBound,
          min: sentenceLowerBound
        }
      };
      var lorem = new _LoremIpsum.default(options, format, suffix);

      switch (units) {
        case "paragraphs":
        case "paragraph":
          return lorem.generateParagraphs(count);

        case "sentences":
        case "sentence":
          return lorem.generateSentences(count);

        case "words":
        case "word":
          return lorem.generateWords(count);

        default:
          return "";
      }
    };

    exports.loremIpsum = loremIpsum;

    }(dist));

    function rdmParagraphs(num = 3) {
        const lorem = new dist.LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4,
            },
            wordsPerSentence: {
                max: 12,
                min: 4,
            },
        }, 'html');
        return lorem.generateParagraphs(num);
    }
    function rdmArticleData(mediaWidth = 640, mediaHeight = 360) {
        const lorem = new dist.LoremIpsum({
            wordsPerSentence: {
                max: 12,
                min: 4,
            },
        });
        const colorClasses = ['flash', 'forbrug', 'leder', 'nationen', 'nyheder', 'sex-samliv', 'sport', 'underholdning'];
        const article = {
            breaking: Math.random() < 0.1,
            premium: Math.random() < 0.3,
            src: '#',
            colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
            media: {
                src: `https://loremflickr.com/${mediaWidth}/${mediaHeight}/city,people,nature,animal?random=${Math.random()}`,
            },
            published: randomDate().toString(),
            saved: Math.random() < 0.5,
            section: lorem.generateWords(1),
            title: lorem.generateSentences(1),
            truncateTitle: false,
        };
        return article;
    }
    function randomDate() {
        const start = new Date(2019, 0, 1);
        const end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const localeSourceType = localStorage.getItem('sourceType');
    const sourceType = writable(localeSourceType || 'html');
    sourceType.subscribe((value) => {
        localStorage.setItem('sourceType', value);
    });

    /* docs_src/components/Accordion.svelte generated by Svelte v3.38.2 */
    const file$p = "docs_src/components/Accordion.svelte";

    // (16:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$a(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let a;
    	let t16;
    	let t17;
    	let tr2;
    	let td4;
    	let t19;
    	let td5;
    	let t21;
    	let td6;
    	let t22;
    	let td7;
    	let t23;
    	let badge;
    	let t24;
    	let t25;
    	let tr3;
    	let th4;
    	let t27;
    	let tr4;
    	let td8;
    	let t29;
    	let td9;
    	let t31;
    	let td10;
    	let t32;
    	let td11;
    	let t33;
    	let tr5;
    	let td12;
    	let t35;
    	let td13;
    	let t37;
    	let td14;
    	let t38;
    	let td15;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_4$h] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge = new Badge({
    			props: {
    				type: "secondary",
    				extension: "small",
    				$$slots: { default: [create_default_slot_3$i] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "dataTheme";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "'darkmode' | 'lightmode'";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = text("See ");
    			a = element("a");
    			a.textContent = "Data Theme";
    			t16 = text(" for doc");
    			t17 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "tabs";
    			t19 = space();
    			td5 = element("td");
    			td5.textContent = "ITabsConfig[]";
    			t21 = space();
    			td6 = element("td");
    			t22 = space();
    			td7 = element("td");
    			t23 = text("Array of tab data. See ");
    			create_component(badge.$$.fragment);
    			t24 = text(" props below for details");
    			t25 = space();
    			tr3 = element("tr");
    			th4 = element("th");
    			th4.textContent = "Tab";
    			t27 = space();
    			tr4 = element("tr");
    			td8 = element("td");
    			td8.textContent = "content";
    			t29 = space();
    			td9 = element("td");
    			td9.textContent = "string / html";
    			t31 = space();
    			td10 = element("td");
    			t32 = space();
    			td11 = element("td");
    			t33 = space();
    			tr5 = element("tr");
    			td12 = element("td");
    			td12.textContent = "title";
    			t35 = space();
    			td13 = element("td");
    			td13.textContent = "string";
    			t37 = space();
    			td14 = element("td");
    			t38 = space();
    			td15 = element("td");
    			add_location(th0, file$p, 23, 8, 577);
    			add_location(th1, file$p, 24, 8, 604);
    			add_location(th2, file$p, 25, 8, 626);
    			add_location(th3, file$p, 26, 8, 657);
    			add_location(tr0, file$p, 22, 6, 564);
    			add_location(thead, file$p, 21, 4, 550);
    			add_location(td0, file$p, 31, 8, 734);
    			add_location(td1, file$p, 32, 8, 761);
    			add_location(td2, file$p, 33, 8, 803);
    			attr_dev(a, "href", "/#/utilities/datatheme");
    			add_location(a, file$p, 34, 16, 826);
    			add_location(td3, file$p, 34, 8, 818);
    			add_location(tr1, file$p, 30, 6, 721);
    			add_location(td4, file$p, 37, 8, 918);
    			add_location(td5, file$p, 38, 8, 940);
    			add_location(td6, file$p, 39, 8, 971);
    			add_location(td7, file$p, 40, 8, 986);
    			add_location(tr2, file$p, 36, 6, 905);
    			attr_dev(th4, "colspan", "4");
    			add_location(th4, file$p, 43, 8, 1127);
    			add_location(tr3, file$p, 42, 6, 1114);
    			add_location(td8, file$p, 46, 8, 1183);
    			add_location(td9, file$p, 47, 8, 1208);
    			add_location(td10, file$p, 48, 8, 1239);
    			add_location(td11, file$p, 49, 8, 1254);
    			add_location(tr4, file$p, 45, 6, 1170);
    			add_location(td12, file$p, 52, 8, 1292);
    			add_location(td13, file$p, 53, 8, 1315);
    			add_location(td14, file$p, 54, 8, 1339);
    			add_location(td15, file$p, 55, 8, 1354);
    			add_location(tr5, file$p, 51, 6, 1279);
    			add_location(tbody, file$p, 29, 4, 707);
    			attr_dev(table, "class", "table");
    			add_location(table, file$p, 20, 2, 524);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(td3, t14);
    			append_dev(td3, a);
    			append_dev(td3, t16);
    			append_dev(tbody, t17);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t19);
    			append_dev(tr2, td5);
    			append_dev(tr2, t21);
    			append_dev(tr2, td6);
    			append_dev(tr2, t22);
    			append_dev(tr2, td7);
    			append_dev(td7, t23);
    			mount_component(badge, td7, null);
    			append_dev(td7, t24);
    			append_dev(tbody, t25);
    			append_dev(tbody, tr3);
    			append_dev(tr3, th4);
    			append_dev(tbody, t27);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td8);
    			append_dev(tr4, t29);
    			append_dev(tr4, td9);
    			append_dev(tr4, t31);
    			append_dev(tr4, td10);
    			append_dev(tr4, t32);
    			append_dev(tr4, td11);
    			append_dev(tbody, t33);
    			append_dev(tbody, tr5);
    			append_dev(tr5, td12);
    			append_dev(tr5, t35);
    			append_dev(tr5, td13);
    			append_dev(tr5, t37);
    			append_dev(tr5, td14);
    			append_dev(tr5, t38);
    			append_dev(tr5, td15);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			transition_in(badge.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			transition_out(badge.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    			destroy_component(badge);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$a.name,
    		type: "if",
    		source: "(16:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (17:2) <Prism language="js">
    function create_default_slot_4$h(ctx) {
    	let t_value = `import { Accordion } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$h.name,
    		type: "slot",
    		source: "(17:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (41:35) <Badge type="secondary" extension="small">
    function create_default_slot_3$i(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$i.name,
    		type: "slot",
    		source: "(41:35) <Badge type=\\\"secondary\\\" extension=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (68:0) {:else}
    function create_else_block$c(ctx) {
    	let prism0;
    	let t;
    	let prism1;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$m] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_1$n] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t = space();
    			create_component(prism1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(prism1, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(prism1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$c.name,
    		type: "else",
    		source: "(68:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (64:0) {#if $sourceType === 'svelte'}
    function create_if_block$c(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$n] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$c.name,
    		type: "if",
    		source: "(64:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (69:2) <Prism language="html">
    function create_default_slot_2$m(ctx) {
    	let t_value = `<div class="accordion card-mode padding-l ff-secondary width-1of1">
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 1</span>
      <i class="fas fa-chevron-down" />
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 1
    </div>
  </div>
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 2</span>
      <i class="fas fa-chevron-down" />
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 2
    </div>
  </div>
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 3</span>
      <i class="fas fa-chevron-down" />
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 3
    </div>
  </div>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$m.name,
    		type: "slot",
    		source: "(69:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (101:2) <Prism language="js">
    function create_default_slot_1$n(ctx) {
    	let t_value = `const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
  const tabs = accordion.querySelectorAll(".accordion-tab");
  for (const tab of tabs) {
    const head = tab.querySelector(".accordion-header");
    head.addEventListener('click', () => {
      for (const othertab of tabs) {
        if (othertab !== tab) {
          othertab.classList.remove('accordion-expanded');
        }
      }
      tab.classList.toggle('accordion-expanded');
    });
  }
}` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$n.name,
    		type: "slot",
    		source: "(101:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (65:2) <Prism language="html">
    function create_default_slot$n(ctx) {
    	let t_value = `<Accordion {tabs} />` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$n.name,
    		type: "slot",
    		source: "(65:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$p(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let accordion;
    	let t3;
    	let current_block_type_index;
    	let if_block1;
    	let if_block1_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_1$a(ctx);

    	accordion = new Accordion({
    			props: { tabs: /*tabs*/ ctx[1] },
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block$c, create_else_block$c];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Accordion";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			create_component(accordion.$$.fragment);
    			t3 = space();
    			if_block1.c();
    			if_block1_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$p, 13, 0, 352);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(accordion, target, anchor);
    			insert_dev(target, t3, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_1$a(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(accordion.$$.fragment, local);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(accordion.$$.fragment, local);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(accordion, detaching);
    			if (detaching) detach_dev(t3);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$p.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$p($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Accordion", slots, []);
    	const tabs = [];

    	for (let i = 0; i < 3; i++) {
    		tabs.push({
    			title: `Tab ${i + 1}`,
    			content: "<h2>Test af h2</h2>" + rdmParagraphs()
    		});
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Accordion> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		rdmParagraphs,
    		sourceType,
    		Accordion,
    		Badge,
    		tabs,
    		$sourceType
    	});

    	return [$sourceType, tabs];
    }

    class Accordion_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$p, create_fragment$p, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Accordion_1",
    			options,
    			id: create_fragment$p.name
    		});
    	}
    }

    /* docs_src/components/ArticleCard.svelte generated by Svelte v3.38.2 */
    const file$o = "docs_src/components/ArticleCard.svelte";

    // (159:0) {:else}
    function create_else_block$b(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "ArticleCard er en ren Svelte component.";
    			add_location(p, file$o, 159, 2, 3800);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$b.name,
    		type: "else",
    		source: "(159:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (9:0) {#if $sourceType === 'svelte'}
    function create_if_block$b(ctx) {
    	let prism0;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let tr2;
    	let td4;
    	let t16;
    	let td5;
    	let t18;
    	let td6;
    	let t19;
    	let td7;
    	let t20;
    	let em;
    	let t22;
    	let tr3;
    	let td8;
    	let t24;
    	let td9;
    	let t26;
    	let td10;
    	let t27;
    	let td11;
    	let t29;
    	let tr4;
    	let td12;
    	let t31;
    	let td13;
    	let t33;
    	let td14;
    	let t35;
    	let td15;
    	let t36;
    	let tr5;
    	let td16;
    	let t38;
    	let td17;
    	let t40;
    	let td18;
    	let t42;
    	let td19;
    	let t43;
    	let tr6;
    	let td20;
    	let t45;
    	let td21;
    	let t47;
    	let td22;
    	let t49;
    	let td23;
    	let t51;
    	let tr7;
    	let td24;
    	let t53;
    	let td25;
    	let t55;
    	let td26;
    	let t57;
    	let td27;
    	let t58;
    	let code;
    	let t60;
    	let t61;
    	let tr8;
    	let td28;
    	let t63;
    	let td29;
    	let t65;
    	let td30;
    	let t66;
    	let td31;
    	let t67;
    	let badge0;
    	let t68;
    	let t69;
    	let tr9;
    	let td32;
    	let t71;
    	let td33;
    	let t73;
    	let td34;
    	let t74;
    	let td35;
    	let t76;
    	let tr10;
    	let td36;
    	let t78;
    	let td37;
    	let t80;
    	let td38;
    	let t81;
    	let td39;
    	let t82;
    	let tr11;
    	let td40;
    	let t84;
    	let td41;
    	let t86;
    	let td42;
    	let t87;
    	let td43;
    	let t89;
    	let tr12;
    	let td44;
    	let t91;
    	let td45;
    	let t93;
    	let td46;
    	let t95;
    	let td47;
    	let t96;
    	let tr13;
    	let td48;
    	let t98;
    	let td49;
    	let t100;
    	let td50;
    	let t101;
    	let td51;
    	let t103;
    	let tr14;
    	let th4;
    	let t105;
    	let tr15;
    	let td52;
    	let t107;
    	let td53;
    	let t109;
    	let td54;
    	let t110;
    	let td55;
    	let t111;
    	let tr16;
    	let td56;
    	let t113;
    	let td57;
    	let t115;
    	let td58;
    	let t116;
    	let td59;
    	let t117;
    	let tr17;
    	let td60;
    	let t118;
    	let badge1;
    	let t119;
    	let td61;
    	let t121;
    	let td62;
    	let t122;
    	let td63;
    	let t123;
    	let tr18;
    	let td64;
    	let t125;
    	let td65;
    	let t127;
    	let td66;
    	let t128;
    	let td67;
    	let t129;
    	let articlecard0;
    	let t130;
    	let prism1;
    	let t131;
    	let h30;
    	let t133;
    	let articlecard1;
    	let t134;
    	let articlecard2;
    	let t135;
    	let prism2;
    	let t136;
    	let h31;
    	let t138;
    	let articlecard3;
    	let t139;
    	let articlecard4;
    	let t140;
    	let articlecard5;
    	let t141;
    	let prism3;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_5$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge0 = new Badge({
    			props: {
    				type: "secondary",
    				extension: "small",
    				$$slots: { default: [create_default_slot_4$g] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge1 = new Badge({
    			props: {
    				type: "primary",
    				extension: "small",
    				$$slots: { default: [create_default_slot_3$h] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const articlecard0_spread_levels = [rdmArticleData()];
    	let articlecard0_props = {};

    	for (let i = 0; i < articlecard0_spread_levels.length; i += 1) {
    		articlecard0_props = assign(articlecard0_props, articlecard0_spread_levels[i]);
    	}

    	articlecard0 = new ArticleCard({
    			props: articlecard0_props,
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$l] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const articlecard1_spread_levels = [
    		{ className: "margin-m--b" },
    		{ type: "small-media" },
    		rdmArticleData(250, 120)
    	];

    	let articlecard1_props = {};

    	for (let i = 0; i < articlecard1_spread_levels.length; i += 1) {
    		articlecard1_props = assign(articlecard1_props, articlecard1_spread_levels[i]);
    	}

    	articlecard1 = new ArticleCard({
    			props: articlecard1_props,
    			$$inline: true
    		});

    	const articlecard2_spread_levels = [{ type: "small-media--reverse" }, rdmArticleData(250, 120)];
    	let articlecard2_props = {};

    	for (let i = 0; i < articlecard2_spread_levels.length; i += 1) {
    		articlecard2_props = assign(articlecard2_props, articlecard2_spread_levels[i]);
    	}

    	articlecard2 = new ArticleCard({
    			props: articlecard2_props,
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$m] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	articlecard3 = new ArticleCard({ props: { loading: true }, $$inline: true });

    	articlecard4 = new ArticleCard({
    			props: { loading: true, type: "small-media" },
    			$$inline: true
    		});

    	articlecard5 = new ArticleCard({
    			props: {
    				loading: true,
    				type: "small-media--reverse"
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$m] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "colorClass";
    			t16 = space();
    			td5 = element("td");
    			td5.textContent = "string";
    			t18 = space();
    			td6 = element("td");
    			t19 = space();
    			td7 = element("td");
    			t20 = text("EB color ");
    			em = element("em");
    			em.textContent = "(e.g. sport)";
    			t22 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "src";
    			t24 = space();
    			td9 = element("td");
    			td9.textContent = "string";
    			t26 = space();
    			td10 = element("td");
    			t27 = space();
    			td11 = element("td");
    			td11.textContent = "Converts the ArticleCard into a clickable link";
    			t29 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "breaking";
    			t31 = space();
    			td13 = element("td");
    			td13.textContent = "boolean";
    			t33 = space();
    			td14 = element("td");
    			td14.textContent = "false";
    			t35 = space();
    			td15 = element("td");
    			t36 = space();
    			tr5 = element("tr");
    			td16 = element("td");
    			td16.textContent = "premium";
    			t38 = space();
    			td17 = element("td");
    			td17.textContent = "boolean";
    			t40 = space();
    			td18 = element("td");
    			td18.textContent = "false";
    			t42 = space();
    			td19 = element("td");
    			t43 = space();
    			tr6 = element("tr");
    			td20 = element("td");
    			td20.textContent = "loading";
    			t45 = space();
    			td21 = element("td");
    			td21.textContent = "boolean";
    			t47 = space();
    			td22 = element("td");
    			td22.textContent = "false";
    			t49 = space();
    			td23 = element("td");
    			td23.textContent = "Converts the ArticleCard into a loading placeholder";
    			t51 = space();
    			tr7 = element("tr");
    			td24 = element("td");
    			td24.textContent = "maxLines";
    			t53 = space();
    			td25 = element("td");
    			td25.textContent = "number";
    			t55 = space();
    			td26 = element("td");
    			td26.textContent = "4";
    			t57 = space();
    			td27 = element("td");
    			t58 = text("Sets the value of ");
    			code = element("code");
    			code.textContent = "--max-lines";
    			t60 = text(" if truncate is enabled");
    			t61 = space();
    			tr8 = element("tr");
    			td28 = element("td");
    			td28.textContent = "media";
    			t63 = space();
    			td29 = element("td");
    			td29.textContent = "IMediaOptions";
    			t65 = space();
    			td30 = element("td");
    			t66 = space();
    			td31 = element("td");
    			t67 = text("Adds a image, see ");
    			create_component(badge0.$$.fragment);
    			t68 = text(" props below for details");
    			t69 = space();
    			tr9 = element("tr");
    			td32 = element("td");
    			td32.textContent = "section";
    			t71 = space();
    			td33 = element("td");
    			td33.textContent = "string";
    			t73 = space();
    			td34 = element("td");
    			t74 = space();
    			td35 = element("td");
    			td35.textContent = "Displays the section meta with a tag icon";
    			t76 = space();
    			tr10 = element("tr");
    			td36 = element("td");
    			td36.textContent = "style";
    			t78 = space();
    			td37 = element("td");
    			td37.textContent = "string";
    			t80 = space();
    			td38 = element("td");
    			t81 = space();
    			td39 = element("td");
    			t82 = space();
    			tr11 = element("tr");
    			td40 = element("td");
    			td40.textContent = "published";
    			t84 = space();
    			td41 = element("td");
    			td41.textContent = "date string";
    			t86 = space();
    			td42 = element("td");
    			t87 = space();
    			td43 = element("td");
    			td43.textContent = "Displays relative time meta with a icon";
    			t89 = space();
    			tr12 = element("tr");
    			td44 = element("td");
    			td44.textContent = "truncateTitle";
    			t91 = space();
    			td45 = element("td");
    			td45.textContent = "boolean";
    			t93 = space();
    			td46 = element("td");
    			td46.textContent = "false";
    			t95 = space();
    			td47 = element("td");
    			t96 = space();
    			tr13 = element("tr");
    			td48 = element("td");
    			td48.textContent = "cardType";
    			t98 = space();
    			td49 = element("td");
    			td49.textContent = "'mode' | 'small-media' | 'small-media--reverse'";
    			t100 = space();
    			td50 = element("td");
    			t101 = space();
    			td51 = element("td");
    			td51.textContent = "Display types. See examples below";
    			t103 = space();
    			tr14 = element("tr");
    			th4 = element("th");
    			th4.textContent = "Media";
    			t105 = space();
    			tr15 = element("tr");
    			td52 = element("td");
    			td52.textContent = "className";
    			t107 = space();
    			td53 = element("td");
    			td53.textContent = "string";
    			t109 = space();
    			td54 = element("td");
    			t110 = space();
    			td55 = element("td");
    			t111 = space();
    			tr16 = element("tr");
    			td56 = element("td");
    			td56.textContent = "height";
    			t113 = space();
    			td57 = element("td");
    			td57.textContent = "string";
    			t115 = space();
    			td58 = element("td");
    			t116 = space();
    			td59 = element("td");
    			t117 = space();
    			tr17 = element("tr");
    			td60 = element("td");
    			t118 = text("src ");
    			create_component(badge1.$$.fragment);
    			t119 = space();
    			td61 = element("td");
    			td61.textContent = "string";
    			t121 = space();
    			td62 = element("td");
    			t122 = space();
    			td63 = element("td");
    			t123 = space();
    			tr18 = element("tr");
    			td64 = element("td");
    			td64.textContent = "width";
    			t125 = space();
    			td65 = element("td");
    			td65.textContent = "string";
    			t127 = space();
    			td66 = element("td");
    			t128 = space();
    			td67 = element("td");
    			t129 = space();
    			create_component(articlecard0.$$.fragment);
    			t130 = space();
    			create_component(prism1.$$.fragment);
    			t131 = space();
    			h30 = element("h3");
    			h30.textContent = "Small-media";
    			t133 = space();
    			create_component(articlecard1.$$.fragment);
    			t134 = space();
    			create_component(articlecard2.$$.fragment);
    			t135 = space();
    			create_component(prism2.$$.fragment);
    			t136 = space();
    			h31 = element("h3");
    			h31.textContent = "Loading placeholder";
    			t138 = space();
    			create_component(articlecard3.$$.fragment);
    			t139 = space();
    			create_component(articlecard4.$$.fragment);
    			t140 = space();
    			create_component(articlecard5.$$.fragment);
    			t141 = space();
    			create_component(prism3.$$.fragment);
    			add_location(th0, file$o, 16, 8, 423);
    			add_location(th1, file$o, 17, 8, 450);
    			add_location(th2, file$o, 18, 8, 472);
    			add_location(th3, file$o, 19, 8, 503);
    			add_location(tr0, file$o, 15, 6, 410);
    			add_location(thead, file$o, 14, 4, 396);
    			add_location(td0, file$o, 24, 8, 580);
    			add_location(td1, file$o, 25, 8, 607);
    			add_location(td2, file$o, 26, 8, 631);
    			add_location(td3, file$o, 27, 8, 646);
    			add_location(tr1, file$o, 23, 6, 567);
    			add_location(td4, file$o, 30, 8, 684);
    			add_location(td5, file$o, 31, 8, 712);
    			add_location(td6, file$o, 32, 8, 736);
    			add_location(em, file$o, 33, 21, 764);
    			add_location(td7, file$o, 33, 8, 751);
    			add_location(tr2, file$o, 29, 6, 671);
    			add_location(td8, file$o, 36, 8, 822);
    			add_location(td9, file$o, 37, 8, 843);
    			add_location(td10, file$o, 38, 8, 867);
    			add_location(td11, file$o, 39, 8, 882);
    			add_location(tr3, file$o, 35, 6, 809);
    			add_location(td12, file$o, 42, 8, 969);
    			add_location(td13, file$o, 43, 8, 995);
    			add_location(td14, file$o, 44, 8, 1020);
    			add_location(td15, file$o, 45, 8, 1043);
    			add_location(tr4, file$o, 41, 6, 956);
    			add_location(td16, file$o, 48, 8, 1081);
    			add_location(td17, file$o, 49, 8, 1106);
    			add_location(td18, file$o, 50, 8, 1131);
    			add_location(td19, file$o, 51, 8, 1154);
    			add_location(tr5, file$o, 47, 6, 1068);
    			add_location(td20, file$o, 54, 8, 1192);
    			add_location(td21, file$o, 55, 8, 1217);
    			add_location(td22, file$o, 56, 8, 1242);
    			add_location(td23, file$o, 57, 8, 1265);
    			add_location(tr6, file$o, 53, 6, 1179);
    			add_location(td24, file$o, 60, 8, 1357);
    			add_location(td25, file$o, 61, 8, 1383);
    			add_location(td26, file$o, 62, 8, 1407);
    			add_location(code, file$o, 63, 30, 1448);
    			add_location(td27, file$o, 63, 8, 1426);
    			add_location(tr7, file$o, 59, 6, 1344);
    			add_location(td28, file$o, 66, 8, 1532);
    			add_location(td29, file$o, 67, 8, 1555);
    			add_location(td30, file$o, 68, 8, 1586);
    			add_location(td31, file$o, 69, 8, 1601);
    			add_location(tr8, file$o, 65, 6, 1519);
    			add_location(td32, file$o, 72, 8, 1739);
    			add_location(td33, file$o, 73, 8, 1764);
    			add_location(td34, file$o, 74, 8, 1788);
    			add_location(td35, file$o, 75, 8, 1803);
    			add_location(tr9, file$o, 71, 6, 1726);
    			add_location(td36, file$o, 78, 8, 1885);
    			add_location(td37, file$o, 79, 8, 1908);
    			add_location(td38, file$o, 80, 8, 1932);
    			add_location(td39, file$o, 81, 8, 1947);
    			add_location(tr10, file$o, 77, 6, 1872);
    			add_location(td40, file$o, 84, 8, 1985);
    			add_location(td41, file$o, 85, 8, 2012);
    			add_location(td42, file$o, 86, 8, 2041);
    			add_location(td43, file$o, 87, 8, 2056);
    			add_location(tr11, file$o, 83, 6, 1972);
    			add_location(td44, file$o, 90, 8, 2136);
    			add_location(td45, file$o, 91, 8, 2167);
    			add_location(td46, file$o, 92, 8, 2192);
    			add_location(td47, file$o, 93, 8, 2215);
    			add_location(tr12, file$o, 89, 6, 2123);
    			add_location(td48, file$o, 96, 8, 2253);
    			add_location(td49, file$o, 97, 8, 2279);
    			add_location(td50, file$o, 98, 8, 2344);
    			add_location(td51, file$o, 99, 8, 2359);
    			add_location(tr13, file$o, 95, 6, 2240);
    			attr_dev(th4, "colspan", "4");
    			add_location(th4, file$o, 102, 8, 2433);
    			add_location(tr14, file$o, 101, 6, 2420);
    			add_location(td52, file$o, 105, 8, 2491);
    			add_location(td53, file$o, 106, 8, 2518);
    			add_location(td54, file$o, 107, 8, 2542);
    			add_location(td55, file$o, 108, 8, 2557);
    			add_location(tr15, file$o, 104, 6, 2478);
    			add_location(td56, file$o, 111, 8, 2595);
    			add_location(td57, file$o, 112, 8, 2619);
    			add_location(td58, file$o, 113, 8, 2643);
    			add_location(td59, file$o, 114, 8, 2658);
    			add_location(tr16, file$o, 110, 6, 2582);
    			add_location(td60, file$o, 117, 8, 2696);
    			add_location(td61, file$o, 118, 8, 2774);
    			add_location(td62, file$o, 119, 8, 2798);
    			add_location(td63, file$o, 120, 8, 2813);
    			add_location(tr17, file$o, 116, 6, 2683);
    			add_location(td64, file$o, 123, 8, 2851);
    			add_location(td65, file$o, 124, 8, 2874);
    			add_location(td66, file$o, 125, 8, 2898);
    			add_location(td67, file$o, 126, 8, 2913);
    			add_location(tr18, file$o, 122, 6, 2838);
    			add_location(tbody, file$o, 22, 4, 553);
    			attr_dev(table, "class", "table");
    			add_location(table, file$o, 13, 2, 370);
    			add_location(h30, file$o, 137, 2, 3075);
    			add_location(h31, file$o, 147, 2, 3428);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t14);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t16);
    			append_dev(tr2, td5);
    			append_dev(tr2, t18);
    			append_dev(tr2, td6);
    			append_dev(tr2, t19);
    			append_dev(tr2, td7);
    			append_dev(td7, t20);
    			append_dev(td7, em);
    			append_dev(tbody, t22);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t24);
    			append_dev(tr3, td9);
    			append_dev(tr3, t26);
    			append_dev(tr3, td10);
    			append_dev(tr3, t27);
    			append_dev(tr3, td11);
    			append_dev(tbody, t29);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t31);
    			append_dev(tr4, td13);
    			append_dev(tr4, t33);
    			append_dev(tr4, td14);
    			append_dev(tr4, t35);
    			append_dev(tr4, td15);
    			append_dev(tbody, t36);
    			append_dev(tbody, tr5);
    			append_dev(tr5, td16);
    			append_dev(tr5, t38);
    			append_dev(tr5, td17);
    			append_dev(tr5, t40);
    			append_dev(tr5, td18);
    			append_dev(tr5, t42);
    			append_dev(tr5, td19);
    			append_dev(tbody, t43);
    			append_dev(tbody, tr6);
    			append_dev(tr6, td20);
    			append_dev(tr6, t45);
    			append_dev(tr6, td21);
    			append_dev(tr6, t47);
    			append_dev(tr6, td22);
    			append_dev(tr6, t49);
    			append_dev(tr6, td23);
    			append_dev(tbody, t51);
    			append_dev(tbody, tr7);
    			append_dev(tr7, td24);
    			append_dev(tr7, t53);
    			append_dev(tr7, td25);
    			append_dev(tr7, t55);
    			append_dev(tr7, td26);
    			append_dev(tr7, t57);
    			append_dev(tr7, td27);
    			append_dev(td27, t58);
    			append_dev(td27, code);
    			append_dev(td27, t60);
    			append_dev(tbody, t61);
    			append_dev(tbody, tr8);
    			append_dev(tr8, td28);
    			append_dev(tr8, t63);
    			append_dev(tr8, td29);
    			append_dev(tr8, t65);
    			append_dev(tr8, td30);
    			append_dev(tr8, t66);
    			append_dev(tr8, td31);
    			append_dev(td31, t67);
    			mount_component(badge0, td31, null);
    			append_dev(td31, t68);
    			append_dev(tbody, t69);
    			append_dev(tbody, tr9);
    			append_dev(tr9, td32);
    			append_dev(tr9, t71);
    			append_dev(tr9, td33);
    			append_dev(tr9, t73);
    			append_dev(tr9, td34);
    			append_dev(tr9, t74);
    			append_dev(tr9, td35);
    			append_dev(tbody, t76);
    			append_dev(tbody, tr10);
    			append_dev(tr10, td36);
    			append_dev(tr10, t78);
    			append_dev(tr10, td37);
    			append_dev(tr10, t80);
    			append_dev(tr10, td38);
    			append_dev(tr10, t81);
    			append_dev(tr10, td39);
    			append_dev(tbody, t82);
    			append_dev(tbody, tr11);
    			append_dev(tr11, td40);
    			append_dev(tr11, t84);
    			append_dev(tr11, td41);
    			append_dev(tr11, t86);
    			append_dev(tr11, td42);
    			append_dev(tr11, t87);
    			append_dev(tr11, td43);
    			append_dev(tbody, t89);
    			append_dev(tbody, tr12);
    			append_dev(tr12, td44);
    			append_dev(tr12, t91);
    			append_dev(tr12, td45);
    			append_dev(tr12, t93);
    			append_dev(tr12, td46);
    			append_dev(tr12, t95);
    			append_dev(tr12, td47);
    			append_dev(tbody, t96);
    			append_dev(tbody, tr13);
    			append_dev(tr13, td48);
    			append_dev(tr13, t98);
    			append_dev(tr13, td49);
    			append_dev(tr13, t100);
    			append_dev(tr13, td50);
    			append_dev(tr13, t101);
    			append_dev(tr13, td51);
    			append_dev(tbody, t103);
    			append_dev(tbody, tr14);
    			append_dev(tr14, th4);
    			append_dev(tbody, t105);
    			append_dev(tbody, tr15);
    			append_dev(tr15, td52);
    			append_dev(tr15, t107);
    			append_dev(tr15, td53);
    			append_dev(tr15, t109);
    			append_dev(tr15, td54);
    			append_dev(tr15, t110);
    			append_dev(tr15, td55);
    			append_dev(tbody, t111);
    			append_dev(tbody, tr16);
    			append_dev(tr16, td56);
    			append_dev(tr16, t113);
    			append_dev(tr16, td57);
    			append_dev(tr16, t115);
    			append_dev(tr16, td58);
    			append_dev(tr16, t116);
    			append_dev(tr16, td59);
    			append_dev(tbody, t117);
    			append_dev(tbody, tr17);
    			append_dev(tr17, td60);
    			append_dev(td60, t118);
    			mount_component(badge1, td60, null);
    			append_dev(tr17, t119);
    			append_dev(tr17, td61);
    			append_dev(tr17, t121);
    			append_dev(tr17, td62);
    			append_dev(tr17, t122);
    			append_dev(tr17, td63);
    			append_dev(tbody, t123);
    			append_dev(tbody, tr18);
    			append_dev(tr18, td64);
    			append_dev(tr18, t125);
    			append_dev(tr18, td65);
    			append_dev(tr18, t127);
    			append_dev(tr18, td66);
    			append_dev(tr18, t128);
    			append_dev(tr18, td67);
    			insert_dev(target, t129, anchor);
    			mount_component(articlecard0, target, anchor);
    			insert_dev(target, t130, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t131, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t133, anchor);
    			mount_component(articlecard1, target, anchor);
    			insert_dev(target, t134, anchor);
    			mount_component(articlecard2, target, anchor);
    			insert_dev(target, t135, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t136, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t138, anchor);
    			mount_component(articlecard3, target, anchor);
    			insert_dev(target, t139, anchor);
    			mount_component(articlecard4, target, anchor);
    			insert_dev(target, t140, anchor);
    			mount_component(articlecard5, target, anchor);
    			insert_dev(target, t141, anchor);
    			mount_component(prism3, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const badge0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge0_changes.$$scope = { dirty, ctx };
    			}

    			badge0.$set(badge0_changes);
    			const badge1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge1_changes.$$scope = { dirty, ctx };
    			}

    			badge1.$set(badge1_changes);

    			const articlecard0_changes = (dirty & /*rdmArticleData*/ 0)
    			? get_spread_update(articlecard0_spread_levels, [get_spread_object(rdmArticleData())])
    			: {};

    			articlecard0.$set(articlecard0_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);

    			const articlecard1_changes = (dirty & /*rdmArticleData*/ 0)
    			? get_spread_update(articlecard1_spread_levels, [
    					articlecard1_spread_levels[0],
    					articlecard1_spread_levels[1],
    					get_spread_object(rdmArticleData(250, 120))
    				])
    			: {};

    			articlecard1.$set(articlecard1_changes);

    			const articlecard2_changes = (dirty & /*rdmArticleData*/ 0)
    			? get_spread_update(articlecard2_spread_levels, [
    					articlecard2_spread_levels[0],
    					get_spread_object(rdmArticleData(250, 120))
    				])
    			: {};

    			articlecard2.$set(articlecard2_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    			const prism3_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				prism3_changes.$$scope = { dirty, ctx };
    			}

    			prism3.$set(prism3_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(badge0.$$.fragment, local);
    			transition_in(badge1.$$.fragment, local);
    			transition_in(articlecard0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(articlecard1.$$.fragment, local);
    			transition_in(articlecard2.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(articlecard3.$$.fragment, local);
    			transition_in(articlecard4.$$.fragment, local);
    			transition_in(articlecard5.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(badge0.$$.fragment, local);
    			transition_out(badge1.$$.fragment, local);
    			transition_out(articlecard0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(articlecard1.$$.fragment, local);
    			transition_out(articlecard2.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(articlecard3.$$.fragment, local);
    			transition_out(articlecard4.$$.fragment, local);
    			transition_out(articlecard5.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    			destroy_component(badge0);
    			destroy_component(badge1);
    			if (detaching) detach_dev(t129);
    			destroy_component(articlecard0, detaching);
    			if (detaching) detach_dev(t130);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t131);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t133);
    			destroy_component(articlecard1, detaching);
    			if (detaching) detach_dev(t134);
    			destroy_component(articlecard2, detaching);
    			if (detaching) detach_dev(t135);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t136);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t138);
    			destroy_component(articlecard3, detaching);
    			if (detaching) detach_dev(t139);
    			destroy_component(articlecard4, detaching);
    			if (detaching) detach_dev(t140);
    			destroy_component(articlecard5, detaching);
    			if (detaching) detach_dev(t141);
    			destroy_component(prism3, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$b.name,
    		type: "if",
    		source: "(9:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (10:2) <Prism language="js">
    function create_default_slot_5$d(ctx) {
    	let t_value = `import { ArticleCard } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$d.name,
    		type: "slot",
    		source: "(10:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (70:30) <Badge type="secondary" extension="small">
    function create_default_slot_4$g(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Media");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$g.name,
    		type: "slot",
    		source: "(70:30) <Badge type=\\\"secondary\\\" extension=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (118:16) <Badge type="primary" extension="small">
    function create_default_slot_3$h(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("required");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$h.name,
    		type: "slot",
    		source: "(118:16) <Badge type=\\\"primary\\\" extension=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (134:2) <Prism language="html">
    function create_default_slot_2$l(ctx) {
    	let t_value = `<ArticleCard {...article} />` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$l.name,
    		type: "slot",
    		source: "(134:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (143:2) <Prism language="html">
    function create_default_slot_1$m(ctx) {
    	let t_value = `<ArticleCard className="small-media" {...article} />
<ArticleCard className="small-media--reverse" {...article} />` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$m.name,
    		type: "slot",
    		source: "(143:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (154:2) <Prism language="html">
    function create_default_slot$m(ctx) {
    	let t_value = `<ArticleCard loading={true} />
<ArticleCard loading={true} type="small-media" />
<ArticleCard loading={true} type="small-media--reverse" />` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$m.name,
    		type: "slot",
    		source: "(154:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$o(ctx) {
    	let h1;
    	let t1;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$b, create_else_block$b];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Article Card";
    			t1 = space();
    			if_block.c();
    			if_block_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$o, 6, 0, 193);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$o($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ArticleCard", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArticleCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		rdmArticleData,
    		sourceType,
    		ArticleCard,
    		Badge,
    		$sourceType
    	});

    	return [$sourceType];
    }

    class ArticleCard_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$o, create_fragment$o, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ArticleCard_1",
    			options,
    			id: create_fragment$o.name
    		});
    	}
    }

    /* docs_src/components/Badge.svelte generated by Svelte v3.38.2 */
    const file$n = "docs_src/components/Badge.svelte";

    // (11:0) {#if $sourceType === 'svelte'}
    function create_if_block_3$4(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let tr2;
    	let td4;
    	let t16;
    	let td5;
    	let t18;
    	let td6;
    	let t19;
    	let td7;
    	let t21;
    	let tr3;
    	let td8;
    	let t23;
    	let td9;
    	let t25;
    	let td10;
    	let t26;
    	let td11;
    	let t28;
    	let tr4;
    	let td12;
    	let t30;
    	let td13;
    	let t32;
    	let td14;
    	let t33;
    	let td15;
    	let t34;
    	let tr5;
    	let td16;
    	let t36;
    	let td17;
    	let t38;
    	let td18;
    	let t39;
    	let td19;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_14$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "extension";
    			t16 = space();
    			td5 = element("td");
    			td5.textContent = "'small'";
    			t18 = space();
    			td6 = element("td");
    			t19 = space();
    			td7 = element("td");
    			td7.textContent = "Make a smaller version of the badge";
    			t21 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "href";
    			t23 = space();
    			td9 = element("td");
    			td9.textContent = "string";
    			t25 = space();
    			td10 = element("td");
    			t26 = space();
    			td11 = element("td");
    			td11.textContent = "Coverts the Badge into a clickable link";
    			t28 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "style";
    			t30 = space();
    			td13 = element("td");
    			td13.textContent = "string";
    			t32 = space();
    			td14 = element("td");
    			t33 = space();
    			td15 = element("td");
    			t34 = space();
    			tr5 = element("tr");
    			td16 = element("td");
    			td16.textContent = "type";
    			t36 = space();
    			td17 = element("td");
    			td17.textContent = "'danger' | 'primary' | 'secondary' | 'success'";
    			t38 = space();
    			td18 = element("td");
    			t39 = space();
    			td19 = element("td");
    			add_location(th0, file$n, 18, 8, 572);
    			add_location(th1, file$n, 19, 8, 599);
    			add_location(th2, file$n, 20, 8, 621);
    			add_location(th3, file$n, 21, 8, 652);
    			add_location(tr0, file$n, 17, 6, 559);
    			add_location(thead, file$n, 16, 4, 545);
    			add_location(td0, file$n, 26, 8, 729);
    			add_location(td1, file$n, 27, 8, 756);
    			add_location(td2, file$n, 28, 8, 780);
    			add_location(td3, file$n, 29, 8, 795);
    			add_location(tr1, file$n, 25, 6, 716);
    			add_location(td4, file$n, 32, 8, 833);
    			add_location(td5, file$n, 33, 8, 860);
    			add_location(td6, file$n, 34, 8, 885);
    			add_location(td7, file$n, 35, 8, 900);
    			add_location(tr2, file$n, 31, 6, 820);
    			add_location(td8, file$n, 38, 8, 976);
    			add_location(td9, file$n, 39, 8, 998);
    			add_location(td10, file$n, 40, 8, 1022);
    			add_location(td11, file$n, 41, 8, 1037);
    			add_location(tr3, file$n, 37, 6, 963);
    			add_location(td12, file$n, 44, 8, 1117);
    			add_location(td13, file$n, 45, 8, 1140);
    			add_location(td14, file$n, 46, 8, 1164);
    			add_location(td15, file$n, 47, 8, 1179);
    			add_location(tr4, file$n, 43, 6, 1104);
    			add_location(td16, file$n, 50, 8, 1217);
    			add_location(td17, file$n, 51, 8, 1239);
    			add_location(td18, file$n, 52, 8, 1303);
    			add_location(td19, file$n, 53, 8, 1318);
    			add_location(tr5, file$n, 49, 6, 1204);
    			add_location(tbody, file$n, 24, 4, 702);
    			attr_dev(table, "class", "table");
    			add_location(table, file$n, 15, 2, 519);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t14);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t16);
    			append_dev(tr2, td5);
    			append_dev(tr2, t18);
    			append_dev(tr2, td6);
    			append_dev(tr2, t19);
    			append_dev(tr2, td7);
    			append_dev(tbody, t21);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t23);
    			append_dev(tr3, td9);
    			append_dev(tr3, t25);
    			append_dev(tr3, td10);
    			append_dev(tr3, t26);
    			append_dev(tr3, td11);
    			append_dev(tbody, t28);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t30);
    			append_dev(tr4, td13);
    			append_dev(tr4, t32);
    			append_dev(tr4, td14);
    			append_dev(tr4, t33);
    			append_dev(tr4, td15);
    			append_dev(tbody, t34);
    			append_dev(tbody, tr5);
    			append_dev(tr5, td16);
    			append_dev(tr5, t36);
    			append_dev(tr5, td17);
    			append_dev(tr5, t38);
    			append_dev(tr5, td18);
    			append_dev(tr5, t39);
    			append_dev(tr5, td19);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$4.name,
    		type: "if",
    		source: "(11:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (12:2) <Prism language="js">
    function create_default_slot_14$4(ctx) {
    	let t_value = `import { Badge } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14$4.name,
    		type: "slot",
    		source: "(12:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (63:2) <Badge>
    function create_default_slot_13$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Badge");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13$4.name,
    		type: "slot",
    		source: "(63:2) <Badge>",
    		ctx
    	});

    	return block;
    }

    // (70:0) {:else}
    function create_else_block_2$4(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_12$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2$4.name,
    		type: "else",
    		source: "(70:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (66:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$7(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_11$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$7.name,
    		type: "if",
    		source: "(66:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (71:2) <Prism language="html">
    function create_default_slot_12$4(ctx) {
    	let t_value = `<span class="badge"></span>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$4.name,
    		type: "slot",
    		source: "(71:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (67:2) <Prism language="html">
    function create_default_slot_11$5(ctx) {
    	let t_value = `<Badge></Badge>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$5.name,
    		type: "slot",
    		source: "(67:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (79:2) <Badge className="margin-s" type="primary">
    function create_default_slot_10$6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Primary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$6.name,
    		type: "slot",
    		source: "(79:2) <Badge className=\\\"margin-s\\\" type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (80:2) <Badge className="margin-s" type="secondary">
    function create_default_slot_9$6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Secondary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$6.name,
    		type: "slot",
    		source: "(80:2) <Badge className=\\\"margin-s\\\" type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (81:2) <Badge className="margin-s" type="success">
    function create_default_slot_8$8(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Success");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$8.name,
    		type: "slot",
    		source: "(81:2) <Badge className=\\\"margin-s\\\" type=\\\"success\\\">",
    		ctx
    	});

    	return block;
    }

    // (82:2) <Badge className="margin-s" type="danger">
    function create_default_slot_7$8(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Danger");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$8.name,
    		type: "slot",
    		source: "(82:2) <Badge className=\\\"margin-s\\\" type=\\\"danger\\\">",
    		ctx
    	});

    	return block;
    }

    // (92:0) {:else}
    function create_else_block_1$8(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_6$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$8.name,
    		type: "else",
    		source: "(92:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (85:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$9(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_5$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$9.name,
    		type: "if",
    		source: "(85:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (93:2) <Prism language="html">
    function create_default_slot_6$b(ctx) {
    	let t_value = `<span class="badge" data-type="primary"></span>
<span class="badge" data-type="secondary"></span>
<span class="badge" data-type="success"></span>
<span class="badge" data-type="danger"></span>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$b.name,
    		type: "slot",
    		source: "(93:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (86:2) <Prism language="html">
    function create_default_slot_5$c(ctx) {
    	let t_value = `<Badge type="primary"></Badge>
<Badge type="secondary"></Badge>
<Badge type="success"></Badge>
<Badge type="danger"></Badge>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$c.name,
    		type: "slot",
    		source: "(86:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (104:2) <Badge className="margin-s {BluedarkCSSClass}">
    function create_default_slot_4$f(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("BluedarkCSSClass");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$f.name,
    		type: "slot",
    		source: "(104:2) <Badge className=\\\"margin-s {BluedarkCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (105:2) <Badge className="margin-s {GreenCSSClass}">
    function create_default_slot_3$g(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("GreenCSSClass");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$g.name,
    		type: "slot",
    		source: "(105:2) <Badge className=\\\"margin-s {GreenCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (106:2) <Badge className="margin-s {GreendarkCSSClass}">
    function create_default_slot_2$k(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("GreendarkCSSClass");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$k.name,
    		type: "slot",
    		source: "(106:2) <Badge className=\\\"margin-s {GreendarkCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (117:0) {:else}
    function create_else_block$a(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$l] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$a.name,
    		type: "else",
    		source: "(117:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (109:0) {#if $sourceType === 'svelte'}
    function create_if_block$a(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$l] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$a.name,
    		type: "if",
    		source: "(109:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (118:2) <Prism language="html">
    function create_default_slot_1$l(ctx) {
    	let t_value = `<span class="badge bg--bluedark"></span>
<span class="badge bg--green"></span>
<span class="badge bg--greendark"></span>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$l.name,
    		type: "slot",
    		source: "(118:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (110:2) <Prism language="html">
    function create_default_slot$l(ctx) {
    	let t_value = `import { BluedarkCSSClass, GreenCSSClass, GreendarkCSSClass } from '@ekstra-bladet/eb-colors';

<Badge {BluedarkCSSClass}"></Badge>
<Badge {GreenCSSClass}"></Badge>
<Badge {GreendarkCSSClass}"></Badge>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$l.name,
    		type: "slot",
    		source: "(110:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$n(ctx) {
    	let h1;
    	let t1;
    	let p;
    	let t3;
    	let t4;
    	let h30;
    	let t6;
    	let div0;
    	let badge0;
    	let t7;
    	let current_block_type_index;
    	let if_block1;
    	let t8;
    	let h31;
    	let t10;
    	let div1;
    	let badge1;
    	let t11;
    	let badge2;
    	let t12;
    	let badge3;
    	let t13;
    	let badge4;
    	let t14;
    	let current_block_type_index_1;
    	let if_block2;
    	let t15;
    	let h32;
    	let t17;
    	let div2;
    	let badge5;
    	let t18;
    	let badge6;
    	let t19;
    	let badge7;
    	let t20;
    	let current_block_type_index_2;
    	let if_block3;
    	let if_block3_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_3$4(ctx);

    	badge0 = new Badge({
    			props: {
    				$$slots: { default: [create_default_slot_13$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_2$7, create_else_block_2$4];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	badge1 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "primary",
    				$$slots: { default: [create_default_slot_10$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge2 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "secondary",
    				$$slots: { default: [create_default_slot_9$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge3 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "success",
    				$$slots: { default: [create_default_slot_8$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge4 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "danger",
    				$$slots: { default: [create_default_slot_7$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block_1$9, create_else_block_1$8];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	badge5 = new Badge({
    			props: {
    				className: "margin-s " + BluedarkCSSClass,
    				$$slots: { default: [create_default_slot_4$f] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge6 = new Badge({
    			props: {
    				className: "margin-s " + GreenCSSClass,
    				$$slots: { default: [create_default_slot_3$g] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge7 = new Badge({
    			props: {
    				className: "margin-s " + GreendarkCSSClass,
    				$$slots: { default: [create_default_slot_2$k] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_2 = [create_if_block$a, create_else_block$a];
    	const if_blocks_2 = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_2 = select_block_type_2(ctx);
    	if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Badge";
    			t1 = space();
    			p = element("p");
    			p.textContent = "Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.";
    			t3 = space();
    			if (if_block0) if_block0.c();
    			t4 = space();
    			h30 = element("h3");
    			h30.textContent = "Default";
    			t6 = space();
    			div0 = element("div");
    			create_component(badge0.$$.fragment);
    			t7 = space();
    			if_block1.c();
    			t8 = space();
    			h31 = element("h3");
    			h31.textContent = "Variations";
    			t10 = space();
    			div1 = element("div");
    			create_component(badge1.$$.fragment);
    			t11 = space();
    			create_component(badge2.$$.fragment);
    			t12 = space();
    			create_component(badge3.$$.fragment);
    			t13 = space();
    			create_component(badge4.$$.fragment);
    			t14 = space();
    			if_block2.c();
    			t15 = space();
    			h32 = element("h3");
    			h32.textContent = "Farve muligheder fra eb-colors";
    			t17 = space();
    			div2 = element("div");
    			create_component(badge5.$$.fragment);
    			t18 = space();
    			create_component(badge6.$$.fragment);
    			t19 = space();
    			create_component(badge7.$$.fragment);
    			t20 = space();
    			if_block3.c();
    			if_block3_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$n, 6, 0, 233);
    			add_location(p, file$n, 8, 0, 267);
    			add_location(h30, file$n, 59, 0, 1368);
    			attr_dev(div0, "class", "flex");
    			add_location(div0, file$n, 61, 0, 1386);
    			add_location(h31, file$n, 75, 0, 1616);
    			attr_dev(div1, "class", "flex");
    			add_location(div1, file$n, 77, 0, 1637);
    			add_location(h32, file$n, 100, 0, 2364);
    			attr_dev(div2, "class", "flex");
    			add_location(div2, file$n, 102, 0, 2405);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p, anchor);
    			insert_dev(target, t3, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, div0, anchor);
    			mount_component(badge0, div0, null);
    			insert_dev(target, t7, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t10, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(badge1, div1, null);
    			append_dev(div1, t11);
    			mount_component(badge2, div1, null);
    			append_dev(div1, t12);
    			mount_component(badge3, div1, null);
    			append_dev(div1, t13);
    			mount_component(badge4, div1, null);
    			insert_dev(target, t14, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(badge5, div2, null);
    			append_dev(div2, t18);
    			mount_component(badge6, div2, null);
    			append_dev(div2, t19);
    			mount_component(badge7, div2, null);
    			insert_dev(target, t20, anchor);
    			if_blocks_2[current_block_type_index_2].m(target, anchor);
    			insert_dev(target, if_block3_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_3$4(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t4.parentNode, t4);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			const badge0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge0_changes.$$scope = { dirty, ctx };
    			}

    			badge0.$set(badge0_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t8.parentNode, t8);
    			}

    			const badge1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge1_changes.$$scope = { dirty, ctx };
    			}

    			badge1.$set(badge1_changes);
    			const badge2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge2_changes.$$scope = { dirty, ctx };
    			}

    			badge2.$set(badge2_changes);
    			const badge3_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge3_changes.$$scope = { dirty, ctx };
    			}

    			badge3.$set(badge3_changes);
    			const badge4_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge4_changes.$$scope = { dirty, ctx };
    			}

    			badge4.$set(badge4_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(t15.parentNode, t15);
    			}

    			const badge5_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge5_changes.$$scope = { dirty, ctx };
    			}

    			badge5.$set(badge5_changes);
    			const badge6_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge6_changes.$$scope = { dirty, ctx };
    			}

    			badge6.$set(badge6_changes);
    			const badge7_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge7_changes.$$scope = { dirty, ctx };
    			}

    			badge7.$set(badge7_changes);
    			let previous_block_index_2 = current_block_type_index_2;
    			current_block_type_index_2 = select_block_type_2(ctx);

    			if (current_block_type_index_2 !== previous_block_index_2) {
    				group_outros();

    				transition_out(if_blocks_2[previous_block_index_2], 1, 1, () => {
    					if_blocks_2[previous_block_index_2] = null;
    				});

    				check_outros();
    				if_block3 = if_blocks_2[current_block_type_index_2];

    				if (!if_block3) {
    					if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
    					if_block3.c();
    				}

    				transition_in(if_block3, 1);
    				if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(badge0.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(badge1.$$.fragment, local);
    			transition_in(badge2.$$.fragment, local);
    			transition_in(badge3.$$.fragment, local);
    			transition_in(badge4.$$.fragment, local);
    			transition_in(if_block2);
    			transition_in(badge5.$$.fragment, local);
    			transition_in(badge6.$$.fragment, local);
    			transition_in(badge7.$$.fragment, local);
    			transition_in(if_block3);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(badge0.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(badge1.$$.fragment, local);
    			transition_out(badge2.$$.fragment, local);
    			transition_out(badge3.$$.fragment, local);
    			transition_out(badge4.$$.fragment, local);
    			transition_out(if_block2);
    			transition_out(badge5.$$.fragment, local);
    			transition_out(badge6.$$.fragment, local);
    			transition_out(badge7.$$.fragment, local);
    			transition_out(if_block3);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t3);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(div0);
    			destroy_component(badge0);
    			if (detaching) detach_dev(t7);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(div1);
    			destroy_component(badge1);
    			destroy_component(badge2);
    			destroy_component(badge3);
    			destroy_component(badge4);
    			if (detaching) detach_dev(t14);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(div2);
    			destroy_component(badge5);
    			destroy_component(badge6);
    			destroy_component(badge7);
    			if (detaching) detach_dev(t20);
    			if_blocks_2[current_block_type_index_2].d(detaching);
    			if (detaching) detach_dev(if_block3_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$n($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Badge", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Badge> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		sourceType,
    		BluedarkCSSClass,
    		GreenCSSClass,
    		GreendarkCSSClass,
    		Badge,
    		$sourceType
    	});

    	return [$sourceType];
    }

    class Badge_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$n, create_fragment$n, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Badge_1",
    			options,
    			id: create_fragment$n.name
    		});
    	}
    }

    /* docs_src/components/Button.svelte generated by Svelte v3.38.2 */
    const file$m = "docs_src/components/Button.svelte";

    // (8:0) {#if $sourceType === 'svelte'}
    function create_if_block_5$1(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let tr2;
    	let td4;
    	let t16;
    	let td5;
    	let t18;
    	let td6;
    	let t20;
    	let td7;
    	let t21;
    	let tr3;
    	let td8;
    	let t23;
    	let td9;
    	let t25;
    	let td10;
    	let t26;
    	let td11;
    	let t27;
    	let tr4;
    	let td12;
    	let t29;
    	let td13;
    	let t31;
    	let td14;
    	let t32;
    	let td15;
    	let t34;
    	let tr5;
    	let td16;
    	let t36;
    	let td17;
    	let t38;
    	let td18;
    	let t39;
    	let td19;
    	let t40;
    	let tr6;
    	let td20;
    	let t42;
    	let td21;
    	let t44;
    	let td22;
    	let t45;
    	let td23;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_22$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "disabled";
    			t16 = space();
    			td5 = element("td");
    			td5.textContent = "boolean";
    			t18 = space();
    			td6 = element("td");
    			td6.textContent = "false";
    			t20 = space();
    			td7 = element("td");
    			t21 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "extension";
    			t23 = space();
    			td9 = element("td");
    			td9.textContent = "'icon' | 'link' | 'solid' | 'icon link' | 'icon solid'";
    			t25 = space();
    			td10 = element("td");
    			t26 = space();
    			td11 = element("td");
    			t27 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "href";
    			t29 = space();
    			td13 = element("td");
    			td13.textContent = "string";
    			t31 = space();
    			td14 = element("td");
    			t32 = space();
    			td15 = element("td");
    			td15.textContent = "Coverts the Button into a clickable link";
    			t34 = space();
    			tr5 = element("tr");
    			td16 = element("td");
    			td16.textContent = "size";
    			t36 = space();
    			td17 = element("td");
    			td17.textContent = "'big' | 'small'";
    			t38 = space();
    			td18 = element("td");
    			t39 = space();
    			td19 = element("td");
    			t40 = space();
    			tr6 = element("tr");
    			td20 = element("td");
    			td20.textContent = "type";
    			t42 = space();
    			td21 = element("td");
    			td21.textContent = "'accept' | 'cancel' | 'primary' | 'secondary'";
    			t44 = space();
    			td22 = element("td");
    			t45 = space();
    			td23 = element("td");
    			add_location(th0, file$m, 15, 8, 365);
    			add_location(th1, file$m, 16, 8, 392);
    			add_location(th2, file$m, 17, 8, 414);
    			add_location(th3, file$m, 18, 8, 445);
    			add_location(tr0, file$m, 14, 6, 352);
    			add_location(thead, file$m, 13, 4, 338);
    			add_location(td0, file$m, 23, 8, 522);
    			add_location(td1, file$m, 24, 8, 549);
    			add_location(td2, file$m, 25, 8, 573);
    			add_location(td3, file$m, 26, 8, 588);
    			add_location(tr1, file$m, 22, 6, 509);
    			add_location(td4, file$m, 29, 8, 626);
    			add_location(td5, file$m, 30, 8, 652);
    			add_location(td6, file$m, 31, 8, 677);
    			add_location(td7, file$m, 32, 8, 700);
    			add_location(tr2, file$m, 28, 6, 613);
    			add_location(td8, file$m, 35, 8, 738);
    			add_location(td9, file$m, 36, 8, 765);
    			add_location(td10, file$m, 37, 8, 837);
    			add_location(td11, file$m, 38, 8, 852);
    			add_location(tr3, file$m, 34, 6, 725);
    			add_location(td12, file$m, 41, 8, 890);
    			add_location(td13, file$m, 42, 8, 912);
    			add_location(td14, file$m, 43, 8, 936);
    			add_location(td15, file$m, 44, 8, 951);
    			add_location(tr4, file$m, 40, 6, 877);
    			add_location(td16, file$m, 47, 8, 1032);
    			add_location(td17, file$m, 48, 8, 1054);
    			add_location(td18, file$m, 49, 8, 1087);
    			add_location(td19, file$m, 50, 8, 1102);
    			add_location(tr5, file$m, 46, 6, 1019);
    			add_location(td20, file$m, 53, 8, 1140);
    			add_location(td21, file$m, 54, 8, 1162);
    			add_location(td22, file$m, 55, 8, 1225);
    			add_location(td23, file$m, 56, 8, 1240);
    			add_location(tr6, file$m, 52, 6, 1127);
    			add_location(tbody, file$m, 21, 4, 495);
    			attr_dev(table, "class", "table");
    			add_location(table, file$m, 12, 2, 312);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t14);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t16);
    			append_dev(tr2, td5);
    			append_dev(tr2, t18);
    			append_dev(tr2, td6);
    			append_dev(tr2, t20);
    			append_dev(tr2, td7);
    			append_dev(tbody, t21);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t23);
    			append_dev(tr3, td9);
    			append_dev(tr3, t25);
    			append_dev(tr3, td10);
    			append_dev(tr3, t26);
    			append_dev(tr3, td11);
    			append_dev(tbody, t27);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t29);
    			append_dev(tr4, td13);
    			append_dev(tr4, t31);
    			append_dev(tr4, td14);
    			append_dev(tr4, t32);
    			append_dev(tr4, td15);
    			append_dev(tbody, t34);
    			append_dev(tbody, tr5);
    			append_dev(tr5, td16);
    			append_dev(tr5, t36);
    			append_dev(tr5, td17);
    			append_dev(tr5, t38);
    			append_dev(tr5, td18);
    			append_dev(tr5, t39);
    			append_dev(tr5, td19);
    			append_dev(tbody, t40);
    			append_dev(tbody, tr6);
    			append_dev(tr6, td20);
    			append_dev(tr6, t42);
    			append_dev(tr6, td21);
    			append_dev(tr6, t44);
    			append_dev(tr6, td22);
    			append_dev(tr6, t45);
    			append_dev(tr6, td23);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$1.name,
    		type: "if",
    		source: "(8:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (9:2) <Prism language="js">
    function create_default_slot_22$1(ctx) {
    	let t_value = `import { Button } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_22$1.name,
    		type: "slot",
    		source: "(9:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (65:0) <Button>
    function create_default_slot_21$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_21$2.name,
    		type: "slot",
    		source: "(65:0) <Button>",
    		ctx
    	});

    	return block;
    }

    // (71:0) {:else}
    function create_else_block_4$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_20$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_4$1.name,
    		type: "else",
    		source: "(71:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (67:0) {#if $sourceType === 'svelte'}
    function create_if_block_4$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_19$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$3.name,
    		type: "if",
    		source: "(67:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (72:2) <Prism language="html">
    function create_default_slot_20$2(ctx) {
    	let t_value = `<button class="button"></button>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_20$2.name,
    		type: "slot",
    		source: "(72:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (68:2) <Prism language="html">
    function create_default_slot_19$2(ctx) {
    	let t_value = `<Button></Button>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_19$2.name,
    		type: "slot",
    		source: "(68:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (79:0) <Button className="margin-m" extension="solid">
    function create_default_slot_18$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Solid");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_18$2.name,
    		type: "slot",
    		source: "(79:0) <Button className=\\\"margin-m\\\" extension=\\\"solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (80:0) <Button className="margin-m" extension="link">
    function create_default_slot_17$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Link");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_17$2.name,
    		type: "slot",
    		source: "(80:0) <Button className=\\\"margin-m\\\" extension=\\\"link\\\">",
    		ctx
    	});

    	return block;
    }

    // (81:0) <Button className="margin-m" extension="icon">
    function create_default_slot_16$2(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$m, 81, 2, 1721);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_16$2.name,
    		type: "slot",
    		source: "(81:0) <Button className=\\\"margin-m\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (93:0) {:else}
    function create_else_block_3$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_15$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_3$3.name,
    		type: "else",
    		source: "(93:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (85:0) {#if $sourceType === 'svelte'}
    function create_if_block_3$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_14$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$3.name,
    		type: "if",
    		source: "(85:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (94:2) <Prism language="html">
    function create_default_slot_15$2(ctx) {
    	let t_value = `<button class="button button--solid"></button>
<button class="button button--link"></button>
<button class="button button--icon">
  <span style="font-size: 30px;">&times;</span>
</button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15$2.name,
    		type: "slot",
    		source: "(94:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (86:2) <Prism language="html">
    function create_default_slot_14$3(ctx) {
    	let t_value = `<Button extension="solid"></Button>
<Button extension="link"></Button>
<Button extension="icon">
  <span style="font-size: 30px">&times;</span>
</Button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14$3.name,
    		type: "slot",
    		source: "(86:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (106:0) <Button className="margin-m" size="big">
    function create_default_slot_13$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Big");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13$3.name,
    		type: "slot",
    		source: "(106:0) <Button className=\\\"margin-m\\\" size=\\\"big\\\">",
    		ctx
    	});

    	return block;
    }

    // (107:0) <Button className="margin-m" size="small">
    function create_default_slot_12$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Small");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$3.name,
    		type: "slot",
    		source: "(107:0) <Button className=\\\"margin-m\\\" size=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (114:0) {:else}
    function create_else_block_2$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_11$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2$3.name,
    		type: "else",
    		source: "(114:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (109:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$6(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_10$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$6.name,
    		type: "if",
    		source: "(109:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (115:2) <Prism language="html">
    function create_default_slot_11$4(ctx) {
    	let t_value = `<button class="button button--big"></button>
<button class="button button--small"></button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$4.name,
    		type: "slot",
    		source: "(115:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (110:2) <Prism language="html">
    function create_default_slot_10$5(ctx) {
    	let t_value = `<Button size="big"></Button>
<Button size="small"></Button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$5.name,
    		type: "slot",
    		source: "(110:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (123:0) <Button className="margin-m" type="primary">
    function create_default_slot_9$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Primary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$5.name,
    		type: "slot",
    		source: "(123:0) <Button className=\\\"margin-m\\\" type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (124:0) <Button className="margin-m" type="secondary">
    function create_default_slot_8$7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Secondary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$7.name,
    		type: "slot",
    		source: "(124:0) <Button className=\\\"margin-m\\\" type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (125:0) <Button className="margin-m" type="accept">
    function create_default_slot_7$7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Accept");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$7.name,
    		type: "slot",
    		source: "(125:0) <Button className=\\\"margin-m\\\" type=\\\"accept\\\">",
    		ctx
    	});

    	return block;
    }

    // (126:0) <Button className="margin-m" type="cancel">
    function create_default_slot_6$a(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Cancel");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$a.name,
    		type: "slot",
    		source: "(126:0) <Button className=\\\"margin-m\\\" type=\\\"cancel\\\">",
    		ctx
    	});

    	return block;
    }

    // (135:0) {:else}
    function create_else_block_1$7(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_5$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$7.name,
    		type: "else",
    		source: "(135:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (128:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$8(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$e] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$8.name,
    		type: "if",
    		source: "(128:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (136:2) <Prism language="html">
    function create_default_slot_5$b(ctx) {
    	let t_value = `<button class="button button--primary"></button>
<button class="button button--secondary"></button>
<button class="button button--accept"></button>
<button class="button button--cancel"></button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$b.name,
    		type: "slot",
    		source: "(136:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (129:2) <Prism language="html">
    function create_default_slot_4$e(ctx) {
    	let t_value = `<Button type="primary"></Button>
<Button type="secondary"></Button>
<Button type="accept"></Button>
<Button type="cancel"></Button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$e.name,
    		type: "slot",
    		source: "(129:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (146:0) <Button className="margin-m">
    function create_default_slot_3$f(ctx) {
    	let span;
    	let t1;
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "icon",
    				name: "angle-right",
    				width: "20"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "Icon to the right";
    			t1 = space();
    			create_component(icon.$$.fragment);
    			add_location(span, file$m, 146, 2, 3544);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (detaching) detach_dev(t1);
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$f.name,
    		type: "slot",
    		source: "(146:0) <Button className=\\\"margin-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (150:0) <Button className="margin-m">
    function create_default_slot_2$j(ctx) {
    	let icon;
    	let t0;
    	let span;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "icon",
    				name: "angle-left",
    				width: "20"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    			t0 = space();
    			span = element("span");
    			span.textContent = "Icon to the left";
    			add_location(span, file$m, 151, 2, 3732);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, span, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$j.name,
    		type: "slot",
    		source: "(150:0) <Button className=\\\"margin-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (166:0) {:else}
    function create_else_block$9(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$k] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$9.name,
    		type: "else",
    		source: "(166:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (155:0) {#if $sourceType === 'svelte'}
    function create_if_block$9(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$k] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$9.name,
    		type: "if",
    		source: "(155:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (167:2) <Prism language="html">
    function create_default_slot_1$k(ctx) {
    	let t_value = `<button class="button">
  <span></span>
  <svg viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_right"></use>
  </svg>
</button>
<button class="button">
  <svg viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_left"></use>
  </svg>
  <span></span>
</button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$k.name,
    		type: "slot",
    		source: "(167:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (156:2) <Prism language="html">
    function create_default_slot$k(ctx) {
    	let t_value = `<Button>
  <span></span>
  <Icon className="icon" name="angle-right" width="20" />
</Button>
<Button>
  <Icon className="icon" name="angle-left" width="20" />
  <span></span>
</Button>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$k.name,
    		type: "slot",
    		source: "(156:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$m(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let button0;
    	let t5;
    	let current_block_type_index;
    	let if_block1;
    	let t6;
    	let h31;
    	let t8;
    	let button1;
    	let t9;
    	let button2;
    	let t10;
    	let button3;
    	let t11;
    	let current_block_type_index_1;
    	let if_block2;
    	let t12;
    	let h32;
    	let t14;
    	let p;
    	let b0;
    	let t16;
    	let b1;
    	let t18;
    	let t19;
    	let button4;
    	let t20;
    	let button5;
    	let t21;
    	let current_block_type_index_2;
    	let if_block3;
    	let t22;
    	let h33;
    	let t24;
    	let button6;
    	let t25;
    	let button7;
    	let t26;
    	let button8;
    	let t27;
    	let button9;
    	let t28;
    	let current_block_type_index_3;
    	let if_block4;
    	let t29;
    	let h34;
    	let t31;
    	let button10;
    	let t32;
    	let button11;
    	let t33;
    	let current_block_type_index_4;
    	let if_block5;
    	let if_block5_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_5$1(ctx);

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_21$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_4$3, create_else_block_4$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	button1 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_18$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "link",
    				$$slots: { default: [create_default_slot_17$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button3 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_16$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block_3$3, create_else_block_3$3];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	button4 = new Button({
    			props: {
    				className: "margin-m",
    				size: "big",
    				$$slots: { default: [create_default_slot_13$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button5 = new Button({
    			props: {
    				className: "margin-m",
    				size: "small",
    				$$slots: { default: [create_default_slot_12$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_2 = [create_if_block_2$6, create_else_block_2$3];
    	const if_blocks_2 = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_2 = select_block_type_2(ctx);
    	if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);

    	button6 = new Button({
    			props: {
    				className: "margin-m",
    				type: "primary",
    				$$slots: { default: [create_default_slot_9$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button7 = new Button({
    			props: {
    				className: "margin-m",
    				type: "secondary",
    				$$slots: { default: [create_default_slot_8$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button8 = new Button({
    			props: {
    				className: "margin-m",
    				type: "accept",
    				$$slots: { default: [create_default_slot_7$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button9 = new Button({
    			props: {
    				className: "margin-m",
    				type: "cancel",
    				$$slots: { default: [create_default_slot_6$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_3 = [create_if_block_1$8, create_else_block_1$7];
    	const if_blocks_3 = [];

    	function select_block_type_3(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_3 = select_block_type_3(ctx);
    	if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);

    	button10 = new Button({
    			props: {
    				className: "margin-m",
    				$$slots: { default: [create_default_slot_3$f] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button11 = new Button({
    			props: {
    				className: "margin-m",
    				$$slots: { default: [create_default_slot_2$j] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_4 = [create_if_block$9, create_else_block$9];
    	const if_blocks_4 = [];

    	function select_block_type_4(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_4 = select_block_type_4(ctx);
    	if_block5 = if_blocks_4[current_block_type_index_4] = if_block_creators_4[current_block_type_index_4](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Buttons";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Default";
    			t4 = space();
    			create_component(button0.$$.fragment);
    			t5 = space();
    			if_block1.c();
    			t6 = space();
    			h31 = element("h3");
    			h31.textContent = "Extension attribute";
    			t8 = space();
    			create_component(button1.$$.fragment);
    			t9 = space();
    			create_component(button2.$$.fragment);
    			t10 = space();
    			create_component(button3.$$.fragment);
    			t11 = space();
    			if_block2.c();
    			t12 = space();
    			h32 = element("h3");
    			h32.textContent = "Size attribute";
    			t14 = space();
    			p = element("p");
    			b0 = element("b");
    			b0.textContent = "big";
    			t16 = text(" and ");
    			b1 = element("b");
    			b1.textContent = "small";
    			t18 = text(" can be combined with the other three extensions");
    			t19 = space();
    			create_component(button4.$$.fragment);
    			t20 = space();
    			create_component(button5.$$.fragment);
    			t21 = space();
    			if_block3.c();
    			t22 = space();
    			h33 = element("h3");
    			h33.textContent = "Variations";
    			t24 = space();
    			create_component(button6.$$.fragment);
    			t25 = space();
    			create_component(button7.$$.fragment);
    			t26 = space();
    			create_component(button8.$$.fragment);
    			t27 = space();
    			create_component(button9.$$.fragment);
    			t28 = space();
    			if_block4.c();
    			t29 = space();
    			h34 = element("h3");
    			h34.textContent = "With Icon";
    			t31 = space();
    			create_component(button10.$$.fragment);
    			t32 = space();
    			create_component(button11.$$.fragment);
    			t33 = space();
    			if_block5.c();
    			if_block5_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$m, 5, 0, 145);
    			add_location(h30, file$m, 62, 0, 1290);
    			add_location(h31, file$m, 76, 0, 1520);
    			add_location(h32, file$m, 102, 0, 2255);
    			add_location(b0, file$m, 103, 3, 2282);
    			add_location(b1, file$m, 103, 18, 2297);
    			add_location(p, file$m, 103, 0, 2279);
    			add_location(h33, file$m, 120, 0, 2762);
    			add_location(h34, file$m, 143, 0, 3492);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(button0, target, anchor);
    			insert_dev(target, t5, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t9, anchor);
    			mount_component(button2, target, anchor);
    			insert_dev(target, t10, anchor);
    			mount_component(button3, target, anchor);
    			insert_dev(target, t11, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, t12, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, p, anchor);
    			append_dev(p, b0);
    			append_dev(p, t16);
    			append_dev(p, b1);
    			append_dev(p, t18);
    			insert_dev(target, t19, anchor);
    			mount_component(button4, target, anchor);
    			insert_dev(target, t20, anchor);
    			mount_component(button5, target, anchor);
    			insert_dev(target, t21, anchor);
    			if_blocks_2[current_block_type_index_2].m(target, anchor);
    			insert_dev(target, t22, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t24, anchor);
    			mount_component(button6, target, anchor);
    			insert_dev(target, t25, anchor);
    			mount_component(button7, target, anchor);
    			insert_dev(target, t26, anchor);
    			mount_component(button8, target, anchor);
    			insert_dev(target, t27, anchor);
    			mount_component(button9, target, anchor);
    			insert_dev(target, t28, anchor);
    			if_blocks_3[current_block_type_index_3].m(target, anchor);
    			insert_dev(target, t29, anchor);
    			insert_dev(target, h34, anchor);
    			insert_dev(target, t31, anchor);
    			mount_component(button10, target, anchor);
    			insert_dev(target, t32, anchor);
    			mount_component(button11, target, anchor);
    			insert_dev(target, t33, anchor);
    			if_blocks_4[current_block_type_index_4].m(target, anchor);
    			insert_dev(target, if_block5_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_5$1(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t6.parentNode, t6);
    			}

    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    			const button3_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button3_changes.$$scope = { dirty, ctx };
    			}

    			button3.$set(button3_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(t12.parentNode, t12);
    			}

    			const button4_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button4_changes.$$scope = { dirty, ctx };
    			}

    			button4.$set(button4_changes);
    			const button5_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button5_changes.$$scope = { dirty, ctx };
    			}

    			button5.$set(button5_changes);
    			let previous_block_index_2 = current_block_type_index_2;
    			current_block_type_index_2 = select_block_type_2(ctx);

    			if (current_block_type_index_2 !== previous_block_index_2) {
    				group_outros();

    				transition_out(if_blocks_2[previous_block_index_2], 1, 1, () => {
    					if_blocks_2[previous_block_index_2] = null;
    				});

    				check_outros();
    				if_block3 = if_blocks_2[current_block_type_index_2];

    				if (!if_block3) {
    					if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
    					if_block3.c();
    				}

    				transition_in(if_block3, 1);
    				if_block3.m(t22.parentNode, t22);
    			}

    			const button6_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button6_changes.$$scope = { dirty, ctx };
    			}

    			button6.$set(button6_changes);
    			const button7_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button7_changes.$$scope = { dirty, ctx };
    			}

    			button7.$set(button7_changes);
    			const button8_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button8_changes.$$scope = { dirty, ctx };
    			}

    			button8.$set(button8_changes);
    			const button9_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button9_changes.$$scope = { dirty, ctx };
    			}

    			button9.$set(button9_changes);
    			let previous_block_index_3 = current_block_type_index_3;
    			current_block_type_index_3 = select_block_type_3(ctx);

    			if (current_block_type_index_3 !== previous_block_index_3) {
    				group_outros();

    				transition_out(if_blocks_3[previous_block_index_3], 1, 1, () => {
    					if_blocks_3[previous_block_index_3] = null;
    				});

    				check_outros();
    				if_block4 = if_blocks_3[current_block_type_index_3];

    				if (!if_block4) {
    					if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);
    					if_block4.c();
    				}

    				transition_in(if_block4, 1);
    				if_block4.m(t29.parentNode, t29);
    			}

    			const button10_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button10_changes.$$scope = { dirty, ctx };
    			}

    			button10.$set(button10_changes);
    			const button11_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button11_changes.$$scope = { dirty, ctx };
    			}

    			button11.$set(button11_changes);
    			let previous_block_index_4 = current_block_type_index_4;
    			current_block_type_index_4 = select_block_type_4(ctx);

    			if (current_block_type_index_4 !== previous_block_index_4) {
    				group_outros();

    				transition_out(if_blocks_4[previous_block_index_4], 1, 1, () => {
    					if_blocks_4[previous_block_index_4] = null;
    				});

    				check_outros();
    				if_block5 = if_blocks_4[current_block_type_index_4];

    				if (!if_block5) {
    					if_block5 = if_blocks_4[current_block_type_index_4] = if_block_creators_4[current_block_type_index_4](ctx);
    					if_block5.c();
    				}

    				transition_in(if_block5, 1);
    				if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(button0.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			transition_in(button3.$$.fragment, local);
    			transition_in(if_block2);
    			transition_in(button4.$$.fragment, local);
    			transition_in(button5.$$.fragment, local);
    			transition_in(if_block3);
    			transition_in(button6.$$.fragment, local);
    			transition_in(button7.$$.fragment, local);
    			transition_in(button8.$$.fragment, local);
    			transition_in(button9.$$.fragment, local);
    			transition_in(if_block4);
    			transition_in(button10.$$.fragment, local);
    			transition_in(button11.$$.fragment, local);
    			transition_in(if_block5);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(button0.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			transition_out(button3.$$.fragment, local);
    			transition_out(if_block2);
    			transition_out(button4.$$.fragment, local);
    			transition_out(button5.$$.fragment, local);
    			transition_out(if_block3);
    			transition_out(button6.$$.fragment, local);
    			transition_out(button7.$$.fragment, local);
    			transition_out(button8.$$.fragment, local);
    			transition_out(button9.$$.fragment, local);
    			transition_out(if_block4);
    			transition_out(button10.$$.fragment, local);
    			transition_out(button11.$$.fragment, local);
    			transition_out(if_block5);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t5);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t8);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t9);
    			destroy_component(button2, detaching);
    			if (detaching) detach_dev(t10);
    			destroy_component(button3, detaching);
    			if (detaching) detach_dev(t11);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t19);
    			destroy_component(button4, detaching);
    			if (detaching) detach_dev(t20);
    			destroy_component(button5, detaching);
    			if (detaching) detach_dev(t21);
    			if_blocks_2[current_block_type_index_2].d(detaching);
    			if (detaching) detach_dev(t22);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t24);
    			destroy_component(button6, detaching);
    			if (detaching) detach_dev(t25);
    			destroy_component(button7, detaching);
    			if (detaching) detach_dev(t26);
    			destroy_component(button8, detaching);
    			if (detaching) detach_dev(t27);
    			destroy_component(button9, detaching);
    			if (detaching) detach_dev(t28);
    			if_blocks_3[current_block_type_index_3].d(detaching);
    			if (detaching) detach_dev(t29);
    			if (detaching) detach_dev(h34);
    			if (detaching) detach_dev(t31);
    			destroy_component(button10, detaching);
    			if (detaching) detach_dev(t32);
    			destroy_component(button11, detaching);
    			if (detaching) detach_dev(t33);
    			if_blocks_4[current_block_type_index_4].d(detaching);
    			if (detaching) detach_dev(if_block5_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$m($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Button", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		sourceType,
    		Button,
    		Icon,
    		$sourceType
    	});

    	return [$sourceType];
    }

    class Button_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$m, create_fragment$m, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button_1",
    			options,
    			id: create_fragment$m.name
    		});
    	}
    }

    /* docs_src/components/ButtonGroup.svelte generated by Svelte v3.38.2 */
    const file$l = "docs_src/components/ButtonGroup.svelte";

    // (10:0) {#if $sourceType === 'svelte'}
    function create_if_block_4$2(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let tr2;
    	let td4;
    	let t16;
    	let td5;
    	let t18;
    	let td6;
    	let t19;
    	let td7;
    	let t20;
    	let tr3;
    	let td8;
    	let t22;
    	let td9;
    	let t24;
    	let td10;
    	let t25;
    	let td11;
    	let t26;
    	let tr4;
    	let td12;
    	let t28;
    	let td13;
    	let t30;
    	let td14;
    	let t31;
    	let td15;
    	let t32;
    	let tr5;
    	let td16;
    	let t34;
    	let td17;
    	let t36;
    	let td18;
    	let t38;
    	let td19;
    	let t39;
    	let tr6;
    	let td20;
    	let t41;
    	let td21;
    	let t43;
    	let td22;
    	let t45;
    	let td23;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_36] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "type";
    			t16 = space();
    			td5 = element("td");
    			td5.textContent = "'accept' | 'cancel' | 'primary' | 'secondary'";
    			t18 = space();
    			td6 = element("td");
    			t19 = space();
    			td7 = element("td");
    			t20 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "color";
    			t22 = space();
    			td9 = element("td");
    			td9.textContent = "EB Background color variable";
    			t24 = space();
    			td10 = element("td");
    			t25 = space();
    			td11 = element("td");
    			t26 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "colorHover";
    			t28 = space();
    			td13 = element("td");
    			td13.textContent = "EB Background color variable";
    			t30 = space();
    			td14 = element("td");
    			t31 = space();
    			td15 = element("td");
    			t32 = space();
    			tr5 = element("tr");
    			td16 = element("td");
    			td16.textContent = "solid";
    			t34 = space();
    			td17 = element("td");
    			td17.textContent = "boolean";
    			t36 = space();
    			td18 = element("td");
    			td18.textContent = "false";
    			t38 = space();
    			td19 = element("td");
    			t39 = space();
    			tr6 = element("tr");
    			td20 = element("td");
    			td20.textContent = "selectedId";
    			t41 = space();
    			td21 = element("td");
    			td21.textContent = "Writable - number";
    			t43 = space();
    			td22 = element("td");
    			td22.textContent = "0 (first button)";
    			t45 = space();
    			td23 = element("td");
    			td23.textContent = "Can be set onMount";
    			add_location(th0, file$l, 17, 8, 409);
    			add_location(th1, file$l, 18, 8, 436);
    			add_location(th2, file$l, 19, 8, 458);
    			add_location(th3, file$l, 20, 8, 489);
    			add_location(tr0, file$l, 16, 6, 396);
    			add_location(thead, file$l, 15, 4, 382);
    			add_location(td0, file$l, 25, 8, 566);
    			add_location(td1, file$l, 26, 8, 593);
    			add_location(td2, file$l, 27, 8, 617);
    			add_location(td3, file$l, 28, 8, 632);
    			add_location(tr1, file$l, 24, 6, 553);
    			add_location(td4, file$l, 31, 8, 670);
    			add_location(td5, file$l, 32, 8, 692);
    			add_location(td6, file$l, 33, 8, 755);
    			add_location(td7, file$l, 34, 8, 770);
    			add_location(tr2, file$l, 30, 6, 657);
    			add_location(td8, file$l, 37, 8, 808);
    			add_location(td9, file$l, 38, 8, 831);
    			add_location(td10, file$l, 39, 8, 877);
    			add_location(td11, file$l, 40, 8, 892);
    			add_location(tr3, file$l, 36, 6, 795);
    			add_location(td12, file$l, 43, 8, 930);
    			add_location(td13, file$l, 44, 8, 958);
    			add_location(td14, file$l, 45, 8, 1004);
    			add_location(td15, file$l, 46, 8, 1019);
    			add_location(tr4, file$l, 42, 6, 917);
    			add_location(td16, file$l, 49, 8, 1057);
    			add_location(td17, file$l, 50, 8, 1080);
    			add_location(td18, file$l, 51, 8, 1105);
    			add_location(td19, file$l, 52, 8, 1128);
    			add_location(tr5, file$l, 48, 6, 1044);
    			add_location(td20, file$l, 55, 8, 1166);
    			add_location(td21, file$l, 56, 8, 1194);
    			add_location(td22, file$l, 57, 8, 1229);
    			add_location(td23, file$l, 58, 8, 1263);
    			add_location(tr6, file$l, 54, 6, 1153);
    			add_location(tbody, file$l, 23, 4, 539);
    			attr_dev(table, "class", "table");
    			add_location(table, file$l, 14, 2, 356);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t14);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t16);
    			append_dev(tr2, td5);
    			append_dev(tr2, t18);
    			append_dev(tr2, td6);
    			append_dev(tr2, t19);
    			append_dev(tr2, td7);
    			append_dev(tbody, t20);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t22);
    			append_dev(tr3, td9);
    			append_dev(tr3, t24);
    			append_dev(tr3, td10);
    			append_dev(tr3, t25);
    			append_dev(tr3, td11);
    			append_dev(tbody, t26);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t28);
    			append_dev(tr4, td13);
    			append_dev(tr4, t30);
    			append_dev(tr4, td14);
    			append_dev(tr4, t31);
    			append_dev(tr4, td15);
    			append_dev(tbody, t32);
    			append_dev(tbody, tr5);
    			append_dev(tr5, td16);
    			append_dev(tr5, t34);
    			append_dev(tr5, td17);
    			append_dev(tr5, t36);
    			append_dev(tr5, td18);
    			append_dev(tr5, t38);
    			append_dev(tr5, td19);
    			append_dev(tbody, t39);
    			append_dev(tbody, tr6);
    			append_dev(tr6, td20);
    			append_dev(tr6, t41);
    			append_dev(tr6, td21);
    			append_dev(tr6, t43);
    			append_dev(tr6, td22);
    			append_dev(tr6, t45);
    			append_dev(tr6, td23);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$2.name,
    		type: "if",
    		source: "(10:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (11:2) <Prism language="js">
    function create_default_slot_36(ctx) {
    	let t_value = `import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_36.name,
    		type: "slot",
    		source: "(11:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (69:2) <Button>
    function create_default_slot_35(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_35.name,
    		type: "slot",
    		source: "(69:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (70:2) <Button>
    function create_default_slot_34(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_34.name,
    		type: "slot",
    		source: "(70:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (71:2) <Button>
    function create_default_slot_33(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_33.name,
    		type: "slot",
    		source: "(71:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (68:0) <ButtonGroup className="margin-l--b" bind:selectedId>
    function create_default_slot_32(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_35] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_34] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_33] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_32.name,
    		type: "slot",
    		source: "(68:0) <ButtonGroup className=\\\"margin-l--b\\\" bind:selectedId>",
    		ctx
    	});

    	return block;
    }

    // (82:0) {:else}
    function create_else_block_3$2(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_31] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_3$2.name,
    		type: "else",
    		source: "(82:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (74:0) {#if $sourceType === 'svelte'}
    function create_if_block_3$2(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_30] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$2.name,
    		type: "if",
    		source: "(74:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (83:2) <Prism language="html">
    function create_default_slot_31(ctx) {
    	let t_value = `<div class="buttongroup">
  <button class="button"></button>
  <button class="button"></button>
  <button class="button"></button>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_31.name,
    		type: "slot",
    		source: "(83:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (75:2) <Prism language="html">
    function create_default_slot_30(ctx) {
    	let t_value = `<ButtonGroup bind:selectedId>
  <Button></Button>
  <Button></Button>
  <Button></Button>
</ButtonGroup>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_30.name,
    		type: "slot",
    		source: "(75:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (95:2) <Button>
    function create_default_slot_29(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Primary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_29.name,
    		type: "slot",
    		source: "(95:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (96:2) <Button>
    function create_default_slot_28(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_28.name,
    		type: "slot",
    		source: "(96:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (97:2) <Button>
    function create_default_slot_27(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_27.name,
    		type: "slot",
    		source: "(97:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (94:0) <ButtonGroup type="primary" className="margin-m--b">
    function create_default_slot_26(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_29] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_28] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_27] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_26.name,
    		type: "slot",
    		source: "(94:0) <ButtonGroup type=\\\"primary\\\" className=\\\"margin-m--b\\\">",
    		ctx
    	});

    	return block;
    }

    // (101:2) <Button>
    function create_default_slot_25(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Secondary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_25.name,
    		type: "slot",
    		source: "(101:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (102:2) <Button>
    function create_default_slot_24(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_24.name,
    		type: "slot",
    		source: "(102:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (103:2) <Button>
    function create_default_slot_23(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_23.name,
    		type: "slot",
    		source: "(103:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (100:0) <ButtonGroup type="secondary" className="margin-m--b">
    function create_default_slot_22(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_25] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_24] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_23] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_22.name,
    		type: "slot",
    		source: "(100:0) <ButtonGroup type=\\\"secondary\\\" className=\\\"margin-m--b\\\">",
    		ctx
    	});

    	return block;
    }

    // (107:2) <Button>
    function create_default_slot_21$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Accept");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_21$1.name,
    		type: "slot",
    		source: "(107:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (108:2) <Button>
    function create_default_slot_20$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_20$1.name,
    		type: "slot",
    		source: "(108:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (109:2) <Button>
    function create_default_slot_19$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_19$1.name,
    		type: "slot",
    		source: "(109:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (106:0) <ButtonGroup type="accept" className="margin-m--b">
    function create_default_slot_18$1(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_21$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_20$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_19$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_18$1.name,
    		type: "slot",
    		source: "(106:0) <ButtonGroup type=\\\"accept\\\" className=\\\"margin-m--b\\\">",
    		ctx
    	});

    	return block;
    }

    // (113:2) <Button>
    function create_default_slot_17$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Cancel");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_17$1.name,
    		type: "slot",
    		source: "(113:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (114:2) <Button>
    function create_default_slot_16$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_16$1.name,
    		type: "slot",
    		source: "(114:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (115:2) <Button>
    function create_default_slot_15$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15$1.name,
    		type: "slot",
    		source: "(115:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (112:0) <ButtonGroup type="cancel" className="margin-l--b">
    function create_default_slot_14$2(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_17$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_16$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_15$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14$2.name,
    		type: "slot",
    		source: "(112:0) <ButtonGroup type=\\\"cancel\\\" className=\\\"margin-l--b\\\">",
    		ctx
    	});

    	return block;
    }

    // (125:0) {:else}
    function create_else_block_2$2(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_13$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2$2.name,
    		type: "else",
    		source: "(125:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (118:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$5(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_12$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$5.name,
    		type: "if",
    		source: "(118:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (126:2) <Prism language="html">
    function create_default_slot_13$2(ctx) {
    	let t_value = `<div class="buttongroup buttongroup--primary">...</div>
<div class="buttongroup buttongroup--secondary">...</div>
<div class="buttongroup buttongroup--accept">...</div>
<div class="buttongroup buttongroup--cancel">...</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13$2.name,
    		type: "slot",
    		source: "(126:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (119:2) <Prism language="html">
    function create_default_slot_12$2(ctx) {
    	let t_value = `<ButtonGroup type="primary">...</ButtonGroup>
<ButtonGroup type="secondary">...</ButtonGroup>
<ButtonGroup type="accept">...</ButtonGroup>
<ButtonGroup type="cancel">...</ButtonGroup>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$2.name,
    		type: "slot",
    		source: "(119:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (137:2) <Button>
    function create_default_slot_11$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$3.name,
    		type: "slot",
    		source: "(137:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (138:2) <Button>
    function create_default_slot_10$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$4.name,
    		type: "slot",
    		source: "(138:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (139:2) <Button>
    function create_default_slot_9$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$4.name,
    		type: "slot",
    		source: "(139:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (136:0) <ButtonGroup color="Bordeaux" className="margin-l--b">
    function create_default_slot_8$6(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_11$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_10$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_9$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$6.name,
    		type: "slot",
    		source: "(136:0) <ButtonGroup color=\\\"Bordeaux\\\" className=\\\"margin-l--b\\\">",
    		ctx
    	});

    	return block;
    }

    // (146:0) {:else}
    function create_else_block_1$6(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_7$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$6.name,
    		type: "else",
    		source: "(146:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (142:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$7(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_6$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$7.name,
    		type: "if",
    		source: "(142:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (147:2) <Prism language="html">
    function create_default_slot_7$6(ctx) {
    	let t_value = `<div class="buttongroup" style="
  --buttongroup-color: #8a0c36;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #8a0c36;
  --buttongroup-fgcolor--hover: #fff;
">...</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$6.name,
    		type: "slot",
    		source: "(147:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (143:2) <Prism language="html">
    function create_default_slot_6$9(ctx) {
    	let t_value = `<ButtonGroup color="Bordeaux">...</ButtonGroup>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$9.name,
    		type: "slot",
    		source: "(143:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (160:2) <Button>
    function create_default_slot_5$a(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$a.name,
    		type: "slot",
    		source: "(160:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (161:2) <Button>
    function create_default_slot_4$d(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$d.name,
    		type: "slot",
    		source: "(161:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (162:2) <Button>
    function create_default_slot_3$e(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$e.name,
    		type: "slot",
    		source: "(162:2) <Button>",
    		ctx
    	});

    	return block;
    }

    // (159:0) <ButtonGroup solid={true} color="Black" colorHover="Red" className="margin-l--b">
    function create_default_slot_2$i(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_5$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_4$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_3$e] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$i.name,
    		type: "slot",
    		source: "(159:0) <ButtonGroup solid={true} color=\\\"Black\\\" colorHover=\\\"Red\\\" className=\\\"margin-l--b\\\">",
    		ctx
    	});

    	return block;
    }

    // (169:0) {:else}
    function create_else_block$8(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$j] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$8.name,
    		type: "else",
    		source: "(169:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (165:0) {#if $sourceType === 'svelte'}
    function create_if_block$8(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$j] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$8.name,
    		type: "if",
    		source: "(165:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (170:2) <Prism language="html">
    function create_default_slot_1$j(ctx) {
    	let t_value = `<div class="buttongroup buttongroup--solid" style="
  --buttongroup-color: #000;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #bd1118;
  --buttongroup-fgcolor--hover: #fff;
">...</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$j.name,
    		type: "slot",
    		source: "(170:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (166:2) <Prism language="html">
    function create_default_slot$j(ctx) {
    	let t_value = `<ButtonGroup solid={true} color="Black" colorHover="Red">...</ButtonGroup>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$j.name,
    		type: "slot",
    		source: "(166:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$l(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let p;
    	let t5;
    	let t6;
    	let t7;
    	let buttongroup0;
    	let updating_selectedId;
    	let t8;
    	let current_block_type_index;
    	let if_block1;
    	let t9;
    	let h31;
    	let t11;
    	let buttongroup1;
    	let t12;
    	let buttongroup2;
    	let t13;
    	let buttongroup3;
    	let t14;
    	let buttongroup4;
    	let t15;
    	let current_block_type_index_1;
    	let if_block2;
    	let t16;
    	let h32;
    	let t18;
    	let buttongroup5;
    	let t19;
    	let current_block_type_index_2;
    	let if_block3;
    	let t20;
    	let h33;
    	let t22;
    	let buttongroup6;
    	let t23;
    	let current_block_type_index_3;
    	let if_block4;
    	let if_block4_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[1] === "svelte" && create_if_block_4$2(ctx);

    	function buttongroup0_selectedId_binding(value) {
    		/*buttongroup0_selectedId_binding*/ ctx[3](value);
    	}

    	let buttongroup0_props = {
    		className: "margin-l--b",
    		$$slots: { default: [create_default_slot_32] },
    		$$scope: { ctx }
    	};

    	if (/*selectedId*/ ctx[0] !== void 0) {
    		buttongroup0_props.selectedId = /*selectedId*/ ctx[0];
    	}

    	buttongroup0 = new ButtonGroup({
    			props: buttongroup0_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(buttongroup0, "selectedId", buttongroup0_selectedId_binding));
    	const if_block_creators = [create_if_block_3$2, create_else_block_3$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[1] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	buttongroup1 = new ButtonGroup({
    			props: {
    				type: "primary",
    				className: "margin-m--b",
    				$$slots: { default: [create_default_slot_26] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup2 = new ButtonGroup({
    			props: {
    				type: "secondary",
    				className: "margin-m--b",
    				$$slots: { default: [create_default_slot_22] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup3 = new ButtonGroup({
    			props: {
    				type: "accept",
    				className: "margin-m--b",
    				$$slots: { default: [create_default_slot_18$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup4 = new ButtonGroup({
    			props: {
    				type: "cancel",
    				className: "margin-l--b",
    				$$slots: { default: [create_default_slot_14$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block_2$5, create_else_block_2$2];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[1] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	buttongroup5 = new ButtonGroup({
    			props: {
    				color: "Bordeaux",
    				className: "margin-l--b",
    				$$slots: { default: [create_default_slot_8$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_2 = [create_if_block_1$7, create_else_block_1$6];
    	const if_blocks_2 = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*$sourceType*/ ctx[1] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_2 = select_block_type_2(ctx);
    	if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);

    	buttongroup6 = new ButtonGroup({
    			props: {
    				solid: true,
    				color: "Black",
    				colorHover: "Red",
    				className: "margin-l--b",
    				$$slots: { default: [create_default_slot_2$i] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_3 = [create_if_block$8, create_else_block$8];
    	const if_blocks_3 = [];

    	function select_block_type_3(ctx, dirty) {
    		if (/*$sourceType*/ ctx[1] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_3 = select_block_type_3(ctx);
    	if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Button groups";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Default";
    			t4 = space();
    			p = element("p");
    			t5 = text("Button-index selected: ");
    			t6 = text(/*$selectedId*/ ctx[2]);
    			t7 = space();
    			create_component(buttongroup0.$$.fragment);
    			t8 = space();
    			if_block1.c();
    			t9 = space();
    			h31 = element("h3");
    			h31.textContent = "Variations";
    			t11 = space();
    			create_component(buttongroup1.$$.fragment);
    			t12 = space();
    			create_component(buttongroup2.$$.fragment);
    			t13 = space();
    			create_component(buttongroup3.$$.fragment);
    			t14 = space();
    			create_component(buttongroup4.$$.fragment);
    			t15 = space();
    			if_block2.c();
    			t16 = space();
    			h32 = element("h3");
    			h32.textContent = "Farve muligheder fra eb-colors";
    			t18 = space();
    			create_component(buttongroup5.$$.fragment);
    			t19 = space();
    			if_block3.c();
    			t20 = space();
    			h33 = element("h3");
    			h33.textContent = "Solid button group";
    			t22 = space();
    			create_component(buttongroup6.$$.fragment);
    			t23 = space();
    			if_block4.c();
    			if_block4_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$l, 7, 0, 170);
    			add_location(h30, file$l, 64, 0, 1334);
    			add_location(p, file$l, 65, 0, 1351);
    			add_location(h31, file$l, 91, 0, 1929);
    			add_location(h32, file$l, 133, 0, 3102);
    			add_location(h33, file$l, 156, 0, 3667);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, p, anchor);
    			append_dev(p, t5);
    			append_dev(p, t6);
    			insert_dev(target, t7, anchor);
    			mount_component(buttongroup0, target, anchor);
    			insert_dev(target, t8, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t11, anchor);
    			mount_component(buttongroup1, target, anchor);
    			insert_dev(target, t12, anchor);
    			mount_component(buttongroup2, target, anchor);
    			insert_dev(target, t13, anchor);
    			mount_component(buttongroup3, target, anchor);
    			insert_dev(target, t14, anchor);
    			mount_component(buttongroup4, target, anchor);
    			insert_dev(target, t15, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, t16, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t18, anchor);
    			mount_component(buttongroup5, target, anchor);
    			insert_dev(target, t19, anchor);
    			if_blocks_2[current_block_type_index_2].m(target, anchor);
    			insert_dev(target, t20, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t22, anchor);
    			mount_component(buttongroup6, target, anchor);
    			insert_dev(target, t23, anchor);
    			if_blocks_3[current_block_type_index_3].m(target, anchor);
    			insert_dev(target, if_block4_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[1] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 2) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_4$2(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (!current || dirty & /*$selectedId*/ 4) set_data_dev(t6, /*$selectedId*/ ctx[2]);
    			const buttongroup0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup0_changes.$$scope = { dirty, ctx };
    			}

    			if (!updating_selectedId && dirty & /*selectedId*/ 1) {
    				updating_selectedId = true;
    				buttongroup0_changes.selectedId = /*selectedId*/ ctx[0];
    				add_flush_callback(() => updating_selectedId = false);
    			}

    			buttongroup0.$set(buttongroup0_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t9.parentNode, t9);
    			}

    			const buttongroup1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup1_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup1.$set(buttongroup1_changes);
    			const buttongroup2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup2_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup2.$set(buttongroup2_changes);
    			const buttongroup3_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup3_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup3.$set(buttongroup3_changes);
    			const buttongroup4_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup4_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup4.$set(buttongroup4_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(t16.parentNode, t16);
    			}

    			const buttongroup5_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup5_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup5.$set(buttongroup5_changes);
    			let previous_block_index_2 = current_block_type_index_2;
    			current_block_type_index_2 = select_block_type_2(ctx);

    			if (current_block_type_index_2 !== previous_block_index_2) {
    				group_outros();

    				transition_out(if_blocks_2[previous_block_index_2], 1, 1, () => {
    					if_blocks_2[previous_block_index_2] = null;
    				});

    				check_outros();
    				if_block3 = if_blocks_2[current_block_type_index_2];

    				if (!if_block3) {
    					if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
    					if_block3.c();
    				}

    				transition_in(if_block3, 1);
    				if_block3.m(t20.parentNode, t20);
    			}

    			const buttongroup6_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				buttongroup6_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup6.$set(buttongroup6_changes);
    			let previous_block_index_3 = current_block_type_index_3;
    			current_block_type_index_3 = select_block_type_3(ctx);

    			if (current_block_type_index_3 !== previous_block_index_3) {
    				group_outros();

    				transition_out(if_blocks_3[previous_block_index_3], 1, 1, () => {
    					if_blocks_3[previous_block_index_3] = null;
    				});

    				check_outros();
    				if_block4 = if_blocks_3[current_block_type_index_3];

    				if (!if_block4) {
    					if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);
    					if_block4.c();
    				}

    				transition_in(if_block4, 1);
    				if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(buttongroup0.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(buttongroup1.$$.fragment, local);
    			transition_in(buttongroup2.$$.fragment, local);
    			transition_in(buttongroup3.$$.fragment, local);
    			transition_in(buttongroup4.$$.fragment, local);
    			transition_in(if_block2);
    			transition_in(buttongroup5.$$.fragment, local);
    			transition_in(if_block3);
    			transition_in(buttongroup6.$$.fragment, local);
    			transition_in(if_block4);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(buttongroup0.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(buttongroup1.$$.fragment, local);
    			transition_out(buttongroup2.$$.fragment, local);
    			transition_out(buttongroup3.$$.fragment, local);
    			transition_out(buttongroup4.$$.fragment, local);
    			transition_out(if_block2);
    			transition_out(buttongroup5.$$.fragment, local);
    			transition_out(if_block3);
    			transition_out(buttongroup6.$$.fragment, local);
    			transition_out(if_block4);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t7);
    			destroy_component(buttongroup0, detaching);
    			if (detaching) detach_dev(t8);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t11);
    			destroy_component(buttongroup1, detaching);
    			if (detaching) detach_dev(t12);
    			destroy_component(buttongroup2, detaching);
    			if (detaching) detach_dev(t13);
    			destroy_component(buttongroup3, detaching);
    			if (detaching) detach_dev(t14);
    			destroy_component(buttongroup4, detaching);
    			if (detaching) detach_dev(t15);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(t16);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t18);
    			destroy_component(buttongroup5, detaching);
    			if (detaching) detach_dev(t19);
    			if_blocks_2[current_block_type_index_2].d(detaching);
    			if (detaching) detach_dev(t20);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t22);
    			destroy_component(buttongroup6, detaching);
    			if (detaching) detach_dev(t23);
    			if_blocks_3[current_block_type_index_3].d(detaching);
    			if (detaching) detach_dev(if_block4_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$l.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$l($$self, $$props, $$invalidate) {
    	let $sourceType;

    	let $selectedId,
    		$$unsubscribe_selectedId = noop,
    		$$subscribe_selectedId = () => ($$unsubscribe_selectedId(), $$unsubscribe_selectedId = subscribe(selectedId, $$value => $$invalidate(2, $selectedId = $$value)), selectedId);

    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(1, $sourceType = $$value));
    	$$self.$$.on_destroy.push(() => $$unsubscribe_selectedId());
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ButtonGroup", slots, []);

    	let selectedId;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ButtonGroup> was created with unknown prop '${key}'`);
    	});

    	function buttongroup0_selectedId_binding(value) {
    		selectedId = value;
    		$$subscribe_selectedId($$invalidate(0, selectedId));
    	}

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		sourceType,
    		Button,
    		ButtonGroup,
    		selectedId,
    		$sourceType,
    		$selectedId
    	});

    	$$self.$inject_state = $$props => {
    		if ("selectedId" in $$props) $$subscribe_selectedId($$invalidate(0, selectedId = $$props.selectedId));
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [selectedId, $sourceType, $selectedId, buttongroup0_selectedId_binding];
    }

    class ButtonGroup_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$l, create_fragment$l, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ButtonGroup_1",
    			options,
    			id: create_fragment$l.name
    		});
    	}
    }

    /* docs_src/components/Card.svelte generated by Svelte v3.38.2 */
    const file$k = "docs_src/components/Card.svelte";

    // (8:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$4(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t15;
    	let tr2;
    	let td4;
    	let t17;
    	let td5;
    	let t19;
    	let td6;
    	let t20;
    	let td7;
    	let t22;
    	let tr3;
    	let td8;
    	let t24;
    	let td9;
    	let t26;
    	let td10;
    	let t27;
    	let td11;
    	let t28;
    	let tr4;
    	let td12;
    	let t30;
    	let td13;
    	let t32;
    	let td14;
    	let t33;
    	let td15;
    	let t34;
    	let a;
    	let t36;
    	let t37;
    	let tr5;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_4$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			td3.textContent = "Card specific classes: card--small-media & card--small-media--reverse";
    			t15 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "url";
    			t17 = space();
    			td5 = element("td");
    			td5.textContent = "string";
    			t19 = space();
    			td6 = element("td");
    			t20 = space();
    			td7 = element("td");
    			td7.textContent = "Converts the Card into a clickable link";
    			t22 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "style";
    			t24 = space();
    			td9 = element("td");
    			td9.textContent = "string";
    			t26 = space();
    			td10 = element("td");
    			t27 = space();
    			td11 = element("td");
    			t28 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "theme";
    			t30 = space();
    			td13 = element("td");
    			td13.textContent = "'darkmode' | 'lightmode'";
    			t32 = space();
    			td14 = element("td");
    			t33 = space();
    			td15 = element("td");
    			t34 = text("See ");
    			a = element("a");
    			a.textContent = "Data Theme";
    			t36 = text(" for doc");
    			t37 = space();
    			tr5 = element("tr");
    			add_location(th0, file$k, 15, 8, 352);
    			add_location(th1, file$k, 16, 8, 379);
    			add_location(th2, file$k, 17, 8, 401);
    			add_location(th3, file$k, 18, 8, 432);
    			add_location(tr0, file$k, 14, 6, 339);
    			add_location(thead, file$k, 13, 4, 325);
    			add_location(td0, file$k, 23, 8, 509);
    			add_location(td1, file$k, 24, 8, 536);
    			add_location(td2, file$k, 25, 8, 560);
    			add_location(td3, file$k, 26, 8, 575);
    			add_location(tr1, file$k, 22, 6, 496);
    			add_location(td4, file$k, 29, 8, 685);
    			add_location(td5, file$k, 30, 8, 706);
    			add_location(td6, file$k, 31, 8, 730);
    			add_location(td7, file$k, 32, 8, 745);
    			add_location(tr2, file$k, 28, 6, 672);
    			add_location(td8, file$k, 35, 8, 825);
    			add_location(td9, file$k, 36, 8, 848);
    			add_location(td10, file$k, 37, 8, 872);
    			add_location(td11, file$k, 38, 8, 887);
    			add_location(tr3, file$k, 34, 6, 812);
    			add_location(td12, file$k, 41, 8, 925);
    			add_location(td13, file$k, 42, 8, 948);
    			add_location(td14, file$k, 43, 8, 990);
    			attr_dev(a, "href", "/#/utilities/datatheme");
    			add_location(a, file$k, 44, 16, 1013);
    			add_location(td15, file$k, 44, 8, 1005);
    			add_location(tr4, file$k, 40, 6, 912);
    			add_location(tr5, file$k, 46, 6, 1092);
    			add_location(tbody, file$k, 21, 4, 482);
    			attr_dev(table, "class", "table");
    			add_location(table, file$k, 12, 2, 299);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t15);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t17);
    			append_dev(tr2, td5);
    			append_dev(tr2, t19);
    			append_dev(tr2, td6);
    			append_dev(tr2, t20);
    			append_dev(tr2, td7);
    			append_dev(tbody, t22);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t24);
    			append_dev(tr3, td9);
    			append_dev(tr3, t26);
    			append_dev(tr3, td10);
    			append_dev(tr3, t27);
    			append_dev(tr3, td11);
    			append_dev(tbody, t28);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t30);
    			append_dev(tr4, td13);
    			append_dev(tr4, t32);
    			append_dev(tr4, td14);
    			append_dev(tr4, t33);
    			append_dev(tr4, td15);
    			append_dev(td15, t34);
    			append_dev(td15, a);
    			append_dev(td15, t36);
    			append_dev(tbody, t37);
    			append_dev(tbody, tr5);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$4.name,
    		type: "if",
    		source: "(8:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (9:2) <Prism language="js">
    function create_default_slot_4$c(ctx) {
    	let t_value = `import { Card } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$c.name,
    		type: "slot",
    		source: "(9:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (55:2)
    function create_header_slot$1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Header";
    			attr_dev(div, "slot", "header");
    			add_location(div, file$k, 54, 2, 1184);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot$1.name,
    		type: "slot",
    		source: "(55:2) ",
    		ctx
    	});

    	return block;
    }

    // (56:2)
    function create_media_slot_1(ctx) {
    	let div;
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			if (img.src !== (img_src_value = "https://loremflickr.com/1280/400/cat")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			add_location(img, file$k, 56, 4, 1241);
    			attr_dev(div, "slot", "media");
    			add_location(div, file$k, 55, 2, 1218);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_media_slot_1.name,
    		type: "slot",
    		source: "(56:2) ",
    		ctx
    	});

    	return block;
    }

    // (59:2)
    function create_content_slot_1$3(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Content";
    			attr_dev(div, "slot", "content");
    			add_location(div, file$k, 58, 2, 1310);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_1$3.name,
    		type: "slot",
    		source: "(59:2) ",
    		ctx
    	});

    	return block;
    }

    // (60:2)
    function create_footer_slot$1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Footer";
    			attr_dev(div, "slot", "footer");
    			add_location(div, file$k, 59, 2, 1346);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_footer_slot$1.name,
    		type: "slot",
    		source: "(60:2) ",
    		ctx
    	});

    	return block;
    }

    // (74:0) {:else}
    function create_else_block_1$5(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$5.name,
    		type: "else",
    		source: "(74:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (63:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$6(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$h] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$6.name,
    		type: "if",
    		source: "(63:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (75:2) <Prism language="html">
    function create_default_slot_3$d(ctx) {
    	let t_value = `<div class="card">
  <div class="card-header"></div>
  <div class="card-media">
    <img src="" alt="">
  </div>
  <div class="card-content"></div>
  <div class="card-footer"></div>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$d.name,
    		type: "slot",
    		source: "(75:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (64:2) <Prism language="html">
    function create_default_slot_2$h(ctx) {
    	let t_value = `<Card>
  <div slot="header"></div>
  <div slot="media">
    <img src="" alt="" />
  </div>
  <div slot="content"></div>
  <div slot="footer"></div>
</Card>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$h.name,
    		type: "slot",
    		source: "(64:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (90:2)
    function create_media_slot(ctx) {
    	let div;
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			if (img.src !== (img_src_value = "https://loremflickr.com/250/120/dog")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			add_location(img, file$k, 90, 4, 1969);
    			attr_dev(div, "slot", "media");
    			add_location(div, file$k, 89, 2, 1946);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_media_slot.name,
    		type: "slot",
    		source: "(90:2) ",
    		ctx
    	});

    	return block;
    }

    // (93:2)
    function create_content_slot$5(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Content";
    			attr_dev(div, "slot", "content");
    			add_location(div, file$k, 92, 2, 2037);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot$5.name,
    		type: "slot",
    		source: "(93:2) ",
    		ctx
    	});

    	return block;
    }

    // (105:0) {:else}
    function create_else_block$7(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$i] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$7.name,
    		type: "else",
    		source: "(105:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (96:0) {#if $sourceType === 'svelte'}
    function create_if_block$7(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$i] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$7.name,
    		type: "if",
    		source: "(96:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (106:2) <Prism language="html">
    function create_default_slot_1$i(ctx) {
    	let t_value = `<div class="card card--small-media">
  <div class="card-media">
    <img src="" alt="" />
  </div>
  <div class="card-content"></div>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$i.name,
    		type: "slot",
    		source: "(106:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (97:2) <Prism language="html">
    function create_default_slot$i(ctx) {
    	let t_value = `<Card className="card--small-media">
  <div slot="media">
    <img src="" alt="" />
  </div>
  <div slot="content"></div>
</Card>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$i.name,
    		type: "slot",
    		source: "(97:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$k(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let card0;
    	let t5;
    	let current_block_type_index;
    	let if_block1;
    	let t6;
    	let h31;
    	let t8;
    	let card1;
    	let t9;
    	let current_block_type_index_1;
    	let if_block2;
    	let if_block2_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_2$4(ctx);

    	card0 = new Card({
    			props: {
    				className: "margin-l--b",
    				$$slots: {
    					footer: [create_footer_slot$1],
    					content: [create_content_slot_1$3],
    					media: [create_media_slot_1],
    					header: [create_header_slot$1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_1$6, create_else_block_1$5];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	card1 = new Card({
    			props: {
    				className: "card--small-media margin-l--b",
    				$$slots: {
    					content: [create_content_slot$5],
    					media: [create_media_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block$7, create_else_block$7];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Card";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Card slots";
    			t4 = space();
    			create_component(card0.$$.fragment);
    			t5 = space();
    			if_block1.c();
    			t6 = space();
    			h31 = element("h3");
    			h31.textContent = "Small media card";
    			t8 = space();
    			create_component(card1.$$.fragment);
    			t9 = space();
    			if_block2.c();
    			if_block2_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$k, 5, 0, 137);
    			add_location(h30, file$k, 51, 0, 1130);
    			add_location(h31, file$k, 86, 0, 1868);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t5, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t9, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, if_block2_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_2$4(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t6.parentNode, t6);
    			}

    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(card0.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(card1.$$.fragment, local);
    			transition_in(if_block2);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(card0.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(card1.$$.fragment, local);
    			transition_out(if_block2);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t5);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t8);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t9);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(if_block2_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$k.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$k($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Card", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, sourceType, Card, $sourceType });
    	return [$sourceType];
    }

    class Card_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$k, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card_1",
    			options,
    			id: create_fragment$k.name
    		});
    	}
    }

    /* docs_src/components/FormElement.svelte generated by Svelte v3.38.2 */
    const file$j = "docs_src/components/FormElement.svelte";

    // (8:0) {#if $sourceType === 'svelte'}
    function create_if_block_5(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_11$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(8:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (9:2) <Prism language="js">
    function create_default_slot_11$2(ctx) {
    	let t_value = `import { FormElement } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$2.name,
    		type: "slot",
    		source: "(9:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (26:0) {:else}
    function create_else_block_4(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_10$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_4.name,
    		type: "else",
    		source: "(26:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (20:0) {#if $sourceType === 'svelte'}
    function create_if_block_4$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_9$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$1.name,
    		type: "if",
    		source: "(20:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (27:2) <Prism language="html">
    function create_default_slot_10$3(ctx) {
    	let t_value = `FormElement er ikke blevet opdateret til HTML endnu` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$3.name,
    		type: "slot",
    		source: "(27:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:2) <Prism language="html">
    function create_default_slot_9$3(ctx) {
    	let t_value = `<FormElement inputtype="text" size="small" label="" />
<FormElement inputtype="text" label="" />
<FormElement inputtype="text" size="large" label="" />` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$3.name,
    		type: "slot",
    		source: "(21:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (40:0) {:else}
    function create_else_block_3$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_8$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_3$1.name,
    		type: "else",
    		source: "(40:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (36:0) {#if $sourceType === 'svelte'}
    function create_if_block_3$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_7$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$1.name,
    		type: "if",
    		source: "(36:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (41:2) <Prism language="html">
    function create_default_slot_8$5(ctx) {
    	let t_value = `FormElement er ikke blevet opdateret til HTML endnu` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$5.name,
    		type: "slot",
    		source: "(41:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (37:2) <Prism language="html">
    function create_default_slot_7$5(ctx) {
    	let t_value = `<FormElement inputtype="number" label="" />` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$5.name,
    		type: "slot",
    		source: "(37:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (48:0) <FormElement inputtype="select" label="Select">
    function create_default_slot_6$8(ctx) {
    	let option0;
    	let t1;
    	let option1;

    	const block = {
    		c: function create() {
    			option0 = element("option");
    			option0.textContent = "Option 1";
    			t1 = space();
    			option1 = element("option");
    			option1.textContent = "Option 2";
    			option0.__value = "option1";
    			option0.value = option0.__value;
    			add_location(option0, file$j, 48, 2, 1287);
    			option1.__value = "option2";
    			option1.value = option1.__value;
    			add_location(option1, file$j, 49, 2, 1331);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, option0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, option1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(option0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(option1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$8.name,
    		type: "slot",
    		source: "(48:0) <FormElement inputtype=\\\"select\\\" label=\\\"Select\\\">",
    		ctx
    	});

    	return block;
    }

    // (60:0) {:else}
    function create_else_block_2$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_5$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2$1.name,
    		type: "else",
    		source: "(60:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (53:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$3.name,
    		type: "if",
    		source: "(53:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (61:2) <Prism language="html">
    function create_default_slot_5$9(ctx) {
    	let t_value = `FormElement er ikke blevet opdateret til HTML endnu` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$9.name,
    		type: "slot",
    		source: "(61:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (54:2) <Prism language="html">
    function create_default_slot_4$b(ctx) {
    	let t_value = `<FormElement inputtype="select" label="">
  <option value="option1"></option>
  <option value="option2"></option>
</FormElement>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$b.name,
    		type: "slot",
    		source: "(54:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (76:0) {:else}
    function create_else_block_1$4(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$4.name,
    		type: "else",
    		source: "(76:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (71:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$5(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$g] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$5.name,
    		type: "if",
    		source: "(71:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (77:2) <Prism language="html">
    function create_default_slot_3$c(ctx) {
    	let t_value = `FormElement er ikke blevet opdateret til HTML endnu` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$c.name,
    		type: "slot",
    		source: "(77:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (72:2) <Prism language="html">
    function create_default_slot_2$g(ctx) {
    	let t_value = `<FormElement inputtype="checkbox" label="" />
<FormElement inputtype="radio" label="" bind:group={group} value={1} />` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$g.name,
    		type: "slot",
    		source: "(72:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (90:0) {:else}
    function create_else_block$6(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$h] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$6.name,
    		type: "else",
    		source: "(90:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (86:0) {#if $sourceType === 'svelte'}
    function create_if_block$6(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$h] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(86:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (91:2) <Prism language="html">
    function create_default_slot_1$h(ctx) {
    	let t_value = `FormElement er ikke blevet opdateret til HTML endnu` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$h.name,
    		type: "slot",
    		source: "(91:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (87:2) <Prism language="html">
    function create_default_slot$h(ctx) {
    	let t_value = `<FormElement inputtype="textarea" label="" />` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$h.name,
    		type: "slot",
    		source: "(87:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$j(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let formelement0;
    	let t5;
    	let formelement1;
    	let t6;
    	let formelement2;
    	let t7;
    	let current_block_type_index;
    	let if_block1;
    	let t8;
    	let h31;
    	let t10;
    	let formelement3;
    	let t11;
    	let current_block_type_index_1;
    	let if_block2;
    	let t12;
    	let h32;
    	let t14;
    	let formelement4;
    	let t15;
    	let current_block_type_index_2;
    	let if_block3;
    	let t16;
    	let h33;
    	let t18;
    	let formelement5;
    	let t19;
    	let formelement6;
    	let t20;
    	let current_block_type_index_3;
    	let if_block4;
    	let t21;
    	let h34;
    	let t23;
    	let formelement7;
    	let t24;
    	let current_block_type_index_4;
    	let if_block5;
    	let if_block5_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_5(ctx);

    	formelement0 = new FormElement({
    			props: {
    				inputtype: "text",
    				size: "small",
    				label: "input size small"
    			},
    			$$inline: true
    		});

    	formelement1 = new FormElement({
    			props: {
    				inputtype: "text",
    				label: "input size medium (standard)"
    			},
    			$$inline: true
    		});

    	formelement2 = new FormElement({
    			props: {
    				inputtype: "text",
    				size: "large",
    				label: "input size large"
    			},
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_4$1, create_else_block_4];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	formelement3 = new FormElement({
    			props: {
    				inputtype: "number",
    				label: "Noget tal indhold her"
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block_3$1, create_else_block_3$1];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	formelement4 = new FormElement({
    			props: {
    				inputtype: "select",
    				label: "Select",
    				$$slots: { default: [create_default_slot_6$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_2 = [create_if_block_2$3, create_else_block_2$1];
    	const if_blocks_2 = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_2 = select_block_type_2(ctx);
    	if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);

    	formelement5 = new FormElement({
    			props: { inputtype: "checkbox", label: "Checkox" },
    			$$inline: true
    		});

    	formelement6 = new FormElement({
    			props: {
    				inputtype: "radio",
    				label: "Radio",
    				value: 1
    			},
    			$$inline: true
    		});

    	const if_block_creators_3 = [create_if_block_1$5, create_else_block_1$4];
    	const if_blocks_3 = [];

    	function select_block_type_3(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_3 = select_block_type_3(ctx);
    	if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);

    	formelement7 = new FormElement({
    			props: { inputtype: "textarea", label: "Textarea" },
    			$$inline: true
    		});

    	const if_block_creators_4 = [create_if_block$6, create_else_block$6];
    	const if_blocks_4 = [];

    	function select_block_type_4(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_4 = select_block_type_4(ctx);
    	if_block5 = if_blocks_4[current_block_type_index_4] = if_block_creators_4[current_block_type_index_4](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Form Element";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Text input";
    			t4 = space();
    			create_component(formelement0.$$.fragment);
    			t5 = space();
    			create_component(formelement1.$$.fragment);
    			t6 = space();
    			create_component(formelement2.$$.fragment);
    			t7 = space();
    			if_block1.c();
    			t8 = space();
    			h31 = element("h3");
    			h31.textContent = "Number input";
    			t10 = space();
    			create_component(formelement3.$$.fragment);
    			t11 = space();
    			if_block2.c();
    			t12 = space();
    			h32 = element("h3");
    			h32.textContent = "Select";
    			t14 = space();
    			create_component(formelement4.$$.fragment);
    			t15 = space();
    			if_block3.c();
    			t16 = space();
    			h33 = element("h3");
    			h33.textContent = "Checkbox and radio";
    			t18 = space();
    			create_component(formelement5.$$.fragment);
    			t19 = space();
    			create_component(formelement6.$$.fragment);
    			t20 = space();
    			if_block4.c();
    			t21 = space();
    			h34 = element("h3");
    			h34.textContent = "Textarea";
    			t23 = space();
    			create_component(formelement7.$$.fragment);
    			t24 = space();
    			if_block5.c();
    			if_block5_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$j, 5, 0, 144);
    			add_location(h30, file$j, 13, 0, 325);
    			add_location(h31, file$j, 31, 0, 899);
    			add_location(h32, file$j, 45, 0, 1220);
    			add_location(h33, file$j, 65, 0, 1706);
    			add_location(h34, file$j, 81, 0, 2153);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(formelement0, target, anchor);
    			insert_dev(target, t5, anchor);
    			mount_component(formelement1, target, anchor);
    			insert_dev(target, t6, anchor);
    			mount_component(formelement2, target, anchor);
    			insert_dev(target, t7, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t10, anchor);
    			mount_component(formelement3, target, anchor);
    			insert_dev(target, t11, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, t12, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t14, anchor);
    			mount_component(formelement4, target, anchor);
    			insert_dev(target, t15, anchor);
    			if_blocks_2[current_block_type_index_2].m(target, anchor);
    			insert_dev(target, t16, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t18, anchor);
    			mount_component(formelement5, target, anchor);
    			insert_dev(target, t19, anchor);
    			mount_component(formelement6, target, anchor);
    			insert_dev(target, t20, anchor);
    			if_blocks_3[current_block_type_index_3].m(target, anchor);
    			insert_dev(target, t21, anchor);
    			insert_dev(target, h34, anchor);
    			insert_dev(target, t23, anchor);
    			mount_component(formelement7, target, anchor);
    			insert_dev(target, t24, anchor);
    			if_blocks_4[current_block_type_index_4].m(target, anchor);
    			insert_dev(target, if_block5_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_5(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t8.parentNode, t8);
    			}

    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(t12.parentNode, t12);
    			}

    			const formelement4_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				formelement4_changes.$$scope = { dirty, ctx };
    			}

    			formelement4.$set(formelement4_changes);
    			let previous_block_index_2 = current_block_type_index_2;
    			current_block_type_index_2 = select_block_type_2(ctx);

    			if (current_block_type_index_2 !== previous_block_index_2) {
    				group_outros();

    				transition_out(if_blocks_2[previous_block_index_2], 1, 1, () => {
    					if_blocks_2[previous_block_index_2] = null;
    				});

    				check_outros();
    				if_block3 = if_blocks_2[current_block_type_index_2];

    				if (!if_block3) {
    					if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
    					if_block3.c();
    				}

    				transition_in(if_block3, 1);
    				if_block3.m(t16.parentNode, t16);
    			}

    			let previous_block_index_3 = current_block_type_index_3;
    			current_block_type_index_3 = select_block_type_3(ctx);

    			if (current_block_type_index_3 !== previous_block_index_3) {
    				group_outros();

    				transition_out(if_blocks_3[previous_block_index_3], 1, 1, () => {
    					if_blocks_3[previous_block_index_3] = null;
    				});

    				check_outros();
    				if_block4 = if_blocks_3[current_block_type_index_3];

    				if (!if_block4) {
    					if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);
    					if_block4.c();
    				}

    				transition_in(if_block4, 1);
    				if_block4.m(t21.parentNode, t21);
    			}

    			let previous_block_index_4 = current_block_type_index_4;
    			current_block_type_index_4 = select_block_type_4(ctx);

    			if (current_block_type_index_4 !== previous_block_index_4) {
    				group_outros();

    				transition_out(if_blocks_4[previous_block_index_4], 1, 1, () => {
    					if_blocks_4[previous_block_index_4] = null;
    				});

    				check_outros();
    				if_block5 = if_blocks_4[current_block_type_index_4];

    				if (!if_block5) {
    					if_block5 = if_blocks_4[current_block_type_index_4] = if_block_creators_4[current_block_type_index_4](ctx);
    					if_block5.c();
    				}

    				transition_in(if_block5, 1);
    				if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(formelement0.$$.fragment, local);
    			transition_in(formelement1.$$.fragment, local);
    			transition_in(formelement2.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(formelement3.$$.fragment, local);
    			transition_in(if_block2);
    			transition_in(formelement4.$$.fragment, local);
    			transition_in(if_block3);
    			transition_in(formelement5.$$.fragment, local);
    			transition_in(formelement6.$$.fragment, local);
    			transition_in(if_block4);
    			transition_in(formelement7.$$.fragment, local);
    			transition_in(if_block5);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(formelement0.$$.fragment, local);
    			transition_out(formelement1.$$.fragment, local);
    			transition_out(formelement2.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(formelement3.$$.fragment, local);
    			transition_out(if_block2);
    			transition_out(formelement4.$$.fragment, local);
    			transition_out(if_block3);
    			transition_out(formelement5.$$.fragment, local);
    			transition_out(formelement6.$$.fragment, local);
    			transition_out(if_block4);
    			transition_out(formelement7.$$.fragment, local);
    			transition_out(if_block5);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			destroy_component(formelement0, detaching);
    			if (detaching) detach_dev(t5);
    			destroy_component(formelement1, detaching);
    			if (detaching) detach_dev(t6);
    			destroy_component(formelement2, detaching);
    			if (detaching) detach_dev(t7);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t10);
    			destroy_component(formelement3, detaching);
    			if (detaching) detach_dev(t11);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t14);
    			destroy_component(formelement4, detaching);
    			if (detaching) detach_dev(t15);
    			if_blocks_2[current_block_type_index_2].d(detaching);
    			if (detaching) detach_dev(t16);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t18);
    			destroy_component(formelement5, detaching);
    			if (detaching) detach_dev(t19);
    			destroy_component(formelement6, detaching);
    			if (detaching) detach_dev(t20);
    			if_blocks_3[current_block_type_index_3].d(detaching);
    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(h34);
    			if (detaching) detach_dev(t23);
    			destroy_component(formelement7, detaching);
    			if (detaching) detach_dev(t24);
    			if_blocks_4[current_block_type_index_4].d(detaching);
    			if (detaching) detach_dev(if_block5_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$j.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$j($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("FormElement", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FormElement> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		sourceType,
    		FormElement,
    		$sourceType
    	});

    	return [$sourceType];
    }

    class FormElement_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$j, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FormElement_1",
    			options,
    			id: create_fragment$j.name
    		});
    	}
    }

    const iconnames = ['angledown', 'angleleft', 'angleright', 'angleup', 'article', 'at', 'check', 'clock', 'creditcard', 'ebplus_icon', 'ebplus_sort', 'envelope', 'figcaptionpin', 'gallery', 'headphones', 'headset', 'historyregular', 'lockold', 'lock', 'medielogin', 'menubars', 'mitebregular', 'mitebsolid', 'newspaper', 'phone', 'play', 'rss', 'smartphone', 'starregular', 'tagregular', 'tagsolid', 'tagsregular', 'tagssolid', 'toggleoff', 'toggleon', 'video'];

    /* docs_src/components/Icon.svelte generated by Svelte v3.38.2 */
    const file$i = "docs_src/components/Icon.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (9:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$2(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t15;
    	let tr2;
    	let td4;
    	let t16;
    	let badge;
    	let t17;
    	let td5;
    	let t19;
    	let td6;
    	let t20;
    	let td7;
    	let t22;
    	let tr3;
    	let td8;
    	let t24;
    	let td9;
    	let t26;
    	let td10;
    	let t28;
    	let td11;
    	let t30;
    	let tr4;
    	let td12;
    	let t32;
    	let td13;
    	let t34;
    	let td14;
    	let t36;
    	let td15;
    	let t38;
    	let tr5;
    	let td16;
    	let t40;
    	let td17;
    	let t42;
    	let td18;
    	let t44;
    	let td19;
    	let t46;
    	let tr6;
    	let td20;
    	let t48;
    	let td21;
    	let t50;
    	let td22;
    	let t51;
    	let td23;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_6$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge = new Badge({
    			props: {
    				type: "primary",
    				extension: "small",
    				$$slots: { default: [create_default_slot_5$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			td3.textContent = "Used to select icon if type is set to 'fa'";
    			t15 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			t16 = text("name ");
    			create_component(badge.$$.fragment);
    			t17 = space();
    			td5 = element("td");
    			td5.textContent = "IconTypes";
    			t19 = space();
    			td6 = element("td");
    			t20 = space();
    			td7 = element("td");
    			td7.textContent = "Only names listed beneath are valid";
    			t22 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "flipped";
    			t24 = space();
    			td9 = element("td");
    			td9.textContent = "boolean";
    			t26 = space();
    			td10 = element("td");
    			td10.textContent = "false";
    			t28 = space();
    			td11 = element("td");
    			td11.textContent = "Flip the icon horizontally";
    			t30 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "type";
    			t32 = space();
    			td13 = element("td");
    			td13.textContent = "'svg' | 'fa'";
    			t34 = space();
    			td14 = element("td");
    			td14.textContent = "svg";
    			t36 = space();
    			td15 = element("td");
    			td15.textContent = "Use EB svg icons or FontAwesome icons";
    			t38 = space();
    			tr5 = element("tr");
    			td16 = element("td");
    			td16.textContent = "width";
    			t40 = space();
    			td17 = element("td");
    			td17.textContent = "number";
    			t42 = space();
    			td18 = element("td");
    			td18.textContent = "36";
    			t44 = space();
    			td19 = element("td");
    			td19.textContent = "The widthof the icon in pixels. Only on 'svg' mode";
    			t46 = space();
    			tr6 = element("tr");
    			td20 = element("td");
    			td20.textContent = "style";
    			t48 = space();
    			td21 = element("td");
    			td21.textContent = "string";
    			t50 = space();
    			td22 = element("td");
    			t51 = space();
    			td23 = element("td");
    			td23.textContent = "Custom styling. Only on 'svg' mode";
    			add_location(th0, file$i, 16, 8, 443);
    			add_location(th1, file$i, 17, 8, 470);
    			add_location(th2, file$i, 18, 8, 492);
    			add_location(th3, file$i, 19, 8, 523);
    			add_location(tr0, file$i, 15, 6, 430);
    			add_location(thead, file$i, 14, 4, 416);
    			add_location(td0, file$i, 24, 8, 600);
    			add_location(td1, file$i, 25, 8, 627);
    			add_location(td2, file$i, 26, 8, 651);
    			add_location(td3, file$i, 27, 8, 666);
    			add_location(tr1, file$i, 23, 6, 587);
    			add_location(td4, file$i, 30, 8, 749);
    			add_location(td5, file$i, 31, 8, 828);
    			add_location(td6, file$i, 32, 8, 855);
    			add_location(td7, file$i, 33, 8, 870);
    			add_location(tr2, file$i, 29, 6, 736);
    			add_location(td8, file$i, 36, 8, 946);
    			add_location(td9, file$i, 37, 8, 971);
    			add_location(td10, file$i, 38, 8, 996);
    			add_location(td11, file$i, 39, 8, 1019);
    			add_location(tr3, file$i, 35, 6, 933);
    			add_location(td12, file$i, 42, 8, 1086);
    			add_location(td13, file$i, 43, 8, 1108);
    			add_location(td14, file$i, 44, 8, 1138);
    			add_location(td15, file$i, 45, 8, 1159);
    			add_location(tr4, file$i, 41, 6, 1073);
    			add_location(td16, file$i, 48, 8, 1237);
    			add_location(td17, file$i, 49, 8, 1260);
    			add_location(td18, file$i, 50, 8, 1284);
    			add_location(td19, file$i, 51, 8, 1304);
    			add_location(tr5, file$i, 47, 6, 1224);
    			add_location(td20, file$i, 54, 8, 1395);
    			add_location(td21, file$i, 55, 8, 1418);
    			add_location(td22, file$i, 56, 8, 1442);
    			add_location(td23, file$i, 57, 8, 1457);
    			add_location(tr6, file$i, 53, 6, 1382);
    			add_location(tbody, file$i, 22, 4, 573);
    			attr_dev(table, "class", "table");
    			add_location(table, file$i, 13, 2, 390);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t15);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(td4, t16);
    			mount_component(badge, td4, null);
    			append_dev(tr2, t17);
    			append_dev(tr2, td5);
    			append_dev(tr2, t19);
    			append_dev(tr2, td6);
    			append_dev(tr2, t20);
    			append_dev(tr2, td7);
    			append_dev(tbody, t22);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t24);
    			append_dev(tr3, td9);
    			append_dev(tr3, t26);
    			append_dev(tr3, td10);
    			append_dev(tr3, t28);
    			append_dev(tr3, td11);
    			append_dev(tbody, t30);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t32);
    			append_dev(tr4, td13);
    			append_dev(tr4, t34);
    			append_dev(tr4, td14);
    			append_dev(tr4, t36);
    			append_dev(tr4, td15);
    			append_dev(tbody, t38);
    			append_dev(tbody, tr5);
    			append_dev(tr5, td16);
    			append_dev(tr5, t40);
    			append_dev(tr5, td17);
    			append_dev(tr5, t42);
    			append_dev(tr5, td18);
    			append_dev(tr5, t44);
    			append_dev(tr5, td19);
    			append_dev(tbody, t46);
    			append_dev(tbody, tr6);
    			append_dev(tr6, td20);
    			append_dev(tr6, t48);
    			append_dev(tr6, td21);
    			append_dev(tr6, t50);
    			append_dev(tr6, td22);
    			append_dev(tr6, t51);
    			append_dev(tr6, td23);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			transition_in(badge.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			transition_out(badge.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    			destroy_component(badge);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$2.name,
    		type: "if",
    		source: "(9:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (10:2) <Prism language="js">
    function create_default_slot_6$7(ctx) {
    	let t_value = `import { Icon } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$7.name,
    		type: "slot",
    		source: "(10:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (31:17) <Badge type="primary" extension="small">
    function create_default_slot_5$8(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("required");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$8.name,
    		type: "slot",
    		source: "(31:17) <Badge type=\\\"primary\\\" extension=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (68:4) <Card className="flex-align--center flex-justify--center margin-s padding-m">
    function create_default_slot_4$a(ctx) {
    	let icon;
    	let t0;
    	let small;
    	let t1_value = /*name*/ ctx[1] + "";
    	let t1;
    	let t2;
    	let current;

    	icon = new Icon({
    			props: {
    				name: /*name*/ ctx[1],
    				className: "margin-s",
    				style: "width: 36px; height: 36px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    			t0 = space();
    			small = element("small");
    			t1 = text(t1_value);
    			t2 = space();
    			add_location(small, file$i, 69, 6, 1814);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, small, anchor);
    			append_dev(small, t1);
    			insert_dev(target, t2, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(small);
    			if (detaching) detach_dev(t2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$a.name,
    		type: "slot",
    		source: "(68:4) <Card className=\\\"flex-align--center flex-justify--center margin-s padding-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (67:2) {#each iconnames as name}
    function create_each_block$2(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "flex-align--center flex-justify--center margin-s padding-m",
    				$$slots: { default: [create_default_slot_4$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(67:2) {#each iconnames as name}",
    		ctx
    	});

    	return block;
    }

    // (79:0) {:else}
    function create_else_block_1$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$3.name,
    		type: "else",
    		source: "(79:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (75:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$4(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$f] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$4.name,
    		type: "if",
    		source: "(75:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (80:2) <Prism language="html">
    function create_default_slot_3$b(ctx) {
    	let t_value = `<svg viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>
</svg>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$b.name,
    		type: "slot",
    		source: "(80:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (76:2) <Prism language="html">
    function create_default_slot_2$f(ctx) {
    	let t_value = `<Icon name="icon_name" />` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$f.name,
    		type: "slot",
    		source: "(76:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (95:0) {:else}
    function create_else_block$5(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$g] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$5.name,
    		type: "else",
    		source: "(95:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (91:0) {#if $sourceType === 'svelte'}
    function create_if_block$5(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$g] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(91:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (96:2) <Prism language="html">
    function create_default_slot_1$g(ctx) {
    	let t_value = `<i class="fas fa-snowplow"></i>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$g.name,
    		type: "slot",
    		source: "(96:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (92:2) <Prism language="html">
    function create_default_slot$g(ctx) {
    	let t_value = `<Icon type="fa" className="fas fa-snowplow" />` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$g.name,
    		type: "slot",
    		source: "(92:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$i(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let div;
    	let t5;
    	let current_block_type_index;
    	let if_block1;
    	let t6;
    	let h31;
    	let t7;
    	let a;
    	let t9;
    	let icon;
    	let t10;
    	let current_block_type_index_1;
    	let if_block2;
    	let if_block2_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_2$2(ctx);
    	let each_value = iconnames;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const if_block_creators = [create_if_block_1$4, create_else_block_1$3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	icon = new Icon({
    			props: { type: "fa", className: "fas fa-snowplow" },
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block$5, create_else_block$5];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Icon library";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Der findes følgende svg ikoner";
    			t4 = space();
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t5 = space();
    			if_block1.c();
    			t6 = space();
    			h31 = element("h3");
    			t7 = text("Det er også muligt at bruge ikoner fra ");
    			a = element("a");
    			a.textContent = "Font Awesome";
    			t9 = space();
    			create_component(icon.$$.fragment);
    			t10 = space();
    			if_block2.c();
    			if_block2_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$i, 6, 0, 220);
    			add_location(h30, file$i, 63, 0, 1544);
    			attr_dev(div, "class", "flex flex-wrap--wrap");
    			add_location(div, file$i, 65, 0, 1585);
    			attr_dev(a, "href", "https://fontawesome.com/");
    			attr_dev(a, "target", "_blank");
    			add_location(a, file$i, 86, 43, 2185);
    			add_location(h31, file$i, 86, 0, 2142);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			insert_dev(target, t5, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h31, anchor);
    			append_dev(h31, t7);
    			append_dev(h31, a);
    			insert_dev(target, t9, anchor);
    			mount_component(icon, target, anchor);
    			insert_dev(target, t10, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, if_block2_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_2$2(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (dirty & /*iconnames*/ 0) {
    				each_value = iconnames;
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t6.parentNode, t6);
    			}

    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(if_block1);
    			transition_in(icon.$$.fragment, local);
    			transition_in(if_block2);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(if_block1);
    			transition_out(icon.$$.fragment, local);
    			transition_out(if_block2);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t5);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t9);
    			destroy_component(icon, detaching);
    			if (detaching) detach_dev(t10);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(if_block2_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$i.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$i($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Icon", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		sourceType,
    		Badge,
    		Card,
    		Icon,
    		iconnames,
    		$sourceType
    	});

    	return [$sourceType];
    }

    class Icon_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$i, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon_1",
    			options,
    			id: create_fragment$i.name
    		});
    	}
    }

    /* docs_src/components/HorizontalScroll.svelte generated by Svelte v3.38.2 */
    const file$h = "docs_src/components/HorizontalScroll.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	return child_ctx;
    }

    // (45:0) {:else}
    function create_else_block_1$2(ctx) {
    	let p;
    	let t1;
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "HorizontalScroll kræver javascript som findes under list-v2 på eb";
    			t1 = space();
    			create_component(prism.$$.fragment);
    			add_location(p, file$h, 45, 2, 1053);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$2.name,
    		type: "else",
    		source: "(45:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (22:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$3(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_3$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			add_location(th0, file$h, 29, 8, 777);
    			add_location(th1, file$h, 30, 8, 804);
    			add_location(th2, file$h, 31, 8, 826);
    			add_location(th3, file$h, 32, 8, 857);
    			add_location(tr0, file$h, 28, 6, 764);
    			add_location(thead, file$h, 27, 4, 750);
    			add_location(td0, file$h, 37, 8, 934);
    			add_location(td1, file$h, 38, 8, 961);
    			add_location(td2, file$h, 39, 8, 985);
    			add_location(td3, file$h, 40, 8, 1000);
    			add_location(tr1, file$h, 36, 6, 921);
    			add_location(tbody, file$h, 35, 4, 907);
    			attr_dev(table, "class", "table");
    			add_location(table, file$h, 26, 2, 724);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$3.name,
    		type: "if",
    		source: "(22:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (47:2) <Prism language="html">
    function create_default_slot_4$9(ctx) {
    	let t_value = `ekstrabladet/ekstrabladet-publication/src/main/webapp/WEB-INF/jsp/components/list-v2/horizontalscroll.ts` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$9.name,
    		type: "slot",
    		source: "(47:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (23:2) <Prism language="js">
    function create_default_slot_3$a(ctx) {
    	let t_value = `import { HorizontalScroll } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$a.name,
    		type: "slot",
    		source: "(23:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (52:2) {#each $articles as article}
    function create_each_block$1(ctx) {
    	let articlecard;
    	let current;
    	const articlecard_spread_levels = [/*article*/ ctx[3], { className: "margin-s" }, { style: "width: 215px;" }];
    	let articlecard_props = {};

    	for (let i = 0; i < articlecard_spread_levels.length; i += 1) {
    		articlecard_props = assign(articlecard_props, articlecard_spread_levels[i]);
    	}

    	articlecard = new ArticleCard({ props: articlecard_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(articlecard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(articlecard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const articlecard_changes = (dirty & /*$articles*/ 2)
    			? get_spread_update(articlecard_spread_levels, [
    					get_spread_object(/*article*/ ctx[3]),
    					articlecard_spread_levels[1],
    					articlecard_spread_levels[2]
    				])
    			: {};

    			articlecard.$set(articlecard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(articlecard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(articlecard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(articlecard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(52:2) {#each $articles as article}",
    		ctx
    	});

    	return block;
    }

    // (51:0) <HorizontalScroll>
    function create_default_slot_2$e(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*$articles*/ ctx[1];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$articles*/ 2) {
    				each_value = /*$articles*/ ctx[1];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$e.name,
    		type: "slot",
    		source: "(51:0) <HorizontalScroll>",
    		ctx
    	});

    	return block;
    }

    // (63:0) {:else}
    function create_else_block$4(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$f] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$4.name,
    		type: "else",
    		source: "(63:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (57:0) {#if $sourceType === 'svelte'}
    function create_if_block$4(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$f] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(57:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (64:2) <Prism language="html">
    function create_default_slot_1$f(ctx) {
    	let t_value = `<div id="example-id" class="horizontal-scroll-container position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-right"></i>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">
    ...
  </div>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$f.name,
    		type: "slot",
    		source: "(64:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (58:2) <Prism language="html">
    function create_default_slot$f(ctx) {
    	let t_value = `<HorizontalScroll>
  ...
</HorizontalScroll>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$f.name,
    		type: "slot",
    		source: "(58:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let h1;
    	let t1;
    	let current_block_type_index;
    	let if_block0;
    	let t2;
    	let horizontalscroll;
    	let t3;
    	let current_block_type_index_1;
    	let if_block1;
    	let if_block1_anchor;
    	let current;
    	const if_block_creators = [create_if_block_1$3, create_else_block_1$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	horizontalscroll = new HorizontalScroll({
    			props: {
    				$$slots: { default: [create_default_slot_2$e] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block$4, create_else_block$4];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Horizontal Scroll";
    			t1 = space();
    			if_block0.c();
    			t2 = space();
    			create_component(horizontalscroll.$$.fragment);
    			t3 = space();
    			if_block1.c();
    			if_block1_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$h, 20, 0, 538);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(horizontalscroll, target, anchor);
    			insert_dev(target, t3, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(t2.parentNode, t2);
    			}

    			const horizontalscroll_changes = {};

    			if (dirty & /*$$scope, $articles*/ 66) {
    				horizontalscroll_changes.$$scope = { dirty, ctx };
    			}

    			horizontalscroll.$set(horizontalscroll_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks_1[current_block_type_index_1];

    				if (!if_block1) {
    					if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(horizontalscroll.$$.fragment, local);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(horizontalscroll.$$.fragment, local);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(horizontalscroll, detaching);
    			if (detaching) detach_dev(t3);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(if_block1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let $sourceType;
    	let $articles;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HorizontalScroll", slots, []);
    	let articles = writable([]);
    	validate_store(articles, "articles");
    	component_subscribe($$self, articles, value => $$invalidate(1, $articles = value));

    	articles.update(art => {
    		for (let i = 0; i < 2; i++) {
    			art.push(rdmArticleData(640, 360));
    		}

    		return art;
    	});

    	setInterval(
    		() => {
    			articles.update(art => {
    				art.push(rdmArticleData(640, 360));
    				return art;
    			});
    		},
    		3000
    	);

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HorizontalScroll> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		rdmArticleData,
    		sourceType,
    		ArticleCard,
    		HorizontalScroll,
    		writable,
    		articles,
    		$sourceType,
    		$articles
    	});

    	$$self.$inject_state = $$props => {
    		if ("articles" in $$props) $$invalidate(2, articles = $$props.articles);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [$sourceType, $articles, articles];
    }

    class HorizontalScroll_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HorizontalScroll_1",
    			options,
    			id: create_fragment$h.name
    		});
    	}
    }

    /* docs_src/components/Spinner.svelte generated by Svelte v3.38.2 */
    const file$g = "docs_src/components/Spinner.svelte";

    // (8:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$2(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t14;
    	let td3;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_2$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "isLoading";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "boolean";
    			t12 = space();
    			td2 = element("td");
    			td2.textContent = "false";
    			t14 = space();
    			td3 = element("td");
    			td3.textContent = "Will only show if set to 'true'";
    			add_location(th0, file$g, 15, 8, 361);
    			add_location(th1, file$g, 16, 8, 388);
    			add_location(th2, file$g, 17, 8, 410);
    			add_location(th3, file$g, 18, 8, 441);
    			add_location(tr0, file$g, 14, 6, 348);
    			add_location(thead, file$g, 13, 4, 334);
    			add_location(td0, file$g, 23, 8, 518);
    			add_location(td1, file$g, 24, 8, 545);
    			add_location(td2, file$g, 25, 8, 570);
    			add_location(td3, file$g, 26, 8, 593);
    			add_location(tr1, file$g, 22, 6, 505);
    			add_location(tbody, file$g, 21, 4, 491);
    			attr_dev(table, "class", "table");
    			add_location(table, file$g, 12, 2, 308);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t14);
    			append_dev(tr1, td3);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$2.name,
    		type: "if",
    		source: "(8:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (9:2) <Prism language="js">
    function create_default_slot_2$d(ctx) {
    	let t_value = `import { Spinner } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$d.name,
    		type: "slot",
    		source: "(9:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (41:0) {:else}
    function create_else_block$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$e] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$3.name,
    		type: "else",
    		source: "(41:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (37:0) {#if $sourceType === 'svelte'}
    function create_if_block$3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$e] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(37:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (42:2) <Prism language="html">
    function create_default_slot_1$e(ctx) {
    	let t_value = `<div class="loader flex flex--center">
  <i class="fas fa-circle bounce bounce1" />
  <i class="fas fa-circle bounce bounce2" />
  <i class="fas fa-circle bounce bounce3" />
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$e.name,
    		type: "slot",
    		source: "(42:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (38:2) <Prism language="html">
    function create_default_slot$e(ctx) {
    	let t_value = `<Spinner isLoading={true}/>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$e.name,
    		type: "slot",
    		source: "(38:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$g(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let div;
    	let spinner;
    	let t3;
    	let current_block_type_index;
    	let if_block1;
    	let if_block1_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_1$2(ctx);

    	spinner = new Spinner({
    			props: { isLoading: true },
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block$3, create_else_block$3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Spinner";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			div = element("div");
    			create_component(spinner.$$.fragment);
    			t3 = space();
    			if_block1.c();
    			if_block1_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$g, 5, 0, 140);
    			attr_dev(div, "class", "padding-l");
    			add_location(div, file$g, 32, 0, 677);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, div, anchor);
    			mount_component(spinner, div, null);
    			insert_dev(target, t3, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_1$2(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(spinner.$$.fragment, local);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(spinner.$$.fragment, local);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div);
    			destroy_component(spinner);
    			if (detaching) detach_dev(t3);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$g($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Spinner", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Spinner> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, sourceType, Spinner, $sourceType });
    	return [$sourceType];
    }

    class Spinner_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Spinner_1",
    			options,
    			id: create_fragment$g.name
    		});
    	}
    }

    /* docs_src/components/Tabs.svelte generated by Svelte v3.38.2 */
    const file$f = "docs_src/components/Tabs.svelte";

    // (110:0) {:else}
    function create_else_block$2(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Tabs er en ren Svelte component.";
    			add_location(p, file$f, 110, 2, 2586);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(110:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (12:0) {#if $sourceType === 'svelte'}
    function create_if_block$2(ctx) {
    	let prism0;
    	let t0;
    	let h20;
    	let t2;
    	let tabs0;
    	let t3;
    	let prism1;
    	let t4;
    	let h21;
    	let t6;
    	let tabs1;
    	let t7;
    	let prism2;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_21] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabs0 = new Tabs({
    			props: {
    				$$slots: { default: [create_default_slot_10$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_9$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabs1 = new Tabs({
    			props: {
    				$$slots: { default: [create_default_slot_1$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t0 = space();
    			h20 = element("h2");
    			h20.textContent = "Style: Tabs";
    			t2 = space();
    			create_component(tabs0.$$.fragment);
    			t3 = space();
    			create_component(prism1.$$.fragment);
    			t4 = space();
    			h21 = element("h2");
    			h21.textContent = "Style: Pillnavigation";
    			t6 = space();
    			create_component(tabs1.$$.fragment);
    			t7 = space();
    			create_component(prism2.$$.fragment);
    			attr_dev(h20, "class", "margin-xl--t margin-m--b");
    			add_location(h20, file$f, 16, 2, 494);
    			attr_dev(h21, "class", "margin-xl--t margin-m--b");
    			add_location(h21, file$f, 63, 2, 1445);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, h20, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(tabs0, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h21, anchor);
    			insert_dev(target, t6, anchor);
    			mount_component(tabs1, target, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const tabs0_changes = {};

    			if (dirty & /*$$scope, content3, content2, content1*/ 135) {
    				tabs0_changes.$$scope = { dirty, ctx };
    			}

    			tabs0.$set(tabs0_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    			const tabs1_changes = {};

    			if (dirty & /*$$scope, content3, content2, content1*/ 135) {
    				tabs1_changes.$$scope = { dirty, ctx };
    			}

    			tabs1.$set(tabs1_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(tabs0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(tabs1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(tabs0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(tabs1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(h20);
    			if (detaching) detach_dev(t2);
    			destroy_component(tabs0, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h21);
    			if (detaching) detach_dev(t6);
    			destroy_component(tabs1, detaching);
    			if (detaching) detach_dev(t7);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(12:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (13:2) <Prism language="js">
    function create_default_slot_21(ctx) {
    	let t_value = `import { Tabs, Tab, TabContent, TabList } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_21.name,
    		type: "slot",
    		source: "(13:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:6) <Tab>
    function create_default_slot_20(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_20.name,
    		type: "slot",
    		source: "(21:6) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (22:6) <Tab>
    function create_default_slot_19(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab 2 Long Text Bla Bla");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_19.name,
    		type: "slot",
    		source: "(22:6) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (23:6) <Tab>
    function create_default_slot_18(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab 3 Long Text Bla Bla");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_18.name,
    		type: "slot",
    		source: "(23:6) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (20:4) <TabList>
    function create_default_slot_17(ctx) {
    	let tab0;
    	let t0;
    	let tab1;
    	let t1;
    	let tab2;
    	let current;

    	tab0 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_20] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tab1 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_19] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tab2 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_18] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(tab0.$$.fragment);
    			t0 = space();
    			create_component(tab1.$$.fragment);
    			t1 = space();
    			create_component(tab2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(tab0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(tab1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(tab2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tab0_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tab0_changes.$$scope = { dirty, ctx };
    			}

    			tab0.$set(tab0_changes);
    			const tab1_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tab1_changes.$$scope = { dirty, ctx };
    			}

    			tab1.$set(tab1_changes);
    			const tab2_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tab2_changes.$$scope = { dirty, ctx };
    			}

    			tab2.$set(tab2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tab0.$$.fragment, local);
    			transition_in(tab1.$$.fragment, local);
    			transition_in(tab2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tab0.$$.fragment, local);
    			transition_out(tab1.$$.fragment, local);
    			transition_out(tab2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tab0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(tab1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(tab2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_17.name,
    		type: "slot",
    		source: "(20:4) <TabList>",
    		ctx
    	});

    	return block;
    }

    // (26:6) <Card className="margin-m--t">
    function create_default_slot_16(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*content1*/ ctx[0], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*content1*/ 1) html_tag.p(/*content1*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_16.name,
    		type: "slot",
    		source: "(26:6) <Card className=\\\"margin-m--t\\\">",
    		ctx
    	});

    	return block;
    }

    // (27:8)
    function create_header_slot_5(ctx) {
    	let h2;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Content 1";
    			attr_dev(h2, "slot", "header");
    			add_location(h2, file$f, 26, 8, 754);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot_5.name,
    		type: "slot",
    		source: "(27:8) ",
    		ctx
    	});

    	return block;
    }

    // (25:4) <TabContent>
    function create_default_slot_15(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "margin-m--t",
    				$$slots: {
    					header: [create_header_slot_5],
    					default: [create_default_slot_16]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope, content1*/ 129) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15.name,
    		type: "slot",
    		source: "(25:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (32:6) <Card className="margin-m--t">
    function create_default_slot_14$1(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*content2*/ ctx[1], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*content2*/ 2) html_tag.p(/*content2*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14$1.name,
    		type: "slot",
    		source: "(32:6) <Card className=\\\"margin-m--t\\\">",
    		ctx
    	});

    	return block;
    }

    // (33:8)
    function create_header_slot_4(ctx) {
    	let h2;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Content 2";
    			attr_dev(h2, "slot", "header");
    			add_location(h2, file$f, 32, 8, 906);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot_4.name,
    		type: "slot",
    		source: "(33:8) ",
    		ctx
    	});

    	return block;
    }

    // (31:4) <TabContent>
    function create_default_slot_13$1(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "margin-m--t",
    				$$slots: {
    					header: [create_header_slot_4],
    					default: [create_default_slot_14$1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope, content2*/ 130) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13$1.name,
    		type: "slot",
    		source: "(31:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (38:6) <Card className="margin-m--t">
    function create_default_slot_12$1(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*content3*/ ctx[2], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*content3*/ 4) html_tag.p(/*content3*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$1.name,
    		type: "slot",
    		source: "(38:6) <Card className=\\\"margin-m--t\\\">",
    		ctx
    	});

    	return block;
    }

    // (39:8)
    function create_header_slot_3(ctx) {
    	let h2;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Content 3";
    			attr_dev(h2, "slot", "header");
    			add_location(h2, file$f, 38, 8, 1058);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot_3.name,
    		type: "slot",
    		source: "(39:8) ",
    		ctx
    	});

    	return block;
    }

    // (37:4) <TabContent>
    function create_default_slot_11$1(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "margin-m--t",
    				$$slots: {
    					header: [create_header_slot_3],
    					default: [create_default_slot_12$1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope, content3*/ 132) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$1.name,
    		type: "slot",
    		source: "(37:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (19:2) <Tabs>
    function create_default_slot_10$2(ctx) {
    	let tablist;
    	let t0;
    	let tabcontent0;
    	let t1;
    	let tabcontent1;
    	let t2;
    	let tabcontent2;
    	let current;

    	tablist = new TabList({
    			props: {
    				$$slots: { default: [create_default_slot_17] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent0 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_15] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent1 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_13$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent2 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_11$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(tablist.$$.fragment);
    			t0 = space();
    			create_component(tabcontent0.$$.fragment);
    			t1 = space();
    			create_component(tabcontent1.$$.fragment);
    			t2 = space();
    			create_component(tabcontent2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(tablist, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(tabcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(tabcontent1, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(tabcontent2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tablist_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tablist_changes.$$scope = { dirty, ctx };
    			}

    			tablist.$set(tablist_changes);
    			const tabcontent0_changes = {};

    			if (dirty & /*$$scope, content1*/ 129) {
    				tabcontent0_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent0.$set(tabcontent0_changes);
    			const tabcontent1_changes = {};

    			if (dirty & /*$$scope, content2*/ 130) {
    				tabcontent1_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent1.$set(tabcontent1_changes);
    			const tabcontent2_changes = {};

    			if (dirty & /*$$scope, content3*/ 132) {
    				tabcontent2_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent2.$set(tabcontent2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tablist.$$.fragment, local);
    			transition_in(tabcontent0.$$.fragment, local);
    			transition_in(tabcontent1.$$.fragment, local);
    			transition_in(tabcontent2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tablist.$$.fragment, local);
    			transition_out(tabcontent0.$$.fragment, local);
    			transition_out(tabcontent1.$$.fragment, local);
    			transition_out(tabcontent2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tablist, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(tabcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(tabcontent1, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(tabcontent2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$2.name,
    		type: "slot",
    		source: "(19:2) <Tabs>",
    		ctx
    	});

    	return block;
    }

    // (45:2) <Prism language="html">
    function create_default_slot_9$2(ctx) {
    	let t_value = `<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
  <TabContent>
    Content 1
  </TabContent>
  <TabContent>
    Content 2
  </TabContent>
  <TabContent>
    Content 3
  </TabContent>
</Tabs>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$2.name,
    		type: "slot",
    		source: "(45:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (68:6) <Tab>
    function create_default_slot_8$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$4.name,
    		type: "slot",
    		source: "(68:6) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (69:6) <Tab>
    function create_default_slot_7$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$4.name,
    		type: "slot",
    		source: "(69:6) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (70:6) <Tab>
    function create_default_slot_6$6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Tab 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$6.name,
    		type: "slot",
    		source: "(70:6) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (67:4) <TabList type="pillnavigation">
    function create_default_slot_5$7(ctx) {
    	let tab0;
    	let t0;
    	let tab1;
    	let t1;
    	let tab2;
    	let current;

    	tab0 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_8$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tab1 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_7$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tab2 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_6$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(tab0.$$.fragment);
    			t0 = space();
    			create_component(tab1.$$.fragment);
    			t1 = space();
    			create_component(tab2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(tab0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(tab1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(tab2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tab0_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tab0_changes.$$scope = { dirty, ctx };
    			}

    			tab0.$set(tab0_changes);
    			const tab1_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tab1_changes.$$scope = { dirty, ctx };
    			}

    			tab1.$set(tab1_changes);
    			const tab2_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tab2_changes.$$scope = { dirty, ctx };
    			}

    			tab2.$set(tab2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tab0.$$.fragment, local);
    			transition_in(tab1.$$.fragment, local);
    			transition_in(tab2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tab0.$$.fragment, local);
    			transition_out(tab1.$$.fragment, local);
    			transition_out(tab2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tab0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(tab1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(tab2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$7.name,
    		type: "slot",
    		source: "(67:4) <TabList type=\\\"pillnavigation\\\">",
    		ctx
    	});

    	return block;
    }

    // (74:8)
    function create_header_slot_2(ctx) {
    	let h2;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Content 1";
    			attr_dev(h2, "slot", "header");
    			add_location(h2, file$f, 73, 8, 1701);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot_2.name,
    		type: "slot",
    		source: "(74:8) ",
    		ctx
    	});

    	return block;
    }

    // (75:8)
    function create_content_slot_2$1(ctx) {
    	let div;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "slot", "content");
    			attr_dev(div, "contenteditable", "true");
    			if (/*content1*/ ctx[0] === void 0) add_render_callback(() => /*div_input_handler*/ ctx[4].call(div));
    			add_location(div, file$f, 74, 8, 1742);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (/*content1*/ ctx[0] !== void 0) {
    				div.innerHTML = /*content1*/ ctx[0];
    			}

    			if (!mounted) {
    				dispose = listen_dev(div, "input", /*div_input_handler*/ ctx[4]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*content1*/ 1 && /*content1*/ ctx[0] !== div.innerHTML) {
    				div.innerHTML = /*content1*/ ctx[0];
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_2$1.name,
    		type: "slot",
    		source: "(75:8) ",
    		ctx
    	});

    	return block;
    }

    // (72:4) <TabContent>
    function create_default_slot_4$8(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "margin-m--t",
    				$$slots: {
    					content: [create_content_slot_2$1],
    					header: [create_header_slot_2]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope, content1*/ 129) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$8.name,
    		type: "slot",
    		source: "(72:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (80:8)
    function create_header_slot_1(ctx) {
    	let h2;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Content 2";
    			attr_dev(h2, "slot", "header");
    			add_location(h2, file$f, 79, 8, 1908);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot_1.name,
    		type: "slot",
    		source: "(80:8) ",
    		ctx
    	});

    	return block;
    }

    // (81:8)
    function create_content_slot_1$2(ctx) {
    	let div;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "slot", "content");
    			attr_dev(div, "contenteditable", "true");
    			if (/*content2*/ ctx[1] === void 0) add_render_callback(() => /*div_input_handler_1*/ ctx[5].call(div));
    			add_location(div, file$f, 80, 8, 1949);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (/*content2*/ ctx[1] !== void 0) {
    				div.innerHTML = /*content2*/ ctx[1];
    			}

    			if (!mounted) {
    				dispose = listen_dev(div, "input", /*div_input_handler_1*/ ctx[5]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*content2*/ 2 && /*content2*/ ctx[1] !== div.innerHTML) {
    				div.innerHTML = /*content2*/ ctx[1];
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_1$2.name,
    		type: "slot",
    		source: "(81:8) ",
    		ctx
    	});

    	return block;
    }

    // (78:4) <TabContent>
    function create_default_slot_3$9(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "margin-m--t",
    				$$slots: {
    					content: [create_content_slot_1$2],
    					header: [create_header_slot_1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope, content2*/ 130) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$9.name,
    		type: "slot",
    		source: "(78:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (86:8)
    function create_header_slot(ctx) {
    	let h2;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Content 3";
    			attr_dev(h2, "slot", "header");
    			add_location(h2, file$f, 85, 8, 2115);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot.name,
    		type: "slot",
    		source: "(86:8) ",
    		ctx
    	});

    	return block;
    }

    // (87:8)
    function create_content_slot$4(ctx) {
    	let div;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "slot", "content");
    			attr_dev(div, "contenteditable", "true");
    			if (/*content3*/ ctx[2] === void 0) add_render_callback(() => /*div_input_handler_2*/ ctx[6].call(div));
    			add_location(div, file$f, 86, 8, 2156);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (/*content3*/ ctx[2] !== void 0) {
    				div.innerHTML = /*content3*/ ctx[2];
    			}

    			if (!mounted) {
    				dispose = listen_dev(div, "input", /*div_input_handler_2*/ ctx[6]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*content3*/ 4 && /*content3*/ ctx[2] !== div.innerHTML) {
    				div.innerHTML = /*content3*/ ctx[2];
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot$4.name,
    		type: "slot",
    		source: "(87:8) ",
    		ctx
    	});

    	return block;
    }

    // (84:4) <TabContent>
    function create_default_slot_2$c(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				className: "margin-m--t",
    				$$slots: {
    					content: [create_content_slot$4],
    					header: [create_header_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = {};

    			if (dirty & /*$$scope, content3*/ 132) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$c.name,
    		type: "slot",
    		source: "(84:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (66:2) <Tabs>
    function create_default_slot_1$d(ctx) {
    	let tablist;
    	let t0;
    	let tabcontent0;
    	let t1;
    	let tabcontent1;
    	let t2;
    	let tabcontent2;
    	let current;

    	tablist = new TabList({
    			props: {
    				type: "pillnavigation",
    				$$slots: { default: [create_default_slot_5$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent0 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_4$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent1 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_3$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent2 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(tablist.$$.fragment);
    			t0 = space();
    			create_component(tabcontent0.$$.fragment);
    			t1 = space();
    			create_component(tabcontent1.$$.fragment);
    			t2 = space();
    			create_component(tabcontent2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(tablist, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(tabcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(tabcontent1, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(tabcontent2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tablist_changes = {};

    			if (dirty & /*$$scope*/ 128) {
    				tablist_changes.$$scope = { dirty, ctx };
    			}

    			tablist.$set(tablist_changes);
    			const tabcontent0_changes = {};

    			if (dirty & /*$$scope, content1*/ 129) {
    				tabcontent0_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent0.$set(tabcontent0_changes);
    			const tabcontent1_changes = {};

    			if (dirty & /*$$scope, content2*/ 130) {
    				tabcontent1_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent1.$set(tabcontent1_changes);
    			const tabcontent2_changes = {};

    			if (dirty & /*$$scope, content3*/ 132) {
    				tabcontent2_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent2.$set(tabcontent2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tablist.$$.fragment, local);
    			transition_in(tabcontent0.$$.fragment, local);
    			transition_in(tabcontent1.$$.fragment, local);
    			transition_in(tabcontent2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tablist.$$.fragment, local);
    			transition_out(tabcontent0.$$.fragment, local);
    			transition_out(tabcontent1.$$.fragment, local);
    			transition_out(tabcontent2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tablist, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(tabcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(tabcontent1, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(tabcontent2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$d.name,
    		type: "slot",
    		source: "(66:2) <Tabs>",
    		ctx
    	});

    	return block;
    }

    // (92:2) <Prism language="html">
    function create_default_slot$d(ctx) {
    	let t_value = `<Tabs>
  <TabList type="pillnavigation">
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
  <TabContent>
    Content 1
  </TabContent>
  <TabContent>
    Content 2
  </TabContent>
  <TabContent>
    Content 3
  </TabContent>
</Tabs>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$d.name,
    		type: "slot",
    		source: "(92:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$f(ctx) {
    	let h1;
    	let t1;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$2, create_else_block$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[3] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Tabs";
    			t1 = space();
    			if_block.c();
    			if_block_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$f, 9, 0, 306);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(3, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tabs", slots, []);
    	let content1 = rdmParagraphs();
    	let content2 = rdmParagraphs();
    	let content3 = rdmParagraphs();
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tabs> was created with unknown prop '${key}'`);
    	});

    	function div_input_handler() {
    		content1 = this.innerHTML;
    		$$invalidate(0, content1);
    	}

    	function div_input_handler_1() {
    		content2 = this.innerHTML;
    		$$invalidate(1, content2);
    	}

    	function div_input_handler_2() {
    		content3 = this.innerHTML;
    		$$invalidate(2, content3);
    	}

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		rdmParagraphs,
    		sourceType,
    		Card,
    		Tabs,
    		Tab,
    		TabContent,
    		TabList,
    		content1,
    		content2,
    		content3,
    		$sourceType
    	});

    	$$self.$inject_state = $$props => {
    		if ("content1" in $$props) $$invalidate(0, content1 = $$props.content1);
    		if ("content2" in $$props) $$invalidate(1, content2 = $$props.content2);
    		if ("content3" in $$props) $$invalidate(2, content3 = $$props.content3);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		content1,
    		content2,
    		content3,
    		$sourceType,
    		div_input_handler,
    		div_input_handler_1,
    		div_input_handler_2
    	];
    }

    class Tabs_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tabs_1",
    			options,
    			id: create_fragment$f.name
    		});
    	}
    }

    /* docs_src/components/Toggler.svelte generated by Svelte v3.38.2 */
    const file$e = "docs_src/components/Toggler.svelte";
    const get_default_slot_changes_7 = dirty => ({});
    const get_default_slot_context_7 = ctx => ({ slot: "on" });
    const get_default_slot_changes_6 = dirty => ({});
    const get_default_slot_context_6 = ctx => ({ slot: "off" });
    const get_default_slot_changes_5 = dirty => ({});
    const get_default_slot_context_5 = ctx => ({ slot: "on" });
    const get_default_slot_changes_4 = dirty => ({});
    const get_default_slot_context_4 = ctx => ({ slot: "off" });
    const get_default_slot_changes_3 = dirty => ({});
    const get_default_slot_context_3 = ctx => ({ slot: "on" });
    const get_default_slot_changes_2 = dirty => ({});
    const get_default_slot_context_2 = ctx => ({ slot: "off" });
    const get_default_slot_changes_1 = dirty => ({});
    const get_default_slot_context_1 = ctx => ({ slot: "on" });
    const get_default_slot_changes = dirty => ({});
    const get_default_slot_context = ctx => ({ slot: "off" });

    // (8:0) {#if $sourceType === 'svelte'}
    function create_if_block_4(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let tr2;
    	let td4;
    	let t16;
    	let td5;
    	let t18;
    	let td6;
    	let t20;
    	let td7;
    	let t22;
    	let tr3;
    	let td8;
    	let t24;
    	let td9;
    	let t26;
    	let td10;
    	let t28;
    	let td11;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_8$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "defaultState";
    			t16 = space();
    			td5 = element("td");
    			td5.textContent = "boolean";
    			t18 = space();
    			td6 = element("td");
    			td6.textContent = "true";
    			t20 = space();
    			td7 = element("td");
    			td7.textContent = "Should the toggler be on or of on mount";
    			t22 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "isSwitch";
    			t24 = space();
    			td9 = element("td");
    			td9.textContent = "boolean";
    			t26 = space();
    			td10 = element("td");
    			td10.textContent = "false";
    			t28 = space();
    			td11 = element("td");
    			td11.textContent = "Convents into a swicth, see example further down";
    			add_location(th0, file$e, 15, 8, 367);
    			add_location(th1, file$e, 16, 8, 394);
    			add_location(th2, file$e, 17, 8, 416);
    			add_location(th3, file$e, 18, 8, 447);
    			add_location(tr0, file$e, 14, 6, 354);
    			add_location(thead, file$e, 13, 4, 340);
    			add_location(td0, file$e, 23, 8, 524);
    			add_location(td1, file$e, 24, 8, 551);
    			add_location(td2, file$e, 25, 8, 575);
    			add_location(td3, file$e, 26, 8, 590);
    			add_location(tr1, file$e, 22, 6, 511);
    			add_location(td4, file$e, 29, 8, 628);
    			add_location(td5, file$e, 30, 8, 658);
    			add_location(td6, file$e, 31, 8, 683);
    			add_location(td7, file$e, 32, 8, 705);
    			add_location(tr2, file$e, 28, 6, 615);
    			add_location(td8, file$e, 35, 8, 785);
    			add_location(td9, file$e, 36, 8, 811);
    			add_location(td10, file$e, 37, 8, 836);
    			add_location(td11, file$e, 38, 8, 859);
    			add_location(tr3, file$e, 34, 6, 772);
    			add_location(tbody, file$e, 21, 4, 497);
    			attr_dev(table, "class", "table");
    			add_location(table, file$e, 12, 2, 314);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t14);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t16);
    			append_dev(tr2, td5);
    			append_dev(tr2, t18);
    			append_dev(tr2, td6);
    			append_dev(tr2, t20);
    			append_dev(tr2, td7);
    			append_dev(tbody, t22);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t24);
    			append_dev(tr3, td9);
    			append_dev(tr3, t26);
    			append_dev(tr3, td10);
    			append_dev(tr3, t28);
    			append_dev(tr3, td11);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(8:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (9:2) <Prism language="js">
    function create_default_slot_8$3(ctx) {
    	let t_value = `import { Toggler } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$3.name,
    		type: "slot",
    		source: "(9:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (48:18) on
    function fallback_block_7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("on");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_7.name,
    		type: "fallback",
    		source: "(48:18) on",
    		ctx
    	});

    	return block;
    }

    // (48:2)
    function create_on_slot_3(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_1);
    	const default_slot_or_fallback = default_slot || fallback_block_7(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_1, get_default_slot_context_1);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot_3.name,
    		type: "slot",
    		source: "(48:2) ",
    		ctx
    	});

    	return block;
    }

    // (49:19) off
    function fallback_block_6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("off");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_6.name,
    		type: "fallback",
    		source: "(49:19) off",
    		ctx
    	});

    	return block;
    }

    // (49:2)
    function create_off_slot_3(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context);
    	const default_slot_or_fallback = default_slot || fallback_block_6(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes, get_default_slot_context);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot_3.name,
    		type: "slot",
    		source: "(49:2) ",
    		ctx
    	});

    	return block;
    }

    // (59:0) {:else}
    function create_else_block_3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_7$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_3.name,
    		type: "else",
    		source: "(59:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (52:0) {#if $sourceType === 'svelte'}
    function create_if_block_3(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_6$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(52:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (60:2) <Prism language="html">
    function create_default_slot_7$3(ctx) {
    	let t_value = `<label class="toggle">
  <input type="checkbox" hidden class="toggle-input" />
  <span class="toggle toggle-on">on</span>
  <span class="toggle toggle-off">off</span>
</label>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$3.name,
    		type: "slot",
    		source: "(60:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (53:2) <Prism language="html">
    function create_default_slot_6$5(ctx) {
    	let t_value = `<Toggler>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$5.name,
    		type: "slot",
    		source: "(53:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (72:18)
    function fallback_block_5(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				name: "angle-down",
    				style: "width: 24px; height: 24px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_5.name,
    		type: "fallback",
    		source: "(72:18)      ",
    		ctx
    	});

    	return block;
    }

    // (72:2)
    function create_on_slot_2(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_3);
    	const default_slot_or_fallback = default_slot || fallback_block_5(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_3, get_default_slot_context_3);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot_2.name,
    		type: "slot",
    		source: "(72:2) ",
    		ctx
    	});

    	return block;
    }

    // (75:19)
    function fallback_block_4(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				name: "angle-up",
    				style: "width: 24px; height: 24px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_4.name,
    		type: "fallback",
    		source: "(75:19)      ",
    		ctx
    	});

    	return block;
    }

    // (75:2)
    function create_off_slot_2(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_2);
    	const default_slot_or_fallback = default_slot || fallback_block_4(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_2, get_default_slot_context_2);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot_2.name,
    		type: "slot",
    		source: "(75:2) ",
    		ctx
    	});

    	return block;
    }

    // (91:0) {:else}
    function create_else_block_2(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_5$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2.name,
    		type: "else",
    		source: "(91:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (80:0) {#if $sourceType === 'svelte'}
    function create_if_block_2$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(80:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (92:2) <Prism language="html">
    function create_default_slot_5$6(ctx) {
    	let t_value = `<label class="toggle">
  <input type="checkbox" hidden class="toggle-input" />
  <i class="toggle toggle-on fas fa-angle-down"></i>
  <i class="toggle toggle-off fas fa-angle-up"></i>
</label>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$6.name,
    		type: "slot",
    		source: "(92:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (81:2) <Prism language="html">
    function create_default_slot_4$7(ctx) {
    	let t_value = `<Toggler>
  <slot slot="on">
    <Icon name="angle-down" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angle-up" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$7.name,
    		type: "slot",
    		source: "(81:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (104:18) on
    function fallback_block_3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("on");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_3.name,
    		type: "fallback",
    		source: "(104:18) on",
    		ctx
    	});

    	return block;
    }

    // (104:2)
    function create_on_slot_1(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_5);
    	const default_slot_or_fallback = default_slot || fallback_block_3(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_5, get_default_slot_context_5);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot_1.name,
    		type: "slot",
    		source: "(104:2) ",
    		ctx
    	});

    	return block;
    }

    // (105:19) off
    function fallback_block_2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("off");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_2.name,
    		type: "fallback",
    		source: "(105:19) off",
    		ctx
    	});

    	return block;
    }

    // (105:2)
    function create_off_slot_1(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_4);
    	const default_slot_or_fallback = default_slot || fallback_block_2(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_4, get_default_slot_context_4);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot_1.name,
    		type: "slot",
    		source: "(105:2) ",
    		ctx
    	});

    	return block;
    }

    // (115:0) {:else}
    function create_else_block_1$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$1.name,
    		type: "else",
    		source: "(115:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (108:0) {#if $sourceType === 'svelte'}
    function create_if_block_1$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(108:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (116:2) <Prism language="html">
    function create_default_slot_3$8(ctx) {
    	let t_value = `Sadly, Svelte only` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$8.name,
    		type: "slot",
    		source: "(116:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (109:2) <Prism language="html">
    function create_default_slot_2$b(ctx) {
    	let t_value = `<Toggler isSwitch={true}>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$b.name,
    		type: "slot",
    		source: "(109:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (124:18) on
    function fallback_block_1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("on");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_1.name,
    		type: "fallback",
    		source: "(124:18) on",
    		ctx
    	});

    	return block;
    }

    // (124:2)
    function create_on_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_7);
    	const default_slot_or_fallback = default_slot || fallback_block_1(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_7, get_default_slot_context_7);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot.name,
    		type: "slot",
    		source: "(124:2) ",
    		ctx
    	});

    	return block;
    }

    // (125:19) off
    function fallback_block(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("off");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block.name,
    		type: "fallback",
    		source: "(125:19) off",
    		ctx
    	});

    	return block;
    }

    // (125:2)
    function create_off_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], get_default_slot_context_6);
    	const default_slot_or_fallback = default_slot || fallback_block(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, get_default_slot_changes_6, get_default_slot_context_6);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot.name,
    		type: "slot",
    		source: "(125:2) ",
    		ctx
    	});

    	return block;
    }

    // (135:0) {:else}
    function create_else_block$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(135:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (128:0) {#if $sourceType === 'svelte'}
    function create_if_block$1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(128:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (136:2) <Prism language="html">
    function create_default_slot_1$c(ctx) {
    	let t_value = `Sadly, Svelte only` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$c.name,
    		type: "slot",
    		source: "(136:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (129:2) <Prism language="html">
    function create_default_slot$c(ctx) {
    	let t_value = `<Toggler defaultState={false}>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$c.name,
    		type: "slot",
    		source: "(129:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$e(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let toggler0;
    	let t5;
    	let current_block_type_index;
    	let if_block1;
    	let t6;
    	let h31;
    	let t8;
    	let toggler1;
    	let t9;
    	let current_block_type_index_1;
    	let if_block2;
    	let t10;
    	let h32;
    	let t12;
    	let toggler2;
    	let t13;
    	let current_block_type_index_2;
    	let if_block3;
    	let t14;
    	let h33;
    	let t16;
    	let toggler3;
    	let t17;
    	let current_block_type_index_3;
    	let if_block4;
    	let if_block4_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_4(ctx);

    	toggler0 = new Toggler({
    			props: {
    				$$slots: {
    					off: [create_off_slot_3],
    					on: [create_on_slot_3]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_3, create_else_block_3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	toggler1 = new Toggler({
    			props: {
    				$$slots: {
    					off: [create_off_slot_2],
    					on: [create_on_slot_2]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block_2$1, create_else_block_2];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	toggler2 = new Toggler({
    			props: {
    				isSwitch: true,
    				$$slots: {
    					off: [create_off_slot_1],
    					on: [create_on_slot_1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_2 = [create_if_block_1$1, create_else_block_1$1];
    	const if_blocks_2 = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_2 = select_block_type_2(ctx);
    	if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);

    	toggler3 = new Toggler({
    			props: {
    				defaultState: false,
    				$$slots: {
    					off: [create_off_slot],
    					on: [create_on_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_3 = [create_if_block$1, create_else_block$1];
    	const if_blocks_3 = [];

    	function select_block_type_3(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_3 = select_block_type_3(ctx);
    	if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Toggler";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Toggler with text";
    			t4 = space();
    			create_component(toggler0.$$.fragment);
    			t5 = space();
    			if_block1.c();
    			t6 = space();
    			h31 = element("h3");
    			h31.textContent = "Toggler with icon";
    			t8 = space();
    			create_component(toggler1.$$.fragment);
    			t9 = space();
    			if_block2.c();
    			t10 = space();
    			h32 = element("h3");
    			h32.textContent = "Toggle as switch";
    			t12 = space();
    			create_component(toggler2.$$.fragment);
    			t13 = space();
    			if_block3.c();
    			t14 = space();
    			h33 = element("h3");
    			h33.textContent = "Set default state to off";
    			t16 = space();
    			create_component(toggler3.$$.fragment);
    			t17 = space();
    			if_block4.c();
    			if_block4_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$e, 5, 0, 146);
    			add_location(h30, file$e, 44, 0, 960);
    			add_location(h31, file$e, 68, 0, 1459);
    			add_location(h32, file$e, 100, 0, 2237);
    			add_location(h33, file$e, 120, 0, 2610);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(toggler0, target, anchor);
    			insert_dev(target, t5, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(toggler1, target, anchor);
    			insert_dev(target, t9, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, t10, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t12, anchor);
    			mount_component(toggler2, target, anchor);
    			insert_dev(target, t13, anchor);
    			if_blocks_2[current_block_type_index_2].m(target, anchor);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t16, anchor);
    			mount_component(toggler3, target, anchor);
    			insert_dev(target, t17, anchor);
    			if_blocks_3[current_block_type_index_3].m(target, anchor);
    			insert_dev(target, if_block4_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_4(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			const toggler0_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				toggler0_changes.$$scope = { dirty, ctx };
    			}

    			toggler0.$set(toggler0_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t6.parentNode, t6);
    			}

    			const toggler1_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				toggler1_changes.$$scope = { dirty, ctx };
    			}

    			toggler1.$set(toggler1_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(t10.parentNode, t10);
    			}

    			const toggler2_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				toggler2_changes.$$scope = { dirty, ctx };
    			}

    			toggler2.$set(toggler2_changes);
    			let previous_block_index_2 = current_block_type_index_2;
    			current_block_type_index_2 = select_block_type_2(ctx);

    			if (current_block_type_index_2 !== previous_block_index_2) {
    				group_outros();

    				transition_out(if_blocks_2[previous_block_index_2], 1, 1, () => {
    					if_blocks_2[previous_block_index_2] = null;
    				});

    				check_outros();
    				if_block3 = if_blocks_2[current_block_type_index_2];

    				if (!if_block3) {
    					if_block3 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
    					if_block3.c();
    				}

    				transition_in(if_block3, 1);
    				if_block3.m(t14.parentNode, t14);
    			}

    			const toggler3_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				toggler3_changes.$$scope = { dirty, ctx };
    			}

    			toggler3.$set(toggler3_changes);
    			let previous_block_index_3 = current_block_type_index_3;
    			current_block_type_index_3 = select_block_type_3(ctx);

    			if (current_block_type_index_3 !== previous_block_index_3) {
    				group_outros();

    				transition_out(if_blocks_3[previous_block_index_3], 1, 1, () => {
    					if_blocks_3[previous_block_index_3] = null;
    				});

    				check_outros();
    				if_block4 = if_blocks_3[current_block_type_index_3];

    				if (!if_block4) {
    					if_block4 = if_blocks_3[current_block_type_index_3] = if_block_creators_3[current_block_type_index_3](ctx);
    					if_block4.c();
    				}

    				transition_in(if_block4, 1);
    				if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(toggler0.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(toggler1.$$.fragment, local);
    			transition_in(if_block2);
    			transition_in(toggler2.$$.fragment, local);
    			transition_in(if_block3);
    			transition_in(toggler3.$$.fragment, local);
    			transition_in(if_block4);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(toggler0.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(toggler1.$$.fragment, local);
    			transition_out(if_block2);
    			transition_out(toggler2.$$.fragment, local);
    			transition_out(if_block3);
    			transition_out(toggler3.$$.fragment, local);
    			transition_out(if_block4);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			destroy_component(toggler0, detaching);
    			if (detaching) detach_dev(t5);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t8);
    			destroy_component(toggler1, detaching);
    			if (detaching) detach_dev(t9);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t12);
    			destroy_component(toggler2, detaching);
    			if (detaching) detach_dev(t13);
    			if_blocks_2[current_block_type_index_2].d(detaching);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t16);
    			destroy_component(toggler3, detaching);
    			if (detaching) detach_dev(t17);
    			if_blocks_3[current_block_type_index_3].d(detaching);
    			if (detaching) detach_dev(if_block4_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Toggler", slots, ['default']);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Toggler> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		sourceType,
    		Icon,
    		Toggler,
    		$sourceType
    	});

    	return [$sourceType, slots, $$scope];
    }

    class Toggler_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Toggler_1",
    			options,
    			id: create_fragment$e.name
    		});
    	}
    }

    /* docs_src/components/Tooltip.svelte generated by Svelte v3.38.2 */
    const file$d = "docs_src/components/Tooltip.svelte";

    // (13:0) {#if $sourceType === 'svelte'}
    function create_if_block_2(ctx) {
    	let prism;
    	let t0;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t2;
    	let th1;
    	let t4;
    	let th2;
    	let t6;
    	let th3;
    	let t8;
    	let tbody;
    	let tr1;
    	let td0;
    	let t10;
    	let td1;
    	let t12;
    	let td2;
    	let t13;
    	let td3;
    	let t14;
    	let tr2;
    	let td4;
    	let t16;
    	let td5;
    	let t18;
    	let td6;
    	let t20;
    	let td7;
    	let t22;
    	let tr3;
    	let td8;
    	let t24;
    	let td9;
    	let t26;
    	let td10;
    	let t28;
    	let td11;
    	let t30;
    	let tr4;
    	let td12;
    	let t32;
    	let td13;
    	let t34;
    	let td14;
    	let t36;
    	let td15;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "js",
    				$$slots: { default: [create_default_slot_6$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    			t0 = space();
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop name";
    			t2 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t4 = space();
    			th2 = element("th");
    			th2.textContent = "Default value";
    			t6 = space();
    			th3 = element("th");
    			th3.textContent = "Description";
    			t8 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			td0.textContent = "className";
    			t10 = space();
    			td1 = element("td");
    			td1.textContent = "string";
    			t12 = space();
    			td2 = element("td");
    			t13 = space();
    			td3 = element("td");
    			t14 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			td4.textContent = "iconOn";
    			t16 = space();
    			td5 = element("td");
    			td5.textContent = "string";
    			t18 = space();
    			td6 = element("td");
    			td6.textContent = "'times'";
    			t20 = space();
    			td7 = element("td");
    			td7.textContent = "FontAwesome icon for when tooltip is open";
    			t22 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			td8.textContent = "iconOff";
    			t24 = space();
    			td9 = element("td");
    			td9.textContent = "string";
    			t26 = space();
    			td10 = element("td");
    			td10.textContent = "'question'";
    			t28 = space();
    			td11 = element("td");
    			td11.textContent = "FontAwesome icon for when tooltip is closed";
    			t30 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			td12.textContent = "position";
    			t32 = space();
    			td13 = element("td");
    			td13.textContent = "'left' | 'right'";
    			t34 = space();
    			td14 = element("td");
    			td14.textContent = "'left'";
    			t36 = space();
    			td15 = element("td");
    			add_location(th0, file$d, 20, 8, 472);
    			add_location(th1, file$d, 21, 8, 499);
    			add_location(th2, file$d, 22, 8, 521);
    			add_location(th3, file$d, 23, 8, 552);
    			add_location(tr0, file$d, 19, 6, 459);
    			add_location(thead, file$d, 18, 4, 445);
    			add_location(td0, file$d, 28, 8, 629);
    			add_location(td1, file$d, 29, 8, 656);
    			add_location(td2, file$d, 30, 8, 680);
    			add_location(td3, file$d, 31, 8, 695);
    			add_location(tr1, file$d, 27, 6, 616);
    			add_location(td4, file$d, 34, 8, 733);
    			add_location(td5, file$d, 35, 8, 757);
    			add_location(td6, file$d, 36, 8, 781);
    			add_location(td7, file$d, 37, 8, 806);
    			add_location(tr2, file$d, 33, 6, 720);
    			add_location(td8, file$d, 40, 8, 888);
    			add_location(td9, file$d, 41, 8, 913);
    			add_location(td10, file$d, 42, 8, 937);
    			add_location(td11, file$d, 43, 8, 965);
    			add_location(tr3, file$d, 39, 6, 875);
    			add_location(td12, file$d, 46, 8, 1049);
    			add_location(td13, file$d, 47, 8, 1075);
    			add_location(td14, file$d, 48, 8, 1109);
    			add_location(td15, file$d, 49, 8, 1133);
    			add_location(tr4, file$d, 45, 6, 1036);
    			add_location(tbody, file$d, 26, 4, 602);
    			attr_dev(table, "class", "table");
    			add_location(table, file$d, 17, 2, 419);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t2);
    			append_dev(tr0, th1);
    			append_dev(tr0, t4);
    			append_dev(tr0, th2);
    			append_dev(tr0, t6);
    			append_dev(tr0, th3);
    			append_dev(table, t8);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(tr1, t10);
    			append_dev(tr1, td1);
    			append_dev(tr1, t12);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(tbody, t14);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(tr2, t16);
    			append_dev(tr2, td5);
    			append_dev(tr2, t18);
    			append_dev(tr2, td6);
    			append_dev(tr2, t20);
    			append_dev(tr2, td7);
    			append_dev(tbody, t22);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(tr3, t24);
    			append_dev(tr3, td9);
    			append_dev(tr3, t26);
    			append_dev(tr3, td10);
    			append_dev(tr3, t28);
    			append_dev(tr3, td11);
    			append_dev(tbody, t30);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(tr4, t32);
    			append_dev(tr4, td13);
    			append_dev(tr4, t34);
    			append_dev(tr4, td14);
    			append_dev(tr4, t36);
    			append_dev(tr4, td15);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(table);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(13:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (14:2) <Prism language="js">
    function create_default_slot_6$4(ctx) {
    	let t_value = `import { Tooltip } from '@ekstra-bladet/designsystem';` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$4.name,
    		type: "slot",
    		source: "(14:2) <Prism language=\\\"js\\\">",
    		ctx
    	});

    	return block;
    }

    // (59:2) <Tooltip>
    function create_default_slot_5$5(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*Content1*/ ctx[1], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$5.name,
    		type: "slot",
    		source: "(59:2) <Tooltip>",
    		ctx
    	});

    	return block;
    }

    // (68:0) {:else}
    function create_else_block_1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(68:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (64:0) {#if $sourceType === 'svelte'}
    function create_if_block_1(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(64:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (69:2) <Prism language="html">
    function create_default_slot_4$6(ctx) {
    	let t_value = `<label class="tooltip">
  <input type="checkbox" hidden class="tooltip-input"/>
  <div class="tooltip-off">
    <i class="tooltip-toggle fas fa-question"/>
  </div>
  <div class="tooltip-on">
    <i class="tooltip-toggle fas fa-times"/>
    <div class="padding-s">
      Content
    </div>
  </div>
</label>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$6.name,
    		type: "slot",
    		source: "(69:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (65:2) <Prism language="html">
    function create_default_slot_3$7(ctx) {
    	let t_value = `<Tooltip></Tooltip>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$7.name,
    		type: "slot",
    		source: "(65:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (89:2) <Tooltip position="right" className="flex-item--center">
    function create_default_slot_2$a(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*Content2*/ ctx[2], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$a.name,
    		type: "slot",
    		source: "(89:2) <Tooltip position=\\\"right\\\" className=\\\"flex-item--center\\\">",
    		ctx
    	});

    	return block;
    }

    // (101:0) {:else}
    function create_else_block(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(101:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (94:0) {#if $sourceType === 'svelte'}
    function create_if_block(ctx) {
    	let prism;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(94:0) {#if $sourceType === 'svelte'}",
    		ctx
    	});

    	return block;
    }

    // (102:2) <Prism language="html">
    function create_default_slot_1$b(ctx) {
    	let t_value = `<div class="flex flex-justify--between">
  <h3>Header</h3>
  <label class="tooltip tooltip--right flex-item--center">
    <input type="checkbox" hidden class="tooltip-input"/>
    <div class="tooltip-off">
      <i class="tooltip-toggle fas fa-question"/>
    </div>
    <div class="tooltip-on">
      <i class="tooltip-toggle fas fa-times"/>
      <div class="padding-s">
        Content
      </div>
    </div>
  </label>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$b.name,
    		type: "slot",
    		source: "(102:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (95:2) <Prism language="html">
    function create_default_slot$b(ctx) {
    	let t_value = `<div class="flex flex-justify--between">
  <h3>Header</h3>
  <Tooltip position="right" className="flex-item--center"></Tooltip>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$b.name,
    		type: "slot",
    		source: "(95:2) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$d(ctx) {
    	let h1;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let div0;
    	let tooltip0;
    	let t5;
    	let current_block_type_index;
    	let if_block1;
    	let t6;
    	let h31;
    	let t8;
    	let div1;
    	let h32;
    	let t10;
    	let tooltip1;
    	let t11;
    	let current_block_type_index_1;
    	let if_block2;
    	let if_block2_anchor;
    	let current;
    	let if_block0 = /*$sourceType*/ ctx[0] === "svelte" && create_if_block_2(ctx);

    	tooltip0 = new Tooltip({
    			props: {
    				$$slots: { default: [create_default_slot_5$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_1, create_else_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	tooltip1 = new Tooltip({
    			props: {
    				position: "right",
    				className: "flex-item--center",
    				$$slots: { default: [create_default_slot_2$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const if_block_creators_1 = [create_if_block, create_else_block];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*$sourceType*/ ctx[0] === "svelte") return 0;
    		return 1;
    	}

    	current_block_type_index_1 = select_block_type_1(ctx);
    	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Tooltip";
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Default tooltip";
    			t4 = space();
    			div0 = element("div");
    			create_component(tooltip0.$$.fragment);
    			t5 = space();
    			if_block1.c();
    			t6 = space();
    			h31 = element("h3");
    			h31.textContent = "Tooltip i højre side";
    			t8 = space();
    			div1 = element("div");
    			h32 = element("h3");
    			h32.textContent = "Header";
    			t10 = space();
    			create_component(tooltip1.$$.fragment);
    			t11 = space();
    			if_block2.c();
    			if_block2_anchor = empty();
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$d, 10, 0, 251);
    			add_location(h30, file$d, 55, 0, 1183);
    			attr_dev(div0, "class", "flex margin-l--tb");
    			add_location(div0, file$d, 57, 0, 1209);
    			add_location(h31, file$d, 84, 0, 1759);
    			add_location(h32, file$d, 87, 2, 1864);
    			attr_dev(div1, "class", "flex flex-justify--between grid-width--small margin-l--tb");
    			add_location(div1, file$d, 86, 0, 1790);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div0, anchor);
    			mount_component(tooltip0, div0, null);
    			insert_dev(target, t5, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h32);
    			append_dev(div1, t10);
    			mount_component(tooltip1, div1, null);
    			insert_dev(target, t11, anchor);
    			if_blocks_1[current_block_type_index_1].m(target, anchor);
    			insert_dev(target, if_block2_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$sourceType*/ ctx[0] === "svelte") {
    				if (if_block0) {
    					if (dirty & /*$sourceType*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t2.parentNode, t2);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			const tooltip0_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				tooltip0_changes.$$scope = { dirty, ctx };
    			}

    			tooltip0.$set(tooltip0_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(t6.parentNode, t6);
    			}

    			const tooltip1_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				tooltip1_changes.$$scope = { dirty, ctx };
    			}

    			tooltip1.$set(tooltip1_changes);
    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 !== previous_block_index_1) {
    				group_outros();

    				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    					if_blocks_1[previous_block_index_1] = null;
    				});

    				check_outros();
    				if_block2 = if_blocks_1[current_block_type_index_1];

    				if (!if_block2) {
    					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    					if_block2.c();
    				}

    				transition_in(if_block2, 1);
    				if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(tooltip0.$$.fragment, local);
    			transition_in(if_block1);
    			transition_in(tooltip1.$$.fragment, local);
    			transition_in(if_block2);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(tooltip0.$$.fragment, local);
    			transition_out(if_block1);
    			transition_out(tooltip1.$$.fragment, local);
    			transition_out(if_block2);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div0);
    			destroy_component(tooltip0);
    			if (detaching) detach_dev(t5);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(div1);
    			destroy_component(tooltip1);
    			if (detaching) detach_dev(t11);
    			if_blocks_1[current_block_type_index_1].d(detaching);
    			if (detaching) detach_dev(if_block2_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tooltip", slots, []);
    	let Content1 = rdmParagraphs(2);
    	let Content2 = rdmParagraphs(2);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tooltip> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		rdmParagraphs,
    		sourceType,
    		Tooltip,
    		Content1,
    		Content2,
    		$sourceType
    	});

    	$$self.$inject_state = $$props => {
    		if ("Content1" in $$props) $$invalidate(1, Content1 = $$props.Content1);
    		if ("Content2" in $$props) $$invalidate(2, Content2 = $$props.Content2);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [$sourceType, Content1, Content2];
    }

    class Tooltip_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tooltip_1",
    			options,
    			id: create_fragment$d.name
    		});
    	}
    }

    /* docs_src/utilities/Animation.svelte generated by Svelte v3.38.2 */
    const file$c = "docs_src/utilities/Animation.svelte";

    // (30:8) <Tab>
    function create_default_slot_8$2(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-cubes");
    			add_location(i, file$c, 29, 13, 912);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$2.name,
    		type: "slot",
    		source: "(30:8) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (31:8) <Tab>
    function create_default_slot_7$2(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-code");
    			add_location(i, file$c, 30, 13, 958);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$2.name,
    		type: "slot",
    		source: "(31:8) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (29:6) <TabList>
    function create_default_slot_6$3(ctx) {
    	let tab0;
    	let t;
    	let tab1;
    	let current;

    	tab0 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_8$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tab1 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_7$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(tab0.$$.fragment);
    			t = space();
    			create_component(tab1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(tab0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(tab1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tab0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tab0_changes.$$scope = { dirty, ctx };
    			}

    			tab0.$set(tab0_changes);
    			const tab1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tab1_changes.$$scope = { dirty, ctx };
    			}

    			tab1.$set(tab1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tab0.$$.fragment, local);
    			transition_in(tab1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tab0.$$.fragment, local);
    			transition_out(tab1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tab0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(tab1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$3.name,
    		type: "slot",
    		source: "(29:6) <TabList>",
    		ctx
    	});

    	return block;
    }

    // (46:8) <Badge href="#" className="margin-s bg--bluedark animation-fogwave">
    function create_default_slot_5$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Bandekriminialitet");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$4.name,
    		type: "slot",
    		source: "(46:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--bluedark animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (47:8) <Badge href="#" className="margin-s bg--green animation-fogwave">
    function create_default_slot_4$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Sport");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$5.name,
    		type: "slot",
    		source: "(47:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--green animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (48:8) <Badge href="#" className="margin-s bg--greendark animation-fogwave">
    function create_default_slot_3$6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Nicklas Bendtner");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$6.name,
    		type: "slot",
    		source: "(48:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--greendark animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (34:4) <TabContent>
    function create_default_slot_2$9(ctx) {
    	let div0;
    	let articlecard;
    	let t0;
    	let div1;
    	let badge0;
    	let t1;
    	let badge1;
    	let t2;
    	let badge2;
    	let current;

    	articlecard = new ArticleCard({
    			props: {
    				className: "animation-fogwave",
    				href: /*article*/ ctx[0].href,
    				media: {
    					src: "https://via.placeholder.com/610x343&text=610x343"
    				},
    				section: /*article*/ ctx[0].section,
    				timestamp: /*article*/ ctx[0].timestamp,
    				title: /*article*/ ctx[0].title
    			},
    			$$inline: true
    		});

    	badge0 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--bluedark animation-fogwave",
    				$$slots: { default: [create_default_slot_5$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge1 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--green animation-fogwave",
    				$$slots: { default: [create_default_slot_4$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge2 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--greendark animation-fogwave",
    				$$slots: { default: [create_default_slot_3$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			create_component(articlecard.$$.fragment);
    			t0 = space();
    			div1 = element("div");
    			create_component(badge0.$$.fragment);
    			t1 = space();
    			create_component(badge1.$$.fragment);
    			t2 = space();
    			create_component(badge2.$$.fragment);
    			attr_dev(div0, "class", "flex grid-width--small");
    			add_location(div0, file$c, 34, 6, 1041);
    			attr_dev(div1, "class", "flex grid-width--small");
    			add_location(div1, file$c, 44, 6, 1385);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			mount_component(articlecard, div0, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(badge0, div1, null);
    			append_dev(div1, t1);
    			mount_component(badge1, div1, null);
    			append_dev(div1, t2);
    			mount_component(badge2, div1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const badge0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge0_changes.$$scope = { dirty, ctx };
    			}

    			badge0.$set(badge0_changes);
    			const badge1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge1_changes.$$scope = { dirty, ctx };
    			}

    			badge1.$set(badge1_changes);
    			const badge2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge2_changes.$$scope = { dirty, ctx };
    			}

    			badge2.$set(badge2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(articlecard.$$.fragment, local);
    			transition_in(badge0.$$.fragment, local);
    			transition_in(badge1.$$.fragment, local);
    			transition_in(badge2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(articlecard.$$.fragment, local);
    			transition_out(badge0.$$.fragment, local);
    			transition_out(badge1.$$.fragment, local);
    			transition_out(badge2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			destroy_component(articlecard);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div1);
    			destroy_component(badge0);
    			destroy_component(badge1);
    			destroy_component(badge2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$9.name,
    		type: "slot",
    		source: "(34:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (51:4) <TabContent>
    function create_default_slot_1$a(ctx) {
    	let prism0;
    	let t0;
    	let prism1;
    	let t1;
    	let prism2;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<ArticleCard
          className="animation-fogwave"
          href="{article.href}"
          media="{{src:'https://via.placeholder.com/610x343&text=610x343'}}"
          section="{article.section}"
          timestamp="{article.timestamp}"
          title="{article.title}"
          />`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t0 = space();
    			create_component(prism1.$$.fragment);
    			t1 = space();
    			create_component(prism2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$a.name,
    		type: "slot",
    		source: "(51:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (27:2) <Tabs>
    function create_default_slot$a(ctx) {
    	let div;
    	let tablist;
    	let t0;
    	let tabcontent0;
    	let t1;
    	let tabcontent1;
    	let current;

    	tablist = new TabList({
    			props: {
    				$$slots: { default: [create_default_slot_6$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent0 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent1 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(tablist.$$.fragment);
    			t0 = space();
    			create_component(tabcontent0.$$.fragment);
    			t1 = space();
    			create_component(tabcontent1.$$.fragment);
    			attr_dev(div, "class", "flex flex-justify--end width-1of1");
    			add_location(div, file$c, 27, 4, 835);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(tablist, div, null);
    			insert_dev(target, t0, anchor);
    			mount_component(tabcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(tabcontent1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tablist_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tablist_changes.$$scope = { dirty, ctx };
    			}

    			tablist.$set(tablist_changes);
    			const tabcontent0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tabcontent0_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent0.$set(tabcontent0_changes);
    			const tabcontent1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tabcontent1_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent1.$set(tabcontent1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tablist.$$.fragment, local);
    			transition_in(tabcontent0.$$.fragment, local);
    			transition_in(tabcontent1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tablist.$$.fragment, local);
    			transition_out(tabcontent0.$$.fragment, local);
    			transition_out(tabcontent1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(tablist);
    			if (detaching) detach_dev(t0);
    			destroy_component(tabcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(tabcontent1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$a.name,
    		type: "slot",
    		source: "(27:2) <Tabs>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$c(ctx) {
    	let div7;
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let p0;
    	let t4;
    	let code0;
    	let t6;
    	let p1;
    	let t8;
    	let p2;
    	let b;
    	let t10;
    	let code1;
    	let t12;
    	let h31;
    	let t14;
    	let tabs;
    	let t15;
    	let h32;
    	let t17;
    	let div6;
    	let div2;
    	let div0;
    	let t19;
    	let div1;
    	let t21;
    	let div5;
    	let div3;
    	let t23;
    	let div4;
    	let prism;
    	let current;

    	tabs = new Tabs({
    			props: {
    				$$slots: { default: [create_default_slot$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				source: `<component className="animation-fogwave"/></component>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div7 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Animation";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Anvendelse af animationer";
    			t3 = space();
    			p0 = element("p");
    			t4 = text("Animationer anvendes ved tilføjelse af class: ");
    			code0 = element("code");
    			code0.textContent = "className=\"animation-navnPåAnimation\"";
    			t6 = space();
    			p1 = element("p");
    			p1.textContent = "Denne class kan anvendes på tværs af vores komponenter";
    			t8 = space();
    			p2 = element("p");
    			b = element("b");
    			b.textContent = "OBS:";
    			t10 = text(" anvendes en animation direkte på et html-element skal det anvendes på følgende måde:\n    ");
    			code1 = element("code");
    			code1.textContent = "class=\"animation-navnPåAnimation\"";
    			t12 = space();
    			h31 = element("h3");
    			h31.textContent = "Eksempler på animationer";
    			t14 = space();
    			create_component(tabs.$$.fragment);
    			t15 = space();
    			h32 = element("h3");
    			h32.textContent = "Overblik over animationer";
    			t17 = space();
    			div6 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Class";
    			t19 = space();
    			div1 = element("div");
    			div1.textContent = "Use case";
    			t21 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "animation-fogwave";
    			t23 = space();
    			div4 = element("div");
    			create_component(prism.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$c, 17, 2, 377);
    			add_location(h30, file$c, 18, 2, 416);
    			add_location(code0, file$c, 19, 51, 502);
    			add_location(p0, file$c, 19, 2, 453);
    			add_location(p1, file$c, 20, 2, 559);
    			add_location(b, file$c, 22, 4, 631);
    			add_location(code1, file$c, 23, 4, 732);
    			add_location(p2, file$c, 21, 2, 623);
    			add_location(h31, file$c, 25, 2, 788);
    			add_location(h32, file$c, 73, 2, 2465);
    			attr_dev(div0, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div0, file$c, 76, 6, 2643);
    			attr_dev(div1, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div1, file$c, 77, 6, 2711);
    			attr_dev(div2, "class", "flex flex-item--center bg--graa7");
    			set_style(div2, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div2, file$c, 75, 4, 2538);
    			attr_dev(div3, "class", "flex-item--center width-1of3 padding-m");
    			add_location(div3, file$c, 80, 6, 2878);
    			attr_dev(div4, "class", "flex-item--center width-2of3 padding-m");
    			add_location(div4, file$c, 81, 6, 2960);
    			attr_dev(div5, "class", "flex bg--graa7");
    			set_style(div5, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div5, file$c, 79, 4, 2791);
    			attr_dev(div6, "class", "grid-width--large");
    			add_location(div6, file$c, 74, 2, 2502);
    			attr_dev(div7, "class", "grid-width--large");
    			add_location(div7, file$c, 16, 0, 343);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div7, anchor);
    			append_dev(div7, h1);
    			append_dev(div7, t1);
    			append_dev(div7, h30);
    			append_dev(div7, t3);
    			append_dev(div7, p0);
    			append_dev(p0, t4);
    			append_dev(p0, code0);
    			append_dev(div7, t6);
    			append_dev(div7, p1);
    			append_dev(div7, t8);
    			append_dev(div7, p2);
    			append_dev(p2, b);
    			append_dev(p2, t10);
    			append_dev(p2, code1);
    			append_dev(div7, t12);
    			append_dev(div7, h31);
    			append_dev(div7, t14);
    			mount_component(tabs, div7, null);
    			append_dev(div7, t15);
    			append_dev(div7, h32);
    			append_dev(div7, t17);
    			append_dev(div7, div6);
    			append_dev(div6, div2);
    			append_dev(div2, div0);
    			append_dev(div2, t19);
    			append_dev(div2, div1);
    			append_dev(div6, t21);
    			append_dev(div6, div5);
    			append_dev(div5, div3);
    			append_dev(div5, t23);
    			append_dev(div5, div4);
    			mount_component(prism, div4, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const tabs_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tabs_changes.$$scope = { dirty, ctx };
    			}

    			tabs.$set(tabs_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tabs.$$.fragment, local);
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tabs.$$.fragment, local);
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div7);
    			destroy_component(tabs);
    			destroy_component(prism);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Animation", slots, []);

    	let article = {
    		href: "#",
    		media: {
    			src: "https://via.placeholder.com/610x343&text=610x343"
    		},
    		section: "Sport",
    		timestamp: "2 timer siden",
    		title: "List element"
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Animation> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		ArticleCard,
    		Badge,
    		Tabs,
    		Tab,
    		TabContent,
    		TabList,
    		article
    	});

    	$$self.$inject_state = $$props => {
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [article];
    }

    class Animation extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Animation",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* docs_src/utilities/Border.svelte generated by Svelte v3.38.2 */
    const file$b = "docs_src/utilities/Border.svelte";

    // (11:2)
    function create_content_slot_2(ctx) {
    	let div5;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;
    	let t7;
    	let div4;

    	const block = {
    		c: function create() {
    			div5 = element("div");
    			div0 = element("div");
    			div0.textContent = "border";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "border--t";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "border--b";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "border--l";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "border--r";
    			attr_dev(div0, "class", "border border--black width-1of3 padding-xl margin-l bg--eb");
    			add_location(div0, file$b, 11, 4, 251);
    			attr_dev(div1, "class", "border--t border--black width-1of3 padding-xl margin-l bg--eb");
    			add_location(div1, file$b, 12, 4, 340);
    			attr_dev(div2, "class", "border--b border--black width-1of3 padding-xl margin-l bg--eb");
    			add_location(div2, file$b, 13, 4, 435);
    			attr_dev(div3, "class", "border--l border--black width-1of3 padding-xl margin-l bg--eb");
    			add_location(div3, file$b, 14, 4, 530);
    			attr_dev(div4, "class", "border--r border--black width-1of3 padding-xl margin-l bg--eb");
    			add_location(div4, file$b, 15, 4, 625);
    			attr_dev(div5, "class", "flex flex-justify--between flex-wrap--wrap");
    			attr_dev(div5, "slot", "content");
    			add_location(div5, file$b, 10, 2, 175);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div0);
    			append_dev(div5, t1);
    			append_dev(div5, div1);
    			append_dev(div5, t3);
    			append_dev(div5, div2);
    			append_dev(div5, t5);
    			append_dev(div5, div3);
    			append_dev(div5, t7);
    			append_dev(div5, div4);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div5);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_2.name,
    		type: "slot",
    		source: "(11:2) ",
    		ctx
    	});

    	return block;
    }

    // (20:0) <Prism language="html">
    function create_default_slot_2$8(ctx) {
    	let t_value = `<div class="border"></div>
<div class="border--t"></div>
<div class="border--b"></div>
<div class="border--l"></div>
<div class="border--r"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$8.name,
    		type: "slot",
    		source: "(20:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (31:2)
    function create_content_slot_1$1(ctx) {
    	let div6;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;
    	let t7;
    	let div4;
    	let t9;
    	let div5;

    	const block = {
    		c: function create() {
    			div6 = element("div");
    			div0 = element("div");
    			div0.textContent = "border-radius";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "border-radius-s";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "border-radius--t";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "border-radius-s--t";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "border-radius--b";
    			t9 = space();
    			div5 = element("div");
    			div5.textContent = "border-radius-s--b";
    			attr_dev(div0, "class", "border-radius padding-xl width-1of3 margin-l bg--eb");
    			add_location(div0, file$b, 31, 4, 1052);
    			attr_dev(div1, "class", "border-radius-s padding-xl width-1of3 margin-l bg--eb");
    			add_location(div1, file$b, 32, 4, 1141);
    			attr_dev(div2, "class", "border-radius--t padding-xl width-1of3 margin-l bg--eb");
    			add_location(div2, file$b, 33, 4, 1234);
    			attr_dev(div3, "class", "border-radius-s--t padding-xl width-1of3 margin-l bg--eb");
    			add_location(div3, file$b, 34, 4, 1329);
    			attr_dev(div4, "class", "border-radius--b padding-xl width-1of3 margin-l bg--eb");
    			add_location(div4, file$b, 35, 4, 1428);
    			attr_dev(div5, "class", "border-radius-s--b padding-xl width-1of3 margin-l bg--eb");
    			add_location(div5, file$b, 36, 4, 1523);
    			attr_dev(div6, "class", "flex flex-justify--between flex-wrap--wrap");
    			attr_dev(div6, "slot", "content");
    			add_location(div6, file$b, 30, 2, 976);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div0);
    			append_dev(div6, t1);
    			append_dev(div6, div1);
    			append_dev(div6, t3);
    			append_dev(div6, div2);
    			append_dev(div6, t5);
    			append_dev(div6, div3);
    			append_dev(div6, t7);
    			append_dev(div6, div4);
    			append_dev(div6, t9);
    			append_dev(div6, div5);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div6);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_1$1.name,
    		type: "slot",
    		source: "(31:2) ",
    		ctx
    	});

    	return block;
    }

    // (41:0) <Prism language="html">
    function create_default_slot_1$9(ctx) {
    	let t_value = `<div class="border-radius"></div>
<div class="border-radius-s"></div>
<div class="border-radius--t"></div>
<div class="border-radius-s--t"></div>
<div class="border-radius--b"></div>
<div class="border-radius-s--b"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$9.name,
    		type: "slot",
    		source: "(41:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (54:2)
    function create_content_slot$3(ctx) {
    	let div9;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;
    	let t7;
    	let div4;
    	let t9;
    	let div5;
    	let t11;
    	let div6;
    	let t13;
    	let div7;
    	let t15;
    	let div8;

    	const block = {
    		c: function create() {
    			div9 = element("div");
    			div0 = element("div");
    			div0.textContent = "border--black";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "border--graa1";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "border--graa2";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "border--graa3";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "border--graa4";
    			t9 = space();
    			div5 = element("div");
    			div5.textContent = "border--graa5";
    			t11 = space();
    			div6 = element("div");
    			div6.textContent = "border--graa6";
    			t13 = space();
    			div7 = element("div");
    			div7.textContent = "border--graa7";
    			t15 = space();
    			div8 = element("div");
    			div8.textContent = "border--white";
    			attr_dev(div0, "class", "flex flex-align--center border border--black padding-xl width-1of3 margin-l");
    			add_location(div0, file$b, 54, 4, 2069);
    			attr_dev(div1, "class", "flex flex-align--center border border--graa1 padding-xl width-1of3 margin-l");
    			add_location(div1, file$b, 55, 4, 2182);
    			attr_dev(div2, "class", "flex flex-align--center border border--graa2 padding-xl width-1of3 margin-l");
    			add_location(div2, file$b, 56, 4, 2295);
    			attr_dev(div3, "class", "flex flex-align--center border border--graa3 padding-xl width-1of3 margin-l");
    			add_location(div3, file$b, 57, 4, 2408);
    			attr_dev(div4, "class", "flex flex-align--center border border--graa4 padding-xl width-1of3 margin-l");
    			add_location(div4, file$b, 58, 4, 2521);
    			attr_dev(div5, "class", "flex flex-align--center border border--graa5 padding-xl width-1of3 margin-l");
    			add_location(div5, file$b, 59, 4, 2634);
    			attr_dev(div6, "class", "flex flex-align--center border border--graa6 padding-xl width-1of3 margin-l");
    			add_location(div6, file$b, 60, 4, 2747);
    			attr_dev(div7, "class", "flex flex-align--center border border--graa7 padding-xl width-1of3 margin-l");
    			add_location(div7, file$b, 61, 4, 2860);
    			attr_dev(div8, "class", "flex flex-align--center border border--white padding-xl width-1of3 margin-l");
    			add_location(div8, file$b, 62, 4, 2973);
    			attr_dev(div9, "class", "flex flex-justify--between flex-wrap--wrap");
    			attr_dev(div9, "slot", "content");
    			add_location(div9, file$b, 53, 2, 1993);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div9, anchor);
    			append_dev(div9, div0);
    			append_dev(div9, t1);
    			append_dev(div9, div1);
    			append_dev(div9, t3);
    			append_dev(div9, div2);
    			append_dev(div9, t5);
    			append_dev(div9, div3);
    			append_dev(div9, t7);
    			append_dev(div9, div4);
    			append_dev(div9, t9);
    			append_dev(div9, div5);
    			append_dev(div9, t11);
    			append_dev(div9, div6);
    			append_dev(div9, t13);
    			append_dev(div9, div7);
    			append_dev(div9, t15);
    			append_dev(div9, div8);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div9);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot$3.name,
    		type: "slot",
    		source: "(54:2) ",
    		ctx
    	});

    	return block;
    }

    // (67:0) <Prism language="html">
    function create_default_slot$9(ctx) {
    	let t_value = `<div class="border border--black"></div>
<div class="border border--graa1"></div>
<div class="border border--graa2"></div>
<div class="border border--graa3"></div>
<div class="border border--graa4"></div>
<div class="border border--graa5"></div>
<div class="border border--graa6"></div>
<div class="border border--graa7"></div>
<div class="border border--white"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$9.name,
    		type: "slot",
    		source: "(67:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$b(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let card0;
    	let t4;
    	let prism0;
    	let t5;
    	let h31;
    	let t7;
    	let card1;
    	let t8;
    	let prism1;
    	let t9;
    	let h32;
    	let t11;
    	let p;
    	let t13;
    	let card2;
    	let t14;
    	let prism2;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { content: [create_content_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { content: [create_content_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				$$slots: { content: [create_content_slot$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Border";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Border";
    			t3 = space();
    			create_component(card0.$$.fragment);
    			t4 = space();
    			create_component(prism0.$$.fragment);
    			t5 = space();
    			h31 = element("h3");
    			h31.textContent = "Border-radius";
    			t7 = space();
    			create_component(card1.$$.fragment);
    			t8 = space();
    			create_component(prism1.$$.fragment);
    			t9 = space();
    			h32 = element("h3");
    			h32.textContent = "Border colors";
    			t11 = space();
    			p = element("p");
    			p.textContent = "Tilgændelige farvevalg der kan tilknyttes border-color";
    			t13 = space();
    			create_component(card2.$$.fragment);
    			t14 = space();
    			create_component(prism2.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$b, 5, 0, 92);
    			add_location(h30, file$b, 7, 0, 127);
    			add_location(h31, file$b, 27, 0, 921);
    			add_location(h32, file$b, 49, 0, 1898);
    			add_location(p, file$b, 50, 0, 1921);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, p, anchor);
    			insert_dev(target, t13, anchor);
    			mount_component(card2, target, anchor);
    			insert_dev(target, t14, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    			const card2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card2_changes.$$scope = { dirty, ctx };
    			}

    			card2.$set(card2_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(card2.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(card2.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t7);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t13);
    			destroy_component(card2, detaching);
    			if (detaching) detach_dev(t14);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Border", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Border> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Border extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Border",
    			options,
    			id: create_fragment$b.name
    		});
    	}
    }

    /* docs_src/utilities/Color.svelte generated by Svelte v3.38.2 */
    const file$a = "docs_src/utilities/Color.svelte";

    // (17:2)
    function create_content_slot_1(ctx) {
    	let div7;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;
    	let t7;
    	let div4;
    	let t9;
    	let div5;
    	let t11;
    	let div6;
    	let t12;
    	let em;

    	const block = {
    		c: function create() {
    			div7 = element("div");
    			div0 = element("div");
    			div0.textContent = "color--black";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "color--white";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "color--sport";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "color--eb";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "color--orangedark";
    			t9 = space();
    			div5 = element("div");
    			div5.textContent = "color--nyheder";
    			t11 = space();
    			div6 = element("div");
    			t12 = text("color--section\n      ");
    			em = element("em");
    			em.textContent = "(arver sektionsfarven f.eks sport)";
    			attr_dev(div0, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--black");
    			add_location(div0, file$a, 17, 4, 506);
    			attr_dev(div1, "class", "flex flex-column padding-xl width-1of3 margin-l bg--black color--white");
    			add_location(div1, file$a, 18, 4, 613);
    			attr_dev(div2, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--sport");
    			add_location(div2, file$a, 19, 4, 720);
    			attr_dev(div3, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--eb");
    			add_location(div3, file$a, 20, 4, 827);
    			attr_dev(div4, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--orangedark");
    			add_location(div4, file$a, 21, 4, 928);
    			attr_dev(div5, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--nyheder");
    			add_location(div5, file$a, 24, 4, 1057);
    			add_location(em, file$a, 27, 6, 1282);
    			attr_dev(div6, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--section");
    			add_location(div6, file$a, 25, 4, 1168);
    			attr_dev(div7, "class", "flex flex-justify--between flex-wrap--wrap");
    			attr_dev(div7, "slot", "content");
    			add_location(div7, file$a, 16, 2, 430);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div0);
    			append_dev(div7, t1);
    			append_dev(div7, div1);
    			append_dev(div7, t3);
    			append_dev(div7, div2);
    			append_dev(div7, t5);
    			append_dev(div7, div3);
    			append_dev(div7, t7);
    			append_dev(div7, div4);
    			append_dev(div7, t9);
    			append_dev(div7, div5);
    			append_dev(div7, t11);
    			append_dev(div7, div6);
    			append_dev(div6, t12);
    			append_dev(div6, em);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div7);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_1.name,
    		type: "slot",
    		source: "(17:2) ",
    		ctx
    	});

    	return block;
    }

    // (33:0) <Prism language="html">
    function create_default_slot_1$8(ctx) {
    	let t_value = `<div class="color--black"></div>
<div class="color--white"></div>
<div class="color--blue"></div>
<div class="color--sport"></div>
<div class="color--orangedark"></div>
<div class="color--nyheder"></div>
<div class="color--section"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$8.name,
    		type: "slot",
    		source: "(33:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (48:2)
    function create_content_slot$2(ctx) {
    	let div7;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;
    	let t7;
    	let div4;
    	let t9;
    	let div5;
    	let t11;
    	let div6;
    	let t12;
    	let em;

    	const block = {
    		c: function create() {
    			div7 = element("div");
    			div0 = element("div");
    			div0.textContent = "bg--black";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "bg--white";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "bg--underholdning";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "bg--eb";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "bg--orangedark";
    			t9 = space();
    			div5 = element("div");
    			div5.textContent = "bg--nyheder";
    			t11 = space();
    			div6 = element("div");
    			t12 = text("bg--section\n      ");
    			em = element("em");
    			em.textContent = "(arver sektionsfarven f.eks nyheder)";
    			attr_dev(div0, "class", "flex flex-column padding-xl width-1of3 margin-l bg--black");
    			add_location(div0, file$a, 48, 4, 1921);
    			attr_dev(div1, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--black");
    			add_location(div1, file$a, 49, 4, 2012);
    			attr_dev(div2, "class", "flex flex-column padding-xl width-1of3 margin-l bg--underholdning");
    			add_location(div2, file$a, 50, 4, 2116);
    			attr_dev(div3, "class", "flex flex-column padding-xl width-1of3 margin-l bg--eb");
    			add_location(div3, file$a, 51, 4, 2223);
    			attr_dev(div4, "class", "flex flex-column padding-xl width-1of3 margin-l bg--orangedark");
    			add_location(div4, file$a, 52, 4, 2308);
    			attr_dev(div5, "class", "flex flex-column padding-xl width-1of3 margin-l bg--nyheder");
    			add_location(div5, file$a, 53, 4, 2409);
    			add_location(em, file$a, 56, 6, 2615);
    			attr_dev(div6, "class", "flex flex-column padding-xl width-1of3 margin-l bg--white color--section");
    			add_location(div6, file$a, 54, 4, 2504);
    			attr_dev(div7, "class", "flex flex-justify--between flex-wrap--wrap");
    			attr_dev(div7, "slot", "content");
    			add_location(div7, file$a, 47, 2, 1845);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div0);
    			append_dev(div7, t1);
    			append_dev(div7, div1);
    			append_dev(div7, t3);
    			append_dev(div7, div2);
    			append_dev(div7, t5);
    			append_dev(div7, div3);
    			append_dev(div7, t7);
    			append_dev(div7, div4);
    			append_dev(div7, t9);
    			append_dev(div7, div5);
    			append_dev(div7, t11);
    			append_dev(div7, div6);
    			append_dev(div6, t12);
    			append_dev(div6, em);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div7);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot$2.name,
    		type: "slot",
    		source: "(48:2) ",
    		ctx
    	});

    	return block;
    }

    // (62:0) <Prism language="html">
    function create_default_slot$8(ctx) {
    	let t_value = `<div class="bg--black"></div>
<div class="bg--white"></div>
<div class="bg--underholdning"></div>
<div class="bg--eb"></div>
<div class="bg--orangedark"></div>
<div class="bg--nyheder"></div>
<div class="bg--section"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$8.name,
    		type: "slot",
    		source: "(62:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$a(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let p0;
    	let t5;
    	let p1;
    	let t7;
    	let card0;
    	let t8;
    	let prism0;
    	let t9;
    	let h31;
    	let t11;
    	let p2;
    	let t13;
    	let p3;
    	let t15;
    	let card1;
    	let t16;
    	let prism1;
    	let t17;
    	let h32;
    	let t19;
    	let object;
    	let t20;
    	let a;
    	let current;
    	let mounted;
    	let dispose;

    	card0 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { content: [create_content_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { content: [create_content_slot$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Color";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Text color";
    			t3 = space();
    			p0 = element("p");
    			p0.textContent = "color-- sætter farven på elementet";
    			t5 = space();
    			p1 = element("p");
    			p1.textContent = "Se alle farvemuligheder her";
    			t7 = space();
    			create_component(card0.$$.fragment);
    			t8 = space();
    			create_component(prism0.$$.fragment);
    			t9 = space();
    			h31 = element("h3");
    			h31.textContent = "Background color";
    			t11 = space();
    			p2 = element("p");
    			p2.textContent = "bg-- sætter baggrund farve på elementet";
    			t13 = space();
    			p3 = element("p");
    			p3.textContent = "Se alle farvemuligheder her";
    			t15 = space();
    			create_component(card1.$$.fragment);
    			t16 = space();
    			create_component(prism1.$$.fragment);
    			t17 = space();
    			h32 = element("h3");
    			h32.textContent = "Alle tilgændelige farver på ekstrabladet";
    			t19 = space();
    			object = element("object");
    			t20 = text("Error: Embedded data could not be displayed. Visit this link instead: ");
    			a = element("a");
    			a.textContent = "eb-colors";
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$a, 9, 0, 196);
    			add_location(h30, file$a, 11, 0, 230);
    			add_location(p0, file$a, 12, 0, 250);
    			attr_dev(p1, "class", "color--red");
    			set_style(p1, "cursor", "pointer");
    			add_location(p1, file$a, 13, 0, 292);
    			add_location(h31, file$a, 42, 0, 1634);
    			add_location(p2, file$a, 43, 0, 1660);
    			attr_dev(p3, "class", "color--red");
    			set_style(p3, "cursor", "pointer");
    			add_location(p3, file$a, 44, 0, 1707);
    			attr_dev(h32, "id", "all-colors-section");
    			add_location(h32, file$a, 71, 0, 2954);
    			attr_dev(a, "href", "https://ekstrabladetudvikling.github.io/eb-colors/");
    			add_location(a, file$a, 74, 72, 3212);
    			attr_dev(object, "data", "https://ekstrabladetudvikling.github.io/eb-colors/");
    			attr_dev(object, "width", "100%");
    			attr_dev(object, "height", "500");
    			attr_dev(object, "title", "eb-colors");
    			add_location(object, file$a, 73, 0, 3029);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, p2, anchor);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, p3, anchor);
    			insert_dev(target, t15, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t16, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t19, anchor);
    			insert_dev(target, object, anchor);
    			append_dev(object, t20);
    			append_dev(object, a);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(p1, "click", moveToAllColors, false, false, false),
    					listen_dev(p3, "click", moveToAllColors, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t7);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t15);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t16);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t19);
    			if (detaching) detach_dev(object);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function moveToAllColors() {
    	document.getElementById("all-colors-section").scrollIntoView();
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Color", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Color> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card, moveToAllColors });
    	return [];
    }

    class Color extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Color",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* docs_src/utilities/DataTheme.svelte generated by Svelte v3.38.2 */
    const file$9 = "docs_src/utilities/DataTheme.svelte";

    // (33:8) <Tab>
    function create_default_slot_5$3(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-cubes");
    			add_location(i, file$9, 32, 13, 1159);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$3.name,
    		type: "slot",
    		source: "(33:8) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (34:8) <Tab>
    function create_default_slot_4$4(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-code");
    			add_location(i, file$9, 33, 13, 1205);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$4.name,
    		type: "slot",
    		source: "(34:8) <Tab>",
    		ctx
    	});

    	return block;
    }

    // (32:6) <TabList>
    function create_default_slot_3$5(ctx) {
    	let tab0;
    	let t;
    	let tab1;
    	let current;

    	tab0 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_5$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tab1 = new Tab({
    			props: {
    				$$slots: { default: [create_default_slot_4$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(tab0.$$.fragment);
    			t = space();
    			create_component(tab1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(tab0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(tab1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tab0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tab0_changes.$$scope = { dirty, ctx };
    			}

    			tab0.$set(tab0_changes);
    			const tab1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tab1_changes.$$scope = { dirty, ctx };
    			}

    			tab1.$set(tab1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tab0.$$.fragment, local);
    			transition_in(tab1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tab0.$$.fragment, local);
    			transition_out(tab1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tab0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(tab1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$5.name,
    		type: "slot",
    		source: "(32:6) <TabList>",
    		ctx
    	});

    	return block;
    }

    // (37:4) <TabContent>
    function create_default_slot_2$7(ctx) {
    	let accordion0;
    	let t0;
    	let accordion1;
    	let t1;
    	let div0;
    	let p0;
    	let t3;
    	let div1;
    	let p1;
    	let current;

    	accordion0 = new Accordion({
    			props: {
    				dataTheme: "lightmode",
    				tabs: /*tabs*/ ctx[0]
    			},
    			$$inline: true
    		});

    	accordion1 = new Accordion({
    			props: {
    				dataTheme: "darkmode",
    				tabs: /*tabs*/ ctx[0]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(accordion0.$$.fragment);
    			t0 = space();
    			create_component(accordion1.$$.fragment);
    			t1 = space();
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "I'm now in lightmode";
    			t3 = space();
    			div1 = element("div");
    			p1 = element("p");
    			p1.textContent = "I'm now in darkmode";
    			add_location(p0, file$9, 40, 8, 1422);
    			attr_dev(div0, "data-theme", "lightmode");
    			add_location(div0, file$9, 39, 6, 1385);
    			add_location(p1, file$9, 43, 8, 1505);
    			attr_dev(div1, "data-theme", "darkmode");
    			add_location(div1, file$9, 42, 6, 1469);
    		},
    		m: function mount(target, anchor) {
    			mount_component(accordion0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(accordion1, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div0, anchor);
    			append_dev(div0, p0);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, p1);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(accordion0.$$.fragment, local);
    			transition_in(accordion1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(accordion0.$$.fragment, local);
    			transition_out(accordion1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(accordion0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(accordion1, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$7.name,
    		type: "slot",
    		source: "(37:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (47:4) <TabContent>
    function create_default_slot_1$7(ctx) {
    	let prism0;
    	let t0;
    	let prism1;
    	let t1;
    	let prism2;
    	let t2;
    	let prism3;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion dataTheme="lightmode" {tabs} />`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion dataTheme="darkmode" {tabs} />`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div data-theme="lightmode"><p>I'm now in lightmode</p></div>`
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div data-theme="darkmode"><p>I'm now in darkmode</p></div>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t0 = space();
    			create_component(prism1.$$.fragment);
    			t1 = space();
    			create_component(prism2.$$.fragment);
    			t2 = space();
    			create_component(prism3.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(prism3, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(prism3, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$7.name,
    		type: "slot",
    		source: "(47:4) <TabContent>",
    		ctx
    	});

    	return block;
    }

    // (30:2) <Tabs>
    function create_default_slot$7(ctx) {
    	let div;
    	let tablist;
    	let t0;
    	let tabcontent0;
    	let t1;
    	let tabcontent1;
    	let current;

    	tablist = new TabList({
    			props: {
    				$$slots: { default: [create_default_slot_3$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent0 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	tabcontent1 = new TabContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(tablist.$$.fragment);
    			t0 = space();
    			create_component(tabcontent0.$$.fragment);
    			t1 = space();
    			create_component(tabcontent1.$$.fragment);
    			attr_dev(div, "class", "flex flex-justify--end width-1of1 margin-m--b");
    			add_location(div, file$9, 30, 4, 1070);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(tablist, div, null);
    			insert_dev(target, t0, anchor);
    			mount_component(tabcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(tabcontent1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tablist_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tablist_changes.$$scope = { dirty, ctx };
    			}

    			tablist.$set(tablist_changes);
    			const tabcontent0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tabcontent0_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent0.$set(tabcontent0_changes);
    			const tabcontent1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tabcontent1_changes.$$scope = { dirty, ctx };
    			}

    			tabcontent1.$set(tabcontent1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tablist.$$.fragment, local);
    			transition_in(tabcontent0.$$.fragment, local);
    			transition_in(tabcontent1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tablist.$$.fragment, local);
    			transition_out(tabcontent0.$$.fragment, local);
    			transition_out(tabcontent1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(tablist);
    			if (detaching) detach_dev(t0);
    			destroy_component(tabcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(tabcontent1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$7.name,
    		type: "slot",
    		source: "(30:2) <Tabs>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$9(ctx) {
    	let div13;
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let p0;
    	let t4;
    	let code0;
    	let t6;
    	let p1;
    	let code1;
    	let t8;
    	let b0;
    	let t10;
    	let p2;
    	let b1;
    	let t12;
    	let code2;
    	let t14;
    	let h31;
    	let t16;
    	let tabs_1;
    	let t17;
    	let h32;
    	let t19;
    	let div12;
    	let div3;
    	let div0;
    	let t21;
    	let div1;
    	let t23;
    	let div2;
    	let t25;
    	let div7;
    	let div4;
    	let t27;
    	let div5;
    	let a0;
    	let t29;
    	let div6;
    	let p3;
    	let i0;
    	let t30;
    	let t31;
    	let p4;
    	let i1;
    	let t32;
    	let t33;
    	let div11;
    	let div8;
    	let t35;
    	let div9;
    	let a1;
    	let t37;
    	let div10;
    	let p5;
    	let i2;
    	let t38;
    	let t39;
    	let p6;
    	let i3;
    	let t40;
    	let current;

    	tabs_1 = new Tabs({
    			props: {
    				$$slots: { default: [create_default_slot$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div13 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Data Theme";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Anvendelse af data theme";
    			t3 = space();
    			p0 = element("p");
    			t4 = text("Farve tema anvendes ved tilføjelse af data-attribute ved navn dataTheme: ");
    			code0 = element("code");
    			code0.textContent = "dataTheme=\"lightmode | darkmode\"";
    			t6 = space();
    			p1 = element("p");
    			code1 = element("code");
    			code1.textContent = "dataTheme";
    			t8 = text(" kan anvendes på udvalgte komponenter, som kan ses nederst under ");
    			b0 = element("b");
    			b0.textContent = "overblik";
    			t10 = space();
    			p2 = element("p");
    			b1 = element("b");
    			b1.textContent = "OBS:";
    			t12 = text(" anvendes dataTheme direkte på et html-element skal det anvendes på følgende måde:\n    ");
    			code2 = element("code");
    			code2.textContent = "data-theme=\"lightmode\"";
    			t14 = space();
    			h31 = element("h3");
    			h31.textContent = "Eksempler på data theme";
    			t16 = space();
    			create_component(tabs_1.$$.fragment);
    			t17 = space();
    			h32 = element("h3");
    			h32.textContent = "Overblik over komponenter der kan anvende data theme";
    			t19 = space();
    			div12 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "Component";
    			t21 = space();
    			div1 = element("div");
    			div1.textContent = "Dokumentation";
    			t23 = space();
    			div2 = element("div");
    			div2.textContent = "dataTheme";
    			t25 = space();
    			div7 = element("div");
    			div4 = element("div");
    			div4.textContent = "Accordion";
    			t27 = space();
    			div5 = element("div");
    			a0 = element("a");
    			a0.textContent = "Accordion";
    			t29 = space();
    			div6 = element("div");
    			p3 = element("p");
    			i0 = element("i");
    			t30 = text(" lightmode");
    			t31 = space();
    			p4 = element("p");
    			i1 = element("i");
    			t32 = text(" darkmode");
    			t33 = space();
    			div11 = element("div");
    			div8 = element("div");
    			div8.textContent = "Card (Card-mode)";
    			t35 = space();
    			div9 = element("div");
    			a1 = element("a");
    			a1.textContent = "Card";
    			t37 = space();
    			div10 = element("div");
    			p5 = element("p");
    			i2 = element("i");
    			t38 = text(" lightmode");
    			t39 = space();
    			p6 = element("p");
    			i3 = element("i");
    			t40 = text(" darkmode");
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$9, 15, 2, 536);
    			add_location(h30, file$9, 16, 2, 576);
    			add_location(code0, file$9, 18, 77, 693);
    			add_location(p0, file$9, 17, 2, 612);
    			add_location(code1, file$9, 22, 5, 763);
    			add_location(b0, file$9, 22, 92, 850);
    			add_location(p1, file$9, 22, 2, 760);
    			add_location(b1, file$9, 24, 4, 880);
    			add_location(code2, file$9, 25, 4, 978);
    			add_location(p2, file$9, 23, 2, 872);
    			add_location(h31, file$9, 28, 2, 1024);
    			add_location(h32, file$9, 54, 2, 1990);
    			attr_dev(div0, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div0, file$9, 57, 6, 2177);
    			attr_dev(div1, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div1, file$9, 58, 6, 2249);
    			attr_dev(div2, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div2, file$9, 59, 6, 2325);
    			attr_dev(div3, "class", "flex bg--graa7");
    			set_style(div3, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div3, file$9, 56, 4, 2090);
    			attr_dev(div4, "class", "width-1of3 padding-m");
    			add_location(div4, file$9, 62, 6, 2493);
    			attr_dev(a0, "href", "#/components/accordion");
    			add_location(a0, file$9, 64, 8, 2592);
    			attr_dev(div5, "class", "width-1of3 padding-m");
    			add_location(div5, file$9, 63, 6, 2549);
    			attr_dev(i0, "class", "fas fa-circle color--white");
    			add_location(i0, file$9, 67, 31, 2724);
    			attr_dev(p3, "class", "margin-none");
    			add_location(p3, file$9, 67, 8, 2701);
    			attr_dev(i1, "class", "fas fa-circle color--black");
    			add_location(i1, file$9, 68, 31, 2810);
    			attr_dev(p4, "class", "margin-none");
    			add_location(p4, file$9, 68, 8, 2787);
    			attr_dev(div6, "class", "width-1of3 padding-m");
    			add_location(div6, file$9, 66, 6, 2658);
    			attr_dev(div7, "class", "flex bg--graa7");
    			set_style(div7, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div7, file$9, 61, 4, 2406);
    			attr_dev(div8, "class", "width-1of3 padding-m");
    			add_location(div8, file$9, 72, 6, 2979);
    			attr_dev(a1, "href", "#/components/card");
    			add_location(a1, file$9, 74, 8, 3085);
    			attr_dev(div9, "class", "width-1of3 padding-m");
    			add_location(div9, file$9, 73, 6, 3042);
    			attr_dev(i2, "class", "fas fa-circle color--white");
    			add_location(i2, file$9, 77, 31, 3207);
    			attr_dev(p5, "class", "margin-none");
    			add_location(p5, file$9, 77, 8, 3184);
    			attr_dev(i3, "class", "fas fa-circle color--black");
    			add_location(i3, file$9, 78, 31, 3293);
    			attr_dev(p6, "class", "margin-none");
    			add_location(p6, file$9, 78, 8, 3270);
    			attr_dev(div10, "class", "width-1of3 padding-m");
    			add_location(div10, file$9, 76, 6, 3141);
    			attr_dev(div11, "class", "flex bg--graa7");
    			set_style(div11, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div11, file$9, 71, 4, 2892);
    			attr_dev(div12, "class", "grid-width--large");
    			add_location(div12, file$9, 55, 2, 2054);
    			attr_dev(div13, "class", "grid-width--large");
    			add_location(div13, file$9, 14, 0, 502);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div13, anchor);
    			append_dev(div13, h1);
    			append_dev(div13, t1);
    			append_dev(div13, h30);
    			append_dev(div13, t3);
    			append_dev(div13, p0);
    			append_dev(p0, t4);
    			append_dev(p0, code0);
    			append_dev(div13, t6);
    			append_dev(div13, p1);
    			append_dev(p1, code1);
    			append_dev(p1, t8);
    			append_dev(p1, b0);
    			append_dev(div13, t10);
    			append_dev(div13, p2);
    			append_dev(p2, b1);
    			append_dev(p2, t12);
    			append_dev(p2, code2);
    			append_dev(div13, t14);
    			append_dev(div13, h31);
    			append_dev(div13, t16);
    			mount_component(tabs_1, div13, null);
    			append_dev(div13, t17);
    			append_dev(div13, h32);
    			append_dev(div13, t19);
    			append_dev(div13, div12);
    			append_dev(div12, div3);
    			append_dev(div3, div0);
    			append_dev(div3, t21);
    			append_dev(div3, div1);
    			append_dev(div3, t23);
    			append_dev(div3, div2);
    			append_dev(div12, t25);
    			append_dev(div12, div7);
    			append_dev(div7, div4);
    			append_dev(div7, t27);
    			append_dev(div7, div5);
    			append_dev(div5, a0);
    			append_dev(div7, t29);
    			append_dev(div7, div6);
    			append_dev(div6, p3);
    			append_dev(p3, i0);
    			append_dev(p3, t30);
    			append_dev(div6, t31);
    			append_dev(div6, p4);
    			append_dev(p4, i1);
    			append_dev(p4, t32);
    			append_dev(div12, t33);
    			append_dev(div12, div11);
    			append_dev(div11, div8);
    			append_dev(div11, t35);
    			append_dev(div11, div9);
    			append_dev(div9, a1);
    			append_dev(div11, t37);
    			append_dev(div11, div10);
    			append_dev(div10, p5);
    			append_dev(p5, i2);
    			append_dev(p5, t38);
    			append_dev(div10, t39);
    			append_dev(div10, p6);
    			append_dev(p6, i3);
    			append_dev(p6, t40);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const tabs_1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				tabs_1_changes.$$scope = { dirty, ctx };
    			}

    			tabs_1.$set(tabs_1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tabs_1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tabs_1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div13);
    			destroy_component(tabs_1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("DataTheme", slots, []);

    	let tabs = [
    		{
    			title: "Tab 1",
    			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus."
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DataTheme> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		Accordion,
    		Tabs,
    		Tab,
    		TabContent,
    		TabList,
    		tabs
    	});

    	$$self.$inject_state = $$props => {
    		if ("tabs" in $$props) $$invalidate(0, tabs = $$props.tabs);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [tabs];
    }

    class DataTheme extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DataTheme",
    			options,
    			id: create_fragment$9.name
    		});
    	}
    }

    /* docs_src/utilities/Flex.svelte generated by Svelte v3.38.2 */
    const file$8 = "docs_src/utilities/Flex.svelte";

    // (10:0) <Prism language="html">
    function create_default_slot_14(ctx) {
    	let t_value = `<div class="flex"></div>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14.name,
    		type: "slot",
    		source: "(10:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (17:0) <Card className="bg--graa7">
    function create_default_slot_13(ctx) {
    	let strong0;
    	let t1;
    	let div3;
    	let div0;
    	let t3;
    	let div1;
    	let t5;
    	let div2;
    	let t7;
    	let strong1;
    	let t9;
    	let div7;
    	let div4;
    	let t11;
    	let div5;
    	let t13;
    	let div6;
    	let t15;
    	let strong2;
    	let t17;
    	let div11;
    	let div8;
    	let t19;
    	let div9;
    	let t21;
    	let div10;
    	let t23;
    	let strong3;
    	let t25;
    	let div15;
    	let div12;
    	let t27;
    	let div13;
    	let t29;
    	let div14;
    	let t31;
    	let strong4;
    	let t33;
    	let div19;
    	let div16;
    	let t35;
    	let div17;
    	let t37;
    	let div18;

    	const block = {
    		c: function create() {
    			strong0 = element("strong");
    			strong0.textContent = "flex flex-justify--start";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "Flex item 1";
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "Flex item 2";
    			t5 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item 3";
    			t7 = space();
    			strong1 = element("strong");
    			strong1.textContent = "flex flex-justify--end";
    			t9 = space();
    			div7 = element("div");
    			div4 = element("div");
    			div4.textContent = "Flex item 1";
    			t11 = space();
    			div5 = element("div");
    			div5.textContent = "Flex item 2";
    			t13 = space();
    			div6 = element("div");
    			div6.textContent = "Flex item 3";
    			t15 = space();
    			strong2 = element("strong");
    			strong2.textContent = "flex flex-justify--center";
    			t17 = space();
    			div11 = element("div");
    			div8 = element("div");
    			div8.textContent = "Flex item 1";
    			t19 = space();
    			div9 = element("div");
    			div9.textContent = "Flex item 2";
    			t21 = space();
    			div10 = element("div");
    			div10.textContent = "Flex item 3";
    			t23 = space();
    			strong3 = element("strong");
    			strong3.textContent = "flex flex-justify--around";
    			t25 = space();
    			div15 = element("div");
    			div12 = element("div");
    			div12.textContent = "Flex item 1";
    			t27 = space();
    			div13 = element("div");
    			div13.textContent = "Flex item 2";
    			t29 = space();
    			div14 = element("div");
    			div14.textContent = "Flex item 3";
    			t31 = space();
    			strong4 = element("strong");
    			strong4.textContent = "flex flex-justify--between";
    			t33 = space();
    			div19 = element("div");
    			div16 = element("div");
    			div16.textContent = "Flex item 1";
    			t35 = space();
    			div17 = element("div");
    			div17.textContent = "Flex item 2";
    			t37 = space();
    			div18 = element("div");
    			div18.textContent = "Flex item 3";
    			attr_dev(strong0, "class", "margin-m");
    			add_location(strong0, file$8, 17, 2, 356);
    			attr_dev(div0, "class", "bg--graa4 padding-l");
    			add_location(div0, file$8, 19, 4, 467);
    			attr_dev(div1, "class", "bg--graa3 padding-l");
    			add_location(div1, file$8, 20, 4, 522);
    			attr_dev(div2, "class", "bg--graa2 padding-l");
    			add_location(div2, file$8, 21, 4, 577);
    			attr_dev(div3, "class", "flex flex-justify--start bg--eb");
    			add_location(div3, file$8, 18, 2, 417);
    			attr_dev(strong1, "class", "margin-m margin-l--t");
    			add_location(strong1, file$8, 23, 2, 639);
    			attr_dev(div4, "class", "bg--graa4 padding-l");
    			add_location(div4, file$8, 25, 4, 758);
    			attr_dev(div5, "class", "bg--graa3 padding-l");
    			add_location(div5, file$8, 26, 4, 813);
    			attr_dev(div6, "class", "bg--graa2 padding-l");
    			add_location(div6, file$8, 27, 4, 868);
    			attr_dev(div7, "class", "flex flex-justify--end bg--eb");
    			add_location(div7, file$8, 24, 2, 710);
    			attr_dev(strong2, "class", "margin-m margin-l--t");
    			add_location(strong2, file$8, 29, 2, 930);
    			attr_dev(div8, "class", "bg--graa4 padding-l");
    			add_location(div8, file$8, 31, 4, 1055);
    			attr_dev(div9, "class", "bg--graa3 padding-l");
    			add_location(div9, file$8, 32, 4, 1110);
    			attr_dev(div10, "class", "bg--graa2 padding-l");
    			add_location(div10, file$8, 33, 4, 1165);
    			attr_dev(div11, "class", "flex flex-justify--center bg--eb");
    			add_location(div11, file$8, 30, 2, 1004);
    			attr_dev(strong3, "class", "margin-m margin-l--t");
    			add_location(strong3, file$8, 35, 2, 1227);
    			attr_dev(div12, "class", "bg--graa4 padding-l");
    			add_location(div12, file$8, 37, 4, 1352);
    			attr_dev(div13, "class", "bg--graa3 padding-l");
    			add_location(div13, file$8, 38, 4, 1407);
    			attr_dev(div14, "class", "bg--graa2 padding-l");
    			add_location(div14, file$8, 39, 4, 1462);
    			attr_dev(div15, "class", "flex flex-justify--around bg--eb");
    			add_location(div15, file$8, 36, 2, 1301);
    			attr_dev(strong4, "class", "margin-m margin-l--t");
    			add_location(strong4, file$8, 41, 2, 1524);
    			attr_dev(div16, "class", "bg--graa4 padding-l");
    			add_location(div16, file$8, 43, 4, 1651);
    			attr_dev(div17, "class", "bg--graa3 padding-l");
    			add_location(div17, file$8, 44, 4, 1706);
    			attr_dev(div18, "class", "bg--graa2 padding-l");
    			add_location(div18, file$8, 45, 4, 1761);
    			attr_dev(div19, "class", "flex flex-justify--between bg--eb");
    			add_location(div19, file$8, 42, 2, 1599);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, strong0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t3);
    			append_dev(div3, div1);
    			append_dev(div3, t5);
    			append_dev(div3, div2);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, strong1, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div4);
    			append_dev(div7, t11);
    			append_dev(div7, div5);
    			append_dev(div7, t13);
    			append_dev(div7, div6);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, strong2, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div8);
    			append_dev(div11, t19);
    			append_dev(div11, div9);
    			append_dev(div11, t21);
    			append_dev(div11, div10);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, strong3, anchor);
    			insert_dev(target, t25, anchor);
    			insert_dev(target, div15, anchor);
    			append_dev(div15, div12);
    			append_dev(div15, t27);
    			append_dev(div15, div13);
    			append_dev(div15, t29);
    			append_dev(div15, div14);
    			insert_dev(target, t31, anchor);
    			insert_dev(target, strong4, anchor);
    			insert_dev(target, t33, anchor);
    			insert_dev(target, div19, anchor);
    			append_dev(div19, div16);
    			append_dev(div19, t35);
    			append_dev(div19, div17);
    			append_dev(div19, t37);
    			append_dev(div19, div18);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(strong0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(strong1);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div7);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(strong2);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(div11);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(strong3);
    			if (detaching) detach_dev(t25);
    			if (detaching) detach_dev(div15);
    			if (detaching) detach_dev(t31);
    			if (detaching) detach_dev(strong4);
    			if (detaching) detach_dev(t33);
    			if (detaching) detach_dev(div19);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13.name,
    		type: "slot",
    		source: "(17:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (50:0) <Prism language="html">
    function create_default_slot_12(ctx) {
    	let t_value = `<div class="flex flex-justify--start"></div>
<div class="flex flex-justify--end"></div>
<div class="flex flex-justify--center"></div>
<div class="flex flex-justify--around"></div>
<div class="flex flex-justify--between"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12.name,
    		type: "slot",
    		source: "(50:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (61:0) <Card className="bg--graa7">
    function create_default_slot_11(ctx) {
    	let strong0;
    	let t1;
    	let div3;
    	let div0;
    	let t3;
    	let div1;
    	let t5;
    	let div2;
    	let t7;
    	let strong1;
    	let t9;
    	let div7;
    	let div4;
    	let t11;
    	let div5;
    	let t13;
    	let div6;
    	let t15;
    	let strong2;
    	let t17;
    	let div11;
    	let div8;
    	let t19;
    	let div9;
    	let t21;
    	let div10;
    	let t23;
    	let strong3;
    	let t25;
    	let div15;
    	let div12;
    	let t27;
    	let div13;
    	let t29;
    	let div14;

    	const block = {
    		c: function create() {
    			strong0 = element("strong");
    			strong0.textContent = "flex flex-align--start";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "Flex item 1";
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "Flex item 2";
    			t5 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item 3";
    			t7 = space();
    			strong1 = element("strong");
    			strong1.textContent = "flex flex-align--end";
    			t9 = space();
    			div7 = element("div");
    			div4 = element("div");
    			div4.textContent = "Flex item 1";
    			t11 = space();
    			div5 = element("div");
    			div5.textContent = "Flex item 2";
    			t13 = space();
    			div6 = element("div");
    			div6.textContent = "Flex item 3";
    			t15 = space();
    			strong2 = element("strong");
    			strong2.textContent = "flex flex-align--center";
    			t17 = space();
    			div11 = element("div");
    			div8 = element("div");
    			div8.textContent = "Flex item 1";
    			t19 = space();
    			div9 = element("div");
    			div9.textContent = "Flex item 2";
    			t21 = space();
    			div10 = element("div");
    			div10.textContent = "Flex item 3";
    			t23 = space();
    			strong3 = element("strong");
    			strong3.textContent = "flex flex-align--strech";
    			t25 = space();
    			div15 = element("div");
    			div12 = element("div");
    			div12.textContent = "Flex item 1";
    			t27 = space();
    			div13 = element("div");
    			div13.textContent = "Flex item 2";
    			t29 = space();
    			div14 = element("div");
    			div14.textContent = "Flex item 3";
    			attr_dev(strong0, "class", "margin-m");
    			add_location(strong0, file$8, 61, 2, 2228);
    			attr_dev(div0, "class", "bg--graa4 padding-l");
    			add_location(div0, file$8, 63, 4, 2357);
    			attr_dev(div1, "class", "bg--graa3 padding-l");
    			add_location(div1, file$8, 64, 4, 2412);
    			attr_dev(div2, "class", "bg--graa2 padding-l");
    			add_location(div2, file$8, 65, 4, 2467);
    			attr_dev(div3, "class", "flex flex-align--start bg--eb");
    			set_style(div3, "height", "100px");
    			add_location(div3, file$8, 62, 2, 2287);
    			attr_dev(strong1, "class", "margin-m margin-l--t");
    			add_location(strong1, file$8, 67, 2, 2529);
    			attr_dev(div4, "class", "bg--graa4 padding-l");
    			add_location(div4, file$8, 69, 4, 2666);
    			attr_dev(div5, "class", "bg--graa3 padding-l");
    			add_location(div5, file$8, 70, 4, 2721);
    			attr_dev(div6, "class", "bg--graa2 padding-l");
    			add_location(div6, file$8, 71, 4, 2776);
    			attr_dev(div7, "class", "flex flex-align--end bg--eb");
    			set_style(div7, "height", "100px");
    			add_location(div7, file$8, 68, 2, 2598);
    			attr_dev(strong2, "class", "margin-m margin-l--t");
    			add_location(strong2, file$8, 73, 2, 2838);
    			attr_dev(div8, "class", "bg--graa4 padding-l");
    			add_location(div8, file$8, 75, 4, 2981);
    			attr_dev(div9, "class", "bg--graa3 padding-l");
    			add_location(div9, file$8, 76, 4, 3036);
    			attr_dev(div10, "class", "bg--graa2 padding-l");
    			add_location(div10, file$8, 77, 4, 3091);
    			attr_dev(div11, "class", "flex flex-align--center bg--eb");
    			set_style(div11, "height", "100px");
    			add_location(div11, file$8, 74, 2, 2910);
    			attr_dev(strong3, "class", "margin-m margin-l--t");
    			add_location(strong3, file$8, 79, 2, 3153);
    			attr_dev(div12, "class", "bg--graa4 padding-l");
    			add_location(div12, file$8, 81, 4, 3296);
    			attr_dev(div13, "class", "bg--graa3 padding-l");
    			add_location(div13, file$8, 82, 4, 3351);
    			attr_dev(div14, "class", "bg--graa2 padding-l");
    			add_location(div14, file$8, 83, 4, 3406);
    			attr_dev(div15, "class", "flex flex-align--strech bg--eb");
    			set_style(div15, "height", "100px");
    			add_location(div15, file$8, 80, 2, 3225);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, strong0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t3);
    			append_dev(div3, div1);
    			append_dev(div3, t5);
    			append_dev(div3, div2);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, strong1, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div4);
    			append_dev(div7, t11);
    			append_dev(div7, div5);
    			append_dev(div7, t13);
    			append_dev(div7, div6);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, strong2, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div8);
    			append_dev(div11, t19);
    			append_dev(div11, div9);
    			append_dev(div11, t21);
    			append_dev(div11, div10);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, strong3, anchor);
    			insert_dev(target, t25, anchor);
    			insert_dev(target, div15, anchor);
    			append_dev(div15, div12);
    			append_dev(div15, t27);
    			append_dev(div15, div13);
    			append_dev(div15, t29);
    			append_dev(div15, div14);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(strong0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(strong1);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div7);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(strong2);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(div11);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(strong3);
    			if (detaching) detach_dev(t25);
    			if (detaching) detach_dev(div15);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11.name,
    		type: "slot",
    		source: "(61:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (88:0) <Prism language="html">
    function create_default_slot_10$1(ctx) {
    	let t_value = `<div class="flex flex-align--start"></div>
<div class="flex flex-align--end"></div>
<div class="flex flex-align--center"></div>
<div class="flex flex-align--strech"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$1.name,
    		type: "slot",
    		source: "(88:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (98:0) <Card className="bg--graa7">
    function create_default_slot_9$1(ctx) {
    	let div3;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "Flex item 1";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "Flex item 2";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item 3";
    			attr_dev(div0, "class", "bg--graa4 padding-l");
    			add_location(div0, file$8, 99, 4, 3898);
    			attr_dev(div1, "class", "bg--graa3 padding-l");
    			add_location(div1, file$8, 100, 4, 3953);
    			attr_dev(div2, "class", "bg--graa2 padding-l");
    			add_location(div2, file$8, 101, 4, 4008);
    			attr_dev(div3, "class", "flex flex--center bg--eb");
    			set_style(div3, "height", "100px");
    			add_location(div3, file$8, 98, 2, 3833);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$1.name,
    		type: "slot",
    		source: "(98:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (106:0) <Prism language="html">
    function create_default_slot_8$1(ctx) {
    	let t_value = `<div class="flex flex--center"></div>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$1.name,
    		type: "slot",
    		source: "(106:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (113:0) <Card className="bg--graa7">
    function create_default_slot_7$1(ctx) {
    	let strong0;
    	let t1;
    	let div3;
    	let div0;
    	let t3;
    	let div1;
    	let t5;
    	let div2;
    	let t7;
    	let strong1;
    	let t9;
    	let div7;
    	let div4;
    	let t11;
    	let div5;
    	let t13;
    	let div6;
    	let t15;
    	let strong2;
    	let t17;
    	let div11;
    	let div8;
    	let t19;
    	let div9;
    	let t21;
    	let div10;
    	let t23;
    	let strong3;
    	let t25;
    	let div15;
    	let div12;
    	let t27;
    	let div13;
    	let t29;
    	let div14;

    	const block = {
    		c: function create() {
    			strong0 = element("strong");
    			strong0.textContent = "flex flex-column";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "Flex item 1";
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "Flex item 2";
    			t5 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item 3";
    			t7 = space();
    			strong1 = element("strong");
    			strong1.textContent = "flex flex-column--reverse";
    			t9 = space();
    			div7 = element("div");
    			div4 = element("div");
    			div4.textContent = "Flex item 1";
    			t11 = space();
    			div5 = element("div");
    			div5.textContent = "Flex item 2";
    			t13 = space();
    			div6 = element("div");
    			div6.textContent = "Flex item 3";
    			t15 = space();
    			strong2 = element("strong");
    			strong2.textContent = "flex";
    			t17 = space();
    			div11 = element("div");
    			div8 = element("div");
    			div8.textContent = "Flex item 1";
    			t19 = space();
    			div9 = element("div");
    			div9.textContent = "Flex item 2";
    			t21 = space();
    			div10 = element("div");
    			div10.textContent = "Flex item 3";
    			t23 = space();
    			strong3 = element("strong");
    			strong3.textContent = "flex flex-row--reverse";
    			t25 = space();
    			div15 = element("div");
    			div12 = element("div");
    			div12.textContent = "Flex item 1";
    			t27 = space();
    			div13 = element("div");
    			div13.textContent = "Flex item 2";
    			t29 = space();
    			div14 = element("div");
    			div14.textContent = "Flex item 3";
    			attr_dev(strong0, "class", "margin-m");
    			add_location(strong0, file$8, 113, 2, 4279);
    			attr_dev(div0, "class", "bg--graa4 padding-l");
    			add_location(div0, file$8, 115, 4, 4367);
    			attr_dev(div1, "class", "bg--graa3 padding-l");
    			add_location(div1, file$8, 116, 4, 4422);
    			attr_dev(div2, "class", "bg--graa2 padding-l");
    			add_location(div2, file$8, 117, 4, 4477);
    			attr_dev(div3, "class", "flex flex-column");
    			add_location(div3, file$8, 114, 2, 4332);
    			attr_dev(strong1, "class", "margin-m margin-l--t");
    			add_location(strong1, file$8, 119, 2, 4539);
    			attr_dev(div4, "class", "bg--graa4 padding-l");
    			add_location(div4, file$8, 121, 4, 4657);
    			attr_dev(div5, "class", "bg--graa3 padding-l");
    			add_location(div5, file$8, 122, 4, 4712);
    			attr_dev(div6, "class", "bg--graa2 padding-l");
    			add_location(div6, file$8, 123, 4, 4767);
    			attr_dev(div7, "class", "flex flex-column--reverse");
    			add_location(div7, file$8, 120, 2, 4613);
    			attr_dev(strong2, "class", "margin-m margin-l--t");
    			add_location(strong2, file$8, 125, 2, 4829);
    			attr_dev(div8, "class", "bg--graa4 padding-l");
    			add_location(div8, file$8, 127, 4, 4912);
    			attr_dev(div9, "class", "bg--graa3 padding-l");
    			add_location(div9, file$8, 128, 4, 4967);
    			attr_dev(div10, "class", "bg--graa2 padding-l");
    			add_location(div10, file$8, 129, 4, 5022);
    			attr_dev(div11, "class", "flex bg--eb");
    			add_location(div11, file$8, 126, 2, 4882);
    			attr_dev(strong3, "class", "margin-m margin-l--t");
    			add_location(strong3, file$8, 131, 2, 5084);
    			attr_dev(div12, "class", "bg--graa4 padding-l");
    			add_location(div12, file$8, 133, 4, 5203);
    			attr_dev(div13, "class", "bg--graa3 padding-l");
    			add_location(div13, file$8, 134, 4, 5258);
    			attr_dev(div14, "class", "bg--graa2 padding-l");
    			add_location(div14, file$8, 135, 4, 5313);
    			attr_dev(div15, "class", "flex flex-row--reverse bg--eb");
    			add_location(div15, file$8, 132, 2, 5155);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, strong0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t3);
    			append_dev(div3, div1);
    			append_dev(div3, t5);
    			append_dev(div3, div2);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, strong1, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div4);
    			append_dev(div7, t11);
    			append_dev(div7, div5);
    			append_dev(div7, t13);
    			append_dev(div7, div6);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, strong2, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div8);
    			append_dev(div11, t19);
    			append_dev(div11, div9);
    			append_dev(div11, t21);
    			append_dev(div11, div10);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, strong3, anchor);
    			insert_dev(target, t25, anchor);
    			insert_dev(target, div15, anchor);
    			append_dev(div15, div12);
    			append_dev(div15, t27);
    			append_dev(div15, div13);
    			append_dev(div15, t29);
    			append_dev(div15, div14);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(strong0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(strong1);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div7);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(strong2);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(div11);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(strong3);
    			if (detaching) detach_dev(t25);
    			if (detaching) detach_dev(div15);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$1.name,
    		type: "slot",
    		source: "(113:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (140:0) <Prism language="html">
    function create_default_slot_6$2(ctx) {
    	let t_value = `<div class="flex flex-column"></div>
<div class="flex flex-column--reverse"></div>
<div class="flex"></div>
<div class="flex flex-row--reverse"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$2.name,
    		type: "slot",
    		source: "(140:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (153:0) <Card className="bg--graa7">
    function create_default_slot_5$2(ctx) {
    	let strong0;
    	let t1;
    	let div4;
    	let div0;
    	let t3;
    	let div1;
    	let t5;
    	let div2;
    	let t7;
    	let div3;
    	let t9;
    	let strong1;
    	let t11;
    	let div9;
    	let div5;
    	let t13;
    	let div6;
    	let t15;
    	let div7;
    	let t17;
    	let div8;

    	const block = {
    		c: function create() {
    			strong0 = element("strong");
    			strong0.textContent = "flex";
    			t1 = space();
    			div4 = element("div");
    			div0 = element("div");
    			div0.textContent = "Flex item 1";
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "Flex item 2";
    			t5 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item 3";
    			t7 = space();
    			div3 = element("div");
    			div3.textContent = "Flex item 4";
    			t9 = space();
    			strong1 = element("strong");
    			strong1.textContent = "flex flex-wrap--wrap";
    			t11 = space();
    			div9 = element("div");
    			div5 = element("div");
    			div5.textContent = "Flex item 1";
    			t13 = space();
    			div6 = element("div");
    			div6.textContent = "Flex item 2";
    			t15 = space();
    			div7 = element("div");
    			div7.textContent = "Flex item 3";
    			t17 = space();
    			div8 = element("div");
    			div8.textContent = "Flex item 4";
    			attr_dev(strong0, "class", "margin-m");
    			add_location(strong0, file$8, 153, 2, 5773);
    			attr_dev(div0, "class", "bg--graa4 width-1of3 padding-l");
    			add_location(div0, file$8, 155, 4, 5837);
    			attr_dev(div1, "class", "bg--graa3 width-1of3 padding-l");
    			add_location(div1, file$8, 156, 4, 5903);
    			attr_dev(div2, "class", "bg--graa2 width-1of3 padding-l");
    			add_location(div2, file$8, 157, 4, 5969);
    			attr_dev(div3, "class", "bg--graa1 width-1of3 padding-l");
    			add_location(div3, file$8, 158, 4, 6035);
    			attr_dev(div4, "class", "flex");
    			add_location(div4, file$8, 154, 2, 5814);
    			attr_dev(strong1, "class", "margin-m margin-l--t");
    			add_location(strong1, file$8, 160, 2, 6108);
    			attr_dev(div5, "class", "bg--graa4 width-1of3 padding-l");
    			add_location(div5, file$8, 162, 4, 6223);
    			attr_dev(div6, "class", "bg--graa3 width-1of3 padding-l");
    			add_location(div6, file$8, 163, 4, 6289);
    			attr_dev(div7, "class", "bg--graa2 width-1of3 padding-l");
    			add_location(div7, file$8, 164, 4, 6355);
    			attr_dev(div8, "class", "bg--graa1 width-1of3 padding-l");
    			add_location(div8, file$8, 165, 4, 6421);
    			attr_dev(div9, "class", "flex flex-wrap--wrap bg--eb");
    			add_location(div9, file$8, 161, 2, 6177);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, strong0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div4, anchor);
    			append_dev(div4, div0);
    			append_dev(div4, t3);
    			append_dev(div4, div1);
    			append_dev(div4, t5);
    			append_dev(div4, div2);
    			append_dev(div4, t7);
    			append_dev(div4, div3);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, strong1, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, div9, anchor);
    			append_dev(div9, div5);
    			append_dev(div9, t13);
    			append_dev(div9, div6);
    			append_dev(div9, t15);
    			append_dev(div9, div7);
    			append_dev(div9, t17);
    			append_dev(div9, div8);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(strong0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div4);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(strong1);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(div9);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$2.name,
    		type: "slot",
    		source: "(153:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (170:0) <Prism language="html">
    function create_default_slot_4$3(ctx) {
    	let t_value = `<div class="flex"></div>
<div class="flex flex-wrap--wrap"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$3.name,
    		type: "slot",
    		source: "(170:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (179:0) <Card className="bg--graa7">
    function create_default_slot_3$4(ctx) {
    	let div4;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;

    	const block = {
    		c: function create() {
    			div4 = element("div");
    			div0 = element("div");
    			div0.textContent = "flex-item--start";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "flex-item--end";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "flex-item--center";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "flex-item--stretch";
    			attr_dev(div0, "class", "flex-item--start bg--graa4 width-1of3 padding-l");
    			add_location(div0, file$8, 180, 4, 6732);
    			attr_dev(div1, "class", "flex-item--end bg--graa2 width-1of3 padding-l");
    			add_location(div1, file$8, 181, 4, 6820);
    			attr_dev(div2, "class", "flex-item--center bg--graa3 width-1of3 padding-l");
    			add_location(div2, file$8, 182, 4, 6904);
    			attr_dev(div3, "class", "flex-item--stretch bg--graa1 width-1of3 padding-l");
    			add_location(div3, file$8, 183, 4, 6994);
    			attr_dev(div4, "class", "flex bg--eb");
    			set_style(div4, "height", "100px");
    			add_location(div4, file$8, 179, 2, 6680);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, div0);
    			append_dev(div4, t1);
    			append_dev(div4, div1);
    			append_dev(div4, t3);
    			append_dev(div4, div2);
    			append_dev(div4, t5);
    			append_dev(div4, div3);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$4.name,
    		type: "slot",
    		source: "(179:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (188:0) <Prism language="html">
    function create_default_slot_2$6(ctx) {
    	let t_value = `<div class="flex">
  <div class="flex-item--start"></div>
  <div class="flex-item--end"></div>
  <div class="flex-item--center"></div>
  <div class="flex-item--stretch"></div>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$6.name,
    		type: "slot",
    		source: "(188:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (203:0) <Card className="bg--graa7">
    function create_default_slot_1$6(ctx) {
    	let strong0;
    	let t1;
    	let div3;
    	let div0;
    	let t3;
    	let div1;
    	let t5;
    	let div2;
    	let t7;
    	let strong1;
    	let t9;
    	let div7;
    	let div4;
    	let t11;
    	let div5;
    	let t13;
    	let div6;

    	const block = {
    		c: function create() {
    			strong0 = element("strong");
    			strong0.textContent = "Grow";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "flex-item--grow";
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "Flex item 2";
    			t5 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item 3";
    			t7 = space();
    			strong1 = element("strong");
    			strong1.textContent = "No shrink";
    			t9 = space();
    			div7 = element("div");
    			div4 = element("div");
    			div4.textContent = "flex-item--noshrink width-2of3";
    			t11 = space();
    			div5 = element("div");
    			div5.textContent = "width-1of3";
    			t13 = space();
    			div6 = element("div");
    			div6.textContent = "width-1of3";
    			attr_dev(strong0, "class", "margin-m margin-l--t");
    			add_location(strong0, file$8, 203, 2, 7626);
    			attr_dev(div0, "class", "flex-item--grow bg--graa4 padding-l");
    			add_location(div0, file$8, 205, 4, 7709);
    			attr_dev(div1, "class", "bg--graa3 padding-l");
    			add_location(div1, file$8, 206, 4, 7784);
    			attr_dev(div2, "class", "bg--graa2 padding-l");
    			add_location(div2, file$8, 207, 4, 7839);
    			attr_dev(div3, "class", "flex bg--eb");
    			add_location(div3, file$8, 204, 2, 7679);
    			attr_dev(strong1, "class", "margin-m margin-l--t");
    			add_location(strong1, file$8, 209, 2, 7901);
    			attr_dev(div4, "class", "flex-item--noshrink width-2of3 bg--graa4 padding-l");
    			add_location(div4, file$8, 211, 4, 7989);
    			attr_dev(div5, "class", "bg--graa3 width-1of3 padding-l");
    			add_location(div5, file$8, 212, 4, 8094);
    			attr_dev(div6, "class", "bg--graa2 width-1of3 padding-l");
    			add_location(div6, file$8, 213, 4, 8159);
    			attr_dev(div7, "class", "flex bg--eb");
    			add_location(div7, file$8, 210, 2, 7959);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, strong0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t3);
    			append_dev(div3, div1);
    			append_dev(div3, t5);
    			append_dev(div3, div2);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, strong1, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div4);
    			append_dev(div7, t11);
    			append_dev(div7, div5);
    			append_dev(div7, t13);
    			append_dev(div7, div6);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(strong0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(strong1);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div7);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$6.name,
    		type: "slot",
    		source: "(203:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (218:0) <Prism language="html">
    function create_default_slot$6(ctx) {
    	let t_value = `<div class="flex">
  <div class="flex-item--grow"></div>
  <div class="flex-item--noshrink"></div>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$6.name,
    		type: "slot",
    		source: "(218:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$8(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let prism0;
    	let t4;
    	let h31;
    	let t6;
    	let p0;
    	let t7;
    	let i0;
    	let t9;
    	let t10;
    	let card0;
    	let t11;
    	let prism1;
    	let t12;
    	let h32;
    	let t14;
    	let p1;
    	let t15;
    	let i1;
    	let t17;
    	let t18;
    	let card1;
    	let t19;
    	let prism2;
    	let t20;
    	let h33;
    	let t22;
    	let p2;
    	let t23;
    	let i2;
    	let t25;
    	let i3;
    	let t27;
    	let t28;
    	let card2;
    	let t29;
    	let prism3;
    	let t30;
    	let h34;
    	let t32;
    	let p3;
    	let t34;
    	let card3;
    	let t35;
    	let prism4;
    	let t36;
    	let h35;
    	let t38;
    	let p4;
    	let t40;
    	let card4;
    	let t41;
    	let prism5;
    	let t42;
    	let h2;
    	let t44;
    	let h36;
    	let t46;
    	let card5;
    	let t47;
    	let prism6;
    	let t48;
    	let h37;
    	let t50;
    	let p5;
    	let code0;
    	let t52;
    	let t53;
    	let p6;
    	let code1;
    	let t55;
    	let t56;
    	let card6;
    	let t57;
    	let prism7;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_14] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card0 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_13] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_12] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_11] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_10$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_9$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_8$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card3 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_7$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_6$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card4 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_5$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card5 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_3$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card6 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_1$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism7 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Flex";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Flex container";
    			t3 = space();
    			create_component(prism0.$$.fragment);
    			t4 = space();
    			h31 = element("h3");
    			h31.textContent = "Justify content";
    			t6 = space();
    			p0 = element("p");
    			t7 = text("Justify content anvendes til ");
    			i0 = element("i");
    			i0.textContent = "horizontal";
    			t9 = text(" placering af child elementer.");
    			t10 = space();
    			create_component(card0.$$.fragment);
    			t11 = space();
    			create_component(prism1.$$.fragment);
    			t12 = space();
    			h32 = element("h3");
    			h32.textContent = "Align items";
    			t14 = space();
    			p1 = element("p");
    			t15 = text("Align items anvendes til ");
    			i1 = element("i");
    			i1.textContent = "veritcal";
    			t17 = text(" placering af child elementer.");
    			t18 = space();
    			create_component(card1.$$.fragment);
    			t19 = space();
    			create_component(prism2.$$.fragment);
    			t20 = space();
    			h33 = element("h3");
    			h33.textContent = "Flex center";
    			t22 = space();
    			p2 = element("p");
    			t23 = text("Flex center centrere alle child elementer både ");
    			i2 = element("i");
    			i2.textContent = "horizontalt";
    			t25 = text(" og ");
    			i3 = element("i");
    			i3.textContent = "vertical";
    			t27 = text(".");
    			t28 = space();
    			create_component(card2.$$.fragment);
    			t29 = space();
    			create_component(prism3.$$.fragment);
    			t30 = space();
    			h34 = element("h3");
    			h34.textContent = "Directions";
    			t32 = space();
    			p3 = element("p");
    			p3.textContent = "Directions bestemmer rækkefølgen for visning af child elementer.";
    			t34 = space();
    			create_component(card3.$$.fragment);
    			t35 = space();
    			create_component(prism4.$$.fragment);
    			t36 = space();
    			h35 = element("h3");
    			h35.textContent = "Wrap";
    			t38 = space();
    			p4 = element("p");
    			p4.textContent = "Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines\n  istedet for one-line.";
    			t40 = space();
    			create_component(card4.$$.fragment);
    			t41 = space();
    			create_component(prism5.$$.fragment);
    			t42 = space();
    			h2 = element("h2");
    			h2.textContent = "Flex items";
    			t44 = space();
    			h36 = element("h3");
    			h36.textContent = "Align self";
    			t46 = space();
    			create_component(card5.$$.fragment);
    			t47 = space();
    			create_component(prism6.$$.fragment);
    			t48 = space();
    			h37 = element("h3");
    			h37.textContent = "Grow and shrik";
    			t50 = space();
    			p5 = element("p");
    			code0 = element("code");
    			code0.textContent = "flex-item--grow";
    			t52 = text(" sørger for at child element udfylder den tilbageværende plads i flex containeren.");
    			t53 = space();
    			p6 = element("p");
    			code1 = element("code");
    			code1.textContent = "flex-item--noshrink";
    			t55 = text(" sørger for at et child element altid vil have den samme størrelse også på scalering.");
    			t56 = space();
    			create_component(card6.$$.fragment);
    			t57 = space();
    			create_component(prism7.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$8, 5, 0, 92);
    			add_location(h30, file$8, 7, 0, 125);
    			add_location(h31, file$8, 13, 0, 215);
    			add_location(i0, file$8, 14, 32, 272);
    			add_location(p0, file$8, 14, 0, 240);
    			add_location(h32, file$8, 57, 0, 2097);
    			add_location(i1, file$8, 58, 28, 2146);
    			add_location(p1, file$8, 58, 0, 2118);
    			add_location(h33, file$8, 94, 0, 3687);
    			add_location(i2, file$8, 95, 50, 3758);
    			add_location(i3, file$8, 95, 72, 3780);
    			add_location(p2, file$8, 95, 0, 3708);
    			add_location(h34, file$8, 109, 0, 4155);
    			add_location(p3, file$8, 110, 0, 4175);
    			add_location(h35, file$8, 146, 0, 5573);
    			add_location(p4, file$8, 147, 0, 5587);
    			add_location(h2, file$8, 174, 0, 6607);
    			add_location(h36, file$8, 176, 0, 6628);
    			add_location(h37, file$8, 196, 0, 7323);
    			add_location(code0, file$8, 197, 3, 7350);
    			add_location(p5, file$8, 197, 0, 7347);
    			add_location(code1, file$8, 199, 2, 7471);
    			add_location(p6, file$8, 198, 0, 7465);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, p0, anchor);
    			append_dev(p0, t7);
    			append_dev(p0, i0);
    			append_dev(p0, t9);
    			insert_dev(target, t10, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t11, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t12, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, p1, anchor);
    			append_dev(p1, t15);
    			append_dev(p1, i1);
    			append_dev(p1, t17);
    			insert_dev(target, t18, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t19, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t20, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t22, anchor);
    			insert_dev(target, p2, anchor);
    			append_dev(p2, t23);
    			append_dev(p2, i2);
    			append_dev(p2, t25);
    			append_dev(p2, i3);
    			append_dev(p2, t27);
    			insert_dev(target, t28, anchor);
    			mount_component(card2, target, anchor);
    			insert_dev(target, t29, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t30, anchor);
    			insert_dev(target, h34, anchor);
    			insert_dev(target, t32, anchor);
    			insert_dev(target, p3, anchor);
    			insert_dev(target, t34, anchor);
    			mount_component(card3, target, anchor);
    			insert_dev(target, t35, anchor);
    			mount_component(prism4, target, anchor);
    			insert_dev(target, t36, anchor);
    			insert_dev(target, h35, anchor);
    			insert_dev(target, t38, anchor);
    			insert_dev(target, p4, anchor);
    			insert_dev(target, t40, anchor);
    			mount_component(card4, target, anchor);
    			insert_dev(target, t41, anchor);
    			mount_component(prism5, target, anchor);
    			insert_dev(target, t42, anchor);
    			insert_dev(target, h2, anchor);
    			insert_dev(target, t44, anchor);
    			insert_dev(target, h36, anchor);
    			insert_dev(target, t46, anchor);
    			mount_component(card5, target, anchor);
    			insert_dev(target, t47, anchor);
    			mount_component(prism6, target, anchor);
    			insert_dev(target, t48, anchor);
    			insert_dev(target, h37, anchor);
    			insert_dev(target, t50, anchor);
    			insert_dev(target, p5, anchor);
    			append_dev(p5, code0);
    			append_dev(p5, t52);
    			insert_dev(target, t53, anchor);
    			insert_dev(target, p6, anchor);
    			append_dev(p6, code1);
    			append_dev(p6, t55);
    			insert_dev(target, t56, anchor);
    			mount_component(card6, target, anchor);
    			insert_dev(target, t57, anchor);
    			mount_component(prism7, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    			const card2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card2_changes.$$scope = { dirty, ctx };
    			}

    			card2.$set(card2_changes);
    			const prism3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism3_changes.$$scope = { dirty, ctx };
    			}

    			prism3.$set(prism3_changes);
    			const card3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card3_changes.$$scope = { dirty, ctx };
    			}

    			card3.$set(card3_changes);
    			const prism4_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism4_changes.$$scope = { dirty, ctx };
    			}

    			prism4.$set(prism4_changes);
    			const card4_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card4_changes.$$scope = { dirty, ctx };
    			}

    			card4.$set(card4_changes);
    			const prism5_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism5_changes.$$scope = { dirty, ctx };
    			}

    			prism5.$set(prism5_changes);
    			const card5_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card5_changes.$$scope = { dirty, ctx };
    			}

    			card5.$set(card5_changes);
    			const prism6_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism6_changes.$$scope = { dirty, ctx };
    			}

    			prism6.$set(prism6_changes);
    			const card6_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card6_changes.$$scope = { dirty, ctx };
    			}

    			card6.$set(card6_changes);
    			const prism7_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism7_changes.$$scope = { dirty, ctx };
    			}

    			prism7.$set(prism7_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(card2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(card3.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(card4.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(card5.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(card6.$$.fragment, local);
    			transition_in(prism7.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(card2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(card3.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(card4.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(card5.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(card6.$$.fragment, local);
    			transition_out(prism7.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t10);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t11);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t18);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t19);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t20);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t22);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t28);
    			destroy_component(card2, detaching);
    			if (detaching) detach_dev(t29);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t30);
    			if (detaching) detach_dev(h34);
    			if (detaching) detach_dev(t32);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t34);
    			destroy_component(card3, detaching);
    			if (detaching) detach_dev(t35);
    			destroy_component(prism4, detaching);
    			if (detaching) detach_dev(t36);
    			if (detaching) detach_dev(h35);
    			if (detaching) detach_dev(t38);
    			if (detaching) detach_dev(p4);
    			if (detaching) detach_dev(t40);
    			destroy_component(card4, detaching);
    			if (detaching) detach_dev(t41);
    			destroy_component(prism5, detaching);
    			if (detaching) detach_dev(t42);
    			if (detaching) detach_dev(h2);
    			if (detaching) detach_dev(t44);
    			if (detaching) detach_dev(h36);
    			if (detaching) detach_dev(t46);
    			destroy_component(card5, detaching);
    			if (detaching) detach_dev(t47);
    			destroy_component(prism6, detaching);
    			if (detaching) detach_dev(t48);
    			if (detaching) detach_dev(h37);
    			if (detaching) detach_dev(t50);
    			if (detaching) detach_dev(p5);
    			if (detaching) detach_dev(t53);
    			if (detaching) detach_dev(p6);
    			if (detaching) detach_dev(t56);
    			destroy_component(card6, detaching);
    			if (detaching) detach_dev(t57);
    			destroy_component(prism7, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Flex", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Flex> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Flex extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Flex",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    /* docs_src/utilities/Fonts.svelte generated by Svelte v3.38.2 */
    const file$7 = "docs_src/utilities/Fonts.svelte";

    // (10:0) <Card className="bg--graa7 padding-l--rl">
    function create_default_slot_6$1(ctx) {
    	let div0;
    	let strong0;
    	let t1;
    	let p0;
    	let t3;
    	let div1;
    	let strong1;
    	let t5;
    	let p1;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			strong0 = element("strong");
    			strong0.textContent = ".ff-primary:";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890";
    			t3 = space();
    			div1 = element("div");
    			strong1 = element("strong");
    			strong1.textContent = ".ff-secondary:";
    			t5 = space();
    			p1 = element("p");
    			p1.textContent = "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890";
    			add_location(strong0, file$7, 11, 4, 235);
    			add_location(p0, file$7, 12, 4, 269);
    			attr_dev(div0, "class", "ff-primary margin-l--tb");
    			add_location(div0, file$7, 10, 2, 193);
    			add_location(strong1, file$7, 15, 4, 416);
    			add_location(p1, file$7, 16, 4, 452);
    			attr_dev(div1, "class", "ff-secondary");
    			add_location(div1, file$7, 14, 2, 385);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, strong0);
    			append_dev(div0, t1);
    			append_dev(div0, p0);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, strong1);
    			append_dev(div1, t5);
    			append_dev(div1, p1);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$1.name,
    		type: "slot",
    		source: "(10:0) <Card className=\\\"bg--graa7 padding-l--rl\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:0) <Prism language="html">
    function create_default_slot_5$1(ctx) {
    	let t_value = `<div class="ff-primary"></div>
<div class="ff-secondary"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$1.name,
    		type: "slot",
    		source: "(21:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (28:0) <Card className="bg--graa7 padding-l--rl">
    function create_default_slot_4$2(ctx) {
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let p2;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "fontweight-normal";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "fontweight-bold";
    			t3 = space();
    			p2 = element("p");
    			p2.textContent = "fontweight-bolder";
    			attr_dev(p0, "class", "fontweight-normal");
    			add_location(p0, file$7, 28, 2, 746);
    			attr_dev(p1, "class", "fontweight-bold");
    			add_location(p1, file$7, 29, 2, 799);
    			attr_dev(p2, "class", "fontweight-bolder");
    			add_location(p2, file$7, 30, 2, 848);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$2.name,
    		type: "slot",
    		source: "(28:0) <Card className=\\\"bg--graa7 padding-l--rl\\\">",
    		ctx
    	});

    	return block;
    }

    // (34:0) <Prism language="html">
    function create_default_slot_3$3(ctx) {
    	let t_value = `<p class="fontweight-normal"></p>
<p class="fontweight-bold"></p>
<p class="fontweight-bolder"></p>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$3.name,
    		type: "slot",
    		source: "(34:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (46:0) <Card className="bg--graa7 padding-l">
    function create_default_slot_2$5(ctx) {
    	let div2;
    	let t0;
    	let div0;
    	let t2;
    	let div1;
    	let t4;
    	let div5;
    	let t5;
    	let div3;
    	let t7;
    	let div4;
    	let t9;
    	let div8;
    	let t10;
    	let div6;
    	let t12;
    	let div7;
    	let t14;
    	let div11;
    	let t15;
    	let div9;
    	let t17;
    	let div10;
    	let t19;
    	let div14;
    	let t20;
    	let div12;
    	let t22;
    	let div13;
    	let t24;
    	let div17;
    	let t25;
    	let div15;
    	let t27;
    	let div16;
    	let t29;
    	let div20;
    	let t30;
    	let div18;
    	let t32;
    	let div19;
    	let t34;
    	let div23;
    	let t35;
    	let div21;
    	let t37;
    	let div22;
    	let t39;
    	let div26;
    	let t40;
    	let div24;
    	let t42;
    	let div25;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			t0 = text("fontsize-xxsmall = .625rem ~ 10px;\n    ");
    			div0 = element("div");
    			div0.textContent = "fontsize-smaller";
    			t2 = space();
    			div1 = element("div");
    			div1.textContent = "fontsize-larger";
    			t4 = space();
    			div5 = element("div");
    			t5 = text("fontsize-xsmall = .75rem ~ 12px;\n    ");
    			div3 = element("div");
    			div3.textContent = "fontsize-smaller";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "fontsize-larger";
    			t9 = space();
    			div8 = element("div");
    			t10 = text("fontsize-small = .875rem ~ 14px;\n    ");
    			div6 = element("div");
    			div6.textContent = "fontsize-smaller";
    			t12 = space();
    			div7 = element("div");
    			div7.textContent = "fontsize-larger";
    			t14 = space();
    			div11 = element("div");
    			t15 = text("fontsize-medium = 1rem ~ 16px;\n    ");
    			div9 = element("div");
    			div9.textContent = "fontsize-smaller";
    			t17 = space();
    			div10 = element("div");
    			div10.textContent = "fontsize-larger";
    			t19 = space();
    			div14 = element("div");
    			t20 = text("fontsize-large = 1.125rem ~ 18px;\n    ");
    			div12 = element("div");
    			div12.textContent = "fontsize-smaller";
    			t22 = space();
    			div13 = element("div");
    			div13.textContent = "fontsize-larger";
    			t24 = space();
    			div17 = element("div");
    			t25 = text("fontsize-xlarge = 1.25rem ~ 20px;\n    ");
    			div15 = element("div");
    			div15.textContent = "fontsize-smaller";
    			t27 = space();
    			div16 = element("div");
    			div16.textContent = "fontsize-larger";
    			t29 = space();
    			div20 = element("div");
    			t30 = text("fontsize-xxlarge = 1.875rem ~ 30px;\n    ");
    			div18 = element("div");
    			div18.textContent = "fontsize-smaller";
    			t32 = space();
    			div19 = element("div");
    			div19.textContent = "fontsize-larger";
    			t34 = space();
    			div23 = element("div");
    			t35 = text("fontsize-xxxlarge = 2.25rem ~ 36px;\n    ");
    			div21 = element("div");
    			div21.textContent = "fontsize-smaller";
    			t37 = space();
    			div22 = element("div");
    			div22.textContent = "fontsize-larger";
    			t39 = space();
    			div26 = element("div");
    			t40 = text("fontsize-xxxxlarge = 3.125rem ~ 50px;\n    ");
    			div24 = element("div");
    			div24.textContent = "fontsize-smaller";
    			t42 = space();
    			div25 = element("div");
    			div25.textContent = "fontsize-larger";
    			attr_dev(div0, "class", "fontsize-smaller");
    			add_location(div0, file$7, 48, 4, 1496);
    			attr_dev(div1, "class", "fontsize-larger");
    			add_location(div1, file$7, 49, 4, 1553);
    			attr_dev(div2, "class", "fontsize-xxsmall padding-m--b");
    			add_location(div2, file$7, 46, 2, 1409);
    			attr_dev(div3, "class", "fontsize-smaller");
    			add_location(div3, file$7, 53, 4, 1700);
    			attr_dev(div4, "class", "fontsize-larger");
    			add_location(div4, file$7, 54, 4, 1757);
    			attr_dev(div5, "class", "fontsize-xsmall padding-m--tb");
    			add_location(div5, file$7, 51, 2, 1615);
    			attr_dev(div6, "class", "fontsize-smaller");
    			add_location(div6, file$7, 58, 4, 1903);
    			attr_dev(div7, "class", "fontsize-larger");
    			add_location(div7, file$7, 59, 4, 1960);
    			attr_dev(div8, "class", "fontsize-small padding-m--tb");
    			add_location(div8, file$7, 56, 2, 1819);
    			attr_dev(div9, "class", "fontsize-smaller");
    			add_location(div9, file$7, 63, 4, 2105);
    			attr_dev(div10, "class", "fontsize-larger");
    			add_location(div10, file$7, 64, 4, 2162);
    			attr_dev(div11, "class", "fontsize-medium padding-m--tb");
    			add_location(div11, file$7, 61, 2, 2022);
    			attr_dev(div12, "class", "fontsize-smaller");
    			add_location(div12, file$7, 68, 4, 2309);
    			attr_dev(div13, "class", "fontsize-larger");
    			add_location(div13, file$7, 69, 4, 2366);
    			attr_dev(div14, "class", "fontsize-large padding-m--tb");
    			add_location(div14, file$7, 66, 2, 2224);
    			attr_dev(div15, "class", "fontsize-smaller");
    			add_location(div15, file$7, 73, 4, 2514);
    			attr_dev(div16, "class", "fontsize-larger");
    			add_location(div16, file$7, 74, 4, 2571);
    			attr_dev(div17, "class", "fontsize-xlarge padding-m--tb");
    			add_location(div17, file$7, 71, 2, 2428);
    			attr_dev(div18, "class", "fontsize-smaller");
    			add_location(div18, file$7, 78, 4, 2722);
    			attr_dev(div19, "class", "fontsize-larger");
    			add_location(div19, file$7, 79, 4, 2779);
    			attr_dev(div20, "class", "fontsize-xxlarge padding-m--tb");
    			add_location(div20, file$7, 76, 2, 2633);
    			attr_dev(div21, "class", "fontsize-smaller");
    			add_location(div21, file$7, 83, 4, 2931);
    			attr_dev(div22, "class", "fontsize-larger");
    			add_location(div22, file$7, 84, 4, 2988);
    			attr_dev(div23, "class", "fontsize-xxxlarge padding-m--tb");
    			add_location(div23, file$7, 81, 2, 2841);
    			attr_dev(div24, "class", "fontsize-smaller");
    			add_location(div24, file$7, 88, 4, 3142);
    			attr_dev(div25, "class", "fontsize-larger");
    			add_location(div25, file$7, 89, 4, 3199);
    			attr_dev(div26, "class", "fontsize-xxxxlarge padding-m--t");
    			add_location(div26, file$7, 86, 2, 3050);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, t0);
    			append_dev(div2, div0);
    			append_dev(div2, t2);
    			append_dev(div2, div1);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div5, anchor);
    			append_dev(div5, t5);
    			append_dev(div5, div3);
    			append_dev(div5, t7);
    			append_dev(div5, div4);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div8, anchor);
    			append_dev(div8, t10);
    			append_dev(div8, div6);
    			append_dev(div8, t12);
    			append_dev(div8, div7);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, div11, anchor);
    			append_dev(div11, t15);
    			append_dev(div11, div9);
    			append_dev(div11, t17);
    			append_dev(div11, div10);
    			insert_dev(target, t19, anchor);
    			insert_dev(target, div14, anchor);
    			append_dev(div14, t20);
    			append_dev(div14, div12);
    			append_dev(div14, t22);
    			append_dev(div14, div13);
    			insert_dev(target, t24, anchor);
    			insert_dev(target, div17, anchor);
    			append_dev(div17, t25);
    			append_dev(div17, div15);
    			append_dev(div17, t27);
    			append_dev(div17, div16);
    			insert_dev(target, t29, anchor);
    			insert_dev(target, div20, anchor);
    			append_dev(div20, t30);
    			append_dev(div20, div18);
    			append_dev(div20, t32);
    			append_dev(div20, div19);
    			insert_dev(target, t34, anchor);
    			insert_dev(target, div23, anchor);
    			append_dev(div23, t35);
    			append_dev(div23, div21);
    			append_dev(div23, t37);
    			append_dev(div23, div22);
    			insert_dev(target, t39, anchor);
    			insert_dev(target, div26, anchor);
    			append_dev(div26, t40);
    			append_dev(div26, div24);
    			append_dev(div26, t42);
    			append_dev(div26, div25);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div5);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div8);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(div11);
    			if (detaching) detach_dev(t19);
    			if (detaching) detach_dev(div14);
    			if (detaching) detach_dev(t24);
    			if (detaching) detach_dev(div17);
    			if (detaching) detach_dev(t29);
    			if (detaching) detach_dev(div20);
    			if (detaching) detach_dev(t34);
    			if (detaching) detach_dev(div23);
    			if (detaching) detach_dev(t39);
    			if (detaching) detach_dev(div26);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$5.name,
    		type: "slot",
    		source: "(46:0) <Card className=\\\"bg--graa7 padding-l\\\">",
    		ctx
    	});

    	return block;
    }

    // (94:0) <Prism language="html">
    function create_default_slot_1$5(ctx) {
    	let t_value = `<div class="fontsize-xxsmall"></div>
<div class="fontsize-xsmall"></div>
<div class="fontsize-small"></div>
<div class="fontsize-medium"></div>
<div class="fontsize-large"></div>
<div class="fontsize-xlarge"></div>
<div class="fontsize-xxlarge"></div>
<div class="fontsize-xxxlarge"></div>
<div class="fontsize-xxxxlarge"></div>

<div class="fontsize-smaller"></div>
<div class="fontsize-larger"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$5.name,
    		type: "slot",
    		source: "(94:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (111:0) <Card className="bg--graa7 padding-l--rl padding-l--t">
    function create_default_slot$5(ctx) {
    	let h1;
    	let t1;
    	let h2;
    	let t3;
    	let h3;
    	let t5;
    	let h4;
    	let t7;
    	let h5;
    	let t9;
    	let h6;
    	let t11;
    	let p0;
    	let t13;
    	let p1;
    	let t15;
    	let p2;
    	let t17;
    	let p3;
    	let t19;
    	let p4;
    	let t21;
    	let p5;
    	let t23;
    	let p6;
    	let t25;
    	let p7;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "h1";
    			t1 = space();
    			h2 = element("h2");
    			h2.textContent = "h2";
    			t3 = space();
    			h3 = element("h3");
    			h3.textContent = "h3";
    			t5 = space();
    			h4 = element("h4");
    			h4.textContent = "h4";
    			t7 = space();
    			h5 = element("h5");
    			h5.textContent = "h5";
    			t9 = space();
    			h6 = element("h6");
    			h6.textContent = "h6";
    			t11 = space();
    			p0 = element("p");
    			p0.textContent = "fs-ads";
    			t13 = space();
    			p1 = element("p");
    			p1.textContent = "fs-bodytext";
    			t15 = space();
    			p2 = element("p");
    			p2.textContent = "fs-caption";
    			t17 = space();
    			p3 = element("p");
    			p3.textContent = "fs-quote";
    			t19 = space();
    			p4 = element("p");
    			p4.textContent = "fs-showmore";
    			t21 = space();
    			p5 = element("p");
    			p5.textContent = "fs-subtitle";
    			t23 = space();
    			p6 = element("p");
    			p6.textContent = "fs-timestamp";
    			t25 = space();
    			p7 = element("p");
    			p7.textContent = "fs-title";
    			add_location(h1, file$7, 111, 2, 3804);
    			add_location(h2, file$7, 112, 2, 3818);
    			add_location(h3, file$7, 113, 2, 3832);
    			add_location(h4, file$7, 114, 2, 3846);
    			add_location(h5, file$7, 115, 2, 3860);
    			add_location(h6, file$7, 116, 2, 3874);
    			attr_dev(p0, "class", "fs-ads");
    			add_location(p0, file$7, 118, 2, 3889);
    			attr_dev(p1, "class", "fs-bodytext");
    			add_location(p1, file$7, 119, 2, 3920);
    			attr_dev(p2, "class", "fs-caption");
    			add_location(p2, file$7, 120, 2, 3961);
    			attr_dev(p3, "class", "fs-quote");
    			add_location(p3, file$7, 121, 2, 4000);
    			attr_dev(p4, "class", "fs-showmore");
    			add_location(p4, file$7, 122, 2, 4035);
    			attr_dev(p5, "class", "fs-subtitle");
    			add_location(p5, file$7, 123, 2, 4076);
    			attr_dev(p6, "class", "fs-timestamp");
    			add_location(p6, file$7, 124, 2, 4117);
    			attr_dev(p7, "class", "fs-title");
    			add_location(p7, file$7, 125, 2, 4160);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h2, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, h3, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h4, anchor);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, h5, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, h6, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, p2, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, p3, anchor);
    			insert_dev(target, t19, anchor);
    			insert_dev(target, p4, anchor);
    			insert_dev(target, t21, anchor);
    			insert_dev(target, p5, anchor);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, p6, anchor);
    			insert_dev(target, t25, anchor);
    			insert_dev(target, p7, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h2);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(h3);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h4);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(h5);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(h6);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t19);
    			if (detaching) detach_dev(p4);
    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(p5);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(p6);
    			if (detaching) detach_dev(t25);
    			if (detaching) detach_dev(p7);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$5.name,
    		type: "slot",
    		source: "(111:0) <Card className=\\\"bg--graa7 padding-l--rl padding-l--t\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$7(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let card0;
    	let t4;
    	let prism0;
    	let t5;
    	let h31;
    	let t7;
    	let card1;
    	let t8;
    	let prism1;
    	let t9;
    	let h32;
    	let t11;
    	let p0;
    	let t13;
    	let p1;
    	let t15;
    	let p2;
    	let t16;
    	let u0;
    	let t18;
    	let u1;
    	let t20;
    	let t21;
    	let card2;
    	let t22;
    	let prism2;
    	let t23;
    	let h33;
    	let t25;
    	let card3;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "bg--graa7 padding-l--rl",
    				$$slots: { default: [create_default_slot_6$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_5$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "bg--graa7 padding-l--rl",
    				$$slots: { default: [create_default_slot_4$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "bg--graa7 padding-l",
    				$$slots: { default: [create_default_slot_2$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card3 = new Card({
    			props: {
    				className: "bg--graa7 padding-l--rl padding-l--t",
    				$$slots: { default: [create_default_slot$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Fonts";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Font family";
    			t3 = space();
    			create_component(card0.$$.fragment);
    			t4 = space();
    			create_component(prism0.$$.fragment);
    			t5 = space();
    			h31 = element("h3");
    			h31.textContent = "Font-weight";
    			t7 = space();
    			create_component(card1.$$.fragment);
    			t8 = space();
    			create_component(prism1.$$.fragment);
    			t9 = space();
    			h32 = element("h3");
    			h32.textContent = "Font-size";
    			t11 = space();
    			p0 = element("p");
    			p0.textContent = "Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.";
    			t13 = space();
    			p1 = element("p");
    			p1.textContent = "Rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden";
    			t15 = space();
    			p2 = element("p");
    			t16 = text("Der er både en ");
    			u0 = element("u");
    			u0.textContent = "larger";
    			t18 = text(" og en ");
    			u1 = element("u");
    			u1.textContent = "smaller";
    			t20 = text(" mulighed, der begge er relative til parent fontsize");
    			t21 = space();
    			create_component(card2.$$.fragment);
    			t22 = space();
    			create_component(prism2.$$.fragment);
    			t23 = space();
    			h33 = element("h3");
    			h33.textContent = "Headers and font aliases";
    			t25 = space();
    			create_component(card3.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$7, 5, 0, 92);
    			add_location(h30, file$7, 7, 0, 126);
    			add_location(h31, file$7, 25, 0, 679);
    			add_location(h32, file$7, 39, 0, 1048);
    			add_location(p0, file$7, 41, 0, 1068);
    			add_location(p1, file$7, 42, 0, 1155);
    			add_location(u0, file$7, 43, 18, 1276);
    			add_location(u1, file$7, 43, 38, 1296);
    			add_location(p2, file$7, 43, 0, 1258);
    			add_location(h33, file$7, 108, 0, 3711);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, p2, anchor);
    			append_dev(p2, t16);
    			append_dev(p2, u0);
    			append_dev(p2, t18);
    			append_dev(p2, u1);
    			append_dev(p2, t20);
    			insert_dev(target, t21, anchor);
    			mount_component(card2, target, anchor);
    			insert_dev(target, t22, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t25, anchor);
    			mount_component(card3, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    			const card2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card2_changes.$$scope = { dirty, ctx };
    			}

    			card2.$set(card2_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    			const card3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card3_changes.$$scope = { dirty, ctx };
    			}

    			card3.$set(card3_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(card2.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(card3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(card2.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(card3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t7);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t21);
    			destroy_component(card2, detaching);
    			if (detaching) detach_dev(t22);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t25);
    			destroy_component(card3, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Fonts", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Fonts> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Fonts extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Fonts",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* docs_src/utilities/Grid.svelte generated by Svelte v3.38.2 */
    const file$6 = "docs_src/utilities/Grid.svelte";

    // (8:0) <Card className="bg--graa7 text-align--center">
    function create_default_slot_2$4(ctx) {
    	let div3;
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let div2;
    	let p2;
    	let t5;
    	let p3;
    	let t7;
    	let div1;
    	let p4;
    	let t9;
    	let p5;
    	let t11;
    	let div0;
    	let p6;
    	let t13;
    	let p7;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			p0 = element("p");
    			p0.textContent = "grid-width--xlarge: 930px";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Page content width - frontpage";
    			t3 = space();
    			div2 = element("div");
    			p2 = element("p");
    			p2.textContent = "grid-width--large: 910px";
    			t5 = space();
    			p3 = element("p");
    			p3.textContent = "Page content width";
    			t7 = space();
    			div1 = element("div");
    			p4 = element("p");
    			p4.textContent = "grid-width--medium: 730px";
    			t9 = space();
    			p5 = element("p");
    			p5.textContent = "Bodytext container width";
    			t11 = space();
    			div0 = element("div");
    			p6 = element("p");
    			p6.textContent = "grid-width--small: 610px";
    			t13 = space();
    			p7 = element("p");
    			p7.textContent = "Widget width";
    			add_location(p0, file$6, 9, 4, 272);
    			add_location(p1, file$6, 10, 4, 309);
    			add_location(p2, file$6, 12, 6, 438);
    			add_location(p3, file$6, 13, 6, 476);
    			add_location(p4, file$6, 15, 8, 597);
    			add_location(p5, file$6, 16, 8, 638);
    			add_location(p6, file$6, 18, 10, 769);
    			add_location(p7, file$6, 19, 10, 811);
    			attr_dev(div0, "class", "grid-width--small vertical-center bg--eb2");
    			set_style(div0, "overflow", "hidden");
    			add_location(div0, file$6, 17, 8, 678);
    			attr_dev(div1, "class", "grid-width--medium vertical-center bg--eb");
    			set_style(div1, "overflow", "hidden");
    			add_location(div1, file$6, 14, 6, 508);
    			attr_dev(div2, "class", "grid-width--large vertical-center bg--eb2");
    			set_style(div2, "overflow", "hidden");
    			add_location(div2, file$6, 11, 4, 351);
    			attr_dev(div3, "class", "grid-width--xlarge vertical-center bg--eb");
    			set_style(div3, "overflow", "hidden");
    			add_location(div3, file$6, 8, 2, 187);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, p0);
    			append_dev(div3, t1);
    			append_dev(div3, p1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			append_dev(div2, p2);
    			append_dev(div2, t5);
    			append_dev(div2, p3);
    			append_dev(div2, t7);
    			append_dev(div2, div1);
    			append_dev(div1, p4);
    			append_dev(div1, t9);
    			append_dev(div1, p5);
    			append_dev(div1, t11);
    			append_dev(div1, div0);
    			append_dev(div0, p6);
    			append_dev(div0, t13);
    			append_dev(div0, p7);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$4.name,
    		type: "slot",
    		source: "(8:0) <Card className=\\\"bg--graa7 text-align--center\\\">",
    		ctx
    	});

    	return block;
    }

    // (29:0) <Prism language="html">
    function create_default_slot_1$4(ctx) {
    	let t_value = `<div class="grid-width--xlarge"></div>
<div class="grid-width--large"></div>
<div class="grid-width--medium"></div>
<div class="grid-width--small"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$4.name,
    		type: "slot",
    		source: "(29:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (38:0) <Prism language="css">
    function create_default_slot$4(ctx) {
    	let t_value = `--grid-small: 610px;
--grid-medium: 730px;
--grid-large: 910px;
--grid-xlarge: 930px;` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$4.name,
    		type: "slot",
    		source: "(38:0) <Prism language=\\\"css\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let h1;
    	let t1;
    	let card;
    	let t2;
    	let h30;
    	let t4;
    	let prism0;
    	let t5;
    	let h31;
    	let t7;
    	let prism1;
    	let current;

    	card = new Card({
    			props: {
    				className: "bg--graa7 text-align--center",
    				$$slots: { default: [create_default_slot_2$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "css",
    				$$slots: { default: [create_default_slot$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Grid";
    			t1 = space();
    			create_component(card.$$.fragment);
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "HTML class names";
    			t4 = space();
    			create_component(prism0.$$.fragment);
    			t5 = space();
    			h31 = element("h3");
    			h31.textContent = "CSS variable names";
    			t7 = space();
    			create_component(prism1.$$.fragment);
    			attr_dev(h1, "class", "color--eb margin-l--b");
    			add_location(h1, file$6, 5, 0, 92);
    			add_location(h30, file$6, 26, 0, 888);
    			add_location(h31, file$6, 35, 0, 1109);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(card, target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(prism1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(card, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t7);
    			destroy_component(prism1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Grid", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Grid> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Grid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Grid",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* docs_src/utilities/Helpers.svelte generated by Svelte v3.38.2 */
    const file$5 = "docs_src/utilities/Helpers.svelte";

    // (10:0) <Prism language="html">
    function create_default_slot_10(ctx) {
    	let t_value = `<div class="hidden"></div>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(10:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (16:0) <Prism language="html">
    function create_default_slot_9(ctx) {
    	let t_value = `<div class="position-absolute"></div>
<div class="position-fixed"></div>
<div class="position-relative"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(16:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:0) <Card className="bg--graa7">
    function create_default_slot_8(ctx) {
    	let div2;
    	let div0;
    	let t1;
    	let div1;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "float-left";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "float-right";
    			attr_dev(div0, "class", "bg--eb padding-m float-left");
    			add_location(div0, file$5, 25, 4, 448);
    			attr_dev(div1, "class", "bg--eb padding-m float-right");
    			add_location(div1, file$5, 26, 4, 510);
    			add_location(div2, file$5, 24, 2, 438);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(24:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (31:0) <Prism language="html">
    function create_default_slot_7(ctx) {
    	let t_value = `<div class="float-left"></div>
<div class="float-right"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(31:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (38:0) <Prism language="html">
    function create_default_slot_6(ctx) {
    	let t_value = `<div class="clear"></div>` + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(38:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (45:0) <Card className="bg--graa7">
    function create_default_slot_5(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "vertical-center";
    			attr_dev(div, "class", "vertical-center width-1of3 padding-l bg--eb");
    			add_location(div, file$5, 45, 2, 875);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(45:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (49:0) <Prism language="html">
    function create_default_slot_4$1(ctx) {
    	let t_value = `<div class="vertical-center"></div>
<div class="vertical-auto"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$1.name,
    		type: "slot",
    		source: "(49:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (62:0) <Prism language="html">
    function create_default_slot_3$2(ctx) {
    	let t_value = `<div class="margin-none padding-none"></div>
<div class="margin-s padding-s"></div>
<div class="margin-m padding-m"></div>
<div class="margin-l padding-l"></div>
<div class="margin-xl padding-xl"></div>
<div class="margin-xxl padding-xxl"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$2.name,
    		type: "slot",
    		source: "(62:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (76:0) <Prism language="html">
    function create_default_slot_2$3(ctx) {
    	let t_value = `<div class="margin-l--t padding-l--t"></div>
<div class="margin-l--r padding-l--r"></div>
<div class="margin-l--b padding-l--b"></div>
<div class="margin-l--l padding-l--l"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$3.name,
    		type: "slot",
    		source: "(76:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (85:0) <Prism language="html">
    function create_default_slot_1$3(ctx) {
    	let t_value = `<div class="margin-l--tb padding-l--tb"></div>
<div class="margin-l--rl padding-l--rl"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$3.name,
    		type: "slot",
    		source: "(85:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (93:2)
    function create_content_slot$1(ctx) {
    	let div3;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "box-shadow--small";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "box-shadow";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "box-shadow--large";
    			attr_dev(div0, "class", "border-radius box-shadow--small padding-xl margin-l bg--eb");
    			add_location(div0, file$5, 93, 4, 2237);
    			attr_dev(div1, "class", "border-radius box-shadow padding-xl margin-l bg--eb");
    			add_location(div1, file$5, 94, 4, 2337);
    			attr_dev(div2, "class", "border-radius box-shadow--large padding-xl margin-l bg--eb");
    			add_location(div2, file$5, 95, 4, 2423);
    			attr_dev(div3, "slot", "content");
    			add_location(div3, file$5, 92, 2, 2212);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot$1.name,
    		type: "slot",
    		source: "(93:2) ",
    		ctx
    	});

    	return block;
    }

    // (100:0) <Prism language="html">
    function create_default_slot$3(ctx) {
    	let t_value = `<div class="box-shadow--small"></div>
<div class="box-shadow"></div>
<div class="box-shadow--large"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$3.name,
    		type: "slot",
    		source: "(100:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let prism0;
    	let t4;
    	let h31;
    	let t6;
    	let prism1;
    	let t7;
    	let h32;
    	let t9;
    	let card0;
    	let t10;
    	let prism2;
    	let t11;
    	let h33;
    	let t13;
    	let prism3;
    	let t14;
    	let h34;
    	let t16;
    	let p0;
    	let t18;
    	let card1;
    	let t19;
    	let prism4;
    	let t20;
    	let h35;
    	let t22;
    	let p1;
    	let t23;
    	let strong0;
    	let t25;
    	let strong1;
    	let t27;
    	let em0;
    	let t29;
    	let em1;
    	let t31;
    	let t32;
    	let prism5;
    	let t33;
    	let p2;
    	let t34;
    	let strong2;
    	let t36;
    	let strong3;
    	let t38;
    	let t39;
    	let prism6;
    	let t40;
    	let p3;
    	let t41;
    	let em2;
    	let t43;
    	let em3;
    	let t45;
    	let t46;
    	let prism7;
    	let t47;
    	let h36;
    	let t49;
    	let card2;
    	let t50;
    	let prism8;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card0 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_4$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism7 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { content: [create_content_slot$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism8 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Helpers";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Skjult element";
    			t3 = space();
    			create_component(prism0.$$.fragment);
    			t4 = space();
    			h31 = element("h3");
    			h31.textContent = "Position";
    			t6 = space();
    			create_component(prism1.$$.fragment);
    			t7 = space();
    			h32 = element("h3");
    			h32.textContent = "Floats";
    			t9 = space();
    			create_component(card0.$$.fragment);
    			t10 = space();
    			create_component(prism2.$$.fragment);
    			t11 = space();
    			h33 = element("h3");
    			h33.textContent = "Clear";
    			t13 = space();
    			create_component(prism3.$$.fragment);
    			t14 = space();
    			h34 = element("h3");
    			h34.textContent = "Centrér vertikalt";
    			t16 = space();
    			p0 = element("p");
    			p0.textContent = "Kræver en fast bredde på elementet.";
    			t18 = space();
    			create_component(card1.$$.fragment);
    			t19 = space();
    			create_component(prism4.$$.fragment);
    			t20 = space();
    			h35 = element("h3");
    			h35.textContent = "Margin & padding";
    			t22 = space();
    			p1 = element("p");
    			t23 = text("For både ");
    			strong0 = element("strong");
    			strong0.textContent = "margin";
    			t25 = text(" og ");
    			strong1 = element("strong");
    			strong1.textContent = "padding";
    			t27 = text(" klassen har vi fem størrelser\n  ");
    			em0 = element("em");
    			em0.textContent = "(s, m, l, xl og xxl)";
    			t29 = text("\n  og så\n  ");
    			em1 = element("em");
    			em1.textContent = "none";
    			t31 = text(" som sættes på med bindesteg.");
    			t32 = space();
    			create_component(prism5.$$.fragment);
    			t33 = space();
    			p2 = element("p");
    			t34 = text("Ønskes der derimod kun at have ");
    			strong2 = element("strong");
    			strong2.textContent = "margin";
    			t36 = text(" og ");
    			strong3 = element("strong");
    			strong3.textContent = "padding";
    			t38 = text(" i en retning tilføjes dette med double\n  bindestreg.");
    			t39 = space();
    			create_component(prism6.$$.fragment);
    			t40 = space();
    			p3 = element("p");
    			t41 = text("Vi har også to samle klasser for ");
    			em2 = element("em");
    			em2.textContent = "top-bottom";
    			t43 = text(" og ");
    			em3 = element("em");
    			em3.textContent = "right-left";
    			t45 = text(".");
    			t46 = space();
    			create_component(prism7.$$.fragment);
    			t47 = space();
    			h36 = element("h3");
    			h36.textContent = "Box-shadow";
    			t49 = space();
    			create_component(card2.$$.fragment);
    			t50 = space();
    			create_component(prism8.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$5, 5, 0, 92);
    			add_location(h30, file$5, 7, 0, 128);
    			add_location(h31, file$5, 13, 0, 220);
    			add_location(h32, file$5, 21, 0, 390);
    			add_location(h33, file$5, 35, 0, 691);
    			add_location(h34, file$5, 41, 0, 773);
    			add_location(p0, file$5, 42, 0, 800);
    			add_location(h35, file$5, 53, 0, 1073);
    			add_location(strong0, file$5, 55, 11, 1114);
    			add_location(strong1, file$5, 55, 38, 1141);
    			add_location(em0, file$5, 56, 2, 1198);
    			add_location(em1, file$5, 58, 2, 1238);
    			add_location(p1, file$5, 54, 0, 1099);
    			add_location(strong2, file$5, 71, 33, 1610);
    			add_location(strong3, file$5, 71, 60, 1637);
    			add_location(p2, file$5, 70, 0, 1573);
    			add_location(em2, file$5, 82, 36, 1977);
    			add_location(em3, file$5, 82, 59, 2000);
    			add_location(p3, file$5, 82, 0, 1941);
    			add_location(h36, file$5, 89, 0, 2160);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t6, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t9, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t10, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t13, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, h34, anchor);
    			insert_dev(target, t16, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t18, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t19, anchor);
    			mount_component(prism4, target, anchor);
    			insert_dev(target, t20, anchor);
    			insert_dev(target, h35, anchor);
    			insert_dev(target, t22, anchor);
    			insert_dev(target, p1, anchor);
    			append_dev(p1, t23);
    			append_dev(p1, strong0);
    			append_dev(p1, t25);
    			append_dev(p1, strong1);
    			append_dev(p1, t27);
    			append_dev(p1, em0);
    			append_dev(p1, t29);
    			append_dev(p1, em1);
    			append_dev(p1, t31);
    			insert_dev(target, t32, anchor);
    			mount_component(prism5, target, anchor);
    			insert_dev(target, t33, anchor);
    			insert_dev(target, p2, anchor);
    			append_dev(p2, t34);
    			append_dev(p2, strong2);
    			append_dev(p2, t36);
    			append_dev(p2, strong3);
    			append_dev(p2, t38);
    			insert_dev(target, t39, anchor);
    			mount_component(prism6, target, anchor);
    			insert_dev(target, t40, anchor);
    			insert_dev(target, p3, anchor);
    			append_dev(p3, t41);
    			append_dev(p3, em2);
    			append_dev(p3, t43);
    			append_dev(p3, em3);
    			append_dev(p3, t45);
    			insert_dev(target, t46, anchor);
    			mount_component(prism7, target, anchor);
    			insert_dev(target, t47, anchor);
    			insert_dev(target, h36, anchor);
    			insert_dev(target, t49, anchor);
    			mount_component(card2, target, anchor);
    			insert_dev(target, t50, anchor);
    			mount_component(prism8, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    			const prism3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism3_changes.$$scope = { dirty, ctx };
    			}

    			prism3.$set(prism3_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism4_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism4_changes.$$scope = { dirty, ctx };
    			}

    			prism4.$set(prism4_changes);
    			const prism5_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism5_changes.$$scope = { dirty, ctx };
    			}

    			prism5.$set(prism5_changes);
    			const prism6_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism6_changes.$$scope = { dirty, ctx };
    			}

    			prism6.$set(prism6_changes);
    			const prism7_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism7_changes.$$scope = { dirty, ctx };
    			}

    			prism7.$set(prism7_changes);
    			const card2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card2_changes.$$scope = { dirty, ctx };
    			}

    			card2.$set(card2_changes);
    			const prism8_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism8_changes.$$scope = { dirty, ctx };
    			}

    			prism8.$set(prism8_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(prism7.$$.fragment, local);
    			transition_in(card2.$$.fragment, local);
    			transition_in(prism8.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(prism7.$$.fragment, local);
    			transition_out(card2.$$.fragment, local);
    			transition_out(prism8.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t6);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t9);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t10);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t13);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(h34);
    			if (detaching) detach_dev(t16);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t18);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t19);
    			destroy_component(prism4, detaching);
    			if (detaching) detach_dev(t20);
    			if (detaching) detach_dev(h35);
    			if (detaching) detach_dev(t22);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t32);
    			destroy_component(prism5, detaching);
    			if (detaching) detach_dev(t33);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t39);
    			destroy_component(prism6, detaching);
    			if (detaching) detach_dev(t40);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t46);
    			destroy_component(prism7, detaching);
    			if (detaching) detach_dev(t47);
    			if (detaching) detach_dev(h36);
    			if (detaching) detach_dev(t49);
    			destroy_component(card2, detaching);
    			if (detaching) detach_dev(t50);
    			destroy_component(prism8, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Helpers", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Helpers> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Helpers extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Helpers",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* docs_src/utilities/Sizing.svelte generated by Svelte v3.38.2 */
    const file$4 = "docs_src/utilities/Sizing.svelte";

    // (10:0) <Card className="bg--graa7">
    function create_default_slot_3$1(ctx) {
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;
    	let t5;
    	let div3;
    	let t7;
    	let div4;
    	let t9;
    	let div5;
    	let t11;
    	let div6;
    	let t13;
    	let div7;
    	let t15;
    	let div8;
    	let t17;
    	let div9;
    	let t19;
    	let div10;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "width-100vw";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "width-auto";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "width-1of1";
    			t5 = space();
    			div3 = element("div");
    			div3.textContent = "width-5of6";
    			t7 = space();
    			div4 = element("div");
    			div4.textContent = "width-3of4";
    			t9 = space();
    			div5 = element("div");
    			div5.textContent = "width-2of3";
    			t11 = space();
    			div6 = element("div");
    			div6.textContent = "width-1of2";
    			t13 = space();
    			div7 = element("div");
    			div7.textContent = "width-1of3";
    			t15 = space();
    			div8 = element("div");
    			div8.textContent = "width-1of4";
    			t17 = space();
    			div9 = element("div");
    			div9.textContent = "width-1of5";
    			t19 = space();
    			div10 = element("div");
    			div10.textContent = "width-1of6";
    			attr_dev(div0, "class", "bg--eb padding-m width-100vw");
    			add_location(div0, file$4, 10, 2, 176);
    			attr_dev(div1, "class", "bg--eb padding-m width-auto");
    			add_location(div1, file$4, 11, 2, 238);
    			attr_dev(div2, "class", "bg--eb padding-m width-1of1");
    			add_location(div2, file$4, 12, 2, 298);
    			attr_dev(div3, "class", "bg--eb padding-m width-5of6");
    			add_location(div3, file$4, 13, 2, 358);
    			attr_dev(div4, "class", "bg--eb padding-m width-3of4");
    			add_location(div4, file$4, 14, 2, 418);
    			attr_dev(div5, "class", "bg--eb padding-m width-2of3");
    			add_location(div5, file$4, 15, 2, 478);
    			attr_dev(div6, "class", "bg--eb padding-m width-1of2");
    			add_location(div6, file$4, 16, 2, 538);
    			attr_dev(div7, "class", "bg--eb padding-m width-1of3");
    			add_location(div7, file$4, 17, 2, 598);
    			attr_dev(div8, "class", "bg--eb padding-m width-1of4");
    			add_location(div8, file$4, 18, 2, 658);
    			attr_dev(div9, "class", "bg--eb padding-m width-1of5");
    			add_location(div9, file$4, 19, 2, 718);
    			attr_dev(div10, "class", "bg--eb padding-m width-1of6");
    			add_location(div10, file$4, 20, 2, 778);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div2, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div3, anchor);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, div4, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div5, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, div6, anchor);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, div7, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, div8, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, div9, anchor);
    			insert_dev(target, t19, anchor);
    			insert_dev(target, div10, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(div4);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div5);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(div6);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(div7);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(div8);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(div9);
    			if (detaching) detach_dev(t19);
    			if (detaching) detach_dev(div10);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$1.name,
    		type: "slot",
    		source: "(10:0) <Card className=\\\"bg--graa7\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:0) <Prism language="html">
    function create_default_slot_2$2(ctx) {
    	let t_value = `<div class="width-100vw"></div>
<div class="width-auto"></div>
<div class="width-1of1"></div>
<div class="width-5of6"></div>
<div class="width-3of4"></div>
<div class="width-2of3"></div>
<div class="width-1of2"></div>
<div class="width-1of3"></div>
<div class="width-1of4"></div>
<div class="width-1of5"></div>
<div class="width-1of6"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$2.name,
    		type: "slot",
    		source: "(24:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (40:0) <Card>
    function create_default_slot_1$2(ctx) {
    	let div3;
    	let div0;
    	let t1;
    	let div1;
    	let t3;
    	let div2;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "height-100vh*";
    			t1 = space();
    			div1 = element("div");
    			div1.textContent = "height-auto";
    			t3 = space();
    			div2 = element("div");
    			div2.textContent = "height-1of1";
    			attr_dev(div0, "class", "bg--eb padding-m width-1of4 height-100vh");
    			set_style(div0, "display", "inline-block");
    			add_location(div0, file$4, 41, 4, 1340);
    			attr_dev(div1, "class", "bg--eb padding-m width-1of4 height-auto");
    			set_style(div1, "display", "inline-block");
    			add_location(div1, file$4, 42, 4, 1448);
    			attr_dev(div2, "class", "bg--eb padding-m width-1of4 height-1of1");
    			set_style(div2, "display", "inline-block");
    			add_location(div2, file$4, 43, 4, 1553);
    			attr_dev(div3, "class", "text-align--center bg--graa7");
    			set_style(div3, "height", "200px");
    			set_style(div3, "overflow", "hidden");
    			add_location(div3, file$4, 40, 2, 1253);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$2.name,
    		type: "slot",
    		source: "(40:0) <Card>",
    		ctx
    	});

    	return block;
    }

    // (46:2)
    function create_footer_slot(ctx) {
    	let div;
    	let p;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p = element("p");
    			p.textContent = "* Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html";
    			attr_dev(p, "class", "fontsize-small");
    			add_location(p, file$4, 46, 4, 1689);
    			attr_dev(div, "slot", "footer");
    			add_location(div, file$4, 45, 2, 1665);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_footer_slot.name,
    		type: "slot",
    		source: "(46:2) ",
    		ctx
    	});

    	return block;
    }

    // (53:0) <Prism language="html">
    function create_default_slot$2(ctx) {
    	let t_value = `<div class="height-100vh"></div>
<div class="height-auto"></div>
<div class="height-1of1"></div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(53:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let card0;
    	let t4;
    	let prism0;
    	let t5;
    	let h31;
    	let t7;
    	let card1;
    	let t8;
    	let prism1;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { default: [create_default_slot_3$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_2$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				$$slots: {
    					footer: [create_footer_slot],
    					default: [create_default_slot_1$2]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Sizing";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Bredder";
    			t3 = space();
    			create_component(card0.$$.fragment);
    			t4 = space();
    			create_component(prism0.$$.fragment);
    			t5 = space();
    			h31 = element("h3");
    			h31.textContent = "Højder";
    			t7 = space();
    			create_component(card1.$$.fragment);
    			t8 = space();
    			create_component(prism1.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$4, 5, 0, 92);
    			add_location(h30, file$4, 7, 0, 127);
    			add_location(h31, file$4, 37, 0, 1227);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(prism1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t7);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Sizing", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sizing> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Sizing extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sizing",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* docs_src/utilities/Text.svelte generated by Svelte v3.38.2 */
    const file$3 = "docs_src/utilities/Text.svelte";

    // (10:0) <Card className="bg--graa7 padding-m">
    function create_default_slot_4(ctx) {
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let p2;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "Centreret tekst";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Venstrestillet tekst";
    			t3 = space();
    			p2 = element("p");
    			p2.textContent = "Højrestillet tekst";
    			attr_dev(p0, "class", "text-align--center");
    			add_location(p0, file$3, 10, 2, 191);
    			attr_dev(p1, "class", "text-align--left");
    			add_location(p1, file$3, 11, 2, 243);
    			attr_dev(p2, "class", "text-align--right");
    			add_location(p2, file$3, 12, 2, 298);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(10:0) <Card className=\\\"bg--graa7 padding-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (16:0) <Prism language="html">
    function create_default_slot_3(ctx) {
    	let t_value = `<p class="text-align--center"></p>
<p class="text-align--left"></p>
<p class="text-align--right"></p>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(16:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:0) <Card className="bg--graa7 padding-m">
    function create_default_slot_2$1(ctx) {
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "SMÅ BOGSTAVER";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "store bogstaver";
    			attr_dev(p0, "class", "text-transform--lowercase");
    			add_location(p0, file$3, 24, 2, 567);
    			attr_dev(p1, "class", "text-transform--uppercase");
    			add_location(p1, file$3, 25, 2, 624);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(24:0) <Card className=\\\"bg--graa7 padding-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (29:0) <Prism language="html">
    function create_default_slot_1$1(ctx) {
    	let t_value = `<p class="text-transform--lowercase"></p>
<p class="text-transform--uppercase"></p>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(29:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    // (37:2)
    function create_content_slot(ctx) {
    	let div2;
    	let div0;
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let div1;
    	let p2;
    	let t5;
    	let p3;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "normal line-height";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "normal line-height";
    			t3 = space();
    			div1 = element("div");
    			p2 = element("p");
    			p2.textContent = "lineheight-m";
    			t5 = space();
    			p3 = element("p");
    			p3.textContent = "lineheight-m";
    			add_location(p0, file$3, 38, 6, 1029);
    			add_location(p1, file$3, 39, 6, 1061);
    			attr_dev(div0, "class", "width-1of3 margin-l");
    			add_location(div0, file$3, 37, 4, 989);
    			add_location(p2, file$3, 42, 6, 1155);
    			add_location(p3, file$3, 43, 6, 1181);
    			attr_dev(div1, "class", "width-1of3 margin-l lineheight-m");
    			add_location(div1, file$3, 41, 4, 1102);
    			attr_dev(div2, "class", "flex flex-justify--between");
    			attr_dev(div2, "slot", "content");
    			add_location(div2, file$3, 36, 2, 929);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, p0);
    			append_dev(div0, t1);
    			append_dev(div0, p1);
    			append_dev(div2, t3);
    			append_dev(div2, div1);
    			append_dev(div1, p2);
    			append_dev(div1, t5);
    			append_dev(div1, p3);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot.name,
    		type: "slot",
    		source: "(37:2) ",
    		ctx
    	});

    	return block;
    }

    // (49:0) <Prism language="html">
    function create_default_slot$1(ctx) {
    	let t_value = `<div class="lineheight-m">
  <p>line-height: 1.5em</p>
</div>` + "";

    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(49:0) <Prism language=\\\"html\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let card0;
    	let t4;
    	let prism0;
    	let t5;
    	let h31;
    	let t7;
    	let card1;
    	let t8;
    	let prism1;
    	let t9;
    	let h32;
    	let t11;
    	let p;
    	let t13;
    	let card2;
    	let t14;
    	let prism2;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "bg--graa7 padding-m",
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "bg--graa7 padding-m",
    				$$slots: { default: [create_default_slot_2$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "bg--graa7",
    				$$slots: { content: [create_content_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				$$slots: { default: [create_default_slot$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Text";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Text alignment";
    			t3 = space();
    			create_component(card0.$$.fragment);
    			t4 = space();
    			create_component(prism0.$$.fragment);
    			t5 = space();
    			h31 = element("h3");
    			h31.textContent = "Text transform";
    			t7 = space();
    			create_component(card1.$$.fragment);
    			t8 = space();
    			create_component(prism1.$$.fragment);
    			t9 = space();
    			h32 = element("h3");
    			h32.textContent = "Line height";
    			t11 = space();
    			p = element("p");
    			p.textContent = "Default line-height er baseret på browseren normalt 1.2";
    			t13 = space();
    			create_component(card2.$$.fragment);
    			t14 = space();
    			create_component(prism2.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$3, 5, 0, 92);
    			add_location(h30, file$3, 7, 0, 125);
    			add_location(h31, file$3, 21, 0, 501);
    			add_location(h32, file$3, 33, 0, 814);
    			add_location(p, file$3, 34, 0, 835);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(card0, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(card1, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, p, anchor);
    			insert_dev(target, t13, anchor);
    			mount_component(card2, target, anchor);
    			insert_dev(target, t14, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const prism0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism0_changes.$$scope = { dirty, ctx };
    			}

    			prism0.$set(prism0_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const prism1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism1_changes.$$scope = { dirty, ctx };
    			}

    			prism1.$set(prism1_changes);
    			const card2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card2_changes.$$scope = { dirty, ctx };
    			}

    			card2.$set(card2_changes);
    			const prism2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				prism2_changes.$$scope = { dirty, ctx };
    			}

    			prism2.$set(prism2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(prism0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(card2.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(prism0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(card2.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t3);
    			destroy_component(card0, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t7);
    			destroy_component(card1, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t13);
    			destroy_component(card2, detaching);
    			if (detaching) detach_dev(t14);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Text", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Text> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Card });
    	return [];
    }

    class Text extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Text",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    const routes = [
        { link: '/', title: 'Overblik', component: Home },
        { link: '/components/accordion', title: 'Accordion', type: 'component', component: Accordion_1 },
        { link: '/components/articlecard', title: 'Article card', type: 'component', component: ArticleCard_1 },
        { link: '/components/badge', title: 'Badge', type: 'component', component: Badge_1 },
        { link: '/components/button', title: 'Button', type: 'component', component: Button_1 },
        { link: '/components/buttongroup', title: 'Button group', type: 'component', component: ButtonGroup_1 },
        { link: '/components/card', title: 'Card', type: 'component', component: Card_1 },
        { link: '/components/form-elements', title: 'Form elements', type: 'component', component: FormElement_1 },
        { link: '/components/icon', title: 'Icon', type: 'component', component: Icon_1 },
        { link: '/components/horizontalscroll', title: 'Horizontal scroll', type: 'component', component: HorizontalScroll_1 },
        { link: '/components/tabs', title: 'Tabs', type: 'component', component: Tabs_1 },
        { link: '/components/spinner', title: 'Spinner', type: 'component', component: Spinner_1 },
        { link: '/components/toggler', title: 'Toggler', type: 'component', component: Toggler_1 },
        { link: '/components/tooltip', title: 'Tooltip', type: 'component', component: Tooltip_1 },
        { link: '/utilities/animation', title: 'Animation', type: 'utility', component: Animation },
        { link: '/utilities/border', title: 'Border', type: 'utility', component: Border },
        { link: '/utilities/color', title: 'Color', type: 'utility', component: Color },
        { link: '/utilities/datatheme', title: 'Data theme', type: 'utility', component: DataTheme },
        { link: '/utilities/flex', title: 'Flex', type: 'utility', component: Flex },
        { link: '/utilities/fonts', title: 'Fonts', type: 'utility', component: Fonts },
        { link: '/utilities/grid', title: 'Grid', type: 'utility', component: Grid },
        { link: '/utilities/helpers', title: 'Helpers', type: 'utility', component: Helpers },
        { link: '/utilities/sizing', title: 'Sizing', type: 'utility', component: Sizing },
        { link: '/utilities/text', title: 'Text', type: 'utility', component: Text },
    ];

    /* docs_src/routes/Sidebar.svelte generated by Svelte v3.38.2 */
    const file$2 = "docs_src/routes/Sidebar.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    // (42:2) {#each menuItems as menuItem}
    function create_each_block_2(ctx) {
    	let div;
    	let a;
    	let t_value = /*menuItem*/ ctx[5].title + "";
    	let t;
    	let a_class_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			a = element("a");
    			t = text(t_value);

    			attr_dev(a, "class", a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t fontsize-large" + " svelte-av0po4");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$2, 43, 6, 1474);
    			attr_dev(div, "class", "sidebar-menuitem-container padding-l svelte-av0po4");
    			add_location(div, file$2, 42, 4, 1417);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, a);
    			append_dev(a, t);

    			if (!mounted) {
    				dispose = action_destroyer(link.call(null, a));
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*url*/ 1 && a_class_value !== (a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t fontsize-large" + " svelte-av0po4")) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(42:2) {#each menuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    // (56:6) {#each componentMenuItems as menuItem}
    function create_each_block_1(ctx) {
    	let a;
    	let t0_value = /*menuItem*/ ctx[5].title + "";
    	let t0;
    	let t1;
    	let a_class_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();

    			attr_dev(a, "class", a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$2, 56, 8, 1923);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);

    			if (!mounted) {
    				dispose = action_destroyer(link.call(null, a));
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*url*/ 1 && a_class_value !== (a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4")) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(56:6) {#each componentMenuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    // (70:6) {#each utilityMenuItems as menuItem}
    function create_each_block(ctx) {
    	let a;
    	let t0_value = /*menuItem*/ ctx[5].title + "";
    	let t0;
    	let t1;
    	let a_class_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();

    			attr_dev(a, "class", a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$2, 70, 8, 2393);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);

    			if (!mounted) {
    				dispose = action_destroyer(link.call(null, a));
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*url*/ 1 && a_class_value !== (a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4")) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(70:6) {#each utilityMenuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div9;
    	let div2;
    	let div0;
    	let a;
    	let img;
    	let img_src_value;
    	let t0;
    	let div1;
    	let p;
    	let t2;
    	let t3;
    	let div5;
    	let div3;
    	let t5;
    	let div4;
    	let t6;
    	let div8;
    	let div6;
    	let t8;
    	let div7;
    	let each_value_2 = /*menuItems*/ ctx[1];
    	validate_each_argument(each_value_2);
    	let each_blocks_2 = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	let each_value_1 = /*componentMenuItems*/ ctx[2];
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let each_value = /*utilityMenuItems*/ ctx[3];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div9 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			a = element("a");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			p = element("p");
    			p.textContent = "Design system";
    			t2 = space();

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].c();
    			}

    			t3 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Components";
    			t5 = space();
    			div4 = element("div");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t6 = space();
    			div8 = element("div");
    			div6 = element("div");
    			div6.textContent = "Utilities";
    			t8 = space();
    			div7 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(img, "alt", "");
    			if (img.src !== (img_src_value = "ekstrabladet.svg")) attr_dev(img, "src", img_src_value);
    			set_style(img, "height", "70px");
    			add_location(img, file$2, 34, 8, 1148);
    			attr_dev(a, "href", "#/");
    			attr_dev(a, "class", "svelte-av0po4");
    			add_location(a, file$2, 33, 6, 1126);
    			add_location(div0, file$2, 32, 4, 1114);
    			attr_dev(p, "class", "flex--grow width-1of1 color--graa1 fontweight-bold");
    			add_location(p, file$2, 38, 6, 1281);
    			attr_dev(div1, "class", "flex-item flex-item--center");
    			add_location(div1, file$2, 37, 4, 1233);
    			attr_dev(div2, "class", "flex flex-justify--around sidebar-logo-container padding-m--rl svelte-av0po4");
    			add_location(div2, file$2, 31, 2, 1033);
    			attr_dev(div3, "class", "sidebar-submenu-title fontsize-small svelte-av0po4");
    			add_location(div3, file$2, 53, 4, 1763);
    			attr_dev(div4, "class", "sidebar-submenu-items");
    			add_location(div4, file$2, 54, 4, 1834);
    			attr_dev(div5, "class", "sidebar-menuitem-container padding-l svelte-av0po4");
    			add_location(div5, file$2, 52, 2, 1708);
    			attr_dev(div6, "class", "sidebar-submenu-title fontsize-small svelte-av0po4");
    			add_location(div6, file$2, 67, 4, 2236);
    			attr_dev(div7, "class", "sidebar-submenu-items");
    			add_location(div7, file$2, 68, 4, 2306);
    			attr_dev(div8, "class", "sidebar-menuitem-container padding-l svelte-av0po4");
    			add_location(div8, file$2, 66, 2, 2181);
    			attr_dev(div9, "id", "sidebar-menu");
    			attr_dev(div9, "class", "sidebar-container height-100vh bg--white margin-l--r svelte-av0po4");
    			add_location(div9, file$2, 30, 0, 946);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div9, anchor);
    			append_dev(div9, div2);
    			append_dev(div2, div0);
    			append_dev(div0, a);
    			append_dev(a, img);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, p);
    			append_dev(div9, t2);

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].m(div9, null);
    			}

    			append_dev(div9, t3);
    			append_dev(div9, div5);
    			append_dev(div5, div3);
    			append_dev(div5, t5);
    			append_dev(div5, div4);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div4, null);
    			}

    			append_dev(div9, t6);
    			append_dev(div9, div8);
    			append_dev(div8, div6);
    			append_dev(div8, t8);
    			append_dev(div8, div7);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div7, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*menuItems, url*/ 3) {
    				each_value_2 = /*menuItems*/ ctx[1];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks_2[i]) {
    						each_blocks_2[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_2[i] = create_each_block_2(child_ctx);
    						each_blocks_2[i].c();
    						each_blocks_2[i].m(div9, t3);
    					}
    				}

    				for (; i < each_blocks_2.length; i += 1) {
    					each_blocks_2[i].d(1);
    				}

    				each_blocks_2.length = each_value_2.length;
    			}

    			if (dirty & /*componentMenuItems, url*/ 5) {
    				each_value_1 = /*componentMenuItems*/ ctx[2];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(div4, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty & /*utilityMenuItems, url*/ 9) {
    				each_value = /*utilityMenuItems*/ ctx[3];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div7, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div9);
    			destroy_each(each_blocks_2, detaching);
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Sidebar", slots, []);
    	let { menuItemList = [] } = $$props;
    	let url = window.location.hash.substr(1);
    	let menuItems = [];
    	let componentMenuItems = [];
    	let utilityMenuItems = [];

    	menuItemList.forEach(menuItem => {
    		if (menuItem.type === "component") componentMenuItems.push(menuItem);
    		if (menuItem.type === "utility") utilityMenuItems.push(menuItem);
    		if (!menuItem.type) menuItems.push(menuItem);
    	});

    	// Chance URL on menu-click
    	onMount(() => {
    		const m = document.querySelectorAll("#sidebar-menu .sidebar-item");

    		m.forEach(item => {
    			item.addEventListener("click", () => {
    				$$invalidate(0, url = window.location.hash.substr(1));
    			});
    		});
    	});

    	// Listener to check whenever the hash URL changes make sure to match the menu
    	window.addEventListener("hashchange", () => {
    		$$invalidate(0, url = window.location.hash.substr(1));
    	});

    	const writable_props = ["menuItemList"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sidebar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("menuItemList" in $$props) $$invalidate(4, menuItemList = $$props.menuItemList);
    	};

    	$$self.$capture_state = () => ({
    		link,
    		onMount,
    		menuItemList,
    		url,
    		menuItems,
    		componentMenuItems,
    		utilityMenuItems
    	});

    	$$self.$inject_state = $$props => {
    		if ("menuItemList" in $$props) $$invalidate(4, menuItemList = $$props.menuItemList);
    		if ("url" in $$props) $$invalidate(0, url = $$props.url);
    		if ("menuItems" in $$props) $$invalidate(1, menuItems = $$props.menuItems);
    		if ("componentMenuItems" in $$props) $$invalidate(2, componentMenuItems = $$props.componentMenuItems);
    		if ("utilityMenuItems" in $$props) $$invalidate(3, utilityMenuItems = $$props.utilityMenuItems);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [url, menuItems, componentMenuItems, utilityMenuItems, menuItemList];
    }

    class Sidebar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { menuItemList: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sidebar",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get menuItemList() {
    		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set menuItemList(value) {
    		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* docs_src/routes/Navbar.svelte generated by Svelte v3.38.2 */
    const file$1 = "docs_src/routes/Navbar.svelte";

    // (14:6) <Button size="small" initial={$sourceType === 'svelte'} on:click={() => changeSourceType('svelte')}>
    function create_default_slot_2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Svelte");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(14:6) <Button size=\\\"small\\\" initial={$sourceType === 'svelte'} on:click={() => changeSourceType('svelte')}>",
    		ctx
    	});

    	return block;
    }

    // (15:6) <Button size="small" initial={$sourceType === 'html'} on:click={() => changeSourceType('html')}>
    function create_default_slot_1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("HTML");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(15:6) <Button size=\\\"small\\\" initial={$sourceType === 'html'} on:click={() => changeSourceType('html')}>",
    		ctx
    	});

    	return block;
    }

    // (13:4) <ButtonGroup type="secondary">
    function create_default_slot(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "small",
    				initial: /*$sourceType*/ ctx[0] === "svelte",
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler*/ ctx[2]);

    	button1 = new Button({
    			props: {
    				size: "small",
    				initial: /*$sourceType*/ ctx[0] === "html",
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_1*/ ctx[3]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};
    			if (dirty & /*$sourceType*/ 1) button0_changes.initial = /*$sourceType*/ ctx[0] === "svelte";

    			if (dirty & /*$$scope*/ 16) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};
    			if (dirty & /*$sourceType*/ 1) button1_changes.initial = /*$sourceType*/ ctx[0] === "html";

    			if (dirty & /*$$scope*/ 16) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(13:4) <ButtonGroup type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div;
    	let nav;
    	let a;
    	let i;
    	let t0;
    	let t1;
    	let buttongroup;
    	let current;

    	buttongroup = new ButtonGroup({
    			props: {
    				type: "secondary",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			nav = element("nav");
    			a = element("a");
    			i = element("i");
    			t0 = text("Github");
    			t1 = space();
    			create_component(buttongroup.$$.fragment);
    			attr_dev(i, "class", "fab fa-github margin-s--r");
    			add_location(i, file$1, 10, 7, 443);
    			attr_dev(a, "href", "https://github.com/EkstraBladetUdvikling/eb-designsystem");
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "class", "flex svelte-1offyji");
    			add_location(a, file$1, 9, 4, 340);
    			attr_dev(nav, "class", "navmenu flex flex-justify--between flex-align--center padding-xl--rl svelte-1offyji");
    			add_location(nav, file$1, 8, 2, 253);
    			attr_dev(div, "class", "navmenu-container position-fixed margin-xl--b bg-red svelte-1offyji");
    			add_location(div, file$1, 7, 0, 184);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, nav);
    			append_dev(nav, a);
    			append_dev(a, i);
    			append_dev(a, t0);
    			append_dev(nav, t1);
    			mount_component(buttongroup, nav, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const buttongroup_changes = {};

    			if (dirty & /*$$scope, $sourceType*/ 17) {
    				buttongroup_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup.$set(buttongroup_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(buttongroup.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(buttongroup.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(buttongroup);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let $sourceType;
    	validate_store(sourceType, "sourceType");
    	component_subscribe($$self, sourceType, $$value => $$invalidate(0, $sourceType = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Navbar", slots, []);

    	function changeSourceType(source) {
    		sourceType.set(source);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Navbar> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => changeSourceType("svelte");
    	const click_handler_1 = () => changeSourceType("html");

    	$$self.$capture_state = () => ({
    		Button,
    		ButtonGroup,
    		sourceType,
    		changeSourceType,
    		$sourceType
    	});

    	return [$sourceType, changeSourceType, click_handler, click_handler_1];
    }

    class Navbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* docs_src/App.svelte generated by Svelte v3.38.2 */
    const file = "docs_src/App.svelte";

    function create_fragment(ctx) {
    	let navbar;
    	let t0;
    	let sidebar;
    	let t1;
    	let div;
    	let router;
    	let current;
    	navbar = new Navbar({ $$inline: true });

    	sidebar = new Sidebar({
    			props: { menuItemList: /*menuItemList*/ ctx[1] },
    			$$inline: true
    		});

    	router = new Router({
    			props: { routes: /*routes*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			create_component(sidebar.$$.fragment);
    			t1 = space();
    			div = element("div");
    			create_component(router.$$.fragment);
    			attr_dev(div, "class", "content-container padding-xl svelte-ftylog");
    			add_location(div, file, 16, 0, 454);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(navbar, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(sidebar, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			mount_component(router, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const router_changes = {};
    			if (dirty & /*routes*/ 1) router_changes.routes = /*routes*/ ctx[0];
    			router.$set(router_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(sidebar.$$.fragment, local);
    			transition_in(router.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
    			transition_out(sidebar.$$.fragment, local);
    			transition_out(router.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(navbar, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(sidebar, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			destroy_component(router);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const routeList = routes;

    	// Fills the object to create a SPA routing
    	let routes$1 = {};

    	let menuItemList = [];

    	routeList.forEach(route => {
    		$$invalidate(0, routes$1[route.link] = route.component, routes$1);
    		menuItemList.push(route);
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Router,
    		Routes: routes,
    		Sidebar,
    		Navbar,
    		routeList,
    		routes: routes$1,
    		menuItemList
    	});

    	$$self.$inject_state = $$props => {
    		if ("routes" in $$props) $$invalidate(0, routes$1 = $$props.routes);
    		if ("menuItemList" in $$props) $$invalidate(1, menuItemList = $$props.menuItemList);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [routes$1, menuItemList];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {
            name: 'world',
        },
    });

    return app;

}());
