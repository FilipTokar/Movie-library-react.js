import React from 'react'
import NoResultImg from '../assets/undraw_web_search_re_efla.svg'

function NoResults() {
  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="search__container">
            <img className='no-result__img' src={NoResultImg} alt="" />
            <h1 className="search__title">
              Could not find any matches.
            </h1>
            <h2>Please set a input keyword</h2>
          </div>
        </div>
        </div>
    </section>
  )
}

export default NoResults
