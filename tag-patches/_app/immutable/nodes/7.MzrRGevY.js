import{S as kt,i as Tt,d as P,s as bt,v as Nt,F as X,G as Y,a1 as St,a2 as Ct,_ as Z,a3 as ot,a4 as ct,a0 as Dt,e as x,g as k,h as A,j as h,N as C,m as T,n as b,t as O,q as lt,r as B,y as wt,U as K,p as rt,J as ut,b as R,L as ft,k as E,M as j,O as gt,Q as w,Z as I,R as dt,W as G,X as L,Y as mt,u as U,f as tt,V as Pt,a5 as Q,a6 as Bt}from"../chunks/vendor.mY4N8sOr.js";import{a as et,C as nt,b as at,U as st}from"../chunks/graphql.NreK-VdG.js";const{console:It}=Dt,N="src/routes/admin/tag-manager/+page.svelte";function it(s,t,e){const a=s.slice();return a[18]=t[e],a[19]=t,a[20]=e,a}function pt(s){let t,e,a,n,o,f="Add new tag",c,r,u="add",l,d,$;t=new ot({props:{$$slots:{default:[xt]},$$scope:{ctx:s}},$$inline:!0});const D={c:function(){ut(t.$$.fragment),e=R(),a=x("section"),n=x("button"),o=x("span"),o.textContent=f,c=R(),r=x("span"),r.textContent=u,this.h()},l:function(m){ft(t.$$.fragment,m),e=E(m),a=k(m,"SECTION",{class:!0});var y=A(a);n=k(y,"BUTTON",{class:!0});var S=A(n);o=k(S,"SPAN",{"data-svelte-h":!0}),j(o)!=="svelte-haz7sd"&&(o.textContent=f),c=E(S),r=k(S,"SPAN",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-99y27o"&&(r.textContent=u),S.forEach(h),y.forEach(h),this.h()},h:function(){T(o,N,172,8,4952),C(r,"class","material-icons"),T(r,N,173,8,4985),C(n,"class","variant-ghost-primary btn"),T(n,N,171,6,4883),C(a,"class","p-4"),T(a,N,170,4,4855)},m:function(m,y){gt(t,m,y),b(m,e,y),b(m,a,y),w(a,n),w(n,o),w(n,c),w(n,r),l=!0,d||($=I(n,"click",s[4],!1,!1,!1,!1),d=!0)},p:function(m,y){const S={};y&2097158&&(S.$$scope={dirty:y,ctx:m}),t.$set(S)},i:function(m){l||(B(t.$$.fragment,m),l=!0)},o:function(m){O(t.$$.fragment,m),l=!1},d:function(m){m&&(h(e),h(a)),dt(t,m),d=!1,$()}};return P("SvelteRegisterBlock",{block:D,id:pt.name,type:"else",source:"(128:2) {:else}",ctx:s}),D}function ht(s){let t,e,a=s[0].error.message+"",n;const o={c:function(){t=x("h1"),e=G("Failed to load tags: "),n=G(a),this.h()},l:function(c){t=k(c,"H1",{});var r=A(t);e=L(r,"Failed to load tags: "),n=L(r,a),r.forEach(h),this.h()},h:function(){T(t,N,137,4,3747)},m:function(c,r){b(c,t,r),w(t,e),w(t,n)},p:function(c,r){r&1&&a!==(a=c[0].error.message+"")&&mt(n,a)},i:U,o:U,d:function(c){c&&h(t)}};return P("SvelteRegisterBlock",{block:o,id:ht.name,type:"if",source:"(126:29) ",ctx:s}),o}function $t(s){let t,e="Loading tags...";const a={c:function(){t=x("h1"),t.textContent=e,this.h()},l:function(o){t=k(o,"H1",{"data-svelte-h":!0}),j(t)!=="svelte-ud4eq5"&&(t.textContent=e),this.h()},h:function(){T(t,N,135,4,3688)},m:function(o,f){b(o,t,f)},p:U,i:U,o:U,d:function(o){o&&h(t)}};return P("SvelteRegisterBlock",{block:a,id:$t.name,type:"if",source:"(124:2) {#if $tagsQuery.fetching}",ctx:s}),a}function vt(s){let t=s[18].name+"",e;const a={c:function(){e=G(t)},l:function(o){e=L(o,t)},m:function(o,f){b(o,e,f)},p:function(o,f){f&2&&t!==(t=o[18].name+"")&&mt(e,t)},d:function(o){o&&h(e)}};return P("SvelteRegisterBlock",{block:a,id:vt.name,type:"slot",source:'(132:10) <svelte:fragment slot=\\"summary\\">',ctx:s}),a}function yt(s){let t,e,a=s[18],n,o,f,c,r="Human-Readable name and description of the tag that is shown in UI",u,l,d,$="Delete",D,v,m;function y(){s[7].call(e,s[19],s[20])}const S=()=>s[8](e,a),F=()=>s[8](null,a);function _(){return s[9](s[18])}function H(){s[10].call(o,s[19],s[20])}function V(){return s[11](s[18])}function z(...i){return s[12](s[18],...i)}const q={c:function(){t=x("div"),e=x("input"),n=R(),o=x("input"),f=R(),c=x("span"),c.textContent=r,u=R(),l=x("button"),d=x("span"),d.textContent=$,D=R(),this.h()},l:function(g){t=k(g,"DIV",{});var p=A(t);e=k(p,"INPUT",{type:!0,class:!0,placeholder:!0}),n=E(p),o=k(p,"INPUT",{type:!0,class:!0,placeholder:!0}),p.forEach(h),f=E(g),c=k(g,"SPAN",{slot:!0,"data-svelte-h":!0}),j(c)!=="svelte-2kgxo4"&&(c.textContent=r),u=E(g),l=k(g,"BUTTON",{class:!0});var W=A(l);d=k(W,"SPAN",{"data-svelte-h":!0}),j(d)!=="svelte-gz26bx"&&(d.textContent=$),W.forEach(h),D=E(g),this.h()},h:function(){C(e,"type","text"),C(e,"class","input p-2"),C(e,"placeholder","Name"),T(e,N,145,14,4026),C(o,"type","text"),C(o,"class","input p-2"),C(o,"placeholder","Description"),T(o,N,153,14,4282),T(t,N,144,12,4006),C(c,"slot","helper"),T(c,N,160,12,4521),T(d,N,163,14,4723),C(l,"class","variant-ghost-error btn"),T(l,N,162,12,4628)},m:function(g,p){b(g,t,p),w(t,e),Q(e,s[18].name),S(),w(t,n),w(t,o),Q(o,s[18].description),b(g,f,p),b(g,c,p),b(g,u,p),b(g,l,p),w(l,d),b(g,D,p),v||(m=[I(e,"input",y),I(e,"change",_,!1,!1,!1,!1),I(o,"input",H),I(o,"change",V,!1,!1,!1,!1),I(l,"click",z,!1,!1,!1,!1)],v=!0)},p:function(g,p){s=g,p&2&&e.value!==s[18].name&&Q(e,s[18].name),a!==s[18]&&(F(),a=s[18],S()),p&2&&o.value!==s[18].description&&Q(o,s[18].description)},d:function(g){g&&(h(t),h(f),h(c),h(u),h(l),h(D)),F(),v=!1,Bt(m)}};return P("SvelteRegisterBlock",{block:q,id:yt.name,type:"slot",source:'(133:10) <svelte:fragment slot=\\"content\\">',ctx:s}),q}function J(s){let t,e;t=new ct({props:{$$slots:{content:[yt],summary:[vt]},$$scope:{ctx:s}},$$inline:!0});const a={c:function(){ut(t.$$.fragment)},l:function(o){ft(t.$$.fragment,o)},m:function(o,f){gt(t,o,f),e=!0},p:function(o,f){const c={};f&2097158&&(c.$$scope={dirty:f,ctx:o}),t.$set(c)},i:function(o){e||(B(t.$$.fragment,o),e=!0)},o:function(o){O(t.$$.fragment,o),e=!1},d:function(o){dt(t,o)}};return P("SvelteRegisterBlock",{block:a,id:J.name,type:"each",source:"(130:6) {#each tags as tag}",ctx:s}),a}function xt(s){let t,e,a=K(s[1]),n=[];for(let c=0;c<a.length;c+=1)n[c]=J(it(s,a,c));const o=c=>O(n[c],1,1,()=>{n[c]=null}),f={c:function(){for(let r=0;r<n.length;r+=1)n[r].c();t=tt()},l:function(r){for(let u=0;u<n.length;u+=1)n[u].l(r);t=tt()},m:function(r,u){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(r,u);b(r,t,u),e=!0},p:function(r,u){if(u&102){a=K(r[1]);let l;for(l=0;l<a.length;l+=1){const d=it(r,a,l);n[l]?(n[l].p(d,u),B(n[l],1)):(n[l]=J(d),n[l].c(),B(n[l],1),n[l].m(t.parentNode,t))}for(rt(),l=a.length;l<n.length;l+=1)o(l);lt()}},i:function(r){if(!e){for(let u=0;u<a.length;u+=1)B(n[u]);e=!0}},o:function(r){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)O(n[u]);e=!1},d:function(r){r&&h(t),Pt(n,r)}};return P("SvelteRegisterBlock",{block:f,id:xt.name,type:"slot",source:"(129:4) <Accordion>",ctx:s}),f}function M(s){let t,e,a,n;const o=[$t,ht,pt],f=[];function c(u,l){return u[0].fetching?0:u[0].error?1:2}e=c(s),a=f[e]=o[e](s);const r={c:function(){t=x("div"),a.c(),this.h()},l:function(l){t=k(l,"DIV",{class:!0});var d=A(t);a.l(d),d.forEach(h),this.h()},h:function(){C(t,"class","card"),T(t,N,133,0,3637)},m:function(l,d){b(l,t,d),f[e].m(t,null),n=!0},p:function(l,[d]){let $=e;e=c(l),e===$?f[e].p(l,d):(rt(),O(f[$],1,1,()=>{f[$]=null}),lt(),a=f[e],a?a.p(l,d):(a=f[e]=o[e](l),a.c()),B(a,1),a.m(t,null))},i:function(l){n||(B(a),n=!0)},o:function(l){O(a),n=!1},d:function(l){l&&h(t),f[e].d()}};return P("SvelteRegisterBlock",{block:r,id:M.name,type:"component",source:"",ctx:s}),r}function Rt(s,t,e){let a,{$$slots:n={},$$scope:o}=t;Nt("Page",n,[]);const f=X();let c=[];const r={},u={};let l=-1;const d=Y({query:et,client:f,variables:{limit:100}});St(d,"tagsQuery"),Ct(s,d,i=>e(0,a=i));const $=Z();function D(){if(c.find(i=>i.name=="New Tag"))r[c[c.length-1].id].setOpen(!0),u[c[c.length-1].id].focus();else{const i={id:l--,name:"New Tag",description:"Description"};c.push(i),e(1,c),e(0,a),setTimeout(()=>{r[i.id].setOpen(!0);const g=u[i.id];g.focus(),g.getElement().querySelectorAll("input")[0].select()},0)}}async function v(i){if(i.name=="New Tag")return;let g=!1;if(i.id<0){try{const p=await f.mutation(nt,{tagName:i.name,description:i.description}).toPromise();p.data&&(i.id=p.data.createTag.id,g=!0)}catch(p){console.log(p)}if(!g){$.trigger({message:`Failed to create Tag '${i.name}'!`,background:"variant-filled-error",timeout:2e3});return}}else{try{g=(await f.mutation(st,{tagID:i.id,tagName:i.name,description:i.description}).toPromise()).data.updateTag!=null}catch{}if(!g){$.trigger({message:`Failed to update Tag '${i.name}'!`,background:"variant-filled-error",timeout:2e3});return}}$.trigger({message:`Tag '${i.name}' saved!`,background:"variant-filled-success",timeout:2e3})}async function m(i){if(i.name!="New Tag"){let g=!1;try{g=(await f.mutation(at,{tagID:i.id}).toPromise()).data.deleteTag}catch{g=!1}if(!g){$.trigger({message:`Failed to remove Tag '${i.name}'!`,background:"variant-filled-error",timeout:2e3});return}}$.trigger({message:`Tag '${i.name}' removed!`,background:"variant-filled-success",timeout:2e3})}function y(i,g){i.stopPropagation(),m(g)}const S=[];Object.keys(t).forEach(i=>{!~S.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&It.warn(`<Page> was created with unknown prop '${i}'`)});function F(i,g){i[g].name=this.value,e(1,c),e(0,a)}function _(i,g){wt[i?"unshift":"push"](()=>{u[g.id]=i,e(2,u)})}const H=i=>v(i);function V(i,g){i[g].description=this.value,e(1,c),e(0,a)}const z=i=>v(i),q=(i,g)=>y(g,i);return s.$capture_state=()=>({getContextClient:X,queryStore:Y,CreateTagDocument:nt,DeleteTagDocument:at,GetTagsDocument:et,UpdateTagDocument:st,Accordion:ot,AccordionItem:ct,getToastStore:Z,client:f,tags:c,panels:r,nameFields:u,tagNegativeID:l,tagsQuery:d,toastStore:$,newTag:D,tagChange:v,deleteTag:m,onDeleteClick:y,$tagsQuery:a}),s.$inject_state=i=>{"tags"in i&&e(1,c=i.tags),"tagNegativeID"in i&&(l=i.tagNegativeID)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&e(1,c=a.data?.getTags||[])},[a,c,u,d,D,v,y,F,_,H,V,z,q]}class Ot extends kt{constructor(t){super(t),Tt(this,t,Rt,M,bt,{}),P("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:M.name})}}export{Ot as component};
//# sourceMappingURL=7.MzrRGevY.js.map
