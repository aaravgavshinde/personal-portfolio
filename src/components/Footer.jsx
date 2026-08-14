import React from 'react'
import '../styles/Footer.css'
import '../styles/Common-CSS.css'

export default function Footer() {
    return (
        <footer className='footer-main-div'>
            <div className='footer-main-div-inner'>
                
                <div className='footer-content'>
                    <div className='footer-brand'>
                        <h2>Aarav Gavshinde</h2>
                        <p>React Developer building modern, responsive, and aesthetic web applications.</p>
                        <div className='footer-socials'>
                            <a href="https://www.linkedin.com/in/aarav-gavshinde/" target="_blank" rel="noreferrer" title="LinkedIn">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/aaravgavshinde" target="_blank" rel="noreferrer" title="GitHub">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/aaravgavshinde/" target="_blank" rel="noreferrer" title="Instagram">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="mailto:aaravgavshinde@gmail.com" title="Email">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    <div className='footer-links'>
                        <h3 className='footer-head'>Quick Links</h3>
                        <ul>
                            <li><a href="">About Me</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Certificates</a></li>
                        </ul>
                    </div>

                    <div className='footer-cta'>
                        <h3 className='footer-head'>Loved My Work?</h3>
                        <p>Let's build something amazing together. Give me a chance to contribute to your team!</p>
                        {/* <a href="/hireme" className="footer-hire-btn">Hire Me</a> */}
                    </div>
                </div>

                <div className='footer-bottom'>
                    <hr className="footer-divider" />
                    <div className='made-with-love'>
                        &copy; {new Date().getFullYear()} Aarav Gavshinde. Made with <i className="fa fa-heart" style={{color: '#AC9EFF'}}></i>
                    </div>
                </div>

            </div>
        </footer>
    )
}
