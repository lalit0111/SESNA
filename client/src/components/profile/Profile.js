import React, { useRef, useState } from "react";
import homebg from "../../assets/homebg.png";
import { AiOutlineCamera, AiOutlineArrowLeft } from "react-icons/ai";
import pfphome from "../../assets/pfphome.png";
import HomeFeatures from "./HomeFeatures";
import { Link } from "react-router-dom";

const Profile = () => {
  const [images, setImages] = useState(homebg);
  const [pfp, setPfp] = useState(pfphome);
  const [name, setName] = useState(`Lalit Tilwani`);
  const hiddenFileInput = useRef(null); //choosing for bg image
  const hiddenFileInputs = useRef(null); //choosing for profile image

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
  const onImageChange = (e) => {
    setImages(URL.createObjectURL(e.target.files[0]));
    // setPfp(URL.createObjectURL(e.target.files[0]));
  };

  const handleClicks = (e) => {
    hiddenFileInputs.current.click();
  };
  const onImageChanges = (e) => {
    // setImages(URL.createObjectURL(e.target.files[0]));
    setPfp(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="home">
      <div className="homebg" style={{ backgroundImage: `url(${images})` }}>
        {/* <img src={images} alt="" /> */}
        <Link className="text-link" to={`/`}>
          <button className="backoption bttn">
            <AiOutlineArrowLeft
              color="white"
              size={28}
              enableBackground={false}
            />
          </button>
        </Link>

        <div className="editimg">
          <button onClick={handleClick} className="btttn">
            <AiOutlineCamera color="white" size={19} />
            Edit Cover
          </button>
          <input
            type="file"
            multiple
            accept="image/*"
            ref={hiddenFileInput}
            onChange={onImageChange}
          />
        </div>
      </div>
      <div className="profile">
        <div className="pfphome">
          <h2 className="profile_name">{name}</h2>
          <img src={pfp} alt="" className="pfp" />
          <button onClick={handleClicks}>
            <AiOutlineCamera color="white" size={19} className="bttn" />
          </button>
          <input
            type="file"
            multiple
            accept="image/*"
            ref={hiddenFileInputs}
            style={{ display: "none" }}
            onChange={onImageChanges}
          />
        </div>
      </div>
      <HomeFeatures />
    </div>
  );
};

export default Profile;
