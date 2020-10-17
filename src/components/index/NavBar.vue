<template>
  <div>
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a class="AppHeader-logo" href="#">SSY</a>
        <ul class="AppHeader-tabs">
          <li class="AppHeader-tab" v-for="(menuItem, index) in menu_data" :key="menuItem.name" @click="toggle(index)">
            <a class="AppHeader-tabsLink tabs-link" :class="{'is-active': index == check_index}" href="#">{{menuItem.title}}</a>
          </li>
        </ul>
        <a-input class="input-search" v-model:value="search_val" placeholder="Basic usage" />
      </div>

    </header>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
import menuData from '../../assets/resource/navbar'
export default {
  setup() {
    let menu_data = ref(menuData);

    let check_index = ref(0) // 默认
    let search_val = ref("")
    const toggle = (index) => {
      check_index.value = index
    }
    return {
      menu_data,
      check_index,
      search_val,
      toggle
    }
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
      width: 326px;
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
