import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {CharContext} from '../../context/CharContext'
import {Link} from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import './Results.scss'








const Results = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { name } = useContext(CharContext);
   
    useEffect(() => {
      axios
        .get(`/comicapi/results/${name}`)
        .then(({ data }) => {
          setData(data);
        })
        .catch(setError);
    }, [name]);
   
    console.log(data?.results);
    
    

   
    if(data?.error) return <h1>{data.error}</h1>;

  
   
    if (error) return <h1>There was an error.. {error.error}</h1>;
   
   
    if (!data) return <Spinner />;
   
    return (
      <div className="container">
          
          <h3>Results for desired character...</h3>
          <div className='main_content'>
        {data.results.map(({ id, name, image, biography }) => (
          <div className='card' key={id} id={id}>
          <Link to={`/result/${id}`}>
          <div className='card_img'>
              <img src={image['url']} />
          </div>
          <div className='card_header'>
              <h2>{name}</h2>
              <p>{biography['full-name']}</p>
          </div>
          </Link>
      </div>
        ))}
        </div>
      </div>
      
    );
  };


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


