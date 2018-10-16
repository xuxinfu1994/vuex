<template>
  <div>
    <li class="movie-item" >
      <a :href="movie.alt">
        <img :src="movie.images.small" alt="">
        <span class="movie-tag">2DIMAX</span>
        <div class="movie-meta">
          <span>{{movie.title}}</span>
          <span class="movie-score">{{movie.rating.average}}</span>
        </div>
      </a>
    </li>
  </div>
</template>
<script>
  export default {
    props: ['movie']
  }
</script>
<style>

img{
  width: 100%;
  max-width: 100%;
  width: 160px;
  height: 220px;
}
ul{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.movie-list {
  width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.movie-list li{
  width: 160px;
  height: 220px;
  margin-bottom: 20px;
}
.movie-item {
  position: relative;
}
.movie-tag{
  position: absolute;
  top: 4px;
  left: -2px;
  font-size: 12px;
  color: #fff;
  background: #0080ff;
  padding: 5px;
  font-weight: 600;
}
.movie-meta{
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
}
.movie-meta span{
  color: #fff;
}
.movie-score{
  color: #ffb400;
  font-size: 18px;
}
</style>
