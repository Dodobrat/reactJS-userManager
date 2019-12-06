import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const UserEdit = () => {
  const authContext = useContext(AuthContext);

  const { user, updateUser, deleteUser } = authContext;

  const [updates, setUpdates] = useState({
    username: '',
    firstName: '',
    lastName: '',
    about: '',
    avatar: '',
    birthDate: '',
    countryId: '',
    email: '',
  });

  useEffect(() => {
    if (user !== null) {
      setUpdates(user);
    }
    // eslint-disable-next-line
    }, []);

  const {
    username,
    firstName,
    lastName,
    about,
    avatar,
    birthDate,
    countryId,
    email,
  } = updates;

  const onChange = (e) => {
    setUpdates({ ...updates, [e.target.name]: e.target.value });
  };

  const onDelete = () => {
    deleteUser(user.id);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(updates);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">
                    Account
          <span className="secondary">Update</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <i className="far fa-user muted" />
              {' '}
                            Username
            </label>
            <input type="text" name="username" value={username || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">
              <i className="fas fa-file-signature muted" />
              {' '}
                            First Name
            </label>
            <input type="text" name="firstName" value={firstName || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              <i className="fas fa-file-signature muted" />
              {' '}
                            Last Name
            </label>
            <input type="text" name="lastName" value={lastName || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="about">
              <i className="fas fa-info-circle muted" />
              {' '}
                            About Me
            </label>
            <textarea name="about" rows="8" value={about || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="countryId">
              <i className="fas fa-globe-americas muted" />
              {' '}
                            Nationality
            </label>
            <input type="text" name="countryId" value={countryId || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">
              <i className="fas fa-calendar-alt muted" />
              {' '}
                            Birth Date
            </label>
            <input type="date" name="birthDate" value={birthDate || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">
              <i className="fas fa-file-image muted" />
              {' '}
                            Avatar
            </label>
            <input type="text" name="avatar" value={avatar || ''} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="far fa-envelope-open muted" />
              {' '}
                            E-mail
            </label>
            <input type="email" name="email" value={email || ''} onChange={onChange} required />
          </div>
          <input type="submit" value="Save Changes" className="submit" onClick={onSubmit} />
          <Link className="submit cancel" to="/">Cancel Changes</Link>
          <button type="button" className="submit delete" onClick={onDelete}>Delete Account</button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
