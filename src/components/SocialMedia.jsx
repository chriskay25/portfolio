import liLogo from '../assets/linkedin-32.png'
import ghLogo from '../assets/gh-light-sm.png'
import { motion } from 'framer-motion'

const SocialMedia = () => {

    const handleLiClick = () => {
        window.location.href = 'https://linkedin.com/in/chris-kay-4060bb61'
    }

    const handleGhClick = () => {
        window.location.href = 'https://github.com/chriskay25'
    }

    return (
        <motion.div className='social-media' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.6, duration: .8, ease: 'easeIn'}}>
            <img src={liLogo} alt='linked-in-logo' onClick={() => handleLiClick} />
            <img src={ghLogo} alt='github-logo' onClick={() => handleGhClick()} />
        </motion.div>
    )
}

export default SocialMedia