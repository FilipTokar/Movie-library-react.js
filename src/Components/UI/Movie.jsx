import React from 'react'

function Movie({img, title, year}) {
  return (
    <div className="movie">
        <div className="movie-card">
            <div className="movie-card__container">
                <figure className="movie__img--container">
                    <img className="movie__img" src={img} alt=""/>
                </figure>
                <p className="movie__para"><b>Title:</b> {title}</p>
                <p className="movie__para"><b>Year:</b> {year}</p>
            </div>
        </div>
    </div>
  )
}

export default Movie
