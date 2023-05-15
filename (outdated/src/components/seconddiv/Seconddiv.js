import React from 'react'
import './Seconddiv.css'
import client from '../img/seconddiv/clients.svg'
import support from '../img/seconddiv/support.svg'
import projects from '../img/seconddiv/projects.svg'
import worker from '../img/seconddiv/worker.svg'
const Seconddiv = () => {
  return (
    <div className='container'>
        <div className="flexcon">
            <img src={client} alt="" />
            <div className="text">
                <h1>67</h1>
                <p>Happy Clients</p>
            </div>
        </div>
        <div className="flexcon">
            <img src={projects} alt="" />
            <div className="text">
                <h1>128</h1>
                <p>Projects</p>
            </div>
        </div>
        <div className="flexcon">
            <img src={support} alt="" />
            <div className="text">
                <h1>24/7</h1>
                <p>Hours of Support</p>
            </div>
        </div>
        <div className="flexcon">
            <img src={worker} alt="" />
            <div className="text">
                <h1>1</h1>
                <p>Hard Workers</p>
            </div>
        </div>
        
    </div>
  )
}

export default Seconddiv