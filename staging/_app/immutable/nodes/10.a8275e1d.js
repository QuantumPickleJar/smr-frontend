import{S as Pt,i as vt,d as V,s as gt,bn as ht,v as At,bo as pt,a8 as z,a6 as L,x as u,L as h,bh as Et,ab as U,q as o,a9 as w,y as p,z as $,N as d,ac as D,C as m,ae as Y,l as C,ad as s,p as F,t as K,aj as W,P as It}from"../chunks/vendor.524e4217.js";import{A as Z,d as tt,c as et,e as at}from"../chunks/api.44414049.js";import"../chunks/user.9540492c.js";import{M as $t}from"../chunks/MetaDescriptors.502aaa7e.js";const P="src/routes/api-docs/+page.svelte";function dt(E){let t,c,r,i,e,n,l,k,v,a,f,I,g,b,_,J,O,X,y,H,B,R,N,j,T,q;const nt={c:function(){t=u("div"),c=u("h2"),r=h("GraphQL API"),i=L(),e=u("p"),n=h("The GraphQL API is available at the endpoint "),l=u("code"),k=h(Z),v=h(` with a playground available at
        `),a=u("code"),f=h(tt),I=L(),g=u("div"),b=u("h2"),_=h("REST API"),J=L(),O=u("p"),X=h("The GraphQL API is available at the endpoint "),y=u("code"),H=h(et),B=h(` with docs available at
        `),R=u("code"),N=h(at),j=L(),T=u("p"),q=h("It is recommended that you use the GraphQL API as the REST API is not feature complete by design."),this.h()},l:function(A){t=p(A,"DIV",{});var S=$(t);c=p(S,"H2",{class:!0});var ot=$(c);r=d(ot,"GraphQL API"),ot.forEach(o),i=w(S),e=p(S,"P",{class:!0});var G=$(e);n=d(G,"The GraphQL API is available at the endpoint "),l=p(G,"CODE",{});var ct=$(l);k=d(ct,Z),ct.forEach(o),v=d(G,` with a playground available at
        `),a=p(G,"CODE",{});var rt=$(a);f=d(rt,tt),rt.forEach(o),G.forEach(o),S.forEach(o),I=w(A),g=p(A,"DIV",{});var x=$(g);b=p(x,"H2",{class:!0});var it=$(b);_=d(it,"REST API"),it.forEach(o),J=w(x),O=p(x,"P",{class:!0});var Q=$(O);X=d(Q,"The GraphQL API is available at the endpoint "),y=p(Q,"CODE",{});var lt=$(y);H=d(lt,et),lt.forEach(o),B=d(Q,` with docs available at
        `),R=p(Q,"CODE",{});var ft=$(R);N=d(ft,at),ft.forEach(o),Q.forEach(o),j=w(x),T=p(x,"P",{class:!0});var ut=$(T);q=d(ut,"It is recommended that you use the GraphQL API as the REST API is not feature complete by design."),ut.forEach(o),x.forEach(o),this.h()},h:function(){D(c,"class","s-OSOTaXMk1VPJ"),m(c,P,13,6,429),m(l,P,15,53,513),m(a,P,16,8,579),D(e,"class","s-OSOTaXMk1VPJ"),m(e,P,14,6,456),m(t,P,12,4,417),D(b,"class","s-OSOTaXMk1VPJ"),m(b,P,20,6,655),m(y,P,22,53,736),m(R,P,23,8,791),D(O,"class","s-OSOTaXMk1VPJ"),m(O,P,21,6,679),D(T,"class","s-OSOTaXMk1VPJ"),m(T,P,25,6,837),m(g,P,19,4,643)},m:function(A,S){C(A,t,S),s(t,c),s(c,r),s(t,i),s(t,e),s(e,n),s(e,l),s(l,k),s(e,v),s(e,a),s(a,f),C(A,I,S),C(A,g,S),s(g,b),s(b,_),s(g,J),s(g,O),s(O,X),s(O,y),s(y,H),s(O,B),s(O,R),s(R,N),s(g,j),s(g,T),s(T,q)},p:It,d:function(A){A&&o(t),A&&o(I),A&&o(g)}};return V("SvelteRegisterBlock",{block:nt,id:dt.name,type:"slot",source:"(12:2) <Content>",ctx:E}),nt}function mt(E){let t,c;t=new pt({props:{$$slots:{default:[dt]},$$scope:{ctx:E}},$$inline:!0});const r={c:function(){z(t.$$.fragment)},l:function(e){U(t.$$.fragment,e)},m:function(e,n){Y(t,e,n),c=!0},p:function(e,n){const l={};n&1&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i:function(e){c||(F(t.$$.fragment,e),c=!0)},o:function(e){K(t.$$.fragment,e),c=!1},d:function(e){W(t,e)}};return V("SvelteRegisterBlock",{block:r,id:mt.name,type:"slot",source:"(11:0) <Card>",ctx:E}),r}function st(E){let t,c,r,i,e,n,l;t=new $t({props:{description:"API documentation for the Satisfactory Mod Repository",title:"API Docs"},$$inline:!0}),n=new ht({props:{$$slots:{default:[mt]},$$scope:{ctx:E}},$$inline:!0});const k={c:function(){z(t.$$.fragment),c=L(),r=u("h1"),i=h("API Docs"),e=L(),z(n.$$.fragment),this.h()},l:function(a){const f=Et("svelte-rqox2n",document.head);U(t.$$.fragment,f),f.forEach(o),c=w(a),r=p(a,"H1",{class:!0});var I=$(r);i=d(I,"API Docs"),I.forEach(o),e=w(a),U(n.$$.fragment,a),this.h()},h:function(){D(r,"class","s-OSOTaXMk1VPJ"),m(r,P,9,0,376)},m:function(a,f){Y(t,document.head,null),C(a,c,f),C(a,r,f),s(r,i),C(a,e,f),Y(n,a,f),l=!0},p:function(a,[f]){const I={};f&1&&(I.$$scope={dirty:f,ctx:a}),n.$set(I)},i:function(a){l||(F(t.$$.fragment,a),F(n.$$.fragment,a),l=!0)},o:function(a){K(t.$$.fragment,a),K(n.$$.fragment,a),l=!1},d:function(a){W(t),a&&o(c),a&&o(r),a&&o(e),W(n,a)}};return V("SvelteRegisterBlock",{block:k,id:st.name,type:"component",source:"",ctx:E}),k}function Ot(E,t,c){let{$$slots:r={},$$scope:i}=t;At("Page",r,[]);const e=[];return Object.keys(t).forEach(n=>{!~e.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),E.$capture_state=()=>({API_GRAPHQL:Z,API_GRAPHQL_PLAYGROUND:tt,API_REST:et,API_REST_DOCS:at,MetaDescriptors:$t,Card:ht,Content:pt}),[]}class yt extends Pt{constructor(t){super(t),vt(this,t,Ot,st,gt,{}),V("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:st.name})}}export{yt as component};
//# sourceMappingURL=10.a8275e1d.js.map
