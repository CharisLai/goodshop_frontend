<template>
<div class="container">
App <button @click="fn">request tool</button>

  <button @click="$store.commit('user/setUser',{account:'zhousg'})">Set User Info</button>
</div>

</template>

<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
const fn = () => {
  request('/member/profile', 'get', {a: 10})
}
return { fn }
  }
}
</script>