import React from 'react'
import './Resume.css'
import './Common-CSS.css'

export default function Resume({componentRef}) {
    return (
        <div className='resume-main-div'>
            <div className="main-heading" ref={componentRef}>Resume</div>
            <div className="resume-buttons">
                <button className='resume-open'><a href="https://drive.google.com/file/d/1qC8MXnHpb9geOEWmHsn0YiI4xKYArBXa/view?usp=sharing" target='_blank'>Open PDF</a></button>
                <button className='resume-download'><a href="./Assets/Aarav_Resume.pdf" download="AaravGavshinde">Download PDF</a></button>
            </div>
            <div className="my-resume">
                <img src="./Images/resume.jpg" alt="sorry :( please see pdf form" />
            </div>
        </div>
    )
}
