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

const ExpandableCard = () => {
  return (
    <div className="expandable">
      {/* <button type="button" class="collapsible" onClick={clickToExpand}>
        Open Collapsible
      </button> */}
      <Link className="text-link" to={`/community`}>
        <div className="top-section">
          <img src={comm}></img>
          <h1>Communication</h1>
        </div>
      </Link>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Pellentesque
          posuere justo quis lectus porttitor. Curabitur mattis lorem eget
          turpis volutpat cursus.
        </p>
      </div>
      <img src={dropDown} onClick={clickToExpand}></img>
    </div>
  );
};

export default ExpandableCard;
