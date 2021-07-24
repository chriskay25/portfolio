import Column from './Column'

const Skills = () => {
    return (
        <div className='skills'>
            <Column>
                <h2>Technology I've Used</h2>
                <ul style={{listStyle: 'none'}}>
                    <li>Ruby / Rails</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
            </Column>
            <Column>
                <div className='skills-experience-container'>
                    <span className='number-large'>2 </span>
                    <div>
                        <span>Years of Experience</span>
                    </div>
                </div>
                <div className='skills-experience-container'>
                    <span className='number-large'>5 </span>
                    <div>
                        <span>Completed Projects</span> 
                    </div>
                </div>
            </Column>
        </div>
    )
}

export default Skills