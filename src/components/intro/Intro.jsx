import "./intro.scss";

import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();



  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="
          ../contact/Andy_1.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
       
          <h1>Andy Humes</h1>
          <h3>
            Junior Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}