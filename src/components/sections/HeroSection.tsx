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
        <div className=" text-blue-600">Hybrid Advanced </div> CBT Exam Manager
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Secure. scalable exams Online/Offline for Schools across Web, Desktop and Mobile
        </p>

        <div className="flex gap-[12px] justify-center">
        <Button className="rounded-full bg-blue-600 hover:bg-blue-400" > Try Free Pilot</Button>
        <Button className="rounded-full" variant={'outline'} > 
          <Link href={'/demo'}>  See Demo 
          </Link>
       </Button>
        </div>

        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
