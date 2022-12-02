import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SearchBar from "./SearchBar";

const chatList = [
  {
    name: "Lalit Tilwani",
    msg: "Hi I am lalit",
    unreadCount: 0,
    avatar: "https://media.tenor.com/1peqjULQN5EAAAAM/madara-uchiha-madara.gif",
    online: true,
    lastSeen: "10:00 pm",
  },
  {
    name: "Apurv Verma",
    msg: "Hi I am Apurv",
    unreadCount: 0,
    avatar: "https://i.ytimg.com/vi/GeJamu2gafI/maxresdefault.jpg",
    online: false,
    lastSeen: "12:00 pm",
  },
  {
    name: "Utkarsh Nanda",
    msg: "Hi I am Utkarsh",
    unreadCount: 0,
    avatar:
      "https://www.macmillandictionary.com/external/slideshow/full/emoji_snake_full.jpg",
    online: false,
    lastSeen: "10:00 pm",
  },
];

function BackIcon() {
  return (
    <IconWrapper>
      <svg
        width="30"
        height="30"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_107_521)">
          <path
            d="M10.417 25H39.5837"
            stroke="#14B8A6"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.417 25L22.917 37.5"
            stroke="#14B8A6"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.417 25L22.917 12.5"
            stroke="#14B8A6"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_107_521">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}

export default function ChatSideBar({ setChat }) {
  const mystyle = {
    color: "#334155",
    fontSize: "24px",
  };
  const [query, setQuery] = useState("");
  return (
    <ChatSideBarWrapper>
      <TopBar>
        <Link className="text-link" to={`/`}>
          <BackIcon />
        </Link>
        <h3 style={mystyle}>Chats</h3>
      </TopBar>
      <SearchBar onQueryChange={setQuery} />
      <Space />
      {chatList
        .filter((chat) => {
          if (!query) return chatList;
          const name = chat.name.toLowerCase();
          const msg = chat.msg.toLowerCase();
          return (
            name.includes(query.toLowerCase()) ||
            msg.includes(query.toLowerCase())
          );
        })
        .map((chat) => (
          <ChatItem
            {...chat}
            key={chat.name}
            onClick={(e) => {
              setChat(chat);
              console.log(chat);
            }}
          />
        ))}
    </ChatSideBarWrapper>
  );
}

const ChatSideBarWrapper = styled.div`
  background-color: var(--primary-color);
  padding: 0 16px;
  border-right: 1px solid #e2e2e2;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
`;
export const IconWrapper = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  left: 0;
  padding: 0;
  margin: 0;
`;

const Space = styled.div`
  padding: 12px;
`;

function ChatItem({ name, msg, unreadCount, avatar, online, onClick }) {
  return (
    <ChatItemWrapper onClick={onClick}>
      <Avatar src={avatar} alt="profile picture" />
      <Info>
        <Name>
          <span>{name}</span>
          <OnlineIndicator online={online} />
        </Name>
        <Msg unread={unreadCount}>{msg}</Msg>
      </Info>
      <UnreadIndicator unread={unreadCount}>{unreadCount}</UnreadIndicator>
    </ChatItemWrapper>
  );
}

const ChatItemWrapper = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  text-align: start;

  &:not(:last-child) {
    border-bottom: 1px solid #94a3b8;
  }
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-color);
  object-fit: cover;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const pulse = keyframes`
    to {
        transform: scale(2);
        opacity: 0;
    }
`;
const OnlineIndicator = styled.div`
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  background-color: var(--accent-color);
  visibility: ${(props) => (props.online ? "visible" : "hidden")};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    inset: 0;

    border-radius: 50%;
    border: 1px solid var(--accent-color);

    animation: ${pulse} 2s infinite;
  }
`;
const Msg = styled.div`
  font-weight: ${(props) =>
    props.unread !== 0 ? "700" : "revert" || "revert"};
  text-align: start;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #334155;
  font-size: 14px;
`;
const UnreadIndicator = styled.div`
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: var(--accent-color);
  font-size: 11px;
  font-weight: bold;
  color: white;
  padding: 2px;
  display: grid;
  place-items: center;
  visibility: ${(props) => (props.unread === 0 ? "hidden" : "visible")};
`;
