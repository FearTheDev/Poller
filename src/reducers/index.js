import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import auth from './auth';
import loading from './loading';

export default combineReducers({
  auth,
  questions,
  users,
  loading,
});
