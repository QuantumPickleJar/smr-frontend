import{S as F,i as O,s as A,e as k,j as P,k as M,c as G,a as y,m as x,d as g,n as I,b as $,f as v,o as E,r as B,u as p,w as H,x as _,v as D,N as K,M as L,ak as Q,O as T,C as U,ad as R,t as S,g as V,R as C,h as W,X as q,$ as Y}from"../../chunks/vendor-bd04eeb5.js";import{h as Z}from"../../chunks/graphql-44245247.js";import{G as ee}from"../../chunks/GuideCard-2b17b5d7.js";import{P as X}from"../../chunks/PageControls-2044f4ba.js";import{F as te}from"../../chunks/FakeCard-a164d3c2.js";import{b as re}from"../../chunks/paths-6758d194.js";import{M as se}from"../../chunks/MetaDescriptors-99b66b31.js";import"../../chunks/image-d12f28e2.js";import"../../chunks/stores-44ecde00.js";function z(u,t,a){const r=u.slice();return r[9]=t[a],r}function le(u,t,a){const r=u.slice();return r[6]=t[a],r}function ae(u){let t,a,r,l=u[0].data.getGuides.guides,e=[];for(let s=0;s<l.length;s+=1)e[s]=J(z(u,l,s));const o=s=>p(e[s],1,1,()=>{e[s]=null});return{c(){t=k("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=G(s,"DIV",{class:!0});var i=y(t);for(let c=0;c<e.length;c+=1)e[c].l(i);i.forEach(g),this.h()},h(){$(t,"class",a="grid "+u[2]+" gap-4")},m(s,i){v(s,t,i);for(let c=0;c<e.length;c+=1)e[c].m(t,null);r=!0},p(s,i){if(i&1){l=s[0].data.getGuides.guides;let c;for(c=0;c<l.length;c+=1){const m=z(s,l,c);e[c]?(e[c].p(m,i),_(e[c],1)):(e[c]=J(m),e[c].c(),_(e[c],1),e[c].m(t,null))}for(B(),c=l.length;c<e.length;c+=1)o(c);H()}(!r||i&4&&a!==(a="grid "+s[2]+" gap-4"))&&$(t,"class",a)},i(s){if(!r){for(let i=0;i<l.length;i+=1)_(e[i]);r=!0}},o(s){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)p(e[i]);r=!1},d(s){s&&g(t),R(e,s)}}}function oe(u){let t,a,r=u[0].error.message+"",l;return{c(){t=k("p"),a=S("Oh no... "),l=S(r)},l(e){t=G(e,"P",{});var o=y(t);a=V(o,"Oh no... "),l=V(o,r),o.forEach(g)},m(e,o){v(e,t,o),C(t,a),C(t,l)},p(e,o){o&1&&r!==(r=e[0].error.message+"")&&W(l,r)},i:q,o:q,d(e){e&&g(t)}}}function ne(u){let t,a,r,l=Array(j),e=[];for(let o=0;o<l.length;o+=1)e[o]=ie(le(u,l,o));return{c(){t=k("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=G(o,"DIV",{class:!0});var s=y(t);for(let i=0;i<e.length;i+=1)e[i].l(s);s.forEach(g),this.h()},h(){$(t,"class",a="grid "+u[2]+" gap-4")},m(o,s){v(o,t,s);for(let i=0;i<e.length;i+=1)e[i].m(t,null);r=!0},p(o,s){(!r||s&4&&a!==(a="grid "+o[2]+" gap-4"))&&$(t,"class",a)},i(o){if(!r){for(let s=0;s<l.length;s+=1)_(e[s]);r=!0}},o(o){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)p(e[s]);r=!1},d(o){o&&g(t),R(e,o)}}}function J(u){let t,a;return t=new ee({props:{guide:u[9],logo:u[9].user.avatar}}),{c(){P(t.$$.fragment)},l(r){x(t.$$.fragment,r)},m(r,l){E(t,r,l),a=!0},p(r,l){const e={};l&1&&(e.guide=r[9]),l&1&&(e.logo=r[9].user.avatar),t.$set(e)},i(r){a||(_(t.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),a=!1},d(r){D(t,r)}}}function ie(u){let t,a;return t=new te({}),{c(){P(t.$$.fragment)},l(r){x(t.$$.fragment,r)},m(r,l){E(t,r,l),a=!0},i(r){a||(_(t.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),a=!1},d(r){D(t,r)}}}function ce(u){let t,a,r,l,e,o,s,i,c;a=new X({props:{totalPages:Math.ceil(u[1]/j),currentPage:u[4]}});const m=[ne,oe,ae],h=[];function f(n,d){return n[0].fetching?0:n[0].error?1:2}return l=f(u),e=h[l]=m[l](u),i=new X({props:{totalPages:Math.ceil(u[1]/j),currentPage:u[4]}}),{c(){t=k("div"),P(a.$$.fragment),r=M(),e.c(),o=M(),s=k("div"),P(i.$$.fragment),this.h()},l(n){t=G(n,"DIV",{class:!0});var d=y(t);x(a.$$.fragment,d),d.forEach(g),r=I(n),e.l(n),o=I(n),s=G(n,"DIV",{class:!0});var b=y(s);x(i.$$.fragment,b),b.forEach(g),this.h()},h(){$(t,"class","mb-5 ml-auto flex justify-end"),$(s,"class","mt-5 ml-auto flex justify-end")},m(n,d){v(n,t,d),E(a,t,null),v(n,r,d),h[l].m(n,d),v(n,o,d),v(n,s,d),E(i,s,null),c=!0},p(n,[d]){const b={};d&2&&(b.totalPages=Math.ceil(n[1]/j)),a.$set(b);let w=l;l=f(n),l===w?h[l].p(n,d):(B(),p(h[w],1,1,()=>{h[w]=null}),H(),e=h[l],e?e.p(n,d):(e=h[l]=m[l](n),e.c()),_(e,1),e.m(o.parentNode,o));const N={};d&2&&(N.totalPages=Math.ceil(n[1]/j)),i.$set(N)},i(n){c||(_(a.$$.fragment,n),_(e),_(i.$$.fragment,n),c=!0)},o(n){p(a.$$.fragment,n),p(e),p(i.$$.fragment,n),c=!1},d(n){n&&g(t),D(a),n&&g(r),h[l].d(n),n&&g(o),n&&g(s),D(i)}}}const j=40;function ue(u,t,a){let r,l,{colCount:e=4}=t;const o=K(Z,{offset:0,limit:j});L(u,o,c=>a(0,l=c));const s=U(1);let i;return s.subscribe(c=>{Q(o,l.variables.offset=(c-1)*j,l),l.reexecute()}),T(o),u.$$set=c=>{"colCount"in c&&a(5,e=c.colCount)},u.$$.update=()=>{u.$$.dirty&1&&a(1,i=l?.data?.getGuides?.count||0),u.$$.dirty&32&&a(2,r=e==4?"2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1")},[l,i,r,o,s,e]}class fe extends F{constructor(t){super();O(this,t,ue,ce,A,{colCount:5})}}function de(u){let t,a,r,l,e,o,s,i,c,m,h;return t=new se({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),m=new fe({props:{colCount:5}}),{c(){P(t.$$.fragment),a=M(),r=k("div"),l=k("h1"),e=S("Guides"),o=M(),s=k("a"),i=S("New Guide"),c=M(),P(m.$$.fragment),this.h()},l(f){const n=Y('[data-svelte="svelte-gby4d8"]',document.head);x(t.$$.fragment,n),n.forEach(g),a=I(f),r=G(f,"DIV",{class:!0});var d=y(r);l=G(d,"H1",{class:!0});var b=y(l);e=V(b,"Guides"),b.forEach(g),o=I(d),s=G(d,"A",{href:!0,class:!0});var w=y(s);i=V(w,"New Guide"),w.forEach(g),d.forEach(g),c=I(f),x(m.$$.fragment,f),this.h()},h(){$(l,"class","text-4xl my-4 font-bold"),$(s,"href",""+(re+"/new-guide")),$(s,"class","rounded text-base bg-blue-500 py-2 px-4 h-fit"),$(r,"class","flex justify-between items-center")},m(f,n){E(t,document.head,null),v(f,a,n),v(f,r,n),C(r,l),C(l,e),C(r,o),C(r,s),C(s,i),v(f,c,n),E(m,f,n),h=!0},p:q,i(f){h||(_(t.$$.fragment,f),_(m.$$.fragment,f),h=!0)},o(f){p(t.$$.fragment,f),p(m.$$.fragment,f),h=!1},d(f){D(t),f&&g(a),f&&g(r),f&&g(c),D(m,f)}}}class Ge extends F{constructor(t){super();O(this,t,null,de,A,{})}}export{Ge as default};
//# sourceMappingURL=index.svelte-65339ed9.js.map