import React, {useState, useEffect} from 'react';
import axios from 'axios'


const Cards = () =>{

    const [dbCharacters, setDbCharacters] = useState();
    
    const peticionCharacters = async() =>{
        await axios.get('http://localhost:5000/characters')
        .then(response =>{
            const characters = response.data;
            setDbCharacters(characters)
            })
        }
    
    useEffect(() =>{
        peticionCharacters();
        
    })

    return(
        <div>

            {dbCharacters && dbCharacters.map((item)=>(
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

export default Cards