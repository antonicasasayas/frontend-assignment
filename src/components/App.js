import { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { getMovies } from "../Api";
import MovieCard from "./MovieCard";
import './App.css'
import SearchBar from "./SearchBar";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "583px",
    height: "474px",
  },
};
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.7)";

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
              <MovieCard
                findMovieById={(id) => findMovieById(id)}
                closeModal={closeModal}
                oneMovie={oneMovie}
                modalIsOpen={modalIsOpen}
                {...movie}
              />
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-header">
          <h4 id="modal-movie-title">{oneMovie.title}</h4>
          <img
            style={{
              cursor: "pointer",
              border: "1px solid black",
              padding: "5px",
            }}
            onClick={closeModal}
            width="15"
            height="15"
            src="/cancel.png"
            alt=""
          />
        </div>
        <div className="modal-body">
          <img
            src={`https://image.tmdb.org/t/p/w300${oneMovie.poster_path}`}
            alt=""
          />

          <div className="modal-info">
            <p>
              <b>Release date:</b> {oneMovie.release_date}
            </p>
            <p>{oneMovie.overview}</p>
            <p>
              <b>{oneMovie.vote_average}</b> / 10 (
              {oneMovie.vote_count} total votes)
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
