import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Footer from '../layout/Footer';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    login, error, clearErrors, isAuthenticated,
  } = authContext;

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
    }, [error]);

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
        <h1 className="form-title">
                        Account
          <span className="secondary">Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <i className="far fa-envelope-open muted" />
              {' '}
                                E-mail
            </label>
            <input type="email" name="email" value={email} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock muted" />
              {' '}
                                Password
            </label>
            <input type="password" name="password" value={password} onChange={onChange} required />
          </div>
          <div className="form-group">
            <p>
              <i className="fas fa-key muted" />
              {' '}
              <Link to="/forgot" className="link">
                {' '}
                                    Forgot
                                    Password
              </Link>
            </p>
          </div>
          <input type="submit" value="Login" className="submit" />
          <p className="muted">
                            Don&apos;t have an account?
            <Link to="/register" className="link">Register</Link>
          </p>
        </form>
        <div className="social-separator">
                        or
        </div>
        <Link to="https://backend-304-coursework.herokuapp.com/api/auth/google" className="social-link goo">
          <button type="button">
                            Sign in with Google
          </button>
        </Link>
        <Link
          to="https://backend-304-coursework.herokuapp.com/api/auth/facebook"
          className="social-link fb"
        >
          <button type="button">
                            Sign in with Facebook
          </button>
        </Link>
        <Link to="/test" className="social-link tw">
          <button type="button">
                            Sign in with Twitter
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Login;
