import { motion } from 'framer-motion'
import NameSVG from './NameSVG'
import SocialMedia from './SocialMedia'

const Name = () => {
    return (
        <div className='name'>
            <NameSVG />
            <motion.div className='underline' initial={{opacity: 0, width: '0px'}} animate={{opacity: 1, width: '120px'}} transition={{delay: 2.7, duration: 1, type: 'spring', ease: 'easeInOut'}} />
            <SocialMedia />
        </div>
    )
}

export default Name