import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes as reduxFormPropTypes} from 'redux-form';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { find, propEq } from 'ramda';
import { updateContact, createContact, getContactList } from '../ContactList/actions';

const propTypes = {
    ...reduxFormPropTypes,
    id: PropTypes.string,
    handleGoBack: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};

const ContactForm = ({ id, handleSubmit, pristine, submitting, handleGoBack, handleCreate, handleEdit}) => {
    const saveContact = contact => {
        id ? handleEdit(id, contact) : handleCreate(contact);
    };

    const handleCancel = event => {
        event.preventDefault();
        handleGoBack();
    };

    return (
        <form onSubmit={handleSubmit(saveContact)}>
            <label>
                First Name
                <Field
                    className="form-control"
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                    required
                />
            </label>
            <label>
                Last Name
                <Field
                    className="form-control"
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                />
            </label>
            <label>
                Phone
                <Field
                    className="form-control"
                    name="phone"
                    component="input"
                    type="text"
                    placeholder="Phone"
                    required
                />
            </label>
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
            <button className="btn btn-default" onClick={handleCancel}>Cancel</button>
        </form>
    );
};

ContactForm.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
    initialValues: find(propEq('id', ownProps.id))(state.contactList.items) || {}
});

const mapDispatchToProps = dispatch => ({
    handleGoBack: () => dispatch(goBack()),
    handleCreate: contact => {
        dispatch(createContact(contact))
            .then(() => dispatch(getContactList()))
            .then(() => dispatch(goBack()));
    },
    handleEdit: (id, contact) => {
        dispatch(updateContact(id, contact));
        dispatch(goBack());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'contact'})(ContactForm));
