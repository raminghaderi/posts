import { LOAD_POSTS } from '../constants/actionTypes';

export function loadPosts(payload) {
    return {
        type: LOAD_POSTS,
        payload
    };
}