import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieCard from '../Components/UI/MovieCard';
import axios from 'axios';

function MovieInfo() {
    const [movieInfoData, setMovieInfoData] = useState()
    const [loading, setLoading] = useState()
    const {movieID} = useParams()

    async function getMovieInfo () {
        setLoading(true)
        const {data} = await axios.get("https://www.omdbapi.com/?apikey=56cb40ec&i=tt1905041")
        console.log(data)
        setMovieInfoData(data)
        setLoading(false)
    }

    
    useEffect(() => {
    // getMovieInfo()
    console.log(movieID)
    })

  return (
    <div>
      <Nav blue/>
      <div className="container">
        <div className="row">
            <div className="movie-card__top">
                <Link to="/movies">
                    <ArrowBackIcon/>
                </Link>
                <Link to="/movies">
                    Browse
                </Link>
            </div>
            {/* <MovieCard movieInfoData={movieInfoData}/> */}
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
