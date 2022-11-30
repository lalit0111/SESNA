import React from "react";
import dp from "../assets/utkarsh.png";

const CreateCommunity = () => {
  return (
    <div className="create-community-container">
      <div className="community-form">
        <p>Create New Community</p>
        <input type="text" placeholder="Community Name" />
        <textarea type="text" placeholder="Description" />
        <button>Create Community</button>
      </div>
    </div>
  );
};

export default CreateCommunity;
