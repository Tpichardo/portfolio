import React from 'react';
import selfImg from '../Assets/LandingImg.png';
import Typewriter from 'typewriter-effect';
import './Home.css'

const Home = () => {
    return (
        <section className="home" id='home'>
            <div className="selfImg">
                <img src={selfImg} alt="me smiling" />
            </div>
            <div className="home-content">
                <h1>Hi, I’m Talía! A Full Stack Web Developer and
                    <span className='typeWriter'>
                        <Typewriter
                            options={{
                                strings: ["Fitness Enthusiast", "Creator", "Nature Lover", "Collaborator", "Go-getter"],
                                autoStart: true,
                                pauseFor: 250,
                                loop: true
                            }}
                        />
                    </span>
                </h1>
            </div>
        </section>
    );
}

export default Home;

