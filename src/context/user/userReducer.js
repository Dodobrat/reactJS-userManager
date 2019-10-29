import {
    UPDATE_USER,
    DELETE_USER
} from "../types";

export default (state, action) => {
    switch(action.type) {
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        default:
            return state;
    }
}
