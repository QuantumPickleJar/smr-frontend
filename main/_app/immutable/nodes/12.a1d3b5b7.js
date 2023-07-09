import{S as A,i as H,s as J,bh as K,p as R,P as U,e as I,R as M,u as L,I as y,U as _,a_ as X,d,V as j,v as O,w as T,J as w,X as P,Y,Z as v,a as E,_ as S,b as p,t as h,c as z,a4 as Z,a5 as N,aD as B,aE as C,a9 as F,bi as Q,g as D,aG as W,aN as tt,K as k,L as b}from"../chunks/vendor.d26e534c.js";import{r as et,E as at}from"../chunks/graphql.eeb20993.js";import{T as rt}from"../chunks/Toast.641a8e0d.js";import{G as it}from"../chunks/GuideForm.fc5fcc62.js";import{M as st}from"../chunks/MetaDescriptors.c81cf98a.js";const nt=async({params:s})=>({...s}),vt=Object.freeze(Object.defineProperty({__proto__:null,load:nt},Symbol.toStringTag,{value:"Module"}));function q(s){let e,a;return e=new st({props:{description:"Editing guide '"+s[2].data.getGuide.short_description+"'",title:"Edit guide '"+s[2].data.getGuide.name+"'"}}),{c(){_(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){S(e,t,r),a=!0},p(t,r){const o={};r&4&&(o.description="Editing guide '"+t[2].data.getGuide.short_description+"'"),r&4&&(o.title="Edit guide '"+t[2].data.getGuide.name+"'"),e.$set(o)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ot(s){let e,a;return e=new it({props:{onSubmit:s[4],initialValues:s[2].data.getGuide,submitText:"Save"}}),{c(){_(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){S(e,t,r),a=!0},p(t,r){const o={};r&4&&(o.initialValues=t[2].data.getGuide),e.$set(o)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ft(s){let e,a,t=s[2].error.message+"",r;return{c(){e=L("p"),a=y("Oh no... "),r=y(t)},l(o){e=O(o,"P",{});var f=T(e);a=w(f,"Oh no... "),r=w(f,t),f.forEach(d)},m(o,f){E(o,e,f),v(e,a),v(e,r)},p(o,f){f&4&&t!==(t=o[2].error.message+"")&&k(r,t)},i:b,o:b,d(o){o&&d(e)}}}function lt(s){let e,a;return{c(){e=L("p"),a=y("Loading...")},l(t){e=O(t,"P",{});var r=T(e);a=w(r,"Loading..."),r.forEach(d)},m(t,r){E(t,e,r),v(e,a)},p:b,i:b,o:b,d(t){t&&d(e)}}}function ut(s){let e,a,t,r;const o=[lt,ft,ot],f=[];function $(n,c){return n[2].fetching?0:n[2].error?1:2}return e=$(s),a=f[e]=o[e](s),{c(){a.c(),t=I()},l(n){a.l(n),t=I()},m(n,c){f[e].m(n,c),E(n,t,c),r=!0},p(n,c){let m=e;e=$(n),e===m?f[e].p(n,c):(D(),h(f[m],1,1,()=>{f[m]=null}),z(),a=f[e],a?a.p(n,c):(a=f[e]=o[e](n),a.c()),p(a,1),a.m(t.parentNode,t))},i(n){r||(p(a),r=!0)},o(n){h(a),r=!1},d(n){f[e].d(n),n&&d(t)}}}function dt(s){let e,a;return e=new Q({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),{c(){_(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){S(e,t,r),a=!0},p(t,r){const o={};r&516&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ct(s){let e,a;return{c(){e=L("span"),a=y(s[1])},l(t){e=O(t,"SPAN",{});var r=T(e);a=w(r,s[1]),r.forEach(d)},m(t,r){E(t,e,r),v(e,a)},p(t,r){r&2&&k(a,t[1])},d(t){t&&d(e)}}}function $t(s){let e,a,t,r,o,f,$,n,c,m,l=!s[2].fetching&&!s[2].error&&s[2].data.getGuide&&q(s);f=new K({props:{$$slots:{default:[dt]},$$scope:{ctx:s}}});function g(i){s[6](i)}let G={$$slots:{default:[ct]},$$scope:{ctx:s}};return s[0]!==void 0&&(G.running=s[0]),n=new rt({props:G}),R.push(()=>U(n,"running",g)),{c(){l&&l.c(),e=I(),a=M(),t=L("h1"),r=y("Edit Guide"),o=M(),_(f.$$.fragment),$=M(),_(n.$$.fragment),this.h()},l(i){const u=X("svelte-2z35li",document.head);l&&l.l(u),e=I(),u.forEach(d),a=j(i),t=O(i,"H1",{class:!0});var x=T(t);r=w(x,"Edit Guide"),x.forEach(d),o=j(i),P(f.$$.fragment,i),$=j(i),P(n.$$.fragment,i),this.h()},h(){Y(t,"class","text-4xl my-4 font-bold")},m(i,u){l&&l.m(document.head,null),v(document.head,e),E(i,a,u),E(i,t,u),v(t,r),E(i,o,u),S(f,i,u),E(i,$,u),S(n,i,u),m=!0},p(i,[u]){!i[2].fetching&&!i[2].error&&i[2].data.getGuide?l?(l.p(i,u),u&4&&p(l,1)):(l=q(i),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(D(),h(l,1,1,()=>{l=null}),z());const x={};u&516&&(x.$$scope={dirty:u,ctx:i}),f.$set(x);const V={};u&514&&(V.$$scope={dirty:u,ctx:i}),!c&&u&1&&(c=!0,V.running=i[0],Z(()=>c=!1)),n.$set(V)},i(i){m||(p(l),p(f.$$.fragment,i),p(n.$$.fragment,i),m=!0)},o(i){h(l),h(f.$$.fragment,i),h(n.$$.fragment,i),m=!1},d(i){l&&l.d(i),d(e),i&&d(a),i&&d(t),i&&d(o),N(f,i),i&&d($),N(n,i)}}}function mt(s,e,a){let t,{data:r}=e;const{guideId:o}=r,f=B();let $="",n=!1;const c=C({query:et,client:f,variables:{guide:o}});F(s,c,g=>a(2,t=g));const m=g=>{f.mutation(at,{guideId:o,guide:g}).toPromise().then(G=>{G.error?(console.error(G.error.message),a(1,$="Error editing guide: "+G.error.message),a(0,n=!0)):W(tt+"/guide/"+G.data.updateGuide.id)})};function l(g){n=g,a(0,n)}return s.$$set=g=>{"data"in g&&a(5,r=g.data)},s.$$.update=()=>{s.$$.dirty&1&&(n||a(1,$=""))},[n,$,t,c,m,r,l]}class xt extends A{constructor(e){super(),H(this,e,mt,$t,J,{data:5})}}export{xt as component,vt as universal};
//# sourceMappingURL=12.a1d3b5b7.js.map
