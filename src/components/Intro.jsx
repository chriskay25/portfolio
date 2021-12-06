import Avatar from './Avatar'
import Name from './Name'
import Column from './Column'
import SocialMedia from './SocialMedia'
import { motion } from 'framer-motion'

const item = {
    initial: {
        opacity: 0,
        y: '40px',
    },
    animated: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i,
            duration: .6,
            ease: 'easeOut'
        }
    }),
}

const Intro = () => {
    return (
        <div className='intro'>
            <Column>
                <Name />
                <motion.div className='underline' initial={{opacity: 0, width: '0px'}} animate={{opacity: 1, width: '120px'}} transition={{delay: 2.7, duration: 1, type: 'spring', ease: 'easeInOut'}} />
                <SocialMedia />
                <Avatar />
            </Column>
            <Column>
                <div className='intro-description'>
                    <motion.h2 initial='initial' animate='animated' variants={item} custom='3.3'>FULL STACK DEVELOPER</motion.h2>
                    <motion.p initial='initial' animate='animated' variants={item} custom='3.6'>
                        Hello! My name is Chris Kay and I'm a full stack software engineer with a passion for technology.
                        I'm interested in finding a position as a junior developer at a company where I can learn from more experienced engineers and improve and expand my skillset. 
                    </motion.p>
                </div>
            </Column>
        </div>
    )
}
export default Intro