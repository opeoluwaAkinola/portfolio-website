import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/opeoluwa-akinola" aria-label="Go To Opes LinkedIn Page" title="LinkedIn Page">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/opeoluwaAkinola" aria-label="Go To Opes github Page" title="github Page">
                    <i className="bi bi-github"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/playlist/2uRdtYwfuD6WoKvgWN3vRr?si=ea82625410924d67" aria-label="Go To Opes spotify Page" title="spotify Page">
                    <i className="bi bi-spotify"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://x.com/Akinolaopeoluw4" aria-label="Go To Opes twitter Page" title="twitter Page">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/op3oluwaa/" aria-label="Go To Opes instagram Page" title="instagram Page">
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
            <div className="copyright">
                <p><i className="bi bi-c-circle"></i> Opeoluwa Akinola {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer
