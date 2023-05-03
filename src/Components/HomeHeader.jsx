import React from 'react'
import HomeImg from '../assets/undraw_movie_night_re_9umk.svg'
import { Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';

function HomeHeader() {

  return (
    <div>
      <div className="header__container--home">
        <h1 className="header__title--home">Europe's most awarded movie searching platform.</h1>
        <h2 className="header__subtitle--home">Find your movie with <span className='movie-match'>MovieMatch.</span></h2>
        <div className="input__wrapper-home">
          <input
            type="text"
            placeholder="Type a movie related keyword " 
          />
          <Link to="/movies">
          <Button disableRipple className="search__button">
            <SearchIcon className="search__icon" />
          </Button>
          </Link>
          
        </div>
        <img className='home-img' src={HomeImg} alt="" />
      </div>
    </div>
  )
}

export default HomeHeader
