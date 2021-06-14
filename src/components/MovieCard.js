import React from 'react'
import "./MovieCard.css"
export default function MovieCard({title, overview, id, release_date, poster_path, vote_average}) {
    return (
      <div className="movie-card" key={id}>
        <img
                height="302"
                width="282"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="movie-card"
            />
            <span>{vote_average}</span>
            <p>{ title}</p>
        
      </div>
    );
}
