import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LogContext from '../../context/log/logContext';

const LogBox = (props) => {
  const logContext = useContext(LogContext);
  const {
    clearCurrentLog,
  } = logContext;

  const { log } = props;

  return (
    <div className="current-log">
      <div className="card">
        <div className="card-header">
          <span>
Log #
            {log.id}
          </span>
          <button type="button" onClick={clearCurrentLog}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="card-body">
          <p>
Login Date:
            <span>{log.loginDate}</span>
          </p>
          <p>
Browser:
            <span>{log.browser}</span>
          </p>
          <p>
IP:
            <span>{log.ip}</span>
          </p>
          <p>
Operating System:
            <span>{log.os}</span>
          </p>
          <p>
Device Type:
            <span>{log.deviceType}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

LogBox.propTypes = {
  log: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LogBox;
