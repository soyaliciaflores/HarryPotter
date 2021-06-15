import { useEffect, useState } from 'react'
import db from './../api/db.json'


const FilterAlive = () => {


    const [deads, setDeads] = useState()

  
    const isDead = () =>{
        const dead = db.characters.filter(d => d.alive === false)
        setDeads(dead)
    }

    useEffect(()=>{
        isDead()
    })
    

    return (
        <div className='container-cards'>

            {deads && deads.map((item)=>(
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

export default FilterAlive