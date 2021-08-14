export function apiNewList(pageNum, pageSize) {
  return new Promise((resolute, reject) => {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        let list = [];
        if (!pageNum) {
          //模拟下拉刷新返回的数据
          let id = new Date().getTime();
          let newObj = {
            id: id,
            src: require("@/assets/img/swiper/img3.jpg"),
            name: "舒服佳薰衣草舒缓呵护香皂",
            address: "南漳",
            surplus: "25",
            integra: "50",
          };
          list.push(newObj);
        } else {
          //模拟上拉加载返回的数据
          for (let i = 0; i < pageSize; i++) {
            let upIndex = (pageNum - 1) * pageSize + i + 1;
            let newObj = {
              id: upIndex,
              src: require("@/assets/img/swiper/img3.jpg"),
              name: "舒服佳薰衣草舒缓呵护香皂",
              address: "南漳",
              surplus: "25",
              integra: "50",
            };
            list.push(newObj);
          }
        }
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}
