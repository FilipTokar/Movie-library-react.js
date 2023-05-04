import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {

  return (
      <Link className="movie" to={`/movies/movie/${movie.imdbID}`}>
        <div className="movie-card">
          <div className="movie-card__container">
            <figure className="movie__img--container">
              <img className="movie__img" src={movie.Poster} alt="" />
            </figure>
            <p className="movie__para">
              <b>Title:</b> {movie.Title}
            </p>
            <p className="movie__para">
              <b>Year:</b> {movie.Year}
            </p>
          </div>
        </div>
      </Link>
    
  );
}

export default Movie;
