import './App.css';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
// import HERO from './Components/HERO'
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

function App() {

  return (
    <div className='app-bg'>
      {/* <HERO /> */}
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Certificates />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
