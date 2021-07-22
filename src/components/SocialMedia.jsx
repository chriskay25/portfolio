import liLogo from '../linkedin-32.png'
import ghLogo from '../gh-light-sm.png'

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <img src={liLogo} alt='linked-in-logo' />
            <img src={ghLogo} alt='github-logo' />
        </div>
    )
}

export default SocialMedia