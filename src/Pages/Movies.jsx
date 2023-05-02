import React, { useState } from "react";
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import axios from "axios";

import Search from "../Components/Search";

function Movies() {
  const [movieData, setMovieData] = useState([])
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState()

  async function getMovies(searchQuery) {
    setLoading(true)
    const {data: {Search}} = await axios.get(`https://www.omdbapi.com/?apikey=56cb40ec&s=${searchQuery}`)
    setMovieData(Search)
    setLoading(false)
    console.log(Search)
  }

  // this function is loging value on each letter from onchange event listener in Header. FIX IT!
  function handleInputChange(event) {
      event.preventDefault()
      setUserInput(event.target.value);
    }

  function handleSearch() {
    getMovies(userInput)
    console.log(userInput)
  }

  

  return (
    <div>
      <div className="landing__overlay">
        <Nav/>
        <Header onSearch={handleSearch} onInputChange={handleInputChange}/>
      </div>
      <Search movieData={movieData} userInput={userInput} loading={loading}/>
    </div>
  );
}

export default Movies;
