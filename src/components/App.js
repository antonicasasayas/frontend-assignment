import { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { getMovies } from "../Api";
import MovieCard from "./MovieCard";
import './App.css'
import SearchBar from "./SearchBar";
const App = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    getMovies()
    .then(result => setMovies(result))
    
  },[])

  
  const handleChange = (e) => {
    const {value} = e.target
    setQuery(value)
    handleSearch()
  }

  const handleSearch = () => {
    if (query.length) {
      setMovies(movies.filter(el => el.title.includes(query)))
    } else {
      setMovies(movies)
    }
  }
  console.log(movies);

  return (
    <div >
      <div className="header">
        <img src={logo} alt="Timescale" />
        <SearchBar query={query} handleChange={(e) => handleChange(e)}  />
      </div>
      <hr />
      <h1>Most recent movies</h1>
      <div className="movies-container">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard  {...movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
