import React from 'react'
import '../styles/Education.css'
import '../styles/Common-CSS.css'
import img_0 from '../assets/Images/education.png';

export default function Education({componentRef}) {
    return (
        <div className='education-main-div'>
            <div className='education-main-div-inner'>
                <div className='main-heading' ref={componentRef}>Education</div>
                <img className='my-education' src={img_0} alt="" />
            </div>
        </div>
    )
}
