import React, { useState } from 'react'
import './Contact.css';

import theme_pattern from '../../assets/theme_pattern.svg'

import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'




const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e22aea28-67cb-458f-ad5c-a31f76c270ed");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert(data.message)
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='contact' id='contact'>

        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />


        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>At craftcodedesigners, we specialize in full-stack web development, creating modern, responsive websites tailored to your needs. From front-end design to back-end programming, we ensure your web presence stands out with high-quality, user-friendly solutions</p>
                <div className="contact-details">
                    <div className="contact-detail">
                             <img src={mail_icon} alt="" />  <p>craftcodedesigners@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon}alt="" /> <p>0745517657</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>nakuru</p>
                        </div>
                </div>
            </div>
            <form onSubmit={onSubmit}  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter your email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button  type="submit" className="contact-submit">Submit now</button>

                



            </form>
        </div>


    </div>
  )
}

export default Contact