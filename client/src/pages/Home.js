import React from "react";
import Header from "../components/Header";
import searchIcon from "../assets/search-icon.svg";
import ExpandableCard from "../components/ExpandableCard";
import CommunityBrief from "../components/CommunityBrief";
import Footer from "../components/Footer";

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
      <div className="card-container">
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
      </div>
      <h1 className="more-communities-headline">More Communities</h1>
      <div className="communities-container">
        <CommunityBrief />
        <CommunityBrief />
        <CommunityBrief />
        <CommunityBrief />
        <CommunityBrief />
        <CommunityBrief />
        <CommunityBrief />
        <CommunityBrief />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
