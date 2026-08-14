import React from 'react'
import '../styles/Certificates2.css'
import '../styles/Common-CSS.css'
import { certificatesData as certificates } from '../data/certificatesData';

export default function Certificates2({ componentRef }) {
    return (
        <div className='certificates-main-div'>
            <div className="main-heading" ref={componentRef}>Certificates</div>
            <div className='certificates-grid'>
                {certificates.map((cert, index) => (
                    <div className='cert-card' key={index}>
                        <div className="cert-header">
                            <div className="cert-icon">
                                <i className={`fa ${cert.icon}`}></i>
                            </div>
                            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link-btn">
                                View Certificate <i className="fa fa-external-link" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="cert-body">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-skills">{cert.skills}</p>
                        </div>
                        <div className="cert-footer">
                            <i className="fa fa-building-o" aria-hidden="true"></i>
                            <span className="cert-issuer">{cert.issuer}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
