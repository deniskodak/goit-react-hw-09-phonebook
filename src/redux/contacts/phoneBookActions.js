import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('phonebook/getContactsRequest');
const getContactsSuccess = createAction('phonebook/getContactsSuccess');
const getContactsError = createAction('phonebook/getContactsError');

const addContactsRequest = createAction('phonebook/addContactsRequest');
const addContactsSuccess = createAction('phonebook/addContactsSuccess');
const addContactsError = createAction('phonebook/addContactsError');

const deleteContactsRequest = createAction('phonebook/deleteContactsRequest');
const deleteContactsSuccess = createAction('phonebook/deleteContactsSuccess');
const deleteContactsError = createAction('phonebook/deleteContactsError');

const filterContacts = createAction('phonebook/filterContacts');

const phoneBookActions = {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContacts,
};

export default phoneBookActions;
