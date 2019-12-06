import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Footer from '../layout/Footer';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    register, error, clearErrors, isAuthenticated,
  } = authContext;

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
    }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger');
    } else if (password.length < 6) {
      setAlert('Passwords must be at least 6 characters', 'danger');
    } else {
      register({
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
          <span className="secondary">Register</span>
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
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">
              <i className="fas fa-lock muted" />
              {' '}
                            Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
            />
          </div>
          <input type="submit" value="Register" className="submit" />
          <p className="muted">
                        Already have an account?
            {' '}
            {' '}
            <Link to="/login" className="link">Login</Link>
          </p>
        </form>
        <div className="social-separator">
                    or
        </div>
        <Link to="/test" className="social-link goo">
          <button type="button">
                        Sign up with Google
          </button>
        </Link>
        <Link to="/test" className="social-link fb">
          <button type="button">
                        Sign up with Facebook
          </button>
        </Link>
        <Link to="/test" className="social-link tw">
          <button type="button">
                        Sign up with Twitter
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Register;
