"use client";
import PricingPage from "./pricing/page";
import EuphoriaFooter from "./footer/page";
import TestimonialsSection from "./testimonials/page";
import BankingPage from "@/components/common/Features";
import Footer from "@/components/common/Footer";
import { usePathname } from "next/navigation";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full select-none">
      <header className="flex w-full px-6 py-4  z-50 fixed backdrop-blur-3xl bg-transparent">
        <nav className="flex flex-row items-center justify-between w-full ">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="flex items-center space-x-2  rounded-full pr-4 pl-2  ">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-md sm:rounded-lg  flex items-center justify-center ">
                <div className="text-gray-800 font-bold ">
                  <a href="/">
                    <img
                      src={"/lds_logo.png"}
                      alt="Logo"
                      className="rounded-full bg-blend-multiply sm:scale-95  px-2 py-[1px]"
                    />
                  </a>
                </div>
              </div>

              <span className="text-gray-700 text-sm  sm:text-xl font-semibold hover:cursor-pointer">
                <a href="/">LearningDeck</a>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 pl-10">
              <a
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </a>
              <a
                href="/apps"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Apps
              </a>
              <a
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="/pilot"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Join our Pilot Program
              </a>
              <a
                href="/policy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
             Privacy Policy
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4  text-sm">
            <button className="flex text-gray-700 hover:text-gray-900 px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:border-gray-400 transition-colors">
             <a href="/auth/signin">
               Sign in
             </a>
           
            </button>
            <button className="flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 sm:py-2  rounded-full transition-colors">
                <a href="/auth/signin">
                  Register
                </a>
            
            </button>
          </div>
        </nav>
      </header>
      <div className="w-full h-full mt-10"> {children}</div>
      <Footer />
      <EuphoriaFooter />
    </div>
  );
};

export default RootLayout;
