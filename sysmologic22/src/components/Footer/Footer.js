import React from "react";
import logo from "../img/logo.svg";
import fb from "../img/footer/sm/fb.svg";
import insta from "../img/footer/sm/insta.svg";
import li from "../img/footer/sm/li.svg";
import twit from "../img/footer/sm/twit.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="address">
          <img src={logo} alt="" />
          <p>
            {" "}
            <b> Location: </b> A108 Adam Street <br /> Halifax, Nova ScotiaCanada
          </p>
          <p>
            {" "}
            <b> Phone: </b> +1 4168235930
          </p>
          <p>
            {" "}
            <b> Email: </b> fasihislam@sysmologic.com
          </p>
        </div>
        <div className="useful-links">
          <h1>Useful links</h1>
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#aboutus">About</a>
          <a href="#contactus">Contact</a>
        </div>

        <div>
          <div>
            <h1>Subscribe to our Newsletter</h1>
            <div className="email-input">
              <input type="text" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="icons">
            <img src={fb} alt="" />
            <img src={twit} alt="" />
            <img src={insta} alt="" />
            <img src={li} alt="" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="line"></div>© Copyright Sysmologic 2022
      </div>
    </div>
  );
};

export default Footer;
