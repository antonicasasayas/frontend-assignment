import axios from 'axios'

async function getMovies() {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=7315ec59ea2264da1fa4f4eb8d647853&language=en-US&page=1/`
  );

  let results = res.data.results;
  return results
}

export {getMovies}
