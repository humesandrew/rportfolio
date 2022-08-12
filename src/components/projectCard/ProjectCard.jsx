import React from "react";
import "./projectcard.scss";
import resumeData from "../../resumeData.jsx";



export default function ProjectCard() {
  return (
    <div>

      <ul>
        {resumeData.featured &&
          resumeData.featured.map((item) => {
            return (
              <div class="project">
                <div class="projectDiv" style={{ backgroundImage: `url(${item.image})`}}>
          {/* <div><img src={item.image}></img></div> */}
          
                  <h1> {item.name}</h1>

                  <h4>{item.description}</h4>

                  <h4>{item.technologies}</h4>

                  <div class="linkDiv">
                    <button>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {/* <h3>Deployed</h3> */}
                        <h3>Deployed</h3>
                      </a>
                    </button>

                    <button>
                      <a href={item.url2} target="_blank" rel="noreferrer">
                        <h3>Repository</h3>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
