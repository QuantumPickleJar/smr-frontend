import{S as A,i as B,s as G,j as v,m as V,o as j,x as g,u as h,v as E,as as H,K,L as Q,l as M,k as N,e as T,t as I,a0 as U,d as c,n as C,c as q,a as P,g as w,b as X,V as b,f as $,w as L,M as z,P as J,N as W,O as Y,Q as Z,at as x,r as O,h as F,X as S}from"../../../../../chunks/vendor-b961c41b.js";import{p as ee}from"../../../../../chunks/routing-1d144003.js";import{B as te,I as ne}from"../../../../../chunks/graphql-06a000cd.js";import{T as re}from"../../../../../chunks/Toast-2eaebd96.js";import{g as se}from"../../../../../chunks/navigation-51f4a605.js";import{V as oe}from"../../../../../chunks/VersionForm-9378ed78.js";import{b as ae}from"../../../../../chunks/paths-6758d194.js";import{M as ie}from"../../../../../chunks/MetaDescriptors-cd1dea74.js";import"../../../../../chunks/singletons-12a22614.js";import"../../../../../chunks/uplugin-67cd2dd4.js";import"../../../../../chunks/api-82c76902.js";import"../../../../../chunks/user-551a19d6.js";import"../../../../../chunks/forms-8d025218.js";import"../../../../../chunks/markdown-f101d836.js";import"../../../../../chunks/stores-2cd2bb89.js";function R(o){let t,n;return t=new ie({props:{description:"Editing mod version "+o[1].data.getVersion.mod.name+" "+o[1].data.getVersion.version,title:"Edit mod version "+o[1].data.getVersion.mod.name+" "+o[1].data.getVersion.version}}),{c(){v(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){j(t,e,r),n=!0},p(e,r){const f={};r&2&&(f.description="Editing mod version "+e[1].data.getVersion.mod.name+" "+e[1].data.getVersion.version),r&2&&(f.title="Edit mod version "+e[1].data.getVersion.mod.name+" "+e[1].data.getVersion.version),t.$set(f)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function fe(o){let t,n;return t=new oe({props:{onSubmit:o[5],initialValues:o[3],modReference:o[1].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save"}}),{c(){v(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){j(t,e,r),n=!0},p(e,r){const f={};r&8&&(f.initialValues=e[3]),r&2&&(f.modReference=e[1].data.getVersion.mod.mod_reference),t.$set(f)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function le(o){let t,n,e=o[1].error.message+"",r;return{c(){t=T("p"),n=I("Oh no... "),r=I(e)},l(f){t=q(f,"P",{});var i=P(t);n=w(i,"Oh no... "),r=w(i,e),i.forEach(c)},m(f,i){$(f,t,i),b(t,n),b(t,r)},p(f,i){i&2&&e!==(e=f[1].error.message+"")&&F(r,e)},i:S,o:S,d(f){f&&c(t)}}}function me(o){let t,n;return{c(){t=T("p"),n=I("Loading...")},l(e){t=q(e,"P",{});var r=P(t);n=w(r,"Loading..."),r.forEach(c)},m(e,r){$(e,t,r),b(t,n)},p:S,i:S,o:S,d(e){e&&c(t)}}}function ue(o){let t,n,e,r;const f=[me,le,fe],i=[];function p(a,u){return a[1].fetching?0:a[1].error?1:2}return t=p(o),n=i[t]=f[t](o),{c(){n.c(),e=M()},l(a){n.l(a),e=M()},m(a,u){i[t].m(a,u),$(a,e,u),r=!0},p(a,u){let _=t;t=p(a),t===_?i[t].p(a,u):(O(),h(i[_],1,1,()=>{i[_]=null}),L(),n=i[t],n?n.p(a,u):(n=i[t]=f[t](a),n.c()),g(n,1),n.m(e.parentNode,e))},i(a){r||(g(n),r=!0)},o(a){h(n),r=!1},d(a){i[t].d(a),a&&c(e)}}}function ce(o){let t,n;return t=new x({props:{$$slots:{default:[ue]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){j(t,e,r),n=!0},p(e,r){const f={};r&1034&&(f.$$scope={dirty:r,ctx:e}),t.$set(f)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function de(o){let t,n;return{c(){t=T("span"),n=I(o[2])},l(e){t=q(e,"SPAN",{});var r=P(t);n=w(r,o[2]),r.forEach(c)},m(e,r){$(e,t,r),b(t,n)},p(e,r){r&4&&F(n,e[2])},d(e){e&&c(t)}}}function pe(o){let t,n,e,r,f,i,p,a,u,_,l=!o[1].fetching&&!o[1].error&&o[1].data.getVersion&&R(o);i=new H({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}});function y(s){o[8](s)}let d={$$slots:{default:[de]},$$scope:{ctx:o}};return o[0]!==void 0&&(d.running=o[0]),a=new re({props:d}),K.push(()=>Q(a,"running",y)),{c(){l&&l.c(),t=M(),n=N(),e=T("h1"),r=I("Edit Version"),f=N(),v(i.$$.fragment),p=N(),v(a.$$.fragment),this.h()},l(s){const m=U('[data-svelte="svelte-1gp98ge"]',document.head);l&&l.l(m),t=M(),m.forEach(c),n=C(s),e=q(s,"H1",{class:!0});var k=P(e);r=w(k,"Edit Version"),k.forEach(c),f=C(s),V(i.$$.fragment,s),p=C(s),V(a.$$.fragment,s),this.h()},h(){X(e,"class","text-4xl my-4 font-bold")},m(s,m){l&&l.m(document.head,null),b(document.head,t),$(s,n,m),$(s,e,m),b(e,r),$(s,f,m),j(i,s,m),$(s,p,m),j(a,s,m),_=!0},p(s,[m]){!s[1].fetching&&!s[1].error&&s[1].data.getVersion?l?(l.p(s,m),m&2&&g(l,1)):(l=R(s),l.c(),g(l,1),l.m(t.parentNode,t)):l&&(O(),h(l,1,1,()=>{l=null}),L());const k={};m&1034&&(k.$$scope={dirty:m,ctx:s}),i.$set(k);const D={};m&1028&&(D.$$scope={dirty:m,ctx:s}),!u&&m&1&&(u=!0,D.running=s[0],z(()=>u=!1)),a.$set(D)},i(s){_||(g(l),g(i.$$.fragment,s),g(a.$$.fragment,s),_=!0)},o(s){h(l),h(i.$$.fragment,s),h(a.$$.fragment,s),_=!1},d(s){l&&l.d(s),c(t),s&&c(n),s&&c(e),s&&c(f),E(i,s),s&&c(p),E(a,s)}}}const Pe=ee();function _e(o,t,n){let e,r,{modId:f}=t,{versionId:i}=t,p="",a=!1;const u=J(te,{version:i});W(o,u,d=>n(1,r=d));const _=Y({query:ne}),l=async d=>_({versionId:i,version:d}).then(s=>{if(s.error)console.error(s.error.message),n(2,p="Error editing version: "+s.error.message),n(0,a=!0);else return se(ae+"/mod/"+f+"/version/"+i)});Z(u);function y(d){a=d,n(0,a)}return o.$$set=d=>{"modId"in d&&n(6,f=d.modId),"versionId"in d&&n(7,i=d.versionId)},o.$$.update=()=>{o.$$.dirty&1&&(a||n(2,p="")),o.$$.dirty&2&&n(3,e=r.data?{...r.data.getVersion,logo:void 0}:void 0)},[a,r,p,e,u,l,f,i,y]}class ye extends A{constructor(t){super();B(this,t,_e,pe,G,{modId:6,versionId:7})}}export{ye as default,Pe as load};
//# sourceMappingURL=edit.svelte-0f39980c.js.map
