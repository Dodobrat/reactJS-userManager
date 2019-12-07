import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import LogContext from '../../context/log/logContext';
import LogBox from "../logs/LogBox";

const UserActivity = () => {
  const authContext = useContext(AuthContext);
  const logContext = useContext(LogContext);

  const { user } = authContext;
  const {
    userLogs, currentLog, getUserLogs, getLogById, allPages
  } = logContext;

  const [filter, setFilter] = useState({
    perPage: '5',
    currPage: '1',
  });

  const {
    perPage,
    currPage,
  } = filter;

  useEffect(() => {
    if (user) {
      getUserLogs(user.id, currPage, perPage);
    }
    // eslint-disable-next-line
    }, [user,filter]);

  const handleLogClick = (e) => {
    const log = e.target.dataset.value;
    getLogById(log);
  };

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const changeLogPage = (e) => {
    setFilter({ ...filter, currPage: e.target.innerHTML });
  };

  const displayPages = (pages, curr) => {
    const pagesCount = pages + 1;
    const num = parseInt(curr, 10);
    const rows = [];
    for (let i = 1; i < pagesCount; i += 1) {
      rows.push(
        <button
          type="button"
          key={i}
          onClick={changeLogPage}
          className={(i === num) ? 'active' : ''}
        >
          {i}
        </button>,
      );
    }
    return rows;
  };

  return (
    <div className="container">
      <div className="user-bio">
        <div className="fancy-title">About Me</div>
        <p>{user && user.about ? user.about : 'No Bio found'}</p>
      </div>

      <div className="fancy-title spaced-in">User Activity Table</div>

      <div className="logs-container">
        <div className="logs-card">
          <div className="logs-header">
            <div className="logs-header-row">
              <div className="item">Login Date</div>
              <div className="item">Browser</div>
              <div className="item">IP</div>
              <div className="item">OS</div>
              <div className="item">Device</div>
            </div>
          </div>
          <div className="logs-body">
            {userLogs && userLogs.map((log) => (
                <div className="item-row" key={log.id} onClick={handleLogClick}>
                  <div className="item" data-value={log.id}>{log.loginDate}</div>
                  <div className="item" data-value={log.id}>{log.browser}</div>
                  <div className="item" data-value={log.id}>{log.ip}</div>
                  <div className="item" data-value={log.id}>{log.os}</div>
                  <div className="item" data-value={log.id}>{log.deviceType}</div>
                </div>
            ))}
          </div>
          <div className="logs-actions">
            <div className="logs-filter">
              <label htmlFor="perPage">Per page</label>
              <select name="perPage" id="perPage" value={perPage || ''} onChange={onChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
            </div>
            <div className="pagination">
              <span>Page</span>{displayPages(allPages, currPage)}
            </div>
          </div>
        </div>
      </div>

      {currentLog && <LogBox log={currentLog}/>}

    </div>
  );
};

export default UserActivity;
