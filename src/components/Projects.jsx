import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Sign up page",
    description: "A responsive and animated portfolio website using React and CSS.",
    tech: "React, CSS, JavaScript",
    image: "/login.png",  // ensure there's no space after the filename
    link: "https://github.com/Bharatmadriki/bmicalculator/"
  },
  {
    title: "BMI CALCULATOR",
    description: "A responsive and interactive BMI calculator built using ReactJS for real-time health assessment based on user input.",
    tech: " Reactjs ",
    image: "/BMI3.png",
    link: "https://bmicalculator-lrb4.vercel.app/"
  },
  {
    title: "Maize Disease Detection",
    description: "CNN-based image classifier for maize leaf disease using TensorFlow and Flask.",
    tech: "TensorFlow, Keras, Flask",
    image: "/maize.png",
    link: "https://github.com/yourusername/maize-disease-detection"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
         <div key={index} className="project-card fade-in">
  <img src={proj.image} alt={proj.title} className="project-image" />
  <div className="project-content">
    <h3>{proj.title}</h3>
    <p>{proj.description}</p>
    <span className="tech">{proj.tech}</span>
    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="view-btn">View project</a>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}

export default Projects;
