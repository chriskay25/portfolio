import liLogo from '../assets/linkedin-32.png'
import ghLogo from '../assets/gh-light-sm.png'

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <img src={liLogo} alt='linked-in-logo' />
            <img src={ghLogo} alt='github-logo' />
        </div>
    )
}

export default SocialMedia