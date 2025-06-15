import React from 'react';



import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';




import './components/styles.css';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
      
       
    
    </div>
  );
}

export default App;
