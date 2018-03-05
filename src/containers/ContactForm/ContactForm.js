import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { find, propEq } from 'ramda';

const validate = values => {
    const errors = {};

    if (!values.firstName || !values.lastName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 10) {
        errors.firstName = 'Must be 10 characters or less'
    }

    return errors
};

const ContactForm = ({ handleSubmit, pristine, submitting, handleCancel}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name
                <Field
                    className="form-control"
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
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
                />
            </label>
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
            <button className="btn btn-default" onClick={handleCancel}>Cancel</button>
        </form>
    );
};

const mapStateToProps = (state, ownProps) => ({
    initialValues: find(propEq('id', ownProps.id))(state.contactList) || {}
});

const mapDispatchToProps = dispatch => ({
    handleCancel: () => dispatch(goBack())
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'contact'}, validate)(ContactForm));
