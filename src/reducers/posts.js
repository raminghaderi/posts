import { LOAD_POSTS } from '../constants/actionTypes';

function posts(state = [], action) {
    if (action.type === LOAD_POSTS) {
        return [...state, ...action.payload];
    }
    return state;
}
export default posts;