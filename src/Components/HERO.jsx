import React from "react";
import './HERO.css'
// import { NavLink } from "react-router-dom";

export default function HERO(props) {

    return (
        <div className='hero-main-div'>
            <div className='hero-main-section'>
                <div className='my-image'>
                    <img src="./Images/Me.jpg" alt="MyImage" />
                </div>
                <div className='my-name'>
                    <div>
                        <h3 className='aarav'>Aarav Gavshinde</h3>
                        <h4>React.js Developer</h4>
                    </div>
                </div>
            </div>

            <div className="little-about-me">I am primarily a <span>MERN Stack Developer</span>. Developing since <span>July 2023</span>.</div>
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
