import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const ContactList = ({ contactList }) => {
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
        </div>
    );
};

const mapStateToProps = state => ({ contactList: state.contactList });

export default connect(mapStateToProps)(ContactList);