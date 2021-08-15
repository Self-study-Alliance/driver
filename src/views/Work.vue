<template>
  <div>
    <main-nav></main-nav>
    <div class="my-work">
      <div class="work query" @click="click('/work/WorkQuery')">
        <div class="work-center">
          <img src="" alt="" />
          <div class="china"> 提货单查询</div><div class="english"> Bill Of Lading inquiry</div>
        </div>
      </div>
      <div class="work receipt" @click="click('/work/workreceipt')">
        <div class="work-center">
          <img src="" alt="" />
          <div class="china"> 我的签收</div><div class="english"> My Receipt</div>
        </div>
      </div>
      <div class="work todo" @click="click('/work/worktodo')">
        <div class="work-center">
          <img src="" alt="" />
          <div class="china"> 我的待办</div><div class="english"> My To-Do</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
export default {
  name: "Work",
  components: { MainNav },
  methods: {
    click(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.work-center {
  display: flex;
  width: 90%;
  height: 60px;
  margin: auto;
  background-color: yellowgreen;
  transform: translateY(20px);
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
}

.work {
  width: 90%;
  height: 100px;
  margin: 10px auto;
  background-color: skyblue;
}

.work-center img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  background-color: white;
}

.work-center div {
  font-size: 18px;
  color: white;
}

.china {
  font-weight: 700;
}
</style>
