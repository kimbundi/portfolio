import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_image} alt="" />
        <h1><span>I am Kim,</span>full stack web developer based in Kenya</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quas explicabo recusandae at eligendi odio qui? Aliquid possimus incidunt delectus!</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>

        </div>



    </div>
  )
}

export default Hero