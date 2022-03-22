import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTER_STUDENT_REQUEST, REGISTER_STUDENT_SUCCESS, 
    REGISTER_STUDENT_FAIL, LOAD_STUDENT_REQUEST, LOAD_STUDENT_SUCCESS, LOAD_STUDENT_FAIL } from "../constants/studentConstants";
import axios from 'axios';


export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/login`, { email, password }, config);
        dispatch({ type: LOGIN_SUCCESS, payload: data.student });

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        });
    }
};

export const registerStudent = (myForm) => async (dispatch) => {

    try {
        dispatch({ type: REGISTER_STUDENT_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post(`/api/v1/register`, myForm, config);
        dispatch({ type: REGISTER_STUDENT_SUCCESS, payload: data.student });

    } catch (error) {
        dispatch({
            type: REGISTER_STUDENT_FAIL,
            payload: error.response.data.message
        });
    }
};

// Load Student
export const loadStudent = () => async (dispatch) => {

    try {
        dispatch({ type: LOAD_STUDENT_REQUEST });

        const { data } = await axios.get(`/api/v1/me`)
        dispatch({ type: LOAD_STUDENT_SUCCESS, payload: data.student });

    } catch (error) {
        dispatch({
            type: LOAD_STUDENT_FAIL,
            payload: error.response.data.message
        });
    }
};


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};