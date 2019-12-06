import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = (props) => {
  const { component } = props;
  const Component = component;
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      props={props}
      render={() => (!isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component props={props} />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
