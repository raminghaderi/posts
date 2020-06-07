import { createStore } from 'redux';

import rootReducer from '../reducers/posts';

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;