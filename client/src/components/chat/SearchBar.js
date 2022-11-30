import React from "react";
import styled from "styled-components";

function SearchIcon() {
  return (
    <SearchIconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-search"
        width="22"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </SearchIconWrapper>
  );
}

const SearchIconWrapper = styled.button`
  background-color: var(--accent-color);
  padding: 10px;
  display: grid;
  place-items: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  margin: 0;
  border: none;
`;

export default function SearchBar({ onQueryChange }) {
  return (
    <SearchBarWrapper>
      <Input
        placeholder="Search Here"
        onChange={(e) => {
          onQueryChange(e.target.value);
        }}
      />
      <SearchIcon />
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 100%;
  border: 2px solid #e5e5e5;
  height: 38px;
  padding-left: 30px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  &:focus {
    outline: none;
    border: 2px solid var(--accent-color);
  }
`;
