import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getContactList } from './actions';

import ContactList from '../ContactList';
import ContactEdit from '../ContactEdit';
import ContactInfo from '../ContactInfo';

class Contacts extends Component {
    componentWillMount() {
        this.props.getContactList();
    }

    render() {
        return (
            <Switch>
                <Route exact path="/contacts" component={ContactList}/>
                <Route path="/contacts/add" component={ContactEdit}/>
                <Route exact path="/contacts/:id" component={ContactInfo}/>
                <Route path="/contacts/:id/edit" component={ContactEdit}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getContactList: () => dispatch(getContactList()),
});

export default connect(null, mapDispatchToProps)(Contacts);
