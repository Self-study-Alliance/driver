<template>
  <div id="MainNav">
    <navder>
      <span slot="goback">&lt;</span>
      <h2 slot="navname">首页中心</h2>
    </navder>
  </div>
</template>
<script>
import Navder from "./Nav/Navder.vue";
export default {
  name: "MainNav",
  components: {
    Navder,
  },
};
</script>
<style lang="" scoped></style>
