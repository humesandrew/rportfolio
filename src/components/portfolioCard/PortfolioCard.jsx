
import React from 'react';
import "./portfoliocard.scss";

import ProjectCard from "../projectCard/ProjectCard";
import ApiCard from "../apiCard/ApiCard";
import AnimatedText from 'react-animated-text-content';

  export default function PortfolioCard() {
        return (
          <div class="projectContainer">
            <div class="leftProject">
            <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '0px',
    y: '-100px',
    scale: 1.8,
    ease: 'ease-in',
  }}
  animationType="float"
  interval={0.04}
  duration={0.8}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
 
>
  Featured
</AnimatedText>
          < ProjectCard />
          
            </div>
            <div class="rightProject">
            < ApiCard />
            </div>
            
          </div>

        )};
            
        


