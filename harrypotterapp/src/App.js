import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Store from "./components/Store";
import Filter from "./components/Filter";
import "./Styles/Styles.scss";

const App = () => (
  <Provider store={Store}>
    <main>
      <h1>Harry Potter</h1>
      <Filter />
    </main>
  </Provider>
);

export default App;
