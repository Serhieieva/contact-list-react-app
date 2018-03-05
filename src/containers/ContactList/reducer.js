import { path } from 'ramda';
import { GET_CONTACTS_SUCCEED, REMOVE_CONTACT_SUCCEED, UPDATE_CONTACT_SUCCEED } from './constants';

const initialState = [];

const contactListReducer = {};

contactListReducer[ GET_CONTACTS_SUCCEED ] = (state, action) => {
    return [
        ...action.payload.data,
    ];
};

contactListReducer[ REMOVE_CONTACT_SUCCEED ] = (state, action) => {
    const id = path(['payload', 'config', 'reduxSourceAction', 'payload', 'id'], action);

    return state.filter(contact => contact.id !== id);
};

contactListReducer[ UPDATE_CONTACT_SUCCEED ] = (state, action) => {
    return state.map(contact => ( contact.id === action.id ? { ...contact, ...action.payload } : contact ));
};

export default function (state = initialState, action) {
    const reducerFunction = contactListReducer[ action.type ];

    if (!reducerFunction) {
        return state;
    } else {
        return reducerFunction(state, action);
    }
}