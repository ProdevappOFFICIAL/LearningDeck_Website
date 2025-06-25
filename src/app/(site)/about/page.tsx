"use client"
import React, { useState } from "react";
import { ArrowRight, Shield, Users, Zap, Target, Award, Globe, CheckCircle, Play, TrendingUp, BookOpen, Clock, Star } from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { number: "10K+", label: "Exams Conducted", icon: BookOpen },
    { number: "500+", label: "Institutions Trust Us", icon: Users },
    { number: "99.9%", label: "System Uptime", icon: Shield },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Military-grade encryption and robust security protocols protect every examination process."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology that works seamlessly online and offline, anytime, anywhere."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Designed for everyone - from individual educators to large educational institutions."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Proven track record of delivering consistent, dependable examination solutions."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Started with a vision to revolutionize examination systems worldwide."
    },
    {
      year: "2021",
      title: "First Launch",
      description: "Released our MVP to 50+ educational institutions across 5 countries."
    },
    {
      year: "2022",
      title: "Scaling Up",
      description: "Expanded to serve 500+ institutions with enhanced offline capabilities."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Achieved presence in 50+ countries with 10,000+ successful examinations."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched AI-powered features and advanced analytics for better insights."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      description: "Former EdTech executive with 15+ years in educational technology solutions."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      description: "Security expert and software architect specializing in offline-first systems."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Education",
      description: "Educational psychologist ensuring our platform meets pedagogical standards."
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      description: "Full-stack developer passionate about creating seamless user experiences."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-200/25 to-pink-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating geometric elements */}
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
      </div>

      {/* Main Content */}
      <main className="px-6 py-12 relative z-30 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent animate-fade-in">
                About Our Mission
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              We're revolutionizing the way examinations are conducted worldwide, making secure, 
              scalable testing accessible to educators and institutions everywhere.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                <span className="font-medium">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-800 pl-2 pr-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex p-3 items-center bg-blue-600 text-white rounded-full">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="hidden grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:bg-blue-50/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
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

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full p-2 flex flex-wrap gap-1">
              {[
                { id: "mission", label: "Our Mission" },
                { id: "values", label: "Our Values" },
                { id: "journey", label: "Our Journey" },
                { id: "team", label: "Our Team" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 mb-16 animate-slide-up">
            {activeTab === "mission" && (
              <div className="text-center max-w-4xl mx-auto animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Empowering Education Through Innovation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our mission is to democratize access to secure, reliable examination systems. 
                  We believe that every educator, regardless of their location or resources, 
                  should have access to world-class assessment tools that work both online and offline.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're not just building software – we're creating a future where examinations 
                  are fair, accessible, and secure for everyone. From individual teachers to 
                  large institutions, our platform adapts to your needs while maintaining 
                  the highest standards of security and reliability.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  What Drives Us Forward
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={index}
                        className="group hover:bg-blue-50/50 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "journey" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  Our Growth Story
                </h2>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-start gap-6 group hover:bg-blue-50/30 rounded-2xl p-6 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          {item.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  Meet Our Leadership Team
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-blue-100/50 hover:to-indigo-100/50 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600 leading-relaxed">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-400/20 to-indigo-400/20 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Examinations?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of educators and institutions who trust our platform 
              for their most critical assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 font-medium transition-all duration-300 transform hover:scale-105">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;