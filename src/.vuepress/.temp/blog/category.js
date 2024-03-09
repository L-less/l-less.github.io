export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Cherry":{"path":"/category/cherry/","indexes":[0]},"Dragon Fruit":{"path":"/category/dragon-fruit/","indexes":[1]},"Fruit":{"path":"/category/fruit/","indexes":[2,1,3,4,5,6]},"Strawberry":{"path":"/category/strawberry/","indexes":[2]},"Vegetable":{"path":"/category/vegetable/","indexes":[7]},"Apple":{"path":"/category/apple/","indexes":[5,6,8,9]},"Banana":{"path":"/category/banana/","indexes":[10,11,3,4]}}},"/zh/":{"path":"/zh/category/","map":{"樱桃":{"path":"/zh/category/樱桃/","indexes":[12]},"火龙果":{"path":"/zh/category/火龙果/","indexes":[13]},"水果":{"path":"/zh/category/水果/","indexes":[14,13,15,16,17,18]},"草莓":{"path":"/zh/category/草莓/","indexes":[14]},"蔬菜":{"path":"/zh/category/蔬菜/","indexes":[19]},"苹果":{"path":"/zh/category/苹果/","indexes":[17,18,20,21]},"香蕉":{"path":"/zh/category/香蕉/","indexes":[22,23,15,16]}}}},"tag":{"/":{"path":"/tag/","map":{"red":{"path":"/tag/red/","indexes":[7,2,1,0,5,6,8,9]},"small":{"path":"/tag/small/","indexes":[2,0]},"round":{"path":"/tag/round/","indexes":[7,0,5,6,8,9]},"big":{"path":"/tag/big/","indexes":[1,5,6,8,9]},"yellow":{"path":"/tag/yellow/","indexes":[10,11,3,4]},"curly":{"path":"/tag/curly/","indexes":[10,11,3,4]},"long":{"path":"/tag/long/","indexes":[10,11,3,4]}}},"/zh/":{"path":"/zh/tag/","map":{"红":{"path":"/zh/tag/红/","indexes":[19,14,13,12,17,18,20,21]},"小":{"path":"/zh/tag/小/","indexes":[14,12]},"圆":{"path":"/zh/tag/圆/","indexes":[19,12,17,18,20,21]},"大":{"path":"/zh/tag/大/","indexes":[13,17,18,20,21]},"黄":{"path":"/zh/tag/黄/","indexes":[22,23,15,16]},"弯曲的":{"path":"/zh/tag/弯曲的/","indexes":[22,23,15,16]},"长":{"path":"/zh/tag/长/","indexes":[22,23,15,16]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

