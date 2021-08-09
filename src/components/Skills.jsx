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
            </Column>
        </div>
    )
}

export default Skills