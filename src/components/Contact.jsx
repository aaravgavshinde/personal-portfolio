import React, { useState } from 'react'
import '../styles/Contact.css'
import '../styles/Common-CSS.css'
import { contactsData as contacts } from '../data/contactsData';

export default function Contact({componentRef}) {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    }

    return (
        <div className='contact-main-div'>
            <div className="contact-main-div-inner">
                <div className='main-heading' ref={componentRef}>
                    Contact
                </div>
                <div className='contact-grid'>
                    {contacts.map((contact, index) => (
                        <div className="contact-card" key={index}>
                            <div className="contact-icon">
                                <i className={`fa ${contact.icon}`} aria-hidden="true"></i>
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-platform">{contact.platform}</h3>
                                <p className="contact-display">{contact.display}</p>
                            </div>
                            <div className="contact-actions">
                                <button 
                                    className="action-btn copy-btn" 
                                    onClick={() => handleCopy(contact.copyText || contact.link, index)}
                                    title="Copy Link"
                                >
                                    <i className={`fa ${copiedIndex === index ? 'fa-check' : 'fa-copy'}`} aria-hidden="true"></i>
                                </button>
                                <a 
                                    href={contact.link} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="action-btn open-btn"
                                    title="Open Link"
                                >
                                    <i className="fa fa-external-link" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
