import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';
import InfoNav from '../../components/InfoNav/InfoNav';
import Footer from '../../components/Footer/Footer';

function Layout({ children }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <InfoNav />
      <NavBar toggleNavBar={toggleNavBar} />
      <MobileNavBar isOpen={isNavbarOpen} toggleNavBar={toggleNavBar} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
