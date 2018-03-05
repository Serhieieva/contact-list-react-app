import { path } from 'ramda';
import parse from 'parse-link-header';
import {
    REMOVE_CONTACT_SUCCEED,
    UPDATE_CONTACT_SUCCEED,
    CREATE_CONTACT_SUCCEED,
    GET_CONTACTS_SUCCEED,
} from './constants';

const initialState = {
    items: [],
    paginationModel: {
        next: null,
        prev: null,
        limit: 4
    },
};

const contactListReducer = {};

contactListReducer[ GET_CONTACTS_SUCCEED ] = (state, action) => {
    const links = parse(action.payload.headers.link);

    return {
        ...state,
        items: [...action.payload.data],
        paginationModel: {
            ...state.paginationModel,
            next: links.next ? links.next._page : null,
            prev: links.prev ? links.prev._page : null,
        } ,
    };
};

contactListReducer[ REMOVE_CONTACT_SUCCEED ] = (state, action) => {
    const id = path(['payload', 'config', 'reduxSourceAction', 'payload', 'id'], action);

    return {
        ...state,
        items: state.items.filter(contact => contact.id !== id)
    };
};

contactListReducer[ UPDATE_CONTACT_SUCCEED ] = (state, action) => {
    const payload = action.payload.data;

    return {
        ...state,
        items: state.items.map(contact => ( contact.id === payload.id ? { ...contact, ...payload } : contact )),
    };
};

contactListReducer[ CREATE_CONTACT_SUCCEED ] = (state, action) => {
    return {
        ...state,
        items: [
            ...state.items,
            action.payload.data
        ]
    };
};

export default function (state = initialState, action) {
    const reducerFunction = contactListReducer[ action.type ];

    if (!reducerFunction) {
        return state;
    } else {
        return reducerFunction(state, action);
    }
}