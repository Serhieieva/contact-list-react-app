import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContactList from '../ContactList';

const Contacts = () => {
    return(
      <Switch>
          <Route exact path="/contacts" component={ContactList} />
      </Switch>
    );
};

export default Contacts;