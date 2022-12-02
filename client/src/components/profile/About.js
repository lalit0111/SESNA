import React, { useState, useRef } from "react";
// import "../styles/About.scss";
import { SlNotebook, SlPhone, SlCalender, SlLocationPin } from "react-icons/sl";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const About = () => {
  const textarea1 = useRef(null);
  const textarea2 = useRef(null);

  const [details, setDetails] = useState(
    "I'm a owner of Wayne Industries by day but the moment night dawns I become Batman!"
  );
  const [address, setAddress] = useState(
    "BH1 LNMIIT, Jamdoli, Jaipur Rajasthan - 80301"
  );

  const handleClick1 = (e) => {
    textarea1.current.focus();
    setDetails(e.target.value);
  };
  const handleClick2 = (e) => {
    textarea2.current.focus();
    setAddress(e.target.value);
  };

  return (
    <div className="about-section">
      <h2 className="header">About</h2>
      <div className="first-col">
        <div className="content">
          <SlNotebook size={30} color="#14B8A6" className="ikons" />
          <textarea
            className="detailsinput"
            value={details}
            ref={textarea1}
            spellCheck={false}
          />
          {/* I'm a owner of Wayne Industries by day but the moment night dawns i
            become Batman!
          </input> */}
          <button onClick={handleClick1}>
            <BiEdit className="editBtn" size={25} color="#14B8A6" />
          </button>
        </div>
        <hr />
        <div className="content">
          <SlPhone size={30} color="#14B8A6" className="ikons" />
          <div className="details">
            <h3>Phone No:</h3>
            +(91) 9324563311
          </div>
          {/* <button>
            <BiEdit className="editBtn" size={25} color="#14B8A6" />
          </button> */}
        </div>
        <hr />
        <div className="content">
          <SlCalender size={30} color="#14B8A6" className="ikons" />
          <div className="details">
            <h3>Date Of Birth:</h3>
            26/06/2000
          </div>
          {/* <button>
            <BiEdit className="editBtn" size={25} color="#14B8A6" />
          </button> */}
        </div>
      </div>
      <div className="second-col">
        <div className="content">
          <BsFillPersonLinesFill size={30} color="#14B8A6" className="ikons" />
          <div className="details">
            <h3>Student</h3>
          </div>
        </div>
        <hr />
        <div className="content">
          <SlLocationPin size={30} color="#14B8A6" className="ikons" />
          <div className="details">
            <h3>Address:</h3>
            <textarea
              rows="3"
              className="addressinput"
              value={address}
              ref={textarea2}
              spellCheck={false}
            />
            {/* BH1 LNMIIT, Jamdoli, Jaipur Rajasthan - 80301 */}
          </div>
          <button>
            <BiEdit
              className="editBtn"
              size={25}
              color="#14B8A6"
              onClick={handleClick2}
            />
          </button>
        </div>
        <hr />
        <div className="content">
          <AiOutlineMail size={30} color="#14B8A6" className="ikons" />
          <div className="details">
            <h3>Email:</h3>
            tilwani8188@gmail.com
          </div>
          {/* <button>
            <BiEdit className="editBtn" size={25} color="#14B8A6" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
