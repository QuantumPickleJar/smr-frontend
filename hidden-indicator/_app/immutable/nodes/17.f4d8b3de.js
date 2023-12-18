import{G as J,S as $e,i as we,d as D,s as be,v as xe,F as X,a1 as H,a2 as L,_ as Y,$ as Z,w as z,H as ee,a0 as ye,f as A,b as T,e as k,W as j,K as Se,j as g,k as U,g as I,h as V,X as F,N as _,m as P,Q as y,n as R,r as B,t as C,q as te,J as ie,L as ce,O as le,R as fe,p as ne,Y as G,u as q,M as ke,l as oe}from"../chunks/vendor.4474e4ea.js";import{V as ue}from"../chunks/VersionForm.713ef38c.js";import{v as Ie,F as Pe,w as Ee,x as Ve,y as re}from"../chunks/graphql.e6600caa.js";import{M as de}from"../chunks/MetaDescriptors.001e0789.js";const Re=async({params:r})=>({...r}),Be=Object.freeze(Object.defineProperty({__proto__:null,load:Re},Symbol.toStringTag,{value:"Module"})),ae=async(r,e,s,a,o)=>{const l=Math.ceil(r.size/1e7),c=new Array(l).fill(0).map((d,f)=>f).reverse(),n=(d,f,x)=>o.mutation(Ve,{modId:e,versionId:x,part:f,file:d}).toPromise(),p=10;let v=0,m=0;const b=d=>{if(v>=p||!c.length)return;const f=c.pop(),x=f*1e7,$=r.slice(x,x+1e7);return v+=1,Promise.all([n($,f+1,d).then(()=>(v-=1,a.set({total:l,uploaded:l-c.length-v}),b(d))).catch(w=>{if(console.error("Upload failed:",w),v-=1,c.push(f),m+=1,m<5)return b(d);throw new Error("Failed uploading after 5 attempts")}),b(d)])};return o.mutation(Ie,{modId:e}).toPromise().then(async d=>(a.set({total:l,uploaded:0}),await b(d.data.createVersion),d.data.createVersion)).then(d=>(console.log("Finalizing",{versionID:d}),o.mutation(Pe,{modId:e,versionId:d,version:s}).toPromise().then(()=>new Promise((f,x)=>{let $=0,w=J({query:Ee,client:o,variables:{modId:e,versionId:d},requestPolicy:"network-only"});const i=setInterval(()=>{if($==60)return clearInterval(i),x(new Error("Timed out waiting for mod processing"));w.pause(),w.resume(),$++},1e4),h=w.subscribe(u=>{if(!u.fetching){if(u.error){clearInterval(i),x(new Error(u.error.message)),setTimeout(h);return}u.data?.checkVersionUploadState?.version?.id&&(h(),clearInterval(i),f(u.data.checkVersionUploadState))}})})))).catch(d=>{throw console.error(d),d})},{console:se}=ye,E="src/routes/mod/[modId]/new-version/+page.svelte";function K(r){let e,s;e=new de({props:{description:"Creating a new version of mod "+r[0].data.mod.name,title:"New version of mod "+r[0].data.mod.name},$$inline:!0});const a={c:function(){ie(e.$$.fragment)},l:function(t){ce(e.$$.fragment,t)},m:function(t,l){le(e,t,l),s=!0},p:function(t,l){const c={};l&1&&(c.description="Creating a new version of mod "+t[0].data.mod.name),l&1&&(c.title="New version of mod "+t[0].data.mod.name),e.$set(c)},i:function(t){s||(B(e.$$.fragment,t),s=!0)},o:function(t){C(e.$$.fragment,t),s=!1},d:function(t){fe(e,t)}};return D("SvelteRegisterBlock",{block:a,id:K.name,type:"if",source:"(61:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:r}),a}function me(r){let e=r[0].data.mod.name+"",s;const a={c:function(){s=j(e)},l:function(t){s=F(t,e)},m:function(t,l){R(t,s,l)},p:function(t,l){l&1&&e!==(e=t[0].data.mod.name+"")&&G(s,e)},d:function(t){t&&g(s)}};return D("SvelteRegisterBlock",{block:a,id:me.name,type:"if",source:"(72:24) ",ctx:r}),a}function pe(r){let e;const s={c:function(){e=j("...")},l:function(o){e=F(o,"...")},m:function(o,t){R(o,e,t)},p:q,d:function(o){o&&g(e)}};return D("SvelteRegisterBlock",{block:s,id:pe.name,type:"if",source:"(70:2) {#if $mod.fetching}",ctx:r}),s}function he(r){let e,s,a,o;e=new ue({props:{onSubmit:r[6],modReference:r[0].data.mod.mod_reference},$$inline:!0});let t=r[1]&&Q(r);const l={c:function(){ie(e.$$.fragment),s=T(),t&&t.c(),a=A()},l:function(n){ce(e.$$.fragment,n),s=U(n),t&&t.l(n),a=A()},m:function(n,p){le(e,n,p),R(n,s,p),t&&t.m(n,p),R(n,a,p),o=!0},p:function(n,p){const v={};p&1&&(v.modReference=n[0].data.mod.mod_reference),e.$set(v),n[1]?t?t.p(n,p):(t=Q(n),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:function(n){o||(B(e.$$.fragment,n),o=!0)},o:function(n){C(e.$$.fragment,n),o=!1},d:function(n){n&&(g(s),g(a)),fe(e,n),t&&t.d(n)}};return D("SvelteRegisterBlock",{block:l,id:he.name,type:"else",source:"(83:4) {:else}",ctx:r}),l}function ge(r){let e,s,a=r[0].error.message+"",o;const t={c:function(){e=k("p"),s=j("Oh no... "),o=j(a),this.h()},l:function(c){e=I(c,"P",{});var n=V(e);s=F(n,"Oh no... "),o=F(n,a),n.forEach(g),this.h()},h:function(){P(e,E,99,6,2440)},m:function(c,n){R(c,e,n),y(e,s),y(e,o)},p:function(c,n){n&1&&a!==(a=c[0].error.message+"")&&G(o,a)},i:q,o:q,d:function(c){c&&g(e)}};return D("SvelteRegisterBlock",{block:t,id:ge.name,type:"if",source:"(81:25) ",ctx:r}),t}function ve(r){let e,s="Loading...";const a={c:function(){e=k("p"),e.textContent=s,this.h()},l:function(t){e=I(t,"P",{"data-svelte-h":!0}),ke(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h:function(){P(e,E,97,6,2390)},m:function(t,l){R(t,e,l)},p:q,i:q,o:q,d:function(t){t&&g(e)}};return D("SvelteRegisterBlock",{block:a,id:ve.name,type:"if",source:"(79:4) {#if $mod.fetching}",ctx:r}),a}function Q(r){let e,s,a,o,t,l,c,n,p=r[2].toFixed(0)+"",v,m,b,d,f;const x={c:function(){e=k("div"),s=k("div"),a=k("div"),o=k("span"),t=j(r[1]),l=T(),c=k("div"),n=k("span"),v=j(p),m=j("%"),b=T(),d=k("div"),f=k("div"),this.h()},l:function(w){e=I(w,"DIV",{class:!0});var i=V(e);s=I(i,"DIV",{class:!0});var h=V(s);a=I(h,"DIV",{});var u=V(a);o=I(u,"SPAN",{class:!0});var S=V(o);t=F(S,r[1]),S.forEach(g),u.forEach(g),l=U(h),c=I(h,"DIV",{class:!0});var N=V(c);n=I(N,"SPAN",{class:!0});var O=V(n);v=F(O,p),m=F(O,"%"),O.forEach(g),N.forEach(g),h.forEach(g),b=U(i),d=I(i,"DIV",{class:!0});var M=V(d);f=I(M,"DIV",{style:!0,class:!0}),V(f).forEach(g),M.forEach(g),i.forEach(g),this.h()},h:function(){_(o,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),P(o,E,107,14,2723),P(a,E,106,12,2703),_(n,"class","text-xs font-semibold inline-block text-white"),P(n,E,113,14,2971),_(c,"class","text-right"),P(c,E,112,12,2932),_(s,"class","flex mb-2 items-center justify-between"),P(s,E,105,10,2638),oe(f,"width",r[2].toFixed(0)+"%"),_(f,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),P(f,E,117,12,3197),_(d,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),P(d,E,116,10,3113),_(e,"class","relative pt-4"),P(e,E,104,8,2600)},m:function(w,i){R(w,e,i),y(e,s),y(s,a),y(a,o),y(o,t),y(s,l),y(s,c),y(c,n),y(n,v),y(n,m),y(e,b),y(e,d),y(d,f)},p:function(w,i){i&2&&G(t,w[1]),i&4&&p!==(p=w[2].toFixed(0)+"")&&G(v,p),i&4&&oe(f,"width",w[2].toFixed(0)+"%")},d:function(w){w&&g(e)}};return D("SvelteRegisterBlock",{block:x,id:Q.name,type:"if",source:"(86:6) {#if $uploadStatus}",ctx:r}),x}function W(r){let e,s,a,o,t,l,c,n,p,v,m=!r[0].fetching&&!r[0].error&&r[0].data.mod&&K(r);function b(h,u){if(h[0].fetching)return pe;if(!h[0].error)return me}let d=b(r),f=d&&d(r);const x=[ve,ge,he],$=[];function w(h,u){return h[0].fetching?0:h[0].error?1:2}n=w(r),p=$[n]=x[n](r);const i={c:function(){m&&m.c(),e=A(),s=T(),a=k("h1"),o=j(`New Version for
  `),f&&f.c(),t=T(),l=k("div"),c=k("section"),p.c(),this.h()},l:function(u){const S=Se("svelte-nx2zao",document.head);m&&m.l(S),e=A(),S.forEach(g),s=U(u),a=I(u,"H1",{class:!0});var N=V(a);o=F(N,`New Version for
  `),f&&f.l(N),N.forEach(g),t=U(u),l=I(u,"DIV",{class:!0});var O=V(l);c=I(O,"SECTION",{});var M=V(c);p.l(M),M.forEach(g),O.forEach(g),this.h()},h:function(){_(a,"class","text-4xl my-4 font-bold"),P(a,E,85,0,2175),P(c,E,95,2,2350),_(l,"class","card p-4"),P(l,E,94,0,2325)},m:function(u,S){m&&m.m(document.head,null),y(document.head,e),R(u,s,S),R(u,a,S),y(a,o),f&&f.m(a,null),R(u,t,S),R(u,l,S),y(l,c),$[n].m(c,null),v=!0},p:function(u,[S]){!u[0].fetching&&!u[0].error&&u[0].data.mod?m?(m.p(u,S),S&1&&B(m,1)):(m=K(u),m.c(),B(m,1),m.m(e.parentNode,e)):m&&(ne(),C(m,1,1,()=>{m=null}),te()),d===(d=b(u))&&f?f.p(u,S):(f&&f.d(1),f=d&&d(u),f&&(f.c(),f.m(a,null)));let N=n;n=w(u),n===N?$[n].p(u,S):(ne(),C($[N],1,1,()=>{$[N]=null}),te(),p=$[n],p?p.p(u,S):(p=$[n]=x[n](u),p.c()),B(p,1),p.m(c,null))},i:function(u){v||(B(m),B(p),v=!0)},o:function(u){C(m),C(p),v=!1},d:function(u){u&&(g(s),g(a),g(t),g(l)),m&&m.d(u),g(e),f&&f.d(),$[n].d()}};return D("SvelteRegisterBlock",{block:i,id:W.name,type:"component",source:"",ctx:r}),i}function Ne(r,e,s){let a,o,t,{$$slots:l={},$$scope:c}=e;xe("Page",l,[]);let{data:n}=e;const{modId:p}=n,v=X(),m=z("");H(m,"uploadStatus"),L(r,m,i=>s(1,o=i));const b=z(0);H(b,"uploadPercent"),L(r,b,i=>s(2,t=i));const d=z();d.subscribe(i=>{i&&(i.uploaded===i.total?(m.set("Processing..."),b.set(100)):(m.set(`Uploading: ${i.uploaded}/${i.total}`),b.set(i.uploaded/i.total*100)))});const f=Y(),x=J({query:re,client:v,variables:{mod:p}});H(x,"mod"),L(r,x,i=>s(0,a=i));const $=async i=>ae(i.file,a.data.mod.id,{changelog:i.changelog,stability:i.stability},d,v).then(h=>{f.trigger({message:"Version created",background:"variant-filled-success",timeout:5e3}),Z(ee+"/mod/"+p+"/version/"+h.version.id)}).catch(h=>{console.error(h),f.trigger({message:"Error creating version: "+h.message,background:"variant-filled-error",autohide:!1}),m.set("")});r.$$.on_mount.push(function(){n===void 0&&!("data"in e||r.$$.bound[r.$$.props.data])&&se.warn("<Page> was created without expected prop 'data'")});const w=["data"];return Object.keys(e).forEach(i=>{!~w.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&se.warn(`<Page> was created with unknown prop '${i}'`)}),r.$$set=i=>{"data"in i&&s(7,n=i.data)},r.$capture_state=()=>({getContextClient:X,queryStore:J,goto:Z,VersionForm:ue,GetModReferenceDocument:re,writable:z,chunkedUpload:ae,base:ee,MetaDescriptors:de,getToastStore:Y,data:n,modId:p,client:v,uploadStatus:m,uploadPercent:b,uploadState:d,toastStore:f,mod:x,onSubmit:$,$mod:a,$uploadStatus:o,$uploadPercent:t}),r.$inject_state=i=>{"data"in i&&s(7,n=i.data)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[a,o,t,m,b,x,$,n]}class Oe extends $e{constructor(e){super(e),we(this,e,Ne,W,be,{data:7}),D("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:W.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Oe as component,Be as universal};
//# sourceMappingURL=17.f4d8b3de.js.map
