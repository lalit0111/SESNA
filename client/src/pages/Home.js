import React from "react";
import Header from "../components/Header";
import searchIcon from "../assets/search-icon.svg";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <h1 className="headline">Service Enablement For Special Needs Autism</h1>
      <p className="tagline">Community-Based Platform for Fun & Learning</p>
      <div className="search-bar">
        <input
          type="text"
          className="search-text"
          placeholder="Search Communities...."></input>
        <div className="search-button">
          <img src={searchIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
