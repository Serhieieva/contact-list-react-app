import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { getContactList } from './actions';
import Pagination from '../../components/Pagination';

const propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.object).isRequired,
    paginationModel: PropTypes.object.isRequired,
};

const ContactList = ({ contactList, paginationModel, getContactList }) => {
    return (
        <div className="container">
            <header className="navbar bg-primary">
                <h2 className="navbar-brand mb-0 text-white">Contact list</h2>
                <Link to={{ pathname: '/contacts/add' }}>
                    <button className="btn btn-success">Add contact</button>
                </Link>
            </header>
            <ul className="list-group">
                {contactList.map((contact, index) => (
                    <li className="list-group-item" key={index}>
                        <Link to={{ pathname: `/contacts/${contact.id}` }}>{contact.firstName} {contact.lastName}</Link>
                    </li>))}
            </ul>
            <Pagination model={paginationModel} getContactList={getContactList}/>
        </div>
    );
};

ContactList.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
    getContactList: page => dispatch(getContactList(page)),
});

const mapStateToProps = state => ({
    contactList: state.contactList.items,
    paginationModel: state.contactList.paginationModel
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);