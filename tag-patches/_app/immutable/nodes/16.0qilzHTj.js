import{S as ct,i as dt,d as S,s as lt,v as ut,F as V,_ as B,G as D,a1 as ft,a2 as mt,$ as N,H as T,ag as F,a0 as gt,f as G,b as H,e as E,K as pt,j as g,k as L,g as P,M as U,h as C,N as z,m as M,Q as j,n as k,r as b,t as y,q as J,J as Z,L as tt,O as et,R as ot,p as K,W as Q,X as W,Y as $t,u as _}from"../chunks/vendor.mY4N8sOr.js";import{q as X,r as Y}from"../chunks/graphql.NreK-VdG.js";import{M as nt}from"../chunks/ModForm.sx6j2zYF.js";import{M as at}from"../chunks/MetaDescriptors.aGzW-WK-.js";const ht=async({params:o})=>({...o}),St=Object.freeze(Object.defineProperty({__proto__:null,load:ht},Symbol.toStringTag,{value:"Module"})),{console:A}=gt,O="src/routes/mod/[modId]/edit/+page.svelte";function q(o){let t,s;t=new at({props:{description:"Editing mod "+o[0].data.mod.name,title:"Edit mod "+o[0].data.mod.name,image:o[0].data.mod.logo},$$inline:!0});const i={c:function(){Z(t.$$.fragment)},l:function(e){tt(t.$$.fragment,e)},m:function(e,r){et(t,e,r),s=!0},p:function(e,r){const a={};r&1&&(a.description="Editing mod "+e[0].data.mod.name),r&1&&(a.title="Edit mod "+e[0].data.mod.name),r&1&&(a.image=e[0].data.mod.logo),t.$set(a)},i:function(e){s||(b(t.$$.fragment,e),s=!0)},o:function(e){y(t.$$.fragment,e),s=!1},d:function(e){ot(t,e)}};return S("SvelteRegisterBlock",{block:i,id:q.name,type:"if",source:"(53:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:o}),i}function it(o){let t,s;t=new nt({props:{onSubmit:o[3],initialValues:o[1],editing:!0,submitText:"Save"},$$inline:!0});const i={c:function(){Z(t.$$.fragment)},l:function(e){tt(t.$$.fragment,e)},m:function(e,r){et(t,e,r),s=!0},p:function(e,r){const a={};r&2&&(a.initialValues=e[1]),t.$set(a)},i:function(e){s||(b(t.$$.fragment,e),s=!0)},o:function(e){y(t.$$.fragment,e),s=!1},d:function(e){ot(t,e)}};return S("SvelteRegisterBlock",{block:i,id:it.name,type:"else",source:"(69:4) {:else}",ctx:o}),i}function st(o){let t,s,i=o[0].error.message+"",n;const e={c:function(){t=E("p"),s=Q("Oh no... "),n=Q(i),this.h()},l:function(a){t=P(a,"P",{});var l=C(t);s=W(l,"Oh no... "),n=W(l,i),l.forEach(g),this.h()},h:function(){M(t,O,76,6,1941)},m:function(a,l){k(a,t,l),j(t,s),j(t,n)},p:function(a,l){l&1&&i!==(i=a[0].error.message+"")&&$t(n,i)},i:_,o:_,d:function(a){a&&g(t)}};return S("SvelteRegisterBlock",{block:e,id:st.name,type:"if",source:"(67:25) ",ctx:o}),e}function rt(o){let t,s="Loading...";const i={c:function(){t=E("p"),t.textContent=s,this.h()},l:function(e){t=P(e,"P",{"data-svelte-h":!0}),U(t)!=="svelte-qdsr2u"&&(t.textContent=s),this.h()},h:function(){M(t,O,74,6,1891)},m:function(e,r){k(e,t,r)},p:_,i:_,o:_,d:function(e){e&&g(t)}};return S("SvelteRegisterBlock",{block:i,id:rt.name,type:"if",source:"(65:4) {#if $mod.fetching}",ctx:o}),i}function I(o){let t,s,i,n="Edit Mod",e,r,a,l,f,h,c=!o[0].fetching&&!o[0].error&&o[0].data.mod&&q(o);const w=[rt,st,it],p=[];function u($,d){return $[0].fetching?0:$[0].error?1:2}l=u(o),f=p[l]=w[l](o);const v={c:function(){c&&c.c(),t=G(),s=H(),i=E("h1"),i.textContent=n,e=H(),r=E("div"),a=E("section"),f.c(),this.h()},l:function(d){const m=pt("svelte-q8g25b",document.head);c&&c.l(m),t=G(),m.forEach(g),s=L(d),i=P(d,"H1",{class:!0,"data-svelte-h":!0}),U(i)!=="svelte-1bmvkg7"&&(i.textContent=n),e=L(d),r=P(d,"DIV",{class:!0});var x=C(r);a=P(x,"SECTION",{});var R=C(a);f.l(R),R.forEach(g),x.forEach(g),this.h()},h:function(){z(i,"class","my-4 text-4xl font-bold"),M(i,O,69,0,1775),M(a,O,72,2,1851),z(r,"class","card p-4"),M(r,O,71,0,1826)},m:function(d,m){c&&c.m(document.head,null),j(document.head,t),k(d,s,m),k(d,i,m),k(d,e,m),k(d,r,m),j(r,a),p[l].m(a,null),h=!0},p:function(d,[m]){!d[0].fetching&&!d[0].error&&d[0].data.mod?c?(c.p(d,m),m&1&&b(c,1)):(c=q(d),c.c(),b(c,1),c.m(t.parentNode,t)):c&&(K(),y(c,1,1,()=>{c=null}),J());let x=l;l=u(d),l===x?p[l].p(d,m):(K(),y(p[x],1,1,()=>{p[x]=null}),J(),f=p[l],f?f.p(d,m):(f=p[l]=w[l](d),f.c()),b(f,1),f.m(a,null))},i:function(d){h||(b(c),b(f),h=!0)},o:function(d){y(c),y(f),h=!1},d:function(d){d&&(g(s),g(i),g(e),g(r)),c&&c.d(d),g(t),p[l].d()}};return S("SvelteRegisterBlock",{block:v,id:I.name,type:"component",source:"",ctx:o}),v}function vt(o,t,s){let i,n,{$$slots:e={},$$scope:r}=t;ut("Page",e,[]);let{data:a}=t;const{modId:l}=a,f=V(),h=B(),c=D({query:X,client:f,variables:{mod:l}});ft(c,"mod"),mt(o,c,u=>s(0,n=u));const w=u=>{f.mutation(Y,{modId:F(c).data.mod.id,mod:u}).toPromise().then(v=>{v.error?(console.error(v.error.message),h.trigger({message:"Error editing mod: "+v.error.message,background:"variant-filled-error",autohide:!1})):(h.trigger({message:"Mod updated",background:"variant-filled-success",timeout:5e3}),N(T+"/mod/"+v.data.updateMod.id))})};o.$$.on_mount.push(function(){a===void 0&&!("data"in t||o.$$.bound[o.$$.props.data])&&A.warn("<Page> was created without expected prop 'data'")});const p=["data"];return Object.keys(t).forEach(u=>{!~p.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&A.warn(`<Page> was created with unknown prop '${u}'`)}),o.$$set=u=>{"data"in u&&s(4,a=u.data)},o.$capture_state=()=>({getContextClient:V,queryStore:D,EditModDocument:Y,GetModDocument:X,goto:N,ModForm:nt,base:T,MetaDescriptors:at,get:F,getToastStore:B,data:a,modId:l,client:f,toastStore:h,mod:c,onSubmit:w,initialValues:i,$mod:n}),o.$inject_state=u=>{"data"in u&&s(4,a=u.data),"initialValues"in u&&s(1,i=u.initialValues)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&1&&s(1,i=n.data?{...n.data.mod,logo:void 0}:void 0)},[n,i,c,w,a]}class wt extends ct{constructor(t){super(t),dt(this,t,vt,I,lt,{data:4}),S("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:I.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{wt as component,St as universal};
//# sourceMappingURL=16.0qilzHTj.js.map
