import { FETCH_API_DATA } from '../actions/types';

export default function dataReducer(state = [], action) {
    switch(action.type) {
        case FETCH_API_DATA:
            return action.data;
        default:
            return state;
    }
}