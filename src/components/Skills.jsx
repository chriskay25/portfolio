import Column from './Column'
import Stack from './Stack'
import Proficiencies from './Proficiencies'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Skills = () => {
    const { scrollYProgress } = useViewportScroll()
    const glow = useTransform(scrollYProgress, [0, .2], ['0 0 0px 0px var(--red)', '0 0 14px 10px var(--red)'])

    return (
        <motion.div className='skills' style={{boxShadow: glow}}>
            <Column>
                <Stack />
            </Column>
            <Column>
                <Proficiencies />
            </Column>
        </motion.div>
    )
}

export default Skills