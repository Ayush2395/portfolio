import React from "react";
import Introduction from "../components/Introduction";
import ProfilePic from "../img/profile-img.png";
import "../../src/App.css";
import PText from "../components/PText";
import Buttons from "../components/Buttons";
import styled from "styled-components";
import Quotes from "../components/Quotes";
import { Helmet } from "react-helmet";

const BallStyle = styled.div`
  .dots {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 150px;
    width: 350px;
    position: relative;
    z-index: 2;
    top: 150px;
    // border: 1px solid white;
    left: 150px;
    
  }
  .dots-cirlce {
    display: flex;
    height: 30px;
    width: 30px;
    background: var(--green);
    border-radius: 50%;
    
  }
  .dots-cirlce:nth-child(even) {
    display: flex;
    height: 30px;
    width: 30px;
    position: relative;
    top: 40px;
    background: var(--dark-green);
    border-radius: 50%;
    
`;

export default function Home(props) {
  return (
    <BallStyle>
      <Helmet>
          <title>{props.title}</title>
      </Helmet>
      <Introduction />
      <PText />
      <div className="shapes">
        <div className="circle"></div>
      </div>
      <img
        style={{
          width: "260px",
          borderRadius: "50%",
          position: "absolute",
          top: "175px",
          left: "175px",
          zIndex: "-1",
        }}
        src={ProfilePic}
        alt="profile-pic"
      />

      <div className="star-shape">
        <div className="rect-1"></div>
        <div className="rect-2"></div>
      </div>

      <div className="dots">
        <div className="dots-cirlce"></div>
        <div className="dots-cirlce"></div>
        <div className="dots-cirlce"></div>
        <div className="dots-cirlce"></div>
        <div className="dots-cirlce"></div>
      </div>

      <Quotes
        homeLeftQuotes="<-- Forget About the world,"
        homeRightQuotes="just listen to yourself =>"
      />

      <Buttons outline={false} btnTextWork="My Work" btnTextHire="Hire Me" />
    </BallStyle>
  );
}
