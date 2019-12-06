import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';

const UserSidebar = (props) => {
  const { editing } = props;
  const authContext = useContext(AuthContext);

  const [classes, setClasses] = useState('expanded');
  const [collapsed, setCollapsed] = useState(false);

  const {
    isAuthenticated, logout, loadUser, user,
  } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
    }, []);

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
            <p className="user-card-item name">{(user && (user.first_name !== null || user.last_name !== null)) ? `${user.first_name} ${user.last_name}` : 'Guest'}</p>
          </div>
        </div>
        <p className="user-item email">
                    Email:
          <span>{user && user.email}</span>
        </p>
        {(user && user.country_id !== null) ? (
          <p className="user-item nationality">
                        Nationality:
            <span>{user.country_id}</span>
          </p>
        ) : ''}
        {(user && user.birth_date !== null) ? (
          <p className="user-item birthday">
                        Birth date:
            <span>{user.birth_date}</span>
          </p>
        ) : ''}
        <div className="user-actions">
          {editing ? (
            <Link to="/">
              <button type="button" className="edit">
                <i className="fas fa-home" />
                                Home
              </button>
            </Link>
          ) : (
            <Link to="/edit">
              <button type="button" className="edit">
                <i className="fas fa-edit" />
                                Edit
              </button>
            </Link>
          )}
          <button type="button" className="logout" onClick={onLogout}>
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
          {' '}
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
