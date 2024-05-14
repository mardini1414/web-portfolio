import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
