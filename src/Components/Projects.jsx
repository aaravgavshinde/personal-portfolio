import React from 'react'
import './Projects.css'
import './Common-CSS.css'

export default function Projects({componentRef}) {
    return (
        <div className='projects-main-div'>
            <div className="main-heading" ref={componentRef}>Projects</div>
            <div className='projects-box'>
                {/* E-Electronics */}
                <div className='project project-1'>
                    <div>
                        <a href="https://e-shop-ecommerce.onrender.com/" target='_blank'><img className='proj-img-1 proj-img' src="./Images/e-commerce.png" alt="hello" /></a>
                    </div>
                    <div className='proj-content'>
                        <div className='proj-text-1'>E-Electronics</div>
                        <div className='group-1'>
                            <div className='group-2'>
                                <div className='proj-text-2'>Technologies Used:</div>
                                <div className="proj-text-3 e-tech">
                                    <ul>
                                        <li>React.js</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='group-3'>
                                <div className="proj-text-2">Initial Development:</div>
                                <div className="proj-text-3">July 2023</div>
                            </div>
                        </div>

                        <div className="proj-link"><a href="https://e-shop-ecommerce.onrender.com/" target='_blank'>SEE LIVE &gt;</a></div>
                    </div>
                </div>

                {/* To-Do List */}
                <div className='project project-2'>
                    <div>
                        <a href="https://todoapp-6fxj.onrender.com/" target='_blank'><img className='proj-img-2 proj-img' src="./Images/todo-app.png" alt="" /></a>
                    </div>
                    <div className='proj-content'>

                        <div className='proj-text-1'>To-Do List</div>
                        <div className='group-1'>
                            <div className='group-2'>
                                <div className='proj-text-2'>Technologies Used:</div>
                                <div className="proj-text-3">
                                    <ul>
                                        <li>React.js</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='group-3'>
                                <div className="proj-text-2">Initial Development:</div>
                                <div className="proj-text-3">July 2023</div>
                            </div>
                        </div>
                        <div className="proj-link"><a href="https://todoapp-6fxj.onrender.com/" target='_blank'>SEE LIVE &gt;</a></div>
                    </div>
                </div>

                {/* Word Convertor */}
                <div className='project project-2'>
                    <div>
                        <a href="https://word-converter-react.onrender.com/" target='_blank'><img className='proj-img-3 proj-img' src="./Images/word-app.png" alt="" /></a>
                    </div>
                    <div className='proj-content'>
                        <div className='proj-text-1'>Word Convertor</div>
                        <div className='group-1'>
                            <div className='group-2'>
                                <div className='proj-text-2'>Technologies Used:</div>
                                <div className="proj-text-3">
                                    <ul>
                                        <li>React.js</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='group-3'>
                                <div className="proj-text-2">Initial Development:</div>
                                <div className="proj-text-3">June 2023</div>
                            </div>
                        </div>
                        <div className="proj-link"><a href="https://word-converter-react.onrender.com/" target='_blank'>SEE LIVE &gt;</a></div>
                    </div>
                </div>
            </div>

            <div className='additional-proj-text'>And And and, this <span>portfolio</span> is <span>designed</span> and <span>developed</span> by <span>me</span> </div>
        </div>
    )
}
