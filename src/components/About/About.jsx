import React from 'react';
import './About.css';

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
        <section id='about' className='skills'>
            <h2 className='skill-title'>About Me</h2>
            <div className='skill-box'>
                <div className='about-me-container'>
                    <div className='about-me'>
                        <p>
                            I’m <strong>Opeoluwa Richard Akinola</strong>, a Software Engineer with a passion for building tools, solving complex problems, and optimizing systems. With a Master’s in <em>Engineering with Business</em> and a Bachelor’s in <em>Electrical & Electronic Engineering</em>, I bring a unique blend of technical depth and business insight to every project I take on.
                        </p>
                        <p>
                            My journey has taken me from designing hardware automation tools at <strong>Intel</strong> to developing high-impact software solutions in the finance sector at <strong>Bank of America Merrill Lynch</strong>. I specialize in <strong>Python development</strong>, systems automation, and full-stack engineering, crafting solutions that improve efficiency, scalability, and user experience.
                        </p>
                        <p>
                            Whether I’m automating infrastructure workflows, optimizing databases, or building user-centric applications, I love working at the intersection of <strong>technology, strategy, and innovation</strong>.
                        </p>
                        <p>
                            I’m always excited by opportunities to build, learn, and collaborate on projects that make systems smarter and more reliable.
                        </p>
                    </div>
                </div>
                <div className='skill-Bars'>
                    <div className='skill-Bar'><img src={python} alt="" /><span>Python</span></div>
                    <div className='skill-Bar'><img src={react} alt="" /><span>ReactJS</span></div>
                    <div className='skill-Bar'><img src={angular} alt="" /><span>AngularJS</span></div>
                    <div className='skill-Bar'><img src={tailwind} alt="" /><span>TailWindCss</span></div>
                    <div className='skill-Bar'><img src={javascript} alt="" /><span>Javascript</span></div>
                    <div className='skill-Bar'><img src={html} alt="" /><span>HTML</span></div>
                    <div className='skill-Bar'><img src={css} alt="" /><span>CSS</span></div>
                    <div className='skill-Bar'><img src={node} alt="" /><span>Node JS</span></div>
                    <div className='skill-Bar'><img src={figma} alt="" /><span>Figma</span></div>
                    <div className='skill-Bar'><img src={plus} alt="" /><span>Learning..</span></div>
                </div>
            </div>
        </section>
    );
}

export default About;
