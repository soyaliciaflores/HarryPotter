import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setStaff } from './Actions';

const StaffCards = () =>{
    const staff = useSelector((state) =>state)
    const dispatch = useDispatch()

    const peticionStaff = async() =>{
        await axios.get('http://localhost:3001/staff')
        .then(response =>{
            dispatch(setStaff(response.data))
            })}
    useEffect(() =>{
        peticionStaff(); 
    })
    // console.log(staff)
    
    return(
        <div>
        </div>
    )
}
export default StaffCards

