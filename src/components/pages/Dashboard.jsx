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
    loadUser, error, success, clearAlerts,
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
