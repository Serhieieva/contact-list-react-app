export function getContactList() {
    return {
        types: [
            'GET_CONTACTS',
            'GET_CONTACTS_SUCCEED',
            'GET_CONTACTS_FAILED'
        ],
        payload: {
            request:{
                url:'/contacts'
            }
        }
    }
}

export function removeContact(id) {
    return {
        types: [
            'REMOVE_CONTACT',
            'REMOVE_CONTACT_SUCCEED',
            'REMOVE_CONTACT_FAILED'
        ],
        payload: {
            id,
            request:{
                url:`/contacts/${id}`,
                method: 'DELETE',
            }
        }
    }
}

export function updateContact(id, data) {
    return {
        types: [
            'UPDATE_CONTACT',
            'UPDATE_CONTACT_SUCCEED',
            'UPDATE_CONTACT_FAILED'
        ],
        payload: {
            request:{
                url:`/contacts/${id}`,
                method: 'PUT',
                data
            }
        }
    }
}

export function createContact(data) {
    return {
        types: [
            'CREATE_CONTACT',
            'CREATE_CONTACT_SUCCEED',
            'CREATE_CONTACT_FAILED'
        ],
        payload: {
            request:{
                url:'/contacts',
                method: 'POST',
                data
            }
        }
    }
}
