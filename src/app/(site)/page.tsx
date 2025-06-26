"use client"
import React from "react";
import { Play, ArrowRight, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { HeroYoutubeModal } from "@/components/HeroyoutubeModal";
import HeroHeaderSection from "@/components/sections/HerHeader";
import BankingPage from "@/components/common/Features";
import TestimonialsSection from "./testimonials/page";
import Footer from "@/components/common/Footer";
import EuphoriaFooter from "./footer/page";
import PricingPlans from "./pricing/page";
import FAQSection from "./faq/page";
import LearningDeckAudience from "./buitfor/page";


const EuphoriaLanding = () => {
  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          {/* Vertical Lines */}
          <div className="absolute left-0 top-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full border-l border-gray-300/20"
                style={{
                  left: `${i * 5}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div 
                  className="w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"
                  style={{ animationDuration: `${3 + (i % 3)}s` }}
                ></div>
              </div>
            ))}
          </div>
          
          {/* Horizontal Lines */}
          <div className="absolute left-0 top-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full border-t border-gray-300/20"
                style={{
                  top: `${i * 6.67}%`,
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div 
                  className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse"
                  style={{ animationDuration: `${4 + (i % 2)}s` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Moving Grid Highlights */}
        <div className="absolute inset-0">
          {/* Animated Grid Intersections */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`intersection-${i}`}
              className="absolute w-2 h-2 bg-blue-500/40 rounded-full animate-ping"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${15 + ((i * 13) % 70)}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s',
              }}
            ></div>
          ))}

          {/* Traveling Grid Pulses */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={`pulse-${i}`}
                className="absolute"
                style={{
                  left: `${i * 33}%`,
                  top: '0%',
                  animation: `gridPulseDown 6s infinite linear`,
                  animationDelay: `${i * 2}s`,
                }}
              >
                <div className="w-px h-20 bg-gradient-to-b from-cyan-400/60 via-blue-500/80 to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={`pulse-h-${i}`}
                className="absolute"
                style={{
                  left: '0%',
                  top: `${20 + (i * 25)}%`,
                  animation: `gridPulseRight 8s infinite linear`,
                  animationDelay: `${i * 2.5}s`,
                }}
              >
                <div className="w-20 h-px bg-gradient-to-r from-purple-400/60 via-indigo-500/80 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Shimmer Effect */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"
            style={{
              animation: 'shimmer 8s infinite linear',
              width: '200%',
              height: '100%',
              left: '-100%',
            }}
          ></div>
        </div>
      </div>

      {/* Add keyframes via style tag */}
      <style jsx>{`
        @keyframes gridPulseDown {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes gridPulseRight {
          0% { transform: translateX(-100vw); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-200/25 to-pink-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating geometric circles */}
        <div
          className="absolute top-20 left-1/4 w-4 h-4 bg-yellow-500/60 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-1/4 w-6 h-6 bg-emerald-500/50 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-pink-500/70 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s", animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-60 right-1/3 w-5 h-5 bg-cyan-500/60 rounded-full animate-bounce"
          style={{ animationDelay: "0.8s", animationDuration: "3.5s" }}
        ></div>

        {/* Orbiting circles */}
        <div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-600/80 rounded-full animate-spin"
          style={{ transformOrigin: "50px 50px", animationDuration: "15s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-600/80 rounded-full animate-spin"
          style={{
            transformOrigin: "40px 40px",
            animationDuration: "12s",
            animationDirection: "reverse",
          }}
        ></div>

        {/* Gradient rings */}
        <div
          className="absolute top-1/4 right-1/5 w-32 h-32 border border-gray-300/30 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/5 w-24 h-24 border border-blue-400/40 rounded-full animate-ping"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>

        {/* Morphing blobs */}
        <div
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-violet-300/40 to-fuchsia-300/40 rounded-full blur-xl animate-pulse transform scale-110"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-teal-300/35 to-green-300/35 rounded-full blur-lg animate-pulse transform scale-125"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header Navigation */}

  

      {/* Main Content */}
      <main className="px-6 py-12 relative z-30 ">
        <div className="max-w-7xl mx-auto">
          {/* New Badge */}
          <div className="flex justify-center mb-8">
            <HeroHeaderSection />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-blue-700 scale-75 hover:scale-100 bg-clip-text text-transparent animate-pulse">
                Offline-exam system
                <br />
              </span>
              made easy.
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Secure. scalable exams Online/Offline for Individuals, Schools,
              Institutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a href="/auth/signin"> <button className="bg-gradient-to-tr from-blue-400 to-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full flex items-center space-x-2 transition-colors">
                <span className="font-medium">
               
  Create account
                
                </span>
                <ArrowRight className="w-5 h-5" />
              </button></a>

              <button className="bg-white border  backdrop-blur-sm text-gray-800 pl-2 pr-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800/20 transition-colors">
              <div className="flex p-3 items-center bg-blue-600 text-white rounded-full">
   <Play className="w-5 h-5 fill-white"  />
              </div>
             
                <span className="font-medium">Watch Tutorial</span>
              </button>
            </div>
          </div>

          {/* Mobile App Interface */}
          <HeroYoutubeModal />
        </div>
      </main>
      <BankingPage />
      <LearningDeckAudience/>
      <TestimonialsSection />
       <PricingPlans/>
      <FAQSection/>
    
    </div>
  );
};

export default EuphoriaLanding;