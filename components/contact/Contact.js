import classes from '../contentPage.module.css'
import Accordion from '../accordion/Accordion.js'
import Slidein from '../slidein/Slidein.js'
import Link from '../link/Link.js'
// Comment 7

function Contact() {
    return (
        <div className={classes.contentPage} id="contact">
            <div className={classes.contents}>
                <Slidein>
                    <h1>Contact Me</h1>
                </Slidein>
                <p>
                    Connect with me on:
                </p>
                <ul>
                    <li><Link href='https://www.linkedin.com/in/nbrodbeck/'>LinkedIn</Link></li>
                    <li><Link href='https://instagram.com/nicky_brod'>Instagram</Link></li>
                    <li><Link href='https://github.com/nbrodbec'>GitHub</Link></li> 
                </ul>
                <h3>Need to encrypt your communication with me?</h3>
                <Accordion title='Use my public key'>
                    <div className='code-container'>
                        <code>
                            -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                            <br/>
                            mDMEYy9UghYJKwYBBAHaRw8BAQdAuxZn33soz8ZP1PRrOV8+CgcR6WivU88LR/MQ
                            rXHZlgK0EU5pY2hvbGFzIEJyb2RiZWNriJkEExYKAEEWIQRxxFUQmjdKnUWaSbkv
                            jEQxDw3nmAUCYy9UggIbAwUJA8ONfgULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIX
                            gAAKCRAvjEQxDw3nmKQrAP0bDE16PiooPF1xUyaCoxP/wBVS6n1Tz7RBWU3/h1xg
                            TgD8DauxCu+gVcOtAGouebR/cpJcep28r8o9Qyc2t7ofQAa4OARjL1SCEgorBgEE
                            AZdVAQUBAQdAJgJJu5ntMUnEWukZ2/fzeZ485WvEcWHX/+aPQz4QaBIDAQgHiH4E
                            GBYKACYWIQRxxFUQmjdKnUWaSbkvjEQxDw3nmAUCYy9UggIbDAUJA8ONfgAKCRAv
                            jEQxDw3nmKv8AQDnVHhyhNfK7lTHKgFLI+tSBP7cLMGyDurESUJoksMxWwD/bulW
                            zgFY1OPEihlyrz8ZWdeAE9tVrOY8qL8fgC26CAo=<br/>
                            =9ou2<br/>
                            -----END PGP PUBLIC KEY BLOCK-----
                        </code>
                    </div>
                </Accordion>
            </div>
        </div>
    )
}

export default Contact