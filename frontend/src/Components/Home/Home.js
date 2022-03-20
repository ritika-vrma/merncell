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
    console.log(jobsCount);
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors);
        }
        dispatch(getAllJobs());
    }, [dispatch, error, alert]);


    return (
        <Fragment >
            {loading ? <Loader /> :
                <Fragment >
                    <Metadata title="D.A.V. Placement Cell" />

                    <div className="container">
                        <div>
                            <div className="row justify-content-center align-items-center">
                                {jobs && jobs.map((job) => (
                                    <JobComponent job={job} key={job._id} />
                                ))}

                            </div>
                        </div>
                    </div>
                </Fragment>
            }


        </Fragment>
    );
};

export default Home;