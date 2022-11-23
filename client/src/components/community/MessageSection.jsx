import React from "react";
import styled from "styled-components";
import { Avatar } from "./ComSkillSidebar";

const msgList = [
  {
    sender: "",
    receiver: "",
    timeStamp: "",
  },
];

export default function MessageSection() {
  return (
    <MessageSectionWrapper>
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
  padding: 12px 16px;
  display: flex;
  gap: 20px;
  font-size: 14px;
`;

function MessageList() {
  return (
    <MessageListWrapper>
      <DayBar />
      <Message />
      <Message />
      <Message />
      <Message />
    </MessageListWrapper>
  );
}

const MessageListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 24px;
  justify-content: end;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

function DayBar() {
  return (
    <DayWrapper>
      <Day>Tuesday</Day>
    </DayWrapper>
  );
}

const DayWrapper = styled.div`
  --color: hsla(215, 25%, 27%, 1);
  width: 100%;
  height: 2px;
  background-color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0;
`;
const Day = styled.div`
  padding: 4px 8px;
  color: white;
  background-color: var(--color);
  height: fit-content;
  border-radius: 4px;
  font-size: 12px;
`;

function Message() {
  return (
    <MessageWrapper>
      <Dp src="https://i.ytimg.com/vi/dXFc7wDeV78/maxresdefault.jpg" />
      <Head>
        <Name color="hsla(215, 67%, 76%, 1)">Lalit</Name>
        <TimeStamp>7:00pm</TimeStamp>
        <Role color="hsla(41, 66%, 53%, 1)">Creator</Role>
      </Head>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam
        erat vel sem viverra convallis. Vivamus id feugiat velit. Lorem.
      </Text>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  width: fit-content;
  padding: 8px 0;
  display: grid;
  grid-template-columns: auto repeat(7, 1fr);
  grid-template-rows: auto 1fr;

  grid-column-gap: 16px;
  grid-row-gap: 4px;
`;
const Dp = styled(Avatar)`
  width: 50px;
  height: 50px;
  grid-area: 1 / 1 / 6 / 1;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  grid-area: 1 / 2 / 2 / 6;
  height: fit-content;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.color || "black"};
`;

const TimeStamp = styled.div`
  font-size: 12px;
  color: hsla(215, 9%, 54%, 1);
`;
const Role = styled.div`
  border-radius: 4px;
  border: 2px solid ${(props) => props.color || "black"};
  color: ${(props) => props.color || "black"};
  padding: 2px 8px;
  font-size: 12px;
  font-weight: bold;
`;
const Text = styled.div`
  grid-area: 2 / 2 / 6 / 9;
  font-size: 16px;
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
        width="28"
        height="28"
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  svg {
    transform: rotate(42deg);
  }
`;

const MessageBoxWrapper = styled.div`
  background-color: var(--primary-color);
  padding: 12px 16px;
  display: flex;
  gap: 24px;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #94a3b8;
  padding: 12px;
  flex-grow: 1;

  &:focus {
    outline: none;
    border: 1px solid var(--accent-color);
  }
`;
