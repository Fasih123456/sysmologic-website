import React from 'react'
import './Sidebar.css'
import logo from '../img/logo.svg'
import { RiCloseFill } from 'react-icons/ri';
const Sidebar = (props) => {
    const {onHide,hide} = props;
  return (
    <div className='sidebar' style={{ right: hide === false ? '-100vw' : '0' }}>
        <div className="close">
            <RiCloseFill className='closeicon' onClick={ () => { onHide()} }/>
            
        </div>
        <div className="side-con">
        <img src={logo} alt="" />
        
        
                
                <a href="/">Home</a>
                <a href="/">Services</a>
                <a href="/">Projects</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                
                <button>Contact Us</button>
            </div>
    </div>
  )
}

export default Sidebar