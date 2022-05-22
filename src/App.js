import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
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
import Loader from './components/Loader';
import appStyle from './app.module.scss';

export const PotatoSociety = () => {
  return (
    <div className="potato-society">
      <h1>Potato Society</h1>
      <p>
        Welcome to the hidden potato society, not sure how you got here but you
        are truly special.
      </p>
      <p>Seriously.. who chooses to navigate to a potato path?</p>
      <p>Don't worry your secret is safe with me.</p>

      <div className="potato-society-image">
        <img
          src="https://media.giphy.com/media/auJjZlb3h1Ga4/giphy.gif"
          alt="potato"
        />
      </div>

      <p>Thanks for visiting!</p>
      <Link to="/">Return to the dashboard</Link>
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
        <Route path="potato" element={<PotatoSociety />} />
        <Route path="restricted" element={<Restricted />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        <Route path="loader" element={<Loader />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(App);
