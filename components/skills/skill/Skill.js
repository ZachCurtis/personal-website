import styles from './skill.module.css'

function Skill(props) {
    return (
        <h3 className={styles.skill}>
            {props.children}
        </h3>
    )
}

export default Skill