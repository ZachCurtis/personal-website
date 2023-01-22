import Slidein from '../slidein/Slidein.js';
import Link from '../link/Link.js';
import Project from './project/Project.js';
import { motion } from 'framer-motion';
import classes from '../contentPage.module.css';
import projects from '/public/projects.json';

function Projects(params) {
    return (
        <div className={classes.contentPage} id="projects">
            <div className={classes.contents}>
                <Slidein>
                    <h1>Projects</h1>
                </Slidein>
                <p>
                    One of my biggest hobbies is game development. In fact, making games was what got me interested in programming in the first place!
                    Therefore, many of my most intricate projects have been video games. My most succesful games are listed below, as well as a few other
                    technical projects.
                </p>
                <h3>Take a look!</h3>
                <div className='grid'>
                    {projects.map(project => {
                        return (
                            <Project
                                title={project.title}
                                img={project.img}
                                linkText={project.linkText}
                                href={project.href}
                            >
                                <ul>
                                    {project.bullets.map(bullet => <li key={project.title}>{bullet}</li>)}
                                    <li><b>Technologies used:</b>
                                        <ul>
                                            {project.tech.map(tech => <li key={project.title}>{tech}</li>)}
                                        </ul>
                                    </li>
                                </ul>
                            </Project>
                        )
                    })}
                </div>
            </div>  
        </div>
    )
}

export default Projects