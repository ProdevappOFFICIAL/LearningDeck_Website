"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Wifi, Shield, Monitor, Users, Rocket } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Does LearningDeck work without internet?",
    answer: "Absolutely. LearningDeck is built offline-first — exams run entirely on your local Wi-Fi, LAN, or hotspot. No internet required at any point.",
    icon: <Wifi className="w-5 h-5 text-blue-500" />
  },
  {
    id: 2,
    question: "How secure is the exam environment?",
    answer: "Highly secure. Admins can restrict access by IP, monitor connected devices, and block unknown users. Enhanced features like tamper logs and sandboxed browsers are in development.",
    icon: <Shield className="w-5 h-5 text-green-500" />
  },
  {
    id: 3,
    question: "What do I need to start using LearningDeck?",
    answer: "You only need: One computer (to host the exam server), A local network (Wi-Fi or LAN), and The LearningDeck desktop app. No coding or special hardware needed.",
    icon: <Monitor className="w-5 h-5 text-purple-500" />
  },
  {
    id: 4,
    question: "Can students cheat on the platform?",
    answer: "Cheating is minimized, not eliminated. We recommend pairing LearningDeck with: Physical supervision, Kiosk mode browsers, or School-owned devices. We're also building features to further lock down exam environments.",
    icon: <Users className="w-5 h-5 text-orange-500" />
  },
  {
    id: 5,
    question: "How do I join the pilot program or upgrade later?",
    answer: "Join the 3-month free pilot by applying here. Afterward, you'll get affordable upgrade options designed for African institutions — with flexible pricing and added support.",
    icon: <Rocket className="w-5 h-5 text-red-500" />
  }
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about LearningDeck's offline-first exam platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen(item.id)}
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {isOpen(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pl-16">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default FAQSection;