const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/_app/immutable/entry/app.DBporP5M.js",s+"/_app/immutable/nodes/0.BKObbYAc.js",s+"/_app/immutable/assets/0.CCe9y1Fn.css",s+"/_app/immutable/nodes/1.B-3eSCQc.js",s+"/_app/immutable/nodes/10.CmEzDudz.js",s+"/_app/immutable/nodes/11.BI1rzc7y.js",s+"/_app/immutable/nodes/12.sg0VFM0i.js",s+"/_app/immutable/nodes/13.CkX49cF3.js",s+"/_app/immutable/nodes/14.DTqiQuxJ.js",s+"/_app/immutable/assets/14.DGIivzJm.css",s+"/_app/immutable/nodes/15.DGZoWwuE.js",s+"/_app/immutable/nodes/16.CNQe1nTO.js",s+"/_app/immutable/nodes/17.DmN4Ch5u.js",s+"/_app/immutable/nodes/18.DLn75-F9.js",s+"/_app/immutable/nodes/19.zSwPXdpP.js",s+"/_app/immutable/nodes/2.FQ1ofHH2.js",s+"/_app/immutable/assets/2.XYLHkkhT.css",s+"/_app/immutable/nodes/20.zAewRacx.js",s+"/_app/immutable/assets/20.B8PWU8N1.css",s+"/_app/immutable/nodes/21.JPjLj_qK.js",s+"/_app/immutable/nodes/22.BTPfpBPP.js",s+"/_app/immutable/nodes/23.B9kYw-I3.js",s+"/_app/immutable/assets/8.DfdhIHyO.css",s+"/_app/immutable/nodes/24.C0nF9Vou.js",s+"/_app/immutable/nodes/25.BNQ480lF.js",s+"/_app/immutable/nodes/26.BtWCz-Ns.js",s+"/_app/immutable/nodes/27.B07hHJmy.js",s+"/_app/immutable/nodes/3.DyweLUD5.js",s+"/_app/immutable/assets/3.tHiLzZcV.css",s+"/_app/immutable/nodes/4.BECIEf2n.js",s+"/_app/immutable/nodes/5.3opw_CPx.js",s+"/_app/immutable/nodes/6.DYJ9ARCv.js",s+"/_app/immutable/nodes/7.BcXWXRWW.js",s+"/_app/immutable/nodes/8.CF0SlS6k.js",s+"/_app/immutable/nodes/9.DxNeEeBp.js",s+"/_app/immutable/assets/AnnouncementRow.CbfVDtZE.css",s+"/_app/immutable/chunks/AnnouncementRow.DoOv7hbc.js",s+"/_app/immutable/chunks/CompatibilityModal.CuoSrrAV.js",s+"/_app/immutable/chunks/EditCompatibilityForm.BYdAKuXs.js",s+"/_app/immutable/assets/FicsitCard.zCeLN5-f.css",s+"/_app/immutable/chunks/FicsitCard.D0HOBR2w.js",s+"/_app/immutable/chunks/GuideCard.lGOzXrZH.js",s+"/_app/immutable/assets/GuideForm.DcQdjkdL.css",s+"/_app/immutable/chunks/GuideForm.BXtU1s74.js",s+"/_app/immutable/chunks/MetaDescriptors.D3HFwKmv.js",s+"/_app/immutable/chunks/ModCard.DXYTNXd_.js",s+"/_app/immutable/chunks/ModCompatibilityEdit.vpISrHw1.js",s+"/_app/immutable/chunks/ModForm.BNFHRDUU.js",s+"/_app/immutable/chunks/Page404.2ic2kXDQ.js",s+"/_app/immutable/assets/TagList.C9F31gTP.css",s+"/_app/immutable/chunks/TagList.BRkBgKjS.js",s+"/_app/immutable/chunks/VersionDependenciesGrid.C_5gTeAS.js",s+"/_app/immutable/assets/VersionForm.fNMkQdp2.css",s+"/_app/immutable/chunks/VersionForm.C8BGs7bQ.js",s+"/_app/immutable/chunks/api.Dn0ikjHb.js",s+"/_app/immutable/chunks/extras.CHkGuqAu.js",s+"/_app/immutable/chunks/formatting.CJGi6h9M.js",s+"/_app/immutable/chunks/forms.BSIujLBs.js",s+"/_app/immutable/chunks/forms.Bot23oJJ.js",s+"/_app/immutable/chunks/gql.DGDorg1Q.js",s+"/_app/immutable/chunks/graphql.DSJZyne3.js",s+"/_app/immutable/chunks/jszip.EJ3wOmxS.js",s+"/_app/immutable/chunks/launcher.DPLzaqQt.js",s+"/_app/immutable/chunks/markdown.DJvYvE2o.js",s+"/_app/immutable/chunks/preload-helper.9YLJ1q38.js",s+"/_app/immutable/chunks/uplugin.DAu1lU65.js",s+"/_app/immutable/chunks/user.RILX6oYC.js",s+"/_app/immutable/assets/vendor.Cirlo5Z8.css",s+"/_app/immutable/chunks/vendor.CozT21D3.js",s+"/_app/immutable/entry/start.BZRdwg7n.js",s+"/_app/immutable/chunks/custom_protocol.u56lozG6.js"],_=[s+"/assets/android-chrome-192x192.png",s+"/assets/android-chrome-512x512.png",s+"/assets/apple-touch-icon.png",s+"/assets/browserconfig.xml",s+"/assets/favicon-16x16.png",s+"/assets/favicon-32x32.png",s+"/assets/favicon.ico",s+"/assets/fonts/flow-rounded.woff",s+"/assets/mstile-150x150.png",s+"/assets/safari-pinned-tab.svg",s+"/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp",s+"/images/bg_nologo.webp",s+"/images/dog_aw_yis_pats.gif",s+"/images/dog_boing.gif",s+"/images/dog_stand.gif",s+"/images/mods_mobile.webp",s+"/images/no_image.webp",s+"/images/satisfactory_logo_full_color_small.webp",s+"/images/sf_modding_logo.webp",s+"/images/smm_background.webp",s+"/images/smm_hand.webp",s+"/images/smm_icon_white.webp",s+"/manifest.json",s+"/robots.txt"],n="1724766388498",m=self,o=`cache${n}`,c=l.concat(_),b=new Set(c);m.addEventListener("install",a=>{a.waitUntil(caches.open(o).then(e=>e.addAll(c)).then(()=>{m.skipWaiting()}))});m.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(async e=>{for(const t of e)t!==o&&await caches.delete(t);m.clients.claim()}))});async function r(a){const e=await caches.open(`offline${n}`);try{const t=await fetch(a);return e.put(a,t.clone()),t}catch(t){const p=await e.match(a);if(p)return p;throw t}}m.addEventListener("fetch",a=>{if(a.request.method!=="GET"||a.request.headers.has("range"))return;const e=new URL(a.request.url),t=e.protocol.startsWith("http"),p=e.hostname===self.location.hostname&&e.port!==self.location.port,i=e.host===self.location.host&&b.has(e.pathname),u=a.request.cache==="only-if-cached"&&!i;t&&!p&&!u&&i&&!a.request.url.includes("start")&&a.respondWith((async()=>i&&await caches.match(a.request)||r(a.request))())});
