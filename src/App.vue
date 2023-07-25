<template>
<RouterView></RouterView>
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