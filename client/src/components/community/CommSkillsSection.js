import React, { useState } from 'react'
import styled from "styled-components";
import ComSkillSidebar from './ComSkillSidebar';
import MessageSection from './MessageSection';
import RequestSideBar from './RequestSideBar';

export default function CommSkillsSection() {
    const [isReqOpen,setisReqOpen] = useState(false);
  return (
    <SectionWrapper>
        <ComSkillSidebar onReqClick={()=>{setisReqOpen(true)}}/>
        {
            (isReqOpen) ? <RequestSideBar onDismiss={()=>{setisReqOpen(false)}} /> : null
        }
        <MessageSection />
       

    </SectionWrapper>
  )
}
const SectionWrapper = styled.div`
    --primary-color: #F0FDFA;
    --accent-color:#14B8A6;
    --gray-backgroud:#F4F1EB;
    display: grid;
    grid-template-columns: minmax(380px,25%) 1fr;
    height: 100vh;
    font-size:16px;
`

