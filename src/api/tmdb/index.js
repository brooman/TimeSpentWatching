const tmdb = {
  image: (path) => {
    return process.env.REACT_APP_TMDB_IMAGE_PATH + path
  },
}

export default tmdb;