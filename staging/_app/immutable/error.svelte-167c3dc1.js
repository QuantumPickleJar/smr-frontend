import{S as w,i as y,s as z,e as h,aa as v,c as g,d as k,ab as P,f as n,j as u,a5 as R,ac as b,a as x,b as j,g as N,r as H}from"./chunks/vendor-d4970a5c.js";function S(l){let t,a=l[1].frame+"",i;return{c(){t=h("pre"),i=v(a)},l(s){t=g(s,"PRE",{});var f=k(t);i=P(f,a),f.forEach(n)},m(s,f){u(s,t,f),R(t,i)},p(s,f){f&2&&a!==(a=s[1].frame+"")&&b(i,a)},d(s){s&&n(t)}}}function q(l){let t,a=l[1].stack+"",i;return{c(){t=h("pre"),i=v(a)},l(s){t=g(s,"PRE",{});var f=k(t);i=P(f,a),f.forEach(n)},m(s,f){u(s,t,f),R(t,i)},p(s,f){f&2&&a!==(a=s[1].stack+"")&&b(i,a)},d(s){s&&n(t)}}}function A(l){let t,a,i,s,f=l[1].message+"",d,E,m,p,e=l[1].frame&&S(l),c=l[1].stack&&q(l);return{c(){t=h("h1"),a=v(l[0]),i=x(),s=h("pre"),d=v(f),E=x(),e&&e.c(),m=x(),c&&c.c(),p=j()},l(r){t=g(r,"H1",{});var o=k(t);a=P(o,l[0]),o.forEach(n),i=N(r),s=g(r,"PRE",{});var $=k(s);d=P($,f),$.forEach(n),E=N(r),e&&e.l(r),m=N(r),c&&c.l(r),p=j()},m(r,o){u(r,t,o),R(t,a),u(r,i,o),u(r,s,o),R(s,d),u(r,E,o),e&&e.m(r,o),u(r,m,o),c&&c.m(r,o),u(r,p,o)},p(r,[o]){o&1&&b(a,r[0]),o&2&&f!==(f=r[1].message+"")&&b(d,f),r[1].frame?e?e.p(r,o):(e=S(r),e.c(),e.m(m.parentNode,m)):e&&(e.d(1),e=null),r[1].stack?c?c.p(r,o):(c=q(r),c.c(),c.m(p.parentNode,p)):c&&(c.d(1),c=null)},i:H,o:H,d(r){r&&n(t),r&&n(i),r&&n(s),r&&n(E),e&&e.d(r),r&&n(m),c&&c.d(r),r&&n(p)}}}function D({error:l,status:t}){return{props:{error:l,status:t}}}function B(l,t,a){let{status:i}=t,{error:s}=t;return l.$$set=f=>{"status"in f&&a(0,i=f.status),"error"in f&&a(1,s=f.error)},[i,s]}class F extends w{constructor(t){super(),y(this,t,B,A,z,{status:0,error:1})}}export{F as default,D as load};
//# sourceMappingURL=error.svelte-167c3dc1.js.map
