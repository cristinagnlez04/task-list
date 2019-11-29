import React from "react";
import Resultado from "./Resultado";
import SearchBar from "./SearchBar";

export function List(props) {
  function onSearch(text) {
    console.log("text", text);
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Resultado />
    </>
  );
}
