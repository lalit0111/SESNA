import { useRef, useEffect, React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import fb from "../assets/fb-icon.svg";
import googleIcon from "../assets/google.svg";
import { LoginContext } from "../LoginContext";
import DatePicker from "../components/DatePicker";
import { UserSignupURL } from "../Api";
import { UserLoginURL } from "../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/LoadingPrimary";

const LoginSignup = () => {
  const navigate = useNavigate();
  const { setisLoggedIn, setLoggedInUser } = useContext(LoginContext);

  //states
  const [isLoading, setIsLoading] = useState(false);
  const [signinUser, setSignInUser] = useState({
    personal_detail: {
      name: "",
      phone: "",
      location: {
        address: "",
        city: "",
        state: "",
      },
      dob: "",
      email: "",
      password: "",
    },
    is_public: "true",
    is_admin: "false",
  });

  const [loginUser, setLoginUser] = useState({ email: "", password: "" });

  //handlers
  const handleSignupClick = (e) => {
    ref.current.classList.add("right-panel-active");
  };

  const handleLoginClick = (e) => {
    ref.current.classList.remove("right-panel-active");
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(loginUser);
    UserLogin(loginUser);
  };

  const handleSignupButtonClick = (e) => {
    setIsLoading(true);
    e.preventDefault();
    UserSignup(signinUser);
  };

  //API
  const UserSignup = (user) => {
    axios
      .post(UserSignupURL, user)
      .then((response) => {
        setLoggedInUser(response.data);
        console.log(response);
        setisLoggedIn(true);
        setIsLoading(false);
        navigate("/");
      })
      .catch();
  };

  const UserLogin = (user) => {
    axios
      .post(UserLoginURL, user)
      .then((response) => {
        console.log(response);
        setLoggedInUser(response.data);
        setisLoggedIn(true);
        setIsLoading(false);
        navigate("/");
      })
      .catch();
  };

  //component
  const ref = useRef(null);
  return (
    <div className="login-signup-container">
      <div class="container" id="container" ref={ref}>
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <img class="fab fa-facebook-f" src={fb}></img>
              </a>
              <a href="#" class="social">
                <img class="fab fa-google-plus-g" src={googleIcon}></img>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                signinUser.personal_detail.name = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => {
                signinUser.personal_detail.phone = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => {
                signinUser.personal_detail.location.address = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={(e) => {
                signinUser.personal_detail.location.city = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={(e) => {
                signinUser.personal_detail.location.state = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            <p>Date Of Birth</p>
            <DatePicker
              class="date-picker"
              signinUser={signinUser}
              setSignInUser={setSignInUser}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                signinUser.personal_detail.email = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                signinUser.personal_detail.password = e.target.value;
                setSignInUser(signinUser);
              }}
            />
            {isLoading && <Loading />}
            {isLoading || (
              <button onClick={handleSignupButtonClick}>Sign Up</button>
            )}
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social">
                <img class="fab fa-facebook-f" src={fb}></img>
              </a>
              <a href="#" class="social">
                <img class="fab fa-google-plus-g" src={googleIcon}></img>
              </a>
            </div>
            <span>or use your account</span>
            <input
              name="loginEmail"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                loginUser.email = e.target.value;
                setLoginUser(loginUser);
              }}
            />
            <input
              name="loginPassword"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                loginUser.password = e.target.value;
                setLoginUser(loginUser);
              }}
            />
            <a href="#">Forgot your password?</a>
            {/* <Link className="text-link" to="/"> */}
            {isLoading && <Loading />}
            {isLoading || <button onClick={handleSigninClick}>Sign In</button>}
            {/* </Link> */}
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={handleSignupClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default LoginSignup;
