import React from 'react';
import ContactForm from '../ContactForm/index';

export default (props) => {
    const id = props.match.params.id;

    return (<div className="container">
        <ContactForm id={id} />
    </div>);
};