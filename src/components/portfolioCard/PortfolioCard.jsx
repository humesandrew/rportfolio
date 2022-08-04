
import React from 'react';
import "./portfoliocard.scss";
import resumeData from "../../resumeData.jsx";
import ProjectCard from "../projectCard/ProjectCard";
import ApiCard from "../apiCard/ApiCard";


  export default function PortfolioCard() {
        return (
          <div class="projectContainer">
            <div class="leftProject">
              <h1>Featured</h1>
          < ProjectCard />
          
            </div>
            <div class="rightProject">All Projects
            < ApiCard />
            </div>
            
          </div>

        )};
            
        


