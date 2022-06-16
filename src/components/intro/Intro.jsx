import "./intro.scss";
import resumeData from "../../resumeData.jsx";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Junior Developer", "Perpetual learner", "Open to work", "Denver, CO"],
    });
  }, []);


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img className="introPicture" src={resumeData.image} alt="" />
        </div>
      
      </div>
      <div className="right">
        <div className="wrapper">
       
          <h1>Andy Humes</h1>
          <h3>
            Welcome to my portfolio</h3>
            <h3><span ref={textRef}></span></h3>
          
         
        
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}