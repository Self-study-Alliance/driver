<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
// import TabBar from "./TabBar.vue";
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  height: 70px;
  font-size: 14px;
  text-align: center;
  flex: 1;
}

.tab-bar-item img {
  width: 45px;
  height: 45px;
  margin-top: 3px;
}
</style>
