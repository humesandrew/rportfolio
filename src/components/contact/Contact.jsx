import { useState } from "react";
import "./contact.scss";
import Card from 'react-bootstrap/Card';

import resumeData from "../../resumeData.jsx";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };



    function handleButton(e) {
      e.preventDefault();
      
    // window.open('Andy_Humes_resume.pdf');//
     
    }
    



  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
        <div className="contact-wrapper">
        <h1> Contact me </h1>
        <div className="contact-container">
          <div className="contact-right">
         

          <Card style={{ width: '24rem', height: '100vh' }}>
  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/92492210?s=400&u=ffa0892503caf8ec65d7e895072d22e7c6c01497&v=4" style={{ height:'275px', borderRadius:'50%' }}/>
  <Card.Body>
    <Card.Title><h1>Andy Humes</h1></Card.Title>
    <Card.Text>
     <h4> Determined, junior level coder versed in many coding languages with
proficiency in the front end frameworks. Offers a unique adaptability,
stemming from a heavy background in technical skills, complex systems,
and analysis. Strong customer service background from many years in
health care. </h4>
    </Card.Text>
  

    
  </Card.Body>
</Card>

          </div>
        <div className="contact-left">
          <h1></h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img className="contact-icon" src="https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png" alt="" target="_blank" rel="noreferrer"/>
            
             <a href="mailto:humes.andrew@gmail.com">Email</a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src='https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png' alt="" target="_blank" rel="noreferrer"/>
              <a href="https://github.com/humesandrew">Github</a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src="https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png" alt="" target="_blank" rel="noreferrer"/>
              <a href="https://www.linkedin.com/in/andy-humes-72075559/">Linkedin</a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src="https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png" alt="" target="_blank" rel="noreferrer"/>
              <a href={resumeData.resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
          <div>
          
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Send a message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
