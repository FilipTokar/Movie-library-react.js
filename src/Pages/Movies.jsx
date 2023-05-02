import React, { useState } from "react";
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import axios from "axios";

import Search from "../Components/Search";

function Movies() {
  const [movieData, setMovieData] = useState([])
  const [userInput, setUserInput] = useState("");

  async function getMovies(searchQuery) {
    const {data: {Search}} = await axios.get(`https://www.omdbapi.com/?apikey=56cb40ec&s=${searchQuery}`)
    setMovieData(Search)
    console.log(Search)
  }

  function handleInputChange(event) {
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
      <Search movieData={movieData} userInput={userInput}/>
    </div>
  );
}

export default Movies;
