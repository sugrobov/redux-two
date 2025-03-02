import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Side from './components/Side';
// import Content from './components/Content';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Root() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="flex flex-1">
        <Side isMenuOpen={isMenuOpen} onClose={closeSidebar} />
        {/* <Content /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
  
}

export default Root;