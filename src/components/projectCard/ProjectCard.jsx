import React from 'react';
import "./projectcard.scss";
import resumeData from "../../resumeData.jsx";


export default function ProjectCard() {
  return (
      <div>
         <ul>
      {
        resumeData.featured && resumeData.featured.map((item)=>{
          return(
            <div class="project">
            <li>
    
             <h1> {item.name}</h1>
            
            <h3>{item.description}</h3>
            
       
         
            </li>
            <br></br>
            </div>
          )
        })
      }
    </ul>
      </div>

  )};