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
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
        <div className="contact-wrapper">
        <h1> Contact me </h1>
        <div className="contact-container">
          <div className="contact-right">
         

          <Card style={{ width: '24rem', height: '50vh' }}>
  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/92492210?s=400&u=ffa0892503caf8ec65d7e895072d22e7c6c01497&v=4" style={{ height:'200px', borderRadius:'50%' }}/>
  <Card.Body>
    <Card.Title><h1>Andy Humes</h1></Card.Title>
    <Card.Text>
     <h4> Some quick example text to build on the card title and make up the bulk of
      the card's content. </h4>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

          </div>
        <div className="contact-left">
          <h1>Contact-Left</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src="https://img.icons8.com/ios/500/apple-phone.png" alt="" className="contact-icon" />
              614-975-7115
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src="https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png" alt="" />
             humes.andrew@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CdzX-RcAk-wo6ODxTitKDcN5yNeAwz6Ug&usqp=CAU' alt="" />
              Denver, CO
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
