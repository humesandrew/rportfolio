
import React from 'react';
import "./portfoliocard.scss";
import resumeData from "../../resumeData.jsx";
import ProjectCard from "../projectCard/ProjectCard";



  export default function PortfolioCard() {
        return (
          <div class="projectContainer">
            <div class="leftProject">
              <h1>Featured</h1>
          < ProjectCard />
     
            </div>
            <div class="rightProject">Right</div>
          </div>

        )};
            
        


