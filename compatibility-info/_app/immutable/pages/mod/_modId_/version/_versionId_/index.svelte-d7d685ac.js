import{S as Rt,i as _t,s as Mt,bb as re,Z as S,_ as N,$ as k,m as d,t as p,a1 as R,bc as oe,bd as qt,e as E,c as b,d as T,f as $,a7 as st,j as w,be as le,q as O,aa as v,a as I,ab as x,g as D,a5 as f,ac as tt,aC as ie,b as dt,aV as fe,l as mt,al as Ft,aB as $e,k as pt,r as ce,w as ue,u as Pt,aH as at,ad as se,ae,b2 as Tt,aR as At,aA as de,ag as me,aF as pe,aG as ge,ao as he,aM as ve,ap as xe}from"../../../../../chunks/vendor-5faff0be.js";import{M as we}from"../../../../../chunks/MetaDescriptors-5e0585a5.js";import{l as ye}from"../../../../../chunks/gql-24499839.js";import{P as Ve,R as Ee}from"../../../../../chunks/graphql-39b507e4.js";import{p as be}from"../../../../../chunks/routing-c6322149.js";import{m as jt}from"../../../../../chunks/markdown-6a2ff7f0.js";import{p as Zt,a as Jt,b as Kt,c as Qt}from"../../../../../chunks/formatting-d1753ec3.js";import{a as Dt}from"../../../../../chunks/api-bb6d5972.js";import{a as Ie}from"../../../../../chunks/user-cee14147.js";import{T as De}from"../../../../../chunks/Toast-13eea52f.js";import{g as Ut}from"../../../../../chunks/navigation-ce539261.js";import{b as gt}from"../../../../../chunks/paths-1c47712a.js";import{i as Se}from"../../../../../chunks/launcher-aafc45b7.js";import"../../../../../chunks/stores-a6f790a9.js";import"../../../../../chunks/global-fb89089b.js";import"../../../../../chunks/extras-8984d02f.js";import"../../../../../chunks/singletons-cdeec3fd.js";function Ne(a){return{c:O,l:O,m:O,p:O,d:O}}function ke(a){let t,n=a[1]+"";return{c(){t=E("p")},l(e){t=b(e,"P",{});var o=T(t);o.forEach($)},m(e,o){w(e,t,o),t.innerHTML=n},p(e,o){o&1&&n!==(n=e[1]+"")&&(t.innerHTML=n)},d(e){e&&$(t)}}}function Re(a){return{c:O,l:O,m:O,p:O,d:O}}function _e(a){let t,n,e={ctx:a,current:null,token:null,hasCatch:!1,pending:Re,then:ke,catch:Ne,value:1};return qt(n=jt(a[0]),e),{c(){t=E("div"),e.block.c(),this.h()},l(o){t=b(o,"DIV",{class:!0});var r=T(t);e.block.l(r),r.forEach($),this.h()},h(){st(t,"class","markdown-content")},m(o,r){w(o,t,r),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null},p(o,r){a=o,e.ctx=a,r&1&&n!==(n=jt(a[0]))&&qt(n,e)||le(e,a,r)},d(o){o&&$(t),e.block.d(),e.token=null,e=null}}}function Me(a){let t,n;return t=new oe({props:{$$slots:{default:[_e]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,o){const r={};o&5&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Pe(a){let t,n;return t=new re({props:{class:"h-fit",$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,[o]){const r={};o&5&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Te(a,t,n){let{changelog:e}=t;return a.$$set=o=>{"changelog"in o&&n(0,e=o.changelog)},[e]}class Ae extends Rt{constructor(t){super(),_t(this,t,Te,Pe,Mt,{changelog:0})}}function Oe(a){let t,n,e,o,r,s,l,i,m=Zt(a[0].created_at)+"",g,u,y,_,H,L,K,C=Jt(a[0].downloads)+"",et,z,q,Q,F,j,nt,Z=a[0].sml_version+"",B,V,rt,M,lt,W,$t,A=a[0].stability+"",ct,ut,c,h,J,Y,G,U=Kt(a[0].size)+"",ot,it,St,ft,ht,Nt,kt,vt=a[0].hash+"",xt;return{c(){t=E("div"),n=E("h3"),e=v("Info"),o=I(),r=E("span"),s=E("strong"),l=v("Created:"),i=I(),g=v(m),u=E("br"),y=I(),_=E("span"),H=E("strong"),L=v("Downloads:"),K=I(),et=v(C),z=E("br"),q=I(),Q=E("span"),F=E("strong"),j=v("SML Version:"),nt=I(),B=v(Z),V=E("br"),rt=I(),M=E("span"),lt=E("strong"),W=v("Stability:"),$t=I(),ct=v(A),ut=E("br"),c=I(),h=E("span"),J=E("strong"),Y=v("Size:"),G=I(),ot=v(U),it=E("br"),St=I(),ft=E("span"),ht=E("strong"),Nt=v("Hash:"),kt=I(),xt=v(vt),this.h()},l(X){t=b(X,"DIV",{class:!0});var P=T(t);n=b(P,"H3",{class:!0});var Ot=T(n);e=x(Ot,"Info"),Ot.forEach($),o=D(P),r=b(P,"SPAN",{});var wt=T(r);s=b(wt,"STRONG",{});var Ct=T(s);l=x(Ct,"Created:"),Ct.forEach($),i=D(wt),g=x(wt,m),wt.forEach($),u=b(P,"BR",{}),y=D(P),_=b(P,"SPAN",{});var yt=T(_);H=b(yt,"STRONG",{});var Bt=T(H);L=x(Bt,"Downloads:"),Bt.forEach($),K=D(yt),et=x(yt,C),yt.forEach($),z=b(P,"BR",{}),q=D(P),Q=b(P,"SPAN",{});var Vt=T(Q);F=b(Vt,"STRONG",{});var Gt=T(F);j=x(Gt,"SML Version:"),Gt.forEach($),nt=D(Vt),B=x(Vt,Z),Vt.forEach($),V=b(P,"BR",{}),rt=D(P),M=b(P,"SPAN",{});var Et=T(M);lt=b(Et,"STRONG",{});var Ht=T(lt);W=x(Ht,"Stability:"),Ht.forEach($),$t=D(Et),ct=x(Et,A),Et.forEach($),ut=b(P,"BR",{}),c=D(P),h=b(P,"SPAN",{});var bt=T(h);J=b(bt,"STRONG",{});var Lt=T(J);Y=x(Lt,"Size:"),Lt.forEach($),G=D(bt),ot=x(bt,U),bt.forEach($),it=b(P,"BR",{}),St=D(P),ft=b(P,"SPAN",{});var It=T(ft);ht=b(It,"STRONG",{});var zt=T(ht);Nt=x(zt,"Hash:"),zt.forEach($),kt=D(It),xt=x(It,vt),It.forEach($),P.forEach($),this.h()},h(){st(n,"class","text-2xl my-4 font-bold"),st(t,"class","text-lg break-words")},m(X,P){w(X,t,P),f(t,n),f(n,e),f(t,o),f(t,r),f(r,s),f(s,l),f(r,i),f(r,g),f(t,u),f(t,y),f(t,_),f(_,H),f(H,L),f(_,K),f(_,et),f(t,z),f(t,q),f(t,Q),f(Q,F),f(F,j),f(Q,nt),f(Q,B),f(t,V),f(t,rt),f(t,M),f(M,lt),f(lt,W),f(M,$t),f(M,ct),f(t,ut),f(t,c),f(t,h),f(h,J),f(J,Y),f(h,G),f(h,ot),f(t,it),f(t,St),f(t,ft),f(ft,ht),f(ht,Nt),f(ft,kt),f(ft,xt)},p(X,P){P&1&&m!==(m=Zt(X[0].created_at)+"")&&tt(g,m),P&1&&C!==(C=Jt(X[0].downloads)+"")&&tt(et,C),P&1&&Z!==(Z=X[0].sml_version+"")&&tt(B,Z),P&1&&A!==(A=X[0].stability+"")&&tt(ct,A),P&1&&U!==(U=Kt(X[0].size)+"")&&tt(ot,U),P&1&&vt!==(vt=X[0].hash+"")&&tt(xt,vt)},d(X){X&&$(t)}}}function Ce(a){let t,n;return t=new oe({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,o){const r={};o&3&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Be(a){let t,n;return t=new re({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,[o]){const r={};o&3&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Ge(a,t,n){let{version:e}=t;return a.$$set=o=>{"version"in o&&n(0,e=o.version)},[e]}class He extends Rt{constructor(t){super(),_t(this,t,Ge,Be,Mt,{version:0})}}function Wt(a,t,n){const e=a.slice();return e[22]=t[n],e}function Xt(a){let t,n;return t=new we({props:{description:"Information for mod version "+a[3].data.getVersion.mod.name+" "+a[3].data.getVersion.version,title:"Mod version "+a[3].data.getVersion.mod.name+" "+a[3].data.getVersion.version}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,o){const r={};o&8&&(r.description="Information for mod version "+e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version),o&8&&(r.title="Mod version "+e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Le(a){let t;return{c(){t=v("404")},l(n){t=x(n,"404")},m(n,e){w(n,t,e)},p:O,i:O,o:O,d(n){n&&$(t)}}}function ze(a){let t,n,e,o=a[3].data.getVersion.mod.name+"",r,s,l=a[3].data.getVersion.version+"",i,m,g,u,y,_,H,L,K,C,et,z,q,Q,F,j,nt,Z,B,V,rt,M=a[7]&&Yt(a);const lt=[Ke,Je],W=[];function $t(c,h){return c[3].data.getVersion.arch.length!=0?0:1}y=$t(a),_=W[y]=lt[y](a),L=new at({props:{variant:"outlined",$$slots:{default:[an]},$$scope:{ctx:a}}}),L.$on("click",a[16]),C=new at({props:{variant:"outlined",href:gt+"/mod/"+a[0],$$slots:{default:[$n]},$$scope:{ctx:a}}}),q=new Ae({props:{changelog:a[3].data.getVersion.changelog}}),j=new He({props:{version:a[3].data.getVersion}});let A=a[7]&&ee(a);function ct(c){a[20](c)}let ut={$$slots:{default:[gn]},$$scope:{ctx:a}};return a[5]!==void 0&&(ut.running=a[5]),B=new De({props:ut}),Pt.push(()=>se(B,"running",ct)),{c(){t=E("div"),n=E("div"),e=E("h1"),r=v(o),s=v(`
        Version `),i=v(l),m=I(),g=E("div"),M&&M.c(),u=I(),_.c(),H=I(),S(L.$$.fragment),K=I(),S(C.$$.fragment),et=I(),z=E("div"),S(q.$$.fragment),Q=I(),F=E("div"),S(j.$$.fragment),nt=I(),A&&A.c(),Z=I(),S(B.$$.fragment),this.h()},l(c){t=b(c,"DIV",{class:!0});var h=T(t);n=b(h,"DIV",{class:!0});var J=T(n);e=b(J,"H1",{class:!0});var Y=T(e);r=x(Y,o),s=x(Y,`
        Version `),i=x(Y,l),Y.forEach($),m=D(J),g=b(J,"DIV",{class:!0});var G=T(g);M&&M.l(G),u=D(G),_.l(G),H=D(G),N(L.$$.fragment,G),K=D(G),N(C.$$.fragment,G),G.forEach($),J.forEach($),et=D(h),z=b(h,"DIV",{class:!0});var U=T(z);N(q.$$.fragment,U),Q=D(U),F=b(U,"DIV",{class:!0});var ot=T(F);N(j.$$.fragment,ot),ot.forEach($),U.forEach($),h.forEach($),nt=D(c),A&&A.l(c),Z=D(c),N(B.$$.fragment,c),this.h()},h(){st(e,"class","text-4xl font-bold"),st(g,"class","grid grid-flow-col gap-4"),st(n,"class","flex flex-wrap h-auto justify-between items-center"),st(F,"class","grid grid-cols-1 auto-rows-min gap-8"),st(z,"class","grid grid-auto-max auto-cols-fr gap-4"),st(t,"class","grid gap-6 xlx:grid-flow-row")},m(c,h){w(c,t,h),f(t,n),f(n,e),f(e,r),f(e,s),f(e,i),f(n,m),f(n,g),M&&M.m(g,null),f(g,u),W[y].m(g,null),f(g,H),k(L,g,null),f(g,K),k(C,g,null),f(t,et),f(t,z),k(q,z,null),f(z,Q),f(z,F),k(j,F,null),w(c,nt,h),A&&A.m(c,h),w(c,Z,h),k(B,c,h),rt=!0},p(c,h){(!rt||h&8)&&o!==(o=c[3].data.getVersion.mod.name+"")&&tt(r,o),(!rt||h&8)&&l!==(l=c[3].data.getVersion.version+"")&&tt(i,l),c[7]?M?(M.p(c,h),h&128&&d(M,1)):(M=Yt(c),M.c(),d(M,1),M.m(g,u)):M&&(pt(),p(M,1,1,()=>{M=null}),mt());let J=y;y=$t(c),y===J?W[y].p(c,h):(pt(),p(W[J],1,1,()=>{W[J]=null}),mt(),_=W[y],_?_.p(c,h):(_=W[y]=lt[y](c),_.c()),d(_,1),_.m(g,H));const Y={};h&33554432&&(Y.$$scope={dirty:h,ctx:c}),L.$set(Y);const G={};h&1&&(G.href=gt+"/mod/"+c[0]),h&33554432&&(G.$$scope={dirty:h,ctx:c}),C.$set(G);const U={};h&8&&(U.changelog=c[3].data.getVersion.changelog),q.$set(U);const ot={};h&8&&(ot.version=c[3].data.getVersion),j.$set(ot),c[7]?A?(A.p(c,h),h&128&&d(A,1)):(A=ee(c),A.c(),d(A,1),A.m(Z.parentNode,Z)):A&&(pt(),p(A,1,1,()=>{A=null}),mt());const it={};h&33554448&&(it.$$scope={dirty:h,ctx:c}),!V&&h&32&&(V=!0,it.running=c[5],ae(()=>V=!1)),B.$set(it)},i(c){rt||(d(M),d(_),d(L.$$.fragment,c),d(C.$$.fragment,c),d(q.$$.fragment,c),d(j.$$.fragment,c),d(A),d(B.$$.fragment,c),rt=!0)},o(c){p(M),p(_),p(L.$$.fragment,c),p(C.$$.fragment,c),p(q.$$.fragment,c),p(j.$$.fragment,c),p(A),p(B.$$.fragment,c),rt=!1},d(c){c&&$(t),M&&M.d(),W[y].d(),R(L),R(C),R(q),R(j),c&&$(nt),A&&A.d(c),c&&$(Z),R(B,c)}}}function qe(a){let t,n,e=a[3].error.message+"",o;return{c(){t=E("p"),n=v("Oh no... "),o=v(e)},l(r){t=b(r,"P",{});var s=T(t);n=x(s,"Oh no... "),o=x(s,e),s.forEach($)},m(r,s){w(r,t,s),f(t,n),f(t,o)},p(r,s){s&8&&e!==(e=r[3].error.message+"")&&tt(o,e)},i:O,o:O,d(r){r&&$(t)}}}function Fe(a){let t,n;return{c(){t=E("p"),n=v("Loading...")},l(e){t=b(e,"P",{});var o=T(t);n=x(o,"Loading..."),o.forEach($)},m(e,o){w(e,t,o),f(t,n)},p:O,i:O,o:O,d(e){e&&$(t)}}}function Yt(a){let t,n,e,o;return t=new at({props:{variant:"outlined",$$slots:{default:[je]},$$scope:{ctx:a}}}),t.$on("click",a[12]),e=new at({props:{variant:"outlined",$$slots:{default:[Ze]},$$scope:{ctx:a}}}),e.$on("click",a[13]),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(r){N(t.$$.fragment,r),n=D(r),N(e.$$.fragment,r)},m(r,s){k(t,r,s),w(r,n,s),k(e,r,s),o=!0},p(r,s){const l={};s&33554432&&(l.$$scope={dirty:s,ctx:r}),t.$set(l);const i={};s&33554432&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),o=!1},d(r){R(t,r),r&&$(n),R(e,r)}}}function je(a){let t;return{c(){t=v("Edit")},l(n){t=x(n,"Edit")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function Ze(a){let t;return{c(){t=v("Delete")},l(n){t=x(n,"Delete")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function Je(a){let t,n,e,o;return t=new at({props:{variant:"outlined",href:gt+"/mod/"+a[0]+"/version/"+a[1],$$slots:{default:[Qe]},$$scope:{ctx:a}}}),e=new at({props:{variant:"outlined",href:Dt+"/mod/"+a[0]+"/versions/"+a[1]+"/download",$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(r){N(t.$$.fragment,r),n=D(r),N(e.$$.fragment,r)},m(r,s){k(t,r,s),w(r,n,s),k(e,r,s),o=!0},p(r,s){const l={};s&3&&(l.href=gt+"/mod/"+r[0]+"/version/"+r[1]),s&33554432&&(l.$$scope={dirty:s,ctx:r}),t.$set(l);const i={};s&3&&(i.href=Dt+"/mod/"+r[0]+"/versions/"+r[1]+"/download"),s&33554432&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),o=!1},d(r){R(t,r),r&&$(n),R(e,r)}}}function Ke(a){let t,n,e,o;t=new at({props:{variant:"outlined",$$slots:{default:[Ye]},$$scope:{ctx:a}}}),t.$on("click",a[14]);let r={anchorCorner:"BOTTOM_LEFT",$$slots:{default:[rn]},$$scope:{ctx:a}};return e=new me({props:r}),a[15](e),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(s){N(t.$$.fragment,s),n=D(s),N(e.$$.fragment,s)},m(s,l){k(t,s,l),w(s,n,l),k(e,s,l),o=!0},p(s,l){const i={};l&33554432&&(i.$$scope={dirty:l,ctx:s}),t.$set(i);const m={};l&33554443&&(m.$$scope={dirty:l,ctx:s}),e.$set(m)},i(s){o||(d(t.$$.fragment,s),d(e.$$.fragment,s),o=!0)},o(s){p(t.$$.fragment,s),p(e.$$.fragment,s),o=!1},d(s){R(t,s),s&&$(n),a[15](null),R(e,s)}}}function Qe(a){let t;return{c(){t=v("View")},l(n){t=x(n,"View")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function Ue(a){let t;return{c(){t=v("Download")},l(n){t=x(n,"Download")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function We(a){let t;return{c(){t=v("Download")},l(n){t=x(n,"Download")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function Xe(a){let t;return{c(){t=v("arrow_drop_down")},l(n){t=x(n,"arrow_drop_down")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function Ye(a){let t,n,e,o;return t=new Tt({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),e=new At({props:{class:"material-icons",style:"margin: 0;",$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(r){N(t.$$.fragment,r),n=D(r),N(e.$$.fragment,r)},m(r,s){k(t,r,s),w(r,n,s),k(e,r,s),o=!0},p(r,s){const l={};s&33554432&&(l.$$scope={dirty:s,ctx:r}),t.$set(l);const i={};s&33554432&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),o=!1},d(r){R(t,r),r&&$(n),R(e,r)}}}function tn(a){let t,n=Qt(a[22].platform)+"",e;return{c(){t=v("Download "),e=v(n)},l(o){t=x(o,"Download "),e=x(o,n)},m(o,r){w(o,t,r),w(o,e,r)},p(o,r){r&8&&n!==(n=Qt(o[22].platform)+"")&&tt(e,n)},d(o){o&&$(t),o&&$(e)}}}function en(a){let t,n,e;return t=new at({props:{variant:"outlined",class:"w-full",href:Dt+"/mod/"+a[0]+"/versions/"+a[1]+"/"+a[22].platform+"/download",$$slots:{default:[tn]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment),n=I()},l(o){N(t.$$.fragment,o),n=D(o)},m(o,r){k(t,o,r),w(o,n,r),e=!0},p(o,r){const s={};r&11&&(s.href=Dt+"/mod/"+o[0]+"/versions/"+o[1]+"/"+o[22].platform+"/download"),r&33554440&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){e||(d(t.$$.fragment,o),e=!0)},o(o){p(t.$$.fragment,o),e=!1},d(o){R(t,o),o&&$(n)}}}function te(a){let t,n;return t=new xe({props:{$$slots:{default:[en]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,o){const r={};o&33554443&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function nn(a){let t,n,e=a[3].data.getVersion.arch,o=[];for(let s=0;s<e.length;s+=1)o[s]=te(Wt(a,e,s));const r=s=>p(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();t=dt()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);t=dt()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);w(s,t,l),n=!0},p(s,l){if(l&11){e=s[3].data.getVersion.arch;let i;for(i=0;i<e.length;i+=1){const m=Wt(s,e,i);o[i]?(o[i].p(m,l),d(o[i],1)):(o[i]=te(m),o[i].c(),d(o[i],1),o[i].m(t.parentNode,t))}for(pt(),i=e.length;i<o.length;i+=1)r(i);mt()}},i(s){if(!n){for(let l=0;l<e.length;l+=1)d(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)p(o[l]);n=!1},d(s){ve(o,s),s&&$(t)}}}function rn(a){let t,n;return t=new he({props:{$$slots:{default:[nn]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){k(t,e,o),n=!0},p(e,o){const r={};o&33554443&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function on(a){let t;return{c(){t=v("Install")},l(n){t=x(n,"Install")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function sn(a){let t;return{c(){t=v("download")},l(n){t=x(n,"download")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function an(a){let t,n,e,o;return t=new Tt({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),e=new At({props:{class:"material-icons",$$slots:{default:[sn]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(r){N(t.$$.fragment,r),n=D(r),N(e.$$.fragment,r)},m(r,s){k(t,r,s),w(r,n,s),k(e,r,s),o=!0},p(r,s){const l={};s&33554432&&(l.$$scope={dirty:s,ctx:r}),t.$set(l);const i={};s&33554432&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),o=!1},d(r){R(t,r),r&&$(n),R(e,r)}}}function ln(a){let t;return{c(){t=v("Mod")},l(n){t=x(n,"Mod")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function fn(a){let t;return{c(){t=v("extension")},l(n){t=x(n,"extension")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function $n(a){let t,n,e,o;return t=new Tt({props:{$$slots:{default:[ln]},$$scope:{ctx:a}}}),e=new At({props:{class:"material-icons",$$slots:{default:[fn]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(r){N(t.$$.fragment,r),n=D(r),N(e.$$.fragment,r)},m(r,s){k(t,r,s),w(r,n,s),k(e,r,s),o=!0},p(r,s){const l={};s&33554432&&(l.$$scope={dirty:s,ctx:r}),t.$set(l);const i={};s&33554432&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),o=!1},d(r){R(t,r),r&&$(n),R(e,r)}}}function ee(a){let t,n,e;function o(s){a[19](s)}let r={$$slots:{default:[pn]},$$scope:{ctx:a}};return a[8]!==void 0&&(r.open=a[8]),t=new de({props:r}),Pt.push(()=>se(t,"open",o)),{c(){S(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,l){k(t,s,l),e=!0},p(s,l){const i={};l&33554432&&(i.$$scope={dirty:l,ctx:s}),!n&&l&256&&(n=!0,i.open=s[8],ae(()=>n=!1)),t.$set(i)},i(s){e||(d(t.$$.fragment,s),e=!0)},o(s){p(t.$$.fragment,s),e=!1},d(s){R(t,s)}}}function cn(a){let t;return{c(){t=v("Delete Version?")},l(n){t=x(n,"Delete Version?")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function un(a){let t;return{c(){t=v("Cancel")},l(n){t=x(n,"Cancel")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function dn(a){let t;return{c(){t=v("Delete")},l(n){t=x(n,"Delete")},m(n,e){w(n,t,e)},d(n){n&&$(t)}}}function mn(a){let t,n,e,o,r,s,l,i;return r=new at({props:{variant:"outlined",$$slots:{default:[un]},$$scope:{ctx:a}}}),r.$on("click",a[17]),l=new at({props:{variant:"outlined",$$slots:{default:[dn]},$$scope:{ctx:a}}}),l.$on("click",a[18]),{c(){t=E("div"),n=E("span"),e=v("Are you sure you wish to delete this version"),o=I(),S(r.$$.fragment),s=I(),S(l.$$.fragment),this.h()},l(m){t=b(m,"DIV",{class:!0});var g=T(t);n=b(g,"SPAN",{});var u=T(n);e=x(u,"Are you sure you wish to delete this version"),u.forEach($),o=D(g),N(r.$$.fragment,g),s=D(g),N(l.$$.fragment,g),g.forEach($),this.h()},h(){st(t,"class","grid grid-flow-row gap-4")},m(m,g){w(m,t,g),f(t,n),f(n,e),f(t,o),k(r,t,null),f(t,s),k(l,t,null),i=!0},p(m,g){const u={};g&33554432&&(u.$$scope={dirty:g,ctx:m}),r.$set(u);const y={};g&33554432&&(y.$$scope={dirty:g,ctx:m}),l.$set(y)},i(m){i||(d(r.$$.fragment,m),d(l.$$.fragment,m),i=!0)},o(m){p(r.$$.fragment,m),p(l.$$.fragment,m),i=!1},d(m){m&&$(t),R(r),R(l)}}}function pn(a){let t,n,e,o;return t=new pe({props:{id:"simple-title",$$slots:{default:[cn]},$$scope:{ctx:a}}}),e=new ge({props:{$$slots:{default:[mn]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment),n=I(),S(e.$$.fragment)},l(r){N(t.$$.fragment,r),n=D(r),N(e.$$.fragment,r)},m(r,s){k(t,r,s),w(r,n,s),k(e,r,s),o=!0},p(r,s){const l={};s&33554432&&(l.$$scope={dirty:s,ctx:r}),t.$set(l);const i={};s&33554432&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),o=!1},d(r){R(t,r),r&&$(n),R(e,r)}}}function gn(a){let t,n;return{c(){t=E("span"),n=v(a[4])},l(e){t=b(e,"SPAN",{});var o=T(t);n=x(o,a[4]),o.forEach($)},m(e,o){w(e,t,o),f(t,n)},p(e,o){o&16&&tt(n,e[4])},d(e){e&&$(t)}}}function hn(a){let t,n,e,o,r,s,l=!a[3].fetching&&!a[3].error&&a[3].data.getVersion&&Xt(a);const i=[Fe,qe,ze,Le],m=[];function g(u,y){return u[3].fetching?0:u[3].error?1:u[3].data.getVersion?2:3}return e=g(a),o=m[e]=i[e](a),{c(){l&&l.c(),t=dt(),n=I(),o.c(),r=dt()},l(u){const y=fe('[data-svelte="svelte-7zfw29"]',document.head);l&&l.l(y),t=dt(),y.forEach($),n=D(u),o.l(u),r=dt()},m(u,y){l&&l.m(document.head,null),f(document.head,t),w(u,n,y),m[e].m(u,y),w(u,r,y),s=!0},p(u,[y]){!u[3].fetching&&!u[3].error&&u[3].data.getVersion?l?(l.p(u,y),y&8&&d(l,1)):(l=Xt(u),l.c(),d(l,1),l.m(t.parentNode,t)):l&&(pt(),p(l,1,1,()=>{l=null}),mt());let _=e;e=g(u),e===_?m[e].p(u,y):(pt(),p(m[_],1,1,()=>{m[_]=null}),mt(),o=m[e],o?o.p(u,y):(o=m[e]=i[e](u),o.c()),d(o,1),o.m(r.parentNode,r))},i(u){s||(d(l),d(o),s=!0)},o(u){p(l),p(o),s=!1},d(u){l&&l.d(u),$(t),u&&$(n),m[e].d(u),u&&$(r)}}}const ne=ie(Ve,{version:void 0}),On=be(async a=>(ne.variables.version=a.params.versionId,ye({version:ne})(a)));function vn(a,t,n){let e,o,r,s=O,l=()=>(s(),s=ce(u,V=>n(3,r=V)),u),i;Ft(a,Ie,V=>n(11,o=V)),a.$$.on_destroy.push(()=>s());let{modId:m}=t,{versionId:g}=t,{version:u}=t;l();let y="",_=!1,H;const L=$e({query:Ee}),K=ue(!1);Ft(a,K,V=>n(8,i=V));const C=()=>{L({versionId:g}).then(V=>{V.error?(console.error(V.error.message),n(4,y="Error deleting version: "+V.error.message),n(5,_=!0)):Ut(gt+"/mod/"+m)})},et=()=>Ut(gt+"/mod/"+m+"/version/"+g+"/edit"),z=()=>K.set(!0),q=()=>H.setOpen(!0);function Q(V){Pt[V?"unshift":"push"](()=>{H=V,n(6,H)})}const F=()=>Se(u.data.getVersion.mod.mod_reference),j=()=>K.set(!1),nt=()=>C();function Z(V){i=V,K.set(i)}function B(V){_=V,n(5,_)}return a.$$set=V=>{"modId"in V&&n(0,m=V.modId),"versionId"in V&&n(1,g=V.versionId),"version"in V&&l(n(2,u=V.version))},a.$$.update=()=>{a.$$.dirty&2056&&n(7,e=o?.roles?.deleteContent||r?.data?.getVersion.mod?.authors?.findIndex(V=>V.user_id==o?.id)>=0)},[m,g,u,r,y,_,H,e,i,K,C,o,et,z,q,Q,F,j,nt,Z,B]}class Cn extends Rt{constructor(t){super(),_t(this,t,vn,hn,Mt,{modId:0,versionId:1,version:2})}}export{Cn as default,On as load};
//# sourceMappingURL=index.svelte-d7d685ac.js.map
