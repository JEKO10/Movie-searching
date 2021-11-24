import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { query, setQuery, data } = useGlobalContext();

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {data.Response && <div className="error">{data.Error}</div>}
    </form>
  );
};

export default SearchForm;
