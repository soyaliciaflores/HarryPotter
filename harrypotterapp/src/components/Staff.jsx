import React, { useState, useEffect} from 'react';
import axios from 'axios'

const Staff = () =>{

    const [dbStaff, setDbStaff] = useState()

    
    const peticionStaff = async() =>{
        await axios.get('http://localhost:5000/staff')
        .then(response =>{
            const staff = response.data;
            setDbStaff(staff)
            })
        }
    
    useEffect(() =>{
        peticionStaff();
        
    })

    return(
        <div>
           
            {dbStaff && dbStaff.map((item) =>(
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
            ) )}
        </div>
       
    )
}
export default Staff