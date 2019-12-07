import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
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
  DELETE_FAIL, COUNTRIES_LOADED, COUNTRIES_ERROR, GET_COUNTRY, GET_COUNTRY_ERROR,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
    success: null,
    countries: null,
    userCountry: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Load Countries
  const loadCountries = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/api/users/countries', config);
      // console.log(res);
      dispatch({
        type: COUNTRIES_LOADED,
        payload: res.data.countries,
      });
    } catch (err) {
      dispatch({
        type: COUNTRIES_ERROR,
      });
    }
  };

  // Get Country
  const getCountry = async (id) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(`/api/users/country/${id}`, config);
      dispatch({
        type: GET_COUNTRY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_COUNTRY_ERROR,
      });
    }
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.error,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error,
      });
    }
  };

  // Update User
  const updateUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/api/users/${user.id}`, user, config);

      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: UPDATE_FAIL,
        payload: err.response.data.error,
      });
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.delete(`/api/users/${id}`, config);

      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data.success,
      });
    } catch (err) {
      dispatch({
        type: DELETE_FAIL,
        payload: err.response.data.error,
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  // Clear Errors
  const clearAlerts = () => {
    dispatch({
      type: CLEAR_ALERTS,
    });
  };

  const { children } = props;

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        success: state.success,
        countries: state.countries,
        userCountry: state.userCountry,
        register,
        login,
        logout,
        loadUser,
        updateUser,
        loadCountries,
        deleteUser,
        clearAlerts,
        getCountry
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default AuthState;