import {GET_RESULTS, RESULTS_ERROR} from '../actions/types'



const initialState ={
    result :[],
    results:[]
    
}

export default function(state= initialState, action){
    const {type, payload} = action;

    switch (type) {
        case GET_RESULTS:
            return{
                ...state,
                result: payload,
                results: payload.results
            }
        case RESULTS_ERROR:
            return state;

            
        default:
            return state;
    }


}