import{aK as Y,S as ke,i as Se,d as j,s as Pe,bn as ce,r as Ie,T as Ee,v as Re,aJ as te,X as G,Y as K,Z as X,aM as ne,a_ as oe,bo as le,ao as Ve,k as O,a6 as M,x as P,L as N,a8 as q,bh as je,q as g,a9 as F,y as I,z as E,N as T,ab as U,ac as C,C as R,ad as y,l as S,ae as A,p as B,t as _,n as fe,ai as Be,aj as L,m as ue,O as H,P as z,av as re}from"../chunks/vendor.524e4217.js";import{T as de}from"../chunks/Toast.e9e1e2d2.js";import{V as me}from"../chunks/VersionForm.337117e5.js";import{z as Ne,F as Te,B as _e,H as Ce,I as ie}from"../chunks/graphql.cb6ec208.js";import{M as pe}from"../chunks/MetaDescriptors.502aaa7e.js";const De=async({params:r})=>({...r}),Ae=Object.freeze(Object.defineProperty({__proto__:null,load:De},Symbol.toStringTag,{value:"Module"})),se=async(r,e,n,i,o)=>{const s=Math.ceil(r.size/1e7),f=new Array(s).fill(0).map((p,d)=>d).reverse(),c=(p,d,b)=>o.mutation(Ce,{modId:e,versionId:b,part:d,file:p}).toPromise(),$=10;let m=0,u=0;const v=p=>{if(m>=$||!f.length)return;const d=f.pop(),b=d*1e7,x=r.slice(b,b+1e7);return m+=1,Promise.all([c(x,d+1,p).then(()=>(m-=1,i.set({total:s,uploaded:s-f.length-m}),v(p))).catch(w=>{if(console.error("Upload failed:",w),m-=1,f.push(d),u+=1,u<5)return v(p);throw new Error("Failed uploading after 5 attempts")}),v(p)])};return o.mutation(Ne,{modId:e}).toPromise().then(async p=>(i.set({total:s,uploaded:0}),await v(p.data.createVersion),p.data.createVersion)).then(p=>(console.log("Finalizing",{versionID:p}),o.mutation(Te,{modId:e,versionId:p,version:n}).toPromise().then(()=>new Promise((d,b)=>{let x=0,w=Y({query:_e,client:o,variables:{modId:e,versionId:p},requestPolicy:"network-only"});const h=setInterval(()=>{if(x==60)return clearInterval(h),b(new Error("Timed out waiting for mod processing"));w.pause(),w.resume(),x++},1e4),l=w.subscribe(a=>{if(!a.fetching){if(a.error){clearInterval(h),b(new Error(a.error.message)),setTimeout(l);return}a.data?.checkVersionUploadState?.version?.id&&(l(),clearInterval(h),d(a.data.checkVersionUploadState))}})})))).catch(p=>{throw console.error(p),p})},{console:ae}=Ve,V="src/routes/mod/[modId]/new-version/+page.svelte";function Z(r){let e,n;e=new pe({props:{description:"Creating a new version of mod "+r[2].data.mod.name,title:"New version of mod "+r[2].data.mod.name},$$inline:!0});const i={c:function(){q(e.$$.fragment)},l:function(t){U(e.$$.fragment,t)},m:function(t,s){A(e,t,s),n=!0},p:function(t,s){const f={};s&4&&(f.description="Creating a new version of mod "+t[2].data.mod.name),s&4&&(f.title="New version of mod "+t[2].data.mod.name),e.$set(f)},i:function(t){n||(B(e.$$.fragment,t),n=!0)},o:function(t){_(e.$$.fragment,t),n=!1},d:function(t){L(e,t)}};return j("SvelteRegisterBlock",{block:i,id:Z.name,type:"if",source:"(60:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:r}),i}function $e(r){let e=r[2].data.mod.name+"",n;const i={c:function(){n=N(e)},l:function(t){n=T(t,e)},m:function(t,s){S(t,n,s)},p:function(t,s){s&4&&e!==(e=t[2].data.mod.name+"")&&H(n,e)},d:function(t){t&&g(n)}};return j("SvelteRegisterBlock",{block:i,id:$e.name,type:"if",source:"(71:24) ",ctx:r}),i}function he(r){let e;const n={c:function(){e=N("...")},l:function(o){e=T(o,"...")},m:function(o,t){S(o,e,t)},p:z,d:function(o){o&&g(e)}};return j("SvelteRegisterBlock",{block:n,id:he.name,type:"if",source:"(69:2) {#if $mod.fetching}",ctx:r}),n}function ge(r){let e,n,i,o;e=new me({props:{onSubmit:r[8],modReference:r[2].data.mod.mod_reference},$$inline:!0});let t=r[3]&&Q(r);const s={c:function(){q(e.$$.fragment),n=M(),t&&t.c(),i=O()},l:function(c){U(e.$$.fragment,c),n=F(c),t&&t.l(c),i=O()},m:function(c,$){A(e,c,$),S(c,n,$),t&&t.m(c,$),S(c,i,$),o=!0},p:function(c,$){const m={};$&4&&(m.modReference=c[2].data.mod.mod_reference),e.$set(m),c[3]?t?t.p(c,$):(t=Q(c),t.c(),t.m(i.parentNode,i)):t&&(t.d(1),t=null)},i:function(c){o||(B(e.$$.fragment,c),o=!0)},o:function(c){_(e.$$.fragment,c),o=!1},d:function(c){L(e,c),c&&g(n),t&&t.d(c),c&&g(i)}};return j("SvelteRegisterBlock",{block:s,id:ge.name,type:"else",source:"(82:4) {:else}",ctx:r}),s}function ve(r){let e,n,i=r[2].error.message+"",o;const t={c:function(){e=P("p"),n=N("Oh no... "),o=N(i),this.h()},l:function(f){e=I(f,"P",{});var c=E(e);n=T(c,"Oh no... "),o=T(c,i),c.forEach(g),this.h()},h:function(){R(e,V,80,6,2376)},m:function(f,c){S(f,e,c),y(e,n),y(e,o)},p:function(f,c){c&4&&i!==(i=f[2].error.message+"")&&H(o,i)},i:z,o:z,d:function(f){f&&g(e)}};return j("SvelteRegisterBlock",{block:t,id:ve.name,type:"if",source:"(80:25) ",ctx:r}),t}function we(r){let e,n;const i={c:function(){e=P("p"),n=N("Loading..."),this.h()},l:function(t){e=I(t,"P",{});var s=E(e);n=T(s,"Loading..."),s.forEach(g),this.h()},h:function(){R(e,V,78,6,2326)},m:function(t,s){S(t,e,s),y(e,n)},p:z,i:z,o:z,d:function(t){t&&g(e)}};return j("SvelteRegisterBlock",{block:i,id:we.name,type:"if",source:"(78:4) {#if $mod.fetching}",ctx:r}),i}function Q(r){let e,n,i,o,t,s,f,c,$=r[4].toFixed(0)+"",m,u,v,p,d;const b={c:function(){e=P("div"),n=P("div"),i=P("div"),o=P("span"),t=N(r[3]),s=M(),f=P("div"),c=P("span"),m=N($),u=N("%"),v=M(),p=P("div"),d=P("div"),this.h()},l:function(w){e=I(w,"DIV",{class:!0});var h=E(e);n=I(h,"DIV",{class:!0});var l=E(n);i=I(l,"DIV",{});var a=E(i);o=I(a,"SPAN",{class:!0});var k=E(o);t=T(k,r[3]),k.forEach(g),a.forEach(g),s=F(l),f=I(l,"DIV",{class:!0});var D=E(f);c=I(D,"SPAN",{class:!0});var J=E(c);m=T(J,$),u=T(J,"%"),J.forEach(g),D.forEach(g),l.forEach(g),v=F(h),p=I(h,"DIV",{class:!0});var ee=E(p);d=I(ee,"DIV",{style:!0,class:!0}),E(d).forEach(g),ee.forEach(g),h.forEach(g),this.h()},h:function(){C(o,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),R(o,V,88,14,2659),R(i,V,87,12,2639),C(c,"class","text-xs font-semibold inline-block text-white"),R(c,V,94,14,2907),C(f,"class","text-right"),R(f,V,93,12,2868),C(n,"class","flex mb-2 items-center justify-between"),R(n,V,86,10,2574),re(d,"width",r[4].toFixed(0)+"%"),C(d,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),R(d,V,98,12,3133),C(p,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),R(p,V,97,10,3049),C(e,"class","relative pt-4"),R(e,V,85,8,2536)},m:function(w,h){S(w,e,h),y(e,n),y(n,i),y(i,o),y(o,t),y(n,s),y(n,f),y(f,c),y(c,m),y(c,u),y(e,v),y(e,p),y(p,d)},p:function(w,h){h&8&&H(t,w[3]),h&16&&$!==($=w[4].toFixed(0)+"")&&H(m,$),h&16&&re(d,"width",w[4].toFixed(0)+"%")},d:function(w){w&&g(e)}};return j("SvelteRegisterBlock",{block:b,id:Q.name,type:"if",source:"(85:6) {#if $uploadStatus}",ctx:r}),b}function be(r){let e,n,i,o;const t=[we,ve,ge],s=[];function f($,m){return $[2].fetching?0:$[2].error?1:2}e=f(r),n=s[e]=t[e](r);const c={c:function(){n.c(),i=O()},l:function(m){n.l(m),i=O()},m:function(m,u){s[e].m(m,u),S(m,i,u),o=!0},p:function(m,u){let v=e;e=f(m),e===v?s[e].p(m,u):(ue(),_(s[v],1,1,()=>{s[v]=null}),fe(),n=s[e],n?n.p(m,u):(n=s[e]=t[e](m),n.c()),B(n,1),n.m(i.parentNode,i))},i:function(m){o||(B(n),o=!0)},o:function(m){_(n),o=!1},d:function(m){s[e].d(m),m&&g(i)}};return j("SvelteRegisterBlock",{block:c,id:be.name,type:"slot",source:"(77:2) <Content>",ctx:r}),c}function xe(r){let e,n;e=new le({props:{$$slots:{default:[be]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){q(e.$$.fragment)},l:function(t){U(e.$$.fragment,t)},m:function(t,s){A(e,t,s),n=!0},p:function(t,s){const f={};s&16412&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i:function(t){n||(B(e.$$.fragment,t),n=!0)},o:function(t){_(e.$$.fragment,t),n=!1},d:function(t){L(e,t)}};return j("SvelteRegisterBlock",{block:i,id:xe.name,type:"slot",source:"(76:0) <Card>",ctx:r}),i}function ye(r){let e,n;const i={c:function(){e=P("span"),n=N(r[1]),this.h()},l:function(t){e=I(t,"SPAN",{});var s=E(e);n=T(s,r[1]),s.forEach(g),this.h()},h:function(){R(e,V,109,2,3429)},m:function(t,s){S(t,e,s),y(e,n)},p:function(t,s){s&2&&H(n,t[1])},d:function(t){t&&g(e)}};return j("SvelteRegisterBlock",{block:i,id:ye.name,type:"slot",source:"(109:0) <Toast bind:running={errorToast}>",ctx:r}),i}function W(r){let e,n,i,o,t,s,f,c,$,m,u=!r[2].fetching&&!r[2].error&&r[2].data.mod&&Z(r);function v(h,l){if(h[2].fetching)return he;if(!h[2].error)return $e}let p=v(r),d=p&&p(r);s=new ce({props:{$$slots:{default:[xe]},$$scope:{ctx:r}},$$inline:!0});function b(h){r[10](h)}let x={$$slots:{default:[ye]},$$scope:{ctx:r}};r[0]!==void 0&&(x.running=r[0]),c=new de({props:x,$$inline:!0}),Ie.push(()=>Ee(c,"running",b));const w={c:function(){u&&u.c(),e=O(),n=M(),i=P("h1"),o=N(`New Version for
  `),d&&d.c(),t=M(),q(s.$$.fragment),f=M(),q(c.$$.fragment),this.h()},l:function(l){const a=je("svelte-nx2zao",document.head);u&&u.l(a),e=O(),a.forEach(g),n=F(l),i=I(l,"H1",{class:!0});var k=E(i);o=T(k,`New Version for
  `),d&&d.l(k),k.forEach(g),t=F(l),U(s.$$.fragment,l),f=F(l),U(c.$$.fragment,l),this.h()},h:function(){C(i,"class","text-4xl my-4 font-bold"),R(i,V,66,0,2127)},m:function(l,a){u&&u.m(document.head,null),y(document.head,e),S(l,n,a),S(l,i,a),y(i,o),d&&d.m(i,null),S(l,t,a),A(s,l,a),S(l,f,a),A(c,l,a),m=!0},p:function(l,[a]){!l[2].fetching&&!l[2].error&&l[2].data.mod?u?(u.p(l,a),a&4&&B(u,1)):(u=Z(l),u.c(),B(u,1),u.m(e.parentNode,e)):u&&(ue(),_(u,1,1,()=>{u=null}),fe()),p===(p=v(l))&&d?d.p(l,a):(d&&d.d(1),d=p&&p(l),d&&(d.c(),d.m(i,null)));const k={};a&16412&&(k.$$scope={dirty:a,ctx:l}),s.$set(k);const D={};a&16386&&(D.$$scope={dirty:a,ctx:l}),!$&&a&1&&($=!0,D.running=l[0],Be(()=>$=!1)),c.$set(D)},i:function(l){m||(B(u),B(s.$$.fragment,l),B(c.$$.fragment,l),m=!0)},o:function(l){_(u),_(s.$$.fragment,l),_(c.$$.fragment,l),m=!1},d:function(l){u&&u.d(l),g(e),l&&g(n),l&&g(i),d&&d.d(),l&&g(t),L(s,l),l&&g(f),L(c,l)}};return j("SvelteRegisterBlock",{block:w,id:W.name,type:"component",source:"",ctx:r}),w}function Me(r,e,n){let i,o,t,{$$slots:s={},$$scope:f}=e;Re("Page",s,[]);let{data:c}=e;const{modId:$}=c,m=te(),u=G("");K(u,"uploadStatus"),X(r,u,a=>n(3,o=a));const v=G(0);K(v,"uploadPercent"),X(r,v,a=>n(4,t=a));const p=G();p.subscribe(a=>{a&&(a.uploaded===a.total?(u.set("Processing..."),v.set(100)):(u.set(`Uploading: ${a.uploaded}/${a.total}`),v.set(a.uploaded/a.total*100)))});let d="",b=!1;const x=Y({query:ie,client:m,variables:{mod:$}});K(x,"mod"),X(r,x,a=>n(2,i=a));const w=async a=>se(a.file,i.data.mod.id,{changelog:a.changelog,stability:a.stability},p,m).then(k=>{console.log({success:k}),ne(oe+"/mod/"+$+"/version/"+k.version.id)}).catch(k=>{console.error(k),n(1,d="Error creating version: "+k.message),n(0,b=!0),u.set("")});r.$$.on_mount.push(function(){c===void 0&&!("data"in e||r.$$.bound[r.$$.props.data])&&ae.warn("<Page> was created without expected prop 'data'")});const h=["data"];Object.keys(e).forEach(a=>{!~h.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&ae.warn(`<Page> was created with unknown prop '${a}'`)});function l(a){b=a,n(0,b)}return r.$$set=a=>{"data"in a&&n(9,c=a.data)},r.$capture_state=()=>({getContextClient:te,queryStore:Y,Toast:de,goto:ne,VersionForm:me,GetModReferenceDocument:ie,writable:G,chunkedUpload:se,base:oe,MetaDescriptors:pe,Card:ce,Content:le,data:c,modId:$,client:m,uploadStatus:u,uploadPercent:v,uploadState:p,errorMessage:d,errorToast:b,mod:x,onSubmit:w,$mod:i,$uploadStatus:o,$uploadPercent:t}),r.$inject_state=a=>{"data"in a&&n(9,c=a.data),"errorMessage"in a&&n(1,d=a.errorMessage),"errorToast"in a&&n(0,b=a.errorToast)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),r.$$.update=()=>{r.$$.dirty&1&&(b||n(1,d=""))},[b,d,i,o,t,u,v,x,w,c,l]}class Le extends ke{constructor(e){super(e),Se(this,e,Me,W,Pe,{data:9}),j("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:W.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Le as component,Ae as universal};
//# sourceMappingURL=17.46650d01.js.map
