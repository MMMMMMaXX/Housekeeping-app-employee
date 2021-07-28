<template>
  <div>
    <van-sticky>
      <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div class="bg">
      <div class="user">
        <div class="img">
          <van-image
            round
            width="6rem"
            height="6rem"
            fit="cover"
            :src="userInfo.userFace"
          />
        </div>
        <div class="info">
          <div class="name">
            <p>用户名：{{ userInfo.username }}</p>
            <p>ID:{{ userInfo.id }}</p>
            <p>{{ userInfo.certificationStatus }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <van-grid :column-num="2" :center="false">
        <van-grid-item v-if="userInfo.gender == 'male'" text="性别：男" />
        <van-grid-item v-else text="性别：女" />
        <van-grid-item :text="'民族：' + userInfo.nation" />
        <van-grid-item :text="'生日：1999年9月9日'" />
        <van-grid-item :text="'姓名：' + userInfo.realname" />
      </van-grid>
      <van-grid :column-num="1" :center="false">
        <van-grid-item :text="'手机号：' + userInfo.telephone" />
        <van-grid-item :text="'邮箱号：' + userInfo.email" />
        <van-grid-item :text="'身份证号：' + userInfo.idCard" />
        <van-grid-item :text="'银行卡号：' + userInfo.bankCard" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getUserInfo();
  },
  mounted() {},
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 170px;
  background-image: linear-gradient(55deg, #c2e59c, #64b3f4);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  /* border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%; */
}
.user {
  width: 80%;
  height: 170px;
  background-color: #fff;
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translate(-50%, -50%);
  /* opacity: 0.8; */
  box-shadow: 1px 1px 10px rgba(194, 229, 156, 0.8);
  border-radius: 8px;
  padding: 0 1em;
  margin: 0 auto;
  display: flex;
}
.img {
  width: 150px;
  margin-left: 27px;
  margin-top: 37px;
  display: inline-block;
}
.info {
  display: inline-block;
}
.name {
  font-size: 18px;
  margin-top: 30px;
}
.content {
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  position: absolute;
  box-shadow: 1px 1px 10px rgba(194, 229, 156, 0.8);
  top: 270px;
  left: 5%;
}
</style>