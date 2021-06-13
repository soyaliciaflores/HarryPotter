import React from 'react';
import { useSelector } from "react-redux";

const StaffComponent = () =>{
    const staff = useSelector((state) => state.staff);
    const renderList = staff.map((item) =>{
        const {name, image, alive, dateOfBirth, gender, eyeColour, hairColour} = item;
        return(
            <div>
                <div>
               <img src={image} alt=''/>
               <p>{alive === true ? 'vivo' : 'muerto'}</p>
               <p>{name }</p>
               <h2>{name}</h2>
               <p>Cumpleaños:{dateOfBirth}</p>
               <p>Género:{gender}</p>
               <p>Color de ojos:{eyeColour}</p>
               <p>Color de pelo:{hairColour}</p>
               </div>
               <button>Agregar a favoritos</button>
            </div>
            )
    })
    return(
        <>{renderList}</>
    )
    
}
export default StaffComponent