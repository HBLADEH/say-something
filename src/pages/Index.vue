<template>
  <div class="IndexList-container">
    <a-card title="这是一个标题" :bordered="false" style="width: 600px">
      <p>内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>

      <span>
        <LikeOutlined />&nbsp;100
        &nbsp;
        <DislikeOutlined />&nbsp;10

      </span>

      <span class="IndexList-actionFooter">
        <MessageOutlined />&nbsp;300&nbsp;条评论
      </span>
      <span class="IndexList-actionFooter">
        <MessageOutlined />&nbsp;分享
      </span>
      <span class="IndexList-actionFooter">
        <MessageOutlined />&nbsp;收藏
      </span>
      <span class="IndexList-actionFooter">
        <MessageOutlined />&nbsp;收藏
      </span>
      <span class="IndexList-createTime">
        <ClockCircleOutlined />&nbsp;2020-02-13
      </span>

    </a-card>
  </div>
</template>

<script>
import { MessageOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined } from "@ant-design/icons-vue";
export default {
  name: 'Index',
  components: {
    MessageOutlined,
    ClockCircleOutlined,
    LikeOutlined,
    DislikeOutlined
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

  .IndexList-actionFooter {
    margin-left: 30px;
  }

  .IndexList-createTime {
    float: right;
  }
}
</style>