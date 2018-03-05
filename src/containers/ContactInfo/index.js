import React from 'react';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import { find, propEq } from 'ramda';

const ContactInfo = ({ contact, handleEdit, handleDelete, handleBack }) => {
    const { firstName, lastName, phone, calls } = contact;

    return <div className="container">
        <header className="navbar bg-primary">
            <h2 className="navbar-brand mb-0 text-white">
                {firstName} {lastName}
            </h2>
            <div className="btn-group">
                <button onClick={handleEdit} className="btn btn-success">Edit</button>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                <button onClick={handleBack} className="btn btn-default">Back to contacts</button>
            </div>
        </header>

        <ul className="list-group list-group-flush">
            <li className="list-group-item">{phone}</li>
        </ul>

        <h4>History of calls</h4>
        <table className="table table-sm">
            <thead className="thead-default">
            <tr>
                <th>Date</th>
                <th>Duration</th>
            </tr>
            </thead>

            <tbody>
            {calls.map((call, i) => (
              <tr key={i}>
                  <td>{ call.date }</td>
                  <td>{ call.duration }</td>
              </tr>
            ))}
            </tbody>
        </table>
    </div>;
};

const mapStateToProps = (state, ownProps) => ({
    contact: find(propEq('id', ownProps.match.params.id))(state.contactList) || {}
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleEdit: () => {
        dispatch(push(`${ownProps.location.pathname}/edit`))
    },
    handleDelete: () => {
        dispatch({ type: 'REMOVE_CONTACT', id: ownProps.match.params.id})
    },
    handleBack: () => {
        dispatch(goBack())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);