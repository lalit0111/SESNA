import React from "react";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";
import sesnaLogoLight from "../assets/sesna-logo-light.png";
import lnmiitLight from "../assets/lnmiit-light.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={sesnaLogoLight}></img>
      <div className="contact-us">
        <div className="email">
          <img src={mailIcon}></img>
          <p>tilwanil818@gmail.com</p>
        </div>
        <p>|</p>
        <div className="phone">
          <img src={phoneIcon}></img>
          <p>+91 9509292182</p>
        </div>
      </div>
      <img src={lnmiitLight}></img>
    </div>
  );
};

export default Footer;
