"use client"
import React, { useState } from "react";
import { ArrowRight, User, GraduationCap, Mail, Phone, MapPin, Users, BookOpen, CheckCircle, ChevronLeft } from "lucide-react";

const JoinPilotProgram = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    location: "",
    studentsCount: "",
    examTypes: [],
    experience: "",
    goals: "",
    hearAbout: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExamTypeChange = (examType) => {
    setFormData(prev => ({
      ...prev,
      examTypes: prev.examTypes.includes(examType)
        ? prev.examTypes.filter(type => type !== examType)
        : [...prev.examTypes, examType]
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Same background animations as landing page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-30">
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
        </div>

        <div className="flex items-center justify-center h-full relative z-30">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Your application has been submitted successfully. We'll review your information and get back to you within 2-3 business days.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setUserType("");
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  organization: "",
                  position: "",
                  location: "",
                  studentsCount: "",
                  examTypes: [],
                  experience: "",
                  goals: "",
                  hearAbout: ""
                });
              }}
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent">
                Join Our Pilot Program
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience our revolutionary offline exam system. Help us shape the future of secure, scalable examinations.
            </p>
          </div>

          {/* User Type Selection */}
          {!userType && (
            <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in">
              <button
                onClick={() => setUserType("individual")}
                className="group bg-white/80 backdrop-blur-sm border border-gray-400 rounded-md p-8 text-center hover:bg-blue-50/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Individual</h3>
                <p className="text-gray-600">Perfect for educators, trainers, or individual professionals</p>
              </button>

              <button
                onClick={() => setUserType("school")}
                className="group bg-white/80 backdrop-blur-sm border border-gray-400 rounded-md p-8 text-center hover:bg-indigo-50/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">School/Institution</h3>
                <p className="text-gray-600">Ideal for schools, universities, and educational institutions</p>
              </button>
            </div>
          )}

          {/* Form */}
          {userType && (
            <div className="bg-white/80 backdrop-blur-sm border border-gray-400 rounded-md p-8 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {userType === "individual" ? "Individual Application" : "Institution Application"}
                </h2>
                <button
                  onClick={() => setUserType("")}
                  className="flex items-center w-fit bg-blue-600 scale-90 hover:scale-100 transition-all  rounded-full px-3 py-1 text-gray-100  duration-400"
                >
               <ChevronLeft/>   Change Type
                </button>
              </div>

              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Conditional Fields */}
                {userType === "school" && (
                  <>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Institution Name *</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter institution name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Your Position *</label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., Principal, IT Director"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Number of Students</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="studentsCount"
                            value={formData.studentsCount}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select range</option>
                            <option value="1-50">1-50 students</option>
                            <option value="51-200">51-200 students</option>
                            <option value="201-500">201-500 students</option>
                            <option value="501-1000">501-1000 students</option>
                            <option value="1000+">1000+ students</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {userType === "individual" && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Professional Role</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Teacher, Trainer, Consultant"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="City, State/Province, Country"
                    />
                  </div>
                </div>

                {/* Exam Types */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Types of Exams You Conduct *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Academic Tests", "Certification Exams", "Entrance Exams", "Professional Assessments", "Skills Tests", "Other"].map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.examTypes.includes(type)}
                          onChange={() => handleExamTypeChange(type)}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-200"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Current Exam System Experience</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your experience</option>
                    <option value="paper-based">Primarily paper-based exams</option>
                    <option value="online-only">Online exam platforms</option>
                    <option value="hybrid">Mix of online and offline</option>
                    <option value="no-digital">No digital exam experience</option>
                  </select>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">What are your main goals with our pilot program?</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your objectives, challenges you want to solve, or specific features you're interested in..."
                  />
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select an option</option>
                    <option value="search-engine">Search Engine</option>
                    <option value="social-media">Social Media</option>
                    <option value="colleague">Colleague/Friend</option>
                    <option value="conference">Conference/Event</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-4 rounded-md flex items-center justify-center space-x-2 font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
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

export default JoinPilotProgram;