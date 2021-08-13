import SocialMedia from './SocialMedia'
import { HiOutlineMail } from 'react-icons/hi'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Footer = () => {
    const { scrollYProgress } = useViewportScroll()
    const pathLength = useTransform(scrollYProgress, [.98, 1], [0, 1])
    const hexColor = useTransform(scrollYProgress, [.98, 1], ['#fff', '#ea5b5d'])
    const fillColor = useTransform(scrollYProgress, [.99, 1], ['#000', '#333'])

    return (
        <div className='footer'>
            <div className='contact-me'>
                <h3>Have a job or project? Talk to me.</h3>
                <a href='mailto:ckay84@protonmail.com'>
                    ckay84@protonmail.com
                    <HiOutlineMail style={{marginLeft: '10px'}}/>
                </a>
            </div>

            <div style={{height: '70px', display: 'flex', justifyContent: 'center'}}>
                <svg height='60px' width='60px'>
                    <motion.path d='M30 5, 5 20, 5 40, 30 55, 55 40, 55 20, 30 5'
                        stroke='var(--red)'
                        strokeWidth='3px' 
                        style={{pathLength: pathLength, stroke: hexColor, fill: fillColor}}
                    />
                    <text x='50%' y='50%' style={{transform: 'translate(-14px, 7px'}}>
                        CK
                    </text>
                </svg>
            </div>
            <div className='thanks'>
                <p>Thanks for visiting!</p>
            </div>
            <div className='social-media-footer'>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Footer