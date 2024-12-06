import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_image} alt=""  className='profile'/>
        <h1><span>I am Kim,</span>Full stack web developer based in Kenya</h1>
        <p>I am a passionate and self-driven Web Developer with 2+ years of experience designing, developing, and deploying user-friendly  websites and applications. <span className='expert'>My expertise lies in leveraging modern technologies such as React, Node.js, JavaScript, PHP, and MySQL to build responsive and dynamic web solution</span></p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
            
            <div className="hero-resume">
            <a href="https://drive.google.com/uc?export=download&id=1xapdzWPZzEAGkLxUohtcfMMKU4TfTJI7" download>Download My Resume</a>
              </div>

        </div>



    </div>
  )
}

export default Hero