<template>
  <transition name="fade">
    <div class="login-mask" v-if="mask_active" @click="mask_active = false"></div>
  </transition>
  <div class="LoginRegistPage" v-if="mask_active">
    <a-tabs v-model:activeKey="tab_index" size="large">
      <a-tab-pane key="1" tab="登录">
        <LoginForm />
      </a-tab-pane>
      <a-tab-pane key="2" tab="注册" force-render>
        <RegisterForm />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Tabs } from 'ant-design-vue'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
export default {
  name: 'LoginAndRegister',

  setup() {
    let mask_active = ref(false);
    let tab_index = ref("1");
    const doClick = () => {
      console.log(123);
    }

    return {
      doClick,
      mask_active,
      tab_index,
    }
  },
  components: {
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    LoginForm,
    RegisterForm
  }
}
</script>
<style lang="scss">
.ant-tabs {
  height: auto;
  width: 100%;
}
.LoginRegistPage {
  width: 400px;
  height: 300px;
  background: #fff;
  z-index: 1000;
  text-align: center;

  /* 绝对水平居中对齐 */
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
}
.login-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  transition: opacity 0.5s;
  opacity: 1;
}
.mask-active {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
