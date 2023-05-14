import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MovieCard from "../Components/UI/MovieCard";
import axios from "axios";
import MovieCardSkeleton from "../Components/UI/MovieCardSkeleton";
import { Button, Skeleton } from "@mui/material";

function MovieInfo() {
  const [movieInfoData, setMovieInfoData] = useState();
  const [loading, setLoading] = useState();
  const { movieID } = useParams();
  const navigate = useNavigate()

  async function getMovieInfo(movieCode) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=56cb40ec&i=${movieCode}`
    );
    console.log(data);
    setMovieInfoData(data);
    setLoading(false);
  }

  useEffect(() => {
    getMovieInfo(movieID);
  }, []);

  function goBack () {
    navigate.length >= 1 ? navigate(-1) : navigate('/movies')
  }

  return (
    <div>
      <Nav blue />
      <div className="container">
        <div className="row">
          <div className="movie-card__top">
            <Button onClick={goBack} className="movie-card__button--back">
              <ArrowBackIcon />
            Browse
            </Button>
          </div>
          {loading ? (
            <MovieCardSkeleton
              title={<Skeleton variant="rectangular" width="100%" />}
              rating={<Skeleton variant="rectangular" width="100%" />}
              released={<Skeleton variant="rectangular" width="100%" />}
              runtime={<Skeleton variant="rectangular" width="100%" />}
              actors={<Skeleton variant="rectangular" width="100%" />}
              plot={<Skeleton variant="rectangular" width="100%" />}
            />
          ) : (
            <MovieCard movieInfoData={movieInfoData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
