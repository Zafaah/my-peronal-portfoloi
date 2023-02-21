import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { Nav } from './pages/Nav';
import { Skills } from './pages/Skills';
import { Footer } from './pages/footer';
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/about" element={About} />
        <Route path="/Skills" element={Skills} />

        <Route path="/contact" element={Contact} />
        {/* <div className="social-icons">
          <a href="https://github.com/your-github-username"><FaHome /></a>
          <a href="https://github.com/your-github-username"><FaUser /></a>
          <a href="https://github.com/your-github-username"><FaBriefcase /></a>
          <a href="mailto:your-email-address"><FaEnvelope /></a>
        </div> */}
      </Routes >

    </div>
  );
}

export default App;
