import React from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Zap, 
  PiggyBank, 
  Calculator, 
  Shield 
} from 'lucide-react';

const BankingPage: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Instant Exam Setup",
      description: "Teachers can create and launch exams in minutes without any coding"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Offline-First Technology",
      description: "Run secure exams entirely offline using Wi-Fi, LAN, or mobile hotspot"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Device Management",
      description: "Monitor and control all connected devices in real-time from your dashboard"
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
      title: "Local Data Storage",
      description: "All exam data stays on your local network - no cloud dependencies"
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Custom Templates",
      description: "Create personalized exam interfaces with our Next.js-powered templates"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Monitored",
      description: "IP-based device restrictions with real-time connection monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
    
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Run Secure Exams Anywhere —
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Even Without Internet
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LearningDeck turns any local network into an exam server. No coding. No internet. 
            100% exam control designed for African institutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-400"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon container with gradient background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
    
      </main>

      {/* Footer */}
  
    </div>
  );
};

export default BankingPage;