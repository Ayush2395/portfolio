import React from "react";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import ProfilePic from "../img/about-img.png";

const AboutStyle = styled.div`
  h1 {
    display: inline-block;
    font-size: 101px;
    color: var(--green);
    position: absolute;
    left: 110px;
    top: 100px;
  }
  p {
    display: inline-block;
    position: absolute;
    top: 250px;
    left: 110px;
    width: 540px;
  }
  .img-box img {
    display: flex;
    position: absolute;
    right: 15px;
    top: 12px;
    background: var(--green);
    height: 450px;
    position: absolute;
  }
  .img-box {
    display: inline-flex;
    position: absolute;
    right: 170px;
    top: 150px;
    background: transparent;
    height: 450px;
    position: absolute;
  }
  .img-box::before {
    content: "";
    height: 450px;
    border: 4px solid var(--dark-green);
    width: 350px;
    position: relative;
    top: -12px;
    right: -12px;
  }
  .img-box::after {
    content: "";
    height: 450px;
    border: 4px solid var(--dark-green);
    width: 350px;
    position: absolute;
  }
  .skills-section {
    display: inline-flex;
    flex-wrap: wrap;
    width: 180px;
    flex-direction: row;
    // border: 1px solid white;
    height: 250px;
    align-items: center;
    position: absolute;
    top: 350px;
    left: 110px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
      props.outline ? "transparent" : "var(--dark-green)"};
    color: var(--text-color);
    width: 215px;
    height: 48px;
    font-size: 25px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
  }
  button:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
      props.outline ? "var(--dark-green)" : "transparent"};
    color: var(--text-color);
    width: 215px;
    height: 48px;
    font-size: 25px;
    border-radius: 15px;
    border: 4px solid var(--dark-green);
    cursor: pointer;
  }
  button:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
      props.outline ? "var(--dark-green)" : "transparent"};
    color: var(--text-color);
    width: 215px;
    height: 48px;
    font-size: 25px;
    border-radius: 15px;
    border: 4px solid var(--dark-green);
    cursor: pointer;
  }
  .list-of-skills {
    display: inline-flex;
    justify-content: center;
    position: absolute;
    top: 365px;
    border:3px solid var(--dark-green);
    padding:10px;
    left:450px;
  }
  .list-forskills p {
    font-size: 35px;
  }
`;

function About(props, { outline }) {
  return (
    <AboutStyle outline={outline}>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <h1>About &rarr; </h1>
      <p>
        Hi, I'm Ayush and student of Computer Science and Engineer. I'm a
        YouTuber, Web Developer, Photographer, Content Creator and Video Editor.
      </p>

      <div className="img-box">
        <img src={ProfilePic} alt="profile-pic" />
      </div>

      <div className="skills-section">
        <button>Skills</button>
        <button>Education</button>
        <button>Experience</button>
      </div>

      <div className="list-of-skills">
        <span>
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            words={[
              "C/C++",
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Adobe Photoshop",
              "Adobe Premiere Pro",
              "Color Correction",
            ]}
          />
        </span>
      </div>
    </AboutStyle>
  );
}

export default About;
