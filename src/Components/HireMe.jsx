import React from 'react'
import './HireMe.css'

export default function HireMe() {
    return (
        <div className='hireme-main-div'>
            <div className='back-to-home'><a href="/"> &lt; Back to Home </a></div>
            <div className='hireme-heading'>
                <div className='main-heading main-head'> Hire Me </div>
            </div>
            <div className='leave-mail'>
                <div className='leave-mail-text'>Kindly leave your <span>Email</span> and I will contact you</div>
            </div>
            <div className='leave-mail-input'>
                <input type="email" placeholder='enter your mail' size={30} />
            </div>
            <div className='send-button'>
                <button>Send</button>
            </div>
        </div>
    )
}
