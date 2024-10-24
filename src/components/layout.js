/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import '../styles/global.css'; // Import your Tailwind CSS here

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
    
        className=' overflow-x-hidden '
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
