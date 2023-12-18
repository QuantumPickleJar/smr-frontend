import{S as oe,i as ae,s as re,d as C,a7 as zt,v as ce,ak as Jt,a1 as Qt,a2 as le,e as m,W as k,b as _,J as At,g as f,h as g,X as V,j as u,k as A,L as Gt,m as p,N as $,n as nt,Q as n,a5 as K,O as Nt,Z as Rt,ab as ue,Y as q,a8 as me,r as Bt,t as It,R as Dt,a6 as fe,u as G,x as pe,a9 as de,aa as he}from"./vendor.8486aff2.js";import{o as ge,s as jt,V as gt,c as Wt,v as Yt,r as Zt}from"./forms.51731081.js";import{t as Ht}from"./forms.31856c3a.js";import{m as Mt}from"./markdown.1380eda1.js";const Lt=ge({name:jt().min(3).max(32),short_description:jt().min(16).max(128),guide:jt()});const d="src/lib/components/guides/GuideForm.svelte";function Kt(e){let t,s=(e[13]||"")+"",a;const c={c:function(){t=m("span"),a=k(s),this.h()},l:function(i){t=f(i,"SPAN",{class:!0});var r=g(t);a=V(r,s),r.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,37,8,1146)},m:function(i,r){nt(i,t,r),n(t,a)},p:function(i,r){r&8192&&s!==(s=(i[13]||"")+"")&&q(a,s)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:Kt.name,type:"slot",source:'(31:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:e}),c}function te(e){let t,s=(e[13]||"")+"",a;const c={c:function(){t=m("span"),a=k(s),this.h()},l:function(i){t=f(i,"SPAN",{class:!0});var r=g(t);a=V(r,s),r.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,47,8,1557)},m:function(i,r){nt(i,t,r),n(t,a)},p:function(i,r){r&8192&&s!==(s=(i[13]||"")+"")&&q(a,s)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:te.name,type:"slot",source:'(41:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:e}),c}function ee(e){let t,s=(e[13]||"")+"",a;const c={c:function(){t=m("span"),a=k(s),this.h()},l:function(i){t=f(i,"SPAN",{class:!0});var r=g(t);a=V(r,s),r.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,58,10,2011)},m:function(i,r){nt(i,t,r),n(t,a)},p:function(i,r){r&8192&&s!==(s=(i[13]||"")+"")&&q(a,s)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:ee.name,type:"slot",source:'(52:8) <ValidationMessage for=\\"guide\\" let:messages={message}>',ctx:e}),c}function se(e){const t={c:G,l:G,m:G,p:G,d:G};return C("SvelteRegisterBlock",{block:t,id:se.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function ie(e){let t,s,a=e[12]+"";const c={c:function(){t=m("div"),s=new de(!1),this.h()},l:function(i){t=f(i,"DIV",{class:!0});var r=g(t);s=he(r,!1),r.forEach(u),this.h()},h:function(){s.a=null,$(t,"class","markdown-content right s-pSUceh_9Xnkb"),p(t,d,65,10,2306)},m:function(i,r){nt(i,t,r),s.m(a,t)},p:function(i,r){r&8&&a!==(a=i[12]+"")&&s.p(a)},d:function(i){i&&u(t)}};return C("SvelteRegisterBlock",{block:c,id:ie.name,type:"then",source:'(58:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),c}function ne(e){const t={c:G,l:G,m:G,p:G,d:G};return C("SvelteRegisterBlock",{block:t,id:ne.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function Ot(e){let t,s,a,c,o,i=e[4]("entry.name")+"",r,tt,ot,b,N,E,M,y,w,B,z=e[4]("entry.short-description")+"",Z,et,l,T,$t,O,vt,I,D,j,J,st=e[4]("guide")+"",at,bt,wt,F,xt,U,Et,R,Q,it=e[4]("preview")+"",rt,St,yt,ct,kt,H,X,lt,L,Vt,Ut;E=new gt({props:{for:"name",$$slots:{default:[Kt,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0}),O=new gt({props:{for:"short_description",$$slots:{default:[te,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0}),U=new gt({props:{for:"guide",$$slots:{default:[ee,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0});let S={ctx:e,current:null,token:null,hasCatch:!1,pending:ne,then:ie,catch:se,value:12};zt(ct=Mt(e[3]),S);const Xt={c:function(){t=m("form"),s=m("div"),a=m("div"),c=m("label"),o=m("span"),r=k(i),tt=k(" *"),ot=_(),b=m("input"),N=_(),At(E.$$.fragment),M=_(),y=m("div"),w=m("label"),B=m("span"),Z=k(z),et=k(" *"),l=_(),T=m("input"),$t=_(),At(O.$$.fragment),vt=_(),I=m("div"),D=m("div"),j=m("label"),J=m("span"),at=k(st),bt=k(" *"),wt=_(),F=m("textarea"),xt=_(),At(U.$$.fragment),Et=_(),R=m("div"),Q=m("span"),rt=k(it),St=k(":"),yt=_(),S.block.c(),kt=_(),H=m("div"),X=m("button"),lt=k(e[1]),this.h()},l:function(x){t=f(x,"FORM",{});var h=g(t);s=f(h,"DIV",{class:!0});var P=g(s);a=f(P,"DIV",{class:!0});var W=g(a);c=f(W,"LABEL",{class:!0});var Y=g(c);o=f(Y,"SPAN",{});var Tt=g(o);r=V(Tt,i),tt=V(Tt," *"),Tt.forEach(u),ot=A(Y),b=f(Y,"INPUT",{type:!0,class:!0}),Y.forEach(u),N=A(W),Gt(E.$$.fragment,W),W.forEach(u),M=A(P),y=f(P,"DIV",{class:!0});var ut=g(y);w=f(ut,"LABEL",{class:!0});var mt=g(w);B=f(mt,"SPAN",{});var Ft=g(B);Z=V(Ft,z),et=V(Ft," *"),Ft.forEach(u),l=A(mt),T=f(mt,"INPUT",{type:!0,class:!0}),mt.forEach(u),$t=A(ut),Gt(O.$$.fragment,ut),ut.forEach(u),vt=A(P),I=f(P,"DIV",{class:!0});var ft=g(I);D=f(ft,"DIV",{class:!0});var pt=g(D);j=f(pt,"LABEL",{class:!0});var dt=g(j);J=f(dt,"SPAN",{});var Pt=g(J);at=V(Pt,st),bt=V(Pt," *"),Pt.forEach(u),wt=A(dt),F=f(dt,"TEXTAREA",{class:!0,rows:!0}),g(F).forEach(u),dt.forEach(u),xt=A(pt),Gt(U.$$.fragment,pt),pt.forEach(u),Et=A(ft),R=f(ft,"DIV",{class:!0});var ht=g(R);Q=f(ht,"SPAN",{});var _t=g(Q);rt=V(_t,it),St=V(_t,":"),_t.forEach(u),yt=A(ht),S.block.l(ht),ht.forEach(u),ft.forEach(u),kt=A(P),H=f(P,"DIV",{});var qt=g(H);X=f(qt,"BUTTON",{class:!0,type:!0});var Ct=g(X);lt=V(Ct,e[1]),Ct.forEach(u),qt.forEach(u),P.forEach(u),h.forEach(u),this.h()},h:function(){p(o,d,33,8,948),$(b,"type","text"),b.required=!0,$(b,"class","input p-2"),p(b,d,34,8,990),$(c,"class","label"),p(c,d,32,6,918),$(a,"class","grid grid-flow-row gap-2"),p(a,d,31,4,873),p(B,d,43,8,1320),$(T,"type","text"),T.required=!0,$(T,"class","input p-2"),p(T,d,44,8,1375),$(w,"class","label"),p(w,d,42,6,1290),$(y,"class","grid grid-flow-row gap-2"),p(y,d,41,4,1245),p(J,d,54,10,1786),$(F,"class","vertical-textarea textarea p-2"),F.required=!0,$(F,"rows",10),p(F,d,55,10,1825),$(j,"class","label"),p(j,d,53,8,1754),$(D,"class","grid grid-flow-row gap-2 auto-rows-max"),p(D,d,52,6,1693),p(Q,d,62,8,2176),$(R,"class","grid grid-flow-row gap-2 auto-rows-max"),p(R,d,61,6,2115),$(I,"class","grid gap-6 split s-pSUceh_9Xnkb"),p(I,d,51,4,1656),$(X,"class","btn variant-ghost-primary"),$(X,"type","submit"),p(X,d,71,6,2430),p(H,d,70,4,2418),$(s,"class","grid grid-flow-row gap-6"),p(s,d,30,2,830),p(t,d,29,0,812)},m:function(x,h){nt(x,t,h),n(t,s),n(s,a),n(a,c),n(c,o),n(o,r),n(o,tt),n(c,ot),n(c,b),K(b,e[2].name),n(a,N),Nt(E,a,null),n(s,M),n(s,y),n(y,w),n(w,B),n(B,Z),n(B,et),n(w,l),n(w,T),K(T,e[2].short_description),n(y,$t),Nt(O,y,null),n(s,vt),n(s,I),n(I,D),n(D,j),n(j,J),n(J,at),n(J,bt),n(j,wt),n(j,F),K(F,e[2].guide),n(D,xt),Nt(U,D,null),n(I,Et),n(I,R),n(R,Q),n(Q,rt),n(Q,St),n(R,yt),S.block.m(R,S.anchor=null),S.mount=()=>R,S.anchor=null,n(s,kt),n(s,H),n(H,X),n(X,lt),L=!0,Vt||(Ut=[Rt(b,"input",e[9]),Rt(T,"input",e[10]),Rt(F,"input",e[11]),ue(e[5].call(null,t))],Vt=!0)},p:function(x,[h]){e=x,(!L||h&16)&&i!==(i=e[4]("entry.name")+"")&&q(r,i),h&4&&b.value!==e[2].name&&K(b,e[2].name);const P={};h&24576&&(P.$$scope={dirty:h,ctx:e}),E.$set(P),(!L||h&16)&&z!==(z=e[4]("entry.short-description")+"")&&q(Z,z),h&4&&T.value!==e[2].short_description&&K(T,e[2].short_description);const W={};h&24576&&(W.$$scope={dirty:h,ctx:e}),O.$set(W),(!L||h&16)&&st!==(st=e[4]("guide")+"")&&q(at,st),h&4&&K(F,e[2].guide);const Y={};h&24576&&(Y.$$scope={dirty:h,ctx:e}),U.$set(Y),(!L||h&16)&&it!==(it=e[4]("preview")+"")&&q(rt,it),S.ctx=e,h&8&&ct!==(ct=Mt(e[3]))&&zt(ct,S)||me(S,e,h),(!L||h&2)&&q(lt,e[1])},i:function(x){L||(Bt(E.$$.fragment,x),Bt(O.$$.fragment,x),Bt(U.$$.fragment,x),L=!0)},o:function(x){It(E.$$.fragment,x),It(O.$$.fragment,x),It(U.$$.fragment,x),L=!1},d:function(x){x&&u(t),Dt(E),Dt(O),Dt(U),S.block.d(),S.token=null,S=null,Vt=!1,fe(Ut)}};return C("SvelteRegisterBlock",{block:Xt,id:Ot.name,type:"component",source:"",ctx:e}),Xt}function $e(e,t,s){let a,c,o,i=G,r=()=>(i(),i=pe(b,l=>s(4,o=l)),b);e.$$.on_destroy.push(()=>i());let{$$slots:tt={},$$scope:ot}=t;ce("GuideForm",tt,[]);const{t:b}=Jt();Qt(b,"t"),r();let{onSubmit:N}=t,{initialValues:E={name:"",guide:"",short_description:""}}=t,{submitText:M=o("entry.create")}=t;const{form:y,data:w}=Wt({initialValues:E,extend:[Yt({schema:Lt}),Zt],onSubmit:l=>N(Ht(l,Lt))});Qt(w,"data"),le(e,w,l=>s(2,c=l)),e.$$.on_mount.push(function(){N===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<GuideForm> was created without expected prop 'onSubmit'")});const B=["onSubmit","initialValues","submitText"];Object.keys(t).forEach(l=>{!~B.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<GuideForm> was created with unknown prop '${l}'`)});function z(){c.name=this.value,w.set(c)}function Z(){c.short_description=this.value,w.set(c)}function et(){c.guide=this.value,w.set(c)}return e.$$set=l=>{"onSubmit"in l&&s(7,N=l.onSubmit),"initialValues"in l&&s(8,E=l.initialValues),"submitText"in l&&s(1,M=l.submitText)},e.$capture_state=()=>({createForm:Wt,validator:Yt,reporter:Zt,ValidationMessage:gt,guideSchema:Lt,trimNonSchema:Ht,markdown:Mt,getTranslate:Jt,t:b,onSubmit:N,initialValues:E,submitText:M,form:y,data:w,preview:a,$data:c,$t:o}),e.$inject_state=l=>{"onSubmit"in l&&s(7,N=l.onSubmit),"initialValues"in l&&s(8,E=l.initialValues),"submitText"in l&&s(1,M=l.submitText),"preview"in l&&s(3,a=l.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&4&&s(3,a=c.guide||"")},[b,M,c,a,o,y,w,N,E,z,Z,et]}class Ee extends oe{constructor(t){super(t),ae(this,t,$e,Ot,re,{t:0,onSubmit:7,initialValues:8,submitText:1}),C("SvelteRegisterComponent",{component:this,tagName:"GuideForm",options:t,id:Ot.name})}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ee as G};
//# sourceMappingURL=GuideForm.9857d632.js.map
