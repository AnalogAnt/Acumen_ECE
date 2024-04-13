import { Footer, Navbar, Navbar_Prim, Sponsors } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden color1" >
    <Navbar_Prim />
    <Navbar />
    {/* <head /> */}
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>
    {/* <World /> */}
    <div className="relative">
      
      <div className="gradient-04 z-0" />
      
    </div>
    <Sponsors />
    <Footer />
  </div>
);

export default Page;
