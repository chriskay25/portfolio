import SocialMedia from './SocialMedia'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact-me'>
                <h3>Have a job or project? Talk to me.</h3>
                <a href='mailto:ckay84@protonmail.com'>Send me an email   --></a>
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