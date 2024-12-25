import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Side from './components/Side';
// import Content from './components/Content';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-1">
        <Side isMenuOpen={isMenuOpen} />
        {/* <Content /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );

}

export default Root;