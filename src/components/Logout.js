import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/auth';
import logoutStyle from './logout.module.scss';

const Logout = (props) => {
  const navigate = useNavigate();
  const { dispatch } = props;

  useEffect(() => {
    dispatch(logout()).then(() => {
      setTimeout(() => {
        navigate('/');
      }, 500);
    });
  }, [navigate, dispatch]);

  return (
    <div className={logoutStyle.container}>
      <h1>You are now logging out..</h1>
      <p>
        Thanks for using our poll application, be sure to check back frequently.
      </p>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn,
    user: auth.user,
  };
};

export default connect(mapStateToProps)(Logout);
