import {combineReducers} from 'redux';
import data from './dataReducer';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
    data:data,  
    form: formReducer
})