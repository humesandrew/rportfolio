
import React from 'react';
import './portfoliocard.scss';

import {portfolioData} from './portfolioData.jsx';



export const PortfolioCard = () => {
  return (
    <div className="portfolioCard">
      <h1>Not working</h1>
        {/* <img src={portfolioData.img} alt="" className="image"></img> */}
      
      <div>
      <a href={portfolioData.link2} target="_blank" rel="noreferrer">
        {/* <img src={github} alt="" className="icon"></img> */}
      </a>
      <a href={portfolioData.link} target="_blank" rel="noreferrer">
        {/* <img src={www} alt="" className="icon"></img> */}
      </a>
      <h5 className="text">{portfolioData.text}</h5>
      </div>
    </div>
  )
  }

  export default PortfolioCard;