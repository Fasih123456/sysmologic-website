import React from "react";
import address from "../img/form/address.svg";
import email from "../img/form/email.svg";
import phone from "../img/form/phone.svg";
import donut from "../img/donut.png";

import "./Form.css";
const Form = (props) => {
  const { form } = props;
  return (
    <div className="form-container" id="contactus">
      <img src={donut} alt="donut" className="donut" />
      <div className="form-left">
        <h1>Got A Project Or A Partnership In Mind?</h1>
        <div className="contact-info">
          <div className="contact-img">
            <img src={address} alt="" />
          </div>
          <p>Halifax, Nova Scotia Canada</p>
        </div>
        <div className="contact-info">
          <div className="contact-img">
            <img src={email} alt="" />
          </div>
          <p>fasihul@sysmologic.com</p>
        </div>
        <div className="contact-info">
          <div className="contact-img">
            <img src={phone} alt="" />
          </div>
          <p>+1 4168235930</p>
        </div>
      </div>
      <div className="form-right">
        <div className="form-row first-row">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="Tell about your project"
            value={`I am interested in ${form} Package,`}
          />
        </div>
        <div className="btn-div">
          <button className="send">Send a message</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
