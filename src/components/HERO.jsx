import React from "react";
import '../styles/HERO.css'
import me3 from '../assets/Images/Me3.png';

export default function HERO(props) {

    return (
        <div className='hero-main-div'>
            <div className='hero-main-section'>
                <div className='my-image'>
                    <img src={me3} alt="Aarav Gavshinde" />
                </div>
                <div className='my-name'>
                    <div>
                        <h3 className='aarav'>Aarav Gavshinde</h3>
                        <h4>React.js Developer</h4>
                    </div>
                </div>
            </div>

            <div className="little-about-me">I am a <span>React Developer</span>, working in <span>MPSeDC</span>, Bhopal (M.P.).</div>
            {/* <div className="little-about-me">Dedicated Full Stack Developer with a comprehensive grasp of Website Building Tools. Excels in diverse 
programming languages, front-end and back-end development, database management, and possesses a strong proficiency in various 
web design tools. Adept at utilizing the latest technologies to create seamless web applications. </div> */}

            <div className="scroll-down-text">scroll down to explore</div>
            <div className="down-arrow">
                <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </div>
        </div >
    )
}
