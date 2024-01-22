import React from 'react'
import './Certificates2.css'
import './Common-CSS.css'

export default function Certificates2({ componentRef }) {
    return (
        <div className='certificates-main-div'>
            <div className="main-heading" ref={componentRef}>Certificates</div>
            <div className='certificates-box'>
                <div className='certificate'>
                    <div className='certi-1'>
                        <div> <span>Front-End</span> - HTML, CSS, JavaScript, DOM, jQuery, Bootstrap </div>
                        <div> Digital Savers Pvt. Ltd. </div>
                    </div>
                    <div className='certi-2'>
                        <a href="">See PDF</a>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certi-1'>
                        <div> <span>Back-End</span> - Node.js, Express.js, Database - MongoDB </div>
                        <div> Digital Savers Pvt. Ltd. </div>
                    </div>
                    <div className='certi-2'>
                        <a href="">See PDF</a>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certi-1'>
                        <div> <span>React.js</span> - React.js, Redux </div>
                        <div> Digital Savers Pvt. Ltd. </div>
                    </div>
                    <div className='certi-2'>
                        <a href="">See PDF</a>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certi-1'>
                        <div> <span>Artificial Intelligence</span> - Generative AI, Prompt Engineering </div>
                        <div> NxtWave </div>
                    </div>
                    <div className='certi-2'>
                        <a href="">See PDF</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
