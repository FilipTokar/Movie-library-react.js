import React from "react";

function MovieCard({movieInfoData}) {
  return (
    <div className="movie-card">
      <figure className="movie-img__container">
        <img
          src={movieInfoData?.Poster}
          alt=""
        />
      </figure>
      <div className="movie-info__description">
        <h2 className="movie-info__title">{movieInfoData?.Title}</h2>
        <p className="movie-info__rating">{movieInfoData?.Ratings[0].Value}</p>
        <div className="movie-info__plot">
          <h3 className="movie-info__summary--title">Summary</h3>
          <div className="movie-info__summary--data">
            <p className="movie-info__summary--para">Released: {movieInfoData?.Released}</p>
            <p className="movie-info__summary--para">Runtime: {movieInfoData?.Runtime}</p>
            <p className="movie-info__summary--para">
              Actors: {movieInfoData?.Actors}{" "}
            </p>
          </div>

          <p className="movie-info__summary--para">
            Plot: {movieInfoData?.Plot}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
