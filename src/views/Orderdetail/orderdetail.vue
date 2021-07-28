<template>
  <div class="orderDetail">
    <van-sticky>
      <van-nav-bar
        title="订单详情"
        left-text="返回"
        left-arrow
        v-buttonThrotFromMx="onClickLeft"
      />
    </van-sticky>
    <div class="Detailcontent">
      <van-card
        class="OrderWrap"
        v-for="(order, index) in orderData"
        :key="index"
        :price="order.price + '.00'"
        :num="order.number"
        :desc="order.product.description"
        :title="order.product.name"
        :thumb="order.product.photo"
      ></van-card>
      <van-cell-group border v-if="orderData != ''">
        <van-cell>
          <div class="Sum">
            总计:
            <span class="money">￥{{ this.sum }}</span>
          </div>
        </van-cell>
      </van-cell-group>
      <van-sticky>
        <div class="d_content">
          <span
            v-if="status === '待接单'"
            style="color: red; margin-right: 20px; font-size: 13px"
            >{{ status }}</span
          >
          <span
            v-else-if="status === '待派单'"
            style="color: purple; margin-right: 20px; font-size: 13px"
            >{{ status }}</span
          >
          <span
            v-else-if="status === '待确认'"
            style="color: orange; margin-right: 20px; font-size: 13px"
            >{{ status }}</span
          >
          <span
            v-else-if="status === '待服务'"
            style="color: orange; margin-right: 20px; font-size: 13px"
            >{{ status }}</span
          >
          <span
            v-else-if="status === '待支付'"
            style="color: red; margin-right: 20px; font-size: 13px"
            >{{ status }}</span
          >
          <span
            v-else
            style="color: green; margin-right: 20px; font-size: 13px"
            >{{ status }}</span
          >
          <p>
            服务地址：{{
              orderAddress.province +
              orderAddress.city +
              orderAddress.area +
              orderAddress.address
            }}
          </p>
          <p>
            联系方式：{{ orderCustomer.username }}&nbsp;({{
              orderCustomer.telephone
            }})
          </p>
          <p>
            下单时间：
            {{ moment(Number(orderTime)).format("YYYY/MM/DD HH:mm:ss a") }}
          </p>
          <p>
            服务时间：
            {{ moment(Number(serveTime)).format("YYYY/MM/DD HH:mm:ss a") }}
          </p>
        </div>

        <van-button
          v-if="status === '待接单'"
          class="cancelButton"
          v-buttonThrotFromMx="() => confirmOrder(orderid)"
          color="linear-gradient(to right top, rgb(117, 121, 255), rgb(191, 115, 255))"
          >确认接单</van-button
        >
        <van-button
          v-if="status === '待接单'"
          class="cancelButton"
          v-buttonThrotFromMx="() => rejectOrder(orderid)"
          color="linear-gradient(to right top, rgb(117, 121, 255), rgb(191, 115, 255))"
          >拒绝接单</van-button
        >
        <van-button
          v-if="status === '待服务'"
          class="cancelButton"
          v-buttonThrotFromMx="() => sericeCompleteOrder(orderid)"
          color="linear-gradient(to right top, rgb(117, 121, 255), rgb(191, 115, 255))"
          >服务结束</van-button
        >
      </van-sticky>
      <van-empty description="该订单无数据" v-if="orderData == ''"></van-empty>
      <div style="height: 100px"></div>
    </div>
  </div>
</template>

<script>
import { get } from "@/http/axios";
import { mapActions } from "vuex";
import { Dialog } from "vant";

