import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Store from "./components/Store";
import AllCards from "./components/AllCards";
import Cards from "./components/Cards";

const App = () => (
  <Provider store={Store}>
    <main>
      <h1>Harry Potter</h1>
      <AllCards />
      {/* <Favorits /> */}
      <Cards />
    </main>
  </Provider>
);

export default App;
