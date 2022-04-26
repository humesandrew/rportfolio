import { useState } from "react";
import "./credentials.scss";
import VolunteerCard from "../volunteerCard/VolunteerCard";
import EducationCard from "../educationCard/EducationCard";
import resumeData from "../../resumeData.jsx";
// import education from "../credentialsCard/CredentialsCard";

export default function Credentials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",

      title: "Education",
      desc: "University of Denver: Full-Stack Coding Bootcamp.",
    },
    {
      id: "2",

      title: "Volunteer",
      desc: "Volunteer stuff.",
      img: "",
    },
    {
      id: "3",

      title: "Publications",
      desc: "The 2 publications.",
      img: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="credentials" id="credentials">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src="" alt="" />
                
                <VolunteerCard />
             <EducationCard />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
