import React, { useEffect, useContext } from 'react';
import Footer from '../layout/Footer';
import UserSidebar from '../users/UserSidebar';
import UserActivity from '../users/UserActivity';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Dashboard = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    loadUser, user, error, success, clearAlerts, restoreUser,
  } = authContext;

  useEffect(() => {
    loadUser();
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

  const handleRestoreUser = (e) => {
    e.preventDefault();
    restoreUser(user.id);
    loadUser();
  };

  if (user && user.deleted === 1) {
    return (
      <div className="main-wrapper">
        <form onSubmit={handleRestoreUser} className="restore-user">
          <p>Your account has been deleted!</p>
          <p>Would you like to restore it?</p>
          <input type="submit" value="Restore Account" />
        </form>
      </div>
    );
  }
  return (
    <div className="content-wrapper">
      <UserSidebar editing={false} />
      <div className="main-wrapper">
        <UserActivity />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
