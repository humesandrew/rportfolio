import "./portfolio.scss";
import React from 'react';
import PortfolioCard from "../portfolioCard/PortfolioCard"



const chartMd = function() {
  window.open("https://chartmd.herokuapp.com/");
}
const bellyBuster = function() {
  window.open("https://humesandrew.github.io/Belly-Buster/");
}
const jsPortfolio = function() {
  window.open("https://humesandrew.github.io/portfolio3/");
}



export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
    
      <div className="container">
   
        <ul>
       
        <PortfolioCard />



{/* 
          <div className="item" id="chartMd">
          
            <li>
            <div className="item-header">
            <h2>Chart Md - the Header</h2>
          </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
                onClick={chartMd}
              />
              <h3></h3>

              <div className="item-footer">
                An interactive application that allows doctors to leave notes and communicate with patients.
                <p>Technologies Used: Bootstrap, Handlebars, MySql</p> 
              </div>
              

            
            
            </li>
          </div>

          <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
                onClick={bellyBuster}
              />
              <h3>Belly-Buster</h3>
            </li>
          </div>

          <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
                onClick={jsPortfolio}
              />
              <h3>Portfolio: JavaScript</h3>
            </li>
          </div>
 */}

 
        </ul>
        <div className="portfolioCircle">Hello There</div>
      </div>
    </div>
  );
}




      

          {/* <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
              />
              <h3>Express NoteGen</h3>
            </li>
          </div>
          <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
              />
              <h3>E-Commerce Backend</h3>
            </li>
          </div>
        
          <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
              />
              <h3>Day Scheduler</h3>
            </li>
          </div>
          <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
              />
              <h3>Weather App</h3>
            </li> */}
            
          {/* </div> */}