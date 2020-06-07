import { LOAD_POSTS } from '../constants/actionTypes';

function posts(state = {}, action) {
    if (action.type === LOAD_POSTS) {
        return { ...state, posts: action.payload };
    }
    return state;
}

// TODO ask Kevin why is the following wrong?
/* function rootReducer(state = {posts: 'hello'}, action) {
    if (action.type === LOAD_POSTS) {
        // return { ...state, posts: action.payload };

        // return {
        //     posts: [...state, action.payload]
        // };
    }
    return state;
}
*/
export default posts;