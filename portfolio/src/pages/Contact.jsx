import React from 'react';
import handleEmailClick from '../utils/email';

const Contact = () => {
//   const handleEmailClick = () => {
//     window.location.href = 'mailto:developedbyrobbie@gmail.com';
//   };

  return (
    <section id='contact' className='contact'>
        <div className="head"><p>Contact Me</p></div>
        <div className="left">
            <h1>Have an opportunitity?</h1>
            <p>I'm open for collaboration, feedback or simply having a chat<br/>feel free to reach out</p>
        </div>
        <div className="right">
            <ul>
                <li><a onClick={handleEmailClick} href=""><i className="uil uil-envelope"></i>developedbyrobbie@gmail.com</a></li>
                <li><a href=""><i className="uil uil-instagram"></i>Instagram</a></li>
                <li><a href=""><i className="uil uil-github-alt"></i>Github</a></li>
                <li><a href=""><i className="uil uil-linkedin"></i>Linked In</a></li>
                <li><a href=""><i className="uil uil-twitter-alt"></i>Twitter</a></li>
            </ul>
        </div>
    </section>
  );
};

export default Contact;