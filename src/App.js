import './App.css';
import { useEffect, useRef, useState } from 'react'
import './Components/HERO.css'
import MoreAboutMe from './Components/MoreAboutMe';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AllCompo from './AllCompo';
import HireMe from './Components/HireMe';

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

  const compoA = (e) => {
    e.preventDefault();
    scrollToRef(skills);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoB = (e) => {
    e.preventDefault();
    scrollToRef(projects);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoC = (e) => {
    e.preventDefault();
    scrollToRef(resume);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoD = (e) => {
    e.preventDefault();
    scrollToRef(contact);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoE = (e) => {
    e.preventDefault();
    scrollToRef(certificates);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoF = (e) => {
    e.preventDefault();
    scrollToRef(education);
    setShowMediaIcons(!showMediaIcons);
  };
  // const compoG = () => {
  //   scrollToRef(extracurricular);
  // };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowUpArrow(true);
      }
      else {
        setShowUpArrow(false);
      }
    })
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
        <a href="#" onClick={toggleMediaIcons}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>}
      {!hideNavbar && <nav className='main-nav'>
        <div className={showMediaIcons ? "nav-link mobile-nav-link" : "nav-link"} >
          <ul>
            <li><a href='/aboutme'>More About Me</a></li>
            <li><a onClick={compoA}>Skills</a></li>
            <li><a onClick={compoB}>Projects</a></li>
            <li><a onClick={compoC}>Resume</a></li>
            <li><a onClick={compoD}>Contact</a></li>
            <li><a onClick={compoE}>Certificates</a></li>
            <li><a onClick={compoF}>Education</a></li>
            {/* <li><a onClick={compoG}>Extra-Curricular</a></li> */}
          </ul>
        </div>
      </nav >}
      <div className='button-to-top'>
        <button>{showUpArrow && <i onClick={scrollToTop} class="fa fa-arrow-up" aria-hidden="true"></i>}</button>
      </div>
      
      <Routes>
        <Route exact path="/" element={<AllCompo skills={skills} projects={projects} certificates={certificates} education={education} resume={resume} contact={contact} />} />
        <Route exact path='/aboutme' element={<MoreAboutMe />} />
        <Route exact path='/hireme' element={<HireMe />} />
      </Routes>

    </div>
  );
}

export default App;
