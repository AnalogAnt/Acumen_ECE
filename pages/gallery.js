import React from 'react';
import Navbar_Prim from '../components/Navbar_Prim';
import FooterSimple from '../components/FooterSimple';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar_Prim />
      <Gallery />
      <FooterSimple />
    </div>
  );
};

export default GalleryPage; 