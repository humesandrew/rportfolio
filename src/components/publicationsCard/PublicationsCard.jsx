import React from 'react';

import "./publicationsCard.scss";
import resumeData from "../../resumeData.jsx";




export default function PublicationsCard() {
  return (
      <div>
         <ul className="publicationList">
      {
        resumeData.publication && resumeData.publication.map((item)=>{
          return(
            <div>
            <li>
    
             <h1> {item.name}</h1>
            
            <h3>{item.description}</h3>
            
           Originally published in {item.date}.
            <br></br>
          <a href={item.image}  target="_blank" rel="noreferrer">Click to read</a>
        
            <span></span>
         
            </li>
            <br></br>
            </div>
          )
        })
      }
    </ul>
      </div>

  )};