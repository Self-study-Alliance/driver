<template>
  <div id="MainNav">
    <navder>
      <span slot="goback"></span>
      <h2 slot="navname">华新司机</h2>
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
