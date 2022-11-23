import React, { useContext } from "react";
import Header from "../components/Header";
import searchIcon from "../assets/search-icon.svg";
import ExpandableCard from "../components/ExpandableCard";
import CommunityBrief from "../components/CommunityBrief";
import Footer from "../components/Footer";
import Hamburger from "../assets/ham.svg";
import ChatIcon from "../assets/chat_active.svg";
import { LoginContext } from "../LoginContext";

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="home-container">
      <Header />
      {isLoggedIn || (
        <h1 className="headline">
          Service Enablement For Special Needs Autism
        </h1>
      )}
      {isLoggedIn || (
        <p className="tagline">Community-Based Platform for Fun & Learning</p>
      )}
      <div className="search-wrapper">
        {isLoggedIn && <img src={Hamburger}></img>}
        <div className="search-bar">
          <input
            type="text"
            className="search-text"
            placeholder="Search Communities...."></input>
          <div className="search-button">
            <img src={searchIcon}></img>
          </div>
        </div>
        {isLoggedIn && <img src={ChatIcon}></img>}
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
