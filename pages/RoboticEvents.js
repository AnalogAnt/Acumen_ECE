import { Footer, Navbar, Navbar_Prim } from '../components';
import { About4, Explore4, Feedback, GetStarted4, Hero4 } from '../sections';
import React from 'react'

const RoboticEvents = () => {
  return (
  <div className="bg-primary-black overflow-hidden color5">
    <Navbar_Prim />
    <div className="gradient-02 z-0" />
    <Hero4 />
    <div className="relative">
      <About4 />
      <div className="gradient-03 z-0" />
      <Explore4 />
      <div className="gradient-04 z-0" />
      <GetStarted4 />
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