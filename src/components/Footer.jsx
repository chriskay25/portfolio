import SocialMedia from './SocialMedia'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
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
                    <polygon points='30 5, 5 20, 5 40, 30 55, 55 40, 55 20'
                        stroke='var(--red)'
                        strokeWidth='3px' />
                    <text x='50%' y='50%' style={{transform: 'translate(-14px, 6px'}}>
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