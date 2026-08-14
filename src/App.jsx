import './styles/App.css';
import { useEffect, useRef, useState } from 'react'
import './styles/HERO.css'
import MoreAboutMe from './pages/MoreAboutMe';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HireMe from './pages/HireMe';

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const certificates = useRef(null);
  const education = useRef(null);
  // const extracurricular = useRef(null);

  const handleScrollTo = (e, ref) => {
    e.preventDefault();
    const yOffset = -80; // Gap above the main heading
    const element = ref.current;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setShowMediaIcons(false);
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMediaIcons = (e) => {
    e.preventDefault(); // Prevent default behavior
    setShowMediaIcons(!showMediaIcons);
  };

  const location = useLocation();
  // Check if the current location matches a specific route where we want to hide the navbar
  const hideNavbar = location.pathname === '/aboutme' || location.pathname === '/hireme';

  return (
    <div className='app-bg'>

      {!hideNavbar && <div className="hamburger-button">
        <a href="#" onClick={toggleMediaIcons} aria-label="Toggle Navigation">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>}
      
      {showMediaIcons && <div className="sidebar-overlay" onClick={() => setShowMediaIcons(false)}></div>}
      {!hideNavbar && <nav className='main-nav'>
        <div className={showMediaIcons ? "nav-link mobile-nav-link" : "nav-link"} >
          <ul>
            <li><a href='/aboutme'>More About Me</a></li>
            <li><a href="#" onClick={(e) => handleScrollTo(e, skills)}>Skills</a></li>
            <li><a href="#" onClick={(e) => handleScrollTo(e, projects)}>Projects</a></li>
            <li><a href="#" onClick={(e) => handleScrollTo(e, resume)}>Resume</a></li>
            <li><a href="#" onClick={(e) => handleScrollTo(e, contact)}>Contact</a></li>
            <li><a href="#" onClick={(e) => handleScrollTo(e, certificates)}>Certificates</a></li>
            <li><a href="#" onClick={(e) => handleScrollTo(e, education)}>Education</a></li>
            {/* <li><a onClick={compoG}>Extra-Curricular</a></li> */}
          </ul>
        </div>
      </nav >}
      <div className='button-to-top'>
        <button aria-label="Scroll to top">{showUpArrow && <i onClick={scrollToTop} className="fa fa-arrow-up" aria-hidden="true"></i>}</button>
      </div>
      
      <Routes>
        <Route exact path="/" element={<Home skills={skills} projects={projects} certificates={certificates} education={education} resume={resume} contact={contact} />} />
        <Route exact path='/aboutme' element={<MoreAboutMe />} />
        <Route exact path='/hireme' element={<HireMe />} />
      </Routes>

    </div>
  );
}

export default App;
