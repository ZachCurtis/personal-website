import styles from './skill.module.css'
import { motion } from 'framer-motion'

function Skill(props) {
    return (
        <motion.h3 
            className={styles.skill}
            initial={{ scale: 1, rotateZ: 0}}
            whileHover={{ scale: 1.25, rotateZ: 10}}
        >
            {props.children}
        </motion.h3>
    )
}

export default Skill