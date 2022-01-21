import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: ""
    });

    const { name, email, message } = contactInfo;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: [value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.send(
            'contact_service',
            'contact_form',
            contactInfo,
            'user_J4BuZ4UH3yBM3HuzOnHje'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }).catch((error) => {
                console.log('FAILED...', error);
            })

        setContactInfo({
            name: "",
            email: "",
            message: ""
        })
    };

    return (
        <section className="contact" id='contact'>
            <div className="left-contact">
                <h1>Let's Connect</h1>
                <form onSubmit={handleSubmit}>
                    {/* honeypot */}
                    <input
                        type="text"
                        name="a_password"
                        style={{ display: "none" }}
                        tabindex="-1"
                        autocomplete="off"
                    />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name='message'
                        value={message}
                        placeholder='Message'
                        onChange={handleInputChange}
                        required
                    >
                    </textarea>
                    <input type="submit" value="Let's Connect!" />
                </form>
                <div className="right-contact">
                    <h3>Feeling Social?</h3>
                    <i className="devicon-twitter-original"></i>
                    <i className="devicon-linkedin-plain"></i>
                    <i className="devicon-github-original"></i>
                </div>
            </div>
        </section>
    );
}

export default Contact;