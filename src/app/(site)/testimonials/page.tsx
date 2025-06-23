"use client"
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Brian Ramirez",
      role: "Financial Analyst",
      avatar: "BR",
      review: "This banking app has completely transformed how I manage my finances. It's user-friendly and efficient!",
      rating: 5,
      bgColor: "bg-purple-500"
    },
    {
      name: "David Anderson",
      role: "Marketing Manager",
      avatar: "DA",
      review: "I love the instant transfer feature! It makes sending money to friends and family a breeze.",
      rating: 5,
      bgColor: "bg-gray-600"
    },
    {
      name: "James Carter",
      role: "Graphic Designer",
      avatar: "JC",
      review: "The budgeting tools are fantastic. They've really helped me keep track of my spending.",
      rating: 5,
      bgColor: "bg-orange-500"
    },
    {
      name: "Jane Doe",
      role: "Data Scientist",
      avatar: "JD",
      review: "I've never felt more secure about my online banking. The security features are top-notch!",
      rating: 5,
      bgColor: "bg-teal-500"
    },
    {
      name: "Sarah Wilson",
      role: "UI/UX Designer",
      avatar: "SW",
      review: "Setting up automated savings has been a game-changer for me. I save more money than I ever thought possible.",
      rating: 4,
      bgColor: "bg-gray-500"
    },
    {
      name: "John Mitchell",
      role: "Product Manager",
      avatar: "JM",
      review: "I appreciate the transparency in fees. No hidden charges mean I can manage my finances with confidence.",
      rating: 5,
      bgColor: "bg-blue-500"
    },
    {
      name: "Daniel Walker",
      role: "Web Developer",
      avatar: "DW",
      review: "Automated savings has changed my life! I'm saving more than I ever thought possible.",
      rating: 5,
      bgColor: "bg-gray-700"
    },
    {
      name: "William Johnson",
      role: "Sales Executive",
      avatar: "WJ",
      review: "The virtual debit card feature gives me peace of mind when shopping online. Highly recommend!",
      rating: 5,
      bgColor: "bg-green-600"
    },
    {
      name: "Joshua Wilson",
      role: "Business Consultant",
      avatar: "JW",
      review: "I can't believe how quick and easy it is to send money internationally. It saves me so much time.",
      rating: 5,
      bgColor: "bg-amber-600"
    }
  ];

  // Double the testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-all duration-500 ${
          index < rating ? 'text-yellow-400 fill-yellow-400 scale-100' : 'text-gray-300 scale-90'
        }`}
        style={{
          animationDelay: `${index * 100}ms`
        }}
      />
    ));
  };

  const TestimonialCard = ({ testimonial, index, row = 1 }) => (
    <div
      className={`
        bg-white/80 backdrop-blur-sm rounded-2xl p-6 
        transition-all duration-500 border border-white/20 hover:border-blue-200/50
        hover:bg-white/90 hover:-translate-y-2 hover:scale-105
        min-w-[280px] max-w-[320px] flex-shrink-0
        group relative overflow-hidden
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}
      `}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Floating particles effect */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
      
      <div className="relative z-10">
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className={`
            w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center 
            text-white font-semibold text-sm transition-all duration-300
            group-hover:scale-110 group-hover:shadow-lg
          `}>
            {testimonial.avatar}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-sm transition-colors duration-300 group-hover:text-blue-600">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 text-xs transition-colors duration-300 group-hover:text-gray-600">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Review */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-800">
          "{testimonial.review}"
        </p>

        {/* Rating */}
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 py-16 px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Testimonials Badge */}
        <div className={`
          flex justify-center mb-8 transition-all duration-1000 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}>
          <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-600 px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-3 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Testimonials</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000 delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Real Feedback from Satisfied
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Customers
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover what real clients have to say about how our services have helped<br />
            them achieve their goals and manage their finances effortlessly.
          </p>
        </div>

        {/* First Row - Scrolling Left to Right */}
        <div className={`
          mb-8 transition-all duration-1000 delay-600
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="relative overflow-hidden">
            <div 
              className="flex space-x-6 animate-scroll-right"
              style={{
                width: 'fit-content',
                animation: 'scrollRight 40s linear infinite'
              }}
            >
              {duplicatedTestimonials.slice(0, 10).map((testimonial, index) => (
                <TestimonialCard 
                  key={`row1-${index}`} 
                  testimonial={testimonial} 
                  index={index} 
                  row={1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Scrolling Right to Left */}
        <div className={`
          transition-all duration-1000 delay-900
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="relative overflow-hidden">
            <div 
              className="flex space-x-6 animate-scroll-left"
              style={{
                width: 'fit-content',
                animation: 'scrollLeft 45s linear infinite'
              }}
            >
              {duplicatedTestimonials.slice(5, 15).map((testimonial, index) => (
                <TestimonialCard 
                  key={`row2-${index}`} 
                  testimonial={testimonial} 
                  index={index} 
                  row={2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        /* Hide scrollbars */
        .overflow-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;