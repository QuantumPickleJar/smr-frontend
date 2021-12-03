import{S as Q,i as R,s as X,j as y,m as M,o as D,x as g,u as h,v as I,J as z,K as B,l as V,k as N,e as q,t as E,$ as U,d as c,n as P,c as v,a as T,g as j,b as W,R as $,f as b,w as A,L as Y,N as Z,M as x,Q as ee,O as te,r as C,h as H,X as S}from"../../../chunks/vendor-bd04eeb5.js";import{p as se}from"../../../chunks/routing-1d144003.js";import{r as re,E as ne}from"../../../chunks/graphql-44245247.js";import{T as ie}from"../../../chunks/Toast-cf8cd1a0.js";import{g as oe}from"../../../chunks/navigation-51f4a605.js";import{G as ae}from"../../../chunks/GuideForm-df02d612.js";import{b as ue}from"../../../chunks/paths-6758d194.js";import{M as de}from"../../../chunks/MetaDescriptors-99b66b31.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/forms-8d025218.js";import"../../../chunks/markdown-b0181a82.js";import"../../../chunks/stores-44ecde00.js";function J(i){let t,r;return t=new de({props:{description:"Editing guide '"+i[2].data.getGuide.short_description+"'",title:"Edit guide '"+i[2].data.getGuide.name+"'"}}),{c(){y(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,n){D(t,e,n),r=!0},p(e,n){const u={};n&4&&(u.description="Editing guide '"+e[2].data.getGuide.short_description+"'"),n&4&&(u.title="Edit guide '"+e[2].data.getGuide.name+"'"),t.$set(u)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function le(i){let t,r;return t=new ae({props:{onSubmit:i[4],initialValues:i[2].data.getGuide,submitText:"Save"}}),{c(){y(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,n){D(t,e,n),r=!0},p(e,n){const u={};n&4&&(u.initialValues=e[2].data.getGuide),t.$set(u)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function fe(i){let t,r,e=i[2].error.message+"",n;return{c(){t=q("p"),r=E("Oh no... "),n=E(e)},l(u){t=v(u,"P",{});var o=T(t);r=j(o,"Oh no... "),n=j(o,e),o.forEach(c)},m(u,o){b(u,t,o),$(t,r),$(t,n)},p(u,o){o&4&&e!==(e=u[2].error.message+"")&&H(n,e)},i:S,o:S,d(u){u&&c(t)}}}function ce(i){let t,r;return{c(){t=q("p"),r=E("Loading...")},l(e){t=v(e,"P",{});var n=T(t);r=j(n,"Loading..."),n.forEach(c)},m(e,n){b(e,t,n),$(t,r)},p:S,i:S,o:S,d(e){e&&c(t)}}}function me(i){let t,r;return{c(){t=q("span"),r=E(i[1])},l(e){t=v(e,"SPAN",{});var n=T(t);r=j(n,i[1]),n.forEach(c)},m(e,n){b(e,t,n),$(t,r)},p(e,n){n&2&&H(r,e[1])},d(e){e&&c(t)}}}function pe(i){let t,r,e,n,u,o,l,p,m,G,f,a=!i[2].fetching&&!i[2].error&&i[2].data.getGuide&&J(i);const L=[ce,fe,le],_=[];function O(s,d){return s[2].fetching?0:s[2].error?1:2}o=O(i),l=_[o]=L[o](i);function K(s){i[6](s)}let F={$$slots:{default:[me]},$$scope:{ctx:i}};return i[0]!==void 0&&(F.running=i[0]),m=new ie({props:F}),z.push(()=>B(m,"running",K)),{c(){a&&a.c(),t=V(),r=N(),e=q("h1"),n=E("Edit Guide"),u=N(),l.c(),p=N(),y(m.$$.fragment),this.h()},l(s){const d=U('[data-svelte="svelte-1e0nmq8"]',document.head);a&&a.l(d),t=V(),d.forEach(c),r=P(s),e=v(s,"H1",{class:!0});var k=T(e);n=j(k,"Edit Guide"),k.forEach(c),u=P(s),l.l(s),p=P(s),M(m.$$.fragment,s),this.h()},h(){W(e,"class","text-4xl my-4 font-bold")},m(s,d){a&&a.m(document.head,null),$(document.head,t),b(s,r,d),b(s,e,d),$(e,n),b(s,u,d),_[o].m(s,d),b(s,p,d),D(m,s,d),f=!0},p(s,[d]){!s[2].fetching&&!s[2].error&&s[2].data.getGuide?a?(a.p(s,d),d&4&&g(a,1)):(a=J(s),a.c(),g(a,1),a.m(t.parentNode,t)):a&&(C(),h(a,1,1,()=>{a=null}),A());let k=o;o=O(s),o===k?_[o].p(s,d):(C(),h(_[k],1,1,()=>{_[k]=null}),A(),l=_[o],l?l.p(s,d):(l=_[o]=L[o](s),l.c()),g(l,1),l.m(p.parentNode,p));const w={};d&258&&(w.$$scope={dirty:d,ctx:s}),!G&&d&1&&(G=!0,w.running=s[0],Y(()=>G=!1)),m.$set(w)},i(s){f||(g(a),g(l),g(m.$$.fragment,s),f=!0)},o(s){h(a),h(l),h(m.$$.fragment,s),f=!1},d(s){a&&a.d(s),c(t),s&&c(r),s&&c(e),s&&c(u),_[o].d(s),s&&c(p),I(m,s)}}}const we=se();function _e(i,t,r){let e,{guideId:n}=t,u="",o=!1;const l=Z(re,{guide:n});x(i,l,f=>r(2,e=f));const p=ee({query:ne}),m=f=>{p({guideId:n,guide:f}).then(a=>{a.error?(console.error(a.error.message),r(1,u="Error editing guide: "+a.error.message),r(0,o=!0)):oe(ue+"/guide/"+a.data.updateGuide.id)})};te(l);function G(f){o=f,r(0,o)}return i.$$set=f=>{"guideId"in f&&r(5,n=f.guideId)},i.$$.update=()=>{i.$$.dirty&1&&(o||r(1,u=""))},[o,u,e,l,m,n,G]}class ye extends Q{constructor(t){super();R(this,t,_e,pe,X,{guideId:5})}}export{ye as default,we as load};
//# sourceMappingURL=edit.svelte-678abf3f.js.map