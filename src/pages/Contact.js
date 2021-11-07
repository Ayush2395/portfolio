import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import ProfilePic from "../img/about-img.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Quotes from "../components/Quotes";

const ContactStyle = styled.div`
  h1 {
    display: inline-flex;
    position: relative;
    left: 120px;
    font-size: 80px;
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 850px;
    justify-content: space-evenly;
    height: 80px;
    // border: 1px solid white;
    position: relative;
    top: 50px;
    left: 35px;
  }
  input {
    background: var(--dark-green);
    color: var(--text-color);
    border: none;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    color: white;
    width: 300px;
  }
  input::placeholder {
    color: var(--text-color);
    font-family: "JetBrains Mono";
    font-size: 20px;
  }
  textarea {
    position: absolute;
    background: var(--text-color);
    resize: none;
    width: 690px;
    left: 115px;
    top: 380px;
    border: none;
    border-radius: 10px;
    padding: 10px 0 0 20px;
  }
  textarea::placeholder {
    font-size: 20px;
  }
  .btn-section {
    // border:1px solid white;
    display: block;
    position: relative;
    top: -220px;
    left: -595px;
    width: 2000px;
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
    left: 12px;
  }
  .img-box::after {
    content: "";
    height: 450px;
    border: 4px solid var(--dark-green);
    width: 350px;
    position: absolute;
  }
  .social-media {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 610px;
    align-items: center;
    justify-content: space-evenly;
    height: 220px;
    width: 50px;
    // border: 1px solid white;
  }
  .copyright {
    position: relative;
    top: -350px;
  }
`;

export default function Contact(props) {
  return (
    <ContactStyle>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <h1>{"Contact me =>"}</h1>
      <div className="input-group">
        <input type="text" placeholder="Full name -->" />
        <input type="text" name="email" placeholder="Your Email -->" />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        cols="30"
        rows="10"
      ></textarea>

      <div className="btn-section">
        <Buttons
          width={"280px"}
          fontSize={"20px"}
          btnTextWork="Send"
          btnTextHire="Follow me"
          justifyContent={"space-between"}
        />
      </div>

      <div className="img-box">
        <img src={ProfilePic} alt="profile-pic" />
      </div>

      <IconContext.Provider
        value={{ color: "var(--cream-green)", size: "30px" }}
      >
        <div className="social-media">
          <a href="https://twitter.com/Mandal_SaaB03" target="_blank">
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/official_mandal_saab/"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a href="https://twitter.com/Mandal_SaaB03" target="_blank">
            <BsTwitter />
          </a>
          <a href="https://github.com/Ayush2395" target="_blank">
            <FaGithub />
          </a>
        </div>
      </IconContext.Provider>

      <div className="copyright">
        <Quotes
          fontSize={"20px"}
          homeLeftQuotes="This site is developed by @&#165;µ$#"
        />
      </div>
    </ContactStyle>
  );
}
