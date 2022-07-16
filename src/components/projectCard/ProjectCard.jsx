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
           <div>
    
             <h1> {item.name}</h1>
            
            <h3>{item.description}</h3>

            <h3>{item.technologies}</h3>
            
       
               
           <a href={item.url} target="_blank" rel="noreferrer"><h3>Deployed</h3>
           </a>
                
           <a href={item.url2} target="_blank" rel="noreferrer"><h3>Repository</h3>
           </a>
            </div>
        
            </div>
          )
        })
      }
    </ul>
      </div>

  )};