import React, { useState } from "react";
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
    height: 150px;
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
  .list-of-skills {
    display: inline-flex;
    justify-content: center;
    position: absolute;
    top: 350px;
    padding: 10px;
    left: 450px;
  }
  .skills {
    border: 3px solid var(--dark-green);
    padding: 10px;
  }
  .experience {
    display: inline-flex;
    position: absolute;
    justify-content: center;
    border: 3px solid var(--dark-green);
    top: 70px;
    // width:220px;
    left: -3px;
    padding: 10px;
  }
  .design .circle {
    position: absolute;
    top: 520px;
    left: 80px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: -15px 15px 0 15px var(--cream-green);
  }
  .design .circle:nth-child(5) {
    position: absolute;
    top: 520px;
    left: 90px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: -15px 15px 0 15px var(--deep-dark);
  }
`;

function About(props, { outline }) {
  const [status, setStatus] = useState(true);

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
        <button onClick={() => setStatus(true)}>Skills</button>
        <button onClick={() => setStatus(false)}>Experience</button>
      </div>

      <div className="list-of-skills">
        {status ? (
          <span className="skills">
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
              ]}
            />
          </span>
        ) : (
          <span className="experience">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              words={[
                "DaVinci Resolve",
                "Color Correction",
                "Photography",
                "Editinf Studio",
                "Acting",
                "Visual Effects",
              ]}
            />
          </span>
        )}
      </div>

      <div className="design">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </AboutStyle>
  );
}

export default About;
