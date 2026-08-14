import React from 'react'
import '../styles/Resume.css'
import '../styles/Common-CSS.css'
import resumePdf from '../assets/Assets/Aarav_Gavshinde.pdf';

export default function Resume({componentRef}) {
    return (
        <div className='resume-main-div'>
            <div className="main-heading" ref={componentRef}>Resume</div>
            <div className="resume-buttons">
                <a href={resumePdf} target='_blank' rel="noreferrer" className='resume-btn resume-open'>
                    <i className="fa fa-external-link" aria-hidden="true"></i> Open PDF
                </a>
                <a href={resumePdf} download="AaravGavshinde_Resume" className='resume-btn resume-download'>
                    <i className="fa fa-download" aria-hidden="true"></i> Download PDF
                </a>
            </div>
        </div>
    )
}
