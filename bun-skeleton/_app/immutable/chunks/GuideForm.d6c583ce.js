import{S as se,i as ie,s as ne,d as C,a7 as Xt,v as oe,ar as qt,a0 as Ct,a1 as ae,e as m,W as L,b as P,J as kt,g as f,h as g,X as M,j as u,k as _,L as Vt,m as p,N as $,n as nt,Q as n,a5 as K,O as Tt,Z as Ft,ab as re,Y as q,a8 as ce,r as Pt,t as _t,R as Nt,a6 as le,u as N,x as ue,a9 as me,aa as fe}from"./vendor.b1090c37.js";import{o as pe,s as At,V as ht,c as Jt,v as Qt,r as Wt}from"./forms.4d060c16.js";import{t as Yt}from"./forms.b57595de.js";import{m as Rt}from"./markdown.ac1eb5f5.js";const Gt=pe({name:At().min(3).max(32),short_description:At().min(16).max(128),guide:At()});const d="src/lib/components/guides/GuideForm.svelte";function Zt(e){let t,s=(e[13]||"")+"",a;const c={c:function(){t=m("span"),a=L(s),this.h()},l:function(i){t=f(i,"SPAN",{class:!0});var r=g(t);a=M(r,s),r.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,37,8,1144)},m:function(i,r){nt(i,t,r),n(t,a)},p:function(i,r){r&8192&&s!==(s=(i[13]||"")+"")&&q(a,s)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:Zt.name,type:"slot",source:'(31:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:e}),c}function zt(e){let t,s=(e[13]||"")+"",a;const c={c:function(){t=m("span"),a=L(s),this.h()},l:function(i){t=f(i,"SPAN",{class:!0});var r=g(t);a=M(r,s),r.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,47,8,1553)},m:function(i,r){nt(i,t,r),n(t,a)},p:function(i,r){r&8192&&s!==(s=(i[13]||"")+"")&&q(a,s)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:zt.name,type:"slot",source:'(41:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:e}),c}function Ht(e){let t,s=(e[13]||"")+"",a;const c={c:function(){t=m("span"),a=L(s),this.h()},l:function(i){t=f(i,"SPAN",{class:!0});var r=g(t);a=M(r,s),r.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,58,10,2005)},m:function(i,r){nt(i,t,r),n(t,a)},p:function(i,r){r&8192&&s!==(s=(i[13]||"")+"")&&q(a,s)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:Ht.name,type:"slot",source:'(52:8) <ValidationMessage for=\\"guide\\" let:messages={message}>',ctx:e}),c}function Kt(e){const t={c:N,l:N,m:N,p:N,d:N};return C("SvelteRegisterBlock",{block:t,id:Kt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function te(e){let t,s,a=e[12]+"";const c={c:function(){t=m("div"),s=new me(!1),this.h()},l:function(i){t=f(i,"DIV",{class:!0});var r=g(t);s=fe(r,!1),r.forEach(u),this.h()},h:function(){s.a=null,$(t,"class","markdown-content right s-pSUceh_9Xnkb"),p(t,d,65,10,2300)},m:function(i,r){nt(i,t,r),s.m(a,t)},p:function(i,r){r&8&&a!==(a=i[12]+"")&&s.p(a)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:te.name,type:"then",source:'(58:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),c}function ee(e){const t={c:N,l:N,m:N,p:N,d:N};return C("SvelteRegisterBlock",{block:t,id:ee.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function Bt(e){let t,s,a,c,o,i=e[4]("entry.name")+"",r,tt,k,G,b,R,x,V,E,J=e[4]("entry.short-description")+"",Z,et,S,l,O,gt,B,I,D,z,st=e[4]("guide")+"",ot,$t,T,vt,U,bt,A,Q,it=e[4]("preview")+"",at,wt,xt,rt,Et,H,X,ct,j,St,It;b=new ht({props:{for:"name",$$slots:{default:[Zt,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0}),O=new ht({props:{for:"short_description",$$slots:{default:[zt,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0}),U=new ht({props:{for:"guide",$$slots:{default:[Ht,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0});let y={ctx:e,current:null,token:null,hasCatch:!1,pending:ee,then:te,catch:Kt,value:12};Xt(rt=Rt(e[3]),y);const Dt={c:function(){t=m("form"),s=m("div"),a=m("div"),c=m("label"),o=m("span"),r=L(i),tt=P(),k=m("input"),G=P(),kt(b.$$.fragment),R=P(),x=m("div"),V=m("label"),E=m("span"),Z=L(J),et=P(),S=m("input"),l=P(),kt(O.$$.fragment),gt=P(),B=m("div"),I=m("div"),D=m("label"),z=m("span"),ot=L(st),$t=P(),T=m("textarea"),vt=P(),kt(U.$$.fragment),bt=P(),A=m("div"),Q=m("span"),at=L(it),wt=L(":"),xt=P(),y.block.c(),Et=P(),H=m("div"),X=m("button"),ct=L(e[1]),this.h()},l:function(w){t=f(w,"FORM",{});var h=g(t);s=f(h,"DIV",{class:!0});var F=g(s);a=f(F,"DIV",{class:!0});var W=g(a);c=f(W,"LABEL",{class:!0});var Y=g(c);o=f(Y,"SPAN",{});var jt=g(o);r=M(jt,i),jt.forEach(u),tt=_(Y),k=f(Y,"INPUT",{type:!0,class:!0}),Y.forEach(u),G=_(W),Vt(b.$$.fragment,W),W.forEach(u),R=_(F),x=f(F,"DIV",{class:!0});var lt=g(x);V=f(lt,"LABEL",{class:!0});var ut=g(V);E=f(ut,"SPAN",{});var Lt=g(E);Z=M(Lt,J),Lt.forEach(u),et=_(ut),S=f(ut,"INPUT",{type:!0,class:!0}),ut.forEach(u),l=_(lt),Vt(O.$$.fragment,lt),lt.forEach(u),gt=_(F),B=f(F,"DIV",{class:!0});var mt=g(B);I=f(mt,"DIV",{class:!0});var ft=g(I);D=f(ft,"LABEL",{class:!0});var pt=g(D);z=f(pt,"SPAN",{});var Mt=g(z);ot=M(Mt,st),Mt.forEach(u),$t=_(pt),T=f(pt,"TEXTAREA",{class:!0,rows:!0}),g(T).forEach(u),pt.forEach(u),vt=_(ft),Vt(U.$$.fragment,ft),ft.forEach(u),bt=_(mt),A=f(mt,"DIV",{class:!0});var dt=g(A);Q=f(dt,"SPAN",{});var yt=g(Q);at=M(yt,it),wt=M(yt,":"),yt.forEach(u),xt=_(dt),y.block.l(dt),dt.forEach(u),mt.forEach(u),Et=_(F),H=f(F,"DIV",{});var Ot=g(H);X=f(Ot,"BUTTON",{class:!0,type:!0});var Ut=g(X);ct=M(Ut,e[1]),Ut.forEach(u),Ot.forEach(u),F.forEach(u),h.forEach(u),this.h()},h:function(){p(o,d,33,8,948),$(k,"type","text"),k.required=!0,$(k,"class","input p-2"),p(k,d,34,8,988),$(c,"class","label"),p(c,d,32,6,918),$(a,"class","grid grid-flow-row gap-2"),p(a,d,31,4,873),p(E,d,43,8,1318),$(S,"type","text"),S.required=!0,$(S,"class","input p-2"),p(S,d,44,8,1371),$(V,"class","label"),p(V,d,42,6,1288),$(x,"class","grid grid-flow-row gap-2"),p(x,d,41,4,1243),p(z,d,54,10,1782),$(T,"class","vertical-textarea textarea p-2"),T.required=!0,$(T,"rows",10),p(T,d,55,10,1819),$(D,"class","label"),p(D,d,53,8,1750),$(I,"class","grid grid-flow-row gap-2 auto-rows-max"),p(I,d,52,6,1689),p(Q,d,62,8,2170),$(A,"class","grid grid-flow-row gap-2 auto-rows-max"),p(A,d,61,6,2109),$(B,"class","grid gap-6 split s-pSUceh_9Xnkb"),p(B,d,51,4,1652),$(X,"class","btn variant-ghost-primary"),$(X,"type","submit"),p(X,d,71,6,2424),p(H,d,70,4,2412),$(s,"class","grid grid-flow-row gap-6"),p(s,d,30,2,830),p(t,d,29,0,812)},m:function(w,h){nt(w,t,h),n(t,s),n(s,a),n(a,c),n(c,o),n(o,r),n(c,tt),n(c,k),K(k,e[2].name),n(a,G),Tt(b,a,null),n(s,R),n(s,x),n(x,V),n(V,E),n(E,Z),n(V,et),n(V,S),K(S,e[2].short_description),n(x,l),Tt(O,x,null),n(s,gt),n(s,B),n(B,I),n(I,D),n(D,z),n(z,ot),n(D,$t),n(D,T),K(T,e[2].guide),n(I,vt),Tt(U,I,null),n(B,bt),n(B,A),n(A,Q),n(Q,at),n(Q,wt),n(A,xt),y.block.m(A,y.anchor=null),y.mount=()=>A,y.anchor=null,n(s,Et),n(s,H),n(H,X),n(X,ct),j=!0,St||(It=[Ft(k,"input",e[9]),Ft(S,"input",e[10]),Ft(T,"input",e[11]),re(e[5].call(null,t))],St=!0)},p:function(w,[h]){e=w,(!j||h&16)&&i!==(i=e[4]("entry.name")+"")&&q(r,i),h&4&&k.value!==e[2].name&&K(k,e[2].name);const F={};h&24576&&(F.$$scope={dirty:h,ctx:e}),b.$set(F),(!j||h&16)&&J!==(J=e[4]("entry.short-description")+"")&&q(Z,J),h&4&&S.value!==e[2].short_description&&K(S,e[2].short_description);const W={};h&24576&&(W.$$scope={dirty:h,ctx:e}),O.$set(W),(!j||h&16)&&st!==(st=e[4]("guide")+"")&&q(ot,st),h&4&&K(T,e[2].guide);const Y={};h&24576&&(Y.$$scope={dirty:h,ctx:e}),U.$set(Y),(!j||h&16)&&it!==(it=e[4]("preview")+"")&&q(at,it),y.ctx=e,h&8&&rt!==(rt=Rt(e[3]))&&Xt(rt,y)||ce(y,e,h),(!j||h&2)&&q(ct,e[1])},i:function(w){j||(Pt(b.$$.fragment,w),Pt(O.$$.fragment,w),Pt(U.$$.fragment,w),j=!0)},o:function(w){_t(b.$$.fragment,w),_t(O.$$.fragment,w),_t(U.$$.fragment,w),j=!1},d:function(w){w&&u(t),Nt(b),Nt(O),Nt(U),y.block.d(),y.token=null,y=null,St=!1,le(It)}};return C("SvelteRegisterBlock",{block:Dt,id:Bt.name,type:"component",source:"",ctx:e}),Dt}function de(e,t,s){let a,c,o,i=N,r=()=>(i(),i=ue(G,l=>s(4,o=l)),G);e.$$.on_destroy.push(()=>i());let{$$slots:tt={},$$scope:k}=t;oe("GuideForm",tt,[]);const{t:G}=qt();Ct(G,"t"),r();let{onSubmit:b}=t,{initialValues:R={name:"",guide:"",short_description:""}}=t,{submitText:x=o("entry.create")}=t;const{form:V,data:E}=Jt({initialValues:R,extend:[Qt({schema:Gt}),Wt],onSubmit:l=>b(Yt(l,Gt))});Ct(E,"data"),ae(e,E,l=>s(2,c=l)),e.$$.on_mount.push(function(){b===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<GuideForm> was created without expected prop 'onSubmit'")});const J=["onSubmit","initialValues","submitText"];Object.keys(t).forEach(l=>{!~J.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<GuideForm> was created with unknown prop '${l}'`)});function Z(){c.name=this.value,E.set(c)}function et(){c.short_description=this.value,E.set(c)}function S(){c.guide=this.value,E.set(c)}return e.$$set=l=>{"onSubmit"in l&&s(7,b=l.onSubmit),"initialValues"in l&&s(8,R=l.initialValues),"submitText"in l&&s(1,x=l.submitText)},e.$capture_state=()=>({createForm:Jt,validator:Qt,reporter:Wt,ValidationMessage:ht,guideSchema:Gt,trimNonSchema:Yt,markdown:Rt,getTranslate:qt,t:G,onSubmit:b,initialValues:R,submitText:x,form:V,data:E,preview:a,$data:c,$t:o}),e.$inject_state=l=>{"onSubmit"in l&&s(7,b=l.onSubmit),"initialValues"in l&&s(8,R=l.initialValues),"submitText"in l&&s(1,x=l.submitText),"preview"in l&&s(3,a=l.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&4&&s(3,a=c.guide||"")},[G,x,c,a,o,V,E,b,R,Z,et,S]}class be extends se{constructor(t){super(t),ie(this,t,de,Bt,ne,{t:0,onSubmit:7,initialValues:8,submitText:1}),C("SvelteRegisterComponent",{component:this,tagName:"GuideForm",options:t,id:Bt.name})}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{be as G};
//# sourceMappingURL=GuideForm.d6c583ce.js.map
