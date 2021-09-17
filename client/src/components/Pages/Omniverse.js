import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CharContext } from '../../context/CharContext'
import '../Landing/Landing.css'

const Omniverse = () => {



    const { setName } = useContext(CharContext)


    return (

        <div className='hero-container'>
            <img className='img1' src={'/images/omniverse.jpg'} />
            <form className=''>
                <input
                    type="text"
                    placeholder="Search..."
                    name="name"
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    required />

                <Link to='/results'><input type="submit" /> </Link>

            </form>
        </div>

    )
}




export default Omniverse



