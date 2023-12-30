import{S as ut,i as ft,s as gt,d as R,v as mt,ap as F,e as y,W as Et,b as A,g as x,h as q,M as N,X as yt,j as $,k as _,N as E,m as k,l as xt,n as D,Q as S,ad as dt,Y as kt,aq as Dt,u as ot,F as st,G as it,a1 as Lt,a2 as Ct,a as at,ar as ht,as as vt,p as tt,t as P,q as et,r as L,y as M,I as z,U as rt,J as U,L as J,O as Q,T as G,R as W,f as lt,V as St}from"./vendor.ibgMb1_Q.js";import{a as ct}from"./graphql.fqwMiF4t.js";const B="src/lib/components/utils/TagDisplay.svelte";function X(a){let t,n,o="#",s=a[0].name+"",u,c,p,l,e,r="TODO Tag information will appear here.",m,T,w,b,I="Use Mod Tags to filter your searches and quickly find similar mods.",C,h,O,j,V;const v={c:function(){t=y("div"),n=y("span"),n.textContent=o,u=Et(s),p=A(),l=y("div"),e=y("p"),e.textContent=r,m=A(),T=y("br"),w=A(),b=y("p"),b.textContent=I,C=A(),h=y("div"),this.h()},l:function(g){t=x(g,"DIV",{class:!0,title:!0});var d=q(t);n=x(d,"SPAN",{class:!0,"data-svelte-h":!0}),N(n)!=="svelte-sdcp3o"&&(n.textContent=o),u=yt(d,s),d.forEach($),p=_(g),l=x(g,"DIV",{class:!0,"data-popup":!0,style:!0});var i=q(l);e=x(i,"P",{"data-svelte-h":!0}),N(e)!=="svelte-8qml2l"&&(e.textContent=r),m=_(i),T=x(i,"BR",{}),w=_(i),b=x(i,"P",{"data-svelte-h":!0}),N(b)!=="svelte-nmk4eg"&&(b.textContent=I),C=_(i),h=x(i,"DIV",{class:!0}),q(h).forEach($),i.forEach($),this.h()},h:function(){E(n,"class","text-orange-500"),k(n,B,17,2,419),E(t,"class","lowercase text-neutral-300 [&>*]:pointer-events-none"),E(t,"title","Click for tag information"),k(t,B,13,0,287),k(e,B,23,2,762),k(T,B,24,2,810),k(b,B,25,2,819),E(h,"class","variant-filled-surface arrow"),k(h,B,26,2,896),E(l,"class","card variant-filled-surface p-4"),E(l,"data-popup",O=`popupHoverFor${a[0].name}`),xt(l,"z-index","1000"),k(l,B,22,0,652)},m:function(g,d){D(g,t,d),S(t,n),S(t,u),D(g,p,d),D(g,l,d),S(l,e),S(l,m),S(l,T),S(l,w),S(l,b),S(l,C),S(l,h),j||(V=dt(c=F.call(null,t,a[1])),j=!0)},p:function(g,[d]){d&1&&s!==(s=g[0].name+"")&&kt(u,s),c&&Dt(c.update)&&d&2&&c.update.call(null,g[1]),d&1&&O!==(O=`popupHoverFor${g[0].name}`)&&E(l,"data-popup",O)},i:ot,o:ot,d:function(g){g&&($(t),$(p),$(l)),j=!1,V()}};return R("SvelteRegisterBlock",{block:v,id:X.name,type:"component",source:"",ctx:a}),v}function Pt(a,t,n){let o,{$$slots:s={},$$scope:u}=t;mt("TagDisplay",s,[]);let{tag:c}=t,{popupTriggerEvent:p="click"}=t;a.$$.on_mount.push(function(){c===void 0&&!("tag"in t||a.$$.bound[a.$$.props.tag])&&console.warn("<TagDisplay> was created without expected prop 'tag'")});const l=["tag","popupTriggerEvent"];return Object.keys(t).forEach(e=>{!~l.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<TagDisplay> was created with unknown prop '${e}'`)}),a.$$set=e=>{"tag"in e&&n(0,c=e.tag),"popupTriggerEvent"in e&&n(2,p=e.popupTriggerEvent)},a.$capture_state=()=>({popup:F,tag:c,popupTriggerEvent:p,popupHover:o}),a.$inject_state=e=>{"tag"in e&&n(0,c=e.tag),"popupTriggerEvent"in e&&n(2,p=e.popupTriggerEvent),"popupHover"in e&&n(1,o=e.popupHover)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),a.$$.update=()=>{a.$$.dirty&5&&n(1,o={event:p,target:`popupHoverFor${c.name}`,placement:"bottom-start"})},[c,o,p]}class $t extends ut{constructor(t){super(t),ft(this,t,Pt,X,gt,{tag:0,popupTriggerEvent:2}),R("SvelteRegisterComponent",{component:this,tagName:"TagDisplay",options:t,id:X.name})}get tag(){throw new Error("<TagDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tag(t){throw new Error("<TagDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get popupTriggerEvent(){throw new Error("<TagDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set popupTriggerEvent(t){throw new Error("<TagDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const H="src/lib/components/utils/TagList.svelte";function pt(a,t,n){const o=a.slice();return o[19]=t[n],o}function Tt(a){let t,n="Tags",o,s,u,c,p,l,e,r,m,T,w,b;function I(v){a[11](v)}function C(v){a[12](v)}let h={name:"tags",chips:"variant-filled-primary"};a[4]!==void 0&&(h.input=a[4]),a[3]!==void 0&&(h.value=a[3]),u=new vt({props:h,$$inline:!0}),M.push(()=>z(u,"input",I)),M.push(()=>z(u,"value",C)),u.$on("remove",a[13]);function O(v){a[15](v)}let j={options:a[5].filter(a[14])};a[4]!==void 0&&(j.input=a[4]),r=new ht({props:j,$$inline:!0}),M.push(()=>z(r,"input",O)),r.$on("selection",a[16]);const V={c:function(){t=y("div"),t.textContent=n,o=A(),s=y("div"),U(u.$$.fragment),l=A(),e=y("div"),U(r.$$.fragment),this.h()},l:function(f){t=x(f,"DIV",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-14odz2i"&&(t.textContent=n),o=_(f),s=x(f,"DIV",{});var g=q(s);J(u.$$.fragment,g),g.forEach($),l=_(f),e=x(f,"DIV",{class:!0,tabindex:!0,"data-popup":!0});var d=q(e);J(r.$$.fragment,d),d.forEach($),this.h()},h:function(){E(t,"class","mb-2"),k(t,H,71,4,1580),k(s,H,73,4,1614),E(e,"class","card max-h-48 w-max max-w-full overflow-y-auto p-4"),E(e,"tabindex","-1"),E(e,"data-popup","popupAutocomplete"),k(e,H,82,4,1857)},m:function(f,g){D(f,t,g),D(f,o,g),D(f,s,g),Q(u,s,null),D(f,l,g),D(f,e,g),Q(r,e,null),T=!0,w||(b=dt(F.call(null,s,a[7])),w=!0)},p:function(f,g){const d={};!c&&g&16&&(c=!0,d.input=f[4],G(()=>c=!1)),!p&&g&8&&(p=!0,d.value=f[3],G(()=>p=!1)),u.$set(d);const i={};g&40&&(i.options=f[5].filter(f[14])),!m&&g&16&&(m=!0,i.input=f[4],G(()=>m=!1)),r.$set(i)},i:function(f){T||(L(u.$$.fragment,f),L(r.$$.fragment,f),T=!0)},o:function(f){P(u.$$.fragment,f),P(r.$$.fragment,f),T=!1},d:function(f){f&&($(t),$(o),$(s),$(l),$(e)),W(u),W(r),w=!1,b()}};return R("SvelteRegisterBlock",{block:V,id:Tt.name,type:"else",source:"(57:2) {:else}",ctx:a}),V}function wt(a){let t,n,o=a[0].length>0&&Y(a);const s={c:function(){o&&o.c(),t=lt()},l:function(c){o&&o.l(c),t=lt()},m:function(c,p){o&&o.m(c,p),D(c,t,p),n=!0},p:function(c,p){c[0].length>0?o?(o.p(c,p),p&1&&L(o,1)):(o=Y(c),o.c(),L(o,1),o.m(t.parentNode,t)):o&&(tt(),P(o,1,1,()=>{o=null}),et())},i:function(c){n||(L(o),n=!0)},o:function(c){P(o),n=!1},d:function(c){c&&$(t),o&&o.d(c)}};return R("SvelteRegisterBlock",{block:s,id:wt.name,type:"if",source:"(49:2) {#if !editable}",ctx:a}),s}function Y(a){let t,n,o=rt(a[0]),s=[];for(let p=0;p<o.length;p+=1)s[p]=K(pt(a,o,p));const u=p=>P(s[p],1,1,()=>{s[p]=null}),c={c:function(){t=y("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l:function(l){t=x(l,"DIV",{class:!0});var e=q(t);for(let r=0;r<s.length;r+=1)s[r].l(e);e.forEach($),this.h()},h:function(){E(t,"class","text-md flex flex-row flex-wrap gap-1"),k(t,H,64,6,1396)},m:function(l,e){D(l,t,e);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,null);n=!0},p:function(l,e){if(e&5){o=rt(l[0]);let r;for(r=0;r<o.length;r+=1){const m=pt(l,o,r);s[r]?(s[r].p(m,e),L(s[r],1)):(s[r]=K(m),s[r].c(),L(s[r],1),s[r].m(t,null))}for(tt(),r=o.length;r<s.length;r+=1)u(r);et()}},i:function(l){if(!n){for(let e=0;e<o.length;e+=1)L(s[e]);n=!0}},o:function(l){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)P(s[e]);n=!1},d:function(l){l&&$(t),St(s,l)}};return R("SvelteRegisterBlock",{block:c,id:Y.name,type:"if",source:"(50:4) {#if tags.length > 0}",ctx:a}),c}function K(a){let t,n;t=new $t({props:{tag:a[19],popupTriggerEvent:a[2]},$$inline:!0});const o={c:function(){U(t.$$.fragment)},l:function(u){J(t.$$.fragment,u)},m:function(u,c){Q(t,u,c),n=!0},p:function(u,c){const p={};c&1&&(p.tag=u[19]),c&4&&(p.popupTriggerEvent=u[2]),t.$set(p)},i:function(u){n||(L(t.$$.fragment,u),n=!0)},o:function(u){P(t.$$.fragment,u),n=!1},d:function(u){W(t,u)}};return R("SvelteRegisterBlock",{block:o,id:K.name,type:"each",source:"(52:8) {#each tags as tag}",ctx:a}),o}function Z(a){let t,n,o,s;const u=[wt,Tt],c=[];function p(e,r){return e[1]?1:0}n=p(a),o=c[n]=u[n](a);const l={c:function(){t=y("div"),o.c(),this.h()},l:function(r){t=x(r,"DIV",{class:!0});var m=q(t);o.l(m),m.forEach($),this.h()},h:function(){E(t,"class","tags"),k(t,H,61,0,1327)},m:function(r,m){D(r,t,m),c[n].m(t,null),s=!0},p:function(r,[m]){let T=n;n=p(r),n===T?c[n].p(r,m):(tt(),P(c[T],1,1,()=>{c[T]=null}),et(),o=c[n],o?o.p(r,m):(o=c[n]=u[n](r),o.c()),L(o,1),o.m(t,null))},i:function(r){s||(L(o),s=!0)},o:function(r){P(o),s=!1},d:function(r){r&&$(t),c[n].d()}};return R("SvelteRegisterBlock",{block:l,id:Z.name,type:"component",source:"",ctx:a}),l}function It(a,t,n){let o,s,{$$slots:u={},$$scope:c}=t;mt("TagList",u,[]);const p=st(),l=it({query:ct,client:p,variables:{limit:100}});Lt(l,"getAllTags"),Ct(a,l,i=>n(10,s=i));let{tags:e=[]}=t,{editable:r=!1}=t,{popupTriggerEvent:m="click"}=t;const T={event:"focus-click",target:"popupAutocomplete",placement:"bottom-start"};let w=[];const b=()=>n(3,w=e.map(i=>i.name));at(b);const I=i=>{n(0,e=[...e,{id:i.value,name:i.label}]),b()},C=i=>{const nt=e.findIndex(bt=>bt.name===i);n(0,e=[...e.slice(0,nt),...e.slice(nt+1)]),b()};let h="";const O=["tags","editable","popupTriggerEvent"];Object.keys(t).forEach(i=>{!~O.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<TagList> was created with unknown prop '${i}'`)});function j(i){h=i,n(4,h)}function V(i){w=i,n(3,w)}const v=i=>C(i.detail.chipValue),f=i=>w.indexOf(i.label)<0;function g(i){h=i,n(4,h)}const d=i=>I(i.detail);return a.$$set=i=>{"tags"in i&&n(0,e=i.tags),"editable"in i&&n(1,r=i.editable),"popupTriggerEvent"in i&&n(2,m=i.popupTriggerEvent)},a.$capture_state=()=>({GetTagsDocument:ct,queryStore:it,getContextClient:st,Autocomplete:ht,InputChip:vt,popup:F,onMount:at,TagDisplay:$t,client:p,getAllTags:l,tags:e,editable:r,popupTriggerEvent:m,popupSettings:T,tagList:w,loadTagList:b,addTag:I,removeTag:C,inputTag:h,allTags:o,$getAllTags:s}),a.$inject_state=i=>{"tags"in i&&n(0,e=i.tags),"editable"in i&&n(1,r=i.editable),"popupTriggerEvent"in i&&n(2,m=i.popupTriggerEvent),"tagList"in i&&n(3,w=i.tagList),"inputTag"in i&&n(4,h=i.inputTag),"allTags"in i&&n(5,o=i.allTags)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),a.$$.update=()=>{a.$$.dirty&1024&&n(5,o=s.data?.getTags?.map(i=>({label:`${i.name} - TODO: Tag description this will become a very long string sometimes yes long string`,value:i.id}))||[])},[e,r,m,w,h,o,l,T,I,C,s,j,V,v,f,g,d]}class Rt extends ut{constructor(t){super(t),ft(this,t,It,Z,gt,{tags:0,editable:1,popupTriggerEvent:2}),R("SvelteRegisterComponent",{component:this,tagName:"TagList",options:t,id:Z.name})}get tags(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tags(t){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editable(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editable(t){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get popupTriggerEvent(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set popupTriggerEvent(t){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Rt as T,$t as a};
//# sourceMappingURL=TagList.nyod_nU-.js.map
