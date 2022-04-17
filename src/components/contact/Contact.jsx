import { useState } from "react";
import "./contact.scss";

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
        <div className="contact-left">
          <div className="contact-info">
            <div className="contact-info-item">
              <img src='' alt="" className="contact-icon" />
              614-975-7115
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src='' alt="" />
             humes.andrew@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src='' alt="" />
              Denver, CO
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
