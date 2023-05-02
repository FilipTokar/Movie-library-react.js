import React from 'react'

function CustomSkeleton({img, title, year}) {
  return (
    <div className="movie">
        <div className="movie-card">
            <div className="movie-card__container">
                <figure className="movie__img--container">
                      {img}
                </figure>
                <p className="movie__para"><b>Title:</b> {title}</p>
                <p className="movie__para"><b>Year:</b> {year}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomSkeleton
