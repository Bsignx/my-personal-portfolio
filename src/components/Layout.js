import React, { useState } from 'react';
import "../css/main.css"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <Navbar isOpen={isOpen} handleToggleIsOpen={handleToggleIsOpen} />
      <Sidebar isOpen={isOpen} handleToggleIsOpen={handleToggleIsOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
