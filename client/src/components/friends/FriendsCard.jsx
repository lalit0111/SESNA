import React from "react";
import "../../styles/Friends.scss";
import { BsDot, BsPerson } from "react-icons/bs";

const FriendsCard = () => {
  return (
    <div className="card">
      <img src="" alt="img" />
      <div className="profile">
        <h3>
          Apurv Verma <BsDot /> Patna
        </h3>
        <button>Add Friend</button>
      </div>
      <BsPerson className="person" />
    </div>
  );
};

export default FriendsCard;
