import axios from 'axios';

import authActions from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = user => async dispatch => {
  dispatch(authActions.signUpUserRequest());

  try {
    const response = await axios.post('/users/signup', user);
    token.set(response.data.token);
    dispatch(authActions.signUpUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.signUpUserError(error.message));
  }
};

const login = user => async dispatch => {
  dispatch(authActions.loginUserRequest());

  try {
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);
    dispatch(authActions.loginUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginUserError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logOutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const authOps = { signUp, login, logOut, getCurrentUser };

export default authOps;
