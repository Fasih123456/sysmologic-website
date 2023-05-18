import React from "react";
import "./Clients.css";
import client from "../img/testimonial/client.svg";
import rightarr from "../img/projects/rightarrow.svg";
import star from "../img/testimonial/star.svg";
const Clients = () => {
  return (
    <div className="clients-con">
      <div className="clients-right">
        <h1>Our Clients Says</h1>
        <div className="reviews">
          <p>
            I love it when a seller or developer is so naturally talented and skilled that you
            always admire their work. It's like a much needed breath of fresh air, far exceeding my
            expectations. Don't hesitate to hire them. I highly recommend Sysmologic to whoever
            wants amazing results!
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
        </div>
        <div className="reviews">
          <p>Great work! Love working with you guys. Very pleasant experience</p>

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
        </div>
        <div className="reviews">
          <p>Sysmologic was great to work with, very responsive and did great work.</p>

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
        </div>
        <div className="reviews">
          <p>
            Great work with quick delivery. They worked on updating and modernizing my e-commerce
            website.
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
        </div>
        <div className="reviews">
          <p>Amazing, everything done just as I asked with minimal direction. Great work!</p>

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
        </div>
        <div className="reviews">
          <p>
            I asked them to copy a website and they did exactly that. The website looked exactly
            like the original and when I asked to modify some components of the website, they did it
            right away without any complaints. They always communicated with me and whenever I had a
            question about their code, they answered it clearly and descriptively. They are very
            friendly, hard-working, dedicated, and easy to work. I would definitely work with them
            again. Thank you for providing the best service!
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
        </div>
        <div className="reviews">
          <p>
            I wanted a website built for my online business. Sysmologic was really quick and
            professional in developing a custom website for my online business. They are open to
            changing project requirements and good at listening to problems
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
        </div>

        {/* <div className="arr">
            <button><svg className='leftarr' width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.73828 2.12646L15.7482 16.1364L1.73828 30.1463" stroke="#D4D4D4" stroke-width="3.23306" stroke-linecap="round"/>
</svg></button>
            <button><img  src={rightarr} alt="" /></button>
            </div> */}
      </div>
    </div>
  );
};

export default Clients;
