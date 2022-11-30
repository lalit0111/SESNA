import React, { useState } from "react";
import styled from "styled-components";
import ComSkillSidebar from "../components/community/ComSkillSidebar";
import MessageSection from "../components/community/MessageSection";
import RequestSideBar from "../components/community/RequestSideBar";
import Header from "../components/Header";

export default function CommSkillsSection() {
  const [isReqOpen, setisReqOpen] = useState(false);
  return (
    <>
      <Header></Header>
      <SectionWrapper>
        <ComSkillSidebar
          onReqClick={() => {
            setisReqOpen(true);
          }}
        />
        {isReqOpen ? (
          <RequestSideBar
            onDismiss={() => {
              setisReqOpen(false);
            }}
          />
        ) : null}
        <MessageSection />
      </SectionWrapper>
    </>
  );
}
const SectionWrapper = styled.div`
  --primary-color: #f0fdfa;
  --accent-color: #14b8a6;
  --gray-backgroud: #f4f1eb;
  display: grid;
  grid-template-columns: minmax(380px, 25%) 1fr;
  height: 100vh;
  font-size: 16px;
`;
