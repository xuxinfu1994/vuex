<template>

  <div id="app1">

      <button @click="fetchMovie">点击获取最新电影</button>
      <button @click="fetchMovieItem">点击单个获取</button>
      <h1>最新电影</h1>
      <ul>
        <li v-for="movie in movies">{{movie.title}}</li>
      </ul>
      <h1>最新电影前250名</h1>
      <ul>
        <li v-for="movie in movieTop250">{{movie.title}}</li>
      </ul>

      <div>
        <h1>非vuex</h1>
        <button @click="getLastestMovie">获取最新电影</button>
        <ul>
            <li v-for="movie in vuex_movies" :key="movie.id">{{movie.title}}</li>
        </ul>
      </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Vue from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      vuex_movies: [],
    }
  },
  computed: {
    ...mapState(['movies', 'movieTop250'])
  },
  methods:{
    ...mapActions(['fetchMovies', 'getMovieTop250']),
    fetchMovie() {
      // this.getMovies();
      this.fetchMovies();
    },
    fetchMovieItem() {
      this.getMovieTop250();
    },
    getLastestMovie() {
      axios.get('http://api.douban.com/v2/movie/top250').then(data => {
        console.log('获取最新电影')
        console.log(data.data.subjects);
        this.vuex_movies = data.data.subjects;
      })
    }
  },
  components: {

  },
  mounted(){
    // axios.get('http://api.douban.com/v2/movie/in_theaters').then(data => {

    //   this.movies = data.data.subjects;
    //   this.loaded = true;
    // });

    // axios.get('http://api.douban.com/v2/movie/coming_soon').then(data => {

    //   this.movies_soon = data.data.subjects;
    //   this.loaded_soon = true;
    // })
  },
  watch: {
    username(phone) {
      if( phone.length > 11) {
        alert('大与11位了')
      }
    },
    email(mail) {
      if ((/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/).test(mail) ) {
        alert('邮箱合法')
      }else{
        alert('邮箱非法')
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.star{
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(http://s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png);
  background-size: contain;
}

.box{
  width: 200px;
  height: 200px;
  border: 1px solid red;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -100px;
  margin-left: -100px;
}

.boxs{
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
.box1{
  background: red;
}
.box2{
  background: black;
}
.hide{
  display: none;
}
</style>
