import React from 'react';

import "./volunteerCard.scss";
import resumeData from "../../resumeData.jsx";




  export default function VolunteerCard() {
        return (
            <div>
               <ul className="volunteerList">
            {
              resumeData.volunteer && resumeData.volunteer.map((item)=>{
                return(
                  <div>
                  <li>
                   <h1> {item.name}</h1>
                  
                <h3>  {item.role}</h3>
              
               
                   {item.chapter}
                   <br></br>
               <a href={item.url}>Click to visit.</a>
                  </li>
                  <br></br>
                  </div>
                )
              })
            }
          </ul>
       
            </div>

        )};
            
        


