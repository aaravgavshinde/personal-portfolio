import React from 'react'
import '../styles/Certificates.css'
import '../styles/Common-CSS.css'
import '../styles/Projects.css'
import img_0 from '../assets/Images/frontend-certi.jpg';
import img_1 from '../assets/Images/frontend-loc.jpg';
import img_2 from '../assets/Images/react-certi.jpg';
import img_3 from '../assets/Images/react-loc.jpg';
import img_4 from '../assets/Images/frontend-certi.jpg';
import img_5 from '../assets/Images/frontend-loc.jpg';
import img_6 from '../assets/Images/ai-coc.png';
import img_7 from '../assets/Images/ai-cop.png';

export default function Certificates({componentRef}) {
    return (
        <div className='certificates-main-div'>
            <div className='certificates-main-div-inner'>
                <div className="main-heading" ref={componentRef}>Certificates</div>

                {/* Front End */}
                <div className='web-dev certificate-box'>
                    <div className='web-dev-1 certi-img'>
                        <img src={img_0} alt="front-end-certificate" />
                    </div>
                    <div className='web-dev-2'>
                        <div className='web-dev-loc loc-img'>
                            <img src={img_1} alt="front-end-loc" />
                        </div>
                        <div className='web-dev-details'>
                            <div>
                                <div className='proj-text-1'>Web Development - Front End</div>
                                <div className='proj-text-2'>Technologies Learned:</div>
                                <div className="proj-text-3">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>DOM</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <div className="proj-text-2">Course Duration:</div>
                                <div className="proj-text-3">January 2022 - February 2022</div>
                                <div className="proj-link"><a href="" target='_blank'>SEE IN PDF &gt;</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* React.js */}
                <div className='react certificate-box'>
                    <div className='react-1 certi-img'>
                        <img src={img_2} alt="react-certificate" />
                    </div>
                    <div className='react-2'>
                        <div className='react-details'>
                            <div>
                                <div className='proj-text-1'>React.js</div>
                                <div className='proj-text-2'>Technologies Learned:</div>
                                <div className="proj-text-3">
                                    <ul>
                                        <li>React.js</li>
                                        <li>Redux</li>
                                        <li>Git / GitHub</li>
                                        <li>REST APIs</li>
                                    </ul>
                                </div>
                                <div className="proj-text-2">Course Duration:</div>
                                <div className="proj-text-3">June 2023 - July 2023</div>
                                <div className="proj-link"><a href="" target='_blank'>SEE IN PDF &gt;</a></div>
                            </div>
                        </div>
                        <div className='web-dev-loc loc-img'>
                            <img src={img_3} alt="react-loc" />
                        </div>
                    </div>
                </div>

                {/* Back End */}
                <div className='web-dev certificate-box'>
                    <div className='backend-1 certi-img'>
                        <img src={img_4} alt="back-end-certificate" />
                    </div>
                    <div className='backend-2'>
                        <div className='web-dev-loc loc-img'>
                            <img src={img_5} alt="back-end-loc" />
                        </div>
                        <div className='backend-details'>
                            <div>
                                <div className='proj-text-1'>Back-End Development</div>
                                <div className='proj-text-2'>Technologies Learned:</div>
                                <div className="proj-text-3">
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                        <li>Pug.js</li>
                                    </ul>
                                </div>
                                <div className="proj-text-2">Course Duration:</div>
                                <div className="proj-text-3">June 2023 - July 2023</div>
                                <div className="proj-link"><a href="" target='_blank'>SEE IN PDF &gt;</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Generative AI */}
                <div className='ai certificate-box'>
                    <div className='proj-text-1'>Generative AI Workshop</div>
                    <div className="ai-details">
                        <div>
                            <div className='proj-text-2'>Technologies Learned:</div>
                            <div className='proj-text-3'>
                                <div>Prompt Engineering</div>
                                <div>Generative AI - Using Python</div>
                            </div>
                        </div>
                        <div>
                            <div className='proj-text-2'>Workshop Date:</div>
                            <div className='proj-text-3'>26th August 2023</div>
                        </div>
                    </div>
                    <div className='ai-img'>
                        <div className='certi-img'><img src={img_6} alt="" /></div>
                        <div className='certi-img'><img src={img_7} alt="" /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
