import React from "react";
import logo from "../assets/logo.png";
import dp from "../assets/dp.png";
import logout from "../assets/logout.svg";

const header = () => {
  return (
    <div className="header-container">
      <img src={logo}></img>
      <div className="right-container">
        <div className="profile-container">
          <div className="name-container">
            <img src={dp}></img>
            <p>lalit_818</p>
          </div>
          <div>
            <img src={logout}></img>
          </div>
        </div>
        <div className="button-container">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default header;
