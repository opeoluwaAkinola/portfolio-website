import React, { useEffect } from 'react';
import './SocialModal.css';

const SocialModal = ({ isOpen, togglePopup }) => {
    const socialLinks = [
        { 
            name: 'LinkedIn', 
            url: 'https://linkedin.com/in/yourprofile', 
            icon: '💼',
            color: '#0077B5'
        },
        { 
            name: 'GitHub', 
            url: 'https://github.com/yourusername', 
            icon: '💻',
            color: '#333'
        },
        { 
            name: 'Twitter', 
            url: 'https://twitter.com/yourusername', 
            icon: '🐦',
            color: '#1DA1F2'
        },
        { 
            name: 'Instagram', 
            url: 'https://instagram.com/yourusername', 
            icon: '📸',
            color: '#E4405F'
        },
        { 
            name: 'Email', 
            url: 'mailto:your.email@example.com', 
            icon: '📧',
            color: '#EA4335'
        }
    ];

     // Close modal when clicking outside or pressing Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                togglePopup();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, togglePopup]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={togglePopup}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                    className="modal-close" 
                    onClick={togglePopup} 
                    aria-label="Close social media modal"
                >
                    &times;
                </button>
                
                <div className="modal-header">
                    <h2>Let's Connect!</h2>
                    <p>Find me on these platforms:</p>
                </div>
                
                <div className="modal-body">
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                style={{ '--link-color': link.color }}
                            >
                                <span className="social-icon">{link.icon}</span>
                                <span className="social-name">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialModal;