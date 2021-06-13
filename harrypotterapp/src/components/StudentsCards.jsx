import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from './Actions';

const StudentsCards = () =>{
    const students = useSelector((state) =>state)
    const dispatch = useDispatch()

    const peticionStudents = async() =>{
        await axios.get('http://localhost:3001/students')
        .then(response =>{
            dispatch(setStudents(response.data))
            })}

    useEffect(() =>{
        peticionStudents(); 
    })
    console.log(students)
    
    return(
        <div>
        </div>
    )
}
export default StudentsCards
