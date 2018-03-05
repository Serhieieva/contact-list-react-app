import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import { reducer as reduxFormReducer } from 'redux-form';
import contactListReducer from './containers/ContactList/reducer';

export const history = createHistory();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
        }) : compose;

const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        router: routerReducer,
        contactList: contactListReducer,
        form: reduxFormReducer,
    }),
    composeEnhancers(applyMiddleware(middleware))
);