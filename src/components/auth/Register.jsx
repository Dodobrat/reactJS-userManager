import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Footer from '../layout/Footer';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    register, error, clearAlerts, isAuthenticated,
  } = authContext;

  const [notRobot, setNotRobot] = useState(false);
  const [submitter, setSubmitter] = useState('');

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      clearAlerts();
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

  const handleCaptcha = (value) => {
    setNotRobot(value);
  };

  const allowSubmit = () => {
    setSubmitter(<input type="submit" value="Register" className="submit" />);
  };

  useEffect(() => {
    if (notRobot) {
      allowSubmit();
    }
    // eslint-disable-next-line
  }, [notRobot]);

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
        <p className="form-title">
                    Account
          <span className="secondary">Register</span>
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
          <div className="form-group">
            <ReCAPTCHA sitekey="6LcKs8YUAAAAAH35fJsgUJ5A1A652NBHEA5eAHVR" onChange={handleCaptcha} size="normal" />
          </div>
          {notRobot && submitter}
          <p className="muted additional-actions">
            Already have an account?
            <Link to="/login" className="link">Login</Link>
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

export default Register;
