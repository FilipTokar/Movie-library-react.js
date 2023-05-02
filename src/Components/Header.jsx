import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Header({ onSearch }) {
  const [userInput, setUserInput] = useState("");

  function changeInput(event) {
    setUserInput(event.target.value);
  }

  function sendInput() {
    onSearch(userInput);
    console.log(userInput);
  }

  return (
    <>
      <div className="header__container">
        <h1 className="header__title">Browse our movies</h1>
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Type a movie related keyword "
            value={userInput}
            onChange={changeInput}
            onKeyUp={(event) => event.key === "Enter" && sendInput()}
          />
          <Button disableRipple className="search__button" onClick={sendInput}>
            <SearchIcon className="search__icon" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
