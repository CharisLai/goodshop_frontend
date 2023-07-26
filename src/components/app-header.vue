<template>
    <header class='app-header'>
      <div class="container">
        <h1 class="logo"><RouterLink to="/">GoodShop</RouterLink></h1>
        <AppHeaderNav></AppHeaderNav>
        
        <div class="search">
          <i class="icofont-search-2"></i>
          <input type="text" placeholder="Search...">
        </div>
        <div class="cart">
          <a class="curr" href="#">
            <i class="icofont-shopping-cart"></i><em>2</em>
          </a>
        </div>
      </div>
    </header>
  </template>
  
  <script>
import AppHeaderNav from './app-header-nav.vue'
  export default {
    name: 'AppHeader',
    components: {
      AppHeaderNav
    }
  }
  </script>
 
  <style scoped lang='less'>
@import '@/assets/styles/variables.less';

  .app-header {
    background: #fff;
    .container {
      display: flex;
      align-items: center;
    }
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url(../assets/images/logo.png) no-repeat center 18px / contain;
      }
    }
    
    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }
    .cart {
      width: 50px;
      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;
        .icon-cart{
          font-size: 22px;
        }
        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: @helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
  </style>