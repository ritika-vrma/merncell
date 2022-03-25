import React, { Fragment, useEffect, useState } from 'react';
import LoginImage from './Login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, clearErrors } from '../../../actions/studentAction';
import { useAlert } from 'react-alert';
import Loader from '../../Layouts/Loader/Loader';
import Metadata from '../../Layouts/Metadata';

const LoginComponent = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, student, isAuthenticated } = useSelector((state) => state.studentReducer);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginFromSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors);
        }
        if (isAuthenticated) {
            navigate('/account', { replace: true });
        }
    }, [dispatch, error, alert, isAuthenticated, navigate]);


    return (
        <Fragment>
            <Metadata title="Login" />
            {loading ? <Loader /> :
                <div className="container shadow-lg">
                    <div className="row align-items-center">
                        <div className="col-md-5 order-last" style={{ padding: 0 }}><img className="img-fluid" src={LoginImage} alt="Login Now" /></div>
                        <div className="col-md-7 col-lg-7 col-xl-6 col-xxl-6 p-2 p-sm-4 p-md-3 p-lg-4 p-xl-4">
                            <div className="card text-center shadow-lg" style={{ borderRadius: 6, maxWidth: 500 }}>
                                <form onSubmit={loginFromSubmit} className="text-center d-flex justify-content-center align-items-center flex-column gap-5 p-2 p-md-5" style={{ padding: 50 }}>
                                    <div style={{ width: '100%' }}>
                                        <h1>Login</h1>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <div className="input-group shadow-sm"><span className="input-group-text"><i className="fa fa-envelope" /></span>
                                            <input value={loginEmail} onChange={((e) => setLoginEmail(e.target.value))} className="form-control" type="email" name="email" placeholder="Email" required minLength={5} maxLength={30} inputMode="email" style={{ borderRadius: 4 }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <div className="input-group shadow-sm"><span className="input-group-text"><i className="fa fa-lock fs-5" /></span>
                                            <input value={loginPassword} onChange={((e) => setLoginPassword(e.target.value))} className="form-control" type="password" name="password" placeholder="Password" required minLength={8} maxLength={30} style={{ borderRadius: 4 }} />
                                        </div>
                                    </div>
                                    <div className="text-end d-flex justify-content-center align-items-center flex-column" style={{ width: '100%' }}>
                                        <Link className="align-self-end mb-2" to="/password/forgot">Forgot Password ?</Link>
                                        <Link className="text-decoration-none" to="/register" style={{ textShadow: '0.5px 0.5px 1px rgb(183,182,182)' }}><strong>Create A New Account</strong></Link>
                                    </div>
                                    <div><button className="btn btn-primary" type="submit" >Login</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </Fragment>
    );
};

export default LoginComponent;
