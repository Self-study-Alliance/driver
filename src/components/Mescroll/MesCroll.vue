<template>
  <div class="MesCroll">
    <div v-for="item in message" :key="item.src" class="commodity">
      <div class="mescroll-img"><img :src="item.src" alt="" /></div>
      <div class="name">{{ item.name }}</div>
      <div class="address">取货工厂：{{ item.address }}</div>
      <div class="surplus">剩余：{{ item.surplus }}</div>
      <div class="integra">{{ item.integra }}积分</div> <div class="exchange">立即兑换</div>
    </div>
  </div>
</template>
<script>
// import { apiNewList } from "@/components/Mescroll/mescroll.js";
export default {
  name: "MesCroll",
  props: {
    message: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      downOption: {
        auto: false, //是否在初始化后,自动执行downCallback; 默认true
      },
      dataList: [],
    };
  },
  methods: {
    // /*下拉刷新的回调 */
    // downCallback() {
    //   //联网加载数据
    //   apiNewList()
    //     .then(data => {
    //       //联网成功的回调,隐藏下拉刷新的状态
    //       this.mescroll.endSuccess();
    //       //设置列表数据
    //       this.dataList.unshift(data[0]);
    //     })
    //     .catch(() => {
    //       //联网失败的回调,隐藏下拉刷新的状态
    //       this.mescroll.endErr();
    //     });
    // },
    // /*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
    // upCallback(page) {
    //   //联网加载数据
    //   apiNewList(page.num, page.size)
    //     .then(curPageData => {
    //       //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
    //       //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
    //       //方法一(推荐): 后台接口有返回列表的总页数 totalPage
    //       //this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
    //       //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
    //       //this.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
    //       //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
    //       //this.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
    //       //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据.
    //       this.mescroll.endSuccess(curPageData.length);
    //       //设置列表数据
    //       this.dataList = this.dataList.concat(curPageData);
    //     })
    //     .catch(() => {
    //       //联网失败, 结束加载
    //       this.mescroll.endErr();
    //     });
    // },
  },
};
</script>
<style lang="scss" scoped>
.MesCroll {
  top: 0;
  bottom: 70px;
  height: 40vh;
  overflow-y: scroll;
}

.mescroll-img {
  width: 130px;
  height: 90px;
}

.exchange {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 25px;
  line-height: 25px;
  color: white;
  text-align: center;
  background-color: red;
  border-radius: 15px;
}

.integra {
  font-size: 16px;
  color: red;
}

.name {
  font-weight: 700;
}

.mescroll-img img {
  width: 100%;
  height: 100%;
}

.commodity {
  position: relative;
  display: flex;
  width: 90%;
  height: 90px;
  margin: 0 auto;
  font-size: 13px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
