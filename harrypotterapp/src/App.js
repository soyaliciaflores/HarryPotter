import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Students from "./components/Students";
import Staff from "./components/Staff";
import "./components/styles/styles.scss";
import logo from "./assets/logo.png";

function App() {
  const [theCards, setTheCards] = useState(true);
  const [theStudents, setTheStudents] = useState(false);
  const [theStaff, setTheStaff] = useState(false);

  const showStudents = () => {
    setTheCards(false);
    setTheStudents(true);
    setTheStaff(false);
  };

  const showStaff = () => {
    setTheCards(false);
    setTheStaff(true);
    setTheStudents(false);
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
      </div>

      {theCards === true ? <Cards /> : " "}
      {theStudents === true ? <Students /> : " "}
      {theStaff === true ? <Staff /> : " "}
    </div>
  );
}

export default App;
