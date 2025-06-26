"use client"
import React, { useState } from 'react';
import { ChevronRight, Calendar, User, ArrowRight, Wifi, Shield, Monitor, Database, Settings, Users, BookOpen, Laptop, X, LucideIcon } from 'lucide-react';

// Type definitions
interface FeaturedArticle {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

interface SidebarRelease {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
}

interface MainArticle {
  title: string;
  description: string;
  authors: string[];
  date: string;
  category: string;
  version: string;
  badge: string;
}

interface FeatureItem {
  icon: LucideIcon;
  bg: string;
  label: string;
}

interface BlogFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface CategoryColors {
  [key: string]: string;
}

interface BadgeColors {
  [key: string]: string;
}

type TabType = 'All' | 'Product' | 'Release' | 'How to' | 'Developer' | 'Event' | 'Company';

const DifyBlogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [selectedBlog, setSelectedBlog] = useState<MainArticle | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const tabs: TabType[] = ['All', 'Product', 'Release', 'How to', 'Developer', 'Event', 'Company'];

  const featuredArticle: FeaturedArticle = {
    title: "LearningDeck: Offline Exams, Online Reliability",
    description: "LearningDeck redefines digital assessment with a fully offline-first system — no internet required. Empower schools, training centers, and institutions to conduct seamless exams anytime, anywhere.",
    author: "Princeton Prudence",
    date: "JUN 24, 2025",
    category: "PRODUCT",
    image: "/api/placeholder/400/300"
  };

  const sidebarReleases: SidebarRelease[] = [
    {
      title: "Pilot Program: 3 Months Free for 15 Devices",
      description: "Join our pilot and get full access to LearningDeck's offline exam tech. Run exams over LAN or Wi-Fi with zero internet.",
      author: "GRACE O.",
      date: "MAY 28, 2025",
      category: "EVENT"
    },
    {
      title: "How LearningDeck Powers Exams Without the Internet",
      description: "Explore the tech behind our local server model and how we use Electron, JSON, and LAN for a fully offline-first experience.",
      author: "JAMES K.",
      date: "APR 18, 2025",
      category: "HOW TO"
    }
  ];

  const mainArticles: MainArticle[] = [
    {
      title: "LearningDeck 1.0: Built for African Institutions, Powered by Local Networks",
      description: "Version 1.0 introduces a secure, customizable, and locally hosted exam environment. Exams are created via desktop UI, distributed through LAN or hotspot, and monitored in real time. No server cost. No internet. 100% control.",
      authors: ["PRINCETON PRUDENCE", "GABRIEL AYO"],
      date: "JUN 25, 2025",
      category: "RELEASE",
      version: "v1.0",
      badge: "Offline-First Exams"
    },
    {
      title: "Why Offline-First Tech Is the Future of African EdTech",
      description: "Internet infrastructure is not enough. LearningDeck takes a bold approach by prioritizing reliability through local-first deployment — no cloud dependency.",
      authors: ["AMINA IBRAHIM"],
      date: "JUN 10, 2025",
      category: "PRODUCT",
      version: "v1.0",
      badge: "Local Reliability"
    },
    {
      title: "Inside LearningDeck's Custom Template Engine",
      description: "Our UI-driven exam builder uses Next.js to let educators build custom assessment layouts without writing a single line of code.",
      authors: ["EBUKA JOHN"],
      date: "MAY 30, 2025",
      category: "DEVELOPER",
      version: "v1.0",
      badge: "Custom UI"
    },
    {
      title: "Pilot Program Insights: How 10 Schools Ran Fully Offline Exams",
      description: "Over 10 schools tested LearningDeck's offline engine with zero internet dependency and full control over student devices.",
      authors: ["GRACE O.", "MUSA LAWAL"],
      date: "MAY 12, 2025",
      category: "EVENT",
      version: "Pilot Report",
      badge: "Field Tested"
    },
    {
      title: "How LearningDeck Blocks Unauthorized Devices on LAN",
      description: "Using IP filtering and real-time monitoring, LearningDeck prevents unknown devices from joining exam sessions, keeping assessments secure and supervised.",
      authors: ["FEMI OYE"],
      date: "APR 25, 2025",
      category: "HOW TO",
      version: "v1.0",
      badge: "Security First"
    },
    {
      title: "Developing the Local API Layer for Instant Data Sync",
      description: "We built a local REST API that syncs exam data between admin and student devices instantly — all without touching the internet.",
      authors: ["GABRIEL AYO"],
      date: "APR 18, 2025",
      category: "DEVELOPER",
      version: "v1.0",
      badge: "Low Latency"
    },
    {
      title: "LearningDeck vs Traditional Online Exam Platforms",
      description: "See how LearningDeck's offline-first model outperforms traditional platforms in reliability, cost, and accessibility — especially in Africa.",
      authors: ["PRINCETON PRUDENCE"],
      date: "MAR 28, 2025",
      category: "PRODUCT",
      version: "v1.0",
      badge: "Better Alternative"
    },
    {
      title: "Onboarding Guide: Getting Started with LearningDeck in 10 Minutes",
      description: "A quick-start guide to install, configure, and run your first secure exam using our offline desktop app and hotspot setup.",
      authors: ["KEMI ADE"],
      date: "MAR 10, 2025",
      category: "HOW TO",
      version: "v1.0",
      badge: "Quick Start"
    },
    {
      title: "Why We Chose Electron for the Admin Dashboard",
      description: "Electron.js gives us full control of local storage and hardware access — ideal for building a secure and performant offline exam admin tool.",
      authors: ["JAMES K."],
      date: "FEB 25, 2025",
      category: "DEVELOPER",
      version: "v1.0",
      badge: "Tech Stack"
    },
    {
      title: "LearningDeck is Joining the YC Startup School Demo Circuit",
      description: "We're excited to pitch LearningDeck to global mentors and investors as we scale our mission to empower African institutions.",
      authors: ["PRINCETON PRUDENCE", "GRACE O."],
      date: "FEB 10, 2025",
      category: "COMPANY",
      version: "v1.0",
      badge: "YC Journey"
    }
  ];

