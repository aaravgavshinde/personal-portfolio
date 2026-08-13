import React from 'react'
// import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Footer from '../components/Footer';
import HERO from '../components/HERO'
// import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import Projects2 from '../components/Projects2';
import Certificates2 from '../components/Certificates2';

export default function Home(props) {
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
