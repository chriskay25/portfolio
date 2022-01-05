import dev from '../assets/avatar.png'
import { motion } from 'framer-motion'

const Avatar = () => {
    return (
        <motion.div className='avatar' initial={{opacity: 0, scale: .7}} animate={{opacity: 1, scale: 1}} transition={{delay: 1.2, duration: 1}}>
            <img src={dev} alt='dev-png' />
        </motion.div>
    )
}

export default Avatar