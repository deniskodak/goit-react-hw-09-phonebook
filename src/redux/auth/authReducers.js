import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const INITIAL_STATE = { name: '', email: '' };

const setPayload = (_, { payload }) => payload;
const setNull = () => null;

const user = createReducer(INITIAL_STATE, {
  [authActions.signUpUserSuccess]: (_, { payload }) => payload.user,
  [authActions.loginUserSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => INITIAL_STATE,
  [authActions.getCurrentUserSuccess]: setPayload,
});
const error = createReducer(null, {
  [authActions.signUpUserSuccess]: setNull,
  [authActions.loginUserSuccess]: setNull,
  [authActions.logOutSuccess]: setNull,
  [authActions.getCurrentUserSuccess]: setNull,
  [authActions.signUpUserError]: setPayload,
  [authActions.loginError]: setPayload,
  [authActions.logoutError]: setPayload,
  [authActions.getCurrentUserError]: setPayload,
});

const token = createReducer(null, {
  [authActions.signUpUserSuccess]: (_, { payload }) => payload.token,
  [authActions.loginUserSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: setNull,
});

const isLogin = createReducer(false, {
  [authActions.signUpUserSuccess]: () => true,
  [authActions.loginUserSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.signUpUserError]: () => false,
  [authActions.loginUserError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutSuccess]: () => false,
});
export default combineReducers({ user, token, error, isLogin });
