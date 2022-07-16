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
                <div class="projectDiv">
                  <h1> {item.name}</h1>

                  <h4>{item.description}</h4>

                  <h4>{item.technologies}</h4>

                  <div class="linkDiv">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <h3>Deployed</h3>
                    </a>

                    <a href={item.url2} target="_blank" rel="noreferrer">
                      <h3>Repository</h3>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
