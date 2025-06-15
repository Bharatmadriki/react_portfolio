import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-text fade-in-left">
        <h1>Hello, I'm <span className="highlight">Bharat</span></h1>
        <h2>Frontend Developer</h2>
        <p>I craft responsive, modern web apps using React, JavaScript, and CSS.</p>
        <a href="#contact" className="cta-button">Contact Me</a>
           <a href="#projects" className="cta-button">Projects</a>
      </div>
      <div className="home-image fade-in-right">
        <img src="mypic.png" alt="Bharat" />
      </div>
    </section>
  );
}

export default Home;
