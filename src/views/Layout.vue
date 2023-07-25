<template>
  <!-- top -->
    <nav></nav>

    <!-- header -->
    <header></header>
<!-- main -->
    <main>
      <!-- second route -->
      <div class="container">
      <router-view></router-view>
    </div>
    
    </main>

    <!-- footer -->
    <footer></footer>
  </template>
  
  <script>
  export default {
    name: 'xtx-layout'
  }
  </script>
  
  <style scoped lang='less'></style>