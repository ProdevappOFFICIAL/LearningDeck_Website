
"use client"
import React from "react";
import { Shield, Lock, Eye, Database, Bell, Users, FileText, Mail } from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "1. Who We Are",
      content: [
        "LearningDeck is designed for individual educators, exam admins, and training facilitators who want full control over exam environments — without relying on internet access",
        "This is not a school management system or student-facing platform",
        "Our platform prioritizes offline functionality and user autonomy"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "2. Account Registration & Data Options",
      content: [
        "To access LearningDeck's features, you must create an account",
        "Offline Mode: All data is stored locally on your device or local network. Nothing is synced online",
        "Cloud Sync (Optional): Sync data securely to our cloud to back up exam templates, results, and analytics",
        "You can switch between modes at any time in the desktop app settings"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "3. Information We Collect",
      content: [
        "When You Use the Website: Browser/device info (IP address, user agent, analytics cookies), Contact form details (name, email, message)",
        "When You Create an Account: Full name, Email, Password (hashed securely)",
        "When You Use the App (Offline or Synced): Exam content (questions, templates, scores), Device activity logs (only stored locally unless syncing is enabled)"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "4. How We Use Your Information",
      content: [
        "Provide and maintain your account",
        "Respond to support requests",
        "Improve product functionality",
        "Offer optional sync and backup services (if enabled)",
        "We do not use your exam content or student/session data for analytics or marketing"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5. Data Storage & Security",
      content: [
        "Offline Mode: All data stays on your device — we cannot access it",
        "Online Sync (if enabled): Your data is encrypted during transfer and at rest in secure cloud infrastructure",
        "We follow strict security practices to prevent unauthorized access"
      ]
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "6. Cookies",
      content: [
        "We use minimal cookies on our website for session persistence and anonymous usage analytics (e.g., page views)",
        "You can manage cookies via your browser settings"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "7. Your Rights",
      content: [
        "Access your account information",
        "Request data deletion",
        "Opt in or out of data syncing at any time",
        "To make a request, contact us at info@learningdeck.com"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
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
      </div>

      {/* Main Content */}
      <main className="px-6 py-12 relative z-30">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Security
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn how we collect, use, and protect your information when using LearningDeck.
            </p>

       <div className="bg-white/60 backdrop-blur-sm border border-gray-400 rounded-md scale-95 p-6 mb-12">
  <p className="text-gray-700 text-sm">
    <strong>Effective Date:</strong> June 25, 2025 • <strong>Last Updated:</strong> June 25, 2025
  </p>
</div>

          </div>

          {/* Introduction */}
          <div className="bg-white/70 backdrop-blur-sm border border-gray-400 rounded-md scale-95  p-8 mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>LearningDeck</strong> — an offline-first exam platform built for individuals, trainers, and admins. This Privacy Policy outlines how we collect, use, and protect your information when you use our website, desktop application, and services.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="grid gap-8 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-gray-400 rounded-md p-8 hover:bg-white/80 transition-all duration-300 scale-95 hover:scale-100"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Data Retention */}
          <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">8. Changes to This Policy</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy as the platform evolves. We'll notify you via email or dashboard notice for major changes. Your continued use indicates agreement to the updated policy.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us. We're here to help and ensure your privacy concerns are addressed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                info@learningdeck.com
              </button>
              <button className="bg-white/80 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
                View Data Request Form
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-sm">
              This privacy policy may be updated from time to time. We will notify you of any material changes via email or through our platform.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;