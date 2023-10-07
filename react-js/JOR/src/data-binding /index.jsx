import React from "react";

function SearchFormDataBinding() {
  const [searchTerm, setSearchTerm] = React.useState("cats");

  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <p>Search term: {searchTerm}</p>
      <button onClick={() => setSearchTerm(Math.random())}>Click</button>
    </>
  );
}

export default SearchFormDataBinding;
