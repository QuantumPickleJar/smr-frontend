import{S as q,i as A,s as F,bh as G,p as H,P as K,e as I,R as L,u as R,I as _,U as P,a_ as U,d as m,V as M,v as T,w as z,J as w,X as S,Y as X,Z as x,a as V,_ as N,b as p,t as v,c as k,a4 as Y,a5 as O,aD as Z,aF as B,bi as C,g as D,L as E,ar as Q,aG as W,aN as tt,K as J}from"../chunks/vendor.96815c21.js";import{J as et,P as rt}from"../chunks/graphql.22d32a05.js";import{T as nt}from"../chunks/Toast.3173ee9a.js";import{V as at}from"../chunks/VersionForm.853c8d4e.js";import{M as st}from"../chunks/MetaDescriptors.e9d71f4a.js";const it=async({params:a})=>({...a}),yt=Object.freeze(Object.defineProperty({__proto__:null,load:it},Symbol.toStringTag,{value:"Module"}));function j(a){let e,r;return e=new st({props:{description:"Editing mod version "+a[1].data.getVersion.mod.name+" "+a[1].data.getVersion.version,title:"Edit mod version "+a[1].data.getVersion.mod.name+" "+a[1].data.getVersion.version}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,n){N(e,t,n),r=!0},p(t,n){const i={};n&2&&(i.description="Editing mod version "+t[1].data.getVersion.mod.name+" "+t[1].data.getVersion.version),n&2&&(i.title="Edit mod version "+t[1].data.getVersion.mod.name+" "+t[1].data.getVersion.version),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function ot(a){let e,r;return e=new at({props:{onSubmit:a[5],initialValues:a[3],modReference:a[1].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save"}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,n){N(e,t,n),r=!0},p(t,n){const i={};n&8&&(i.initialValues=t[3]),n&2&&(i.modReference=t[1].data.getVersion.mod.mod_reference),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function ft(a){let e,r,t=a[1].error.message+"",n;return{c(){e=R("p"),r=_("Oh no... "),n=_(t)},l(i){e=T(i,"P",{});var f=z(e);r=w(f,"Oh no... "),n=w(f,t),f.forEach(m)},m(i,f){V(i,e,f),x(e,r),x(e,n)},p(i,f){f&2&&t!==(t=i[1].error.message+"")&&J(n,t)},i:E,o:E,d(i){i&&m(e)}}}function lt(a){let e,r;return{c(){e=R("p"),r=_("Loading...")},l(t){e=T(t,"P",{});var n=z(e);r=w(n,"Loading..."),n.forEach(m)},m(t,n){V(t,e,n),x(e,r)},p:E,i:E,o:E,d(t){t&&m(e)}}}function dt(a){let e,r,t,n;const i=[lt,ft,ot],f=[];function $(o,u){return o[1].fetching?0:o[1].error?1:2}return e=$(a),r=f[e]=i[e](a),{c(){r.c(),t=I()},l(o){r.l(o),t=I()},m(o,u){f[e].m(o,u),V(o,t,u),n=!0},p(o,u){let g=e;e=$(o),e===g?f[e].p(o,u):(D(),v(f[g],1,1,()=>{f[g]=null}),k(),r=f[e],r?r.p(o,u):(r=f[e]=i[e](o),r.c()),p(r,1),r.m(t.parentNode,t))},i(o){n||(p(r),n=!0)},o(o){v(r),n=!1},d(o){f[e].d(o),o&&m(t)}}}function ct(a){let e,r;return e=new C({props:{$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,n){N(e,t,n),r=!0},p(t,n){const i={};n&2058&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function mt(a){let e,r;return{c(){e=R("span"),r=_(a[2])},l(t){e=T(t,"SPAN",{});var n=z(e);r=w(n,a[2]),n.forEach(m)},m(t,n){V(t,e,n),x(e,r)},p(t,n){n&4&&J(r,t[2])},d(t){t&&m(e)}}}function $t(a){let e,r,t,n,i,f,$,o,u,g,l=!a[1].fetching&&!a[1].error&&a[1].data.getVersion&&j(a);f=new G({props:{$$slots:{default:[ct]},$$scope:{ctx:a}}});function b(s){a[8](s)}let h={$$slots:{default:[mt]},$$scope:{ctx:a}};return a[0]!==void 0&&(h.running=a[0]),o=new nt({props:h}),H.push(()=>K(o,"running",b)),{c(){l&&l.c(),e=I(),r=L(),t=R("h1"),n=_("Edit Version"),i=L(),P(f.$$.fragment),$=L(),P(o.$$.fragment),this.h()},l(s){const d=U("svelte-wzsk0g",document.head);l&&l.l(d),e=I(),d.forEach(m),r=M(s),t=T(s,"H1",{class:!0});var c=z(t);n=w(c,"Edit Version"),c.forEach(m),i=M(s),S(f.$$.fragment,s),$=M(s),S(o.$$.fragment,s),this.h()},h(){X(t,"class","text-4xl my-4 font-bold")},m(s,d){l&&l.m(document.head,null),x(document.head,e),V(s,r,d),V(s,t,d),x(t,n),V(s,i,d),N(f,s,d),V(s,$,d),N(o,s,d),g=!0},p(s,[d]){!s[1].fetching&&!s[1].error&&s[1].data.getVersion?l?(l.p(s,d),d&2&&p(l,1)):(l=j(s),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(D(),v(l,1,1,()=>{l=null}),k());const c={};d&2058&&(c.$$scope={dirty:d,ctx:s}),f.$set(c);const y={};d&2052&&(y.$$scope={dirty:d,ctx:s}),!u&&d&1&&(u=!0,y.running=s[0],Y(()=>u=!1)),o.$set(y)},i(s){g||(p(l),p(f.$$.fragment,s),p(o.$$.fragment,s),g=!0)},o(s){v(l),v(f.$$.fragment,s),v(o.$$.fragment,s),g=!1},d(s){l&&l.d(s),m(e),s&&m(r),s&&m(t),s&&m(i),O(f,s),s&&m($),O(o,s)}}}function ut(a,e,r){let t,n,i,f,$,o=E,u=()=>(o(),o=Q(i,c=>r(1,$=c)),i);a.$$.on_destroy.push(()=>o());let{data:g}=e;const l=Z();let b="",h=!1;const s=async c=>l.mutation(rt,{versionId:n,version:c}).toPromise().then(y=>{if(y.error)console.error(y.error.message),r(2,b="Error editing version: "+y.error.message),r(0,h=!0);else return W(tt+"/mod/"+t+"/version/"+n)});function d(c){h=c,r(0,h)}return a.$$set=c=>{"data"in c&&r(6,g=c.data)},a.$$.update=()=>{a.$$.dirty&64&&r(7,{modId:t,versionId:n}=g,n),a.$$.dirty&128&&u(r(4,i=B({query:et,client:l,variables:{version:n}}))),a.$$.dirty&1&&(h||r(2,b="")),a.$$.dirty&2&&r(3,f=$.data?{...$.data.getVersion,logo:void 0}:void 0)},[h,$,b,f,i,s,g,n,d]}class Et extends q{constructor(e){super(),A(this,e,ut,$t,F,{data:6})}}export{Et as component,yt as universal};
//# sourceMappingURL=20.acd54c62.js.map
