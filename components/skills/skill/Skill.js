import styles from './skill.module.css'
import { motion } from 'framer-motion'

function Skill(props) {
    return (
        <motion.h3 
            className={styles.skill}
            initial={{ scale: 1, rotateZ: 0, color: '#15133C'}}
            whileHover={{ scale: 1.05, rotateZ: 5, color: '#EC994B'}}
        >
            {props.children}
        </motion.h3>
    )
}

export default Skill