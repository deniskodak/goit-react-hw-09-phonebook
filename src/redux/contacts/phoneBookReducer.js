import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phoneBookActions from './phoneBookActions';

const items = createReducer([], {
  [phoneBookActions.getContactsSuccess]: (_, { payload }) => payload,
  [phoneBookActions.addContactsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phoneBookActions.deleteContactsSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [phoneBookActions.filterContacts.type]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [phoneBookActions.getContactsRequest]: () => true,
  [phoneBookActions.getContactsSuccess]: () => false,
  [phoneBookActions.getContactsError]: () => false,
  [phoneBookActions.addContactsRequest]: () => true,
  [phoneBookActions.addContactsSuccess]: () => false,
  [phoneBookActions.addContactsError]: () => false,
  [phoneBookActions.deleteContactsRequest]: () => true,
  [phoneBookActions.deleteContactsSuccess]: () => false,
  [phoneBookActions.deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [phoneBookActions.getContactsError]: (_, { payload }) => payload,
  [phoneBookActions.addContactsError]: (_, { payload }) => payload,
  [phoneBookActions.deleteContactsError]: (_, { payload }) => payload,
  [phoneBookActions.getContactsSuccess]: () => null,
  [phoneBookActions.addContactsSuccess]: () => null,
  [phoneBookActions.deleteContactsSuccess]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
