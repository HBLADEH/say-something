<template>
  <a-card title="这是一个标题" :bordered="false" style="width: 690px;margin-bottom: 10px;">
    <p>内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
    <span style="margin-right: 20px;">
      <button style="margin-right: 5px;">
        <LikeOutlined />&nbsp;100
      </button>
      <button>
        <DislikeOutlined />&nbsp;10
      </button>
    </span>
    <span class="IndexList-actionFooter">
      <a href="#">
        <MessageOutlined />&nbsp;300&nbsp;条评论
      </a>
    </span>
    <span class="IndexList-actionFooter">
      <a href="#">
        <ShareAltOutlined />&nbsp;分享
      </a>
    </span>
    <!-- <span class="IndexList-actionFooter">
      <MessageOutlined />&nbsp;收藏
    </span> -->
    <span class="IndexList-actionFooter">
      <a href="#">
        <StarOutlined />&nbsp;收藏
      </a>
    </span>
    <span class="IndexList-createTime">
      <ClockCircleOutlined />&nbsp;2020-02-13
    </span>
  </a-card>
</template>
<script>
import { MessageOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined, ShareAltOutlined, StarOutlined } from "@ant-design/icons-vue";
export default {
  name: 'ListItem',
  components: {
    MessageOutlined,
    ClockCircleOutlined,
    LikeOutlined,
    DislikeOutlined,
    ShareAltOutlined,
    StarOutlined
  }
}
</script>

<style lang="scss">
.ant-card {
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
}
</style>