import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import classes from './link.module.css'

function LinkComponent({ href, children, style }) {
    return (
        <motion.span 
            initial={{  textDecorationThickness: '0.1em' }}
            whileHover={{ color: '#EC994B', textDecorationThickness: '0.25em' }}
            className={classes.link} 
            style={style}
        >
            <Link href={href}>{children}</Link>
        </motion.span>
    )
}

export default LinkComponent