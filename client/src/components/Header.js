import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import dp from "../assets/dp.png";
import logout from "../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import { UserLogoutURL } from "../Api";
import axios from "axios";
import Loading from "./LoadingSecondary";

const Header = () => {
  const { isLoggedIn, setisLoggedIn, loggedInUser } = useContext(LoginContext);
  console.log(isLoggedIn);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  //API
  const UserLogout = (token) => {
    axios
      .post(
        UserLogoutURL,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setisLoggedIn(false);
        navigate("/login");
      })
      .catch();
  };

  return (
    <div className="header-container">
      <img src={logo}></img>
      <div className="right-container">
        {isLoggedIn && (
          <div className="profile-container">
            <Link className="text-link" to={`profile`}>
              <div className="name-container">
                <img src={dp}></img>
                <p>lalit_818</p>
              </div>
            </Link>
            <div>
              {isLoading && <Loading />}
              {isLoading || (
                <img
                  src={logout}
                  onClick={() => {
                    setIsLoading(true);
                    UserLogout(loggedInUser.token);
                  }}></img>
              )}
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
