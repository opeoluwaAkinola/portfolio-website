import React from 'react';
import "./Hero.css";
import profile from "../../assets/ope.png";
const Hero  = () => {
    return (
        <section id='home' className='hero'>
            <img src={profile} alt="profilepic"/>
            <h1><span>I'm Opeoluwa Akinola</span>, Full stack  developer based in Dublin, Ireland </h1>
            {/* <div className='hero-action'>
                <div className='hero-connect'>Connect with me</div>
                <div className='hero-myresume'>My Resume</div>
            </div> */}
        </section>
    )
}

export default Hero
