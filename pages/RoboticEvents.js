import { Footer, Navbar, Navbar_Prim } from '../components';
import { About4, Explore4, Feedback, GetStarted4, Hero4 } from '../sections';
import React from 'react'

const RoboticEvents = () => {
  return (
    <div className="bg-primary-black overflow-hidden color6">
    <Navbar_Prim />
    <div className="gradient-01 z-0" />
    <div className="bg-[url('/Acumen_25.png')] bg-cover  h-screen">
    <Hero4 />
    </div>
    <div className="relative">

      <div className="gradient-04 z-0" />
      <Explore4 />

 
    </div>
    {/* <div className="relative">
      <Feedback />
      <div className="gradient-04 z-0" />
    </div> */}
    <Footer />
  </div>
);
}

export default RoboticEvents