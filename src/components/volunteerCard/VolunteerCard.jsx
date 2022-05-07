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
                  
                  {item.role}
              
                  <br></br>
                   {item.chapter}
               
                  </li>
                  <br></br>
                  </div>
                )
              })
            }
          </ul>
       
            </div>

        )};
            
        


