import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContactList from '../ContactList';
import ContactInfo from '../ContactInfo';

const Contacts = () => {
    return(
        <Switch>
            <Route exact path="/contacts" component={ContactList} />
            <Route exact path="/contacts/:id" component={ContactInfo} />
        </Switch>
    );
};

export default Contacts;