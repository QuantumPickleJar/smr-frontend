import{d as c}from"./api-82c76902.js";import"./user-551a19d6.js";import{a$ as l}from"./vendor-b961c41b.js";let i;const u=new Promise(t=>i=t);fetch(c+"/static/uplugin-json-schema.json").then(t=>t.json()).then(t=>i(new l(t)));const f=async t=>{const r=await u;try{const a=JSON.parse(t),n=r.validate(a);return n.valid?[]:n.errors.map(e=>{if(e.keyword==="$ref")return;let o="`"+e.instanceLocation+"`";const s=d(a,e.instanceLocation);return typeof s!="object"&&(o+=' **"'+s+'"**'),o+=": "+e.error,o}).filter(e=>!!e)}catch{return["Invalid JSON"]}},d=(t,r)=>{const a=new RegExp("\\['?(.+?)'?\\]|\\.([^\\.\\[\\]]+)","gm");try{let n=t,e=a.exec(r);for(;e!==null;)n=n[e[1]||e[2]],e=a.exec(r);return n}catch{}};export{f as v};
//# sourceMappingURL=uplugin-67cd2dd4.js.map
