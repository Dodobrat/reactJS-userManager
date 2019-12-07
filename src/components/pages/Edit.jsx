import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import UserSidebar from '../users/UserSidebar';
import UserEdit from '../users/UserEdit';
import Footer from '../layout/Footer';
import AlertContext from '../../context/alert/alertContext';

const Edit = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    user, error, success, clearAlerts,
  } = authContext;

  useEffect(() => {
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
      <UserSidebar editing />
      <div className="main-wrapper">
        {user && <UserEdit />}
        <Footer />
      </div>
    </div>
  );
};

export default Edit;
