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
  bottom: 0;
  display: flex;
  width: 100%;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.2);
}
</style>
