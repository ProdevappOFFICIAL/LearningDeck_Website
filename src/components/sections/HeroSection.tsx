import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8"
          )}
        >
        <div className=" text-blue-600">Hybrid</div> CBT Examination Manager 
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Secure. scalable exams Online/Offline for Individuals, Schools, Institutions
        </p>

        <div className="flex gap-[12px] justify-center">
        <a href={'https://github.com/ProdevappOFFICIAL/LearningDeck-Advanced-CBT-Exam-Manager/releases/tag/v1.0.1'}> 
        <Button className="rounded-full bg-blue-600 hover:bg-blue-400 text-white py-1" >Request Pilot Access</Button></a>
        <a href={'https://youtu.be/B-6kdSgTY8g?si=3VngJonc0RF67t0d'}>  <Button className="rounded-full py-1" variant={'outline'} > 
          See How It Works
         
       </Button> </a>
        </div>

        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
