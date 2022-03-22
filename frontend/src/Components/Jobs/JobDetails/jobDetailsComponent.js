import React, { Fragment, useEffect } from 'react';
import './jobDetailsComponent.css';
import { clearErrors, getJobDetails } from '../../../actions/jobAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Loader from '../../Layouts/Loader/Loader';
import { useAlert } from 'react-alert';

const JobDetailsComponent = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const params = useParams();

    const { loading, error, job } = useSelector((state) => state.jobDetailsReducer);
    useEffect(() => {
        if (error) {
            alert.error(error);
            return dispatch(clearErrors());
        }
        dispatch(getJobDetails(params.id));
    }, [dispatch, params.id, alert, error]);

    return (
        <Fragment>
            {loading ? <Loader /> :
                <div className="container">
                    <div className="shadow" style={{ marginBottom: "81px" }}>
                        <div className="row" style={{ margin: "0px" }}>
                            <div className="col">
                                <div className="d-flex justify-content-between" style={{ padding: "5px", marginBottom: "8px" }}>
                                    <h1 className="text-center d-inline">{job.companyName}</h1><a className="link-dark" href="https://www.google.com" target={'_blank'}><i className="fa fa-location-arrow fs-5"></i></a>
                                </div>
                                <div style={{ padding: "5px", background: "var(--bs-yellow)", borderRadius: "4px", marginBottom: "8px" }}><label className="form-label"><strong>About</strong></label>
                                    <p>{job.companyDescription}</p>
                                </div>
                                <div className="shadow" style={{ padding: "5px", borderRadius: "4px", marginBottom: "8px", background: "#3a6b35", color: "#fee715" }}><label className="form-label"><strong>Skills Required</strong></label>
                                    <p>Javascript, NodeJs, MongoDb, Express, ReactJs, CSS, Figma</p>
                                </div>
                                <div style={{ padding: "5px", background: "var(--bs-gray-300)", borderRadius: "4px", marginBottom: "8px" }}><label className="form-label"><strong>Documents Required At Interview</strong></label>
                                    <p>{job.docsRequiredAtInterview}</p>
                                </div>
                                <div style={{ padding: "5px", background: "var(--bs-gray-400)", borderRadius: "4px", marginBottom: "8px" }}><label className="form-label"><strong>Documents Required At Joining</strong></label>
                                    <p>{job.docsRequiredAtJoining}</p>
                                </div>
                                <div style={{ padding: "5px", background: "var(--bs-gray-400)", borderRadius: "4px", marginBottom: "8px" }}><label className="form-label"><strong>Additional Details</strong><br /></label>
                                    <p>{job.additionalDetails}</p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div style={{ marginBottom: "8px", padding: "5px" }}>
                                    <h1>{job.jobRole}</h1>
                                </div>
                                <div className="text-end"><span style={{ margin: "5px" }}>Last Date To Apply</span><span className="text-danger" style={{ margin: "5px" }}><strong>25/04/2022</strong></span></div>
                                <div style={{ marginBottom: "8px", padding: "5px" }}>
                                    <div className="row">
                                        <div className="col" style={{ background: "var(--bs-gray-300)" }}>
                                            <div style={{ marginBottom: "8px", padding: "5px" }}><label className="form-label"><strong>Job Type</strong></label>
                                                <div className="row">
                                                    {job.jobType && job.jobType.map((element, i) => (
                                                        <div key={i} className="col"><span>{element}</span></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{ background: "#fee715", color: "#101820" }}>
                                            <div style={{ marginBottom: "8px", padding: "5px" }}><label className="form-label"><strong>Salary / Stipend</strong><br /></label>
                                                <h3>Rs. {job.salaryPM}<span>/month</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "8px", padding: "5px" }}>
                                    <div className="row">
                                        <div className="col" style={{ background: "#fee715", color: "rgb(16,24,32)" }}>
                                            <div style={{ marginBottom: "8px", padding: "5px" }}><label className="form-label"><strong>Eligibility</strong></label>
                                                <div className="row">
                                                    {job.eligibility && job.eligibility.map((element, i) => (
                                                        <div key={i} className="col"><span>{element}</span></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{ background: "var(--bs-gray-300)" }}>
                                            <div style={{ marginBottom: "8px", padding: "5px" }}><label className="form-label"><strong>Class Required</strong></label>
                                                <div className="row">
                                                    {job.class && job.class.map((element, i) => (
                                                        <div key={i} className="col"><span>{element}</span></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "8px", padding: "5px" }}><label className="form-label"><strong>Job Description</strong></label>
                                    <p>{job.jobDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="text-center" style={{ padding: "8px" }}>
                                    <div className="form-check form-check-inline"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">I Agree to the {'\u00A0'},<a href="www.google.com">terms & Conditions</a></label></div>
                                </div>
                                <div className="text-center" style={{ padding: "8px" }}><button className="btn btn-outline-primary" type="button" style={{ width: "121.5px" }}>Apply Now</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default JobDetailsComponent;
