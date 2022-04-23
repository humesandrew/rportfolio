import "./portfolio.scss";
const chartMd = function() {
  window.open("https://chartmd.herokuapp.com/");
}
const bellyBuster = function() {
  window.open("https://humesandrew.github.io/Belly-Buster/");
}
const jsPortfolio = function() {
  window.open("https://humesandrew.github.io/portfolio3/");
}
const rPortfolio = function() {
  window.open("https://github.com/humesandrew/rportfolio");
}
const employeeDir = function() {
  window.open("https://github.com/humesandrew/employeeDirectory");
}

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <ul>
          <div className="item" id="chartMd">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
                onClick={chartMd}
              />
              <h3>ChartMd</h3>
              

            
            
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

          <div className="item">
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU"
                alt=""
                onClick={rPortfolio}
              />
              <h3>Portfolio: React</h3>
            </li>
          </div>

       

          <div className="item">
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
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
