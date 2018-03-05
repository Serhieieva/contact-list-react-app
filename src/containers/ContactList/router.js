import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';

const Contacts = () => {
    return(
        <Switch>
            <Route exact path="/contacts" component={ContactList} />
            <Route path="/contacts/add" component={ContactForm} />
            <Route exact path="/contacts/:id" component={ContactInfo} />
            <Route path="/contacts/:id/edit" component={ContactForm} />
        </Switch>
    );
};

export default Contacts;
