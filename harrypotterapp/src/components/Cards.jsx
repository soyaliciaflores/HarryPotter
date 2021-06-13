import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Store from './Store'
import { setCharacters } from './Actions';

const Cards = () =>{
    const characters = useSelector((state) =>state)
    // const [dbCharacters, setDbCharacters] = useState();
    const dispatch = useDispatch()

    const peticionCharacters = async() =>{
        await axios.get('http://localhost:5000/characters')
        .then(response =>{
            dispatch(setCharacters(response.data))
            })
        }
    
    useEffect(() =>{
        peticionCharacters();  
    });

    console.log(characters)

    return(
        <div>

            {/* {dbCharacters && dbCharacters.map((item)=>(
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
            ))} */}
            
           
        </div>
    )
}

export default Cards