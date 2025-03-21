import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section className="search-section">
      <h1>Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          placeholder="search for images"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
