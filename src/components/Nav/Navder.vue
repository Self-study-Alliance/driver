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
  margin-left: 20px;
  font-size: 18px;
  line-height: 65px;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
}

.navname {
  width: 110px;
  height: 65px;
  margin-left: 4.5625rem;
  line-height: 65px;
}
</style>
