
import React from 'react';
import "./portfoliocard.scss";

import ProjectCard from "../projectCard/ProjectCard";
import ApiCard from "../apiCard/ApiCard";


  export default function PortfolioCard() {
        return (
          <div class="projectContainer">
            <div class="leftProject">
              <h1>Featured</h1>
          < ProjectCard />
          
            </div>
            <div class="rightProject">
            < ApiCard />
            </div>
            
          </div>

        )};
            
        


