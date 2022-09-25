import { motion } from 'framer-motion'
import classes from './header.module.css'

import Link from '../link/Link.js'
import Slidein from '../slidein/Slidein.js'
import Sticky from './sticky/Sticky.js'
import IconLink from '../iconLink/IconLink.js'
import Image from 'next/image'
 
function Header() {
    return (
        <div className={classes.header}>
            <div style={{ flexGrow: 1, display: 'flex', flexFlow: 'row wrap' }}>
                <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                    <Slidein>
                        <h1>
                            Nicky Brodbeck
                        </h1>
                    </Slidein>
                    <Slidein delay={0.25}>
                        <h2>
                            Programmer & Game Developer
                        </h2>
                    </Slidein>
                    <Slidein delay={0.5}>
                        <div style={{ flexFlow: "row wrap" }}>
                            <IconLink href={"https://github.com/cowsoncows"} src={"/GitHub-Mark.svg"}/>
                            <IconLink href={"https://www.linkedin.com/in/nbrodbeck/"} src={"/Linkedin-Mark.svg"} />
                            <IconLink href={"https://instagram.com/nicky_brod"} src={"/Instagram-Mark.svg"} />
                        </div>
                    </Slidein>
                </div>
                <div className={classes.imgContainer}>
                    <motion.img 
                        src='/pfp.png' 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}
                    />
                </div>
            </div>
            <Sticky>
                <div className={`${classes.nav} list-layout`}>
                    <Link href="#about">About Me</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </Sticky>
        </div>
    )
}

export default Header