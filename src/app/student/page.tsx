"use client"; // ทำให้คอมโพเนนต์นี้เป็น Client Component

import React from 'react';
import './student.css';

export default function AboutMe() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="profile-image">
        <img src="/DSC_1363.jpg" alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>Onpreeya Jantakote</h2>
        <p>653450107-5</p>
        <p>"Life isn’t perfect but your outfit can be."</p>
      </div>

      <h2>Skills</h2>
      <div className="skill-bar">
        <p>Html/CSS</p>
        <div className="bar">
          <div className="bar-fill" style={{ width: '60%' }}>60%</div>
        </div>
      </div>
      <div className="skill-bar">
        <p>JavaScript</p>
        <div className="bar">
          <div className="bar-fill" style={{ width: '30%' }}>30%</div>
        </div>
      </div>
      <div className="skill-bar">
        <p>React</p>
        <div className="bar">
          <div className="bar-fill" style={{ width: '10%' }}>10%</div>
        </div>
      </div>
      <div className="skill-bar">
        <p>Photoshop</p>
        <div className="bar">
          <div className="bar-fill" style={{ width: '80%' }}>80%</div>
        </div>
      </div>

      <h2>Contact Me</h2>
      <div className="contact-links">
        <button 
          onClick={() => window.open('https://www.instagram.com/x.ontmz_/', '_blank')}
          className="contact-button"
        >
          Instagram
        </button>
        <button 
          onClick={() => window.open('https://www.facebook.com/onpreeya.jantakote.96', '_blank')}
          className="contact-button"
        >
          Facebook
        </button>
        <button 
          onClick={() => window.open('https://github.com/653450107-5', '_blank')}
          className="contact-button"
        >
          GitHub
        </button>
        <p>email : onpreeya.ja@kkumail.com</p>
      </div>
    </div>
  );
}
