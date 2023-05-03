import React from "react";
import LibraryLogo from "../assets/favpng_movie-logo.png"
import { Link } from "react-router-dom";
import Movies from "../Pages/Movies";

function Nav({blue}) {
  return (
    <nav>
      <div className={`nav__container ${blue && " nav__container--blue"}`}>
        <Link to="/">
        <figure>
          <img className="logo" src={LibraryLogo} alt="" />
        </figure>
        </Link>
        
        <ul className="nav__link--list">
          <li className="nav__link">
          <Link to="/" className="nav__link--anchor link__hover-effect">
            Home
          </Link>
            
          </li>
          <li className="nav__link">
          <Link to="/movies" className="nav__link--anchor link__hover-effect">
            Browse
          </Link>
          </li>
          <li className="nav__link">
            <Link to="#" className="nav__link--btn no-click">
              Contact
            </Link>  
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
