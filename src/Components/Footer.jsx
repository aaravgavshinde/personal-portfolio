import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer-main-div'>
            <div className='footer-main-div-inner'>
                <div className='hr-div'>
                    <hr />
                </div>
                <div className='footer-content'>
                    <div className='quick-links-box'>
                        <div className='quick-link-head'>
                            Quick Links
                        </div>
                        <ul className='quick-links'>
                            <li className="footer-link"><a href="">About Me</a></li>
                            <li className="footer-link"><a href="">Skills</a></li>
                            <li className="footer-link"><a href="">Projects</a></li>
                            <li className="footer-link"><a href="">Resume</a></li>
                            <li className="footer-link"><a href="">Contact</a></li>
                            <li className="footer-link"><a href="">Certificates</a></li>
                            <li className="footer-link"><a href="">Education</a></li>
                            {/* <li className="footer-link"><a href="">Extra-Curricular</a></li> */}
                        </ul>
                    </div>
                    <div className='loved-my-work'>
                        <h3>Loved My Work? Give Me A Chance!</h3>
                        <a href="/hireme"><button>HIRE ME</button></a>
                    </div>
                </div>
                <div className='footer-end-content'>
                    <div className='img-links'>
                        <a href="https://www.linkedin.com/in/aarav-gavshinde/"><img src="./Images/linkedin.jpg" alt="" /></a>
                        <a href="https://github.com/aaravgavshinde"><img src="./Images/github.jpg" alt="" /></a>
                        <a href="https://www.instagram.com/aaravgavshinde/"><img src="./Images/instagram.jpg" alt="" /></a>
                    </div>
                    <div className='made-with-love'>Thank you for visiting 💙</div>
                </div>
            </div>
        </div>
    )
}
