import { motion } from 'framer-motion'
import Skill from './skill/Skill.js'
import Slidein from '../slidein/Slidein.js'
import classes from '../contentPage.module.css'
import skillStyle from './skill/skill.module.css'
import skillList from '../../public/skills.json'

function Skills(props) {
    return(
        <div className={classes.contentPage} id="skills">
            <div className={classes.contents} style={{minHeight: '0vh'}}>
                <Slidein fromRight>
                    <h1 style={{textAlign: 'right'}}>Skills</h1>
                </Slidein>
                <div className={skillStyle.skillContainer}>
                    {skillList.map( (v) => 
                    <Skill key={v}>
                        {v}
                    </Skill> )}
                </div>
            </div>
        </div>
    ) 
}

export default Skills