import{S as B,i as C,s as H,bb as Q,u as Z,ad as j,b as N,a as z,e as _,aa as b,Z as I,aV as F,f as c,g as D,c as q,d as L,ab as y,_ as w,a7 as G,a5 as V,j as h,$ as P,m as g,t as v,l as O,ae as J,a1 as S,aC as K,al as U,aB as W,aD as X,bc as Y,k as T,ac as A,q as x}from"../../../../../chunks/vendor-22698a15.js";import{p as tt}from"../../../../../chunks/routing-c6322149.js";import{P as et,Q as rt}from"../../../../../chunks/graphql-32ca0bd6.js";import{T as nt}from"../../../../../chunks/Toast-3f77241b.js";import{g as ot}from"../../../../../chunks/navigation-ce539261.js";import{V as it}from"../../../../../chunks/VersionForm-264b9a40.js";import{b as st}from"../../../../../chunks/paths-1c47712a.js";import{M as at}from"../../../../../chunks/MetaDescriptors-fd872502.js";import"../../../../../chunks/singletons-cdeec3fd.js";import"../../../../../chunks/forms-099cb473.js";import"../../../../../chunks/jszip-0721729d.js";import"../../../../../chunks/extras-8984d02f.js";import"../../../../../chunks/uplugin-74e51756.js";import"../../../../../chunks/api-bb6d5972.js";import"../../../../../chunks/user-6e2eeec5.js";import"../../../../../chunks/forms-e27a2b2a.js";import"../../../../../chunks/markdown-6a2ff7f0.js";import"../../../../../chunks/formatting-b1e7d458.js";import"../../../../../chunks/stores-a04bccbe.js";function M(i){let e,r;return e=new at({props:{description:"Editing mod version "+i[1].data.getVersion.mod.name+" "+i[1].data.getVersion.version,title:"Edit mod version "+i[1].data.getVersion.mod.name+" "+i[1].data.getVersion.version}}),{c(){I(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const f={};n&2&&(f.description="Editing mod version "+t[1].data.getVersion.mod.name+" "+t[1].data.getVersion.version),n&2&&(f.title="Edit mod version "+t[1].data.getVersion.mod.name+" "+t[1].data.getVersion.version),e.$set(f)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function ft(i){let e,r;return e=new it({props:{onSubmit:i[5],initialValues:i[3],modReference:i[1].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save"}}),{c(){I(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const f={};n&8&&(f.initialValues=t[3]),n&2&&(f.modReference=t[1].data.getVersion.mod.mod_reference),e.$set(f)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function dt(i){let e,r,t=i[1].error.message+"",n;return{c(){e=_("p"),r=b("Oh no... "),n=b(t)},l(f){e=q(f,"P",{});var a=L(e);r=y(a,"Oh no... "),n=y(a,t),a.forEach(c)},m(f,a){h(f,e,a),V(e,r),V(e,n)},p(f,a){a&2&&t!==(t=f[1].error.message+"")&&A(n,t)},i:x,o:x,d(f){f&&c(e)}}}function mt(i){let e,r;return{c(){e=_("p"),r=b("Loading...")},l(t){e=q(t,"P",{});var n=L(e);r=y(n,"Loading..."),n.forEach(c)},m(t,n){h(t,e,n),V(e,r)},p:x,i:x,o:x,d(t){t&&c(e)}}}function lt(i){let e,r,t,n;const f=[mt,dt,ft],a=[];function u(s,l){return s[1].fetching?0:s[1].error?1:2}return e=u(i),r=a[e]=f[e](i),{c(){r.c(),t=N()},l(s){r.l(s),t=N()},m(s,l){a[e].m(s,l),h(s,t,l),n=!0},p(s,l){let p=e;e=u(s),e===p?a[e].p(s,l):(T(),v(a[p],1,1,()=>{a[p]=null}),O(),r=a[e],r?r.p(s,l):(r=a[e]=f[e](s),r.c()),g(r,1),r.m(t.parentNode,t))},i(s){n||(g(r),n=!0)},o(s){v(r),n=!1},d(s){a[e].d(s),s&&c(t)}}}function ct(i){let e,r;return e=new Y({props:{$$slots:{default:[lt]},$$scope:{ctx:i}}}),{c(){I(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const f={};n&1034&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function $t(i){let e,r;return{c(){e=_("span"),r=b(i[2])},l(t){e=q(t,"SPAN",{});var n=L(e);r=y(n,i[2]),n.forEach(c)},m(t,n){h(t,e,n),V(e,r)},p(t,n){n&4&&A(r,t[2])},d(t){t&&c(e)}}}function ut(i){let e,r,t,n,f,a,u,s,l,p,d=!i[1].fetching&&!i[1].error&&i[1].data.getVersion&&M(i);a=new Q({props:{$$slots:{default:[ct]},$$scope:{ctx:i}}});function R(o){i[8](o)}let $={$$slots:{default:[$t]},$$scope:{ctx:i}};return i[0]!==void 0&&($.running=i[0]),s=new nt({props:$}),Z.push(()=>j(s,"running",R)),{c(){d&&d.c(),e=N(),r=z(),t=_("h1"),n=b("Edit Version"),f=z(),I(a.$$.fragment),u=z(),I(s.$$.fragment),this.h()},l(o){const m=F('[data-svelte="svelte-wzsk0g"]',document.head);d&&d.l(m),e=N(),m.forEach(c),r=D(o),t=q(o,"H1",{class:!0});var E=L(t);n=y(E,"Edit Version"),E.forEach(c),f=D(o),w(a.$$.fragment,o),u=D(o),w(s.$$.fragment,o),this.h()},h(){G(t,"class","text-4xl my-4 font-bold")},m(o,m){d&&d.m(document.head,null),V(document.head,e),h(o,r,m),h(o,t,m),V(t,n),h(o,f,m),P(a,o,m),h(o,u,m),P(s,o,m),p=!0},p(o,[m]){!o[1].fetching&&!o[1].error&&o[1].data.getVersion?d?(d.p(o,m),m&2&&g(d,1)):(d=M(o),d.c(),g(d,1),d.m(e.parentNode,e)):d&&(T(),v(d,1,1,()=>{d=null}),O());const E={};m&1034&&(E.$$scope={dirty:m,ctx:o}),a.$set(E);const k={};m&1028&&(k.$$scope={dirty:m,ctx:o}),!l&&m&1&&(l=!0,k.running=o[0],J(()=>l=!1)),s.$set(k)},i(o){p||(g(d),g(a.$$.fragment,o),g(s.$$.fragment,o),p=!0)},o(o){v(d),v(a.$$.fragment,o),v(s.$$.fragment,o),p=!1},d(o){d&&d.d(o),c(e),o&&c(r),o&&c(t),o&&c(f),S(a,o),o&&c(u),S(s,o)}}}const Dt=tt();function pt(i,e,r){let t,n,{modId:f}=e,{versionId:a}=e,u="",s=!1;const l=K(et,{version:a});U(i,l,$=>r(1,n=$));const p=W({query:rt}),d=async $=>p({versionId:a,version:$}).then(o=>{if(o.error)console.error(o.error.message),r(2,u="Error editing version: "+o.error.message),r(0,s=!0);else return ot(st+"/mod/"+f+"/version/"+a)});X(l);function R($){s=$,r(0,s)}return i.$$set=$=>{"modId"in $&&r(6,f=$.modId),"versionId"in $&&r(7,a=$.versionId)},i.$$.update=()=>{i.$$.dirty&1&&(s||r(2,u="")),i.$$.dirty&2&&r(3,t=n.data?{...n.data.getVersion,logo:void 0}:void 0)},[s,n,u,t,l,d,f,a,R]}class Mt extends B{constructor(e){super(),C(this,e,pt,ut,H,{modId:6,versionId:7})}}export{Mt as default,Dt as load};
//# sourceMappingURL=edit.svelte-f3a2427c.js.map
