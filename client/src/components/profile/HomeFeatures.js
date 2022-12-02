import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BsChatLeftDots, BsThreeDots } from "react-icons/bs";

const HomeFeatures = () => {
  const [togglePublic, setTogglePublic] = useState(false);
  const [toggleAdmin, setToggleAdmin] = useState(false);

  const handleClick = () => {
    setTogglePublic(!togglePublic);
  };
  const handleClickAdmin = () => {
    setToggleAdmin(!toggleAdmin);
  };
  return (
    <div className="features">
      {/* <main>
        <Link to={"/#home"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/#brands"}>Brands</Link>
        <Link to={"/services"}>Services</Link>
      </main> */}
      <div className="feature-container">
        <h2>About</h2>
        {/* <h2>Activity</h2>
        <h2>Friends</h2>
        <h3 className="friend-count">
          <GoPrimitiveDot /> 23
        </h3> */}
      </div>
      <div className="button-container">
        <button
          className={`${toggleAdmin ? "public-private pvt" : "public-private"}`}
          onClick={handleClickAdmin}
        >
          {toggleAdmin ? "Admin" : "Member"}
          <GoPrimitiveDot color="#D9D9D9" size={40} />
        </button>
        <button
          className={`${
            togglePublic ? "public-private pvt" : "public-private"
          }`}
          onClick={handleClick}
        >
          {togglePublic ? "Private" : "Public"}{" "}
          <GoPrimitiveDot color="#D9D9D9" size={40} />
        </button>
        <button className="chatbtn">
          <BsChatLeftDots size={28} />
        </button>
        <button className="menubtn">
          <BsThreeDots size={28} />
        </button>
      </div>
    </div>
  );
};

export default HomeFeatures;
