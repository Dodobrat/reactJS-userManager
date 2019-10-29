import React, {useReducer} from 'react';
import axios from 'axios';
import UserContext from './userContext';
import userReducer from "./userReducer";
import {
    DELETE_USER,
    UPDATE_USER
} from "../types";

const UserState = (props) => {
    const initialState = {
        user: null
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    //Update User
    const updateUser = (user) => {
        dispatch({
            type: UPDATE_USER,
            payload: user
        });
    };

    //Delete User
    const deleteUser = (id) => {
        dispatch({
            type: DELETE_USER,
            payload: id
        });
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                updateUser,
                deleteUser
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;
