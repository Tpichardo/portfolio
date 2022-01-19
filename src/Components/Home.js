import React from 'react';
import selfImg from '../Assets/HomeImg.png'

const Home = () => {
    return (
        <section className="Home">
            <div className="selfImg">
                <img src={selfImg} alt="me smiling" />
            </div>
            <div className="home-content">
                <p>Hi, I’m Talía! A Full Stack Web Developer
                    and Fitness Enthusiast
                </p>
            </div>
        </section>
    );
}

export default Home;

