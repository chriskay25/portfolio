import Column from './Column'
import rubyLogo from '../assets/ruby.png'
import railsLogo from '../assets/rails-logo-3.png'
import jsLogo from '../assets/js-logo.png'
import cssLogo from '../assets/css-logo-1.png'
import htmlLogo from '../assets/html-logo.png'
import nodeLogo from '../assets/node-logo-3.png'
import reactLogo from '../assets/react-logo.png'
import reduxLogo from '../assets/redux-logo.png'

const Skills = () => {
    return (
        <div className='skills'>
            <Column>
                <div className='skills-tech'>
                    <h2>My Software Stack</h2>
                    <ul>
                        <li>
                            <div>Ruby</div>
                            <img src={rubyLogo} alt='ruby logo' />
                        </li>
                        <li>
                            <div>Rails</div>
                            <img src={railsLogo} alt='rails logo' />
                        </li>
                        <li>
                            <div>Javascript</div>
                            <img src={jsLogo} alt='javascript logo' />
                        </li>
                        <li>
                            <div>React</div>
                            <img src={reactLogo} alt='react logo' />
                        </li>
                        <li>
                            <div>Redux</div>
                            <img src={reduxLogo} alt='redux-logo' />
                        </li>
                        <li>
                            <div>Node.js</div>
                            <img src={nodeLogo} alt='node logo' />
                        </li>
                        <li>
                            <div>CSS</div>
                            <img src={cssLogo} alt='css logo' />
                        </li>
                        <li>
                            <div>HTML</div>
                            <img src={htmlLogo} alt='html logo' />
                        </li>
                    </ul>
                </div>
            </Column>
            <Column>
                <div className='proficiencies'>
                    <h3>Relevant Skills & Knowledge</h3>
                    <ul>
                        <li>MVC Frameworks</li>
                        <li>Object Oriented Programming</li>
                        <li>SQL Databases (Sqlite and Postgress)</li>
                        <li>Authentication (Rails, JWT's, OAuth)</li>
                        <li>APIs</li>
                        <li>JSON</li>
                        <li>Git</li>
                        <li>Thunk</li>
                    </ul>
                </div>
                <div className='skills-experience-container'>
                    <span className='number-large'>2 </span>
                    <div>
                        <span>Years of Experience</span>
                    </div>
                </div>
                <div className='skills-experience-container'>
                    <span className='number-large'>5 </span>
                    <div>
                        <span>Portfolio Projects</span> 
                    </div>
                </div>
            </Column>
        </div>
    )
}

export default Skills