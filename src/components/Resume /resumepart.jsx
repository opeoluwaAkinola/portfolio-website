import React from 'react';
import './resume.css';

function Resumepart({ togglePopup }) {
    return (
        <div className='latestcontainer'>
            <h2 className='sectionname'>Here's my Latest Experience</h2>
            
            <div className="timeline-item">
                <div className="date">July 2023-Present</div>
                <div className="content-card">
                    <h3 className='role'>Software Engineer</h3>
                    <div className="company">Bank of America Merrill Lynch</div>
                    <ul>
                        <li>Providing technical excellence to design, develop, and maintain technological
                        applications utilising technologies such as Python, Html, CSS, JavaScript,
                        AngularJS, Smart IQ and smart DX.</li>
                        <li>Gathering and translating internal and external client requirements into
                        technical design specifications, and business process engineering</li>
                        <li>Coding solutions, completing unit tests, and ensuring the solution can be
                        integrated successfully into the overall application/system with clear, robust,
                        and well-tested interfaces</li>
                        <li>Participating and contributing to the delivery/release (CI/CD) events. e.g.
                        branching timelines, pull requests, issue triage, merge/conflict resolution, and
                        release notes.</li>
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