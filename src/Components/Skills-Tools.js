import React from 'react';

const Skills = () => {
    return (
        <section className="skills-tools" id="skills-tools">
            <h1>My Toolbox & skills</h1>
            <div className="toolbox">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-postgresql-plain"></i>
                <i class="devicon-vscode-plain"></i>
                <i class="devicon-bootstrap-plain"></i>
                <i class="devicon-git-plain"></i>
                <i class="devicon-github-original"></i>
                <i class="devicon-vscode-plain"></i>
                <i class="devicon-figma-plain"></i>
            </div>
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