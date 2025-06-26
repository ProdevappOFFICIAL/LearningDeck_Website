"use client";
import PricingPage from "./pricing/page";
import EuphoriaFooter from "./footer/page";
import TestimonialsSection from "./testimonials/page";
import BankingPage from "@/components/common/Features";
import Footer from "@/components/common/Footer";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from 'lucide-react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex flex-col w-full h-full select-none">
      <header className="flex w-full px-6 py-4 z-50 fixed bg-blue-200/20 backdrop-blur-3xl border-b border-blue-400/40">
      <nav className="flex flex-row items-center justify-between w-full">
        {/* Logo & Nav Links */}

        <div className="flex w-fit space-x-4 items-center">    <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-gray-900">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex items-center space-x-2 rounded-full pr-4 pl-2">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-300/20 rounded-md sm:rounded-lg flex items-center justify-center">
              <a href="/">
                <img
                  src="/lds_logo.png"
                  alt="Logo"
                  className="rounded-full bg-blend-multiply sm:scale-95 px-2 py-[1px]"
                />
              </a>
            </div>
            <span className="text-gray-700 text-sm sm:text-xl font-semibold hover:cursor-pointer">
              <a href="/">LearningDeck</a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 pl-10">
            {['Blog', 'Apps', 'Pricing', 'About', 'Join our Pilot Program', 'Privacy Policy'].map((item, idx) => {
              const hrefs = ['/blog', '/apps', '/pricing', '/about', '/pilot', '/policy']
              return (
                <a
                  key={idx}
                  href={hrefs[idx]}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div></div>
         

        {/* Hamburger Toggle Button (Mobile Only) */}
    

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4 text-sm">
          <button className="flex text-gray-700 hover:text-gray-900 px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:border-gray-400 transition-colors">
            <a href="/auth/signin">Sign in</a>
          </button>
          <button className="flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 sm:py-2 rounded-full transition-colors">
            <a href="/auth/signin">Register</a>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg border-t-2 border-blue-300 shadow-lg">
          <div className="flex flex-col space-y-3 p-4">
            <a href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </a>
            <a href="/apps" className="text-gray-700 hover:text-gray-900">
              Apps
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/pilot" className="text-gray-700 hover:text-gray-900">
              Join our Pilot Program
            </a>
            <a href="/policy" className="text-gray-700 hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
        </div>
      )}
    </header>
      <div className="w-full h-full mt-10"> {children}</div>
      <Footer />
      <EuphoriaFooter />
    </div>
  );
};

export default RootLayout;
