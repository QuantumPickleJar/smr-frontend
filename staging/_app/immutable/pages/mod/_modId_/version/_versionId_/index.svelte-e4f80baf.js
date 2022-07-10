import{S as Xe,i as Ye,s as et,d as w,bf as Ne,v as tt,bg as Oe,a7 as C,a8 as _,a9 as j,u as k,t as V,ab as M,bh as $t,e as b,h as y,j as R,k as f,ac as se,n as I,p as O,bi as rn,x as L,af as B,f as P,ag as S,l as N,ad as a,ah as re,aH as ht,Z as cn,g as De,b0 as ln,r as Re,am as je,an as dt,b as an,aG as mt,w as pt,aM as $e,b5 as nt,b6 as ot,aF as wt,aK as xt,aL as kt,y as bt,ae as yt,ai as It,q as Pe}from"../../../../../chunks/vendor-71586dff.js";import{M as Bt}from"../../../../../chunks/MetaDescriptors-f6373408.js";import{l as St}from"../../../../../chunks/gql-815aec37.js";import{y as Vt,B as gt}from"../../../../../chunks/graphql-587ea9ba.js";import{p as Dt}from"../../../../../chunks/routing-3e924f8c.js";import{m as Ae}from"../../../../../chunks/markdown-bc68363c.js";import{b as Le,p as Ge,a as He}from"../../../../../chunks/formatting-a4ea5227.js";import{a as ze}from"../../../../../chunks/api-914d5f30.js";import{a as Me}from"../../../../../chunks/user-aa766597.js";import{T as Et}from"../../../../../chunks/Toast-a744ab82.js";import{g as Ue}from"../../../../../chunks/navigation-fe373893.js";import{b as he}from"../../../../../chunks/paths-396f020f.js";import{i as vt}from"../../../../../chunks/launcher-330dbfa3.js";import"../../../../../chunks/stores-b24fbbcb.js";import"../../../../../chunks/global-12cd1b57.js";import"../../../../../chunks/extras-71f1917d.js";import"../../../../../chunks/singletons-d1fb5791.js";const Rt="src/lib/components/versions/VersionDescription.svelte";function Pt(r){const e={c:L,l:L,m:L,p:L,d:L};return w("SvelteRegisterBlock",{block:e,id:Pt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),e}function Nt(r){let e,s=r[1]+"";const o={c:function(){e=b("p"),this.h()},l:function(i){e=y(i,"P",{});var c=R(e);c.forEach(f),this.h()},h:function(){I(e,Rt,9,8,277)},m:function(i,c){O(i,e,c),e.innerHTML=s},p:function(i,c){c&1&&s!==(s=i[1]+"")&&(e.innerHTML=s)},d:function(i){i&&f(e)}};return w("SvelteRegisterBlock",{block:o,id:Nt.name,type:"then",source:"(9:57)          <p>{@html changelogRendered}",ctx:r}),o}function Ot(r){const e={c:L,l:L,m:L,p:L,d:L};return w("SvelteRegisterBlock",{block:e,id:Ot.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),e}function Tt(r){let e,s,o={ctx:r,current:null,token:null,hasCatch:!1,pending:Ot,then:Nt,catch:Pt,value:1};$t(s=Ae(r[0]),o);const n={c:function(){e=b("div"),o.block.c(),this.h()},l:function(c){e=y(c,"DIV",{class:!0});var t=R(e);o.block.l(t),t.forEach(f),this.h()},h:function(){se(e,"class","markdown-content"),I(e,Rt,7,4,180)},m:function(c,t){O(c,e,t),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null},p:function(c,t){r=c,o.ctx=r,t&1&&s!==(s=Ae(r[0]))&&$t(s,o)||rn(o,r,t)},d:function(c){c&&f(e),o.block.d(),o.token=null,o=null}};return w("SvelteRegisterBlock",{block:n,id:Tt.name,type:"slot",source:"(7:2) <Content>",ctx:r}),n}function Ct(r){let e,s;e=new Oe({props:{$$slots:{default:[Tt]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(e.$$.fragment)},l:function(i){_(e.$$.fragment,i)},m:function(i,c){j(e,i,c),s=!0},p:function(i,c){const t={};c&5&&(t.$$scope={dirty:c,ctx:i}),e.$set(t)},i:function(i){s||(k(e.$$.fragment,i),s=!0)},o:function(i){V(e.$$.fragment,i),s=!1},d:function(i){M(e,i)}};return w("SvelteRegisterBlock",{block:o,id:Ct.name,type:"slot",source:'(6:0) <Card class=\\"h-fit\\">',ctx:r}),o}function Fe(r){let e,s;e=new Ne({props:{class:"h-fit",$$slots:{default:[Ct]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(e.$$.fragment)},l:function(i){_(e.$$.fragment,i)},m:function(i,c){j(e,i,c),s=!0},p:function(i,[c]){const t={};c&5&&(t.$$scope={dirty:c,ctx:i}),e.$set(t)},i:function(i){s||(k(e.$$.fragment,i),s=!0)},o:function(i){V(e.$$.fragment,i),s=!1},d:function(i){M(e,i)}};return w("SvelteRegisterBlock",{block:o,id:Fe.name,type:"component",source:"",ctx:r}),o}function fn(r,e,s){let{$$slots:o={},$$scope:n}=e;tt("VersionDescription",o,[]);let{changelog:i}=e;const c=["changelog"];return Object.keys(e).forEach(t=>{!~c.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<VersionDescription> was created with unknown prop '${t}'`)}),r.$$set=t=>{"changelog"in t&&s(0,i=t.changelog)},r.$capture_state=()=>({markdown:Ae,Card:Ne,Content:Oe,changelog:i}),r.$inject_state=t=>{"changelog"in t&&s(0,i=t.changelog)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[i]}class _t extends Xe{constructor(e){super(e),Ye(this,e,fn,Fe,et,{changelog:0}),w("SvelteRegisterComponent",{component:this,tagName:"VersionDescription",options:e,id:Fe.name});const{ctx:s}=this.$$,o=e.props||{};s[0]===void 0&&!("changelog"in o)&&console.warn("<VersionDescription> was created without expected prop 'changelog'")}get changelog(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set changelog(e){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const A="src/lib/components/versions/VersionInfo.svelte";function jt(r){let e,s,o,n,i,c,t,l,g=Ge(r[0].created_at)+"",m,x,p,$,v,G,J,F=He(r[0].downloads)+"",H,K,ce,z,q,oe,X,W=r[0].sml_version+"",ie,d,T,D,fe,de,me,Q=r[0].stability+"",u,h,Y,Z,U,te,le,ae=Le(r[0].size)+"",we,xe,Te,ue,pe,Ce,_e,ge=r[0].hash+"",ke;const it={c:function(){e=b("div"),s=b("h3"),o=B("Info"),n=P(),i=b("span"),c=b("strong"),t=B("Created:"),l=P(),m=B(g),x=b("br"),p=P(),$=b("span"),v=b("strong"),G=B("Downloads:"),J=P(),H=B(F),K=b("br"),ce=P(),z=b("span"),q=b("strong"),oe=B("SML Version:"),X=P(),ie=B(W),d=b("br"),T=P(),D=b("span"),fe=b("strong"),de=B("Stability:"),me=P(),u=B(Q),h=b("br"),Y=P(),Z=b("span"),U=b("strong"),te=B("Size:"),le=P(),we=B(ae),xe=b("br"),Te=P(),ue=b("span"),pe=b("strong"),Ce=B("Hash:"),_e=P(),ke=B(ge),this.h()},l:function(ee){e=y(ee,"DIV",{class:!0});var E=R(e);s=y(E,"H3",{class:!0});var st=R(s);o=S(st,"Info"),st.forEach(f),n=N(E),i=y(E,"SPAN",{});var be=R(i);c=y(be,"STRONG",{});var rt=R(c);t=S(rt,"Created:"),rt.forEach(f),l=N(be),m=S(be,g),be.forEach(f),x=y(E,"BR",{}),p=N(E),$=y(E,"SPAN",{});var ye=R($);v=y(ye,"STRONG",{});var ct=R(v);G=S(ct,"Downloads:"),ct.forEach(f),J=N(ye),H=S(ye,F),ye.forEach(f),K=y(E,"BR",{}),ce=N(E),z=y(E,"SPAN",{});var Ie=R(z);q=y(Ie,"STRONG",{});var lt=R(q);oe=S(lt,"SML Version:"),lt.forEach(f),X=N(Ie),ie=S(Ie,W),Ie.forEach(f),d=y(E,"BR",{}),T=N(E),D=y(E,"SPAN",{});var Be=R(D);fe=y(Be,"STRONG",{});var at=R(fe);de=S(at,"Stability:"),at.forEach(f),me=N(Be),u=S(Be,Q),Be.forEach(f),h=y(E,"BR",{}),Y=N(E),Z=y(E,"SPAN",{});var Se=R(Z);U=y(Se,"STRONG",{});var ft=R(U);te=S(ft,"Size:"),ft.forEach(f),le=N(Se),we=S(Se,ae),Se.forEach(f),xe=y(E,"BR",{}),Te=N(E),ue=y(E,"SPAN",{});var Ve=R(ue);pe=y(Ve,"STRONG",{});var ut=R(pe);Ce=S(ut,"Hash:"),ut.forEach(f),_e=N(Ve),ke=S(Ve,ge),Ve.forEach(f),E.forEach(f),this.h()},h:function(){se(s,"class","text-2xl my-4 font-bold"),I(s,A,8,6,235),I(c,A,9,12,293),I(i,A,9,6,287),I(x,A,9,77,358),I(v,A,10,12,377),I($,A,10,6,371),I(K,A,10,80,445),I(q,A,11,12,464),I(z,A,11,6,458),I(d,A,11,70,522),I(fe,A,12,12,541),I(D,A,12,6,535),I(h,A,12,66,595),I(U,A,13,12,614),I(Z,A,13,6,608),I(xe,A,13,69,671),I(pe,A,14,12,690),I(ue,A,14,6,684),se(e,"class","text-lg break-words"),I(e,A,7,4,195)},m:function(ee,E){O(ee,e,E),a(e,s),a(s,o),a(e,n),a(e,i),a(i,c),a(c,t),a(i,l),a(i,m),a(e,x),a(e,p),a(e,$),a($,v),a(v,G),a($,J),a($,H),a(e,K),a(e,ce),a(e,z),a(z,q),a(q,oe),a(z,X),a(z,ie),a(e,d),a(e,T),a(e,D),a(D,fe),a(fe,de),a(D,me),a(D,u),a(e,h),a(e,Y),a(e,Z),a(Z,U),a(U,te),a(Z,le),a(Z,we),a(e,xe),a(e,Te),a(e,ue),a(ue,pe),a(pe,Ce),a(ue,_e),a(ue,ke)},p:function(ee,E){E&1&&g!==(g=Ge(ee[0].created_at)+"")&&re(m,g),E&1&&F!==(F=He(ee[0].downloads)+"")&&re(H,F),E&1&&W!==(W=ee[0].sml_version+"")&&re(ie,W),E&1&&Q!==(Q=ee[0].stability+"")&&re(u,Q),E&1&&ae!==(ae=Le(ee[0].size)+"")&&re(we,ae),E&1&&ge!==(ge=ee[0].hash+"")&&re(ke,ge)},d:function(ee){ee&&f(e)}};return w("SvelteRegisterBlock",{block:it,id:jt.name,type:"slot",source:"(7:2) <Content>",ctx:r}),it}function Mt(r){let e,s;e=new Oe({props:{$$slots:{default:[jt]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(e.$$.fragment)},l:function(i){_(e.$$.fragment,i)},m:function(i,c){j(e,i,c),s=!0},p:function(i,c){const t={};c&3&&(t.$$scope={dirty:c,ctx:i}),e.$set(t)},i:function(i){s||(k(e.$$.fragment,i),s=!0)},o:function(i){V(e.$$.fragment,i),s=!1},d:function(i){M(e,i)}};return w("SvelteRegisterBlock",{block:o,id:Mt.name,type:"slot",source:"(6:0) <Card>",ctx:r}),o}function qe(r){let e,s;e=new Ne({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(e.$$.fragment)},l:function(i){_(e.$$.fragment,i)},m:function(i,c){j(e,i,c),s=!0},p:function(i,[c]){const t={};c&3&&(t.$$scope={dirty:c,ctx:i}),e.$set(t)},i:function(i){s||(k(e.$$.fragment,i),s=!0)},o:function(i){V(e.$$.fragment,i),s=!1},d:function(i){M(e,i)}};return w("SvelteRegisterBlock",{block:o,id:qe.name,type:"component",source:"",ctx:r}),o}function un(r,e,s){let{$$slots:o={},$$scope:n}=e;tt("VersionInfo",o,[]);let{version:i}=e;const c=["version"];return Object.keys(e).forEach(t=>{!~c.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<VersionInfo> was created with unknown prop '${t}'`)}),r.$$set=t=>{"version"in t&&s(0,i=t.version)},r.$capture_state=()=>({Card:Ne,Content:Oe,prettyBytes:Le,prettyDate:Ge,prettyNumber:He,version:i}),r.$inject_state=t=>{"version"in t&&s(0,i=t.version)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[i]}class Ut extends Xe{constructor(e){super(e),Ye(this,e,un,qe,et,{version:0}),w("SvelteRegisterComponent",{component:this,tagName:"VersionInfo",options:e,id:qe.name});const{ctx:s}=this.$$,o=e.props||{};s[0]===void 0&&!("version"in o)&&console.warn("<VersionInfo> was created without expected prop 'version'")}get version(){throw new Error("<VersionInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set version(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Ee}=cn,ne="src/routes/mod/[modId]/version/[versionId]/index.svelte";function We(r){let e,s;e=new Bt({props:{description:"Information for mod version "+r[3].data.getVersion.mod.name+" "+r[3].data.getVersion.version,title:"Mod version "+r[3].data.getVersion.mod.name+" "+r[3].data.getVersion.version},$$inline:!0});const o={c:function(){C(e.$$.fragment)},l:function(i){_(e.$$.fragment,i)},m:function(i,c){j(e,i,c),s=!0},p:function(i,c){const t={};c&8&&(t.description="Information for mod version "+i[3].data.getVersion.mod.name+" "+i[3].data.getVersion.version),c&8&&(t.title="Mod version "+i[3].data.getVersion.mod.name+" "+i[3].data.getVersion.version),e.$set(t)},i:function(i){s||(k(e.$$.fragment,i),s=!0)},o:function(i){V(e.$$.fragment,i),s=!1},d:function(i){M(e,i)}};return w("SvelteRegisterBlock",{block:o,id:We.name,type:"if",source:"(56:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:r}),o}function At(r){let e;const s={c:function(){e=B("404")},l:function(n){e=S(n,"404")},m:function(n,i){O(n,e,i)},p:L,i:L,o:L,d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:At.name,type:"else",source:"(122:0) {:else}",ctx:r}),s}function Lt(r){let e,s,o,n=r[3].data.getVersion.mod.name+"",i,c,t=r[3].data.getVersion.version+"",l,g,m,x,p,$,v,G,J,F,H,K,ce,z,q,oe,X,W,ie,d,T=r[6]&&Ze(r);p=new $e({props:{variant:"outlined",href:ze+"/mod/"+r[0]+"/versions/"+r[1]+"/download",$$slots:{default:[qt]},$$scope:{ctx:r}},$$inline:!0}),v=new $e({props:{variant:"outlined",$$slots:{default:[Jt]},$$scope:{ctx:r}},$$inline:!0}),v.$on("click",r[13]),J=new $e({props:{variant:"outlined",href:he+"/mod/"+r[0],$$slots:{default:[Xt]},$$scope:{ctx:r}},$$inline:!0}),K=new _t({props:{changelog:r[3].data.getVersion.changelog},$$inline:!0}),q=new Ut({props:{version:r[3].data.getVersion},$$inline:!0});let D=r[6]&&Je(r);function fe(Q){r[17](Q)}let de={$$slots:{default:[sn]},$$scope:{ctx:r}};r[5]!==void 0&&(de.running=r[5]),W=new Et({props:de,$$inline:!0}),bt.push(()=>yt(W,"running",fe));const me={c:function(){e=b("div"),s=b("div"),o=b("h1"),i=B(n),c=B(`
        Version `),l=B(t),g=P(),m=b("div"),T&&T.c(),x=P(),C(p.$$.fragment),$=P(),C(v.$$.fragment),G=P(),C(J.$$.fragment),F=P(),H=b("div"),C(K.$$.fragment),ce=P(),z=b("div"),C(q.$$.fragment),oe=P(),D&&D.c(),X=P(),C(W.$$.fragment),this.h()},l:function(u){e=y(u,"DIV",{class:!0});var h=R(e);s=y(h,"DIV",{class:!0});var Y=R(s);o=y(Y,"H1",{class:!0});var Z=R(o);i=S(Z,n),c=S(Z,`
        Version `),l=S(Z,t),Z.forEach(f),g=N(Y),m=y(Y,"DIV",{class:!0});var U=R(m);T&&T.l(U),x=N(U),_(p.$$.fragment,U),$=N(U),_(v.$$.fragment,U),G=N(U),_(J.$$.fragment,U),U.forEach(f),Y.forEach(f),F=N(h),H=y(h,"DIV",{class:!0});var te=R(H);_(K.$$.fragment,te),ce=N(te),z=y(te,"DIV",{class:!0});var le=R(z);_(q.$$.fragment,le),le.forEach(f),te.forEach(f),h.forEach(f),oe=N(u),D&&D.l(u),X=N(u),_(W.$$.fragment,u),this.h()},h:function(){se(o,"class","text-4xl font-bold"),I(o,ne,69,6,2698),se(m,"class","grid grid-flow-col gap-4"),I(m,ne,74,6,2844),se(s,"class","flex flex-wrap h-auto justify-between items-center"),I(s,ne,68,4,2627),se(z,"class","grid grid-cols-1 auto-rows-min gap-8"),I(z,ne,98,6,3871),se(H,"class","grid grid-auto-max auto-cols-fr gap-4"),I(H,ne,96,4,3737),se(e,"class","grid gap-6 xlx:grid-flow-row"),I(e,ne,67,2,2580)},m:function(u,h){O(u,e,h),a(e,s),a(s,o),a(o,i),a(o,c),a(o,l),a(s,g),a(s,m),T&&T.m(m,null),a(m,x),j(p,m,null),a(m,$),j(v,m,null),a(m,G),j(J,m,null),a(e,F),a(e,H),j(K,H,null),a(H,ce),a(H,z),j(q,z,null),O(u,oe,h),D&&D.m(u,h),O(u,X,h),j(W,u,h),d=!0},p:function(u,h){(!d||h&8)&&n!==(n=u[3].data.getVersion.mod.name+"")&&re(i,n),(!d||h&8)&&t!==(t=u[3].data.getVersion.version+"")&&re(l,t),u[6]?T?(T.p(u,h),h&64&&k(T,1)):(T=Ze(u),T.c(),k(T,1),T.m(m,x)):T&&(Pe(),V(T,1,1,()=>{T=null}),Re());const Y={};h&3&&(Y.href=ze+"/mod/"+u[0]+"/versions/"+u[1]+"/download"),h&524288&&(Y.$$scope={dirty:h,ctx:u}),p.$set(Y);const Z={};h&524288&&(Z.$$scope={dirty:h,ctx:u}),v.$set(Z);const U={};h&1&&(U.href=he+"/mod/"+u[0]),h&524288&&(U.$$scope={dirty:h,ctx:u}),J.$set(U);const te={};h&8&&(te.changelog=u[3].data.getVersion.changelog),K.$set(te);const le={};h&8&&(le.version=u[3].data.getVersion),q.$set(le),u[6]?D?(D.p(u,h),h&64&&k(D,1)):(D=Je(u),D.c(),k(D,1),D.m(X.parentNode,X)):D&&(Pe(),V(D,1,1,()=>{D=null}),Re());const ae={};h&524304&&(ae.$$scope={dirty:h,ctx:u}),!ie&&h&32&&(ie=!0,ae.running=u[5],It(()=>ie=!1)),W.$set(ae)},i:function(u){d||(k(T),k(p.$$.fragment,u),k(v.$$.fragment,u),k(J.$$.fragment,u),k(K.$$.fragment,u),k(q.$$.fragment,u),k(D),k(W.$$.fragment,u),d=!0)},o:function(u){V(T),V(p.$$.fragment,u),V(v.$$.fragment,u),V(J.$$.fragment,u),V(K.$$.fragment,u),V(q.$$.fragment,u),V(D),V(W.$$.fragment,u),d=!1},d:function(u){u&&f(e),T&&T.d(),M(p),M(v),M(J),M(K),M(q),u&&f(oe),D&&D.d(u),u&&f(X),M(W,u)}};return w("SvelteRegisterBlock",{block:me,id:Lt.name,type:"if",source:"(67:35) ",ctx:r}),me}function Gt(r){let e,s,o=r[3].error.message+"",n;const i={c:function(){e=b("p"),s=B("Oh no... "),n=B(o),this.h()},l:function(t){e=y(t,"P",{});var l=R(e);s=S(l,"Oh no... "),n=S(l,o),l.forEach(f),this.h()},h:function(){I(e,ne,65,2,2501)},m:function(t,l){O(t,e,l),a(e,s),a(e,n)},p:function(t,l){l&8&&o!==(o=t[3].error.message+"")&&re(n,o)},i:L,o:L,d:function(t){t&&f(e)}};return w("SvelteRegisterBlock",{block:i,id:Gt.name,type:"if",source:"(65:25) ",ctx:r}),i}function Ht(r){let e,s;const o={c:function(){e=b("p"),s=B("Loading..."),this.h()},l:function(i){e=y(i,"P",{});var c=R(e);s=S(c,"Loading..."),c.forEach(f),this.h()},h:function(){I(e,ne,63,2,2455)},m:function(i,c){O(i,e,c),a(e,s)},p:L,i:L,o:L,d:function(i){i&&f(e)}};return w("SvelteRegisterBlock",{block:o,id:Ht.name,type:"if",source:"(63:0) {#if $version.fetching}",ctx:r}),o}function Ze(r){let e,s,o,n;e=new $e({props:{variant:"outlined",$$slots:{default:[zt]},$$scope:{ctx:r}},$$inline:!0}),e.$on("click",r[11]),o=new $e({props:{variant:"outlined",$$slots:{default:[Ft]},$$scope:{ctx:r}},$$inline:!0}),o.$on("click",r[12]);const i={c:function(){C(e.$$.fragment),s=P(),C(o.$$.fragment)},l:function(t){_(e.$$.fragment,t),s=N(t),_(o.$$.fragment,t)},m:function(t,l){j(e,t,l),O(t,s,l),j(o,t,l),n=!0},p:function(t,l){const g={};l&524288&&(g.$$scope={dirty:l,ctx:t}),e.$set(g);const m={};l&524288&&(m.$$scope={dirty:l,ctx:t}),o.$set(m)},i:function(t){n||(k(e.$$.fragment,t),k(o.$$.fragment,t),n=!0)},o:function(t){V(e.$$.fragment,t),V(o.$$.fragment,t),n=!1},d:function(t){M(e,t),t&&f(s),M(o,t)}};return w("SvelteRegisterBlock",{block:i,id:Ze.name,type:"if",source:"(76:8) {#if canUserEdit}",ctx:r}),i}function zt(r){let e;const s={c:function(){e=B("Edit")},l:function(n){e=S(n,"Edit")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:zt.name,type:"slot",source:`(77:10) <Button variant=\\"outlined\\" on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}>`,ctx:r}),s}function Ft(r){let e;const s={c:function(){e=B("Delete")},l:function(n){e=S(n,"Delete")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:Ft.name,type:"slot",source:'(80:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(true)}>',ctx:r}),s}function qt(r){let e;const s={c:function(){e=B("Download")},l:function(n){e=S(n,"Download")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:qt.name,type:"slot",source:`(83:8) <Button variant=\\"outlined\\" href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}>`,ctx:r}),s}function Wt(r){let e;const s={c:function(){e=B("Install")},l:function(n){e=S(n,"Install")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:Wt.name,type:"slot",source:"(87:10) <Label>",ctx:r}),s}function Zt(r){let e;const s={c:function(){e=B("download")},l:function(n){e=S(n,"download")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:Zt.name,type:"slot",source:'(88:10) <Icon class=\\"material-icons\\">',ctx:r}),s}function Jt(r){let e,s,o,n;e=new nt({props:{$$slots:{default:[Wt]},$$scope:{ctx:r}},$$inline:!0}),o=new ot({props:{class:"material-icons",$$slots:{default:[Zt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){C(e.$$.fragment),s=P(),C(o.$$.fragment)},l:function(t){_(e.$$.fragment,t),s=N(t),_(o.$$.fragment,t)},m:function(t,l){j(e,t,l),O(t,s,l),j(o,t,l),n=!0},p:function(t,l){const g={};l&524288&&(g.$$scope={dirty:l,ctx:t}),e.$set(g);const m={};l&524288&&(m.$$scope={dirty:l,ctx:t}),o.$set(m)},i:function(t){n||(k(e.$$.fragment,t),k(o.$$.fragment,t),n=!0)},o:function(t){V(e.$$.fragment,t),V(o.$$.fragment,t),n=!1},d:function(t){M(e,t),t&&f(s),M(o,t)}};return w("SvelteRegisterBlock",{block:i,id:Jt.name,type:"slot",source:'(86:8) <Button variant=\\"outlined\\" on:click={() => installMod(version.data.getVersion.mod.mod_reference)}>',ctx:r}),i}function Kt(r){let e;const s={c:function(){e=B("Mod")},l:function(n){e=S(n,"Mod")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:Kt.name,type:"slot",source:"(92:10) <Label>",ctx:r}),s}function Qt(r){let e;const s={c:function(){e=B("extension")},l:function(n){e=S(n,"extension")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:Qt.name,type:"slot",source:'(93:10) <Icon class=\\"material-icons\\">',ctx:r}),s}function Xt(r){let e,s,o,n;e=new nt({props:{$$slots:{default:[Kt]},$$scope:{ctx:r}},$$inline:!0}),o=new ot({props:{class:"material-icons",$$slots:{default:[Qt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){C(e.$$.fragment),s=P(),C(o.$$.fragment)},l:function(t){_(e.$$.fragment,t),s=N(t),_(o.$$.fragment,t)},m:function(t,l){j(e,t,l),O(t,s,l),j(o,t,l),n=!0},p:function(t,l){const g={};l&524288&&(g.$$scope={dirty:l,ctx:t}),e.$set(g);const m={};l&524288&&(m.$$scope={dirty:l,ctx:t}),o.$set(m)},i:function(t){n||(k(e.$$.fragment,t),k(o.$$.fragment,t),n=!0)},o:function(t){V(e.$$.fragment,t),V(o.$$.fragment,t),n=!1},d:function(t){M(e,t),t&&f(s),M(o,t)}};return w("SvelteRegisterBlock",{block:i,id:Xt.name,type:"slot",source:`(91:8) <Button variant=\\"outlined\\" href={base + '/mod/' + modId}>`,ctx:r}),i}function Je(r){let e,s,o;function n(t){r[16](t)}let i={$$slots:{default:[on]},$$scope:{ctx:r}};r[7]!==void 0&&(i.open=r[7]),e=new wt({props:i,$$inline:!0}),bt.push(()=>yt(e,"open",n));const c={c:function(){C(e.$$.fragment)},l:function(l){_(e.$$.fragment,l)},m:function(l,g){j(e,l,g),o=!0},p:function(l,g){const m={};g&524288&&(m.$$scope={dirty:g,ctx:l}),!s&&g&128&&(s=!0,m.open=l[7],It(()=>s=!1)),e.$set(m)},i:function(l){o||(k(e.$$.fragment,l),o=!0)},o:function(l){V(e.$$.fragment,l),o=!1},d:function(l){M(e,l)}};return w("SvelteRegisterBlock",{block:c,id:Je.name,type:"if",source:"(105:2) {#if canUserEdit}",ctx:r}),c}function Yt(r){let e;const s={c:function(){e=B("Delete Version?")},l:function(n){e=S(n,"Delete Version?")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:Yt.name,type:"slot",source:'(107:6) <Title id=\\"simple-title\\">',ctx:r}),s}function en(r){let e;const s={c:function(){e=B("Cancel")},l:function(n){e=S(n,"Cancel")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:en.name,type:"slot",source:'(112:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(false)}>',ctx:r}),s}function tn(r){let e;const s={c:function(){e=B("Delete")},l:function(n){e=S(n,"Delete")},m:function(n,i){O(n,e,i)},d:function(n){n&&f(e)}};return w("SvelteRegisterBlock",{block:s,id:tn.name,type:"slot",source:'(113:10) <Button variant=\\"outlined\\" on:click={() => deleteVersionFn()}>',ctx:r}),s}function nn(r){let e,s,o,n,i,c,t,l;i=new $e({props:{variant:"outlined",$$slots:{default:[en]},$$scope:{ctx:r}},$$inline:!0}),i.$on("click",r[14]),t=new $e({props:{variant:"outlined",$$slots:{default:[tn]},$$scope:{ctx:r}},$$inline:!0}),t.$on("click",r[15]);const g={c:function(){e=b("div"),s=b("span"),o=B("Are you sure you wish to delete this version"),n=P(),C(i.$$.fragment),c=P(),C(t.$$.fragment),this.h()},l:function(x){e=y(x,"DIV",{class:!0});var p=R(e);s=y(p,"SPAN",{});var $=R(s);o=S($,"Are you sure you wish to delete this version"),$.forEach(f),n=N(p),_(i.$$.fragment,p),c=N(p),_(t.$$.fragment,p),p.forEach(f),this.h()},h:function(){I(s,ne,109,10,4212),se(e,"class","grid grid-flow-row gap-4"),I(e,ne,108,8,4163)},m:function(x,p){O(x,e,p),a(e,s),a(s,o),a(e,n),j(i,e,null),a(e,c),j(t,e,null),l=!0},p:function(x,p){const $={};p&524288&&($.$$scope={dirty:p,ctx:x}),i.$set($);const v={};p&524288&&(v.$$scope={dirty:p,ctx:x}),t.$set(v)},i:function(x){l||(k(i.$$.fragment,x),k(t.$$.fragment,x),l=!0)},o:function(x){V(i.$$.fragment,x),V(t.$$.fragment,x),l=!1},d:function(x){x&&f(e),M(i),M(t)}};return w("SvelteRegisterBlock",{block:g,id:nn.name,type:"slot",source:"(108:6) <DialogContent>",ctx:r}),g}function on(r){let e,s,o,n;e=new xt({props:{id:"simple-title",$$slots:{default:[Yt]},$$scope:{ctx:r}},$$inline:!0}),o=new kt({props:{$$slots:{default:[nn]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){C(e.$$.fragment),s=P(),C(o.$$.fragment)},l:function(t){_(e.$$.fragment,t),s=N(t),_(o.$$.fragment,t)},m:function(t,l){j(e,t,l),O(t,s,l),j(o,t,l),n=!0},p:function(t,l){const g={};l&524288&&(g.$$scope={dirty:l,ctx:t}),e.$set(g);const m={};l&524288&&(m.$$scope={dirty:l,ctx:t}),o.$set(m)},i:function(t){n||(k(e.$$.fragment,t),k(o.$$.fragment,t),n=!0)},o:function(t){V(e.$$.fragment,t),V(o.$$.fragment,t),n=!1},d:function(t){M(e,t),t&&f(s),M(o,t)}};return w("SvelteRegisterBlock",{block:i,id:on.name,type:"slot",source:"(106:4) <Dialog bind:open={$deleteDialogOpen}>",ctx:r}),i}function sn(r){let e,s;const o={c:function(){e=b("span"),s=B(r[4]),this.h()},l:function(i){e=y(i,"SPAN",{});var c=R(e);s=S(c,r[4]),c.forEach(f),this.h()},h:function(){I(e,ne,119,4,4558)},m:function(i,c){O(i,e,c),a(e,s)},p:function(i,c){c&16&&re(s,i[4])},d:function(i){i&&f(e)}};return w("SvelteRegisterBlock",{block:o,id:sn.name,type:"slot",source:"(119:2) <Toast bind:running={errorToast}>",ctx:r}),o}function Ke(r){let e,s,o,n,i,c,t=!r[3].fetching&&!r[3].error&&r[3].data.getVersion&&We(r);const l=[Ht,Gt,Lt,At],g=[];function m(p,$){return p[3].fetching?0:p[3].error?1:p[3].data.getVersion?2:3}o=m(r),n=g[o]=l[o](r);const x={c:function(){t&&t.c(),e=De(),s=P(),n.c(),i=De()},l:function($){const v=ln('[data-svelte="svelte-7zfw29"]',document.head);t&&t.l(v),e=De(),v.forEach(f),s=N($),n.l($),i=De()},m:function($,v){t&&t.m(document.head,null),a(document.head,e),O($,s,v),g[o].m($,v),O($,i,v),c=!0},p:function($,[v]){!$[3].fetching&&!$[3].error&&$[3].data.getVersion?t?(t.p($,v),v&8&&k(t,1)):(t=We($),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Pe(),V(t,1,1,()=>{t=null}),Re());let G=o;o=m($),o===G?g[o].p($,v):(Pe(),V(g[G],1,1,()=>{g[G]=null}),Re(),n=g[o],n?n.p($,v):(n=g[o]=l[o]($),n.c()),k(n,1),n.m(i.parentNode,i))},i:function($){c||(k(t),k(n),c=!0)},o:function($){V(t),V(n),c=!1},d:function($){t&&t.d($),f(e),$&&f(s),g[o].d($),$&&f(i)}};return w("SvelteRegisterBlock",{block:x,id:Ke.name,type:"component",source:"",ctx:r}),x}const Qe=ht(Vt,{version:void 0}),$n=Dt(async r=>(Qe.variables.version=r.params.versionId,St({version:Qe})(r)));function dn(r,e,s){let o,n,i,c=L,t=()=>(c(),c=an($,d=>s(3,i=d)),$),l;je(Me,"user"),dt(r,Me,d=>s(10,n=d)),r.$$.on_destroy.push(()=>c());let{$$slots:g={},$$scope:m}=e;tt("U5BversionIdu5D",g,[]);let{modId:x}=e,{versionId:p}=e,{version:$}=e;je($,"version"),t();let v="",G=!1;const J=mt({query:gt}),F=pt(!1);je(F,"deleteDialogOpen"),dt(r,F,d=>s(7,l=d));const H=()=>{J({versionId:p}).then(d=>{d.error?(console.error(d.error.message),s(4,v="Error deleting version: "+d.error.message),s(5,G=!0)):Ue(he+"/mod/"+x)})},K=["modId","versionId","version"];Object.keys(e).forEach(d=>{!~K.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&Ee.warn(`<U5BversionIdu5D> was created with unknown prop '${d}'`)});const ce=()=>Ue(he+"/mod/"+x+"/version/"+p+"/edit"),z=()=>F.set(!0),q=()=>vt($.data.getVersion.mod.mod_reference),oe=()=>F.set(!1),X=()=>H();function W(d){l=d,F.set(l)}function ie(d){G=d,s(5,G)}return r.$$set=d=>{"modId"in d&&s(0,x=d.modId),"versionId"in d&&s(1,p=d.versionId),"version"in d&&t(s(2,$=d.version))},r.$capture_state=()=>({paramsToProps:Dt,operationStore:ht,GetModVersionDocument:Vt,loadWaitForNoFetch:St,MetaDescriptors:Bt,versionQ:Qe,load:$n,mutation:mt,DeleteVersionDocument:gt,VersionDescription:_t,VersionInfo:Ut,API_REST:ze,Toast:Et,writable:pt,goto:Ue,user:Me,base:he,Button:$e,Label:nt,Icon:ot,Dialog:wt,Title:xt,DialogContent:kt,installMod:vt,modId:x,versionId:p,version:$,errorMessage:v,errorToast:G,deleteVersion:J,deleteDialogOpen:F,deleteVersionFn:H,canUserEdit:o,$user:n,$version:i,$deleteDialogOpen:l}),r.$inject_state=d=>{"modId"in d&&s(0,x=d.modId),"versionId"in d&&s(1,p=d.versionId),"version"in d&&t(s(2,$=d.version)),"errorMessage"in d&&s(4,v=d.errorMessage),"errorToast"in d&&s(5,G=d.errorToast),"canUserEdit"in d&&s(6,o=d.canUserEdit)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),r.$$.update=()=>{r.$$.dirty&1032&&s(6,o=n?.roles?.deleteContent||i?.data?.getVersion.mod?.authors?.findIndex(d=>d.user_id==n?.id)>=0)},[x,p,$,i,v,G,o,l,F,H,n,ce,z,q,oe,X,W,ie]}class Pn extends Xe{constructor(e){super(e),Ye(this,e,dn,Ke,et,{modId:0,versionId:1,version:2}),w("SvelteRegisterComponent",{component:this,tagName:"U5BversionIdu5D",options:e,id:Ke.name});const{ctx:s}=this.$$,o=e.props||{};s[0]===void 0&&!("modId"in o)&&Ee.warn("<U5BversionIdu5D> was created without expected prop 'modId'"),s[1]===void 0&&!("versionId"in o)&&Ee.warn("<U5BversionIdu5D> was created without expected prop 'versionId'"),s[2]===void 0&&!("version"in o)&&Ee.warn("<U5BversionIdu5D> was created without expected prop 'version'")}get modId(){throw new Error("<U5BversionIdu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modId(e){throw new Error("<U5BversionIdu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get versionId(){throw new Error("<U5BversionIdu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set versionId(e){throw new Error("<U5BversionIdu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get version(){throw new Error("<U5BversionIdu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set version(e){throw new Error("<U5BversionIdu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Pn as default,$n as load};
//# sourceMappingURL=index.svelte-e4f80baf.js.map