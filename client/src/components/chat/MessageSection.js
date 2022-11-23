import React from "react";
import styled from "styled-components";
import { Avatar, Info, Name } from "./ChatSideBar";

const msgList = [
  {
    sender: "",
    receiver: "",
    timeStamp: "",
  },
];

const mystyle = {
  color: "#334155",
  fontSize: "12px",
  fontWeight: "400",
  marginTop: "2px",
  marginBottom: "0",
};

export default function MessageSection({ name, avatar, lastSeen }) {
  return (
    <MessageSectionWrapper>
      <TopBar>
        <Avatar
          src={
            avatar
              ? avatar
              : "https://www.macmillandictionary.com/external/slideshow/full/emoji_snake_full.jpg"
          }
          alt="profile picture"
        />
        <Info>
          <Name>{name ? name : "Lalit Dattebao"}</Name>
          <h3 style={mystyle}>
            Last seen today at {lastSeen ? lastSeen : "7:00 pm"}
          </h3>
        </Info>
      </TopBar>
      <MessageList />
      <MessageBox />
    </MessageSectionWrapper>
  );
}

const MessageSectionWrapper = styled.div`
  background-color: #f4f1eb;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopBar = styled.div`
  background-color: var(--primary-color);
  padding: 8px 16px;
  display: flex;
  gap: 20px;
  font-size: 14px;
`;

function MessageList() {
  return (
    <MessageListWrapper>
      <Message sender>
        Hii!
        <TimeStamp>7:00 pm</TimeStamp>
      </Message>
      <Message>
        Hello!
        <TimeStamp>7:00 pm</TimeStamp>
      </Message>
      <Message sender>
        Bla Bla Bla
        <TimeStamp>7:00 pm</TimeStamp>
      </Message>
      <Message>
        More BLA BLA BLA BAL BLA BLA BAL BLA BLA BLA BLA BLA BLA BLA BLA
        <TimeStamp>7:00 pm</TimeStamp>
      </Message>
    </MessageListWrapper>
  );
}

const MessageListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 24px;
  gap: 24px;
`;

const Message = styled.div`
  max-width: 500px;
  width: fit-content;
  font-size: 14px;
  padding: 8px 20px 6px 8px;
  background: ${(props) => (props.sender ? `white` : "#CBF0E8")};
  border-radius: ${(props) =>
    props.sender ? `0 8px 8px 8px` : "8px 8px 0 8px"};
  align-self: ${(props) => (props.sender ? "start" : "end")};
  text-align: start;
`;
const TimeStamp = styled.div`
  font-size: 10px;
  text-align: end;
  width: 100%;
  padding: 0 2px;
  padding-top: 4px;
  color: #94a3b8;
`;

function MessageBox() {
  return (
    <MessageBoxWrapper>
      <Input placeholder="Type here..." />
      <AttactmentIcon />
      <SendIcon />
    </MessageBoxWrapper>
  );
}

function AttactmentIcon() {
  return (
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-paperclip"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="#14B8A6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
      </svg>
    </IconWrapper>
  );
}

export const IconWrapper = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;

function SendIcon() {
  return (
    <SendIconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-send"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="14" x2="21" y2="3" />
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
      </svg>
    </SendIconWrapper>
  );
}

const SendIconWrapper = styled(IconWrapper)`
  background-color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  justify-self: flex-end;
  place-items: center;

  svg {
    transform: rotate(42deg);
  }
`;

const MessageBoxWrapper = styled.div`
  background-color: var(--primary-color);
  padding: 12px 10px;
  display: flex;
  width: 100%;
  gap: 20px;
  overflow: hidden;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #94a3b8;
  padding: 12px;
  width: 80%;

  &:focus {
    outline: none;
    border: 1px solid var(--accent-color);
  }
`;
