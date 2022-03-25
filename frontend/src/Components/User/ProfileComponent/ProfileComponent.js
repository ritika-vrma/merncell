import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../../Layouts/Metadata';

const ProfileComponent = ({ isAuthenticated, loading, student }) => {
    let dateOfBirth;
    let createdAt;
    if (student) {
        dateOfBirth = new Date(student.dateOfBirth).toDateString();
        createdAt = new Date(student.createdAt).toDateString();
    }

    return (
        <Fragment>
            <Metadata title="Profile" />
            {!loading && isAuthenticated &&
                <div className="container p-0 p-md-4">
                    <div className="shadow-lg" style={{ margin: 20 }}>
                        <div className="row justify-content-center align-items-center" style={{ padding: 10, margin: 0, background: '#303b51', color: 'rgb(255,255,255)' }}>
                            <div className="col-md-8 col-lg-7 col-xl-7 col-xxl-7">
                                <div>
                                    <h1 className="text-capitalize" style={{ letterSpacing: 2 }}>{`${student.firstName} ${student.lastName}`}</h1>
                                </div>
                                <div>
                                    <p>{student.objective}</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 col-xxl-3 order-first order-md-last mb-md-0 mb-3">
                                <div className="text-center"><img className="img-fluid" src={student.avatar.url} alt="/Profile.png" style={{ marginBottom: 19, borderRadius: '100%' }} />
                                    <div><button className="btn btn-success" type="button"><i className="fa fa-edit" /><Link className="text-decoration-none" to='/profile/update' style={{ color: 'rgb(255,255,255)' }}>Edit Profile</Link></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center" style={{ color: 'rgb(255,255,255)', padding: 10, margin: 0, background: '#1d273b' }}>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-envelope" style={{ marginBottom: 5 }} /><span style={{ marginBottom: 5 }}>{student.email}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-phone-square" style={{ marginBottom: 5 }} /><span style={{ marginBottom: 5 }}>{student.phone}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-map-marker" style={{ marginBottom: 5 }} /><span style={{ marginBottom: 5 }}>{student.address}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-calendar" style={{ marginBottom: 5 }} /><span style={{ marginBottom: 5 }}>{dateOfBirth}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-calendar" style={{ marginBottom: 5 }} /><span style={{ marginBottom: 5 }}>{student.classRollNo}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-calendar" style={{ marginBottom: 5 }} /><span style={{ marginBottom: 5 }}>{student.universityRollno}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-link" style={{ marginBottom: 5 }} /><a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)', marginBottom: 5 }}>{student.linkedInURL ? student.linkedInURL : "Not added"}</a></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5" style={{ marginBottom: 5 }}>
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><i className="fa fa-link" /><a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>{student.socialLink ? student.socialLink : "Not added"}</a></div>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ margin: 0, padding: 10, background: 'var(--bs-gray-500)' }}>
                            <div className="col-xl-5" style={{ marginBottom: 5 }}>
                                <div>
                                    <div className="shadow-sm">
                                        <div style={{ padding: 10, background: '#1d273b', opacity: 1, borderRadius: 4, marginBottom: 2 }}>
                                            <h4 className="d-inline" style={{ textShadow: '1px 1px 1px rgb(61,61,61)', color: 'rgb(255,255,255)' }}><strong>Education</strong></h4>
                                        </div>
                                        <div style={{ background: '#303b51', color: 'rgb(255,255,255)', borderRadius: 4, marginBottom: 5 }}>
                                            <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 0 }}><span className="text-uppercase"><strong>{student.classIn}</strong></span><span className="text-capitalize"><strong>{student.year}</strong></span></div>
                                            <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 5 }}><span className="fs-6">Class 10:</span><span className="text-capitalize"><strong>{student.class10}</strong></span></div>
                                            <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 5 }}><span className="fs-6">Class 12:</span><span className="text-capitalize"><strong>{student.class12}</strong></span></div>
                                            <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 5 }}><span className="fs-6">Graduation:</span><span className="text-capitalize"><strong>{student.graduation}</strong></span></div>
                                        </div>
                                    </div>
                                    <div className="shadow-sm">
                                        <div style={{ padding: 10, background: '#1d273b', opacity: 1, borderRadius: 4, marginBottom: 2 }}>
                                            <h4 className="d-inline" style={{ textShadow: '1px 1px 1px rgb(61,61,61)', color: 'rgb(255,255,255)' }}><strong>Skills</strong><br /></h4>
                                        </div>
                                        <div style={{ background: '#303b51', color: 'rgb(255,255,255)', borderRadius: 4, marginBottom: 5 }}>
                                            <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 0, marginBottom: 5 }}>
                                                <p>{student.skills}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow-sm">
                                        <div style={{ padding: 10, background: '#1d273b', opacity: 1, borderRadius: 4, marginBottom: 2 }}>
                                            <h4 className="d-inline" style={{ textShadow: '1px 1px 1px rgb(61,61,61)', color: 'rgb(255,255,255)' }}><strong>Projects</strong><br /></h4>
                                        </div>
                                        <div style={{ background: '#303b51', color: 'rgb(255,255,255)', borderRadius: 4 }}>
                                            <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 0 }}>
                                                <p>{student.projects ? student.projects : "Not added"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="shadow-sm">
                                    <div style={{ padding: 10, background: '#303b51', opacity: 1, borderRadius: 4, marginBottom: 2 }}>
                                        <h4 className="d-inline" style={{ textShadow: '1px 1px 1px rgb(61,61,61)', color: 'rgb(255,255,255)' }}><strong>About Me</strong></h4>
                                    </div>
                                    <div style={{ background: '#1d273b', color: 'rgb(255,255,255)', borderRadius: 4, marginBottom: 5 }}>
                                        <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 0 }}>
                                            <p>{student.about}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow-sm">
                                    <div style={{ padding: 10, background: '#303b51', opacity: 1, borderRadius: 4, marginBottom: 2 }}>
                                        <h4 className="d-inline" style={{ textShadow: '1px 1px 1px rgb(61,61,61)', color: 'rgb(255,255,255)' }}><strong>Work Experience</strong></h4>
                                    </div>
                                    <div style={{ background: '#1d273b', color: 'rgb(255,255,255)', borderRadius: 4, marginBottom: 5 }}>
                                        <div className="d-flex align-items-center gap-2" style={{ padding: 10, paddingBottom: 0 }}>
                                            <p>{student.experience ? student.experience : "Fresher or not added"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center" style={{ color: 'rgb(255,255,255)', padding: 10, margin: 0, background: '#1d273b' }}>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                                <div className="fs-6 d-flex gap-2 align-items-center" style={{ marginBottom: 5 }}><span style={{ marginBottom: 5 }}>{`Joined On : ${createdAt}`}</span></div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-xxl-5 d-flex gap-4" style={{ marginBottom: 5 }}>
                                <div style={{ marginBottom: 8 }}><button className="btn btn-danger" type="button"><i className="fa fa-edit" />Change Password</button></div>
                                <div style={{ marginBottom: 5 }}><button className="btn btn-warning" type="button">My Applied</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </Fragment>
    );
};

export default ProfileComponent;