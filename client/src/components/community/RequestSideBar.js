import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const requests = [
  {
    name: "Lalit",
    avatar: "https://i.ytimg.com/vi/dXFc7wDeV78/maxresdefault.jpg",
  },
  {
    name: "Lalit",
    avatar:
      "https://i.pinimg.com/originals/52/75/93/52759366813c9f39ae1ac0699b034204.jpg",
  },
  {
    name: "Hinata",
    avatar:
      "https://w0.peakpx.com/wallpaper/292/362/HD-wallpaper-hinata-cute-red-dress-anime-girls-sexy-oher.jpg",
  },
];

export default function RequestSideBar({ onDismiss }) {
  const [open, setOpen] = useState(true);
  const [list, setList] = useState(requests);
  function removeRequest(name) {
    const newList = list.filter((r) => r.name !== name);
    setList(newList);
    console.log(newList);
  }
  return (
    <Background
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          setOpen(false);
          setTimeout(() => {
            onDismiss();
          }, 250);
        }
      }}>
      <Wrapper open={open}>
        <Title>Requests</Title>
        {list.map((req) => (
          <Request
            {...req}
            removeReq={(name) => {
              removeRequest(name);
            }}
          />
        ))}
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: hsla(0, 0%, 0%, 0.32); ;
`;
const slideLeft = keyframes`
    from{
        transform: translateX(100%)
    }
    to{
        transform: translateX(0%)
    }
`;
const slideRight = keyframes`
    from{
        transform: translateX(0%)
    }
    to{
        transform: translateX(calc(100% + 100%))
    }
`;

const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: var(--primary-color);
  position: absolute;
  right: 0;
  animation: ${(props) => (props.open ? slideLeft : slideRight)} 0.25s
    ease-in-out forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  gap: 16px;
`;

const Title = styled.h3`
  color: var(--accent-color);
  margin-top: 20px;
`;

function Request({ name, avatar, removeReq }) {
  return (
    <RequestWrapper>
      <ProfilePicture src={avatar} alt="DP" />
      <Name>{name}</Name>
      <AcceptBtn
        onClick={() => {
          removeReq(name);
        }}>
        Accept
      </AcceptBtn>
      <DelBtn
        onClick={() => {
          removeReq(name);
        }}>
        Delete
      </DelBtn>
    </RequestWrapper>
  );
}

const RequestWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 12px;
  justify-content: start;
  align-items: center;
  gap: 12px;
  width: 100%;

  &:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid hsla(0, 0%, 85%, 1);
  }
`;

const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  grid-area: 1 / 1 / 6 / 2;
  object-fit: cover;
`;

const Name = styled.div`
  font-weight: 500;
  grid-area: 1 / 2 / 3 / 6;
`;
const AcceptBtn = styled.button`
  background-color: var(--accent-color);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px 18px;
  grid-area: 3 / 2 / 6 / 4;
  transition: all 0.2s ease;

  &:hover {
  }
`;

const DelBtn = styled(AcceptBtn)`
  background-color: hsla(0, 95%, 59%, 1);
  grid-area: 3 / 4 / 6 / 6;
`;
