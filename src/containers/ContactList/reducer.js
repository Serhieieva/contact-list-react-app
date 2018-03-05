import { path } from 'ramda';
import {
    REMOVE_CONTACT_SUCCEED,
    UPDATE_CONTACT_SUCCEED,
    CREATE_CONTACT_SUCCEED,
    GET_CONTACTS_SUCCEED,
} from './constants';

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
    const payload = action.payload.data;

    return state.map(contact => ( contact.id === payload.id ? { ...contact, ...payload } : contact ));
};

contactListReducer[ CREATE_CONTACT_SUCCEED ] = (state, action) => {
    return [
        ...state,
        action.payload.data
    ];
};

export default function (state = initialState, action) {
    const reducerFunction = contactListReducer[ action.type ];

    if (!reducerFunction) {
        return state;
    } else {
        return reducerFunction(state, action);
    }
}