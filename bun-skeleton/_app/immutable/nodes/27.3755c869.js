import{S as F,i as G,s as V,d as $,v as X,J as R,L as j,O as z,r as g,t as b,R as P,e as k,W,g as w,h as S,X as q,j as m,m as v,N as x,n as y,Q as D,Y as J,U as M,b as B,K as Y,k as O,M as Z,q as tt,V as ot,u as et,p as nt}from"../chunks/vendor.b1090c37.js";import{F as K}from"../chunks/FicsitCard.2a086bd5.js";import{M as L}from"../chunks/MetaDescriptors.cb11bfd0.js";const _="src/lib/components/tools/ToolCard.svelte";function U(n){let t,a,i=n[0].author+"",f;const o={c:function(){t=k("div"),a=k("span"),f=W(i),this.h()},l:function(e){t=w(e,"DIV",{slot:!0});var p=S(t);a=w(p,"SPAN",{});var r=S(a);f=q(r,i),r.forEach(m),p.forEach(m),this.h()},h:function(){v(a,_,9,4,234),x(t,"slot","stats"),v(t,_,8,2,211)},m:function(e,p){y(e,t,p),D(t,a),D(a,f)},p:function(e,p){p&1&&i!==(i=e[0].author+"")&&J(f,i)},d:function(e){e&&m(t)}};return $("SvelteRegisterBlock",{block:o,id:U.name,type:"slot",source:"(6:2) ",ctx:n}),o}function C(n){let t,a;t=new K({props:{name:n[0].name,link:n[0].link,logo:n[0].logo,description:n[0].description,$$slots:{stats:[U]},$$scope:{ctx:n}},$$inline:!0});const i={c:function(){R(t.$$.fragment)},l:function(o){j(t.$$.fragment,o)},m:function(o,s){z(t,o,s),a=!0},p:function(o,[s]){const e={};s&1&&(e.name=o[0].name),s&1&&(e.link=o[0].link),s&1&&(e.logo=o[0].logo),s&1&&(e.description=o[0].description),s&3&&(e.$$scope={dirty:s,ctx:o}),t.$set(e)},i:function(o){a||(g(t.$$.fragment,o),a=!0)},o:function(o){b(t.$$.fragment,o),a=!1},d:function(o){P(t,o)}};return $("SvelteRegisterBlock",{block:i,id:C.name,type:"component",source:"",ctx:n}),i}function st(n,t,a){let{$$slots:i={},$$scope:f}=t;X("ToolCard",i,[]);let{tool:o}=t;n.$$.on_mount.push(function(){o===void 0&&!("tool"in t||n.$$.bound[n.$$.props.tool])&&console.warn("<ToolCard> was created without expected prop 'tool'")});const s=["tool"];return Object.keys(t).forEach(e=>{!~s.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<ToolCard> was created with unknown prop '${e}'`)}),n.$$set=e=>{"tool"in e&&a(0,o=e.tool)},n.$capture_state=()=>({FicsitCard:K,tool:o}),n.$inject_state=e=>{"tool"in e&&a(0,o=e.tool)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[o]}class H extends F{constructor(t){super(t),G(this,t,st,C,V,{tool:0}),$("SvelteRegisterComponent",{component:this,tagName:"ToolCard",options:t,id:C.name})}get tool(){throw new Error("<ToolCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tool(t){throw new Error("<ToolCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const I="src/routes/tools/+page.svelte";function N(n,t,a){const i=n.slice();return i[1]=t[a],i}function T(n){let t,a;t=new H({props:{tool:n[1]},$$inline:!0});const i={c:function(){R(t.$$.fragment)},l:function(o){j(t.$$.fragment,o)},m:function(o,s){z(t,o,s),a=!0},p:et,i:function(o){a||(g(t.$$.fragment,o),a=!0)},o:function(o){b(t.$$.fragment,o),a=!1},d:function(o){P(t,o)}};return $("SvelteRegisterBlock",{block:i,id:T.name,type:"each",source:"(100:2) {#each tools as tool}",ctx:n}),i}function E(n){let t,a,i,f="Tools",o,s,e;t=new L({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"},$$inline:!0});let p=M(n[0]),r=[];for(let d=0;d<p.length;d+=1)r[d]=T(N(n,p,d));const Q=d=>b(r[d],1,1,()=>{r[d]=null}),A={c:function(){R(t.$$.fragment),a=B(),i=k("h1"),i.textContent=f,o=B(),s=k("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l:function(c){const u=Y("svelte-5zkdli",document.head);j(t.$$.fragment,u),u.forEach(m),a=O(c),i=w(c,"H1",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-yn0fg6"&&(i.textContent=f),o=O(c),s=w(c,"DIV",{class:!0});var l=S(s);for(let h=0;h<r.length;h+=1)r[h].l(l);l.forEach(m),this.h()},h:function(){document.title="Tools - SMR",x(i,"class","text-4xl my-4 font-bold"),v(i,I,106,0,4171),x(s,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4"),v(s,I,107,0,4218)},m:function(c,u){z(t,document.head,null),y(c,a,u),y(c,i,u),y(c,o,u),y(c,s,u);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(s,null);e=!0},p:function(c,[u]){if(u&1){p=M(c[0]);let l;for(l=0;l<p.length;l+=1){const h=N(c,p,l);r[l]?(r[l].p(h,u),g(r[l],1)):(r[l]=T(h),r[l].c(),g(r[l],1),r[l].m(s,null))}for(nt(),l=p.length;l<r.length;l+=1)Q(l);tt()}},i:function(c){if(!e){g(t.$$.fragment,c);for(let u=0;u<p.length;u+=1)g(r[u]);e=!0}},o:function(c){b(t.$$.fragment,c),r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)b(r[u]);e=!1},d:function(c){c&&(m(a),m(i),m(o),m(s)),P(t),ot(r,c)}};return $("SvelteRegisterBlock",{block:A,id:E.name,type:"component",source:"",ctx:n}),A}function it(n,t,a){let{$$slots:i={},$$scope:f}=t;X("Page",i,[]);const o=[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"Map",author:"Cornik and S4XXX",logo:"",description:"Satisfactory map based on in-game coordinates.",link:"https://www.satisfactorymap.com/"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Ficsit.info",author:"Nevir",logo:"https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true",description:"Production line optimization tool, and game info database",link:"https://ficsit.info/"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory Toolbox",author:"Lucek",logo:"",description:'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',link:"https://toolbox.satisfactory.lucek.io/"},{name:"Satisfactory 3D Map",author:"Moritz",logo:"",description:"Shows all objects within a savegame in 3D and provides a simple version of the game world for spatial context. Additionally, all properties and values of objects are shown.",link:"https://github.com/moritz-h/satisfactory-3d-map"}],s=[];return Object.keys(t).forEach(e=>{!~s.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),n.$capture_state=()=>({ToolCard:H,MetaDescriptors:L,tools:o}),[o]}class lt extends F{constructor(t){super(t),G(this,t,it,E,V,{}),$("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:E.name})}}export{lt as component};
//# sourceMappingURL=27.3755c869.js.map
