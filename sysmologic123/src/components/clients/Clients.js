import React from 'react'
import './Clients.css'
import client from '../img/testimonial/client.svg'
import rightarr from '../img/projects/rightarrow.svg'
import star from '../img/testimonial/star.svg'
const Clients = () => {
  return (
    <div className='clients-con'>
        <div className="clients-left">
            <img src={client} alt="" />
        </div>
        <div className="clients-right">
            <h1>Our Clients Says</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ullamcorper fames ut at duis vel duis amet, <br /> tortor. Pellentesque vel duis cras hac </p>
            <p className="c-name">
            Jeena Bae
            </p>
            <p className="c-job">
            Analyst
            </p>
            <div className="rating">
            <div className="stars">
                <img src={star} alt="*" />
                <img src={star} alt="*" />
                <img src={star} alt="*" />
                <img src={star} alt="*" />
                <img src={star} alt="*" />

            </div>
            <p>5</p>
            </div>
            <div className="arr">
            <button><svg className='leftarr' width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.73828 2.12646L15.7482 16.1364L1.73828 30.1463" stroke="#D4D4D4" stroke-width="3.23306" stroke-linecap="round"/>
</svg></button>
            <button><img  src={rightarr} alt="" /></button>
            </div>
        </div>
        
    </div>
  )
}

export default Clients