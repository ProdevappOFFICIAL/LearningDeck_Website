"use client"
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingPlans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // All possible features across all plans
  const allFeatures = [
    "1 Device Limit",
    "3 Concurrent Devices", 
    "15 Concurrent Devices",
    "1 Host Device",
    "2 Host Devices",
    "5 Host Devices",
    "1 Default Exam Interface",
    "Custom Exam Interfaces Available",
    "Unlimited Local DB Storage",
    "1 Exam Profile",
    "2 Exam Profiles",
    "5 Expandable Exam Profiles",
    "7 Days Template Usage",
    "Unlimited Template Usage",
    "AI Question Generator",
    "Community Support",
    "QR Code Support",
    "Custom Connection Port & Settings",
    "Question Importer",
    "Import DB",
    "Priority Email Support"
  ];

  const plans = [
    {
      name: "Starter/Guest",
      description: "Perfect for individual users getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: {
        included: [
          "1 Device Limit",
          "1 Host Device",
          "1 Default Exam Interface",
          "Unlimited Local DB Storage",
          "1 Exam Profile",
          "7 Days Template Usage"
        ],
        excluded: [
          "AI Question Generator",
          "Custom Exam Interfaces Available",
          "Custom Connection Port & Settings",
          "Question Importer",
          "Import DB",
          "Priority Email Support",
          "QR Code Support"
        ]
      }
    },
    {
      name: "Pro Plan",
      description: "Ideal for small teams and educators",
      monthlyPrice: 8,
      yearlyPrice: 8 * 12 * 0.8, // 20% discount for yearly
      features: {
        included: [
          "3 Concurrent Devices",
          "2 Host Devices",
          "1 Default Exam Interface",
          "Unlimited Local DB Storage",
          "2 Exam Profiles",
          "AI Question Generator",
          "Community Support",
          "QR Code Support",
          "Unlimited Template Usage"
        ],
        excluded: [
          "Custom Exam Interfaces Available",
          "Custom Connection Port & Settings",
          "Question Importer",
          "Import DB",
          "Priority Email Support"
        ]
      }
    },
    {
      name: "Standard Plan",
      description: "Perfect for larger organizations with advanced needs",
      monthlyPrice: 25,
      yearlyPrice: 25 * 12 * 0.8, // 20% discount for yearly
      features: {
        included: [
          "15 Concurrent Devices",
          "5 Host Devices",
          "Custom Exam Interfaces Available",
          "Unlimited Local DB Storage",
          "5 Expandable Exam Profiles",
          "AI Question Generator",
          "Custom Connection Port & Settings",
          "Question Importer",
          "Import DB",
          "Priority Email Support",
          "QR Code Support",
          "Unlimited Template Usage"
        ],
        excluded: []
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Page Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100/60 backdrop-blur-sm border border-blue-300/50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Pricing Page</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
        
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-blue-700 scale-75 hover:scale-100 bg-clip-text text-transparent animate-pulse">
            Select a plan that will empower your
                <br />
              </span>
              business growth
            </h1>
          
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Each package includes personalized consultation and revisions to<br />
            guarantee your satisfaction
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 flex items-center space-x-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isMonthly
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  !isMonthly
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col h-full w-full bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 hover:border-blue-300/70 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isMonthly ? plan.monthlyPrice : Math.round(plan.yearlyPrice)}
                  </span>
                  <span className="text-gray-600 ml-2">
                    / {isMonthly ? 'month' : 'year'}
                  </span>
                  {!isMonthly && plan.yearlyPrice > 0 && (
                    <span className="text-green-600 text-xs ml-2 bg-green-100 px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {/* Included Features */}
                  {plan.features.included.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  
                  {/* Excluded Features */}
                  {plan.features.excluded.map((feature, featureIndex) => (
                    <li key={`excluded-${featureIndex}`} className="flex items-center space-x-3 opacity-50">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-500 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className='flex flex-col justify-end h-full'>   
                <button className=" w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  Select This Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;