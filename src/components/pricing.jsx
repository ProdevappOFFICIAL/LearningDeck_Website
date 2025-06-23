import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for larger organizations with advanced needs",
      price: "$0",
      period: "per month",
      features: [
        "Account Aggregation",
        "Expense Tracking",
        "Basic Analytics System",
        "Budgeting Tools",
        "24/7 Customer Support"
      ]
    },
    {
      name: "Growth Plan",
      description: "Ideal for growing startups and mid-sized companies",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Starter Plan",
        "Advanced Budgeting Tools",
        "Customizable Dashboards",
        "Transaction Insights",
        "Enhanced Security"
      ]
    },
    {
      name: "Business Plan",
      description: "Perfect for larger organizations with advanced needs",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Growth Plan",
        "Investment Tracking",
        "Integration Services",
        "24/7 VIP Support",
        "Premium Security"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Page Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Pricing Page</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Select a plan that will empower your<br />
            business growth
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Each package includes personalized consultation and revisions to<br />
            guarantee your satisfaction
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-1 flex items-center space-x-1">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isMonthly
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  !isMonthly
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
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
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Select This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;