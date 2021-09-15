import React, {useState} from 'react'
import Cards from '../Cards/Cards'
import Landing from '../Landing/Landing'

const Home = () => {

    const [ h1, setH1]= useState('Comics United');
    const [ p, setP]=useState('Learn about your favorite comic book characters here.');
    return (
        <>
            <Landing h1 ={h1} p={p}/>
            <Cards />
        </>
    )
}

export default Home
