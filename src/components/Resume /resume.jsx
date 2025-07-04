import React from 'react';
import './resume.css';

function Resume({ togglePopup }) {
    // Function to handle PDF download
    const handleDownloadPDF = () => {
        // Replace this URL with your actual PDF file path
        const pdfUrl = '/path-to-your-resume.pdf'; // Update this path
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'John_Doe_Resume.pdf'; // Change to your actual name
        
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
                        <div className="date">2020 - Present</div>
                        <div className="content-card">
                            <h3 className='role'>Senior Developer</h3>
                            <div className="company">Company XYZ</div>
                            <ul>
                                <li>Developed and maintained applications with a user base of over 100,000 active monthly users</li>
                                <li>Collaborated with cross-functional teams to enhance project efficiency and deliver results ahead of schedule</li>
                                <li>Mentored junior developers and led technical training sessions</li>
                                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="date">2018 - 2020</div>
                        <div className="content-card">
                            <h3 className='role'>Full Stack Developer</h3>
                            <div className="company">Tech Solutions Inc</div>
                            <ul>
                                <li>Led the development of multiple client projects using React and Node.js</li>
                                <li>Implemented responsive design principles and ensured cross-browser compatibility</li>
                                <li>Reduced application load time by 40% through optimization techniques</li>
                                <li>Built RESTful APIs serving over 50,000 requests per day</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="date">2016 - 2018</div>
                        <div className="content-card">
                            <h3 className='role'>Frontend Developer</h3>
                            <div className="company">StartupCo</div>
                            <ul>
                                <li>Developed user interfaces for web applications using HTML, CSS, and JavaScript</li>
                                <li>Collaborated with designers to implement pixel-perfect designs</li>
                                <li>Improved website performance and user experience metrics by 35%</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='education'>
                    <h2 className='sectionname'>Education</h2>
                    <div className="timeline-item">
                        <div className="date">2015 - 2019</div>
                        <div className="content-card">
                            <h3 className='role'>Bachelor of Science in Computer Science</h3>
                            <div className="company">University of Technology</div>
                            <ul>
                                <li>Graduated Magna Cum Laude with GPA 3.8/4.0</li>
                                <li>Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems</li>
                                <li>Senior Project: Built a full-stack e-commerce application</li>
                            </ul>
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