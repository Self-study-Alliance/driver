<template>
  <div>
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
        <p class="sign-integral">可用积分：</p>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";

export default {
  name: "Home",
  components: { MainNav },
};
</script>

<style scoped>
.person {
  position: relative;
  width: 100%;
  height: 40px;
  margin: 15px 0 0 15px;
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
  position: relative;
  margin: -40px 0 0 280px;
}

.sign-btn {
  position: absolute;
}

.sign-integral {
  position: absolute;
  margin: 25px 0 0 -25px;
  font-size: 13px;
  color: rgb(165, 165, 160);
}
</style>
