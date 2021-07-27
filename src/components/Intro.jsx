import Avatar from './Avatar'
import Column from './Column'
import SocialMedia from './SocialMedia'

const Intro = () => {
    return (
        <div className='intro'>
            <Column>
                <h1 className='name'>Chris Kay</h1>
                <div style={{height: '5px', width: '20%', background: 'var(--red)', marginBottom: '5px'}} />
                <SocialMedia />
                <Avatar />
            </Column>
            <Column>
                <div className='intro-description'>
                    <h2>Full Stack Developer</h2>
                    <p>
                        Hello! My name is Chris Kay and I'm a full stack software engineer with a passion for technology.
                        I'm interested in finding a position as a junior developer at a company where I can learn and grow
                        as an engineer. 
                    </p>
                </div>
            </Column>
        </div>
    )
}
export default Intro