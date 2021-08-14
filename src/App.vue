<template>
  <div class="app">
    <div class="w">
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>
    </div>
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/* 引用css */
@import "./assets/css/base.css";

.w {
  width: 375px;
}
</style>
