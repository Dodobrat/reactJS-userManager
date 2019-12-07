import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';

const UserSidebar = (props) => {
  const { editing } = props;
  const authContext = useContext(AuthContext);

  const [classes, setClasses] = useState('expanded');
  const [collapsed, setCollapsed] = useState(false);

  const {
    isAuthenticated, logout, user, userCountry,
  } = authContext;

  const onLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      setClasses('expanded');
    } else {
      setClasses('collapsed');
    }
  };

  const authLinks = (
    <>
      <div className="user-details">
        <div className="user-card">
          <img
            src={user && user.avatar ? `${user.avatar}` : 'https://picsum.photos/id/238/200/200'}
            alt=""
            className="avatar"
          />
          <div className="user-card-details">
            {(user && user.username !== null)
              ? <p className="user-card-item username">{user && user.username}</p> : ''}
            <p className="user-card-item name">{(user && (user.firstName !== null || user.lastName !== null)) ? `${user.firstName} ${user.lastName}` : 'Guest'}</p>
          </div>
        </div>
        <p className="user-item email">
                    Email:
          <span>{user && user.email}</span>
        </p>
        {(user && user.countryId && userCountry) ? (
          <p className="user-item nationality">
                        From:
            <span>{userCountry.name}</span>
          </p>
        ) : ''}
        {(user && user.birthDate !== null) ? (
          <p className="user-item birthday">
                        Birth date:
            <span>{user.birthDate}</span>
          </p>
        ) : ''}
        <div className="user-actions">
          {editing ? (
            <Link to="/">
              <button type="button" className="action-btn def">
                <i className="fas fa-home" />
                                Home
              </button>
            </Link>
          ) : (
            <Link to="/edit">
              <button type="button" className="action-btn def">
                <i className="fas fa-edit" />
                                Edit
              </button>
            </Link>
          )}
          <button type="button" className="logout action-btn" onClick={onLogout}>
            <i className="fas fa-power-off" />
                        Logout
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className={`side-wrapper ${classes}`}>
      <button type="button" className="sidebar-trigger" onClick={toggleSidebar}>
        {collapsed ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
      </button>
      <p className="sidebar-title">
        <Link to="/">
          User
          <span>Manager</span>
        </Link>
      </p>
      {isAuthenticated ? authLinks : <p>No user</p>}
    </div>
  );
};

UserSidebar.propTypes = {
  editing: PropTypes.bool.isRequired,
};

export default UserSidebar;
