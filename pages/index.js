import { useRef } from 'react';
import { Footer, Navbar, Navbar_Prim, Sponsors } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew } from '../sections';

const Page = () => {
  const exploreRef = useRef(null);
  return(
  <div className="bg-primary-black   overflow-hidden color1" >
    <Navbar_Prim exploreRef={exploreRef}/>
    <Navbar />
    {/* <head /> */}
      <Hero />

      <div className="relative">
        <div id="explore-section" className="gradient-03 z-0" ref={exploreRef} />
        <Explore />
      </div>
      <Sponsors />
      <Footer />
  </div>);
};

export default Page;
