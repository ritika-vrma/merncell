import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTER_STUDENT_REQUEST, REGISTER_STUDENT_SUCCESS,
    REGISTER_STUDENT_FAIL, LOAD_STUDENT_REQUEST, LOAD_STUDENT_SUCCESS, LOAD_STUDENT_FAIL,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL
} from "../constants/studentConstants";

export const studentReducer = ((state = { student: {} }, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_STUDENT_REQUEST:
        case LOAD_STUDENT_REQUEST:
        case LOGOUT_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_STUDENT_SUCCESS:
        case LOAD_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                student: action.payload
            };
        case LOGIN_FAIL:
        case REGISTER_STUDENT_FAIL:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                student: null,
                error: action.payload
            };
        case LOAD_STUDENT_FAIL:
        case LOGOUT_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                student: null,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

});

