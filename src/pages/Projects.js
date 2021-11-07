import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Boy from "../img/boy.jpg";
import Boy_1 from "../img/boy1.jpg";
import Buttons from "../components/Buttons";
import Quotes from "../components/Quotes";

const ProjectStyle = styled.div`
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
  }
  .img-box img {
    width: 300px;
    position: absolute;
    right: 150px;
  }
  .img-box::before {
    content: "";
    height: 134px;
    width: 1280px;
    background: linear-gradient(
      90deg,
      var(--green),
      var(--deep-dark-transparent)
    );
    position: absolute;
    left: 106px;
    z-index: 1;
  }
  h2 {
    color: white;
    font-size: 60px;
    position: absolute;
    left: 120px;
    top: 25px;
    z-index: 2;
  }
  .projects-file {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .projects-file img {
    width: 300px;
    position: relative;
    top: 200px;
    left: -20px;
  }
  .projects-file img:hover::before {
    content: "";
    height: 80px;
    width: 80px;
    background: var(--green);
    border: 4px solid var(--dark-green);
  }
  .btn-section {
    position: relative;
    top: -250px;
    left: -195px;
  }
  .quotes-section{
    display-inline-flex;
    position:relative;
    top:-180px;
    right:50px;
  }
`;

export default function Projects(props) {
  return (
    <ProjectStyle>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <div className="container">
        <div className="banner">
          <div className="img-box">
            <h2>{"Projects -->"}</h2>
            <img src={Boy} alt="boy back" />
          </div>
        </div>

        <div className="projects-file">
          <img src={Boy_1} alt="img" />
          <img src={Boy_1} alt="img" />
          <img src={Boy_1} alt="img" />
        </div>
      </div>

      <div className="btn-section">
        <Buttons
          fontSize={"25px"}
          justifyContent={"space-evenly"}
          width={"150px"}
          btnTextWork="More"
          btnTextHire="Hire Me"
        />
      </div>

      <div className="quotes-section">
        <Quotes homeRightQuotes="<== You're beautiful ==>" />
      </div>
    </ProjectStyle>
  );
}
