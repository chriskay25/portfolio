import { motion } from 'framer-motion'

const fadeIn = {
    initial: {
        opacity: 0,
    },
    animated: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: .2,
            delay: 1.6,
            duration: .6,
        }
    },
}

const item = {
    initial: {opacity: 0, y: '90px',},
    animated: {opacity: 1, y: 0, transition: {type: 'spring', stiffness: 30}}
}

const Proficiencies = () => {
    return (
        <div className='proficiencies'>
            <motion.h2 initial={{opacity: 0, y: '40px'}} animate={{opacity: 1, y: 0}} transition={{delay: 2, duration: .6}}>
                RELEVANT SKILLS & KNOWLEDGE
            </motion.h2>
            <motion.ul initial='initial' animate='animated' variants={fadeIn}>
                <motion.li variants={item}>Object Oriented Programming</motion.li>
                <motion.li variants={item}>SQL Databases (Sqlite & Postgress)</motion.li>
                <motion.li variants={item}>Authentication (Rails, JWT's, OAuth)</motion.li>
                <motion.li variants={item}>Single Page Applications</motion.li>
                <motion.li variants={item}>MVC Frameworks</motion.li>
                <motion.li variants={item}>RESTful Applications</motion.li>
                <motion.li variants={item}>APIs</motion.li>
                <motion.li variants={item}>JSON</motion.li>
                <motion.li variants={item}>Git</motion.li>
                <motion.li variants={item}>Thunk</motion.li>
            </motion.ul>
        </div>
    )
}

export default Proficiencies