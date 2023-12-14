import './App.css';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import HERO from './Components/HERO'
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import { useRef, useState } from 'react'
import './Components/HERO.css'

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const certificates = useRef(null);
  const education = useRef(null);
  // const extracurricular = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const compoA = () => {
    scrollToRef(skills);
  };
  const compoB = () => {
    scrollToRef(projects);
  };
  const compoC = () => {
    scrollToRef(resume);
  };
  const compoD = () => {
    scrollToRef(contact);
  };
  const compoE = () => {
    scrollToRef(certificates);
  };
  const compoF = () => {
    scrollToRef(education);
  };
  // const compoG = () => {
  //   scrollToRef(extracurricular);
  // };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className='app-bg'>
      <div className="hamburger-button">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
      <nav className="main-nav">
        <div className={showMediaIcons ? "nav-link mobile-nav-link" : "nav-link"}>
          <ul>
            <li><a href=''>More About Me</a></li>
            <li><a onClick={compoA}>Skills</a></li>
            <li><a onClick={compoB}>Projects</a></li>
            <li><a onClick={compoC}>Resume</a></li>
            <li><a onClick={compoD}>Contact</a></li>
            <li><a onClick={compoE}>Certificates</a></li>
            <li><a onClick={compoF}>Education</a></li>
            {/* <li><a onClick={compoG}>Extra-Curricular</a></li> */}
          </ul>

          {/* <ul>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>More About Me</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Skills</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Projects</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Resume</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Contact</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Certificates</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Education</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Extra-Curricular</NavLink></li>
          </ul> */}
        </div>
      </nav >
      <div className='button-to-top'>
        <a href=''><button><i class="fa fa-arrow-up" aria-hidden="true"></i></button></a>
      </div>

      <HERO />
      <Skills componentRef={skills} />
      <Projects componentRef={projects} />
      <Resume componentRef={resume} />
      <Contact componentRef={contact} />
      <Certificates componentRef={certificates} />
      <Education componentRef={education} />
      <Footer />
    </div>
  );
}

export default App;
