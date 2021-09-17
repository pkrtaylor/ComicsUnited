import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CharContext } from '../../context/CharContext'

const Marvel = () => {



    const { setName } = useContext(CharContext)


    return (

        <div className='hero-container'>
            <video src='/videos/CapAm.mp4' autoPlay loop muted />
            <form className=''>
                <input
                    type="text"
                    placeholder="Search..."
                    name="name"
                    onChange={(event) => {
                        setName(event.target.value)
                    }} />

                <Link to='/results'><input type="submit" /> </Link>

            </form>
        </div>

    )
}




export default Marvel



