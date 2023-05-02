import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import axios from "axios";

import Search from "../Components/Search";

function Movies() {
  const [movieData, setMovieData] = useState([])

  async function getMovies(userInput) {
    const {data: {Search}} = await axios.get(`https://www.omdbapi.com/?apikey=56cb40ec&s=${userInput}`)
    setMovieData(Search)
    console.log(Search)
  }

  useEffect(()=> {
    getMovies()
  }, [])

  return (
    <div>
      <div className="landing__overlay">
        <Nav/>
        <Header onSearch={getMovies}/>
      </div>
      <Search movieData={movieData}/>
    </div>
  );
}

export default Movies;
