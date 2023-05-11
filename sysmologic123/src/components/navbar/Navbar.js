import React from 'react'
import logo from '../img/logo.svg'
import './navbar.css'
import { HiMenuAlt3 } from 'react-icons/hi';
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
                <a href="/">Services</a>
                <a href="/">Projects</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                </div>
                <button>Contact Us</button>
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