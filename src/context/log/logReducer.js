import {
  GET_LOGS,
  GET_LOGS_ERROR,
  GET_LOG,
  GET_LOG_ERROR, CLEAR_CURRENT_LOG,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        userLogs: action.payload.data,
        allPages: action.payload.numberOfPages,
      };
    case GET_LOG:
      return {
        ...state,
        currentLog: action.payload,
      };
    case CLEAR_CURRENT_LOG:
      return {
        ...state,
        currentLog: action.payload,
      };
    case GET_LOG_ERROR:
    case GET_LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
