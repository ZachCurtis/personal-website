import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classes from './sticky.module.css'
import { useScrollDirection } from 'react-use-scroll-direction'

function Sticky({ children }) {
    const [ isSticky, setIsSticky ] = useState(false)
    const { scrollDirection } = useScrollDirection()
    const stickyRef = useRef()
    const lastScrollDirection = useRef()

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        lastScrollDirection.current = scrollDirection
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    function onScroll() {
        const top = window.scrollY
        const { offsetTop } = stickyRef.current
        setIsSticky(top >= offsetTop)
    }

    return (
        <>
            <div ref={stickyRef}>
                {children}
            </div>
            <AnimatePresence>
                {( scrollDirection == "UP" || lastScrollDirection.current == "UP") && (
                    <motion.div 
                        layout
                        className={classes.sticky}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'hidden'}
                        variants={{
                            hidden: {
                                height: 0,
                            },
                            visible: {
                                height: 'auto',
                            }
                        }}
                        transition={{ duration: 0.25 }}
                    >
                        {isSticky && children}
                        
                    </motion.div>
                )}
            </AnimatePresence>
        </>
        
    )
}

export default Sticky