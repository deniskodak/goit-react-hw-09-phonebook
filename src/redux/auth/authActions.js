import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const signUpUserRequest = createAction('auth/signUpUserRequest');
const signUpUserSuccess = createAction('auth/signUpUserSuccess');
const signUpUserError = createAction('auth/signUpUserError');

const loginUserRequest = createAction('auth/loginUserRequest');
const loginUserSuccess = createAction('auth/loginUserSuccess');
const loginUserError = createAction('auth/loginUserError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

const authActions = {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  signUpUserRequest,
  signUpUserSuccess,
  signUpUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logOutRequest,
  logOutSuccess,
  logOutError,
};

export default authActions;
