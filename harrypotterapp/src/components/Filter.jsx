import React, {useState} from 'react'
import StaffCards from "./StaffCards";
import RenderStaff from "./RenderStaff";
import AllCards from "./AllCards";
import Cards from "./Cards";
import StudentsCards from "./StudentsCards";
import RenderStudents from "./RenderStudents";

const Filter = () => {
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
          <Cards /> 
          <StudentsCards /> 
          <StaffCards /> 
      <button className='filter-btn' onClick={showStudents}>Students</button>
      <button className='filter-btn' onClick={showStaff}>Staff</button>
      {theCards === true ? <AllCards />: "desaparecierons todas"}
      {theStudents === true ? <RenderStudents /> : "desaparecieron estudiantes"}
      {theStaff === true ? <RenderStaff />: "desapareció staff"}
        </div>
    )
}

export default Filter
