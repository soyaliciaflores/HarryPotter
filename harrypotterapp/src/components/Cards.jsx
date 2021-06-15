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
        <div className='container-cards'>

            {dbCharacters && dbCharacters.map((item)=>(
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

export default Cards