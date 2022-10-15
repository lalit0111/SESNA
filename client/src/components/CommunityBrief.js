import React from "react";
import dp from "../assets/dp.png";
import man from "../assets/man.svg";

const CommunityBrief = () => {
  return (
    <div className="community-brief-container">
      <div className="community-brief">
        <div className="name-dp">
          <img src={dp}></img>
          <p>Sports</p>
        </div>
        <div className="admin-name">
          <p>Utkarsh</p>
          <div className="admin-tag">Admin</div>
        </div>
        <div className="number">
          <img src={man}></img>
          <span>35</span>
          <p>/250</p>
        </div>
        <button className="register-btn">Join</button>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default CommunityBrief;
