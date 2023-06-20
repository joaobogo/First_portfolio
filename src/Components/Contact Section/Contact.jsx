import React, { useRef, useState } from "react";
import "./contact.css";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLine } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
// import {RiMessengerLine} from 'react-icons/ri'
import emailjs from "emailjs-com";
import axios from "axios";

const Contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_pgizsiu', 'template_r33jszj', form.current, '2FDb7VyuxniZlBgCg')
  //     e.target.reset()
  // };

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    <section id="contact" className="contact container section">
      <div class="sectionTitle">
        <span class="titleNumber">04 . </span>
        <h5 class="titleText">
          Contact{" "}
          <div class="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Don't be a stranger, let's talk!</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsGithub className="icon instaIcon" />
              </div>
              <h4>Github</h4>
              <span className="userName">@joaobogo</span>

              <div>
                <a
                  className="flex"
                  href="https://github.com/joaobogo/"
                  target="_blank"
                >
                  Send Message <TbArrowBigRightLine className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiFillLinkedin className="icon instaIcon" />
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">@joaobogo</span>

              <div>
                <a
                  className="flex"
                  href="https://www.linkedin.com/in/joaobogoprofessional/"
                  target="_blank"
                >
                  Send Message <TbArrowBigRightLine className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiOutlineWhatsApp className="icon instaIcon" />
              </div>
              <h4>Whatsapp</h4>
              <span className="userName">+55 (41) 99628-4949</span>

              <div>
                <a
                  className="flex"
                  href="https://api.whatsapp.com/send/?phone=5541996284949&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  Send Message <TbArrowBigRightLine className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form>
            <input
              onChange={handleChange}
              name="name"
              value={contact.name}
              type="text"
              required
            />
            <input
                 onChange={handleChange}
                 name="email"
                 value={contact.email}
                 type="email"
            />
            <input
               onChange={handleChange}
               name="subject"
               value={contact.subject}
               type="text"
            />
            <textarea
                  onChange={handleChange}
                  name="message"
                  value={contact.message}
                  placeholder="Type your message here:"
            ></textarea>
            <button className="formBtn" type="submit" name="submit" onClick={handleClick}>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
