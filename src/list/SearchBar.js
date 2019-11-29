import React from "react";
import { Form } from "react-bootstrap";
import { func } from "prop-types";
import { debounce } from "lodash";

const SearchBar = ({ onSearch }) => {
  const debouncedSearch = debounce(onSearch, 1000);

  return (
    <Form.Control
      placeholder="Buscar"
      onChange={e => debouncedSearch(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  onSearch: func.isRequired
};

export default SearchBar;
