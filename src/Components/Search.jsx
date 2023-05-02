import React from 'react'
import Movie from './UI/Movie'

function Search({movieData, userInput}) {
  return (
    <section className='search'>
       <div className="container">
            <div className="row">
                <div className="search__container">
                    <h1 className="search__title">Search results for:<span className="search__title--black">{' '}{userInput}</span></h1>
                </div>
                <div className="movies-list">
                  {
                    movieData
                    .slice(0,6)
                    .map((movie) => (
                      <Movie key={movie.imbdID} img={movie.Poster} title={movie.Title} year={movie.Year}  />
                    ))
                  } 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search
