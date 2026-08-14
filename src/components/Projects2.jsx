import React, { useState } from 'react'
import '../styles/Projects2.css'
import '../styles/Common-CSS.css'
// GSAP
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData as projects } from '../data/projectsData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects2({ componentRef }) {
    const [modalImage, setModalImage] = useState(null);
    const [copiedIndex, setCopiedIndex] = useState(null);

    useGSAP(() => {
        gsap.from('.project2-card', {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ".projects2-main-div",
                start: 'top 80%',
                toggleActions: "play none none reverse",
            }
        });
    });



    const handleCopy = (link, index) => {
        navigator.clipboard.writeText(link);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    }

    const closeModal = () => setModalImage(null);

    return (
        <div className='projects2-main-div'>
            <div className="main-heading" ref={componentRef}>Projects</div>
            <div className='projects2-grid'>
                {projects.map((proj, index) => (
                    <div className='project2-card' key={index}>
                        <div className="proj2-img-wrapper" onClick={() => setModalImage(proj.img)}>
                            <img className='proj2-img' src={proj.img} alt={proj.title} loading="lazy" />
                            <div className="proj2-img-hover-hint">
                                <i className="fa fa-search-plus" aria-hidden="true"></i> Click to enlarge
                            </div>
                        </div>
                        <div className='proj2-content'>
                            <div className="proj2-header">
                                <h3 className='proj2-text'>{proj.title}</h3> 
                                <div className="proj2-actions">
                                    <button 
                                        className="proj-action-btn" 
                                        onClick={() => handleCopy(proj.link, index)}
                                        title="Copy Link"
                                    >
                                        <i className={`fa ${copiedIndex === index ? 'fa-check' : 'fa-copy'}`} aria-hidden="true"></i>
                                    </button>
                                    <a 
                                        href={proj.link} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="proj-action-btn"
                                        title="Open Link"
                                    >
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='proj2-stack'>
                                {proj.stack.map((tech, i) => (
                                    <span key={i} className="tech-capsule">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            {modalImage && (
                <div className="proj2-modal-overlay" onClick={closeModal}>
                    <div className="proj2-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="proj2-modal-close" onClick={closeModal}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <img src={modalImage} alt="Project Full View" className="proj2-modal-img" />
                    </div>
                </div>
            )}
        </div>
    )
}
