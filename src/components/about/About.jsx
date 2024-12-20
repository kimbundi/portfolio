import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile2.png'


const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt=""  className='profile'  />
            </div>
            <div className="about-right">
                <div className="about-para">
                   <p > I am a passionate and self-driven Web Developer with 2+ years of experience designing, developing, and deploying user-centric websites and applications. </p>

                   <p className='parag'>My expertise lies in leveraging modern technologies such as React, Node.js, JavaScript, PHP, and MySQL to build responsive and dynamic web solution</p>


                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>php</p><hr style={{width:"30%"}}/></div>





                </div>
            </div>
        </div>

       <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>

        </div>
        <hr/>
        <div className="about-achievement">
            <h1>50+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
       </div>

    </div>
  )
}

export default About