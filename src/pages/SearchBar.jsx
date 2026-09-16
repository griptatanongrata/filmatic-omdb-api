import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Search for movies..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
