import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Footer from '../layout/Footer';

const Reset = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    reset, error, clearErrors, isAuthenticated,
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
  });

  const { email } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      reset({ email });
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
          <span className="secondary">Reset</span>
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
          <input type="submit" value="Send Reset Link" className="submit" />
          <p className="muted">
                        Already have an account?
            <Link to="/login" className="link">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Reset;
