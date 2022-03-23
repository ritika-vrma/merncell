import React, { Fragment, useEffect } from 'react';
import JobComponent from './JobComponent';
import Metadata from '../Layouts/Metadata';
import { clearErrors, getAllJobs } from '../../actions/jobAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Layouts/Loader/Loader';
import { useAlert } from 'react-alert';


const Home = () => {

    const alert = useAlert();

    const dispatch = useDispatch();

    const { loading, error, jobs, jobsCount } = useSelector((state) => state.jobReducer);
    const { isAuthenticated } = useSelector((state) => state.studentReducer);
    useEffect(() => {
        if (error) {
            alert.error(error);
            return dispatch(clearErrors);
        }
        dispatch(getAllJobs(isAuthenticated));

    }, [dispatch, error, alert, isAuthenticated]);


    return (
        <Fragment >
            {loading ? <Loader /> :
                <Fragment >
                    <Metadata title="D.A.V. Placement Cell" />

                    <div className="container">
                        <div>
                            <div className="row justify-content-center align-items-center">
                                {jobs && jobs.map((job) => {
                                    const lastDateToApply = new Date(job.lastDateToApply).toDateString();
                                    return (<JobComponent job={job} key={job._id} lastDateToApply={lastDateToApply} />);
                                })}

                            </div>
                        </div>
                    </div>
                </Fragment>
            }


        </Fragment>
    );
};

export default Home;