import React from 'react';
import { useState } from 'react';

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
    };

    return (
        <section className="contact" id='contact'>
            <div className="left-contact">
                <h1>Let's Connect</h1>
                <form onSubmit={handleSubmit}>
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
                        requrired
                    >
                    </textarea>
                    <input type="submit" value="Let's Connect!" />
                </form>
                <div className="right-contact">
                    <h3>Feeling Social?</h3>
                    <i class="devicon-twitter-original"></i>
                    <i class="devicon-linkedin-plain"></i>
                    <i class="devicon-github-original"></i>
                </div>
            </div>
        </section>
    );
}

export default Contact;