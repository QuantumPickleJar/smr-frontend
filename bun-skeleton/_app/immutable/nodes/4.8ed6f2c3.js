import{S as It,i as Nt,d as U,s as Ot,v as At,F as yt,G as Vt,H as et,P as at,y as wt,I as Bt,J as rt,b as R,e as g,f as bt,K as qt,L as ct,j as p,k as j,g as $,h as M,M as z,N as I,m as x,O as ft,n as O,Q as r,r as q,t as J,q as Et,R as ut,u as Lt,x as zt,T as Mt,U as St,p as Tt,V as Ft,W as F,X as G,Y as X,Z as Gt}from"../chunks/vendor.d4382513.js";import{D as Dt,G as Ct}from"../chunks/graphql.fef59309.js";import{M as _t}from"../chunks/MetaDescriptors.df899d1d.js";import{p as st}from"../chunks/formatting.6f84ef8f.js";const y="src/routes/admin/sml-versions/+page.svelte";function kt(n,t,s){const e=n.slice();return e[15]=t[s],e}function nt(n){let t,s,e,o;function d(c){n[7](c)}let v={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};n[4]!==void 0&&(v.settings=n[4]),s=new at({props:v,$$inline:!0}),wt.push(()=>Bt(s,"settings",d)),s.$on("page",n[8]),s.$on("amount",n[9]);const u={c:function(){t=g("div"),rt(s.$$.fragment),this.h()},l:function(h){t=$(h,"DIV",{});var f=M(t);ct(s.$$.fragment,f),f.forEach(p),this.h()},h:function(){x(t,y,52,4,1340)},m:function(h,f){O(h,t,f),ft(s,t,null),o=!0},p:function(h,f){const V={};!e&&f&16&&(e=!0,V.settings=h[4],Mt(()=>e=!1)),s.$set(V)},i:function(h){o||(q(s.$$.fragment,h),o=!0)},o:function(h){J(s.$$.fragment,h),o=!1},d:function(h){h&&p(t),ut(s)}};return U("SvelteRegisterBlock",{block:u,id:nt.name,type:"if",source:"(45:2) {#if totalVersions}",ctx:n}),u}function Rt(n){let t,s,e,o,d="Version",v,u,c="Stability",h,f,V="Satisfactory Version",a,T,_="Bootstrap Version",D,m,A="Release Date",C,l,E="",H,B,i=St(n[3].data.getSMLVersions.sml_versions),b=[];for(let P=0;P<i.length;P+=1)b[P]=it(kt(n,i,P));const Z={c:function(){t=g("table"),s=g("thead"),e=g("tr"),o=g("th"),o.textContent=d,v=R(),u=g("th"),u.textContent=c,h=R(),f=g("th"),f.textContent=V,a=R(),T=g("th"),T.textContent=_,D=R(),m=g("th"),m.textContent=A,C=R(),l=g("th"),l.innerHTML=E,H=R(),B=g("tbody");for(let k=0;k<b.length;k+=1)b[k].c();this.h()},l:function(k){t=$(k,"TABLE",{class:!0});var N=M(t);s=$(N,"THEAD",{});var S=M(s);e=$(S,"TR",{});var L=M(e);o=$(L,"TH",{"data-svelte-h":!0}),z(o)!=="svelte-1mhdjxa"&&(o.textContent=d),v=j(L),u=$(L,"TH",{"data-svelte-h":!0}),z(u)!=="svelte-rpc5kf"&&(u.textContent=c),h=j(L),f=$(L,"TH",{"data-svelte-h":!0}),z(f)!=="svelte-1n7ymhw"&&(f.textContent=V),a=j(L),T=$(L,"TH",{"data-svelte-h":!0}),z(T)!=="svelte-138l9yc"&&(T.textContent=_),D=j(L),m=$(L,"TH",{"data-svelte-h":!0}),z(m)!=="svelte-pi2tux"&&(m.textContent=A),C=j(L),l=$(L,"TH",{"data-svelte-h":!0}),z(l)!=="svelte-qfgexu"&&(l.innerHTML=E),L.forEach(p),S.forEach(p),H=j(N),B=$(N,"TBODY",{});var K=M(B);for(let Q=0;Q<b.length;Q+=1)b[Q].l(K);K.forEach(p),N.forEach(p),this.h()},h:function(){x(o,y,73,10,1937),x(u,y,74,10,1964),x(f,y,75,10,1993),x(T,y,76,10,2033),x(m,y,77,10,2070),x(l,y,78,10,2102),x(e,y,72,8,1922),x(s,y,71,6,1906),x(B,y,81,6,2163),I(t,"class","max-w-full table table-hover"),x(t,y,70,4,1855)},m:function(k,N){O(k,t,N),r(t,s),r(s,e),r(e,o),r(e,v),r(e,u),r(e,h),r(e,f),r(e,a),r(e,T),r(e,D),r(e,m),r(e,C),r(e,l),r(t,H),r(t,B);for(let S=0;S<b.length;S+=1)b[S]&&b[S].m(B,null)},p:function(k,N){if(N&72){i=St(k[3].data.getSMLVersions.sml_versions);let S;for(S=0;S<i.length;S+=1){const L=kt(k,i,S);b[S]?b[S].p(L,N):(b[S]=it(L),b[S].c(),b[S].m(B,null))}for(;S<b.length;S+=1)b[S].d(1);b.length=i.length}},d:function(k){k&&p(t),Ft(b,k)}};return U("SvelteRegisterBlock",{block:Z,id:Rt.name,type:"else",source:"(63:2) {:else}",ctx:n}),Z}function jt(n){let t,s,e=n[3].error.message+"",o;const d={c:function(){t=g("section"),s=F("Oh no... "),o=F(e),this.h()},l:function(u){t=$(u,"SECTION",{class:!0});var c=M(t);s=G(c,"Oh no... "),o=G(c,e),c.forEach(p),this.h()},h:function(){I(t,"class","p-4"),x(t,y,68,4,1775)},m:function(u,c){O(u,t,c),r(t,s),r(t,o)},p:function(u,c){c&8&&e!==(e=u[3].error.message+"")&&X(o,e)},d:function(u){u&&p(t)}};return U("SvelteRegisterBlock",{block:d,id:jt.name,type:"if",source:"(61:28) ",ctx:n}),d}function Ht(n){let t,s="Loading...";const e={c:function(){t=g("section"),t.textContent=s,this.h()},l:function(d){t=$(d,"SECTION",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-1e06hs8"&&(t.textContent=s),this.h()},h:function(){I(t,"class","p-4"),x(t,y,66,4,1700)},m:function(d,v){O(d,t,v)},p:Lt,d:function(d){d&&p(t)}};return U("SvelteRegisterBlock",{block:e,id:Ht.name,type:"if",source:"(59:2) {#if $versions.fetching}",ctx:n}),e}function it(n){let t,s,e=n[15].version+"",o,d,v,u=n[15].stability+"",c,h,f,V=n[15].satisfactory_version+"",a,T,_,D=n[15].bootstrap_version+"",m,A,C,l=st(n[15].created_at)+"",E,H,B,i,b,Z="Delete",P,k,N,S,L,K,Q;function Pt(){return n[10](n[15])}const ht={c:function(){t=g("tr"),s=g("td"),o=F(e),d=R(),v=g("td"),c=F(u),h=R(),f=g("td"),a=F(V),T=R(),_=g("td"),m=F(D),A=R(),C=g("td"),E=F(l),H=R(),B=g("td"),i=g("div"),b=g("button"),b.textContent=Z,P=R(),k=g("a"),N=F("Edit"),L=R(),this.h()},l:function(Y){t=$(Y,"TR",{});var w=M(t);s=$(w,"TD",{});var mt=M(s);o=G(mt,e),mt.forEach(p),d=j(w),v=$(w,"TD",{});var dt=M(v);c=G(dt,u),dt.forEach(p),h=j(w),f=$(w,"TD",{});var vt=M(f);a=G(vt,V),vt.forEach(p),T=j(w),_=$(w,"TD",{});var pt=M(_);m=G(pt,D),pt.forEach(p),A=j(w),C=$(w,"TD",{});var gt=M(C);E=G(gt,l),gt.forEach(p),H=j(w),B=$(w,"TD",{class:!0});var $t=M(B);i=$($t,"DIV",{class:!0});var tt=M(i);b=$(tt,"BUTTON",{class:!0,"data-svelte-h":!0}),z(b)!=="svelte-1yzl0jm"&&(b.textContent=Z),P=j(tt),k=$(tt,"A",{class:!0,href:!0});var xt=M(k);N=G(xt,"Edit"),xt.forEach(p),tt.forEach(p),$t.forEach(p),L=j(w),w.forEach(p),this.h()},h:function(){x(s,y,84,12,2268),x(v,y,85,12,2307),x(f,y,86,12,2348),x(_,y,87,12,2400),x(C,y,88,12,2449),I(b,"class","btn btn-sm variant-ghost-primary"),x(b,y,91,16,2592),I(k,"class","btn btn-sm variant-ghost-primary"),I(k,"href",S=et+"/admin/sml-versions/"+n[15].id+"/edit"),x(k,y,93,16,2735),I(i,"class","grid grid-flow-col gap-4"),x(i,y,90,14,2537),I(B,"class","!p-2.5"),x(B,y,89,12,2503),x(t,y,83,10,2251)},m:function(Y,w){O(Y,t,w),r(t,s),r(s,o),r(t,d),r(t,v),r(v,c),r(t,h),r(t,f),r(f,a),r(t,T),r(t,_),r(_,m),r(t,A),r(t,C),r(C,E),r(t,H),r(t,B),r(B,i),r(i,b),r(i,P),r(i,k),r(k,N),r(t,L),K||(Q=Gt(b,"click",Pt,!1,!1,!1,!1),K=!0)},p:function(Y,w){n=Y,w&8&&e!==(e=n[15].version+"")&&X(o,e),w&8&&u!==(u=n[15].stability+"")&&X(c,u),w&8&&V!==(V=n[15].satisfactory_version+"")&&X(a,V),w&8&&D!==(D=n[15].bootstrap_version+"")&&X(m,D),w&8&&l!==(l=st(n[15].created_at)+"")&&X(E,l),w&8&&S!==(S=et+"/admin/sml-versions/"+n[15].id+"/edit")&&I(k,"href",S)},d:function(Y){Y&&p(t),K=!1,Q()}};return U("SvelteRegisterBlock",{block:ht,id:it.name,type:"each",source:"(76:8) {#each $versions.data.getSMLVersions.sml_versions as version}",ctx:n}),ht}function ot(n){let t,s,e,o,d;function v(h){n[11](h)}let u={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};n[4]!==void 0&&(u.settings=n[4]),e=new at({props:u,$$inline:!0}),wt.push(()=>Bt(e,"settings",v)),e.$on("page",n[12]),e.$on("amount",n[13]);const c={c:function(){t=g("div"),s=g("div"),rt(e.$$.fragment),this.h()},l:function(f){t=$(f,"DIV",{class:!0});var V=M(t);s=$(V,"DIV",{});var a=M(s);ct(e.$$.fragment,a),a.forEach(p),V.forEach(p),this.h()},h:function(){x(s,y,106,4,3052),I(t,"class","mt-5 ml-auto flex justify-end"),x(t,y,105,2,3004)},m:function(f,V){O(f,t,V),r(t,s),ft(e,s,null),d=!0},p:function(f,V){const a={};!o&&V&16&&(o=!0,a.settings=f[4],Mt(()=>o=!1)),e.$set(a)},i:function(f){d||(q(e.$$.fragment,f),d=!0)},o:function(f){J(e.$$.fragment,f),d=!1},d:function(f){f&&p(t),ut(e)}};return U("SvelteRegisterBlock",{block:c,id:ot.name,type:"if",source:"(98:0) {#if totalVersions}",ctx:n}),c}function lt(n){let t,s,e,o,d="New SML Version",v,u,c,h,f,V;t=new _t({props:{description:"SML Versions",title:"Admin: SML Versions"},$$inline:!0});let a=n[2]&&nt(n);function T(C,l){return C[3].fetching?Ht:C[3].error?jt:Rt}let _=T(n),D=_(n),m=n[2]&&ot(n);const A={c:function(){rt(t.$$.fragment),s=R(),e=g("div"),o=g("a"),o.textContent=d,v=R(),a&&a.c(),u=R(),c=g("div"),D.c(),h=R(),m&&m.c(),f=bt(),this.h()},l:function(l){const E=qt("svelte-1iwjzfb",document.head);ct(t.$$.fragment,E),E.forEach(p),s=j(l),e=$(l,"DIV",{class:!0});var H=M(e);o=$(H,"A",{class:!0,href:!0,"data-svelte-h":!0}),z(o)!=="svelte-1wztnx8"&&(o.textContent=d),v=j(H),a&&a.l(H),H.forEach(p),u=j(l),c=$(l,"DIV",{class:!0});var B=M(c);D.l(B),B.forEach(p),h=j(l),m&&m.l(l),f=bt(),this.h()},h:function(){I(o,"class","btn variant-ghost-primary"),I(o,"href",et+"/admin/sml-versions/new"),x(o,y,49,2,1219),I(e,"class","mb-5 ml-auto flex justify-between"),x(e,y,48,0,1169),I(c,"class","card"),x(c,y,64,0,1650)},m:function(l,E){ft(t,document.head,null),O(l,s,E),O(l,e,E),r(e,o),r(e,v),a&&a.m(e,null),O(l,u,E),O(l,c,E),D.m(c,null),O(l,h,E),m&&m.m(l,E),O(l,f,E),V=!0},p:function(l,[E]){l[2]?a?(a.p(l,E),E&4&&q(a,1)):(a=nt(l),a.c(),q(a,1),a.m(e,null)):a&&(Tt(),J(a,1,1,()=>{a=null}),Et()),_===(_=T(l))&&D?D.p(l,E):(D.d(1),D=_(l),D&&(D.c(),D.m(c,null))),l[2]?m?(m.p(l,E),E&4&&q(m,1)):(m=ot(l),m.c(),q(m,1),m.m(f.parentNode,f)):m&&(Tt(),J(m,1,1,()=>{m=null}),Et())},i:function(l){V||(q(t.$$.fragment,l),q(a),q(m),V=!0)},o:function(l){J(t.$$.fragment,l),J(a),J(m),V=!1},d:function(l){l&&(p(s),p(e),p(u),p(c),p(h),p(f)),ut(t),a&&a.d(),D.d(),m&&m.d(l)}};return U("SvelteRegisterBlock",{block:A,id:lt.name,type:"component",source:"",ctx:n}),A}function Ut(n,t,s){let e,o,d,v,u=Lt,c=()=>(u(),u=zt(e,i=>s(3,v=i)),e);n.$$.on_destroy.push(()=>u());let{$$slots:h={},$$scope:f}=t;At("Page",h,[]);const V=yt();let a=20,T=0;const _=i=>{V.mutation(Dt,{smlVersionID:i}).toPromise().then(()=>{e.pause(),e.resume()})},D=[];Object.keys(t).forEach(i=>{!~D.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)});function m(i){d=i,s(4,d),s(1,T),s(0,a),s(2,o),s(3,v)}const A=i=>s(1,T=i.detail),C=i=>s(0,a=i.detail),l=i=>_(i.id);function E(i){d=i,s(4,d),s(1,T),s(0,a),s(2,o),s(3,v)}const H=i=>s(1,T=i.detail),B=i=>s(0,a=i.detail);return n.$capture_state=()=>({DeleteSmlVersionDocument:Dt,GetSmlVersionsAdminDocument:Ct,getContextClient:yt,queryStore:Vt,base:et,MetaDescriptors:_t,prettyDate:st,Paginator:at,client:V,perPage:a,page:T,deleteVersion:_,totalVersions:o,paginationSettings:d,versions:e,$versions:v}),n.$inject_state=i=>{"perPage"in i&&s(0,a=i.perPage),"page"in i&&s(1,T=i.page),"totalVersions"in i&&s(2,o=i.totalVersions),"paginationSettings"in i&&s(4,d=i.paginationSettings),"versions"in i&&c(s(5,e=i.versions))},t&&"$$inject"in t&&n.$inject_state(t.$$inject),n.$$.update=()=>{n.$$.dirty&3&&c(s(5,e=Vt({query:Ct,client:V,variables:{filter:{offset:T*a,limit:a}}}))),n.$$.dirty&8&&s(2,o=v?.data?.getSMLVersions?.count),n.$$.dirty&7&&s(4,d={page:T,limit:a,size:o,amounts:[5,10,20,50,100]})},[a,T,o,v,d,e,_,m,A,C,l,E,H,B]}class Xt extends It{constructor(t){super(t),Nt(this,t,Ut,lt,Ot,{}),U("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:lt.name})}}export{Xt as component};
//# sourceMappingURL=4.8ed6f2c3.js.map
