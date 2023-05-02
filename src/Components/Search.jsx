import React from 'react'
import Movie from './UI/Movie'

function Search() {
  return (
    <section className='search'>
       <div className="container">
            <div className="row">
                <div className="search__container">
                    <h1 className="search__title">Search results</h1>
                </div>
                <div className="movies-list">
                  <Movie/>
                  <Movie/>
                  <Movie/>
                  <Movie/>
                  <Movie/>
                  <Movie/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search
