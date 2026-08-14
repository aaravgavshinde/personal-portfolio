import React from 'react'
import '../styles/MoreAboutMe.css'
import '../styles/Common-CSS.css'

export default function MoreAboutMe() {
    return (
        <div className='about-main-div'>
            <div className='back-to-home'>
                <a href="/"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back to Home </a>
            </div>
            
            <div className='about-heading'>
                <div className='main-head'>About Me</div>
            </div>
            
            <div className='about-content'>
                <div className='about-text-card'>
                    <div className='about-text-para'>
                        I am a 21 Years Old, MERN Stack Developer. I have <span>1 Year of Experience as a Developer</span>. Currently, I have no formal working experience but I am actively building my portfolio.
                    </div>
                    <div className='about-text-para'>
                        I am constantly <span>learning Data Structures and Algorithms (DSA)</span> and simultaneously expanding my skills in <span>Web Designing</span> to craft beautiful user experiences.
                    </div>
                    <div className='about-text-para'>
                        I am from Khargone (M.P.), India and currently pursuing my <span>B.Tech</span> from Samrat Ashok Technological Institute, Vidisha (M.P.), India, with majors in <span>Computer Science and Engineering</span>.
                    </div>
                </div>
            </div>
            
            <div className='why-web-dev'>
                <div className='main-head small-heading'>Why did I choose Web Dev?</div>
                <div className='ans-why-web-dev about-text-card'>
                    <div className='about-text-para'>
                        Since childhood, <span>I loved Drawing</span> and coloring things. As I grew, I discovered a profound <span>interest in Photography and Videography</span>.
                    </div>
                    <div className='about-text-para'>
                        These creative interests made me realize that I am <span>good at visualizing concepts</span> and could translate that into Development. The web gives me a canvas to bring my visual ideas to life through code.
                    </div>
                    <div className='about-text-para'>
                        Though I am currently focused in the field of Web Development, I plan to explore and master App Development in the future as well.
                    </div>
                </div>
            </div>
        </div>
    )
}
