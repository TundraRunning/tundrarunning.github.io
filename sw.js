if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const l=e=>i(e,o),t={module:{uri:o},exports:c,require:l};n[o]=Promise.all(s.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"a27d7b61a0241052f736ebe81718c101"},{url:"assets/index-C8dpQW1F.css",revision:null},{url:"assets/index-CHMc-9gm.js",revision:null},{url:"assets/TundraRunning-UTniLf5K.png",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"favicon.ico",revision:"89099cfae0775e3e086613bca3190493"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"index.html",revision:"7e17050846c433424e8de0ba72ffd854"},{url:"maskable-icon-512x512.png",revision:"126c55dc030a58db716758479c41c570"},{url:"pwa-192x192.png",revision:"14a23cc23a2f5a3157ac52e78135346c"},{url:"pwa-512x512.png",revision:"5a051418936d2f633fc164f78b1662e1"},{url:"pwa-64x64.png",revision:"f35ebe1d2519c34b44344b0135c4f1a1"},{url:"manifest.webmanifest",revision:"6a65258f84b5212917cf4e2a4533c167"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
