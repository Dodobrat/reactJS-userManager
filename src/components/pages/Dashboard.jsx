import React, { useEffect, useContext } from 'react';
import Footer from '../layout/Footer';
import UserSidebar from '../users/UserSidebar';
import UserActivity from '../users/UserActivity';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
    }, []);

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
