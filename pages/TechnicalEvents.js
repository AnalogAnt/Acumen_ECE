import { Footer, Navbar, Navbar_Prim } from '../components';
import { About5, Explore5, Feedback, GetStarted5, Hero5 } from '../sections';
import React from 'react'

const TechnicalEvents = () => {
  return (
  <div className="bg-primary-black overflow-hidden color6">
    <Navbar_Prim />
    <div className="gradient-03 z-0" />
    <div className="bg-[url('/Acumen_25.png')] w-100vw bg-cover  h-screen">
    <Hero5 />
    </div>
    <div className="relative">

      <div className="gradient-03 z-0" />
      <Explore5 />
      <div className="gradient-04 z-0" />

    </div>
    {/* <div className="relative">
      <Feedback />
      <div className="gradient-04 z-0" />
    </div> */}
    <Footer />
  </div>
);
}

export default TechnicalEvents