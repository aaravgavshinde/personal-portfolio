import React from 'react'
import './Contact.css'
import './Common-CSS.css'

export default function Contact({componentRef}) {
    return (
        <div className='contact-main-div'>
            <div className="contact-main-div-inner">
                <div className='main-heading' ref={componentRef}>
                    Contact
                </div>
                <div className='contact-box'>
                    <div className="contact-box-inner">
                        <div className="contact-head">LinkedIn</div>
                        <div className="contact-content"><a href="https://www.linkedin.com/in/aarav-gavshinde/" target='_blank'>Aarav Gavshinde &gt;</a></div>
                    </div>
                    <div className="contact-box-inner">
                        <div className="contact-head">Gmail ID</div>
                        <div className="contact-content cc-2"><a href="">aaravgavshinde@gmail.com</a></div>
                    </div>
                    <div className="contact-box-inner">
                        <div className="contact-head">WhatsApp</div>
                        <div className="contact-content">+91 7898733798</div>
                    </div>
                    <div className="contact-box-inner">
                        <div className="contact-head">Instagram</div>
                        <div className="contact-content"><a href="https://www.instagram.com/aaravgavshinde/">Aarav Gavshinde &gt;</a></div>
                    </div>
                    <div className="contact-box-inner">
                        <div className="contact-head">GitHub</div>
                        <div className="contact-content cc-2"><a href="https://github.com/aaravgavshinde">aaravgavshinde &gt;</a></div>
                    </div>
                </div>
                <div className='hire-me'>
                    <a href=""><button className='hire-me-button'>Hire Me</button></a>
                </div>
            </div>
        </div>
    )
}
