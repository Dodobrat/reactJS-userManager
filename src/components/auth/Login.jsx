import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Footer from '../layout/Footer';
import setAuthToken from "../../utils/setAuthToken";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    login, error, success, clearAlerts, isAuthenticated, oauthAuthenticate
  } = authContext;

  useEffect(() => {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const oauthToken = params.get('token');
    if (oauthToken){
      localStorage.setItem('token', oauthToken);
      setAuthToken(oauthToken);
      oauthAuthenticate(oauthToken);
    }

    if (error) {
      setAlert(error, 'danger');
      clearAlerts();
    }

    if (success) {
      setAlert(success, 'success');
      clearAlerts();
    }
    // eslint-disable-next-line
    }, [error, success]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="form-container">
        <p className="form-title">
                    Account
          <span className="secondary">Login</span>
        </p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <i className="far fa-envelope-open muted" />
              E-mail
            </label>
            <input type="email" name="email" value={email} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock muted" />
              Password
            </label>
            <input type="password" name="password" value={password} onChange={onChange} required />
          </div>
          <p className="additional-actions-inform">
            <i className="fas fa-key muted" />
            <Link to="/forgot" className="link">
              Forgot Password
            </Link>
          </p>
          <input type="submit" value="Login" className="submit" />
          <p className="muted additional-actions">
            Don&apos;t have an account?
            <Link to="/register" className="link">Register</Link>
          </p>
        </form>
        <div className="social-separator">
                    or
        </div>
        <div className="social-container">
          <a
            href="https://backend-304-coursework.herokuapp.com/api/users/google"
            className="social-link goo"
          >
            <button type="button">
              <img src="/img/google.png" alt="" />
            </button>
          </a>
          <a
            href="https://backend-304-coursework.herokuapp.com/api/users/facebook"
            className="social-link fb"
          >
            <button type="button">
              <i className="fab fa-facebook-f" />
            </button>
          </a>
          <a
            href="https://backend-304-coursework.herokuapp.com/api/users/twitter"
            className="social-link tw"
          >
            <button type="button">
              <i className="fab fa-twitter" />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
