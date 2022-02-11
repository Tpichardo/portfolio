import React from 'react';
import selfImg from '../Assets/LandingImg.jpg';
import './Home.css'

const Home = () => {
    return (
        <section className="home" id='home'>
            <div className="selfImg">
                <img src={selfImg} alt="me smiling" />
            </div>
            <div className="home-content">
                <h1>Hi, I’m Talía! A Full Stack Web Developer
                    and <span>Fitness Enthusiast</span>
                </h1>
            </div>
        </section>
    );
}

export default Home;

