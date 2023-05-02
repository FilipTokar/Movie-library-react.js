import React from 'react'

function Movie() {
  return (
    <div className="movie">
        <div className="movie-card">
            <div className="movie-card__container">
                <figure className="movie__img--container">
                    <img className="movie__img" src="" alt=""/>
                </figure>
                <p className="movie__para"><b>Title:</b> movie.Title</p>
                <p className="movie__para"><b>Year:</b> movie.Year</p>
            </div>
        </div>
    </div>
  )
}

export default Movie
