import React from "react";
import { Link } from "react-router-dom";
import comm from "../../assets/communication.png";
import dropDown from "../../assets/drop-down.svg";

function clickToExpand(e) {
  console.log("clicked");
  // e.target.classList.toggle("active");
  e.target.classList.toggle("rotate-down");
  var content = e.target.previousElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

const ExpandableCard = (props) => {
  console.log(props);
  const { community_name, description } = props.community;
  return (
    <div className="expandable">
      {/* <button type="button" class="collapsible" onClick={clickToExpand}>
        Open Collapsible
      </button> */}
      <Link className="text-link" to={`/community`}>
        <div className="top-section">
          <img src={comm}></img>
          <h1>{community_name}</h1>
        </div>
      </Link>
      <div className="content">
        <p>{description}</p>
      </div>
      <img src={dropDown} onClick={clickToExpand}></img>
    </div>
  );
};

export default ExpandableCard;
