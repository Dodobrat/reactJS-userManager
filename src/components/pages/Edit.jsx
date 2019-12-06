import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import UserSidebar from '../users/UserSidebar';
import UserEdit from '../users/UserEdit';
import Footer from '../layout/Footer';

const Edit = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

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
