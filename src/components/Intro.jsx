import Avatar from './Avatar'
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
                <motion.h1 className='name' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: 'easeIn'}}>Chris Kay</motion.h1>
                <motion.div className='underline' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, ease: 'easeInOut'}} />
                <SocialMedia />
                <Avatar />
            </Column>
            <Column>
                <div className='intro-description'>
                    <motion.h2 initial='initial' animate='animated' variants={item} custom='1.1'>Full Stack Developer</motion.h2>
                    <motion.p initial='initial' animate='animated' variants={item} custom='1.3'>
                        Hello! My name is Chris Kay and I'm a full stack software engineer with a passion for technology.
                        I'm interested in finding a position as a junior developer at a company where I can learn from more experienced engineers and improve and expand my skillset. 
                    </motion.p>
                </div>
            </Column>
        </div>
    )
}
export default Intro