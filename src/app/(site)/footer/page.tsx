import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, Play } from 'lucide-react';
import Image from 'next/image';

const EuphoriaFooter = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden">
      {/* Animated Lines Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(148 163 184)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          
          {/* Animated flowing lines */}
          <g className="animate-pulse">
            <path d="M-100,50 Q200,30 500,80 T1000,60 L1200,60 L1200,0 L-100,0 Z" 
                  fill="url(#lineGradient)" 
                  className="animate-[float_8s_ease-in-out_infinite]"/>
          </g>
          
          <g className="animate-pulse" style={{animationDelay: '2s'}}>
            <path d="M-100,120 Q300,100 600,140 T1200,130 L1200,80 L-100,80 Z" 
                  fill="url(#lineGradient)" 
                  className="animate-[float_12s_ease-in-out_infinite_reverse]"/>
          </g>
          
          <g className="animate-pulse" style={{animationDelay: '4s'}}>
            <path d="M-100,200 Q400,180 700,220 T1400,210 L1400,160 L-100,160 Z" 
                  fill="url(#lineGradient)" 
                  className="animate-[float_16s_ease-in-out_infinite]"/>
          </g>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-[particle_20s_linear_infinite]" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-[particle_25s_linear_infinite]" style={{left: '20%', animationDelay: '3s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300/20 rounded-full animate-[particle_30s_linear_infinite]" style={{left: '70%', animationDelay: '6s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-[particle_22s_linear_infinite]" style={{left: '85%', animationDelay: '9s'}}></div>
      </div>

      <footer className="px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
            <div className="flex items-center space-x-2  rounded-full ">
                     <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                       <div className="text-slate-800 font-bold ">
           <Image src={'/lds_logo.png'} width={170}   
                             height={180} alt="Logo" className="rounded-full bg-blend-multiply scale-95 px-2 py-[1px] border border-gray-300/20"
                             />
           
                       </div>
                     </div>
                     <span className="text-slate-700 text-xl font-semibold ml-1">LearningDeck</span>
                   </div>

              {/* Brand Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm ml-3">
              Offline exams made easy <br/>
              Hybrid Examination Manager
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 border border-slate-300/50 transition-all duration-300 shadow-sm">
                  <Facebook className="w-4 h-4 text-slate-600 hover:text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 border border-slate-300/50 transition-all duration-300 shadow-sm">
                  <Linkedin className="w-4 h-4 text-slate-600 hover:text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 border border-slate-300/50 transition-all duration-300 shadow-sm">
                  <Instagram className="w-4 h-4 text-slate-600 hover:text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 border border-slate-300/50 transition-all duration-300 shadow-sm">
                  <Twitter className="w-4 h-4 text-slate-600 hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* Home Section */}
            <div>
              <h3 className="text-slate-800 font-medium mb-6">Home</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Product Features</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Benefits</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">How To Use</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Key Features</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* App Section */}
            <div>
              <h3 className="text-slate-800 font-medium mb-6">App</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Mobile App</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Desktop App</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">How To Use</a></li>
              </ul>
            </div>

            {/* All Pages Section */}
            <div>
              <h3 className="text-slate-800 font-medium mb-6">All Pages</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Home</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">App</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Blogs</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Blog Open</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-600 text-sm hover:text-slate-800 transition-colors">404</a></li>
              </ul>
            </div>
          </div>

          {/* App Download Section */}
          <div className="mb-12">
            <h3 className="text-slate-800 font-medium mb-6">Download our App</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play Button */}
              <a href="#" className="bg-white/80 backdrop-blur-sm border border-slate-300/50 rounded-xl p-4 flex items-center space-x-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group shadow-sm">
                <Play className="w-8 h-8 text-slate-600 group-hover:text-blue-600 transition-colors" />
                <div>
                  <div className="text-xs text-slate-600">GET IT ON</div>
                  <div className="text-slate-800 font-medium">Google Play</div>
                </div>
              </a>

              {/* App Store Button */}
              <a href="#" className="bg-white/80 backdrop-blur-sm border border-slate-300/50 rounded-xl p-4 flex items-center space-x-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group shadow-sm">
                <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-white text-sm font-bold">🍎</span>
                </div>
                <div>
                  <div className="text-xs text-slate-600">Download on the</div>
                  <div className="text-slate-800 font-medium">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-300/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-slate-500 text-sm">
                © 2024 Euphoria. All rights reserved.
              </div>

              {/* Footer Links */}
              <div className="flex items-center space-x-8">
                <a href="#" className="text-slate-500 text-sm hover:text-slate-800 transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-500 text-sm hover:text-slate-800 transition-colors">Terms of Services</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EuphoriaFooter;

// Add custom animations to your global CSS or styled-jsx
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-10px) translateX(5px); }
    50% { transform: translateY(-5px) translateX(-3px); }
    75% { transform: translateY(-15px) translateX(2px); }
  }
  
  @keyframes particle {
    0% { 
      transform: translateY(100vh) translateX(0px); 
      opacity: 0; 
    }
    10% { 
      opacity: 1; 
    }
    90% { 
      opacity: 1; 
    }
    100% { 
      transform: translateY(-100px) translateX(50px); 
      opacity: 0; 
    }
  }
`;

// Add this to your global CSS file or use styled-jsx