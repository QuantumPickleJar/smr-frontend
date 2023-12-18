import{S as Pt,i as mt,d as ft,s as Ot,v as Et,J as It,b as k,e as o,W as E,K as At,L as $t,j as a,k as L,g as l,M as J,h as d,X as I,N as A,m as n,O as St,n as X,Q as t,u as gt,r as xt,t as Ct,R as Tt}from"../chunks/vendor.8486aff2.js";import{b as tt,c as et,A as at,d as st}from"../chunks/api.853e29e3.js";import"../chunks/user.a84c1629.js";import{M as vt}from"../chunks/MetaDescriptors.a4c719ed.js";const r="src/routes/api-docs/+page.svelte";function ot(w){let s,M,i,_="API Docs",S,c,f,v,P,lt="GraphQL API",H,h,N,g,j,q,x,B,K,u,m,nt="REST API",U,p,W,C,Y,z,T,F,Z,O,rt="It is recommended that you use the GraphQL API as the REST API is not feature complete by design.",y;s=new vt({props:{description:"API documentation for the Satisfactory Mod Repository",title:"API Docs"},$$inline:!0});const ct={c:function(){It(s.$$.fragment),M=k(),i=o("h1"),i.textContent=_,S=k(),c=o("div"),f=o("section"),v=o("div"),P=o("h2"),P.textContent=lt,H=k(),h=o("p"),N=E("The GraphQL API is available at the endpoint "),g=o("code"),j=E(tt),q=E(` with a playground available at
        `),x=o("code"),B=E(et),K=k(),u=o("div"),m=o("h2"),m.textContent=nt,U=k(),p=o("p"),W=E("The GraphQL API is available at the endpoint "),C=o("code"),Y=E(at),z=E(` with docs available at
        `),T=o("code"),F=E(st),Z=k(),O=o("p"),O.textContent=rt,this.h()},l:function(e){const $=At("svelte-rqox2n",document.head);$t(s.$$.fragment,$),$.forEach(a),M=L(e),i=l(e,"H1",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-1nemy2n"&&(i.textContent=_),S=L(e),c=l(e,"DIV",{class:!0});var it=d(c);f=l(it,"SECTION",{class:!0});var Q=d(f);v=l(Q,"DIV",{});var V=d(v);P=l(V,"H2",{class:!0,"data-svelte-h":!0}),J(P)!=="svelte-1so6bad"&&(P.textContent=lt),H=L(V),h=l(V,"P",{class:!0});var R=d(h);N=I(R,"The GraphQL API is available at the endpoint "),g=l(R,"CODE",{});var ht=d(g);j=I(ht,tt),ht.forEach(a),q=I(R,` with a playground available at
        `),x=l(R,"CODE",{});var ut=d(x);B=I(ut,et),ut.forEach(a),R.forEach(a),V.forEach(a),K=L(Q),u=l(Q,"DIV",{});var D=d(u);m=l(D,"H2",{class:!0,"data-svelte-h":!0}),J(m)!=="svelte-x3d2e0"&&(m.textContent=nt),U=L(D),p=l(D,"P",{class:!0});var G=d(p);W=I(G,"The GraphQL API is available at the endpoint "),C=l(G,"CODE",{});var pt=d(C);Y=I(pt,at),pt.forEach(a),z=I(G,` with docs available at
        `),T=l(G,"CODE",{});var dt=d(T);F=I(dt,st),dt.forEach(a),G.forEach(a),Z=L(D),O=l(D,"P",{class:!0,"data-svelte-h":!0}),J(O)!=="svelte-suxqav"&&(O.textContent=rt),D.forEach(a),Q.forEach(a),it.forEach(a),this.h()},h:function(){A(i,"class","s-OSOTaXMk1VPJ"),n(i,r,9,0,332),A(P,"class","s-OSOTaXMk1VPJ"),n(P,r,13,6,413),n(g,r,15,53,497),n(x,r,16,8,563),A(h,"class","s-OSOTaXMk1VPJ"),n(h,r,14,6,440),n(v,r,12,4,401),A(m,"class","s-OSOTaXMk1VPJ"),n(m,r,20,6,639),n(C,r,22,53,720),n(T,r,23,8,775),A(p,"class","s-OSOTaXMk1VPJ"),n(p,r,21,6,663),A(O,"class","s-OSOTaXMk1VPJ"),n(O,r,25,6,821),n(u,r,19,4,627),A(f,"class","p-4"),n(f,r,11,2,375),A(c,"class","card p-4"),n(c,r,10,0,350)},m:function(e,$){St(s,document.head,null),X(e,M,$),X(e,i,$),X(e,S,$),X(e,c,$),t(c,f),t(f,v),t(v,P),t(v,H),t(v,h),t(h,N),t(h,g),t(g,j),t(h,q),t(h,x),t(x,B),t(f,K),t(f,u),t(u,m),t(u,U),t(u,p),t(p,W),t(p,C),t(C,Y),t(p,z),t(p,T),t(T,F),t(u,Z),t(u,O),y=!0},p:gt,i:function(e){y||(xt(s.$$.fragment,e),y=!0)},o:function(e){Ct(s.$$.fragment,e),y=!1},d:function(e){e&&(a(M),a(i),a(S),a(c)),Tt(s)}};return ft("SvelteRegisterBlock",{block:ct,id:ot.name,type:"component",source:"",ctx:w}),ct}function bt(w,s,M){let{$$slots:i={},$$scope:_}=s;Et("Page",i,[]);const S=[];return Object.keys(s).forEach(c=>{!~S.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)}),w.$capture_state=()=>({API_GRAPHQL:tt,API_GRAPHQL_PLAYGROUND:et,API_REST:at,API_REST_DOCS:st,MetaDescriptors:vt}),[]}class Rt extends Pt{constructor(s){super(s),mt(this,s,bt,ot,Ot,{}),ft("SvelteRegisterComponent",{component:this,tagName:"Page",options:s,id:ot.name})}}export{Rt as component};
//# sourceMappingURL=10.8c3b21d0.js.map
