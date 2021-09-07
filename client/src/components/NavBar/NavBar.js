import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const[click, setClick]=useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        ComicsUnited 
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/dc' className='nav-links' onClick={closeMobileMenu}>
                            DC
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/marvel' className='nav-links' onClick={closeMobileMenu}>
                            Marvel
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/darkhorse' className='nav-links' onClick={closeMobileMenu}>
                            Dark Horse
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default NavBar
