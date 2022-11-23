import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SearchBar from "./SearchBar";

export default function ComSkillSidebar({ onReqClick }) {
  return (
    <SideBarWrapper>
      <TopBar onReqClick={onReqClick} />
      <Description />
      <Communities />
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  --corners: 4px;
  background-color: #f4f1eb;
  padding: 12px 12px;
  border-right: 1px solid #e2e2e2;
  color: white;
  display: flex;
  gap: 4px;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

function TopBar({ onReqClick }) {
  return (
    <TopBarWrapper>
      <BackIcon />
      <BtnWrapper>
        <RequestBtn onClick={onReqClick}>
          Requests
          <Badge>4</Badge>
        </RequestBtn>
        <AddBtn>
          <AddIcon />
          Add
        </AddBtn>
      </BtnWrapper>
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled.div`
  padding: 12px;
  background-color: var(--primary-color);
  border-radius: var(--corners);
  display: flex;
  justify-content: space-between;
  top: 0px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const RequestBtn = styled.button`
  background-color: var(--accent-color);
  border: none;
  border-radius: 4px;
  padding: 4px 14px;
  color: white;
  font-weight: 400;
  position: relative;
  cursor: pointer;
`;

const Badge = styled.div`
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: rgba(250, 51, 51, 1);
  display: grid;
  place-items: center;
  font-weight: bold;
`;

const AddBtn = styled.button`
  border: 2px solid var(--accent-color);
  background: none;
  border-radius: 4px;
  padding: 4px 16px;
  color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Description() {
  return (
    <DescriptionWrapper>
      <Avatar src="https://images.sr.roku.com/idType/roku/context/global/id/8478a2db94f359c78d4182f5ee81b6a0/images/gracenote/assets/p20734442_b_v11_ae.jpg/magic/396x0/filters:quality(70)" />
      <Heading>Communication Skills</Heading>
      Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque posuere
      justo quis lectus porttitor. Curabitur mattis lorem eget turpis volutpat
      cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      aliquam erat vel sem viverra convallis. Vivamus id feugiat .
    </DescriptionWrapper>
  );
}

const DescriptionWrapper = styled.div`
  padding: 28px 12px;
  background-color: var(--primary-color);
  border-radius: var(--corners);
  color: rgba(51, 65, 85, 0.63);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

export const Avatar = styled.img`
  --size: 70px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--accent-color);
  object-fit: cover;
  margin-bottom: 10px;
`;
const Heading = styled.h3`
  color: black;
  margin-bottom: 10px;
  font-size: 22px;
`;

function Communities() {
  return (
    <CommunitiesWrapper>
      <SearchBar />
      <List>
        <ListItem Icon={WorkIcon} text="PROFFESIONALS">
          <ListItem text="General" />
        </ListItem>
        <ListItem Icon={TeachIcon} text="TEACHER">
          <ListItem text="General" unread="2" />
        </ListItem>
        <ListItem Icon={MentorIcon} text="MENTOR">
          <ListItem text="General" />
        </ListItem>
        <ListItem Icon={StudentIcon} text="STUDENT">
          <ListItem text="Movie" />
          <ListItem text="Teaching" />
          <ListItem text="Finance" />
          <ListItem text="Other Activities..." />
        </ListItem>
      </List>
    </CommunitiesWrapper>
  );
}

const CommunitiesWrapper = styled.div`
  padding: 12px;
  background-color: var(--primary-color);
  border-radius: var(--corners);
  color: black;
`;

const List = styled.div`
  padding: 24px 0;
`;

function ListItem({ Icon, text, children, unread }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconTextWrapper
        open={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <DownArrowIcon />
        {Icon ? <Icon /> : null}
        {text}
        {unread ? <GreenBadge>{unread}</GreenBadge> : null}
      </IconTextWrapper>
      {isOpen && children ? <Padding>{children}</Padding> : null}
    </>
  );
}

const slideDown = keyframes`
  from {
    transform: translateY(-15px);
  }
`;

const Padding = styled.div`
  padding-top: 0px;
  padding-left: 36px;
  animation: ${slideDown} 0.25s linear;
`;

const IconTextWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: rgba(51, 65, 85, 0.8);
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 12px;
  position: relative;

  svg:nth-child(1) {
    transform: ${(props) => (props.open ? "rotate(90deg)" : "revert")};
    transition: all 0.3s ease-in-out;
  }
`;

const GreenBadge = styled(Badge)`
  background-color: var(--accent-color);
  color: white;
  top: auto;
  right: 10px;
`;

const Icon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

function WorkIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_107_114)">
        <path
          d="M31.6667 11.6667H8.33333C6.49238 11.6667 5 13.1591 5 15.0001V30.0001C5 31.841 6.49238 33.3334 8.33333 33.3334H31.6667C33.5076 33.3334 35 31.841 35 30.0001V15.0001C35 13.1591 33.5076 11.6667 31.6667 11.6667Z"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.333 11.6667V8.33333C13.333 7.44928 13.6842 6.60143 14.3093 5.97631C14.9344 5.35119 15.7823 5 16.6663 5H23.333C24.2171 5 25.0649 5.35119 25.69 5.97631C26.3152 6.60143 26.6663 7.44928 26.6663 8.33333V11.6667"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 20V20.0167"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 21.6667C9.65263 24.0112 14.79 25.2325 20 25.2325C25.21 25.2325 30.3474 24.0112 35 21.6667"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_114">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DownArrowIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_107_167)">
        <path
          d="M9.375 18.75L15.625 12.5L9.375 6.25"
          stroke="#334155"
          stroke-opacity="0.52"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_167">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0 25) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function TeachIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_107_153)">
        <path
          d="M36.6663 14.9999L19.9997 8.33325L3.33301 14.9999L19.9997 21.6666L36.6663 14.9999ZM36.6663 14.9999V24.9999"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 17.6667V26.6667C10 27.9928 11.0536 29.2646 12.9289 30.2023C14.8043 31.14 17.3478 31.6667 20 31.6667C22.6522 31.6667 25.1957 31.14 27.0711 30.2023C28.9464 29.2646 30 27.9928 30 26.6667V17.6667"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_153">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MentorIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_107_183)">
        <path
          d="M20 25C25.5228 25 30 20.5228 30 15C30 9.47715 25.5228 5 20 5C14.4772 5 10 9.47715 10 15C10 20.5228 14.4772 25 20 25Z"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.0029 25.0056L25.6696 34.8206L28.3331 29.4338L34.3299 29.8206L28.6632 20.0056"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3369 20.0056L5.67025 29.8206L11.667 29.4338L14.3305 34.8206L19.9972 25.0056"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_183">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function StudentIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_107_198)">
        <path
          d="M11.6663 11.6667C13.5073 11.6667 14.9997 10.1743 14.9997 8.33333C14.9997 6.49238 13.5073 5 11.6663 5C9.82539 5 8.33301 6.49238 8.33301 8.33333C8.33301 10.1743 9.82539 11.6667 11.6663 11.6667Z"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.33366 36.6666V28.3333L6.66699 26.6666V19.9999C6.66699 19.5579 6.84259 19.134 7.15515 18.8214C7.46771 18.5088 7.89163 18.3333 8.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.5088 16.1788 18.8214C16.4914 19.134 16.667 19.5579 16.667 19.9999V26.6666L15.0003 28.3333V36.6666"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.3333 11.6667C30.1743 11.6667 31.6667 10.1743 31.6667 8.33333C31.6667 6.49238 30.1743 5 28.3333 5C26.4924 5 25 6.49238 25 8.33333C25 10.1743 26.4924 11.6667 28.3333 11.6667Z"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.0003 36.6666V29.9999H21.667L25.0003 19.9999C25.0003 19.5579 25.1759 19.134 25.4885 18.8214C25.801 18.5088 26.225 18.3333 26.667 18.3333H30.0003C30.4424 18.3333 30.8663 18.5088 31.1788 18.8214C31.4914 19.134 31.667 19.5579 31.667 19.9999L35.0003 29.9999H31.667V36.6666"
          stroke="#334155"
          stroke-opacity="0.8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_198">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BackIcon() {
  return (
    <Icon>
      <svg
        width="30"
        height="30"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_107_501)">
          <path
            d="M10.417 25H39.5837"
            stroke="#14B8A6"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.417 25L22.917 37.5"
            stroke="#14B8A6"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.417 25L22.917 12.5"
            stroke="#14B8A6"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_107_501">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
}

function AddIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_107_91)">
        <path
          d="M17.5 7.29163V27.7083"
          stroke="#14B8A6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.29199 17.5H27.7087"
          stroke="#14B8A6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_91">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
