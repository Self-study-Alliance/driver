<template>
  <div id="MainNav">
    <div v-if="isShow" class="left">&lt;</div>
    <div class="navname">华新司机</div>
  </div>
</template>
<script>
export default {
  name: "MainNav",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
#MainNav {
  position: relative;
  display: flex;
  height: 51px;
  background-color: red;
  align-items: center;
}

.left {
  position: absolute;
  left: 20px;
  font-size: 20px;
}

.navname {
  position: absolute;
  left: 50%;
  font-size: 18px;
  font-weight: 900;
  color: white;
  transform: translateX(-50%);
}
</style>
