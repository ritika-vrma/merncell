import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerStudent, clearErrors } from '../../../actions/studentAction';
import { useAlert } from 'react-alert';
import Loader from '../../Layouts/Loader/Loader';
import { createNewJob } from '../../../actions/jobAction';
import Metadata from '../../Layouts/Metadata';

const CreateJob = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const [classFor, setClassFor] = useState({
        BCA: "",
        BBA: "",
        BCOM: "",
        BSC: "",
        BSCIT: ""
    });
    const [eligibleFor, setEligibileFor] = useState({
        firstYear: "",
        secondYear: "",
        thirdYear: "",
        graduate: "",
    });
    const [jobType, setJobType] = useState({
        internship: "",
        fullTime: "",
        partTime: "",
    });
    const [salaryType, setSalaryType] = useState({
        stipend: "",
        salary: "",
        none: "",
    });
    const [details, setDetails] = useState({
        companyName: "",
        companyEmail: "",
        companyContactPerson: "",
        contactPersonPhone: "",
        CompanyWebsite: "",
        companyAddress: "",
        companyAbout: "",
        jobRole: "",
        candidatesRequired: "",
        jobDescription: "",
        skillsRequired: "",
        lastDateToApply: "",
        salaryPM: "",
        additionalDetails: "",
        docsRequiredAtInterview: "",
        docsRequiredAtJoining: "",

        eligibility: "",
        class: "",
        jobType: "",
        salaryType: "",

    });

    const { companyName, companyEmail, companyContactPerson, contactPersonPhone, CompanyWebsite,
        companyAddress, companyAbout, jobRole, candidatesRequired, jobDescription,
        skillsRequired, lastDateToApply, salaryPM, additionalDetails,
        docsRequiredAtInterview, docsRequiredAtJoining } = details;

    const classSelected = (e) => {

        if (e.target.checked) {
            setClassFor({ ...classFor, [e.target.name]: e.target.value });
        } else {
            setClassFor({ ...classFor, [e.target.name]: "" });
        }

    };

    const eligibleSelected = (e) => {
        if (e.target.checked) {
            setEligibileFor({ ...eligibleFor, [e.target.name]: e.target.value });
        } else {
            setEligibileFor({ ...eligibleFor, [e.target.name]: "" });
        }

    };
    const jobTypeSelected = (e) => {
        if (e.target.checked) {
            setJobType({ ...jobType, [e.target.name]: e.target.value });
        } else {
            setJobType({ ...jobType, [e.target.name]: "" });
        }

    };
    const salaryTypeSelected = (e) => {
        if (e.target.checked) {
            setSalaryType({ ...salaryType, [e.target.name]: e.target.value });
        } else {
            setSalaryType({ ...salaryType, [e.target.name]: "" });
        }

    };

    const registerData = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };


    const registerFormSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append("companyName", companyName);
        myForm.append("companyEmail", companyEmail);
        myForm.append("companyContactPerson", companyContactPerson);
        myForm.append("contactPersonPhone", contactPersonPhone);
        myForm.append("CompanyWebsite", CompanyWebsite);
        myForm.append("companyAddress", companyAddress);
        myForm.append("companyAbout", companyAbout);
        myForm.append("jobRole", jobRole);
        myForm.append("candidatesRequired", candidatesRequired);
        myForm.append("jobDescription", jobDescription);
        myForm.append("skillsRequired", skillsRequired);
        myForm.append("lastDateToApply", lastDateToApply);
        myForm.append("salaryPM", salaryPM);
        myForm.append("additionalDetails", additionalDetails);
        myForm.append("docsRequiredAtInterview", docsRequiredAtInterview);
        myForm.append("docsRequiredAtJoining", docsRequiredAtJoining);

        const eligibilityArray = Object.values(eligibleFor).filter((item) => {
            return item !== "";
        });
        const classArray = Object.values(classFor).filter((item) => {
            return item !== "";
        });
        const jobTypeArray = Object.values(jobType).filter((item) => {
            return item !== "";
        });
        const salaryTypeArray = Object.values(salaryType).filter((item) => {
            return item !== "";
        });


        myForm.append("eligibility", eligibilityArray);
        myForm.append("class", classArray);
        myForm.append("jobType", jobTypeArray);
        myForm.append("salaryType", salaryTypeArray);

        dispatch(createNewJob(
            companyName, companyEmail, companyContactPerson, contactPersonPhone, CompanyWebsite,
            companyAddress, companyAbout, jobRole, candidatesRequired, jobDescription,
            skillsRequired, lastDateToApply, salaryPM, additionalDetails,
            docsRequiredAtInterview, docsRequiredAtJoining, eligibilityArray, classArray,
            jobTypeArray, salaryTypeArray

        ));

        // console.log(myForm.get("companyName"));
        // console.log(myForm.get("companyEmail"));
        // console.log(myForm.get("companyContactPerson"));
        // console.log(myForm.get("contactPersonPhone"));
        // console.log(myForm.get("CompanyWebsite"));
        // console.log(myForm.get("companyAddress"));
        // console.log(myForm.get("companyAbout"));
        // console.log(myForm.get("jobRole"));
        // console.log(myForm.get("candidatesRequired"));
        // console.log(myForm.get("jobDescription"));
        // console.log(myForm.get("skillsRequired"));
        // console.log(myForm.get("lastDateToApply"));
        // console.log(myForm.get("salaryPM"));
        // console.log(myForm.get("additionalDetails"));
        // console.log(myForm.get("docsRequiredAtInterview"));
        // console.log(myForm.get("docsRequiredAtJoining"));
        // console.log(myForm.get("eligibility"));
        // console.log(myForm.get("class"));
        // console.log(myForm.get("jobType"));
        // console.log(myForm.get("salaryType"));

    };


    return (
        <Fragment>
            <Metadata title="Post Job" />
            <div className="container">
                <div className="row g-0 text-center d-flex">
                    <div className="col">
                        <form onSubmit={registerFormSubmit} className="shadow px-xs-0 px-sm-3 px-md-3 px-lg-0 pb-3" style={{ background: '#fffdfd' }} method="get" title="Register With Us.">
                            <h1 className="display-3 text-center text-secondary mb-3">Register with us</h1>
                            <div>
                                <div className="row justify-content-center align-items-center mb-2">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start py-sm-2 py-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="companyName"><strong>Organization Name</strong><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="text" placeholder="Enter Your Organization Name" onChange={registerData} value={companyName} name="companyName" required minLength={4} maxLength={30} title="Enter Organization Name" /></div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="companyEmail"><strong>Organization Email</strong><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="email" placeholder="Enter Email" onChange={registerData} value={companyEmail} name="companyEmail" required inputMode="email" multiple title="Organization Email" /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="companyContactPerson" title="Contact Person"><strong>Contact Person Name</strong><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="text" placeholder="Enter Contact Person Name" onChange={registerData} value={companyContactPerson} name="companyContactPerson" required minLength={4} maxLength={30} title="Contact Person Name" /></div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="contactPersonPhone"><strong>Phone</strong><br /><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="tel" placeholder="Enter Phone" onChange={registerData} value={contactPersonPhone} name="contactPersonPhone" required minLength={6} maxLength={11} inputMode="tel" title="Contact Person Phone" /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="companyWebsite"><strong>Webstite</strong><br /><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="url" placeholder="Enter Website URL" onChange={registerData} value={CompanyWebsite} name="CompanyWebsite" required inputMode="url" title="Company Website" /></div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="companyAddress"><strong>Address</strong><br /><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="text" placeholder="Enter Company Adress" onChange={registerData} value={companyAddress} name="companyAddress" required /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-12 col-lg-10 col-xl-10 col-xxl-10 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="companyAbout"><strong>About</strong><br /><span>*</span></label>
                                        <textarea className="shadow-sm form-control p-sm-2 p-md-1" placeholder="Tell Us About your organization" onChange={registerData} value={companyAbout} name="companyAbout" /></div>
                                </div>
                            </div>
                            <div>
                                <div className="row justify-content-center">
                                    <div className="col-6" style={{ padding: '10px 0px' }}>
                                        <h2 className="fs-2 text-center">Post Job</h2>
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start py-sm-2 py-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="jobRole"><strong>Job Role</strong><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="text" placeholder="Enter Job Role" onChange={registerData} value={jobRole} name="jobRole" required minLength={4} maxLength={30} /></div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="candidatesRequired"><strong>Candidate Required</strong><span>*</span></label>
                                        <input className="form-control p-sm-2 p-md-1" type="number" placeholder="Candidate Required" onChange={registerData} value={candidatesRequired} name="candidatesRequired" required /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-12 col-lg-10 col-xl-10 col-xxl-10 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="jobDescription"><strong>Job Description</strong><br /><span>*</span></label>
                                        <textarea className="shadow-sm form-control p-sm-2 p-md-1" placeholder="Enter Job Description in detail." onChange={registerData} value={jobDescription} name="jobDescription" /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label d-block" htmlFor="class"><strong>Class</strong><span>*</span></label>
                                        <div className="row">
                                            <div className="col-10 col-sm-10 col-md-10 col-lg-12 col-xl-10 col-xxl-12">
                                                <div className="form-check form-check-inline">
                                                    <input onChange={classSelected} name="BCA" value={"BCA"} className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4">BCA</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={classSelected} name="BCOM" value={"BCOM"} className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" htmlFor="formCheck-5">BCOM</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={classSelected} name="BBA" value={"BBA"} className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" htmlFor="formCheck-6">BBA</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={classSelected} name="BSC" value={"BSC"} className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" htmlFor="formCheck-7">BSC</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={classSelected} name="BSCIT" value={"BSC IT"} className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" htmlFor="formCheck-9">BSC IT</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label d-block" htmlFor="Eligibility"><strong>Eligibility</strong><span>*</span></label>
                                        <div className="row">
                                            <div className="col-10 col-sm-10 col-md-10 col-lg-12 col-xl-11 col-xxl-12">
                                                <div className="form-check form-check-inline">
                                                    <input onChange={eligibleSelected} name="firstYear" value={"1st year"} className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">1st year</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={eligibleSelected} name="secondYear" value={"2nd year"} className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">2nd year</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={eligibleSelected} name="thirdYear" value={"3rd year"} className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">3rd year</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={eligibleSelected} name="graduate" value={"Graduate"} className="form-check-input" type="checkbox" id="formCheck-11" /><label className="form-check-label" htmlFor="formCheck-11">Graduate</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label d-block"><strong>Job Type</strong><span>*</span></label>
                                        <div className="row">
                                            <div className="col-10 col-sm-10 col-md-10 col-lg-12 col-xl-10 col-xxl-12">
                                                <div className="form-check form-check-inline">
                                                    <input onChange={jobTypeSelected} name="internship" value={"Internship"} className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" htmlFor="formCheck-8">Internship</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={jobTypeSelected} name="fullTime" value={"Full Time"} className="form-check-input" type="checkbox" id="formCheck-10" /><label className="form-check-label" htmlFor="formCheck-10">Full Time</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={jobTypeSelected} name="partTime" value={"Part Time"} className="form-check-input" type="checkbox" id="formCheck-12" /><label className="form-check-label" htmlFor="formCheck-12">Part Time</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label d-block"><strong>Salary Type</strong><span>*</span></label>
                                        <div className="row">
                                            <div className="col-10 col-sm-10 col-md-10 col-lg-12 col-xl-10 col-xxl-12">
                                                <div className="form-check form-check-inline">
                                                    <input onChange={salaryTypeSelected} name="stipend" value={"Stipend"} className="form-check-input" type="checkbox" id="formCheck-15" /><label className="form-check-label" htmlFor="formCheck-15">Stipend</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={salaryTypeSelected} name="salary" value={"Salary"} className="form-check-input" type="checkbox" id="formCheck-16" /><label className="form-check-label" htmlFor="formCheck-16">Salary</label></div>
                                                <div className="form-check form-check-inline">
                                                    <input onChange={salaryTypeSelected} name="none" value={"None"} className="form-check-input" type="checkbox" id="formCheck-16" /><label className="form-check-label" htmlFor="formCheck-16">None</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2 p-sm-2 p-md-1">
                                    <div className="col-11 col-sm-9 col-md-8 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="skillsRequired"><strong>Skill Required</strong><br /><span>*</span></label>
                                        <textarea className="shadow-sm form-control p-sm-2 p-md-1" placeholder="Enter the Skills Required from candidates." onChange={registerData} value={skillsRequired} name="skillsRequired" required /></div>
                                    <div className="col-11 col-sm-3 col-md-4 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="lastDateToApply"><strong>Last Date to Apply</strong><br /><span>*</span></label>
                                        <input className="form-control p-sm-2 p-md-1" onChange={registerData} value={lastDateToApply} name="lastDateToApply" type="datetime-local" required /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start py-sm-2 py-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="salaryPM"><strong>Salary Per Month</strong><span>*</span></label>
                                        <input className="shadow-sm form-control p-sm-2 p-md-1" type="text" placeholder="Enter Salary Per Month ex: 25000" onChange={registerData} value={salaryPM} name="salaryPM" required /></div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="additionalDetails"><strong>Additional Details</strong></label>

                                        <textarea className="form-control" placeholder="Any Additional Details" onChange={registerData} value={additionalDetails} name="additionalDetails" /></div>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2">
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start py-sm-2 py-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="docsRequiredAtInterview"><strong>Documents Required At Interview</strong></label>

                                        <textarea className="form-control" placeholder="Any Documnets Required at interview time" onChange={registerData} value={docsRequiredAtInterview} name="docsRequiredAtInterview" required /></div>
                                    <div className="col-11 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 text-start p-sm-2 p-md-1 mb-3 mb-sm-0"><label className="form-label p-sm-2 p-md-1 d-none d-sm-flex" htmlFor="docsRequiredAtJoining"><strong>Documents Required At Joining</strong></label>

                                        <textarea className="form-control" placeholder="Any Documnets Required at Joining time" onChange={registerData} value={docsRequiredAtJoining} name="docsRequiredAtJoining" required /></div>
                                </div>
                            </div>
                            <div><button className="btn btn-outline-success text-uppercase fw-bold text-center shadow-sm" type="submit" style={{ width: '227.675px', borderRadius: 20, marginTop: 15, marginRight: 0, marginBottom: 10 }}>submit</button></div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default CreateJob;
