import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';

import { store, history } from './applicationConfiguration';
import Contacts from './containers/ContactList/router.js';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Redirect exact from="/" to="/contacts"/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
