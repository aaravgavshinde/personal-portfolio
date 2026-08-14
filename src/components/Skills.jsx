import React from 'react'
import '../styles/Skills.css'
import '../styles/Common-CSS.css'
import { skillsData } from '../data/skillsData';
// GSAP
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Skills({componentRef}) {

    useGSAP(() => {
        gsap.from('.my-skill', {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ".skills-main-div",
                start: 'top 80%',
                toggleActions: "play none none reverse",
            }
        });
    });

    return (
        <div className='skills-main-div'>
            <div className='main-heading' ref={componentRef}>Skills</div>
            <div className='skills-box'>
                {skillsData.map((skill, index) => (
                    <div className="my-skill" key={index}>
                        <div className="my-skill-head">{skill.head}</div>
                        <div className="my-skill-content">{skill.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
