import Column from './Column'
import Stack from './Stack'
import Proficiencies from './Proficiencies'

const Skills = () => {
    return (
        <div className='skills'>
            <Column>
                <Stack />
            </Column>
            <Column>
                <Proficiencies />
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