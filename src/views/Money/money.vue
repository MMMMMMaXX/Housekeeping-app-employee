<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="header">
      <van-sticky>
        <van-nav-bar title="收益" />
      </van-sticky>
    </div>
    <!-- 菜单栏 -->
    <div class="menu">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div
            v-for="endOrder in endOrderData"
            :key="endOrder.id"
            class="allMsg"
          >
            <div class="allMsg_img">
              <van-image
                round
                fit="cover"
                width="5rem"
                height="5rem"
                :src="endOrder.customer.userFace"
              />
            </div>
            <div class="allMsg_right">
              <div class="allMsg_msg">
                <span class="custome_name">
                  {{ endOrder.customer.username }}
                </span>
                <van-tag
                  class="custome_status"
                  color="white"
                  text-color="#f8825d"
                >
                  {{ endOrder.status }}
                </van-tag>
                <p class="custome_adress">
                  {{ endOrder.address.province }}{{ endOrder.address.city
                  }}{{ endOrder.address.area }}{{ endOrder.address.address }}
                </p>
                <span class="custome_time">
                  {{ endOrder.customer.registerTime | dateFormat }}
                </span>
              </div>
              <div class="allMsg_price">
                <span class="custome_price">
                  {{ "￥" }}
                  {{ endOrder.total }}
                </span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="提现">
          <div v-for="account in accountData" :key="account.id" class="cashMsg">
            <div class="cashMsg_msg">
              <span class="cash_name">提现-到银行卡</span>
              <span class="cash_price">
                {{ "￥" }}
                {{ account.money }}
              </span>
            </div>
            <div class="cashMsg_price">
              <span class="cash_time">
                {{ account.applyTime | dateFormat }}
              </span>
              <van-tag
                v-if="account.status == '未审核'"
                class="cash_status"
                color="white"
                text-color="#f8825d"
              >
                {{ account.status }}
              </van-tag>
              <van-tag
                v-else-if="account.status == '通过'"
                class="cash_status"
                color="white"
                text-color="#0de66e"
              >
                {{ account.status }}
              </van-tag>
              <van-tag
                v-else
                class="cash_status"
                color="white"
                text-color="#f53b3b"
              >
                {{ account.status }}
              </van-tag>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div style="height: 70px"></div>
  </div>
</template>

<script>
// 引入vuex辅助函数
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    // 获取账户数据
    ...mapState("account", ["accountData"]),
    // 获取已完成的订单数据
    ...mapState("endOrder", ["endOrderData"]),
    // 总价
    sumPrice: function () {
      var sumPrice = 0;
      console.log(this.endOrderData);
      console.log(this.endOrderData[0]);
      console.log(this.endOrderData[0].orderLines);
      console.log(this.endOrderData[0].orderLines[0].price);

      // for (var i = 0; i < this.endOrderData.length; i++) {
      //     console.log(this.endOrderData[i]);
      //     console.log(this.endOrderData[i].orderLines);
      //     console.log(this.endOrderData[i].orderLines[i].price);
      //     console.log(this.endOrderData[i].orderLines[i].price);
      //     sumPrice += this.endOrder[i].orderLines.price;
      // }

      for (var i = 0; i < this.endOrderData.length; i++) {
        // return this.endOrderData[i].total;
        // sumPrice += this.endOrderData[i].total;
        /* for (var j = 0; j < this.endOrderData[i].orderLines.length; j++) {
          sumPrice += this.endOrderData[i].orderLines[j].price;
          // console.log(sumPrice);
        } */
      }
      // return sumPrice;
    },
  },
  methods: {
    // 引入获取产品数据的方法
    ...mapActions("account", ["getAllAccountData"]),
    // 获取账户数据
    queryAccount() {
      let data = {
        page: 1,
        pageSize: 100,
        applyType: "提现",
      };
      // 调用获取账户数据的方法
      this.getAllAccountData(data);
    },
    // 引入获取已完成的订单数据的方法
    ...mapActions("endOrder", ["getAllEndOrderData"]),
    // 获取已完成的订单数据
    queryEndOrder() {
      let data = {
        page: 1,
        pageSize: 100,
        status: "已完成",
      };
      // 调用获取已完成的订单数据的方法
      this.getAllEndOrderData(data);
    },
  },
  created() {
    // 自动获取账户数据
    this.queryAccount();
    // 自动获取已完成的订单数据
    this.queryEndOrder();
  },
};
</script>

<style scoped>
/* 全部页面内容卡片 */
.allMsg {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0 0 6px 0 #ccc;
  /* padding: 1em 1em; */
  padding: 8px;
  position: relative;
}

.allMsg_img {
  margin-top: 15px;
}

.allMsg {
  display: flex;
}

.allMsg_msg {
  margin-left: 10px;
}

.custome_status {
  /* float: right; */
  position: absolute;
  top: 5px;
  right: 5px;
}

.custome_adress {
  font-size: 12px;
  margin-top: 1em;
  color: #666;
}

.custome_time {
  font-size: 12px;
}

.allMsg_price {
  /* text-align: right; */
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.custome_price {
  font-size: 12px;
}

/* 提现页面内容卡片 */
.cashMsg {
  width: 80%;
  height: 68px;
  margin: 0 auto;
  margin-top: 1em;
  border-radius: 5px;
  padding: 0.5em 1em;
  color: #999;
  box-shadow: 0 0 10px #ccc;
}

.cashMsg_msg {
  position: relative;
}

.cash_name {
  color: #333;
  font-weight: 300;
}

.cash_price {
  /* float: right; */
  position: absolute;
  top: 5px;
  right: 5px;
  color: #333;
}

.cash_time {
  margin-top: 2em;
  font-size: 11px;
  float: left;
}

.cash_status {
  float: right;
  font-size: 11px;
  margin-top: 2em;
}
</style>