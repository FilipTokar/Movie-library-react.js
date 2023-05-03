import React from "react";
import LibraryLogo from "../assets/favpng_movie-logo.png"

function Nav({blue}) {
  return (
    <nav>
      <div className={`nav__container ${blue && " nav__container--blue"}`}>
        <figure>
          <img className="logo" src={LibraryLogo} alt="" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a href="/" className="nav__link--anchor link__hover-effect no-click ">
                Home
            </a>
            
          </li>
          <li className="nav__link">
          <a href="/" className="nav__link--anchor link__hover-effect no-click ">
                Browse
            </a>
            
          </li>
          <li className="nav__link">
          <a href="/" className="nav__link--btn no-click">
                Contact
            </a>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
