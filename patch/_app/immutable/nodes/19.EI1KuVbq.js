import{G as tn,S as bt,i as Vt,s as xt,d as z,a7 as St,v as yt,e as h,b as P,g as m,h as b,k as R,j as p,N as y,m as g,n as U,Q as a,r as Y,p as st,t as ne,q as rt,a8 as nn,J as Ee,L as ke,O as Se,R as Ie,u as j,a9 as on,aa as sn,ab as It,a1 as at,W as S,M as fe,X as I,Y as J,x as rn,a2 as Dt,F as Nt,_ as Pt,aj as Rt,$ as nt,H as _e,ay as Tt,a0 as an,f as Qe,K as ln,Z as it,a6 as cn,U as At,l as fn,ad as un,V as dn}from"../chunks/vendor.XWSQ3ZnX.js";import{t as pn,s as jt,H as Ct}from"../chunks/graphql.NT0BIh3j.js";import{l as hn}from"../chunks/gql.WZvlfNZ8.js";import{m as lt}from"../chunks/markdown.9I_IxsmI.js";import{A as Mt}from"../chunks/AnnouncementRow.CuhpOWJK.js";import{p as ct,a as ft,b as ut,c as dt}from"../chunks/formatting.GdW8kOxI.js";import{M as Gt}from"../chunks/MetaDescriptors.2kGqH49l.js";import{A as We}from"../chunks/api.lrP_H7dG.js";import{u as ot}from"../chunks/user.JgjvStVA.js";import{i as _t}from"../chunks/launcher.KYRLJ4ve.js";import{V as Ut,a as zt}from"../chunks/VersionDependenciesGrid.0F80cXGi.js";import{P as qt}from"../chunks/Page404.i0sib6zY.js";const mn=async({params:t,parent:e})=>({...t,...await hn({version:tn({query:pn,client:(await e()).client,variables:{version:t.versionId}})})}),Rn=Object.freeze(Object.defineProperty({__proto__:null,load:mn},Symbol.toStringTag,{value:"Module"})),Ne="src/lib/components/versions/VersionDescription.svelte";function pt(t){let e,s,n;s=new Mt({props:{importance:jt.Warning,message:"This version has not yet been approved by the virus scanner and is hidden until this process is complete. If this message isn't gone in the next few minutes, ask for manual approval on the Discord."},$$inline:!0});const i={c:function(){e=h("div"),Ee(s.$$.fragment),this.h()},l:function(c){e=m(c,"DIV",{class:!0});var l=b(e);ke(s.$$.fragment,l),l.forEach(p),this.h()},h:function(){y(e,"class","p-4"),g(e,Ne,11,4,276)},m:function(c,l){U(c,e,l),Se(s,e,null),n=!0},i:function(c){n||(Y(s.$$.fragment,c),n=!0)},o:function(c){ne(s.$$.fragment,c),n=!1},d:function(c){c&&p(e),Ie(s)}};return z("SvelteRegisterBlock",{block:i,id:pt.name,type:"if",source:"(9:2) {#if !approved}",ctx:t}),i}function Lt(t){const e={c:j,l:j,m:j,p:j,d:j};return z("SvelteRegisterBlock",{block:e,id:Lt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { AnnouncementImportance }',ctx:t}),e}function Ht(t){let e,s,n=t[2]+"";const i={c:function(){e=h("p"),s=new on(!1),this.h()},l:function(c){e=m(c,"P",{});var l=b(e);s=sn(l,!1),l.forEach(p),this.h()},h:function(){s.a=null,g(e,Ne,22,10,805)},m:function(c,l){U(c,e,l),s.m(n,e)},p:function(c,l){l&1&&n!==(n=c[2]+"")&&s.p(n)},d:function(c){c&&p(e)}};return z("SvelteRegisterBlock",{block:i,id:Ht.name,type:"then",source:"(19:59)            <!-- eslint-disable -->           <p>{@html changelogRendered}",ctx:t}),i}function Qt(t){const e={c:j,l:j,m:j,p:j,d:j};return z("SvelteRegisterBlock",{block:e,id:Qt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { AnnouncementImportance }',ctx:t}),e}function ht(t){let e,s,n,i,o,c,l,r=!t[1]&&pt(t),u={ctx:t,current:null,token:null,hasCatch:!1,pending:Qt,then:Ht,catch:Lt,value:2};St(c=lt(t[0]),u);const $={c:function(){e=h("div"),r&&r.c(),s=P(),n=h("div"),i=h("section"),o=h("div"),u.block.c(),this.h()},l:function(w){e=m(w,"DIV",{});var f=b(e);r&&r.l(f),s=R(f),n=m(f,"DIV",{class:!0});var d=b(n);i=m(d,"SECTION",{});var D=b(i);o=m(D,"DIV",{class:!0});var N=b(o);u.block.l(N),N.forEach(p),D.forEach(p),d.forEach(p),f.forEach(p),this.h()},h:function(){y(o,"class","markdown-content break-words"),g(o,Ne,19,6,658),g(i,Ne,18,4,642),y(n,"class","card h-fit p-4"),g(n,Ne,17,2,609),g(e,Ne,9,0,248)},m:function(w,f){U(w,e,f),r&&r.m(e,null),a(e,s),a(e,n),a(n,i),a(i,o),u.block.m(o,u.anchor=null),u.mount=()=>o,u.anchor=null,l=!0},p:function(w,[f]){t=w,t[1]?r&&(st(),ne(r,1,1,()=>{r=null}),rt()):r?f&2&&Y(r,1):(r=pt(t),r.c(),Y(r,1),r.m(e,s)),u.ctx=t,f&1&&c!==(c=lt(t[0]))&&St(c,u)||nn(u,t,f)},i:function(w){l||(Y(r),l=!0)},o:function(w){ne(r),l=!1},d:function(w){w&&p(e),r&&r.d(),u.block.d(),u.token=null,u=null}};return z("SvelteRegisterBlock",{block:$,id:ht.name,type:"component",source:"",ctx:t}),$}function gn(t,e,s){let{$$slots:n={},$$scope:i}=e;yt("VersionDescription",n,[]);let{changelog:o}=e,{approved:c}=e;t.$$.on_mount.push(function(){o===void 0&&!("changelog"in e||t.$$.bound[t.$$.props.changelog])&&console.warn("<VersionDescription> was created without expected prop 'changelog'"),c===void 0&&!("approved"in e||t.$$.bound[t.$$.props.approved])&&console.warn("<VersionDescription> was created without expected prop 'approved'")});const l=["changelog","approved"];return Object.keys(e).forEach(r=>{!~l.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<VersionDescription> was created with unknown prop '${r}'`)}),t.$$set=r=>{"changelog"in r&&s(0,o=r.changelog),"approved"in r&&s(1,c=r.approved)},t.$capture_state=()=>({AnnouncementImportance:jt,markdown:lt,AnnouncementRow:Mt,changelog:o,approved:c}),t.$inject_state=r=>{"changelog"in r&&s(0,o=r.changelog),"approved"in r&&s(1,c=r.approved)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,c]}class Wt extends bt{constructor(e){super(e),Vt(this,e,gn,ht,xt,{changelog:0,approved:1}),z("SvelteRegisterComponent",{component:this,tagName:"VersionDescription",options:e,id:ht.name})}get changelog(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set changelog(e){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get approved(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set approved(e){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const T="src/lib/components/versions/VersionInfo.svelte";function mt(t){let e,s,n,i,o="Info",c,l,r,u=t[2]("entry.created-at")+"",$,v,w,f=ct(t[0].created_at)+"",d,D,N,x,C,k=t[2]("downloads")+"",_,V,le,ue=ft(t[0].downloads)+"",oe,$e,we,q,H,be,Q=t[2]("version")+"",Z,Ve,se,de=t[0].sml_version+"",ee,ae,xe,ie,B,me=t[2]("stability")+"",pe,K,De,X=t[0].stability+"",E,O,re,F,M,te=t[2]("size")+"",he,ge,ce,Pe=ut(t[0].size)+"",Be,Oe,Fe,ve,ye,Re=t[2]("hash")+"",Te,Je,Ke,Ae=t[0].hash+"",je;const Et={c:function(){e=h("div"),s=h("section"),n=h("div"),i=h("h3"),i.textContent=o,c=P(),l=h("span"),r=h("strong"),$=S(u),v=S(":"),w=P(),d=S(f),D=h("br"),N=P(),x=h("span"),C=h("strong"),_=S(k),V=S(":"),le=P(),oe=S(ue),$e=h("br"),we=P(),q=h("span"),H=h("strong"),be=S("SML "),Z=S(Q),Ve=S(":"),se=P(),ee=S(de),ae=h("br"),xe=P(),ie=h("span"),B=h("strong"),pe=S(me),K=S(":"),De=P(),E=S(X),O=h("br"),re=P(),F=h("span"),M=h("strong"),he=S(te),ge=S(":"),ce=P(),Be=S(Pe),Oe=h("br"),Fe=P(),ve=h("span"),ye=h("strong"),Te=S(Re),Je=S(":"),Ke=P(),je=S(Ae),this.h()},l:function(L){e=m(L,"DIV",{class:!0});var W=b(e);s=m(W,"SECTION",{});var kt=b(s);n=m(kt,"DIV",{class:!0});var G=b(n);i=m(G,"H3",{class:!0,"data-svelte-h":!0}),fe(i)!=="svelte-1p1x4o5"&&(i.textContent=o),c=R(G),l=m(G,"SPAN",{});var Me=b(l);r=m(Me,"STRONG",{});var Xe=b(r);$=I(Xe,u),v=I(Xe,":"),Xe.forEach(p),w=R(Me),d=I(Me,f),Me.forEach(p),D=m(G,"BR",{}),N=R(G),x=m(G,"SPAN",{});var Ge=b(x);C=m(Ge,"STRONG",{});var Ye=b(C);_=I(Ye,k),V=I(Ye,":"),Ye.forEach(p),le=R(Ge),oe=I(Ge,ue),Ge.forEach(p),$e=m(G,"BR",{}),we=R(G),q=m(G,"SPAN",{});var Ue=b(q);H=m(Ue,"STRONG",{});var ze=b(H);be=I(ze,"SML "),Z=I(ze,Q),Ve=I(ze,":"),ze.forEach(p),se=R(Ue),ee=I(Ue,de),Ue.forEach(p),ae=m(G,"BR",{}),xe=R(G),ie=m(G,"SPAN",{});var qe=b(ie);B=m(qe,"STRONG",{});var Ze=b(B);pe=I(Ze,me),K=I(Ze,":"),Ze.forEach(p),De=R(qe),E=I(qe,X),qe.forEach(p),O=m(G,"BR",{}),re=R(G),F=m(G,"SPAN",{});var Le=b(F);M=m(Le,"STRONG",{});var et=b(M);he=I(et,te),ge=I(et,":"),et.forEach(p),ce=R(Le),Be=I(Le,Pe),Le.forEach(p),Oe=m(G,"BR",{}),Fe=R(G),ve=m(G,"SPAN",{});var He=b(ve);ye=m(He,"STRONG",{});var tt=b(ye);Te=I(tt,Re),Je=I(tt,":"),tt.forEach(p),Ke=R(He),je=I(He,Ae),He.forEach(p),G.forEach(p),kt.forEach(p),W.forEach(p),this.h()},h:function(){y(i,"class","my-4 text-2xl font-bold"),g(i,T,13,6,291),g(r,T,14,12,349),g(l,T,14,6,343),g(D,T,14,94,431),g(C,T,15,12,450),g(x,T,15,6,444),g($e,T,15,88,526),g(H,T,16,12,545),g(q,T,16,6,539),g(ae,T,16,78,611),g(B,T,17,12,630),g(ie,T,17,6,624),g(O,T,17,74,692),g(M,T,18,12,711),g(F,T,18,6,705),g(Oe,T,18,77,776),g(ye,T,19,12,795),g(ve,T,19,6,789),y(n,"class","break-words text-lg"),g(n,T,12,4,251),g(s,T,11,2,237),y(e,"class","card p-4"),g(e,T,10,0,212)},m:function(L,W){U(L,e,W),a(e,s),a(s,n),a(n,i),a(n,c),a(n,l),a(l,r),a(r,$),a(r,v),a(l,w),a(l,d),a(n,D),a(n,N),a(n,x),a(x,C),a(C,_),a(C,V),a(x,le),a(x,oe),a(n,$e),a(n,we),a(n,q),a(q,H),a(H,be),a(H,Z),a(H,Ve),a(q,se),a(q,ee),a(n,ae),a(n,xe),a(n,ie),a(ie,B),a(B,pe),a(B,K),a(ie,De),a(ie,E),a(n,O),a(n,re),a(n,F),a(F,M),a(M,he),a(M,ge),a(F,ce),a(F,Be),a(n,Oe),a(n,Fe),a(n,ve),a(ve,ye),a(ye,Te),a(ye,Je),a(ve,Ke),a(ve,je)},p:function(L,[W]){W&4&&u!==(u=L[2]("entry.created-at")+"")&&J($,u),W&1&&f!==(f=ct(L[0].created_at)+"")&&J(d,f),W&4&&k!==(k=L[2]("downloads")+"")&&J(_,k),W&1&&ue!==(ue=ft(L[0].downloads)+"")&&J(oe,ue),W&4&&Q!==(Q=L[2]("version")+"")&&J(Z,Q),W&1&&de!==(de=L[0].sml_version+"")&&J(ee,de),W&4&&me!==(me=L[2]("stability")+"")&&J(pe,me),W&1&&X!==(X=L[0].stability+"")&&J(E,X),W&4&&te!==(te=L[2]("size")+"")&&J(he,te),W&1&&Pe!==(Pe=ut(L[0].size)+"")&&J(Be,Pe),W&4&&Re!==(Re=L[2]("hash")+"")&&J(Te,Re),W&1&&Ae!==(Ae=L[0].hash+"")&&J(je,Ae)},i:j,o:j,d:function(L){L&&p(e)}};return z("SvelteRegisterBlock",{block:Et,id:mt.name,type:"component",source:"",ctx:t}),Et}function vn(t,e,s){let n,i=j,o=()=>(i(),i=rn(u,v=>s(2,n=v)),u);t.$$.on_destroy.push(()=>i());let{$$slots:c={},$$scope:l}=e;yt("VersionInfo",c,[]);let{version:r}=e;const{t:u}=It();at(u,"t"),o(),t.$$.on_mount.push(function(){r===void 0&&!("version"in e||t.$$.bound[t.$$.props.version])&&console.warn("<VersionInfo> was created without expected prop 'version'")});const $=["version"];return Object.keys(e).forEach(v=>{!~$.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<VersionInfo> was created with unknown prop '${v}'`)}),t.$$set=v=>{"version"in v&&s(0,r=v.version)},t.$capture_state=()=>({prettyBytes:ut,prettyDate:ct,prettyNumber:ft,getTranslate:It,version:r,t:u,$t:n}),t.$inject_state=v=>{"version"in v&&s(0,r=v.version)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[r,u,n]}class Ft extends bt{constructor(e){super(e),Vt(this,e,vn,mt,xt,{version:0,t:1}),z("SvelteRegisterComponent",{component:this,tagName:"VersionInfo",options:e,id:mt.name})}get version(){throw new Error("<VersionInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set version(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Bt}=an,A="src/routes/mod/[modId]/version/[versionId]/+page.svelte";function Ot(t,e,s){const n=t.slice();return n[15]=e[s],n}function gt(t){let e,s;e=new Gt({props:{description:"Information for mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version,title:"Mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version},$$inline:!0});const n={c:function(){Ee(e.$$.fragment)},l:function(o){ke(e.$$.fragment,o)},m:function(o,c){Se(e,o,c),s=!0},p:function(o,c){const l={};c&1&&(l.description="Information for mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version),c&1&&(l.title="Mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version),e.$set(l)},i:function(o){s||(Y(e.$$.fragment,o),s=!0)},o:function(o){ne(e.$$.fragment,o),s=!1},d:function(o){Ie(e,o)}};return z("SvelteRegisterBlock",{block:n,id:gt.name,type:"if",source:"(60:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:t}),n}function Jt(t){let e,s;e=new qt({$$inline:!0});const n={c:function(){Ee(e.$$.fragment)},l:function(o){ke(e.$$.fragment,o)},m:function(o,c){Se(e,o,c),s=!0},p:j,i:function(o){s||(Y(e.$$.fragment,o),s=!0)},o:function(o){ne(e.$$.fragment,o),s=!1},d:function(o){Ie(e,o)}};return z("SvelteRegisterBlock",{block:n,id:Jt.name,type:"else",source:"(158:0) {:else}",ctx:t}),n}function Kt(t){let e,s,n,i=t[0].data.getVersion.mod.name+"",o,c,l=t[0].data.getVersion.version+"",r,u,$,v,w,f,d,D="download",N,x,C="Install",k,_,V,le="extension",ue,oe,$e="Back to Mod",we,q,H,be,Q,Z,Ve,se,de,ee,ae,xe,ie,B=t[1]&&vt(t);function me(X,E){return X[0].data.getVersion.targets.length!=0?en:Zt}let pe=me(t),K=pe(t);H=new Wt({props:{changelog:t[0].data.getVersion.changelog,approved:t[0].data.getVersion.approved},$$inline:!0}),Z=new Ft({props:{version:t[0].data.getVersion},$$inline:!0}),se=new Ut({props:{targets:t[0].data.getVersion.targets},$$inline:!0}),ee=new zt({props:{dependencies:t[0].data.getVersion.dependencies},$$inline:!0});const De={c:function(){e=h("div"),s=h("div"),n=h("h1"),o=S(i),c=S(`
        Version `),r=S(l),u=P(),$=h("div"),B&&B.c(),v=P(),K.c(),w=P(),f=h("button"),d=h("span"),d.textContent=D,N=P(),x=h("span"),x.textContent=C,k=P(),_=h("a"),V=h("span"),V.textContent=le,ue=P(),oe=h("span"),oe.textContent=$e,we=P(),q=h("div"),Ee(H.$$.fragment),be=P(),Q=h("div"),Ee(Z.$$.fragment),Ve=P(),Ee(se.$$.fragment),de=P(),Ee(ee.$$.fragment),this.h()},l:function(E){e=m(E,"DIV",{class:!0});var O=b(e);s=m(O,"DIV",{class:!0});var re=b(s);n=m(re,"H1",{class:!0});var F=b(n);o=I(F,i),c=I(F,`
        Version `),r=I(F,l),F.forEach(p),u=R(re),$=m(re,"DIV",{class:!0});var M=b($);B&&B.l(M),v=R(M),K.l(M),w=R(M),f=m(M,"BUTTON",{class:!0,title:!0});var te=b(f);d=m(te,"SPAN",{class:!0,"data-svelte-h":!0}),fe(d)!=="svelte-rqt9z7"&&(d.textContent=D),N=R(te),x=m(te,"SPAN",{"data-svelte-h":!0}),fe(x)!=="svelte-1bbhnfr"&&(x.textContent=C),te.forEach(p),k=R(M),_=m(M,"A",{class:!0,href:!0,title:!0});var he=b(_);V=m(he,"SPAN",{class:!0,"data-svelte-h":!0}),fe(V)!=="svelte-y4psqu"&&(V.textContent=le),ue=R(he),oe=m(he,"SPAN",{"data-svelte-h":!0}),fe(oe)!=="svelte-1tvol36"&&(oe.textContent=$e),he.forEach(p),M.forEach(p),re.forEach(p),we=R(O),q=m(O,"DIV",{class:!0});var ge=b(q);ke(H.$$.fragment,ge),be=R(ge),Q=m(ge,"DIV",{class:!0});var ce=b(Q);ke(Z.$$.fragment,ce),Ve=R(ce),ke(se.$$.fragment,ce),de=R(ce),ke(ee.$$.fragment,ce),ce.forEach(p),ge.forEach(p),O.forEach(p),this.h()},h:function(){y(n,"class","text-4xl font-bold"),g(n,A,82,6,2821),y(d,"class","material-icons"),g(d,A,145,10,5311),g(x,A,146,10,5366),y(f,"class","variant-ghost-primary btn"),y(f,"title","Install via Satisfactory Mod Manager"),g(f,A,141,8,5111),y(V,"class","material-icons"),g(V,A,152,10,5568),g(oe,A,153,10,5624),y(_,"class","variant-ghost-primary btn"),y(_,"href",_e+"/mod/"+t[2]),y(_,"title","View the description page for this mod"),g(_,A,148,8,5413),y($,"class","grid grid-flow-col gap-4"),g($,A,87,6,2967),y(s,"class","flex h-auto flex-wrap items-center justify-between"),g(s,A,81,4,2750),y(Q,"class","grid auto-rows-min grid-cols-1 gap-8"),g(Q,A,159,6,5869),y(q,"class","grid-auto-max grid auto-cols-fr gap-4"),g(q,A,157,4,5690),y(e,"class","grid gap-6 xlx:grid-flow-row"),g(e,A,80,2,2703)},m:function(E,O){U(E,e,O),a(e,s),a(s,n),a(n,o),a(n,c),a(n,r),a(s,u),a(s,$),B&&B.m($,null),a($,v),K.m($,null),a($,w),a($,f),a(f,d),a(f,N),a(f,x),a($,k),a($,_),a(_,V),a(_,ue),a(_,oe),a(e,we),a(e,q),Se(H,q,null),a(q,be),a(q,Q),Se(Z,Q,null),a(Q,Ve),Se(se,Q,null),a(Q,de),Se(ee,Q,null),ae=!0,xe||(ie=it(f,"click",t[11],!1,!1,!1,!1),xe=!0)},p:function(E,O){(!ae||O&1)&&i!==(i=E[0].data.getVersion.mod.name+"")&&J(o,i),(!ae||O&1)&&l!==(l=E[0].data.getVersion.version+"")&&J(r,l),E[1]?B?B.p(E,O):(B=vt(E),B.c(),B.m($,v)):B&&(B.d(1),B=null),pe===(pe=me(E))&&K?K.p(E,O):(K.d(1),K=pe(E),K&&(K.c(),K.m($,w)));const re={};O&1&&(re.changelog=E[0].data.getVersion.changelog),O&1&&(re.approved=E[0].data.getVersion.approved),H.$set(re);const F={};O&1&&(F.version=E[0].data.getVersion),Z.$set(F);const M={};O&1&&(M.targets=E[0].data.getVersion.targets),se.$set(M);const te={};O&1&&(te.dependencies=E[0].data.getVersion.dependencies),ee.$set(te)},i:function(E){ae||(Y(H.$$.fragment,E),Y(Z.$$.fragment,E),Y(se.$$.fragment,E),Y(ee.$$.fragment,E),ae=!0)},o:function(E){ne(H.$$.fragment,E),ne(Z.$$.fragment,E),ne(se.$$.fragment,E),ne(ee.$$.fragment,E),ae=!1},d:function(E){E&&p(e),B&&B.d(),K.d(),Ie(H),Ie(Z),Ie(se),Ie(ee),xe=!1,ie()}};return z("SvelteRegisterBlock",{block:De,id:Kt.name,type:"if",source:"(71:35) ",ctx:t}),De}function Xt(t){let e,s,n=t[0].error.message+"",i;const o={c:function(){e=h("p"),s=S("Oh no... "),i=S(n),this.h()},l:function(l){e=m(l,"P",{});var r=b(e);s=I(r,"Oh no... "),i=I(r,n),r.forEach(p),this.h()},h:function(){g(e,A,78,2,2624)},m:function(l,r){U(l,e,r),a(e,s),a(e,i)},p:function(l,r){r&1&&n!==(n=l[0].error.message+"")&&J(i,n)},i:j,o:j,d:function(l){l&&p(e)}};return z("SvelteRegisterBlock",{block:o,id:Xt.name,type:"if",source:"(69:25) ",ctx:t}),o}function Yt(t){let e,s="Loading...";const n={c:function(){e=h("p"),e.textContent=s,this.h()},l:function(o){e=m(o,"P",{"data-svelte-h":!0}),fe(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h:function(){g(e,A,76,2,2578)},m:function(o,c){U(o,e,c)},p:j,i:j,o:j,d:function(o){o&&p(e)}};return z("SvelteRegisterBlock",{block:n,id:Yt.name,type:"if",source:"(67:0) {#if $version.fetching}",ctx:t}),n}function vt(t){let e,s,n="edit_document",i,o,c,l,r="delete",u,$,v;const w={c:function(){e=h("button"),s=h("span"),s.textContent=n,i=S(`
            Edit`),o=P(),c=h("button"),l=h("span"),l.textContent=r,u=S(`
            Delete`),this.h()},l:function(d){e=m(d,"BUTTON",{class:!0});var D=b(e);s=m(D,"SPAN",{class:!0,"data-svelte-h":!0}),fe(s)!=="svelte-1x8b46e"&&(s.textContent=n),i=I(D,`
            Edit`),D.forEach(p),o=R(d),c=m(d,"BUTTON",{class:!0});var N=b(c);l=m(N,"SPAN",{class:!0,"data-svelte-h":!0}),fe(l)!=="svelte-120hsax"&&(l.textContent=r),u=I(N,`
            Delete`),N.forEach(p),this.h()},h:function(){y(s,"class","material-icons pr-2"),g(s,A,92,12,3203),y(e,"class","variant-ghost-primary btn"),g(e,A,89,10,3042),y(l,"class","material-icons pr-2"),g(l,A,96,12,3409),y(c,"class","variant-ghost-primary btn"),g(c,A,95,10,3305)},m:function(d,D){U(d,e,D),a(e,s),a(e,i),U(d,o,D),U(d,c,D),a(c,l),a(c,u),$||(v=[it(e,"click",t[9],!1,!1,!1,!1),it(c,"click",t[10],!1,!1,!1,!1)],$=!0)},p:j,d:function(d){d&&(p(e),p(o),p(c)),$=!1,cn(v)}};return z("SvelteRegisterBlock",{block:w,id:vt.name,type:"if",source:"(80:8) {#if canUserEdit}",ctx:t}),w}function Zt(t){let e,s,n,i,o;const c={c:function(){e=h("a"),s=S("View"),n=P(),i=h("a"),o=S("Download"),this.h()},l:function(r){e=m(r,"A",{class:!0,href:!0});var u=b(e);s=I(u,"View"),u.forEach(p),n=R(r),i=m(r,"A",{class:!0,href:!0});var $=b(i);o=I($,"Download"),$.forEach(p),this.h()},h:function(){y(e,"class","variant-ghost-primary btn"),y(e,"href",_e+"/mod/"+t[2]+"/version/"+t[3]),g(e,A,136,10,4828),y(i,"class","variant-ghost-primary btn"),y(i,"href",We+"/mod/"+t[2]+"/versions/"+t[3]+"/download"),g(i,A,137,10,4940)},m:function(r,u){U(r,e,u),a(e,s),U(r,n,u),U(r,i,u),a(i,o)},p:j,d:function(r){r&&(p(e),p(n),p(i))}};return z("SvelteRegisterBlock",{block:c,id:Zt.name,type:"else",source:"(127:8) {:else}",ctx:t}),c}function en(t){let e,s,n="Download...",i,o,c="arrow_drop_down",l,r,u,$,v,w,f=At(t[0].data.getVersion.targets),d=[];for(let N=0;N<f.length;N+=1)d[N]=$t(Ot(t,f,N));const D={c:function(){e=h("button"),s=h("span"),s.textContent=n,i=P(),o=h("span"),o.textContent=c,l=P(),r=h("div"),u=h("nav"),$=h("ul");for(let x=0;x<d.length;x+=1)d[x].c();this.h()},l:function(x){e=m(x,"BUTTON",{class:!0,title:!0});var C=b(e);s=m(C,"SPAN",{"data-svelte-h":!0}),fe(s)!=="svelte-ejqs88"&&(s.textContent=n),i=R(C),o=m(C,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),fe(o)!=="svelte-dpxqae"&&(o.textContent=c),C.forEach(p),l=R(x),r=m(x,"DIV",{class:!0,"data-popup":!0});var k=b(r);u=m(k,"NAV",{class:!0});var _=b(u);$=m(_,"UL",{});var V=b($);for(let le=0;le<d.length;le+=1)d[le].l(V);V.forEach(p),_.forEach(p),k.forEach(p),this.h()},h:function(){g(s,A,109,12,3888),y(o,"class","material-icons"),fn(o,"margin","0"),g(o,A,110,12,3925),y(e,"class","variant-ghost-primary btn"),y(e,"title","Download a specific release target of this mod"),g(e,A,100,10,3568),g($,A,115,14,4148),y(u,"class","list-nav"),g(u,A,114,12,4111),y(r,"class","card z-10 w-72 shadow-xl"),y(r,"data-popup","versionArchDropdown"),g(r,A,113,10,4027)},m:function(x,C){U(x,e,C),a(e,s),a(e,i),a(e,o),U(x,l,C),U(x,r,C),a(r,u),a(u,$);for(let k=0;k<d.length;k+=1)d[k]&&d[k].m($,null);v||(w=un(Tt.call(null,e,{event:"focus-click",target:"versionArchDropdown",placement:"bottom",closeQuery:"a"})),v=!0)},p:function(x,C){if(C&13){f=At(x[0].data.getVersion.targets);let k;for(k=0;k<f.length;k+=1){const _=Ot(x,f,k);d[k]?d[k].p(_,C):(d[k]=$t(_),d[k].c(),d[k].m($,null))}for(;k<d.length;k+=1)d[k].d(1);d.length=f.length}},d:function(x){x&&(p(e),p(l),p(r)),dn(d,x),v=!1,w()}};return z("SvelteRegisterBlock",{block:D,id:en.name,type:"if",source:"(91:8) {#if $version.data.getVersion.targets.length != 0}",ctx:t}),D}function $t(t){let e,s,n,i,o=dt(t[15].targetName)+"",c,l,r;const u={c:function(){e=h("li"),s=h("a"),n=h("span"),i=S("Download "),c=S(o),r=P(),this.h()},l:function(v){e=m(v,"LI",{});var w=b(e);s=m(w,"A",{class:!0,href:!0});var f=b(s);n=m(f,"SPAN",{});var d=b(n);i=I(d,"Download "),c=I(d,o),d.forEach(p),f.forEach(p),r=R(w),w.forEach(p),this.h()},h:function(){g(n,A,128,22,4617),y(s,"class","w-full"),y(s,"href",l=We+"/mod/"+t[2]+"/versions/"+t[3]+"/"+t[15].targetName+"/download"),g(s,A,118,20,4263),g(e,A,117,18,4238)},m:function(v,w){U(v,e,w),a(e,s),a(s,n),a(n,i),a(n,c),a(e,r)},p:function(v,w){w&1&&o!==(o=dt(v[15].targetName)+"")&&J(c,o),w&1&&l!==(l=We+"/mod/"+v[2]+"/versions/"+v[3]+"/"+v[15].targetName+"/download")&&y(s,"href",l)},d:function(v){v&&p(e)}};return z("SvelteRegisterBlock",{block:u,id:$t.name,type:"each",source:"(108:16) {#each $version.data.getVersion.targets as target}",ctx:t}),u}function wt(t){let e,s,n,i,o,c,l=!t[0].fetching&&!t[0].error&&t[0].data.getVersion&&gt(t);const r=[Yt,Xt,Kt,Jt],u=[];function $(w,f){return w[0].fetching?0:w[0].error?1:w[0].data.getVersion?2:3}n=$(t),i=u[n]=r[n](t);const v={c:function(){l&&l.c(),e=Qe(),s=P(),i.c(),o=Qe()},l:function(f){const d=ln("svelte-7zfw29",document.head);l&&l.l(d),e=Qe(),d.forEach(p),s=R(f),i.l(f),o=Qe()},m:function(f,d){l&&l.m(document.head,null),a(document.head,e),U(f,s,d),u[n].m(f,d),U(f,o,d),c=!0},p:function(f,[d]){!f[0].fetching&&!f[0].error&&f[0].data.getVersion?l?(l.p(f,d),d&1&&Y(l,1)):(l=gt(f),l.c(),Y(l,1),l.m(e.parentNode,e)):l&&(st(),ne(l,1,1,()=>{l=null}),rt());let D=n;n=$(f),n===D?u[n].p(f,d):(st(),ne(u[D],1,1,()=>{u[D]=null}),rt(),i=u[n],i?i.p(f,d):(i=u[n]=r[n](f),i.c()),Y(i,1),i.m(o.parentNode,o))},i:function(f){c||(Y(l),Y(i),c=!0)},o:function(f){ne(l),ne(i),c=!1},d:function(f){f&&(p(s),p(o)),l&&l.d(f),p(e),u[n].d(f)}};return z("SvelteRegisterBlock",{block:v,id:wt.name,type:"component",source:"",ctx:t}),v}function $n(t,e,s){let n,i,o;at(ot,"user"),Dt(t,ot,V=>s(8,i=V));let{$$slots:c={},$$scope:l}=e;yt("Page",c,[]);let{data:r}=e;const{modId:u,versionId:$,version:v}=r;at(v,"version"),Dt(t,v,V=>s(0,o=V));const w=Nt(),f=Pt(),d=()=>{w.mutation(Ct,{versionId:$}).toPromise().then(V=>{V.error?(console.error(V.error.message),f.trigger({message:"Error deleting version: "+V.error.message,background:"variant-filled-error",autohide:!1})):(f.trigger({message:"Version deleted",background:"variant-filled-success",timeout:5e3}),nt(_e+"/mod/"+u))})},D={type:"confirm",title:"Delete Version?",body:"Are you sure you wish to delete this version?",response:V=>{V&&d()}},N=Rt();t.$$.on_mount.push(function(){r===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&Bt.warn("<Page> was created without expected prop 'data'")});const x=["data"];Object.keys(e).forEach(V=>{!~x.indexOf(V)&&V.slice(0,2)!=="$$"&&V!=="slot"&&Bt.warn(`<Page> was created with unknown prop '${V}'`)});const C=()=>nt(_e+"/mod/"+u+"/version/"+$+"/edit"),k=()=>N.trigger(D),_=()=>_t(o.data.getVersion.mod.mod_reference);return t.$$set=V=>{"data"in V&&s(7,r=V.data)},t.$capture_state=()=>({DeleteVersionDocument:Ct,VersionDescription:Wt,VersionInfo:Ft,MetaDescriptors:Gt,API_REST:We,goto:nt,user:ot,base:_e,installMod:_t,prettyTarget:dt,VersionTargetSupportGrid:Ut,VersionDependenciesGrid:zt,getContextClient:Nt,getModalStore:Rt,getToastStore:Pt,popup:Tt,Page404:qt,data:r,modId:u,versionId:$,version:v,client:w,toastStore:f,deleteVersionFn:d,deleteModal:D,modalStore:N,canUserEdit:n,$user:i,$version:o}),t.$inject_state=V=>{"data"in V&&s(7,r=V.data),"canUserEdit"in V&&s(1,n=V.canUserEdit)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&257&&s(1,n=i?.roles?.deleteContent||o?.data?.getVersion.mod?.authors?.findIndex(V=>V.user_id==i?.id)>=0)},[o,n,u,$,v,D,N,r,i,C,k,_]}class An extends bt{constructor(e){super(e),Vt(this,e,$n,wt,xt,{data:7}),z("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:wt.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{An as component,Rn as universal};
//# sourceMappingURL=19.EI1KuVbq.js.map
