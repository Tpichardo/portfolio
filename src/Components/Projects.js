import React from 'react';
import Soka from '../Assets/Soka.png';
import Bread from '../Assets/Bread.png';
import Nutribot from '../Assets/Nutribot.png';
import { Card, Button } from 'react-bootstrap';
import './Projects.css'

const Projects = () => {
    return (
        <section className='projects' id="projects">
            <h1>Projects</h1>
            <p>Take a look at some my work bellow!</p>
            <div className='project_cards'>
                <Card className="text-center card" >
                    <Card.Header>Social Karma</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" alt="home page for a workout buddy app with two people exercising" src={Soka} />
                        <Card.Text>
                            Social Fitness application that aims to keep users accountable for their fitness goals.
                        </Card.Text>
                        <Button variant="primary" style={{ margin: '.5rem' }} onClick={() => window.open('https://talia-sk.netlify.app/')}>Live Application</Button>
                        <Button variant="primary" onClick={() => window.open('https://github.com/Tpichardo/Talia-SK')}>Github Repo</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center card">
                    <Card.Header>Bread</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" alt="landing page for a budget application" src={Bread} />
                        <Card.Text>
                            Budgeting application that helps users keep track of their transactions.
                        </Card.Text>
                        <Button variant="primary" style={{ margin: '.5rem' }} onClick={() => window.open('https://save-your-bread.netlify.app/')}>Live Application</Button>
                        <Button variant="primary" onClick={() => window.open('https://github.com/Tpichardo/Budget-Bread-react')}>Github Repo</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center card">
                    <Card.Header>Nutribot</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" alt="home page for a workout buddy app with two people exercising" src={Nutribot} />
                        <Card.Text>
                            Meal tracking application that helps users track their meals, get a breakdown of their meal macros, and try delicious recipes.
                        </Card.Text>
                        <Button variant="primary" style={{ margin: '.5rem' }} onClick={() => window.open('https://nutribot.netlify.app/')}>Live Application</Button>
                        <Button variant="primary" onClick={() => window.open('https://github.com/Tpichardo/Nutribot')}>Github Repo</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}

export default Projects;