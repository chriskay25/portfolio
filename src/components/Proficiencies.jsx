import React, { useState, useEffect, useRef } from 'react'
import { motion, useViewportScroll, AnimatePresence } from 'framer-motion'
import { proficiencyData } from '../assets/data'

const fadeIn = (wide) => ({
    initial: {
        opacity: 0,
    },
    animated: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: .2,
            delay: wide ? '4s' : '.5s',
        }
    },
})

const item =  {
    initial: {opacity: 0, y: '90px',},
    animated: {opacity: 1, y: 0, transition: {type: 'spring', stiffness: 30}},
}

const Proficiencies = () => {
    const ref = useRef()
    const [visible, setVisible] = useState(false)
    const [wide, setWide] = useState(false)
    const { scrollYProgress } = useViewportScroll()

    useEffect(() => {
        if (ref.current.offsetTop < 800) {
            setWide(true)
            setVisible(true)
        }
        scrollYProgress.onChange(y => {
            console.log(y)

            if (ref.current.offsetTop > 900) {
                y > .15 && setVisible(true)
                y < .15 && setVisible(false)
            }
        })
    }, [scrollYProgress])

    return (
        <div className='proficiencies' ref={ref}>
            <motion.h2 initial={{opacity: 0, y: '40px'}} animate={{opacity: 1, y: 0}} transition={{delay: 4.7, duration: .6}}>
                RELEVANT SKILLS & KNOWLEDGE
            </motion.h2>

                <AnimatePresence>
            <motion.ul initial='initial' animate={visible ? 'animated' : 'initial'} variants={fadeIn} custom={wide}>
                    {proficiencyData.map((p, i) => (
                        <motion.li key={i} variants={item} custom={wide}>
                            {p.proficiency}
                        </motion.li>
                    ))}
            </motion.ul>
                </AnimatePresence>
        </div>
    )
}

export default Proficiencies