import React from 'react'
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import HERO from './Components/HERO'
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

export default function AllCompo(props) {
    return (
        <div>
            <HERO />
            <Skills componentRef={props.skills} />
            <Projects componentRef={props.projects} />
            <Resume componentRef={props.resume} />
            <Contact componentRef={props.contact} />
            <Certificates componentRef={props.certificates} />
            <Education componentRef={props.education} />
            <Footer />
        </div>
    )
}
