<template v-if="profile.token">
  <nav class="apptopnav">
    <div class="container">
      <ul>
        <li><a href=""><i class="iconfont icon-user"></i>周杰伦</a></li>
        <li><a href="">Logout</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">Signup</a></li>
        <li><a href="">購物車</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'apptopnav',
  setup () {
      // 取得user後才能切換
      const store = useStore()
      const profile = computed(() => {
        return store.state.user.profile
      })
      return { profile }
  }
})
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';
.apptopnav {
  background: #333;
  ul {
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
      li {
          a {
              padding: 0 15px;
              color: #cdcdcd;
              line-height: 1;
              display: inline-block;
              i {
                  font-size: 14px;
                  margin-right: 2px;
              }
              &:hover {
                  color: @xtxColor;
              }
          }
          ~ li {
              a {
                  border-left: 2px solid #666;
              }
          }
      }
  }
}
</style>
