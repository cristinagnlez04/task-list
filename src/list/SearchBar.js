import React from "react";
import { Form } from "react-bootstrap";
import { func } from "prop-types";

const SearchBar = ({ onSearch }) => <Form.Control placeholder="Buscar" />;
SearchBar.propTypes = {
  onSearch: func.isRequired
};

export default SearchBar;
