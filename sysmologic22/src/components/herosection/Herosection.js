import React from 'react'
import './Herosection.css'
import ladyimg from '../img/ldyimg.svg'
const Herosection = () => {
  return (
    <>
    <div className="herosection">
    <div className="left">
        <h1 className='h1-1'>Better Solutions</h1>
        <h1 className='h1-2'>for your Business</h1>
        <p>We are team of professional web developers looking <br /> to modernized your business</p>
        <div className="buttons">
            <a className="btn" href="#pricing">Get Started</a>
            <a className="btn" href="#services" >Learn More</a>
        </div>
    </div>
    <div className="right">
        <img src={ladyimg} alt="" />
    </div>
    </div>
    </>
  )
}

export default Herosection