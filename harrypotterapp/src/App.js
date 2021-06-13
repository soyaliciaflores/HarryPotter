import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Students from "./components/Students";
import Staff from "./components/Staff";

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

  // useEffect(() => {
  //   showStudents();
  // });

  return (
    <div>
      <button onClick={showStudents}>Students</button>
      <button onClick={showStaff}>Staff</button>
      {theCards === true ? <Cards /> : "desaparecierons todas"}
      {theStudents === true ? <Students /> : "desaparecieron estudiantes"}
      {theStaff === true ? <Staff /> : "desapareció staff"}
    </div>
  );
}

export default App;
