import { motion } from 'framer-motion'
import Skill from './skill/Skill.js'
import Slidein from '../slidein/Slidein.js'
import classes from '../contentPage.module.css'

function Skills(props) {
    return(
        <div className={classes.contentPage} id="skills">
            <Slidein>
                <h1 style={{textAlign: 'left'}}>Skills</h1>
                <div>
                    <p1>Test</p1>
                </div>
            </Slidein>
        </div>
    ) 
}

export default Skills