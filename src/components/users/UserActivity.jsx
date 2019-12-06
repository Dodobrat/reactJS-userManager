import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import LogContext from '../../context/log/logContext';

const UserActivity = () => {
  const authContext = useContext(AuthContext);
  const logContext = useContext(LogContext);

  const { user } = authContext;
  const { logs } = logContext;

  useEffect(() => {
    // eslint-disable-next-line
    }, []);

  return (
    <div className="container">
      <div className="user-bio">
        <h2>About Me</h2>
        <p>{user && user.about ? user.about : 'No Bio found'}</p>
        <br />
        <hr />
      </div>

      <h2 className="user-activity">User Activity Table</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Attempt Date</th>
              <th>Succeeded</th>
              <th>IP</th>
              <th>Login date</th>
              <th>Logout date</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.attempt_date}</td>
                <td>{log.succeeded}</td>
                <td>{log.ip}</td>
                <td>{log.login_date}</td>
                <td>{log.logout_date}</td>
                <td>{log.device}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button type="button" className="current">1</button>
          <button type="button">2</button>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
