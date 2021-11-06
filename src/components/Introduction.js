import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import "../App.js";

export default function Introduction() {
  return (
    <div className="introduction">
      <span style={{ fontSize: "35px" }}>Hi, I'm</span>
      <h1 style={{ display: "flex", fontSize: "101px" }}>Ayush</h1>
      <div className="dash-1"></div>
      <span style={{ fontSize: "45px", lineHeight: "50px" }}>
        <Typewriter
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
          words={["Web Developer", "Video Editor", "Director", "Student"]}
        />
      </span>
      <div className="dash-2"></div>
    </div>
  );
}
