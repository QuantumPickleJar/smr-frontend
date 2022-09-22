import{S as B,i as C,s as H,bb as Z,u as j,ad as F,b as P,a as z,e as V,aa as v,Z as y,aV as J,f as d,g as D,c as _,d as q,ab as I,_ as w,a7 as K,a5 as G,j as h,$ as S,m as g,t as p,l as T,ae as Q,a1 as N,aC as R,al as U,aB as W,aD as X,bc as Y,k,ac as A,q as b}from"../../../chunks/vendor-22698a15.js";import{p as tt}from"../../../chunks/routing-c6322149.js";import{p as et,E as rt}from"../../../chunks/graphql-32ca0bd6.js";import{T as at}from"../../../chunks/Toast-3f77241b.js";import{g as it}from"../../../chunks/navigation-ce539261.js";import{G as nt}from"../../../chunks/GuideForm-24b2bf51.js";import{b as st}from"../../../chunks/paths-1c47712a.js";import{M as ot}from"../../../chunks/MetaDescriptors-fd872502.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/forms-099cb473.js";import"../../../chunks/forms-e27a2b2a.js";import"../../../chunks/markdown-6a2ff7f0.js";import"../../../chunks/extras-8984d02f.js";import"../../../chunks/stores-a04bccbe.js";function O(n){let e,r;return e=new ot({props:{description:"Editing guide '"+n[2].data.getGuide.short_description+"'",title:"Edit guide '"+n[2].data.getGuide.name+"'"}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){S(e,t,a),r=!0},p(t,a){const o={};a&4&&(o.description="Editing guide '"+t[2].data.getGuide.short_description+"'"),a&4&&(o.title="Edit guide '"+t[2].data.getGuide.name+"'"),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function ft(n){let e,r;return e=new nt({props:{onSubmit:n[4],initialValues:n[2].data.getGuide,submitText:"Save"}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){S(e,t,a),r=!0},p(t,a){const o={};a&4&&(o.initialValues=t[2].data.getGuide),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function ut(n){let e,r,t=n[2].error.message+"",a;return{c(){e=V("p"),r=v("Oh no... "),a=v(t)},l(o){e=_(o,"P",{});var s=q(e);r=I(s,"Oh no... "),a=I(s,t),s.forEach(d)},m(o,s){h(o,e,s),G(e,r),G(e,a)},p(o,s){s&4&&t!==(t=o[2].error.message+"")&&A(a,t)},i:b,o:b,d(o){o&&d(e)}}}function lt(n){let e,r;return{c(){e=V("p"),r=v("Loading...")},l(t){e=_(t,"P",{});var a=q(e);r=I(a,"Loading..."),a.forEach(d)},m(t,a){h(t,e,a),G(e,r)},p:b,i:b,o:b,d(t){t&&d(e)}}}function dt(n){let e,r,t,a;const o=[lt,ut,ft],s=[];function $(f,c){return f[2].fetching?0:f[2].error?1:2}return e=$(n),r=s[e]=o[e](n),{c(){r.c(),t=P()},l(f){r.l(f),t=P()},m(f,c){s[e].m(f,c),h(f,t,c),a=!0},p(f,c){let m=e;e=$(f),e===m?s[e].p(f,c):(k(),p(s[m],1,1,()=>{s[m]=null}),T(),r=s[e],r?r.p(f,c):(r=s[e]=o[e](f),r.c()),g(r,1),r.m(t.parentNode,t))},i(f){a||(g(r),a=!0)},o(f){p(r),a=!1},d(f){s[e].d(f),f&&d(t)}}}function ct(n){let e,r;return e=new Y({props:{$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){S(e,t,a),r=!0},p(t,a){const o={};a&260&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function $t(n){let e,r;return{c(){e=V("span"),r=v(n[1])},l(t){e=_(t,"SPAN",{});var a=q(e);r=I(a,n[1]),a.forEach(d)},m(t,a){h(t,e,a),G(e,r)},p(t,a){a&2&&A(r,t[1])},d(t){t&&d(e)}}}function mt(n){let e,r,t,a,o,s,$,f,c,m,u=!n[2].fetching&&!n[2].error&&n[2].data.getGuide&&O(n);s=new Z({props:{$$slots:{default:[ct]},$$scope:{ctx:n}}});function E(i){n[6](i)}let M={$$slots:{default:[$t]},$$scope:{ctx:n}};return n[0]!==void 0&&(M.running=n[0]),f=new at({props:M}),j.push(()=>F(f,"running",E)),{c(){u&&u.c(),e=P(),r=z(),t=V("h1"),a=v("Edit Guide"),o=z(),y(s.$$.fragment),$=z(),y(f.$$.fragment),this.h()},l(i){const l=J('[data-svelte="svelte-2z35li"]',document.head);u&&u.l(l),e=P(),l.forEach(d),r=D(i),t=_(i,"H1",{class:!0});var x=q(t);a=I(x,"Edit Guide"),x.forEach(d),o=D(i),w(s.$$.fragment,i),$=D(i),w(f.$$.fragment,i),this.h()},h(){K(t,"class","text-4xl my-4 font-bold")},m(i,l){u&&u.m(document.head,null),G(document.head,e),h(i,r,l),h(i,t,l),G(t,a),h(i,o,l),S(s,i,l),h(i,$,l),S(f,i,l),m=!0},p(i,[l]){!i[2].fetching&&!i[2].error&&i[2].data.getGuide?u?(u.p(i,l),l&4&&g(u,1)):(u=O(i),u.c(),g(u,1),u.m(e.parentNode,e)):u&&(k(),p(u,1,1,()=>{u=null}),T());const x={};l&260&&(x.$$scope={dirty:l,ctx:i}),s.$set(x);const L={};l&258&&(L.$$scope={dirty:l,ctx:i}),!c&&l&1&&(c=!0,L.running=i[0],Q(()=>c=!1)),f.$set(L)},i(i){m||(g(u),g(s.$$.fragment,i),g(f.$$.fragment,i),m=!0)},o(i){p(u),p(s.$$.fragment,i),p(f.$$.fragment,i),m=!1},d(i){u&&u.d(i),d(e),i&&d(r),i&&d(t),i&&d(o),N(s,i),i&&d($),N(f,i)}}}const _t=tt();function gt(n,e,r){let t,{guideId:a}=e,o="",s=!1;const $=R(et,{guide:a});U(n,$,u=>r(2,t=u));const f=W({query:rt}),c=u=>{f({guideId:a,guide:u}).then(E=>{E.error?(console.error(E.error.message),r(1,o="Error editing guide: "+E.error.message),r(0,s=!0)):it(st+"/guide/"+E.data.updateGuide.id)})};X($);function m(u){s=u,r(0,s)}return n.$$set=u=>{"guideId"in u&&r(5,a=u.guideId)},n.$$.update=()=>{n.$$.dirty&1&&(s||r(1,o=""))},[s,o,t,$,c,a,m]}class qt extends B{constructor(e){super(),C(this,e,gt,mt,H,{guideId:5})}}export{qt as default,_t as load};
//# sourceMappingURL=edit.svelte-af9aaef0.js.map
