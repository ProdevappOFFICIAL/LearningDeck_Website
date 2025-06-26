"use client"
import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Building2,
  Users,
  BookOpen,
  Shield,
  Wifi,
  Monitor,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react';

const LearningDeckAudience: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

const audiences = [
  {
    id: 'individuals',
    icon: <User className="w-12 h-12" />,
    title: "Individual Educators",
    subtitle: "Private Tutors & Trainers",
    description:
      "LearningDeck empowers independent educators to deliver professional, secure exams — without needing internet or IT support.",
    features: [
      "Create & host exams in under 5 minutes",
      "No internet or tech skills needed",
      "Students connect via simple local Wi-Fi",
      "Designed for personal teaching environments"
    ],
    benefits: [
      "Cut exam prep time dramatically",
      "Prevent cheating with offline control",
      "Deliver polished, exam-ready interfaces",
      "Let technology handle the setup — you focus on teaching"
    ],
    image: "👩‍🏫",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    id: 'schools',
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Schools & Academies",
    subtitle: "Primary & Secondary Education",
    description:
      "For schools that want reliable, internet-free exams with real-time monitoring — all from a single desktop app.",
    features: [
      "Host exams across multiple classrooms",
      "Monitor student devices in real-time",
      "Customize UI with school branding",
      "Easily manage student data locally"
    ],
    benefits: [
      "Simplify school-wide exam logistics",
      "Ensure fair and consistent exam delivery",
      "Reduce costs by eliminating cloud dependence",
      "Protect academic integrity in every session"
    ],
    image: "🏫",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    id: 'institutions',
    icon: <Building2 className="w-12 h-12" />,
    title: "Higher Institutions",
    subtitle: "Universities, Polytechnics & Colleges",
    description:
      "LearningDeck is built for scale — powering secure, offline exams across large campuses and academic departments.",
    features: [
      "Campus-wide offline deployment",
      "Detailed performance analytics",
      "Supports integration with internal systems",
      "Coordinate exams across faculties"
    ],
    benefits: [
      "Scale to thousands of concurrent students",
      "Get insights into exam performance and compliance",
      "Dramatically reduce cheating through network isolation",
      "Equip your institution with modern, future-ready tech"
    ],
    image: "🏛️",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  }
];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

   

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Built for
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Every Educator
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From individual tutors to major universities, LearningDeck scales to meet your examination needs
          </p>
        </div>

        {/* Stats Section */}
 

        {/* Audience Sections */}
        <div className="space-y-20">
          {audiences.map((audience, index) => (
            <div 
              key={audience.id}
              className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${audience.bgGradient} rounded-md p-8 md:p-12 overflow-hidden group hover:-2xl transition-all duration-500 border border-gray-400`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`relative z-10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${audience.gradient} rounded-2xl flex items-center justify-center text-white mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        {audience.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-1">{audience.title}</h2>
                        <p className="text-lg text-gray-600">{audience.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {audience.description}
                    </p>

                    {/* Features & Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Star className="w-5 h-5 text-yellow-500 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {audience.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {audience.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <button className={`bg-gradient-to-r ${audience.gradient} text-white px-8 py-3 rounded-xl font-semibold hover:-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center group`}>
                        Get Started for {audience.title}
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30 group-hover:bg-white/30 transition-all duration-500">
                      <div className="text-center">
                        <div className="text-8xl mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {audience.image}
                        </div>
                        <div className={`w-24 h-1 bg-gradient-to-r ${audience.gradient} rounded-full mx-auto transform transition-all duration-300 group-hover:w-32`}></div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce delay-300">
                        <Wifi className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce delay-700">
                        <Shield className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
 
      </main>
    </div>
  );
};

export default LearningDeckAudience;