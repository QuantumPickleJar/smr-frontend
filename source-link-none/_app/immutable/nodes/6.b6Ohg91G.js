import{S as z,i as A,d as I,s as B,v as J,F as M,_ as N,$ as V,H as k,a0 as K,J as L,b as C,e as p,K as Q,L as E,j as l,k as y,g as h,M as q,h as O,N as P,m as S,O as j,n as $,Q as G,u as U,r as D,t as R,R as F}from"../chunks/vendor._VOZ8p_J.js";import{N as H}from"../chunks/graphql.olkSQdQZ.js";import{S as T}from"../chunks/SMLVersionForm.8vrBt6b3.js";import{M as _}from"../chunks/MetaDescriptors.z_A-62Pv.js";const{console:W}=K,v="src/routes/admin/sml-versions/new/+page.svelte";function w(f){let t,g,n,d="New SML Version",i,s,r,a,o;t=new _({props:{description:"New SML Version",title:"Admin: New SML Version"},$$inline:!0}),a=new T({props:{onSubmit:f[0]},$$inline:!0});const m={c:function(){L(t.$$.fragment),g=C(),n=p("h1"),n.textContent=d,i=C(),s=p("div"),r=p("section"),L(a.$$.fragment),this.h()},l:function(e){const c=Q("svelte-1wdno4b",document.head);E(t.$$.fragment,c),c.forEach(l),g=y(e),n=h(e,"H1",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-xueoz1"&&(n.textContent=d),i=y(e),s=h(e,"DIV",{class:!0});var b=O(s);r=h(b,"SECTION",{});var x=O(r);E(a.$$.fragment,x),x.forEach(l),b.forEach(l),this.h()},h:function(){P(n,"class","text-4xl my-4 font-bold"),S(n,v,44,0,1331),S(r,v,47,2,1414),P(s,"class","card p-4"),S(s,v,46,0,1389)},m:function(e,c){j(t,document.head,null),$(e,g,c),$(e,n,c),$(e,i,c),$(e,s,c),G(s,r),j(a,r,null),o=!0},p:U,i:function(e){o||(D(t.$$.fragment,e),D(a.$$.fragment,e),o=!0)},o:function(e){R(t.$$.fragment,e),R(a.$$.fragment,e),o=!1},d:function(e){e&&(l(g),l(n),l(i),l(s)),F(t),F(a)}};return I("SvelteRegisterBlock",{block:m,id:w.name,type:"component",source:"",ctx:f}),m}function X(f,t,g){let{$$slots:n={},$$scope:d}=t;J("Page",n,[]);const i=M(),s=N(),r=o=>{i.mutation(H,{smlVersion:o}).toPromise().then(m=>{m.error?(console.error(m.error.message),s.trigger({message:"Error creating SML Version: "+m.error.message,background:"variant-filled-error",autohide:!1})):(s.trigger({message:"SML version created",background:"variant-filled-success",timeout:5e3}),V(k+"/admin/sml-versions"))})},a=[];return Object.keys(t).forEach(o=>{!~a.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&W.warn(`<Page> was created with unknown prop '${o}'`)}),f.$capture_state=()=>({getContextClient:M,NewSmlVersionDocument:H,goto:V,SMLVersionForm:T,base:k,MetaDescriptors:_,getToastStore:N,client:i,toastStore:s,onSubmit:r}),[r]}class se extends z{constructor(t){super(t),A(this,t,X,w,B,{}),I("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:w.name})}}export{se as component};
//# sourceMappingURL=6.b6Ohg91G.js.map
