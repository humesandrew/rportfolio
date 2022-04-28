
import React from 'react';
import "./portfolioCard.scss";
import resumeData from "../../resumeData.jsx";

const chartMd = function() {
  window.open("https://chartmd.herokuapp.com/");
}



  export default function VolunteerCard() {
        return (
            <div>
               <ul className="projectList">
            {
              resumeData.project && resumeData.project.map((item)=>{
                return(
                  <li>
                   <h1> {item.name}</h1>
                  <div className="imageDiv">
                  <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"}
                alt=""
                onClick={chartMd}></img>
                  </div>
                  {item.url}
              
                  <br></br>
                   {item.description}
                  
                  </li>
                )
              })
            }
          </ul>
            </div>

        )};
            
        


