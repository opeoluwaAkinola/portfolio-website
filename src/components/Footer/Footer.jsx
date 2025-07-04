import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/opeoluwa-akinola" aria-label="Go To Opes LinkedIn Page" title="LinkedIn Page">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/your-github-username" aria-label="Go To Opes github Page" title="github Page">
                    <i className="bi bi-github"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/your-spotify-username" aria-label="Go To Opes spotify Page" title="spotify Page">
                    <i className="bi bi-spotify"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/code_wonders" aria-label="Go To Opes twitter Page" title="twitter Page">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/your-instagram-username" aria-label="Go To Opes instagram Page" title="instagram Page">
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
