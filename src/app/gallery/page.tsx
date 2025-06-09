"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Mock data for gallery items
const demoReelVideo = {
  id: 'demo1',
  type: 'video',
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed
  title: 'Action Driving Demo Reel 2025',
  description: 'Showcasing our best stunt driving work from recent productions.'
};

const projectsGallery = [
  {
    id: 'proj1',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Fast & Furious Stunt Sequence',
    description: 'Precision driving for the latest Fast & Furious movie.',
    instagramLink: 'https://instagram.com/actiondriving'
  },
  {
    id: 'proj2',
    type: 'image',
    src: '/placeholder-image.svg',
    title: 'Mission Impossible Chase Scene',
    description: 'Coordinated driving sequence through narrow streets.',
    instagramLink: 'https://instagram.com/actiondriving'
  },
  {
    id: 'proj3',
    type: 'image',
    src: '/placeholder-image.svg',
    title: 'James Bond Stunt Driving',
    description: 'Precision driving for the latest 007 film.',
    instagramLink: 'https://instagram.com/actiondriving'
  },
  {
    id: 'proj4',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Commercial Shoot for BMW',
    description: 'High-speed driving shots for a luxury car commercial.',
    instagramLink: 'https://instagram.com/actiondriving'
  },
  {
    id: 'proj5',
    type: 'image',
    src: '/placeholder-image.svg',
    title: 'TV Series Car Chase',
    description: 'Complex multi-vehicle chase sequence for a popular TV series.',
    instagramLink: 'https://instagram.com/actiondriving'
  },
  {
    id: 'proj6',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Stunt Driving Compilation',
    description: 'Highlights from various projects over the past year.',
    instagramLink: 'https://instagram.com/actiondriving'
  }
];

const trainingEventsGallery = [
  {
    id: 'train1',
    type: 'image',
    src: '/placeholder-image.svg',
    title: 'Advanced Precision Driving Course',
    description: 'Training session for professional stunt drivers.'
  },
  {
    id: 'train2',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Stunt Driving Workshop',
    description: 'Behind-the-scenes of our latest training workshop.'
  },
  {
    id: 'train3',
    type: 'image',
    src: '/placeholder-image.svg',
    title: 'Film Industry Event',
    description: 'Showcasing our capabilities to film industry professionals.'
  },
  {
    id: 'train4',
    type: 'image',
    src: '/placeholder-image.svg',
    title: 'Safety Training Session',
    description: 'Ensuring all our drivers maintain the highest safety standards.'
  }
];

// Gallery Item Component
const GalleryItem = ({ item, onClick }) => {
  return (
    <div 
      className="bg-background-secondary rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-default hover:scale-105"
      onClick={() => onClick(item)}
    >
      {item.type === 'video' ? (
        <div className="aspect-video relative">
          <iframe 
            src={item.src} 
            className="w-full h-full"
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="aspect-video relative bg-background-tertiary">
          <Image 
            src={item.src} 
            alt={item.title} 
            fill 
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg">{item.title}</h3>
        <p className="text-text-normal text-sm mt-1">{item.description}</p>
      </div>
    </div>
  );
};

// Gallery Section Component
const GallerySection = ({ title, items, viewMode, onItemClick }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Check if scrolling is possible at all
      const hasOverflow = container.scrollWidth > container.clientWidth;

      // Check if we can scroll left (not at the beginning)
      const canScrollLeft = container.scrollLeft > 0;

      // Check if we can scroll right (not at the end)
      const canScrollRight = container.scrollLeft + container.clientWidth < container.scrollWidth;

      setCanScrollLeft(canScrollLeft);
      setCanScrollRight(canScrollRight && hasOverflow);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll left by approximately 4 cards (4 * 320px = 1280px)
      scrollContainerRef.current.scrollBy({ left: -1280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll right by approximately 4 cards (4 * 320px = 1280px)
      scrollContainerRef.current.scrollBy({ left: 1280, behavior: 'smooth' });
    }
  };

  // Check scrollability on mount and when items change
  useEffect(() => {
    checkScrollability();

    // Add scroll event listener to update arrow visibility
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);

      // Also check after images might have loaded
      window.addEventListener('load', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('load', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      }
    };
  }, [items, viewMode]);

  return (
    <div className="mb-16">
      <h2 className="mb-6">{title}</h2>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <GalleryItem key={item.id} item={item} onClick={onItemClick} />
          ))}
        </div>
      ) : (
        <div className="relative">
          {/* Left scroll arrow - only show if we can scroll left */}
          {canScrollLeft && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background-secondary bg-opacity-80 p-2 rounded-r-lg z-10 hover:bg-accent transition-colors duration-default"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Scrollable container with hover-only scrollbars */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 space-x-6 scrollbar-hide"
          >
            {items.map(item => (
              <div key={item.id} className="flex-none w-80">
                <GalleryItem item={item} onClick={onItemClick} />
              </div>
            ))}
          </div>

          {/* Right scroll arrow - only show if we can scroll right */}
          {canScrollRight && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background-secondary bg-opacity-80 p-2 rounded-l-lg z-10 hover:bg-accent transition-colors duration-default"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Fullscreen Modal Component
const FullscreenModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-background-tertiary bg-opacity-95 z-50 flex items-center justify-center p-4">
      <button 
        className="absolute top-4 right-4 text-text text-2xl hover:text-accent transition-colors duration-default"
        onClick={onClose}
      >
        ×
      </button>

      <div className="max-w-6xl w-full">
        {item.type === 'video' ? (
          <div className="aspect-video">
            <iframe 
              src={item.src} 
              className="w-full h-full"
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="aspect-video relative bg-background-secondary">
            <Image 
              src={item.src} 
              alt={item.title} 
              fill 
              className="object-contain"
            />
          </div>
        )}

        <div className="mt-4">
          <h2>{item.title}</h2>
          <p className="mt-2 text-text-normal">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState('scroll'); // 'grid' or 'scroll'
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center">
        Media Gallery
      </h1>

      <div className="flex justify-end mb-6">
        <div className="bg-background-secondary rounded-lg p-2 inline-flex">
          <button 
            className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-accent text-text' : 'text-text-muted hover:bg-ui-hover'}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            className={`px-3 py-1 rounded ml-2 ${viewMode === 'scroll' ? 'bg-accent text-text' : 'text-text-muted hover:bg-ui-hover'}`}
            onClick={() => setViewMode('scroll')}
            aria-label="Scroll View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Demo Reel Section */}
      <div className="mb-16">
        <h2 className="mb-6">Demo Reel</h2>
        <div className="bg-background-secondary p-6 rounded-lg shadow-lg">
          <div className="aspect-video">
            <iframe 
              src={demoReelVideo.src} 
              className="w-full h-full"
              title={demoReelVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="text-xl">{demoReelVideo.title}</h3>
            <p className="text-text-normal mt-2">{demoReelVideo.description}</p>
          </div>
        </div>
      </div>

      {/* Previous Projects Gallery */}
      <GallerySection 
        title="Previous Projects" 
        items={projectsGallery} 
        viewMode={viewMode}
        onItemClick={handleItemClick}
      />

      {/* Training and Events Gallery */}
      <GallerySection 
        title="Training and Events" 
        items={trainingEventsGallery} 
        viewMode={viewMode}
        onItemClick={handleItemClick}
      />

      {/* Fullscreen Modal */}
      <FullscreenModal item={selectedItem} onClose={closeModal} />
    </div>
  );
}
