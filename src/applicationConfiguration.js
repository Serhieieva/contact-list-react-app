import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import createHistory from 'history/createBrowserHistory'

import { reducer as reduxFormReducer } from 'redux-form';
import contactListReducer from './containers/ContactList/reducer';

export const history = createHistory();

const client = axios.create({
    baseURL: 'http://localhost:4000',
    responseType: 'json',
    'Content-Type': 'application/json',
});

// const middlewareConfig = {
//     interceptors: {
//         request: [],
//         response: [
//             function ({ getState, dispatch, getSourceAction }, req) {
//                 console.log(req); //contains information about request object
//             }
//         ]
//     }
// };

const middlewares = [
    routerMiddleware(history),
    axiosMiddleware(client),
    thunk,
];

const enhancers = [
    applyMiddleware(...middlewares),
];

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
        }) : compose;

export const store = createStore(
    combineReducers({
        router: routerReducer,
        contactList: contactListReducer,
        form: reduxFormReducer,
    }),
    composeEnhancers(...enhancers)
);