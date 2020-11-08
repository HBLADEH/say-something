<template>
  <transition name="fade">
    <div class="login-mask" v-if="mask_active"></div>
  </transition>

  <div class="LoginRegistPage">
    <!-- <a-button @click="mask_active = !mask_active">测试</a-button> -->
    <a-tabs>
      <a-tab-pane key="1" tab="Tab 1">
        Content of tab 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        Content of tab 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of tab 3
      </a-tab-pane>

    </a-tabs>
  </div>

</template>
<script>
import { ref } from 'vue'
export default {
  name: 'LoginAndRegister',
  setup() {
    let mask_active = ref(false);
    const doClick = () => {
      console.log(mask_active.value);
    }
    return {
      doClick,
      mask_active
    }
  }
}
</script>
<style lang="scss">
.LoginRegistPage {
  width: 400px;
  height: 300px;
  background: #fff;
  z-index: 1000;

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
