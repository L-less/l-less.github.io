import{_ as r}from"./app-yEdpkh-b.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-1-v2177860.deta.app"};const n=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-yEdpkh-b.js").then(t=>t.L),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
