<template>
  <div class="IndexList-container">
    <div class="IndexList-main">
      <a-skeleton :loading="loading">
        <div v-for="item in articleMain" :key="item.id">
          <ListItem :articleData="item" />
        </div>
      </a-skeleton>
    </div>
    <div class="Index-rightBar">
      <a-card title="这是一个侧边栏" :bordered="false" style="width: 300px">
        <p>内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
      </a-card>
    </div>
  </div>

</template>

<script>
import { ref } from "vue"
import { Skeleton } from 'ant-design-vue'
import ListItem from '../components/index/ListItem'
import { getArticleMain } from "../api/article"
export default {
  name: 'Index',
  setup() {

    let articleMain = ref([]);

    let loading = ref(false)

    const doArticleMain = async () => {
      const response = await getArticleMain()
      articleMain.value = response.data
    }
    return {
      articleMain,
      doArticleMain,
      loading
    }
  },
  created() {
    this.doArticleMain()
  },
  components: {
    ListItem,
    ASkeleton: Skeleton
  }
}
</script>
<style lang="scss">
.IndexList-container {
  display: flex;
  -webkit-box-align: start;
  align-items: flex-start;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;

  .IndexList-main {
    margin-right: 10px;
  }

  .IndexList-actionFooter {
    margin-left: 30px;
  }

  .IndexList-createTime {
    float: right;
  }
}

.Index-rightBar {
  -webkit-box-flex: 1;
  flex: 1 1;
  font-size: 14px;
}
</style>