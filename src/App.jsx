import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Reset from './components/auth/Reset';
import Dashboard from './components/pages/Dashboard';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import Edit from './components/pages/Edit';
import LogState from './context/log/LogState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <LogState>
      <AlertState>
        <Router>
          <Alerts />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/edit" component={Edit} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot" component={Reset} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </LogState>
  </AuthState>
);

export default App;
