"use client"
import React from "react";
import { Play, ArrowRight, Download, Smartphone, Monitor, Globe, Code, Database, Shield, Star, Users, Zap } from "lucide-react";

const SoftwareAppsPage = () => {
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

      {/* Main Content */}
      <main className="px-6 py-12 relative z-30">
        <div className="max-w-7xl mx-auto">
          {/* New Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-full">
              <Code className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-900">New: Enterprise Software Solutions</span>
              <div className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Pro</div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-blue-700 scale-75 hover:scale-100 bg-clip-text text-transparent animate-pulse">
                Software & Apps
                <br />
              </span>
              made powerful.
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore LearningDeck Apps and Services
            </p>

            {/* CTA Buttons */}
       
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Desktop Apps Card */}
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-md border-gray-400  p-8 hover:bg-white/90 transition-all duration-300">
              <div className="text-blue-600 mb-4">
                  <img
                      src={"/lds_logo.png"}
                      alt="Logo"
                      className=" bg-blend-multiply  sm:scale-95  px-2 py-[1px]"
                    />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">LearningDeck Exam Manager</h3>
              <p className="text-gray-600 mb-6">LearningDeck turns any local network into an exam server. No coding. No internet. 100% exam control.</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
                <span className="text-sm text-gray-600">50K+ downloads</span>
              </div>

                 <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                   <span className="flex px-2 py-1 rounded-md text-sm font-medium bg-blue-200/60  border border-gray-400">DESKTOP</span>
                  <span className="flex px-2 py-1 rounded-md text-sm font-medium bg-yellow-200/60 ">WEB</span>

                </div>
              
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>

            {/* Mobile Apps Card */}
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-md border-gray-400  p-8 hover:bg-white/90 transition-all duration-300">
              <div className="text-purple-600 mb-4">
                <img
                      src={"/lds_logo.png"}
                      alt="Logo"
                      className=" bg-blend-multiply  sm:scale-95  px-2 py-[1px]"
                    />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">LearningDeck Elearn</h3>
              <p className="text-gray-600 mb-6">Cross-platform mobile applications for iOS and Android with native performance</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
                <span className="text-sm text-gray-600">100K+ downloads</span>
              </div>
                 <div className="flex items-center space-x-2 mb-4">
                   <span className="flex px-2 py-1 rounded-md text-sm font-medium bg-blue-200/60  border">DESKTOP</span>
                  <span className="flex px-2 py-1 rounded-md text-sm font-medium bg-yellow-200/60">WEB</span>
  <span className="flex px-2 py-1 rounded-md text-sm font-medium bg-green-200/60 border border-gray-400">MOBILE</span>

                </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>

            {/* Web Apps Card */}
            <div className="hidden bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-md border-gray-400  p-8 hover:bg-white/90 transition-all duration-300">
              <div className="text-green-600 mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Apps</h3>
              <p className="text-gray-600 mb-6">Progressive web applications with offline capabilities and responsive design</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">4.7</span>
                </div>
                <span className="text-sm text-gray-600">75K+ downloads</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>

            {/* Enterprise Software Card */}
            <div className="hidden bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-md border-gray-400  p-8 hover:bg-white/90 transition-all duration-300">
              <div className="text-indigo-600 mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Software</h3>
              <p className="text-gray-600 mb-6">Secure, scalable enterprise solutions with advanced security and compliance</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
                <span className="text-sm text-gray-600">25K+ installs</span>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Custom Development Card */}
            <div className="hidden bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-md border-gray-400  p-8 hover:bg-white/90 transition-all duration-300">
              <div className="text-orange-600 mb-4">
                <Code className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Development</h3>
              <p className="text-gray-600 mb-6">Tailored software solutions built to your exact specifications and requirements</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">500+ projects</span>
                </div>
                <span className="text-sm text-gray-600">Enterprise</span>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Database Solutions Card */}
            <div className="hidden bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-md border-gray-400  p-8 hover:bg-white/90 transition-all duration-300">
              <div className="text-cyan-600 mb-4">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Database Solutions</h3>
              <p className="text-gray-600 mb-6">Robust database management with cloud integration and real-time sync</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">99.9% uptime</span>
                </div>
                <span className="text-sm text-gray-600">Cloud ready</span>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Try Free</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="hidden bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500K+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoftwareAppsPage;