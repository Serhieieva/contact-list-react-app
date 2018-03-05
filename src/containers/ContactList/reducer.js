import { GET_CONTACTS, REMOVE_CONTACT, UPDATE_CONTACT } from './constants';

const initialState = [
    {id: '0', firstName: 'Vasyliy', lastName: 'Ivanov', phone: '122376', calls: [{date: "01.06.2017", duration: "00:02:30"}]},
    {id: '1', firstName: 'Ivanna', lastName: 'Ivanova', phone: '123759', calls: [{date: "01.06.2017", duration: "00:02:30"}]},
    {id: '3', firstName: 'Syliko', lastName: 'Ivanov', phone: '1234679', calls: [{date: "01.06.2017", duration: "00:02:30"}]},
];

const contactListReducer = {};

contactListReducer[ GET_CONTACTS ] = (state, action) => {
    return [
        ...action.payload,
    ];
};

contactListReducer[ REMOVE_CONTACT ] = (state, action) => {
    return state.filter(contact => contact.id === action.id);
};

contactListReducer[ UPDATE_CONTACT ] = (state, action) => {
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