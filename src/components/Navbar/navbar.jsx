import React, { useState, useRef } from 'react';
import './navbar.css';
import menu_pic from "../../assets/align-justify.svg";
import cl from "../../assets/x.svg";
import logo from "../../assets/logo.png";
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
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen)
    };

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
                <div className="logo-container">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                        <img src={logo} alt="Company Logo" className="logo" />
                    </a>
                </div>
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
                    <li>
                        <button className='nav-connect' onClick={toggleModal}>
                            Connect With Me
                        </button>
                    </li>
                </ul>
            </div>

            <SocialModal isOpen={isModalOpen} togglePopup={toggleModal} />
        </>
    )
}

export default Navbar;