<template>
  <div>
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <!-- logo -->
        <a class="AppHeader-logo" href="#">SSY</a>

        <!-- 菜单栏 -->
        <ul class="AppHeader-tabs">
          <li class="AppHeader-tab" v-for="(menuItem, index) in menu_data" :key="menuItem.name" @click="toggle(index)">
            <a class="AppHeader-tabsLink tabs-link" :class="{'is-active': index == check_index}" href="#">{{menuItem.title}}</a>
          </li>
        </ul>

        <!-- 搜索框 -->
        <InputSearch class="input-search" v-model:value="search_val" placeholder="输入想要搜索的内容" enter-button @search="onSearch" />

        <!-- 用户信息 -->
        <div class="AppHeader-userInfo" v-if="is_login">

          <ul class="AppHeader-tabs">
            <li class="AppHeader-tab">
              <CommentOutlined style="font-size: 27px; color: #76839B;" />
            </li>
            <li class="AppHeader-tab">
              <BellOutlined style="font-size: 27px; color: #76839B;" />
            </li>
          </ul>

          <a-dropdown>
            <a-avatar shape="square" :size="32" @click="e => e.preventDefault()" style="backgroundColor: #76839B">
              <template v-slot:icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <template #overlay>
              <a-menu>

                <a-menu-item><a href="javascript:;" @click="logOut">退出登录</a></a-menu-item>

              </a-menu>
            </template>
          </a-dropdown>

        </div>
        <div class="AppHeader-userInfo" v-else>
          <a-button-group>
            <a-button type="primary" @click="showLoginAndRegister('1')">
              <UserOutlined /> 登录
            </a-button>
            <a-button @click="showLoginAndRegister('2')">
              <EditOutlined /> 注册
            </a-button>
          </a-button-group>
        </div>
      </div>
    </header>
  </div>
  <LoginAndRegist @is-login="isLogin" ref="loginAndRegist" />
</template>

<script>
import { ref } from 'vue';
// 菜单栏数据 
import menuData from '../assets/resource/navbar'

// 插件
import InputSearch from "ant-design-vue/lib/input/Search";
import { Dropdown, Menu, } from 'ant-design-vue'
import { UserOutlined, CommentOutlined, BellOutlined, EditOutlined } from "@ant-design/icons-vue";
import LoginAndRegist from '../components/login/LoginAndRegister'

export default {
  name: 'NavBar',
  setup() {
    let menu_data = ref(menuData);

    let check_index = ref(0) // 默认
    let search_val = ref("")
    let is_login = ref(false)
    let loginAndRegist = ref(null);

    const toggle = (index) => {
      check_index.value = index
    }

    const onSearch = (value) => {
      console.log(value)
    }
    const showLoginAndRegister = (index) => {
      // loginAndRegist.value.setTabIndex(type)
      loginAndRegist.value.tab_index = index
      loginAndRegist.value.mask_active = !loginAndRegist.value.mask_active
    }

    const logOut = () => {
      window.localStorage.removeItem("JWTHeaderName")
      is_login.value = false
    }

    const isLogin = (state) => {
      // 判断登录是否成功
      is_login.value = state
      // if (state) {
      //   // 显示登录成功的用户区域
      //   is_login.value = true
      // } else {
      //   // 显示登录注册页面
      // }
    }
    return {
      menu_data,
      is_login,
      check_index,
      search_val,
      toggle,
      onSearch,
      showLoginAndRegister,
      loginAndRegist,
      logOut,
      isLogin
    }
  },
  components: {
    InputSearch,
    LoginAndRegist,
    UserOutlined,
    CommentOutlined,
    BellOutlined,
    EditOutlined,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
  }
}
</script>

<style lang="scss">
a {
  color: inherit;
  text-decoration: none;
}

ol,
ul {
  padding: 0;
  list-style-type: none;
}

.AppHeader {
  position: relative;
  z-index: 100;
  min-width: 1000px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  background-clip: content-box;
  margin-bottom: 10px;
  .AppHeader-inner {
    position: relative;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 0.3s, -webkit-transform 0.3s;

    .input-search {
      width: 470px;
    }

    .AppHeader-userInfo {
      -webkit-box-flex: 1;
      flex: 1 0 auto;
      -webkit-box-pack: end;
      justify-content: flex-end;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
  }

  .AppHeader-logo {
    font-size: 30px;
    font-weight: 900;
  }

  .AppHeader-tabs {
    border-bottom: none;
    display: flex;
    margin: 0 23px;

    .AppHeader-tab {
      padding: 0 17px;

      .AppHeader-tabsLink {
        font-size: 15px;
        color: #8590a6;
      }

      .tabs-link {
        position: relative;
        display: inline-block;
        padding: 14px 0;
        line-height: 22px;
        text-align: center;
      }

      .is-active {
        font-weight: 600;

        &::after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 3px;
          background: #0084ff;
          content: "";
        }
      }

      .is-active,
      .AppHeader-tabsLink:hover {
        color: #444;
      }
    }
  }
}
</style>
