import React, {useState} from 'react'

import "./MovieCard.css"





export default function MovieCard(props) {
  
const {title,  id,  poster_path, vote_average,  findMovieById,} = props
  
  return (
    <div>
      <div
        onClick={(e) => findMovieById(e.target.alt)}
        className="movie-card"
        key={id}
      >
        <img
          height="302"
          width="282"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={id}
        />
        <span>
          <b>{vote_average}</b>
        </span>
       
        <h4>{title}</h4>
      </div>
    </div>
  );
}
