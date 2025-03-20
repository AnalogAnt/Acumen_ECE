import React, { useState, useEffect } from 'react';

const events = [
  {
    id: 1,
    title: "Technical Workshop 2023",
    date: "March 15, 2023",
    description: "A hands-on workshop on emerging technologies in electronics",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    ]
  },
  {
    id: 2,
    title: "Annual Symposium 2023",
    date: "April 20, 2023",
    description: "Annual technical symposium showcasing student projects",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  {
    id: 3,
    title: "Robotics Competition",
    date: "May 10, 2023",
    description: "Inter-college robotics competition showcasing innovative designs",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  {
    id: 4,
    title: "Circuit Design Workshop",
    date: "June 5, 2023",
    description: "Advanced circuit design and PCB fabrication workshop",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    ]
  },
  {
    id: 5,
    title: "Project Exhibition",
    date: "July 15, 2023",
    description: "Showcasing innovative student projects and research work",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  {
    id: 6,
    title: "Industry Connect",
    date: "August 20, 2023",
    description: "Industry experts sharing insights on latest technologies",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  }
];

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState({});

  // Preload all thumbnail images on component mount
  useEffect(() => {
    events.forEach(event => {
      const img = new Image();
      img.src = `${event.images[0]}?w=400&auto=format&fit=crop&q=80`;
    });
  }, []);

  // Preload all images for selected event
  useEffect(() => {
    if (selectedEvent) {
      setIsImageLoading(true);
      const loadImages = async () => {
        const loadPromises = selectedEvent.images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.src = `${src}?w=1600&auto=format&fit=crop&q=90`;
          });
        });

        try {
          const loadedImages = await Promise.all(loadPromises);
          setPreloadedImages(prev => ({
            ...prev,
            [selectedEvent.id]: loadedImages
          }));
        } catch (error) {
          console.error('Error preloading images:', error);
        }
      };

      loadImages();
    }
  }, [selectedEvent]);

  const nextImage = () => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => 
      prev === selectedEvent.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedEvent.images.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (!selectedEvent) return;
    if (e.key === 'Escape') setSelectedEvent(null);
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  // Reset loading state when changing images
  useEffect(() => {
    if (selectedEvent && preloadedImages[selectedEvent.id]) {
      setIsImageLoading(false);
    }
  }, [currentImageIndex, selectedEvent, preloadedImages]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#1a1a2e] to-[#301E67] pt-20 md:pt-32 pb-20 overflow-y-auto scrollbar-hide">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 text-center mb-12 md:mb-16 anta-font">
          Event Gallery
        </h1>
        
        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group glassmorphism rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:-rotate-1 transition-all duration-300 will-change-transform shadow-lg hover:shadow-2xl"
              onClick={() => {
                setSelectedEvent(event);
                setCurrentImageIndex(0);
                setIsImageLoading(true);
              }}
            >
              <div className="relative h-52 bg-gradient-to-br from-purple-900 to-gray-900 overflow-hidden">
                <img
                  src={`${event.images[0]}?w=400&auto=format&fit=crop&q=80`}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{event.title}</h3>
                <p className="text-gray-300 mb-3 text-sm font-medium">{event.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with Slider */}
        {selectedEvent && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-sm px-4 sm:px-6"
            onClick={() => setSelectedEvent(null)}
          >
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(null);
                }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-purple-600 hover:bg-purple-700 text-white z-50 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Close modal"
              >
                <svg 
                  className="w-4 h-4 md:w-6 md:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              <div className="relative h-[75vh] flex items-center justify-center bg-black bg-opacity-50 rounded-lg overflow-hidden">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  key={currentImageIndex}
                  src={`${selectedEvent.images[currentImageIndex]}?w=1600&auto=format&fit=crop&q=90`}
                  alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  loading="eager"
                  decoding="async"
                  onLoad={() => setIsImageLoading(false)}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 rounded-full hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center hover:scale-110 group"
                >
                  <span className="text-2xl group-hover:text-purple-400 transition-colors duration-300">‹</span>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 rounded-full hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center hover:scale-110 group"
                >
                  <span className="text-2xl group-hover:text-purple-400 transition-colors duration-300">›</span>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {selectedEvent.images.length}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 font-medium mb-2">{selectedEvent.date}</p>
                <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery; 