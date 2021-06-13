import React, {useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from './Actions';

const Cards = () =>{
    const characters = useSelector((state) =>state)
    const dispatch = useDispatch()

    const peticionCharacters = async() =>{
        await axios.get('http://localhost:3001/characters')
        .then(response =>{
            dispatch(setCharacters(response.data))
            })
        }
    useEffect(() =>{
        peticionCharacters();  
    });

    // console.log(characters)

    return(
        <div>  
        </div>
    )
}

export default Cards