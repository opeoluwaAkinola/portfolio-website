import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../ProjectModal/Projectmodal.css'

const ProjectModal = ({ projects, initialIndex, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProject = projects[currentIndex];

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>

        <div className="modal-content">
          <div className="modal-image-section">
            <img
              src={currentProject.w_img}
              alt={currentProject.title}
              className="modal-image"
            />
            
            <button className="modal-nav-button prev" onClick={goToPrev}>
              <ChevronLeft />
            </button>
            
            <button className="modal-nav-button next" onClick={goToNext}>
              <ChevronRight />
            </button>
          </div>

          <div className="project-details">
            <div className="project-content">
              <h2 className="project-title">{currentProject.title}</h2>
              <p className="project-description">{currentProject.info}</p>
              
              {currentProject.technologies && (
                <div className="technologies-container">
                  <h3 className="technologies-title">Technologies Used</h3>
                  <div className="tech-tags">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            
            
            {currentProject.link && (
              <div className="project-links">
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            )}
            </div>
          </div>
        </div>

        <div className="progress-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;