import React from 'react';
import './Footer.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='navbar'>
      <div >
        <ul className='item'>
          <li><a href="/">Footer</a></li>
          <li><a href="/">Footer</a></li>
          <li><a href="/">Footer</a></li>
        </ul>
      </div>
      <div><h1 className='item'><a href="/">D.A.V. Placement Cell</a></h1></div>
      <div>
        <ul className='item'>
          <li><a href="/">Footer</a></li>
          <li><a href="/">Footer</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer