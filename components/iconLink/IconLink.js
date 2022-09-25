import Link from 'next/link'
import classes from './iconLink.module.css'
import { motion } from 'framer-motion'

function IconLink({ src, href }) {
    return (
        <div className={classes.iconLink}>
            <Link href={href}>
                <motion.img 
                    src={src} 
                    whileHover={{ scale: 1.25, filter: "brightness(0) saturate(100%) invert(58%) sepia(93%) saturate(342%) hue-rotate(344deg) brightness(98%) contrast(88%)" }} 
                />
            </Link>
        </div>
    )
}

export default IconLink