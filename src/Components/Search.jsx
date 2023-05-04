import React from "react";
import Movie from "./UI/Movie";
import { Skeleton } from "@mui/material";
import CustomSkeleton from "./UI/CustomSkeleton";

function Search({ movieData, userInput, loading }) {

  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="search__container">
            <h1 className="search__title">
              Search results for:
              <span className="search__title--black"> {userInput}</span>
            </h1>
          </div>
          <div className="movies-list">
            {loading
              ? new Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <CustomSkeleton
                      key={index}
                      img={<Skeleton variant="rounded" width={200} height={300}/>}
                      title={<Skeleton variant="text" />}
                      year={<Skeleton variant="text" />}
                    />
                  ))
              : movieData
                  .slice(0, 6)
                  .map((movie) => (
                    <Movie
                      key={movie.imbdID}
                      movie={movie}
                    />
                  
                  ))
              }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
