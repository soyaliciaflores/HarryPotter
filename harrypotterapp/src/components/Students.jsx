import React, { useState, useEffect} from 'react';
import axios from 'axios'

const Students = () =>{

    const [dbStudents, setDbStudents] = useState()

    const peticionStudents = async() =>{
        await axios.get('http://localhost:5000/students')
        .then(response =>{
            const students = response.data;
            setDbStudents(students)
        })
    }
    
    useEffect(() =>{
        peticionStudents();
        
    })

    return(
        <div>

            {dbStudents && dbStudents.map((item)=>(
                <div>
                <img src={item.image} alt=''/>
                <p>{item.alive === true ? 'vivo' : 'muerto'}</p>
                <p>{item.name }</p>
                <h2>{item.name}</h2>
                <p>Cumpleaños:{item.dateOfBirth}</p>
                <p>Género:{item.gender}</p>
                <p>Color de ojos:{item.eyeColour}</p>
                <p>Color de pelo:{item.hairColour}</p>
                </div>
            ))}
        </div>
       
    )
}
export default Students