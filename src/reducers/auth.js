import { LOGIN_SUCCES, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCES:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.id,
        failureMessage: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        failureMessage: payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        failureMessage: null,
      };

    default:
      return state;
  }
}
