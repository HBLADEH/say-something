<template>
  <div class="register-form">
    <a-form :model="registerForm" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div class="register-form-item">
        <a-input size="large" v-model:value="registerForm.username" placeholder="请输入用户名">
          <template #prefix>
            <user-outlined type="user" style="color: rgba(0,0,0,.45)" />
          </template>
        </a-input>
      </div>
      <div class=" register-form-item">
        <a-input-password size="large" v-model:value="registerForm.password" placeholder="请输入密码">
          <template #prefix>
            <lock-outlined type="password" style="color: rgba(0,0,0,.45)" />
          </template>
        </a-input-password>
      </div>
      <div class=" register-form-item">
        <a-input-password size="large" v-model:value="registerForm.passwordCheck" placeholder="请输入密码">
          <template #prefix>
            <lock-outlined type="password" style="color: rgba(0,0,0,.45)" />
          </template>
        </a-input-password>
      </div>

      <div class="register-form-item">
        <a-button type="primary" block>
          <template #icon>
            <FormOutlined />
          </template>注册
        </a-button>
      </div>
    </a-form>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { Form, Input } from 'ant-design-vue'
import { UserOutlined, LockOutlined, FormOutlined } from "@ant-design/icons-vue";
export default {
  name: 'RegisterForm',
  setup() {
    let labelCol = { span: 4 }
    let wrapperCol = { span: 14 }
    const registerForm = reactive({
      username: "",
      password: "",
      passwordCheck: "",
      rememberme: false,
    })
    return {
      registerForm,
      labelCol,
      wrapperCol
    }
  },
  components: {
    AForm: Form,
    AInputPassword: Input.Password,
    UserOutlined,
    LockOutlined,
    FormOutlined
  }
}
</script>
<style lang="scss">
.register-form {
  padding-top: 1%;
  height: 100%;
  width: 100%;
}
.register-form-item {
  text-align: left;
  margin: 0 auto 20px;
  width: 80%;
}
</style>