<template>
  <li>
    <a href="">
      <img class="course-poster" :src="course.poster" />
      <p class="course-name">{{course.name}}</p>
      <p class="course-price">¥{{course.price}}</p>
    </a>
  </li>
</template>
<script>
  export default {
    props: ['course']
  }
</script>
<style>


  .course-list li{
    width: 18%;
  }
  .course-poster{
    width: 216px;
    height: 120px;
    border-radius: 8px;
  }
  .course-name{
    font-size: 16px;
      color: #07111B;
      line-height: 24px;
  }
  .course-price{
    font-size: 12px;
    color: #4D555D;
    line-height: 20px;
  }
</style>
