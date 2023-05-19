import React, { useState, useEffect } from "react";
import ContactContainer from "./Contact.styles";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function handleChange(event) {
    const inputname = event.target.name;
    setContact({ ...contact, [inputname]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    const from_name = contact.name;
    const message = contact.message;
    const subject = contact.subject;
    const reply_to = contact.email;

    const data = {
      service_id: "service_ujkdmj1",
      template_id: "template_0wnpiak",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { from_name, message, reply_to, subject },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    setContact({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <ContactContainer id="contact">
      <h2 data-aos="fade-up">Let's Talk</h2>

      <div data-aos="fade-up" className="main">
        <div className="left">
          <h4>Don't be a stranger, reach out</h4>
          <div className="icons">
            <FaHome /> <p>Brazil</p>
          </div>
          <div className="icons">
            <FaPhone /> <p> +55 (41) 99628-4949</p>
          </div>
          <div className="icons">
            <FaMailBulk /> <p> kasprzakjoao@protonmail.com</p>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joaobogoprofessional/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/joaobogo">
              <FaGithub />
            </a>
            <a href="https://wa.me/5541996284949">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="right">
          <form>
            <label>Your Name:</label>
            <input
              onChange={handleChange}
              name="name"
              value={contact.name}
              type="text"
            ></input>
            <label>Email:</label>
            <input
              onChange={handleChange}
              name="email"
              value={contact.email}
              type="email"
            ></input>
            <label>Subject:</label>
            <input
              onChange={handleChange}
              name="subject"
              value={contact.subject}
              type="text"
            ></input>
            <label>Message:</label>
            <textarea
              onChange={handleChange}
              name="message"
              value={contact.message}
              rows="6"
              placeholder="Type your message here:"
            />
            <button onClick={handleClick} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
