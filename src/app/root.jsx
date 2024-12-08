import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Side from './components/Side';
import Content from './components/Content';
import Footer from './components/Footer';

function Root() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen"> {/* Full-screen height */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-1"> {/* Takes remaining space */}
        <Side isMenuOpen={isMenuOpen} />
        <Content />
      </div>
      <Footer />
    </div>
  );
  
}

export default Root;