import "./FormStyles.css";

import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
    const [contact, setContact] = useState({ name: '', email: '', subject: '', message: '' })

    function handleChange(event) {
        const inputname = event.target.name
        setContact({ ...contact, [inputname]: event.target.value })

    }

    function handleClick(event) {
        event.preventDefault()
        const from_name = contact.name
        const message = contact.message
        const subject = contact.subject
        const reply_to = contact.email


        const data = {
            service_id: 'service_ujkdmj1',
            template_id: 'template_0wnpiak',
            user_id: process.env.REACT_APP_USER_ID,
            template_params: { from_name, message, reply_to, subject },
        }

        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
        setContact({ name: '', email: '', subject: '', message: '' });
    }



    return (
        <div className="form">
            <form>
                <label>Your Name:</label>
                <input onChange={handleChange} name='name' value={contact.name} type="text"></input>
                <label>Email:</label>
                <input onChange={handleChange} name='email' value={contact.email} type="email"></input>
                <label>Subject:</label>
                <input onChange={handleChange} name='subject' value={contact.subject} type="text"></input>
                <label>Message:</label>
                <textarea onChange={handleChange} name='message' value={contact.message} rows="6" placeholder="Type your message here:" />
                <button onClick={handleClick} className="btn">Submit</button>
            </form>

        </div>
    );
};

export default Form