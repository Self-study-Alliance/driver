<template>
  <div id="tab-bar">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.2);
}
</style>
