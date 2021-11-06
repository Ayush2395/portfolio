import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyleDiv = styled.div`
  .active {
    background-color: var(--dark-green);
    border-radius: 10px;
  }
`;

export default function NavBar() {
  return (
    <StyleDiv>
      <div className="nav-bar">
        <div className="items">
          <div className="logo">
            <span>AK</span>
          </div>
          <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About me</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact me</NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </StyleDiv>
  );
}
