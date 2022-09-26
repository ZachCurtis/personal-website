import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'

import classes from './accordion.module.css'

function Accordion({ title, children, small }) {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <motion.div
            className={classes.accordion}
            animate={{
                color: isOpen ? '#15133C' : '#F1EEE9',
                backgroundColor: isOpen ? '#F1EEE9' : '#15133C'
            }}
            style={{
                width: small ? '300px' : '100%',
                margin: small ? '0.5rem' : '0.5rem 0'
            }}
        >
            <div className={classes.header} onClick={() => setIsOpen(!isOpen)}>
                <h3 style={{ flexGrow: 1}}>{title}</h3>
                <h3> {isOpen ? '▲': '▼'} </h3>
            </div>
            <motion.div
                className={classes.contents}
                initial={'closed'}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: {
                        opacity: 1,
                        height: 'auto',
                        marginTop: '1rem'
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                        marginTop: 0
                    }
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Accordion