import{S as mt,i as pt,d as E,s as $t,y as ht,I as vt,v as bt,F as K,G as Q,a0 as xt,a1 as yt,_ as W,H as X,$ as Et,f as Y,b as I,e as P,J as z,K as Gt,j as p,k as M,g as T,M as ot,h as B,L as F,N as U,m as _,Q as O,n as x,O as H,r as b,t as y,q as Z,T as wt,R as L,p as tt,W as R,X as N,Y as st,u as C}from"../chunks/vendor.b1090c37.js";import{n as et,E as nt}from"../chunks/graphql.fef59309.js";import{T as rt}from"../chunks/Toast.c66ddab3.js";import{G as at}from"../chunks/GuideForm.d6c583ce.js";import{M as ct}from"../chunks/MetaDescriptors.cb11bfd0.js";const St=async({params:n})=>({...n}),Ot=Object.freeze(Object.defineProperty({__proto__:null,load:St},Symbol.toStringTag,{value:"Module"})),{console:it}=Et,j="src/routes/guide/[guideId]/edit/+page.svelte";function q(n){let t,o;t=new ct({props:{description:"Editing guide '"+n[2].data.getGuide.short_description+"'",title:"Edit guide '"+n[2].data.getGuide.name+"'"},$$inline:!0});const a={c:function(){z(t.$$.fragment)},l:function(e){F(t.$$.fragment,e)},m:function(e,i){H(t,e,i),o=!0},p:function(e,i){const c={};i&4&&(c.description="Editing guide '"+e[2].data.getGuide.short_description+"'"),i&4&&(c.title="Edit guide '"+e[2].data.getGuide.name+"'"),t.$set(c)},i:function(e){o||(b(t.$$.fragment,e),o=!0)},o:function(e){y(t.$$.fragment,e),o=!1},d:function(e){L(t,e)}};return E("SvelteRegisterBlock",{block:a,id:q.name,type:"if",source:"(43:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:n}),a}function ut(n){let t,o;t=new at({props:{onSubmit:n[4],initialValues:n[2].data.getGuide,submitText:"Save"},$$inline:!0});const a={c:function(){z(t.$$.fragment)},l:function(e){F(t.$$.fragment,e)},m:function(e,i){H(t,e,i),o=!0},p:function(e,i){const c={};i&4&&(c.initialValues=e[2].data.getGuide),t.$set(c)},i:function(e){o||(b(t.$$.fragment,e),o=!0)},o:function(e){y(t.$$.fragment,e),o=!1},d:function(e){L(t,e)}};return E("SvelteRegisterBlock",{block:a,id:ut.name,type:"else",source:"(58:4) {:else}",ctx:n}),a}function ft(n){let t,o,a=n[2].error.message+"",s;const e={c:function(){t=P("p"),o=R("Oh no... "),s=R(a),this.h()},l:function(c){t=T(c,"P",{});var u=B(t);o=N(u,"Oh no... "),s=N(u,a),u.forEach(p),this.h()},h:function(){_(t,j,65,6,1663)},m:function(c,u){x(c,t,u),O(t,o),O(t,s)},p:function(c,u){u&4&&a!==(a=c[2].error.message+"")&&st(s,a)},i:C,o:C,d:function(c){c&&p(t)}};return E("SvelteRegisterBlock",{block:e,id:ft.name,type:"if",source:"(56:27) ",ctx:n}),e}function lt(n){let t,o="Loading...";const a={c:function(){t=P("p"),t.textContent=o,this.h()},l:function(e){t=T(e,"P",{"data-svelte-h":!0}),ot(t)!=="svelte-qdsr2u"&&(t.textContent=o),this.h()},h:function(){_(t,j,63,6,1611)},m:function(e,i){x(e,t,i)},p:C,i:C,o:C,d:function(e){e&&p(t)}};return E("SvelteRegisterBlock",{block:a,id:lt.name,type:"if",source:"(54:4) {#if $guide.fetching}",ctx:n}),a}function dt(n){let t,o;const a={c:function(){t=P("span"),o=R(n[1]),this.h()},l:function(e){t=T(e,"SPAN",{});var i=B(t);o=N(i,n[1]),i.forEach(p),this.h()},h:function(){_(t,j,73,2,1867)},m:function(e,i){x(e,t,i),O(t,o)},p:function(e,i){i&2&&st(o,e[1])},d:function(e){e&&p(t)}};return E("SvelteRegisterBlock",{block:a,id:dt.name,type:"slot",source:"(64:0) <Toast bind:running={errorToast}>",ctx:n}),a}function D(n){let t,o,a,s="Edit Guide",e,i,c,u,d,h,m,G,w,l=!n[2].fetching&&!n[2].error&&n[2].data.getGuide&&q(n);const f=[lt,ft,ut],$=[];function V(v,r){return v[2].fetching?0:v[2].error?1:2}u=V(n),d=$[u]=f[u](n);function gt(v){n[6](v)}let A={$$slots:{default:[dt]},$$scope:{ctx:n}};n[0]!==void 0&&(A.running=n[0]),m=new rt({props:A,$$inline:!0}),ht.push(()=>vt(m,"running",gt));const J={c:function(){l&&l.c(),t=Y(),o=I(),a=P("h1"),a.textContent=s,e=I(),i=P("div"),c=P("section"),d.c(),h=I(),z(m.$$.fragment),this.h()},l:function(r){const g=Gt("svelte-2z35li",document.head);l&&l.l(g),t=Y(),g.forEach(p),o=M(r),a=T(r,"H1",{class:!0,"data-svelte-h":!0}),ot(a)!=="svelte-mvt1bp"&&(a.textContent=s),e=M(r),i=T(r,"DIV",{class:!0});var S=B(i);c=T(S,"SECTION",{});var k=B(c);d.l(k),k.forEach(p),S.forEach(p),h=M(r),F(m.$$.fragment,r),this.h()},h:function(){U(a,"class","text-4xl my-4 font-bold"),_(a,j,58,0,1491),_(c,j,61,2,1569),U(i,"class","card p-4"),_(i,j,60,0,1544)},m:function(r,g){l&&l.m(document.head,null),O(document.head,t),x(r,o,g),x(r,a,g),x(r,e,g),x(r,i,g),O(i,c),$[u].m(c,null),x(r,h,g),H(m,r,g),w=!0},p:function(r,[g]){!r[2].fetching&&!r[2].error&&r[2].data.getGuide?l?(l.p(r,g),g&4&&b(l,1)):(l=q(r),l.c(),b(l,1),l.m(t.parentNode,t)):l&&(tt(),y(l,1,1,()=>{l=null}),Z());let S=u;u=V(r),u===S?$[u].p(r,g):(tt(),y($[S],1,1,()=>{$[S]=null}),Z(),d=$[u],d?d.p(r,g):(d=$[u]=f[u](r),d.c()),b(d,1),d.m(c,null));const k={};g&514&&(k.$$scope={dirty:g,ctx:r}),!G&&g&1&&(G=!0,k.running=r[0],wt(()=>G=!1)),m.$set(k)},i:function(r){w||(b(l),b(d),b(m.$$.fragment,r),w=!0)},o:function(r){y(l),y(d),y(m.$$.fragment,r),w=!1},d:function(r){r&&(p(o),p(a),p(e),p(i),p(h)),l&&l.d(r),p(t),$[u].d(),L(m,r)}};return E("SvelteRegisterBlock",{block:J,id:D.name,type:"component",source:"",ctx:n}),J}function kt(n,t,o){let a,{$$slots:s={},$$scope:e}=t;bt("Page",s,[]);let{data:i}=t;const{guideId:c}=i,u=K();let d="",h=!1;const m=Q({query:et,client:u,variables:{guide:c}});xt(m,"guide"),yt(n,m,f=>o(2,a=f));const G=f=>{u.mutation(nt,{guideId:c,guide:f}).toPromise().then($=>{$.error?(console.error($.error.message),o(1,d="Error editing guide: "+$.error.message),o(0,h=!0)):W(X+"/guide/"+$.data.updateGuide.id)})};n.$$.on_mount.push(function(){i===void 0&&!("data"in t||n.$$.bound[n.$$.props.data])&&it.warn("<Page> was created without expected prop 'data'")});const w=["data"];Object.keys(t).forEach(f=>{!~w.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&it.warn(`<Page> was created with unknown prop '${f}'`)});function l(f){h=f,o(0,h)}return n.$$set=f=>{"data"in f&&o(5,i=f.data)},n.$capture_state=()=>({getContextClient:K,queryStore:Q,EditGuideDocument:nt,GetGuideDocument:et,Toast:rt,goto:W,GuideForm:at,base:X,MetaDescriptors:ct,data:i,guideId:c,client:u,errorMessage:d,errorToast:h,guide:m,onSubmit:G,$guide:a}),n.$inject_state=f=>{"data"in f&&o(5,i=f.data),"errorMessage"in f&&o(1,d=f.errorMessage),"errorToast"in f&&o(0,h=f.errorToast)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),n.$$.update=()=>{n.$$.dirty&1&&(h||o(1,d=""))},[h,d,a,m,G,i,l]}class Bt extends mt{constructor(t){super(t),pt(this,t,kt,D,$t,{data:5}),E("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:D.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Bt as component,Ot as universal};
//# sourceMappingURL=12.6eab7f01.js.map
