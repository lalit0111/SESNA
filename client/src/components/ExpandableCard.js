import React from "react";

const ExpandableCard = () => {
  return (
    <div class="profile" onclick="expand(this)">
      <div
        class="profile__banner"
        style="background-color: rgb(153,255,204);"></div>
      <div>
        <div class="profile__pic">
          <img
            src="https://i.imgur.com/mQvmS3c.jpg?1"
            alt="Profile picture of Cho Miyeon"></img>
        </div>
        <div class="profile__info">
          <span class="profile__info-display">Cho Miyeon</span>
          <span class="profile__info-username">@ramyeon</span>
        </div>
      </div>
      <div class="profile__data">
        <span class="profile__data-following">
          <span class="profile__data-following-number">32</span>
          <span class="profile__data-following-label">Following</span>
        </span>
        <span class="profile__data-followers">
          <span class="profile__data-followers-number">6M</span>
          <span class="profile__data-following-label">Followers</span>
        </span>
        <span class="profile__data-likes">
          <span class="profile__data-likes-number">502</span>
          <span class="profile__data-likes-label">Likes</span>
        </span>
      </div>
    </div>
  );
};

export default ExpandableCard;
