import React from 'react';
import './resume.css';

function Resume({ togglePopup }) {
    
    // Function to handle PDF download
    const handleDownloadPDF = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/OPEOLUWA_RICHARD_AKINOLA.pdf';
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'OPEOLUWA_RICHARD_AKINOLA.pdf'; // Change to your actual name
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Alternative method using fetch (if you need to fetch from an API)
    // const handleDownloadPDFFromAPI = async () => {
    //     try {
    //         const response = await fetch('/api/download-resume'); // Your API endpoint
    //         if (response.ok) {
    //             const blob = await response.blob();
    //             const url = window.URL.createObjectURL(blob);
    //             const link = document.createElement('a');
    //             link.href = url;
    //             link.download = 'John_Doe_Resume.pdf';
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //             window.URL.revokeObjectURL(url);
    //         }
    //     } catch (error) {
    //         console.error('Error downloading PDF:', error);
    //         alert('Sorry, there was an error downloading the resume. Please try again.');
    //     }
    // };

    return (
        <div id='resume-modal'>
            <div className="container">
                <button className="close-button" onClick={togglePopup} aria-label="Close resume modal">
                    &times;
                </button>
                
                <div className='Experience'>
                    <h2 className='sectionname'>Experience</h2>
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
                    <div className="timeline-item">
                        <div className="date">June 2022-December 2022</div>
                        <div className="content-card">
                            <h3 className='role'>VPU Lab Services Operation Intern</h3>
                            <div className="company">Intel Corporations</div>
                            <ul>
                                <li>Testing and validation of product specifications and characteristics, including
                                thermal testing and manufacturing high-volume testing development.</li>
                                <li>Use case projects including demo development, utilizing extensive
                                prototyping hardware.</li>
                                <li>Development of lab tools and services.</li>
                                <li>Developed advanced communication and organizational skills to manage the
                                dynamic, fast-changing lab environment.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='education'>
                    <h2 className='sectionname'>Education</h2>
                    <div className="timeline-item">
                        <div className="date">2021-2023</div>
                        <div className="content-card">
                            <h3 className='role'>ME Engineering with Business </h3>
                            <div className="company">University College Dublin (UCD)</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="date">2018-2021</div>
                        <div className="content-card">
                            <h3 className='role'>BSc Electronics and Electrical Engineering </h3>
                            <div className="company">University College Dublin (UCD)</div>
                        </div>
                    </div>
                </div>

                <div className='skills-section'>
                    <h2 className='sectionname'>Skills</h2>
                    <div className="timeline-item">
                        <div className="date">Technical</div>
                        <div className="content-card">
                            <h3 className='role'>Programming & Technologies</h3>
                            <ul>
                                <li><strong>Languages:</strong> JavaScript, TypeScript, Python, Java, HTML5, CSS3</li>
                                <li><strong>Frontend:</strong> React, Vue.js, Angular, Next.js, Tailwind CSS, Bootstrap</li>
                                <li><strong>Backend:</strong> Node.js, Express.js, Django, Flask, RESTful APIs</li>
                                <li><strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis</li>
                                <li><strong>Tools & Others:</strong> Git, Docker, AWS, Firebase, Webpack, Jest</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Download Section */}
                <div className="download-section">
                    <button 
                        className="download-button" 
                        onClick={handleDownloadPDF}
                        aria-label="Download resume as PDF"
                    >
                        <svg 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                                clipRule="evenodd"
                            />
                        </svg>
                        Download Resume PDF
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resume;