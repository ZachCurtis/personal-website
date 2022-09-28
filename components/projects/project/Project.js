import Accordion from '../../accordion/Accordion.js'
import Link from '../../link/Link.js'
import classes from './project.module.css'

function Project({ title, img, children, linkText, href }) {
    return (
        <Accordion small title={title}>
            <div className={classes.project}>
                {img && <img src={img} />}
                {linkText && <Link href={href} color='#15133C'>{linkText}</Link>}
                {children}
            </div>
        </Accordion>
    )
}

export default Project