import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Landing from './components/Landing';
import Leaderboard from './components/Leaderboard';
import Nav from './components/Nav';
import ProtectedRoute from './components/ProtectedRoute';
import { NotFound } from './components/NotFound';
import Restricted from './components/Restricted';
import PotatoSociety from './components/PotatoSociety';
import PollPage from './components/PollPage';
import Loader from './components/Loader';
import appStyle from './app.module.scss';

const App = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
    document.title = 'Landing - Poller';
  }, [dispatch]);

  return (
    <div className={appStyle.container}>
      <Nav />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/potato" element={<PotatoSociety />} />
        <Route path="/restricted" element={<Restricted />} />
        <Route
          path="/polls/:id"
          element={
            <ProtectedRoute>
              <PollPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        <Route path="/loader" element={<Loader />} />
        <Route path="/missing" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(App);
