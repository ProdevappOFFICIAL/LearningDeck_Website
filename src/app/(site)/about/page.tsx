"use client"
import React, { useState } from "react";
import { ArrowRight, Shield, Wifi, WifiOff, Users, CheckCircle, Play, Globe, Server, Monitor, Lock, Zap } from "lucide-react";

const LearningDeckPage = () => {
  const [activeTab, setActiveTab] = useState("features");

  const stats = [
    { number: "0%", label: "Internet Required", icon: WifiOff },
    { number: "3min", label: "Setup Time", icon: Zap },
    { number: "1000+", label: "Students Per Exam", icon: Users },
    { number: "100%", label: "Offline Secure", icon: Shield }
  ];

  const features = [
    {
      icon: WifiOff,
      title: "Offline-First by Design",
      description: "Creates a local API server on your network (LAN, Wi-Fi, or hotspot). Students connect via IP like 192.168.1.x—even in remote villages."
    },
    {
      icon: Monitor,
      title: "Zero Tech Skills Needed",
      description: "If you can open an app, you can run a full exam. Choose a template, start testing—no developers required."
    },
    {
      icon: Lock,
      title: "Secure & Controlled",
      description: "Only devices on your network can connect. Monitor connections, block unknown devices, prevent unauthorized access."
    },
    {
      icon: Server,
      title: "Local Infrastructure",
      description: "Turn any laptop into a secure exam host. No cloud dependency, no subscription lock-ins."
    }
  ];

  const steps = [
    "Install the LearningDeck App",
    "Create an Exam Using a Custom Template", 
    "Choose Local Network (LAN / Wi-Fi / Hotspot)",
    "Students Connect via IP (e.g., 192.168.1.2)",
    "Monitor All Devices in Real-Time",
    "Run the Exam — Completely Offline"
  ];

  const pricing = [
    {
      name: "Pilot",
      price: "Free",
      duration: "(3 months)",
      devices: "15",
      templates: "1",
      support: "Email (48h)",
      highlight: false
    },
    {
      name: "Starter", 
      price: "₦6,000",
      duration: "/ $5",
      devices: "50",
      templates: "2",
      support: "Email (24h)",
      highlight: true
    },
    {
      name: "Growth",
      price: "₦60,000",
      duration: "/ $45", 
      devices: "250",
      templates: "5",
      support: "Priority Email",
      highlight: false
    },
    {
      name: "Institution",
      price: "₦600,000+",
      duration: "/ $400+",
      devices: "1000+",
      templates: "Unlimited",
      support: "Dedicated Rep",
      highlight: false
    }
  ];

  const useCases = [
    "Secondary Schools",
    "Universities & Colleges", 
    "Government Training Centers",
    "NGOs & Certification Bodies",
    "Remote & Underserved Communities"
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Network Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          {/* Network nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-3 h-3 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + ((i * 11) % 60)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            >
              {/* Connection lines */}
              <div className="absolute inset-0">
                {i > 0 && (
                  <div 
                    className="absolute w-px bg-gradient-to-r from-blue-400/50 to-transparent h-20 -rotate-45 origin-center animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                )}
                {i < 11 && (
                  <div 
                    className="absolute w-16 h-px bg-gradient-to-r from-blue-400/50 to-transparent animate-pulse"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Africa outline */}
        <div className="absolute top-20 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="animate-pulse">
            <path d="M100 20 C140 30, 160 60, 150 100 C160 140, 130 170, 100 160 C70 170, 40 140, 50 100 C40 60, 60 30, 100 20 Z" 
                  fill="currentColor" className="text-blue-600"/>
          </svg>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Main Content */}
      <main className="px-6 py-12 relative z-30 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Made for Africa • Offline-First
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LearningDeck
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Run Secure Exams Anywhere, Without the Internet
            </p>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              The first offline-first exam server built for Africa. Turn any laptop into a secure exam host. 
              No internet required. No coding needed. Just reliable digital exams for schools everywhere.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 font-medium">
                <span>Apply for Free Pilot</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-800 pl-2 pr-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex p-3 items-center bg-blue-600 text-white rounded-full">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:bg-blue-50/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Problem Statement */}
          <div className="bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔒 Reimagining Exams for Low-Connectivity Regions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              In many parts of Africa and the Global South, unstable internet access makes digital exams unreliable. 
              Schools are forced to rely on outdated paper systems or expensive imported tech that breaks under pressure.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full p-2 flex flex-wrap gap-1">
              {[
                { id: "features", label: "Features" },
                { id: "how-it-works", label: "How It Works" },
             
                { id: "use-cases", label: "Who It&apos;s For" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 mb-16">
            {activeTab === "features" && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  ✨ What Makes LearningDeck Different?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="group hover:bg-blue-50/50 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "how-it-works" && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  🛠️ How It Works
                </h2>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-6 group hover:bg-blue-50/30 rounded-2xl p-6 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <p className="text-lg text-gray-700 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-blue-50/50 rounded-xl border border-blue-200/50">
                  <p className="text-center text-gray-700 font-medium">
                    💡 Think of it like <strong>Google Forms + LAN + Proctoring</strong> — in one box, without the cloud.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "use-cases" && (
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                  🎓 Who It&apos;s For
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl p-6 hover:from-blue-100/50 hover:to-indigo-100/50 transition-all duration-300 transform hover:scale-105">
                      <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                      <p className="font-medium text-gray-800">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 Our Mission
            </h2>
            <p className="text-xl text-gray-700 mb-6 font-medium max-w-3xl mx-auto">
              &quot;We build offline-first tools that empower education in places where the cloud doesn&apos;t reach.&quot;
            </p>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              At LearningDeck, we&apos;re solving a uniquely African challenge with purpose-built local infrastructure. 
              We&apos;re not trying to bring Silicon Valley&apos;s internet obsession into schools — we&apos;re replacing it with 
              <strong> reliable, context-aware, exam tech.</strong>
            </p>
          </div>

          {/* Final CTA */}
          <div className="hidden bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🤝 Join the Movement
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s make digital exams reliable, secure, and accessible — <strong>anywhere</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 font-medium transition-all duration-300 transform hover:scale-105">
                <span>Apply for Pilot Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-105">
                Request a Demo
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200/50">
              <p className="text-gray-600 mb-2">📍 Based in Lagos, Nigeria</p>
              <p className="text-gray-600">
                <strong>Instagram / Twitter:</strong> @learningdeckhq • 
                <strong> Email:</strong> info@learningdeck.com
              </p>
              <p className="text-blue-600 font-medium mt-2 italic">
                LearningDeck is proudly offline-first. Made for Africa.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningDeckPage;