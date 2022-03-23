import axios from 'axios';
import {
    ALL_JOB_REQUEST, ALL_JOB_SUCCESS, ALL_JOB_FAIL, CLEAR_ERRORS, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_DETAILS_FAIL,
    CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS, CREATE_JOB_FAIL
} from "../constants/jobConstants";

export const getAllJobs = (isAuthenticated) => async (dispatch) => {
    try {

        dispatch({
            type: ALL_JOB_REQUEST
        });

        if (isAuthenticated) {
            const { data } = await axios.get("/api/v1/eligible/jobs");
            dispatch({
                type: ALL_JOB_SUCCESS,
                payload: data
            });
        } else {
            const { data } = await axios.get("/api/v1/jobs");

            dispatch({
                type: ALL_JOB_SUCCESS,
                payload: data
            });
        }


    } catch (error) {
        dispatch({
            type: ALL_JOB_FAIL,
            payload: error.response.data.message
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};

export const getJobDetails = (id) => async (dispatch) => {
    try {

        dispatch({
            type: JOB_DETAILS_REQUEST
        });

        const { data } = await axios.get(`/api/v1/job/${id}`);

        dispatch({
            type: JOB_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: JOB_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
};

export const createNewJob = (companyName, companyEmail, companyContactPerson, contactPersonPhone, CompanyWebsite,
    companyAddress, companyAbout, jobRole, candidatesRequired, jobDescription,
    skillsRequired, lastDateToApply, salaryPM, additionalDetails,
    docsRequiredAtInterview, docsRequiredAtJoining, eligibilityArray, classArray,
    jobTypeArray, salaryTypeArray) => async (dispatch) => {
        try {
            dispatch({ type: CREATE_JOB_REQUEST });

            const config = { headers: { "Content-Type": "application/json" } };
            console.log(eligibilityArray);
            const { data } = await axios.post(`/api/v1/jobs/new`, {
                companyName, companyEmail, companyContactPerson, contactPersonPhone, CompanyWebsite,
                companyAddress, companyAbout, jobRole, candidatesRequired, jobDescription,
                skillsRequired, lastDateToApply, salaryPM, additionalDetails,
                docsRequiredAtInterview, docsRequiredAtJoining, eligibility: [...eligibilityArray], class: [...classArray],
                jobType: [...jobTypeArray], salaryType: [...salaryTypeArray]
            }, config);

            dispatch({
                type: CREATE_JOB_SUCCESS,
                payload: data.job
            });


        } catch (error) {
            dispatch({
                type: CREATE_JOB_FAIL,
                payload: error.response.data.message
            });
        }
    };