  const openBlogDialog = (blog: MainArticle): void => {
    setSelectedBlog(blog);
    setIsDialogOpen(true);
  };

  const closeBlogDialog = (): void => {
    setIsDialogOpen(false);
    setSelectedBlog(null);
  };

  const filteredArticles: MainArticle[] = activeTab === 'All' 
    ? mainArticles 
    : mainArticles.filter(article => 
        article.category.toLowerCase() === activeTab.toLowerCase().replace(' ', '')
      );

  const getCategoryColor = (category: string): string => {
    const colors: CategoryColors = {
      'RELEASE': 'bg-green-50 text-green-600',
      'PRODUCT': 'bg-blue-50 text-blue-600',
      'DEVELOPER': 'bg-purple-50 text-purple-600',
      'EVENT': 'bg-orange-50 text-orange-600',
      'HOW TO': 'bg-indigo-50 text-indigo-600',
      'COMPANY': 'bg-pink-50 text-pink-600'
    };
    return colors[category] || 'bg-gray-50 text-gray-600';
  };

  const getBadgeColor = (badge: string): string => {
    const colors: BadgeColors = {
      'Offline-First Exams': 'bg-green-100 text-green-700',
      'Local Reliability': 'bg-blue-100 text-blue-700',
      'Custom UI': 'bg-purple-100 text-purple-700',
      'Field Tested': 'bg-orange-100 text-orange-700',
      'Security First': 'bg-red-100 text-red-700',
      'Low Latency': 'bg-teal-100 text-teal-700',
      'Better Alternative': 'bg-yellow-100 text-yellow-700',
      'Quick Start': 'bg-indigo-100 text-indigo-700',
      'Tech Stack': 'bg-gray-100 text-gray-700',
      'YC Journey': 'bg-pink-100 text-pink-700'
    };
    return colors[badge] || 'bg-gray-100 text-gray-700';  
  };

  const featureIcons: FeatureItem[] = [
    { icon: Monitor, bg: 'bg-blue-500', label: 'Desktop' },
    { icon: Wifi, bg: 'bg-green-500', label: 'Offline' },
    { icon: Shield, bg: 'bg-red-500', label: 'Secure' },
    { icon: Database, bg: 'bg-purple-500', label: 'Local' },
    { icon: Users, bg: 'bg-orange-500', label: 'Multi-user' },
    { icon: Settings, bg: 'bg-gray-600', label: 'Config' },
    { icon: BookOpen, bg: 'bg-indigo-500', label: 'Exams' },
    { icon: Laptop, bg: 'bg-teal-500', label: 'Cross-platform' },
    { icon: Monitor, bg: 'bg-pink-500', label: 'Monitor' },
    { icon: Shield, bg: 'bg-cyan-500', label: 'Protected' },
    { icon: Database, bg: 'bg-yellow-500', label: 'Storage' },
    { icon: Users, bg: 'bg-emerald-500', label: 'Students' }
  ];

