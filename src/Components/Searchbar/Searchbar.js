import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");
  const handleValueChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchValue.trim() === "") {
      toast.error("Enter image name, please");
      return;
    }
    onSubmit(searchValue, 1);
    setSearchValue("");
  };

  return (
    <header className="Searchbar" onSubmit={handleSubmit}>
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          name="searchValue"
          value={searchValue}
          onChange={handleValueChange}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
