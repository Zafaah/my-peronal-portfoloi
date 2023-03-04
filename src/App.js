import React from 'react';

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


    </div>
  );
}

export default App;
