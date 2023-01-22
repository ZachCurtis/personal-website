import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import classes from './link.module.css'

function LinkComponent({ href, children, style, color }) {
    return (
        <motion.span 
            initial={{  textDecorationThickness: '0.1em', color: color }}
            whileHover={{ color: '#EC994B', textDecorationThickness: '0.25em' }}
            className={classes.link} 
            style={style}
        >
            <Link href={href}>{children}</Link>
        </motion.span>
    )
}

export default LinkComponent