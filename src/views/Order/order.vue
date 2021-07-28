<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="order">
      <div class="Orderheder">
        <van-sticky>
          <van-tabs v-model="active" animated swipeable title-active-color="red" @change="onChange">
            <van-tab title="全部订单" name="all"></van-tab>
            <van-tab title="待接单" name="take"></van-tab>
            <van-tab title="待服务" name="serve"></van-tab>
            <van-tab title="待确认" name="confirm"></van-tab>
            <van-tab title="已完成" name="complete"></van-tab>
          </van-tabs>
        </van-sticky>
      </div>
      <lazy-component>
        <div class="Ordercontent">
          <van-card
            class="Order_warp"
            v-for="(order, index) in orderArr"
            :key="order.id"
            :desc="
            order.address.province +
            order.address.city +
            order.address.area +
            order.address.address
          "
            :title="order.customer.username"
            :thumb="order.customer.userFace"
            @click="
            toDetail(
              order.status,
              order.orderTime,
              order.total,
              order.id,
              index
            )
          "
          >
            <template #tags>
              <van-tag plain type="success">
                {{
                moment(order.orderTime).format("YYYY-MM-DD HH:mm:ss a")
                }}
              </van-tag>
              <br />
              <van-tag
                plain
                v-if="order.status === '待接单'"
                type="danger"
                class="tag_r"
              >{{ order.status }}</van-tag>
              <van-tag
                plain
                v-if="order.status === '待服务'"
                type="warning"
                class="tag_r"
              >{{ order.status }}</van-tag>
              <van-tag
                plain
                v-if="order.status === '待确认'"
                type="primary"
                class="tag_r"
              >{{ order.status }}</van-tag>
              <van-tag
                plain
                v-if="order.status === '已完成'"
                type="success"
                class="tag_r"
              >{{ order.status }}</van-tag>
            </template>
            <template #footer>￥{{ order.total }}</template>
          </van-card>
          <van-empty description="您没有订单" v-if="orderArr == '' && this.tab_title.status == '全部订单'"></van-empty>

          <van-empty
            description="您没有待接单订单"
            v-else-if="orderArr == '' && this.tab_title.status == '待接单'"
          ></van-empty>
          <van-empty
            description="您没有待服务订单"
            v-else-if="orderArr == '' && this.tab_title.status == '待服务'"
          ></van-empty>

          <van-empty
            description="您没有已完成订单"
            v-else-if="orderArr == '' && this.tab_title.status == '已完成'"
          ></van-empty>
          <div style="height: 100px"></div>
        </div>
      </lazy-component>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import { PullRefresh } from "vant";
import { Lazyload } from "vant";
Vue.use(PullRefresh);
Vue.use(Lazyload, {
  lazyComponent: true,
});
import { Toast } from "vant";
let moment = require("moment");
export default {
  data() {
    return {
      moment,
      active: "all",
      tab_title: "全部订单",
      orderArr: [],
      queryList: {
        page: 1,
        pageSize: 100,
      },
      count: 0,
      isLoading: false,
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    ...mapActions("order", ["getAllOrderDateMx"]),
    onRefresh() {
      this.getUserInfo()
        .then((r) => {
          setTimeout(() => {
            this.queryList.employeeId = this.userInfo.id;
            // 获取订单数据
            this.queryData(this.queryList);
            Toast("刷新成功");
            this.isLoading = false;
            this.count++;
          }, 1000);
        })
        .catch((r) => {
          this.queryList.employeeId = this.userInfo.id;
          // 获取订单数据
          this.queryData(this.queryList);
          setTimeout(() => {
            Toast("刷新失败");
            this.isLoading = false;
            this.count++;
          }, 1000);
        });
    },
    // 改变标签页时
    onChange(name, title) {
      this.tab_title = { status: title };
      // 重新获取页面数据
      this.queryData(this.queryList);
    },
    // 查询订单数据
    async queryData(querylist) {
      if (this.tab_title.status !== "全部订单") {
        this.getAllOrderDateMx({ ...querylist, ...this.tab_title })
          .then((res) => {
            this.orderArr = res.data.data.list;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.getAllOrderDateMx(querylist)
          .then((res) => {
            this.orderArr = res.data.data.list;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // 跳转每个订单详情页面
    toDetail(status, orderTime, total, orderId, activeKey) {
      // 路由跳转
      this.$router.push({
        // path
        path: "/manager/detail2",
        // 传值
        query: {
          total,
          orderId,
          activeKey,
          orderTime,
          status,
        },
      });
    },
  },
  created() {
    this.getUserInfo().then((r) => {
      this.queryList.employeeId = this.userInfo.id;
      // 获取订单数据
      this.queryData(this.queryList);
    });
  },
};
</script>

<style>
.Order_warp .van-card__title {
  font-size: 15px;
  font-weight: 700;
}
.Order_warp .van-card__footer {
  font-size: 15px;
}
.Order_warp img {
  border-radius: 50% !important;
}
.Order_warp .van-card__title {
  line-height: 25px;
}
.Order_warp .van-card__desc {
  max-height: 28px;
  line-height: 28px;
}
.van-tag {
  line-height: 25px;
}
.tag_r {
  position: absolute;
  right: 0;
  top: 0;
}
.Order_warp {
  width: 93%;
  left: 3%;
  border-radius: 5px;
  top: 15px;
  background: #fafafa;
  box-shadow: 2px 2px 2px 2px rgb(191, 115, 255);
  color: black;
}
.van-card:not(:first-child) {
  margin-top: 15px;
}
</style>