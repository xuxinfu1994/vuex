import axios from 'axios'

export default {
  async fetchMovies({commit}) {
    let url = 'http://api.douban.com/v2/movie/in_theaters'
    let data = await axios.get(url)

    commit('fetchMovies', data)

  }
}

// export default {
//   fetchMovies({commit}) {
//     request('http://api.douban.com/v2/movie/in_theaters').then(data => {
//       commit('fetchMovies', data)
//     })
//   }
// }

// function request(url) {
//   return new Promise((resolve, reject) => {
//     return axios.get(url).then(data => {
//       resolve(data)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }
