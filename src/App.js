import React from "react";
import { Container } from "react-bootstrap";
import { List } from "./list/List";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
      <Container>
        <List />
      </Container>
    </Provider>
  );
}

export default App;
