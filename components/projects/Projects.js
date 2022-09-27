import Slidein from '../slidein/Slidein.js'
import Link from '../link/Link.js'
import Project from './project/Project.js'
import { motion } from 'framer-motion'
import classes from '../contentPage.module.css'

function Projects(params) {
    return (
        <div className={classes.contentPage} id="projects">
            <div className={classes.contents}>
                <Slidein fromRight >
                    <h1 style={{textAlign: 'right'}}>Projects</h1>
                </Slidein>
                <p>
                    One of my biggest hobbies is game development. In fact, making games was what got me interested in programming in the first place!
                    Therefore, many of my most intricate projects have been video games. My most succesful games are listed below, as well as a few other
                    technical projects.
                </p>
                <h3>Take a look!</h3>
                <div className='grid'>
                    {/* Surviving Sakura */}
                    <Project
                        title='Surviving Sakura'
                        img='https://tr.rbxcdn.com/b7e0d5b0e84e2299641f3cbb144dd51a/150/150/Image/Png'
                        linkText='Released May 2021'
                        href='https://www.roblox.com/games/6851155308/Surviving-Sakura'
                    >
                        <ul>
                            <li>Multiplayer horror game where 1 player is chosen to be the &apos;Killer&apos; and the others must escape the building</li>
                            <li><b>Technologies used:</b>
                                <ul>
                                    <li><b>Luau</b> scripting language</li>
                                    <li><b>Roblox</b> Studio</li>
                                    <li><b>Visual Studio Code</b></li>
                                </ul>
                            </li>
                            <li><b>Total Plays:</b> over 5 million</li>
                            <li><b>Average Concurrent User Count:</b> ~70</li>
                        </ul>
                    </Project>
                    {/* Never Have I Ever */}
                    <Project
                        title='Never Have I Ever!'
                        img='https://tr.rbxcdn.com/128012e2cb7cae23009d8e88c2f00d62/150/150/Image/Png'
                        linkText='Released July 2021'
                        href='https://www.roblox.com/games/7071474933/Never-have-I-ever'
                    >
                        <ul>
                            <li>Multiplayer game which follows the rules of the popular children&apos;s party game, &apos;Never Have I Ever&apos;</li>
                            <li><b>Technologies used:</b>
                                <ul>
                                    <li><b>Luau</b> scripting language</li>
                                    <li><b>Roblox</b> Studio</li>
                                    <li><b>Visual Studio Code</b></li>
                                </ul>
                            </li>
                            <li><b>Total Plays:</b> over 31 million</li>
                            <li><b>Average Concurrent User Count:</b> ~200</li>
                        </ul>
                    </Project>
                    {/* Spin the Bottle */}
                    <Project
                        title='Spin the Bottle'
                        img='https://tr.rbxcdn.com/059a04c591d94e1497a04c39acf6f963/150/150/Image/Png'
                        linkText='Released November 2021'
                        href='https://www.roblox.com/games/7133467811/Anime-Spin-the-Bottle'
                    >
                        <ul>
                            <li>Russian-Roulette-styled game where players take turns choosing another player to fire a gun at, hoping to eliminate them and be the last player standing</li>
                            <li><b>Technologies used:</b>
                                <ul>
                                    <li><b>Luau</b> scripting language</li>
                                    <li><b>Roblox</b> Studio</li>
                                    <li><b>Visual Studio Code</b></li>
                                    <li><b>Git</b></li>
                                </ul>
                            </li>
                            <li><b>Total Plays:</b> over 36 million</li>
                            <li><b>Average Concurrent User Count:</b> ~500</li>
                        </ul>
                    </Project>
                    {/* PAFD */}
                    <Project
                        title='Put a Finger Down!'
                        img='https://tr.rbxcdn.com/6251bc89e8a7e2a29307152daec450b9/150/150/Image/Png'
                        linkText='Released January 2022'
                        href='https://www.roblox.com/games/8434554277/Put-A-Finger-Down'
                    >
                        <ul>
                            <li>Multiplayer party game where players are given a prompt and they must put a finger down if it applies to them</li>
                            <li><b>Technologies used:</b>
                                <ul>
                                    <li><b>Luau</b> scripting language</li>
                                    <li><b>Roblox</b> Studio</li>
                                    <li><b>Visual Studio Code</b></li>
                                    <li><b>Git</b></li>
                                </ul>
                            </li>
                            <li><b>Total Plays:</b> over 8.8 million</li>
                            <li><b>Average Concurrent User Count:</b> ~200</li>
                        </ul>
                    </Project>
                    {/* Exposed */}
                    <Project
                        title='Exposed!'
                        img='https://tr.rbxcdn.com/703ad9c3d3f6774e07f7ca035ce410b0/150/150/Image/Png'
                        linkText='Released November 2021'
                        href='https://www.roblox.com/games/8002617744/Exposed'
                    >
                        <ul>
                            <li>Multiplayer party game where players are given a question which they must answer, and then players vote for the best answer among the group</li>
                            <li><b>Technologies used:</b>
                                <ul>
                                    <li><b>Luau</b> scripting language</li>
                                    <li><b>Roblox</b> Studio</li>
                                    <li><b>Visual Studio Code</b></li>
                                    <li><b>Git</b></li>
                                </ul>
                            </li>
                            <li><b>Total Plays:</b> over 9.7 million</li>
                            <li><b>Average Concurrent User Count:</b> ~200</li>
                        </ul>
                    </Project>
                </div>
                <h3>Other technical projects:</h3>
                <div className='grid'>
                    {/* Minesweeper */}
                    <Project
                        title='Minesweeper'
                        linkText='Created November 2020'
                        href='https://github.com/cowsoncows/IntroToProgramming_Project'
                    >
                        <ul>
                            <li>Terminal-based implementation of the classic game Minesweeper</li>
                            <li>Written in <b>Python</b> using <b>PyCharm</b></li>
                        </ul>
                    </Project>
                    {/* Website */}
                    <Project
                        title='This Website!'
                        linkText='Published September 2022'
                        href=''
                    >
                        <ul>
                            <li>Personal website to showcase myself and my portfolio</li>
                            <li>Developed using <b>Next.js</b>, (a <b>React.js</b> framework) and written in <b>JavaScript/JSX</b> & <b>CSS</b></li>
                            <li>Made use of Next.js&apos;s <b>Server-Side Rendering</b> capabilities</li>
                            <li>Interacted with <b>Spotify&apos;s Developer API</b></li>
                            <li>Used <motion.b style={{display:'inline-block'}} initial={{ color: '#ec4b4b' }} animate={{ color: '#4b4bec' }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse'}}>Framer Motion</motion.b> for animations</li>
                        </ul>
                    </Project>
                </div>
            </div>  
        </div>
    )
}

export default Projects