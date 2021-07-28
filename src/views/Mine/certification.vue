<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-sticky :offset-top="0">
      <van-nav-bar
        title="实名认证"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <!-- 头部提示信息 -->
    <div>
      <p style="text-align: center; color: #1989fa">进行实名认证</p>
      <p style="text-align: center; color: #1989fa">
        用于保障账号的安全及快速接收订单信息
      </p>
    </div>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
    </van-divider>
    <!-- 认证信息输入表单区域 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="realname"
        name="realname"
        label="真实姓名"
        placeholder="真实姓名"
        :rules="[{ required: true, message: '请填写真实姓名' }]"
      />
      <van-field
        v-model="idCard"
        name="idCard"
        label="身份证号"
        placeholder="身份证号"
        :rules="[{ required: true, message: '请填写身份证号' }]"
      />
      <van-field
        v-model="bankCard"
        name="bankCard"
        label="银行卡号"
        placeholder="银行卡号"
        :rules="[{ required: true, message: '请填写银行卡号' }]"
      />
      <van-field name="idcardPhotoPositive" label="身份证正面照">
        <template #input>
          <van-uploader
            v-model="idcardPhotoPositive"
            :max-count="1"
            :after-read="afterRead1"
          />
        </template>
      </van-field>
      <van-field name="idcardPhotoNegative" label="身份证反面照">
        <template #input>
          <van-uploader
            v-model="idcardPhotoNegative"
            :max-count="1"
            :after-read="afterRead2"
          />
        </template>
      </van-field>
      <van-field name="bankCardPhoto" label="银行卡照片">
        <template #input>
          <van-uploader
            v-model="bankCardPhoto"
            :max-count="1"
            :after-read="afterRead3"
          />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button
          round
          block
          class="addBtn"
          type="info"
          color="linear-gradient(to right, #c2e59c, #64b3f4)"
          native-type="submit"
          >提交</van-button
        >
      </div>
      <div style="height: 100px"></div>
    </van-form>
  </div>
</template>

<script>
import { get, post } from "@/http/axios";
import { mapActions, mapState } from "vuex";
import { showFileURL, uploadFileURL } from "@/http/config";
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      // 上传文件的服务器地址
      uploadFileURL,
      // 表单数据
      realname: "",
      idCard: "",
      bankCard: "",
      idcardPhotoPositive: [],
      idcardPhotoNegative: [],
      bankCardPhoto: [],
      // 图片地址
      imageUrl1: "",
      imageUrl2: "",
      imageUrl3: "",
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    // 返回上一级页面
    onClickLeft() {
      this.$router.go(-1);
    },
    // 表单提交
    async onSubmit(values) {
      // console.log("submit", values);
      let data = {
        realname: this.realname,
        idCard: this.idCard,
        bankCard: this.bankCard,
        idcardPhotoPositive: this.imageUrl1,
        idcardPhotoNegative: this.imageUrl2,
        bankCardPhoto: this.imageUrl3,
        userId: this.userInfo.id,
      };
      let res = await post("/certification/submitCertificationApply", {
        ...data,
      });
      // console.log(res);
      if (res.status === 200) {
        Toast.success(res.data.message);
        setTimeout(() => {
          this.$router.go(-1);
        }, 1000);
      } else {
        Toast.fail(res.data.message);
      }
    },
    // 上传成功之后 调用的方法
    afterRead1(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      const formData = new FormData(); // 声明一个FormData对象
      formData.append("file", file.file);
      axios
        .post(uploadFileURL, formData, {
          headers: {
            "content-type": "multer/form-data",
          },
        })
        .then((res) => {
          this.imageUrl1 = showFileURL + res.data.data.id;
          console.log(this.imageUrl1);
        });
    },
    afterRead2(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      const formData = new FormData(); // 声明一个FormData对象
      formData.append("file", file.file);
      axios
        .post(uploadFileURL, formData, {
          headers: {
            "content-type": "multer/form-data",
          },
        })
        .then((res) => {
          this.imageUrl2 = showFileURL + res.data.data.id;
          console.log(this.imageUrl2);
        });
    },
    afterRead3(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      const formData = new FormData(); // 声明一个FormData对象
      formData.append("file", file.file);
      axios
        .post(uploadFileURL, formData, {
          headers: {
            "content-type": "multer/form-data",
          },
        })
        .then((res) => {
          this.imageUrl3 = showFileURL + res.data.data.id;
          console.log(this.imageUrl3);
        });
    },
  },
  created() {
    this.getUserInfo();
    // console.log(this.userInfo);
  },
  mounted() {},
};
</script>
<style scoped>
.addBtn {
  width: 70%;
  margin: 0 auto;
}
</style>