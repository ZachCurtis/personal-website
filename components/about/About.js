import Slidein from '../slidein/Slidein.js'
import Link from '../link/Link.js'
import Music from './music/Music.js'
import classes from '../contentPage.module.css'

import Accordion from '../accordion/Accordion.js'

function About({ topTracks, playingTrack, topShows }) {
    return (
        <div className={classes.contentPage} id="about">
            <div className={classes.contents}>
                <Slidein>
                    <h1>Who am I?</h1>
                </Slidein>
                <h3>I&apos;m Nicky.</h3> 
                <p>
                    I&apos;m a student from Montréal, Québec, Canada and am currently pursuing a bachelor&apos;s degree in Computer Science 
                    at the University of Waterloo in Ontario, Canada. I expect to graduate by April 2026 and hope to work as a software engineer!
                    In the meantime, I am on the hunt for internships to gain me valuable industry experience.
                </p>
                <br/>
                <h3>Want to know more?</h3>
                <div className='grid'>
                    <Accordion title="What Kind of Music Do I Like?">
                        <p>In the last 4 weeks, my top songs on <Link href='https://open.spotify.com/user/1yblwfww13uw55zkxwfcsftix?si=a222118201384056'>Spotify</Link> have been...</p>
                        <Music tracks={topTracks} />
                        {playingTrack && playingTrack.is_playing && (
                            <>
                                <p>Right this instant, I&apos;m listening to...</p>
                                <Music tracks={[playingTrack.item]} />
                            </>
                        )}
                    </Accordion>
                    <Accordion title="What Podcasts Do I Like?">
                        <p>These are my currently saved podcasts. Check them out!</p>
                        <Music tracks={topShows} />
                    </Accordion>
                    <Accordion title='What Sports Do I Play?'>
                            <p>Some sports I enjoy in my free time are:</p>
                            <ul>
                                <li>Swimming</li>
                                <li>Waterpolo</li>
                                <li>Squash</li>
                            </ul>
                    </Accordion>
                    <Accordion title='What Instruments Do I Play?'>
                            <p>While I enjoy listening to music, playing music is even more fun and has been a hobby of mine since I was very young. Some instruments I play are:</p>
                            <ul>
                                <li>Guitar (both electric and acoustic)</li>
                                <li>Double bass</li>
                            </ul>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default About