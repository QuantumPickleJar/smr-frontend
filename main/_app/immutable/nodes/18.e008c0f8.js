import{aE as ne,S as kt,i as Rt,s as _t,bh as Xt,U as R,X as _,_ as M,b as p,t as y,a5 as A,bi as Yt,bj as Gt,u as h,v,w as I,d as f,Y as tt,a as P,bk as re,L,I as x,R as D,J as w,V as N,Z as l,K as et,e as wt,a_ as se,c as Vt,a9 as Nt,aD as ae,a8 as oe,g as yt,aG as Ht,aN as Pt,aJ as lt,p as Zt,P as Ft,a4 as Qt,bc as te,aW as ee,aB as le,aH as ie,aI as fe}from"../chunks/vendor.d26e534c.js";import{J as $e,K as ce}from"../chunks/graphql.eeb20993.js";import{l as ue}from"../chunks/gql.ff9241aa.js";import{m as Ct}from"../chunks/markdown.b3e429f1.js";import{p as jt,a as Jt,b as qt}from"../chunks/formatting.6003925c.js";import{M as de}from"../chunks/MetaDescriptors.c81cf98a.js";import{c as me}from"../chunks/api.087e22ff.js";import{a as ge}from"../chunks/user.75b0ef58.js";import{T as pe}from"../chunks/Toast.641a8e0d.js";import{i as he}from"../chunks/launcher.be93f47f.js";const ve=async({params:s,parent:t})=>({...s,...await ue({version:ne({query:$e,client:(await t()).client,variables:{version:s.versionId}})})}),$n=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));function xe(s){return{c:L,l:L,m:L,p:L,d:L}}function we(s){let t,n=s[1]+"";return{c(){t=h("p")},l(e){t=v(e,"P",{});var a=I(t);a.forEach(f)},m(e,a){P(e,t,a),t.innerHTML=n},p(e,a){a&1&&n!==(n=e[1]+"")&&(t.innerHTML=n)},d(e){e&&f(t)}}}function Ve(s){return{c:L,l:L,m:L,p:L,d:L}}function ye(s){let t,n,e={ctx:s,current:null,token:null,hasCatch:!1,pending:Ve,then:we,catch:xe,value:1};return Gt(n=Ct(s[0]),e),{c(){t=h("div"),e.block.c(),this.h()},l(a){t=v(a,"DIV",{class:!0});var r=I(t);e.block.l(r),r.forEach(f),this.h()},h(){tt(t,"class","markdown-content")},m(a,r){P(a,t,r),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null},p(a,r){s=a,e.ctx=s,r&1&&n!==(n=Ct(s[0]))&&Gt(n,e)||re(e,s,r)},d(a){a&&f(t),e.block.d(),e.token=null,e=null}}}function Ee(s){let t,n;return t=new Yt({props:{$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){M(t,e,a),n=!0},p(e,a){const r={};a&5&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function be(s){let t,n;return t=new Xt({props:{class:"h-fit",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){M(t,e,a),n=!0},p(e,[a]){const r={};a&5&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function Se(s,t,n){let{changelog:e}=t;return s.$$set=a=>{"changelog"in a&&n(0,e=a.changelog)},[e]}class Ie extends kt{constructor(t){super(),Rt(this,t,Se,be,_t,{changelog:0})}}function De(s){let t,n,e,a,r,o,i,m,d=jt(s[0].created_at)+"",u,c,V,T,O,Z,J,W=Jt(s[0].downloads)+"",G,q,nt,z,B,S,F,H=s[0].sml_version+"",rt,Q,k,E,st,it,$,g=s[0].stability+"",K,X,C,j,Y,at,Et,ft=qt(s[0].size)+"",ut,bt,St,ot,$t,It,Dt,ct=s[0].hash+"",dt;return{c(){t=h("div"),n=h("h3"),e=x("Info"),a=D(),r=h("span"),o=h("strong"),i=x("Created:"),m=D(),u=x(d),c=h("br"),V=D(),T=h("span"),O=h("strong"),Z=x("Downloads:"),J=D(),G=x(W),q=h("br"),nt=D(),z=h("span"),B=h("strong"),S=x("SML Version:"),F=D(),rt=x(H),Q=h("br"),k=D(),E=h("span"),st=h("strong"),it=x("Stability:"),$=D(),K=x(g),X=h("br"),C=D(),j=h("span"),Y=h("strong"),at=x("Size:"),Et=D(),ut=x(ft),bt=h("br"),St=D(),ot=h("span"),$t=h("strong"),It=x("Hash:"),Dt=D(),dt=x(ct),this.h()},l(U){t=v(U,"DIV",{class:!0});var b=I(t);n=v(b,"H3",{class:!0});var Mt=I(n);e=w(Mt,"Info"),Mt.forEach(f),a=N(b),r=v(b,"SPAN",{});var mt=I(r);o=v(mt,"STRONG",{});var At=I(o);i=w(At,"Created:"),At.forEach(f),m=N(mt),u=w(mt,d),mt.forEach(f),c=v(b,"BR",{}),V=N(b),T=v(b,"SPAN",{});var gt=I(T);O=v(gt,"STRONG",{});var Ot=I(O);Z=w(Ot,"Downloads:"),Ot.forEach(f),J=N(gt),G=w(gt,W),gt.forEach(f),q=v(b,"BR",{}),nt=N(b),z=v(b,"SPAN",{});var pt=I(z);B=v(pt,"STRONG",{});var Tt=I(B);S=w(Tt,"SML Version:"),Tt.forEach(f),F=N(pt),rt=w(pt,H),pt.forEach(f),Q=v(b,"BR",{}),k=N(b),E=v(b,"SPAN",{});var ht=I(E);st=v(ht,"STRONG",{});var Lt=I(st);it=w(Lt,"Stability:"),Lt.forEach(f),$=N(ht),K=w(ht,g),ht.forEach(f),X=v(b,"BR",{}),C=N(b),j=v(b,"SPAN",{});var vt=I(j);Y=v(vt,"STRONG",{});var zt=I(Y);at=w(zt,"Size:"),zt.forEach(f),Et=N(vt),ut=w(vt,ft),vt.forEach(f),bt=v(b,"BR",{}),St=N(b),ot=v(b,"SPAN",{});var xt=I(ot);$t=v(xt,"STRONG",{});var Bt=I($t);It=w(Bt,"Hash:"),Bt.forEach(f),Dt=N(xt),dt=w(xt,ct),xt.forEach(f),b.forEach(f),this.h()},h(){tt(n,"class","text-2xl my-4 font-bold"),tt(t,"class","text-lg break-words")},m(U,b){P(U,t,b),l(t,n),l(n,e),l(t,a),l(t,r),l(r,o),l(o,i),l(r,m),l(r,u),l(t,c),l(t,V),l(t,T),l(T,O),l(O,Z),l(T,J),l(T,G),l(t,q),l(t,nt),l(t,z),l(z,B),l(B,S),l(z,F),l(z,rt),l(t,Q),l(t,k),l(t,E),l(E,st),l(st,it),l(E,$),l(E,K),l(t,X),l(t,C),l(t,j),l(j,Y),l(Y,at),l(j,Et),l(j,ut),l(t,bt),l(t,St),l(t,ot),l(ot,$t),l($t,It),l(ot,Dt),l(ot,dt)},p(U,b){b&1&&d!==(d=jt(U[0].created_at)+"")&&et(u,d),b&1&&W!==(W=Jt(U[0].downloads)+"")&&et(G,W),b&1&&H!==(H=U[0].sml_version+"")&&et(rt,H),b&1&&g!==(g=U[0].stability+"")&&et(K,g),b&1&&ft!==(ft=qt(U[0].size)+"")&&et(ut,ft),b&1&&ct!==(ct=U[0].hash+"")&&et(dt,ct)},d(U){U&&f(t)}}}function Ne(s){let t,n;return t=new Yt({props:{$$slots:{default:[De]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){M(t,e,a),n=!0},p(e,a){const r={};a&3&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function Pe(s){let t,n;return t=new Xt({props:{$$slots:{default:[Ne]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){M(t,e,a),n=!0},p(e,[a]){const r={};a&3&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function ke(s,t,n){let{version:e}=t;return s.$$set=a=>{"version"in a&&n(0,e=a.version)},[e]}class Re extends kt{constructor(t){super(),Rt(this,t,ke,Pe,_t,{version:0})}}function Kt(s){let t,n;return t=new de({props:{description:"Information for mod version "+s[0].data.getVersion.mod.name+" "+s[0].data.getVersion.version,title:"Mod version "+s[0].data.getVersion.mod.name+" "+s[0].data.getVersion.version}}),{c(){R(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){M(t,e,a),n=!0},p(e,a){const r={};a&1&&(r.description="Information for mod version "+e[0].data.getVersion.mod.name+" "+e[0].data.getVersion.version),a&1&&(r.title="Mod version "+e[0].data.getVersion.mod.name+" "+e[0].data.getVersion.version),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function _e(s){let t;return{c(){t=x("404")},l(n){t=w(n,"404")},m(n,e){P(n,t,e)},p:L,i:L,o:L,d(n){n&&f(t)}}}function Me(s){let t,n,e,a=s[0].data.getVersion.mod.name+"",r,o,i=s[0].data.getVersion.version+"",m,d,u,c,V,T,O,Z,J,W,G,q,nt,z,B,S,F,H,rt,Q,k=s[3]&&Ut(s);V=new lt({props:{variant:"outlined",href:me+"/mod/"+s[5]+"/versions/"+s[6]+"/download",$$slots:{default:[ze]},$$scope:{ctx:s}}}),O=new lt({props:{variant:"outlined",$$slots:{default:[He]},$$scope:{ctx:s}}}),O.$on("click",s[14]),J=new lt({props:{variant:"outlined",href:Pt+"/mod/"+s[5],$$slots:{default:[Je]},$$scope:{ctx:s}}}),q=new Ie({props:{changelog:s[0].data.getVersion.changelog}}),B=new Re({props:{version:s[0].data.getVersion}});let E=s[3]&&Wt(s);function st($){s[18]($)}let it={$$slots:{default:[Ye]},$$scope:{ctx:s}};return s[2]!==void 0&&(it.running=s[2]),H=new pe({props:it}),Zt.push(()=>Ft(H,"running",st)),{c(){t=h("div"),n=h("div"),e=h("h1"),r=x(a),o=x(`
        Version `),m=x(i),d=D(),u=h("div"),k&&k.c(),c=D(),R(V.$$.fragment),T=D(),R(O.$$.fragment),Z=D(),R(J.$$.fragment),W=D(),G=h("div"),R(q.$$.fragment),nt=D(),z=h("div"),R(B.$$.fragment),S=D(),E&&E.c(),F=D(),R(H.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0});var g=I(t);n=v(g,"DIV",{class:!0});var K=I(n);e=v(K,"H1",{class:!0});var X=I(e);r=w(X,a),o=w(X,`
        Version `),m=w(X,i),X.forEach(f),d=N(K),u=v(K,"DIV",{class:!0});var C=I(u);k&&k.l(C),c=N(C),_(V.$$.fragment,C),T=N(C),_(O.$$.fragment,C),Z=N(C),_(J.$$.fragment,C),C.forEach(f),K.forEach(f),W=N(g),G=v(g,"DIV",{class:!0});var j=I(G);_(q.$$.fragment,j),nt=N(j),z=v(j,"DIV",{class:!0});var Y=I(z);_(B.$$.fragment,Y),Y.forEach(f),j.forEach(f),g.forEach(f),S=N($),E&&E.l($),F=N($),_(H.$$.fragment,$),this.h()},h(){tt(e,"class","text-4xl font-bold"),tt(u,"class","grid grid-flow-col gap-4"),tt(n,"class","flex flex-wrap h-auto justify-between items-center"),tt(z,"class","grid grid-cols-1 auto-rows-min gap-8"),tt(G,"class","grid grid-auto-max auto-cols-fr gap-4"),tt(t,"class","grid gap-6 xlx:grid-flow-row")},m($,g){P($,t,g),l(t,n),l(n,e),l(e,r),l(e,o),l(e,m),l(n,d),l(n,u),k&&k.m(u,null),l(u,c),M(V,u,null),l(u,T),M(O,u,null),l(u,Z),M(J,u,null),l(t,W),l(t,G),M(q,G,null),l(G,nt),l(G,z),M(B,z,null),P($,S,g),E&&E.m($,g),P($,F,g),M(H,$,g),Q=!0},p($,g){(!Q||g&1)&&a!==(a=$[0].data.getVersion.mod.name+"")&&et(r,a),(!Q||g&1)&&i!==(i=$[0].data.getVersion.version+"")&&et(m,i),$[3]?k?(k.p($,g),g&8&&p(k,1)):(k=Ut($),k.c(),p(k,1),k.m(u,c)):k&&(yt(),y(k,1,1,()=>{k=null}),Vt());const K={};g&1048576&&(K.$$scope={dirty:g,ctx:$}),V.$set(K);const X={};g&1048576&&(X.$$scope={dirty:g,ctx:$}),O.$set(X);const C={};g&1048576&&(C.$$scope={dirty:g,ctx:$}),J.$set(C);const j={};g&1&&(j.changelog=$[0].data.getVersion.changelog),q.$set(j);const Y={};g&1&&(Y.version=$[0].data.getVersion),B.$set(Y),$[3]?E?(E.p($,g),g&8&&p(E,1)):(E=Wt($),E.c(),p(E,1),E.m(F.parentNode,F)):E&&(yt(),y(E,1,1,()=>{E=null}),Vt());const at={};g&1048578&&(at.$$scope={dirty:g,ctx:$}),!rt&&g&4&&(rt=!0,at.running=$[2],Qt(()=>rt=!1)),H.$set(at)},i($){Q||(p(k),p(V.$$.fragment,$),p(O.$$.fragment,$),p(J.$$.fragment,$),p(q.$$.fragment,$),p(B.$$.fragment,$),p(E),p(H.$$.fragment,$),Q=!0)},o($){y(k),y(V.$$.fragment,$),y(O.$$.fragment,$),y(J.$$.fragment,$),y(q.$$.fragment,$),y(B.$$.fragment,$),y(E),y(H.$$.fragment,$),Q=!1},d($){$&&f(t),k&&k.d(),A(V),A(O),A(J),A(q),A(B),$&&f(S),E&&E.d($),$&&f(F),A(H,$)}}}function Ae(s){let t,n,e=s[0].error.message+"",a;return{c(){t=h("p"),n=x("Oh no... "),a=x(e)},l(r){t=v(r,"P",{});var o=I(t);n=w(o,"Oh no... "),a=w(o,e),o.forEach(f)},m(r,o){P(r,t,o),l(t,n),l(t,a)},p(r,o){o&1&&e!==(e=r[0].error.message+"")&&et(a,e)},i:L,o:L,d(r){r&&f(t)}}}function Oe(s){let t,n;return{c(){t=h("p"),n=x("Loading...")},l(e){t=v(e,"P",{});var a=I(t);n=w(a,"Loading..."),a.forEach(f)},m(e,a){P(e,t,a),l(t,n)},p:L,i:L,o:L,d(e){e&&f(t)}}}function Ut(s){let t,n,e,a;return t=new lt({props:{variant:"outlined",$$slots:{default:[Te]},$$scope:{ctx:s}}}),t.$on("click",s[12]),e=new lt({props:{variant:"outlined",$$slots:{default:[Le]},$$scope:{ctx:s}}}),e.$on("click",s[13]),{c(){R(t.$$.fragment),n=D(),R(e.$$.fragment)},l(r){_(t.$$.fragment,r),n=N(r),_(e.$$.fragment,r)},m(r,o){M(t,r,o),P(r,n,o),M(e,r,o),a=!0},p(r,o){const i={};o&1048576&&(i.$$scope={dirty:o,ctx:r}),t.$set(i);const m={};o&1048576&&(m.$$scope={dirty:o,ctx:r}),e.$set(m)},i(r){a||(p(t.$$.fragment,r),p(e.$$.fragment,r),a=!0)},o(r){y(t.$$.fragment,r),y(e.$$.fragment,r),a=!1},d(r){A(t,r),r&&f(n),A(e,r)}}}function Te(s){let t;return{c(){t=x("Edit")},l(n){t=w(n,"Edit")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function Le(s){let t;return{c(){t=x("Delete")},l(n){t=w(n,"Delete")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function ze(s){let t;return{c(){t=x("Download")},l(n){t=w(n,"Download")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function Be(s){let t;return{c(){t=x("Install")},l(n){t=w(n,"Install")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function Ge(s){let t;return{c(){t=x("download")},l(n){t=w(n,"download")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function He(s){let t,n,e,a;return t=new te({props:{$$slots:{default:[Be]},$$scope:{ctx:s}}}),e=new ee({props:{class:"material-icons",$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment),n=D(),R(e.$$.fragment)},l(r){_(t.$$.fragment,r),n=N(r),_(e.$$.fragment,r)},m(r,o){M(t,r,o),P(r,n,o),M(e,r,o),a=!0},p(r,o){const i={};o&1048576&&(i.$$scope={dirty:o,ctx:r}),t.$set(i);const m={};o&1048576&&(m.$$scope={dirty:o,ctx:r}),e.$set(m)},i(r){a||(p(t.$$.fragment,r),p(e.$$.fragment,r),a=!0)},o(r){y(t.$$.fragment,r),y(e.$$.fragment,r),a=!1},d(r){A(t,r),r&&f(n),A(e,r)}}}function Ce(s){let t;return{c(){t=x("Mod")},l(n){t=w(n,"Mod")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function je(s){let t;return{c(){t=x("extension")},l(n){t=w(n,"extension")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function Je(s){let t,n,e,a;return t=new te({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),e=new ee({props:{class:"material-icons",$$slots:{default:[je]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment),n=D(),R(e.$$.fragment)},l(r){_(t.$$.fragment,r),n=N(r),_(e.$$.fragment,r)},m(r,o){M(t,r,o),P(r,n,o),M(e,r,o),a=!0},p(r,o){const i={};o&1048576&&(i.$$scope={dirty:o,ctx:r}),t.$set(i);const m={};o&1048576&&(m.$$scope={dirty:o,ctx:r}),e.$set(m)},i(r){a||(p(t.$$.fragment,r),p(e.$$.fragment,r),a=!0)},o(r){y(t.$$.fragment,r),y(e.$$.fragment,r),a=!1},d(r){A(t,r),r&&f(n),A(e,r)}}}function Wt(s){let t,n,e;function a(o){s[17](o)}let r={$$slots:{default:[Xe]},$$scope:{ctx:s}};return s[4]!==void 0&&(r.open=s[4]),t=new le({props:r}),Zt.push(()=>Ft(t,"open",a)),{c(){R(t.$$.fragment)},l(o){_(t.$$.fragment,o)},m(o,i){M(t,o,i),e=!0},p(o,i){const m={};i&1048576&&(m.$$scope={dirty:i,ctx:o}),!n&&i&16&&(n=!0,m.open=o[4],Qt(()=>n=!1)),t.$set(m)},i(o){e||(p(t.$$.fragment,o),e=!0)},o(o){y(t.$$.fragment,o),e=!1},d(o){A(t,o)}}}function qe(s){let t;return{c(){t=x("Delete Version?")},l(n){t=w(n,"Delete Version?")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function Ke(s){let t;return{c(){t=x("Cancel")},l(n){t=w(n,"Cancel")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function Ue(s){let t;return{c(){t=x("Delete")},l(n){t=w(n,"Delete")},m(n,e){P(n,t,e)},d(n){n&&f(t)}}}function We(s){let t,n,e,a,r,o,i,m;return r=new lt({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:s}}}),r.$on("click",s[15]),i=new lt({props:{variant:"outlined",$$slots:{default:[Ue]},$$scope:{ctx:s}}}),i.$on("click",s[16]),{c(){t=h("div"),n=h("span"),e=x("Are you sure you wish to delete this version"),a=D(),R(r.$$.fragment),o=D(),R(i.$$.fragment),this.h()},l(d){t=v(d,"DIV",{class:!0});var u=I(t);n=v(u,"SPAN",{});var c=I(n);e=w(c,"Are you sure you wish to delete this version"),c.forEach(f),a=N(u),_(r.$$.fragment,u),o=N(u),_(i.$$.fragment,u),u.forEach(f),this.h()},h(){tt(t,"class","grid grid-flow-row gap-4")},m(d,u){P(d,t,u),l(t,n),l(n,e),l(t,a),M(r,t,null),l(t,o),M(i,t,null),m=!0},p(d,u){const c={};u&1048576&&(c.$$scope={dirty:u,ctx:d}),r.$set(c);const V={};u&1048576&&(V.$$scope={dirty:u,ctx:d}),i.$set(V)},i(d){m||(p(r.$$.fragment,d),p(i.$$.fragment,d),m=!0)},o(d){y(r.$$.fragment,d),y(i.$$.fragment,d),m=!1},d(d){d&&f(t),A(r),A(i)}}}function Xe(s){let t,n,e,a;return t=new ie({props:{id:"simple-title",$$slots:{default:[qe]},$$scope:{ctx:s}}}),e=new fe({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment),n=D(),R(e.$$.fragment)},l(r){_(t.$$.fragment,r),n=N(r),_(e.$$.fragment,r)},m(r,o){M(t,r,o),P(r,n,o),M(e,r,o),a=!0},p(r,o){const i={};o&1048576&&(i.$$scope={dirty:o,ctx:r}),t.$set(i);const m={};o&1048576&&(m.$$scope={dirty:o,ctx:r}),e.$set(m)},i(r){a||(p(t.$$.fragment,r),p(e.$$.fragment,r),a=!0)},o(r){y(t.$$.fragment,r),y(e.$$.fragment,r),a=!1},d(r){A(t,r),r&&f(n),A(e,r)}}}function Ye(s){let t,n;return{c(){t=h("span"),n=x(s[1])},l(e){t=v(e,"SPAN",{});var a=I(t);n=w(a,s[1]),a.forEach(f)},m(e,a){P(e,t,a),l(t,n)},p(e,a){a&2&&et(n,e[1])},d(e){e&&f(t)}}}function Ze(s){let t,n,e,a,r,o,i=!s[0].fetching&&!s[0].error&&s[0].data.getVersion&&Kt(s);const m=[Oe,Ae,Me,_e],d=[];function u(c,V){return c[0].fetching?0:c[0].error?1:c[0].data.getVersion?2:3}return e=u(s),a=d[e]=m[e](s),{c(){i&&i.c(),t=wt(),n=D(),a.c(),r=wt()},l(c){const V=se("svelte-7zfw29",document.head);i&&i.l(V),t=wt(),V.forEach(f),n=N(c),a.l(c),r=wt()},m(c,V){i&&i.m(document.head,null),l(document.head,t),P(c,n,V),d[e].m(c,V),P(c,r,V),o=!0},p(c,[V]){!c[0].fetching&&!c[0].error&&c[0].data.getVersion?i?(i.p(c,V),V&1&&p(i,1)):(i=Kt(c),i.c(),p(i,1),i.m(t.parentNode,t)):i&&(yt(),y(i,1,1,()=>{i=null}),Vt());let T=e;e=u(c),e===T?d[e].p(c,V):(yt(),y(d[T],1,1,()=>{d[T]=null}),Vt(),a=d[e],a?a.p(c,V):(a=d[e]=m[e](c),a.c()),p(a,1),a.m(r.parentNode,r))},i(c){o||(p(i),p(a),o=!0)},o(c){y(i),y(a),o=!1},d(c){i&&i.d(c),f(t),c&&f(n),d[e].d(c),c&&f(r)}}}function Fe(s,t,n){let e,a,r,o;Nt(s,ge,S=>n(11,a=S));let{data:i}=t;const{modId:m,versionId:d,version:u}=i;Nt(s,u,S=>n(0,r=S));const c=ae();let V="",T=!1;const O=oe(!1);Nt(s,O,S=>n(4,o=S));const Z=()=>{c.mutation(ce,{versionId:d}).toPromise().then(S=>{S.error?(console.error(S.error.message),n(1,V="Error deleting version: "+S.error.message),n(2,T=!0)):Ht(Pt+"/mod/"+m)})},J=()=>Ht(Pt+"/mod/"+m+"/version/"+d+"/edit"),W=()=>O.set(!0),G=()=>he(r.data.getVersion.mod.mod_reference),q=()=>O.set(!1),nt=()=>Z();function z(S){o=S,O.set(o)}function B(S){T=S,n(2,T)}return s.$$set=S=>{"data"in S&&n(10,i=S.data)},s.$$.update=()=>{s.$$.dirty&2049&&n(3,e=a?.roles?.deleteContent||r?.data?.getVersion.mod?.authors?.findIndex(S=>S.user_id==a?.id)>=0)},[r,V,T,e,o,m,d,u,O,Z,i,a,J,W,G,q,nt,z,B]}class cn extends kt{constructor(t){super(),Rt(this,t,Fe,Ze,_t,{data:10})}}export{cn as component,$n as universal};
//# sourceMappingURL=18.e008c0f8.js.map
