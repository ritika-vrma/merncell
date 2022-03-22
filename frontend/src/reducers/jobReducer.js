import { ALL_JOB_REQUEST, ALL_JOB_SUCCESS, ALL_JOB_FAIL, CLEAR_ERRORS, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_DETAILS_FAIL, changeComponent } from "../constants/jobConstants";

export const jobReducer = ((state = { jobs: [] }, action) => {
    switch (action.type) {
        case ALL_JOB_REQUEST:
            return {
                loading: true,
                jobs: []
            };
        case ALL_JOB_SUCCESS:
            return {
                loading: false,
                jobs: action.payload.jobs,
                jobsCount: action.payload.jobsCount
            };
        case ALL_JOB_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            console.log("Yes error");
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
});
export const jobDetailsReducer = ((state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            };
        case JOB_DETAILS_SUCCESS:
            return {
                loading: false,
                job: action.payload.job
            };
        case JOB_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
});
// export const changeLoginSignUpReducer = ((state = { component: "login" }, action) => {
//     switch (action.type) {
//         case changeComponent:
//             return {
//                 component: action.payload
//             };

//         default:
//             return state;
//     }
// });