import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Header({ onSearch, onInputChange }) {

  return (
    <>
      <div className="header__container">
        <h1 className="header__title">Browse our movies</h1>
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Type a movie related keyword "
            onChange={onInputChange}
            onKeyUp={(event) => event.key === "Enter" && onSearch()}
          />
          <Button disableRipple className="search__button" onClick={onSearch}>
            <SearchIcon className="search__icon" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
