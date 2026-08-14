import React from 'react'
import '../styles/Education.css'
import '../styles/Common-CSS.css'

export default function Education({componentRef}) {
    return (
        <div className='education-main-div'>
            <div className='education-main-div-inner'>
                <div className='main-heading' ref={componentRef}>Education</div>
                
                <div className="education-timeline">
                    
                    {/* Item 1: B.Tech */}
                    <div className="timeline-item">
                        <div className="timeline-dot">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                        <div className="education-card">
                            <div className="edu-content">
                                <div className="edu-year">2021 - 2025</div>
                                <h3 className="edu-degree">B.Tech in Computer Science and Engineering</h3>
                                <h4 className="edu-institute">Samrat Ashok Technological Institute, Vidisha (M.P.)</h4>
                                <div className="edu-score">
                                    <span className="score-label">CGPA:</span>
                                    <span className="score-value">8.04</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: 12th */}
                    <div className="timeline-item">
                        <div className="timeline-dot">
                            <i className="fa fa-book" aria-hidden="true"></i>
                        </div>
                        <div className="education-card">
                            <div className="edu-content">
                                <div className="edu-year">2020 - 2021</div>
                                <h3 className="edu-degree">Higher Secondary (Class 12th)</h3>
                                <h4 className="edu-institute">Vinay Bal Mandir, Khargone (M.P.)</h4>
                                <div className="edu-score">
                                    <span className="score-label">Percentage:</span>
                                    <span className="score-value">89.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: 10th */}
                    <div className="timeline-item">
                        <div className="timeline-dot">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </div>
                        <div className="education-card">
                            <div className="edu-content">
                                <div className="edu-year">2018 - 2019</div>
                                <h3 className="edu-degree">High School (Class 10th)</h3>
                                <h4 className="edu-institute">Aditya Vidya Vihar, Khargone (M.P.)</h4>
                                <div className="edu-score">
                                    <span className="score-label">Percentage:</span>
                                    <span className="score-value">89.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
