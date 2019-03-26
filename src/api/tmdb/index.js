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
  calculateTotalRunTime: (shows) => {
    
    const runtimes = shows.map(item => (item.number_of_episodes * item.episode_run_time[0]))
    
    const filteredRuntimes = runtimes.filter((item) => !isNaN(item))
    
    if(filteredRuntimes.length === 0) return 0;
    
    return filteredRuntimes.reduce((acc, cur) => acc + cur)
  }
}

export default tmdb;

