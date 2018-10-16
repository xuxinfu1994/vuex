<template>
<div>
   <header :style="{background: background}">
      <div class="header-left">
          <div class="header-logo">
            <a href="">
              <img src="https://www.imooc.com/static/img/index/logo.png" alt="">
            </a>
          </div>
          <div>
            <ul class="header-nav">
              <li>
                <a href="">免费课程</a>
              </li>
              <li>
                <a href="">职业路径</a>
              </li>
              <li>
                <a href="">实战</a>
              </li>
              <li>
                <a href="">猿问</a>
              </li>
              <li>
                <a href="">手记</a>
              </li>
            </ul>
          </div>
          <div class="input_search">
            <input type="text" class="search_input">
          </div>
      </div>
      <div class="header-right">

      </div>
    </header>
  </div>
</template>
<script>
  export default {
    props: ['background']
  }
</script>
<style>

  header{
    width: 906px;
    margin: 0 auto;
    border: 1px solid red;
    height: 72px;
  }
  .header-left{
    display: flex;
  }
  .header-nav {
    display: flex;
  }
  .header-nav a{
    display: inline-block;
    height: 72px;
    line-height: 72px;
  }
  .input_search{
    padding-top: 20px;
  }
</style>
