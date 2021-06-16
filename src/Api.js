import axios from "axios";

async function getMovies() {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1/`
  );

  let results = res.data.results;
  return results;
}

export { getMovies };
