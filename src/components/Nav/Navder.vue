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
  display: flex;
  width: 100%;
  height: 65px;
  font-size: 18px;
  line-height: 65px;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
  background-color: red;
}

.navname {
  width: 110px;
  height: 65px;
  margin: 0 auto;
  line-height: 65px;
}
</style>
