import React from 'react';

import { Footer, Header, Illustrator, Features } from './container';

import { Navbar, CTA } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
        <Illustrator />
        <Features/>
        <CTA />
        <Footer />
      </div>
    </div>

  );
}

export default App