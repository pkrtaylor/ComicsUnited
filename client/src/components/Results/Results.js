import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {CharContext} from '../../context/CharContext'
import Spinner from '../Spinner/Spinner'
import './Results.scss'








const Results = () => {

    
    const [data, setData]= useState({});
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [superList, setSuperList]=useState({});
    
    const { name } = useContext(CharContext);
    console.log(name);
    
    useEffect(() => {
        async function getResults(){
            setLoading(true);
        
            await axios.get(`/comicapi/results/${name}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) =>{
                setError(err);
            })
            .finally(() =>{
                setLoading(false);
                });
        
        }
        getResults();
        setSuperList(data.results);
    }
    , [name]);
    console.log(superList);
    
   


   
    
    
    
  
    
   
 
    
    return loading ? <Spinner /> : (
        <div className='container'>
          Hello
        </div>
        )
}


/*
   const listItems = superList.map((item)=> 
    
    <div className='card' key={item.id}>
        <div className='card_img'>
            <img src={item.image['url']}/>
        </div>
        <div className='card_header'>
            <h2>{item.name}</h2>
            <p>{item.biography['full-name']}</p>
        </div>

    </div>
    
    
    );
 <h3>Results for desired character...</h3>
            <div className='main_content'>
                {listItems}
            </div>
<h1>Which universe is your favorite?</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items '>
                <CardItem 
                src='/images/DCcomics.jpg'
                text='Explore your favorite DC characters, heroes and villains alike!!'
                label='DC'
                path='/dc'
                />
                 <CardItem 
                src='/images/marvel_logo.jpg'
                text='Delve into great men like Captian America or Villainous men like Thanos'
                label='Marvel'
                path='/marvel'
                />
                 <CardItem 
                src='/images/DarkHorse.jpg'
                text={`Let me guess... you're just different?`}
                label='Dark Horse'
                path='/darkhorse'
                />
            </ul>

        </div>
        </div>
        const res = await axios.get(`/comicapi/results/${name}`)
*/

 

export default Results


