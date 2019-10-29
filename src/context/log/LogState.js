import React, {useReducer} from 'react';
import axios from 'axios';
import LogContext from './logContext';
import logReducer from "./logReducer";
import {
    FILTER_LOGS
} from "../types";

const LogState = (props) => {

    const initialState = {
        logs: [
            {
                id:1,
                attempt_date: '31.01.2019 21:22:23',
                succeeded: 'No',
                ip: '192.168.0.1',
                login_date: '31.01.2019 21:22:23',
                logout_date: '31.01.2019 21:22:23',
                device: 'iPhone',
            },
            {
                id:2,
                attempt_date: '31.01.2019 21:22:23',
                succeeded: 'Yes',
                ip: '192.168.0.1',
                login_date: '31.01.2019 21:22:23',
                logout_date: '31.01.2019 21:22:23',
                device: 'Samsung',
            },
            {
                id:3,
                attempt_date: '31.01.2019 21:22:23',
                succeeded: 'No',
                ip: '192.168.0.1',
                login_date: '31.01.2019 21:22:23',
                logout_date: '31.01.2019 21:22:23',
                device: 'Desktop',
            },
        ],
        filtered: null
    };

    const [state, dispatch] = useReducer(logReducer, initialState);

    //Filter Logs
    const filterLogs = (text) => {
        dispatch({ type: FILTER_LOGS, payload: text});
    };

    return (
        <LogContext.Provider
            value={{
                logs: state.logs,
                filterLogs
            }}>
            {props.children}
        </LogContext.Provider>
    );
};

export default LogState;
