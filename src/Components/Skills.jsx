import React from 'react'
import './Skills.css'
import './Common-CSS.css'
// GSAP
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Skills({componentRef}) {

    useGSAP (() => {
        gsap.from('.skill-ani-1', {
            x: -100,
            duration: 0.5,
            ease: 'power1.in',
            opacity: 0,
            scrollTrigger: {
                trigger: ".skills-main-div",
                start: 'top 90%',
                toggleActions: "restart complete restart reverse", //play, pause, resume, reverse, restart, reset, complete, none
            }
        })
        gsap.from('.skill-ani-2', {
            x: 100,
            duration: 0.5,
            opacity: 0,
            ease: 'power1.in',
            scrollTrigger: {
                trigger: ".skills-main-div",
                start: 'top 90%',
                toggleActions: "restart complete restart reverse", //play, pause, resume, reverse, restart, reset, complete, none
            }
        })
    })

    return (
        <div className='skills-main-div'>
            <div className='main-heading' ref={componentRef}>Skills</div>
            <div className='skills-box'>
                <div className="my-skill-1 my-skill skill-ani-1">
                    <div className="my-skill-head">Front End</div>
                    <div className="my-skill-content">HTML5, CSS3, JavaScript, React.js, jQuery, DOM</div>
                </div>
                <div className="my-skill-2 my-skill skill-ani-2">
                    <div className="my-skill-head">Database</div>
                    <div className="my-skill-content">MongoDB</div>
                </div>
                <div className="my-skill-3 my-skill skill-ani-1">
                    <div className="my-skill-head">Back End</div>
                    <div className="my-skill-content">Node.js, Express.js</div>
                </div>
                <div className="my-skill-4 my-skill skill-ani-1">
                    <div className="my-skill-head">State Management</div>
                    <div className="my-skill-content">Redux</div>
                </div>
                <div className="my-skill-5 my-skill skill-ani-2">
                    <div className="my-skill-head">Additional</div>
                    <div className="my-skill-content">Bootstrap, Tailwind CSS</div>
                </div>
                <div className="my-skill-6 my-skill skill-ani-1">
                    <div className="my-skill-head">Tools and Technologies</div>
                    <div className="my-skill-content">Git / GitHub, VS Code</div>
                </div>
                <div className="my-skill-7 my-skill skill-ani-2">
                    <div className="my-skill-head">Artificial Intelligence</div>
                    <div className="my-skill-content">Prompt Engineering, Generative AI</div>
                </div>
                <div className="my-skill-8 my-skill skill-ani-1">
                    <div className="my-skill-head">Web Design</div>
                    <div className="my-skill-content">Concepts of Web Design, Figma</div>
                </div>
                <div className="my-skill-9 my-skill skill-ani-2">
                    <div className="my-skill-head">API Integration</div>
                    <div className="my-skill-content">REST APIs</div>
                </div>
                <div className="my-skill-10 my-skill skill-ani-2">
                    <div className="my-skill-head">Data Structure</div>
                    <div className="my-skill-content">C / C++</div>
                </div>
            </div>
        </div>
    )
}
