<template>
  <div>
    <main-nav></main-nav>
    <tab-page :tabpage="tabpage" title-active-color="red" title-inactive-color="red"></tab-page>
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
import TabPage from "../components/TabPage/TabPage.vue";
export default {
  name: "Message",
  components: { MainNav, TabPage },
  data() {
    return { tabpage: [{ name: "未读" }, { name: "已读" }] };
  },
};
</script>

<style scoped></style>
