import React, { useContext } from "react";
import logo from "../assets/logo.png";
import dp from "../assets/dp.png";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
import { LoginContext } from "../LoginContext";

const Header = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(LoginContext);
  console.log(isLoggedIn);
  return (
    <div className="header-container">
      <img src={logo}></img>
      <div className="right-container">
        {isLoggedIn && (
          <div className="profile-container">
            <div className="name-container">
              <img src={dp}></img>
              <p>lalit_818</p>
            </div>
            <div>
              <img
                src={logout}
                onClick={() => {
                  setisLoggedIn(false);
                }}></img>
            </div>
          </div>
        )}
        {isLoggedIn || (
          <div className="button-container">
            <Link className="text-link" to={`login`}>
              <button className="login-btn">Login</button>
            </Link>
            <Link className="text-link" to={`login`}>
              <button className="register-btn">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
