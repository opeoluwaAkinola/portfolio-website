import React, { useState, useRef } from 'react';
import './navbar.css';
import menu_pic from "../../assets/align-justify.svg";
import cl from "../../assets/x.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialModal from '../SocialModal/SocialModal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuRef = useRef();
    
    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    
    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
        document.body.style.overflow = isModalOpen ? 'unset' : 'hidden';
    }

    // Modified handleClick function for nav items
    const handleNavClick = (e, href) => {
        e.preventDefault();
        closeMenu();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            <div className='navbar'>
                <img onClick={openMenu} className="menu-icon" src={menu_pic} alt="Menu"/>
                
                <ul ref={menuRef} className='nav-menu'>
                    <img onClick={closeMenu} className="close-icon" src={cl} alt="Close"/>
                    <li>
                        <a href="#home" className='anchor-link' onClick={(e) => handleNavClick(e, '#home')}>
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className='anchor-link' onClick={(e) => handleNavClick(e, '#about')}>
                            <p>About Me</p>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className='anchor-link' onClick={(e) => handleNavClick(e, '#projects')}>
                            <p>Projects</p>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className='anchor-link' onClick={(e) => handleNavClick(e, '#contact')}>
                            <p>Contact</p>
                        </a>
                    </li>
                </ul>
                
                <button className='nav-connect' onClick={toggleModal}>
                    Connect With Me
                </button>
            </div>

            <SocialModal isOpen={isModalOpen} togglePopup={toggleModal} />
        </>
    )
}

export default Navbar;