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
        <div className='container-cards'>

            {dbStudents && dbStudents.map((item)=>(
                   <div className='cards'>
                   <div className={item.house === 'Ravenclaw' ? 'ravenclaw' 
                        : item.house === 'Slytherin' ? 'slytherin' 
                        : item.house === 'Hufflepuff' ? 'hufflepuff' : 'gryffindor' }>
                   <div className='container-photo'>
               <img src={item.image} className='photo' alt=''/>
               </div>
               </div>
               <div className='information'>
                   <div className='order-card'>
                   <p align='left'>{item.alive === true ? 'VIVO': 'MUERTO'}</p>
                <p align='left'> / ESTUDIANTE</p>
                    </div>
               <h1 classname='order-name'>{item.name}</h1>
               <div className='container-hidden'>
               <p>Cumpleaños:{' ' + item.dateOfBirth}</p>
               <p>Género:{' ' + item.gender}</p>
               <p>Color de ojos:{' ' + item.eyeColour}</p>
               <p>Color de pelo:{' ' + item.hairColour}</p>
               </div>
               </div>
               </div>
            ))}
        </div>
       
    )
}
export default Students