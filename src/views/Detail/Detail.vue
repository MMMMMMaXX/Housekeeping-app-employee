<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="daohangl">
      <van-nav-bar
        title="订单详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <!-- 产品详情 -->
    <div class="orderDetail">
      <van-card
        v-for="(detaildata, index) in detailData"
        :key="index"
        :num="detaildata.number"
        :price="detaildata.price"
        :desc="detaildata.product.description"
        :title="detaildata.product.name"
        :thumb="detaildata.product.photo"
      />
      <div class="Total">
        总计：<span style="color: red">￥{{ $route.query.TotalPrice }}</span>
      </div>
      <!-- 详细信息 -->
      <div class="information">
        <p>
          服务地址:{{
            AtressData.province +
            AtressData.city +
            AtressData.area +
            AtressData.address
          }}
        </p>
        <p>联系方式:{{ Customer.username }}({{ Customer.telephone }})</p>
        <p>下单时间:{{ moment(OrderTime).format("YYYY/MM/DD HH:mm:ss a") }}</p>
        <p>
          服务时间:{{ moment(ServiceTime).format("YYYY/MM/DD HH:mm:ss a") }}
        </p>
        <p id="statuss">{{ Status }}</p>
      </div>
    </div>
    <div style="height: 80px"></div>
  </div>
</template>

<script>
import { get } from "@/http/axios";
import { mapActions, mapState } from "vuex";
let moment = require("moment");
export default {
  data() {
    return {
      ServiceTime: 1,
      Status: "",
      moment,
      OrderTime: 1,
      Customer: {},
      detailData: [],
      AtressData: {},
    };
  },
  methods: {
    async getDdata() {
      let res = await get("/order/findById?id=" + this.$route.query.categoryID);
      //   console.log(res);
      this.detailData = res.data.data.orderLines;
      this.AtressData = res.data.data.address;
      this.Customer = res.data.data.customer;
      this.OrderTime = res.data.data.orderTime;
      this.Status = res.data.data.status;
      this.ServiceTime = res.data.data.serviceTime;
      console.log(this.OrderTime);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getDdata();
  },
  computed: {
    ...mapState("order", ["orderData"]),
  },
};
</script>

<style scoped>
.Total {
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 10px;
  float: right;
  font-size: 12px;
}
.information {
  margin-right: 5px;
  /* padding-top: 1px; */
  height: 120px;
  position: relative;
  color: #999999;
  /* padding: 1px; */
  margin-left: 5px;
  background: #f8f8f8;
  font-size: 12px;
  clear: both;
}
#statuss {
  background: #f8f8f8;
  position: absolute;
  right: 10px;
  top: 87px;
}
</style>