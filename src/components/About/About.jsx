import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
// import profile from '../../assets/profilepic.jpeg'

import python from '../../assets/icons8-python.svg';
import css from '../../assets/icons8-css.svg';
import angular from '../../assets/icons8-angularjs.svg';
import javascript from '../../assets/icons8-javascript.svg';
import react from '../../assets/icons8-react-js.svg';
import tailwind from '../../assets/icons8-tailwind-css.svg';
import html from '../../assets/icons8-html.svg';
import node from '../../assets/icons8-node-js.svg';
import figma from '../../assets/icons8-figma.svg';
import plus from '../../assets/icons8-plus.svg';



function About() {
    return (
        // <Animator animation={ZoomIn()}>
        <section id='about' className='skills'>
            <h2 className='skill-title'>About me</h2>
            {/* <span className='skill-Desc'>I am a skilled and passionate web designer with experience in </span> */}
            <div className='skill-box'>
                <div className='about-me'>
                    <p> I am a Software Engineer with experience with building fullstack applications.<br /><br />
                    I've got a Bachelors degree in Electrical Engineering and Masters degree in Engineering with Buisiness from University College Dublin, Ireland(UCD)<br /><br />R
                    </p>
                 </div>
                <div className='skill-Bars'>
                            <div className='skill-Bar'>
                                <img src={python} alt="" className='Python'/>
                                <span>Python</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={react} alt="" className='ReactJS'/>
                                <span>ReactJS</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={angular} alt="" className='AngularJS'/>
                                <span>AngularJS</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={tailwind} alt="" className='TailWindCss'/>
                                <span>TailWindCss</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={javascript} alt="" className='Javascript'/>
                                <span>Javascript</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={html} alt="" className='HTML'/>
                                <span>HTML</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={css} alt="" className='CSS'/>
                                <span>CSS</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={node} alt="" className='Node'/>
                                <span>Node JS</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={figma} alt="" className='Figma'/>
                                <span>Figma</span>
                            </div>
                            <div className='skill-Bar'>
                                <img src={plus} alt="" className='Learning..'/>
                                <span>Learning..</span>
                            </div>
                </div>
            </div>
        </section>
        // </Animator>
    )
}

export default About
