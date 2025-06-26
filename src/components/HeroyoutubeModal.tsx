"use client";

import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroYoutubeModal() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const images = [
    "/lds_dashboard.PNG",
    "/lds_dashboard.PNG", // You can replace these with different image paths
    "/lds_dashboard.PNG",
    "/lds_dashboard.PNG"
  ];

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="my-5 select-none">
      {/* Navigation and Carousel Container */}
      <div className="flex items-center gap-4">
        {/* Left Navigation Arrow */}
        {!isPlaying && (
          <button
            onClick={goToPrevious}
            className="w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg flex-shrink-0 z-10"
          >
           <ChevronLeft/>
          </button>
        )}

        {/* Carousel Container */}
        <div className="rounded-md relative group flex-1">
          <div className="relative overflow-hidden rounded-md">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={isPlaying ? image : image}
                  alt={`hero image ${index + 1}`}
                  className="hover:cursor-pointer rounded-md border-2 border-gray-400 shadow-sm bg-blend-overlay w-full flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300 rounded-md">
              <div
                className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out shadow-lg cursor-pointer"
                onClick={handlePlayClick}
              >
                <svg
                  className="w-8 h-8 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Right Navigation Arrow */}
        {!isPlaying && (
          <button
            onClick={goToNext}
            className="w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg flex-shrink-0"
          >
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        )}
      </div>

      {/* Dot Indicators Below Image */}
      {!isPlaying && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-blue-600 px-6"
                  : "bg-blue-200 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}