import React from 'react'
import './Landing.css'


const Landing = ({ h1, p}) => {
    
    
    return (
        <div className='hero-container'>
          
            <h1>{h1}</h1>
            <p>{p}</p>

        </div>
    )
}

export default Landing
