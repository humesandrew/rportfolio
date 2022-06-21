import "./skillsCard.scss";
import resumeData from "../../resumeData.jsx";




  export default function VolunteerCard() {
        return (
            <div>
               <ol className="skillsList">
            {
              resumeData.techSkills && resumeData.techSkills.map((item)=>{
                return(
                  <div>
                  <li>
                   <h2> {item.name}</h2>
                  
               
              
               
                 
               
                  </li>
                
                  </div>
                )
              })
            }
          </ol>
       
            </div>

        )};