import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

function NavbarMenu(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function scrollInToElemet(id: string) {
    const element = document.getElementById(id);
    const offset = 45;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element?.getBoundingClientRect().top || 0;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    if (isHamburger()) {
      setIsOpen(false);
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 550);
    } else {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  function isHamburger(): boolean {
    const width = document.body.getBoundingClientRect().width;
    return width < 1024;
  }

  return (
    <div className="flex items-center justify-between">
      <ul
        className={`bg-slate-100 pt-4 lg:pt-0 flex flex-col lg:flex-row items-center absolute lg:relative right-0 min-w-full min-h-dvh lg:min-h-0 top-[80px] lg:top-0 gap-8 lg:gap-20 text-base transition duration-500 ${
          isOpen ? '' : 'translate-x-[999px] lg:translate-x-0'
        }`}
      >
        <li
          className="cursor-pointer"
          onClick={() => scrollInToElemet('hero-section')}
        >
          Home
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollInToElemet('about-section')}
        >
          About
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollInToElemet('portfolio-section')}
        >
          Portfolio
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollInToElemet('contact-section')}
        >
          Contact
        </li>
      </ul>
      <div className="block lg:hidden">
        <Hamburger rounded toggle={setIsOpen} toggled={isOpen} />
      </div>
    </div>
  );
}

export default NavbarMenu;
