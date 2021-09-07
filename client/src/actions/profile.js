import axios from 'axios'
import {GET_RESULTS, RESULTS_ERROR} from './types';


export const getResults = (formData) => async dispatch =>{
   
    const name = formData.name;
    
    console.log(name);
    try {
        const res = await axios.get(`/comicapi/results/${name}`)
        console.log(res.data);
        dispatch({
            type: GET_RESULTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RESULTS_ERROR,
            //msg gives us the error in text form
            //status: gives http status error like 404 or 400 etc
            payload: {msg: err.response.statusText, status: err.response.status}
        })
       
    }
}