import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="border-t border-dotted pt-[52px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout