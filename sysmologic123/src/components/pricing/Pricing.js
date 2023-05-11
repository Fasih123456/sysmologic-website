import React from 'react'
import './Pricing.css'
import tick from'../img/pricing/tick.svg'
import rightarr from '../img/projects/rightarrow.svg'
const Pricing = () => {
  return (
    <div className='pricing-container'>
        <div className="btn-price">
        <button className='pricing-btn'><img src={rightarr} alt="" className='leftarr-price' /></button>
        <button className='pricing-btn'><img src={rightarr} alt="" className='righarr-price' /></button>
        </div>
        <h1>Choose Your Pricing Plan</h1>
        <p>50% of Payment will be needed up front and the other 50% on delivery. All Prices are in USD. Their are no hidden fees.</p>
        <div className="plan-nav">
            <button>Monthly Plan</button>
            <button>Yearly Plan</button>
        </div>
        <div className="pricing">
        <div className="pricing-con unfocused">
            <h3>Basic Website</h3>
            <div className="price">
            <h2>$100</h2> <h4>/month</h4>
            </div>
            <button className="select">
            Select
            </button>
            <div className="features">
                <div><img src={tick} alt="" /> <p>3 Page Website</p></div>
                <div><img src={tick} alt="" /> <p>Complete W3C Certified HTML</p></div>
                <div><img src={tick} alt="" /> <p>100% Ownership rights</p></div>
                <div><img src={tick} alt="" /> <p>No Monthly fee or any hidden fee</p></div>
                <div><img src={tick} alt="" /> <p>Ready in 48 hours</p></div>
                <div><img src={tick} alt="" /> <p>Free 1 week website support</p></div>
                <div><img src={tick} alt="" /> <p>Get a $25 coupon on your next website</p></div>
            </div>
        </div>
        <div className="pricing-con focused">
            <h3>Modern Website</h3>
            <div className="price">
            <h2>$300</h2> <h4>/month</h4>
            </div>
            <button className="select yellow-select">
            Select
            </button>
            <div className="features">
                <div><img src={tick} alt="" /> <p>10 Page Website</p></div>
                <div><img src={tick} alt="" /> <p>All benifts from basic Package</p></div>
                <div><img src={tick} alt="" /> <p>Contact/Query Form</p></div>
                <div><img src={tick} alt="" /> <p>Dedicated UI/UX designer</p></div>
                <div><img src={tick} alt="" /> <p>Five free stock images</p></div>
                <div><img src={tick} alt="" /> <p>Free Search engine optmization</p></div>
                <div><img src={tick} alt="" /> <p>Free 3 week website support</p></div>
                <div><img src={tick} alt="" /> <p>Get a $50 coupon on your next website</p></div>
            </div>
        </div>
        <div className="pricing-con unfocused">
            <h3>Full Stack Website</h3>
            <div className="price">
            <h2>$700</h2> <h4>/month</h4>
            </div>
            <button className="select">
            Select
            </button>
            <div className="features">
                <div><img src={tick} alt="" /> <p>Unlimited Pages</p></div>
                <div><img src={tick} alt="" /> <p>Dedicated UI/UX designer</p></div>
                <div><img src={tick} alt="" /> <p>Unlimited revisions</p></div>
                <div><img src={tick} alt="" /> <p>Dedicated UI/UX designer</p></div>
                <div><img src={tick} alt="" /> <p>Complete design, development and hosting</p></div>
                <div><img src={tick} alt="" /> <p>Social Media Integration</p></div>
                <div><img src={tick} alt="" /> <p>Recieve source code for your website</p></div>
                <div><img src={tick} alt="" /> <p>Free 5 week website support</p></div>
                <div><img src={tick} alt="" /> <p>Get a $75 coupon on your next website</p></div>
            </div>
        </div>
        
        </div>
        
        
        
    </div>
  )
}

export default Pricing