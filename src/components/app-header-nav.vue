<template>
    <ul class="app-header-nav">
      <li class="home"><RouterLink to="/">Home</RouterLink></li>
      <li><a href="#">Food</a>
        <div class="layer">
        <ul>
          <li v-for="i in 5" :key="i">
            <a href="#">
              <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(4).png" alt="">
              <p>Fruit</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
      <li><a href="#">Kitchen</a></li>
      <li><a href="#">Art</a></li>
      <li><a href="#">HomeApp</a></li>
      <li><a href="#">Clear</a></li>
      <li><a href="#">Body</a></li>
      <li><a href="#">Clothing</a></li>
      <li><a href="#">Other</a></li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'AppHeaderNav'
  }
  </script>
  
  <style scoped lang='less'>
  @import '@/assets/styles/variables.less';
  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    > li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      > a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
      }
      &:hover {  
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // 顯示2級分類
      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
  .layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
  </style>