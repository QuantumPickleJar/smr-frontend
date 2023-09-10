import{S as Ie,i as je,s as Le,d as H,z as X,v as Re,ai as ce,Z as ae,ar as xe,e as b,b as R,K as te,g as x,h as E,j as h,k as A,N as se,O as f,m as $,as as Z,n as _,R as g,Y as Q,X as $e,A as Y,C as W,D as ee,r as B,p as Ae,t as K,q as Be,a5 as _e,f as ye,at as Ee,u as He}from"./vendor.d31bcabb.js";const y="src/lib/components/general/FicsitCard.svelte",Oe=t=>({}),Ce=t=>({}),Ze=t=>({}),Fe=t=>({}),Qe=t=>({}),De=t=>({}),Ke=t=>({}),Ne=t=>({});function Pe(t){let e,s,c;const l={c:function(){e=b("img"),this.h()},l:function(a){e=x(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){Ee(e.src,s=t[4])||f(e,"src",s),f(e,"alt",c=t[3]+" Logo"),f(e,"class","logo max-w-full max-h-full s-ZL2maQw1Napu"),$(e,y,49,8,1360)},m:function(a,u){_(a,e,u)},p:function(a,u){u&16&&!Ee(e.src,s=a[4])&&f(e,"src",s),u&8&&c!==(c=a[3]+" Logo")&&f(e,"alt",c)},d:function(a){a&&h(e)}};return H("SvelteRegisterBlock",{block:l,id:Pe.name,type:"else",source:"(49:6) {:else}",ctx:t}),l}function Ve(t){let e;const s={c:function(){e=b("div"),this.h()},l:function(l){e=x(l,"DIV",{class:!0}),E(e).forEach(h),this.h()},h:function(){f(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full s-ZL2maQw1Napu"),$(e,y,47,8,1261)},m:function(l,o){_(l,e,o)},p:He,d:function(l){l&&h(e)}};return H("SvelteRegisterBlock",{block:s,id:Ve.name,type:"if",source:"(47:6) {#if fake}",ctx:t}),s}function le(t){let e,s;const c={c:function(){e=b("span"),s=te("Card stats"),this.h()},l:function(o){e=x(o,"SPAN",{class:!0});var a=E(e);s=se(a,"Card stats"),a.forEach(h),this.h()},h:function(){f(e,"class","font-flow"),$(e,y,62,16,1833)},m:function(o,a){_(o,e,a),g(e,s)},d:function(o){o&&h(e)}};return H("SvelteRegisterBlock",{block:c,id:le.name,type:"if",source:"(62:14) {#if fake}",ctx:t}),c}function Se(t){let e,s=t[1]&&le(t);const c={c:function(){s&&s.c(),e=ye()},l:function(o){s&&s.l(o),e=ye()},m:function(o,a){s&&s.m(o,a),_(o,e,a)},p:function(o,a){o[1]?s||(s=le(o),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d:function(o){s&&s.d(o),o&&h(e)}};return H("SvelteRegisterBlock",{block:c,id:Se.name,type:"fallback",source:"(61:31)                ",ctx:t}),c}function fe(t){let e,s,c,l,o,a,u;const v=t[11].actions,d=X(v,t,t[10],Fe),C={c:function(){e=b("a"),s=b("span"),c=te("info"),a=R(),d&&d.c(),this.h()},l:function(r){e=x(r,"A",{href:!0,class:!0,"aria-label":!0,title:!0});var m=E(e);s=x(m,"SPAN",{class:!0});var V=E(s);c=se(V,"info"),V.forEach(h),m.forEach(h),a=A(r),d&&d.l(r),this.h()},h:function(){f(s,"class","material-icons"),$(s,y,82,12,2384),f(e,"href",t[0]),f(e,"class","btn btn-sm variant-soft-surface"),f(e,"aria-label",l="View "+t[3]),f(e,"title",o="View "+t[3]),$(e,y,77,10,2207)},m:function(r,m){_(r,e,m),g(e,s),g(s,c),_(r,a,m),d&&d.m(r,m),u=!0},p:function(r,m){(!u||m&1)&&f(e,"href",r[0]),(!u||m&8&&l!==(l="View "+r[3]))&&f(e,"aria-label",l),(!u||m&8&&o!==(o="View "+r[3]))&&f(e,"title",o),d&&d.p&&(!u||m&1024)&&Y(d,v,r,r[10],u?ee(v,r[10],m,Ze):W(r[10]),Fe)},i:function(r){u||(B(d,r),u=!0)},o:function(r){K(d,r),u=!1},d:function(r){r&&h(e),r&&h(a),d&&d.d(r)}};return H("SvelteRegisterBlock",{block:C,id:fe.name,type:"if",source:"(77:8) {#if !fake}",ctx:t}),C}function ue(t){let e,s,c,l,o,a,u,v,d,C,k,r,m,V,P,L,T,I,q,n,ne,de;function pe(j,i){return j[1]?Ve:Pe}let z=pe(t),S=z(t);const oe=t[11].stats,G=X(oe,t,t[10],Ne),F=G||Se(t),ie=t[11].tags,D=X(ie,t,t[10],De);let w=!t[1]&&fe(t);const re=t[11].outer,N=X(re,t,t[10],Ce),me={c:function(){e=b("div"),s=b("div"),c=b("div"),S.c(),l=R(),o=b("div"),a=b("div"),u=b("div"),v=b("a"),d=b("span"),C=te(t[3]),k=R(),r=b("h5"),F&&F.c(),m=R(),D&&D.c(),V=R(),P=b("div"),L=te(t[2]),T=R(),I=b("div"),w&&w.c(),q=R(),N&&N.c(),this.h()},l:function(i){e=x(i,"DIV",{class:!0,role:!0});var p=E(e);s=x(p,"DIV",{class:!0});var J=E(s);c=x(J,"DIV",{class:!0,role:!0,tabindex:!0});var he=E(c);S.l(he),he.forEach(h),l=A(J),o=x(J,"DIV",{class:!0});var M=E(o);a=x(M,"DIV",{class:!0});var U=E(a);u=x(U,"DIV",{class:!0});var O=E(u);v=x(O,"A",{href:!0,class:!0});var ge=E(v);d=x(ge,"SPAN",{class:!0});var we=E(d);C=se(we,t[3]),we.forEach(h),ge.forEach(h),k=A(O),r=x(O,"H5",{class:!0});var ve=E(r);F&&F.l(ve),ve.forEach(h),m=A(O),D&&D.l(O),O.forEach(h),V=A(U),P=x(U,"DIV",{class:!0});var ke=E(P);L=se(ke,t[2]),ke.forEach(h),U.forEach(h),T=A(M),I=x(M,"DIV",{class:!0});var be=E(I);w&&w.l(be),be.forEach(h),M.forEach(h),J.forEach(h),q=A(p),N&&N.l(p),p.forEach(h),this.h()},h:function(){f(c,"class","cursor-pointer card-image-container"),f(c,"role","link"),f(c,"tabindex","0"),$(c,y,40,4,1072),f(d,"class","text-xl break-words"),$(d,y,56,12,1653),f(v,"href",t[0]),f(v,"class","text-white"),$(v,y,55,10,1606),f(r,"class","text-sm m-0"),$(r,y,59,10,1735),f(u,"class","mb-2"),$(u,y,54,8,1577),f(P,"class","break-words"),Z(P,"font-flow",t[1]),$(P,y,70,8,1987),f(a,"class","flex flex-col p-4 pb-0"),$(a,y,53,6,1532),f(I,"class","self-end py-2 px-3 flex flex-row items-center text-lg gap-1"),$(I,y,75,6,2103),f(o,"class","w-full flex flex-col justify-between"),$(o,y,52,4,1475),f(s,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center s-ZL2maQw1Napu"),Z(s,"text-gray-500",t[1]),Z(s,"font-flow",t[1]),$(s,y,36,2,925),f(e,"class","card h-full overflow-hidden relative"),f(e,"role","none"),$(e,y,29,0,772)},m:function(i,p){_(i,e,p),g(e,s),g(s,c),S.m(c,null),g(s,l),g(s,o),g(o,a),g(a,u),g(u,v),g(v,d),g(d,C),g(u,k),g(u,r),F&&F.m(r,null),g(u,m),D&&D.m(u,null),g(a,V),g(a,P),g(P,L),g(o,T),g(o,I),w&&w.m(I,null),g(e,q),N&&N.m(e,null),n=!0,ne||(de=[Q(c,"click",t[12],!1,!1,!1,!1),Q(c,"keypress",t[13],!1,!1,!1,!1),Q(e,"mouseover",t[5],!1,!1,!1,!1),Q(e,"mouseout",t[6],!1,!1,!1,!1),Q(e,"focus",t[5],!1,!1,!1,!1),Q(e,"blur",t[6],!1,!1,!1,!1)],ne=!0)},p:function(i,[p]){z===(z=pe(i))&&S?S.p(i,p):(S.d(1),S=z(i),S&&(S.c(),S.m(c,null))),(!n||p&8)&&$e(C,i[3]),(!n||p&1)&&f(v,"href",i[0]),G?G.p&&(!n||p&1024)&&Y(G,oe,i,i[10],n?ee(oe,i[10],p,Ke):W(i[10]),Ne):F&&F.p&&(!n||p&2)&&F.p(i,n?p:-1),D&&D.p&&(!n||p&1024)&&Y(D,ie,i,i[10],n?ee(ie,i[10],p,Qe):W(i[10]),De),(!n||p&4)&&$e(L,i[2]),(!n||p&2)&&Z(P,"font-flow",i[1]),i[1]?w&&(Ae(),K(w,1,1,()=>{w=null}),Be()):w?(w.p(i,p),p&2&&B(w,1)):(w=fe(i),w.c(),B(w,1),w.m(I,null)),(!n||p&2)&&Z(s,"text-gray-500",i[1]),(!n||p&2)&&Z(s,"font-flow",i[1]),N&&N.p&&(!n||p&1024)&&Y(N,re,i,i[10],n?ee(re,i[10],p,Oe):W(i[10]),Ce)},i:function(i){n||(B(F,i),B(D,i),B(w),B(N,i),n=!0)},o:function(i){K(F,i),K(D,i),K(w),K(N,i),n=!1},d:function(i){i&&h(e),S.d(),F&&F.d(i),D&&D.d(i),w&&w.d(),N&&N.d(i),ne=!1,_e(de)}};return H("SvelteRegisterBlock",{block:me,id:ue.name,type:"component",source:"",ctx:t}),me}function Te(t,e,s){let c,l,o,{$$slots:a={},$$scope:u}=e;Re("FicsitCard",a,["stats","tags","actions","outer"]);let{name:v=""}=e,{logo:d=ce+"/images/no_image.webp"}=e,{description:C=""}=e,{link:k="/"}=e,{fake:r=!1}=e,m=!1,V;const P=()=>{m||(V=setTimeout(()=>{m=!0,xe(k)},250))},L=()=>{m||clearTimeout(V)},T=["name","logo","description","link","fake"];Object.keys(e).forEach(n=>{!~T.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<FicsitCard> was created with unknown prop '${n}'`)});const I=()=>ae(k),q=()=>ae(k);return t.$$set=n=>{"name"in n&&s(7,v=n.name),"logo"in n&&s(8,d=n.logo),"description"in n&&s(9,C=n.description),"link"in n&&s(0,k=n.link),"fake"in n&&s(1,r=n.fake),"$$scope"in n&&s(10,u=n.$$scope)},t.$capture_state=()=>({assets:ce,goto:ae,preloadData:xe,name:v,logo:d,description:C,link:k,fake:r,preloaded:m,timeoutHandle:V,onOver:P,onOut:L,renderedDescription:o,renderedName:l,renderedLogo:c}),t.$inject_state=n=>{"name"in n&&s(7,v=n.name),"logo"in n&&s(8,d=n.logo),"description"in n&&s(9,C=n.description),"link"in n&&s(0,k=n.link),"fake"in n&&s(1,r=n.fake),"preloaded"in n&&(m=n.preloaded),"timeoutHandle"in n&&(V=n.timeoutHandle),"renderedDescription"in n&&s(2,o=n.renderedDescription),"renderedName"in n&&s(3,l=n.renderedName),"renderedLogo"in n&&s(4,c=n.renderedLogo)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&256&&s(4,c=d||ce+"/images/no_image.webp"),t.$$.dirty&130&&s(3,l=v||r&&"Card Name"),t.$$.dirty&514&&s(2,o=C||r&&"Short card description")},[k,r,o,l,c,P,L,v,d,C,u,a,I,q]}class ze extends Ie{constructor(e){super(e),je(this,e,Te,ue,Le,{name:7,logo:8,description:9,link:0,fake:1}),H("SvelteRegisterComponent",{component:this,tagName:"FicsitCard",options:e,id:ue.name})}get name(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get description(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get link(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set link(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fake(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fake(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ze as F};
//# sourceMappingURL=FicsitCard.695b7ed5.js.map