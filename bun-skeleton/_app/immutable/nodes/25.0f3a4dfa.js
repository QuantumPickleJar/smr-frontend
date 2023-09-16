import{S as Ee,i as we,d as _,s as ke,y as Ce,I as Pe,a0 as Te,a1 as Ve,v as Be,F as ie,_ as le,H as ce,$ as Ie,J as Q,b as U,e as v,K as Ne,L as W,j as p,k as L,g as x,M as q,h as I,N as d,m as y,O as X,n as R,Q as $,t as z,q as Me,r as F,T as Re,R as Y,u as K,x as je,p as Ae,a5 as ue,Z as De,ab as Ue,a6 as Le,W as te,X as ne,Y as ae}from"../chunks/vendor.b1090c37.js";import{j as fe}from"../chunks/graphql.fef59309.js";import{T as ge}from"../chunks/Toast.c66ddab3.js";import{o as Oe,a as _e,b as ze,s as Fe,c as me,v as pe,r as $e,V as G,z as qe}from"../chunks/forms.4d060c16.js";import{t as de}from"../chunks/forms.b57595de.js";import{u as Z}from"../chunks/user.d95dfcf9.js";import{M as he}from"../chunks/MetaDescriptors.cb11bfd0.js";const{console:He}=Ie,b="src/routes/settings/+page.svelte";function ve(i){let e,t,n,l,o="Avatar:",a,c,S,u,w,m,g,E,P="Username",V,k,O,r,j,f,s,h="Save",B,N,se;u=new G({props:{for:"avatar",$$slots:{default:[ye,({messages:T})=>({10:T}),({messages:T})=>T?1024:0]},$$scope:{ctx:i}},$$inline:!0}),r=new G({props:{for:"username",$$slots:{default:[be,({messages:T})=>({10:T}),({messages:T})=>T?1024:0]},$$scope:{ctx:i}},$$inline:!0});const re={c:function(){e=v("form"),t=v("div"),n=v("div"),l=v("label"),l.textContent=o,a=U(),c=v("input"),S=U(),Q(u.$$.fragment),w=U(),m=v("div"),g=v("label"),E=v("span"),E.textContent=P,V=U(),k=v("input"),O=U(),Q(r.$$.fragment),j=U(),f=v("div"),s=v("button"),s.textContent=h,this.h()},l:function(C){e=x(C,"FORM",{});var M=I(e);t=x(M,"DIV",{class:!0});var A=I(t);n=x(A,"DIV",{class:!0});var D=I(n);l=x(D,"LABEL",{for:!0,"data-svelte-h":!0}),q(l)!=="svelte-1a2u3bg"&&(l.textContent=o),a=L(D),c=x(D,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),S=L(D),W(u.$$.fragment,D),D.forEach(p),w=L(A),m=x(A,"DIV",{class:!0});var H=I(m);g=x(H,"LABEL",{class:!0});var J=I(g);E=x(J,"SPAN",{"data-svelte-h":!0}),q(E)!=="svelte-9difb2"&&(E.textContent=P),V=L(J),k=x(J,"INPUT",{type:!0,class:!0}),J.forEach(p),O=L(H),W(r.$$.fragment,H),H.forEach(p),j=L(A),f=x(A,"DIV",{});var oe=I(f);s=x(oe,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),q(s)!=="svelte-mdlg4p"&&(s.textContent=h),oe.forEach(p),A.forEach(p),M.forEach(p),this.h()},h:function(){d(l,"for","avatar"),y(l,b,81,12,2470),d(c,"id","avatar"),d(c,"class","base-input"),d(c,"name","avatar"),d(c,"type","file"),d(c,"accept","image/png,image/jpeg,image/gif"),d(c,"placeholder","Avatar"),y(c,b,82,12,2518),d(n,"class","grid grid-flow-row gap-2"),y(n,b,80,10,2419),y(E,b,96,14,3016),d(k,"type","text"),k.required=!0,d(k,"class","input p-2"),y(k,b,97,14,3052),d(g,"class","label"),y(g,b,95,12,2980),d(m,"class","grid grid-flow-row gap-2"),y(m,b,94,10,2929),d(s,"class","btn variant-ghost-primary"),d(s,"type","submit"),y(s,b,105,12,3369),y(f,b,104,10,3351),d(t,"class","grid grid-flow-row gap-6"),y(t,b,79,8,2370),y(e,b,78,6,2346)},m:function(C,M){R(C,e,M),$(e,t),$(t,n),$(n,l),$(n,a),$(n,c),$(n,S),X(u,n,null),$(t,w),$(t,m),$(m,g),$(g,E),$(g,V),$(g,k),ue(k,i[5].username),$(m,O),X(r,m,null),$(t,j),$(t,f),$(f,s),B=!0,N||(se=[De(k,"input",i[7]),Ue(i[4].call(null,e))],N=!0)},p:function(C,M){const A={};M&3072&&(A.$$scope={dirty:M,ctx:C}),u.$set(A),M&32&&k.value!==C[5].username&&ue(k,C[5].username);const D={};M&3072&&(D.$$scope={dirty:M,ctx:C}),r.$set(D)},i:function(C){B||(F(u.$$.fragment,C),F(r.$$.fragment,C),B=!0)},o:function(C){z(u.$$.fragment,C),z(r.$$.fragment,C),B=!1},d:function(C){C&&p(e),Y(u),Y(r),N=!1,Le(se)}};return _("SvelteRegisterBlock",{block:re,id:ve.name,type:"else",source:"(69:4) {:else}",ctx:i}),re}function xe(i){let e,t="Please log in";const n={c:function(){e=v("p"),e.textContent=t,this.h()},l:function(o){e=x(o,"P",{"data-svelte-h":!0}),q(e)!=="svelte-1njyisr"&&(e.textContent=t),this.h()},h:function(){y(e,b,76,6,2307)},m:function(o,a){R(o,e,a)},p:K,i:K,o:K,d:function(o){o&&p(e)}};return _("SvelteRegisterBlock",{block:n,id:xe.name,type:"if",source:"(67:4) {#if $user === null}",ctx:i}),n}function ye(i){let e,t=(i[10]||"")+"",n;const l={c:function(){e=v("span"),n=te(t),this.h()},l:function(a){e=x(a,"SPAN",{class:!0});var c=I(e);n=ne(c,t),c.forEach(p),this.h()},h:function(){d(e,"class","validation-message"),y(e,b,90,14,2812)},m:function(a,c){R(a,e,c),$(e,n)},p:function(a,c){c&1024&&t!==(t=(a[10]||"")+"")&&ae(n,t)},d:function(a){a&&p(e)}};return _("SvelteRegisterBlock",{block:l,id:ye.name,type:"slot",source:'(81:12) <ValidationMessage for=\\"avatar\\" let:messages={message}>',ctx:i}),l}function be(i){let e,t=(i[10]||"")+"",n;const l={c:function(){e=v("span"),n=te(t),this.h()},l:function(a){e=x(a,"SPAN",{class:!0});var c=I(e);n=ne(c,t),c.forEach(p),this.h()},h:function(){d(e,"class","validation-message"),y(e,b,100,14,3234)},m:function(a,c){R(a,e,c),$(e,n)},p:function(a,c){c&1024&&t!==(t=(a[10]||"")+"")&&ae(n,t)},d:function(a){a&&p(e)}};return _("SvelteRegisterBlock",{block:l,id:be.name,type:"slot",source:'(91:12) <ValidationMessage for=\\"username\\" let:messages={message}>',ctx:i}),l}function Se(i){let e,t;const n={c:function(){e=v("span"),t=te(i[3]),this.h()},l:function(o){e=x(o,"SPAN",{});var a=I(e);t=ne(a,i[3]),a.forEach(p),this.h()},h:function(){y(e,b,114,2,3552)},m:function(o,a){R(o,e,a),$(e,t)},p:function(o,a){a&8&&ae(t,o[3])},d:function(o){o&&p(e)}};return _("SvelteRegisterBlock",{block:n,id:Se.name,type:"slot",source:"(105:0) <Toast bind:running={errorToast}>",ctx:i}),n}function ee(i){let e,t,n,l="Settings",o,a,c,S,u,w,m,g,E;e=new he({props:{description:"Change your user settings",title:"Settings"},$$inline:!0});const P=[xe,ve],V=[];function k(f,s){return f[2]===null?0:1}S=k(i),u=V[S]=P[S](i);function O(f){i[8](f)}let r={$$slots:{default:[Se]},$$scope:{ctx:i}};i[0]!==void 0&&(r.running=i[0]),m=new ge({props:r,$$inline:!0}),Ce.push(()=>Pe(m,"running",O));const j={c:function(){Q(e.$$.fragment),t=U(),n=v("h1"),n.textContent=l,o=U(),a=v("div"),c=v("section"),u.c(),w=U(),Q(m.$$.fragment),this.h()},l:function(s){const h=Ne("svelte-1ae5i2c",document.head);W(e.$$.fragment,h),h.forEach(p),t=L(s),n=x(s,"H1",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-1ozads0"&&(n.textContent=l),o=L(s),a=x(s,"DIV",{class:!0});var B=I(a);c=x(B,"SECTION",{});var N=I(c);u.l(N),N.forEach(p),B.forEach(p),w=L(s),W(m.$$.fragment,s),this.h()},h:function(){d(n,"class","text-4xl my-4 font-bold"),y(n,b,71,0,2190),y(c,b,74,2,2266),d(a,"class","card p-4"),y(a,b,73,0,2241)},m:function(s,h){X(e,document.head,null),R(s,t,h),R(s,n,h),R(s,o,h),R(s,a,h),$(a,c),V[S].m(c,null),R(s,w,h),X(m,s,h),E=!0},p:function(s,[h]){let B=S;S=k(s),S===B?V[S].p(s,h):(Ae(),z(V[B],1,1,()=>{V[B]=null}),Me(),u=V[S],u?u.p(s,h):(u=V[S]=P[S](s),u.c()),F(u,1),u.m(c,null));const N={};h&2056&&(N.$$scope={dirty:h,ctx:s}),!g&&h&1&&(g=!0,N.running=s[0],Re(()=>g=!1)),m.$set(N)},i:function(s){E||(F(e.$$.fragment,s),F(u),F(m.$$.fragment,s),E=!0)},o:function(s){z(e.$$.fragment,s),z(u),z(m.$$.fragment,s),E=!1},d:function(s){s&&(p(t),p(n),p(o),p(a),p(w)),Y(e),V[S].d(),Y(m,s)}};return _("SvelteRegisterBlock",{block:j,id:ee.name,type:"component",source:"",ctx:i}),j}function Je(i,e,t){let n,l,o=K,a=()=>(o(),o=je(P,r=>t(5,l=r)),P);Te(Z,"user"),Ve(i,Z,r=>t(2,n=r)),i.$$.on_destroy.push(()=>o());let{$$slots:c={},$$scope:S}=e;Be("Page",c,[]);let u="",w=!1;const m=ie(),g=Oe({avatar:_e(ze().refine(r=>"name"in r&&"size"in r&&"type"in r)),username:Fe().min(3).max(32)});let E,P;const V=[];Object.keys(e).forEach(r=>{!~V.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&He.warn(`<Page> was created with unknown prop '${r}'`)});function k(){l.username=this.value,P.set(l)}function O(r){w=r,t(0,w),t(2,n),t(1,P)}return i.$capture_state=()=>({getContextClient:ie,UpdateUserDocument:fe,Toast:ge,goto:le,createForm:me,validator:pe,reporter:$e,ValidationMessage:G,trimNonSchema:de,user:Z,zod:qe,base:ce,MetaDescriptors:he,errorMessage:u,errorToast:w,client:m,userSchema:g,form:E,data:P,$user:n,$data:l}),i.$inject_state=r=>{"errorMessage"in r&&t(3,u=r.errorMessage),"errorToast"in r&&t(0,w=r.errorToast),"form"in r&&t(4,E=r.form),"data"in r&&a(t(1,P=r.data))},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{if(i.$$.dirty&6&&n&&!P){const r=me({initialValues:{username:n.username},extend:[pe({schema:g}),$e],onSubmit:j=>{console.log("submitted",j),m.mutation(fe,{user:de(j,g),userId:n.id}).toPromise().then(f=>{f.error?(console.error(f.error.message),t(3,u="Error editing user: "+f.error.message),t(0,w=!0)):le(ce+"/user/"+f.data.updateUser.id)})}});t(4,E=r.form),a(t(1,P=r.data))}i.$$.dirty&1&&(w||t(3,u=""))},[w,P,n,u,E,l,g,k,O]}class et extends Ee{constructor(e){super(e),we(this,e,Je,ee,ke,{userSchema:6}),_("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ee.name})}get userSchema(){return this.$$.ctx[6]}set userSchema(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{et as component};
//# sourceMappingURL=25.0f3a4dfa.js.map
