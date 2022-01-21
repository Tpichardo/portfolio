import React from 'react';
import Soka from '../Assets/Soka.png';
import Bread from '../Assets/Bread.png';
import MiniTube from '../Assets/MiniTube.png';

const Projects = () => {
    return (
        <section className='projects' id="projects">
            <h1>Projects</h1>
            <p>Take a look at some my work bellow!</p>
            <div className="project project-img">
                <img src={Soka} alt="landing page for a workout buddy app with two people exercising" />
            </div>
            <div className="project project-description"></div>
            <div className="project project-img">
                <img src={Bread} alt="landing page for a budget application" />
            </div>
            <div className="project project-description"></div>
            <div className="project project-img">
                <img src={MiniTube} alt="a list of videos related to the popular video game character Mario" />
            </div>
            <div className="project project-description"></div>
        </section>
    );
}

export default Projects;