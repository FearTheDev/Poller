import { LOGIN_SUCCES, LOGIN_FAILURE, LOGOUT } from './types';
import { apiLogin, apiLogout } from '../data/api';

export const login = (username, password) => (dispatch) => {
  return apiLogin({ username, password })
    .then((user) => {
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user.id));
      dispatch({ type: LOGIN_SUCCES, payload: user });
    })
    .catch((e) => {
      dispatch({ type: LOGIN_FAILURE, payload: e });
    });
};

export const logout = () => (dispatch) => {
  return apiLogout().then(() => {
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  });
};
