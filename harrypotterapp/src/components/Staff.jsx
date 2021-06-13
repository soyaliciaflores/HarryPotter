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
        
        </div>
       
    )
}
export default Staff