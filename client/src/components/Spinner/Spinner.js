import React from 'react'
import spinner from '../Spinner/Spinner-3.gif'


const Spinner = () => {
    return (
       <div>
       <img
        scr={spinner}
        style={{wdith: '200px' , margin:'auto', display:'block' }}
        alt= 'Loading...'
        />
       </div>
    )
}

export default Spinner
