import React, { useState, useEffect, useRef } from 'react'
import { motion, useViewportScroll, AnimatePresence } from 'framer-motion'
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
    const ref = useRef()
    const [visible, setVisible] = useState(false)
    const { scrollYProgress } = useViewportScroll()

    useEffect(() => {
        if (ref.current.offsetTop < 900) setVisible(true)
        scrollYProgress.onChange(y => {
            console.log('ycurrent: ', y)
            if (ref.current.offsetTop > 900) {
                y > .15 && setVisible(true)
                y < .15 && setVisible(false)
            }
        })
    })

    return (
        <div className='proficiencies' ref={ref}>
            <motion.h2 initial={{opacity: 0, y: '40px'}} animate={{opacity: 1, y: 0}} transition={{delay: 2, duration: .6}}>
                RELEVANT SKILLS & KNOWLEDGE
            </motion.h2>
                <AnimatePresence>
            <motion.ul initial='initial' animate={visible ? 'animated' : 'initial'} variants={fadeIn}>
                    {proficiencyData.map((p, i) => (
                        <motion.li key={i} variants={item}>
                            {p.proficiency}
                        </motion.li>
                    ))}
            </motion.ul>
                </AnimatePresence>
        </div>
    )
}

export default Proficiencies