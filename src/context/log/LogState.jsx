import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import LogContext from './logContext';
import logReducer from './logReducer';
import {
  CLEAR_CURRENT_LOG,
  GET_LOG, GET_LOG_ERROR,
  GET_LOGS, GET_LOGS_ERROR,
} from '../types';

const LogState = (props) => {
  const initialState = {
    userLogs: null,
    currentLog: null,
    allPages: null,
  };

  const [state, dispatch] = useReducer(logReducer, initialState);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Get Logs
  const getUserLogs = async (userId, currentPage, perPage) => {
    try {
      const res = await axios.get(`https://backend-304-coursework.herokuapp.com/api/auth/logs/${userId}?curr=${currentPage}&pp=${perPage}`, config);
      dispatch({
        type: GET_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_LOGS_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  // Get Log by id
  const getLogById = async (id) => {
    try {
      const res = await axios.get(`https://backend-304-coursework.herokuapp.com/api/auth/log/${id}`, config);
      dispatch({
        type: GET_LOG,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_LOG_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  const clearCurrentLog = async () => {
    dispatch({
      type: CLEAR_CURRENT_LOG,
    });
  };

  const { children } = props;

  return (
    <LogContext.Provider
      value={{
        userLogs: state.userLogs,
        currentLog: state.currentLog,
        allPages: state.allPages,
        getUserLogs,
        getLogById,
        clearCurrentLog,
      }}
    >
      {children}
    </LogContext.Provider>
  );
};

LogState.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LogState;
