import React from "react";
import arrow from "../img/services/arrow.svg";
import "./Services.css";
import buisness from "../img/services/buisness.svg";
import support from "../img/services/support.svg";
import access from "../img/services/access.svg";
import fullstack from "../img/services/fullstack.svg";
import system from "../img/services/system.svg";
import order from "../img/services/order.svg";
const Services = () => {
  return (
    <div className="services-container" id="services">
      <h1>OUR SERVICES</h1>
      <p>
        We offer a wide range of services including working with full stack websites and REST API's.
        We also offer hosting options and maintenance contracts.
      </p>
      <div className="services">
        <div className="services-child">
          <img src={buisness} alt="" />
          <div className="text-service">
            <h2>Small Bussniess Websites</h2>
            <p>
              We Offer 1 page websites for small busniess who simply want to show case their
              products in a nice way.
            </p>
          </div>
        </div>
        <div className="services-child">
          <img src={support} alt="" />
          <div className="text-service">
            <h2>Premium Customer Support</h2>
            <p>
              With an average response time of less than 1 hour we offer quick help to all our
              clients
            </p>
          </div>
        </div>
        <div className="services-child">
          <img src={access} alt="" />
          <div className="text-service">
            <h2>Website Accessibility</h2>
            <p>
              All our websites adhere to the WCAG 2.0 Level A accessibility, which enables people
              with disabilites to visit your website and is legally required for some canadian
              busniess
            </p>
          </div>
        </div>
        <div className="services-child">
          <img src={fullstack} alt="" />
          <div className="text-service">
            <h2>Full Stack Websites</h2>
            <p>
              We create full stack websites using the MERN(MongoDB, Express, React and NodeJS)
              stack. SQL databases can also be used if the clients needs
            </p>
          </div>
        </div>
        <div className="services-child">
          <img src={order} alt="" />
          <div className="text-service">
            <h2>Purchase Order Systems and Payment Systems</h2>
            <p>
              We offer creating purchase orders in websites and integration of 3rd party payment
              systems such as Stripe
            </p>
          </div>
        </div>
        <div className="services-child">
          <img src={system} alt="" />
          <div className="text-service">
            <h2>Content management system</h2>
            <p>
              We offer a content Management system so that users can easily drag and drop their
              content instead of learning how to code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
