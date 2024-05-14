'use client';

import React, { useState, useEffect } from 'react';
import NavbarMenu from './NavbarMenu';

function Navbar(): React.ReactNode {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-4 fixed z-20 min-w-full bg-slate-100 transition duration-500 ${
        isScrolled ? 'border-b border-black' : ''
      }`}
    >
      <nav className="container px-4 mx-auto flex justify-between items-center">
        <h1 className="text-3xl">MARDINI</h1>
        <NavbarMenu />
      </nav>
    </div>
  );
}

export default Navbar;
