import Avatar from './Avatar'
import Column from './Column'

const Intro = () => {
    return (
        <div className='intro'>
            <Column>
                <h1 className='name'>Chris Kay</h1>
                <div style={{height: '5px', width: '20%', background: 'var(--red'}} />
                <Avatar />
            </Column>
            <Column>
                <h2 style={{fontFamily: 'Montserrat'}}>Full Stack Developer</h2>
                <p>
                    Hello! My name is Chris Kay and I'm a full stack software engineer with a passion for technology.
                    I'm interested in finding a position as a junior developer at a company where I can learn and grow
                    as an engineer. 
                </p>
            </Column>
        </div>
    )
}

export default Intro