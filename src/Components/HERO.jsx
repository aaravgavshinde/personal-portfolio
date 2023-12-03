import React from 'react'
import './HERO.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import 'react-typed/dist/animatedCursor.css';
import { NavLink } from "react-router-dom";

export default function HERO() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer", "Web Designer", "Video Editor", "Photographer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
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

    return (
        <div className='hero-main-div'>
            <navbar>
                <ul>
                    <li><a href=''>More About Me</a></li>
                    <li><a href=''>Skills</a></li>
                    <li><a href=''>Projects</a></li>
                    <li><a href=''>Resume</a></li>
                    <li><a href=''>Contact</a></li>
                    <li><a href=''>Certificates</a></li>
                    <li><a href=''>Education</a></li>
                    <li><a href=''>Extra-Curricular</a></li>
                </ul>

                {/* <ul>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>More About Me</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Skills</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Projects</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Resume</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Contact</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Certificates</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Education</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to=''>Extra-Curricular</NavLink></li>
                </ul> */}
            </navbar >

            {/* < Navbar expand = "lg" className = "bg-body-transparent .text-white" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">More About Me</Nav.Link>
                        <Nav.Link href="">Skills</Nav.Link>
                        <Nav.Link href="">Projects</Nav.Link>
                        <Nav.Link href="">Resume</Nav.Link>
                        <Nav.Link href="">Contact</Nav.Link>
                        <Nav.Link href="">Certificates</Nav.Link>
                        <Nav.Link href="">Education</Nav.Link>
                        <Nav.Link href="">Extra-Curricular</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}


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
