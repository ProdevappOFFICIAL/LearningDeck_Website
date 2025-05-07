import CRMSection from "@/components/sections/CRMSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MoreFeaturesSection from "@/components/sections/MoreFeaturesSection";
import SecurityScaleSection from "@/components/sections/SecurityScaleSection";

export default function Home() {
  return (
    <main>
   
      <div className="mt-8 md:mt-[120px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px]">
        <HeroSection />
       
        <CRMSection />
       
     
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col">
        <MoreFeaturesSection />
      
          <SecurityScaleSection />
        <FooterSection />
      </div>
    </main>
  );
}
