import{S as a,i as e,s,e as t,j as n,c as r,a as l,m as c,d as o,b as i,f as h,o as d,x as f,u,v,k as m,l as g,$ as p,n as V,w as $,N as E,M as b,aj as D,O as k,r as I,C as w,t as x,g as y,R as M,W as P,h as S,al as j,am as L,ad as N,X as R,an as _,ao as C}from"../../chunks/vendor-ecacde99.js";import{f as O}from"../../chunks/graphql-7c12eb8b.js";import{P as G}from"../../chunks/PageControls-75128409.js";import{m as q}from"../../chunks/markdown-58cc1c31.js";function A(a,e,s){const t=a.slice();return t[9]=e[s],t}function W(a){let e,s,m;return s=new G({props:{totalPages:Math.ceil(a[2]/Y),currentPage:a[4]}}),{c(){e=t("div"),n(s.$$.fragment),this.h()},l(a){e=r(a,"DIV",{class:!0});var t=l(e);c(s.$$.fragment,t),t.forEach(o),this.h()},h(){i(e,"class","mt-5 ml-auto flex justify-end")},m(a,t){h(a,e,t),d(s,e,null),m=!0},p(a,e){const t={};4&e&&(t.totalPages=Math.ceil(a[2]/Y)),s.$set(t)},i(a){m||(f(s.$$.fragment,a),m=!0)},o(a){u(s.$$.fragment,a),m=!1},d(a){a&&o(e),v(s)}}}function X(a){let e,s,n,c,d,f,u,v,g,p,$,E,b,D,k,I=a[0].data.getSMLVersions.sml_versions,w=[];for(let t=0;t<I.length;t+=1)w[t]=Q(A(a,I,t));return{c(){e=t("div"),s=t("div"),n=x("Version"),c=m(),d=t("div"),f=x("Stability"),u=m(),v=t("div"),g=x("Game Version"),p=m(),$=t("div"),E=x("Release Date"),b=m(),D=t("div"),k=m();for(let a=0;a<w.length;a+=1)w[a].c();this.h()},l(a){e=r(a,"DIV",{class:!0});var t=l(e);s=r(t,"DIV",{});var i=l(s);n=y(i,"Version"),i.forEach(o),c=V(t),d=r(t,"DIV",{});var h=l(d);f=y(h,"Stability"),h.forEach(o),u=V(t),v=r(t,"DIV",{});var m=l(v);g=y(m,"Game Version"),m.forEach(o),p=V(t),$=r(t,"DIV",{});var I=l($);E=y(I,"Release Date"),I.forEach(o),b=V(t),D=r(t,"DIV",{}),l(D).forEach(o),k=V(t);for(let e=0;e<w.length;e+=1)w[e].l(t);t.forEach(o),this.h()},h(){i(e,"class","grid grid-cols-6 versions svelte-1e74345")},m(a,t){h(a,e,t),M(e,s),M(s,n),M(e,c),M(e,d),M(d,f),M(e,u),M(e,v),M(v,g),M(e,p),M(e,$),M($,E),M(e,b),M(e,D),M(e,k);for(let s=0;s<w.length;s+=1)w[s].m(e,null)},p(a,s){if(35&s){let t;for(I=a[0].data.getSMLVersions.sml_versions,t=0;t<I.length;t+=1){const n=A(a,I,t);w[t]?w[t].p(n,s):(w[t]=Q(n),w[t].c(),w[t].m(e,null))}for(;t<w.length;t+=1)w[t].d(1);w.length=I.length}},d(a){a&&o(e),N(w,a)}}}function z(a){let e,s,n,c=a[0].error.message+"";return{c(){e=t("p"),s=x("Oh no... "),n=x(c)},l(a){e=r(a,"P",{});var t=l(e);s=y(t,"Oh no... "),n=y(t,c),t.forEach(o)},m(a,t){h(a,e,t),M(e,s),M(e,n)},p(a,e){1&e&&c!==(c=a[0].error.message+"")&&S(n,c)},d(a){a&&o(e)}}}function B(a){let e,s;return{c(){e=t("p"),s=x("Loading...")},l(a){e=r(a,"P",{});var t=l(e);s=y(t,"Loading..."),t.forEach(o)},m(a,t){h(a,e,t),M(e,s)},p:R,d(a){a&&o(e)}}}function F(a){let e,s,n,c={ctx:a,current:null,token:null,hasCatch:!1,pending:K,then:J,catch:H,value:12};return j(s=q(a[9].changelog),c),{c(){e=t("div"),c.block.c(),n=m(),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=l(e);c.block.l(s),n=V(s),s.forEach(o),this.h()},h(){i(e,"class","col-span-5 p-2 markdown-content")},m(a,s){h(a,e,s),c.block.m(e,c.anchor=null),c.mount=()=>e,c.anchor=n,M(e,n)},p(e,t){a=e,c.ctx=a,1&t&&s!==(s=q(a[9].changelog))&&j(s,c)||L(c,a,t)},d(a){a&&o(e),c.block.d(),c.token=null,c=null}}}function H(a){return{c:R,l:R,m:R,p:R,d:R}}function J(a){let e,s,t=a[12]+"";return{c(){e=new _,s=g(),this.h()},l(a){e=C(a),s=g(),this.h()},h(){e.a=s},m(a,n){e.m(t,a,n),h(a,s,n)},p(a,s){1&s&&t!==(t=a[12]+"")&&e.p(t)},d(a){a&&o(s),a&&e.d()}}}function K(a){return{c:R,l:R,m:R,p:R,d:R}}function Q(a){let e,s,n,c,d,f,u,v,p,$,E,b,D,k,I,w,j,L,N,R,_,C=a[9].version+"",O=a[9].stability+"",G=a[9].satisfactory_version+"",q=a[9].date+"",A=a[1].has(a[9].id);function W(){return a[8](a[9])}let X=A&&F(a);return{c(){e=t("div"),s=t("div"),n=x(C),c=m(),d=t("div"),f=x(O),u=m(),v=t("div"),p=x(G),$=m(),E=t("div"),b=x(q),D=m(),k=t("div"),I=t("a"),w=x("View"),L=m(),X&&X.c(),N=g(),this.h()},l(a){e=r(a,"DIV",{class:!0});var t=l(e);s=r(t,"DIV",{class:!0});var i=l(s);n=y(i,C),i.forEach(o),c=V(t),d=r(t,"DIV",{class:!0});var h=l(d);f=y(h,O),h.forEach(o),u=V(t),v=r(t,"DIV",{class:!0});var m=l(v);p=y(m,G),m.forEach(o),$=V(t),E=r(t,"DIV",{class:!0});var x=l(E);b=y(x,q),x.forEach(o),D=V(t),k=r(t,"DIV",{class:!0});var M=l(k);I=r(M,"A",{href:!0,class:!0});var P=l(I);w=y(P,"View"),P.forEach(o),M.forEach(o),t.forEach(o),L=V(a),X&&X.l(a),N=g(),this.h()},h(){i(s,"class","svelte-1e74345"),i(d,"class","svelte-1e74345"),i(v,"class","svelte-1e74345"),i(E,"class","svelte-1e74345"),i(I,"href",j=a[9].link),i(I,"class","py-1 px-4 rounded text-base bg-blue-500 text-center"),i(k,"class","grid grid-flow-col gap-4 svelte-1e74345"),i(e,"class","contents version-header svelte-1e74345")},m(a,t){h(a,e,t),M(e,s),M(s,n),M(e,c),M(e,d),M(d,f),M(e,u),M(e,v),M(v,p),M(e,$),M(e,E),M(E,b),M(e,D),M(e,k),M(k,I),M(I,w),h(a,L,t),X&&X.m(a,t),h(a,N,t),R||(_=P(e,"click",W),R=!0)},p(e,s){a=e,1&s&&C!==(C=a[9].version+"")&&S(n,C),1&s&&O!==(O=a[9].stability+"")&&S(f,O),1&s&&G!==(G=a[9].satisfactory_version+"")&&S(p,G),1&s&&q!==(q=a[9].date+"")&&S(b,q),1&s&&j!==(j=a[9].link)&&i(I,"href",j),3&s&&(A=a[1].has(a[9].id)),A?X?X.p(a,s):(X=F(a),X.c(),X.m(N.parentNode,N)):X&&(X.d(1),X=null)},d(a){a&&o(e),a&&o(L),X&&X.d(a),a&&o(N),R=!1,_()}}}function T(a){let e,s,m;return s=new G({props:{totalPages:Math.ceil(a[2]/Y),currentPage:a[4]}}),{c(){e=t("div"),n(s.$$.fragment),this.h()},l(a){e=r(a,"DIV",{class:!0});var t=l(e);c(s.$$.fragment,t),t.forEach(o),this.h()},h(){i(e,"class","mt-5 ml-auto flex justify-end")},m(a,t){h(a,e,t),d(s,e,null),m=!0},p(a,e){const t={};4&e&&(t.totalPages=Math.ceil(a[2]/Y)),s.$set(t)},i(a){m||(f(s.$$.fragment,a),m=!0)},o(a){u(s.$$.fragment,a),m=!1},d(a){a&&o(e),v(s)}}}function U(a){let e,s,t,n,r,l=a[2]&&W(a);function c(a,e){return a[0].fetching?B:a[0].error?z:X}let i=c(a),d=i(a),v=a[2]&&T(a);return{c(){e=m(),l&&l.c(),s=m(),d.c(),t=m(),v&&v.c(),n=g(),this.h()},l(a){p('[data-svelte="svelte-afhnpt"]',document.head).forEach(o),e=V(a),l&&l.l(a),s=V(a),d.l(a),t=V(a),v&&v.l(a),n=g(),this.h()},h(){document.title="SML Versions - SMR"},m(a,c){h(a,e,c),l&&l.m(a,c),h(a,s,c),d.m(a,c),h(a,t,c),v&&v.m(a,c),h(a,n,c),r=!0},p(a,[e]){a[2]?l?(l.p(a,e),4&e&&f(l,1)):(l=W(a),l.c(),f(l,1),l.m(s.parentNode,s)):l&&(I(),u(l,1,1,(()=>{l=null})),$()),i===(i=c(a))&&d?d.p(a,e):(d.d(1),d=i(a),d&&(d.c(),d.m(t.parentNode,t))),a[2]?v?(v.p(a,e),4&e&&f(v,1)):(v=T(a),v.c(),f(v,1),v.m(n.parentNode,n)):v&&(I(),u(v,1,1,(()=>{v=null})),$())},i(a){r||(f(l),f(v),r=!0)},o(a){u(l),u(v),r=!1},d(a){a&&o(e),l&&l.d(a),a&&o(s),d.d(a),a&&o(t),v&&v.d(a),a&&o(n)}}}const Y=20;function Z(a,e,s){let t;var n,r;let l=new Set;const c=E(O,{offset:0,limit:Y});b(a,c,(a=>s(0,t=a)));const o=w(1);let i;o.subscribe((a=>D(c,t.variables.offset=(a-1)*Y,t))),k(c);const h=a=>{l.has(a)?l.delete(a):l.add(a),s(1,l)};return a.$$.update=()=>{193&a.$$.dirty&&s(2,i=null===s(7,r=null===s(6,n=null==t?void 0:t.data)||void 0===n?void 0:n.getSMLVersions)||void 0===r?void 0:r.count)},[t,l,i,c,o,h,n,r,a=>h(a.id)]}class aa extends a{constructor(a){super(),e(this,a,Z,U,s,{})}}export{aa as default};
//# sourceMappingURL=index.svelte-c6cef4d6.js.map