import React from 'react'
import '../styles/Resume.css'
import '../styles/Common-CSS.css'
import img_0 from '../assets/Images/resume.jpg';
import resumePdf from '../assets/Assets/Aarav_Resume.pdf';

export default function Resume({componentRef}) {
    return (
        <div className='resume-main-div'>
            <div className="main-heading" ref={componentRef}>Resume</div>
            <div className="resume-buttons">
                <button className='resume-open'><a href="https://drive.google.com/file/d/1UId4K8KqraNyersMjpUZnx7JNFpjFx7a/view?usp=sharing" target='_blank'>Open PDF</a></button>
                <button className='resume-download'><a href={resumePdf} download="AaravGavshinde">Download PDF</a></button>
            </div>
            <div className="my-resume">
                <img src={img_0} alt="sorry :( please see pdf form" />
            </div>
        </div>
    )
}
