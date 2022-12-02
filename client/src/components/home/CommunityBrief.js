import React, { useContext } from "react";
import { JoinCommunityURL } from "../../Api";
import dp from "../../assets/dp.png";
import man from "../../assets/man.svg";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import { bufferToString } from "../../Utility";

const CommunityBrief = (props) => {
  const { isLoggedIn, loggedInUser } = useContext(LoginContext);

  function ConvertHexToString(str) {
    return unescape(str.replace(/\\/g, "%"));
  }
  let { _id, community_dp, community_name, user_count } = props.community;
  let imgStr = dp;
  if (typeof community_dp !== "undefined") {
    imgStr = bufferToString(community_dp.data);
  }
  console.log(community_dp);

  //API
  const JoinCommunity = (token, id) => {
    axios
      .post(
        JoinCommunityURL,
        { id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  return (
    <div className="community-brief-container">
      <div className="community-brief">
        <div className="name-dp">
          <img src={imgStr}></img>
          <p>{community_name}</p>
        </div>
        <div className="admin-name">
          <p>Utkarsh</p>
          <div className="admin-tag">Admin</div>
        </div>
        <div className="number">
          <img src={man}></img>
          <span>{user_count}</span>
          <p>/250</p>
        </div>
        {isLoggedIn && (
          <button
            className="register-btn"
            onClick={() => {
              console.log(_id.toString());
              JoinCommunity(loggedInUser.token, _id.toString());
            }}>
            Join
          </button>
        )}
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default CommunityBrief;
