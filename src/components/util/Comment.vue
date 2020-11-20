<template>
  <div>
    <a-comment>
      <template #actions>
        <span key="comment-basic-like">
          <a-tooltip title="like">
            <template v-if="action === 'liked'">
              <LikeFilled @click="like" />
            </template>
            <template v-else>
              <LikeOutlined @click="like" />
            </template>
          </a-tooltip>
          <span style="padding-left: 8px; cursor: auto;">
            {{likes}}
          </span>
        </span>
        <span key="comment-basic-dislike">
          <a-tooltip title="dislike">
            <template v-if="action === 'dislike'">
              <DislikeFilled @click="dislike" />
            </template>
            <template v-else>
              <DislikeOutlined @click="dislike" />
            </template>
          </a-tooltip>
          <span style="padding-left: 8px; cursor: auto;">
            {{dislikes}}
          </span>
        </span>
        <span key="comment-basic-reply-to">
          回复
        </span>
      </template>
      <template #author><a>BLADE</a></template>
      <template #avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="BLADE" />
      </template>
      <template #content>
        <p>
          测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
        </p>
      </template>
      <template #datetime>
        <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
          <span>{{moment().fromNow()}}</span>
        </a-tooltip>
      </template>
    </a-comment>
  </div>
</template>
<script>
import { ref } from "vue"
import moment from 'moment'
import { Comment, Tooltip, Avatar } from 'ant-design-vue'
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
export default {
  name: "Comment",
  setup() {

    let likes = ref(10)
    let dislikes = ref(10)
    let action = ref(null)

    const like = () => {
      likes.value++
      if (dislikes.value > 0) {
        dislikes.value--
      }
      action.value = 'liked'
    }
    const dislike = () => {
      dislikes.value++
      if (likes.value > 0) {
        likes.value--
      }
      action.value = 'dislike'
    }
    return {
      likes,
      dislikes,
      action,
      moment,
      like,
      dislike
    }
  },
  components: {
    AComment: Comment,
    ATooltip: Tooltip,
    AAvatar: Avatar,
    LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined
  }
}
</script>