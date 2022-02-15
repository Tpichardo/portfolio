import React from 'react';
import HikingImg from '../Assets/HikingImg.jpg';
import './About.css'

const About = () => {
    return (
        <section className="about" id='about'>
            <div className="hikingImg">
                <img src={HikingImg} alt="Me looking out to the mountains" />
            </div>
            <div className="about-content">
                <h1>
                    <h1 className='hola'>¡Hola!</h1>
                </h1>
                <p>
                    I'm glad that you're here!
                </p>

                <p>
                    My name is <span>Talía</span>, and I’m a recent Pursuit grad, so I’m currently enjoying a new path to
                    self-expression as a <span>Full Stack Web Developer</span>.
                </p>

                <p>
                    Being a student of life inspires me to continue to grow and learn new skills.
                    I'm now working on my CSS skills by rebuilding my portfolio website with tips from
                    Kevin Powell's Conquering Responsive Layouts course.
                    I'm documenting the process on Twitter with the 100DaysOfCode challenge.
                    You can follow me <span className='twitter' onClick={() => window.open('https://twitter.com/PichardoTalia')}>@PichardoTalia</span> to see how I'm doing!
                </p>

                <p>
                    To excite and inspire my community, I want to be a member of an organization that shares my ideals.
                    As a developer, I intend to channel this enthusiasm into code that encourages people to
                    <span> achieve their goals and adopt healthy habits</span>.
                </p>

                <p>
                    When I'm not coding, you'll find me with my family and friends, dancing to anything,
                    watching self-help YouTube videos, working out, or reading on my new Kindle!
                </p>

                <p>
                    Feel free to reach out and say hello!
                </p>
            </div>
        </section>
    )
}

export default About;