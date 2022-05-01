
import React from 'react';
import "./portfolioCard.scss";
import resumeData from "../../resumeData.jsx";

const chartMd = function() {
  window.open("https://chartmd.herokuapp.com/");
}



  export default function PortfolioCard() {
        return (
            <div className="projectList">
               <ul className="projectUl">
            {
              resumeData.project && resumeData.project.map((item)=>{
                return(
                  <div className="projectLi">
                   <h2> {item.name}</h2>
                  <div className="imageDiv">
                  <a href={item.url} target="_blank" rel="noreferrer">
                  <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"}
                alt=""
                width={450} height={100}
              
                ></img>



   
    </a>
                  </div>
                
                    <div className="descriptionDiv">
                   {item.description}
                   </div>

                   <div className="repoDiv">
                  <a href={item.url2} target="_blank" rel="noreferrer">
                    Click for repository
                  </a>
                  </div>
                  </div>
                )
              })
            }
          </ul>
            </div>

        )};
            
        


