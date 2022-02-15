import React from 'react';
import './Skills-Tools.css'

const Skills = () => {
    return (
        <section className="skills-tools" id="skills-tools">
            <h1 className='myToolsHeader'>My Toolbox & skills</h1>
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

                {/* <div className='devicon'>
                    <i className="devicon-vscode-plain"></i>
                </div>
                <div className='devicon'>
                    <i className="devicon-figma-plain"></i>
                </div> */}
            </div>
        </section>
    );
}

export default Skills;