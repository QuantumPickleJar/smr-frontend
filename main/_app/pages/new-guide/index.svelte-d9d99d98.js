import{S as y,i as F,s as A,ap as H,K,L,j as l,k as G,e as M,t as S,$ as P,m as d,d as m,n as N,c as C,a as E,g as T,b as R,o as g,f as _,V as v,M as V,x as h,u as b,v as k,R as X,aq as x,X as z,h as B}from"../../chunks/vendor-287bac90.js";import{N as I}from"../../chunks/graphql-7003d634.js";import{T as J}from"../../chunks/Toast-7929c728.js";import{g as O}from"../../chunks/navigation-51f4a605.js";import{G as Q}from"../../chunks/GuideForm-020f9c42.js";import{b as U}from"../../chunks/paths-6758d194.js";import{M as W}from"../../chunks/MetaDescriptors-33a7a5ce.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/forms-8d025218.js";import"../../chunks/markdown-b94b05cb.js";import"../../chunks/stores-44c857e3.js";function Y(a){let t,n;return t=new Q({props:{onSubmit:a[2]}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p:z,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Z(a){let t,n;return t=new x({props:{$$slots:{default:[Y]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p(e,r){const f={};r&32&&(f.$$scope={dirty:r,ctx:e}),t.$set(f)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ee(a){let t,n;return{c(){t=M("span"),n=S(a[1])},l(e){t=C(e,"SPAN",{});var r=E(t);n=T(r,a[1]),r.forEach(m)},m(e,r){_(e,t,r),v(t,n)},p(e,r){r&2&&B(n,e[1])},d(e){e&&m(t)}}}function te(a){let t,n,e,r,f,u,p,i,c,w;t=new W({props:{description:"Creating a new guide",title:"New guide"}}),u=new H({props:{$$slots:{default:[Z]},$$scope:{ctx:a}}});function D(s){a[3](s)}let q={$$slots:{default:[ee]},$$scope:{ctx:a}};return a[0]!==void 0&&(q.running=a[0]),i=new J({props:q}),K.push(()=>L(i,"running",D)),{c(){l(t.$$.fragment),n=G(),e=M("h1"),r=S("New Guide"),f=G(),l(u.$$.fragment),p=G(),l(i.$$.fragment),this.h()},l(s){const o=P('[data-svelte="svelte-u6ds2"]',document.head);d(t.$$.fragment,o),o.forEach(m),n=N(s),e=C(s,"H1",{class:!0});var $=E(e);r=T($,"New Guide"),$.forEach(m),f=N(s),d(u.$$.fragment,s),p=N(s),d(i.$$.fragment,s),this.h()},h(){R(e,"class","text-4xl my-4 font-bold")},m(s,o){g(t,document.head,null),_(s,n,o),_(s,e,o),v(e,r),_(s,f,o),g(u,s,o),_(s,p,o),g(i,s,o),w=!0},p(s,[o]){const $={};o&32&&($.$$scope={dirty:o,ctx:s}),u.$set($);const j={};o&34&&(j.$$scope={dirty:o,ctx:s}),!c&&o&1&&(c=!0,j.running=s[0],V(()=>c=!1)),i.$set(j)},i(s){w||(h(t.$$.fragment,s),h(u.$$.fragment,s),h(i.$$.fragment,s),w=!0)},o(s){b(t.$$.fragment,s),b(u.$$.fragment,s),b(i.$$.fragment,s),w=!1},d(s){k(t),s&&m(n),s&&m(e),s&&m(f),k(u,s),s&&m(p),k(i,s)}}}function se(a,t,n){let e="",r=!1;const f=X({query:I}),u=i=>{f({guide:i}).then(c=>{c.error?(console.error(c.error.message),n(1,e="Error creating guide: "+c.error.message),n(0,r=!0)):O(U+"/guide/"+c.data.createGuide.id)})};function p(i){r=i,n(0,r)}return a.$$.update=()=>{a.$$.dirty&1&&(r||n(1,e=""))},[r,e,u,p]}class le extends y{constructor(t){super();F(this,t,se,te,A,{})}}export{le as default};
//# sourceMappingURL=index.svelte-d9d99d98.js.map
