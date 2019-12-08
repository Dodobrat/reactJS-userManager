import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LogContext from '../../context/log/logContext';
import LogItem from './LogItem';

const Logs = ({ user }) => {
  const logContext = useContext(LogContext);
  const {
    userLogs, getUserLogs, allPages,
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
    <>
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
              <LogItem key={log.id} log={log} />
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
              <span>Page</span>
              {displayPages(allPages, currPage)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Logs.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Logs;
