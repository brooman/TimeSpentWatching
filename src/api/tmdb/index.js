const tmdb = {
  image: (path) => {
    return process.env.REACT_APP_TMDB_IMAGE_PATH + path
  },
  searchByName: (query) => {
    const url = `https://api.themoviedb.org/3/search/tv`;
    const queryString = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    return fetch(url + queryString).then(res => res.json())
  },
  getShowById: (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}` 
    const queryString = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  
    return fetch(url + queryString).then(res => res.json())
  },
  calculateTotalRunTime: (show) => {
    return show.number_of_episodes * show.episode_run_time[0]
  }
}

export default tmdb;