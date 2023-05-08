import React from 'react'

function MovieCardSkeleton({img, title, rating, released, runtime, actors, plot}) {
  return (
    <div className="movie-card">
      <figure className="movie-img__container">
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="movie-info__description">
        <h2 className="movie-info__title">{title}</h2>
        <p className="movie-info__rating">{rating}</p>
        <div className="movie-info__plot">
          <h3 className="movie-info__summary--title">Summary</h3>
          <div className="movie-info__summary--data">
            <p className="movie-info__summary--para">Released: {released}</p>
            <p className="movie-info__summary--para">Runtime: {runtime}</p>
            <p className="movie-info__summary--para">
              Actors: {actors}{" "}
            </p>
          </div>

          <p className="movie-info__summary--para">
            Plot: {plot}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCardSkeleton
