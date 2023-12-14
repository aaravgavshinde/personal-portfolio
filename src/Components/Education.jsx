import React from 'react'
import './Education.css'
import './Common-CSS.css'

export default function Education({componentRef}) {
    return (
        <div className='education-main-div'>
            <div className='education-main-div-inner'>
                <div className='main-heading' ref={componentRef}>Education</div>
                <img className='my-education' src="./Images/education.png" alt="" />
            </div>
        </div>
    )
}
