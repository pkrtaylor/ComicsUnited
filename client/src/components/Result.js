import React, {useState, useEffect} from 'react'
import Spinner from './Spinner/Spinner'
import ProfileModal from './Modal/ProfileModal'
import './Results/Results'
import axios from 'axios'



const Result = ({match}) => {
    
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    
   
    useEffect(() => {
        axios
          .get(`/comicapi/character/${match.params.id}`)
          .then(({ data }) => {
            setData(data);
          })
          .catch(setError);
      }, [match.params.id]);

    console.log(data?.results);

    if(data?.error) return <h1>{data.error}</h1>;

  
   
    if (error) return <h1>There was an error.. {error.error}</h1>;
   
   
    if (!data) return <Spinner />;
    return (
       <ProfileModal data={data}  />
    )
}

export default Result
