import Column from './Column'
import cliImg from '../assets/cheers-screenshot (2).png'
import jukeImg from '../assets/juke-2.png'
import flashImg from '../assets/flash-1.png'
import notepodImg from '../assets/notepod-ipad.png'
import bucketImg from '../assets/bucket-list-1.png'
import ghLogo from '../assets/gh-light-sm.png'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h2 className='projects-header'>Personal Projects</h2>
            <div className='projects'>
                <div className='project'>
                    <Column>
                        <div className='project-container'>
                            <h3>React Game</h3>
                            <img className='project-gh' src={ghLogo} alt='github-logo' onClick={() => window.location.href = 'https://github.com/chriskay25/juke'} />
                            <div className='project-description'>
                                <p><b>Frontend:</b> React</p>
                                <p><b>Backend:</b> Ruby on Rails</p>
                                <p>
                                    This is a game built using mostly pure React and state management for frontend operations. 
                                    High scores are saved to user accounts on the backend.
                                </p>
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <div className='project-example'>
                            <img src={jukeImg} alt='juke' />
                        </div>
                    </Column>
                </div>
                <div className='project'>
                    <Column>
                        <div className='project-container'>
                            <h3>Flashcards</h3>
                            <img className='project-gh' src={ghLogo} alt='github-logo' onClick={() => window.location.href = 'https://github.com/chriskay25/react-flashcards'} />
                            <div className='project-description'>
                                <p><b>Frontend:</b> Currently uses React. Originally built using pure Javascript</p>
                                <p><b>Backend:</b> Ruby on Rails</p>
                                <p>
                                    A web app that allows users to create their own flashcard decks which they can 
                                    use to study and quiz themselves.
                                </p>
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <div className='project-example'>
                                <img src={flashImg} alt='juke' />
                            </div>
                        </Column>
                </div>
                <div className='project'>
                    <Column>
                        <div className='project-container'>
                            <h3>Notepod</h3>
                            <img className='project-gh' src={ghLogo} alt='github-logo' onClick={() => window.location.href = 'https://github.com/chriskay25/notepod'} />
                            <div className='project-description'>
                                <p><b>Frontend:</b> Embedded Ruby (ERB), and CSS</p>
                                <p><b>Backend:</b> Ruby on Rails</p>
                                <p>
                                    Web app created to allow users to make and share notes about their favorite podcast episodes.
                                </p>
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <div className='project-example'>
                            <img id='notepod' src={notepodImg} alt='notepod' />
                        </div>
                    </Column>
                </div>
                <div className='project'>
                    <Column>
                        <div className='project-container'>
                            <h3>Bucket List</h3>
                            <img className='project-gh' src={ghLogo} alt='github-logo' onClick={() => window.location.href = 'https://github.com/chriskay25/bucket_list'} />
                            <div className='project-description'>
                                <p><b>Frontend:</b> Embedded Ruby (ERB) & CSS</p>
                                <p><b>Backend:</b> Sinatra</p>
                                <p>
                                    A web app that lets users track and remember travel destinations that are on their bucket list.
                                </p>
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <div className='project-example'>
                            <img id='bucket-list' src={bucketImg} alt='bucket list' />
                        </div>
                    </Column>
                </div>
                <div className='project'>
                    <Column>
                        <div className='project-container'>
                            <h3>Brewery Finder</h3>
                            <img className='project-gh' src={ghLogo} alt='github-logo' onClick={() => window.location.href = 'https://github.com/chriskay25/cheers'} />
                            <div className='project-description'>
                                <p>
                                    This is a project that uses a CLI interface and scrapes the web
                                    to provide users information about Atlanta breweries.
                                </p>
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <div className='project-example'>
                            <img src={cliImg} alt='cli' />
                        </div>
                    </Column>
                </div>
            </div>
        </div>
    )
}

export default Projects