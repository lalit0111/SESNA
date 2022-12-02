import React from "react";
import "../../styles/Friends.scss";
import FriendsCard from "./FriendsCard";

const FriendsSection = () => {
  return (
    <div className="friends-section">
      <h2 className="header">Friends</h2>
      <div className="friends-container">
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
      </div>
    </div>
  );
};

export default FriendsSection;