let moment = require("moment");
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      moment,
      sum: this.$route.query.total,
      orderid: this.$route.query.orderId,
      orderData: [],
      orderAddress: {},
      orderCustomer: {},
      serveTime: "",
      orderTime: this.$route.query.orderTime,
      status: this.$route.query.status,
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("order", ["getAllOrderDateMx"]),
    // 返回上一个页面
    onClickLeft() {
      this.$router.go(-1);
    },
    // 通过id查询订单
    async qureyDataById() {
      // console.log("this.orderid", this.orderid);
      let data = {
        id: this.orderid,
      };
      let res = await get("/order/findById", { ...data });
      this.orderData = res.data.data.orderLines;
      this.orderData = this.orderData.filter((a) => {
        return a.number != 0;
      });
      this.orderAddress = res.data.data.address;
      this.orderCustomer = res.data.data.customer;
      this.serveTime = res.data.data.serviceTime;
      // console.log(this.serveTime);
      // console.log(res.data.data.orderTime);
    },

    confirmOrder() {
      Dialog.confirm({
        title: "确认接单",
        message: "点击确认进行接单，操作不可撤销请谨慎选择。",
      })
        .then(async () => {
          // on confirm
          let data = {
            orderId: this.orderid,
          };
          // console.log(data);
          let res = await get("/order/takeOrder", { ...data });
          if (res.status === 200) {
            this.$notify({
              message: "接单成功",
              type: "success",
            });
            setTimeout(() => {
              this.$router.go(-1);
              this.getAllOrderDateMx();
            }, 600);
          } else {
            this.$notify({
              message: res.data.message,
              type: "danger",
            });
          }
        })
        .catch(() => {
          this.$notify({
            message: "取消成功",
            type: "success",
          });
        });

      // console.log(res);
    },
    rejectOrder() {
      Dialog.confirm({
        title: "拒绝接单",
        message: "点击确认拒绝接单，操作不可撤销请谨慎选择。",
      })
        .then(async () => {
          // on confirm
          let data = {
            orderId: this.orderid,
          };
          // console.log(data);
          let res = await get("/order/rejectOrder", { ...data });
          if (res.status === 200) {
            this.$notify({
              message: "拒绝接单成功",
              type: "success",
            });
            setTimeout(() => {
              this.$router.go(-1);
              this.getAllOrderDateMx();
            }, 600);
          } else {
            this.$notify({
              message: res.data.message,
              type: "danger",
            });
          }
        })
        .catch(() => {
          this.$notify({
            message: "取消成功",
            type: "success",
          });
        });

      // console.log(res);
    },
    sericeCompleteOrder() {
      Dialog.confirm({
        title: "服务结束",
        message:
          "服务结束后请点击确认，等待用户确认服务已完成，操作不可撤销请谨慎选择。",
      })
        .then(async () => {
          // on confirm
          let data = {
            orderId: this.orderid,
          };
          // console.log(data);
          let res = await get("/order/serviceCompleteOrder", { ...data });
          if (res.status === 200) {
            this.$notify({
              message: "服务已结束，待用户确认，辛苦了",
              type: "success",
            });
            setTimeout(() => {
              this.$router.go(-1);
              this.getAllOrderDateMx();
            }, 600);
          } else {
            this.$notify({
              message: res.data.message,
              type: "danger",
            });
          }
        })
        .catch(() => {
          // on cancel
          this.$notify({
            message: "取消成功",
            type: "success",
          });
        });

      // console.log(res);
    },
  },
  created() {
    this.qureyDataById();
  },
};
</script>

<style>
.cancelButton {
  float: right;
  width: 30%;
  top: 10px;
  position: relative;
  right: 10px;
  margin-right: 5px;
}
.OrderWrap img {
  border-radius: 8px;
}
.Sum {
  float: right;
}
.money {
  color: red;
  font-size: 16px;
}
.van-cell-group {
  border-top: 1px solid #f2f3f5;
  border-bottom: 1px solid #f2f3f5;
  top: 20px;
}
.OrderWrap .van-card__title {
  color: black;
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
}
.OrderWrap .van-card__content,
.OrderWrap .van-card__desc {
  line-height: 25px;
  color: #999;
}
.OrderWrap .van-card__price {
  font-weight: 500;
  color: red;
}
.OrderWrap .van-card__num {
  float: right;
  color: black;

  font-size: 14px;
}
.d_content {
  position: relative;
  background: #fafafa;
  color: #999;
  font-size: 12px;
  clear: both;
  padding-top: 10px;
  margin-top: 30px;
  min-height: 150px;
}
.d_content p {
  margin-left: 10px;
  padding: 5px 0;
}
.d_content span {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 5px;
}
.OrderWrap {
  width: 93%;
  left: 3%;
  border-radius: 5px;
  top: 10px;
  background: #fafafa;
  color: #999;
  box-shadow: 2px 2px 2px 2px rgb(191, 115, 255);
}
</style>