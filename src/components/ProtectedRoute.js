import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authorized, children }) => {
  if (authorized === false) {
    return <Navigate to="/restricted" replace />;
  }

  return children;
};

const mapStateToProps = (state) => {
  return {
    authorized: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
