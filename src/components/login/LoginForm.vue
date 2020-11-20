<template>
  <div class="login-form">
    <a-form :model="loginForm" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div class="login-form-item">
        <a-input size="large" v-model:value="loginForm.username" placeholder="请输入用户名">
          <template #prefix>
            <user-outlined type="user" style="color: rgba(0,0,0,.45)" />
          </template>
        </a-input>
      </div>
      <div class=" login-form-item">
        <a-input-password size="large" v-model:value="loginForm.password" placeholder="请输入密码">
          <template #prefix>
            <lock-outlined type="password" style="color: rgba(0,0,0,.45)" />
          </template>
        </a-input-password>
      </div>
      <div class="login-form-item">
        <a-checkbox v-model:checked="loginForm.rememberme" style="text-align: left;">
          记住密码
        </a-checkbox>
        <a style="float: right;">忘记密码</a>

      </div>
      <div class="login-form-item">
        <a-button type="primary" @click="doLogin" block>
          <template #icon>
            <LoginOutlined />
          </template>登录
        </a-button>
      </div>
    </a-form>
  </div>

</template>
<script>
import { reactive } from 'vue'
import { Form, Input, Checkbox } from 'ant-design-vue'
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons-vue";
import { getJwt } from "../../api/login"
export default {
  name: 'LoginForm',
  setup(props, cxt) {
    let labelCol = { span: 4 }
    let wrapperCol = { span: 14 }
    const loginForm = reactive({
      username: "",
      password: "",
      rememberme: false,
    })

    const doLogin = async () => {
      const response = await getJwt(loginForm)

      if (response.code == 200) {
        cxt.emit('set-mask', true)
        window.localStorage.setItem("JWTHeaderName", response.data)
      }
    }
    return {
      loginForm,
      labelCol,
      wrapperCol,
      doLogin
    }
  },
  components: {
    AForm: Form,
    AInputPassword: Input.Password,
    ACheckbox: Checkbox,
    UserOutlined,
    LockOutlined,
    LoginOutlined
  }
}
</script>
<style lang="scss">
.login-form {
  padding-top: 2%;
  height: 100%;
  width: 100%;
}
.login-form-item {
  text-align: left;
  margin: 0 auto 24px;
  width: 80%;
}
</style>