import NavBar from "@/components/common/NavBar";
import AlertSection from "@/components/sections/AlertSection";
import PricingPage from "./pricing/page";
import EuphoriaFooter from "./footer/page";
import TestimonialsSection from "./testimonials/page";
import BankingPage from "@/components/common/Features";
import Footer from "@/components/common/Footer";

   const RootLayout = (
    {children}:
    {
    children: React.ReactNode;
   }) => {
    return (
 <div className="flex flex-col w-full h-full">
   
    
    
    {children}
    <BankingPage/>
    <TestimonialsSection/>
    <PricingPage/>
    <Footer/>
    <EuphoriaFooter/>
    </div> );
   }
    
   export default RootLayout;