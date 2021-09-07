import React from 'react'
import './Landing.css'


const Landing = ({src, h1, p}) => {
    
    
    return (
        <div className='hero-container'>
            <video src={src} autoPlay loop muted />
            <h1>{h1}</h1>
            <p>{p}</p>

        </div>
    )
}

export default Landing
