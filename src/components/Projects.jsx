import Column from './Column'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h2 className='projects-header'>Personal Projects</h2>
            <div className='projects'>
                <Column>
                    <div className='project-container'>
                        <h3>React Game</h3>
                        <div className='project-description'>
                            <p><b>Frontend:</b> React</p>
                            <p><b>Backend:</b> Ruby on Rails</p>
                            <p>
                                This is a game built using mostly pure React and state management for frontend operations. 
                                High scores are saved to user accounts on the backend.
                            </p>
                        </div>
                    </div>
                    <div className='project-container'>
                        <h3>Flashcards</h3>
                        <div className='project-description'>
                            <p><b>Frontend:</b> Currently uses React. Originally built using pure Javascript</p>
                            <p><b>Backend:</b> Ruby on Rails</p>
                            <p>
                                A web app that allows users to create their own flashcard decks which they can 
                                use to study and quiz themselves.
                            </p>
                        </div>
                    </div>
                    <div className='project-container'>
                        <h3>Notepod</h3>
                        <div className='project-description'>
                            <p><b>Frontend:</b> Currently uses React. Originally built using Embedded Ruby (ERB), and CSS</p>
                            <p><b>Backend:</b> Ruby on Rails</p>
                            <p>
                                Web app created to allow users to make and share notes about their favorite podcast episodes.
                            </p>
                        </div>
                    </div>
                    <div className='project-container'>
                        <h3>Bucket List</h3>
                        <div className='project-description'>
                            <p><b>Frontend:</b> Embedded Ruby (ERB) & CSS</p>
                            <p><b>Backend:</b> Sinatra</p>
                            <p>
                                A web app that lets users track and remember things activities
                                and destinations that are on their bucket list.
                            </p>
                        </div>
                    </div>
                    <div className='project-container'>
                        <h3>Brewery Finder</h3>
                        <div className='project-description'>
                            <p>
                                This is a project that uses a CLI interface and scrapes the web
                                to provide users information about Atlanta breweries.
                            </p>
                        </div>
                    </div>
                </Column>
            </div>
        </div>
    )
}

export default Projects