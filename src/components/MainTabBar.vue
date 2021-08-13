<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/homeactive.png" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/message">
      <img slot="item-icon" src="../assets/img/tabbar/message.png" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/messageactive.png" alt="" />
      <div slot="item-text">消息</div>
    </tab-bar-item>
    <tab-bar-item path="/work">
      <img slot="item-icon" src="../assets/img/tabbar/work.png" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/workactive.png" alt="" />
      <div slot="item-text">工作台</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/mine.png" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/mineactive.png" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar.vue";
import TabBarItem from "./tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
