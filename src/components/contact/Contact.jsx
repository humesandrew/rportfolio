import { useState } from "react";
import "./contact.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };



    function handleButton(e) {
      e.preventDefault();
      
    window.open('Andy_Humes_resume.pdf');
     
    }
    



  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
        <div className="contact-wrapper">
        <h1> Contact me </h1>
        <div className="contact-container">
          <div className="contact-right">
         

          <Card style={{ width: '24rem', height: '50vh' }}>
  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/92492210?s=400&u=ffa0892503caf8ec65d7e895072d22e7c6c01497&v=4" style={{ height:'400px', borderRadius:'50%' }}/>
  <Card.Body>
    <Card.Title><h2>Andy Humes</h2></Card.Title>
    <Card.Text>
     <h4> Open to work. Based in Denver, CO.  </h4>
    </Card.Text>
    <Button className="d-grid gap-2" variant="secondary" size="lg" onClick={handleButton}>Resume</Button>

    
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
              <img className="contact-icon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CdzX-RcAk-wo6ODxTitKDcN5yNeAwz6Ug&usqp=CAU' alt="" target="_blank" rel="noreferrer"/>
              <a href="https://github.com/humesandrew">Github</a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src="https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png" alt="" target="_blank" rel="noreferrer"/>
              <a href="https://www.linkedin.com/in/andy-humes-72075559/">Linkedin</a>
            </div>
          </div>
          <div className="contact-right">
          
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
