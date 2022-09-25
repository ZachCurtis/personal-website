import { motion } from 'framer-motion'
import classes from './slidein.module.css'

function SlideinH2({ delay, children, fromRight=false }) {
    return (
        <motion.div
            className={classes.slideDiv}
            initial={{ x: fromRight ? '10vw' : '-10vw', opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: delay }}
            viewport={{once: true}}
        >
            {children}
        </motion.div>
    )
}

export default SlideinH2