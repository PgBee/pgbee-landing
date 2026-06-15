import React from "react";
import Logo from "../Assets/PgBee.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/pgbee_in" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com/company/pgbee" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://facebook.com/pgbee.in" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/pgbe.e?utm_source=ig_web_button_share_sheet&igsh=ejlqYWMzZHFvanc5" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#About"><span>About</span></a>
          <a href="#Work"><span>Working</span></a>
          <a href="#Contact"><span>Contact</span></a>
          
        </div>
        <div className="footer-section-columns">
          {/* <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span> */}
        </div>
        <div className="footer-section-columns">
          <a href="/Terms and Conditions.pdf" target="_blank" rel="noopener noreferrer">
            <span>Terms & Conditions</span>
          </a>
          <a href="/Privacy Policy.pdf" target="_blank" rel="noopener noreferrer">
            <span>Privacy Policy</span>
          </a>
          <a href="/Refund Policy.pdf" target="_blank" rel="noopener noreferrer">
            <span>Refund Policy</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
