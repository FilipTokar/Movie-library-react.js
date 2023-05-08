import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import axios from "axios";
import Search from "../Components/Search";
import { useNavigate, useParams } from "react-router-dom";
import NoResults from "../Components/NoResults";

function Movies() {
  const { movie } = useParams();
  const navigate = useNavigate()
  const [movieData, setMovieData] = useState([]);
  const [userInput, setUserInput] = useState(movie);
  const [loading, setLoading] = useState();


  useEffect(() => {
    userInput !== undefined && getMovies(userInput);
  }, []);

  async function getMovies(searchQuery) {
    setLoading(true);
    const {
      data: { Search },
    } = await axios.get(
      `https://www.omdbapi.com/?apikey=56cb40ec&s=${searchQuery}`
    );
    setMovieData(Search);
    setLoading(false);
    navigate(`/movies/${searchQuery}`)
  }

  function handleInputChange(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  function handleSearch() {
    getMovies(userInput);
  }

  return (
    <div>
      <div className="landing__overlay">
        <Nav />
        <Header onSearch={handleSearch} onInputChange={handleInputChange} />
      </div>
      {
        movieData.length === 0 ? (<NoResults/>) : (<Search movieData={movieData} userInput={userInput} loading={loading} />)
      }
      
    </div>
  );
}

export default Movies;
