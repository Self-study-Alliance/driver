<template>
  <div class="w">
    <div><main-nav></main-nav></div>
    <div class="person">
      <div class="person-id">
        <div class="person-img"></div>
        <div class="person-message">
          <div class="person-name">
            <p>易大师</p> <p class="attestation"><img src="" alt="" />已认证</p>
          </div>
          <div class="person-tel"> 18186060031</div>
        </div>
      </div>
      <div class="sign">
        <button class="sign-btn">签到</button>
        <div class="sign-integral">可用积分：</div>
      </div>
    </div>
    <el-carousel indicator-position="outside" height="95px">
      <el-carousel-item v-for="item in swiperImg" :key="item.img">
        <img :src="item.img" class="swiper-img" />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <div v-for="item in title" :key="item.img" class="title-son">
        <div class="title-img"><img :src="item.img" alt="" /></div>
        <div class="title-text">{{ item.name }}</div>
      </div>
    </div>
    <van-notice-bar left-icon="volume-o" text="现在的阳光不在灼热，而是温暖------------------------。" />
    <mes-croll :message="message"></mes-croll>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import MesCroll from "@/components/Mescroll/MesCroll.vue";

export default {
  name: "Home",
  components: { MainNav, MesCroll },
  data() {
    return {
      swiperImg: [
        { img: require("@/assets/img/swiper/img1.jpg") },
        { img: require("@/assets/img/swiper/img2.jpg") },
        { img: require("@/assets/img/swiper/img3.jpg") },
        { img: require("@/assets/img/swiper/img4.jpg") },
      ],
      title: [
        { img: require("@/assets/img/title/title1.png"), name: "抽奖活动" },
        { img: require("@/assets/img/title/title2.png"), name: "积分商城" },
        { img: require("@/assets/img/title/title3.png"), name: "合作商家" },
        { img: require("@/assets/img/title/title4.png"), name: "我的兑换码" },
      ],
      message: [
        { src: require("@/assets/img/swiper/img3.jpg"), name: "舒服佳薰衣草舒缓呵护香皂", address: "南漳", surplus: "25", integra: "50" },
        { src: require("@/assets/img/swiper/img3.jpg"), name: "舒服佳薰衣草舒缓呵护香皂", address: "南漳", surplus: "25", integra: "50" },
        { src: require("@/assets/img/swiper/img3.jpg"), name: "舒服佳薰衣草舒缓呵护香皂", address: "南漳", surplus: "25", integra: "50" },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  height: 65px;
  justify-content: space-around;
}

.title-son {
  width: 65px;
  height: 60px;
}

.title-img {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  border: none;
  border-radius: 8px;
}

.title-img img {
  width: 40px;
  height: 40px;
}

.title-text {
  width: 65px;
  height: 17px;
  font-size: 13px;
  color: rgb(114, 116, 115);
  text-align: center;
}

.swiper-img {
  width: 100%;
  height: 95px;
}

.w {
  display: flex;
  flex-direction: column;
}

.person {
  position: relative;
  width: 100%;
  height: 60px;
  overflow: hidden;
}

.person-id {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 40px;
  transform: translate(-50%, -50%);
}

.person-img {
  width: 40px;
  height: 40px;
  background-color: springgreen;
  border: 2px solid red;
  border-radius: 20px;
}

.person-name {
  position: absolute;
  margin: -60px 0 0 50px;
}

.person-tel {
  position: absolute;
  margin: -20px 0 0 50px;
}

.attestation {
  margin: -33px 0 0 75px;
  font-size: 13px;
  color: red;
  text-align: center;
}

.attestation img {
  width: 15px;
  height: 15px;
  background-color: skyblue;
  transform: translate(-5px, 3px);
}

.sign {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 70px;
  height: 40px;
  transform: translateY(-50%);
}

.sign-btn {
  width: 60px;
  height: 20px;
  font-size: 13px;
  color: white;
  background-color: red;
  border-radius: 5px;
}

.sign-integral {
  position: absolute;
  margin: 5px 0 0 -25px;
  font-size: 13px;
  color: rgb(165, 165, 160);
}
</style>
