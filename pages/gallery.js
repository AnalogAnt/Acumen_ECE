import { Footer, Navbar_Prim } from '../components';
import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      image: '/tech_events.jpeg',
      title: 'Technical Events 2023',
      description: 'Showcasing innovation and technology',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      image: '/robo_sumo.png',
      title: 'Robotics Competition',
      description: 'Battle of the bots',
      className: 'md:col-span-1'
    },
    {
      image: '/poster_project.png',
      title: 'Project Exhibition',
      description: 'Student innovations on display',
      className: 'md:col-span-1'
    },
    {
      image: '/poster_industrize.png',
      title: 'Industrize & Ideathon',
      description: 'Bridging academia and industry',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      image: '/poster_codewars.png',
      title: 'Code Wars 2023',
      description: 'Programming competition',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      image: '/non_tech.jpeg',
      title: 'Cultural Events',
      description: 'Celebrating talent and creativity',
      className: 'md:col-span-2'
    }
  ];

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar_Prim />
      <div className="min-h-screen pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff] mb-4 text-center">
            Event Gallery
          </h1>
          <p className="text-[#8892b0] text-lg mb-12 text-center max-w-2xl mx-auto">
            Explore our diverse range of technical and cultural events that make Acumen ECE unique.
          </p>
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-2 md:gap-3 grid-flow-dense">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className={`group rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] ${item.className}`}
              >
                <div className="w-full h-full relative">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-[#00c6ff] text-xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#8892b0] text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery; 