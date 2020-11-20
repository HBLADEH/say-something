<template>
  <a-card title="这是一个标题" :bordered="false" style="width: 690px;margin-bottom: 10px;">
    <p>内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
    <span style="margin-right: 20px;">
      <a-button-group>
        <a-button :type="isLike ? 'primary': 'default'" @click="doLikeOrDisLike('like')">
          <LikeOutlined />&nbsp;{{itemData.like}}
        </a-button>
        <a-button :type="isDisLike ? 'danger': 'default'" @click="doLikeOrDisLike('dislike')">
          <DislikeOutlined />&nbsp;{{itemData.disLike}}
        </a-button>
      </a-button-group>

    </span>
    <span class="IndexList-actionFooter">
      <a href="javascript:;" @click="showComment = !showComment">
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
    <transition name="fade">
      <Comment v-if="showComment" />
    </transition>
  </a-card>
</template>
<script>
import { ref, reactive } from "vue"
import { MessageOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined, ShareAltOutlined, StarOutlined } from "@ant-design/icons-vue";
import Comment from '../util/Comment'
export default {
  name: 'ListItem',

  setup() {

    let isLike = ref(false)
    let isDisLike = ref(false)
    let showComment = ref(false)
    const itemData = reactive({
      like: 10,
      disLike: 10
    })

    const doLikeOrDisLike = (likeType) => {
      // console.log(likeType);
      if (likeType == 'like') {
        isLike.value = !isLike.value
        if (isDisLike.value) {
          isDisLike.value = false
          itemData.disLike--;
        }
        if (isLike.value) {
          itemData.like++;
        } else {
          itemData.like--;
        }
      } else if (likeType == 'dislike') {
        isDisLike.value = !isDisLike.value
        if (isLike.value) {
          isLike.value = false
          itemData.like--;
        }
        if (isDisLike.value) {
          itemData.disLike++;
        } else {
          itemData.disLike--;
        }
      }
    }
    return {
      itemData,
      isLike,
      isDisLike,
      doLikeOrDisLike,
      showComment
    }
  },
  components: {
    MessageOutlined,
    ClockCircleOutlined,
    LikeOutlined,
    DislikeOutlined,
    ShareAltOutlined,
    StarOutlined,
    Comment
  }
}
</script>

<style lang="scss">
.ant-card {
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
}
// .ant-card-body {
//   padding-bottom: 10px !important;
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>