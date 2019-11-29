import React from "react";
import Resultado from "./Resultado";
import SearchBar from "./SearchBar";

export default function List(props) {
  function onSearch(text) {
    const { buscar } = props;
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Resultado />
    </>
  );
}
