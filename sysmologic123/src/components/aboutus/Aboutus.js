import React from 'react'
import './Aboutus.css'
import aboutus from '../img/aboutus/aboutus.svg'
import live from '../img/aboutus/live.svg'
import support from '../img/aboutus/support.svg'
import security from '../img/aboutus/security.svg'
const Aboutus = () => {
  return (
    <div className='container-about' id='aboutus'>
        <div className="about-left">
            <img src={aboutus} alt="" />
        </div>
        <div className="about-right">
            <h1>ABOUT US</h1>
            <p>Sysmologic was founded by a young computer science student in hopes of paying his bills. This company has now rapidly expanded and has created over 100 Busniess projects with a 100% statisfcation rate.</p>
            <div className="benefits">
                <div className="ben">
                    <div className="about-img" style={{backgroundColor: "#D6F4F0"}}>     
                    <img src={support} alt="" style={{width:"3.8rem",height:"3.8rem"}} />
                    </div>
                    <div className="text-about">
                        <h2 style={{color: "#2A9D8F"}}>Life Time Customer Premium Support</h2>
                        <p>As a client of Sysmologic you recieve life time customer support on all projects created by us.</p>
                    </div>
                </div>
                <div className="ben">
                    <div className="about-img" style={{backgroundColor: "#FBE7E2"}}>     
                    <img src={live} alt="" style={{width:"4.2rem",height:"4.2rem"}} />
                    </div>
                    <div className="text-about">
                        <h2 style={{color: "#E76F51"}}>Live Tracking Of Website Creation</h2>
                        <p>Our clients can see their website develop in real time using a link which we will provide.</p>
                    </div>
                </div>
                <div className="ben">
                    <div className="about-img" style={{backgroundColor: "#FBF5E6"}}>     
                    <img src={security} alt="" style={{width:"3.2rem",height:"3.2rem"}} />
                    </div>
                    <div className="text-about">
                        <h2 style={{color: "#E9C46A"}}>Maximum Security for your sensitive information</h2>
                        <p>All sensity database is encrypted with 128 bit. 128Bit encruption is the most modren encryption which is pratically impossible to break</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Aboutus