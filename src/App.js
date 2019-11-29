import React from "react";
import { Container } from "react-bootstrap";
import { List } from "./list/List";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <List />
      </Container>
    </Provider>
  );
}

export default App;
