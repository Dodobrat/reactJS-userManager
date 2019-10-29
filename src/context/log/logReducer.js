import {
    FILTER_LOGS
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case FILTER_LOGS:
            return {
                ...state,
                filtered: state.logs.filter(log => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return log.device.match(regex) || log.ip.match(regex);
                })
            };
        default:
            return state;
    }
}
