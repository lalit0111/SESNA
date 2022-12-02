import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import searchIcon from "../assets/search-icon.svg";
import ExpandableCard from "../components/home/ExpandableCard";
import CommunityBrief from "../components/home/CommunityBrief";
import Footer from "../components/Footer";
import Hamburger from "../assets/ham.svg";
import ChatIcon from "../assets/chat_active.svg";
import AddIcon from "../assets/add_circle.svg";
import { LoginContext } from "../LoginContext";
import { Link } from "react-router-dom";
import { MajorCommunityURL, SearchCommunityURL } from "../Api";
import axios from "axios";
import Loading from "../components/LoadingPrimary";

const Home = () => {
  const { isLoggedIn, loggedInUser } = useContext(LoginContext);
  console.log(loggedInUser);

  //states
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [searchQuery, setSearchQuery] = useState({ search: "" });
  const [commnuties, setCommunities] = useState([]);
  const [majorCommunities, setMajorCommunities] = useState([]);

  //API
  const searchCommunity = async (searchQuery) => {
    setIsLoading(true);
    await axios
      .post(SearchCommunityURL, searchQuery)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setCommunities(response.data);
      })
      .catch();
  };

  const getMajorCommunities = async () => {
    setIsLoading2(true);
    await axios
      .get(MajorCommunityURL)
      .then((response) => {
        console.log(response);
        setIsLoading2(false);
        setMajorCommunities([
          response.data.com1,
          response.data.com2,
          response.data.com3,
        ]);
        console.log(majorCommunities);
      })
      .catch();
  };

  useEffect(() => {
    searchCommunity({ search: "" });
    getMajorCommunities();
  }, []);

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
            placeholder="Search Communities...."
            onChange={(e) => {
              searchQuery.search = e.target.value;
              setSearchQuery(searchQuery);
              searchCommunity(searchQuery);
            }}></input>
          <div className="search-button">
            <img src={searchIcon}></img>
          </div>
        </div>
        {isLoggedIn && (
          <div className="icon-container">
            <Link className="text-link" to={`chat`}>
              <img src={ChatIcon}></img>
            </Link>
            <Link className="text-link" to={`create-community`}>
              <img src={AddIcon}></img>
            </Link>
          </div>
        )}
      </div>

      {isLoading2 && <Loading />}
      {isLoading2 || (
        <div className="card-container">
          {majorCommunities.map((community) => {
            return <ExpandableCard community={community} />;
          })}
        </div>
      )}
      <h1 className="more-communities-headline">More Communities</h1>
      {isLoading && <Loading />}

      {isLoading || (
        <div className="communities-container">
          {commnuties.map((community) => {
            return <CommunityBrief community={community} />;
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
