import './App.css';
import Intro from './components/Intro'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Name from './components/Name'

function App() {
  return (
    <div className="App">
      <Name />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
