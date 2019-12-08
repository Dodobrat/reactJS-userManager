import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LogContext from '../../context/log/logContext';

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext);

  const { getLogById } = logContext;

  const handleLogClick = (e) => {
    const selectedLog = e.target.dataset.value;
    getLogById(selectedLog);
  };

  return (
    <button type="button" className="item-row" onClick={handleLogClick}>
      <div className="item" data-value={log.id}>{log.loginDate}</div>
      <div className="item" data-value={log.id}>{log.browser}</div>
      <div className="item" data-value={log.id}>{log.ip}</div>
      <div className="item" data-value={log.id}>{log.os}</div>
      <div className="item" data-value={log.id}>{log.deviceType}</div>
    </button>
  );
};

LogItem.propTypes = {
  log: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LogItem;
