import React, {useState, useEffect} from 'react'
import Spinner from './Spinner/Spinner'
import ProfileModal from './Modal/ProfileModal'
import './Results/Results'
import axios from 'axios'



const Result = ({match}) => {
    
    const [charId, setChardId]=useState(null);
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    setChardId(match.params.id);
    console.log(charId);
    useEffect(() => {
        axios
          .get(`/comicapi/character/${charId}`)
          .then(({ data }) => {
            setData(data);
          })
          .catch(setError);
      }, [charId]);

    console.log(data?.results);

    if(data?.error) return <h1>{data.error}</h1>;

  
   
    if (error) return <h1>There was an error.. {error.error}</h1>;
   
   
    if (!data) return <Spinner />;
    return (
        <div className='container'>
        <h1>{data?.name} a.k.a {data?.biography['full-name']}</h1>
        </div>
    )
}

export default Result
