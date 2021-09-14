import React, { useEffect } from 'react'
import { motion, useViewportScroll, AnimatePresence, useTransform } from 'framer-motion'
import { proficiencyData } from '../assets/data'

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
    animated: {opacity: 1, y: 0, transition: {type: 'spring', stiffness: 30}},
    exit: {opacity: 0, y: '90px'}
}

const Proficiencies = () => {
    const { scrollYProgress } = useViewportScroll()

    useEffect(() => {
        scrollYProgress.onChange(y => {
            console.log('ycurrent: ', y)
        })
        console.log('scrollYProgress: ', scrollYProgress.current)
    })

    return (
        <div className='proficiencies'>
            <motion.h2 initial={{opacity: 0, y: '40px'}} animate={{opacity: 1, y: 0}} transition={{delay: 2, duration: .6}}>
                RELEVANT SKILLS & KNOWLEDGE
            </motion.h2>
            <motion.ul initial='initial' animate='animated' variants={fadeIn}>
                <AnimatePresence>
                    {proficiencyData.map((p, i) => (
                        <motion.li key={i} variants={item}>
                            {p.proficiency}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </div>
    )
}

export default Proficiencies