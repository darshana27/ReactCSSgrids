import { FETCH_API_DATA } from './types';
import axios from 'axios';

const apiURL = 'https://swapi.co/api/planets/'; 

export const getData = (data) => {
    return {
        type: FETCH_API_DATA,
        data
    }
}

export const fetchApiData = () => {
    return (dispatch) => {
        return axios.get(apiURL)
                .then(response => {
                    console.log(response.data.results);
                    dispatch(getData(response.data));
                })
                .catch(error => {throw(error)})
    }
}