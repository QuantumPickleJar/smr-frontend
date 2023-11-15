import{S as ae,i as ce,d as w,s as le,v as de,F as M,_ as q,G as D,a1 as ue,a2 as fe,$ as N,H as T,a0 as me,f as z,b as F,e as y,K as ge,j as $,k as G,g as S,M as Y,h as R,N as H,m as E,Q as C,n as k,r as V,t as x,q as L,J as A,L as Z,O as ee,R as te,p as J,W as K,X as Q,Y as pe,u as P}from"../chunks/vendor.29d7271c.js";import{r as U,s as W}from"../chunks/graphql.80ff4abf.js";import{V as ne}from"../chunks/VersionForm.48bfeacb.js";import{M as oe}from"../chunks/MetaDescriptors.75d8ca2d.js";const $e=async({params:n})=>({...n}),xe=Object.freeze(Object.defineProperty({__proto__:null,load:$e},Symbol.toStringTag,{value:"Module"})),{console:X}=me,_="src/routes/mod/[modId]/version/[versionId]/edit/+page.svelte";function j(n){let e,r;e=new oe({props:{description:"Editing mod version "+n[0].data.getVersion.mod.name+" "+n[0].data.getVersion.version,title:"Edit mod version "+n[0].data.getVersion.mod.name+" "+n[0].data.getVersion.version},$$inline:!0});const i={c:function(){A(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,a){ee(e,t,a),r=!0},p:function(t,a){const s={};a&1&&(s.description="Editing mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),a&1&&(s.title="Edit mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),e.$set(s)},i:function(t){r||(V(e.$$.fragment,t),r=!0)},o:function(t){x(e.$$.fragment,t),r=!1},d:function(t){te(e,t)}};return w("SvelteRegisterBlock",{block:i,id:j.name,type:"if",source:"(50:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:n}),i}function se(n){let e,r;e=new ne({props:{onSubmit:n[3],initialValues:n[1],modReference:n[0].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save"},$$inline:!0});const i={c:function(){A(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,a){ee(e,t,a),r=!0},p:function(t,a){const s={};a&2&&(s.initialValues=t[1]),a&1&&(s.modReference=t[0].data.getVersion.mod.mod_reference),e.$set(s)},i:function(t){r||(V(e.$$.fragment,t),r=!0)},o:function(t){x(e.$$.fragment,t),r=!1},d:function(t){te(e,t)}};return w("SvelteRegisterBlock",{block:i,id:se.name,type:"else",source:"(65:4) {:else}",ctx:n}),i}function ie(n){let e,r,i=n[0].error.message+"",o;const t={c:function(){e=y("p"),r=K("Oh no... "),o=K(i),this.h()},l:function(s){e=S(s,"P",{});var d=R(e);r=Q(d,"Oh no... "),o=Q(d,i),d.forEach($),this.h()},h:function(){E(e,_,73,6,2028)},m:function(s,d){k(s,e,d),C(e,r),C(e,o)},p:function(s,d){d&1&&i!==(i=s[0].error.message+"")&&pe(o,i)},i:P,o:P,d:function(s){s&&$(e)}};return w("SvelteRegisterBlock",{block:t,id:ie.name,type:"if",source:"(63:29) ",ctx:n}),t}function re(n){let e,r="Loading...";const i={c:function(){e=y("p"),e.textContent=r,this.h()},l:function(t){e=S(t,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-qdsr2u"&&(e.textContent=r),this.h()},h:function(){E(e,_,71,6,1974)},m:function(t,a){k(t,e,a)},p:P,i:P,o:P,d:function(t){t&&$(e)}};return w("SvelteRegisterBlock",{block:i,id:re.name,type:"if",source:"(61:4) {#if $version.fetching}",ctx:n}),i}function O(n){let e,r,i,o="Edit Version",t,a,s,d,f,v,l=!n[0].fetching&&!n[0].error&&n[0].data.getVersion&&j(n);const h=[re,ie,se],p=[];function I(m,c){return m[0].fetching?0:m[0].error?1:2}d=I(n),f=p[d]=h[d](n);const u={c:function(){l&&l.c(),e=z(),r=F(),i=y("h1"),i.textContent=o,t=F(),a=y("div"),s=y("section"),f.c(),this.h()},l:function(c){const g=ge("svelte-wzsk0g",document.head);l&&l.l(g),e=z(),g.forEach($),r=G(c),i=S(c,"H1",{class:!0,"data-svelte-h":!0}),Y(i)!=="svelte-1n0bkh"&&(i.textContent=o),t=G(c),a=S(c,"DIV",{class:!0});var b=R(a);s=S(b,"SECTION",{});var B=R(s);f.l(B),B.forEach($),b.forEach($),this.h()},h:function(){H(i,"class","text-4xl my-4 font-bold"),E(i,_,66,0,1850),E(s,_,69,2,1930),H(a,"class","card p-4"),E(a,_,68,0,1905)},m:function(c,g){l&&l.m(document.head,null),C(document.head,e),k(c,r,g),k(c,i,g),k(c,t,g),k(c,a,g),C(a,s),p[d].m(s,null),v=!0},p:function(c,[g]){!c[0].fetching&&!c[0].error&&c[0].data.getVersion?l?(l.p(c,g),g&1&&V(l,1)):(l=j(c),l.c(),V(l,1),l.m(e.parentNode,e)):l&&(J(),x(l,1,1,()=>{l=null}),L());let b=d;d=I(c),d===b?p[d].p(c,g):(J(),x(p[b],1,1,()=>{p[b]=null}),L(),f=p[d],f?f.p(c,g):(f=p[d]=h[d](c),f.c()),V(f,1),f.m(s,null))},i:function(c){v||(V(l),V(f),v=!0)},o:function(c){x(l),x(f),v=!1},d:function(c){c&&($(r),$(i),$(t),$(a)),l&&l.d(c),$(e),p[d].d()}};return w("SvelteRegisterBlock",{block:u,id:O.name,type:"component",source:"",ctx:n}),u}function ve(n,e,r){let i,o,{$$slots:t={},$$scope:a}=e;de("Page",t,[]);let{data:s}=e;const{modId:d,versionId:f}=s,v=M(),l=q(),h=D({query:U,client:v,variables:{version:f}});ue(h,"version"),fe(n,h,u=>r(0,o=u));const p=async u=>v.mutation(W,{versionId:f,version:u}).toPromise().then(m=>{if(m.error)console.error(m.error.message),l.trigger({message:"Error editing version: "+m.error.message,background:"variant-filled-error",autohide:!1});else return l.trigger({message:"Version updated",background:"variant-filled-success",timeout:5e3}),N(T+"/mod/"+d+"/version/"+f)});n.$$.on_mount.push(function(){s===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&X.warn("<Page> was created without expected prop 'data'")});const I=["data"];return Object.keys(e).forEach(u=>{!~I.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&X.warn(`<Page> was created with unknown prop '${u}'`)}),n.$$set=u=>{"data"in u&&r(4,s=u.data)},n.$capture_state=()=>({queryStore:D,getContextClient:M,GetModVersionDocument:U,UpdateVersionDocument:W,goto:N,VersionForm:ne,base:T,MetaDescriptors:oe,getToastStore:q,data:s,modId:d,versionId:f,client:v,toastStore:l,version:h,onSubmit:p,initialValues:i,$version:o}),n.$inject_state=u=>{"data"in u&&r(4,s=u.data),"initialValues"in u&&r(1,i=u.initialValues)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&1&&r(1,i=o.data?{...o.data.getVersion,logo:void 0}:void 0)},[o,i,h,p,s]}class we extends ae{constructor(e){super(e),ce(this,e,ve,O,le,{data:4}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:O.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{we as component,xe as universal};
//# sourceMappingURL=19.0126b790.js.map