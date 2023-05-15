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
                <a href="#services" onClick={ () => { onHide()} } >Services</a>
                <a href="#projects" onClick={ () => { onHide()} } >Projects</a>
                <a href="#aboutus" onClick={ () => { onHide()} } >About</a>
                <a href="#contactus" onClick={ () => { onHide()} } >Contact</a>
                
                <a href="#contactus" onClick={ () => { onHide()} }  className='nav-btn1'>Contact Us</a>
            </div>
    </div>
  )
}

export default Sidebar