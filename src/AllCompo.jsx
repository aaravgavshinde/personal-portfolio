import React from 'react'
// import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import HERO from './Components/HERO'
// import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Projects2 from './Components/Projects2';
import Certificates2 from './Components/Certificates2';

export default function AllCompo(props) {
    return (
        <div>
            <HERO />
            <Skills componentRef={props.skills} />
            <Projects2 componentRef={props.projects}/>
            {/* <Projects  /> */}
            <Resume componentRef={props.resume} />
            <Contact componentRef={props.contact} />
            <Certificates2  componentRef={props.certificates}/>
            {/* <Certificates /> */}
            <Education componentRef={props.education} />
            <Footer />
        </div>
    )
}
