import { LOAD_POSTS } from '../constants/actionTypes';

export function loadPosts() {
    return async function (dispatch) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();

            if (response.status < 400) {
                return dispatch({ type: LOAD_POSTS, payload });
            }
        } catch (e) {
            // TODO Ask Kevin about dispatch({ type: GENERAL_ACTION_ERROR, payload: e.message });
            console.log(e);
        }
    };
}