import liLogo from '../assets/linkedin-32.png'
import ghLogo from '../assets/gh-light-sm.png'

const SocialMedia = () => {

    const handleLiClick = () => {
        window.location.href = 'https://linkedin.com/in/chris-kay-4060bb61'
    }

    const handleGhClick = () => {
        window.location.href = 'https://github.com/chriskay25'
    }

    return (
        <div className='social-media'>
            <img src={liLogo} alt='linked-in-logo' onClick={() => handleLiClick} />
            <img src={ghLogo} alt='github-logo' onClick={() => handleGhClick()} />
        </div>
    )
}

export default SocialMedia