export default {
  getMovieData(state, data) {
    // console.log("data")
    // console.log(data);
    // state.loading = false;
    return state.movies = data.data.subjects
  },
  getMovieTop250(state, data) {
    return state.movieTop250 = data.data.subjects
  }
}
