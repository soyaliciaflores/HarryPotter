import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Store from "./components/Store";
import StaffCards from "./components/StaffCards";
import RenderStaff from "./components/RenderStaff";
import AllCards from "./components/AllCards";
import Cards from "./components/Cards";
import StudentsCards from "./components/StudentsCards";
import RenderStudents from "./components/RenderStudents";

const App = () => (
  <Provider store={Store}>
    <main>
      <h1>Harry Potter</h1>
      <StudentsCards />
      <RenderStudents />
      <StaffCards />
      <RenderStaff />
      <Cards />
      <AllCards />
    </main>
  </Provider>
);

export default App;
