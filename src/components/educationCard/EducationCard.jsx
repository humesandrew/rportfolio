import "./educationCard.scss";
import resumeData from "../../resumeData.jsx";




export default function EducationCard() {
  return (
      <div>
         <ul className="educationList">
      {
        resumeData.education && resumeData.education.map((item)=>{
          return(
           <div>
           <li>
          
        
             <h1> {item.name}</h1>
            
            {item.degree}: <span></span>
           {item.specialization}
      
            </li>
         <img className="imgLogo" src={item.image} alt=""></img>
            </div>
          )
        })
      }
    </ul>
      </div>

  )};