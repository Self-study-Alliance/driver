<template>
  <div id="nav">
    <slot name="goback"></slot>
    <div class="navname"><slot name="navname"></slot></div>
  </div>
</template>
<script>
export default {
  name: "Navder",
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

#nav {
  width: 100%;
  font-size: 18px;
  line-height: 65px;
  background-color: rgb(243, 26, 26);
}

.navname {
  width: 110px;
  height: 65px;
  margin: 0 auto;
  line-height: 65px;
}
</style>
