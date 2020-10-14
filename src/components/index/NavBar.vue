<template>
  <div>
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a class="AppHeader-logo" href="#">SSY</a>
        <ul class="AppHeader-tabs">
          <li class="AppHeader-tab">
            <a class="AppHeader-tabsLink tabs-link is-active" href="">首页</a>
          </li>
          <li class="AppHeader-tab">
            <a class="AppHeader-tabsLink tabs-link" href="">发现</a>
          </li>
          <li class="AppHeader-tab">
            <a class="AppHeader-tabsLink tabs-link" href="">占位</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
import { ref } from 'vue';
import menuData from '../../assets/resource/navbar'
export default {
  setup() {
    let menu_data = ref(menuData)
    return {
      menu_data
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
  }

  .AppHeader-logo {
    font-size: x-large;
  }

  .AppHeader-tabs {
    border-bottom: none;
    display: flex;
    margin: 0 23px;

    .AppHeader-tab {
      padding: 0 17px;

      .AppHeader-tabsLink {
        font-size: 15px;
      }
      .tabs-link {
        position: relative;
        display: inline-block;
        padding: 14px 0;
        line-height: 22px;
        text-align: center;
      }
    }
  }
}
</style>