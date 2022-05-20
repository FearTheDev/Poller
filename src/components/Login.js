import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { MdLock } from 'react-icons/md';
import loginStyle from './login.module.scss';

const Login = ({ dispatch, usersArray, isLoggedIn, user, failureMessage }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username;
    const password = e.target.password;

    if (!password.value) {
      setError('Missing required field: password');
      return;
    }

    setError(null);
    console.log('credentials: ', {
      username: username.value,
      password: password.value,
    });

    const credentials = {
      username: username.value,
      password: password.value,
    };

    dispatch(login(credentials.username, credentials.password)).then(() =>
      navigate('/dashboard')
    );

    if (failureMessage) {
      setError(failureMessage);
    }
  };

  if (isLoggedIn) {
    navigate('/dashboard');
  }

  return (
    <div className={loginStyle.container}>
      <form className={loginStyle.form} onSubmit={handleSubmit}>
        <h1>
          <MdLock /> SIGN IN
        </h1>
        <h2>SELECT YOUR ACCOUNT FROM THE DROP DOWN</h2>
        <div className={loginStyle.errorContainer}>
          {error && <p className={loginStyle.error}>{error}</p>}
        </div>
        <select name="username">
          {usersArray.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
        <input name="password" type="password" placeholder="password" />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

const mapStateToProps = ({ users, auth }) => {
  return {
    usersArray: Object.keys(users).map((user) => user),
    isLoggedIn: auth.isLoggedIn,
    user: auth.user,
    failureMessage: auth.failureMessage,
  };
};

export default connect(mapStateToProps)(Login);
