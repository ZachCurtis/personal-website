import { motion } from 'framer-motion'
import Skill from './skill/Skill.js'
import Slidein from '../slidein/Slidein.js'
import classes from '../contentPage.module.css'
import skillStyle from './skill/skill.module.css'

function Skills(props) {
    return(
        <div className={classes.contentPage} id="skills">
            <div className={classes.contents}>
                <Slidein>
                    <h1 style={{textAlign: 'left'}}>Skills</h1>
                </Slidein>
                <div>
                    <h3 className={skillStyle.skill}>Test</h3>
                </div>
            </div>
        </div>
    ) 
}

export default Skills