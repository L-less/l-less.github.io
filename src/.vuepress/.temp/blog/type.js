      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,2,1,0,10,11,3,4,5,6,8,9,24]},"/zh/":{"path":"/zh/article/","indexes":[19,14,13,12,22,23,15,16,17,18,20,21,25]}},"star":{"/":{"path":"/star/","indexes":[3,7,8]},"/zh/":{"path":"/zh/star/","indexes":[15,19,20]}},"timeline":{"/":{"path":"/timeline/","indexes":[7,2,1,0,10,11,3,4,5,6,8,9]},"/zh/":{"path":"/zh/timeline/","indexes":[19,14,13,12,22,23,15,16,17,18,20,21]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      