import React, { useState } from "react";
import styled from "styled-components";
import ChatSideBar from "../components/chat/ChatSideBar";
import MessageSection from "../components/chat/MessageSection";
import Header from "../components/Header";

export default function ChatSection() {
  const [chat, setChat] = useState();
  return (
    <div>
      <Header />
      <HorizontalSeparator />
      <ChatSectionWrapper>
        <ChatSideBar setChat={setChat} />
        <MessageSection {...chat} />
      </ChatSectionWrapper>
    </div>
  );
}

const ChatSectionWrapper = styled.div`
  --primary-color: #f0fdfa;
  --accent-color: #14b8a6;
  display: grid;
  grid-template-columns: minmax(300px, 30%) 1fr;
  height: 100vh;
`;

const HorizontalSeparator = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: rgba(51, 65, 85, 0.46);
`;
