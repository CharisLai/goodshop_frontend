<template>
<div class="container">

<p>{{ $store.state.A.username }}</p>
<p>{{ $store.state.B.username }}</p>

  App {{$store.state.user.profile.account}}
  <button @click="$store.commit('user/setUser',{account:'zhousg'})">设置用户信息</button>
  GoodShop</div>

</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {

  }
}
</script>