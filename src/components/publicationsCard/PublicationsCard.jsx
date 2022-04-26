import "./publicationsCard.scss";
import resumeData from "../../resumeData.jsx";




export default function PublicationsCard() {
  return (
      <div>
         <ul className="publicationList">
      {
        resumeData.publication && resumeData.publication.map((item)=>{
          return(
            <li>
             <h1> {item.name}</h1>
            
            {item.description}: <span></span>
         
            </li>
          )
        })
      }
    </ul>
      </div>

  )};