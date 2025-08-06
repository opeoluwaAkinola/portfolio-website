import React, { useState } from 'react';
import './portfolio.css';
import { mywork_data } from '../../assets/myworkdata';
import ProjectModal from "../ProjectModal/projectmodel";

function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleShowMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const handleImageClick = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id='projects' className='works'>
            <div className='myworks'>
                <div className='myworks-title-part'>
                    <h2 className='myworks-title'>Projects</h2>
                    <p className='myworks-subtitle'>Here are some of my recent works</p>
                </div>
            
                <div className='mywork-container'>
                    {mywork_data.slice(0, visibleProjects).map((work, index) => (
                        <div 
                            className="image-container" 
                            key={index}
                            onClick={() => handleImageClick(index)}
                        >
                            <img 
                                src={work.w_img} 
                                alt={work.w_name}
                                loading="lazy" // Added lazy loading for better performance
                            />
                            <div className="banner">
                                <h3>{work.w_name}</h3>
                                {work.technologies && work.technologies.length > 0 && (
                                    <div className="tech-stack">
                                        {work.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <ProjectModal 
                    projects={mywork_data}
                    initialIndex={selectedIndex}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />

                {visibleProjects < mywork_data.length && (
                    <div className='mywork-showmore' onClick={handleShowMore}>
                        <p>
                            Show more 
                            <svg 
                                width="24" 
                                height="24" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                clipRule="evenodd"
                            >
                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                            </svg>
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;