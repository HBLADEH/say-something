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
          <a-avatar shape="square" :size="32" style="backgroundColor: #76839B">
            <template v-slot:icon>
              <UserOutlined />
            </template>
          </a-avatar>

        </div>
        <div class="AppHeader-userInfo" v-else>
          <a-button-group>
            <a-button type="primary">
              <UserOutlined /> 登录
            </a-button>
            <a-button>
              <EditOutlined /> 注册
            </a-button>
          </a-button-group>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
// 菜单栏数据 
import menuData from '../assets/resource/navbar'

// 插件
import InputSearch from "ant-design-vue/lib/input/Search";
import { UserOutlined, CommentOutlined, BellOutlined, EditOutlined } from "@ant-design/icons-vue";
export default {
  name: 'NavBar',
  setup() {
    let menu_data = ref(menuData);

    let check_index = ref(0) // 默认
    let search_val = ref("")
    let is_login = ref(false)
    const toggle = (index) => {
      check_index.value = index
    }

    const onSearch = (value) => {
      console.log(value)
    }
    return {
      menu_data,
      is_login,
      check_index,
      search_val,
      toggle,
      onSearch
    }
  },
  components: {
    InputSearch,
    UserOutlined,
    CommentOutlined,
    BellOutlined,
    EditOutlined,
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
