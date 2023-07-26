<template>
<AppTopNav></AppTopNav>
  <!-- top -->
    <!-- header -->
<AppHeard></AppHeard>
<!-- main -->
<main>
<!-- second route -->
<div class="container">

</div>

</main>

<!-- footer -->
<AppFooter></AppFooter>
  </template>
  
  <script>
  import AppTopNav from '@/components/app-navbar.vue'
  import AppHeard from '@/components/app-header.vue'
  import AppFooter from '@/components/app-footer.vue'
  export default {
    name: 'Layout',
    components: { AppTopNav, AppHeard, AppFooter }
  }
  </script>
  
  <style scoped lang='less'>
.app-body {
min-height: 600px;
}
</style>