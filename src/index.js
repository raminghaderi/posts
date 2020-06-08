import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import App from './App';
import Post from './components/Post';
import PostForm from './components/PostForm';
import * as serviceWorker from './serviceWorker';
import store from './store';

// TODO Ask Kevin about how I specified the Provider and Routes and if this is the right way or not?
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/post-form" component={PostForm}/>
                </Switch>
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
