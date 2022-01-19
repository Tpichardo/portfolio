import React from 'react';
import HikingImg from '../Assets/HikingImg.jpg'

const About = () => {
    return (
        <section className="About">
            <div className="hikingImg">
                <img src={HikingImg} alt="Me looking out to the mountains" />
            </div>
            <div className="about-content">
                <header>
                    <h1>¡Hola!</h1>
                </header>
                <p>
                    ’m a Dominican Full Stack Web Developer with a background in IT.
                    I have an interest in motivational tech, and I’m excited to continue creating applications that motivate individuals
                    to achieve their goals and establish healthy habits.
                </p>
                <p>
                    When I’m not coding, you can find me spending time with family and friends,
                    reading on my kindle,dancing to EVERYTHING, and bike riding.
                </p>
                <p>
                    Feel free to reach out and say hello!
                </p>
                <button className="about-connect">Let's Connect</button>
            </div>
        </section>
    )
}

export default About;