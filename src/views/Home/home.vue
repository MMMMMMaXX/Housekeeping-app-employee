<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="header">
      <van-sticky>
        <van-nav-bar title="易洁家政" />
      </van-sticky>
    </div>
    <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="swipe in swipeData" :key="swipe.id"
          ><img :src="swipe.url" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 导航栏 -->
    <div class="daohang">
      <van-grid clickable :column-num="3">
        <van-grid-item icon="orders-o" text="订单" to="/manager/order" />
        <van-grid-item icon="smile-o" text="收益" to="/manager/money" />
        <van-grid-item icon="user-o" text="我的" to="/manager/mine" />
      </van-grid>
    </div>
    <!-- 底部订单展示区域 -->
    <div class="dingdan">
      <p>我的订单</p>
      <van-card
        v-for="adressdata in orderData"
        :key="adressdata.id"
        :desc="
          adressdata.address.province +
          adressdata.address.city +
          adressdata.address.area +
          adressdata.address.address
        "
        :title="userInfo.username"
        :thumb="userInfo.userFace"
        @click="toDetail(adressdata.id, adressdata.total)"
      >
        <template #tags>
          <div id="Tags">{{ adressdata.status }}</div>
          <div id="Tag">
            {{ moment(adressdata.orderTime).format("YYYY-MM-DD HH:mm:ss a") }}
          </div>
        </template>
        <template #footer> ￥{{ adressdata.total }} </template>
      </van-card>
    </div>
    <div style="height: 70px"></div>
  </div>
</template>

<script>
import { get } from "@/http/axios";
import { mapActions, mapState } from "vuex";
let moment = require("moment");
export default {
  data() {
    return {
      moment,
      adressData: [],
      swipeData: [],
      page: 1,
      pagesize: 10,
    };
  },
  methods: {
    toDetail(categoryID, TotalPrice) {
      this.$router.push({
        path: "/manager/detail",
        query: { categoryID, TotalPrice },
      });
    },
    ...mapActions("order", ["getAllOrderDate"]),
    ...mapActions("user", ["getUserInfo"]),
    // 获取token
    getToken() {
      let token = localStorage.getItem("token");
      this.getUserInfo(token);
    },
    async getAllSwipeData() {
      let res = await get("/carousel/query", { status: "正常" });
      // 将拿到的数据赋值给轮播图数组
      this.swipeData = res.data.data;
    },

    queryOrder() {
      let data = {
        page: 1,
        pageSize: 10,
        employeeId: this.userInfo.id,
      };
      // console.log(123);
      this.getAllOrderDate(data);
    },
  },
  created() {
    this.getToken();
    this.getAllSwipeData();
    this.queryOrder();
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapState("order", ["orderData"]),
  },
};
</script>

<style  scoped>
#Tags {
  color: red;
  margin-bottom: 5px;
}
.my-swipe,
.my-swipe img {
  width: 100%;
  height: 200px;
}
.van-card__title {
  font-size: 15px;
}
.van-card__footer {
  font-size: 13px;
}
</style>