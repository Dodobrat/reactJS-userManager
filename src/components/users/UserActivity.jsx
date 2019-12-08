import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import LogContext from '../../context/log/logContext';
import LogBox from '../logs/LogBox';
import Logs from '../logs/Logs';

const UserActivity = () => {
  const authContext = useContext(AuthContext);
  const logContext = useContext(LogContext);

  const { user } = authContext;
  const { currentLog } = logContext;

  return (
    <div className="container">
      <div className="user-bio">
        <div className="fancy-title">About Me</div>
        <p>{user && user.about ? user.about : 'No Bio found'}</p>
      </div>
      {user && <Logs user={user} />}
      {(currentLog && user) && <LogBox log={currentLog} />}
    </div>
  );
};

export default UserActivity;
