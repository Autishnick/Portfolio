import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        id="input-search"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        style={{ padding: "8px", marginRight: "8px", flex: 1 }}
      />
      <button
        className="searchBtn"
        onClick={handleSearch}
        id="myBtn"
        style={{ padding: "8px 16px" }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
