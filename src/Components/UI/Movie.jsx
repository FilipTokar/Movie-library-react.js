import React from "react";
import { Link } from "react-router-dom";

function Movie({ img, title, year, movieID }) {
  return (
      <Link className="movie" to={`/movies/movie/${movieID}`}>
        <div className="movie-card">
          <div className="movie-card__container">
            <figure className="movie__img--container">
              <img className="movie__img" src={img} alt="" />
            </figure>
            <p className="movie__para">
              <b>Title:</b> {title}
            </p>
            <p className="movie__para">
              <b>Year:</b> {year}
            </p>
          </div>
        </div>
      </Link>
    
  );
}

export default Movie;
