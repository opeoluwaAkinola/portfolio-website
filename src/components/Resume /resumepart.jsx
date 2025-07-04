import React from 'react';
import './resume.css';

function Resumepart({ togglePopup }) {
    return (
        <div className='latestcontainer'>
            <h2 className='sectionname'>Here's my Latest Experience</h2>
            
            <div className="timeline-item">
                <div className="date">2020 - Present</div>
                <div className="content-card">
                    <h3 className='role'>Senior Developer</h3>
                    <div className="company">Company XYZ</div>
                    <ul>
                        <li>Developed and maintained applications with a user base of over 100,000 active monthly users</li>
                        <li>Collaborated with cross-functional teams to enhance project efficiency and deliver results ahead of schedule</li>
                        <li>Mentored junior developers and led technical training sessions</li>
                        <li>Implemented modern development practices and code review processes</li>
                    </ul>
                </div>
            </div>
            
            <div className="moreResume">
                <div className="button" onClick={togglePopup}>
                    <button className="button__text" type="button">
                        VIEW DETAILED WORK EXPERIENCE
                        <svg 
                            width="24" 
                            height="24" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            clipRule="evenodd"
                        >
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resumepart;