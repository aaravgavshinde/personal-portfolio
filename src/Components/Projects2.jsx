import React from 'react'
import './Projects2.css'
import './Common-CSS.css'

export default function Projects2({ componentRef }) {
  return (
    <div className='projects2-main-div'>
      <div className="main-heading" ref={componentRef}>Projects</div>
      {/* <div className='all-projects'><a href="">See All In Detail &gt;</a></div> */}
      <div className='projects2-box'>
        {/* E-Electronics */}
        <div className='project2 project2-1'>
          <div>
            <a href="https://e-shop-ecommerce.onrender.com/" target='_blank'><img className='proj2-img' src="./Images/e-commerce.png" alt="hello" /></a>
          </div>
          <div className='proj2-content'>
            <div className='proj2-text'>E-Electronics</div>
            <div className='proj2-stack'>
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
        </div>

        {/* To-Do List  */}
        <div className='project2 project2-2'>
          <div>
            <a href="https://todoapp-6fxj.onrender.com/" target='_blank'><img className='proj2-img' src="./Images/todo-app.png" alt="hello" /></a>
          </div>
          <div className='proj2-content'>
            <div className='proj2-text'>To-Do List App</div>
            <div className='proj2-stack'>
              <ul>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Word Convertor App  */}
        <div className='project2 project2-3'>
          <div>
            <a href="https://word-converter-react.onrender.com/" target='_blank'><img className='proj2-img' src="./Images/word-app.png" alt="hello" /></a>
          </div>
          <div className='proj2-content'>
            <div className='proj2-text'>Word Convertor App</div>
            <div className='proj2-stack'>
              <ul>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
