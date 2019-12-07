import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ALERTS,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DELETE_SUCCESS,
  DELETE_FAIL,
  COUNTRIES_LOADED,
  COUNTRIES_ERROR,
  GET_COUNTRY,
  GET_COUNTRY_ERROR, RESTORE_SUCCESS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case COUNTRIES_LOADED:
      return {
        ...state,
        countries: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        userCountry: null,
        error: action.payload,
      };
    case DELETE_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        userCountry: null,
        success: action.payload,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        user: (state.user.id === action.payload.id ? action.payload : state.user),
        success: action.payload.success,
      };
    case RESTORE_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        userCountry: action.payload,
      };
    case UPDATE_FAIL:
    case DELETE_FAIL:
    case COUNTRIES_ERROR:
    case GET_COUNTRY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ALERTS:
      return {
        ...state,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};
