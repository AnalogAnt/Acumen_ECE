import React from "react";
import { coreTeam, devsTeam } from "../constants";
import { Carousel } from "react-bootstrap";
import Navbar_Prim from "../components/Navbar_Prim";
import Footer from "../components/Footer";

const CoreTeam = () => {
  return (
    <div className="bg-primary-black color1 min-h-screen flex flex-col relative overflow-hidden">
      {/* ✅ Background Theme (Ensuring your design stays intact) */}
      <div className="gradient-03 absolute inset-0 w-full h-full z-0"></div>

      {/* ✅ Navbar_Prim with Correct Spacing */}
      <Navbar_Prim />
      <div className="mt-20 md:mt-24"></div>

      {/* ✅ Core Team Section */}
      <div className="flex-grow flex flex-col items-center text-white px-4 md:px-8 w-full max-w-7xl mx-auto relative z-10">
        <h1 className="text-center text-3xl md:text-4xl font-bold mt-10 md:mt-14 mb-6 md:mb-10">
          Meet Our Core Team
        </h1>

        {/* ✅ Core Team Carousel (No changes to theme & design) */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mb-10 md:mb-14">
          <Carousel interval={3000} indicators={false} fade className="transition-all duration-1000 ease-in-out">
            {coreTeam.map((department, index) => (
              <Carousel.Item key={index}>
                <div className="text-center p-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{department.department}</h2>
                  <div className="flex justify-center gap-6 flex-wrap">
                    {department.members.map((member, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <img
                          src={member.imgUrl}
                          alt={member.name}
                          className="w-48 md:w-56 lg:w-64 h-64 md:h-72 lg:h-80 
                          object-cover border-2 border-primary-black transition-transform duration-300 hover:scale-105 rounded-lg"
                        />
                        <h3 className="mt-2 text-lg md:text-xl font-bold text-white">{member.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* ✅ Dev Team Section */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mt-10 md:mt-14 mb-6 md:mb-10">
          Devs of Website
        </h1>

        {/* ✅ Slideshow for Small Screens */}
        <div className="block sm:hidden w-full max-w-xs mb-10 md:mb-14">
          <Carousel interval={3000} indicators={false} fade className="transition-all duration-1000 ease-in-out">
            {devsTeam[0].members.map((member, idx) => (
              <Carousel.Item key={idx}>
                <div className="flex flex-col items-center">
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-48 md:w-56 lg:w-64 h-64 md:h-72 lg:h-80 
                    object-cover border-2 border-primary-black transition-transform duration-300 hover:scale-105 rounded-lg"
                  />
                  <h3 className="mt-3 text-lg md:text-xl font-bold text-white">{member.name}</h3>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* ✅ Static Grid for Large Screens */}
        <div className="hidden sm:flex flex-wrap justify-center gap-10 w-full max-w-5xl mb-10 md:mb-14">
          {devsTeam[0].members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-48 md:w-56 lg:w-64 h-64 md:h-72 lg:h-80 
                object-cover border-2 border-primary-black transition-transform duration-300 hover:scale-105 rounded-lg"
              />
              <h3 className="mt-3 text-lg md:text-xl font-bold text-white">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer (Spacing Fixed) */}
      <div className="mt-16 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default CoreTeam;
