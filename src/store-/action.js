import axios from 'axios'

export default {
  getMovies({commit}) {
    axios.get('http://api.douban.com/v2/movie/in_theaters').then(data => {
      console.log("最新电影")
      console.log(data)
      commit('getMovieData', data)
    })
  },
  getMovieTop250({commit}) {
    axios.get('http://api.douban.com//v2/movie/top250').then(data => {

      commit('getMovieTop250', data)
    })
  }
}
