import React, {useState} from 'react'

import "./MovieCard.css"
import Modal from "react-modal";
import ReactDOM from "react-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: '583px',
height: '474px',
  },
};
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.7)";

export default function MovieCard(props) {
  
const {title,  id,  poster_path, vote_average, modalIsOpen, closeModal, findMovieById,} = props
  
  
 
 

 
  
  
  
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
        <span>{vote_average}</span>
        <p>{title}</p>
      </div>

      <Modal
        
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-header">
          
          <h4 id='modal-movie-title'>{props.oneMovie.title}</h4>
          <img
            style={{ cursor:'pointer', border: "1px solid black", padding: "5px" }}
            onClick={closeModal}
            width="15"
            height="15"
            src="/cancel.png"
            alt=""
          />
        </div>
        <div className="modal-body">
          <img
            src={`https://image.tmdb.org/t/p/w300${props.oneMovie.poster_path}`}
            alt=""
          />

          <div className="modal-info">
            <p>
              <b>Release date:</b> {props.oneMovie.release_date}
            </p>
            <p>{props.oneMovie.overview}</p>
            <p>
              <b>{props.oneMovie.vote_average}</b> / 10 (
              {props.oneMovie.vote_count} total votes)
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
