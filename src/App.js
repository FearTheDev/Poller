import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Landing from './components/Landing';
import Nav from './components/Nav';
import ProtectedRoute from './components/ProtectedRoute';
import appStyle from './app.module.scss';

export const FourOhFour = () => {
  return (
    <div className="four-oh-four">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

const App = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
    document.title = 'Poller - A simple poll application';
  }, [dispatch]);

  return (
    <div className={appStyle.container}>
      <Nav />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(App);
