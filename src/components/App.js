import { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { getMovies } from "../Api";
import MovieCard from "./MovieCard";
import './App.css'
import SearchBar from "./SearchBar";


const App = () => {
 
  const [movies, setMovies] = useState([])
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [query, setQuery] = useState("")
  const [oneMovie, setOneMovie] = useState({
    title: ''
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    getMovies()
      .then(result => {
        setMovies(result)
    setDisplayedMovies(result)
      })
  },[])
  
  const handleChange = (e) => {
    const {value} = e.target
    setQuery(value)
   
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  const findMovieById = (id) => {
    console.log(id)
    setOneMovie(displayedMovies.find((movie) => movie.id == id));
    setIsOpen(true);
    
  }
  
  useEffect(() => {
    handleSearch();
  },[query])
  
  const handleSearch = () => {
    if (query !== "") {
      setDisplayedMovies(displayedMovies.filter(el => el.title.toLowerCase().includes(query.toLowerCase())))
    } else {
      setDisplayedMovies(movies)
    }
  }
  
  return (
    
      <div>
        <div className="header">
          <img src={logo} alt="Timescale" />
          <SearchBar query={query} handleChange={(e) => handleChange(e)} />
        </div>
        <hr />
        <h1>Most recent movies</h1>
        <div className="movies-container">
          {displayedMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieCard  findMovieById={(id) => findMovieById(id)} closeModal={closeModal} oneMovie={oneMovie} modalIsOpen={modalIsOpen} {...movie} />
              </div>
            );
          })}
          
        </div>
      </div>
    
  );
};

export default App;
