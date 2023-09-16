import{S as Ht,i as Lt,d as L,s as Mt,v as qt,F as xt,G as yt,H as J,P as at,y as Bt,I as Pt,J as rt,b as N,e as V,f as Vt,K as zt,L as lt,j as g,k as O,g as E,h as B,N as P,m as T,O as ct,n as U,r as A,t as q,q as Et,R as ft,u as Rt,x as Ft,Q as m,T as It,U as Tt,p as bt,M as G,V as Gt,W as z,X as F,Y as W,Z as kt,a6 as Kt}from"../chunks/vendor.d4382513.js";import{e as Dt,f as wt,g as Ct}from"../chunks/graphql.fef59309.js";import{A as tt}from"../chunks/api.853e29e3.js";import"../chunks/user.03a96bbf.js";import{M as jt}from"../chunks/MetaDescriptors.df899d1d.js";import{p as et}from"../chunks/formatting.6f84ef8f.js";const b="src/routes/admin/unapproved-versions/+page.svelte";function St(s,t,e){const n=s.slice();return n[17]=t[e],n}function nt(s){let t,e,n,a,u;function f(v){s[8](v)}let d={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};s[4]!==void 0&&(d.settings=s[4]),n=new at({props:d,$$inline:!0}),Bt.push(()=>Pt(n,"settings",f)),n.$on("page",s[9]),n.$on("amount",s[10]);const o={c:function(){t=V("div"),e=V("div"),rt(n.$$.fragment),this.h()},l:function(c){t=E(c,"DIV",{class:!0});var p=B(t);e=E(p,"DIV",{});var r=B(e);lt(n.$$.fragment,r),r.forEach(g),p.forEach(g),this.h()},h:function(){T(e,b,61,4,1533),P(t,"class","mb-5 ml-auto flex justify-end"),T(t,b,60,2,1485)},m:function(c,p){U(c,t,p),m(t,e),ct(n,e,null),u=!0},p:function(c,p){const r={};!a&&p&16&&(a=!0,r.settings=c[4],It(()=>a=!1)),n.$set(r)},i:function(c){u||(A(n.$$.fragment,c),u=!0)},o:function(c){q(n.$$.fragment,c),u=!1},d:function(c){c&&g(t),ft(n)}};return L("SvelteRegisterBlock",{block:o,id:nt.name,type:"if",source:"(52:0) {#if totalVersions}",ctx:s}),o}function Nt(s){let t,e,n,a,u="Mod",f,d,o="Version",v,c,p="Release Date",r,y,x="",i,h,I=Tt(s[3].data.getUnapprovedVersions.versions),k=[];for(let R=0;R<I.length;R+=1)k[R]=st(St(s,I,R));const j={c:function(){t=V("table"),e=V("thead"),n=V("tr"),a=V("th"),a.textContent=u,f=N(),d=V("th"),d.textContent=o,v=N(),c=V("th"),c.textContent=p,r=N(),y=V("th"),y.innerHTML=x,i=N(),h=V("tbody");for(let w=0;w<k.length;w+=1)k[w].c();this.h()},l:function(w){t=E(w,"TABLE",{class:!0});var D=B(t);e=E(D,"THEAD",{});var $=B(e);n=E($,"TR",{});var C=B(n);a=E(C,"TH",{"data-svelte-h":!0}),G(a)!=="svelte-1hkc9fy"&&(a.textContent=u),f=O(C),d=E(C,"TH",{"data-svelte-h":!0}),G(d)!=="svelte-1mhdjxa"&&(d.textContent=o),v=O(C),c=E(C,"TH",{"data-svelte-h":!0}),G(c)!=="svelte-pi2tux"&&(c.textContent=p),r=O(C),y=E(C,"TH",{"data-svelte-h":!0}),G(y)!=="svelte-qfgexu"&&(y.innerHTML=x),C.forEach(g),$.forEach(g),i=O(D),h=E(D,"TBODY",{});var l=B(h);for(let _=0;_<k.length;_+=1)k[_].l(l);l.forEach(g),D.forEach(g),this.h()},h:function(){T(a,b,82,10,2130),T(d,b,83,10,2153),T(c,b,84,10,2180),T(y,b,85,10,2212),T(n,b,81,8,2115),T(e,b,80,6,2099),T(h,b,88,6,2273),P(t,"class","max-w-full table table-hover"),T(t,b,79,4,2048)},m:function(w,D){U(w,t,D),m(t,e),m(e,n),m(n,a),m(n,f),m(n,d),m(n,v),m(n,c),m(n,r),m(n,y),m(t,i),m(t,h);for(let $=0;$<k.length;$+=1)k[$]&&k[$].m(h,null)},p:function(w,D){if(D&200){I=Tt(w[3].data.getUnapprovedVersions.versions);let $;for($=0;$<I.length;$+=1){const C=St(w,I,$);k[$]?k[$].p(C,D):(k[$]=st(C),k[$].c(),k[$].m(h,null))}for(;$<k.length;$+=1)k[$].d(1);k.length=I.length}},d:function(w){w&&g(t),Gt(k,w)}};return L("SvelteRegisterBlock",{block:j,id:Nt.name,type:"else",source:"(71:2) {:else}",ctx:s}),j}function Ot(s){let t,e,n=s[3].error.message+"",a;const u={c:function(){t=V("section"),e=z("Oh no... "),a=z(n),this.h()},l:function(d){t=E(d,"SECTION",{class:!0});var o=B(t);e=F(o,"Oh no... "),a=F(o,n),o.forEach(g),this.h()},h:function(){P(t,"class","p-4"),T(t,b,77,4,1968)},m:function(d,o){U(d,t,o),m(t,e),m(t,a)},p:function(d,o){o&8&&n!==(n=d[3].error.message+"")&&W(a,n)},d:function(d){d&&g(t)}};return L("SvelteRegisterBlock",{block:u,id:Ot.name,type:"if",source:"(69:28) ",ctx:s}),u}function _t(s){let t,e="Loading...";const n={c:function(){t=V("section"),t.textContent=e,this.h()},l:function(u){t=E(u,"SECTION",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-1e06hs8"&&(t.textContent=e),this.h()},h:function(){P(t,"class","p-4"),T(t,b,75,4,1893)},m:function(u,f){U(u,t,f)},p:Rt,d:function(u){u&&g(t)}};return L("SvelteRegisterBlock",{block:n,id:_t.name,type:"if",source:"(67:2) {#if $versions.fetching}",ctx:s}),n}function st(s){let t,e,n=s[17].mod.name+"",a,u,f,d=s[17].version+"",o,v,c,p=et(s[17].created_at)+"",r,y,x,i,h,I="Approve",k,j,R="Deny",w,D,$,C,l,_,X,Q,Y,Z,ut;function Ut(){return s[11](s[17])}function At(){return s[12](s[17])}const dt={c:function(){t=V("tr"),e=V("td"),a=z(n),u=N(),f=V("td"),o=z(d),v=N(),c=V("td"),r=z(p),y=N(),x=V("td"),i=V("div"),h=V("button"),h.textContent=I,k=N(),j=V("button"),j.textContent=R,w=N(),D=V("a"),$=z("Download"),l=N(),_=V("a"),X=z("View"),Y=N(),this.h()},l:function(M){t=E(M,"TR",{});var S=B(t);e=E(S,"TD",{});var ht=B(e);a=F(ht,n),ht.forEach(g),u=O(S),f=E(S,"TD",{});var pt=B(f);o=F(pt,d),pt.forEach(g),v=O(S),c=E(S,"TD",{});var mt=B(c);r=F(mt,p),mt.forEach(g),y=O(S),x=E(S,"TD",{class:!0});var vt=B(x);i=E(vt,"DIV",{class:!0});var H=B(i);h=E(H,"BUTTON",{class:!0,"data-svelte-h":!0}),G(h)!=="svelte-1lzh6mz"&&(h.textContent=I),k=O(H),j=E(H,"BUTTON",{class:!0,"data-svelte-h":!0}),G(j)!=="svelte-o2ytp1"&&(j.textContent=R),w=O(H),D=E(H,"A",{class:!0,href:!0});var gt=B(D);$=F(gt,"Download"),gt.forEach(g),l=O(H),_=E(H,"A",{class:!0,href:!0});var $t=B(_);X=F($t,"View"),$t.forEach(g),H.forEach(g),vt.forEach(g),Y=O(S),S.forEach(g),this.h()},h:function(){T(e,b,91,12,2381),T(f,b,92,12,2421),T(c,b,93,12,2460),P(h,"class","btn variant-ghost-primary"),T(h,b,96,16,2603),P(j,"class","btn variant-ghost-primary"),T(j,b,97,16,2722),P(D,"class","btn variant-ghost-primary"),P(D,"href",C=tt+"/mod/"+s[17].mod_id+"/versions/"+s[17].id+"/download"),T(D,b,98,16,2835),P(_,"class","btn variant-ghost-primary"),P(_,"href",Q=J+"/mod/"+s[17].mod_id+"/version/"+s[17].id),T(_,b,103,16,3058),P(i,"class","grid grid-flow-col gap-4"),T(i,b,95,14,2548),P(x,"class","!p-2.5"),T(x,b,94,12,2514),T(t,b,90,10,2364)},m:function(M,S){U(M,t,S),m(t,e),m(e,a),m(t,u),m(t,f),m(f,o),m(t,v),m(t,c),m(c,r),m(t,y),m(t,x),m(x,i),m(i,h),m(i,k),m(i,j),m(i,w),m(i,D),m(D,$),m(i,l),m(i,_),m(_,X),m(t,Y),Z||(ut=[kt(h,"click",Ut,!1,!1,!1,!1),kt(j,"click",At,!1,!1,!1,!1)],Z=!0)},p:function(M,S){s=M,S&8&&n!==(n=s[17].mod.name+"")&&W(a,n),S&8&&d!==(d=s[17].version+"")&&W(o,d),S&8&&p!==(p=et(s[17].created_at)+"")&&W(r,p),S&8&&C!==(C=tt+"/mod/"+s[17].mod_id+"/versions/"+s[17].id+"/download")&&P(D,"href",C),S&8&&Q!==(Q=J+"/mod/"+s[17].mod_id+"/version/"+s[17].id)&&P(_,"href",Q)},d:function(M){M&&g(t),Z=!1,Kt(ut)}};return L("SvelteRegisterBlock",{block:dt,id:st.name,type:"each",source:"(82:8) {#each $versions.data.getUnapprovedVersions.versions as version}",ctx:s}),dt}function it(s){let t,e,n,a;function u(o){s[13](o)}let f={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};s[4]!==void 0&&(f.settings=s[4]),e=new at({props:f,$$inline:!0}),Bt.push(()=>Pt(e,"settings",u)),e.$on("page",s[14]),e.$on("amount",s[15]);const d={c:function(){t=V("div"),rt(e.$$.fragment),this.h()},l:function(v){t=E(v,"DIV",{class:!0});var c=B(t);lt(e.$$.fragment,c),c.forEach(g),this.h()},h:function(){P(t,"class","mt-5 ml-auto flex justify-end"),T(t,b,116,2,3343)},m:function(v,c){U(v,t,c),ct(e,t,null),a=!0},p:function(v,c){const p={};!n&&c&16&&(n=!0,p.settings=v[4],It(()=>n=!1)),e.$set(p)},i:function(v){a||(A(e.$$.fragment,v),a=!0)},o:function(v){q(e.$$.fragment,v),a=!1},d:function(v){v&&g(t),ft(e)}};return L("SvelteRegisterBlock",{block:d,id:it.name,type:"if",source:"(108:0) {#if totalVersions}",ctx:s}),d}function ot(s){let t,e,n,a,u,f,d;t=new jt({props:{description:"Unapproved mod versions",title:"Admin: Unapproved Versions"},$$inline:!0});let o=s[2]&&nt(s);function v(x,i){return x[3].fetching?_t:x[3].error?Ot:Nt}let c=v(s),p=c(s),r=s[2]&&it(s);const y={c:function(){rt(t.$$.fragment),e=N(),o&&o.c(),n=N(),a=V("div"),p.c(),u=N(),r&&r.c(),f=Vt(),this.h()},l:function(i){const h=zt("svelte-c87g9p",document.head);lt(t.$$.fragment,h),h.forEach(g),e=O(i),o&&o.l(i),n=O(i),a=E(i,"DIV",{class:!0});var I=B(a);p.l(I),I.forEach(g),u=O(i),r&&r.l(i),f=Vt(),this.h()},h:function(){P(a,"class","card"),T(a,b,73,0,1843)},m:function(i,h){ct(t,document.head,null),U(i,e,h),o&&o.m(i,h),U(i,n,h),U(i,a,h),p.m(a,null),U(i,u,h),r&&r.m(i,h),U(i,f,h),d=!0},p:function(i,[h]){i[2]?o?(o.p(i,h),h&4&&A(o,1)):(o=nt(i),o.c(),A(o,1),o.m(n.parentNode,n)):o&&(bt(),q(o,1,1,()=>{o=null}),Et()),c===(c=v(i))&&p?p.p(i,h):(p.d(1),p=c(i),p&&(p.c(),p.m(a,null))),i[2]?r?(r.p(i,h),h&4&&A(r,1)):(r=it(i),r.c(),A(r,1),r.m(f.parentNode,f)):r&&(bt(),q(r,1,1,()=>{r=null}),Et())},i:function(i){d||(A(t.$$.fragment,i),A(o),A(r),d=!0)},o:function(i){q(t.$$.fragment,i),q(o),q(r),d=!1},d:function(i){i&&(g(e),g(n),g(a),g(u),g(f)),ft(t),o&&o.d(i),p.d(),r&&r.d(i)}};return L("SvelteRegisterBlock",{block:y,id:ot.name,type:"component",source:"",ctx:s}),y}function Qt(s,t,e){let n,a,u,f,d=Rt,o=()=>(d(),d=Ft(n,l=>e(3,f=l)),n);s.$$.on_destroy.push(()=>d());let{$$slots:v={},$$scope:c}=t;qt("Page",v,[]);const p=xt();let r=20,y=1;const x=l=>{p.mutation(Dt,{versionId:l}).toPromise().then(()=>{n.pause(),n.resume()})},i=l=>{p.mutation(wt,{versionId:l}).toPromise().then(()=>{n.pause(),n.resume()})},h=[];Object.keys(t).forEach(l=>{!~h.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Page> was created with unknown prop '${l}'`)});function I(l){u=l,e(4,u),e(1,y),e(0,r),e(2,a),e(3,f)}const k=l=>e(1,y=l.detail),j=l=>e(0,r=l.detail),R=l=>x(l.id),w=l=>i(l.id);function D(l){u=l,e(4,u),e(1,y),e(0,r),e(2,a),e(3,f)}const $=l=>e(1,y=l.detail),C=l=>e(0,r=l.detail);return s.$capture_state=()=>({ApproveVersionDocument:Dt,DenyVersionDocument:wt,GetUnapprovedVersionsDocument:Ct,getContextClient:xt,queryStore:yt,API_REST:tt,base:J,MetaDescriptors:jt,prettyDate:et,Paginator:at,client:p,perPage:r,page:y,approveVersion:x,denyVersion:i,totalVersions:a,paginationSettings:u,versions:n,$versions:f}),s.$inject_state=l=>{"perPage"in l&&e(0,r=l.perPage),"page"in l&&e(1,y=l.page),"totalVersions"in l&&e(2,a=l.totalVersions),"paginationSettings"in l&&e(4,u=l.paginationSettings),"versions"in l&&o(e(5,n=l.versions))},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&3&&o(e(5,n=yt({query:Ct,client:p,variables:{filter:{offset:(y-1)*r,limit:r}}}))),s.$$.dirty&8&&e(2,a=f?.data?.getUnapprovedVersions?.count),s.$$.dirty&7&&e(4,u={page:y,limit:r,size:a,amounts:[5,10,20,50,100]})},[r,y,a,f,u,n,x,i,I,k,j,R,w,D,$,C]}class ee extends Ht{constructor(t){super(t),Lt(this,t,Qt,ot,Mt,{}),L("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:ot.name})}}export{ee as component};
//# sourceMappingURL=9.941c098c.js.map
