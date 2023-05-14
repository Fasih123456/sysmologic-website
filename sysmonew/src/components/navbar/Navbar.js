import React from 'react'
import logo from '../img/logo.svg'
import './navbar.css'
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const {onHide} = props;
  return (
    <>
    <div>
        <div className="nav-container">
            <img src={logo} alt="" />
            <div className="nav-headings">
                <div className="anchors">
                <a href="/">Home</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#aboutus">About</a>
                <a href="#contactus">Contact</a>
                </div>
                <a href="#contactus" className='nav-btn'>Contact Us</a>
            </div>
            <div className="hammenu">
              <HiMenuAlt3 className='hamburger' onClick={ () => { onHide()} }/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar