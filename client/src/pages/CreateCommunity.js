import React, { useState } from "react";
import dp from "../assets/utkarsh.png";
import { CreateCommunityURL } from "../Api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCommunity = () => {
  const navigate = useNavigate();

  //objects
  const communitySchema = {
    community_brief: {
      community_name: "testing",
      user_count: "0",
      description: "this is a jod com",
      creator_id: "6387b22a38b487c4f425708a",
    },
  };

  //states
  const [community, setCommunity] = useState(communitySchema);

  //API
  const createCommunity = (community) => {
    axios
      .post(CreateCommunityURL, community)
      .then((response) => {
        console.log(response);
        navigate("/community");
      })
      .catch();
  };

  return (
    <div className="create-community-container">
      <div className="community-form">
        <p>Create New Community</p>
        <input
          type="text"
          placeholder="Community Name"
          onChange={(e) => {
            communitySchema.community_brief.community_name = e.target.value;
            setCommunity(communitySchema);
          }}
        />
        <textarea
          type="text"
          placeholder="Description"
          onChange={(e) => {
            communitySchema.community_brief.description = e.target.value;
            setCommunity(communitySchema);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            createCommunity(communitySchema);
          }}>
          Create Community
        </button>
      </div>
    </div>
  );
};

export default CreateCommunity;
