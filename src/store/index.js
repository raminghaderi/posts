import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/posts';

// TODO Ask Kevin about how I created the store and why rootReducer has yellow underline?
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log('STORE: ', store.getState());
});

export default store;