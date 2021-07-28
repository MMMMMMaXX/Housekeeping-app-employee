<template>
  <div class="mine">
    <!-- 头部 -->
    <div class="header">
      <div class="bg"></div>
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
            <p>{{ userInfo.username }}</p>
          </div>
          <div class="mineMoney">
            <p style="color: #999">余额:{{ userInfo.balance }}</p>
            <span style="color: #999">已完成:{{ finishOrderNum }}</span>
            <br />
            <span style="color: #999">待服务:{{ waitingNum }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="mine_content">
      <van-cell is-link title="实名认证" @click="toCertification" />
      <van-cell is-link title="提现" @click="show = true" />
      <van-cell is-link title="收益信息" @click="toMoney" />
      <van-cell is-link title="个人信息" @click="toUserinfo" />
    </div>
    <!-- 底部按钮 -->
    <div class="footButton">
      <van-button
        round
        block
        color="linear-gradient(to right, #c2e59c, #8DC26F)"
        @click="dialogShow = true"
        >退出登录</van-button
      >
    </div>
    <!-- 提现弹出框 -->
    <van-action-sheet v-model="show" title="提现">
      <div class="content_tixian">
        <van-field
          v-model="tixianNum"
          type="number"
          label="提现金额"
          placeholder="请输入提现金额"
        />
        <van-button
          style="margin-top: 20px"
          round
          block
          type="info"
          @click="tixian"
          >提交</van-button
        >
      </div>
    </van-action-sheet>
    <!-- 提现申请成功提示 -->
    <van-notify v-model="notifyShow" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>提现申请提交成功</span>
    </van-notify>
    <!-- 退出登录弹出框 -->
    <van-dialog v-model="dialogShow" show-cancel-button @confirm="clickConfirm">
      <p style="text-align: center; line-height: 40px">是否退出登录</p>
    </van-dialog>
  </div>
</template>

<script>
import { get, post } from "@/http/axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tixianNum: "",
      // 提现弹框
      show: false,
      // 提现提示信息
      notifyShow: false,
      // 退出登录弹框
      dialogShow: false,
      status: "",
      finishOrderNum: "",
      waitingNum: "",
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    // 提现申请提交
    async tixian() {
      let data = {
        userId: this.userInfo.id,
        money: this.tixianNum,
        applyType: "提现",
      };
      let res = await post("/accountApply/submitAccountApply", { ...data });
      // console.log(res);
      this.getUserInfo();
      this.show = false;
      this.tixianNum = "";
      this.notifyShow = true;
      setTimeout(() => {
        this.notifyShow = false;
      }, 1000);
    },
    // 确定退出登录
    async clickConfirm() {
      let res = await post("/user/logout");
      // console.log(res);
      if (res.data.status == 200) {
        // 跳转到登录页面
        this.$router.push("/login");
      } else {
        // 提示错误信息
        Toast(res.data.message);
      }
    },
    async getOrderData(status) {
      let data = {
        page: 1,
        pageSize: 111,
        status: status,
        employeeId: this.userInfo.id,
      };
      let res = await get("/order/pageQuery", { ...data });
      if (status == "已完成") {
        this.finishOrderNum = res.data.data.total;
      } else if (status == "待服务") {
        this.waitingNum = res.data.data.total;
      }
    },
    // 跳转到常用地址页面
    toAddress() {
      this.$router.push({
        path: "address",
      });
    },
    // 跳转到收益页面
    toMoney() {
      this.$router.push({
        path: "money",
      });
    },
    // 实名认证页面
    toCertification() {
      this.$router.push({
        path: "certification",
      });
    },
    // 个人信息页面
    toUserinfo() {
      this.$router.push({
        path: "userinfo",
      });
    },
  },
  created() {
    this.getUserInfo().then((a) => {
      this.getOrderData("已完成");
      this.getOrderData("待服务");
    });

    // console.log(this.userInfo);
  },
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 170px;
  background-image: linear-gradient(#c2e59c, #64b3f4);
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
  box-shadow: 0 0 10px #ccc;
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
  text-align: center;
}
.mineMoney {
  font-size: 16px;
  text-align: center;
}
.tixian {
  width: 50%;
  margin: 0 auto;
}
.mine_content {
  width: 95%;
  margin-left: 10px;
  margin-top: 120px;
}
.van-cell__title {
  font-size: 16px;
}
.footButton {
  width: 50%;
  margin: 0 auto;
  margin-top: 80px;
}
.content_tixian {
  padding: 16px 16px 30px;
}
</style>