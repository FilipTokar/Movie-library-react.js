import React, { useState } from "react";
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeImg from "../assets/undraw_movie_night_re_9umk.svg";

function Home() {
  const [url, setUrl] = useState();
  const navigate = useNavigate();

  function changeQuery(event) {
    setUrl(event.target.value);
  }

  function changePages() {
    navigate(`/movies/${url}`);
  }

  return (
    <div className="home">
      <Nav blue />
      <div className="header__container--home">
        <h1 className="header__title--home">
          Europe's most awarded movie searching platform.
        </h1>
        <h2 className="header__subtitle--home">
          Find your movie with <span className="movie-match">MovieMatch.</span>
        </h2>
        <div className="input__wrapper-home">
          <input
            type="text"
            placeholder="Type a movie related keyword "
            value={url}
            onChange={changeQuery}
            onKeyUp={(event) => event.key === "Enter" && changePages()}
          />
          <Button
            disableRipple
            className="search__button"
            onClick={changePages}
            
          >
            <SearchIcon className="search__icon" />
          </Button>
        </div>
        <img className="home-img" src={HomeImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
