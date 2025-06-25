"use client";

import { useState } from "react";

export function HeroYoutubeModal() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="my-5 rounded-md relative group select-none">
      <img
        src={isPlaying ? "/lds_dashboard.PNG" : "/lds_dashboard.PNG"}
        alt="hero image"
        className="hover:cursor-pointer rounded-md border-2  border-gray-300 shadow-sm bg-blend-overlay w-full"
      />

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-10    group-hover:bg-opacity-30 transition-all duration-300 rounded-md">
          <div
            className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-50  group-hover:scale-100 transition-transform duration-300 ease-out shadow-lg cursor-pointer"
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
  );
}