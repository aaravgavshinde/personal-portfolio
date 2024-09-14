import React from 'react'
import './MoreAboutMe.css'
import './Common-CSS.css'

export default function MoreAboutMe() {
    return (
        <div className='about-main-div'>
            <div className='back-to-home'><a href="/"> &lt; Back to Home </a></div>
            <div className='about-heading'>
                <div className='main-head'> About Me </div>
            </div>
            <div className='about-content'>
                <div className='about-image'>
                    <img src="./Images/Me.jpg" alt="me" />
                    <div className='about-name'>Aarav Gavshinde</div>
                </div>
                <div className='about-text'>
                    <div className='about-text-1'>I am a 21 Years Old, MERN Stack Developer. I have <span>1 Years of Experience as a Developer</span>. Currently have no working experience.</div>
                    <div className='about-text-2'>I am <span>learning DSA</span> and simultaneously learning some <span>Web Designing</span>.</div>
                    <div className='about-text-3'>I am from Khargone (M.P.), India and currently pursuing <span>B.Tech</span> from Samrat Ashok Technological Institute, Vidisha (M.P.), India, with the majors in <span>Computer Science and Engineering</span>.</div>
                </div>
            </div>
            <div className='why-web-dev'>
                <div className='main-head'>Why did I choose Web Dev?</div>
                <div className='ans-why-web-dev'>
                    Since childhood <span>I loved Drawing</span> and Coloring things, and as I grew, I found my <span>interest in Photography and Videography</span>.
                    These interests made me realize that I am <span>good at visualizing things</span> and could do great in Development.
                    Though I am currently in the field of Web Development, I plan to move in App Development as well.
                </div>
            </div>
        </div>
    )
}
