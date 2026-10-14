import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const routes={
  personal:'Personal AI systems','personal/configure':'Find your system',
  business:'Private AI infrastructure','business/plan':'Plan your infrastructure',
  systems:'Explore systems','systems/developer':'AI Developer','systems/professional':'AI Professional','systems/enterprise':'AI Enterprise','systems/server':'AI Server',
  solutions:'Workloads',services:'Services',learn:'Guides',
  'learn/local-or-cloud':'Local or cloud?','learn/gpu-memory':'GPU memory','learn/private-ai-checklist':'Private AI checklist',
  about:'About Chromastic',contact:'Contact',quote:'Request a quote',privacy:'Privacy',terms:'Terms'
};
const index=readFileSync('dist/index.html','utf8');
for(const [route,title] of Object.entries(routes)){
  mkdirSync(`dist/${route}`,{recursive:true});
  let page=index.replace(/<title>.*?<\/title>/,`<title>${title} | Chromastic</title>`);
  if(route.startsWith('business'))page=page.replace('/assets/workstation-silver.webp','/assets/server-silver.webp');
  else if(route!=='personal')page=page.replace(/\s*<link rel="preload" as="image"[^>]+>/,'');
  writeFileSync(`dist/${route}/index.html`,page);
}
writeFileSync('dist/404.html',index.replace(/<title>.*?<\/title>/,'<title>Page not found | Chromastic</title>'));
console.log('Prepared all 21 page routes.');
