import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid"><a className="navbar-brand" href="www.google.com">Brand</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="www.google.com">First Item</a></li>
            <li className="nav-item"><a className="nav-link" href="www.google.com">Second Item</a></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;