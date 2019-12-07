import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const UserEdit = () => {
  const authContext = useContext(AuthContext);

  const {
    user, updateUser, deleteUser, loadCountries, countries,
  } = authContext;

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

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (user !== null) {
      setUpdates(user);
    }
    loadCountries();
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
    provider,
  } = updates;

  const onChange = (e) => {
    setUpdates({ ...updates, [e.target.name]: e.target.value });
  };

  const onDeleteAttempt = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  if (modal) {
    const modalOverlay = document.querySelector('.modal-overlay');
    window.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  const onDelete = (e) => {
    e.preventDefault();
    deleteUser(user.id);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(updates);
  };

  return (
    <>
      <div className="container">
        <div className="user-form-container">
          <p className="user-form-title">
                        Account
            <span className="secondary">Update</span>
          </p>
          <form onSubmit={onSubmit}>
            <div className="form-group g-4">
              <label htmlFor="username">
                <i className="far fa-user muted" />
                                Username
              </label>
              <input type="text" name="username" value={username || ''} onChange={onChange} />
            </div>
            <div className="form-group g-4">
              <label htmlFor="firstName">
                <i className="fas fa-file-signature muted" />
                                First Name
              </label>
              <input type="text" name="firstName" value={firstName || ''} onChange={onChange} />
            </div>
            <div className="form-group g-4">
              <label htmlFor="lastName">
                <i className="fas fa-file-signature muted" />
                                Last Name
              </label>
              <input type="text" name="lastName" value={lastName || ''} onChange={onChange} />
            </div>
            <div className="form-group g-12">
              <label htmlFor="about">
                <i className="fas fa-info-circle muted" />
                                About Me
              </label>
              <textarea name="about" rows="8" value={about || ''} onChange={onChange} />
            </div>
            <div className="form-group g-4">
              <label htmlFor="countryId">
                <i className="fas fa-globe-americas muted" />
                                              Nationality
              </label>
              {countries
                ? (
                  <select name="countryId" id="countryId" value={countryId || ''} onChange={onChange}>
                    {countries.map((country) => (
                      <option
                        key={country.id}
                        value={country.id}
                      >
                        {country.abbreviation}
|
                        {country.name}
                      </option>
                    ))}
                  </select>
                ) : 'nope'}
            </div>
            <div className="form-group g-4">
              <label htmlFor="birthDate">
                <i className="fas fa-calendar-alt muted" />
                                Birth Date
              </label>
              <input type="date" name="birthDate" value={birthDate || ''} onChange={onChange} />
            </div>
            <div
              className={!provider ? 'form-group g-4' : 'form-group g-4 deactivated'}
              title={!provider ? '' : 'Not allowed to change due to login with social media'}
            >
              <label htmlFor="email">
                <i className="far fa-envelope-open muted" />
                                E-mail
              </label>
              <input type="email" name="email" value={email || ''} onChange={onChange} required />
            </div>
            <div className="form-group g-12">
              <label htmlFor="avatar">
                <i className="fas fa-file-image muted" />
                                Avatar
              </label>
              <input type="text" name="avatar" value={avatar || ''} onChange={onChange} />
            </div>
            <button type="submit" className="submit" onClick={onSubmit}>
              <i className="fas fa-save" />
                            Save Changes
            </button>
            <Link className="cancel" to="/">
              <button type="button" className="submit">
                <i className="fas fa-ban" />
                                Cancel Changes
              </button>
            </Link>
            <div className="form-danger-zone">
              <div className="fancy-title danger-title">Danger Zone</div>
              <button type="button" className="danger-btn delete" onClick={onDeleteAttempt}>
                <i className="fas fa-trash-alt" />
                                Delete Account
              </button>
              <span className="danger-note">If you delete your account, you will have to reactivate it next time you login!</span>
            </div>
          </form>
        </div>
      </div>
      <div className={modal ? 'modal-overlay' : 'modal-overlay hide'}>
        <div className="modal">
          <div className="modal-header">
            <span>Confirm deletion</span>
            <button type="button" onClick={closeModal}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to perform this operation?</p>
            <form onSubmit={onDelete}>
              <input type="submit" value="Delete Account" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
