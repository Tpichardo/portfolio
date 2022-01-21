import React from 'react';

const Skills = () => {
    return (
        <section className="skills-tools" id="skills-tools">
            <h1>My Toolbox & skills</h1>
            <div className="toolbox">
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-postgresql-plain"></i>
                <i className="devicon-vscode-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-git-plain"></i>
                <i className="devicon-github-original"></i>
                <i className="devicon-vscode-plain"></i>
                <i className="devicon-figma-plain"></i>
            </div>
            <h3>Currently Working on:</h3>
            <p className="currently">
                Improving my CSS skills with Kevin Powell’s “Conquering Responsive Layouts” course and learning Data Structures & Algorithms.
                <span onClick={() => window.open('https://twitter.com/PichardoTalia')}>
                    Follow my journey here!
                </span>
            </p>
        </section>
    );
}

export default Skills;