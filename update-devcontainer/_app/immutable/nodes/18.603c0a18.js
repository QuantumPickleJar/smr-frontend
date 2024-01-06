import{G as Yt,S as vt,i as $t,s as wt,d as L,a7 as kt,v as bt,e as p,g,h as V,j as d,N as E,m,n as z,Q as a,a8 as Zt,u as B,a9 as en,aa as tn,ak as yt,a1 as st,b as N,W as S,M as ce,k as P,X as I,Y as Q,x as nn,a2 as Et,F as St,_ as It,ap as Nt,$ as nt,H as _e,ah as Ot,a0 as on,f as He,K as sn,r as ae,t as fe,q as Pt,J as Ee,L as Se,O as Ie,R as Ne,p as Dt,Z as rt,a6 as rn,U as Rt,l as an,ab as ln,V as cn}from"../chunks/vendor.222e00a9.js";import{r as fn,B as Ct}from"../chunks/graphql.80ff4abf.js";import{l as un}from"../chunks/gql.ff9241aa.js";import{m as at}from"../chunks/markdown.40312aff.js";import{p as it,a as lt,b as ct,c as ft}from"../chunks/formatting.c598e8b5.js";import{M as Tt}from"../chunks/MetaDescriptors.62637ae5.js";import{A as Je}from"../chunks/api.853e29e3.js";import{u as ot}from"../chunks/user.f98c1746.js";import{i as _t}from"../chunks/launcher.6625cbc9.js";import{V as jt,a as Mt}from"../chunks/VersionDependenciesGrid.6c6faeb7.js";import{P as qt}from"../chunks/Page404.d2075540.js";const dn=async({params:t,parent:e})=>({...t,...await un({version:Yt({query:fn,client:(await e()).client,variables:{version:t.versionId}})})}),In=Object.freeze(Object.defineProperty({__proto__:null,load:dn},Symbol.toStringTag,{value:"Module"})),Fe="src/lib/components/versions/VersionDescription.svelte";function Ut(t){const e={c:B,l:B,m:B,p:B,d:B};return L("SvelteRegisterBlock",{block:e,id:Ut.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function Gt(t){let e,r,n=t[1]+"";const s={c:function(){e=p("p"),r=new en(!1),this.h()},l:function(u){e=g(u,"P",{});var i=V(e);r=tn(i,!1),i.forEach(d),this.h()},h:function(){r.a=null,m(e,Fe,11,8,273)},m:function(u,i){z(u,e,i),r.m(n,e)},p:function(u,i){i&1&&n!==(n=u[1]+"")&&r.p(n)},d:function(u){u&&d(e)}};return L("SvelteRegisterBlock",{block:s,id:Gt.name,type:"then",source:"(8:57)          <!-- eslint-disable -->         <p>{@html changelogRendered}",ctx:t}),s}function zt(t){const e={c:B,l:B,m:B,p:B,d:B};return L("SvelteRegisterBlock",{block:e,id:zt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function ut(t){let e,r,n,s,o={ctx:t,current:null,token:null,hasCatch:!1,pending:zt,then:Gt,catch:Ut,value:1};kt(s=at(t[0]),o);const u={c:function(){e=p("div"),r=p("section"),n=p("div"),o.block.c(),this.h()},l:function(l){e=g(l,"DIV",{class:!0});var c=V(e);r=g(c,"SECTION",{});var f=V(r);n=g(f,"DIV",{class:!0});var v=V(n);o.block.l(v),v.forEach(d),f.forEach(d),c.forEach(d),this.h()},h:function(){E(n,"class","markdown-content"),m(n,Fe,8,4,144),m(r,Fe,7,2,130),E(e,"class","h-fit card p-4"),m(e,Fe,6,0,99)},m:function(l,c){z(l,e,c),a(e,r),a(r,n),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null},p:function(l,[c]){t=l,o.ctx=t,c&1&&s!==(s=at(t[0]))&&kt(s,o)||Zt(o,t,c)},i:B,o:B,d:function(l){l&&d(e),o.block.d(),o.token=null,o=null}};return L("SvelteRegisterBlock",{block:u,id:ut.name,type:"component",source:"",ctx:t}),u}function hn(t,e,r){let{$$slots:n={},$$scope:s}=e;bt("VersionDescription",n,[]);let{changelog:o}=e;t.$$.on_mount.push(function(){o===void 0&&!("changelog"in e||t.$$.bound[t.$$.props.changelog])&&console.warn("<VersionDescription> was created without expected prop 'changelog'")});const u=["changelog"];return Object.keys(e).forEach(i=>{!~u.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<VersionDescription> was created with unknown prop '${i}'`)}),t.$$set=i=>{"changelog"in i&&r(0,o=i.changelog)},t.$capture_state=()=>({markdown:at,changelog:o}),t.$inject_state=i=>{"changelog"in i&&r(0,o=i.changelog)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o]}class Lt extends vt{constructor(e){super(e),$t(this,e,hn,ut,wt,{changelog:0}),L("SvelteRegisterComponent",{component:this,tagName:"VersionDescription",options:e,id:ut.name})}get changelog(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set changelog(e){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const O="src/lib/components/versions/VersionInfo.svelte";function dt(t){let e,r,n,s,o="Info",u,i,l,c=t[2]("entry.created-at")+"",f,v,x,h=it(t[0].created_at)+"",$,q,A,b,R,y=t[2]("downloads")+"",_,w,ie,ue=lt(t[0].downloads)+"",Y,$e,we,U,H,be,F=t[2]("version")+"",Z,Ve,ne,de=t[0].sml_version+"",ee,oe,xe,se,C,ge=t[2]("stability")+"",he,W,ye,X=t[0].stability+"",k,T,re,K,j,te=t[2]("size")+"",pe,me,le,Pe=ct(t[0].size)+"",Be,Ae,Ke,ve,ke,De=t[2]("hash")+"",Oe,Qe,We,Re=t[0].hash+"",Te;const Vt={c:function(){e=p("div"),r=p("section"),n=p("div"),s=p("h3"),s.textContent=o,u=N(),i=p("span"),l=p("strong"),f=S(c),v=S(":"),x=N(),$=S(h),q=p("br"),A=N(),b=p("span"),R=p("strong"),_=S(y),w=S(":"),ie=N(),Y=S(ue),$e=p("br"),we=N(),U=p("span"),H=p("strong"),be=S("SML "),Z=S(F),Ve=S(":"),ne=N(),ee=S(de),oe=p("br"),xe=N(),se=p("span"),C=p("strong"),he=S(ge),W=S(":"),ye=N(),k=S(X),T=p("br"),re=N(),K=p("span"),j=p("strong"),pe=S(te),me=S(":"),le=N(),Be=S(Pe),Ae=p("br"),Ke=N(),ve=p("span"),ke=p("strong"),Oe=S(De),Qe=S(":"),We=N(),Te=S(Re),this.h()},l:function(G){e=g(G,"DIV",{class:!0});var J=V(e);r=g(J,"SECTION",{});var xt=V(r);n=g(xt,"DIV",{class:!0});var M=V(n);s=g(M,"H3",{class:!0,"data-svelte-h":!0}),ce(s)!=="svelte-1cfi42f"&&(s.textContent=o),u=P(M),i=g(M,"SPAN",{});var je=V(i);l=g(je,"STRONG",{});var Xe=V(l);f=I(Xe,c),v=I(Xe,":"),Xe.forEach(d),x=P(je),$=I(je,h),je.forEach(d),q=g(M,"BR",{}),A=P(M),b=g(M,"SPAN",{});var Me=V(b);R=g(Me,"STRONG",{});var Ye=V(R);_=I(Ye,y),w=I(Ye,":"),Ye.forEach(d),ie=P(Me),Y=I(Me,ue),Me.forEach(d),$e=g(M,"BR",{}),we=P(M),U=g(M,"SPAN",{});var qe=V(U);H=g(qe,"STRONG",{});var Ue=V(H);be=I(Ue,"SML "),Z=I(Ue,F),Ve=I(Ue,":"),Ue.forEach(d),ne=P(qe),ee=I(qe,de),qe.forEach(d),oe=g(M,"BR",{}),xe=P(M),se=g(M,"SPAN",{});var Ge=V(se);C=g(Ge,"STRONG",{});var Ze=V(C);he=I(Ze,ge),W=I(Ze,":"),Ze.forEach(d),ye=P(Ge),k=I(Ge,X),Ge.forEach(d),T=g(M,"BR",{}),re=P(M),K=g(M,"SPAN",{});var ze=V(K);j=g(ze,"STRONG",{});var et=V(j);pe=I(et,te),me=I(et,":"),et.forEach(d),le=P(ze),Be=I(ze,Pe),ze.forEach(d),Ae=g(M,"BR",{}),Ke=P(M),ve=g(M,"SPAN",{});var Le=V(ve);ke=g(Le,"STRONG",{});var tt=V(ke);Oe=I(tt,De),Qe=I(tt,":"),tt.forEach(d),We=P(Le),Te=I(Le,Re),Le.forEach(d),M.forEach(d),xt.forEach(d),J.forEach(d),this.h()},h:function(){E(s,"class","text-2xl my-4 font-bold"),m(s,O,13,6,291),m(l,O,14,12,349),m(i,O,14,6,343),m(q,O,14,94,431),m(R,O,15,12,450),m(b,O,15,6,444),m($e,O,15,88,526),m(H,O,16,12,545),m(U,O,16,6,539),m(oe,O,16,78,611),m(C,O,17,12,630),m(se,O,17,6,624),m(T,O,17,74,692),m(j,O,18,12,711),m(K,O,18,6,705),m(Ae,O,18,77,776),m(ke,O,19,12,795),m(ve,O,19,6,789),E(n,"class","text-lg break-words"),m(n,O,12,4,251),m(r,O,11,2,237),E(e,"class","card p-4"),m(e,O,10,0,212)},m:function(G,J){z(G,e,J),a(e,r),a(r,n),a(n,s),a(n,u),a(n,i),a(i,l),a(l,f),a(l,v),a(i,x),a(i,$),a(n,q),a(n,A),a(n,b),a(b,R),a(R,_),a(R,w),a(b,ie),a(b,Y),a(n,$e),a(n,we),a(n,U),a(U,H),a(H,be),a(H,Z),a(H,Ve),a(U,ne),a(U,ee),a(n,oe),a(n,xe),a(n,se),a(se,C),a(C,he),a(C,W),a(se,ye),a(se,k),a(n,T),a(n,re),a(n,K),a(K,j),a(j,pe),a(j,me),a(K,le),a(K,Be),a(n,Ae),a(n,Ke),a(n,ve),a(ve,ke),a(ke,Oe),a(ke,Qe),a(ve,We),a(ve,Te)},p:function(G,[J]){J&4&&c!==(c=G[2]("entry.created-at")+"")&&Q(f,c),J&1&&h!==(h=it(G[0].created_at)+"")&&Q($,h),J&4&&y!==(y=G[2]("downloads")+"")&&Q(_,y),J&1&&ue!==(ue=lt(G[0].downloads)+"")&&Q(Y,ue),J&4&&F!==(F=G[2]("version")+"")&&Q(Z,F),J&1&&de!==(de=G[0].sml_version+"")&&Q(ee,de),J&4&&ge!==(ge=G[2]("stability")+"")&&Q(he,ge),J&1&&X!==(X=G[0].stability+"")&&Q(k,X),J&4&&te!==(te=G[2]("size")+"")&&Q(pe,te),J&1&&Pe!==(Pe=ct(G[0].size)+"")&&Q(Be,Pe),J&4&&De!==(De=G[2]("hash")+"")&&Q(Oe,De),J&1&&Re!==(Re=G[0].hash+"")&&Q(Te,Re)},i:B,o:B,d:function(G){G&&d(e)}};return L("SvelteRegisterBlock",{block:Vt,id:dt.name,type:"component",source:"",ctx:t}),Vt}function pn(t,e,r){let n,s=B,o=()=>(s(),s=nn(c,v=>r(2,n=v)),c);t.$$.on_destroy.push(()=>s());let{$$slots:u={},$$scope:i}=e;bt("VersionInfo",u,[]);let{version:l}=e;const{t:c}=yt();st(c,"t"),o(),t.$$.on_mount.push(function(){l===void 0&&!("version"in e||t.$$.bound[t.$$.props.version])&&console.warn("<VersionInfo> was created without expected prop 'version'")});const f=["version"];return Object.keys(e).forEach(v=>{!~f.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<VersionInfo> was created with unknown prop '${v}'`)}),t.$$set=v=>{"version"in v&&r(0,l=v.version)},t.$capture_state=()=>({prettyBytes:ct,prettyDate:it,prettyNumber:lt,getTranslate:yt,version:l,t:c,$t:n}),t.$inject_state=v=>{"version"in v&&r(0,l=v.version)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[l,c,n]}class Ht extends vt{constructor(e){super(e),$t(this,e,pn,dt,wt,{version:0,t:1}),L("SvelteRegisterComponent",{component:this,tagName:"VersionInfo",options:e,id:dt.name})}get version(){throw new Error("<VersionInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set version(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Bt}=on,D="src/routes/mod/[modId]/version/[versionId]/+page.svelte";function At(t,e,r){const n=t.slice();return n[15]=e[r],n}function ht(t){let e,r;e=new Tt({props:{description:"Information for mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version,title:"Mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version},$$inline:!0});const n={c:function(){Ee(e.$$.fragment)},l:function(o){Se(e.$$.fragment,o)},m:function(o,u){Ie(e,o,u),r=!0},p:function(o,u){const i={};u&1&&(i.description="Information for mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version),u&1&&(i.title="Mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version),e.$set(i)},i:function(o){r||(ae(e.$$.fragment,o),r=!0)},o:function(o){fe(e.$$.fragment,o),r=!1},d:function(o){Ne(e,o)}};return L("SvelteRegisterBlock",{block:n,id:ht.name,type:"if",source:"(60:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:t}),n}function Ft(t){let e,r;e=new qt({$$inline:!0});const n={c:function(){Ee(e.$$.fragment)},l:function(o){Se(e.$$.fragment,o)},m:function(o,u){Ie(e,o,u),r=!0},p:B,i:function(o){r||(ae(e.$$.fragment,o),r=!0)},o:function(o){fe(e.$$.fragment,o),r=!1},d:function(o){Ne(e,o)}};return L("SvelteRegisterBlock",{block:n,id:Ft.name,type:"else",source:"(144:0) {:else}",ctx:t}),n}function Jt(t){let e,r,n,s=t[0].data.getVersion.mod.name+"",o,u,i=t[0].data.getVersion.version+"",l,c,f,v,x,h,$,q="Install",A,b,R="download",y,_,w,ie="Mod",ue,Y,$e="extension",we,U,H,be,F,Z,Ve,ne,de,ee,oe,xe,se,C=t[1]&&pt(t);function ge(X,k){return X[0].data.getVersion.targets.length!=0?Xt:Wt}let he=ge(t),W=he(t);H=new Lt({props:{changelog:t[0].data.getVersion.changelog},$$inline:!0}),Z=new Ht({props:{version:t[0].data.getVersion},$$inline:!0}),ne=new jt({props:{targets:t[0].data.getVersion.targets},$$inline:!0}),ee=new Mt({props:{dependencies:t[0].data.getVersion.dependencies},$$inline:!0});const ye={c:function(){e=p("div"),r=p("div"),n=p("h1"),o=S(s),u=S(`
        Version `),l=S(i),c=N(),f=p("div"),C&&C.c(),v=N(),W.c(),x=N(),h=p("button"),$=p("span"),$.textContent=q,A=N(),b=p("span"),b.textContent=R,y=N(),_=p("a"),w=p("span"),w.textContent=ie,ue=N(),Y=p("span"),Y.textContent=$e,we=N(),U=p("div"),Ee(H.$$.fragment),be=N(),F=p("div"),Ee(Z.$$.fragment),Ve=N(),Ee(ne.$$.fragment),de=N(),Ee(ee.$$.fragment),this.h()},l:function(k){e=g(k,"DIV",{class:!0});var T=V(e);r=g(T,"DIV",{class:!0});var re=V(r);n=g(re,"H1",{class:!0});var K=V(n);o=I(K,s),u=I(K,`
        Version `),l=I(K,i),K.forEach(d),c=P(re),f=g(re,"DIV",{class:!0});var j=V(f);C&&C.l(j),v=P(j),W.l(j),x=P(j),h=g(j,"BUTTON",{class:!0});var te=V(h);$=g(te,"SPAN",{"data-svelte-h":!0}),ce($)!=="svelte-1bbhnfr"&&($.textContent=q),A=P(te),b=g(te,"SPAN",{class:!0,"data-svelte-h":!0}),ce(b)!=="svelte-rqt9z7"&&(b.textContent=R),te.forEach(d),y=P(j),_=g(j,"A",{class:!0,href:!0});var pe=V(_);w=g(pe,"SPAN",{"data-svelte-h":!0}),ce(w)!=="svelte-y2sqc2"&&(w.textContent=ie),ue=P(pe),Y=g(pe,"SPAN",{class:!0,"data-svelte-h":!0}),ce(Y)!=="svelte-y4psqu"&&(Y.textContent=$e),pe.forEach(d),j.forEach(d),re.forEach(d),we=P(T),U=g(T,"DIV",{class:!0});var me=V(U);Se(H.$$.fragment,me),be=P(me),F=g(me,"DIV",{class:!0});var le=V(F);Se(Z.$$.fragment,le),Ve=P(le),Se(ne.$$.fragment,le),de=P(le),Se(ee.$$.fragment,le),le.forEach(d),me.forEach(d),T.forEach(d),this.h()},h:function(){E(n,"class","text-4xl font-bold"),m(n,D,82,6,2821),m($,D,133,10,4878),E(b,"class","material-icons"),m(b,D,134,10,4909),E(h,"class","btn variant-ghost-primary"),m(h,D,130,8,4733),m(w,D,138,10,5059),E(Y,"class","material-icons"),m(Y,D,139,10,5086),E(_,"class","btn variant-ghost-primary"),E(_,"href",_e+"/mod/"+t[2]),m(_,D,137,8,4981),E(f,"class","grid grid-flow-col gap-4"),m(f,D,87,6,2967),E(r,"class","flex flex-wrap h-auto justify-between items-center"),m(r,D,81,4,2750),E(F,"class","grid grid-cols-1 auto-rows-min gap-8"),m(F,D,145,6,5307),E(U,"class","grid grid-auto-max auto-cols-fr gap-4"),m(U,D,143,4,5173),E(e,"class","grid gap-6 xlx:grid-flow-row"),m(e,D,80,2,2703)},m:function(k,T){z(k,e,T),a(e,r),a(r,n),a(n,o),a(n,u),a(n,l),a(r,c),a(r,f),C&&C.m(f,null),a(f,v),W.m(f,null),a(f,x),a(f,h),a(h,$),a(h,A),a(h,b),a(f,y),a(f,_),a(_,w),a(_,ue),a(_,Y),a(e,we),a(e,U),Ie(H,U,null),a(U,be),a(U,F),Ie(Z,F,null),a(F,Ve),Ie(ne,F,null),a(F,de),Ie(ee,F,null),oe=!0,xe||(se=rt(h,"click",t[11],!1,!1,!1,!1),xe=!0)},p:function(k,T){(!oe||T&1)&&s!==(s=k[0].data.getVersion.mod.name+"")&&Q(o,s),(!oe||T&1)&&i!==(i=k[0].data.getVersion.version+"")&&Q(l,i),k[1]?C?C.p(k,T):(C=pt(k),C.c(),C.m(f,v)):C&&(C.d(1),C=null),he===(he=ge(k))&&W?W.p(k,T):(W.d(1),W=he(k),W&&(W.c(),W.m(f,x)));const re={};T&1&&(re.changelog=k[0].data.getVersion.changelog),H.$set(re);const K={};T&1&&(K.version=k[0].data.getVersion),Z.$set(K);const j={};T&1&&(j.targets=k[0].data.getVersion.targets),ne.$set(j);const te={};T&1&&(te.dependencies=k[0].data.getVersion.dependencies),ee.$set(te)},i:function(k){oe||(ae(H.$$.fragment,k),ae(Z.$$.fragment,k),ae(ne.$$.fragment,k),ae(ee.$$.fragment,k),oe=!0)},o:function(k){fe(H.$$.fragment,k),fe(Z.$$.fragment,k),fe(ne.$$.fragment,k),fe(ee.$$.fragment,k),oe=!1},d:function(k){k&&d(e),C&&C.d(),W.d(),Ne(H),Ne(Z),Ne(ne),Ne(ee),xe=!1,se()}};return L("SvelteRegisterBlock",{block:ye,id:Jt.name,type:"if",source:"(71:35) ",ctx:t}),ye}function Kt(t){let e,r,n=t[0].error.message+"",s;const o={c:function(){e=p("p"),r=S("Oh no... "),s=S(n),this.h()},l:function(i){e=g(i,"P",{});var l=V(e);r=I(l,"Oh no... "),s=I(l,n),l.forEach(d),this.h()},h:function(){m(e,D,78,2,2624)},m:function(i,l){z(i,e,l),a(e,r),a(e,s)},p:function(i,l){l&1&&n!==(n=i[0].error.message+"")&&Q(s,n)},i:B,o:B,d:function(i){i&&d(e)}};return L("SvelteRegisterBlock",{block:o,id:Kt.name,type:"if",source:"(69:25) ",ctx:t}),o}function Qt(t){let e,r="Loading...";const n={c:function(){e=p("p"),e.textContent=r,this.h()},l:function(o){e=g(o,"P",{"data-svelte-h":!0}),ce(e)!=="svelte-qdsr2u"&&(e.textContent=r),this.h()},h:function(){m(e,D,76,2,2578)},m:function(o,u){z(o,e,u)},p:B,i:B,o:B,d:function(o){o&&d(e)}};return L("SvelteRegisterBlock",{block:n,id:Qt.name,type:"if",source:"(67:0) {#if $version.fetching}",ctx:t}),n}function pt(t){let e,r="Edit",n,s,o="Delete",u,i;const l={c:function(){e=p("button"),e.textContent=r,n=N(),s=p("button"),s.textContent=o,this.h()},l:function(f){e=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),ce(e)!=="svelte-53n07s"&&(e.textContent=r),n=P(f),s=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),ce(s)!=="svelte-tfawqf"&&(s.textContent=o),this.h()},h:function(){E(e,"class","btn variant-ghost-primary"),m(e,D,89,10,3042),E(s,"class","btn variant-ghost-primary"),m(s,D,94,10,3238)},m:function(f,v){z(f,e,v),z(f,n,v),z(f,s,v),u||(i=[rt(e,"click",t[9],!1,!1,!1,!1),rt(s,"click",t[10],!1,!1,!1,!1)],u=!0)},p:B,d:function(f){f&&(d(e),d(n),d(s)),u=!1,rn(i)}};return L("SvelteRegisterBlock",{block:l,id:pt.name,type:"if",source:"(80:8) {#if canUserEdit}",ctx:t}),l}function Wt(t){let e,r,n,s,o;const u={c:function(){e=p("a"),r=S("View"),n=N(),s=p("a"),o=S("Download"),this.h()},l:function(l){e=g(l,"A",{class:!0,href:!0});var c=V(e);r=I(c,"View"),c.forEach(d),n=P(l),s=g(l,"A",{class:!0,href:!0});var f=V(s);o=I(f,"Download"),f.forEach(d),this.h()},h:function(){E(e,"class","btn variant-ghost-primary"),E(e,"href",_e+"/mod/"+t[2]+"/version/"+t[3]),m(e,D,125,10,4450),E(s,"class","btn variant-ghost-primary"),E(s,"href",Je+"/mod/"+t[2]+"/versions/"+t[3]+"/download"),m(s,D,126,10,4562)},m:function(l,c){z(l,e,c),a(e,r),z(l,n,c),z(l,s,c),a(s,o)},p:B,d:function(l){l&&(d(e),d(n),d(s))}};return L("SvelteRegisterBlock",{block:u,id:Wt.name,type:"else",source:"(116:8) {:else}",ctx:t}),u}function Xt(t){let e,r,n="Download",s,o,u="arrow_drop_down",i,l,c,f,v,x,h=Rt(t[0].data.getVersion.targets),$=[];for(let A=0;A<h.length;A+=1)$[A]=gt(At(t,h,A));const q={c:function(){e=p("button"),r=p("span"),r.textContent=n,s=N(),o=p("span"),o.textContent=u,i=N(),l=p("div"),c=p("nav"),f=p("ul");for(let b=0;b<$.length;b+=1)$[b].c();this.h()},l:function(b){e=g(b,"BUTTON",{class:!0});var R=V(e);r=g(R,"SPAN",{"data-svelte-h":!0}),ce(r)!=="svelte-q9mf3e"&&(r.textContent=n),s=P(R),o=g(R,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),ce(o)!=="svelte-dpxqae"&&(o.textContent=u),R.forEach(d),i=P(b),l=g(b,"DIV",{class:!0,"data-popup":!0});var y=V(l);c=g(y,"NAV",{class:!0});var _=V(c);f=g(_,"UL",{});var w=V(f);for(let ie=0;ie<$.length;ie+=1)$[ie].l(w);w.forEach(d),_.forEach(d),y.forEach(d),this.h()},h:function(){m(r,D,105,12,3681),E(o,"class","material-icons"),an(o,"margin","0"),m(o,D,106,12,3715),E(e,"class","btn variant-ghost-primary"),m(e,D,97,10,3428),m(f,D,111,14,3938),E(c,"class","list-nav"),m(c,D,110,12,3901),E(l,"class","card w-72 shadow-xl z-10"),E(l,"data-popup","versionArchDropdown"),m(l,D,109,10,3817)},m:function(b,R){z(b,e,R),a(e,r),a(e,s),a(e,o),z(b,i,R),z(b,l,R),a(l,c),a(c,f);for(let y=0;y<$.length;y+=1)$[y]&&$[y].m(f,null);v||(x=ln(Ot.call(null,e,{event:"focus-click",target:"versionArchDropdown",placement:"bottom",closeQuery:"a"})),v=!0)},p:function(b,R){if(R&13){h=Rt(b[0].data.getVersion.targets);let y;for(y=0;y<h.length;y+=1){const _=At(b,h,y);$[y]?$[y].p(_,R):($[y]=gt(_),$[y].c(),$[y].m(f,null))}for(;y<$.length;y+=1)$[y].d(1);$.length=h.length}},d:function(b){b&&(d(e),d(i),d(l)),cn($,b),v=!1,x()}};return L("SvelteRegisterBlock",{block:q,id:Xt.name,type:"if",source:"(88:8) {#if $version.data.getVersion.targets.length != 0}",ctx:t}),q}function gt(t){let e,r,n,s,o=ft(t[15].targetName)+"",u,i,l;const c={c:function(){e=p("li"),r=p("a"),n=p("span"),s=S("Download "),u=S(o),l=N(),this.h()},l:function(v){e=g(v,"LI",{});var x=V(e);r=g(x,"A",{class:!0,href:!0});var h=V(r);n=g(h,"SPAN",{});var $=V(n);s=I($,"Download "),u=I($,o),$.forEach(d),h.forEach(d),l=P(x),x.forEach(d),this.h()},h:function(){m(n,D,117,22,4239),E(r,"class","w-full"),E(r,"href",i=Je+"/mod/"+t[2]+"/versions/"+t[3]+"/"+t[15].targetName+"/download"),m(r,D,114,20,4053),m(e,D,113,18,4028)},m:function(v,x){z(v,e,x),a(e,r),a(r,n),a(n,s),a(n,u),a(e,l)},p:function(v,x){x&1&&o!==(o=ft(v[15].targetName)+"")&&Q(u,o),x&1&&i!==(i=Je+"/mod/"+v[2]+"/versions/"+v[3]+"/"+v[15].targetName+"/download")&&E(r,"href",i)},d:function(v){v&&d(e)}};return L("SvelteRegisterBlock",{block:c,id:gt.name,type:"each",source:"(104:16) {#each $version.data.getVersion.targets as target}",ctx:t}),c}function mt(t){let e,r,n,s,o,u,i=!t[0].fetching&&!t[0].error&&t[0].data.getVersion&&ht(t);const l=[Qt,Kt,Jt,Ft],c=[];function f(x,h){return x[0].fetching?0:x[0].error?1:x[0].data.getVersion?2:3}n=f(t),s=c[n]=l[n](t);const v={c:function(){i&&i.c(),e=He(),r=N(),s.c(),o=He()},l:function(h){const $=sn("svelte-7zfw29",document.head);i&&i.l($),e=He(),$.forEach(d),r=P(h),s.l(h),o=He()},m:function(h,$){i&&i.m(document.head,null),a(document.head,e),z(h,r,$),c[n].m(h,$),z(h,o,$),u=!0},p:function(h,[$]){!h[0].fetching&&!h[0].error&&h[0].data.getVersion?i?(i.p(h,$),$&1&&ae(i,1)):(i=ht(h),i.c(),ae(i,1),i.m(e.parentNode,e)):i&&(Dt(),fe(i,1,1,()=>{i=null}),Pt());let q=n;n=f(h),n===q?c[n].p(h,$):(Dt(),fe(c[q],1,1,()=>{c[q]=null}),Pt(),s=c[n],s?s.p(h,$):(s=c[n]=l[n](h),s.c()),ae(s,1),s.m(o.parentNode,o))},i:function(h){u||(ae(i),ae(s),u=!0)},o:function(h){fe(i),fe(s),u=!1},d:function(h){h&&(d(r),d(o)),i&&i.d(h),d(e),c[n].d(h)}};return L("SvelteRegisterBlock",{block:v,id:mt.name,type:"component",source:"",ctx:t}),v}function gn(t,e,r){let n,s,o;st(ot,"user"),Et(t,ot,w=>r(8,s=w));let{$$slots:u={},$$scope:i}=e;bt("Page",u,[]);let{data:l}=e;const{modId:c,versionId:f,version:v}=l;st(v,"version"),Et(t,v,w=>r(0,o=w));const x=St(),h=It(),$=()=>{x.mutation(Ct,{versionId:f}).toPromise().then(w=>{w.error?(console.error(w.error.message),h.trigger({message:"Error deleting version: "+w.error.message,background:"variant-filled-error",autohide:!1})):(h.trigger({message:"Version deleted",background:"variant-filled-success",timeout:5e3}),nt(_e+"/mod/"+c))})},q={type:"confirm",title:"Delete Version?",body:"Are you sure you wish to delete this version?",response:w=>{w&&$()}},A=Nt();t.$$.on_mount.push(function(){l===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&Bt.warn("<Page> was created without expected prop 'data'")});const b=["data"];Object.keys(e).forEach(w=>{!~b.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&Bt.warn(`<Page> was created with unknown prop '${w}'`)});const R=()=>nt(_e+"/mod/"+c+"/version/"+f+"/edit"),y=()=>A.trigger(q),_=()=>_t(o.data.getVersion.mod.mod_reference);return t.$$set=w=>{"data"in w&&r(7,l=w.data)},t.$capture_state=()=>({DeleteVersionDocument:Ct,VersionDescription:Lt,VersionInfo:Ht,MetaDescriptors:Tt,API_REST:Je,goto:nt,user:ot,base:_e,installMod:_t,prettyTarget:ft,VersionTargetSupportGrid:jt,VersionDependenciesGrid:Mt,getContextClient:St,getModalStore:Nt,getToastStore:It,popup:Ot,Page404:qt,data:l,modId:c,versionId:f,version:v,client:x,toastStore:h,deleteVersionFn:$,deleteModal:q,modalStore:A,canUserEdit:n,$user:s,$version:o}),t.$inject_state=w=>{"data"in w&&r(7,l=w.data),"canUserEdit"in w&&r(1,n=w.canUserEdit)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&257&&r(1,n=s?.roles?.deleteContent||o?.data?.getVersion.mod?.authors?.findIndex(w=>w.user_id==s?.id)>=0)},[o,n,c,f,v,q,A,l,s,R,y,_]}class Nn extends vt{constructor(e){super(e),$t(this,e,gn,mt,wt,{data:7}),L("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:mt.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Nn as component,In as universal};
//# sourceMappingURL=18.603c0a18.js.map