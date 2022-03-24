import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import Loader from '../../Layouts/Loader/Loader';
import { logout } from '../../../actions/studentAction';

const Navbar = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, isAuthenticated } = useSelector((state) => state.studentReducer);

  const logoutMe = () => {
    if (error) {
      alert.error(error);
    }
    if (isAuthenticated) {
      alert.success("You have Logged Out Successfully.");
      dispatch(logout());
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid"><a className="navbar-brand" href="www.google.com">Brand</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="www.google.com">First Item</a></li>
            <li className="nav-item"><Link className="nav-link" to="/new/job">Post Job</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><a className="nav-link" style={{ cursor: "pointer" }} onClick={(e) => { logoutMe(); }}>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;