  const blogFeatures: BlogFeature[] = [
    { icon: Monitor, title: 'Desktop Application', desc: 'Native Electron-based admin interface for full control' },
    { icon: Wifi, title: 'Offline-First Design', desc: 'Zero internet dependency during exam execution' },
    { icon: Shield, title: 'Security Features', desc: 'IP filtering and device monitoring for secure assessments' },
    { icon: Database, title: 'Local Data Storage', desc: 'All exam data stored and processed locally' },
    { icon: Users, title: 'Multi-Device Support', desc: 'Simultaneous connections via LAN or hotspot' },
    { icon: Settings, title: 'Customizable Templates', desc: 'UI-driven exam builder with custom layouts' }
  ];

  return (
    <div className="flex flex-col h-full w-full relative bg-gradient-to-br from-gray-50 to-blue-50">
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

        {/* Orbiting circles */}
        <div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-600/80 rounded-full animate-spin"
          style={{ transformOrigin: "50px 50px", animationDuration: "15s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-600/80 rounded-full animate-spin"
          style={{
            transformOrigin: "40px 40px",
            animationDuration: "12s",
            animationDirection: "reverse",
          }}
        ></div>

        {/* Gradient rings */}
        <div
          className="absolute top-1/4 right-1/5 w-32 h-32 border border-gray-300/30 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/5 w-24 h-24 border border-blue-400/40 rounded-full animate-ping"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>

        {/* Morphing blobs */}
        <div
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-violet-300/40 to-fuchsia-300/40 rounded-full blur-xl animate-pulse transform scale-110"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-teal-300/35 to-green-300/35 rounded-full blur-lg animate-pulse transform scale-125"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-full mx-auto px-6 py-12">
        {/* Header with staggered animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-2 transform hover:scale-[1.02] transition-all duration-700 ease-out">
            <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500/60 rounded-lg p-8 text-white relative overflow-hidden  hover:-3xl transition- duration-500">
              {/* Educational background elements */}
        
              
              <div className="relative z-10">
                <span className="inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slideInUp">
                  {featuredArticle.category}
                </span>
                <h1 className="flex items-center w-fit text-4xl font-bold mb-6 leading-tight animate-slideInUp" style={{animationDelay: '0.2s'}}>
                 <img
                      src={"/lds_logo.png"}
                      alt="Logo"
                      className=" bg-blend-multiply sm:scale-95  px-2 py-[1px]"
                    /> {featuredArticle.title}
                </h1>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed animate-slideInUp" style={{animationDelay: '0.4s'}}>
                  {featuredArticle.description}
                </p>
                
                {/* LearningDeck Feature Icons Grid */}
                <div className="grid grid-cols-4 gap-3 mb-8 max-w-sm animate-slideInUp" style={{animationDelay: '0.6s'}}>
                  {[
                    { icon: Monitor, bg: 'bg-blue-500', label: 'Desktop' },
                    { icon: Wifi, bg: 'bg-green-500', label: 'Offline' },
                    { icon: Shield, bg: 'bg-red-500', label: 'Secure' },
                    { icon: Database, bg: 'bg-purple-500', label: 'Local' },
                    { icon: Users, bg: 'bg-orange-500', label: 'Multi-user' },
                    { icon: Settings, bg: 'bg-gray-600', label: 'Config' },
                    { icon: BookOpen, bg: 'bg-indigo-500', label: 'Exams' },
                    { icon: Laptop, bg: 'bg-teal-500', label: 'Cross-platform' },
                    { icon: Monitor, bg: 'bg-pink-500', label: 'Monitor' },
                    { icon: Shield, bg: 'bg-cyan-500', label: 'Protected' },
                    { icon: Database, bg: 'bg-yellow-500', label: 'Storage' },
                    { icon: Users, bg: 'bg-emerald-500', label: 'Students' }
                  ].map((item, index) => (
                    <div key={index} className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer group">
                      <div className={`w-8 h-8 ${item.bg} rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-blue-100 animate-slideInUp" style={{animationDelay: '0.8s'}}>
                  <User className="w-5 h-5 mr-2" />
                  <span className="mr-6 font-medium">{featuredArticle.author}</span>
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{featuredArticle.date}</span>
                </div>
              </div>
              
              {/* Enhanced LearningDeck Logo/Icon */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 animate-eduFloat">
                <div className="w-36 h-36 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center -2xl hover:rotate-12 transition-transform duration-500">
                 <img
                      src={"/lds_logo.png"}
                      alt="Logo"
                      className=" bg-blend-multiply sm:scale-95  px-2 py-[1px]"
                    />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {sidebarReleases.map((release, index) => (
              <div 
                key={index} 
                className="bg-white rounded-md p-6 -lg border border-gray-400 hover:-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 animate-slideInRight"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(release.category)}`}>
                  {release.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 text-lg">
                  {release.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {release.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-3"></div>
                    <span className="mr-3 font-medium">{release.author}</span>
                    <span className="text-gray-300">•</span>
                    <span className="ml-3">{release.date}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <div className="mb-12">
          <nav className="flex space-x-1 bg-white p-2 rounded-full border border-gray-400">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm font-semibold transition-all duration-300 rounded-full relative overflow-hidden ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white -lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-blue-700 opacity-20"></div>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Enhanced Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 -lg border border-gray-400 hover:-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-3 animate-slideInUp"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openBlogDialog(article)}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(article.badge)}`}>
                    {article.badge}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold -lg">
                    {article.version}
                  </span>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {article.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="flex -space-x-2 mr-4">
                    {article.authors.map((_, authorIndex) => (
                      <div key={authorIndex} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">{article.authors.join(' & ')}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Dialog Modal */}
      {isDialogOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideInUp">
            {/* Dialog Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm`}>
                  {selectedBlog.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(selectedBlog.badge)}`}>
                  {selectedBlog.badge}
                </span>
              </div>
              <button 
                onClick={closeBlogDialog}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Blog Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedBlog.title}
              </h1>

              {/* Author and Date Info */}
            {/* Author and Date Info */}
              <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
                <div className="flex -space-x-2 mr-4">
                  {selectedBlog.authors.map((_, authorIndex) => (
                    <div key={authorIndex} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selectedBlog.authors.join(' & ')}</p>
                  <p className="text-gray-500 text-sm">{selectedBlog.date} • {selectedBlog.version}</p>
                </div>
              </div>

              {/* Blog Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedBlog.description}
                </p>
              </div>

              {/* Sample Blog Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  LearningDeck represents a paradigm shift in educational technology, specifically designed for African institutions where reliable internet connectivity remains a challenge. Our offline-first approach ensures that educational assessments can be conducted seamlessly regardless of network conditions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: Monitor, title: 'Desktop Application', desc: 'Native Electron-based admin interface for full control' },
                    { icon: Wifi, title: 'Offline-First Design', desc: 'Zero internet dependency during exam execution' },
                    { icon: Shield, title: 'Security Features', desc: 'IP filtering and device monitoring for secure assessments' },
                    { icon: Database, title: 'Local Data Storage', desc: 'All exam data stored and processed locally' },
                    { icon: Users, title: 'Multi-Device Support', desc: 'Simultaneous connections via LAN or hotspot' },
                    { icon: Settings, title: 'Customizable Templates', desc: 'UI-driven exam builder with custom layouts' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Built on a robust technology stack including Electron.js for the desktop application, Next.js for the web interface, and a custom local REST API for real-time data synchronization between devices. The system operates entirely within a local network environment, eliminating dependency on external servers or cloud services.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h3 className="font-semibold text-blue-900 mb-2">Why This Matters</h3>
                  <p className="text-blue-800">
                    Traditional online exam platforms fail when internet connectivity is unreliable. LearningDeck ensures educational continuity by prioritizing local-first architecture, making it ideal for schools and training centers across Africa.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Download & Install</h4>
                      <p className="text-gray-600 text-sm">Install the LearningDeck desktop application on your admin device</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Create Exam</h4>
                      <p className="text-gray-600 text-sm">Use the visual exam builder to create custom assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Deploy Locally</h4>
                      <p className="text-gray-600 text-sm">Share via LAN or create a hotspot for student devices to connect</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitor & Evaluate</h4>
                      <p className="text-gray-600 text-sm">Real-time monitoring and instant result compilation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Try LearningDeck
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                    View Documentation
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span className="text-sm">Share this article</span>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                      <span className="text-xs">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes eduFloat {
          0%, 100% {
            transform: translateY(-10px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(5deg);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-eduFloat {
          animation: eduFloat 6s ease-in-out infinite;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DifyBlogPage;