import{S as C,i as F,s as O,d as V,v as Q,e as $,W as j,b as X,g as b,h as v,X as k,j as g,k as Y,N as x,m as A,al as E,n as q,Q as u,Y as P,u as D}from"./vendor.4474e4ea.js";import{p as f}from"./graphql.e6600caa.js";const R="src/lib/components/announcements/AnnouncementRow.svelte";function N(e){let n,t,a,l=e[3][e[0]]+"",d,_,s,m,c,p,w,o;const S={c:function(){n=$("div"),t=$("div"),a=$("span"),d=j(l),_=X(),s=$("div"),m=$("b"),c=j(e[0]),p=j(": "),w=j(e[2]),this.h()},l:function(i){n=b(i,"DIV",{class:!0});var r=v(n);t=b(r,"DIV",{class:!0});var y=v(t);a=b(y,"SPAN",{class:!0});var W=v(a);d=k(W,l),W.forEach(g),_=Y(y),s=b(y,"DIV",{class:!0});var I=v(s);m=b(I,"B",{});var M=v(m);c=k(M,e[0]),p=k(M,": "),M.forEach(g),w=k(I,e[2]),I.forEach(g),y.forEach(g),r.forEach(g),this.h()},h:function(){x(a,"class","material-icons text-2xl align-middle"),A(a,R,27,4,911),A(m,R,32,6,1156),x(s,"class","align-middle text-l inline-block break-words max-w-full"),E(s,"font-mono",e[1]),E(s,"whitespace-pre",e[1]),A(s,R,28,4,997),x(t,"class","p-1 striped text-black s-sji_3b_RBnlI"),A(t,R,26,2,870),x(n,"class",o=e[4][e[0]]+" max-h-64 overflow-hidden rounded-sm s-sji_3b_RBnlI"),A(n,R,25,0,787)},m:function(i,r){q(i,n,r),u(n,t),u(t,a),u(a,d),u(t,_),u(t,s),u(s,m),u(m,c),u(m,p),u(s,w)},p:function(i,[r]){r&1&&l!==(l=i[3][i[0]]+"")&&P(d,l),r&1&&P(c,i[0]),r&4&&P(w,i[2]),r&2&&E(s,"font-mono",i[1]),r&2&&E(s,"whitespace-pre",i[1]),r&1&&o!==(o=i[4][i[0]]+" max-h-64 overflow-hidden rounded-sm s-sji_3b_RBnlI")&&x(n,"class",o)},i:D,o:D,d:function(i){i&&g(n)}};return V("SvelteRegisterBlock",{block:S,id:N.name,type:"component",source:"",ctx:e}),S}const B="monotext:";function z(e,n,t){let a,l,{$$slots:d={},$$scope:_}=n;Q("AnnouncementRow",d,[]);const s={[f.Info]:"info",[f.Alert]:"error",[f.Warning]:"warning",[f.Fix]:"build_circle"},m={[f.Info]:"bg-sky-500",[f.Alert]:"bg-red-600",[f.Warning]:"bg-yellow-400",[f.Fix]:"bg-green-600"};let{message:c}=n,{importance:p}=n;e.$$.on_mount.push(function(){c===void 0&&!("message"in n||e.$$.bound[e.$$.props.message])&&console.warn("<AnnouncementRow> was created without expected prop 'message'"),p===void 0&&!("importance"in n||e.$$.bound[e.$$.props.importance])&&console.warn("<AnnouncementRow> was created without expected prop 'importance'")});const w=["message","importance"];return Object.keys(n).forEach(o=>{!~w.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<AnnouncementRow> was created with unknown prop '${o}'`)}),e.$$set=o=>{"message"in o&&t(5,c=o.message),"importance"in o&&t(0,p=o.importance)},e.$capture_state=()=>({AnnouncementImportance:f,iconNames:s,backgroundColors:m,monospacePrefix:B,message:c,importance:p,isMonospace:a,finalMessage:l}),e.$inject_state=o=>{"message"in o&&t(5,c=o.message),"importance"in o&&t(0,p=o.importance),"isMonospace"in o&&t(1,a=o.isMonospace),"finalMessage"in o&&t(2,l=o.finalMessage)},n&&"$$inject"in n&&e.$inject_state(n.$$inject),e.$$.update=()=>{e.$$.dirty&32&&t(1,a=c.startsWith(B)),e.$$.dirty&34&&t(2,l=a?c.replaceAll(B,""):c)},[p,a,l,s,m,c]}class J extends C{constructor(n){super(n),F(this,n,z,N,O,{message:5,importance:0}),V("SvelteRegisterComponent",{component:this,tagName:"AnnouncementRow",options:n,id:N.name})}get message(){throw new Error("<AnnouncementRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set message(n){throw new Error("<AnnouncementRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get importance(){throw new Error("<AnnouncementRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set importance(n){throw new Error("<AnnouncementRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{J as A};
//# sourceMappingURL=AnnouncementRow.b7a1c977.js.map
