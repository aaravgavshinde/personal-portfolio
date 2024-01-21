import React, { useState } from "react";
import './HERO.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import 'react-typed/dist/animatedCursor.css';
// import { NavLink } from "react-router-dom";

export default function HERO(props) {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer", "React.js Developer", "Web Designer", "Video Editor", "Photographer"],
            startDelay: 300,
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 100,
            loop: true
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    // const ref = useRef(null);
    // const handleClick = () => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className='hero-main-div'>
            <div className='hero-main-section'>
                <div className='my-image'>
                    <img src="./Images/Me.jpg" alt="MyImage" />
                </div>
                <div className='my-name'>
                    <div>
                        <h3 className='aarav'>Aarav Gavshinde</h3>
                        <h4 ref={el}></h4>
                    </div>
                </div>
            </div>

            <div className="little-about-me">I am primarily a <span>MERN Stack Developer</span>. I have <span>0.5 Years</span> of Experience as a Developer.</div>

            <div className="scroll-down-text">scroll down to explore</div>
        </div >
    )
}
