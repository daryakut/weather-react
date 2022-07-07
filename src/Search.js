import React, { useState } from "react";

export default function Search(props) {
  const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    if (query.length > 0) {
      props.onCitySearch(query);
    } else {
      alert("Enter a city");
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Type a query"
        onChange={updateQuery}
        value={query}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
