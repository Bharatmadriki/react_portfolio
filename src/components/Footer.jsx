// Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/bharat__madriki?igsh=c3Zrb2ZjdWFudGxs" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/bharat-madriki-0a32a4258" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Bharatmadriki/bmicalculator/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
      
    </footer>
  );
}

export default Footer;
