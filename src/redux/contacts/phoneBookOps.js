import axios from 'axios';

import phoneBookActions from './phoneBookActions';

const getContacts = () => async dispatch => {
  dispatch(phoneBookActions.getContactsRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(phoneBookActions.getContactsSuccess(response.data));
  } catch (error) {
    dispatch(phoneBookActions.getContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(phoneBookActions.addContactsRequest());

  try {
    const response = await axios.post('./contacts', contact);
    dispatch(phoneBookActions.addContactsSuccess(response.data));
  } catch (error) {
    dispatch(phoneBookActions.addContactsError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(phoneBookActions.deleteContactsRequest());

  try {
    await axios.delete(`./contacts/${id}`);
    dispatch(phoneBookActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(phoneBookActions.deleteContactsError(error.message));
  }
};

const phoneBookOps = { getContacts, addContact, deleteContact };

export default phoneBookOps;
