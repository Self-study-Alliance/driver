<template>
  <van-tabs>
    <van-tab v-for="item in tabpage" :key="item.name" :title="item.name"> {{ item.name }} </van-tab>
  </van-tabs>
</template>
<script>
export default {
  name: "TabPage",
  props: {
    tabpage: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
