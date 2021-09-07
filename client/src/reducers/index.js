import { combineReducers } from 'redux'
import alert from'./alert'

import profile from './profile'


// this takes in an object that will have any reducers we create 
export default combineReducers({
    alert,
    profile
    

});