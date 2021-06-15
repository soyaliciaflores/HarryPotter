import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Students from "./components/Students";
import Staff from "./components/Staff";
import "./components/styles/styles.scss";
import logo from "./assets/logo.png";
import FilterAlive from "./components/FilterAlive";
import FilterDead from "./components/FilterDead";

function App() {
  const [theCards, setTheCards] = useState(true);
  const [theStudents, setTheStudents] = useState(false);
  const [theStaff, setTheStaff] = useState(false);
  const [theDeads, setTheDeads] = useState(false);
  const [theAlives, setTheAlives] = useState(false);

  const showStudents = () => {
    setTheCards(false);
    setTheStudents(true);
    setTheStaff(false);
    setTheDeads(false);
    setTheAlives(false);
  };

  const showStaff = () => {
    setTheCards(false);
    setTheStaff(true);
    setTheStudents(false);
    setTheDeads(false);
    setTheAlives(false);
  };

  const showAlives = () => {
    setTheCards(false);
    setTheStaff(false);
    setTheStudents(false);
    setTheDeads(false);
    setTheAlives(true);
  };

  const showDeads = () => {
    setTheCards(false);
    setTheStaff(false);
    setTheStudents(false);
    setTheDeads(true);
    setTheAlives(false);
  };

  return (
    <div>
      <div className="header">
        <img className="logo" src={logo} alt="Logo Harry Potter" />
        <h2>Selecciona tu filtro</h2>
      </div>
      <div className="container-button">
        <button className="btn-filter" onClick={showStudents}>
          ESTUDIANTES
        </button>
        <button className="btn-filter" onClick={showStaff}>
          STAFF
        </button>
        <button className="btn-filter" onClick={showDeads}>
          MUERTOS
        </button>
        <button className="btn-filter" onClick={showAlives}>
          VIVOS
        </button>
      </div>

      {theCards === true ? <Cards /> : " "}
      {theStudents === true ? <Students /> : " "}
      {theStaff === true ? <Staff /> : " "}
      {theAlives === true ? <FilterAlive /> : " "}
      {theDeads === true ? <FilterDead /> : " "}
    </div>
  );
}

export default App;
