<template>
  <div class="login-container">
    <el-form ref="loginFromRef" class="login-form" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        登录
        <!-- <lang-select class="lang-select" effect="light"></lang-select> -->
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="username" name="username" type="text" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          name="password"
          :type="passwordType"
        />
        <span class="show-pwd" @click="onChangePwdType">
          <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'"></svg-icon>
        </span>
      </el-form-item>
      <el-button type="primary" style="width: 100%;" :loading="loading" @click="handleLogin">登录</el-button>
      <!-- <div class="tips" v-html="$t('msg.login.desc')"></div> -->
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
// 数据源
const loginForm = ref({
  username: "super-admin",
  password: "123456"
});
// 验证规则
const validatePassword = () => {
  return (_, value, callback) => {
    if (value.length < 6) {
      callback(new Error("密码不能少于6位数"));
    } else {
      callback();
    }
  };
};

const loginRules = ref({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "输入用户名"
    }
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword()
    }
  ]
});

// 处理密码框文本显示状
const passwordType = ref("password");
const onChangePwdType = () => {
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};

// 登录动作处理
const loading = ref(false);
const loginFromRef = ref(null);
const store = useStore();
const handleLogin = () => {
  // 进行表单校验
  loginFromRef.value.validate(valid => {
    if (!valid) return;
    // 触发登录动作
    loading.value = true;
    store
      .dispatch("user/login", loginForm.value)
      .then(() => {
        loading.value = false;
        // TODO: 登录后操作
      })
      .catch(err => {
        console.log(err);
        loading.value = false;
      });
  });
};
</script>

<style lang="less" scoped>
// @bg: #2d3a4b;
// @dark_gray: #889aa4;
// @light_gray: #eee;
// @cursor: #fff;

.login-container {
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

  .login-form {
    position: relative;
    width: 320px;
    max-width: 100%;
    padding: 20px;
    // padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    text-align: center;
    margin-bottom: 20px;
    font-size: 25px;
  }
  ::v-deep {
    .el-form-item {
      margin-bottom: 25px;
    }
  }
}
</style>
